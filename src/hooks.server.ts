import type { Handle } from "@sveltejs/kit";

// Ref: https://github.com/sveltejs/kit/issues/3091
export const handle: Handle = async ({ event, resolve }) => {
	const response = await resolve(event, {
		transformPageChunk: ({ html }) =>
			html.replace("%lang%", event.params.lang ?? "en"),
	});

	return response;
};
