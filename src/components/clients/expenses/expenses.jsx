const Expenses = ({data,onEdit,onDelete}) => {
    return ( 
        <div className="card">
            <div className="card-header d-flex">
                <div className="dropdown">
                    <button className="btn btn-secondary" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="1,9"><span>This Year</span> <i className="fa fa-fw fa-caret-down"></i></button> 
                    <div className="dropdown-menu dropdown-menu-md dropdown-menu-right stop-propagation">
                        <div className="dropdown-arrow"></div>
                        <div className="dropdown-menu-animation">
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="clientExpensesDateFilter0" name="clientExpensesDateFilter" value="0"/> <label className="custom-control-label" for="clientExpensesDateFilter0">Last 7 days</label>
                            </div>
                            
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="clientExpensesDateFilter1" name="clientExpensesDateFilter" value="1"/> <label className="custom-control-label" for="clientExpensesDateFilter1">Last 3 days</label>
                            </div>
                            
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="clientExpensesDateFilter2" name="clientExpensesDateFilter" value="2"/> <label className="custom-control-label" for="clientExpensesDateFilter2">This month</label>
                            </div>
                            
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="clientExpensesDateFilter3" name="clientExpensesDateFilter" value="3"/> <label className="custom-control-label" for="clientExpensesDateFilter3">Last month</label>
                            </div>
                            
                            <div className="custom-control custom-radio">
                                <input type="radio" className="custom-control-input" id="clientExpensesDateFilter4" name="clientExpensesDateFilter" value="4" checked="true"/> <label className="custom-control-label" for="clientExpensesDateFilter4">This year</label>
                            </div>
                        </div>
                    </div>
                </div>
                <button id="client-expenses-tab" type="button" className="btn btn-primary ml-auto">Add expense</button>
            </div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th> Date </th>
                            <th> Amount </th>
                            <th style={{minWidth: "200px"}}> Vendor </th>
                            <th></th>
                            <th> Category </th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item=>(
                            <tr key={item._id}>
                                <td className="align-middle"> {item.date} </td>
                                <td className="align-middle"> {item.amount} </td>
                                <td className="align-middle"> {item.vendor} </td>
                                <td className="align-middle">
                                    {item.paperClip && <i className="fa fa-paperclip text-muted"></i>}
                                </td>
                                <td className="align-middle">
                                    <span className={"badge text-white bg-"+item.categoryColor}>{item.category}</span>
                                </td>
                                <td className="align-middle text-right">
                                    <div className="dropdown">
                                        <button type="button" className="btn btn-sm btn-icon btn-secondary" data-bs-toggle="dropdown" aria-expanded="false" aria-haspopup="true" data-bs-offset="-1,9"><i className="fa fa-ellipsis-h"></i> <span className="sr-only">Actions</span></button>
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
 
export default Expenses;