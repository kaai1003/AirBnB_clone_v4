/* global $ */
$(document).ready(function () {
  const amenitiesfilters = {};
  $('input[type="checkbox"]').change(function () {
    const id = $(this).attr('data-id');
    const name = $(this).attr('data-name');
    if (this.checked) {
      amenitiesfilters[id] = name;
    } else {
      delete amenitiesfilters[id];
    }
    const filterlist = Object.values(amenitiesfilters);
    if (filterlist.length > 0) {
      $('div.amenities > h4').text(filterlist.join(', '));
    } else {
      $('div.amenities > h4').html('&nbsp;');
    }
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
