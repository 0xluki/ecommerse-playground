import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDgyZWU2Mzc2MWY0M2NlNGE1OTMwOSIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2ODI1MTc1MTksImV4cCI6MTY4Mjc3NjcxOX0.Fd2wsTQNmHrAfLc9628Hz0S8wDAakA_ZbDHO26WWVrM";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
