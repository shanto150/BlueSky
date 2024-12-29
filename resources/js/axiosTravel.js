import axios from "axios";

//creating an axios instance
// const BaseURL = "";

const axiosTravel = axios.create({
    baseURL:"/api",
    headers: {
        "Content-Type": "text/xml",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Expose-Headers": "*",
    },
    auth: {
        username: "Universal API/uAPI1974892322-0c5d2a63",
        password: "Pi2-3$fB+j",
    },
});

export default axiosTravel;
