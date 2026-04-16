
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const MyLink = ({href, children}) => {
    const pathName = usePathname();
    console.log(href);
    
    return (
        <Link
            href={href}
            className={`text-lg font-bold px-3 py-1 rounded-md transition ${
                pathName === href
                    ? "text-green-500 bg-base-200"
                    : ""
            }`}
        >
            {children}
        </Link>
    );
};

export default MyLink;