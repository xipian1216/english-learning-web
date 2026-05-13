# 排障指南

## 安装问题

如果依赖安装失败：

1. 确认 Node.js 满足 `^20.19.0 || >=22.12.0`。
2. 如有必要，清理本地安装产物。
3. 重新运行 `npm install`。

## 类型检查问题

运行：

```sh
npm run type-check
```

常见检查点：

- `.vue` 组件导入。
- 路由元信息类型。
- `src/schemas/` 下的 Schema 变更。
- API 返回类型。

## Lint 问题

运行：

```sh
npm run lint
```

已配置的 lint 脚本会运行 Oxlint 和 ESLint，并携带 `--fix`。提交前应检查自动修复产生的变更。

## 构建问题

运行：

```sh
npm run build
```

如果构建失败，检查：

- 类型检查输出。
- Vite 环境变量。
- `@/` 等导入别名。
- 是否在不安全位置使用了浏览器专属 API。

## API 问题

如果认证请求失败：

1. 确认已设置 `VITE_BACKEND_URL`。
2. 确认后端暴露了预期的 `/v1/*` 端点。
3. 检查响应包裹结构是否包含 `code`、`message` 和 `data`。
4. 确认受保护请求包含 `Authorization: Bearer <token>`。

## 认证跳转问题

如果受保护路由行为不符合预期：

1. 检查 `localStorage.auth_state`。
2. 确认已登录状态下存在 `accessToken`。
3. 检查路由上的 `meta.requireAuth`。
4. 检查 `src/router/index.ts` 中的 `router.beforeEach` 逻辑。

## 密码重置问题

密码重置 API 仍是占位实现。`sendResetPasswordCode` 和 `resetPasswordByCode` 当前返回 `true`，不会联系后端。

## 测试问题

`src/__tests__/Auth.spec.ts` 可能依赖真实 API 行为，因为它直接调用 `register`。建议使用 Mock `fetch` 来获得确定性的单元测试。

