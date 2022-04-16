import Joi from "joi-browser";
import Form from "../../common/form";


class AddNewContact extends Form {
    state = { 
        data:{
            _id:"new",
            name: "",
            email: "",
            phone: "",
        },
        errors: []
     }
     schema = {
        name: Joi.string()
            .required()
            .label("نام")
            // .regex(/^[\u0600-\u06FF\s]+$/, "حروف فارسی")
            .error((errors) => this.ErrorsLang(errors)),
        email: Joi.string()
            .email()
            .required()
            .label("پست الکترونیک")
            .error((errors) => this.ErrorsLang(errors)),
        phone: Joi.string()
            .required()
            .label("شماره تماس")
            .regex(/^[0-9]+$/, "عدد")
            .min(11)
            .max(11)
            .error((errors) => this.ErrorsLang(errors)),
        _id: Joi.any()
     }
     doSubmit = () =>{
        //do some ap calls or anything you like im just adding to list localy :)
        this.props.handleAddNewContact(this.state.data);
        const data={
            _id:"new",
            name: "",
            email: "",
            phone: "",
        }
        this.setState({data})
     }
    render() { 
        return ( 
            <form id="clientContactNewForm" name="clientContactNewForm" onSubmit={this.handleSubmit}>
                <div className="modal fade" id="clientContactNewModal" tabindex="-1" role="dialog" aria-labelledby="clientContactNewModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 id="clientContactNewModalLabel" className="modal-title inline-editable">
                                    <span className="sr-only">Contact name</span> {this.renderInput2("name", "", "form-control form-control-lg", "Name (e.g. John Doe)")}
                                </h6>
                            </div>
                            <div className="modal-body">
                                {/* <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="email" id="cnEmail" className="form-control placeholder-shown" placeholder="Email" required=""/> <label for="cnEmail">Email</label>
                                    </div>
                                </div> */}
                                {this.renderInput3("email", "Email", "", "Email", "email")}
                                {this.renderInput3("phone", "Phone", "", "Phone", "tel")}
                                {/* <div className="form-group">
                                    <div className="form-label-group">
                                        <input type="tel" id="cnPhone" className="form-control placeholder-shown" placeholder="Phone"/> <label for="cnPhone">Phone</label>
                                    </div>
                                </div> */}
                            </div>
                            <div className="modal-footer">
                                <button className="btn btn-primary">Save</button> <button type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
         );
    }
}
 
export default AddNewContact;