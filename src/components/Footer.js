import { useItems } from "../context/ItemContext";
export function Footer() {
    const { items } = useItems()
    const num = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round((numPacked / num) * 100);
    return (
        <footer className="text-center  px-[10px] py-[30px]  z-50  left-0 bottom-0 w-full ">
            {percentage === 100 ? "You're ready to go now!!" :
                <p className=""> You have {num} items in your todod list , and you already do  {numPacked} ({isNaN(percentage) ? "0" : percentage}%)</p>}
        </footer>
    );
}
