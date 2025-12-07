import { Mail, MessageCircle } from "lucide-react";

const Contact: React.FC = () => {
    return (
        <section className="py-20 px-4 bg-teal-600 text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Pide tu cita aquí</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white text-gray-900 p-8 rounded-lg">
                        <MessageCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Whatsapp</h3>
                        <p className="mb-6">Escríbeme un mensaje en whatsapp</p>
                        <a
                            href="https://wa.me/message/S2DJOUOQBHVKA1"
                            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            Escribir mensaje
                        </a>
                    </div>
                    <div className="bg-white text-gray-900 p-8 rounded-lg">
                        <Mail className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-4">Correo</h3>
                        <p className="mb-6">Envíame un correo a:<br />asmentepsicologia@gmail.com</p>
                        <a
                            href="mailto:asmentepsicologia@gmail.com"
                            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                        >
                            Escribir mensaje
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;