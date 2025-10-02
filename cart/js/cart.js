/**
 * @typedef {Object} Product
 * @property {string} name - The name of the product.
 * @property {number} price - The price of the product.
 * @property {number} quantity - The quantity of the product.
 */

/**
 * @typedef {Object} Discount
 * @property {Product} product - The product the discount is applied to.
 * @property {number} discount - The discount percentage applied to the product.
 */
const cart = () => {
  // products = [{ name: 'T-shirt', price: 20, quantity: 2 }, { name: 'Cap', price: 5, quantity: 3 }];
  /**
   * Array of product objects in the cart.
   * @type {Product[]}
   */
  let products = [];
  // discounts = [{ product: { name: 'T-shirt', price: 20, quantity: 2 }, discount: 10 }];
  /**
   * Array of discount objects applied to products.
   * @type {Discount[]}
   */
  let discounts = [];

  /**
   * Adds a product to the product list
   * @param {Product} product - The product to add to the product list
   */
  const addToCart = (product) => {
    // products.push(product);
    products = [...products, product];
  };

  /**
   * Gets the list of products in the cart.
   * @returns {Product[]} The list of products in the cart.
   */
  const getCart = () => products;

  /**
   * Gets the list of discounts applied to the cart.
   * @returns {Discount[]} The list of discounts applied to the cart.
   */
  const getDiscounts = () => discounts;

  /**
   * Get the total price of the products in the cart.
   * @returns {number} The total price of the products in the cart.
   */
  const getTotal = () => {
    const result = products.reduce((accum, product) => {
      return accum + (product.price * product.quantity);
    }, 0);
    return result;
  };

  /**
   * Applies a discount to a product in the cart.
   * @param {string} productName - The name of the product to apply the discount to.
   * @param {string} discount - The discount percentage to apply.
   * @throws {Error} If the product is not found in the product list.
   */
  const applyDiscount = (productName, discount) => {
    const product = products.find(product => (
      productName === product.name
    ));
    // error si no existe
    if (!product) {
      throw new Error(`No existe el producto ${productName}`);
    }
    const discountNumber = parseInt(discount);
    // guardar descuento
    discounts = [...discounts, {
      product,
      discount: discountNumber,
    }];
    // aplicar el descuento al producto
    products = products.map((product) => {
      if (product.name === productName) {
        const priceDiscount = product.price * (discountNumber / 100);
        const price = product.price - priceDiscount;
        return { ...product, price };
      }
      return product;
    });
  };

  /**
   * Removes a product from the cart and any discounts associated with it.
   * @param {string} productName - The name of the product to remove.
   */
  const removeProduct = (productName) => {
    products = products.filter(({ name }) => productName !== name);
    discounts = discounts.filter(discount => (
      discount.product.name !== productName
    ));
  };

  /**
   * Removes a discount applied to a product in the cart.
   * @param {string} productName - The name of the product to remove the discount from.
   */
  const removeDiscount = (productName) => {
    // descuento con el precio original
    const discount = discounts.find(discount => {
      return discount.product.name === productName;
    });
    // borrado del descuento
    discounts = discounts.filter(discount => (
      discount.product.name !== productName
    ));
    // actualizar el producto con el precio original
    const originalPrice = discount.product.price;
    products = products.map(product => {
      if (product.name === productName) {
        return { ...product, price: originalPrice };
      }
      return product;
    });
  };

  return { addToCart, getCart, applyDiscount, getDiscounts, removeDiscount, removeProduct, getTotal };
};

const cart1 = cart();

cart1.addToCart({
  name: 'cap',
  price: 12,
  quantity: 1,
});

const cartBeforeNewProducts = cart1.getCart();
/// black friday
cart1.addToCart({
  name: 'shoe',
  price: 12,
  quantity: 1,
});

console.log(cartBeforeNewProducts);
console.log(cart1.getCart());
console.log(cart1.getDiscounts());
cart1.removeProduct('shoe');
cart1.applyDiscount('cap', '20');
console.log(cart1.getCart());

export default cart;