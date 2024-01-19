<template>
  <button @click="onClick" class="btn-delete">
    <slot>delete</slot>
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
.btn-delete {
  display: inline-block;
  outline: 0;
  cursor: pointer;
  text-align: center;
  border: 0;
  padding: 7px 16px;
  height: 36px;
  min-width: 36px;
  color: #fff;
  background: #ce5635;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  transition: .4s;

  &:hover {
    background: #ba3c18;
    opacity: 1;
  }

}
</style>