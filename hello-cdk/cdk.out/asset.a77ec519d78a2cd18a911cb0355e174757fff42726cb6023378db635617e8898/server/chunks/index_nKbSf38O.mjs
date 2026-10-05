import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { C as createRenderInstruction, S as addAttribute, d as renderComponent, x as renderHead, y as renderTemplate } from "./jsx-runtime_CiqTc4Wn.mjs";
import { o as createComponent } from "./consts_DYyGYJ-z.mjs";
import "./compiler_6-Qq9G41.mjs";
import { a as $$Image } from "./_astro_assets_tcTIVzXz.mjs";
import { n as $$Footer, r as $$BaseHead, t as $$Header } from "./Header_DvX4Uv0-.mjs";
import { n as SITE_TITLE, t as SITE_DESCRIPTION } from "./consts_kQkbns8j.mjs";
import { t as $$FormattedDate } from "./FormattedDate_Bzd0xQMz.mjs";
import { t as getCollection } from "./_astro_content_N2Jw_js3.mjs";
//#region node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	return renderTemplate`<html lang="en" data-astro-cid-x255k2k2><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION,
		"data-astro-cid-x255k2k2": true
	})}${renderHead($$result)}</head><body data-astro-cid-x255k2k2>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-x255k2k2": true })}<main data-astro-cid-x255k2k2><form class="new-post-form" id="new-post-form" data-astro-cid-x255k2k2><button type="button" id="new-post-button" data-astro-cid-x255k2k2>New Post</button></form><dialog id="new-post-dialog" aria-labelledby="new-post-dialog-title" data-astro-cid-x255k2k2><h2 id="new-post-dialog-title" data-astro-cid-x255k2k2>Create a new post?</h2><p data-astro-cid-x255k2k2>Enter a title and description for the new blog post.</p><div class="new-post-field" data-astro-cid-x255k2k2><label for="new-post-title" data-astro-cid-x255k2k2>Title</label><input id="new-post-title" name="title" type="text" required data-astro-cid-x255k2k2></div><div class="new-post-field" data-astro-cid-x255k2k2><label for="new-post-description" data-astro-cid-x255k2k2>Description</label><textarea id="new-post-description" name="description" required data-astro-cid-x255k2k2></textarea></div><div class="confirmation-actions" data-astro-cid-x255k2k2><button type="button" id="cancel-new-post" data-astro-cid-x255k2k2>Cancel</button><button type="button" class="confirm-button" id="confirm-new-post" disabled data-astro-cid-x255k2k2>Confirm</button></div></dialog><dialog id="post-content-dialog" aria-labelledby="post-content-dialog-title" data-astro-cid-x255k2k2><h2 id="post-content-dialog-title" data-astro-cid-x255k2k2>Write your post</h2><p data-astro-cid-x255k2k2>Enter the text for your new blog post.</p><div class="new-post-field" data-astro-cid-x255k2k2><label for="post-content" data-astro-cid-x255k2k2>Blog content</label><textarea id="post-content" class="post-content-textarea" required data-astro-cid-x255k2k2></textarea></div><div class="confirmation-actions" data-astro-cid-x255k2k2><button type="button" id="cancel-post-content" data-astro-cid-x255k2k2>Cancel</button><button type="button" class="confirm-button" id="confirm-post-content" disabled data-astro-cid-x255k2k2>Confirm</button></div></dialog><section data-astro-cid-x255k2k2><ul data-astro-cid-x255k2k2>${posts.map((post) => renderTemplate`<li${addAttribute(post.id, "data-post-id")} data-astro-cid-x255k2k2><a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-x255k2k2>${post.data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"width": 720,
		"height": 360,
		"src": post.data.heroImage,
		"alt": "",
		"data-astro-cid-x255k2k2": true
	})}`}<h4 class="title" data-astro-cid-x255k2k2>${post.data.title}</h4><p class="date" data-astro-cid-x255k2k2>${renderComponent($$result, "FormattedDate", $$FormattedDate, {
		"date": post.data.pubDate,
		"data-astro-cid-x255k2k2": true
	})}</p></a></li>`)}</ul></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-x255k2k2": true })}${renderScript($$result, "C:/Users/moore/Desktop/ISE/DevOps/Astro/my-astro-blog/src/pages/blog/index.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "C:/Users/moore/Desktop/ISE/DevOps/Astro/my-astro-blog/src/pages/blog/index.astro", void 0);
var $$file = "C:/Users/moore/Desktop/ISE/DevOps/Astro/my-astro-blog/src/pages/blog/index.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };
