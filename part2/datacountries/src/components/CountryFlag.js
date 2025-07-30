const CountryFlag = ({ src, alt }) => {

    const flagStyle = {
        maxWidth: 300,
        maxHeight: 200
    }

    return (
        <img src={src} alt={alt} style={flagStyle}></img>
    )
}

export default CountryFlag