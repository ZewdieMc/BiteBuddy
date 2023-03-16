const itemCounter = () => {
  const items = document.querySelectorAll('.meal');
  const itemsCount = document.querySelector('#itemsCounter');
  itemsCount.textContent = items.length ? `BiteBuddyMeals(${items.length})` : 'BiteBuddy meals';
};

export default itemCounter;
