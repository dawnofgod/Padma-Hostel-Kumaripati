import { Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Padma Hostel</h3>
            <p className="text-muted-foreground text-sm">
              Your trusted student accommodation in Lalitpur. Providing safe, comfortable, 
              and affordable living spaces for students.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-foreground transition-colors">Home</a></li>
              <li><a href="/boys-hostel" className="hover:text-foreground transition-colors">Boys Hostel</a></li>
              <li><a href="/girls-hostel" className="hover:text-foreground transition-colors">Girls Hostel</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/padmagirlshostel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://www.facebook.com/profile.php?id=61576040811346" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Padma Hostel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;