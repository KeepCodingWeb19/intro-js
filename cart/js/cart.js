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
  };

  /**
   * Applies a discount to a product in the cart.
   * @param {string} productName - The name of the product to apply the discount to.
   * @param {string} discount - The discount percentage to apply.
   * @throws {Error} If the product is not found in the product list.
   */
  const applyDiscount = (productName, discount) => {
  };

  /**
   * Removes a product from the cart and any discounts associated with it.
   * @param {string} productName - The name of the product to remove.
   */
  const removeProduct = (productName) => {
  };

  /**
   * Removes a discount applied to a product in the cart.
   * @param {string} productName - The name of the product to remove the discount from.
   */
  const removeDiscount = (productName) => {
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


export default cart;