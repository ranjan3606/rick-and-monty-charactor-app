import React from 'react'
import styles from './Cards.css'
import {Link} from 'react-router-dom'


const Cards = ({ results, page }) => {
    let display;
    if (results) {
        display = results.map(x => {
            let { id, name, image, location, status } = x;
            return (
                <Link
                    to={`${page} ${id}`}
                    key={id} 
                    className="col-4 position-relative"
                >
                    <div className={{ border: '2px solid blue' }}>
                        <img src={image} alt="" className="img-fluid" />
                        <div className="content">
                            <div className="fs-4 fs-bold mb-4">{name}</div>
                            <div className="">
                                <div className="fs-6">Last Location</div>
                                <div className="fs-5">{location.name}</div>
                            </div>
                        </div>
                    </div>
                    {(() => {
                        if (status === "Dead") {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>
                            )
                        }
                        else if (status === "Alive") {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>
                            )
                        }
                        else {
                            return (
                                <div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}</div>
                            )
                        }
                    })()}

                </Link>
            )
        })
    }
    else {
        display = "display is not found !"
    }

    return <>{display}</>
}

export default Cards;