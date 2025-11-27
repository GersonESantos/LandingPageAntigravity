import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-royal-blue/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-[100px] animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-royal-blue/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.span
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6 backdrop-blur-sm"
                    >
                        🚀 Gestão Financeira de Outro Nível
                    </motion.span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
                        A Gestão da Sua Empresa <br />
                        <span className="text-gradient">Começa Aqui</span>
                    </h1>
                    <p className="mt-4 text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
                        A planilha empresarial mais completa, simples e inteligente que você já viu.
                        Controle total, visão estratégica e resultados reais.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-glow flex items-center gap-2 group"
                        >
                            Quero Transformar Minha Gestão
                            <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
                        >
                            Ver Demonstração
                            <ChevronRight size={20} />
                        </motion.button>
                    </div>
                </motion.div>

                {/* Floating UI Elements / Mockup Placeholder */}
                <motion.div
                    initial={{ opacity: 0, y: 50, rotateX: 10 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                    className="mt-20 relative perspective-1000"
                >
                    <div className="glass-card p-2 rounded-2xl max-w-5xl mx-auto border-white/20 shadow-2xl bg-graphite-black/40">
                        {/* Placeholder for dashboard image/mockup */}
                        <div className="aspect-[16/9] bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden relative border border-white/5 group">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500 group-hover:text-white/50 transition-colors">
                                <span className="text-lg font-light tracking-widest">[DASHBOARD INTERATIVO]</span>
                            </div>
                            {/* Add some fake UI elements for visual interest */}
                            <div className="absolute top-0 left-0 right-0 h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                <div className="ml-4 w-64 h-4 bg-white/5 rounded-full"></div>
                            </div>
                            {/* Grid lines */}
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                        </div>
                    </div>

                    {/* Decorative floating elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-10 -right-10 w-20 h-20 bg-neon-purple/20 rounded-full blur-xl"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-10 -left-10 w-32 h-32 bg-royal-blue/20 rounded-full blur-xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
