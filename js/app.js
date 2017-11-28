window.addEventListener('load', function(event) {
  console.log(event);
  console.log(event.target);

  var sede_generation = document.getElementById('sede_generation');
  console.log(sede_generation)


  sede_generation.addEventListener('click', function(event) {

    /*if (characters.value) {
      var tweet = document.createElement('p');
      var textTweet = document.createTextNode('');
      textTweet.textContent = characters.value;
      tweet.appendChild(textTweet);
      tweetsPublicados.appendChild(tweet);
      tweetsPublicados.insertBefore(tweet, tweetsPublicados.firstElementChild);
      characters.value = '';
      */

  });

});
// data.AQP["2016-2"].students.length
// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);
