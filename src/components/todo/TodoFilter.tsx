import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useAppDispatch } from "@/redux/hook";
import { filterTodo } from "@/redux/features/todoSlice";

const TodoFilter = () => {

    const dispatch = useAppDispatch()

    const handleFilter = (e: string) => {
        dispatch(filterTodo(e))
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="bg-primary-gradient font-semibold">Filter</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Filter by Priority</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup onValueChange={(e) => handleFilter(e)}>
                    <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default TodoFilter;