import heroSVG from "@plone/volto/icons/hero.svg";
import {Edit,View,ReleaseEdit,ReleaseView,ListingGridVariation,PloneReleaseView} from "./components/"
const applyConfig = (config) => {
  config.blocks.blocksConfig.slider = {
    id: "slider",
    title: "Slider",
    icon: heroSVG,
    group: "common",
    view: View,
    edit: Edit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.release = {
    id: "release",
    title: "Release",
    icon: heroSVG,
    group: "common",
    view: ReleaseView,
    edit: ReleaseEdit,
    restricted: false,
    mostUsed: true,
    sidebarTab: 1,
  };
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: "listingGrid",
      title: "Grid",
      template: ListingGridVariation,
    }
  ];
  config.views.contentTypesViews.plone_release = PloneReleaseView;
  return config;
};

export default applyConfig;
