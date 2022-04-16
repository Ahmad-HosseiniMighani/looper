const BillingAddress = ({data}) => {
    return ( 
        <div className="card">
            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h2 id="client-billing-contact-tab" className="card-title"> Billing Address </h2>
                    <button type="button" className="btn btn-link" data-bs-toggle="modal" data-bs-target="#clientBillingEditModal">Edit</button>
                </div>
                <address> {data.street}, {data.suite}<br/> {data.city.name}, {data.zipCode}<br/> {data.country.name} </address>
            </div>
        </div>
     );
}
 
export default BillingAddress;