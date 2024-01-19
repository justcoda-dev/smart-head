<template>
  <div class="input-text">
    <input
        :placeholder="placeholder"
        v-model="model"
        type="text"
    >
    <span class="input-text__error-text">{{ props.errorText }}</span>
    <span class="input-text__valid-text">{{ props.validText }}</span>
  </div>
</template>

<script lang="ts" setup>
import {defineModel, defineProps} from "vue";

interface IProps {
  placeholder?: string,
  errorText?: string,
  validText?: string
}

const props = defineProps<IProps>()
const model = defineModel()


</script>

<style lang="scss" scoped>
.input-text {
  width: 100%;
  height: 60px;

  & input {
    width: 100%;
    height: 40px;
    padding: 2px 15px;
    box-sizing: border-box;
    background: #f1f1f1;
    outline: none;
    border: none;

    &:focus {
      outline: none;
    }
  }

  &__error-text {
    color: #ba3c18;
  }

  &__valid {
    color: #019501;
  }
}
</style>