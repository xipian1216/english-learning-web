# 编码规范

## 通用原则

- 优先进行小而聚焦的变更。
- 遵循现有文件组织和命名约定。
- 保持代码、测试和文档一致。
- 不新增依赖，除非有明确必要性。
- 避免硬编码密钥或环境相关值。

## Vue 和 TypeScript

- 使用 Vue 3 单文件组件。
- 现有组件使用 `<script setup lang="ts">`。
- 路由页面组件放在 `src/views/` 下。
- 可复用 UI 组件放在 `src/components/` 下。
- 布局容器放在 `src/layouts/` 下。
- 共享领域类型和 API 响应类型放在 `src/schemas/` 下。

## 路由

- 在 `src/router/index.ts` 中定义路由。
- 使用路由 `meta.layout` 在 `App.vue` 中选择布局。
- 使用路由 `meta.requireAuth` 表示认证保护。
- 未登录用户跳转到 `/sign-in` 时，应保留原始跳转意图。

## 状态管理

- 使用 `src/stores/` 下的 Pinia Store。
- 如果 Store 已经拥有相关流程，页面组件中不要重复直接调用 API。
- 当前认证状态持久化在 `localStorage` 的 `auth_state` 键下。
- 避免在 auth store 之外重复维护认证状态。

## API 客户端

- 后端请求放在 `src/api/` 下。
- 使用 `src/schemas/` 中的类型描述响应载荷。
- 保持 API 错误处理一致：解析后端响应，并抛出包含状态和错误码信息的错误。
- 不硬编码后端基础 URL；使用 `VITE_BACKEND_URL` 等环境变量。

## 表单和校验

- 使用语义化 label；如果视觉隐藏 label，沿用现有 `sr-only` 模式。
- 适当保留浏览器 autocomplete 属性。
- 新增表单行为时，优先使用明确的校验状态和行内错误信息，而不是 `alert`。
- 在调用 API 或 Store action 前，在 UI 层检查密码确认等基础规则。

## 样式

- 当前样式主要使用组件级 scoped CSS。
- 现有 UI 使用暖橙色渐变、圆角卡片、柔和阴影和响应式布局。
- 当布局在不同屏幕宽度下变化时，使用明确媒体查询。
- 保持基础可访问性：语义元素、label、焦点状态和可读对比度。

## 注释

生成代码注释时应使用英文。

