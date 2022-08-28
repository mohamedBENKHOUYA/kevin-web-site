import './style.css';

const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-navigation');


navToggle.onclick = function nfe(e) {
  const isExpanded = primaryNav.toggleAttribute('data-visible');
  navToggle.setAttribute('aria-expanded', isExpanded);
};

const slider = new A11YSlider(document.querySelector('.slider'), {
  adaptiveHeight: false,
  dots: true,
  arrows: false,
  responsive: {
    480: {
      dots: false,
      arrows: true
    },
  },
});






 class Slider {
  _step;
  _element;
  _itemsScrolled;
  _nbElsToShow;

  _scrollAmout = 0;

  _scrollWidth;

  constructor(el, nbElsToShow) {
    this.element = el;
    
    this.nbElsToShow = nbElsToShow;

    // calculate initial values of slider
    this.setDefaultValues();
  }

  get step() {
    return this._step;
  }
  set step(step) {
    if (step >= 0) this._step = step;
    else return;
  }
  get nbElsToShow() {
    return this._nbElsToShow;
  }
  set nbElsToShow(nbEls) {
    if (nbEls >= 0) this._nbElsToShow = nbEls;
    else return;
  }

  get element() {
    return this._element;
  }
  set element(el) {
    if (el) this._element = el;
    else return;
  }

  setDefaultValues() {
    this._scrollWidth = this.element.scrollWidth;
    this._itemsScrolled = this.element.childElementCount || 0;

    // calculate step
    this.step = Math.trunc(this._scrollWidth / this._itemsScrolled);
  }
  



  scrollLeft() {
    const prevScrollValue = this.element.scrollLeft;
    this.element.scrollLeft += this.step;
    this._scrollAmout += this.step;
    console.log('prev: ', prevScrollValue, 'new: ', this.element.scrollLeft)
    if(this._scrollAmout <= this._scrollWidth ) return;
    else {
      this.element.scrollLeft = 0;
      this._scrollAmout = 2 * this.step;
    }
  }

  scrollRight() {
    const prevScrollValue = this.element.scrollLeft;
    this.element.scrollLeft -= this.step;
    if(prevScrollValue !== this.element.scrollLeft) return;
    else {
      this.element.scrollLeft = this._scrollWidth;
    }

  }
};




// const slider = new Slider(document.querySelector('.slider'), 2);
// slider.scrollLeft();
// window.slider = slider;
