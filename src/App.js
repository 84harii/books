import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import './App.css';
import BookshelfModern from "./component/pages/bookshelf-modern";
import AddBook from "./component/pages/add-book";
import Login from "./component/pages/login";
import ManageBooks from "./component/pages/manage-book";
import Update from "./component/pages/update";
import BookshelfMinimal from "./component/pages/bookshelf-minimal";
import BookshelfClassic from "./component/pages/bookshelf-classic";
import AllBooks from "./component/pages/all-books";
import { useEffect } from "react";
import { useAllContext } from "./component/context/context";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const { admin } = useAllContext();
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<BookshelfMinimal />} />
          <Route path="/bookshelf-minimal" element={<BookshelfMinimal />} />
          <Route path="/bookshelf-classic" element={<BookshelfClassic />} />
          <Route path="/bookshelf-modern" element={<BookshelfModern />} />
          <Route path="/login" element={<Login />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/all-books" element={<AllBooks />} />
          {admin && (
                    <>
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/manage" element={<ManageBooks />} /></>)}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
