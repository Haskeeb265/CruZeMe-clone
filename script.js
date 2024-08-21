document.getElementById('driver-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('column2h2').textContent = 'Start Your Journey';
});

document.getElementById('passenger-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior
    document.getElementById('column2h2').textContent = 'Enter your Destination';
});
