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
});
