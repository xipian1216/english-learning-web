# 项目总览

## 项目目的

`english-learning-web` 是一个基于 Vue 的英语学习产品前端。当前应用主要聚焦于认证流程和受保护的词汇本页面。

该仓库最初来自 Vue 3 + Vite 模板，但目前已经包含项目特定的路由、布局、认证状态管理、API 集成和初始词汇本界面。

## 主要能力

- 邮箱和密码登录。
- 邮箱和密码注册。
- 带验证码流程脚手架的密码重置页面。
- 受保护的词汇本路由。
- 使用 `localStorage` 持久化认证状态。
- 面向公开页面和需登录页面的路由守卫。
- 面向用户和会话接口的基础 API 客户端。

## 目标用户和使用场景

该应用面向需要通过 Web 界面管理词汇学习的英语学习者。当前实现仍处于早期阶段：认证和后端集成正在建立，词汇本页面暂时使用静态数据。

## 技术栈

- Vue 3
- Vite
- TypeScript
- Vue Router
- Pinia
- Vitest
- Playwright
- ESLint
- Oxlint
- Prettier

## 重要入口文件

- `src/main.ts`：创建 Vue 应用，安装 Pinia 和 Vue Router，并挂载应用。
- `src/App.vue`：根据路由元信息选择当前布局，并渲染当前路由。
- `src/router/index.ts`：定义路由表和认证守卫。
- `src/stores/auth.ts`：管理认证会话状态和持久化。
- `src/api/auth.ts`：包含认证相关后端请求。

## 快速开始

```sh
npm install
npm run dev
```

验证命令参见[测试说明](./05-testing.md)。开发流程参见[开发流程](./03-development-workflow.md)。

