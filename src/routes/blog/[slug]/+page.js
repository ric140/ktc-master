import { posts } from '$lib/posts/index.js';
import { error } from '@sveltejs/kit';

export async function load({ params }) {
	const post = posts.find(p => p.slug === params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	try {
		const content = await import(`../../../lib/posts/${post.file}.md`);
		return {
			post,
			content: content.default,
		};
	} catch (e) {
		throw error(404, 'Post content not found');
	}
}
