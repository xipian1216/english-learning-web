# 密码重置流程

## 状态

开发中。

## 摘要

密码重置页面已经存在，并提供了基于验证码的 UI 流程，但 API 客户端函数仍是占位实现。

## 源码文件

- `src/views/ResetPassword.vue`
- `src/stores/auth.ts`
- `src/api/auth.ts`

## 当前 UI 行为

- 用户输入邮箱。
- 用户点击 `Send Code`。
- 页面使用简单邮箱正则进行校验。
- 请求验证码后启动 60 秒重发倒计时。
- 用户输入验证码、新密码和确认密码。
- 页面检查验证码是否存在、密码是否存在、两次密码是否一致。
- 成功后，页面提示用户并跳转到 `/sign-in`。

## 当前后端行为

`sendResetPasswordCode` 和 `resetPasswordByCode` 当前直接返回 `true`，不会发起网络请求。

## 下一步

- 确认后端端点和请求载荷格式。
- 在 `src/api/auth.ts` 中实现真实 API 调用。
- 增加用户友好的加载和错误状态。
- 用行内反馈替代 `alert`。
- 使用 Mock `fetch` 补充单元测试。

