import React, { Component } from "react";
import Search from "../search/Search";
import CardList from "../cards/CardList";
import Watch from "./Watch";
import News from "./News";
import Footer from "../footer/Footer";
import { data } from "../cardData";
import "./Content.scss";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: data.slice(0, 20),
      searchfield: "",
      index: 1,
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };

  filterCards = () => {
    const filteredCards = this.state.data.filter((card) => {
      return card.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    this.setState({ displayedCards: filteredCards });
  };

  onLoadMoreClick = () => {
    const newIndex = this.state.index + 1;
    const newData = data.slice(
      this.state.data.length,
      this.state.data.length + 20
    );
    this.setState({
      data: [...this.state.data, ...newData],
      index: newIndex,
    });
  };

  render() {
    const filteredData = this.state.data.filter((data) => {
      return data.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="content__container">
        <Search searchChange={this.onSearchChange} />
        <Watch />
        <CardList data={filteredData} />
        <div className="content__container-load">
          {this.state.data.length < data.length && (
            <button
              className="content__container-load-item"
              onClick={this.onLoadMoreClick}
            >
              Load More
            </button>
          )}
        </div>
        <News />
        <Footer />
      </div>
    );
  }
}

export default Content;
