/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run `wrangler dev src/index.ts` in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run `wrangler publish src/index.ts --name my-worker` to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const fetchHandler: ExportedHandlerFetchHandler<Environment> = (
	_request,
	_environment,
	_context
) => {
	return new Response('Hello world!');
};

const worker = {
	fetch: fetchHandler,
} as ExportedHandler<Environment>;

export default worker;
