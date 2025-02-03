export const links: Link[] = [
    { href: "/quick-links", title: 'Quick links', isActive: false, name: 'quick-links' },
    { href: "/photos", title: 'Photos', isActive: false, name: 'photos' },
    { href: "/shopping", title: 'Shopping', isActive: false, name: 'shopping' },
    { href: "/faq", title: 'FAQ', isActive: false, name: 'faq' },
    { href: "/about-us", title: 'About Us', isActive: false, name: 'about-us' },
];

export enum limiter {
    "line", "characters", "none"
};

export const newsContent: news[] = [
    {
        img: "/images/Ferrari_488Pista.png",
        title: "Title of the Featured Product",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloribus sint accusamus quas dicta nesciunt quaerat. Repudiandae ullam tenetur, optio ipsa voluptatum accusantium dolor nulla reprehenderit nemo, animi fuga itaque.",
        limiter: limiter.line,
        limit: 2
    }, 
    {
        img: "/images/Koenigsegg_Regera.png",
        title: "Title of the Featured Product",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloribus sint accusamus quas dicta nesciunt quaerat. Repudiandae ullam tenetur, optio ipsa voluptatum accusantium dolor nulla reprehenderit nemo, animi fuga itaque.",
        limiter: limiter.line,
        limit: 2
    }, 
    {
        img: "images/Ford_MustangDarkHorse.png",
        title: "Title of the Featured Product",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloribus sint accusamus quas dicta nesciunt quaerat. Repudiandae ullam tenetur, optio ipsa voluptatum accusantium dolor nulla reprehenderit nemo, animi fuga itaque.",
        limiter: limiter.line,
        limit: 2
    }, 
    {
        img: "images/Chevrolet_Corvette.png",
        title: "Title of the Featured Product",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloribus sint accusamus quas dicta nesciunt quaerat. Repudiandae ullam tenetur, optio ipsa voluptatum accusantium dolor nulla reprehenderit nemo, animi fuga itaque.",
        limiter: limiter.line,
        limit: 2
    }, 
    {
        img:  "images/Ford_F150Raptor.png",
        title: "Title of the Featured Product",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloribus sint accusamus quas dicta nesciunt quaerat. Repudiandae ullam tenetur, optio ipsa voluptatum accusantium dolor nulla reprehenderit nemo, animi fuga itaque.",
        limiter: limiter.line,
        limit: 2
    }, 
    {
        img: "images/Chevrolet_Colorado.png",
        title: "Title of the Featured Product",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, doloribus sint accusamus quas dicta nesciunt quaerat. Repudiandae ullam tenetur, optio ipsa voluptatum accusantium dolor nulla reprehenderit nemo, animi fuga itaque.",
        limiter: limiter.line,
        limit: 2
    }, 
]

export interface Link {
    href: string;
    title: string;
    isActive: boolean;
    name: string;
};

export interface news {
    img: string,
    title: string,
    description: string,
    limiter: limiter,
    limit?: number
};

