const feathers = require('@feathersjs/feathers');
const { Koa, bodyParser } = require('@feathersjs/koa');
const Router = require('@koa/router');

const app = feathers();
const koaApp = new Koa();
koaApp.use(bodyParser());
const router = new Router();

router.post('/echo', async (ctx) => {
  ctx.body = ctx.request.body;
});

koaApp.use(router.routes());
koaApp.use(router.allowedMethods());

app.setup(koaApp);

const port = process.env.PORT || 4000;
koaApp.listen(port, () => {
  console.log(`Feathers app running on localhost:${port}`);
});