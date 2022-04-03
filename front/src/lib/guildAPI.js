import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000';

const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': 'Token ' + localStorage.getItem('user')
};

const postGuild = async(name, type) => {
    return await axios.post(`${baseUrl}/guild/`, {
        name: name,
        type: type
    }, {
        headers: headers
    })
    .then(response => {
        console.log(response.data);
        return response.data;
    })
}

const guildAPI = {
    postGuild,
}

export default guildAPI;