<template>
  <ul class="users-list">
    <users-list-item
        v-for="user of list"
        :key="user.id"
        :user="user"
        @onDeleteClick="onDeleteClick"
        @onNameClick="onNameClick"
    />
  </ul>
</template>

<script lang="ts" setup>
import UsersListItem from "@/components/usersList/UsersListItem.vue";
import ButtonCreate from "@/components/ui/ButtonCreate.vue";

import {defineEmits} from "vue";

const emit = defineEmits()

interface IProps {
  list: []
}

const props = defineProps<IProps>()

const onNameClick = (id: string | number) => {
  emit("onNameClick", id)
}

const onDeleteClick = (id: string | number) => {
  emit("onDeleteClick", id)
}


</script>

<style lang="scss" scoped>
.users-list {
  background: #f1f1f1;
}

</style>