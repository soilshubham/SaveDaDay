import Navbar from "../components/Navbar";
import UpcomingBirthdays from "../components/UpcomingBirthdays";

const Dashboard = () => {
    return (
        <>
            <Navbar />
            <div className="bg-bgColor h-screen pt-16 md:pt-20">
                <div className="container p-4">
                    <div className="mb-12 mt-4">
                        <h1 className="text-3xl md:text-4xl font-medium capitalize">
                            Welcome back, Sahil 👋
                        </h1>
                        <h1 className="text-lg md:text-lg text-fadedColor font-light capitalize mt-2">
                            Don't forget to wish them a happy birthday!
                        </h1>

                    </div>
                    <UpcomingBirthdays />
                </div>
            </div>
            <div className="fixed bottom-6 md:bottom-8 w-full">
                <div className="flex justify-center items-center">
                    <button className="bg-primary text-white text-xl rounded-lg md:rounded-xl 
                                        md:hover:rounded-lg md:hover:opacity-95 md:hover:scale-[1.02]
                                        transition-all ease-in-out duration-150
                                        max-w-sm md:max-w-lg w-full py-6">
                        + Add Birthday
                    </button>
                </div>
            </div>
        </>
    )
}

export default Dashboard;