$(document).ready(function(){

  // Filtering
  $('#filters li').on('click', function(){
    $('#filters li').removeClass('selected');
    var el = $(this)
    var data = el.data();

    el.addClass('selected');

    if (data.filter == 'none') {
      $('#marker-list').removeClass('filtered');
    } else {
      $('#marker-list').addClass('filtered');
    }
    $('#marker-list li').removeClass('show');
    $('.'+data.filter).addClass('show');

  });

});
