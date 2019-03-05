let services = (function() {
  return {
    searchApi : searchApi
  }

  function searchApi() {
    console.log("I'm here!")
    let searchString = headerState.getSearchString();
    url = constants.basicURL + searchString;

    return fetch(url)
      .then(body => body.json())
      .then(data => {
        paginationState.setPageNumber(1);
        let idString = data.items.map(x => x.id.videoId).join(",");
        return getStats(idString);
      })
      .catch(error => console.log("Error is " + error));
  }
  
  function getStats(idString) {
    let url = constants.descURL + idString;
    // console.log(url);
    return fetch(url)
      .then(body => body.json())
      .then(data => {
        // console.log(data.items[0]);
        return data.items;
      });
  }
})();