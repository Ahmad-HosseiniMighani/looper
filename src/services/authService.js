// import jwtDecode from "jwt-decode";
import http from "./httpService";
// import { apiUrl } from "../config.json";

export async function getActivities() {
  try {
    const data = await http.get('./jsonfiles/activities.json');
    console.log(data.data)
    return data.data;
  } catch (ex) {
    return [];
  }
}
export async function getMessages() {
  try {
    const data = await http.get('./jsonfiles/messages.json');
    // console.log(data.data)
    return data.data;
  } catch (ex) {
    return [];
  }
}
export async function getTileMenuItems() {
  try {
    const data = await http.get('./jsonfiles/tileMenu.json');
    // console.log(data.data)
    return data.data;
  } catch (ex) {
    return [];
  }
}
export default {
  getTileMenuItems,
  getActivities,
  getMessages
};
