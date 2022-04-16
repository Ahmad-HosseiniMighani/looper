import * as Showdown from "showdown";
import React from 'react';
//temp
import uifaces6 from "../../../imgs/uifaces6.jpg";
import uifaces2 from "../../../imgs/uifaces2.jpg";
import uifaces3 from "../../../imgs/uifaces3.jpg";
import uifaces5 from "../../../imgs/uifaces5.jpg";
import uifaces9 from "../../../imgs/uifaces9.jpg";
import uifaces15 from "../../../imgs/uifaces15.jpg";
import ViewTaskAddNewTodo from './viewTaskAddNewTodo';
import AddNewComment from './addNewComment';
import ViewComments from './viewComments';
//temp


const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});
const convertValue = value => converter.makeHtml(value);
// this you can get via API in parent or and send it to this component as a prop or change he approach completely
const teamMembers = [
    {_id: "jday", name: "Johnny Day", avatar: uifaces2},
    {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3},
    {_id: "chasen", name: "Craig Hansen", avatar: uifaces5},
    {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9},
    {_id: "amedina", name: "Adam Medina", avatar: uifaces15}
]
const labelsChoices = [
    {_id: 1, name: "Assets", colorTag: "blue"},
    {_id: 2, name: "Build Tools", colorTag: "indigo"},
    {_id: 3, name: "Components", colorTag: "purple"},
    {_id: 4, name: "Dependencies", colorTag: "pink"},
    {_id: 5, name: "Design", colorTag: "red"},
    {_id: 6, name: "Documentation", colorTag: "orange"},
    {_id: 7, name: "Doing", colorTag: "yellow"},
    {_id: 8, name: "JS", colorTag: "green"},
    {_id: 9, name: "SCSS", colorTag: "teal"},
    {_id: 10, name: "To Do", colorTag: "cyan"},
]
// this you can get via API in parent or and send it to this component as a prop or change he approach completely
const filterTeamMembers = (assignees,member_id) => {
    for(let i=0; i< assignees.length; i++)
        if(assignees[i]._id == member_id) return true
    return false
}
const isLabelChecked = (labels,label_id) => {
    for(let i=0; i< labels.length; i++)
        if(labels[i]._id == label_id) return true
    return false
}
const ViewTask = ({data,handlePlayTaskPlayButton,handleViewModalTaskAssigneeRemove,handleViewTaskAssigneesSelect,handleViewTaskClearMultiSelect,handleViewModalLabelRemove,handleViewModalLabelAdd,handleViewTodoDelete,handleTodoClicked,handleAddnewTodoFromViewTaskModal,handleAddnewCommentFromViewTaskModal}) => {
    return ( 
        <div className="modal modal-drawer fade" id="modalViewTask" tabindex="-1" role="dialog" aria-labelledby="modalViewTaskLabel" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-drawer-right" role="document">
                <div className="modal-content">
                    {data._id == undefined && <div className="modal-body p-3 p-lg-4"> No Data :( </div>}
                    {data._id != undefined &&
                    <div className="modal-body p-3 p-lg-4">
                        <ol className="breadcrumb">
                        <li className="breadcrumb-item active">
                        <a href="#" data-bs-dismiss="modal"><i className="breadcrumb-icon fa fa-angle-right ml-2"></i>In Progress</a>
                        </li>
                    </ol>
                        <h5 id="modalViewTaskLabel" className="modal-title"> {data.title} </h5>
                        <hr/>
                        {/* i dont know where this parts coming from so i just leave html template and React template here*/}
                            {/* <p className="text-muted">
                                Opened {data.taskOpenedDate} by <a href="#" className="link-text" data-bs-toggle="tooltip" title="" data-bs-original-title={"@"+data.starter._id}><span className="user-avatar user-avatar-xs"><img src={data.starter.avatar} alt=""/></span> {data.starter.name}</a>
                            </p> */}
                            <p className="text-muted">
                                Opened one week ago by <a href="#" className="link-text" data-bs-toggle="tooltip" title="" data-bs-original-title="@jgrif"><span className="user-avatar user-avatar-xs"><img src={uifaces6} alt=""/></span> Jacob Griffin</a>
                            </p>
                        <hr/>
                        <div className="task-description"
                            dangerouslySetInnerHTML={{
                                __html: convertValue(data.description)
                            }}
                        >
                        </div>
                        <div className="row my-3">
                            <div className="col-6 mb-3">
                                <div className="time-tracking">
                                    <h6> Time tracking </h6>
                                    {/* i dont know how this should work... so i leave html template with some functionality */}
                                    <button className="btn btn-subtle-success btn-icon" onClick={()=>handlePlayTaskPlayButton(data._id)}>
                                        {data.isPaused && <i className="fa fa-play"></i>}
                                        {!data.isPaused && <i className="fa fa-pause"></i>}
                                    </button>
                                    <span className="counter mr-1"><span className="hours">00</span> <span className="separtor">:</span> <span className="minutes">00</span> <span className="separtor">:</span> <span className="second">00</span></span> / <span className="estimate">8h</span>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <h6> Due date </h6>
                                <div className="inline-editable pt-1">
                                    {/* this is an input which i dont know how exatcly should i work with...Date input? or text input... i do not know */}
                                    {/* the property you looking for is data.dueDate */}
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <h6> Labels </h6>
                                {data.labels.map(label => (
                                    <React.Fragment><span className={"tile bg-"+label.colorTag}></span>{" "}</React.Fragment>
                                ))}
                                <div className="dropdown d-inline-block dropstart">
                                    <a href="#" className="tile" data-bs-toggle="dropdown"  aria-haspopup="true" aria-expanded="false"><i className="fa fa-plus"></i></a> 
                                    <div className="dropdown-menu dropdown-menu-md stop-propagation" id="dntmLabels" aria-labelledby="dropdownTaskLabels2">
                                        <div className="dropdown-menu-animation">
                                            <h6 id="dropdownTaskLabels2" className="dropdown-header"> Select labels </h6>
                                            <div className="dropdown-divider"></div>
                                            <div className="form-group px-3 py-2 mb-0">
                                                <input type="text" className="form-control" data-filter="#dntmLabels .filterable" placeholder="Search" data-autofocus="true"/>
                                            </div>
                                            <label className="custom-control custom-checkbox filterable">
                                                <input type="checkbox" className="custom-control-input task-nolabel" data-label="No Label"
                                                    onClick={()=> handleViewTaskClearMultiSelect(data._id,"labels")}
                                                    checked={data.labels.length > 0 ? false : true}
                                                />
                                                <span className="custom-control-label">No Label</span>
                                            </label>
                                            <div className="dropdown-divider"></div>
                                            <div className="dropdown-scroll">
                                                {labelsChoices.map( label => (
                                                    <label className="custom-control custom-checkbox filterable" key={"label_"+label._id}>
                                                        <input type="checkbox" className="custom-control-input task-label"
                                                            onClick={()=> isLabelChecked(data.labels,label._id) ? handleViewModalLabelRemove(data._id,label._id) : handleViewModalLabelAdd(data._id,label)}
                                                            checked={isLabelChecked(data.labels,label._id)}
                                                        />
                                                        <span className="custom-control-label">
                                                            <i className={"fa fa-square fa-lg ml-1 text-"+label.colorTag}></i> {label.name}
                                                        </span>
                                                    </label>
                                                ))}
                                            </div>
                                            <div className="dropdown-divider"></div>
                                            <a href="#" className="dropdown-item">Create new label</a>
                                            <a href="#" className="dropdown-item">Manage labels</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mb-3">
                                <div className="assignee">
                                    <h6> Assignee </h6>
                                    <div className="avatar-group">
                                        {data.taskAssignees.map(item => (
                                            <a href={item._id} className="user-avatar" data-bs-toggle="tooltip" title="" data-bs-original-title={item.name}><img src={item.avatar} alt={item.name}/></a>
                                        ))}
                                        <div className="dropdown d-inline-block dropstart">
                                            <a href="#" className="tile tile-circle mr-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fa fa-plus"></i></a> 
                                            <div className="dropdown-menu dropdown-menu-md stop-propagation" id="dntmViewAssignees" aria-labelledby="dropdownAssignee2">
                                                <div className="dropdown-menu-animation">
                                                    <h6 id="dropdownAssignee2" className="dropdown-header"> Add assignee </h6>
                                                    <div className="dropdown-divider"></div>
                                                    <div className="form-group px-3 py-2 mb-0">
                                                        <input type="text" className="form-control" data-filter="#dntmViewAssignees .filterable" placeholder="Search members" data-autofocus="true"/>
                                                    </div>
                                                    <label className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input task-unassignees" data-label="Unassigned"
                                                            onClick={()=> handleViewTaskClearMultiSelect(data._id,"taskAssignees")}
                                                            checked={data.taskAssignees.length > 0 ? false : true}
                                                        />
                                                        <span className="custom-control-label">Unassigned</span>
                                                    </label>
                                                    <div className="dropdown-divider"></div>
                                                    <h6 className="dropdown-header"> Assignee(s) </h6>
                                                    {data.taskAssignees.map(member => (
                                                        <label className="custom-control custom-checkbox filterable" key={"taskAssignees_"+member._id}>
                                                            <input type="checkbox" className="custom-control-input task-assignees" checked={true}
                                                                onClick={()=> handleViewModalTaskAssigneeRemove(data._id,member._id)}
                                                            />
                                                            <span className="custom-control-label custom-control-label-media">
                                                                <span className="media">
                                                                    <span className="ml-2">
                                                                        <span className="user-avatar">
                                                                            <img src={member.avatar} alt={member.name}/>
                                                                        </span>
                                                                    </span>
                                                                        <span className="media-body">
                                                                            {member.name}
                                                                            <br/>
                                                                            <span className="text-muted">@{member._id}</span>
                                                                        </span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    ))}
                                                    <div id="dntmDivider" className="dropdown-divider"></div>
                                                    {teamMembers.map(member => (
                                                        !filterTeamMembers(data.taskAssignees, member._id) && <label className="custom-control custom-checkbox filterable" key={"taskAssignees_"+member._id}>
                                                            <input type="checkbox" className="custom-control-input task-assignees" checked={false}
                                                                onClick={()=> handleViewTaskAssigneesSelect(data._id,member)}
                                                            />
                                                            <span className="custom-control-label custom-control-label-media">
                                                                <span className="media">
                                                                    <span className="ml-2">
                                                                        <span className="user-avatar">
                                                                            <img src={member.avatar} alt={member.name}/>
                                                                        </span>
                                                                    </span>
                                                                        <span className="media-body">
                                                                            {member.name}
                                                                            <br/>
                                                                            <span className="text-muted">@{member._id}</span>
                                                                        </span>
                                                                </span>
                                                            </span>
                                                        </label>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="d-flex justify-content-between">
                            <label>Todos</label> <span className="text-muted">({data.completedTasks}/{data.totalTasks})</span>
                            </div>
                            <div className="progress progress-sm">
                            <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={data.completedTasks/data.totalTasks*100 || 0} aria-valuemin="0" aria-valuemax="100" style={{width: ((data.completedTasks/data.totalTasks*100) || 0)+"%"}}>
                                <span className="sr-only">{data.completedTasks/data.totalTasks*100 || 0}% Complete</span>
                            </div>
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="hidden" name="vtTodos"/> 
                            <div id="vtTodos" className="todo-list">
                                {data.todos.map(todo => (
                                    <div className="todo" key={"todo_"+todo._id}>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id={"vtodo"+todo._id} checked={todo.isCompleted}/>
                                            <label className="custom-control-label" htmlFor={"vtodo"+todo._id}  onClick={() => handleTodoClicked(data._id,todo._id)}>{todo.title}</label>
                                        </div>
                                        <div className="todo-actions pl-1">
                                            <button type="button" className="btn btn-sm btn-light" onClick={() => handleViewTodoDelete(data._id,todo._id)}>Delete</button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <ViewTaskAddNewTodo task_id={data._id} doSubmit={handleAddnewTodoFromViewTaskModal}/>
                        </div>
                        <hr/>
                        <ViewComments data={data.comments}/>
                        <AddNewComment task_id={data._id} doSubmit={handleAddnewCommentFromViewTaskModal}/>
                    </div>}
                </div>
            </div>
        </div>
     );
}
 
export default ViewTask;