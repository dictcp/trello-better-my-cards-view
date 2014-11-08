// ==UserScript==
// @name         Trello my cards page MOD
// @namespace    http://dictcp.net/
// @version      0.1
// @description  to remove those in Done List and better view for card tracking
// @author       Dick Tang
// @match        https://trello.com/*/cards
// @grant        none
// ==/UserScript==

/* assume trello is with jquery lib */
var removeDoneCards = function() {
    $('div.list-card-container > p:contains("Done")').parent().hide();
    $('div.list-card-container > p:contains("Feedback")').parent().hide();
    $('div.list-card-container > p:contains("brainstorm")').parent().hide();
}

$(document).ready(function(){
    window.setInterval(removeDoneCards, 3000);
});

