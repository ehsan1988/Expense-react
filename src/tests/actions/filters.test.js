import {setEndDate,setStartDate,setTextFilter,sortByAmount,sortByDate  } from "../../actions/filters";
import moment from'moment'
test('should test for start Date', () => {
   const result=setStartDate(moment(0));
   expect(result).toEqual({
       type:'SET_START_DATE',
        startDate:moment(0)
   })
});

test('should test for end Date', () => {
    const result=setEndDate(moment(0));
    expect(result).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
});

test('should test setTextFilter', () => {
    const text='this a text';
    const result=setTextFilter(text);
    expect(result).toEqual({
        type:'SET_TEXT_FILTER',
        text
    })
});

test('should test for set text filter with default value', () => {
    expect(setTextFilter()).toEqual({
        type:'SET_TEXT_FILTER',
        text:''
    })
});
test('should test for sort by amount', () => {
    expect(sortByAmount()).toEqual({
        type:'SORT_BY_AMOUNT'
    })
});

test('should test for sort by date', () => {
    expect(sortByDate()).toEqual({
        type:'SORT_BY_DATE'
    })
});