Slack Issue Tracker Parser - Chrome Extension
=============================================

A Google Chrome extension to turn issue tracker numbers into links. For example, you can configure
it to turn issues numbers (e.g.: #1234) into links to the issue on your instance of Redmine, Mantis, etc.

### Installation

1. Save the CRX to computer: https://github.com/caiosba/slack.com.js/raw/master/extension/slack.com.js.crx

2. Open Chrome Extensions: chrome://extensions/

3. Drag and Drop CRX file onto Extensions window

4. The extension will autoupdate via Github but you can click "Update Extensions Now" to force a check/update

5. On the extension options page, define the URL format that fits your issue tracker, putting a '####'
   where the issue number should be located (e.g.: http://mantis.yourdomain.com/view.php?id=####)

6. Reload Slack page

PS: It doesn't work with the Slack app, you need to use the web interface (e.g.: http://*.slack.com)

### Credits

Caio SBA <caiosba@gmail.com>, based on https://github.com/caseman72/slack.com.js.
