import React, { Component } from 'react';
import $ from "jquery"
import Sortable from 'sortablejs';
import Clientlist from './clients/clientList';
import BillingAddress from './clients/billingAndContact/billingAddress';
import Contacts from './clients/contacts/contacts';
import AddNewContact from './clients/contacts/addNewContact';
import EditContact from './clients/contacts/EditContact';
import EditBillingAddress from './clients/billingAndContact/EditBillingAddress';
import ToDo from './clients/toDo/todo';
import Projects from './clients/projects/projects';
import Invoices from './clients/invoices/invoices';
import Expenses from './clients/expenses/expenses';

class ClientsTemplate extends Component {
    state = { 
        clients: [],
        billingAddress:{
            companyName: "",
            street: "",
            suite: "",
            zipCode: "",
            country:{
                _id: 1,
                name: ""
            },
            city:{
                _id: 1,
                name: ""
            }
        },
        contacts: [],
        modalEditContact: "",
        todos: [],
        projects: [],
        invoices: [],
        expenses: [],
     }
    componentDidMount(){
        // Sortable list
        $('[data-toggle="sortable"]').each(function () {
            var e = $(this).data();
            (e.animation = e.animation || 150);
            (e.filter = e.filter || ".ignore-sort");
            Sortable.create(this, e);
        });
        //Example Api calls
        try{
            const clients = [
                {_id: 1,title: "Zathunicon, Inc.", address: "San Francisco, United States", colorTag: "blue", },
                {_id: 2,title: "Faxquote", address: "Pekalongan, Indonesia", colorTag: "indigo", },
                {_id: 3,title: "Opentech", address: "Los Angeles, United States", colorTag: "purple", },
                {_id: 4,title: "Codehow", address: "Mexico City, Mexico", colorTag: "pink", },
                {_id: 5,title: "Ron-tech", address: "Pekalongan, Indonesia", colorTag: "red", },
                {_id: 6,title: "Groovestreet", address: "London, United Kingdom", colorTag: "orange", },
                {_id: 7,title: "Bioplex et Chandon", address: "Hyderabad, India", colorTag: "yellow", },
                {_id: 8,title: "Streethex", address: "Mexico City, Mexico", colorTag: "green", },
                {_id: 9,title: "Hottechi Motor Company, Ltd", address: "Jakarta, Indonesia", colorTag: "teal", },
                {_id: 10,title: "Newex", address: "Tokyo, Japan", colorTag: "cyan", },
                {_id: 11,title: "Finjob", address: "Paris, France", colorTag: "blue", },
                {_id: 12,title: "Sonron, Inc.", address: "Beijing, China", colorTag: "indigo", },
                {_id: 13,title: "Doncon", address: "Delhi, India", colorTag: "purple", },
                {_id: 14,title: "Conecom", address: "São Paulo, Brazil", colorTag: "pink", },
                {_id: 15,title: "J-Texon Systems, Inc.", address: "New York City, United States", colorTag: "red", },
            ];
            const billingAddress = {
                companyName: "Zathunicon, Inc.",
                street: "280 Suzanne Throughway",
                suite: "Breannabury",
                zipCode: "45801",
                country:{
                    _id: 1,
                    name: "United States"
                },
                city:{
                    _id: 1,
                    name: "San Francisco"
                }
            }
            const contacts = [
                {_id: 0, name: "Alexane Collins", email: "fhauck@gmail.com", phone: "(062) 109-9222"}
            ]
            const todos = [
                {_id: 1, title: "Add payment method to user-billing page", date : "", isChecked: false},
                {_id: 2, title: "Sidebar enhancement: adding fluid width & expand classes like bootstrap navbar", isChecked:true},
                {_id: 3, title: "Add view / edit task modal", date : ""},
                {_id: 4, title: "Increase app-aside zindex on screen md & up", date : "Today", isChecked: false},
                {_id: 5, title: "Change stacked-menu bg to transparent", isChecked:true},
                {_id: 6, title: "Fix color-picker", isChecked:true},
                {_id: 7, title: "Add create new task modal", isChecked:true},
                {_id: 8, title: "Add flagging class for macos", isChecked:true},
                {_id: 9, title: "Fixed overlap flatpickr zindex in modal", date : "", isChecked: false},
                {_id: 10, title: "Mark toastr as a deprecated dependencies", isChecked:true},
                {_id: 11, title: "Add filterlist fn to main script", date : "", isChecked: false},
                {_id: 12, title: "Fix or remove .custom-control-nolabel", isChecked:true},
                {_id: 13, title: "Change datatables sort icons", isChecked:true},
                {_id: 14, title: "Reinvent apple fonts system", date : "", isChecked: false},
                {_id: 15, title: "Improve jqvmap zoom buttons", isChecked:true},
                {_id: 16, title: "Improve pagination active bg", isChecked:true},
                {_id: 17, title: "Fix knobify footer item", isChecked:true},
                {_id: 18, title: "Handle autofocus input when modal/dropdown shown", isChecked:true},
                {_id: 19, title: "Add new tasks list input", isChecked:true},
                {_id: 20, title: "Add page fullscreen behavior", isChecked:true},
                {_id: 21, title: "Make content layout fluid", isChecked:true},
                {_id: 22, title: "Different render line-height between OS due to different font-family", isChecked:true},
                {_id: 23, title: "Add scrollable content to tasks component", isChecked:true},
                {_id: 24, title: "Fixed .message-title line-height", isChecked:true},
                {_id: 25, title: "Re-order navigations", isChecked:true},
                {_id: 26, title: "Add modal right & left", isChecked:true},
                {_id: 27, title: "Clean up line-height comments", isChecked:true},
                {_id: 28, title: "Improved grays color scheme", isChecked:true},
                {_id: 29, title: "Prevent form-control height since v4.1.3", isChecked:true},
                {_id: 30, title: "Fixed item align on dropdown-sheet", isChecked:true},
                {_id: 31, title: "Re-store pooper.js due to lack of dropdown position on bootstrap-bundle", isChecked:true},
                {_id: 32, title: "Update Bootstrap to v4.1.3", isChecked:true},
                {_id: 33, title: "Add animation class to .progress", isChecked:true},
                {_id: 34, title: "Remove popper.js from package.json - use bootstrap-bundle instead", isChecked:true},
            ]
            const projects = [
                {_id: 1, fullName: "Syrena Project", shortName: "SP", nameTileColorTag: "pink", startDate: "04/10/2018", dueDate: "08/18/2018", badgeLabel: "On Going", badgeColor: "warning", link : "link"},
                {_id: 2, fullName: "Mobile App Gex", shortName: "MG", nameTileColorTag: "green", startDate: "06/12/2018", dueDate: "07/03/2018", badgeLabel: "Completed", badgeColor: "success", link : "link"},
                {_id: 3, fullName: "Landing Page Booster", shortName: "LB", nameTileColorTag: "red", startDate: "09/29/2018", dueDate: "11/24/2018", badgeLabel: "Completed", badgeColor: "success", link : "link"}
            ]
            const invoices = [
                {_id: 9463, projectName: "Syrena Project", projectShortName: "SP", projectNameTileColorTag: "pink", paperClip: false, dueDate: "09/16/2018", amount: "$1,500", received: "$1,500", status: "Paid", statusColor: "success", link : "link"},
                {_id: 754, projectName: "Mobile App Gex", projectShortName: "BA", projectNameTileColorTag: "purple", paperClip: false, dueDate: "12/13/2018", amount: "$1,000", received: "-", status: "Outstanding", statusColor: "warning", link : "link"},
                {_id: 8613, projectName: "SVG Icon Bundle", projectShortName: "SB", projectNameTileColorTag: "teal", paperClip: true, dueDate: "02/09/2019", amount: "$3,000", received: "$500", status: "Outstanding", statusColor: "warning", link : "link"},
                {_id: 9458, projectName: "Landing Page Booster", projectShortName: "LB", projectNameTileColorTag: "red", paperClip: false, dueDate: "05/30/2018", amount: "$499", received: "-", status: "Past Due", statusColor: "danger", link : "link"}
            ]
            const expenses = [
                {_id: 1, date: "04/11/2019", amount: "$360.00", vendor: "Facebook, Inc.", paperClip: true, category: "Campaign", categoryColor: "purple"},
                {_id: 2, date: "09/15/2019", amount: "$49.00", vendor: "Adobe Systems", paperClip: true, category: "Other", categoryColor: "orange"},
                {_id: 3, date: "10/11/2019", amount: "$610.00", vendor: "InVisionApp, Inc.", paperClip: true, category: "Design", categoryColor: "pink"}
            ]
            this.setState({clients,billingAddress,contacts,todos,projects,invoices,expenses})
        }catch(e){
            //turn back state
        }
    }
    handleClientSelect = (_id) => {
        console.log("You Clicked on Client with ID:"+_id);
    }
    handleContactDelete = (contact) => {
        //you can make this a async function and call apis here
        const originalContacts = [...this.state.contacts]
        const filteredContacts = originalContacts.filter(item => {if(item != contact) return item})
        this.setState({contacts:filteredContacts})
    }
    handleContactEdit = (contact) => {
        this.setState({modalEditContact:contact})
        let myModal = new window.bs.Modal(document.getElementById("clientContactEditModal"), {});
        myModal.show()
    }
    doAddNewContact = (contact) => {
        const contacts = [...this.state.contacts, contact]
        this.setState({contacts})
    }
    doEditContact = (contact) => {
        const contacts = [...this.state.contacts]
        //next line wont work properly because all new contacts will be given _id="new" to fix it i could install uuid js but we should delete it later on so its up to you... make _id unique and all will be fixed ^^
        for(let i=0;i<contacts.length;i++) if (contacts[i]._id == contact._id) contacts[i]=contact;
        this.setState({contacts})
        let myModal = window.bs.Modal.getInstance(document.getElementById("clientContactEditModal"));
        myModal.hide()
    }
    doEditBillingAddress = (billingAddress) => {
        this.setState({billingAddress})
        let myModal2 = window.bs.Modal.getInstance(document.getElementById("clientBillingEditModal"));
        myModal2.hide("")
    }
    handleClickToDo = (_id) => {
        // you can make this a async function and call api here :)
        const {todos} = this.state;
        for(let i = 0; i<todos.length; i++) if(todos[i]._id == _id) todos[i].isChecked = !todos[i].isChecked
        this.setState({todos})
    }
    handleEditToDo = (_id) => {
        console.log(`you've click on edit btn for ToDo '${_id}'`)
    }
    handleDeleteToDo = (_id) => {
        const originalTodos = [...this.state.todos];
        const todos = originalTodos.filter(item => item._id != _id)
        this.setState({todos})
    }
    handleProjectEdit = (_id) => {
        console.log(`You Clicked on Edit Btn for project with id '${_id}'`)
    }
    handleProjectDelete = (_id) => {
        console.log(`You Clicked on Delete Btn for project with id '${_id}'`)
    }
    handleInvoicesEdit = (_id) => {
        console.log(`You Clicked on Edit Btn for Invoices with id '${_id}'`)
    }
    handleInvoicesDelete = (_id) => {
        console.log(`You Clicked on Delete Btn for Invoices with id '${_id}'`)
    }
    handleExpensesEdit = (_id) =>{
        console.log(`You Clicked on Edit Btn for Expenses with id '${_id}'`)
    }
    handleExpensesDelete = (_id) =>{
        console.log(`You Clicked on Delete Btn for Expenses with id '${_id}'`)
    }
    render() {
        const {clients,billingAddress,contacts,todos,projects,invoices,expenses} = this.state;
        return (
            <React.Fragment>
                <div className="wrapper">
                    <div className="page has-sidebar has-sidebar-fluid has-sidebar-expand-xl">
                        <Clientlist 
                        onSelect={this.handleClientSelect}
                        data={clients}
                        />
                        <div className="page-sidebar bg-light">
                            <header className="sidebar-header d-xl-none">
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item active">
                                            <a href="#" data-toggle="sidebar" data-sidebar="hi"><i className="breadcrumb-icon fa fa-angle-left rtl mr-2"></i>Back</a>
                                        </li>
                                    </ol>
                                </nav>
                            </header>
                            <div className="sidebar-section sidebar-section-fill">
                                <h1 className="page-title">
                                <i className="far fa-building text-muted mr-2"></i> Zathunicon, Inc. </h1>
                                <p className="text-muted"> San Francisco, United States </p>
                                <div className="nav-scroller border-bottom">
                                <ul className="nav nav-tabs">
                                    <li className="nav-item">
                                    <a className="nav-link active show" data-bs-toggle="tab" href="#client-billing-contact">Billing &amp; Contact</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#client-tasks">To Do</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#client-projects">Projects</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#client-invoices">Invoices</a>
                                    </li>
                                    <li className="nav-item">
                                    <a className="nav-link" data-bs-toggle="tab" href="#client-expenses">Expenses</a>
                                    </li>
                                </ul>
                                </div>
                                <div className="tab-content pt-4" id="clientDetailsTabs">
                                    <div className="tab-pane fade show active" id="client-billing-contact" role="tabpanel" aria-labelledby="client-billing-contact-tab">
                                        
                                        <BillingAddress data={billingAddress}/>
                                        <Contacts data={contacts} onDelete={this.handleContactDelete} onEdit={this.handleContactEdit}/>
                                        
                                    </div>
                                    <div className="tab-pane fade" id="client-tasks" role="tabpanel" aria-labelledby="client-tasks-tab">
                                        <ToDo 
                                            data={todos} 
                                            handleClick={this.handleClickToDo}
                                            handleEdit={this.handleEditToDo}
                                            handleDelete={this.handleDeleteToDo}
                                        />
                                    </div>
                                    <div className="tab-pane fade" id="client-projects" role="tabpanel" aria-labelledby="client-projects-tab">
                                        <Projects 
                                            data={projects}
                                            onEdit={this.handleProjectEdit}
                                            onDelete={this.handleProjectDelete}
                                        />
                                    </div>
                                    <div className="tab-pane fade" id="client-invoices" role="tabpanel" aria-labelledby="client-invoices-tab">
                                        <Invoices 
                                            data={invoices}
                                            onEdit={this.handleInvoicesEdit}
                                            onDelete={this.handleInvoicesDelete}
                                        />
                                    </div>
                                    <div className="tab-pane fade" id="client-expenses" role="tabpanel" aria-labelledby="client-expenses-tab">
                                        <Expenses 
                                            data={expenses}
                                            onEdit={this.handleExpensesEdit}
                                            onDelete={this.handleExpensesDelete}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* iDK What should i do with this data :() */}
                        <form id="clientNewForm" name="clientNewForm">
                        <div className="modal fade" id="clientNewModal" tabindex="-1" role="dialog" aria-labelledby="clientNewModalLabel" aria-hidden="true">
                            
                            <div className="modal-dialog" role="document">
                            
                            <div className="modal-content">
                                
                                <div className="modal-header">
                                <h6 id="clientNewModalLabel" className="modal-title inline-editable">
                                    <span className="sr-only">Client name</span> <input type="text" className="form-control form-control-lg" placeholder="E.g. Stilearning, Inc." required=""/>
                                </h6>
                                </div>
                                
                                <div className="modal-body">
                                
                                <div className="form-row">
                                    <div className="col-md-12">
                                    <div className="form-group">
                                        <label for="cnContactName">Contact name</label> <input type="text" id="cnContactName" className="form-control"/>
                                    </div>
                                    </div>
                                    <div className="col-md-12">
                                    <div className="form-group">
                                        <label for="cnContactEmail">Contact email</label> <input type="email" id="cnContactEmail" className="form-control"/>
                                    </div>
                                    </div>
                                    <div className="col-md-12">
                                    <div className="form-group">
                                        <label for="cnStreet">Street</label> <input type="text" id="cnStreet" className="form-control"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="cnSuite">Suite</label> <input type="text" id="cnSuite" className="form-control"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="cnZip">Zip</label> <input type="text" id="cnZip" className="form-control"/>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="cnCountry">Country</label> <select id="cnCountry" className="custom-select d-block w-100">
                                        <option value=""> Choose... </option>
                                        <option> United States </option>
                                        </select>
                                    </div>
                                    </div>
                                    <div className="col-md-6">
                                    <div className="form-group">
                                        <label for="cnCity">City</label> <select id="cnCity" className="custom-select d-block w-100">
                                        <option value=""> Choose... </option>
                                        <option> San Francisco </option>
                                        </select>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                
                                <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Save</button> <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                            </div>
                        </div>
                        </form>
                        {/* iDK What should i do with this data :() */}
                        <EditBillingAddress billingAddress={billingAddress} handleEditBillingAddress={this.doEditBillingAddress}/>
                        <AddNewContact handleAddNewContact={this.doAddNewContact}/>
                        <EditContact contact={this.state.modalEditContact} handleEditContact={this.doEditContact}/>
                    </div> 
                </div>
            </React.Fragment>
        );
    }
}
 
export default ClientsTemplate;