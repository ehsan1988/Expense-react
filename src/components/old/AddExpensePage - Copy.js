import React from 'react';
import {connect} from 'react-redux'
import {addExpense} from "../../actions/expenses";

const AddExpensePage = (props) => (
    <div>
        <form onSubmit={
            (e) => {
                e.preventDefault();
                const description = e.target.description.value;
                const note = e.target.note.value;
                const amount = e.target.amount.value;
                const createdAt = e.target.createdAt.value;
                 props.dispatch(addExpense({description: description, note: note,amount:amount,createdAt}));
            }
        }
        >
            <input type="text" name='description' placeholder='description'/><br/>
            <input type="text" name='note' placeholder='note'/><br/>
            <input type="text" name='amount' placeholder='amount'/><br/>
            <input type="text" name='createdAt' placeholder='createdAt'/><br/>
            <button> add expense</button>
        </form>
    </div>
);
const mapStateToAdd = (state) => {
    return {
        expenses: state.expenses
    }
};

// export default AddExpensePage;
export default connect(mapStateToAdd)(AddExpensePage)