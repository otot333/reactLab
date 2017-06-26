import {PLUS, MINUS, CHANGEOBT} from './Actiontype';

const initState = {
    value: 0,
    opt: '+',
};

const Reducer = (state = initState, action) =>
{
    switch(action.type)
    {
        case PLUS:        
            return {
                ...state,
                value:state.value + action.val
            };
        case MINUS:
            return {
                ...state,
                value:state.value - action.val
            };
        case CHANGEOBT:
            return {
                ...state,
                opt:action.opt
            }
        default:
            return state;
    }
}

module.exports = Reducer;