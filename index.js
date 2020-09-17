const koa = require('koa');
const route = require('koa-route');
const logger = require('koa-logger');
const serp = require('node-serp');

const app = new koa();

app.use(logger());

// API Endpoints
app.use(route.get('/api/search', async (ctx) => {
	// Todo use all params
	if (typeof ctx.query.search === 'undefined') {
		ctx.response.body = {error:'Search parameter must be provided'};
		return;
	}

	ctx.response.body = await serp(ctx.query.search);
}));

app.use(route.get('/api/position/domain', async (ctx) => {
	// Todo: find first page of given domain
	// params: domain, limit, location, mobile
}));

app.use(route.get('/api/position/page', async (ctx) => {
	// Todo: find position of given page
	// params: page, limit, location, mobile
}));

app.listen(80);
console.log('API Client started');