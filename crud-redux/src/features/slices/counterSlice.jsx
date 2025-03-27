import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if (state.value > 0) {
                state.value -= 1
            }
        },
        addition: (state, action) => {
            state.value += action.payload
        },
        subtraction: (state, action) => {
            const number = state.value -= action.payload
            state.value = number < 0 ? 0 : number
        },
        // resetCount: (state) => {
        //     state.value = 0
        // },
        resetCount: () => {
            return initialState
        }
    },
})

export const { increment, decrement, addition, subtraction, resetCount } = counterSlice.actions

export default counterSlice.reducer