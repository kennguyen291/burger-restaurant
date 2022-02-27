import React from "react";
import App from "./App";
import ClassicMoviesPage from "./page/ClassicMoviesPage";
import ErrorPage from "./page/ErrorPage";
import Movie from "./components/movie/movie";
import MovieListSkeleton from "./components/movieListSkeleton/movieListSkeleton";
import { mount, shallow } from "enzyme";
import MovieList from "./components/movieList/movieList";

const movieListFakeData = [
  {
    ID: "12345",
    Title: "test title",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    Actors: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
    Price: 200,
    filmworldPrice: 100,
    cinemaworldIsCheaper: true,
  },
  {
    ID: "12346",
    Title: "test title",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
    Actors: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
    Price: 200,
    filmworldPrice: 100,
    cinemaworldIsCheaper: true,
  },
];

describe("rendering components", () => {
  it("renders ClassicMoviesPage without crashing", () => {
    shallow(<ClassicMoviesPage />);
  });

  it("renders ClassMoviesPage header without crashing", () => {
    const wrapper = shallow(<ClassicMoviesPage />);
    const header = <h2>Classic Movies At Home</h2>;
    expect(wrapper.contains(header)).toEqual(true);
  });

  it("renders MovieSkeleton components without crashing", () => {
    shallow(<MovieListSkeleton />);
  });
});

// describe("passing props", () => {
//   const movieListWrapper = mount(<MovieList movieList={movieListFakeData} />);
//   const movieWrapper = mount(
//     <Movie
//       item
//       key={movieListFakeData[0].ID}
//       movie={movieListFakeData[0]}
//       cinemaworldIsCheaper={movieListFakeData[0].cinemaworldIsCheaper}
//     />
//   );

//   it("accept movie list props", () => {
//     expect(movieListWrapper.props().movieList).toEqual(movieListFakeData);
//   });

//   it("contains Movie Title", () => {
//     const value = movieWrapper.find(".Title");
//     const expectedValue = movieListFakeData[0].Title;
//     expect(value).toEqual(expectedValue);
//   });
// });
