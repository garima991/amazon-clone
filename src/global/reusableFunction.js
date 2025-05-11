export function addToCart(productToAdd, currentCart, updateCart) {
  let product = currentCart.find(
    (item) => item.product_id === productToAdd.product_id
  );

  if (product) {
    const updatedProduct = {
      ...product,
      quantity: product.quantity + 1,
      selected: true,
    };
    updateCart(
      currentCart.map((item) =>
        item.product_id !== updatedProduct.product_id ? item : updatedProduct
      )
    );
  } else {
    updateCart([
      ...currentCart,
      { ...productToAdd, quantity: 1, selected: true },
    ]);
  }
}

export function removeFromCart(productToRemove, currentCart, updateCart) {
  let product = currentCart.find(
    (item) => item.product_id === productToRemove.product_id
  );

  if (product) {
    if (product.quantity > 1) {
      const updatedProduct = { ...product, quantity: product.quantity - 1 };
      updateCart(
        currentCart.map((item) =>
          item.product_id !== updatedProduct.product_id ? item : updatedProduct
        )
      );
    } else {
      updateCart(
        currentCart.filter((item) => item.product_id !== product.product_id)
      );
    }
  }
}

export function changeCartSelection(product, currentCart, updateCart) {
  console.log(product, "Toggle");
  const updatedProduct = { ...product, selected: !product.selected };
  updateCart(
    currentCart.map((item) =>
      item.product_id !== product.product_id ? item : updatedProduct
    )
  );
}

export const validateEmail = (email, setError) => {
  if (!email) {
    setError("Email is required!");
    return false;
  } else if (!email.includes("@")) {
    setError("Email must contain @ symbol!");
    return false;
  } else if (!email.includes(".")) {
    setError("Email must contain . symbol!");
    return false;
  } else if (email.includes(" ")) {
    setError("Email must not contain spaces!");
    return false;
  } else {
    setError(null);
    return true;
  }
};

export const validatePassword = (password, setError) => {
  if (!password) {
    setError("Password is required!");
    return false;
  } else if (password.length < 6) {
    setError("Password must be atleast 6 characters long!");
    return false;
  } else if (password.includes(" ")) {
    setError("Password must not contain spaces!");
    return false;
  } else {
    setError(null);
    
    return true;
  }
};
