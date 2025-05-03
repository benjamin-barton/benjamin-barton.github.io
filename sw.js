/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2025/04/18/模板/属性/index.html","d9e156e4ff5c66653d4fa78200ae999c"],["/2025/05/03/理工/属性/index.html","1626cd17150b25038b42520272531a50"],["/about/index.html","c317be85368f6b6efc63a6db6adc7eb0"],["/archives/2025/04/index.html","a247b918775308b152daf27cc9c0d09f"],["/archives/2025/05/index.html","03de37d266f8b6137a356959139c5cfc"],["/archives/2025/index.html","4099f44ec7664a2c35b45e950719d411"],["/archives/index.html","40a1886412d741230aa58ff7d0e8a24d"],["/baidu_verify_codeva-NH4DxSvRZA.html","59047942a1a9494d138547bf73e7b643"],["/categories/index.html","58588a958112cb63fbb756aff5014484"],["/categories/高等数学/index.html","6e9745f630e4aa59d20475f20d71d4fe"],["/css/index.css","057bd88197103f3eacc0cfe7d5f7ccda"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/gallery/flim/1.jpg","0db6daf98b416521af039c79d6934033"],["/gallery/flim/2.jpg","c7f288adf6bf9fdfb7e6952f02f580df"],["/gallery/flim/3.jpg","de99344d981266615bde328d198f6455"],["/gallery/flim/4.jpg","3813ed88a571032dadfef617bd3ab09b"],["/gallery/flim/5.jpg","ce184234d35c8b474ee9c3af4c705ddc"],["/gallery/flim/6.jpg","96d9a62fb468070a1874ab4cef8488ba"],["/gallery/flim/7.jpg","417ba4adf6ebe1ba0d409d88e041ffb3"],["/gallery/flim/8.jpg","5a86c0ee35943f6cf0a0741f558b121d"],["/gallery/flim/cover.jpg","2734598dc09cc9e1526d1e2bad887036"],["/gallery/flim/index.html","72608a33d278d3ed935117bd32a00f25"],["/gallery/index.html","eb85e05f8ff14dbc503977d35304ac1b"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/butterfly-icon.png","28fa72a4d9b2feea4bb643a12facb7fb"],["/img/error-page.png","7ade9a88a5ced2c311e69b0b16680591"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/rui.png","2cd27bf0581a0f4f7a75bf862de81c97"],["/index.html","1b0dd42ee34e56d87c76c47ab4f83dc4"],["/js/main.js","ab1dddd2229511c7cb6f2275f2f63e99"],["/js/search/algolia.js","75e66239aa7a33ad0218f92e08021a64"],["/js/search/local-search.js","3a22c1b24d57711a7c0566aa2cecf98e"],["/js/tw_cn.js","accbc2ce08ee93a7bc3bc2199f4d0cfd"],["/js/utils.js","8d3507831ac63b0d5fc9c22bc1e87957"],["/lib/canvas-nest/README-zh.html","f6e0aa5cdfbec4128b5ab4e6e6393501"],["/lib/canvas-nest/README.html","88a6edf11db1f997e4be902b722bff12"],["/lib/canvas-nest/dist/canvas-nest.js","064b2f688d695c24d21834d130c54b72"],["/lib/canvas-nest/dist/canvas-nest.umd.js","f511c028bf998498e3866214000e44db"],["/lib/canvas-nest/index.html","364a54990184c9882b6dcf8204322074"],["/lib/canvas-nest/lib/CanvasNest.js","4ec0ef799d7b14fda402badcb0fac164"],["/lib/canvas-nest/lib/iife.js","68c657f7b5209876bba5e643ec85b292"],["/lib/canvas-nest/lib/index.js","a7f6bc2c17dfc5fd4af7aaef303b95ea"],["/lib/canvas-nest/lib/utils.js","e1a75c19405f78065fb0e0e1eb6e10f0"],["/lib/canvas-nest/rollup.config.iife.js","bc1e16da90492e92a9fbfd2849a59323"],["/lib/canvas-nest/rollup.config.umd.js","07356d8452ae4e8b22f4cf7d51073c57"],["/lib/canvas-nest/screenshot.png","72f907c602e82b10d22e4b694c236a3a"],["/lib/canvas-nest/src/CanvasNest.js","011972b152a314428c4ebf0110285f3a"],["/lib/canvas-nest/src/iife.js","3622830eb2b48dfd10fe924eedaac16d"],["/lib/canvas-nest/src/index.js","dfef91a9ee546c6ad1a49586cf55db4b"],["/lib/canvas-nest/src/utils.js","cdd2d86e0271b0f6550bda568b9a7322"],["/music/index.html","630eefdd62c3a0d1474c6aa296592fa6"],["/sw-register.js","b0e2f73391af0bdead8b9bc7971d9b87"],["/tags/index.html","a47c0e4002b739d179277acfd7413498"],["/tags/理工/index.html","c9407ad87ab9486f7338bdfe002db543"],["/things/images/09 (130).jpg","06133b48b0acff63739705c52613d84e"],["/things/images/4.jpg","3813ed88a571032dadfef617bd3ab09b"],["/things/images/pexels-lum3n-44775-406014.jpg","ba2b9a00233a3ee8319053099b31654a"],["/things/images/pexels-nietjuhart-1809344.jpg","c87ba0bb5564c2cfae5ec61c71dd548a"],["/things/images/wechat.jpg","fef3f457b030130bf785253f0d229b74"],["/things/images/xunzhao/1.png","82be2fe01a795245fb036e0bf43a3436"],["/things/images/xunzhao/2.png","37b439d84ea0d082ca720d5d106724a8"],["/things/images/xunzhao/3.png","99770a2971ecacc41b78c230e29d9d2d"],["/things/images/xunzhao/4.png","9dc84db1aaa63a9a017c0f432567f382"],["/things/images/xunzhao/5.png","57563bbad9340712586c78fc691caf0a"],["/things/images/xunzhao/6.png","5ac540699113ec4f82f0517d079f02b3"],["/things/images/xunzhao/7.png","fea2e95bb21b2c5aef6410b7ec2db168"],["/things/images/xunzhao/8.png","8b8d9bb89f59871aed59bac89708c5c6"],["/video/index.html","14327de51304e30190def2c06575ef74"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
