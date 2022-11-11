// document.getElementById("onClick").addEventListener("click", function () {
//   document.body.style.backgroundColor = "white";
// });

function myFunctionDesktop() {
  for (let i = 50; i < 81; i++) {
    let button = document.getElementById("onClick1");
    let link =
      "https://www.bing.com/search?q=bien-joué" +
      [i] +
      "&form=QBLH&sp=-1&pq=test&sc=10-4&qs=n&sk=&cvid=C18421E39EB741F7AF6EA71C4439BFFB&ghsh=0&ghacc=0&ghpl=";
    window.open(link);
    button.style.backgroundColor = "green";
  }
}

function myFunctionMobile() {
  for (let i = 0; i < 22; i++) {
    let button = document.getElementById("onClick2");
    let link =
      "https://www.bing.com/search?q=coucou" +
      [i] +
      "&form=QBLH&sp=-1&pq=test&sc=10-4&qs=n&sk=&cvid=C18421E39EB741F7AF6EA71C4439BFFB&ghsh=0&ghacc=0&ghpl=";
    window.open(link);
    button.style.backgroundColor = "green";
  }
}
