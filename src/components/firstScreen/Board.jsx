import React from "react";
import {
  FaBoxes,
  FaUserFriends,
  FaCogs,
  FaRegPlusSquare,
  FaRegArrowAltCircleUp,
} from "react-icons/fa";
import { MdOutlineAddTask,MdSettingsSuggest } from "react-icons/md";
import { CgPlayListAdd } from "react-icons/cg";
import { useAuthState } from "react-firebase-hooks/auth";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setWorkspaceID } from "../../global-state/actions/reduxActions";
import LoardBoard from "./LoardBoard";
import { Link } from "react-router-dom";
import HomeScreen from "./HomeScreen";
import auth from "../../firebase.init";





const Board = () => {
  const dispatch = useDispatch();

  const [user] = useAuthState(auth);
  const email = user?.email;

  const data = useSelector(state => state.workspace)
 


  return (
    <div className="px-4 max-w-4xl mx-auto" id="sidebarOverflow">
      

      {/* **Your Workspace section start here** */}
      <div className="my-16 ">
        <p className="text-2xl font-bold text-gray-500 text-center py-4">{user?.displayName} YOUR WORKSPACES</p>
        {data?.map(item =>
          <div key={item._id}>
            <div className="md:flex items-center justify-between">
              <div className="flex items-center my-5">

                <span className="bg-primary text-3xl font-bold rounded text-white px-2 pb-1 uppercase">
                  {item?.title?.charAt(0)}
                </span>
                <h2 className="text-2xl font-bold ml-4 text-indigo-500">{item?.title}</h2>

              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
                <div className="p-0 m-0">
                  <Link onClick={() => {
                    dispatch(setWorkspaceID(item._id))
                  }}
                    to={`/${item.shortname}`}
                    className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center">
                    <MdOutlineAddTask className="mr-1 text-sm text-primary"></MdOutlineAddTask> Task
                  </Link>{" "}
                </div>
                <div>
                  <Link onClick={() => {
                    dispatch(setWorkspaceID(item._id))
                  }}
                    to={`/${item.shortname}/members`} className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center">
                    <FaUserFriends className="mr-1 text-sm text-primary"></FaUserFriends> Members
                  </Link>{" "}
                </div>
                <div>
                  <Link onClick={() => {
                    dispatch(setWorkspaceID(item._id))
                  }}
                    to={`/${item.shortname}/account`} className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center">
                    <MdSettingsSuggest className="mr-1 text-sm text-primary"></MdSettingsSuggest>  Setting
                  </Link>{" "}
                </div>
                {/* <div>
                  <Link to="" className="bg-gray-200 px-2 my-2 py-1 rounded-md hover:pointer-events-auto text-xl font-semibold hover:font-bold hover:bg-gray-300 flex items-center">
                    <FaRegArrowAltCircleUp className="mr-1 text-sm text-primary"></FaRegArrowAltCircleUp> Upgrade
                  </Link>{" "}
                </div> */}
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <LoardBoard props={item.shortname} workspaceID={item._id} />


              <div className=" w-60 bg-base-100 shadow">
                <label
                  htmlFor="my-modal-6"
                  className=" hover:cursor-pointer rounded-lg hover:bg-gray-100  hover:font-bold flex w-40 h-16 justify-center items-center"
                  onClick={() => {
                    dispatch(setWorkspaceID(item._id))
                  }}
                >
                  <p className="mr-2">
                    Create New Board
                  </p>
                  <CgPlayListAdd className="mr-1 text-sm"></CgPlayListAdd>

                </label>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* **Your Workspace section End here** */}


    </div>
  );
};

export default Board;
