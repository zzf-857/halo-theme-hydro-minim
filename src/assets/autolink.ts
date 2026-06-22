/**
 * 自动识别内容区域内的纯文本链接与 Markdown 链接，并转换为可点击的超链接
 */
export function initAutoLinks() {
  // 目标容器选择器（文章正文、自定义页面、瞬间动态内容）
  const selectors = ['.hydro-prose', '.hydro-moment__content'];
  
  // 排除的敏感标签，绝不扫描其中的文本
  const ignoreTags = ['A', 'PRE', 'CODE', 'SCRIPT', 'STYLE', 'TEXTAREA', 'INPUT', 'BUTTON'];

  // 统一的链接匹配正则：
  // 捕获组 1: Markdown 链接格式 [text](url)
  // 捕获组 2: Markdown 链接文字
  // 捕获组 3: Markdown 链接 URL
  // 捕获组 4: 纯 URL 链接格式
  const linkRegex = /(\[([^\]]+)\]\((https?:\/\/[^\s)]+)\))|(https?:\/\/[^\s<)]+[^.,;?!\s<()])/gi;

  function processElement(element: HTMLElement) {
    // 避免重复解析
    if (element.dataset.autolinkProcessed === 'true') {
      return;
    }
    element.dataset.autolinkProcessed = 'true';

    const walk = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        // 检查所有祖先节点，如果祖先包含任何被忽略的标签，则拒绝匹配
        let parent = node.parentNode;
        while (parent && parent !== element) {
          if (ignoreTags.includes((parent as Element).tagName)) {
            return NodeFilter.FILTER_REJECT;
          }
          parent = parent.parentNode;
        }
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    const textNodes: Text[] = [];
    let currentNode = walk.nextNode();
    while (currentNode) {
      textNodes.push(currentNode as Text);
      currentNode = walk.nextNode();
    }

    for (const node of textNodes) {
      const text = node.nodeValue;
      if (!text || !text.includes('http')) {
        continue;
      }

      const parts: Node[] = [];
      let lastIndex = 0;
      let match;

      // 重置全局正则匹配指针
      linkRegex.lastIndex = 0;

      while ((match = linkRegex.exec(text)) !== null) {
        const matchIndex = match.index;
        
        // 放入匹配前多余的文本
        if (matchIndex > lastIndex) {
          parts.push(document.createTextNode(text.substring(lastIndex, matchIndex)));
        }

        const isMarkdownLink = !!match[1];
        const href = isMarkdownLink ? match[3] : match[4];
        const display = isMarkdownLink ? match[2] : match[4];

        if (href) {
          const anchor = document.createElement('a');
          anchor.href = href;
          anchor.textContent = display;
          anchor.target = '_blank';
          anchor.rel = 'noopener noreferrer';
          
          // 添加特定的类名以便于 CSS 样式控制，并注入点缀样式
          anchor.classList.add('hydro-autolink');
          anchor.style.textDecoration = 'underline';
          anchor.style.textDecorationStyle = 'dashed';
          
          parts.push(anchor);
        }

        lastIndex = linkRegex.lastIndex;
      }

      // 放入匹配后多余的文本
      if (lastIndex < text.length) {
        parts.push(document.createTextNode(text.substring(lastIndex)));
      }

      // 如果有任何被拆分的子节点，将原 TextNode 进行替换
      if (parts.length > 0) {
        const fragment = document.createDocumentFragment();
        parts.forEach(part => fragment.appendChild(part));
        node.parentNode?.replaceChild(fragment, node);
      }
    }
  }

  // 1. 首屏渲染时已存在的元素进行转换
  selectors.forEach(selector => {
    document.querySelectorAll<HTMLElement>(selector).forEach(processElement);
  });

  // 2. 利用 MutationObserver 监听动态内容变化（如瞬间分页异步加载、新评论插入等）
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type === 'childList') {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const el = node as HTMLElement;
            
            // 检查插入的元素本身是否需要处理
            selectors.forEach(selector => {
              if (el.matches(selector)) {
                processElement(el);
              }
              // 检查插入的元素内部是否包含需要处理的子容器
              el.querySelectorAll<HTMLElement>(selector).forEach(processElement);
            });
          }
        });
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}
