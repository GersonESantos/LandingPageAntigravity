import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-graphite-black/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-royal-blue to-neon-purple cursor-pointer">
                            Suprema
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {['Benefícios', 'Funcionalidades', 'Planos', 'Depoimentos'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                                    className="text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-white/5"
                                >
                                    {item}
                                </a>
                            ))}
                            <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2 rounded-full transition-all duration-300 border border-white/20 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                Login
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-graphite-black/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {['Benefícios', 'Funcionalidades', 'Planos', 'Depoimentos'].map((item) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                                    className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-white/5"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </a>
                            ))}
                            <button className="w-full text-left bg-white/10 hover:bg-white/20 text-white px-3 py-2 rounded-md transition-all duration-300 mt-4 border border-white/10">
                                Login
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
