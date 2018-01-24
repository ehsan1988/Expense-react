import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter, sortByAmount, sortByDate} from '../actions/filters'

const ExpenseListFilter = (props) => (
    <div>
        <input
            type="text"
            value={props.filters.text}
            onChange={(e) => {
                // console.log(e.target.value);
                props.dispatch(setTextFilter(e.target.value))
            }}
        />
        <select
            value={props.filters.sortBy}
            onChange={(e)=>{
                if(e.target.value==='date'){
                    props.dispatch(sortByDate())
                }else{
                    props.dispatch(sortByAmount())
                }
            }}
        >
            <option value="date">date</option>
            <option value="amount">amount</option>
        </select>
    </div>
);
const mapStateToStore = (state) => ({
    filters: state.filters
});

export default connect(mapStateToStore)(ExpenseListFilter);
// export default ExpenseListFilter

