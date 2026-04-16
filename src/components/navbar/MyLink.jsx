
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const MyLink = ({href, children}) => {
    const pathName = usePathname();
    console.log(href);
    
    return (
        <div className="">
            <Link href={href}
            
            className={`pb-2 font-semibold ${pathName === href ? "t" : ""}`}>
            {children}
            </Link>
        </div>
    );
};

export default MyLink;