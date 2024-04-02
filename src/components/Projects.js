import Carousel from 'react-bootstrap/Carousel'

const Projects = () => {

    const projects = [
        { id: 0, name: "Worm Game", projectDescription: "My first project. Aimed to learn more about CSS and JavaScript.", img: '/images/wormgame.png' },
        { id: 1, name: "Fribago", projectDescription: "Web app for disc golfers made with few of my classmates.", img: '/images/fribago.png' },
        { id: 2, name: "React Portfolio", projectDescription: "Github portfolio to assist with job searching.", img: '/images/omaPortfolio.png' }

    ]

    return (
        <>
            <h2 className="shadedText mb-4">Projects</h2>
            <Carousel slide style={{ height: "35em" }}>
                {projects.map(project => (
                    <Carousel.Item interval={4000} key={projects.id} className="col-md-12 mx-auto">
                        <img src={project.img} />
                        <Carousel.Caption className="my-auto">
                            <h4>{project.name}</h4>
                            <h5>{project.projectDescription}</h5>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </>
    )
}

export default Projects