import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardDetails = () => {
    let { id } = useParams()
    let [fetchData, updateFetchData] = useState([]);

    let { name, image, location, origin, gender, species, status, type } = fetchData;
    console.log(fetchData)

    let api = `https://rickandmortyapi.com/api/character/${id}`
    useEffect(() => {
        (async function () {
            let data = await fetch(api).then((res) => res.json())
            updateFetchData(data)
        })()
    }, [api])


    return (
        <div className="container d-flex justify-content-center mt-5">
            <div className="d-flex flex-column gap-3">
                <h2 className="">{name}</h2>
                <img src={image} alt="" className="img-fluid" />

                {(() => {
                    if (status === "Dead") {
                        return <div className="badge bg-danger fs-5">{status}</div>
                    }
                    else if (status === "Alive") {
                        return <div className="badge bg-success fs-5">{status}</div>
                    }
                    else {
                        return <div className="badge bg-secondary fs-5">{status}</div>
                    }
                })()}
                <div className="content">
                    <div className="d-flex flex-column">
                        <div className="">
                            <span className="fw-bold">Gender : </span>
                            {gender}
                        </div>
                        <div className="">
                            <span className="fw-bold">Type : </span>
                            {type === "" ? "Unknown" : type}
                        </div>
                        <div className="">
                            <span className="fw-bold">Location : </span>
                            {location?.name}
                        </div>
                        <div className="">
                            <span className="fw-bold">Origin : </span>
                            {origin?.name}
                        </div>
                        <div className="">
                            <span className="fw-bold">Species : </span>
                            {species}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardDetails
