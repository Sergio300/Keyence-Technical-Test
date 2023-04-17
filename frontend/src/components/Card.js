import React from 'react'
import toast from 'react-hot-toast'
import {usePost} from '../context/postContext'
import { useNavigate } from 'react-router-dom'

export function Card({ post }) {

    const {deletePosts} = usePost()
    const navigate = useNavigate()

    const handleDelete = (id) => {
        toast((t) => (
            <div>
                <p className='text-white'>¿Do you want to delete?<strong>{id}</strong></p>
                <div>
                    <button className='bg-red-500 hover: bg-red-400 px-3 py-2 text-sm text-white rounded-sm mx-2'
                        onClick={() => {
                        
                            deletePosts(id)
                            toast.dismiss(t.id)
                        }}
                    >I'm sure</button>
                    <button className='bg-slate-400 hover: bg-slate-500 px-3 py-2 text-white rounded-sm mx-2'
                        onClick={() => toast.dismiss(t.id)}    
                    >I'm not sure</button>
                </div>
            </div>
        ), {
            style: {
                background: "#202020"
            }
        })
    }

    return (
        <div className='bg-zinc-800 text-white rounded-sm shadow-sm shadow-black
        hover:bg-zinc-700 hover:cursor-pointer'>
            <div className='px-4 py-7'>
                <div className='flex justify-between'>
                    <h3>{post.User_ID}</h3>
                    <button className=' bg-red-600 text-sm px-2 py-1 rounded-sm'
                    onClick={() => handleDelete(post._id)}
                    >    
                        Delete
                    </button>
                </div>
                <div className='flex justify-between'>
                    <h2>{post.User_Name}</h2>
                    <button className=' bg-green-600 text-sm px-2 py-1 rounded-sm'
                    onClick={() => navigate(`/post/${post._id}`)}
                    >    
                        Update
                    </button>
                </div>
                <p>{post.Dates}</p>
                <p>{post.Punch_In}</p>
                <p>{post.Punch_Out}</p>
            </div>
        </div>
    )
}
