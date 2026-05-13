# Header 组件

## 源码

`src/components/Header.vue`

## 目的

为已登录页面提供主应用头部。

## 渲染内容

- 使用 `/favicon.ico` 的品牌 Logo。
- 提示文字：`English Learning`。
- 标题：`Vocabulary Notebook`。
- 搜索输入框占位符：`Search words, notes, tags...`。

## Props 和事件

当前无 Props 和事件。

## 行为

搜索输入框仅作视觉展示，不会触发事件或更新状态。

## 响应式行为

低于 `720px` 时，Header 纵向排列，搜索输入框占满可用宽度。

## 后续考虑

- 将当前页面标题作为 prop 传入。
- 通过事件或 `v-model` 暴露搜索查询变化。
- 增加用户菜单和登出操作。

