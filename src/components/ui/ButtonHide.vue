<template>
  <button @click="onClick">
    <slot>X</slot>
  </button>
</template>

<script lang="ts" setup>
import {defineEmits} from "vue";

const emit = defineEmits()
const onClick = () => {
  emit("onClick")
}
</script>

<style scoped>

</style>