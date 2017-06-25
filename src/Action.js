import {PLUS,MINUS} from './ActionType';


const action = {
    PLUS: () => ({type: PLUS}),
    MINUS: () => ({type: MINUS})
}

module.exports = action;