import axios from "axios";

const KEY = "AIzaSyAaXFPBQwpdPBPEARJ-FYhvvQSgwR2g1Q4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});

//npm install axios@0.18.1
