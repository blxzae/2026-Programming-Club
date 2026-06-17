const addButton = document.getElementById('add-auction-btn');
const nameInput = document.getElementById('name');
const priceInput = document.getElementById('price');
const auctionsList = document.getElementById('auctions-list');

let auctionCount = 0;

addButton.addEventListener('click', function() {
  const name = nameInput.value;
  const price = priceInput.value;

  auctionCount = auctionCount + 1;

  const auctionItem = document.createElement('p');
  auctionItem.textContent = auctionCount + '. ' + name + ' - $' + price;

  auctionsList.appendChild(auctionItem);

  nameInput.value = '';
  priceInput.value = '';
});