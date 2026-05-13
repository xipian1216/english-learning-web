# 技术决策

## 2026-05-13 - 使用路由元信息选择布局

状态：已接受

应用在 `App.vue` 中使用 `route.meta.layout` 在 `AuthLayout` 和 `MainLayout` 之间选择布局。

原因：

- 让页面组件专注于页面行为。
- 由路由控制展示认证布局还是主应用外壳。
- 未来新增布局时，不需要修改每个页面。

## 2026-05-13 - 使用 localStorage 持久化认证会话

状态：当前阶段已接受

auth store 将 `accessToken`、Token 元数据和用户数据持久化到 `localStorage.auth_state`。

原因：

- 在早期开发阶段保持刷新后登录状态。
- 支持应用启动后立即进行路由守卫判断。

权衡：

- 尚未实现 Token 过期和刷新处理。
- 生产强化前需要重新评估安全性和生命周期行为。

## 2026-05-13 - 使用 TypeScript interface 维护 API Schema

状态：已接受

共享 API 和认证载荷结构以 TypeScript interface 形式保存在 `src/schemas/` 下。

原因：

- 让 API 客户端和 Store 代码保持类型化。
- 为前端对后端响应的预期提供统一演进位置。

