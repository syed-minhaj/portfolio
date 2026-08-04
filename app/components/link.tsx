"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const LinkComponent = ({link , href} : {link : string , href : string}) => {
    const path =  usePathname();
    const active = href === "/" ? path === href : path.startsWith(href);
    return (
        <Link className="flex flex-col whitespace-nowrap " href={href} >
            {link}
            {active && <span className="w-full h-[1px] bg-foreground "></span>}
        </Link>
    )
}
export default LinkComponent ;