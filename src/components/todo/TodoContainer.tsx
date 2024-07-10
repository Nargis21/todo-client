import AddTodoModal from "./AddTodoModal";
import TodoCard, { TTodo } from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

const TodoContainer = () => {

    const [priority, setPriority] = useState('')
    const { data: todos } = useGetTodosQuery(priority)

    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal />
                <TodoFilter setPriority={setPriority} />
            </div>
            <div className="bg-primary-gradient h-full w-full p-2 rounded-xl  ">
                {
                    todos?.data?.length === 0 ?
                        <div className="flex justify-center items-center bg-white p-5 rounded-md">
                            <h1 className="font-bold">You have no pending task!</h1>
                        </div>
                        :
                        <div className="p-5 space-y-3 bg-white rounded-lg">
                            {
                                todos?.data?.map((todo: TTodo) => <TodoCard todo={todo} />)
                            }
                        </div>
                }
            </div>
        </div>
    );
};

export default TodoContainer;