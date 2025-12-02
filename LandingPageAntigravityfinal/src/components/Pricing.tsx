import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
    {
        name: "Essencial",
        price: "R$ 97",
        description: "Para pequenos negócios que querem começar certo.",
        features: [
            "Controle de Fluxo de Caixa",
            "Dashboard Básico",
            "Até 3 usuários",
            "Suporte por E-mail"
        ],
        highlight: false
    },
    {
        name: "Profissional",
        price: "R$ 197",
        description: "A escolha ideal para empresas em crescimento.",
        features: [
            "Tudo do Essencial",
            "Dashboard Avançado",
            "Relatórios Personalizados",
            "Até 10 usuários",
            "Suporte Prioritário"
        ],
        highlight: true
    },
    {
        name: "Empresa Plus",
        price: "R$ 497",
        description: "Gestão completa para grandes operações.",
        features: [
            "Tudo do Profissional",
            "API de Integração",
            "Consultoria Mensal",
            "Usuários Ilimitados",
            "Gerente de Conta Dedicado"
        ],
        highlight: false
    }
];

const Pricing = () => {
    return (
        <section id="planos" className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold mb-4"
                    >
                        Escolha o Plano <span className="text-gradient">Ideal</span>
                    </motion.h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Investimento inteligente para o futuro da sua empresa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className={`relative p-8 rounded-2xl border transition-all duration-300 ${plan.highlight
                                ? 'bg-white/10 border-royal-blue/50 shadow-[0_0_30px_rgba(37,99,235,0.2)] md:scale-110 z-10'
                                : 'bg-white/5 border-white/10 hover:border-white/20'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-royal-blue to-neon-purple text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Mais Popular
                                </div>
                            )}

                            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                            <div className="text-4xl font-bold mb-4 text-white">
                                {plan.price}
                                <span className="text-lg text-gray-400 font-normal">/mês</span>
                            </div>
                            <p className="text-gray-400 mb-8 text-sm">{plan.description}</p>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center text-gray-300">
                                        <Check size={18} className="text-royal-blue mr-2" />
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${plan.highlight
                                ? 'bg-gradient-to-r from-royal-blue to-neon-purple text-white hover:shadow-lg hover:scale-105'
                                : 'bg-white/10 text-white hover:bg-white/20'
                                }`}>
                                Começar Agora
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
