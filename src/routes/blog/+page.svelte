<script>
	import { posts } from '$lib/posts/index.js';

	const zc = posts.filter(p => p.series === 'Zero Coordinates');
	const build = posts.filter(p => p.series === 'The Build');
</script>

<svelte:head>
	<title>Blog — Kampot Tech Collective</title>
</svelte:head>

<section class="max-w-6xl mx-auto px-6 pt-20 pb-16 border-b border-[#c8bfa8]">
	<p class="font-mono-ktc text-xs tracking-widest uppercase text-[#b8960c] mb-4">Blog</p>
	<h1 class="font-cond text-6xl md:text-7xl leading-none text-[#0e0d0b]">
		Field reports.
	</h1>
</section>

<!-- Zero Coordinates -->
<section class="max-w-6xl mx-auto px-6 py-16 border-b border-[#c8bfa8]">
	<div class="flex items-baseline justify-between mb-10">
		<div>
			<p class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c] mb-1">Series</p>
			<h2 class="font-cond text-3xl text-[#0e0d0b]">Zero Coordinates</h2>
		</div>
		<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#c8bfa8]">
			Philosophy · Second Education
		</span>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each zc as post}
			<a href="/blog/{post.slug}" class="group block border border-[#c8bfa8] p-6 hover:border-[#b8960c] transition-colors">
				<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c] block mb-3">{post.date}</span>
				<h3 class="font-cond text-2xl text-[#0e0d0b] group-hover:text-[#b8960c] transition-colors mb-3">{post.title}</h3>
				<p class="font-serif text-base leading-relaxed text-[#0e0d0b] opacity-70">{post.excerpt}</p>
			</a>
		{/each}
	</div>
</section>

<!-- The Build -->
<section class="max-w-6xl mx-auto px-6 py-16">
	<div class="flex items-baseline justify-between mb-10">
		<div>
			<p class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#c44a1a] mb-1">Series</p>
			<h2 class="font-cond text-3xl text-[#0e0d0b]">The Build</h2>
		</div>
		<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#c8bfa8]">
			Development · Methodology
		</span>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each build as post}
			<a href="/blog/{post.slug}" class="group block border border-[#c8bfa8] p-6 hover:border-[#c44a1a] transition-colors">
				<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#c44a1a] block mb-3">{post.date}</span>
				<h3 class="font-cond text-2xl text-[#0e0d0b] group-hover:text-[#c44a1a] transition-colors mb-3">{post.title}</h3>
				<p class="font-serif text-base leading-relaxed text-[#0e0d0b] opacity-70">{post.excerpt}</p>
			</a>
		{/each}
	</div>
</section>
