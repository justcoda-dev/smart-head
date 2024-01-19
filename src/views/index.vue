<template>
  <div>
    {{ users }}
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {request} from "@/api";

const users = ref()

onMounted(async () => {

  users.value = await request.get("users")
  console.log(users.value)
})
</script>

<style scoped>

</style>