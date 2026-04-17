import MyLink from "./MyLink";




const Navbar = () => {

const pathName =[
    {
        path: "/",
        text: "home",
    },
    {
        path: "/timeline",
        text: "timeline",
    },
    {
        path: "/stats",
        text: "stats",
    },
];

// console.log(pathName);

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>

            <div className="">
                <ul className="flex justify-center items-center gap-4">
                    {
                        pathName.map((item, index) => (<MyLink key={index} href={item.path}> {item.text}</MyLink>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
