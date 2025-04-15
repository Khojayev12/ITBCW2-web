import { useEffect, useState } from "react";
import Homehero1 from "../media/home-hero1.png"

export default function HomeSpecialProduct() {
    const [timeLeft, setTimeLeft] = useState({
        days: 5,
        hours: 23,
        minutes: 59,
        seconds: 35,
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                let { days, hours, minutes, seconds } = prev;

                if (seconds > 0) {
                    seconds--;
                } else {
                    seconds = 59;
                    if (minutes > 0) {
                        minutes--;
                    } else {
                        minutes = 59;
                        if (hours > 0) {
                            hours--;
                        } else {
                            hours = 23;
                            if (days > 0) {
                                days--;
                            } else {
                                clearInterval(timer);
                            }
                        }
                    }
                }

                return { days, hours, minutes, seconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative w-full max-w-max  mx-auto flex bg-black text-white p-8 rounded-lg overflow-hidden">
            <div className="w-1/2 flex flex-col justify-center">
                <p className="text-green-500 font-semibold">Special Offer</p>
                <h2 className="text-4xl font-bold mt-2">Enhance Your Mobile Experience</h2>
                <div className="flex space-x-4 mt-4 text-center">
                    {Object.entries(timeLeft).map(([unit, value]) => (
                        <div key={unit} className="bg-gray-800 p-4 rounded-lg">
                            <p className="text-2xl font-bold">{String(value).padStart(2, "0")}</p>
                            <p className="text-sm uppercase">{unit}</p>
                        </div>
                    ))}
                </div>
                <button className="mt-6 px-4 w-2/3 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400">
                    Buy Now!
                </button>
            </div>
            <div className="w-1/2 flex justify-center">
                <img src={Homehero1} alt="JBL Boombox" className="max-h-80 object-cover" />
            </div>
        </div>
    );
}
