<template>
  <main>
    <NuxtLink to="/" class="emphasis-text small-text">&larr; back</NuxtLink>
    <h1 class="hero-name font-bold mt-4">posts</h1>
    <hr class="rule" />
    <ContentList path="/posts" v-slot="{ list }">
      <ul class="list-none">
        <li v-for="post in list" :key="post._path" class="post-row">
          <nuxt-link :to="post._path" class="post-link">
            <span class="post-date">{{ formatDate(post.date) }}</span>
            <span class="post-sep">──</span>
            <span class="post-title">{{ post.title }}</span>
          </nuxt-link>
        </li>
      </ul>
    </ContentList>
  </main>
</template>

<script setup>
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toISOString().slice(0, 10)
}
</script>

<style scoped>
.post-row {
  padding: 0.4rem 0;
  border-bottom: 1px dashed rgba(191, 226, 245, 0.15);
}
.post-link {
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 0.75rem;
  align-items: baseline;
  transition: background 0.15s ease, color 0.15s ease;
  padding: 0.25rem 0.25rem;
}
.post-link:hover {
  background: theme('colors.text');
  color: theme('colors.background');
}
.post-link:hover .post-sep,
.post-link:hover .post-date {
  color: theme('colors.background');
}
.post-date {
  font-size: theme('fontSize.small');
  color: theme('colors.emphasis');
  white-space: nowrap;
}
.post-sep {
  color: theme('colors.emphasis');
  opacity: 0.5;
}
.post-title {
  font-weight: 700;
}
</style>
