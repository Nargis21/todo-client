import { FormEvent, useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DialogClose } from "@radix-ui/react-dialog";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useUpdateTodoMutation } from "@/redux/api/api";
import { TTodo } from "./TodoCard";

const UpdateTodoModal = ({ todo }: { todo: TTodo }) => {

    const [task, setTask] = useState(todo.title)
    const [description, setDescription] = useState(todo.description)
    const [priority, setPriority] = useState(todo.priority)

    const [updateTodo] = useUpdateTodoMutation()

    const options = {
        id: todo._id,
        data: {
            title: task,
            description,
            priority,
            isCompleted: todo.isCompleted
        }
    }
    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        updateTodo(options)
    }
    return (

        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-[#5C53FE]">
                    <svg className="size-4" data-slot="icon" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path>
                    </svg>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Task</DialogTitle>
                    <DialogDescription>
                        Update your tasks that need to finish.
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={onSubmit}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="task" className="text-right">
                                Task
                            </Label>
                            <Input
                                defaultValue={todo?.title}
                                onBlur={(e) => setTask(e.target.value)}
                                id="task"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Description
                            </Label>
                            <Input
                                defaultValue={todo?.description}
                                onBlur={(e) => setDescription(e.target.value)}
                                id="description"
                                className="col-span-3"
                            />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="description" className="text-right">
                                Priority
                            </Label>
                            <Select defaultValue={todo?.priority} onValueChange={(e) => setPriority(e)}>
                                <SelectTrigger className="w-[275px]">
                                    <SelectValue placeholder="Select Priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value="High">High</SelectItem>
                                        <SelectItem value="Medium">Medium</SelectItem>
                                        <SelectItem value="Low">Low</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className="flex justify-end">
                        <DialogClose asChild >
                            <Button className="bg-primary-gradient font-semibold" type="submit">Update Now</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>

    );
};

export default UpdateTodoModal;