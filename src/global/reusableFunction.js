export function addToCart(productToAdd, currentCart, updateCart) {
  let product = currentCart.find(
    (item) => item.product_id === productToAdd.product_id
  ); 

  if(product){
    product = { ...product, quantity: product.quantity+1 , selected : true};
    updateCart(
      currentCart.map((item) =>
        item.product_id != product.product_id ? item : product
      )
  );
  }else{
    updateCart([...currentCart,{...productToAdd, quantity:1, selected:true}])
  }
  
}

export function removeFromCart(productToRemove, currentCart, updateCart) {
  let product = currentCart.find(
    (item) => item.product_id === productToRemove.product_id
  );

  if(product){
    if (product.quantity > 1) {
      product = { ...product, quantity : product.quantity-1};
      updateCart(
        currentCart.map((item)=>
           item.product_id !== product.product_id ? item : product
        )
      );
    } else
      updateCart(currentCart.filter((item) => item.product_id != product.product_id));
  }
  
}

export function changeCartSelection(product, currentCart, updateCart) {
  console.log(product, "Toggle");
  const updatedProduct = { ...product, selected: !product.selected};
  updateCart(
    currentCart.map((item) =>
      item.product_id != product.product_id ? item : updatedProduct
    )
  );
}
