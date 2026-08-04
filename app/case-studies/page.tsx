import Image from "next/image";
import Link from "next/link";
import { CaseStudies } from "../data/caseStudies";

const BLUR_DATA_URL =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e2e8f0'/%3E%3C/svg%3E";

export default function CaseStudiesPage() {
  return (
    <div className="w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 py-10 ">
      {CaseStudies.map((caseStudy, index) => {
        return (
          <Link
            key={index}
            href={caseStudy.href}
            className="flex flex-col gap-5 hover:scale-105 transition-all duration-300 "
          >
            <Image
              className="w-full aspect-video object-cover border border-foreground/25 "
              src={caseStudy.image}
              alt={caseStudy.name}
              width={400}
              height={300}
              sizes="(max-width: 768px) 100vw, 50vw"
              placeholder="blur"
              blurDataURL={BLUR_DATA_URL}
            />
            <div className="flex flex-col ">
              <h2 className="text-[1.125rem] font-light">{caseStudy.name}</h2>
              <p className="text-[0.875rem] font-extralight line-clamp-2">
                {caseStudy.shortDescription}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
