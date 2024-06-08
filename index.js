window.addEventListener('resize', adjustImageSizes);

function adjustImageSizes() {
    const container = document.querySelector('.container');
    const images = document.querySelectorAll('.image img');
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    const imageWidth = (containerWidth / images.length) - 2; 
    const imageHeight = containerHeight;

    images.forEach(img => {
        img.style.width = `${imageWidth}px`;
        img.style.height = `${imageHeight}px`;
    });
}

adjustImageSizes();
