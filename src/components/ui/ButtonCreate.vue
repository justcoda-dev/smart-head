<template>
  <button @click="onClick" class="btn-create">
    <slot>create</slot>
  </button>
</template>

<script lang="ts" setup>
import {defineEmits} from "vue";

const emit = defineEmits()
const onClick = () => {
  emit("onClick")
}
</script>

<style lang="scss" scoped>
.btn-create {
  display: inline-block;
  outline: 0;
  cursor: pointer;
  text-align: center;
  border: 0;
  padding: 7px 16px;
  height: 36px;
  min-width: 36px;
  color: #fff;
  background: #0070f3;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  transition: .4s;

  &:hover {
    background: #005fd4;
    opacity: 1;
  }

}
</style>