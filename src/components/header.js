import { useItems } from "../context/ItemContext";

export default function Header() {
    const { toggleTheme, theme } = useItems();
    return (
        <header className="text-center dark:bg-darkBg p-5 bg-[#f4f4f4]  shadow-md flex items-center justify-between ">
            <div className="flex place-content-center">
                <h1 className=" font-bold text-[20px] pl-3">Todo</h1>
            </div>
            {/* <div className="flex items-center justify-center">
                <ul className="flex items-center justify-center">
                    <li className="pl-4">Home</li>
                    <li className="pl-4">About</li>
                    <li className="pl-4">Content</li>
                </ul> 
            </div> */}
            <div className="flex items-center justify-center">
            <button
                    onClick={toggleTheme}
                    className="px-4 py-2 bg-gray-200 dark:bg-darkBg  text-gray-800 dark:text-gray-200 rounded"
                >
                    {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
                </button>
            </div>
        </header>
    );
} 