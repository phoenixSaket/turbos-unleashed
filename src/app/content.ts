export const links: Link[] = [
    { href: "/quick-links", title: 'Quick links', isActive: false, name: 'quick-links' },
    { href: "/photos", title: 'Photos', isActive: false, name: 'photos' },
    { href: "/shopping", title: 'Shopping', isActive: false, name: 'shopping' },
    { href: "/faq", title: 'FAQ', isActive: false, name: 'faq' },
    { href: "/about-us", title: 'About Us', isActive: false, name: 'about-us' },
];

export interface Link {
    href: string;
    title: string;
    isActive: boolean;
    name: string;
}