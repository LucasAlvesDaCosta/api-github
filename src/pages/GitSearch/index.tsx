import './styles.css';
const GitSearch = () => {
  return (
    <div className="git-search-container container">
      <div className="search-container">
        <h1>Encontre um perfil Github</h1>
        <form>
          <div className="form-container">
            <input
              type="text"
              className="search-input"
              placeholder="Usuário Github"
              onChange={() => {}}
            />
            <button type="submit" className="btn btn-primary search-button">
              Encontrar
            </button>
          </div>
        </form>
      </div>
      <div className="search-container-result">
        <div className="search-container-img">
          <img src="https://criticalhits.com.br/wp-content/uploads/2019/11/madara-uchiha.jpg" alt="Nome da imagem" />
        </div>
        <div className="search-container-info">
          <h6>Informações</h6>
          <p><b>Perfil:</b><a href="https://github.com/LucasAlvesDaCosta">https://github.com/LucasAlvesDaCosta</a></p>
          <p><b>Seguidores:</b>6000{}</p>
          <p><b>Localidade:</b>vila da folha{}</p>
          <p><b>Nome:</b>Madara Uchira{}</p>
        </div>
      </div>
    </div>
  );
};

export default GitSearch;
