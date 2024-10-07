import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../utiles/utils.js";

export const FireContext = createContext(null);

export const FireProvider = ({ children }) => { 
    const [user, setUser]       = useState(null); 
    const [loading, setLoading] = useState(true); 
    const navigate              = useNavigate();
    
    console.log("FireProvider mounted");

    // useEffect to handle side effect of auth state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        // Cleanup on unmount
        return () => unsubscribe();
    }, []);

   const isLogin = () => {
  return auth.currentUser ? true : false;
};

    const SignUp = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    const SignIn = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };

    const SignOut = () => {
        return signOut(auth);
    };

    const getUsers = async () => {
        const querySnapshot = await getDocs(collection(db, "users"));
        const users = [];
        querySnapshot.forEach((doc) => {
            users.push(doc.data());
        });
        return users;
    };

    const getProducts = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const products = [];
        querySnapshot.forEach((doc) => {
            products.push(doc.data());
        });
        return products;
    };

    const getOrders = async () => {
        const querySnapshot = await getDocs(collection(db, "orders"));
        const orders = [];
        querySnapshot.forEach((doc) => {
            orders.push(doc.data());
        });
        return orders;
    };

    const getCart = async () => {
        const querySnapshot = await getDocs(collection(db, "cart"));
        const cart = [];
        querySnapshot.forEach((doc) => {
            cart.push(doc.data());
        });
        return cart;
    };

    const fireContextValue = {
        isLogin,
        user,
        loading,
        SignUp,
        SignIn,
        SignOut,
        getUsers,
        getProducts,
        getOrders,
        getCart
    };

    return (
        <FireContext.Provider value={fireContextValue}>
            {children}
        </FireContext.Provider>
    );
};

export const useFireContext = () => {
    return useContext(FireContext);
}
