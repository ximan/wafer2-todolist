# 微信小程序 Wafer2 Todolist

本项目是下载官方[wafer2-quickstart-nodejs](https://github.com/tencentyun/wafer2-quickstart-nodejs)后，在此基础上增加代码，完成Todolist。

目的是为了学习微信小程序连接腾讯云、nodejs MVC、knex.js等偏后端技术，达到一个人完成微信小程序前后端。

本项目代码涉及到微信小程序基础，如果你熟悉Vue.js，相信看起来很轻松。

注：下载wafer2-quickstart-nodejs后，按照官方教程操作，能在微信开发者工具模拟器点击【登录】显示登录成功为止。

## 数据库新建表

在腾讯云开发环境，进入phpMyAdmin，登录。

点开cAuth数据库签名的加号，第一个“新建”，数据表名：Todolist。

字段1，id，int，长度100，A_I勾选中，弹窗点“执行”。

字段2，name，varchar，长度100。

字段3，complete，boolean，长度100。

Collation选utf8mb4_unicode_ci。

其他不管，点右下角“保存”。这样数据库就搞定了。

## 增加

新建 server/controllers/todoAdd.js，粘贴我的代码。

在 server/router/index.js倒数第三排，增加 router.post('/todoAdd', controllers.todoAdd)

点击编辑器右上角“腾讯云”，上传测试代码，默认智能上传，点“确认”。

在 client/config.js 25行，接着service对象里面加todoAddUrl:  `` `${host}/weapp/todoAdd` ``，因为是对象，注意附近的逗号。

在 client/pages/index/index.wxml，最下面复制有<!-- 增加 -->注释的代码。

在 client/pages/index/index.wxss，最下面复制有/* 增加 */注释的代码。

在 client/pages/index/index.js，最下面复制有// 获取文本框值 // 增加 两段注释的代码。记得把请求成功里的me.getTodolist();代码注释掉，因为目前还没有查询。在最上面data对象里，加inputValue: ''，储存文本框里的值。

试试在文本框内输入内容，点“增加”，编辑器控制台console.log OK，phpMyAdmin里增加一条数据，增加完成。

## 查询

新建 server/controllers/todolist.js，粘贴我的代码。

在 server/router/index.js倒数第三排，增加 router.get('/todolist', controllers.todolist)

点击编辑器右上角“腾讯云”，上传测试代码，默认智能上传，点“确认”。

在 client/config.js，接着service对象里面加todolistUrl: `` `${host}/weapp/todolist` ``，因为是对象，注意附近的逗号。

在 client/pages/index/index.wxml，最下面复制有<!-- 查询 -->注释的代码。

在 client/pages/index/index.wxss，最下面复制有/* 查询 */注释的代码。

在 client/pages/index/index.js，最下面复制有// 查询 // 生命周期函数--监听页面加载 两段注释的代码。记得把刚刚注释的me.getTodolist();代码取消注释，正常执行。在最上面data对象里，加listData: []，储存查询到的值。

这个时候刷新模拟器，增加文本框下面应该出现了刚刚新增的数据，查询完成。

## 修改

新建 server/controllers/todoEdit.js，粘贴我的代码。

在 server/router/index.js倒数第三排，增加 router.post('/todoEdit', controllers.todoEdit)

点击编辑器右上角“腾讯云”，上传测试代码，默认智能上传，点“确认”。

在 client/config.js，接着service对象里面加todoEditUrl: `` `${host}/weapp/todoEdit` ``，因为是对象，注意附近的逗号。

在 client/pages/index/index.js，最下面复制有// 修改 注释的代码。

试试点击页面里“完成”按钮，按钮会变成“取消”，且前面的文字加删除线，修改完成。

## 删除

新建 server/controllers/todoDel.js，粘贴我的代码。

在 server/router/index.js倒数第三排，增加 router.post('/todoDel', controllers.todoDel)

点击编辑器右上角“腾讯云”，上传测试代码，默认智能上传，点“确认”。

在 client/config.js，接着service对象里面加todoDelUrl: `` `${host}/weapp/todoDel` ``，因为是对象，注意附近的逗号。

在 client/pages/index/index.js，最下面复制有// 删除 注释的代码。

试试点击页面里“删除”，当前任务会被删除，删除完成。

-----

到此为止，一个基于Wafer2的微信小程序版Todolist就完成了，希望本项目对你有用。