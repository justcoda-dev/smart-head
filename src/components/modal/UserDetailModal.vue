<template>
  <Teleport to="body">
    <div class="user-detail-modal" v-if="props.user && props.show" @click="onModalBgClick">
      <div class="user-detail-modal__user">
        <button-hide class="user-detail-modal__btn-hide" @onClick="onHideClick"/>
        <div class="user-detail-modal__avatar">
          <img :src="user.avatar"/>
        </div>
        <div class="user-detail-modal__info">
          <p class="user-detail-modal__name">
            <span>Name: </span>{{ `${user.first_name} ${user.last_name}` }}</p>
          <p class="user-detail-modal__email"><span>Email: </span>{{ user.email }}</p>
          <p class="user-detail-modal__email"><span>Phone: </span>{{ user.phone }}</p>
          <p class="user-detail-modal__email"><span>Address: </span>{{ user.address }}</p>
        </div>
      </div>

    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import ButtonHide from "@/components/ui/ButtonHide.vue";
import {defineEmits} from "vue";


interface IProps {
  user: object,
  show: boolean
}

const emit = defineEmits()
const props = defineProps<IProps>()
const onHideClick = () => {
  emit("onHideClick")
}
const onModalBgClick = (e: Event) => {
  const modal = e.currentTarget
  if (modal === e.target) {
    onHideClick()
  }
}
</script>

<style lang="scss" scoped>
.user-detail-modal {
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.70);
  width: 100%;
  height: 100%;

  &__btn-hide {
    position: absolute;
    top: 0;
    right: 0;
  }

  &__user {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #ffffff;
    width: 600px;
    top: 100px;
    margin: auto;
    padding: 40px 30px;
  }


  &__avatart {
  }

  &__info {
  }

  &__name {
  }

  &__email {
  }
}
</style>