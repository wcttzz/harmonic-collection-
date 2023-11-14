document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.getElementById('text');
    const destroyButton = document.getElementById('btn');
    const newButton = document.getElementById('newButton'); 

    destroyButton.addEventListener('click', function() {
        let words = textElement.innerText.split(/\s+/);
        textElement.innerHTML = '';

        words.forEach(word => {
            let span = document.createElement('span');
            span.innerText = word + ' ';
            span.classList.add('floating');
           
            span.style.setProperty('--random-delay', Math.random() * 2 + 's');
            span.style.setProperty('--random-duration', Math.random() * 3 + 2 + 's');
            span.style.setProperty('--random-x', Math.random() * 500 - 250 + 'px');
            span.style.setProperty('--random-y', Math.random() * 500 - 250 + 'px');
            textElement.appendChild(span);
        });

       
        newButton.style.display = 'block'; 
    });
});
