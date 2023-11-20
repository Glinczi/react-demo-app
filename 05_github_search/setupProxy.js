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
