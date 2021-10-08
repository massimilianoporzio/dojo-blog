import {ref} from "vue";

const useTags = (posts)=>{
    const tags = ref([])
    const tagSet = new Set() /* not reactive just to use it here*/

    posts.forEach(item=>{
        item.tags.forEach(tag=>{
            tagSet.add(tag)
        })
    })
    tags.value = Array.from(tagSet)

    return {tags}
}
export default useTags
