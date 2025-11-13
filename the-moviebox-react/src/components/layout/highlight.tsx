export function Highlight() {
    return (
        <section
            className="relative flex bg-cover bg-top-left"
            style={{ backgroundImage: "url('/img/etT14XfDEqhQZdD47ywpyihXPyW.jpg')" }}
        >
            <div
                className="absolute left-0 top-0 z-10 h-full w-full"
                style={{
                    backgroundImage:
                        'linear-gradient(to right, rgba(17,17,17,1) calc((50vw - 170px) - 340px), rgba(17,17,17,0.7) 50%, rgba(17,17,17,0.7) 100%)',
                }}
            ></div>
            <div className="z-20 mx-auto flex max-w-6xl gap-8 px-8 py-8">
                <img
                    className="h-fit w-auto rounded-lg"
                    src="/img/q5pXRYTycaeW6dEgsCrd4mYPmxM.jpg"
                    alt="Capa filme"
                />
                <div className="flex flex-col text-white">
                    <h2 className="text-4xl font-normal">Como Treinar o seu Dragão</h2>
                    <div className="my-2.5 text-sm">
                        <span className="mr-2 rounded-full bg-white/20 px-3 py-1.5">
                            Fantasia
                        </span>
                        <span className="mr-2 rounded-full bg-white/20 px-3 py-1.5">
                            Família
                        </span>
                        <span className="mr-2 rounded-full bg-white/20 px-3 py-1.5">
                            Ação & Aventura
                        </span>
                        <span className="pl-4 text-[#ccc]">2h 5m</span>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="pb-2 pt-12 text-2xl font-normal">Sinopse</h4>
                        <p className="text-sm text-[#a0a0a0]">
                            Em um mundo onde dragões e humanos coexistem, um jovem viking
                            chamado Soluço se torna amigo de um dragão ferido chamado
                            Banguela. Juntos, eles desafiam as tradições de suas tribos e
                            descobrem que dragões não são os monstros que todos acreditavam
                            ser.
                        </p>
                    </div>

                    <div className="my-6 flex gap-4">
                        <button className="rounded border-none bg-[#e50914] px-6 py-3 font-bold text-white transition-colors duration-300 ease-in-out hover:bg-[#b8070f]">
                            Assistir
                        </button>
                        <button className="cursor-pointer rounded border border-solid border-white/30 bg-white/20 px-6 py-3 text-white transition-colors duration-300 ease-in-out hover:bg-white/30">
                            Detalhes
                        </button>
                        <button className="cursor-pointer rounded border border-solid border-white/30 bg-white/20 px-6 py-3 text-white transition-colors duration-300 ease-in-out hover:bg-white/30">
                            + Adicionar à Lista
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
