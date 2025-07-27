const Person = ({ person, deleteP }) => {
    return (
        <div>
            {person.name} {person.number}{' '}
            <button onClick={deleteP}>delete</button>
        </div>
    )
}

export default Person