# 认证基础能力

## 状态

基础能力已实现，但仍存在已知缺口。

## 摘要

应用支持登录、注册、认证会话持久化、路由守卫，以及登录后访问词汇本路由。

## 源码文件

- `src/views/SignIn.vue`
- `src/views/SignUp.vue`
- `src/stores/auth.ts`
- `src/api/auth.ts`
- `src/router/index.ts`
- `src/schemas/auth.ts`
- `src/schemas/common.ts`

## 用户流程

### 登录

1. 用户打开 `/sign-in`。
2. 用户提交邮箱和密码。
3. `authStore.signIn` 调用 `login`。
4. 成功后，会话被持久化。
5. 用户被重定向到查询参数 `redirect` 指向的目标，或默认跳转到 `/`。

### 注册

1. 用户打开 `/sign-up`。
2. 用户提交邮箱和密码。
3. `authStore.signUp` 调用 `register`。
4. 成功后，会话被持久化。
5. 用户被重定向到 `/`。

### 受保护路由访问

1. 用户访问 `/`。
2. 路由检查 `authStore.isAuthenticated`。
3. 如果不存在 access token，用户会被重定向到 `/sign-in`。

## 持久化

Auth store 将会话数据持久化到 `localStorage.auth_state`。

## 已知缺口

- 尚未实现 Token 刷新或过期处理。
- UI 尚未统一展示 API 错误。
- 注册表单收集了确认密码，但提交前尚未校验一致性。
- 认证测试应改为 Mock 网络请求。

