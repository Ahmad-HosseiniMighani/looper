import React from 'react';
import Form from '../../common/form';
import Joi from "joi-browser";

class AddNewTaskParent extends Form {
    state = { 
        data: {
            newTask: ""
        },
        errors: {},
     }
     schema = {
        newTask: Joi.string()
        .required()
        .label("تسک جدید")
        .error((errors) => this.ErrorsLang(errors)),
     }
     onSubmit = () => {
        const newTask = this.state.data.newTask
        if(newTask != "") {
            this.props.doSubmit(this.state.data.newTask);
            this.setState({data: {newTask: ""}})
        }
     }
     onCancel = () => {
        this.setState({data: {newTask: ""}})
     }
    render() { 
        return ( 
            <div className="tasks-action">
                <div className="publisher">
                    <div className="publisher-input pl-0">
                        {this.renderInput2("newTask", "", "form-control", "+ Enter list title")}
                    </div>                            
                    <div className="publisher-actions">
                        <div className="publisher-tools pb-0">
                            {this.renderButton2("Add List", "btn btn-primary", "button", this.onSubmit, "")}
                            {this.renderButton2("Cancel", "btn btn-light", "button", this.onCancel, "")}
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AddNewTaskParent;