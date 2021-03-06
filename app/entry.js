'use strict';
import $ from 'jquery';
const global = Function('return this;')();
global.jQuery = $;
// import bootstrap from 'bootstrap';

$('.availability-toggle-button').each((i, e) => {
  const button = $(e);
  button.click(() => {
    const scheduleId = button.data('schedule-id');
    const userId = button.data('user-id');
    const candidateId = button.data('candidate-id');
    const availability = parseInt(button.data('availability'));
    const nextAvailability = (availability + 1) % 3;
    $.post(
      `/schedules/${scheduleId}/users/${userId}/candidates/${candidateId}`,
      { availability: nextAvailability },
      data => {
        button.data('availability', data.availability);
        const availabilityLabels = ['欠', '？', '出'];
        button.text(availabilityLabels[data.availability]);

        const buttonStyles = ['btn-danger', 'btn-secondary', 'btn-success'];
        button.removeClass('btn-danger btn-secondary btn-success');
        button.addClass(buttonStyles[data.availability]);
      });
  });
});

const buttonSelfComment = $('#self-comment-button');
buttonSelfComment.click(() => {
  const scheduleId = buttonSelfComment.data('schedule-id');
  const userId = buttonSelfComment.data('user-id');
  const comment = prompt('コメントを255文字以内で入力してください。');
  if (comment) {
    $.post(`/schedules/${scheduleId}/users/${userId}/comments`,
      { comment: comment },
      (data) => {
        $('#self-comment').text(data.comment);
      });
  }
});

//Page cursors
document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
  t.style.left = n.clientX + "px", 
  t.style.top = n.clientY + "px", 
  e.style.left = n.clientX + "px", 
  e.style.top = n.clientY + "px", 
  i.style.left = n.clientX + "px", 
  i.style.top = n.clientY + "px"
  });
  var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2"),
    i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
}
function s(t) {
  e.classList.remove("hover"), i.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
  o(r[a])
}
function o(t) {
  t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}

//Navigation
var app = function () {
var body = undefined;
var menu = undefined;
var menuItems = undefined;
var init = function init() {
  body = document.querySelector('body');
  menu = document.querySelector('.menu-icon');
  menuItems = document.querySelectorAll('.nav__list-item');
  applyListeners();
};
var applyListeners = function applyListeners() {
  menu.addEventListener('click', function () {
    return toggleClass(body, 'nav-active');
  });
};
var toggleClass = function toggleClass(element, stringClass) {
  if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
};
init();
}();

//Switch light/dark
$("#switch").on('click', function () {
	if ($("body").hasClass("light")) {
		$("body").removeClass("light");
		$("#switch").removeClass("switched");
	}
	else {
		$("body").addClass("light");
		$("#switch").addClass("switched");
	}
});