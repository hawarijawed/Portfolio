import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import CircularText from './CircularText';
import { assets } from '../assets/assets';
// import logo from '../assets/logo'
const Navbar = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const sections = ['home', 'projects', 'skills', 'contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        <div className="flex items-center justify-between py-4 sm:py-6 md:relative">
          <button
            onClick={() => scrollToSection('home')}
            className="text-white tracking-wider cursor-pointer z-10"
          >
            <img src={assets.Logo} alt="logo" className='w- h-10 rounded-3xl' />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="group flex flex-col items-center gap-2 cursor-pointer"
              >
                <span
                  className={`text-sm uppercase tracking-wider transition-all duration-300 ${activeSection === section
                      ? 'text-white opacity-100'
                      : 'text-white/40 group-hover:text-white/70'
                    }`}
                >
                  {section}
                </span>
                <div
                  className={`h-px transition-all duration-300 ${activeSection === section
                      ? 'w-full bg-white'
                      : 'w-0 bg-white/30 group-hover:w-full group-hover:bg-white/60'
                    }`}
                />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button className="md:hidden text-white z-10">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-white/10 w-[280px] sm:w-[350px]">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <SheetDescription className="sr-only">
                Navigate to different sections of the portfolio
              </SheetDescription>
              <div className="flex flex-col gap-8 mt-12">
                {sections.map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="group flex flex-col items-start gap-2 cursor-pointer"
                  >
                    <span
                      className={`text-base uppercase tracking-wider transition-all duration-300 ${activeSection === section
                          ? 'text-white opacity-100'
                          : 'text-white/40 group-hover:text-white/70'
                        }`}
                    >
                      {section}
                    </span>
                    <div
                      className={`h-px transition-all duration-300 ${activeSection === section
                          ? 'w-16 bg-white'
                          : 'w-0 bg-white/30 group-hover:w-12 group-hover:bg-white/60'
                        }`}
                    />
                  </button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;