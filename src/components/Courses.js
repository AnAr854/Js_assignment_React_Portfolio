import Table from 'react-bootstrap/Table'

const Courses = () => {
    let earliestCourseYear, latestCourseYear
    let coursesInOrder = []

    const courses = [
        { id: 0, name: 'Basics of Javascript', institution: 'Metropolia University of Applied Sciences', year: 2022, ects: 5 },
        { id: 1, name: 'Basics of programming', institution: 'South-Eastern Finland University of Applied Sciences', year: 2021, ects: 5 },
        { id: 2, name: 'Creating mobile apps', institution: 'Aalto University', year: 2021, ects: 2 },
        { id: 3, name: 'Data and information (Dart)', institution: 'Metropolia University of Applied Sciences', year: 2022, ects: 5 },
        { id: 4, name: 'GIT Open', institution: 'Aalto University', year: 2020, ects: 3 },
        { id: 5, name: 'Introduction to Information Technology', institution: 'Tampere University', year: 2022, ects: 5 },
        { id: 6, name: 'Introduction to programming (Dart)', institution: 'Karelia University of Applied Sciences', year: 2022, ects: 5 },
        { id: 7, name: 'Introduction to programming', institution: 'Lappeenranta–Lahti University of Technology', year: 2020, ects: 1 },
        { id: 8, name: 'Programming project studies', institution: 'South-Eastern Finland University of Applied Sciences', year: 2021, ects: 2 },
        { id: 9, name: 'Programming with C', institution: 'Lappeenranta–Lahti University of Technology', year: 2021, ects: 2 },
        { id: 10, name: 'Web and browser development (Dart)', institution: 'Metropolia University of Applied Sciences', year: 2022, ects: 5 },
        { id: 11, name: 'Basics of Javascript', institution: 'Aalto University', year: 2020, ects: 2 }
    ]
    earliestCourseYear = courses.reduce((prev, curr) => prev.year < curr.year ? prev : curr).year
    latestCourseYear = courses.reduce((prev, curr) => prev.year > curr.year ? prev : curr).year


    for (let i = earliestCourseYear; i <= latestCourseYear; i++) {
        let thisYearCourses = courses.filter(course => course.year === i)
        coursesInOrder.push(thisYearCourses)
    }

    return (
        <section className="row d-flex py-5 w-100 m-0">

            <h2 className="shadedText mb-4">Programming courses attended before current studies</h2>
            <Table striped bordered className="shadedBorder">
                <thead>
                    <tr className="tableHeadingRow">
                        <th>Course name (institution)</th>
                        <th>Year</th>
                        <th>ECTS</th>
                    </tr>
                </thead>
                <tbody>
                    {coursesInOrder.map(courses => (
                        courses.map(course => (
                            <tr key={course.id}>
                                <td>{course.name} - ({course.institution})</td>
                                <td>{course.year}</td>
                                <td>{course.ects}</td>
                            </tr>
                        ))
                    ))
                    }
                </tbody>
            </Table>
        </section>
    )
}

export default Courses