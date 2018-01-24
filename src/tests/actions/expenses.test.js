import { addExpense,removeExpense,editExpense } from "../../actions/expenses";
import uuid from "uuid";

test('should setup remove expense ', () => {
    const result=removeExpense({id:'123abc'});
    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123abc'
    })
});

test('should setup editExpense', () => {
    const result=editExpense('123abc',{note:'ehsan'});
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:'123abc',
        updates:{
            note:'ehsan'
        }
    })
});

test('should setup addExpense', () => {
    const result=addExpense({description:'ehsan',note:'this is a test',createdAt:0,amount:0});
    expect(result).toEqual({
       type:'ADD_EXPENSE',
        expense:{
            description:'ehsan',
        note:'this is a test',
        createdAt:0,
        amount:0,
        id:expect.any(String)
        }
    })
});

test('should setup addExpense', () => {
    const result=addExpense();
    expect(result).toEqual({
        type:'ADD_EXPENSE',
        expense:{
            description:'',
            amount:0,
            createdAt:0,
            note:'',
            id:expect.any(String)
        }
    })
});