import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { t as getCollection } from "./_astro_content_N2Jw_js3.mjs";
//#region src/pages/api/blog/posts.ts
var posts_exports = /* @__PURE__ */ __exportAll({
	GET: () => GET,
	prerender: () => false
});
async function GET() {
	const posts = (await getCollection("blog")).map((post) => ({
		id: post.id,
		title: post.data.title,
		pubDate: post.data.pubDate.toISOString()
	}));
	return new Response(JSON.stringify(posts), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/blog/posts@_@ts
var page = () => posts_exports;
//#endregion
export { page };
