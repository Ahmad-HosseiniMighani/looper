import React from 'react';
import { ReactSortable } from "react-sortablejs";
import Tasks from './tasks';
import AddNewTaskParent from './addNewTaskParent';
import Form from './../../common/form';

const TaskParent = ({data,parentOnMove,parentOnEditBtn,parentOnMoveBtn,parentOnDuplicateBtn,parentOnSubscribeBtn,parentOnTrashBtn,openNewTaskModal,taskOnMove,newTaskParentDoSubmit,handleDataForViewTaskModal,handlePlayTaskPlayButton}) => {
    return ( 
        <div id="board" className={"board"}>
            <ReactSortable
                //   id={"board"}
                  className={"d-inline-block"}
                forceFallback={true}
                delay={100}
                animation={150}
                handle={".task-header"}
                draggable={".tasks"}
                list={data}
                setList={(newState) => parentOnMove(newState)}
                filter={".tasks-action"}
                >
                {data.map(item => (
                    <div className="tasks" key={item._id}>
                        <div className="task-header">
                            <h3 className="task-title ml-auto">
                                {item.title} <span className="badge text-muted">({item.tasks.length})</span>
                            </h3>
                                <button className="btn btn-light btn-icon text-muted" onClick={()=>openNewTaskModal(item._id)} title="Add task"><i className="fa fa-plus-circle"></i></button> 
                            <div className="dropdown">
                                <button className="btn btn-light btn-icon text-muted" data-bs-toggle="dropdown" data-bs-offset="1,10"><i className="fa fa-ellipsis-v"></i></button> 
                                <div className="dropdown-menu">
                                    <div className="dropdown-arrow"></div>
                                    <div className="dropdown-menu-animation">
                                        <a href="#" className="dropdown-item" onClick={()=>parentOnEditBtn(item._id)}>Edit</a>
                                        <a href="#" className="dropdown-item" onClick={()=>parentOnMoveBtn(item._id)}>Move</a>
                                        <a href="#" className="dropdown-item" onClick={()=>parentOnDuplicateBtn(item._id)}>Duplicate</a>
                                        <a href="#" className="dropdown-item" onClick={()=>parentOnSubscribeBtn(item._id)}>Subcribe</a>
                                        <a href="#" className="dropdown-item" onClick={()=>parentOnTrashBtn(item._id)}>Trash</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Tasks
                            data={item.tasks}
                            parentId={item._id}
                            taskOnMove={taskOnMove}
                            handleDataForViewTaskModal={handleDataForViewTaskModal}
                            handlePlayTaskPlayButton={handlePlayTaskPlayButton}
                        />
                    </div>
                ))}
            </ReactSortable>
            <AddNewTaskParent doSubmit={newTaskParentDoSubmit}/>
        </div>
     );
}
 
export default TaskParent;