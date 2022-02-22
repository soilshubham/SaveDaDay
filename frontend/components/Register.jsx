export default () => {
    return (
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded-lg shadow-md text-black w-full">
                <h1 className="mb-8 text-3xl md:text-2xl font-medium text-center">Sign up</h1>
                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="fullname"
                    placeholder="Full Name" />

                <input
                    type="text"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="username"
                    placeholder="Username" />

                <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    placeholder="Password" />
                <input
                    type="password"
                    className="block border border-grey-light w-full p-3 rounded mb-4"
                    name="confirm_password"
                    placeholder="Confirm Password" />

                <button type=""
                    className="w-full text-center py-3 rounded bg-primary md:hover:opacity-90 text-white hover:bg-green-dark focus:outline-none my-1">
                    Create Account
                </button>
            </div>
        </div>
    );
}