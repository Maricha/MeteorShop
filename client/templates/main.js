UI.registerHelper("money", function(amount){
  return accounting.formatMoney(12345678);
});

UI.registerHelper("markdown", function(text){
  var converter = new showdown.Converter();
  return converter.makeHtml(text);
});
