document.getElementById('bookingForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const pickup = document.getElementById('pickup').value.trim();
    const drop = document.getElementById('drop').value.trim();
    const cabType = document.getElementById('cabType').value;
  
    const distance = Math.floor(Math.random() * 20) + 1; // Simulated distance
    const fareRates = {
      mini: 10,
      sedan: 15,
      suv: 20
    };
  
    const fare = distance * fareRates[cabType];
  
    const result = `
      <strong>Booking Confirmed!</strong><br>
      Pickup: ${pickup}<br>
      Drop: ${drop}<br>
      Cab Type: ${cabType.charAt(0).toUpperCase() + cabType.slice(1)}<br>
      Estimated Distance: ${distance} km<br>
      Estimated Fare: ₹${fare}
    `;
  
    document.getElementById('result').innerHTML = result;
  });