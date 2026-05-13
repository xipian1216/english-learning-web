# 项目状态

## 当前阶段

前端早期实现阶段。项目已经不再只是默认 Vite 模板，目前包含认证页面、路由保护、持久化认证 Store、后端认证 API 调用，以及初始词汇本界面。

## 当前版本

`package.json` 中的包版本为 `0.0.0`。

## 当前开发重点

- 稳定认证行为和错误处理。
- 完成密码重置的后端集成。
- 将静态词汇本数据替换为真实数据和交互。
- 改进测试，避免测试默认依赖真实后端，除非明确需要。
- 随功能从计划、开发中到已实现的状态流转，同步更新文档。

## 已实现能力

- [认证基础能力](./features/implemented/authentication-foundation.md)
- [词汇本界面壳](./features/implemented/vocabulary-notebook-shell.md)

## 开发中能力

- [密码重置流程](./features/in-progress/password-reset-flow.md)

## 计划中能力

- [词汇管理](./features/planned/vocabulary-management.md)

## 已知风险和待确认问题

- `src/api/auth.ts` 读取 `import.meta.env.VITE_BACKEND_URL`；仓库中存在 `.example.env`，但仍需要确认目标环境中的实际配置。
- `sendResetPasswordCode` 和 `resetPasswordByCode` 目前是占位实现，只返回 `true`，未发起真实网络请求。
- `src/__tests__/Auth.spec.ts` 调用了真实的 `register` API 函数，可能需要后端可用或补充 Mock。
- 部分表单依赖原生 `required` 属性和 `alert`，统一校验与错误展示规则尚未完整定义。
- 词汇本目前使用静态示例数据。

## 新会话推荐阅读顺序

1. `docs/01-project-status.md`
2. `docs/02-architecture.md`
3. `docs/03-development-workflow.md`
4. `docs/features/`、`docs/pages/`、`docs/components/` 下的任务相关文档
5. AI 开发规则文件 `INSTRUCTIONS.md`

