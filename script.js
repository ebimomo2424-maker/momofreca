const gallery = document.getElementById("gallery");

cards.forEach(card => {

gallery.innerHTML += `

<div class="card">

<img src="${card.image}">

<h3>${card.title}</h3>

<p>${card.subtitle}</p>

</div>

`;

});
