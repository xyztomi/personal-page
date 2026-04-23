<template>
  <main>
    <NuxtLink to="/posts" class="emphasis-text small-text">&larr; back</NuxtLink>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1 class="hero-name font-bold mt-4">{{ doc.title }}</h1>
          <hr class="rule" />
          <ContentRenderer :value="doc" />
        </article>
      </template>
      <template #not-found>
        <div class="flex flex-col items-center justify-center h-screen">
          <h1 class="font-bold text-9xl">OOPS</h1>
          <p class="font-bold text-9xl">😳</p>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>


<script setup>
const doc = ref(null)

watch(doc, (newDoc) => {
  if (newDoc) {
    useSeoMeta({
      title: newDoc.title,
      description: newDoc.description,
    })
  }
})
</script>