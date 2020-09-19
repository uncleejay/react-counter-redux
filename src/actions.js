// Action constants
export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

// Action creators
// a function that returns an action object
// import and dispatch in the counter component

export const increment = () => (
    {type: INCREMENT}
)

export const decrement = () => (
    {type: DECREMENT}
)

export const reset = () => (
    {type: RESET}
)



