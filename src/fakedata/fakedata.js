// Navbar
import uifaces15 from "../imgs/uifaces15.jpg";
import uifaces16 from "../imgs/uifaces16.jpg";
import uifaces17 from "../imgs/uifaces17.jpg";
import uifaces18 from "../imgs/uifaces18.jpg";
import uifaces19 from "../imgs/uifaces19.jpg";
import uifaces20 from "../imgs/uifaces20.jpg";
import uifaces21 from "../imgs/uifaces20.jpg";
import team1 from "../imgs/team1.jpg";
import team2 from "../imgs/team2.png";
import team3 from "../imgs/team3.png";

let activities = [
    {unread:true,text:"Jeffrey Wells created a schedule",date:"Just now",img:uifaces15,link:"link"},
    {unread:true,text:"Anna Vargas logged a chat",date:"3 hours ago",img:uifaces16,link:"link"},
    {unread:false,text:"Sara Carr invited to Stilearn Admin",date:"5 hours ago",img:uifaces17,link:"link"},
    {unread:false,text:"Arthur Carroll updated a project",date:"1 day ago",img:uifaces18,link:"link"},
    {unread:false,text:"Hannah Romero created a task",date:"1 day ago",img:uifaces19,link:"link"},
    {unread:false,text:"Angela Peterson assign a task to you",date:"2 days ago",img:uifaces20,link:"link"},
    {unread:false,text:"Shirley Mason and 3 others followed you",date:"2 days ago",img:uifaces21,link:"link"}
]
export function getActivities(){
    return activities;
}

let messages = [
    {unread:true,title:"Stilearning",text:"Invitation: Joe's Dinner @ Fri Aug 22",date:"2 hours ago",tileImg:"",img:team1,link:"link"},
    {unread:false,title:"Openlane",text:"Final reminder: Upgrade to Pro",date:"23 hours ago",tileImg:"",img:team3,link:"link"},
    {unread:false,title:"Gogo Zoom",text:"Live healthy with this wireless sensor.",date:"1 day ago",tileImg:"GZ",img:"",link:"link"},
    {unread:false,title:"Gold Dex",text:"Invitation: Design Review @ Mon Jul 7",date:"1 day ago",tileImg:"GD",img:"",link:"link"},
    {unread:false,title:"Creative Division",text:"Need some feedback on this please",date:"2 days ago",tileImg:"",img:team2,link:"link"},
    {unread:false,title:"Lab Drill",text:"Our UX exercise is ready",date:"6 days ago",tileImg:"LD",img:"",link:"link"}
]
export function getMessages(){
    return messages;
}