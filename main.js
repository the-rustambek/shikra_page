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






const DATA = [
  {
      name: "Phi Phi Islands",
      img: "https://www.private-boat-tour-phuket.com/wp-content/uploads/2017/08/thailand-1451383_1280.jpg",
      region: "Thailand",
      cost: 1480
  },
  {
      name: "Kudahuvadhoo Island",
      img: "https://maldives-magazine.com/pictures/dhaalu-airport.jpg",
      region: "Maldives",
      cost: 1480
  },
  {
      name: "Greecevillage",
      img: "https://www.clubyacht.net/wp-content/uploads/2014/12/Dollarphotoclub_71661269.jpg",
      region: "Maldives",
      cost: 1480
  }
]

const regions = DATA.map(function (element) {
  return element.region
})

// regions.forEach(function (element) {
//   const pictureListElement = document.querySelector('.picture-list')
//   pictureListElement.setAttribute("value", element)
//   pictureListElement.textContent = element
//   rasmTanlash.appendChild(pictureListElement)
// })

// rasmTanlash.addEventListener('change', event => {
//   const filteredData = DATA.filter(function (element ) {
//       return element.region == event.target.value
//   })
//   filteredData.forEach(function (element) {
//     const pictureListElement = document.querySelector('.picture-item')
//       pictureListElement.setAttribute("value", element.name)
//       pictureListElement.textContent = element.name
//       nameTanlash.appendChild(pictureListElement)
//   })
//   filteredData.forEach(function (element) {
//     const pictureListElement = document.querySelector('.picture-item')
//       pictureListElement.setAttribute("value", element.img)
//       pictureListElement.textContent = element.img
//       imgTanlash.appendChild(pictureListElement)
//   })
//   filteredData.forEach(function (element) {
//     const pictureListElement = document.querySelector('.picture-item')
//       pictureListElement.setAttribute("value", element.cost)
//       pictureListElement.textContent = element.cost
//       costTanlash.appendChild(pictureListElement)
//   })
  
// })

// ok.addEventListener('click', event => {
//   const rasm = DATA.find(function (element) {
//       return element.name == rasmTanlash.value
//   })
//   info.textContent = null
//   const imageElement = document.createElement('img')
//   const nameElement = document.createElement('p')
//   const costElement=document.createElement('p')


//   imageElement.setAttribute('src', rasm.img)
//   nameElement.textContent = rasm.name

//   info.appendChild(imageElement)
//   info.appendChild(nameElement)
//   info.appendChild(costElement)
// })





// const navbarButtonElement=document.querySelector('.navbar-button')
// const overlayElement=document.querySelector('.overlay')
// const buttonGroupElement=document.querySelector('.button-group')



// navbarButtonElement.addEventListener('click',event =>{
// overlayElement.classList.add('d-block')
// buttonGroupElement.style.marginRight='150px'
// })
