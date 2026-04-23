<template>
  <div class="wrapper">
    <div class="video-container">
      <video
        ref="videoEl"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="w-full"
      >
        <source src="@/assets/images/void.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
    <hr class="rule" />
    <p class="big-text font-bold">♡ tomi<span class="caret" aria-hidden="true">&nbsp;</span></p>
    <br />
    <p>here is my only fixed address.</p>
    <p><span class="prompt">&gt;</span>i am friendly and thoughtful, and quite awfully pretty.</p>
    <p><span class="prompt">&gt;</span>i mess around with tech. hit me up for a collab or whatever.</p>
  </div>
</template>

<script setup>
const videoEl = ref(null)

onMounted(() => {
  const v = videoEl.value
  if (!v) return
  v.muted = true
  const tryPlay = () => v.play().catch(() => {})
  tryPlay()
  const kick = () => {
    tryPlay()
    window.removeEventListener('touchstart', kick)
    window.removeEventListener('click', kick)
  }
  window.addEventListener('touchstart', kick, { passive: true, once: true })
  window.addEventListener('click', kick, { once: true })
})
</script>

<style scoped>
.video-container {
  width: 100%;
  max-width: 600px;
  margin: auto;
}

video {
  width: 100%;
  height: auto;
}
</style>
