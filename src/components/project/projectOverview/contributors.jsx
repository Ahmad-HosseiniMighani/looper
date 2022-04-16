const Contributors = ({data,OnMessage,OnInvite,OnCopyID,OnDelete}) => {
    return ( 
        <div id="team-profile" className="tab-pane fade show active" role="tabpanel" aria-labelledby="team-profile">
            <div className="list-group list-group-reflow list-group-flush list-group-divider">
                <div className="list-group-header"> {data.length} Members </div>
                    {data.map(item => (
                        <div className="list-group-item" key={item._id}>
                            <div className="list-group-item-figure align-items-start">
                                <a href={item.link} className="user-avatar"><img src={item.avatar} alt={item.name}/> <span className={"avatar-badge "+item.status} title={item.status}></span></a>
                            </div>
                            <div className="list-group-item-body">
                                <h4 className="list-group-item-title">
                                <a href={item.link}>{item.name}</a>
                                </h4>
                                <p className="list-group-item-text"> {item.title} </p>
                            </div>
                            <div className="list-group-item-figure align-items-start">
                                <div className="dropdown">
                                    <button className="btn btn-sm btn-icon btn-light" data-bs-toggle="dropdown" data-bs-offset="-3,11"><i className="fa fa-fw fa-ellipsis-v"></i></button>
                                    <div className="dropdown-menu">
                                        <div className="dropdown-arrow"></div>
                                        <div className="dropdown-menu-animation">
                                            <button type="button" className="dropdown-item" onClick={()=>OnMessage(item._id)}>Message</button>
                                            <button type="button" className="dropdown-item" onClick={()=>OnInvite(item._id)}>Invite to a team</button>
                                            <button type="button" className="dropdown-item" onClick={()=>OnCopyID(item._id)}>Copy member ID</button>
                                            <div className="dropdown-divider"></div>
                                            <button type="button" className="dropdown-item" onClick={()=>OnDelete(item._id)}>Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
     );
}
 
export default Contributors;