<template>
  <div class="project">
    <header class="header">
      <div class="header__filter">
        <input-select
            @onOptionSelect="onFilterOptionSelect"
            :placeholder="'select filter'"
            :options="OPTIONS"
        />
      </div>
      <div class="header__search">
        <input-text v-model="searchText" :placeholder="'search'"/>
      </div>
    </header>
    <div class="content">
      <users-list
          :list="users.data"
          v-if="users" @onNameClick="onNameClick"
          @onDeleteClick="onDeleteClick"
      />

      <user-detail-modal
          v-if="userDetails"
          @onHideClick="onHideDetailModalClick"
          :user="userDetails"
          :show="showDetailsModal"/>
      <user-create-modal
          @onHideClick="onHideCreateModalClick"
          :show="showCreateModal"
          @onSubmitCreateModal="onSubmitCreateModal"
      />
    </div>
    <button-create
        class="content__btn-create-user"
        @onClick="onCreateClick"
    >
      create user
    </button-create>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref, watch} from "vue";
import {request} from "@/api";
import UsersList from "@/components/usersList/UsersList.vue";
import InputText from "@/components/ui/InputText.vue";
import InputSelect from "@/components/ui/InputSelect.vue";
import UserDetailModal from "@/components/modal/UserDetailModal.vue";
import UserCreateModal from "@/components/modal/UserCreateModal.vue";
import ButtonCreate from "@/components/ui/ButtonCreate.vue";

type filterFunctions = {
  [key: string]: (a: { first_name: string, email: string }, b: { first_name: string, email: string }) => number
}
//
const SEARCH_KEYS = ["first_name", "email"]
const OPTIONS = [
  {id: 1, value: "name"},
  {id: 2, value: "email"},
]

const FILTER_FUNCTIONS: filterFunctions = {
  "name": (a, b) => {
    return a.first_name.localeCompare(b.first_name)
  },
  "email": (a, b) => {
    return a.email.localeCompare(b.email)
  },

}


const showDetailsModal = ref(false)
const showCreateModal = ref(false)
const filterBy = ref()
const users = ref()
const userDetails = ref()
const searchText = ref()

const onNameClick = async (id: number | string) => {
  const user = await request.get(`users/${id}`)
  showDetailsModal.value = true
  userDetails.value = user.data

}
const onFilterOptionSelect = (value: string) => {
  filterBy.value = value
}
const onCreateClick = () => {
  showCreateModal.value = true
}
const onHideDetailModalClick = () => {
  showDetailsModal.value = false
}
const onHideCreateModalClick = () => {
  showCreateModal.value = false
}
const onSubmitCreateModal = async (data: object) => {
  const response = await request.post("users", data)
  showCreateModal.value = false
}
const onDeleteClick = async (id: number | string) => {
  const response = await request.delete(`users/${id}`)
  console.log(response)
}


watch(() => filterBy.value, (value) => {
  users.value?.data?.sort(FILTER_FUNCTIONS[value])
})
watch(() => searchText.value, async (value) => {

  if (value) {
    users.value = await request.get("users")
    users.value = {
      ...users.value,
      data: users.value?.data.filter((item: { first_name: string, email: string }) => {
        let res;
        for (let i = 0; i < SEARCH_KEYS.length; i++) {
          res = item[SEARCH_KEYS[i] as keyof typeof item]?.toLowerCase().startsWith(value.toLowerCase())
        }
        return res
      })
    }
  } else {
    users.value = await request.get("users")
  }

})
onMounted(async () => {
  users.value = await request.get("users")

})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px 20px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background: white;
  box-shadow: #333333 0px 2px 5px;
  box-sizing: border-box;

  &__filer {

  }

  &__search {
    width: 300px;
  }
}

.content {
  margin-top: 55px;
  position: relative;

  &__btn-create-user {
    position: fixed;
    right: 100px;
    bottom: 25px;
  }
}
</style>