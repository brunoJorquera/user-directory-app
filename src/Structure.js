import React, { useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import Functionality from './Functionality';
import {data } from './data'
import Edit from './Edit';

const Structure = () => {

    //variables 
    let [cardNumber, setCardNumber] = useState(0);

    const [editing, setEditing] = useState(false)

    const [cards, setCards] = useState(data)


    //stop counter going below 1 and above 25
    if(cardNumber < cards.length - cards.length + 1) {
        cardNumber = 0;
    } else if(cardNumber + 1 > cards.length) {
        setCardNumber((prevCardNumber) => prevCardNumber - 1)
    }

    //DELETE CARD
    const deleteCard = () => {
        const cardsCopy = [...cards]
        cardsCopy.splice(cardNumber, 1);
        setCards(cardsCopy)
    }

 
    return (
      <div className="App">
        <header>
            <h3 className="brand"> Home </h3>
        </header>
        <div className='container'>
            <div className="powder">

                {editing ? <Edit cardNumber={cardNumber} setEditing={setEditing} card={cards[cardNumber]} />  :
                 <Functionality className="display" cardNumber={cardNumber} card={cards[cardNumber]} cards={cards} /> }


                
                <div className="controls">
                    <h3
                    className='previous'
                    onClick={() => setCardNumber(cardNumber - 1)}
                    > <MdArrowBackIosNew /> Previous </h3>
                    <div className='control-btns'>
                        <button
                        className='edit-btn'
                        onClick={() => setEditing(true)}
                        >Edit</button>
                        <button
                        className="delete-btn"
                        onClick={deleteCard}
                        >Delete</button>
                        <button>New</button>
                    </div>
                    <h3 
                    className='next'
                    onClick={() => setCardNumber(cardNumber+1) }
                    > Next <MdArrowForwardIos className="arrow"/></h3>
                </div>
            </div>
        </div>
      </div>
    );
  }
  
  export default Structure;