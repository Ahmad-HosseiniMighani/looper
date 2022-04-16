const ActiveProjects = ({data}) => {
    return ( 
        <div className="card card-fluid pb-3">
            <div className="card-header"> Active Projects </div>
            <div className="lits-group list-group-flush">
                {data.map((item) =>(
                    <div className="list-group-item">
                        <div className="list-group-item-figure">
                        <div className="has-badge">
                            <a href={item.projectLink} className={"tile tile-md bg-"+item.colorTag}>{item.projectShortName}</a> <a href={item.teamLink} className="user-avatar user-avatar-xs"><img src={item.teamLogo} alt="teamLogo"/></a>
                        </div>
                        </div>
                        <div className="list-group-item-body">
                            <h5 className="card-title">
                                <a href={item.projectLink}>{item.projectName}</a>
                            </h5>
                        <p className="card-subtitle text-muted mb-1"> Progress in {item.progress}% - Last update {item.lastUpdate} </p>
                        <div className="progress progress-xs bg-transparent">
                            <div className={"progress-bar bg-"+item.colorTag} role="progressbar" aria-valuenow={item.progress} aria-valuemin="0" aria-valuemax="100" style={{width: item.progress+"%"}}>
                                <span className="sr-only">{item.progress}% Complete</span>
                            </div>
                        </div>
                        </div>
                    </div>)
                )}
            </div>
        </div>
     );
}
 
export default ActiveProjects;