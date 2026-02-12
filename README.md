# 音乐点歌系统

这是一个基于Flask开发的音乐点歌系统，支持学生在线点歌、投票、管理员审核等功能。

## 功能特性

- 在线点歌：学生可以选择年段、班级并提交歌曲
- 投票功能：为喜欢的歌曲投票
- 管理员后台：管理点歌列表、审核歌曲、导出数据等
- 自动审核：使用AI对歌曲进行自动审核
- 文件下载：支持歌曲批量下载
- 公告系统：发布系统公告
- 数据统计：每日点歌统计

## 技术栈

- Python 3.x
- Flask
- Flask-WTF
- Requests
- OpenPyXL
- OpenAI API (DeepSeek)
- HTML/CSS/JS
- APlayer 音乐播放器

## 安装说明

1. 克隆项目到本地：
```bash
git clone <repository-url>
cd music
```

2. 安装依赖：
```bash
pip install flask flask-wtf apscheduler openpyxl openai requests
```

3. 配置环境变量（可选）：
```bash
export SECRET_KEY="your-secret-key"
export DEEPSEEK_API_KEY="your-deepseek-api-key"
```

4. 运行项目：
```bash
python app.py
```

## 使用说明

### 点歌流程

1. 访问网站首页
2. 选择年段和班级
3. 输入姓名和想点的歌曲名称
4. 提交点歌请求

### 管理员功能

- 管理员账号：admin/admin123
- 控制账号：control/lc2025
- 可以审核、删除歌曲
- 可以导出点歌列表为Excel
- 可以批量下载歌曲

## 项目结构

```
music/
├── app.py                 # 主应用文件
├── static/               # 静态资源
│   ├── css/
│   │   ├── APlayer.min.css
│   │   ├── bootstrap.min.css
│   │   └── style.css
│   └── js/
│       ├── APlayer.min.js
│       └── script.js
├── templates/            # 模板文件
│   ├── admin.html
│   ├── admin_announcement.html
│   ├── admin_login.html
│   ├── base.html
│   ├── changelog.html
│   ├── contact.html
│   ├── history.html
│   └── index.html
└── status.py             # 状态管理文件
```

## API 接口

- `/search_songs` - 搜索歌曲
- `/api/daily_stats` - 获取每日统计数据
- `/api/announcement` - 获取公告信息
- `/vote/<int:song_id>` - 为歌曲投票

## 许可证

MIT License

Copyright (c) 2025 zh_mc

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
