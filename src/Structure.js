import React, { Component } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import Functionality from './Functionality'

export default class Structure extends Component {
    constructor(props){
        super(props)
        this.state={
            cardNumber: 1
        }
    }

    render() {

        let cardNumber = this.state.cardNumber
        
        return (
            <div className="Structure">
                <header>
                    <h3 className="home">Home</h3>
                </header>
                <div className="container">
                    <div className="powder">
                        <Functionality cardNumber={cardNumber} />
                        <div className="controls">
                            <h3
                            className="previous"
                            onClick={() => this.setState({ cardNumber: cardNumber - 1 })}
                            > <MdArrowBackIosNew /> Previous</h3>
                            <div className="btn-container">
                                <button>Edit</button>
                                <button>Delete</button>
                                <button>New</button>
                            </div>
                            <h3 className="next"
                            onClick={() => this.setState({ cardNumber: cardNumber + 1 })}
                            >Next <MdArrowForwardIos /> </h3>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
