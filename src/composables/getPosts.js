import {ref} from "vue";
import {projectFirestore} from "@/firebase/config";
import { collection, getDocs} from "firebase/firestore";
import { query, orderBy, limit } from "firebase/firestore";
const getPosts = () => {

    const posts = ref([])
    const error = ref(null)
    const loading = ref(false)
    const load = async () => {
        try {
            // //simulate delay
            // await new Promise(resolve => {setTimeout(resolve,200)})
            // let data = await fetch("http://localhost:3000/posts")
            // if (!data.ok) {
            //     //problem
            //     throw Error('no data available')
            // }
            // posts.value = await data.json()
            loading.value = true
            await new Promise(resolve => {setTimeout(resolve,200)})
            const ref = collection(projectFirestore,"posts") //reference to the collection I want to fetch
            const q = query(ref, orderBy("createdAt","desc"));
            const querySnapshot = await getDocs(q) // async



            posts.value = querySnapshot.docs.map(doc=>{
                // console.log(doc.data())
                return {...doc.data(),id: doc.id}
            })
            loading.value = false
            // querySnapshot.forEach((doc) => {
            //     // doc.data() is never undefined for query doc snapshots
            //     console.log(doc.id, " => ", doc.data());
            // });

            // })

        } catch (err) {
            error.value = err.message
            console.log(err.message)
        }
    }

    return {posts,error,load,loading}
}

export default getPosts
