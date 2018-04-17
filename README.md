## URL Image Optimiser

This service is powerd by [Node JS](https://nodejs.org/en/) and set to perform image optimization that defined within an img tag from a specified URL. Optimisation will be attempted for images of the following types ```.jpg .png .gif .svg```. Service utilizes [imagemin](https://github.com/imagemin/imagemin) along with following plugins: [imagemin-jpegtran](https://github.com/imagemin/imagemin-jpegtran),  [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant),  [imagemin-gifsicle](https://github.com/imagemin/imagemin-gifsicle),  [imagemin-svgo](https://github.com/imagemin/imagemin-svgo).

[Try URL Image Optimiser - https://www.webimageoptimization.com](https://www.webimageoptimization.com/)

Optimized images, with a size less than the original image size, will only be displayed in the results. Images can be viewed for comparison with it's original and also available for download as a single file or as a .zip archive. 

By default services using default plugin settings, however you can specify different to optimization options for following image formats ```.jpg .png .gif``` formats. Optimised images only available during the next 24 hours and will be deleted after that period. 

See [API Docs](https://webimageoptimization.com/api-docs) for individual image optimization via GET request.




![URL Image Optimiser](https://raw.githubusercontent.com/alexpechkarev/url-image-optimiser/master/url-image-optimiser.png)


### Support
-------
Have you seen something that looks like a mistake or would like to suggest an improvement ?
[Open an issue on GitHub](https://github.com/alexpechkarev/url-image-optimiser/issues)


### License
-------

URL Image Optimiser is released under the MIT License. See the bundled
[LICENSE](https://github.com/alexpechkarev/url-image-optimiser/blob/master/LICENSE)
file for details.
