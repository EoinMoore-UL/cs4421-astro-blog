import { M as createAstro, S as addAttribute, b as maybeRenderHead, y as renderTemplate } from "./jsx-runtime_CiqTc4Wn.mjs";
import { o as createComponent } from "./consts_DYyGYJ-z.mjs";
import "./compiler_6-Qq9G41.mjs";
//#region src/components/FormattedDate.astro
createAstro("https://example.com");
var $$FormattedDate = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$FormattedDate;
	const { date } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<time${addAttribute(date.toISOString(), "datetime")}>${date.toLocaleDateString("en-us", {
		year: "numeric",
		month: "short",
		day: "numeric"
	})}</time>`;
}, "C:/Users/moore/Desktop/ISE/DevOps/Astro/my-astro-blog/src/components/FormattedDate.astro", void 0);
//#endregion
export { $$FormattedDate as t };
