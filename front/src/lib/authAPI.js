import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const postSignup = async(email, gamecode, pw1, pw2) => {
    return await axios.post(`${baseUrl}/rest-auth/registration/`, {
        email: email,
        gamecode: gamecode,
        password1: pw1,
        password2: pw2
    }, {
        headers: headers
    })
    .then(response => {
        console.log(response.data.key);
        return response.data;
    });
}

const postLogin = async (email, password) => {
    return await axios.post(`${baseUrl}/rest-auth/login/`, {
        email: email,
        password: password
    }, {
        headers: headers
    })
    .then(response => {
        if(response.data.key) {
            localStorage.setItem("user", response.data.key)
        }
        console.log(response.data.key);
        return response.data;
    });
}

const postLogout = async () => {
    return await axios.post(`${baseUrl}/rest-auth/logout/`, {

    },{
        headers: headers
    })
    .then(response => {
        localStorage.removeItem("user");
        return response.data;
    })
}

const authAPI = {
    postSignup,
    postLogin,
    postLogout
};
export default authAPI;