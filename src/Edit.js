import React, {useState } from 'react'
import { data } from './data'

export default function Edit( { setEditing , card } ) {
    

    return (
        <div className="content">
               
                    <div className="divy">
                        <form 
                        
                        onSubmit={(e) => {
                            e.preventDefault()
                            setEditing(false)
                        }}>
                            <div className="formy">
                                <div className="lefty"> 
                                
                                    <label className="inner"> First Name <input type="text" placeholder={card.name.first} onChange={(e) => data[card.id - 1].name.first = e.target.value} /></label>
                                    
                                    <label className="inner"> Last Name <input type="text" placeholder={card.name.last} onChange={(e) => data[card.id - 1].name.last = e.target.value } /></label>
                                    
                                    <label className="inner"> City <input type='text' placeholder={card.city} onChange={(e) => data[card.id - 1].city = e.target.value } /></label>

                                    <label className="inner"> Country <input type='text' placeholder={card.country} onChange={(e) => data[card.id - 1].country = e.target.value } /></label>

                                </div>

                                <div className="righty">

                                <label className="inner"> Job Title <input type='text' placeholder={card.title} onChange={(e) => data[card.id - 1].title = e.target.value } /></label>
                                
                                <label className="inner"> Employeer <input type='text' placeholder={card.employer} onChange={(e) => data[card.id - 1].employer = e.target.value } /></label>

                                    <label className="listy"> Add Favorites Movies 

                                    <input type="text" placeholder={card.favoriteMovies[0]} 
                                        onChange={(e) => data[card.id - 1].favoriteMovies[0] = e.target.value }
                                    />
                                    
                                    <input type="text" placeholder={card.favoriteMovies[1]}
                                        onChange={(e) => data[card.id - 1].favoriteMovies[1] = e.target.value }
                                    />
                                    
                                    <input type="text" placeholder={card.favoriteMovies[2]} 
                                        onChange={(e) => data[card.id - 1].favoriteMovies[2] = e.target.value }
                                    />

                                    </label>

                                </div>
                            </div>
                        <button type="submit">Save</button>
                    </form>
                </div>
        </div>
    )
}
