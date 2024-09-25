<!-- todo: add a back button (../) -->
<template>
  <main>
    <h1 class="big-text font-bold">Posts</h1>
    <ContentList path="/posts" v-slot="{ list }">
      <div v-for="post in list" :key="post._path">
        <small>{{ formatDate(post.date) }}</small>
        <nuxt-link :to="post._path">
          <h2>{{ post.title }}</h2>
        </nuxt-link>
      </div>
    </ContentList>
  </main>
</template>


<script setup>
// Create a function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })
}
</script>