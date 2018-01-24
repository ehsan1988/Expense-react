import React from 'react'
import moment from "moment";
import {SingleDatePicker} from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// const date = moment();
// console.log(date.format());
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: '',
            buttonText: props.expense ? 'Edit Expense':'Add Expense'
        };
    }


    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => {
            return {description}
        })
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => {
            return {note}
        })
    };
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (amount.match(/^\d*(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };
    onDateChange = (createdAt) => {
        this.setState(() => ({createdAt}))
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}))
    };

    onSubmitForm = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({error: 'please complete empty fields'}));
        }
        else {
            this.setState(() => {
                return {error: ''}
            });
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf()
            })
        }
    };

    render() {
        return (
            <div>

                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmitForm}>
                    <input
                        type="text"
                        placeholder='description'
                        autoFocus
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    /><br/>
                    <input
                        type="text"
                        placeholder='Amount'
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    /><br/>

                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <br/>
                    <textarea
                        placeholder='add some notes '
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea><br/>
                    <button>{this.state.buttonText}</button>
                </form>
            </div>
        );
    }
}