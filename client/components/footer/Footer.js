


export const Footer = ({ bg="black" , className }) => {
    return (
        <div className={`${className} bg-${bg} w-full h-96`}>
            <div className="px-9 py-9 space-y-8">
                <p className="text-white text-xl font-bold">Contacto</p>
                <p className="text-white text-xl font-bold">Facebook</p>
                <p className="text-white text-xl font-bold">Instagram</p>
                <p className="text-white text-xl font-bold">Email</p>
            </div>
        </div>
    )
}

