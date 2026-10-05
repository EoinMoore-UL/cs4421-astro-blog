import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { M as createAstro, d as renderComponent, y as renderTemplate } from "./jsx-runtime_CiqTc4Wn.mjs";
import { o as createComponent } from "./consts_DYyGYJ-z.mjs";
import "./compiler_6-Qq9G41.mjs";
import { t as $$BlogPost } from "./BlogPost_BXoypjzq.mjs";
import { n as getEntry, r as render, t as getCollection } from "./_astro_content_N2Jw_js3.mjs";
//#region src/pages/blog/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://example.com");
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const post = await getEntry("blog", Astro.params.slug ?? "");
	if (!post) return Astro.redirect("/404");
	const author = (await getCollection("authors")).find((entry) => entry.id === post.data.author)?.data;
	const { Content } = await render(post);
	return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, {
		...post.data,
		"author": author
	}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, {})}` })}`;
}, "C:/Users/moore/Desktop/ISE/DevOps/Astro/my-astro-blog/src/pages/blog/[...slug].astro", void 0);
var $$file = "C:/Users/moore/Desktop/ISE/DevOps/Astro/my-astro-blog/src/pages/blog/[...slug].astro";
var $$url = "/blog/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
