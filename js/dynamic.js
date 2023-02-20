// Add serial numbers in output area elements

addSerialNumbersToAreaElements();



// blog btn add evenlistener

document.getElementById("blog-btn").addEventListener("click", function () {
  window.location.href = "/blog.html";
});



// Cards mouseover, apply the random bg-color

const cards = document.getElementsByClassName("card");
for (let card of cards) {
  card.addEventListener("mouseover", function () {
    card.style.backgroundColor = getRandomColor();
  });

  // Cards mouseout, apply the random bg-color
  card.addEventListener("mouseout", function () {
    card.style.backgroundColor = "";
  });
}