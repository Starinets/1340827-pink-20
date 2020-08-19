(() => {
  const menuContainer = document.querySelector('.logo');
  const menuItem = document.querySelector('#menu');
  const menuButton = menuContainer.querySelector('.logo__btn');

  window.addEventListener('load', () => {
    menuContainer.classList.remove('logo--active');
    menuItem.classList.remove('menu--active');
    menuButton.classList.remove('logo__btn--close');
  });

  menuButton.addEventListener('click', evt => {
    menuContainer.classList.toggle('logo--active');
    menuItem.classList.toggle('menu--active');
    menuButton.classList.toggle('logo__btn--close');
  });
})();

(() => {
  const sliderContainer = document.querySelector('#slider');

  if (sliderContainer !== null) {
    const sliderList = sliderContainer.querySelectorAll('.slider__item');
    const sliderController = sliderContainer.querySelector('.slider__controls');
    const sliderToggles = Array.from(sliderController.children);

    let currentSlide = 0;
    let nextSlide = 1;

    const changeSlide = () => {
      sliderList[currentSlide].classList.remove('slider__item--active');
      sliderList[nextSlide].classList.add('slider__item--active');
      sliderToggles[currentSlide].classList.remove('slider__toggle--active');
      sliderToggles[nextSlide].classList.add('slider__toggle--active');
    }

    sliderController.addEventListener('click', evt => {
      nextSlide = sliderToggles.indexOf(evt.target);
      if (nextSlide !== -1) {
        const sliderToggleActive = sliderContainer.querySelector('.slider__toggle--active');
        currentSlide = sliderToggles.indexOf(sliderToggleActive);
        changeSlide();
      }
    });

    sliderContainer.addEventListener('click', evt => {
      if (evt.target.classList.contains('slider__btn--left')) {
        const sliderSlideActive = sliderContainer.querySelector('.slider__item--active');
        currentSlide = Array.from(sliderList).indexOf(sliderSlideActive);

        if (currentSlide > 0) {
          nextSlide = currentSlide - 1;
          changeSlide();
        }
      }

      if (evt.target.classList.contains('slider__btn--right')) {
        const sliderSlideActive = sliderContainer.querySelector('.slider__item--active');
        currentSlide = Array.from(sliderList).indexOf(sliderSlideActive);

        if (currentSlide < sliderList.length - 1) {
          nextSlide = currentSlide + 1;
          changeSlide();
        }
      }
    });
  }
})();

(() => {
  const formContest = document.querySelector('.contest');

  if (formContest) {
    const userSurname = formContest.querySelector('#contest__user-surname');
    const userName = formContest.querySelector('#contest__user-name');
    const userSecondname = formContest.querySelector('#contest__user-secondname');
    const userEmail = formContest.querySelector('#contest__contacts-email');
    const userTel = formContest.querySelector('#contest__contacts-tel');
    const userComment = formContest.querySelector('#contest__comment-text');
    const btnContestSubmit = formContest.querySelector('#btn-submit-contest');

    const modalMessage = formContest.querySelector('.contest__modal-message');
    const btnModalMessage = modalMessage.querySelector('.modal__btn');

    const modalError = formContest.querySelector('.contest__modal-error');
    const btnModalError = modalError.querySelector('.modal__btn');

    if (btnContestSubmit) {
      btnContestSubmit.addEventListener('click', evt => {
        evt.preventDefault();

        let validationForm = true;

        userSurname.classList.remove('input-error');
        userName.classList.remove('input-error');
        userEmail.classList.remove('input-error');

        if (userSurname.value === '') {
          userSurname.classList.add('input-error');
          validationForm = false;
        }

        if (userName.value === '') {
          userName.classList.add('input-error');
          validationForm = false;
        }

        if (userEmail.value === '') {
          userEmail.classList.add('input-error');
          validationForm = false;
        }

        if (validationForm) {
          modalMessage.classList.add('modal--active');
          userSurname.value = '';
          userName.value = '';
          userSecondname.value = '';
          userEmail.value = '';
          userTel.value = '';
          userComment.value = '';
        } else {
          modalError.classList.add('modal--active');
        }
      });
    }

    if (btnModalMessage) {
      btnModalMessage.addEventListener('click', () => {
        modalMessage.classList.remove('modal--active');
      })
    }

    if (btnModalError) {
      btnModalError.addEventListener('click', () => {
        modalError.classList.remove('modal--active');
      })
    }
  }
})();
