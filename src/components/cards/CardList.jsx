import React from "react";
import Card from "./Card";
import "./CardList.scss";

function CardList({ data }) {
  return (
    <>
      <div className="cardlist__container">
        {data.map((card, index) => {
          return (
            <Card
              key={data[index].id}
              name={data[index].name}
              year={data[index].year}
              image={data[index].imageUrl}
            />
          );
        })}
      </div>
    </>
  );
}

export default CardList;
