import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut
} from 'firebase/auth';
import { collection, getDocs } from 'firebase/firestore';
import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../utiles/utils.js';

export const FireContext = createContext(null);

export const FireProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    console.log('FireProvider mounted');

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
        return Boolean(auth.currentUser);
        // return !!auth.currentUser;

    };
    //    const isLogin = () => {
    //   return auth.currentUser ? true : false;
    // };

    const SignUp = async (email, password) => {
        return await createUserWithEmailAndPassword(auth, email, password);
    };

    const SignIn = async (email, password) => {
        return await signInWithEmailAndPassword(auth, email, password);
    };
    // const SignIn = async (email, password) => {
    //     try {
    //         return await signInWithEmailAndPassword(auth, email, password);
    //     } catch (error) {
    //         console.error('Error signing in:', error);
    //         throw error;
    //     }
    // };

    const SignOut = () => {
        return signOut(auth);
    };

    const getDataFromCollection = async (collectionName) => {
        try {
            const querySnapshot = await getDocs(collection(db, collectionName));
            const data = [];
            querySnapshot.forEach((doc) => {
                data.push(doc.data())
            });
            return data;
        } catch (error) {
            console.error(`Error fetching ${collectionName}:`, error);
            throw error;
        }
    };

    const getUsers = () => getDataFromCollection('users');
    const getProducts = () => getDataFromCollection('products');
    const getOrders = () => getDataFromCollection('orders');
    const getCart = () => getDataFromCollection('cart');

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

export const useFireContext = () => useContext(FireContext);
// export const useFireContext = () => {
//     return useContext(FireContext);
// }
