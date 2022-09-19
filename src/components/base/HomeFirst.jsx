import { useState, useEffect } from "react";
import { Rate, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Main = styled.div`
  .header_content {
    height: 75vh;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
      url(/assets/background.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center;
  }

  .header_content .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -120%);
    width: 80px;
    height: 80px;
  }

  .header_container {
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-74%, -60%);
    display: grid;
    grid-template-columns: repeat(2, minmax(30px, auto));
  }
  .header_container .main_image {
    height: 410px;
    width: 250px;
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
    box-shadow: 0px 30px 60px -12px rgba(50, 50, 93, 0.25),
      0 18px 36px -18px rgba(0, 0, 0, 0.3),
      0 -12px 36px -8px rgba(0, 0, 0, 0.025);
    position: relative;
    z-index: 100;
    cursor: pointer;
  }
  .header_container .content {
    display: grid;
    grid-template-rows: repeat(4, minmax(20px, auto));
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.4));
    padding: 20px;
  }
  .header_container .content .genres_list_container {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, auto));
  }
  .header_container .content .genres_list_container .genres_list:before {
    content: "⌘";
    margin-right: 0.5rem;
  }
  .header_content_footer {
    background-image: linear-gradient(
      to right bottom,
      #051937,
      #171228,
      #190a1a,
      #12040d,
      #000000
    );
    height: 25vh;
  }
`;

const HomeFirst = () => {
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

  const summary =
    "Jai Bhim (transl. Victory to Bhim) is a 2021 Indian Tamil-language legal drama film directed by T. J. Gnanavel and produced by Jyothika and Suriya under 2D Entertainment. The film stars Suriya and Lijomol Jose and Manikandan with Rajisha Vijayan, Prakash Raj, Rao Ramesh and others in supporting roles. The film deals with the subject of police bias and state violence against a marginalised community.";
  //   console.log(movie);
  return (
    <Main>
      <div className="header_content">
        {start ? (
          <img className="loading" src="/assets/loading2.gif" alt="loading" />
        ) : (
          <div className="header_container">
            <img
              className="main_image"
              src={movie[0].medium_cover_image}
              alt="movie_images"
            />
            <div className="content">
              <div style={{ fontSize: "1.8rem" }}>{movie[0].year}</div>
              <div style={{ fontSize: "2.3rem" }}>{movie[0].title}</div>
              <div style={{ fontSize: "1.2rem", lineHeight: "25px" }}>
                {summary.slice(0, 303)}
              </div>
              <ul className="genres_list_container">
                {movie[0].genres.map((value, index) => {
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
      </div>
      <div className="header_content_footer"></div>
    </Main>
  );
};

export default HomeFirst;
