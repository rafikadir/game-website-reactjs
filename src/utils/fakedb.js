const addToDb = id => {
    let wishlist= {};

    // get wishlist from local storage
    const storedList = localStorage.getItem("wishlists");
    if (storedList) {
        wishlist = JSON.parse(storedList);
    }

    //Quantity
    const quantity = wishlist[id];
    if (quantity) {
        wishlist[id] = quantity + 1;
    }
    else {
        wishlist[id] = 1;
    }

    localStorage.setItem("wishlists", JSON.stringify(wishlist));
};

const getStoredList = () =>{
    let wishlist= {};

    // get wishlist from local storage
    const storedList = localStorage.getItem("wishlists");
    if (storedList) {
        wishlist = JSON.parse(storedList);
    }

    return wishlist;
}

export {addToDb,getStoredList}
