import Form from './../../common/form';
import SimpleMDE from "react-simplemde-editor";
import Flatpickr from "react-flatpickr";
import Joi from "joi-browser";
import * as Showdown from "showdown";
import uifaces2 from "../../../imgs/uifaces2.jpg";
import uifaces3 from "../../../imgs/uifaces3.jpg";
import uifaces5 from "../../../imgs/uifaces5.jpg";
import uifaces9 from "../../../imgs/uifaces9.jpg";
import uifaces15 from "../../../imgs/uifaces15.jpg";

const SimpleMDEOptions = {
    scrollbarStyle: "null",
    spellChecker: false,
    toolbar: false,
    toolbarTips: false,
    status: false,
}

const converter = new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
});

class AddNewTask extends Form {
    state = { 
        data: {
            title: "",
            description: "",
            labels: [],
            taskAssignees: [],
            visibleOnlyToMembers: false,
            dueDate: [],
            todos: [],
            newTodo: "",// it will be removed before submiting
        },
        errors: {},
        labelsChoices: [],
        teamMember: [],
        preview: false,
    }
    schema = {
        title: Joi.string()
          .required()
          .label("title")
          .error((errors) => this.ErrorsLang(errors)),
        description: Joi.string()
          .label("description")
          .allow("")
          .error((errors) => this.ErrorsLang(errors)),
        labels: Joi.any(),
        taskAssignees: Joi.any(),
        visibleOnlyToMembers: Joi.any(),
        dueDate: Joi.any(),
        todos: Joi.any(),
        newTodo: Joi.any(),
      };
    componentDidMount(){
        const labelsChoices = [
            {_id: 1, name: "Assets", colorTag: "blue"},
            {_id: 2, name: "Build Tools", colorTag: "indigo"},
            {_id: 3, name: "Components", colorTag: "purple"},
            {_id: 4, name: "Dependencies", colorTag: "pink"},
            {_id: 5, name: "Design", colorTag: "red"},
            {_id: 6, name: "Documentation", colorTag: "orange"},
            {_id: 7, name: "Doing", colorTag: "yellow"},
            {_id: 8, name: "JS", colorTag: "green"},
            {_id: 9, name: "SCSS", colorTag: "teal"},
            {_id: 10, name: "To Do", colorTag: "cyan"},
        ]
        // this is a data sample with neccessary needs
        const teamMember = [
            {_id: "jday", name: "Johnny Day", avatar: uifaces2},
            {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3},
            {_id: "chasen", name: "Craig Hansen", avatar: uifaces5},
            {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9},
            {_id: "amedina", name: "Adam Medina", avatar: uifaces15}
        ]
        this.setState({labelsChoices,teamMember})
    }
    handleClearMultiSelect = (name) => {
        const {data} = this.state;
        data[name] = [];
        this.setState({data})
    }
    handleLabelSelect = (_id) => {
        const data = {...this.state.data}
        const labels = [...data.labels];
        if(labels.indexOf(_id) >= 0) labels.splice(labels.indexOf(_id), 1);
        else labels.push(_id)
        data.labels = labels
        this.setState({data})
    }/* 1 */
    findLabelName = (_id) => {
        const labelsChoices = this.state.labelsChoices;
        let str;
        labelsChoices.map(label => {
            if(label._id == _id) str = label.name
        })
        return str;
    }/* 2 */
    handleTaskAssigneesSelect = (_id) => {
        const data = {...this.state.data}
        const taskAssignees = [...data.taskAssignees];
        if(taskAssignees.indexOf(_id) >= 0) taskAssignees.splice(taskAssignees.indexOf(_id), 1);
        else taskAssignees.push(_id)
        data.taskAssignees = taskAssignees
        this.setState({data})
    }/* 1 */
    findTaskAssigneesName = (_id) => {
        const teamMember = this.state.teamMember;
        let str;
        teamMember.map(member => {
            if(member._id == _id) str = member.name
        })
        return str;
    }/* 2 */
    // you can combine *'ed functions
    descriptionOnChange = (value) => {
        const data = this.state.data
        data.description = value
        this.setState({data})
    }
    handlePreview = () => {
        const preview = this.state.preview
        this.setState({preview: !preview})
    }
    convertValue = value => converter.makeHtml(value);
    handleVisibleOnlyToMembers =() => {
        const data = {...this.state.data}
        data.visibleOnlyToMembers = !data.visibleOnlyToMembers;
        this.setState({data})
    }
    handleDueDateChange = (dueDate) => {
        const data = {...this.state.data}
        data.dueDate = dueDate
        this.setState({data})
    }
    handleAddnewTodo = () => {
        const data = {...this.state.data}
        if(data.newTodo != ""){
            data.todos.push(// this is a simple method but you need to change it for how you assigning _id to todos
                {
                    _id: data.todos.length,
                    title: data.newTodo,
                    isCompleted: false
                }
            )
            data.newTodo = ""
            this.setState({data})
        }
    }
    handleNewTodoClear = () => {
        const data = {...this.state.data}
        data.newTodo = ""
        this.setState({data})
    }
    handleTodoClicked = (_id) => {
        const todos = [...this.state.data.todos]
        const data = {...this.state.data}
        for(let i=0; i < todos.length; i++) if(todos[i]._id == _id) todos[i].isCompleted = !todos[i].isCompleted
        data.todos = todos
        this.setState({data})
    }
    handleTodoDelete = (_id) => {
        const todos = [...this.state.data.todos]
        const data = {...this.state.data}
        let targetIndex;
        for(let i=0; i < todos.length; i++){
            if(todos[i]._id == _id) targetIndex= i
        }
        todos.splice(targetIndex, 1);
        for(let i=0; i < todos.length; i++) todos[i]._id = i
        data.todos = todos
        this.setState({data})
    }
    completedTodosCount = () => {
        const todos = [...this.state.data.todos]
        let count = 0
        todos.map(todo => {if(todo.isCompleted) count++})
        return count
    }
    getTodosPercentage = () => {
        const todos = [...this.state.data.todos]
        if(todos.length > 0) return this.completedTodosCount()/todos.length*100
        return 0
    }
    doSubmit = () => {
        const data = {...this.state.data}
        const labelsChoices = this.state.labelsChoices
        const teamMembers = this.state.teamMember
        for(let l in labelsChoices) if(data.labels.indexOf(l._id) >=0 ) data.labels[data.labels.indexOf(l._id)] = l
        for(let member in teamMembers) if(data.taskAssignees.indexOf(member._id) >= 0) data.taskAssignees[data.taskAssignees.indexOf(member._id)] = member
        data.dueDate = data.dueDate[0] || "Not Assigned"
        data._id = "task_"+Date.now()
        data.timeSpend = "00:00"
        data.timeLimit = "00:00"
        data.overLimit = false
        data.completedTasks = this.completedTodosCount()
        data.totalTasks = data.todos.length
        data.isPaused = false
        data.hasComment = true
        data.comments = []
        delete data.newTodo
        // console.log(data)
        this.props.doSubmit(data)
        let myModal = window.bs.Modal.getInstance(document.getElementById("modalNewTask"));
        myModal.hide()
        this.setState({
            data: {
                title: "",
                description: "",
                labels: [],
                taskAssignees: [],
                visibleOnlyToMembers: false,
                dueDate: [],
                todos: [],
                newTodo: "",// it will be removed before submiting
            }
        })
    }
    checkKeyDown = (e) => {
        if (e.key === "Enter") e.preventDefault();
    }
    handleCloseModal (){
        let myModal = window.bs.Modal.getInstance(document.getElementById("modalNewTask"));
        myModal.hide()
    }
    render() { 
        const {labelsChoices,teamMember,preview} = this.state
        const {labels,taskAssignees,description,visibleOnlyToMembers,todos} = this.state.data
        return (
            <form id="addNewTask" name="addNewTask" onSubmit={this.handleSubmit} onKeyDown={(e)=>this.checkKeyDown(e)}>
                <div className="modal fade" id="modalNewTask" tabindex="-1" role="dialog" aria-labelledby="modalNewTaskLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">            
                        <div className="modal-content px-lg-4 py-lg-3">
                            <div className="modal-header">
                                <h6 id="modalNewTaskLabel" className="modal-title"> Add new tasks </h6>
                            </div>
                            <div className="modal-body">
                                {this.renderInput("title","Title","","","text")}
                                {/* <div className="form-group">
                                    <label htmlFor="tasksTitle">Title</label>
                                    <input type="text" name="taskTitle" id="tasksTitle" className="form-control"/>
                                </div> */}
                                <div className="form-group">
                                    <div className="d-flex justify-content-between">
                                        <label htmlFor="taskDescription">Description</label>
                                        <a href="#" onClick={this.handlePreview}>Preview</a>
                                    </div>
                                    {preview && <div
                                        className="p-3 CodeMirror cm-s-easymde CodeMirror-wrap"
                                        dangerouslySetInnerHTML={{
                                        __html: this.convertValue(description)
                                        }}
                                    />}
                                    {!preview && <SimpleMDE
                                        value={description}
                                        options={SimpleMDEOptions}
                                        onChange={(value)=>this.descriptionOnChange(value)}
                                    />}
                                    <div className="d-flex align-items-center">
                                        <span className="text-muted mt-2"><a href="https://simplemde.com/markdown-guide" target="_blank">Markdown</a> is supported</span>
                                        <div className="btn btn-reset fileinput-button text-muted mr-auto">
                                        <i className="fa fa-paperclip"></i> <span>Attach a file</span> <input type="file" name="taskAttachment"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input"
                                            onClick={()=>this.handleVisibleOnlyToMembers()}
                                            checked={visibleOnlyToMembers}
                                        />
                                        <span className="custom-control-label">Should only be visible to team members.</span>
                                    </label>
                                </div>
                                <hr/>
                                <div className="form-group form-row">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Assignee</label>
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-secondary btn-block d-flex justify-content-between align-items-center" id="dntAssignees" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span>
                                                        {taskAssignees.length == 0 && "Unassigned"}
                                                        {taskAssignees.length == 1 && this.findTaskAssigneesName(taskAssignees[0])}
                                                        {taskAssignees.length > 1 && this.findTaskAssigneesName(taskAssignees[0]) + " + " + (taskAssignees.length-1) + " more" }
                                                    </span>
                                                    <span className="fa fa-angle-down"></span>
                                                </button> 
                                                <div className="dropdown-menu dropdown-menu-md stop-propagation" data-flip="false" id="dntmAssignees" aria-labelledby="dropdownAssignee1">
                                                    <div className="dropdown-menu-animation">
                                                        <h6 id="dropdownAssignee1" className="dropdown-header"> Add assignee </h6>
                                                        <div className="dropdown-divider"></div>
                                                        <div className="form-group px-3 py-2 mb-0">
                                                            <input type="text" className="form-control" data-filter="#dntmAssignees .filterable" placeholder="Search members" autofocus=""/>
                                                        </div>
                                                        <label className="custom-control custom-checkbox">
                                                            <input type="checkbox" className="custom-control-input task-unassignees"
                                                                onClick={()=>this.handleClearMultiSelect("taskAssignees")}
                                                                checked={taskAssignees.length > 0 ? false : true}
                                                            />
                                                            <span className="custom-control-label">Unassigned</span>
                                                        </label>
                                                        <div className="dropdown-divider"></div>
                                                        <h6 className="dropdown-header"> Assignee(s) </h6>
                                                        {teamMember.map(member => (
                                                            taskAssignees.indexOf(member._id) >= 0 && <label className="custom-control custom-checkbox filterable" key={"taskAssignees_"+member._id}>
                                                                <input type="checkbox" className="custom-control-input task-assignees" checked={true}
                                                                    onClick={()=> this.handleTaskAssigneesSelect(member._id)}
                                                                />
                                                                <span className="custom-control-label custom-control-label-media">
                                                                    <span className="media">
                                                                        <span className="ml-2">
                                                                            <span className="user-avatar">
                                                                                <img src={member.avatar} alt={member.name}/>
                                                                            </span>
                                                                        </span>
                                                                            <span className="media-body">
                                                                                {member.name}
                                                                                <br/>
                                                                                <span className="text-muted">@{member._id}</span>
                                                                            </span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        ))}
                                                        <div id="dntDivider" className="dropdown-divider"></div>
                                                        {teamMember.map(member => (
                                                            taskAssignees.indexOf(member._id) < 0 && <label className="custom-control custom-checkbox filterable" key={"taskAssignees_"+member._id}>
                                                                <input type="checkbox" className="custom-control-input task-assignees" checked={false}
                                                                    onClick={()=> this.handleTaskAssigneesSelect(member._id)}
                                                                />
                                                                <span className="custom-control-label custom-control-label-media">
                                                                    <span className="media">
                                                                        <span className="ml-2">
                                                                            <span className="user-avatar">
                                                                                <img src={member.avatar} alt={member.name}/>
                                                                            </span>
                                                                        </span>
                                                                            <span className="media-body">
                                                                                {member.name}
                                                                                <br/>
                                                                                <span className="text-muted">@{member._id}</span>
                                                                            </span>
                                                                    </span>
                                                                </span>
                                                            </label>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Labels</label> 
                                            <div className="dropdown">
                                                <button type="button" className="btn btn-secondary btn-block d-flex justify-content-between align-items-center" id="bntLabels" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span>
                                                        {labels.length == 0 && "No label"}
                                                        {labels.length == 1 && this.findLabelName(labels[0])}
                                                        {labels.length > 1 && this.findLabelName(labels[0]) + " + " + (labels.length-1) + " more" }
                                                    </span>
                                                    <span className="fa fa-angle-down"></span>
                                                </button> 
                                                <div className="dropdown-menu dropdown-menu-md stop-propagation" id="dntLabels" aria-labelledby="dropdownTaskLabels1">
                                                    <div className="dropdown-menu-animation">
                                                        <h6 id="dropdownTaskLabels1" className="dropdown-header"> Select labels </h6>
                                                        <div className="dropdown-divider"></div>
                                                        <div className="form-group px-3 py-2 mb-0">
                                                            <input type="text" className="form-control" data-filter="#dntLabels .filterable" placeholder="Search" data-autofocus="true"/>
                                                        </div>
                                                        <label className="custom-control custom-checkbox filterable">
                                                            <input type="checkbox" className="custom-control-input task-nolabel" 
                                                                onClick={()=> this.handleClearMultiSelect("labels")}
                                                                checked={labels.length == 0 ? true : false}
                                                            />
                                                            <span className="custom-control-label">No Label</span>
                                                        </label>
                                                        <div className="dropdown-divider"></div>
                                                        <div className="dropdown-scroll">
                                                            {labelsChoices.map( label => (
                                                                <label className="custom-control custom-checkbox filterable" key={"label_"+label._id}>
                                                                    <input type="checkbox" className="custom-control-input task-label"
                                                                        onClick={()=> this.handleLabelSelect(label._id)}
                                                                        checked={labels.indexOf(label._id) >= 0 ? true : false}
                                                                    />
                                                                    <span className="custom-control-label">
                                                                        <i className={"fa fa-square fa-lg ml-1 text-"+label.colorTag}></i> {label.name}
                                                                    </span>
                                                                </label>
                                                            ))}
                                                        </div>
                                                        <div className="dropdown-divider"></div>
                                                        <a href="#" className="dropdown-item">Create new label</a>
                                                        <a href="#" className="dropdown-item">Manage labels</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                        <label className="control-label" htmlFor="taskDueDate">Due date</label>
                                        <div className="input-group input-group-alt flatpickr">
                                            <Flatpickr
                                                className={"form-control flatpickr-input"}
                                                options={{
                                                minDate:"today",
                                                dateFormat: "Y-m-d"
                                                }}
                                                ref={fp => { this.fp = fp; }}
                                                onChange={(dueDate) => this.handleDueDateChange(dueDate)}
                                            />
                                            <div className="input-group-append">
                                                <button type="button" className="btn btn-secondary" onClick={() => { if (this.fp){ this.fp.flatpickr.open(); }}}><i className="far fa-calendar"></i></button>
                                                <button type="button" className="btn btn-secondary" onClick={() => { if (this.fp){ this.fp.flatpickr.clear(); }}}><i className="fa fa-times"></i></button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="form-group">
                                <div className="d-flex justify-content-between">
                                    <label>Todos</label> <span id="ntTodosMeter" className="text-muted">({this.completedTodosCount()}/{todos.length})</span>
                                </div>
                                <div className="progress progress-sm">
                                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow={this.getTodosPercentage()} aria-valuemin="0" aria-valuemax="100" style={{width: (this.getTodosPercentage())+"%"}}>
                                    <span className="sr-only">{this.getTodosPercentage()}% Complete</span>
                                    </div>
                                </div>
                                </div>
                                <div className="form-group">
                                    <div id="ntTodos" className="todo-list">
                                        {todos.map(todo => (
                                            <div className="todo" key={"todo_"+todo._id}>
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input" id={todo._id} checked={todo.isCompleted}/>
                                                    <label className="custom-control-label" htmlFor={todo._id}  onClick={() => this.handleTodoClicked(todo._id)}>{todo.title}</label>
                                                </div>
                                                <div className="todo-actions pl-1">
                                                    {this.renderButton2("Delete","btn btn-sm btn-light","button",this.handleTodoDelete,todo._id)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="publisher">
                                        <div className="publisher-input pr-0">
                                            {/* <input id="ntTodosInpt" className="form-control form-control-reflow" placeholder="Add a todo" autocomplete="off"/> */}
                                            {this.renderInput2("newTodo","","form-control form-control-reflow","add a todo")}
                                        </div>
                                        <div className="publisher-actions">
                                            <div className="publisher-tools pb-0">
                                                {this.renderButton2("Add","btn btn-secondary ml-1","button",this.handleAddnewTodo,"")}
                                                {this.renderButton2(<i className="fa fa-times"></i>,"btn btn-light","button",this.handleNewTodoClear,"")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="modal-footer">
                                {this.renderButton("save","btn btn-primary","submit")}
                                {this.renderButton2("Cancel","btn btn-light","reset",this.handleCloseModal,"")}
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default AddNewTask;