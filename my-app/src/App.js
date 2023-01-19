import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Project from './components/Pages/Project/Project';
import Aboutme from './components/Pages/Aboutme/Aboutme';
import Contact from './components/Pages/Contact/Contact';

function App() {
  const [page, setPage] = useState('project')
  const render = () => {
    if (page === 'project') {
      return <Project></Project>
    }
    else if (page === 'aboutme') {
      return <Aboutme></Aboutme>
    }
    else if (page === 'contact') {
      return <Contact></Contact>
    }
  }

  const changePageFunction = (someString) => {
    setPage(someString)
  }
  return (
    <>
    <Header changePageFunction={changePageFunction}></Header>
    {render()}
    </>
  );
}

export default App;
