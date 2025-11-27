import { motion } from 'framer-motion';
import { TrendingUp, Shield, Zap, PieChart, Target } from 'lucide-react';

const benefits = [
    {
        icon: TrendingUp,
        title: "Controle Financeiro",
        description: "Automatize suas entradas e saídas com precisão cirúrgica."
    },
    {
        icon: PieChart,
        title: "Dashboards Inteligentes",
        description: "Visualize seus dados em tempo real com gráficos interativos."
    },
    {
        icon: Target,
        title: "Metas e KPIs",
        description: "Defina objetivos claros e acompanhe o progresso dia a dia."
    },
    {
        icon: Shield,
        title: "Segurança de Dados",
        description: "Seus dados protegidos com a mais alta tecnologia de criptografia."
    },
    {
        icon: Zap,
        title: "Automação Total",
        description: "Economize horas de trabalho manual com processos automáticos."
    }
];

const Benefits = () => {
    return (
        <section id="beneficios" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Por que escolher a <span className="text-gradient">Suprema</span>?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-gray-400 max-w-2xl mx-auto"
                    >
                        Ferramentas poderosas para levar sua empresa ao próximo nível.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass-card p-8 rounded-2xl group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-royal-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/10 group-hover:border-royal-blue/30">
                                    <benefit.icon className="text-royal-blue group-hover:text-neon-purple transition-colors duration-300" size={28} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-white transition-colors">{benefit.title}</h3>
                                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {benefit.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
