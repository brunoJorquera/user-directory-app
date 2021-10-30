import React, { Component } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { MdArrowForwardIos } from 'react-icons/md'
import Functionality from './Functionality'
import { data } from './data'
import Edit from './Edit'

export default class Structure extends Component {
    constructor(props){
        super(props)
        this.state={
            cardNumber: 1,
            editing: false
        }
        this.handleEditing= this.handleEditing.bind(this)
    }

    handleEditing() {
        this.setState({ editing: false })
    }

    render() {

        let editing = this.state.editing

        let cardNumber = this.state.cardNumber
        
        if(cardNumber < data.length - data.length + 1){
            cardNumber = 1;
        } else if(cardNumber > data.length){
            cardNumber = data.length
        }

        
        return (
            <div className="Structure">
                <header>
                    <h3 className="home">Home</h3>
                </header>
                <div className="container">
                    <div className="powder">

                        { editing ? <Edit
                         cardNumber={cardNumber}
                          handleEditing={ this.handleEditing }
                           />  : 
                           <Functionality cardNumber={cardNumber} /> }

                        <div className="controls">
                            <h3
                            className="previous"
                            onClick={() => this.setState({ cardNumber: cardNumber - 1 })}
                            > <MdArrowBackIosNew /> Previous</h3>
                            <div className="btn-container">
                                <button
                                className="edit-btn"
                                onClick={() => {this.setState({editing: true})}}
                                >Edit</button>

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
