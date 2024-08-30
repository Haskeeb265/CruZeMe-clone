	//Hamburger menu script
	const hamburger = document.getElementById('hamburger');
	const navlinks = document.getElementById('navlinks');

	hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('open');
	});

	//Script for changing the HTML between passenger and driver in the "How it works" section 
	document.getElementById('driver-btn').addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('column2h2').textContent = 'Start Your Journey';
		toggleActiveClass(this);
	});
	document.getElementById('passenger-btn').addEventListener('click', function(event) {
		event.preventDefault();
		document.getElementById('column2h2').textContent = 'Enter your Destination';
		toggleActiveClass(this);
	});

	function toggleActiveClass(activeElement) {
		document.getElementById('driver-btn').classList.remove('active');
		document.getElementById('passenger-btn').classList.remove('active');
		activeElement.classList.add('active');
	}
	//Script for Accordion
	document.querySelectorAll('.question').forEach((question) => {
		question.addEventListener('click', function() {
			this.classList.toggle('active');
			const answer = this.nextElementSibling;
			if(answer.style.maxHeight) {
				answer.style.maxHeight = null;
			} else {
				answer.style.maxHeight = answer.scrollHeight + "px";
			}
			document.querySelectorAll('.question.active').forEach((activeQuestion) => {
				if(activeQuestion !== this) {
					activeQuestion.classList.remove('active');
					activeQuestion.nextElementSibling.style.maxHeight = null;
				}
			});
		});
	});