/**
 * 小程序配置文件
 */

// 此处主机域名修改成腾讯云解决方案分配的域名
var host = 'https://123456.qcloud.la';

var config = {

    // 下面的地址配合云端 Demo 工作
    service: {
        host,

        // 登录地址，用于建立会话
        loginUrl: `${host}/weapp/login`,

        // 测试的请求地址，用于测试会话
        requestUrl: `${host}/weapp/user`,

        // 测试的信道服务地址
        tunnelUrl: `${host}/weapp/tunnel`,

        // 上传图片接口
        uploadUrl: `${host}/weapp/upload`,
      // 增加
      todoAddUrl: `${host}/weapp/todoAdd`,
      // 查询
      todolistUrl: `${host}/weapp/todolist`,
      // 修改
      todoEditUrl: `${host}/weapp/todoEdit`,
      // 删除
      todoDelUrl: `${host}/weapp/todoDel`,
    }
};

module.exports = config;
