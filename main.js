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
      text: 'Apartment | by Robbin Johnson',
      img: ["https://www.private-boat-tour-phuket.com/wp-content/uploads/2017/08/thailand-1451383_1280.jpg",
      'https://c.wallhere.com/photos/5c/d6/Thailand_Phi_Phi_Islands_boat-76753.jpg!d',
      'https://i.pinimg.com/736x/f5/c5/92/f5c592a5ad2a62282edbcf451deb7bc4.jpg'
    ],
    photos: [ "https://images.unsplash.com/photo-1559008367-1d6412724673?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", 
      "https://www.moregreece.com/wp-content/uploads/2018/05/lefkes-2.jpg",
      "https://img5.goodfon.ru/original/1920x1200/7/ac/shilla-doma-krysha-more-zamok-ruffo.jpg",
      "https://avatars.mds.yandex.net/get-zen_doc/4359735/pub_6050c8ea150a5a65fbaf7413_6050cf51974a7a1569ab7d40/scale_1200",
      "http://route.in.ua/sites/default/files/images/rodos/Dodecanese215.jpg",
      "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    ],  
    region: "Thailand",
      cost: 1480
  },
  {
      name: "Kudahuvadhoo Island",
      text: 'Apartment | by Edison Yusuf',
      img: ["https://maldives-magazine.com/pictures/dhaalu-airport.jpg",
      'https://kandima.com/images/images/restaurants/flavour/2017_Kandinma_1098_LQ.jpg',
      'http://www.island-on-map.com/img/1/maldives-dhaalu-atoll-kandima-beach-orig.jpg'
    ],
      region: "Maldives",
      photos: [ "https://wallbox.ru/wallpapers/main/201321/b7f50ca26697802.jpg", 
      "https://planettravel24.com/wp-content/uploads/2020/04/osos-e1587743626911-1024x625.jpg",
      "https://images.unsplash.com/photo-1534516912899-33ab52feb2f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://e.allegroimg.com/original/01bc94/e2b67d0f44f8a91fd4227730785e",
      "https://pixy.org/src/0/3713.jpg",
      "https://www.bookmaldivespackages.com/images/uploads/resorts/brennia-kottefaru-resort-maldives-public-swimming-pool.jpeg",    
    ],
      cost: 1590
  },
  {
      name: "Greecevillage",
      text: 'Apartment | by Robbin Sharma',
      img: ["https://www.clubyacht.net/wp-content/uploads/2014/12/Dollarphotoclub_71661269.jpg",'https://c.pxhere.com/images/94/d0/096b03fdd146722ea8d55a7d3ee3-1433193.jpg!d',
      'http://tez-tour-spb.ru/wp-content/uploads/2017/05/GreeceOM_15.jpg',
  ],
      region: "Maldives",
      photos: [ "https://storage.needpix.com/rsynced_images/greece-2769163_1280.jpg", 
      "https://res.cloudinary.com/fleetnation/image/private/c_fit,h_1120,w_1120/c_scale,fl_no_overflow,l_watermarks:wafy3xokd4awrrhw3i1o,o_50,w_200/v1572416206/gae7xa8yylkpquss1uyk.jpg",
      "https://pixy.org/src/0/3713.jpg",
      "https://images.unsplash.com/photo-1534516912899-33ab52feb2f4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTV8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      "https://i.pinimg.com/originals/f4/7d/ea/f47deabf078b599a978bf7b40b187f3d.jpg",
      "https://images.unsplash.com/photo-1530948990335-1eb93cbe6430?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTl8fGt1ZGFodXZhZGhvbyUyMGlzbGFuZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    ],
      cost: 1975,
  }
]





const regions = DATA.map(function (element) {
  return element.region
})

regions.forEach(function (element) {
  const pictureListElement = document.querySelector('.picture-list')
  pictureListElement.setAttribute("value", element)
  pictureListElement.textContent = element
  rasmTanlash.appendChild(pictureListElement)
})

rasmTanlash.addEventListener('change', event => {
  const filteredData = DATA.filter(function (element ) {
      return element.region == event.target.value
  })
  filteredData.forEach(function (element) {
    const pictureListElement = document.querySelector('.picture-item')
      pictureListElement.setAttribute("value", element.name)
      pictureListElement.textContent = element.name
      nameTanlash.appendChild(pictureListElement)
  })
  filteredData.forEach(function (element) {
    const pictureListElement = document.querySelector('.picture-item')
      pictureListElement.setAttribute("value", element.img)
      pictureListElement.textContent = element.img
      imgTanlash.appendChild(pictureListElement)
  })
  filteredData.forEach(function (element) {
    const pictureListElement = document.querySelector('.picture-item')
      pictureListElement.setAttribute("value", element.cost)
      pictureListElement.textContent = element.cost
      costTanlash.appendChild(pictureListElement)
  })
  
})

ok.addEventListener('click', event => {
  const rasm = DATA.find(function (element) {
      return element.name == rasmTanlash.value
  })
  info.textContent = null
  const imageElement = document.createElement('img')
  const nameElement = document.createElement('p')
  const costElement=document.createElement('p')


  imageElement.setAttribute('src', rasm.img)
  nameElement.textContent = rasm.name

  info.appendChild(imageElement)
  info.appendChild(nameElement)
  info.appendChild(costElement)
})





const navbarButtonElement=document.querySelector('.navbar-button')
const navbarPartElement=document.querySelector('.navbar-part')
const overlayElement=document.querySelector('.overlay')
const buttonGroupElement=document.querySelector('.button-group')
const firstElement=document.querySelector('#picture-first')
const secondElement=document.querySelector('#picture-second')
const thirdElement=document.querySelector('#picture-third')
const headerPartElement=document.querySelector('.header-part')
const chartElement=document.querySelector('#myChart')
const headerBlokElement=document.querySelector('.header-blok')
const asideButtonElement=document.querySelector('.menu-button')
const menuToggleButton=document.querySelector('.menu-button')
const pictureElement=document.querySelector('.header-picture')
 const asideLinkElement=document.querySelectorAll('.aside-link')

navbarButtonElement.addEventListener("click", e => {
   
  overlayElement.style.display = "block"
  navbarPartElement.style.marginRight='250px'
  buttonGroupElement.style.marginRight='270px'
  chartElement.style.width="400px"
  headerBlokElement.style.width="300px"
  pictureElement.style.marginRight="80px"
  
}) 

navbarButtonElement.addEventListener("dblclick", e => {
  overlayElement.style.display = "none"
  navbarPartElement.style.marginRight='0px'
  buttonGroupElement.style.marginRight='0px'
}) 

// menuToggleButton.addEventListener('click', e=>{
//   asideLinkElement.style.flexDirection='row'
// })

// menuToggleButton.addEventListener('dbclick', e=>{
//   asideLinkElement.style.flexDirection='column'
// })

