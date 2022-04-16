import { ReactSortable } from "react-sortablejs";
const Tasks = ({data,parentId,taskOnMove,handleDataForViewTaskModal,handlePlayTaskPlayButton}) => {
    return ( 
        <ReactSortable
            id={parentId}
            className={"task-body"}
            group={"tasks"}
            forceFallback={true}
            delay={50}
            animation={150}
            list={data}
            setList={(newState) => taskOnMove(newState,parentId)}
        >
            {data.map(item => (
                <div className="task-issue" id={item._id} key={item._id}>
                    <div className="card">
                        <div className="card-header">
                            <div className="task-label-group">
                                {item.labels.map(label => <span class={"task-label bg-"+label.colorTag} key={"label_"+label._id}></span>)}
                            </div>
                            <h4 className="card-title">
                                <a href="#" onClick={()=> handleDataForViewTaskModal(item)}>{item.title}</a>
                            </h4>
                            <h6 className="card-subtitle text-muted">
                                <span class={item.overLimit ? "text-red":"text-muted"}>{item.timeSpend}</span> / <span className="text-muted">{item.timeLimit}</span> <span className="mx-1">·</span> <span className="due-date"><i className="far fa-fw fa-clock"></i> {item.dueDate}</span>
                            </h6>
                        </div>
                        <div className="card-body pt-0">
                            <div className="list-group">
                                <div className="list-group-item" onClick={() => handleDataForViewTaskModal(item)}>
                                    <a href="#" className="stretched-link"></a> 
                                    <div className="list-group-item-body">
                                        {item.taskAssignees.map(TA => (
                                            <figure className="user-avatar user-avatar-sm" data-bs-toggle="tooltip" title="" data-bs-original-title={TA.name} key={"people_"+TA._id}>
                                                <img src={TA.avatar} alt={TA.name}/>
                                            </figure>
                                        ))}
                                    </div>
                                </div>
                                {item.totalTasks > 0 && (<div className="list-group-item pt-0" onClick={() => handleDataForViewTaskModal(item)}>
                                <a href="#" className="stretched-link"></a> 
                                <div className="list-group-item-body">
                                    <div className="progress progress-xs">
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: ((item.completedTasks / item.totalTasks) * 100)+"%"}} aria-valuenow={(item.completedTasks / item.totalTasks) * 100} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="list-group-item-figure">
                                    <span className="todos">{item.completedTasks +"/"+ item.totalTasks}</span>
                                </div>
                                </div>)}
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href="#" className="card-footer-item card-footer-item-bordered text-muted"
                                onClick={()=>handlePlayTaskPlayButton(item._id)}
                            >
                                <i className={item.isPaused ? "fa fa-play text-teal" : "fa fa-pause"}></i>
                            </a>
                            {item.hasComment && <a href="#" className="card-footer-item card-footer-item-bordered text-muted" onClick={() => handleDataForViewTaskModal(item)}><i className="fas fa-comment-alt ml-1"></i> {item.comments.length}</a>}
                        </div>
                    </div>
                </div>
            ))}
        </ReactSortable>
     );
}
 
export default Tasks;