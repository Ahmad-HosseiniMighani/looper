import React from 'react';

const LeadsSource = ({data}) => {
    return ( 
        <React.Fragment>
            <div className="card-body border-top pb-1">
                <h4 className="card-title"> Leads source </h4>
                <div className="progress mb-2">
                    {data.map(item => (
                        <div key={item._id} className={"progress-bar bg-"+item.colorTag} role="progressbar" aria-valuenow={item.percentage} aria-valuemin="0" aria-valuemax="100" style={{width: item.percentage+"%"}}>
                            <span className="sr-only">{item.percentage}% Complete</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="list-group list-group-bordered list-group-reflow">
                {data.map(item => (
                    <div className="list-group-item justify-content-between align-items-center">
                        {/* <span><i className="fas fa-square text-teal mr-2"></i> Mailchimp</span> <span className="text-muted">890 result</span> */}
                        <span><i className={"fas fa-square ml-2 text-"+item.colorTag}></i> {item.title}</span> <span className="text-muted">{item.amount} result</span>
                    </div>
                ))}
            </div>
        </React.Fragment>
     );
}
 
export default LeadsSource;