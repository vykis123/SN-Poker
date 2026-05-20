(function () {
  if (input && input.action === "create_new_poker") {
    const { title = "" } = input;

    if (!title || title.trim() === "") {
      data.success = false;
      data.id = "";
      return;
    }

    const pokerGr = new GlideRecord("x_872084_sn_poker_sessions");
    pokerGr.initialize();
    pokerGr.setValue("title", title);
    const id = pokerGr.insert();

    if (!id) {
      data.success = false;
      data.id = "";

      return;
    }

    /**On success return success response */
    data.success = true;
    data.id = id;
  }
})();
