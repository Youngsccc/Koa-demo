// const http = require("http");

// http.createServer((req, res) => {
//     res.writeHead(200);
//     res.end("Hello World");
// }).listen(9099, () => {
//     console.log("Server Start");
// })

const Koa = require("./application");

const app = new Koa();

// app.use((req, res) => {
//     res.writeHead(200);
//     res.end("Hello Koa");
// })

app.use(async ctx => {
    ctx.body = 'hello Koa ' + ctx.url;
})

app.listen(9099, () => {
    console.log("Server running")
})