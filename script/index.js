/* Header animation style*/
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const navWrapper = document.querySelector(".navBar-main");
  const navMain = document.querySelector(".navBar-main");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navWrapper.classList.remove("top");
    navWrapper.classList.add("scroll");
    navMain.classList.remove("top");
    navMain.classList.add("scroll");
  } else {
    // console.log("no");
    navWrapper.classList.remove("scroll");
    navWrapper.classList.add("top");
    navMain.classList.remove("scroll");
    navMain.classList.add("top");
  }
}

/* Fetching and displaying FACT balance */
axios
  .get(
    "https://horizon.stellar.org/accounts/GATNPMPW57YMMN6RK4DMQS3RUNEBO3J62EOCNW763THSSN526A2HVSBK"
  )
  .then((data) => {
    const factToken = data.data.balances.filter(
      (token) => token.asset_code === "FACT"
    )[0];
    // console.log(parseInt(factToken.balance));
    document.querySelector(".fact-balance").innerHTML = parseFloat(
      factToken.balance
    ).toFixed(2);

    document.querySelector(".wh-generated").innerHTML = parseFloat(
      factToken.balance * 135
    ).toFixed(2);

    document.querySelector(".rewards-per-day").innerHTML = parseFloat(
      factToken.balance * 135 * 10
    ).toFixed(2);
  });

/* Materialized Carousel */
document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
  $(".carousel").carousel();
});
