import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-black py-12 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-8 md:mb-0">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-royal-blue to-neon-purple">
                            Suprema
                        </span>
                        <p className="text-gray-500 mt-2 text-sm">
                            © 2025 Planilha Empresarial Suprema. <br />Todos os direitos reservados.
                        </p>
                    </div>

                    <div className="flex space-x-6 mb-8 md:mb-0">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Instagram size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin size={24} />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Twitter size={24} />
                        </a>
                    </div>

                    <div className="flex space-x-8 text-sm text-gray-400">
                        <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
                        <a href="#" className="hover:text-white transition-colors">Privacidade</a>
                        <a href="#" className="hover:text-white transition-colors">Contato</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
