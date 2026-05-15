# 元老院 · SENATUS

> 于凡常岁月中，缔造不朽之章。

古罗马气韵 × 赛博朋克质感 × 后现代哲思 — 高中男生友好组织的官方精神领地。

---

## 📁 项目结构

```
senatus/
├── public/
│   ├── index.html        # 主页面
│   ├── style.css         # 全局样式
│   ├── main.js           # 交互逻辑 & 画廊数据
│   └── images/           # 所有图片资源
│       ├── moment-01.jpg ~ moment-09.jpg   # 互动照片
│       ├── artwork-01.jpg ~ artwork-09.jpg # 画作
│       └── writing-01.jpg ~ writing-02.jpg # 文章
├── vercel.json           # Vercel 部署配置
└── README.md
```

---

## 🚀 部署到 Vercel（三步完成）

### 方法一：拖拽部署（最简单）

1. 访问 [vercel.com](https://vercel.com) 并登录（可用 GitHub 账号）
2. 点击 **"Add New Project"** → **"Deploy from template"** 旁边找 **拖拽上传**
3. 将整个 `senatus` 文件夹拖入上传区域
4. 点击 **Deploy** — 等待约 30 秒，获得公开网址 ✅

### 方法二：GitHub + Vercel（推荐，支持自动更新）

```bash
# 1. 在 GitHub 新建仓库，上传整个 senatus 文件夹
# 2. 在 Vercel 导入该仓库
# 3. 配置：
#    - Framework Preset: Other
#    - Root Directory: ./
#    - Output Directory: public
# 4. Deploy
```

### 方法三：Vercel CLI

```bash
npm i -g vercel
cd senatus
vercel --prod
```

---

## ✏️ 如何更新内容

### 替换图片
将新图片命名为对应文件名（如 `moment-01.jpg`）放入 `public/images/` 即可。

### 修改图片标注 / 添加新照片
编辑 `public/main.js` 中的 `GALLERY_DATA` 对象：

```js
const GALLERY_DATA = {
  moments: [
    { src: 'images/moment-01.jpg', label: '你想要的标注' },
    // 添加更多...
  ],
  artworks: [ ... ],
  writings: [
    { src: 'images/writing-01.jpg', title: '文章标题', meta: '副标题' },
  ],
};
```

### 修改介绍文案
编辑 `public/index.html` 中 `#about` 部分的文字。

---

## 🌐 兼容性

| 平台 | 浏览器 | 状态 |
|------|--------|------|
| iOS | Safari | ✅ |
| Android | Chrome | ✅ |
| 鸿蒙 | 华为浏览器 | ✅ |
| 桌面 | Chrome / Safari / Firefox / Edge | ✅ |

使用纯 HTML + CSS + JavaScript，零依赖，零框架，极速加载。

---

*SENATUS POPULUSQUE · IN AETERNUM*
