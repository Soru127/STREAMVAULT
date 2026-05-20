function searchVideos() {

  let input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  let cards =
    document.querySelectorAll(".video-card");

  cards.forEach(card => {

    let title =
      card.querySelector(".video-title")
      .innerText
      .toLowerCase();

    if(title.includes(input)){
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }

  });

}

console.log("STREAMVAULT Loaded");
