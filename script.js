window.addEventListener('DomContentLoaded', function() {
  const audio = document.getElementById('muzuk');
  audio.volume = 0.1;
  audio.play().catch(function() {
    console.log('Browser doesn\'t let to play the song.');
  });
});