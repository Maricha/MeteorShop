Meteor.publish("featured-products", function(){
  return Products.featured();
});

Meteor.publish("vendors", function(){
  return Vendors.find();
});
