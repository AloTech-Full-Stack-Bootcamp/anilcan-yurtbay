const Koa = require('koa');
const router = require('@koa/router')();
const logger = require('koa-logger');
const views = require('koa-views');
const koaBody = require('koa-body');

const path = require('path');
const render = views(path.join(__dirname,'routes'));

const app = new Koa();

app.use(render);
app.use(koaBody());

/// LOGGGER
//Koa.js logger
//app.use(logger());

app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    var date = Date(Date.now());
    console.log(date.toString()+` -  ${ctx.method} ${ctx.url} - ${rt}`);
});
app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});



router.get('/', index)
  .get('/index', index)
  .get('/about', about)
  .get('/contact', contact);

app.use(router.routes());


async function index(ctx) {
    await ctx.render('index');
}
async function about(ctx) {
    await ctx.render('about');
}
async function contact(ctx) {
    await ctx.render('contact');
}


// route edilmemiş sayfalara çıkması için
app.use(async ctx => {
    ctx.body = 'Hello World';
});


app.listen(5000);
