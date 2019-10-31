@charset "UTF-8";
/* Dependencies */
/* CSS Document - Surcharge css Agence */
/* fonts */
@font-face {
  font-family: 'sofiapro-light';
  src: url("fonts/sofia/sofiapro-light-webfont.woff2") format("woff2"), url("fonts/sofia/sofiapro-light-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal; }
@font-face {
  font-family: 'sofiapro-bold';
  src: url("fonts/sofia/sofiapro-bold-webfont.woff2") format("woff2"), url("fonts/sofia/sofiapro-bold-webfont.woff") format("woff");
  font-weight: normal;
  font-style: normal; }
@font-face {
  font-family: 'akrobat-bold';
  src: url("fonts/akrobat/Akrobat-ExtraBold.woff2") format("woff2"), url("fonts/akrobat/Akrobat-ExtraBold.woff") format("woff");
  font-weight: normal;
  font-style: normal; }
@font-face {
  font-family: 'akrobat-regular';
  src: url("fonts/akrobat/Akrobat-Regular.woff2") format("woff2"), url("fonts/akrobat/Akrobat-Regular.woff") format("woff");
  font-weight: normal;
  font-style: normal; }
@font-face {
  font-family: 'iconsia';
  src: url("fonts/iconsia/iconsia.eot?g8iryt");
  src: url("fonts/iconsia/consia.eot?g8iryt#iefix") format("embedded-opentype"), url("fonts/iconsia/iconsia.ttf?g8iryt") format("truetype"), url("fonts/iconsia/iconsia.woff2?g8iryt") format("woff2"), url("fonts/iconsia/iconsia.woff?g8iryt") format("woff"), url("fonts/iconsia/iconsia.svg?g8iryt#icomoon") format("svg");
  font-weight: normal;
  font-style: normal; }
/*@font-face {
    font-family: 'bebas_neuebold';
    src: url('fonts/bebasneue/bebasneue_bold-webfont.woff2') format('woff2'), 
         url('fonts/bebasneue/bebasneue_bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'bebas_neueregular';
    src: url('fonts/bebasneue/bebasneue_regular-webfont.woff2') format('woff2'), 
         url('fonts/bebasneue/bebasneue_regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'open_sansbold';
    src: url('fonts/opensans/opensans-bold-webfont.woff2') format('woff2'), 
         url('fonts/opensans/opensans-bold-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'open_sansregular';
    src: url('fonts/opensans/opensans-regular-webfont.woff2') format('woff2'),
         url('fonts/opensans/opensans-regular-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}*/
/*[class^="icon-"], [class*=" icon-"] {
  font-family: 'iconsia' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}*/
.icon-sia-icon-account:before {
  content: "\e900"; }

.icon-sia-icon-app:before {
  content: "\e901"; }

.icon-sia-icon-badgepro:before {
  content: "\e902"; }

.icon-sia-icon-calendar:before {
  content: "\e903"; }

.icon-sia-icon-fb:before {
  content: "\e904"; }

.icon-sia-icon-grid:before {
  content: "\e905"; }

.icon-sia-icon-instagram:before {
  content: "\e906"; }

.icon-sia-icon-linkedin:before {
  content: "\e907"; }

.icon-sia-icon-list:before {
  content: "\e908"; }

.icon-sia-icon-list2:before {
  content: "\e909"; }

.icon-sia-icon-locker:before {
  content: "\e90a"; }

.icon-sia-icon-magnify:before {
  content: "\e90b"; }

.icon-sia-icon-mail:before {
  content: "\e90c"; }

.icon-sia-icon-map:before {
  content: "\e90d"; }

.icon-sia-icon-pdf:before {
  content: "\e90e"; }

.icon-sia-icon-phone:before {
  content: "\e90f"; }

.icon-sia-icon-play:before {
  content: "\e910"; }

.icon-sia-Icon-shopping:before {
  content: "\e911"; }

.icon-sia-icon-snapchat:before {
  content: "\e912"; }

.icon-sia-icon-ticket:before {
  content: "\e913"; }

.icon-sia-icon-tv:before {
  content: "\e914"; }

.icon-sia-icon-twitter:before {
  content: "\e915"; }

.icon-sia-icon-youtube:before {
  content: "\e916"; }

strong,
b {
  font-family: "akrobat-bold", arial, sans-serif;
  font-weight: normal; }

/* masquage */
.block-title {
  display: none; }

.global-search-form {
  /*display:none;*/ }

.global-search-form .gsf-trigger {
  display: none; }

.siapro .link-view-all {
  display: none; }

.slider-pagin-btn {
  display: none; }

/* debug et test */
.debug {
  border: 1px solid red; }

/* general override */
* {
  text-decoration: none; }

html {
  overflow-x: hidden; }

body {
  font-size: 1.8em;
  background: #f7f7f7;
  font-family: 'akrobat-regular', helvetiva, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden; }

div,
textarea,
table,
td,
th,
code,
pre,
samp {
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none; }

.wrapper,
.site-wrapper {
  width: 100%;
  max-width: 100%;
  background: #f7f7f7;
  padding: 86px 0 0 0;
  -webkit-transition: padding 0.25s ease;
  -o-transition: padding 0.25s ease;
  transition: padding 0.25s ease; }

.global-wrapper {
  background: #f7f7f7; }

body.page-rubric.content329649 .global-wrapper,
body.partner .global-wrapper,
body.article .global-wrapper,
body.article_list .global-wrapper,
body.catalogue .global-wrapper {
  margin-top: 86px; }

body.partner .wrapper {
  padding-top: 0;
  margin-top: 180px;
  z-index: 999;
  position: relative; }

body {
  background: #35abd3; }

body.search .global-wrapper::before,
body.sitemap .global-wrapper::before,
body.catalogue .global-wrapper::before,
body.page-rubric.content329649 .global-wrapper::before,
body.partner .global-wrapper::before,
body.article .global-wrapper::before,
body.article_list .global-wrapper::before,
body.catalogue .global-wrapper::before {
  content: "";
  background-color: #80a1c0;
  background-image: url(img/sia2018/general/bg-nav-sia-mobile.jpg);
  background-size: 100%;
  background-position: top -10px center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100%;
  height: 180px;
  position: absolute;
  top: 0;
  left: 0; }

h2,
.h2-like {
  border-bottom: 0;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  letter-spacing: 0; }

.clear {
  clear: both; }

.main-title-with-link > .main-title {
  float: none;
  font-weight: normal; }

.gla-item > a:hover .gla-item-content,
.gla-item > a:active .gla-item-content,
.gla-item > a:focus .gla-item-content {
  background: white;
  color: #293a4d; }

.article-wrapper img.at-illust {
  width: auto;
  height: auto;
  margin: 0 auto;
  display: block; }

.ls-trigger:active,
.ls-trigger:focus {
  outline: none; }

.tt-dropdown-menu {
  display: none; }

.ls-trigger::after {
  content: '›';
  border: 0 none;
  font-size: 18px;
  font-family: 'akrobat-regular', helvetiva, arial, sans-serif;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
  background: red;
  margin-top: 1px;
  margin-right: -8px;
  margin-left: 17px; }

.lang-switcher .ls-trigger {
  font-family: 'akrobat-regular', helvetiva, arial, sans-serif; }

.lang-switcher.is-open .ls-trigger:after {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg); }

.lang-switcher .ls-lang-link {
  color: #293a4d !important; }

.lang-switcher .ls-lang-link:hover {
  color: #83b81a; }

.lang-switcher abbr {
  border: 0 none; }

.ls-lang-item.is-active {
  font-weight: normal;
  font-family: 'akrobat-bold', helvetiva, arial, sans-serif; }

/* Top + header */
.quicklinks li {
  display: inline-block; }

.openCapTrigger {
  color: #9f9f9f;
  display: block;
  cursor: pointer;
  text-indent: -9999px;
  padding: 0;
  height: 32px; }

.mn-item-has-submenu::after {
  top: 5px;
  right: 11px; }

header.site-banner {
  background: none;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  height: auto;
  position: fixed !important;
  -webkit-transform: none !important;
  -ms-transform: none !important;
  transform: none !important;
  top: 0 !important;
  min-width: 100%; }

header.site-banner.headroom--not-top div#bandeau-header #logo-salon img,
header.site-banner.headroom--not-top div#bandeau-header {
  height: 54px;
  overflow: hidden; }

header.site-banner.headroom--not-top + .wrapper, header.site-banner.headroom--not-top + .site-wrapper {
  padding-top: 54px; }

header.site-banner.headroom--not-top #cxpmClientAccountWidget {
  height: 0; }

header.site-banner.headroom--not-top div#bandeau-header #logo-salon {
  width: 55px; }

header.site-banner.headroom--not-top div#bandeau-header #infos-salon .bigtitre {
  font-size: 21px;
  line-height: 22px;
  margin-top: 5px; }

header.site-banner.headroom--not-top div#bandeau-header #infos-salon p.last {
  border-top-color: transparent; }

header.site-banner.headroom--not-top div#bandeau-header #infos-salon .bigtitre.bis {
  font-size: 19px;
  margin-top: -2px;
  letter-spacing: 2.7px; }

header.site-banner .inside {
  position: relative;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  background: transparent;
  padding: 0;
  height: auto; }

header.site-banner .inside::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 35px;
  background-color: white;
  left: 0;
  top: 0;
  display: none;
  z-index: -1; }

header.site-banner .quicklinks {
  display: inline-block;
  padding-left: 0;
  padding-right: 7px;
  border-right: 1px solid #e6e6e6;
  height: 35px;
  padding-left: 5px; }

header.site-banner .quicklinks.social {
  position: absolute;
  left: 0;
  top: 0; }

header.site-banner .quicklinks.topmenu {
  position: absolute;
  top: 0;
  right: 185px;
  font-size: 13px;
  padding: 0; }

body.visiteur-pro .quicklinks.topmenu {
  display: none; }

.site-banner .lang-switcher {
  display: none; }

header.site-banner .quicklinks.topmenu [class^="btn"] {
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  font-size: 13px;
  font-weight: normal;
  padding: 6px 14px 9px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

header.site-banner .quicklinks.topmenu [class^="btn"] .txt-btn {
  vertical-align: baseline; }

header.site-banner .quicklinks.topmenu [class^="btn"]::before {
  display: inline-block;
  content: '›';
  padding-right: 2px;
  font-size: 16px; }

header.site-banner .quicklinks.topmenu [class^="btn"]:hover {
  color: white; }

header.site-banner .quicklinks.topmenu .linkid306292 [class^="btn"]:hover {
  background-color: #4b2980; }

header.site-banner .quicklinks.topmenu .linkid306293 [class^="btn"]:hover {
  background-color: #0058DE; }

header.site-banner .quicklinks.topmenu .linkid306294 [class^="btn"]:hover {
  background-color: #293a4d; }

header.site-banner .quicklinks.topmenu [class^="btn"]:hover::before {
  color: white; }

header.site-banner .quicklinks.topmenu li.linkid306292 a {
  color: #4b2980;
  font-size: 12px; }

header.site-banner .quicklinks.topmenu li.linkid306293 a {
  color: #0058DE;
  font-size: 12px; }

header.site-banner .quicklinks.topmenu li.linkid306294 a {
  font-size: 12px; }

header.site-banner #cxpmClientAccountWidget {
  display: block;
  position: absolute;
  top: 54px;
  right: 0;
  border-right: 0 none;
  font-size: 13px;
  line-height: 35px;
  background: transparent;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  height: 32px;
  width: 54px;
  background-image: url(img/sia2018/general/header-top-user-white.svg);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 19px auto;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

header.site-banner .sb-menu-trigger {
  background-color: white !important;
  color: #009cd8;
  width: 54px;
  height: 54px;
  right: 0;
  left: auto;
  z-index: 999; }

header.site-banner .sb-menu-trigger span {
  height: auto !important;
  width: auto !important;
  color: #009cd8;
  clip: auto !important;
  font-size: 10px;
  left: 50%;
  bottom: 10px;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%); }

header.site-banner .sb-menu-trigger .icon-menu,
.site-banner .icon-menu::before,
.site-banner .icon-menu::after {
  content: "";
  height: 2px;
  width: 27px;
  display: block;
  background-color: #009cd8;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

body.espace-exposants header.site-banner .sb-menu-trigger .icon-menu,
body.espace-exposants .site-banner .icon-menu::before,
body.espace-exposants .site-banner .icon-menu::after {
  background-color: #205ad7; }

body.espace-exposants header.site-banner .sb-menu-trigger span {
  color: #205ad7; }

body.visiteur-pro header.site-banner .sb-menu-trigger .icon-menu,
body.visiteur-pro .site-banner .icon-menu::before,
body.visiteur-pro .site-banner .icon-menu::after {
  background-color: #4b2980; }

body.visiteur-pro header.site-banner .sb-menu-trigger span {
  color: #4b2980; }

header.site-banner .sb-menu-trigger .icon-menu {
  margin: -7px auto 0;
  position: relative; }

header.site-banner .sb-menu-trigger.is-open .icon-menu {
  background-color: transparent !important; }

header.site-banner .sb-menu-trigger.is-open .icon-menu::before {
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  top: 0; }

header.site-banner .sb-menu-trigger.is-open .icon-menu::after {
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  bottom: 0; }

header.site-banner .sb-menu-trigger + .main-navigation {
  opacity: 0;
  display: block !important;
  pointer-events: none; }

header.site-banner .sb-menu-trigger.is-open + .main-navigation {
  opacity: 1;
  pointer-events: all;
  height: 100vh; }

.site-banner .icon-menu::before,
.site-banner .icon-menu::after {
  position: absolute;
  left: 0; }

.site-banner .icon-menu::before {
  top: 7px; }

.site-banner .icon-menu::after {
  bottom: 7px; }

header.site-banner #cxpmClientAccountWidget i.icon-user-circle-o {
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
  background: url("img/sia2018/general/header-top-user-grey.svg") no-repeat 0 center;
  width: 17px;
  height: 17px;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease; }

header.site-banner #cxpmClientAccountWidget:hover a {
  color: #293a4d; }

header.site-banner #cxpmClientAccountWidget:hover i.icon-user-circle-o {
  background: url("img/sia2018/general/header-top-user.svg") no-repeat 0 center; }

header.site-banner .quicklinks ul {
  display: inline;
  font-size: 0; }

header.site-banner .quicklinks li a {
  background-color: transparent;
  color: #293a4d; }

header.site-banner .quicklinks.social li a {
  background: none;
  color: #293a4d;
  padding: 6px 4px;
  font-size: 14px;
  text-align: center;
  width: 30px;
  padding: 8px 0; }

header.site-banner .quicklinks.social i.icon::before {
  font-family: 'iconsia';
  font-size: 15px;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

header.site-banner .quicklinks.social a:hover i.icon::before {
  color: #83b81a; }

header.site-banner .quicklinks.social i.icon.icon-facebook::before {
  content: "\e904"; }

header.site-banner .quicklinks.social i.icon.icon-twitter::before {
  content: "\e915"; }

header.site-banner .quicklinks.social i.icon.icon-img::before {
  content: "\e906"; }

header.site-banner .quicklinks.social i.icon.icon-play::before {
  content: "\e916"; }

header.site-banner .quicklinks.social i.icon.icon-linkedin::before {
  content: "\e907"; }

header.site-banner .quicklinks.social i.icon.icon-home::before {
  content: "\e912"; }

header.site-banner .quicklinks li a .icon {
  margin-right: 0; }

header.site-banner [class^="btn"] {
  text-transform: none; }

.cc-cookies {
  padding: 1.5em 5%;
  background: #fbfbfb;
  position: fixed;
  -webkit-box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.2); }

.cc-cookies .inside {
  padding-right: 0;
  text-align: center; }

.cc-cookie-accept {
  background-color: #80bb25;
  border-radius: 50px;
  padding: 7px 20px;
  color: white;
  font-size: 12px;
  -webkit-box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 20px -5px rgba(0, 0, 0, 0.2);
  display: block;
  width: 90px;
  text-align: center;
  margin-top: 8px; }

.cc-cookie-accept:hover {
  background-color: #fff;
  color: #80bb25; }

.cc-cookie-link {
  color: #474d4e; }

.cc-cookies a.cc-cookie-link:hover {
  color: #80bb25;
  text-decoration: underline; }

.quicklinks li.linkid306277 a span,
.quicklinks li.linkid306278 a span,
.quicklinks li.linkid306280 a span,
.quicklinks li.linkid306281 a span,
.quicklinks li.linkid306284 a span,
.quicklinks li.linkid306285 a span {
  display: none; }

.btn-primary {
  border: 0;
  background-color: none; }

.btn-primary:hover {
  border: 0;
  background-color: none; }

/* lang switcher */
.lang-switcher {
  top: 0px;
  position: relative;
  right: 0;
  float: none;
  margin-top: 30px;
  background-color: transparent;
  border: 1px solid #dedede;
  color: #293a4d;
  margin-bottom: 20px; }

.lang-switcher .ls-trigger {
  color: #293a4d;
  padding: 14px 10px;
  width: 62px; }

.js .ls-lang-list {
  position: relative; }

/* NL lien */
.newsletter-form form {
  display: none; }

.nf-main-content {
  padding: 0;
  margin: 0;
  background: none;
  color: #555; }

header.site-banner .nf-main-content .inside {
  position: absolute;
  top: 0;
  left: 209px;
  padding: 0;
  width: auto;
  height: 35px;
  border-right: 1px solid #e6e6e6; }

.nf-main-content .nf-title {
  color: #555; }

.nf-main-content h2 {
  padding: 0 16px 0 31px;
  line-height: 35px;
  border-bottom: 0;
  font-size: 13px;
  background: url("img/sia2018/general/headertop-envelop.svg") no-repeat 0 center; }

.cxp-newsletter h2 {
  font-family: 'akrobat-regular', helvetiva, arial, sans-serif;
  letter-spacing: 0;
  font-size: 12px; }

/* Buttons -------------------------------------------------------- */
.sia-btn {
  background-image: url(img/sia2018/home/arrow-bt-blanc-right.svg);
  background-color: #83b81a;
  background-repeat: no-repeat;
  background-position: right 25px center;
  background-size: 26px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 13px 60px 13px 30px;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.25);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.25);
  z-index: 1;
  pointer-events: all;
  margin: 20px 0; }

.sia-btn:hover {
  color: #83b81a;
  background-color: white;
  background-image: url(img/sia2018/home/arrow-bt-vert-right.svg); }

.sia-btn.purple {
  background-color: #4b2980; }

.sia-btn.purple:hover {
  color: #4b2980;
  background-color: white;
  background-image: url(img/sia2018/home/arrow-bt-violet.svg); }

.sia-btn.blue {
  background-color: #215AD6; }

.sia-btn.blue:hover {
  color: #215AD6;
  background-color: white;
  background-image: url(img/sia2018/home/arrow-bt-bleu.svg); }

/* BANDEAU HEADER -------------------------------------------------------- */
/* bandeau header home */
div#bandeau-header {
  clear: both;
  height: 86px;
  background: #009cd8;
  font-size: 0;
  width: 100%;
  min-width: 100%;
  -webkit-transition: height 0.25s ease;
  -o-transition: height 0.25s ease;
  transition: height 0.25s ease;
  -webkit-box-shadow: -5px 0 30px 0 rgba(0, 0, 0, 0.2);
  box-shadow: -5px 0 30px 0 rgba(0, 0, 0, 0.2); }

div#bandeau-header #logo-salon {
  display: block;
  width: 87px;
  overflow: hidden;
  float: left;
  -webkit-transition: width 0.25s ease;
  -o-transition: width 0.25s ease;
  transition: width 0.25s ease; }

div#bandeau-header #logo-salon a {
  display: block;
  width: 100%;
  height: auto;
  background-image: none; }

div#bandeau-header #logo-salon img {
  height: 86px;
  -webkit-transition: height 0.25s ease;
  -o-transition: height 0.25s ease;
  transition: height 0.25s ease; }

div#bandeau-header #infos-salon {
  float: left;
  display: block;
  width: auto;
  height: 86px;
  background-image: none; }

div#bandeau-header #infos-salon p {
  margin: 5px 0 0 7px;
  padding: 0;
  width: auto;
  line-height: 1;
  font-size: 14px;
  letter-spacing: 0.44px; }

div#bandeau-header #infos-salon .bigtitre {
  font-size: 21.5px;
  line-height: 25px;
  text-transform: uppercase;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  margin-top: 6px;
  margin-bottom: 0;
  letter-spacing: 0;
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

div#bandeau-header #infos-salon .bigtitre.bis {
  margin-top: 0;
  font-size: 24.5px;
  letter-spacing: 0; }

div#bandeau-header #infos-salon .bigtitre strong {
  font-family: "sofiapro-bold", arial, sans-serif;
  font-weight: normal; }

div#bandeau-header #infos-salon .bigtitre strong span {
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

div#bandeau-header #infos-salon p.last {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  margin: 2px 0 0 7px;
  padding: 5px 0 0 0;
  letter-spacing: 0.1px;
  font-size: 12px; }

div#bandeau-header .bandeau-header-bt {
  position: absolute;
  width: 190px;
  height: 119px;
  text-align: center; }

div#bandeau-header .bandeau-header-bt a {
  color: white;
  text-decoration: none;
  font-size: 13px;
  display: block;
  width: 190px;
  height: 119px;
  letter-spacing: 0;
  line-height: 1.6em; }

div#bandeau-header .bandeau-header-bt a span {
  font-size: 20px;
  text-transform: uppercase;
  display: block;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 3px;
  letter-spacing: 0; }

div#bandeau-header #rings-animaux {
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  right: 420px;
  border-left: 1px solid rgba(255, 255, 255, 0.2);
  background-image: url("img/sia2018/general/header-picto-tv.svg");
  background-repeat: no-repeat;
  background-position: center 20px;
  background-color: #009cd8;
  background-size: 32px auto;
  width: 196px; }

div#bandeau-header #rings-animaux:hover {
  background-image: url("img/sia2018/general/header-picto-tv-bleu.svg");
  background-size: 32px auto; }

div#bandeau-header #rings-animaux a {
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  padding-top: 62px;
  width: 196px; }

div#bandeau-header #rings-animaux:hover {
  background-color: white; }

div#bandeau-header #rings-animaux:hover a {
  color: #009cd8; }

div#bandeau-header #visiteurs-pro {
  -webkit-transition: background-color 0.25s ease;
  -o-transition: background-color 0.25s ease;
  transition: background-color 0.25s ease;
  -webkit-box-shadow: inset -45px 0px 40px -35px rgba(0, 0, 0, 0.25);
  box-shadow: inset -45px 0px 40px -35px rgba(0, 0, 0, 0.25);
  right: 230px;
  background-image: url("img/sia2018/general/header-picto-pro.svg");
  background-repeat: no-repeat;
  background-position: center 20px;
  background-color: #88288c;
  background-size: 38px auto; }

div#bandeau-header #visiteurs-pro:hover {
  background-image: url("img/sia2018/general/header-picto-pro-violet.svg");
  background-color: white;
  background-size: 37px auto; }

div#bandeau-header #visiteurs-pro:hover a {
  color: #88288c; }

div#bandeau-header #visiteurs-pro a {
  padding-top: 62px; }

div#bandeau-header #achat-billets {
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  right: 0;
  width: 230px;
  background: url("img/sia2018/home/picto-ticket.svg") no-repeat 22px 17px #f6a924; }

div#bandeau-header #achat-billets:hover {
  background-image: url("img/sia2018/home/picto-ticket-jaune.svg"); }

div#bandeau-header #achat-billets a {
  padding: 30px 0 0 116px;
  text-align: left;
  font-size: 16px;
  width: 100%;
  letter-spacing: 0; }

div#bandeau-header #achat-billets a span {
  font-size: 35px;
  margin-top: 2px;
  letter-spacing: 0; }

div#bandeau-header #achat-billets:hover {
  background-color: white; }

div#bandeau-header #achat-billets:hover a {
  color: #f6a924; }

/* bandeau header exposant */
div#bandeau-header.exposant {
  background: #205ad7; }

div#bandeau-header.exposant .bandeau-header-bt {
  position: absolute;
  width: 230px;
  height: 119px;
  text-align: left; }

div#bandeau-header #communaute-fb {
  right: 260px;
  background: url("img/sia2018/exposant/bg-facebook.png") no-repeat right 0 #3b5999; }

div#bandeau-header #communaute-fb a {
  padding: 27px 0 0 80px;
  display: block;
  width: 230px;
  height: 119px;
  background-image: url("img/sia2018/exposant/picto-header-facebook.svg");
  background-repeat: no-repeat;
  background-position: 30px center; }

div#bandeau-header #communaute-fb a:hover {
  background-image: url("img/sia2018/exposant/picto-header-facebook-bleu.svg");
  background-repeat: no-repeat;
  background-position: 30px center;
  background-color: white;
  color: #3B5998; }

div#bandeau-header #communaute-fb a span:last-child {
  font-size: 26px; }

div#bandeau-header #devenez-exposant {
  right: 0;
  width: 265px;
  background-image: url(img/sia2018/exposant/header-bg-exposant.svg);
  background-repeat: no-repeat;
  background-position: 20px 17px;
  background-size: 82px auto;
  background-color: #f6a924;
  text-align: left;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

div#bandeau-header #devenez-exposant:hover {
  background-image: url(img/sia2018/exposant/header-bg-exposant-jaune.svg);
  background-size: 82px auto;
  background-color: white;
  color: #f6a924; }

div#bandeau-header #devenez-exposant:hover a {
  color: #f6a924; }

div#bandeau-header #devenez-exposant a {
  padding: 30px 0 0 114px;
  font-size: 14px;
  width: 100%; }

div#bandeau-header #devenez-exposant a span {
  font-size: 32px;
  margin-top: 4px; }

/* bandeau header visiteur pro */
div#bandeau-header.visiteur-pro {
  background: #4b2980; }

div#bandeau-header.visiteur-pro #infos-salon p.last {
  border-top: 1px solid #6a41ab; }

div#bandeau-header.visiteur-pro #rings-animaux {
  right: 260px;
  border-left: 1px solid #6a41ab;
  width: 200px; }

div#bandeau-header.visiteur-pro #rings-animaux:hover a,
div#bandeau-header.visiteur-pro #rings-animaux:active a,
div#bandeau-header.visiteur-pro #rings-animaux:focus a {
  color: #4b2980; }

div#bandeau-header.visiteur-pro .bandeau-header-bt a {
  width: 200px; }

.visiteur-pro .bandeau-header {
  background-color: #4b2980; }

/* MENU ----------------------------------------------------------------- */
/* navigation */
nav.main-navigation {
  background: rgba(0, 0, 0, 0.4);
  padding: 0;
  height: 54px;
  z-index: 101;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.075);
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.075);
  top: 0;
  height: auto; }

body.visiteur-pro .site-banner nav.main-navigation,
body.espace-exposants .site-banner nav.main-navigation {
  background: rgba(0, 0, 0, 0.5); }

nav.main-navigation ul {
  margin: 0;
  padding: 0; }

.site-banner nav.main-navigation .mn-menu-lvl1 {
  max-width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column; }

nav.main-navigation .mn-item-lvl-1 {
  list-style-type: none;
  -webkit-box-flex: 0;
  -ms-flex-positive: 0;
  flex-grow: 0;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.2); }

body.espace-exposants nav.main-navigation .mn-item-lvl-1 {
  max-width: 100%; }

body.espace-exposants .article-wrapper .at-content h1,
body.espace-exposants .gla-btn-read-more,
body.espace-exposants .gla-btn-read-more:active,
body.espace-exposants .gla-btn-read-more:focus,
body.espace-exposants .gla-btn-read-more:hover,
body.espace-exposants div#zone2 .main-title-with-link > .main-title,
body.espace-exposants nav.main-navigation .mn-menu-submenu a.mn-link::before,
body.espace-exposants .article-wrapper .article-content ul li::before {
  background-color: #215AD6; }

body.espace-exposants .breadcrumb-nav .bn-item-link:active,
body.espace-exposants .breadcrumb-nav .bn-item-link:focus,
body.espace-exposants .breadcrumb-nav .bn-item-link:hover,
body.espace-exposants .article-wrapper .article-content h2,
body.espace-exposants .article-wrapper .article-content a,
body.espace-exposants .mn-item-lvl-2 .mn-link.mn-link.is-active,
body.espace-exposants nav.main-navigation .mn-menu-submenu a.mn-link:hover .mn-link-text,
body.espace-exposants .article-wrapper .article-content h2 strong {
  color: #215AD6; }

nav.main-navigation li a {
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 21px;
  letter-spacing: 0; }

nav.main-navigation .mn-item-lvl-2 a {
  text-transform: none;
  font-family: 'akrobat-regular', helvetica, arial, sans-serif; }

.is-open .mn-link.mn-link {
  background: white; }

.mn-menu-line {
  margin: 0;
  padding: 0;
  border: 0;
  overflow-x: hidden; }

.mn-item-lvl-1 > .mn-link {
  color: white;
  min-height: 54px;
  max-height: 54px;
  padding: 0;
  line-height: 22px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center; }

.mn-item-lvl-1 > .mn-link:active,
.mn-item-lvl-1 > .mn-link:hover,
.mn-item-lvl-1 > .mn-link:focus {
  background: none; }

.mn-link-text::before {
  content: none; }

.site-banner .gsf-fields,
.gsf-fields {
  background: none;
  color: white; }

.mn-link.mn-link.is-active {
  background: #83b81a; }

.site-footer .mn-link.mn-link.is-active {
  background-color: transparent !important; }

body.espace-exposants .site-footer .mn-link.mn-link.is-active {
  background-color: transparent !important; }

.typeform-share.button {
  background-color: #83b81a !important;
  margin-top: 40px !important;
  font-size: 14px !important;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2); }

.typeform-share.button:hover {
  background-color: white !important;
  color: #83b81a !important; }

body.espace-exposants .typeform-share.button {
  background-color: #2359d7 !important; }

body.espace-exposants .typeform-share.button:hover {
  background-color: white !important;
  color: #2359d7 !important; }

body.visiteur-pro .typeform-share.button {
  background-color: #4b2980 !important; }

body.visiteur-pro .typeform-share.button:hover {
  background-color: white !important;
  color: #4b2980 !important; }

body.espace-exposants .mn-link.mn-link.is-active {
  background: #215AD6; }

body.visiteur-pro .mn-link.mn-link.is-active {
  background: #4b2980; }

body.espace-exposants .article-wrapper .article-content a:active,
body.espace-exposants .article-wrapper .article-content a:focus,
body.espace-exposants .article-wrapper .article-content a:hover {
  color: #1b3775; }

body.espace-exposants .mn-item-lvl-2 .mn-link.mn-link.is-active,
body.visiteur-pro .mn-item-lvl-2 .mn-link.mn-link.is-active {
  background-color: white; }

body.espace-exposants nav.main-navigation .mn-menu-item:active .mn-link.mn-link.is-active,
body.espace-exposants nav.main-navigation .mn-menu-item:hover .mn-link.mn-link.is-active,
body.visiteur-pro nav.main-navigation .mn-menu-item:hover .mn-link.mn-link.is-active {
  background-color: white; }

.is-open .mn-link.mn-link.is-active {
  background: transparent; }

.mn-item-lvl-2 .mn-link.mn-link.is-active {
  color: #83b81a; }

/* nav exposant */
.mn-menu-item-310626 {
  background-image: url("img/sia2018/exposant/picto-cadenas.svg");
  background-repeat: no-repeat;
  background-position: right 16px center;
  background-size: 21px auto;
  background-color: #205ad7;
  padding-left: 0;
  max-width: 100% !important; }

.mn-menu-item-310626:hover {
  color: #215AD6; }

nav.main-navigation .mn-menu-item.mn-menu-item-310626:hover {
  background-image: url("img/sia2018/exposant/picto-cadenas-bleu.svg");
  background-repeat: no-repeat;
  background-size: 21px auto;
  background-position: 20px center;
  background-color: white;
  color: #205ad7; }

.mn-menu-item-310626 i {
  display: none; }

nav.main-navigation li.mn-menu-item-310626 a.mn-link {
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  font-size: 14px;
  text-transform: none;
  line-height: 17px;
  padding-bottom: 4px;
  letter-spacing: 0; }

nav.main-navigation li.mn-menu-item-310626 a.mn-link span {
  display: block;
  text-align: left;
  padding-right: 0;
  margin-left: 0; }

/* sticky */
.is-stuck.site-banner {
  background: none;
  z-index: 200;
  padding: 0;
  -webkit-transform: translateY(-35px);
  -ms-transform: translateY(-35px);
  transform: translateY(-35px);
  border: 0 none; }

.is-stuck.site-banner .global-search-form {
  opacity: 0;
  pointer-events: none; }

.is-stuck .mn-menu-line {
  max-width: none; }

.is-stuck .main-navigation {
  /*opacity: 0; pointer-events: none; height: 0;*/
  height: 0;
  overflow: hidden; }

/* sous nav */
nav.main-navigation li ul.mn-menu-submenu {
  color: #27211f;
  display: block;
  opacity: 1;
  height: 0;
  pointer-events: none;
  background: white;
  -webkit-transition: opacity ease 0.25s;
  -o-transition: opacity ease 0.25s;
  transition: opacity ease 0.25s;
  text-align: left;
  -webkit-box-shadow: 0px 18px 32px -8px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 18px 32px -8px rgba(0, 0, 0, 0.15);
  overflow: hidden; }

nav.main-navigation li:hover ul.mn-menu-submenu {
  opacity: 1;
  pointer-events: all;
  color: #27211f; }

nav.main-navigation .mn-link:hover a {
  color: #27211f; }

nav.main-navigation .mn-menu-submenu {
  width: calc(100% + 1px);
  min-width: 350px;
  color: #27211f;
  background: #fff;
  padding: 0; }

.site-banner nav.main-navigation .mn-menu-item {
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  background-color: #009cd8;
  border-color: rgba(255, 255, 255, 0.2);
  border-right: 0 none; }

.site-banner nav.main-navigation .mn-menu-item.mn-menu-item-336378 {
  background-color: #4b2980;
  border-color: transparent; }

.site-banner nav.main-navigation .mn-menu-item.mn-menu-item-337965 {
  background-color: #215AD6;
  border-color: transparent; }

body.espace-exposants .site-banner nav.main-navigation .mn-menu-item {
  background-color: #205ad7; }

body.visiteur-pro .site-banner nav.main-navigation .mn-menu-item {
  background-color: #4b2980; }

.site-banner nav.main-navigation .mn-menu-item.is-open > ul.mn-menu-submenu {
  height: auto;
  background-color: white; }

.site-banner nav.main-navigation .mn-menu-item > ul.mn-menu-submenu .mn-menu-item {
  background-color: white; }

.site-banner nav.main-navigation .mn-menu-item > ul.mn-menu-submenu .mn-menu-item .mn-link {
  padding: 10px 45px 10px 20px; }

nav.main-navigation .mn-menu-item:active,
nav.main-navigation .mn-menu-item:hover {
  background: white; }

nav.main-navigation .mn-menu-item:active a,
nav.main-navigation .mn-menu-item:hover a {
  color: #293a4d;
  background-color: white; }

nav.main-navigation .mn-menu-submenu a.mn-link {
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  position: relative;
  padding: 6px 20px;
  font-size: 15px;
  letter-spacing: 0;
  text-align: left;
  background: none; }

nav.main-navigation .mn-menu-submenu a.mn-link .mn-link-text {
  display: block;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

nav.main-navigation .mn-menu-submenu a.mn-link:active,
nav.main-navigation .mn-menu-submenu a.mn-link:hover {
  background: none; }

nav.main-navigation .mn-menu-submenu a.mn-link:active .mn-link-text,
nav.main-navigation .mn-menu-submenu a.mn-link:hover .mn-link-text {
  -webkit-transform: translateX(5px);
  -ms-transform: translateX(5px);
  transform: translateX(5px);
  color: #70a71c; }

nav.main-navigation .mn-menu-submenu a.mn-link::before {
  -webkit-transition: width 0.25s ease;
  -o-transition: width 0.25s ease;
  transition: width 0.25s ease;
  content: "";
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  width: 0px;
  height: 100%;
  background-color: #83b81a; }

nav.main-navigation .mn-menu-submenu a.mn-link:active::before,
nav.main-navigation .mn-menu-submenu a.mn-link:hover::before {
  width: 5px; }

/* recherche */
.site-banner .global-search-form {
  right: 0;
  height: 54px;
  padding-right: 10px;
  padding-left: 10px;
  width: 200px;
  z-index: 101;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease; }

.js .site-banner .gsf-fields {
  display: block;
  top: 0;
  width: 200px; }

.site-banner .gsf-submit-line,
.site-banner .gsf-input-line {
  display: inline-block;
  vertical-align: middle;
  height: 54px; }

.site-banner .gsf-input-line {
  width: 155px;
  padding-left: 8px; }

.site-banner .gsf-fields {
  padding: 0; }

.site-banner .gsf-fields .gsf-input {
  background: none;
  color: white;
  height: 54px;
  padding: 0 0 0 8px;
  opacity: 0.6;
  -webkit-transition: opacity 0.2s ease;
  -o-transition: opacity 0.2s ease;
  transition: opacity 0.2s ease; }

.site-banner .gsf-fields .gsf-input:active,
.site-banner .gsf-fields .gsf-input:focus {
  opacity: 1; }

.site-banner .gsf-fields .gsf-input::-webkit-input-placeholder {
  color: white !important;
  font-style: normal !important; }

.site-banner .gsf-fields .gsf-input:-ms-input-placeholder {
  color: white !important;
  font-style: normal !important; }

.site-banner .gsf-fields .gsf-input::-ms-input-placeholder {
  color: white !important;
  font-style: normal !important; }

.site-banner .gsf-fields .gsf-input::-moz-placeholder {
  color: white !important;
  font-style: normal !important; }

.site-banner .gsf-fields .gsf-input::placeholder {
  color: white !important;
  font-style: normal !important; }

.site-banner .gsf-submit-btn,
.site-banner .gsf-submit-btn:hover {
  background: url("img/sia2018/general/picto-recherche.png") no-repeat center center; }

.main-btn {
  background-image: url(img/sia2018/home/picto-ticket.svg);
  background-repeat: no-repeat;
  background-position: 15px center;
  background-color: #f6a924;
  background-size: 66px auto;
  margin-left: 50%;
  display: inline-block;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  margin-top: -50%;
  padding: 24px 20px 23px 92px;
  text-align: left;
  font-size: 16px;
  line-height: 15px;
  color: white;
  -webkit-box-shadow: 0 16px 35px -15px rgba(193, 130, 26, 0.77);
  box-shadow: 0 16px 35px -15px rgba(193, 130, 26, 0.77);
  margin-bottom: 10px;
  position: relative;
  z-index: 1; }

.main-btn span {
  font-size: 22px;
  line-height: 20px;
  margin-top: 2px;
  letter-spacing: 0;
  text-transform: uppercase;
  display: block;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 3px; }

.main-btn:focus,
.main-btn:active,
.main-btn:hover {
  background-color: white;
  -webkit-box-shadow: 0 16px 35px -15px rgba(0, 0, 0, 0.3);
  box-shadow: 0 16px 35px -15px rgba(0, 0, 0, 0.3);
  color: #f6a924;
  background-image: url(img/sia2018/home/picto-ticket-jaune.svg); }

.main-btn.ebadge {
  width: 263px;
  margin-bottom: 0;
  background-image: url(img/sia2018/exposant/header-bg-exposant.svg); }

.main-btn.exposant {
  width: 232px;
  margin-bottom: 0;
  background-image: url(img/sia2018/exposant/header-bg-exposant.svg); }

.main-btn.exposant:focus,
.main-btn.ebadge:focus,
.main-btn.exposant:active,
.main-btn.ebadge:active,
.main-btn.exposant:hover,
.main-btn.ebadge:hover {
  background-image: url(img/sia2018/exposant/header-bg-exposant-jaune.svg); }

.gsf-submit-text {
  position: absolute;
  top: -2000px; }

.la-list .la-item .la-item-author {
  display: none; }

/* HOMEPAGE -------------------------------------------------------- */
/* player home */
div#video-wrapper {
  margin-top: 0;
  height: 250px;
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #232323;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center; }

div#video-wrapper::after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(img/sia2018/home/cover-video.jpg);
  background-size: cover;
  background-position: center;
  opacity: 0.5; }

div#video-wrapper::before {
  content: "";
  background-image: url(img/sia2018/home/bg-dot.png);
  position: absolute;
  left: 0;
  top: 55px;
  width: 100%;
  height: calc(100% - 55px);
  z-index: 1;
  opacity: .25;
  background-size: 3px;
  display: none; }

div#video-wrapper .video-titre {
  position: relative;
  right: 0;
  left: 0;
  margin: -30px auto 0;
  z-index: 100;
  color: white;
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 30px;
  letter-spacing: 0;
  line-height: 55px;
  text-align: center;
  bottom: auto;
  text-shadow: 0px 3px 20px rgba(0, 0, 0, 0.3); }

div#video-wrapper .video-titre::after {
  content: "";
  display: block;
  height: 1px;
  width: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: white;
  -webkit-transform: translate(-50%);
  -ms-transform: translate(-50%);
  transform: translate(-50%); }

div#video-wrapper .video-titre span {
  display: block;
  font-family: "sofiapro-bold", arial, sans-serif;
  font-size: 42px;
  letter-spacing: 0; }

#sia-video-main,
div#video-wrapper video {
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 540px;
  width: 100%;
  height: auto;
  -webkit-transform: translateX(-50%) translateY(-50%);
  -ms-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%); }

/* zone 1*/
.site-wrapper .block:not(:first-child) {
  margin-top: 0; }

div#zone1 {
  display: block; }

div#zone1 .block.quicklinks {
  background: #f7f7f7;
  padding-bottom: 60px; }

div#zone1 .block.quicklinks .ql-item .icon::before {
  font-family: "iconsia";
  font-size: 34px;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

div#zone1 .block.quicklinks .ql-item .icon.icon-map::before {
  content: "\e90d";
  color: #009cd8; }

div#zone1 .block.quicklinks .ql-item .icon.icon-calendrier::before {
  content: "\e903";
  color: #83b81a; }

div#zone1 .ql-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 93%;
  margin: 4.5% auto 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  position: relative;
  z-index: 10;
  font-size: 0;
  -webkit-transform: none;
  -ms-transform: none;
  transform: none;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap; }

div#zone1 li {
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  width: 48.5%;
  margin: 0px 3% 10px 0;
  background-color: white;
  border-right: 1px solid #E8E8E8;
  position: relative;
  -webkit-box-shadow: 0 22px 25px -15px rgba(0, 0, 0, 0.15);
  box-shadow: 0 22px 25px -15px rgba(0, 0, 0, 0.15); }

div#zone1 li:nth-child(even) {
  margin-right: 0; }

#zone1 li:hover::before {
  height: 100%; }

div#zone1 li::before {
  content: "";
  display: block;
  background-color: #83b81a;
  width: 100%;
  position: absolute;
  height: 4px;
  bottom: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
  -webkit-transition: all .25s ease;
  -o-transition: all .25s ease;
  transition: all .25s ease; }

div#zone1 li:hover a {
  color: white; }

div#zone1 .block.quicklinks .ql-item a:hover .icon::before {
  color: white; }

div#zone1 li:last-child {
  border-right: 0 none; }

div#zone1 li.linkid306744::before {
  background-color: #f6a924; }

div#zone1 li.linkid306748::before {
  background-color: #e30059; }

div#zone1 li.linkid306749::before {
  background-color: #83b81a; }

div#zone1 li.linkid306750::before {
  background-color: #009cd8; }

div#zone1 li a {
  -webkit-transition: all 0.25s;
  -o-transition: all 0.25s;
  transition: all 0.25s;
  background: none;
  color: #293a4d;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-size: 14px;
  line-height: 18px;
  text-align: left;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0;
  padding: 15px 10px 15px 10px;
  height: 100%;
  z-index: 1;
  position: relative; }

div#zone1 i {
  width: 37px;
  height: 41px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 37px;
  flex: 0 0 37px;
  margin-right: 11px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: -2px;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

div#zone1 li.linkid306744 i {
  background-image: url(img/sia2018/home/icon-euro-jaune.svg); }

div#zone1 li.linkid306744 a:hover i {
  background-image: url(img/sia2018/home/icon-euro.svg); }

div#zone1 li.linkid306744 i::before {
  display: none; }

div#zone1 li.linkid306748 i {
  background-image: url(img/sia2018/home/icon-train-rose.svg); }

div#zone1 li.linkid306748 a:hover i {
  background-image: url(img/sia2018/home/icon-train.svg); }

div#zone1 li.linkid306748 i::before {
  display: none; }

/* zone 2 */
div.layout-2-col {
  display: block;
  background: #f7f7f7; }

div.layout-2-col > * {
  display: inline-block; }

.gla-item-content {
  position: static; }

div#zone2 {
  width: 100%; }

div#zone2 .main-title-with-link {
  text-align: center;
  border: 0;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 0; }

.article_list div #zone2 .main-title-with-link {
  position: relative;
  margin: 0 auto 20px; }

div#zone2 .main-title-with-link > .main-title {
  margin-top: -31px;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 23px;
  letter-spacing: 0;
  text-align: center;
  float: none;
  background: #83b81a;
  color: white;
  padding: 0 20px;
  display: inline-block;
  line-height: 27px;
  padding: 15px;
  -webkit-hyphens: initial;
  -ms-hyphens: initial;
  hyphens: initial; }

div#zone2 .main-title-with-link > .main-title span#titre4secteurs {
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: absolute;
  display: inline-block;
  font-size: 32px;
  background: white;
  color: #293a4d;
  margin: 0 auto;
  top: 50px;
  right: 0;
  left: 0;
  padding: 8px 20px;
  width: 460px;
  display: none; }

div#zone2 .filieres .cxp-pagination {
  padding-top: 105px;
  padding-bottom: 20px; }

div#zone2 .filieres {
  background: url(img/sia2018/home/bg-texture.png) 0 0;
  border-top: 1px dashed #d8d8da;
  border-bottom: 1px dashed #d8d8da; }

div#zone2 .filieres .inside {
  position: relative; }

div#zone2 div.filieres .list-grids-with-pagin {
  width: 100%;
  margin: 0 auto; }

div#zone2 div.filieres .list-grids-with-pagin .grid-la-list {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column; }

div#zone2 .list-grids-with-pagin article {
  margin: 0px auto 15px;
  width: 100%;
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

.article_list div#zone2 .la-list .la-item-title a,
.article_list.content266794 .gla-item-title {
  font-family: "akrobat-regular", arial, sans-serif;
  font-size: 17px;
  letter-spacing: 0;
  line-height: 26px; }

.article_list div#zone2 .la-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap; }

.article_list .list-articles {
  position: relative; }

.article_list .block-page .inside {
  position: relative; }

.article_list div#zone2 .la-list article,
.article_list div#zone2 .list-grids-with-pagin article {
  width: 100%;
  margin-right: 4%;
  -webkit-box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  margin-bottom: 45px; }

.article_list div#zone2 .la-list article {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin-right: 0; }

.article_list div#zone2 .la-list .la-item .la-item-img {
  width: 100%; }

.article_list div#zone2 .la-list .la-item .la-item-content {
  background-color: white;
  width: 100%;
  overflow: visible;
  padding: 45px 30px 30px 30px;
  position: relative;
  text-align: center; }

.article_list div#zone2 .la-list .la-item .la-item-title a {
  font-family: "akrobat-regular", arial, sans-serif;
  font-size: 17px;
  font-weight: normal;
  letter-spacing: 0;
  line-height: 26px;
  color: #293a4d; }

.article_list div#zone2 .la-list .la-item .link-read-more {
  background-color: #83b81a;
  border-radius: 50px;
  border: 3px solid white;
  text-transform: none;
  font-family: "akrobat-bold", helvetica, arial, sans-serif;
  font-size: 14px;
  margin-top: -24px;
  padding: 13px 30px;
  color: white; }

.article_list div#zone2 .la-list .la-item .link-read-more .icon {
  display: none; }

.article_list div#zone2 .la-list .la-item .la-item-btn {
  text-align: center;
  margin: 0;
  position: absolute;
  top: -11px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%); }

.cap-bg {
  z-index: 9999 !important; }

.cap-wrap {
  z-index: 10000 !important; }

.cap-container {
  padding: 0 !important; }

.cxpmClientAccountPopinWrapper .cxpmClientAccountPopinContent.main-cap-wrapper,
.cxpmClientAccountPopinWrapper .cxpmClientAccountPopinContent {
  margin: 0 auto; }

.article_list div#zone2 .la-list article:hover,
.article_list div#zone2 .list-grids-with-pagin article:hover {
  -webkit-transform: translateY(-7px);
  -ms-transform: translateY(-7px);
  transform: translateY(-7px);
  -webkit-box-shadow: 0 30px 25px -13px rgba(0, 0, 0, 0.1);
  box-shadow: 0 30px 25px -13px rgba(0, 0, 0, 0.1); }

.article_list div#zone2 .main-title-with-link > .main-title {
  font-size: 36px;
  margin-top: -40px;
  padding: 13px 15px; }

.article_list .cxp-pagination {
  margin-top: 13px;
  margin-bottom: -20px;
  padding-top: 10px; }

.gla-item-author {
  display: none; }

.article_list div#zone2 .list-grids-with-pagin article:nth-child(3n+3) {
  margin-right: 0; }

.gla-btn-read-more,
.gla-btn-read-more:focus,
.gla-btn-read-more:active,
.gla-btn-read-more:hover {
  background-color: #83b81a;
  border-radius: 50px;
  border: 3px solid white;
  text-transform: none;
  font-family: "akrobat-bold", helvetica, arial, sans-serif;
  font-size: 14px;
  margin-top: -24px;
  padding: 13px 30px; }

.article_list .gla-item-title {
  font-family: "akrobat-regular", helvetica, arial, sans-serif;
  letter-spacing: 0;
  color: #293a4d;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 30px 30px;
  min-height: 0;
  font-weight: normal; }

div#zone2 .list-grids-with-pagin article a,
div#zone2 .list-grids-with-pagin article a:hover {
  color: #293a4d;
  text-decoration: none; }

div#zone2 .list-grids-with-pagin .gla-item {
  border: 0 none;
  padding: 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  background-color: white; }

/*div#zone2 .list-grids-with-pagin .gla-item:before {
	content: "";
	display: block;
	position: absolute;
	left: 0;
	height: 100%;
	width: 75px;
	background-color: red;
}*/
.article_list .gla-item-content {
  background-color: white; }

[class*="grid-"] {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column; }

div#zone2 .filieres .list-grids-with-pagin .gla-item a {
  display: block;
  height: auto;
  width: 100%;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
  position: relative; }

body.front div#zone2 .gla-item > a .gla-item-title {
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 25px;
  color: #293a4d;
  letter-spacing: 0.6px;
  font-size: 17px;
  text-decoration: none;
  -webkit-transition: all 0.2s;
  -o-transition: all 0.2s;
  transition: all 0.2s;
  padding-top: 0;
  margin-top: 0;
  z-index: 1; }

body.front div#zone2 .gla-item > a:hover .gla-item-title {
  color: white; }

.article_list .gla-item-desc {
  display: none; }

div#zone2 div.filieres .gla-item-content {
  text-align: left;
  min-height: 75px;
  padding: 10px 10px 10px 88px;
  background: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 100%; }

div#zone2 div.filieres .gla-item-content::before {
  content: "";
  position: absolute;
  left: 75px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #83b81a;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease; }

div#zone2 div.filieres .gla-item a:hover .gla-item-content::before {
  width: calc(100% - 75px); }

div#zone2 div.filieres .gla-item::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 75px;
  height: 100%;
  background-color: #83b81a; }

div#zone2 div.filieres .gla-item:nth-child(1)::before,
div#zone2 div.filieres .gla-item:nth-child(1) a .gla-item-content::before {
  background-color: #f6a924; }

div#zone2 div.filieres .gla-item:nth-child(2)::before,
div#zone2 div.filieres .gla-item:nth-child(2) a .gla-item-content::before {
  background-color: #009cd8; }

div#zone2 div.filieres .gla-item:nth-child(3)::before,
div#zone2 div.filieres .gla-item:nth-child(3) a .gla-item-content::before {
  background-color: #83b81a; }

div#zone2 div.filieres .gla-item:nth-child(4)::before,
div#zone2 div.filieres .gla-item:nth-child(4) a .gla-item-content::before {
  background-color: #e30059; }

div#zone2 div.filieres .gla-item:nth-child(1) a {
  background-image: url("img/sia2018/home/secteur-picto-culture.svg"); }

div#zone2 div.filieres .gla-item:nth-child(2) a {
  background-image: url("img/sia2018/home/secteur-picto-services.svg"); }

div#zone2 div.filieres .gla-item:nth-child(3) a {
  background-image: url("img/sia2018/home/secteur-picto-elevage.svg"); }

div#zone2 div.filieres .gla-item:nth-child(4) a {
  background-image: url("img/sia2018/home/secteur-picto-produits.svg"); }

div#zone2 div.filieres .gla-item a {
  background-size: 75px auto !important;
  background-repeat: no-repeat !important;
  background-position: 0 center !important;
  background-color: transparent !important; }

div#zone2 div.filieres .gla-item-btn {
  display: none; }

div#zone2 .incontournable .cxp-pagination {
  padding-top: 80px;
  background: #f7f7f7;
  border-top: 0; }

div#zone2 .incontournable .slider-pagin-btn {
  display: block; }

div#zone2 .incontournable .slider-pagin {
  background-color: transparent; }

div#zone2 .incontournable {
  text-align: center;
  padding-top: 35px; }

div#zone2 .incontournable [class*="grid-"] {
  display: inline-block; }

div#zone2 .incontournable article {
  display: inline-block;
  width: 100%;
  margin: 0 30px 0 0;
  -webkit-box-shadow: none;
  box-shadow: none;
  padding: 15px 15px 75px 15px; }

div#zone2 .incontournable article:last-child {
  margin-right: 0; }

div#zone2 .incontournable article a:hover .gla-item-title {
  color: #293a4d !important; }

.la-swiper {
  position: relative;
  overflow: visible; }

.la-swiper .slider-pagin {
  position: absolute;
  top: 42%;
  width: 114%;
  margin-left: -7%; }

.la-swiper [class*="slider-btn"] {
  background: transparent;
  border: 0 none;
  font-size: 18px;
  padding: 0;
  outline: none; }

.la-swiper [class*="slider-btn"]:focus .icon,
.la-swiper [class*="slider-btn"]:hover .icon,
.la-swiper [class*="slider-btn"]:focus .icon-catal,
.la-swiper [class*="slider-btn"]:hover .icon-catal {
  color: #ccc; }

.la-swiper [class*="slider-btn"]:focus, .slider [class*="slider-btn"]:hover {
  background: transparent;
  border: 0 none; }

.la-swiper [class*="slider-btn"] .icon, .slider [class*="slider-btn"] .icon-catal {
  color: #ccc; }

body.front div#zone2 .incontournable h2.gla-item-title {
  position: absolute;
  background: white;
  padding: 18px 20px 18px 76px;
  top: 0;
  left: 0;
  line-height: 1em;
  background-repeat: no-repeat;
  background-size: 60px auto;
  height: 60px;
  font-size: 21px;
  font-weight: normal;
  white-space: nowrap;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  max-width: 100%; }

div#zone2 .incontournable article:nth-child(1) h2.gla-item-title {
  background-image: url("img/sia2018/home/secteur-picto-culture.svg"); }

div#zone2 .incontournable article:nth-child(2) h2.gla-item-title {
  background-image: url("img/sia2018/home/secteur-picto-elevage.svg"); }

div#zone2 .incontournable article:nth-child(3) h2.gla-item-title {
  background-image: url("img/sia2018/home/secteur-picto-services.svg"); }

div#zone2 .incontournable .gla-item-content {
  min-height: 80px;
  text-decoration: none;
  background: none; }

div#zone2 .incontournable .gla-item-desc {
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  text-align: left;
  font-size: 18px;
  padding-top: 14px;
  height: 110px;
  color: #293a4d; }

div#zone2 .incontournable .gla-item-content .gla-btn-read-more {
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  font-family: 'akrobat-bold';
  padding: 11px 22px 13px;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  line-height: normal;
  margin-top: 125px;
  text-transform: none;
  color: white;
  background: #83b81a;
  border: 0;
  font-size: 14px;
  border-radius: 50px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2); }

div#zone2 .incontournable .gla-item-content .gla-btn-read-more:hover,
div#zone2 .incontournable a:hover .gla-btn-read-more {
  background-color: white;
  color: #83b81a; }

div#zone2 .incontournable .gla-item > a:hover .gla-item-content {
  background: none;
  color: black; }

.exhibitor-description {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 50px; }

/* encart autre */
div#encart-autre {
  max-width: 1200px;
  background: white;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  margin: 15px auto 0; }

div#encart-autre .encart-content {
  display: table-cell;
  padding: 26px 37px 20px;
  width: calc(100% - 330px);
  display: none; }

div#encart-autre h2 {
  font-size: 36px;
  color: #83b81a;
  margin: 0 0px 5px 0;
  line-height: 0.9em; }

div#encart-autre ul {
  margin: 0;
  padding: 0; }

div#encart-autre li {
  padding: 0 10px;
  display: inline-block;
  border-right: 1px solid #BEBEBE;
  line-height: 15px;
  margin-bottom: 10px; }

div#encart-autre li a {
  color: #293a4d; }

div#encart-autre li a:hover {
  color: #83b81a; }

div#encart-autre li:first-child,
div#encart-autre li:nth-child(4) {
  padding-left: 0; }

div#encart-autre li:last-child {
  border-right: 0; }

div#encart-autre .encart-right {
  position: relative;
  display: block;
  width: 100%;
  background: url("img/sia2018/home/picto-calendar.png") no-repeat 95% center #83b81a;
  text-align: center;
  vertical-align: middle;
  padding: 35px 0px; }

div#encart-autre .encart-right a {
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  background: url("img/sia2018/home/arrow-bt-vert-right.svg") no-repeat 92% center white;
  background-size: 26px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 12px 60px 12px 20px;
  border-radius: 50px;
  color: #83b81a;
  font-size: 16px;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease; }

div#encart-autre .encart-right a:hover {
  -webkit-transform: scale(1.02);
  -ms-transform: scale(1.02);
  transform: scale(1.02); }

/* marché terroirs */
#marche-terroir {
  text-align: center;
  margin-top: 15px; }

#marche-terroir h2 {
  margin: 0;
  background: #e30059;
  color: white;
  display: inline-block;
  font-size: 24px;
  padding: 13px 15px 18px 15px;
  line-height: 29px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-transform: translateY(30px);
  -ms-transform: translateY(30px);
  transform: translateY(30px);
  z-index: 1;
  position: relative;
  width: 90%; }

#marche-terroir h2 br {
  display: none; }

#marche-terroir h3 {
  color: white;
  margin: 0;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 38px;
  letter-spacing: 0;
  text-shadow: 0px 3px 20px rgba(0, 0, 0, 0.3);
  line-height: 40px;
  margin-bottom: 15px; }

#marche-terroir p {
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 25px;
  text-shadow: 0px 3px 20px rgba(0, 0, 0, 0.3);
  line-height: 31px;
  margin: 2px 0 30px; }

#marche-terroir .bloc {
  float: none;
  width: 100%;
  color: white;
  padding: 90px 10px 95px;
  position: relative;
  overflow: hidden; }

#marche-terroir .bloc h3 {
  z-index: 1;
  position: relative; }

#marche-terroir .bloc p {
  z-index: 1;
  position: relative; }

#marche-terroir .bloc p br {
  display: none; }

#marche-terroir .bloc a:hover {
  color: #e30059;
  background-color: white;
  background-image: url("img/sia2018/home/arrow-bt-orange.svg"); }

#marche-terroir .bloc-partager::before,
#marche-terroir .bloc-deguster::before {
  background-size: cover;
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transition: all 10s linear;
  -o-transition: all 10s linear;
  transition: all 10s linear;
  z-index: 0; }

#marche-terroir .bloc-partager::before {
  background-image: url("img/sia2018/home/bloc-partager.jpg");
  background-position: right -150px center; }

#marche-terroir .bloc-deguster::before {
  background-image: url("img/sia2018/home/bloc-deguster.jpg"); }

#marche-terroir .bloc-deguster:hover::before,
#marche-terroir .bloc-partager:hover::before {
  -webkit-transform: scale(1.12);
  -ms-transform: scale(1.12);
  transform: scale(1.12); }

#marche-terroir a {
  background-image: url("img/sia2018/home/arrow-bt-blanc-right.svg");
  background-color: #e30059;
  background-repeat: no-repeat;
  background-position: right 25px center;
  background-size: 26px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 13px 60px 13px 30px;
  border-radius: 50px;
  color: white;
  font-size: 17px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: relative; }

.separateur1 {
  margin-bottom: 80px; }

/* SIAPRO */
div.siapro {
  border-top: 1px dashed #d8d8da;
  text-align: center; }

div.siapro .gla-item-btn,
div.contenus-dedies .gla-item-btn {
  display: none; }

div.siapro [class*="grid-"],
div.contenus-dedies [class*="grid-"] {
  display: inline-block; }

div.siapro article,
div.contenus-dedies article {
  display: inline-block;
  padding-top: 0 !important;
  width: 90% !important;
  margin: 0 5%;
  -webkit-box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  background-color: white !important;
  padding: 0;
  -webkit-transition: all 0.25s cubic-bezier(0.39, 0.58, 0.57, 1);
  -o-transition: all 0.25s cubic-bezier(0.39, 0.58, 0.57, 1);
  transition: all 0.25s cubic-bezier(0.39, 0.58, 0.57, 1);
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0); }

div.contenus-dedies .la-item-desc,
div.siapro .la-item-desc {
  display: none; }

div.contenus-dedies article:active,
div.siapro article:active,
div.contenus-dedies article:hover,
div.siapro article:hover {
  -webkit-transform: translateY(0);
  -ms-transform: translateY(0);
  transform: translateY(0);
  -webkit-box-shadow: 0 30px 25px -13px rgba(0, 0, 0, 0.1);
  box-shadow: 0 30px 25px -13px rgba(0, 0, 0, 0.1); }

div.contenus-dedies .inside .main-title-with-link,
div.siapro .inside .main-title-with-link {
  text-align: center;
  margin-top: -36px;
  margin-bottom: 55px; }

div.contenus-dedies + .quicklinks,
div.siapro + .quicklinks {
  text-align: center;
  margin-top: 15px !important; }

div.contenus-dedies .swiper-wrapper,
div.siapro .swiper-wrapper {
  padding-bottom: 30px; }

div.contenus-dedies + .quicklinks .btn-primary,
div.siapro + .quicklinks .btn-primary {
  background-image: url(img/sia2018/home/arrow-bt-blanc-right.svg);
  background-color: #4b2980;
  background-repeat: no-repeat;
  background-position: right 25px center;
  background-size: 26px auto;
  text-transform: none;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 15px 65px 15px 30px;
  border-radius: 50px;
  color: white;
  font-size: 17px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  pointer-events: all; }

div.contenus-dedies + .quicklinks .btn-primary span,
div.siapro + .quicklinks .btn-primary span {
  vertical-align: text-top; }

div.contenus-dedies + .quicklinks .btn-primary:hover,
div.siapro + .quicklinks .btn-primary:hover {
  color: #4b2980;
  background-color: white;
  background-image: url(img/sia2018/home/arrow-bt-violet.svg); }

div.contenus-dedies h2.main-title span.titresiapro,
div.siapro h2.main-title span.titresiapro {
  text-align: center;
  margin: -36px auto;
  background: #4b2980;
  color: white;
  display: inline-block;
  font-size: 24px;
  line-height: 31px;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  padding: 15px 15px;
  max-width: 90%; }

div.contenus-dedies h2.main-title span.soustitresiapro,
div.siapro h2.main-title span.soustitresiapro {
  background: white;
  color: #293a4d;
  display: inline-block;
  padding: 5px 38px;
  margin-top: 30px;
  font-size: 18px;
  font-family: "sofiapro-light", arial, sans-serif;
  max-width: 475px;
  padding: 18px 20px;
  line-height: 26px;
  max-width: 90%; }

div.contenus-dedies .la-item-title a,
div.siapro .la-item-title a {
  background-color: transparent;
  color: #293a4d;
  font-size: 23px;
  line-height: 23px;
  font-weight: normal;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  font-family: "sofiapro-bold", arial, sans-serif; }

div.contenus-dedies .la-slider .la-item-img,
div.siapro .la-slider .la-item-img {
  -webkit-box-ordinal-group: 3;
  -ms-flex-order: 2;
  order: 2;
  z-index: -1;
  width: 100%; }

div.siapro .la-item-content,
div.siapro .la-item-content {
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1; }

div.contenus-dedies .la-slider,
div.siapro .la-slider {
  background-color: transparent; }

div.contenus-dedies .main-title-with-link,
div.siapro .main-title-with-link {
  border: 0; }

div.contenus-dedies .la-slider .slider-pagin,
div.siapro .la-slider .slider-pagin {
  bottom: 40px; }

div.contenus-dedies .la-item-content,
div.siapro .la-item-content,
div.contenus-dedies .gla-item-content,
div.siapro .gla-item-content {
  display: block;
  vertical-align: middle;
  height: 145px;
  background-color: transparent;
  margin-top: -35px;
  z-index: 1;
  min-height: 190px;
  position: relative; }

div.contenus-dedies .swiper-container-android .swiper-slide, .swiper-wrapper,
div.siapro .swiper-container-android .swiper-slide, .swiper-wrapper {
  -webkit-transition: all 0.6s ease;
  -o-transition: all 0.6s ease;
  transition: all 0.6s ease; }

div.contenus-dedies .gla-item-content:hover,
div.siapro .gla-item-content:hover,
div.contenus-dedies .la-item-content:hover,
div.siapro .la-item-content:hover,
div.contenus-dedies .la-item > a:hover .la-item-content,
div.siapro .la-item > a:hover .la-item-content,
div.contenus-dedies .gla-item > a:hover .gla-item-content,
div.siapro .gla-item > a:hover .gla-item-content {
  background: none; }

div.contenus-dedies .la-item-btn,
div.siapro .la-item-btn {
  display: none; }

div.siapro .gla-item > a:hover .la-item-title,
div.siapro .gla-item > a:hover .gla-item-title {
  color: #293a4d; }

.article_list .gla-item > a:hover .la-item-title,
.article_list .gla-item > a:hover .gla-item-title,
.article_list .gla-item > a:active .la-item-title,
.article_list .gla-item > a:active .gla-item-title,
.article_list .gla-item > a:focus .la-item-title,
.article_list .gla-item > a:focus .gla-item-title {
  color: #293a4d; }

div.siapro .gla-item-title {
  font-weight: normal;
  font-size: 22px;
  padding: 80px 30px 0 30px;
  margin-top: -30px;
  color: #293a4d; }

div.contenus-dedies article .la-item-title,
div.siapro article .la-item-title {
  min-height: 70px;
  padding: 80px 17px 0 17px;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  text-align: center; }

div.contenus-dedies article .la-item-title a,
div.siapro article .la-item-title a {
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none; }

.slider-pagin-item {
  border: 0;
  border-radius: 50px;
  width: 11px;
  height: 11px; }

.slider-pagin-item + .slider-pagin-item {
  margin-left: 8px; }

div.contenus-dedies .slider-pagin-item.is-active,
div.siapro .slider-pagin-item.is-active {
  background-color: #4b2980; }

div.siapro article.topic_genetique .la-item-title,
div.contenus-dedies article.topic_genetique .la-item-title,
div.siapro article.topic_genetique .gla-item-title {
  background: url("img/sia2018/home/picto-titre-genetique.svg") no-repeat center 0; }

div.siapro article.topic_professionnels .la-item-title,
div.contenus-dedies article.topic_professionnels .la-item-title,
div.siapro article.topic_professionnels .gla-item-title {
  background: url("img/sia2018/home/picto-titre-pro.svg") no-repeat center 0; }

div.siapro article.topic_accueil .la-item-title,
div.contenus-dedies article.topic_accueil .la-item-title,
div.siapro article.topic_accueil .gla-item-title {
  background: url("img/sia2018/home/picto-titre-accueil.svg") no-repeat center 0; }

div.siapro article.topic_conferences .la-item-title,
div.contenus-dedies article.topic_conferences .la-item-title,
div.siapro article.topic_conferences .gla-item-title {
  background: url("img/sia2018/home/picto-titre-conferences.svg") no-repeat center 0; }

/* Lites articles */
.breadcrumb-nav + .block-page {
  /*min-height: 180px;*/ }

.article .social-sharing {
  display: none; }

.article .at-publication {
  display: none; }

.article .article-navigation {
  max-width: 800px;
  margin: 50px auto 0 !important; }

.article .article-navigation .an-item-link {
  background-color: white;
  color: #293a4d;
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  min-height: 88px;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease; }

.article .article-navigation .an-item-content {
  width: 63%; }

.article .article-navigation .an-item an-item-next .an-item-link:hover {
  -webkit-transform: translateX(5px);
  -ms-transform: translateX(5px);
  transform: translateX(5px); }

.article .article-navigation .an-item an-item-previous .an-item-link:hover {
  -webkit-transform: translateX(-5px);
  -ms-transform: translateX(-5px);
  transform: translateX(-5px); }

.article .article-navigation .an-item-title {
  display: block;
  font-weight: normal;
  line-height: 28px;
  font-size: 25px; }

.article .an-item-illust {
  min-height: 100%; }

.article .an-item-next .an-item-illust {
  margin-left: 15px; }

.article .an-item-next .an-item-link {
  padding-left: 20px; }

.article .an-item-previous .an-item-title {
  padding-left: 15px; }

.article .an-item-previous .an-item-content {
  text-align: right;
  padding-right: 20px;
  text-align: right;
  margin-left: auto; }

.article .article-navigation .an-item-publication {
  display: none; }

/* egerie 2018 */
div#egerie2018 {
  text-align: center;
  border-top: 1px dashed #d8d8da;
  margin-top: 80px; }

div#egerie2018 h2 {
  background: #83b81a;
  color: white;
  margin-bottom: 25px;
  width: 90%;
  font-size: 32px;
  line-height: 36px;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  padding: 15px;
  display: inline-block;
  -webkit-transform: translateY(-20px);
  -ms-transform: translateY(-20px);
  transform: translateY(-20px); }

div#egerie2018 h2 + div {
  width: 90%;
  margin: 0 auto; }

div#egerie2018 h3 {
  line-height: 1.2em;
  color: #293a4d;
  font-weight: normal;
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 28px;
  letter-spacing: 0;
  margin-bottom: 10px; }

div#egerie2018 .bloc-wrapper {
  max-width: 888px;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 auto 55px;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1); }

div#egerie2018 .bloc-egerie {
  position: relative;
  width: 90%;
  margin: 0 auto;
  background: white;
  padding: 45px 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  border-bottom: 1px solid #e8e8e8;
  border-right: 0 none; }

div#egerie2018 .bloc-egerie:last-child {
  border-right: 0 none; }

div#egerie2018 .bloc-egerie .content {
  font-size: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; }

div#egerie2018 .bloc-egerie .content p {
  margin-top: 0;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none; }

div#egerie2018 .bloc-egerie .content p br {
  display: none; }

div#egerie2018 .bloc-egerie:last-child img {
  margin-top: -3px;
  margin-bottom: 10px; }

div#egerie2018 .bloc-egerie:last-child a {
  margin-top: 20px; }

div#egerie2018 .bloc-egerie a {
  background-image: url("img/sia2018/home/arrow-bt-blanc-right.svg");
  background-color: #83b81a;
  background-repeat: no-repeat;
  background-position: right 25px center;
  background-size: 26px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 13px 60px 13px 30px;
  border-radius: 50px;
  color: white;
  font-size: 16px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: relative;
  margin-top: 20px; }

div#egerie2018 .bloc-egerie a:hover {
  color: #83b81a;
  background-color: white;
  background-image: url("img/sia2018/home/arrow-bt-vert-right.svg"); }

/* coulisses */
div#coulisse {
  background: url("img/sia2018/home/coulisses-bg.jpg") no-repeat center center;
  background-size: cover;
  padding-top: 50px;
  margin-top: 0;
  text-align: center;
  background-position: right top; }

div#coulisse h2 {
  text-align: center;
  color: #293a4d;
  font-size: 32px;
  line-height: 1em;
  margin: 0 auto 20px;
  width: 90%; }

div#coulisse h2 span {
  display: block;
  color: #83b81a;
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 22px;
  line-height: 27px;
  margin-top: 5px; }

div.coulisse-wrapper {
  text-align: center; }

div.coulisse-bloc {
  padding: 0;
  border: 8px solid white;
  background: #3e3e3e;
  display: inline-block;
  vertical-align: top;
  -webkit-box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.15);
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.15);
  margin: 0;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  width: 300px;
  margin-bottom: 20px; }

div.coulisse-bloc:hover {
  -webkit-transform: translateY(-7px);
  -ms-transform: translateY(-7px);
  transform: translateY(-7px);
  -webkit-box-shadow: 0 27px 20px -10px rgba(0, 0, 0, 0.15);
  box-shadow: 0 27px 20px -10px rgba(0, 0, 0, 0.15); }

div.coulisse-bloc a {
  width: 284px;
  height: 185px;
  padding-top: 45px;
  display: block;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-family: sofiapro-bold;
  font-size: 21px;
  letter-spacing: 0; }

div.coulisse-bloc p {
  margin-top: 10px;
  line-height: 1.2em; }

div#coulisse1 {
  background-image: url("img/sia2018/home/coulisse-video-1.png");
  background-repeat: no-repeat;
  background-position: center center; }

div#coulisse2 {
  background-image: url("img/sia2018/home/coulisse-video-2.png");
  background-repeat: no-repeat;
  background-position: center center; }

div#coulisse3 {
  background-image: url("img/sia2018/home/coulisse-video-3.png");
  background-repeat: no-repeat;
  background-position: center center; }

div#coulisse3 a {
  padding-top: 45px; }

div#coulisse a.bt-bottom {
  margin-top: 30px;
  margin-bottom: 80px;
  background-image: url(img/sia2018/home/arrow-bt-blanc-right.svg);
  background-color: #83b81a;
  background-repeat: no-repeat;
  background-position: right 25px center;
  background-size: 26px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 13px 60px 13px 30px;
  border-radius: 50px;
  color: white;
  font-size: 17px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  z-index: 1; }

div#coulisse a.bt-bottom:hover {
  color: #83b81a;
  background-color: white;
  background-image: url(img/sia2018/home/arrow-bt-vert-right.svg); }

/* visite */
#pub-hp {
  background-color: white;
  text-align: center;
  padding: 38px 0 45px; }

#pub-hp::before {
  content: 'Publicité';
  display: block;
  font-size: 10px;
  color: #B4B4B4;
  margin-bottom: 5px;
  margin-top: -10px; }

div.visite {
  text-align: center;
  background-image: url(img/sia2018/home/bg-texture.png);
  padding-bottom: 90px;
  border-top: 1px dashed #d8d8da;
  display: none; }

div.visite .main-title-with-link {
  position: absolute;
  right: 0;
  left: 0;
  margin-top: -35px;
  text-align: center;
  border: 0; }

div.visite h2.main-title {
  background: #2eb4e9;
  color: white;
  font-size: 38px;
  padding: 5px 38px;
  display: inline-block; }

div.visite .cxp-pagination {
  padding-top: 120px; }

div.visite .grid-la-list {
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

div.visite .grid-la-list article {
  -webkit-box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  padding: 0;
  width: 30%;
  margin: 0px 5% 0 0;
  overflow: hidden;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  -webkit-transition: all 0.25s cubic-bezier(0.39, 0.58, 0.57, 1);
  -o-transition: all 0.25s cubic-bezier(0.39, 0.58, 0.57, 1);
  transition: all 0.25s cubic-bezier(0.39, 0.58, 0.57, 1); }

div.visite .grid-la-list article:last-child {
  margin-right: 0; }

div.visite .grid-la-list article:hover {
  -webkit-transform: translateY(-7px);
  -ms-transform: translateY(-7px);
  transform: translateY(-7px);
  -webkit-box-shadow: 0 30px 25px -13px rgba(0, 0, 0, 0.1);
  box-shadow: 0 30px 25px -13px rgba(0, 0, 0, 0.1); }

div.visite .grid-la-list article a {
  height: 100%;
  background-color: #0E0E0E; }

div.visite .grid-la-list article a img {
  opacity: .5; }

div.visite .gla-item-content .gla-item-btn {
  margin: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%); }

div.visite .gla-btn-read-more {
  border: 3px solid white;
  background-color: #009cd8;
  border-radius: 50px;
  text-transform: none;
  font-size: 14px;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 11px 21px 13px; }

div.visite .grid-la-list article .gla-item-title {
  margin-top: 0;
  padding: 0 40px;
  position: absolute;
  width: 100%;
  text-align: center;
  left: 0;
  top: -108%;
  color: white;
  font-size: 30px;
  text-shadow: 0px 3px 20px rgba(0, 0, 0, 0.3); }

div.visite .grid-la-list article .gla-item-title::before {
  width: 46px;
  height: 60px;
  content: "";
  display: block;
  margin: 0px auto 7px; }

div.visite .grid-la-list article.topic_comment_venir .gla-item-title::before {
  background-image: url(img/sia2018/home/picto-train.svg); }

div.visite .grid-la-list article.topic_consultez_les_horaires .gla-item-title::before {
  background-image: url(img/sia2018/home/picto-calendar.svg); }

div.visite .grid-la-list article.topic_tarifs .gla-item-title::before {
  background-image: url(img/sia2018/home/picto-euro.svg); }

div.visite .grid-la-list article.topic_comment_venir .gla-item-title::before,
div.visite .grid-la-list article.topic_consultez_les_horaires .gla-item-title::before,
div.visite .grid-la-list article.topic_tarifs .gla-item-title::before {
  background-repeat: no-repeat;
  background-position: center; }

div.visite .grid-la-list article .gla-item-content {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  background-color: white;
  z-index: 1;
  position: relative;
  left: 0;
  padding: 0 60px 40px;
  min-height: 182px;
  margin-bottom: -3px; }

div.visite .grid-la-list article .gla-item-content::after {
  content: "";
  margin-top: auto; }

/* communaute */
div#communaute {
  background: url("img/sia2018/home/bg-texture.png") 0 0;
  padding: 0; }

div#communaute h2 {
  color: #7fba2e;
  font-size: 52px;
  margin: 0;
  line-height: 0.6em; }

div#communaute .communaute-wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  padding-top: 25px;
  padding-bottom: 25px; }

div#communaute .bloc-communaute {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 70px 0; }

div#communaute .bloc-communaute strong {
  font-size: 28px;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0;
  color: #293a4d;
  line-height: 32px; }

div#communaute .bloc-communaute p {
  line-height: 20px;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  font-size: 18px;
  margin-top: 12px; }

div#communaute .bloc-sociaux {
  background: url("img/sia2018/home/bg-coeur.svg") no-repeat top 20px center;
  background-size: 288px;
  border-right: 0 none;
  padding-bottom: 20px; }

div#communaute .bloc-sociaux ul {
  display: inline-block;
  list-style-type: none;
  background: white;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  padding: 0 10px; }

div#communaute .bloc-sociaux li {
  display: inline-block;
  padding: 15px 8px; }

div#communaute .bloc-sociaux li a {
  display: block;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease; }

div#communaute .bloc-sociaux li a:hover {
  -webkit-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  transform: translateY(-3px); }

div#communaute .bloc-sociaux li img {
  max-width: 35px; }

div#communaute .bloc-nl {
  background: url("img/sia2018/home/bg-lettre.svg") no-repeat center center;
  font-size: 1.3em;
  padding-top: 40px;
  background-size: 280px;
  padding-bottom: 60px; }

div#communaute .bloc-nl strong {
  font-size: 48px;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0;
  color: #293a4d;
  font-size: 38px;
  line-height: 46px; }

div#communaute .bloc-nl a {
  background-image: url("img/sia2018/home/arrow-bt-blanc-right.svg");
  background-color: #83b81a;
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 26px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 12px 55px 12px 25px;
  border-radius: 50px;
  color: white;
  font-size: 15px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: relative;
  margin-top: 10px;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
  width: 140px; }

div#communaute .bloc-nl a:hover {
  color: #83b81a;
  background-color: white;
  background-image: url(img/sia2018/home/arrow-bt-vert-right.svg); }

/* partenaire */
div#zone4 {
  background: white; }

div#zone4 .partner a:hover img {
  -webkit-transform: scale(1.05);
  -ms-transform: scale(1.05);
  transform: scale(1.05); }

div#zone4 .partner .slider-content {
  margin-top: 22px; }

div#zone4 .partner .pg-item-illust img {
  max-height: 70px;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease; }

div#zone4 .partner {
  margin: 0 auto;
  padding: 65px 0 60px;
  display: none; }

div#zone4 .partner h2 {
  color: #293a4d;
  font-size: 45px;
  margin: 0; }

div#zone4 .main-title-with-link {
  border: 0;
  margin: 0; }

div#zone4 .link-view-all {
  background-image: url("img/sia2018/home/arrow-bt-blanc-right.svg");
  background-color: #83b81a;
  background-repeat: no-repeat;
  background-position: right 25px center;
  background-size: 26px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 13px 60px 13px 30px;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: relative;
  margin-top: -68px; }

div#zone4 .link-view-all:hover {
  color: #83b81a;
  background-color: white;
  background-image: url(img/sia2018/home/arrow-bt-vert-right.svg); }

div#zone4 .link-view-all i {
  display: none; }

div#zone4 .partner-gallery.slider .pg-item {
  display: inline-block;
  width: 16.5%; }

div#zone4 .pg-item-title {
  display: none; }

/* edito */
.front div#zone4 .edito h2 {
  font-family: "sofiapro-light", arial, sans-serif; }

.front div.edito {
  background: url("img/sia2018/home/bg-texture.png") 0 0;
  padding: 80px 0 80px;
  display: none;
  text-align: center; }

.front div.edito .inside {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

.front div.edito h2 {
  width: 465px;
  padding: 16px 20px;
  line-height: 1.2em;
  background: white;
  color: #293a4d;
  font-size: 32px;
  margin: 0;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%); }

.front div.edito p {
  text-align: left;
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  min-width: 50%;
  margin-top: 157px;
  line-height: 25px; }

.front div.edito p:nth-child(odd) {
  padding-left: 40px; }

.front div.edito p:nth-child(even) {
  padding-right: 40px; }

.front div.edito p.style1,
.front div.edito p.style2 {
  font-size: 14px; }

/* PAGE EXPOSANT --------------------------------------------------------- */
/* edito */
body.espace-exposants div#zone1 div.edito {
  background: url("img/sia2018/home/bg-texture.png") 0 0;
  padding: 70px 0 70px;
  text-align: center;
  border-bottom: 1px dashed #d8d8da;
  margin-top: -36px !important; }

div#zone1 .edito h1 {
  color: #215AD6;
  font-size: 64px;
  letter-spacing: 0;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 0;
  padding: 0;
  margin: 0;
  line-height: 1em; }

body.espace-exposants div#zone1 .edito h1 {
  display: none; }

body.espace-exposants div#zone1 .edito h4 {
  margin: 0 0 10px 0; }

div#zone1 .edito h4 strong {
  color: #293a4d;
  font-size: 28px;
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 0 15px;
  line-height: 33px; }

div#zone1 div.edito p {
  margin: 0;
  text-align: center;
  font-size: 19px;
  max-width: 555px;
  margin: 0 auto; }

/* exposer */
div#zone2 div#exposer {
  background: #f7f7f7;
  text-align: center;
  padding-bottom: 50px; }

div#zone2 div#exposer h2 {
  background: #215AD6;
  color: white;
  display: inline-block;
  padding: 6px 20px;
  font-size: 32px;
  margin-top: -40px; }

div#zone2 div#exposer img {
  margin: 0 auto 0;
  display: block;
  -webkit-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  width: 90%; }

/* temoignage */
div#exposant-temoignage {
  text-align: center;
  background: url("img/sia2018/exposant/bg-temoignage.jpg") no-repeat center right -130px;
  background-size: cover;
  padding-top: 40px;
  padding-bottom: 60px; }

div#exposant-temoignage h2 {
  font-size: 45px;
  color: #293a4d;
  padding: 0;
  margin: 0;
  font-weight: normal; }

div#exposant-temoignage p {
  margin-top: 0;
  color: #215AD6;
  font-family: "akrobat-regular", helvetica, arial, sans-serif;
  font-size: 17px;
  font-weight: normal;
  line-height: 22px;
  max-width: 90%;
  margin: 0 auto; }

div#exposant-temoignage p br {
  display: none; }

div#exposant-temoignage div.temoignage-bloc {
  background: url("img/sia2018/exposant/bg-bloc-temoignage.jpg") no-repeat center center white;
  padding: 0;
  border: 8px solid white;
  display: inline-block;
  vertical-align: top;
  -webkit-box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.15);
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.15);
  margin: 20px auto 0;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

div#exposant-temoignage div.temoignage-bloc:hover {
  -webkit-transform: translateY(-7px);
  -ms-transform: translateY(-7px);
  transform: translateY(-7px);
  -webkit-box-shadow: 0 27px 20px -10px rgba(0, 0, 0, 0.15);
  box-shadow: 0 27px 20px -10px rgba(0, 0, 0, 0.15); }

div#exposant-temoignage div.temoignage-bloc a {
  width: 290px;
  height: 182px;
  padding-top: 50px;
  display: block;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 26px;
  letter-spacing: 0; }

div#exposant-temoignage div.temoignage-bloc p {
  margin-top: 10px;
  line-height: 1.2em;
  color: white; }

/* objectifs */
div#zone2 div.vos-objectifs {
  margin-bottom: 0;
  border-top: 1px dashed #d8d8da;
  position: relative; }

div#zone2 div.vos-objectifs .grid-la-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex; }

div#zone2 div.vos-objectifs .grid-la-list .gla-item {
  width: 22%;
  margin-right: 4%;
  -webkit-box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

div#zone2 div.vos-objectifs .la-item::after {
  display: none; }

div#zone2 div.vos-objectifs .la-item {
  -webkit-box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  width: 75%;
  margin: 60px 12.5%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  background: transparent; }

div#zone2 div.vos-objectifs .la-slider {
  background: transparent; }

div#zone2 div.vos-objectifs .la-slider .la-item-img {
  -webkit-box-ordinal-group: 1;
  -ms-flex-order: 0;
  order: 0;
  width: 100%;
  height: auto; }

div#zone2 div.vos-objectifs .la-slider .la-item-title {
  min-height: 66px; }

div#zone2 div.vos-objectifs .grid-la-list .gla-item:hover {
  -webkit-transform: translateY(-4px);
  -ms-transform: translateY(-4px);
  transform: translateY(-4px);
  -webkit-box-shadow: 0 27px 25px -13px rgba(0, 0, 0, 0.1);
  box-shadow: 0 27px 25px -13px rgba(0, 0, 0, 0.1); }

div#zone2 div.vos-objectifs .la-item .la-item-title a,
div#zone2 div.vos-objectifs .grid-la-list .gla-item a .gla-item-title {
  color: #293a4d;
  font-family: "sofiapro-light", arial, sans-serif;
  font-weight: normal;
  font-size: 23px;
  padding: 0px 40px 30px;
  line-height: 23px; }

div#zone2 div.vos-objectifs .slider-pagin-btn {
  display: block;
  width: 100%;
  right: 0; }

div#zone2 div.vos-objectifs .slider-btn-next,
div#zone2 div.vos-objectifs .slider-btn-prev {
  outline: none;
  background-color: transparent;
  border: 0 none;
  color: #C0C0C0; }

div#zone2 div.vos-objectifs .slider-btn-next .icon,
div#zone2 div.vos-objectifs .slider-btn-prev .icon {
  color: #C0C0C0;
  font-size: 18px; }

div#zone2 div.vos-objectifs .slider-btn-prev {
  margin-left: 5px; }

div#zone2 div.vos-objectifs .slider-btn-next {
  float: right;
  margin-right: 5px; }

div#zone2 div.vos-objectifs .la-slider .slider-pagin {
  bottom: 265px; }

div#zone2 div.vos-objectifs .la-item .la-item-content {
  text-align: center;
  background: white;
  padding: 45px 39px 0;
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1;
  min-height: 0px;
  z-index: 1;
  position: relative;
  overflow: visible; }

div#zone2 div.vos-objectifs .la-item .la-item-btn {
  margin-top: -151px;
  margin-bottom: 115px; }

div#zone2 div.vos-objectifs .la-item .la-item-title a {
  padding: 0; }

div#zone2 div.vos-objectifs .grid-la-list .gla-item a:hover .gla-item-title {
  color: #293a4d; }

div#zone2 div.vos-objectifs .grid-la-list .gla-item:last-child {
  margin-right: 0; }

div#zone2 div.vos-objectifs .inside {
  position: relative; }

div#zone2 div.vos-objectifs .cxp-pagination {
  padding-top: 110px; }

div#zone2 div.vos-objectifs .main-title-with-link h2.main-title {
  background: #205ad7;
  color: white;
  display: inline-block;
  padding: 13px 20px;
  font-size: 32px;
  margin-top: -40px; }

div#zone2 div.vos-objectifs .list-grids-with-pagin .gla-item a {
  height: auto; }

.vos-objectifs .la-slider .la-item-btn .btn-primary {
  background: #205ad7;
  text-decoration: none;
  font-family: akrobat-bold;
  display: inline-block;
  padding: 12px 15px;
  border: 3px solid white;
  border-radius: 50px;
  color: white;
  font-size: 13px; }

.vos-objectifs .la-slider .la-item-btn .btn-primary i {
  display: none; }

div#zone2 div.vos-objectifs .gla-btn-read-more {
  background: #205ad7;
  text-decoration: none;
  font-family: akrobat-bold;
  display: inline-block;
  padding: 12px 15px;
  border: 3px solid white;
  border-radius: 50px;
  color: white;
  font-size: 14px; }

div#zone2 div.vos-objectifs .gla-item > a .gla-item-title {
  font-size: 24px; }

/* univers */
div#zone2 div.votre-univers {
  background: url("img/sia2018/home/bg-texture.png") 0 0;
  padding: 65px 0 90px;
  border-top: 1px dashed #d8d8da;
  border-bottom: 1px dashed #d8d8da;
  position: relative;
  margin-top: 30px; }

div#zone2 div.votre-univers .la-slider {
  max-width: 90%;
  margin: 0 auto;
  background-color: transparent; }

div#zone2 div.votre-univers .la-slider .slider-pagin {
  display: none; }

div#zone2 div.votre-univers .slider-content {
  display: block; }

div#zone2 div.votre-univers .la-slider .la-item {
  padding: 0;
  display: block;
  background-color: transparent;
  margin-bottom: 20px;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1); }

div#zone2 div.votre-univers .la-slider .la-item .la-item-content a::before {
  content: "";
  display: inline-block;
  width: 75px;
  height: 75px;
  -ms-flex-preferred-size: 75px;
  flex-basis: 75px;
  min-width: 75px;
  background-size: 75px;
  background-repeat: no-repeat;
  background-position: left top;
  margin-right: 12px; }

div#zone2 div.votre-univers .la-slider .la-item.topic_cultures .la-item-content a::before {
  background-image: url(img/sia2018/home/secteur-picto-culture.svg); }

div#zone2 div.votre-univers .la-slider .la-item.topic_metiers .la-item-content a::before {
  background-image: url(img/sia2018/home/secteur-picto-services.svg); }

div#zone2 div.votre-univers .la-slider .la-item.topic_elevage .la-item-content a::before {
  background-image: url(img/sia2018/home/secteur-picto-elevage.svg); }

div#zone2 div.votre-univers .la-slider .la-item.topic_produits .la-item-content a::before {
  background-image: url(img/sia2018/home/secteur-picto-produits.svg); }

div#zone2 div.votre-univers .la-slider .la-item::after {
  display: none; }

div#zone2 div.votre-univers .la-slider .la-item-title {
  margin: 0;
  position: relative;
  background-color: white; }

div#zone2 div.votre-univers .la-slider .la-item-title::before {
  width: 75px;
  height: 100%;
  position: absolute;
  content: "";
  display: block;
  left: 0;
  top: 0;
  background-color: #83b81a; }

div#zone2 div.votre-univers .la-slider .la-item.topic_cultures .la-item-title::before {
  background-color: #f6a924; }

div#zone2 div.votre-univers .la-slider .la-item.topic_metiers .la-item-title::before {
  background-color: #009cd8; }

div#zone2 div.votre-univers .la-slider .la-item.topic_elevage .la-item-title::before {
  background-color: #83b81a; }

div#zone2 div.votre-univers .la-slider .la-item.topic_produits .la-item-title::before {
  background-color: #e30059; }

div#zone2 div.votre-univers .la-slider .la-item-title a {
  background-color: transparent;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #293a4d;
  font-size: 18px;
  line-height: 24px;
  text-shadow: none;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  padding: 10px 10px 10px 0;
  position: relative;
  z-index: 1; }

div#zone2 div.votre-univers .la-item .la-item-content {
  padding: 0;
  min-height: 0; }

div#zone2 div.votre-univers .la-slider .la-item-btn {
  display: none; }

div#zone2 div.votre-univers .inside {
  position: relative; }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item a .gla-item-content::before {
  content: "";
  position: absolute;
  left: 88px;
  top: 0;
  width: 0;
  height: 100%;
  background-color: #f6a924;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease; }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item.topic_metiers .gla-item-content::before {
  background-color: #009cd8; }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item.topic_elevage .gla-item-content::before {
  background-color: #83b81a; }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item.topic_produits .gla-item-content::before {
  background-color: #e30059; }

div#zone2 div.votre-univers .list-grids-with-pagin .grid-la-list {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between; }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item a {
  width: 380px;
  height: 88px;
  min-height: 88px;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1); }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item a::before {
  content: "";
  display: inline-block;
  width: 88px;
  height: 88px;
  background-repeat: no-repeat;
  background-position: left top; }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item a:hover .gla-item-content::before {
  width: calc(100% - 83px); }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item.topic_cultures a::before {
  background-image: url("img/sia2018/home/secteur-picto-culture.svg"); }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item.topic_metiers a::before {
  background-image: url("img/sia2018/home/secteur-picto-services.svg"); }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item.topic_elevage a::before {
  background-image: url("img/sia2018/home/secteur-picto-elevage.svg"); }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item.topic_produits a::before {
  background-image: url("img/sia2018/home/secteur-picto-produits.svg"); }

div#zone2 div.votre-univers .main-title-with-link h2.main-title {
  background: none; }

div#zone2 div.votre-univers .main-title-with-link h2.main-title span {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 4px 20px; }

div#zone2 div.votre-univers .main-title-with-link h2.main-title span.titrevotreunivers {
  top: -31px;
  background: #205ad7;
  color: white;
  font-size: 22px;
  width: 210px;
  padding: 12px 10px; }

div#zone2 div.votre-univers .main-title-with-link h2.main-title span.soustitrevotreunivers {
  background: white;
  font-family: "sofiapro-light", arial, sans-serif;
  color: #293a4d;
  font-size: 32px;
  margin-top: -40px;
  width: 500px;
  display: none; }

div#zone2 div.votre-univers .cxp-pagination {
  padding-top: 100px; }

div#zone2 div.votre-univers .list-grids-with-pagin {
  width: 800px;
  margin: 0 auto; }

div#zone2 div.votre-univers .list-grids-with-pagin article {
  width: 375px;
  height: 88px; }

div#zone2 div.votre-univers .list-grids-with-pagin article h2 {
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 23px;
  color: #293a4d;
  margin: 0;
  padding: 0;
  z-index: 2; }

div#zone2 div.votre-univers .list-grids-with-pagin .gla-item a:hover h2 {
  color: white; }

div#zone2 div.votre-univers .list-grids-with-pagin article img {
  width: 90px;
  height: 90px; }

div#zone2 div.votre-univers .list-grids-with-pagin article .gla-item-content {
  text-align: left;
  margin: 0;
  padding: 0;
  width: calc(100% - 88px);
  vertical-align: top;
  height: 88px;
  min-height: 88px;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-left: 19px; }

div#zone2 div.votre-univers .gla-item > a:hover .gla-item-content {
  background: white; }

div#zone2 div.votre-univers .gla-item-btn {
  display: none; }

/* infos pratiques */
div#zone2 div.infos-pratiques {
  text-align: center;
  padding-bottom: 30px; }

div#zone2 div.infos-pratiques .block-title {
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 0;
  letter-spacing: 0;
  display: inline-block;
  padding: 4px 20px;
  background: #215AD6;
  color: white;
  font-size: 21px;
  margin-top: 0;
  margin-bottom: -20px;
  max-width: 90%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  line-height: 26px;
  padding: 15px 10px;
  font-weight: normal; }

div#zone2 div.infos-pratiques ul.ql-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-width: 100%;
  margin: -20px auto 0;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-right: 0; }

div#zone2 div.infos-pratiques ul.ql-list li {
  display: inline-block;
  height: auto;
  width: 45%;
  background: white;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.2);
  margin: 0 1.5% 10px;
  position: relative; }

div#zone2 div.infos-pratiques ul.ql-list li::after {
  background-color: #215AD6;
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  pointer-events: none;
  -webkit-transition: height 0.25s ease;
  -o-transition: height 0.25s ease;
  transition: height 0.25s ease;
  z-index: 1; }

div#zone2 div.infos-pratiques ul.ql-list li:hover::after {
  height: 100%; }

div#zone2 div.infos-pratiques ul.ql-list li a.btn-primary {
  font-size: 13px;
  background-color: white;
  color: #293a4d;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0;
  text-align: left;
  height: 70px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 50px;
  padding-right: 10px;
  background-size: 25px !important;
  background-position: 16px center !important;
  z-index: 1;
  position: relative;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

div#zone2 div.infos-pratiques ul.ql-list li a.btn-primary i {
  display: none; }

div#zone2 div.infos-pratiques ul.ql-list li.linkid310619 a {
  background: url("img/sia2018/exposant/picto-plan.svg") no-repeat 20px center transparent; }

div#zone2 div.infos-pratiques ul.ql-list li.linkid310619:hover a {
  color: white;
  background: url("img/sia2018/exposant/picto-plan-blanc.svg") no-repeat 20px center transparent; }

div#zone2 div.infos-pratiques ul.ql-list li.linkid310620 a {
  background: url("img/sia2018/exposant/picto-plaquette.svg") no-repeat 20px center transparent; }

div#zone2 div.infos-pratiques ul.ql-list li.linkid310620:hover a {
  color: white;
  background: url("img/sia2018/exposant/picto-plaquette-blanc.svg") no-repeat 20px center transparent; }

div#zone2 div.infos-pratiques ul.ql-list li.linkid310622 a {
  background: url("img/sia2018/exposant/picto-guide.svg") no-repeat 15px center transparent; }

div#zone2 div.infos-pratiques ul.ql-list li.linkid310622:hover a {
  color: white;
  background: url("img/sia2018/exposant/picto-guide-blanc.svg") no-repeat 15px center transparent; }

div#zone2 div.infos-pratiques ul.ql-list li.linkid310623 a {
  background: url("img/sia2018/exposant/picto-checklist.svg") no-repeat 22px center transparent; }

div#zone2 div.infos-pratiques ul.ql-list li.linkid310623:hover a {
  color: white;
  background: url("img/sia2018/exposant/picto-checklist-blanc.svg") no-repeat 22px center transparent; }

div#zone2 div#bloc-expo-catalogue {
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 0;
  margin-top: 0; }

div#zone2 .serenite + div#bloc-expo-catalogue {
  margin-top: -301px;
  z-index: 1;
  position: relative; }

.catalogue .site-banner .inside,
.catalogue .header-navigation .inside,
.catalogue .site-footer .inside {
  padding: 0; }

div#zone2 div#bloc-expo-catalogue .catalogue {
  background: #205ad7;
  color: white;
  width: 248px;
  height: 207px;
  text-align: center;
  display: -webkit-inline-box;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.2); }

div#zone2 div#bloc-expo-catalogue h2 {
  font-size: 44px;
  color: white;
  line-height: 45px;
  margin-bottom: 5px; }

div#zone2 div#bloc-expo-catalogue h2 span {
  font-size: 24px;
  line-height: 28px;
  display: block; }

div#zone2 div#bloc-expo-catalogue a {
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  background: url(img/sia2018/home/arrow-bt-bleu.svg) no-repeat right 20px center white;
  background-size: 24px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 10px 53px 10px 20px;
  border-radius: 50px;
  color: #215AD6;
  font-size: 16px;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease; }

div#zone2 div#bloc-expo-catalogue a:hover {
  -webkit-transform: scale(1.03);
  -ms-transform: scale(1.03);
  transform: scale(1.03); }

/* dates clés */
div#dates-cles {
  text-align: center;
  border-top: 1px dashed #d8d8da;
  margin-top: 93px;
  padding-bottom: 25px; }

div#dates-cles .sia-btn {
  margin-top: 10px;
  margin-bottom: 0px; }

div#dates-cles h2 {
  background: #215AD6;
  color: white;
  display: inline-block;
  padding: 4px 20px;
  font-size: 30px;
  margin-top: 0px;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  margin-bottom: 10px; }

div#dates-cles .wrapper-dates {
  background: url("img/sia2018/exposant/sep-trait.png") no-repeat center 70px;
  background-image: none;
  max-width: 90%;
  margin: 0 auto; }

div#dates-cles .bloc-content {
  background: url("img/sia2018/exposant/puces.svg") no-repeat center center;
  max-width: 1200px;
  margin: 0 auto 25px;
  background-image: none; }

body.espace-exposants div#communaute .bloc-communaute p {
  margin-top: 5px; }

body.espace-exposants div#dates-cles .bloc-content {
  margin: 0 auto 40px; }

div#dates-cles .content-left,
div#dates-cles .content-right {
  display: inline-block;
  vertical-align: middle;
  width: 45%;
  text-align: left;
  padding-left: 80px; }

div#dates-cles .content-left {
  text-align: right;
  padding-right: 80px;
  padding-left: 0; }

div#dates-cles .bloc-content h3 {
  color: #215AD6;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0;
  margin: 0 0 0 0;
  padding: 0;
  font-size: 26px;
  line-height: 28px;
  font-weight: normal;
  text-align: left; }

body.espace-exposants div#dates-cles .bloc-content h3 {
  margin: 3px 0 0 0; }

body.espace-exposants div#dates-cles .bloc-content h4 {
  margin: 0 0 0 0;
  font-size: 28px;
  letter-spacing: 0;
  text-align: left;
  line-height: 31px;
  font-weight: normal; }

div#dates-cles .bloc-content h4 {
  color: #293a4d;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0;
  margin: 0;
  padding: 0;
  font-size: 24px;
  line-height: 1.2em; }

div#dates-cles .content-txt {
  text-align: left; }

div#dates-cles .bloc-content p {
  margin: 0;
  padding: 0;
  font-size: 14px;
  line-height: 22px; }

div#dates-cles p.picto {
  text-align: center;
  width: 100px;
  -ms-flex-preferred-size: 100px;
  flex-basis: 100px;
  min-width: 100px;
  height: 100px;
  background: white;
  display: inline-block;
  line-height: 100px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  margin-right: 15px; }

div#dates-cles p.picto img {
  width: 75px; }

div#dates-cles .content-title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-bottom: 15px; }

/* communauté bloc seul */
div#communaute.communaute-alone {
  background: url("img/sia2018/home/bg-texture.png") 0 0;
  margin-top: 60px;
  padding: 0; }

div#communaute.communaute-alone .bloc-communaute {
  float: none;
  width: 90%;
  min-height: 360px;
  text-align: center;
  vertical-align: top;
  margin: 0 auto;
  border: 0 none; }

div#communaute.communaute-alone .bloc-communaute h2 {
  color: #3059b3; }

/* PAGE VISITEURS PRO --------------------------------------------------------- */
/* edito */
body.visiteur-pro .mn-item-lvl-2 .mn-link.mn-link.is-active,
body.visiteur-pro .article-wrapper .article-content h2,
body.visiteur-pro .breadcrumb-nav .bn-item-link:active,
body.visiteur-pro .breadcrumb-nav .bn-item-link:focus,
body.visiteur-pro .breadcrumb-nav .bn-item-link:hover,
body.visiteur-pro .article-wrapper .article-content a,
body.visiteur-pro nav.main-navigation .mn-menu-submenu a.mn-link:hover .mn-link-text {
  color: #4b2980; }

body.visiteur-pro .article-wrapper .at-content h1,
body.visiteur-pro .gla-btn-read-more,
body.visiteur-pro .gla-btn-read-more:active,
body.visiteur-pro .gla-btn-read-more:focus,
body.visiteur-pro .gla-btn-read-more:hover,
body.visiteur-pro div#zone2 .main-title-with-link > .main-title,
body.visiteur-pro .article-wrapper .article-content ul li::before,
body.visiteur-pro nav.main-navigation .mn-menu-submenu a.mn-link::before {
  background-color: #4b2980; }

body.visiteur-pro .article-wrapper .article-content a:active,
body.visiteur-pro .article-wrapper .article-content a:focus,
body.visiteur-pro .article-wrapper .article-content a:hover {
  color: #160517; }

body.visiteur-pro div#bandeau-header #rings-animaux {
  background-color: #4b2980;
  background-size: 34px auto;
  -webkit-transition: background-color 0.2s ease;
  -o-transition: background-color 0.2s ease;
  transition: background-color 0.2s ease; }

body.visiteur-pro div#bandeau-header #rings-animaux:hover {
  background-color: white;
  background-image: url(img/sia2018/general/header-picto-tv-violet.svg);
  background-size: 34px auto; }

body.visiteur-pro div#zone1 .edito {
  background: url("img/sia2018/home/bg-texture.png") 0 0;
  padding: 70px 0 80px;
  text-align: center;
  border-bottom: 1px dashed #d8d8da;
  margin-top: -36px !important; }

body.visiteur-pro div#zone1 .edito h2 {
  color: #4b2980;
  background: none;
  font-size: 40px;
  letter-spacing: 0;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  border: 0;
  padding: 0;
  margin: 0 0 25px 0;
  line-height: 1em;
  width: 100%;
  min-width: 100%;
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%; }

body.visiteur-pro div#zone1 .edito p {
  margin: 0;
  font-size: 14px;
  text-align: left;
  width: 100%;
  display: block; }

body.visiteur-pro div#zone1 .edito p.style1 {
  text-align: left;
  /*font-family: "sofiapro-light", arial, sans-serif;*/
  font-family: "akrobat-regular", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 20px; }

body.visiteur-pro div#zone1 .edito p.style2 {
  font-size: 18px;
  line-height: 25px; }

body.visiteur-pro div#zone1 .edito figure {
  width: 100%;
  margin-left: auto;
  text-align: center;
  margin-top: 24px; }

body.visiteur-pro div#zone1 .edito figure img {
  width: 232px; }

body.visiteur-pro .edito-visiteur .inside {
  /* display: -webkit-box;
   display: -ms-flexbox;
   display: flex;
   -ms-flex-wrap: wrap;
   flex-wrap: wrap;
   -webkit-box-pack: justify;
   -ms-flex-pack: justify;
   justify-content: space-between;
   flex-direction: column;*/
  display: block; }

body.visiteur-pro .contenus-dedies .inside {
  position: relative; }

div#zone2 div.contenus-dedies {
  margin-top: 65px;
  position: relative;
  padding-top: 0; }

div#zone2 div.contenus-dedies .list-grids-with-pagin .gla-item a {
  height: auto; }

div#zone2 div.contenus-dedies .main-title-with-link h2.main-title {
  background: none;
  margin-top: -15px; }

div#zone2 div.contenus-dedies .main-title-with-link h2.main-title span {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 10px 22px; }

div#zone2 div.contenus-dedies .main-title-with-link h2.main-title span.titrecequivousattend {
  top: -92px;
  background: #4b2980;
  color: white;
  display: inline-block;
  position: relative;
  font-size: 32px; }

div#zone2 div.contenus-dedies .main-title-with-link h2.main-title span.soustitrecequivousattends {
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  background: white;
  color: #293a4d;
  font-size: 32px;
  margin-top: -75px;
  max-width: 480px;
  line-height: 36px;
  padding: 13px 23px;
  display: none; }

div#zone2 div.contenus-dedies .cxp-pagination {
  padding-top: 135px; }

div#zone2 div.contenus-dedies .grid-la-list {
  width: 100%; }

div#zone2 div.contenus-dedies [class*="grid-"] {
  display: inline-block;
  text-align: center; }

div#zone2 div.contenus-dedies article {
  width: 345px;
  display: inline-block; }

div#zone2 div.contenus-dedies article .gla-item-btn {
  display: none; }

.visiteur-pro div#zone2 div.contenus-dedies article {
  width: 29%;
  display: inline-block;
  margin-right: 4%;
  -webkit-box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

.visiteur-pro div#zone2 div.contenus-dedies article:last-child {
  margin-right: 0; }

.visiteur-pro div#zone2 div.contenus-dedies article:hover {
  -webkit-box-shadow: 0 30px 25px -13px rgba(0, 0, 0, 0.1);
  box-shadow: 0 30px 25px -13px rgba(0, 0, 0, 0.1);
  -webkit-transform: translateY(-7px);
  -ms-transform: translateY(-7px);
  transform: translateY(-7px); }

.visiteur-pro div#zone2 div.contenus-dedies article a .gla-item-title {
  color: #293a4d; }

.visiteur-pro div#zone2 div.contenus-dedies article:hover a .gla-item-title {
  color: #293a4d; }

div#zone2 div.titre-serenite {
  text-align: center;
  margin-top: 20px; }

div#zone2 div.titre-serenite h2 {
  display: inline-block;
  padding: 11px 30px 10px;
  background: #4b2980;
  color: white;
  font-size: 32px;
  margin-bottom: 22px;
  max-width: 90%;
  line-height: 36px; }

div#zone2 div.titre-serenite h3 {
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0;
  display: inline-block;
  padding: 7px 28px 6px;
  background: white;
  color: #293a4d;
  font-size: 32px;
  font-weight: normal;
  display: none; }

div#zone2 div.serenite {
  padding-top: 155px;
  background: url("img/sia2018/home/bg-texture.png") 0 0;
  border-top: 1px dashed #d8d8da;
  margin-top: -157px;
  padding-bottom: 350px; }

div#zone2 div.serenite ul.ql-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  max-width: 100%;
  margin: 0 auto;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-right: 0; }

div#zone2 div.serenite ul.ql-list li {
  display: inline-block;
  height: auto;
  width: 45%;
  background: white;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.2);
  margin: 0 1.5% 10px;
  position: relative; }

div.contenus-dedies .swiper-wrapper {
  padding-bottom: 60px; }

div#zone2 div.serenite ul.ql-list li::after {
  background-color: #4b2980;
  content: "";
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  pointer-events: none;
  -webkit-transition: height 0.25s ease;
  -o-transition: height 0.25s ease;
  transition: height 0.25s ease; }

div#zone2 div.serenite ul.ql-list li:hover::after {
  height: 100%; }

div#zone2 div.serenite ul.ql-list li a.btn-primary {
  font-size: 13px;
  background-color: white;
  color: #293a4d;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0;
  text-align: left;
  height: 70px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-left: 50px;
  padding-right: 10px;
  background-size: 25px !important;
  background-position: 16px center !important;
  z-index: 1;
  position: relative;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

div#zone2 div.serenite ul.ql-list li a.btn-primary i {
  display: none; }

div#zone2 div.serenite ul.ql-list li.linkid309369 a {
  background: url("img/sia2018/visiteur-pro/picto-badge.svg") no-repeat 20px center transparent;
  background-size: 31px !important;
  background-position: 11px center !important; }

div#zone2 div.serenite ul.ql-list li.linkid309369 a:hover {
  color: white;
  background: url("img/sia2018/visiteur-pro/picto-badge-blanc.svg") no-repeat 20px center transparent; }

div#zone2 div.serenite ul.ql-list li.linkid309372 a {
  background: url("img/sia2018/visiteur-pro/picto-calendrier.svg") no-repeat 24px center transparent; }

div#zone2 div.serenite ul.ql-list li.linkid309372 a:hover {
  color: white;
  background: url("img/sia2018/visiteur-pro/picto-calendrier-blanc.svg") no-repeat 24px center transparent; }

div#zone2 div.serenite ul.ql-list li.linkid309373 a {
  background: url("img/sia2018/visiteur-pro/picto-visa.svg") no-repeat 26px center transparent; }

div#zone2 div.serenite ul.ql-list li.linkid309373 a:hover {
  color: white;
  background: url("img/sia2018/visiteur-pro/picto-visa-blanc.svg") no-repeat 26px center transparent; }

div#zone2 div.serenite ul.ql-list li.linkid309374 a {
  background: url("img/sia2018/visiteur-pro/picto-transport.svg") no-repeat 25px center transparent; }

div#zone2 div.serenite ul.ql-list li.linkid309374 a:hover {
  color: white;
  background: url("img/sia2018/visiteur-pro/picto-transport-blanc.svg") no-repeat 25px center transparent; }

div#zone2 div#bloc-expo-catalogue.pro .catalogue {
  background: #4b2980; }

div#zone2 div#bloc-expo-catalogue.pro a {
  background: url(img/sia2018/home/arrow-bt-violet.svg) no-repeat right 20px center white;
  color: #4b2980;
  background-size: 24px auto; }

/* parcours simplifié */
div#dates-cles.visiteur h2 {
  background: white;
  color: #293a4d;
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  font-size: 25px;
  margin-bottom: -10px;
  padding: 13px 12px;
  max-width: 90%;
  line-height: 30px; }

div#dates-cles.visiteur .bloc-content {
  background: url("img/sia2018/visiteur-pro/puces.svg") no-repeat center center;
  background-image: none; }

div#dates-cles.visiteur .bloc-content h3 {
  color: #293a4d; }

div#dates-cles.visiteur .bloc-content h3 span {
  color: #4b2980; }

/* communauté */
div#communaute.communaute-alone.visiteur .bloc-communaute h2 {
  color: #4b2980; }

body.espace-exposants div#communaute.communaute-alone.visiteur .bloc-communaute h2 {
  color: #215AD6; }

div#communaute.communaute-alone.visiteur {
  margin-top: 0;
  margin-bottom: -81px; }

.visiteur div#communaute .bloc-sociaux {
  border-right: 0 none; }

.visiteur div#communaute .communaute-wrapper {
  margin-bottom: -80px; }

/* ARTICLE TOPICS --------------------------------------------------------- */
.grid-la-list article[class*="topic_"] .gla-item-content {
  display: inline-block;
  vertical-align: middle;
  width: 100%;
  font-size: 16px;
  padding: 0px 40px 35px; }

.grid-la-list article[class*="topic_"] .gla-item-title {
  font-weight: normal;
  font-size: 1.5em;
  padding-top: 80px;
  margin-top: -30px;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 25px;
  padding-top: 78px;
  margin-top: -33px; }

div#zone2 [class*="topic_"] > a .gla-item-title {
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

.grid-la-list article.topic_genetique .gla-item-title {
  background: url("img/sia2018/home/picto-titre-genetique.svg") no-repeat center 0; }

.grid-la-list article.topic_professionnels .gla-item-title {
  background: url("img/sia2018/home/picto-titre-pro.svg") no-repeat center 0; }

.grid-la-list article.topic_accueil .gla-item-title {
  background: url("img/sia2018/home/picto-titre-accueil.svg") no-repeat center 0; }

.grid-la-list article.topic_conferences .gla-item-title {
  background: url("img/sia2018/home/picto-titre-conferences.svg") no-repeat center 0; }

/* SLIDER --------------------------------------------------------- */
div.slider-wrapper {
  position: relative;
  height: 230px;
  margin-top: 0; }

div.slider-wrapper .fixed-content {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 2;
  text-align: center;
  pointer-events: none;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding-top: 0; }

div.slider-wrapper .fixed-content h2 br {
  display: none; }

div.slider-wrapper .fixed-content h2 {
  color: white;
  font-size: 24px;
  line-height: 33px;
  max-width: 75%;
  margin: -25px 0 15px 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3); }

div#slider-exposant.slider-wrapper {
  height: 345px; }

div#slider-exposant.slider-wrapper .fixed-content h2 {
  max-width: 85%; }

div.slider-wrapper .fixed-content a {
  background-image: url(img/sia2018/home/arrow-bt-blanc-right.svg);
  background-color: #4b2980;
  background-repeat: no-repeat;
  background-position: right 25px center;
  background-size: 26px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 13px 60px 13px 30px;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  pointer-events: all;
  display: none; }

div.slider-wrapper .fixed-content a:hover {
  color: #4b2980;
  background-color: white;
  background-image: url(img/sia2018/home/arrow-bt-violet.svg); }

div.slider-wrapper .slider div {
  min-height: 540px; }

div.slider-wrapper .bx-wrapper {
  padding: 0;
  border: 0; }

div.slider-wrapper .bx-wrapper .bx-pager {
  padding: 0;
  bottom: 20px;
  z-index: 5; }

div.slider-wrapper .bx-wrapper .bx-pager.bx-default-pager a {
  background: white; }

div.slider-wrapper .bx-wrapper .bx-pager.bx-default-pager a.active {
  background: #4b2980; }

/* slider exposant */
div#slider-exposant.slider-wrapper .fixed-content a {
  background-color: #215AD6; }

div#slider-exposant.slider-wrapper .fixed-content a:hover {
  background-color: white;
  color: #215AD6;
  background-image: url(img/sia2018/home/arrow-bt-bleu.svg); }

div#slider-exposant.slider-wrapper .bx-wrapper .bx-pager.bx-default-pager a.active {
  background: #1f5bd7; }

/* PAGE ALL IN ONE */
.article-wrapper {
  background: #f7f7f7; }

.article-wrapper,
.article-wrapper p {
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  font-size: 18px;
  color: #293a4d;
  line-height: 28px; }

.article-wrapper .article-title {
  background: url("img/sia2018/home/bg-texture.png") 0 0;
  padding-bottom: 35px;
  margin-bottom: 0px; }

.article-wrapper .article-title .inside {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column; }

.article-wrapper .article-title .inside img {
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1; }

.article-wrapper .article-title .inside .at-content {
  -webkit-box-ordinal-group: 1;
  -ms-flex-order: 0;
  order: 0; }

.article-wrapper .at-content {
  text-align: center;
  margin-bottom: 25px; }

.article-wrapper img.at-illust {
  width: 100%;
  max-width: 800px;
  height: auto; }

.partner .pl-item-group {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  border-right: 1px solid #e1e1e1;
  border-top: 1px solid #e1e1e1;
  max-width: 940px;
  margin: 0 auto; }

.partner .pl-item-content {
  text-align: left;
  width: 100%;
  display: inline-block; }

.partner .pl-item {
  padding: 30px 30px 5px;
  border-left: 1px solid #e6e6e6;
  width: 100%;
  margin-bottom: 50px;
  text-align: left;
  border-bottom: 1px solid #e6e6e6;
  background-color: white;
  text-align: center; }

.partner .pl-item-read-more {
  text-align: center;
  margin-top: 10px; }

.partner .pl-item-read-more a {
  -webkit-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  font-family: 'akrobat-bold';
  display: inline-block;
  padding: 11px 22px 13px;
  line-height: normal;
  margin-top: 5px;
  margin-bottom: 30px;
  text-transform: none;
  color: white;
  background: #83b81a;
  border: 0;
  font-size: 14px;
  border-radius: 50px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2); }

.partner .pl-item-read-more a:hover {
  background-color: white;
  color: #83b81a; }

.partner .pl-item-illust {
  width: 100%;
  max-width: 270px;
  margin: 0 auto 15px;
  border: 1px solid #dcdcdc;
  padding: 30px; }

.partner .partner-list .inside {
  text-align: center; }

body.sitemap h1,
.partner h1,
.article-wrapper .at-content h1 {
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 32px;
  letter-spacing: 0;
  text-align: center;
  background: #83b81a;
  color: white;
  padding: 12px 20px;
  display: inline-block;
  line-height: 32px;
  margin-top: -26px;
  max-width: 90%; }

.partner .pl-item-title {
  margin-bottom: 0;
  font-size: 24px;
  font-family: "sofiapro-bold";
  margin-top: 10px !important; }

.at-illust + .at-content > .at-theme {
  padding-top: 20px;
  position: static;
  display: block;
  text-align: center;
  background: none;
  margin: 0;
  font-weight: 100;
  font-size: 12px;
  color: #b3b4b6;
  text-transform: none;
  display: none; }

.article-wrapper .article-intro p strong {
  font-family: "sofiapro-bold", arial, sans-serif;
  font-weight: normal; }

.article-wrapper .article-intro,
.article-wrapper .article-content {
  width: 90%;
  margin: 0 auto;
  z-index: 1;
  position: relative;
  line-height: 26px; }

body.article .article-content iframe {
  max-width: 100%;
  height: auto;
  margin-top: 15px;
  margin-bottom: 10px; }

.article-wrapper .article-intro {
  max-width: 90%;
  margin: -50px auto 30px;
  position: relative;
  z-index: 1;
  text-align: center; }

.article-wrapper .article-intro p {
  background-color: white;
  font-family: "sofiapro-light", arial, sans-serif;
  font-size: 19px;
  font-weight: normal;
  text-align: center;
  display: inline-block;
  padding: 8px 24px;
  line-height: 25px;
  margin-top: -20px; }

.article-wrapper .article-content h2,
.article-wrapper .article-content h2 strong {
  color: #83b81a;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  display: block;
  font-size: 32px;
  line-height: 32px;
  margin: 35px 0 15px; }

.article-wrapper .article-content h3,
.article-wrapper .article-content h3 strong {
  color: #293a4d;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  font-size: 28px;
  line-height: 33px;
  margin: 25px 0 15px; }

.article-wrapper .article-content h4 {
  color: #293a4d;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  text-decoration: underline;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  font-size: 20px;
  margin: 35px 0 15px; }

.article-wrapper .article-content h5 {
  color: #293a4d;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  font-size: 20px;
  margin: 35px 0 20px; }

.article-wrapper .article-content p {
  text-align: left; }

.article-wrapper .article-content a {
  color: #82b927;
  text-decoration: underline; }

.article-wrapper .article-content a:active,
.article-wrapper .article-content a:focus,
.article-wrapper .article-content a:hover {
  color: #39520f; }

.article-wrapper .article-content a.lien1 {
  background-image: url(img/sia2018/home/arrow-bt-blanc-right.svg);
  background-color: #83b81a;
  background-repeat: no-repeat;
  background-position: right 22px center;
  background-size: 26px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 12px 55px 12px 25px;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: relative;
  margin-top: 8px;
  margin-bottom: 15px; }

.article-wrapper .article-content a.lien1:hover {
  color: #83b81a;
  background-color: white;
  background-image: url(img/sia2018/home/arrow-bt-vert-right.svg); }

.article-wrapper .article-content .focus1 .externe {
  color: #83b81a;
  text-decoration: none;
  display: inline-block;
  padding: 10px 25px;
  border: 1px solid #83b81a;
  border-radius: 40px;
  font-size: 14px;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  margin-bottom: 10px; }

.article-wrapper .article-content .focus1 .externe:hover {
  background-color: white;
  border-color: white; }

.article-wrapper .article-content a.lien2 {
  color: #293a4d;
  text-decoration: none;
  display: inline-block;
  padding: 10px 25px;
  border: 1px solid #DDDDDD;
  border-radius: 40px;
  font-size: 14px;
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  margin-bottom: 10px; }

.article-wrapper .article-content a.lien2:hover {
  background-color: white;
  border-color: white; }

.article-wrapper .article-content .focus2 a.externe {
  margin-bottom: 25px;
  display: block; }

body.visiteur-pro .article-wrapper .article-content .focus1 .externe:hover,
body.espace-exposants .article-wrapper .article-content .focus1 .externe:hover,
.article-wrapper .article-content .focus1 .externe:hover {
  background-color: white;
  border-color: white; }

body.visiteur-pro .article-wrapper .article-content .focus1 .externe {
  color: #4b2980;
  border: 1px solid #4b2980; }

body.espace-exposants .article-wrapper .article-content .focus1 .externe {
  color: #215AD6;
  border: 1px solid #215AD6; }

.article-wrapper .article-content .focus1 a.lien1.externe {
  padding: 10px 60px 10px 25px;
  margin-top: 10px;
  color: white; }

.article-wrapper .article-content .focus1 a.lien1.externe:focus,
.article-wrapper .article-content .focus1 a.lien1.externe:active,
.article-wrapper .article-content .focus1 a.lien1.externe:hover {
  color: #83b81a; }

body.visiteur-pro .article-wrapper .article-content .focus1 a.lien1.externe,
body.espace-exposants .article-wrapper .article-content .focus1 a.lien1.externe {
  color: white; }

body.visiteur-pro .article-wrapper .article-content .focus1 a.lien1.externe:hover {
  color: #4b2980; }

body.espace-exposants .article-wrapper .article-content .focus1 a.lien1.externe:hover {
  color: #215AD6; }

body.espace-exposants .article-wrapper .article-content .focus1 a.lien1.externe:focus,
body.espace-exposants .article-wrapper .article-content .focus1 a.lien1.externe:active,
body.espace-exposants .article-wrapper .article-content .focus1 a.lien1.externe:hover {
  color: #215AD6; }

body.visiteur-pro .article-wrapper .article-content .focus1 a.lien1.externe:focus,
body.visiteur-pro .article-wrapper .article-content .focus1 a.lien1.externe:active,
body.visiteur-pro .article-wrapper .article-content .focus1 a.lien1.externe:hover {
  color: #4b2980; }

body.espace-exposants .article-wrapper .article-content a.lien1:hover {
  background-image: url(img/sia2018/home/arrow-bt-bleu.svg);
  background-color: white;
  color: #215AD6; }

body.visiteur-pro .article-wrapper .article-content a.lien1:hover {
  background-image: url(img/sia2018/home/arrow-bt-violet.svg);
  background-color: white;
  color: #4b2980; }

body.visiteur-pro .article-wrapper .article-content a.lien1 {
  background-color: #4b2980;
  color: white; }

body.espace-exposants .article-wrapper .article-content a.lien1 {
  background-color: #215AD6;
  color: white; }

.article-wrapper .article-content a.lien4 {
  background-color: white;
  color: #293a4d;
  display: inline-block;
  text-decoration: none;
  padding: 18px 22px;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease;
  margin-bottom: 10px; }

.article-wrapper .article-content a.lien4::before {
  content: "\e90e";
  font-family: 'iconsia';
  display: inline-block;
  font-size: 26px;
  margin-right: 10px;
  vertical-align: bottom; }

.article-wrapper .article-content .style3 a.lien4::before {
  content: "";
  width: 26px;
  height: 26px;
  background-image: url(img/sia2018/general/icon-zip.svg);
  background-size: 26px auto;
  margin-right: 6px; }

.article-wrapper .article-content a.lien4:hover {
  -webkit-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  transform: translateY(-3px);
  -webkit-box-shadow: 0 21px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 21px 25px -15px rgba(0, 0, 0, 0.1); }

.article-wrapper .article-content .important1 {
  background: #83b81a;
  color: white;
  display: inline-block;
  padding: 12px;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  margin-top: 20px;
  font-size: 15px; }

.article-wrapper .article-content .important1.txtcenter {
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  left: 50%;
  position: relative; }

.article-content blockquote {
  margin: 2em;
  padding: 2em 3em;
  background: none;
  border: 1px solid #e3e3e3;
  width: 70%;
  margin: 30px auto 45px;
  padding: 25px 35px 15px;
  font-style: italic;
  font-size: 18px;
  width: 100%; }

.article-wrapper .article-content blockquote .important1 {
  text-align: right;
  color: #929292;
  font-style: normal;
  font-size: 14px;
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  padding: 0;
  margin: 15px 0 0 0;
  background-color: transparent !important;
  display: block; }

body.espace-exposants .article-wrapper .article-content .important1 {
  background: #215AD6; }

body.visiteur-pro .article-wrapper .article-content .important1 {
  background: #4b2980; }

.article-wrapper .article-content blockquote i {
  display: none; }

.article-wrapper .article-content blockquote p {
  border: 0;
  padding-left: 0; }

.article-wrapper .article-content figure {
  border: 0;
  margin-top: 0;
  padding: 0;
  max-width: 100%;
  margin-bottom: 25px; }

.article-content figcaption strong {
  text-align: center;
  margin-top: 10px; }

.article-wrapper .article-content figure small {
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  font-style: italic;
  color: #939393;
  text-align: center;
  display: block; }

.article-wrapper .article-content figcaption p {
  text-align: center; }

.article-wrapper .article-content ul li {
  margin-bottom: 10px; }

.article-wrapper .article-content ul li ul {
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 10px; }

.article-wrapper .article-content ul li::before {
  border-radius: 20px;
  background-color: #83b81a;
  height: 7px;
  width: 7px; }

.article-wrapper .article-content ul li ul li::before {
  background-color: transparent;
  border: 1px solid #9a9a9a;
  margin-left: -20px;
  height: 6px;
  width: 6px; }

/* team */
.article-wrapper .cl-item {
  display: block;
  margin: 30px auto;
  padding: 0 0 8px 0;
  width: 100%;
  -webkit-box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 18px 25px -15px rgba(0, 0, 0, 0.1);
  background: white;
  min-height: 86px; }

.article-wrapper .cl-item > * {
  padding: 0;
  margin: 0; }

.article-wrapper .cl-item .cl-item-illust {
  width: 85px; }

.article-wrapper .cl-item .cl-item-illust img {
  width: 85px;
  height: 85px; }

.article-wrapper .cl-item .cl-item-content {
  width: 290px; }

.article-wrapper .cl-item .cl-item-title.h3-like {
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 26px;
  color: #293a4d;
  font-weight: normal;
  padding: 10px 0 0 95px;
  margin: 20px 0 0; }

.article-wrapper .cl-item p.cl-item-subtitle {
  width: 100%;
  font-family: akrobat-regular;
  font-size: 14px;
  color: #293a4d;
  font-style: italic;
  text-transform: none;
  font-weight: normal;
  padding-bottom: 10px;
  border-bottom: 1px solid #ededed;
  margin-bottom: 10px;
  line-height: 20px;
  padding-left: 95px; }

.article-wrapper .cl-item-email {
  clear: both;
  margin-top: 13px; }

.article-wrapper .cl-item-phone {
  margin-top: 0; }

.article-wrapper .cl-item-email,
.article-wrapper .cl-item-phone {
  font-size: 12px;
  line-height: 22px;
  padding-left: 10px; }

.article-wrapper .cl-item-phone span:last-child {
  font-weight: bold; }

.article-wrapper .cl-item-content a {
  color: #9fbf5a;
  text-decoration: underline; }

.breadcrumb-nav {
  margin-bottom: 0;
  position: absolute;
  z-index: 1;
  width: 100%;
  text-align: center;
  top: 225px;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  display: none; }

header.site-banner.headroom--not-top + .wrapper .breadcrumb-nav {
  top: 195px; }

.catalogue.fiche .breadcrumb-nav {
  top: 134px; }

.breadcrumb-nav .bn-item-link {
  color: #939393;
  font-size: 12px; }

.breadcrumb-nav .bn-item-link:active,
.breadcrumb-nav .bn-item-link:focus,
.breadcrumb-nav .bn-item-link:hover {
  color: #83b81a; }

.breadcrumb-nav .bn-item .icon::before {
  color: #939393;
  content: "/"; }

/* Header pages internes */
[class^="btn"],
.btn {
  font-family: 'akrobat-bold', helvetica, arial, sans-serif; }

.block-page .inside {
  max-width: 1200px;
  margin: 0 auto;
  font-size: 0;
  width: 90%; }

body.search #main,
body.sitemap #main,
body.article #main,
body.partner #main,
body.article_list #main,
body.page-rubric.content329649 #main,
body.catalogue #main {
  position: relative;
  padding-top: 180px;
  margin-top: -54px; }

body.page-rubric.content329649 #main::before,
body.search #main::before,
body.sitemap #main::before,
body.partner #main::before,
body.article #main::before,
body.article_list #main::before {
  content: "";
  background-color: #80a1c0;
  background-image: url(img/sia2018/general/bg-nav-sia.jpg);
  background-size: 100%;
  background-position: top 0 center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  width: 100%;
  height: 180px;
  position: absolute;
  top: 0;
  left: 0; }

.catalogue #main h1 {
  margin-top: -30px; }

/* Catalogue */
body.catalogue {
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  color: #293a4d; }

.catalogue h1 {
  font-size: 32px;
  line-height: 32px;
  color: white;
  background-color: #83b81a;
  display: inline-block;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 12px 20px; }

.catalogue .wrapper, .catalogue .site-wrapper {
  padding: 0;
  z-index: 1;
  position: relative;
  margin-top: -32px; }

.catalogue div.edito {
  padding: 0 0 30px;
  text-align: center;
  background-image: url("img/sia2018/home/bg-texture.png"); }

.catalogue .esf-container {
  background-image: url("img/sia2018/home/bg-texture.png");
  padding-bottom: 5px; }

.catalogue .esf-intro-title {
  color: #83b81a;
  font-size: 32px;
  line-height: 37px;
  text-align: center;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

.mod-catal .esf-as-header .esf-as-title:focus:hover,
.mod-catal .esf-as-header .esf-as-title:focus {
  background-color: #83b81a;
  color: white;
  outline: none; }

.mod-catal .catal-results-nb {
  font-size: 12px;
  font-weight: normal;
  font-family: akrobat-bold; }

.mod-catal .esf-as-filters .catal-results-title {
  border: 0 none;
  margin: 0;
  padding: 10px 11px;
  font-size: 12px;
  background-color: #293a4d;
  color: white; }

.mod-catal .esf-as-list-filters a .esf-as-list-filters-next-lvl:after {
  border-radius: 50px;
  height: 24px;
  width: 25px;
  color: #293a4d;
  margin-top: -15px;
  padding-top: 3px; }

.mod-catal .esf-as-filters .esf-as-filters-group-title {
  border-bottom: 0 none; }

.mod-catal .esf-as-filters .esf-as-filters-title {
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  letter-spacing: 0;
  font-size: 22px; }

.mod-catal .esf-as-filters .m-btn-to-close {
  padding: 0;
  color: #83b81a;
  background: transparent;
  font-size: 15px;
  padding-top: 4px; }

.mod-catal .esf-as-header .esf-as-title:focus::before,
.mod-catal .esf-as-header .esf-as-title:focus::after {
  background-color: white; }

.mod-catal .esf-search-line #esf_simple_search {
  outline: none;
  font-size: 14px;
  padding: 10px 20px 10px;
  color: #293a4d;
  border-color: #dedede; }

.catalogue .esf-form-zone {
  max-width: 90%;
  margin: -20px auto 30px;
  margin-bottom: 40px;
  border: 0 none;
  padding: 27px 35px 37px;
  background-color: white;
  border-radius: 0;
  -webkit-box-shadow: 0 25px 40px -20px rgba(0, 0, 0, 0.2);
  box-shadow: 0 25px 40px -20px rgba(0, 0, 0, 0.2);
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; }

.mod-catal .esf-search-line .form-select + #esf_simple_search {
  margin: 0;
  border-radius: 0;
  border-right: 0 none;
  border-color: #dbdbdb;
  font-size: 15px;
  font-style: normal;
  padding-top: 10px; }

.mod-catal .esf-search-line .form-select + #esf_simple_search::-webkit-input-placeholder {
  color: #A5A5A5; }

.mod-catal .esf-search-line .form-select + #esf_simple_search:-ms-input-placeholder {
  color: #A5A5A5; }

.mod-catal .esf-search-line .form-select + #esf_simple_search::-ms-input-placeholder {
  color: #A5A5A5; }

.mod-catal .esf-search-line .form-select + #esf_simple_search::-moz-placeholder {
  color: #A5A5A5; }

.mod-catal .esf-search-line .form-select + #esf_simple_search::placeholder {
  color: #A5A5A5; }

.mod-catal .esf-search-line .form-select::before {
  height: 100%;
  top: 0;
  background-color: #dbdbdb; }

.mod-catal .esf-search-line .form-select select.is-small {
  font-size: 15px;
  cursor: pointer; }

.mod-catal .esf-search-line .form-select {
  border-radius: 50px 0 0 50px;
  height: 58px;
  line-height: 28px; }

.mod-catal .esf-search-line .form-select select {
  padding: .9em 2.5em .7em 1.5em; }

.mod-catal .form-select::after {
  content: '›';
  border: 0 none;
  font-size: 20px;
  width: 30px;
  height: 30px;
  text-align: center;
  right: 5px;
  top: 50%;
  position: absolute;
  display: block;
  margin-top: -15px;
  line-height: 30px;
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg); }

.esf-search-line .form-select::after {
  margin-top: -6px; }

.mod-catal .esf-as-header .esf-as-title:after,
.mod-catal .esf-as-header .esf-as-title:before {
  left: auto;
  right: 1.5rem;
  background-color: #83b81a;
  border-radius: 0;
  width: 17px;
  height: 3px; }

.mod-catal .esf-search-line #esf_simple_search::-webkit-input-placeholder {
  font-style: normal;
  color: #a5a5a5; }

.mod-catal .esf-search-line #esf_simple_search::-moz-placeholder {
  font-style: normal;
  color: #a5a5a5; }

.mod-catal .esf-search-line #esf_simple_search:-ms-input-placeholder {
  font-style: normal;
  color: #a5a5a5; }

.mod-catal .esf-search-line #esf_simple_search::-ms-input-placeholder {
  font-style: normal;
  color: #a5a5a5; }

.mod-catal .esf-search-line #esf_simple_search::placeholder {
  font-style: normal;
  color: #a5a5a5; }

.mod-catal .esf-as-header .esf-as-title {
  background: transparent;
  color: #293a4d;
  padding: 0 15px;
  letter-spacing: 0;
  font-weight: normal; }

.mod-catal .catal-ex-item-buttons, .mod-catal .catal-ex-item-buttons-small {
  border-left: 0;
  padding: 0;
  margin-top: 20px; }

.mod-catal .catal-ex-item-buttons .animation-txt, .mod-catal .catal-ex-item-buttons-small .animation-txt {
  position: relative !important;
  border: 0 !important;
  height: auto !important;
  width: 100% !important;
  padding: 0 !important;
  overflow: visible !important;
  clip: auto !important; }

.mod-catal .esf-search-line #esf-btn-search {
  border: 0 none;
  border-radius: 0;
  background-color: #83b81a;
  font-size: 14px;
  text-transform: none;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  padding: 0;
  width: 65px;
  border: 1px solid #83b81a; }

.mod-catal .esf-search-line #esf-btn-search:hover {
  background-color: white;
  color: #83b81a;
  border-color: #dbdbdb; }

.catalogue .esf-search-plus {
  display: none; }

.mod-catal .esf-as-header {
  width: 100%;
  background-color: #F8F8F8;
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #293a4d;
  outline: none;
  border: 1px solid #E2E2E2;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

.mod-catal .esf-as-header.is-closed {
  border-bottom: 1px solid #E2E2E2; }

.mod-catal .esf-as-header:hover {
  background-color: #83b81a;
  border-color: #83b81a;
  color: white; }

.mod-catal .esf-as-header:hover::after,
.mod-catal .esf-as-header:hover::before {
  background-color: white; }

.mod-catal .esf-as-list-filters {
  margin: 0;
  padding: 0;
  border-right: 0 none; }

.mod-catal .esf-as-filter-panel {
  margin-top: 0; }

.mod-catal .esf-as-header p {
  font-size: 20px;
  letter-spacing: 0;
  margin: 0 8px; }

.mod-catal .esf-as-header:after,
.mod-catal .esf-as-header:before {
  background: #83b81a;
  border-radius: 0;
  height: 3px;
  width: 18px;
  left: auto;
  right: 1.7rem; }

.mod-catal.exhibitor-search-form button:hover,
.mod-catal.exhibitor-search-form input[type="submit"]:hover,
.mod-catal.exhibitor-search-form button:focus,
.mod-catal.exhibitor-search-form input[type="submit"]:focus {
  background: #83b81a;
  color: white; }

.mod-catal .esf-as-header .esf-as-title:hover::after,
.mod-catal .esf-as-header .esf-as-title:focus::after,
.mod-catal .esf-as-header .esf-as-title:hover::before,
.mod-catal .esf-as-header .esf-as-title:focus::before {
  background-color: white; }

.mod-catal .esf-as-filters {
  border-top: 0 none;
  border-color: #E2E2E2;
  padding-top: 90px; }

.mod-catal.exhibitor-search-form .esf-remove-filters {
  width: 130px;
  margin-top: 10px;
  background-color: #eaeaea;
  color: #293a4d;
  font-weight: normal;
  font-size: 10px;
  margin-left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  margin-bottom: 2px; }

.mod-catal .esf-all-filters .icon-catal-cross {
  vertical-align: 0rem;
  color: #83b81a;
  font-size: 9px; }

.mod-catal .esf-as-activated-filters {
  background-color: #F8F8F8;
  padding: 12px 18px 14px 18px;
  margin: 0; }

.mod-catal .esf-as-af-text {
  opacity: .6;
  margin: 5px 10px 0 0;
  font-size: 12px;
  font-weight: normal; }

.mod-catal .esf-as-af-filters > span {
  border: 1px solid #EAEAEA;
  background-color: white;
  border-radius: 50px;
  color: #868686;
  padding-left: 14px;
  padding-right: 27px;
  padding-top: 5px; }

.mod-catal .esf-as-af-filters > span .esf-tag-filter-remove {
  background-color: transparent;
  padding: 0px 6px 0 0; }

.mod-catal .esf-as-af-filters .icon-catal-cross {
  color: #293a4d; }

.mod-catal .esf-as-af-filters > span .esf-tag-filter-remove:hover .icon-catal-cross {
  color: #83b81a; }

.mod-catal .esf-as-af-filters .icon-catal-cross::before {
  font-size: 8px;
  vertical-align: 0.1rem; }

.mod-catal .esf-as-list-filters .current a,
.mod-catal .esf-as-list-filters .current a:hover {
  background-color: #83b81a;
  color: white; }

.mod-catal .esf-sublvl-heading.esf-sublvl-heading {
  background-color: #293a4d; }

.mod-catal .esf-as-list-filters .current a .esf-as-list-filters-next-lvl:after {
  color: #293a4d;
  background: #ffffff;
  border-color: white; }

.mod-catal .esf-as-list-filters a {
  padding: 12px 19px;
  font-size: 14px;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  border-color: #ececec; }

.mod-catal .esf-as-list-filters a:hover {
  background-color: #e6e6e6;
  color: #293a4d; }

.mod-catal .current .esf-as-count,
.mod-catal .esf-as-count {
  opacity: .6;
  font-size: 12px;
  font-family: 'akrobat-regular', helvetica, arial, sans-serif; }

.mod-catal .esf-as-count {
  color: #293a4d; }

.mod-catal .esf-tree li:hover {
  background-color: #ececec; }

.mod-catal .esf-tree li + li {
  border: 0 none; }

.mod-catal .esf-as-heading {
  font-size: 14px;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  padding: 14px 18px; }

.mod-catal .esf-tree li label {
  text-transform: lowercase;
  display: inline-block;
  margin: 0; }

.mod-catal .esf-tree li label::first-letter {
  text-transform: none; }

.mod-catal .esf-tree li input {
  float: none;
  display: inline-block;
  margin: 0 5px 0 14px;
  vertical-align: 0.1rem; }

.mod-catal .esf-tree li .esf-choice-container {
  padding: 7px 4px; }

.mod-catal .esf-as-heading .esf-remove-filters {
  border-radius: 50px;
  color: #7f7f7f;
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  font-size: 10px;
  padding: 6px 10px;
  margin-top: 5px; }

.mod-catal .esf-as-heading .icon-catal-cross {
  color: #293a4d;
  font-size: 8px;
  margin-left: 6px;
  vertical-align: 0rem; }

.mod-catal .esf-sublvl-heading .esf-back-to-prev-lvl + label input {
  vertical-align: -1px; }

.mod-catal .esf-sublvl-heading .esf-back-to-prev-lvl {
  font-size: 11px;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  outline: none;
  padding: 10px 0px 12px 0;
  background-color: #293a4d; }

.catalogue .esf-sublvl-heading {
  border-bottom: 1px solid #E2E2E2; }

.mod-catal .esf-sublvl-heading .esf-back-to-prev-lvl .icon-catal-arrow-left {
  border-radius: 50px;
  color: #293a4d;
  border-color: #e2e2e2;
  width: 22px;
  height: 22px;
  display: inline-block;
  text-align: center;
  padding-top: 5px;
  font-size: 10px;
  margin-right: 8px;
  margin-left: 12px;
  font-size: 10px; }

.mod-catal .esf-sublvl-heading .esf-back-to-prev-lvl:hover .icon-catal-arrow-left {
  background-color: #83b81a;
  border-color: #83b81a;
  color: white; }

.mod-catal .displaying-lvl-1 .js-panel-right {
  top: 86px !important;
  background-color: white;
  min-height: 100%; }

.mod-catal .esf-sublvl-heading .esf-back-to-prev-lvl:hover .icon-catal-arrow-left::before {
  color: white; }

.mod-catal .esf-sublvl-heading .esf-back-to-prev-lvl .icon-catal-arrow-left::before {
  color: white;
  font-size: 12px; }

.mod-catal .esf-results-zone .esf-results-alpha-list .current {
  background: transparent;
  border-radius: 50px;
  /*border: 1px solid rgba(255,255,255,0.5);*/
  background-color: white;
  color: #83b81a;
  width: 29px;
  text-align: center; }

.mod-catal .esf-sublvl-heading.esf-sublvl-heading:hover {
  background-color: #293a4d; }

.mod-catal .displaying-lvl-2 .tree-lvl-2 > li,
.mod-catal .displaying-lvl-3 .tree-lvl-3 > li,
.mod-catal .displaying-lvl-4 .tree-lvl-4 > li,
.mod-catal .displaying-lvl-5 .tree-lvl-5 > li {
  margin: 0; }

.mod-catal .js-panel-right li {
  margin: 0; }

.mod-catal .js-panel-right li .esf-choice-container.form-item-checkbox {
  padding: 11px 10px 14px 10px; }

.mod-catal .esf-results-zone .esf-results-alpha-list .current[data-letter="all"] {
  width: 38px;
  font-size: 12px; }

.mod-catal .esf-tree .esf-has-sub-items > .esf-choice-container .esf-next-lvl::after {
  border-radius: 50px;
  color: #293a4d;
  line-height: 1.8;
  height: 22px;
  width: 22px;
  margin-top: -13px; }

#lnk_tree_activity .esf-choice-container .esf-next-lvl::after {
  height: 20px;
  width: 29px; }

.mod-catal .esf-tree .esf-has-sub-items > .esf-choice-container .esf-next-lvl:hover::after {
  background-color: #83b81a;
  border-color: #83b81a;
  color: white; }

.mod-catal .esf-results-zone {
  border-bottom: 0 none;
  background: #83b81a;
  max-width: 1200px;
  margin: 0 auto; }

.mod-catal .esf-results-zone .esf-results-alpha-list li {
  margin: 0 2px;
  font-family: akrobat-regular; }

.mod-catal .esf-results-zone .esf-results-alpha-filter {
  color: #B3D77D;
  padding: 24px 26px; }

.mod-catal .esf-results-zone .esf-results-alpha-filter a {
  color: white;
  padding: 0 3px 0 5px;
  vertical-align: middle; }

.mod-catal .esf-results-zone .esf-results-alpha-list {
  font-size: 0; }

.mod-catal.catal-ex-alone,
.site-wrapper.site-wrapper .mod-catal.catal-results {
  max-width: 1200px;
  margin: 35px auto 0; }

.mod-catal.catal-ex {
  margin: 0 auto;
  max-width: 90%; }

.site-wrapper.site-wrapper .mod-catal.catal-results + .catal-ex.mod-catal {
  max-width: 1200px;
  margin: 0 auto; }

.mod-catal .catal-results-selectboxes .form-item label,
.mod-catal .catal-results-selectboxes .form-item .form-select {
  border: 0 none; }

.mod-catal .catal-results-selectboxes .form-select select {
  padding: 0px 24px 0 12px;
  border: 1px solid #e8e8e8; }

.mod-catal.catal-results {
  width: 90%;
  margin: 20px auto 0px auto !important; }

.mod-catal .catal-ex-item-img {
  width: 100%;
  margin: 0 auto 15px; }

.mod-catal .catal-ex-item-img img {
  /* width: 296px;
height: 220px;*/ }

.mod-catal .catal-ex-item-title {
  font-family: "sofiapro-bold", arial, sans-serif;
  font-size: 34px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-bottom: 10px; }

.mod-catal .form-select {
  border: 1px solid #E9E9E9; }

.catal-results-selectboxes .form-item .form-select select {
  background-color: white; }

.mod-catal .catal-ex-item-cat-iconitem .icon-catal,
.mod-catal .catal-ex-item-brand::before {
  color: #83b81a; }

.mod-catal .catal-ex-item-buttons,
.mod-catal .catal-ex-item-buttons-small {
  float: none; }

.mod-catal .btn-primary {
  border: 1px solid #ddd;
  background-color: transparent;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  color: #293a4d;
  border-radius: 50px;
  font-size: 12px;
  text-transform: none; }

.mod-catal .btn-primary:active,
.mod-catal .btn-primary:focus,
.mod-catal .btn-primary:hover {
  background-color: #83b81a;
  border-color: #83b81a;
  color: white;
  outline: none; }

.mod-catal .catal-ex-item-buttons .btn-primary:active::after,
.mod-catal .catal-ex-item-buttons .btn-primary:focus::after,
.mod-catal .catal-ex-item-buttons .btn-primary:hover::after {
  color: white; }

.mod-catal .catal-ex-item-buttons .btn-primary,
.mod-catal .catal-ex-item-buttons-small .btn-primary {
  padding: 15px 40px 15px 22px;
  margin: 0 auto 10px;
  font-size: 12px;
  position: relative;
  display: block;
  width: auto; }

.mod-catal .catal-ex-item-buttons .btn-primary::after,
.mod-catal .catal-ex-item-buttons-small .btn-primary::after {
  content: "+";
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  display: block;
  position: absolute;
  right: 10px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  color: #83b81a;
  top: 50%;
  line-height: 30px;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

.mod-catal .catal-ex-item {
  border-bottom: 1px solid #E2E2E2;
  margin: 0px 0px;
  padding: 50px 0;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column; }

.mod-catal .catal-ex-item:nth-child(2) {
  padding-top: 25px; }

.mod-catal .catal-ex-item-buttons [class^="selection-"] .icon-catal,
.mod-catal .catal-ex-item-buttons-small [class^="selection-"] .icon-catal {
  display: none; }

.mod-catal .catal-ex-item-group-title {
  border-bottom: 0;
  margin-bottom: 10px;
  padding-bottom: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column; }

.mod-catal .catal-ex-item-group-title .catal-ex-item-buttons {
  -webkit-box-ordinal-group: 2;
  -ms-flex-order: 1;
  order: 1; }

.mod-catal .catal-ex-item-title a:active,
.mod-catal .catal-ex-item-title a:focus,
.mod-catal .catal-ex-item-title a:hover {
  text-decoration: none;
  color: #83b81a; }

.mod-catal .catal-ex-item-desc,
.mod-catal .catal-ex-item-country,
.mod-catal .catal-ex-item-stand {
  font-size: 16px; }

.mod-catal .catal-ex-item-title a {
  color: #293a4d; }

.mod-catal .catal-ex-item-stand-item .icon-catal {
  color: #83b81a;
  display: none; }

.mod-catal .catal-ex-item-stand-item {
  font-family: 'akrobat-bold', helvetica, arial, sans-serif; }

.mod-catal.catal-pr-details .edito .catal-pr-item-buttons {
  float: none;
  margin-top: 20px;
  margin-bottom: 15px; }

.mod-catal.catal-pr-details .edito .btn-primary .animation-txt {
  position: relative !important; }

.mod-catal.catal-pr-details .edito .btn-primary .icon-catal {
  display: none; }

.mod-catal.catal-pr-details .edito .btn-primary {
  padding: 12px 40px 12px 24px;
  position: relative; }

.mod-catal.catal-pr-details .edito .btn-primary::after {
  content: "+";
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  display: block;
  position: absolute;
  right: 10px;
  font-size: 20px;
  width: 30px;
  height: 30px;
  margin-top: -15px;
  color: #83b81a;
  top: 50%;
  line-height: 30px;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

.mod-catal.catal-pr-details .edito .btn-primary:hover::after {
  color: white; }

.mod-catal.catal-pr-details .edito .catal-pr-ex-name {
  margin: -15px 0 0 0;
  font-size: 36px;
  font-family: "sofiapro-light",helvetica,arial,sans-serif; }

.mod-catal.catal-pr-details .edito .catal-pr-ex-name a span {
  text-decoration: none; }

.mod-catal .catal-prd-exhibitor .catal-prd-exhibitor-img {
  float: none;
  margin: 0;
  max-width: 390px; }

.mod-catal.catal-other-ex .btn-primary, .mod-catal.catal-other-prd .btn-primary {
  padding: 7px 18px; }

.mod-catal.catal-other-ex .catal-other-ex-link:focus + .catal-other-ex-actions,
.mod-catal.catal-other-prd .catal-other-ex-link:focus + .catal-other-ex-actions,
.mod-catal.catal-other-ex .catal-other-ex-link:active + .catal-other-ex-actions,
.mod-catal.catal-other-prd .catal-other-ex-link:active + .catal-other-ex-actions,
.mod-catal.catal-other-ex .catal-other-ex-link:hover + .catal-other-ex-actions,
.mod-catal.catal-other-prd .catal-other-ex-link:hover + .catal-other-ex-actions,
.mod-catal.catal-other-ex .catal-other-ex-actions:focus,
.mod-catal.catal-other-prd .catal-other-ex-actions:focus,
.mod-catal.catal-other-ex .catal-other-ex-actions:hover,
.mod-catal.catal-other-prd .catal-other-ex-actions:hover,
.mod-catal.catal-other-ex .catal-other-prd-link:focus + .catal-other-prd-actions,
.mod-catal.catal-other-prd .catal-other-prd-link:focus + .catal-other-prd-actions,
.mod-catal.catal-other-ex .catal-other-prd-link:active + .catal-other-prd-actions,
.mod-catal.catal-other-prd .catal-other-prd-link:active + .catal-other-prd-actions,
.mod-catal.catal-other-ex .catal-other-prd-link:hover + .catal-other-prd-actions,
.mod-catal.catal-other-prd .catal-other-prd-link:hover + .catal-other-prd-actions,
.mod-catal.catal-other-ex .catal-other-prd-actions:focus, .mod-catal.catal-other-prd .catal-other-prd-actions:focus,
.mod-catal.catal-other-ex .catal-other-prd-actions:hover, .mod-catal.catal-other-prd .catal-other-prd-actions:hover {
  top: auto;
  margin-left: 0;
  margin-top: 0; }

/* Liste exposants single --------------------------------------------------------- */
.mod-catal h2,
.mod-catal .h2-like {
  font-family: "sofiapro-bold", arial, sans-serif; }

.mod-catal .catal-ed-main .catal-ed-main-desc-content {
  line-height: 26px; }

.mod-catal .catal-ed-main .catal-ed-main-social {
  display: none; }

.catalogue.fiche #main h1 {
  margin-top: 10px;
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1; }

.catalogue.fiche div.edito {
  padding: 54px 0 35px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background: url(img/sia2018/home/bg-texture.png) 0 0; }

.catalogue.fiche .mod-catal.catal-nav-ex .btn-primary {
  text-transform: none;
  padding: 16px;
  border: 0 none;
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  border-radius: 0;
  font-size: 14px;
  text-decoration: underline; }

.catalogue.fiche .mod-catal.catal-nav-ex .btn-primary:active,
.catalogue.fiche .mod-catal.catal-nav-ex .btn-primary:focus,
.catalogue.fiche .mod-catal.catal-nav-ex .btn-primary:hover {
  color: #83b81a;
  background-color: transparent; }

.catalogue.fiche .mod-catal.catal-nav-ex .btn-primary i.icon-catal::before {
  font-size: 16px; }

.catalogue.fiche .mod-catal.catal-nav-ex .btn-primary::first-letter {
  text-transform: uppercase; }

.mod-catal .icon-catal-chevrons:before {
  content: "›";
  font-size: 25px;
  font-family: "akrobat-regular", helvetica, arial, sans-serif !important; }

.mod-catal.catal-nav-ex {
  max-width: 1200px;
  margin: 0 auto;
  border: 0 none;
  padding: 25px 0; }

.mod-catal.catal-nav-ex .catal-nav-ex-link ~ .catal-nav-ex-link {
  margin-right: -105px; }

.mod-catal.catal-nav-ex .catal-nav-ex-sep {
  display: none; }

.mod-catal.catal-nav-ex .catal-nav-ex-link {
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  padding: 15px 10px 15px 40px;
  background-color: white;
  border-radius: 50px;
  font-size: 12px;
  width: 200px;
  background-image: url("img/sia2018/home/arrow-bt-vert-left.svg");
  background-repeat: no-repeat;
  background-position: center left 20px;
  background-size: 26px auto; }

.mod-catal.catal-nav-ex .catal-nav-ex-link#next_exhibitor {
  background-position: center right 20px;
  padding: 15px 50px 15px 10px;
  background-image: url("img/sia2018/home/arrow-bt-vert-right.svg"); }

.mod-catal.catal-nav-ex .catal-nav-ex-link span {
  color: #293a4d; }

.mod-catal.catal-nav-ex .catal-nav-ex-link:active,
.mod-catal.catal-nav-ex .catal-nav-ex-link:focus,
.mod-catal.catal-nav-ex .catal-nav-ex-link:hover {
  color: white;
  background-color: #83b81a;
  background-repeat: no-repeat;
  background-position: center left 20px;
  background-image: url("img/sia2018/home/arrow-bt-blanc-left.svg");
  background-size: 26px auto; }

.mod-catal.catal-nav-ex .catal-nav-ex-link#next_exhibitor:active,
.mod-catal.catal-nav-ex .catal-nav-ex-link#next_exhibitor:focus,
.mod-catal.catal-nav-ex .catal-nav-ex-link#next_exhibitor:hover {
  background-image: url("img/sia2018/home/arrow-bt-blanc-right.svg");
  background-size: 26px auto; }

.mod-catal.catal-nav-ex .catal-nav-ex-link:active span,
.mod-catal.catal-nav-ex .catal-nav-ex-link:focus span,
.mod-catal.catal-nav-ex .catal-nav-ex-link:hover span {
  color: white; }

.mod-catal.catal-nav-ex .catal-nav-ex-link .icon-catal {
  color: #83b81a;
  display: none; }

.mod-catal.catal-nav-ex .catal-nav-ex-link:active .icon-catal,
.mod-catal.catal-nav-ex .catal-nav-ex-link:focus .icon-catal,
.mod-catal.catal-nav-ex .catal-nav-ex-link:hover .icon-catal {
  color: white; }

.mod-catal.catal-nav-ex .catal-nav-ex-more-link {
  color: #293a4d;
  padding: 9px;
  line-height: 30px; }

.mod-catal.catal-nav-ex .catal-nav-ex-more-link .icon-catal {
  -webkit-transform: scale(1) rotate(-180deg);
  -ms-transform: scale(1) rotate(-180deg);
  transform: scale(1) rotate(-180deg);
  vertical-align: middle;
  vertical-align: -8px;
  margin-right: 7px;
  color: #293a4d;
  font-family: 'akrobat-regular', helvetica, arial, sans-serif; }

.mod-catal.catal-nav-ex .catal-nav-ex-more-link:active,
.mod-catal.catal-nav-ex .catal-nav-ex-more-link:focus,
.mod-catal.catal-nav-ex .catal-nav-ex-more-link:hover {
  color: #83b81a; }

.mod-catal.catal-nav-ex .catal-nav-ex-more-link:active .icon-catal,
.mod-catal.catal-nav-ex .catal-nav-ex-more-link:focus .icon-catal,
.mod-catal.catal-nav-ex .catal-nav-ex-more-link:hover .icon-catal {
  color: #83b81a; }

.mod-catal .catal-ed-main-infos {
  float: left;
  width: calc(73.334% - 25px);
  margin-left: 25px;
  max-width: 880px; }

.mod-catal .catal-ed-main .catal-ed-main-stand {
  float: left;
  background-color: transparent;
  padding: 15px 0 19px 0;
  margin: 0 0 20px 0;
  width: calc(73.334% - 25px);
  max-width: 880px;
  margin-left: 25px;
  border-bottom: 1px solid #e2e2e2; }

.mod-catal .catal-ed-main .catal-ed-main-stand-title {
  color: #293a4d;
  margin: 0;
  line-height: 20px;
  padding: 0;
  font-size: 18px; }

.mod-catal .catal-ed-main .catal-ed-main-stand-name a,
.mod-catal .catal-ed-activity .catal-ed-activity-item a {
  text-transform: lowercase;
  border: 1px solid #e0e0e0;
  border-radius: 50px;
  padding: 6px 17px;
  display: inline-block;
  color: #969696;
  font-size: 12px;
  margin-top: 9px; }

.mod-catal .catal-ed-main .catal-ed-main-stand-name a:hover,
.mod-catal .catal-ed-main .catal-ed-main-stand-name a:active,
.mod-catal .catal-ed-main .catal-ed-main-stand-name a:focus,
.mod-catal .catal-ed-activity .catal-ed-activity-item a:active,
.mod-catal .catal-ed-activity .catal-ed-activity-item a:focus,
.mod-catal .catal-ed-activity .catal-ed-activity-item a:hover {
  color: white;
  background-color: #83b81a;
  border-color: #83b81a; }

.mod-catal .catal-ed-main .catal-ed-main-stand-name a::first-letter,
.mod-catal .catal-ed-activity .catal-ed-activity-item a::first-letter {
  text-transform: none; }

.mod-catal .catal-ed-main .catal-ed-main-stand-ref {
  font-size: 24px;
  line-height: 28px;
  margin: 0;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif; }

.mod-catal .catal-ed-main .catal-ed-main-media {
  float: left;
  margin: 0;
  background: #eaeaea;
  width: 26.667%;
  max-width: 320px; }

.mod-catal .catal-ed-products .catal-edp-title {
  font-size: 18px;
  text-transform: lowercase;
  color: #293a4d;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  padding-bottom: 16px;
  margin: 0 0 12px 0; }

.mod-catal .catal-ed-products .catal-edp-content {
  padding: 0 0 0 10px;
  margin: 0; }

.mod-catal .catal-ed-products .catal-edp-title::first-letter {
  text-transform: uppercase; }

.mod-catal .catal-ed-products .catal-edp-title:active,
.mod-catal .catal-ed-products .catal-edp-title:focus,
.mod-catal .catal-ed-products .catal-edp-title:hover {
  color: #83b81a; }

.mod-catal .catal-ed-products .catal-edp-title:active a,
.mod-catal .catal-ed-products .catal-edp-title:focus a,
.mod-catal .catal-ed-products .catal-edp-title:hover a {
  color: #83b81a;
  text-decoration: none; }

.mod-catal .catal-ed-activity .catal-ed-activity-item a {
  margin-top: 0;
  padding: 10px 14px;
  vertical-align: top; }

.mod-catal .catal-ed-activity .catal-ed-activity-item {
  margin: 0 5px 0 0; }

.mod-catal .catal-ed-main .catal-ed-main-stand-ref .icon-catal {
  display: none; }

.mod-catal .catal-prd-main,
.mod-catal .catal-ed-main {
  max-width: 1200px;
  margin: 0 auto;
  border: 0;
  padding: 45px 0 0 0; }

.mod-catal .catal-prd-main {
  margin: 10px auto 60px; }

.mod-catal .catal-prd-group {
  max-width: 1200px;
  margin: 0 auto 70px;
  border: 0 none; }

.mod-catal .catal-ed-products .catal-edp-stand-item {
  margin-left: 5px;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  font-size: 14px; }

.mod-catal .catal-ed-products .catal-edp-stand-title {
  font-size: 14px; }

.mod-catal .catal-ed-brands .catal-ed-brands-link {
  padding: 0;
  font-size: 15px;
  color: #293a4d; }

.mod-catal .catal-ed-brands .catal-ed-brands-img {
  margin-right: 20px;
  width: 80px; }

.mod-catal .catal-ed-brands .catal-ed-brands-item {
  border: 0 none;
  background-color: white; }

.mod-catal.catal-other-prd {
  max-width: 1200px;
  margin: 0 auto; }

.mod-catal.catal-other-ex .catal-other-ex-link,
.mod-catal.catal-other-prd .catal-other-ex-link,
.mod-catal.catal-other-ex .catal-other-prd-link,
.mod-catal.catal-other-prd .catal-other-prd-link {
  padding: 0;
  height: auto; }

.mod-catal.catal-other-ex .catal-other-ex-item,
.mod-catal.catal-other-prd .catal-other-ex-item,
.mod-catal.catal-other-ex .catal-other-prd-item,
.mod-catal.catal-other-prd .catal-other-prd-item {
  border: 0 none;
  background-color: white;
  margin: 1px 0 10px 21px;
  width: calc(19% - 5px);
  display: block;
  padding: 0 0 75px 0; }

.mod-catal.catal-other-ex .btn-primary {
  padding: 10px 10px;
  width: 120px; }

.mod-catal .catal-ed-brands .catal-ed-brands-link:focus,
.mod-catal .catal-ed-brands .catal-ed-brands-link:active,
.mod-catal .catal-ed-brands .catal-ed-brands-link:hover {
  text-decoration: none;
  background-color: white;
  color: #83b81a; }

.mod-catal.catal-other-ex .catal-other-ex-actions,
.mod-catal.catal-other-prd .catal-other-ex-actions,
.mod-catal.catal-other-ex .catal-other-prd-actions,
.mod-catal.catal-other-prd .catal-other-prd-actions {
  display: block;
  bottom: 25px !important;
  position: absolute !important;
  left: 50% !important;
  -webkit-transform: translateX(-50%) !important;
  -ms-transform: translateX(-50%) !important;
  transform: translateX(-50%) !important; }

.mod-catal .catal-ed-group {
  max-width: 1200px;
  margin: 45px auto;
  border: 0 none; }

.mod-catal.catal-other-ex {
  max-width: 1200px;
  margin: 0 auto;
  background-image: -o-linear-gradient(left, #777 10%, rgba(255, 255, 255, 0) 0%);
  background-image: -webkit-gradient(linear, left top, right top, color-stop(10%, #777), color-stop(0%, rgba(255, 255, 255, 0)));
  background-image: linear-gradient(to right, #777 10%, rgba(255, 255, 255, 0) 0%);
  background-position: top 32px center;
  background-size: 5px 1px;
  background-repeat: repeat-x; }

.mod-catal .catal-prd-main-title,
.mod-catal .catal-ed-main-title {
  background-color: white;
  color: #293a4d;
  font-size: 29px;
  line-height: 29px;
  padding: 13px 26px; }

.mod-catal .catal-ed-group-title {
  padding: 0;
  border-bottom: 0 none;
  margin-bottom: 30px;
  background-image: -o-linear-gradient(left, #777 10%, rgba(255, 255, 255, 0) 0%);
  background-image: -webkit-gradient(linear, left top, right top, color-stop(10%, #777), color-stop(0%, rgba(255, 255, 255, 0)));
  background-image: linear-gradient(to right, #777 10%, rgba(255, 255, 255, 0) 0%);
  background-position: center;
  background-size: 5px 1px;
  background-repeat: repeat-x; }

.mod-catal .catal-ed-products .catal-edp-item {
  border-bottom: 0; }

.mod-catal .catal-ed-main-title .qty-round-big {
  display: none; }

.catal-other-prd h2,
.catal-other-ex h2 {
  color: white;
  padding: 3px 27px;
  font-size: 38px;
  display: inline-block;
  background-color: #83b81a;
  margin: 0 0px 20px 0; }

.mod-catal .catal-prd-exhibitor .catal-prd-group-title {
  border: 0 none; }

.mod-catal .catal-prd-main .catal-prd-main-price-current {
  color: #293a4d;
  font-size: 50px;
  letter-spacing: 0;
  line-height: 30px;
  font-family: "sofiapro-bold",helvetica,arial,sans-serif; }

.mod-catal .catal-prd-main .catal-prd-main-price-old {
  font-size: 22px;
  color: #293a4d;
  font-style: italic;
  font-family: "sofiapro-light",helvetica,arial,sans-serif; }

.mod-catal .catal-prd-main .catal-prd-main-price-rebate {
  background-color: #83b81a;
  border-radius: 50px;
  padding: 8px 18px;
  margin-bottom: 10px; }

.mod-catal .catal-prd-main .catal-prd-main-brand .catal-prd-main-brand-link {
  font-size: 18px;
  font-family: "akrobat-regular",helvetica,arial,sans-serif; }

.mod-catal .catal-prd-main .catal-prd-main-brand .catal-prd-main-brand-link:hover {
  color: #83b81a; }

.mod-catal .catal-prd-main .catal-prd-main-brand .catal-prd-main-brand-link span {
  text-decoration: none; }

.mod-catal a {
  color: #83b81a; }

.mod-catal .catal-prd-infos .catal-prd-infos-type-list .catal-prd-infos-item .icon-catal {
  color: #83b81a; }

.mod-catal a:hover {
  color: #486b12; }

.mod-catal .catal-ex-item-exhibitor-item .icon-catal {
  display: none; }

.mod-catal .catal-ex-item-exhibitor-title {
  margin-right: 10px; }

.mod-catal .catal-ex-item-exhibitor-item a:hover {
  color: #83b81a; }

.mod-catal .catal-prd-url .icon-catal {
  color: #293a4d; }

.mod-catal .catal-prd-title {
  border-bottom: none;
  margin-bottom: 0;
  font-size: 26px;
  letter-spacing: 0;
  font-weight: bold;
  color: #293a4d;
  font-family: "sofiapro-bold",helvetica,arial,sans-serif; }

.mod-catal .catal-prd-exhibitor .catal-prd-exhibitor-view .icon-catal,
.mod-catal .catal-prd-brand .catal-prd-brand-view .icon-catal {
  color: #83b81a; }

.mod-catal .catal-prd-main .catal-prd-main-brand .catal-prd-main-brand-link .icon-catal {
  color: #83b81a;
  margin-right: 0;
  vertical-align: top;
  margin-left: 7px; }

.mod-catal:not(.gm-style) img,
.mod-catal.catal-other-ex .catal-other-ex-img {
  height: auto;
  width: 100%; }

.mod-catal .catal-ed-products .catal-edp-cat-item .icon-catal {
  color: #83b81a; }

.mod-catal .catal-ed-products .catal-edp-stand-item .icon-catal {
  display: none; }

.mod-catal .catal-ed-activity .catal-ed-activity-group {
  border: 0 none; }

.mod-catal .catal-ed-activity .catal-ed-activity-title {
  width: 15%;
  line-height: 34px;
  color: #293a4d;
  font-size: 15px;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif; }

.mod-catal .catal-ed-activity .catal-ed-activity-subtitle,
.mod-catal .catal-ed-activity .catal-ed-activity-list {
  margin: 0 0 0 15%; }

.mod-catal.catal-other-ex .catal-other-ex-item:hover .catal-other-ex-actions a.btn-primary {
  background-color: #83b81a;
  border-color: #83b81a;
  color: white;
  outline: none; }

.mod-catal.catal-other-ex .catal-other-ex-link {
  display: block; }

.mod-catal.catal-other-ex .catal-other-ex-actions:hover,
.mod-catal.catal-other-ex .catal-other-ex-link:hover + .catal-other-ex-actions {
  margin-left: 0;
  margin-top: 0;
  top: auto; }

.mod-catal.catal-other-ex .catal-other-ex-list,
.mod-catal.catal-other-prd .catal-other-ex-list,
.mod-catal.catal-other-ex .catal-other-prd-list,
.mod-catal.catal-other-prd .catal-other-prd-list {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row; }

.mod-catal.catal-other-ex .catal-other-ex-txt,
.mod-catal.catal-other-prd .catal-other-ex-txt,
.mod-catal.catal-other-ex .catal-other-prd-txt,
.mod-catal.catal-other-prd .catal-other-prd-txt {
  font-size: 26px;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0 20px;
  line-height: 28px;
  margin-top: 18px;
  display: block; }

/* Pagination --------------------------------------------------------- */
.pagination {
  text-align: right;
  max-width: 1200px;
  margin: 10px auto 0;
  border: 0; }

.pagination .icon {
  color: #293a4d; }

.pagination .pagin-item.pagin-next .icon-catal {
  color: #293a4d;
  margin-left: 5px; }

.pagination .pagin-item.pagin-prev .icon-catal {
  color: #293a4d;
  margin-right: 5px; }

.pagination.mod-catal .pagin-item {
  padding-right: 15px;
  padding-left: 15px; }

.pagin-item.pagin-next .icon {
  margin-left: 4px; }

.pagin-item a:active,
.pagin-item a:focus,
.pagin-item a:hover,
.pagin-item.is-active a {
  background-color: #83b81a;
  color: white; }

.pagin-item {
  background: white;
  font-family: 'akrobat-bold', helvetica, arial, sans-serif;
  font-size: 12px; }

.pagin-item a {
  color: #293a4d;
  padding: 8px 0;
  width: 34px;
  text-align: center; }

.pagin-item.pagin-prev,
.pagin-item.pagin-next {
  background-color: transparent; }

.pagin-item.pagin-prev a,
.pagin-item.pagin-next a {
  width: auto; }

.pagin-item.pagin-next a:active,
.pagin-item.pagin-next a:focus,
.pagin-item.pagin-next a:hover,
.pagin-item.pagin-next a:hover .icon {
  color: #83b81a; }

.pagin-item.pagin-next a i {
  margin-left: 2px;
  font-size: 20px; }

.pagin-item.pagin-next a i::before {
  content: "›";
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  vertical-align: -1px; }

/* Sitemap --------------------------------------------------------- */
body.sitemap div.layout-2-col {
  margin: 0 auto;
  max-width: 1200px; }

body.sitemap .sm-item-title {
  color: #293a4d;
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-weight: normal;
  display: block;
  font-size: 40px;
  line-height: 40px;
  margin: 50px 0 25px;
  padding-bottom: 20px; }

body.sitemap .sm-item-link {
  color: #293a4d; }

body.sitemap .sm-item-link:hover {
  color: #83b81a; }

.content-list-bullet {
  padding-left: 0; }

.content-list-bullet li {
  margin-bottom: 4px; }

.content-list-bullet li::before {
  height: 7px;
  width: 7px;
  margin-right: 9px;
  margin-top: 11px;
  margin-left: 0;
  border-radius: 5px;
  background-color: #83b81a; }

.content-list-bullet .content-list-bullet {
  padding-left: 20px;
  margin-top: 10px;
  margin-bottom: 15px; }

.content-list-bullet .content-list-bullet li::before {
  background: transparent;
  height: 6px;
  width: 6px;
  border: 1px solid #989898; }

.mod-catal .catal-ex-item.is-premium .catal-ex-item-title {
  font-size: 50px;
  border: 1px solid #e8e8e8;
  background-color: white;
  padding: 5px 20px;
  color: #83b81a; }

.mod-catal .catal-ex-item.is-premium .catal-ex-item-title a {
  color: #83b81a; }

.mod-catal .catal-ex-item.is-premium .catal-ex-item-title:hover {
  background-color: #83b81a;
  color: white;
  border-color: #83b81a; }

.mod-catal .catal-ex-item.is-premium .catal-ex-item-title:hover a {
  color: white; }

/* Search --------------------------------------------------------- */
body.search .layout-2-col {
  max-width: 840px;
  margin: 0 auto; }

body.search .sr-form {
  max-width: 680px;
  margin: 60px auto 40px; }

body.search .sr-form .gsf-submit-btn {
  padding: 0 5px 0 0;
  background: #293a4d;
  height: 67px;
  width: 75px;
  border: 1px solid #293a4d;
  border-radius: 0 50px 50px 0;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease; }

body.search .sr-form .gsf-submit-btn i {
  display: block; }

body.search .sr-form .gsf-submit-btn:hover,
body.search .sr-form .gsf-submit-btn:active,
body.search .sr-form .gsf-submit-btn:focus {
  background-color: #83b81a;
  border-color: #83b81a; }

body.search .sr-form .form-txt {
  display: block;
  width: 100%;
  padding: 0 30px;
  min-height: 65px;
  font-size: 16px;
  border: 1px solid #e4e4e4;
  border-radius: 50px 0 0 50px;
  line-height: 65px;
  border-right: 0 none; }

body.search .sr-form .form-txt:focus {
  border-color: #c1c1c1; }

body.search .sr-main-title {
  font-family: "sofiapro-bold", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 50px;
  letter-spacing: 0;
  text-align: center;
  background: #83b81a;
  color: #c3ea87;
  padding: 13px 25px 5px 29px;
  display: inline-block;
  line-height: 62px;
  margin-top: 10px;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  position: relative; }

body.search .sr-term {
  color: #83b81a; }

body.search .sr-main-title .sr-term {
  color: white; }

body.search .sr-nb-result {
  color: #406111; }

body.search .sr-nb-result::before {
  display: none; }

body.search .sr-group-title {
  background-color: white;
  font-family: "sofiapro-light", arial, sans-serif;
  font-size: 32px;
  font-weight: normal;
  text-align: center;
  display: inline-block;
  padding: 8px 24px;
  line-height: 38px;
  color: #293a4d; }

body.search .sr-item-img {
  border: 7px solid white;
  -webkit-box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.15);
  box-shadow: 0 20px 20px -10px rgba(0, 0, 0, 0.15);
  width: 290px;
  -ms-flex-preferred-size: 290px;
  flex-basis: 290px;
  min-width: 290px; }

body.search .sr-item-img img {
  width: 100%; }

body.search .sr-item {
  padding-bottom: 45px;
  margin-bottom: 50px;
  border-bottom: 1px solid #e4e4e4;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; }

body.search .sr-item-content .sr-item-title {
  margin-bottom: 6px;
  line-height: 38px; }

body.search .sr-item-content .sr-item-title a {
  font-family: "sofiapro-bold", arial, sans-serif;
  color: #293a4d;
  font-size: 33px;
  line-height: 30px; }

body.search .sr-item-content .sr-item-title a:hover {
  color: #83b81a;
  text-decoration: none; }

/* FOOTER --------------------------------------------------------- */
/* prefooter */
#widgetMobileLinkOpenCap .mn-link {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row; }

#widgetMobileLinkOpenCap .mn-link .icon-user-circle-o {
  margin-right: 7px;
  background-image: url(img/sia2018/general/header-top-user-white.svg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 20px; }

.site-footer #widgetMobileLinkOpenCap .mn-link .icon-user-circle-o {
  background-image: url(img/sia2018/general/header-top-user.svg); }

#widgetMobileLinkOpenCap .mn-link .icon-user-circle-o::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  background-position: center; }

div.prefooter {
  border-top: 1px dashed #d8d8da;
  padding-top: 5px;
  background: #F7F7F7; }

body:not(.front) div.prefooter {
  margin-top: 80px; }

div.prefooter-bloc h3 {
  margin: 0 auto;
  font-size: 24px;
  font-family: "sofiapro-light", arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0;
  color: #293a4d;
  display: inline-block;
  padding-left: 50px; }

div.prefooter-bloc h3.question {
  background: url("img/sia2018/home/picto-phone.svg") no-repeat 0 center; }

div.prefooter-bloc h3.newsletter {
  background: url("img/sia2018/home/picto-nl.svg") no-repeat 0 center; }

div.prefooter-bloc h3.social {
  padding-left: 0; }

div.prefooter .prefooter-wrapper {
  margin: 0 auto;
  width: 100%;
  padding-bottom: 0;
  max-width: 1200px; }

div.prefooter-bloc {
  width: 100%;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  border-right: 0 none;
  border-bottom: 1px solid #E8E8E8;
  padding: 40px 0;
  background-color: #f7f7f7; }

div.prefooter-bloc p {
  margin-top: 8px; }

div.prefooter-bloc:last-child {
  border-bottom: 1px solid #E8E8E8;
  padding-bottom: 45px; }

div.prefooter-bloc ul {
  display: inline-block;
  list-style-type: none;
  margin-top: 17px;
  padding: 0 10px; }

div.prefooter-bloc li {
  display: inline-block; }

div.prefooter-bloc li a {
  display: block;
  -webkit-transition: all 0.25s ease;
  -o-transition: all 0.25s ease;
  transition: all 0.25s ease;
  padding: 0 7px;
  width: 45px; }

div.prefooter-bloc li a:hover {
  -webkit-transform: translateY(-3px);
  -ms-transform: translateY(-3px);
  transform: translateY(-3px); }

div.prefooter-bloc .bouton {
  border: 1px solid #e3e3e3;
  margin-top: 14px;
  text-decoration: none;
  display: inline-block;
  padding: 10px 15px;
  border-radius: 50px;
  color: #323232;
  font-size: 15px; }

div.prefooter-bloc .bouton:hover {
  background-color: #83b81a;
  color: white;
  border-color: #83b81a; }

/* Swiper */
.swiper-button-next,
.swiper-button-prev {
  width: 44px !important;
  height: 65px !important;
  margin-top: -32px !important;
  -webkit-transition: background-position 0.2s ease;
  -o-transition: background-position 0.2s ease;
  transition: background-position 0.2s ease;
  background-size: 16px auto !important; }

.swiper-button-prev:hover {
  background-position: 5px center; }

.swiper-button-next:hover {
  background-position: 18px center; }

.swiper-container-horizontal > .swiper-pagination-bullets,
.swiper-pagination-custom,
.swiper-pagination-fraction {
  bottom: 15px !important; }

.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
  margin: 0 5px !important; }

.swiper-button-next,
.swiper-container-rtl .swiper-button-prev {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;
  right: 0px !important; }

.swiper-button-next:hover,
.swiper-container-rtl .swiper-button-prev:hover {
  padding-right: 5px !important; }

.swiper-button-prev,
.swiper-container-rtl .swiper-button-next {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E") !important;
  left: 0px !important; }

.swiper-button-next, .swiper-button-prev {
  top: 40% !important; }

.swiper-button-prev:hover,
.swiper-container-rtl .swiper-button-next:hover {
  padding-left: 5px !important; }

.espace-exposants .swiper-pagination-bullet-active {
  background: #215AD6 !important; }

.visiteur-pro .swiper-pagination-bullet-active {
  background: #4b2980 !important; }

.swiper-pagination-bullet {
  width: 10px !important;
  height: 10px !important;
  background: white !important;
  opacity: 1 !important; }

/* footer */
.site-footer .inside > .sb-menu-trigger {
  display: none; }

.site-footer {
  background: #f7f7f7;
  padding-top: 35px; }

.site-footer .inside > * {
  display: inline-block; }

.site-footer .mn-menu,
.site-footer .mn-menu-line {
  display: inline-block;
  width: 100%; }

.site-footer .inside {
  max-width: 1200px;
  padding: 0 0 30px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  border-top: 0 none;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center; }

.site-footer nav.main-navigation {
  background: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  height: auto;
  position: relative; }

.site-footer nav.main-navigation ul {
  width: 100%;
  background-color: transparent; }

.site-footer nav.main-navigation li {
  border: 0 none;
  display: block;
  min-height: 0;
  background-color: transparent; }

.site-footer nav.main-navigation li:last-child {
  border: 0; }

.site-footer nav.main-navigation li:first-child a {
  padding-left: 20px; }

.site-footer .mn-item-lvl-1 > .mn-link {
  color: #293a4d;
  font-size: 14px;
  text-transform: none;
  min-height: 0;
  line-height: 1em;
  font-family: 'akrobat-regular', helvetica, arial, sans-serif;
  letter-spacing: 0;
  padding: 15px 20px; }

.site-footer .copyright {
  font-size: 10px;
  color: #aaa;
  position: relative;
  left: 0;
  bottom: 5px;
  width: 200px;
  text-align: center; }

.site-footer .copyright p {
  line-height: 20px; }

.site-footer .copyright a {
  color: #aaa; }

.site-footer .copyright a:hover {
  color: #293a4d;
  text-decoration: underline; }

.site-footer .mn-item-lvl-1 > .mn-link:hover {
  color: #83b81a; }

.site-footer nav.main-navigation .mn-menu-item:hover {
  background: none; }

.site-footer .footer-logos {
  margin-left: auto;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  margin-top: 30px; }

.site-footer .footer-logos img {
  margin-right: 0;
  max-width: 156px;
  margin-bottom: 25px; }

.site-footer .footer-logos .ceneca {
  max-width: 117px; }

.site-footer .footer-logos .cgp {
  max-width: 89px; }

.site-footer .footer-logos .ministere {
  max-width: 70px; }

.site-footer .footer-logos .comexposium {
  max-width: 156px; }

.site-footer .footer-logos img:last-child {
  margin-right: 0; }

#cxpmClientAccountWidget .widget-icon > span.number {
  background-color: #e84791 !important;
  right: -23px !important;
  top: 0;
  -webkit-box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.5);
  box-shadow: 0 3px 8px -3px rgba(0, 0, 0, 0.5);
  width: 12px !important;
  height: 12px !important; }

header.site-banner .widget-my-selection {
  opacity: 1;
  -webkit-transition: opacity 0.25s ease;
  -o-transition: opacity 0.25s ease;
  transition: opacity 0.25s ease; }

header.site-banner.headroom--not-top .widget-my-selection {
  opacity: 0;
  pointer-events: none; }

/* Agri-malin --------------------------------------------------------- */
.agrimalin {
  max-width: 1200px;
  margin: -30px auto 80px;
  text-align: center; }

.agrimalin h2 {
  font-size: 48px;
  line-height: 70px;
  color: #83b81a;
  margin: 0;
  padding: 0; }

.agrimalin h3 {
  color: #293a4d;
  font-family: 'sofiapro-light', Arial, Helvetica, sans-serif;
  font-size: 23px;
  line-height: 28px;
  font-weight: normal;
  margin: 0;
  padding: 0; }

.agrimalin .agrimalin-block {
  display: inline-block;
  background-color: white;
  -webkit-box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  box-shadow: 0 23px 25px -15px rgba(0, 0, 0, 0.1);
  margin-top: 130px;
  text-align: left;
  padding: 35px;
  width: 320px;
  max-width: 90%; }

.agrimalin .agrimalin-block img {
  max-width: initial;
  margin-left: -20px;
  margin-top: -150px;
  margin-bottom: 0px;
  width: 300px; }

.agrimalin .agrimalin-block .right,
.agrimalin .agrimalin-block .left {
  display: block;
  text-align: center; }

.agrimalin .agrimalin-block .left {
  width: 100%; }

.agrimalin .agrimalin-block .right {
  width: 100%;
  padding-left: 0; }

.agrimalin .agrimalin-block a {
  background-image: url(img/sia2018/home/arrow-bt-blanc-right.svg);
  background-color: #83b81a;
  background-repeat: no-repeat;
  background-position: right 20px center;
  background-size: 26px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 12px 55px 12px 25px;
  border-radius: 50px;
  color: white;
  font-size: 15px;
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  z-index: 1;
  position: relative;
  margin-top: 15px; }

.agrimalin .agrimalin-block a:focus,
.agrimalin .agrimalin-block a:hover {
  color: #83b81a;
  background-color: #f5f5f5;
  background-image: url(img/sia2018/home/arrow-bt-vert-right.svg); }

.agrimalin-sticky {
  position: fixed;
  left: 50%;
  bottom: 0;
  z-index: 9999;
  width: 165px;
  text-align: center;
  -webkit-transition: bottom 0.3s ease;
  -o-transition: bottom 0.3s ease;
  transition: bottom 0.3s ease;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%); }

.agrimalin-sticky .agrimalin-sticky-content {
  position: relative;
  border-radius: 10px;
  padding-bottom: 11px;
  background-color: #40a62a;
  margin-bottom: 10px;
  margin-left: 0; }

.agrimalin-sticky.cloak {
  bottom: -112px; }

.agrimalin-sticky img {
  margin-top: -40px; }

.agrimalin-sticky .message {
  position: absolute;
  top: -6px;
  width: 100%;
  height: 57px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center; }

.agrimalin-sticky .message p {
  font-size: 12px;
  line-height: 15px;
  margin: 0; }

.agrimalin-sticky a {
  -webkit-box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  box-shadow: 0 15px 25px -15px rgba(0, 0, 0, 0.2);
  background: url(img/sia2018/home/arrow-bt-vert-right.svg) no-repeat 90% center white;
  background-size: 22px auto;
  text-decoration: none;
  font-family: 'akrobat-bold', helvetica, arial, sa, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: inline-block;
  padding: 8px 40px 8px 15px;
  border-radius: 50px;
  margin-top: 8px;
  color: #40a62a;
  font-size: 10px;
  -webkit-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  transition: all 0.2s ease; }

.agrimalin-sticky a:focus,
.agrimalin-sticky a:hover {
  -webkit-transform: scale(1.02);
  -ms-transform: scale(1.02);
  transform: scale(1.02); }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001502"],
.mod-catal .catal-ex-item-cat-item a[data-reference="1001502"] {
  color: #009cd8; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001502"] .catal-ex-item-cat-icon,
.mod-catal .catal-ex-item-cat-item a[data-reference="1001502"] .catal-ex-item-cat-icon {
  background-color: #009cd8;
  background-image: url("img/sia2018/home/secteur-picto-elevage.svg");
  background-repeat: no-repeat;
  background-size: 42px auto;
  background-position: center; }

.catalogue.fiche .mod-catal .catal-ed-main-cat-item a[data-reference="1001502"] .catal-ex-item-cat-icon {
  background-size: 60px auto; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001503"],
.mod-catal .catal-ex-item-cat-item a[data-reference="1001503"] {
  color: #83b81a; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001503"] .catal-ex-item-cat-icon,
.mod-catal .catal-ex-item-cat-item a[data-reference="1001503"] .catal-ex-item-cat-icon {
  background-color: #83b81a;
  background-image: url("img/sia2018/home/secteur-picto-culture.svg");
  background-repeat: no-repeat;
  background-size: 44px auto;
  background-position: center; }

.catalogue.fiche .mod-catal .catal-ed-main-cat-item a[data-reference="1001503"] .catal-ex-item-cat-icon {
  background-size: 62px auto; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001504"],
.mod-catal .catal-ex-item-cat-item a[data-reference="1001504"] {
  color: #88288c; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001504"] .catal-ex-item-cat-icon,
.mod-catal .catal-ex-item-cat-item a[data-reference="1001504"] .catal-ex-item-cat-icon {
  background-color: #88288c;
  background-image: url("img/sia2018/home/picto-theme-enfants.svg");
  background-repeat: no-repeat;
  background-size: 19px auto;
  background-position: center; }

.catalogue.fiche .mod-catal .catal-ed-main-cat-item a[data-reference="1001504"] .catal-ex-item-cat-icon {
  background-size: 28px auto; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001505"],
.mod-catal .catal-ex-item-cat-item a[data-reference="1001505"] {
  color: #165589; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001505"] .catal-ex-item-cat-icon,
.mod-catal .catal-ex-item-cat-item a[data-reference="1001505"] .catal-ex-item-cat-icon {
  background-color: #165589;
  background-image: url("img/sia2018/home/picto-theme-digital.svg");
  background-repeat: no-repeat;
  background-size: 23px auto;
  background-position: center; }

.catalogue.fiche .mod-catal .catal-ed-main-cat-item a[data-reference="1001505"] .catal-ex-item-cat-icon {
  background-size: 32px auto; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001506"],
.mod-catal .catal-ex-item-cat-item a[data-reference="1001506"] {
  color: #f6a924; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001506"] .catal-ex-item-cat-icon,
.mod-catal .catal-ex-item-cat-item a[data-reference="1001506"] .catal-ex-item-cat-icon {
  background-color: #f6a924;
  background-image: url("img/sia2018/home/secteur-picto-produits.svg");
  background-repeat: no-repeat;
  background-size: 44px auto;
  background-position: center; }

.catalogue.fiche .mod-catal .catal-ed-main-cat-item a[data-reference="1001506"] .catal-ex-item-cat-icon {
  background-size: 62px auto; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001740"],
.mod-catal .catal-ex-item-cat-item a[data-reference="1001740"] {
  color: #B93859; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001740"] .catal-ex-item-cat-icon,
.mod-catal .catal-ex-item-cat-item a[data-reference="1001740"] .catal-ex-item-cat-icon {
  background-color: #B93859;
  background-image: url("img/sia2018/home/picto-theme-gourmand.svg");
  background-repeat: no-repeat;
  background-size: 22px auto;
  background-position: center; }

.catalogue.fiche .mod-catal .catal-ed-main-cat-item a[data-reference="1001740"] .catal-ex-item-cat-icon {
  background-size: 32px auto; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001739"],
.mod-catal .catal-ex-item-cat-item a[data-reference="1001739"] {
  color: #1F8DB1; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001739"] .catal-ex-item-cat-icon,
.mod-catal .catal-ex-item-cat-item a[data-reference="1001739"] .catal-ex-item-cat-icon {
  background-color: #1F8DB1;
  background-image: url("img/sia2018/home/picto-theme-wifi.svg");
  background-repeat: no-repeat;
  background-size: 26px auto;
  background-position: center; }

.catalogue.fiche .mod-catal .catal-ed-main-cat-item a[data-reference="1001739"] .catal-ex-item-cat-icon {
  background-size: 36px auto; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001738"],
.mod-catal .catal-ex-item-cat-item a[data-reference="1001738"] {
  color: #e30059; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001738"] .catal-ex-item-cat-icon,
.mod-catal .catal-ex-item-cat-item a[data-reference="1001738"] .catal-ex-item-cat-icon {
  background-color: #e30059;
  background-image: url("img/sia2018/home/secteur-picto-services.svg");
  background-repeat: no-repeat;
  background-size: 44px auto;
  background-position: center; }

.catalogue.fiche .mod-catal .catal-ed-main-cat-item a[data-reference="1001738"] .catal-ex-item-cat-icon {
  background-size: 62px auto; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001507"],
.mod-catal .catal-ex-item-cat-item a[data-reference="1001507"] {
  color: #508916; }

.catalogue.fiche .mod-catal .catal-ex-item-cat-icon {
  width: 65px;
  height: 65px; }

.mod-catal .catal-ed-main .catal-ed-main-cat-link {
  background-color: white;
  padding: 8px 16px 8px 0;
  font-size: 20px; }

.catalogue.fiche .mod-catal .catal-ed-main .catal-ed-main-cat-link {
  padding: 8px 22px 8px 0; }

.mod-catal .catal-ed-main-cat-item a[data-reference="1001507"] .catal-ex-item-cat-icon,
.mod-catal .catal-ex-item-cat-item a[data-reference="1001507"] .catal-ex-item-cat-icon {
  background-color: #508916;
  background-image: url("img/sia2018/home/picto-theme-bio.svg");
  background-repeat: no-repeat;
  background-size: 32px auto;
  background-position: center; }

.catalogue.fiche .mod-catal .catal-ed-main-cat-item a[data-reference="1001507"] .catal-ex-item-cat-icon {
  background-size: 44px auto; }

/* Language EN --------------------------------------------------------- */
html[lang="en"] header.site-banner .quicklinks.social,
html[lang="en"] header.site-banner .gsf-fields,
html[lang="en"] header.site-banner .nf-main-content .inside {
  display: none; }

html[lang="en"] div#bandeau-header #infos-salon .bigtitre {
  font-size: 27px; }

html[lang="en"] div#bandeau-header #infos-salon .bigtitre.bis {
  letter-spacing: 0; }

html[lang="en"] div#zone2 div.contenus-dedies .cxp-pagination {
  padding-top: 0; }

html[lang="en"] .grid-la-list article[class*="topic_"] .gla-item-title {
  margin-top: 4px;
  padding-top: 73px; }

html[lang="en"] .visiteur-pro div#zone2 div.contenus-dedies article {
  margin-right: 0;
  margin-bottom: 30px; }

html[lang="en"] div#zone2 div.contenus-dedies {
  padding-bottom: 80px; }

html[lang="en"] div#zone2 div.serenite {
  padding-bottom: 320px; }

/* Responsive --------------------------------------------------------- */
@media screen and (min-width: 1400px) {
  body.sitemap #main::before
  body.page-rubric.content329649 #main::before,
  body.partner #main::before,
  body.article #main::before,
  body.article_list #main::before,
  body.catalogue #main::before {
    background-position: top 0% center; }

  body.espace-exposants nav.main-navigation .mn-item-lvl-1 {
    max-width: none; } }
@media screen and (min-width: 1650px) {
  body.sitemap #main::before,
  body.page-rubric.content329649 #main::before,
  body.partner #main::before,
  body.article #main::before,
  body.article_list #main::before,
  body.catalogue #main::before {
    background-position: top -5% center; }

  div#video-wrapper {
    height: 580px; }

  div.slider-wrapper {
    height: 635px; }

  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 6px !important; } }
@media screen and (min-width: 1920px) {
  body.sitemap #main::before
  body.page-rubric.content329649 #main::before,
  body.partner #main::before,
  body.article #main::before,
  body.article_list #main::before,
  body.catalogue #main::before {
    background-position: top -10% center;
    height: 220px; }

  body.article #main,
  body.partner #main,
  body.article_list #main,
  body.page-rubric.content329649 #main,
  body.catalogue #main {
    padding-top: 220px; }

  div#video-wrapper {
    height: 640px; } }
@media screen and (min-width: 2200px) {
  body.page-rubric.content329649 #main::before,
  body.partner #main::before,
  body.article #main::before,
  body.article_list #main::before,
  body.catalogue #main::before {
    background-position: top -25% center; } }
@media screen and (min-width: 2400px) {
  body.page-rubric.content329649 #main::before,
  body.partner #main::before,
  body.article #main::before,
  body.article_list #main::before,
  body.catalogue #main::before {
    background-position: top -30% center; } }
/* Components */
/* Layouts */
/* pages */
.content800296 {
  background: inherit; }
  .content800296 .wrapper {
    padding: 0; }
  .content800296 .content-global {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column; }
  .content800296 .container-landing {
    background-image: url("img/sia2018/landing/background-animaux.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    position: relative; }
    @media screen and (max-width: 768px) {
      .content800296 .container-landing {
        background-position: 24% 12%; } }
    @media screen and (max-width: 480px) {
      .content800296 .container-landing {
        background-position: 28% 12%; } }
    .content800296 .container-landing .section-content {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
          -ms-flex-direction: column;
              flex-direction: column;
      padding: 6rem 8rem; }
      @media screen and (max-width: 480px) {
        .content800296 .container-landing .section-content {
          padding: 6rem 6rem; } }
      @media screen and (max-width: 360px) {
        .content800296 .container-landing .section-content {
          padding: 4rem 4rem; } }
      .content800296 .container-landing .section-content .container-logo .logo {
        max-width: 24rem !important; }
        @media screen and (max-width: 480px) {
          .content800296 .container-landing .section-content .container-logo .logo {
            max-width: 16rem !important; } }
      .content800296 .container-landing .section-content .txt {
        margin: 10% 0 0 0;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
            -ms-flex-direction: column;
                flex-direction: column;
        -webkit-box-pack: end;
            -ms-flex-pack: end;
                justify-content: flex-end; }
        @media screen and (max-width: 1600px) {
          .content800296 .container-landing .section-content .txt {
            margin: 10% 0 0 0; } }
        .content800296 .container-landing .section-content .txt em {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          font-size: 2.6rem;
          font-family: "akrobat-bold", helvetica, arial, sans-serif;
          font-style: initial;
          margin-bottom: 0rem;
          color: white; }
        .content800296 .container-landing .section-content .txt strong {
          font-size: 5.2rem;
          line-height: 5rem;
          font-family: "sofiapro-bold", helvetica, arial, sans-serif;
          color: white; }
          @media screen and (max-width: 480px) {
            .content800296 .container-landing .section-content .txt strong {
              font-size: 4.2rem; } }
        .content800296 .container-landing .section-content .txt h1 {
          -webkit-text-fill-color: transparent;
          -webkit-text-stroke-width: 0.2rem;
          -webkit-text-stroke-color: white;
          font-size: 10.3rem;
          font-family: "sofiapro-bold", helvetica, arial, sans-serif;
          text-transform: uppercase;
          margin: 0;
          padding: 0;
          border-bottom: 0;
          line-height: 9.8rem; }
          @media screen and (max-width: 480px) {
            .content800296 .container-landing .section-content .txt h1 {
              font-size: 8rem;
              line-height: 7.8rem; } }
          @media screen and (max-width: 360px) {
            .content800296 .container-landing .section-content .txt h1 {
              font-size: 6rem;
              line-height: 5.8rem; } }
        .content800296 .container-landing .section-content .txt p.date {
          font-size: 2.2rem;
          font-family: "sofiapro-bold", helvetica, arial, sans-serif;
          color: white;
          margin-top: 1.7rem;
          margin-bottom: 5.4rem;
          font-weight: 700;
          max-width: 60rem; }
          @media screen and (max-width: 480px) {
            .content800296 .container-landing .section-content .txt p.date {
              margin-bottom: 3.5rem; } }
        .content800296 .container-landing .section-content .txt h2 {
          font-size: 3rem;
          font-family: "akrobat-bold", helvetica, arial, sans-serif;
          color: white;
          margin-bottom: 1rem;
          line-height: 4rem;
          max-width: 60rem;
          margin-top: 0; }
          @media screen and (max-width: 480px) {
            .content800296 .container-landing .section-content .txt h2 {
              font-size: 2.5rem;
              line-height: 3.5rem; } }
        .content800296 .container-landing .section-content .txt p.current-txt {
          font-size: 2.1rem;
          font-family: "akrobat-bold", helvetica, arial, sans-serif;
          color: white;
          line-height: 3.3rem;
          font-weight: 100;
          max-width: 60rem;
          margin-top: 0; }
    @media screen and (max-width: 768px) {
      .content800296 .container-landing iframe {
        max-width: 80%; } }
    .content800296 .container-landing .section-form {
      padding: 0; }
      .content800296 .container-landing .section-form .form {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
            -ms-flex-pack: center;
                justify-content: center;
        overflow-y: scroll;
        padding-bottom: 40rem; }
    .content800296 .container-landing .container-agrimalin {
      position: absolute;
      padding-bottom: 0rem;
      color: #41A62A;
      z-index: 2;
      -webkit-transition: bottom .3s ease-in-out;
      -o-transition: bottom .3s ease-in-out;
      transition: bottom .3s ease-in-out;
      bottom: 0 !important;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
          -ms-transform: translate(-50%, -50%);
              transform: translate(-50%, -50%); }
      @media screen and (max-width: 480px) {
        .content800296 .container-landing .container-agrimalin {
          min-width: 80%; } }
      .content800296 .container-landing .container-agrimalin:hover {
        bottom: -1rem; }
      .content800296 .container-landing .container-agrimalin::before {
        content: '';
        position: absolute;
        background-image: url(img/sia2018/landing/main-1.svg);
        width: 3rem;
        height: 2.9rem;
        left: 9rem;
        top: 5.6rem;
        z-index: 999; }
      .content800296 .container-landing .container-agrimalin::after {
        content: '';
        position: absolute;
        background-image: url(img/sia2018/landing/main-2.svg);
        width: 3.2rem;
        height: 3.20rem;
        right: 9.2rem;
        top: 5.6rem;
        z-index: 999; }
      .content800296 .container-landing .container-agrimalin .content-anecdote {
        background: white;
        padding: 3rem;
        border-radius: 2rem;
        border: 3px solid #41A62A;
        z-index: 3;
        max-width: 38rem;
        min-height: 13rem;
        position: relative; }
        .content800296 .container-landing .container-agrimalin .content-anecdote .cta-anecdote {
          position: absolute;
          width: 2.5rem;
          height: 2.2rem;
          background-image: url("img/sia2018/landing/refresh.svg");
          top: 1.5rem;
          right: 1.6rem;
          cursor: pointer; }
        .content800296 .container-landing .container-agrimalin .content-anecdote .quote {
          line-height: 2.2rem; }
        .content800296 .container-landing .container-agrimalin .content-anecdote p {
          font-size: 1.6rem;
          font-family: "akrobat-bold", helvetica, arial, sans-serif; }
          @media screen and (max-width: 480px) {
            .content800296 .container-landing .container-agrimalin .content-anecdote p {
              font-size: 1.8rem; } }
      .content800296 .container-landing .container-agrimalin img {
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
        bottom: -7.5rem;
        z-index: 2;
        position: relative;
        z-index: -1; }
