const { GlideRecord, GlideAggregate } = require("@servicenow/glide");

(function () {
    /**Initial data setup on page load */
    const gameID = $sp.getParameter('sys_id') || "";
    const currentUser = gs.getUserID() || "";
    if (!gameID) return;

    if(!input){
        /**Add new joiner if needed */
        if(currentUser){
            addUserToGame(currentUser, gameID);
        }
        
        /*Fetch all players and populate to global scope*/
        data.joinedUsers = fetchAllPlayers(gameID);
    }

    /*****************************Methods************************************/
    /**
     * @param {string} user : sysid of current logged in user 
     * @param {string} game : sysid of the current game
     */
    function addUserToGame(user, game){
        try{
            const userSessionGr = new GlideRecord("x_872084_sn_poker_user_sessions");
            userSessionGr.addEncodedQuery("player="+user+"^game="+game);
            userSessionGr.setLimit(1);
            userSessionGr.query();
            if(!userSessionGr.hasNext()){
                userSessionGr.initialize();
                userSessionGr.setValue("player", currentUser);
                userSessionGr.setValue("game", gameID);
                const newSession = userSessionGr.insert();
    
                if(!newSession) throw new Error("No new session created!!!");
            }

        } catch(error){
            gs.error("Something went wrong in active-player widget. addUserToGame method: " + error);
        }
    }

    /**
     * @param {string} game : game sysid 
     * @returns {string[]}
     */
    function fetchAllPlayers(game){
        const players = [];
        try{
            const userSession = new GlideAggregate("x_872084_sn_poker_user_sessions");
            userSession.addEncodedQuery("game="+game);
            userSession.groupBy("player");
            userSession.query();
    
            while(userSession.next()){
                players.push(userSession.getValue("player"));
            }

            return players; 
        } catch(error){
            gs.error("Something went wrong in active-player widget. fetchAllPlayers method: " + error);
        }
    }
})();