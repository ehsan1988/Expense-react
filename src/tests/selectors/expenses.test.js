import selectExpense from "../../selectors/expenses";
import moment from "moment";
const expenses = [{
    id: '1',
    description: 'gum',
    note: '',
    createdAt: 0,
    amount: 0
},{
    id: '2',
    description: 'rent',
    note: 'this is test rent',
    createdAt: 1000,
    amount: 400
},{
    id: '3',
    description: 'water',
    note: '',
    createdAt: moment(0),
    amount: 1000
} ];
test('should select expense', () => {
    const filters={
        text:'e',
        sortBy:'date',
        startDate:undefined,
        endDate:undefined
    };
    const result = selectExpense(expenses,filters);
    expect(result).toEqual([expenses[1],expenses[2]])
});

test('should filter by startDate', () => {
    const filters={
    text:'',
    sortBy:'date',
    startDate:moment(0),
    endDate:undefined
    };
    const result=selectExpense(expenses,filters);
    expect(result).toEqual([expenses[2],expenses[0],expenses[1]])
});