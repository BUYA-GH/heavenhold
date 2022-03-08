import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
};

const postSignup = async(email, username, gamecode, pw1, pw2) => {
    try {
        const response = await axios.post(`${baseUrl}/rest-auth/registration/`, {
            email: email,
            username: username,
            gamecode: gamecode,
            password1: pw1,
            password2: pw2
        });
        console.log(response);
        return response;
    } catch(err) {
        console.error("Api Error | postSignup : ", err);
    }
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

const authAPI = {
    postSignup,
    postLogin
};
export default authAPI;