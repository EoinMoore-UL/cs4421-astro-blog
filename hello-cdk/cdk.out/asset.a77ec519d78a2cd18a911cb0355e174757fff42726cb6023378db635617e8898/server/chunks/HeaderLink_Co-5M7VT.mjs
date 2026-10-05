import { M as createAstro, S as addAttribute, b as maybeRenderHead, g as renderSlot, i as spreadAttributes, y as renderTemplate } from "./jsx-runtime_CiqTc4Wn.mjs";
import { o as createComponent } from "./consts_DYyGYJ-z.mjs";
import "./compiler_6-Qq9G41.mjs";
//#region src/components/HeaderLink.astro
createAstro("https://example.com");
var $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$HeaderLink;
	const { href, class: className, ...props } = Astro2.props;
	const pathname = Astro2.url.pathname.replace("/", "");
	const subpath = pathname.match(/[^\/]+/g);
	const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-evkijfd6>${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/moore/Desktop/ISE/DevOps/Astro/my-astro-blog/src/components/HeaderLink.astro", void 0);
//#endregion
export { $$HeaderLink as t };
