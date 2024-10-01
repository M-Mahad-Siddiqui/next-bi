import { createContext, useContext } from 'react';
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const contextValue = {
        food_list
    };

    return (
        <StoreContext.Provider value={contextValue}>
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

// Named Export vs. Default Export: 
// When you use export default, you're exporting a single value as the default export from a module. You can then import it without curly braces.
// When you use export (without default), you're exporting a named value. You need to import it using curly braces.



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