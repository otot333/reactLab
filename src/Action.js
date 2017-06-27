import {CALVALUE,CHANGEOPT,REVERTLOG,FETCHDATASUCCESS} from './ActionType';
import 'whatwg-fetch';

const action = {
    CALVALUE: (val) => ({type: CALVALUE, val}),
    CHANGEOPT:(opt) => ({type: CHANGEOPT, opt}),
    REVERTLOG : (opt,val,index) => ({type:REVERTLOG, opt, val, index}),
    fetchHistory(){
        return (dispatch) => {
            fetch('/data/data.json')
            .then((response)=>response.json())
            .then((data)=>dispatch({
                type:FETCHDATASUCCESS,
                value: data.value
            }))
        }
    },
    FETCHDATASUCCESS:(value) => ({ type:FETCHDATASUCCESS})
}

module.exports = action;