import React from 'react';
const tooltipHandler = (data,titles) =>{
    let result = "";
    titles.map(item => {
        if(!item.ignoreInData){
            if(result == "") result += `<i class="fa fa-fw fa-${item.shapeTag} text-${item.colorTag}"></i> ${data[item.name.toLowerCase()].amount}`
            else result += `<br><i class="fa fa-fw fa-${item.shapeTag} text-${item.colorTag}"></i> ${data[item.name.toLowerCase()].amount}`
        }
    })
    return '<div class="text-right small">'+result+'</div>';
}
const LeaderBoard = ({data,titles,customClasses}) => {
    return ( 
        <React.Fragment>
            <div className="card-body pb-0">
            <h3 className="card-title"> Leaderboard </h3>
            <ul className="list-inline small">
                {titles.map(item => (
                    <li className="list-inline-item">
                        <i className={`fa fa-fw fa-${item.shapeTag} text-${item.colorTag}`}></i> {item.name}
                    </li>
                ))}
            </ul>
            </div>
            <div className="list-group list-group-flush">
                {data.map((item) =>(
                    <div className="list-group-item" key={item._id}>
                        <div className="list-group-item-figure">
                            <a href={item.link} className="user-avatar" data-bs-toggle="tooltip" title="" data-bs-original-title={item.name}><img src={item.img} alt={item.name}/></a>
                        </div>
                        <div className="list-group-item-body">
                            <div className={"progress progress-animated rounded-0"+customClasses} data-bs-toggle="tooltip" data-bs-html="true" title="" data-bs-original-title={tooltipHandler(item,titles)}>
                                {titles.map(item2 => (
                                    !item2.ignoreInData && <div key={item2.name+"-"+item._id} className={"progress-bar bg-"+item2.colorTag} role="progressbar" aria-valuenow={item[item2.name.toLowerCase()].percentage} aria-valuemin="0" aria-valuemax="100" style={{width: item[item2.name.toLowerCase()].percentage+"%"}}>
                                        <span className="sr-only">{item[item2.name.toLowerCase()].percentage}% Complete</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>)
                )}
            </div>
        </React.Fragment>
     );
}
 
export default LeaderBoard;