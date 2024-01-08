<template>
  <div class="description">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.description {
  @apply p-[10px] bg-[#f4f7fa] border border-[#bfd2e4];
  @apply text-black text-center;
  @apply md:text-base max-md:text-sm leading-tight;
}
</style>
