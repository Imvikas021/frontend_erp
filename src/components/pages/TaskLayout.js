import React from 'react';
import { Outlet } from 'react-router-dom';
import Task from './Task';

function TaskLayout() {
  return (
    <>
    <div>
        <Task/>
    </div>
    <div style={{padding:"20px"}}>
        <Outlet/>
    </div>
    </>
  )
};

export default TaskLayout;