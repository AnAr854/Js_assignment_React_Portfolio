import Card from 'react-bootstrap/Card'

const EducationalBackground = () => {
    const educations = [
        {
            id: 1,
            institution: "Ivalo Upper Secondary School",
            degree: "Matriculation Examination",
            year: "August 2000 - May 2003",
            description: "",
            imgSrc: "/images/exam.jpg"
        },
        {
            id: 2,
            institution: "Kainuu Vocational College",
            degree: "Vocational Qualification in Vehicle Technology",
            year: "August 2003 - February 2006",
            description: "",
            imgSrc: "/images/carrepair.jpg"
        }, {
            id: 3,
            institution: "Häme University of Applied Sciences",
            degree: "Business Information Technology",
            year: "August 2022 - ",
            description: "",
            imgSrc: "/images/developer.jpg"
        }
    ]

    return (
        <section className="row d-flex py-5 w-100 m-0">
            <h2 className="shadedText mb-4">My educations</h2>
            {
                educations.map(education => (
                    <Card key={education.id} className="col-md-3 p-0 mx-auto shadedBorder">
                        <Card.Img variant="top" src={education.imgSrc} style={{ height: "15em", width: '100%' }} />
                        <Card.Body className="d-flex flex-column justify-content-between">
                            <Card.Title>{education.degree}</Card.Title>
                            <Card.Text>
                                {education.institution}
                            </Card.Text>
                            <Card.Text>
                                {education.year}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))}
        </section>
    )
}

export default EducationalBackground;



