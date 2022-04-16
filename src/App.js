import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import Cards from './components/Cards/Cards'
import Pagination from './components/Pagination/Pagination'
import Search from './components/Search/Search'
import Navbar from './components/Navbar/Navbar'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Episodes from './Pages/Episodes'
import Location from './Pages/Location'
import CardDetails from './components/Cards/CardDetails'

function App(){
  return(
    <Router>
      <div className="App">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardDetails />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/episodes/:id" element={<CardDetails />} />
        <Route path="/location" element={<Location />} />
        <Route path="/location/:id" element={<CardDetails />} />
      </Routes>
    </Router>
  )
}

const Home = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const [search, setSearch] = useState("")
  let [fetchData, updateFetchData] = useState([]);
  
  const { info, results } = fetchData;
  const API = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(API).then(res => res.json());
      updateFetchData(data);
    })();
  }, [API]);

  return (
    <div className="App">
      <h1 className="text-center">Characters</h1>
      <Search setPageNumber={setPageNumber} setSearch={setSearch} />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </div>
  );
}

export default App;
