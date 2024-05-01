export function Footer({ items }) {
    const num = items.length;
    const numPacked = items.filter(item => item.packed).length;
    const percentage = Math.round((numPacked / num) * 100);
    return (
        <footer className="text-center  px-[10px] py-[30px] relative z-50  left-0 bottom-0 w-full ">
            {percentage === 100 ? "You're ready to go now!!" :
                <p className=""> You have {num} items in your list , and you already pick  {numPacked} ({isNaN(percentage) ? "0" : percentage}%)</p>}
        </footer>
    );
}
