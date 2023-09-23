import React from 'react'
import "./myStyles.css"
import Sidebar from './Sidebar';
import WorkArea from './WorkArea';
import ChatArea from './ChatArea';
import ConversationsItem from './ConversationsItem';

function MainContainer() {

  const chatProps = {
    name: "Test#1",
    timeStamp: "today",
  };
  return (
    <div className='main-container'>
        <Sidebar/>
        {/* <WorkArea/> */}
        <ChatArea props={chatProps} />
    </div>
  )
}

export default MainContainer;