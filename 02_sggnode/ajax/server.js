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

// 延时响应
app.get('/delay', (request, response)=> {
    // 设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    // 设置响应体
    setTimeout(() => {
        response.send('延时响应');
    },3000)
})
// jquery服务
app.all('/jQuery-server', (request, response)=> {
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
//axios 服务
app.all('/axios-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
})

//fetch 服务
app.all('/fetch-server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Headers', '*');
    const data = {name:'尚硅谷'};
    response.send(JSON.stringify(data));
})

//jsonp服务
app.all('/jsonp-server',(request, response) => {
    // response.send('hello jsonp'); // 报错
    // response.send('console.log("hello jsonp")');
    const data = {
        name: '尚硅谷atguigu'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    // 注意handle函数要提前定义
    response.end(`handle(${str})`);
});

//用户名检测是否存在
app.all('/check-username',(request, response) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //返回结果
    response.end(`handle(${str})`);
});

// jquery-jsonp
app.all('/jquery-jsonp-server',(request, response) => {
    const data = {
        name:'尚硅谷',
        city: ['北京','上海','深圳']
    };
    //将数据转化为字符串
    let str = JSON.stringify(data);
    //接收 callback 参数
    let cb = request.query.callback;

    //返回结果
    response.end(`${cb}(${str})`);
});

// cors
app.all('/cors-server', (request, response)=>{
    //设置响应头
    // 跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    // 可以自定义响应头
    response.setHeader("Access-Control-Allow-Headers", '*');
    // 允许所有类型请求方法
    response.setHeader("Access-Control-Allow-Method", '*');
    // response.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
    response.send('hello CORS');
});


// 4. 监听端口启动服务
app.listen(8000, ()=> {
    console.log("服务已启动，8000 端口监听中....");
})
