api.controller = function ($scope) {
  let c = this;
  const dialog = document.querySelector("dialog");
  const titleInput = document.querySelector("#title");
  const titleErrorMsg = document.querySelector(".title__error");

  c.closeModal = () => {
    dialog.close();

    titleInput.classList.remove("wrong");
    titleErrorMsg.classList.remove("error-visible");
    titleInput.value = "";
  };

  /**
   * @param {string} title 
   */
  c.validateTitle = function (title) {
    if (!title || title.trim() === "") {
      titleInput.classList.add("wrong");
      titleErrorMsg.classList.add("error-visible");
    } else {
      titleInput.classList.remove("wrong");
      titleErrorMsg.classList.remove("error-visible");
    }
  };

  /**
   * Submit new game into server
   * @param {string} title 
   */
  c.createPoker = function (title) {
    const payloadToServer = { action: "create_new_poker", title };
    c.server
      .get(payloadToServer)
      .then(function (response) {
        const { success = false, id = "" } = response.data;

        if (!success) throw new Error("Failed creating new record.");

        c.closeModal();
      })
      .catch((error) => {
        console.error("Issue with creating new poker: " + error);
      });
  };
};
