import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/nav'
import BookStore from './components/Books/BookStore'
import Categories from './components/Categories/categories'

const Router = () => {
    return (
        <BrowserRouter>
           <Navbar />
           <Routes>
               <Route path='/' element={<BookStore/>} />
               <Route path='/categories' element={<Categories/>} />
           </Routes>
        </BrowserRouter>
    )
}

export default Router;