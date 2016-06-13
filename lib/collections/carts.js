Carts = new Mongo.Collection("carts");

Carts.getCart = function(userKey) {
  var cart = Carts.findOne({userKey: userKey});
  if(!cart) {
    cart = {
      userKey : userKey,
      created_at : new Date(),
      itemCount: 0,
      total : 0,
      items : [],
      notes : []
    };
    Carts.insert(cart);
  }
  return cart;
};
