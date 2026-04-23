<template>
  <div class="wrapper">
    <div class="video-container">
      <video autoplay muted loop playsinline class="w-full">
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
