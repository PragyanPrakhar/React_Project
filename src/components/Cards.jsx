/* eslint-disable react/prop-types */
const Cards = ({ data }) => {
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900">
            <img
                src={data.images[0]}
                alt="Product Image"
                className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
                <span className="block text-xs font-medium tracking-widest uppercase dark:text-violet-600">
                    {data.category}
                </span>
                <h2 className="text-xl font-semibold tracking-wide">
                    {data.title.substring(0, 20)}
                </h2>
            </div>
            <p className="dark:text-gray-800">${data.price}</p>
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
                <label className="absolute bg-black text-white rounded-lg m-2 p-2 ">
                    Highly Rated
                </label>
                <Card {...props} />
            </div>
        );
    };
};

export default Cards;
