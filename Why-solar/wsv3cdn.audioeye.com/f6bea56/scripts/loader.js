/*jslint browser: true, multivar: true */

if (window.__AudioEyePerformance) {
    window.__AudioEyePerformance.loaderJsStartTime = performance.now();
}


var aecb = "123123123";
var pscb = '';

function loadScript(path) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = path;
    document.body.appendChild(script);
}

var scriptBaseUrl = '//wsv3cdn.audioeye.com/f6bea56/build';

var scriptsToLoad = [
    'jquery.bundle.js'
];

for (var i = 0; i < scriptsToLoad.length; i++) {
    loadScript(scriptBaseUrl + '/' + scriptsToLoad[i] + '?cb=' + aecb);
}

var loaderFunction = function(tries) {
    if (!window.ae_jQuery) {
        var wait = 100;
        if (tries > 50) {
            wait = wait * tries;
        }
        setTimeout(function() {
            loaderFunction(++tries)
        }, wait);
        return;
    }

    window.__AudioEyeLoaderStartTime = new Date().getTime();
    // Singleton pattern: if the loader has already run, do not overwrite.
    if (window.AudioEye && window.AudioEye.version !== undefined) {
        return;
    }

    // declare define here so that when jquery is imported in startupRoutine.js it will
    // find this define instead of any global define that a customer might use
    var define = function() {};

    window.AudioEye = {};


    // legacy check for AudioEye DAP scan. Do not continue if true
    if (navigator.userAgent.indexOf("AudioEye") !== -1) {
        return;
    }


    var options = {};
    var protocol = "https:";
    var device = "desktop";
    var site_id = null;



    var options = {
            "admin": {
                "service": true,
                "aria-label": {
                    "en": "AudioEye portal"
                },
                "at-message": {
                    "en": "AudioEye portal login"
                },
                "cancel": {
                    "en": "Cancel"
                },
                "popup_content_opening": {
                    "en": "Opening the Admin Panel requires the page to reload"
                },
                "popup_content_closing": {
                    "en": "Closing the Admin Panel requires the page to reload"
                },
                "popup_title": {
                    "en": "Confirm reload"
                },
                "reload": {
                    "en": "Reload"
                },
                "tooltip-title": {
                    "en": "Admin Panel"
                }
            },
            "helpers": {
                "service": true
            },
            "compliance": {
                "service": true,
                "auto-remediations": true,
                "manual-remediations": true,
                "smart-remediations": true,
                "edge-remediations": false,
                "skip-remediations": "",
                "skipto_main-content-link": false,
                "tab-triggers-outline": false,
                "live-monitoring-limit": "1",
                "skipto_main-link-text": {
                    "en": "Skip to Main Content"
                },
                "aria-landmarks": {
                    "banner": "",
                    "search": "",
                    "content": "",
                    "complementary": "",
                    "contentinfo": ""
                },
                "aria-live": {
                    "polite": "",
                    "assertive": "",
                    "live": "",
                    "alert": ""
                },
                "new_window_text": {
                    "en": "Opens a New Window."
                },
                "accessible-carousel-link-text": {
                    "en": "Accessible Carousel"
                },
                "accessible-carousel-link-label": {
                    "en": "Accessible Carousel"
                },
                "disabled-carousel-message": {
                    "en": "Original carousel disabled. Use accessible carousel or refresh page to access."
                }
            },
            "external-links": {
                "service": true,
                "interface": {
                    "popup_title": {
                        "en": "Confirm Navigation"
                    },
                    "popup_content2": {
                        "en": "You are navigating away from the <span class=\"notranslate\">[[site-name]]<\/span> website. <span class=\"notranslate\">[[site-name]]<\/span> does not own, operate, or control the link or its content. <span class=\"notranslate\">[[site-name]]<\/span> is not responsible for the content of the external website. Privacy and security policies of the external website may differ from those practiced by <span class=\"notranslate\">[[site-name]]<\/span>."
                    },
                    "popup_content": {
                        "en": "By activating 'Continue' below, you acknowledge the previous statement and will be taken to the external website. If you want to remain on this website, activate 'Cancel'."
                    },
                    "popup_content3": {
                        "en": "By activating 'Continue' below, you will open a new window of AudioEye. If you want to remain on the same page, activate 'Cancel'."
                    },
                    "cancel": {
                        "en": "Cancel"
                    },
                    "continue": {
                        "en": "Continue"
                    }
                }
            },
            "launcher": {
                "service": true,
                "pre-opt-in-messaging": {
                    "at-message": {
                        "en": "This website is AudioEye enabled and is being optimized for accessibility. Additionally, free web personalization tools have been provided via the AudioEye Toolbar, which may be enabled from the Accessibility Statement link found on this page."
                    }
                },
                "position": "right-lower",
                "opt-in": false,
                "at-message": {
                    "en": "This website is AudioEye enabled and is being optimized for accessibility. To open the AudioEye Toolbar, press shift + =. The toolbar contains the following"
                },
                "aria-label": {
                    "en": "Accessibility options"
                },
                "tooltip-title": {
                    "en": "Explore your accessibility options."
                },
                "preview-mode-message": {
                    "en": "AudioEye is in preview mode. Some functionality will be limited."
                },
                "preview-mode-modal-close": {
                    "en": "Close"
                },
                "preview-mode-modal-title": {
                    "en": "Preview Mode"
                },
                "cta-color": "#1275B3",
                "at-messages": {
                    "admin": {
                        "en": "AudioEye portal login"
                    },
                    "launcher": {
                        "en": "This website is AudioEye enabled and is being optimized for accessibility. To open the AudioEye Toolbar, press shift + =. The toolbar contains the following"
                    },
                    "toolbar": {
                        "en": "AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."
                    },
                    "helpdesk": {
                        "en": "The AudioEye Help Desk to report accessibility and usability related issues."
                    },
                    "reader": {
                        "en": "The Reader tool to customize the visual display of this site."
                    },
                    "lite-reader": {
                        "en": "AudioEye Visual Toolkit"
                    },
                    "voice": {
                        "en": "The Voice (beta) tool to control and interact with this site using your voice."
                    },
                    "player": {
                        "en": "The Player tool to listen to this site read aloud. The Player is not intended as a substitute for your screen reader."
                    }
                }
            },
            "toolbar": {
                "service": true,
                "color": {
                    "background": "#252930",
                    "foreground": "#96a0ab"
                },
                "at-message": {
                    "en": "AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."
                },
                "aria-label": {
                    "en": "AudioEye Toolbar. Explore the tools below or press escape to quit the toolbar."
                },
                "theme": "light"
            },
            "site-menu": {
                "service": false,
                "aria-label": {
                    "en": "Site Menu. Press enter or use n key to turn on or off."
                },
                "tooltip-title": {
                    "en": "Site Menu"
                },
                "tooltip-keycommand": {
                    "en": "(press N)"
                },
                "selectors": {
                    "main-menu": {
                        "label": {
                            "en": "Main Menu"
                        },
                        "selector": "",
                        "link": false,
                        "search-algorithm": "default"
                    },
                    "utility-menu": {
                        "label": {
                            "en": "Utility Menu"
                        },
                        "selector": "",
                        "link": false,
                        "search-algorithm": "default"
                    },
                    "aside-menu": {
                        "label": {
                            "en": "Asides"
                        },
                        "selector": "",
                        "link": false,
                        "search-algorithm": "default"
                    },
                    "footer-menu": {
                        "label": {
                            "en": "Footer Menu"
                        },
                        "selector": "",
                        "link": false,
                        "search-algorithm": "default"
                    },
                    "other-menu": {
                        "label": {
                            "en": "Other Menus"
                        },
                        "selector": "",
                        "link": false,
                        "search-algorithm": "default"
                    },
                    "additional-menus": [{
                        "label": {
                            "en": ""
                        },
                        "selector": "",
                        "link": false,
                        "search-algorithm": "default"
                    }]
                },
                "search-algorithms": {
                    "default": "Default"
                }
            },
            "rotor": {
                "service": true,
                "aria-label": {
                    "en": "Page Elements Menu. Press enter or use d key to turn on or off."
                },
                "tooltip-title": {
                    "en": "Page Elements Menu"
                },
                "tooltip-keycommand": {
                    "en": "(press D)"
                },
                "skipto_rotor-link": false
            },
            "persist-settings": {
                "service": false,
                "persist": false
            },
            "user-settings": {
                "service": true,
                "aria-label": {
                    "en": "Settings Menu. Press enter or use s key to turn on or off."
                },
                "tooltip-title": {
                    "en": "Settings"
                },
                "tooltip-keycommand": {
                    "en": "(press S)"
                }
            },
            "help": {
                "service": true,
                "aria-label": {
                    "en": "Help Menu. Press enter or use question mark key to turn on or off."
                },
                "tooltip-title": {
                    "en": "Help"
                },
                "tooltip-keycommand": {
                    "en": "(press ?)"
                }
            },
            "helpdesk": {
                "service": true,
                "at-message": {
                    "en": "The AudioEye Help Desk to report accessibility and usability related issues."
                },
                "aria-label": {
                    "en": "AudioEye Help Desk. To report accessibility and usability related issues, press enter or use h key to turn on or off."
                },
                "tooltip-title": {
                    "en": "Help Desk"
                },
                "tooltip-keycommand": {
                    "en": "(press H)"
                }
            },
            "certification": {
                "service": true,
                "version": "5",
                "versionlist": {
                    "3": "Partner Pro",
                    "4": "Pro Commitment Statement",
                    "5": "Managed"
                },
                "tooltip-title": {
                    "en": "Certification"
                },
                "tooltip-keycommand": {
                    "en": "(press B)"
                },
                "trusted_title": "",
                "aria-label": {
                    "en": "AudioEye Certification Statement. Press enter or use b key to turn on or off."
                },
                "at-message": {
                    "en": "The AudioEye Certification Statement to explain the ongoing web accessibility and usability enhancements for this website."
                }
            },
            "lite-reader": {
                "service": true,
                "aria-label": {
                    "en": "AudioEye Visual Toolkit"
                },
                "at-message": {
                    "en": "AudioEye Visual Toolkit"
                },
                "tooltip-title": {
                    "en": "Visual Toolkit"
                },
                "tooltip-keycommand": {
                    "en": "(Press T)"
                }
            },
            "excludes": "",
            "timers": "",
            "carousels": [{
                "carousel": "",
                "slides": "",
                "link": false,
                "click-proxy": false,
                "next_slide": {
                    "en": "Next Slide"
                },
                "prev_slide": {
                    "en": "Previous Slide"
                },
                "slide_count": {
                    "en": "Slide {{num}} of {{total}}"
                }
            }],
            "tabsets": {
                "tabset": "",
                "tabs": "",
                "active-tab": "",
                "content": ""
            },
            "pc_preset": "custom-mode",
            "live-monitoring": {
                "limit": 1,
                "service": true
            },
            "ga-account": "",
            "startup_modules": ["launcher", "compliance"],
            "languages": {
                "aliases": {
                    "en": ["en"],
                    "zh-cn": ["zh"],
                    "sv-se": ["sv"],
                    "ru-ru": ["ru"],
                    "pt-pt": ["pt"],
                    "pl-pl": ["pl"],
                    "no-no": ["no"],
                    "nl-nl": ["nl"],
                    "ko-kr": ["ko"],
                    "ja-jp": ["jp", "ja"],
                    "it-it": ["it"],
                    "hu-hu": ["hu"],
                    "fr-fr": ["fr"],
                    "es": ["es"],
                    "el-gr": ["el"],
                    "de-de": ["de"],
                    "da-dk": ["da"],
                    "cs-cz": ["cs"],
                    "ca": ["ca"],
                    "ar-sa": ["ar"]
                },
                "supported": {
                    "auto": "Automatic",
                    "en": "English",
                    "en-gb": "English (UK)",
                    "zh-tw": "Chinese (Taiwan)",
                    "zh-hk": "Chinese (Hong Kong)",
                    "zh-cn": "Chinese (China)",
                    "sv-se": "Swedish",
                    "ru-ru": "Russian",
                    "pt-pt": "Portuguese (Portugal)",
                    "pt-br": "Portuguese (Brazil)",
                    "pl-pl": "Polish",
                    "no-no": "Norwegian",
                    "nl-nl": "Dutch",
                    "ko-kr": "Korean",
                    "ja-jp": "Japanese",
                    "it-it": "Italian",
                    "hu-hu": "Hungarian",
                    "fr-fr": "French (France)",
                    "fr-ca": "French (Canada)",
                    "fi-fi": "Finnish",
                    "es": "Spanish",
                    "es-mx": "Spanish (Mexico)",
                    "el-gr": "Greek",
                    "de-de": "German",
                    "da-dk": "Danish",
                    "cs-cz": "Czech",
                    "ca": "Catalan",
                    "ar-sa": "Arabic"
                },
                "supported-translated": {
                    "auto": "Automatic",
                    "en": "English",
                    "zh-tw": "\u7e41\u9ad4\u4e2d\u6587",
                    "zh-hk": "\u4e2d\u6587\uff08\u9999\u6e2f\uff09",
                    "zh-cn": "\u7b80\u4f53\u4e2d\u6587",
                    "sv-se": "Svenska",
                    "ru-ru": "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
                    "pt-pt": "Portugu\u00eas",
                    "pt-br": "Portugu\u00eas",
                    "pl-pl": "Polski",
                    "no-no": "Norsk",
                    "nl-nl": "Nederlands",
                    "ko-kr": "\ud55c\uad6d\uc5b4",
                    "ja-jp": "\u65e5\u672c\u8a9e",
                    "it-it": "Italiano",
                    "hu-hu": "Hungarian",
                    "fr-fr": "Fran\u00e7ais",
                    "fr-ca": "Fran\u00e7ais",
                    "fi-fi": "suomi",
                    "es-mx": "Espa\u00f1ol",
                    "en-gb": "English",
                    "el-gr": "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
                    "de-de": "Deutsch",
                    "da-dk": "Dansk",
                    "cs-cz": "\u010cesky",
                    "ca": "Catal\u00e0",
                    "ar-sa": "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
                    "es": "Spanish"
                },
                "primary": "auto",
                "detected": "en"
            },
            "iframes": {
                "searchAndInject": true,
                "unsafe-sources": ["gateway.answerscloud.com", "cc.hostedpci.com"],
                "allowed-origins": []
            },
            "off-limits": null,
            "toolbar-promo": false,
            "content-modifiers-version": "2",
            "live-monitoring-limit": "1"
        },
        site_id = "e62377b3-3934-480e-8613-f730e0a91b09",
        encrypted_site_id = "8pYD2sJtgrgT9nmdTeE6y3EGJcUW\/QKeC\/vDLMjUEofAkFSSWM32ZFye\/KuixhlS";

    AudioEye.site_id = site_id;
    AudioEye.encrypted_site_id = encrypted_site_id;
    AudioEye.site_name = "placeholder.com";
    AudioEye.base_url = "placeholder.com\/m";
    AudioEye.analytics_url = "https:\/\/analytics.audioeye.com\/air\/v0\/send";
    AudioEye.last_publish = "2021-09-29T20:58:55.338Z";

    // Unit Test Mode
    options.testmode = (window.audioeye_test_mode) ? window.audioeye_test_mode : false;

    // Make options accessible by other modules
    AudioEye.productConfig = options;

    AudioEye.cb = aecb;
    AudioEye.pscb = pscb;
    AudioEye.device = device;
    AudioEye.version = "3.0" + (aecb ? "-" + aecb : "");
    AudioEye.protocol = protocol;
    AudioEye.client_url = "https:\/\/wsv3cdn.audioeye.com\/f6bea56";
    AudioEye.cdn_bypass_url = "https:\/\/wsv3cdn.audioeye.com\/f6bea56";

    AudioEye.assets_url = "https:\/\/assets.audioeye.com\/m";
    AudioEye.gtm_url = "https:\/\/?h=215db588faad945926bc2c0eaf48ff32";
    AudioEye.voice_url = "https:\/\/vs.audioeye.com\/m";
    AudioEye.voice_client_entry = "\/scripts\/build\/voice.js\/m";
    AudioEye.pdfjs_url = "https:\/\/pdfjsdev.audioeye.com\/m";
    AudioEye.build = "prod\/m";
    AudioEye.portal_url = "portal.audioeye.com";
    AudioEye.portal_preview = false;
    AudioEye.site_version = null;
    AudioEye.toolbar_version = "2";
    AudioEye.toolbar_version_provider = "sd";
    AudioEye.loaderVersion = 2;






    // many of our modules make use of JSON encoding/decoding. We have detected that Prototype.js mangles certain varType to JSON conversions. Let's get rid of those
    if (window.Prototype) {
        delete Object.prototype.toJSON;
        delete Array.prototype.toJSON;
        delete String.prototype.toJSON;
    }

    // create Array.reduce alternative for environments that have overridden the native reduce 

    if (Array.prototype.reduce.toString().indexOf('[native code]') > -1) {
        Array.prototype.ae_reduce = Array.prototype.reduce;
    } else {
        Array.prototype.ae_reduce = function(callback) {
            'use strict';
            if (this == null) {
                throw new TypeError('Array.prototype.reduce called on null or undefined');
            }
            if (typeof callback !== 'function') {
                throw new TypeError(callback + ' is not a function');
            }
            var t = Object(this),
                len = t.length >>> 0,
                k = 0,
                value;
            if (arguments.length == 2) {
                value = arguments[1];
            } else {
                while (k < len && !(k in t)) {
                    k++;
                }
                if (k >= len) {
                    throw new TypeError('Reduce of empty array with no initial value');
                }
                value = t[k++];
            }
            for (; k < len; k++) {
                if (k in t) {
                    value = callback(value, t[k], k, t);
                }
            }
            return value;
        };
    }
    Object.defineProperty(Array.prototype, 'ae_reduce', {
        enumerable: false
    });

    /* Built Files */
    /* Serving build => prod */

    /**
 * This is necessary as legacy support for some helpers and remediations that
 * depend on 'AudioEye.require()' calls to function.
 * That the time of writing, this library only needs to support the following
 * types of calls:
 *  AudioEye.require('lib/mutations'
    AudioEye.require(['ae_options']...
    AudioEye.require('lib/mutations'
    AudioEye.require(['ae_options']...
    AudioEye.require(["utilities"], function(util)...
    AudioEye.require(['utilities'], function(u) {
 */
    (function() {

        if (!window.AudioEye) {
            return;
        }

        var log = function(str) {
            if (!window.console || !window.console.log) {
                return;
            }

            console.log(str);
        };

        // Stub the AudioEye.require function for old helpers and remediations
        // @param dependency {array|string}
        // @param callback {fn} - called if it is passed in
        // @returns {object} - returns dependency always
        window.AudioEye.require = function(dependency, callback) {

            try {

                // stub with empty function if no callback passed
                if (typeof callback !== 'function') {
                    callback = function() {};
                }

                // Create an object to store depdencies in
                // These will be referenced later when a call to define defines them
                if (!AudioEye.require._definedDeps) {
                    AudioEye.require._definedDeps = {};
                }

                // Create an object to store callback functions in
                // The callbacks will be called when define defines their requested
                // dependency.
                if (!AudioEye.require._definedDeps) {
                    AudioEye.require._callbacks = {};
                }

                // ensure dep is the string name of the dependency
                var dep = (Array.isArray(dependency)) ? dependency[0] : dependency;

                // The only known calls to this function look for the following
                // dependencies: 'ae_options', 'lib/mutations', and 'utilities'. All
                // other params will be rejected
                var possible_deps = ['ae_options', 'lib/mutations', 'utilities'];
                if (possible_deps.indexOf(dep) === -1) {
                    throw new Error('AudioEye.require was called with "' + dep + '", which is not supported.');
                }

                switch (dep) {
                    case 'ae_options':
                        callback(AudioEye.productConfig);
                        return AudioEye.productConfig;

                    case 'lib/mutations':
                    case 'utilities':

                        // the requested library is already defined, pass it to the callback
                        // and return it as well.
                        if (AudioEye.require._definedDeps[dep]) {
                            callback(AudioEye.require._definedDeps[dep]);
                            return AudioEye.require._definedDeps[dep];
                        }

                        // Set the callback for this dependency. The callback will be
                        // called when the platform defines the requested library.
                        if (!AudioEye.require._callbacks[dep]) {
                            AudioEye.require._callbacks[dep] = [];
                        }
                        AudioEye.require._callbacks.push(callback);
                        return;
                }

            } catch (e) {
                log('Unable to satisfy call to AudioEye.require(). See next error for more info.');
                throw e;
            }
        };

        // Either set the factory to an object to be used later, or immediately pass
        // it to any awaiting callbacks.
        window.AudioEye.define = function(dep, factory) {

            if (!AudioEye.require._definedDeps) {
                AudioEye.require._definedDeps = {};
            }

            AudioEye.require._definedDeps[dep] = factory;

            // nothing has required anything yet
            if (!AudioEye.require._callbacks) return;

            // nothing has required this lib yet
            if (Array.isArray(AudioEye.require._callbacks[dep])) {

                // pass the factory to each callback
                AudioEye.require._callbacks[dep].forEach(function(cb) {
                    cb(factory);
                });

                // remove the callbacks to prevent duplicate calls
                AudioEye.require._callbacks[dep] = [];
            }
        };
    })();
    loadScript(scriptBaseUrl + '/' + 'cfd.bundle.js' + '?cb=' + aecb);
    let startupLoader = function(tries) {
        // This will try for 5 seconds, and then continue on. If this has an issue, we don't
        // want to block the rest of the script.
        if (!AudioEye.CFD || (!AudioEye.CFD.allLoaded && tries < 25)) {
            setTimeout(function() {
                tries++;
                startupLoader(tries);
            }, 200);
            return;
        }
        loadScript(scriptBaseUrl + '/' + 'startup.bundle.js' + '?cb=' + aecb);
    };
    startupLoader(0);



    // Determine startup routine (pdf or standard)
    AudioEye.mode = (function() {

        var extension = false;
        if (!site_id && extension) {
            return 'anonymous'
        }

        if (AudioEye.portal_preview === true) {
            return 'pdf';
        }

        // no accessible_pdf config
        if (!('pdf-links' in options) || options['pdf-links']['pdf_page'] === "") {
            return 'standard';
        }

        // pdf config OFF
        if (!options['pdf-links']['service']) {
            return 'standard';
        }

        var page_url = window.location.href;

        // this page is set as the pdf display page
        if (page_url.indexOf(options['pdf-links']['pdf_page']) !== -1) {
            return 'pdf';

        } else {
            return 'standard';

        }
    })();

    var loaderRunStartup = function(tries) {
        if (!AudioEye.runStartup) {
            var wait = 100;
            if (tries > 50) {
                wait = wait * tries;
            }
            setTimeout(function() {
                loaderRunStartup(++tries)
            }, wait);
            return;
        }

        AudioEye.runStartup(AudioEye.mode, {
            'portal_url': 'portal.audioeye.com',
            'interface': "<div id=\"ae_app\">\n    <link id=\"launcher_css\" rel=\"stylesheet\" href=https:\/\/wsv3cdn.audioeye.com\/f6bea56\/build\/launcher-min.css?cb=123123123 class=\"ae-style\">\n        <!--\n        Layout, Style or Voice Helpers\n    -->\n    <div id=\"ae_helpers\" class=\"ae-module\" style=\"display: none;\">\n\n    \n    <\/div>\n    \n\n        <!--\n        Compliance\n    -->\n    <div id=\"ae_compliance\" class=\"ae-module\" style=\"display: none;\">\n\n        <!-- For autoSmartRem addNewWindowWarnings div is referenced in an aria-describedby -->\n        <div id=\"audioeye_new_window_message\" style=\"display:none\">Opens in new window<\/div>\n        <div id=\"audioeye_pdf_message\" style=\"display:none\">PDF Download<\/div>\n        <div id=\"audioeye_word_message\" style=\"display:none\">Word Download<\/div>\n        <div id=\"audioeye_excel_message\" style=\"display:none\">Excel Download<\/div>\n        <div id=\"audioeye_powerpoint_message\" style=\"display:none\">PowerPoint Download<\/div>\n        <div id=\"audioeye_document_message\" style=\"display:none\">Document Download<\/div>\n\n        <link rel=\"stylesheet\" class=\"ae-style\" href=\"https:\/\/wsv3cdn.audioeye.com\/f6bea56\/build\/compliance-min.css?cb=123123123\">\n\n        \n        <script type=\"text\/javascript\">\n\n        AudioEye.smartRemediations = [];\nAudioEye.autoSmartRemediations = [{\"id\":\"67f55ef1-8fe7-4ca8-b994-65c74aa2cb77\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"linkEmptyOptIn\",\"params\":[]},{\"id\":\"af856af4-ef01-4884-ba03-20a54ff10e57\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"formFieldGroupCheckboxGroupNotFoundOptIn\",\"params\":[]},{\"id\":\"57de00e1-8a90-4b2d-886c-fb6bc1e7e4af\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"tableLayout\",\"params\":[]},{\"id\":\"8a8b1e24-0d00-41ed-962a-0ad5e119c89f\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"headingSequenceOutOfOrder\",\"params\":[]},{\"id\":\"16680e46-0ca8-4b76-8f16-45ecd3ea3eb3\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"tabindexGreater\",\"params\":[]},{\"id\":\"171dede8-5425-427c-bb0c-45d0d28612ee\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"addSmartAltText\",\"params\":[]},{\"id\":\"0f503e72-982f-454f-8e2f-2b95b5e296d8\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"makeLinkImgAltDecorative\",\"params\":[]},{\"id\":\"00cb298c-7f80-49c8-abcc-d5a0f48bc923\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"addFormLabels\",\"params\":[]},{\"id\":\"14f27a0e-b898-4d6c-88dc-1fdc47c224e1\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"htmlLandmarksMultipleMains\",\"params\":[]},{\"id\":\"842f8e77-23c6-4ae3-842c-6c1b70386c10\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"addFrameTitles\",\"params\":[]},{\"id\":\"4007c756-407d-4900-b7ff-14733a0fa228\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"linkTextContentNotDescriptiveOptIn\",\"params\":[]},{\"id\":\"924e037e-7809-4481-b9f1-f376efd70957\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"thEmpty\",\"params\":[]},{\"id\":\"abc0d046-621d-44b3-a0ec-757e58877f98\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"htmlAccessibleNameMismatchOptIn\",\"params\":[]},{\"id\":\"8c50ac0f-7bdf-4554-8449-b9bb54c7fce4\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"formFieldLabelNotFoundOptIn\",\"params\":[]},{\"id\":\"46cc867b-cdbc-4684-89a9-523b6662fea0\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"oneItemList\",\"params\":[]},{\"id\":\"47b4c5c4-a9c6-4b49-9965-93779ad753ab\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"ariaChildlessMenu\",\"params\":[]},{\"id\":\"8d54e968-5de9-4adc-86c5-54cd6ae71ea7\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"linkSamePageAnchorInvalidOptIn\",\"params\":[]},{\"id\":\"f3fa1cab-80af-4b8c-a0c9-bedca8f62b2e\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"spacerAlt\",\"params\":[]},{\"id\":\"8f2dd066-dc5b-4fed-ab8c-a7eb28b2eba8\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"removeLinkRedundancies\",\"params\":[]},{\"id\":\"29ef3563-80e0-4d4f-adbe-4658b0f2080f\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"removeInvalidLabelReferences\",\"params\":[]},{\"id\":\"d64a6963-2ce3-4e31-b21c-54d9667542dd\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"formFieldMetadataNotFoundOptIn\",\"params\":[]},{\"id\":\"1343f0ba-8aa6-4b8b-84f2-dc2cd9e34717\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"automaticSingleListItem\",\"params\":[]},{\"id\":\"43c1b300-5265-4170-8902-1db265bb2488\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"htmlSkipToMainOptIn\",\"params\":[]},{\"id\":\"c36ba669-a063-4376-b4f7-009cc0398c38\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"linkImgTextAltBlankOptIn\",\"params\":[]},{\"id\":\"5c00e0eb-2700-48e3-a86b-bf326ab5c75c\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"htmlAriaRolesAttributeNotAppropriate\",\"params\":[]},{\"id\":\"e7d4f20d-f9ff-4787-87df-5ac850fad6fc\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"altLong\",\"params\":[]},{\"id\":\"83b120bc-67b9-4892-9908-24c78d4f6e41\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"automaticNestedLayoutTable\",\"params\":[]},{\"id\":\"6faf4ea5-2386-4de4-b532-2ae6ade3dcce\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"linkHrefNoneOptIn\",\"params\":[]},{\"id\":\"9abda4c3-6fad-4bc6-ba0f-9eb6c0da8308\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"htmlAriaRolesRoleMissingParent\",\"params\":[]},{\"id\":\"fa2784a9-f9fc-438b-912f-4c1c1c5d4733\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"addNewWindowWarnings\",\"params\":[]},{\"id\":\"301bf897-4e26-4e0d-bd57-a3416ac61c74\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"buttonTextContentNotFoundOptIn\",\"params\":[]},{\"id\":\"bd8fc3da-ee90-478b-8100-793f323b5728\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"htmlLandmarksMultipleComplementary\",\"params\":[]},{\"id\":\"226db4cf-7300-4afa-89fc-a88d8f15438e\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"addLinkText\",\"params\":[]},{\"id\":\"14c69b58-6cbb-4e20-a075-c56c527c819f\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"headingEmpty\",\"params\":[]},{\"id\":\"59fe8270-98a2-4818-b0ae-c5f0fd08caf4\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"htmlFocusSequenceAriaHiddenTabbableOptIn\",\"params\":[]},{\"id\":\"a97eb5dc-8f53-46f4-9ebb-c51f7cb7bb93\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"linkTextContentNotFoundOptIn\",\"params\":[]},{\"id\":\"8e44f26e-8635-41fd-8135-0511d9a1a468\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"hideEmptyHeaders\",\"params\":[]},{\"id\":\"4a129d03-1af8-46c8-bd97-166da68cc385\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"labelEmpty\",\"params\":[]},{\"id\":\"9ca23bdc-5afc-490b-9c28-a4c3edeb0792\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"headingLevelOneCountMultiple\",\"params\":[]},{\"id\":\"24007c21-1334-47b1-8f46-a13dc2a2df52\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"frameTitleDuplicate\",\"params\":[]},{\"id\":\"34338f91-ee65-46dc-91b1-f81b6c1f1f41\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"firstHeaderLevelNot1or2\",\"params\":[]},{\"id\":\"c18f37f2-d381-4296-9123-167f18161cda\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"linkTextContentRedundantOptIn\",\"params\":[]},{\"id\":\"629d7f8f-2a8d-4875-8fed-e61fdc000c86\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"altRedundant\",\"params\":[]},{\"id\":\"c22588f2-51b0-4dc3-a2c3-36c409f75bce\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"linkImgTextAltNotFoundOptIn\",\"params\":[]},{\"id\":\"dcf165dd-ca75-4b47-8554-17a5e4818704\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"headingLevelOneCountZero\",\"params\":[]},{\"id\":\"7f295608-d0c6-4eb8-b18c-b177cea3deb5\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"linkSamePageAddButtonRoleAndKeydown\",\"params\":[]},{\"id\":\"a4ac4a6f-6792-4b3c-bec8-0546ad515ac2\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"deviceIndependentEvent\",\"params\":[]},{\"id\":\"beb294c3-9ed4-4fe0-8471-f31659e4b542\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"formFieldLabelOptIn\",\"params\":[]},{\"id\":\"bfc3621c-e2db-431a-b0d6-6d95e69aebde\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"addFormRequiredAriaLabel\",\"params\":[]},{\"id\":\"b165e731-77f3-4050-ba67-db210567f794\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"formFieldMetadataBadAnchor\",\"params\":[]},{\"id\":\"d31cc201-1b71-4b9d-a00e-a8656c40825e\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"addDownloadableDocumentWarnings\",\"params\":[]},{\"id\":\"1874d836-6928-4ce3-a298-735d520e54a2\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"fieldsetLegendEmpty\",\"params\":[]},{\"id\":\"a70b6fc3-c412-4d74-8786-447c2641d28d\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"htmlAriaRolesInvalidRole\",\"params\":[]},{\"id\":\"02e9e80b-c12c-4ec7-b705-3fc5c0f1b45e\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"blinkOptIn\",\"params\":[]},{\"id\":\"c4a484dc-58fe-4ffb-a6fe-c8f113945f36\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"linkAdjacentSameHREFOptIn\",\"params\":[]},{\"id\":\"6cb8a512-2970-4662-826d-f4b54b6b82cd\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"altDuplicateOptIn\",\"params\":[]},{\"id\":\"f2d3c00c-5640-4280-b902-196c08193c4b\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"setDocLang\",\"params\":[]},{\"id\":\"af1a5e6c-234a-4a08-a165-9cca7b714ab6\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"htmlLandmarksMultipleNavsOptIn\",\"params\":[]},{\"id\":\"6f2662c5-94ce-450a-9022-0e5969a5d21f\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"titleRedundantOptIn\",\"params\":[]},{\"id\":\"97eb16ac-d8f1-4f6e-937c-b89d808e3e54\",\"parent_id\":\"\",\"smart_remediation_number\":\"\",\"type\":\"interactiveElementKeyboardActivation\",\"params\":[]}];\n\n        <\/script>\n    <\/div>\n    \n    <!--\n        Versioning Control Panel if versioning = true\n    -->\n    \n    <!--\n        Launcher\n    -->\n    <span id=\"ae_placeholder_launcher\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    <!-- Toolbar -->\n\n    <span id=\"ae_placeholder_toolbar\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    <!--\n        Site Menu\n    -->\n    <span id=\"ae_placeholder_site-menu\" style=\"display: none;\" aria-hidden=\"true\"><\/span>\n\n    \n    <!--\n        Generic Aria Live message container\n    -->\n    <div class=\"ae-blurb-noaudio\" id=\"ae_enabled_messages\" aria-relevant=\"additions\" aria-live=\"assertive\"><\/div>\n\n    \n    <!-- Symbol definitions -->\n    <svg style=\"position: absolute; width: 0; height: 0; overflow: hidden;\" version=\"1.1\" xmlns=\"http:\/\/www.w3.org\/2000\/svg\" xmlns:xlink=\"http:\/\/www.w3.org\/1999\/xlink\">\n        <defs>\n            <symbol id=\"icon-close-carousel\" viewBox=\"0 0 32 32\">\n                <title>close carousel<\/title>\n                <path fill=\"#ffffff\" style=\"fill: var(--color1, #ffffff)\" d=\"M28.992 0l-12.992 12.992-12.992-12.992-3.008 3.008 12.992 12.992-12.992 12.992 3.008 3.008 12.992-12.992 12.992 12.992 3.008-3.008-12.992-12.992 12.992-12.992-3.008-3.008z\"><\/path>\n            <\/symbol>\n        <\/defs>\n    <\/svg>\n\n<\/div><!-- end #ae_app -->",
            'container_id': "5719",
            'site_id': site_id,
            'version_id': null,
            'is_working_version_request': false,
            'live_scanner': false,
            'live_scanner_open': false,
            'monitor': false,
            'live_monitor_endpoint_url': "https:\/\/analytics.audioeye.com\/air\/report",
            'perf_endpoint_url': "https:\/\/zalywzdew6.execute-api.us-west-2.amazonaws.com\/prod\/v0\/live-monitor-perf",
            'loader_timing_endpoint_url': "https:\/\/zalywzdew6.execute-api.us-west-2.amazonaws.com\/prod\/v0\/timing",
            'product_config': options,
            'device': device,
            'testmode': window.AEUnitTests,
            'site_hash': "215db588faad945926bc2c0eaf48ff32",
            'toolbar_version': 2
        });
    };

    // Execute startup routine
    loaderRunStartup(1);

    window.AudioEye = AudioEye;
};

loaderFunction(1);