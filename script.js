document.addEventListener("DOMContentLoaded", function () {
  const firstBtn = document.querySelector(".first-part-btn");
  const cardBtn = document.querySelectorAll(".card-choose");
  const rndNumber = Math.floor(Math.random() * 8) + 1;
  const firstMain = document.querySelector(".first-main-page");
  const secondMainPage = document.querySelector(".second-main-page");
  const loading = document.querySelector(".loading");
  const therdMainPage = document.querySelector(".therd-main-page");
  const refreshTag = document.querySelectorAll(".nav-link");
  const explanationTiitle = document.querySelector(".explanation-h2");
  const explanationParagraph = document.querySelector(".description-taro")

  //   HTML
  let name = document.querySelector(".name-taro");
  let description = document.querySelector(".description-taro");
  let explanation = document.querySelector(".explanation-taro");
  let cardDivImage = document.querySelector(".image-taro");


  const loadingGIF = document.createElement("img");
  loadingGIF.src = "mygif.gif";
  loadingGIF.alt = "Loading...";
  loadingGIF.style.width = "100px";
  function createAnimatedCircles(numberOfCircles) {
    const backgroundContainer = document.createElement("div");
    backgroundContainer.classList.add("animated-background");
    document.body.insertBefore(backgroundContainer, document.body.firstChild);

    for (let i = 0; i < numberOfCircles; i++) {
      const circle = document.createElement("div");
      circle.classList.add("animated-circle");
      const size = Math.random() * 100 + 50; // circles size between 50px and 150px
      circle.style.width = `${size}px`;
      circle.style.height = `${size}px`;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      circle.style.left = `${posX}vw`;
      circle.style.top = `${posY}vh`;
      backgroundContainer.appendChild(circle);
      circle.style.animationDuration = `${Math.random() * 5 + 5}s`; // 5 to 10 seconds
      circle.style.animationDelay = `${Math.random() * 2}s`; // up to 2 seconds delay
    }
  }

  createAnimatedCircles(10);

  fetch("./data/taro.json")
    .then((response) => response.json())
    .then((data) => showInfo(data[rndNumber - 1]));

  const showInfo = (data) => {
    name.innerHTML = "";
    const textNodeName = document.createTextNode(data.name);
    name.appendChild(textNodeName);
    name.style.color = data.color;

    explanationTiitle.style.color = data.color;
    explanationParagraph.style.color = data.color;

    description.innerHTML = "";
    const textNodeDescription = document.createTextNode(data.description);
    description.appendChild(textNodeDescription);

    explanation.innerHTML = "";
    const textNodeExplanation = document.createTextNode(data.explanation);
    explanation.appendChild(textNodeExplanation);

    const img = document.createElement("img");
    img.src = data.image;

    cardDivImage.appendChild(img);
  };

  if (cardBtn) {
    cardBtn.forEach((card) => {
      card.addEventListener("click", function (event) {
        event.preventDefault();

        secondMainPage.style.display = "none";
        loading.style.display = "block";
        loading.appendChild(loadingGIF);

        setTimeout(() => {
          loading.style.display = "none";

          therdMainPage.style.display = "block";
        }, 1000);
        console.log("Card clicked!");
      });
    });
  }

  if (refreshTag) {
    refreshTag.forEach((card) => {
      card.addEventListener("click", (event) => {
        event.preventDefault();
        location.reload();
      });
    });
  }

  if (firstBtn) {
    firstBtn.addEventListener("click", function (event) {
      event.preventDefault();

      firstMain.style.display = "none";
      loading.style.display = "block";
      loading.appendChild(loadingGIF);

      setTimeout(() => {
        loading.style.display = "none";

        secondMainPage.style.display = "block";
      }, 1000);
    });
  }
});

document.querySelector(".btn").addEventListener("mousemove", function (event) {
  const button = event.target;
  const buttonRect = button.getBoundingClientRect();
  const x = event.clientX - buttonRect.left;
  const width = buttonRect.width;
  const fillX = Math.min(100, Math.max(0, (x / width) * 100)); // Limit x to be between 0 and 100
  button.style.backgroundPosition = `${fillX}%`; // Adjust background position based on cursor position
});

document.querySelector(".btn").addEventListener("mouseleave", function (event) {
  const button = event.target;
  button.style.backgroundPosition = "100%"; // Reset background position when mouse leaves button
});

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("selectionchange", function () {
    var selection = window.getSelection().toString();
    var colorfulElements = document.querySelectorAll(".colorful");

    colorfulElements.forEach(function (element) {
      if (selection && element.contains(window.getSelection().anchorNode)) {
        element.classList.add("selected");
      } else {
        element.classList.remove("selected");
      }
    });
  });
});
