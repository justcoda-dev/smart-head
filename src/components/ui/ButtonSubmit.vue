<template>
  <button type="submit" @click="onClick" :disabled="props.disabled" class="btn-submit">
    <slot>submit</slot>
  </button>
</template>

<script lang="ts" setup>
import {defineEmits, defineProps} from "vue";

interface IProps {
  disabled: boolean
}

const props = defineProps<IProps>()
const emit = defineEmits()
const onClick = () => {
  emit("onClick")
}
</script>

<style lang="scss" scoped>
.btn-submit {
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
  &:disabled {
    opacity: .5;
  }

}
</style>