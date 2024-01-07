<template>
  <header class="header">
    <div class="logo"><img src="/images/logo_white.png" alt="XTV Play" title="XTV Play" /></div>
    <div class="title">Улюблені радіостанції онлайн</div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  @apply text-center flex flex-col items-center p-4;

  .logo {
    @apply max-w-[225px] p-1 pointer-events-none select-none;
  }
}
</style>
