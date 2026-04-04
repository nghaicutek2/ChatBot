export default function Process() {
    return (
        <section className="min-h-screen flex items-center py-24 px-8 bg-black text-white">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT - IMAGE */}
                <div className="relative overflow-hidden rounded-2xl h-[500px]">
                    <img
                        src="/process-image.jpg" // đảm bảo ảnh nằm trong thư mục public
                        alt="process"
                        className="w-full h-full object-cover transition duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* RIGHT - CONTENT */}
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 font-headline">
                        Simplicity <br />
                        <span className="text-gray-400">by Design</span>
                    </h2>

                    <div className="space-y-10">
                        <div className="flex gap-4 group">
                            <span className="text-gray-500 text-lg font-mono">01</span>
                            <div>
                                <h4 className="font-semibold text-lg group-hover:text-blue-400 transition">
                                    Initialize Canvas
                                </h4>
                                <p className="text-gray-400">
                                    Start with a blank workspace.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 group">
                            <span className="text-gray-500 text-lg font-mono">02</span>
                            <div>
                                <h4 className="font-semibold text-lg group-hover:text-blue-400 transition">
                                    Collaborative Prompting
                                </h4>
                                <p className="text-gray-400">
                                    Work with AI to refine ideas.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-4 group">
                            <span className="text-gray-500 text-lg font-mono">03</span>
                            <div>
                                <h4 className="font-semibold text-lg group-hover:text-blue-400 transition">
                                    Export & Integrate
                                </h4>
                                <p className="text-gray-400">
                                    Download or integrate via API.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}