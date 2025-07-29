const CountryFlag = ({ src, alt }) => {

    const flagStyle = {
        maxWidth: 500,
        maxHeight: 375
    }

    return (
        <img src={src} alt={alt} style={flagStyle}></img>
    )
}

export default CountryFlag