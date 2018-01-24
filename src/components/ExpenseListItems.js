import React from 'react'
import {connect} from 'react-redux'
import {removeExpense} from '../actions/expenses'
import {Link} from 'react-router-dom'


const ExpenseListItem = (props) => {
    return (
        <div>
            <Link to={`/edit/${props.id}`}>
                <h2>{props.description}</h2>
            </Link>
            <p>{props.amount}-{props.createdAt}</p>
            <button onClick={
                () => {
                    props.dispatch(removeExpense({id: props.id}))
                }
            }>
                remove
            </button>
        </div>
    );
};


export default connect()(ExpenseListItem)