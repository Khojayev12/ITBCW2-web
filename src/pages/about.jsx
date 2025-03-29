import {FaShoppingBag, FaUsers, FaDollarSign, FaStore, FaShippingFast, FaHeadset, FaShieldAlt} from "react-icons/fa";
import Hero from "../media/abouthero.png";
import Hero1 from "../media/abouthero1.png";
import Hero2 from "../media/abouthero2.png";
import Hero3 from "../media/abouthero3.png";
import { FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";

const About = () => {
    return (
        <div className="page container mx-auto p-8">
            {/* Our Story Section */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h2 className="text-4xl font-semibold">Our Story</h2>
                    <p className="text-gray-600 mt-4">
                        Launched in 2015, Exclusive is South Asia’s premier online shopping
                        marketplace with an active presence in Bangladesh. Supported by a
                        wide range of tailored marketing, data and service solutions,
                        Exclusive has 10,500 sellers and 300 brands and serves 3 million
                        customers across the region.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Exclusive has more than 1 Million products to offer, growing at a
                        very fast rate. Exclusive offers a diverse assortment in categories
                        ranging from consumer electronics to fashion.
                    </p>
                </div>
                <div>
                    <img
                        src={Hero}
                        alt="Shopping"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="flex flex-col items-center p-6 border rounded-lg shadow">
                    <FaStore className="text-3xl mb-2" />
                    <p className="text-4xl font-bold">10.5k</p>
                    <p className="text-gray-500 text-lg">Sellers active on our site</p>
                </div>
                <div className="flex flex-col items-center p-6 border rounded-lg shadow bg-red-500 text-white">
                    <FaShoppingBag className="text-3xl mb-2" />
                    <p className="text-4xl font-bold">33k</p>
                    <p className="text-lg">Monthly Product Sale</p>
                </div>
                <div className="flex flex-col items-center p-6 border rounded-lg shadow">
                    <FaUsers className="text-3xl mb-2" />
                    <p className="text-4xl font-bold">45.5k</p>
                    <p className="text-gray-500 text-lg">Customers active in our site</p>
                </div>
                <div className="flex flex-col items-center p-6 border rounded-lg shadow">
                    <FaDollarSign className="text-3xl mb-2" />
                    <p className="text-4xl font-bold">25k</p>
                    <p className="text-gray-500 text-lg">Annual gross sale in our site</p>
                </div>
            </div>

            {/* Team Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
                {[
                    { name: "Tom Cruise", role: "Founder & Chairman", img: Hero1 },
                    { name: "Emma Watson", role: "Managing Director", img: Hero2 },
                    { name: "Will Smith", role: "Product Designer", img: Hero3 },
                ].map((member, index) => (
                    <div key={index} className="flex flex-col items-center w-full justify-center">
                        <img
                            src={member.img}
                            alt={member.name}
                            className="w-10/12 rounded-lg shadow-lg mb-4"
                        />
                        <p className="text-lg font-semibold">{member.name}</p>
                        <p className="text-gray-500 text-sm">{member.role}</p>
                        <div className="flex gap-2 mt-2 text-gray-500">
                            <span className="cursor-pointer"><FaXTwitter/></span>
                            <span className="cursor-pointer"><FaInstagram/></span>
                            <span className="cursor-pointer"><FaLinkedinIn/></span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex justify-center gap-12 py-10 my-12">
                <div className="flex flex-col items-center text-center">
                    <div
                        className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full border-4 border-gray-300">
                        <FaShippingFast size={28}/>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">FREE AND FAST DELIVERY</h3>
                    <p className="text-gray-600 text-sm mt-2">Free delivery for all orders over $140</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div
                        className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full border-4 border-gray-300">
                        <FaHeadset size={28}/>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">24/7 CUSTOMER SERVICE</h3>
                    <p className="text-gray-600 text-sm mt-2">Friendly 24/7 customer support</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <div
                        className="w-16 h-16 flex items-center justify-center bg-black text-white rounded-full border-4 border-gray-300">
                        <FaShieldAlt size={28}/>
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">MONEY BACK GUARANTEE</h3>
                    <p className="text-gray-600 text-sm mt-2">We return money within 30 days</p>
                </div>
            </div>
        </div>
    );
};

export default About;
