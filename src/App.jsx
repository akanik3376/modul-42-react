
import './App.css'
import Blogs from './Components/Header/Blogs/Blogs'
import Hader from './Components/Header/Hader'
import Booksmarks from './Components/BookMarks/Booksmarks'
import { useState } from 'react'
function App() {

  const [bookMark, setBookMark] = useState([0])

  const HandelAddToBookMark = (blog) => {
    console.log(blog)
  }



  return (
    <section className='max-w-5xl mx-auto'>
      <Hader></Hader>
      <main className='md:flex'>
        <Blogs HandelAddToBookMark={HandelAddToBookMark}></Blogs>
        <Booksmarks></Booksmarks>
      </main>


    </section>
  )
}

export default App
