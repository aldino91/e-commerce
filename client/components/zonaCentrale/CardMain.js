export const CardMain = ({ titolo, classCard }) => {

    return (
        <>
        <div className={`w-80 ${classCard} flex  flex-col justify-center`}>
            <div>
                <p className="text-center text-white text-3xl">
                    {`${titolo}`}
                </p>
            </div>
        </div>
        </>
    )
}