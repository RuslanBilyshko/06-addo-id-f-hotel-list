(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var test = require('./test/test');

module.exports = test.concat([
  {
    id: 1,
    name: 'bill'
  },
  {
    id: 120,
    name: 'bill120'
  },
  {
    id: 55066666,
    name: 'bill120rtrty'
  }
])

},{"./test/test":3}],2:[function(require,module,exports){
"use strict";

var data = require('./data');

$(function () {

    function render_row(id, img, title, star, address, price) {
        var result = "<div id='row-" + id + "' class='list__row '>";
        result += "<div class='list__row__img col-sm-3'>";
        result += "<img src='build/" + img + "' alt='' class='img-responsive'>";
        result += "</div>";
        result += "<div class='info list__row__info col-sm-9'>";
        result += "<div class='info__button pull-right'>";
        result += "<button data-id='" + id + "' class='btn btn-default btn_clear'></button>";
        result += "</div>";
        result += "<h3 class='info__title'><a href='#'>" + title + "</a></h3>";
        result += "<div class='info__star'>";

        for (var i = 1; i <= star; i++) {
            result += "<span class='star'></span>";
        }result += "</div>";
        result += "<div class='info__address'><p>" + address + "</p></div>";
        result += "<div class='info__price'>" + price + " грн.</div>";
        result += "<div class='info__button pull-right'>";
        result += "<button id='btn_select' class='btn btn-success'>Select</button>";
        result += "</div>";
        result += "</div>";

        return result;
    }

    function render_list(dataList, dataContainer) {

        dataContainer.empty();

        dataList.forEach(function (item) {

            dataContainer.append(render_row(item.id, item.image, item.name, item.start, item.address, item.price));
        });
    }

    function add_to_list(dataList, data) {

        var result = {};

        for (var i = 0; i < data.length; i++) {
            result[data[i].name] = data[i].value;
            event.preventDefault();
        }

        result.id = hotelList[0].id + 1;

        dataList.unshift(result);
    }

    var hotelList = [{
        id: 1005,
        name: "Готельный комплекс \"Киев\"",
        address: "улица Институтская 4, Киев, 01001, Украина",
        start: 5,
        price: 100,
        image: "images/1.jpg"
    }, {
        id: 1004,
        name: "Готельный комплекс \"Киев\"",
        address: "улица Институтская 4, Киев, 01001, Украина",
        start: 4,
        price: 100,
        image: "images/2.jpg"
    }, {
        id: 1003,
        name: "Готельный комплекс \"Киев\"",
        address: "улица Институтская 4, Киев, 01001, Украина",
        start: 5,
        price: 100,
        image: "images/3.jpg"
    }, {
        id: 1002,
        name: "Готельный комплекс \"Киев\"",
        address: "улица Институтская 4, Киев, 01001, Украина",
        start: 3,
        price: 100,
        image: "images/4.jpg"
    }, {
        id: 1001,
        name: "Готельный комплекс \"Киев\"",
        address: "улица Институтская 4, Киев, 01001, Украина",
        start: 2,
        price: 100,
        image: "images/5.jpg"
    }];

    var listContainer = $("#list-container");

    render_list(hotelList, listContainer);

    var addHotelForm = $('.add-hotel-wrapper');
    var addHotelBtn = $(".add-hotel-btn");

    addHotelBtn.on("click", function (e) {
        $.fancybox.open(addHotelForm);
    });

    $("#add-hotel").submit(function (event) {

        var data = $(this).serializeArray();
        add_to_list(hotelList, data);
        render_list(hotelList, listContainer);
        $.fancybox.close(addHotelForm);
        event.preventDefault();
    });

    listContainer.on("click", ".btn_clear", function () {
        var id = $(this).attr('data-id');
        hotelList = hotelList.filter(function (item) {
            return item.id != id;
        });

        render_list(hotelList, listContainer);
    });
});
},{"./data":1}],3:[function(require,module,exports){
module.exports = [
  {
    id: 6000,
    name: 'bill'
  },
  {
    id: 6001,
    name: 'bill120'
  },
  {
    id: 6002,
    name: 'bill120rtrty'
  }
]

},{}]},{},[2])