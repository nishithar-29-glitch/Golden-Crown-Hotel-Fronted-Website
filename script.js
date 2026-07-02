function showBookingForm() {
    document.getElementById("bookingForm").style.display = "block";
}

function submitBooking() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let date = document.getElementById("date").value;

    if(name=="" || phone=="" || date==""){

        alert("Please fill all details.");

    }

    else{

        alert("Booking Successful!\n\nThank you " + name + "!\nWe will contact you shortly.");

    }

}