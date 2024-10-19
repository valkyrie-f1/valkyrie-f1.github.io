var carrousel;

document.addEventListener("DOMContentLoaded", function() {
    carrousel = document.getElementById("carrousel");

    window.onmousedown = e => handleOnDown(e);
    window.onmouseup = e => handleOnUp(e);
    window.onmousemove = e => handleOnMove(e);

    window.ontouchstart = e => handleOnDown(e.touches[0]);
    window.ontouchend = e => handleOnUp(e.touches[0]);
    window.ontouchmove = e => handleOnMove(e.touches[0]);

    const handleOnDown = e => carrousel.dataset.mouseDownAt = e.clientX;

  const handleOnUp = () => {
    carrousel.dataset.mouseDownAt = "0";  
    carrousel.dataset.prevPercentage = carrousel.dataset.percentage;
  }

  const handleOnMove = e => {
    if(carrousel.dataset.mouseDownAt === "0") return;
    
    const mouseDelta = parseFloat(carrousel.dataset.mouseDownAt) - e.clientX, maxDelta = window.innerWidth * (0.4);
    
    const percentage = (mouseDelta / maxDelta) * -100,
          nextPercentageUnconstrained = parseFloat(carrousel.dataset.prevPercentage) + percentage,
          nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
    
    carrousel.dataset.percentage = nextPercentage;
    
    carrousel.animate({transform: `translate(${nextPercentage}%, -50%)`}, { duration: 1200, fill: "forwards" });
    
    for(const image of carrousel.getElementsByClassName("image")) {
      image.animate({objectPosition: `${100 + nextPercentage}% center`}, { duration: 1200, fill: "forwards" });
    }
  }
});
