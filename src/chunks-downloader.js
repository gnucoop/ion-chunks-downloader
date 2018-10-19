'use strict';
/* global cordova */
angular.module('ion-chunks-downloader', ['ionic'])
    .factory('$chunksDownloaderService', function() {
        function ChunksDownloaderService() {};

        ChunksDownloaderService.prototype.download = function(chunks, filename) {
            return new Promise(function(resolve, reject) {
                if (!plugins.chunksDownloaderPlugin) {
                    reject('Chunks Downloader Plugin not available!');
                }
                plugins.chunksDownloaderPlugin.download(
                    chunks, filename,
                    function(status) {
                        if (status['downloadedFileUrl']) {
                            resolve(status.downloadedFileUrl);
                        }
                    },
                    function(err) {
                        reject(err);
                    }
                );
            });
        }
        return new ChunksDownloaderService();
    });
