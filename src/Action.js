import {PLUS,MINUS,CHANGEOBT} from './ActionType';


const action = {
    PLUS: (val) => ({type: PLUS, val}),
    MINUS: (val) => ({type: MINUS, val}),
    CHANGEOBT:(opt) =>({type:CHANGEOBT,opt})
}

module.exports = action;