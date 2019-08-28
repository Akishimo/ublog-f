# ublog-f

## install

` npm install `

## dev

### win

` npm run dev -- --MODULE=name`

### linux Mac

` MODULE=name npm run dev `

## build

### win

` npm run build -- --MODULE=name `

### linux Mac

` MODULE=name npm run build `

> 以上命令中的 `name` 为 `src/modules` 下模块的名, 如果要一次构建 `modules` 下所有模块,请将 `name` 改为 `all`

## command

` npm run mocker ` 开启api模拟服务器

` MODULE=name npm run dm ` 同时开启dev和api模拟服务器

` npm run lintjs ` 检查 js 语法, 命令后面加上 `-- --fix` 自动修复

` npm run lintcss ` 检查 css 语法, 命令后面加上 `-- --fix` 自动修复

` npm run lint ` 同时检查以上两种