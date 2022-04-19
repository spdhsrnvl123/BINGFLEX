import "./movie_list.css";
import { Rate } from "antd";

function MovieList({ backgruondImage, title, year }) {
  console.log(year);
  return (
    <div className="movie_list">
      <img className="movie_list_img" src={backgruondImage} alt="real"></img>
      <h1 style={{ color: "white" }}>{title}</h1>
      <Rate value={`${2 + Math.random() * 3}`} />
    </div>
  );
}

export default MovieList;
