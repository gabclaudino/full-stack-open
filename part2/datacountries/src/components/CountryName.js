const CountryName = ({ name, changeFilter }) => {
    return (
        <div>
            {name}
            <button onClick={changeFilter}>Show</button>
        </div>
    )
}

export default CountryName