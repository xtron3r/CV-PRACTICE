$(document).ready(function() {

    // Función para agregar o remover la clase 'loaded' según la visibilidad
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                $(entry.target).addClass('loaded');
            } else {
                $(entry.target).removeClass('loaded');
            }
        });
    }

    const options = {
        root: null, // El viewport
        rootMargin: '0px',
        threshold: 0.1 // Ejecutar la función cuando al menos el 10% del elemento sea visible
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    $('.img-tech').each(function() {
        observer.observe(this);
    });
    $('.img-tech').each(function() {
        observer.observe(this);
    });

})