<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
    <button class="delete" @click="handleClick">Delete post</button>
  </div>
  <div v-else>
    <Spinner v-if="!error"/>
  </div>
</template>

<script setup>
import getPost from "@/composables/getPost";
import Spinner from "@/components/Spinner";
import {useRoute, useRouter} from "vue-router";

import { doc, deleteDoc } from "firebase/firestore";
import {projectFirestore} from "@/firebase/config";
const name = "Details"
const props = defineProps(['id'])
const route = useRoute()
const router = useRouter()
const {post,error,load} = getPost(route.params.id)
console.log(route)
load()
const handleClick = async ()=>{
  await deleteDoc(doc(projectFirestore,"posts",route.params.id))
  router.push("/")
}
</script>

<style scoped>
.tags a {
  margin-right: 10px;
}
.post {
  max-width: 1200px;
  margin: 0 auto;
}
.post p {
  color: #444;
  line-height: 1.5em;
  margin-top: 40px;
}
.pre {
  white-space: pre-wrap;
}
button.delete {
  margin: 10px auto;
}
</style>
