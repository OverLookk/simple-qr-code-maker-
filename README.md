# QR Code Generator Bookmarklet

## Overview

This bookmarklet is a lightweight tool that generates a QR code for the URL of the current open webpage. It allows you to quickly create a QR code for easy sharing or scanning.

## How to Use

1. Create a new bookmark in your browser's bookmarks bar.
2. Edit the bookmark's URL and replace it with the following JavaScript code:

   ```javascript
   javascript:(function(){
     var currentURL = window.location.href;
     var apiURL = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(currentURL) + '&size=150x150';
     window.open(apiURL, '_blank');
   })();
