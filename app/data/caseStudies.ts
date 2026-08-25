type CaseStudy = {
    name: string;
    shortDescription: string;
    image: string;
    href: string;
};

const CaseStudies: CaseStudy[] = [
    {
        name: "GeoHarvest",
        shortDescription:
            "Precision agriculture with Sentinel-2 satellite imagery — water, nitrogen, phosphorus, and crop stress monitoring for farmers.",
        image: "/webp/projects/geoHarvest1.webp",
        href: "/case-studies/geo-harvest",
    },
    {
        name: "EverythingCourse",
        shortDescription:
            "AI course generator that turns any topic into a structured curriculum — built on a two-pass pipeline that verifies every video link against the real YouTube API.",
        image: "/webp/projects/everythingCourse1.webp",
        href: "/case-studies/everything-course",
    },
];

export { CaseStudies };

export type { CaseStudy };
