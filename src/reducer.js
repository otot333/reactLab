import {CALVALUE, CHANGEOPT, PUSHLOG, REVERTLOG} from './Actiontype';

const initState = {
    value: 0,
    opt: '+',
    history : []
};

const Reducer = (state = initState, action) =>
{    
    
    switch(action.type)
    {
        case CALVALUE:   
            state.history.push({opt:state.opt,val:action.val});
            if(state.opt === '+')
            {
                return {
                    ...state,
                    value:state.value + action.val,
                    history:state.history
                };
            }
            else
            {
                return {
                    ...state,
                    value:state.value - action.val,
                    history:state.history
                };
            }

        case CHANGEOPT:        
            return {
                ...state,
                opt:action.opt
            }
        case REVERTLOG:
            const history = state.history.filter((value,key)=>{
                return key != action.index
            });

            if(action.opt === "+")
            {
                return{
                    ...state,
                    value:state.value - action.val,
                    history,
                }
            }
            else{
                return{
                    ...state,
                    value:state.value + action.val,
                    history:state.history
                }
            }

        default:
            return state;
    }
}

module.exports = Reducer;