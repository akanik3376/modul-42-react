
import './App.css'
import Blogs from './Components/Header/Blogs/Blogs'
import Hader from './Components/Header/Hader'
import Booksmarks from './Components/BookMarks/Booksmarks'
import { useState } from 'react'
function App() {

  const [bookMark, setBookMark] = useState([])
  const [readingTime, setReadingTime] = useState(0)

  const HandelAddToBookMark = (blog) => {
    const newBookMark = [...bookMark, blog]
    setBookMark(newBookMark)
  }

  const HandelReadingTime = (time, id) => {

    setReadingTime(readingTime + time)


    // remove the read blog from bookmark
    const remainingBookMark = bookMark.filter(bookMark => bookMark.id !== id)
    setBookMark(remainingBookMark)
  }


  return (
    <section className='max-w-5xl mx-auto'>
      <Hader></Hader>
      <main className='md:flex'>
        <Blogs HandelAddToBookMark={HandelAddToBookMark} HandelReadingTime={HandelReadingTime}></Blogs>
        <Booksmarks bookMark={bookMark} readingTime={readingTime}></Booksmarks>
      </main>


    </section>
  )
}

export default App
