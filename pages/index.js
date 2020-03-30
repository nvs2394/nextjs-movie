import React, { Component, useState } from "react";
import SideMenu from "../components/sideMenu";
import Carousel from "../components/carousel";
import MovieList from "../components/movieList";
import { getMovies, getCategories } from "../actions";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      images: [],
      categories: [],
      errorMessage: "",
      filter: "all"
    };
  }

  changeCategory = category => {
    this.setState({ filter: category });
  };

  filterMovies = movies => {
    const { filter } = this.state;
    if (filter === "all") {
      return movies;
    }

    return movies.filter(m => {
      return m.genre && m.genre.includes(filter);
    });
  };

  componentDidMount() {
    getMovies()
      .then(movies => {
        const images = movies.map(item => ({
          id: `image-${item.id}`,
          image: item.cover,
          name: item.name
        }));

        this.setState({
          movies,
          images
        });
      })
      .catch(err => {
        this.setState({ errorMessage: err });
      });

    getCategories()
      .then(categories => {
        this.setState({
          categories
        });
      })
      .catch(err => {
        this.setState({ errorMessage: err });
      });
  }

  render() {
    const { movies, errorMessage, images, categories, filter } = this.state;
    return (
      <div>
        <div className="home-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <SideMenu
                  changeCategory={this.changeCategory}
                  categories={categories}
                  activeCategory={filter}
                  appName={"Movie DB"}
                />
              </div>

              <div className="col-lg-9">
                <Carousel images={images} />
                <div className="row">
                  {errorMessage && (
                    <div className="col-lg-3 alert alert-danger" role="alert">
                      {errorMessage}
                    </div>
                  )}
                  <MovieList movies={this.filterMovies(movies) || []} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
