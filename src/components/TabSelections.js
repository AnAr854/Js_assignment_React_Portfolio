import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import EducationalBackground from './EducationalBackground';
import WorkExperience from './WorkExperience';
import Courses from './Courses';
import PersonalInfo from './PersonalInfo';
import Projects from './Projects';

function TabSelections() {
    const [key, setKey] = useState('home');

    return (
        <nav>
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3"
            >
                <Tab eventKey="personalInfo" title="About me">
                    <PersonalInfo />
                </Tab>
                <Tab eventKey="courses" title="Courses">
                    <Courses />
                </Tab>
                <Tab eventKey="education" title="Education">
                    <EducationalBackground />
                </Tab>
                <Tab eventKey="workHistory" title="Work experience">
                    <WorkExperience />
                </Tab>
                <Tab eventKey="projects" title="Projects">
                    <Projects />
                </Tab>
            </Tabs>
        </nav>
    );
}

export default TabSelections;