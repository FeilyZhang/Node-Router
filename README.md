# Node-Router
Node.js后端路由框架
## 项目目录结构
```
|- lib  //库文件夹，存放传递了req, res形参的js文件，其中handle.js为核心模块，其余自定义，核心模块按需求修改即可
|- router  //路由功能的文件夹，其中router.js为核心模块
|- src  //静态文件夹，存放静态资源
|- tools  //工具文件夹，存放未传递req, res形参的js文件
|- server.js  //http服务器的入口文件
|- config.json  //配置文件，提供url到func的映射
```
## 用法
shell下cd至项目根路经，键入如下命令即可
```
node server.js
```
## 配置文件规则
配置文件为标准的json格式，各字段内容如下
```
{
  "map1" : {
    "url" : "/路径",
    "func" : "对应的传递了req, res形参的函数",
    "method" : "请求方法",
    "des" : "相关描述(非必须)"
  },
  "map2" : {
    "url" : "/url12",
    "func" : "fun",
    "method" : "get/pos2",
    "des" : "des1112"
  }
}
```
