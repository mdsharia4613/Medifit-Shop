
// ৪. হিরো সেকশনের "Shop Now" বাটনের ফাংশন

document.getElementById('shopNowBtn').addEventListener('click', () =>{
    const section = document.getElementById('section-1');
    if(section){
        section.scrollIntoView({behavior: "smooth"});
    }
})
// ৫. মোবাইল মেনু টগল ফাংশন - ছোট স্ক্রিনে মেনু দেখানো/লুকানো

const mobileBtn = document.getElementById("mobile-menu-btn");
const navLinks = document.getElementById("nav-links");

mobileBtn.addEventListener('click', () =>{
    navLinks.classList.toggle("active");
});


// Search Toggle + Search Product
const searchInput = document.getElementById('searchInput');
const searchIcon = document.getElementById('searchIcon');
const items = document.querySelectorAll('.section-3-item');

// 🔍 Product Search Function (Arrow + ES6)
const searchProduct = () => {
  const query = searchInput.value.toLowerCase().trim();
  let found = false;

  items.forEach(item => {
    const { name } = item.dataset; // Destructuring
    if (name.toLowerCase().includes(query)) {
      item.scrollIntoView({ behavior: "smooth", block: "center" });
      found = true;
    }
  });

  if (!found) alert(`❌ "${query}" not found!`);

  searchInput.value = "";
  searchInput.classList.remove('active');
};

// Enter key trigger
searchInput?.addEventListener('keypress', e => e.key === "Enter" && searchProduct());

// Click icon trigger
searchIcon?.addEventListener('click', () => {
  searchInput.classList.toggle('active');
  if (searchInput.classList.contains('active')) searchInput.focus();
  else if (searchInput.value) searchProduct();
});


