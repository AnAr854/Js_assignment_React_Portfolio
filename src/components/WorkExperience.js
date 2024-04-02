import Accordion from 'react-bootstrap/Accordion'
const WorkExperience = () => {

    const jobs = [
        {
            id: 0,
            employer: "Kerttuojan Lomamökit",
            description: "Summer time cleaning, renting cottages and maintaining the camping area.",
            year: "1998 - 2001"
        },
        {
            id: 1,
            employer: "Mannerheim League for Child Welfare",
            description: "Child care services provided when needed.",
            year: "1999 - 2002"
        },
        {
            id: 2,
            employer: "Ämmän Leipä",
            description: "Rush assistant in packaging duties.",
            year: "2002"
        },
        {
            id: 3,
            employer: "Hotelli Ivalo",
            description: "Three months hosting karaoke mainly for tourists.",
            year: "2003"
        },
        {
            id: 4,
            employer: "Autogrilli Rasti Juntunen",
            description: "Summers and weekends working as fast food cook.",
            year: "2004 - 2005"
        },
        {
            id: 5,
            employer: "Kemet Electronics Oy",
            description: "Production line worker and substitute team leader.",
            year: "2006 ->"
        }
    ]
    return (
        <section className="row d-flex py-5 w-100 m-0">
            <h2 className="shadedText mb-4">My Work Experience</h2>
            <Accordion defaultActiveKey="0" className="p-0 shadedBorder">
                {jobs.map(job => (
                    <Accordion.Item eventKey={job.id} key={job.id} >
                        <Accordion.Header>{job.employer}  ,  {job.year}</Accordion.Header>
                        <Accordion.Body>
                            {job.description}
                        </Accordion.Body>
                    </Accordion.Item>

                ))}
            </Accordion>
        </section>
    )
}

export default WorkExperience