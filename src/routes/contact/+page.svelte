<script>
	import { enhance } from '$app/forms';
	export let form;
</script>

<svelte:head>
	<title>Contact — Kampot Tech Collective</title>
</svelte:head>

<section class="max-w-6xl mx-auto px-6 pt-20 pb-16 border-b border-[#c8bfa8]">
	<p class="font-mono-ktc text-xs tracking-widest uppercase text-[#b8960c] mb-4">Contact</p>
	<h1 class="font-cond text-6xl md:text-7xl leading-none text-[#0e0d0b]">
		Get in touch.
	</h1>
</section>

<section class="max-w-6xl mx-auto px-6 py-16">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-16">

		<!-- Left: context -->
		<div class="font-serif text-lg leading-relaxed text-[#0e0d0b] space-y-6">
			<p>
				KTC is based in Kampot, Cambodia. We build AI applications for markets where the standard solutions don't fit.
			</p>
			<p>
				If you're interested in a product demo, a partnership, or have a problem that needs an unconventional solution — use the form.
			</p>
			<div class="border-t border-[#c8bfa8] pt-6 space-y-2">
				<p class="font-mono-ktc text-xs tracking-widest uppercase text-[#b8960c]">Location</p>
				<p class="font-serif text-base">Kampot, Cambodia</p>
			</div>
		</div>

		<!-- Right: form -->
		<div>
			{#if form?.success}
				<div class="border border-[#b8960c] p-6">
					<p class="font-mono-ktc text-xs tracking-widest uppercase text-[#b8960c]">Message received.</p>
					<p class="font-serif text-base mt-2 text-[#0e0d0b]">We'll be in touch.</p>
				</div>
			{:else}
				<form method="POST" use:enhance class="flex flex-col gap-6">

					{#if form?.error}
						<p class="font-mono-ktc text-xs text-[#c44a1a]">{form.error}</p>
					{/if}

					<div class="flex flex-col gap-2">
						<label for="name" class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c]">Name</label>
						<input
							id="name" name="name" type="text" required
							class="bg-transparent border border-[#c8bfa8] px-4 py-3 font-serif text-base text-[#0e0d0b] focus:outline-none focus:border-[#b8960c] transition-colors"
						/>
					</div>

					<div class="flex flex-col gap-2">
						<label for="email" class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c]">Email</label>
						<input
							id="email" name="email" type="email" required
							class="bg-transparent border border-[#c8bfa8] px-4 py-3 font-serif text-base text-[#0e0d0b] focus:outline-none focus:border-[#b8960c] transition-colors"
						/>
					</div>

					<div class="flex flex-col gap-2">
						<label for="message" class="font-mono-ktc text-[10px] tracking-widest uppercase text-[#b8960c]">Message</label>
						<textarea
							id="message" name="message" rows="6" required
							class="bg-transparent border border-[#c8bfa8] px-4 py-3 font-serif text-base text-[#0e0d0b] focus:outline-none focus:border-[#b8960c] transition-colors resize-none"
						></textarea>
					</div>

					<button type="submit" class="font-mono-ktc text-xs tracking-widest uppercase px-6 py-3 bg-[#0e0d0b] text-[#f4f0e8] hover:bg-[#b8960c] transition-colors self-start">
						Send Message
					</button>

				</form>
			{/if}
		</div>

	</div>
</section>
