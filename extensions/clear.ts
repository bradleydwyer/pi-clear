import type { ExtensionAPI } from "@earendil-works/pi-coding-agent";

// /clear is an alias for the built-in /new.
export default function clearAlias(pi: ExtensionAPI) {
	pi.registerCommand("clear", {
		description: "Start a new session (alias of /new)",
		handler: async (_args, ctx) => {
			await ctx.newSession();
		},
	});
}
