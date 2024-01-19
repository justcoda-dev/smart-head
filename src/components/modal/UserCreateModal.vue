<template>
  <Teleport to="body">
    <div class="user-create-modal" v-if="props.show" @click="onModalBgClick">
      <create-user-form
          ref="form"
          @onSubmitCreateForm="onSubmitCreateForm"
          @onHideClick="onHideClick" class="user-create-modal__form"
      />
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import ButtonHide from "@/components/ui/ButtonHide.vue";
import InputText from "@/components/ui/InputText.vue";
import CreateUserForm from "@/components/forms/CreateUserForm.vue";
import {defineEmits} from "vue";


interface IProps {
  show: boolean
}

const emit = defineEmits()
const props = defineProps<IProps>()
const onHideClick = () => {
  emit("onHideClick")
}
const onSubmitCreateForm = (data: object) => {
  emit("onSubmitCreateModal", data)
}
const onModalBgClick = (e: Event) => {
  const modal = e.currentTarget
  if (modal === e.target) {
    onHideClick()
  }
}
</script>

<style lang="scss" scoped>
.user-create-modal {
  position: fixed;
  display: flex;
  top: 0;
  background: rgba(0, 0, 0, 0.70);
  width: 100%;
  height: 100%;

  &__btn-hide {
    position: fixed;
    right: 0;
  }

  &__form {
    align-self: center;
    margin: auto;

  }

}
</style>