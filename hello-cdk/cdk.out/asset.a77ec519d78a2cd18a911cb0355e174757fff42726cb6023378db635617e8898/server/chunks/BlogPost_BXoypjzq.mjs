import { M as createAstro, S as addAttribute, b as maybeRenderHead, d as renderComponent, g as renderSlot, x as renderHead, y as renderTemplate } from "./jsx-runtime_CiqTc4Wn.mjs";
import { o as createComponent } from "./consts_DYyGYJ-z.mjs";
import "./compiler_6-Qq9G41.mjs";
import { a as $$Image } from "./_astro_assets_tcTIVzXz.mjs";
import { n as $$Footer, r as $$BaseHead, t as $$Header } from "./Header_DvX4Uv0-.mjs";
import { t as $$FormattedDate } from "./FormattedDate_Bzd0xQMz.mjs";
//#region src/components/AuthorProfile.astro
createAstro("https://example.com");
var $$AuthorProfile = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$AuthorProfile;
	const { author } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<section class="author-profile" aria-labelledby="author-heading" data-astro-cid-5caizuim>${renderComponent($$result, "Image", $$Image, {
		"class": "avatar",
		"src": author.avatar,
		"width": 96,
		"height": 96,
		"alt": `${author.name}'s avatar`,
		"data-astro-cid-5caizuim": true
	})}<div data-astro-cid-5caizuim><h2 id="author-heading" data-astro-cid-5caizuim>About ${author.name}</h2><p data-astro-cid-5caizuim>${author.bio}</p><nav${addAttribute(`${author.name}'s social links`, "aria-label")} data-astro-cid-5caizuim><ul data-astro-cid-5caizuim>${author.socials.map((social) => renderTemplate`<li data-astro-cid-5caizuim><a${addAttribute(social.url, "href")} rel="me" data-astro-cid-5caizuim>${social.label}</a></li>`)}</ul></nav></div></section>`;
}, "C:/Users/moore/Desktop/ISE/DevOps/Astro/my-astro-blog/src/components/AuthorProfile.astro", void 0);
//#endregion
//#region src/layouts/BlogPost.astro
createAstro("https://example.com");
var $$BlogPost = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogPost;
	const { title, description, pubDate, updatedDate, heroImage, author } = Astro.props;
	return renderTemplate`<html lang="en" data-astro-cid-tldeq5d5><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": title,
		"description": description,
		"data-astro-cid-tldeq5d5": true
	})}${renderHead($$result)}</head><body data-astro-cid-tldeq5d5>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-tldeq5d5": true })}<main data-astro-cid-tldeq5d5><article data-astro-cid-tldeq5d5><div class="hero-image" data-astro-cid-tldeq5d5>${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"width": 1020,
		"height": 510,
		"src": heroImage,
		"alt": "",
		"data-astro-cid-tldeq5d5": true
	})}`}</div><div class="prose" data-astro-cid-tldeq5d5><div class="title" data-astro-cid-tldeq5d5><div class="date" data-astro-cid-tldeq5d5>${renderComponent($$result, "FormattedDate", $$FormattedDate, {
		"date": pubDate,
		"data-astro-cid-tldeq5d5": true
	})}${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-tldeq5d5>Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, {
		"date": updatedDate,
		"data-astro-cid-tldeq5d5": true
	})}</div>`}</div><h1 data-astro-cid-tldeq5d5>${title}</h1><hr data-astro-cid-tldeq5d5></div>${renderSlot($$result, $$slots["default"])}${author && renderTemplate`${renderComponent($$result, "AuthorProfile", $$AuthorProfile, {
		"author": author,
		"data-astro-cid-tldeq5d5": true
	})}`}</div></article></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-tldeq5d5": true })}</body></html>`;
}, "C:/Users/moore/Desktop/ISE/DevOps/Astro/my-astro-blog/src/layouts/BlogPost.astro", void 0);
//#endregion
export { $$BlogPost as t };
