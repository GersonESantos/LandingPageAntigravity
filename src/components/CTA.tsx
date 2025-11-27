import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-royal-blue/10 backdrop-blur-3xl" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-transparent to-graphite-black/90 z-0" />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold mb-8"
                >
                    Transforme sua gestão empresarial <br />
                    <span className="text-gradient">hoje mesmo.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <button className="btn-glow text-xl px-12 py-4 flex items-center gap-3 mx-auto group">
                        Quero Acessar Agora
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <p className="mt-6 text-gray-400 text-sm">
                        Acesso imediato • Garantia de 7 dias • Suporte incluso
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
