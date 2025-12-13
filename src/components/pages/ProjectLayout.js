import React from 'react';
import Project from './Project';
import { Outlet } from 'react-router-dom';

function ProjectLayout() {
  return (
    <>
    <div>
    <Project/>
    </div>
    <div style={{padding:"45px"}}>
        <Outlet/>
    </div>
    </>
  )
}

export default ProjectLayout;