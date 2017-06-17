
# Ability Tools for Thimble #

Create interactive accessible web pages quickly and easily.

This document will help you make your web page and help you read it aloud
on your computer.

## Summary ##

+ Start at the [project page][1].
+ Click **Remix**
+ Check out the formatting of the text in the **Editor** pane
and how it relates to the **Preview** pane on the right of the screen.
+ Edit the CommonMark text between the 
`<pre id="commonmark" class="at-code">` and
`</pre>` tags. If you make a mistake, click **Undo**.
+ Need help? Read more about [CommonMark][2].
+ Click the **Refresh** button at the top of the preview pane.
+ When you are finished editing, create a new title by editing the
text between the `<title>` and `</title>` tags near the top of the editor pane.
+ Click **Publish**.
+ When you have published the document, you can check out the published
document by clicking the link under **Here's a link you can share**.

## About the new document ##

+ Get the computer to read the notes of a page aloud by clicking the
speech balloon at the bottom of the window.
+ Access the page with a mobile device by scanning the square 2D code
image with a mobile scanner application like [Scan][3] or [Zxing][4].
+ Remix your new page as you like. Experiment with styles and images.

## Teacher notes ##

### Quick start ###

+ Start at the [project page][5]
+ Click **Remix**.
+ Edit the CommonMark text between the 
`<pre id="commonmark" class="at-code">` and
`</pre>` tags. If you make a mistake, click **Undo**.
+ Click **Publish**.
+ Your can share your page with students as an
assignment sheet, or get them to use it as a 
template to remix.
+ Print or project the **QR Code** that appears
at the bottom of the page to share on mobile
devices.
+ To collect student work or track their
learning portfolios, scan the **QR Codes**
at the bottom of their pages or have them
send you the addresses of their remixes.
+ Students can delete their projects at any
time, but not remixes of their projects.
Therefore, you may want to periodically
clone students' pages by clicking **Remix**
so that you have an on-going record
for formative evaluation.

### About ###

This is designed as a [Discipline-Based Inquiry Study][6]
for [*Mozilla* *Thimble*][7], a free platform that helps 
students learn about web site design and programming.  The
project uses a 2D code, also called a *QR Code*, to make it
easy to share and collaboratively edit pages on mobile devices.
As well, if you use the page with learners who have difficulty
reading they can take advantage of a speech synthesis button 
at the bottom of the page on most modern browsers like 
*Chrome*, *Chromium*, *Edge* (Windows 10), *FireFox*, *Opera*
and *Safari* (MacOS).

### Privacy ###

Normally users set up an account using their e-mail address and a new
password.  If students for one reason or another cannot obtain an
e-mail address, you could use a class e-mail address and set up each
student with a project that uses the class account and an automatically
generated sequence number.  For example:

```
https://thimbleprojects.org/correcthorsebatterystaple/286460/
```
Anyone with the *[exact URL](https://xkcd.com/936/)* can read and
remix the content, but they cannot identify the student unless there
is particular  content in the project that allows it.  Be aware of 
privacy policies of your institution and the laws that relate to
students in your care.  Thimble is open source, so you can host it
on a local network.

### Publishing ###

This is an advanced web application, so it may not work as quickly
as a dedicated desktop editor.  If you do not have a quick or reliable
Internet connection, you can download the project as a zip file, then
edit the text files off-line using any plain text editor that can
save files in utf-8 format. 

You can write [CommonMark][8] plain text on almost any device, then
paste it into the appropriate section onto a project's index page. 
Many blogging platforms allow you to use CommonMark text to post 
messages. You can convert CommonMark to HTML [on-line][9] or by using
an off-line text conversion program like [pandoc][10]. 

You can publish CommonMark files directly in Thimble. Edit CommonMark
text using a plain text editor like bluefish, gedit, notepad or xcode.
Rename the file with an `.md` extension. Go to your Thimble project page,
click **New File**, then upload the md file.  Thimble automatically
creates an HTML file with the same file name.  You can edit the CommonMark
file in the editor and link to the HTML document just like on any other page.

#### Resizing images ####

Most mobile cameras produce very high resolution pictures that you should
reduce in size before transferring to the web application.  Large images
can affect Thimble editor's performance or slow down the display of the
web page on a mobile browser.

On MacOS computers, you can use the `sips` command to
reduce image size. A maximum image dimension of 560 pixels is a good
medium resolution size for mobile site images. Note that `sips` modifies
the image, so if you want to save the original size images, work on
copies.

```
cd ~/Desktop/OurImageCopies/
sips -Z 560 *.jpg
```
On other platforms, the command to use depends on the programs and packages
that you have installed.  On Linux, `convert` from the `imagemagick` package
works well.
```
convert image_camera.jpg -resize 25% -auto-orient image_web.jpg
```
Current versions of MS Paint for Windows can open, resize and save `.jpg` and
`.png` files. A quick and dirty method of quickly reducing image size is to display the
image full screen, hit the **Print screen** button, open MS Paint, and paste the clipboard (`ctrl+v`).

If you have access to a compatible version of PowerShell for 
Windows, then you can resize image files with a `ps1` script.

```
## NOTE: image/bmp, image/gif, image/png, image/jpeg and image/tiff 
## are supported in this script, but Windows specific `wmp` files are not.
## The script should have a `ps1` extension in the form `resize-png.ps1`
## Only use plain ASCII characters in the path and file name.
## `image/jpeg` file names must use the `jpeg` file extension.

param($source = "C:\pathfrom\Blackboard.png", $destination = "C:\path2\Blackboard.jpeg", $scale = 0.25)
Add-Type -Assembly PresentationCore

## Transform the image data
$image = New-Object System.Windows.Media.Imaging.TransformedBitmap (New-Object System.Windows.Media.Imaging.BitmapImage $source), (New-Object System.Windows.Media.ScaleTransform $scale,$scale)

## Create an image file:
$stream = [System.IO.File]::Open($destination, "OpenOrCreate")
$encoder = New-Object System.Windows.Media.Imaging.$([IO.Path]::GetExtension($destination).substring(1))BitmapEncoder
$encoder.Frames.Add([System.Windows.Media.Imaging.BitmapFrame]::Create($image))
$encoder.Save($stream)
$stream.Dispose()
```
#### Hiding the QR code and speech button ####

If you prefer not to embed a QR Code image and speech balloon, you can 
omit them by changing the line in **index.html** that reads
```
<body onload="codeit('commonmark','at-commonmark'); InitSpeechButton(); qrurlimg('qrimg')">
```
to

```
<body onload="codeit('commonmark','at-commonmark')">
```

and deleting the following section from the page:

```
<button onclick="ReadSelectedText('at-commonmark')" title="Read the selection" class="speech-button" id="speech-play-button">
<svg
xmlns:dc="http://purl.org/dc/elements/1.1/"
xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
xmlns:svg="http://www.w3.org/2000/svg"
xmlns="http://www.w3.org/2000/svg"
version="1.1"
width="26"
height="26"
id="svg2"
style="font-size:12px;font-style:normal;font-weight:normal;fill:#000000;fill-opacity:1;stroke:#000000;stroke-width:1;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:10;stroke-opacity:1;stroke-dasharray:none;stroke-dashoffset:0;font-family:Dialog">
<defs id="genericDefs" />
<g transform="matrix(0.09813386,0,0,0.13449553,-1.2713641,-14.85863)" id="g5"
style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-opacity:1">
<g id="g7"
style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-opacity:1">
<path d="m 273.7969,190.9688 q 0,24.6093 -27.1407,42.8906 -20.25,13.7812 -49.6406,20.8125 -22.2187,5.3437 -51.1875,5.3437 -21.5156,0 -41.4843,-4.5 -4.2188,16.1719 -23.4844,25.1719 Q 64.9688,288 45.8438,288 q -18.5626,0 -31.6407,-17.7188 43.3125,-1.8281 41.9063,-32.7656 -33.3282,-21.375 -33.3282,-46.6875 0,-21.7969 20.3907,-38.1093 38.6719,-30.7969 105.0469,-30.7969 59.0624,0 98.1562,26.0156 27.4219,18.2813 27.4219,43.0313 z m -6.8907,0 q 0,-24.1876 -30.7968,-41.7657 -23.7656,-13.6406 -52.7344,-17.7187 -18.7031,-2.6719 -35.2969,-2.6719 -66.375,0 -103.7812,31.6406 -15.0469,12.6563 -15.0469,30.375 0,24.0469 28.9688,40.2188 1.5468,0.5625 3.9374,2.25 0.8438,1.125 0.8438,4.6406 0,30.375 -35.0156,37.6875 7.875,5.9062 17.7187,5.9062 18.7031,0 33.8907,-7.7343 18.7031,-9.5625 18.9843,-26.4375 22.6407,5.7656 49.2188,5.7656 61.4531,0 98.7187,-27.1406 20.3906,-14.9063 20.3906,-35.0156 z" id="path9" style="fill:#000000;fill-opacity:1;stroke:#000000;stroke-opacity:1" />
</g>
</g>
</svg>
</button>
<div id="qrimg"></div>

```
### Readability ###

+ The [Readability](https://readable.io/text/) score for
**index.html** instructions averages **4.1**.
+ The [Readability](https://readable.io/text/) score for
**tutorial.html** instructions averages **4.8**.

### Known issues ###

CommonMark, used in this application, is a strictly defined 
language based on MarkDown. CommonMark adds some features, 
and omits other features of MarkDown. This normally does not
make a difference, but it could render tables, code, MathML
and other advanced features differently than the default 
MarkDown converter for Thimble does.

XHTML, also used in this application, is a strictly typed 
version of HTML.  XHTML shows an error message in most browsers
if there is incorrect code, rather than trying to guess what the
author meant.  Therefore the output may not display correctly
if there are coding errors even if the errors are minor.  The
greater than and less than symbols behave differently in HTML
and XHTML - in XHTML they must always be encoded as `&#60;` and
`&#62;`, even in `pre` strings.

### Multilingual speech

If you write in French or another language that uses accents or
extended characters, and you are using Windows Notepad, make
sure you save the file encoded as text encoded utf-8. Most 
modern mobile and Posix platforms use utf-8 encoded text 
exclusively.

To change the language of the speech synthesiser to French,
change the tags in the **index.html** source from 
`<html xmlns="http://www.w3.org/1999/xhtml" lang="en-CA" xml:lang="en-CA">`
to `<html xmlns="http://www.w3.org/1999/xhtml" lang="fr" xml:lang="fr">`.
On some computers, you may need to set the language and region or install
a new voice or language package to get the computer to speak in French.

### Related projects ###

+ [App Inventor][11]
+ [CodePen][12]
+ [CommonMark][13]
+ [DaringFireball][14]
+ [GitHub Pages][15]
+ [JSFiddle][16]
+ [Scratch][17]
+ [Thimble Source Code][18]
+ [ZenPen][19]

### Contribute ###

Have you fixed a bug? Added a feature? Clarified instructions?

Fork, Clone and Remix it on [GitHub](https://github.com/jimholgate/);
then request a pull.

### Note ###

The word “QR Code” is registered trademark of [DENSO WAVE
INCORPORATED][20] in the following countries: Japan, United States of
America, Australia and Europe.  Other program names identified with
*emphasized* text are trademarks of their respective organizations. 


[1]: https://thimbleprojects.org/jimholgate/286916/
[2]: http://commonmark.org
[3]: https://www.scan.me/
[4]: https://play.google.com/store/apps/details?id=com.google.zxing.client.android
[5]: https://thimbleprojects.org/jimholgate/286916/
[6]: http://galileo.org/rubric.pdf
[7]: https://thimble.mozilla.org/en-US/features
[8]: http://commonmark.org
[9]: http://spec.commonmark.org/dingus/
[10]: http://pandoc.org
[11]: http://appinventor.mit.edu/explore/
[12]: https://codepen.io/pen/
[13]: http://commonmark.org
[14]: https://daringfireball.net/projects/markdown/dingus
[15]: https://pages.github.com/
[16]: https://jsfiddle.net/api/mdn/
[17]: https://scratch.mit.edu/
[18]: https://github.com/mozilla/thimble.mozilla.org/
[19]: http://www.zenpen.io/
[20]: http://www.denso-wave.com/en/adcd/
