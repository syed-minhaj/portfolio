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
];

export { CaseStudies };

export type { CaseStudy };
