function handleC (event) {
    console.log(event)
}

const Button = () =>{
    return(
        <button onClick={handleC}>
                Soy un Botón
        </button>
    )
}
export const ContadorApp = () => {
    return (
        <>
            <h1>Contador</h1>
            <Button></Button>
        </>
    )
}
