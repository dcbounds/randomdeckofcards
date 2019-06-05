/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector(".card").innerHTML = cardNumb();
  document.querySelector(".card").classList.add(cardSuit());
};

let cardNumb = function() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let cardNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[cardNumbers];
};

let cardSuit = function() {
  let suit = ["diamond", "spade", "heart", "club"];
  let cardSuit = Math.floor(Math.random() * suit.length);
  return suit[cardSuit];
};
