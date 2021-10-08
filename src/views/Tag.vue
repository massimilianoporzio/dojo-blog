<template>
  <div class="tag">
    <div v-if="error">{{ error }}</div>
    <div v-if="filterdPosts.length" class="layout">
      <PostList :posts="filterdPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
<script setup>
import getPosts from "@/composables/getPosts";
import {useRoute, useRouter, onBeforeRouteUpdate} from "vue-router";
import {computed, onUpdated} from "vue";
import Spinner from "@/components/Spinner";
import PostList from "@/components/PostList";
import TagCloud from "@/components/TagCloud";

const {posts,error,load} = getPosts()
load()
const route = useRoute()
const router = useRouter()
const tag = route.params.tag
const filterdPosts = computed(()=>{
  return posts.value.filter(p=>p.tags.includes(tag))
})


</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
