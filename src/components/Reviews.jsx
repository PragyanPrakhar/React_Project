/* eslint-disable react/prop-types */
const Reviews = ({ data }) => {
    return (
        <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800 flex-wrap">
            <div>
                <label htmlFor="">{data?.date.slice(0, 10)}</label>
                <div className="flex gap-7">
                    <h1 className="mb-1 text-2xl font-semibold">
                        {data?.reviewerName}
                    </h1>
                    <p className="mt-1">{data?.reviewerEmail}</p>
                </div>

                <h2 className="mb-1 text-xl font-semibold mx-1">
                    {
                    Array(data?.rating).fill("⭐")
                    }
                </h2>
                <p className="text-sm dark:text-gray-600">{data?.comment}</p>
            </div>
        </div>
    );
};
export default Reviews;
