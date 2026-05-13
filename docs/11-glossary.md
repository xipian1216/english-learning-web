# 术语表

## AuthLayout

用于公开认证页面的布局，例如登录、注册和密码重置。

## MainLayout

用于已登录应用页面的布局。当前会在页面内容前渲染 `Header`。

## Auth store

位于 `src/stores/auth.ts` 的 Pinia Store，负责认证会话状态、持久化和认证相关流程。

## API 响应包裹结构

由 `APIResponse<T>` 表示的后端响应结构，包含 `code`、`message` 和可为空的 `data`。

## 词汇本

位于 `/` 的受保护首页。当前显示静态示例词汇卡片和统计卡片。

## 受保护路由

带有 `meta.requireAuth: true` 的路由。未登录用户会被重定向到 `/sign-in`。

## 公开路由

带有 `meta.requireAuth: false` 的路由。当前公开路由包括 `/sign-in`、`/sign-up` 和 `/reset-password`。

## VITE_BACKEND_URL

前端 API 客户端使用的 Vite 环境变量，表示后端基础 URL。

