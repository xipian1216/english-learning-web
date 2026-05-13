# 部署说明

## 构建命令

创建生产构建：

```sh
npm run build
```

构建脚本会执行类型检查，然后运行 Vite 构建。

## 预览命令

本地预览生产构建：

```sh
npm run preview
```

## 环境变量

前端 API 客户端需要：

```txt
VITE_BACKEND_URL=<backend origin>
```

由于这是 Vite 应用，暴露给前端的环境变量必须使用 `VITE_` 前缀。

## 静态资源

静态公共资源位于 `public/`。当前头部 Logo 使用 `/favicon.ico`。

## 基础路径

路由历史使用以下值创建：

```txt
import.meta.env.BASE_URL
```

如果部署在子路径下，需要相应配置 Vite 的 base path。

## 部署目标

仓库中尚未记录特定托管平台或 CI/CD 流程。只要环境变量和后端连接配置正确，该应用可以作为静态 Vite 构建产物部署。

## 部署前清单

- 为目标环境设置 `VITE_BACKEND_URL`。
- 运行 `npm run type-check`。
- 运行 `npm run lint`。
- 运行 `npm run build`。
- 运行相关单元测试和端到端测试。
- 针对目标后端手动验证认证跳转和受保护路由。

## 回滚

当前尚未记录项目特定的回滚流程。如托管平台支持静态部署回滚，应优先使用平台提供的回滚机制。

