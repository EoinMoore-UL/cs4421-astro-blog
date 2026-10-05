import { t as __exportAll } from "./rolldown-runtime_D7D4PA-g.mjs";
import { promises } from "node:fs";
import path from "node:path";
//#region src/pages/api/blog/new.ts
var new_exports = /* @__PURE__ */ __exportAll({
	POST: () => POST,
	prerender: () => false
});
async function POST({ request }) {
	const sourcePath = path.join(process.cwd(), "src/content/blog/first-post.md");
	const fileText = await promises.readFile(sourcePath, "utf-8");
	const body = await request.json();
	const title = typeof body.title === "string" ? body.title.trim() : "";
	const description = typeof body.description === "string" ? body.description.trim() : "";
	const content = typeof body.content === "string" ? body.content.trim() : "";
	if (!title || !description || !content) return new Response(JSON.stringify({ error: "Title, description, and content are required." }), {
		status: 400,
		headers: { "Content-Type": "application/json" }
	});
	const baseSlug = `aaa-${title.normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9]+/g, "-").replace(/^-+|-+$/g, "").toLowerCase() || "new-post"}`;
	let slug = baseSlug;
	let destinationPath = path.join(process.cwd(), `src/content/blog/${slug}.md`);
	try {
		await promises.access(destinationPath);
		slug = `${baseSlug}-${Date.now()}`;
		destinationPath = path.join(process.cwd(), `src/content/blog/${slug}.md`);
	} catch {}
	const frontmatter = fileText.match(/^---[\s\S]*?^---/m)?.[0];
	if (!frontmatter) return new Response(JSON.stringify({ error: "The source post has invalid frontmatter." }), {
		status: 500,
		headers: { "Content-Type": "application/json" }
	});
	const newContent = `${frontmatter.replace(/title:\s*'[^']*'/, `title: ${JSON.stringify(title)}`).replace(/description:\s*'[^']*'/, `description: ${JSON.stringify(description)}`).replace(/pubDate:\s*'[^']*'/, `pubDate: '${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}'`)}\n\n${content}\n`;
	await promises.writeFile(destinationPath, newContent, "utf-8");
	return new Response(JSON.stringify({
		success: true,
		slug
	}), {
		status: 200,
		headers: { "Content-Type": "application/json" }
	});
}
//#endregion
//#region \0virtual:astro:page:src/pages/api/blog/new@_@ts
var page = () => new_exports;
//#endregion
export { page };
