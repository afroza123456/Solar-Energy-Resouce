/*! video.js - v4.9.0 - 2017-02-16 */
function _handleMultipleEvents(fn, elem, type, callback) {
    vjs.arr.forEach(type, function(type) {
        fn(elem, type, callback)
    })
}

function _logType(type, args) {
    var argsArray, noop, console;
    argsArray = Array.prototype.slice.call(args), noop = function() {}, console = window.console || {
        log: noop,
        warn: noop,
        error: noop
    }, type ? argsArray.unshift(type.toUpperCase() + ":") : type = "log", vjs.log.history.push(argsArray), argsArray.unshift("VIDEOJS:"), console[type].apply ? console[type].apply(console, argsArray) : console[type](argsArray.join(" "))
}
document.createElement("video"), document.createElement("audio"), document.createElement("track");
var vjs = function(id, options, ready) {
        var tag;
        if ("string" == typeof id) {
            if (0 === id.indexOf("#") && (id = id.slice(1)), vjs.players[id]) return vjs.players[id];
            tag = vjs.el(id)
        } else tag = id;
        if (!tag || !tag.nodeName) throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return tag.player || new vjs.Player(tag, options, ready)
    },
    videojs = window.videojs = vjs;
vjs.CDN_VERSION = "4.9", vjs.ACCESS_PROTOCOL = "https:" == document.location.protocol ? "https://" : "http://", vjs.options = {
    techOrder: ["html5", "flash"],
    html5: {},
    flash: {},
    width: 300,
    height: 150,
    defaultVolume: 0,
    playbackRates: [],
    inactivityTimeout: 2e3,
    children: {
        mediaLoader: {},
        posterImage: {},
        textTrackDisplay: {},
        loadingSpinner: {},
        bigPlayButton: {},
        controlBar: {},
        errorDisplay: {}
    },
    language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.userLanguage || navigator.language || "en",
    languages: {},
    notSupportedMessage: "No compatible source was found for this video."
}, "GENERATED_CDN_VSN" !== vjs.CDN_VERSION && (videojs.options.flash.swf = vjs.ACCESS_PROTOCOL + "vjs.zencdn.net/" + vjs.CDN_VERSION + "/video-js.swf"), vjs.addLanguage = function(code, data) {
    return void 0 !== vjs.options.languages[code] ? vjs.options.languages[code] = vjs.util.mergeOptions(vjs.options.languages[code], data) : vjs.options.languages[code] = data, vjs.options.languages
}, vjs.players = {}, "function" == typeof define && define.amd ? define([], function() {
    return videojs
}) : "object" == typeof exports && "object" == typeof module && (module.exports = videojs), vjs.CoreObject = vjs.CoreObject = function() {}, vjs.CoreObject.extend = function(props) {
    var init, subObj;
    props = props || {}, init = props.init || props.init || this.prototype.init || this.prototype.init || function() {}, subObj = function() {
        init.apply(this, arguments)
    }, subObj.prototype = vjs.obj.create(this.prototype), subObj.prototype.constructor = subObj, subObj.extend = vjs.CoreObject.extend, subObj.create = vjs.CoreObject.create;
    for (var name in props) props.hasOwnProperty(name) && (subObj.prototype[name] = props[name]);
    return subObj
}, vjs.CoreObject.create = function() {
    var inst = vjs.obj.create(this.prototype);
    return this.apply(inst, arguments), inst
}, vjs.on = function(elem, type, fn) {
    if (vjs.obj.isArray(type)) return _handleMultipleEvents(vjs.on, elem, type, fn);
    var data = vjs.getData(elem);
    data.handlers || (data.handlers = {}), data.handlers[type] || (data.handlers[type] = []), fn.guid || (fn.guid = vjs.guid++), data.handlers[type].push(fn), data.dispatcher || (data.disabled = !1, data.dispatcher = function(event) {
        if (!data.disabled) {
            event = vjs.fixEvent(event);
            var handlers = data.handlers[event.type];
            if (handlers)
                for (var handlersCopy = handlers.slice(0), m = 0, n = handlersCopy.length; n > m && !event.isImmediatePropagationStopped(); m++) handlersCopy[m].call(elem, event)
        }
    }), 1 == data.handlers[type].length && (elem.addEventListener ? elem.addEventListener(type, data.dispatcher, !1) : elem.attachEvent && elem.attachEvent("on" + type, data.dispatcher))
}, vjs.off = function(elem, type, fn) {
    if (vjs.hasData(elem)) {
        var data = vjs.getData(elem);
        if (data.handlers) {
            if (vjs.obj.isArray(type)) return _handleMultipleEvents(vjs.off, elem, type, fn);
            var removeType = function(t) {
                data.handlers[t] = [], vjs.cleanUpEvents(elem, t)
            };
            if (type) {
                var handlers = data.handlers[type];
                if (handlers) {
                    if (!fn) return void removeType(type);
                    if (fn.guid)
                        for (var n = 0; n < handlers.length; n++) handlers[n].guid === fn.guid && handlers.splice(n--, 1);
                    vjs.cleanUpEvents(elem, type)
                }
            } else
                for (var t in data.handlers) removeType(t)
        }
    }
}, vjs.cleanUpEvents = function(elem, type) {
    var data = vjs.getData(elem);
    0 === data.handlers[type].length && (delete data.handlers[type], elem.removeEventListener ? elem.removeEventListener(type, data.dispatcher, !1) : elem.detachEvent && elem.detachEvent("on" + type, data.dispatcher)), vjs.isEmpty(data.handlers) && (delete data.handlers, delete data.dispatcher, delete data.disabled), vjs.isEmpty(data) && vjs.removeData(elem)
}, vjs.fixEvent = function(event) {
    function returnTrue() {
        return !0
    }

    function returnFalse() {
        return !1
    }
    if (!event || !event.isPropagationStopped) {
        var old = event || window.event;
        event = {};
        for (var key in old) "layerX" !== key && "layerY" !== key && "keyboardEvent.keyLocation" !== key && ("returnValue" == key && old.preventDefault || (event[key] = old[key]));
        if (event.target || (event.target = event.srcElement || document), event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement, event.preventDefault = function() {
                old.preventDefault && old.preventDefault(), event.returnValue = !1, event.isDefaultPrevented = returnTrue, event.defaultPrevented = !0
            }, event.isDefaultPrevented = returnFalse, event.defaultPrevented = !1, event.stopPropagation = function() {
                old.stopPropagation && old.stopPropagation(), event.cancelBubble = !0, event.isPropagationStopped = returnTrue
            }, event.isPropagationStopped = returnFalse, event.stopImmediatePropagation = function() {
                old.stopImmediatePropagation && old.stopImmediatePropagation(), event.isImmediatePropagationStopped = returnTrue, event.stopPropagation()
            }, event.isImmediatePropagationStopped = returnFalse, null != event.clientX) {
            var doc = document.documentElement,
                body = document.body;
            event.pageX = event.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0), event.pageY = event.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0)
        }
        event.which = event.charCode || event.keyCode, null != event.button && (event.button = 1 & event.button ? 0 : 4 & event.button ? 1 : 2 & event.button ? 2 : 0)
    }
    return event
}, vjs.trigger = function(elem, event) {
    var elemData = vjs.hasData(elem) ? vjs.getData(elem) : {},
        parent = elem.parentNode || elem.ownerDocument;
    if ("string" == typeof event && (event = {
            type: event,
            target: elem
        }), event = vjs.fixEvent(event), elemData.dispatcher && elemData.dispatcher.call(elem, event), parent && !event.isPropagationStopped() && event.bubbles !== !1) vjs.trigger(parent, event);
    else if (!parent && !event.defaultPrevented) {
        var targetData = vjs.getData(event.target);
        event.target[event.type] && (targetData.disabled = !0, "function" == typeof event.target[event.type] && event.target[event.type](), targetData.disabled = !1)
    }
    return !event.defaultPrevented
}, vjs.one = function(elem, type, fn) {
    if (vjs.obj.isArray(type)) return _handleMultipleEvents(vjs.one, elem, type, fn);
    var func = function() {
        vjs.off(elem, type, func), fn.apply(this, arguments)
    };
    func.guid = fn.guid = fn.guid || vjs.guid++, vjs.on(elem, type, func)
};
var hasOwnProp = Object.prototype.hasOwnProperty;
vjs.createEl = function(tagName, properties) {
    var el;
    return tagName = tagName || "div", properties = properties || {}, el = document.createElement(tagName), vjs.obj.each(properties, function(propName, val) {
        -1 !== propName.indexOf("aria-") || "role" == propName ? el.setAttribute(propName, val) : el[propName] = val
    }), el
}, vjs.capitalize = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}, vjs.obj = {}, vjs.obj.create = Object.create || function(obj) {
    function F() {}
    return F.prototype = obj, new F
}, vjs.obj.each = function(obj, fn, context) {
    for (var key in obj) hasOwnProp.call(obj, key) && fn.call(context || this, key, obj[key])
}, vjs.obj.merge = function(obj1, obj2) {
    if (!obj2) return obj1;
    for (var key in obj2) hasOwnProp.call(obj2, key) && (obj1[key] = obj2[key]);
    return obj1
}, vjs.obj.deepMerge = function(obj1, obj2) {
    var key, val1, val2;
    obj1 = vjs.obj.copy(obj1);
    for (key in obj2) hasOwnProp.call(obj2, key) && (val1 = obj1[key], val2 = obj2[key], vjs.obj.isPlain(val1) && vjs.obj.isPlain(val2) ? obj1[key] = vjs.obj.deepMerge(val1, val2) : obj1[key] = obj2[key]);
    return obj1
}, vjs.obj.copy = function(obj) {
    return vjs.obj.merge({}, obj)
}, vjs.obj.isPlain = function(obj) {
    return !!obj && "object" == typeof obj && "[object Object]" === obj.toString() && obj.constructor === Object
}, vjs.obj.isArray = Array.isArray || function(arr) {
    return "[object Array]" === Object.prototype.toString.call(arr)
}, vjs.isNaN = function(num) {
    return num !== num
}, vjs.bind = function(context, fn, uid) {
    fn.guid || (fn.guid = vjs.guid++);
    var ret = function() {
        return fn.apply(context, arguments)
    };
    return ret.guid = uid ? uid + "_" + fn.guid : fn.guid, ret
}, vjs.cache = {}, vjs.guid = 1, vjs.expando = "vdata" + (new Date).getTime(), vjs.getData = function(el) {
    var id = el[vjs.expando];
    return id || (id = el[vjs.expando] = vjs.guid++, vjs.cache[id] = {}), vjs.cache[id]
}, vjs.hasData = function(el) {
    var id = el[vjs.expando];
    return !(!id || vjs.isEmpty(vjs.cache[id]))
}, vjs.removeData = function(el) {
    var id = el[vjs.expando];
    if (id) {
        delete vjs.cache[id];
        try {
            delete el[vjs.expando]
        } catch (e) {
            el.removeAttribute ? el.removeAttribute(vjs.expando) : el[vjs.expando] = null
        }
    }
}, vjs.isEmpty = function(obj) {
    for (var prop in obj)
        if (null !== obj[prop]) return !1;
    return !0
}, vjs.hasClass = function(element, classToCheck) {
    return -1 !== (" " + element.className + " ").indexOf(" " + classToCheck + " ")
}, vjs.addClass = function(element, classToAdd) {
    vjs.hasClass(element, classToAdd) || (element.className = "" === element.className ? classToAdd : element.className + " " + classToAdd)
}, vjs.removeClass = function(element, classToRemove) {
    var classNames, i;
    if (vjs.hasClass(element, classToRemove)) {
        for (classNames = element.className.split(" "), i = classNames.length - 1; i >= 0; i--) classNames[i] === classToRemove && classNames.splice(i, 1);
        element.className = classNames.join(" ")
    }
}, vjs.TEST_VID = vjs.createEl("video"), vjs.USER_AGENT = navigator.userAgent, vjs.IS_IPHONE = /iPhone/i.test(vjs.USER_AGENT), vjs.IS_IPAD = /iPad/i.test(vjs.USER_AGENT), vjs.IS_IPOD = /iPod/i.test(vjs.USER_AGENT), vjs.IS_IOS = vjs.IS_IPHONE || vjs.IS_IPAD || vjs.IS_IPOD, vjs.IOS_VERSION = function() {
    var match = vjs.USER_AGENT.match(/OS (\d+)_/i);
    return match && match[1] ? match[1] : void 0
}(), vjs.IS_ANDROID = /Android/i.test(vjs.USER_AGENT), vjs.ANDROID_VERSION = function() {
    var major, minor, match = vjs.USER_AGENT.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
    return match ? (major = match[1] && parseFloat(match[1]), minor = match[2] && parseFloat(match[2]), major && minor ? parseFloat(match[1] + "." + match[2]) : major ? major : null) : null
}(), vjs.IS_OLD_ANDROID = vjs.IS_ANDROID && /webkit/i.test(vjs.USER_AGENT) && vjs.ANDROID_VERSION < 2.3, vjs.IS_FIREFOX = /Firefox/i.test(vjs.USER_AGENT), vjs.IS_CHROME = /Chrome/i.test(vjs.USER_AGENT), vjs.TOUCH_ENABLED = !!("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch), vjs.setElementAttributes = function(el, attributes) {
    vjs.obj.each(attributes, function(attrName, attrValue) {
        null === attrValue || "undefined" == typeof attrValue || attrValue === !1 ? el.removeAttribute(attrName) : el.setAttribute(attrName, attrValue === !0 ? "" : attrValue)
    })
}, vjs.getElementAttributes = function(tag) {
    var obj, knownBooleans, attrs, attrName, attrVal;
    if (obj = {}, knownBooleans = ",autoplay,controls,loop,muted,default,", tag && tag.attributes && tag.attributes.length > 0) {
        attrs = tag.attributes;
        for (var i = attrs.length - 1; i >= 0; i--) attrName = attrs[i].name, attrVal = attrs[i].value, ("boolean" == typeof tag[attrName] || -1 !== knownBooleans.indexOf("," + attrName + ",")) && (attrVal = null !== attrVal ? !0 : !1), obj[attrName] = attrVal
    }
    return obj
}, vjs.getComputedDimension = function(el, strCssRule) {
    var strValue = "";
    return document.defaultView && document.defaultView.getComputedStyle ? strValue = document.defaultView.getComputedStyle(el, "").getPropertyValue(strCssRule) : el.currentStyle && (strValue = el["client" + strCssRule.substr(0, 1).toUpperCase() + strCssRule.substr(1)] + "px"), strValue
}, vjs.insertFirst = function(child, parent) {
    parent.firstChild ? parent.insertBefore(child, parent.firstChild) : parent.appendChild(child)
}, vjs.browser = {}, vjs.el = function(id) {
    return 0 === id.indexOf("#") && (id = id.slice(1)), document.getElementById(id)
}, vjs.formatTime = function(seconds, guide) {
    guide = guide || seconds;
    var s = Math.floor(seconds % 60),
        m = Math.floor(seconds / 60 % 60),
        h = Math.floor(seconds / 3600),
        gm = Math.floor(guide / 60 % 60),
        gh = Math.floor(guide / 3600);
    return (isNaN(seconds) || seconds === 1 / 0) && (h = m = s = "-"), h = h > 0 || gh > 0 ? h + ":" : "", m = ((h || gm >= 10) && 10 > m ? "0" + m : m) + ":", s = 10 > s ? "0" + s : s, h + m + s
}, vjs.blockTextSelection = function() {
    document.body.focus(), document.onselectstart = function() {
        return !1
    }
}, vjs.unblockTextSelection = function() {
    document.onselectstart = function() {
        return !0
    }
}, vjs.trim = function(str) {
    return (str + "").replace(/^\s+|\s+$/g, "")
}, vjs.round = function(num, dec) {
    return dec || (dec = 0), Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)
}, vjs.createTimeRange = function(start, end) {
    return {
        length: 1,
        start: function() {
            return start
        },
        end: function() {
            return end
        }
    }
}, vjs.get = function(url, onSuccess, onError, withCredentials) {
    var fileUrl, request, urlInfo, winLoc, crossOrigin;
    onError = onError || function() {}, "undefined" == typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
        } catch (e) {}
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
        } catch (f) {}
        try {
            return new window.ActiveXObject("Msxml2.XMLHTTP")
        } catch (g) {}
        throw new Error("This browser does not support XMLHttpRequest.")
    }), request = new XMLHttpRequest, urlInfo = vjs.parseUrl(url), winLoc = window.location, crossOrigin = urlInfo.protocol + urlInfo.host !== winLoc.protocol + winLoc.host, !crossOrigin || !window.XDomainRequest || "withCredentials" in request ? (fileUrl = "file:" == urlInfo.protocol || "file:" == winLoc.protocol, request.onreadystatechange = function() {
        4 === request.readyState && (200 === request.status || fileUrl && 0 === request.status ? onSuccess(request.responseText) : onError(request.responseText))
    }) : (request = new window.XDomainRequest, request.onload = function() {
        onSuccess(request.responseText)
    }, request.onerror = onError, request.onprogress = function() {}, request.ontimeout = onError);
    try {
        request.open("GET", url, !0), withCredentials && (request.withCredentials = !0)
    } catch (e) {
        return void onError(e)
    }
    try {
        request.send()
    } catch (e) {
        onError(e)
    }
}, vjs.setLocalStorage = function(key, value) {
    try {
        var localStorage = window.localStorage || !1;
        if (!localStorage) return;
        localStorage[key] = value
    } catch (e) {
        22 == e.code || 1014 == e.code ? vjs.log("LocalStorage Full (VideoJS)", e) : 18 == e.code ? vjs.log("LocalStorage not allowed (VideoJS)", e) : vjs.log("LocalStorage Error (VideoJS)", e)
    }
}, vjs.getAbsoluteURL = function(url) {
    return url.match(/^https?:\/\//) || (url = vjs.createEl("div", {
        innerHTML: '<a href="' + url + '">x</a>'
    }).firstChild.href), url
}, vjs.parseUrl = function(url) {
    var div, a, addToBody, props, details;
    props = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], a = vjs.createEl("a", {
        href: url
    }), addToBody = "" === a.host && "file:" !== a.protocol, addToBody && (div = vjs.createEl("div"), div.innerHTML = '<a href="' + url + '"></a>', a = div.firstChild, div.setAttribute("style", "display:none; position:absolute;"), document.body.appendChild(div)), details = {};
    for (var i = 0; i < props.length; i++) details[props[i]] = a[props[i]];
    return addToBody && document.body.removeChild(div), details
}, vjs.log = function() {
    _logType(null, arguments)
}, vjs.log.history = [], vjs.log.error = function() {
    _logType("error", arguments)
}, vjs.log.warn = function() {
    _logType("warn", arguments)
}, vjs.findPosition = function(el) {
    var box, docEl, body, clientLeft, scrollLeft, left, clientTop, scrollTop, top;
    return el.getBoundingClientRect && el.parentNode && (box = el.getBoundingClientRect()), box ? (docEl = document.documentElement, body = document.body, clientLeft = docEl.clientLeft || body.clientLeft || 0, scrollLeft = window.pageXOffset || body.scrollLeft, left = box.left + scrollLeft - clientLeft, clientTop = docEl.clientTop || body.clientTop || 0, scrollTop = window.pageYOffset || body.scrollTop, top = box.top + scrollTop - clientTop, {
        left: vjs.round(left),
        top: vjs.round(top)
    }) : {
        left: 0,
        top: 0
    }
}, vjs.arr = {}, vjs.arr.forEach = function(array, callback, thisArg) {
    if (vjs.obj.isArray(array) && callback instanceof Function)
        for (var i = 0, len = array.length; len > i; ++i) callback.call(thisArg || vjs, array[i], i, array);
    return array
}, vjs.util = {}, vjs.util.mergeOptions = function(obj1, obj2) {
    var key, val1, val2;
    obj1 = vjs.obj.copy(obj1);
    for (key in obj2) obj2.hasOwnProperty(key) && (val1 = obj1[key], val2 = obj2[key], vjs.obj.isPlain(val1) && vjs.obj.isPlain(val2) ? obj1[key] = vjs.util.mergeOptions(val1, val2) : obj1[key] = obj2[key]);
    return obj1
}, vjs.Component = vjs.CoreObject.extend({
    init: function(player, options, ready) {
        this.player_ = player, this.options_ = vjs.obj.copy(this.options_), options = this.options(options), this.id_ = options.id || (options.el && options.el.id ? options.el.id : player.id() + "_component_" + vjs.guid++), this.name_ = options.name || null, this.el_ = options.el || this.createEl(), this.children_ = [], this.childIndex_ = {}, this.childNameIndex_ = {}, this.initChildren(), this.ready(ready), options.reportTouchActivity !== !1 && this.enableTouchActivity()
    }
}), vjs.Component.prototype.dispose = function() {
    if (this.trigger({
            type: "dispose",
            bubbles: !1
        }), this.children_)
        for (var i = this.children_.length - 1; i >= 0; i--) this.children_[i].dispose && this.children_[i].dispose();
    this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.off(), this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), vjs.removeData(this.el_), this.el_ = null
}, vjs.Component.prototype.player_ = !0, vjs.Component.prototype.player = function() {
    return this.player_
}, vjs.Component.prototype.options_, vjs.Component.prototype.options = function(obj) {
    return void 0 === obj ? this.options_ : this.options_ = vjs.util.mergeOptions(this.options_, obj)
}, vjs.Component.prototype.el_, vjs.Component.prototype.createEl = function(tagName, attributes) {
    return vjs.createEl(tagName, attributes)
}, vjs.Component.prototype.localize = function(string) {
    var lang = this.player_.language(),
        languages = this.player_.languages();
    return languages && languages[lang] && languages[lang][string] ? languages[lang][string] : string
}, vjs.Component.prototype.el = function() {
    return this.el_
}, vjs.Component.prototype.contentEl_, vjs.Component.prototype.contentEl = function() {
    return this.contentEl_ || this.el_
}, vjs.Component.prototype.id_, vjs.Component.prototype.id = function() {
    return this.id_
}, vjs.Component.prototype.name_, vjs.Component.prototype.name = function() {
    return this.name_
}, vjs.Component.prototype.children_, vjs.Component.prototype.children = function() {
    return this.children_
}, vjs.Component.prototype.childIndex_, vjs.Component.prototype.getChildById = function(id) {
    return this.childIndex_[id]
}, vjs.Component.prototype.childNameIndex_, vjs.Component.prototype.getChild = function(name) {
    return this.childNameIndex_[name]
}, vjs.Component.prototype.addChild = function(child, options) {
    var component, componentClass, componentName;
    return "string" == typeof child ? (componentName = child, options = options || {}, componentClass = options.componentClass || vjs.capitalize(componentName), options.name = componentName, component = new window.videojs[componentClass](this.player_ || this, options)) : component = child, this.children_.push(component), "function" == typeof component.id && (this.childIndex_[component.id()] = component), componentName = componentName || component.name && component.name(), componentName && (this.childNameIndex_[componentName] = component), "function" == typeof component.el && component.el() && this.contentEl().appendChild(component.el()), component
}, vjs.Component.prototype.removeChild = function(component) {
    if ("string" == typeof component && (component = this.getChild(component)), component && this.children_) {
        for (var childFound = !1, i = this.children_.length - 1; i >= 0; i--)
            if (this.children_[i] === component) {
                childFound = !0, this.children_.splice(i, 1);
                break
            }
        if (childFound) {
            this.childIndex_[component.id] = null, this.childNameIndex_[component.name] = null;
            var compEl = component.el();
            compEl && compEl.parentNode === this.contentEl() && this.contentEl().removeChild(component.el())
        }
    }
}, vjs.Component.prototype.initChildren = function() {
    var parent, children, child, name, opts;
    if (parent = this, children = this.options().children)
        if (vjs.obj.isArray(children))
            for (var i = 0; i < children.length; i++) child = children[i], "function" != typeof child && ("string" == typeof child ? (name = child, opts = {}) : (name = child.name, opts = child), parent[name] = parent.addChild(name, opts));
        else vjs.obj.each(children, function(name, opts) {
            opts !== !1 && (parent[name] = parent.addChild(name, opts))
        })
}, vjs.Component.prototype.buildCSSClass = function() {
    return ""
}, vjs.Component.prototype.on = function(type, fn) {
    return vjs.on(this.el_, type, vjs.bind(this, fn)), this
}, vjs.Component.prototype.off = function(type, fn) {
    return vjs.off(this.el_, type, fn), this
}, vjs.Component.prototype.one = function(type, fn) {
    return vjs.one(this.el_, type, vjs.bind(this, fn)), this
}, vjs.Component.prototype.trigger = function(event) {
    return vjs.trigger(this.el_, event), this
}, vjs.Component.prototype.isReady_, vjs.Component.prototype.isReadyOnInitFinish_ = !0, vjs.Component.prototype.readyQueue_, vjs.Component.prototype.ready = function(fn) {
    return fn && (this.isReady_ ? fn.call(this) : (void 0 === this.readyQueue_ && (this.readyQueue_ = []), this.readyQueue_.push(fn))), this
}, vjs.Component.prototype.triggerReady = function() {
    this.isReady_ = !0;
    var readyQueue = this.readyQueue_;
    if (readyQueue && readyQueue.length > 0) {
        for (var i = 0, j = readyQueue.length; j > i; i++) readyQueue[i].call(this);
        this.readyQueue_ = [], this.trigger("ready")
    }
}, vjs.Component.prototype.hasClass = function(classToCheck) {
    return vjs.hasClass(this.el_, classToCheck)
}, vjs.Component.prototype.addClass = function(classToAdd) {
    return vjs.addClass(this.el_, classToAdd), this
}, vjs.Component.prototype.removeClass = function(classToRemove) {
    return vjs.removeClass(this.el_, classToRemove), this
}, vjs.Component.prototype.show = function() {
    return this.el_.style.display = "block", this
}, vjs.Component.prototype.hide = function() {
    return this.el_.style.display = "none", this
}, vjs.Component.prototype.lockShowing = function() {
    return this.addClass("vjs-lock-showing"), this
}, vjs.Component.prototype.unlockShowing = function() {
    return this.removeClass("vjs-lock-showing"), this
}, vjs.Component.prototype.disable = function() {
    this.hide(), this.show = function() {}
}, vjs.Component.prototype.width = function(num, skipListeners) {
    return this.dimension("width", num, skipListeners)
}, vjs.Component.prototype.height = function(num, skipListeners) {
    return this.dimension("height", num, skipListeners)
}, vjs.Component.prototype.dimensions = function(width, height) {
    return this.width(width, !0).height(height)
}, vjs.Component.prototype.dimension = function(widthOrHeight, num, skipListeners) {
    if (void 0 !== num) return (null === num || vjs.isNaN(num)) && (num = 0), -1 !== ("" + num).indexOf("%") || -1 !== ("" + num).indexOf("px") ? this.el_.style[widthOrHeight] = num : "auto" === num ? this.el_.style[widthOrHeight] = "" : this.el_.style[widthOrHeight] = num + "px", skipListeners || this.trigger("resize"), this;
    if (!this.el_) return 0;
    var val = this.el_.style[widthOrHeight],
        pxIndex = val.indexOf("px");
    return -1 !== pxIndex ? parseInt(val.slice(0, pxIndex), 10) : parseInt(this.el_["offset" + vjs.capitalize(widthOrHeight)], 10)
}, vjs.Component.prototype.onResize, vjs.Component.prototype.emitTapEvents = function() {
    var touchStart, firstTouch, touchTime, couldBeTap, noTap, xdiff, ydiff, touchDistance, tapMovementThreshold;
    touchStart = 0, firstTouch = null, tapMovementThreshold = 22, this.on("touchstart", function(event) {
        1 === event.touches.length && (firstTouch = event.touches[0], touchStart = (new Date).getTime(), couldBeTap = !0)
    }), this.on("touchmove", function(event) {
        event.touches.length > 1 ? couldBeTap = !1 : firstTouch && (xdiff = event.touches[0].pageX - firstTouch.pageX, ydiff = event.touches[0].pageY - firstTouch.pageY, touchDistance = Math.sqrt(xdiff * xdiff + ydiff * ydiff), touchDistance > tapMovementThreshold && (couldBeTap = !1))
    }), noTap = function() {
        couldBeTap = !1
    }, this.on("touchleave", noTap), this.on("touchcancel", noTap), this.on("touchend", function(event) {
        firstTouch = null, couldBeTap === !0 && (touchTime = (new Date).getTime() - touchStart, 250 > touchTime && (event.preventDefault(), this.trigger("tap")))
    })
}, vjs.Component.prototype.enableTouchActivity = function() {
    var report, touchHolding, touchEnd;
    report = vjs.bind(this.player(), this.player().reportUserActivity), this.on("touchstart", function() {
        report(), clearInterval(touchHolding), touchHolding = setInterval(report, 250)
    }), touchEnd = function(event) {
        report(), clearInterval(touchHolding)
    }, this.on("touchmove", report), this.on("touchend", touchEnd), this.on("touchcancel", touchEnd)
}, vjs.Button = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options), this.emitTapEvents(), this.on("tap", this.onClick), this.on("click", this.onClick), this.on("focus", this.onFocus), this.on("blur", this.onBlur)
    }
}), vjs.Button.prototype.createEl = function(type, props) {
    var el;
    return props = vjs.obj.merge({
        className: this.buildCSSClass(),
        role: "button",
        "aria-live": "polite",
        tabIndex: 0
    }, props), el = vjs.Component.prototype.createEl.call(this, type, props), props.innerHTML || (this.contentEl_ = vjs.createEl("div", {
        className: "vjs-control-content"
    }), this.controlText_ = vjs.createEl("span", {
        className: "vjs-control-text",
        innerHTML: this.localize(this.buttonText) || "Need Text"
    }), this.contentEl_.appendChild(this.controlText_), el.appendChild(this.contentEl_)), el
}, vjs.Button.prototype.buildCSSClass = function() {
    return "vjs-control " + vjs.Component.prototype.buildCSSClass.call(this)
}, vjs.Button.prototype.onClick = function() {}, vjs.Button.prototype.onFocus = function() {
    vjs.on(document, "keydown", vjs.bind(this, this.onKeyPress))
}, vjs.Button.prototype.onKeyPress = function(event) {
    (32 == event.which || 13 == event.which) && (event.preventDefault(), this.onClick())
}, vjs.Button.prototype.onBlur = function() {
    vjs.off(document, "keydown", vjs.bind(this, this.onKeyPress))
}, vjs.Slider = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options), this.bar = this.getChild(this.options_.barName), this.handle = this.getChild(this.options_.handleName), this.on("mousedown", this.onMouseDown), this.on("touchstart", this.onMouseDown), this.on("focus", this.onFocus), this.on("blur", this.onBlur), this.on("click", this.onClick), this.player_.on("controlsvisible", vjs.bind(this, this.update)), player.on(this.playerEvent, vjs.bind(this, this.update)), this.boundEvents = {}, this.boundEvents.move = vjs.bind(this, this.onMouseMove), this.boundEvents.end = vjs.bind(this, this.onMouseUp)
    }
}), vjs.Slider.prototype.dispose = function() {
    vjs.off(document, "mousemove", this.boundEvents.move, !1), vjs.off(document, "mouseup", this.boundEvents.end, !1), vjs.off(document, "touchmove", this.boundEvents.move, !1), vjs.off(document, "touchend", this.boundEvents.end, !1), vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress)), vjs.Component.prototype.dispose.call(this)
}, vjs.Slider.prototype.createEl = function(type, props) {
    return props = props || {}, props.className = props.className + " vjs-slider", props = vjs.obj.merge({
        role: "slider",
        "aria-valuenow": 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        tabIndex: 0
    }, props), vjs.Component.prototype.createEl.call(this, type, props)
}, vjs.Slider.prototype.onMouseDown = function(event) {
    event.preventDefault(), vjs.blockTextSelection(), this.addClass("vjs-sliding"), vjs.on(document, "mousemove", this.boundEvents.move), vjs.on(document, "mouseup", this.boundEvents.end), vjs.on(document, "touchmove", this.boundEvents.move), vjs.on(document, "touchend", this.boundEvents.end), this.onMouseMove(event)
}, vjs.Slider.prototype.onMouseMove = function() {}, vjs.Slider.prototype.onMouseUp = function() {
    vjs.unblockTextSelection(), this.removeClass("vjs-sliding"), vjs.off(document, "mousemove", this.boundEvents.move, !1), vjs.off(document, "mouseup", this.boundEvents.end, !1), vjs.off(document, "touchmove", this.boundEvents.move, !1), vjs.off(document, "touchend", this.boundEvents.end, !1), this.update()
}, vjs.Slider.prototype.update = function() {
    if (this.el_) {
        var barProgress, progress = this.getPercent(),
            handle = this.handle,
            bar = this.bar;
        if (isNaN(progress) && (progress = 0), barProgress = progress, handle) {
            var box = this.el_,
                boxWidth = box.offsetWidth,
                handleWidth = handle.el().offsetWidth,
                handlePercent = handleWidth ? handleWidth / boxWidth : 0,
                boxAdjustedPercent = 1 - handlePercent,
                adjustedProgress = progress * boxAdjustedPercent;
            barProgress = adjustedProgress + handlePercent / 2, handle.el().style.left = vjs.round(100 * adjustedProgress, 2) + "%"
        }
        bar && (bar.el().style.width = vjs.round(100 * barProgress, 2) + "%")
    }
}, vjs.Slider.prototype.calculateDistance = function(event) {
    var el, box, boxX, boxY, boxW, boxH, handle, pageX, pageY;
    if (el = this.el_, box = vjs.findPosition(el), boxW = boxH = el.offsetWidth, handle = this.handle, this.options().vertical) {
        if (boxY = box.top, pageY = event.changedTouches ? event.changedTouches[0].pageY : event.pageY, handle) {
            var handleH = handle.el().offsetWidth;
            boxY += handleH / 2, boxH -= handleH
        }
        return Math.max(0, Math.min(1, (boxY - pageY + boxH) / boxH))
    }
    if (boxX = box.left, pageX = event.changedTouches ? event.changedTouches[0].pageX : event.pageX, handle) {
        var handleW = handle.el().offsetWidth;
        boxX += handleW / 2, boxW -= handleW
    }
    return Math.max(0, Math.min(1, (pageX - boxX) / boxW))
}, vjs.Slider.prototype.onFocus = function() {
    vjs.on(document, "keyup", vjs.bind(this, this.onKeyPress))
}, vjs.Slider.prototype.onKeyPress = function(event) {
    37 == event.which || 40 == event.which ? (event.preventDefault(), this.stepBack()) : (38 == event.which || 39 == event.which) && (event.preventDefault(), this.stepForward())
}, vjs.Slider.prototype.onBlur = function() {
    vjs.off(document, "keyup", vjs.bind(this, this.onKeyPress))
}, vjs.Slider.prototype.onClick = function(event) {
    event.stopImmediatePropagation(), event.preventDefault()
}, vjs.SliderHandle = vjs.Component.extend(), vjs.SliderHandle.prototype.defaultValue = 0, vjs.SliderHandle.prototype.createEl = function(type, props) {
    return props = props || {}, props.className = props.className + " vjs-slider-handle", props = vjs.obj.merge({
        innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
    }, props), vjs.Component.prototype.createEl.call(this, "div", props)
}, vjs.Menu = vjs.Component.extend(), vjs.Menu.prototype.addItem = function(component) {
    this.addChild(component), component.on("click", vjs.bind(this, function() {
        this.unlockShowing()
    }))
}, vjs.Menu.prototype.createEl = function() {
    var contentElType = this.options().contentElType || "ul";
    this.contentEl_ = vjs.createEl(contentElType, {
        className: "vjs-menu-content"
    });
    var el = vjs.Component.prototype.createEl.call(this, "div", {
        append: this.contentEl_,
        className: "vjs-menu"
    });
    return el.appendChild(this.contentEl_), vjs.on(el, "click", function(event) {
        event.preventDefault(), event.stopImmediatePropagation()
    }), el
}, vjs.MenuItem = vjs.Button.extend({
    init: function(player, options) {
        vjs.Button.call(this, player, options), this.selected(options.selected)
    }
}), vjs.MenuItem.prototype.createEl = function(type, props) {
    return vjs.Button.prototype.createEl.call(this, "li", vjs.obj.merge({
        className: "vjs-menu-item",
        innerHTML: this.options_.label
    }, props))
}, vjs.MenuItem.prototype.onClick = function() {
    this.selected(!0)
}, vjs.MenuItem.prototype.selected = function(selected) {
    selected ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-selected", !0)) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-selected", !1))
}, vjs.MenuButton = vjs.Button.extend({
    init: function(player, options) {
        vjs.Button.call(this, player, options), this.menu = this.createMenu(), this.addChild(this.menu), this.items && 0 === this.items.length && this.hide(), this.on("keyup", this.onKeyPress), this.el_.setAttribute("aria-haspopup", !0), this.el_.setAttribute("role", "button")
    }
}), vjs.MenuButton.prototype.buttonPressed_ = !1, vjs.MenuButton.prototype.createMenu = function() {
    var menu = new vjs.Menu(this.player_);
    if (this.options().title && menu.contentEl().appendChild(vjs.createEl("li", {
            className: "vjs-menu-title",
            innerHTML: vjs.capitalize(this.options().title),
            tabindex: -1
        })), this.items = this.createItems(), this.items)
        for (var i = 0; i < this.items.length; i++) menu.addItem(this.items[i]);
    return menu
}, vjs.MenuButton.prototype.createItems = function() {}, vjs.MenuButton.prototype.buildCSSClass = function() {
    return this.className + " vjs-menu-button " + vjs.Button.prototype.buildCSSClass.call(this)
}, vjs.MenuButton.prototype.onFocus = function() {}, vjs.MenuButton.prototype.onBlur = function() {}, vjs.MenuButton.prototype.onClick = function() {
    this.one("mouseout", vjs.bind(this, function() {
        this.menu.unlockShowing(), this.el_.blur()
    })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
}, vjs.MenuButton.prototype.onKeyPress = function(event) {
    event.preventDefault(), 32 == event.which || 13 == event.which ? this.buttonPressed_ ? this.unpressButton() : this.pressButton() : 27 == event.which && this.buttonPressed_ && this.unpressButton()
}, vjs.MenuButton.prototype.pressButton = function() {
    this.buttonPressed_ = !0, this.menu.lockShowing(), this.el_.setAttribute("aria-pressed", !0), this.items && this.items.length > 0 && this.items[0].el().focus()
}, vjs.MenuButton.prototype.unpressButton = function() {
    this.buttonPressed_ = !1, this.menu.unlockShowing(), this.el_.setAttribute("aria-pressed", !1)
}, vjs.MediaError = function(code) {
    "number" == typeof code ? this.code = code : "string" == typeof code ? this.message = code : "object" == typeof code && vjs.obj.merge(this, code),
        this.message || (this.message = vjs.MediaError.defaultMessages[this.code] || "")
}, vjs.MediaError.prototype.code = 0, vjs.MediaError.prototype.message = "", vjs.MediaError.prototype.status = null, vjs.MediaError.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], vjs.MediaError.defaultMessages = {
    1: "You aborted the video playback",
    2: "A network error caused the video download to fail part-way.",
    3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
    4: "The video could not be loaded, either because the server or network failed or because the format is not supported.",
    5: "The video is encrypted and we do not have the keys to decrypt it."
};
for (var errNum = 0; errNum < vjs.MediaError.errorTypes.length; errNum++) vjs.MediaError[vjs.MediaError.errorTypes[errNum]] = errNum, vjs.MediaError.prototype[vjs.MediaError.errorTypes[errNum]] = errNum;
! function() {
    var apiMap, specApi, browserApi, i;
    for (vjs.browser.fullscreenAPI, apiMap = [
            ["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
            ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"],
            ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"],
            ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]
        ], specApi = apiMap[0], i = 0; i < apiMap.length; i++)
        if (apiMap[i][1] in document) {
            browserApi = apiMap[i];
            break
        }
    if (browserApi)
        for (vjs.browser.fullscreenAPI = {}, i = 0; i < browserApi.length; i++) vjs.browser.fullscreenAPI[specApi[i]] = browserApi[i]
}(), vjs.Player = vjs.Component.extend({
    init: function(tag, options, ready) {
        this.tag = tag, tag.id = tag.id || "vjs_video_" + vjs.guid++, this.tagAttributes = tag && vjs.getElementAttributes(tag), options = vjs.obj.merge(this.getTagSettings(tag), options), this.language_ = options.language || vjs.options.language, this.languages_ = options.languages || vjs.options.languages, this.cache_ = {}, this.poster_ = options.poster, this.controls_ = options.controls, tag.controls = !1, options.reportTouchActivity = !1, this.isAudio("audio" === this.tag.nodeName.toLowerCase()), vjs.Component.call(this, this, options, ready), this.controls() ? this.addClass("vjs-controls-enabled") : this.addClass("vjs-controls-disabled"), this.isAudio() && this.addClass("vjs-audio"), vjs.players[this.id_] = this, options.plugins && vjs.obj.each(options.plugins, function(key, val) {
            this[key](val)
        }, this), this.listenForUserActivity()
    }
}), vjs.Player.prototype.language_, vjs.Player.prototype.language = function(languageCode) {
    return void 0 === languageCode ? this.language_ : (this.language_ = languageCode, this)
}, vjs.Player.prototype.languages_, vjs.Player.prototype.languages = function() {
    return this.languages_
}, vjs.Player.prototype.options_ = vjs.options, vjs.Player.prototype.dispose = function() {
    this.trigger("dispose"), this.off("dispose"), vjs.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech && this.tech.dispose(), vjs.Component.prototype.dispose.call(this)
}, vjs.Player.prototype.getTagSettings = function(tag) {
    var tagOptions, dataSetup, options = {
        sources: [],
        tracks: []
    };
    if (tagOptions = vjs.getElementAttributes(tag), dataSetup = tagOptions["data-setup"], null !== dataSetup && vjs.obj.merge(tagOptions, vjs.JSON.parse(dataSetup || "{}")), vjs.obj.merge(options, tagOptions), tag.hasChildNodes()) {
        var children, child, childName, i, j;
        for (children = tag.childNodes, i = 0, j = children.length; j > i; i++) child = children[i], childName = child.nodeName.toLowerCase(), "source" === childName ? options.sources.push(vjs.getElementAttributes(child)) : "track" === childName && options.tracks.push(vjs.getElementAttributes(child))
    }
    return options
}, vjs.Player.prototype.createEl = function() {
    var attrs, el = this.el_ = vjs.Component.prototype.createEl.call(this, "div"),
        tag = this.tag;
    if (tag.removeAttribute("width"), tag.removeAttribute("height"), tag.hasChildNodes()) {
        var nodes, nodesLength, i, node, nodeName, removeNodes;
        for (nodes = tag.childNodes, nodesLength = nodes.length, removeNodes = []; nodesLength--;) node = nodes[nodesLength], nodeName = node.nodeName.toLowerCase(), "track" === nodeName && removeNodes.push(node);
        for (i = 0; i < removeNodes.length; i++) tag.removeChild(removeNodes[i])
    }
    return attrs = vjs.getElementAttributes(tag), vjs.obj.each(attrs, function(attr) {
        "class" == attr ? el.className = attrs[attr] : el.setAttribute(attr, attrs[attr])
    }), tag.id += "_html5_api", tag.className = "vjs-tech", tag.player = el.player = this, this.addClass("vjs-paused"), this.width(this.options_.width, !0), this.height(this.options_.height, !0), tag.parentNode && tag.parentNode.insertBefore(el, tag), vjs.insertFirst(tag, el), this.el_ = el, this.on("loadstart", this.onLoadStart), this.on("waiting", this.onWaiting), this.on(["canplay", "canplaythrough", "playing", "ended"], this.onWaitEnd), this.on("seeking", this.onSeeking), this.on("seeked", this.onSeeked), this.on("ended", this.onEnded), this.on("play", this.onPlay), this.on("firstplay", this.onFirstPlay), this.on("pause", this.onPause), this.on("progress", this.onProgress), this.on("durationchange", this.onDurationChange), this.on("fullscreenchange", this.onFullscreenChange), el
}, vjs.Player.prototype.loadTech = function(techName, source) {
    this.tech && this.unloadTech(), "Html5" !== techName && this.tag && (vjs.Html5.disposeMediaElement(this.tag), this.tag = null), this.techName = techName, this.isReady_ = !1;
    var techReady = function() {
            this.player_.triggerReady()
        },
        techOptions = vjs.obj.merge({
            source: source,
            parentEl: this.el_
        }, this.options_[techName.toLowerCase()]);
    source && (this.currentType_ = source.type, source.src == this.cache_.src && this.cache_.currentTime > 0 && (techOptions.startTime = this.cache_.currentTime), this.cache_.src = source.src), this.tech = new window.videojs[techName](this, techOptions), "Html5" === techName && this.tech.setControls(!1), this.tech.ready(techReady)
}, vjs.Player.prototype.unloadTech = function() {
    this.isReady_ = !1, this.tech.dispose(), this.tech = !1
}, vjs.Player.prototype.onLoadStart = function() {
    this.error(null), this.paused() ? (this.hasStarted(!1), this.one("play", function() {
        this.hasStarted(!0)
    })) : this.trigger("firstplay")
}, vjs.Player.prototype.hasStarted_ = !1, vjs.Player.prototype.hasStarted = function(hasStarted) {
    return void 0 !== hasStarted ? (this.hasStarted_ !== hasStarted && (this.hasStarted_ = hasStarted, hasStarted ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started")), this) : this.hasStarted_
}, vjs.Player.prototype.onLoadedMetaData, vjs.Player.prototype.onLoadedData, vjs.Player.prototype.onLoadedAllData, vjs.Player.prototype.onPlay = function() {
    this.removeClass("vjs-paused"), this.addClass("vjs-playing")
}, vjs.Player.prototype.onWaiting = function() {
    this.addClass("vjs-waiting")
}, vjs.Player.prototype.onWaitEnd = function() {
    this.removeClass("vjs-waiting")
}, vjs.Player.prototype.onSeeking = function() {
    this.addClass("vjs-seeking")
}, vjs.Player.prototype.onSeeked = function() {
    this.removeClass("vjs-seeking")
}, vjs.Player.prototype.onFirstPlay = function() {
    this.options_.starttime && this.currentTime(this.options_.starttime), this.addClass("vjs-has-started")
}, vjs.Player.prototype.onPause = function() {
    this.removeClass("vjs-playing"), this.addClass("vjs-paused")
}, vjs.Player.prototype.onTimeUpdate, vjs.Player.prototype.onProgress = function() {
    1 == this.bufferedPercent() && this.trigger("loadedalldata")
}, vjs.Player.prototype.onEnded = function() {
    this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause()
}, vjs.Player.prototype.onDurationChange = function() {
    var duration = this.techGet("duration");
    duration && (0 > duration && (duration = 1 / 0), this.duration(duration), duration === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"))
}, vjs.Player.prototype.onVolumeChange, vjs.Player.prototype.onFullscreenChange = function() {
    this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
}, vjs.Player.prototype.cache_, vjs.Player.prototype.getCache = function() {
    return this.cache_
}, vjs.Player.prototype.techCall = function(method, arg) {
    if (this.tech && !this.tech.isReady_) this.tech.ready(function() {
        this[method](arg)
    });
    else try {
        this.tech[method](arg)
    } catch (e) {
        throw vjs.log(e), e
    }
}, vjs.Player.prototype.techGet = function(method) {
    if (this.tech && this.tech.isReady_) try {
        return this.tech[method]()
    } catch (e) {
        throw void 0 === this.tech[method] ? vjs.log("Video.js: " + method + " method not defined for " + this.techName + " playback technology.", e) : "TypeError" == e.name ? (vjs.log("Video.js: " + method + " unavailable on " + this.techName + " playback technology element.", e), this.tech.isReady_ = !1) : vjs.log(e), e
    }
}, vjs.Player.prototype.play = function() {
    return this.techCall("play"), this
}, vjs.Player.prototype.pause = function() {
    return this.techCall("pause"), this
}, vjs.Player.prototype.paused = function() {
    return this.techGet("paused") === !1 ? !1 : !0
}, vjs.Player.prototype.currentTime = function(seconds) {
    return void 0 !== seconds ? (this.techCall("setCurrentTime", seconds), this) : this.cache_.currentTime = this.techGet("currentTime") || 0
}, vjs.Player.prototype.duration = function(seconds) {
    return void 0 !== seconds ? (this.cache_.duration = parseFloat(seconds), this) : (void 0 === this.cache_.duration && this.onDurationChange(), this.cache_.duration || 0)
}, vjs.Player.prototype.remainingTime = function() {
    return this.duration() - this.currentTime()
}, vjs.Player.prototype.buffered = function() {
    var buffered = this.techGet("buffered");
    return buffered && buffered.length || (buffered = vjs.createTimeRange(0, 0)), buffered
}, vjs.Player.prototype.bufferedPercent = function() {
    var start, end, duration = this.duration(),
        buffered = this.buffered(),
        bufferedDuration = 0;
    if (!duration) return 0;
    for (var i = 0; i < buffered.length; i++) start = buffered.start(i), end = buffered.end(i), end > duration && (end = duration), bufferedDuration += end - start;
    return bufferedDuration / duration
}, vjs.Player.prototype.bufferedEnd = function() {
    var buffered = this.buffered(),
        duration = this.duration(),
        end = buffered.end(buffered.length - 1);
    return end > duration && (end = duration), end
}, vjs.Player.prototype.volume = function(percentAsDecimal) {
    var vol;
    return void 0 !== percentAsDecimal ? (vol = Math.max(0, Math.min(1, parseFloat(percentAsDecimal))), this.cache_.volume = vol, this.techCall("setVolume", vol), vjs.setLocalStorage("volume", vol), this) : (vol = parseFloat(this.techGet("volume")), isNaN(vol) ? 1 : vol)
}, vjs.Player.prototype.muted = function(muted) {
    return void 0 !== muted ? (this.techCall("setMuted", muted), this) : this.techGet("muted") || !1
}, vjs.Player.prototype.supportsFullScreen = function() {
    return this.techGet("supportsFullScreen") || !1
}, vjs.Player.prototype.isFullscreen_ = !1, vjs.Player.prototype.isFullscreen = function(isFS) {
    return void 0 !== isFS ? (this.isFullscreen_ = !!isFS, this) : this.isFullscreen_
}, vjs.Player.prototype.isFullScreen = function(isFS) {
    return vjs.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'), this.isFullscreen(isFS)
}, vjs.Player.prototype.requestFullscreen = function() {
    var fsApi = vjs.browser.fullscreenAPI;
    return this.isFullscreen(!0), fsApi ? (vjs.on(document, fsApi.fullscreenchange, vjs.bind(this, function(e) {
        this.isFullscreen(document[fsApi.fullscreenElement]), this.isFullscreen() === !1 && vjs.off(document, fsApi.fullscreenchange, arguments.callee), this.trigger("fullscreenchange")
    })), this.el_[fsApi.requestFullscreen]()) : this.tech.supportsFullScreen() ? this.techCall("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange")), this
}, vjs.Player.prototype.requestFullScreen = function() {
    return vjs.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'), this.requestFullscreen()
}, vjs.Player.prototype.exitFullscreen = function() {
    var fsApi = vjs.browser.fullscreenAPI;
    return this.isFullscreen(!1), fsApi ? document[fsApi.exitFullscreen]() : this.tech.supportsFullScreen() ? this.techCall("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange")), this
}, vjs.Player.prototype.cancelFullScreen = function() {
    return vjs.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"), this.exitFullscreen()
}, vjs.Player.prototype.enterFullWindow = function() {
    this.isFullWindow = !0, this.docOrigOverflow = document.documentElement.style.overflow, vjs.on(document, "keydown", vjs.bind(this, this.fullWindowOnEscKey)), document.documentElement.style.overflow = "hidden", vjs.addClass(document.body, "vjs-full-window"), this.trigger("enterFullWindow")
}, vjs.Player.prototype.fullWindowOnEscKey = function(event) {
    27 === event.keyCode && (this.isFullscreen() === !0 ? this.exitFullscreen() : this.exitFullWindow())
}, vjs.Player.prototype.exitFullWindow = function() {
    this.isFullWindow = !1, vjs.off(document, "keydown", this.fullWindowOnEscKey), document.documentElement.style.overflow = this.docOrigOverflow, vjs.removeClass(document.body, "vjs-full-window"), this.trigger("exitFullWindow")
}, vjs.Player.prototype.selectSource = function(sources) {
    for (var i = 0, j = this.options_.techOrder; i < j.length; i++) {
        var techName = vjs.capitalize(j[i]),
            tech = window.videojs[techName];
        if (tech) {
            if (tech.isSupported())
                for (var a = 0, b = sources; a < b.length; a++) {
                    var source = b[a];
                    if (tech.canPlaySource(source)) return {
                        source: source,
                        tech: techName
                    }
                }
        } else vjs.log.error('The "' + techName + '" tech is undefined. Skipped browser support check for that tech.')
    }
    return !1
}, vjs.Player.prototype.src = function(source) {
    return void 0 === source ? this.techGet("src") : (vjs.obj.isArray(source) ? this.sourceList_(source) : "string" == typeof source ? this.src({
        src: source
    }) : source instanceof Object && (source.type && !window.videojs[this.techName].canPlaySource(source) ? this.sourceList_([source]) : (this.cache_.src = source.src, this.currentType_ = source.type || "", this.ready(function() {
        this.techCall("src", source.src), "auto" == this.options_.preload && this.load(), this.options_.autoplay && this.play()
    }))), this)
}, vjs.Player.prototype.sourceList_ = function(sources) {
    var errorTimeout, sourceTech = this.selectSource(sources);
    sourceTech ? sourceTech.tech === this.techName ? this.src(sourceTech.source) : this.loadTech(sourceTech.tech, sourceTech.source) : (errorTimeout = setTimeout(vjs.bind(this, function() {
        this.error({
            code: 4,
            message: this.localize(this.options().notSupportedMessage)
        })
    }), 0), this.triggerReady(), this.on("dispose", function() {
        clearTimeout(errorTimeout)
    }))
}, vjs.Player.prototype.load = function() {
    return this.techCall("load"), this
}, vjs.Player.prototype.currentSrc = function() {
    return this.techGet("currentSrc") || this.cache_.src || ""
}, vjs.Player.prototype.currentType = function() {
    return this.currentType_ || ""
}, vjs.Player.prototype.preload = function(value) {
    return void 0 !== value ? (this.techCall("setPreload", value), this.options_.preload = value, this) : this.techGet("preload")
}, vjs.Player.prototype.autoplay = function(value) {
    return void 0 !== value ? (this.techCall("setAutoplay", value), this.options_.autoplay = value, this) : this.techGet("autoplay", value)
}, vjs.Player.prototype.loop = function(value) {
    return void 0 !== value ? (this.techCall("setLoop", value), this.options_.loop = value, this) : this.techGet("loop")
}, vjs.Player.prototype.poster_, vjs.Player.prototype.poster = function(src) {
    return void 0 === src ? this.poster_ : (this.poster_ = src, this.techCall("setPoster", src), this.trigger("posterchange"), this)
}, vjs.Player.prototype.controls_, vjs.Player.prototype.controls = function(bool) {
    return void 0 !== bool ? (bool = !!bool, this.controls_ !== bool && (this.controls_ = bool, bool ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled")) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"))), this) : this.controls_
}, vjs.Player.prototype.usingNativeControls_, vjs.Player.prototype.usingNativeControls = function(bool) {
    return void 0 !== bool ? (bool = !!bool, this.usingNativeControls_ !== bool && (this.usingNativeControls_ = bool, bool ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols"))), this) : this.usingNativeControls_
}, vjs.Player.prototype.error_ = null, vjs.Player.prototype.error = function(err) {
    return void 0 === err ? this.error_ : null === err ? (this.error_ = err, this.removeClass("vjs-error"), this) : (err instanceof vjs.MediaError ? this.error_ = err : this.error_ = new vjs.MediaError(err), this.trigger("error"), this.addClass("vjs-error"), vjs.log.error("(CODE:" + this.error_.code + " " + vjs.MediaError.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), this)
}, vjs.Player.prototype.ended = function() {
    return this.techGet("ended")
}, vjs.Player.prototype.seeking = function() {
    return this.techGet("seeking")
}, vjs.Player.prototype.userActivity_ = !0, vjs.Player.prototype.reportUserActivity = function(event) {
    this.userActivity_ = !0
}, vjs.Player.prototype.userActive_ = !0, vjs.Player.prototype.userActive = function(bool) {
    return void 0 !== bool ? (bool = !!bool, bool !== this.userActive_ && (this.userActive_ = bool, bool ? (this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), this.trigger("useractive")) : (this.userActivity_ = !1, this.tech && this.tech.one("mousemove", function(e) {
        e.stopPropagation(), e.preventDefault()
    }), this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive"))), this) : this.userActive_
}, vjs.Player.prototype.listenForUserActivity = function() {
    var onActivity, onMouseMove, onMouseDown, mouseInProgress, onMouseUp, activityCheck, inactivityTimeout, lastMoveX, lastMoveY;
    onActivity = vjs.bind(this, this.reportUserActivity), onMouseMove = function(e) {
        (e.screenX != lastMoveX || e.screenY != lastMoveY) && (lastMoveX = e.screenX, lastMoveY = e.screenY, onActivity())
    }, onMouseDown = function() {
        onActivity(), clearInterval(mouseInProgress), mouseInProgress = setInterval(onActivity, 250)
    }, onMouseUp = function(event) {
        onActivity(), clearInterval(mouseInProgress)
    }, this.on("mousedown", onMouseDown), this.on("mousemove", onMouseMove), this.on("mouseup", onMouseUp), this.on("keydown", onActivity), this.on("keyup", onActivity), activityCheck = setInterval(vjs.bind(this, function() {
        if (this.userActivity_) {
            this.userActivity_ = !1, this.userActive(!0), clearTimeout(inactivityTimeout);
            var timeout = this.options().inactivityTimeout;
            timeout > 0 && (inactivityTimeout = setTimeout(vjs.bind(this, function() {
                this.userActivity_ || this.userActive(!1)
            }), timeout))
        }
    }), 250), this.on("dispose", function() {
        clearInterval(activityCheck), clearTimeout(inactivityTimeout)
    })
}, vjs.Player.prototype.playbackRate = function(rate) {
    return void 0 !== rate ? (this.techCall("setPlaybackRate", rate), this) : this.tech && this.tech.featuresPlaybackRate ? this.techGet("playbackRate") : 1
}, vjs.Player.prototype.isAudio_ = !1, vjs.Player.prototype.isAudio = function(bool) {
    return void 0 !== bool ? (this.isAudio_ = !!bool, this) : this.isAudio_
}, vjs.ControlBar = vjs.Component.extend(), vjs.ControlBar.prototype.options_ = {
    loadEvent: "play",
    children: {
        playToggle: {},
        currentTimeDisplay: {},
        timeDivider: {},
        durationDisplay: {},
        remainingTimeDisplay: {},
        liveDisplay: {},
        progressControl: {},
        fullscreenToggle: {},
        volumeControl: {},
        muteToggle: {},
        playbackRateMenuButton: {}
    }
}, vjs.ControlBar.prototype.createEl = function() {
    return vjs.createEl("div", {
        className: "vjs-control-bar"
    })
}, vjs.LiveDisplay = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options)
    }
}), vjs.LiveDisplay.prototype.createEl = function() {
    var el = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-live-controls vjs-control"
    });
    return this.contentEl_ = vjs.createEl("div", {
        className: "vjs-live-display",
        innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + "</span>" + this.localize("LIVE"),
        "aria-live": "off"
    }), el.appendChild(this.contentEl_), el
}, vjs.PlayToggle = vjs.Button.extend({
    init: function(player, options) {
        vjs.Button.call(this, player, options), player.on("play", vjs.bind(this, this.onPlay)), player.on("pause", vjs.bind(this, this.onPause))
    }
}), vjs.PlayToggle.prototype.buttonText = "Play", vjs.PlayToggle.prototype.buildCSSClass = function() {
    return "vjs-play-control " + vjs.Button.prototype.buildCSSClass.call(this)
}, vjs.PlayToggle.prototype.onClick = function() {
    this.player_.paused() ? this.player_.play() : this.player_.pause()
}, vjs.PlayToggle.prototype.onPlay = function() {
    vjs.removeClass(this.el_, "vjs-paused"), vjs.addClass(this.el_, "vjs-playing"), this.el_.children[0].children[0].innerHTML = this.localize("Pause")
}, vjs.PlayToggle.prototype.onPause = function() {
    vjs.removeClass(this.el_, "vjs-playing"), vjs.addClass(this.el_, "vjs-paused"), this.el_.children[0].children[0].innerHTML = this.localize("Play")
}, vjs.CurrentTimeDisplay = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options), player.on("timeupdate", vjs.bind(this, this.updateContent))
    }
}), vjs.CurrentTimeDisplay.prototype.createEl = function() {
    var el = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-current-time vjs-time-controls vjs-control"
    });
    return this.contentEl_ = vjs.createEl("div", {
        className: "vjs-current-time-display",
        innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
        "aria-live": "off"
    }), el.appendChild(this.contentEl_), el
}, vjs.CurrentTimeDisplay.prototype.updateContent = function() {
    var time = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize("Current Time") + "</span> " + vjs.formatTime(time, this.player_.duration())
}, vjs.DurationDisplay = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options), player.on("timeupdate", vjs.bind(this, this.updateContent))
    }
}), vjs.DurationDisplay.prototype.createEl = function() {
    var el = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-duration vjs-time-controls vjs-control"
    });
    return this.contentEl_ = vjs.createEl("div", {
        className: "vjs-duration-display",
        innerHTML: '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> 0:00",
        "aria-live": "off"
    }), el.appendChild(this.contentEl_), el
}, vjs.DurationDisplay.prototype.updateContent = function() {
    var duration = this.player_.duration();
    duration && (this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize("Duration Time") + "</span> " + vjs.formatTime(duration))
}, vjs.TimeDivider = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options)
    }
}), vjs.TimeDivider.prototype.createEl = function() {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-time-divider",
        innerHTML: "<div><span>/</span></div>"
    })
}, vjs.RemainingTimeDisplay = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options), player.on("timeupdate", vjs.bind(this, this.updateContent))
    }
}), vjs.RemainingTimeDisplay.prototype.createEl = function() {
    var el = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-remaining-time vjs-time-controls vjs-control"
    });
    return this.contentEl_ = vjs.createEl("div", {
        className: "vjs-remaining-time-display",
        innerHTML: '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -0:00",
        "aria-live": "off"
    }), el.appendChild(this.contentEl_), el
}, vjs.RemainingTimeDisplay.prototype.updateContent = function() {
    this.player_.duration() && (this.contentEl_.innerHTML = '<span class="vjs-control-text">' + this.localize("Remaining Time") + "</span> -" + vjs.formatTime(this.player_.remainingTime()))
}, vjs.FullscreenToggle = vjs.Button.extend({
    init: function(player, options) {
        vjs.Button.call(this, player, options)
    }
}), vjs.FullscreenToggle.prototype.buttonText = "Fullscreen", vjs.FullscreenToggle.prototype.buildCSSClass = function() {
    return "vjs-fullscreen-control " + vjs.Button.prototype.buildCSSClass.call(this)
}, vjs.FullscreenToggle.prototype.onClick = function() {
    this.player_.isFullscreen() ? (this.player_.exitFullscreen(), this.controlText_.innerHTML = this.localize("Fullscreen")) : (this.player_.requestFullscreen(), this.controlText_.innerHTML = this.localize("Non-Fullscreen"))
}, vjs.ProgressControl = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options)
    }
}), vjs.ProgressControl.prototype.options_ = {
    children: {
        seekBar: {}
    }
}, vjs.ProgressControl.prototype.createEl = function() {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-progress-control vjs-control"
    })
}, vjs.SeekBar = vjs.Slider.extend({
    init: function(player, options) {
        vjs.Slider.call(this, player, options), player.on("timeupdate", vjs.bind(this, this.updateARIAAttributes)), player.ready(vjs.bind(this, this.updateARIAAttributes))
    }
}), vjs.SeekBar.prototype.options_ = {
    children: {
        loadProgressBar: {},
        playProgressBar: {},
        seekHandle: {}
    },
    barName: "playProgressBar",
    handleName: "seekHandle"
}, vjs.SeekBar.prototype.playerEvent = "timeupdate", vjs.SeekBar.prototype.createEl = function() {
    return vjs.Slider.prototype.createEl.call(this, "div", {
        className: "vjs-progress-holder",
        "aria-label": "video progress bar"
    })
}, vjs.SeekBar.prototype.updateARIAAttributes = function() {
    var time = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.el_.setAttribute("aria-valuenow", vjs.round(100 * this.getPercent(), 2)), this.el_.setAttribute("aria-valuetext", vjs.formatTime(time, this.player_.duration()))
}, vjs.SeekBar.prototype.getPercent = function() {
    return this.player_.currentTime() / this.player_.duration()
}, vjs.SeekBar.prototype.onMouseDown = function(event) {
    vjs.Slider.prototype.onMouseDown.call(this, event), this.player_.scrubbing = !0, this.videoWasPlaying = !this.player_.paused(), this.player_.pause()
}, vjs.SeekBar.prototype.onMouseMove = function(event) {
    var newTime = this.calculateDistance(event) * this.player_.duration();
    newTime == this.player_.duration() && (newTime -= .1), this.player_.currentTime(newTime)
}, vjs.SeekBar.prototype.onMouseUp = function(event) {
    vjs.Slider.prototype.onMouseUp.call(this, event), this.player_.scrubbing = !1, this.videoWasPlaying && this.player_.play()
}, vjs.SeekBar.prototype.stepForward = function() {
    this.player_.currentTime(this.player_.currentTime() + 5)
}, vjs.SeekBar.prototype.stepBack = function() {
    this.player_.currentTime(this.player_.currentTime() - 5)
}, vjs.LoadProgressBar = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options), player.on("progress", vjs.bind(this, this.update))
    }
}), vjs.LoadProgressBar.prototype.createEl = function() {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-load-progress",
        innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
    })
}, vjs.LoadProgressBar.prototype.update = function() {
    var i, start, end, part, buffered = this.player_.buffered(),
        duration = this.player_.duration(),
        bufferedEnd = this.player_.bufferedEnd(),
        children = this.el_.children,
        percentify = function(time, end) {
            var percent = time / end || 0;
            return 100 * percent + "%"
        };
    for (this.el_.style.width = percentify(bufferedEnd, duration), i = 0; i < buffered.length; i++) start = buffered.start(i), end = buffered.end(i), part = children[i], part || (part = this.el_.appendChild(vjs.createEl())), part.style.left = percentify(start, bufferedEnd), part.style.width = percentify(end - start, bufferedEnd);
    for (i = children.length; i > buffered.length; i--) this.el_.removeChild(children[i - 1])
}, vjs.PlayProgressBar = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options)
    }
}), vjs.PlayProgressBar.prototype.createEl = function() {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-play-progress",
        innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
    })
}, vjs.SeekHandle = vjs.SliderHandle.extend({
    init: function(player, options) {
        vjs.SliderHandle.call(this, player, options), player.on("timeupdate", vjs.bind(this, this.updateContent))
    }
}), vjs.SeekHandle.prototype.defaultValue = "00:00", vjs.SeekHandle.prototype.createEl = function() {
    return vjs.SliderHandle.prototype.createEl.call(this, "div", {
        className: "vjs-seek-handle",
        "aria-live": "off"
    })
}, vjs.SeekHandle.prototype.updateContent = function() {
    var time = this.player_.scrubbing ? this.player_.getCache().currentTime : this.player_.currentTime();
    this.el_.innerHTML = '<span class="vjs-control-text">' + vjs.formatTime(time, this.player_.duration()) + "</span>"
}, vjs.VolumeControl = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options), player.tech && player.tech.featuresVolumeControl === !1 && this.addClass("vjs-hidden"), player.on("loadstart", vjs.bind(this, function() {
            player.tech.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
        }))
    }
}), vjs.VolumeControl.prototype.options_ = {
    children: {
        volumeBar: {}
    }
}, vjs.VolumeControl.prototype.createEl = function() {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-volume-control vjs-control"
    })
}, vjs.VolumeBar = vjs.Slider.extend({
    init: function(player, options) {
        vjs.Slider.call(this, player, options), player.on("volumechange", vjs.bind(this, this.updateARIAAttributes)), player.ready(vjs.bind(this, this.updateARIAAttributes))
    }
}), vjs.VolumeBar.prototype.updateARIAAttributes = function() {
    this.el_.setAttribute("aria-valuenow", vjs.round(100 * this.player_.volume(), 2)), this.el_.setAttribute("aria-valuetext", vjs.round(100 * this.player_.volume(), 2) + "%")
}, vjs.VolumeBar.prototype.options_ = {
    children: {
        volumeLevel: {},
        volumeHandle: {}
    },
    barName: "volumeLevel",
    handleName: "volumeHandle"
}, vjs.VolumeBar.prototype.playerEvent = "volumechange", vjs.VolumeBar.prototype.createEl = function() {
    return vjs.Slider.prototype.createEl.call(this, "div", {
        className: "vjs-volume-bar",
        "aria-label": "volume level"
    })
}, vjs.VolumeBar.prototype.onMouseMove = function(event) {
    this.player_.muted() && this.player_.muted(!1), this.player_.volume(this.calculateDistance(event))
}, vjs.VolumeBar.prototype.getPercent = function() {
    return this.player_.muted() ? 0 : this.player_.volume()
}, vjs.VolumeBar.prototype.stepForward = function() {
    this.player_.volume(this.player_.volume() + .1)
}, vjs.VolumeBar.prototype.stepBack = function() {
    this.player_.volume(this.player_.volume() - .1)
}, vjs.VolumeLevel = vjs.Component.extend({
    init: function(player, options) {
        vjs.Component.call(this, player, options)
    }
}), vjs.VolumeLevel.prototype.createEl = function() {
    return vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-volume-level",
        innerHTML: '<span class="vjs-control-text"></span>'
    })
}, vjs.VolumeHandle = vjs.SliderHandle.extend(), vjs.VolumeHandle.prototype.defaultValue = "00:00", vjs.VolumeHandle.prototype.createEl = function() {
    return vjs.SliderHandle.prototype.createEl.call(this, "div", {
        className: "vjs-volume-handle"
    })
}, vjs.MuteToggle = vjs.Button.extend({
    init: function(player, options) {
        vjs.Button.call(this, player, options), player.on("volumechange", vjs.bind(this, this.update)), player.tech && player.tech.featuresVolumeControl === !1 && this.addClass("vjs-hidden"), player.on("loadstart", vjs.bind(this, function() {
            player.tech.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
        }))
    }
}), vjs.MuteToggle.prototype.createEl = function() {
    return vjs.Button.prototype.createEl.call(this, "div", {
        className: "vjs-mute-control vjs-control",
        innerHTML: '<div><span class="vjs-control-text">' + this.localize("Mute") + "</span></div>"
    })
}, vjs.MuteToggle.prototype.onClick = function() {
    this.player_.muted(this.player_.muted() ? !1 : !0)
}, vjs.MuteToggle.prototype.update = function() {
    var vol = this.player_.volume(),
        level = 3;
    0 === vol || this.player_.muted() ? level = 0 : .33 > vol ? level = 1 : .67 > vol && (level = 2), this.player_.muted() ? this.el_.children[0].children[0].innerHTML != this.localize("Unmute") && (this.el_.children[0].children[0].innerHTML = this.localize("Unmute")) : this.el_.children[0].children[0].innerHTML != this.localize("Mute") && (this.el_.children[0].children[0].innerHTML = this.localize("Mute"));
    for (var i = 0; 4 > i; i++) vjs.removeClass(this.el_, "vjs-vol-" + i);
    vjs.addClass(this.el_, "vjs-vol-" + level)
}, vjs.VolumeMenuButton = vjs.MenuButton.extend({
    init: function(player, options) {
        vjs.MenuButton.call(this, player, options), player.on("volumechange", vjs.bind(this, this.update)), player.tech && player.tech.featuresVolumeControl === !1 && this.addClass("vjs-hidden"), player.on("loadstart", vjs.bind(this, function() {
            player.tech.featuresVolumeControl === !1 ? this.addClass("vjs-hidden") : this.removeClass("vjs-hidden")
        })), this.addClass("vjs-menu-button")
    }
}), vjs.VolumeMenuButton.prototype.createMenu = function() {
    var menu = new vjs.Menu(this.player_, {
            contentElType: "div"
        }),
        vc = new vjs.VolumeBar(this.player_, vjs.obj.merge({
            vertical: !0
        }, this.options_.volumeBar));
    return vc.on("focus", function() {
        menu.lockShowing()
    }), vc.on("blur", function() {
        menu.unlockShowing()
    }), menu.addChild(vc), menu
}, vjs.VolumeMenuButton.prototype.onClick = function() {
    vjs.MuteToggle.prototype.onClick.call(this), vjs.MenuButton.prototype.onClick.call(this)
}, vjs.VolumeMenuButton.prototype.createEl = function() {
    return vjs.Button.prototype.createEl.call(this, "div", {
        className: "vjs-volume-menu-button vjs-menu-button vjs-control",
        innerHTML: '<div><span class="vjs-control-text">' + this.localize("Mute") + "</span></div>"
    })
}, vjs.VolumeMenuButton.prototype.update = vjs.MuteToggle.prototype.update, vjs.PlaybackRateMenuButton = vjs.MenuButton.extend({
    init: function(player, options) {
        vjs.MenuButton.call(this, player, options), this.updateVisibility(), this.updateLabel(), player.on("loadstart", vjs.bind(this, this.updateVisibility)), player.on("ratechange", vjs.bind(this, this.updateLabel))
    }
}), vjs.PlaybackRateMenuButton.prototype.createEl = function() {
    var el = vjs.Component.prototype.createEl.call(this, "div", {
        className: "vjs-playback-rate vjs-menu-button vjs-control",
        innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">' + this.localize("Playback Rate") + "</span></div>"
    });
    return this.labelEl_ = vjs.createEl("div", {
        className: "vjs-playback-rate-value",
        innerHTML: 1
    }), el.appendChild(this.labelEl_), el
}, vjs.PlaybackRateMenuButton.prototype.createMenu = function() {
    var menu = new vjs.Menu(this.player()),
        rates = this.player().options().playbackRates;
    if (rates)
        for (var i = rates.length - 1; i >= 0; i--) menu.addChild(new vjs.PlaybackRateMenuItem(this.player(), {
            rate: rates[i] + "x"
        }));
    return menu
}, vjs.PlaybackRateMenuButton.prototype.updateARIAAttributes = function() {
    this.el().setAttribute("aria-valuenow", this.player().playbackRate())
}, vjs.PlaybackRateMenuButton.prototype.onClick = function() {
    for (var currentRate = this.player().playbackRate(), rates = this.player().options().playbackRates, newRate = rates[0], i = 0; i < rates.length; i++)
        if (rates[i] > currentRate) {
            newRate = rates[i];
            break
        }
    this.player().playbackRate(newRate)
}, vjs.PlaybackRateMenuButton.prototype.playbackRateSupported = function() {
    return this.player().tech && this.player().tech.featuresPlaybackRate && this.player().options().playbackRates && this.player().options().playbackRates.length > 0
}, vjs.PlaybackRateMenuButton.prototype.updateVisibility = function() {
    this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
}, vjs.PlaybackRateMenuButton.prototype.updateLabel = function() {
    this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
}, vjs.PlaybackRateMenuItem = vjs.MenuItem.extend({
    contentElType: "button",
    init: function(player, options) {
        var label = this.label = options.rate,
            rate = this.rate = parseFloat(label, 10);
        options.label = label, options.selected = 1 === rate, vjs.MenuItem.call(this, player, options), this.player().on("ratechange", vjs.bind(this, this.update))
    }
}), vjs.PlaybackRateMenuItem.prototype.onClick = function() {
    vjs.MenuItem.prototype.onClick.call(this), this.player().playbackRate(this.rate)
}, vjs.PlaybackRateMenuItem.prototype.update = function() {
    this.selected(this.player().playbackRate() == this.rate)
}, vjs.PosterImage = vjs.Button.extend({
    init: function(player, options) {
        vjs.Button.call(this, player, options), player.poster() && this.src(player.poster()), player.poster() && player.controls() || this.hide(), player.on("posterchange", vjs.bind(this, function() {
            this.src(player.poster())
        })), player.isAudio() || player.on("play", vjs.bind(this, this.hide))
    }
});
var _backgroundSizeSupported = "backgroundSize" in vjs.TEST_VID.style;
if (vjs.PosterImage.prototype.createEl = function() {
        var el = vjs.createEl("div", {
            className: "vjs-poster",
            tabIndex: -1
        });
        return _backgroundSizeSupported || el.appendChild(vjs.createEl("img")), el
    }, vjs.PosterImage.prototype.src = function(url) {
        var el = this.el();
        void 0 !== url && (_backgroundSizeSupported ? el.style.backgroundImage = 'url("' + url + '")' : el.firstChild.src = url)
    }, vjs.PosterImage.prototype.onClick = function() {
        this.player().controls() && this.player_.play()
    }, vjs.LoadingSpinner = vjs.Component.extend({
        init: function(player, options) {
            vjs.Component.call(this, player, options)
        }
    }), vjs.LoadingSpinner.prototype.createEl = function() {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    }, vjs.BigPlayButton = vjs.Button.extend(), vjs.BigPlayButton.prototype.createEl = function() {
        return vjs.Button.prototype.createEl.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: '<span aria-hidden="true"></span>',
            "aria-label": "play video"
        })
    }, vjs.BigPlayButton.prototype.onClick = function() {
        this.player_.play()
    }, vjs.ErrorDisplay = vjs.Component.extend({
        init: function(player, options) {
            vjs.Component.call(this, player, options), this.update(), player.on("error", vjs.bind(this, this.update))
        }
    }), vjs.ErrorDisplay.prototype.createEl = function() {
        var el = vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-error-display"
        });
        return this.contentEl_ = vjs.createEl("div"), el.appendChild(this.contentEl_), el
    }, vjs.ErrorDisplay.prototype.update = function() {
        this.player().error() && (this.contentEl_.innerHTML = this.localize(this.player().error().message))
    }, vjs.MediaTechController = vjs.Component.extend({
        init: function(player, options, ready) {
            options = options || {}, options.reportTouchActivity = !1, vjs.Component.call(this, player, options, ready), this.featuresProgressEvents || this.manualProgressOn(), this.featuresTimeupdateEvents || this.manualTimeUpdatesOn(), this.initControlsListeners()
        }
    }), vjs.MediaTechController.prototype.initControlsListeners = function() {
        var player, tech, activateControls, deactivateControls;
        tech = this, player = this.player();
        var activateControls = function() {
            player.controls() && !player.usingNativeControls() && tech.addControlsListeners()
        };
        deactivateControls = vjs.bind(tech, tech.removeControlsListeners), this.ready(activateControls), player.on("controlsenabled", activateControls), player.on("controlsdisabled", deactivateControls), this.ready(function() {
            this.networkState && this.networkState() > 0 && this.player().trigger("loadstart")
        })
    }, vjs.MediaTechController.prototype.addControlsListeners = function() {
        var userWasActive;
        this.on("mousedown", this.onClick), this.on("touchstart", function(event) {
            userWasActive = this.player_.userActive()
        }), this.on("touchmove", function(event) {
            userWasActive && this.player().reportUserActivity()
        }), this.on("touchend", function(event) {
            event.preventDefault()
        }), this.emitTapEvents(), this.on("tap", this.onTap)
    }, vjs.MediaTechController.prototype.removeControlsListeners = function() {
        this.off("tap"), this.off("touchstart"), this.off("touchmove"), this.off("touchleave"), this.off("touchcancel"), this.off("touchend"), this.off("click"), this.off("mousedown")
    }, vjs.MediaTechController.prototype.onClick = function(event) {
        0 === event.button && this.player().controls() && (this.player().paused() ? this.player().play() : this.player().pause())
    }, vjs.MediaTechController.prototype.onTap = function() {
        this.player().userActive(!this.player().userActive())
    }, vjs.MediaTechController.prototype.manualProgressOn = function() {
        this.manualProgress = !0, this.trackProgress()
    }, vjs.MediaTechController.prototype.manualProgressOff = function() {
        this.manualProgress = !1, this.stopTrackingProgress()
    }, vjs.MediaTechController.prototype.trackProgress = function() {
        this.progressInterval = setInterval(vjs.bind(this, function() {
            var bufferedPercent = this.player().bufferedPercent();
            this.bufferedPercent_ != bufferedPercent && this.player().trigger("progress"), this.bufferedPercent_ = bufferedPercent, 1 === bufferedPercent && this.stopTrackingProgress()
        }), 500)
    }, vjs.MediaTechController.prototype.stopTrackingProgress = function() {
        clearInterval(this.progressInterval)
    }, vjs.MediaTechController.prototype.manualTimeUpdatesOn = function() {
        this.manualTimeUpdates = !0, this.player().on("play", vjs.bind(this, this.trackCurrentTime)), this.player().on("pause", vjs.bind(this, this.stopTrackingCurrentTime)), this.one("timeupdate", function() {
            this.featuresTimeupdateEvents = !0, this.manualTimeUpdatesOff()
        })
    }, vjs.MediaTechController.prototype.manualTimeUpdatesOff = function() {
        this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
    }, vjs.MediaTechController.prototype.trackCurrentTime = function() {
        this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = setInterval(vjs.bind(this, function() {
            this.player().trigger("timeupdate")
        }), 250)
    }, vjs.MediaTechController.prototype.stopTrackingCurrentTime = function() {
        clearInterval(this.currentTimeInterval), this.player().trigger("timeupdate")
    }, vjs.MediaTechController.prototype.dispose = function() {
        this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), vjs.Component.prototype.dispose.call(this)
    }, vjs.MediaTechController.prototype.setCurrentTime = function() {
        this.manualTimeUpdates && this.player().trigger("timeupdate")
    }, vjs.MediaTechController.prototype.setPoster = function() {}, vjs.MediaTechController.prototype.featuresVolumeControl = !0, vjs.MediaTechController.prototype.featuresFullscreenResize = !1, vjs.MediaTechController.prototype.featuresPlaybackRate = !1, vjs.MediaTechController.prototype.featuresProgressEvents = !1, vjs.MediaTechController.prototype.featuresTimeupdateEvents = !1, vjs.media = {}, vjs.Html5 = vjs.MediaTechController.extend({
        init: function(player, options, ready) {
            this.featuresVolumeControl = vjs.Html5.canControlVolume(), this.featuresPlaybackRate = vjs.Html5.canControlPlaybackRate(), this.movingMediaElementInDOM = !vjs.IS_IOS, this.featuresFullscreenResize = !0, this.featuresProgressEvents = !0, vjs.MediaTechController.call(this, player, options, ready), this.setupTriggers();
            var source = options.source;
            source && this.el_.currentSrc !== source.src && (this.el_.src = source.src), vjs.TOUCH_ENABLED && player.options().nativeControlsForTouch !== !1 && this.useNativeControls(), player.ready(function() {
                this.tag && this.options_.autoplay && this.paused() && (delete this.tag.poster, this.play())
            }), this.triggerReady()
        }
    }), vjs.Html5.prototype.dispose = function() {
        vjs.Html5.disposeMediaElement(this.el_), vjs.MediaTechController.prototype.dispose.call(this)
    }, vjs.Html5.prototype.createEl = function() {
        var clone, player = this.player_,
            el = player.tag;
        el && this.movingMediaElementInDOM !== !1 || (el ? (clone = el.cloneNode(!1), vjs.Html5.disposeMediaElement(el), el = clone, player.tag = null) : (el = vjs.createEl("video"), vjs.setElementAttributes(el, vjs.obj.merge(player.tagAttributes || {}, {
            id: player.id() + "_html5_api",
            "class": "vjs-tech"
        }))), el.player = player, vjs.insertFirst(el, player.el()));
        for (var settingsAttrs = ["autoplay", "preload", "loop", "muted"], i = settingsAttrs.length - 1; i >= 0; i--) {
            var attr = settingsAttrs[i],
                overwriteAttrs = {};
            "undefined" != typeof player.options_[attr] && (overwriteAttrs[attr] = player.options_[attr]), vjs.setElementAttributes(el, overwriteAttrs)
        }
        return el
    }, vjs.Html5.prototype.setupTriggers = function() {
        for (var i = vjs.Html5.Events.length - 1; i >= 0; i--) vjs.on(this.el_, vjs.Html5.Events[i], vjs.bind(this, this.eventHandler))
    }, vjs.Html5.prototype.eventHandler = function(evt) {
        "error" == evt.type && this.error() ? this.player().error(this.error().code) : (evt.bubbles = !1, this.player().trigger(evt))
    }, vjs.Html5.prototype.useNativeControls = function() {
        var tech, player, controlsOn, controlsOff, cleanUp;
        tech = this, player = this.player(), tech.setControls(player.controls()), controlsOn = function() {
            tech.setControls(!0)
        }, controlsOff = function() {
            tech.setControls(!1)
        }, player.on("controlsenabled", controlsOn), player.on("controlsdisabled", controlsOff), cleanUp = function() {
            player.off("controlsenabled", controlsOn), player.off("controlsdisabled", controlsOff)
        }, tech.on("dispose", cleanUp), player.on("usingcustomcontrols", cleanUp), player.usingNativeControls(!0)
    }, vjs.Html5.prototype.play = function() {
        this.el_.play()
    }, vjs.Html5.prototype.pause = function() {
        this.el_.pause()
    }, vjs.Html5.prototype.paused = function() {
        return this.el_.paused
    }, vjs.Html5.prototype.currentTime = function() {
        return this.el_.currentTime
    }, vjs.Html5.prototype.setCurrentTime = function(seconds) {
        try {
            this.el_.currentTime = seconds
        } catch (e) {
            vjs.log(e, "Video is not ready. (Video.js)")
        }
    }, vjs.Html5.prototype.duration = function() {
        return this.el_.duration || 0
    }, vjs.Html5.prototype.buffered = function() {
        return this.el_.buffered
    }, vjs.Html5.prototype.volume = function() {
        return this.el_.volume
    }, vjs.Html5.prototype.setVolume = function(percentAsDecimal) {
        this.el_.volume = percentAsDecimal
    }, vjs.Html5.prototype.muted = function() {
        return this.el_.muted
    }, vjs.Html5.prototype.setMuted = function(muted) {
        this.el_.muted = muted
    }, vjs.Html5.prototype.width = function() {
        return this.el_.offsetWidth
    }, vjs.Html5.prototype.height = function() {
        return this.el_.offsetHeight
    }, vjs.Html5.prototype.supportsFullScreen = function() {
        return "function" != typeof this.el_.webkitEnterFullScreen || !/Android/.test(vjs.USER_AGENT) && /Chrome|Mac OS X 10.5/.test(vjs.USER_AGENT) ? !1 : !0
    }, vjs.Html5.prototype.enterFullScreen = function() {
        var video = this.el_;
        "webkitDisplayingFullscreen" in video && this.one("webkitbeginfullscreen", vjs.bind(this, function(e) {
            this.player_.isFullscreen(!0), this.one("webkitendfullscreen", vjs.bind(this, function(e) {
                this.player_.isFullscreen(!1), this.player_.trigger("fullscreenchange")
            })), this.player_.trigger("fullscreenchange")
        })), video.paused && video.networkState <= video.HAVE_METADATA ? (this.el_.play(), setTimeout(function() {
            video.pause(), video.webkitEnterFullScreen()
        }, 0)) : video.webkitEnterFullScreen()
    }, vjs.Html5.prototype.exitFullScreen = function() {
        this.el_.webkitExitFullScreen()
    }, vjs.Html5.prototype.src = function(src) {
        return void 0 === src ? this.el_.src : void(this.el_.src = src)
    }, vjs.Html5.prototype.load = function() {
        this.el_.load()
    }, vjs.Html5.prototype.currentSrc = function() {
        return this.el_.currentSrc
    }, vjs.Html5.prototype.poster = function() {
        return this.el_.poster
    }, vjs.Html5.prototype.setPoster = function(val) {
        this.el_.poster = val
    }, vjs.Html5.prototype.preload = function() {
        return this.el_.preload
    }, vjs.Html5.prototype.setPreload = function(val) {
        this.el_.preload = val
    }, vjs.Html5.prototype.autoplay = function() {
        return this.el_.autoplay
    }, vjs.Html5.prototype.setAutoplay = function(val) {
        this.el_.autoplay = val
    }, vjs.Html5.prototype.controls = function() {
        return this.el_.controls
    }, vjs.Html5.prototype.setControls = function(val) {
        this.el_.controls = !!val
    }, vjs.Html5.prototype.loop = function() {
        return this.el_.loop
    }, vjs.Html5.prototype.setLoop = function(val) {
        this.el_.loop = val
    }, vjs.Html5.prototype.error = function() {
        return this.el_.error
    }, vjs.Html5.prototype.seeking = function() {
        return this.el_.seeking
    }, vjs.Html5.prototype.ended = function() {
        return this.el_.ended
    }, vjs.Html5.prototype.defaultMuted = function() {
        return this.el_.defaultMuted
    }, vjs.Html5.prototype.playbackRate = function() {
        return this.el_.playbackRate
    }, vjs.Html5.prototype.setPlaybackRate = function(val) {
        this.el_.playbackRate = val
    }, vjs.Html5.prototype.networkState = function() {
        return this.el_.networkState
    }, vjs.Html5.isSupported = function() {
        try {
            vjs.TEST_VID.volume = .5
        } catch (e) {
            return !1
        }
        return !!vjs.TEST_VID.canPlayType
    }, vjs.Html5.canPlaySource = function(srcObj) {
        try {
            return !!vjs.TEST_VID.canPlayType(srcObj.type)
        } catch (e) {
            return ""
        }
    }, vjs.Html5.canControlVolume = function() {
        var volume = vjs.TEST_VID.volume;
        return vjs.TEST_VID.volume = volume / 2 + .1, volume !== vjs.TEST_VID.volume
    }, vjs.Html5.canControlPlaybackRate = function() {
        var playbackRate = vjs.TEST_VID.playbackRate;
        return vjs.TEST_VID.playbackRate = playbackRate / 2 + .1, playbackRate !== vjs.TEST_VID.playbackRate
    }, function() {
        var canPlayType, mpegurlRE = /^application\/(?:x-|vnd\.apple\.)mpegurl/i,
            mp4RE = /^video\/mp4/i;
        vjs.Html5.patchCanPlayType = function() {
            vjs.ANDROID_VERSION >= 4 && (canPlayType || (canPlayType = vjs.TEST_VID.constructor.prototype.canPlayType), vjs.TEST_VID.constructor.prototype.canPlayType = function(type) {
                return type && mpegurlRE.test(type) ? "maybe" : canPlayType.call(this, type)
            }), vjs.IS_OLD_ANDROID && (canPlayType || (canPlayType = vjs.TEST_VID.constructor.prototype.canPlayType), vjs.TEST_VID.constructor.prototype.canPlayType = function(type) {
                return type && mp4RE.test(type) ? "maybe" : canPlayType.call(this, type)
            })
        }, vjs.Html5.unpatchCanPlayType = function() {
            var r = vjs.TEST_VID.constructor.prototype.canPlayType;
            return vjs.TEST_VID.constructor.prototype.canPlayType = canPlayType, canPlayType = null, r
        }, vjs.Html5.patchCanPlayType()
    }(), vjs.Html5.Events = "loadstart,suspend,abort,error,emptied,stalled,loadedmetadata,loadeddata,canplay,canplaythrough,playing,waiting,seeking,seeked,ended,durationchange,timeupdate,progress,play,pause,ratechange,volumechange".split(","), vjs.Html5.disposeMediaElement = function(el) {
        if (el) {
            for (el.player = null, el.parentNode && el.parentNode.removeChild(el); el.hasChildNodes();) el.removeChild(el.firstChild);
            el.removeAttribute("src"), "function" == typeof el.load && ! function() {
                try {
                    el.load()
                } catch (e) {}
            }()
        }
    }, vjs.Flash = vjs.MediaTechController.extend({
        init: function(player, options, ready) {
            vjs.MediaTechController.call(this, player, options, ready);
            var source = options.source,
                parentEl = options.parentEl,
                placeHolder = this.el_ = vjs.createEl("div", {
                    id: player.id() + "_temp_flash"
                }),
                objId = player.id() + "_flash_api",
                playerOptions = player.options_,
                flashVars = vjs.obj.merge({
                    readyFunction: "videojs.Flash.onReady",
                    eventProxyFunction: "videojs.Flash.onEvent",
                    errorEventProxyFunction: "videojs.Flash.onError",
                    autoplay: playerOptions.autoplay,
                    preload: playerOptions.preload,
                    loop: playerOptions.loop,
                    muted: playerOptions.muted
                }, options.flashVars),
                params = vjs.obj.merge({
                    wmode: "opaque",
                    bgcolor: "#000000"
                }, options.params),
                attributes = vjs.obj.merge({
                    id: objId,
                    name: objId,
                    "class": "vjs-tech"
                }, options.attributes);
            if (source)
                if (source.type && vjs.Flash.isStreamingType(source.type)) {
                    var parts = vjs.Flash.streamToParts(source.src);
                    flashVars.rtmpConnection = encodeURIComponent(parts.connection), flashVars.rtmpStream = encodeURIComponent(parts.stream)
                } else flashVars.src = encodeURIComponent(vjs.getAbsoluteURL(source.src));
            vjs.insertFirst(placeHolder, parentEl), options.startTime && this.ready(function() {
                this.load(), this.play(), this.currentTime(options.startTime)
            }), vjs.IS_FIREFOX && this.ready(function() {
                vjs.on(this.el(), "mousemove", vjs.bind(this, function() {
                    this.player().trigger({
                        type: "mousemove",
                        bubbles: !1
                    })
                }))
            }), player.on("stageclick", player.reportUserActivity), this.el_ = vjs.Flash.embed(options.swf, placeHolder, flashVars, params, attributes)
        }
    }), vjs.Flash.prototype.dispose = function() {
        vjs.MediaTechController.prototype.dispose.call(this)
    }, vjs.Flash.prototype.play = function() {
        this.el_.vjs_play()
    }, vjs.Flash.prototype.pause = function() {
        this.el_.vjs_pause()
    }, vjs.Flash.prototype.src = function(src) {
        if (void 0 === src) return this.currentSrc();
        if (vjs.Flash.isStreamingSrc(src) ? (src = vjs.Flash.streamToParts(src), this.setRtmpConnection(src.connection), this.setRtmpStream(src.stream)) : (src = vjs.getAbsoluteURL(src), this.el_.vjs_src(src)), this.player_.autoplay()) {
            var tech = this;
            setTimeout(function() {
                tech.play()
            }, 0)
        }
    }, vjs.Flash.prototype.setCurrentTime = function(time) {
        this.lastSeekTarget_ = time, this.el_.vjs_setProperty("currentTime", time), vjs.MediaTechController.prototype.setCurrentTime.call(this)
    }, vjs.Flash.prototype.currentTime = function(time) {
        return this.seeking() ? this.lastSeekTarget_ || 0 : this.el_.vjs_getProperty("currentTime")
    }, vjs.Flash.prototype.currentSrc = function() {
        var src = this.el_.vjs_getProperty("currentSrc");
        if (null == src) {
            var connection = this.rtmpConnection(),
                stream = this.rtmpStream();
            connection && stream && (src = vjs.Flash.streamFromParts(connection, stream))
        }
        return src
    }, vjs.Flash.prototype.load = function() {
        this.el_.vjs_load()
    }, vjs.Flash.prototype.poster = function() {
        this.el_.vjs_getProperty("poster")
    }, vjs.Flash.prototype.setPoster = function() {}, vjs.Flash.prototype.buffered = function() {
        return vjs.createTimeRange(0, this.el_.vjs_getProperty("buffered"))
    }, vjs.Flash.prototype.supportsFullScreen = function() {
        return !1
    }, vjs.Flash.prototype.enterFullScreen = function() {
        return !1
    }, function() {
        function createSetter(attr) {
            var attrUpper = attr.charAt(0).toUpperCase() + attr.slice(1);
            api["set" + attrUpper] = function(val) {
                return this.el_.vjs_setProperty(attr, val)
            }
        }

        function createGetter(attr) {
            api[attr] = function() {
                return this.el_.vjs_getProperty(attr)
            }
        }
        var i, api = vjs.Flash.prototype,
            readWrite = "rtmpConnection,rtmpStream,preload,defaultPlaybackRate,playbackRate,autoplay,loop,mediaGroup,controller,controls,volume,muted,defaultMuted".split(","),
            readOnly = "error,networkState,readyState,seeking,initialTime,duration,startOffsetTime,paused,played,seekable,ended,videoTracks,audioTracks,videoWidth,videoHeight,textTracks".split(",");
        for (i = 0; i < readWrite.length; i++) createGetter(readWrite[i]), createSetter(readWrite[i]);
        for (i = 0; i < readOnly.length; i++) createGetter(readOnly[i])
    }(), vjs.Flash.isSupported = function() {
        return vjs.Flash.version()[0] >= 10
    }, vjs.Flash.canPlaySource = function(srcObj) {
        var type;
        return srcObj.type ? (type = srcObj.type.replace(/;.*/, "").toLowerCase(), type in vjs.Flash.formats || type in vjs.Flash.streamingFormats ? "maybe" : void 0) : ""
    }, vjs.Flash.formats = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    }, vjs.Flash.streamingFormats = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
    }, vjs.Flash.onReady = function(currSwf) {
        var el, player;
        el = vjs.el(currSwf), player = el && el.parentNode && el.parentNode.player, player && (el.player = player, vjs.Flash.checkReady(player.tech))
    }, vjs.Flash.checkReady = function(tech) {
        tech.el() && (tech.el().vjs_getProperty ? tech.triggerReady() : setTimeout(function() {
            vjs.Flash.checkReady(tech)
        }, 50))
    }, vjs.Flash.onEvent = function(swfID, eventName) {
        var player = vjs.el(swfID).player;
        player.trigger(eventName)
    }, vjs.Flash.onError = function(swfID, err) {
        var player = vjs.el(swfID).player,
            msg = "FLASH: " + err;
        "srcnotfound" == err ? player.error({
            code: 4,
            message: msg
        }) : player.error(msg)
    }, vjs.Flash.version = function() {
        var version = "0,0,0";
        try {
            version = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (e) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (version = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (err) {}
        }
        return version.split(",")
    }, vjs.Flash.embed = function(swf, placeHolder, flashVars, params, attributes) {
        var code = vjs.Flash.getEmbedCode(swf, flashVars, params, attributes),
            obj = vjs.createEl("div", {
                innerHTML: code
            }).childNodes[0],
            par = placeHolder.parentNode;
        placeHolder.parentNode.replaceChild(obj, placeHolder);
        var newObj = par.childNodes[0];
        return setTimeout(function() {
            newObj.style.display = "block"
        }, 1e3), obj
    }, vjs.Flash.getEmbedCode = function(swf, flashVars, params, attributes) {
        var objTag = '<object type="application/x-shockwave-flash"',
            flashVarsString = "",
            paramsString = "",
            attrsString = "";
        return flashVars && vjs.obj.each(flashVars, function(key, val) {
            flashVarsString += key + "=" + val + "&amp;"
        }), params = vjs.obj.merge({
            movie: swf,
            flashvars: flashVarsString,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, params), vjs.obj.each(params, function(key, val) {
            paramsString += '<param name="' + key + '" value="' + val + '" />'
        }), attributes = vjs.obj.merge({
            data: swf,
            width: "100%",
            height: "100%"
        }, attributes), vjs.obj.each(attributes, function(key, val) {
            attrsString += key + '="' + val + '" '
        }), objTag + attrsString + ">" + paramsString + "</object>"
    }, vjs.Flash.streamFromParts = function(connection, stream) {
        return connection + "&" + stream
    }, vjs.Flash.streamToParts = function(src) {
        var parts = {
            connection: "",
            stream: ""
        };
        if (!src) return parts;
        var streamBegin, connEnd = src.indexOf("&");
        return -1 !== connEnd ? streamBegin = connEnd + 1 : (connEnd = streamBegin = src.lastIndexOf("/") + 1, 0 === connEnd && (connEnd = streamBegin = src.length)), parts.connection = src.substring(0, connEnd), parts.stream = src.substring(streamBegin, src.length), parts
    }, vjs.Flash.isStreamingType = function(srcType) {
        return srcType in vjs.Flash.streamingFormats
    }, vjs.Flash.RTMP_RE = /^rtmp[set]?:\/\//i, vjs.Flash.isStreamingSrc = function(src) {
        return vjs.Flash.RTMP_RE.test(src)
    }, vjs.MediaLoader = vjs.Component.extend({
        init: function(player, options, ready) {
            if (vjs.Component.call(this, player, options, ready), player.options_.sources && 0 !== player.options_.sources.length) player.src(player.options_.sources);
            else
                for (var i = 0, j = player.options_.techOrder; i < j.length; i++) {
                    var techName = vjs.capitalize(j[i]),
                        tech = window.videojs[techName];
                    if (tech && tech.isSupported()) {
                        player.loadTech(techName);
                        break
                    }
                }
        }
    }), vjs.Player.prototype.textTracks_, vjs.Player.prototype.textTracks = function() {
        return this.textTracks_ = this.textTracks_ || [], this.textTracks_
    }, vjs.Player.prototype.addTextTrack = function(kind, label, language, options) {
        var tracks = this.textTracks_ = this.textTracks_ || [];
        options = options || {}, options.kind = kind, options.label = label, options.language = language;
        var Kind = vjs.capitalize(kind || "subtitles"),
            track = new window.videojs[Kind + "Track"](this, options);
        return tracks.push(track), track.dflt() && this.ready(function() {
            setTimeout(function() {
                track.player().showTextTrack(track.id())
            }, 0)
        }), track
    }, vjs.Player.prototype.addTextTracks = function(trackList) {
        for (var trackObj, i = 0; i < trackList.length; i++) trackObj = trackList[i], this.addTextTrack(trackObj.kind, trackObj.label, trackObj.language, trackObj);
        return this
    }, vjs.Player.prototype.showTextTrack = function(id, disableSameKind) {
        for (var track, showTrack, kind, tracks = this.textTracks_, i = 0, j = tracks.length; j > i; i++) track = tracks[i], track.id() === id ? (track.show(), showTrack = track) : disableSameKind && track.kind() == disableSameKind && track.mode() > 0 && track.disable();
        return kind = showTrack ? showTrack.kind() : disableSameKind ? disableSameKind : !1, kind && this.trigger(kind + "trackchange"), this
    }, vjs.TextTrack = vjs.Component.extend({
        init: function(player, options) {
            vjs.Component.call(this, player, options), this.id_ = options.id || "vjs_" + options.kind + "_" + options.language + "_" + vjs.guid++, this.src_ = options.src, this.dflt_ = options["default"] || options.dflt, this.title_ = options.title, this.language_ = options.srclang, this.label_ = options.label, this.cues_ = [], this.activeCues_ = [], this.readyState_ = 0, this.mode_ = 0
        }
    }), vjs.TextTrack.prototype.kind_, vjs.TextTrack.prototype.kind = function() {
        return this.kind_
    }, vjs.TextTrack.prototype.src_, vjs.TextTrack.prototype.src = function() {
        return this.src_
    }, vjs.TextTrack.prototype.dflt_, vjs.TextTrack.prototype.dflt = function() {
        return this.dflt_
    }, vjs.TextTrack.prototype.title_, vjs.TextTrack.prototype.title = function() {
        return this.title_
    }, vjs.TextTrack.prototype.language_, vjs.TextTrack.prototype.language = function() {
        return this.language_
    }, vjs.TextTrack.prototype.label_, vjs.TextTrack.prototype.label = function() {
        return this.label_
    }, vjs.TextTrack.prototype.cues_, vjs.TextTrack.prototype.cues = function() {
        return this.cues_
    }, vjs.TextTrack.prototype.activeCues_, vjs.TextTrack.prototype.activeCues = function() {
        return this.activeCues_
    }, vjs.TextTrack.prototype.readyState_, vjs.TextTrack.prototype.readyState = function() {
        return this.readyState_
    }, vjs.TextTrack.prototype.mode_, vjs.TextTrack.prototype.mode = function() {
        return this.mode_
    }, vjs.TextTrack.prototype.createEl = function() {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-" + this.kind_ + " vjs-text-track"
        })
    }, vjs.TextTrack.prototype.show = function() {
        this.activate(), this.mode_ = 2, vjs.Component.prototype.show.call(this)
    }, vjs.TextTrack.prototype.hide = function() {
        this.activate(), this.mode_ = 1, vjs.Component.prototype.hide.call(this)
    }, vjs.TextTrack.prototype.disable = function() {
        2 == this.mode_ && this.hide(), this.deactivate(), this.mode_ = 0
    }, vjs.TextTrack.prototype.activate = function() {
        0 === this.readyState_ && this.load(), 0 === this.mode_ && (this.player_.on("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.on("ended", vjs.bind(this, this.reset, this.id_)), ("captions" === this.kind_ || "subtitles" === this.kind_) && this.player_.getChild("textTrackDisplay").addChild(this))
    }, vjs.TextTrack.prototype.deactivate = function() {
        this.player_.off("timeupdate", vjs.bind(this, this.update, this.id_)), this.player_.off("ended", vjs.bind(this, this.reset, this.id_)), this.reset(), this.player_.getChild("textTrackDisplay").removeChild(this)
    }, vjs.TextTrack.prototype.load = function() {
        0 === this.readyState_ && (this.readyState_ = 1, vjs.get(this.src_, vjs.bind(this, this.parseCues), vjs.bind(this, this.onError)))
    }, vjs.TextTrack.prototype.onError = function(err) {
        this.error = err, this.readyState_ = 3, this.trigger("error")
    }, vjs.TextTrack.prototype.parseCues = function(srcContent) {
        for (var cue, time, text, id, lines = srcContent.split("\n"), line = "", i = 1, j = lines.length; j > i; i++)
            if (line = vjs.trim(lines[i])) {
                for (-1 == line.indexOf("-->") ? (id = line, line = vjs.trim(lines[++i])) : id = this.cues_.length, cue = {
                        id: id,
                        index: this.cues_.length
                    }, time = line.split(/[\t ]+/), cue.startTime = this.parseCueTime(time[0]), cue.endTime = this.parseCueTime(time[2]), text = []; lines[++i] && (line = vjs.trim(lines[i]));) text.push(line);
                cue.text = text.join("<br/>"), this.cues_.push(cue)
            }
        this.readyState_ = 2, this.trigger("loaded")
    }, vjs.TextTrack.prototype.parseCueTime = function(timeText) {
        var hours, minutes, other, seconds, ms, parts = timeText.split(":"),
            time = 0;
        return 3 == parts.length ? (hours = parts[0], minutes = parts[1], other = parts[2]) : (hours = 0, minutes = parts[0], other = parts[1]), other = other.split(/\s+/), seconds = other.splice(0, 1)[0], seconds = seconds.split(/\.|,/), ms = parseFloat(seconds[1]), seconds = seconds[0], time += 3600 * parseFloat(hours), time += 60 * parseFloat(minutes), time += parseFloat(seconds), ms && (time += ms / 1e3), time
    }, vjs.TextTrack.prototype.update = function() {
        if (this.cues_.length > 0) {
            var offset = this.player_.options().trackTimeOffset || 0,
                time = this.player_.currentTime() + offset;
            if (void 0 === this.prevChange || time < this.prevChange || this.nextChange <= time) {
                var firstActiveIndex, lastActiveIndex, cue, i, cues = this.cues_,
                    newNextChange = this.player_.duration(),
                    newPrevChange = 0,
                    reverse = !1,
                    newCues = [];
                for (time >= this.nextChange || void 0 === this.nextChange ? i = void 0 !== this.firstActiveIndex ? this.firstActiveIndex : 0 : (reverse = !0, i = void 0 !== this.lastActiveIndex ? this.lastActiveIndex : cues.length - 1);;) {
                    if (cue = cues[i], cue.endTime <= time) newPrevChange = Math.max(newPrevChange, cue.endTime), cue.active && (cue.active = !1);
                    else if (time < cue.startTime) {
                        if (newNextChange = Math.min(newNextChange, cue.startTime), cue.active && (cue.active = !1), !reverse) break
                    } else reverse ? (newCues.splice(0, 0, cue), void 0 === lastActiveIndex && (lastActiveIndex = i), firstActiveIndex = i) : (newCues.push(cue), void 0 === firstActiveIndex && (firstActiveIndex = i), lastActiveIndex = i), newNextChange = Math.min(newNextChange, cue.endTime), newPrevChange = Math.max(newPrevChange, cue.startTime), cue.active = !0;
                    if (reverse) {
                        if (0 === i) break;
                        i--
                    } else {
                        if (i === cues.length - 1) break;
                        i++
                    }
                }
                this.activeCues_ = newCues, this.nextChange = newNextChange, this.prevChange = newPrevChange, this.firstActiveIndex = firstActiveIndex, this.lastActiveIndex = lastActiveIndex, this.updateDisplay(), this.trigger("cuechange")
            }
        }
    }, vjs.TextTrack.prototype.updateDisplay = function() {
        for (var cues = this.activeCues_, html = "", i = 0, j = cues.length; j > i; i++) html += '<span class="vjs-tt-cue">' + cues[i].text + "</span>";
        this.el_.innerHTML = html
    }, vjs.TextTrack.prototype.reset = function() {
        this.nextChange = 0, this.prevChange = this.player_.duration(), this.firstActiveIndex = 0, this.lastActiveIndex = 0
    }, vjs.CaptionsTrack = vjs.TextTrack.extend(), vjs.CaptionsTrack.prototype.kind_ = "captions", vjs.SubtitlesTrack = vjs.TextTrack.extend(), vjs.SubtitlesTrack.prototype.kind_ = "subtitles", vjs.ChaptersTrack = vjs.TextTrack.extend(), vjs.ChaptersTrack.prototype.kind_ = "chapters", vjs.TextTrackDisplay = vjs.Component.extend({
        init: function(player, options, ready) {
            vjs.Component.call(this, player, options, ready), player.options_.tracks && player.options_.tracks.length > 0 && this.player_.addTextTracks(player.options_.tracks)
        }
    }), vjs.TextTrackDisplay.prototype.createEl = function() {
        return vjs.Component.prototype.createEl.call(this, "div", {
            className: "vjs-text-track-display"
        })
    }, vjs.TextTrackMenuItem = vjs.MenuItem.extend({
        init: function(player, options) {
            var track = this.track = options.track;
            options.label = track.label(), options.selected = track.dflt(), vjs.MenuItem.call(this, player, options), this.player_.on(track.kind() + "trackchange", vjs.bind(this, this.update))
        }
    }), vjs.TextTrackMenuItem.prototype.onClick = function() {
        vjs.MenuItem.prototype.onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind())
    }, vjs.TextTrackMenuItem.prototype.update = function() {
        this.selected(2 == this.track.mode())
    }, vjs.OffTextTrackMenuItem = vjs.TextTrackMenuItem.extend({
        init: function(player, options) {
            options.track = {
                kind: function() {
                    return options.kind
                },
                player: player,
                label: function() {
                    return options.kind + " off"
                },
                dflt: function() {
                    return !1
                },
                mode: function() {
                    return !1
                }
            }, vjs.TextTrackMenuItem.call(this, player, options), this.selected(!0)
        }
    }), vjs.OffTextTrackMenuItem.prototype.onClick = function() {
        vjs.TextTrackMenuItem.prototype.onClick.call(this), this.player_.showTextTrack(this.track.id_, this.track.kind())
    }, vjs.OffTextTrackMenuItem.prototype.update = function() {
        for (var track, tracks = this.player_.textTracks(), i = 0, j = tracks.length, off = !0; j > i; i++) track = tracks[i], track.kind() == this.track.kind() && 2 == track.mode() && (off = !1);
        this.selected(off)
    }, vjs.TextTrackButton = vjs.MenuButton.extend({
        init: function(player, options) {
            vjs.MenuButton.call(this, player, options), this.items.length <= 1 && this.hide()
        }
    }), vjs.TextTrackButton.prototype.createItems = function() {
        var track, items = [];
        items.push(new vjs.OffTextTrackMenuItem(this.player_, {
            kind: this.kind_
        }));
        for (var i = 0; i < this.player_.textTracks().length; i++) track = this.player_.textTracks()[i], track.kind() === this.kind_ && items.push(new vjs.TextTrackMenuItem(this.player_, {
            track: track
        }));
        return items
    }, vjs.CaptionsButton = vjs.TextTrackButton.extend({
        init: function(player, options, ready) {
            vjs.TextTrackButton.call(this, player, options, ready), this.el_.setAttribute("aria-label", "Captions Menu")
        }
    }), vjs.CaptionsButton.prototype.kind_ = "captions", vjs.CaptionsButton.prototype.buttonText = "Captions", vjs.CaptionsButton.prototype.className = "vjs-captions-button", vjs.SubtitlesButton = vjs.TextTrackButton.extend({
        init: function(player, options, ready) {
            vjs.TextTrackButton.call(this, player, options, ready), this.el_.setAttribute("aria-label", "Subtitles Menu")
        }
    }), vjs.SubtitlesButton.prototype.kind_ = "subtitles", vjs.SubtitlesButton.prototype.buttonText = "Subtitles", vjs.SubtitlesButton.prototype.className = "vjs-subtitles-button", vjs.ChaptersButton = vjs.TextTrackButton.extend({
        init: function(player, options, ready) {
            vjs.TextTrackButton.call(this, player, options, ready), this.el_.setAttribute("aria-label", "Chapters Menu")
        }
    }), vjs.ChaptersButton.prototype.kind_ = "chapters", vjs.ChaptersButton.prototype.buttonText = "Chapters", vjs.ChaptersButton.prototype.className = "vjs-chapters-button", vjs.ChaptersButton.prototype.createItems = function() {
        for (var track, items = [], i = 0; i < this.player_.textTracks().length; i++) track = this.player_.textTracks()[i], track.kind() === this.kind_ && items.push(new vjs.TextTrackMenuItem(this.player_, {
            track: track
        }));
        return items
    }, vjs.ChaptersButton.prototype.createMenu = function() {
        for (var track, chaptersTrack, tracks = this.player_.textTracks(), i = 0, j = tracks.length, items = this.items = []; j > i; i++)
            if (track = tracks[i], track.kind() == this.kind_) {
                if (0 !== track.readyState()) {
                    chaptersTrack = track;
                    break
                }
                track.load(), track.on("loaded", vjs.bind(this, this.createMenu))
            }
        var menu = this.menu;
        if (void 0 === menu && (menu = new vjs.Menu(this.player_), menu.contentEl().appendChild(vjs.createEl("li", {
                className: "vjs-menu-title",
                innerHTML: vjs.capitalize(this.kind_),
                tabindex: -1
            }))), chaptersTrack) {
            var cue, mi, cues = chaptersTrack.cues_;
            for (i = 0, j = cues.length; j > i; i++) cue = cues[i], mi = new vjs.ChaptersTrackMenuItem(this.player_, {
                track: chaptersTrack,
                cue: cue
            }), items.push(mi), menu.addChild(mi);
            this.addChild(menu)
        }
        return this.items.length > 0 && this.show(), menu
    }, vjs.ChaptersTrackMenuItem = vjs.MenuItem.extend({
        init: function(player, options) {
            var track = this.track = options.track,
                cue = this.cue = options.cue,
                currentTime = player.currentTime();
            options.label = cue.text, options.selected = cue.startTime <= currentTime && currentTime < cue.endTime, vjs.MenuItem.call(this, player, options), track.on("cuechange", vjs.bind(this, this.update))
        }
    }), vjs.ChaptersTrackMenuItem.prototype.onClick = function() {
        vjs.MenuItem.prototype.onClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
    }, vjs.ChaptersTrackMenuItem.prototype.update = function() {
        var cue = this.cue,
            currentTime = this.player_.currentTime();
        this.selected(cue.startTime <= currentTime && currentTime < cue.endTime)
    }, vjs.obj.merge(vjs.ControlBar.prototype.options_.children, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
    }), vjs.JSON, "undefined" != typeof window.JSON && "function" === window.JSON.parse) vjs.JSON = window.JSON;
else {
    vjs.JSON = {};
    var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
    vjs.JSON.parse = function(text, reviver) {
        function walk(holder, key) {
            var k, v, value = holder[key];
            if (value && "object" == typeof value)
                for (k in value) Object.prototype.hasOwnProperty.call(value, k) && (v = walk(value, k), void 0 !== v ? value[k] = v : delete value[k]);
            return reviver.call(holder, key, value)
        }
        var j;
        if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(a) {
                return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
            })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({
            "": j
        }, "") : j;
        throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
    }
}
vjs.autoSetup = function() {
    var options, mediaEl, player, i, e, vids = document.getElementsByTagName("video"),
        audios = document.getElementsByTagName("audio"),
        mediaEls = [];
    if (vids && vids.length > 0)
        for (i = 0, e = vids.length; e > i; i++) mediaEls.push(vids[i]);
    if (audios && audios.length > 0)
        for (i = 0, e = audios.length; e > i; i++) mediaEls.push(audios[i]);
    if (mediaEls && mediaEls.length > 0)
        for (i = 0, e = mediaEls.length; e > i; i++) {
            if (mediaEl = mediaEls[i], !mediaEl || !mediaEl.getAttribute) {
                vjs.autoSetupTimeout(1);
                break
            }
            void 0 === mediaEl.player && (options = mediaEl.getAttribute("data-setup"), null !== options && (player = videojs(mediaEl)))
        } else vjs.windowLoaded || vjs.autoSetupTimeout(1)
}, vjs.autoSetupTimeout = function(wait) {
    setTimeout(vjs.autoSetup, wait)
}, "complete" === document.readyState ? vjs.windowLoaded = !0 : vjs.one(window, "load", function() {
    vjs.windowLoaded = !0
}), vjs.autoSetupTimeout(1), vjs.plugin = function(name, init) {
    vjs.Player.prototype[name] = init
};