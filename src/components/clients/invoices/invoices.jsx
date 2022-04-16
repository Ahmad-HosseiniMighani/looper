const Invoices = ({data,onEdit,onDelete}) => {
    return ( 
        <div className="card">
            <div className="card-header d-flex">
                <div className="dropdown">
                    <button type="button" className="btn btn-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="1,9"><i className="fas fa-filter mr-1"></i> All (5) <i className="fa fa-caret-down"></i></button> 
                    <div className="dropdown-menu dropdown-menu-right stop-propagation">
                        <div className="dropdown-arrow"></div>
                            <div className="dropdown-menu-animation">
                                <h6 id="client-invoices-tab" className="dropdown-header"> Invoices </h6><label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="clientInvoiceFilter" value="0" checked="true"/> <span className="custom-control-label">All (5)</span></label> <label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="clientInvoiceFilter" value="1"/> <span className="custom-control-label">Draft (1)</span></label> <label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="clientInvoiceFilter" value="2"/> <span className="custom-control-label">Send (2)</span></label> <label className="custom-control custom-radio"><input type="radio" className="custom-control-input" name="clientInvoiceFilter" value="3"/> <span className="custom-control-label">Paid (0)</span></label>
                            </div>
                    </div>
                </div>
                <button type="button" className="btn btn-primary ml-auto">Add invoice</button>
            </div>
            
            <div className="table-responsive">
                
                <table className="table">
                
                <thead>
                    <tr>
                    <th style={{minWidth: "256px"}}> Project </th>
                    <th></th>
                    <th> Due </th>
                    <th> Amount </th>
                    <th> Received </th>
                    <th> Status </th>
                    <th></th>
                    </tr>
                </thead>
                
                <tbody>
                    {data.map(item=>(
                        <tr key={item._id}>
                            <td className="align-middle text-truncate">
                                <div className="media align-items-center">
                                <a href={item.link} className={"tile text-white mr-2 bg-"+item.projectNameTileColorTag}>{item.projectShortName}</a>
                                <div className="media-body">
                                    <a href={item.link}>{item.projectName}</a> <small className="d-block text-muted">Invoice #{item._id}</small>
                                </div>
                                </div>
                            </td>
                            <td className="align-middle"> {item.paperClip && <i className="fa fa-paperclip text-muted"></i>} </td>
                            <td className="align-middle"> {item.dueDate} </td>
                            <td className="align-middle"> {item.amount} </td>
                            <td className="align-middle"> {item.received} </td>
                            <td className="align-middle">
                                <span className={"badge badge-"+item.statusColor}>{item.status}</span>
                            </td>
                            <td className="align-middle text-right">
                                <div className="dropdown">
                                    <button type="button" className="btn btn-sm btn-icon btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true" data-bs-offset="1,9"><i className="fa fa-ellipsis-h"></i> <span className="sr-only">Actions</span></button>
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
 
export default Invoices;