import React, { Component } from 'react';
import _ from "lodash";
import InvoiceTable from './invoiceTable';
import { paginate } from "../../js/paginate";
import Pagination from './../common/pagination';

class InvoiceList extends Component {
    state = { 
        invoices: [],
        pageSize: 10,
        currentPage: 1,
        sortColumn: { path: "status", order: "asc" },
        selectedFilter : "all",
        selectedInvoices: [],
    }
    componentDidMount(){
        const invoices = [
            {_id: "INV-26BBD529", client: "Victoria Best", dueDate: "23/07/2019", status: {title: "Sent", colorTag: "warning"}, amount: "$9,510.00", paid: "$0.00", balance: "$9,510.00"},
            {_id: "INV-4E391A2B", client: "Tashya Lang", dueDate: "03/06/2018", status: {title: "Paid", colorTag: "success"}, amount: "$8,091.00", paid: "$8,091.00", balance: "$0.00"},
            {_id: "INV-A16CF963", client: "Sonia Gould", dueDate: "27/01/2018", status: {title: "Paid", colorTag: "success"}, amount: "$8,092.00", paid: "$8,092.00", balance: "$0.00"},
            {_id: "INV-FFDEBA5D", client: "Sacha Chase", dueDate: "06/11/2019", status: {title: "Sent", colorTag: "warning"}, amount: "$6,635.00", paid: "$1,200.00", balance: "$5,435.00"},
            {_id: "INV-DD941A05", client: "Roth Andrews", dueDate: "27/09/2019", status: {title: "Paid", colorTag: "success"}, amount: "$5,903.00", paid: "$5,903.00", balance: "$0.00"},
            {_id: "INV-5E5A00A7", client: "Patrick Sloan", dueDate: "05/04/2019", status: {title: "Overdue", colorTag: "danger"}, amount: "$5,992.00", paid: "$2,110.00", balance: "$3,882.00"},
            {_id: "INV-805F65EB", client: "Lewis Mendez", dueDate: "08/05/2018", status: {title: "Paid", colorTag: "success"}, amount: "$5,642.00", paid: "$5,642.00", balance: "$0.00"},
            {_id: "INV-6E5C29B0", client: "Keegan Glass", dueDate: "20/03/2019", status: {title: "Paid", colorTag: "success"}, amount: "$9,257.00", paid: "$9,257.00", balance: "$0.00"},
            {_id: "INV-65D9E592", client: "Jaquelyn Tran", dueDate: "27/11/2019", status: {title: "Sent", colorTag: "warning"}, amount: "$5,945.00", paid: "$0.00", balance: "$5,945.00"},
            {_id: "INV-BC2F7603", client: "Christine Gonzalez", dueDate: "09/04/2018", status: {title: "Paid", colorTag: "success"}, amount: "$9,829.00", paid: "$9,829.00", balance: "$0.00"},
            {_id: "INV-B8A9AB03", client: "Callie Houston", dueDate: "20/07/2019", status: {title: "Paid", colorTag: "success"}, amount: "$6,793.00", paid: "$6,793.00", balance: "$0.00"},
            {_id: "INV-53BD0C2D", client: "Burton Torres", dueDate: "23/09/2018", status: {title: "Paid", colorTag: "success"}, amount: "$5,616.00", paid: "$5,616.00", balance: "$0.00"},
            {_id: "INV-3ECA7A8D", client: "Bruno Campos", dueDate: "01/09/2018", status: {title: "Paid", colorTag: "success"}, amount: "$8,707.00", paid: "$8,707.00", balance: "$0.00"},
            {_id: "INV-6302F2DB", client: "Britanni Reilly", dueDate: "23/05/2018", status: {title: "Sent", colorTag: "warning"}, amount: "$9,708.00", paid: "$5,000.00", balance: "$4,708.00"}
        ]
        this.setState({invoices})
    }
    handleSort = (sortColumn) => {
        this.setState({ sortColumn });
    };
    handleFilterSelect = ({ currentTarget: input }) => {
        this.setState({ selectedFilter: input.value, currentPage: 1 });
    };
    handlePageChange = (page) => {
        this.setState({ currentPage: page });
    };
    handlePagePrev = () => {
        const currentPage = this.state.currentPage
        this.setState({ currentPage: currentPage-1 });
    };
    handlePageNext = () => {
        const currentPage = this.state.currentPage
        this.setState({ currentPage: currentPage+1 });
    };
    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            sortColumn,
            selectedFilter,
            invoices: allInvoices,
        } = this.state;

        const filtered =
        selectedFilter && selectedFilter != "all"
            ? allInvoices.filter((invoice) => {
                return invoice.status.title.toLowerCase() == selectedFilter.toLowerCase();
              })
            : allInvoices;
        const sorted = sortColumn.path.toLowerCase() === "status" ? _.orderBy(filtered, item => item[sortColumn.path.toLowerCase()].title, [sortColumn.order]) : _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const invoices = paginate(sorted, currentPage, pageSize);

        return { totalCount: filtered.length, data: invoices };
    };
    selectInvoice = (id) => {
        const selectedInvoices = [...this.state.selectedInvoices]
        if (id === "all"){
            const {data: invoices} = this.getPagedData()
            let newInvoiceFlag = false
            for(let i=0; i< invoices.length; i++){
                if(selectedInvoices.indexOf(invoices[i]._id) < 0){
                    newInvoiceFlag = true;
                    selectedInvoices.push(invoices[i]._id)
                }
            }
            if(!newInvoiceFlag) selectedInvoices.splice(0,selectedInvoices.length) // because its const 
        }else{
            if(selectedInvoices.indexOf(id) >= 0) selectedInvoices.splice(selectedInvoices.indexOf(id),1)
            else selectedInvoices.push(id)
        }
        this.setState({selectedInvoices})
    }
    selectAllInvoicesInCurrentPage = () => {
        const selectedInvoices = [...this.state.selectedInvoices]
        const {data: invoices} = this.getPagedData()
        for(let i=0; i< invoices.length; i++){
            if(selectedInvoices.indexOf(invoices[i]._id) < 0){
                selectedInvoices.push(invoices[i]._id)
            }
        }
        this.setState({selectedInvoices})
    }
    unSelectAllInvoices = () => {
        this.setState({selectedInvoices: []})
    }
    isAllCheckedInCurrentPage = () => {
        const selectedInvoices = [...this.state.selectedInvoices]
        const {data: invoices} = this.getPagedData()
        let newInvoiceFlag = false
        for(let i=0; i< invoices.length; i++){
            if(selectedInvoices.indexOf(invoices[i]._id) < 0){
                newInvoiceFlag = true;
            }
        }
        return !newInvoiceFlag
    }
    handleBulkRemove = () => {
        const selectedInvoices = [...this.state.selectedInvoices]
        const invoices = this.state.invoices
        const remainingInvoices = invoices.filter(invoice => (selectedInvoices.indexOf(invoice._id)<0))
        this.setState({invoices: remainingInvoices, selectedInvoices: []})
    }
    handleBulkEdit = () => {
        console.log("You click on 'Bulk Edit' button")
    }
    handleSeparateActions = () => {
        console.log("You click on 'Separate Actions' button")
    }
    handleViewInvoice = (invoice_id) => {
        console.log(`You clicked on "View" Button with invoice id: "${invoice_id}"`)
    }
    handleEditInvoice = (invoice_id) => {
        console.log(`You clicked on "Edit" Button with invoice id: "${invoice_id}"`)
    }
    handleSendReminderInvoice = (invoice_id) => {
        console.log(`You clicked on "Send reminder" Button with invoice id: "${invoice_id}"`)
    }
    handleDownloadPDFInvoice = (invoice_id) => {
        console.log(`You clicked on "Download PDF" Button with invoice id: "${invoice_id}"`)
    }
    handleInvoiceShareTo = (invoice_id) => {
        console.log(`You clicked on "Share to..." Button with invoice id: "${invoice_id}"`)
    }
    handleDeleteInvoice = (invoice_id) => {
        const selectedInvoices = [...this.state.selectedInvoices]
        const invoices = this.state.invoices
        const remainingInvoices = invoices.filter(invoice => (invoice._id != invoice_id))
        selectedInvoices.splice(selectedInvoices.indexOf(invoice_id),1)
        this.setState({invoices: remainingInvoices, selectedInvoices})
    }
    render() {
        const { pageSize, currentPage, sortColumn, selectedInvoices } = this.state;
        const { totalCount, data: invoices } = this.getPagedData();
        return ( 
            <div className="wrapper">
                <div className="page">
                    <div className="page-inner">
                        <header className="page-title-bar">
                            <div className="d-flex justify-content-between">
                                <h1 className="page-title"> Invoices </h1>
                                <div className="btn-toolbar">
                                    <button type="button" className="btn btn-primary">Add invoice</button>
                                </div>
                            </div>
                        </header>
                        <div className="page-section">
                            <div className="card card-fluid">
                                <div className="card-header">
                                    <ul className="nav nav-tabs card-header-tabs">
                                        <li className="nav-item">
                                            <a className="nav-link show active" data-bs-toggle="tab" href="#tab1">Invoices</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" data-bs-toggle="tab" href="#tab2">Draft</a>
                                        </li>
                                        <li className="nav-item mr-auto align-self-center">
                                            <select className="custom-select" onChange={(e)=>this.handleFilterSelect(e)}>
                                                <option value="all"> Show all </option>
                                                <option value="sent"> Sent </option>
                                                <option value="paid"> Paid </option>
                                                <option value="overdue"> Overdue </option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                                {/* Dont know about data so i wont make a component out of this part for now */}
                                <div className="card-body border-bottom">
                                    <div className="row">
                                        <div className="col">
                                            <div className="metric">
                                                <p className="metric-label"> Total Revenue </p>
                                                <h5 className="metric-value"> $592,310 <sup className="badge text-success">+2.3%</sup></h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="metric">
                                                <p className="metric-label"> Expense </p>
                                                <h5 className="metric-value"> $153,635 </h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="metric">
                                                <p className="metric-label"> Total Tax </p>
                                                <h5 className="metric-value"> $2,635 </h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="metric">
                                                <p className="metric-label"> Net Profit </p>
                                                <h5 className="metric-value"> $426,320 <sup className="badge text-success">+3.25%</sup></h5>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="metric">
                                                <p className="metric-label"> Outstanding </p>
                                                <h5 className="metric-value"> $53,780 <sup className="badge text-danger">-12.43%</sup></h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div id="invoicesTable_wrapper" className="dataTables_wrapper dt-bootstrap4 no-footer">
                                        <div className="table-responsive">
                                            <InvoiceTable
                                                invoices={invoices}
                                                sortColumn={sortColumn}
                                                onSort={this.handleSort}
                                                selectInvoice={this.selectInvoice}
                                                isAllCheckedInCurrentPage={this.isAllCheckedInCurrentPage}
                                                selectedInvoices={selectedInvoices}
                                                selectAllInvoicesInCurrentPage={this.selectAllInvoicesInCurrentPage}
                                                unSelectAllInvoices={this.unSelectAllInvoices}
                                                handleBulkRemove={this.handleBulkRemove}
                                                handleBulkEdit={this.handleBulkEdit}
                                                handleSeparateActions={this.handleSeparateActions}
                                                handleViewInvoice={this.handleViewInvoice}
                                                handleEditInvoice={this.handleEditInvoice}
                                                handleSendReminderInvoice={this.handleSendReminderInvoice}
                                                handleDownloadPDFInvoice={this.handleDownloadPDFInvoice}
                                                handleInvoiceShareTo={this.handleInvoiceShareTo}
                                                handleDeleteInvoice={this.handleDeleteInvoice}
                                            />
                                        </div>
                                        <div className="mt-4">
                                            <div className="dataTables_paginate paging_simple_numbers" id="invoicesTable_paginate">
                                                <Pagination
                                                    itemsCount={totalCount}
                                                    pageSize={pageSize}
                                                    currentPage={currentPage}
                                                    onPageChange={this.handlePageChange}
                                                    onPagePrev={this.handlePagePrev}
                                                    onPageNext={this.handlePageNext}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default InvoiceList;