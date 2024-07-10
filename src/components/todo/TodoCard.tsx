import { removeTodo, toggleComplete, TTodo } from "@/redux/features/todoSlice";
import { Button } from "../ui/button";
import { useAppDispatch } from "@/redux/hook";
import UpdateTodoModal from "./UpdateTodoModal";

type TTodoCardProps = {
    todo: TTodo
}

const TodoCard = ({ todo }: TTodoCardProps) => {

    const dispatch = useAppDispatch()

    const handleToggle = () => {
        dispatch(toggleComplete(todo.id))
    }

    return (
        <div className="flex justify-between items-center bg-white p-2 rounded-md border" >
            <input className="mr-3" onChange={handleToggle} checked={todo.isCompleted} type="checkbox" name="complete" id="complete" />
            <p className="font-semibold flex-1">{todo.title}</p>
            <div className="flex-1 flex items-center gap-2">
                <div className={`size-3 rounded-full 
                    ${todo.priority === 'High' && 'bg-red-500'}
                    ${todo.priority === 'Medium' && 'bg-yellow-500'}
                    ${todo.priority === 'Low' && 'bg-green-500'}
                    `}></div>
                <p>{todo.priority}</p>
            </div>
            <div className="flex-1">
                {
                    todo.isCompleted ? <p className="text-green-500">Done</p> : <p className="text-red-500">Pending</p>
                }
            </div>

            <p className="flex-[2]">{todo.description}</p>
            <div className="space-x-3">
                <Button onClick={() => dispatch(removeTodo(todo.id))} className="bg-red-500">
                    <svg className="size-4" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
                    </svg>
                </Button>
                <UpdateTodoModal todo={todo} />
            </div>
        </div>
    );
};

export default TodoCard;