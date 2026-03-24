<script>
	const products = [
		{
			slug: 'real-estate-suite',
			label: 'Real Estate Suite',
			tag: 'Property Intelligence',
			status: 'Live',
			stack: 'SvelteKit · Supabase · Tailwind · Node.js',
			description: 'End-to-end property platform built for Cambodia\'s informal real estate market. Public-facing discovery site, agent-facing management app, AI toolkit, and CRM pipeline.',
			features: [
				'Advanced property filtering and search',
				'Agent listing management with AI importer',
				'Khmer language translation pipeline',
				'Media management and photo upload',
				'Multi-agent CRM pipeline',
				'AI marketing copy generation',
			],
			revenue: ['Agency license (one-time)', 'SaaS subscription', 'White-label per market', 'Integration partner'],
		},
		{
			slug: 'archimedes-standard',
			label: 'Archimedes Standard',
			tag: 'AI Board of Directors',
			status: 'Live',
			stack: 'React 19 · Gemini · Supabase · Tailwind',
			description: 'Five-persona AI board with full Socratic reasoning engine, CIA validation layer, live voice capability, and eight validated output frameworks.',
			features: [
				'Five AI board personas with distinct reasoning styles',
				'CIA validation layer — GROUNDED / INFERRED / VALIDATION_GAP',
				'Live voice input and output',
				'Eight output frameworks with PDF export',
				'Session persistence and export',
				'Image and logo generation',
			],
			revenue: ['SaaS subscription', 'Enterprise deployment', 'Cohort licensing'],
		},
		{
			slug: 'archimedes-founder',
			label: 'Archimedes Founder Startup',
			tag: 'First-Session Founders',
			status: 'Live',
			stack: 'React 19 · Gemini · Tailwind',
			description: 'Four-phase Socratic flow — Discovery → Ideation → Strategy → Execution — designed for founders in their first session. No prior framework required.',
			features: [
				'Four-phase Socratic dialogue engine',
				'Voice input via Whisper',
				'PDF export for all frameworks',
				'IndexedDB session persistence',
				'No CIA validation layer by design',
			],
			revenue: ['Techo Startup Center cohort deployment', 'Khmer Enterprise partnership', 'University programmes'],
		},
		{
			slug: 'agent-pro',
			label: 'Agent-Pro',
			tag: 'Multi-Agent Intelligence',
			status: 'Live',
			stack: 'SvelteKit · IndexedDB · Multi-provider API',
			description: 'Three-agent council on a shared intelligence layer. Opportunity Hunter, Architect, and PA agents coordinating on complex tasks with shared context.',
			features: [
				'Three-agent council architecture',
				'Shared UOI intelligence layer',
				'Multi-provider API support',
				'Opportunity identification engine',
				'Personal intelligence and task management',
			],
			revenue: ['SaaS subscription', 'Enterprise deployment', 'API access'],
		},
	];
</script>

<svelte:head>
	<title>Products — Kampot Tech Collective</title>
</svelte:head>

<section class="max-w-6xl mx-auto px-6 pt-20 pb-16 border-b border-[#c8bfa8]">
	<p class="font-mono-ktc text-xs tracking-widest uppercase text-[#b8960c] mb-4">Products</p>
	<h1 class="font-cond text-6xl md:text-7xl leading-none text-[#0e0d0b]">
		Four products.<br />All live.
	</h1>
</section>

{#each products as p, i}
	<section class="max-w-6xl mx-auto px-6 py-16 {i < products.length - 1 ? 'border-b border-[#c8bfa8]' : ''}">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12">
			<div>
				<div class="flex items-center gap-4 mb-4">
					<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c]">{p.tag}</span>
					<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#c44a1a]">{p.status}</span>
				</div>
				<h2 class="font-cond text-4xl text-[#0e0d0b] mb-4">{p.label}</h2>
				<p class="font-mono-ktc text-[10px] tracking-widest text-[#c8bfa8] mb-6">{p.stack}</p>
				<p class="font-serif text-lg leading-relaxed text-[#0e0d0b] mb-8">{p.description}</p>
				<a href="/contact" class="inline-block font-mono-ktc text-xs tracking-widest uppercase px-6 py-3 bg-[#0e0d0b] text-[#f4f0e8] hover:bg-[#b8960c] transition-colors">
					Request Demo
				</a>
			</div>
			<div class="flex flex-col gap-8">
				<div>
					<p class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c] mb-4">Features</p>
					<ul class="space-y-2">
						{#each p.features as f}
							<li class="font-serif text-base text-[#0e0d0b] flex items-start gap-3">
								<span class="text-[#b8960c] mt-1">—</span>
								<span>{f}</span>
							</li>
						{/each}
					</ul>
				</div>
				<div>
					<p class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c] mb-4">Revenue Paths</p>
					<ul class="space-y-2">
						{#each p.revenue as r}
							<li class="font-mono-ktc text-xs text-[#0e0d0b] opacity-70">{r}</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</section>
{/each}
