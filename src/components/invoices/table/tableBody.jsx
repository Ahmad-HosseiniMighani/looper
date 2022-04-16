import React, { Component } from "react";
import { Link } from 'react-router-dom';

class TableBody extends Component {
  render() {
    const { data, selectInvoice, selectedInvoices, handleViewInvoice, handleEditInvoice, handleSendReminderInvoice, handleDownloadPDFInvoice, handleInvoiceShareTo, handleDeleteInvoice } = this.props;

    return (
      <tbody>
        {data.map(invoice => (
          <tr role="row" key={invoice._id}>
            <td className=" col-checker align-middle">
                <div className="custom-control custom-control-nolabel custom-checkbox">
                    <input type="checkbox" id={invoice._id} className="custom-control-input" onClick={()=> selectInvoice(invoice._id)} checked={selectedInvoices.indexOf(invoice._id)>=0 ? true : false}/>
                    <label className="custom-control-label" htmlFor={invoice._id}></label>
                </div>
            </td>
            <td className=" align-middle"><Link to={"/invoice?id="+invoice._id}>{invoice._id}</Link></td>
            <td className="align-middle">{invoice.client}</td>
            <td className="align-middle">{invoice.dueDate}</td>
            <td className="align-middle"><span className={"badge badge-subtle badge-"+invoice.status.colorTag}>{invoice.status.title}</span></td>
            <td className="align-middle"><div className="text-muted">{invoice.amount}</div></td>
            <td className=" align-middle"><div className="text-muted">{invoice.paid}</div></td>
            <td className=" align-middle">{invoice.balance}</td>
            <td className=" align-middle text-right">
                <div className="dropdown">
                    <button type="button" className="btn btn-secondary btn-icon btn-sm" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="-3,9"><i className="fas fa-ellipsis-h"></i></button>
                    <div className="dropdown-menu">
                        <div className="dropdown-arrow"></div>
                        <div className="dropdown-menu-animation">
                          <Link to="#" className="dropdown-item" onClick={()=>handleViewInvoice(invoice._id)}>View</Link>
                          <Link to="#" className="dropdown-item" onClick={()=>handleEditInvoice(invoice._id)}>Edit</Link>
                          <Link to="#" className="dropdown-item" onClick={()=>handleSendReminderInvoice(invoice._id)}>Send reminder</Link>
                          <div className="dropdown-divider"></div>
                          <Link to="#" className="dropdown-item" onClick={()=>handleDownloadPDFInvoice(invoice._id)}>Download pdf</Link>
                          <Link to="#" className="dropdown-item" onClick={()=>handleInvoiceShareTo(invoice._id)}>Share to...</Link>
                          <div className="dropdown-divider"></div>
                          <Link to="#" className="dropdown-item" onClick={()=>handleDeleteInvoice(invoice._id)}>Delete</Link>
                        </div>
                    </div>
                </div>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
