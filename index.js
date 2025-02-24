fetch('https://dog.ceo/api/breeds/image/random')
.then(response => {
    return response.json();
})
.then(data => {
    // console.log(data);
    const image = document.createElement('img');
    image.src = data.message; 
    let rac = data.message.split('/')
    // console.log(rac)
    const h1 = document.createElement('h1');
    h1.innerHTML = rac[4] 

    document.getElementById('img').appendChild(h1);
    document.getElementById('img').appendChild(image);
})
.catch(error => console.error('Erreur : ', error));
    