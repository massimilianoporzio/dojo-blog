import {ref} from "vue";

const getPosts = () => {

    const posts = ref([])
    const error = ref(null)
    const load = async () => {
        try {
            //simulate delay
            await new Promise(resolve => {setTimeout(resolve,200)})
            let data = await fetch("http://localhost:3000/posts")
            if (!data.ok) {
                //problem
                throw Error('no data available')
            }
            posts.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(err.message)
        }
    }

    return {posts,error,load}
}

export default getPosts
