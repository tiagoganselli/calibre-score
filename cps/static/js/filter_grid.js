/* This file is part of the Calibre-Web (https://github.com/janeczku/calibre-web)
 *    Copyright (C) 2018 OzzieIsaacs
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

var $list = $("#list").isotope({
    itemSelector: ".book",
    layoutMode: "fitRows",
    getSortData: {
        title: ".title",
    }
});

$("#desc").click(function() {
    var page = $(this).data("id");
    $.ajax({
        method:"post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: window.location.pathname + "/../../ajax/view",
        data: "{\"" + page + "\": {\"dir\": \"desc\"}}",
    });
    $list.isotope({
        sortBy: "name",
        sortAscending: true
    });
    return;
});

$("#asc").click(function() {
    var page = $(this).data("id");
    $.ajax({
        method:"post",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        url: window.location.pathname + "/../../ajax/view",
        data: "{\"" + page + "\": {\"dir\": \"asc\"}}",
    });
    $list.isotope({
        sortBy: "name",
        sortAscending: false
    });
    return;
});

$("#all").click(function() {
    // go through all elements and make them visible
    $list.isotope({ filter: function() {
        return true;
      } })
});

$(".char").click(function() {
    var character = this.innerText;
    $list.isotope({ filter: function() {
        return this.attributes["data-id"].value.charAt(0).toUpperCase() == character;
      } })
});
