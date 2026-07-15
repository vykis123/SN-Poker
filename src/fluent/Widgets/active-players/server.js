(function () {
    const gameID = $sp.getParameter('sys_id') || "";
    /**Query x_872084_sn_poker_sessions and get creattion date
     * query transactions logs bassed on creation date and game id and return users who had joined that game
     * 
     */

    if (!gameID) return;

    //Get game session creation date
    const pokerSessionGr = new GlideRecord("x_872084_sn_poker_sessions");
    if (!pokerSessionGr.get(gameID)) return;
    const sessionCreatedDate = pokerSessionGr.getValue("sys_created_on");

    //Get users who joined specific session after it's creation
    const joinedUsersIDs = new global.SnPokerHelpers().searchForJoinedUsers(sessionCreatedDate, gameID);

    data.joinedUsers = joinedUsersIDs;
})();