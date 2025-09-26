import Link from "next/link";
import LinkComponent from "./link";


export default async function Navbar() {
    return (
        <div className="w-10/12 mx-auto flex flex-row md:items-center py-7">
            <div className="flex flex-col md:flex-row md:items-center gap-4 ">
                <div className="font-bold text-xl tracking-[0.25rem] mr-12">SYED MINHAJ</div>
                <div className="tracking-[0.2rem] flex flex-row gap-4 ">
                    <LinkComponent link="HOME"  href={"/"} />
                    <LinkComponent link="PROJECTS"  href={"/projects"} />
                </div>
            </div>
            <div className="ml-auto flex flex-row gap-4 w-fit ">
                <a target="_blank" href="https://github.com/syed-minhaj">
                    <svg height="32" aria-hidden="true" viewBox="0 0 24 24" version="1.1" width="32" data-view-component="true" 
                    className="octicon octicon-mark-github v-align-middle fill-foreground "><path d="M12 1C5.923 1 1 5.923 1 12c0 4.867 3.149 8.979 7.521 10.436.55.096.756-.233.756-.522  0-.262-.013-1.128-.013-2.049-2.764.509-3.479-.674-3.699-1.292-.124-.317-.66-1.293-1.127-1.554-.385-.207-.936-.715-.014-.729.866-.014  1.485.797 1.691 1.128.99 1.663 2.571 1.196 3.204.907.096-.715.385-1.196.701-1.471-2.448-.275-5.005-1.224-5.005-5.432 0-1.196.426-2.186  1.128-2.956-.111-.275-.496-1.402.11-2.915 0 0 .921-.288 3.024 1.128a10.193 10.193 0 0 1 2.75-.371c.936 0 1.871.123 2.75.371 2.104-1.43  3.025-1.128 3.025-1.128.605 1.513.221 2.64.111 2.915.701.77 1.127 1.747 1.127 2.956 0 4.222-2.571 5.157-5.019 5.432.399.344.743 1.004.743  2.035 0 1.471-.014 2.654-.014 3.025 0 .289.206.632.756.522C19.851 20.979 23 16.854 23 12c0-6.077-4.922-11-11-11Z"></path></svg>
                </a>
                <a target="_blank" href="https://www.linkedin.com/in/syed-minhaj-ul-haque/">
                    <svg height="32" width="32" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin" 
                    className="svg-inline--fa fa-linkedin fill-foreground " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
                </a>
            </div>
        </div>
    );
}