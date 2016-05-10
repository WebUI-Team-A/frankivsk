$(document).ready(function()
{
  $("#read_forward, #read_forward1, #read_forward2, #read_forward3").click(function()
    {
    $(this).next("div.container").slideToggle(400).siblings("div.container");
       
  });

  });