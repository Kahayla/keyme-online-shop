const getProducts = async () => {
  // Use the following URL for your fetch request
  const url = `${process.env.REACT_APP_API_URL}/products`;

  // Fetch products and prices from the Stripe API
  const response = await fetch(url);
  console.log(response);
  const products = await response.json();
  console.log(products);
  return products;
};

export { getProducts };
