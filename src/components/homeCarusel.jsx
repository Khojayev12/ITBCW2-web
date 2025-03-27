import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Homehero1 from "../media/home-hero1.png"

const slides = [
    {
        id: 1,
        image: Homehero1, // Replace with your actual image path
        title: "iPhone 14 Series",
        discount: "Up to 10% off Voucher",
    },
    {
        id: 2,
        image: Homehero1, // Replace with another image path
        title: "iPhone 15 Series",
        discount: "Exclusive Deals Available",
    },
    {
        id: 3,
        image: Homehero1, // Replace with another image path
        title: "iPhone 15 Series",
        discount: "Exclusive Deals Available",
    },
    {
        id: 4,
        image: Homehero1, // Replace with another image path
        title: "iPhone 15 Series",
        discount: "Exclusive Deals Available",
    },
];

export default function HomeCarusel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full mx-auto overflow-hidden rounded-2xl">
            <div className="relative flex transition-transform duration-500 ease-in-out rounded-2xl" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {slides.map((slide) => (
                    <div key={slide.id} className="min-w-full flex-shrink-0 flex items-center bg-black text-white">
                        <div className="p-8 pl-16 w-1/2">
                            <h2 className="text-xl font-semibold">{slide.title}</h2>
                            <p className="text-4xl font-bold mt-2">{slide.discount}</p>
                            <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-300">
                                Shop Now →
                            </button>
                        </div>
                        <div className="w-1/2 flex justify-center">
                            <img src={slide.image} alt={slide.title} className="max-h-80 object-cover" />
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-300">
                <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-300">
                <ChevronRight className="h-6 w-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {slides.map((_, index) => (
                    <span key={index} className={`h-3 w-3 rounded-full ${currentIndex === index ? "bg-red-500" : "bg-gray-400"}`} />
                ))}
            </div>
        </div>
    );
}
