import Logo from "./Logo"

function NavBar() {
    return (
        <div className="lg:flex justify-between items-center mx-auto p-8 bg-gray-900 text-gray-200 lg:px-44 max-w-full ">
                <Logo />
                <h1 className="font-bold text-3xl">React Course - Project 1</h1>
        </div>
    )
}

export default NavBar

