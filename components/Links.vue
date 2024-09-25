<template>
  <p class="text-lg font-bold">↓ will update soon</p>
  <div class="mx-auto p-4">
    <ul class="list-none mb-4">
      <li class="list-none mb-2">
        <p class="text-lg">
          <span class="mr-2">&gt;</span>take a look at:
        </p>
        <ul class="list-none ml-4">
          <nuxt-link :to="'/posts'">
            <li class="emphasis-text underline">my mid posts</li>
          </nuxt-link>
          <li class="emphasis-text underline">my kool projects</li>
        </ul>
      </li>
    </ul>
    <ul class="list-none">
      <li class="list-none mb-2">
        <p class="text-lg">
          <span class="mr-2">&gt;</span>my links:
        </p>
        <ul class="list-none ml-4">
          <nuxt-link to="https://discordapp.com/users/267318921063956482" target="_blank">
            <li class="emphasis-text underline">hire me</li>
          </nuxt-link>
          <NuxtLink to="https://github.com/xyztomi" target="_blank">
            <li class="emphasis-text underline">date me</li>
          </NuxtLink>
          <nuxt-link to="mailto:tomitio@student.ub.ac.id" target="_blank">
            <li class="emphasis-text underline">email me</li>
          </nuxt-link>
        </ul>
      </li>
    </ul>
  </div>
</template>