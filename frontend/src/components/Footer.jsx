export default function Footer() {
    return (
        <footer className="py-12 px-8 flex flex-col md:flex-row justify-between items-center">
            <div>
                <h3 className="text-blue-400 font-bold">Architect AI</h3>
                <p className="text-sm text-gray-400">
                    © 2024 Architect AI
                </p>
            </div>

            <div className="flex gap-6 text-sm">
                <a>Privacy</a>
                <a>Terms</a>
                <a>API</a>
                <a>Support</a>
            </div>
        </footer>
    );
}