import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Settings } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EnrollmentModal from "./EnrollmentModal";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Activities", href: "#activities" },
    { name: "Gallery", href: "#gallery" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 w-full z-50 cartoon-card backdrop-blur-lg border-fun-pink hover:border-fun-yellow smooth-hover">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between py-3 sm:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-fun rounded-2xl flex items-center justify-center gentle-bounce shadow-bounce">
              <span className="text-white font-bold text-lg sm:text-xl">🎪</span>
            </div>
            <div>
              <h1 className="font-display font-bold text-lg sm:text-xl rainbow-text gentle-wiggle">
                Crystal Play School 🌈
              </h1>
              <p className="text-xs text-fun-purple font-medium hidden sm:block">✨ Where Learning Meets Fun! ✨</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-fun-blue hover:text-fun-red smooth-hover font-bold text-base xl:text-lg relative group"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="absolute inset-0 bg-fun-yellow/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-2 text-muted-foreground hover:text-primary smooth-hover text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium hidden xl:inline">+1 (555) 123-PLAY</span>
            </a>
            <EnrollmentModal />
            <Button 
              onClick={() => navigate('/admin/login')}
              variant="outline"
              size="sm"
              className="gap-2 hidden xl:flex"
            >
              <Settings className="w-4 h-4" />
              Admin
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-muted/50 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-white/20">
            <nav className="flex flex-col gap-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/20 flex flex-col gap-3">
                <a 
                  href="tel:+15551234567" 
                  className="flex items-center gap-2 text-muted-foreground"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+1 (555) 123-PLAY</span>
                </a>
                 <EnrollmentModal />
                <Button 
                  onClick={() => {
                    navigate('/admin/login');
                    setIsMenuOpen(false);
                  }}
                  variant="outline"
                  className="gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Admin Login
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
