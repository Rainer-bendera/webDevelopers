const wrapper = document.querySelector(".wrapper");
const corousel = document.querySelector(".corousel");
const images = document.querySelectorAll(".img");
const button = document.querySelectorAll(".button");


let imagesIndex = 1,
intervalId;

//define function for start automatic slider
const autoSlide = () =>{
    //start  slide by calling slideImage() every 2 seconds
    intervalId = setInterval(() => slideImage(++imagesIndex), 2000);
};

//call autoslide function on page load
autoSlide();

//function that update the corousel display to show the specific image
const slideImage = () =>{
    //calculate the update image index
    imagesIndex = imagesIndex === images.length ? 0 : imagesIndex < 0 ? images.length - 1: imagesIndex;

    //update the image corousel to display specific image
    corousel.style.transform = `translate(-${imagesIndex * 100}%)`
};

//function that update corousel to display the next or previous image
const updateClick = (e) => {
    //stop the automatic slideshow
    clearInterval(intervalId);
    
    //calculate the update image index based on the button clicked
    imagesIndex += e.target.id === "next" ? 1 : -1;
    slideImage(imagesIndex);
    autoSlide();
}

//adding the event listerner to the navigation button
button.forEach(button => {
    button.addEventListener("click", updateClick)})

// add mousemover event listerner to wrapper element to stop
wrapper.addEventListener("mouseover", () => clearInterval(intervalId));

// add mousemover event listerner to wrapper element to stop
wrapper.addEventListener("mouseleave", () => autoSlide());                                                                                                                      