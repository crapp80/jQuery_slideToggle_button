function main() {
	$(".container").hide();
  $(".container").fadeIn(1000);
  $(".toggle-list").hide();
  $(".toggle-button").on('click', function() {
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text('Projects Viewed');
  })
}
$(document).ready(main);
