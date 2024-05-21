import axios from 'axios';
import jwt from 'jsonwebtoken';



export const getUserCart = (userId) => {

    const apiBack = "http://127.0.0.3:3001/shoppingCart/user/" + userId;
    axios.get(apiBack)
        .then(response => {return response.data})
        .catch((e) => {return null})
};




export const getUserId = () => {
    try {
        const token = localStorage.getItem('token');
        const userId = getUserIdFromToken(token);
        return getUserById(userId) == null ? null : userId;
    }
    catch (e) {
        console.log("Some error from get user:", e)
    }
};


export const getUserById = (id) => {
    axios.get(`http://127.0.0.4:3002/user/${id}`)
    .then(response => {
        console.log("User: ", response.data)
        return response.data;
    })
    .catch(error => {
        console.error('Error fetching user data:', error);
        return null;
    });
};

export const getUserIdFromToken = (token) => {
    try {
        const decodedToken = jwt.decode(token);
        return decodedToken ? decodedToken.sub : null;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};
