/* global TestClient */
(function() {

  function reset() {
    document.getElementById('scratch').innerHTML = '';
  }

  TestClient.run({
    name: 'Baseline: Render List',
    noEmber: true,
    reset: reset,

    test: function() {
      var html = "<table>";

      TestClient.PEOPLE_JSON.forEach(function(p) {
        html += "<tr class='row'>" +
                  "<td class='name'>" + p.name + "</td>" +
                  "<td class='email'>" + p.email + "</td>" +
                  "<td class='company'>" + p.company + "</td>" +
                  "<td class='city'>" + p.city + "</td>" +
                  "<td class='url'><a href='" + p.url + "'>Link</a></td>" +
                "</tr>";
      });

      html += "</table>";
      document.getElementById('scratch').innerHTML = html;
    }
  });

})();
