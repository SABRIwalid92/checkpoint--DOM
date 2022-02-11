let items;
let plus;
let minus;
let cross;
let itemcount;
let like;
let price = document.querySelectorAll("h2");

// input function: to refresh the values in "querySelectorAll" output 
// (the output is static and doesn't update dynamically, it's static )
function input() {
  items = document.querySelectorAll(".item");
  plus = document.querySelectorAll(".plus");
  minus = document.querySelectorAll(".minus");
  cross = document.querySelectorAll(".cross");
  itemcount = document.querySelectorAll(".itemcount");
  like = document.querySelectorAll(".like");
}
input();

for (let i = 0; i < items.length; i++) {
  document.querySelector("h4").innerHTML = 0;

  function total() {
    input();
    let summ = 0;

    for (let n = 0; n < items.length; n++) {
      summ += itemcount[n].innerHTML * price[n].innerHTML;
      document.querySelector("h4").innerHTML = `${summ} m$`;
    }
  }

  function plusfn() {
    itemcount[i].innerHTML++;
    total();
  }
  function minusfn() {
    if (itemcount[i].innerHTML > 0) {
      itemcount[i].innerHTML--;
    }
    total();
  }
  function likefn() {
    if (!like[i].querySelector("img").className) {
      like[i].querySelector("img").className = "noheart";
    } else {
      like[i].querySelector("img").className = "";
    }
  }
  function crossfn() {
    items[i].remove();
    total();
  }

  plus[i].addEventListener("click", plusfn);

  minus[i].addEventListener("click", minusfn);
  like[i].addEventListener("click", likefn);
  cross[i].addEventListener("click", crossfn);
  total();
}
