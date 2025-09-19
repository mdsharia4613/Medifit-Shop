
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

// ৬. সার্চ বার টগল ফাংশন - সার্চ বক্স দেখানো/লুকানো
searchIcone.addEventListener('click',() =>{
    searchInput.classList.toggle('active');
 });   

// const searchIcone = document.getElementById('searchIcon');
// const searchInput = document.getElementById('searchInput');

// // products list (name to id mapping)
// const products = {
//     "section 1": "section-1",
//     "section 2": "section-2",
//     "section 3": "section-3"
// };
// // search function
// function searchProduct() {
//     const query = searchInput.value.toLowerCase().trim();
//     let found = false;

//     for (let name in products){
//         if(name.toLocaleLowerCase().includes(query)){
//             document.getElementById(products[name]).scrollIntoView({behavior:"smooth"});
//             found = true;
//             break;
//         }
//     }
//     if(!found){
//         alert("product not found")
//     }
//     searchInput.value = "";

// }
// // Enter চাপলে সার্চ হবে
//     searchInput.addEventListener('keypress', (e) =>{
//         if(e.key === "Enter"){
//             searchProduct();
//         }
//     });

//  // সার্চ আইকনে ক্লিক করলে সার্চ হবে
 

// const searchInput = document.getElementById('searchInput');
// const searchIcon = document.getElementById('searchIcon');

// searchInput.addEventListener('keypress', (e) => {
//     if(e.key === "Enter") searchProduct();
// });

// searchIcon.addEventListener('click', () => {
//     searchInput.classList.toggle('active');
//     if(searchInput.classList.contains('active')) searchInput.focus();
// });

// function searchProduct() {
//     const query = searchInput.value.toLowerCase().trim();
//     const items = document.querySelectorAll('.section-3-item');
//     let found = false;

//     items.forEach(item => {
//         const name = item.dataset.name.toLowerCase();
//         if(name.includes(query)) {
//             item.scrollIntoView({ behavior: "smooth" });
//             found = true;
//         }
//     });

//     if(!found) {
//         alert("Product not found!");
//     }
    
//     searchInput.value = "";
//     searchInput.classList.remove('active'); // Hide search after search
// }

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