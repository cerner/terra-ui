# Terra UI Component Standards

## Cross-Browser Support

Components should be tested and work in the following browsers.

### Desktop Browsers

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Edge  | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11_48x48.png" alt="IE / Edge" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>IE | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari |
| --------- | --------- | --------- | --------- | --------- |
| last 2 versions | last 2 versions | last 2 versions | IE10, IE11| last 2 versions |

### Mobile Browsers

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Chrome for Android | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios_48x48.png" alt="Safari" width="24px" height="24px" />](http://godban.github.io/browsers-support-badges/)</br>Safari for iOS |
| --------- | --------- |
| last 2 versions | iOS >= 10 |

A list of the exact browsers this currently includes can be [found here](http://browserl.ist/?q=iOS+%3E%3D+10%2C+last+2+and_chr+versions%2C+last+2+android+versions%2C+last+2+chrome+versions%2C+last+2+edge+versions%2C+last+2+firefox+versions%2C+last+2+ie+versions%2C+last+2+safari+versions).

## Responsive Support

Components should work responsively without introducing horizontal scrollbars on resize.

Terra components are built following the mobile-first approach and utilize the following media query breakpoints:

 - Default: 0+
 - Tiny: 544px+
 - Small: 768px+
 - Medium: 992px+
 - Large: 1216px+
 - Huge: 1440px+

## Mobile Support

Components should:
* Support gestures when possible (swiping / pinching)
* Not use hover events
* Avoid small tap target sizes

## Accessibility (A11y)

We should strive to make components accessible. Use the following guides to help build accessible components.
* [WCAG 2.0](https://www.w3.org/TR/WCAG20/)
* [Section 508](https://www.access-board.gov/guidelines-and-standards/communications-and-it/about-the-ict-refresh/final-rule/text-of-the-standards-and-guidelines)
* [Color Contrast Checker](http://webaim.org/resources/contrastchecker/)

Components should support keyboard navigation.

All functionality that is available by mouse or touch should also be available by keyboard. Keyboard operation is possible by moving to ('focusing') interactive elements and activating them using keystrokes.

The important keys for testing are:

* `Tab` for moving focus to the next interactive element
* `Shift` + `Tab` for moving focus to the previous interactive element
* `Enter` and/or `Space` for activating (i.e. pressing/clicking) the interactive element
* `←` and/or `→` for moving focus within tabs and some other custom controls
* `Esc` for closing menus, dialogs, and popups

Test with screen readers:

* [VoiceOver](https://help.apple.com/voiceover/info/guide/10.12/) on Mac / Safari
* [Narrator on Windows](https://support.microsoft.com/en-us/help/17173/windows-10-hear-text-read-aloud)

## CSS

Components should follow [https://sass-guidelin.es/](https://sass-guidelin.es/) and our [CSS conventions](#/contributing/terra-ui/conventions) for Terra UI.

## JavaScript

Components should follow [Airbnb javascript style guide](https://github.com/airbnb/javascript) and our [JS conventions](#/contributing/terra-ui/conventions) for Terra UI.

## Testing

Components should include [Jest](https://github.com/facebook/jest) tests and [Webdriver.io](http://webdriver.io/) tests and follow our [testing conventions](#/contributing/terra-ui/conventions) for Terra UI.

## Internationalization (I18n) Support

Components should be internationalized and support the following locales:

* `ar`
* `de`
* `en-GB`
* `en-US`
* `en`
* `es-ES`
* `es-US`
* `es`
* `fr-FR`
* `fr`
* `nl-BE`
* `nl`
* `pt-BR`
* `pt`
* `sv`
* `sv-SE`

### LTR / RTL Support

Components should support both LTR and RTL directionalities. This is largely handled by our use of [postcss-rtl](https://github.com/vkalinichev/postcss-rtl). When working on CSS changes, be sure to test in RTL.