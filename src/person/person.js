import React from 'react';
import './person.css'


const person = (props) => {

        return (
                <div className="container">
                        <div className="row">
                                <div className="col">From :<label type="text" onChange={props.onChange} value={props.min}>{props.min}</label></div>
                                <div className="col">To :<label type="text" onChange={props.onChange} value={props.max}>{props.max}</label></div>
                        </div>
                </div>
        )
}



export default person;