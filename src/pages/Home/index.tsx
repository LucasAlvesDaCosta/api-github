import { Link } from 'react-router-dom';

import './styles.css';

const Home = () => {
    return (
        <div className="home-container">
            <Link to="/cepsearch">
                <h1>Desafio Github API</h1>
                <h6>Bootcamp Spring React - DevSuperior</h6>
                <button className="btn btn-primary btn-lg start-button">Começar</button>
            </Link>
        </div>
    );
}

export default Home;
