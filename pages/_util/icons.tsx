import AlertHandDrawnSymbol from "../../libs/components/icons/AlertHandDrawnSymbol.component"
import BaselineMail from "../../libs/components/icons/BaselineMail.component"
import CustomerSupport from "../../libs/components/icons/CustomerSupport.component"
import ArrowBack from "../../libs/components/icons/ArrowBack.component"
import BaselineMenu from "../../libs/components/icons/BaselineMenu.component"
import FoldedNewspaper from "../../libs/components/icons/FoldedNewspaper.component"
import ArrowDropDown from "../../libs/components/icons/ArrowDropDown.component"
import BaselineMonetizationOn from "../../libs/components/icons/BaselineMonetizationOn.component"
import Gallery from "../../libs/components/icons/Gallery.component"
import BaselineSearch from "../../libs/components/icons/BaselineSearch.component"
import IconPricing from "../../libs/components/icons/IconPricing.component"
import BaselineArrowBackIos from "../../libs/components/icons/BaselineArrowBackIos.component"
import BaselineShare from "../../libs/components/icons/BaselineShare.component"
import IconProgressBar from "../../libs/components/icons/IconProgressBar.component"
import BaselineArrowForwardIos from "../../libs/components/icons/BaselineArrowForwardIos.component"
import BaselineStayPrimaryPortrait24px from "../../libs/components/icons/BaselineStayPrimaryPortrait24px.component"
import IconfinderSedan285810 from "../../libs/components/icons/IconfinderSedan285810.component"
import BaselineBuild from "../../libs/components/icons/BaselineBuild.component"
import BaselineTimeline from "../../libs/components/icons/BaselineTimeline.compoent"
import Icons8Velocimetro from "../../libs/components/icons/Icons8Velocimetro.component"
import BaselineExpandMore from "../../libs/components/icons/BaselineExpandMore.component"
import BaselineTrending from "../../libs/components/icons/BaselineTrending.component"
import Insurance from "../../libs/components/icons/Insurance.component"
import BaselineFace24px from "../../libs/components/icons/BaselineFace24px.component"
import BaselineUnfoldLess from "../../libs/components/icons/BaselineUnfoldLess.component"
import OutlineNotifications from "../../libs/components/icons/OutlineNotifications.component"
import BaselineKeyboardArrowLeft from "../../libs/components/icons/BaselineKeyboardArrowLeft.component"
import BaselineUnfoldMore from "../../libs/components/icons/BaselineUnfoldMore.component"
import OutlineSearch from "../../libs/components/icons/OutlineSearch.component"
import BaselineKeyboardArrowRight from "../../libs/components/icons/BaselineKeyboardArrowRight.component"
import CarOfHatchback from "../../libs/components/icons/CarOfHatchback.component"
import OutlineSettings from "../../libs/components/icons/OutlineSettings.component"
import BaselineLocationCity from "../../libs/components/icons/BaselineLocationCity.component"
import Carmechanic89096 from "../../libs/components/icons/Carmechanic89096.component"
import BaselineLocationOn from "../../libs/components/icons/BaselineLocationOn.component"
import CloseIcon from "../../libs/components/icons/CloseIcon"
import DoneComponent from "../../libs/components/icons/Done.component"

export default () => {
  const copts = {
    AlertHandDrawnSymbol: AlertHandDrawnSymbol,
    BaselineMail: BaselineMail,
    CustomerSupport: CustomerSupport,
    ArrowBack: ArrowBack,
    BaselineMenu: BaselineMenu,
    FoldedNewspaper: FoldedNewspaper,
    ArrowDropDown: ArrowDropDown,
    BaselineMonetizationOn: BaselineMonetizationOn,
    Gallery: Gallery,
    BaselineSearch: BaselineSearch,
    IconPricing: IconPricing,
    BaselineArrowBackIos: BaselineArrowBackIos,
    BaselineShare: BaselineShare,
    IconProgressBar: IconProgressBar,
    BaselineArrowForwardIos: BaselineArrowForwardIos,
    BaselineStayPrimaryPortrait24px: BaselineStayPrimaryPortrait24px,
    IconfinderSedan285810: IconfinderSedan285810,
    BaselineBuild: BaselineBuild,
    BaselineTimeline: BaselineTimeline,
    Icons8Velocimetro: Icons8Velocimetro,
    BaselineExpandMore: BaselineExpandMore,
    BaselineTrending: BaselineTrending,
    Insurance: Insurance,
    BaselineFace24px: BaselineFace24px,
    BaselineUnfoldLess: BaselineUnfoldLess,
    OutlineNotifications: OutlineNotifications,
    BaselineKeyboardArrowLeft: BaselineKeyboardArrowLeft,
    BaselineUnfoldMore: BaselineUnfoldMore,
    OutlineSearch: OutlineSearch,
    BaselineKeyboardArrowRight: BaselineKeyboardArrowRight,
    CarOfHatchback: CarOfHatchback,
    OutlineSettings: OutlineSettings,
    BaselineLocationCity: BaselineLocationCity,
    Carmechanic89096: Carmechanic89096,
    BaselineLocationOn: BaselineLocationOn,
    CloseIcon: CloseIcon,
    DoneComponent: DoneComponent,
  };

  return Object.entries(copts).map(([compName, Comp]) => {
    return <div key={compName} style={{
      backgroundColor: 'black',
      padding: '20px',
    }}>
      <h2 style={{ color: '#fff' }}>{`<${compName}></${compName}>`}</h2>
      <Comp p={3}></Comp>
    </div>
  });
}
