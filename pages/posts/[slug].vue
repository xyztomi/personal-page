<template>
  <main>
    <ContentDoc>
      <template v-slot="{ doc }">
        <article>
          <h1 class="big-text font-bold">{{ doc.title }}</h1>
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