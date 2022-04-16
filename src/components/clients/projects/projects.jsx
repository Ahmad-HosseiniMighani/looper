const Projects = ({data,onEdit,onDelete}) => {
    return ( 
        <div className="card">
            <div className="card-header d-flex">
                <div className="dropdown">
                    <button type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="1,9"><i className="fas fa-filter mr-1"></i> All (3) <i className="fa fa-caret-down"></i></button> 
                    <div className="dropdown-menu stop-propagation">
                        <div className="dropdown-menu-animation">
                            <h6 id="client-projects-tab" className="dropdown-header"> Projects </h6><label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="clientProjectFilter" value="0" checked="true"/> <span className="custom-control-label">All (3)</span></label> <label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="clientProjectFilter" value="1"/> <span className="custom-control-label">On Going (1)</span></label> <label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="clientProjectFilter" value="2"/> <span className="custom-control-label">Completed (2)</span></label> <label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="clientProjectFilter" value="3"/> <span className="custom-control-label">Archived (0)</span></label>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary ml-auto">Add project</button>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                        <th style={{minWidth: "260px"}}> Project </th>
                        <th> Start </th>
                        <th> Due </th>
                        <th> Status </th>
                        <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item._id}>
                                <td className="align-middle text-truncate">
                                    <a href={item.link} className={"tile text-white mr-2 bg-"+item.nameTileColorTag}>{item.shortName}</a>
                                    <a href={item.link}>{item.fullName}</a>
                                </td>
                                <td className="align-middle"> {item.startDate} </td>
                                <td className="align-middle"> {item.dueDate} </td>
                                <td className="align-middle">
                                    <span className={"badge badge-"+item.badgeColor}>{item.badgeLabel}</span>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="dropdown">
                                    <button type="button" className="btn btn-sm btn-icon btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true" data-bs-offset="-1,9"><i className="fa fa-ellipsis-h"></i> <span className="sr-only">Actions</span></button>
                                    <div className="dropdown-menu">
                                            <div className="dropdown-arrow"></div>
                                        <div className="dropdown-menu-animation">
                                            <button className="dropdown-item" type="button" onClick={()=>onEdit(item._id)}>Edit</button>
                                            <button className="dropdown-item" type="button" onClick={()=>onDelete(item._id)}>Delete</button>
                                        </div>
                                    </div>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
     );
}
 
export default Projects;