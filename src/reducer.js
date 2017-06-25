import {PLUS,MINUS} from './Actiontype';

const Reducer = (state = 0, value , action) =>
{
    switch(action.Type)
    {
        case PLUS:
            return state + value;
        case MINUS:
            return state - value;

    }

}

module.exports = Reducer;