<script>
	const products = [
		{
			slug: 'real-estate-suite',
			label: 'Real Estate Suite',
			tag: 'Property Intelligence',
			status: 'Live',
			description: 'End-to-end property platform built for Cambodia\'s informal market. Public discovery, agent management, AI toolkit, CRM pipeline.',
		},
		{
			slug: 'archimedes-standard',
			label: 'Archimedes Standard',
			tag: 'AI Board of Directors',
			status: 'Live',
			description: 'Five-persona AI board with Socratic reasoning, live voice, CIA validation layer, and eight output frameworks.',
		},
		{
			slug: 'archimedes-founder',
			label: 'Archimedes Founder Startup',
			tag: 'First-Session Founders',
			status: 'Live',
			description: 'Four-phase Socratic flow from Discovery to Execution. Voice input, PDF export. Designed for founders who have never built before.',
		},
		{
			slug: 'agent-pro',
			label: 'Agent-Pro',
			tag: 'Multi-Agent Intelligence',
			status: 'Live',
			description: 'Three-agent council — Opportunity Hunter, Architect, PA — on a shared intelligence layer. SvelteKit + IndexedDB.',
		},
	];
</script>

<svelte:head>
	<title>Kampot Tech Collective</title>
	<meta name="description" content="Cambodia-first AI application developer. Building tools for the operational realities of the local market." />
</svelte:head>

<!-- Hero -->
<section class="max-w-6xl mx-auto px-6 pt-20 pb-16 border-b border-[#c8bfa8]">
	<div class="max-w-3xl">
		<p class="font-mono-ktc text-xs tracking-widest uppercase text-[#b8960c] mb-4">
			Kampot · Cambodia · Est. 2025
		</p>
		<h1 class="font-cond text-6xl md:text-8xl leading-none text-[#0e0d0b] mb-8">
			Built on the<br />frontier.
		</h1>
		<p class="font-serif text-xl md:text-2xl leading-relaxed text-[#0e0d0b] max-w-2xl mb-10">
			Kampot Tech Collective engineers AI applications for markets where inherited frameworks have already failed.
			Cambodia-first. Production-ready. Field-tested.
		</p>
		<div class="flex flex-col sm:flex-row gap-4">
			<a href="/products" class="inline-block font-mono-ktc text-xs tracking-widest uppercase px-6 py-3 bg-[#0e0d0b] text-[#f4f0e8] hover:bg-[#b8960c] transition-colors">
				View Products
			</a>
			<a href="/contact" class="inline-block font-mono-ktc text-xs tracking-widest uppercase px-6 py-3 border border-[#0e0d0b] text-[#0e0d0b] hover:border-[#b8960c] hover:text-[#b8960c] transition-colors">
				Get in Touch
			</a>
		</div>
	</div>
</section>

<!-- Products -->
<section class="max-w-6xl mx-auto px-6 py-16 border-b border-[#c8bfa8]">
	<div class="flex items-baseline justify-between mb-10">
		<h2 class="font-cond text-4xl text-[#0e0d0b]">Products</h2>
		<a href="/products" class="font-mono-ktc text-xs tracking-widest uppercase text-[#b8960c] hover:text-[#c44a1a] transition-colors">
			All Products →
		</a>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
		{#each products as p}
			<a href="/products/{p.slug}" class="group block border border-[#c8bfa8] p-6 hover:border-[#b8960c] transition-colors bg-[#f4f0e8]">
				<div class="flex items-start justify-between mb-3">
					<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c]">{p.tag}</span>
					<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#c44a1a]">{p.status}</span>
				</div>
				<h3 class="font-cond text-2xl text-[#0e0d0b] mb-3 group-hover:text-[#b8960c] transition-colors">{p.label}</h3>
				<p class="font-serif text-base leading-relaxed text-[#0e0d0b] opacity-80">{p.description}</p>
			</a>
		{/each}
	</div>
</section>

<!-- Positioning statement -->
<section class="max-w-6xl mx-auto px-6 py-16 border-b border-[#c8bfa8]">
	<div class="max-w-3xl">
		<p class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c] mb-6">The Moat</p>
		<blockquote class="font-cond text-3xl md:text-4xl leading-snug text-[#0e0d0b] border-l-2 border-[#b8960c] pl-6">
			The estimated number of individuals in Cambodia who could replicate this output — 50+ production applications, 3 commercial products, proprietary methodology — starting from zero experience is zero.
		</blockquote>
		<p class="font-serif text-lg text-[#0e0d0b] mt-6 opacity-80">
			The moat is not the code. It is the compounding sequence of failure, adaptation, and methodology extraction that cannot be shortcut.
		</p>
	</div>
</section>

<!-- Blog preview -->
<section class="max-w-6xl mx-auto px-6 py-16">
	<div class="flex items-baseline justify-between mb-10">
		<h2 class="font-cond text-4xl text-[#0e0d0b]">From the Field</h2>
		<a href="/blog" class="font-mono-ktc text-xs tracking-widest uppercase text-[#b8960c] hover:text-[#c44a1a] transition-colors">
			All Posts →
		</a>
	</div>
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
		<a href="/blog/the-second-education" class="group block border border-[#c8bfa8] p-6 hover:border-[#b8960c] transition-colors">
			<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c] block mb-3">Zero Coordinates</span>
			<h3 class="font-cond text-xl text-[#0e0d0b] group-hover:text-[#b8960c] transition-colors mb-2">The Second Education</h3>
			<p class="font-serif text-sm leading-relaxed text-[#0e0d0b] opacity-70">A map of the operating system that surfaces whenever someone builds in conditions where inherited frameworks have already failed them.</p>
		</a>
		<a href="/blog/getting-arrested-or-killed" class="group block border border-[#c8bfa8] p-6 hover:border-[#b8960c] transition-colors">
			<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c] block mb-3">Zero Coordinates</span>
			<h3 class="font-cond text-xl text-[#0e0d0b] group-hover:text-[#b8960c] transition-colors mb-2">Getting Arrested or Killed</h3>
			<p class="font-serif text-sm leading-relaxed text-[#0e0d0b] opacity-70">Three men. Three centuries. Three completely different environments. Same ten commandments.</p>
		</a>
		<a href="/blog/the-ignition" class="group block border border-[#c8bfa8] p-6 hover:border-[#b8960c] transition-colors">
			<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#c44a1a] block mb-3">The Build</span>
			<h3 class="font-cond text-xl text-[#0e0d0b] group-hover:text-[#b8960c] transition-colors mb-2">The Ignition</h3>
			<p class="font-serif text-sm leading-relaxed text-[#0e0d0b] opacity-70">Three months ago, my coding knowledge was zero. Today I've engineered and deployed over fifty full-stack applications.</p>
		</a>
	</div>
</section>
