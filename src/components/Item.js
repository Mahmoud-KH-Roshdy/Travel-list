import { useItems } from "../context/ItemContext";
export function Item({item}) {
    const { onRemoveItems, onUpdateValue } = useItems()
    return (
        <>
            <li className=" flex items-center justify-center">
                <input type="checkbox" className="check cursor-poniter" value={item.packed} onChange={() => onUpdateValue(item.id)} />
                <span
                    className={`px-2  text-[20px] font-bold ${item.packed ? "line-through , opacity-10" : ""}`}
                >
                    {item.quantity} {item.description}
                </span>
                <button className="cursor-poniter border-none " onClick={() => onRemoveItems(item.id)}>❌</button>
            </li>

        </>
    );
}
