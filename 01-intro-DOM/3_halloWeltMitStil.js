(function () {
  const initApp = function () {
    // View Refs
    const form = document.querySelector("form");
    const input = document.getElementById("name");
    const echo = document.getElementById("echo");

    // RenderFn
    const renderUI = function () {
      echo.innerHTML = 'Hallo ' + input.value;
    };

    // Controller
    form.onsubmit = (event) => {
      event.preventDefault();
      renderUI();
    };
  };

  document.addEventListener('DOMContentLoaded', initApp);
})();
