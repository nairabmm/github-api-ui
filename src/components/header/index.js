import React, { useState } from "react";
import * as S from "./styled";
import useGithub from "../../hooks/github-hooks";

const Header = () => {
  const { getUser } = useGithub();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = (e) => {
    e.preventDefault();
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <form>
          <input
            type="text"
            placeholder="Digite o username para pesquisa..."
            onChange={(event) => setUsernameForSearch(event.target.value)}
          />
          <button type="submit" onClick={submitGetUser}>
            <span>Buscar</span>
          </button>
        </form>
      </S.Wrapper>
    </header>
  );
};

export default Header;
