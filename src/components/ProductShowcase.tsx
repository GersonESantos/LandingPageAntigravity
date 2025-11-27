import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductShowcase = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.5], [30, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section id="funcionalidades" className="py-20 relative overflow-hidden bg-gradient-to-b from-graphite-black to-[#0a0a0a]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Visual Profissional, <span className="text-gradient">Dados Claros</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Planejamento nunca foi tão fácil. Tenha uma visão 360º do seu negócio.
                    </p>
                </div>

                <div ref={ref} className="relative perspective-1000 min-h-[600px] flex items-center justify-center">
                    <motion.div
                        style={{ rotateX, scale, opacity }}
                        className="glass-card p-4 rounded-2xl border-white/20 shadow-2xl bg-graphite-black/40 mx-auto max-w-5xl w-full z-20"
                    >
                        {/* Main Notebook Mockup */}
                        <div className="aspect-[16/10] bg-gray-900 rounded-lg overflow-hidden relative border border-white/10">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-royal-blue/20 mx-auto mb-4 flex items-center justify-center animate-pulse">
                                        <div className="w-10 h-10 rounded-full bg-royal-blue/50"></div>
                                    </div>
                                    <span className="text-gray-500 font-mono text-sm">DASHBOARD PRINCIPAL</span>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="absolute left-0 top-0 bottom-0 w-64 bg-white/5 border-r border-white/5 hidden md:block">
                                <div className="p-4 space-y-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <div key={i} className="h-4 bg-white/10 rounded w-full"></div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Mobile Mockup */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="absolute bottom-0 right-0 md:right-10 w-1/3 md:w-1/5 glass-card p-2 rounded-3xl border-white/20 shadow-2xl bg-black z-30 transform translate-y-10"
                    >
                        <div className="aspect-[9/19] bg-gray-800 rounded-2xl overflow-hidden relative border border-white/10">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-gray-600 text-xs">MOBILE</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Floating Tablet Mockup */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="absolute bottom-10 left-0 md:left-10 w-1/2 md:w-1/3 glass-card p-2 rounded-2xl border-white/20 shadow-2xl bg-black z-10 transform translate-y-20"
                    >
                        <div className="aspect-[4/3] bg-gray-800 rounded-xl overflow-hidden relative border border-white/10">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="text-gray-600 text-xs">TABLET</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProductShowcase;
