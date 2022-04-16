import React, { Component } from 'react';
import { fixTooltip } from '../../js/fixTooltip';
import team4 from "../../imgs/team4.jpg"
import uifaces1 from "../../imgs/uifaces1.jpg";
import uifaces2 from "../../imgs/uifaces2.jpg";
import uifaces3 from "../../imgs/uifaces3.jpg";
import uifaces4 from "../../imgs/uifaces4.jpg";
import uifaces5 from "../../imgs/uifaces5.jpg";
import uifaces6 from "../../imgs/uifaces6.jpg";
import uifaces7 from "../../imgs/uifaces7.jpg";
import uifaces9 from "../../imgs/uifaces9.jpg";
import TaskParent from './projectBoard/taskParent';
import AddNewTask from './projectBoard/addNewTask';
import ViewTask from './projectBoard/viewTask';
import { Link } from 'react-router-dom';

class ProjectBoard extends Component {
    state = { 
      taskData: [],
      labels: [],
      parentIdForModal: 0,
      taskDataForViewModal: {}
     }
    componentDidUpdate(){
      fixTooltip(window.bs);
    }
    componentDidMount(){
      fixTooltip(window.bs);
      //API Calls
      try{
        const taskData = [
          {
            _id: "taskParent_"+1,
            title: "Backlogs",
            tasks: [
              {_id: "task_"+1, labels: [{_id: 8, name: "JS", colorTag: "green"},{_id: 9, name: "SCSS", colorTag: "teal"}], title: "Review", timeSpend: "03:11", timeLimit: "6:00", overLimit: false, dueDate: "Apr 07", taskAssignees: [{_id: "jday", name: "Johnny Day", avatar: uifaces2},{_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}], completedTasks: 0, totalTasks: 0, isPaused: true, description: "this is initial description", visibleOnlyToMembers: false, todos: [], hasComment: false, comments: []},
              {_id: "task_"+2, labels: [], title: "Deploy", timeSpend: "08:36", timeLimit: "12:00", overLimit: false, dueDate: "In 2 days", taskAssignees: [{_id: "jday", name: "Johnny Day", avatar: uifaces2},{_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3},{_id: "chansen", name: "Craig Hansen", avatar: uifaces5},{_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}], completedTasks: 0, totalTasks: 5, isPaused: true, description: "this is initial description", visibleOnlyToMembers: false, todos: [{_id: 1, title: "Task 1", isCompleted: false},{_id: 2, title: "Task 2", isCompleted: false},{_id: 3, title: "Task 3", isCompleted: false},{_id: 4, title: "Task 4", isCompleted: false},{_id: 5, title: "Task 5", isCompleted: false}], hasComment: true, comments: [{_id: 1, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 2, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 3, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 4, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 5, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 6, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 7, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 8, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}}]},
              {_id: "task_"+3, labels: [], title: "Go live!", timeSpend: "11:36", timeLimit: "12:00", overLimit: false, dueDate: "Mar 23", taskAssignees: [{_id: "jday", name: "Johnny Day", avatar: uifaces2},{_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3},{_id: "chansen", name: "Craig Hansen", avatar: uifaces5},{_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}], completedTasks: 0, totalTasks: 2, isPaused: true, description: "this is initial description", visibleOnlyToMembers: false, todos: [{_id: 1, title: "Task 1", isCompleted: false},{_id: 2, title: "Task 2", isCompleted: false}], hasComment: true, comments: [{_id: 1, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 2, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 3, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 4, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 5, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 6, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 7, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 8, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 9, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 10, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 11, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 12, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 13, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 14, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 15, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 16, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 17, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 18, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 19, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 20, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 21, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 22, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 23, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 24, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}}]}
            ]
          },
          {
            _id: "taskParent_"+2,
            title: "In Progress",
            tasks: [
              {_id: "task_"+4, labels: [{_id: 5, name: "Design", colorTag: "red"},{_id: 10, name: "To Do", colorTag: "cyan"}], title: "Apply new styles", timeSpend: "50:02", timeLimit: "48:00", overLimit: true, dueDate: "Tomorrow", taskAssignees: [{_id: "jday", name: "Johnny Day", avatar: uifaces2},{_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}], completedTasks: 19, totalTasks: 21, isPaused: false, description: "this is initial description", visibleOnlyToMembers: false, todos: [{_id: 1, title: "Task 1", isCompleted: true},{_id: 2, title: "Task 2", isCompleted: true},{_id: 3, title: "Task 3", isCompleted: true},{_id: 4, title: "Task 4", isCompleted: true},{_id: 5, title: "Task 5", isCompleted: true},{_id: 6, title: "Task 6", isCompleted: true},{_id: 7, title: "Task 7", isCompleted: true},{_id: 8, title: "Task 8", isCompleted: true},{_id: 9, title: "Task 9", isCompleted: true},{_id: 10, title: "Task 10", isCompleted: true},{_id: 11, title: "Task 11", isCompleted: true},{_id: 12, title: "Task 12", isCompleted: true},{_id: 13, title: "Task 13", isCompleted: true},{_id: 14, title: "Task 14", isCompleted: true},{_id: 15, title: "Task 15", isCompleted: true},{_id: 16, title: "Task 16", isCompleted: true},{_id: 17, title: "Task 17", isCompleted: true},{_id: 18, title: "Task 18", isCompleted: true},{_id: 19, title: "Task 19", isCompleted: true},{_id: 20, title: "Task 20", isCompleted: false},{_id: 21, title: "Task 21", isCompleted: false}], hasComment: true, comments: [{_id: 1, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 2, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 3, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 4, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 5, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 6, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 7, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 8, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 9, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 10, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 11, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 12, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 13, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 14, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 15, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 16, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 17, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 18, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 19, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 20, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 21, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 22, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 23, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 24, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 25, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 26, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 27, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 28, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 29, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 30, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 31, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 32, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 33, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 34, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 35, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 36, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}}]}
            ]
          },
          {
            _id: "taskParent_"+3,
            title: "In Review",
            tasks: [
              {_id: "task_"+5, labels: [{_id: 3, name: "Components", colorTag: "purple"}], title: "Write new content", timeSpend: "03:36", timeLimit: "04:00", overLimit: false, dueDate: "In 3 days", taskAssignees: [{_id: "jday", name: "Johnny Day", avatar: uifaces2}], completedTasks: 6, totalTasks: 6, isPaused: true, description: "this is initial description", visibleOnlyToMembers: false, todos: [{_id: 1, title: "Task 1", isCompleted: true},{_id: 2, title: "Task 2", isCompleted: true},{_id: 3, title: "Task 3", isCompleted: true},{_id: 4, title: "Task 4", isCompleted: true},{_id: 5, title: "Task 5", isCompleted: true},{_id: 6, title: "Task 6", isCompleted: true}], hasComment: false, comments: []}
            ]
          },
          {
            _id: "taskParent_"+4,
            title: "Done",
            tasks: [
              {_id: "task_"+6, labels: [{_id: 9, name: "SCSS", colorTag: "teal"},{_id: 4, name: "Dependencies", colorTag: "pink"},{_id: 7, name: "Doing", colorTag: "yellow"}], title: "Redesign website", timeSpend: "16:36", timeLimit: "24:00", overLimit: false, dueDate: "Apr 02", taskAssignees: [{_id: "jday", name: "Johnny Day", avatar: uifaces2},{_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3},{_id: "chansen", name: "Craig Hansen", avatar: uifaces5}], completedTasks: 15, totalTasks: 15, isPaused: true, description: "this is initial description", visibleOnlyToMembers: false, todos: [{_id: 1, title: "Task 1", isCompleted: true},{_id: 2, title: "Task 2", isCompleted: true},{_id: 3, title: "Task 3", isCompleted: true},{_id: 4, title: "Task 4", isCompleted: true},{_id: 5, title: "Task 5", isCompleted: true},{_id: 6, title: "Task 6", isCompleted: true},{_id: 7, title: "Task 7", isCompleted: true},{_id: 8, title: "Task 8", isCompleted: true},{_id: 9, title: "Task 9", isCompleted: true},{_id: 10, title: "Task 10", isCompleted: true},{_id: 11, title: "Task 11", isCompleted: true},{_id: 12, title: "Task 12", isCompleted: true},{_id: 13, title: "Task 13", isCompleted: true},{_id: 14, title: "Task 14", isCompleted: true},{_id: 15, title: "Task 15", isCompleted: true}], hasComment: true, comments: [{_id: 1, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 2, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 3, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 4, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 5, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 6, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 7, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 8, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}},{_id: 9, content: "this is a test comment.", sender: {_id: "jday", name: "Johnny Day", avatar: uifaces2}},{_id: 10, content: "this is a test comment.", sender: {_id: "sbishop", name: "Sarah Bishop", avatar: uifaces3}},{_id: 11, content: "this is a test comment.", sender: {_id: "chasen", name: "Craig Hansen", avatar: uifaces5}},{_id: 12, content: "this is a test comment.", sender: {_id: "jbarnes", name: "Jane Barnes", avatar: uifaces9}}]}
            ]
          }
        ]
        const labels = [
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
        this.setState({taskData,labels})
      }catch(e){
        // trun state 1 step back here
      }
    }
    handleParentMove = (newState) => {
      this.setState({taskData:newState})
    }
    handleParentEditBtn = (_id) => {
      console.log(`You Clicked on HandleParentEditBtn with id: "${_id}"`)
    }
    handleParentMoveBtn = (_id) => {
      console.log(`You Clicked on HandleParentMoveBtn with id: "${_id}"`)
    }
    handleParentDuplicateBtn = (_id) => {
      //  this wont work properly because im only duplicating Parents (with same Task inside so you may see duplicated Tasks as well
      //  but if you move one of em into another Parent you see other one disapear X_X you need to fix it with (unique id for tasks as well))
      console.log(`You Clicked on HandleParentDuplicateBtn with id: "${_id}"`)
      const taskData = [...this.state.taskData];
      let dupTask;
      for(let i=0; i< taskData.length ; i++) if (taskData[i]._id == _id) dupTask = taskData[i];
      dupTask._id = taskData.length;
      taskData.push(dupTask);
      this.setState({taskData});
    }
    handleParentSubscribeBtn = (_id) => {
      console.log(`You Clicked on HandleParentSubscribeBtn with id: "${_id}"`)
    }
    handleParentTrashBtn = (_id) => {
      console.log(`You Clicked on HandleParentTrashBtn with id: "${_id}"`)
    }
    handleTaskMove = (newState,parentId) => {
      // console.log("TaskMove:",newState)
      const taskData = [...this.state.taskData];
      for(let i=0; i< taskData.length ; i++) if (taskData[i]._id == parentId) taskData[i].tasks = newState;
      this.setState({taskData})
    }
    newTaskParentHandleSubmit = (newTaskParent) => {
      const taskData = [
        ...this.state.taskData,
        {
          _id: this.state.taskData.length,
          title: newTaskParent,
          tasks: []
        }
      ]
      this.setState({taskData})
    }
    openNewTaskModal = (parentId) => {
      this.setState({parentIdForModal: parentId})
      let myModal = new window.bs.Modal(document.getElementById("modalNewTask"), {});
      myModal.show()
    }
    handleNewTaskSubmit = (newTask) => {
      const taskData = [...this.state.taskData]
      const parentIdForModal = this.state.parentIdForModal
      for(let i=0; i< taskData.length; i++) if(taskData[i]._id==parentIdForModal) taskData[i].tasks.push(newTask)
      this.setState({taskData})
    }
    handleDataForViewTaskModal = (task) => {
      this.setState({taskDataForViewModal: task})
      let myModal = new window.bs.Modal(document.getElementById("modalViewTask"), {});
      myModal.show()
    }
    handlePlayTaskPlayButton = (task_id) => {
      const taskData = [...this.state.taskData]
      for(let i=0; i< taskData.length; i++){
        for(let j=0; j< taskData[i].tasks.length; j++){
          if(taskData[i].tasks[j]._id == task_id){
            taskData[i].tasks[j].isPaused = !taskData[i].tasks[j].isPaused
          }
        }
      }
      this.setState({taskData})
    }
    handleViewModalTaskAssigneeRemove = (task_id,member_id) => {
      const taskData = [...this.state.taskData]
      let index = [];
      for(let i=0; i< taskData.length; i++){
        for(let j=0; j< taskData[i].tasks.length; j++){
          if(taskData[i].tasks[j]._id == task_id){
            for(let k=0; k< taskData[i].tasks[j].taskAssignees.length; k++){
              if(taskData[i].tasks[j].taskAssignees[k]._id == member_id){
                index[0] = i
                index[1] = j
                index[2] = k
              }
            }
          }
        }
      }
      taskData[index[0]].tasks[index[1]].taskAssignees.splice(index[2],1)
      this.setState({taskData})
    }
    handleViewTaskAssigneesSelect = (task_id,member) => {
      const taskData = [...this.state.taskData]
      for(let i=0; i< taskData.length; i++){
        for(let j=0; j< taskData[i].tasks.length; j++){
          if(taskData[i].tasks[j]._id == task_id){
            taskData[i].tasks[j].taskAssignees.push(member)
          }
        }
      }
      this.setState({taskData})
    }
    handleViewTaskClearMultiSelect = (task_id,property) => {
      const taskData = [...this.state.taskData]
      for(let i=0; i< taskData.length; i++){
        for(let j=0; j< taskData[i].tasks.length; j++){
          if(taskData[i].tasks[j]._id == task_id){
            taskData[i].tasks[j][property] = []
          }
        }
      }
      this.setState({taskData})
    }
    handleViewModalLabelRemove = (task_id,label_id) => {
      const taskData = [...this.state.taskData]
      let index = [];
      for(let i=0; i< taskData.length; i++){
        for(let j=0; j< taskData[i].tasks.length; j++){
          if(taskData[i].tasks[j]._id == task_id){
            for(let k=0; k< taskData[i].tasks[j].labels.length; k++){
              if(taskData[i].tasks[j].labels[k]._id == label_id){
                index[0] = i
                index[1] = j
                index[2] = k
              }
            }
          }
        }
      }
      taskData[index[0]].tasks[index[1]].labels.splice(index[2],1)
      this.setState({taskData})
    }
    handleViewModalLabelAdd = (task_id,label) => {
      const taskData = [...this.state.taskData]
      for(let i=0; i< taskData.length; i++){
        for(let j=0; j< taskData[i].tasks.length; j++){
          if(taskData[i].tasks[j]._id == task_id){
            taskData[i].tasks[j].labels.push(label)
          }
        }
      }
      this.setState({taskData})
    }
    handleViewTodoDelete = (task_id,todo_id) => {
      const taskData = [...this.state.taskData]
      let index = []
      for(let i=0; i< taskData.length; i++){
        for(let j=0; j< taskData[i].tasks.length; j++){
          if(taskData[i].tasks[j]._id == task_id){
            for(let k=0; k< taskData[i].tasks[j].todos.length; k++){
              if(taskData[i].tasks[j].todos[k]._id == todo_id){
                index[0] = i
                index[1] = j
                index[2] = k
              }
            }
          }
        }
      }
      taskData[index[0]].tasks[index[1]].todos.splice(index[2],1)
      taskData[index[0]].tasks[index[1]].completedTasks = this.completedTodosCount(taskData[index[0]].tasks[index[1]].todos)
      taskData[index[0]].tasks[index[1]].totalTasks = taskData[index[0]].tasks[index[1]].todos.length
      this.setState({taskData})
    }
    completedTodosCount(todos){
      let count = 0
      todos.map(todo => {if(todo.isCompleted) count++})
      return count
    }
    handleTodoClicked = (task_id,todo_id) => {
      const taskData = [...this.state.taskData]
      let index = []
      for(let i=0; i< taskData.length; i++){
        for(let j=0; j< taskData[i].tasks.length; j++){
          if(taskData[i].tasks[j]._id == task_id){
            for(let k=0; k< taskData[i].tasks[j].todos.length; k++){
              if(taskData[i].tasks[j].todos[k]._id == todo_id){
                taskData[i].tasks[j].todos[k].isCompleted = !taskData[i].tasks[j].todos[k].isCompleted
                index[0] = i
                index[1] = j
                index[2] = k
              }
            }
          }
        }
      }
      taskData[index[0]].tasks[index[1]].completedTasks = this.completedTodosCount(taskData[index[0]].tasks[index[1]].todos)
      taskData[index[0]].tasks[index[1]].totalTasks = taskData[index[0]].tasks[index[1]].todos.length
      this.setState({taskData})
    }
    handleAddnewTodoFromViewTaskModal = (task_id,todo) => {
      const taskData = [...this.state.taskData]
      let index = []
      for(let i=0; i< taskData.length; i++){
        for(let j=0; j< taskData[i].tasks.length; j++){
          if(taskData[i].tasks[j]._id == task_id){
            taskData[i].tasks[j].todos.push(todo)
            index[0] = i
            index[1] = j
          }
        }
      }
      taskData[index[0]].tasks[index[1]].completedTasks = this.completedTodosCount(taskData[index[0]].tasks[index[1]].todos)
      taskData[index[0]].tasks[index[1]].totalTasks = taskData[index[0]].tasks[index[1]].todos.length
      this.setState({taskData})
    }
    handleAddnewCommentFromViewTaskModal = (task_id,comment) => {
      const taskData = [...this.state.taskData]
      let index = []
      for(let i=0; i< taskData.length; i++){
        for(let j=0; j< taskData[i].tasks.length; j++){
          if(taskData[i].tasks[j]._id == task_id){
            taskData[i].tasks[j].comments.push(comment)
            index[0] = i
            index[1] = j
          }
        }
      }
      taskData[index[0]].tasks[index[1]].hasComment = true
      this.setState({taskData})
    }
    render() { 
      const {taskData,taskDataForViewModal} = this.state
        return ( 
          <React.Fragment>  
            <div className="wrapper">
              <div className="page">
                <div className="page-inner page-inner-fill">
                  <header className="page-navs shadow-sm pl-3"> {/* RTL */}
                    <Link to="/projectoverview" className="btn-account">
                      <div className="has-badge">
                        <span className="tile bg-pink text-white">SP</span> <span className="user-avatar user-avatar-xs"><img src={team4} alt=""/></span>
                      </div>
                      <div className="account-summary">
                        <h1 className="card-title"> Syrena Project </h1>
                        <h6 className="card-subtitle text-muted"> 4 deadline · 2 overdue </h6>
                      </div>
                    </Link> 
                    <div className="mr-auto"> {/* RTL */}
                      <div className="dropdown d-inline-block">
                        <button type="button" className="btn btn-light btn-icon" title="Invite members" data-bs-toggle="dropdown" data-bs-display="static" data-bs-offset="0,11" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user-plus fa-lg ml-1"></i></button> 
                        <div className="dropdown-menu dropdown-menu-left dropdown-menu-rich stop-propagation">
                          <div className="dropdown-arrow"></div>
                          <div className="dropdown-menu-animation py-0">
                            <div className="dropdown-header"> Add members </div>
                            <div className="form-group px-3 py-2 m-0">
                              <input type="text" className="form-control" placeholder="e.g. @bent10" data-toggle="tribute" data-remote="assets/data/tribute.json" data-menu-container="#people-list" data-item-template="true" data-autofocus="true" data-tribute="true"/> <small className="form-text text-muted">Search people by username or email address to invite them.</small>
                            </div>
                            <div id="people-list" className="tribute-inline stop-propagation"></div><a href="#" className="dropdown-footer">Invite member by link <i className="far fa-clone"></i></a>
                          </div>
                        </div>
                      </div>
                      <button type="button" className="btn btn-light btn-icon" data-toggle="page-expander" title="Expand board"><i className="fas fa-expand-alt fa-lg fa-fw"></i></button> <button type="button" className="btn btn-light btn-icon" data-bs-toggle="modal" data-bs-target="#modalBoardConfig" title="Show menu"><i className="fa fa-cog fa-fw"></i></button>
                    </div>
                  </header>
                  <TaskParent
                    data={taskData}
                    parentOnMove={this.handleParentMove}
                    parentOnEditBtn={this.handleParentEditBtn}
                    parentOnMoveBtn={this.handleParentMoveBtn}
                    parentOnDuplicateBtn={this.handleParentDuplicateBtn}
                    parentOnSubscribeBtn={this.handleParentSubscribeBtn}
                    parentOnTrashBtn={this.handleParentTrashBtn}
                    openNewTaskModal={this.openNewTaskModal}
                    taskOnMove={this.handleTaskMove}
                    newTaskParentDoSubmit={this.newTaskParentHandleSubmit}
                    handleDataForViewTaskModal={this.handleDataForViewTaskModal}
                    handlePlayTaskPlayButton={this.handlePlayTaskPlayButton}
                  />
                </div>
              </div>
          
          {/* this Modal is for that Cog icon button on top-left or top-right depends on RTL/LTR i could make it a component but i didnt know how would i receive data for it so i'll just leave html template here */}
          <div className="modal modal-drawer fade has-shown" id="modalBoardConfig" tabindex="-1" role="dialog" aria-labelledby="modalBoardConfigTitle" aria-hidden="true" style={{display: "none"}}>
            <div className="modal-dialog modal-drawer-right" role="document">
              <div id="modalContentLayer1" className="modal-content">
                <div className="modal-header modal-body-scrolled">
                  <h5 id="modalBoardConfigTitle" className="modal-title"> Menu </h5><button type="button" className="close" data-bs-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                </div>
                <div className="modal-body">
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link" href="#modalLayer2" data-bs-toggle="modal" data-bs-dismiss="modal" data-content-layer="board-overview.html">Overview</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#modalLayer2" data-bs-toggle="modal" data-bs-dismiss="modal" data-content-layer="board-teams.html">Teams</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#modalLayer2" data-bs-toggle="modal" data-bs-dismiss="modal" data-content-layer="board-time-tracking.html">Time tracking</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#modalLayer2" data-bs-toggle="modal" data-bs-dismiss="modal" data-content-layer="board-files.html">Files</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#modalLayer2" data-bs-toggle="modal" data-bs-dismiss="modal" data-content-layer="board-feeds.html">Feeds</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#modalLayer2" data-bs-toggle="modal" data-bs-dismiss="modal" data-content-layer="board-tickets.html">Tickets</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#modalLayer2" data-bs-toggle="modal" data-bs-dismiss="modal" data-content-layer="board-settings.html">Settings</a>
                    </li>
                  </ul>
                  <hr/>
                  <h2 className="section-title">
                    <i className="fas fa-chart-line text-muted ml-2"></i>Recent activity </h2>
                  <ul className="timeline timeline-fluid">
                    <li className="timeline-item">
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="far fa-calendar-alt fa-lg"></i></span>
                      </div>
                      <div className="timeline-body">
                        <div className="media">
                          <div className="media-body">
                            <p className="mb-0">
                              <a href="#">Jeffrey Wells</a> created a <a href="#">schedule</a>
                            </p><span className="timeline-date">About a minute ago</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="fas fa-comments fa-lg"></i></span>
                      </div>
                      <div className="timeline-body">
                        <div className="media">
                          <div className="media-body">
                            <p className="mb-0">
                              <a href="#">Anna Vargas</a> logged a <a href="#">chat</a> with team </p><span className="timeline-date">3 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="fa fa-tasks fa-lg"></i></span>
                      </div>
                      <div className="timeline-body">
                        <div className="media">
                          <div className="media-body">
                            <p className="mb-0">
                              <a href="#">Arthur Carroll</a> created a <a href="#">task</a>
                            </p><span className="timeline-date">8:14pm</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="fas fa-user-plus fa-lg"></i></span>
                      </div>
                      <div className="timeline-body">
                        <div className="media">
                          <div className="media-body">
                            <p className="mb-0">
                              <a href="#">Sara Carr</a> invited to <a href="#">Stilearn Admin</a> project </p><span className="timeline-date">7:21pm</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="fa fa-folder fa-lg"></i></span>
                      </div>
                      <div className="timeline-body">
                        <div className="media">
                          <div className="media-body">
                            <p className="mb-0">
                              <a href="#">Angela Peterson</a> added <a href="#">Looper Admin</a> to collection </p><span className="timeline-date">5:21pm</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="timeline-item">
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="fas fa-user fa-lg"></i></span>
                      </div>
                      <div className="timeline-body">
                        <div className="media">
                          <div className="media-body">
                            <div className="avatar-group mb-2">
                              <a href="#" className="user-avatar user-avatar-sm"><img src={uifaces4} alt=""/></a> <a href="#" className="user-avatar user-avatar-sm"><img src={uifaces5} alt=""/></a> <a href="#" className="user-avatar user-avatar-sm"><img src={uifaces6} alt=""/></a> <a href="#" className="user-avatar user-avatar-sm"><img src={uifaces7} alt=""/></a>
                            </div>
                            <p className="mb-0">
                              <a href="#">Willie Dixon</a> and 3 others followed you </p><span className="timeline-date">4:32pm</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <ul className="timeline timeline-fluid">
                    
                    <li className="timeline-item">
                      
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="far fa-calendar-alt fa-lg"></i></span>
                      </div>
                      
                      <div className="timeline-body">
                        
                        <div className="media">
                          
                          <div className="media-body">
                            <p className="mb-0">
                              <a href="#">Jeffrey Wells</a> created a <a href="#">schedule</a>
                            </p><span className="timeline-date">About a minute ago</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="timeline-item">
                      
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="fas fa-comments fa-lg"></i></span>
                      </div>
                      
                      <div className="timeline-body">
                        
                        <div className="media">
                          
                          <div className="media-body">
                            <p className="mb-0">
                              <a href="#">Anna Vargas</a> logged a <a href="#">chat</a> with team </p><span className="timeline-date">3 hours ago</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="timeline-item">
                      
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="fa fa-tasks fa-lg"></i></span>
                      </div>
                      
                      <div className="timeline-body">
                        
                        <div className="media">
                          
                          <div className="media-body">
                            <p className="mb-0">
                              <a href="#">Arthur Carroll</a> created a <a href="#">task</a>
                            </p><span className="timeline-date">8:14pm</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="timeline-item">
                      
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="fas fa-user-plus fa-lg"></i></span>
                      </div>
                      
                      <div className="timeline-body">
                        
                        <div className="media">
                          
                          <div className="media-body">
                            <p className="mb-0">
                              <a href="#">Sara Carr</a> invited to <a href="#">Stilearn Admin</a> project </p><span className="timeline-date">7:21pm</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="timeline-item">
                      
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="fa fa-folder fa-lg"></i></span>
                      </div>
                      
                      <div className="timeline-body">
                        
                        <div className="media">
                          
                          <div className="media-body">
                            <p className="mb-0">
                              <a href="#">Angela Peterson</a> added <a href="#">Looper Admin</a> to collection </p><span className="timeline-date">5:21pm</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    
                    <li className="timeline-item">
                      
                      <div className="timeline-figure">
                        <span className="tile tile-circle tile-sm"><i className="fas fa-user fa-lg"></i></span>
                      </div>
                      
                      <div className="timeline-body">
                        
                        <div className="media">
                          
                          <div className="media-body">
                            <div className="avatar-group mb-2">
                              <a href="#" className="user-avatar user-avatar-sm"><img src={uifaces4} alt=""/></a> <a href="#" className="user-avatar user-avatar-sm"><img src={uifaces5} alt=""/></a> <a href="#" className="user-avatar user-avatar-sm"><img src={uifaces6} alt=""/></a> <a href="#" className="user-avatar user-avatar-sm"><img src={uifaces7} alt=""/></a>
                            </div>
                            <p className="mb-0">
                              <a href="#">Willie Dixon</a> and 3 others followed you </p><span className="timeline-date">4:32pm</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                  <div className="text-center p-3">
                    <a href="#" className="btn btn-link">View all activity ...</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal modal-drawer fade" id="modalLayer2" tabindex="-1" role="dialog" aria-labelledby="modalLayer2Title" aria-hidden="true">
            
            <div className="modal-dialog modal-drawer-right" role="document">
              
              <div id="modalContentLayer2" className="modal-content">
                
                <div className="modal-header d-block modal-body-scrolled">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item active">
                      <a href="#modalBoardConfig" data-bs-toggle="modal" data-bs-target="#modalBoardConfig" data-bs-dismiss="modal"><i className="breadcrumb-icon fa fa-angle-right ml-2"></i>Back</a>
                    </li>
                  </ol>
                  <h5 id="modalLayer2Title" className="modal-title">
                    <span id="layer-title">Overview</span>
                  </h5>
                </div>
                
                <div className="modal-body">
                  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, neque odio nisi. </p>
                </div>
              </div>
            </div>
          </div>
          {/* this Modal is for that Cog icon button on top-left or top-right depends on RTL/LTR i could make it a component but i didnt know how would i receive data for it so i'll just leave html template here */}
          <AddNewTask doSubmit={this.handleNewTaskSubmit}/>
          <ViewTask 
            data={taskDataForViewModal}
            handleViewModalTaskAssigneeRemove={this.handleViewModalTaskAssigneeRemove}
            handlePlayTaskPlayButton={this.handlePlayTaskPlayButton}
            handleViewTaskAssigneesSelect={this.handleViewTaskAssigneesSelect}
            handleViewTaskClearMultiSelect={this.handleViewTaskClearMultiSelect}
            handleViewModalLabelRemove={this.handleViewModalLabelRemove}
            handleViewModalLabelAdd={this.handleViewModalLabelAdd}
            handleViewTodoDelete={this.handleViewTodoDelete}
            handleTodoClicked={this.handleTodoClicked}
            handleAddnewTodoFromViewTaskModal={this.handleAddnewTodoFromViewTaskModal}
            handleAddnewCommentFromViewTaskModal={this.handleAddnewCommentFromViewTaskModal}
          />
        </div>
      </React.Fragment>
         );
    }
}
 
export default ProjectBoard;