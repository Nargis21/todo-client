import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {

    const { todos } = useAppSelector((state) => state.todos)
    const { filteredTodos } = useAppSelector((state) => state.todos)

    return (
        <div>
            <div className="flex justify-between mb-5">
                <AddTodoModal />
                <TodoFilter />
            </div>
            <div className="bg-primary-gradient h-full w-full p-2 rounded-xl  ">
                <div className="p-5 space-y-3 bg-white rounded-lg">
                    {
                        filteredTodos.length === 0
                            ?
                            (todos.map((todo) => <TodoCard todo={todo} />))
                            :
                            (filteredTodos.map((todo) => <TodoCard todo={todo} />))
                    }
                </div>
                {/* <div className="flex justify-center items-center bg-white p-5 rounded-md">
                    <h1 className="font-bold">You have no pending task!</h1>
                </div> */}

            </div>
        </div>
    );
};

export default TodoContainer;