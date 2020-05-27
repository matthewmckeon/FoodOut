import React from "react";

import { Card } from "antd";

import "./RestaurantDisplay.css"

const RestaurantDisplay = (props) => {
  const {allRestaurants} = props;

  return (
    <div>
      <h1>List o' Resaurants</h1>
        {allRestaurants.map((restaurant, index) => {
          return (
            <RestaurantCard key={index} restaurant={restaurant}/>
          );
        })}
    </div>
  )
}

const RestaurantCard = (props) => {
  const {restaurant} = props;

  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={restaurant.name}
        size="small"
        extra={<a href="#">More</a>}
        style={{ width: 300 }} >
        <p>Location: <em>{restaurant.vicinity}</em></p>
        <p>Rating: {restaurant.rating}</p>
        <p>Price Level: {"$".repeat(restaurant.price_level)}</p>
      </Card>
    </div>
  )
}

export default RestaurantDisplay;