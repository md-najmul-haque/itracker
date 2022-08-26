import React, { useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import control from '../../../src/Assets/image/control.png'
import CustomLink from '../modalInfo/CustomLink';
import Loading from '../../Pages/Shared/Loading/Loading';
import { useSelector } from "react-redux";
import { useQuery } from '@tanstack/react-query';
import { useDispatch } from 'react-redux';
import { setCurrentBoards } from '../../global-state/actions/reduxActions';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
// import Button from '@material-ui/core/Button';


const Workspace = () => {
    const { shortname } = useParams()
    const [open, setOpen] = useState(null);
    const [closeB, setCloseB] = useState(false);
    const [firstLetter, setFirstLetter] = useState('')
    const workspaces = useSelector(state => state.workspace)
    const currentWorkspace = workspaces?.filter(workspaces => workspaces.shortname === shortname)
    // console.log(currentWorkspace)

    const [close, setClose] = useState(false);
    // console.log(anchorEl);
    const [user, loading, error] = useAuthState(auth);
    const dispatch = useDispatch()


    useEffect(() => {
        const dataJson = localStorage.getItem("bData");
        if (JSON.parse(dataJson)) {
            setOpen(JSON.parse(dataJson));
        }
    }, [])

    const sidebarOpen = () => {
        setOpen(!open)
        localStorage.setItem('bData', JSON.stringify(!open))
    }


    const boards = useQuery(['boards', currentWorkspace[0]?._id], () => fetch(`https://morning-coast-54182.herokuapp.com/board/w/${currentWorkspace[0]?._id}`).then(res => res.json()))
    console.log(boards)
    useEffect(() => {
        if (currentWorkspace[0]?.title) {
            const x = currentWorkspace[0]?.title;
            const nameparts = x?.split(" ");
            const initials =
                nameparts[0]?.charAt(0)?.toUpperCase()
            setFirstLetter(initials)
        }
    }, [currentWorkspace])

    useEffect(() => {
        if (boards?.data) {
            dispatch(setCurrentBoards(boards?.data))
        }
    }, [boards?.data, dispatch])

    if (boards.isLoading) {
        return <Loading></Loading>;
    }
    // console.log(boards);

    const handleDelete = async id => {
        console.log(id);
        const res = await axios.delete(`https://morning-coast-54182.herokuapp.com/board/b/${id}`)
        console.log(res);
        if (res.status === 200) {
            boards.refetch();
        }
    }

    const menusItem = [
        {
            path: `/${shortname}`,
            name: "Task",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
          </svg>
          
        },

        {
            path: `/${shortname}/members`,
            name: "Members",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
          </svg>
          
        },
        {
            path: `/${shortname}/account`,
            name: "Settings",
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
          </svg>
          
        },
        {
            path: `/${shortname}/account`,
            name: "Share Task",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
          </svg>
          
          
        },
        {
            path: `/${shortname}/account`,
            name: "Chart Task",
            icon:<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.651a3.75 3.75 0 010-5.303m5.304 0a3.75 3.75 0 010 5.303m-7.425 2.122a6.75 6.75 0 010-9.546m9.546 0a6.75 6.75 0 010 9.546M5.106 18.894c-3.808-3.808-3.808-9.98 0-13.789m13.788 0c3.808 3.808 3.808 9.981 0 13.79M12 12h.008v.007H12V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>
          
          
        },
        {
            path: `/${shortname}/account`,
            name: "Scan Task",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
          </svg>
          
          
        },
        {
            path: `/${shortname}/account`,
            name: "Client Task",
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
          </svg>
          
          
        },
    ]



    return (


        <div className='flex'>

            <div style={{ backgroundColor: '#002147' }} className={`${open ? "w-72" : "w-16 "} p-5 pt-4  duration-300 h-screen relative`}>

                <img style={{ border: '#081A51' }}
                    src={control}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={sidebarOpen}
                    alt=""
                />
                <div className="flex gap-x-4 items-center mt-2">
                    <div className="h-8 p-2 w-8  border-2  flex justify-center items-center cursor-pointer duration-500">
                        <span
                            title={currentWorkspace[0]?.title}
                            className="text-white  font-bold block "
                        >
                            {firstLetter}
                        </span>
                    </div>
                    <h1 className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                        }`}>{currentWorkspace[0]?.title}</h1>
                </div>
                <ul className={`pt-6 mr-8 w-full`}>
                    {
                        menusItem.map((menu, index) => (
                            <CustomLink to={menu.path} key={index} className={`flex my-2  workspace-sidebar-toggle-button py-2 rounded-md cursor-pointer   text-gray-300 text-sm items-center gap-x-4 `}>
                                <div  >{menu.icon}</div>
                                <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.name}</span>
                            </CustomLink>
                        ))
                    }

                    <div className=' my-6'>
                        <h4 className={`${!open && "hidden"} mx-auto text-sm text-white font-bold origin-left duration-200`}> {user?.displayName} Your WorkSpace</h4>
                    </div>
                    {
                        boards?.data?.map((item, index) => (
                            <CustomLink to={`/${shortname}/${item._id}`} key={index} className={`flex justify-between  py-2 rounded-md cursor-pointer   text-gray-300 text-sm items-center gap-x-2 workspace-sidebar-toggle-button mb-2  w-full`}>

                                <div className='flex justify-center items-center '>
                                    <div >
                                        <button className="h-6  w-6  border-2  flex justify-center items-center cursor-pointer duration-500" style={{ backgroundImage: `url(${item.boardBg})` }} >

                                            <span >{item.title?.charAt(0).toUpperCase()}</span>{" "}
                                        </button>
                                    </div>
                                    <span className={`${!open && "hidden"} ml-2 origin-left duration-200`}>{item.title}</span>
                                </div>


                                {/* all board */}

                                <div className='flex justify-center items-center px-2'>
                                    <div className={`${!open && "hidden"}  origin-left duration-200 navbar-end`}  >

                                        <div className="dropdown ">
                                            <label

                                                tabIndex="0"

                                            >
                                                <div onClick={() => setClose(!close)} className="flex justify-center items-center">
                                                    <span
                                                        className=" block "
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </label >
                                            {
                                                close &&
                                                <ul
                                                    style={{ width: '280px' }}
                                                    tabIndex="0"
                                                    className="mt-3 text-gray-500  shadow menu  dropdown-content bg-base-100 rounded w-52"
                                                >
                                                    {
                                                        !closeB &&
                                                        <div className='flex justify-between items-center   mb-2 btn-sm w-full mt-2'>
                                                            <small className="mt-2 text-center text-sm   btn-sm w-full  ">
                                                                {item.title}

                                                            </small>
                                                            <small onClick={() => setClose(!close)} className="px-2">X</small>
                                                        </div>
                                                    }
                                                    <hr />



                                                    <li onClick={() => setCloseB(!closeB)}>
                                                        <div className="flex justify-between items-center   mb-2 btn-sm w-full mt-2 ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                                            </svg>
                                                            <small className="mt-2 text-center text-sm   btn-sm w-full " >
                                                                Delete board
                                                            </small>
                                                        </div>

                                                        {
                                                            closeB &&
                                                            <div className='flex flex-col'>

                                                                <p>If you delete board, it will be deleted permanently</p>
                                                                <button onClick={() => handleDelete(item._id)} className='btn w-full btn-sm btn-warning'>Delete</button>
                                                            </div>
                                                        }
                                                    </li>

                                                </ul>
                                            }
                                        </div>



                                    </div>
                                    <div>
                                        <div className={`${!open && "hidden"} ml-2 origin-left duration-200 navbar-end`}  >
                                            <div className="dropdown ">
                                                <label
                                                    tabIndex="0"


                                                >
                                                    <div className="flex justify-center items-center">
                                                        <span
                                                            className=" block "
                                                        >
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4  w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                                <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </label >
                                            </div>





                                        </div>
                                    </div>
                                </div>


                            </CustomLink>
                        ))
                    }

                </ul>

            </div>

            <Outlet className={` ${!open && "scale-0"}`} />


        </div >

    );
};

export default Workspace;