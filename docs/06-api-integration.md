# API 集成

## API 客户端位置

认证相关 API 函数位于 `src/api/auth.ts`。

## 后端基础 URL

API 客户端从以下变量读取后端地址：

```ts
import.meta.env.VITE_BACKEND_URL
```

该值应通过符合 Vite 约定的环境文件或运行环境提供。

## 响应包裹结构

共享响应结构定义在 `src/schemas/common.ts`：

```txt
code: number
message: string
data: T | null
```

## 认证载荷

`src/schemas/auth.ts` 定义：

- `UserData`
- `UserPayload`

`UserPayload` 包含：

- `user_data`
- `access_token`
- `token_type`
- `expires_in`

## 已实现端点

| 函数 | 方法和路径 | 认证 | 用途 |
| --- | --- | --- | --- |
| `register` | `POST /v1/users` | 否 | 创建用户并返回会话载荷 |
| `login` | `POST /v1/sessions` | 否 | 创建会话 |
| `getMe` | `GET /v1/users/me` | Bearer token | 获取当前用户 |
| `updatePassword` | `PUT /v1/users/me/password` | Bearer token | 更新当前用户密码 |

## 占位端点

以下函数目前只返回 `true`，不会发起真实网络请求：

- `sendResetPasswordCode`
- `resetPasswordByCode`

后端契约明确后，应补全这些函数。

## 错误处理约定

API 函数会将 JSON 响应解析为 `APIResponse<T>`。当 `response.ok` 为 false 时，会使用 `data.message || 'Request failed'` 抛出 `Error`。抛出的对象会附加：

- `code`
- `status`

UI 代码应捕获这些错误，并展示用户友好的消息。

## 认证请求头约定

认证请求使用：

```txt
Authorization: Bearer <token>
```

## 后续集成事项

- 使用 Mock `fetch` 补充请求和响应测试。
- 定义密码重置的后端契约。
- 决定 Token 过期和刷新机制。
- 当 API 面增大时，集中处理重复的 fetch 和错误解析逻辑。

