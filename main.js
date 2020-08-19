$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			Swal.fire({
					title: 'Спасибо!',
					text: 'Ваша заявка отправлена',
					imageUrl: '',
					imageWidth: 400,
					imageHeight: 200,
					imageAlt: 'Custom image',
				});
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});