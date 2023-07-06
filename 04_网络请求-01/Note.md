# 知识点

## `react` 中网络请求

`axios`

> 解决跨域问题

1. 在 `package.json` 文件中配置 `proxy`(适用于配置一个代理地址)

```js
proxy: "需要代理到的服务器地址";
```

2. 通过在 src 根目录添加 setupProxy.js 文件

```js
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/api1", {
      // api1是需要转发的请求(所有带有/api1前缀的请求都会转发给5000)
      target: "http://localhost:5000",
      changeOrigin: true, // 修改服务器请求头中url是target
      pathRewrite: { "^/api1": "" }, // 匹配请求路径中这个字符，替换掉
    }),
    createProxyMiddleware("/api2", {
      target: "http://localhost:5001",
      changeOrigin: true,
      pathRewrite: { "^/api2": "" },
    })
  );
};
```
