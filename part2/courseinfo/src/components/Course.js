const Course = ({ course }) => {
    return (
        <div>
            <Header course={course.name} />
            <Content parts={course.parts} />
            <Total parts={course.parts} />
        </div>
    )
}

const Header = (props) => <h1>{props.course}</h1>

const Content = (props) => {
    return (
        <div>
            {props.parts.map(part => {
                return <Part part={part} key={part.id} />
            }
            )}
        </div>
    )
}

const Part = (props) => (
    <p>
        {props.part.name} {props.part.exercises}
    </p>
)

const Total = ({ parts }) => {
    // console.log(parts)

    let total = parts.reduce((sum, parts) => {
        return sum + parts.exercises
    }, 0)

    // console.log(total)
    return (
        <h3>
            total of {total} exercises
        </h3>
    )
}

export default Course