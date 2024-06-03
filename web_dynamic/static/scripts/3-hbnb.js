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
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    type: 'POST',
    contentType: 'application/json',
    dataType: 'json',
    data: '{}',
    success: function (data) {
      for (const place of data) {
        $('.places').append(
          '<article><div class="title_box"><h2>' + place.name +
          '</h2><div class="price_by_night">$' + place.price_by_night +
          '</div></div><div class="information"><div class="max_guest">' + place.max_guest +
          ' Guests</div><div class="number_rooms">' + place.number_rooms +
          ' Rooms</div><div class="number_bathrooms">' + place.number_bathrooms +
          ' Bathrooms</div></div><div class="user"><b>Owner:</b></div><div class="description">' + place.description +
          '</div></article>');
      }
    }
  });
});
