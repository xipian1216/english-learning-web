# 测试说明

## 测试工具

项目配置了以下工具：

- Vitest：单元测试。
- Playwright：端到端测试。
- `vue-tsc`：类型检查。
- ESLint 和 Oxlint：代码检查。
- Vite build：生产构建验证。

## 测试位置

- 单元测试：`src/__tests__/`
- 端到端测试：`e2e/`

当前测试文件：

- `src/__tests__/Auth.spec.ts`
- `e2e/vue.spec.ts`

## 命令

运行单元测试：

```sh
npm run test:unit
```

运行端到端测试：

```sh
npm run test:e2e
```

运行类型检查：

```sh
npm run type-check
```

运行 Lint：

```sh
npm run lint
```

运行生产构建：

```sh
npm run build
```

## 推荐的完成前检查

对于代码变更，至少运行：

```sh
npm run type-check
npm run lint
```

对于路由、布局或构建相关变更，还应运行：

```sh
npm run build
```

对于功能行为变更，应运行或新增相关单元测试和端到端测试。

## 当前测试注意事项

- `src/__tests__/Auth.spec.ts` 当前从真实 API 客户端导入 `register`。如果没有 Mock fetch 层，可能会调用已配置后端。
- 认证测试应改进为 Mock `fetch`，验证请求、响应和错误行为，避免依赖外部服务。
- Playwright 测试是否需要先构建或启动应用，取决于 Playwright 配置。

## 手动验证清单

认证相关变更：

- 访问 `/sign-in`、`/sign-up` 和 `/reset-password`。
- 验证公开页面在 `AuthLayout` 中渲染。
- 验证未登录访问 `/` 会跳转到 `/sign-in`。
- 验证登录成功后跳转到 `/` 或 `redirect` 查询参数目标。
- 验证已登录访问 `/sign-in` 会跳转到 `/`。
- 如实现或修改登出，验证登出行为。

词汇本相关变更：

- 验证 `/` 需要登录。
- 验证词汇本布局在桌面和移动端宽度下正常。
- 验证未来新增的搜索、新增、编辑或删除交互。

