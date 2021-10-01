"use strict";

const reddit = fetch("https://www.reddit.com/r/aww/.json");

async function getPosts() {
  const response = await fetch("https://www.reddit.com/r/aww/.json?limit=8"); // the same as .then()
  const data = await response.json(); // the same as second .then
  //   console.log(data);

  const results = data.data.children;

    console.log(results);

  for (let result of results) {
    // console.log(result);

    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");
    const link = document.createElement("a");

    h2.innerText = result.data.title;
    div.append(h2);

    link.innerText = "Link to post";
    link.setAttribute("href", result.data.url);
    div.append(link);

    if (result.data.thumbnail == "default") {
      img.setAttribute("src", "https://www.adweek.com/wp-content/uploads/files/reddit-alien-hed-2015.png");
      
    } else {
      img.setAttribute("src", result.data.thumbnail);
      
    }
    div.append(img);
    document.querySelector("main").append(div);
  }
}

getPosts();