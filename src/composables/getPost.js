import {ref} from "vue";

const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)
    const load = async () => {
        try {
            //simulate delay
            await new Promise(resolve => {setTimeout(resolve,2000)})
            let data = await fetch("http://localhost:3000/posts/"+id)
            if (!data.ok) {
                //problem
                throw Error('no data available')
            }
            post.value = await data.json()
        } catch (err) {
            error.value = err.message
            console.log(err.message)
        }
    }
    return {post, error, load}
}

export default getPost
