import React from 'react'
import { data } from './data'

export default function Functionality(props) {

    return (
        <div className="obama">
            {
                data.filter(item => item.id === props.cardNumber)
                .map(item =>
                    <div key={item.id}> 
                        <div className="id-check">
                            <h2>{item.id}/{data.length}</h2>
                        </div>
                        <h2 className="nomen">{item.name.first} {item.name.last}</h2>
                        <div className="emp">
                            <h3>From:<span> {item.city}, {item.country}</span></h3>
                            <h3>Job Title:<span> {item.title}</span> </h3>
                            <h3>Employer:<span> {item.employer}</span> </h3>
                        </div>
                        <div className="movie">
                        <h3>Favorite Movies:</h3>
                            <ol>
                                <li >{item.favoriteMovies[0]}</li>
                                <li >{item.favoriteMovies[1]}</li>
                                <li >{item.favoriteMovies[2]}</li>
                            </ol>
                        </div>
                    </div>
            )}
        </div>
    )
}



