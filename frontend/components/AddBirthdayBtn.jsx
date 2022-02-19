const AddBirthdayBtn = (props) => {
    return (
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
    )
}

export default AddBirthdayBtn;