import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

interface User {
    email: string,
    userName: string
}

const Admin = () => {

    const { data: users, isLoading, refetch } = useQuery(['users'], () =>
        fetch(`http://localhost:5000/user`)
            .then(res => res.json())
    )

    if (isLoading) {
        return <Loading />
    }

    refetch()

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SR</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user: User, index: any) => <>
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.userName}</td>
                                    <td>{user.email}</td>
                                    <td>Member</td>
                                </tr>
                            </>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Admin;