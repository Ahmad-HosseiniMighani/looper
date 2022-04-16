import React from 'react';
const MyTeams = ({data}) => {
    return ( 
        <React.Fragment>
            <div className="list-group list-group-flush list-group-divider">
            {data.map(item => (
                <div className="list-group-item" key={item._id}>
                    <div className="list-group-item-figure">
                        <a href={item.link} className="user-avatar user-avatar-md"><img src={item.logo} alt={item.name}/></a>
                    </div>
                    <div className="list-group-item-body">
                        <div className="d-sm-flex justify-content-sm-between align-items-sm-center">
                        <div className="team">
                            <h4 className="list-group-item-title">
                            <a href={item.link}>{item.name}</a>{item.isOwner && <a href={item.link} className="mention ml-1">Owner</a>}
                            </h4>
                            <p className="list-group-item-text"> Updated {item.updateDate} </p>
                        </div>
                        <ul className="list-inline text-muted mb-0">
                        {/* <li className="list-inline-item mr-3" data-bs-toggle="tooltip" title="" data-bs-placement="bottom" data-bs-original-title="Members">
                                <i className="fas fa-users text-teal"></i> 8 
                            </li> THIS IS FOR LTR THEME*/}
                            <li className="list-inline-item ml-3" data-bs-toggle="tooltip" title="" data-bs-placement="bottom" data-bs-original-title="Members">
                                <i className="fas fa-users text-teal"></i> {item.members} 
                            </li>
                            <li className="list-inline-item ml-3" data-bs-toggle="tooltip" title="" data-bs-placement="bottom" data-bs-original-title="Clients">
                                <i className="fas fa-user-tie text-pink"></i> {item.clients} 
                            </li>
                            <li className="list-inline-item ml-3" data-bs-toggle="tooltip" title="" data-bs-placement="bottom" data-bs-original-title="Projects">
                                <i className="fa fa-bookmark text-yellow"></i> {item.projects} 
                            </li>
                            {item.isPrivate && <li className="list-inline-item" data-bs-toggle="tooltip" title="" data-bs-original-title="Private">
                                <i className="fa fa-lock"></i>
                            </li>}
                            {!item.isPrivate && <li className="list-inline-item" data-bs-toggle="tooltip" title="" data-bs-original-title="Public">
                                <i className="fa fa-globe"></i>
                            </li>}
                        </ul>
                        </div>
                    </div>
                    <div className="list-group-item-figure">
                        <a href="#" className="btn btn-sm btn-icon btn-secondary stop-propagation"><i className="fas fa-ellipsis-h"></i></a>
                    </div>
                </div>
            ))}   
            </div>
            {/* you can create a component for Pagination :) its just a template of essentials*/}
            <ul className="pagination justify-content-center mt-4">
                <li className="page-item">
                <a className="page-link" href="#" tabindex="-1"><i className="fa fa-angle-double-right"></i></a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#" tabindex="-1">Prev</a>
                </li>
                <li className="page-item">
                <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item active">
                <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item disabled">
                <a className="page-link" href="#">Next</a>
                </li>
                <li className="page-item disabled">
                <a className="page-link" href="#"><i className="fa fa-angle-double-left"></i></a>
                </li>
            </ul>
        </React.Fragment>
     );
}
 
export default MyTeams;
