Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route("/", {
    name : "homeIndex",
    data : function() {
        return {
            message: "welcome to the shop"
        }

    }
});

Router.route("/about", {
   name : "homeAbout"
});

Router.route("/contact", {
   name : "homeContact"
});

Router.route("/product/:sku", {
  name : "productShow",
  data : function() {
    return Products.findOne({sku : this.params.sku});
}
});
