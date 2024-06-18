import { createContext, useContext } from "react";
import useLocalStorageState from "../hook/useLocalStorge";

const ContextItem = createContext()
function ItemContext({ children }) {
    const [items, setItems] = useLocalStorageState([],"item");
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
