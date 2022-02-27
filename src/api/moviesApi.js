import axiosClient from "./axiosClient";

const moviesApi = {
  async getAll() {
    const cinemaworld = await axiosClient.get("/cinemaworld/movies", {
      headers: { "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7" },
    });
    const filmworld = await axiosClient.get("/filmworld/movies", {
      headers: { "x-api-key": "Yr2636E6BTD3UCdleMkf7UEdqKnd9n361TQL9An7" },
    });

    for (let i = 0; i < cinemaworld.data.Movies.length; i++) {
      cinemaworld.data.Movies[i].filmworldPrice =
        filmworld.data.Movies[i].Price;

      cinemaworld.data.Movies[i].cinemaworldIsCheaper =
        cinemaworld.data.Movies[i].Price <
        cinemaworld.data.Movies[i].filmworldPrice
          ? true
          : cinemaworld.data.Movies[i].Price >
            cinemaworld.data.Movies[i].filmworldPrice
          ? false
          : null;
    }

    return {
      data: cinemaworld.data.Movies,
    };
  },
};

export default moviesApi;
