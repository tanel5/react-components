import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../light-dark-mode";
import RandomColor from "../random-color";
import TicTacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./context";
import menus from "../tree-view/data";
import TabTest from "../custom-tabs/tab-test";
import StarRating from "../star-rating";
import ScrollToSection from "../scroll-to-top-and-bottom/scroll-to-section";
import ScrollToTOpAndBottom from "../scroll-to-top-and-bottom";
import UseWindowResizeTest from "../use-window-resize/test";
import UseOnclickOutsideTest from "../use-outside-click/test";
import UseFetchHookTest from "../use-fetch/test";
import SearchAutocomplete from "../search-autocomplete-with-api";
import GithubProfileFinder from "../github-profile-finder";
import LoadMoreData from "../load-more-data";
import ScrollIndicator from "../scroll-indicator";
import ModalTest from "../custom-modal-popup/modal-test";
import QRCodeGenerator from "../qr-code-generator";
import ImageSlider from "../image-slider";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,  
    },
    { 
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "ShowAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showTabs",
      component: <TabTest />,
    },
    {
      key: "showStarRating",
      component: <StarRating noOfStars={10}/>,
    },
    {
      key: "showScrollToSection",
      component: <ScrollToSection />,
    },
    {
      key: "showScrollToTopToBottom",
      component: <ScrollToTOpAndBottom />,
    },
    {
      key: "showWindowResize",
      component: <UseWindowResizeTest />,
    },
    {
      key: "showOutsideClick",
      component: <UseOnclickOutsideTest />,
    },
    {
      key: "showUseFetch",
      component: <UseFetchHookTest />,
    },
    {
      key: "showSearchAutocomplete",
      component: <SearchAutocomplete />,
    },
    {
      key: "showGithubProfileFinder",
      component: <GithubProfileFinder />,
    },
    {
      key: "showLoadMoreData",
      component: <LoadMoreData />,
    },
    {
      key: "showScrollIndicator",
      component: <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />,
    },
    {
      key: "showImageSlider",
      component: <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"} />,
    },
    {
      key: "showQrCodeGenerator",
      component: <QRCodeGenerator />,
    },
    {
      key: "showCustomModalPopup",
      component: <ModalTest />,
    },
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <div>Loading data ! Please wait</div>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
