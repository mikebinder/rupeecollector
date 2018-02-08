Rupee Collector

Rupee Collector is a game where the objective is to simply match your score to the computer score.

The general layout of the components of the page are outlined in the simple layout file. The final game didn't differ too much from this mockup.

Upon accessing the site, the game randomly selects values for both the crystals and the target score. While the target score is visible, the values of the crystals must be inferred by clicking on them and doing simple math.

If you manage to match the score exactly, you get a win which is logged in the win column. If your score goes over the target number, you get a loss which is also logged in its appropriate column.

What is visible on the page is mostly made with HTML and CSS. The games logic makes use of Javascript, and especially jQuery, to generate random number variables for the crystals and score. It also takes advantage of the .on click function to keep the players score updated.Additionally, there are several if/else statements that determine whether the player has won or lost.
