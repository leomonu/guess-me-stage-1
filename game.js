let words = [
  {
    inputs: 8,
    category: "sports",
    word: "Football",
  },
  {
    inputs: 6,
    category: " Indian State Name",
    word: "Kerela",
  },
  {
    inputs: 5,
    category: " Indian State Name",
    word: "Assam",
  },
  {
    inputs: 7,
    category: "sports",
    word: "Cricket",
  },
];
$(document).ready(function () {
  fillblanks();
});
function fillblanks() {
  var randomword = words[Math.floor(Math.random() * words.length)];
  console.log(randomword);
  $("#blanks").empty();
  for (var i = 0; i < randomword.inputs; i += 1) {
    let blank = `<span class="fill_in_the_blanks" id="input_${i}">_</span>`;
    $("#blanks").append(blank);
  }
  $("#hint").html(randomword.category);
  var gameover = false;
  $(".clickable").click(function () {
    var correctGuess = false;

    let id = $(this).attr("id");

    let life = parseInt($("#life").text());

    for (var i = 0; i < randomword.word.length; i += 1) {
      if (randomword.word.charAt(i).toLowerCase() === id) {
        if (
          life > 0 &&
          ($(".fill_in_the_blanks").eq(i).html() === "_" ||
            $(".fill_in_the_blanks").eq(i).html() === id)
        ) {
          $(".fill_in_the_blanks").eq(i).html(id);
          correctGuess = true;

          if ($("#blanks").text() === randomword.word.toLowerCase()) {
            $("#result").text("You WIN");
            correctGuess = true;
            gameover = false;
          }
        }
      }
    }
  });
}
