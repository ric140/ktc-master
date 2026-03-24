<script>
	export let data;
	const { post, content: Content } = data;
</script>

<svelte:head>
	<title>{post.title} — Kampot Tech Collective</title>
	<meta name="description" content={post.excerpt} />
</svelte:head>

<!-- Post header -->
<section class="max-w-6xl mx-auto px-6 pt-20 pb-12 border-b border-[#c8bfa8]">
	<a href="/blog" class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#c8bfa8] hover:text-[#b8960c] transition-colors mb-6 inline-block">
		← All Posts
	</a>
	<div class="flex items-center gap-4 mb-6">
		<span class="font-mono-ktc text-[10px] tracking-widest uppercase
			{post.seriesColor === 'gold' ? 'text-[#b8960c]' : 'text-[#c44a1a]'}">
			{post.series}
		</span>
		<span class="font-mono-ktc text-[10px] text-[#c8bfa8]">{post.date}</span>
	</div>
	<h1 class="font-cond text-5xl md:text-6xl leading-tight text-[#0e0d0b] max-w-3xl">
		{post.title}
	</h1>
</section>

<!-- Post content -->
<article class="max-w-2xl mx-auto px-6 py-16 prose prose-lg
	prose-headings:font-cond prose-headings:text-[#0e0d0b]
	prose-p:font-serif prose-p:text-[#0e0d0b] prose-p:leading-relaxed
	prose-a:text-[#b8960c] prose-a:no-underline hover:prose-a:text-[#c44a1a]
	prose-strong:text-[#0e0d0b]
	prose-hr:border-[#c8bfa8]">
	<Content />
</article>

<!-- Nav to next/prev could go here in a future iteration -->
<div class="max-w-6xl mx-auto px-6 pb-16 border-t border-[#c8bfa8] pt-10">
	<a href="/blog" class="font-mono-ktc text-xs tracking-widest uppercase text-[#b8960c] hover:text-[#c44a1a] transition-colors">
		← Back to all posts
	</a>
</div>
