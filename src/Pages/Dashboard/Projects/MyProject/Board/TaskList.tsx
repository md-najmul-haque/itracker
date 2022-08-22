import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AiOutlineCloseSquare } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

type List = {
    id: string,
    title: string,
    cards: {
        task: string
    }[]

}


const TaskList = () => {
    const [open, setOpen] = useState(false)

    const { data: lists, isLoading, error, refetch } = useQuery(['lists'], () =>
        fetch('http://localhost:5000/getList')
            .then(res => res.json())
    )
    refetch();


    return (<div className='flex flex-row'>
        {
            lists?.map((list: List) => {
                const cards = list.cards
                return <div className="w-80 ml-5 border-4 border-secondary bg-secondary p-2">
                    <div>
                        {
                            open ?
                                (<div className=''>
                                    <input className='bg-secondary-focus border-none py-1 w-full' onBlur={() => setOpen(!open)} value={'To Do'} />
                                </div>) :
                                (<div className='flex justify-between items-center px-1'>
                                    <h2 className='pr-5 font-bold text-xl' onClick={() => { setOpen(!open) }}>{list.title}</h2>
                                    <BsThreeDotsVertical />
                                </div>)
                        }
                    </div>
                    <div>
                        {
                            cards.map((card, index) => {
                                return <p key={index} className="bg-white  shadow-md p-2 my-2">{card?.task}</p>
                            })
                        }

                    </div >
                    <div>
                        {
                            open ? <div>
                                <textarea onBlur={() => setOpen(false)} className='mb-2 w-full p-1' placeholder='Enter your task description here' />
                                <div className='flex items-center'>
                                    <button onClick={() => setOpen(false)} className='btn-primary btn-sm'>Add Card</button>
                                    <AiOutlineCloseSquare onClick={() => setOpen(false)} className='text-2xl' />
                                </div>
                            </div> : ''
                        }
                        <p onClick={() => setOpen(!open)} className='hover:bg-secondary-focus p-1'>+ Add Card</p>
                    </div>

                </div>

            })
        }

    </div>
    );
};

export default TaskList;