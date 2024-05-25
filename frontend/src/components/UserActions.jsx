import axios from 'axios';
import jwt from 'jsonwebtoken';



// Actions with Flowers

export const getPriceAllFlowers = async (cartFlower) => {
    let allPrice = 0;

    await Promise.all(cartFlower?.map(async (flr) => {
        const tempPrice = await getFlrPrice(flr);
        allPrice += tempPrice;
    }
    ));

    return allPrice;
}

const getFlrPrice = async (flr) => {
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



// Actions with Cart 


export const clearUserCart = async () => {
    const userId = getUserId();
    const userCartId = await getUserCartId(userId);
    const apiBack = "http://127.0.0.3:3001/shoppingCart/" + userCartId;

    await axios.patch(apiBack, {
        flowers: []
    },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}

const getUserCartId = async (userId) => {
    const userCartResponse = await getUserCart(userId);
    const userCart = userCartResponse.data[0];
    const userCartId = userCart._id;
    return userCartId;
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



// Actions with order


export const getUserOrder = async () => {
    const userId = getUserId();
    const apiBack = "http://127.0.0.3:3001/order/user/";
    const response = await axios.get(apiBack + userId);
    const userOrder = response.data;
    return userOrder;
}

export const makeUserOrder = async (orderData) => {
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






// Actions with User
export const getUserById = async () => {
    try {
        const userId = getUserId();
        const response = await axios.get(`http://127.0.0.4:3002/user/${userId}`);
        const user = response.data;

        return user;

    }
    catch (e) {
        console.log("Some error from get user:", e)
    }
}

const getUser = async (userId) => {
    const user = await axios.get(`http://127.0.0.4:3002/user/${userId}`);
    return user;
}

export const getUserId = () => {
    try {
        const token = localStorage.getItem('token');
        const userId = getUserIdFromToken(token);
        if (checkIfUserExistById(userId) == null) {
            console.log("User not find: ", userId);
            return null;
        }
        // console.log("Userid : ", userId);
        return userId;
    }
    catch (e) {
        console.log("Some error from get userId:", e)
    }
};


export const checkIfUserExistById = async (id) => {
    await axios.get(`http://127.0.0.4:3002/user/${id}`)
        .then(response => {
            // console.log("User: ", response.data)
            return true;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
            return null;
        });
};

const getUserIdFromToken = (token) => {
    try {
        const decodedToken = jwt.decode(token);
        return decodedToken ? decodedToken.sub : null;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};
