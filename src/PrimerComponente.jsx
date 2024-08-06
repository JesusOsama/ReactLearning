import PropTypes from 'prop-types'

export const PrimerComponente = ({titulo = "Respuesto", subtitulo}) => {
    return (
        <>
            <h1> {titulo} </h1>
            <h2> {subtitulo} </h2>            
        </>
    )
}

PrimerComponente.propTypes = {
    subtitulo: PropTypes.string.isRequired,
}

