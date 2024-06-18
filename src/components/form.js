import { useState } from "react";
import { useItems } from "../context/ItemContext";
export default function Form() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);
    const { onAddItems } = useItems()
    function handleSumbit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = { description, quantity, package: false, id: Date.now() };
        onAddItems(newItem)
        setDescription("");
        setQuantity(1)
    }
    return (
        <div>
            <form
                className="my-5 flex justify-center items-center max-[600px]:flex-col max-[600px]:gap-4"
                onSubmit={handleSumbit}
            >
                <label className="pr-3">What do you need for your trip?</label>
                <select className="select"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((e) => (
                        <option value={e} key={e}>
                            {e}
                        </option>
                    ))}
                </select>
                <div className="flex">
                    <input
                        type="text"
                        className=" focus:outline  dark:bg-slate-800 dark:text-white  max-w-full p-[10px] flex-1 rounded-lg"
                        placeholder="item..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button
                        className="dark:bg-slate-800 text-white hover:bg-slate-900 transition-all duration-700  p-[10px] rounded-md ml-[10px] cursor-pointer ">
                        ADD
                    </button>
                </div>
            </form>
        </div>
    );
}