document.addEventListener('DOMContentLoaded', function() {
  var link     = document.getElementById('nav-les-outils'),
      dropdown = document.getElementById('nav-dropdown');

  link.onmouseover = function(){
    dropdown.classList.add('link-active');
  }

  dropdown.onmouseover = function(){
    dropdown.classList.add('dropdown-active');
  }

  link.onmouseout = function(){
    dropdown.classList.remove('link-active');
  }

  dropdown.onmouseout = function(){
    dropdown.classList.remove('dropdown-active');
  }

}, false);
