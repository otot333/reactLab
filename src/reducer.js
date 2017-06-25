import {PLUS,MINUS} from './Actiontype';

const Reducer = (state = 0, action) =>
{
    switch(action.type)
    {
        case PLUS:
            return state;
        case MINUS:
            return state;

    }

}

module.exports = Reducer;