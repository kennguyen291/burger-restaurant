// import React from "react";
// import ReactDOM from "react-dom";
// import MovieList from "../movieList/movieList";

// import Movie from "../movie/movie";
// import { mount, shallow } from "enzyme";

// const movieListFakeData = [
//   {
//     ID: "12345",
//     Title: "test title",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
//     Actors: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
//     Price: 200,
//     filmworldPrice: 100,
//     cinemaworldIsCheaper: true,
//   },
//   {
//     ID: "12346",
//     Title: "test title",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_SX300.jpg",
//     Actors: "Harrison Ford, Mark Hamill, Carrie Fisher, Adam Driver",
//     Price: 200,
//     filmworldPrice: 100,
//     cinemaworldIsCheaper: true,
//   },
// ];

// // it("render without crashing", () => {
// //   const div = document.createElement("div");
// //   ReactDOM.render(<MovieList />, div);
// // });

// it("renders list correctly", () => {
//   const movieList = mount(<MovieList movieList={movieListFakeData} />);

//   const movie = shallow(
//     <Movie
//       item
//       key={movieListFakeData[0].ID}
//       movie={movieListFakeData[0]}
//       cinemaworldIsCheaper={movieListFakeData[0].cinemaworldIsCheaper}
//     />
//   );

//   expect(movieList.find(movie).first().matchesElement(movie)).to.equal(true);
// });
