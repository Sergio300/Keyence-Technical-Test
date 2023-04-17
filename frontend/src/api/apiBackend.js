import axios from 'axios'

export const getPostRequest = async () => await axios.get('/post')

export const createPostsRequest = async (post) => await axios.post('/posts', post)

export const deletePostRequest = async id => await axios.delete('/delete/' + id)

export const getOnePostRequest = async id => await axios.get('/post/' + id)

export const updatePostRequest = async (id, newdata) => await axios.put(`/put/${id}`, newdata)

export const importExcel = async (f) => await axios.post('/importExcel', f)


