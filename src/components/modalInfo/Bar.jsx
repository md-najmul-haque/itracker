import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
// import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
// import auth from "../firebase/firebase.init";
// import workspaceModal from "./WorkspaceModal";
import BoardModal from "./BoardModal";
import Loading from "../../Pages/Shared/Loading/Loading";
// import axios from "axios";
import { useSelector } from "react-redux";
import WorkspaceModal from "./WorkspaceModal";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import {
  setLoadWorkspace,
  setWorkspace,
  // setWorkspaceID,
} from "../../global-state/actions/reduxActions";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";


// FiBell

const Bar = () => {
  const [user, loading, authError] = useAuthState(auth);
  const [open, setOpen] = useState(false);
  const [openTemp, setOpenTemp] = useState(false)
  const loadWorkspaceState = useSelector((state) => state.loadWorkspace);
  if (loading) {
    <Loading />;
  }

  const dispatch = useDispatch();
  const email = user.email;
  const { isLoading, error, data, refetch } = useQuery(["repoData"], () =>
    fetch(`https://morning-coast-54182.herokuapp.com/workspace/${email}`).then(
      (res) => res.json()
    )
  );
  useEffect(() => {
    if (loadWorkspaceState) {
      refetch();
      dispatch(setLoadWorkspace(false));
    }
  }, [dispatch, loadWorkspaceState, refetch]);

  useEffect(() => {
    if (data?.length > 0) {
      // console.log(allWorkspaceData);
      dispatch(setWorkspace(data));
    }
  }, [data, dispatch]);

  if (isLoading) {
    <Loading></Loading>;
  }




  return (
    <div>
      <div>
   
      
      </div>
      <WorkspaceModal></WorkspaceModal>
      <BoardModal></BoardModal>
    
    </div>
  );
};

export default Bar;


