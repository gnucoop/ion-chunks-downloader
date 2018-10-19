# Installation

1. Install cordova plugin:
    ```bash
    ionic cordova plugin add https://github.com/gnucoop/cordova-plugin-chunks-downloader.git
    ```

2. Install bower module
    ```bash
    bower install --save https://github.com/gnucoop/ion-chunks-downloader.git
    ```

3. Import the `ion-chunks-downloader` javascript.
    ```html
   <script src="lib/ion-chunks-downloader/release/ion-chunks-downloader.min.js"></script>
   ```

4. Add `ion-chunks-downloader` as a dependency on your Ionic app:
    ```javascript
   angular.module("myApp", ["ionic", "ion-chunks-downloader"]);
   ```

# Usage

Inject the `$chunksDownloaderService` and call download method
```javascript
angular.module('myModule', ['ion-chunks-downloader'])
    .run(function($chunksDownloaderService) {
        var chunks = [
            'https://example.com/chunk1',
            'https://example.com/chunk2'
            'https://example.com/chunk3'
        ];
        var fileName = 'mergedFile.jpg'
        $chunksDownloaderService
            .download(chunks, fileName)
            .then(function(mergedFileUri) {
                // DO SOMETHING WITH MERGED FILE
            })
            .catch(console.log);
    });
```
