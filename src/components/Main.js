import SvgReact from "./SvgReact"
function Main() {
    return (
        <div className=" p-4 lg:pl-44  lg:mt-20 bg-gray-800 ">
            <div className="grid lg:grid-cols-2 justify-items-end ">
                <div className=" max-w-screen-2xl">
                    <h1 className="text-7xl font-bold my-8">Fun facts about React</h1>

                    <ul className="mt-20 grid space-y-10 list-disc list-inside marker:text-sky-400 text-2xl">
                        <li>Was first released in 2013</li>
                        <li>Was originally created by Jordan Walke</li>
                        <li>Has well over 100K stars on GitHub</li>
                        <li>Is maintained by Facebook</li>
                        <li>Powers thousands of enterprise apps, including mobile apps</li>
                    </ul>
                </div>
                <SvgReact />
            </div>
        </div>
    )
}

export default Main

