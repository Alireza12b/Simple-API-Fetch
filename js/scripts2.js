fetch('https://6347eca8db76843976b5e973.mockapi.io/todos')
  .then(response => response.json())
  .then(data => {
    const cardContainer = document.getElementById('cardContainer');
    data.forEach(item => {
      const id = item.id;
      const title = item.title;
      const description = item.description;

      const card = document.createElement('div');
      card.className = 'card';
      card.id = `card_${id}`;
      const titleElement = document.createElement('h3');
      titleElement.innerHTML = '<strong>title : </strong>' + title;
      const descriptionElement = document.createElement('p');
      descriptionElement.innerHTML = '<strong>description : </strong>' + description;
      const imageElement = document.createElement('img');
      imageElement.src = 'img/trash.png';
      imageElement.className = 'card-image';
      imageElement.dataset.id = id;

      card.appendChild(titleElement);
      card.appendChild(descriptionElement);
      card.appendChild(imageElement);
      cardContainer.appendChild(card);

      imageElement.addEventListener('click', () => {
        deleteCard(id);
      });
    });

    const deleteAllButton = document.getElementById('deleteAllButton');
    deleteAllButton.addEventListener('click', deleteAllCards);

    function deleteCard(id) {
      const cardElement = document.getElementById(`card_${id}`);
      if (cardElement) {
        cardElement.remove();
      }
    }

    function deleteAllCards() {
      const cardElements = document.querySelectorAll('.card');
      cardElements.forEach(cardElement => cardElement.remove());
    }
  });