import styled from "styled-components";

const MainList = styled.div`
  padding: 30px;
  height: 280px;
`;

function MovieList({ backgruondImage, title}) {
  return (
    <MainList>
      <img className="movie_list_img" src={backgruondImage} alt="real"></img>
      <h1 style={{ color: "white" }}>{title}</h1>
    </MainList>
  );
}

export default MovieList;
