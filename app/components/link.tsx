"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkComponent = ({link , href} : {link : string , href : string}) => {
    const path =  usePathname();
    return (
        <Link className="flex flex-col " href={href} >
            {link}
            {path === href && <span className="w-full h-[1px] bg-foreground "></span>}
        </Link>
    )
}
export default LinkComponent ;