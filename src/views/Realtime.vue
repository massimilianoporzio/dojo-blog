<template>
<h1>Real time data</h1>
  <div v-for="post in posts" :key="post.id">
    <div>
      {{post.title}}
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {doc, getDocs, onSnapshot} from "firebase/firestore";
import {projectFirestore} from "@/firebase/config";
import {collection, orderBy, query} from "firebase/firestore";
const posts = ref([])
const name = "Realtime"
onMounted(()=>{
  const ref = collection(projectFirestore,"posts") //reference to the collection I want to fetch
  const q = query(ref, orderBy("createdAt","desc"));
  onSnapshot(q,snap=>{
    let docs = snap.docs.map(doc=>{
      return {...doc.data(),id:doc.id}
    })
    console.log('documents',docs)
    posts.value = docs
  })
})



</script>

<style scoped>

</style>
