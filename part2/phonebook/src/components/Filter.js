const Filter = ({ filter, handleFilterChange }) => {
    return (
        <div>
            filter:<input value={filter} onChange={handleFilterChange}></input>
        </div>
    )
}

export default Filter