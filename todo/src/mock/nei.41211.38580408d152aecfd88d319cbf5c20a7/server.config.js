/*
 * config file for nei server command
 * @author 
 * Auto build by NEI Builder
 */
var path = require('path');
module.exports = {
    /* 根目录 */
    webRoot: '',
    /* 视图目录 */
    viewRoot: '',
    /* 路由 */
    routes: {
        //"ALL /api/*": "代理所有接口, 这里输入代理服务器地址",
        "GET /api/user/pages": { path: 'get/api/user/pages/data', id: 187343, group: '用户' },
        "POST /api/user/in": { path: 'post/api/user/in/data', id: 186213, group: '登录' },
        "DELETE /api/user": { path: 'delete/api/user/data', id: 187342, group: '用户' },
        "GET /api/user": { path: 'get/api/user/data', id: 187341, group: '用户' },
        "POST /api/user": { path: 'post/api/user/data', id: 187340, group: '用户' },
        "DELETE /api/task/done": { path: 'delete/api/task/done/data', id: 186343, group: '待办' },
        "PUT /api/task/all": { path: 'put/api/task/all/data', id: 186344, group: '待办' },
        "POST /api/task": { path: 'post/api/task/data', id: 186218, group: '待办' },
        "PUT /api/task": { path: 'put/api/task/data', id: 186341, group: '待办' },
        "DELETE /api/task": { path: 'delete/api/task/data', id: 186340, group: '待办' },
        "GET /api/task": { path: 'get/api/task/data', id: 186219, group: '待办' },
    },
    /* 注入给页面的模型数据的服务器配置 */
    // modelServer: {
    //     // 完整的主机地址，包括协议、主机名、端口
    //     host: '',
    //     // 查询参数，键值对
    //     queries: {},
    //     // 自定义请求头，键值对
    //     headers: {},
    //     // path 可以是字符串，也可以是函数；默认不用传，即使用 host + 页面path + queries 的值
    //     // 如果是函数，则使用函数的返回值，传给函数的参数 options 是一个对象，它包含 host、path（页面path）、queries、headers 等参数
    //     // 如果 path 的值为假值，则使用 host + 页面path + queries 的值；
    //     // 如果 path 的值是相对地址，则会在前面加上 host
    //     // path: '',
    // },
    /* api 响应头 */
    apiResHeaders: {
    },
    /* 是否自动打开浏览器 */
    launch: true,
    /* 自动打开的页面地址 */
    openUrl: '',
    /* 端口 */
    port: 8002,
    /* 是否使用 https 协议，设为true的时候表示启用 */
    https: false,
    /* 是否使用 nei 提供的在线 mock 数据 */
    online: false,
    /* 是否监听静态文件和模板文件的变化并自动刷新浏览器 */
    reload: true,
    /* 文件监听的选项 */
    watchingFiles: {
        /* 需要即时编译的文件, 前提是 reload 为 true */
        compilers: {
            /* 值为 mcss 的配置选项, 默认为 false，即不编译 mcss 文件 */
            mcss: false
        },
        /* 不用监听的文件，支持通配符 */
        //ignored: '**/*.css'
    },
    /* 项目的 key */
    projectKey: '38580408d152aecfd88d319cbf5c20a7',
    /* 同步模块mock数据路径 */
    mockTpl: '',
    /* 异步接口mock数据路径 */
    mockApi: 'H:/codes/Todo/todo/src/mock/mock_json_data/',
    /* 是否修改代理的host */
    changeOrigin: true,
    /* 模板后缀 */
    viewExt: '.ejs',
    /* 模板引擎 */
    engine: 'ejs',
    /* 打开下面的 fmpp 配置，可以在模板中调用自定义 jar 包中的类 */
    //fmpp: {
    //    /* 存放自定义 jar 的目录, 绝对路径 */
    //    jarDir: '',
    //    /* 暴露给模板的类实例名称和 jar 中的类名(带包名)的对应关系 */
    //    jarConfig: {
    //        [暴露给模板的类实例名称]: [类名] // 比如: HighlightUtil: 'yueduutil.HighlightUtil'
    //    }
    //}
};