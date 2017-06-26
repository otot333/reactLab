import {CALVALUE, CHANGEOPT} from './Actiontype';

const initState = {
    value: 0,
    opt: '+',
};

const Reducer = (state = initState, action) =>
{
    switch(action.type)
    {
        case CALVALUE:   
            if(state.opt === '+')
            {
                return {
                    ...state,
                    value:state.value + action.val
                };
            }
            else
            {
                return {
                    ...state,
                    value:state.value - action.val
                };
            }

        case CHANGEOPT:        
            return {
                ...state,
                opt:action.opt
            }
        default:
            return state;
    }
}

module.exports = Reducer;