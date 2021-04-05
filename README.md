---

---

# 客户生命周期管理系统

`git clone`仓库到本地，你将会得到一个`system`文件夹

***console_static***客服控制台（`Vue2`）

***chat_admins***客服工作台（`Vue2`）

***chat_client***客户聊天页（`Vue3+Vite`）

***server***`Nodejs`后台（`Express`）

#### 项目启动：

1. 分别进入`console_static、chat_admins、chat_client、server`文件中，命令行输入`yarn`安装项目依赖

2. 将`mysql`文件夹中的`service_info.sql、chat_info.sql、service_config.sql`表导入您的数据库中，并进入到`server>database>dbConfig.js`中修改个人数据库信息 （如下图） ,分别将`user，password,database`字段值更改为自己的数据库账号，密码，和数据库名。

3. 然后在***server***文件夹下打开`cmd`运行**yarn start**或者`node app.js`既可开启`node`后台

   [![c9cD8U.png](https://z3.ax1x.com/2021/03/29/c9cD8U.png)](https://imgtu.com/i/c9cD8U)

   [![c9cr2F.png](https://z3.ax1x.com/2021/03/29/c9cr2F.png)](https://imgtu.com/i/c9cr2F)

4. 进入到***console_static***文件夹中，命令行输入**yarn serve**启动项目控制台部分

5. 进入到***chat_admins***文件夹中，命令行输入**yarn serve**启动项目工作台部分

6. 进入到***chat_client***文件夹中，命令行输入**yarn dev**启动项目客户聊天页部分

`eg： /node_modules/sockjs-client/dist/sockjs.js   1606   // self.xhr.send(payload) `

聊天内容加载不出来清理缓存即可



