import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({data,onEdit,onDelete,onAddMember}) => {
    return ( 
        data.map(item => (
            <div className="col-lg-6" key={item._id}>
                <div className="card">
                    <div className="card-header border-0">
                        <div className="d-flex justify-content-between align-items-center">
                            <span className="badge bg-muted" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title={item.progress.title}><span className="sr-only">{item.progress.title}</span>
                            {item.progress.title.toLowerCase() == "deadline" && <React.Fragment><i className="fa fa-calendar-alt text-muted mr-1"></i> {item.progress.date}</React.Fragment>}
                            {item.progress.title.toLowerCase() == "finished" && <i className="fa fa-fw fa-check-circle text-teal"></i>}
                            </span>
                            <div className="dropdown">
                                <button type="button" className="btn btn-icon btn-light" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="1,9"><i className="fa fa-ellipsis-v"></i></button>
                                <div className="dropdown-menu">
                                    <div className="dropdown-arrow"></div>
                                    <div className="dropdown-menu-animation">
                                        <a href="link" className="dropdown-item">View Project</a>
                                        <Link to="#" className="dropdown-item" onClick={()=>onAddMember(item._id)}>Add Member</Link>
                                        <Link to="#" className="dropdown-item" onClick={()=>onEdit(item._id)}>Edit</Link>
                                        <Link to="#" className="dropdown-item" onClick={()=>onDelete(item._id)}>Remove</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body text-center">
                        <a href={item.link} class={"tile tile-lg mb-2 bg-"+item.colorTag}>{item.shortName}</a> 
                        <h5 className="card-title">
                        <a href={item.link}>{item.name}</a>
                        </h5>
                        <p className="card-subtitle text-muted"> Progress in {item.progress.percentage}% - Last update {item.lastUpdate} </p>
                        <div className="my-3">
                        <div className="avatar-group">
                            {item.people.map(p=>(
                                <a href="link" className="user-avatar user-avatar-sm" data-bs-toggle="tooltip" title="" data-bs-original-title={p.name}><img src={p.avatar} alt={p.name} key={item._id+"-"+p.name}/></a>
                            ))}
                            <a href="#" className="tile tile-sm tile-circle" data-bs-toggle="modal" data-bs-target="#membersModal">+{item.peopleCount}</a>
                        </div>
                        </div>
                        <div className="row">
                        <div className="col">
                            <strong>Budget</strong> <span className="d-block">{item.budget}</span>
                        </div>
                        <div className="col">
                            <strong>Tasks</strong> <span className="d-block">{item.tasks}</span>
                        </div>
                        </div>
                    </div>
                    <div className="progress progress-xs" data-bs-toggle="tooltip" title="" data-bs-original-title={item.progress.percentage+"%"}>
                        <div className={"progress-bar bg-"+item.colorTag} role="progressbar" aria-valuenow={item.progress.percentage} aria-valuemin="0" aria-valuemax="100" style={{width: item.progress.percentage+"%"}}>
                        <span className="sr-only">{item.progress.percentage}% Complete</span>
                        </div>
                    </div>
                </div>
            </div>
        ))
     );
}
 
export default Projects;