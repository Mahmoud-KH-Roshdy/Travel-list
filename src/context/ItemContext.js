import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorageState from "../hook/useLocalStorge";

const ContextItem = createContext()
function ItemContext({ children }) {
    const [items, setItems] = useLocalStorageState([], "item");
    const [theme, setTheme] = useState('dark');
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    function handleitems(item) {
        setItems(items => [...items, item])
    }
    function handleRemoveItems(id) {
        setItems(items => items.filter((item) => item.id !== id))
    }
    function handleUpdateItems(id) {
        setItems(items => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item))
    }
    function clearALL() {
        setItems([])
    }
    return (
        <ContextItem.Provider value={
            {
                onAddItems: handleitems,
                onRemoveItems: handleRemoveItems,
                onUpdateValue: handleUpdateItems,
                onClearAll: clearALL,
                items,
                theme,
                toggleTheme,
            }
        }>
            {children}
        </ContextItem.Provider>

    )
}
function useItems() {
    const context = useContext(ContextItem);
    if (context === undefined)
        throw new Error("PostContext was used outside of the PostProvider");
    return context;
}
export { ItemContext, useItems };
