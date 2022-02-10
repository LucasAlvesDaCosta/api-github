import axios from 'axios';
import { useState } from 'react';
import GitSearchInfoLoader from './GitSearchInfoLoader';
import './styles.css';
type FormData = {
  user: string;
};
type Address = {
  html_url: string;
  avatar_url: string;
  name: string;
  location: string;
  followers: string;
};

const GitSearch = () => {
  const [formData, setFormData] = useState<FormData>({
    user: '',
  });
  const [address, setAddress] = useState<Address>();
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setNotFound(false);
    axios
      .get(`https://api.github.com/users/${formData.user}`)
      .then((response) => {
        setAddress(response.data);
        console.log(response.data);
      })
      .finally(() => {
        setIsLoading(false);
      })
      .catch((error) => {
        setAddress(undefined);
        setNotFound(true);
        console.log(error);
      });
  };

  return (
    <div className="git-search-container container">
      <div className="search-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              name="user"
              value={formData.user}
              className="search-input"
              placeholder="Usuário Github"
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      {isLoading ? (
        <GitSearchInfoLoader />
      ) : (
        address && (
          <div className="search-container-result">
            <div className="search-container-img">
              <img src={address.avatar_url} alt={address.name} />
            </div>
            <div className="search-container-info">
              <h6>Informações</h6>
              <p>
                <b>Perfil:</b>
                <a href={address.html_url}>{address.html_url}</a>
              </p>
              <p>
                <b>Seguidores:</b>
                {address.followers}
              </p>
              <p>
                <b>Localidade:</b>
                {address.location}
              </p>
              <p>
                <b>Nome:</b>
                {address.name}
              </p>
            </div>
          </div>
        )
      )}
      {(!address && notFound) && (
        <div className="search-container-result">
          <h3>User not found.</h3>
        </div>
      )}
    </div>
  );
};

export default GitSearch;
