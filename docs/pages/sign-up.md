# 注册页面

## 路由

`/sign-up`

## 源码

`src/views/SignUp.vue`

## 布局

`AuthLayout`

## 目的

允许新用户使用邮箱和密码创建账号。

## 行为

- 收集邮箱、密码和确认密码。
- 提交时调用 `authStore.signUp(email, password, null)`。
- 成功后跳转到 `/`。
- 提供返回 `/sign-in` 的链接。

## 依赖

- `useAuthStore`
- `useRouter`

## 校验和错误

表单使用原生 `required` 属性。确认密码会被收集，但提交前尚未校验一致性。API 错误尚未在页面内捕获或展示。

