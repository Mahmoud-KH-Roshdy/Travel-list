import { useState } from "react";
import { Item } from "./Item";
import { useItems } from "../context/ItemContext";

export function List() {
    const [sortBy, setSortBy] = useState("input");
    const { items, onClearAll } = useItems()
    let sortedItems;

    if (sortBy === "input") sortedItems = items;

    if (sortBy === "description")
        sortedItems = items
            .slice()
            .sort((a, b) => a.description.localeCompare(b.description));

    if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    return (
        <div className="py-14 flex flex-col justify-between gap-14 relative">
            <ul className=" grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 items-center bg-slate-950 relative z-50  overflow-auto max-h-[400px] ">
                {sortedItems.map((item) => (
                    <Item item={item} key={item.id}/>
                ))}
            </ul>

            <div className=" flex items-center justify-center relative z-50  max-[600px]:flex-col ">
                <select className="select m-[12.8px] px-[40px] py-[12.8px] rounded-lg" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">
                        Sort by input order
                    </option>
                    <option value="description"> Sort by description</option>
                    <option value="packed">Sort by packed status</option>
                </select>
                <button type="button" className="btn m-[12.8px] px-[40px] py-[12.8px] rounded-lg bg-slate-800 " onClick={onClearAll}>Clear ALL</button>
            </div>
        </div>
    );
}
