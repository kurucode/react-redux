import { connect } from 'react-redux'
import Counter from "../component/counter";
import {increment, decrement, reset} from '../actions'

const mapStateToPros = (state) => {
    return {
        counter_num: state
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset())
    };
};

export default connect(mapStateToPros, mapDispatchToPros)(Counter)
