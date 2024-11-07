import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'


const TaskList = ({data}) => {
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto flex items-center justify-start gap-6 flex-nowrap w-full py-6 mt-12 px-4 bg-gray-100'>

      {data.tasks.map((elem,index) =>{
        
        if(elem.active){
          return <AcceptTask key={index} data={elem}/>
        }
        if(elem.newTask){
          return <NewTask key={index} data={elem}/>
        }
        if(elem.completed){
            return <CompleteTask key={index} data={elem}/>
        }
        if(elem.failed){
          return <FailedTask key={index} data={elem}/>
        }
      })}
    </div>
  )
}

export default TaskList
