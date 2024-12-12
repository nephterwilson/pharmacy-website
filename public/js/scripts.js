document.addEventListener('DOMContentLoaded', () => {
    // Example: Handle product search
    const searchInput = document.getElementById('searchInput');
    const productCards = document.querySelectorAll('.product');
    
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      
      productCards.forEach(card => {
        const productName = card.querySelector('h3').innerText.toLowerCase();
        if (productName.includes(searchTerm)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
  