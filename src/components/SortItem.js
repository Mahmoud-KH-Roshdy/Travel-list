function SortItem({onClearAll,sortBy,setSortBy}) {

    return (
        <div className=" flex items-center justify-center relative z-50  max-[600px]:flex-col ">
        <select className="select dark:bg-darkBg m-[12.8px] px-[40px] py-[12.8px] rounded-lg" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">
                Sort by input order
            </option>
            <option value="description"> Sort by description</option>
            <option value="packed">Sort by packed status</option>
        </select>
        <button type="button" className="btn m-[12.8px] px-[40px] py-[12.8px] rounded-lg dark:bg-darkBg dark:text-white text-black bg-[#f4f4f4] " onClick={onClearAll}>Clear ALL</button>
    </div>
    )
}

export default SortItem
