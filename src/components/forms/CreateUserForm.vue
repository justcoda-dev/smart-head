<template>
  <form class="create-user-form" type="submit" @submit="onSubmit">
    <button-hide class="create-user-form__btn-hide" @onClick="onHideClick"/>
    <p><b>Create User</b></p>
    <input-text class="create-user-form__name" :errorText="nameError" :placeholder="'name'"
                v-model="name"/>
    <input-text class="create-user-form__email" :errorText="emailError" :placeholder="'email'"
                v-model="email"/>
    <button-submit :disabled="submitDisabled"/>
  </form>
</template>

<script lang="ts" setup>
import InputText from "@/components/ui/InputText.vue";
import ButtonSubmit from "@/components/ui/ButtonSubmit.vue";
import ButtonHide from "@/components/ui/ButtonHide.vue";
import {ref, defineEmits, watch, computed} from "vue"
import {VALIDATION} from "@/validation";

const emit = defineEmits()
const name = ref()
const email = ref()
const nameError = ref()
const emailError = ref()

const submitDisabled = computed(() => name.value && email.value && !emailError.value && !nameError.value)

const onSubmit = (e: HTMLFormElement) => {
  e.preventDefault()
  emit("onSubmitCreateForm", {name: name.value, email: email.value})
  name.value = ""
  email.value = ""

}
const onHideClick = () => {
  emit("onHideClick")
}

watch(() => email.value, (value) => {
  for (let i = 0; i < VALIDATION.email.length; i++) {
    const validation = VALIDATION.email[i]
    if (validation.rule(value)) {
      emailError.value = ""

    } else {
      emailError.value = validation.errorText
      break
    }
  }
})

watch(() => name.value, (value) => {
  for (let i = 0; i < VALIDATION.name.length; i++) {
    const validation = VALIDATION.name[i]
    if (validation.rule(value)) {
      nameError.value = ""

    } else {
      nameError.value = validation.errorText
      break
    }
  }

})
</script>

<style lang="scss" scoped>
.create-user-form {
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 600px;

  background: #fff;
  padding: 40px 30px;

  &__btn-hide {
    position: absolute;
    right: 0;
    top: 0;
  }

  &__name {
    margin-bottom: 10px;
  }

  &__email {
    margin-bottom: 20px;
  }
}
</style>