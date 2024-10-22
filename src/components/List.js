import { useState } from "react";
import { Item } from "./Item";
import { useItems } from "../context/ItemContext";
import SortItem from "./SortItem";

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
            <ul className=" grid  grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 items-center  relative z-50  overflow-auto max-h-[300px] text-black dark:text-[#fff]">
                {sortedItems.map((item) => (
                    <Item item={item} key={item.id}/>
                ))}
            </ul>
                <SortItem onClearAll={onClearAll} setSortBy ={setSortBy} sortBy={sortBy}/>
        </div>
    );
}
