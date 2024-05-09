import { Route, Routes } from 'react-router-dom';
import './App.css';
import HuddlePage from './pages/HuddlePage/HuddlePage';
import SummaryPage from './pages/SummaryPage/SummaryPage';
import BlogrPage from './pages/BlogrPage/BlogrPage';
import CounterPage from './pages/CounterPage/CounterPage';

function App() {
  return (

    <>
        <Routes>
          <Route path='/' element={<h1>Main page</h1>} />
          <Route path='/huddle' element={<HuddlePage />} />
          <Route path='/summary' element={<SummaryPage />} />
          <Route path='/blogr' element={<BlogrPage />} />
          <Route path='/counter' element={<CounterPage />} />
        </Routes>  
    </>
  )
}

export default App;
