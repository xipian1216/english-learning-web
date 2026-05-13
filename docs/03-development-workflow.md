# 开发流程

## 环境准备

使用满足 `package.json` 要求的 Node.js 版本：

```txt
^20.19.0 || >=22.12.0
```

安装依赖：

```sh
npm install
```

## 本地开发

启动 Vite 开发服务器：

```sh
npm run dev
```

本地预览生产构建：

```sh
npm run preview
```

## 常用验证命令

```sh
npm run type-check
npm run lint
npm run build
npm run test:unit
npm run test:e2e
```

`npm run build` 会通过已配置脚本执行类型检查和 Vite 构建。

## 功能开发流程

1. 先阅读 `docs/01-project-status.md`。
2. 如果存在对应功能文档，阅读 `docs/features/` 下的功能文档。
3. 阅读 `docs/pages/` 和 `docs/components/` 下受影响页面与组件文档。
4. 修改前检查实际源码文件。
5. 只做聚焦变更。
6. 行为发生变化时，新增或更新测试。
7. 当路由、API、状态、UI 行为或流程变化时，同步更新文档。
8. 完成前运行最相关的验证命令。

## 文档维护流程

- 计划中功能位于 `docs/features/planned/`。
- 开发中功能位于 `docs/features/in-progress/`。
- 已完成功能位于 `docs/features/implemented/`。
- 页面行为记录在 `docs/pages/`。
- 可复用组件记录在 `docs/components/`。
- 发布状态记录在 `docs/releases/`。

当功能状态变化时，移动或重写对应功能文档，并更新 `docs/01-project-status.md` 中的链接。

## AI 接手流程

新的 AI 开发会话建议从以下文件开始：

1. `INSTRUCTIONS.md`
2. `docs/01-project-status.md`
3. `docs/02-architecture.md`
4. 任务相关文档
5. 与任务相关的实际源码文件

如果文档与源码冲突，以源码作为最新事实，并在任务中同步更新文档。

