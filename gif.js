var gif = new GIF({
    workers: 2,
    quality: 10
});

gif.addFrame(imageElement);

gif.addFrame(canvasElement, {delay: 200});

gif.on('finished' , function(blob) {
    window.open(URL.createObjectURL(blob))
});

gif.render();