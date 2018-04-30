## URL Image Optimiser

### The Web Image Optimization service is powered by Node JS and employ [imagemin](https://github.com/imagemin/imagemin),[imagemin-mozjpeg](https://github.com/imagemin/imagemin-mozjpeg),[imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant),[imagemin-svgo](https://github.com/imagemin/imagemin-svgo),[imagemin-gifsicle](https://github.com/imagemin/imagemin-gifsicle) libraries to efficiently compress images.

- [API Optimizer](#api_optimizer)
- [API Examples](#api_example)
- [API Optional Parameters](#api_parameters)
- [URL Optimizer](#url_optimizer)

Images are important part of online strategy and can help to drive more visitors to a website. Simple design yield best performance results, but on the other hand ["a picture paints a thousand words"](https://en.wiktionary.org/wiki/a_picture_paints_a_thousand_words) and it is a challenge to find well balanced image optimization solution.

Often most downloaded bytes on the page credit towards images. Having image optimization strategy in place will reduce number of bytes for web browser to download and gain performance benefits. 

Further more image optimization process should be efficient and automated.

Following articles [Image Optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization) by Ilya Grigorik and [Automating image optimization](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/automating-image-optimization/) by Addy Osmani describes in details aspects of image optimization.

The Web Image Optimization service offering following approaches to perform image optimization.

### <a name="api_optimizer"></a> API Optimizer
Optimize images on the fly via API
The API offers quick and seamless start by simply prepending image `src` with API endpoint.

Image
```html
<img src="https://myweb.com/image.jpg">
```
API endpoint:
```php
https://www.webimageoptimization.com/api/v1/?url=
```

Optimizing Image via API
```html
<img src="https://www.webimageoptimization.com/api/v1/?url=https://myweb.com/image.jpg">
```
The API serves optimised `SVG`, `GIF`, `PNG` and `JPEG` formats, optional optimisation parameters available.

Image response is cached, meaning the optimised image is served for all future uses. There is no need to run a bulk process of your current images, using the API optimises the images on the fly.

Benefit of optimising your images using the API will boost your websites page speed helping your websites technical SEO, which is a factor in the core Google algorithm. As the API does everything on the fly, you do not need to worry about image optimisation as you continue to add new content to the website, taking the headache away.


### <a name="api_example"></a> API Examples

Optimizing image via API

```html

<img src="https://www.webimageoptimization.com/api/v1/?url=https://www.myweb.com/image.jpg">

```

Optimizing image via API with optional parameters

```html

<img src="https://www.webimageoptimization.com/api/v1/?url=https://www.myweb.com/image.jpg&options={"jpg": {"quality": 75,"tune": "psnr"}}">

```


#### <a name="api_parameters"></a>  API Optional Parameters

##### JPEG Default Values
For plugin details see [imagemin-mozjpeg](https://github.com/imagemin/imagemin-mozjpeg)

| Name            | Type    | Default     | Description                                               |
| :-------------- |:-------:| :-----------:|:---------------------------------------------------------|
| `quality`       | Number  | 75          | Compression quality, in range 0 (worst) to 100 (perfect)  |
| `progressive`   | Boolean | true        | Creates baseline JPEG file |
| `targa`         | Boolean | false       | Input file is Targa format (usually not needed) |
| `revert`        | Boolean | false       | Revert to standard defaults instead of mozjpeg defaults |
| `fastCrush`     | Boolean | false       | Disable progressive scan optimization|
| `dcScanOpt`     | Number  | 1           | Set DC scan optimization mode 0 to 2|
| `trellis`       | Boolean | true        | Trellis optimization|
| `trellisDC`     | Boolean | true        | Trellis optimization of DC coefficients|
| `dct`           | String  | int         |	Set DCT method, use `int`, `fast` or `float`|
| `tune`          | String  | hvs-psnr    |	Set Trellis optimization method. Available methods: `psnr`, `hvs-psnr`, `ssim`, `ms-ssim`|
| `overshoot`     | Boolean | true        |	Black-on-white deringing via overshoot|
| `arithmetic`    | Boolean | false       |	Use arithmetic coding|
| `quantBaseline` | Boolean | false       |	Use 8-bit quantization table entries for baseline JPEG compatibility|
| `quantTable`    | Number  | 0           |	Predefined quantization table, use 0 to 5|


##### PNG Default Values
For plugin details see [imagemin-pngquant](https://github.com/imagemin/imagemin-pngquant)

| Name            | Type    | Default     | Description                                               |
| :-------------- |:-------:| :-----------:|:---------------------------------------------------------|
| `floyd`         | Number, Boolean  | 0.5 | Controls level of dithering (0 = none, 1 = full) |
| `nofs`          | Boolean | false        | Disable Floyd-Steinberg dithering |
| `posterize`     | Number  | 2            | Reduce precision of the palette by number of bits. Posterization should be number in range 0-4|
| `quality_min`   | Number | 65            | Instructs pngquant to use the least amount of colors required to meet or exceed the max quality. Numbers in range 0 (worst) to 100 (perfect) |
| `quality_max`   | Number | 80           | 	Instructs pngquant to use the least amount of colors required to meet or exceed the max quality. Numbers in range 0 (worst) to 100 (perfect)|
| `speed`         | Number  | 3           | Speed/quality trade-off from 1 (brute-force) to 10 (fastest)|



##### GIF Default Values
For plugin details see [imagemin-gifsicle](https://github.com/imagemin/imagemin-gifsicle)

| Name            | Type    | Default     | Description                                               |
| :-------------- |:-------:| :-----------:|:---------------------------------------------------------|
| `interlaced`    | Boolean | false        | Interlace gif for progressive rendering|
| `optimizationLevel`| Number  | 1         | Higher levels take longer, but may have better results. Set an optimization level between 1 and 3|


#### <a name="url_optimizer"></a> URL Optimizer
Scan and optimize images from specified URL
Scan given URL and perform image optimization defined within an img tag.

Optimized images, with a size less than the original image size, displayed in the results.

Optimized images can be viewed for comparison with it's original image and available for download as a single file or as a `.zip` archive.

Serves optimised `SVG`, `GIF`, `PNG` and `JPEG` formats, optional optimisation parameters can also be specified.

Optimised images only available during the next 24 hours and will be deleted after that period.

![URL Image Optimiser](https://raw.githubusercontent.com/alexpechkarev/url-image-optimiser/master/url-image-optimiser.png)


### Support
-------
Have you seen something that looks like a mistake or would like to suggest an improvement ?
[Let me know](https://github.com/alexpechkarev/url-image-optimiser/issues)


### License
-------

URL Image Optimiser is released under the MIT License. See the bundled
[LICENSE](https://github.com/alexpechkarev/url-image-optimiser/blob/master/LICENSE)
file for details.

