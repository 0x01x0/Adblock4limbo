/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: idn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".popbox","#popup_bawah,\n#popup_box","[href=\"https://klik.gg/anoboy\"],\n[href=\"https://klik.gg/anoboyvip\"]","#headads","#ptbanner","#top-banner","#ads","#le_header_ads","#ouibounce-modal","#sgpb-popup-dialog-main-div-wrapper",".sgpb-popup-overlay",".kln","#teaser3",".ads","#fbanner,\n#fbbanner,\n#pbanner","#hbanner","[href^=\"https://yukclick.me/dunia21\"]","#teaser1","#teaser2","#floating_bot","#floatbottom,\na[href][target=\"_blank\"] > img[src$=\".gif\"]","#floatcenter",".adsrow",".lepopup-popup-container,\n.lepopup-popup-overlay",".banner-float-bottom-2.banner-float-bottom","#repop","#floating_bot.btm_ban","#floating_banner_top1",".box_item_berlangganan_popup","a[href^=\"https://cek.to/\"]",".mfp-inline-holder.mfp-s-ready.mfp-container",".mfp-ready.mfp-with-zoom.mfp-no-margins.mfp-img-mobile.mfp-bg",".lazyloaded.loaded.ads-50","#overplay",".sgpb-popup-dialog-main-div-wrapper","#floattop,\n#top6",".banner-img","#btm_bannerMobile","a[href^=\"http://bit.ly/\"]","a[href^=\"https://goo.gl/\"]","#semprotpokemon_3,\n#semprotpokemon_4",".lazyloaded.ls-is-cached.bannerdua,\n.lazyloaded.ls-is-cached.bannersatu","#KD_adpB,\n.krucil_ads",".banner-float-bottom","#fixedban","#iklantengah1","#tutupen,\n[href=\"https://bit.ly/idx-xx\"]","[href^=\"https://bit.ly/\"]",".headbanner",".ban_empat",".adscenter","div[id^=\"floating_banner_bottom\"]","#advertisement","#overlay",".sgpb-popup-overlay.sgpb-popup-overlay-19287.sgpb-theme-1-overlay",".underlay","#iklap,\n#iklhead,\n#jwp_gmn_adss","#promoContainer",".blocker.jquery-modal",".jwseed",".kln.mlb.blox",".wp-image-80765.size-full.alignnone",".banner-left,\n.banner-right","#kayan_reklam_sag,\n#kayan_reklam_sol",".contentlist","[href^=\"https://manjur.id/search.php\"]",".td-header-rec-wrap",".sg-popup-content","#middle-banner","div[class^=\"adsgen\"],\ndiv[class^=\"mobileads\"]",".lmd-iklan","#popup_content","#tengah > span",".imgbanner","#floating_banner_left,\n#floating_banner_right","#wrap > .headborder > .headcontent > .textwidget","#col,\n#tengah,\n#tengahaa,\ndiv.content-kuss",".klikdisini","#fadeinbox","#filmoncereklam","a[href^=\"https://bit.ly/\"]","a[target=\"_blank\"][rel=\"nofollow\"] > img[src$=\".gif\"]","#banner-tengah","[href$=\"/sukamovieclub\"]","[href^=\"/GoUrl.php?ads=\"]",".pop-overlay","[href^=\"http://152.44.32.81\"]","#btm_banner",".iklansamping,\n.klnrec,\na[rel=\"nofollow\"] > img[src*=\"bp.blogspot.com\"],\na[rel=\"noopener\"] > img[src*=\"bp.blogspot.com\"]","#bioskop-kiri,\nbioskop-kanan","#modal","#myModal","#playerOverlay","a[href^=\"https://shope.ee/\"]","iframe[style*=\"z-index: 2147483647\"]",".td-banner-wrap-full","#div-Inside-MediumRectangle",".ad-photo,\n.commSkin__fluid--left.commSkin__fluid,\n.commSkin__fluid--right.commSkin__fluid,\n.mb3.gpt-ad-head-wrapper.widget",".cls-outstream","#advertisement-2",".banner-fix-bottom,\n.banner320x480,\n.bannerfull,\n.bannerhead,\n.closebanner1,\n.closebanner2,\n.parallax-box",".ayu-headads","#energysaving",".banner","img[width=\"720\"][height=\"90\"]","#floatads1",".middle-ad-cont",".anm__flying--ads-holder","a[href^=\"http://anizan.slask.pl/go.php\"]","#billboard",".d-flex.w-100:has([id^=\"div-gpt-ad\"]),\n.underlay-ad","#billboard_banner","#floating_banner_bottoms","#floating_banner_tops","#wrap > center",".headborder:nth-of-type(5)","#floating_banner_top",".adsPushdown,\n.billboardBig.billboard,\n.billboardBottom,\n.billboardFlying,\n.billboardFlyingBanner,\n.billboardFlyingFix,\n.billboardFlyingInner,\n.billboardLeaderboard.billboard,\n.billboardPushdown,\n.billboardRectangle.billboard,\n.billboardTop.billboard,\n.flying_carpet_show,\n.flying_carpet_show_inner,\n.skyscrapper--left,\n.skyscrapper--right",".product__card:has(.product__tag__ads)","#floating_banner_bottom2,\n#floating_banner_top img[width=\"728\"][height=\"90\"]","#HTML2,\n.lalulintas",".ads-on,\n.ads__stick--left,\n.ads__stick--right,\n.ads_below_photo",".ads-partner-wrap",".ads__top-big,\n.cls-composite,\n.cls-geniee,\n.float-ads",".mgidclsbanner",".pushdown-banner",".bl-product-card-new:has(.bl-product-card-new__ads-badge)",".dp-card-container:has(.ico_promotion)",".wpa","#adsic728,\n#adsic7282",".ad","#hbanner:nth-of-type(1)",".adstops","#sgcboxOverlay",".megabillboard",".mr1-scrollpage-height,\n.mr2-scrollpage-height",".mr1:has([id^=\"div-gpt-ad\"]),\n.mr2:has([id^=\"div-gpt-ad\"])","#adv-caption-mr1","#adv-caption-mr2",".footer_banner",".paraA.para,\n.para_abs,\n.para_fix",".paradetail",".Widget:nth-of-type(2),\n.Widget:nth-of-type(3)","#ads-728,\n#ads-960-mid,\n#ads-mid,\n#mid-banner,\n.ads2-home,\n.fixed-ads-atas,\n.mid-banner","#adpoint5,\n#adv-caption-lead,\n#leaderboard:has([id^=\"div-gpt-ad\"]),\n#leaderboard[style*=\"width: 750px;height: 100px;\"],\n#megabillboard-desktop,\n#otp_banner,\n#skinad,\n#sto_banner,\n#top_banner,\n.banner_inside_article,\n.billboard-top,\n.detikads,\n.mr1:has(#adv-caption-mr1),\n.normalbanner,\n.otp_banner_close,\n.parallax_abs,\n.sisip_video_ds,\n.skinad_1,\n.skinad_2","#bottom_banner",".ads-slot",".bb_banner","[href^=\"http://www.dukungbpjs.com/ref.php\"]","#ads-stack,\n#close-ads-stack,\n#itro_opaco,\n#itro_popup","#float-bottom-banner",".visible-lg",".ads_square_banner,\n.section_sticky_ads_bottom",".banner-common",".left.banner-vertical,\n.right.banner-vertical","#peluang",".ktzsingle-bannerright",".pps-single-popup",".random","#footer_sticky_inside",".adsense-header-in-article",".box","#jxOutstreamContainer",".ads-liftdown,\n.clearfix.ads__top-big250,\n.read__left",".ads__boxr",".blocker-notice,\n.blocker-overlay","#balloonads,\n#megabillboard,\n#parallaxdetail,\n.ads-scrollpage-container,\n.ads-scrollpage-height,\n.billboard__banner,\n.m-r1:has(#adv-caption-mr1),\n.m-r2:has(#adv-caption-mr2)","#ads-float,\n#solopos_float,\n.bottom-fix","#bannerkategoriheader,\n#mybannerpopup,\n#mybannerpopup2",".article-bottom-ad,\n.article-desktop-ad",".spb_middle.spb_banner","#text-28 > .textwidget,\na[href^=\"http://www.pembesar-vimax-herbal.com/\"]","[style=\"float:right; margin:7px 0 10px 10px;\"] > small",".parallax-ad",".sponsor_ads:nth-of-type(1),\n.sponsor_ads:nth-of-type(2),\n.sponsor_ads:nth-of-type(4)","#floating_ads_bottom_textcss_wrap",".adBar-vertical.left,\n.adBar-vertical.right","#IklanIDGS,\n#bottombanner",".ktz-banneraftercontent","#headerbanner","#baca_juga,\n#more_stories,\n#title_kanal,\n#vertical_top_kanal",".aligncenter","#player-side-right","._ning_link.strack_cli","#anchormasklink",".bt-g1.b-g3.wb-300x100,\n.bt-g1.b-g3.wb-300x250","#bannerkiri",".d.wp-120x600,\n.wb-300x250","img[style=\"width: 125px; height: 125px;\"]","img:nth-of-type(2)","[class^=\"ad-\"][class*=\"-container\"]","#banner-popup,\n.gmr-banner-afterrelpost,\n.gmr-banner-logo,\n.gmr-footerbanner,\n.gmr-topbanner,\n.gmr-verytopbanner","#hello",".adv-space","#leaderboard",".bottom-frame-banner-close-btn,\n.bottom-leaderboard-cont,\n.skycapper","#v5-marcommpromotion.home-right-box,\n#v5-marcommpromotion2,\n#v5-showcase3,\n#v8-leaderboard","#v5-showcase1,\n#v5-showcase2",".ad2","#blockblockA",".ads__under__image",".textwidget img[width=\"300\"][height=\"250\"],\ncenter img[width=\"728\"][height=\"70\"]","#left-skyscraper,\n#right-skyscraper,\n.ad.b300x250","#floatbanner","#credential_picker_container,\n#crt-225c8f8a,\n#crt-4f9f1ad0,\n#crt-f6d317f5,\n.ads-latest-wrap,\n.ads-on-body,\n.adsMR1Lipsus1,\n.bannerAdB,\n.bannerCenter,\n.bannerCenter1SubRubrik,\n.bannerCenter2SubRubrik,\n.bannerCenterRubrik,\n.bannerR,\n.bannerR2,\n.bannerR2A,\n.bannerR3,\n.bannerR3A,\n.bannerTopOut,\n.boxBanner1,\n.boxBanner3,\n.boxBannerR1akt,\n.boxSkinAd,\n.clearfix.kcm__big.kcm,\n.clearfix.kcm__horizontal.kcm,\n.clearfix.kcm__rectangle.kcm,\n.clearfix.kcm__sticky.kcm,\n.clearfix.kcm__top.kcm,\n.clearfix.kcm__tower.kcm,\n.clearfix.kcm__track.kcm,\n.hAds,\n.kcm-track-sticky,\n.kcm__articleList,\n.kcm__stick--left,\n.kcm__stick--right,\n.kcm__superbig.kcm,\n.native-wrap,\n.ol_big_inner,\n.premium_div,\n.show.ol_promo,\n.video-box-wrap,\n[src^=\"https://adsimg.kompas.com\"]","iframe[title=\"3rd party ad content\"]",".bannerTop1",".banner-center,\n.banner-mgid",".banner-dable.banner,\n.banner-gennie.banner,\n.banner-mgid-read.banner,\n.banner-right-big.banner,\n.banner-right.banner,\n.mb20.mt20.banner-dable-read.banner","#bannertheme_left,\n#bannertheme_right",".adssingle,\na[href=\"http://kshowid.com/advertising/\"]","center",".banner_box",".banner_main,\n.leftcontent[style=\"padding:0px; margin:0px auto; height:250px; width:720px; border:0px; background:none; \"]",".img-banner","#idcomboard1.com-728x90,\n#idcomright1.com-300x250,\n#idcomright2.com-300x250,\n#idcomsensebox1.com-300x250,\n#idcomsky1.com-160x600,\n.ctnitem.ctncom","#lht2_lesson_after_vocab2_300x250_phone,\n#lht2_lesson_bottom_300x250_phone,\n#lht2_lesson_top_320x50_phone,\n#lht_base_bot_320x50_phone,\n#lht_lesson_right2_300x250_desktop,\n#lht_lesson_right_300x250_desktop",".box-ads-right","#float-banner","#rotating",".ad_990_80",".hero_adslot","#aa,\n#close,\n.mas_tamvan","#lbanner","img[width=\"240\"][height=\"240\"],\np:has(> a[href=\"#downloadnow\"])",".masthead","#floating_ads_bottom_textcss_container",".banner-top,\n.bannercol,\n.bannerfloat,\n.bannerpos,\n.cell_banner_inside","#ad-genie-container,\n#div-paralax-container",".js-tower-sticky.clearfix.kcm__tower.kcm",".nkt__stick--left,\n.nkt__stick--right",".spnsr-top,\n.vip-info",".in.modal-backdrop","#fab","[href^=\"//wizliebeg.com/\"]",".box_item_berlangganan",".sitemaji_banner","#nbpopx-wrapper,\n.jx-ads.nobar-ads","#left_ads_float_phonedevelop,\n#under-video-ads,\n.mask-ads","#wrap > table","#sidebar-right,\ncenter > table",".bannermovie,\n.banners",".content-kuss-ikln","#fatas","#previewBox2","#previewBox4","#floatbawah",".center-ban,\n.detads,\n.rc-ad-300x250,\n.skyscrapper,\n.sponsored-belt468x60",".center-paralax,\n.flying_ads",".banner-zone",".r-ads",".alignnone.size-large.wp-image-458","#cont-megabillboard",".float-ck","#float-left,\n#float-right",".sg-popup-builder-content",".lazyloaded.ads-50,\n.sgpb-popup-dialog-main-div-theme-wrapper-6",".semprotnenenmontok_2",".c-message > div:nth-of-type(1)","#me-div-gpt-ad-parallax,\n.clear.size-wide-custom.dummy","div[style=\"height:260px;\"]",".margin-right-40.left.pullquotes,\ndiv.ad-before","#forum_ads_8,\n#sodasusu_ads_side_left,\n#sodasusu_ads_side_right,\n#teaser4",".adds-top.add,\n.banner-top-m.widget-ads-top,\n.placeholder_expose,\n.placeholder_leaderboard,\n.placeholder_medium,\n.placeholder_r1,\n.placeholder_r2,\n.placeholder_r3,\n.placeholder_read_body,\ndiv.placeholder_pariwara",".\\33 .Premium.Sundul,\n.\\34 .Premium.Sundul","#right_ads_float_phonedevelop,\n.overlay","div[style=\"position:absolute; top:20px; left:45px; width:70px; background:#000; text-align:center;\"]","#fancybox-wrap","#fancybox_ajax,\n.advertisement_box1,\n.advertisement_box2","#banner-atas,\n#banner-bawah",".expandable-bottom-sticky","div[data-testid=\"divProduct\"]:has(span[data-testid=\"icnHomeTopadsRecom\"]),\ndiv[data-testid=\"divProductWrapper\"]:has(span[data-testid=\"divSRPTopadsIcon\"]),\ndiv[data-testid=\"featuredShopCntr\"],\ndiv[data-testid=\"lazy-frame\"]:has(span[data-testid=\"lblProdTopads\"]),\ndiv[data-testid=\"master-product-card\"]:has(span[data-testid^=\"linkProductTopads\"]),\ndiv[data-testid=\"topadsCPMWrapper\"],\ndiv[data-testid^=\"divProductRecommendation\"]:has(span[data-testid=\"icnHomeTopadsRecom\"]),\nsection[data-unify=\"Card\"]:has([href^=\"https://ta.tokopedia.com\"]:first-child)","#idb3","#div-Right-MediumRectangle-1","#div-Top-Leaderboard","#anchorads,\n#bannerku,\n#bannerkubawah,\n#boxright [style=\"width:300px; height:250px;\"],\n#div-Center-FullBanner-1,\n#div-Center-FullBanner-2,\n#div-Tribunnews-Home-Center-2-FullBanner,\n#skinads,\n.ads-placeholder,\n.ads-placeholder-inside,\n.belanja-picks,\n.content [style=\"width:160px; height:600px;\"],\n.ovh[style=\"width:468px;height:60px\"],\nimg[src*=\".pgi.tribunnews.com/\"]","#div-Right-MediumRectangle-3","#boxleft > .mb20",".avert","#an-Modal,\n.reveal-modal-bg","img[width=\"320\"][height=\"105\"]",".banneritem",".code-block-3.code-block","#Ad300B,\n#Ad728","#aside img[width=\"300\"][height=\"250\"],\n#lAds,\n#rAds,\n#simplemodal-container,\n#simplemodal-overlay",".download,\na[href^=\"https://144.126.241.203/\"]","[href=\"http://click2go.me/aksesklik4a\"]","#teaser5","#previewBox3","#flobwh,\na[href^=\"https://rebrand.ly/\"]",".show.popup","#floatbot,\n.appup",".mfp-ready.mfp-with-zoom.mfp-no-margins.mfp-img-mobile","#floatbanner-bottom",".ads-billboard",".nyaa300,\n.nyaa728",".adsbygoogle",".box-ads--container",".bausastra-ads",".affcoups",".inf_infusionsoft_popup","div.ui_adblock","#TopBannerBg",".bnr",".banner-sc,\n.banner-sc2,\n.col-banner,\n.masonry-brick.drm-banner-x.drm-artikel:nth-of-type(3)",".header__kasad,\n.kasad-h",".flying_carpet_div,\n[style=\"height:0; min-height:180px;\"],\ndiv:has(> [id^=\"div-gpt-ad\"][class^=\"paralax\"])","#adsoutsream,\n.heightads250","#fixslowshow","#dablewidget_RoOGdzom,\n#div-Skycrapper-Stocksetup,\n.heightads600.pad-t.pad-r.pad-l.pad-10,\n.heightads90.ads-middle-list-news,\n.text-center.center.width-px-1100","#Kolom-random-300,\n#iklan-dalam-postingan-300,\n#overlay[style=\"display: block;\"],\nimg[style=\"border:0;display:block;\"]","#top-banner-parallax,\n.banner-parallax",".adsense",".description-ads",".ads-120__left,\n.ads-120__right,\n.ads-160,\n.ads-160-600,\n.ads-300-video,\n.ads_160x600,\n.ads_970x250,\n.set-ads-468,\na[style=\"width: 100%; height: 100%; display: block; position: fixed; z-index: 1\"]","#otp_ads,\n.portlet.sideskycrapper","#bottomframe-ad,\n#skinframe-ad-left",".ad-inventory-wrapper","a[href^=\"http://www.apktiga.com/p/start-download-reayus.html\"]","#detailSkinAdLeft,\n#detailSkinAdRight",".ads-mr,\n.ads__skyscraper,\n.ads_sky,\n.clearfix.ads__horizontal",".mt20.top1,\ndiv.banner-r","#div-top-banner-transparent",".ads_sticky_footer",".ads-sticky-left,\n.ads-sticky-right,\n.bg-grey.text-center.p-0.mb-3.mt-3,\n.mb-4.bg-grey.text-center",".ad-box-wrappr,\n.row > .show-desktop > div,\n.underlay-ad-text-box",".nkt__stick","#main-banner-middle,\n.legend_banner-container,\n.stickybanner",".gambar_pemanis",".ftadss",".parallax_ads,\n.widebanner.banner,\ndiv.showcase.banner,\ndiv.skycrapper.banner","[href^=\"https://scratchy-trick.com/\"]",".cls.code-block-center",".lepopup-popup-loader",".banner-skin--left,\n.banner-skin--right,\n.banner__giant.banner,\n.banner__left.banner,\n.banner__right.banner,\n.banner__top.banner",".ads-popup__inner",".ads.single_post_content,\n.animated.ads",".adbox","#bkgOverlay,\n#bn-premium,\n#delayedPopup,\n#premium,\n.d-sidebar,\n.skinner-left,\n.skinner-right,\n[id^=\"gpt-inline\"]",".box-ads-300x250",".text-align-center.box-ads-content",".in_up_ad-area",".cads","#ilang2",".modal",".box-banner","#floating_ads_bottom_textcss2",".wait","[href=\"javascript:showHideGB()\"],\n[href^=\"http://dwatngkas.\"],\na[href^=\"http://cocobet.\"]","#ilang1",".adv",".bannersinglefot","#googlebox","#floatbtmleft,\na[href^=\"//angel4d.com/\"],\na[href^=\"//telolet4d.com/\"]",".iklanSUKI",".slot-iklan",".float_tengah,\n.separator","#iklanFloat,\n.iklan",".lenyap",".ad-float-image",".rsABlock","a[href=\"https://klik.fun/Kp7S5\"]",".col-xs-12.col-md-6.col-lg-6","#previewBox",".bot.ads","ins.adsbygoogle","#float-pop","#overlay-pop","#fancybox-overlay","[href=\"http://bit.ly/adsvbola\"],\n[id^=\"yui-gen\"].postcontainer",".bm.overlay","a.bnner","[href=\"https://klik.fun/ZyslX\"]","[href=\"https://144.126.241.203/invite/c6c83up\"],\n[href=\"https://bit.ly/anoboySG88\"],\n[href=\"https://kliksaya.info/mcdanoboy\"]",".adbtm,\n.bh-ad,\n.block-bh-googledfp,\n.center-block.img-responsive",".cari-ads",".td-banner-bg.td-banner-wrap-full","#Taboola_widget,\n#rec_ad4,\n.tonal__standfirst",".adplaceholder-mrec",".code-block-6,\ndiv[data-ub-carousel]","#sadl,\n#sadr",".ktz_banner","#sct_banner_top,\n#videoad1",".ads-header-5","#bmpop_adpB",".placeholder-container:has(.ads-container)","img.aligncenter",".cfmonitor","#banner-popup-desktop",".idmupi-topbanner","#banner-right",".clearfix.act2-970x90:nth-of-type(1),\n.clearfix.act2-970x90:nth-of-type(3)","img[width=\"1020\"][height=\"350\"]","#semprot_ads_side_left,\n#semprot_ads_side_right","#jsemrp_372_719,\n#jsemrp_373_873,\n#jsemrp_374_469,\n#jsemrp_380_290",".semprotpokemon_1,\n.semprotpokemon_2",".coliklan",".cm-popup-modal",".banner3",".blox","#floatads2,\n#floatads3",".anuads","a[title^=\"manga4d\"]","#openpopunder","#adrandpop,\n#aplikasi",".mvic-btn","#floatads,\n.active.adde_modal-overlay,\n.adde_modal_detector-show.adde_modal_detector","a[href^=\"//bit.ly/\"]","#videoOverAd","#tutup,\n#tutup2","#float-atas",".header-banner","#lmd-iklan",".swal-overlay--show-modal.swal-overlay",".s-sponsor","#popuppress-9119,\n#top-banner-content","#main-popup",".banner-middle","[class*=\"banner\"]","a[target=\"_blank\"][rel^=\"noopener noreferrer\"] > img[src$=\".gif\"]",".kzl-header.kzl","[href=\"https://klik.gg/manhwadesu\"]",".iklan-tengah","[href$=\"/referral/nontoncinema\"],\na[href^=\"http://referral.\"]",".box_banner","[href=\"//dumbpop.com/help.xml\"]","#largebanner","table","#ffbp-bg,\n#ffbp-body,\n#ffbp-close",".btm_ban",".setdah","a[rel^=\"nofollow noopener\"] > img[src$=\".gif\"]","#ffbp,\n#popup",".gmr-bannerpopup,\n.idmuvi-floatbanner,\n[href^=\"//avgirls.asia/\"]",".add,\n.mobi.content-left,\n.mobi.content-right","#wpb_overlay,\n.wpb-image-popup.wpb-main-wrapper","#epmblock",".av-content-full",".adsincenter","#bannerhomefooter","#ftadsth",".ik-overlay","#player-side-left","#home-bnner-content","#home-bnner2-content,\n.reklam-goster-sag,\n.reklam-goster-sol","#directorio > .random > center","#sidebar_right > .side:nth-of-type(5) > .textwidget,\n#sidebar_right > .side:nth-of-type(6) > .textwidget,\n#sidebar_right > .side:nth-of-type(7) > .textwidget,\n#sidebar_right > .side:nth-of-type(8) > .textwidget,\n#sidebar_right > .side:nth-of-type(9) > .textwidget",".bannerwrap","#previewBox1","#top-bnner-content",".ads-big,\n.ads-foot,\n.ads-right2,\n.container_skinad",".fancybox-skin",".navbar-brand.bot,\ndiv[id^=\"previewBox\"]",".ads728-slot-panjang",".banner-premium","[class=\"sc__wrp\"]","[class^=\"xnxx5-\"]","#content > div:nth-of-type(1)","#playerOverplay"];

const hostnamesMap = new Map([["agenbokep.co",[0,85]],["agenbokep.guru",[0,85]],["agenbokep.pro",0],["anoboy.digital",[1,80,285,286]],["anoboy.media",[1,286,373]],["anoboy.watch",1],["anoboy.ink",2],["bioskopkeren.beauty",3],["bioskopkeren.bond",3],["bioskopkeren.sbs",3],["158.69.0.212",5],["terbit21.cafe",[5,68]],["movies21.co",[5,68]],["bioskopkerenin.com",5],["kebioskop21.com",5],["lk21tv.com",[5,68,150,218,219]],["dunia21.cx",[5,68]],["bioskopkeren.dev",5],["lk21.web.id",[5,38,218,349]],["sinemaindo.web.id",[5,38,218,343,353]],["terbit21.in",5],["kebioskop21.online",5],["ganool.watch",[5,68]],["ganool21.watch",5],["cctvbokep.bet",6],["dutasex.bio",6],["perawabokep.cam",6],["perawanbokep.cam",6],["cctvbokep.help",6],["budiarto.id",[6,298]],["cinemaindo.web.id",[6,15,343,344]],["malemjumat.ink",6],["malemjumat.lol",6],["malemjumat.mom",6],["dutasex.top",6],["filmapik.tv",6],["5.182.209.205",7],["filmapik.kim",7],["filmapik.sbs",7],["filmapik21.space",7],["149.102.130.200",[8,27]],["94.250.202.221",8],["207.244.225.48",[8,55]],["154.12.229.9",[8,27]],["drakorindo.best",8],["giladrakor.com",8],["gudangmovies21.lol",8],["mangakita.net",[8,11,12,47,87,402]],["gatsunime.org",[8,419]],["indosemi45.org",8],["manhwaid.org",8],["layarkeren.site",8],["gudangmovies21.skin",8],["kazemanga.xyz",[9,255]],["65.108.132.145",[10,17,18,33,34]],["oploverz.bz",[10,33,67]],["sebokep.com",[10,255,256]],["oploverz.top",[10,11,12,17,18,33,67]],["45.12.2.2",[11,12,28,45]],["107.152.37.223",[11,50]],["15.235.11.45",[11,12,17,33,34,54]],["157.245.12.72",11],["komikindo.co",[11,93]],["komikstation.co",[11,94]],["manhwalist.com",11],["mareceh.com",11],["nontondramaseri.com",11],["oploverz.fan",[11,12,17,18]],["anoboy.id",11],["kiryuu.id",[11,94]],["manhwaindo.id",11],["isekaisubs.web.id",[11,17,18,21]],["oploverz.co.in",11],["oploverz.info",[11,12,17,18,33]],["westmanga.info",[11,361]],["komikcast.io",11],["komikdewasa.me",[11,12]],["komikindo.me",11],["manhwaindo.me",[11,12]],["manhwaland.mom",11],["kazefuri.net",[11,399]],["mangashiro.net",[11,17,80,403]],["mirrorkomik.net",[11,404]],["animasu.nl",[11,412]],["mangakyo.org",[11,12]],["anichin.top",11],["manhwaland.top",11],["oploverz.tv",[11,12,17,18]],["anichin.vip",11],["kazefuri.vip",11],["komik18.art",[12,60]],["komikdewasa.art",[12,61]],["bioskop201.biz",[12,18,63,64]],["animasu.cc",[12,70]],["bioskop21.co",12],["bioskopgalaxy21.com",[12,18,114,116]],["doujinlands.com",12],["downloadfilmbaru.com",[12,18,149]],["layarbiru21.com",12],["lmanime.com",12],["realmscans.com",[12,17,18]],["warungkomik.com",12],["22cinema.download",[12,18,287]],["nontonmovie.web.id",[12,18,131,351]],["luciferdonghua.co.in",12],["filmbaru.in",[12,18]],["luciferdonghua.in",[12,17,18]],["pemersatu.link",12],["sektedoujin.lol",12],["komikmanhwa.me",[12,372]],["kumapoi.me",12],["mangaindo.me",12],["kikil.net",12],["komiku.net",[12,18,400]],["movie76.net",[12,18,112,114,116]],["ganool.nl",[12,18]],["ganool.ph",[12,18,362]],["cinemaindo.stream",[12,17,18,132]],["cinemaindo.tv",[12,17,18,446]],["animexin.xyz",[12,21]],["kanzenin.xyz",12],["kuramanime.xyz",[12,47,458]],["95.216.163.177",13],["192.99.70.18",13],["samehadaku.cam",[13,20,21]],["22cinema.com",[13,101]],["topgans.blogspot.com",13],["dapurpacu.com",[13,143]],["dewanontons.com",13],["download-lagu-mp3.com",13],["embed.dramanices.com",13],["duniafilm21.com",13],["kompas.com",[13,122,125,204,205]],["smallencode.com",13],["samehadaku.day",[13,20,21,22]],["embed.dramacool.es",13],["republika.co.id",[13,314]],["komikindo.info",13],["dunia21.ltd",13],["k-vid.net",13],["otakuindo.net",13],["neumanga.tv",[13,17]],["layarkaca21.com",15],["layarkaca21.web.id",15],["layarkaca21.net",15],["lk21.org",15],["lk21official.wiki",16],["film-ganool.co",[17,18]],["cinemaindo.com",[17,18,132]],["film-ganool.com",[17,18,158]],["filmroster.online",17],["bioskopmovie.tv",[18,445]],["ruangbokep.bond",19],["sibokep.bond",19],["ruangbokep.sbs",19],["streamingbokeponline.site",19],["ruangbokep.top",19],["streamingbokeponline.top",19],["kamarbokep.xyz",19],["kebokepanku.xyz",19],["samehadaku.run",[20,21,22]],["149.28.158.117",21],["212.32.226.234",21],["awsubs.co",[21,87,88]],["anixlife.xyz",21],["samehadaku.win",22],["shinigami.id",[23,333]],["51.81.238.0",24],["193.178.172.113",25],["157.245.195.114",26],["75.119.147.12",27],["194.163.158.12",27],["45.67.231.215",27],["89.117.61.35",27],["46.149.76.81",27],["81.0.220.98",27],["cinema-indo.co",27],["zonafilm.icu",27],["nontonlk21.live",[27,116]],["kawanfilm21.online",[27,47]],["kawanfilm21.pro",[27,47]],["194.163.183.129",[28,29]],["37.49.229.132",[30,31]],["juraganfilm.icu",[30,292]],["216.155.135.144",32],["oploverz.best",33],["oploverz.love",33],["80.209.252.146",35],["164.68.127.15",36],["194.233.87.224",36],["154.26.132.73",36],["bokepmobile.fun",36],["103.194.170.153",37],["xtubecinema.club",[37,84]],["xtubecinema.top",37],["46.166.167.16",[38,39,40]],["lk21.cam",38],["nekopoi.care",[38,69]],["nekopoi.cash",[38,69]],["gudangmovies21.cc",38],["indomovies.club",38],["indoxx1.club",[38,76]],["bioskop168.co",[38,89]],["filmbioskop21.co",38],["layarmovie21.co",38],["nontonsub.co",38],["01nonton.com",38],["123drakor.com",[38,39]],["bioskop45.com",[38,39]],["idbioskop.com",[38,39]],["nonton-streaming.com",38],["nonton789.com",38],["nontongratis88.com",38],["nontonmovie81.com",38],["nontonsub.com",[38,80]],["sashahillfilm.com",38],["semprot.com",[38,40,257]],["semprotku.com",[38,40]],["thirdstarfilm.com",38],["layarkacaxxi.id",38],["meownime.id",38],["zonabola.id",38],["nekopoi.lol",[38,69]],["animeboy.me",38],["nontonani.me",38],["nontondrama.me",38],["ns21.me",[38,39,49]],["sukamovie.mobi",[38,48]],["gandhool.net",38],["indomv.net",38],["nonton33.net",[38,39]],["satujiwa.net",38],["bioskop168.online",[38,89]],["layarxxi.online",[38,415]],["bioskop168.pro",[38,80,89]],["lk21.rip",38],["dewamovie.tv",38],["drakorindo.tv",[38,39]],["filmroster.tv",38],["ganoolmovie.video",38],["bioskopkeren.club",39],["bioskopxx1.com",39],["moviebaru21.com",[39,105]],["serunonton.com",39],["awsubs.id",39],["bioskopkeren.online",39],["indoxxi.top",[39,80,443,444]],["ns21.top",39],["bioskopkeren.xyz",39],["188.166.39.172",41],["173.199.167.192",42],["krucil.com",42],["krucil.net",42],["139.99.33.192",43],["164.68.105.199",44],["drakorindofilms.net",44],["bokepid.wiki",[44,456]],["173.249.49.204",46],["139.99.33.205",47],["139.99.120.222",[47,49]],["185.231.223.76",[47,56,57]],["gudangmovies21.cfd",47],["pecintabokep.club",[47,81]],["21filem.co",47],["bioskop45.co",47],["lk21go.fun",47],["manganime.in",[47,356]],["www.nontondramas.net",47],["movieajip.online",47],["otakudesu.watch",47],["gm21.xyz",47],["139.99.33.210",48],["bokepfull.fun",48],["videocrot.org",[48,351]],["nontonserial.com",[49,243,244,245]],["nonton21.tv",[49,244,245,288,363]],["139.99.61.225",51],["94.237.74.225",52],["streamingbokeps.co",[52,99]],["149.56.24.226",53],["kricom.id",53],["gomunime.biz",57],["68.65.123.84",58],["didrakorindo.com",58],["simontok.cx",58],["simontok.ink",58],["avtub.io",58],["sukanonton.online",58],["indoxxi.pictures",[58,428]],["indoxx1.pw",[58,432]],["avtub.sx",58],["indoxx1.art",59],["indoxxi.bz",59],["mangaceng.com",60],["dewabioskop21.asia",62],["dewabioskop21.org",[62,416,417]],["b201.info",[63,358]],["kabarviral.blog",65],["lewat.club",[65,77]],["mediapermata.com.bn",66],["terkini.id",[66,337]],["cafecinema.cc",71],["lk21.io",71],["dramamu.net",71],["lk21.cc",72],["dunia21.top",[72,80]],["dutafilm.cfd",73],["dutafilm.observer",[73,413]],["dutafilm.us",73],["bioskop007.club",74],["bioskop55.club",[74,75]],["bioskop1080.com",74],["bioskop90.com",[74,115]],["cinema007.com",74],["cinemastar21.com",[74,79]],["nontononline99.com",74],["bioskop55.me",[74,116]],["bioskop90.me",74],["bioskop212.net",[74,79]],["apk.miuiku.com",77],["nf21.club",78],["nontonfilm21.club",79],["sinema21.id",79],["ns21.club",80],["animeindo.co",80],["idxxi.co",80],["lk21indo.co",80],["lk21xxi.co",80],["bioskopbos.com",80],["dramaind.com",80],["filmbioskop21.com",80],["lk21n.com",80],["nontondramas.com",80],["otakufile.com",80],["bioskopkeren.fun",80],["lk21c.fun",[80,289]],["subindo.id",80],["animebatch.web.id",80],["eka.web.id",[80,345]],["kazefuri.web.id",[80,348]],["mangaku.in",[80,350]],["lk-21.me",80],["neonime.net",80],["nontongratis88.net",80],["anoboy.org",80],["nontonbioskop21.org",80],["cinemaindo.pro",80],["layarindo21.pro",80],["animeku.tv",80],["sukamovie.club",[82,83]],["indoxx1.co",82],["idxxx1.com",[82,175]],["sidrama.com",82],["akurat.co",86],["benfile.com",87],["blifnews.com",87],["kabar2.com",[87,194]],["mangacanblog.com",[87,222]],["semuaberita.com",87],["mangaku.web.id",[87,350]],["nusareborn.in",87],["film21terbaru.org",87],["fastdrama.co",[90,91]],["hkfree.co",90],["iyottube.co",92],["iyottube.com",92],["komikcast.com",94],["bacamanga.id",94],["komikindo.id",[94,328]],["nontondramaonline.co",95],["nontondramaonline.net",95],["www.parapuan.co",[96,97,98]],["bolasport.com",[96,98,121,122,123,124,125]],["www.sonora.id",[96,229,334]],["tempo.co",100],["90animax.com",102],["animebatchs.com",[103,104]],["goblintvfree.com",103],["merdeka.com",[103,225]],["nanime.in",103],["juragan-anime.net",[103,398]],["anixverse.com",105],["astroawani.com",106],["autonetmagz.com",107],["bagas31.com",108],["beritasatu.com",[109,110]],["detik.com",[109,134,135,136,137,138,144,145,146]],["bioskop78.com",[111,112,113,114]],["cnbcindonesia.com",[111,134,135,136]],["nonton33.com",113],["bioskop99.me",[113,364]],["bioskop99.mobi",113],["nonton33.tv",113],["juragantomatx.com",[114,116]],["juraganmovie.net",[114,116]],["bioskopstar88.com",116],["cinemaqq.com",[116,133]],["bisnis.com",117],["blibli.com",118],["blogspot.com",119],["starringheavenlyrics.blogspot.com",120],["gridoto.com",[121,125,162,163,164]],["www.grid.id",[122,322]],["kompas.tv",[124,162,450]],["bukalapak.com",126],["m.bukalapak.com",127],["cdramabase.com",128],["ceritasexindonesia.com",129],["clip.cewecewe.com",130],["cinema-indo.com",131],["nonton21.net",131],["haibunda.com",[134,135,138,141,145,166]],["cnnindonesia.com",[135,136,137,138,139,140,141]],["insertlive.com",[139,141]],["teknoup.com",[139,267,268]],["comotin.com",142],["pikiran-rakyat.com",[145,252]],["beautynesia.id",[146,297]],["inet.detik.com",147],["dewantn.com",148],["dunia21tv.com",[150,151]],["cinema-indo.web.id",[150,151]],["layarcinema.tv",[150,151]],["duwitmu.com",152],["dwanonton.com",[153,154]],["dewanonton.vip",[153,454]],["eramuslim.com",155],["faktabali.com",156],["filem456.com",157],["gadgetren.com",159],["gamebrott.com",160],["gopego.com",161],["motorplus-online.com",[164,228,229,230]],["gudangpemain.com",165],["harianjogja.com",167],["solopos.com",167],["hdtvku.com",168],["hellosehat.com",169],["hipwee.com",170],["hotabis.com",171],["iberita.com",172],["idntimes.com",173],["sindonews.com",[173,259]],["idpelago.com",174],["indobokepz.com",176],["indogamers.com",177],["indonesiamovies21.com",178],["indosiar.com",179],["indotelko.com",180],["indoxtream.com",181],["indoxx1.com",182],["idxx1.top",[182,371,442]],["indoxximovie.com",183],["inilah.com",[184,185]],["kompasiana.com",[184,207]],["ekonomi.inilah.com",186],["teknologi.inilah.com",[186,187]],["isdaryanto.com",188],["jakbos.com",189],["jalantikus.com",190],["jendelakaba.com",191],["jenismac.com",192],["k-vid.com",193],["dramacool.io",193],["dramanice.io",193],["kabar24.com",195],["kapanlagi.com",[196,197]],["otosia.com",197],["m.kapanlagi.com",198],["kertashitam.com",199],["klikanggaran.com",200],["www.hops.id",200],["klikseru.com",201],["komikbaru.com",202],["komikstation.com",203],["tribunnews.com",[205,273,275]],["indonesiasatu.kompas.com",206],["www.kompasiana.com",208],["kotakgame.com",209],["kshowid.com",210],["kuyhaa-me.com",211],["gigapurbalingga.net",211],["lapar.com",[212,213]],["loveindonesia.com",[212,220]],["ld2tv.com",214],["lensaindonesia.com",215],["www.lingohut.com",216],["liputan6.com",217],["lk21.pw",218],["malaysiakini.com",221],["mangafap.com",223],["info.mapsaddress.com",224],["info.vebma.com",[224,280]],["info.gambar.pro",[224,280]],["mgkomik.com",226],["modifikasi.com",227],["grid.id",[230,320]],["mydramalist.com",231],["nanimex1.com",232],["negumo.com",233],["nekonime.com",234],["neonime.com",235],["neonime.vip",235],["ninemanga.com",236],["nobartv.com",237],["nontonbokeps.com",238],["nontonfilm77.com",239],["nontonfilm88.com",240],["nontonme.com",241],["nontonplus.com",242],["fb21.tv",[244,245,288,448]],["dunia21s.fun",[245,288]],["lk21.li",[245,288,363]],["nontonsini.com",246],["okezone.com",247],["news.okezone.com",248],["oktavita.com",249],["otomania.com",250],["palingseru.com",251],["readwebtoons.com",253],["remo-xp.com",254],["siherp.com",258],["tetew.info",258],["greget.space",258],["situshp.com",260],["smartphoneku.com",261],["sodasusu.com",262],["suara.com",263],["sundul.com",264],["susterbokep.com",265],["tabloidbintang.com",266],["idfl.me",[267,368,369]],["r-l.me",[267,368]],["tempointeraktif.com",269],["thejakartapost.com",270],["tokopedia.com",271],["topfilmz.com",272],["blog.tribunjualbeli.com",[273,274]],["makassar.tribunnews.com",276],["wartakota.tribunnews.com",277],["webdesign.tutsplus.com",278],["unixmen.com",279],["waralabakan.com",281],["windowsreport.com",282],["wowkeren.com",283],["zonabola.com",284],["nomat.fun",290],["lk21.host",291],["layardrama21.icu",293],["alinea.id",294],["animeindo.id",295],["apkmod.id",296],["radarlombok.co.id",296],["novelgo.id",296],["paraedu.id",296],["hightech.web.id",[296,347]],["nama.web.id",296],["ceklist.id",299],["alona.co.id",300],["cerpen.co.id",301],["chip.co.id",302],["cosmogirl.co.id",303],["anime17.net",[303,381]],["dream.co.id",304],["kaskus.co.id",305],["katadata.co.id",306],["kontan.co.id",307],["pusatdata.kontan.co.id",308],["stocksetup.kontan.co.id",309],["lihat.co.id",310],["orami.co.id",311],["pontianakpost.co.id",312],["pricebook.co.id",313],["viva.co.id",315],["log.viva.co.id",316],["wartaekonomi.co.id",317],["filmterbaru.id",318],["ggwp.id",319],["nextren.grid.id",321],["inews.id",323],["www.inibaru.id",324],["investor.id",325],["jurnalisindonesia.id",326],["kabargames.id",327],["komikcast.net",328],["komikindo.pro",[328,430]],["manganime.id",329],["medcom.id",330],["slurr.my.id",331],["onlinemetro.id",332],["tek.id",335],["terasjakarta.id",336],["tirto.id",338],["uzone.id",339],["internetpositif.uzone.id",340],["animeindo.web.id",341],["animeindo.video",341],["animekompi.web.id",342],["filmbagus21.info",344],["ganool.web.id",346],["mangaku.site",[350,440]],["resep.web.id",352],["suki48.web.id",354],["zigi.id",355],["nanimex.in",357],["senimovie.info",[359,360]],["senimovies.net",359],["ganool.is",362],["ganool.se",[362,436]],["ganool.st",362],["doroni.me",365],["dunia21.me",[366,367]],["dunia21.net",367],["dunia21.org",367],["dunia21.wtf",367],["idtube.me",[370,371]],["bharian.com.my",374],["mforum.cari.com.my",375],["hijabista.com.my",376],["majalahpama.my",376],["nona.my",376],["vanillakismis.my",376],["utusan.com.my",377],["mediahiburan.my",378],["rasa.my",379],["youtube-mp3.my",380],["animeindo.net",382],["awnime.net",383],["bintangmawar.net",384],["briliofood.net",385],["cinema-indo.net",386],["dramaqu.net",387],["duniaku.net",388],["filmace21.net",389],["filmbagus88.net",390],["filmku.net",391],["funtasticko.net",392],["gadismalam.net",393],["harakahdaily.net",394],["ibugil.net",395],["indoxxi.net",396],["inidramaku.net",397],["kurazone.net",401],["nobarfilm21.net",405],["sangetods.net",406],["seri168.net",407],["torjack.net",408],["tvkabel.net",409],["unyil.net",410],["zonapanaz.net",411],["indobokep.pro",411],["bokepml.online",414],["dwa21.org",[416,418]],["kumpulmanga.org",420],["manhwadesu.org",421],["nanimex.org",422],["nontoncinema.org",423],["otakuindo.org",424],["pakbos21.org",425],["pkspiyungan.org",426],["satujiwa.org",427],["bokepkita.pro",429],["otakudesu.pro",431],["layardrama21.rest",433],["file.rocks",434],["lonteku.sbs",435],["cmovieshd.se",436],["myasiantv.se",437],["ganol.si",438],["komikcast.site",439],["komikcast.vip",439],["mangaku.vip",440],["samehadaku.skin",441],["indoxxi.tv",[443,449]],["elde.tv",447],["xx1.tv",449],["layarkaca21.tv",451],["lk21.tv",451],["ns21.tv",452],["ns21.us",452],["drakorasia.us",453],["kurina.vip",455],["indostreamings.xyz",457]]);

const entitiesMap = new Map([["agenbokep",0],["anoboy",[1,2]],["bioskopkeren",[3,4,5]],["layarkaca21",[4,14,15]],["dutasex",6],["perawanbokep",6],["filmapik21",7],["gudangmovies21",[8,9,10]],["komikcast",11],["komikdewasa",[11,12]],["oploverz",[11,12,17,18]],["komikindo",13],["samehadaku",[13,20,21,22]],["nontondrama",16],["ruangbokep",19],["streamingbokeponline",19],["shinigami",23]]);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/