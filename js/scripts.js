$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
      const variable1 = $("input:radio[name=variable1]:checked").val();
  }
}