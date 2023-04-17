import React from 'react'
import { Home, Create, Read, Update, Delete } from './containers'
import { Routes, Route } from 'react-router-dom'
import { PostProvider } from './context/postContext.js'
import {Toaster} from 'react-hot-toast'


function App() {
  return (

    <div className='ml-3'>

      <PostProvider>
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/read' element={<Read />} />
          <Route path='/post/:id' element={<Update />} />
          <Route path='/delete' element={<Delete />} />

        </Routes>
        <Toaster/>

      </PostProvider>

    </div>

  )
}

export default App