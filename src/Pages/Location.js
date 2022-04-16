import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards/Cards'
import InputGroup from '../Filters/inputGroup'


const Location = () => {
    let [id, setID] = useState(1)
    let [info, setInfo] = useState([])
    let [results, setResults] = useState([])
    let {name, type, dimension  } = info;
    console.log(name)


    let api = `https://rickandmortyapi.com/api/location/${id}`

    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json())
            setInfo(data)

            let a = await Promise.all(
                data.residents.map((x) => {
                    return fetch(x).then((res) => res.json())
                })
            )
            setResults(a)
            console.log(a)
        })()
    }, [api])

    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center mb-3">
                    Episodes : 
                    <span className="text-primary">
                        {name === "" ? "Uknown" : name}
                    </span>
                </h1>
                <h5 className="text-center">
                    Dimension : {dimension === "" ? "Unknown" : dimension}
                </h5>
                <h6 className="text-center">
                    Dimension : {type === "" ? "Unknown" : type}
                </h6>
            </div>
            <div className="row">
                <div className="col-3">
                    <h4 className="text-center mb-4">Pick Episodes</h4>
                    <InputGroup setID={setID} name="Location" total={126} />
                </div>
                <div className="col-8">
                    <div className="row">
                        <Cards page="/location/" results={results} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Location
