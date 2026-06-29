# Hydro-Minim 分阶段完善计划

本计划用于当前 `upstream-sync` 分支后续迭代。原则是只完善现有功能，不新增产品能力；每个阶段独立提交、推送、打包，并在用户测试确认后再进入下一阶段。

## 总原则

- 每阶段只解决一个明确问题域。
- 优先修改源文件：`src/`、`settings.yaml`、`theme.yaml`、docs/config。
- `templates/` 只通过 `vp build` 生成，`dist/` 只通过 `theme-package` 生成。
- 每阶段提交使用中文 commit message。
- 每阶段产物都生成到 `dist/halo-theme-hydro-minim-1.0.0-beta4.zip`。
- 阶段完成后停止，等待用户确认测试结果。

## 阶段 0：当前状态归档

状态：已完成。

提交：

- `059697f 保存当前简历功能与构建产物状态`

目的：

- 固化接手时的全部工作区状态，便于回滚和比较。

## 阶段 1：简历专属链接分流修正

状态：已完成，等待用户测试确认。

提交：

- `f8c1c91 修正简历专属链接下载分流逻辑`

范围：

- 修正无 `hr`、有效 `hr`、无效 `hr` 的匹配语义。
- 修正空 `company_key` 与 `default/defualt` 的默认项兼容。
- 修正默认简历关闭下载时误删其他 HR 版本下载按钮的问题。
- 移除公开 `?admin=show` 前台链接助手入口。

用户测试重点：

- 默认简历链接：`/resume`
- 有效专属链接：`/resume?hr=某识别码`
- 无效专属链接：`/resume?hr=unknown`
- 某个 HR 条目关闭下载时，页面不展示下载按钮。
- 访问 `/resume?admin=show` 不再出现公开链接助手。

## 阶段 2：友链表单 FormData 类型收敛

状态：待阶段 1 用户确认后开始。

范围：

- 仅处理 `src/assets/main.ts` 中友链申请兜底复制文本的 `FormDataEntryValue` lint warning。
- 不改变友链提交、复制、跳转评论区、插件检测等现有流程。
- 不新增表单字段、不新增后台设置。

预期改动：

- 新增局部字符串归一化 helper，确保 `FormData.get()` 返回值只以字符串参与模板拼接。
- 保持当前空值兜底文案和复制内容格式不变。

验证：

```bash
.\node_modules\.bin\vp.CMD test run --environment jsdom --passWithNoTests
.\node_modules\.bin\tsc.CMD --noEmit
.\node_modules\.bin\vp.CMD check
.\node_modules\.bin\vp.CMD build
.\node_modules\.bin\theme-package.CMD
```

提交建议：

```bash
git commit -m "收敛友链表单复制文本类型"
```

## 阶段 3：兼容目标说明一致化

状态：待阶段 2 用户确认后开始。

范围：

- 对齐 `AGENTS.md`、`theme.yaml`、README/docs 中 Halo 兼容目标说明。
- 不改变主题运行时代码。
- 如果选择保留 `theme.yaml` 的 `>=2.25.0`，则同步更新文档说明；如果确认要回到 `>=2.20.0`，再评估当前模板语法和依赖是否兼容。

验证：

```bash
.\node_modules\.bin\vp.CMD check
.\node_modules\.bin\vp.CMD build
.\node_modules\.bin\theme-package.CMD
```

提交建议：

```bash
git commit -m "统一主题兼容目标说明"
```

## 暂不处理项

- 不把 PDF 下载改成后端鉴权下载；当前主题层只能控制按钮显示，不能真正阻止公开 PDF 直链访问。
- 不恢复公开前台链接助手；后台自动拼接和复制链接如果要做，应放在 Halo 后台配置体验里另行设计。
- 不做视觉大改、不调整非相关页面布局。
