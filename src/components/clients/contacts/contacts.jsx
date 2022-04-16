const Contacts = ({data,onDelete,onEdit}) => {
    return ( 
        <div className="card mt-4">
            <div className="card-body">
                <h2 className="card-title"> Contacts </h2>
                <div className="table-responsive">
                    <table className="table table-hover" style={{minWidth: "678px"}}>
                        <thead>
                            <tr>
                                <th> Name </th>
                                <th> Email </th>
                                <th> Phone </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map(item=>(
                                <tr key={item._id}>
                                    <td className="align-middle"> {item.name} </td>
                                    <td className="align-middle"> {item.email} </td>
                                    <td className="align-middle"> {item.phone} </td>
                                    <td className="align-middle text-right rtl-text-right">
                                        <button type="button" className="btn btn-sm btn-icon btn-secondary" onClick={()=>onEdit(item)} ><i className="fa fa-pencil-alt"></i> <span className="sr-only">Edit</span></button>
                                        <button type="button" className="btn btn-sm btn-icon btn-secondary" onClick={()=>onDelete(item)}><i className="far fa-trash-alt"></i> <span className="sr-only">Remove</span></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="card-footer">
                <a href="#clientContactNewModal" className="card-footer-item" data-bs-toggle="modal"><i className="fa fa-plus-circle mr-1"></i> Add contact</a>
            </div>
        </div>
     );
}
 
export default Contacts;