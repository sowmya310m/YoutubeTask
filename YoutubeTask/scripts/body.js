var body = (function() {

    return {
      loadBody : loadBody,
    }

    function loadBody() {

      let bodyElement = document.querySelector("#body");
      cleanBody(bodyElement);
      
      //Display Div
      let displayDiv = resultsDisplayDivComponent.createResultsDisplayDivComponent();
    
      bodyElement.appendChild(displayDiv);
    }

    function cleanBody(bodyElement) {
      if (bodyElement.hasChildNodes()) {
        bodyElement.removeChild(bodyElement.firstChild);
      }
    }

})();

