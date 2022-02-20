const AddBirthdayBtn = (props) => {
    return (
        <div className="fixed md:relative md:bottom-0 bottom-6 w-full">
            <div className="flex justify-center items-center">
                <button className="bg-primary text-white text-lg rounded-lg md:rounded-xl 
                                    md:hover:rounded-lg md:hover:opacity-95 md:hover:scale-[1.02]
                                    transition-all ease-in-out duration-150
                                    max-w-sm md:max-w-lg w-full py-4">
                    + Add Birthday
                </button>
            </div>
        </div>
    )
}

export default AddBirthdayBtn;