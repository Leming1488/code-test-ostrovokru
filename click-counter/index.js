(function () {
  function Panel() {
    this.count = 0;
  }
  Panel.prototype.onClick = function () {
    this.count += 1;
    this.counter.textContent = this.count;
  };
  Panel.prototype.init = function (element) {
    element.addEventListener('click', this.onClick.bind(this));
    this.counter = document.querySelector('.' + element.classList[0] + '-counter');
  };
  window.Panel = window.Panel || Panel;
})();

function main () {
  var panelsElements = document.querySelector('.wrapper');
  [].slice.apply(panelsElements.children).forEach(function (panelElement) {
    var panel = new Panel();
    panel.init(panelElement);
  });
}

window.onload = main;
