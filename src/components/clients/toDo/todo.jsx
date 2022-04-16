import React from 'react';

const ToDo = ({data,handleClick,handleDelete,handleEdit}) => {
    return (
        <React.Fragment>
            <div className="card">
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                    <h3 id="client-tasks-tab" className="card-title"> To do </h3>
                    <div className="card-title-control">
                        <div className="dropdown">
                            <button type="button" className="btn btn-icon btn-light" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="1,9"><i className="fa fa-ellipsis-v"></i></button>
                            <div className="dropdown-menu dropdown-menu-right">
                                <div className="dropdown-menu-animation">
                                    <div className="dropdown-arrow"></div>
                                    <h6 className="dropdown-header"> Sort by </h6><label className="custom-control custom-radio stop-propagation"><input type="radio" className="custom-control-input" name="todoSorting" value="0" checked="true"/> <span className="custom-control-label">My order</span></label> <label className="custom-control custom-radio stop-propagation"><input type="radio" className="custom-control-input" name="todoSorting" value="1"/> <span className="custom-control-label">Due date</span></label>
                                    <div className="dropdown-divider"></div><button type="button" className="dropdown-item">Rename list</button> <button type="button" className="dropdown-item">Delete completed todos</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="todo-list todo-list-bordered" data-toggle="sortable" data-draggable=".todo" data-handle=".drag-handle">
                        {data.map(item=>(
                            !item.isChecked && (<div className="todo" key={"todo"+item._id}>
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id={"todo"+item._id} onClick={()=>handleClick(item._id)} checked={item.isChecked}/> <label className="custom-control-label" htmlFor={"todo"+item._id}><span>{item.title}</span></label>
                                </div>
                                <div className="todo-actions d-block">
                                    {item.date && <small className="text-muted border-bottom border-warning pb-1">{item.date}</small>}
                                    <div className="btn btn-sm btn-icon btn-light drag-handle" data-todoid={item._id}>
                                        <i className="fa fa-arrows-alt"></i>
                                    </div>
                                    <button type="button" className="btn btn-sm btn-icon btn-light" data-todoid={item._id}><i className="fa fa-pencil-alt" onClick={()=>handleEdit(item._id)}></i></button>
                                </div>
                            </div>)
                        ))}
                    </div>
                </div>
                <div className="card-footer">
                    <a href="#" className="card-footer-item"><i className="fa fa-plus-circle mr-1"></i> Add todo</a>
                </div>
            </div>
            <div className="card">
                <div className="card-header border-0" id="headingCompletedTodo">
                    <button className="btn btn-block btn-reset d-flex justify-content-between collapsed" data-bs-toggle="collapse" data-bs-target="#completedTodo" aria-expanded="false" aria-controls="completedTodo"><span><i className="fa fa-history text-muted mr-2"></i> Completed (27)</span> <span className="collapse-indicator"><i className="fa fa-fw fa-chevron-down"></i></span></button>
                </div>
                <div id="completedTodo" className="collapse" aria-labelledby="headingCompletedTodo">
                    <div className="card-body pt-0">
                        <div className="todo-list todo-list-bordered" data-toggle="sortable" data-draggable=".todo" data-handle=".drag-handle">
                            {data.map(item=>(
                                item.isChecked && (<div className="todo">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id={"todo"+item._id} onClick={()=>handleClick(item._id)} checked={item.isChecked}/> <label className="custom-control-label" htmlFor={"todo"+item._id}><span>{item.title}</span></label>
                                    </div>
                                    <div className="todo-actions d-block">
                                        <div className="btn btn-sm btn-icon btn-light drag-handle" data-todoid={item._id}>
                                            <i className="fa fa-arrows-alt"></i>
                                        </div>
                                        <button type="button" className="btn btn-sm btn-icon btn-light" data-todoid={item._id} onClick={()=>handleDelete(item._id)}><i className="fa fa-trash-alt"></i></button>
                                    </div>
                                </div>)
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default ToDo;