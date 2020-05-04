// // Javascript here
toggleAccordion();
toggleTabs();

// Function for toggling accordion
function toggleAccordion() {
  var accordions = document.getElementsByClassName('accordion-title');
  var accordionsData = document.getElementsByClassName('accordion-data');
  var accordionsLength = accordions.length;

  for (var i = 0; i < accordionsLength; i++) {
    accordions[i].onclick = function () {
      var content = this.nextElementSibling;
      // accordion is currently open, so close it
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        this.classList.remove('active');
        this.firstElementChild.classList.remove('active');
      } else { // accordion is currently closed, so open it
        content.style.maxHeight = content.scrollHeight + 'px';
        this.classList.add('active');
        this.firstElementChild.classList.add('active');
      }

      // Add/Remove codes below this line for single/multiple opened accordions
      for (var i = 0; i < accordionsLength; i++) {
        if (accordionsData[i].style.maxHeight) {
          // This will remove all the properties
          accordionsData[i].style.maxHeight = null;
          accordions[i].classList.remove('active');
          accordions[i].firstElementChild.classList.remove('active');
          // This will add the properties on clicked accordion
          content.style.maxHeight = content.scrollHeight + 'px';
          this.classList.add('active');
          this.firstElementChild.classList.add('active');
        }
      } // Remove till here if you want multiple accordion
    }
  }
}

// Function for toggling tabs
function toggleTabs() {
  var myTabs = document.querySelectorAll('ul.tab-navigation > li');
  var myTabsLength = myTabs.length;

  // Calls on Clicking Tab
  for (var i = 0; i < myTabsLength; i++) {
    myTabs[i].onclick = tabClick;
  }
  // Tab Click Function
  function tabClick(tabClickEvent) {
    // Removes class active
    for (var i = 0; i < myTabsLength; i++) {
      myTabs[i].classList.remove('active');
    }
    // Gets clicked tab
    var clickedTab = tabClickEvent.currentTarget;
    clickedTab.classList.add('active'); // Sets active class on clicked tab
    tabClickEvent.preventDefault();
    var contentData = document.querySelectorAll('.tab-data');
    var contentDataLength = contentData.length;
    // Removes all the active class present
    for (var i = 0; i < contentDataLength; i++) {
      contentData[i].classList.remove('active');
    }
    var anchorReference = tabClickEvent.target;
    var dataId = anchorReference.getAttribute('href');
    var activeData = document.querySelector(dataId);
    // Adds class active on clicked Id
    activeData.classList.add('active');
  }
}