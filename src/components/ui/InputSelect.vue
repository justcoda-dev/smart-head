<template>
  <select class="input-select" @change="onOptionSelect">
    <option disabled selected hidden>
      {{ props.placeholder }}
    </option>
    <option
        v-for="option of options"
        :value="option.value"
        :key="option.id"
    >
      {{ option.value }}
    </option>
  </select>
</template>

<script lang="ts" setup>
import {defineProps, defineEmits} from "vue";

interface IProps {
  options: [],
  placeholder?: string
}

const props = defineProps<IProps>()
const emit = defineEmits()

const onOptionSelect = (event: Event) => {
  const target = event.target as HTMLSelectElement
  emit("onOptionSelect", target.value)
}
</script>

<style lang="scss" scoped>
.input-select {
  width: 100%;
  height: 40px;
  padding: 2px 15px;

}
</style>