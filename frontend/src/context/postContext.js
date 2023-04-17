import { useState, useContext, createContext, useEffect } from "react"
import { getPostRequest , createPostsRequest, deletePostRequest, getOnePostRequest, updatePostRequest} from "../api/apiBackend"

const postcontext = createContext()

export const usePost = () => {
    const context = useContext(postcontext)
    return context
}

export const PostProvider = ({ children }) => {

    const [post, setPost] = useState([])

    const getPosts =  async () => {
        const resp = await getPostRequest()
        setPost(resp.data)
    }

    const createPosts = async (posts) => {
        const resp = await createPostsRequest(posts)
        setPost([...post, resp.data])
    }

    const deletePosts = async (id) => {

        const res = await deletePostRequest(id)
        if (res.status === 204){
            setPost(post.filter(post  => post._id !== id))
        }
        }
    const getOnePost = async (id) => {
        const res =  await getOnePostRequest(id)
        return res.data
    }

    const updatePost = async (id, posts) => {
        const res = await updatePostRequest(id, posts)
        setPost(post.map((posts) => (posts._id === id ? res.data : posts)))
    }

    const importExcel = async (f) =>{

    }

        useEffect(()=>{
            getPosts()
        }, [])
    
    

    return <postcontext.Provider value={{
        post,
        getPosts,
        createPosts,
        deletePosts,
        getOnePost,
        updatePost,
        importExcel
    }}>
        {children}
    </postcontext.Provider>
}