
"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";


const MyLink = ({href, children}) => {
    const pathName = usePathname();
    console.log(href);
    
    return (
        <Link  
            href={href}
            className={`font-bold ${
                pathName === href
                    ? "btn-primary ": ""}`}
        > <button className="btn"> {children}</button>
            
        </Link>
    );
};

export default MyLink;