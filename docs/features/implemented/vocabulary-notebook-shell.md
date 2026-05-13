# 词汇本界面壳

## 状态

已作为初始受保护 UI 壳实现。

## 摘要

词汇本页面位于 `/`，需要登录后访问。当前页面展示统计卡片和静态示例词汇网格。

## 源码文件

- `src/views/VocabularyNotebook.vue`
- `src/layouts/MainLayout.vue`
- `src/components/Header.vue`
- `src/router/index.ts`

## 当前行为

- 显示 `Total words` 卡片。
- 显示 `The last word added` 卡片。
- 渲染示例词汇网格。
- 支持移动端响应式布局。
- 通过 `MainLayout` 显示共享 Header。

## 已知缺口

- 词汇数量初始化为 `0`，尚未从示例词汇列表派生。
- 最后添加的词汇初始化为空字符串。
- 尚未接入真实词汇 API。
- 尚未实现新增、编辑、删除、标签、笔记或搜索交互。

