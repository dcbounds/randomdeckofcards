/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.getElementById("the-excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = function() {
  let who = ["The neighbors dog", "R2-D2", "My Autobot", "My pet llama"];

  let what = [
    "went number 2",
    "entered The Matrix",
    "sat on my pinky toe",
    "leaked poisonous acid"
  ];
  let where = [
    "at church...",
    "in the shower...",
    "at the playgrond...",
    "at the library..."
  ];

  let whoIndex = Math.floor(Math.random() * who.length);
  let whatIndex = Math.floor(Math.random() * what.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return who[whoIndex] + " " + what[whatIndex] + " " + where[whereIndex];
};
