// Function to scroll to a specific section smoothly
function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
        window.scrollTo({
            behavior: 'smooth',
            top: targetSection.offsetTop,
        });
    }
}

// Add click event listeners for all navigation links
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Remove the '#' from the href
        scrollToSection(targetId);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to scroll to the header section
    function scrollToHeader() {
        const headerSection = document.getElementById('header');
        if (headerSection) {
            window.scrollTo({
                top: headerSection.offsetTop,
                behavior: 'smooth',
            });
        }
    }

    // Show or hide the "scroll to top" button based on scroll position
    window.addEventListener('scroll', function() {
        const scrollToTopButton = document.getElementById('scrollToTopButton');
        if (window.scrollY > 500) { // Adjust this value to control when the button appears
            scrollToTopButton.style.display = 'block';
            scrollToTopButton.style.opacity = '1';
        } else {
            scrollToTopButton.style.opacity = '0';
        }
    });

    // Add a click event listener to the button to scroll to the header when clicked
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    scrollToTopButton.addEventListener('click', scrollToHeader);
});

let currentImage = 4;

function showImage(imageNumber) {
    // Hide all images
    document.getElementById("image1").style.display = "none";
    document.getElementById("image2").style.display = "none";
    document.getElementById("image3").style.display = "none";
    document.getElementById("image4").style.display = "none";
    document.getElementById("image5").style.display = "none";
    document.getElementById("image6").style.display = "none";
    document.getElementById("image7").style.display = "none";

    // Show the selected image
    document.getElementById("image" + imageNumber).style.display = "block";

    // Update active tab
    const tabs = document.querySelectorAll(".image-tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    tabs[imageNumber - 1].classList.add("active");

    // Update information based on the image tab
    const infoSection = document.querySelector(".info-section-3");
    const title = infoSection.querySelector("h3");
    const info = infoSection.querySelector("p");

    if (imageNumber === 4) {
        title.innerText = "Game design"; 
        info.innerText = "My most proud project is Heart of the Void, which I worked on as a game designer for many years and won the runner-up prize in a national competition. The game features a side-scrolling gameplay mechanic with a multiverse concept, and I am responsible for the game graphics.";
    } else if (imageNumber === 5) {
        title.innerText = "Pixel art";
        info.innerText = "The retro graphics games of today, which combine 90s videogame graphics with a distinct current art style, served as my inspiration. I decided to study pixel art for two years and beyond since I felt that it would help my work's art design. Now I have over thirty pieces of my original pixel art.";
    } else if (imageNumber === 6) {
        title.innerText = "3D modeling";
        info.innerText = "I also have experience making 3D models, so I put those talents to use designing an IOT for a Codekathon competition, as well as for commissions and personal game projects.";
    } else if (imageNumber === 7) {
        title.innerText = "3D print design";
        info.innerText = "I recently had a project that required me to use HuskyLens A.I. automatically, so I had the chance to work with others and use my 3D modeling expertise to develop the robot that collected balls.";
    }

    currentImage = imageNumber;
}

function showNextImage() {
    // Increment currentImage
    currentImage++;
    
    // If it goes beyond the maximum image number, loop back to the first image
    if (currentImage > 7) {
        currentImage = 4;
    }
    
    // Call the showImage function with the updated currentImage
    showImage(currentImage);
}

// Call showImage with an initial image, for example:
showImage(4);


