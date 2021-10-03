<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>search term - {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
    <button @click="handleClick">Stop Watching</button>
  </div>
</template>

<script setup>
import {computed, reactive, ref, watch, watchEffect} from "vue";
const name= 'Home'
const search = ref('')
const stopWatch = watch(search,()=>{
  console.log("WATCH")
})

const handleClick = ()=>{
  console.log('CLICK')
  stopWatch()
  stopWatchEffect()
}

const stopWatchEffect=watchEffect(()=>{
  console.log('watchEffect',search.value)
})
const names = ref(['mario', 'yoshi', 'luigi', 'toad', 'bowser', 'koopa', 'peach'])
const matchingNames = computed(() => {
  // return ['a', 'b', 'c']
  return names.value.filter(name => name.includes(search.value))
})
</script>
