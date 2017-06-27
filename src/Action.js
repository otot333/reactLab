import {CALVALUE,CHANGEOPT,REVERTLOG,FETCHDATASUCCESS,SAVEHISTORY} from './ActionType';
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
    FETCHDATASUCCESS:(value) => ({ type:FETCHDATASUCCESS}),
    saveHistory()
    {      
        return () =>
        {
            fs.unlink('/data/data.json');
        }
    }
}

module.exports = action;