# ublog-f

## install

` npm install `

## dev

### linux Mac

` MODULE=name npm run dev `

## build

### linux Mac

` MODULE=name npm run build ` 该命令将预先利用glup将静态代码构建

> 以上命令中的 `name` 为 `src/modules` 下模块的名, 如果要一次构建 `modules` 下所有模块,请将 `name` 改为 `all`. 本命令后面添加 ` --analyze ` 可以显示详细的 chunk 分析报告.

## command

` npm run mocker ` 开启api模拟服务器

` MODULE=name npm run dm ` 同时开启dev和api模拟服务器

` npm run lintjs ` 检查 js 语法, 命令后面加上 `-- --fix` 自动修复

` npm run lintcss ` 检查 css 语法, 命令后面加上 `-- --fix` 自动修复

` npm run lint ` 同时检查以上两种

` npm run static ` 构建静态资源

` npm run devless ` development 下构建并 watch static(非vue部分) 资源里的 less

` npm run clean ` 清除所有 build 出来的文件

> 暂不支持 Windows 系统

## change background
* ` shift + c` 切换背景壁纸(2s 内多次切换只有一次有效),
* console 运行 `setAutoBg(间隔毫秒数)` 可自动切换壁纸.
* console 运行 `setBgChangeMode('random' 或 'order')` 可以改变背景切换模式为随机或按顺序 (默认为 `random`)

