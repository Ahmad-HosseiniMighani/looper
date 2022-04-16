
const Members = ({data,onInvite,onDelete,onPrivateMessage,onCopyID}) => {
    return ( 
        data.map(item => (
            <div className="card mb-2" key={item._id}>
                <div className="card-body">
                    <div className="row align-items-center">
                        <div className="col-auto">
                            <a href={item.link} className="user-avatar user-avatar-lg">
                                <img src={item.avatar} alt={item.name}/>
                                <span className={`avatar-badge ${item.status}`} title={item.status}></span>
                            </a>
                        </div>
                        <div className="col">
                            <h3 className="card-title">
                                <a href={item.link}>{item.name}</a>
                                <small className="text-muted">@{item._id}</small>
                            </h3>
                            <h6 className="card-subtitle text-muted"> {item.title} </h6>
                        </div>
                        <div className="col-auto">
                            <button type="button" className="btn btn-icon btn-secondary ml-1" data-bs-toggle="tooltip" title="" data-bs-original-title="Private message" onClick={()=>onPrivateMessage(item._id)}><i className="far fa-comment-alt"></i></button>  {/* RTL */}
                            <div className="dropdown d-inline-block">
                                <button className="btn btn-icon btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" data-bs-offset="0,9"><i className="fa fa-fw fa-ellipsis-h"></i></button>
                                <div className="dropdown-menu">
                                    <div className="dropdown-arrow"></div>
                                    <div className="dropdown-menu-animation">
                                        <button type="button" className="dropdown-item" onClick={()=>onInvite(item._id)}>Invite to a team</button>
                                        <button type="button" className="dropdown-item" onClick={()=>onCopyID(item._id)}>Copy member ID</button>
                                        <div className="dropdown-divider"></div>
                                        <button type="button" className="dropdown-item" onClick={()=>onDelete(item._id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
     );
}
 
export default Members;