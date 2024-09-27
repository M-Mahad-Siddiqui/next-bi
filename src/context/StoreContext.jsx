// export const StoreContext = React.createContext(null);
// import { food_list } from "../assets/assets";

// const StoreContextProvider = (props) => {


//     const contextValue = {
//         food_list
        
//     };
    
//     return (
//         <StoreContext.Provider value = {contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// };

// export default StoreContextProvider;
    
import { createContext, useContext } from 'react';
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextValue = {
        food_list
    };
    
    return (
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

  // Custom hook for easier access to the context
export const useStoreContext = () => {
    const context = useContext(StoreContext);
    if (!context) {
        throw new Error('useStoreContext must be used within a StoreContextProvider');
    }
    return context;
};

export default StoreContextProvider;
