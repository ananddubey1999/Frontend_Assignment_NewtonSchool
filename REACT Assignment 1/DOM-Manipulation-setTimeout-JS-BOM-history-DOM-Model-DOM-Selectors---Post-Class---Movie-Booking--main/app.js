import {fetchMovieAvailability,fetchMovieList} from "./api.js"
const mainElement = document.getElementById('main');
let bookerGridHolder = document.getElementById('booker-grid-holder');
let bookTicketBtn = document.getElementById('book-ticket-btn');
let booker = document.getElementById('booker');

async function renderMovies() {
     mainElement.innerHTML = `<div id='loader'></div>`;
     let movies = await fetchMovieList();
     let movieHolder = document.createElement('div');
     movieHolder.setAttribute('class', 'movie-holder');
     movies.forEach(movie => {
          createSeparateMovieTabs(movie, movieHolder);
     });
     mainElement.innerHTML = '';
     mainElement.appendChild(movieHolder);
     setEventToLinks();
}
renderMovies();

function createSeparateMovieTabs(data, wrapper) {
     let a = document.createElement('a');
     a.setAttribute('data-movie-name', `${data.name}`);
     a.classList.add('movie-link');
     a.href = `#${data.name}`;
     a.innerHTML = `<div class="movie" data-id=${data.name}>
                    <div class="movie-img-wrapper" style="background-image:url(${data.imgUrl})"></div>
                    <h4>${data.name}</h4>
               </div>`;
     wrapper.appendChild(a);
}
function setEventToLinks() {
     let movieLinks = document.querySelectorAll('.movie-link');
     movieLinks.forEach(movieLink => {
          movieLink.addEventListener('click', (e) => {
               renderSeatsGrid(movieLink.getAttribute('data-movie-name'));
          })
     })
}

async function renderSeatsGrid(movieName) {
     bookerGridHolder.innerHTML = `<div id='loader'></div>`;
     bookTicketBtn.classList.add('v-none');
     let data = await fetchMovieAvailability(movieName);
     renderSeats(data);
     setEventsToSeats();
}

function renderSeats(data) {
     if(booker.firstElementChild.tagName !== "H3"){
          seatsSelected = [];
          booker.innerHTML = `<h3 class="v-none">Seat Selector</h3>
                              <div id="booker-grid-holder"></div>
                              <button id="book-ticket-btn" class="v-none">Book my seats</button>`;
     }
     bookerGridHolder = document.getElementById('booker-grid-holder');
     bookTicketBtn = document.getElementById('book-ticket-btn');
     bookerGridHolder.innerHTML = '';
     booker.firstElementChild.classList.remove('v-none');
     createSeatsGrid(data)
}
function createSeatsGrid(data){
     let bookingGrid1 = document.createElement("div");
     let bookingGrid2 = document.createElement("div");
     bookingGrid2.classList.add("booking-grid");
     bookingGrid1.classList.add("booking-grid");
     for (let i = 1; i < 25; i++) {
       let seat = document.createElement("div");
       seat.innerHTML = i;
       seat.setAttribute("id", `booking-grid-${i}`);
       if (data.includes(i)) seat.classList.add("seat", "unavailable-seat");
       else seat.classList.add("seat", "available-seat");
       if (i > 12) bookingGrid2.appendChild(seat);
       else bookingGrid1.appendChild(seat);
     }
     bookerGridHolder.appendChild(bookingGrid1);
     bookerGridHolder.appendChild(bookingGrid2);
     setTicketBooking();
}

let seatsSelected = [];
function setEventsToSeats() {
     let AvaliableSeats = document.querySelectorAll('.available-seat');
     AvaliableSeats.forEach(seat => {
          seat.addEventListener('click', _ => {
               saveSelectedSeat(seat);
          })
     })
}

function saveSelectedSeat(seat) {
     if (!seat.classList.contains("select-seat")) {
          seat.classList.add('select-seat');
          seatsSelected.push(seat.innerText);
          bookTicketBtn.classList.remove('v-none');
     } else {
          seat.classList.remove('select-seat');
          seatsSelected = seatsSelected.filter(item => seat.innerText !== item);
          if (seatsSelected.length == 0){
               bookTicketBtn.classList.add('v-none');
          }
     }
}
function setTicketBooking(){
     bookTicketBtn.addEventListener('click', () => {
          if (seatsSelected.length > 0) {
               booker.innerHTML = '';
               confirmTicket();
          }
     })
}

function confirmTicket(){
     let confirmTicketElement = document.createElement('div');
     confirmTicketElement.setAttribute('id', 'confirm-purchase');
     let h3 = document.createElement('h3');
     h3.innerText = `Confirm your booking for seat numbers:${seatsSelected.join(",")}`;
     confirmTicketElement.appendChild(h3);
     confirmTicketElement.appendChild(createForm());
     booker.appendChild(confirmTicketElement);
     success();
}

function createForm(){
     let form = document.createElement("form");
     let formElements = `<input type="email" id="email" placeholder="email" required><br><br>
                         <input type="tel" id="phone" placeholder="phone" required><br><br>
                         <button id="submitBtn" type="submit">Purchase</button>`;
     form.setAttribute("method", "post");
     form.setAttribute("id", "customer-detail-form");
     form.innerHTML = formElements;
     return form;
}
function success(){
     let submitBtn = document.getElementById('submitBtn');
     submitBtn.addEventListener('click',(e) => {
         let form =  document.getElementById('customer-detail-form');
         if(form.checkValidity()){
              e.preventDefault();
              let email = document.getElementById('email').value;
              let phone = document.getElementById('phone').value;
              renderSuccessMessage(email, phone);
         }
     })
}

function renderSuccessMessage(email, phone){
     booker.innerHTML = '';
     createSuccessMessage(email, phone);
}

function createSuccessMessage(email, phone){
     let successElement = document.createElement("div");
     successElement.setAttribute("id", "success");
     successElement.innerHTML = `<h3>Booking details</h3>
                               <p>Seats: ${seatsSelected.join(", ")}</p>
                              <p>Email: ${email}</p>
                              <p>Phone number: ${phone}</p>`;
     booker.appendChild(successElement);
}







