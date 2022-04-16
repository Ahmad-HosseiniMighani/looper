import React from 'react';

const Files = ({data,OnDownload,OnView,OnShare,OnCopyLink,OnDelete}) => {
    return ( 
        // idk How we would receive Data :(
        <div id="message-files" className="tab-pane fade" role="tabpanel" aria-labelledby="message-files">
            <div className="list-group list-group-reflow list-group-flush list-group-divider">
                {data.map(item => (
                    <React.Fragment>
                        <div className="list-group-header"> {item.date} </div>
                        {item.files.map(file => (
                            <div className="list-group-item align-items-start">
                                <div className="list-group-item-figure">
                                    <a href={file.link} className={"tile tile-circle bg-"+file.tileColor}><span className={"fa fa-file-"+file.fileType}></span></a>
                                </div>
                                <div className="list-group-item-body">
                                    <h4 className="list-group-item-title text-truncate">
                                        <a href={file.link}>{file.name}</a>
                                    </h4>
                                    <p className="list-group-item-text"> {file.volume} by {file.uploadedBy} </p>
                                    <p className="list-group-item-text small"> {file.time} </p>
                                </div>
                                <div className="list-group-item-figure">
                                    <div className="dropdown">
                                        <button className="btn btn-sm btn-icon btn-light" data-bs-toggle="dropdown" data-bs-offset="-3,11"><i className="fa fa-fw fa-ellipsis-v"></i></button>
                                        <div className="dropdown-menu">
                                            <div className="dropdown-arrow"></div>
                                            <div className="dropdown-menu-animation">
                                                <button type="button" className="dropdown-item" onClick={()=>OnDownload(file._id)}>Download</button>
                                                <button type="button" className="dropdown-item" onClick={()=>OnView(file._id)}>View details</button>
                                                <button type="button" className="dropdown-item" onClick={()=>OnShare(file._id)}>Share file</button>
                                                <button type="button" className="dropdown-item" onClick={()=>OnCopyLink(file._id)}>Copy link file</button>
                                                <div className="dropdown-divider"></div>
                                                <button type="button" className="dropdown-item" onClick={()=>OnDelete(file._id)}>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
     );
}
 
export default Files;