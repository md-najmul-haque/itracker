import MyAllTask from "./MyAllTask";
import { Task } from "../../../types/task.type";
import Loading from "../../Shared/Loading/Loading";
import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const MyTask = () => {
    const [user, loading] = useAuthState(auth)
    const email = user?.email;

    const { data: tasks, isLoading, refetch } = useQuery(['tasks'], async () =>
        await fetch(`https://itracker-server.vercel.app/getMyTask?email=${email}`)
            .then(res => res.json())
    )

   
    refetch();

    if (loading || isLoading) {
        return <Loading />
    }

    return (
        <div className="bg-white shadow px-4 md:px-10 pt-4 overflow-y-auto">
            <table className="w-full whitespace-nowrap">
                <thead>
                    <tr className="h-16 w-full font-semibold text-left text-sm leading-none text-gray-800">
                        <th className="pl-12">Task Name</th>
                        <th className="pl-12">Task Description</th>
                        <th className="pl-20">Stage</th>
                        <th className="pl-20">Priority</th>
                        <th className="pl-16">Status</th>
                        <th className="pl-20">Due Date</th>                        
                    </tr>
                </thead>

                {
                    tasks.map((task: Task) => <MyAllTask key={task._id} task={task} />)
                }

            </table>
        </div>
    );
};

export default MyTask;