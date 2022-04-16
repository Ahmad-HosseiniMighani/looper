const LeadsFunnel = ({data}) => {
    return ( 
        <div className="card card-fluid">
            <div className="card-body">
                <h3 className="card-title"> Leads Funnel </h3>
                <h6 className="h2 mb-3"> 2,630 </h6> {/* IDK where this should come from so Edit it when you know what kind of Data you have*/}
                <div className="progress progress-animated rounded-0">
                    {data.map(item => (
                        <div key={item._id} className={"progress-bar bg-"+item.colorTag} role="progressbar" style={{width: item.percentage+"%"}} aria-valuenow={item.percentage} aria-valuemin="0" aria-valuemax="100"></div>
                    ))}
                </div>
            </div>
            <div className="list-group list-group-bordered list-group-reflow">
            {data.map(item => (
                <div key={item._id} className="list-group-item justify-content-between align-items-center">
                    {/* <span><i className="fas fa-square text-purple mr-2"></i> New</span> <span className="text-muted">30%</span> */}
                    <span><i className={"fas fa-square ml-2 text-"+item.colorTag}></i> {item.title}</span> <span className="text-muted">{item.percentage}%</span>
                </div>
            ))}
            </div>
        </div>
     );
}
 
export default LeadsFunnel;