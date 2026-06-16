import{n as e,r as t,t as n}from"./vendor~archives~author~bangumis~categories~category~doc-catalog~doc~docs~equipments~friends~j952rvmq-QqzAlrCV.js";var r={floatingGap:8,floatingMaxWidth:224,viewportPadding:16};function i(e,t,n={}){if(e.width<=0||e.height<=0||t.width<=0)return null;let i=n.viewportPadding??r.viewportPadding,a=n.floatingGap??r.floatingGap,o=n.floatingMaxWidth??r.floatingMaxWidth,s=Math.max(0,t.width-i*2),c=Math.min(o,s);if(c<=0)return null;let l=e.left+e.width/2,u=Math.min(Math.max(l-c/2,i),t.width-i-c),d=Math.max(e.bottom+a,i);return{width:Math.round(c),x:Math.round(u),y:Math.round(d)}}function a(e,t,n,r=`important`){e.style.getPropertyValue(t)===n&&e.style.getPropertyPriority(t)===r||e.style.setProperty(t,n,r)}function o(e,t){let n=e.body;a(n,`--hydro-auth-altcha-x`,`${t.x}px`,``),a(n,`--hydro-auth-altcha-y`,`${t.y}px`,``),a(n,`--hydro-auth-altcha-width`,`${t.width}px`,``),e.querySelectorAll(`.altcha[data-floating]`).forEach(e=>{if(e.closest(`#login-form .hydro-auth-captcha`)){a(e,`position`,`static`),a(e,`inset`,`auto`),a(e,`width`,`100%`),a(e,`max-width`,`100%`),a(e,`transform`,`none`),a(e,`margin`,`0`);return}a(e,`position`,`fixed`),a(e,`inset`,`${t.y}px auto auto ${t.x}px`),a(e,`width`,`${t.width}px`),a(e,`max-width`,`${t.width}px`),a(e,`transform`,`none`)})}function s(e=document){let t=e.body,n=e.getElementById(`login-form`),r=n?.querySelector(`[data-hydro-login-submit], button[type='submit']`);if(!t.classList.contains(`hydro-auth-page`)||!n||!r)return;let a=0,s=0,c=()=>{let t=i(r.getBoundingClientRect(),{width:window.innerWidth});t&&o(e,t)},l=()=>{a===0&&(a=window.requestAnimationFrame(()=>{a=0,c()}))},u=()=>{window.clearInterval(s),c(),s=window.setInterval(c,80),window.setTimeout(()=>{window.clearInterval(s),s=0},8e3)},d=e=>{let t=e.target;t instanceof Element&&t.closest(`#login-form, altcha-widget, .altcha[data-floating]`)&&u()};if(l(),r.addEventListener(`pointerdown`,u),r.addEventListener(`click`,u),n.addEventListener(`submit`,u),e.addEventListener(`pointerdown`,d,!0),e.addEventListener(`click`,d,!0),window.addEventListener(`load`,l,{once:!0}),window.addEventListener(`resize`,l,{passive:!0}),window.addEventListener(`scroll`,l,{passive:!0}),`ResizeObserver`in window){let e=new ResizeObserver(l);e.observe(n),e.observe(r)}`MutationObserver`in window&&(new MutationObserver(l).observe(n,{attributeFilter:[`class`,`data-floating`,`hidden`,`style`],attributes:!0,childList:!0,subtree:!0}),new MutationObserver(l).observe(t,{attributeFilter:[`class`,`data-floating`,`style`],attributes:!0,childList:!0,subtree:!0}))}var c=[`comment-widget`,`comment-form`,`base-form`,`comment-list`,`comment-item`,`comment-replies`,`reply-item`,`base-comment-item`,`reply-form`,`comment-pagination`,`comment-content`,`comment-editor`,`commenter-ua-bar`,`user-avatar`],l=c.join(`,`),u=new WeakSet,d=new WeakSet;function f(e){switch(e){case`comment-widget`:return`
        :host {
          display: block !important;
          width: 100% !important;
        }

        comment-form {
          display: block !important;
          margin-bottom: clamp(1.25rem, 2.8vw, 1.9rem) !important;
          padding-bottom: clamp(1.1rem, 2.4vw, 1.55rem) !important;
          border-bottom: 1px solid rgb(var(--hydro-ink-rgb) / 10%) !important;
        }

        comment-list {
          display: block !important;
        }
      `;case`comment-form`:case`reply-form`:return`
        :host {
          display: block !important;
          width: 100% !important;
        }

        base-form {
          display: block !important;
        }
      `;case`base-form`:return`
        :host {
          display: block !important;
          width: 100% !important;
        }

        .form {
          gap: 0.78rem !important;
        }

        .form__footer {
          display: flex !important;
          flex-wrap: wrap !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 0.75rem !important;
        }

        .form-actions {
          gap: 0.55rem !important;
        }

        .input {
          height: 2.48rem !important;
          border: 1px solid rgb(var(--hydro-ink-rgb) / 12%) !important;
          border-radius: 0.48rem !important;
          background: rgb(var(--hydro-paper-rgb) / 28%) !important;
          box-shadow: none !important;
          color: rgb(var(--hydro-ink-rgb) / 82%) !important;
          font-family: "Space Mono", monospace !important;
          transition:
            border-color 0.2s ease,
            background-color 0.2s ease,
            box-shadow 0.2s ease !important;
        }

        .input:focus {
          border-color: rgb(var(--hydro-ink-rgb) / 24%) !important;
          background: rgb(var(--hydro-paper-rgb) / 42%) !important;
          box-shadow: 0 0 0 2px rgb(var(--hydro-ink-rgb) / 4%) !important;
          outline: none !important;
        }

        .form-login,
        .form-logout {
          border-color: rgb(var(--hydro-ink-rgb) / 10%) !important;
          border-radius: 999px !important;
          background: transparent !important;
          color: rgb(var(--hydro-ink-rgb) / 54%) !important;
          font-family: "Space Mono", monospace !important;
        }

        .form-submit {
          height: 2.48rem !important;
          border-color: var(--hydro-solid) !important;
          border-radius: 0.48rem !important;
          background: var(--hydro-solid) !important;
          color: var(--hydro-solid-contrast) !important;
          font-family: "Space Mono", monospace !important;
          font-weight: 800 !important;
          transition:
            transform 0.18s ease,
            opacity 0.18s ease !important;
        }

        .form-submit:active {
          transform: translateY(1px) !important;
        }
      `;case`comment-list`:return`
        :host {
          display: block !important;
          width: 100% !important;
        }

        .comment-list-main {
          margin-top: clamp(0.65rem, 1.6vw, 1rem) !important;
        }

        .comment-stats {
          display: inline-flex !important;
          width: fit-content !important;
          align-items: center !important;
          gap: 0.5rem !important;
          margin: 0 0 clamp(0.45rem, 1.4vw, 0.7rem) !important;
          padding: 0 !important;
          border: 0 !important;
          border-radius: 0 !important;
          background: transparent !important;
          color: rgb(var(--hydro-ink-rgb) / 50%) !important;
          font-size: 0.72rem !important;
          font-weight: 700 !important;
          letter-spacing: 0.03em !important;
          line-height: 1 !important;
        }

        .comment-stats::before {
          width: 1.15rem !important;
          height: 1px !important;
          background: rgb(var(--hydro-ink-rgb) / 26%) !important;
          content: "" !important;
        }

        .comment-list {
          display: block !important;
          border-bottom: 1px solid rgb(var(--hydro-ink-rgb) / 9%) !important;
        }

        comment-item {
          display: block !important;
        }
      `;case`comment-item`:return`
        :host {
          display: block !important;
        }

        base-comment-item {
          --hydro-cw-avatar-offset: 0.12rem;
          --hydro-cw-item-bg: transparent;
          --hydro-cw-item-gap: clamp(0.72rem, 1.8vw, 0.95rem);
          --hydro-cw-item-padding: clamp(1rem, 2.6vw, 1.35rem) 0;
          --hydro-cw-item-radius: 0;
          --hydro-cw-item-separator: rgb(var(--hydro-ink-rgb) / 10%);
          --hydro-cw-meta-rule: transparent;
          --hydro-cw-content-size: 0.9rem;
        }

        comment-replies {
          display: block !important;
          margin-top: 0.8rem !important;
        }

        .icon-button {
          border: 1px solid transparent !important;
          border-radius: 999px !important;
          background: transparent !important;
          padding: 0.04rem 0.34rem 0.04rem 0.08rem !important;
          transition:
            border-color 0.2s ease,
            background-color 0.2s ease,
            color 0.2s ease !important;
        }

        .icon-button:hover {
          border-color: rgb(var(--hydro-ink-rgb) / 10%) !important;
          background: rgb(var(--hydro-ink-rgb) / 3%) !important;
        }

        .icon-button-icon {
          padding: 0.32em !important;
        }

        .icon-button-text {
          color: rgb(var(--hydro-ink-rgb) / 48%) !important;
          font-size: 0.7em !important;
          font-weight: 700 !important;
        }
      `;case`comment-replies`:return`
        :host {
          display: block !important;
          margin: clamp(0.7rem, 1.8vw, 0.95rem) 0 0 clamp(2.05rem, 5vw, 3.1rem) !important;
          padding-left: clamp(0.75rem, 2vw, 1rem) !important;
          border-left: 1px solid rgb(var(--hydro-ink-rgb) / 18%) !important;
        }

        .replies-main {
          position: relative !important;
          padding-left: 0.2rem !important;
        }

        .replies-main::before {
          position: absolute !important;
          top: 0.9rem !important;
          left: calc(-1rem - 1px) !important;
          width: 0.65rem !important;
          height: 1px !important;
          background: rgb(var(--hydro-ink-rgb) / 18%) !important;
          content: "" !important;
        }

        .replies-list {
          display: grid !important;
          gap: 0.46rem !important;
          margin-top: 0.55rem !important;
        }

        reply-item {
          display: block !important;
        }

        .replies-next {
          margin: 0.65rem 0 0 !important;
        }

        .replies-next-button {
          height: 1.92rem !important;
          border: 1px solid rgb(var(--hydro-ink-rgb) / 9%) !important;
          border-radius: 999px !important;
          background: transparent !important;
          color: rgb(var(--hydro-ink-rgb) / 58%) !important;
          font-size: 0.72rem !important;
        }

        @media (max-width: 640px) {
          :host {
            margin-left: 0.72rem !important;
            padding-left: 0.72rem !important;
          }

          .replies-main {
            padding-left: 0 !important;
          }
        }
      `;case`reply-item`:return`
        :host {
          display: block !important;
        }

        base-comment-item {
          --halo-cw-avatar-size: 2rem;
          --hydro-cw-avatar-offset: 0.02rem;
          --hydro-cw-item-bg: rgb(var(--hydro-ink-rgb) / 2.6%);
          --hydro-cw-item-gap: 0.72rem;
          --hydro-cw-item-padding: 0.72rem 0.82rem;
          --hydro-cw-item-radius: 0.42rem;
          --hydro-cw-item-separator: rgb(var(--hydro-ink-rgb) / 7%);
          --hydro-cw-meta-rule: rgb(var(--hydro-ink-rgb) / 5%);
          --hydro-cw-content-size: 0.86rem;
        }

        .reply-form {
          margin-top: 0.65rem !important;
        }

        .quote-badge {
          border: 1px solid rgb(var(--hydro-ink-rgb) / 8%) !important;
          border-radius: 999px !important;
          background: rgb(var(--hydro-paper-rgb) / 30%) !important;
          color: rgb(var(--hydro-ink-rgb) / 54%) !important;
          font-size: 0.7rem !important;
        }

        .icon-button {
          border: 1px solid transparent !important;
          border-radius: 999px !important;
          background: transparent !important;
          padding: 0.04rem 0.38rem 0.04rem 0.08rem !important;
        }

        .icon-button-icon {
          padding: 0.34em !important;
        }

        .icon-button-text {
          color: rgb(var(--hydro-ink-rgb) / 50%) !important;
          font-size: 0.7em !important;
          font-weight: 700 !important;
        }
      `;case`base-comment-item`:return`
        :host {
          display: block !important;
          width: 100% !important;
        }

        .item {
          position: relative !important;
          align-items: flex-start !important;
          gap: var(--hydro-cw-item-gap, 0.9rem) !important;
          overflow: visible !important;
          padding: var(--hydro-cw-item-padding, 1rem) !important;
          border: 0 !important;
          border-top: 1px solid var(--hydro-cw-item-separator, rgb(var(--hydro-ink-rgb) / 10%)) !important;
          border-radius: var(--hydro-cw-item-radius, 0.85rem) !important;
          background: var(--hydro-cw-item-bg, transparent) !important;
          box-shadow: none !important;
        }

        .item-avatar {
          padding-top: var(--hydro-cw-avatar-offset, 0.08rem) !important;
        }

        .item-main {
          min-width: 0 !important;
        }

        .item-meta {
          gap: 0.34rem 0.5rem !important;
          align-items: center !important;
          padding-bottom: 0.42rem !important;
          border-bottom: 1px solid var(--hydro-cw-meta-rule, transparent) !important;
        }

        .item-author {
          color: rgb(var(--hydro-ink-rgb) / 86%) !important;
          font-size: 0.84rem !important;
          font-weight: 800 !important;
          line-height: 1.15 !important;
          text-decoration: none !important;
        }

        .item-meta-info,
        time.item-meta-info {
          color: rgb(var(--hydro-ink-rgb) / 42%) !important;
          font-size: 0.68rem !important;
          font-weight: 600 !important;
          line-height: 1.15 !important;
        }

        .item-content {
          margin-top: 0.42rem !important;
        }

        .item-actions {
          flex-wrap: wrap !important;
          gap: 0.24rem !important;
          margin-top: 0.48rem !important;
          padding-top: 0 !important;
          border-top: 0 !important;
        }

        slot[name="footer"]::slotted(*) {
          margin-top: 0.62rem !important;
        }

        @media (max-width: 640px) {
          .item {
            gap: 0.68rem !important;
            padding: 0.78rem !important;
          }

          .item-meta {
            gap: 0.36rem 0.45rem !important;
          }
        }
      `;case`comment-content`:return`
        .content {
          color: rgb(var(--hydro-ink-rgb) / 82%) !important;
          font-size: var(--hydro-cw-content-size, 0.9rem) !important;
          line-height: 1.72 !important;
        }

        .content p {
          margin-bottom: 0.58rem !important;
        }

        .content > *:last-child,
        .content p:last-child {
          margin-bottom: 0 !important;
        }

        .content a {
          color: var(--hydro-solid) !important;
          text-decoration-thickness: 0.08em !important;
          text-underline-offset: 0.18em !important;
        }

        .content code {
          border: 1px solid rgb(var(--hydro-ink-rgb) / 8%) !important;
          border-radius: 0.3rem !important;
          background: rgb(var(--hydro-ink-rgb) / 4%) !important;
        }
      `;case`comment-editor`:return`
        :host {
          display: block !important;
          width: 100% !important;
        }

        .border {
          border-color: rgb(var(--hydro-ink-rgb) / 12%) !important;
          border-radius: 0.5rem !important;
          background: rgb(var(--hydro-paper-rgb) / 24%) !important;
          box-shadow: none !important;
          transition:
            border-color 0.2s ease,
            background-color 0.2s ease,
            box-shadow 0.2s ease !important;
        }

        .border:focus-within {
          border-color: rgb(var(--hydro-ink-rgb) / 24%) !important;
          background: rgb(var(--hydro-paper-rgb) / 42%) !important;
          box-shadow: 0 0 0 2px rgb(var(--hydro-ink-rgb) / 4%) !important;
        }

        #editor-container {
          min-height: 5.2rem !important;
          padding: 0.78rem 0.86rem !important;
        }

        ul {
          border-top: 1px solid rgb(var(--hydro-ink-rgb) / 8%) !important;
          padding: 0.42rem 0.5rem !important;
        }

        li [role="button"] {
          border-radius: 0.45rem !important;
        }
      `;case`commenter-ua-bar`:return`
        :host {
          display: inline-flex !important;
          max-width: 100% !important;
          vertical-align: middle !important;
        }

        .inline-flex {
          flex-wrap: wrap !important;
        }

        .bg-muted-3 {
          border: 1px solid rgb(var(--hydro-ink-rgb) / 9%) !important;
          border-radius: 999px !important;
          background: rgb(var(--hydro-ink-rgb) / 4.8%) !important;
          padding: 0.18rem 0.38rem !important;
        }

        .text-xs {
          color: rgb(var(--hydro-ink-rgb) / 54%) !important;
          font-size: 0.63rem !important;
          font-weight: 700 !important;
          line-height: 1 !important;
        }

        i,
        [class*="i-"] {
          opacity: 0.9 !important;
          filter: saturate(0.82) contrast(0.98) !important;
        }
      `;case`user-avatar`:return`
        .avatar {
          border: 1px solid rgb(var(--hydro-ink-rgb) / 12%) !important;
          background: rgb(var(--hydro-paper-rgb) / 56%) !important;
          box-shadow: none !important;
        }

        .avatar-image {
          filter: saturate(0.92) contrast(1.03) !important;
        }
      `;case`comment-pagination`:return`
        :host {
          display: block !important;
          margin-top: 1rem !important;
        }
      `;default:return``}}function p(e){if(e.localName!==`base-comment-item`)return;let t=typeof e.ua==`string`?e.ua.trim():``,n=e.shadowRoot?.querySelector(`.item-meta`);if(!t||!n||n.querySelector(`commenter-ua-bar`))return;let r=document.createElement(`commenter-ua-bar`);r.dataset.hydroCommentDevice=`true`,r.ua=t,n.insertBefore(r,n.querySelector(`time`)),_(r)}function m(e){let t=e.shadowRoot;t&&(u.has(t)||(u.add(t),new MutationObserver(t=>{t.forEach(e=>{e.addedNodes.forEach(v)}),p(e)}).observe(t,{childList:!0,subtree:!0})))}function h(e){let t=e.shadowRoot;if(!t)return;let n=f(e.localName).trim();if(n&&!t.querySelector(`style[data-hydro-comment-skin]`)){let e=document.createElement(`style`);e.dataset.hydroCommentSkin=``,e.textContent=n,t.append(e)}m(e),y(t)}function g(e){let t=e.updateComplete;d.has(e)||!t||typeof t.then!=`function`||(d.add(e),t.then(()=>{h(e),p(e)}).catch(()=>void 0))}function _(e){let t=e;h(t),p(t),g(t)}function v(e){e instanceof Element&&(e.matches(l)&&_(e),e.querySelectorAll(l).forEach(_))}function y(e){e.querySelectorAll(l).forEach(e=>{_(e);let t=e.shadowRoot;t&&y(t)})}function b(){`customElements`in window&&(y(document),c.forEach(e=>{customElements.whenDefined(e).then(()=>{y(document)}).catch(()=>void 0)}),new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(v)})}).observe(document.documentElement,{childList:!0,subtree:!0}),[`halo:comment:created`,`halo:comment-reply:created`].forEach(e=>{window.addEventListener(e,()=>{window.requestAnimationFrame(()=>y(document))})}))}var x=new Set([`back-to-top`,`copy-current-url`,`member-favorite`,`member-sign-in`,`open-menu`,`print`,`scroll-comment`,`search`,`theme-toggle`]);function ee(e){let t=e?.trim();if(t)try{return JSON.parse(t)}catch{return t}}function te(e,t){return Array.from(e.querySelectorAll(t)).find(e=>!(e.hidden||e.getAttribute(`aria-hidden`)===`true`||e instanceof HTMLButtonElement&&e.disabled))??null}function S(e,t){e.warn?.(t)}function C(e){return typeof e==`string`&&x.has(e)}function w(e){let t=e.trim(),n=t.endsWith(`()`)?t.slice(0,-2).trim():t;return n.startsWith(`window.`)?n.slice(7):n}function T(e,t){let n=t.getWindow(),r=w(e);if(!r)return null;let i=n.HydroMinimActions?.[r];if(typeof i==`function`)return i;let a=r.split(`.`).filter(Boolean);if(a.length===0)return null;let o=n;for(let e=0;e<a.length-1;e+=1){if(o==null||typeof o!=`object`&&typeof o!=`function`)return null;o=o[a[e]]}if(o==null||typeof o!=`object`&&typeof o!=`function`)return null;let s=o[a[a.length-1]];return typeof s==`function`?s.bind(o):null}function E(e,t){e.classList.add(`is-copied`),t.setTimeout(()=>{e.classList.remove(`is-copied`)},1400)}function D(e,t,n={}){let r=t.trim();r&&e.notify?.(r,{id:`hydro-fab-action`,title:`快捷`,variant:`success`,...n})}function O(e,t){D(e,`请先安装并启用会员插件`,{id:t,title:`会员功能`,variant:`warning`})}function k(e,t){D(e,`请先登录后再使用会员功能`,{id:t,title:`会员功能`,variant:`warning`})}function ne(e){return e.isMemberPluginAvailable?.()??!0}function A(e){return e.isMemberAuthenticated?.()??!0}function re(e,t,n){if(e){if(t.navigateTo){t.navigateTo(e);return}n.location.href=e}}function j(e,t){e.classList.toggle(`is-loading`,t),e.setAttribute(`aria-busy`,String(t)),e instanceof HTMLButtonElement&&(e.disabled=t)}function M(e,t,n=3e3){let r=Date.now();return new Promise(i=>{let a=()=>{let o=e[t];if(o){i(o);return}if(Date.now()-r>=n){i(null);return}e.setTimeout(a,50)};a()})}function N(e,t){let n=!!t.signed;e.classList.toggle(`is-signed`,n),e.dataset.hydroMemberSigned=String(n),e.dataset.hydroMemberContinuousDays=String(t.continuousDays||0),n&&e.setAttribute(`aria-label`,`今日已签到，连续 ${t.continuousDays||0} 天`)}async function ie(e,t,n){if(!ne(t)){O(t,`hydro-member-sign-in`);return}if(!A(t)){k(t,`hydro-member-sign-in`);return}let r=await M(n,`memberSignIn`);if(!r){O(t,`hydro-member-sign-in`),S(t,`Hydro-Minim FAB member sign-in API is unavailable.`);return}let i=r.getMergedConfig?await r.getMergedConfig():{enabled:!0};if(i.enabled===!1){e.hidden=!0;return}let a=await r.getStatus();if(a.authenticated===!1){k(t,`hydro-member-sign-in`);return}if(a.signed){N(e,a),re(i.ucUrl||`/uc/member?tab=signIn`,t,n);return}j(e,!0);try{let n=await r.signIn();if(n.authenticated===!1){k(t,`hydro-member-sign-in`);return}N(e,n),D(t,n.message||`签到成功`,{id:`hydro-member-sign-in`})}finally{j(e,!1)}}function ae(e,t){let n=e.querySelector(`.hydro-post-page[data-post-name]`),r=n?.dataset.postName?.trim();return!n||!r?null:{subjectType:`POST`,subjectName:r,subjectTitle:n.dataset.postTitle?.trim()||t.document.title||r,permalink:n.dataset.postPermalink?.trim()||t.location.href,cover:n.dataset.postCover?.trim()||``}}function oe(e,t){let n=!!t.favorited,r=Number(t.count||0);e.classList.toggle(`is-favorited`,n),e.dataset.hydroMemberFavorited=String(n),e.dataset.hydroMemberFavoriteCount=String(r),e.setAttribute(`aria-label`,n?`已收藏 ${r}`:`收藏 ${r}`)}async function P(e,t,n){if(!ne(t)){O(t,`hydro-member-favorite`);return}if(!A(t)){k(t,`hydro-member-favorite`);return}let r=ae(t.root,n),i=await M(n,`memberFavorite`);if(!i||!r){i||O(t,`hydro-member-favorite`),S(t,`Hydro-Minim FAB member favorite API or post subject is unavailable.`);return}let a=await i.getStatus(r);if(oe(e,a),a.authenticated===!1){k(t,`hydro-member-favorite`);return}j(e,!0);try{let n=await i.toggle(r);if(n.authenticated===!1){k(t,`hydro-member-favorite`);return}oe(e,n),D(t,n.favorited?`已收藏 · ${Number(n.count||0)}`:`已取消收藏 · ${Number(n.count||0)}`,{id:`hydro-member-favorite`})}finally{j(e,!1)}}async function F(e,t,n){let r=n.getWindow();switch(e){case`back-to-top`:n.scrollToPosition(0),D(n,`已回到顶部`,{id:`hydro-back-to-top`,variant:`info`});return;case`copy-current-url`:await n.copyText(r.location.href),E(t,r),D(n,`当前链接已复制`,{id:`hydro-copy-current-url`});return;case`member-favorite`:await P(t,n,r);return;case`member-sign-in`:await ie(t,n,r);return;case`open-menu`:if(n.root.querySelector(`[data-hydro-mobile-menu]`)?.classList.contains(`is-open`))return;te(n.root,`[data-hydro-mobile-toggle]`)?.click(),D(n,`菜单已打开`,{id:`hydro-open-menu`,variant:`info`});return;case`print`:r.print(),D(n,`打印面板已打开`,{id:`hydro-print`,variant:`info`});return;case`scroll-comment`:{let e=n.root.querySelector(`#comment`);e?(n.scrollToElement(e),D(n,`已到评论区`,{id:`hydro-scroll-comment`,variant:`info`})):D(n,`当前页没有评论区`,{id:`hydro-scroll-comment`,variant:`warning`});return}case`search`:{let e=te(n.root,`[data-hydro-search-entry]`);if(e){e.click(),D(n,`搜索面板已打开`,{id:`hydro-search`,variant:`info`});return}if(typeof r.SearchWidget?.open==`function`){r.SearchWidget.open(),D(n,`搜索面板已打开`,{id:`hydro-search`,variant:`info`});return}D(n,`搜索插件未就绪`,{id:`hydro-search`,variant:`warning`});return}case`theme-toggle`:te(n.root,`[data-hydro-theme-toggle]`)?.click();return}}async function se(e,t,n){let r=T(e,n);if(typeof r!=`function`){S(n,`Hydro-Minim FAB custom handler "${e}" is not registered or resolvable.`);return}await r(t)}async function ce(e,t,n,r){let i=e.dataset.hydroFabAction?.trim()||`link`;if(i!==`link`){if(t.preventDefault(),t.stopPropagation(),r(),i===`builtin`){let t=e.dataset.hydroFabBuiltin?.trim();if(!t){S(n,`Hydro-Minim FAB built-in action is empty.`);return}if(!C(t)){S(n,`Hydro-Minim FAB built-in action "${t}" is not supported.`);return}await F(t,e,n);return}if(i===`custom`){let a=e.dataset.hydroFabHandler?.trim();if(!a){S(n,`Hydro-Minim FAB custom handler name is empty.`);return}await se(a,{action:i,closeMenu:r,element:e,event:t,payload:ee(e.dataset.hydroFabPayload)},n);return}S(n,`Hydro-Minim FAB action "${i}" is not supported.`)}}var le={info:4200,success:3200,warning:5200,error:6400},ue=4,de=0,I=[],L=null;function fe(e,t={}){let n={...typeof e==`string`?{message:e}:e,...t},r=n.variant||`info`;return{id:n.id||`hydro-notice-${Date.now()}-${++de}`,title:n.title?.trim()||``,message:n.message?.trim()||``,variant:r,dismissible:n.dismissible!==!1,duration:typeof n.duration==`number`?Math.max(0,n.duration):le[r]}}function pe(){if(L?.isConnected)return L;let e=document.querySelector(`[data-hydro-notice-region]`);return e?(L=e,L):(L=document.createElement(`section`),L.className=`hydro-notice-region`,L.dataset.hydroNoticeRegion=``,L.setAttribute(`aria-label`,`全局提示`),L.setAttribute(`aria-live`,`polite`),L.setAttribute(`aria-atomic`,`false`),document.body.append(L),L)}function me(e){let t=document.createElement(`article`);t.className=`hydro-notice hydro-notice--${e.variant} ${e.title?`has-title`:`no-title`}`,t.dataset.hydroNotice=e.id,t.setAttribute(`role`,e.variant===`error`?`alert`:`status`);let n=document.createElement(`span`);n.className=`hydro-notice__marker`,n.setAttribute(`aria-hidden`,`true`);let r=document.createElement(`div`);if(r.className=`hydro-notice__content`,e.title){let t=document.createElement(`strong`);t.className=`hydro-notice__title`,t.textContent=e.title,r.append(t)}let i=document.createElement(`p`);if(i.className=`hydro-notice__message`,i.textContent=e.message||e.title||`提示`,r.append(i),t.append(n,r),e.dismissible){let e=document.createElement(`button`);e.className=`hydro-notice__close`,e.type=`button`,e.setAttribute(`aria-label`,`关闭提示`),e.textContent=`×`,t.append(e)}return t}function R(e){let t=I.find(t=>t.id===e);t&&(window.clearTimeout(t.timer),I=I.filter(t=>t.id!==e),t.element.classList.add(`is-leaving`),window.setTimeout(()=>t.element.remove(),180))}function z(e,t){let n=fe(e,t);R(n.id);let r=me(n);pe().append(r);let i={id:n.id,element:r};for(I.push(i),r.querySelector(`.hydro-notice__close`)?.addEventListener(`click`,()=>R(n.id)),n.duration>0&&(i.timer=window.setTimeout(()=>R(n.id),n.duration));I.length>ue;)R(I[0]?.id||``);return{id:n.id,close:()=>R(n.id)}}function he(){return{show:z,info:(e,t)=>z(e,{...t,variant:`info`}),success:(e,t)=>z(e,{...t,variant:`success`}),warning:(e,t)=>z(e,{...t,variant:`warning`}),error:(e,t)=>z(e,{...t,variant:`error`}),clear:e=>{if(e){R(e);return}I.map(e=>e.id).forEach(R)}}}function ge(){return window.HydroNotice=he(),pe(),window.HydroNotice}function _e(){return navigator.connection?.saveData===!0}function ve(e,t=1200){let n=window;if(n.requestIdleCallback){n.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,180)}function ye(e){return e.closest(`[data-progressive-media]`)??e.closest(`figure`)}function be(e,t){e.dataset.mediaState=`loaded`,e.removeAttribute(`aria-hidden`),e.classList.remove(`is-media-error`),t?.setAttribute(`data-media-state`,`loaded`),t?.classList.add(`is-media-loaded`),t?.classList.remove(`is-media-loading`,`is-media-error`)}function xe(e,t){let n=e.dataset.fallbackCover;return!n||e.dataset.fallbackCoverApplied===`true`?!1:(e.dataset.fallbackCoverApplied=`true`,e.dataset.mediaState=`loading`,e.removeAttribute(`aria-hidden`),e.removeAttribute(`srcset`),e.removeAttribute(`sizes`),e.classList.remove(`is-media-error`),e.src=n,t?.setAttribute(`data-media-state`,`loading`),t?.classList.add(`is-media-loading`),t?.classList.remove(`is-media-error`,`is-media-loaded`),t?.querySelector(`[data-media-error-label]`)?.remove(),!0)}function Se(e,t,n){if(!xe(e,t)&&(e.dataset.mediaState=`error`,e.dataset.lightboxDisabled=`true`,e.classList.add(`is-media-error`),e.setAttribute(`aria-hidden`,`true`),e.removeAttribute(`data-lightbox-trigger`),t)){if(t.setAttribute(`data-media-state`,`error`),t.classList.add(`is-media-error`),t.classList.remove(`is-media-loading`,`is-media-loaded`),!t.querySelector(`[data-media-error-label]`)){let r=document.createElement(`span`);r.className=`hydro-media-error-label`,r.dataset.mediaErrorLabel=``,r.textContent=t.dataset.mediaErrorText||e.alt||n,t.append(r)}t.dataset.lightboxTrigger!=null&&(delete t.dataset.lightboxTrigger,t.dataset.lightboxDisabled=`true`,t.setAttribute(`aria-disabled`,`true`)),t instanceof HTMLButtonElement&&(t.disabled=!0)}}function Ce(e){e.hasAttribute(`loading`)||(e.loading=`lazy`),e.hasAttribute(`decoding`)||(e.decoding=`async`)}function we(e=document,t={}){let n=t.fallbackErrorText??`图片暂时不可见`;function r(){e.querySelectorAll(`img[data-progressive-image]`).forEach(e=>{let t=ye(e);if(Ce(e),e.complete&&e.naturalWidth>0){be(e,t);return}if(e.complete&&e.naturalWidth===0){if(xe(e,t))return;Se(e,t,n);return}t?.setAttribute(`data-media-state`,`loading`),t?.classList.add(`is-media-loading`),e.addEventListener(`load`,()=>be(e,t)),e.addEventListener(`error`,()=>Se(e,t,n))})}function i(){let t=Array.from(e.querySelectorAll(`video[data-hydro-hero-video][data-src]`));if(t.length===0)return;if(_e()){t.forEach(e=>{e.dataset.mediaState=`skipped`,e.closest(`[data-progressive-media]`)?.setAttribute(`data-media-state`,`cover`)});return}let n=e=>{let t=e.dataset.src;!t||e.dataset.mediaState===`loading`||e.dataset.mediaState===`loaded`||(e.dataset.mediaState=`loading`,e.preload=`metadata`,e.src=t,e.load(),e.addEventListener(`loadeddata`,()=>{e.dataset.mediaState=`loaded`,e.closest(`[data-progressive-media]`)?.setAttribute(`data-media-state`,`loaded`);let t=e.play();t&&t.catch(()=>void 0)},{once:!0}),e.addEventListener(`error`,()=>{e.dataset.mediaState=`error`,e.closest(`[data-progressive-media]`)?.setAttribute(`data-media-state`,`cover`)},{once:!0}))},r=()=>t.forEach(n);if(ve(r,1500),!(`IntersectionObserver`in window))return;let i=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(r(),i.disconnect())},{rootMargin:`480px 0px`});t.forEach(e=>{let t=e.closest(`[data-hydro-hero]`)??e;i.observe(t)})}return{initDeferredHeroVideo:i,initProgressiveImages:r}}var Te=4,Ee=0,De=[236,17],Oe=40,ke=[[1,26,16],[1,44,28],[1,70,44],[2,50,32],[2,67,43],[4,43,27],[4,49,31],[2,60,38,2,61,39],[3,58,36,2,59,37],[4,69,43,1,70,44],[1,80,50,4,81,51],[6,58,36,2,59,37],[8,59,37,1,60,38],[4,64,40,5,65,41],[5,65,41,5,66,42],[7,73,45,3,74,46],[10,74,46,1,75,47],[9,69,43,4,70,44],[3,70,44,11,71,45],[3,67,41,13,68,42],[17,68,42],[17,74,46],[4,75,47,14,76,48],[6,73,45,14,74,46],[8,75,47,13,76,48],[19,74,46,4,75,47],[22,73,45,3,74,46],[3,73,45,23,74,46],[21,73,45,7,74,46],[19,75,47,10,76,48],[2,74,46,29,75,47],[10,74,46,23,75,47],[14,74,46,21,75,47],[14,74,46,23,75,47],[12,75,47,26,76,48],[6,75,47,34,76,48],[29,74,46,14,75,47],[13,74,46,32,75,47],[40,75,47,7,76,48],[18,75,47,31,76,48]],Ae=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],je=1335,Me=7973,Ne=21522,Pe=class{buffer=[];length=0;put(e,t){for(let n=0;n<t;n+=1)this.putBit((e>>>t-n-1&1)==1)}putBit(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length+=1}},B=Array.from({length:256},()=>0),Fe=Array.from({length:256},()=>0);for(let e=0;e<8;e+=1)B[e]=1<<e;for(let e=8;e<256;e+=1)B[e]=B[e-4]^B[e-5]^B[e-6]^B[e-8];for(let e=0;e<255;e+=1)Fe[B[e]]=e;function Ie(e){let t=e;for(;t<0;)t+=255;for(;t>=256;)t-=255;return B[t]}function Le(e){if(e<1)throw Error(`Invalid QR finite-field log input: ${e}`);return Fe[e]}function Re(e,t){return e===0||t===0?0:Ie(Le(e)+Le(t))}function ze(e,t){let n=Array.from({length:e.length+t.length-1},()=>0);return e.forEach((e,r)=>{t.forEach((t,i)=>{n[r+i]^=Re(e,t)})}),n}function Be(e){let t=[1];for(let n=0;n<e;n+=1)t=ze(t,[1,Ie(n)]);return t}function Ve(e,t){let n=Be(t),r=[...e,...Array.from({length:t},()=>0)];return e.forEach((e,t)=>{let i=r[t];i!==0&&n.forEach((e,n)=>{r[t+n]^=Re(e,i)})}),r.slice(r.length-t)}function He(e){let t=ke[e-1];if(!t)throw Error(`Unsupported QR version: ${e}`);let n=[];for(let e=0;e<t.length;e+=3){let r=t[e],i=t[e+1],a=t[e+2];for(let e=0;e<r;e+=1)n.push({dataCount:a,totalCount:i})}return n}function Ue(e){return e<10?8:16}function We(e){return He(e).reduce((e,t)=>e+t.dataCount,0)}function Ge(e){for(let t=1;t<=Oe;t+=1)if(4+Ue(t)+e.length*8<=We(t)*8)return t;throw Error(`QR payload is too long for Hydro poster QR codes: ${e.length} bytes`)}function Ke(e,t){let n=He(t),r=n.reduce((e,t)=>e+t.dataCount,0),i=new Pe;if(i.put(Te,4),i.put(e.length,Ue(t)),e.forEach(e=>i.put(e,8)),i.length>r*8)throw Error(`QR data overflow: ${i.length} > ${r*8}`);for(i.length+4<=r*8&&i.put(0,4);i.length%8!=0;)i.putBit(!1);let a=0;for(;i.length<r*8;)i.put(De[a%De.length],8),a+=1;return qe(i.buffer,n)}function qe(e,t){let n=0,r=0,i=0,a=[],o=[];t.forEach(t=>{let s=e.slice(n,n+t.dataCount),c=t.totalCount-t.dataCount;n+=t.dataCount,r=Math.max(r,t.dataCount),i=Math.max(i,c),a.push(s),o.push(Ve(s,c))});let s=[];for(let e=0;e<r;e+=1)a.forEach(t=>{e<t.length&&s.push(t[e])});for(let e=0;e<i;e+=1)o.forEach(t=>{e<t.length&&s.push(t[e])});return s}function V(e){let t=0,n=e;for(;n!==0;)t+=1,n>>>=1;return t}function Je(e){let t=e<<10;for(;V(t)-V(je)>=0;)t^=je<<V(t)-V(je);return(e<<10|t)^Ne}function Ye(e){let t=e<<12;for(;V(t)-V(Me)>=0;)t^=Me<<V(t)-V(Me);return e<<12|t}function Xe(e,t,n){switch(e){case 0:return(t+n)%2==0;case 1:return t%2==0;case 2:return n%3==0;case 3:return(t+n)%3==0;case 4:return(Math.floor(t/2)+Math.floor(n/3))%2==0;case 5:return t*n%2+t*n%3==0;case 6:return(t*n%2+t*n%3)%2==0;case 7:return(t*n%3+(t+n)%2)%2==0;default:throw Error(`Invalid QR mask pattern: ${e}`)}}function Ze(e){return Array.from({length:e},()=>Array.from({length:e},()=>null))}function Qe(e,t,n){let r=e.length;for(let i=-1;i<=7;i+=1)if(!(t+i<=-1||r<=t+i))for(let a=-1;a<=7;a+=1)n+a<=-1||r<=n+a||(e[t+i][n+a]=0<=i&&i<=6&&(a===0||a===6)||0<=a&&a<=6&&(i===0||i===6)||2<=i&&i<=4&&2<=a&&a<=4)}function $e(e,t){let n=Ae[t-1]||[];n.forEach(t=>{n.forEach(n=>{if(e[t][n]===null)for(let r=-2;r<=2;r+=1)for(let i=-2;i<=2;i+=1)e[t+r][n+i]=Math.abs(r)===2||Math.abs(i)===2||r===0&&i===0})})}function et(e){let t=e.length;for(let n=8;n<t-8;n+=1)e[n][6]===null&&(e[n][6]=n%2==0);for(let n=8;n<t-8;n+=1)e[6][n]===null&&(e[6][n]=n%2==0)}function tt(e,t,n){let r=e.length,i=Je(Ee<<3|n);for(let n=0;n<15;n+=1){let a=!t&&(i>>n&1)==1;n<6?e[n][8]=a:n<8?e[n+1][8]=a:e[r-15+n][8]=a}for(let n=0;n<15;n+=1){let a=!t&&(i>>n&1)==1;n<8?e[8][r-n-1]=a:n<9?e[8][15-n]=a:e[8][15-n-1]=a}e[r-8][8]=!t}function nt(e,t,n){let r=e.length,i=Ye(t);for(let t=0;t<18;t+=1){let a=!n&&(i>>t&1)==1;e[Math.floor(t/3)][t%3+r-11]=a,e[t%3+r-11][Math.floor(t/3)]=a}}function rt(e,t,n){let r=e.length,i=-1,a=r-1,o=7,s=0;for(let c=r-1;c>0;c-=2)for(c===6&&--c;;){for(let r=0;r<2;r+=1){if(e[a][c-r]!==null)continue;let i=!1;s<t.length&&(i=(t[s]>>>o&1)==1),Xe(n,a,c-r)&&(i=!i),e[a][c-r]=i,--o,o===-1&&(s+=1,o=7)}if(a+=i,a<0||r<=a){a-=i,i=-i;break}}}function it(e){return e.map(e=>e.map(e=>e===!0))}function at(e,t,n,r){let i=e*4+17,a=Ze(i);return Qe(a,0,0),Qe(a,i-7,0),Qe(a,0,i-7),$e(a,e),et(a),tt(a,r,n),e>=7&&nt(a,e,r),rt(a,t,n),it(a)}function ot(e){let t=e.length,n=0;for(let r=0;r<t;r+=1)for(let i=0;i<t;i+=1){let a=0,o=e[r][i];for(let n=-1;n<=1;n+=1)if(!(r+n<0||t<=r+n))for(let s=-1;s<=1;s+=1)i+s<0||t<=i+s||n===0&&s===0||o===e[r+n][i+s]&&(a+=1);a>5&&(n+=3+a-5)}for(let r=0;r<t-1;r+=1)for(let i=0;i<t-1;i+=1){let t=Number(e[r][i])+Number(e[r+1][i])+Number(e[r][i+1])+Number(e[r+1][i+1]);(t===0||t===4)&&(n+=3)}for(let r=0;r<t;r+=1)for(let i=0;i<t-6;i+=1)e[r][i]&&!e[r][i+1]&&e[r][i+2]&&e[r][i+3]&&e[r][i+4]&&!e[r][i+5]&&e[r][i+6]&&(n+=40);for(let r=0;r<t;r+=1)for(let i=0;i<t-6;i+=1)e[i][r]&&!e[i+1][r]&&e[i+2][r]&&e[i+3][r]&&e[i+4][r]&&!e[i+5][r]&&e[i+6][r]&&(n+=40);let r=e.reduce((e,t)=>e+t.filter(Boolean).length,0),i=Math.abs(100*r/t/t-50)/5;return n+i*10}function st(e,t){let n=0,r=1/0;for(let i=0;i<8;i+=1){let a=ot(at(e,t,i,!0));a<r&&(r=a,n=i)}return n}function ct(e){return e.replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`)}function lt(e){let t=new TextEncoder().encode(e),n=Ge(t),r=Ke(t,n),i=at(n,r,st(n,r),!1);return{modules:i,size:i.length,version:n}}function ut(e,t={}){let n=t.quietZone??4,r=ct(t.foreground??`#181714`),i=ct(t.background??`#f8f5ed`),a=lt(e),o=a.size+n*2;return`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${o} ${o}" shape-rendering="crispEdges"><rect width="${o}" height="${o}" fill="${i}"/><path d="${a.modules.flatMap((e,t)=>e.map((e,r)=>e?`M${r+n},${t+n}h1v1h-1z`:``).filter(Boolean)).join(``)}" fill="${r}"/></svg>`}function dt(e,t){return`data:image/svg+xml;charset=UTF-8,${encodeURIComponent(ut(e,t))}`}var ft=[`search-modal`,`search-form`],pt=ft.join(`,`),mt=new WeakSet,ht=new WeakSet;function gt(e){switch(e){case`search-modal`:return`
        :host {
          --halo-search-widget-base-font-family: "Space Mono", monospace;
          --halo-search-widget-base-font-size: 0.92rem;
          --halo-search-widget-base-rounded: 0.56rem;
          --halo-search-widget-primary-color: var(--hydro-coral);
          --halo-search-widget-color-result-item-bg: rgb(var(--hydro-ink-rgb) / 2.5%);
          --halo-search-widget-color-result-item-hover-bg: var(--hydro-search-selection-bg);
          display: contents !important;
        }

        .modal__wrapper {
          align-items: flex-start !important;
          padding: clamp(4.75rem, 12vh, 7rem) clamp(0.9rem, 3vw, 2rem) 2rem !important;
        }

        .modal__layer {
          background-color: rgb(var(--hydro-shadow-rgb) / 34%) !important;
          backdrop-filter: blur(10px) saturate(0.9) !important;
        }

        .modal__content {
          width: min(100%, 46rem) !important;
          max-height: min(78vh, 42rem) !important;
          overflow: hidden !important;
          border: 1px solid rgb(var(--hydro-ink-rgb) / 12%) !important;
          border-radius: 0.82rem !important;
          background:
            linear-gradient(180deg, rgb(var(--hydro-paper-rgb) / 96%), rgb(var(--hydro-paper-rgb) / 88%)),
            var(--hydro-bg) !important;
          box-shadow:
            0 1.4rem 4rem rgb(var(--hydro-shadow-rgb) / 16%),
            inset 0 1px 0 rgb(var(--hydro-paper-rgb) / 58%) !important;
          color: rgb(var(--hydro-ink-rgb) / 86%) !important;
        }

        @media (max-width: 640px) {
          .modal__wrapper {
            padding: calc(4.4rem + env(safe-area-inset-top)) 0.75rem 0.75rem !important;
          }

          .modal__content {
            width: 100% !important;
            max-height: calc(100dvh - 5.6rem - env(safe-area-inset-top)) !important;
            border-radius: 0.72rem !important;
          }
        }
      `;case`search-form`:return`
        :host {
          --halo-search-widget-primary-color: var(--hydro-coral);
          --halo-search-widget-color-result-item-bg: rgb(var(--hydro-ink-rgb) / 2.5%);
          --halo-search-widget-color-result-item-hover-bg: var(--hydro-search-selection-bg);
          display: block !important;
          font-family: "Space Mono", monospace !important;
          color: rgb(var(--hydro-ink-rgb) / 86%) !important;
        }

        .sticky.top-0 {
          padding: 0.72rem !important;
          border-bottom: 1px solid rgb(var(--hydro-ink-rgb) / 10%) !important;
          background: rgb(var(--hydro-paper-rgb) / 92%) !important;
        }

        form {
          height: 3.15rem !important;
          border: 1px solid rgb(var(--hydro-ink-rgb) / 14%) !important;
          border-radius: 0.58rem !important;
          background: rgb(var(--hydro-ink-rgb) / 3%) !important;
          box-shadow: none !important;
        }

        form:focus-within {
          border-color: rgb(var(--hydro-ink-rgb) / 28%) !important;
          background: rgb(var(--hydro-paper-rgb) / 58%) !important;
          box-shadow: 0 0 0 2px rgb(var(--hydro-ink-rgb) / 4%) !important;
        }

        input {
          color: rgb(var(--hydro-ink-rgb) / 86%) !important;
          font-size: 0.9rem !important;
        }

        input::placeholder {
          color: rgb(var(--hydro-ink-rgb) / 42%) !important;
        }

        .p-3:not(.sticky) {
          padding: 0.72rem !important;
        }

        h3 {
          color: rgb(var(--hydro-ink-rgb) / 72%) !important;
          font-size: 0.74rem !important;
          letter-spacing: 0.02em !important;
        }

        ul[role="list"] {
          display: grid !important;
          gap: 0.42rem !important;
        }

        li[data-index] {
          position: relative !important;
          gap: 0.75rem !important;
          align-items: flex-start !important;
          padding: 0.78rem !important;
          border: 1px solid rgb(var(--hydro-ink-rgb) / 7%) !important;
          border-left: 2px solid transparent !important;
          border-radius: 0.52rem !important;
          background: rgb(var(--hydro-ink-rgb) / 2.5%) !important;
          box-shadow: none !important;
          color: rgb(var(--hydro-ink-rgb) / 84%) !important;
          transition:
            border-color 0.2s ease,
            background-color 0.2s ease,
            transform 0.2s ease !important;
        }

        li[data-index]:hover,
        li[data-index][class~="!bg-primary"] {
          border-color: rgb(var(--hydro-search-accent-rgb) / 34%) !important;
          border-left-color: var(--hydro-search-selection-border) !important;
          background:
            linear-gradient(90deg, rgb(var(--hydro-search-accent-rgb) / 12%), transparent 74%),
            rgb(var(--hydro-paper-rgb) / 52%) !important;
        }

        li[data-index]:active {
          transform: translateY(1px) !important;
        }

        li[data-index] > span:first-child {
          color: rgb(var(--hydro-ink-rgb) / 48%) !important;
        }

        li[data-index]:hover > span:first-child,
        li[data-index][class~="!bg-primary"] > span:first-child {
          color: rgb(var(--hydro-search-accent-rgb) / 86%) !important;
        }

        li[data-index] h2 {
          color: rgb(var(--hydro-ink-rgb) / 88%) !important;
          font-size: 0.88rem !important;
          line-height: 1.45 !important;
        }

        li[data-index] p {
          color: rgb(var(--hydro-ink-rgb) / 60%) !important;
          font-size: 0.76rem !important;
          line-height: 1.65 !important;
        }

        li[data-index]:hover h2,
        li[data-index][class~="!bg-primary"] h2 {
          color: rgb(var(--hydro-ink-rgb) / 94%) !important;
        }

        li[data-index]:hover p,
        li[data-index][class~="!bg-primary"] p {
          color: rgb(var(--hydro-ink-rgb) / 72%) !important;
        }

        li[data-index] > span:last-child {
          color: rgb(var(--hydro-search-accent-rgb) / 78%) !important;
        }

        mark {
          border-radius: 0.24rem !important;
          background: var(--hydro-search-highlight-bg) !important;
          box-shadow: 0 0 0 1px rgb(var(--hydro-search-accent-rgb) / 18%) inset !important;
          color: var(--hydro-search-highlight-text) !important;
          font-weight: 800 !important;
          padding: 0.02em 0.18em !important;
          text-decoration: none !important;
        }

        li[data-index]:hover mark,
        li[data-index][class~="!bg-primary"] mark {
          background: rgb(var(--hydro-search-accent-rgb) / 34%) !important;
          color: var(--hydro-search-highlight-text) !important;
          text-decoration: none !important;
        }

        .sticky.bottom-0 {
          justify-content: space-between !important;
          gap: 0.75rem !important;
          padding: 0.62rem 0.72rem !important;
          border-top: 1px solid rgb(var(--hydro-ink-rgb) / 10%) !important;
          background: rgb(var(--hydro-paper-rgb) / 92%) !important;
        }

        kbd {
          border-color: rgb(var(--hydro-ink-rgb) / 12%) !important;
          border-radius: 0.34rem !important;
          background: rgb(var(--hydro-ink-rgb) / 3%) !important;
          box-shadow: none !important;
          color: rgb(var(--hydro-ink-rgb) / 72%) !important;
        }

        .os-scrollbar {
          --os-size: 7px;
          --os-handle-bg: rgb(var(--hydro-ink-rgb) / 18%);
          --os-handle-bg-hover: rgb(var(--hydro-ink-rgb) / 28%);
          --os-handle-bg-active: rgb(var(--hydro-ink-rgb) / 34%);
        }

        @media (max-width: 640px) {
          .sticky.bottom-0 {
            display: none !important;
          }

          li[data-index] {
            padding: 0.72rem !important;
          }
        }
      `;default:return``}}function _t(e){let t=e.shadowRoot;!t||mt.has(t)||(mt.add(t),new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(xt)})}).observe(t,{childList:!0,subtree:!0}))}function vt(e){let t=e.shadowRoot;if(!t)return;let n=gt(e.localName).trim();if(n&&!t.querySelector(`style[data-hydro-search-skin]`)){let e=document.createElement(`style`);e.dataset.hydroSearchSkin=``,e.textContent=n,t.append(e)}_t(e),St(t)}function yt(e){let t=e.updateComplete;ht.has(e)||!t||typeof t.then!=`function`||(ht.add(e),t.then(()=>{vt(e)}).catch(()=>void 0))}function bt(e){let t=e;vt(t),yt(t)}function xt(e){e instanceof Element&&(e.matches(pt)&&bt(e),e.querySelectorAll(pt).forEach(bt))}function St(e){e.querySelectorAll(pt).forEach(e=>{bt(e);let t=e.shadowRoot;t&&St(t)})}function Ct(){`customElements`in window&&(St(document),ft.forEach(e=>{customElements.whenDefined(e).then(()=>{St(document)}).catch(()=>void 0)}),new MutationObserver(e=>{e.forEach(e=>{e.addedNodes.forEach(xt)})}).observe(document.documentElement,{childList:!0,subtree:!0}))}var wt=[12,25,38,51,64,77,88],Tt=[16,28,40,52,64,76];function H(e,t,n){return Math.max(t,Math.min(n,e))}function Et(e){let t=2166136261;for(let n=0;n<e.length;n+=1)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function Dt(e){let t=e>>>0;return()=>(t=Math.imul(t^t>>>15,2246822519),t=Math.imul(t^t>>>13,3266489917),t^=t>>>16,(t>>>0)/4294967295)}function Ot(e){let t=H(e.chars,2,16),n=H(e.weight,0,12);return{radiusX:4.8+t*.78+n*.16,radiusY:4.2+t*.1+n*.22}}function kt(e,t){return t.reduce((t,n)=>{let r=Math.abs(e.x-n.x)/(e.radiusX+n.radiusX),i=Math.abs(e.y-n.y)/(e.radiusY+n.radiusY),a=Math.hypot(r,i);return a>=1?t:t+(1-a)*(1-a)},0)}function At(e,t=[]){let n=Dt(Et(`${e.index}:${e.label}:${e.chars}:${e.weight}`)),r=Ot(e),i=[];for(let t=0;t<10;t+=1){let a=wt[(e.index*3+t*2+Math.floor(n()*wt.length))%wt.length]??50,o=Tt[(e.index*5+t*3+Math.floor(n()*Tt.length))%Tt.length]??50,s=(n()-.5)*8.5,c=(n()-.5)*7.5,l=Math.floor(n()*5),u=H(e.weight,0,8)*.65,d=H(e.chars-6,0,10)*.46,f=r.radiusX*.42;i.push({...r,depth:l,drift:Math.floor(n()*13),lane:Math.floor(n()*9),orbit:Math.floor(n()*17),phase:Math.floor(n()*19),rise:Math.floor(n()*11),scale:.94+l*.025+H(e.weight,0,8)*.008,x:H(a+s,8+f,92-f),y:H(o+c-u+d,12,82)})}let a=i.sort((e,n)=>kt(e,t)-kt(n,t))[0]??{...r,depth:0,drift:6,lane:4,orbit:8,phase:0,rise:5,scale:1,x:50,y:50};return{depth:a.depth,drift:a.drift,lane:a.lane,orbit:a.orbit,phase:a.phase,rise:a.rise,scale:Number(a.scale.toFixed(3)),x:Number(a.x.toFixed(2)),y:Number(a.y.toFixed(2))}}function jt(e){let t=[];return e.map(e=>{let n=At(e,t);return t.push({...n,...Ot(e)}),n})}function Mt(e,t,n){let r=Number.parseFloat(window.getComputedStyle(e).getPropertyValue(t));return Number.isFinite(r)?r:n}function Nt(e,t){e.style.setProperty(`--tag-x`,String(t.x)),e.style.setProperty(`--tag-y`,String(t.y)),e.style.setProperty(`--tag-lane`,String(t.lane)),e.style.setProperty(`--tag-drift`,String(t.drift)),e.style.setProperty(`--tag-rise`,String(t.rise)),e.style.setProperty(`--tag-orbit`,String(t.orbit)),e.style.setProperty(`--tag-depth`,String(t.depth)),e.style.setProperty(`--tag-phase`,String(t.phase)),e.style.setProperty(`--tag-scale`,String(t.scale))}function Pt(e=document){let t=e.querySelector(`.hydro-tags-cloud`);if(!t)return;let n=Array.from(t.querySelectorAll(`.hydro-tag-chip`));if(n.length===0)return;let r=()=>{if(!window.matchMedia(`(min-width: 721px)`).matches){t.dataset.hydroTagCloudReady=`true`;return}jt(n.map((e,t)=>({chars:Mt(e,`--tag-chars`,e.textContent?.trim().length||2),index:t,label:e.querySelector(`.hydro-tag-chip__name`)?.textContent?.trim()||e.textContent?.trim()||``,weight:Mt(e,`--tag-weight`,0)}))).forEach((e,t)=>{Nt(n[t],e)}),t.dataset.hydroTagCloudReady=`true`};r(),window.addEventListener(`resize`,r,{passive:!0})}e.registerPlugin(n);var U=window.matchMedia(`(prefers-reduced-motion: reduce)`),W=document.body.dataset.enableMotion!==`false`,Ft=document.body.dataset.themeTransition!==`false`,It=document.body.dataset.enableHeroMotion!==`false`,Lt=document.body.dataset.enableCardHover!==`false`,Rt=document.body.dataset.enableLightbox!==`false`,zt=document.body.dataset.smoothScroll!==`false`,Bt=window.matchMedia(`(max-width: 48rem)`),Vt=`hydro-color-scheme`,Ht=`halo.upvoted.moment.names`,Ut=`halo.upvoted.post.names`;function Wt(e){return e===`auto`||e===`dark`||e===`light`}function Gt(){try{let e=window.localStorage.getItem(Vt);return Wt(e)?e:null}catch{return null}}function Kt(e){try{window.localStorage.setItem(Vt,e)}catch{}}function qt(e){try{let t=JSON.parse(window.localStorage.getItem(e)||`[]`);return Array.isArray(t)?t.filter(e=>typeof e==`string`):[]}catch{return[]}}function Jt(e,t){try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}}function G(){return window.__lenis}function Yt(e,t=!0){return e==null||e===``?t:e!==`false`}function Xt(e,t,n){return e?.dataset[t]||document.body.dataset[t]||n}function Zt(e,t){if(e==null||e.trim()===``)return t;let n=Number.parseFloat(e);return Number.isFinite(n)?n:t}function Qt(e){let t=e.trim(),n=/^#([\da-f])([\da-f])([\da-f])$/i.exec(t);if(n)return n.slice(1).map(e=>Number.parseInt(e+e,16)).join(` `);let r=/^#([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i.exec(t);if(r)return r.slice(1).map(e=>Number.parseInt(e,16)).join(` `);let i=/^rgba?\(\s*([\d.]+)(?:\s+|,\s*)([\d.]+)(?:\s+|,\s*)([\d.]+)/i.exec(t);return i?i.slice(1,4).map(e=>Math.max(0,Math.min(255,Math.round(Number.parseFloat(e))))).join(` `):``}function $t(){let e=document.documentElement,t=window.getComputedStyle(e),n=t.getPropertyValue(`--hydro-coral-light`).trim()||t.getPropertyValue(`--hydro-coral`).trim()||`#ff6b6b`,r=t.getPropertyValue(`--hydro-coral-dark`).trim()||n||`#ff8a8a`,i=Qt(n),a=Qt(r);e.dataset.hydroSmoothScroll=zt?`true`:`false`,e.dataset.hydroMotion=W?`on`:`off`,e.dataset.hydroThemeTransition=Ft?`true`:`false`,e.dataset.hydroHeroMotion=It?`true`:`false`,e.dataset.hydroCardHover=Lt?`true`:`false`,e.dataset.hydroLightbox=Rt?`true`:`false`,e.style.setProperty(`--hydro-coral-light`,n),e.style.setProperty(`--hydro-coral-dark`,r),i&&e.style.setProperty(`--hydro-coral-light-rgb`,i),a&&e.style.setProperty(`--hydro-coral-dark-rgb`,a)}function en(e){let t=Math.max(0,e),n=G();if(n?.scrollTo){n.scrollTo(t);return}window.scrollTo({top:t,behavior:zt&&W?`smooth`:`auto`})}function tn(e,t=-92){en(window.scrollY+e.getBoundingClientRect().top+t)}async function nn(e,t=`复制链接`){try{await navigator.clipboard.writeText(e)}catch{window.prompt(t,e)}}function K(e,t={}){window.HydroNotice?.show({message:e,...t})}function rn(){let e=document.body.dataset.memberPluginAvailable;return e==null?!0:e===`true`}function an(){let e=document.body.dataset.memberAuthenticated;return e==null?!0:e===`true`}function on(e,t=`会员功能`){K(`请先安装并启用会员插件`,{id:e,title:t,variant:`warning`})}function sn(e,t=`会员功能`){K(`请先登录后再使用会员功能`,{id:e,title:t,variant:`warning`})}function q(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`).replace(/'/g,`&#039;`)}function cn(e){return`${((typeof e==`number`&&Number.isFinite(e)?e:0)/60).toFixed(1)}h`}function ln(e=`Hydro`){return`data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 215"><rect width="460" height="215" fill="#f3f3f3"/><path d="M0 214h460" stroke="#111" stroke-opacity=".18"/><text x="28" y="118" fill="#111" fill-opacity=".58" font-family="monospace" font-size="24">${q(e)}</text></svg>`)}`}function un(){if(!W||!zt)return;let r=new t({duration:1.2,easing:e=>Math.min(1,1.001-2**(-10*e)),gestureOrientation:`vertical`,orientation:`vertical`,smoothWheel:!0,touchMultiplier:2,wheelMultiplier:1});window.__lenis=r,r.on(`scroll`,()=>{n.update(),window.dispatchEvent(new Event(`hydro:scroll`))}),e.ticker.add(e=>r.raf(e*1e3)),e.ticker.lagSmoothing(0)}function dn(){let e=document.documentElement,t=document.querySelectorAll(`[data-hydro-theme-toggle]`);document.body.dataset.allowColorSwitch===`false`&&t.forEach(e=>{e.hidden=!0});let n=e.dataset.themeDefault??null,r=Wt(n)?n:`auto`,i=window.matchMedia(`(prefers-color-scheme: dark)`),a=window.matchMedia(`(prefers-reduced-motion: reduce)`),o=!1,s=e=>e===`dark`||e===`auto`&&i.matches?`dark`:`light`,c=e=>{let t=e?.getBoundingClientRect(),n=t?t.left+t.width/2:window.innerWidth/2,r=t?t.top+t.height/2:64;return{radius:Math.hypot(Math.max(n,window.innerWidth-n),Math.max(r,window.innerHeight-r)),x:n,y:r}},l=n=>{let r=s(n);e.dataset.hydroTheme=r,e.dataset.colorScheme=n,e.classList.toggle(`dark`,n===`dark`),e.classList.toggle(`light`,n===`light`),e.classList.toggle(`color-scheme-dark`,n===`dark`),e.classList.toggle(`color-scheme-light`,n===`light`),e.classList.toggle(`color-scheme-auto`,n===`auto`),e.style.colorScheme=r;let i=window.getComputedStyle(e),a=i.getPropertyValue(r===`dark`?`--hydro-coral-dark`:`--hydro-coral-light`).trim()||i.getPropertyValue(`--hydro-coral`).trim(),o=i.getPropertyValue(r===`dark`?`--hydro-coral-dark-rgb`:`--hydro-coral-light-rgb`).trim()||Qt(a);a&&(e.style.setProperty(`--hydro-coral`,a),e.style.setProperty(`--hydro-accent`,a)),o&&(e.style.setProperty(`--hydro-coral-rgb`,o),e.style.setProperty(`--hydro-accent-rgb`,o)),t.forEach(e=>{let t=r===`dark`?document.body.dataset.themeToLightLabel||`切换为浅色模式`:document.body.dataset.themeToDarkLabel||`切换为深色模式`,n=r===`dark`?`浅色模式`:`深色模式`;e.setAttribute(`aria-label`,t),e.setAttribute(`title`,t),e.setAttribute(`aria-pressed`,String(r===`dark`)),e.dataset.hydroThemeNext=r===`dark`?`light`:`dark`;let i=e.querySelector(`[data-hydro-theme-toggle-label]`);i&&(i.textContent=n)})},u=t=>{e.style.setProperty(`--hydro-theme-transition-x`,`${t.x}px`),e.style.setProperty(`--hydro-theme-transition-y`,`${t.y}px`),e.style.setProperty(`--hydro-theme-transition-radius`,`${t.radius}px`)},d=(t,n)=>{let r=s(t),i=window.getComputedStyle(e),a=i.getPropertyValue(r===`dark`?`--hydro-dark-bg`:`--hydro-light-bg`).trim()||i.getPropertyValue(`--hydro-bg`).trim(),c=document.createElement(`div`);c.className=`hydro-theme-wipe`,c.style.setProperty(`--hydro-theme-wipe-bg`,a),c.style.setProperty(`--hydro-theme-transition-x`,`${n.x}px`),c.style.setProperty(`--hydro-theme-transition-y`,`${n.y}px`),c.style.setProperty(`--hydro-theme-transition-radius`,`${n.radius}px`),document.body.append(c),window.requestAnimationFrame(()=>{c.classList.add(`is-expanding`)}),window.setTimeout(()=>{l(t)},280),window.setTimeout(()=>{c.classList.add(`is-leaving`)},1e3),window.setTimeout(()=>{c.remove(),e.classList.remove(`is-theme-transitioning`),o=!1},2e3)},f=(t,n,r=!1)=>{if(o)return;if(!W||!Ft||!r&&a.matches){l(t);return}o=!0,e.classList.add(`is-theme-transitioning`);let i=c(n);u(i),d(t,i)},p=e=>{K(s(e)===`dark`?`深色模式已开启`:`浅色模式已开启`,{id:`hydro-theme-mode`,title:`外观`,variant:`success`})};l(Gt()??r),t.forEach(t=>{t.addEventListener(`click`,()=>{let n=e.dataset.hydroTheme===`dark`?`light`:`dark`;Kt(n),f(n,t,!0),p(n)})}),i.addEventListener(`change`,()=>{!Gt()&&r===`auto`&&f(`auto`)})}function fn(){let e=document.querySelector(`[data-hydro-nav]`),t=document.querySelectorAll(`[data-hydro-plugin-search-toggle]`),n=document.querySelector(`[data-hydro-mobile-toggle]`),r=document.querySelector(`[data-hydro-mobile-menu]`),i=.001,a=1.65,o=.14,s=.8,c=4.2,l=e?.querySelector(`.hydro-nav__inner`)??null,u=e?.querySelector(`.hydro-logo`)??null,d=e?.querySelector(`.hydro-logo__text`)??null,f=e?.querySelector(`.hydro-nav__actions`)??null,p=()=>Array.from(e?.querySelectorAll(`.hydro-icon-button`)??[]).find(e=>e.getClientRects().length>0)??null,m=window.scrollY>=100?`pill`:`top`,h=null,g=null,_=+(m===`pill`),v=null,y=null,b=performance.now(),x=_,ee=window.scrollY,te=performance.now(),S=0,C=0,w=0,T=0;m===`pill`&&e?.classList.add(`is-scrolled`);function E(){return W}function D(e){return e<=0?0:e>=1?1:e}function O(e,t,n){return e+(t-e)*n}function k(e,t,n=0){let r=Number.parseFloat(e.getPropertyValue(t));return Number.isFinite(r)?r:n}function ne(e){return e.deltaMode===WheelEvent.DOM_DELTA_LINE?e.deltaY*16:e.deltaMode===WheelEvent.DOM_DELTA_PAGE?e.deltaY*window.innerHeight:e.deltaY}function A(e){let t=performance.now(),n=w>0?t-w:360,r=Math.max(16,n>180?360:n),i=Math.abs(ne(e))/r;C=C===0||n>180?i:C*.45+i*.55,w=t,T=t}function re(){let e=performance.now(),t=window.scrollY,n=e-te,r=Math.abs(t-ee);if(n>180)S=0;else if(r>0){let e=r/Math.max(16,n);S=S===0?e:S*.65+e*.35}ee=t,te=e}function j(){return performance.now()-T<=260?C:S}function M(){let e=j();return e<=s?a:e>=c?o:a-(1-(1-(e-s)/(c-s))**2.2)*(a-o)}function N(){return window.matchMedia(`(max-width: 720px)`).matches}function ie(e){let t=N();return e===`top`?t?{backgroundAlpha:0,borderAlpha:0,borderRadius:0}:{backgroundAlpha:34,borderAlpha:5,borderRadius:999}:t?{backgroundAlpha:98,borderAlpha:8,borderRadius:999}:{backgroundAlpha:84,borderAlpha:7,borderRadius:999}}function ae(){e&&([`top`,`left`,`right`,`width`,`min-width`,`padding`,`border`,`border-radius`,`background`,`box-shadow`,`backdrop-filter`,`-webkit-backdrop-filter`,`transform`].forEach(t=>e.style.removeProperty(t)),[`--hydro-nav-progress`,`--hydro-nav-background-alpha`,`--hydro-nav-border-alpha`,`--hydro-nav-radius`,`--hydro-nav-inner-padding`,`--hydro-nav-inner-gap`,`--hydro-nav-logo-width`,`--hydro-nav-logo-min-height`,`--hydro-nav-lockup-opacity`,`--hydro-nav-lockup-scale`,`--hydro-nav-mark-opacity`,`--hydro-nav-mark-scale`,`--hydro-nav-text-max-width`,`--hydro-nav-text-font-size`,`--hydro-nav-actions-gap`,`--hydro-nav-icon-size`,`--hydro-nav-icon-background-alpha`,`--hydro-nav-icon-border-alpha`,`--hydro-nav-icon-svg-size`].forEach(t=>e.style.removeProperty(t)))}function oe(t){if(!e||!l)return null;e.classList.toggle(`is-scrolled`,t===`pill`);let n=e.getBoundingClientRect(),r=l.getBoundingClientRect(),i=t===`top`&&!N()?r:n,a=window.getComputedStyle(e),o=window.getComputedStyle(l),s=t===`top`&&!N()?o:a,c=u?window.getComputedStyle(u):null,m=u?.getBoundingClientRect(),h=d?window.getComputedStyle(d):null,g=d?.getBoundingClientRect(),_=f?window.getComputedStyle(f):null,v=p(),y=v?.querySelector(`svg`)??null,b=v?.getBoundingClientRect(),x=y?window.getComputedStyle(y):null;return{...ie(t),actionsGap:_?k(_,`gap`):0,iconBackgroundAlpha:t===`top`&&N()?58:0,iconBorderAlpha:t===`top`&&N()?7:0,iconSize:b?.width??0,iconSvgSize:x?k(x,`width`):0,innerGap:k(o,`gap`),innerPaddingBottom:k(s,`padding-bottom`),innerPaddingLeft:k(s,`padding-left`),innerPaddingRight:k(s,`padding-right`),innerPaddingTop:k(s,`padding-top`),left:i.left,logoMinHeight:c?k(c,`min-height`,m?.height??0):0,logoWidth:m?.width??0,textFontSize:h?k(h,`font-size`):0,textMaxWidth:h?k(h,`max-width`,g?.width??0):0,top:i.top,width:i.width}}function P(){if(!e||!l)return;let t=_>=1-i?`pill`:`top`;e.classList.remove(`is-nav-morphing`),ae(),h=oe(`top`),g=oe(`pill`),e.classList.toggle(`is-scrolled`,t===`pill`),se(_,!1)}function F(t,n,r=`px`){e?.style.setProperty(t,`${Number(n.toFixed(3))}${r}`)}function se(t,n=!0){if(!e)return;let r=D(t);_=r;let a=r>=1-i?`pill`:`top`;if(m=a,!E()){e.classList.remove(`is-nav-morphing`),ae(),e.classList.toggle(`is-scrolled`,a===`pill`);return}if(!h||!g){n&&P();return}if(r<=i||r>=1-i){e.classList.remove(`is-nav-morphing`),e.style.setProperty(`--hydro-nav-logo-duration`,`0ms`),ae(),e.classList.toggle(`is-scrolled`,a===`pill`);return}let o=h,s=g,c=O(o.top,s.top,r),l=O(o.left,s.left,r),u=O(o.width,s.width,r),d=O(o.backgroundAlpha,s.backgroundAlpha,r),f=O(o.borderAlpha,s.borderAlpha,r),p=O(o.borderRadius,s.borderRadius,r);e.classList.add(`is-nav-morphing`),e.classList.remove(`is-scrolled`),e.style.transform=`translate3d(${l.toFixed(3)}px, ${c.toFixed(3)}px, 0)`,e.style.width=`${u.toFixed(3)}px`,e.style.setProperty(`--hydro-nav-progress`,r.toFixed(4)),F(`--hydro-nav-background-alpha`,d,`%`),F(`--hydro-nav-border-alpha`,f,`%`),F(`--hydro-nav-radius`,p),e.style.setProperty(`--hydro-nav-inner-padding`,`${O(o.innerPaddingTop,s.innerPaddingTop,r).toFixed(3)}px ${O(o.innerPaddingRight,s.innerPaddingRight,r).toFixed(3)}px ${O(o.innerPaddingBottom,s.innerPaddingBottom,r).toFixed(3)}px ${O(o.innerPaddingLeft,s.innerPaddingLeft,r).toFixed(3)}px`),F(`--hydro-nav-inner-gap`,O(o.innerGap,s.innerGap,r)),F(`--hydro-nav-logo-width`,O(o.logoWidth,s.logoWidth,r)),F(`--hydro-nav-logo-min-height`,O(o.logoMinHeight,s.logoMinHeight,r)),e.style.setProperty(`--hydro-nav-lockup-opacity`,(1-r).toFixed(4)),e.style.setProperty(`--hydro-nav-lockup-scale`,O(1,.86,r).toFixed(4)),e.style.setProperty(`--hydro-nav-mark-opacity`,r.toFixed(4)),e.style.setProperty(`--hydro-nav-mark-scale`,O(.78,1,r).toFixed(4)),(o.textMaxWidth>0||s.textMaxWidth>0)&&F(`--hydro-nav-text-max-width`,O(o.textMaxWidth,s.textMaxWidth,r)),(o.textFontSize>0||s.textFontSize>0)&&F(`--hydro-nav-text-font-size`,O(o.textFontSize,s.textFontSize,r)),F(`--hydro-nav-actions-gap`,O(o.actionsGap,s.actionsGap,r)),F(`--hydro-nav-icon-size`,O(o.iconSize,s.iconSize,r)),F(`--hydro-nav-icon-background-alpha`,O(o.iconBackgroundAlpha,s.iconBackgroundAlpha,r),`%`),F(`--hydro-nav-icon-border-alpha`,O(o.iconBorderAlpha,s.iconBorderAlpha,r),`%`),F(`--hydro-nav-icon-svg-size`,O(o.iconSvgSize,s.iconSvgSize,r))}function ce(){let e=G()?.targetScroll;return typeof e==`number`&&Number.isFinite(e)?e:window.scrollY}function le(){return D(ce()/100)}function ue(){y!==null&&(window.cancelAnimationFrame(y),y=null)}function de(e){y=null;let t=Math.min(64,Math.max(16,e-b));b=e;let n=x-_;if(Math.abs(n)<=i){se(x,!1);return}let r=M(),a=Math.max(i,t/(r*1e3));se(Math.abs(n)<=a?x:_+Math.sign(n)*a,!1),Math.abs(x-_)>i&&(y=window.requestAnimationFrame(de))}function I(){y===null&&(b=performance.now(),y=window.requestAnimationFrame(de))}function L(e,t=!1){if(x=D(e),t||!E()){ue(),se(x,!1);return}I()}function fe(t=!1){e&&(re(),L(le(),t))}let pe=()=>{v||=requestAnimationFrame(()=>{fe(),v=null})};P(),fe(!0),window.addEventListener(`wheel`,A,{passive:!0}),window.addEventListener(`scroll`,pe,{passive:!0}),window.addEventListener(`hydro:scroll`,pe),window.addEventListener(`resize`,()=>{P(),fe(!0)}),window.addEventListener(`load`,()=>{P(),fe(!0)},{once:!0}),U.addEventListener(`change`,()=>{P(),fe(!0)}),t.forEach(e=>{e.addEventListener(`click`,()=>{window.SearchWidget?.open?.()})}),n?.addEventListener(`click`,()=>{n.classList.toggle(`is-open`),r?.classList.toggle(`is-open`),document.body.classList.toggle(`hydro-menu-lock`,r?.classList.contains(`is-open`))});let me=new URL(window.location.href),R=e=>{try{let t=new URL(e.href,window.location.origin);if(t.pathname!==me.pathname||t.search!==me.search)return-1;let n=e.getAttribute(`href`)?.trim()??``,r=n===`#`||n.endsWith(`#`)||n.startsWith(`javascript:`);return(e.classList.contains(`hydro-mobile-menu__link--level-3`)?3:e.classList.contains(`hydro-mobile-menu__link--level-2`)?2:1)*10-(r?40:0)}catch{return-1}},z=Array.from(r?.querySelectorAll(`.hydro-mobile-menu__link`)??[]).map(e=>({link:e,score:R(e)})).filter(({score:e})=>e>=0).sort((e,t)=>t.score-e.score)[0]?.link;z?.closest(`.hydro-mobile-menu__item`)?.classList.add(`is-current`),z?.closest(`.hydro-mobile-menu__item--branch`)?.classList.add(`is-expanded`),z?.closest(`.hydro-mobile-menu__children`)?.closest(`.hydro-mobile-menu__item--branch`)?.classList.add(`is-current-parent`,`is-expanded`),z?.closest(`.hydro-mobile-menu__item--branch`)?.querySelector(`:scope > .hydro-mobile-menu__row [data-hydro-mobile-submenu-toggle]`)?.setAttribute(`aria-expanded`,`true`),z?.closest(`.hydro-mobile-menu__children`)?.closest(`.hydro-mobile-menu__item--branch`)?.querySelector(`:scope > .hydro-mobile-menu__row [data-hydro-mobile-submenu-toggle]`)?.setAttribute(`aria-expanded`,`true`),r?.querySelectorAll(`[data-hydro-mobile-submenu-toggle]`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.closest(`.hydro-mobile-menu__item--branch`);if(!t)return;let n=t.classList.toggle(`is-expanded`);e.setAttribute(`aria-expanded`,n?`true`:`false`)})}),r?.querySelectorAll(`a`).forEach(e=>{e.addEventListener(`click`,()=>{n?.classList.remove(`is-open`),r.classList.remove(`is-open`),document.body.classList.remove(`hydro-menu-lock`)})}),document.querySelectorAll(`[data-hydro-dropdown]`).forEach(e=>{let t=e.querySelector(`.hydro-dropdown__menu`);if(!t)return;let n,r=()=>{n&&window.clearTimeout(n),t.classList.add(`is-visible`)},i=()=>{n=window.setTimeout(()=>{t.classList.remove(`is-visible`)},150)};e.addEventListener(`mouseenter`,r),e.addEventListener(`mouseleave`,i),t.addEventListener(`mouseenter`,r),t.addEventListener(`mouseleave`,i)})}function pn(){let t=document.querySelector(`[data-hydro-hero]`);if(!t||!W)return;let r=t.querySelector(`[data-hydro-hero-image]`),i=t.querySelector(`[data-hydro-hero-motion]`),a=r?.closest(`.hydro-hero__image`)??null,o=t.querySelector(`[data-split-title]`);o?.textContent&&(o.innerHTML=Array.from(o.textContent).map(e=>`<span class="split-char"><span>${e===` `?`&nbsp;`:q(e)}</span></span>`).join(``));let s=i?e.quickTo(i,`x`,{duration:.35,ease:`power3.out`}):void 0,c=i?e.quickTo(i,`y`,{duration:.18,ease:`power1.out`}):void 0,l=0,u=0,d=0,f=()=>{s?.(u),c?.(l+d)},p=e.context(()=>{e.fromTo(r,{clipPath:`inset(100% 0 0 0)`,scale:1.1},{clipPath:`inset(0% 0 0 0)`,duration:1.5,ease:`expo.out`,scale:1,delay:.3}),e.fromTo(`.split-char span`,{y:`100%`},{y:`0%`,duration:1,ease:`expo.out`,stagger:.05,delay:.6}),e.fromTo(`.hydro-list-item`,{opacity:0,y:50},{opacity:1,y:0,duration:.8,ease:`expo.out`,stagger:.1,delay:.9}),n.create({trigger:t,start:`top top`,end:`bottom top`,scrub:!0,onUpdate:e=>{l=e.progress*-50,f()}})},t);if(!It){window.addEventListener(`pagehide`,()=>p.revert(),{once:!0});return}let m=a??i??r,h=null,g=0,_=0,v=0,y=()=>m?(h=m.getBoundingClientRect(),h):null,b=()=>{v=0;let e=h??y();if(!e||e.width<=0||e.height<=0)return;let t=Math.max(0,Math.min(1,(g-e.left)/e.width)),n=Math.max(0,Math.min(1,(_-e.top)/e.height));u=(t-.5)*22,d=(n-.5)*22,f()};m?.addEventListener(`pointerenter`,()=>{y()}),m?.addEventListener(`pointermove`,e=>{g=e.clientX,_=e.clientY,!v&&(v=window.requestAnimationFrame(b))},{passive:!0}),m?.addEventListener(`pointerleave`,()=>{h=null,v&&=(window.cancelAnimationFrame(v),0),u=0,d=0,f()}),window.addEventListener(`resize`,()=>{h=null},{passive:!0}),window.addEventListener(`pagehide`,()=>p.revert(),{once:!0})}function mn(){let e=we(document,{fallbackErrorText:`图片暂时不可见`});e.initProgressiveImages(),e.initDeferredHeroVideo()}function hn(){if(!W)return;document.querySelectorAll(`[data-reveal-section]`).forEach(t=>{let n=t.querySelector(`[data-reveal-title]`),r=Array.from(t.querySelectorAll(`[data-tilt-card]`));[n,...r].filter(Boolean).length!==0&&(e.set(n,{opacity:0,y:50,force3D:!0}),e.set(r,{opacity:U.matches?.2:.08,rotateX:U.matches?0:10,scale:U.matches?1:.965,transformPerspective:1e3,transformOrigin:`50% 70%`,willChange:`transform, opacity`,y:U.matches?12:56,force3D:!0}),e.timeline({scrollTrigger:{trigger:t,start:`top 78%`,once:!0}}).to(n,{opacity:1,duration:U.matches?.35:.68,ease:`expo.out`,y:0}).to(r,{opacity:1,rotateX:0,scale:1,duration:U.matches?.65:1.75,ease:`power2.out`,stagger:U.matches?.1:.24,y:0,onComplete:()=>e.set(r,{clearProps:`transform,willChange`})},`-=0.08`))});let t=document.querySelector(`[data-about-section]`);t&&e.fromTo(`.about-text-line`,{opacity:0,y:50},{opacity:1,y:0,duration:.8,ease:`expo.out`,stagger:.1,scrollTrigger:{trigger:t,start:`top 70%`,toggleActions:`play none none reverse`}})}function gn(e,t=900){let n=window;if(n.requestIdleCallback){n.requestIdleCallback(e,{timeout:t});return}window.setTimeout(e,120)}function _n(e){let t=()=>{typeof e.decode==`function`&&e.decode().catch(()=>{})};if(e.complete&&e.naturalWidth>0){t();return}e.addEventListener(`load`,t,{once:!0})}function vn(){document.querySelectorAll(`img[data-fallback-cover]:not([data-progressive-image])`).forEach(e=>{let t=e.dataset.fallbackCover;if(!t)return;let n=()=>{e.dataset.fallbackCoverApplied!==`true`&&(e.dataset.fallbackCoverApplied=`true`,e.src=t)};e.addEventListener(`error`,n),e.complete&&e.naturalWidth===0&&n()})}function yn(){let e=document.querySelector(`#articles`);if(!e)return;let t=Array.from(e.querySelectorAll(`[data-prewarm-image]`));if(t.length===0)return;let n=!1,r=()=>{n||(n=!0,t.forEach(e=>{e.loading=`eager`,e.decoding=`async`,_n(e)}))};if(gn(r,1200),!(`IntersectionObserver`in window)){r();return}let i=new IntersectionObserver(e=>{e.some(e=>e.isIntersecting)&&(r(),i.disconnect())},{rootMargin:`1100px 0px`});i.observe(e)}function bn(){if(!W||!Lt||!window.matchMedia(`(hover: hover) and (pointer: fine)`).matches)return;let t=Array.from(document.querySelectorAll(`[data-tilt-card]`));if(t.length===0)return;let n=[];t.forEach(t=>{let r=null;if(!t.querySelector(`.card-sheen`)){let e=document.createElement(`span`);e.className=`card-sheen`,e.setAttribute(`aria-hidden`,`true`),t.appendChild(e)}e.set(t,{"--hydro-card-lift":`0px`,"--hydro-card-scale":`1`,"--hydro-card-tilt-x":`0deg`,"--hydro-card-tilt-y":`0deg`,"--sheen-x":`50%`,"--sheen-y":`50%`,transformPerspective:1e3,transformStyle:`preserve-3d`});let i=()=>{if(!r){let e=t.style.transform;t.style.transform=`none`;let n=t.getBoundingClientRect();t.style.transform=e,r={absoluteLeft:n.left+window.scrollX,absoluteTop:n.top+window.scrollY,width:n.width,height:n.height}}return r},a=n=>{let r=i();if(r.width<=0||r.height<=0)return;let a=n.pageX-r.absoluteLeft,o=n.pageY-r.absoluteTop,s=r.width/2,c=r.height/2,l=(o-c)/c*6.5,u=-((a-s)/s)*6.5;e.to(t,{"--hydro-card-tilt-x":`${l}deg`,"--hydro-card-tilt-y":`${u}deg`,"--sheen-x":`${a/r.width*100}%`,"--sheen-y":`${o/r.height*100}%`,duration:.15,ease:`power2.out`,overwrite:`auto`})};t.addEventListener(`pointerenter`,n=>{i(),t.classList.add(`is-hydro-card-hovered`),e.to(t,{"--hydro-card-lift":`-10px`,"--hydro-card-scale":`1.024`,duration:.15,ease:`power2.out`,overwrite:`auto`}),a(n)}),t.addEventListener(`pointermove`,a,{passive:!0}),t.addEventListener(`pointerleave`,()=>{t.classList.remove(`is-hydro-card-hovered`),e.to(t,{"--hydro-card-lift":`0px`,"--hydro-card-scale":`1`,"--hydro-card-tilt-x":`0deg`,"--hydro-card-tilt-y":`0deg`,"--sheen-x":`50%`,"--sheen-y":`50%`,duration:.45,ease:`power3.out`,overwrite:`auto`})}),n.push(()=>{r=null})}),window.addEventListener(`resize`,()=>{n.forEach(e=>e())},{passive:!0})}function xn(){let e=document.querySelector(`[data-categories-section]`),t=document.querySelector(`[data-hydro-cursor]`);if(!e||!t||!W||!window.matchMedia(`(hover: hover) and (pointer: fine)`).matches)return;let n=0,r=0,i=0,a=()=>{i=0,t.style.setProperty(`--hydro-cursor-x`,`${n}px`),t.style.setProperty(`--hydro-cursor-y`,`${r}px`)},o=e=>{n=e.clientX,r=e.clientY,!i&&(i=window.requestAnimationFrame(a))};e.querySelectorAll(`.hydro-category-slice`).forEach(e=>{e.addEventListener(`pointerenter`,e=>{o(e),t.classList.add(`is-visible`)}),e.addEventListener(`pointerleave`,()=>t.classList.remove(`is-visible`))}),e.addEventListener(`pointermove`,o,{passive:!0}),e.addEventListener(`pointerleave`,()=>{t.classList.remove(`is-visible`),i&&=(window.cancelAnimationFrame(i),0)})}function Sn(){if(!W)return;let t=document.querySelector(`.hydro-marquee-track`),r=document.querySelector(`.hydro-footer`);if(!t||!r)return;let i=e.to(t,{duration:20,ease:`none`,repeat:-1,x:`-50%`});n.create({trigger:r,start:`top bottom`,end:`bottom bottom`,onUpdate:e=>i.timeScale(Math.max(.5,1+e.getVelocity()/5e3))})}function Cn(){let t=document.querySelector(`.hydro-author-page`);if(!t)return;let n=t.querySelector(`[data-hydro-author-hero]`),r=t.querySelector(`[data-hydro-author-portrait]`),i=t.querySelector(`[data-hydro-author-work]`),a=t.querySelector(`.hydro-author-hero__rail`),o=t.querySelector(`.hydro-author-hero__copy`),s=t.querySelector(`.hydro-author-card`),c=Array.from(t.querySelectorAll(`.hydro-author-piece`));if(t.classList.add(`is-author-ready`),!W||U.matches)return;let l=[a,o,s].filter(Boolean);e.fromTo(l,{autoAlpha:0,y:28,filter:`blur(8px)`},{autoAlpha:1,duration:.8,ease:`expo.out`,filter:`blur(0px)`,stagger:.08,y:0}),n&&r&&e.to(r,{ease:`none`,rotate:1.4,scrollTrigger:{trigger:n,start:`top top`,end:`bottom top`,scrub:!0},yPercent:-5}),i&&c.length>0&&e.fromTo(c,{autoAlpha:0,x:-18},{autoAlpha:1,duration:.72,ease:`expo.out`,scrollTrigger:{trigger:i,start:`top 82%`,once:!0},stagger:.06,x:0})}function wn(e,t){let n=e.toLowerCase().trim().replace(/[^\u4e00-\u9fa5\w\s-]/g,``).replace(/\s+/g,`-`).replace(/-+/g,`-`).replace(/^-|-$/g,``);return n?`post-${n}`:`post-section-${t+1}`}function Tn(e,t){if(e.querySelector(`:scope > .hydro-post-heading-anchor`))return;let n=document.createElement(`a`);n.className=`hydro-post-heading-anchor`,n.href=`#${t}`,n.setAttribute(`aria-label`,`复制此段落链接`),n.textContent=`#`,n.addEventListener(`click`,async r=>{r.preventDefault(),tn(e);let i=new URL(window.location.href);i.hash=t,history.replaceState(null,``,i);try{await navigator.clipboard.writeText(i.href),n.classList.add(`is-copied`),window.setTimeout(()=>n.classList.remove(`is-copied`),900)}catch{}}),e.append(n)}function En(e){let t=[],n=[];return e.forEach(e=>{let r=e.querySelector(`.hydro-post-heading-anchor`),i=Array.from(e.childNodes).filter(e=>e!==r).map(e=>e.textContent??``).join(``).trim(),a=Number.parseInt(e.tagName.replace(`H`,``),10),o={children:[],depth:a,heading:e,id:e.id,title:i};for(;n.length>0&&n[n.length-1].depth>=a;)n.pop();let s=n[n.length-1];s?s.children.push(o):t.push(o),n.push(o)}),t}function Dn(e,t){e.querySelectorAll(`.hydro-post-toc__item`).forEach(e=>{e.classList.remove(`is-active`,`has-active`)});let n=e.querySelector(`.hydro-post-toc__item[data-target-id="${CSS.escape(t)}"]`);if(!n)return;n.classList.add(`is-active`);let r=n.parentElement?.closest(`.hydro-post-toc__item`);for(;r;)r.classList.add(`has-active`,`is-expanded`),r.querySelector(`:scope > .hydro-post-toc__row > .hydro-post-toc__toggle`)?.setAttribute(`aria-expanded`,`true`),r=r.parentElement?.closest(`.hydro-post-toc__item`)??null;n.scrollIntoView({block:`nearest`})}function On(e,t){let n=document.createElement(`ol`);return n.className=`hydro-post-toc__list`,e.forEach(e=>{let r=document.createElement(`li`);r.className=`hydro-post-toc__item`,r.dataset.depth=String(e.depth),r.dataset.targetId=e.id;let i=document.createElement(`div`);i.className=`hydro-post-toc__row`;let a=document.createElement(`button`);a.className=`hydro-post-toc__toggle`,a.type=`button`,a.setAttribute(`aria-label`,`展开 ${e.title}`),a.setAttribute(`aria-expanded`,e.children.length>0?`true`:`false`),a.innerHTML=`<svg viewBox="0 0 16 16" aria-hidden="true"><path d="m6 3.5 4.5 4.5L6 12.5"></path></svg>`,e.children.length===0?(a.hidden=!0,a.disabled=!0):(r.classList.add(`is-expanded`),a.addEventListener(`click`,()=>{let e=!r.classList.contains(`is-expanded`);r.classList.toggle(`is-expanded`,e),a.setAttribute(`aria-expanded`,String(e))}));let o=document.createElement(`a`);o.className=`hydro-post-toc__link`,o.href=`#${e.id}`,o.dataset.depth=String(e.depth),o.textContent=e.title,o.addEventListener(`click`,t=>{t.preventDefault(),tn(e.heading),history.replaceState(null,``,`#${e.id}`),e.heading.classList.add(`toc-highlight`),window.setTimeout(()=>e.heading.classList.remove(`toc-highlight`),1400)}),i.append(a,o),r.append(i),t.set(e.id,o),e.children.length>0&&r.append(On(e.children,t)),n.append(r)}),n}function kn(){let e=document.querySelector(`.hydro-post-page`);if(!e||!Yt(e.dataset.postEnableToc))return;let t=e.querySelector(`#post-content`),n=e.querySelector(`[data-post-toc-panel]`),r=e.querySelector(`[data-post-toc]`),i=e.querySelector(`[data-post-toc-state]`);if(!t||!n||!r||!i)return;let a=Array.from(t.querySelectorAll(`h2, h3, h4, h5`)).filter(e=>(e.textContent??``).trim().length>0);if(a.length===0){n.classList.add(`is-empty`),i.textContent=i.dataset.emptyText||`无目录`,r.dataset.emptyLabel=i.textContent;return}r.innerHTML=``,delete r.dataset.emptyLabel,i.textContent=`${a.length} ${i.dataset.countSuffix||`节`}`;let o=new Set,s=new Map;a.forEach((e,t)=>{let n=wn(e.textContent??``,t),r=e.id||n,i=r,a=2;for(;o.has(i);)i=`${r}-${a}`,a+=1;o.add(i),e.id=i,Tn(e,i)}),r.append(On(En(a),s));let c=e=>{s.forEach((t,n)=>{t.classList.toggle(`is-active`,n===e)}),Dn(r,e)},l=a[0].id;l&&c(l);let u=new IntersectionObserver(e=>{let t=e.filter(e=>e.isIntersecting).sort((e,t)=>e.boundingClientRect.top-t.boundingClientRect.top)[0]?.target?.id;t&&c(t)},{rootMargin:`-18% 0px -62% 0px`,threshold:[0,1]});a.forEach(e=>u.observe(e))}function An(){let e=document.querySelector(`.hydro-post-page`),t=e?.querySelector(`[data-post-content]`);!e||!t||(jn(t),Yt(e.dataset.postEnableLightbox,Rt)&&Array.from(t.querySelectorAll(`img`)).filter(e=>!e.closest(`a`)&&!e.classList.contains(`icon`)&&!e.classList.contains(`no-lightbox`)).forEach(e=>{e.dataset.lightboxTrigger=``,e.dataset.src=e.currentSrc||e.src,e.dataset.alt=e.alt||``;let t=e.closest(`figure`)?.querySelector(`figcaption`)?.textContent?.trim();t&&(e.dataset.caption=t),e.setAttribute(`role`,`button`),e.setAttribute(`tabindex`,`0`),e.setAttribute(`aria-label`,e.alt?`查看图片：${e.alt}`:`查看图片`),e.addEventListener(`keydown`,t=>{(t.key===`Enter`||t.key===` `)&&(t.preventDefault(),e.click())})}))}function jn(e,t=`hydro-post-table-wrap`){e.querySelectorAll(`img`).forEach(e=>{e.hasAttribute(`loading`)||(e.loading=`lazy`),e.hasAttribute(`decoding`)||(e.decoding=`async`),!e.classList.contains(`icon`)&&!e.classList.contains(`no-progressive-image`)&&(e.dataset.progressiveImage=``,e.closest(`figure`)?.setAttribute(`data-progressive-media`,``))}),e.querySelectorAll(`pre`).forEach(e=>{let t=e.querySelector(`code`),n=Array.from(t?.classList??[]).find(e=>e.startsWith(`language-`)),r=e.dataset.language||n?.replace(`language-`,``);r&&!e.dataset.language&&(e.dataset.language=r),e.setAttribute(`tabindex`,`0`)}),e.querySelectorAll(`table`).forEach(e=>{if(e.parentElement?.classList.contains(`hydro-post-table-wrap`))return;let n=document.createElement(`div`);n.className=t,e.parentNode?.insertBefore(n,e),n.append(e)}),e.querySelectorAll(`a[href]`).forEach(e=>{let t=e.getAttribute(`href`)||``;/^https?:\/\//i.test(t)&&new URL(t,window.location.href).origin!==window.location.origin&&(e.target=e.target||`_blank`,e.rel=e.rel||`noopener noreferrer`)})}function Mn(){document.querySelectorAll(`[data-hydro-doc-content]`).forEach(e=>{jn(e,`hydro-post-table-wrap hydro-doc-table-wrap`)})}function Nn(){let e=document.querySelector(`.hydro-post-page`);if(!e||!Yt(e.dataset.postEnableReadingProgress))return;let t=Array.from(e.querySelectorAll(`[data-post-reading-progress], [data-post-mobile-reading-progress]`)),n=Array.from(e.querySelectorAll(`[data-post-reading-percent], [data-post-mobile-reading-percent]`)),r=e.querySelector(`#post-content`);if(t.length===0||!r)return;let i=()=>{let e=r.getBoundingClientRect(),i=Math.max(window.innerHeight,1),a=e.height+i*.35,o=Math.max(0,Math.min(a,i*.35-e.top)),s=a<=0?0:o/a*100,c=Math.max(0,Math.min(100,s));t.forEach(e=>{e.style.width=`${c.toFixed(2)}%`}),n.forEach(e=>{e.textContent=`${Math.round(c)}%`})};i(),window.addEventListener(`scroll`,i,{passive:!0}),window.addEventListener(`resize`,i)}function Pn(){let e=document.querySelector(`.hydro-post-page`);if(!e)return;let t=e.querySelector(`[data-post-mobile-drawer]`),n=e.querySelector(`[data-post-mobile-bar]`);if(!t&&!n)return;document.body.classList.add(`hydro-post-reading-page`);let r=e.querySelector(`[data-post-mobile-toc-toggle]`),i=Array.from(e.querySelectorAll(`[data-post-mobile-toc-close]`)),a=e.querySelector(`[data-post-mobile-top]`),o=!1,s=()=>{if(!t)return;let e=t.classList.contains(`is-open`);t.setAttribute(`aria-hidden`,String(Bt.matches&&!e))},c=(e=o)=>{t&&(t.classList.remove(`is-open`),r?.classList.remove(`is-active`),r?.setAttribute(`aria-expanded`,`false`),document.body.classList.remove(`hydro-post-drawer-lock`),document.querySelector(`.hydro-moment-poster.is-open, .hydro-mobile-menu.is-open`)||(document.body.classList.remove(`hydro-menu-lock`),G()?.start?.()),s(),e&&r?.focus({preventScroll:!0}),o=!1)},l=()=>{!t||!Bt.matches||document.querySelector(`.hydro-moment-poster.is-open`)||(t.classList.add(`is-open`),r?.classList.add(`is-active`),r?.setAttribute(`aria-expanded`,`true`),document.body.classList.add(`hydro-post-drawer-lock`,`hydro-menu-lock`),G()?.stop?.(),o=!0,s(),window.requestAnimationFrame(()=>{t.querySelector(`.hydro-post-toc__link.is-active`)?.scrollIntoView({block:`nearest`})}))};r?.addEventListener(`click`,()=>{if(t?.classList.contains(`is-open`)){c();return}l()}),i.forEach(e=>{e.addEventListener(`click`,()=>c())}),t?.querySelectorAll(`[data-hydro-poster-open]`).forEach(e=>{e.addEventListener(`click`,()=>{Bt.matches&&c(!1)})}),t?.querySelectorAll(`.hydro-post-toc__link`).forEach(e=>{e.addEventListener(`click`,t=>{if(!Bt.matches)return;let n=e.closest(`.hydro-post-toc__item`)?.dataset.targetId,r=n?document.getElementById(n):null;if(!r){c(!1);return}t.preventDefault(),t.stopImmediatePropagation(),c(!1),window.requestAnimationFrame(()=>{tn(r),history.replaceState(null,``,`#${r.id}`),r.classList.add(`toc-highlight`),window.setTimeout(()=>r.classList.remove(`toc-highlight`),1400)})},{capture:!0})}),document.addEventListener(`keydown`,e=>{e.key===`Escape`&&t?.classList.contains(`is-open`)&&c()});let u=()=>{a?.classList.toggle(`is-visible`,window.scrollY>window.innerHeight*.9)};s(),u(),Bt.addEventListener(`change`,()=>{Bt.matches?s():(c(!1),t?.setAttribute(`aria-hidden`,`false`))}),window.addEventListener(`scroll`,u,{passive:!0}),window.addEventListener(`resize`,u)}function Fn(){let e=document.querySelector(`.hydro-post-page`);if(!e||!Yt(e.dataset.postEnableShare))return;let t=Array.from(e.querySelectorAll(`[data-post-action='share']`));if(t.length===0)return;let n=t.filter(e=>!e.hasAttribute(`data-hydro-poster-open`));if(n.length===0)return;let r=(e.querySelector(`h1`)?.textContent??document.title).trim(),i=(e.querySelector(`.hydro-post-hero p`)?.textContent??``).trim(),a=Xt(e,`postShareCopiedText`,`已复制`),o=Xt(e,`postShareCopyPromptTitle`,`复制链接`),s=async(e,t)=>{try{await navigator.clipboard.writeText(t),e.classList.add(`is-copied`);let n=e.querySelector(`strong`),r=n?.textContent;n&&(n.textContent=n.dataset.copiedText||a),window.setTimeout(()=>{e.classList.remove(`is-copied`),n&&r&&(n.textContent=r)},1200),K(`链接已复制`,{id:`hydro-post-share`,title:`分享`,variant:`success`})}catch{window.prompt(e.querySelector(`strong`)?.dataset.copyPromptTitle||o,t)}};n.forEach(e=>{e.addEventListener(`click`,async()=>{let t=window.location.href;if(typeof navigator.share==`function`)try{await navigator.share({title:r,text:i||void 0,url:t});return}catch(e){if(e.name===`AbortError`)return}await s(e,t)})})}function In(){let e=Array.from(document.querySelectorAll(`[data-hydro-poster-dialog], [data-hydro-moment-poster]`));if(e.length===0)return;e.forEach(e=>{e.parentElement!==document.body&&document.body.append(e)});let t=[`a[href]`,`button:not([disabled])`,`input:not([disabled])`,`select:not([disabled])`,`textarea:not([disabled])`,`[tabindex]:not([tabindex='-1'])`].join(`,`),n=U.matches||!W?0:240,r=null,i=null,a=new WeakMap,o=t=>t?e.find(e=>e.id===t)??null:e.length===1?e[0]:null,s=e=>Array.from(document.querySelectorAll(`[data-hydro-poster-open], [data-hydro-moment-poster-open]`)).filter(t=>o(t.getAttribute(`aria-controls`)||t.dataset.hydroPosterTarget)===e),c=e=>Array.from(e.querySelectorAll(`[data-hydro-poster-close], [data-hydro-moment-poster-close]`)),l=e=>Array.from(e.querySelectorAll(t)).filter(e=>e.getClientRects().length>0),u=(e,t)=>{s(e).forEach(e=>{e.classList.toggle(`is-active`,t),e.setAttribute(`aria-expanded`,String(t))})},d=(e,t=!0)=>{let o=a.get(e);o!==void 0&&(window.clearTimeout(o),a.delete(e)),e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`),u(e,!1),r===e&&(r=null,document.body.classList.remove(`hydro-menu-lock`),G()?.start?.());let s=window.setTimeout(()=>{e.hidden=!0,a.delete(e)},n);a.set(e,s),t&&i?.focus({preventScroll:!0})},f=(e,t)=>{r&&r!==e&&d(r,!1);let n=a.get(e);n!==void 0&&(window.clearTimeout(n),a.delete(e)),r=e,i=t,e.hidden=!1,e.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`hydro-menu-lock`),G()?.stop?.(),u(e,!0);let o=e.querySelector(`[data-hydro-poster-download]`);window.requestAnimationFrame(()=>{e.classList.add(`is-open`),o?.focus({preventScroll:!0})})};e.forEach(e=>{c(e).forEach(t=>{t.addEventListener(`click`,()=>d(e))})}),Array.from(document.querySelectorAll(`[data-hydro-poster-open], [data-hydro-moment-poster-open]`)).forEach(e=>{let t=o(e.getAttribute(`aria-controls`)||e.dataset.hydroPosterTarget);t&&e.addEventListener(`click`,()=>{if(t.hidden===!1){d(t);return}f(t,e)})}),document.addEventListener(`keydown`,e=>{if(!r||r.hidden!==!1)return;if(e.key===`Escape`){d(r);return}if(e.key!==`Tab`)return;let t=l(r);if(t.length===0){e.preventDefault();return}let n=t[0],i=t[t.length-1],a=document.activeElement;e.shiftKey&&a===n?(e.preventDefault(),i.focus()):!e.shiftKey&&a===i&&(e.preventDefault(),n.focus())})}function Ln(){let e=document.querySelector(`.hydro-post-page`);if(!e||!Yt(e.dataset.postEnableUpvote))return;let t=e.dataset.postName;if(!t)return;let n=Array.from(e.querySelectorAll(`[data-post-action='upvote']`)),r=Array.from(e.querySelectorAll(`[data-post-upvote-count]`));if(n.length===0||r.length===0)return;let i=new Set(qt(Ut)),a=()=>{let e=i.has(t);n.forEach(t=>{t.classList.toggle(`is-upvoted`,e),t.disabled=e})};a(),n.forEach(n=>{n.addEventListener(`click`,async()=>{if(!(n.disabled||i.has(t))){n.disabled=!0;try{let e=await window.fetch(`/apis/api.halo.run/v1alpha1/trackers/upvote`,{body:JSON.stringify({group:`content.halo.run`,name:t,plural:`posts`}),headers:{"Content-Type":`application/json`},method:`POST`});if(!e.ok)throw Error(`Post upvote failed with ${e.status}`);i.add(t),Jt(Ut,Array.from(i));let n=Number.parseInt(r[0]?.textContent||`0`,10),o=String(Number.isNaN(n)?1:n+1);r.forEach(e=>{e.textContent=o}),a(),K(`点赞成功`,{id:`hydro-post-upvote`,title:`文章`,variant:`success`})}catch{n.disabled=!1,K(Xt(e,`postUpvoteErrorText`,`点赞失败，请稍后再试`),{id:`hydro-post-upvote`,title:`文章`,variant:`error`})}}})})}function Rn(e){let t=e.dataset.postName?.trim();return t?{subjectType:`POST`,subjectName:t,subjectTitle:e.dataset.postTitle?.trim()||document.title||t,permalink:e.dataset.postPermalink?.trim()||window.location.href,cover:e.dataset.postCover?.trim()||``}:null}function zn(e,t){let n=!!t.favorited,r=Number(t.count||0);e.forEach(e=>{let t=e.querySelector(`span`),i=e.querySelector(`strong`);e.classList.toggle(`is-favorited`,n),e.dataset.postFavorited=String(n),e.setAttribute(`aria-pressed`,String(n)),t&&(t.textContent=n?e.dataset.favoritedLabel||`已收藏`:e.dataset.favoriteLabel||`收藏`),i&&(i.textContent=String(r))})}function Bn(e=3e3){let t=Date.now();return new Promise(n=>{let r=()=>{if(window.memberFavorite){n(window.memberFavorite);return}if(Date.now()-t>=e){n(null);return}window.setTimeout(r,50)};r()})}function Vn(e){let t=Array.from(e.querySelectorAll(`[data-post-action='favorite']`)),n=Rn(e);t.length===0||!n||(t.forEach(t=>{let n=t.querySelector(`span`);t.dataset.favoriteLabel=n?.textContent?.trim()||`收藏`,t.dataset.favoritedLabel=e.dataset.postFavoritedLabel||`已收藏`}),(async()=>{if(!rn()){t.forEach(e=>{e.addEventListener(`click`,()=>{on(`hydro-post-favorite`,`文章收藏`)})});return}if(!an()){t.forEach(e=>{e.addEventListener(`click`,()=>{sn(`hydro-post-favorite`,`文章收藏`)})});return}t.forEach(e=>{e.disabled=!0});let e=await Bn();if(!e){t.forEach(e=>{e.disabled=!1,e.addEventListener(`click`,()=>{on(`hydro-post-favorite`,`文章收藏`)})});return}let r=null;try{let i=await e.getStatus(n);r=i,zn(t,i)}finally{t.forEach(e=>{e.disabled=!1})}t.forEach(i=>{i.addEventListener(`click`,async()=>{if(!i.disabled){if(r?.authenticated===!1){sn(`hydro-post-favorite`,`文章收藏`);return}i.disabled=!0;try{let i=await e.toggle(n);if(i.authenticated===!1){sn(`hydro-post-favorite`,`文章收藏`);return}r=i,zn(t,i),K(i.favorited?`已收藏 · ${Number(i.count||0)}`:`已取消收藏 · ${Number(i.count||0)}`,{id:`hydro-post-favorite`,title:`文章收藏`,variant:`success`})}catch{K(`收藏操作失败，请稍后再试`,{id:`hydro-post-favorite`,title:`文章收藏`,variant:`error`})}finally{i.disabled=!1}}})})})())}function Hn(){let e=document.querySelector(`.hydro-post-page`);if(!e||!Yt(e.dataset.postEnableActionRail))return;let t=Array.from(e.querySelectorAll(`[data-post-action='top']`)),n=Array.from(e.querySelectorAll(`[data-post-action='comment']`)),r=e.querySelector(`#comment`);t.forEach(e=>{e.addEventListener(`click`,()=>{en(0)})}),n.forEach(e=>{e.addEventListener(`click`,()=>{r&&tn(r)})}),Vn(e)}function Un(){let e=document.querySelector(`[data-hydro-reward-dialog]`),t=Array.from(document.querySelectorAll(`[data-hydro-reward-open]`));if(!e||t.length===0)return;e.parentElement!==document.body&&document.body.append(e);let n=Array.from(e.querySelectorAll(`[data-hydro-reward-close]`)),r=null,i=t=>{r=t,e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`),t.setAttribute(`aria-expanded`,`true`),document.body.classList.add(`hydro-reward-lock`),window.setTimeout(()=>e.querySelector(`[data-hydro-reward-close]`)?.focus(),30)},a=()=>{e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`hydro-reward-lock`),t.forEach(e=>e.setAttribute(`aria-expanded`,`false`)),r?.focus(),r=null};t.forEach(e=>{e.addEventListener(`click`,()=>i(e))}),n.forEach(e=>{e.addEventListener(`click`,a)}),window.addEventListener(`keydown`,t=>{t.key===`Escape`&&e.classList.contains(`is-open`)&&a()})}function Wn(){let e=document.querySelector(`.hydro-post-page`);if(!e)return;let t=e.querySelector(`.hydro-post-related__grid`);if(!t)return;let n=Number.parseInt(t.dataset.relatedLimit||`0`,10),r=Array.from(t.querySelectorAll(`.hydro-post-related-card`)),i=new Set,a=0;r.forEach(e=>{let t=e.querySelector(`a`),r=t?.getAttribute(`href`)||``,o=r.length>0&&i.has(r);if(!t||o||n>0&&a>=n){e.remove();return}r.length>0&&i.add(r),a+=1}),a===0&&t.closest(`.hydro-post-related`)?.remove()}function Gn(){let e=document.querySelector(`.hydro-site-info, .hydro-links-section`),t=document.querySelector(`.hydro-links-section`);if(!e)return;document.querySelectorAll(`.hydro-site-info [data-copy], .hydro-links-section [data-copy]`).forEach(e=>{e.addEventListener(`click`,async t=>{t.preventDefault(),t.stopPropagation();let n=e.dataset.copyText;if(n)try{await navigator.clipboard.writeText(n),e.classList.add(`is-copied`),K(`已复制到剪贴板`,{id:`hydro-links-copy-success`,variant:`success`}),window.setTimeout(()=>{e.classList.remove(`is-copied`)},1500)}catch{window.prompt(e.getAttribute(`title`)||`复制内容`,n),K(`浏览器限制了自动复制，请手动复制弹窗内容`,{id:`hydro-links-copy-fallback`,variant:`warning`})}})}),t?.querySelectorAll(`[data-random-link]`).forEach(e=>{e.addEventListener(`click`,t=>{t.preventDefault(),t.stopPropagation();let n=(e.dataset.links||``).split(`,`).filter(Boolean);if(n.length===0)return;let r=n[Math.floor(Math.random()*n.length)];window.open(r,`_blank`,`noreferrer`)})});let n=document.getElementById(`hydro-link-submit-config`);if(!n||n.dataset.enableSubmit!==`true`)return;let r=n.dataset.enableUpdate===`true`,i=n.dataset.verifyType||`email`,a={submitError:n.dataset.submitErrorText||`提交失败，请稍后重试。`,submitSuccess:n.dataset.submitSuccessText||`提交成功，请等待审核。`,unavailable:n.dataset.unavailableText||`未检测到 LinksSubmit 插件，请稍后重试。`,updateError:n.dataset.updateErrorText||`修改失败，请稍后重试。`,updateSuccess:n.dataset.updateSuccessText||`修改成功。`},o=document.getElementById(`hydro-link-submit-modal`),s=document.getElementById(`hydro-link-submit-entry`),c=document.getElementById(`hydro-link-update-entry`),l=document.getElementById(`hydro-link-submit-unavailable`),u=document.getElementById(`hydro-link-submit-form`),d=document.getElementById(`hydro-link-submit-message`),f=document.getElementById(`hydro-link-auto-fetch-btn`),p=document.getElementById(`hydro-link-send-code-btn`),m=document.getElementById(`hydro-link-captcha-img`),h=document.getElementById(`hydro-link-group`),g=document.getElementById(`hydro-link-group-wrapper`),_=document.getElementById(`hydro-link-update-modal`),v=document.getElementById(`hydro-link-update-form`),y=document.getElementById(`hydro-link-update-message`),b=document.getElementById(`hydro-link-update-auto-fetch-btn`),x=document.getElementById(`hydro-link-update-send-code-btn`),ee=document.getElementById(`hydro-link-update-captcha-img`),te=document.getElementById(`hydro-link-update-group`),S=document.getElementById(`hydro-link-update-group-wrapper`),C=e=>{!e||e.parentElement===document.body||document.body.append(e)};if(C(o),C(_),!o||!u||!d)return;let w=!1,T=0,E=0,D=()=>window.LinksSubmit,O=(e,t,n)=>{let r=e===y;K(t,{id:`${r?`hydro-link-update`:`hydro-link-submit`}-${n}`,title:r?`友链修改`:`友链申请`,variant:n===`success`?`success`:`error`}),e&&(e.textContent=t,e.className=`hydro-link-submit-message is-${n}`,e.style.display=`block`)},k=(e,t,n,r)=>{e&&(e.dataset.defaultText||(e.dataset.defaultText=e.textContent?.trim()||r),e.disabled=t,e.textContent=t?n:e.dataset.defaultText)},ne=e=>{e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`hydro-menu-lock`),document.body.style.overflow=`hidden`,G()?.stop?.()},A=e=>{e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`hydro-menu-lock`),document.body.style.overflow=``,G()?.start?.()},re=()=>{if(!w){O(d,a.unavailable,`error`);return}ne(o),N(`submit`),i===`captcha`&&M(`submit`)},j=()=>{if(!(!r||!_||!v||!y)){if(!w){O(y,a.unavailable,`error`);return}ne(_),N(`update`),i===`captcha`&&M(`update`)}},M=e=>{let t=D(),n=e===`update`?ee:m;!n||!t||typeof t.getCaptchaUrl!=`function`||(n.src=t.getCaptchaUrl())},N=e=>{let t=D(),n=e===`update`?te:h,r=e===`update`?S:g;!n||!r||!t||typeof t.getLinkGroups!=`function`||t.getLinkGroups().then(e=>{!Array.isArray(e)||e.length===0||(n.innerHTML=``,n.append(new Option(`默认分组`,``)),e.forEach(e=>{n.append(new Option(e.groupName||`未命名分组`,e.groupId||e.groupName||``))}),r.style.display=``)}).catch(()=>{})},ie=()=>{window.setTimeout(()=>{if(D()){w=!0,s&&(s.style.display=``),r&&c&&(c.style.display=``),l&&(l.style.display=`none`),window.location.hash===`#add`?re():window.location.hash===`#edit`&&j();return}w=!1,s&&(s.style.display=`none`),c&&(c.style.display=`none`),l&&(l.style.display=``)},500)},ae=e=>{let t=D();if(!t||typeof t.getLinkDetail!=`function`)return;let n=e===`update`?`hydro-update-url`:`hydro-link-url`,r=e===`update`?`hydro-update-name`:`hydro-link-name`,i=e===`update`?`hydro-update-logo`:`hydro-link-logo`,a=e===`update`?`hydro-update-description`:`hydro-link-description`,o=e===`update`?y:d,s=e===`update`?b:f,c=document.getElementById(n)?.value.trim()||``;if(!c){O(o,`请先输入网站地址。`,`error`);return}K(`正在获取站点信息...`,{id:`${e===`update`?`hydro-link-update`:`hydro-link-submit`}-auto-fetch`,title:e===`update`?`友链修改`:`友链申请`,variant:`info`}),k(s,!0,`获取中...`,`自动填充`),t.getLinkDetail(c).then(e=>{if(e.code!==200||!e.data){O(o,e.msg||`自动填充失败，请手动填写。`,`error`);return}let t=e.data,n=document.getElementById(r),s=document.getElementById(i),c=document.getElementById(a);n&&t.title&&(n.value=t.title),s&&(t.image||t.icon)&&(s.value=t.image||t.icon),c&&t.description&&(c.value=t.description),O(o,`已自动填充，请检查后提交。`,`success`)}).catch(()=>{O(o,`自动填充失败，请手动填写。`,`error`)}).finally(()=>{k(s,!1,``,`自动填充`)})},oe=e=>{let t=D(),n=e===`update`?E>0:T>0;if(!t||typeof t.sendVerifyCode!=`function`||n)return;let r=e===`update`?`hydro-update-email`:`hydro-link-email`,i=document.getElementById(r)?.value.trim()||``,a=e===`update`?y:d,o=e===`update`?x:p;if(!i){O(a,`请先输入联系邮箱。`,`error`);return}K(`正在发送验证码...`,{id:`${e===`update`?`hydro-link-update`:`hydro-link-submit`}-send-code`,title:e===`update`?`友链修改`:`友链申请`,variant:`info`}),k(o,!0,`发送中...`,`发送验证码`),t.sendVerifyCode(i).then(t=>{if(t.code!==200)throw Error(t.msg||`发送失败`);O(a,`验证码已发送，请注意查收邮箱。`,`success`),e===`update`?E=60:T=60;let n=window.setInterval(()=>{e===`update`?--E:--T;let t=e===`update`?E:T;o&&(o.textContent=`${t}s`),t<=0&&(window.clearInterval(n),k(o,!1,``,`发送验证码`))},1e3)}).catch(e=>{O(a,e instanceof Error?e.message:`发送失败，请稍后重试。`,`error`),k(o,!1,``,`发送验证码`)})},P=(e,t)=>{let n=t===`update`?y:d,r=``;if(i===`email`){let t=e.get(`verifyCode`);if(r=typeof t==`string`?t.trim():``,!r)return O(n,`请输入邮箱验证码。`,`error`),null}if(i===`captcha`){let t=e.get(`captcha`);if(r=typeof t==`string`?t.trim():``,!r)return O(n,`请输入图形验证码。`,`error`),null}return r};document.querySelectorAll(`[data-link-submit-open]`).forEach(e=>{e.addEventListener(`click`,re)}),document.querySelectorAll(`[data-link-submit-close]`).forEach(e=>{e.addEventListener(`click`,()=>A(o))}),document.querySelectorAll(`[data-link-update-open]`).forEach(e=>{e.addEventListener(`click`,j)}),document.querySelectorAll(`[data-link-update-close]`).forEach(e=>{_&&e.addEventListener(`click`,()=>A(_))}),f?.addEventListener(`click`,()=>ae(`submit`)),b?.addEventListener(`click`,()=>ae(`update`)),p?.addEventListener(`click`,()=>oe(`submit`)),x?.addEventListener(`click`,()=>oe(`update`)),m?.addEventListener(`click`,()=>M(`submit`)),ee?.addEventListener(`click`,()=>M(`update`)),u.addEventListener(`submit`,e=>{e.preventDefault();let t=D();if(!t)return;let n=new FormData(u),r=P(n,`submit`);if(r==null)return;let s={displayName:n.get(`displayName`),url:n.get(`url`),logo:n.get(`logo`)||void 0,email:n.get(`email`),description:n.get(`description`)||void 0,linkPageUrl:n.get(`linkPageUrl`)||void 0,groupName:n.get(`groupName`)||void 0,rssUrl:n.get(`rssUrl`)||void 0},c=document.getElementById(`hydro-link-submit-btn`);K(`正在提交友链申请...`,{id:`hydro-link-submit-pending`,title:`友链申请`,variant:`info`}),k(c,!0,`提交中...`,`提交申请`),t.submit(s,r,i===`none`?void 0:i).then(e=>{if(e.code===200){O(d,e.msg||a.submitSuccess,`success`),u.reset(),window.setTimeout(()=>{A(o)},1500);return}O(d,e.msg||a.submitError,`error`)}).catch(()=>{O(d,a.submitError,`error`)}).finally(()=>{i===`captcha`&&M(`submit`),k(c,!1,``,`提交申请`)})}),v?.addEventListener(`submit`,e=>{e.preventDefault();let t=D();if(!t||typeof t.update!=`function`||!v){O(y,`当前插件不支持在线修改。`,`error`);return}let n=new FormData(v),r=P(n,`update`);if(r==null)return;let o={oldUrl:n.get(`oldUrl`),displayName:n.get(`displayName`),url:n.get(`url`),logo:n.get(`logo`)||void 0,email:n.get(`email`),description:n.get(`description`)||void 0,linkPageUrl:n.get(`linkPageUrl`)||void 0,groupName:n.get(`groupName`)||void 0,rssUrl:n.get(`rssUrl`)||void 0},s=document.getElementById(`hydro-link-update-submit-btn`);K(`正在提交友链修改...`,{id:`hydro-link-update-pending`,title:`友链修改`,variant:`info`}),k(s,!0,`提交中...`,`提交修改`),t.update(o,r,i===`none`?void 0:i).then(e=>{if(e.code===200){O(y,e.msg||a.updateSuccess,`success`),v.reset(),window.setTimeout(()=>{_&&A(_)},1500);return}O(y,e.msg||a.updateError,`error`)}).catch(()=>{O(y,a.updateError,`error`)}).finally(()=>{i===`captcha`&&M(`update`),k(s,!1,``,`提交修改`)})}),window.addEventListener(`hashchange`,()=>{window.location.hash===`#add`?re():window.location.hash===`#edit`&&j()}),ie()}$t(),ge(),s(),dn(),fn(),un(),pn(),vn(),yn(),hn(),bn(),xn(),Sn(),Cn(),An(),mn(),kn(),Pn(),Hn(),Ln(),Fn(),In(),Un(),Nn(),Wn(),Pt(),b(),Ct();function Kn(){if(!W)return;document.querySelectorAll(`.hydro-links-grid`).forEach(t=>{let r=Array.from(t.querySelectorAll(`.hydro-link-card`));if(r.length===0)return;e.set(r,{"--hydro-link-reveal-y":`1.4rem`,autoAlpha:0,clipPath:`inset(12% 0% 0% 0% round 0.5rem)`,filter:`blur(10px)`});let i=t=>{let n=Math.abs(t),i=e.utils.clamp(.38,.9,.88-n/3600),a=e.utils.clamp(.035,.13,.13-n/18e3);e.killTweensOf(r),e.to(r,{"--hydro-link-reveal-y":`0rem`,autoAlpha:1,clipPath:`inset(0% 0% 0% 0% round 0.5rem)`,duration:i,ease:`expo.out`,filter:`blur(0px)`,stagger:{each:a,from:`start`}})};n.create({trigger:t,start:`top 84%`,onEnter:e=>i(e.getVelocity()),onEnterBack:e=>i(e.getVelocity()),onLeaveBack:()=>{e.killTweensOf(r),e.set(r,{"--hydro-link-reveal-y":`1.4rem`,autoAlpha:0,clipPath:`inset(12% 0% 0% 0% round 0.5rem)`,filter:`blur(10px)`})}})});let t=Array.from(document.querySelectorAll(`.hydro-link-card`));if(t.length===0)return;let r=[];t.forEach(e=>{let t=null,n=0,i=0,a=0,o=()=>(t=e.getBoundingClientRect(),t),s=()=>{a=0,e.style.setProperty(`--hydro-link-glow-x`,`${n}px`),e.style.setProperty(`--hydro-link-glow-y`,`${i}px`)};e.addEventListener(`pointerenter`,()=>{o()}),e.addEventListener(`pointermove`,e=>{let r=t??o();n=e.clientX-r.left,i=e.clientY-r.top,!a&&(a=window.requestAnimationFrame(s))},{passive:!0}),e.addEventListener(`pointerleave`,()=>{t=null,a&&=(window.cancelAnimationFrame(a),0)}),r.push(()=>{t=null})}),window.addEventListener(`resize`,()=>{r.forEach(e=>e())},{passive:!0})}function qn(){document.querySelectorAll(`[data-moment]`).forEach((t,r)=>{if(!W){t.classList.add(`is-visible`);return}n.create({trigger:t,start:`top 88%`,onEnter:()=>{e.to(t,{opacity:1,y:0,duration:.6,ease:`expo.out`,delay:r%5*.05,onStart:()=>t.classList.add(`is-visible`)})}})})}function Jn(){document.querySelectorAll(`.hydro-moment__content`).forEach(e=>{e.querySelectorAll(`a.tag`).forEach(e=>e.remove()),e.querySelectorAll(`p`).forEach(e=>{e.textContent?.trim()===``&&e.children.length===0&&e.remove()})})}function Yn(){let e=new Set(qt(Ht)),t=document.body.dataset.momentUpvoteErrorText||`点赞失败，请稍后再试`;document.querySelectorAll(`[data-moment-upvote]`).forEach(n=>{let r=n.dataset.momentUpvote;r&&(n.classList.toggle(`is-upvoted`,e.has(r)),n.disabled=e.has(r),n.addEventListener(`click`,async()=>{if(!(e.has(r)||n.disabled)){n.disabled=!0;try{let t=await window.fetch(`/apis/api.halo.run/v1alpha1/trackers/upvote`,{body:JSON.stringify({group:`moment.halo.run`,name:r,plural:`moments`}),headers:{"Content-Type":`application/json`},method:`POST`});if(!t.ok)throw Error(`Upvote failed with ${t.status}`);e.add(r),Jt(Ht,Array.from(e)),n.classList.add(`is-upvoted`);let i=document.querySelector(`[data-upvote-moment-name="${CSS.escape(r)}"]`);i&&(i.textContent=String(Number.parseInt(i.textContent||`0`,10)+1)),K(`点赞成功`,{id:`hydro-moment-upvote`,title:`瞬间`,variant:`success`})}catch{n.disabled=!1,K(t,{id:`hydro-moment-upvote`,title:`瞬间`,variant:`error`})}}}))}),document.querySelectorAll(`[data-moment-comment-toggle]`).forEach(e=>{let t=e.dataset.momentCommentToggle,n=t?document.querySelector(`[data-moment-comment="${CSS.escape(t)}"]`):null;n&&e.addEventListener(`click`,()=>{let t=n.hidden===!0;n.hidden=!t,e.classList.toggle(`is-active`,t),e.setAttribute(`aria-expanded`,String(t))})})}function Xn(){if(!Rt){document.querySelectorAll(`[data-lightbox-trigger]`).forEach(e=>{e.removeAttribute(`data-lightbox-trigger`),e.removeAttribute(`data-src`),e.removeAttribute(`data-alt`),e instanceof HTMLButtonElement&&(e.type=`button`,e.disabled=!0,e.setAttribute(`aria-disabled`,`true`))});return}let e=document.querySelector(`[data-lightbox]`);if(!e)return;document.body.append(e);let t=e.querySelector(`[data-lightbox-img]`),n=e.querySelector(`[data-lightbox-close]`),r=e.querySelector(`[data-lightbox-prev]`),i=e.querySelector(`[data-lightbox-next]`),a=e.querySelector(`[data-lightbox-counter]`),o=e.querySelector(`[data-lightbox-caption]`),s=Array.from(document.querySelectorAll(`[data-lightbox-trigger]`)),c=0,l=n=>{let l=s[n];if(!l||l.dataset.lightboxDisabled===`true`||l.dataset.mediaState===`error`||l.closest(`[data-media-state='error']`))return;c=n;let u=l.dataset.src??``,d=l.dataset.alt??``,f=l.dataset.caption??d;t&&(t.classList.add(`is-loading`),t.src=u,t.alt=d,t.onload=()=>t.classList.remove(`is-loading`),e.classList.add(`is-open`),e.setAttribute(`aria-hidden`,`false`),document.body.classList.add(`hydro-menu-lock`),G()?.stop?.(),a&&(a.textContent=`${n+1} / ${s.length}`),o&&(o.textContent=f,o.hidden=f.length===0),r&&(r.style.display=s.length>1?``:`none`),i&&(i.style.display=s.length>1?``:`none`))},u=()=>{e.classList.remove(`is-open`),e.setAttribute(`aria-hidden`,`true`),document.body.classList.remove(`hydro-menu-lock`),G()?.start?.()};s.forEach((e,t)=>{e.addEventListener(`click`,()=>l(t))}),n?.addEventListener(`click`,u),r?.addEventListener(`click`,()=>l((c-1+s.length)%s.length)),i?.addEventListener(`click`,()=>l((c+1)%s.length)),e.addEventListener(`click`,t=>{t.target===e&&u()}),document.addEventListener(`keydown`,t=>{e.classList.contains(`is-open`)&&(t.key===`Escape`&&u(),t.key===`ArrowLeft`&&r?.click(),t.key===`ArrowRight`&&i?.click())})}function Zn(e){try{return new URL(e||window.location.href,window.location.origin).href}catch{return window.location.href}}function Qn(e,t,n){let r=window.getComputedStyle(e)[t];return r&&r!==`rgba(0, 0, 0, 0)`?r:n}function $n(e,t){return Zn(t?.dataset.url||e.dataset.shareUrl||window.location.href)}function er(e,t){return ut(e,{background:Qn(t,`backgroundColor`,`#f8f5ed`),foreground:Qn(t,`color`,`#181714`)})}function tr(e,t){return dt(e,{background:Qn(t,`backgroundColor`,`#f8f5ed`),foreground:Qn(t,`color`,`#181714`)})}function nr(e){let t=(e||`hydro-moment-poster.png`).trim().replace(/[\\/:*?"<>|]+/g,`-`).replace(/\s+/g,`-`);return t.toLowerCase().endsWith(`.png`)?t:`${t}.png`}function rr(e,t){let n=window.getComputedStyle(e),r=t;for(let e=0;e<n.length;e+=1){let t=n.item(e),i=n.getPropertyValue(t);i.includes(`url(`)||r.style.setProperty(t,i,n.getPropertyPriority(t))}Array.from(e.children).forEach((e,n)=>{let r=t.children.item(n);r&&rr(e,r)})}function ir(e){return new Promise((t,n)=>{let r=new FileReader;r.onload=()=>{if(typeof r.result==`string`){t(r.result);return}n(Error(`Poster image reader returned no data URL`))},r.onerror=()=>n(r.error??Error(`Poster image reader failed`)),r.readAsDataURL(e)})}async function ar(e){let t=e.currentSrc||e.src||e.getAttribute(`src`)||``;if(!t)throw Error(`Poster image has no source`);if(t.startsWith(`data:`))return t;let n=new URL(t,window.location.href).href,r=await fetch(n,{credentials:new URL(n).origin===window.location.origin?`same-origin`:`omit`,mode:`cors`});if(!r.ok)throw Error(`Poster image fetch failed with ${r.status}`);return ir(await r.blob())}function J(e){return e.replace(/\u00a0/g,` `).replace(/\s+/g,` `).trim()}function or(e){let t=document.createElement(`div`);return t.innerHTML=e,J(t.textContent||``)}function sr(e){let t=document.createElement(`p`);return t.textContent=e,t}function cr(e){if(!(e instanceof HTMLAnchorElement))return!1;let t=e.getAttribute(`href`)||``;return e.classList.contains(`tag`)||t.includes(`/moments?tag=`)}function lr(e){Array.from(e.querySelectorAll(`p, div, section, article, blockquote, li`)).forEach(e=>{!e.querySelector(`img, video, audio, iframe, canvas, svg`)&&J(e.textContent||``)===``&&e.remove()})}function ur(e,t,n){let r=document.createElement(`div`);if(e&&(r.innerHTML=e.innerHTML),r.querySelectorAll(`audio, button, canvas, embed, figure, iframe, img, object, picture, script, source, style, svg, video`).forEach(e=>{e.remove()}),Array.from(r.querySelectorAll(`a`)).forEach(e=>{if(cr(e)){e.remove();return}e.removeAttribute(`href`),e.removeAttribute(`target`),e.removeAttribute(`rel`)}),lr(r),J(r.textContent||``))return r;let i=or(t);return r.append(sr(i||n||`一条被认真保存的瞬间`)),r}function dr(e){let t=Array.from(e.querySelectorAll(`[data-hydro-poster-image]`)),n=t.find(e=>!!(e.currentSrc||e.src||e.getAttribute(`src`))),r=e.querySelector(`.hydro-poster-card__media`);return t.forEach(e=>{let t=e===n;e.hidden=!t,e.toggleAttribute(`aria-hidden`,!t)}),r&&(r.hidden=!n,r.toggleAttribute(`aria-hidden`,!n)),e.classList.toggle(`has-poster-image`,!!n),n??null}function fr(e){let t=e.querySelector(`[data-hydro-poster-copy-content]`);if(!t)return;let n=e.querySelector(`[data-hydro-poster-copy-source]`),r=J(t.dataset.hydroPosterCopyFallback||t.textContent||``),i=ur(n,t.dataset.hydroPosterCopyRaw||``,r);t.innerHTML=``,Array.from(i.children).forEach(e=>{t.append(e.cloneNode(!0))}),t.children.length===0&&t.append(sr(J(i.textContent||``)||r))}function pr(e){let t=e.querySelector(`[data-hydro-poster-caption]`);t&&(t.textContent=Array.from(e.querySelectorAll(`[data-hydro-poster-tag]`)).map(e=>J(e.textContent||``)).filter(Boolean).slice(0,2).join(` / `)||J(t.dataset.hydroPosterCaptionFallback||t.textContent||``))}function mr(e){e.querySelectorAll(`[data-hydro-poster-qr]`).forEach(t=>{let n=$n(e,t);t.dataset.hydroPosterQrUrl=n,t.innerHTML=er(n,t)})}function hr(e){return fr(e),pr(e),mr(e),dr(e)}async function gr(e){let t=new Map,n=Array.from(e.querySelectorAll(`[data-hydro-poster-export-image]`));return await Promise.all(n.map(async(e,n)=>{try{t.set(String(n),await ar(e))}catch(e){console.warn(`[Hydro] Poster image export failed, using local render fallback.`,e)}})),t}async function _r(e,t,n){let r=hr(e),i=await gr(e),a=e.cloneNode(!0);rr(e,a),a.querySelectorAll(`audio, canvas, embed, iframe, object, picture, script, source, style, video`).forEach(e=>{e.remove()});let o=Array.from(a.querySelectorAll(`[data-hydro-poster-image]`));o.forEach((e,t)=>{let n=i.get(String(t));if(r&&n&&t===0){e.src=n,e.hidden=!1,e.removeAttribute(`aria-hidden`),e.style.display=`block`;return}e.remove()}),Array.from(a.querySelectorAll(`[data-hydro-poster-export-image]:not([data-hydro-poster-image])`)).forEach((e,t)=>{let n=i.get(String(o.length+t));if(n){e.src=n;return}let r=e.nextElementSibling;e.remove(),r instanceof HTMLElement&&r.classList.contains(`hydro-poster-card__seal-fallback`)&&r.style.removeProperty(`display`)});let s=a.querySelector(`.hydro-poster-card__media`),c=a.querySelector(`.hydro-poster-card__no-media`);return r&&i.get(`0`)?(a.classList.add(`has-poster-image`),s&&(s.style.display=`block`),c&&(c.style.display=`none`)):(a.classList.remove(`has-poster-image`),s&&(s.style.display=`none`),c&&(c.style.display=`grid`)),a.setAttribute(`xmlns`,`http://www.w3.org/1999/xhtml`),a.style.width=`${t}px`,a.style.height=`${n}px`,a.style.maxWidth=`none`,a.style.margin=`0`,a.style.transform=`none`,a.style.animation=`none`,a.style.transition=`none`,a.querySelectorAll(`*`).forEach(e=>{e.style.animation=`none`,e.style.transition=`none`}),a}function vr(e,t){let n=URL.createObjectURL(e),r=document.createElement(`a`);r.href=n,r.download=t,r.rel=`noopener`,document.body.append(r),r.click(),r.remove(),window.setTimeout(()=>URL.revokeObjectURL(n),1e3)}function yr(e){return new Promise((t,n)=>{let r=new Image;r.decoding=`async`,r.onload=()=>t(r),r.onerror=()=>n(Error(`Poster image failed to load`)),r.src=e})}function br(e){return new Promise((t,n)=>{e.toBlob(e=>{if(e){t(e);return}n(Error(`Poster canvas export failed`))},`image/png`)})}function xr(e,t){let n=Number.parseFloat(e||``);return Number.isFinite(n)?n:t}function Y(e,t,n){let r=window.getComputedStyle(e).getPropertyValue(t).match(/[\d.]+/g)?.slice(0,3).map(e=>Number.parseFloat(e));return!r||r.length<3||r.some(e=>!Number.isFinite(e))?n:[r[0],r[1],r[2]]}function X(e,t){return`rgba(${e[0]}, ${e[1]}, ${e[2]}, ${t})`}function Sr(){return Math.min(3,Math.max(2,window.devicePixelRatio||2))}function Z(e,t){if(!t)return null;let n=e.getBoundingClientRect(),r=t.getBoundingClientRect();return r.width<=0||r.height<=0?null:{x:r.left-n.left,y:r.top-n.top,width:r.width,height:r.height}}function Cr(e,t){return Z(e,e.querySelector(t))}function wr(e,t,n,r,i,a){let o=Math.max(0,Math.min(a,r/2,i/2));e.beginPath(),e.moveTo(t+o,n),e.lineTo(t+r-o,n),e.quadraticCurveTo(t+r,n,t+r,n+o),e.lineTo(t+r,n+i-o),e.quadraticCurveTo(t+r,n+i,t+r-o,n+i),e.lineTo(t+o,n+i),e.quadraticCurveTo(t,n+i,t,n+i-o),e.lineTo(t,n+o),e.quadraticCurveTo(t,n,t+o,n),e.closePath()}function Tr(e,t,n,r,i=1){wr(e,t.x,t.y,t.width,t.height,n),e.strokeStyle=r,e.lineWidth=i,e.stroke()}function Er(e,t,n,r,i=0){e.save(),wr(e,t.x,t.y,t.width,t.height,i),e.clip(),e.strokeStyle=r,e.lineWidth=1;for(let r=t.y;r<=t.y+t.height;r+=n)e.beginPath(),e.moveTo(t.x,r),e.lineTo(t.x+t.width,r),e.stroke();for(let r=t.x;r<=t.x+t.width;r+=n)e.beginPath(),e.moveTo(r,t.y),e.lineTo(r,t.y+t.height),e.stroke();e.restore()}function Dr(e,t,n){let r=t.naturalWidth||t.width,i=t.naturalHeight||t.height;if(r<=0||i<=0)return;let a=Math.max(n.width/r,n.height/i),o=n.width/a,s=n.height/a,c=(r-o)/2,l=(i-s)/2;e.drawImage(t,c,l,o,s,n.x,n.y,n.width,n.height)}function Q(e,t){return e&&window.getComputedStyle(e).font||t}function $(e,t){return e&&window.getComputedStyle(e).color||t}function Or(e,t){return e?xr(window.getComputedStyle(e).lineHeight,t):t}function kr(e,t,n){if(e.measureText(t).width<=n)return t;let r=Array.from(t);for(;r.length>0&&e.measureText(`${r.join(``)}...`).width>n;)r.pop();return`${r.join(``).trimEnd()}...`}function Ar(e,t,n,r){let i=J(t);if(!i||r<=0)return[];let a=Array.from(i),o=[],s=0;for(;s<a.length&&o.length<r;){let t=``;for(;s<a.length;){let r=`${t}${a[s]}`;if(!t||e.measureText(r).width<=n){t=r,s+=1;continue}break}o.push(t.trimStart())}return s<a.length&&o.length>0&&(o[o.length-1]=kr(e,o[o.length-1],n)),o}function jr(e,t,n,r,i,a=`left`){let o=kr(e,J(t),i);e.textAlign=a,e.textBaseline=`top`,e.fillText(o,n,r)}function Mr(e,t,n,r,i,a,o){let s=Ar(e,t,i,o);return s.forEach((t,i)=>{e.fillText(t,n,r+i*a)}),s.length*a}function Nr(e){if(!e)return[];let t=[];if(Array.from(e.children).forEach(e=>{if(!(e instanceof HTMLElement))return;if(e.matches(`ul, ol`)){let n=e.matches(`ol`);Array.from(e.querySelectorAll(`li`)).forEach((e,r)=>{let i=J(e.textContent||``);i&&t.push(`${n?`${r+1}.`:`-`} ${i}`)});return}let n=J(e.textContent||``);n&&t.push(n)}),t.length===0){let n=J(e.textContent||``);n&&t.push(n)}return t}async function Pr(e){if(!e)return null;try{return yr(await ar(e))}catch(e){return console.debug(`[Hydro] Poster image skipped in canvas renderer.`,e),null}}function Fr(e,t,n,r){let i=window.getComputedStyle(t),a=Y(t,`--hydro-paper-rgb`,[245,243,237]),o=Y(t,`--hydro-bg-rgb`,a),s=Y(t,`--hydro-ink-rgb`,[22,22,20]),c=Y(t,`--hydro-accent-rgb`,[129,160,150]),l=Y(t,`--hydro-teal-rgb`,[80,139,126]),u=xr(i.borderRadius,14),d={x:0,y:0,width:n,height:r};e.save(),wr(e,0,0,n,r,u),e.clip();let f=e.createLinearGradient(0,0,n,r);f.addColorStop(0,X(a,.98)),f.addColorStop(.64,X(a,.9)),f.addColorStop(1,X(o,1)),e.fillStyle=f,e.fillRect(0,0,n,r);let p=e.createRadialGradient(n*.9,r*.14,0,n*.9,r*.14,n*.26);p.addColorStop(0,X(c,.18)),p.addColorStop(1,X(c,0)),e.fillStyle=p,e.fillRect(0,0,n,r);let m=e.createRadialGradient(n*.1,r*.84,0,n*.1,r*.84,n*.28);m.addColorStop(0,X(l,.12)),m.addColorStop(1,X(l,0)),e.fillStyle=m,e.fillRect(0,0,n,r),Er(e,{x:18,y:18,width:n-36,height:r-36},19,X(s,.035)),e.strokeStyle=X(s,.12),e.lineWidth=1,e.strokeRect(17.5,17.5,Math.max(0,n-35),Math.max(0,r-35)),e.save(),e.translate(n-23,r-125),e.rotate(-Math.PI/2),e.fillStyle=X(s,.07),e.font=`700 45px Space Mono, monospace`,e.textBaseline=`top`,e.fillText(`HYDRO`,0,0),e.globalAlpha=.6,e.fillText(`MOMENT`,0,39),e.restore(),Tr(e,d,u,X(s,.16)),e.restore()}async function Ir(e,t,n,r){let i=Y(t,`--hydro-paper-rgb`,[245,243,237]),a=Y(t,`--hydro-ink-rgb`,[22,22,20]),o=Y(t,`--hydro-accent-rgb`,[129,160,150]),s=xr(window.getComputedStyle(t.querySelector(`.hydro-poster-card__hero`)||t).borderRadius,10),c=await Pr(r);e.save(),wr(e,n.x,n.y,n.width,n.height,s),e.clip();let l=e.createLinearGradient(n.x,n.y,n.x+n.width,n.y+n.height);if(l.addColorStop(0,X(o,.18)),l.addColorStop(.55,X(a,.08)),l.addColorStop(1,X(i,.4)),e.fillStyle=l,e.fillRect(n.x,n.y,n.width,n.height),c){Dr(e,c,n);let t=e.createLinearGradient(n.x,n.y,n.x,n.y+n.height);t.addColorStop(0,X(a,.04)),t.addColorStop(1,X(a,.55)),e.fillStyle=t,e.fillRect(n.x,n.y,n.width,n.height)}else Er(e,n,17,X(a,.06),s),e.fillStyle=X(a,.82),e.font=`400 ${Math.min(138,n.height*.64)}px ui-serif, Georgia, serif`,e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(`氢`,n.x+n.width/2,n.y+n.height/2),e.fillStyle=X(a,.28),e.font=`700 12px Space Mono, monospace`,e.textAlign=`right`,e.textBaseline=`top`,e.fillText(`MINIM`,n.x+n.width-16,n.y+n.height-27);e.restore(),Tr(e,n,s,X(a,.14)),e.strokeStyle=X(i,.42),e.lineWidth=1,e.strokeRect(n.x+10.5,n.y+10.5,Math.max(0,n.width-21),Math.max(0,n.height-21));let u=t.querySelector(`[data-hydro-poster-caption]`);u&&(e.fillStyle=c?X(i,.92):X(a,.68),e.font=Q(u,`700 10px Space Mono, monospace`),jr(e,u.textContent||``,n.x+16,n.y+n.height-29,Math.max(0,n.width-32)))}function Lr(e,t){let n=Cr(t,`.hydro-poster-card__copy`),r=t.querySelector(`[data-hydro-poster-copy-content]`),i=Z(t,r),a=t.querySelector(`.hydro-poster-card__kicker`),o=Z(t,a);if(!n||!r||!i)return;let s=Y(t,`--hydro-ink-rgb`,[22,22,20]);e.strokeStyle=X(s,.13),e.lineWidth=1,e.beginPath(),e.moveTo(n.x,n.y+.5),e.lineTo(n.x+n.width,n.y+.5),e.stroke(),a&&o&&(e.fillStyle=$(a,X(s,.44)),e.font=Q(a,`700 11px Space Mono, monospace`),jr(e,a.textContent||``,o.x,o.y,o.width));let c=Nr(r),l=r.firstElementChild,u=window.getComputedStyle(r).color||X(s,.72),d=i.y,f=i.y+i.height;c.forEach((t,n)=>{if(d>=f-6)return;let a=n===0?l:r,o=n===0?Q(a,`650 25px system-ui, sans-serif`):Q(r,`400 14px system-ui, sans-serif`),c=n===0?Or(a,29):Or(r,23),p=Math.max(1,Math.min(n===0?3:2,Math.floor((f-d)/c)));e.fillStyle=n===0?$(a,X(s,.94)):u,e.font=o,e.textAlign=`left`,e.textBaseline=`top`;let m=Mr(e,t,i.x,d,i.width,c,p);d+=m+(n===0?8:7)})}async function Rr(e,t){let n=Cr(t,`.hydro-poster-card__footer`),r=Cr(t,`.hydro-poster-card__seal`),i=Cr(t,`.hydro-poster-site`),a=t.querySelector(`[data-hydro-poster-qr]`),o=Z(t,a);if(!n||!r||!i)return;let s=Y(t,`--hydro-ink-rgb`,[22,22,20]);e.strokeStyle=X(s,.1),e.lineWidth=1,e.beginPath(),e.moveTo(n.x,n.y+.5),e.lineTo(n.x+n.width,n.y+.5),e.stroke();let c=await Pr(t.querySelector(`[data-hydro-poster-avatar]`)),l=r.x+r.width/2,u=r.y+r.height/2,d=Math.min(r.width,r.height)/2;if(e.save(),e.beginPath(),e.arc(l,u,d,0,Math.PI*2),e.clip(),e.fillStyle=X(s,.05),e.fillRect(r.x,r.y,r.width,r.height),c&&Dr(e,c,r),e.restore(),e.beginPath(),e.arc(l,u,d-.5,0,Math.PI*2),e.strokeStyle=X(s,.18),e.stroke(),!c){let n=t.querySelector(`.hydro-poster-card__seal-fallback`);e.fillStyle=$(n,X(s,.78)),e.font=Q(n,`700 16px system-ui, sans-serif`),e.textAlign=`center`,e.textBaseline=`middle`,e.fillText(J(n?.textContent||`H`),l,u)}e.strokeStyle=X(s,.12),e.beginPath(),e.moveTo(i.x+.5,i.y),e.lineTo(i.x+.5,i.y+i.height),e.stroke();let f=t.querySelector(`.hydro-poster-site strong`),p=t.querySelector(`.hydro-poster-site span`),m=t.querySelector(`.hydro-poster-site em`),h=Z(t,f),g=Z(t,p),_=Z(t,m);if(f&&h&&(e.fillStyle=$(f,X(s,.95)),e.font=Q(f,`700 14px system-ui, sans-serif`),jr(e,f.textContent||``,h.x,h.y,h.width)),p&&g&&(e.fillStyle=$(p,X(s,.46)),e.font=Q(p,`400 11px system-ui, sans-serif`),jr(e,p.textContent||``,g.x,g.y,g.width)),m&&_&&(e.fillStyle=$(m,X(s,.62)),e.font=Q(m,`700 10px Space Mono, monospace`),jr(e,m.textContent||``,_.x,_.y,_.width)),a&&o)try{let n=await yr(tr(a.dataset.hydroPosterQrUrl||$n(t,a),a));e.drawImage(n,o.x,o.y,o.width,o.height)}catch(e){console.debug(`[Hydro] Poster QR skipped in canvas renderer.`,e)}}async function zr(e,t,n){hr(e);try{await document.fonts?.ready}catch{}let r=Sr(),i=document.createElement(`canvas`);i.width=Math.ceil(t*r),i.height=Math.ceil(n*r);let a=i.getContext(`2d`);if(!a)throw Error(`Poster canvas context is unavailable`);a.scale(r,r),Fr(a,e,t,n);let o=e.querySelector(`.hydro-poster-card__header`),s=e.querySelector(`.hydro-poster-card__eyebrow`),c=e.querySelector(`.hydro-poster-card__header time`),l=Z(e,o),u=Z(e,s),d=Z(e,c);l&&s&&u&&(a.fillStyle=$(s,`rgba(22, 22, 20, 0.58)`),a.font=Q(s,`700 12px Space Mono, monospace`),jr(a,s.textContent||``,u.x,u.y,u.width)),l&&c&&d&&(a.fillStyle=$(c,`rgba(22, 22, 20, 0.46)`),a.font=Q(c,`400 10px Space Mono, monospace`),jr(a,c.textContent||``,d.x+d.width,d.y,d.width,`right`));let f=hr(e),p=Cr(e,`.hydro-poster-card__hero`);return p&&await Ir(a,e,p,f),Lr(a,e),await Rr(a,e),br(i)}async function Br(e,t,n){let r=await _r(e,t,n),i=`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${n}" viewBox="0 0 ${t} ${n}"><foreignObject width="100%" height="100%">${new XMLSerializer().serializeToString(r)}</foreignObject></svg>`,a=new Blob([i],{type:`image/svg+xml;charset=utf-8`}),o=URL.createObjectURL(a);try{let e=await yr(o),r=Math.min(3,Math.max(2,window.devicePixelRatio||2)),i=document.createElement(`canvas`);i.width=Math.ceil(t*r),i.height=Math.ceil(n*r);let a=i.getContext(`2d`);if(!a)throw Error(`Poster canvas context is unavailable`);return a.scale(r,r),a.drawImage(e,0,0,t,n),await br(i)}finally{URL.revokeObjectURL(o)}}async function Vr(e,t){let n=e.getBoundingClientRect(),r=Math.ceil(n.width||e.offsetWidth),i=Math.ceil(n.height||e.offsetHeight);if(r<=0||i<=0)throw Error(`Poster card has no exportable size`);let a=nr(t);try{vr(await Br(e,r,i),a);return}catch(e){console.debug(`[Hydro] Poster DOM export failed, using canvas renderer.`,e)}vr(await zr(e,r,i),a)}function Hr(e){e.querySelectorAll(`[data-hydro-poster-card]`).forEach(e=>{hr(e)}),e.querySelectorAll(`[data-hydro-poster-download]`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=e.querySelector(`[data-hydro-poster-card]`);if(n){t.disabled=!0,t.classList.add(`is-downloading`),t.setAttribute(`aria-busy`,`true`);try{await Vr(n,nr(t.dataset.filename))}catch(e){console.warn(`[Hydro] Poster PNG export failed.`,e),K(`海报 PNG 生成失败，请稍后再试`,{id:`hydro-poster-download`,title:`分享海报`,variant:`error`})}finally{t.disabled=!1,t.classList.remove(`is-downloading`),t.removeAttribute(`aria-busy`)}}})})}function Ur(){new Set(Array.from(document.querySelectorAll(`[data-hydro-poster-scope]`))).forEach(e=>Hr(e))}function Wr(){document.querySelectorAll(`[data-hydro-filter-root]`).forEach(e=>{let t=Array.from(e.querySelectorAll(`[data-hydro-plugin-filter]`)),n=Array.from(e.querySelectorAll(`[data-hydro-filter-group]`));t.length===0||n.length===0||t.forEach(e=>{e.addEventListener(`click`,()=>{let r=e.dataset.hydroPluginFilter||`all`;t.forEach(t=>t.classList.toggle(`is-active`,t===e)),n.forEach(e=>{let t=r===`all`||e.dataset.hydroFilterGroup===r;e.toggleAttribute(`hidden`,!t)})})})})}function Gr(){let e=document.querySelector(`[data-hydro-doc-content]`)||document.querySelector(`[data-toc-content]`)||document.querySelector(`#content`),t=document.querySelector(`[data-hydro-doc-toc]`);if(!e||!t)return;let n=t.closest(`.hydro-doc-toc`),r=()=>{if(!n)return null;let e=n.querySelector(`.hydro-doc-toc__meta`);return e||(e=document.createElement(`div`),e.className=`hydro-doc-toc__meta`,n.insertBefore(e,t)),e},i=(e,t=`0`,n=``)=>{let i=r();if(!i)return;i.innerHTML=``;let a=document.createElement(`span`);a.className=`hydro-doc-toc__meta-summary`,a.textContent=e>0?`${t} / ${String(e).padStart(2,`0`)}`:`0 / 00`;let o=document.createElement(`strong`);o.className=`hydro-doc-toc__meta-current`,o.textContent=n||`暂无章节`,i.append(a,o)},a=Array.from(e.querySelectorAll(`h1, h2, h3, h4, h5`)).filter(e=>(e.textContent||``).trim().length>0);if(n?.style.setProperty(`--hydro-doc-toc-progress`,`0%`),n?.setAttribute(`data-toc-count`,String(a.length)),a.length===0){i(0),t.innerHTML=`<span class="hydro-doc-toc__empty">${q(document.body.dataset.docTocEmptyText||`无目录`)}</span>`;return}let o=new Set;t.innerHTML=``;let s=[],c=a.map(e=>Number.parseInt(e.tagName.replace(`H`,``),10)||1),l=Math.min(...c),u=Math.max(...c),d=Array.from({length:7},()=>0),f=[];n?.setAttribute(`data-toc-depth-min`,String(l)),n?.setAttribute(`data-toc-depth-max`,String(u));let p=e=>{let t=Math.min(5,Math.max(l,e));for(let e=l;e<t;e+=1)d[e]===0&&(d[e]=1);d[t]+=1;for(let e=t+1;e<d.length;e+=1)d[e]=0;return d.slice(l,t+1).join(`.`)};a.forEach((e,n)=>{let r=c[n]||l,u=p(r),d=Math.min(5,Math.max(1,r-l+1)),m=wn(e.textContent||``,n).replace(/^post-/,`doc-`),h=e.id||m,g=2;for(;o.has(h);)h=`${m}-${g}`,g+=1;o.add(h),e.id=h;let _=document.createElement(`a`);_.href=`#${h}`,_.dataset.depth=String(r),_.dataset.rank=String(d),_.dataset.number=u,_.dataset.index=String(n+1).padStart(2,`0`);let v=document.createElement(`span`);v.className=`hydro-doc-toc__link-index`,v.textContent=u;let y=document.createElement(`span`);y.className=`hydro-doc-toc__link-label`,y.textContent=(e.textContent||``).trim(),_.append(v,y),_.addEventListener(`click`,t=>{t.preventDefault(),s.forEach(e=>e.classList.toggle(`is-active`,e===_)),i(a.length,u,y.textContent||``),tn(e)}),t.append(_),s.push(_),f.push(u)});let m=-1,h=!1,g=e=>{let n=t.getBoundingClientRect(),r=e.getBoundingClientRect();(r.top<n.top+12||r.bottom>n.bottom-12)&&e.scrollIntoView({block:`nearest`,inline:`nearest`})},_=()=>{let e=window.scrollY+Math.round(window.innerHeight*.24),t=a.reduce((t,n,r)=>n.offsetTop<=e?r:t,0),r=a[0]?.offsetTop??0,o=a[a.length-1]?.offsetTop??r,c=Math.max(1,o-r),l=Math.min(1,Math.max(0,(e-r)/c));if(n?.style.setProperty(`--hydro-doc-toc-progress`,`${Math.round(l*100)}%`),s.forEach((e,n)=>e.classList.toggle(`is-active`,n===t)),m!==t){m=t;let e=s[t],n=a[t]?.textContent?.trim()||``;i(a.length,f[t]||`0`,n),e&&g(e)}},v=()=>{h||(h=!0,window.requestAnimationFrame(()=>{h=!1,_()}))};_(),window.addEventListener(`scroll`,v,{passive:!0}),window.addEventListener(`resize`,v)}function Kr(){document.querySelectorAll(`.hydro-doc-tree li`).forEach(e=>{let t=e.querySelector(`:scope > a, :scope > details > summary > a`);if(!t)return;let n=0,r=t.closest(`ul`);for(;r?.parentElement?.closest(`.hydro-doc-tree ul`);)n+=1,r=r.parentElement.closest(`.hydro-doc-tree ul`);t.dataset.docNodeType=e.querySelector(`:scope > details`)?`tree`:`doc`,t.dataset.docTreeDepth=String(n)})}function qr(){let e=document.querySelector(`[data-hydro-steam]`);if(!e)return;let t=`hydro-steam-cache`,n=Math.max(0,Zt(e.dataset.cacheTtlMinutes,3))*60*1e3,r=Number.parseInt(e.dataset.recentLimit||`8`,10),i=Number.parseInt(e.dataset.pageSize||`18`,10),a=e.dataset.enableGameLink!==`false`,o=e.dataset.emptyText||`暂无 Steam 游戏数据`,s=e.dataset.errorText||`Steam 数据暂时不可用`,c=e.dataset.syncHintText||`请确认 plugin-steam 已同步账号数据。`,l=e.dataset.configHintText||`请确认 plugin-steam 已启用，并已填写 Steam ID/API 配置。`,u=e.dataset.libraryLoadingText||`正在加载游戏库。`,d=e.querySelector(`[data-steam-error]`),f=e.querySelector(`[data-steam-avatar]`),p=e.querySelector(`[data-steam-name]`),m=e.querySelector(`[data-steam-status]`),h=e.querySelector(`[data-steam-level]`),g=e.querySelector(`[data-steam-recent]`),_=e.querySelector(`[data-steam-games]`),v=e.querySelector(`[data-steam-pagination]`),y=e.querySelector(`[data-steam-prev]`),b=e.querySelector(`[data-steam-next]`),x=e.querySelector(`[data-steam-page]`),ee=e=>{try{let n=window.localStorage.getItem(`${t}:${e}`);if(!n)return null;let r=JSON.parse(n);return r.expires<Date.now()?(window.localStorage.removeItem(`${t}:${e}`),null):r.value}catch{return null}},te=(e,r)=>{if(!(n<=0))try{window.localStorage.setItem(`${t}:${e}`,JSON.stringify({expires:Date.now()+n,value:r}))}catch{}},S=async(e,t=!0)=>{let n=e.replace(/[^a-z0-9]/gi,`_`),r=t?ee(n):null;if(r)return r;let i=await window.fetch(`/apis/api.steam.timxs.com/v1alpha1${e}`);if(!i.ok)throw Error(`Steam API ${e} failed with ${i.status}`);let a=await i.json();return t&&te(n,a),a},C=(e,t,n=``)=>{e&&(e.innerHTML=`<div class="hydro-plugin-empty hydro-plugin-empty--small">
      <span>Steam</span>
      <strong>${q(t)}</strong>
      ${n?`<p>${q(n)}</p>`:``}
    </div>`)},w=e=>e.appid||e.appId||``,T=(e,t,n,r=!1)=>{if(!e)return;let i=t.filter(e=>w(e)||e.headerImageUrl||e.name);if(i.length===0){C(e,n||o,c);return}e.innerHTML=i.map(e=>{let t=w(e),n=e.headerImageUrl||(t?`https://cdn.cloudflare.steamstatic.com/steam/apps/${t}/header.jpg`:``),i=q(e.name||`Untitled Game`),o=q((r?e.playtime2WeeksFormatted:e.playtimeFormatted)||e.lastPlayedFormatted||`No time data`);return`<a class="hydro-game-card" href="${a&&t?`https://store.steampowered.com/app/${t}`:`#`}"${a&&t?` target="_blank" rel="noreferrer noopener"`:``}>
          <span class="hydro-game-card__media">
            <img src="${q(n||ln(i))}" alt="${i}" loading="lazy" />
          </span>
          <strong>${i}</strong>
          <span>${o}</span>
        </a>`}).join(``),e.querySelectorAll(`img`).forEach(e=>{e.addEventListener(`error`,()=>{e.src=ln(e.alt||`Steam`)},{once:!0})})},E=e=>{let t=e.page||1,n=e.totalPages||1;x&&(x.textContent=`${t} / ${n}`),y&&(y.disabled=t<=1),b&&(b.disabled=t>=n),v&&(v.hidden=n<=1)},D=async e=>{_&&C(_,u);try{let t=await S(`/games?page=${e}&size=${i}`,!1);T(_,t.items||[],o),E(t)}catch{C(_,s,l),d?.removeAttribute(`hidden`)}};Promise.allSettled([S(`/profile`),S(`/stats`),S(`/badges`),S(`/recent?limit=${r}`)]).then(([t,n,r,i])=>{if(t.status===`fulfilled`){let e=t.value,n=e.summary?.avatarfull;f&&(f.innerHTML=n?`<img src="${q(n)}" alt="${q(e.summary?.personaname||`Steam`)}" />`:`<span>ST</span>`),p&&(p.textContent=e.summary?.personaname||`Steam User`),m&&(m.textContent=e.statusText||(e.playing?`Playing`:`Steam profile`))}else d?.removeAttribute(`hidden`);if(n.status===`fulfilled`){let t=n.value,r=e.querySelector(`[data-steam-stat='games']`),i=e.querySelector(`[data-steam-stat='total']`),a=e.querySelector(`[data-steam-stat='recent']`);r&&(r.textContent=String(t.totalGames||0)),i&&(i.textContent=cn(t.totalPlaytimeMinutes)),a&&(a.textContent=cn(t.recentPlaytimeMinutes))}r.status===`fulfilled`&&h&&(h.textContent=`Lv. ${r.value.playerLevel||0}`),i.status===`fulfilled`?T(g,i.value,o,!0):C(g,s,l)}),y?.addEventListener(`click`,()=>{let e=Number.parseInt(x?.textContent?.split(`/`)[0]?.trim()||`1`,10);e>1&&D(e-1)}),b?.addEventListener(`click`,()=>{let[e,t]=x?.textContent?.split(`/`)||[`1`,`1`],n=Number.parseInt(e.trim(),10);n<Number.parseInt(t.trim(),10)&&D(n+1)}),D(1)}Kn(),Gn(),Jn(),Yn(),qn(),Xn(),Ur(),Wr(),Kr(),Mn(),Gr(),qr();function Jr(){let e=document.querySelector(`[data-hydro-back-to-top]`);if(!e)return;let t=Zt(document.body.dataset.backToTopThreshold,100),n=()=>e.classList.toggle(`is-visible`,window.scrollY>t);n(),window.addEventListener(`scroll`,n,{passive:!0}),e.addEventListener(`click`,()=>{en(0)})}function Yr(){let e=document.querySelector(`[data-hydro-fab-trigger]`),t=document.querySelector(`[data-hydro-fab]`);if(!e||!t)return;let n=Array.from(t.querySelectorAll(`.hydro-fab-item`));if(n.length===0)return;let r=window.matchMedia(`(hover: hover) and (pointer: fine)`).matches,i=Math.ceil(48/80*(180/Math.PI)),a=Math.max(i,25),o=(n.length-1)/2*a,s=Math.min(225,270-o);n.forEach((e,t)=>{let r=(s+(t-(n.length-1)/2)*a)*Math.PI/180;e.style.setProperty(`--fab-x`,`${Math.round(Math.cos(r)*80)}px`),e.style.setProperty(`--fab-y`,`${Math.round(Math.sin(r)*80)}px`)});let c,l=()=>{window.clearTimeout(c),t.classList.add(`is-open`),e.setAttribute(`aria-expanded`,`true`)},u=()=>{window.clearTimeout(c),t.classList.remove(`is-open`),e.setAttribute(`aria-expanded`,`false`)},d=()=>{c=window.setTimeout(()=>{u()},300)},f={copyText:e=>nn(e),getWindow:()=>window,isMemberAuthenticated:an,isMemberPluginAvailable:rn,notify:(e,t)=>K(e,t),root:document,scrollToElement:tn,scrollToPosition:en,warn:e=>console.warn(e)};r&&(e.addEventListener(`mouseenter`,l),e.addEventListener(`mouseleave`,d),n.forEach(e=>{e.addEventListener(`mouseenter`,l),e.addEventListener(`mouseleave`,d)})),n.forEach(e=>{e.addEventListener(`click`,t=>{ce(e,t,f,u)})}),e.addEventListener(`click`,e=>{if(e.stopPropagation(),t.classList.contains(`is-open`)){u();return}l()}),document.addEventListener(`click`,n=>{!t.contains(n.target)&&n.target!==e&&u()})}Jr(),Yr();