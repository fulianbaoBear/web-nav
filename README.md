# Next Web Nav - 现代化的前端导航网站

## 前言
在日常学习和工作过程中，我们经常需要收藏和管理大量的网站资源。Next Web Nav 就是为解决这个问题而生的一个现代化导航网站，它不仅提供了优雅的用户界面，还支持完全的自定义配置，并内置了登录认证系统来保护您的数据安全。

## 特色功能

### 🎯 核心功能
- 📱 完美的响应式设计，支持各种设备
- 🔍 快速的站内实时搜索
- 🔐 用户登录认证系统
- ⚙️ 可视化的导航数据管理界面
- 💾 本地数据持久化存储
- 🌓 优雅的明暗主题切换
- 🔒 权限控制，保护编辑功能

### 💡 用户体验
- 🎨 现代化的 UI 设计
- ⚡ 快速的页面加载和响应
- 🔄 流畅的动画过渡效果
- 📝 直观的数据编辑界面
- 🛡️ 安全的数据重置确认机制
- 💬 友好的操作提示信息

### 🛠️ 技术特点
- 基于 Next.js 14 构建
- 使用 Tailwind CSS 实现样式
- 采用 shadcn/ui 组件库
- 使用 Zustand 进行状态管理（支持持久化）
- 内置用户认证系统
- 完整的 TypeScript 支持

## 效果展示
<p align="center">
  <img src="/public/next-web-nav-pc.png" alt="桌面端浅色主题">
  <img src="/public/next-web-nav-pc-dark.png" alt="桌面端深色主题">
</p>

<p align="center">
  <img src="/public/next-web-nav-phone.png" style="width: 45%; margin: 5px;" alt="移动端浅色主题">
  <img src="/public/next-web-nav-phone-dark.png" style="width: 45%; margin: 5px;" alt="移动端深色主题">
</p>

<p align="center"> 基于 <b>Next.js</b> 的现代化前端导航网站 </p>

## 在线预览

🌐 [在线访问地址](https://nav.liwenkai.fun)

## 快速开始

### 1️⃣ 克隆项目
```bash
git clone git@github.com:fulianbaoBear/web-nav.git
cd web-nav
```

### 2️⃣ 安装依赖
```bash
# 使用 pnpm（推荐）
pnpm install

# 或使用 npm
npm install

# 或使用 yarn
yarn install
```

### 3️⃣ 启动开发服务器
```bash
# 使用 pnpm
pnpm dev

# 或使用 npm
npm run dev

# 或使用 yarn
yarn dev
```

### 4️⃣ 开始使用
在浏览器中打开 [http://localhost:3000](http://localhost:3000) 即可开始使用

## 登录功能

### 🔐 默认账号
为了保护您的导航数据，编辑功能需要登录后才能使用。

- **用户名**: `admin`
- **密码**: `admin123`

### 🔑 登录流程
1. 点击右上角的设置图标 ⚙️（未登录状态）
2. 在弹出的登录对话框中输入账号密码
3. 登录成功后，设置图标将解锁编辑功能
4. 登录状态会自动保存，刷新页面后保持登录

### 🚪 退出登录
在编辑对话框的右上角，可以看到当前登录用户名和"退出登录"按钮，点击即可退出。

### ⚙️ 修改默认账号
如需修改默认账号密码，请编辑 `stores/useAuthStore.ts` 文件：
```typescript
const DEFAULT_USERNAME = 'admin'
const DEFAULT_PASSWORD = 'admin123'
```

> ⚠️ **安全提示**: 当前版本使用简单的本地验证，仅用于演示。生产环境建议接入后端 API 进行真正的身份验证。

## 自定义导航数据

### 可视化编辑（需要登录）
1. 点击右上角的设置图标 ⚙️，使用账号密码登录
2. 在编辑面板中可以：
   - ➕ 添加新的分类或链接
   - ✏️ 编辑现有的分类和链接信息
   - 🗑️ 删除不需要的内容
   - 🔄 一键重置为默认数据（需二次确认）
3. 点击"保存更改"按钮应用修改
4. 所有数据自动保存到浏览器本地存储

### 数据结构
```typescript
interface NavLinkItem {
  icon: string    // 图标URL
  title: string   // 标题
  desc: string    // 描述
  link: string    // 链接URL
}

interface NavCategory {
  title: string        // 分类名称
  items: NavLinkItem[] // 分类下的链接列表
}
```

## 项目结构

```
web-nav/
├── app/                      # Next.js 应用目录
│   ├── layout.tsx           # 根布局组件
│   └── page.tsx             # 首页组件
├── components/              # 组件目录
│   ├── site-header/        # 头部组件
│   │   ├── components/     # 头部子组件
│   │   │   ├── icons.tsx          # 图标组件
│   │   │   ├── login-dialog.tsx   # 登录对话框（新增）
│   │   │   ├── setting-dialog.tsx # 设置对话框
│   │   │   └── theme-toggle.tsx   # 主题切换
│   │   └── index.tsx       # 头部主组件
│   ├── ui/                 # UI 基础组件
│   ├── link-content.tsx    # 链接内容组件
│   ├── sidebar.tsx         # 侧边栏组件
│   └── site-footer.tsx     # 页脚组件
├── stores/                  # 状态管理
│   ├── useAuthStore.ts     # 认证状态管理（新增）
│   ├── useConfigStore.ts   # 配置状态管理
│   └── index.ts            # Store 导出
├── config/                  # 配置文件
│   └── site.ts             # 站点配置
├── styles/                  # 样式文件
├── public/                  # 静态资源
├── LOGIN_FEATURE.md        # 登录功能说明（新增）
├── TEST_GUIDE.md           # 测试指南（新增）
└── README.md               # 项目说明
```

## 部署指南

### Vercel 部署（推荐）
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/fulianbaoBear/web-nav)

1. 点击上方按钮
2. 选择或导入你的 GitHub 仓库
3. Vercel 会自动完成部署配置
4. 等待部署完成即可访问

### 其他部署方式
1. 构建生产版本
```bash
pnpm build
```

2. 启动生产服务器
```bash
pnpm start
```

## 常见问题

### ❓ 登录相关

**Q: 忘记密码怎么办？**
A: 默认账号密码是 `admin/admin123`，可以在 `stores/useAuthStore.ts` 中查看或修改。

**Q: 能否添加更多用户？**
A: 当前版本只支持单用户。如需多用户功能，建议接入后端用户系统。

**Q: 登录状态丢失？**
A: 检查浏览器是否禁用了 localStorage。登录状态保存在本地存储中。

### ❓ 数据相关

**Q: 数据保存在哪里？**
A: 所有导航数据保存在浏览器的 localStorage 中，不会上传到服务器。

**Q: 清除浏览器数据会丢失配置吗？**
A: 是的。建议定期导出备份（可自行实现导出功能）。

**Q: 如何重置数据？**
A: 登录后在设置对话框中点击"重置数据"按钮（需二次确认）。

### ❓ 部署相关

**Q: 部署后其他人能看到我的导航吗？**
A: 可以。但每个访问者的数据是独立的（保存在各自的浏览器中）。

**Q: 如何修改网站标题和描述？**
A: 编辑 `config/site.ts` 文件中的配置。

## 更新日志

### v1.1.0 (2025-11-07)
- ✨ **新增**: 用户登录认证系统
- ✨ **新增**: 权限控制，保护编辑功能
- ✨ **新增**: 登录状态持久化
- ✨ **新增**: 退出登录功能
- 📝 **文档**: 新增登录功能说明文档
- 📝 **文档**: 新增详细测试指南

### v1.0.0
- 🎉 初始版本发布
- ✨ 完整的导航网站功能
- ⚙️ 可视化数据管理
- 🌓 明暗主题切换

## 贡献指南

### 🤝 如何贡献
1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 提交 Pull Request

### 🐛 问题反馈
- 使用 [GitHub Issues](https://github.com/fulianbaoBear/web-nav/issues) 提交 bug
- 在提交 bug 时请详细描述问题并附上复现步骤
- 欢迎提出新功能建议

## 开源协议

本项目采用 MIT 协议开源，完整的协议请参考 [LICENSE](LICENSE) 文件。

## 相关文档

- 📖 [登录功能说明](LOGIN_FEATURE.md)
- 🧪 [测试指南](TEST_GUIDE.md)

## 鸣谢

- 感谢所有贡献者的付出
- 技术栈: [Next.js](https://nextjs.org/) · [Tailwind CSS](https://tailwindcss.com/) · [shadcn/ui](https://ui.shadcn.com/) · [Zustand](https://zustand-demo.pmnd.rs/)
- 如果觉得项目对你有帮助，欢迎给个 Star ⭐

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/fulianbaoBear">fulianbaoBear</a>
</p>
