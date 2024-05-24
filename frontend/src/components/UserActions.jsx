import axios from 'axios';
import jwt from 'jsonwebtoken';


export const getPriceAllFlowers = async (cartFlower) => {
    let allPrice = 0;

    await Promise.all(cartFlower?.map(async (flr) => {
        const tempPrice = await someFucn(flr);
        allPrice += tempPrice;
    }
    ));

    return allPrice;
}

const someFucn = async (flr) => {
    const tempFlr = await getFlowerById(flr.flower)
        .catch((e) => { console.log("Error from get all price:", e); return; });

    return tempFlr.data.price * flr.count;
};

export const getFlowerById = async (id) => {
    let res = () => new Promise(function (resolve, reject) {
        const domain = "http://127.0.0.3:3001";
        const apiBack = domain + "/flower/" + id;
        const response = axios.get(apiBack)
            .catch((e) => reject(console.log("err from get flower:", e)));
        resolve(response);

    })

    return await res();
}

export const addFlowerToUserCart = async (userId, flowerId, count = 1) => {
    const userCart = await getUserCart(userId).catch((e) => { createUserCart(userId); return getUserCart(userId); });
    const cartData = userCart.data[0];
    // check if flower already in cart
    if (cartData.flowers.find(flower => flower.flower === flowerId)) {
        return null;
    }
    const id = cartData._id;

    addFlowerToCart(id, flowerId, count);
}

export const addFlowerToCart = async (cartId, flowerId, count) => {
    console.log("FlowerId: ", flowerId);

    const apiBack = "http://127.0.0.3:3001/shoppingCart/updateFlower/" + cartId;
    await axios.patch(apiBack, {
        flowers: [
            {
                flower: flowerId,
                count: count
            }
        ]
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => { return true })
        .catch((e) => { return null })
}

export const getUserCart = async (userId) => {
    // console.log("Getting cart. Userid: ", userId);
    let res = () => new Promise(function (resolve, reject) {
        const apiBack = "http://127.0.0.3:3001/shoppingCart/user/" + userId;
        const response = axios.get(apiBack)
            .catch((e) => { reject(console.log("err from get: ", e)) });
        resolve(response);

    })

    return await res();


};

const createUserCart = async (userId) => {
    console.log("Create  cart");

    const apiBack = "http://127.0.0.3:3001/shoppingCart";
    axios.post(apiBack, {
        user: userId
        // flowers: []
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => { return response.data })
        .catch((e) => { return null })
}





export const getUserOrder = async (orderData) => {
    const userId = getUserId();
    const userCart = await getUserCart(userId);
    const userFlowers = userCart.data[0].flowers;
    orderData = { ...orderData, user: userId, flowers: userFlowers };
    createUserOrder(orderData);

}

const createUserOrder = async (orderData) => {

    const apiBack = "http://127.0.0.3:3001/order";
    axios.post(apiBack, orderData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => { return response.data })
        .catch((e) => { return null })
}



export const getUserId = () => {
    try {
        const token = localStorage.getItem('token');
        const userId = getUserIdFromToken(token);
        if (checkIfUserExistById(userId) == null) {
            console.log("User not find: ", userId);
            return null;
        }
        console.log("Userid : ", userId);
        return userId;
    }
    catch (e) {
        console.log("Some error from get user:", e)
    }
};


export const checkIfUserExistById = async (id) => {
    await axios.get(`http://127.0.0.4:3002/user/${id}`)
        .then(response => {
            console.log("User: ", response.data)
            return true;
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
