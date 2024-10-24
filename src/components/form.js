import { useState } from "react";
import { useItems } from "../context/ItemContext";
export default function Form() {
    const [description, setDescription] = useState("");
    const { onAddItems } = useItems()
    function handleSumbit(e) {
        e.preventDefault();
        if (!description) return;
        const newItem = { description,  package: false, id: Date.now() };
        onAddItems(newItem)
        setDescription("");
    }
    return (
        <div>
            <form
                className="my-5 flex justify-center items-center max-[600px]:flex-col max-[600px]:gap-4"
                onSubmit={handleSumbit}
            >
                <label className="pr-3">What do you need todo?</label>
                <div className="flex">
                    <input
                        type="text"
                        className=" focus:outline  dark:bg-darkBg dark:text-white  max-w-full p-[10px] flex-1 rounded-lg bg-[#f4f4f4]  text-black"
                        placeholder="item..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                    <button
                        className="dark:bg-darkBg dark:text-white bg-[#f4f4f4]  text-black  hover:bg-white transition-all duration-700  p-[10px] rounded-md ml-[10px] cursor-pointer ">
                        Add
                    </button>
                </div>
            </form>
        </div>
    );
}