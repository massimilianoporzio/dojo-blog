<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>
      <Spinner />
    </div>
  </div>
</template>
<script setup>
import Spinner from "@/components/Spinner";
import {computed, reactive, ref, watch, watchEffect} from "vue";
import getPosts from "@/composables/getPosts";
import PostList from "@/components/PostList";
const name = 'Home'

const {posts,error,load} = getPosts()
load()

const showPosts = ref(true)


</script>
<style>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
