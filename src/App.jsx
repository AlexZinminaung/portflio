import { useState } from 'react';
import './App.css';
import About from './components/About';
import Projects from './components/Projects.jsx';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Content from './components/Content.jsx';


function App() {
  const [page, setPage] = useState('about');
  const handleClick = (changePage, value) => {
    changePage(value);
  }
  
  let article;

  if (page === 'about'){   
    article = <About/>;
  }
  else if (page == 'projects')
  {
    article = <Projects/>;
  }
  else {
    article = <Content/>;
  }

  return (
    <>
    <Navbar onClick={handleClick} setPage={setPage} page={page}/>
    {article}
    <Footer/>
    </>
  )
}

export default App
