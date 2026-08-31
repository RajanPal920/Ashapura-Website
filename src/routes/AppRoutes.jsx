import { lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const Materials = lazy(() => import("../pages/Materials"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Certifications = lazy(() => import("../pages/Certifications"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));
const ProductDetails = lazy(() => import("../pages/ProductDetails"));
const Coils = lazy(() => import("../Components/products/Coils"));
const Pipes = lazy(() => import("../Components/products/Pipes"));
const Plates = lazy(() => import("../Components/products/Plates"));
const RoundBars = lazy(() => import("../Components/products/RoundBars"));
const Sheets = lazy(() => import("../Components/products/Sheets"));
const Tubes = lazy(() => import("../Components/products/Tubes"));
const Wires = lazy(() => import("../Components/products/Wires"));
const ButtweldFittings = lazy(() => import("../Components/products/ButtweldFittings"));
const ForgedFittings = lazy(() => import("../Components/products/ForgedFittings"));
const Flanges = lazy(() => import("../Components/products/Flanges"));
const Fasteners = lazy(() => import("../Components/products/Fasteners"));
const AnglesChannels = lazy(() => import("../Components/products/AnglesChannels"));
const PattaPatti = lazy(() => import("../Components/products/PattaPatti"));
const Rings = lazy(() => import("../Components/products/Rings"));
const Circles = lazy(() => import("../Components/products/Circles"));
const Strips = lazy(() => import("../Components/products/Strips"));
const Valves = lazy(() => import("../Components/products/Valves"));
const DairyFittings = lazy(() => import("../Components/products/DairyFittings"));
const DairyPharmaValves = lazy(() => import("../Components/products/DairyPharmaValves"));
const PharmaFittings = lazy(() => import("../Components/products/PharmaFittings"));
const WireMesh = lazy(() => import("../Components/products/WireMesh"));
const PerforatedSheets = lazy(() => import("../Components/products/PerforatedSheets"));
const HosePipe = lazy(() => import("../Components/products/HosePipe"));
const HardoxPlates = lazy(() => import("../Components/products/HardoxPlates"));

//Materials
const CopperNickel = lazy(() => import("../Components/Materials/CopperNickel"));
const DuplexSteel = lazy(() => import("../Components/Materials/DuplexSteel"));
const Hastelloy = lazy(() => import("../Components/Materials/Hastelloy"));
const Incoloy = lazy(() => import("../Components/Materials/Incoloy"));
const Inconel = lazy(() => import("../Components/Materials/Inconel"));
const Monel = lazy(() => import("../Components/Materials/Monel"));
const NickelAlloy = lazy(() => import("../Components/Materials/NickelAlloy"));
const OtherMaterials = lazy(() => import("../Components/Materials/OtherMaterials"));
const Sanicro = lazy(() => import("../Components/Materials/Sanicro"));
const SpecialMaterials = lazy(() => import("../Components/Materials/SpecialMaterials"));
const StainlessSteel = lazy(() => import("../Components/Materials/StainlessSteel"));
const Titanium = lazy(() => import("../Components/Materials/Titanium"));


//ProductsDetails
const SsCoilsDetails = lazy(() => import("../Components/productsdetails/SsCoilsDetails"));
const TitaniumCoilsDetails = lazy(() => import("../Components/productsdetails/TitaniumCoilsDetails"));
const HighPerformanceCoilsDetails = lazy(() => import("../Components/productsdetails/HighPerformanceCoilsDetails"));
const AlloyCoilsDetails = lazy(() => import("../Components/productsdetails/AlloyCoilsDetails"));
const SpecialAlloyCoilsDetails = lazy(() => import("../Components/productsdetails/SpecialAlloyCoilsDetails"));
const NickelAlloyCoilsDetails = lazy(() => import("../Components/productsdetails/NickelAlloyCoilsDetails"));
const MonelCoilsDetails = lazy(() => import("../Components/productsdetails/MonelCoilsDetails"));
const InonelCoilsDetails = lazy(() => import("../Components/productsdetails/InonelCoilsDetails"));
const IncoloyCoilsDetails = lazy(() => import("../Components/productsdetails/IncoloyCoilsDetails"));
const HastelloyCoilsDetails = lazy(() => import("../Components/productsdetails/HastelloyCoilsDetails"));
const DuplexCoilsDetails = lazy(() => import("../Components/productsdetails/DuplexCoilsDetails"));
const CopperCoilsDetails = lazy(() => import("../Components/productsdetails/CopperCoilsDetails"));

const HighPerformancePipesDetails = lazy(() => import("../Components/productsdetails/HighPerformancePipesDetails"));
const Ss304PipesDetails = lazy(() => import("../Components/productsdetails/Ss304PipesDetails"));
const TitaniumPipesDetails = lazy(() => import("../Components/productsdetails/TitaniumPipesDetails"));
const Alloy28PipesDetails = lazy(() => import("../Components/productsdetails/Alloy28PipesDetails"));
const Alloy20PipesDetails = lazy(() => import("../Components/productsdetails/Alloy20PipesDetails"));
const SpecialAlloyPipesDetails = lazy(() => import("../Components/productsdetails/SpecialAlloyPipesDetails"));
const NickelAlloy200PipesDetails = lazy(() => import("../Components/productsdetails/NickelAlloy200PipesDetails"));
const NickelAlloyPipesDetails = lazy(() => import("../Components/productsdetails/NickelAlloyPipesDetails"));
const Monel400PipesDetails = lazy(() => import("../Components/productsdetails/Monel400PipesDetails"));
const MonelPipesDetails = lazy(() => import("../Components/productsdetails/MonelPipesDetails"));
const Inconel750PipesDetails = lazy(() => import("../Components/productsdetails/Inconel750PipesDetails"));
const Inconel718PipesDetails = lazy(() => import("../Components/productsdetails/Inconel718PipesDetails"));
const Inconel625PipesDetails = lazy(() => import("../Components/productsdetails/Inconel625PipesDetails"));
const Inconel601PipesDetails = lazy(() => import("../Components/productsdetails/Inconel601PipesDetails"));
const Inconel600PipesDetails = lazy(() => import("../Components/productsdetails/Inconel600PipesDetails"));
const InconelPipesDetails = lazy(() => import("../Components/productsdetails/InconelPipesDetails"));
const Inconel690PipesDetails = lazy(() => import("../Components/productsdetails/Inconel690PipesDetails"));
const Incoloy800PipesDetails = lazy(() => import("../Components/productsdetails/Incoloy800PipesDetails"));
const Incoloy825PipesDetails = lazy(() => import("../Components/productsdetails/Incoloy825PipesDetails"));
const Incoloy800DSPipesDetails = lazy(() => import("../Components/productsdetails/Incoloy800DSPipesDetails"));
const IncoloyPipesDetails = lazy(() => import("../Components/productsdetails/IncoloyPipesDetails"));
const SsPipesDetails = lazy(() => import("../Components/productsdetails/SsPipesDetails"));
const HastelloyC2000PipesDetails = lazy(() => import("../Components/productsdetails/HastelloyC2000PipesDetails"));
const HastelloyB3PipesDetails = lazy(() => import("../Components/productsdetails/HastelloyB3PipesDetails"));
const HastelloyB2PipesDetails = lazy(() => import("../Components/productsdetails/HastelloyB2PipesDetails"));
const HastelloyC22PipesDetails = lazy(() => import("../Components/productsdetails/HastelloyC22PipesDetails"));
const HastelloyC276PipesDetails = lazy(() => import("../Components/productsdetails/HastelloyC276PipesDetails"));
const HastelloyPipesDetails = lazy(() => import("../Components/productsdetails/HastelloyPipesDetails"));
const SuperDuplexF55PipesDetails = lazy(() => import("../Components/productsdetails/SuperDuplexF55PipesDetails"));
const SuperDuplexF53PipesDetails = lazy(() => import("../Components/productsdetails/SuperDuplexF53PipesDetails"));
const DuplexSteelPipesDetails = lazy(() => import("../Components/productsdetails/DuplexSteelPipesDetails"));
const DuplexSuperDuplexPipesDetails = lazy(() => import("../Components/productsdetails/DuplexSuperDuplexPipesDetails"));
const CopperNickel9010PipesDetails = lazy(() => import("../Components/productsdetails/CopperNickel9010PipesDetails"));
const CopperNickel7030PipesDetails = lazy(() => import("../Components/productsdetails/CopperNickel7030PipesDetails"));
const CopperNickelPipesDetails = lazy(() => import("../Components/productsdetails/CopperNickelPipesDetails"));
const Ss904LPipesDetails = lazy(() => import("../Components/productsdetails/Ss904LPipesDetails"));
const Ss321PipesDetails = lazy(() => import("../Components/productsdetails/Ss321PipesDetails"));
const Ss317PipesDetails = lazy(() => import("../Components/productsdetails/Ss317PipesDetails"));
const Ss316PipesDetails = lazy(() => import("../Components/productsdetails/Ss316PipesDetails"));
const Ss310PipesDetails = lazy(() => import("../Components/productsdetails/Ss310PipesDetails"));

const StainlessSteelPlatesDetails = lazy(() => import("../Components/productsdetails/StainlessSteelPlatesDetails"));
const TitaniumPlatesDetails = lazy(() => import("../Components/productsdetails/TitaniumPlatesDetails"));
const HighPerformancePlatesDetails = lazy(() => import("../Components/productsdetails/HighPerformancePlatesDetails"));
const AlloyPlatesDetails = lazy(() => import("../Components/productsdetails/AlloyPlatesDetails"));
const SpecialAlloyPlatesDetails = lazy(() => import("../Components/productsdetails/SpecialAlloyPlatesDetails"));
const NickelPlatesDetails = lazy(() => import("../Components/productsdetails/NickelPlatesDetails"));
const MonelPlatesDetails = lazy(() => import("../Components/productsdetails/MonelPlatesDetails"));
const InconelPlatesDetails = lazy(() => import("../Components/productsdetails/InconelPlatesDetails"));
const IncoloyPlatesDetails = lazy(() => import("../Components/productsdetails/IncoloyPlatesDetails"));
const HastelloyPlatesDetails = lazy(() => import("../Components/productsdetails/HastelloyPlatesDetails"));
const DuplexSuperDuplexPlatesDetails = lazy(() => import("../Components/productsdetails/DuplexSuperDuplexPlatesDetails"));
const CopperNickelPlatesDetails = lazy(() => import("../Components/productsdetails/CopperNickelPlatesDetails"));


const TitaniumRoundBarsDetails = lazy(() => import("../Components/productsdetails/TitaniumRoundBarsDetails"));
const SsRoundBarsDetails = lazy(() => import("../Components/productsdetails/SsRoundBarsDetails"));
const HighPerformanceRoundBarsDetails = lazy(() => import("../Components/productsdetails/HighPerformanceRoundBarsDetails"));
const AlloyRoundBarsDetails = lazy(() => import("../Components/productsdetails/AlloyRoundBarsDetails"));
const SpecialRoundBarsDetails = lazy(() => import("../Components/productsdetails/SpecialRoundBarsDetails"));
const NickelRoundBarsDetails = lazy(() => import("../Components/productsdetails/NickelRoundBarsDetails"));
const MonelRoundBarsDetails = lazy(() => import("../Components/productsdetails/MonelRoundBarsDetails"));
const InconelRoundBarsDetails = lazy(() => import("../Components/productsdetails/InconelRoundBarsDetails"));
const IncoloyRoundBarsDetails = lazy(() => import("../Components/productsdetails/IncoloyRoundBarsDetails"));
const HastelloyRoundBarsDetails = lazy(() => import("../Components/productsdetails/HastelloyRoundBarsDetails"));
const DuplexSuperDuplexRoundBarsDetails = lazy(() => import("../Components/productsdetails/DuplexSuperDuplexRoundBarsDetails"));
const CopperNickelRoundBarsDetails = lazy(() => import("../Components/productsdetails/CopperNickelRoundBarsDetails"));


const TitaniumSheetsDetails = lazy(() => import("../Components/productsdetails/TitaniumSheetsDetails"));
const SsSheetsDetails = lazy(() => import("../Components/productsdetails/SsSheetsDetails"));
const HighPerformanceSheetsDetails = lazy(() => import("../Components/productsdetails/HighPerformanceSheetsDetails"));
const AlloySheetsDetails = lazy(() => import("../Components/productsdetails/AlloySheetsDetails"));
const SpecialSheetsDetails = lazy(() => import("../Components/productsdetails/SpecialSheetsDetails"));
const NickelSheetsDetails = lazy(() => import("../Components/productsdetails/NickelSheetsDetails"));
const MonelSheetsDetails = lazy(() => import("../Components/productsdetails/MonelSheetsDetails"));
const InconelSheetsDetails = lazy(() => import("../Components/productsdetails/InconelSheetsDetails"));
const IncoloySheetsDetails = lazy(() => import("../Components/productsdetails/IncoloySheetsDetails"));
const HastelloySheetsDetails = lazy(() => import("../Components/productsdetails/HastelloySheetsDetails"));
const DuplexSuperDuplexSheetsDetails = lazy(() => import("../Components/productsdetails/DuplexSuperDuplexSheetsDetails"));
const CopperNickelSheetsDetails = lazy(() => import("../Components/productsdetails/CopperNickelSheetsDetails"));


const TitaniumTubesDetails = lazy(() => import("../Components/productsdetails/TitaniumTubesDetails"));
const SsTubesDetails = lazy(() => import("../Components/productsdetails/SsTubesDetails"));
const HighPerformanceTubesDetails = lazy(() => import("../Components/productsdetails/HighPerformanceTubesDetails"));
const AlloyTubesDetails = lazy(() => import("../Components/productsdetails/AlloyTubesDetails"));
const SpecialTubesDetails = lazy(() => import("../Components/productsdetails/SpecialTubesDetails"));
const NickelTubesDetails = lazy(() => import("../Components/productsdetails/NickelTubesDetails"));
const MonelTubesDetails = lazy(() => import("../Components/productsdetails/MonelTubesDetails"));
const InconelTubesDetails = lazy(() => import("../Components/productsdetails/InconelTubesDetails"));
const IncoloyTubesDetails = lazy(() => import("../Components/productsdetails/IncoloyTubesDetails"));
const HastelloyTubesDetails = lazy(() => import("../Components/productsdetails/HastelloyTubesDetails"));
const DuplexSuperDuplexTubesDetails = lazy(() => import("../Components/productsdetails/DuplexSuperDuplexTubesDetails"));
const CopperNickelTubesDetails = lazy(() => import("../Components/productsdetails/CopperNickelTubesDetails"))

const TitaniumWiresDetails = lazy(() => import("../Components/productsdetails/TitaniumWiresDetails"));
const SsWiresDetails = lazy(() => import("../Components/productsdetails/SsWiresDetails"));
const HighPerformanceWiresDetails = lazy(() => import("../Components/productsdetails/HighPerformanceWiresDetails"));
const AlloyWiresDetails = lazy(() => import("../Components/productsdetails/AlloyWiresDetails"));
const SpecialWiresDetails = lazy(() => import("../Components/productsdetails/SpecialWiresDetails"));
const NickelWiresDetails = lazy(() => import("../Components/productsdetails/NickelWiresDetails"));
const MonelWiresDetails = lazy(() => import("../Components/productsdetails/MonelWiresDetails"));
const InconelWiresDetails = lazy(() => import("../Components/productsdetails/InconelWiresDetails"));
const IncoloyWiresDetails = lazy(() => import("../Components/productsdetails/IncoloyWiresDetails"));
const HastelloyWiresDetails = lazy(() => import("../Components/productsdetails/HastelloyWiresDetails"));
const DuplexSuperDuplexWiresDetails = lazy(() => import("../Components/productsdetails/DuplexSuperDuplexWiresDetails"));
const CopperNickelWiresDetails = lazy(() => import("../Components/productsdetails/CopperNickelWiresDetails"));

 

import ScrollToTop from "../Components/ScrollToTop.jsx";


function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/products/coils" element={<Coils />} />
        <Route path="/products/pipes" element={<Pipes />} />
        <Route path="/products/plates" element={<Plates />} />
        <Route path="/products/round-bars" element={<RoundBars />} />
        <Route path="/products/sheets" element={<Sheets />} />
        <Route path="/products/tubes" element={<Tubes />} />
        <Route path="/products/wires" element={<Wires />} />
        <Route path="/products/butt-fittings" element={<ButtweldFittings />} />
        <Route path="/products/forged-fittings" element={<ForgedFittings />} />
        <Route path="/products/flanges" element={<Flanges />} />
        <Route path="/products/fasteners" element={<Fasteners />} />
        <Route path="/products/angles-channels" element={<AnglesChannels />} />
        <Route path="/products/patta-patti" element={<PattaPatti />} />
        <Route path="/products/rings" element={<Rings />} />
        <Route path="/products/circles" element={<Circles />} />
        <Route path="/products/strips" element={<Strips />} />
        <Route path="/products/valves" element={<Valves />} />
        <Route path="/products/dairy-fittings" element={<DairyFittings />} />
        <Route path="/products/dairy-pharma-valves" element={<DairyPharmaValves />} />
        <Route path="/products/pharma-fittings" element={<PharmaFittings />} />
        <Route path="/products/wire-mesh" element={<WireMesh />} />
        <Route path="/products/perforated-sheets" element={<PerforatedSheets />} />
        <Route path="/products/hose-pipes" element={<HosePipe />} />
        <Route path="/products/hardox-plates" element={<HardoxPlates />} />
        

        <Route path="/materials/copper-nickel" element={<CopperNickel />} />
        <Route path="/materials/duplex-steel" element={<DuplexSteel />} />
        <Route path="/materials/hastelloy" element={<Hastelloy />} />
        <Route path="/materials/incoloy" element={<Incoloy />} />
        <Route path="/materials/inconel" element={<Inconel />} />
        <Route path="/materials/monel" element={<Monel />} />
        <Route path="/materials/nickel-alloy" element={<NickelAlloy />} />
        <Route path="/materials/other-materials" element={<OtherMaterials />} />
        <Route path="/materials/sanicro" element={<Sanicro />} />
        <Route path="/materials/special-materials" element={<SpecialMaterials />} />
        <Route path="/materials/stainless-steel" element={<StainlessSteel />} />
        <Route path="/materials/titanium" element={<Titanium />} />

        <Route path="/products/coils/stainless-steel-coils-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india" element={<SsCoilsDetails />} />
        <Route path="/products/coils/titanium-coils-grade-2-grade-5-supplier-stockist-mumbai-india" element={<TitaniumCoilsDetails />} />
        <Route path="/products/coils/high-performance-alloy-coils-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india" element={<HighPerformanceCoilsDetails />} />
        <Route path="/products/coils/alloy-28-coils-supplier-stockist-mumbai-india" element={<AlloyCoilsDetails />} />
        <Route path="/products/coils/special-alloy-coils-supplier-smo-254-alloy-20-stockist-mumbai-india" element={<SpecialAlloyCoilsDetails />} />
        <Route path="/products/coils/nickel-alloy-200-201-coils-supplier-stockist-mumbai-india" element={<NickelAlloyCoilsDetails />} />
        <Route path="/products/coils/monel-400-coils-supplier-stockist-mumbai-india" element={<MonelCoilsDetails />} />
        <Route path="/products/coils/inconel-coils-supplier-600-601-625-690-718-725-x-750-stockist-mumbai-india" element={<InonelCoilsDetails />} />
        <Route path="/products/coils/incoloy-coils-supplier-800-800h-800ht-825-925-ds-330-stockist-mumbai-india" element={<IncoloyCoilsDetails />} />
        <Route path="/products/coils/hastelloy-coils-supplier-c276-c22-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india" element={<HastelloyCoilsDetails />} />
        <Route path="/products/coils/duplex-super-duplex-steel-coils-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india" element={<DuplexCoilsDetails />} />
        <Route path="/products/coils/copper-nickel-coils-supplier-stockist-mumbai-india" element={<CopperCoilsDetails />} />

        <Route path="/products/pipes/high-performance-alloy-pipes-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india" element={<HighPerformancePipesDetails />} />
        <Route path="/products/pipes/stainless-steel-304-304l-pipes-supplier-stockist-mumbai-india" element={<Ss304PipesDetails />} />
        <Route path="/products/pipes/titanium-pipes-grade-2-grade-5-supplier-stockist-mumbai-india" element={<TitaniumPipesDetails />} />
        <Route path="/products/pipes/alloy-28-pipes-supplier-stockist-mumbai-india" element={<Alloy28PipesDetails />} />
        <Route path="/products/pipes/alloy-20-pipes-supplier-stockist-mumbai-india" element={<Alloy20PipesDetails />} />
        <Route path="/products/pipes/smo-254-pipes-supplier-stockist-mumbai-india" element={<SpecialAlloyPipesDetails />}/>
        <Route path="/products/pipes/nickel-alloy-200-201-pipes-supplier-stockist-mumbai-india" element={<NickelAlloy200PipesDetails />} />
        <Route path="/products/pipes/nickel-alloy-pipes-supplier-stockist-mumbai-india" element={<NickelAlloyPipesDetails />} />
        <Route path="/products/pipes/monel-400-pipes-supplier-stockist-mumbai-india" element={<Monel400PipesDetails />} />
        <Route path="/products/pipes/monel-pipes-supplier-stockist-mumbai-india" element={<MonelPipesDetails />} />
        <Route path="/products/pipes/inconel-x-750-pipes-supplier-stockist-mumbai-india" element={<Inconel750PipesDetails />} />
        <Route path="/products/pipes/inconel-718-pipes-supplier-stockist-mumbai-india" element={<Inconel718PipesDetails />} />
        <Route path="/products/pipes/inconel-690-pipes-supplier-stockist-mumbai-india" element={<Inconel690PipesDetails />} />
        <Route path="/products/pipes/inconel-625-pipes-supplier-stockist-mumbai-india" element={<Inconel625PipesDetails />} />
        <Route path="/products/pipes/inconel-601-pipes-supplier-stockist-mumbai-india" element={<Inconel601PipesDetails />} />
        <Route path="/products/pipes/inconel-600-pipes-supplier-stockist-mumbai-india" element={<Inconel600PipesDetails />} />
        <Route path="/products/pipes/inconel-pipes-supplier-stockist-mumbai-india" element={<InconelPipesDetails />}  />
        <Route path="/products/pipes/incoloy-825-pipes-supplier-stockist-mumbai-india" element={<Incoloy825PipesDetails />} />
        <Route path="/products/pipes/incoloy-800h-800ht-pipes-supplier-stockist-mumbai-india" element={<Incoloy800PipesDetails />} />
        <Route path="/products/pipes/incoloy-800-ds-330-pipes-supplier-stockist-mumbai-india" element={<Incoloy800DSPipesDetails />} />
        <Route path="/products/pipes/incoloy-pipes-supplier-stockist-mumbai-india" element={<IncoloyPipesDetails />} />
        <Route path="/products/pipes/stainless-steel-pipes-supplier-stockist-mumbai-india" element={<SsPipesDetails />} />
        <Route path="/products/pipes/hastelloy-c2000-c59-c4-h-n-pipes-supplier-stockist-mumbai-india" element={<HastelloyC2000PipesDetails />} />
        <Route path="/products/pipes/hastelloy-b3-pipes-supplier-stockist-mumbai-india" element={<HastelloyB3PipesDetails />} />
        <Route path="/products/pipes/hastelloy-b2-pipes-supplier-stockist-mumbai-india" element={<HastelloyB2PipesDetails />} />
        <Route path="/products/pipes/hastelloy-c22-pipes-supplier-stockist-mumbai-india" element={<HastelloyC22PipesDetails />} />
        <Route path="/products/pipes/hastelloy-c276-pipes-supplier-stockist-mumbai-india" element={<HastelloyC276PipesDetails />} />
        <Route path="/products/pipes/hastelloy-pipes-supplier-stockist-mumbai-india" element={<HastelloyPipesDetails />} />
        <Route path="/products/pipes/super-duplex-steel-uns-s32760-f55-pipes-supplier-stockist-mumbai-india" element={<SuperDuplexF55PipesDetails />} />
        <Route path="/products/pipes/super-duplex-steel-uns-s32750-f53-pipes-supplier-stockist-mumbai-india" element={<SuperDuplexF53PipesDetails/>}  />
        <Route path="/products/pipes/duplex-steel-uns-s31803-f51-s32205-f60-pipes-supplier-stockist-mumbai-india" element={<DuplexSteelPipesDetails />}  />
        <Route path="/products/pipes/duplex-super-duplex-steel-pipes-supplier-stockist-mumbai-india" element={<DuplexSuperDuplexPipesDetails/>}  />
        <Route path="/products/pipes/copper-nickel-90-10-pipes-supplier-stockist-mumbai-india" element={<CopperNickel9010PipesDetails/>}  />
        <Route path="/products/pipes/copper-nickel-70-30-pipes-supplier-stockist-mumbai-india" element={<CopperNickel7030PipesDetails/>}  />
        <Route path="/products/pipes/copper-nickel-pipes-supplier-stockist-mumbai-india" element={<CopperNickelPipesDetails/>}  />
        <Route path="/products/pipes/stainless-steel-904l-pipes-supplier-stockist-mumbai-india" element={<Ss904LPipesDetails/>}  />
        <Route path="/products/pipes/stainless-steel-321-pipes-supplier-stockist-mumbai-india" element={<Ss321PipesDetails/>} />
        <Route path="/products/pipes/stainless-steel-317l-pipes-supplier-stockist-mumbai-india" element={<Ss317PipesDetails/>} />
        <Route path="/products/pipes/stainless-steel-316-316l-pipes-supplier-stockist-mumbai-india" element={<Ss316PipesDetails/>} />
        <Route path="/products/pipes/stainless-steel-310s-pipes-supplier-stockist-mumbai-india" element={<Ss310PipesDetails/>} />

        <Route path="/products/plates/titanium-plates-supplier-grade-2-grade-5-stockist-mumbai-india" element={<StainlessSteelPlatesDetails />} />
        <Route path="/products/plates/stainless-steel-plates-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india" element={<TitaniumPlatesDetails />} />
        <Route path="/products/plates/high-performance-alloy-plates-nimonic-nichrome-nitronic-nilo-alloy-supplier-stockist-mumbai-india" element={<HighPerformancePlatesDetails />} />
        <Route path="/products/plates/alloy-28-plates-supplier-stockist-mumbai-india" element={<AlloyPlatesDetails />} />
        <Route path="/products/plates/special-alloy-plates-supplier-smo-254-f44-alloy-20-stockist-mumbai-india" element={<SpecialAlloyPlatesDetails />} />
        <Route path="/products/plates/nickel-alloy-200-201-plates-supplier-stockist-mumbai-india" element={<NickelPlatesDetails />} />
        <Route path="/products/plates/monel-400-plates-supplier-stockist-mumbai-india" element={<MonelPlatesDetails />} />
        <Route path="/products/plates/inconel-plates-supplier-600-601-625-690-718-725-x-750-stockist-mumbai-india" element={<InconelPlatesDetails />} />
        <Route path="/products/plates/incoloy-plates-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india" element={<IncoloyPlatesDetails />} />
        <Route path="/products/plates/hastelloy-plates-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india" element={<HastelloyPlatesDetails />} />
        <Route path="/products/plates/duplex-super-duplex-steel-plates-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india" element={<DuplexSuperDuplexPlatesDetails />} />
        <Route path="/products/plates/copper-nickel-plates-supplier-70-30-90-10-plates-stockist-mumbai-india" element={<CopperNickelPlatesDetails />} />

        <Route path="/products/round-bars/titanium-round-bars-supplier-grade-2-grade-5-stockist-mumbai-india" element={<TitaniumRoundBarsDetails />} />
        <Route path="/products/round-bars/stainless-steel-round-bars-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india" element={<SsRoundBarsDetails />} />
        <Route path="/products/round-bars/high-performance-alloy-round-bars-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india" element={<HighPerformanceRoundBarsDetails />} />
        <Route path="/products/round-bars/alloy-28-round-bars-supplier-stockist-mumbai-india" element={<AlloyRoundBarsDetails />} />
        <Route path="/products/round-bars/special-alloy-round-bars-supplier-smo-254-f44-alloy-20-stockist-mumbai-india" element={<SpecialRoundBarsDetails />} />
        <Route path="/products/round-bars/nickel-alloy-200-201-round-bars-supplier-stockist-mumbai-india" element={<NickelRoundBarsDetails />} />
        <Route path="/products/round-bars/monel-round-bars-supplier-400-k500-r405-stockist-mumbai-india" element={<MonelRoundBarsDetails />} />
        <Route path="/products/round-bars/inconel-round-bars-supplier-600-601-625-690-718-725-x-750-stockist-mumbai-india" element={<InconelRoundBarsDetails />} />
        <Route path="/products/round-bars/incoloy-round-bars-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india" element={<IncoloyRoundBarsDetails />} />
        <Route path="/products/round-bars/hastelloy-round-bars-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india" element={<HastelloyRoundBarsDetails />} />
        <Route path="/products/round-bars/duplex-super-duplex-steel-round-bars-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india" element={<DuplexSuperDuplexRoundBarsDetails />} />
        <Route path="/products/round-bars/copper-nickel-round-bars-supplier-stockist-mumbai-india" element={<CopperNickelRoundBarsDetails />} />

        <Route path="/products/sheets/titanium-sheets-supplier-grade-2-grade-5-stockist-mumbai-india" element={<TitaniumSheetsDetails />} />
        <Route path="/products/sheets/stainless-steel-sheets-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india" element={<SsSheetsDetails />} />
        <Route path="/products/sheets/high-performance-alloy-sheets-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india" element={<HighPerformanceSheetsDetails />} />
        <Route path="/products/sheets/alloy-28-sheets-supplier-stockist-mumbai-india" element={<AlloySheetsDetails />} />
        <Route path="/products/sheets/special-alloy-sheets-supplier-smo-254-f44-alloy-20-stockist-mumbai-india" element={<SpecialSheetsDetails />} />
        <Route path="/products/sheets/nickel-alloy-200-201-sheets-supplier-stockist-mumbai-india" element={<NickelSheetsDetails />} />
        <Route path="/products/sheets/monel-400-sheets-supplier-stockist-mumbai-india" element={<MonelSheetsDetails />} />
        <Route path="/products/sheets/inconel-sheets-supplier-600-601-625-690-718-725-x-750-stockist-mumbai-india" element={<InconelSheetsDetails />} />
        <Route path="/products/sheets/incoloy-sheets-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india" element={<IncoloySheetsDetails />} />
        <Route path="/products/sheets/hastelloy-sheets-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india" element={<HastelloySheetsDetails />} />
        <Route path="/products/sheets/duplex-super-duplex-steel-sheets-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india" element={<DuplexSuperDuplexSheetsDetails />} />
        <Route path="/products/sheets/copper-nickel-sheets-supplier-stockist-mumbai-india" element={<CopperNickelSheetsDetails />} />

        <Route path="/products/tubes/titanium-tubes-supplier-grade-2-grade-5-stockist-mumbai-india" element={<TitaniumTubesDetails />} />
        <Route path="/products/tubes/stainless-steel-tubes-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india" element={<SsTubesDetails />} />
        <Route path="/products/tubes/high-performance-alloy-tubes-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india" element={<HighPerformanceTubesDetails />} />
        <Route path="/products/tubes/alloy-28-tubes-supplier-stockist-mumbai-india" element={<AlloyTubesDetails />} />
        <Route path="/products/tubes/special-alloy-tubes-supplier-smo-254-f44-alloy-20-stockist-mumbai-india" element={<SpecialTubesDetails />} />
        <Route path="/products/tubes/nickel-alloy-200-201-tubes-supplier-stockist-mumbai-india" element={<NickelTubesDetails />} />
        <Route path="/products/tubes/monel-400-tubes-supplier-stockist-mumbai-india" element={<MonelTubesDetails />} />
        <Route path="/products/tubes/inconel-tubes-supplier-600-601-625-690-x-750-stockist-mumbai-india" element={<InconelTubesDetails />} />
        <Route path="/products/tubes/incoloy-tubes-supplier-800-800h-800ht-825-330-ds-330-stockist-mumbai-india" element={<IncoloyTubesDetails />} />
        <Route path="/products/tubes/hastelloy-tubes-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india" element={<HastelloyTubesDetails />} />
        <Route path="/products/tubes/duplex-super-duplex-steel-tubes-supplier-s31803-s32750-s32760-stockist-mumbai-india" element={<DuplexSuperDuplexTubesDetails />} />
        <Route path="/products/tubes/copper-nickel-tubes-supplier-90-10-c70600-70-30-c71500-stockist-mumbai-india" element={<CopperNickelTubesDetails />} />


        <Route path="/products/wires/titanium-wires-supplier-grade-2-grade-5-stockist-mumbai-india" element={<TitaniumWiresDetails />} />
        <Route path="/products/wires/stainless-steel-wires-supplier-304-304l-316-316l-310s-904l-more-stockist-mumbai-india" element={<SsWiresDetails />} />
        <Route path="/products/wires/high-performance-alloy-wires-supplier-nimonic-nichrome-nitronic-nilo-alloy-stockist-mumbai-india" element={<HighPerformanceWiresDetails />} />
        <Route path="/products/wires/alloy-28-wires-supplier-stockist-mumbai-india" element={<AlloyWiresDetails />} />
        <Route path="/products/wires/special-alloy-wires-supplier-smo-254-f44-alloy-20-stockist-mumbai-india" element={<SpecialWiresDetails />} />
        <Route path="/products/wires/nickel-alloy-200-201-wires-supplier-stockist-mumbai-india" element={<NickelWiresDetails />} />
        <Route path="/products/wires/monel-wires-supplier-400-k500-r405-stockist-mumbai-india" element={<MonelWiresDetails />} />
        <Route path="/products/wires/inconel-wires-supplier-600-601-625-690-718-725-x-750-stockist-mumbai-india" element={<InconelWiresDetails />} />
        <Route path="/products/wires/incoloy-wires-supplier-800-800h-800ht-825-925-330-ds-330-stockist-mumbai-india" element={<IncoloyWiresDetails />} />
        <Route path="/products/wires/hastelloy-wires-supplier-c22-c276-b2-b3-c2000-c59-c4-hn-stockist-mumbai-india" element={<HastelloyWiresDetails />} />
        <Route path="/products/wires/duplex-super-duplex-steel-wires-supplier-s31803-s32205-s32750-s32760-stockist-mumbai-india" element={<DuplexSuperDuplexWiresDetails />} />
        <Route path="/products/wires/copper-nickel-wires-supplier-stockist-mumbai-india" element={<CopperNickelWiresDetails />} />

        

        
        

        <Route path="/products/:category/:slug" element={<ProductDetails />} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;