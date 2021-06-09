let firstChart = document.getElementById('myChart').getContext('2d');

let barChart = new Chart(firstChart, {
  type: 'bar',
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [{
      barPercentage: 0.5,
      barThickness: 15,
      maxBarThickness: 20,
      minBarLength: 2, 
      label: "Revenue",
      borderRadius: 500,
      data: [
        400,
        500,
        300,
        240,
        700,
        600,
        700
      ],
      backgroundColor: "#F86549"
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Guests',
        fontSize: 30
      },
    }
  }
})





document.addEventListener( 'DOMContentLoaded', function () {
	new Splide( '#image-slider' ).mount();
} );


