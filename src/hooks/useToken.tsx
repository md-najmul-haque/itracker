import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import Loading from '../Pages/Shared/Loading/Loading';

type useTokenProps = {
    user: {
        displayName: string,
        email: string
    }
}
// interface createUser {
//     userName: string,
//     email: string
// }

const useToken = (user: useTokenProps) => {
    const [token, setToken] = useState('')

    const createUser = {
        userName: user?.user?.displayName,
        email: user?.user?.email
    }

    useEffect(() => {

        fetch('https://dry-eyrie-76820.herokuapp.com/signup',
            {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(createUser)
            })
            .then(res => res.json())
            .then(data => console.log('data inside use token', data))


    }, [user])

    // const { data: token, isLoading, error, refetch } = useQuery(['token'], () =>
    //     fetch('https://dry-eyrie-76820.herokuapp.com/signup')
    //         .then(res => res.json(createUser))
    // )

    // if (isLoading) {
    //     return <Loading />
    // }

    // refetch()

    return [token];
};

export default useToken;