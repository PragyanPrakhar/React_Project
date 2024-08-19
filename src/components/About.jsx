const About=()=>{
    return (
        <section className="text-gray-700 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img
                    className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
                    alt="about us"
                    src="https://dummyimage.com/720x600"
                />
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                        About Us
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        Welcome to our company! We are dedicated to providing
                        the best services to our customers. Our team of
                        professionals is passionate about delivering innovative
                        solutions tailored to your needs. We believe in
                        excellence, integrity, and customer satisfaction.
                    </p>
                    <div className="flex justify-center">
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Contact Us
                        </button>
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;


// import React from "react";

// const AboutUs = () => {
//     return (
//         <section className="text-gray-700 body-font">
//             <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
//                 <img
//                     className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
//                     alt="about us"
//                     src="https://dummyimage.com/720x600"
//                 />
//                 <div className="text-center lg:w-2/3 w-full">
//                     <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
//                         About Us
//                     </h1>
//                     <p className="mb-8 leading-relaxed">
//                         Welcome to our company! We are dedicated to providing
//                         the best services to our customers. Our team of
//                         professionals is passionate about delivering innovative
//                         solutions tailored to your needs. We believe in
//                         excellence, integrity, and customer satisfaction.
//                     </p>
//                     <div className="flex justify-center">
//                         <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
//                             Contact Us
//                         </button>
//                         <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
//                             Learn More
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutUs;
