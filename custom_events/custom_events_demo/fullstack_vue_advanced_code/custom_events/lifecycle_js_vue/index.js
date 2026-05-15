console.log("A");

setTimeout(() => {
  console.log("B");
}, 0);

setTimeout(() => {
  console.log("D");

  setTimeout(() => {
    console.log("F");
  }, 0);
}, 1000);

setTimeout(() => {
  console.log("E");
}, 0);

console.log("C");

// tag:
// document.
const div = document.createElement("div");

div.innerText = "Hello";

document.body.appendChild(div);

// tag:
const user = {
  name: "Tom",
};

user.name = "Jack";

// tag:
const app = document.getElementById("app");

let count = 0;

function render() {
  app.innerHTML = `<h1>${count}</h1>`;
}

render();

count++;

render();

// tag:
button.addEventListener("click", () => {
  console.log("clicked");
});

// tag:
fetch();
Promise;
async / (await setTimeout());

// e.g.,
async function loadData() {
  const response = await fetch(url);
  const data = await response.json();

  console.log(data);
}

// tag:
doSomething(successCallback, failureCallback);
doSomething((result) => {
  secondFunc((result) => {
    thirdFunc(successCallback, failureCallback);
  }, failureCallback);
}, failureCallback);

doSomething()
  .then((res) => {
    secondFunc();
  })
  .then(() => {
    thirdFunc();
  })
  .catch(failureCallback);

doSomething(function (result) {
  doSomethingElse(
    result,
    function (newResult) {
      doThirdThing(
        newResult,
        function (finalResult) {
          console.log(`Got the final result: ${finalResult}`);
        },
        failureCallback,
      );
    },
    failureCallback,
  );
}, failureCallback);

// doSomething()
//   .then(function (result) {
//     return doSomethingElse(result);
//   })
//   .then(function (newResult) {
//     return doThirdThing(newResult);
//   })
//   .then(function (finalResult) {
//     console.log(`Got the final result: ${finalResult}`);
//   })
//   .catch(failureCallback);

doSomething()
  .then((url) => fetch(url))
  .then((res) => res.json())
  .then((data) => {
    // todo:
  })
  .then(() => {
    console.log(listOfIngredients);
  });
