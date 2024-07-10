import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type TTodo = {
    id: string
    task: string,
    priority: string,
    description: string,
    isCompleted?: boolean
}

type TInitialState = {
    todos: TTodo[],
    filteredTodos: TTodo[]
}

const initialState: TInitialState = {
    todos: [],
    filteredTodos: []
}
const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<TTodo>) => {
            state.todos.push({ ...action.payload, isCompleted: false })
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            const filteredTodos = state.todos.filter((todo) => todo.id !== action.payload)
            state.todos = filteredTodos
        },
        toggleComplete: (state, action: PayloadAction<string>) => {
            if (state.filteredTodos.length === 0) {
                const todo = state.todos.find((todo) => todo.id === action.payload)
                todo!.isCompleted = !todo?.isCompleted
                state.todos.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));

            } else {
                const filteredTodo = state.filteredTodos.find((todo) => todo.id === action.payload)
                filteredTodo!.isCompleted = !filteredTodo?.isCompleted
                state.filteredTodos.sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted));

            }

        },
        updateTodo: (state, action: PayloadAction<TTodo>) => {
            const todo = state.todos.find((todo) => todo.id === action.payload.id)
            todo!.description = action.payload.description
            todo!.task = action.payload.task
            todo!.priority = action.payload.priority
        },
        filterTodo: (state, action: PayloadAction<string>) => {
            state.filteredTodos = state.todos.filter((todo) => todo.priority === action.payload)!
        }
    }
})

export const { addTodo, removeTodo, toggleComplete, updateTodo, filterTodo } = todoSlice.actions

export default todoSlice.reducer