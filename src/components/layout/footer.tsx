const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <div className="mb-6">
                    <a
                        href="https://wa.me/message/S2DJOUOQBHVKA1"
                        className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors mb-8"
                    >
                        Reserva tu cita
                    </a>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
                    <a href="#" className="hover:text-teal-400">Políticas de Privacidad</a>
                    <span>|</span>
                    <a href="#" className="hover:text-teal-400">Aviso Legal</a>
                    <span>|</span>
                    <a href="#" className="hover:text-teal-400">Política de Cookies</a>
                </div>
                <p className="text-gray-400 text-sm">
                    Copyright © 2024 Alberto Sainz Rico
                </p>
            </div>
        </footer>
    );
};

export default Footer;