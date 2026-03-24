<script>
	import { page } from '$app/stores';

	const nav = [
		{ href: '/',         label: 'Home' },
		{ href: '/products', label: 'Products' },
		{ href: '/about',    label: 'About' },
		{ href: '/blog',     label: 'Blog' },
		{ href: '/contact',  label: 'Contact' },
	];

	let menuOpen = false;
</script>

<header class="relative z-20 border-b border-[#c8bfa8] bg-[#f4f0e8]">
	<div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

		<!-- Brand -->
		<a href="/" class="flex flex-col gap-0.5 no-underline">
			<span class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c]">KTC</span>
			<span class="font-cond text-xl tracking-tight text-[#0e0d0b] leading-none">
				Kampot Tech Collective
			</span>
		</a>

		<!-- Desktop nav -->
		<nav class="hidden md:flex items-center gap-8">
			{#each nav as { href, label }}
				<a
					{href}
					class="font-mono-ktc text-xs tracking-widest uppercase
						text-[#0e0d0b] hover:text-[#b8960c] transition-colors
						{$page.url.pathname === href ? 'text-[#b8960c]' : ''}"
				>
					{label}
				</a>
			{/each}
		</nav>

		<!-- Mobile toggle -->
		<button
			class="md:hidden font-mono-ktc text-xs tracking-widest uppercase"
			on:click={() => menuOpen = !menuOpen}
		>
			{menuOpen ? 'Close' : 'Menu'}
		</button>
	</div>

	<!-- Mobile menu -->
	{#if menuOpen}
		<div class="md:hidden border-t border-[#c8bfa8] bg-[#f4f0e8] px-6 py-4 flex flex-col gap-4">
			{#each nav as { href, label }}
				<a
					{href}
					class="font-mono-ktc text-xs tracking-widest uppercase text-[#0e0d0b] hover:text-[#b8960c]"
					on:click={() => menuOpen = false}
				>
					{label}
				</a>
			{/each}
		</div>
	{/if}
</header>
