/* eslint-disable react/prop-types */
const Cards = ({ data }) => {
    return (
        <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800">
            <img
                src={data.images[0]}
                alt=""
                className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2 flex flex-col justify-between">
                    <h2 className="text-3xl font-semibold tracking-wide">
                        {data.title}
                    </h2>
                    <h2 className="text-3xl font-semibold tracking-wide">
                        {data.category}
                    </h2>
                    <h2 className="text-3xl font-semibold tracking-wide">
                        {data.price}
                    </h2>
                </div>
                <button
                    type="button"
                    className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50"
                >
                    Read more
                </button>
            </div>
        </div>
    );
};

//Higher Order Components:-
//input-> Card
// Output ->promotedCard
export const withRatedLabel = (Card) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white rounded-lg m-2 p-2 ">Highly Rated</label>
                <Card {...props}/>
            </div>
        );
    };
};

export default Cards;
