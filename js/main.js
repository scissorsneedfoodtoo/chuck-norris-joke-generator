$(document).ready(function() {

    var url = "https://api.icndb.com/jokes/random";
    var jokeText = "";
    var jokeHTML = "";

    function getJoke() {

      $.getJSON(url, function(response) {
        jokeText = response.value.joke;
        jokeHTML = '<p>' + jokeText + '</p>';
        $('#joke-display').html(jokeHTML).fadeIn("slow");

        if (jokeText.length > 140) {
          $('#tweet-btn').hide("slow") // hides tweet-btn if jokeText is too long
        } else {
          $('#tweet-btn').show("slow").on('click', tweetThis);
        }; // shows tweet-btn and allows posting to twitter

      }); // end getJSON
    }; // end getJoke

    $('#joke-btn').click(function(e) {
      getJoke();
      e.preventDefault(); // prevents page from reloading
    }); // end joke-btn click

    function tweetThis() {
      var twitterURL = "https://twitter.com/intent/tweet?text=" + jokeText.replace(/&quot;/g, '"'); // replaces dbl quote escape characters with "
      window.open(twitterURL, 'twitter');
    };

    getJoke();

  }) // end ready
