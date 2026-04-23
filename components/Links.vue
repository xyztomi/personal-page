<template>
  <div class="p-0">
    <ul class="list-none mb-6">
      <li class="list-none mb-2">
        <p class="text-lg">
          <span class="prompt">&gt;</span>take a look at:
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
          <span class="prompt">&gt;</span>my links:
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
          <nuxt-link to="https://www.last.fm/user/juxtavenile" target="_blank">
            <li class="emphasis-text underline">scrobble with me</li>
          </nuxt-link>
        </ul>
      </li>
    </ul>
    <p class="small-text text-emphasis/70 mt-6">[ status: updating ── 2026 ]</p>
  </div>
</template>
