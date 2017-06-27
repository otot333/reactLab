import {CALVALUE, CHANGEOPT, PUSHLOG, REVERTLOG, FETCHDATASUCCESS} from './Actiontype';

const initState = {
    value: 0,
    opt: '+',
    history : []
};

const Reducer = (state = initState, action) =>
{    
    let history = state.history;
    switch(action.type)
    {
        case CALVALUE:   
            history.push({opt:state.opt,val:action.val});
            if(state.opt === '+')
            {
                return {
                    ...state,
                    value:state.value + action.val,
                    history:history
                };
            }
            else
            {
                return {
                    ...state,
                    value:state.value - action.val,
                    history:history
                };
            }

        case CHANGEOPT:        
            return {
                ...state,
                opt:action.opt
            }
        case REVERTLOG:
            history = state.history.filter((value,key)=>{
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
                    history,
                }
            }
        case FETCHDATASUCCESS:
            const logHistory = action.value;
            let result = 0;
            logHistory.map((val,index) => {
                if(val.opt === "+")
                {
                    result = result + val.val;
                }
                else
                {
                    result = result - val.val;
                }
            });
            return {
                ...state,
                history:logHistory,
                value:result
            }
        default:
            return state;
    }
}

module.exports = Reducer;