const Shimmer = () => {
    return (
        <div className="shimmer-container h-screen w-screen flex gap-8 flex-wrap justify-between px-52 ">
            {Array(8).fill(
                <div
                    className="shimmer-card h-72 w-72 bg-gray-400 rounded"
                ></div>
            )}
        </div>
    );
};
export default Shimmer;
