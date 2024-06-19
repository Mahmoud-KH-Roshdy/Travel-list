import React from 'react';

const Time = ({ item }) => {
    // تحويل الوقت بالميلي ثانية إلى كائن Date
    const date = new Date(item.id);

    // تحويل التاريخ إلى صيغة مقروءة
    const readableDate = date.toLocaleString();

    return (
        <div>
            <p className='text-[13px] text-[#999] hover:text-white transition-all duration-500 pl-1'>{readableDate}</p>
        </div>
    );
};

export default Time;