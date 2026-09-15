
let cart = [];

function addToCart(name, price) {
  cart.push({ name, price });

  document.getElementById('cart-count').textContent = cart.length;

  alert(`${name} ถูกเพิ่มลงตะกร้าแล้ว 🛒`);
}

function showCart() {
  if (cart.length === 0) {
    alert('ตอนนี้ยังไม่มีสินค้าในตะกร้า');
    return;
  }

  let total = cart.reduce((sum, item) => sum + item.price, 0);

  let items = cart
    .map((item, index) => `${index + 1}. ${item.name} - ฿${item.price.toLocaleString()}`)
    .join('\n');

  alert(`สินค้าในตะกร้า:\n\n${items}\n\nรวมทั้งหมด: ฿${total.toLocaleString()}`);
}