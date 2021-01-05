import Header from '../components/Header';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Skills from '../sections/Skills';
import Contacts from '../sections/Contacts';
import Jobs from '../sections/Jobs';

const Homepage = () => {
    return (
        <div className="container">
            <Header />
            <About />
            <Jobs />
            <Projects />
            <Skills />
            <Contacts />
        </div>
    );
}

export default Homepage;