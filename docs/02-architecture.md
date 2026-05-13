# 架构说明

## 高层结构

该应用是一个使用 Vite 构建的 Vue 3 单页应用。项目使用 Vue Router 处理页面导航和路由守卫，使用 Pinia 管理认证状态，并通过轻量 API 客户端层与后端交互。

```txt
src/
  api/          后端 API 客户端函数
  components/   可复用 UI 组件
  layouts/      路由级布局容器
  router/       路由表和导航守卫
  schemas/      共享 TypeScript 响应和领域类型
  stores/       Pinia Store
  views/        路由页面组件
```

## 应用启动流程

1. `src/main.ts` 基于 `App.vue` 创建 Vue 应用。
2. 通过 `createPinia()` 安装 Pinia。
3. 安装 Vue Router。
4. 将应用挂载到 `#app`。
5. `App.vue` 读取 `route.meta.layout` 并渲染对应布局组件。
6. 当前布局通过 `<RouterView />` 渲染当前路由页面。

## 路由和布局

路由定义在 `src/router/index.ts`：

| 路径 | 名称 | 页面 | 布局 | 认证要求 |
| --- | --- | --- | --- | --- |
| `/sign-in` | `SignIn` | `SignIn.vue` | `AuthLayout` | 公开 |
| `/sign-up` | `SignUp` | `SignUp.vue` | `AuthLayout` | 公开 |
| `/reset-password` | `ResetPassword` | `ResetPassword.vue` | `AuthLayout` | 公开 |
| `/` | `VocabularyNotebook` | `VocabularyNotebook.vue` | `MainLayout` | 需要登录 |

`AuthLayout` 将认证表单居中显示在全屏背景中。`MainLayout` 在受保护页面内容上方渲染 `Header`。

## 路由守卫

`router.beforeEach` 读取 `useAuthStore().isAuthenticated`。

- 未登录用户访问 `meta.requireAuth: true` 的路由时，会被重定向到 `/sign-in`。
- 如果受保护目标不是 `/`，原始目标会保存在 `redirect` 查询参数中。
- 已登录用户访问 `/sign-in` 时，会被重定向到 `/`。

## 状态管理

`src/stores/auth.ts` 定义了 `auth` Pinia Store。

会话字段包括：

- `accessToken`
- `tokenType`
- `expiresIn`
- `user`

会话会以 `auth_state` 为键持久化到 `localStorage`。如果持久化 JSON 无效，会被清除并替换为空会话。

## API 集成和数据流

认证页面调用 auth store 中的方法。Store 调用 `src/api/auth.ts` 中的函数。API 函数使用 `fetch`，并读取 `VITE_BACKEND_URL` 环境变量。

典型登录流程：

1. `SignIn.vue` 收集邮箱和密码。
2. `authStore.signIn` 调用 `login`。
3. `login` 发送 `POST /v1/sessions`。
4. API 响应被转换为 `UserPayload`。
5. auth store 持久化会话。
6. 路由跳转到请求目标或 `/`。

## Schema

- `src/schemas/common.ts` 定义 `APIResponse<T>`，包含 `code`、`message` 和可为空的 `data`。
- `src/schemas/auth.ts` 定义 `UserData` 和 `UserPayload`。

## 错误处理

API 函数会解析 JSON 响应，并在 `response.ok` 为 false 时抛出 `Error`。抛出的错误对象会附加 `code` 和 `status` 属性。目前尚未实现统一的 UI 级错误展示。

## 认证边界

当前应用将 `accessToken` 是否存在作为已登录状态。Token 过期处理和刷新机制尚未实现。

