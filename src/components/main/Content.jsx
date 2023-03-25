import React, { Component } from "react";
import Search from "../search/Search";
import CardList from "../cards/CardList";
import Watch from "./Watch";
import Review from "./Reviews";
import Footer from "../footer/Footer";
import { data } from "../cardData";
import "./Content.scss";

class Content extends Component {
  constructor() {
    super();
    this.state = {
      data: data,
      searchfield: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
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
        <Review />
        <Footer />
      </div>
    );
  }
}

export default Content;
