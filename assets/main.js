// main.js

// GSAP Animation for smooth scrolling and element fade-in
gsap.from(".social-icons a", {
    opacity: 0,
    y: 20,
    duration: 1,
    stagger: 0.3
  });
  
  // Leaflet Map
  var map = L.map('map').setView([5.254671, 96.055955], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  
  var customIcon = L.icon({
      iconUrl: 'assets/alamat.png',
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32]
  });
  
  L.marker([5.254671, 96.055955], { icon: customIcon })
    .addTo(map)
    .bindPopup('Haloo, saya bersekolah disini!')
    .openPopup();
  