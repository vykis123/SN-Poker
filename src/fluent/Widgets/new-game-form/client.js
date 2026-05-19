api.controller = function ($scope) {
  let c = this;
  const dialog = document.querySelector("dialog");
  const titleInput = document.querySelector("#title");
  const titleErrorMsg = document.querySelector(".title__error");

  c.closeModal = () => {
    dialog.close();

    titleInput.classList.remove("wrong");
    titleErrorMsg.classList.remove("error-visible");
  };

  c.validateTitle = function () {
    const titleVal = c.title;

    if (!titleVal || titleVal.trim() === "") {
      titleInput.classList.add("wrong");
      titleErrorMsg.classList.add("error-visible");
    } else {
      titleInput.classList.remove("wrong");
      titleErrorMsg.classList.remove("error-visible");
    }
  };
};
