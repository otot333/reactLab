import {CALVALUE,CHANGEOPT,REVERTLOG} from './ActionType';


const action = {
    CALVALUE: (val) => ({type: CALVALUE, val}),
    CHANGEOPT:(opt) => ({type: CHANGEOPT, opt}),
    REVERTLOG : (opt,val,index) => ({type:REVERTLOG, opt, val, index})
}

module.exports = action;