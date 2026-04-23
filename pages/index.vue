<template>
  <div class="md:max-w-[600px] lg:max-w-[600px] md:mx-auto lg:mx-auto md:px-5 lg:px-5">
    <section class="reveal reveal-1">
      <Introduction />
    </section>
    <hr class="rule" />
    <section class="reveal reveal-2">
      <MyPlaylist />
    </section>
    <hr class="rule" />
    <section class="reveal reveal-3">
      <AboutMe />
    </section>
    <hr class="rule" />
    <section class="reveal reveal-4">
      <Links />
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: '♡ tomi',
  ogTitle: '♡ tomi',
  description: 'here is my only fixed address.',
  ogDescription: 'here is my only fixed address.',
})
</script>
