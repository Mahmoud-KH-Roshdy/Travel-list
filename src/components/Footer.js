import { useItems } from "../context/ItemContext";
export function Footer() {
    const { items } = useItems()
    const num = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round((numPacked / num) * 100);
    return (
        <footer className="text-center  flex place-content-center">

            <p className="font-bold capitalize text-[20px] absolute bottom-0 py-14 max-[699px]:py-8 max-[699px]:text-[18px]">
                {percentage !== 100 ?  
                ` You have ${num} items in your todod list , and you already do  ${numPacked} (${isNaN(percentage) ? "0" : percentage}%)` 
                : "You're do everything in your todo list!!" }
                </p>
        </footer>
    );
}
