# 重置密码页面

## 路由

`/reset-password`

## 源码

`src/views/ResetPassword.vue`

## 布局

`AuthLayout`

## 目的

提供基于验证码的密码重置界面。

## 行为

- 收集邮箱、验证码、新密码和确认密码。
- 发送验证码前使用简单正则校验邮箱。
- 请求验证码后启动 60 秒重发倒计时。
- 校验验证码是否存在、密码是否存在、两次密码是否一致。
- 提交时调用 `authStore.resetPasswordWithCode`。
- 重置成功后跳转到 `/sign-in`。
- 组件卸载时清理倒计时定时器。

## 依赖

- `useAuthStore`
- `useRouter`

## 当前限制

Store 方法调用的 API 仍是占位实现，会直接返回成功，不会联系后端。

