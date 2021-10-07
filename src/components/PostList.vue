<template>
  <div class="post-list">
    <div v-for="post in props.posts" :key="post.id">
      <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script setup>
import SinglePost from "@/components/SinglePost";

const name = "PostList"
const props = defineProps(['posts'])
</script>

<style scoped>

</style>
