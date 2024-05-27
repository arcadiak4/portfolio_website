/* Isotope & Mansonry */
window.onload = () => {
  const items = document.querySelector('.masonry-container');

  var isotopeOptions = {
    itemSelector: '.masonry-container-item',
    masonry: {
      columnWidth: '.masonry-container-item',
      resize: true // enables dynamic resizing
    }
  };

  const itemsGrid = new Isotope(items, isotopeOptions);
  console.log(itemsGrid);

  // Add an event handler to all .filter-item elements
  document.querySelectorAll('.filter-item').forEach(button => {
    button.addEventListener('click', function(event) {
      // Retrieve filter value from the data-filter attribute of the clicked button
      var filterValue = this.dataset.filter;
      // console.log('Filter value:', filterValue);

      // Apply the filter using the Isotope object
      itemsGrid.arrange({ filter: filterValue });
      // console.log('Arranging items with filter:', filterValue);
      // console.log(itemsGrid);

      // Retrieve filtered elements
      const filteredItems = itemsGrid.filteredItems.map(item => item.element);
      // console.log('Filtered items:', filteredItems);
    });
  });
}

/*-----------------------------*/
/* Menu responsive */

const menuBurger = document.querySelector(".default-icon");
const menuLinks = document.querySelector(".header-menu-section");
const body = document.body;

menuBurger.addEventListener('click', function() {
  // open menu
  if (this.src.includes('burger-bar.png')) {
    menuLinks.classList.add('open-menu');
    menuLinks.classList.remove('close-menu', false);
      this.src = '/icons/close-window.png';
      body.style.overflow = 'hidden';
  // close menu
  } else {
    this.src = '/icons/burger-bar.png';
    menuLinks.classList.remove('open-menu');
    menuLinks.classList.add('close-menu');
    body.style.overflow = 'auto';
  }
});

// apply style for close-menu then remove this class
menuLinks.addEventListener('transitionend', function(event) {
  if (event.propertyName === 'opacity') {
    menuLinks.classList.remove('close-menu');
  }
});

/*-----------------------------*/
/* Animation & Illustration gallery with navigation arrows and thumbnail strip for quick navigation */

// document.addEventListener('DOMContentLoaded', () => {
//   // Select the main image element
//   const mainImage = document.getElementById('mainImage');
//   // Select all thumbnail images
//   const thumbnails = document.querySelectorAll('.thumbnail');
//   // Select the previous button
//   const prevBtn = document.getElementById('prevBtn');
//   // Select the next button
//   const nextBtn = document.getElementById('nextBtn');
//   // Initialize the index of the currently displayed image to 0
//   let currentIndex = 0;

//   // Function to update the main image based on the index passed as an argument
//   function updateMainImage(index) {
//       // Update the source of the main image with that of the corresponding thumbnail
//       mainImage.src = thumbnails[index].src;
//       // Remove the 'active' class from the previous thumbnail
//       document.querySelector('.thumbnail.active').classList.remove('active');
//       // Add the 'active' class to the currently displayed thumbnail
//       thumbnails[index].classList.add('active');
//       // Update the index of the currently displayed image
//       currentIndex = index;
//   }

//   // Add event handler to each thumbnail
//   thumbnails.forEach((thumbnail, index) => {
//       // When a thumbnail is clicked, call the updateMainImage function with the index of that thumbnail
//       thumbnail.addEventListener('click', () => {
//           updateMainImage(index);
//       });
//   });

//   // Event handler for the 'previous' button
//   prevBtn.addEventListener('click', () => {
//       // Check if the current index is greater than 0 to avoid going below 0
//       if (currentIndex > 0) {
//           // Call the updateMainImage function with the decremented index to display the previous image
//           updateMainImage(currentIndex - 1);
//       }
//   });

//   // Event handler for the 'next' button
//   nextBtn.addEventListener('click', () => {
//       // Check if the current index is less than the length of thumbnails minus 1 to avoid exceeding the end
//       if (currentIndex < thumbnails.length - 1) {
//           // Call the updateMainImage function with the incremented index to display the next image
//           updateMainImage(currentIndex + 1);
//       }
//   });

//   // Set the first thumbnail as active when the page loads
//   thumbnails[0].classList.add('active');
// });

/*-----------------------------*/
/* Zoom image on gallery navigation window */

// document.addEventListener('DOMContentLoaded', () => {
//     const mainImage = document.getElementById('mainImage'); // Selects the main image
//     const zoomOverlay = document.getElementById('zoomOverlay'); // Selects the zoom overlay
//     let zoomedImage = null; // Variable to store the zoomed image

//     mainImage.addEventListener('click', () => {
//         if (!zoomedImage) {
//             // If no image is currently zoomed
//             zoomedImage = document.createElement('img');
//             zoomedImage.classList.add('zoomed-image');
//             zoomedImage.src = mainImage.src;
//             zoomOverlay.appendChild(zoomedImage); // Adds the zoomed image to the overlay
//             zoomOverlay.style.display = 'flex'; // Displays the overlay

//             adjustZoomedImage(zoomedImage);

//             window.addEventListener('mousemove', onMouseMove); // Adds a mousemove event listener to the window
//             zoomOverlay.addEventListener('click', closeZoom);
//         } else {
//             closeZoom();
//         }
//     });

//     function adjustZoomedImage(img) {
//         const mainImageWidth = mainImage.offsetWidth; // Width of the main image
//         const mainImageHeight = mainImage.offsetHeight; // Height of the main image

//         img.style.width = `${mainImageWidth * 2}px`; // Sets the width of the zoomed image to twice the width of the main image
//         img.style.height = `${mainImageHeight * 2}px`; // Sets the height of the zoomed image to twice the height of the main image
//         img.style.left = '50%';
//         img.style.top = '50%';
//         img.style.transform = 'translate(-50%, -50%)'; // Centers the image
//     }

//     function onMouseMove(e) {
//         // Checks if an image is currently zoomed
//         if (zoomedImage) {
//             // Retrieves the horizontal and vertical coordinates of the mouse position relative to the window
//             const mouseX = e.clientX;
//             const mouseY = e.clientY;
            
//             // Retrieves the width and height of the browser window
//             const windowWidth = window.innerWidth;
//             const windowHeight = window.innerHeight;
            
//             // Retrieves the width and height of the zoomed image
//             const imgWidth = zoomedImage.offsetWidth; // Uses offsetWidth to get the computed width with CSS modifications
//             const imgHeight = zoomedImage.offsetHeight; // Uses offsetHeight to get the computed height with CSS modifications
    
//             // Calculates the offset needed for the movement of the zoomed image
//             const offsetX = ((mouseX - windowWidth / 2) / windowWidth) * (imgWidth - windowWidth);
//             const offsetY = ((mouseY - windowHeight / 2) / windowHeight) * (imgHeight - windowHeight);
    
//             // Applies the CSS transformation to move the zoomed image according to the mouse movement
//             zoomedImage.style.transform = `translate(calc(-50% + ${-offsetX}px), calc(-50% + ${-offsetY}px))`;
//         }
//     }
    
//     function closeZoom() {
//         if (zoomedImage) {
//             zoomedImage.remove();
//             zoomedImage = null;
//             zoomOverlay.style.display = 'none';
//             window.removeEventListener('mousemove', onMouseMove); // Removes the mousemove event listener from the window
//             zoomOverlay.removeEventListener('click', closeZoom);
//         }
//     }
// });

/*-----------------------------*/
/* Contact form error messages and validation */

// const textarea = document.getElementById('message');
// const errorLabel = document.getElementById('too-long-message-error');
// const maxChars = 500;
// const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

// // display in real-time an error message when the text is too long
// textarea.addEventListener('input', () => {
//     if (textarea.value.length > maxChars) {
//         errorLabel.classList.add('active');
//     } else {
//         errorLabel.classList.remove('active');
//     }
// });

// // display errors if the fields are empty or not valid, remove them in real-time when valid
// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('contactForm');
//     const fname = document.getElementById('fname');
//     const lname = document.getElementById('lname');
//     const email = document.getElementById('email');
//     const message = document.getElementById('message');
//     const fnameError = document.getElementById('fname-error');
//     const lnameError = document.getElementById('lname-error');
//     const emailError = document.getElementById('email-error');
//     const messageError = document.getElementById('message-error');
//     const tooLongMessageError = document.getElementById('too-long-message-error');

//     const maxChars = 500; // Maximum characters for the message
//     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Pattern for validating email

//     form.addEventListener('submit', function(event) {
//         event.preventDefault();
//         if (validateFields()) {
//             sendEmail(fname.value, lname.value, email.value, message.value);
//         }
//     });

//   function validateFields() {
//       let valid = true;

//       // Reset all error messages
//       fnameError.classList.remove('active');
//       lnameError.classList.remove('active');
//       emailError.classList.remove('active');
//       messageError.classList.remove('active');
//       tooLongMessageError.classList.remove('active');

//       // Validate first name
//       if (fname.value.trim() === '') {
//           fnameError.classList.add('active');
//           valid = false;
//       }

//       // Validate last name
//       if (lname.value.trim() === '') {
//           lnameError.classList.add('active');
//           valid = false;
//       }

//       // Validate email
//       if (!emailPattern.test(email.value.trim())) {
//           emailError.classList.add('active');
//           valid = false;
//       }

//       // Validate message
//       if (message.value.trim() === '') {
//           messageError.classList.add('active');
//           valid = false;
//       } else if (message.value.length > maxChars) {
//           tooLongMessageError.classList.add('active');
//           valid = false;
//       }

//       return valid;
//   }

//   function sendEmail(fname, lname, email, message) {
//     const fullMessage = `
//     Name: ${fname} ${lname}
//     Email: ${email}
//     Message: ${message}
//     `;

//     Email.send({
//     SecureToken : "9630ca37-463d-4474-9aca-5660686ec0fc",
//     To: 'celia.restes@gmail.com',
//     From: "celia.restes@gmail.com",
//     Subject: "[Contact]",
//     Body: fullMessage

//     }).then(
//         message => {
//             alert("Message sent successfully");
//             window.location.href = 'confirmation.html';
//         }
//     ).catch(
//         message => {
//         alert('Something went wrong')
//         }
//     );
//   }

//   // Reset errors if valid
//     fname.addEventListener('input', function() {
//         if (fname.value.trim() !== '') {
//             fnameError.classList.remove('active');
//         }
//     });

//     lname.addEventListener('input', function() {
//         if (lname.value.trim() !== '') {
//             lnameError.classList.remove('active');
//       }
//     });

//     email.addEventListener('input', function() {
//         if (emailPattern.test(email.value.trim())) {
//             emailError.classList.remove('active');
//         }
//     });

//     message.addEventListener('input', function() {
//         if (message.value.trim() !== '' && message.value.length <= maxChars) {
//             messageError.classList.remove('active');
//             tooLongMessageError.classList.remove('active');
//         }
//     });
// });

