const TimeTracking = ({data,onEdit,onDelete}) => {
    return ( 
        <div className="card">
            <div className="card-header border-0"> Time tracking </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                    <tr>
                        <th style={{"min-width": "259px"}}> Task </th>
                        <th> Date </th>
                        <th> Time </th>
                        <th style={{"min-width": "120px"}}> Hours spent </th>
                        <th style={{"width": "60px"}}></th>
                    </tr>
                    </thead>
                    <tbody>
                        {data.map(item =>(
                            <tr key={item._id}>
                                <td className="align-middle text-truncate">
                                    <a href="#tracking">{item.title}</a>
                                </td>
                                <td className="align-middle"> {item.date} </td>
                                <td className="align-middle"> {item.time} </td>
                                <td className="align-middle"> {item.hoursSpend} </td>
                                <td className="align-middle text-right">
                                    <div className="dropdown">
                                        <button type="button" className="btn btn-sm btn-icon btn-secondary" data-bs-toggle="dropdown" data-bs-offset="-3,11" aria-haspopup="true" aria-expanded="false"><i className="fa fa-fw fa-ellipsis-h"></i></button>
                                        <div className="dropdown-menu">
                                            <div className="dropdown-arrow"></div>
                                            <div className="dropdown-menu-animation">
                                                <button className="dropdown-item" onClick={()=>onEdit(item._id)}>Edit</button>
                                                <button className="dropdown-item" onClick={()=>onDelete(item._id)}>Delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))} 
                    </tbody>
                </table>
            </div>
            <div className="card-footer">
            <a href="#viewReport" className="card-footer-item">View report <i className="fa fa-fw fa-angle-right"></i></a>
            </div>
        </div>
     );
}
 
export default TimeTracking;