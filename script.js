// Valores asociados a cada imagen
const imageValues = {
    'tabla1.jpg': 8,
    'tabla2.jpg': 2,
    'tabla3.jpg': 4,
    'tabla4.jpg': 1,
    'tabla5.jpg': 16
};

// Selecciona todas las imágenes que pueden ser seleccionadas
const images = document.querySelectorAll('.selectable');
const resultContainer = document.getElementById('result');

// Añadir un evento de click a cada imagen para alternar selección
images.forEach(image => {
    image.addEventListener('click', function() {
        image.classList.toggle('selected'); // Alternar la clase 'selected'
    });
});

// Mostrar solo la suma cuando se presiona el botón
document.getElementById('show-selection').addEventListener('click', function() {
    let totalValue = 0; // Inicializar el valor total

    // Obtener las imágenes seleccionadas
    const selectedImages = document.querySelectorAll('.gallery img.selected');
    if (selectedImages.length === 0) {
        resultContainer.textContent = 'No se seleccionó ninguna imagen.';
    } else {
        selectedImages.forEach(image => {
            const imgSrc = image.getAttribute('src').split('/').pop(); // Obtener el nombre de archivo
            totalValue += imageValues[imgSrc]; // Sumar el valor de la imagen seleccionada
        });

        // Mostrar la suma total
        resultContainer.textContent = `${totalValue}`;

        // Eliminar la selección después de mostrar el resultado
        selectedImages.forEach(image => {
            image.classList.remove('selected'); // Quitar la clase 'selected'
        });
    }
});
