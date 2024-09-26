<template>
  <div>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </div>
</template>

<script setup lang="js">

useHead({
  script: [
    {
      src: '/oneko.js',
      body: true,    
    },
  ],
});
</script>