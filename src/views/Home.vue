<template>
  <div class="home">

    <h1>Home</h1>
    <div v-if="error">
      <h2>{{error}}</h2>
    </div>
    <div v-if="posts.length">
      <PostList v-if="showPosts"
                :posts="posts"/>
      <button @click="showPosts = !showPosts">Toggle posts</button>
    </div>
    <div v-else><Spinner/></div>


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
