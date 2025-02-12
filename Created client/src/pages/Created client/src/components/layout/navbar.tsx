import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <a className="text-xl font-bold text-primary">Logo</a>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/">
              <a className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="text-muted-foreground hover:text-foreground transition-colors">
                About
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </Link>
            <Button variant="outline">Get Started</Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
