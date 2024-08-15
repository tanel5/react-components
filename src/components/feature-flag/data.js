const dummyApiResponse = {
  showLightAndDarkMode: true,
  showCustomModalPopup : true,
  showGithubProfileFinder : true,
  showImageSlider : true,
  showLoadMoreData: true,
  showQrCodeGenerator: true,
  showScrollIndicator: true,
  showScrollToTopToBottom : true,
  showSearchAutocomplete : true,
  showStarRating : true,
  showUseFetch : true,
  showOutsideClick : true,
  showWindowResize : true,
  showTicTacToeBoard: true,
  showRandomColorGenerator: true,
  ShowAccordian: true, 
  showTreeView: true,
  showCustomTabs : true,
  showScrollToSection : true,
  showTabs : true,
};

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
      if (dummyApiResponse) setTimeout(resolve(dummyApiResponse), 500);
      else reject("Some error occured! Please try again");
    });
  }

export default featureFlagsDataServiceCall;
