const BirthdayCard = (props) => {
    return (
        <div className="md:min-w-0 min-w-full">
            <div className="bg-foreColor shadow-lg shadow-shadowColor rounded-lg p-6">
                <div className="flex justify-between items-center">
                    <div className="text-primary font-medium text-base">Sahil Shubham</div>
                    <button className="text-secondary">Edit</button>
                </div>
                <div className="text-2xl mt-2">04 Aug 2022</div>
                <div className="text-sm mt-2 text-fadedColor">Give him a wrist watch</div>
            </div>
        </div>
    )
}

export default BirthdayCard;