
import {INCREMENT,DECREMENT} from './action-types'

/**
 * including all action creator
 */

 //increment
export const increment = (number) => (
    {type:INCREMENT, data:number}
)

//decrement
export const decrement = (number) => (
    {type:DECREMENT, data:number}
)

export const incrementAsync = (number) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment(number))
        },1000)
    }
}