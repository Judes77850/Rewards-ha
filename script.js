async function start() {
  for (let i = 50; i < 93; i++) {
    let button = document.getElementById("onClick1");
    let link =
      "https://www.bing.com/search?q=Arme-fatale" +
      [i] +
      "&form=QBLH&sp=-1&pq=test&sc=10-4&qs=n&sk=&cvid=C18421E39EB741F7AF6EA71C4439BFFB&ghsh=0&ghacc=0&ghpl=";
    await openLink(link);
    button.style.backgroundColor = "green";
  }
}

async function start2() {
  for (let i = 0; i < 33; i++) {
    let button = document.getElementById("onClick1");
    let link =
      "https://www.bing.com/search?q=Arme-fatale" +
      [i] +
      "&form=QBLH&sp=-1&pq=test&sc=10-4&qs=n&sk=&cvid=C18421E39EB741F7AF6EA71C4439BFFB&ghsh=0&ghacc=0&ghpl=";
    await openLink(link);
    button.style.backgroundColor = "green";
  }
}

async function openLink(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      window.open(url, "ABC");
      resolve();
    }, 800);
  });
}
