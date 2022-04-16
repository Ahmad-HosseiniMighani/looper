
import Form from './../../common/form';
import Joi from "joi-browser";
import uifaces2 from "../../../imgs/uifaces2.jpg";// temporary

class AddNewComment extends Form {
    state = { 
        data: {
            comment: ""
        },
        errors: {},
    }
    schema = {
        comment: Joi.string()
            .required()
            .label("comment")
            .error((errors) => this.ErrorsLang(errors)),
    }
    doSubmit = () => {
        const comment = this.state.data.comment
        if(comment != ""){
            this.props.doSubmit(
                this.props.task_id,
                {
                    _id: Date.now(),
                    content: comment,
                    sender: { // this should be an object of the person is logged in for this situation here ( its the sender ) and i'll handle it with a fake data for now
                        _id: "jday",
                        name: "Johnny Day",
                        avatar: uifaces2,
                    }
                }
            )
            this.setState({
                data: {
                    comment: "",
                }
            })
        }
    }
    render() { 
        return ( 
            <div className="media">
                <figure className="user-avatar user-avatar-md ml-2">
                    <img src={uifaces2} alt=""/> {/* This avatar should be same as the person who logged in */}
                </figure>
                <div className="media-body">
                    <div className="publisher keep-focus focus">
                        {this.renderTextArea("comment","Add comment","form-control","Write a comment")}
                        <div className="publisher-actions">
                            <div className="publisher-tools ml-auto">
                                <div className="btn btn-light btn-icon fileinput-button">
                                    <i className="fa fa-paperclip"></i> {/* no idea what to do with it */}
                                    <input type="file" id="attachment7" name="attachment7[]" multiple={true}/> {/* no idea what to do with it */}
                                </div>
                                <button type="button" className="btn btn-light btn-icon"><i className="far fa-smile"></i></button>
                            </div>
                            {this.renderButton2("Publish","btn btn-primary","button",this.doSubmit,"")}
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default AddNewComment;