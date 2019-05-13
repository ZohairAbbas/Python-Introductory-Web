$(function() {
    $("#loader").fadeOut(2000, function() {
        $("#content").fadeIn(100);        
    });
});

AOS.init();

var scroll = new SmoothScroll('a[href*="#"]');

hljs.initHighlightingOnLoad();

$('#mySlider').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
});

//Custom JavaScript For Newsletter Form
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function NewsLetter() {
	var form = document.getElementById('myForm');
	
	name = document.getElementById('form-name').value;
	
	email = document.getElementById('form-email').value;

	name_error = "";
	email_error = "";
	success_message = "";

	if (!(name)) {
		name_error = "<p class=\"alert alert-danger\" role=\"alert\"><i class=\"fas fa-exclamation-triangle\"></i>&nbsp;&nbsp;The <span class=\"font-weight-bold\">name</span> field is required!</p>";
	}

	if (!(email)) {
		email_error = "<p class=\"alert alert-danger\" role=\"alert\"><i class=\"fas fa-exclamation-triangle\"></i>&nbsp;&nbsp;The <span class=\"font-weight-bold\">email</span> field is required!</p>";
	}

	if (email) {
		if (!(validateEmail(email))) {
		email_error = "<p class=\"alert alert-danger\" role=\"alert\"><i class=\"fas fa-exclamation-triangle\"></i>&nbsp;&nbsp;The <span class=\"font-weight-bold\">email address</span> is not valid!</p>";
		}
	}

	if ((name) && (validateEmail(email))) {
		success_message = "<div class=\"alert alert-success lert-dismissible fade show\" role=\"alert\"><i class=\"fas fa-check-circle\"></i>&nbsp;&nbsp;Dear <span class=\"font-weight-bold\">" +name+ "</span> you are successfully subscribed!<button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div>";
		
		form.reset();
	}

	document.getElementById('div1').innerHTML = name_error;

	document.getElementById('div2').innerHTML = email_error;

	document.getElementById('div3').innerHTML = success_message;
	
}