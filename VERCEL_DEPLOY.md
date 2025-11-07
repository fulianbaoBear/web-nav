# Vercel 部署指南

## 🚀 快速部署步骤

### 方法一：通过 Vercel 网站部署（推荐）

#### 1. 准备工作
- 确保您的代码已推送到 GitHub: `https://github.com/fulianbaoBear/web-nav`
- 注册 Vercel 账号: https://vercel.com/signup

#### 2. 导入项目
1. 访问 [Vercel Dashboard](https://vercel.com/dashboard)
2. 点击 **"Add New..."** → **"Project"**
3. 选择 **"Import Git Repository"**
4. 找到并选择 `fulianbaoBear/web-nav` 仓库
5. 点击 **"Import"**

#### 3. 配置项目
Vercel 会自动检测到这是一个 Next.js 项目，无需额外配置：

- **Framework Preset**: Next.js（自动检测）
- **Root Directory**: `./`（保持默认）
- **Build Command**: `pnpm build` 或 `npm run build`（自动设置）
- **Output Directory**: `.next`（自动设置）

#### 4. 部署
1. 检查配置无误后，点击 **"Deploy"**
2. 等待部署完成（通常需要 1-3 分钟）
3. 部署成功后会显示您的网站地址

### 方法二：使用 Vercel CLI 部署

#### 1. 安装 Vercel CLI
```bash
npm install -g vercel
```

#### 2. 登录 Vercel
```bash
vercel login
```

#### 3. 部署项目
```bash
cd l:/project/web-nav
vercel
```

按照提示进行配置：
- Set up and deploy? → **Yes**
- Which scope? → 选择您的账号
- Link to existing project? → **No**
- What's your project's name? → `web-nav`（或自定义）
- In which directory is your code located? → `./`
- Want to override the settings? → **No**

#### 4. 生产部署
```bash
vercel --prod
```

## 🔒 登录信息

### 管理员账号
- **用户名**: `fulianbao`
- **密码**: `66706824flb`

> ⚠️ **重要提示**: 
> - 请妥善保管您的登录凭证
> - 建议不要在公开场合分享账号密码
> - 当前版本使用本地验证，数据存储在用户浏览器中

## 📝 部署后的配置

### 自定义域名（可选）

1. 在 Vercel Dashboard 中打开您的项目
2. 进入 **"Settings"** → **"Domains"**
3. 点击 **"Add"**
4. 输入您的域名并按照提示配置 DNS

### 环境变量（如需要）

如果未来添加了需要环境变量的功能：

1. 进入项目的 **"Settings"** → **"Environment Variables"**
2. 添加所需的环境变量
3. 重新部署项目

## 🎯 验证部署

部署成功后：

1. **访问网站**: 打开 Vercel 提供的域名（格式：`https://your-project.vercel.app`）
2. **测试功能**:
   - 浏览导航站点
   - 点击右上角齿轮图标
   - 使用新账号登录: `fulianbao` / `66706824flb`
   - 测试编辑功能
   - 测试退出登录

## 📊 监控和管理

### 查看部署状态
- 访问 Vercel Dashboard 查看实时部署状态
- 查看构建日志了解部署详情

### 自动部署
Vercel 已自动配置 Git 集成：
- 每次推送到 `master` 分支会自动部署到生产环境
- 推送到其他分支会创建预览部署

### 回滚部署
如果需要回滚到之前的版本：
1. 进入项目的 **"Deployments"**
2. 找到想要恢复的部署
3. 点击 **"..."** → **"Promote to Production"**

## 🔧 常见问题

### Q: 部署失败怎么办？
A: 
1. 检查构建日志，查看错误信息
2. 确保所有依赖都在 `package.json` 中
3. 本地运行 `npm run build` 测试构建是否成功

### Q: 如何更新部署？
A: 只需将代码推送到 GitHub，Vercel 会自动重新部署

### Q: 登录功能在 Vercel 上正常工作吗？
A: 是的，登录状态保存在浏览器的 localStorage 中，与部署平台无关

### Q: 数据会丢失吗？
A: 数据存储在每个用户的浏览器本地存储中，不会因为重新部署而丢失

## 📱 预览部署

Vercel 自动为每个 Pull Request 创建预览部署：
- 可以在合并前测试更改
- 每个 PR 都有独立的预览 URL
- 预览部署与生产环境隔离

## 🎉 完成

恭喜！您的导航网站已成功部署到 Vercel！

- 🌐 **生产地址**: `https://your-project.vercel.app`
- 📊 **Dashboard**: https://vercel.com/dashboard
- 📖 **文档**: https://vercel.com/docs

---

有任何问题欢迎查看 [Vercel 官方文档](https://vercel.com/docs) 或在 GitHub Issues 中提问。
