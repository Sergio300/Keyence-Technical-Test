import React, { useState } from 'react'
import { usePost } from '../context/postContext';
import { Link } from 'react-router-dom'
import {VscEmptyWindow} from 'react-icons/vsc'
import {Card} from '../components/Card'
import axios from 'axios';

export function Home() {

  const { post } = usePost()
  const [archivo, setArchivo] = useState(null);

  const upload = e => {
    setArchivo(e);
    console.log(e)
  };

  const insertFile = async () => {
    const f = new FormData()
    f.append("file",archivo)
    await axios.post('http://localhost:3000/importExcel', f,{headers:{'Content-Type': 'multipart/form-data'}})
    .then(response=>{
      console.log(response.data)
    }).catch(error=>{
      console.log(error)
    })
    window.location.reload()
  }

  

  const rendermain = () =>{

    if (post.length === 0) {
      return <div>
        <VscEmptyWindow/>
        <h1>NO DATA</h1>
        <div className='flex justify-center px-3 py-2'>
          <input type='file' name="file" className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white mb-4 m-4'
          onChange={(e)=>upload(e.target.files[0])}
          ></input>
          <button className='px-3 py-2 focus:outline-none rounded bg-gray-800 text-white mb-4 m-4' 
            onClick={()=>insertFile()}
            
          >Upload</button>
        </div>
      </div>
    }
    else{
      return(

        

      <div className='grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 '>

<div className='flex justify-center px-3 py-2'>
        <input type='file' name="file" className='px-3 py-2 focus:outline-none rounded bg-gray-600 text-white mb-4 m-4'
        onChange={(e)=>upload(e.target.files[0])}
        ></input>
        <button className='px-3 py-2 focus:outline-none rounded bg-gray-800 text-white mb-4 m-4' 
          onClick={()=>insertFile()}
        >Upload</button>
      </div>

        {post.map(post =>(
          <Card post={post} key={post._id}></Card>
        ))}
      </div>
      )
    }

  }

  return (
    <div>
      
      
      <Link to="/create">
          <button className=' bg-slate-400 hover: bg-slate-500 px-3 py-2 text-white rounded-sm mx-2 mb-2' >
            Create New Data
          </button>
      </Link>

      {rendermain()}
      
    </div>


  )
}

