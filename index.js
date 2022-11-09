const API_KEY = "577206035497626977406x58555";

function getRandomNumber() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(Math.random()), 500);
  });
}

async function f() {
  let result = await getRandomNumber(); // wait until the promise resolves (*)

  alert(result); // "done!"
}

f();

async function city(city) {
  var myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "__cflb=0H28vTE11mXeuU6nLEGMumyL4X6iAPhSPzubBzxM2i1; xyzh=xyzh"
  );

  var requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(`https://geocode.xyz/${city}?json=1&auth=${API_KEY}`, requestOptions)
    .then((response) => response.json())
    .then((result) => console.log(result.latt + " " + result.longt))
    .catch((error) => console.log("error", error));
}
city("Vallejo");
city("Oakland");
city("Richmond");
