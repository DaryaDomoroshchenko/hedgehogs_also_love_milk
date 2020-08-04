import "./index.css";
import * as $ from 'jquery';

// Закрывает попапы
function closePopup(elem) {
  elem.classList.add('root__hide');
};

// Открывает попапы
function openPopup(elem) {
  elem.classList.remove('root__hide');
};

// Купить ежа
const feedbackPopup = document.querySelector('.feedback-popup');
const buyButton = document.querySelector('.lead__button');
const writeUsButton = document.querySelectorAll('.contacts__caption');
const closeFeedbackButton = document.querySelectorAll('.feedback-popup__close');

buyButton.addEventListener('click', () => {
  openPopup(feedbackPopup);
});

writeUsButton.forEach((item) => { item.addEventListener('click', () => {
  openPopup(feedbackPopup);
  })
});

closeFeedbackButton.forEach((item) => { item.addEventListener('click', () => {
  closePopup(feedbackPopup)
  })
});

// Мини-меню
const menuPopup = document.querySelector('.menu-popup');
const menuButton = document.querySelector('.header__burger-menu');
const closeMenuButton = document.querySelector('.menu-popup__close');

menuButton.addEventListener('click', () => {
  openPopup(menuPopup);
});

closeMenuButton.addEventListener('click', () => {
  closePopup(menuPopup);
});


// Валидация формы
$(document).ready(() => {

  function validateForm() {
    if (($('#buyCheckbox').is(':checked') & ($('#careCheckbox').is(':checked'))) & ($('#detailsCheckbox').is(':checked'))){
      $('#inputName').attr('disabled', 'disabled');
      $('.feedback-popup__button').removeAttr('disabled');
      $('#detailsCheckbox').removeAttr('disabled');
    }
    else if (($('#buyCheckbox').is(':checked') & ($('#careCheckbox').is(':checked')))){
      $('#detailsCheckbox').attr('disabled', 'disabled');
      $('.feedback-popup__button').removeAttr('disabled');
      $('#inputName').removeAttr('disabled');
    }
    else if ($('#buyCheckbox').is(':checked')){
      $('.feedback-popup__button').attr('disabled', 'disabled');
      $('#detailsCheckbox').removeAttr('disabled');
      $('#inputName').removeAttr('disabled');
    }
    else {
      $('.feedback-popup__button').removeAttr('disabled');
      $('#detailsCheckbox').removeAttr('disabled');
      $('#inputName').removeAttr('disabled');
    }
  }

  $('input:checkbox').on('change', validateForm);

});
