import Joi from "joi-browser";
import Form from "../../common/form";

class EditBillingAddress extends Form {
    state = {
        data:{
            companyName: "",
            street: "",
            suite: "",
            zipCode: "",
            country: 0,
            city: 0,
        },
        prevProp: "",
        errors: [],
        countryChoices:[{_id:1, name: "United States"},{_id:2, name: "country2"}],// you can update this by api call or something
        cityChoices:[{_id: 1, name: "San Francisco"},{_id:2, name: "city2"}],// you can update this by api call or something
     }
     schema = {
        companyName: Joi.string()
            .label("companyName")
            .error((errors) => this.ErrorsLang(errors)),
        street: Joi.string()
            .label("street")
            .error((errors) => this.ErrorsLang(errors)),
        suite: Joi.string()
            .label("suite")
            .error((errors) => this.ErrorsLang(errors)),
        zipCode: Joi.string()
            .label("zipCode")
            .regex(/^[0-9]+$/, "عدد"),
        country: Joi.any(),
        city: Joi.any(),
     }
     componentDidUpdate(){
         const {billingAddress} = this.props;
         const {prevProp} = this.state;
         if(
               billingAddress.companyName != prevProp.companyName
            || billingAddress.street != prevProp.street
            || billingAddress.suite != prevProp.suite
            || billingAddress.zipCode != prevProp.zipCode
            || billingAddress.country._id != prevProp.country._id
            || billingAddress.city._id != prevProp.city._id
            ){
            const data = {
                companyName: billingAddress.companyName,
                street: billingAddress.street,
                suite: billingAddress.suite,
                zipCode: billingAddress.zipCode,
                country: billingAddress.country._id,
                city: billingAddress.city._id,
             }
             this.setState({data, prevProp:billingAddress})
         }
     }
     componentDidMount(){
         const {billingAddress} = this.props;
        //  console.log(contact)
         const data = {
            companyName: billingAddress.companyName,
            street: billingAddress.street,
            suite: billingAddress.suite,
            zipCode: billingAddress.zipCode,
            country: billingAddress.country._id,
            city: billingAddress.city._id,
         }
         this.setState({data})
     }
    //  updateState(){
    //     const {billingAddress} = this.props;
    //     //  console.log(contact)
    //      const data = {
    //         companyName: billingAddress.companyName,
    //         street: billingAddress.street,
    //         suite: billingAddress.suite,
    //         zipCode: billingAddress.zipCode,
    //         country: billingAddress.country,
    //         city: billingAddress.city,
    //      }
    //      this.setState({data})
    //  }
     doSubmit = () =>{
        //do some ap calls or anything you like im just adding to list localy :)
        const {data} = this.state;
        // console.log(data)
        for(let i = 0 ; i<this.state.cityChoices.length ; i++) if(this.state.cityChoices[i]._id == data.city) data.city= this.state.cityChoices[i]
        for(let i = 0 ; i<this.state.countryChoices.length ; i++) if(this.state.countryChoices[i]._id == data.country) data.country= this.state.countryChoices[i]
        this.props.handleEditBillingAddress(this.state.data);
     }
    render() { 
        return ( 
            <form id="clientBillingEditForm" name="clientBillingEditForm" onSubmit={this.handleSubmit}>
                <div className="modal fade" id="clientBillingEditModal" tabindex="-1" role="dialog" aria-labelledby="clientBillingEditModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h6 id="clientBillingEditModalLabel" className="modal-title inline-editable">
                                    <span className="sr-only">Client name</span> {this.renderInput2("companyName", "", "form-control form-control-lg", "E.g. Stilearning, Inc.")}
                                </h6>
                            </div>
                            <div className="modal-body">
                                <div className="form-row">
                                    <div className="col-md-12">
                                        {this.renderInput("street", "Street", "", "", "text")}
                                    </div>
                                    <div className="col-md-6">
                                        {this.renderInput("suite", "Suite", "", "", "text")}
                                    </div>
                                    <div className="col-md-6">
                                        {this.renderInput("zipCode", "Zip", "", "", "text")}
                                    </div>
                                    <div className="col-md-6">
                                        {this.renderSelect("country", "Country", this.state.countryChoices, "custom-select d-block w-100")}
                                    </div>
                                    <div className="col-md-6">
                                    {this.renderSelect("city", "City", this.state.cityChoices, "custom-select d-block w-100")}
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
         );
    }
}
 
export default EditBillingAddress;