import {PLUS,MINUS} from './Actiontype';

const Reducer = (state = 0, action) =>
{
    switch(action.type)
    {
        case PLUS:        
            return state + 1;
        case MINUS:
            return state - 1;
        case defaultStatus:
            return state;

    }

}

module.exports = Reducer;