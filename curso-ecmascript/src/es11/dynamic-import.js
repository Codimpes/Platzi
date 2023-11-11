const button = document.getElementById('btn');

button.addEventListener('click', async function () {
    try {
        const module = await import('./module.js');
        console.log(module);
        module.hello();
    } catch (error) {
        console.error(error);
    }
});