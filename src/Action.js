import {CALVALUE,CHANGEOPT} from './ActionType';


const action = {
    CALVALUE: (val) => ({type: CALVALUE, val}),
    CHANGEOPT:(opt) => ({type: CHANGEOPT, opt})
}

module.exports = action;