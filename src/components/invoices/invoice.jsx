import React, { Component } from 'react';
import invoiceImage from "../../imgs/invoice.jpg"
import { Link } from 'react-router-dom';
class invoice extends Component {
    state = { 
        _id: "",
        amount: 0,
        paid: 0,
        history: [],
     }
    componentDidMount(){
        //get Data for this invoice from props here
        this.setState({
            _id: "INV-65D9E592",
            amount: 3076,
            paid: 2322,
            history : [
                {_id: 1, action: "invoiceCreated", date: "08/18/2018 – 12:42 PM", details: undefined},
                {_id: 2, action: "invoiceSent", date: "08/18/2018 – 12:42 PM", details: "something"},
                {_id: 3, action: "invoiceViewed", date: "08/19/2018 – 09:11 AM", details: undefined},
                {_id: 4, action: "invoicePartialPaid", date: "08/19/2018 – 10:36 AM", details: "something"},
                {_id: 5, action: "invoiceSent", date: "12/21/2018 – 12:42 PM", details: "something"},
                {_id: 6, action: "invoiceViewed", date: undefined, details: undefined},
                {_id: 7, action: "invoiceFullyPaid", date: undefined, details: undefined}
            ],

        })
    }
    numberWithCommas(number) {
        return number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
    handleDownloadPDF = (invoice_id) => {
        console.log(`You clicked on "Download PDF" button for invoice with id "${invoice_id}"`)
    }
    handleShare = (invoice_id) => {
        console.log(`You clicked on "Share..." button for invoice with id "${invoice_id}"`)
    }
    handleMarkAsPaid = (invoice_id) => {
        console.log(`You clicked on "Mark As Paid" button for invoice with id "${invoice_id}"`)
    }
    render() { 
        const { _id, amount, paid, history } = this.state
        return ( 
            <div className="wrapper">
                <div className="page has-sidebar has-sidebar-expand-xl"><div className="sidebar-backdrop"></div>
                    <div className="page-inner">
                        <header className="page-title-bar">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item active">
                                        <Link to="/invoices"><i className="breadcrumb-icon fa fa-angle-right ml-2"></i>invoices</Link>
                                    </li>
                                </ol>
                            </nav>
                            <div className="d-md-flex">
                                <h1 className="page-title"> {_id} </h1>
                                <div className="mr-auto">
                                    <button type="button" className="btn btn-primary">Add payment</button>
                                </div>
                            </div>
                        </header>
                        <div className="page-section">
                            <div className="section-block">
                                <div className="invoice-wrapper">
                                    <div className="invoice-actions">
                                        <div className="dropdown">
                                            <button type="button" className="btn btn-lg btn-secondary rounded-0" data-bs-toggle="dropdown" data-bs-offset="0,9" aria-haspopup="true" aria-expanded="false"><span className="fa fa-caret-down"></span></button>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <div className="dropdown-arrow"></div>
                                                <div className="dropdown-menu-animation">
                                                    <button type="button" className="dropdown-item" onClick={()=>this.handleDownloadPDF(_id)}>Download PDF</button>
                                                    <button type="button" className="dropdown-item" onClick={()=>this.handleShare(_id)}>Share...</button>
                                                    <div className="dropdown-divider"></div>
                                                    <button type="button" className="dropdown-item" onClick={()=>this.handleMarkAsPaid(_id)}>Mark as paid</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* this Div have content of invoice which i dont know how it would look like but its easy to transfer it to React component */}
                                    <div id="invoice" className="invoice" data-id={_id} style={{display: "none"}}>
                                        <div className="invoice-header">
                                            <div className="row">
                                                <div className="col d-flex">
                                                    <h2 className="invoice-brand align-self-center">
                                                        <img src={"logo here"} width="124" alt=""/>
                                                        <span className="sr-only">invoice Brand</span>
                                                    </h2>
                                                </div>
                                                <div className="col">
                                                    <table className="table table-borderless table-sm">
                                                        <tbody>
                                                            <tr>
                                                                <td colspan="2">
                                                                    <small>Amount (USD)</small>
                                                                    <h5> $3.096,00 </h5>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <small>invoice No</small><br/>
                                                                    <h5> {_id} </h5>
                                                                </td>
                                                                <td>
                                                                    <small>Due Date</small><br/>
                                                                    <h5> Jan 18, 2019 </h5>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="invoice-body">
                                            <div className="row">
                                                <div className="col">
                                                    <div className="invoice-sender">
                                                        <dl>
                                                            <dt> From: </dt>
                                                            <dd> Stilearning </dd>
                                                            <dd> 983 Kunde Glens, Pourosmouth<br/> AK 68019-8335 </dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="invoice-recipient">
                                                        <dl>
                                                            <dt> Billed To: </dt>
                                                            <dd> Ron-tech </dd>
                                                            <dd> 3272 Mills Valleys Suite 412, Port Willis<br/> NV 69859 </dd>
                                                        </dl>
                                                    </div>
                                                </div>
                                            </div>
                                            <table className="table table-sm">
                                            <caption className="invoice-title">
                                                <span>invoice</span><br/>
                                                <span className="text-primary">Looper Admin Theme Custom Design</span>
                                            </caption>
                                                <thead>
                                                    <tr>
                                                        <th style={{"min-width": "375px"}}> Description </th>
                                                        <th className="text-right"> Qty </th>
                                                        <th> Price </th>
                                                        <th className="text-right"> Amount (USD) </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td> Create mobile app </td>
                                                        <td className="text-right"> 1 </td>
                                                        <td> $3.000,00 </td>
                                                        <td className="text-right"> $3.000,00 </td>
                                                    </tr>
                                                    <tr>
                                                        <td> Looper Admin Theme (Standard License) </td>
                                                        <td className="text-right"> 4 </td>
                                                        <td> $49,00 </td>
                                                        <td className="text-right"> $196,00 </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="4"></td>
                                                    </tr>
                                                </tbody>
                                                <tfoot className="table-borderless">
                                                    <tr>
                                                        <th colspan="2"></th>
                                                        <th> Total </th>
                                                        <th className="text-right"> $3.196,00 </th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="2"></th>
                                                        <th> Coupon </th>
                                                        <th className="text-right"> $100,00 </th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="2"></th>
                                                        <th> Due </th>
                                                        <th className="text-right"> $3.096,00 </th>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                        </div>
                                        <div className="invoice-footer">
                                            <p>
                                            <strong>Thanks for buying or notes</strong>. Please click button with caret down icon above to generate and download this invoice in pdf format. </p>
                                        </div>
                                    </div>
                                    <img className="invoice-img" style={{"max-width": "768px"}} src={invoiceImage}/>
                                </div>
                            </div>
                        </div>
                        <div className="page-sidebar">
                            <div className="card card-reflow">
                                <div className="card-body">
                                    <h4 className="card-title"> Payments </h4>
                                    <div className="progress progress-sm rounded-0 mb-1">
                                        <div className="progress-bar bg-success" role="progressbar" style={{width: ((paid/amount*100) || 0)+"%"}}aria-valuenow={((paid/amount*100) || 0)} aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <p className="text-muted text-weight-bolder small" dir="ltr" /*temparory*/> ${this.numberWithCommas(paid)} of ${this.numberWithCommas(amount)} </p>
                                </div>
                                <div className="card-body border-top">
                                    <h4 className="card-title"> History </h4>
                                    <ul className="timeline timeline-dashed-line">
                                        {history.map(h => (
                                            <li className="timeline-item">
                                                <div className="timeline-figure">
                                                    <span class={"tile tile-circle tile-xs "+(h.date && "bg-success")}>{h.date && <i className="fa fa-check"></i>}</span>
                                                </div>
                                                <div className="timeline-body">
                                                    <h6 className="timeline-heading"> {h.action+" "}
                                                    {h.details && <a href={"#"+h.action+"-"+h._id} className="text-muted"><small>details</small></a>}
                                                    </h6>
                                                    <span className="timeline-date">{h.date}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default invoice;