import React from 'react'
import './Search.css'

const Search = ({ setSearch, setPageNumber }) => {



    return (
        <form className="d-flex justify-content-center gap-4 mb-5">
            <input 
                onChange={(e) => { 
                    setPageNumber(1)
                    setSearch(e.target.value) 
                }} 
                placeholder="Search fro Charactor" 
                type="text" 
                className="" />
            <button 
                onClick={(e) => {
                    e.preventDefault()
                }}
                className="btn btn-primary"
            >
                Search
            </button>
        </form>
    )
}

export default Search;

