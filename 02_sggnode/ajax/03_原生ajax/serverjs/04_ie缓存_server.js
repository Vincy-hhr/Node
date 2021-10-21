// 1. 引入express
const express = require('express');

// 2. 创建应用对象
const app = express();

// 3. 创建路由规则  get   请求方法在服务端要有对应的路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/server', (request, response)=> {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello AJAX');
})

app.all('/server', (request, response)=> {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头  允许设置请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 设置响应体
    response.send('Hello AJAX POST');
})

// JSON响应
app.all('/json-server', (request, response)=> {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应头  允许设置请求头
    response.setHeader('Access-Control-Allow-Headers', '*');
    // 响应一个数据
    const data = {
        uname: 'atsguigu'
    }
    // 对对象进行字符串转化
    let str = JSON.stringify(data)
    // 设置响应体
    response.send(str);
})

// 针对ie缓存问题
app.get('/ie', (request, response)=> {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    response.send('Hello IE - 8');
})






// 4. 监听端口启动服务
app.listen(8000, ()=> {
    console.log("服务已启动，8000 端口监听中....");
})

