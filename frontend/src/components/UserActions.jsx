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
    // let userCart = await getUserCart(userId).catch((e) => { createUserCart(userId); return getUserCart(userId); });
    await getUserCart(userId).then(async (response) => {
        const cartData = response.data[0];
        if (cartData == undefined) {
            throw "lolus";
        }
        console.log("CARTDATA: ", cartData);
        if (cartData.flowers.find(flower => flower.flower === flowerId)) {
            return null;
        }
        const id = await cartData._id;

        await addFlowerToCart(id, flowerId, count);
    }).catch((e) => {
        createUserCart(userId).then( async () => {
            await getUserCart(userId).then(async (response) => {
                const cartData = response.data[0];
                console.log("CARTDATA: ", cartData);
                if (cartData.flowers.find(flower => flower.flower === flowerId)) {
                    return null;
                }
                const id = await cartData._id;

                await addFlowerToCart(id, flowerId, count);
            })
        })
    })
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

export const createUserCart = async (userId) => {
    console.log("Create  cart");

    const apiBack = "http://127.0.0.3:3001/shoppingCart";
    axios.post(apiBack, {
        user: userId,
        flowers: []
    }, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => { return response.data })
        .catch((e) => { return null })
}



// Actions with order
export const createUser = async (user) => {
    try {
        user = { ...user, password_check: user.password };
        const response = await axios.post('http://127.0.0.4:3002/register', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // console.log(response.data);
        return true;
    } catch (error) {
        console.error('Error:', error);
        return false;
    }
}



// for frieren
export const getUserOrder = async () => {
    try {
        const userId = getUserId();
        const apiBack = "http://127.0.0.3:3001/order/user/";
        const response = await axios.get(apiBack + userId);
        const userOrder = response.data;
        return userOrder;
    } catch (e) {
        console.log("Error with user order:", e);
        return false;
    }
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
export const exitFromAccaunt = () => {
    localStorage.clear();
}

export const loginUser = async (user) => {
    try {
        const response = await axios.post('http://127.0.0.4:3002/login', user, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("RESPPSPS:", response);
        const { access_token } = response.data;
        localStorage.setItem('token', access_token);
        console.log('JWT token:', access_token);
        return true;
    } catch (error) {
        console.error('Error login:', error);
        return false;
    }
}

export const getUserById = async () => {
    try {
        const userId = getUserId();
        if (userId == false) throw "User doesn't exist";
        const response = await axios.get(`http://127.0.0.4:3002/user/${userId}`);
        const user = response.data;

        return user;

    }
    catch (e) {
        console.log("Some error from get user by id:", e);
        return false;
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
        if (userId == null || checkIfUserExistById(userId) == null) {
            console.log("User not find: ", userId);
            return false;
        }
        // console.log("Userid : ", userId);
        return userId;
    }
    catch (e) {
        console.log("Some error from get userId:", e)
        return false;
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
        return decodedToken != null ? decodedToken.sub : null;
    } catch (error) {
        console.error('Error decoding token:', error);
        return null;
    }
};
