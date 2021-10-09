import {ref} from "vue";
import { collection, doc, getDoc } from "firebase/firestore";
import {projectFirestore} from "@/firebase/config";


const getPost = (id) => {
    const post = ref(null)
    const error = ref(null)
    const load = async () => {
        try {
            // //simulate delay
            // // await new Promise(resolve => {setTimeout(resolve,2000)})
            // let data = await fetch("http://localhost:3000/posts/"+id)
            // if (!data.ok) {
            //     //problem
            //     throw Error('no data available')
            // }
            // post.value = await data.json()
            const docRef = doc(projectFirestore, "posts", id); //ref to the document with id id in the posts collection
            console.log(docRef)
            const docSnap = await getDoc(docRef); //snapshot of the doc
            if (!docSnap.exists()) {
                throw Error('No such document')
            }
            post.value = {...docSnap.data(), id: id}


        } catch (err) {
            error.value = err.message
            console.log(err.message)
        }
    }
    return {post, error, load}
}

export default getPost
