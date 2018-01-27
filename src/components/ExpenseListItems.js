import React from 'react'
import {connect} from 'react-redux'
import {startRemoveExpens} from '../actions/expenses'
import {Link} from 'react-router-dom'
import moment from "moment";


const ExpenseListItem = (props) => {
    return (
        <div>
            <Link to={`/edit/${props.id}`}>
                <h2>{props.description}</h2>
            </Link>
            <p>{props.amount}__
            {moment(props.createdAt).format("MMMM Do, YYYY")}
            </p>
            <button onClick={
                () => {
                    props.dispatch(startRemoveExpens({id: props.id}))
                }
            }>
                remove
            </button>
        </div>
    );
};


export default connect()(ExpenseListItem)