window.onload = function() {
  // image.src = 'images/may.png';
  i = 1;
  z = 1;
  r = 3;
  tories = {};
  image = $('.image');
   var src = 'images/' + name + '.png';
   image.attr('src', src);
  tories.name = 'may';

  setTimeout(showButton, 5000);
  setTimeout(showTitle, 12000);
  setTimeout(resetPolitics, 14000);
  var theInterval = setInterval(createLoop, 1500);



}

function showButton() {
  $('#faces').fadeIn();
  $('.face').click(function() {
  tories.name = $(this).data('name');
});
}

function showTitle() {
  $('#title').addClass('show');
};

function resetPolitics() {
  $('#reset').fadeIn(function() {
    $(this).click(function() {
    $('#resetPanel').addClass('flex');
    $('#resetPanel').slideDown();
  });
  });

}

function createLoop() {
    src = 'images/' + tories.name + '.png';
    var loopImage = $('#image-' + i);
    loopImage.attr('src', src);
    var prevLoopImage = $('#image-' + r);
    i++;
    z++;
    r++;
    loopImage.attr('src', src);
    loopImage.show();
    loopImage.css({'z-index': z});
    prevLoopImage.hide();
    if (i == 7) {
      i = 1;
      loopImage.show();
    }
    if (r == 7) {
      r = 1;
    }

}
