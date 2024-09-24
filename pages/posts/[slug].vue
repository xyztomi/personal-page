<template>
  <main>
    <ContentDoc v-slot="{ doc }">
      <article>
        <h1 class="big-text font-bold">{{ doc.title }}</h1>
        <ContentRenderer :value="doc" />
      </article>
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