import { Rate } from "antd";
import styled from "styled-components";

const MainList = styled.div`
  flex-basis: 20%;
  padding: 27px;
  height: 500px;
  text-align: center;
  margin: 0 auto;

  .movie_list_img {
    cursor: pointer;
    /* border-radius: 30px; */
    /* box-shadow: 2px 2px 3px 4px rgba(251, 10, 10, 0.631); */
    transition: 0.1s;
  }
  .movie_list_img:hover {
    transform: scale(1.05);
  }
  h1 {
    font-size: 1.2rem;
    margin-top: 20px;
    text-align: center;
  }
`;

function MovieList({ backgruondImage, title, year }) {
  return (
    <MainList>
      <img className="movie_list_img" src={backgruondImage} alt="real"></img>
      <h1 style={{ color: "white" }}>{title}</h1>
      <Rate value={`${2 + Math.random() * 3}`} />
    </MainList>
  );
}

export default MovieList;
