import Joi from "joi-browser";
import Form from "../../common/form";

class EditContact extends Form {
    state = {
        data:{
            _id:"new",
            name: "",
            email: "",
            phone: "",
        },
        errors: [],
        prevProp: "",
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
     componentDidUpdate(){
         const {contact} = this.props;
         const {prevProp} = this.state;
         if(contact != ""
            && (contact._id != prevProp._id
            || contact.name != prevProp.name
            || contact.email != prevProp.email
            || contact.phone != prevProp.phone)
            ){
            const data = {
                _id: contact._id,
                name: contact.name,
                email: contact.email,
                phone: contact.phone,
             }
             this.setState({data , prevProp:data})
         }
     }
     componentDidMount(){
         const {contact} = this.props;
        //  console.log(contact)
         const data = {
            _id: contact._id,
            name: contact,
            email: contact.email,
            phone: contact.phone,
         }
         this.setState({data})
     }
     doSubmit = () =>{
        //do some ap calls or anything you like im just adding to list localy :)
        this.props.handleEditContact(this.state.data);
     }
    render() { 
        return ( 
            <form id="clientContactEditForm" name="clientContactEditForm" onSubmit={this.handleSubmit}>
                <div className="modal fade" id="clientContactEditModal" tabindex="-1" role="dialog" aria-labelledby="clientContactEditModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 id="clientContactEditModalLabel" className="modal-title inline-editable">
                                    <span className="sr-only">Contact name</span> {this.renderInput2("name", "", "form-control form-control-lg", "Name (e.g. John Doe)")}
                                </h6>
                            </div>
                            <div className="modal-body">
                                {this.renderInput3("email", "Email", "", "Email", "email")}
                                {this.renderInput3("phone", "Phone", "", "Phone", "tel")}
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
 
export default EditContact;