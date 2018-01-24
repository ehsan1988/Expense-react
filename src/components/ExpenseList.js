import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItems'
import selectExpense from '../selectors/expenses'

const ExpenseList = (props) => {
    return (
        <div>
            {props.expenses.map((expense) => {
                return <ExpenseListItem {...expense} key={expense.id}/>
            })}
            <h2>Expense List</h2>
            {props.expenses.length}
        </div>
    );
};

/*const ConnectStateToStore=connect((state)=>{
    return {
        // name:'ehsan'
        expenses:state.expenses
    }
})(ExpenseList);*/
// export default ExpenseList;
// export default ConnectStateToStore;
/*const mapStateToStore=(state)=>{
    return {
        // name:'ehsan'
        expenses:state.expenses
    }
};*/


const mapStateToStore = (state) => {
    return {
        expenses: selectExpense(state.expenses, state.filters)
}
};

export default connect(mapStateToStore)(ExpenseList);