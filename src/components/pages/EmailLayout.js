import React from 'react';
import Email from './Email';
import { Outlet } from 'react-router-dom';

function EmailLayout() {
  return (
    <>
    <div>
    <Email/>
    </div>
    <div style={{padding:"45px"}}>
        <Outlet/>
    </div>
    </>
  )
}

export default EmailLayout;