import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from "./ExpenseForm";
import {editExpense} from "../actions/expenses";

const EditExpensePage = (props) => {
    return (
        <div>
            {/*Editing the expense with id of {props.match.params.id}*/}
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    // console.log('upated', expense)
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
                }}
            />
        </div>
    );
};


const mapStateToStore = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        })
    }
};
// export default EditExpensePage;
export default connect(mapStateToStore)(EditExpensePage)