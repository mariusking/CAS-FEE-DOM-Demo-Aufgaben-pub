const initApp = function () {
  const myRangeElement = document.getElementById("myRange");
  const myOutElement = document.getElementById("myOut");
  const myProgElement = document.querySelector("#myProg");

  const displayRangeValue = function (event) {
    myOutElement.value = myRangeElement.value;
    myProgElement.value = event.target.value;
  };

  myRangeElement.oninput = displayRangeValue;
};

window.addEventListener('load', initApp);
