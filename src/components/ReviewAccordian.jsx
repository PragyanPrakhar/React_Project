import { useState } from "react";
const ReviewAccordian = ({ data, show, setShow }) => {
    console.log(data);

    return (
        <div className="w-screen">
            {/**Accordian Header */}
            <div
                onClick={() => setShow()}
                className="w-6/12 bg-gray-50 mx-auto my-4 shadow-lg cursor-pointer"
            >
                <div className="flex justify-between">
                    <span className="font-bold text-lg">
                        Reviews ({data?.reviewerName})
                    </span>
                    <span>⬇️</span>
                </div   >
                {show && (
                    <div className="p-5 flex flex-col">
                        <p className="">{data.comment}</p>
                        {Array(data?.rating).fill("⭐")}
                    </div>
                )}
            </div>
        </div>
    );
};
export default ReviewAccordian;
