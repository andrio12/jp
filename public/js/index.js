var myViewModel = {
    personName: ko.observable('Andri'),
    personAge: ko.observable(33)
};

$(document).ready(function() {
  ko.applyBindings(myViewModel);
});
