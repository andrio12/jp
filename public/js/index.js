var myViewModel = function() {

  self = this;

  self.personName = ko.observable('Andri');
  self.personAge = ko.observable(33);

  self.itemToAdd = ko.observable("");
  //self.priceToAdd = ko.observable("");
  self.allItems = ko.observableArray([]); // Initial items
  self.selectedItems = ko.observableArray([]); // Initial selection

  self.addItem = function() {
    if((self.itemToAdd != "") && (self.allItems.indexOf(self.itemToAdd()) < 0)) // Prevent blanks and duplicates
      self.allItems.push(self.itemToAdd());
    self.itemToAdd(""); //clear the text box
  };

  self.removeSelected = function() {
    self.allItems.removeAll(self.selectedItems());
    self.selectedItems([]); //clear selection
  };

  self.sortItems = function() {
    self.allItems.sort();
  };

  // This observable array initially contains three objects
  self.anotherObservableArray = ko.observableArray([
      { name: "Bungle", type: "Bear" },
      { name: "George", type: "Hippo" },
      { name: "Zippy", type: "Unknown" }
  ]);
};

$(document).ready(function() {
  ko.applyBindings(new myViewModel);
});
