/* commonmark-local.js
 * ===================
 *
 * Common functions for a [CommonMark][1] text to xhtml converter for the
 * [Ability Tools][2] ePub project.
 *
 * [1]: https://raw.githubusercontent.com/jgm/commonmark.js/master/LICENSE
 * [2]: https://sites.google.com/site/abilitytools/
 *
 */


function codeit(a, c) {
  var b = document.getElementById(a).innerHTML || document.getElementById(a).value, b = x1(b);
  document.getElementById(c).innerHTML = b;
  return !1;
};


function x1(a) {
  var c = new commonmark.Parser({safe: true}), b = new commonmark.HtmlRenderer;
  a = c.parse(String.fromCharCode(10) + a);
  return b.render(a);
};


function fsSelectedText() {
  var oSelectedText1 = window.getSelection();
  var sSelectedText1 = oSelectedText1.toString();
  return sSelectedText1;
};


function InitSpeechButton() {
  "speechSynthesis"in window?navigator.onLine?ShowSpeechButton():"OSX"==GetOS()?ShowSpeechButton():"WINDOWS"==GetOS()?ShowSpeechButton():HideSpeechButton():HideSpeechButton()
};


function HideSpeechButton() {
  oHideSpeechButton1 = document.getElementById("speech-gadgets");
  oHideSpeechButton1.style.display="none"
};


function ShowSpeechButton() {
  oShowSpeechButton1 = document.getElementById('speech-gadgets');
  if (GetMobile()=="MOBILE") {oShowSpeechButton1.style.display="none"}
  else {oShowSpeechButton1.style.display = 'block'}
};


function ReadSelectedText(id1) {
/*
The Maximum safe length on Chrome for Linux is roughly 290 characters in English. We chunk the string into an array in
`speak(a)` to ensure that text chunks are under the limit.
*/
  if (id1==null){id1='at-commonmark';}
  if (id1.length==0){id1='at-commonmark';}
  if("speechSynthesis"in window) {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }
    else {
      window.speechSynthesis.cancel();
      s1 = fsSelectedText();
      0<s1.length?speak(s1):speak(document.getElementById(id1).innerText);
    }
  }
  else HideSpeechButton()
};


function aChunkAtUnspokenChar(a) {
  if (0 < a.length) {
    ab = "\r;. ;! ;? ;:; ".split(";");
    var b = ",";
    for (i = 0; i < ab.length && (b = ab(i), -1 == a.indexOf(b)); i++) {
    }
    return a.split(b);
  }
  return a.split("\n");
};


function speak(a) {
  /*
This is a simple implementation.  One could add gadgets to
change language, rate and pitch or pause the reading.
*/
  ab = a.split("\n");
  for (i = 0; i < ab.length; i++) {
    for (d = ab[i], ad = d.split(". "), j = 0; j < ad.length; j++) {
      if (290 > ad[j].length) {
        a = new SpeechSynthesisUtterance, a.lang = document.documentElement.lang, a.text = ad[j], window.speechSynthesis.speak(a);
      } else {
        for (e = ad[j], ae = aChunkAtUnspokenChar(e), k = 0; k < ae.length; k++) {
          a = new SpeechSynthesisUtterance, a.lang = document.documentElement.lang, a.text = ae[k], window.speechSynthesis.speak(a);
        }
      }
    }
  }
};


function GetOS() {
  sUA=navigator.userAgent;
  s2=sUA.toLowerCase();
  var a="";
  return a=-1!=s2.indexOf("linux")?"LINUX":-1!=s2.indexOf("mac os")?"OSX":-1!=s2.indexOf("windows")?"WINDOWS":-1!=s2.indexOf("iphone")?"IOS":-1!=s2.indexOf("android")?"ANDROID":-1!=s2.indexOf("unix")?"UNIX":""
};


function GetMobile() {
  sUA=navigator.userAgent;
  s2=sUA.toLowerCase();
  var a="";
  return a=-1!=s2.indexOf("mobile")?"MOBILE":"DESKTOP"
};


function GetWebEngine() {
  sUA=navigator.userAgent;
  s2=sUA.toLowerCase();
  var a="";
  return a=-1!=s2.indexOf("edge")?"EDGE":-1!=s2.indexOf("googlebot")?"GOOGLEBOT":-1!=s2.indexOf("trident")?"TRIDENT":-1!=s2.indexOf("presto")?"PRESTO":-1!=s2.indexOf("webkit")?"WEBKIT":-1!=s2.indexOf("gecko")?"GECKO":""
};


function sayitem(a) {
  var b = document.getElementById(a).value;
    b = strip(b),speak(b);
  return !1;
};


function strip(a) {
  var b = document.implementation.createHTMLDocument("New").body;
  b.innerHTML = a;
  return b.textContent || b.innerText || "";
};


function qrurlimg(b) {
  var a = location.href;
  -1 != a.indexOf("https://mozillathimblelivepreview.net") && (a = "https://thimbleprojects.org/jimholgate/286460/");
  var c = '<img src="https://chart.apis.google.com/chart?chs=350x350&cht=qr&chl=' + escape(a) + '" class="shadowqr" alt="2D"  />';
  -1 != a.indexOf("https://thimbleprojects.org") && (document.getElementById(b).innerHTML = c);
  -1 != a.indexOf("https://thimble.mozilla.org") && (document.getElementById(b).innerHTML = c);
};
