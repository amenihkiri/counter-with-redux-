import{INCREMENT, DECREMENT} from './actionsTypes';


export function increment (paylaod){
    return {type: INCREMENT, paylaod}
}


export function decrement (paylaod){
    return {type: DECREMENT, paylaod}
}
