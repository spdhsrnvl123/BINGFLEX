import { useState, useEffect } from "react";
import MovieList from "./MovieList";
import { PlaySquareOutlined } from "@ant-design/icons";
import styled from "styled-components";

const ListContainer = styled.div`
  background-image: linear-gradient(
    to right bottom,
    #051937,
    #171228,
    #190a1a,
    #12040d,
    #000000
  );
  .movie_list_title {
    text-align: center;
    font-size: 2.4rem;
    color: white;
    width: 100%;
    height: 70px;
    padding-top: 20px;
  }
  .movie_list_category {
    color: white;
    display: flex;
    justify-content: center;
  }

  .movie_list_category .movie_list_category_item {
    padding-bottom: 10px;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 20px;
    font-weight: bold;
    height: 70px;
    /* background-color: red; */
  }
  .movie_list_category .movie_list_category_item:hover {
    font-size: 1.4rem;
  }
  .section-2 {
    display: flex;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    border-top: 3px solid gray;
  }
`;

function Home() {
  const [loading_2, setLoading_2] = useState(true);
  const [lists, setList] = useState([]);
  const [set, setSet] = useState(true);
  const [year, yearSet] = useState(true);
  const update_2 = async function () {
    //비동기함수
    const movieData = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
    ).json();
    setList(movieData.data.movies);
    setLoading_2(false);
    // console.log(lists[1].year);
  };

  useEffect(() => {
    update_2();
  }, []);

  const all_Click = () => {
    setSet(true);
  };

  const year_2021_Click = () => {
    setSet(false);
    yearSet(2021);
  };
  const year_2020_Click = () => {
    setSet(false);
    yearSet(2020);
  };
  const year_2019_Click = () => {
    setSet(false);
    yearSet(2019);
  };
  const year_2018_Click = () => {
    setSet(false);
    yearSet(2018);
  };

  return (
    <ListContainer>
      {loading_2 ? (
        <img src="/assets/loading2.gif" alt="loading" />
      ) : (
        <div>
          <div>
            <h1 className="movie_list_title">
              <PlaySquareOutlined style={{ marginRight: "7px" }} />
              Movie list
            </h1>
            <div className="movie_list_category">
              <div onClick={all_Click} className="movie_list_category_item">
                ALL
              </div>
              <div
                onClick={year_2021_Click}
                className="movie_list_category_item"
              >
                2021
              </div>
              <div
                onClick={year_2020_Click}
                className="movie_list_category_item"
              >
                2020
              </div>
              <div
                onClick={year_2019_Click}
                className="movie_list_category_item"
              >
                2019
              </div>
              <div
                onClick={year_2018_Click}
                className="movie_list_category_item"
              >
                2018
              </div>
            </div>
          </div>
          <div className="section-2">
            {lists.map((list) =>
              set === true ? (
                <MovieList
                  key={list.id}
                  backgruondImage={list.medium_cover_image}
                  title={list.title}
                  year={list.year}
                />
              ) : list.year === year ? (
                <MovieList
                  key={list.id}
                  backgruondImage={list.medium_cover_image}
                  title={list.title}
                  year={list.year}
                />
              ) : null
            )}
          </div>
        </div>
      )}
    </ListContainer>
  );
}
export default Home;
