// viet cac selections
import { createSelector } from "@reduxjs/toolkit";

export const getStatus = (state) => state.manage.status;
export const getAllFoods = (state) => state.manage.foods;
export const getCategory = (state) => state.filter.category;
export const getHotPizza = (state) => state.filter.hotPizza;
export const getNameFood = (state) => state.filter.name;
export const getTypeCostFood = (state) => state.filter.typeCost;
export const getCart = (state) => state.user.cart;
export const getQuantity = (state) => state.user.quantity;
export const getListUser = (state) => state.user.listUser;
export const getCurrUser = (state) => state.user.userName;
export const getFoodsBySelect = createSelector(
  getAllFoods,
  getCategory,
  (foods, category) => {
    if (category === "All") {
      return foods;
    } else {
      return foods.filter((food) => food.category === category);
    }
  }
);

export const getFoodsByCost = createSelector(
  getAllFoods,
  getHotPizza,
  (foods, cost) => {
    return foods.filter((food) => food.price >= cost).slice(0, 4);
  }
);

export const getFoodsByMulSelection = createSelector(
  getAllFoods,
  getNameFood,
  getCategory,
  getTypeCostFood,
  (foods, name, category, typeCost) => {
    if (category == "All") {
      if (typeCost == "Default") {
        return foods.filter((food) =>
          food.title.toLowerCase().includes(name.toLowerCase())
        );
      } else {
        if (typeCost == "Low") {
          return foods
            .filter((food) =>
              food.title.toLowerCase().includes(name.toLowerCase())
            )
            .sort((a, b) => (a.price > b.price ? 1 : -1));
        } else {
          return foods
            .filter((food) =>
              food.title.toLowerCase().includes(name.toLowerCase())
            )
            .sort((a, b) => (a.price < b.price ? 1 : -1));
        }
      }
    } else {
      if (typeCost == "Default") {
        return foods
          .filter((food) =>
            food.title.toLowerCase().includes(name.toLowerCase())
          )
          .filter((each) => each.category == category);
      } else {
        if (typeCost == "Low") {
          return foods
            .filter((food) =>
              food.title.toLowerCase().includes(name.toLowerCase())
            )
            .filter((each) => each.category == category)
            .sort((a, b) => (a.price > b.price ? 1 : -1));
        } else
          return foods
            .filter((food) =>
              food.title.toLowerCase().includes(name.toLowerCase())
            )
            .filter((each) => each.category == category)
            .sort((a, b) => (a.price < b.price ? 1 : -1));
      }
    }
  }
);
