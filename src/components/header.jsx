import "./header.css";
import { useState, useEffect } from "react";
import { Rate, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const Header = () => {
  const [movie, setMovie] = useState([]);
  const [start, startSetting] = useState(true);

  const update = async () => {
    const item = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();
    setMovie(item.data.movies);
    startSetting(false);
  };
  useEffect(() => {
    update();
  }, []);

  //   console.log(movie);
  return (
    <div>
      <div className="header_content">
        {start ? (
          <img className="loading" src="/images/loading2.gif" alt="loading" />
        ) : (
          <div className="header_container">
            <img
              className="main_image"
              src={movie[1].medium_cover_image}
              alt="movie_images"
            />
            <div className="content">
              <div style={{ fontSize: "1.8rem" }}>{movie[0].year}</div>
              <div style={{ fontSize: "2.3rem" }}>{movie[0].title}</div>
              <div style={{ fontSize: "1.2rem", lineHeight: "25px" }}>
                {movie[1].summary.slice(0, 304)}
              </div>
              <ul className="genres_list_container">
                {movie[1].genres.map((value, index) => {
                  return (
                    <li className="genres_list" key={index}>
                      {value}
                    </li>
                  );
                })}
              </ul>
              <Rate
                style={{ paddingBottom: "10px" }}
                allowHalf
                defaultValue={3.5}
              />
              <Button size="large" type="primary" danger>
                <PlayCircleOutlined />
                Watch trailer
              </Button>
            </div>
          </div>
        )}
        {/*  */}
        {/*  */}
      </div>
      <div className="header_content_footer"></div>
    </div>
  );
};

export default Header;
