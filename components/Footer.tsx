'use client'
const Footer = () => (
    <footer>
        <div className=" mx-auto flex flex-col items-center justify-between gap-4">
            <p className=" text-xs text-muted-foreground">
                © {new Date().getFullYear()} -- built with passion & caffeine
            </p>
            <p className="text-xs text-muted-foreground">
                <span className="text-primary"> status</span>: available for hire
            </p>
        </div>
    </footer>
);

export default Footer;
