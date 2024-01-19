<template>
  <li class="users-list-item">
    <div class="users-list-item__avatar">
      <img :src="user.avatar"/>
    </div>
    <div class="users-list-item__info">
      <p class="users-list-item__name" @click="onNameClick(user.id)">
        {{ `${user.first_name} ${user.last_name}` }}</p>
      <p class="users-list-item__email">{{ user.email }}</p>
    </div>
    <button-delete @onClick="onDeleteClick(user.id)" class="users-list-item__btn-delete"/>
  </li>
</template>

<script lang="ts" setup>
import ButtonDelete from "@/components/ui/ButtonDelete.vue";

interface IProps {
  user: object
}

const emit = defineEmits()
const props = defineProps<IProps>()

const onNameClick = (id: number | string) => {
  emit("onNameClick", id)

}
const onDeleteClick = (id: string | number) => {
  emit("onDeleteClick", id)
}
</script>

<style lang="scss" scoped>
.users-list-item {
  display: flex;
  margin: 10px;
  background: #fff;

  &__avatar {
    min-width: 130px;
    width: 130px;
    display: flex;
    align-items: center;
    @media (max-width: 500px) {
      min-width: 70px;
      width: 70px;
    }

    img {
      object-fit: cover;
      object-position: center;
      width: 100%;
    }
  }

  &__info {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-grow: 1;
    @media (max-width: 500px) {
      flex-direction: column;
      padding: 0 10px;
    }
  }

  &__name {
    cursor: pointer;
    transition: .3s;

    &:hover {
      color: #0070f3;
      transform: scale(1.03);
    }
  }

  &__email {
  }

  &__btn-delete {
  }
}
</style>