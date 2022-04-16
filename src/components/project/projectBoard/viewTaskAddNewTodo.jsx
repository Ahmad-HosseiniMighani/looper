
import Form from './../../common/form';
import Joi from "joi-browser";

class ViewTaskAddNewTodo extends Form {
    state = { 
        data: {
            newTodo: "",
        },
        errors: {},
    }
    schema = {
        newTodo: Joi.string()
          .required()
          .label("newTodo")
          .error((errors) => this.ErrorsLang(errors)),
    };
    handleNewTodoClear = () => {
        this.setState({
            data: {
                newTodo: "",
            }
        })
    }
    doSubmit = () => {
        const newTodo = this.state.data.newTodo
        if(newTodo != ""){
            this.props.doSubmit(
                this.props.task_id,
                {
                    _id: Date.now(),
                    title: newTodo,
                    isCompleted: false,
                }
            )
            this.setState({
                data: {
                    newTodo: "",
                }
            })
        }
    }
    render() { 
        return ( 
            <div className="publisher">
                <div className="publisher-input pr-0">
                    {this.renderInput2("newTodo","","form-control form-control-reflow","add a todo")}
                </div>
                <div className="publisher-actions">
                    <div className="publisher-tools pb-0">
                        {this.renderButton2("Add","btn btn-secondary ml-1","button",this.doSubmit,"")}
                        {this.renderButton2(<i className="fa fa-times"></i>,"btn btn-light","button",this.handleNewTodoClear,"")}
                    </div>
                </div>
            </div>
         );
    }
}
 
export default ViewTaskAddNewTodo;