# 登录页面

## 路由

`/sign-in`

## 源码

`src/views/SignIn.vue`

## 布局

`AuthLayout`

## 目的

允许已有用户使用邮箱和密码登录。

## 行为

- 收集邮箱和密码。
- 提交时调用 `authStore.signIn`。
- 如果存在字符串类型的 `route.query.redirect`，登录成功后跳转到该目标。
- 默认跳转到 `/`。
- 提供到 `/sign-up` 和 `/reset-password` 的链接。

## 依赖

- `useAuthStore`
- `useRouter`
- `useRoute`

## 校验和错误

表单使用原生 `required` 属性。API 错误尚未在页面内捕获或展示。

