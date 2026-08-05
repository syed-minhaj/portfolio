export type Token = { c: string; v: string };

const STYLE: Record<string, string> = {
    kw: "",
    fn: "",
    str: "text-[#171717]",
    num: "text-[#171717]",
    punct: "text-[#2b2b2b]",
};

type CodeFaceProps = {
    lines: Token[][];
    filename: string;
};

const CodeFace = ({ lines, filename }: CodeFaceProps) => {
    return (
        <div className="flex h-full w-full flex-col border-2 border-[#171717] bg-white/85 overflow-hidden font-normal">
            <div className="flex items-center gap-1.5 border-b border-[#171717] px-2 py-1 text-[0.6rem]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#171717]" />
                <span className="h-1.5 w-1.5 rounded-full border border-[#171717]" />
                <span className="h-1.5 w-1.5 rounded-full border border-[#171717]" />
                <span className="ml-auto border-b border-[#171717] font-extrabold leading-none">{filename}</span>
            </div>
            <div className="flex flex-1 overflow-hidden px-2 py-1 text-[0.7rem] leading-[1.5]">
                <div className="pr-2 text-right text-[#3f3f3f] select-none">
                    {lines.map((_, li) => (
                        <div key={li}>{li + 1}</div>
                    ))}
                </div>
                <div className="overflow-hidden whitespace-pre">
                    {lines.map((line, li) => (
                        <div key={li}>
                            {line.map((tok, ti) => (
                                <span key={ti} className={STYLE[tok.c]}>
                                    {tok.v}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CodeFace;
