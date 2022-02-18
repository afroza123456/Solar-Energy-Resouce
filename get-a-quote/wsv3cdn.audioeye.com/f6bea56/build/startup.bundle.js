! function() {
    var e, t, i = {
            6299: function(e, t, i) {
                "use strict";
                i.d(t, {
                    j: function() {
                        return n
                    },
                    q: function() {
                        return o
                    }
                });
                var n = {
                        "aria-atomic": ["true", "false"],
                        "aria-busy": ["true", "false"],
                        "aria-controls": "*",
                        "aria-current": ["page", "step", "location", "date", "time", "true", "false"],
                        "aria-describedby": "*",
                        "aria-details": "*",
                        "aria-disabled": ["true", "false"],
                        "aria-errormessage": "*",
                        "aria-expanded": ["true", "false"],
                        "aria-flowto": "*",
                        "aria-grabbed": ["true", "false"],
                        "aria-haspopup": ["dialog", "grid", "listbox", "menu", "tree", "true", "false"],
                        "aria-hidden": ["true", "false"],
                        "aria-invalid": ["grammar", "spelling", "true", "false"],
                        "aria-keyshortcuts": "*",
                        "aria-label": "*",
                        "aria-labelledby": "*",
                        "aria-live": ["assertive", "polite", "off"],
                        "aria-owns": "*",
                        "aria-relevant": ["additions", "additions removals", "additions text", "removals", "removals additions", "removals text", "text", "text additions", "text removals", "all"],
                        "aria-roledescription": "*"
                    },
                    o = {
                        "aria-activedescendant": "*",
                        "aria-autocomplete": ["inline", "list", "both", "none"],
                        "aria-checked": ["mixed", "true", "false"],
                        "aria-colcount": "#",
                        "aria-colindex": "#",
                        "aria-colspan": "#",
                        "aria-level": "#",
                        "aria-modal": ["true", "false"],
                        "aria-multiline": ["true", "false"],
                        "aria-multiselectable": ["true", "false"],
                        "aria-orientation": ["horizontal", "vertical"],
                        "aria-placeholder": "*",
                        "aria-posinset": "#",
                        "aria-pressed": ["mixed", "true", "false"],
                        "aria-readonly": ["true", "false"],
                        "aria-required": ["true", "false"],
                        "aria-rowcount": "#",
                        "aria-rowindex": "#",
                        "aria-rowspan": "#",
                        "aria-selected": ["true", "false"],
                        "aria-setsize": "#",
                        "aria-sort": ["ascending", "descending", "none", "other"],
                        "aria-valuemax": "#",
                        "aria-valuemin": "#",
                        "aria-valuenow": "#",
                        "aria-valuetext": "*"
                    }
            },
            280: function(e, t) {
                "use strict";
                t.Z = {
                    alert: {
                        allowed: "section"
                    },
                    alertdialog: {
                        allowed: "section",
                        attributes: ["aria-modal"]
                    },
                    application: {
                        allowed: "article, audio, embed, iframe, object, section, svg, video",
                        attributes: ["aria-activedescendant"]
                    },
                    article: {
                        elements: "article",
                        attributes: ["aria-posinset", "aria-setsize"]
                    },
                    banner: {
                        elements: "header",
                        allowed: "section"
                    },
                    button: {
                        elements: 'button, input[type="button"]',
                        allowed: "a[href]",
                        attributes: ["aria-pressed"]
                    },
                    cell: {
                        elements: "td",
                        attributes: ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan"],
                        required_parent: ["row"]
                    },
                    checkbox: {
                        elements: 'input[type="checkbox"]',
                        allowed: "button",
                        attributes: ["aria-checked", "aria-readonly"]
                    },
                    columnheader: {
                        elements: 'th:not([scope]), th[scope="col"]',
                        attributes: ["aria-colindex", "aria-colspan", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-sort"],
                        required_parent: ["row"]
                    },
                    combobox: {
                        allowed: 'input[type="text"]',
                        attributes: ["aria-activedescendant", "aria-autocomplete", "aria-orientation", "aria-readonly", "aria-required"],
                        required_children: [{
                            condition: '[aria-expanded="true"]',
                            role: ["listbox", "tree", "grid", "dialog"]
                        }]
                    },
                    complementary: {
                        elements: "aside",
                        allowed: "section"
                    },
                    contentinfo: {
                        elements: "footer"
                    },
                    definition: {
                        elements: "dfn, dd"
                    },
                    dialog: {
                        attributes: ["aria-modal"]
                    },
                    directory: {},
                    document: {},
                    feed: {
                        required_children: ["article"]
                    },
                    figure: {},
                    form: {
                        elements: "form"
                    },
                    grid: {
                        elements: "table",
                        attributes: ["aria-activedescendant", "aria-colcount", "aria-level", "aria-multiselectable", "aria-readonly", "aria-rowcount"],
                        required_children: ["row", "rowgroup"]
                    },
                    gridcell: {
                        elements: "td",
                        attributes: ["aria-colindex", "aria-colspan", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"],
                        required_parent: ["row"]
                    },
                    group: {
                        attributes: ["aria-activedescendant"],
                        required_children: [{
                            condition: '[role="list"] [role="group"]',
                            required: ["listitem"]
                        }, {
                            condition: '[role="menu"] [role="group"], [role="menubar"] [role="group"]',
                            required: ["menuitem", "menuitemradio"]
                        }, {
                            condition: '[role="tree"] [role="group"]',
                            required: ["treeitem"]
                        }]
                    },
                    heading: {
                        elements: "h1, h2, h3, h4, h5, h6",
                        attributes: ["aria-level"],
                        required: ["aria-level"]
                    },
                    img: {},
                    link: {
                        elements: "a[href], map area[href]"
                    },
                    list: {
                        elements: "ol, ul",
                        required_children: ["listitem", "group"]
                    },
                    listbox: {
                        elements: "select",
                        attributes: ["aria-activedescendant", "aria-multiselectable", "aria-orientation", "aria-readonly", "aria-required"],
                        required_children: ["option"]
                    },
                    listitem: {
                        elements: "li",
                        attributes: ["aria-level", "aria-posinset", "aria-setsize"],
                        required_parent: ["list", "group"]
                    },
                    log: {},
                    main: {
                        elements: "main"
                    },
                    marquee: {},
                    math: {},
                    menu: {
                        attributes: ["aria-activedescendant", "aria-orientation"],
                        required_children: ["menuitem", "group", "menuitemcheckbox", "menuitemradio"]
                    },
                    menubar: {
                        attributes: ["aria-activedescendant", "aria-orientation"],
                        required_children: ["menuitem", "group", "menuitemcheckbox", "menuitemradio"]
                    },
                    menuitem: {
                        attributes: ["aria-posinset", "aria-setsize"],
                        required_parent: ["group", "menu", "menubar"]
                    },
                    menuitemcheckbox: {
                        attributes: ["aria-checked", "aria-posinset", "aria-setsize"],
                        required_parent: ["menu", "menubar"]
                    },
                    menuitemradio: {
                        attributes: ["aria-checked", "aria-posinset", "aria-setsize"],
                        required_parent: ["group", "menu", "menubar"]
                    },
                    navigation: {
                        elements: "nav"
                    },
                    note: {},
                    option: {
                        elements: "option",
                        attributes: ["aria-checked", "aria-posinset", "aria-selected", "aria-setsize"],
                        required_parent: ["listbox"]
                    },
                    progressbar: {
                        attributes: ["aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]
                    },
                    radio: {
                        elements: 'input[type="radio"]',
                        attributes: ["aria-checked", "aria-posinset", "aria-setsize"]
                    },
                    radiogroup: {
                        attributes: ["aria-activedescendant", "aria-orientation", "aria-readonly", "aria-required"],
                        required_children: ["radio"]
                    },
                    region: {
                        elements: "section"
                    },
                    row: {
                        elements: "tr",
                        attributes: ["aria-activedescendant", "aria-colindex", "aria-level", "aria-rowindex", "aria-selected"],
                        required_children: ["cell", "gridcell", "columnheader", "rowheader"],
                        required_parent: ["grid", "rowgroup", "table", "treegrid"]
                    },
                    rowgroup: {
                        required_children: ["row"],
                        required_parent: ["grid", "table", "treegrid"]
                    },
                    rowheader: {
                        elements: 'th[scope="row"]',
                        attributes: ["aria-colindex", "aria-colspan", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-sort"],
                        required_parent: ["row"]
                    },
                    scrollbar: {
                        attributes: ["aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"],
                        required: ["aria-controls"]
                    },
                    search: {
                        attributes: []
                    },
                    searchbox: {
                        elements: 'input[type="search"]',
                        attributes: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"]
                    },
                    separator: {
                        elements: "hr",
                        attributes: ["aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]
                    },
                    slider: {
                        attributes: ["aria-orientation", "aria-readonly", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]
                    },
                    spinbutton: {
                        attributes: ["aria-activedescendant", "aria-readonly", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"]
                    },
                    status: {},
                    switch: {
                        attributes: ["aria-checked", "aria-readonly"]
                    },
                    tab: {
                        attributes: ["aria-posinset", "aria-selected", "aria-setsize"],
                        required_parent: ["tablist"]
                    },
                    table: {
                        attributes: ["aria-colcount", "aria-rowcount"],
                        required_children: ["row", "rowgroup"]
                    },
                    tablist: {
                        attributes: ["aria-activedescendant", "aria-level", "aria-multiselectable", "aria-orientation"],
                        required_children: ["tab"]
                    },
                    tabpanel: {},
                    term: {
                        elements: "dt"
                    },
                    textbox: {
                        elements: 'input:not([type]), input[type="text"], input[type="email"], input[type="tel"], textarea',
                        attributes: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"]
                    },
                    timer: {},
                    toolbar: {
                        attributes: ["aria-activedescendant", "aria-orientation"]
                    },
                    tooltip: {},
                    tree: {
                        attributes: ["aria-activedescendant", "aria-multiselectable", "aria-orientation", "aria-required"],
                        required_children: ["group", "treeitem"]
                    },
                    treegrid: {
                        attributes: ["aria-activedescendant", "aria-colcount", "aria-level", "aria-multiselectable", "aria-orientation", "aria-readonly", "aria-required", "aria-rowcount"],
                        required_children: ["row", "rowgroup"]
                    },
                    treeitem: {
                        attributes: ["aria-checked", "aria-level", "aria-posinset", "aria-selected", "aria-setsize"],
                        required_parent: ["group", "tree"]
                    }
                }
            },
            2069: function(e, t) {
                "use strict";
                t.Z = {
                    name: {
                        type: "text",
                        fields: ["name", "full name"]
                    },
                    "honorific-prefix": {
                        type: "text",
                        fields: ["prefix", "title", "honorific", "honorific-prefix"]
                    },
                    "given-name": {
                        type: "text",
                        fields: ["first name", "given name"]
                    },
                    "additional-name": {
                        type: "text",
                        fields: ["additional name", "middle name", "middle initial"]
                    },
                    "family-name": {
                        type: "text",
                        fields: ["last name", "family name"]
                    },
                    "honorific-suffix": {
                        type: "text",
                        fields: ["suffix"]
                    },
                    nickname: {
                        type: "text",
                        fields: ["screen name", "nick name"]
                    },
                    "organization-title": {
                        type: "text",
                        fields: ["position", "company title", "organization title"]
                    },
                    username: {
                        type: "text",
                        fields: ["user name"]
                    },
                    "new-password": {
                        type: "password",
                        fields: ["new password"]
                    },
                    "current-password": {
                        type: "password",
                        fields: ["password", "current password", "old password"]
                    },
                    organization: {
                        type: "text",
                        fields: ["company", "organization"]
                    },
                    "street-address": {
                        type: "textarea",
                        fields: ["address", "billing address", "shipping address", "street address", "billing street address", "shipping street address"]
                    },
                    "address-line1": {
                        type: "text",
                        fields: ["address line 1", "billing address line 1", "shipping address line 1"]
                    },
                    "address-line2": {
                        type: "text",
                        fields: ["address line 2", "billing address line 2", "shipping address line 2"]
                    },
                    "address-line3": {
                        type: "text",
                        fields: ["address line 3", "billing address line 3", "shipping address line 3"]
                    },
                    "address-level4": {
                        type: "text",
                        fields: ["address level 4", "billing address level 4", "shipping address level 4"]
                    },
                    "address-level3": {
                        type: "text",
                        fields: ["address level 3", "billing address level 3", "shipping address level 3"]
                    },
                    "address-level2": {
                        type: "text",
                        fields: ["address level 2", "billing address level 2", "shipping address level 2", "city", "billing city", "shipping city", "locality", "billing locality", "shipping locality"]
                    },
                    "address-level1": {
                        type: "text",
                        fields: ["address level 1", "billing address level 1", "shipping address level 1", "state", "billing state", "shipping state", "area", "billing area", "shipping area", "providence", "billing providence", "shipping providence", "region", "billing region", "shipping region"]
                    },
                    country: {
                        type: "text",
                        fields: ["country", "billing country", "shipping country", "country code", "billing country code", "shipping country code"]
                    },
                    "country-name": {
                        type: "text",
                        fields: ["country", "billing country", "shipping country", "country name", "billing country name", "shipping country name"]
                    },
                    "postal-code": {
                        type: "text",
                        fields: ["zip", "billing zip", "shipping zip", "zip code", "billing zip code", "shipping zip code", "postal code", "billing postal code", "shipping postal code"]
                    },
                    "cc-name": {
                        type: "text",
                        fields: ["cc name", "credit card name"]
                    },
                    "cc-given-name": {
                        type: "text",
                        fields: ["cc given name", "cc first name", "credit card given name", "credit card first name"]
                    },
                    "cc-additional-name": {
                        type: "text",
                        fields: ["cc additional name", "cc middle name", "credit card additional name", "credit card middle name"]
                    },
                    "cc-family-name": {
                        type: "text",
                        fields: ["cc family name", "cc last name", "credit card family name", "credit card last name"]
                    },
                    "cc-number": {
                        type: "text",
                        fields: ["cc number", "credit card number", "credit card"]
                    },
                    "cc-exp": {
                        type: "month",
                        fields: ["cc exp", "exp", "credit card expiration", "expiration"]
                    },
                    "cc-exp-month": {
                        type: "number",
                        fields: ["cc exp month", "exp month", "credit card expiration month", "credit card exp month", "expiration month"]
                    },
                    "cc-exp-year": {
                        type: "number",
                        fields: ["cc exp year", "exp year", "credit card expiration year", "credit card exp year", "expiration year"]
                    },
                    "cc-csc": {
                        type: "text",
                        fields: ["cc csc", "csc", "credit card security code", "credit security code"]
                    },
                    "cc-type": {
                        type: "text",
                        fields: ["cc type", "credit card type"]
                    },
                    "transaction-currency": {
                        type: "text",
                        fields: ["transaction currency", "currency"]
                    },
                    "transaction-amount": {
                        type: "number",
                        fields: ["transaction amount", "amount"]
                    },
                    language: {
                        type: "text",
                        fields: ["language", "preferred language"]
                    },
                    bday: {
                        type: "date",
                        fields: ["bday", "dob", "birth day", "birth date", "date of birth"]
                    },
                    "bday-day": {
                        type: "number",
                        fields: ["bday day", "dob day", "birthdate day", "day of birthdate", "day of birth"]
                    },
                    "bday-month": {
                        type: "number",
                        fields: ["bday month", "dob month", "birthday month", "month of birthday", "month of birth"]
                    },
                    "bday-year": {
                        type: "number",
                        fields: ["bday year", "dob year", "birth day year", "year of birthday", "year of birth"]
                    },
                    sex: {
                        type: "text",
                        fields: ["sex", "gender", "gender identity"]
                    },
                    url: {
                        type: "url",
                        fields: ["url", "web url", "website url"]
                    },
                    photo: {
                        type: "url",
                        fields: ["photo", "pic", "picture", "profile", "profile pic", "profile picture", "avatar", "avatar pic", "avatar picture"]
                    },
                    tel: {
                        type: "tel",
                        locational: !0,
                        fields: ["tel", "telephone number", "phone number", "home phone", "work phone", "office phone", "cell number", "mobile number", "mobile", "cell", "fax number", "fax"]
                    },
                    "tel-country-code": {
                        type: "text",
                        locational: !0,
                        fields: ["tel country code", "telephone country code", "phone country code", "home country code", "work country code", "office country code", "cell country code", "mobile country code", "fax country code"]
                    },
                    "tel-national": {
                        type: "text",
                        locational: !0,
                        fields: ["tel national", "telephone national number", "phone national number", "home phone national", "work phone national", "office phone national", "cell national number", "mobile national number", "mobile national", "cell national", "fax national number", "fax national"]
                    },
                    "tel-area-code": {
                        type: "text",
                        fields: ["tel area code", "telephone area code", "phone area code", "home phone area code", "work phone area code", "office phone area code", "cell area code", "mobile area code", "fax area code"]
                    },
                    "tel-local": {
                        type: "text",
                        locational: !0,
                        fields: ["tel local", "telephone local number", "phone local number", "home phone local", "work phone local", "office phone local", "cell local number", "mobile local number", "mobile local", "cell local", "fax local number", "fax local"]
                    },
                    "tel-local-prefix": {
                        type: "text",
                        locational: !0,
                        fields: ["tel local prefix", "telephone local prefix", "phone local prefix", "home local prefix", "home phone local prefix", "work local prefix", "work phone local prefix", "office local prefix", "office phone local prefix", "cell local prefix", "mobile local prefix", "mobile phone local prefix", "cell phone local prefix", "fax local prefix"]
                    },
                    "tel-local-suffix": {
                        type: "text",
                        locational: !0,
                        fields: ["tel local suffix", "telephone local suffix", "phone local suffix", "home local suffix", "home phone local suffix", "work local suffix", "work phone local suffix", "office local suffix", "office phone local suffix", "cell local suffix", "mobile local suffix", "mobile phone local suffix", "cell phone local suffix", "fax local suffix"]
                    },
                    "tel-extension": {
                        type: "text",
                        locational: !0,
                        fields: ["tel extension", "telephone extension number", "phone extension number", "home phone extension", "work phone extension", "office phone extension", "cell extension number", "mobile extension number", "mobile extension", "cell extension", "fax extension number", "fax extension"]
                    },
                    email: {
                        type: "email",
                        locational: !0,
                        fields: ["email", "email address", "work email", "home email", "work email address", "home email address"]
                    },
                    impp: {
                        type: "url",
                        locational: !0,
                        fields: ["instant message url", "instant message protocol", "instant messanger url", "instant messenger protocol", "instant messaging", "instant messaging url"]
                    }
                }
            },
            3142: function(e, t) {
                "use strict";
                t.Z = ["link", "read more", "learn more", "more", "details", "more details", "click here", "link here", "click", "here", "click for details", "continue", "continue reading", "button"]
            },
            5618: function(e, t) {
                "use strict";
                t.Z = [".csv", ".doc", ".docx", ".keynote", ".numbers", ".pages", ".pdf", ".pps", ".ppsx", ".ppt", ".pptx", ".rtf", ".txt", ".xls", ".xlsx"]
            },
            850: function(e, t, i) {
                "use strict";
                i.d(t, {
                    m: function() {
                        return n
                    },
                    J: function() {
                        return o
                    }
                });
                var n = function(e) {
                        var t = e.split("/").pop();
                        return t && new RegExp(/\./).test(t) ? "." + t.split(".").pop() : ""
                    },
                    o = function(e) {
                        switch (e) {
                            case ".pdf":
                                return "PDF";
                            case ".doc":
                            case ".docx":
                                return "Word";
                            case ".xls":
                            case ".xlsx":
                                return "Excel";
                            case ".ppt":
                            case ".pps":
                            case ".pptx":
                            case ".ppsx":
                                return "PowerPoint";
                            default:
                                return "Document"
                        }
                    }
            },
            3022: function(e, t, i) {
                "use strict";
                var n = i(7422);
                t.Z = n.Z
            },
            3358: function(e, t) {
                "use strict";
                var i = AudioEye.device;
                t.Z = i
            },
            1004: function(e, t, i) {
                "use strict";
                var n = i(2123),
                    o = {
                        init: function() {
                            o.vt = new n.default, window.AudioEye["visual-toolkit"] = o.vt, o.vt.init()
                        }
                    };
                t.Z = o
            },
            8523: function(e, t, i) {
                "use strict";
                var n = i(2399),
                    o = new(i(4918).Z)("utilities_v2");
                n.Z.requireModule = function(e) {
                    var t = window.ae_jQuery.Deferred();
                    e = n.Z.versionizeModule(e);
                    var a = ["modules/".concat(e)],
                        r = n.Z.getConditionalDeps(e);
                    return r.length && (a = a.concat(r)), i(274)("./".concat(e)).then((function(i) {
                        if (!i || !i.default) throw new Error("AE Fatal: Failed to load ".concat(e));
                        o.debug("AudioEye Module ".concat(e, " loaded. Preparing to initialize."));
                        for (var n = 0; n < r.length; n += 1) options[e][r[n]] = arguments[n + 1];
                        i.default.promise ? (o.debug("AudioEye Module ".concat(e, " requires dependencies. Waiting to call constructor.")), i.default.promise.done((function() {
                            t.resolve(i.default)
                        }))) : t.resolve(i.default)
                    })).catch((function(i) {
                        AudioEye.toolbar && AudioEye.toolbar.setLoading && AudioEye.toolbar.setLoading(e, !1), delete AudioEye[e], o.info("Error: ", i), t.resolve(!1)
                    })), t.promise()
                }, t.Z = n.Z
            },
            277: function(e, t, i) {
                "use strict";
                var n = i(6299),
                    o = i(280),
                    a = i(3142),
                    r = i(2069),
                    s = i(5618),
                    l = i(850);
                const c = {
                        GLOBAL_ATTRIBUTES: n.j,
                        ROLE_ATTRIBUTES: n.q,
                        ROLES: o.Z
                    },
                    u = {
                        getExpectedText: l.J,
                        getFileExtension: l.m
                    };
                t.Z = function(e, t) {
                    var i = {},
                        n = t;
                    return i.classifications = {
                        FAILED_HIGH_RISK: "Error",
                        FAILED_LOW_RISK: "Risk",
                        VERIFY_HIGH_PRIORITY: "Needs Review",
                        VERIFY_LOW_PRIORITY: "Unverified"
                    }, i.constants = {
                        placeholders: {
                            title: {
                                starts_with: ["untitled"],
                                is: ["title", "untitled", "content", "contents", "new page", "new", "nbsp", "frame", "frame title", "iframe", "iframe title"]
                            },
                            alt: {
                                starts_with: ["graphic of", "bullet", "image of"],
                                ends_with: ["image", "graphic"],
                                is: ["alt", "nbsp", "untitled", "new", "spacer", "image", "img", "photo", "photograph", "graph", "graphic", "drawing", "painting", "logo", "artwork", "bullet", "button", "arrow", "more", "chart", "table", "diagram"]
                            },
                            legend: ["legend", "nbsp", "untitled", "fields", "fieldset"],
                            label: ["label", "nbsp", "untitled", "input", "select", "dropdown"]
                        },
                        bad_link_text: a.Z,
                        bad_button_text: ["button", "click", "click here"],
                        content_elements: "h1, h2, h3, h4, h5, h6, footer, header, nav, div, p, span, aside, abbr, article, details, summary, figcaption, section",
                        tabbable: "*[tabindex], a[href], area[href], input:not([type=hidden], [type=Hidden]), select, textarea, button",
                        emoticons: [":)", ":o)", ":-)", ":^)", ";)", "=)", "B^)", "8^)", "=]", ":]", "xD", ":-D", ":D", "=D", ":-(", ":(", "=(", ":/", ":P"],
                        audio_extensions: [".mp3", ".m4a", ".ogg", ".wav"],
                        media_extensions: [".mkv", ".mov", ".mpg", ".ram", ".wmv", ".svx", ".iff", ".aif", ".mp3", ".m4a", ".ogg", ".pcm", ".sam", ".smp", ".snd", ".vce", ".vox", ".wav"],
                        document_extensions: s.Z,
                        spacer_image_names: ["spacer", "space", "blank", "nbsp"],
                        image_extensions: [".jpg", ".jpeg", ".gif", ".tiff", ".svg", ".png"],
                        mouseKeyAssociations: {
                            onmousedown: "onkeydown",
                            onmouseup: "onkeyup",
                            onmousemove: "avoid using",
                            onmouseover: "onfocus",
                            onmouseout: "onblur",
                            onmouseenter: "onfocus",
                            onmouseleave: "onblur",
                            onclick: "onkeypress",
                            ondblclick: "avoid using"
                        },
                        required: ["required", "req"],
                        requiredSelectors: [".required", ".req", "[required]", "[aria-required=true]", "[aria-label*='required']", "[aria-label*='Required']", "[aria-label*='REQUIRED']"],
                        ignored_input_types: ["hidden", "submit", "reset", "button", "image"],
                        aria_global_attributes: c.GLOBAL_ATTRIBUTES,
                        aria_role_attributes: c.ROLE_ATTRIBUTES,
                        do_not_test_selector: "base, body, caption, head, head *, html, link, meta, noscript, script, style, svg *, title",
                        aria_roles: c.ROLES,
                        autocomplete_field_names: r.Z,
                        autocomplete_tokens: ["billing", "shipping", "home", "work", "mobile", "fax", "pager"],
                        conventional_links: [
                            ["home", "home page", "main page"],
                            ["contact", "contact us", "contact form", "comment"],
                            ["site map"],
                            ["help", "support"],
                            ["about", "about us"],
                            ["terms", "terms and conditions", "terms of use", "terms of service", "tos", "tac", "tc"],
                            ["services", "products", "tools"],
                            ["language", "languages", "language options"],
                            ["sign in", "log in"],
                            ["sign out", "log out"],
                            ["sign up", "sign up form", "join", "register", "registration", "registration form"]
                        ],
                        langRegex: new RegExp(/^[a-zA-Z]{2}(-[a-zA-Z]+)?$/g),
                        optgroup_name_excludes: ["state", "country", "nation", "language", "province", "region", "city", "locality", "year", "make", "car_make", "price", "interest", "interest_rate"],
                        optgroup_option_excludes: [
                            ["Georgia", "Wisconsin"],
                            ["GA", "WI"],
                            ["France", "Germany"],
                            ["Dutch", "French", "Spanish"],
                            ["Toyota", "Ford", "Audi"]
                        ]
                    }, i.common = {
                        escapeSelectorText: function(e) {
                            return e && e.replace ? e.replace(/[!"#$%&'()*+,.\/:;<=>?@\[\]|\\^`{}~]/g, "\\$&") : "''"
                        },
                        escapeRegExp: function(e) {
                            return e.replace(/[.*+\-?^${}()|[\]\\]/g, "\\$&")
                        },
                        getScannedContainer: function() {
                            var e = i.html.find("body").addBack("body");
                            return 0 === e.length && (e = i.html.eq(0)), e
                        },
                        getElements: function(t, n) {
                            "string" != typeof t && (n = t, t = "*");
                            var o = (n = n || i.html).find(t);
                            return n.find("iframe").each((function() {
                                if (e(this).attr("src") && !e(this).prop("src").match(/about:\s*blank/i)) {
                                    var n = e("<a></a>").attr("href", this.src);
                                    if (window.location.host === n.prop("host")) try {
                                        var a = i.common.getElements(t, e(this).contents());
                                        o = o.add(a)
                                    } catch (t) {
                                        e.noop()
                                    }
                                }
                            })), o
                        },
                        getContentElements: function(t, n, o) {
                            void 0 === o && !0 === n && (n = void 0, o = !0), "string" != typeof t && (n = t, t = void 0), t || (t = i.constants.content_elements);
                            var a = (n = e(n || i.html)).find(t).filter((function() {
                                return 0 === e(this).parentsUntil(n, t).length
                            }));
                            return a = a.not(i.constants.do_not_test_selector), n.find("iframe").each((function() {
                                if (e(this).attr("src") && !e(this).prop("src").match(/about:\s*blank/i)) {
                                    var n = e("<a></a>").attr("href", this.src);
                                    if (window.location.host === n.prop("host")) try {
                                        var r = i.common.getContentElements(t, e(this).contents(), o).filter((function() {
                                            return 0 === e(this).parent().closest(t).length
                                        }));
                                        a = a.add(r)
                                    } catch (t) {
                                        e.noop()
                                    }
                                }
                            })), a.filter((function() {
                                return (o || !1 === i.common.isAriaHidden(this)) && !1 === e(this).is("[role=presentation], [role=none]")
                            }))
                        },
                        getContentElementsNative: function(e, t, n) {
                            void 0 === n && !0 === t && (t = void 0, n = !0), "string" != typeof e && (t = e, e = void 0), e || (e = i.constants.content_elements);
                            var o = t = t || document.querySelector("html");
                            void 0 === t.length && (o = [t]);
                            var a = [];
                            o.forEach((function(t) {
                                t.querySelectorAll(e).forEach((function(i) {
                                    for (var n = !1, o = i.parentElement; o && o != t && !n;) o.matches(e) && (n = !0), o = o.parentElement;
                                    n || a.push(i)
                                }))
                            }));
                            var r = [];
                            a.forEach((function(e) {
                                e.matches(i.constants.do_not_test_selector) || r.push(e)
                            }));
                            var s = [];
                            o.forEach((function(e) {
                                var t = e.getElementsByTagName("iframe");
                                t.length && (s = s.concat(Array.from(t)))
                            }));
                            for (var l = 0; l < s.length; l++) {
                                var c = s[l];
                                if (!(!c.getAttribute("src") || c.src && c.src.match(/about:\s*blank/i))) {
                                    var u = document.createElement("a");
                                    if (u.setAttribute("href", c.src), window.location.host === u.host) try {
                                        var d = i.common.getContentElementsNative(e, c.contentDocument && c.contentDocument.childNodes ? c.contentDocument.childNodes : [], n),
                                            m = [];
                                        d.forEach((function(t) {
                                            for (var i = !1, n = t.parentElement; n && !i;) n.matches(e) && (i = !0), n = n.parentElement;
                                            i || m.push(t)
                                        })), r = r.concat(m)
                                    } catch (e) {}
                                }
                            }
                            var f = [];
                            return r.forEach((function(e) {
                                !n && !1 !== i.common.isAriaHiddenNative(e) || !1 !== e.matches("[role=presentation], [role=none]") || f.push(e)
                            })), f
                        },
                        getAriaRoleElements: function(t, n, o, a) {
                            if (void 0 === a && (!0 === o ? (o = void 0, a = !0) : void 0 === o && !0 === n && (n = void 0, a = !0)), "string" != typeof t) return e();
                            var r, s = i.constants.aria_roles[t];
                            return s ? (n = e(n || i.html), o = o || "find", r = (r = s.elements ? n[o].call(n, s.elements + ", [role='" + t + "']").not("[role!='" + t + "']").addBack(":not([role])").filter((function() {
                                return !0 === a || !i.common.isAriaHidden(this)
                            })) : n[o].call(n, "[role='" + t + "']").filter((function() {
                                return !0 === a || !i.common.isAriaHidden(this)
                            }))).not(i.constants.do_not_test_selector), n.find("iframe").each((function() {
                                if (e(this).attr("src") && !e(this).prop("src").match(/about:\s*blank/i)) {
                                    var n = e("<a></a>").attr("href", this.src);
                                    if (window.location.host === n.prop("host")) try {
                                        var l, c = e(this).contents();
                                        l = s.elements ? c[o].call(c, s.elements + ", [role='" + t + "']").not("[role!='" + t + "']").addBack(":not([role])").filter((function() {
                                            return !0 === a || !i.common.isAriaHidden(this)
                                        })) : c[o].call(c, "[role='" + t + "']").filter((function() {
                                            return !0 === a || !i.common.isAriaHidden(this)
                                        })), r = r.add(l)
                                    } catch (t) {
                                        e.noop()
                                    }
                                }
                            })), "banner" !== t && "contentinfo" !== t || (r = r.filter((function() {
                                if (!0 === e(this).is("header, footer") && !1 === e(this).is("[role]")) {
                                    var t = e(this);
                                    return ["article", "complementary", "main", "navigation", "region"].every((function(e) {
                                        return 0 === t.closest(i.constants.aria_roles[e].elements + ", [role='" + e + "']").not("[role!='" + e + "']").addBack(":not([role])").length
                                    }))
                                }
                                return !0
                            }))), r) : e()
                        },
                        dereferenceAria: function(t, n) {
                            var o = e(t).attr(n || "aria-labelledby");
                            return !!o && o.split(" ").map((function(e) {
                                var t = "";
                                if (e = e.trim()) {
                                    e = i.common.escapeSelectorText(e);
                                    var n = i.common.getElements("*[id='" + e + "']");
                                    n.length && (t = i.common.getElementText(n))
                                }
                                return t
                            })).ae_reduce((function(e, t) {
                                return t.trim() && ("." !== e.slice(-1) && (e += "."), e += " " + t), e
                            }))
                        },
                        getElementWithWord: function(t, n) {
                            var o;
                            n = n || i.html;
                            try {
                                o = (o = e(n).find(':contains("' + t + '")').addBack()).filter((function() {
                                    return 0 === e(this).find(o).length
                                }))
                            } catch (t) {
                                o = e()
                            }
                            return 0 === o.length && (o = e(n)), o[0]
                        },
                        getElementText: function(t, i) {
                            var n = "",
                                o = function t(o) {
                                    var a = "",
                                        r = o.nodeType,
                                        s = o.nodeName;
                                    if (e(o).is(i)) return "";
                                    if ("SCRIPT" === s || "STYLE" === s) return "";
                                    if (r === Node.ELEMENT_NODE || r === Node.DOCUMENT_NODE || r === Node.DOCUMENT_FRAGMENT_NODE) {
                                        if (e(o).is("noscript")) return n += e(o).text(), "";
                                        if (e(o).is("img, input[type=image], map area")) return e(o).attr("alt") || "";
                                        if (e(o).is("input[type=button]")) return e(o).attr("value") || "";
                                        for (var l, c = o.firstChild; c;) a += t(c), (l = c.nextSibling) && c.nodeType !== Node.CDATA_SECTION_NODE && l.nodeType !== Node.CDATA_SECTION_NODE && c.nodeType !== Node.TEXT_NODE && l.nodeType !== Node.TEXT_NODE && (a += " "), c = l;
                                        return a
                                    }
                                    return r === Node.TEXT_NODE || r === Node.CDATA_SECTION_NODE ? o.nodeValue : ""
                                }(t).trim();
                            return n && -1 !== n.indexOf(o) ? o + " (noscript: " + n + ")" : o
                        },
                        getElementLabel: function(t) {
                            var n = e();
                            if (0 === n.length && (n = e(t).closest("label")), 0 === n.length && t.id) {
                                var o = i.common.escapeSelectorText(t.id);
                                n = i.common.getContentElements("label[for='" + o + "']")
                            }
                            return !!n.length && n
                        },
                        getElementAccessibleName: function(t) {
                            if (e(t).attr("aria-labelledby")) return i.common.dereferenceAria(t, "aria-labelledby");
                            if (e(t).attr("aria-label")) return e(t).attr("aria-label").trim();
                            var n = i.common.getElementLabel(t);
                            return !!n && i.common.getElementText(n)
                        },
                        isPlaceholderText: function(e, t) {
                            if ("" === (t = t.toLowerCase().replace(/\s\s*/g, " ").trim())) return !0;
                            var n = i.constants.placeholders[e] || [];
                            return n.starts_with && n.starts_with.some((function(e) {
                                return new RegExp("^" + e).test(t)
                            })), n.ends_with && n.ends_with.some((function(e) {
                                return new RegExp(e.ends_with + "$").test(t)
                            })), n.is && (n = n.is), -1 !== n.indexOf(t)
                        },
                        isBadLinkText: function(e) {
                            return "" === (e = e.toLowerCase().replace(/\s\s*/g, " ").replace(/[.,;:!?+='"]+$/, "").trim()) || i.constants.bad_link_text.some((function(t) {
                                return e === t || e === t + "..."
                            }))
                        },
                        isRedundant: function(e, t, i) {
                            return !(!e || !t || -1 === t.indexOf(e)) || !(!t || !i || -1 === t.indexOf(i) && -1 === i.indexOf(t))
                        },
                        isAudioLink: function(e) {
                            return i.constants.audio_extensions.some((function(t) {
                                return e.substr(-4) === t
                            }))
                        },
                        isMediaLink: function(e) {
                            return i.constants.media_extensions.some((function(t) {
                                return e.substr(-4) === t
                            }))
                        },
                        isSpacerImage: function(e) {
                            var t = e.split(".");
                            return -1 !== i.constants.spacer_image_names.indexOf(t[0])
                        },
                        isAriaHidden: function(t) {
                            return e(t).closest("[aria-hidden=true], [aria-visible=false]").length > 0
                        },
                        isAriaHiddenNative: function(e) {
                            for (var t = !1; e && !t;) e.matches("[aria-hidden=true], [aria-visible=false]") && (t = !0), e = e.parentElement;
                            return t
                        },
                        getColorContrast: function(e, t) {
                            function i(e) {
                                if (e) {
                                    if ((e = (e = e.slice(1)).filter((function(e) {
                                            return void 0 !== e
                                        }))).length > 3) {
                                        var t = parseFloat(e[3]);
                                        e = e.slice(0, 3).map((function(e) {
                                            return e = parseInt(e), Math.floor(e * t) + Math.floor(192 * (1 - t))
                                        }))
                                    }
                                    var i = e.map((function(e) {
                                        var t = e / 255;
                                        return t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                                    }));
                                    return .2126 * i[0] + .7152 * i[1] + .0722 * i[2]
                                }
                                return !1
                            }
                            var n = /rgba?\((\d+),\s?(\d+),\s?(\d+)(?:,\s?((?:\d*\.)?\d+))?\)/,
                                o = e.match(n),
                                a = t.match(n),
                                r = i(o),
                                s = i(a);
                            return (Math.max(r, s) + .05) / (Math.min(r, s) + .05)
                        },
                        getParents: function(e, t) {
                            var i = [];
                            t = !!t && t.toUpperCase().trim().split(",");
                            for (var n = e && e.parentElement; n; n = n.parentElement)(!t || t.indexOf(n.nodeName) > -1) && i.push(n);
                            return i
                        }
                    }, i.testFailed = function(e, t, n, o, a) {
                        if (e.jquery && (e = e[0]), !i.excludes || !(i.excludes.is(e) || i.excludes.find(e).length > 0)) {
                            var r = {
                                element: e,
                                passed: !1,
                                result_code: t,
                                classification: n,
                                accuracy: o,
                                first_detected: i.scanName,
                                details: a || null
                            };
                            return i.test_result.push(r), r
                        }
                    }, i.testPassed = function(e, t, n, o, a) {
                        if (e.jquery && (e = e[0]), !i.excludes || !(i.excludes.is(e) || i.excludes.find(e).length > 0)) {
                            var r = {
                                element: e,
                                passed: !0,
                                result_code: t,
                                classification: n,
                                accuracy: o || 0,
                                details: a || null
                            };
                            return i.test_result.push(r), r
                        }
                    }, i.tests = {
                        imgTextAlt: function(t) {
                            t.common.getContentElements("img:not(a img)").each((function() {
                                var i = {
                                    source: this.src || !1,
                                    src_attr: e(this).attr("src"),
                                    srcset: e(this).attr("srcset") || "",
                                    width: e(this).width(),
                                    height: e(this).height(),
                                    usemap: e(this).attr("usemap") || ""
                                };
                                if (!i.usemap.length || !e("map[name='" + t.common.escapeSelectorText(i.usemap.replace("#", "")) + "'] area[href]").length) {
                                    if (i.source && (i.file_name = i.source.split("/").pop()), void 0 !== e(this).attr("aria-label") && (i.label = e(this).attr("aria-label")), void 0 !== e(this).attr("alt") && (i.alt = e(this).attr("alt")), i.naturalWidth = this.naturalWidth || i.width, i.naturalHeight = this.naturalHeight || i.height, 1 === i.width || 1 === i.height || 1 === i.naturalWidth || 1 === i.naturalHeight || i.file_name && t.common.isSpacerImage(i.file_name)) return t.testFailed(this, "imgTextAltMakeDecorative", t.classifications.FAILED_LOW_RISK, 50, i);
                                    if (void 0 === i.label && void 0 === i.alt) return t.testFailed(this, "imgTextAltNotFound", t.classifications.FAILED_HIGH_RISK, 100, i);
                                    if (i.title = e(this).attr("title"), i.outside_text = e(this).parent().text(), t.common.isRedundant(i.title, i.outside_text, i.alt)) return t.testFailed(this, "imgTextAltRedundant", t.classifications.FAILED_LOW_RISK, 75, i);
                                    var n = i.label || i.alt || "";
                                    return "" === n ? t.testPassed(this, "imgTextAltFoundDecorative", t.classifications.VERIFY_LOW_PRIORITY, 75, i) : t.common.isPlaceholderText("alt", n) ? t.testFailed(this, "imgTextAltPlaceholder", t.classifications.FAILED_HIGH_RISK, 100, i) : !i.source || n !== i.source && n !== i.file_name ? n.length > 100 ? t.testFailed(this, "imgTextAltTooLong", t.classifications.FAILED_LOW_RISK, 50, i) : t.testPassed(this, "imgTextAltFound", t.classifications.VERIFY_LOW_PRIORITY, 75, i) : t.testFailed(this, "imgTextAltFileName", t.classifications.FAILED_HIGH_RISK, 100, i)
                                }
                            }))
                        },
                        imgAdjacent: function(t) {
                            t.common.getContentElements("img, input[type=image]").each((function() {
                                var i = e(this).attr("alt") || "",
                                    n = e(this).nextAll("img, input[type=image]").slice(0, 2);
                                if (n.length > 0) {
                                    var o = {
                                        alt: i.trim(),
                                        next_alts: n.map((function() {
                                            return (e(this).attr("alt") || "").trim()
                                        })).get()
                                    };
                                    return "" !== o.alt && o.next_alts.length > 0 && -1 !== o.next_alts.indexOf(o.alt) ? t.testFailed(this, "imgAdjacentDuplicateAlt", t.classifications.FAILED_LOW_RISK, 100) : t.testPassed(this, "imgAdjacentUniqueAlt", t.classifications.VERIFY_LOW_PRIORITY, 90)
                                }
                            }))
                        },
                        inputImageTextAlt: function(t) {
                            t.common.getContentElements("input[type=image]").each((function() {
                                var i = {
                                    source: this.src || !1,
                                    src_attr: e(this).attr("src")
                                };
                                if (void 0 !== e(this).attr("aria-label") && (i.label = e(this).attr("aria-label")), void 0 !== e(this).attr("alt") && (i.alt = e(this).attr("alt")), void 0 === i.label && void 0 === i.alt) return t.testFailed(this, "inputImageTextAltNotFound", t.classifications.FAILED_HIGH_RISK, 100, i);
                                var n = i.label || i.alt || "";
                                return "" === n ? t.testFailed(this, "inputImageTextAltBlank", t.classifications.FAILED_HIGH_RISK, 100, i) : t.common.isPlaceholderText("alt", n) ? t.testFailed(this, "inputImageTextAltPlaceholder", t.classifications.FAILED_HIGH_RISK, 100, i) : !i.source || n !== i.source && n !== i.source.split("/").pop() ? t.testPassed(this, "inputImageTextAltFound", t.classifications.VERIFY_LOW_PRIORITY, 75, i) : t.testFailed(this, "inputImageTextAltFileName", t.classifications.FAILED_HIGH_RISK, 100, i)
                            }))
                        },
                        mapAreaTextAlt: function(t) {
                            t.common.getContentElements("map area[href]").each((function() {
                                var i = e(this).closest("map").attr("name");
                                if (i) {
                                    var n = t.common.getElements("img[usemap='#" + t.common.escapeSelectorText(i) + "']");
                                    if (0 !== n.length) {
                                        var o = {
                                                shape: e(this).attr("shape"),
                                                coords: e(this).attr("coords"),
                                                img_source: n[0].src || !1,
                                                img_src_attr: n.attr("src"),
                                                img_alt: n.attr("alt")
                                            },
                                            a = e(this).attr("alt");
                                        return void 0 === a ? t.testFailed(this, "mapAreaTextAltNotFound", t.classifications.FAILED_HIGH_RISK, 100, o) : (o.alt = a.trim(), "" === o.alt ? t.testFailed(this, "mapAreaTextAltBlank", t.classifications.FAILED_HIGH_RISK, 100, o) : t.common.isPlaceholderText("alt", o.alt) ? t.testFailed(this, "mapAreaTextAltPlaceholder", t.classifications.FAILED_HIGH_RISK, 100, o) : t.testPassed(this, "mapAreaTextAltFound", t.classifications.VERIFY_LOW_PRIORITY, 75, o))
                                    }
                                }
                            }))
                        },
                        appletEquivalent: function(t) {
                            t.common.getContentElements("applet").each((function() {
                                var i = {
                                        inner_text: e(this).text() || "",
                                        compliance: e(this).find(".ae-compliance-indent").text().trim()
                                    },
                                    n = e(this).attr("alt");
                                return void 0 !== n && (i.alt = n.trim()), i.alt || i.inner_text ? t.testPassed(this, "appletEquivalentFound", t.classifications.VERIFY_LOW_PRIORITY, 75, i) : t.testPassed(this, "appletEquivalentNotFound", t.classifications.VERIFY_HIGH_PRIORITY, 75, i)
                            }))
                        },
                        embedEquivalent: function(t) {
                            t.common.getContentElements("embed").each((function() {
                                var i = {},
                                    n = e(this.ownerDocument).find("noembed");
                                return n.length && (i.no_embed = n.text().trim()), i.no_embed ? t.testPassed(this, "embedEquivalentFound", t.classifications.VERIFY_LOW_PRIORITY, 75, i) : t.testPassed(this, "embedEquivalentNotFound", t.classifications.VERIFY_HIGH_PRIORITY, 75, i)
                            }))
                        },
                        objectEquivalent: function(t) {
                            t.common.getContentElements("object").each((function() {
                                var i = {
                                    inner_text: t.common.getElementText(this),
                                    compliance: e(this).find(".ae-compliance-indent").text().trim()
                                };
                                return "" === i.inner_text ? t.testPassed(this, "objectEquivalentNotFound", t.classifications.VERIFY_HIGH_PRIORITY, 75, i) : t.testPassed(this, "objectEquivalentFound", t.classifications.VERIFY_LOW_PRIORITY, 75, i)
                            }))
                        },
                        svgEquivalent: function(t) {
                            t.common.getContentElements("svg").each((function() {
                                var i = {
                                        title: e(this).find("title").text(),
                                        inner_text: "",
                                        compliance: e(this).find(".ae-compliance-indent").text().trim(),
                                        label: t.common.getElementAccessibleName(this)
                                    },
                                    n = e(this).find("text");
                                return n.length > 0 && (i.inner_text = n.map((function() {
                                    return t.common.getElementText(this)
                                })).get().join(" ")), "" !== i.title.trim() || "" !== i.inner_text.trim() || i.label ? t.testPassed(this, "svgEquivalentFound", t.classifications.VERIFY_LOW_PRIORITY, 75, i) : t.testFailed(this, "svgEquivalentNotFound", t.classifications.FAILED_LOW_RISK, 75, i)
                            }))
                        },
                        mediaTranscript: function(e) {
                            e.common.getAriaRoleElements("link").each((function() {
                                this.href && e.common.isMediaLink(this.href) && e.testPassed(this, "mediaTranscriptReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                            }))
                        },
                        videoCaption: function(t) {
                            t.common.getContentElements("a[href], iframe[src]").each((function() {
                                var i = e(this).attr("href") || e(this).attr("src") || "";
                                (i.match(/(youtu\.be)|(youtube(-nocookie)?\.com)/) || i.match(/vimeo\.com/)) && t.testPassed(this, "videoCaptionReview", t.classifications.VERIFY_HIGH_PRIORITY, 0)
                            })), t.common.getContentElements("video").each((function() {
                                e(this).find("track[kind=captions], track[src$=vtt]").length > 0 ? t.testPassed(this, "videoCaptionFound", t.classifications.VERIFY_LOW_PRIORITY, 75) : t.testPassed(this, "videoCaptionNotFound", t.classifications.VERIFY_HIGH_PRIORITY, 0)
                            }))
                        },
                        videoTextAlternative: function(t) {
                            t.common.getContentElements("a[href], iframe[src]").each((function() {
                                var i = e(this).attr("href") || e(this).attr("src") || "";
                                (i.match(/(youtu\.be)|(youtube(-nocookie)?\.com)/) || i.match(/vimeo\.com/)) && t.testPassed(this, "videoTextAlternativeReview", t.classifications.VERIFY_HIGH_PRIORITY, 0)
                            })), t.common.getContentElements("video").each((function() {
                                t.testPassed(this, "videoTextAlternativeReview", t.classifications.VERIFY_HIGH_PRIORITY, 0)
                            }))
                        },
                        htmlSemantics: function(e) {
                            e.common.getContentElements("p, div").each((function() {
                                if ("" !== e.common.getElementText(this)) {
                                    var t = !1,
                                        i = {};
                                    if (i.aria_role = this.getAttribute("role"), i.inner_text = this.innerText.replace(/\s\s+/g, " ").trim(), i.char_length = i.inner_text.length, "heading" !== i.aria_role && i.char_length > 0 && i.char_length < 140) {
                                        i.children = this.children.length;
                                        var n = ["STRONG", "EM", "I", "B", "U", "FONT"];
                                        i.styled_text = "";
                                        for (var o = 0; o < this.children.length; o++) this.children[o] && this.children[o].nodeName && n.indexOf(this.children[o].nodeName) > -1 && (i.styled_text += this.children[o].innerText);
                                        1 === i.children && i.inner_text === i.styled_text && (t = !0, i.issue_type = "Contents of element are wrapped in a bold/italic font tag"), i.font_size = parseFloat(getComputedStyle(this).fontSize), i.font_weight = getComputedStyle(this).fontWeight;
                                        for (var a = this, r = ["DIV", "P", "ASIDE", "ARTICLE", "DETAILS", "SUMMARY", "SECTION"]; a && !((a = a.nextElementSibling) && r.indexOf(a.nodeName) > -1););
                                        a && (i.next_font_size = parseFloat(getComputedStyle(a).fontSize), i.next_font_weight = parseFloat(getComputedStyle(a).fontWeight), (i.font_size > i.next_font_size || i.font_weight !== i.next_font_weight) && (t = !0, i.issue_type = "Larger font size/weight of element compared to next"))
                                    }
                                    return t ? e.testFailed(this, "htmlSemanticsUseHeader", e.classifications.FAILED_LOW_RISK, 50, i) : (i.char_length > 1e3 && (i.inner_text = i.inner_text.substr(0, 1e3) + "..."), e.testPassed(this, "htmlSemanticsFound", e.classifications.VERIFY_LOW_PRIORITY, 75, i))
                                }
                            })), e.common.getAriaRoleElements("heading").each((function() {
                                return "" === e.common.getElementText(this) ? e.testFailed(this, "htmlSemanticsEmptyHeader", e.classifications.FAILED_HIGH_RISK, 100) : e.testPassed(this, "htmlSemanticsFound", e.classifications.VERIFY_LOW_PRIORITY, 75)
                            })), e.common.getContentElements("blockquote").each((function() {
                                return this.getAttribute("cite") ? e.testPassed(this, "htmlSemanticsFound", e.classifications.VERIFY_LOW_PRIORITY, 75) : e.testFailed(this, "htmlSemanticsBadBlockquote", e.classifications.FAILED_LOW_RISK, 75)
                            })), e.common.getContentElements("ul, ol").each((function() {
                                var t = {};
                                return t.parent_lists = e.common.getParents(this, "ul, ol").length, t.child_lists = this.querySelectorAll("ul").length + this.querySelectorAll("ol").length, t.list_items = this.querySelectorAll("li").length, 0 === t.parent_lists && 0 === t.child_lists && t.list_items <= 1 ? e.testFailed(this, "htmlSemanticsBadUL", e.classifications.FAILED_LOW_RISK, 50, t) : e.testPassed(this, "htmlSemanticsFound", e.classifications.VERIFY_LOW_PRIORITY, 75, t)
                            })), e.common.getContentElements("dl").each((function() {
                                var t = {};
                                return this.querySelectorAll("dt").forEach((function(e) {
                                    e.nextElementSibling && "DT" == e.nextElementSibling.nodeName && (t.issue_type = "Consecutive DT tags")
                                })), t.issue_type || this.querySelectorAll("dt").forEach((function(e) {
                                    e.nextElementSibling && "DD" == e.nextElementSibling.nodeName || (t.issue_type = "DT with no DD after it")
                                })), t.issue_type || this.querySelectorAll("dd").forEach((function(e) {
                                    for (var i = 0; null != e;)
                                        if ((e = e.previousElementSibling) && "DT" == e.nodeName) {
                                            i++;
                                            break
                                        }
                                    if (0 === i) return t.issue_type = "DD with no DT before it", !1
                                })), t.issue_type ? e.testFailed(this, "htmlSemanticsImproperDL", e.classifications.FAILED_HIGH_RISK, 100, t) : e.testPassed(this, "htmlSemanticsFound", e.classifications.VERIFY_LOW_PRIORITY, 75)
                            })), e.common.getContentElements("dd, dt").each((function() {
                                0 === e.common.getParents(this, "dl").length && e.testFailed(this, "htmlSemanticsNoDLWrapper", e.classifications.FAILED_HIGH_RISK, 100)
                            })), e.common.getElements("noscript").each((function() {
                                return e.testPassed(this, "htmlSemanticsNoscript", e.classifications.VERIFY_HIGH_PRIORITY, 0, {
                                    noscript_text: this.innerText
                                })
                            }))
                        },
                        tableSemantics: function(t) {
                            t.common.getAriaRoleElements("grid").each((function() {
                                var i = {},
                                    n = e(this),
                                    o = t.common.getAriaRoleElements("row", n),
                                    a = t.common.getAriaRoleElements("gridcell", n);
                                if (i.row_count = o.length, i.cell_count = a.length, i.table_caption = n.find("caption").not("[role=presentation], [role=none]").text().trim(), i.table_summary = n.attr("summary") || "", i.table_caption) i.table_caption === i.table_summary.trim() && t.testFailed(this, "tableSemanticsCaptionEqualsSummary", t.classifications.FAILED_HIGH_RISK, 100);
                                else {
                                    var r, s = n.find("th, td").first(),
                                        l = n.prev("h1, h2, h3, h4, h5, h6"),
                                        c = n.prev("p");
                                    parseInt(s.attr("colspan"), 10) ? (r = s, i.possible_caption = "first cell") : c.length > 0 && (c.text().trim().length < 100 && (c.find("b, i, u, strong, em, center").length || "center" === c.css("text-align") || "bold" === c.css("font-weight") || "italics" === c.css("font-style")) || c.text().trim().length < 50) ? (r = c, i.possible_caption = "previous paragraph") : l.length > 0 && l.text().trim().length < 100 && (r = l, i.possible_caption = "previous heading"), r && t.testFailed(r, "tableSemanticsNoCaption", t.classifications.FAILED_LOW_RISK, 50, i)
                                }
                                var u = t.common.getAriaRoleElements("grid", n);
                                if (u.length) {
                                    var d = t.common.getAriaRoleElements("row", u),
                                        m = t.common.getAriaRoleElements("gridcell", u);
                                    return i.nested_row_count = d.length, i.nested_cell_count = m.length, i.row_count - i.nested_row_count > 2 && i.cell_count - i.nested_cell_count > 8 && (i.auto_observation = "fix_at_source"), t.testFailed(this, "tableSemanticsNested", t.classifications.FAILED_LOW_RISK, 90, i)
                                }
                                var f, h, p = !1,
                                    g = !0,
                                    _ = !0,
                                    y = [];
                                return t.common.getContentElements("[headers]", n).each((function() {
                                    var i = e(this),
                                        o = i.attr("headers").split(/\s+/);
                                    !1 === i.is("td") && "gridcell" !== i.attr("role") && "cell" !== i.attr("role") && t.testFailed(i, "tableSemanticsInvalidHeadersReference", t.classifications.FAILED_HIGH_RISK, 100, {
                                        issue_type: "Invalid element role with a 'headers' attribute",
                                        expected_role: "gridcell, cell",
                                        found_role: i.attr("role") || i.prop("nodeName")
                                    }), o.every((function(o) {
                                        var a = t.common.escapeSelectorText(o),
                                            r = t.common.getContentElements("*[id='" + a + "']", n);
                                        if (0 === r.length) return t.testFailed(i, "tableSemanticsInvalidHeadersReference", t.classifications.FAILED_HIGH_RISK, 100, {
                                            issue_type: "Invalid ID in the 'headers' attribute",
                                            id: o
                                        }), !1;
                                        r.each((function() {
                                            var n = e(this);
                                            if (!1 === n.is("th") && "rowheader" !== n.attr("role") && "columnheader" !== n.attr("role")) return t.testFailed(i, "tableSemanticsInvalidHeadersReference", t.classifications.FAILED_HIGH_RISK, 100, {
                                                issue_type: "Invalid element role referenced as table header",
                                                expected_role: "rowheader, columnheader",
                                                found_role: n.attr("role") || n.prop("nodeName")
                                            }), !1
                                        }))
                                    }))
                                })), i.spans = [], t.common.getAriaRoleElements("row", n).each((function() {
                                    var n = this,
                                        o = t.common.getAriaRoleElements("columnheader", n),
                                        a = t.common.getAriaRoleElements("rowheader", n),
                                        r = t.common.getAriaRoleElements("gridcell", n),
                                        s = r.filter((function() {
                                            return "" === e(this).text().trim()
                                        }));
                                    if (o.add(a).filter((function() {
                                            return "" === e(this).text().trim()
                                        })).each((function() {
                                            t.testFailed(this, "tableSemanticsEmptyTH", t.classifications.FAILED_HIGH_RISK, 100)
                                        })), o.length > 0 && 0 === r.not(s).length ? (p = !0, o.each((function() {
                                            var t = e(this).index(),
                                                i = y[t] || {};
                                            i.headers = i.headers || [], i.headers.push(this), y[t] = i
                                        }))) : r.not(s).add(a).each((function() {
                                            var t = e(this).index(),
                                                i = y[t] || {};
                                            i.cells = i.cells || [], i.cells.push(this)
                                        })), g) {
                                        0 === a.length && 1 === o.not("[role], [scope]").length && 0 === o.index() && (a = o);
                                        var l = a.index(); - 1 === (f = f || l) || f !== l ? g = !1 : 0 === r.not(s).length && t.testFailed(a[0], "tableSemanticsLoneHeader", t.classifications.FAILED_LOW_RISK, 75, {
                                            scope: "row"
                                        })
                                    }
                                    if (_) {
                                        var c = r.map((function() {
                                            return {
                                                colspan: parseInt(e(this).attr("colspan"), 10) || 1,
                                                rowspan: parseInt(e(this).attr("rowspan"), 10) || 1
                                            }
                                        })).get();
                                        h && (_ = h.every((function(e, t) {
                                            return c[t] && c[t].colspan && c[t].colspan >= e.colspan
                                        }))), _ = _ && c.every((function(e, t) {
                                            return 0 === t || c[t - 1].rowspan >= e.rowspan
                                        })), h = c, i.spans.push(c)
                                    }
                                })), p || g ? (y.forEach((function(e) {
                                    e.headers && e.headers.length > 0 && (!e.cells || 0 === e.cells.length) && t.testFailed(e.headers[0], "tableSemanticsLoneHeader", t.classifications.FAILED_LOW_RISK, 75, {
                                        scope: "column",
                                        auto_observation: "fix_at_source"
                                    })
                                })), _ ? t.testPassed(this, "tableSemanticsFoundData", t.classifications.VERIFY_LOW_PRIORITY, 75, i) : t.testFailed(this, "tableSemanticsIrregularGrid", t.classifications.FAILED_LOW_RISK, 90, i)) : t.testFailed(this, "tableSemanticsNoTH", t.classifications.FAILED_LOW_RISK, 90, i)
                            })), t.html.find("table").filter("[role=presentation], [role=none]").each((function() {
                                return e(this).find("caption").length > 0 ? t.testFailed(this, "tableSemanticsLayoutCaption", t.classifications.FAILED_LOW_RISK, 90, {
                                    auto_observation: "fix_at_source"
                                }) : e(this).attr("summary") ? t.testFailed(this, "tableSemanticsLayoutSummary", t.classifications.FAILED_LOW_RISK, 90, {
                                    auto_observation: "fix_at_source"
                                }) : void 0
                            }))
                        },
                        htmlDocumentStructure: function(t) {
                            t.common.getContentElements().each((function() {
                                if (-1 !== e(this).html().indexOf("&nbsp;&nbsp;&nbsp;")) return t.testFailed(this, "htmlDocumentStructureWhitespace", t.classifications.FAILED_LOW_RISK, 75, {
                                    auto_observation: "fix_at_source",
                                    auto_observation_record: !1
                                });
                                var i = e(this).text().match(/\b[a-z](?:\s+[a-z]){3,}\b/i);
                                return i && -1 === "abcdefghijklmnopqrstuvwxyz".indexOf(i[0].toLowerCase().replace(/\s/g, "")) ? t.testFailed(this, "htmlDocumentStructureLetterspace", t.classifications.FAILED_LOW_RISK, 75, {
                                    auto_observation: "fix_at_source",
                                    auto_observation_record: !1
                                }) : t.testPassed(this, "htmlDocumentStructureLogical", t.classifications.VERIFY_LOW_PRIORITY, 90)
                            }))
                        },
                        scriptKeyboardEvents: function(t) {
                            var i = Object.keys(t.constants.mouseKeyAssociations),
                                n = i.map((function(e) {
                                    return "[" + e + "]"
                                })).join(", ");
                            t.common.getContentElements(n).each((function() {
                                var n = e(this),
                                    o = [],
                                    a = !0,
                                    r = !1;
                                return i.forEach((function(e) {
                                    if (n.is("[" + e + "]")) {
                                        if ("onclick" === e && n.is("a[href], :button, :image, :submit, :reset, :radio, :checkbox")) return r = !0, o.push({
                                            event: e + '="' + n.attr(e).replace(/'|"/g, "&quot;") + '"',
                                            expected: e,
                                            found: e
                                        }), !0;
                                        var i = t.constants.mouseKeyAssociations[e],
                                            s = "avoid using" !== i && n.is("[" + i + "]");
                                        o.push({
                                            event: e + '="' + n.attr(e).replace(/'|"/g, "&quot;") + '"',
                                            expected: i,
                                            found: s
                                        }), s || (a = !1)
                                    }
                                })), !1 === a ? (o.auto_observation = "fix_at_source", t.testFailed(this, "scriptKeyboardEventsMouseOnly", t.classifications.FAILED_LOW_RISK, 50, o)) : r ? t.testPassed(this, "scriptKeyboardEventsOnClick", t.classifications.VERIFY_LOW_PRIORITY, 90, o) : t.testPassed(this, "scriptKeyboardEventsFound", t.classifications.VERIFY_LOW_PRIORITY, 90, o)
                            }))
                        },
                        scriptKeyboardTrap: function(e) {
                            e.common.getContentElements("script").length && e.testPassed(e.common.getScannedContainer(), "scriptKeyboardTrapReview", e.classifications.VERIFY_HIGH_PRIORITY, 0);
                            var t = Object.keys(e.constants.mouseKeyAssociations).filter((function(t) {
                                return "avoid using" !== e.constants.mouseKeyAssociations[t]
                            })).map((function(t) {
                                return "[" + e.constants.mouseKeyAssociations[t] + "]"
                            })).join(", ");
                            e.common.getContentElements(t).each((function() {
                                e.testPassed(this, "scriptKeyboardTrapReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                            })), e.common.getContentElements("applet, object, embed").each((function() {
                                e.testPassed(this, "scriptKeyboardTrapReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                            }))
                        },
                        scriptExtendTimeLimit: function(e) {
                            e.common.getContentElements("script").length && e.testPassed(e.common.getScannedContainer(), "scriptExtendTimeLimitReview", e.classifications.VERIFY_HIGH_PRIORITY, 0), e.common.getContentElements("applet, object, embed").each((function() {
                                e.testPassed(this, "scriptExtendTimeLimitReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                            }))
                        },
                        scriptPauseUpdates: function(e) {
                            e.common.getContentElements("marquee").each((function() {
                                e.testFailed(this, "scriptPauseUpdatesMarquee", e.classifications.FAILED_HIGH_RISK, 100, {
                                    auto_observation: "fix_at_source"
                                })
                            })), e.common.getContentElements("script").length && e.testPassed(e.common.getScannedContainer(), "scriptPauseUpdatesReview", e.classifications.VERIFY_HIGH_PRIORITY, 0), e.common.getContentElements("applet, object, embed").each((function() {
                                e.testPassed(this, "scriptPauseUpdatesReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                            }))
                        },
                        mediaFlashing: function(e) {
                            e.html.find("script").length && e.testPassed(e.common.getScannedContainer(), "mediaFlashingFoundScript", e.classifications.VERIFY_HIGH_PRIORITY, 0), e.common.getContentElements("blink").each((function() {
                                e.testFailed(this, "mediaFlashingFoundBlink", e.classifications.FAILED_HIGH_RISK, 100, {
                                    auto_observation: "fix_at_source"
                                })
                            })), e.common.getContentElements('img[src$=".gif"]').each((function() {
                                e.testPassed(this, "mediaFlashingFoundGIF", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                            })), e.common.getContentElements("applet").each((function() {
                                e.testPassed(this, "mediaFlashingFoundApplet", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                            })), e.common.getContentElements("object").each((function() {
                                e.testPassed(this, "mediaFlashingFoundObject", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                            })), e.common.getContentElements("embed").not("object embed").each((function() {
                                e.testPassed(this, "mediaFlashingFoundEmbed", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                            }))
                        },
                        htmlSkipToMain: function(t) {
                            if (t.html.is("html")) {
                                var i = {},
                                    o = t.common.getContentElements("a[href^='#']").not("a[href='#']").filter((function() {
                                        var e = t.common.getElementAccessibleName(this) || t.common.getElementText(this, ".ae-new-window");
                                        return null !== e.match(/\bskip\b/i) || null !== e.match(/\bmain\b/i)
                                    }));
                                if (0 !== o.length) {
                                    var a = o.prop("hash");
                                    if (a && (i.anchor_target = a.substr(1).trim()), !i.anchor_target) return t.testPassed(o, "htmlSkipToMainReview", t.classifications.VERIFY_HIGH_PRIORITY, 0);
                                    var r = t.common.escapeSelectorText(i.anchor_target),
                                        s = t.common.getContentElements("a[name='" + r + "']"),
                                        l = t.common.getContentElements("*[id='" + r + "']");
                                    return 0 === s.length && 0 === l.length ? t.testFailed(o, "htmlSkipToMainInvalid", t.classifications.FAILED_LOW_RISK, 75, i) : t.testPassed(t.common.getScannedContainer(), "htmlSkipToMainFound", t.classifications.VERIFY_LOW_PRIORITY, 90, i)
                                }
                                var c, u = e("main, .main, #main, #content, #main_content, *[role=main]");
                                if (u.length > 0 && (u.each((function() {
                                        var n = e(this).attr("id") || e(this).prev("a[name]").attr("name");
                                        if (n && (c = t.common.getContentElements("a[href='#" + t.common.escapeSelectorText(n) + "']")).length) return i.main_anchor = n, !1
                                    })), c && c.length)) return t.testFailed(c, "htmlSkipToMainUnclear", t.classifications.FAILED_LOW_RISK, 75, i);
                                if (e("nav,ol,ul,dl,[role=navigation],iframe,#content,#main,.breadcrumb,#breadcrumb,#menu,.menu,.page,.page-wrapper,#page,#page_wrapper").length > 0) {
                                    var d = !1;
                                    return n.compliance && (d = n.compliance["skipto_main-content-link"]), t.counter > 0 && d ? t.testPassed(t.common.getScannedContainer(), "htmlSkipToMainFound", t.classifications.VERIFY_LOW_PRIORITY, 90, {
                                        fixedBy: "Product Config: Compliance Skip To Main Content Link"
                                    }) : t.testFailed(t.common.getScannedContainer(), "htmlSkipToMainNotFound", t.classifications.FAILED_LOW_RISK, 75)
                                }
                            }
                        },
                        htmlTitle: function(e) {
                            if (e.html.is("html")) {
                                var t = e.html.find("head title");
                                if (0 === t.length) return e.testFailed(e.common.getScannedContainer(), "htmlTitleNotFound", e.classifications.FAILED_HIGH_RISK, 100, {
                                    auto_observation: "fix_at_source"
                                });
                                var i = {};
                                return i.title = t.text(), e.common.isPlaceholderText("title", i.title) ? (i.auto_observation = "fix_at_source", e.testFailed(e.common.getScannedContainer(), "htmlTitlePlaceholder", e.classifications.FAILED_HIGH_RISK, 75, i)) : e.testPassed(e.common.getScannedContainer(), "htmlTitleFound", e.classifications.VERIFY_LOW_PRIORITY, 90, i)
                            }
                        },
                        frameTitle: function(t) {
                            var i = [];
                            t.common.getContentElements("frame, iframe").each((function() {
                                var n = {
                                        source: this.src || !1,
                                        src_attr: e(this).attr("src")
                                    },
                                    o = e(this).attr("title");
                                return o ? (n.title = o.trim(), t.common.isPlaceholderText("title", n.title) ? t.testFailed(this, "frameTitlePlaceholder", t.classifications.FAILED_HIGH_RISK, 75, n) : -1 !== i.indexOf(n.title) ? t.testFailed(this, "frameTitleDuplicate", t.classifications.FAILED_LOW_RISK, 75, n) : (i.push(n.title), t.testPassed(this, "frameTitleFound", t.classifications.VERIFY_LOW_PRIORITY, 75, n))) : t.testFailed(this, "frameTitleNotFound", t.classifications.FAILED_HIGH_RISK, 100, n)
                            }))
                        },
                        linkTextContent: function(t) {
                            t.common.getAriaRoleElements("link").not(":has(img), map area[href], [name]").each((function() {
                                var i = {
                                    title: e(this).attr("title") || "",
                                    inner_text: t.common.getElementAccessibleName(this) || t.common.getElementText(this, ".ae-new-window"),
                                    compliance: e(this).find(".ae-compliance-indent").text().trim()
                                };
                                return i.inner_text ? t.common.isBadLinkText(i.inner_text) ? t.testFailed(this, "linkTextContentNotDescriptive", t.classifications.FAILED_HIGH_RISK, 75, i) : t.common.isRedundant(i.title, i.inner_text) ? t.testFailed(this, "linkTextContentRedundant", t.classifications.FAILED_LOW_RISK, 75, i) : i.inner_text.match(/^link\b/i) || i.inner_text.match(/\blink\W?$/i) ? (i.auto_observation = "fix_at_source", t.testFailed(this, "linkTextContentATRedundancy", t.classifications.FAILED_HIGH_RISK, 100, i)) : t.testPassed(this, "linkTextContentFound", t.classifications.VERIFY_LOW_PRIORITY, 75, i) : t.testFailed(this, "linkTextContentNotFound", t.classifications.FAILED_HIGH_RISK, 100, i)
                            }))
                        },
                        linkImgTextAlt: function(t) {
                            t.common.getAriaRoleElements("link").not("area").has("img").each((function() {
                                var i = e(this),
                                    n = i.find("img"),
                                    o = {
                                        title: i.attr("title") || "",
                                        source: n.prop("src"),
                                        src_attr: n.attr("src"),
                                        srcset: n.attr("srcset") || "",
                                        alt: n.attr("alt"),
                                        extra_text: t.common.getElementText(i, "img, .ae-new-window")
                                    };
                                return void 0 === o.alt ? t.testFailed(this, "linkImgTextAltNotFound", t.classifications.FAILED_HIGH_RISK, 100, o) : o.extra_text + o.alt === "" ? t.testFailed(this, "linkImgTextAltBlank", t.classifications.FAILED_HIGH_RISK, 100, o) : "" !== o.alt && t.common.isPlaceholderText("alt", o.alt) || t.common.isBadLinkText(o.alt + o.extra_text) ? t.testFailed(this, "linkImgTextAltPlaceholder", t.classifications.FAILED_HIGH_RISK, 75, o) : void 0 === o.src_attr || !o.source || o.alt !== o.source && o.alt !== o.source.split("/").pop() ? t.common.isRedundant(o.title, o.extra_text, o.alt) ? t.testFailed(this, "linkImgTextAltRedundant", t.classifications.FAILED_LOW_RISK, 75, o) : o.alt.match(/^link\b/i) || o.alt.match(/\blink\W?$/i) ? (o.auto_observation = "fix_at_source", t.testFailed(this, "linkImgTextAltATRedundancy", t.classifications.FAILED_HIGH_RISK, 100, o)) : t.testPassed(this, "linkImgTextAltFound", t.classifications.VERIFY_LOW_PRIORITY, 75, o) : t.testFailed(this, "linkImgTextAltFileName", t.classifications.FAILED_LOW_RISK, 75, o)
                            })), t.common.getContentElements("map area[href]").each((function() {
                                var i = e(this).closest("map").attr("name");
                                if (i) {
                                    var n = t.common.getElements("img[usemap='#" + t.common.escapeSelectorText(i) + "']");
                                    if (0 !== n.length) {
                                        var o = {
                                            source: n.prop("src"),
                                            src_attr: n.attr("src"),
                                            srcset: n.attr("srcset") || "",
                                            alt: n.attr("alt"),
                                            extra_text: t.common.getElementText(e(this), "img, .ae-new-window")
                                        };
                                        return void 0 === o.alt ? t.testFailed(n, "linkImgTextAltNotFound", t.classifications.FAILED_HIGH_RISK, 100, o) : o.extra_text + o.alt === "" ? t.testFailed(n, "linkImgTextAltBlank", t.classifications.FAILED_HIGH_RISK, 100, o) : "" !== o.alt && t.common.isPlaceholderText("alt", o.alt) || t.common.isBadLinkText(o.alt + o.extra_text) ? t.testFailed(n, "linkImgTextAltPlaceholder", t.classifications.FAILED_HIGH_RISK, 75, o) : void 0 === o.src_attr || !o.source || o.alt !== o.source && o.alt !== o.source.split("/").pop() ? t.common.isRedundant(o.extra_text, o.alt) ? t.testFailed(n, "linkImgTextAltRedundant", t.classifications.FAILED_LOW_RISK, 75, o) : o.alt.match(/^link\b/i) || o.alt.match(/\blink\W?$/i) ? (o.auto_observation = "fix_at_source", t.testFailed(n, "linkImgTextAltATRedundancy", t.classifications.FAILED_HIGH_RISK, 100, o)) : t.testPassed(n, "linkImgTextAltFound", t.classifications.VERIFY_LOW_PRIORITY, 75, o) : t.testFailed(n, "linkImgTextAltFileName", t.classifications.FAILED_LOW_RISK, 75, o)
                                    }
                                }
                            }))
                        },
                        linkDownloadableDocument: function(t) {
                            t.common.getAriaRoleElements("link").each((function() {
                                var i = {
                                    href: e(this).attr("href"),
                                    title: e(this).attr("title") || "",
                                    inner_text: t.common.getElementAccessibleName(this) || t.common.getElementText(this, ".ae-new-window"),
                                    describedby: t.common.dereferenceAria(this, "aria-describedby") || "",
                                    compliance: e(this).find(".ae-compliance-indent").text().trim()
                                };
                                if (i.href) {
                                    var n = u.getFileExtension(i.href);
                                    if (-1 !== t.constants.document_extensions.indexOf(n)) return i.expected = u.getExpectedText(n), i.inner_text.match(/open|download|file/i) && i.inner_text.match(new RegExp(i.expected, "i")) || i.title.match(/open|download|file/i) && i.title.match(new RegExp(i.expected, "i")) || i.describedby.match(/open|download|file/i) && i.describedby.match(new RegExp(i.expected, "i")) ? t.testPassed(this, "linkDownloadableDocumentFound", t.classifications.VERIFY_LOW_PRIORITY, 75, i) : t.testFailed(this, "linkDownloadableDocumentNoWarning", t.classifications.FAILED_LOW_RISK, 75, i)
                                }
                            }))
                        },
                        formContextChange: function(t) {
                            t.common.getContentElements("form").each((function() {
                                if (e(this).find("input:submit, button:submit, input:image").length > 0) return t.testPassed(this, "formContextChangeSubmitButton", t.classifications.VERIFY_LOW_PRIORITY, 75);
                                e(this).find("select, input").filter("[onchange], [oninput]").each((function() {
                                    return t.testPassed(this, "formContextChangeReview", t.classifications.VERIFY_HIGH_PRIORITY, 0)
                                }))
                            }))
                        },
                        formFieldGroup: function(t) {
                            var i = {},
                                n = {};
                            t.common.getContentElements("input").filter(":radio, :checkbox").each((function() {
                                var t = e(this).attr("name");
                                t && (i[t] = i[t] || [], i[t].push(this), n[t] = n[t] || e(this).attr("type") || "checkbox")
                            })), Object.keys(i).forEach((function(o) {
                                var a = e(i[o]),
                                    r = {
                                        group_name: o,
                                        group_size: a.length,
                                        group_type: n[o]
                                    };
                                if (r.group_size > 1) {
                                    var s = "formFieldGroup" + (r.group_type.substr(0, 1).toUpperCase() + r.group_type.substr(1).toLowerCase()) + "Group";
                                    return r.has_fieldset = a.parents("fieldset").length > 0, r.describedby = [], a.each((function() {
                                        var e = t.common.dereferenceAria(this, "aria-describedby");
                                        return e ? (-1 === r.describedby.indexOf(e) && r.describedby.push(e), !0) : (r.describedby = !1, !1)
                                    })), r.has_fieldset || r.describedby ? t.testPassed(a, s + "Found", t.classifications.VERIFY_LOW_PRIORITY, 90, r) : t.testFailed(a, s + "NotFound", t.classifications.FAILED_LOW_RISK, 50, r)
                                }
                            }))
                        },
                        formFieldLabel: function(t) {
                            t.common.getContentElements("input, select, textarea").each((function() {
                                var i = e(this).attr("type");
                                if (i && (i = i.toLowerCase()), -1 === t.constants.ignored_input_types.indexOf(i)) {
                                    var n = t.common.getElementAccessibleName(this);
                                    if (!1 === n) {
                                        var o = e(this).attr("title");
                                        if (o) return t.testFailed(this, "formFieldLabelOnlyTitle", t.classifications.FAILED_LOW_RISK, 75, {
                                            field_title: o
                                        });
                                        if (e(this).attr("aria-describedby")) return t.testFailed(this, "formFieldLabelAriaDescribedBy", t.classifications.FAILED_HIGH_RISK, 100, {
                                            describedby: t.common.dereferenceAria(this, "aria-describedby")
                                        });
                                        var a = e(this).attr("placeholder");
                                        return a ? t.testFailed(this, "formFieldLabelOnlyPlaceholderAttribute", t.classifications.FAILED_LOW_RISK, 100, {
                                            field_placeholder: a
                                        }) : t.testFailed(this, "formFieldLabelNotFound", t.classifications.FAILED_HIGH_RISK, 100)
                                    }
                                    if ("" === n) return t.testFailed(this, "formFieldLabelEmpty", t.classifications.FAILED_HIGH_RISK, 75);
                                    var r = {
                                        label_text: n
                                    };
                                    if (t.common.isPlaceholderText("label", n)) return t.testFailed(this, "formFieldLabelPlaceholder", t.classifications.FAILED_HIGH_RISK, 75, r);
                                    var s = e(this).parents("label"),
                                        l = e(this).attr("id");
                                    if (s.length > 0) {
                                        var c = s.attr("for");
                                        if (c && l && c.trim().toLowerCase() !== l.trim().toLowerCase()) {
                                            var u = {
                                                label_for: c,
                                                input_id: l
                                            };
                                            return c = t.common.escapeSelectorText(c), t.common.getElements("*[id='" + c + "']").filter("input, select, textarea").length > 0 ? (u.auto_observation = "fix_at_source", u.observation_notes = "If there is a distinct need for this arrangement of label, then it can be justified within our verification system. Note that other vendors' scanning software may still mark this arrangement as a risk, but that justification can provide additional context. Otherwise, consider fixing the label reference.") : (u.auto_observation = "verified", u.observation_notes = "Since the label element's 'for' attribute does not point to another input, there should not be any ambiguity about which element this label is for. Note that other vendors' scanning systems may still identify this as a risk, so consider removing this reference"), t.testFailed(this, "formFieldLabelSuspicious", t.classifications.FAILED_LOW_RISK, 50, u)
                                        }
                                    }
                                    l && "" !== l.trim() && (l = t.common.escapeSelectorText(l), s = s.add(t.common.getContentElements("label[for='" + l + "']")));
                                    var d = e(this).attr("aria-labelledby");
                                    return d && "" !== d.trim() && (d = t.common.escapeSelectorText(d), s = s.add(t.common.getElements("*[id='" + d + "']"))), s.length > 1 ? t.testFailed(this, "formFieldLabelMultiple", t.classifications.FAILED_HIGH_RISK, 100, {
                                        auto_observation: "fix_at_source"
                                    }) : t.testPassed(this, "formFieldLabelFound", t.classifications.VERIFY_LOW_PRIORITY, 75, r)
                                }
                            })), t.common.getElements("label").each((function() {
                                var i = e(this).attr("for") || "",
                                    n = {},
                                    o = e(this).attr("role");
                                return o && (n.role = o, n.auto_observation = "verified"), "" === i.trim() ? 0 === e(this).find("input, textarea, select").length ? (n.role && (n.observation_notes = "The LABEL element has a ROLE of " + n.role + ", and so an Assistive Technology will not read it as a form label. Note that other vendors' scanning software may not consider the ROLE when marking the orphaned label as a risk, so consider using a different element instead."), t.testFailed(this, "formFieldLabelOrphan", t.classifications.FAILED_LOW_RISK, 75, n)) : void 0 : (n.label_for = i, 0 === t.common.getContentElements("*[id='" + t.common.escapeSelectorText(i) + "']").length ? (n.role && (n.observation_notes = "The LABEL element has a ROLE of " + n.role + ", and so the invalid FOR attribute should not impact how an Assistive Technology reads it. Note that other vendors' scanning software may not consider the ROLE when marking the invalid FOR as a risk, so consider fixing the reference if possible or removing it."), t.testFailed(this, "formFieldLabelOrphan", t.classifications.FAILED_LOW_RISK, 75, n)) : void 0)
                            }))
                        },
                        htmlLandmarks: function(t) {
                            if (t.html.is("html")) {
                                var i = [],
                                    n = {},
                                    o = t.common.getAriaRoleElements("banner");
                                o.length > 1 ? t.testFailed(o[1], "htmlLandmarksMultipleBanners", t.classifications.FAILED_HIGH_RISK, 100) : n.banner = o, o.each((function() {
                                    i.push(this)
                                }));
                                var a = t.common.getAriaRoleElements("contentinfo");
                                a.length > 1 ? t.testFailed(a[1], "htmlLandmarksMultipleContentinfo", t.classifications.FAILED_HIGH_RISK, 100) : n.contentinfo = a, a.each((function() {
                                    i.push(this)
                                }));
                                var r = t.common.getAriaRoleElements("main");
                                r.length > 1 ? t.testFailed(r[1], "htmlLandmarksMultipleMains", t.classifications.FAILED_HIGH_RISK, 100) : r.length > 0 && (n.main = r), r.each((function() {
                                    i.push(this)
                                }));
                                var s = t.common.getAriaRoleElements("navigation"),
                                    l = [];
                                s.each((function() {
                                    var e = t.common.getElementAccessibleName(this) || "unlabeled";
                                    if (-1 !== l.indexOf(e)) return t.testFailed(this, "htmlLandmarksMultipleNavs", t.classifications.FAILED_LOW_RISK, 75, {
                                        label: e
                                    });
                                    l.push(e), i.push(this), t.testPassed(this, "htmlLandmarksFound", t.classifications.VERIFY_LOW_PRIORITY, 75, {
                                        role: "navigation",
                                        label: e
                                    })
                                }));
                                var c = t.common.getAriaRoleElements("complementary");
                                n.asides = [];
                                var u = [];
                                if (c.each((function() {
                                        var e = t.common.getElementAccessibleName(this) || "unlabeled";
                                        if (-1 !== u.indexOf(e)) return t.testFailed(this, "htmlLandmarksMultipleComplementary", t.classifications.FAILED_LOW_RISK, 75, {
                                            label: e
                                        });
                                        n.asides.push(this), u.push(e), i.push(this)
                                    })), 0 === i.length) return t.testFailed(t.common.getScannedContainer(), "htmlLandmarksNotFound", t.classifications.FAILED_LOW_RISK, 75, {
                                    auto_observation: "fix_at_source"
                                });
                                t.common.getContentElements("form, article, section[aria-label], section[aria-labelledby], section[title]").each((function() {
                                    i.push(this), e(this).is("form[role='search']") && t.testPassed(this, "htmlLandmarksFound", t.classifications.VERIFY_LOW_PRIORITY, 75, {
                                        role: "search",
                                        label: t.common.getElementAccessibleName(this)
                                    })
                                })), Object.keys(n).forEach((function(o) {
                                    e(n[o]).each((function() {
                                        var n = {
                                            role: o,
                                            label: t.common.getElementAccessibleName(this)
                                        };
                                        return e(i).find(this).length > 0 ? (n.auto_observation = "fix_at_source", t.testFailed(this, "htmlLandmarksNested", t.classifications.FAILED_HIGH_RISK, 100, n)) : t.testPassed(this, "htmlLandmarksFound", t.classifications.VERIFY_LOW_PRIORITY, 75, n)
                                    }))
                                }))
                            }
                        },
                        linkSamePageNotButton: function(e) {
                            e.common.getContentElementsNative("a").forEach((function(t) {
                                let i = {};
                                if (i.label = t.innerText.trim(), "button" === t.getAttribute("role")) return e.testPassed(t, "linkSamePageOrButtonIsValidSamePageLink", e.classifications.VERIFY_LOW_PRIORITY, 75, i); {
                                    const n = t.getAttribute("href");
                                    if (null === n || "" === n) return e.testFailed(t, "linkSamePageOrButtonShouldBeButton", e.classifications.FAILED_LOW_RISK, 75, i);
                                    const o = /^#([^\/]|$)/;
                                    return 0 === n.search(o) ? e.testPassed(t, "linkSamePageOrButtonIsValidSamePageLink", e.classifications.VERIFY_LOW_PRIORITY, 75, i) : n.startsWith("javascript:") ? e.testFailed(t, "linkSamePageOrButtonShouldBeButton", e.classifications.FAILED_LOW_RISK, 75, i) : e.testPassed(t, "linkSamePageOrButtonIsValidLink", e.classifications.VERIFY_LOW_PRIORITY, 75, i)
                                }
                            }))
                        },
                        linkSamePageAnchor: function(e) {
                            e.common.getAriaRoleElements("link").filter("[href^='#']").not("[href='#']").each((function() {
                                var t = {},
                                    i = this.hash;
                                if (void 0 !== i && (t.anchor_target = i.substr(1).trim()), t.anchor_target) {
                                    var n = e.common.escapeSelectorText(t.anchor_target),
                                        o = e.common.getContentElements("a[name='" + n + "']"),
                                        a = e.common.getContentElements("*[id='" + n + "']");
                                    return 0 === o.length && 0 === a.length ? e.testFailed(this, "linkSamePageAnchorInvalid", e.classifications.FAILED_LOW_RISK, 75, t) : e.testPassed(this, "linkSamePageAnchorFound", e.classifications.VERIFY_LOW_PRIORITY, 75, t)
                                }
                            }))
                        },
                        buttonTextContent: function(t) {
                            t.common.getAriaRoleElements("button").each((function() {
                                var i = t.common.getElementAccessibleName(this) || t.common.getElementText(this, ".ae-new-window");
                                if (!i) return t.testFailed(this, "buttonTextContentNotFound", t.classifications.FAILED_HIGH_RISK, 100);
                                var n = {
                                    button_text: i
                                };
                                return -1 !== t.constants.bad_button_text.indexOf(i) ? t.testFailed(this, "buttonTextContentNotDescriptive", t.classifications.FAILED_HIGH_RISK, 100, n) : (n.title = e(this).attr("title"), t.common.isRedundant(n.title, n.button_text) ? (n.auto_observation = "fix_at_source", t.testFailed(this, "buttonTextContentRedundant", t.classifications.FAILED_LOW_RISK, 75, n)) : n.button_text.match(/^button\b/i) || n.button_text.match(/\bbutton\W?$/i) ? (n.auto_observation = "fix_at_source", t.testFailed(this, "buttonTextContentATRedundancy", t.classifications.FAILED_HIGH_RISK, 100, n)) : t.testPassed(this, "buttonTextContentFound", t.classifications.VERIFY_LOW_PRIORITY, 75, n))
                            }))
                        },
                        buttonAccessKey: function(t) {
                            var i = [],
                                n = {};
                            t.common.getContentElements("[accesskey]").each((function() {
                                var o = e(this).attr("accesskey");
                                return 1 !== o.length ? (o.split(/\s+/).forEach((function(e) {
                                    1 === e.length && -1 === i.indexOf(e) && i.push(e), n[e] && (n[e] = null)
                                })), t.testFailed(this, "buttonAccessKeyInvalid", t.classifications.FAILED_LOW_RISK, 75, {
                                    accesskey: o
                                })) : -1 !== i.indexOf(o) ? (n[o] && (n[o] = null), t.testFailed(this, "buttonAccessKeyDuplicate", t.classifications.FAILED_HIGH_RISK, 100, {
                                    accesskey: o
                                })) : (n[o] = this, void i.push(o))
                            })), Object.keys(n).forEach((function(e) {
                                n[e] && t.testPassed(n[e], "buttonAccessKeyUnique", t.classifications.VERIFY_LOW_PRIORITY, 75, {
                                    accesskey: e
                                })
                            }))
                        }
                    }, i.test_groups = {
                        wcagSingleA: Object.keys(i.tests)
                    }, i
                }
            },
            5940: function(e, t) {
                "use strict";
                t.Z = [{
                    testGroup: "section508",
                    testName: "mediaLiveCaptions",
                    test: function(e) {
                        e.common.getAriaRoleElements("link").each((function() {
                            this.href && e.common.isMediaLink(this.href) && e.testPassed(this, "mediaLiveCaptionsReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        }))
                    }
                }, {
                    testGroup: "section508",
                    testName: "videoDescriptionTrack",
                    test: function(e) {
                        e.common.getContentElements("a[href], iframe[src]").each((function() {
                            var t = window.ae_jQuery(this).attr("href") || window.ae_jQuery(this).attr("src") || "";
                            (t.match(/(youtu\.be)|(youtube(-nocookie)?\.com)/) || t.match(/vimeo\.com/)) && e.testPassed(this, "videoDescriptionTrackReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        })), e.common.getContentElements("video").each((function() {
                            e.testPassed(this, "videoDescriptionTrackReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        }))
                    }
                }, {
                    testGroup: "section508",
                    testName: "formFieldRequiredIndicator",
                    test: function(e) {
                        var t = e.constants.requiredSelectors.join(", ");
                        e.common.getContentElements("input, select, textarea").filter(t).each((function() {
                            var t = {},
                                i = e.common.getElementLabel(this);
                            if (i ? t.label = i.text().toLowerCase().trim() : window.ae_jQuery(this).attr("aria-labelledby") && (t.label = e.common.dereferenceAria(this, "aria-labelledby")), t.label) return -1 !== t.label.indexOf("*") ? window.ae_jQuery(this).closest("form").contents().each((function() {
                                var e = window.ae_jQuery(this).text();
                                if (e.match(/\*|asterisk|star/i) && e.match(/required/i)) return t.marker_found = "*", !1
                            })) : e.constants.required.some((function(e) {
                                if (-1 !== t.label.indexOf(e)) return t.marker_found = e, !0
                            })), t.marker_found ? e.testPassed(this, "formFieldRequiredIndicatorFound", e.classifications.VERIFY_LOW_PRIORITY, 90, t) : (t.auto_observation = "fix_at_source", e.testFailed(this, "formFieldRequiredIndicatorNotFound", e.classifications.FAILED_LOW_RISK, 50, t))
                        }))
                    }
                }, {
                    testGroup: "section508",
                    testName: "fieldRequiredSelector",
                    test: function(e) {
                        e.common.getContentElements("input, select, textarea").not("[required], [aria-required=true]").each((function() {
                            var t = {};
                            if (t.label = e.common.getElementAccessibleName(this), t.label) return e.constants.required.some((function(i) {
                                if (new RegExp("\\b" + e.common.escapeRegExp(i) + "\\b", "i").test(t.label)) return t.marker_found = i, !0
                            })), t.marker_found ? e.testFailed(this, "fieldRequiredSelectorNeeded", e.classifications.FAILED_LOW_RISK, 75, t) : e.testPassed(this, "fieldRequiredSelectorNotNeeded", e.classifications.VERIFY_LOW_PRIORITY, 75, t)
                        }))
                    }
                }, {
                    testGroup: "section508",
                    testName: "fieldsetLegend",
                    test: function(e) {
                        e.common.getContentElements("fieldset:has(legend)").each((function() {
                            if (!window.ae_jQuery(this).find("legend").is("[role=presentation], [role=none], [aria-hidden=true]")) {
                                var t = {
                                    legend_text: window.ae_jQuery(this).find("legend").eq(0).text().trim()
                                };
                                return "" === t.legend_text ? e.testFailed(this, "fieldsetLegendEmpty", e.classifications.FAILED_HIGH_RISK, 100) : e.common.isPlaceholderText("legend", t.legend_text) ? e.testFailed(this, "fieldsetLegendPlaceholder", e.classifications.FAILED_HIGH_RISK, 75, t) : e.testPassed(this, "fieldsetLegendFound", e.classifications.VERIFY_LOW_PRIORITY, 75, t)
                            }
                        }))
                    }
                }, {
                    testGroup: "section508",
                    testName: "selectOptgroup",
                    test: function(e) {
                        e.common.getContentElements("select").each((function() {
                            var t = window.ae_jQuery(this);
                            if (!t.is("[role=presentation], [role=none], [aria-hidden=true]")) {
                                if (t.find("optgroup").length > 0) return e.testPassed(this, "selectOptgroupFound", e.classifications.VERIFY_LOW_PRIORITY, 75);
                                var i = t.find("option"),
                                    n = {
                                        option_count: i.length,
                                        select_name: t.attr("name") || "",
                                        select_id: t.attr("id") || ""
                                    };
                                if (n.option_count > 40) {
                                    var o = e.constants.optgroup_name_excludes.some((function(e) {
                                        return -1 !== n.select_id.toLowerCase().indexOf(e) || -1 !== n.select_name.toLowerCase().indexOf(e)
                                    }));
                                    if (!o) {
                                        var a = [];
                                        i.each((function() {
                                            var e = window.ae_jQuery(this).attr("value");
                                            e && a.push(e.trim().toLowerCase());
                                            var t = window.ae_jQuery(this).text().trim().toLowerCase();
                                            t && a.push(t)
                                        }));
                                        var r = /^\$?[\d.,]+%?$/;
                                        n.is_number_list = a.every((function(e) {
                                            return r.test(e)
                                        })), o = n.is_number_list || e.constants.optgroup_option_excludes.some((function(e) {
                                            if (e.every((function(e) {
                                                    return -1 !== a.indexOf(e.toLowerCase())
                                                }))) return n.options_matched = e.join(", "), !0
                                        }))
                                    }
                                    if (!o) return e.testFailed(this, "selectOptgroupNotFound", e.classifications.FAILED_LOW_RISK, 75, n)
                                }
                            }
                        }))
                    }
                }, {
                    testGroup: "section508",
                    testName: "formErrorPrevention",
                    test: function(e) {
                        e.common.getContentElements("form").each((function() {
                            return e.testPassed(this, "formErrorPreventionReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        }))
                    }
                }]
            },
            3580: function(e, t) {
                "use strict";
                t.Z = [{
                    testGroup: "wcag21DoubleA",
                    testName: "formFieldMetadata",
                    test: function(e) {
                        e.common.getContentElements("input, textarea, select").each((function() {
                            var t;
                            t = (t = window.ae_jQuery(this).is("input") ? window.ae_jQuery(this).attr("type") || "text" : this.nodeName).toLowerCase();
                            var i = window.ae_jQuery(this).attr("autocomplete");
                            i = i ? i.split(" ") : [];
                            var n = {};
                            if (n.type = t, n.autocomplete = i, -1 !== i.indexOf("off") || -1 !== i.indexOf("on")) return "hidden" === t ? e.testFailed(this, "formFieldMetadataBadAnchor", e.classifications.FAILED_HIGH_RISK, 100, n) : i.length > 1 ? e.testFailed(this, "formFieldMetadataBadExpectation", e.classifications.FAILED_HIGH_RISK, 100, n) : e.testPassed(this, "formFieldMetadataReviewExpectation", e.classifications.VERIFY_HIGH_PRIORITY, 0, n);
                            if (i.length) {
                                var o = i.shift();
                                if ("section-" === o.substr(0, 8) && (n.section = o, o = i.shift()), "shipping" !== o && "billing" !== o || (n.address_type = o, o = i.shift()), -1 !== ["home", "work", "mobile", "fax", "pager"].indexOf(o) && (n.locational_data = o, o = i.shift()), n.field_name = o, i.length && (n.unordered_tokens = i.join(" ")), n.unordered_tokens) return e.testFailed(this, "formFieldMetadataInvalidTokenOrder", e.classifications.FAILED_HIGH_RISK, 100, n);
                                var a = e.constants.autocomplete_field_names[n.field_name];
                                if (!a) return e.testFailed(this, "formFieldMetadataInvalidFieldName", e.classifications.FAILED_HIGH_RISK, 100, n);
                                if (n.locational_data && !a.locational) return e.testFailed(this, "formFieldMetadataInvalidTokenValue", e.classifications.FAILED_HIGH_RISK, 100, n);
                                var r = !1;
                                return a.type !== t && (n.expected_control = a.type, n.field_type = t, "textarea" === a.type && "hidden" !== t && "select" !== t && (r = !0), -1 === ["text", "search", "hidden", "select", "textarea"].indexOf(t) && (r = !0)), r ? e.testFailed(this, "formFieldMetadataInvalidFieldType", e.classifications.FAILED_HIGH_RISK, 100, n) : e.testPassed(this, "formFieldMetadataValidAutocomplete", e.classifications.VERIFY_LOW_PRIORITY, 75, n)
                            }
                            if ("hidden" !== t) {
                                n.field_name = window.ae_jQuery(this).attr("name");
                                var s = Object.keys(e.constants.autocomplete_field_names).some((function(t) {
                                    var i = e.constants.autocomplete_field_names[t],
                                        o = [];
                                    if (i.fields.forEach((function(e) {
                                            e.match(/\s/) ? (o.push(e.replace(/\s/g, "")), o.push(e.replace(/\s/g, "-")), o.push(e.replace(/\s/g, "_"))) : o.push(e)
                                        })), -1 !== o.indexOf(n.field_name)) {
                                        n.suggested_autocomplete = "";
                                        var a = n.field_name.match(/shipping|billing/i);
                                        a && (n.suggested_autocomplete += a[0] + " ");
                                        var r = n.field_name.match(/home|work|mobile|fax|pager/i);
                                        return r ? n.suggested_autocomplete += r[0] + " " : -1 !== n.field_name.indexOf("cell") ? n.suggested_autocomplete += "mobile " : -1 !== n.field_name.indexOf("office") && (n.suggested_autocomplete += "work "), n.suggested_autocomplete += t, !0
                                    }
                                }));
                                return s ? e.testFailed(this, "formFieldMetadataNotFound", e.classifications.FAILED_LOW_RISK, 75, n) : e.testPassed(this, "formFieldMetadataReview", e.classifications.VERIFY_HIGH_PRIORITY, 0, n)
                            }
                        }))
                    }
                }, {
                    testGroup: "wcag21DoubleA",
                    testName: "htmlContentZoom",
                    test: function(e) {
                        var t = e.html.attr("style"),
                            i = window.ae_jQuery(),
                            n = e.html.outerHeight(),
                            o = e.html.outerWidth();
                        [2, 3, 4].forEach((function(t) {
                            e.html[0].style.width = Math.floor(100 / t) + "%", e.html[0].style.transform = "scale(" + t + ")", e.html[0].style.transformOrigin = "0 0";
                            var a = [],
                                r = !1;
                            window.ae_jQuery(e.common.getContentElementsNative(e.constants.tabbable)).not(i).each((function() {
                                var n = this.getBoundingClientRect(),
                                    o = {
                                        north: n.top,
                                        south: n.top + n.height,
                                        west: n.left,
                                        east: n.left + n.width
                                    };
                                if (a.length && (r = a.some((function(e) {
                                        return o.west < e.east && o.east > e.west && o.north < e.south && o.south > e.north
                                    }))), r) return i = i.add(this), e.testFailed(this, "htmlContentZoomCollision", e.classifications.FAILED_HIGH_RISK, 100, {
                                    scale: t,
                                    auto_observation: "fix_at_source"
                                }), !1;
                                a.push(o)
                            })), window.ae_jQuery(e.common.getContentElementsNative()).not(i).each((function() {
                                var a = this.getBoundingClientRect(),
                                    r = this.offsetHeight * t,
                                    s = this.offsetWidth * t;
                                a.top + r > n && a.left + s > o && (i = i.add(this), e.testFailed(this, "htmlContentZoomTwoAxisScroll", e.classifications.FAILED_LOW_RISK, 75, {
                                    scale: t,
                                    auto_observation: "fix_at_source"
                                }))
                            }))
                        })), e.html.attr("style", t || ""), e.common.getContentElements().not(i).each((function() {
                            e.testPassed(this, "htmlContentZoomReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        }))
                    }
                }, {
                    testGroup: "wcag21DoubleA",
                    testName: "cssComponentContrast",
                    test: function(e) {
                        e.common.getContentElements("a, input, select, button, [role='button'], [tabindex]").not("[tabindex='-1']").each((function() {
                            var t = {
                                text_color: getComputedStyle(this).color,
                                font_size: parseInt(getComputedStyle(this).fontSize, 10),
                                font_weight: getComputedStyle(this).fontWeight,
                                border_color: getComputedStyle(this).borderColor,
                                border_width: parseInt(getComputedStyle(this).borderWidth, 10) || 0
                            };
                            "rgba(0, 0, 0, 0)" !== getComputedStyle(this).backgroundColor && "transparent" !== getComputedStyle(this).backgroundColor && (t.background_color = getComputedStyle(this).backgroundColor);
                            for (var i = this.parentNode; i.length > 0;) {
                                if ("rgba(0, 0, 0, 0)" !== getComputedStyle(i).backgroundColor && "transparent" !== getComputedStyle(i).backgroundColor) {
                                    t.surrounding_color = getComputedStyle(i).backgroundColor;
                                    break
                                }
                                if ("HTML" === i.nodeName) break;
                                i = i.parentNode
                            }
                            if (i.length > 0) {
                                t.surrounding_element = i.nodeName.toLowerCase();
                                var n = i.getAttribute("id"),
                                    o = i.getAttribute("class");
                                if (n || o) n && (t.surrounding_element += "#" + n), o && (t.surrounding_element += "." + o.replace(/\s+/g, "."));
                                else {
                                    var a = i.closest("[id]:not([id='']), [class]:not([class=''])");
                                    a && (n = a.getAttribute("id"), o = a.getAttribute("class"), n ? t.surrounding_element = a.nodeName.toLowerCase() + "#" + n + " " + t.surrounding_element : o && (t.surrounding_element = a.nodeName.toLowerCase() + "." + o.replace(/\s+/g, ".") + " " + t.surrounding_element))
                                }
                            }
                            if ((t.background_color || t.surrounding_color) && (t.text_contrast = e.common.getColorContrast(t.text_color, t.background_color || t.surrounding_color), t.font_size >= 22 || t.font_size >= 18 && "bold" === t.font_weight ? t.min_text_contrast = 3 : t.min_text_contrast = 4.5, t.text_contrast < t.min_text_contrast)) return t.auto_observation = "fix_at_source", t.auto_observation_record = !1, e.testFailed(this, "cssComponentContrastTooLow", e.classifications.FAILED_LOW_RISK, 90, t);
                            if (t.border_width > 0) {
                                var r = 0;
                                if (t.background_color && (t.border_background_contrast = e.common.getColorContrast(t.border_color, t.background_color), r = Math.max(r, t.border_background_contrast)), t.surrounding_color && (t.border_surrounding_contrast = e.common.getColorContrast(t.border_color, t.surrounding_color), r = Math.max(r, t.border_surrounding_contrast)), t.border_width >= 3 ? t.min_border_contrast = 3 : t.min_border_contrast = 4.5, r < t.min_border_contrast) return t.auto_observation = "fix_at_source", t.auto_observation_record = !1, e.testFailed(this, "cssComponentContrastTooLow", e.classifications.FAILED_LOW_RISK, 90, t)
                            } else if (t.background_color && t.surrounding_color && (t.background_surrounding_contrast = e.common.getColorContrast(t.background_color, t.surrounding_color), t.thickness = Math.max(this.offsetHeight, this.offsetWidth), t.thickness >= 3 ? t.min_surrounding_contrast = 3 : t.min_surrounding_contrast = 4.5, t.background_surrounding_contrast < t.min_surrounding_contrast)) return t.auto_observation = "fix_at_source", t.auto_observation_record = !1, e.testFailed(this, "cssComponentContrastTooLow", e.classifications.FAILED_LOW_RISK, 90, t);
                            return e.testPassed(this, "cssComponentContrastSufficient", e.classifications.VERIFY_LOW_PRIORITY, 90, t)
                        }))
                    }
                }, {
                    testGroup: "wcag21DoubleA",
                    testName: "htmlHoverVisibility",
                    test: function(e) {
                        var t = e.common.getContentElements().filter(":hidden");
                        e.common.getContentElements(e.constants.tabbable).each((function() {
                            var i = window.ae_jQuery(this),
                                n = t.filter(":visible");
                            if (n.length) {
                                var o = !1,
                                    a = !1,
                                    r = window.ae_jQuery(this).offset(),
                                    s = {
                                        north: r.top,
                                        south: r.top + window.ae_jQuery(this).height(),
                                        west: r.left,
                                        east: r.left + window.ae_jQuery(this).width()
                                    };
                                if (n.each((function() {
                                        window.ae_jQuery(this).find(e.constants.tabbable).length && window.ae_jQuery(this).is(":hidden") && (e.testFailed(i, "htmlHoverVisibilityCannotFocus", e.classifications.FAILED_LOW_RISK, 75), a = !0);
                                        var t = window.ae_jQuery(this).offset(),
                                            n = t.top,
                                            r = t.top + window.ae_jQuery(this).height(),
                                            l = t.left,
                                            c = t.left + window.ae_jQuery(this).width();
                                        if (l < s.east && c > s.west && n < s.south && r > s.north) return o = window.ae_jQuery(this), !1
                                    })), o) return e.testFailed(o, "htmlHoverVisibilityOverlap", e.classifications.FAILED_LOW_RISK, 75);
                                a || n.each((function() {
                                    e.testPassed(this, "htmlHoverVisibilityReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                                }))
                            }
                        }))
                    }
                }, {
                    testGroup: "wcag21DoubleA",
                    testName: "scriptAnimation",
                    test: function(e) {
                        e.common.getContentElements("script").length && e.testPassed(e.common.getScannedContainer(), "scriptAnimationReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                    }
                }, {
                    testGroup: "wcag21DoubleA",
                    testName: "scriptInputMechanisms",
                    test: function(e) {
                        e.common.getContentElements("script").length && e.testPassed(e.common.getScannedContainer(), "scriptInputMechanismsReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                    }
                }, {
                    testGroup: "wcag21DoubleA",
                    testName: "scriptDeviceOrientationLock",
                    test: function(e) {
                        var t = !1,
                            i = !1,
                            n = e.html.prop("ownerDocument").styleSheets;
                        [].slice.call(n).forEach((function(e) {
                            e.media && (e.media.mediaText.match(/orientation:\s*landscape/) && (t = !0), e.media.mediaText.match(/orientation:\s*portrait/) && (i = !0));
                            try {
                                [].slice.call(e.rules).forEach((function(e) {
                                    e instanceof CSSMediaRule && e.conditionText && (e.conditionText.match(/orientation:\s*landscape/) && (t = !0), e.conditionText.match(/orientation:\s*portrait/) && (i = !0))
                                }))
                            } catch (e) {
                                window.ae_jQuery.noop()
                            }
                        })), t && !i || !t && i ? e.testFailed(e.common.getScannedContainer(), "scriptDeviceOrientationLockMediaQueries", e.classifications.FAILED_LOW_RISK, 75, {
                            auto_observation: "fix_at_source"
                        }) : e.common.getContentElements("script").length && e.testPassed(e.common.getScannedContainer(), "scriptDeviceOrientationLockReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                    }
                }]
            },
            4888: function(e, t) {
                "use strict";
                t.Z = [{
                    testGroup: "wcag21SingleA",
                    testName: "scriptCharacterKey",
                    test: function(e) {
                        e.html.find("script").length && e.testPassed(e.common.getScannedContainer(), "scriptCharacterKeyReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                    }
                }, {
                    testGroup: "wcag21SingleA",
                    testName: "scriptPointerGesture",
                    test: function(e) {
                        e.html.find("script").length && e.testPassed(e.common.getScannedContainer(), "scriptPointerGestureReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                    }
                }, {
                    testGroup: "wcag21SingleA",
                    testName: "htmlAccessibleName",
                    test: function(e) {
                        e.common.getContentElements("[aria-label]").each((function() {
                            var t = {
                                label: window.ae_jQuery(this).attr("aria-label"),
                                element_text: e.common.getElementText(this)
                            };
                            if (t.element_text) {
                                if (-1 === t.element_text.indexOf(t.label)) return e.testFailed(this, "htmlAccessibleNameMismatch", e.classifications.FAILED_LOW_RISK, 90, t);
                                e.testPassed(this, "htmlAccessibleNameMatches", e.classifications.VERIFY_LOW_PRIORITY, 90)
                            }
                        }))
                    }
                }, {
                    testGroup: "wcag21SingleA",
                    testName: "scriptDeviceSensor",
                    test: function(e) {
                        e.html.find("script").length && e.testPassed(e.common.getScannedContainer(), "scriptDeviceSensorReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                    }
                }, {
                    testGroup: "wcag21SingleA",
                    testName: "scriptAvoidAccidental",
                    test: function(e) {
                        e.common.getContentElements("[onmousedown]").each((function() {
                            window.ae_jQuery(this).is("[onmouseup]") ? e.testPassed(this, "scriptAvoidAccidentalUpEvent", e.classifications.VERIFY_HIGH_PRIORITY) : e.testFailed(this, "scriptAvoidAccidentalDownEvent", e.classifications.FAILED_LOW_RISK, 90)
                        })), e.common.getContentElements("[ontouchstart]").each((function() {
                            window.ae_jQuery(this).is("[ontouchend]") ? e.testPassed(this, "scriptAvoidAccidentalUpEvent", e.classifications.VERIFY_HIGH_PRIORITY) : e.testFailed(this, "scriptAvoidAccidentalDownEvent", e.classifications.FAILED_LOW_RISK, 90)
                        }))
                    }
                }]
            },
            6904: function(e, t) {
                "use strict";
                t.Z = [{
                    testGroup: "wcagDoubleA",
                    testName: "htmlColorCues",
                    test: function(e) {
                        e.common.getAriaRoleElements("link").each((function() {
                            var t = window.ae_jQuery(this),
                                i = t.parent();
                            t.css("text-decoration") === i.css("text-decoration") && t.css("font-size") === i.css("font-size") && t.css("font-face") === i.css("font-face") && t.css("font-weight") === i.css("font-weight") && e.testFailed(t, "htmlColorCuesLinkNoDecoration", e.classifications.FAILED_LOW_RISK, 75, {
                                auto_observation: "fix_at_source",
                                auto_observation_record: !1
                            })
                        })), e.testPassed(e.common.getScannedContainer(), "htmlColorCuesReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "interactiveElementKeyboardActivation",
                    test: function(e) {
                        const t = ["button", "a", "link", "checkbox", "input"];
                        document.querySelectorAll('[role="button"], [role="link"], [role="checkbox"], [type="checkbox"]').forEach((function(i) {
                            if (!t.includes(i.nodeName.toLocaleLowerCase())) return i.hasAttribute("onkeypress") ? e.testPassed(i, "interactiveElementAtypicalKeyboardActivationFound", e.classifications.VERIFY_LOW_PRIORITY, 90, {
                                message: "key event found"
                            }) : e.testFailed(i, "interactiveElementAtypicalKeyboardActivationNotFound", e.classifications.FAILED_HIGH_RISK, 90, {
                                message: "key event not found"
                            })
                        })), document.querySelectorAll("button, a, checkbox").forEach((function(t) {
                            if (!t.hasAttribute("onclick") && !t.hasAttribute("href")) return t.hasAttribute("onkeypress") ? e.testPassed(t, "interactiveElementKeyboardActivationFound", e.classifications.VERIFY_LOW_PRIORITY, 90, {
                                message: "key event found"
                            }) : e.testFailed(t, "interactiveElementKeyboardActivationNotFound", e.classifications.FAILED_HIGH_RISK, 90, {
                                message: "key event not found"
                            })
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "cssContrast",
                    test: function(e) {
                        var t = {};
                        e.common.getContentElements().find(e.constants.content_elements + ", span, a, li, td, th, label").addBack().each((function() {
                            if (0 !== window.ae_jQuery(this).contents().filter((function() {
                                    return 3 === this.nodeType && "" !== window.ae_jQuery(this).text().trim()
                                })).length) {
                                for (var e, i, n = getComputedStyle(this).color, o = window.ae_jQuery(this); o.length;) {
                                    var a = getComputedStyle(o[0]).backgroundImage;
                                    if (a.match(/url\(/) || a.match(/gradient\(/)) {
                                        e = a;
                                        break
                                    }
                                    var r = getComputedStyle(o[0]).backgroundColor;
                                    if ("rgba(0, 0, 0, 0)" !== r && "transparent" !== r) {
                                        e = r;
                                        break
                                    }
                                    if ("absolute" !== getComputedStyle(o[0]).position && "fixed" !== getComputedStyle(o[0]).position) {
                                        if (o.is("html")) {
                                            var s = o.prop("ownerDocument").defaultView.frameElement;
                                            if (!s) break;
                                            o = window.ae_jQuery(s)
                                        }
                                        o = window.ae_jQuery(o[0].parentNode)
                                    } else {
                                        var l, c, u = {
                                                offset: o.offset(),
                                                height: o.height(),
                                                width: o.width()
                                            },
                                            d = window.ae_jQuery(o.prop("ownerDocument").body);
                                        do {
                                            l && (d = l), (l = d.children().filter((function() {
                                                if (window.ae_jQuery(this).is(o) || window.ae_jQuery(this).is(":hidden")) return !1;
                                                var e = window.ae_jQuery(this).offset(),
                                                    t = window.ae_jQuery(this).width(),
                                                    i = window.ae_jQuery(this).height();
                                                return e.top <= u.offset.top && (e.top + i >= u.offset.top + u.height || e.top + i >= u.offset.top + u.height / 2 || e.top + i / 2 >= u.offset.top + u.height) && e.left <= u.offset.left && e.left + t >= u.offset.left + u.width
                                            }))).length > 1 && (c = null, l.each((function() {
                                                var e = parseInt(getComputedStyle(this).zIndex, 10) || 0;
                                                (!c || c.zIndex < e) && (c = {
                                                    elem: window.ae_jQuery(this),
                                                    zIndex: e
                                                })
                                            })), l = c.elem)
                                        } while (l.length > 0);
                                        o = d
                                    }
                                }
                                if (e = e || "rgb(255, 255, 255)", o.length > 0 && !1 === o.is(this)) {
                                    i = o.prop("nodeName").toLowerCase();
                                    var m = o.attr("id"),
                                        f = o.attr("class");
                                    if (m || f) m && (i += "#" + m), f && (i += "." + f.replace(/\s+/g, "."));
                                    else {
                                        var h = o.closest("[id]:not([id='']), [class]:not([class=''])");
                                        h && (m = h.attr("id"), f = h.attr("class"), m ? i = h.prop("nodeName").toLowerCase() + "#" + m + " " + i : f && (i = h.prop("nodeName").toLowerCase() + "." + f.replace(/\s+/g, ".") + " " + i))
                                    }
                                }
                                var p = e + "_" + n;
                                i && (p += "_" + i.replace(/\W+/g, "_")), t[p] || (t[p] = {
                                    element: this,
                                    background: e,
                                    foreground: n
                                }, i && (t[p].background_inherit = i))
                            }
                        })), Object.keys(t).forEach((function(i) {
                            var n = t[i];
                            if (n.background.match(/url\(/)) return e.testPassed(n.element, "cssContrastBackgroundImage", e.classifications.VERIFY_HIGH_PRIORITY, 0, {
                                foreground_color: n.foreground,
                                background_image: n.background
                            });
                            var o, a = parseInt(getComputedStyle(n.element).fontSize.replace("px", ""), 10);
                            o = a >= 22 || a >= 18 && "bold" === getComputedStyle(n.element).fontWeight ? 3 : 4.5;
                            var r, s = {
                                foreground_color: n.foreground,
                                background_color: n.background,
                                minumum_contrast: o
                            };
                            if (n.background_inherit && (s.background_inherit = n.background_inherit), s.background_color.match(/gradient\(/)) {
                                var l = n.background.match(/rgba?\(\d+,\s?\d+,\s?\d+(?:,\s?(?:\d*\.)?\d+)?\)/g);
                                if (!l || 0 === l.length) return;
                                s.detected_gradient_contrasts = l.map((function(t) {
                                    return {
                                        gradient_component_color: t,
                                        gradient_component_contrast: e.common.getColorContrast(n.foreground, t)
                                    }
                                })), r = s.detected_gradient_contrasts.every((function(e) {
                                    return e.gradient_component_contrast >= o
                                }))
                            } else s.detected_contrast = e.common.getColorContrast(n.foreground, n.background), r = s.detected_contrast >= o;
                            if (!r) {
                                s.auto_observation = "fix_at_source", s.auto_observation_record = !1;
                                var c = window.ae_jQuery(n.element).text().replace(/\s/g, "");
                                if (window.ae_jQuery(n.element).find(e.constants.content_elements + ", a, li, td, th, label").each((function() {
                                        "" !== window.ae_jQuery(this).text().trim() && (window.ae_jQuery(this).is(":hidden") || getComputedStyle(this).color !== n.foreground || parseInt(getComputedStyle(this).textIndent.replace("px", ""), 10) < -100) && (c = c.replace(window.ae_jQuery(this).text().replace(/\s/g, ""), ""))
                                    })), "" === c) return;
                                return e.testFailed(n.element, "cssContrastTooLow", e.classifications.FAILED_LOW_RISK, 90, s)
                            }
                            return e.testPassed(n.element, "cssContrastSufficient", e.classifications.VERIFY_LOW_PRIORITY, 90, s)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "linkAdjacent",
                    test: function(e) {
                        e.common.getAriaRoleElements("link").each((function() {
                            var t = e.common.getAriaRoleElements("link", this, "next");
                            if (t.length > 0) {
                                var i = {
                                    href: window.ae_jQuery(this).attr("href") || !1,
                                    next_href: t.attr("href") || !1
                                };
                                return i.href && "#" !== i.href && "javascript:" !== i.href.substr(0, 11) && i.href === i.next_href ? e.testFailed(this, "linkAdjacentSameHREF", e.classifications.FAILED_LOW_RISK, 100) : e.testPassed(this, "linkAdjacentMakesSenseInContext", e.classifications.VERIFY_LOW_PRIORITY, 90)
                            }
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "linkHref",
                    test: function(e) {
                        e.common.getContentElements("a").each((function() {
                            return void 0 !== window.ae_jQuery(this).attr("href") || window.ae_jQuery(this).attr("name") || window.ae_jQuery(this).attr("id") || window.ae_jQuery(this).attr("tabindex") || window.ae_jQuery(this).attr("role") ? e.testPassed(this, "linkHrefExists", e.classifications.VERIFY_LOW_PRIORITY, 90) : e.testFailed(this, "linkHrefNone", e.classifications.FAILED_LOW_RISK, 90)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlDocumentLang",
                    test: function(e) {
                        if (e.html.is("html")) {
                            var t = e.html.attr("lang");
                            if (!t) return e.testFailed(e.html, "htmlDocumentLangNotFound", e.classifications.FAILED_HIGH_RISK, 100);
                            var i = {
                                html_lang: t
                            };
                            if (!i.html_lang.match(e.constants.langRegex)) return i.auto_observation = "fix_at_source", e.testFailed(e.html, "htmlDocumentLangNotStandard", e.classifications.FAILED_HIGH_RISK, 75, i);
                            var n = e.html.attr("xml:lang");
                            return n && (i.xml_lang = n, i.html_lang !== i.xml_lang) ? (i.auto_observation = "fix_at_source", e.testFailed(e.html, "htmlDocumentLangXMLDoesNotMatch", e.classifications.FAILED_HIGH_RISK, 100, i)) : e.testPassed(e.html, "htmlDocumentLangFound", e.classifications.VERIFY_LOW_PRIORITY, 75, i)
                        }
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlElementLang",
                    test: function(e) {
                        e.common.getContentElements("[lang]").not("html").each((function() {
                            return window.ae_jQuery(this).attr("lang").match(e.constants.langRegex) ? e.testPassed(this, "htmlElementLangFound", e.classifications.VERIFY_LOW_PRIORITY, 75) : e.testFailed(this, "htmlElementLangNotStandard", e.classifications.FAILED_HIGH_RISK, 75)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlDoctype",
                    test: function(e) {
                        if (e.html.is("html")) {
                            var t = e.html.prop("ownerDocument").doctype;
                            if (null === t) return e.testFailed(e.html, "htmlDoctypeNotFound", e.classifications.FAILED_HIGH_RISK, 100);
                            var i = {
                                document_type: "&lt;!DOCTYPE html"
                            };
                            t.publicId && (i.document_type += ' PUBLIC "' + t.publicId + '"'), t.systemId && (i.document_type += ' "' + t.publicId + '"'), i.document_type += "&gt;", e.testPassed(e.html, "htmlDoctypeFound", e.classifications.VERIFY_LOW_PRIORITY, 90, i)
                        }
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlElementId",
                    test: function(e) {
                        var t = {};
                        e.common.getContentElements("*[id]").each((function() {
                            var e = window.ae_jQuery(this).attr("id").trim();
                            e && (t[e] || (t[e] = []), t[e].push(this))
                        })), Object.keys(t).forEach((function(i) {
                            var n = {
                                id: i,
                                matches: t[i].length
                            };
                            if (t[i].length > 1) {
                                var o = e.common.escapeSelectorText(i),
                                    a = window.ae_jQuery(t[i]),
                                    r = window.ae_jQuery("[aria-labelledby], [aria-describedby]").filter((function() {
                                        return -1 !== (window.ae_jQuery(this).attr("aria-labelledby") || window.ae_jQuery(this).attr("aria-describedby")).indexOf(i)
                                    })).add("a[href^='#" + o + "']").add("label[for='" + o + "']");
                                a.is("input, select, textarea") || r.length > 0 ? e.testFailed(a.eq(1), "htmlElementIdDuplicate", e.classifications.FAILED_LOW_RISK, 75, n) : e.testPassed(a.eq(1), "htmlElementIdCheck", e.classifications.VERIFY_HIGH_PRIORITY, 25, n)
                            } else e.testPassed(window.ae_jQuery(t[i]), "htmlElementIdUnique", e.classifications.VERIFY_LOW_PRIORITY, 90, n)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlAriaRoles",
                    test: function(e) {
                        Object.keys(e.constants.aria_global_attributes).forEach((function(t) {
                            var i = e.constants.aria_global_attributes[t];
                            e.common.getElements("[" + t + "]").each((function() {
                                var n = window.ae_jQuery(this).attr(t) || "";
                                n = n.toLowerCase(), "*" !== i && ("#" === i ? isNaN(n) && e.testFailed(this, "htmlAriaRolesInvalidValue", e.classifications.FAILED_HIGH_RISK, 100, {
                                    expected_values: "number",
                                    found_value: n
                                }) : -1 === i.indexOf(n) && e.testFailed(this, "htmlAriaRolesInvalidValue", e.classifications.FAILED_HIGH_RISK, 100, {
                                    expected_values: i.join(", "),
                                    found_value: n
                                }))
                            }))
                        })), Object.keys(e.constants.aria_role_attributes).forEach((function(t) {
                            var i = e.constants.aria_role_attributes[t];
                            e.common.getElements("[" + t + "]").each((function() {
                                var n, o = window.ae_jQuery(this),
                                    a = o.attr("role");
                                if (a) {
                                    if (!e.constants.aria_roles[a]) return;
                                    n = e.constants.aria_roles[a].attributes
                                } else Object.keys(e.constants.aria_roles).some((function(t) {
                                    var i = e.constants.aria_roles[t].elements;
                                    if (i && o.is(i)) return n = e.constants.aria_roles[t].attributes, !0
                                }));
                                if (!n || -1 === n.indexOf(t)) {
                                    if (window.ae_jQuery(this).is("input") && "aria-required" === t) return;
                                    return n = (n || []).concat(Object.keys(e.constants.aria_global_attributes)), e.testFailed(this, "htmlAriaRolesAttributeNotAppropriate", e.classifications.FAILED_HIGH_RISK, 100, {
                                        expected_attrs: n.join(", "),
                                        found_attr: t
                                    })
                                }
                                var r = window.ae_jQuery(this).attr(t) || "";
                                r = r.toLowerCase(), "*" !== i && ("#" === i ? isNaN(r) && e.testFailed(this, "htmlAriaRolesInvalidValue", e.classifications.FAILED_HIGH_RISK, 100, {
                                    expected_values: "number",
                                    found_value: r
                                }) : -1 === i.indexOf(r) && e.testFailed(this, "htmlAriaRolesInvalidValue", e.classifications.FAILED_HIGH_RISK, 100, {
                                    expected_values: i.join(", "),
                                    found_value: r
                                }))
                            }))
                        })), e.common.getElements("[aria-labelledby]").each((function() {
                            var t = window.ae_jQuery(this);
                            t.attr("aria-labelledby").split(" ").forEach((function(i) {
                                if (!i.trim()) return e.testFailed(t, "htmlAriaRolesInvalidLabelledBy", e.classifications.FAILED_LOW_RISK, 100, {
                                    id: "null"
                                });
                                var n = e.common.escapeSelectorText(i.trim());
                                0 === e.common.getElements("*[id='" + n + "']").length && e.testFailed(t, "htmlAriaRolesInvalidLabelledBy", e.classifications.FAILED_LOW_RISK, 100, {
                                    id: n
                                })
                            }))
                        })), e.common.getElements("[aria-describedby]").each((function() {
                            var t = window.ae_jQuery(this);
                            t.attr("aria-describedby").split(" ").forEach((function(i) {
                                if (!i.trim()) return e.testFailed(t, "htmlAriaRolesInvalidDescribedBy", e.classifications.FAILED_LOW_RISK, 100, {
                                    id: "null"
                                });
                                var n = e.common.escapeSelectorText(i.trim());
                                0 === e.common.getElements("*[id='" + n + "']").length && e.testFailed(t, "htmlAriaRolesInvalidDescribedBy", e.classifications.FAILED_LOW_RISK, 100, {
                                    id: n
                                })
                            }))
                        })), e.common.getElements("[role]").each((function() {
                            var t = window.ae_jQuery(this),
                                i = t.attr("role");
                            if (i) {
                                i = i.toLowerCase();
                                var n = e.constants.aria_roles[i];
                                if ("none" !== i && "presentation" !== i) {
                                    if (!n) return e.testFailed(this, "htmlAriaRolesInvalidRole", e.classifications.FAILED_HIGH_RISK, 100, {
                                        role: i
                                    });
                                    if (n.required) {
                                        var o = [];
                                        if (n.required.forEach((function(e) {
                                                t.attr(e) || o.push(e)
                                            })), o.length) return e.testFailed(this, "htmlAriaRolesRoleMissingAttribute", e.classifications.FAILED_HIGH_RISK, 100, {
                                            required_roles: o.join(", ")
                                        })
                                    }
                                    if (n.required_children) {
                                        var a = [];
                                        if (n.required_children.forEach((function(e) {
                                                "string" == typeof e ? a.push(e) : e.condition && e.required && t.is(e.condition) && (a = a.concat(e.required))
                                            })), a.length) {
                                            var r = window.ae_jQuery();
                                            if (a.forEach((function(n) {
                                                    r = r.add(e.common.getAriaRoleElements(n, t, !0).not((function() {
                                                        return !1 === window.ae_jQuery(this).closest("[role='" + i + "']").is(t)
                                                    })))
                                                })), t.attr("aria-owns") && t.attr("aria-owns").split(/\s+/).forEach((function(t) {
                                                    if (t.trim()) {
                                                        var i = e.common.escapeSelectorText(t.trim());
                                                        r = r.add(e.common.getElements("*[id='" + i + "']").filter((function() {
                                                            return -1 !== a.indexOf(window.ae_jQuery(this).attr("role"))
                                                        })))
                                                    }
                                                })), 0 === r.length) return e.testFailed(this, "htmlAriaRolesRoleMissingChild", e.classifications.FAILED_HIGH_RISK, 100, {
                                                required_children: a.join(", ")
                                            })
                                        }
                                    }
                                    if (n.required_parent) {
                                        var s = [];
                                        if (n.required_parent.forEach((function(e) {
                                                "string" == typeof e ? s.push(e) : e.condition && e.required && t.is(e.condition) && (s = s.concat(e.required))
                                            })), s.length) {
                                            var l = window.ae_jQuery();
                                            if (s.forEach((function(i) {
                                                    l = l.add(e.common.getAriaRoleElements(i, t, "parents", !0))
                                                })), t.attr("id") && (l = l.add(e.common.getElements("[aria-owns]").filter((function() {
                                                    var e = window.ae_jQuery(this).attr("aria-owns").split(" ");
                                                    return -1 !== s.indexOf(window.ae_jQuery(this).attr("role")) && -1 !== e.indexOf(t.attr("id"))
                                                })))), 0 === l.length) return e.testFailed(this, "htmlAriaRolesRoleMissingParent", e.classifications.FAILED_HIGH_RISK, 100, {
                                                required_parent: s.join(", ")
                                            })
                                        }
                                    }
                                    return "combobox" === i ? e.testPassed(this, "htmlAriaRolesComboBoxReview", e.classifications.VERIFY_HIGH_PRIORITY, 0) : "listbox" === i ? e.testPassed(this, "htmlAriaRolesListBoxReview", e.classifications.VERIFY_HIGH_PRIORITY, 0) : "checkbox" === i ? e.testPassed(this, "htmlAriaRolesCheckBoxReview", e.classifications.VERIFY_HIGH_PRIORITY, 0) : "radio" === i ? e.testPassed(this, "htmlAriaRolesRadioReview", e.classifications.VERIFY_HIGH_PRIORITY, 0) : e.testPassed(this, "htmlAriaRolesFound", e.classifications.VERIFY_LOW_PRIORITY, 0)
                                }
                            }
                        })), e.common.getElements("*").each((function() {
                            var t, i, n = [];
                            for (t = 0; t < this.attributes.length; t++) {
                                if (!(i = this.attributes[t].name)) return;
                                "aria-" !== (i = i.toLowerCase()).substr(0, 5) || e.constants.aria_global_attributes[i] || e.constants.aria_role_attributes[i] || n.push(i)
                            }
                            n.length && e.testFailed(this, "htmlAriaRolesInvalidAttribute", e.classifications.FAILED_HIGH_RISK, 100, {
                                attribute: n.join(", ")
                            })
                        })), e.common.getElements("body[aria-hidden='true']").length && e.testFailed(e.getElements("body"), "htmlAriaRolesHiddenBody", e.classifications.FAILED_HIGH_RISK, 100)
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "imgLongDesc",
                    test: function(e) {
                        e.common.getContentElements("img[longdesc]").each((function() {
                            var t = {
                                longdesc: window.ae_jQuery(this).attr("longdesc").trim()
                            };
                            return "" === t.longdesc ? t.failure_type = "Image LongDesc is Empty" : !1 === /(?:^((\w+):\/\/(\w+(?:\.\w+)+))?(\/(?:[\w\-]|%\d{2})+(\/(?:[\w\-]|%\d{2})+)*\.\w+))|(^(?:[\w\-]|%\d{2})+(\/(?:[\w\-]|%\d{2})+)*\.\w+)$/i.test(t.longdesc) ? t.failure_type = "Image LongDesc is not a URL" : (t.file_extension = "." + t.longdesc.split(".").pop(), -1 !== e.constants.image_extensions.indexOf(t.file_extension) && (t.failure_type = "LongDesc is a URL to an image file")), t.failure_type ? (t.auto_observation = "fix_at_source", e.testFailed(this, "imgLongDescInvalid", e.classifications.FAILED_HIGH_RISK, 100, t)) : e.testPassed(this, "imgLongDescFound", e.classifications.VERIFY_LOW_PRIORITY, 75, t)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlSensoryTextAlternative",
                    test: function(e) {
                        var t = e.common.getContentElements("u, span").filter((function() {
                            return "underline" === window.ae_jQuery(this).css("text-decoration-line")
                        }));
                        t.each((function() {
                            var t = {};
                            window.ae_jQuery(this).is(e.constants.tabbable) || window.ae_jQuery(this).find(e.constants.tabbable).length > 0 ? (t.auto_observation = "verified", t.observation_notes = "Since the underlined content is an actionable element, its text decoration is considered to be appropriate. Note that other vendors' scanning software may still mark this as a risk, but that can be considered to be a false-positive.") : (t.auto_observation = "fix_at_source", t.observation_notes = "If there is a distinct presentational need for the underlined content, it can be justified via our verification system. Since other vendors' scanning software may mark this as a risk, that justification could provide additional context. Otherwise, consider using an alternate text decoration or style."), e.testFailed(this, "htmlSensoryTextAlternativeUnderline", e.classifications.FAILED_LOW_RISK, 50, t)
                        })), e.common.getContentElements().not(t).each((function() {
                            e.testPassed(this, "htmlSensoryTextAlternativeReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "audioControls",
                    test: function(e) {
                        e.common.getContentElements("audio").each((function() {
                            e.testPassed(this, "audioControlsReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlTextResize",
                    test: function(e) {
                        e.common.getContentElements().each((function() {
                            var t = !1;
                            if (window.ae_jQuery(this).find(e.constants.content_elements + ", span, a, li, td, th, label").addBack().each((function() {
                                    var i = {
                                        font_size: window.ae_jQuery(this).css("font-size")
                                    };
                                    if (parseInt(i.font_size, 10) < 14) return t = !0, i.auto_observation = "fix_at_source", i.auto_observation_record = !1, e.testFailed(this, "htmlTextResizeSmallFont", e.classifications.FAILED_LOW_RISK, 75, i)
                                })), !t) return e.testPassed(this, "htmlTextResizeReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlStyledText",
                    test: function(e) {
                        e.common.getContentElements().each((function() {
                            return e.testPassed(this, "htmlStyledTextReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlFocusSequence",
                    test: function(e) {
                        var t = 0,
                            i = window.ae_jQuery();
                        e.common.getContentElements(e.constants.tabbable, !0).each((function() {
                            var n = parseInt(window.ae_jQuery(this).attr("tabindex") || "null");
                            if (e.common.isAriaHidden(this)) {
                                if (-1 === n) return e.testPassed(this, "htmlFocusSequenceInOrder", e.classifications.VERIFY_LOW_PRIORITY, 90, {
                                    "aria-hidden": "true"
                                });
                                var o = window.ae_jQuery(this).closest("[aria-hidden='true'], [aria-visible='false']");
                                if (-1 === i.index(o) && !1 == o.parents().addBack().filter((function() {
                                        return "none" === window.ae_jQuery(this).css("display")
                                    })).length > 0 && "false" !== o.attr("aria-expanded")) return i = i.add(o), e.testFailed(o, "htmlFocusSequenceAriaHiddenTabbable", e.classifications.FAILED_LOW_RISK, 90)
                            }
                            if (!isNaN(n)) return n > 0 ? t > n ? e.testFailed(this, "htmlFocusSequenceOutOfOrder", e.classifications.FAILED_LOW_RISK, 75, {
                                tabindex: n,
                                previous_tabindex: t
                            }) : (t = n, e.testFailed(this, "htmlFocusSequencePositiveValue", e.classifications.FAILED_LOW_RISK, 50, {
                                tabindex: n
                            })) : e.testPassed(this, "htmlFocusSequenceInOrder", e.classifications.VERIFY_LOW_PRIORITY, 90, {
                                tabindex: n
                            })
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlSitemap",
                    test: function(e) {
                        e.common.getContentElements("a").filter(":contains(sitemap), :contains(site map), [href$='sitemap.html'], [href$='sitemap.xml']").eq(0).each((function() {
                            return e.testPassed(this, "htmlSitemapFound", e.classifications.VERIFY_LOW_PRIORITY, 75)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "headingSequence",
                    test: function(e) {
                        var t;
                        e.common.getAriaRoleElements("heading").each((function(i) {
                            var n, o = {
                                level: n = window.ae_jQuery(this).attr("aria-level") ? parseInt(window.ae_jQuery(this).attr("aria-level")) : parseInt(this.nodeName.substr(1)),
                                previous_level: t
                            };
                            i > 0 && (t + 1 < n ? e.testFailed(this, "headingSequenceOutOfOrder", e.classifications.FAILED_LOW_RISK, 75, o) : e.testPassed(this, "headingSequenceInOrder", e.classifications.VERIFY_LOW_PRIORITY, 90, o)), t = n
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "firstHeader",
                    test: function(e) {
                        var t = e.common.getAriaRoleElements("heading").first();
                        e.common.getAriaRoleElements("heading").length && (t.is("h1,h2,[aria-level=1],[aria-level=2]") ? e.testPassed(t.get(0), "firstHeaderCorrect", e.classifications.VERIFY_LOW_PRIORITY, 90) : e.testPassed(t.get(0), "firstHeaderLevelNot1or2", e.classifications.FAILED_LOW_RISK, 75))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "headingLevelOneCount",
                    test: function(e) {
                        var t = e.common.getAriaRoleElements("heading"),
                            i = t.filter('h1, [aria-level="1"]').not("[aria-level][aria-level!=1]"),
                            n = i.length;
                        return n < 1 ? (i = t.length ? e.common.getAriaRoleElements("heading").first() : window.ae_jQuery(":first"), e.testFailed(i.get(0), "headingLevelOneCountZero", e.classifications.FAILED_LOW_RISK, 75)) : n > 1 ? e.testFailed(i.get(0), "headingLevelOneCountMultiple", e.classifications.FAILED_LOW_RISK, 75) : e.testPassed(i.get(0), "headingLevelOneCountSingle", e.classifications.VERIFY_LOW_PRIORITY, 90)
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlFocusVisible",
                    test: function(e) {
                        var t = e.common.getContentElements("*[tabindex], a[href], area[href], input, select, textarea, button");
                        t.length && e.testPassed(t.get(0), "htmlFocusVisibleReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlFocusContext",
                    test: function(e) {
                        e.common.getContentElements("select, input").filter("[onfocus]").each((function() {
                            return e.testPassed(this, "htmlFocusContextReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlComponentConsistency",
                    test: function(e) {
                        e.common.getContentElements().each((function() {
                            return e.testPassed(e.common.getScannedContainer(), "htmlComponentConsistencyReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "formFieldErrors",
                    test: function(e) {
                        e.common.getContentElements("form").each((function() {
                            return e.testPassed(this, "formFieldErrorsReview", e.classifications.VERIFY_HIGH_PRIORITY, 0)
                        }))
                    }
                }, {
                    testGroup: "wcagDoubleA",
                    testName: "htmlContentReflow",
                    test: function(e) {
                        e.html.find("meta").filter("[name='viewport']").each((function() {
                            var t = window.ae_jQuery(this).attr("content");
                            if (/user-scalable=no/.test(t)) return e.testFailed(this, "htmlContentReflowRestrictsZoom", e.classifications.FAILED_HIGH_RISK, 100, {
                                content: "user-scalable=no",
                                auto_observation: "fix_at_source"
                            });
                            var i = /maximum-scale=(\d+(?:\.\d+)?)/.exec(t);
                            return i && (i = parseFloat(i[1])) < 2 ? e.testFailed(this, "htmlContentReflowRestrictsZoom", e.classifications.FAILED_HIGH_RISK, 100, {
                                content: "maximum-scale=" + i,
                                expected: "maximum-scale=2",
                                auto_observation: "fix_at_source"
                            }) : e.testPassed(this, "htmlContentReflowAdequateZoom", e.classifications.VERIFY_LOW_PRIORITY, 75)
                        }))
                    }
                }]
            },
            2602: function(e, t) {
                "use strict";
                var i = AudioEye.productConfig,
                    n = {
                        "aria-expanded": {
                            configurable: !0,
                            get: function() {
                                var e = this.elem.getAttribute("aria-expanded");
                                return e ? s(e) : void 0
                            }
                        },
                        "aria-orientation": {
                            configurable: !0,
                            get: function() {
                                return l(this.elem.getAttribute("aria-orientation"), ["horizontal", "vertical"]) || void 0
                            }
                        },
                        "aria-required": {
                            configurable: !0,
                            get: function() {
                                var e = this.elem.getAttribute("aria-required");
                                return e ? s(e) : this.elem.required
                            }
                        },
                        "aria-readonly": {
                            configurable: !0,
                            get: function() {
                                return s(this.elem.getAttribute("aria-readonly"))
                            }
                        },
                        "aria-activedescendant": {
                            configurable: !0,
                            get: function() {
                                return this.elem.getAttribute("aria-activedescendant")
                            }
                        },
                        "aria-autocomplete": {
                            configurable: !0,
                            get: function() {
                                return l(this.elem.getAttribute("aria-autocomplete"), ["inline", "list", "both"]) || "none"
                            }
                        },
                        "aria-multiline": {
                            configurable: !0,
                            get: function() {
                                return s(this.elem.getAttribute("aria-multiline"))
                            }
                        },
                        "aria-placeholder": {
                            configurable: !0,
                            get: function() {
                                return this.elem.getAttribute("aria-placeholder")
                            }
                        },
                        "aria-selected": {
                            configurable: !0,
                            get: function() {
                                var e = this.elem.getAttribute("aria-selected");
                                return e ? s(e) : this.elem.selected
                            }
                        },
                        "aria-checked": {
                            configurable: !0,
                            get: function() {
                                var e = this.elem.getAttribute("aria-checked");
                                if (e) switch (e.toLowerCase()) {
                                    case "true":
                                        return !0;
                                    case "false":
                                        return !1;
                                    case "mixed":
                                        return "mixed";
                                    default:
                                        return
                                }
                            }
                        },
                        "aria-posinset": {
                            configurable: !0,
                            get: function() {
                                var e = this.elem.getAttribute("aria-posinset");
                                return parseInt(e) || void 0
                            }
                        },
                        "aria-setsize": {
                            configurable: !0,
                            get: function() {
                                var e = this.elem.getAttribute("aria-setsize");
                                return parseInt(e) || void 0
                            }
                        },
                        "aria-pressed": {
                            configurable: !0,
                            get: function() {
                                var e = this.elem.getAttribute("aria-pressed");
                                if (e) switch (e.toLowerCase()) {
                                    case "true":
                                        return !0;
                                    case "false":
                                        return !1;
                                    case "mixed":
                                        return "mixed";
                                    default:
                                        return
                                }
                            }
                        },
                        "aria-level": {
                            configurable: !0,
                            get: function() {
                                var e = this.elem.getAttribute("aria-level");
                                return parseInt(e) || void 0
                            }
                        }
                    },
                    o = {};

                function a(e) {
                    var t = 0;
                    return e.tag && t++, e.attributes ? (e.attributes.forEach((function(e) {
                        t += e.length
                    })), t) : t
                }

                function r(e) {
                    var t = e.nodeName;
                    if (!t) return !1;
                    t = t.toLowerCase();
                    var i, n = (i = t, Object.keys(o).ae_reduce((function(e, t) {
                        var n = o[t].implicit_html;
                        return n ? (n.forEach((function(n) {
                            n.tag === i && e.push({
                                tag: n.tag,
                                attributes: n.attributes,
                                role: o[t].role
                            })
                        })), e) : e
                    }), []));
                    if (!n.length) return null;
                    n.sort((function(e, t) {
                        return a(t) - a(e)
                    }));
                    for (var r = 0, s = n.length; r < s; r++) {
                        var l = n[r].attributes;
                        if (!l) return n[r].role;
                        if (u(e, l)) return n[r].role
                    }
                    return null
                }

                function s(e, t) {
                    var i = e.getAttribute(t);
                    return !!i && "true" === i.toLowerCase()
                }

                function l(e, t) {
                    return e = e.toLowerCase(), -1 !== t.indexOf(e) && e
                }

                function c(e) {
                    for (var t in o)
                        if (o[t].role === e) return o[t];
                    return !1
                }

                function u(e, t) {
                    return !!t && !!e && (e = window.ae_jQuery(e), !!Array.isArray(t[0]) && t.every((function(t) {
                        var i = t[0],
                            n = t[1];
                        return !!e[0].hasAttribute(i) && (void 0 === n || n === e[0].getAttribute(i))
                    })))
                }

                function d(e) {
                    return Object.keys(o).ae_reduce((function(t, i) {
                        return e === o[i].role && o[i].implicit_html && (t = t.concat(o[i].implicit_html)), t
                    }), [])
                }

                function m(e, t, i) {
                    var n = window.ae_jQuery(e).attr("role");
                    return (!n || n.toLowerCase() === i) && !!e.is(t.tag) && (!t.attributes || u(window.ae_jQuery(e), t.attributes))
                }

                function f(e) {
                    var t = "[role=" + e + "]";
                    return !!c(e) && (o[e].hasOwnProperty("subroles") ? (o[e].subroles.forEach((function(e) {
                        t += ", [role=" + e + "]"
                    })), t) : t)
                }
                o.roletype = Object.create({}, {
                    isAbstract: {
                        value: !0
                    },
                    role: {
                        value: "roletype"
                    },
                    atomic: {
                        configurable: !0,
                        get: function() {
                            return s(this.elem, "aria-atomic")
                        }
                    },
                    busy: {
                        configurable: !0,
                        get: function() {
                            return s(this.elem, "aria-busy")
                        }
                    },
                    controls: {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-controls")
                        }
                    },
                    current: {
                        configurable: !0,
                        get: function() {
                            var e = this.elem.attr("aria-current");
                            return -1 !== ["page", "step", "location", "date", "time"].indexOf(e) ? e : !!e && "true" === e.toLowerCase()
                        }
                    },
                    describedby: {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-describedby")
                        }
                    },
                    details: {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-details")
                        }
                    },
                    disabled: {
                        configurable: !0,
                        get: function() {
                            return s(this.elem, "aria-disabled")
                        }
                    },
                    errormessage: {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-errormessage")
                        }
                    },
                    flowto: {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-flowto")
                        }
                    },
                    haspopup: {
                        configurable: !0,
                        get: function() {
                            var e = this.elem.attr("aria-haspopup");
                            return e && "true" === e.toLowerCase() ? "menu" : -1 !== ["menu", "listbox", "tree", "grid", "dialog"].indexOf(e) && e
                        }
                    },
                    hidden: {
                        configurable: !0,
                        get: function() {
                            var e, t = this.elem.getAttribute("aria-hidden");
                            return t ? s(t) : (e = this.elem, "none" === window.getComputedStyle(e).display)
                        }
                    },
                    invalid: {
                        configurable: !0,
                        get: function() {
                            var e = this.elem.getAttribute("aria-invalid");
                            return !!e && (l(e, ["grammar", "spelling"]) || s(e))
                        }
                    },
                    keyshortcuts: {
                        configurable: !0,
                        get: function() {
                            return !1
                        }
                    },
                    label: {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-label")
                        }
                    },
                    labelledby: {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-labelledby")
                        }
                    },
                    live: {
                        configurable: !0,
                        get: function() {
                            var e = this.elem.getAttribute("aria-live");
                            return (e ? l(e, ["assertive", "off", "polite"]) : function(e, t) {
                                for (var i;
                                    (e = e.parentElement) && !(i = e.getAttribute("aria-live")););
                                return i
                            }(this.elem)) || "off"
                        }
                    },
                    owns: {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-owns")
                        }
                    },
                    inherits: {
                        value: function(e) {
                            for (var t = this, i = !1; t;) {
                                if (e === t.role) {
                                    i = !0;
                                    break
                                }
                                t = Object.getPrototypeOf(t)
                            }
                            return i
                        }
                    }
                }), o.widget = Object.create(o.roletype, {
                    role: {
                        value: "widget"
                    }
                }), o.structure = Object.create(o.roletype, {
                    role: {
                        value: "structure"
                    }
                }), o.window = Object.create(o.roletype, {
                    role: {
                        value: "window"
                    },
                    "aria-expanded": n["aria-expanded"]
                }), o.composite = Object.create(o.widget, {
                    role: {
                        value: "composite"
                    },
                    "aria-activedescendant": n["aria-activedescendant"]
                }), o.range = Object.create(o.widget, {
                    role: {
                        value: "range"
                    },
                    "aria-valuemax": {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-valuemax")
                        }
                    },
                    "aria-valuemin": {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-valuemin")
                        }
                    },
                    "aria-valuenow": {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-valuenow")
                        }
                    },
                    "aria-valuetext": {
                        configurable: !0,
                        get: function() {
                            return this.elem.getAttribute("aria-valuetext")
                        }
                    }
                }), o.input = Object.create(o.widget, {
                    role: {
                        value: "input"
                    }
                }), o.command = Object.create(o.widget, {
                    role: {
                        value: "command"
                    }
                }), o.row = Object.create(o.widget, {
                    role: {
                        value: "row"
                    },
                    isAbstract: {
                        value: !1
                    },
                    implicit_html: {
                        value: [{
                            tag: "tr"
                        }]
                    }
                }), o.section = Object.create(o.structure, {
                    role: {
                        value: "section"
                    },
                    "aria-expanded": n["aria-expanded"]
                }), o.rowgroup = Object.create(o.structure, {
                    role: {
                        value: "rowgroup"
                    },
                    implicit_html: {
                        value: [{
                            tag: "tbody"
                        }, {
                            tag: "thead"
                        }, {
                            tag: "tfoot"
                        }]
                    }
                }), o.separator = Object.create(o.structure, {
                    role: {
                        value: "separator"
                    },
                    isAbstract: {
                        value: !1
                    },
                    "aria-expanded": n["aria-expanded"],
                    "aria-orientation": n["aria-orientation"],
                    implicit_html: {
                        value: [{
                            tag: "hr"
                        }]
                    }
                }), o.presentation = Object.create(o.structure, {
                    isAbstract: {
                        value: !1
                    },
                    role: {
                        value: "presentation"
                    },
                    implicit_html: {
                        value: [{
                            tag: "img",
                            attributes: [
                                ["alt", ""]
                            ]
                        }]
                    }
                }), o.document = Object.create(o.structure, {
                    isAbstract: {
                        value: !1
                    },
                    role: {
                        value: "document"
                    },
                    "aria-expanded": n["aria-expanded"],
                    implicit_html: {
                        value: [{
                            tag: "body"
                        }]
                    }
                }), o.article = Object.create(o.document, {
                    role: {
                        value: "article"
                    },
                    implicit_html: {
                        value: [{
                            tag: "article"
                        }]
                    }
                }), o.sectionhead = Object.create(o.structure, {
                    role: {
                        value: "sectionhead"
                    },
                    "aria-expanded": n["aria-expanded"]
                }), o.select = Object.create(o.composite, {
                    role: {
                        value: "select"
                    },
                    "aria-orientation": n["aria-orientation"]
                }), o.menu = Object.create(o.select, {
                    role: {
                        value: "menu"
                    },
                    implicit_html: {
                        value: [{
                            tag: "menu",
                            attributes: [
                                ["type", "context"]
                            ]
                        }]
                    }
                }), o.combobox = Object.create(o.select, {
                    role: {
                        value: "combobox"
                    },
                    implicit_html: {
                        value: [{
                            tag: "input",
                            attributes: [
                                ["type", "search"],
                                ["list"]
                            ]
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "tel"],
                                ["list"]
                            ]
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "email"],
                                ["list"]
                            ]
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "text"],
                                ["list"]
                            ]
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "url"],
                                ["list"]
                            ]
                        }]
                    }
                }), o.radiogroup = Object.create(o.select, {
                    role: {
                        value: "radiogroup"
                    },
                    "aria-orientation": n["aria-orientation"]
                }), o.listBox = Object.create(o.select, {
                    role: {
                        value: "listbox"
                    },
                    "aria-readonly": n["aria-readonly"],
                    "aria-required": n["aria-required"],
                    implicit_html: {
                        value: [{
                            tag: "datalist"
                        }, {
                            tag: "select"
                        }]
                    }
                }), o.dialog = Object.create(o.window, {
                    role: {
                        value: "dialog"
                    },
                    implicit_html: {
                        value: [{
                            tag: "dialog"
                        }]
                    }
                }), o.progressBar = Object.create(o.range, {
                    role: {
                        value: "progressbar"
                    },
                    "aria-required": n["aria-required"],
                    implicit_html: {
                        value: [{
                            tag: "progress"
                        }]
                    }
                }), o.spinbutton = Object.create(o.range, {
                    role: {
                        value: "spinbutton"
                    },
                    implicit_html: {
                        value: [{
                            tag: "input",
                            attributes: [
                                ["type", "number"]
                            ]
                        }]
                    }
                }), o.slider = Object.create(o.range, {
                    role: {
                        value: "slider"
                    },
                    "aria-orientation": n["aria-orientation"],
                    "aria-readonly": n["aria-readonly"],
                    implicit_html: {
                        value: [{
                            tag: "input",
                            attributes: [
                                ["type", "range"]
                            ]
                        }]
                    }
                }), o.scrollbar = Object.create(o.range, {
                    role: {
                        value: "scrollbar"
                    }
                }), o.textbox = Object.create(o.input, {
                    role: {
                        value: "textbox"
                    },
                    "aria-activedescendant": n["aria-activedescendant"],
                    "aria-autocomplete": n["aria-autocomplete"],
                    "aria-multiline": n["aria-multiline"],
                    "aria-placeholder": n["aria-placeholder"],
                    "aria-readonly": n["aria-readonly"],
                    "aria-required": n["aria-required"],
                    implicit_html: {
                        value: [{
                            tag: "textarea"
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "tel"]
                            ]
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "email"]
                            ]
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "text"]
                            ]
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "url"]
                            ]
                        }]
                    }
                }), o.searchbox = Object.create(o.textbox, {
                    role: {
                        value: "searchbox"
                    },
                    implicit_html: {
                        value: [{
                            tag: "input",
                            attributes: [
                                ["type", "search"]
                            ]
                        }]
                    }
                }), o.option = Object.create(o.input, {
                    role: {
                        value: "option"
                    },
                    "aria-selected": n["aria-selected"],
                    "aria-checked": n["aria-checked"],
                    "aria-posinset": n["aria-posinset"],
                    "aria-setsize": n["aria-setsize"],
                    implicit_html: {
                        value: [{
                            tag: "option"
                        }]
                    }
                }), o.checkbox = Object.create(o.input, {
                    role: {
                        value: "checkbox"
                    },
                    "aria-checked": n["aria-checked"],
                    implicit_html: {
                        value: [{
                            tag: "input",
                            attributes: [
                                ["type", "checkbox"]
                            ]
                        }]
                    }
                }), o.menuitem = Object.create(o.command, {
                    role: {
                        value: "menuitem"
                    },
                    implicit_html: {
                        value: [{
                            tag: "menuitem",
                            attributes: [
                                ["type", "command"]
                            ]
                        }]
                    }
                }), o.menuitemcheckbox = Object.create(o.menuitem, {
                    role: {
                        value: "menuitemcheckbox"
                    },
                    implicit_html: {
                        value: [{
                            tag: "menuitem",
                            attributes: [
                                ["type", "checkbox"]
                            ]
                        }]
                    }
                }), o.menuitemradio = Object.create(o.menuitemcheckbox, {
                    role: {
                        value: "menuitemradio"
                    },
                    implicit_html: {
                        value: [{
                            tag: "menuitem",
                            attributes: [
                                ["type", "radio"]
                            ]
                        }]
                    }
                }), o.radio = Object.create(o.command, {
                    role: {
                        value: "radio"
                    },
                    "aria-checked": n["aria-checked"],
                    "aria-posinset": n["aria-posinset"],
                    "aria-setsize": n["aria-setsize"],
                    implicit_html: {
                        value: [{
                            tag: "input",
                            attributes: [
                                ["type", "radio"]
                            ]
                        }]
                    }
                }), o.button = Object.create(o.command, {
                    role: {
                        value: "button"
                    },
                    "aria-expanded": n["aria-expanded"],
                    "aria-pressed": n["aria-pressed"],
                    implicit_html: {
                        value: [{
                            tag: "button"
                        }, {
                            tag: "summary"
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "button"]
                            ]
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "image"]
                            ]
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "reset"]
                            ]
                        }, {
                            tag: "input",
                            attributes: [
                                ["type", "submit"]
                            ]
                        }]
                    }
                }), o.link = Object.create(o.command, {
                    role: {
                        value: "link"
                    },
                    "aria-expanded": n["aria-expanded"],
                    implicit_html: {
                        value: [{
                            tag: "a",
                            attributes: [
                                ["href"]
                            ]
                        }, {
                            tag: "area",
                            attributes: [
                                ["href"]
                            ]
                        }]
                    }
                }), o.list = Object.create(o.section, {
                    role: {
                        value: "list"
                    },
                    implicit_html: {
                        value: [{
                            tag: "dl"
                        }, {
                            tag: "ul"
                        }, {
                            tag: "ol"
                        }]
                    }
                }), o.listitem = Object.create(o.section, {
                    role: {
                        value: "listitem"
                    },
                    "aria-level": n["aria-level"],
                    "aria-posinset": n["aria-posinset"],
                    "aria-setsize": n["aria-setsize"],
                    implicit_html: {
                        value: [{
                            tag: "dt"
                        }, {
                            tag: "li"
                        }]
                    }
                }), o.group = Object.create(o.section, {
                    role: {
                        value: "group"
                    },
                    "aria-activedescendant": n["aria-activedescendant"],
                    implicit_html: {
                        value: [{
                            tag: "details"
                        }, {
                            tag: "optgroup"
                        }]
                    }
                }), o.figure = Object.create(o.section, {
                    role: {
                        value: "figure"
                    },
                    implicit_html: {
                        value: [{
                            tag: "figure"
                        }]
                    }
                }), o.tooltip = Object.create(o.section, {
                    role: {
                        value: "tooltip"
                    }
                }), o.alert = Object.create(o.section, {
                    role: {
                        value: "alert"
                    }
                }), o.alertDialog = Object.create(o.alert, {
                    role: {
                        value: "alertdialog"
                    }
                }), o.img = Object.create(o.section, {
                    role: {
                        value: "img"
                    },
                    implicit_html: {
                        value: [{
                            tag: "img"
                        }]
                    }
                }), o.marquee = Object.create(o.section, {
                    role: {
                        value: "marquee"
                    }
                }), o.log = Object.create(o.section, {
                    role: {
                        value: "log"
                    }
                }), o.status = Object.create(o.section, {
                    role: {
                        value: "status"
                    },
                    implicit_html: {
                        value: [{
                            tag: "output"
                        }]
                    }
                }), o.tab = Object.create(o.section, {
                    role: {
                        value: "tab"
                    }
                }), o.tabpanel = Object.create(o.section, {
                    role: {
                        value: "tabpanel"
                    }
                }), o.term = Object.create(o.section, {
                    role: {
                        value: "term"
                    }
                }), o.definition = Object.create(o.section, {
                    role: {
                        value: "definition"
                    },
                    implicit_html: {
                        value: [{
                            tag: "dd"
                        }]
                    }
                }), o.note = Object.create(o.section, {
                    role: {
                        value: "note"
                    }
                }), o.math = Object.create(o.section, {
                    role: {
                        value: "math"
                    },
                    implicit_html: {
                        value: [{
                            tag: "math"
                        }]
                    }
                }), o.table = Object.create(o.section, {
                    role: {
                        value: "table"
                    },
                    implicit_html: {
                        value: [{
                            tag: "table"
                        }]
                    }
                }), o.grid = Object.create(o.table, {
                    role: {
                        value: "grid"
                    }
                }), o.cell = Object.create(o.section, {
                    role: {
                        value: "cell"
                    },
                    implicit_html: {
                        value: [{
                            tag: "td"
                        }]
                    }
                }), o.columnheader = Object.create(o.cell, {
                    role: {
                        value: "columnheader"
                    },
                    implicit_html: {
                        value: [{
                            tag: "th"
                        }]
                    }
                }), o.rowheader = Object.create(o.cell, {
                    role: {
                        value: "rowheader"
                    }
                }), o.landmark = Object.create(o.section, {
                    role: {
                        value: "landmark"
                    }
                }), o.navigation = Object.create(o.landmark, {
                    role: {
                        value: "navigation"
                    },
                    implicit_html: {
                        value: [{
                            tag: "nav"
                        }]
                    }
                }), o.main = Object.create(o.landmark, {
                    role: {
                        value: "main"
                    },
                    singleton: {
                        value: !0
                    },
                    implicit_html: {
                        value: [{
                            tag: "main"
                        }]
                    }
                }), o.search = Object.create(o.landmark, {
                    role: {
                        value: "search"
                    }
                }), o.contentinfo = Object.create(o.landmark, {
                    role: {
                        value: "contentinfo"
                    },
                    singleton: {
                        value: !0
                    },
                    implicit_html: {
                        value: [{
                            tag: "footer"
                        }]
                    }
                }), o.banner = Object.create(o.landmark, {
                    role: {
                        value: "banner"
                    },
                    singleton: {
                        value: !0
                    },
                    implicit_html: {
                        value: [{
                            tag: "header"
                        }]
                    }
                }), o.complementary = Object.create(o.landmark, {
                    role: {
                        value: "complementary"
                    },
                    implicit_html: {
                        value: [{
                            tag: "aside"
                        }]
                    }
                }), o.region = Object.create(o.landmark, {
                    role: {
                        value: "region"
                    },
                    implicit_html: {
                        value: [{
                            tag: "section"
                        }]
                    }
                }), o.sectionhead = Object.create(o.structure, {
                    role: {
                        value: "sectionhead"
                    },
                    "aria-expanded": n["aria-expanded"]
                }), o.heading = Object.create(o.sectionhead, {
                    role: {
                        value: "heading"
                    },
                    "aria-level": n["aria-level"],
                    implicit_html: {
                        value: [{
                            tag: "h1"
                        }, {
                            tag: "h2"
                        }, {
                            tag: "h3"
                        }, {
                            tag: "h4"
                        }, {
                            tag: "h5"
                        }, {
                            tag: "h6"
                        }]
                    }
                }), o.form = Object.create(o.landmark, {
                    role: {
                        value: "form"
                    },
                    implicit_html: {
                        value: [{
                            tag: "form"
                        }]
                    }
                });
                var h = null;

                function p(e, t) {
                    if (!e) return null;
                    var i, n = [];
                    if (t || (n = function(e) {
                            var t = window.ae_jQuery(e).attr("aria-labelledby");
                            t = t && t.indexOf(" ") > -1 ? t.split(" ") : [t];
                            var i = [];
                            return t.forEach((function(e) {
                                1 === window.ae_jQuery("#" + e).length && i.push(e)
                            })), i
                        }(e)), t || (h = null), function(e) {
                            if (3 === e.nodeType) return !1;
                            if (! function(e) {
                                    return 0 != (e = window.ae_jQuery(e)).parentsUntil(window.ae_jQuery(document.body).add("html")).addBack().filter((function() {
                                        var e = window.ae_jQuery(this).css("visibility"),
                                            t = window.ae_jQuery(this).css("display");
                                        return "hidden" === e || "none" === t
                                    })).length
                                }(e)) return !1;
                            var t = e.id,
                                i = !!t && window.ae_jQuery('[aria-labelledby="' + t + '"]').length > 0,
                                n = !!t && window.ae_jQuery('[for="' + t + '"]').length > 0;
                            return !i && !n
                        }(e)) return null;
                    var o = y(e);
                    return 0 != o && (null === h ? h = o : h += " " + o), !t && n.length ? (n.forEach((function(e) {
                        var t = p(document.getElementById(e), !0);
                        null != t && (null === h ? h = t : h += " " + t)
                    })), w(e, h)) : e.getAttribute && e.getAttribute("aria-label") && e.getAttribute("aria-label").trim() ? t && _(e) ? w(e, i = g(e)) : (i = e.getAttribute("aria-label"), w(e, i)) : function(e) {
                        return (!e.getAttribute || "presentation" !== e.getAttribute("role") && "none" !== e.getAttribute("role")) && (!("IMG" !== e.tagName || !e.getAttribute || !e.getAttribute("alt")) || (!("IMG" !== e.tagName || !e.getAttribute || !e.getAttribute("alt")) || (!(!e.getAttribute || "IFRAME" !== e.tagName || !e.getAttribute("title")) || !(!e.id || !document.querySelectorAll('[for="' + e.id + '"]').length))))
                    }(e) ? function(e) {
                        if (e.getAttribute && "IMG" === e.tagName && e.getAttribute("alt")) return e.getAttribute("alt");
                        if (e.getAttribute && "IMG" === e.tagName && e.getAttribute("title")) return e.getAttribute("title");
                        if (e.getAttribute && "IFRAME" === e.tagName && e.getAttribute("title")) return e.getAttribute("title");
                        var t = e.id;
                        return t && document.querySelector('[for="' + t + '"]').length ? document.querySelector('[for="' + t + '"]').textContent : void 0
                    }(e) : function(e) {
                        var t = _(e);
                        if (!t) return !1;
                        var i = (e = window.ae_jQuery(e)).parents("label").length > 0,
                            n = e.attr("id"),
                            o = window.ae_jQuery('[labelledby="' + n + '"]').length > 0,
                            a = e.prop("tagName");
                        if (t && (i || o)) {
                            if ("TEXTAREA" === a) return !0;
                            if ("INPUT" === a && "text" === e.attr("type")) return !0;
                            if ("BUTTON" === a) return !0;
                            if ("SELECT" === a) return !0;
                            if ("INPUT" === a && "range" === e.attr("type")) return !0
                        }
                        return !1
                    }(e) ? g(e) : function(e) {
                        if (function(e) {
                                var t = {
                                    "a:href": "link",
                                    area: "link",
                                    button: "button",
                                    h1: "heading",
                                    h2: "heading",
                                    h3: "heading",
                                    h4: "heading",
                                    h5: "heading",
                                    h6: "heading",
                                    li: "listitem",
                                    "input:radio": "radio",
                                    "input:submit": "button",
                                    "input:image": "button",
                                    "input:reset": "button",
                                    "input:button": "button",
                                    option: "option"
                                };
                                if (3 === e.nodeType) return !0;
                                var i = ["button", "checkbox", "columnheader", "directory", "gridcell", "heading", "link", "listitem", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowgroup", "rowheader", "section", "sectionhead", "tab", "tooltip", "treeitem"];
                                if (window.ae_jQuery(e).attr("role")) {
                                    var n = window.ae_jQuery(e).attr("role");
                                    return i.indexOf(n.toLowerCase()) > -1
                                }
                                var o = null;
                                return e.tagName && "INPUT" === e.tagName ? o = "input:" + window.ae_jQuery(e).attr("type") : e.tagName && "A" === e.tagName ? o = "a" + (e.getAttribute("href") ? ":href" : "") : e.tagName && (o = e.tagName.toLowerCase()), !!(o && t[o] && i.indexOf(t[o].toLowerCase()) > -1)
                            }(e)) return !0;
                        var t = (e = window.ae_jQuery(e)).attr("id");
                        return window.ae_jQuery('[labelledby="' + t + '"]').length > 0 || "LABEL" === e.prop("tagName") || !!e.parents("label").length
                    }(e) ? function(e) {
                        if (3 === e.nodeType) return e.textContent;
                        var t = "";
                        y((e = window.ae_jQuery(e))[0]) && (t = y(e[0]));
                        for (var i = e[0].childNodes, n = 0; n < i.length; n++) t += p(i[n], !0);
                        return t
                    }(e) : e.getAttribute("title") ? e.getAttribute("title") : t && e.textContent ? e.textContent : (console.log("no processing rule found for: ", e), null)
                }

                function g(e) {
                    var t = (e = window.ae_jQuery(e)).parents("label").length > 0,
                        i = e.attr("id"),
                        n = window.ae_jQuery('[labelledby="' + i + '"]').length > 0,
                        o = "",
                        a = e.prop("tagName");
                    if (t || n)
                        if ("TEXTAREA" === a) o = e.val();
                        else if ("INPUT" === a && "text" === e.attr("type")) o = e.val();
                    else if ("BUTTON" === a) o = p(e[0], !0);
                    else if ("SELECT" === a) {
                        var r = e.find("option:selected")[0];
                        o = r ? p(r, !0) : null
                    } else "INPUT" === a && "range" === e.attr("type") && (o = e.attr("aria-valuetext") ? e.attr("aria-valuetext") : e.attr("aria-valuenow") ? e.attr("aria-valuenow") : e.val());
                    return o
                }

                function _(e) {
                    return 3 !== e.nodeType && ["input", "textbox", "textarea", "button", "combobox", "option", "range", "spinbutton", "slider"].indexOf(e.tagName.toLowerCase()) > -1
                }

                function y(e) {
                    if (!e.isConnected) return !1;
                    if (3 === e.nodeType) return !1;
                    var t = !1;
                    try {
                        t = "none" != (t = window.getComputedStyle(e, ":before").getPropertyValue("content")) && "string" == typeof t && t.substring(1, t.length - 1) + " "
                    } catch (t) {
                        console.log("ERROR: " + t + " , in cssBefore on element: ", e)
                    }
                    return t
                }

                function w(e, t) {
                    var i = function(e) {
                        if (!e.isConnected) return !1;
                        if (3 === e.nodeType) return !1;
                        var t = !1;
                        try {
                            t = "none" != (t = window.getComputedStyle(e, ":after").getPropertyValue("content")) && "string" == typeof t && t.substring(1, t.length - 1)
                        } catch (t) {
                            console.log("ERROR: " + t + " , in cssAfter on element: ", e)
                        }
                        return t
                    }(e);
                    return i ? t + " " + i : t
                }
                var v = {
                    getRole: function(e) {
                        var t, i, n;
                        return !!e && (e.jquery && (e = e[0]), (n = (t = e.getAttribute("role") || r(e)) && (i = c(t)) ? Object.create(i) : Object.create(o.roletype)).elem = e, n.role)
                    },
                    containsAccessibleText: function(e) {
                        if (e.find("img[alt]").addBack("img[alt]").length) return !0;
                        if (e.find("[aria-label]").addBack("[aria-label]").filter((function() {
                                return window.ae_jQuery(this).attr("aria-label").length > 0
                            })).length) return !0;
                        var t = this.elementWithValidAttr(e, "aria-describedby"),
                            i = this.elementWithValidAttr(e, "aria-labelledby");
                        return !(!t && !i && !e.safeText().length)
                    },
                    elementWithValidAttr: function(e, t) {
                        return e.find("[" + t + "]").addBack("[" + t + "]").filter((function() {
                            return window.ae_jQuery("#" + window.ae_jQuery(this).attr(t)).text().length > 0
                        })).length > 0
                    },
                    queryByRole: function(e, t, i) {
                        var n = window.ae_jQuery();
                        if (!t || !i) return !1;
                        if (i = window.ae_jQuery(i), t = t.toLowerCase(), !window.ae_jQuery.isFunction(i[e])) throw new Error('element does not have jquery method "' + e + '"');
                        if (-1 !== ["has"].indexOf(e)) throw new Error('Method "' + e + '" not allowed.');
                        return n = n.add(i[e](f(t))), d(t).forEach((function(o) {
                            var a = i[e](o.tag).filter((function() {
                                return m(window.ae_jQuery(this), o, t)
                            }));
                            a.length && (n = n.add(a))
                        })), n
                    },
                    roleFactory: function(e) {
                        return !!o[e] && Object.create(o[e])
                    },
                    getAccessibleName: function(e) {
                        return h = null, h = (h = (h = p(e, !1)) ? h.replace(/\s\s+/g, " ") : h) ? h.trim() : h
                    }
                };
                ! function() {
                    for (var e in o) {
                        var t = Object.getPrototypeOf(o[e]);
                        t.role && (o[t.role].hasOwnProperty("subroles") || (o[t.role].subroles = []), o[t.role].subroles.push(e))
                    }
                }(), i && i.testmode && window.testScope && (window.testScope.ARIA = {
                    implicit_role: r,
                    get_implicit_html_by_role: d,
                    has_required_attributes: u,
                    matches_html_and_role: m,
                    get_explicit_role_selector: f,
                    Roles: o
                }), t.Z = v
            },
            3204: function(e, t) {
                "use strict";
                var i = {
                    init: function() {
                        i.builderIsInstalled() || this._noop()
                    },
                    builderIsInstalled: function() {
                        return !(!window.AudioEye || !AudioEye._builderExtensionAvailable)
                    },
                    remsFirstTimeStart: function() {
                        window.dispatchEvent(new CustomEvent("RemediationsStart"))
                    },
                    observeSingleRem: function() {
                        window.dispatchEvent(new CustomEvent("watch-for-changes", {
                            detail: {
                                observing: !0
                            }
                        }))
                    },
                    finishObserveSingleRem: function(e, t, i) {
                        window.dispatchEvent(new CustomEvent("ae-remediation-end", {
                            detail: {
                                name: e,
                                fN: t,
                                type: i
                            }
                        }))
                    },
                    sendLifecycleEvent: function(e) {
                        window.dispatchEvent(new CustomEvent("AudioEyeLifeCycleEvent", {
                            detail: {
                                lifecycleevent: !0,
                                lifecyclemessage: e.message,
                                eventTime: e.eventTime || (new Date).getTime()
                            }
                        }))
                    },
                    _noop: function() {
                        Object.getOwnPropertyNames(i).forEach((function(e) {
                            i[e] = function() {}
                        }))
                    }
                };
                t.Z = i
            },
            807: function(e, t, i) {
                "use strict";
                i.d(t, {
                    Z: function() {
                        return m
                    }
                });
                var n = i(4918),
                    o = i(2399),
                    a = i(7668),
                    r = i(2602),
                    s = i(138),
                    l = i(2218),
                    c = AudioEye.productConfig,
                    u = new n.Z("carousels"),
                    d = {
                        classes: {
                            all_slides: "ae-carousel-slide",
                            inactive_slide: "ae-carousel-inactive-slide",
                            original: "carousel-original",
                            popup: "ae-carousel-popup",
                            inner_container: "ae-carousel-popup-inner",
                            modal_active: "carousel-modal-active",
                            list: "ae-carousel-list"
                        },
                        globalSettings: {
                            _defaults: {
                                "width-reference": "window",
                                "width-ratio": 1,
                                "margin-width": 0,
                                "set-inner-width": !0
                            },
                            getters: null,
                            get: function(e) {
                                if (this.getters && window.ae_jQuery.isFunction(this.getters[e])) {
                                    var t = this.getters[e]();
                                    if (void 0 !== t) return t
                                }
                                return this._defaults[e]
                            }
                        },
                        isMarkedCarousel: function(e) {
                            return s.Z.is(window.ae_jQuery(e), d.classes.original)
                        },
                        getConfig: function(e) {
                            if (!1 === Array.isArray(c.carousels)) return c.carousels;
                            var t = e.attr("data-ae-carousel-index");
                            return c.carousels[t] || (u.info("No carousel config found for index: " + t), !1)
                        },
                        isModalOpen: function() {
                            return window.ae_jQuery(s.Z.selector(this.classes.modal_active)).length > 0
                        },
                        activeModal: function() {
                            return window.ae_jQuery("." + this.classes.popup)
                        },
                        isMatch: function(e, t) {
                            var i = t.data("carouselOriginal");
                            return !(!i || !i.is(e))
                        },
                        getAccessibleCarouselLink: function(e) {
                            return e && e.length ? window.ae_jQuery(e).data("ae_accessible_carousel_link") : (u.error("Cannot get the popup associated to carousel"), !1)
                        },
                        getPopup: function(e) {
                            return e && e.length ? window.ae_jQuery(e).data("ae_carousel_popup") : (u.error("Cannot get the popup associated with the carousel"), !1)
                        },
                        destroy: function(e) {
                            if (!e || !e.length) return u.error("Cannot destroy carousel - no element passed"), !1;
                            var t = this.getPopup(e),
                                i = this.getAccessibleCarouselLink(e);
                            t && t.remove(), i && i.remove(), window.ae_jQuery(document.body).find("#ae-modal-overlay").remove()
                        },
                        build: function(e, t) {
                            if (o.Z.dispatchEvent("BeforeCarouselBuild"), t = window.ae_jQuery.extend({
                                    loopTabs: !1
                                }, t), !(e = window.ae_jQuery(e)).length) return u.error("Cannot build carousel - no element passed"), !1;
                            o.Z.isModuleActive("reader") || s.Z.set(window.ae_jQuery(document.body), this.classes.modal_active);
                            var i = d.getConfig(e);
                            if (e.next().hasClass(this.classes.popup)) return d.redraw(e.next()), e.next();
                            var n = d.buildSlides(e, i.slides, i["click-proxy"]);
                            if (!n) return !1;
                            var a = d.buildPopup(n).insertAfter(e);
                            e.data("ae_carousel_popup", a), d.associateOrig(a, e), window.ae_jQuery("#ae_app").register("BeforeModuleActivate.carousel", d.handleModuleActivateEvents), window.ae_jQuery("#ae_app").register("AfterModuleDeactivate.carousel", d.handleModuleDeactivateEvents), t.loopTabs && a.register("keydown.carousels", o.Z.loopTabs);
                            var r = d.buildIteratorControls("prev", o.Z.localize(i.prev_slide)),
                                l = d.buildIteratorControls("next", o.Z.localize(i.next_slide)),
                                c = d.buildTopInfo();
                            a.children().wrapAll('<div class="ae-carousel-stage" />'), r.prependTo(a), l.appendTo(a), c.prependTo(a);
                            var m = 500;
                            return "desktop" !== AudioEye.device && (m = 1), a.find(".ae-carousel-prev").on("click", (function(t) {
                                d.animatePrev(t, n, m, a, e)
                            })), a.find(".ae-carousel-next").on("click", (function(t) {
                                d.animateNext(t, n, m, a, e)
                            })), d.setControlText(a, i, 1), a.children().wrapAll('<div class="ae-carousel-popup-inner" />'), d.makeModal(a), d.addStyles(), d.redraw(a), o.Z.dispatchEvent("AfterCarouselBuild"), a[0]
                        },
                        setControlText: function(e, t, i) {
                            var n = e.data("carouselOriginal");
                            n ? i ? t ? d.getSlideCountTemplate(n, t).done((function(t) {
                                var n = e.find(".ae-carousel-count"),
                                    o = d.getSlideTotal(e),
                                    a = t.replace("{{num}}", i).replace("{{total}}", o);
                                n.text(a)
                            })) : u.error("No config passed. Cannot set control text.") : u.error("No slide number provided. Cannot set control text.") : u.error("No original carousel assocation available. Cannot set control text")
                        },
                        getSlideCountTemplate: function(e, t) {
                            var i = window.ae_jQuery.Deferred(),
                                n = i.promise();
                            return t.slide_count || u.error("carousel config missing slide_count"), t.slide_count[AudioEye.lang] ? (i.resolve(t.slide_count[AudioEye.lang]), n) : (d.refreshConfigLang().then((function() {
                                var t = d.getConfig(e);
                                return t ? o.Z.localize(t.slide_count) ? void i.resolve(o.Z.localize(t.slide_count)) : (u.error("Returned carousel config is mal-formed"), void i.reject()) : (u.error("No matching configuration found"), void i.reject())
                            })), n)
                        },
                        refreshConfigLang: function() {
                            var e = window.ae_jQuery.Deferred(),
                                t = e.promise();
                            return o.Z.getUIData("carousels").then((function(t) {
                                window.ae_jQuery.extend(!0, c.carousels, t), e.resolve(c.carousels)
                            })), t
                        },
                        animateNext: function(e, t, i, n, o) {
                            e.preventDefault(), e.stopPropagation();
                            var a = t.children("li:first").outerWidth();
                            t.children("li:first").next("li").removeClass(d.classes.inactive_slide), t.animate({
                                left: -a
                            }, i, (function() {
                                t.children("li:first").appendTo(t), t.css("left", ""), d.hideRemaining(t), d.updateAfterSlideChange("next", t, n, o)
                            }))
                        },
                        animatePrev: function(e, t, i, n, o) {
                            e.preventDefault(), e.stopPropagation();
                            var a = t.children("li:first").outerWidth();
                            t.children("li:last").prependTo(t).removeClass(d.classes.inactive_slide), t.css("left", -a), t.animate({
                                left: 0
                            }, i, (function() {
                                t.css("left", ""), d.hideRemaining(t), d.updateAfterSlideChange("prev", t, n, o)
                            }))
                        },
                        hideRemaining: function(e) {
                            e.children("li").not("li:first").addClass(d.classes.inactive_slide)
                        },
                        updateAfterSlideChange: function(e, t, i, n) {
                            i.trigger({
                                type: "carouselAnimate",
                                direction: "next"
                            }), d.setControlText(i, d.getConfig(n), t.children("li:first").attr("data-slide-number"))
                        },
                        handleModuleActivateEvents: function(e) {
                            e.detail.module && "reader" === e.detail.module ? (s.Z.unset(window.ae_jQuery(document.body), d.classes.modal_active), d.cleanUpModalCarousel()) : e.detail.module && "player" === e.detail.module && d.cleanUpModalCarousel()
                        },
                        handleModuleDeactivateEvents: function(e) {
                            !e.detail.module || "reader" !== e.detail.module && "player" !== e.detail.module || (s.Z.unset(window.ae_jQuery(document.body), d.classes.modal_active), d.cleanUpModalCarousel())
                        },
                        cleanUpModalCarousel: function() {
                            var e = window.ae_jQuery(".ae-carousel-popup");
                            e.length && d.close(e)
                        },
                        getSlideTotal: function(e) {
                            return d.getSlides(e).length
                        },
                        getNextSlide: function(e) {
                            return e.children("li").eq(1)
                        },
                        getPrevSlide: function(e) {
                            return e.children("li:last")
                        },
                        showSlide: function(e) {
                            e.removeClass(d.classes.inactive_slide)
                        },
                        showNextSlide: function(e) {
                            return o.Z.sequence([d.getNextSlide, d.showSlide])(e)
                        },
                        associateOrig: function(e, t) {
                            e.data("carouselOriginal", t)
                        },
                        getCarouselLink: function(e) {
                            return window.ae_jQuery("a.ae-accessible-carousel-link").filter((function() {
                                return window.ae_jQuery(this).data("carousel_original").is(e)
                            }))
                        },
                        buildSlides: function(e, t, i) {
                            if (!e || !e.jquery) return u.error("cannot buildSlides without valid carousel"), !1;
                            var n, o;
                            if (t && (n = e.outerFind(t)), n && n.length > 0 ? n.each((function() {
                                    var e = d.cloneAndProxy(window.ae_jQuery(this), i);
                                    r.Z.containsAccessibleText(window.ae_jQuery(this)) ? (e.removeAttr("aria-hidden"), window.ae_jQuery(this).is("li") || (e = window.ae_jQuery("<li />").append(e)), e.find(s.Z.selector("exclude")).remove(), e.find("*:not([id^='ae-'],[class*='ae-'])").addBack().removeAttr("style data-rmode-style id class"), o || (o = window.ae_jQuery("<ul />")), o.append(e)) : u.info("no accessible content found in slide: ", this)
                                })) : o = e.is("ul") ? d.cloneAndProxy(e, i) : d.cloneAndProxy(e.find("ul").eq(0), i), !o || 0 === o.length) {
                                var a = e.attr("id") ? e.attr("id") : e[0].tagName + "." + e[0].className.split(" ").join(".");
                                return u.error("unable to create carousel; no accessible content found in " + a), !1
                            }
                            var l = o.find("li").eq(0).nextAll().addBack();
                            return l.attr("data-slide-number", (function(e) {
                                return e + 1
                            })), l.addClass(d.classes.all_slides), d.hideRemaining(o), o.attr({
                                tabindex: -1,
                                class: this.classes.list
                            }), o
                        },
                        cloneAndProxy: function(e, t) {
                            var i, n, o;
                            return o = e.clone(), t ? (i = d._allBtnsAndLinks(o), n = d._allBtnsAndLinks(e), i.each((function(e) {
                                window.ae_jQuery(this).clickOrEnter("carousels", (function() {
                                    d._redirectBtnClick(n.eq(e))
                                }))
                            })), o) : o
                        },
                        _redirectBtnClick: function(e) {
                            e.length ? (d.close(e.closest(".ae-carousel-popup")), e[0].click()) : u.error("Could not find original carousel button")
                        },
                        _allBtnsAndLinks: function(e) {
                            return window.ae_jQuery().add(r.Z.queryByRole("find", "button", e)).add(r.Z.queryByRole("find", "link", e)).add(e.find("a"))
                        },
                        buildPopup: function(e) {
                            return window.ae_jQuery("<div></div>").append(e).addClass("ae-carousel-popup ae-carousel").attr({
                                "data-ae-blurbtype": "carousel",
                                role: "group",
                                "aria-label": "Carousel",
                                tabindex: "-1"
                            })
                        },
                        buildCount: function() {
                            return window.ae_jQuery("<div></div>").attr({
                                class: "ae-carousel-count",
                                "aria-live": "polite",
                                "aria-atomic": "true"
                            })
                        },
                        buildIteratorControls: function(e, t) {
                            var i = window.ae_jQuery('<div class="ae-carousel-controls"></div>');
                            return i.append('<button class="ae-carousel-' + e + '" aria-label="' + t + '">\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="44px" height="44px" viewBox="0 0 44 44" version="1.1">\n    \x3c!-- Generator: Sketch 61.2 (89653) - https://sketch.com --\x3e\n    <title>Components/Forms/Controls/Left-Arrow-Box</title>\n    <desc>Created with Sketch.</desc>\n    <defs>\n        <polygon id="ae-path-1-left-arrow" points="20.607 5 10 15.606 10.002 15.609 10 15.611 20.607 26.217 22.728 24.097 22.728 24.095 14.241 15.609 22.728 7.123 22.728 7.121"/>\n    </defs>\n    <g id="Components/Forms/Controls/Left-Arrow-Box" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Left">\n            <rect id="Rectangle" stroke="#C2C2C2" fill="#FFFFFF" x="0.5" y="0.5" width="43" height="43"/>\n            <g id="icons/2-Functional/Arrows/Direction/2-Left" transform="translate(6.000000, 6.000000)">\n                <g id="icon">\n                    <rect id="Rectangle-Copy" fill="#D8D8D8" opacity="0" x="0" y="0" width="32" height="32"/>\n                    <mask id="ae-mask-2-left-arrow" fill="white">\n                        <use xlink:href="#ae-path-1-left-arrow"/>\n                    </mask>\n                    <use id="Fill-1" fill="#231F20" xlink:href="#ae-path-1-left-arrow"/>\n                    <g id="Colors/1-Primary/Dark-Black" mask="url(#ae-mask-2-left-arrow)" fill="#1F1F1F">\n                        <rect id="Rectangle" x="0" y="0" width="32" height="32"/>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>\n</button>'), i
                        },
                        buildTopInfo: function() {
                            var e = d.buildCount(),
                                t = window.ae_jQuery('<div class="ae-carousel-topinfo"></div>');
                            return t.append(e), t
                        },
                        addClose: function(e) {
                            var t = window.ae_jQuery("<button></button>").attr({
                                class: "ae-carousel-close",
                                "aria-label": "Close carousel"
                            });
                            t.append('\n<svg width="71px" height="71px" viewBox="0 0 71 71" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    \x3c!-- Generator: Sketch 61.2 (89653) - https://sketch.com --\x3e\n    <title>Components/Modals/Modal-Close</title>\n    <desc>Created with Sketch.</desc>\n    <defs>\n        <polygon id="ae-path-1-close" points="16.132 14.01 10.121 8 8 10.12 14.01 16.131 8 22.142 10.121 24.263 16.132 18.253 22.142 24.263 24.263 22.142 18.252 16.131 24.263 10.12 22.142 8"></polygon>\n    </defs>\n    <g id="•-Modals" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="Components/Modals/Corousel/1-Desktop" transform="translate(-1265.000000, 0.000000)">\n            <g id="Components/Modals/Modal-Close" transform="translate(1265.000000, 0.000000)">\n                <g id="Modal-Close-Btn">\n                    <circle id="Oval" stroke="#FFFFFF" stroke-width="9" fill="#F0F0F0" cx="35.5" cy="35.5" r="31"></circle>\n                    <g id="icons/2-Functional/Control/Close-Cricle-Fill" transform="translate(20.000000, 19.000000)">\n                        <g id="icon">\n                            <rect id="Rectangle-Copy" fill="#D8D8D8" opacity="0" x="0" y="0" width="32" height="32"></rect>\n                            <circle id="Oval" fill="#1F1F1F" cx="16" cy="16" r="16"></circle>\n                            <mask id="ae-mask-2-close" fill="white">\n                                <use xlink:href="#ae-path-1-close"></use>\n                            </mask>\n                            <use id="Fill-1" fill="#231F20" xlink:href="#ae-path-1-close"></use>\n                            <g id="Colors/1-Primary/White" mask="url(#ae-mask-2-close)" fill="#FFFFFF">\n                                <rect id="Rectangle" x="0" y="0" width="32" height="32" rx="3"></rect>\n                            </g>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </g>\n    </g>\n</svg>'), t.clickOrEnter("carousels", d.closeClicked), e.prepend(t)
                        },
                        closeClicked: function(e) {
                            e.preventDefault();
                            var t = window.ae_jQuery(e.target).closest(".ae-carousel-popup");
                            t.length ? d.close(t) : u.error("Close failed - could not find carousel parent")
                        },
                        close: function(e) {
                            if (o.Z.isModuleActive("reader")) return !0;
                            e.remove(), window.ae_jQuery("#ae-modal-overlay").remove(), s.Z.unset(window.ae_jQuery(document.body), d.classes.modal_active), window.ae_jQuery.unregister("carousel"), a.Z.removeAll("carousels");
                            var t = window.ae_jQuery("a.ae-accessible-carousel-link-clicked");
                            return t[0] && (t[0].focus(), t.removeClass("ae-accessible-carousel-link-clicked")), !0
                        },
                        addStyles: function() {
                            if (l.Z.loadAggregate(), window.ae_jQuery("#ae_carousels_css").length) return !1;
                            var e = window.ae_jQuery("<link>").attr({
                                id: "ae_carousels_css",
                                rel: "stylesheet",
                                href: AudioEye.client_url + "/css/carousel.css?cb=" + AudioEye.cb,
                                class: "ae-style",
                                type: "text/css",
                                media: "screen",
                                charset: "utf-8"
                            });
                            window.ae_jQuery("#ae_app").append(e)
                        },
                        makeModal: function(e) {
                            var t;
                            if (e.addClass("ae-carousel-modal"), 0 === window.ae_jQuery("#ae-modal-overlay").length && (t = window.ae_jQuery('<div id="ae-modal-overlay"></div>'), e.after(t)), a.Z.add("esc", "carousels", o.Z.bind(this, this.close, e), {
                                    type: "keydown",
                                    disable_in_input: !0,
                                    target: document
                                }), !o.Z.isModuleActive("player") && !o.Z.isModuleActive("reader")) {
                                d.addClose(e);
                                var i = e.find(".ae-carousel-close");
                                o.Z.pollUntilVisible(i, (function() {
                                    AudioEye.focusElement(i)
                                }))
                            }
                        },
                        redraw: function(e) {
                            if (e && e.length) {
                                var t = d.getList(e),
                                    i = d.getSlides(e).length,
                                    n = t.children("li:first").outerWidth();
                                0 === n && (n = 376);
                                var o = n * i;
                                t.css("width", o), t.find("img").removeAttr("width height").each((function() {
                                    window.ae_jQuery(this).css({
                                        width: "",
                                        height: ""
                                    }).wrap('<div class="ae-carousel-img-wrapper">')
                                })), "mobile" === AudioEye.device && e.find(".ae-carousel-controls").find("button").html('\n<svg width="32px" height="32px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n    \x3c!-- Generator: Sketch 61.2 (89653) - https://sketch.com --\x3e\n    <title>icons/2-Functional/Arrows/Chevron/2-Left</title>\n    <desc>Created with Sketch.</desc>\n    <defs>\n        <polygon id="ae-path-1-mobile-chevron" points="16.086 11 11 16.086 16.086 21.172 20.404 21.172 15.316 16.086 20.404 11"></polygon>\n    </defs>\n    <g id="icons/2-Functional/Arrows/Chevron/2-Left" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g id="icon">\n            <rect id="Rectangle-Copy" fill="#D8D8D8" opacity="0" x="0" y="0" width="32" height="32"></rect>\n            <mask id="ae-mask-2-mobile-chevron" fill="white">\n                <use xlink:href="#ae-path-1-mobile-chevron"></use>\n            </mask>\n            <use id="Fill-1" fill="#231F20" xlink:href="#ae-path-1-mobile-chevron"></use>\n            <g id="Colors/1-Primary/Dark-Black" mask="url(#ae-mask-2-mobile-chevron)" fill="#1F1F1F">\n                <rect id="Rectangle" x="0" y="0" width="32" height="32"></rect>\n            </g>\n        </g>\n    </g>\n</svg>')
                            } else u.error("Cannot redraw: no carousel element provided")
                        },
                        getSlides: function(e) {
                            return e.find("." + d.classes.all_slides)
                        },
                        getList: function(e) {
                            return e.find("ul." + d.classes.list).eq(0)
                        },
                        slideCount: function(e, t, i) {
                            return i.replace("{{num}}", e).replace("{{total}}", t)
                        },
                        mark: function(e, t) {
                            t || (t = []), !1 === Array.isArray(t) && (t = [t]), t.forEach((function(t, i) {
                                var n = e.outerFind(t.carousel);
                                n.length && (s.Z.set(n, "carousel-original"), n.attr("data-ae-carousel-index", i))
                            }))
                        }
                    },
                    m = d
            },
            7422: function(e, t, i) {
                "use strict";
                var n = i(2399),
                    o = i(7786),
                    a = i(4918),
                    r = i(7733),
                    s = i.n(r),
                    l = new a.Z("cookies"),
                    c = {
                        persistentSettingsTimeout: 3e3,
                        persistentSettingsCompleted: !1,
                        set: function(e, t, i, n) {
                            window == window.top && (c._isPersistentCookie(e) && "aeatstartmessage" != e && (o.Z.set("aelastsite", AudioEye.encrypted_site_id, 1e3, "days"), c._savePersistentCookie("aelastsite", AudioEye.encrypted_site_id, 1e3, "days")), o.Z.set(e, t, i, n), c._sendCookieUpdatetoIframes(), c._savePersistentCookie(e, t, i, n))
                        },
                        _sendCookieUpdatetoIframes: function() {
                            var e = n.Z.iframes.getRegisteredWindows();
                            if (e.length)
                                for (var t = c._topAECookies(), i = 0; i < e.length; i++) {
                                    var o = e[i];
                                    n.Z.sendFrameAPIRequest(o, "_cookies", "_cookieUpdateFromTop", {
                                        cookies: t
                                    })
                                }
                        },
                        get: function(e) {
                            var t;
                            return c.init_sync_complete && c._third_party_iframe && (t = c._topCookiesAsString), o.Z.get(e, t)
                        },
                        _topAECookies: function() {
                            var e, t = "",
                                i = this.aeCookiesAsObject();
                            return Object.keys(i).forEach((function(n) {
                                (e = i[n]) && t.length ? t += "; " + n + "=" + e : e && (t += n + "=" + e)
                            })), t
                        },
                        aeCookiesAsObject: function() {
                            for (var e = c.getAllCookiesList(), t = {}, i = document.cookie.split("; "), n = 0; n < i.length; n++) {
                                var o = i[n].split("=");
                                e.indexOf(o[0]) > -1 && (t[o[0]] = o[1])
                            }
                            return t
                        },
                        all: function() {
                            var e;
                            return c.init_sync_complete && c._third_party_iframe && (e = c._topCookiesAsString), o.Z.all(e)
                        },
                        _topCookiesAsString: "",
                        _cwcs_promise_resolver: function() {},
                        _first_party_iframe: null,
                        _third_party_iframe: null,
                        crossWindowSyncInit: function(e) {
                            "function" == typeof e && (c._cwcs_promise_resolver = e, c._persistentSettingsInit().then((function() {
                                window != window.top ? c._broker_init() : e("running in top window")
                            })))
                        },
                        _nonpersistentCookieList: ["_aeaid", "ae_version", "aebuild", "aeactive", "aefirstmodule"],
                        _persistentCookieList: s(),
                        getAllCookiesList: function() {
                            return c._persistentCookieList.concat(c._nonpersistentCookieList)
                        },
                        _persistentSettingsInit: function() {
                            if (window != window.top) return Promise.resolve();
                            var e = new Promise((function(e) {
                                c._persistentSettingsResolve = e
                            }));
                            return c._addPersistentStorageIframe(), setTimeout((function() {
                                c._persistentSettingsAutoResolve()
                            }), c.persistentSettingsTimeout), e
                        },
                        _persistentSettingsAutoResolve: function() {
                            c.persistentSettingsCompleted || (c.persistentSettingsCompleted = !0, l.info("Persistent settings auto-resolved after " + c.persistentSettingsTimeout + " milliseconds"), c._persistentSettingsResolve())
                        },
                        _addPersistentStorageIframe: function() {
                            var e = AudioEye.client_url + "/frame/cookieStorage.html?build=" + AudioEye.build + "&pscb=" + AudioEye.pscb,
                                t = document.createElement("iframe");
                            t.id = "ae-userStateStore", t.style.display = "none", t.style.height = 0, t.style.width = 0, t.src = e, document.body.appendChild(t)
                        },
                        _persistentCookies: function() {
                            var e, t = {};
                            return c._persistentCookieList.forEach((function(i) {
                                (e = c.get(i)) && (t[i] = e)
                            })), t
                        },
                        _savePersistentCookie: function(e, t, i, n) {
                            if (c._isPersistentCookie(e)) {
                                var a, r = encodeURIComponent(t);
                                isFinite(i) && (a = o.Z._expires(i, n || "days"));
                                var s = {
                                    cookie: e + "=" + r + (a ? "; expires=" + a : "") + "; path=/",
                                    object: "AudioEye",
                                    type: "savePersistentCookie"
                                };
                                s = JSON.stringify(s);
                                var l = document.getElementById("ae-userStateStore");
                                l && l.contentWindow.postMessage(s, "*")
                            }
                        },
                        _saveAllPersistentCookies: function() {
                            var e = c._persistentCookies();
                            Object.keys(e).forEach((function(t) {
                                c._savePersistentCookie(t, e[t], 1e3, "days")
                            }))
                        },
                        _isPersistentCookie: function(e) {
                            return c._persistentCookieList.indexOf(e) > -1
                        },
                        _onlyPersistentCookies: function(e) {
                            if (!e) return {};
                            var t, i = {};
                            return e.split("; ").forEach((function(e) {
                                t = e.split("=")[0], c._isPersistentCookie(t) && (i[t] = decodeURIComponent(e.split("=")[1]))
                            })), i
                        },
                        _receivePersistentSettings: function(e) {
                            if (!c.persistentSettingsCompleted) {
                                c.persistentSettingsCompleted = !0;
                                var t = c._onlyPersistentCookies(e),
                                    i = t.aelastsite;
                                if (i && i != AudioEye.encrypted_site_id) {
                                    var n = t.aepersistsettings,
                                        a = AudioEye.productConfig["persist-settings"].persist;
                                    "on" === n ? c._restorePersistentSettings(t) : "off" === n ? o.Z.set("aepersistsettings", "off", 1e3, "days") : !0 === a && c._restorePersistentSettings(t)
                                }
                                c._persistentSettingsResolve()
                            }
                        },
                        _restorePersistentSettings: function(e) {
                            Object.keys(e).forEach((function(t) {
                                c.set(t, e[t], 1e3, "days")
                            }))
                        },
                        _broker_init: function() {
                            if (n.Z.isIE()) try {
                                c._first_party_iframe = window != window.top && !0, c._third_party_iframe = !1
                            } catch (e) {
                                c._first_party_iframe = !1, c._third_party_iframe = window != window.top && !0
                            } else c._first_party_iframe = window != window.top && Object.keys(window.top.location).indexOf("host") > -1, c._third_party_iframe = window != window.top && -1 === Object.keys(window.top.location).indexOf("host");
                            n.Z.sendFrameAPIRequest(window.top, "_cookies", "_cookieRequestFromIframe").done((function(e, t) {
                                if ("true" === e) {
                                    if (c.init_sync_complete) return;
                                    c.init_sync_complete = !0, c._first_party_iframe ? c._cwcs_promise_resolver("resolved in first-party iframe after receiving a response to the cookie request") : c._third_party_iframe && (c._cwcs_promise_resolver("resolved in third-party iframe after receiving a response to the cookie request"), c._topCookiesAsString = t.cookies)
                                }
                            }))
                        },
                        init_sync_complete: !1,
                        _cookieRequestFromIframe: function() {
                            return {
                                detail: {
                                    cookies: window.document.cookie
                                },
                                status: "true"
                            }
                        },
                        _cookieUpdateFromTop: function(e) {
                            this._third_party_iframe && (c._topCookiesAsString = e.cookies)
                        },
                        _sendCookiesToNewIframe: function(e) {
                            if (!e.activated.sentCookies) {
                                var t = c._topAECookies();
                                e.activated.done((function() {
                                    n.Z.sendFrameAPIRequest(e.element.contentWindow, "_cookies", "_cookiePushFromTop", {
                                        cookies: t
                                    })
                                })), e.activated.sentCookies = !0
                            }
                        },
                        _cookiePushFromTop: function(e) {
                            this.init_sync_complete || (this._third_party_iframe ? (c._topCookiesAsString = e.cookies, this.init_sync_complete = !0, this._cwcs_promise_resolver("resolved in third-party iframe after receiving cookies via direct push from top window")) : this._first_party_iframe && (this.init_sync_complete = !0, this._cwcs_promise_resolver("resolved in first-party iframe after receiving cookies via direct push from top window")))
                        }
                    };
                window.testScope && (window.testScope.cookies = c, c._nonpersistentCookieList.push("aecwcstest"), c._nonpersistentCookieList.push("cwcs_running_value"), c._cross_window_cookie_read = function(e) {
                    return {
                        detail: {
                            value: c.get(e.cookieName)
                        },
                        status: !0
                    }
                }), t.Z = c
            },
            7786: function(e, t) {
                "use strict";
                var i = {
                    _doc: {
                        get cookie() {
                            return document.cookie
                        },
                        set cookie(e) {
                            document.cookie = e
                        }
                    },
                    set: function(e, t, n, o) {
                        var a = encodeURIComponent(t);
                        isFinite(n) && (a += "; expires=" + i._expires(n, o || "days")), a += "; path=/", i._doc.cookie = e + "=" + a
                    },
                    get: function(e, t) {
                        var n, o, a;
                        return n = i._doc.cookie, t && (n = t), -1 === (o = n.indexOf(" " + e + "=")) && (o = n.indexOf(e + "=")), -1 === o ? n = null : (o = n.indexOf("=", o) + 1, -1 === (a = n.indexOf(";", o)) && (a = n.length), n = decodeURIComponent(n.substring(o, a))), n
                    },
                    all: function(e) {
                        var t = i._doc.cookie;
                        e && (t = e);
                        for (var n = t.split("; "), o = {}, a = 0; a < n.length; a++) {
                            var r = n[a].split("=");
                            o[r[0]] = r[1]
                        }
                        return o
                    },
                    _expires: function(e, t) {
                        var n = i._currentDate();
                        if ("days" === t) n.setDate(n.getDate() + e);
                        else {
                            if ("minutes" !== t) throw new Error("Invalid unitType passed to _expires()");
                            n.setTime(n.getTime() + 60 * e * 1e3)
                        }
                        return n.toUTCString()
                    },
                    _currentDate: function() {
                        return new Date
                    }
                };
                window.testScope && (window.testScope.cookiesCore = i), t.Z = i
            },
            8179: function() {
                function e(e, t) {
                    return "function" == typeof e ? e.call(t) : e
                }

                function t(e, t) {
                    this.$element = window.ae_jQuery(e), this.options = t, this.enabled = !0, this.fixTitle()
                }
                t.prototype = {
                    show: function() {
                        var t = this.getTitle();
                        if (t && this.enabled) {
                            var i = this.tip();
                            i.find(".tipsy-inner")[this.options.html ? "html" : "text"](t), i[0].className = "tipsy", i.remove().css({
                                top: 0,
                                left: 0,
                                visibility: "hidden",
                                display: "block"
                            }).prependTo(document.body);
                            var n, o = window.ae_jQuery.extend({}, this.$element.offset(), {
                                    width: this.$element[0].offsetWidth,
                                    height: this.$element[0].offsetHeight
                                }),
                                a = i[0].offsetWidth,
                                r = i[0].offsetHeight,
                                s = e(this.options.gravity, this.$element[0]);
                            switch (s.charAt(0)) {
                                case "n":
                                    n = {
                                        top: o.top + o.height + this.options.offset,
                                        left: o.left + o.width / 2 - a / 2
                                    };
                                    break;
                                case "s":
                                    n = {
                                        top: o.top - r - this.options.offset,
                                        left: o.left + o.width / 2 - a / 2
                                    };
                                    break;
                                case "e":
                                    n = {
                                        top: o.top + o.height / 2 - r / 2,
                                        left: o.left - a - this.options.offset
                                    };
                                    break;
                                case "w":
                                    n = {
                                        top: o.top + o.height / 2 - r / 2,
                                        left: o.left + o.width + this.options.offset
                                    }
                            }
                            2 == s.length && ("w" == s.charAt(1) ? n.left = o.left + o.width / 2 - 15 : n.left = o.left + o.width / 2 - a + 15), i.css(n).addClass("tipsy-" + s), i.find(".tipsy-arrow")[0].className = "tipsy-arrow tipsy-arrow-" + s.charAt(0), this.options.className && i.addClass(e(this.options.className, this.$element[0])), this.options.fade ? i.stop().css({
                                opacity: 0,
                                display: "block",
                                visibility: "visible"
                            }).animate({
                                opacity: this.options.opacity
                            }) : i.css({
                                visibility: "visible",
                                opacity: this.options.opacity
                            })
                        }
                    },
                    hide: function() {
                        this.options.fade ? this.tip().stop().fadeOut((function() {
                            window.ae_jQuery(this).remove()
                        })) : this.tip().remove()
                    },
                    fixTitle: function() {
                        var e = this.$element;
                        (e.attr("title") || "string" != typeof e.attr("original-title")) && e.attr("original-title", e.attr("title") || "").removeAttr("title")
                    },
                    getTitle: function() {
                        var e, t = this.$element,
                            i = this.options;
                        return this.fixTitle(), "string" == typeof(i = this.options).title ? e = t.attr("title" == i.title ? "original-title" : i.title) : "function" == typeof i.title && (e = i.title.call(t[0])), (e = ("" + e).replace(/(^\s*|\s*$)/, "")) || i.fallback
                    },
                    tip: function() {
                        if (!this.$tip) {
                            var e = window.ae_jQuery('<div class="tipsy"></div>'),
                                t = window.ae_jQuery('<div class="tipsy-arrow"></div>');
                            this.options.arrowBorder && t.append('<div class="tipsy-arrow-inner"></div>'), e.append(t), e.append('<div class="tipsy-inner"></div>'), e.data("tipsy-pointee", this.$element[0]), this.$tip = e
                        }
                        return this.$tip
                    },
                    validate: function() {
                        this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
                    },
                    enable: function() {
                        this.enabled = !0
                    },
                    disable: function() {
                        this.enabled = !1
                    },
                    toggleEnabled: function() {
                        this.enabled = !this.enabled
                    }
                }, window.ae_jQuery.fn.tipsy = function(e) {
                    if (!0 === e) return this.data("tipsy");
                    if ("string" == typeof e) {
                        var i = this.data("tipsy");
                        return i && i[e](), this
                    }

                    function n(i) {
                        var n = window.ae_jQuery.data(i, "tipsy");
                        return n || (n = new t(i, window.ae_jQuery.fn.tipsy.elementOptions(i, e)), window.ae_jQuery.data(i, "tipsy", n)), n
                    }
                    if ((e = window.ae_jQuery.extend({}, window.ae_jQuery.fn.tipsy.defaults, e)).live || this.each((function() {
                            n(this)
                        })), "manual" != e.trigger) {
                        var o = e.live ? "live" : "bind",
                            a = "hover" == e.trigger ? "mouseenter" : "focus",
                            r = "hover" == e.trigger ? "mouseleave" : "blur";
                        this[o](a, (function() {
                            var t = n(this);
                            t.hoverState = "in", 0 == e.delayIn ? t.show() : (t.fixTitle(), setTimeout((function() {
                                "in" == t.hoverState && t.show()
                            }), e.delayIn))
                        }))[o](r, (function() {
                            var t = n(this);
                            t.hoverState = "out", 0 == e.delayOut ? t.hide() : setTimeout((function() {
                                "out" == t.hoverState && t.hide()
                            }), e.delayOut)
                        }))
                    }
                    return this
                }, window.ae_jQuery.fn.tipsy.defaults = {
                    arrowBorder: !1,
                    className: null,
                    delayIn: 0,
                    delayOut: 0,
                    fade: !1,
                    fallback: "",
                    gravity: "n",
                    html: !1,
                    live: !1,
                    offset: 0,
                    opacity: .8,
                    title: "title",
                    trigger: "hover"
                }, window.ae_jQuery.fn.tipsy.revalidate = function() {
                    window.ae_jQuery(".tipsy").each((function() {
                        var e = window.ae_jQuery.data(this, "tipsy-pointee");
                        e && function(e) {
                            for (; e = e.parentNode;)
                                if (e == document) return !0;
                            return !1
                        }(e) || window.ae_jQuery(this).remove()
                    }))
                }, window.ae_jQuery.fn.tipsy.elementOptions = function(e, t) {
                    return window.ae_jQuery.metadata ? window.ae_jQuery.extend({}, t, window.ae_jQuery(e).metadata()) : t
                }, window.ae_jQuery.fn.tipsy.autoNS = function() {
                    return window.ae_jQuery(this).offset().top > window.ae_jQuery(document).scrollTop() + window.ae_jQuery(window).height() / 2 ? "s" : "n"
                }, window.ae_jQuery.fn.tipsy.autoWE = function() {
                    return window.ae_jQuery(this).offset().left > window.ae_jQuery(document).scrollLeft() + window.ae_jQuery(window).width() / 2 ? "e" : "w"
                }, window.ae_jQuery.fn.tipsy.autoBounds = function(e, t) {
                    return function() {
                        var i = {
                                ns: t[0],
                                ew: t.length > 1 && t[1]
                            },
                            n = window.ae_jQuery(document).scrollTop() + e,
                            o = window.ae_jQuery(document).scrollLeft() + e,
                            a = window.ae_jQuery(this);
                        return a.offset().top < n && (i.ns = "n"), a.offset().left < o && (i.ew = "w"), window.ae_jQuery(window).width() + window.ae_jQuery(document).scrollLeft() - a.offset().left < e && (i.ew = "e"), window.ae_jQuery(window).height() + window.ae_jQuery(document).scrollTop() - a.offset().top < e && (i.ns = "s"), i.ns + (i.ew ? i.ew : "")
                    }
                }
            },
            4918: function(e, t, i) {
                "use strict";
                var n = i(7786),
                    o = "color: red; font-weight: bold",
                    a = "color: orange",
                    r = {
                        error: 0,
                        info: 1,
                        debug: 2
                    };

                function s() {
                    return r[l._level]
                }

                function l(e) {
                    this.module_name = e
                }
                l.init = function() {
                    var e = l.getInitialLevel(n.Z.get("aebuild"), !!document.getElementById("ae_versioning"), n.Z.get("aelogging"));
                    l.setLevel(e, !1), window.ae_jQuery(document).on("audioeyeLogLevelChange", (function(e) {
                        l.setLevel(e.detail.level, !0)
                    })), window.ae_jQuery(document).on("audioeyeVersioningActive", (function() {
                        l.setLevel(l.getInitialLevel(n.Z.get("aebuild"), !0, n.Z.get("aelogging")), !1)
                    }))
                }, l.getInitialLevel = function(e, t, i) {
                    var o;
                    return o = "dev" === e || "debug" === e ? "debug" : t ? "info" : "error", i && -1 != Object.keys(r).indexOf(i) ? o = i : i && n.Z.set("aelogging", "error", 0), o
                }, l.setLevel = function(e, t) {
                    if (-1 === Object.keys(r).indexOf(e)) throw this._log("Logging level must be one of (" + Object.keys(r).join(", ") + ")", void 0, o, "Logger"), new Error('Invalid level "' + e + '"');
                    l._level = e, t && n.Z.set("aelogging", e, 9125), s() >= 1 && console.log("AE Logging set to: " + e)
                }, l.prototype.error = function(e, t) {
                    l._log(e, t, o, this.module_name, r.error)
                }, l.prototype.internalError = function(e, t) {
                    l._log(e, t, a, this.module_name, r.debug, !0)
                }, l.prototype.debug = function(e, t) {
                    2 === s() && l._log(e, t, a, this.module_name)
                }, l.prototype.info = function(e, t) {
                    s() >= 1 && l._log(e, t, "color: #0090f1", this.module_name)
                }, l._getCodeTrace = function(e) {
                    var t, i, n, o = "",
                        a = 1;
                    if (e || (e = n = new Error), "object" != typeof(t = e && e.stack ? e.stack.split("\n") : "")) return !1;
                    if (n && ("Error" === t[0] ? a += 3 : a += 2), !t[a]) return !1;
                    (i = t[a].match(/(http|https)(:\/\/)(.+)(:)(\d+)(:)(\d+)/g)) && i.length && (o = i[0]);
                    var r, s, l = {
                        line: (r = o.split(":"))[(s = r.length) - 2],
                        col: r[s - 1]
                    };
                    return {
                        pointer: o,
                        stack: t.slice(a),
                        line: l.line,
                        col: l.col
                    }
                }, l._log = function(e, t, i, n, o, a) {
                    var s, c = e,
                        u = l._getCodeTrace((s = t) && s.stack && s.message ? t : void 0);
                    n && (c = e + " :: " + n), (o === r.error || a) && l._dispatchErr(e, u), t ? (c += "\n   ", console.log("%c" + c, i, t, "\n   ", u.pointer)) : console.log("%c" + c, i, "\n   ", u.pointer)
                }, l._dispatchErr = function(e, t) {
                    var i = window.ae_jQuery.Event("audioeyeErrLogged");
                    e && t.stack && (i.detail = {
                        filename: t.pointer,
                        lineno: t.line,
                        colno: t.col,
                        error: {
                            message: e,
                            stack: t.stack
                        }
                    }, window.ae_jQuery(document).trigger(i))
                }, t.Z = l
            },
            138: function(e, t) {
                "use strict";
                t.Z = {
                    version: 1,
                    init: function(e) {
                        e || (e = "2"), this.version = parseInt(e), this.set = 1 === this.version ? this._setv1 : this._setv2, this.unset = 1 === this.version ? this._unsetv1 : this._unsetv2, this.unsetAll = 1 === this.version ? this._unsetAllv1 : this._unsetAllv2, this.selector = 1 === this.version ? this._selectorv1 : this._selectorv2, this.is = 1 === this.version ? this._isv1 : this._isv2
                    },
                    _setv1: function(e, t) {
                        (e = window.ae_jQuery(e)).addClass("ae-" + t)
                    },
                    _setv2: function(e, t) {
                        (e = window.ae_jQuery(e)).attr("data-audioeye-" + t, "")
                    },
                    _unsetv1: function(e, t) {
                        (e = window.ae_jQuery(e)).removeClass("ae-" + t)
                    },
                    _unsetv2: function(e, t) {
                        (e = window.ae_jQuery(e)).removeAttr("data-audioeye-" + t)
                    },
                    _unsetAllv1: function(e, t) {
                        var i = "ae-" + t;
                        window.ae_jQuery("." + i).removeClass(i)
                    },
                    _unsetAllv2: function(e) {
                        var t = "data-audioeye-" + e;
                        window.ae_jQuery("[" + t + "]").removeAttr(t)
                    },
                    _selectorv1: function(e) {
                        return ".ae-" + e
                    },
                    _selectorv2: function(e) {
                        return "[data-audioeye-" + e + "]"
                    },
                    _isv1: function(e, t) {
                        return (e = window.ae_jQuery(e)).hasClass("ae-" + t)
                    },
                    _isv2: function(e, t) {
                        return (e = window.ae_jQuery(e)).is("[data-audioeye-" + t + "]")
                    }
                }
            },
            54: function(e, t, i) {
                "use strict";
                var n = i(4918),
                    o = i(2399),
                    a = i(138),
                    r = new n.Z("modals"),
                    s = {
                        tabLoopActive: !1,
                        tabLoopContainerRecords: [],
                        enableTabLoop: function(e) {
                            if (e) {
                                if (this.tabLoopActive = !0, "string" == typeof e) {
                                    if (s.tabLoopContainerRecords.indexOf(e) > -1) return void r.info('WARNING: attempted to register tab-loop "' + e + '" but it is already registered');
                                    s.tabLoopContainerRecords.push(e)
                                } else window.ae_jQuery(e).each((function() {
                                    s.tabLoopContainerRecords.indexOf(this) > -1 ? r.info("WARNING: attempted to register tab-loop container but it is already registered", this) : s.tabLoopContainerRecords.push(this)
                                }));
                                r.info("Tab loop enabled for container: " + e), l()
                            } else r.error("Container should be provided, Cannot enableTabloop for empty selector.")
                        },
                        disableTabLoop: function(e) {
                            e ? (this.tabLoopContainerRecords = this.tabLoopContainerRecords.filter((function(t) {
                                return ("string" != typeof e || t !== e) && !window.ae_jQuery(t).is(e)
                            })), 0 === this.tabLoopContainerRecords.length && c()) : r.error("Container should be provided, Cannot disableTabloop for empty selector ")
                        },
                        mutations: function(e) {
                            if (this.tabLoopActive) {
                                for (var t = !1, i = 0; i < e.length; i++)
                                    if (this.getLoopContainer(e[i])) {
                                        t = !0;
                                        break
                                    }
                                t && this.refreshTabLoopHelperElements()
                            }
                        },
                        _disableAllTabLoops: function() {
                            this.tabLoopContainerRecords = [], c()
                        },
                        tabbingOutOfCrossOriginIframe: function(e) {
                            var t = !1;
                            return e = e || document.activeElement, this.tabLoopActive ? (window.ae_jQuery(e).hasClass("tabloophelperafter") && 0 === (t = window.ae_jQuery(e).prev("iframe")).length && (t = !1), window.ae_jQuery(e).hasClass("tabloophelperbefore") && 0 === (t = window.ae_jQuery(e).next("iframe")).length && (t = !1), this.refreshTabLoopHelperElements()) : window.ae_jQuery(".tabloophelper").remove(), t
                        },
                        refreshTabLoopHelperElements: function() {
                            window.ae_jQuery(".tabloophelper").remove(), s.allLoopContainers().each((function() {
                                window.ae_jQuery(this).find("iframe:visible").each((function() {
                                    var e = window.ae_jQuery(this);
                                    if (!(e.attr("style") && e.attr("style").indexOf("visibility: hidden") > -1)) {
                                        var t = window.ae_jQuery("<div tabindex='0' class='tabloophelper tabloophelperafter ae-compliance-indent'></div>");
                                        a.Z.set(t, "exclude"), e.after(t);
                                        var i = window.ae_jQuery("<div tabindex='0' class='tabloophelper tabloophelperbefore ae-compliance-indent'></div> ");
                                        a.Z.set(i, "exclude"), e.before(i)
                                    }
                                }))
                            })), window.ae_jQuery(".tabloophelperafter").focus(AudioEye.modals.continueOnNext), window.ae_jQuery(".tabloophelperbefore").focus(AudioEye.modals.continueOnPrev)
                        },
                        allLoopContainers: function() {
                            return s.tabLoopContainerRecords.ae_reduce((function(e, t) {
                                return e.add(window.ae_jQuery(t))
                            }), window.ae_jQuery())
                        },
                        getLoopContainer: function(e) {
                            var t = s.allLoopContainers().filter((function() {
                                return window.ae_jQuery(e).eq(0).closest(this).length
                            }));
                            if (0 === t.length) return !1;
                            if (1 === t.length) return t;
                            var i = window.ae_jQuery();
                            return t.each((function() {
                                i = i.add(this)
                            })), i.last()
                        },
                        shareSameContainer: function(e, t) {
                            var i = s.getLoopContainer(e);
                            if (!1 === i) return !1;
                            var n = s.getLoopContainer(t);
                            return !1 !== n && i[0] === n[0]
                        },
                        _eventTargetOverride: function(e) {
                            var t, i = e.target;
                            if (i === document && window.ae_jQuery(i.activeElement).hasClass("tabloophelper")) return e.target.activeElement;
                            if (i === document) return !1;
                            t = s.getLoopContainer(i);
                            var n = f(i, e.shiftKey, t);
                            return n ? (n.addClass("ae-skip-focus-response"), n[0].focus(), !1) : !!t && i
                        },
                        _resolveSearch: function(e, t, i) {
                            if (t.is("iframe")) return "before" === i && (t.prev(".tabloophelper").addClass("ae-skip-focus-response"), t.prev(".tabloophelper")[0].focus()), void("after" === i && (t.next(".tabloophelper").addClass("ae-skip-focus-response"), t.next(".tabloophelper")[0].focus()));
                            e.preventDefault(), t[0].focus()
                        },
                        continueOnNext: p,
                        continueOnPrev: h,
                        sourceIframe: o.Z.iframes.getFrameFromWindow
                    };

                function l() {
                    window.ae_jQuery(document).off("keydown.remapilooptab"), window.ae_jQuery(document).on("keydown.remapilooptab", u), AudioEye.modals.refreshTabLoopHelperElements()
                }

                function c() {
                    AudioEye.modals.tabLoopActive = !1, window.ae_jQuery(document).off("keydown.remapilooptab"), window.ae_jQuery(".tabloophelper").remove()
                }

                function u(e) {
                    if (s.tabLoopActive) {
                        if (!o.Z.isModuleActive("player") && 9 === e.keyCode) {
                            var t, i = AudioEye.modals._eventTargetOverride(e),
                                n = s.getLoopContainer(i);
                            if (n && 0 !== n.length)
                                if (e.shiftKey) {
                                    if (!(t = m(i, _, n)) || 0 === window.ae_jQuery(t).closest(n[0]).length) {
                                        for (var a = n[0].lastChild; a.lastChild;) a = a.lastChild;
                                        window.ae_jQuery(a).traverseDF({
                                            direction: "prev",
                                            limit: null
                                        }, (function() {
                                            if (t = _(window.ae_jQuery(this))) return "stop"
                                        }))
                                    }
                                    t && s._resolveSearch(e, t, "after")
                                } else(t = d(i, _)) && 0 !== window.ae_jQuery(t).closest(n[0]).length || window.ae_jQuery(n[0].firstChild).traverseDF({
                                    direction: "next",
                                    limit: null
                                }, (function() {
                                    if (t = _(window.ae_jQuery(this))) return "stop"
                                })), t && s._resolveSearch(e, t, "before");
                            else r.debug("Modal Tab Loop is enabled but eventTarget is not within a registered container")
                        }
                    } else s._disableAllTabLoops()
                }

                function d(e, t) {
                    var i, n = !1;
                    if (e.firstChild) i = e.firstChild;
                    else if (e.nextSibling) i = e.nextSibling;
                    else
                        for (i = e; i.parentElement;)
                            if ((i = i.parentElement).nextSibling) {
                                i = i.nextSibling;
                                break
                            } return window.ae_jQuery(i).traverseDF({
                        direction: "next",
                        limit: null
                    }, (function() {
                        if (n = t(window.ae_jQuery(this))) return "stop"
                    })), n
                }

                function m(e, t, i) {
                    var n, o = !1;
                    if (e.previousSibling)
                        for (n = e.previousSibling; n.lastChild;) n = n.lastChild;
                    else n = e.parentElement ? e.parentElement : i;
                    return window.ae_jQuery(n).traverseDF({
                        direction: "prev",
                        limit: null
                    }, (function() {
                        if (o = t(window.ae_jQuery(this))) return "stop"
                    })), o
                }

                function f(e, t, i) {
                    var n, o = window.ae_jQuery(i);
                    if (t) {
                        var a, r = !1;
                        if (e.previousSibling)
                            for (a = e.previousSibling; a.lastChild;) a = a.lastChild;
                        else a = e.parentElement ? e.parentElement : o;
                        return window.ae_jQuery(a).traverseDF({
                            direction: "prev",
                            limit: null
                        }, (function() {
                            if (r = g(window.ae_jQuery(this))) return "stop"
                        })), !(!r || !r.hasClass("tabloophelperafter")) && r
                    }
                    if (r = !1, e.firstChild) n = e.firstChild;
                    else if (e.nextSibling) n = e.nextSibling;
                    else if (e.parentElement) {
                        for (n = e.parentElement; !n.nextSibling;) {
                            if (!n.parentElement) {
                                n = document.body;
                                break
                            }
                            n = n.parentElement
                        }
                        n.nextSibling && (n = n.nextSibling)
                    } else n = document.body;
                    return window.ae_jQuery(n).traverseDF({
                        direction: "next",
                        limit: null
                    }, (function() {
                        if (r = g(window.ae_jQuery(this))) return "stop"
                    })), !(!r || !r.hasClass("tabloophelperbefore")) && r
                }

                function h() {
                    if (window.ae_jQuery(this).hasClass("ae-skip-focus-response")) window.ae_jQuery(this).removeClass("ae-skip-focus-response");
                    else if (s.tabLoopActive)
                        if (o.Z.isModuleActive("player")) AudioEye.player.tabFocus.go("shift+tab");
                        else {
                            var e = new window.Event("keydown");
                            e.keyCode = 9, e.shiftKey = !0, document.dispatchEvent(e)
                        }
                    else window.ae_jQuery(".tabloophelper").remove()
                }

                function p() {
                    if (window.ae_jQuery(this).hasClass("ae-skip-focus-response")) window.ae_jQuery(this).removeClass("ae-skip-focus-response");
                    else if (s.tabLoopActive)
                        if (o.Z.isModuleActive("player")) AudioEye.player.tabFocus.go("tab");
                        else {
                            var e = new window.Event("keydown");
                            e.keyCode = 9, e.shiftKey = !1, document.dispatchEvent(e)
                        }
                    else window.ae_jQuery(".tabloophelper").remove()
                }

                function g(e) {
                    return e.attr("style") && e.attr("style").indexOf("visibility: hidden") > -1 ? null : e.is("iframe:visible") || e.filter(":tabbable").length > 0 ? e : null
                }

                function _(e) {
                    if (e.hasClass("tabloophelper")) return null;
                    if (e.attr("style") && e.attr("style").indexOf("visibility: hidden") > -1) return null;
                    if (e.is("iframe:visible")) return e;
                    if (e.is(":hidden")) return null;
                    if (e[0] && "radio" === e[0].type && e.filter(":tabbable").length > 0) {
                        if (e.prop("checked")) return e;
                        var t = e.groupPeers();
                        return !t.filter((function() {
                            return this.checked
                        })).length && t.first().is(e) ? e : null
                    }
                    return e.filter(":tabbable").length > 0 ? e : null
                }
                window.audioeye_test_mode && (window.testScope.modals = {
                    enter_tabloop_state: l,
                    exit_tabloop_state: c,
                    handler: u,
                    isNextElementAHelper: f,
                    continueOnPrev: h,
                    continueOnNext: p,
                    tabbableOrIframe: g,
                    tabbableOrIframeButNotHelper: _,
                    logit: r,
                    searchForward: d,
                    searchBackward: m
                }), t.Z = s
            },
            3116: function(e, t, i) {
                "use strict";
                var n = i(2399),
                    o = i(7422),
                    a = i(4918),
                    r = AudioEye.productConfig,
                    s = new a.Z("OptIn"),
                    l = !(r.launcher && r.launcher["opt-in"]),
                    c = {
                        _zones: {
                            launcher: {
                                type: "module",
                                isOptedIn: l
                            },
                            toolbar: {
                                type: "module",
                                isOptedIn: l
                            },
                            helpdesk: {
                                type: "module",
                                isOptedIn: l
                            },
                            "site-menu": {
                                type: "module",
                                isOptedIn: l
                            },
                            rotor: {
                                type: "module",
                                isOptedIn: l
                            },
                            BASE: {
                                type: "group",
                                members: ["helpdesk", "site-menu", "rotor"]
                            },
                            CTA: {
                                type: "group",
                                members: ["launcher", "toolbar"]
                            }
                        },
                        _cookies: o.Z,
                        init: function() {
                            this._restore()
                        },
                        opt: function(e, t) {
                            var i, o = this;
                            this._ensureZone(t), i = this._zones[t], "toggle" === e && (e = this.state(t) ? "out" : "in"), "group" === i.type ? i.members.forEach((function(t) {
                                o._optSingle(e, t)
                            })) : o._optSingle(e, t), n.Z.dispatchEvent("GroupOpt", {
                                direction: e,
                                group: t
                            })
                        },
                        optFromIframe: function(e, t, i) {
                            c.opt(e, t), c.stateIframeSync(t, i)
                        },
                        state: function(e) {
                            var t, i = this;
                            if (this._ensureZone(e)) return "group" === (t = this._zones[e]).type ? t.members.every((function(e) {
                                return i._zones[e].isOptedIn
                            })) : t.isOptedIn
                        },
                        stateIframeSync: function(e, t) {
                            var i = c.state(e);
                            void 0 !== i ? t.source.postMessage({
                                object: "AudioEyeStatementSync",
                                isOptedIn: i
                            }, t.origin) : s.error('Failed to find state of zone "' + e + '"')
                        },
                        _ensureZone: function(e) {
                            return !!this._zones[e] || (s.error('Invalid zone "' + e + '" not supported'), !1)
                        },
                        _optSingle: function(e, t) {
                            var i, o;
                            if (o = "in" === e, "module" !== (i = this._zones[t]).type) return s.error('module "' + t + '" is of unsupported type "' + i.type), !1;
                            i.isOptedIn = o, this._cookies.set("aeOptIn", JSON.stringify(this._allOptIns()), 9125), n.Z.dispatchEvent("ModuleOpt", {
                                direction: e,
                                module: t
                            })
                        },
                        _restore: function() {
                            var e, t = this,
                                i = this._cookies.get("aeOptIn");
                            if (!i) return !1;
                            try {
                                e = JSON.parse(i)
                            } catch (e) {
                                return s.error("JSON parse failed. Invalid JSON in aeOptIn cookie"), !1
                            }
                            if (!Array.isArray(e)) return s.error("Invalid opt in list retrieved from cookie"), !1;
                            Object.keys(t._zones).forEach((function(i) {
                                "module" === t._zones[i].type && t.opt(e.indexOf(i) > -1 ? "in" : "out", i)
                            }))
                        },
                        _allOptIns: function() {
                            var e = this;
                            return Object.keys(this._zones).filter((function(t) {
                                var i = e._zones[t];
                                return "module" === i.type && i.isOptedIn
                            }))
                        }
                    };
                t.Z = c
            },
            7733: function(e) {
                e.exports = ["aepersistsettings", "aelastsite", "aesettingsreset", "aeintro", "aefirsttimetoolbar", "aefirsttimeplayer", "aefirsttimereader", "aefirsttimevoice", "aevoicemode", "aearrowkeytyping", "aeatstartmessage", "aeautoplay", "aecontrast", "aefontface", "aefontsize", "aekeyannounce", "aeletterspacing", "aeletterbyletter", "aelineheight", "aemoduleactivation", "aeplayerhelp", "aeproductlaunched", "aevoicemode", "aewordspacing", "aezoom", "aelreadersettings", "aelreadercontrolbarclosed", "aeOptIn"]
            },
            2218: function(e, t) {
                "use strict";
                var i = {
                    loadAggregate: function() {
                        if (!1 === i.isAggregateLoaded()) {
                            var e = document.createElement("link"),
                                t = document.getElementById("ae_app");
                            e.rel = "stylesheet", e.type = "text/css", e.id = "ae_aggregate_css", e.class = "ae-style", e.href = AudioEye.client_url + "/css/aggregate.css?files=default|core&cb=" + AudioEye.cb, t.insertBefore(e, t.hasChildNodes() ? t.childNodes[0] : null)
                        }
                    },
                    isAggregateLoaded: function() {
                        var e = document.getElementById("ae_aggregate_css");
                        return void 0 !== e && null != e
                    }
                };
                t.Z = i
            },
            3739: function(e, t) {
                "use strict";
                var i = {
                    isPreviewMode: function() {
                        return !!window.__AudioEyePreviewMode
                    }
                };
                t.Z = i
            },
            1190: function(e, t, i) {
                "use strict";
                var n = i(4918),
                    o = i(138);

                function a(e) {
                    window.ae_jQuery.fn.extend({
                        hasClasses: function(e) {
                            for (var t in e)
                                if (window.ae_jQuery(this).hasClass(e[t])) return !0;
                            return !1
                        }
                    }), this.pres = {
                        role: "presentation"
                    }, this.rmv = {
                        role: "presentation",
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }, this.btn = {
                        role: "button",
                        tabindex: "0",
                        "data-ae-blurbtype": "button"
                    }, this.img = {
                        role: "img"
                    }, this.acd = {
                        "aria-expanded": "false",
                        role: "button",
                        tabindex: "0"
                    }, this.dlg = {
                        role: "dialog"
                    }, this.expt = {
                        "aria-expanded": "true"
                    }, this.expf = {
                        "aria-expanded": "false"
                    }, this.ele = e
                }
                a.prototype.logit = new n.Z("rem-api"), a.prototype.addBodyClass = function() {
                    var e = "ae-" + window.ae_jQuery("h1:first").text().toLowerCase().replace(/ /g, "-");
                    this.ele.outerFind(document.body).addClass(e)
                }, a.prototype.manageSelector = function(e) {
                    switch (typeof e) {
                        case "string":
                            return this.ele.outerFind(e);
                        case "object":
                            if (Array.isArray(e) && e.every((function(e) {
                                    return "string" == typeof e
                                }))) return this.ele.outerFind(e.join(","));
                            if (e.jquery) return e
                    }
                    console.log("aeApi-Error: Please check your selector.")
                }, a.prototype.modals = {
                    enableTabLoop: function(e) {
                        "string" != typeof e && this.logit.error("enableTabLoop must be passed a jQuery selector string"), AudioEye.modals.enableTabLoop(e)
                    },
                    disableTabLoop: function() {
                        AudioEye.modals.disableTabLoop()
                    }
                }, a.prototype.setAttr = function(e, t) {
                    return this.manageSelector(e).attr(t)
                }, a.prototype.setAlt = function(e, t) {
                    return this.manageSelector(e).attr("alt", t)
                }, a.prototype.convertToBtn = function(e) {
                    return this.manageSelector(e).attr(this.btn)
                }, a.prototype.convertToImg = function(e) {
                    return this.manageSelector(e).attr(this.img)
                }, a.prototype.setHeadingLevel = function(e, t) {
                    return this.manageSelector(e).attr({
                        role: "heading",
                        "aria-level": t
                    })
                }, a.prototype.setTitle = function(e, t) {
                    return this.manageSelector(e).attr({
                        title: t
                    })
                }, a.prototype.hideFromAT = function(e) {
                    var t = this.manageSelector(e);
                    return t.is("svg") ? t.attr(this.rmv).attr({
                        disabled: "true",
                        clickable: "false"
                    }) : t.attr(this.rmv)
                }, a.prototype.setDialog = function(e) {
                    return this.manageSelector(e).attr(this.dlg)
                }, a.prototype.setPresentation = function(e) {
                    return this.manageSelector(e).attr(this.pres)
                }, a.prototype.addComplianceIndent = function(e, t, i, n) {
                    var o = "";
                    return "label" === i && (o = ' for="' + window.ae_jQuery(this).attr("id") + '"'), this.manageSelector(e).each((function() {
                        window.ae_jQuery(this)[t]("<" + i + ' style="display: none;" class="ae-compliance-indent ae-reader-visible"' + o + "> " + n + " </" + i + ">")
                    }))
                }, a.prototype.addComplianceIndentHidden = function(e, t, i, n) {
                    var o = "";
                    return "label" === i && (o = ' for="' + window.ae_jQuery(this).attr("id") + '"'), this.manageSelector(e).each((function() {
                        window.ae_jQuery(this)[t]("<" + i + ' style="display: none;" class="ae-compliance-indent"' + o + "> " + n + " </" + i + ">")
                    }))
                }, a.prototype.convertToAccordion = function(e, t, i) {
                    var n = this,
                        a = this.manageSelector(e);
                    a.each((function() {
                        window.ae_jQuery(this).attr(n.acd), void 0 !== i ? (window.ae_jQuery(this).next(i).is(":visible") || window.ae_jQuery(this).parents().next(i).is(":visible") || window.ae_jQuery(this).find(i).is(":visible")) && o.Z.set(window.ae_jQuery(this), "active") : window.ae_jQuery(this).hasClass(t) && o.Z.set(window.ae_jQuery(this), "active"), o.Z.is(window.ae_jQuery(this), "active") && window.ae_jQuery(this).attr(n.expt), window.ae_jQuery(this).on("click", (function() {
                            setTimeout((function() {
                                a.attr(n.expf), o.Z.unset(a, "active"), void 0 !== i ? a.each((function() {
                                    window.ae_jQuery(this).next(i).is(":visible") || window.ae_jQuery(this).parents().next(i).is(":visible") ? (o.Z.set(window.ae_jQuery(this), "active"), window.ae_jQuery(this).attr(n.expt)) : window.ae_jQuery(this).find(i).is(":visible") && o.Z.set(window.ae_jQuery(this), "active")
                                })) : a.each((function() {
                                    window.ae_jQuery(this).hasClass(t) && o.Z.set(window.ae_jQuery(this), "active"), o.Z.is(window.ae_jQuery(this), "active") && window.ae_jQuery(this).attr(n.expt)
                                }))
                            }), 600)
                        }))
                    }))
                }, a.prototype.addKeyboardClick = function(e) {
                    return this.manageSelector(e).on("keypress", (function(e) {
                        var t = e.which;
                        if (13 == t || 32 == t) return this.click(), !1
                    }))
                }, a.prototype.stopProp = function(e) {
                    return this.manageSelector(e).on("keypress", (function(e) {
                        13 == e.which && e.stopPropagation()
                    }))
                }, a.prototype.remScope = function(e) {
                    if (!e || void 0 === this._rscope) return e ? (a.prototype._rscope = e, void this.logit.debug("remScope set successful")) : this._rscope;
                    this.logit.info("remScope(customObj) has already been set. Resetting is not allowed. Call remScope() with no parameters to access your custom scope.")
                }, t.Z = a
            },
            2195: function(e, t, i) {
                "use strict";
                i.d(t, {
                    Z: function() {
                        return g
                    }
                });
                var n = i(4918),
                    o = i(1190),
                    a = new n.Z("manual-remediations"),
                    r = function(e, t) {
                        if (e || (e = window.ae_jQuery("html")), "function" == typeof t) {
                            var i = new o.Z(e);
                            try {
                                t(e, i)
                            } catch (e) {
                                var n = "Caught an error in remediation " + (t.title ? 'with title "' + t.title + '"' : "(untitled)") + " -> " + e.message;
                                a && a.error(n, e)
                            }
                        } else a.error("runOne failed: Remediation is not a function", t)
                    },
                    s = i(4699),
                    l = i(2399),
                    c = new n.Z("remediation-timer");
                const u = function(e) {
                    return window.performance && "function" == typeof performance.now ? !1 === e ? (c.debug("Rems will not be timed. Time reporting is set to OFF"), void this.noop()) : (this._performance = window.performance, this._startTime = 0, this._startTimeEpoch = 0, this._remTimes = [], this._sequenceStartTime = 0, void(this._workTime = 0)) : (c.debug("Rems will not be timed. Performance.now unsupported"), void this.noop())
                };
                u.prototype.startSequence = function() {
                    this._remTimes = [], this._sequenceStartTime = this._performance.now()
                }, u.prototype.endSequence = function() {
                    var e = this._performance.now(),
                        t = Math.round(e - this._sequenceStartTime);
                    if ((t < 0 || t > 5e4) && (c.error("elapsedTime was negative or too high: " + t), t = 5e4), !l.Z.inIframe()) {
                        var i = this._remTimes.ae_reduce((function(e, t) {
                            return e + t
                        }), 0);
                        c.debug("endSequence: ", {
                            elapsed: t,
                            workTime: i
                        })
                    }
                }, u.prototype.startOne = function() {
                    this._startTime = this._performance.now(), this._startTimeEpoch = Date.now()
                }, u.prototype.endOne = function() {
                    var e = this._performance.now();
                    this._remTimes.push(e - this._startTime)
                }, u.prototype.noop = function() {
                    var e = this;
                    Object.getOwnPropertyNames(u.prototype).forEach((function(t) {
                        e[t] = function() {}
                    }))
                };
                var d = u,
                    m = i(3204),
                    f = new n.Z("remediation-planner"),
                    h = new MutationObserver((function() {})),
                    p = {
                        _defaultCostsByRemType: {
                            smart: 1,
                            manual: 13,
                            auto: 5
                        },
                        _effectedElementsByRemID: {},
                        makePlan: function(e, t, i) {
                            t || (t = window.ae_jQuery(document.documentElement));
                            var n = new d(i),
                                o = [].concat(p._planManualRems(t, n, e["manual-remediations"]));
                            return null !== AudioEye.CFD.featureObjects.smartRems.object && (o = (o = o.concat(p._planSmartRems(t, n, e["smart-remediations"], e["skip-remediations"]))).concat(p._planAutoRems(t, n, e["auto-remediations"], e["skip-remediations"]))), f.debug("Found " + o.length + " remediations to run"), p._addInstrumentBookends(o, n)
                        },
                        _addInstrumentBookends: function(e, t) {
                            var i = new s.i((function() {
                                    t.startSequence()
                                }), 1),
                                n = new s.i((function() {
                                    t.endSequence()
                                }), 1);
                            return [i].concat(e, [n])
                        },
                        _planManualRems: function(e, t, i) {
                            return !1 === i ? (f.debug("Manual Remediations NOT applied -> OFF in product config"), []) : p._getRawManualRems().length ? p._getRawManualRems().map((function(i) {
                                return new s.i(p._makeManualRemExecutable(e, i, t), p._defaultCostsByRemType.manual)
                            })) : (f.debug("Manual Remediations NOT applied -> None found"), [])
                        },
                        _planSmartRems: function(e, t, i, n) {
                            return p._getRawSmartRems().length ? !1 === i ? (f.debug("Smart Remediations NOT applied -> OFF in product config"), []) : p._getRawSmartRems().map((function(i) {
                                return new s.i(p._makeSmartRemExecutable(e, i, n, t), p._defaultCostsByRemType.smart)
                            })) : (f.debug("Smart Remediations NOT applied -> None found"), [])
                        },
                        _planAutoRems: function(e, t, i, n) {
                            if (!1 === i) return f.debug("Auto Remediations NOT applied -> OFF in product config"), [];
                            let o = p._getRawAutoRems();
                            return o.length ? o.map((function(i) {
                                return new s.i(p._makeAutoRemExecutable(e, i, n, t), p._defaultCostsByRemType.auto)
                            })) : (f.debug("Auto Remediations NOT applied -> None found"), [])
                        },
                        _getRawAutoRems: function() {
                            if (!window.AudioEye || !window.AudioEye.autoSmartRemediations || !Array.isArray(window.AudioEye.autoSmartRemediations)) return [];
                            var e = window.AudioEye.autoSmartRemediations;
                            try {
                                const t = sessionStorage.getItem("aeSkipRems");
                                (t ? t.split(",") : []).forEach((function(t) {
                                    var i = [];
                                    e.forEach((function(e) {
                                        e.type !== t && i.push(e)
                                    })), e = i
                                }))
                            } catch (e) {
                                f.debug("error getting aeSkipRems: " + JSON.stringify(e))
                            }
                            return e
                        },
                        _getRawManualRems: function() {
                            return window.AudioEye && window.AudioEye.manualRemediations && Array.isArray(window.AudioEye.manualRemediations) ? window.AudioEye.manualRemediations : []
                        },
                        _getRawSmartRems: function() {
                            return window.AudioEye && window.AudioEye.smartRemediations && Array.isArray(window.AudioEye.smartRemediations) ? window.AudioEye.smartRemediations : []
                        },
                        _makeAutoRemExecutable: function(e, t, i, n) {
                            var o = this;
                            return function() {
                                m.Z.observeSingleRem(), h.observe(document.body, {
                                    subtree: !0,
                                    childList: !0,
                                    characterData: !0,
                                    attributes: !0
                                }), n.startOne(), AudioEye.CFD.featureObjects.smartRems.object.runOne(e, t, i), n.endOne();
                                var a = h.takeRecords();
                                h.disconnect(), o._logMutation(t.id, a, n, "auto"), m.Z.finishObserveSingleRem(t.smart_remediation_number, AudioEye.CFD.featureObjects.smartRems.object[t.type], t.type)
                            }
                        },
                        _makeSmartRemExecutable: function(e, t, i, n) {
                            var o = this;
                            return function() {
                                m.Z.observeSingleRem(), h.observe(document.body, {
                                    subtree: !0,
                                    childList: !0,
                                    characterData: !0,
                                    attributes: !0
                                }), n.startOne(), AudioEye.CFD.featureObjects.smartRems.object.runOne(e, t, i), n.endOne();
                                var a = h.takeRecords();
                                h.disconnect(), o._logMutation(t.id, a, n, "smart"), m.Z.finishObserveSingleRem(t.smart_remediation_number, AudioEye.CFD.featureObjects.smartRems.object[t.type], t.type)
                            }
                        },
                        _makeManualRemExecutable: function(e, t, i) {
                            var n = this;
                            return function() {
                                m.Z.observeSingleRem(), h.observe(document.body, {
                                    subtree: !0,
                                    childList: !0,
                                    characterData: !0,
                                    attributes: !0
                                }), i.startOne(), r(e, t), i.endOne();
                                var o = h.takeRecords();
                                h.disconnect(), n._logMutation(t.id, o, i, "manual"), m.Z.finishObserveSingleRem(t.title, t, "Custom")
                            }
                        },
                        _logMutation: function(e, t, i, n) {
                            var o = null;
                            if (e && t && i && ["auto", "manual", "smart"].includes(n)) {
                                for (var a = [], r = 0; r < t.length; r++) - 1 === a.indexOf(t[r].target) && a.push(t[r].target);
                                void 0 !== i && void 0 !== i._remTimes && i._remTimes.hasOwnProperty("length") && (o = i._remTimes[i._remTimes.length - 1]), this._effectedElementsByRemID[e] ? (this._effectedElementsByRemID[e].effectCount += a.length, this._effectedElementsByRemID[e].timing = o) : this._effectedElementsByRemID[e] = {
                                    effectCount: a.length,
                                    timing: o,
                                    remType: n,
                                    startTimeEpoch: i._startTimeEpoch
                                }
                            }
                        }
                    },
                    g = p
            },
            7668: function(e, t) {
                "use strict";
                var i = {
                    all_shortcuts: {
                        default: {}
                    },
                    add: function(e, t, i, n) {
                        var o = {
                                type: "keydown",
                                propagate: !1,
                                disable_in_input: !1,
                                ignore_modifiers: !1,
                                target: document,
                                keycode: !1
                            },
                            a = this;
                        "string" != typeof t && (n = i, i = t, t = "default"), n ? Object.keys(o, (function(e) {
                            void 0 === n[e] && (n[e] = o[e])
                        })) : n = o;
                        var r = n.target;
                        "string" == typeof n.target && (r = document.getElementById(n.target)), e = e.toLowerCase();
                        var s = function(t) {
                            if ("string" == typeof t) return i(window.event);
                            if (t = t || window.event, !a.disabledCommands.isDisabled(e)) {
                                if (n.disable_in_input) {
                                    var o;
                                    if (t.relayedTargetTagName ? o = {
                                            tagName: t.relayedTargetTagName
                                        } : t.target ? o = t.target : t.srcElement && (o = t.srcElement), t.srcElement.shadowRoot)
                                        if (t.explicitOriginalTarget) o = t.explicitOriginalTarget;
                                        else if (t.path && Array.isArray(t.path)) o = t.path[0];
                                    else if ("function" == typeof t.composedPath) {
                                        const e = t.composedPath();
                                        e && Array.isArray(e) && (o = e[0])
                                    }
                                    if (3 === o.nodeType && (o = o.parentNode), "INPUT" === o.tagName || "TEXTAREA" === o.tagName || "true" === o.contentEditable) return
                                }
                                var r, s = t.keyCode || t.which;
                                switch (s) {
                                    case 91:
                                    case 92:
                                        break;
                                    case 109:
                                    case 173:
                                    case 189:
                                        r = "-";
                                        break;
                                    case 107:
                                    case 187:
                                        r = "=";
                                        break;
                                    case 188:
                                        r = ",";
                                        break;
                                    case 190:
                                        r = ".";
                                        break;
                                    case 191:
                                        r = "/";
                                        break;
                                    case 219:
                                        r = "[";
                                        break;
                                    case 221:
                                        r = "]";
                                        break;
                                    default:
                                        r = String.fromCharCode(s).toLowerCase()
                                }
                                var l = {
                                        "`": "~",
                                        1: "!",
                                        2: "@",
                                        3: "#",
                                        4: "$",
                                        5: "%",
                                        6: "^",
                                        7: "&",
                                        8: "*",
                                        9: "(",
                                        0: ")",
                                        "-": "_",
                                        "=": "+",
                                        "[": "{",
                                        "]": "}",
                                        ";": ": ",
                                        "'": '"',
                                        ",": "<",
                                        ".": ">",
                                        "/": "?",
                                        "\\": "|"
                                    },
                                    c = {
                                        esc: 27,
                                        escape: 27,
                                        tab: 9,
                                        space: 32,
                                        return: 13,
                                        enter: 13,
                                        backspace: 8,
                                        scrolllock: 145,
                                        scroll_lock: 145,
                                        scroll: 145,
                                        capslock: 20,
                                        caps_lock: 20,
                                        caps: 20,
                                        numlock: 144,
                                        num_lock: 144,
                                        num: 144,
                                        pause: 19,
                                        break: 19,
                                        insert: 45,
                                        home: 36,
                                        delete: 46,
                                        end: 35,
                                        pageup: 33,
                                        page_up: 33,
                                        pu: 33,
                                        pagedown: 34,
                                        page_down: 34,
                                        pd: 34,
                                        left: 37,
                                        up: 38,
                                        right: 39,
                                        down: 40,
                                        f1: 112,
                                        f2: 113,
                                        f3: 114,
                                        f4: 115,
                                        f5: 116,
                                        f6: 117,
                                        f7: 118,
                                        f8: 119,
                                        f9: 120,
                                        f10: 121,
                                        f11: 122,
                                        f12: 123
                                    },
                                    u = {
                                        shift: {
                                            wanted: !1,
                                            pressed: !!t.shiftKey
                                        },
                                        ctrl: {
                                            wanted: !1,
                                            pressed: !!t.ctrlKey
                                        },
                                        alt: {
                                            wanted: !1,
                                            pressed: !!t.altKey
                                        },
                                        meta: {
                                            wanted: !1,
                                            pressed: !!t.metaKey
                                        }
                                    },
                                    d = 0,
                                    m = e.split("+");
                                if (m.forEach((function(e) {
                                        "ctrl" === e || "control" === e ? (d += 1, u.ctrl.wanted = !0) : "shift" === e ? (d += 1, u.shift.wanted = !0) : "alt" === e ? (d += 1, u.alt.wanted = !0) : "meta" === e ? (d += 1, u.meta.wanted = !0) : e.length > 1 ? c[e] === s && (d += 1) : n.keycode ? n.keycode === s && (d += 1) : (r === e || l[r] && t.shiftKey && (r = l[r]) === e) && (d += 1)
                                    })), d === m.length && (n.ignore_modifiers || u.ctrl.pressed === u.ctrl.wanted && u.shift.pressed === u.shift.wanted && u.alt.pressed === u.alt.wanted && u.meta.pressed === u.meta.wanted) && (!1 === i(t) || ("function" == typeof n.propagate ? !n.propagate(t) : !n.propagate))) return t.cancelBubble = !0, t.returnValue = !1, t.stopPropagation && (t.stopPropagation(), t.preventDefault()), !1
                            }
                        };
                        this.all_shortcuts[t] || (this.all_shortcuts[t] = {}), this.all_shortcuts[t][e] || (this.all_shortcuts[t][e] = []), this.all_shortcuts[t][e].push({
                            callback: s,
                            target: r,
                            event: n.type
                        }), r.addEventListener ? r.addEventListener(n.type, s, !0) : r.attachEvent ? r.attachEvent("on" + n.type, s) : r["on" + n.type] = s
                    },
                    trigger: function(e, t) {
                        if (e = e.toLowerCase(), t) this.all_shortcuts[t][e].forEach((function(t) {
                            t && t.callback(e)
                        }));
                        else {
                            var i = this;
                            Object.keys(this.all_shortcuts).forEach((function(t) {
                                i.trigger(e, t)
                            }))
                        }
                    },
                    remove: function(e, t) {
                        if (e = e.toLowerCase(), t && this.all_shortcuts[t]) {
                            if (!Array.isArray(this.all_shortcuts[t][e])) return;
                            this.all_shortcuts[t][e].forEach((function(e) {
                                if (e) {
                                    var t = e.event,
                                        i = e.target,
                                        n = e.callback;
                                    i.detachEvent ? i.detachEvent("on" + t, n) : i.removeEventListener ? i.removeEventListener(t, n, !0) : i["on" + t] = !1
                                }
                            })), delete this.all_shortcuts[t][e]
                        } else {
                            var i = this;
                            Object.keys(this.all_shortcuts).forEach((function(t) {
                                i.remove(e, t)
                            }))
                        }
                    },
                    removeAll: function(e) {
                        var t = this;
                        if (e) {
                            if (!this.all_shortcuts[e]) return !1;
                            Object.keys(this.all_shortcuts[e]).forEach((function(i) {
                                t.remove(i, e)
                            }))
                        } else Object.keys(this.all_shortcuts).forEach((function(e) {
                            t.removeAll(e)
                        }))
                    },
                    disabledCommands: {
                        _commands: {},
                        add: function(e) {
                            this._commands[e] = !0
                        },
                        remove: function(e) {
                            delete this._commands[e]
                        },
                        isDisabled: function(e) {
                            return this._commands[e]
                        }
                    }
                };
                t.Z = i
            },
            4699: function(e, t, i) {
                "use strict";
                i.d(t, {
                    i: function() {
                        return a
                    }
                });
                var n = new(i(4918).Z)("task-scheduler"),
                    o = {
                        _q: [],
                        _frameBudget: 13,
                        _raf: window.requestAnimationFrame,
                        _sequenceCompleteHandler: function() {},
                        _scheduleCompleteHandler: function() {},
                        _inProgress: !1,
                        isRunning: function() {
                            return o._inProgress
                        },
                        onSequenceComplete: function(e) {
                            if ("function" != typeof e) throw new Error("onSequenceComplete callback must be a function");
                            o._sequenceCompleteHandler = e
                        },
                        onScheduleComplete: function(e) {
                            if ("function" != typeof e) throw new Error("onScheduleComplete callback must be a function");
                            o._scheduleCompleteHandler = e
                        },
                        start: function() {
                            n.debug("Executing sequence of " + o._q.length + " tasks"), this._timerStart(), this._q.length ? o.isRunning() ? n.error("Cannot run tasks. TaskScheduler is already running.") : (o._inProgress = !0, o._scheduleNextFrame(o._frameBudget)) : n.info("Could not start. Nothing in the queue.")
                        },
                        add: function(e) {
                            if (!Array.isArray(e) || 0 === e.length) throw new Error("Cannot add items. items is empty or mal-formed");
                            e.forEach((function(e) {
                                try {
                                    o._q.push(new o._Task(e.task, e.cost))
                                } catch (e) {
                                    n.error("Could not add task. Task was invalid: ", e)
                                }
                            }))
                        },
                        addSequences: function(e) {
                            if (!Array.isArray(e) || 0 === e.length) throw new Error("Cannot add sequences. Sequences is empty or not an array");
                            var t = e.slice(1).reverse().reduce((function(e, t, i) {
                                return function() {
                                    n.debug("Starting next sequence count down: " + i), o.add(o._addResetSequenceHandlerTask(t, e)), o.onSequenceComplete(e), o.start()
                                }
                            }), (function() {
                                o._scheduleCompleteHandler()
                            }));
                            o.add(o._addResetSequenceHandlerTask(e[0], t)), o.onSequenceComplete(t)
                        },
                        _addResetSequenceHandlerTask: function(e, t) {
                            return e.concat([new a((function() {
                                o.onSequenceComplete(t)
                            }), 1)])
                        },
                        _timerStart: function() {
                            window.performance && (this._startTime = window.performance.now())
                        },
                        _timerEnd: function() {
                            if (window.performance) {
                                var e = window.performance.now() - this._startTime;
                                n.debug("Last run took: " + e)
                            }
                        },
                        _scheduleNextFrame: function(e) {
                            if ("number" != typeof e || e < 1) throw new Error("Invalid budget: " + e);
                            o._raf.call(window, (function() {
                                o._runNextGroup(e)
                            }))
                        },
                        _runNextGroup: function(e) {
                            var t = o._dequeueNextGroup(e);
                            if (!t.length) return n.debug("Task sequence is complete."), void o._exitSequence();
                            for (var i = !1, a = 0; a < t.length; a++) try {
                                if (n.debug("running task."), t[a]((function() {
                                        i = !0
                                    })), i) break
                            } catch (e) {
                                var r = "Task threw an error";
                                e.message && (r = r + " => " + e.message), n.error(r, e)
                            }
                            if (i) return n.debug("task cancelled sequence with " + o._q.length + "tasks remaining."), void o._exitSequence();
                            o._scheduleNextFrame(e)
                        },
                        _exitSequence: function() {
                            o._inProgress = !1, this._timerEnd(), o._q = [], o._sequenceCompleteHandler(), o._sequenceCompleteHandler = function() {}
                        },
                        _dequeueNextGroup: function(e) {
                            var t, i = 0,
                                o = [];
                            if (e <= 0) throw new Error("Invalid budget. Budget must be greater than 0");
                            for (; this._q.length;)
                                if (t = this._q[0]) {
                                    if (i + t.cost > e && o.length > 0) break;
                                    i += t.cost, o.push(this._q.shift().task)
                                } else n.error("Empty task encountered"), this._q.shift();
                            return o
                        },
                        _Task: a
                    };

                function a(e, t) {
                    this.setTask(e), this.setCost(t)
                }
                a.prototype.setTask = function(e) {
                    if ("function" != typeof e) throw new Error("Task must be a function, got " + typeof e);
                    this.task = e
                }, a.prototype.setCost = function(e) {
                    if ("number" != typeof e) throw new Error("cost must be a number, got " + typeof e);
                    if (e > 0 == 0) throw new Error("cost must be a positive number, got " + e);
                    this.cost = e
                }, t.Z = o
            },
            2399: function(e, t, i) {
                "use strict";
                i.d(t, {
                    Z: function() {
                        return v
                    }
                });
                var n, o = i(4918),
                    a = i(7422),
                    r = {
                        cookieName: "_aeaid",
                        lookup: function() {
                            if (r._cache) return r._cache;
                            var e = a.Z.get(r.cookieName) || r._uuid();
                            return a.Z.set("_aeaid", e, 365, "days"), r._cache = e, e
                        },
                        _uuid: function() {
                            var e, t, i = "";
                            for (e = 0; e < 32; e++) t = 16 * Math.random() | 0, 8 != e && 12 != e && 16 != e && 20 != e || (i += "-"), i += (12 == e ? 4 : 16 == e ? 3 & t | 8 : t).toString(16);
                            return i
                        },
                        _cache: null
                    },
                    s = r,
                    l = function() {
                        var e = this;

                        function t() {
                            var t = e.controlbarElems();
                            if (t.length <= 1) return window.ae_jQuery("#ae_bar_cycle").hide(), window.ae_jQuery(".ae-module-controls").removeAttr("data-tab"), !1;
                            window.ae_jQuery("#ae_bar_cycle").show();
                            for (var i = 0; i < t.length; i++) e.controlbarElems().eq(i).attr("data-tab", i)
                        }
                        this.activate = function() {
                            this.active = !0, window.ae_jQuery("#ae_module_controlbar").clickOrEnter("", ".ae-controlbar-exitbtn", (function() {
                                var e = window.ae_jQuery(this).closest(".ae-module").attr("id").replace("ae_", "");
                                "reader" !== e ? v.setModuleActive(e, !1) : AudioEye.reader.okToCloseModule(this)
                            })), window.ae_jQuery("#ae_module_controlbar").clickOrEnter("", ".aetipsytip", (function() {
                                v.killTooltips()
                            })), window.ae_jQuery(window).resize((function() {
                                ! function() {
                                    var i = function(t) {
                                        var i;
                                        if (i = window.ae_jQuery(window).width() > 500 ? "d" : "m", e.curView !== i) return e.curView = i, i
                                    }();
                                    if (!i) return !1;
                                    e.remove(), "m" === i && (t(), window.ae_jQuery("#ae_app").register("AfterModuleActivate.controlbar", (function(i) {
                                        var n, o = i.detail; - 1 !== e.controlbarNames().indexOf(o.module) && (t(), n = v.verifyJSON(a.Z.get("aemoduleactivation")), !(n = JSON.parse(n) || {})[o.module] && function(t) {
                                            for (var i = 3; e.frontTab().attr("id").replace("ae_", "") !== t && i;) e.cycle(), --i
                                        }(o.module))
                                    })), window.ae_jQuery("#ae_app").register("AfterModuleDeactivate.controlbar", (function(e) {
                                        var i = e.detail;
                                        window.ae_jQuery("#ae_" + i.module).length && t()
                                    })), window.ae_jQuery("#ae_bar_cycle").clickOrEnter("controlbar", (function() {
                                        e.cycle()
                                    })))
                                }()
                            })), window.ae_jQuery(window).resize()
                        }, this.remove = function() {
                            window.ae_jQuery(".ae-module-controls").removeAttr("data-tab"), window.ae_jQuery("#ae_bar_cycle").hide(), window.ae_jQuery.unregister("controlbar"), this.active = !1
                        }, this.controlbarElems = function() {
                            return window.ae_jQuery("#ae_module_controlbar .ae-module-controls.active")
                        }, this.controlbarNames = function() {
                            return this.controlbarElems().toArray().map((function(e) {
                                return window.ae_jQuery(e).attr("id").replace("ae_", "")
                            }))
                        }, this.frontTab = function() {
                            return window.ae_jQuery('.ae-tab[data-tab="0"]')
                        }, this.cycle = function() {
                            e.controlbarElems().each((function() {
                                var t = parseInt(window.ae_jQuery(this).attr("data-tab"));
                                t + 1 === e.controlbarNames().length ? window.ae_jQuery(this).attr("data-tab", 0) : window.ae_jQuery(this).attr("data-tab", t + 1)
                            }))
                        }, this.curView = null
                    },
                    c = i(138),
                    u = i(3739),
                    d = (i(8179), AudioEye.productConfig),
                    m = {},
                    f = {
                        imgAlt: "ae-img-alt"
                    },
                    h = window == window.top ? "parent" : "iframe",
                    p = new o.Z("utilities@" + h),
                    g = {
                        getCookie: a.Z.get,
                        setCookie: a.Z.set,
                        userAgent: window.navigator ? window.navigator.userAgent : void 0,
                        deviceMaxWidths: {
                            mobile: 500,
                            tablet: 900,
                            desktop: 1400,
                            large: 1e4
                        },
                        module_props: {
                            reader: {
                                contrast_schemes: ["blueyellow", "navylime", "maroonwhite", "darken", "blackwhite", "default"],
                                reader_fonts: ["lato", "georgia", "opendyslexic"]
                            },
                            activity_panel_mods: ["rotor", "user-settings", "help", "helpdesk", "certification", "site-menu"]
                        },
                        htmlClasses: f,
                        ignoreSelectors: "script, noscript, link, style, br, input[type='hidden'], input[type='Hidden'], .ae-blurb-noaudio, ." + f.imgAlt + ", .ae-tipsy, .ae-disabled-carousel-message",
                        excludeSelectors: d.excludes,
                        bind: function(e, t) {
                            if (!t || !window.ae_jQuery.isFunction(t)) throw new Error("utilities.bind requires a function as the second argument");
                            var i = Array.prototype.slice.call(arguments, 2);
                            return function() {
                                var n = i.concat(Array.prototype.slice.call(arguments));
                                return t.apply(e, n)
                            }
                        },
                        capitalize: function(e) {
                            return "string" != typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1)
                        },
                        find: function(e, t) {
                            if (!e) return p.info("find() called without valid array"), !1;
                            if (!window.ae_jQuery.isFunction(t)) return p.info("find() called without valid predicate function"), !1;
                            for (var i, n = e.length, o = 0; o < n; o++)
                                if (t(e[o])) {
                                    i = e[o];
                                    break
                                }
                            return i
                        },
                        objAssign: function(e) {
                            if ("function" == typeof Object.assign) return Object.assign.apply(Object, arguments);
                            if (null == e) throw new TypeError("Cannot convert undefined or null to object");
                            for (var t = Object(e), i = 1; i < arguments.length; i++) {
                                var n = arguments[i];
                                if (null != n)
                                    for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o])
                            }
                            return t
                        },
                        arrValidate: function(e, t) {
                            if (!e) return p.info("arrValidate() called without valid array"), !1;
                            if (!window.ae_jQuery.isFunction(t)) return p.info("arrValidate() called without valid predicate function"), !1;
                            for (var i, n = e.length, o = 0; o < n && void 0 === (i = t(e[o])); o++);
                            return i
                        },
                        urlParamsToObj: function(e) {
                            var t = {};
                            if (!e || !e.length) return t;
                            for (var i = ("?" === e[0] ? e.substr(1) : e).split("&"), n = 0; n < i.length; n++) {
                                var o = i[n].split("=");
                                if (0 !== o[0].length) try {
                                    var a = decodeURIComponent(o[0]),
                                        r = decodeURIComponent(o[1] || "");
                                    t[a] = r
                                } catch (e) {
                                    continue
                                }
                            }
                            return t
                        },
                        removeUrlParamsByKey: function(e, t) {
                            var i = e.search,
                                n = "?" === i[0] ? i.substr(1) : i,
                                o = n.split("&").filter((function(e) {
                                    var i = e.split("=")[0];
                                    return 0 !== i.length && t.every((function(e) {
                                        return i !== e
                                    }))
                                }));
                            return e.href.replace(n, o.join("&"))
                        },
                        genUniqSelect: function(e, t) {
                            var i;
                            if (t = t || document, !e || !e[0]) return !1;
                            var n = e.attr("id");
                            if (n) {
                                i = '[id="' + n + '"]';
                                var o = window.ae_jQuery(t).find(i);
                                return o.length > 1 ? i + ":eq(" + o.index(e) + ")" : i
                            }
                            var a = g.generateID("uniq", t);
                            return e.attr("id", a), "#" + a
                        },
                        localize: function(e, t) {
                            return (t = t || AudioEye.lang) && e && e[t] ? e[t] : ""
                        },
                        keyAccess: function(e, t) {
                            if (e && t && Array.isArray(t)) {
                                for (var i = t.length, n = e, o = 0; o < i; o++) {
                                    var a = t[o];
                                    try {
                                        n = n[a]
                                    } catch (e) {
                                        n = void 0;
                                        break
                                    }
                                }
                                return n
                            }
                            p.error("Invalid args in utilities.keyAccess")
                        },
                        getLocalizedContent: function(e, t) {
                            if (!t.length) return p.error("Key cannot be empty" + t), !1;
                            var i = g.keyAccess(e, t);
                            return i ? i = g.localize(i) : (p.info("No content for" + d), !1)
                        },
                        isFirefox: function() {
                            return !!this.userAgent && this.userAgent.toLowerCase().indexOf("firefox") > -1
                        },
                        values: function(e) {
                            return Object.keys(e).map((function(t) {
                                return e[t]
                            }))
                        },
                        isInteger: function(e) {
                            return Number && "function" == typeof Number.isInteger ? Number.isInteger(e) : "number" == typeof e && isFinite(e) && Math.floor(e) === e
                        },
                        getTopLevelConfig: function(e) {
                            return g.keyAccess(d, [e])
                        },
                        removeLoaderjsTag: function() {
                            var e = document.getElementById("audioeye_loader");
                            e ? e.parentNode.removeChild(e) : p.info("Failed to remove loader.js - could not find element with id audioeye_loader")
                        },
                        getAllModules: function() {
                            return Object.keys(d).filter((function(e) {
                                return !!d[e] && void 0 !== d[e].service
                            }))
                        },
                        getAvailableModules: function() {
                            return Object.keys(d).filter((function(e) {
                                return !!d[e] && (!d[e] || "certification" !== e || "4" !== d[e].version) && d[e].service
                            }))
                        },
                        iframeLoadPermission: function(e) {
                            return "voice" !== e
                        },
                        getActiveModules: function() {
                            return Object.keys(AudioEye).filter((function(e) {
                                return !!AudioEye[e] && !0 === AudioEye[e].active
                            }))
                        },
                        getPrevActiveModules: function() {
                            var e = this.getAvailableModules(),
                                t = a.Z.get("aemoduleactivation");
                            return t ? (t = JSON.parse(this.verifyJSON(t)) || {}, Object.keys(t).filter((function(i) {
                                if (-1 !== e.indexOf(i) && !0 === t[i]) return !0
                            }))) : []
                        },
                        getStartupModules: function() {
                            var e, t = ["compliance", "launcher", "excludes", "carousels", "tabsets"],
                                i = {};
                            return e = "true" === a.Z.get("aeproductlaunched") ? this.getPrevActiveModules() : [], this.getAvailableModules().forEach((function(n) {
                                -1 === e.indexOf(n) || u.Z.isPreviewMode() ? -1 !== t.indexOf(n) && (i[n] = !1) : i[n] = !0
                            })), g.inIframe() && Object.keys(i).filter((function(e) {
                                g.iframeLoadPermission(e) || delete i[e]
                            })), void 0 === i.launcher || i.toolbar || (i.launcher = !0), !d.admin || !0 !== d.admin.service || "true" !== a.Z.get("ae_admin_panel") && "true" !== g.getParamByName("ae_admin") || (i = {
                                launcher: !1,
                                toolbar: !0,
                                admin: !0
                            }), i
                        },
                        inComplianceOnly: function() {
                            return g.getAvailableModules().every((function(e) {
                                return "compliance" === e
                            }))
                        },
                        getParamByName: function(e, t) {
                            t || (t = window.location.href), e = e.replace(/[\[\]]/g, "\\$&");
                            var i = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(t);
                            return i ? i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "" : null
                        },
                        updateUrlParameter: function(e, t, i) {
                            var n = e.indexOf("#"),
                                o = -1 === n ? "" : e.substr(n);
                            e = -1 === n ? e : e.substr(0, n);
                            var a = new RegExp("([?&])" + t + "=.*?(&|$)", "i"),
                                r = -1 !== e.indexOf("?") ? "&" : "?";
                            return (e = e.match(a) ? e.replace(a, "$1" + t + "=" + i + "$2") : e + r + t + "=" + i) + o
                        },
                        removeURLParam: function(e, t) {
                            var i = e.split("?");
                            if (i.length >= 2) {
                                for (var n = encodeURIComponent(t) + "=", o = i[1].split(/[&;]/g), a = o.length; a-- > 0;) - 1 !== o[a].lastIndexOf(n, 0) && o.splice(a, 1);
                                return i[0] + (o.length > 0 ? "?" + o.join("&") : "")
                            }
                            return e
                        },
                        getCurrentDevice: function() {
                            var e, t, i, n, o;
                            n = window.ae_jQuery(window).width(), o = (t = Object.keys(g.deviceMaxWidths)).length;
                            for (var a = 0; a < o; a++)
                                if (i = t[a], g.deviceMaxWidths[i] > n) {
                                    e = i;
                                    break
                                }
                            return e
                        },
                        initControlBars: function() {
                            AudioEye.controlBar || (AudioEye.controlBar = new l, AudioEye.controlBar.activate())
                        },
                        findActivePageLink: function(e) {
                            var t = e.find('a[href="' + window.location.href + '"]').eq(0);
                            if (0 === t.length && e.find('a[href="' + window.location.pathname + window.location.search + '"]').eq(0), 0 === t.length && (t = e.find('a[href="' + window.location.pathname + window.location.hash + '"]').eq(0)), 0 === t.length && (t = (t = e.find('a[href$="' + window.location.pathname.substr(1) + window.location.hash + '"]').filter((function() {
                                    return window.ae_jQuery(this).is('[href*="' + window.location.hostname + '"]')
                                }))).eq(0)), 0 === t.length && "?" === window.location.href.substr(-1) && (t = e.find('a[href$="' + window.location.hostname + window.location.pathname + window.location.hash + '?"]').eq(0)), 0 === t.length && "/" === window.location.pathname.substr(-1) && (t = e.find('a[href$="' + window.location.pathname.substr(0, window.location.pathname.length - 1) + window.location.hash + '"]').eq(0)), 0 === t.length && "/" !== window.location.pathname.substr(-1) && 0 === (t = e.find('a[href$="' + window.location.pathname + "/" + window.location.hash + '"]').eq(0)).length && (t = e.find('a[href$="' + window.location.pathname.substr(1) + "/" + window.location.hash + '"]').eq(0)), "/" === window.location.pathname && 0 === t.length) {
                                var i = "";
                                i = window.location.hostname.match(/www\./) ? window.location.hostname.substr(4) : window.location.hostname, 0 === (t = e.find('a[href$="www.' + i + window.location.hash + '"]').eq(0)).length && (t = e.find('a[href$="www.' + i + "/" + window.location.hash + '"]').eq(0));
                                var n = new RegExp("^(?!www)\\w+\\." + i.replace(/\./g, "\\."));
                                0 === (t = e.find('a[href$="' + i + window.location.hash + '"]').filter((function() {
                                    return !n.test(this.hostname)
                                })).eq(0)).length && (t = e.find('a[href$="' + i + "/" + window.location.hash + '"]').filter((function() {
                                    return !n.test(this.hostname)
                                })).eq(0))
                            }
                            return t
                        },
                        applyLayoutHelpers: function(e) {
                            if (e || (e = window.ae_jQuery("html")), !AudioEye.layoutHelpers || 0 === AudioEye.layoutHelpers.length) return !1;
                            AudioEye.layoutHelpers.forEach((function(t) {
                                "function" == typeof t && t(e)
                            }))
                        },
                        buildImageAlt: function(e) {
                            if (e.is("[alt]") && "" === e.attr("alt").trim()) return c.Z.set(e, "decorative-image"), !1;
                            if (!e.is("[src]") || "" === e.attr("src").trim()) return !1;
                            var t = g.generateID("ae_alt"),
                                i = window.ae_jQuery('<div id="' + t + '" class="' + g.htmlClasses.imgAlt + '">').insertAfter(e);
                            return i.html(g.getTextForImage(e)), i
                        },
                        hexToRgb: function(e) {
                            var t = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (function(e, t, i, n) {
                                    return t + t + i + i + n + n
                                })),
                                i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
                            return i ? {
                                r: parseInt(i[1], 16),
                                g: parseInt(i[2], 16),
                                b: parseInt(i[3], 16)
                            } : null
                        },
                        luminance: function(e) {
                            var t = [e.r, e.g, e.b].map((function(e) {
                                var t = e / 255;
                                return t <= .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                            }));
                            return .2126 * t[0] + .7152 * t[1] + .0722 * t[2]
                        },
                        rgbContrast: function(e, t) {
                            var i = g.luminance(e),
                                n = g.luminance(t);
                            return (Math.max(i, n) + .05) / (Math.min(i, n) + .05)
                        },
                        validHex: function(e) {
                            return /^#?[0-9A-F]{6}$/i.test(e) || /^#?[0-9A-F]{3}$/i.test(e)
                        },
                        isLowWhiteContrast: function(e, t) {
                            var i = t || 3;
                            return g.rgbContrast(g.hexToRgb(e), {
                                r: 255,
                                g: 255,
                                b: 255
                            }) < i
                        },
                        iframes: {
                            allowedOrigins: [],
                            _location: function() {
                                for (var e = window;
                                    "about:" === e.location.protocol;) {
                                    if (!e.parent) return void p.error("No valid location information for this page. AudioEye cannot load");
                                    e = e.parent
                                }
                                return {
                                    protocol: e.location.protocol,
                                    hostname: e.location.hostname,
                                    port: e.location.port
                                }
                            },
                            classes: {
                                body: "ae-iframe-body"
                            },
                            body: window.ae_jQuery(document.body),
                            config: d.iframes || {},
                            domInit: function(e) {
                                if (!e) return !1;
                                this.body.addClass(this.classes.body)
                            },
                            getParent: function() {
                                return window.parent
                            },
                            getAllowedOrigins: function() {
                                return this.allowedOrigins.length || (this.allowedOrigins = this.generateOriginAliases(), this.config["allowed-origins"] && (this.allowedOrigins = this.allowedOrigins.concat(this.config["allowed-origins"])), this.allowedOrigins.push("https://customer-portal.audioeye.com"), this.allowedOrigins.push("https://darkprod-portal.audioeye.com"), this.allowedOrigins.push("https://stage-portal.audioeye.com"), this.allowedOrigins.push("https://dev-portal.audioeye.com"), this.allowedOrigins.push(AudioEye.client_url), this.allowedOrigins.push("https://audioeye.com"), this.allowedOrigins.push("https://portal.audioeye.com"), -1 === this.allowedOrigins.indexOf("https://" + AudioEye.portal_url) && this.allowedOrigins.push("https://" + AudioEye.portal_url)), this.allowedOrigins
                            },
                            isAllowedOrigin: function(e) {
                                return this.getAllowedOrigins().some((function(t) {
                                    return t === e
                                }))
                            },
                            getOrigin: function() {
                                var e = this._location();
                                return e.protocol + "//" + e.hostname + (e.port ? ":" + e.port : "")
                            },
                            generateOriginAliases: function() {
                                var e, t = this.getOrigin(),
                                    i = this._location(),
                                    n = [];
                                if (n.push(t), 0 === t.indexOf("https://")) e = t.replace("https://", "http://");
                                else {
                                    if (0 !== t.indexOf("http://")) return p.error("Unrecognized protocol in origin"), !1;
                                    e = t.replace("http://", "https://")
                                }
                                if (n.push(e), 0 === i.hostname.indexOf("www.")) {
                                    var o = i.hostname.slice(4) + (i.port ? ":" + i.port : "");
                                    n.push("http://" + o), n.push("https://" + o)
                                } else if (2 === i.hostname.split(".").length) {
                                    var a = "www." + i.hostname + (i.port ? ":" + i.port : "");
                                    n.push("http://" + a), n.push("https://" + a)
                                }
                                return n
                            },
                            getResponseActions: function(e) {
                                var t = [];
                                return e.detail.id || t.push("sendId"), "ping" === e.detail.method && "true" === e.success ? t.push("pong") : e.detail.module && AudioEye[e.detail.module] && AudioEye[e.detail.module].handleFrameResponse && t.push("moduleHandler"), e.detail.timestamp && g.iframes.messageRegistry.get(e.detail.timestamp) && t.push("resolvePromise"), t
                            },
                            getFrameFromWindow: function(e) {
                                var t = g.safeFrames(document.body).filter((function() {
                                        return 0 === window.ae_jQuery(this).closest(c.Z.selector("exclude")).length
                                    })),
                                    i = !1;
                                return t.each((function() {
                                    if (window.ae_jQuery(this)[0].contentWindow === e) return i = this, !1
                                })), i
                            },
                            responseActions: {
                                sendId: function(e, t) {
                                    var i = g.iframes.getFrameFromWindow(t.source);
                                    if (!i) return p.debug("No valid frames for window", e), !1;
                                    g.registerIframe(i), e.detail.id = window.ae_jQuery(i).attr("id"), e.detail.id && g.sendFrameAPIRequest(t.source, "ping", {
                                        id: e.detail.id
                                    })
                                },
                                pong: function(e) {
                                    var t = m[e.detail.id];
                                    t.status = "active", t.activated.resolve()
                                },
                                moduleHandler: function(e) {
                                    AudioEye[e.detail.module].handleFrameResponse(e)
                                },
                                resolvePromise: function(e) {
                                    g.iframes.messageRegistry.get(e.detail.timestamp).resolve(e.success, e.detail), g.iframes.messageRegistry.remove(e.detail.timestamp)
                                }
                            },
                            onModuleReady: function(e, t) {
                                var i = window.ae_jQuery.Deferred();
                                return !!(e && e.activated && e.element) && !!t && (e.activated.done((function() {
                                    var n = e.element.contentWindow;
                                    n ? g.sendFrameAPIRequest(n, "utilities", "onModuleReady", t).done((function(e) {
                                        e ? i.resolve() : i.reject("onModuleReady failed")
                                    })) : i.reject("no frame window")
                                })), i.promise())
                            },
                            messageRegistry: {
                                register: function(e) {
                                    var t = g.iframes.messageRegistry.getStamp();
                                    return this.table[t] = e, t
                                },
                                get: function(e) {
                                    return this.table[e]
                                },
                                remove: function(e) {
                                    delete this.table[e]
                                },
                                getStamp: function() {
                                    for (var e = Date.now().toString(); this.table[e];) e += "-";
                                    return e
                                },
                                table: {}
                            },
                            parseMessage: function(e) {
                                var t = e.data || "{}";
                                if ("string" != typeof t) return null;
                                try {
                                    t = JSON.parse(t)
                                } catch (e) {
                                    return p.debug("JSON Parse error: " + e), null
                                }
                                return t
                            },
                            validateMessage: function(e) {
                                return e && "AudioEye" === e.object
                            },
                            getCallableFormat: function(e, t, i, n) {
                                var o = {
                                    module: null,
                                    method: null,
                                    args: []
                                };
                                if (o.module = "utilities" === e ? g : e ? AudioEye[e] : AudioEye, "loading" === o.module) throw new Error("Cannot execute method. Module is not yet loaded");
                                if (!o.module) throw new Error("Module does not exist");
                                if (o.method = o.module[t], !t) throw new Error('Method "' + t + '" does not exist');
                                return o.args = this.getCallableArgs(i, n), o
                            },
                            getCallableArgs: function(e, t) {
                                var i, n = [];
                                return t && n.push(t), e ? 1 === (i = Object.keys(e)).length && "params" === i[0] && Array.isArray(e.params) ? n = e.params.concat(n) : (window.ae_jQuery.isEmptyObject(e) || n.unshift(e), n) : n
                            },
                            execRequest: function(e, t, i, n) {
                                var o = {},
                                    a = window.ae_jQuery.Deferred();
                                try {
                                    var r = g.iframes.getCallableFormat(e, t, i, n);
                                    o.result = r.method.apply(r.module, r.args)
                                } catch (e) {
                                    o = {
                                        result: "error",
                                        message: e.message
                                    }, p.info("Could not execute iframe request for reason: ", e)
                                }
                                return g.isPromise(o.result) ? o.result.done((function(e) {
                                    o.result = e, a.resolve(o)
                                })) : a.resolve(o), a.promise()
                            },
                            constructResponse: function(e, t) {
                                var i = {
                                    status: null,
                                    detail: {
                                        method: e.method
                                    }
                                };
                                return e.module && (i.detail.module = e.module), e.timestamp && (i.detail.timestamp = e.timestamp), i.detail.message = t.message, void 0 === t.result || null === t.result ? i.status = "true" : "object" == typeof t.result && t.result.detail && t.result.status ? (i.detail = window.ae_jQuery.extend(t.result.detail, i.detail), i.status = t.result.status) : g.isPromise(t.result) || (i.status = !!t.result), i
                            },
                            respond: function(e, t, i) {
                                var n = g.iframes.constructResponse(t, i);
                                g.sendFrameAPIResponse(e, n.status, n.detail)
                            },
                            getRegisteredWindows: function() {
                                var e = g.getFrameRegistry();
                                return Object.keys(e || {}).map((function(t) {
                                    return e[t].element.contentWindow
                                }))
                            }
                        },
                        isSearchableIframe: function(e) {
                            if (e.jquery || (e = window.ae_jQuery(e)), 0 === e.length) return !1;
                            if (!(e = e.eq(0)).is("iframe")) return !1;
                            if (!e.attr("id")) return !1;
                            var t = g.getFrameRegistry(e.attr("id"));
                            return !(!t || !t.activated || "resolved" !== t.activated.state() || e.is(":hidden"))
                        },
                        registerIframe: function(e) {
                            var t;
                            if ("IFRAME" !== e.nodeName) return !1;
                            var i = window.ae_jQuery(e).attr("id");
                            return i || (i = this.generateID("ae-iframe"), window.ae_jQuery(e).attr("id", i)), window.ae_jQuery(e).on("load", (function() {
                                var t = g.getFrameRegistry(i),
                                    n = t && t.status ? t.status : "";
                                "loaded" === n && "active" === n || g.injectScript(i, e)
                            })), t = this.injectScript(i, e), a.Z._sendCookiesToNewIframe(t), "waiting" === t.status ? g.pollIframe.start(i, t) : g.pollIframe.stop(i), t
                        },
                        pollIframe: {
                            start: function(e, t) {
                                var i = this;
                                if (void 0 !== i.polling[e]) return !1;
                                i.polling[e] = window.setInterval(g.bind(this, this.registerById, e), 250), window.setTimeout((function() {
                                    i.stop(e)
                                }), 1e4), t.activated.done(g.bind(this, this.stop, e))
                            },
                            registerById: function(e) {
                                var t = "#" + g.safeSelectorText(e),
                                    i = window.ae_jQuery(t);
                                i.length ? g.registerIframe(i[0]) : this.stop(e)
                            },
                            stop: function(e) {
                                return void 0 !== this.polling[e] && window.clearInterval(this.polling[e])
                            },
                            polling: {}
                        },
                        injectScript: function(e, t) {
                            var i = m[e] || {
                                element: t,
                                status: "waiting",
                                activated: window.ae_jQuery.Deferred(),
                                sentCookies: !1
                            };
                            try {
                                if (t.contentWindow && t.contentWindow.document) {
                                    if (window.ae_jQuery(t.contentDocument.body).children().eq(0).length) {
                                        var n = t.contentWindow.document.body,
                                            o = window.ae_jQuery(n).find("script").filter((function() {
                                                return -1 !== (window.ae_jQuery(this).attr("src") || "").indexOf("audioeye.com/ae.js")
                                            })).length;
                                        if (void 0 === t.contentWindow.AudioEye && void 0 === t.contentWindow.__AudioEyeInitialLoadFlag) {
                                            if (!o) {
                                                var a = t.contentDocument.createElement("script");
                                                a.src = AudioEye.gtm_url, a.setAttribute("data-audioeye-site-hash", AudioEye.site_hash), t.contentDocument.body.appendChild(a)
                                            }
                                        } else i.status = "loaded"
                                    }
                                } else i.offsite = !0
                            } catch (e) {
                                e.message.indexOf("Blocked a frame with origin") > -1 ? p.debug("Error occured while injecting script: " + e.message + " Target url: " + t.src) : p.debug("Error occurred while injecting script: " + e.message), i.offsite = !0, i.status = "cross-origin"
                            } finally {
                                return i && (t.contentWindow && g.sendFrameAPIRequest(t.contentWindow, "ping", {
                                    id: e
                                }).done((function(e) {
                                    i.activated.resolve(e)
                                })), m[e] = i), i
                            }
                        },
                        getFrameRegistry: function(e) {
                            return this.cleanFrameRegistry(), e ? m[e] || !1 : m
                        },
                        cleanFrameRegistry: function() {
                            Object.keys(m).forEach((function(e) {
                                m[e].element.contentWindow || delete m[e]
                            })), m || (m = {})
                        },
                        clearFrameRegistry: function() {
                            m = {}
                        },
                        onFrameRegister: function(e) {
                            AudioEye.frame_id ? e() : window.ae_jQuery("#ae_app").off("IframeRegistered").on("IframeRegistered", (function() {
                                e()
                            }))
                        },
                        sendFrameAPIRequest: function(e, t, i, n) {
                            var o, a = window.ae_jQuery.Deferred();
                            if (!e) return g.cleanFrameRegistry(), !1;
                            void 0 === n && (void 0 === i ? (i = t, t = void 0) : "object" == typeof i && (n = i, i = t, t = void 0));
                            var r = {
                                object: "AudioEye",
                                method: i,
                                detail: n = n || {}
                            };
                            return t && (r.module = t), o = g.iframes.messageRegistry.register(a), r.timestamp = o, "string" == typeof e ? g.postToFrameByID(e, r) : g.postToFrame(e, r), a.promise()
                        },
                        sendFrameAPIResponse: function(e, t, i) {
                            if (i = window.ae_jQuery.isPlainObject(i) ? i : {}, !e) return g.cleanFrameRegistry(), !1;
                            if ("function" != typeof e.postMessage) return p.info("Frame window did not have a postMessage method"), !1;
                            AudioEye && AudioEye.iframe_id && (i.id = AudioEye.iframe_id);
                            var n = {
                                object: "AudioEye",
                                success: t,
                                detail: i
                            };
                            g.postToFrame(e, n)
                        },
                        postToFrameByID: function(e, t) {
                            var i = g.getFrameRegistry();
                            i[e] && i[e].activated.then((function() {
                                var i = document.getElementById(e);
                                return i && i.contentWindow ? (g.postToFrame(i.contentWindow, t), null) : (p.info("iframe request not sent: iframe is no longer present."), void g.cleanFrameRegistry())
                            }))
                        },
                        postToFrame: function(e, t) {
                            var i;
                            p.debug("If this is the last log before a crash check messageData for a circular reference");
                            try {
                                i = JSON.stringify(t)
                            } catch (e) {
                                return p.error("postToFrame: Failed to stringify postMessage payload"), !1
                            }
                            if (!i.length) return p.info("JSON.stringify returned empty result"), !1;
                            try {
                                e.postMessage(i, "*")
                            } catch (t) {
                                "Invalid calling object" === t.message ? p.info("Received Expected IE postMessage error for empty 3rd party iframe: " + t.message) : e ? e.postMessage ? p.error("postToFrame: error ", t) : p.error("postToFrame: postMessage is not defined", t) : p.error("postToFrame: Failed postMessage, frame_window did not exist", t)
                            }
                        },
                        safeFrames: function(e) {
                            e = e ? window.ae_jQuery(e) : window.ae_jQuery(document.body);
                            var t = d.iframes && d.iframes["unsafe-sources"] ? d.iframes["unsafe-sources"] : [];
                            return e.outerFind("iframe").filter((function() {
                                var e = window.ae_jQuery(this);
                                return t.every((function(t) {
                                    return -1 === (e.attr("src") || "").indexOf(t)
                                }))
                            }))
                        },
                        getTextForImage: function(e) {
                            return e.attr("aria-describedby") ? window.ae_jQuery("#" + g.safeSelectorText(e.attr("aria-describedby"))).html() : e.is("[alt]") ? e.attr("alt") : e.attr("title") ? e.attr("title") : e.attr("name") ? e.attr("name") : e.attr("src") ? e.attr("src").split("/").pop().split(".").shift().substr(0, 8) : ""
                        },
                        buildTabset: function(e) {
                            if (window.ae_jQuery(e).find(c.Z.selector("tabset-tab")).length > 0) {
                                var t = window.ae_jQuery(e).find(c.Z.selector("tabset-tab"));
                                if (t.length > 0 && 0 === window.ae_jQuery(e).find(c.Z.selector("tabset-activetab")).length) {
                                    var i = this.findActivePageLink(t.parent());
                                    0 === i.length && (i = t.eq(0).outerFind("a")), i.length > 0 && c.Z.set(i, "tabset-activetab")
                                }
                                window.ae_jQuery(e).attr("data-ae-blurbtype", "tabset").find(c.Z.selector("tabset-tab")).on("click.tabset", (function() {
                                    c.Z.unset(window.ae_jQuery(e).find(c.Z.selector("tabset-activetab")), "tabset-activetab"), c.Z.set(window.ae_jQuery(this), "tabset-activetab")
                                }))
                            }
                            return e
                        },
                        loopTabs: function(e) {
                            if (9 === e.keyCode) {
                                var t = window.ae_jQuery(this).find(":tabbable");
                                if (e.shiftKey && window.ae_jQuery(e.target).is(t.first())) e.preventDefault(), e.stopPropagation(), AudioEye.focusElement(t.last());
                                else {
                                    if (e.shiftKey || !window.ae_jQuery(e.target).is(t.last())) return !0;
                                    e.preventDefault(), e.stopPropagation(), AudioEye.focusElement(t.first())
                                }
                            }
                        },
                        sequence: function(e) {
                            return function(t) {
                                for (var i = 0; i < e.length; i++) t = e[i].call(this, t);
                                return t
                            }
                        },
                        aeCssUrl: function(e) {
                            return AudioEye.client_url + "/css/" + e + "?cb=" + AudioEye.cb
                        },
                        scrollAnimate: function(e, t, i) {
                            var o, a, r, s = window.ae_jQuery("html").add(window.ae_jQuery(document.body));
                            if (void 0 === i && void 0 !== t && window.ae_jQuery.isFunction(t) && (i = t, t = void 0), void 0 === t && (t = {
                                    top: 0
                                }), e.scrollParent()[0] === document || e.scrollParent().is(window.ae_jQuery("html").add(window.ae_jQuery(document.body))) ? r = g.getScrollOffsetTop(e.offset().top, t.top) : (s = e.scrollParent(), a = e.offset().top - s.offset().top, r = (a -= s.height() / 4) + s.scrollTop() + t.top - 10), o = g.calculateScrollTime(e.scrollParent().scrollTop(), r), !(e.parentsUntil(s).addBack().filter((function() {
                                    return "fixed" === window.ae_jQuery(this).css("position")
                                })).length > 0)) return this.scrollCancel(), n = window.ae_jQuery.Deferred(), s.animate({
                                scrollTop: r
                            }, o, "swing").promise().done((function() {
                                n.resolve()
                            })), n.done((function() {
                                window.ae_jQuery.isFunction(i) && i()
                            })).fail((function() {
                                s.stop()
                            })).promise();
                            window.setTimeout((function() {
                                window.ae_jQuery.isFunction(i) && i()
                            }), o)
                        },
                        getScrollOffsetTop: function(e, t) {
                            var i = e + t - 10;
                            return Math.max(1, i - this.getViewportHeight() / 4)
                        },
                        getViewportHeight: function() {
                            return window.innerHeight
                        },
                        calculateScrollTime: function(e, t) {
                            var i;
                            return i = Math.abs(e - t), Math.min(500, Math.ceil(i / 2))
                        },
                        scrollCancel: function() {
                            n && (n.reject(), n = null)
                        },
                        applyHighlight: function(e) {
                            if (!e && 0 === e.length) return null;
                            if (e.is("span")) {
                                if (e.children("img").length) return this.applyHighlight(e.children("img").eq(0));
                                c.Z.set(e, "active-background")
                            } else {
                                var t, i, n, o, a, r, s, l;
                                if (e.is("area") ? (o = window.ae_jQuery("img[usemap=#" + e.closest("map").attr("name") + "]"), r = !0) : o = e, !o || 0 === o.length) return null;
                                if (t = o.outerHeight(), i = o.outerWidth(), n = o.offset(), 0 === t && o.children().each((function() {
                                        t += window.ae_jQuery(this).outerHeight()
                                    })), 0 === i && o.children().each((function() {
                                        window.ae_jQuery(this).outerWidth() > i && (i = window.ae_jQuery(this).outerWidth(), n.left = window.ae_jQuery(this).offset().left)
                                    })), a = window.ae_jQuery('<div class="ae-active-wrap-overlay ae-active-background" data-audioeye-active-background></div>').css({
                                        width: i,
                                        height: t,
                                        top: n.top,
                                        left: n.left
                                    }), r) switch (c.Z.unset(a, "active-background"), r = window.ae_jQuery('<canvas width="' + i + '" height="' + t + '"></canvas>'), a.append(r), (s = r[0].getContext("2d")).fillStyle = "#9bca39", l = e.attr("coords").split(","), e.attr("shape")) {
                                    case "rect":
                                        s.fillRect(l[0], l[1], l[2] - l[0], l[3] - l[1]);
                                        break;
                                    case "circle":
                                        s.beginPath(), s.arc(l[0], l[1], l[2], 0, 2 * Math.PI), s.fill();
                                        break;
                                    default:
                                        s.moveTo(l[0], l[1]), l.forEach((function(e, t) {
                                            t % 2 == 0 && l[t + 1] && s.lineTo(e, l[t + 1])
                                        })), s.closePath(), s.fill()
                                }
                                a.appendTo(document.body), r && r.fadeOut(1e3)
                            }
                            window.setTimeout((function() {
                                c.Z.unset(e, "active-background"), window.ae_jQuery(".ae-active-wrap-overlay").remove()
                            }), 1e3)
                        },
                        generateID: function(e, t) {
                            var i, n;
                            for (t = t || document, e = e.replace(/\W/g, "_"), i = 0; i < 10; i += 1)
                                if (n = e ? e + "_" : "", n += Math.random().toString(36).substr(2, 8), 0 === window.ae_jQuery(t).find("#" + n).length) return n;
                            for (i = 1e3; i < 9999; i += 1)
                                if (0 === window.ae_jQuery(t).find("#" + n + i).length) return n + i;
                            return n + Math.random().toString(36).substr(2, 8)
                        },
                        uniqItems: function(e) {
                            var t = {};
                            return e.filter((function(e) {
                                return !t.hasOwnProperty(e) && (t[e] = !0)
                            }))
                        },
                        toggleModule: function(e, t, i) {
                            return i = i || !1, "loading" === AudioEye[e] ? "loading" : AudioEye[e] && AudioEye[e].isRunningWithControlBarClosed && AudioEye[e].isRunningWithControlBarClosed() ? (AudioEye[e].reopenControlBar(), "re-opening control bar") : AudioEye[e] && AudioEye[e].okToCloseModule && !AudioEye[e].okToCloseModule(t) ? "cancelled" : AudioEye[e] && AudioEye[e].active ? (g.setModuleActive(e, !1), !1) : (g.setModuleActive(e, !0, null, i), !0)
                        },
                        loadModule: function(e, t) {
                            var i = [];
                            if (!e) return !1;
                            AudioEye[e] = "loading", g.isModuleActive("toolbar") && AudioEye.toolbar.setLoading(e, !0), void 0 === d[e] && (delete AudioEye[e], p.error("No config found for module. Cannot load"), t(e, !1)), i.push(this.requireModule(e)), "1" === AudioEye.toolbar_version && -1 === d.startup_modules.indexOf(e) && !1 !== d[e].needsInterface && i.push(this.getUIData(e)), window.ae_jQuery.when.apply(void 0, i).done((function(i, n) {
                                return i ? !1 === n ? (p.info("JSON module content load failed. Missing config for: " + e), t && t(e, !1), !1) : (AudioEye[e] = new i(d[e]), e.match(/\W/) && (AudioEye[e.replace(/\W/g, "_")] = AudioEye[e]), p.info("AudioEye Module " + e + " initialized."), g.isModuleActive("toolbar") && AudioEye.toolbar.setLoading(e, !1), g.dispatchEvent("LoadModule", {
                                    module: e
                                }), void(t && t(e, !0))) : (p.info("JS Module load failed for: " + e), t && t(e, !1), !1)
                            }))
                        },
                        requireModule: function(e) {
                            var t, n, o = window.ae_jQuery.Deferred();
                            return t = ["modules/" + (e = this.versionizeModule(e))], (n = this.getConditionalDeps(e)).length && (t = t.concat(n)), i(274)("./" + e).then((function(t) {
                                if (!t || !t.default) throw new Error("AE Fatal: Failed to load " + e);
                                p.debug("AudioEye Module " + e + " loaded. Preparing to initialize.");
                                for (var i = 0; i < n.length; i++) d[e][n[i]] = arguments[i + 1];
                                t.default.promise ? (p.debug("AudioEye Module " + e + " requires dependencies. Waiting to call constructor."), t.default.promise.done((function() {
                                    o.resolve(t.default)
                                }))) : o.resolve(t.default)
                            })).catch((function(t) {
                                AudioEye.toolbar && AudioEye.toolbar.setLoading && AudioEye.toolbar.setLoading(e, !1), delete AudioEye[e], p.info("Error: ", t), o.resolve(!1)
                            })), o.promise()
                        },
                        versionizeModule: function(e) {
                            var t = d[e].version || "1";
                            return t && "1" != t && (e = e + "_" + t), e
                        },
                        trueLocation: function() {
                            for (var e = window;
                                "about:" === e.location.protocol;) {
                                if (!e.parent) return p.error("No valid location information for this page. AudioEye cannot load"), !1;
                                e = e.parent
                            }
                            return e.location
                        },
                        getUIData: function(e) {
                            var t, i = {},
                                n = window.ae_jQuery.Deferred();
                            return (t = AudioEye.site_version) && window.ae_jQuery.isNumeric(t) && (i.version = t), i.url = AudioEye.base_url, i.module = e, i.device = AudioEye.device, i.lang = AudioEye.lang, i.cb = AudioEye.cb, i.lp = AudioEye.last_publish, AudioEye.site_hash && (i.h = AudioEye.site_hash), window.ae_jQuery.ajax({
                                url: AudioEye.client_url + "/api/",
                                dataType: "jsonp",
                                jsonpCallback: function() {
                                    return e.replace("-", "") + "Callback"
                                },
                                cache: !0,
                                data: i,
                                context: this,
                                success: function(t) {
                                    if (!1 === t.success) return p.info("getUIData received failure: " + t.msg), n.resolve(!1);
                                    window.ae_jQuery.extend(!0, d[e], t.data), AudioEye.configOverrides && window.ae_jQuery.extend(!0, d, AudioEye.configOverrides), d[e] ? (d[e].languages || (d[e].languages = []), d[e].languages.push(AudioEye.lang)) : p.debug("module " + e + " has no product config data"), n.resolve(t.data)
                                },
                                error: function(e, t, i) {
                                    var o = t || "";
                                    o += i || "", p.info(o), n.resolve(!1)
                                }
                            }), n.promise()
                        },
                        permissionToSetActive: function(e) {
                            return !(this.inIframe() && !this.iframeLoadPermission(e) || !this.isModuleAvailable(e) || AudioEye[e] && "loading" === AudioEye[e])
                        },
                        setModuleActive: function(e, t, i, n) {
                            var o = AudioEye.toolbar;
                            if (n = n || !1, p.debug("setModuleActive() called with moduleName: " + e + ", and state: " + t), void 0 === t) return !1;
                            if (!this.permissionToSetActive(e)) return !1;
                            if (g.isModuleActive(e) === t) return !1;
                            if (-1 !== ["launcher", "site-menu", "user-settings", "help", "helpdesk", "certification"].indexOf(e) || i || this.setActiveCookie(e, t), !0 === t) {
                                if (!AudioEye[e]) return g.loadModule(e, (function(t, i) {
                                    if (!i) return "load failed";
                                    g.setModuleActive(e, !0, null, n), g.dispatchEvent("FirstModuleActivate", {
                                        module: e
                                    })
                                })), "loading";
                                g.dispatchEvent("BeforeModuleActivate", {
                                        module: e
                                    }), c.Z.set(window.ae_jQuery(document.body), e), window.ae_jQuery("#ae_" + e).addClass("ae-active"), p.debug("setModuleActive: calling " + e + ".open()"), "admin" != e && AudioEye.admin && AudioEye.admin.active && g.setModuleActive("admin", !1), AudioEye[e].open(n),
                                    function(e, t) {
                                        Object.keys(t).forEach((function(t) {
                                            try {
                                                g.sendFrameAPIRequest(t, "activate", {
                                                    moduleString: e
                                                })
                                            } catch (e) {
                                                p.debug("Error occurred during iframe communication: " + e.message)
                                            }
                                        }))
                                    }(e, g.getFrameRegistry()), g.dispatchEvent("AfterModuleActivate", {
                                        module: e
                                    }), p.debug("setModuleActive: " + e + " open completed"), -1 !== ["reader", "player", "voice"].indexOf(e) && g.initControlBars(), "toolbar" === e || "launcher" === e || a.Z.get("aefirstmodule") || "admin" == e || a.Z.set("aefirstmodule", e, 10)
                            } else {
                                if (g.dispatchEvent("BeforeModuleDeactivate", {
                                        module: e
                                    }), !AudioEye[e]) return !1;
                                AudioEye[e].close && AudioEye[e].close(), g.safeFrames().each((function() {
                                    try {
                                        g.sendFrameAPIRequest(this.contentWindow, "deactivate", {
                                            moduleString: e
                                        })
                                    } catch (e) {
                                        p.debug("Error occurred during iframe communication: " + e.message)
                                    }
                                })), c.Z.unset(window.ae_jQuery(document.body), e), window.ae_jQuery("#ae_" + e).removeClass("ae-active"), g.dispatchEvent("AfterModuleDeactivate", {
                                    module: e
                                }), g.killTooltips()
                            }
                            o && o.active && "toolbar" !== e && o.updateModuleBtn(e)
                        },
                        isModuleActive: function(e) {
                            return !!AudioEye[e] && AudioEye[e].active
                        },
                        isModuleAvailable: function(e) {
                            return !!d[e] && d[e].service
                        },
                        isToolbarModule: function(e) {
                            return -1 !== ["admin", "site-menu", "rotor", "settings", "help", "reader", "player", "voice", "helpdesk", "certification"].indexOf(e)
                        },
                        dispatchNativeChange: function(e, t) {
                            if (e)
                                if (t) {
                                    if ("createEvent" in t) {
                                        var i = t.createEvent("HTMLEvents");
                                        return i && "function" == typeof i.initEvent ? (i.initEvent("change", !0, !0), p.debug("dispatchEvent() called"), void e.dispatchEvent(i)) : void p.error("Browser does not support initEvent. Cannot simulate onchange.")
                                    }
                                    if ("function" == typeof e.fireEvent) return p.debug("fireEvent() called"), void e.fireEvent("onchange");
                                    p.error("No supported method found to simulate onchange event")
                                } else p.error("No document provided to dispatchNativeChange()");
                            else p.error("No select element provided to dispatchNativeChange()")
                        },
                        isIE: function() {
                            return -1 !== navigator.userAgent.indexOf("MSIE") || navigator.appVersion.indexOf("Trident/") > 0
                        },
                        inIframe: function() {
                            return window.top !== window
                        },
                        inSeparateWindow: function(e) {
                            var t = e[0].ownerDocument.defaultView;
                            return window !== t
                        },
                        validArgs: function(e, t) {
                            return !!Array.isArray(e) && null != t && e.every((function(e, i) {
                                switch (e) {
                                    case "string":
                                        return "string" == typeof t[i];
                                    case "number":
                                        return window.ae_jQuery.isNumeric(t[i]);
                                    case void 0:
                                    case null:
                                        return t[i] === e;
                                    case "[]":
                                        return Array.isArray(t[i]);
                                    case "{}":
                                        return null !== t[i] && !window.ae_jQuery.isFunction(t[i]) && "object" == typeof t[i];
                                    case "()":
                                        if (window.ae_jQuery.isFunction(t[i])) return !1
                                }
                            }))
                        },
                        safeSelectorText: function(e) {
                            return e.replace(/([!"#\$%&'\(\)\*\+,\.\/:;<=>\?@\[\\\]\^`\{\|\}~])/g, "\\$1")
                        },
                        verifyJSON: function(e) {
                            var t = e.replace(/(\s*?{\s*?|\s*?,\s*?)(['"])?([a-zA-Z0-9]+)(['"])?:/g, '$1"$3":');
                            try {
                                JSON.parse(t)
                            } catch (e) {
                                p.error(e), t = "null"
                            }
                            return t
                        },
                        dispatchEvent: function(e, t, i) {
                            var n = i ? window.ae_jQuery(document) : window.ae_jQuery("#ae_app");
                            if (0 === n.length) return p.debug("Event target element does not exist."), !1;
                            if ("string" != typeof e) return p.error("DispatchEvent expected string for eventName, received " + typeof e), !1;
                            if (void 0 !== t && "object" != typeof t) return p.error("Error on dispatchEvent; expected Object for detail, received " + typeof t), !1;
                            var o = window.ae_jQuery.Event(e);
                            if (t && (o.detail = t), n.trigger(o), !e.match(/Content(Open|Close|Replace)|RemovedNodes|PlayerReaderMutation/)) {
                                var a = this;
                                g.safeFrames().each((function() {
                                    try {
                                        if (!this.contentWindow.postMessage) return void p.error("Iframe window discovered to be missing a postMessage method");
                                        a.sendFrameAPIRequest(this.contentWindow, "relayAppEvent", {
                                            event: e,
                                            detail: t,
                                            useDocument: i
                                        })
                                    } catch (e) {
                                        p.debug("Error occurred during iframe communication: " + e.message)
                                    }
                                }))
                            }
                        },
                        dispatchNativeEvent: function(e) {
                            e && (e = e.toUpperCase(), "function" == typeof window.CustomEvent && "function" == typeof window.dispatchEvent && window.dispatchEvent(new CustomEvent("AUDIOEYE_" + e)))
                        },
                        logStat: function(e, t, i, n) {
                            if (e && t) {
                                i || p.info("WARNING: inputMethod missing from logStat call");
                                var o = {
                                        aeaid: s.lookup(),
                                        sid: AudioEye.site_id,
                                        pg: g.removeUrlParamsByKey(window.location, ["gclid", "fbclid", "msclkid"]),
                                        lang: AudioEye.lang,
                                        cat: "desktop" !== AudioEye.device ? "Mobile " + e : e,
                                        evt: t,
                                        inm: i,
                                        evtd: n,
                                        h: window.__AudioEyeSiteHash,
                                        is: window.__AudioEyeInstallSource
                                    },
                                    a = ["aeaid", "sid", "pg", "lang", "cat", "evt", "inm"].filter((function(e) {
                                        return !o[e]
                                    }));
                                a.length > 0 && p.info("WARNING: Analytics stat values missing: ", a), p.debug("Attempting Stringify(). If IE crashes here, a circular reference was likely passed");
                                var r = JSON.stringify(o);
                                g.sendBeacon(AudioEye.analytics_url, r)
                            } else p.error("Missing parameter to logStat")
                        },
                        sendBeacon: function(e, t) {
                            if (e) {
                                if ("navigator" in window && "sendBeacon" in window.navigator) return window.navigator.sendBeacon(e, t);
                                var i = new XMLHttpRequest;
                                i.open("POST", e), i.withCredentials = !1, i.setRequestHeader("Accept", "*/*"), "string" == typeof t ? (i.setRequestHeader("Content-Type", "text/plain;charset=UTF-8"), i.responseType = "text/plain") : "[object Blob]" === {}.toString.call(t) && t.type && i.setRequestHeader("Content-Type", t.type);
                                try {
                                    i.send(t)
                                } catch (e) {
                                    p.info("WARNING: Analytics POST failed for reason: ", e)
                                }
                                return !0
                            }
                            p.error("sendBeacon called without a valid url. No request made")
                        },
                        initTipsy: function() {
                            window.ae_jQuery(".aetipsytip").tipsy({
                                arrowBorder: !0,
                                className: "ae-tipsy",
                                gravity: function() {
                                    return window.ae_jQuery(this).attr("data-tooltip-gravity") || "e"
                                },
                                opacity: 1,
                                trigger: "manual",
                                html: !0
                            })
                        },
                        attrObserver: {
                            observeChanges: function() {
                                var e = this;
                                return void 0 !== window.MutationObserver && (void 0 !== this.attrObserver ? (p.debug("attrObserver already exists"), !1) : (this.mutationObserver = new window.MutationObserver((function(t) {
                                    e._handlers.forEach((function(e) {
                                        e.handler(t)
                                    }))
                                })), this.mutationObserver.observe(window.document.body, {
                                    attributes: !0,
                                    subtree: !0
                                }), void(this.observing = !0)))
                            },
                            addHandler: function(e, t) {
                                this._handlers.push({
                                    namespace: e,
                                    handler: t
                                })
                            },
                            removeHandler: function(e) {
                                this._handlers = this._handlers.filter((function(t) {
                                    return t.namespace !== e
                                }))
                            },
                            _handlers: []
                        },
                        getActiveCTAs: function() {
                            var e = g.getAvailableModules(d);
                            return ["site-menu", "rotor", "user-settings", "help", "lite-reader", "reader", "player", "voice", "certification", "helpdesk", "admin"].filter((function(t) {
                                return -1 != e.indexOf(t)
                            }))
                        },
                        setActiveCookie: function(e, t) {
                            var i, n = a.Z.get("aemoduleactivation");
                            (i = n && JSON.parse(this.verifyJSON(n)) || {})[e] = t, n = JSON.stringify(i), a.Z.set("aemoduleactivation", n, 10)
                        },
                        getActiveCookie: function(e) {
                            var t = a.Z.get("aemoduleactivation");
                            return !!t && (JSON.parse(this.verifyJSON(t)) || {})[e]
                        },
                        setTooltipEvents: function(e, t) {
                            if (!e) throw "set_tooltips requires device param";
                            g.unbindTooltips(t), "mobile" === e || "tablet" === e ? g.bindTooltips(["focus"], t) : g.bindTooltips(["focus", "hover"], t)
                        },
                        bindTooltips: function(e, t) {
                            var i, n, o = {
                                focus: ["focusin.tooltip", "focusout.tooltip"],
                                hover: ["mouseenter.tooltip", "mouseleave.tooltip"]
                            };
                            if (!e || !Array.isArray(e) || !e.length) throw "improper event_types arg passed to bind_tooltips()";
                            i = (e = e.filter((function(e) {
                                return "focus" === e || "hover" === e
                            }))).map((function(e) {
                                return o[e][0]
                            })).join(" "), n = e.map((function(e) {
                                return o[e][1]
                            })).join(" "), g.initTipsy(), t.on(i, (function() {
                                g.openTooltip(window.ae_jQuery(this))
                            })).on(n, (function() {
                                window.ae_jQuery(this).tipsy("hide")
                            }))
                        },
                        openTooltip: function(e) {
                            var t;
                            g.killTooltips(), t = "tablet" === g.getCurrentDevice() || "mobile" === g.getCurrentDevice() ? new y({
                                elem: e
                            }) : new w({
                                elem: e
                            }), g.setTooltip(t)
                        },
                        unbindTooltips: function(e) {
                            e.off("mouseenter.tooltip focusin.tooltip mouseleave.tooltip focusout.tooltip")
                        },
                        killTooltips: function() {
                            window.ae_jQuery(".tipsy:last").remove()
                        },
                        setTooltip: function(e) {
                            var t, i;
                            return window.ae_jQuery(".ae-tipsy").remove(), e.elem.attr("original-title", e.getText()), e.elem.tipsy("show"), (i = window.ae_jQuery(".ae-tipsy")).css({
                                top: 0,
                                left: 0
                            }), t = e.calcCoords(), i.css({
                                top: t.top + "px",
                                left: t.left + "px"
                            }), e.elem.attr("data-ae-tooltip-class") && i.addClass(e.elem.attr("data-ae-tooltip-class")), i
                        },
                        stopProp: function(e) {
                            e.cancelBubble = !0, e.returnValue = !1, e.stopPropagation && e.stopPropagation()
                        },
                        closeAllPanels: function(e) {
                            var t = g.getActiveModules();
                            e = Array.isArray(e) ? e : [], window.ae_jQuery.each(g.module_props.activity_panel_mods, (function(i, n) {
                                -1 !== t.indexOf(n) && -1 === e.indexOf(n) && g.setModuleActive(n, !1)
                            }))
                        },
                        closeAllModules: function(e) {
                            var t = g.getActiveModules();
                            e = e = Array.isArray(e) ? e : [], t.forEach((function(t) {
                                -1 === e.indexOf(t) && g.setModuleActive(t, !1)
                            }))
                        },
                        getConditionalDeps: function(e) {
                            var t = [];
                            return "player" === e && "mobile" === AudioEye.device && t.push("gesture"), t
                        },
                        makeAssetUrl: function(e) {
                            var t = e;
                            return AudioEye.client_url && (t = AudioEye.client_url + t), AudioEye.cb && (t = t + "?cb=" + AudioEye.cb), t
                        },
                        prepUIGeneric: function(e, t) {
                            if (!e) return !1;
                            e = (e = (e = (e = (e = e.replace(/{{client_url}}/g, AudioEye.client_url)).replace(/{{portal_url}}/g, AudioEye.portal_url)).replace(/{{assets_url}}/g, AudioEye.assets_url)).replace(/{{cache_bust}}/g, "?cb=" + AudioEye.cb)).replace(/{{cache_bust_trail}}/g, "&cb=" + AudioEye.cb), e = this.injectComponents(e, t.components);
                            var i = window.ae_jQuery(e);
                            return t && t["aria-label"] && i.attr("aria-label", t["aria-label"][AudioEye.lang]), i.addClass("ae-active"), i
                        },
                        injectComponents: function(e, t, i) {
                            var n = e,
                                o = "";
                            for (o in t) t[o] ? n = this.injectSingleHandle(o, t[o][AudioEye.lang], n) : p.debug('No data for component "' + o + '".');
                            if (i)
                                for (o in i) i[o] && (n = this.injectSingleHandle(o, i[o], n));
                            return n
                        },
                        injectSingleHandle: function(e, t, i) {
                            var n;
                            return n = new RegExp("{{" + e + "}}", "g"), t ? i.replace(n, t) : i
                        },
                        showWalkthroughGeneric: function(e) {
                            return void 0 !== e && void 0 !== e.module && void 0 !== e.title && !!AudioEye[e.module] && void Promise.all([i.e(300), i.e(802), i.e(171), i.e(916)]).then(i.bind(i, 8787)).then((function(t) {
                                var i = t.default.interfaces,
                                    n = t.default.activityPanel;
                                AudioEye[e.module].walkthrough.addUI(i[e.module]), g.closeAllPanels(), AudioEye[e.module].ap = n, AudioEye[e.module].ap.wtModule = e.module, n.initAp("", e.title, "contentOnly"), n.appendApContent(window.ae_jQuery("#ae_firsttime_" + e.module));
                                var o = new Date;
                                a.Z.set("aefirsttime" + e.module, o.getTime(), 9125);
                                var r = n.initSlideShow(window.ae_jQuery("#ae_firsttime_" + e.module));
                                void 0 !== e.slideNumber && r.showSlide(e.slideNumber)
                            }))
                        },
                        pollUntilVisible: function(e, t) {
                            var i = 0;
                            if ((e = window.ae_jQuery(e)).is(":visible")) t(e);
                            else var n = setInterval((function() {
                                e.is(":visible") ? (t(e), window.clearInterval(n)) : i > 15e3 ? window.clearInterval(n) : i += 10
                            }), 10)
                        },
                        onConditionTrue: function(e, t) {
                            var i = 0;
                            if (e()) t();
                            else var n = setInterval((function() {
                                e() ? (t(), window.clearInterval(n)) : i > 15e3 ? window.clearInterval(n) : i += 10
                            }), 250)
                        },
                        isCssRendered: function(e, t, i) {
                            return window.ae_jQuery(e).css(t) === i
                        },
                        onCssLoad: function(e, t) {
                            var i = window.ae_jQuery(e);
                            if (!i.length) return !1;
                            i[0].addEventListener("load", (function() {
                                window.requestIdleCallback ? window.requestIdleCallback(t) : window.setTimeout(t, 500)
                            }))
                        },
                        isCssLoaded: function(e) {
                            var t;
                            if (document.styleSheets) {
                                for (var i in document.styleSheets) {
                                    var n = document.styleSheets[i];
                                    if (n.href) {
                                        if (-1 !== n.href.indexOf("aggregate.css") && -1 !== n.href.indexOf(e)) {
                                            t = !0;
                                            break
                                        }
                                        if (-1 !== n.href.indexOf(e + ".css")) {
                                            t = !0;
                                            break
                                        }
                                    }
                                }
                                if (t) return !0
                            }
                            return !1
                        },
                        isCssLoadedByAggregate: function(e) {
                            var t = window.ae_jQuery("#ae_app #ae_aggregate_css").attr("href");
                            return void 0 !== t && -1 !== t.indexOf(e)
                        },
                        onModuleReady: function(e) {
                            if (g.isModuleActive(e)) return "success";
                            var t = window.ae_jQuery("#ae_app");
                            if (!t.length) return !1;
                            var i = window.ae_jQuery.Deferred();
                            return t.on("AfterModuleActivate.mod_ready", (function(n) {
                                n.detail.module === e && (t.off("AfterModuleActivate.mod_ready"), i.resolve("success"))
                            })), i.promise()
                        },
                        isPromise: function(e) {
                            return "object" == typeof e && "function" == typeof e.then
                        },
                        simpleVals: function(e) {
                            var t = {};
                            for (var i in e) t[i] = "object" == typeof e[i] ? "{ ... }" : e[i];
                            return t
                        },
                        getHook: function(e, t) {
                            if (!window.AudioEye) return !1;
                            if (!e || !t) return this.logit.error("getHook requires module and name arguments"), !1;
                            var i = !!AudioEye._hooks && AudioEye._hooks[e];
                            return !!i && i[t]
                        },
                        startMessageListener: function() {
                            window.addEventListener && window.addEventListener("message", _, !1)
                        },
                        get_menu_conf: function(e) {
                            var t = ["main-menu", "utility-menu", "aside-menu", "footer-menu", "other-menu"].map((function(t) {
                                    return e[t]
                                })),
                                i = e["additional-menus"];
                            return !i || 1 === i.length && !i[0].selector ? t : t.concat(i)
                        },
                        addMillisecondsToDate: function(e, t) {
                            var i = e / 1e4 + t / 1e4;
                            return Math.round(1e4 * i)
                        }
                    };

                function _(e) {
                    if (!1 === g.iframes.config.allowMessaging) return !1;
                    if (!1 === g.iframes.isAllowedOrigin(e.origin)) return p.debug("Blocked iframe message from " + e.origin + '. Edit "Iframes - Allowed Origins" in DAP to allow'), !1;
                    var t = g.iframes.parseMessage(e);
                    g.iframes.validateMessage(t) && (t.method ? (p.debug("Received AE Frame API request: " + t.method), g.iframes.execRequest(t.module, t.method, t.detail, e).done((function(i) {
                        g.iframes.respond(e.source, t, i)
                    }))) : (p.debug("Received AE Frame API response: success=" + t.success + " (" + (t.detail.message || "No Message") + ")"), g.iframes.getResponseActions(t, e).forEach((function(i) {
                        g.iframes.responseActions[i](t, e)
                    }))))
                }

                function y(e) {
                    this.elem = e.elem, this.heightRef = this.getHeightRef()
                }

                function w() {
                    y.apply(this, arguments)
                }
                y.prototype.getHeightRef = function() {
                    return "true" == this.elem.attr("data-ae-height-ref") ? this.elem : this.elem.closest(".ae-module-controls")
                }, y.prototype.getGravity = function() {
                    return this.elem.attr("data-tooltip-gravity") || "e"
                }, y.prototype.calcCoords = function() {
                    var e, t, i = window.ae_jQuery(".ae-tipsy").outerHeight(),
                        n = window.ae_jQuery(".ae-tipsy").outerWidth(),
                        o = {},
                        a = window.ae_jQuery(window).scrollTop(),
                        r = window.ae_jQuery(window).scrollLeft(),
                        s = this.elem.offset().left,
                        l = parseInt(window.getComputedStyle(document.querySelector(".tipsy-arrow-inner"), ":before").height, 10) / 2;
                    return this.heightRef = this.heightRef || {}, "sw" == this.getGravity() && this.heightRef.length ? (t = s + this.elem.outerWidth() / 2, o.top = this.heightRef.offset().top - a - i - 5, o.left = t - r - 21) : "se" == this.getGravity() && this.heightRef.length ? (o.top = this.heightRef.offset().top - a - i - 5, o.left = s - r - n + this.elem.outerWidth() / 2 + 21) : "nw" == this.getGravity() && this.heightRef.length ? (t = s + this.elem.outerWidth() / 2, o.top = this.heightRef.offset().top + a + this.elem.outerHeight() + l, o.left = t - r - 21) : (n += 10, e = this.elem.offset().top + this.elem.outerHeight() / 2, o.top = e - a - i / 2, o.left = s - r - n + 5), o
                }, y.prototype.getText = function() {
                    return this.elem.attr("original-title") || ""
                }, window.ae_jQuery.extend(w.prototype, y.prototype, {
                    getText: function() {
                        var e = y.prototype.getText.call(this),
                            t = this.getKeyCommand();
                        if (t) {
                            var i = " <small>" + t + "</small>";
                            if (-1 === e.indexOf(i)) return e + i
                        }
                        return e
                    },
                    getKeyCommand: function() {
                        return this.elem.attr("data-keycommand")
                    }
                }), g.ToolTip = y, g.DesktopToolTip = w, d.testmode && window.testScope && (window.testScope.options = d, window.testScope.utilities = g, window.testScope.utilities.onReceiveAEiFrameMessage = _, window.testScope.logit = p);
                var v = g
            },
            8916: function(e, t, i) {
                "use strict";
                i.r(t);
                var n = i(2399),
                    o = i(2602),
                    a = i(4918),
                    r = i(138);
                t.default = function() {
                    const e = new a.Z("Page Elements Menu"),
                        t = this,
                        i = window.ae_jQuery("html"),
                        s = {
                            element_data_key: "ae_rotor_data"
                        };

                    function l(e) {
                        return e.length ? e.filter((function() {
                            const e = window.ae_jQuery(this).closest("[aria-hidden]");
                            if (e.length && "true" === e.attr("aria-hidden").toLowerCase()) return !1;
                            if (window.ae_jQuery(this).is(":hiddenAll")) return !1;
                            if (window.ae_jQuery(this).closest(r.Z.selector("exclude")).length > 0) return !1;
                            if (window.ae_jQuery(this).closest("#ae_app").length > 0) return !1;
                            return !window.ae_jQuery(this).closest(".ae-carousel").length
                        })) : window.ae_jQuery()
                    }

                    function c(e, t, n) {
                        let a;
                        return r.Z.unset(i.find(r.Z.selector(e)), e), !!t && (t.role ? a = o.Z.queryByRole("find", t.role, i) : t.selector && (a = i.find(t.selector)), a = l(a), r.Z.set(a, e), a.length > 0 && a.each((function(e) {
                            return n.call(window.ae_jQuery(this), e)
                        })), !0)
                    }

                    function u(e, t, i) {
                        let o, a;
                        return e = n.Z.capitalize(e), e += i > 1 ? ` ${i+1}` : "", o = t.attr("aria-label"), e === o && (o = ""), a = o ? `${o}, ${e}` : e, t.data(s.element_data_key, {
                            role: e,
                            label: o,
                            labelAndRole: a,
                            selector: r.Z.selector(`role-${e.toLowerCase()}`),
                            instance: i
                        }), t
                    }

                    function d(e, t) {
                        return `H${t}: ${e}`
                    }

                    function m(e) {
                        return e.find("img").map((function() {
                            return window.ae_jQuery(this).attr("alt")
                        })).get().ae_reduce(((e, t) => t ? e + t : e), "")
                    }

                    function f(e) {
                        return e.ariaOrText() || m(e)
                    }
                    AudioEye && !AudioEye.rotor && (AudioEye.rotor = this), this.resolvePromise = {}, this.getElementsBySection = {
                        landmarks(e, t) {
                            const n = [];
                            let a = window.ae_jQuery();
                            return e || n.push({
                                role: "Navigation",
                                label: "Top of Page",
                                labelAndRole: "Top of Page",
                                selector: "body",
                                instance: 0
                            }), ["banner", "search", "main", "complementary", "contentinfo"].forEach((e => {
                                let t = o.Z.queryByRole("find", e, i);
                                if (t = l(t), 0 === t.length) return;
                                const n = o.Z.roleFactory(e);
                                n && n.singleton && (t = t.eq(0)), r.Z.set(t, `role-${e}`), t.each((function(t) {
                                    u(e, window.ae_jQuery(this), t)
                                })), a = a.add(t)
                            })), a.each((function() {
                                const e = window.ae_jQuery(this).data(s.element_data_key);
                                t && (e.iFrameId = t), e && n.push(e)
                            })), n
                        },
                        headings(e, t) {
                            const i = [];
                            let n, o;
                            return c("rotor-header", {
                                role: "heading"
                            }, (function(e) {
                                n = parseInt(window.ae_jQuery(this).attr("aria-level"), 10), o = parseInt(window.ae_jQuery(this)[0].tagName.toLowerCase().replace("h", ""), 10) || 1;
                                const a = n || o;
                                r.Z.set(window.ae_jQuery(this), `h${a}`);
                                const s = f(window.ae_jQuery(this));
                                i.push({
                                    role: "Heading",
                                    label: s,
                                    labelAndRole: d(s, a),
                                    selector: r.Z.selector("rotor-header"),
                                    instance: e,
                                    iFrameId: t
                                })
                            })), i
                        },
                        links(t, i) {
                            const n = [];
                            return c("rotor-a", {
                                role: "link"
                            }, (function(t) {
                                const o = window.ae_jQuery(this).find("img");
                                let a, s = window.ae_jQuery(this).clone().find('[data-ae-pem-ignore = "true"]').remove().end().ariaOrText().trim();
                                return o.length > 0 && o.attr("alt") && o.attr("alt").length > 0 && (a = o.attr("alt")), s = s.length > 0 && a ? `${a}, ${s}` : s.length > 0 ? s : a, s ? (n.push({
                                    role: "Navigation",
                                    label: s,
                                    labelAndRole: s,
                                    selector: r.Z.selector("rotor-a"),
                                    instance: t,
                                    iFrameId: i
                                }), !0) : (e.debug("Link Discarded because no image or text found", this ? this[0] : ""), !0)
                            })), n
                        },
                        images(e, t) {
                            const i = [];
                            return c("rotor-img", {
                                role: "img"
                            }, (function(e) {
                                const n = window.ae_jQuery(this).attr("alt") || window.ae_jQuery(this).attr("title") || window.ae_jQuery(this).attr("aria-label");
                                n && i.push({
                                    role: "Image",
                                    label: n,
                                    labelAndRole: n,
                                    selector: r.Z.selector("rotor-img"),
                                    instance: e,
                                    iFrameId: t
                                })
                            })), i
                        },
                        media(e, t) {
                            const i = [];
                            return c("rotor-media", {
                                selector: r.Z.selector("media")
                            }, (function(e) {
                                const n = window.ae_jQuery(this).attr("alt") || window.ae_jQuery(this).attr("title") || window.ae_jQuery(this).attr("aria-label");
                                i.push({
                                    role: "Media",
                                    label: n,
                                    labelAndRole: n,
                                    selector: r.Z.selector("rotor-media"),
                                    instance: e,
                                    iFrameId: t
                                })
                            })), i
                        }
                    }, this._options = !1, this.isPanel = !0, this.init_rotor_content = function() {
                        t._getPageElements(window.ae_jQuery(".ae-rotor-section.ae-active").data("section"), window.ae_jQuery(".ae-rotor-section.ae-active").find("ul.ae-rotor-items"))
                    }, this._reqFrameElements = function(e) {
                        const t = n.Z.safeFrames();
                        t ? t.each((function() {
                            n.Z.sendFrameAPIRequest(this.contentWindow, "rotor", "_provideFrameElements", {
                                section: e
                            })
                        })) : AudioEye.rotor.resolvePromise[e](!1)
                    }, this._provideFrameElements = function(e) {
                        this._reqFrameElements(e.section), n.Z.sendFrameAPIRequest(window.top, "rotor", "_returnIframeElements", {
                            section: e.section,
                            elements: t.getElementsBySection[e.section](!0, AudioEye.iframe_id),
                            iframeId: AudioEye.iframe_id
                        })
                    }, this._returnIframeElements = function(e) {
                        AudioEye.rotor.resolvePromise[e.section](e)
                    }, this._focusItem = function(e, t) {
                        AudioEye.focusElement(document.body);
                        const i = `${e.selector}:eq(${e.instance})`;
                        t ? this._requestFrameElemFocus({
                            selector: i,
                            iframeId: t
                        }) : this._focusSameWinElem(i)
                    }, this._requestFrameElemFocus = function(e) {
                        const t = n.Z.getFrameRegistry(e.iframeId);
                        t ? n.Z.sendFrameAPIRequest(t.element.contentWindow, "rotor", "_focusSameWinElem", e.selector) : n.Z.safeFrames().each((function() {
                            n.Z.sendFrameAPIRequest(this.contentWindow, "rotor", "_requestFrameElemFocus", {
                                selector: e.selector,
                                iframeId: e.iframeId
                            })
                        }))
                    }, this._focusSameWinElem = function(t) {
                        const i = t.length ? t.toLowerCase() : "",
                            n = window.ae_jQuery(i);
                        n.length ? AudioEye.focusElement(n, !0) : e.error(`Cannot focus element "${i}". Element not found`)
                    }, this._getPageElements = function(e) {
                        let i;
                        const n = new Promise((n => {
                            i = t.getElementsBySection[e](), new Promise((t => {
                                AudioEye.rotor.resolvePromise[e] = t, setTimeout((() => {
                                    t(!1)
                                }), 1e3)
                            })).then((e => {
                                let t = e.elements ? e.elements : [];
                                t = t.concat(i), n(t)
                            }))
                        }));
                        return t._reqFrameElements(e, this), n
                    }, t._options.testmode && (window.testScope.rotor = {
                        make_landmark_data: u,
                        filter_excluded: l,
                        constants: s,
                        make_header_label_role: d,
                        make_header_label: f,
                        make_header_image_label: m
                    })
                }
            },
            2123: function(e, t, i) {
                "use strict";
                i.r(t), i.d(t, {
                    default: function() {
                        return h
                    },
                    defaultState: function() {
                        return d
                    },
                    vt_config: function() {
                        return f
                    }
                });
                var n = i(8523),
                    o = i(7668),
                    a = i(3022),
                    r = i(138),
                    s = i(4918),
                    l = i(3739),
                    c = "desktop" === i(3358).Z && AudioEye.productConfig["vtk-focus-by-default-opt-in"] || !1;
                const u = new s.Z("visual-toolkit"),
                    d = {
                        c_big: 0,
                        rg: 0,
                        memph: 0,
                        contrast_setting: 0,
                        colorshift_setting: 0,
                        text_size_setting: 0,
                        space_setting: 0,
                        font_setting: 0,
                        k: 0,
                        k_disable_default: 0,
                        hlt: 0,
                        disable_animations: 0,
                        display_alt_desc: 0
                    };
                let m;
                const f = {
                    k: {
                        componentTitle: "Focus",
                        settingCount: 2,
                        shortcutKey: "z"
                    },
                    guide: {
                        componentTitle: "Guide",
                        settingCount: 2,
                        shortcutKey: "g",
                        fn: "rg"
                    },
                    contrast: {
                        componentTitle: "Contrast",
                        settingCount: 4,
                        shortcutKey: "c"
                    },
                    colorshift: {
                        componentTitle: "Color Shift",
                        settingCount: 2,
                        shortcutKey: "i"
                    },
                    font: {
                        componentTitle: "Font",
                        settingCount: 4,
                        shortcutKey: "f"
                    },
                    cursor: {
                        componentTitle: "Cursor",
                        settingCount: 2,
                        shortcutKey: "m"
                    },
                    highlight: {
                        componentTitle: "Highlight",
                        settingCount: 5,
                        shortcutKey: "y"
                    },
                    animation: {
                        componentTitle: "Animation",
                        settingCount: 2,
                        shortcutKey: "q"
                    },
                    textSize: {
                        componentTitle: "Text Size",
                        settingCount: 4,
                        shortcutKey: "="
                    },
                    spacing: {
                        componentTitle: "Spacing",
                        settingCount: 2,
                        shortcutKey: "k"
                    },
                    window: {
                        componentTitle: "Window",
                        settingCount: 2,
                        shortcutKey: "e"
                    },
                    images: {
                        componentTitle: "Images",
                        settingCount: 2,
                        shortcutKey: "a"
                    }
                };
                var h = function e() {
                    const t = this;

                    function i(e) {
                        n.Z.sendFrameAPIRequest(window.top, "visual-toolkit", "trackMouseRgProxy", {
                            y: e.clientY,
                            id: AudioEye.iframe_id
                        })
                    }

                    function s(e) {
                        const t = window.document.documentElement;
                        if (!t.getAttribute("data-audioeye-lr-rg")) return;
                        const i = window.document,
                            n = e.clientY;
                        let o;
                        t.querySelector("#audioeye_rg") || (o = i.createElement("div"), o.id = "audioeye_rg", i.body.append ? i.body.append(o) : i.body.appendChild(o)), C.add(), o = i.querySelector("#audioeye_rg");
                        const a = i.querySelector("#audioeye_rg_above"),
                            r = i.querySelector("#audioeye_rg_below");
                        a.style.bottom = `calc(100vh - ${n-2}px)`, o.style.top = `${n+10}px`, r.style.top = `${n+4}px`
                    }

                    function f(e) {
                        if (t._isControlWindow()) return "IFRAME" !== e.target.tagName ? (document.querySelector("#audioeye_rg_above").classList.add("disabled"), void document.querySelector("#audioeye_rg_below").classList.add("disabled")) : "cross-origin" === n.Z.getFrameRegistry(e.target.id).status ? (document.querySelector("#audioeye_rg_above").classList.remove("disabled"), void document.querySelector("#audioeye_rg_below").classList.remove("disabled")) : (document.querySelector("#audioeye_rg_above").classList.add("disabled"), void document.querySelector("#audioeye_rg_below").classList.add("disabled"))
                    }

                    function h(e) {
                        window.document.documentElement.getAttribute("data-audioeye-lr-rg") || f(e)
                    }

                    function p(e) {
                        const t = window.document.documentElement;
                        if (!t.getAttribute("data-audioeye-lr-memph")) return;
                        const i = window.document,
                            n = e.clientY;
                        let o, a;
                        t.querySelector("#audioeye_memph_t") || (o = i.createElement("div"), o.id = "audioeye_memph_t", i.body.append ? i.body.append(o) : i.body.appendChild(o), a = i.createElement("div"), a.id = "audioeye_memph_b", i.body.append ? i.body.append(a) : i.body.appendChild(a)), C.add(), o = t.querySelector("#audioeye_memph_t"), a = t.querySelector("#audioeye_memph_b");
                        const r = i.querySelector("#audioeye_rg_above"),
                            s = i.querySelector("#audioeye_rg_below");
                        r.style.bottom = `calc(100vh - ${n-2}px)`, s.style.top = `${n+4}px`, o.style.height = n - 30 + "px", a.style.top = `${n+30}px`
                    }

                    function g(e) {
                        n.Z.sendFrameAPIRequest(window.top, "visual-toolkit", "trackMouseEmphProxy", {
                            y: e.clientY,
                            id: AudioEye.iframe_id
                        })
                    }
                    this.bindKeycommands = function() {
                        o.Z.add("d", "visual-toolkit", (() => t.handleShortcuts()), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("c", "visual-toolkit", (() => {
                            t.contrast_setting()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("i", "visual-toolkit", (() => {
                            t.colorshift_setting()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("f", "visual-toolkit", (() => {
                            t.font_setting()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("k", "visual-toolkit", (() => {
                            t.space_setting()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("shift+r", "visual-toolkit", (() => {
                            t.reset()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("m", "visual-toolkit", (() => {
                            t.c_big()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("g", "visual-toolkit", (() => {
                            t.rg()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("e", "visual-toolkit", (() => {
                            t.memph()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("y", "visual-toolkit", (() => {
                            t.hlt({
                                click: !0
                            })
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("a", "visual-toolkit", (() => {
                            t.display_alt_desc()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("q", "visual-toolkit", (() => {
                            t.disable_animations()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("=", "visual-toolkit", (() => {
                            t.text_size_setting()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("z", "visual-toolkit", (() => {
                            t.k()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("u", "visual-toolkit", (() => {
                            window.postMessage({
                                source: "visual-toolkit",
                                msg: "toggleShortcuts"
                            }, "*")
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("b", "visual-toolkit", (() => {
                            k({
                                pane: "certification"
                            })
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("n", "visual-toolkit", (() => {
                            k({
                                pane: "page-structure"
                            })
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("h", "visual-toolkit", (() => {
                            k({
                                pane: "help"
                            })
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("x", "visual-toolkit", (() => {
                            n.Z.logStat("User", "Visual_Toolkit|Close Control Bar|X"), R()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        }), o.Z.add("esc", "visual-toolkit", (() => {
                            n.Z.logStat("User", "Visual_Toolkit|Close Control Bar|ESC"), R()
                        }), {
                            type: "keydown",
                            disable_in_input: !0,
                            target: document
                        })
                    }, this.unbindKeycommands = function() {
                        o.Z.removeAll("visual-toolkit")
                    }, this.trackMouseLocation = function(e) {
                        if (e.isTrusted && t._isControlWindow()) t.mouseLocation = {
                            clientX: e.clientX,
                            clientY: e.clientY
                        };
                        else if (t._isControlWindow()) {
                            const i = window.ae_jQuery(`#${e.id}`);
                            if (!i.length) return;
                            const n = i[0].getBoundingClientRect().top;
                            t.mouseLocation = {
                                clientX: e.clientX,
                                clientY: e.clientY + n
                            }
                        }
                        t._isControlWindow() || n.Z.sendFrameAPIRequest(window.top, "visual-toolkit", "trackMouseLocation", {
                            clientX: e.clientX,
                            clientY: e.clientY,
                            id: AudioEye.iframe_id
                        })
                    }, this.mouseLocation = null, this.updateCookie = function(e) {
                        if (!t._isControlWindow()) return;
                        const i = JSON.parse(a.Z.get("aelreadersettings")) || {},
                            n = window.document.documentElement.getAttribute(`data-audioeye-lr-${e}`);
                        null === n ? delete i[e] : i[e] = n, a.Z.set("aelreadersettings", JSON.stringify(i))
                    }, this.updateDisableDefaultFocusCookie = e => {
                        const t = JSON.parse(a.Z.get("aelreadersettings")) || {};
                        1 === e ? delete t.k_disable_default : t.k_disable_default = 1, a.Z.set("aelreadersettings", JSON.stringify(t))
                    }, this.k_disable_default = () => {
                        c || this.updateCookie("k_disable_default")
                    }, this.focusOverrideSettings = e => ({ ...e,
                        ...c && !Number(e.k_disable_default) && {
                            k: 1
                        }
                    }), this.reset = function() {
                        Object.keys(d).forEach((e => {
                            t[e]({
                                v: -1
                            })
                        })), n.Z.logStat("User", "Visual_Toolkit|Reset|"), x(d)
                    }, this.openCertPage = function() {
                        n.Z.logStat("User", "Visual_Toolkit|Open Certification Page"), x({})
                    }, this.hlt = function(e) {
                        const i = e.hasOwnProperty("v") ? e : void 0,
                            o = {
                                0: ["Off", "Highlight"],
                                1: ["Headings", "Headings"],
                                2: ["Links", "Links"],
                                3: ["Buttons", "Buttons"],
                                4: ["All", "All"]
                            };
                        let a;
                        const r = window.document.documentElement,
                            s = !i;
                        let l = r.getAttribute("data-audioeye-lr-hlt") || 0;
                        switch (i && (l = i.v - 1), l = parseInt(l, 10), l) {
                            case -2:
                            case -1:
                                l = -1, a = 0;
                                break;
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                a = l + 1;
                                break;
                            default:
                                a = 0
                        }
                        0 === a ? r.removeAttribute("data-audioeye-lr-hlt") : r.setAttribute("data-audioeye-lr-hlt", a), t.updateCookie("hlt"), I({
                            f: "hlt",
                            d: {
                                v: -1 === l ? -1 : a
                            }
                        }), this.featureSettingNameState.highlight = o[a][1], t._isControlWindow() && s && (n.Z.logStat("User", `Visual_Toolkit|Highlight|${o[a][0]}`), x({
                            hlt: a
                        }))
                    }, this.trackMouseRgProxy = function(e) {
                        const t = window.ae_jQuery(`#${e.id}`);
                        if (!t.length) return;
                        const i = t[0].getBoundingClientRect().top;
                        s({
                            clientY: e.y + i
                        })
                    }, this.memph = function(e) {
                        const i = e && e.hasOwnProperty("v") ? e : void 0,
                            o = !i,
                            a = window.document.documentElement;
                        let r, s, l = "1" === a.getAttribute("data-audioeye-lr-memph") ? 0 : 1;
                        l = i ? i.v : l, l = parseInt(l, 10), 0 === l || -1 === l ? (a.removeAttribute("data-audioeye-lr-memph"), t._isControlWindow() ? (a.removeEventListener("mousemove", p, !0), a.removeEventListener("mouseover", h, !0)) : a.removeEventListener("mousemouse", g, !0), a.querySelector("#audioeye_memph_t") && (r = a.querySelector("#audioeye_memph_t"), s = a.querySelector("#audioeye_memph_b"), r.remove ? (r.remove(), s.remove()) : r.parentNode && (r.parentNode.removeChild(r), s.parentNode.removeChild(s))), C.remove()) : (a.setAttribute("data-audioeye-lr-memph", 1), t._isControlWindow() ? (this.mouseLocation ? p(this.mouseLocation) : p({
                            clientY: window.innerHeight
                        }), a.addEventListener("mouseover", h, !0), a.addEventListener("mousemove", p, !0)) : a.addEventListener("mousemove", g, !0)), t.updateCookie("memph"), I({
                            f: "memph",
                            d: {
                                v: l
                            }
                        }), t._isControlWindow() && o && (n.Z.logStat("User", "Visual_Toolkit|Window|" + (0 === l ? "Off" : "On")), x({
                            memph: l
                        }))
                    }, this.handleShortcuts = function() {
                        if (!this._isControlWindow()) return;
                        const e = !("true" === a.Z.get("ae_toolbar_show_shortcuts"));
                        a.Z.set("ae_toolbar_show_shortcuts", e), x({
                            shortcuts: e
                        })
                    }, this.trackMouseEmphProxy = function(e) {
                        const t = window.ae_jQuery(`#${e.id}`);
                        if (!t.length) return;
                        const i = t[0].getBoundingClientRect().top;
                        p({
                            clientY: e.y + i
                        })
                    }, this.contrast_setting = function(e) {
                        if (!this._isControlWindow()) return;
                        const i = e && e.hasOwnProperty("v") ? e : void 0,
                            o = {
                                0: ["Off", "Contrast"],
                                1: ["high_contrast", "Hi-Con"],
                                2: ["grey_scale", "Desaturate"],
                                3: ["invert", "Invert"]
                            };
                        let a, r = !1;
                        const s = !i,
                            l = window.document.documentElement;
                        let c = l.getAttribute("data-audioeye-lr-contrast_setting") || 0;
                        switch (l.removeAttribute("data-audioeye-lr-contrast_setting"), document.body.removeAttribute("data-audioeye-lr-force-background"), i && (c = i.v - 1), c = parseInt(c, 10), c) {
                            case -2:
                            case -1:
                                c = -1, a = 0;
                                break;
                            case 0:
                            case 1:
                            case 2:
                                a = c + 1, m = document.defaultView.getComputedStyle(document.body).getPropertyValue("background-color"), "rgba(0, 0, 0, 0)" === m && 3 === a && (r = !0);
                                break;
                            default:
                                a = 0
                        }
                        0 === a ? l.removeAttribute("data-audioeye-lr-contrast_setting") : (l.setAttribute("data-audioeye-lr-contrast_setting", a), r && document.body.setAttribute("data-audioeye-lr-force-background", 1)), t.updateCookie("contrast_setting"), I({
                            f: "contrast_setting",
                            d: {
                                v: -1 === c ? -1 : a
                            }
                        }), this.featureSettingNameState.contrast = o[a][1], t._isControlWindow() && s && (n.Z.logStat("User", `Visual_Toolkit|Contrast|${o[a][0]}`), x({
                            contrast_setting: a
                        }))
                    }, this.colorshift_setting = function(e) {
                        if (!this._isControlWindow()) return;
                        const i = e && e.hasOwnProperty("v") ? e : void 0;
                        let o;
                        const a = !i,
                            r = "undefined" != typeof InstallTrigger,
                            s = window.document.documentElement,
                            {
                                body: l
                            } = window.document,
                            c = l.querySelectorAll(":scope > :not(#ae_app)"),
                            u = l.querySelector("#ae_toolbar"),
                            d = u && u.shadowRoot.querySelector("#ae_toolbar_container");
                        r ? (o = parseInt(i ? i.v : "1" === c[0].getAttribute("data-audioeye-lr-colorshift_setting") ? 0 : 1, 10), 0 === o || -1 === o ? (c.forEach((e => e.removeAttribute("data-audioeye-lr-colorshift_setting"))), d && d.removeAttribute("data-audioeye-lr-colorshift_setting")) : (c.forEach((e => e.setAttribute("data-audioeye-lr-colorshift_setting", o))), d && d.setAttribute("data-audioeye-lr-colorshift_setting", o))) : (o = parseInt(i ? i.v : "1" === s.getAttribute("data-audioeye-lr-colorshift_setting") ? 0 : 1, 10), 0 === o || -1 === o ? s.removeAttribute("data-audioeye-lr-colorshift_setting") : s.setAttribute("data-audioeye-lr-colorshift_setting", o)), t.updateCookie("colorshift_setting"), I({
                            f: "colorshift_setting",
                            d: {
                                v: o
                            }
                        }), t._isControlWindow() && a && (n.Z.logStat("User", "Visual_Toolkit|Colorblindness|" + (0 === o ? "Off" : "On")), x({
                            colorshift_setting: o
                        }))
                    }, this.sendiframecorner = function(e) {
                        return {
                            detail: {
                                top: window.ae_jQuery(`#${e}`)[0].getBoundingClientRect().top
                            },
                            status: "all good"
                        }
                    }, this.text_size_setting = function(e) {
                        const i = e && e.hasOwnProperty("v") ? e : void 0;
                        if (i && i.v === window.document.documentElement.getAttribute("data-audioeye-lr-text_size_setting")) return;
                        const o = {
                            0: ["Off", "Text Size"],
                            1: ["Text Size 130 pct", "Large"],
                            2: ["Text Size 170 pct", "Larger"],
                            3: ["Text Size 200 pct", "Largest"]
                        };
                        t.text_size_setting.WM || (t.text_size_setting.WM = new WeakMap, function(e) {
                            const t = window.document.querySelectorAll("*");
                            for (let i = 0; i < t.length; i++) {
                                const n = t[i];
                                let o, a = !1;
                                for (; n.parentElem && !1 === a;) "ae_toolbar_container" === n.parentElem.id && (a = !0);
                                if (!a && !window.ae_jQuery(n).is("html")) {
                                    try {
                                        const e = window.getComputedStyle(n);
                                        o = parseInt(e.getPropertyValue("font-size"), 10)
                                    } catch (e) {
                                        continue
                                    }
                                    e.set(n, o)
                                }
                            }
                        }(t.text_size_setting.WM));
                        const a = window.document.documentElement,
                            r = !i;
                        let s, l, c, u = a.getAttribute("data-audioeye-lr-text_size_setting") || 0;
                        switch (i && (u = i.v - 1), u = parseInt(u, 10), u) {
                            case -2:
                            case -1:
                                u = -1, c = 0;
                                break;
                            case 0:
                            case 1:
                            case 2:
                                c = u + 1;
                                break;
                            default:
                                c = 0
                        }
                        const d = {
                            0: "0",
                            1: "1.3",
                            2: "1.7",
                            3: "2"
                        }[c];
                        if (0 === c) {
                            for (a.removeAttribute("data-audioeye-lr-text_size_setting"), a.removeAttribute("data-audioeye-lr-text-factor"), s = window.document.querySelectorAll("[data-audioeye-lr-textsize]"), l = 0; l < s.length; l++) s[l].removeAttribute("data-audioeye-lr-textsize");
                            t.text_size_setting.WM = null
                        } else ! function(e, t) {
                            const i = window.document.querySelectorAll("*");
                            window.skippedTags || (window.skippedTags = {});
                            for (let n = 0; n < i.length; n++) {
                                const o = i[n];
                                if (window.ae_jQuery(o).closest("#ae_app, .ae-tipsy", "#ae_toolbar_container").length) continue;
                                if (window.ae_jQuery(o).is("html, script, head, style")) continue;
                                const a = t.get(o);
                                if (!a) continue;
                                const r = e * a,
                                    s = Math.round(r);
                                let l;
                                l = s > 200 ? 200 : s < 12 ? 12 : s, o.setAttribute("data-audioeye-lr-textsize", l)
                            }
                        }(d, t.text_size_setting.WM), a.setAttribute("data-audioeye-lr-text-factor", d), a.setAttribute("data-audioeye-lr-text_size_setting", c);
                        t.updateCookie("text_size_setting"), I({
                            f: "text_size_setting",
                            d: {
                                v: -1 === u ? -1 : c
                            }
                        }), this.featureSettingNameState.textSize = o[c][1], t._isControlWindow() && r && (n.Z.logStat("User", `Visual_Toolkit|Text_Size|${o[c][0]}`), x({
                            text_size_setting: c
                        }))
                    }, this.space_setting = function(e) {
                        const i = e && e.hasOwnProperty("v") ? e : void 0,
                            o = !i,
                            a = window.document.documentElement;
                        let r = "1" === a.getAttribute("data-audioeye-lr-space_setting") ? 0 : 1;
                        r = i ? i.v : r, r = parseInt(r, 10), 0 === r || -1 === r ? a.removeAttribute("data-audioeye-lr-space_setting") : a.setAttribute("data-audioeye-lr-space_setting", r), t.updateCookie("space_setting"), I({
                            f: "space_setting",
                            d: {
                                v: r
                            }
                        }), t._isControlWindow() && o && (n.Z.logStat("User", "Visual_Toolkit|Spacing|" + (0 === r ? "Off" : "On")), x({
                            space_setting: r
                        }))
                    }, this.font_setting = function(e) {
                        const i = e && e.hasOwnProperty("v") ? e : void 0,
                            o = {
                                0: ["Off", "Font"],
                                1: ["Sans Serif", "Sans Serif"],
                                2: ["Serif", "Serif"],
                                3: ["Open Dyslexic", "Dyslexic"]
                            },
                            a = !i,
                            r = window.document.documentElement,
                            s = window.document.getElementById("ae_toolbar"),
                            l = s && s.shadowRoot.getElementById("ae_toolbar_container");
                        let c, u = r.getAttribute("data-audioeye-lr-font_setting") || 0;
                        switch (i && (u = i.v - 1), u = parseInt(u, 10), u) {
                            case -1:
                            case -2:
                                u = -1, c = 0;
                                break;
                            case 0:
                            case 1:
                            case 2:
                                c = u + 1;
                                break;
                            default:
                                c = 0
                        }
                        0 === c ? (r.removeAttribute("data-audioeye-lr-font_setting"), t._isControlWindow(), l && l.removeAttribute("data-audioeye-lr-font_setting")) : (r.setAttribute("data-audioeye-lr-font_setting", c), t._isControlWindow(), l && l.setAttribute("data-audioeye-lr-font_setting", c)), t.updateCookie("font_setting"), I({
                            f: "font_setting",
                            d: {
                                v: -1 === u ? -1 : c
                            }
                        }), this.featureSettingNameState.font = o[c][1], t._isControlWindow() && a && (n.Z.logStat("User", `Visual_Toolkit|Font|${o[c][0]}`), x({
                            font_setting: c
                        }))
                    };
                    const _ = {};

                    function y(e) {
                        _.mousex = e.clientX, _.mousey = e.clientY, b(e)
                    }

                    function w(e) {
                        if ("IFRAME" === e.target.tagName) return;
                        if (window.ae_jQuery(e.target).closest("#ae_app").length > 0) return;
                        const t = v(e);
                        n.Z.sendFrameAPIRequest(window.top, "visual-toolkit", "displayTooltipProxy", {
                            x: e.clientX,
                            y: e.clientY,
                            text: t,
                            id: AudioEye.iframe_id
                        })
                    }

                    function v(e) {
                        let t = null;
                        return t = e.target && "function" == typeof e.target.getAttribute ? "IMG" === e.target.tagName && e.target.getAttribute("alt") || e.target.getAttribute("title") || e.target.getAttribute("aria-label") : e.text, t
                    }

                    function b(e) {
                        if (!t._isControlWindow()) return;
                        let i = null;
                        if (e.target) {
                            if (window.ae_jQuery(e.target).closest("#ae_app").length) return;
                            if ("audioeye_rg" === e.target.id) return;
                            if ("IFRAME" === e.target.tagName) return
                        }
                        i = v(e);
                        const n = window.ae_jQuery("#ae_tooltip_on_hover");
                        if (!i) return void n.remove();
                        if (!n.length) return void t.addTooltipIframe();
                        if (!n[0].contentDocument || !n[0].contentDocument.getElementById("tooltip") || "new" !== n[0].contentDocument.getElementById("tooltip").classList[0]) return;
                        n[0].contentDocument.body.innerHTML = `<div class="new" id="tooltip">${i}</div>`;
                        const o = function(e) {
                                const t = window.pageYOffset,
                                    i = e.clientX,
                                    n = e.clientY;
                                let o = `left: ${i+20}px`,
                                    a = `top: ${n+15+t}px`;
                                const r = document.getElementById("ae_tooltip_on_hover").contentDocument.getElementById("tooltip");
                                r.style.width = "", r.style.height = "";
                                const s = r.getBoundingClientRect().width,
                                    l = r.getBoundingClientRect().height;
                                r.style.width = `${s}px`, r.style.height = `${l}px`, window.ae_jQuery("#ae_tooltip_on_hover").css({
                                    width: `${s+20}px`,
                                    height: `${l+20}px`
                                });
                                const c = document.body.clientWidth;
                                return i + 20 + s > c && (o = `right: ${c-i+20}px`), n + 15 + l > window.innerHeight && (a = `top: ${t+n-15-l}px`), {
                                    x: o,
                                    y: a,
                                    h: l + 24,
                                    w: s + 24
                                }
                            }(e),
                            a = `width: ${o.w}px !important; height: ${o.h}px !important; ${o.x}; ${o.y}; z-index: 30000; box-sizing: border-box; opacity: 1`;
                        n.attr("style", a)
                    }

                    function E(e) {
                        window.ae_jQuery("#ae_tooltip_on_hover").remove(), "IFRAME" === e.target.tagName || window.ae_jQuery(e.target).closest("#ae_app").length > 0 || b(e)
                    }

                    function A(e) {
                        const t = v(e);
                        n.Z.sendFrameAPIRequest(window.top, "visual-toolkit", "tooltipMouseMoveInIframeProxy", {
                            x: e.clientX,
                            y: e.clientY,
                            id: AudioEye.iframe_id,
                            text: t
                        })
                    }

                    function I(e) {
                        n.Z.iframes.getRegisteredWindows().forEach((t => {
                            n.Z.sendFrameAPIRequest(t, "visual-toolkit", e.f, e.d)
                        }))
                    }

                    function x(e) {
                        window.postMessage({
                            source: "visual-toolkit",
                            msg: "updateButtonState",
                            data: e
                        }, "*")
                    }

                    function k(e) {
                        window.postMessage({
                            source: "visual-toolkit",
                            msg: "openPane",
                            data: e
                        }, "*")
                    }

                    function R() {
                        window.postMessage({
                            source: "visual-toolkit",
                            msg: "closeToolbar"
                        }, "*")
                    }
                    this.display_alt_desc = function(e) {
                        const i = e && e.hasOwnProperty("v") ? e : void 0,
                            o = !i,
                            a = window.document.documentElement;
                        let r = "1" === a.getAttribute("data-audioeye-lr-display_alt_desc") ? 0 : 1;
                        r = i ? i.v : r, r = parseInt(r, 10), 0 === r || -1 === r ? (a.removeAttribute("data-audioeye-lr-display_alt_desc"), t._isControlWindow() ? (document.removeEventListener("mouseover", E), document.removeEventListener("mousemove", y), window.ae_jQuery("#ae_tooltip_on_hover").remove()) : (document.removeEventListener("mouseover", w), document.removeEventListener("mousemove", A))) : (a.setAttribute("data-audioeye-lr-display_alt_desc", r), t._isControlWindow() ? (document.addEventListener("mouseover", E), document.addEventListener("mousemove", y)) : (document.addEventListener("mouseover", w), document.addEventListener("mousemove", A))), t.updateCookie("display_alt_desc"), I({
                            f: "display_alt_desc",
                            d: {
                                v: r
                            }
                        }), t._isControlWindow() && o && (n.Z.logStat("User", "Visual_Toolkit|Display_Image_Alt|" + (0 === r ? "Off" : "On")), x({
                            display_alt_desc: r
                        }))
                    }, this.displayTooltipProxy = function(e) {
                        const t = window.ae_jQuery(`#${e.id}`);
                        if (!t.length) return;
                        const i = t[0].getBoundingClientRect().top,
                            n = t[0].getBoundingClientRect().left;
                        e.text ? b({
                            text: e.text,
                            clientX: e.x + n,
                            clientY: e.y + i
                        }) : window.ae_jQuery("#ae_tooltip_on_hover").remove()
                    }, this.tooltipMouseMoveInIframeProxy = function(e) {
                        const t = window.ae_jQuery(`#${e.id}`);
                        if (!t.length) return;
                        const i = t[0].getBoundingClientRect().top,
                            n = t[0].getBoundingClientRect().left;
                        _.mousex = e.x + n, _.mousey = e.y + i, y({
                            clientX: e.x + n,
                            clientY: e.y + i,
                            text: e.text
                        })
                    }, this.moduleName = "visual-toolkit", this.featureSettingNameState = {}, this.addTooltipIframe = function() {
                        window.ae_jQuery("#ae_tooltip_on_hover").remove();
                        const e = window.ae_jQuery("<iframe onload=AudioEye['visual-toolkit'].populateTooltip() id='ae_tooltip_on_hover' style='width: 4500px !important; box-sizing: border-box'>");
                        r.Z.set(e, "exclude"), window.ae_jQuery(document.body).prepend(e)
                    }, this.populateTooltip = function() {
                        const e = window.ae_jQuery("#ae_tooltip_on_hover");
                        e[0].removeAttribute("onload"), window.ae_jQuery(e[0].contentDocument.head).append("<style> body {margin: 0} #tooltip {color: white ;max-width: 4000px;display: inline-block;font-size: 20px;font-family: 'Arial'}</style>"), window.ae_jQuery(e[0].contentDocument.body).append("<div class='new' id='tooltip'></div>")
                    }, this.init = function() {
                        this.runWithControlBarClosed = "true" === a.Z.get("aelreadercontrolbarclosed"), t.restore(), window.document.documentElement.addEventListener("mousemove", t.trackMouseLocation, !0)
                    }, this.isRunningWithControlBarClosed = function() {
                        return !!this.runWithControlBarClosed
                    }, this.restore = function() {
                        try {
                            const e = JSON.parse(a.Z.get("aelreadersettings")) || d,
                                i = this.focusOverrideSettings(e);
                            Object.keys(i).forEach((e => {
                                const n = Number.isNaN(i[e]) ? 0 : parseInt(i[e], 10);
                                t[e] && n && t[e]({
                                    v: n
                                })
                            }))
                        } catch (e) {
                            u.error("error trying to restore visual toolkit settings: ", e)
                        }
                    }, this.currentState = function() {
                        let e;
                        try {
                            return e = JSON.parse(a.Z.get("aelreadersettings")) || {}, { ...d,
                                ...e
                            }
                        } catch (e) {
                            return u.error("error trying to rebuild visual toolkit settings from cookies: ", e), d
                        }
                    }, this.c_big = function(e) {
                        const i = e && e.hasOwnProperty("v") ? e : void 0,
                            o = !i,
                            a = window.document.documentElement;
                        let r = "1" === a.getAttribute("data-audioeye-lr-c_big") ? 0 : 1;
                        r = i ? i.v : r, r = parseInt(r, 10), 0 === r || -1 === r ? (a.removeAttribute("data-audioeye-lr-c_big"), this._isControlWindow() && a.querySelector("#ae_toolbar") && a.querySelector("#ae_toolbar").shadowRoot.querySelector("#ae_toolbar_container").removeAttribute("data-audioeye-lr-c_big")) : (a.setAttribute("data-audioeye-lr-c_big", r), this._isControlWindow() && a.querySelector("#ae_toolbar") && a.querySelector("#ae_toolbar").shadowRoot.querySelector("#ae_toolbar_container").setAttribute("data-audioeye-lr-c_big", r)), t.updateCookie("c_big"), I({
                            f: "c_big",
                            d: {
                                v: r
                            }
                        }), t._isControlWindow() && o && (n.Z.logStat("User", "Visual_Toolkit|Large_Cursor|" + (1 === r ? "On" : "Off")), x({
                            c_big: r
                        }))
                    }, this.k = function(e) {
                        const i = e && e.hasOwnProperty("v") ? e : void 0,
                            o = !i,
                            a = window.document.documentElement;
                        let r = "1" === a.getAttribute("data-audioeye-lr-k") ? 0 : 1;
                        r = i ? i.v : r, r = parseInt(r, 10), 0 === r || -1 === r ? (a.removeAttribute("data-audioeye-lr-k"), this._isControlWindow() && a.querySelector("#ae_toolbar") && a.querySelector("#ae_toolbar").shadowRoot.querySelector("#ae_toolbar_container").removeAttribute("data-audioeye-lr-k"), r = 0) : (a.setAttribute("data-audioeye-lr-k", r), this._isControlWindow() && a.querySelector("#ae_toolbar") && a.querySelector("#ae_toolbar").shadowRoot.querySelector("#ae_toolbar_container").setAttribute("data-audioeye-lr-k", r)), t.updateCookie("k"), c && t.updateDisableDefaultFocusCookie(r), I({
                            f: "k",
                            d: {
                                v: r
                            }
                        }), t._isControlWindow() && o && (n.Z.logStat("User", "Visual_Toolkit|Keyboard_Focus|" + (0 === r ? "Off" : "On")), x({
                            k: r
                        }))
                    }, this.disable_animations = function(e) {
                        const i = e && e.hasOwnProperty("v") ? e : void 0,
                            o = !i,
                            a = window.document.documentElement;
                        let r = "1" === a.getAttribute("data-audioeye-lr-disable_animations") ? 0 : 1;
                        r = i ? i.v : r, r = parseInt(r, 10), 0 === r || -1 === r ? a.removeAttribute("data-audioeye-lr-disable_animations") : a.setAttribute("data-audioeye-lr-disable_animations", r), t.updateCookie("disable_animations"), I({
                            f: "disable_animations",
                            d: {
                                v: r
                            }
                        }), t._isControlWindow() && o && (n.Z.logStat("User", "Visual_Toolkit|Disable_Animations|" + (0 === r ? "Off" : "On")), x({
                            disable_animations: r
                        }))
                    };
                    let C = {
                        add() {
                            const e = window.document;
                            let t, i;
                            e.querySelector("#audioeye_rg_above") || (t = e.createElement("div"), t.id = "audioeye_rg_above", t.classList.add("disabled"), e.body.append ? e.body.append(t) : e.body.appendChild(t)), e.querySelector("#audioeye_rg_below") || (i = e.createElement("div"), i.id = "audioeye_rg_below", i.classList.add("disabled"), e.body.append ? e.body.append(i) : e.body.appendChild(i))
                        },
                        remove() {
                            const e = window.document.documentElement,
                                t = window.document;
                            let i;
                            e.getAttribute("data-audioeye-lr-memph") || e.getAttribute("data-audioeye-lr-rg") || (t.querySelector("#audioeye_rg_above") && (i = t.querySelector("#audioeye_rg_above"), i.parentNode.removeChild(i)), t.querySelector("#audioeye_rg_below") && (i = t.querySelector("#audioeye_rg_below"), i.parentNode.removeChild(i)))
                        }
                    };
                    this.rg = function(e) {
                            const o = e && e.hasOwnProperty("v") ? e : void 0,
                                a = !o,
                                r = window.document.documentElement,
                                l = window.document;
                            let c, u = "1" === r.getAttribute("data-audioeye-lr-rg") ? 0 : 1;
                            u = o ? o.v : u, u = parseInt(u, 10), 0 === u || -1 === u ? (r.removeAttribute("data-audioeye-lr-rg"), t._isControlWindow() ? (r.removeEventListener("mouseover", f, !0), r.removeEventListener("mousemove", s, !0)) : r.removeEventListener("mousemove", i, !0), l.querySelector("#audioeye_rg") && (c = l.querySelector("#audioeye_rg"), c.parentNode.removeChild(c)), C.remove()) : (r.setAttribute("data-audioeye-lr-rg", u), t._isControlWindow() ? (this.mouseLocation ? s(this.mouseLocation) : s({
                                clientY: window.innerHeight
                            }), r.addEventListener("mouseover", f, !0), r.addEventListener("mousemove", s, !0)) : r.addEventListener("mousemove", i, !0)), t.updateCookie("rg"), I({
                                f: "rg",
                                d: {
                                    v: u
                                }
                            }), t._isControlWindow() && a && (n.Z.logStat("User", "Visual_Toolkit|Reading_Guide|" + (0 === u ? "Off" : "On")), x({
                                rg: u
                            }))
                        }, this._isControlWindow = function() {
                            return window === window.top || !!l.Z.isPreviewMode()
                        }, this.addInterface = function() {}, this.removeInterface = function() {}, this.refreshLanguage = function(t) {
                            const i = e.prototype.refreshLanguage.call(this, t);
                            return !!i && (this.restore(), i)
                        }, this.setCustomColors = function(e) {
                            this.ui.css("background-color", e.background), this.ui.find("button, .audioeye-setting-carousel").css("color", e.foreground)
                        }, this._get_all_elements = function() {
                            return window.ae_jQuery.makeArray(document.querySelectorAll("*"))
                        },
                        function() {
                            if (!t._isControlWindow()) return;
                            const e = t.currentState(),
                                i = {};
                            Object.keys(e).forEach((t => {
                                Number.isNaN(e[t]) && 0 === d[t] || (i[t] = e[t])
                            })), a.Z.set("aelreadersettings", JSON.stringify(i))
                        }()
                }
            },
            274: function(e, t, i) {
                var n = {
                    "./compliance": [3141, 602, 807, 878],
                    "./compliance.js": [3141, 602, 807, 878],
                    "./help-desk": [7748, 407],
                    "./help-desk.js": [7748, 407],
                    "./launcher": [371, 300, 123, 777],
                    "./launcher.js": [371, 300, 123, 777],
                    "./live-scanner": [6498, 334, 463, 300, 802, 178, 171, 158],
                    "./live-scanner.js": [6498, 334, 463, 300, 802, 178, 171, 158],
                    "./page-structure": [2593, 906],
                    "./page-structure.js": [2593, 906],
                    "./pdf-reader": [8387, 300, 746],
                    "./pdf-reader.js": [8387, 300, 746],
                    "./rotor": [8916, 602, 385],
                    "./rotor.js": [8916, 602, 385],
                    "./site-menu": [8855, 300, 602, 338],
                    "./site-menu.js": [8855, 300, 602, 338],
                    "./toolbar": [6438, 169, 300, 602, 123, 807, 882],
                    "./toolbar.js": [6438, 169, 300, 602, 123, 807, 882],
                    "./visual-toolkit": [2123, 123, 258],
                    "./visual-toolkit.js": [2123, 123, 258]
                };

                function o(e) {
                    if (!i.o(n, e)) return Promise.resolve().then((function() {
                        var t = new Error("Cannot find module '" + e + "'");
                        throw t.code = "MODULE_NOT_FOUND", t
                    }));
                    var t = n[e],
                        o = t[0];
                    return Promise.all(t.slice(1).map(i.e)).then((function() {
                        return i(o)
                    }))
                }
                o.keys = function() {
                    return Object.keys(n)
                }, o.id = 274, e.exports = o
            }
        },
        n = {};

    function o(e) {
        var t = n[e];
        if (void 0 !== t) return t.exports;
        var a = n[e] = {
            exports: {}
        };
        return i[e](a, a.exports, o), a.exports
    }
    o.m = i, o.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return o.d(t, {
                a: t
            }), t
        }, o.d = function(e, t) {
            for (var i in t) o.o(t, i) && !o.o(e, i) && Object.defineProperty(e, i, {
                enumerable: !0,
                get: t[i]
            })
        }, o.f = {}, o.e = function(e) {
            return Promise.all(Object.keys(o.f).reduce((function(t, i) {
                return o.f[i](e, t), t
            }), []))
        }, o.u = function(e) {
            return ({
                158: "live-scanner",
                258: "visual-toolkit",
                338: "site-menu",
                385: "rotor",
                407: "help-desk",
                746: "pdf-reader",
                750: "[request]",
                777: "launcher",
                802: "dialog",
                878: "compliance",
                882: "toolbar",
                906: "page-structure",
                914: "healthCheck",
                916: "walkthroughs"
            }[e] || e) + ".bundle.123123123.js"
        }, o.miniCssF = function(e) {}, o.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), o.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, e = {}, t = "audioeye_services:", o.l = function(i, n, a, r) {
            if (e[i]) e[i].push(n);
            else {
                var s, l;
                if (void 0 !== a)
                    for (var c = document.getElementsByTagName("script"), u = 0; u < c.length; u++) {
                        var d = c[u];
                        if (d.getAttribute("src") == i || d.getAttribute("data-webpack") == t + a) {
                            s = d;
                            break
                        }
                    }
                s || (l = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, o.nc && s.setAttribute("nonce", o.nc), s.setAttribute("data-webpack", t + a), s.src = i), e[i] = [n];
                var m = function(t, n) {
                        s.onerror = s.onload = null, clearTimeout(f);
                        var o = e[i];
                        if (delete e[i], s.parentNode && s.parentNode.removeChild(s), o && o.forEach((function(e) {
                                return e(n)
                            })), t) return t(n)
                    },
                    f = setTimeout(m.bind(null, void 0, {
                        type: "timeout",
                        target: s
                    }), 12e4);
                s.onerror = m.bind(null, s.onerror), s.onload = m.bind(null, s.onload), l && document.head.appendChild(s)
            }
        }, o.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.j = 664, o.p = "https://wsv3cdn.audioeye.com/f6bea56/build/",
        function() {
            var e = {
                664: 0,
                385: 0,
                258: 0,
                350: 0,
                602: 0,
                123: 0,
                807: 0
            };
            o.f.j = function(t, i) {
                var n = o.o(e, t) ? e[t] : void 0;
                if (0 !== n)
                    if (n) i.push(n[2]);
                    else {
                        var a = new Promise((function(i, o) {
                            n = e[t] = [i, o]
                        }));
                        i.push(n[2] = a);
                        var r = o.p + o.u(t),
                            s = new Error;
                        o.l(r, (function(i) {
                            if (o.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                                var a = i && ("load" === i.type ? "missing" : i.type),
                                    r = i && i.target && i.target.src;
                                s.message = "Loading chunk " + t + " failed.\n(" + a + ": " + r + ")", s.name = "ChunkLoadError", s.type = a, s.request = r, n[1](s)
                            }
                        }), "chunk-" + t, t)
                    }
            };
            var t = function(t, i) {
                    var n, a, r = i[0],
                        s = i[1],
                        l = i[2],
                        c = 0;
                    if (r.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (n in s) o.o(s, n) && (o.m[n] = s[n]);
                        l && l(o)
                    }
                    for (t && t(i); c < r.length; c++) a = r[c], o.o(e, a) && e[a] && e[a][0](), e[r[c]] = 0
                },
                i = self.AudioEyeWebpackJsonp = self.AudioEyeWebpackJsonp || [];
            i.forEach(t.bind(null, 0)), i.push = t.bind(null, i.push.bind(i))
        }(),
        function() {
            "use strict";
            var e, t = o(2399),
                i = (o(8523), o(4918)),
                n = window == window.top ? "parent" : "iframe",
                a = new i.Z("event-sync@" + n),
                r = function(e) {
                    var i = this;
                    this.events = e && e.events ? e.events : ["keydown"], this.inIframe = t.Z.inIframe(), this.topWindow = window.top, this.sync = function() {
                            if (this.synced) return !1;
                            this.events.forEach((function(e) {
                                document.addEventListener(e, t.Z.bind(i, i.postEvent))
                            })), window.addEventListener("message", t.Z.bind(this, this.receiveEventMessage), !1), this.synced = !0
                        }, this.stopSync = function() {
                            this.events.forEach((function(e) {
                                document.removeEventListener(e, t.Z.bind(i, i.postEvent))
                            })), window.removeEventListener("message", t.Z.bind(this, this.receiveEventMessage), !1), this.synced = !1
                        }, this.receiveEventMessage = function(e) {
                            var t, i;
                            if (!e || !e.data) return !1;
                            try {
                                i = JSON.parse(e.data)
                            } catch (e) {
                                return !1
                            }
                            return "AudioEye.EventSync" === i.object && !!i.relayed_event && (t = i.relayed_event, -1 !== this.events.indexOf(t.type) && void this.dispatchRelayedEvt(t, e.source))
                        }, this.postEvent = function(e) {
                            if (e.view !== window) return !1;
                            e.ignoreEscape || (e.ignoreEscape = !1);
                            var t = this._simple_vals(e);
                            e.target || e.srcElement, t.relayedTargetTagName = e.target ? e.target.tagName : "";
                            var i = {
                                    object: "AudioEye.EventSync",
                                    relayed_event: t
                                },
                                n = JSON.stringify(i);
                            this.inIframe && this.topWindow.postMessage(n, "*")
                        }, this.dispatchRelayedEvt = function(e, t) {
                            var i = window.Event;
                            if (!e || !e.type || !t) return a.error("Required params missing for dispatchRelayedEvent"), !1;
                            window.AudioEye && window.AudioEye.native && window.AudioEye.native.Event && (i = window.AudioEye.native.Event);
                            var n = new i(e.type);
                            window.ae_jQuery.extend(n, e), n.view = t, document.dispatchEvent(n)
                        }, this._simple_vals = function(e) {
                            var t = {};
                            for (var i in e) t[i] = "object" == typeof e[i] ? "{ ... }" : e[i];
                            return t
                        }, this.postMessage = window.postMessage,
                        function() {
                            if ("function" == typeof window.CustomEvent) return !1;

                            function e(e, t) {
                                t = t || {
                                    bubbles: !1,
                                    cancelable: !1,
                                    detail: void 0
                                };
                                var i = document.createEvent("CustomEvent");
                                return i.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), i
                            }
                            e.prototype = window.Event.prototype, window.CustomEvent = e, Object.keys(window.Event).forEach((function(t) {
                                void 0 === e[t] && (e[t] = window.Event[t])
                            })), window.Event = e
                        }()
                },
                s = o(7422),
                l = o(7668),
                c = new i.Z("hidden-activation"),
                u = {
                    _modules: {
                        admin: {
                            title: "Admin",
                            "aria-label": "Open the AudioEye Admin Panel",
                            key: !1,
                            "active-button": null
                        },
                        "site-menu": {
                            title: "Site Menu",
                            key: "n",
                            "active-button": null
                        },
                        rotor: {
                            title: "Page Elements Menu",
                            "aria-label": "Open an Accessibile Page Elements Menu",
                            key: "d",
                            "active-button": null
                        },
                        helpdesk: {
                            title: "Accessibility Help Desk",
                            "aria-label": "Open the Accessibility Help Desk",
                            key: "h",
                            "active-button": null
                        },
                        "user-settings": {
                            key: "s"
                        },
                        help: {
                            key: ["shift+/", "/"]
                        },
                        "lite-reader": {
                            key: "t"
                        },
                        reader: {
                            key: "r"
                        },
                        player: {
                            key: "p"
                        },
                        voice: {
                            key: "v"
                        },
                        certification: {
                            key: "b"
                        }
                    },
                    _escActive: !1,
                    init: function() {
                        this._getApp().register("ModuleOpt", (function(e) {
                            u._onModuleOpt(e)
                        })), this._getApp().register("SetModuleKey", (function(e) {
                            u.setModuleKey(e.detail.module, e.detail.action)
                        }))
                    },
                    _onModuleOpt: function(e) {
                        if (!u._modules[e.detail.module]) return !1;
                        var t = "in" === e.detail.direction ? "add" : "remove";
                        u.setTabBtn(e.detail.module, t), u.setModuleKey(e.detail.module, t)
                    },
                    setModuleKey: function(e, t) {
                        u[t + "Key"](e)
                    },
                    addKey: function(e) {
                        this.removeKey(e), u._getToggleKeyString(e).forEach((function(i) {
                            l.Z.add(i, "hidden-activation", (function() {
                                switch (t.Z.toggleModule(e)) {
                                    case !0:
                                        t.Z.logStat("User", "AE " + e + " Opened", i);
                                        break;
                                    case !1:
                                        t.Z.logStat("User", "AE " + e + " Closed", i);
                                        break;
                                    case "loading":
                                        c.debug("Toggle not executed: Module is already loading.");
                                        break;
                                    case "cancelled":
                                        c.debug("Toggle not executed: Cancelled by the Module Hook.")
                                }
                                return !0
                            }), {
                                type: "keydown",
                                disable_in_input: !0,
                                target: document
                            })
                        }))
                    },
                    removeKey: function(e) {
                        u._getToggleKeyString(e).forEach((function(e) {
                            l.Z.remove(e, "hidden-activation")
                        }))
                    },
                    setTabBtn: function(e, t) {
                        u[t + "TabBtn"](e)
                    },
                    addTabBtn: function(e) {
                        var i = this._modules[e],
                            n = this._makeTabBtn(i);
                        this._prependButton(n);
                        var o = "AE Hidden " + i.title;
                        n.register("focusin.hidden-activation", (function() {
                            t.Z.logStat("User", o + " Focused", "focus")
                        })), n.register("click.hidden-activation", (function(i) {
                            i.preventDefault(), t.Z.logStat("User", o + " Engaged", "click"), t.Z.setModuleActive(e, !0)
                        })), this._modules[e]["active-button"] = n
                    },
                    removeTabBtn: function(e) {
                        this._modules[e]["active-button"] && this._modules[e]["active-button"].remove()
                    },
                    _getApp: function() {
                        return window.ae_jQuery("#ae_app")
                    },
                    _getBody: function() {
                        return window.ae_jQuery(document.body)
                    },
                    _getToggleKeyString: function(e) {
                        var t = this._modules[e].key;
                        return !1 === t ? [] : t ? (Array.isArray(t) || (t = [t]), t) : (c.error('Invalid module "' + e + '" passed to _getToggleKeyString'), !1)
                    },
                    _prependButton: function(e) {
                        var t = this._getBody(),
                            i = t.find(".ae-skipto-main, .ae-accessible-menu-button");
                        i.length ? i.last().after(e) : t.prepend(e)
                    },
                    _makeTabBtn: function(e) {
                        var t = window.ae_jQuery("<button></button>");
                        return t.attr({
                            type: "button",
                            "aria-label": e["aria-label"],
                            class: "ae-offscreen ae-accessible-menu-button",
                            tabindex: "0",
                            style: "display: none;"
                        }), t.text(e.title), t
                    }
                },
                d = u,
                m = o(3116),
                f = o(807),
                h = o(138),
                p = AudioEye.productConfig,
                g = new i.Z("contentModifiers"),
                _ = {
                    _prodConfig: p,
                    markingMap: [{
                        marker: "Exclude"
                    }, {
                        marker: "Tabsets",
                        module: ["player"]
                    }, {
                        marker: "ForceBlurb",
                        module: ["player"]
                    }, {
                        marker: "Carousels"
                    }, {
                        marker: "Media",
                        module: ["reader", "player", "rotor", "toolbar"]
                    }, {
                        marker: "Images",
                        module: ["reader"]
                    }, {
                        marker: "Fields",
                        module: ["player", "rotor"]
                    }, {
                        marker: "Forms",
                        module: ["reader", "player"]
                    }, {
                        marker: "LabelsToTargets",
                        module: ["player"]
                    }, {
                        marker: "Iframes"
                    }],
                    markAll: function(e) {
                        e || (e = window.ae_jQuery(document.documentElement)), 1 !== this._prodConfig["content-modifiers-version"] ? this.markingMap.ae_reduce((function(e, i) {
                            return void 0 === i.module || i.module.some((function(e) {
                                return t.Z.isModuleActive(e)
                            })) ? e.concat(i.marker) : e
                        }), []).forEach((function(t) {
                            if ("function" != typeof _["mark" + t]) throw new Error("Marker named mark" + t + "does not correspond to a marker method");
                            _["mark" + t](e)
                        })) : this.markingMap.forEach((function(t) {
                            if ("function" != typeof _["mark" + t.marker]) throw new Error("Marker named mark" + t.marker + "does not correspond to a marker method");
                            _["mark" + t.marker](e)
                        }))
                    },
                    markExclude: function(e) {
                        this.markPortalSelectors({
                            exclude: _._prodConfig.excludes
                        }, e)
                    },
                    markCarousels: function(e) {
                        f.Z.mark(e, _._prodConfig.carousels)
                    },
                    markForceBlurb: function(e) {
                        this.markPortalSelectors({
                            "force-blurb": _._prodConfig.player && _._prodConfig.player["force-blurb"]
                        }, e)
                    },
                    markTabsets: function(e) {
                        this.markPortalSelectors({
                            tabset: _._prodConfig.tabsets.tabset,
                            "tabset-tab": _._prodConfig.tabsets.tabs,
                            "tabset-activetab": _._prodConfig.tabsets["active-tab"],
                            "tabset-content": _._prodConfig.tabsets.content
                        }, e)
                    },
                    markMedia: function(e) {
                        e.outerFind("embed").filter((function() {
                            return 0 === window.ae_jQuery(this).closest(h.Z.selector("exclude") + ", object").length
                        })).each((function() {
                            this.src && (this.src.match(/youtube(?:-nocookie)?\.com/) ? (this.src = "https://www." + this.src.slice(this.src.indexOf("youtube")), h.Z.set(window.ae_jQuery(this), "media"), h.Z.set(window.ae_jQuery(this), "youtube")) : this.src.indexOf("vimeo.com") >= 0 && h.Z.set(window.ae_jQuery(this), "vimeo")), h.Z.set(window.ae_jQuery(this), "media")
                        })), e.outerFind("object").filter((function() {
                            return 0 === window.ae_jQuery(this).closest(h.Z.selector("exclude")).length
                        })).each((function() {
                            var e;
                            (e = window.ae_jQuery(this).children("embed").length > 0 ? window.ae_jQuery(this).children("embed").attr("src") : window.ae_jQuery(this).children("param[name='movie']").length > 0 ? window.ae_jQuery(this).children("param[name='movie']").attr("value") : window.ae_jQuery(this).attr("data")) && (e.match(/youtube(?:-nocookie)?\.com/) ? (e = "https://www." + e.slice(e.indexOf("youtube")), h.Z.set(window.ae_jQuery(this), "youtube")) : e.indexOf("vimeo.com") >= 0 && h.Z.set(window.ae_jQuery(this), "vimeo"), window.ae_jQuery(this).attr("data-player-url", e)), h.Z.set(window.ae_jQuery(this), "media")
                        })), e.outerFind("video, audio").filter((function() {
                            return 0 === window.ae_jQuery(this).closest(h.Z.selector("exclude")).length
                        })).each((function() {
                            h.Z.set(window.ae_jQuery(this), "media")
                        }))
                    },
                    markImages: function(e) {
                        e.outerFind("img, input[type='image']").filter((function() {
                            return 0 === window.ae_jQuery(this).closest("#ae_app, " + h.Z.selector("exclude") + ", .ae-carousel").length
                        })).each((function() {
                            h.Z.set(window.ae_jQuery(this), "img")
                        }))
                    },
                    markBlurbSettings: function(e) {
                        var t = {
                            cache: {
                                selector: _._prodConfig.player["no-cache"],
                                value: !1
                            },
                            spellback: {
                                selector: _._prodConfig.player["spell-back"],
                                value: !0
                            }
                        };
                        Object.keys(t).forEach((function(i) {
                            e.outerFind(t[i].selector).attr("data-ae-" + i, t[i].value)
                        }))
                    },
                    markFields: function(e) {
                        e.outerFind("input, select, textarea, button").not("[type=hidden]").filter((function() {
                            return 0 === window.ae_jQuery(this).closest(h.Z.selector("exclude")).length
                        })).each((function() {
                            var e = window.ae_jQuery(this);
                            _.markFieldType(e, window.ae_jQuery(this).attr("type")), e.attr("data-ae-form-field", !0)
                        }))
                    },
                    markFieldType: function(e, t) {
                        if (e.is(":button, :submit, :reset, :image")) return h.Z.set(e, "button"), void e.attr("data-ae-blurbtype", "button");
                        t && "number" === t.toLowerCase() ? e.attr("data-ae-blurbtype", "number") : t && "file" === t.toLowerCase() ? e.attr("data-ae-blurbtype", "file") : (!t || "radio" !== t.toLowerCase() && "checkbox" !== t.toLowerCase()) && e.attr("data-ae-blurbtype", e.prop("nodeName").toLowerCase())
                    },
                    markForms: function(e) {
                        e.outerFind("form").filter((function() {
                            var e = 0 === window.ae_jQuery(this).closest(h.Z.selector("exclude")).length,
                                t = "" !== window.ae_jQuery(this).attr("data-ae-blurbtype");
                            return e && t
                        })).each((function() {
                            h.Z.is(window.ae_jQuery(this).parent(), "form") || h.Z.set(window.ae_jQuery(this), "form")
                        }))
                    },
                    markPortalSelectors: function(e, t) {
                        if (!e || !t) return g.info("Error: markPortalSelectors missing required arguments"), !1;
                        Object.keys(e).forEach((function(i) {
                            var n = e[i];
                            n && h.Z.set(t.outerFind(n), i)
                        }))
                    },
                    markIframes: function(e) {
                        _._prodConfig.iframes.searchAndInject && t.Z.safeFrames(e).filter((function() {
                            return 0 === window.ae_jQuery(this).closest(h.Z.selector("exclude")).length
                        })).each((function() {
                            _.detectIframeMedia(this)
                        }))
                    },
                    detectIframeMedia: function(e) {
                        var i = e.src || "";
                        if (i.match(/youtube(?:-nocookie)?\.com/))
                            if (-1 !== i.indexOf("subscribe")) {
                                h.Z.set(window.ae_jQuery(e), "exclude");
                                var n = e.src.match(/channel=((?:\w|%\d+)+)/);
                                n && (n = n[1], window.ae_jQuery('<a class="ae-offscreen ae-youtube-subscribe" style="display: none;" target="_blank" href="https://www.youtube.com/subscription_center?add_user=' + n + '">Subscribe to ' + n + " (opens YouTube in new tab)</a>").insertAfter(e))
                            } else h.Z.set(window.ae_jQuery(e), "media"), h.Z.set(window.ae_jQuery(e), "youtube");
                        else i.indexOf("vimeo.com") >= 0 ? (h.Z.set(window.ae_jQuery(e), "media"), h.Z.set(window.ae_jQuery(e), "vimeo")) : t.Z.registerIframe(e)
                    },
                    markLabelsToTargets: function(e) {
                        e || (e = window.ae_jQuery("html")), e.outerFind("label").filter((function() {
                            return 0 === window.ae_jQuery(this).closest(h.Z.selector("exclude")).length
                        })).each((function() {
                            var e = window.ae_jQuery(this).find("input, select, textarea").eq(0);
                            0 === e.length && window.ae_jQuery(this).attr("for") && (e = window.ae_jQuery("#" + t.Z.safeSelectorText(window.ae_jQuery(this).attr("for")))), 0 === e.length && 1 === window.ae_jQuery(this).parent().find("input, select, textarea").length && (e = window.ae_jQuery(this).parent().find("input, select, textarea").eq(0)), e.length > 0 && (!1 === window.ae_jQuery(this).is("[data-audioeye-blurb], [data-ae-blurbtype]") && h.Z.set(window.ae_jQuery(this), "label"), e.data("targetLabel", window.ae_jQuery(this)))
                        })), e.outerFind("*[aria-labelledby]").filter((function() {
                            return 0 === window.ae_jQuery(this).closest(h.Z.selector("exclude")).length
                        })).each((function() {
                            var e = window.ae_jQuery(this).attr("aria-labelledby").split(" ").ae_reduce((function(e, i) {
                                return (i = i.trim()) ? e.add(window.ae_jQuery("#" + t.Z.safeSelectorText(i))) : e
                            }), window.ae_jQuery());
                            e.length > 0 && (!1 === e.is("[data-audioeye-blurb], [data-ae-blurbtype]") && h.Z.set(e, "label"), window.ae_jQuery(this).data("targetLabel", e))
                        })), e.outerFind(h.Z.selector("label")).filter((function() {
                            return 0 === window.ae_jQuery(this).closest(h.Z.selector("exclude")).length
                        })).each((function() {
                            var e = window.ae_jQuery(this).data("blurbObject");
                            e && e.destroy()
                        }))
                    }
                },
                y = _,
                w = o(4699),
                v = new i.Z("mutations"),
                b = null,
                E = {
                    observer: void 0,
                    mutatedElements: window.ae_jQuery(),
                    recordRemovedNodes: [],
                    cooldownTime: 200,
                    ignorelist: "#ae_app, .ae-style, .ae-cursor, .ae-dial, .ae-tipsy, .ae-ir-textnode, .ae-active-wrap-overlay, .ae-textnode-span, .ae-compliance-indent, .ae-img-wrapper, .ae-img-alt, .ae-listbox, .ae-mutation-ignore, .tabloophelper, .ae-skipto-main",
                    elements: [],
                    record_size: 25,
                    enqueueBatch: function(e) {
                        E.elements = E.elements.concat(e)
                    },
                    dequeueBatch: function() {
                        var e = [];
                        return E.isEmpty() || (E.elements.length - E.record_size > 0 ? e = E.elements.splice(0, E.record_size) : (e = E.elements, E.elements = [])), e
                    },
                    isEmpty: function() {
                        return 0 == E.elements.length
                    },
                    observe: function() {
                        if (void 0 === window.MutationObserver) return !1;
                        void 0 === this.observer && (this.observer = new window.MutationObserver((function(e) {
                            E.batchProcessingRecords(e)
                        }))), this.observer.observe(window.document.body, {
                            childList: !0,
                            subtree: !0,
                            characterData: !0
                        })
                    },
                    batchProcessingRecords: function(t) {
                        E.enqueueBatch(t), window.clearTimeout(e), E.accumulateElements()
                    },
                    accumulateElements: function() {
                        if (E.dequeueBatch().forEach((function(e) {
                                var i;
                                i = "characterData" === e.type ? window.ae_jQuery(e.target.parentElement) : window.ae_jQuery(e.addedNodes).filter((function() {
                                    return 8 !== this.nodeType
                                })), e.removedNodes.length && (E.recordRemovedNodes = E.recordRemovedNodes.concat(e.removedNodes), E.mutatedElements = E.mutatedElements.not(window.ae_jQuery(e.removedNodes))), 0 !== (i = E._filterIgnored(i)).length && window.ae_jQuery(i).not(t.Z.ignoreSelectors).each((function() {
                                    if (0 !== window.ae_jQuery(this).closest(".ae-carousel, .ae-timer").length) return !0;
                                    E.mutatedElements = E.mutatedElements.addNoSort(this)
                                }))
                            })), !E.isEmpty()) return window.clearTimeout(e), void(e = setTimeout((function() {
                            E.accumulateElements()
                        }), 5));
                        E.mutatedElements = window.ae_jQuery.unique(E.mutatedElements), E.mutatedElements = E.filterRedundantChildren(E.mutatedElements), E.recordRemovedNodes.length && (t.Z.dispatchEvent("RemovedNodes", {
                            nodes: E.recordRemovedNodes
                        }), E.recordRemovedNodes = []), E.mutatedElements.length && (E.mutatedElements.length >= 40 ? (v.debug("Large number of mutations (" + E.mutatedElements.length + "); skipping cooldown."), requestAnimationFrame(t.Z.bind(this, this.handleMutations))) : (b && window.clearTimeout(b), b = window.setTimeout(t.Z.bind(this, this.handleMutations), this.cooldownTime)))
                    },
                    filterRedundantChildren: function(e) {
                        var t = new window.WeakMap(null);
                        return e.filter((function() {
                            var i, n = window.ae_jQuery(this).parent().get(0);
                            return 1 == t.get(n) ? t.get(n) : (i = 0 === window.ae_jQuery(this).parents().filter(e).length, n && t.set(n, i), i)
                        }))
                    },
                    handleMutations: function() {
                        return 0 !== E.mutatedElements.length && (v.debug("Mutation Cooldown End. Handling mutations"), window.clearTimeout(b), b = null, w.Z.isRunning() ? (v.debug("TaskScheduler is running. Registering another sequence when this one finishes."), void w.Z.onSequenceComplete((function() {
                            E._queueHandlers()
                        }))) : (v.debug("TaskScheduler is not running. Starting sequence."), void E._queueHandlers()))
                    },
                    _queueHandlers: function() {
                        var e = E.collectMutationHandlers(E.mutatedElements);
                        e = E._pauseObserverDuring(e), w.Z.add(e), w.Z.start(), E.mutatedElements = window.ae_jQuery()
                    },
                    _pauseObserverDuring: function(e) {
                        return e.map((function(e) {
                            var t = e.task;
                            return e.task = function() {
                                E.disconnectMutationObserver(), t(), E.observe()
                            }, e
                        }))
                    },
                    collectMutationHandlers: function(e) {
                        var i, n = [];
                        return i = t.Z.objAssign(window.ae_jQuery(), e), t.Z.isModuleAvailable("compliance") && (n.push({
                            task: function() {
                                t.Z.applyLayoutHelpers(i)
                            },
                            cost: 10
                        }), n = n.concat(AudioEye.compliance.planRemediations(i, !1, AudioEye.productConfig["site-menu"].selectors, AudioEye.productConfig.carousels))), n.push({
                            task: function() {
                                E._additionalMutationHandlers(i)
                            },
                            cost: 5
                        }), v.debug("applying " + n.length + " handlers to the latest mutation"), n
                    },
                    _additionalMutationHandlers: function(e) {
                        if (t.Z.isModuleActive("pdf-links") && AudioEye["pdf-links"].append(e), y.markAll(e), t.Z.isModuleActive("player") || t.Z.isModuleActive("reader")) {
                            var i = window.ae_jQuery(E.mutatedElements).filter((function() {
                                return 0 === window.ae_jQuery(this).closest(h.Z.selector("exclude")).length
                            }));
                            i.length && t.Z.dispatchEvent("PlayerReaderMutation", {
                                mutated_elements: i
                            })
                        }
                        AudioEye.modals.mutations(e)
                    },
                    _filterIgnored: function(e) {
                        var t = window.ae_jQuery();
                        return 0 === e.length || e.each((function() {
                            var e = this;
                            if (3 === this.nodeType && (e = this.parentElement), window.ae_jQuery(e).closest(E.ignorelist).length > 0) return !0;
                            t = t.addNoSort(this)
                        })), t
                    },
                    disconnectMutationObserver: function() {
                        void 0 !== this.observer && this.observer.disconnect()
                    }
                },
                A = E,
                I = new i.Z("client-element-apis"),
                x = {
                    _actions: [{
                        selector: '[data-ae-cta-optin-button="true"]',
                        action: "toggleCtaOptIn"
                    }, {
                        selector: '[data-ae-client-feedback-link="true"]',
                        action: "openHelpDesk"
                    }],
                    init: function() {
                        window.ae_jQuery.unregister("ae-client-button-actions"), this.bindActionsToElements(this._actions), this.initCtaOptIn()
                    },
                    initCtaOptIn: function() {
                        window.ae_jQuery("#ae_app").register("GroupOpt.ae-client-button-actions", (function(e) {
                            x._userDidChangeOptInState(e.detail)
                        })), this._userDidChangeOptInState({
                            group: "CTA",
                            direction: m.Z.state("CTA") ? "in" : "out"
                        })
                    },
                    bindActionsToElements: function(e) {
                        e.forEach((function(e) {
                            x[e.action] ? window.ae_jQuery(e.selector).length && window.ae_jQuery(e.selector).each((function() {
                                window.ae_jQuery(this).register("click.ae-client-button-actions", (function(t) {
                                    x[e.action](t)
                                }))
                            })) : I.error('No matching action function for name "' + e.action + '"')
                        }))
                    },
                    toggleCtaOptIn: function() {
                        m.Z.opt(m.Z.state("CTA") ? "out" : "in", "CTA")
                    },
                    openHelpDesk: function(e) {
                        e.preventDefault(), "2" !== AudioEye.toolbar_version ? t.Z.setModuleActive("helpdesk", !0, !0) : t.Z.isModuleActive("toolbar") ? window.dispatchEvent(new CustomEvent("aeToolbarV2Nav", {
                            detail: {
                                destination: "/helpdesk"
                            }
                        })) : (AudioEye.toolbar_initial = "HelpDesk", t.Z.setModuleActive("toolbar", !0))
                    },
                    _userDidChangeOptInState: function(e) {
                        if ("CTA" !== e.group) return !1;
                        "in" === e.direction ? this._userDidOptIn() : this._userDidOptOut(), this._updateA11yPageCopy(e.direction)
                    },
                    _userDidOptIn: function() {
                        t.Z.isModuleAvailable("launcher") && (t.Z.isModuleActive("toolbar") || t.Z.setModuleActive("launcher", !0))
                    },
                    _userDidOptOut: function() {
                        t.Z.setModuleActive("toolbar", !1), t.Z.setModuleActive("launcher", !1)
                    },
                    _updateA11yPageCopy: function(e) {
                        var t = "data-ae-cta-opted-" + e + "-copy";
                        window.ae_jQuery("[" + t + "]").each((function() {
                            window.ae_jQuery(this).text(window.ae_jQuery(this).attr(t))
                        }))
                    }
                },
                k = x,
                R = AudioEye.productConfig,
                C = {
                    _contentModVersion: parseInt(R["content-modifiers-version"]),
                    config: R.languages,
                    globalObject: window.AudioEye,
                    documentElement: document.documentElement,
                    start: function() {
                        this.globalObject && (this.globalObject.localization = this), this.setInitialLanguage(R.languages), this.observeLang(t.Z.bind(this, this.setLang))
                    },
                    getLang: function() {
                        return this._lang
                    },
                    observeLang: function(e) {
                        var t = this.documentElement;
                        return void 0 !== this.langObserver && "function" == typeof this.langObserver.disconnect && this.langObserver.disconnect(), this.langObserver = new MutationObserver((function(t) {
                            t.forEach((function() {
                                e(C.documentElement.lang)
                            }))
                        })), this.langObserver.observe(t, {
                            attributes: !0,
                            attributeFilter: ["lang"]
                        }), this.langObserver
                    },
                    getSupportedIsos: function() {
                        var e = Object.keys(this.config.supported);
                        return delete e.auto, e
                    },
                    setLang: function(e) {
                        var t = this.getSupportedIsos(),
                            i = this.matchToSupported(e, t);
                        return !!i && i !== this.getLang() && void this.updateGlobalState(i)
                    },
                    updateGlobalState: function(e) {
                        window.AudioEye && (window.AudioEye.lang = e), this._lang = e, this.updateBodyMarker(e), t.Z.dispatchEvent("LangChange", {
                            newLang: e
                        })
                    },
                    updateBodyMarker: function(e) {
                        1 === this._contentModVersion ? (window.ae_jQuery(document.body).classList().forEach((function(e) {
                            -1 !== e.indexOf("ae-lang") && document.body.classList.remove(e)
                        })), window.ae_jQuery(document.body).addClass("ae-lang-" + e)) : window.ae_jQuery(document.body).attr("data-audioeye-lang", e)
                    },
                    matchToSupported: function(e, t) {
                        if (!e) return !1;
                        if (e = e.toLowerCase(), -1 !== t.indexOf(e)) return e;
                        if (this.config.aliases)
                            for (var i in this.config.aliases) {
                                var n = this.config.aliases[i];
                                if (-1 !== n.indexOf(e)) return i;
                                if (-1 === e.indexOf("-") && 2 !== e.length) return "en";
                                var o = e.substr(0, 2);
                                if (-1 !== n.indexOf(o)) return i
                            }
                        return !1
                    },
                    setInitialLanguage: function() {
                        var e, t = this.config.primary;
                        e = "auto" === t ? this.config.detected && this.matchToSupported(this.config.detected, this.getSupportedIsos()) || "en" : t, this.setLang(e), R.startup_modules.forEach((function(t) {
                            R[t].languages = [], R[t].languages.push(e)
                        }))
                    }
                },
                O = C,
                S = o(54);
            let j = null;
            var F = new i.Z("audioeye"),
                T = function(e) {
                    j = AudioEye.CFD ? .featureObjects.smartRems.object, window.AudioEye ? (AudioEye.activate = function(e, i, n) {
                        var o, a = void 0 === i || !!i;
                        "object" == typeof e && (e = e.moduleString), a && (window.ae_jQuery("#ae_app").register("AfterModuleActivate.launcher", (function(e) {
                            "toolbar" === e.detail.module && (AudioEye.toolbar.focusFirstModule(), window.ae_jQuery("#ae_app").off("AfterModuleActivate.launcher"))
                        })), t.Z.setModuleActive("toolbar", !0), (o = t.Z.getPrevActiveModules()).splice(o.indexOf("toolbar"), 1), o.forEach((function(e) {
                            t.Z.setModuleActive(e, !0)
                        }))), "string" == typeof e && e.length && (t.Z.setModuleActive(e, !0), AudioEye[e] && AudioEye[e].active && "function" == typeof AudioEye[e].addInterface && n && AudioEye[e].addInterface())
                    }, AudioEye.setCookie = function(e, t, i) {
                        return s.Z.set(e, t, i)
                    }, AudioEye.getCookie = function(e) {
                        return s.Z.get(e)
                    }, AudioEye.generateID = function(e, i) {
                        return t.Z.generateID(e, i)
                    }, AudioEye.deactivate = function(e) {
                        if ("object" == typeof e && (e = e.moduleString), e) t.Z.setModuleActive(e, !1);
                        else {
                            if (!AudioEye.toolbar || !AudioEye.toolbar.active) return !1;
                            t.Z.setModuleActive("toolbar", !1)
                        }
                    }, AudioEye.focusElement = function(e, i) {
                        return 0 !== window.ae_jQuery(e).length && (F.info("AudioEye.focusElement() changing focus to element: ", e), !1 === (e = window.ae_jQuery(e).eq(0)).is(":focusable") && (e.attr("tabindex", 0), e.one("keydown blur", (function(t) {
                            9 != t.which && "blur" != t.type || e.removeAttr("tabindex")
                        }))), e.focus(), 0 === e.closest(".ae-carousel").length && (window.ae_jQuery(document.body).not("body.ae-reader").find("." + f.Z.classes.popup).remove(), window.ae_jQuery(document.body).not("body.ae-reader").find("#ae-modal-overlay").remove()), t.Z.isModuleActive("player") && AudioEye.player.user_engaged ? AudioEye.player.goToElement(e, i) : t.Z.scrollAnimate(e, (function() {
                            t.Z.isModuleActive("reader") && t.Z.applyHighlight(e)
                        })), e)
                    }, AudioEye.ping = function(e) {
                        return this.iframe_id = e.id, t.Z.dispatchEvent("IframeRegistered"), {
                            status: "true",
                            detail: {
                                id: this.iframe_id
                            }
                        }
                    }, AudioEye.skipRem = function(e) {
                        const t = sessionStorage.getItem("aeSkipRems"),
                            i = t ? t + "," + e : e;
                        sessionStorage.setItem("aeSkipRems", i)
                    }, AudioEye.removeSkipRem = function(e) {
                        var t = sessionStorage.getItem("aeSkipRems").split(",");
                        const i = t.indexOf(e); - 1 !== i && t.splice(i, 1);
                        const n = t.toString();
                        sessionStorage.setItem("aeSkipRems", n)
                    }, AudioEye.registerIframe = function(e) {
                        var i;
                        if (t.Z.safeFrames().each((function() {
                                if (window.ae_jQuery(this)[0].contentWindow === e.source) return i = window.ae_jQuery(this), !1
                            })), !i) return F.debug("registerIframe found no matching requester"), !1;
                        t.Z.registerIframe(i[0])
                    }, AudioEye.refresh = function() {
                        window.location.reload()
                    }, AudioEye.relayAppEvent = function(e) {
                        return t.Z.dispatchEvent(e.event, e.detail, e.useDocument), !0
                    }, AudioEye.carousels = f.Z, AudioEye.setBuild = function(e) {
                        AudioEye.build = e, "dev" === e || "debug" === e ? s.Z.set("aebuild", e, 9125) : s.Z.set("aebuild", "prod", 0), document.location.reload(!0)
                    }, AudioEye.setLogging = function(e) {
                        t.Z.dispatchEvent("audioeyeLogLevelChange", {
                            level: e || "error"
                        }, !0)
                    }, AudioEye.addHook = function(e, t, i) {
                        AudioEye._hooks || (AudioEye._hooks = {}), AudioEye._hooks[e] || (AudioEye._hooks[e] = {}), AudioEye._hooks[e][t] = i
                    }, AudioEye.getHook = function(e, i) {
                        return t.Z.getHook(e, i)
                    }, AudioEye.disableCommand = function(e) {
                        l.Z.disabledCommands.add(e)
                    }, AudioEye.enableCommand = function(e) {
                        l.Z.disabledCommands.remove(e)
                    }, AudioEye.runRemediations = function(e, t) {
                        if (!Array.isArray(t)) throw new Error("rems must be an array");
                        t.forEach((function(t) {
                            j.runOne(e, t, "")
                        }))
                    }, AudioEye._getRemediation = function(e) {
                        return String(j[e])
                    }, AudioEye.modals = S.Z, AudioEye.site_hash = e || "", AudioEye._cookies = s.Z, AudioEye._builderExtensionAvailable = "true" === AudioEye.getCookie("ae_authoring_tool_extension"), AudioEye._builderExtensionVersion = AudioEye.getCookie("ae_authoring_tool_extension_version"), AudioEye.arrowKeyLoop = function(e, t, i) {
                        j.arrowKeyLoop(e, {
                            selector: t,
                            wrapper: i
                        })
                    }, AudioEye.ClientElementApi = {
                        init: function() {
                            k.init()
                        },
                        openHelpDesk: function(e) {
                            k.openHelpDesk(e)
                        }
                    }, AudioEye.MutationsApi = {
                        setCooldownTime: function(e) {
                            if (!t.Z.isInteger(e)) throw new Error("setCooldownTime failed: milliseconds is not an integer.");
                            if (e < 25) throw new Error("setCooldownTime failed: milliseconds less than 25 are likely to hurt performance.");
                            A.cooldownTime = e
                        },
                        disconnect: function() {
                            A.disconnectMutationObserver()
                        }
                    }) : F.error("AudioEye not defined. Cannot define api methods")
                },
                L = new i.Z("page-off-limits"),
                Q = {
                    logic: ["AND", "OR"],
                    ruleTypes: ["REGEX", "EQUALS", "STARTS_WITH", "CONTAINS", "KEYS"],
                    ruleInputTypes: ["HREF", "HOSTNAME", "PATH", "COOKIE", "SEARCH"],
                    inputTypeReqsModifier: ["COOKIE", "SEARCH"],
                    inputTypeCanCheckKeys: ["COOKIE"]
                };

            function P(e, t) {
                if (!e) return L.debug("No off-limits config defined. allowing page to load."), !1;
                var i;
                try {
                    i = "string" == typeof e ? JSON.parse(e) : e
                } catch (e) {
                    return L.error("Could not parse off-limits configuration.", e), !1
                }
                if (!i) return !1;
                if (Array.isArray(e)) return e.some((e => P(e, t)));
                var n = P._getEnv(t),
                    o = "AND" === e.logic ? "every" : "some";
                return i.rules[o]((function(e) {
                    return P._testRule(e, n) ? (L.debug("Positive match for rule: ", e), !0) : (L.debug("Rule did not match: ", e), !1)
                }))
            }
            P._getEnv = function(e) {
                return {
                    HREF: e.location.href,
                    HOSTNAME: e.location.hostname,
                    PATH: e.location.pathname,
                    COOKIE: s.Z.all(),
                    SEARCH: t.Z.urlParamsToObj(e.location.search)
                }
            }, P._testRule = function(e, t) {
                var i = "KEYS" != e.type && P._resolveInput(e.input, t);
                switch (e.type) {
                    case "KEYS":
                        return this._resolveKeys(e, t);
                    case "EQUALS":
                        return i === e.match;
                    case "STARTS_WITH":
                        return i && 0 === i.indexOf(e.match);
                    case "CONTAINS":
                        return i && -1 !== i.indexOf(e.match);
                    case "REGEX":
                        return !(!i || !i.length) && null !== i.match(new RegExp(e.match))
                }
                return L.error("Invalid rule.type: " + e.type), !1
            }, P._testKeyRule = function(e, t) {
                return "KEY_STARTS_WITH" === t.input.modifier && e && 0 === e.indexOf(t.match)
            }, P._resolveKeys = function(e, t) {
                if (-1 === Q.inputTypeCanCheckKeys.indexOf(e.input.type)) return L.error('Cannot check rule.input.type "' + e.input.type + '" against rule.type "KEYS"'), !1;
                for (var i = Object.keys(t[e.input.type]), n = 0; n < i.length; n++)
                    if (this._testKeyRule(i[n], e)) return !0;
                return !1
            }, P._resolveInput = function(e, t) {
                return -1 === Q.inputTypeReqsModifier.indexOf(e.type) ? t[e.type] : t[e.type][e.modifier]
            }, P._logit = L;
            var D = P,
                Z = new i.Z("RuntimeErrorTracker"),
                N = {
                    win: window,
                    capturePeriod: 2e3,
                    sameErrMax: 5,
                    intervalId: null,
                    allTimeDuplicates: {},
                    endpoint: "",
                    addEventListener: t.Z.bind(window, window.addEventListener),
                    removeEventListener: t.Z.bind(window, window.removeEventListener),
                    setInterval: t.Z.bind(window, window.setInterval),
                    clearInterval: t.Z.bind(window, window.clearInterval),
                    monitor: function(e) {
                        if (N.stop(), !e) return Z.info("monitoring is disabled"), !1;
                        Z.info("monitoring is enabled"), N.endpoint = e, N.addEventListener("error", N.capture, !0), window.ae_jQuery(document).on("audioeyeErrLogged.rt-tracker", (function(e) {
                            N.capture(e.detail)
                        })), N.intervalId = N.setInterval(N.sendErrors, N.capturePeriod)
                    },
                    stop: function() {
                        window.ae_jQuery(document).off("audioeyeErrLogged.rt-tracker"), N.removeEventListener("error", N.capture, !0), N.interval && N.clearInterval(N.interval)
                    },
                    capture: function(e) {
                        N.errList || (N.errList = []), N.errList.push(e)
                    },
                    sendErrors: function() {
                        var e, i, n, o = N.errList;
                        if (o && o.length && (N.errList = [], e = N.minifyAndFilter(o), (n = t.Z.values(e)).length)) {
                            Z.debug("Attempting Stringify(). If IE crashes here, a circular reference was likely passed");
                            try {
                                i = JSON.stringify({
                                    pg: N.getPage(),
                                    u: N.getUserAgent(),
                                    t: N.getTimestamp(),
                                    li: n,
                                    h: window.__AudioEyeSiteHash
                                })
                            } catch (e) {
                                return void Z.debug("Cannot send error event. Failed to stringify:", e)
                            }
                            t.Z.sendBeacon(N.endpoint, i)
                        }
                    },
                    getPage: function() {
                        return N.win.top.location.href
                    },
                    getUserAgent: function() {
                        return navigator.userAgent
                    },
                    getTimestamp: function() {
                        return Date.now()
                    },
                    minifyAndFilter: function(e) {
                        var t = this;
                        return e.ae_reduce((function(e, i) {
                            var n = t.makeMinErr(i);
                            if (!n) return Z.debug("Could not send error message. Message mal-formed: ", i), e;
                            if (!t.isAeErr(n)) return e;
                            var o = t.allTimeDuplicates[n.s] || 0;
                            return t.allTimeDuplicates[n.s] = o + 1, t.allTimeDuplicates[n.s] > t.sameErrMax || (e[n.s] ? e[n.s].co = e[n.s].co + 1 : (n.co = 1, e[n.s] = n)), e
                        }), {})
                    },
                    isAeErr: function(e) {
                        return !!e.f && e.f.indexOf("audioeye.com") > -1
                    },
                    makeMinErr: function(e) {
                        var t = e.stack || (e.error ? e.error.stack : null);
                        return !!t && (Array.isArray(t) || (t = t.split("\n")), t = t.map((function(e) {
                            return e.trim()
                        })).join(","), {
                            m: e.message || (e.error ? e.error.message : ""),
                            f: e.filename || "",
                            l: e.lineno || "",
                            c: e.colno || "",
                            s: t,
                            co: 1
                        })
                    },
                    throwErr: function(e) {
                        throw new Error(e)
                    }
                },
                H = N,
                M = o(3739),
                q = o(3204),
                W = o(277),
                Y = o(5940),
                K = o(3580),
                G = o(6904),
                B = o(4888),
                V = o(2195),
                z = new i.Z("Live-A11y-Monitor"),
                U = AudioEye.productConfig;
            const $ = {
                _perfThresholds: {
                    singleTest: 100
                },
                _scannerCore: null,
                _elapsedStart: -1,
                planTasks: function(e, t) {
                    z.debug("Starting");
                    var i = [];
                    try {
                        if (!e) return z.info("scan aborted. Misconfiguration (001)"), [];
                        $._scannerCore || ($._scannerCore = $._createScannerCore()), (i = $._compileTests($._scannerCore).map((function(e) {
                            return $._testToTask($._instrumentScanTest(e, $._scannerCore, t))
                        }))).length > 1 && (i[0] = $._instrumentElapsedTimer(i[0])), i.push(new w.i($._post.bind($, e, t), 13))
                    } catch (e) {
                        $._proxyCaughtError(e)
                    }
                    return z.debug("Task planning complete"), i
                },
                _compileTests: function(e) {
                    for (var t = ["htmlContentZoom", "cssContrast"], i = Object.keys(e.tests).map((function(t) {
                            return {
                                name: t,
                                fn: e.tests[t].bind(null, e)
                            }
                        })), n = [].concat(Y.Z, B.Z, G.Z, K.Z).map((function(t) {
                            return {
                                name: t.testName,
                                fn: t.test.bind(null, e)
                            }
                        })), o = i.concat(n), a = 0; a < o.length; a++) t.indexOf(o[a].name) > -1 && (o.splice(a, 1), a--);
                    return o
                },
                _aggregate: function(e) {
                    var t = U && U.launcher && U.toolbar,
                        i = $._getRemStartAndEndTimes(V.Z._effectedElementsByRemID);
                    return {
                        url: window.location.href,
                        userAgent: !!navigator && navigator.userAgent,
                        hash: window.__AudioEyeSiteHash,
                        installSource: window.__AudioEyeInstallSource,
                        data: {
                            tests: $._aggregateTestResults(e),
                            testStartTime: $._elapsedStart,
                            testEndTime: performance.now(),
                            remediationStartTime: i.start,
                            remediationEndTime: i.end,
                            remediationsEnabled: $._remediationsEnabled(U),
                            remediations: $._getFormatForRemediations(V.Z._effectedElementsByRemID),
                            hasToolbar: t && U.launcher.service && U.toolbar.service,
                            beforeRemediations: AudioEye._scanBeforeRemediations
                        }
                    }
                },
                _getFormatForRemediations: function(e) {
                    var t, i, n = {};
                    return Object.keys(e).forEach((function(o) {
                        t = e[o], i = t.remType + "|" + o, n[i] = {
                            effectCount: t.effectCount,
                            timing: t.timing
                        }
                    })), n
                },
                _getRemStartAndEndTimes: function(e) {
                    var i, n, o = null,
                        a = null;
                    return Object.keys(e).forEach((function(r) {
                        i = e[r].startTimeEpoch, n = t.Z.addMillisecondsToDate(i, e[r].timing), (null === o || o > i) && (o = i), (null === a || a < n) && (a = n)
                    })), {
                        start: o,
                        end: a
                    }
                },
                _aggregateTestResults: function(e) {
                    return Object.keys(e).ae_reduce((function(t, i) {
                        var n = {};
                        e[i].result.forEach((function(e) {
                            if (!$._isWithinToolsUI(e.element)) {
                                var t = e.result_code;
                                void 0 === n[t] && (n[t] = 0), n[t]++
                            }
                        }));
                        var o = Object.keys(n).map((function(e) {
                            return {
                                name: e,
                                total: n[e]
                            }
                        }));
                        return t.push({
                            name: i,
                            results: o,
                            testTime: e[i].execTime
                        }), t
                    }), [])
                },
                _aggregateTestTiming: function(e, t, i, n) {
                    const o = {
                        totalExecution: 0,
                        totalElapsed: 0,
                        slowestTestName: "",
                        slowestTestTime: 0
                    };
                    t && i && (o.totalElapsed = $._computeTimeInterval(t, i));
                    const a = Object.keys(e).ae_reduce((function(t, i) {
                        const n = e[i].execTime;
                        return t.totalExecution += n, t.slowestTestTime < n && (t.slowestTestTime = n, t.slowestTestName = i), t
                    }), o);
                    return {
                        x: $._round(a.totalExecution, 2),
                        l: a.totalElapsed,
                        sid: AudioEye.site_id,
                        stn: a.slowestTestName,
                        stt: $._round(a.slowestTestTime, 2),
                        to: n || !1,
                        ua: navigator.userAgent,
                        pg: location.href,
                        h: window.__AudioEyeSiteHash
                    }
                },
                _isWithinToolsUI: function(e) {
                    if (!e) return !1;
                    if (e === document.getElementById("ae-userStateStore")) return !0;
                    var t = document.getElementById("ae_app");
                    return !!t && (e === t || t.contains(e))
                },
                _post: function(e, i) {
                    z.debug("Monitor complete");
                    var n = $._scannerCore;
                    if (!n.scan_results || Object.keys(n.scan_results).length < 1) throw new Error("No scan_results available. Nothing to aggregate.");
                    var o, a = $._aggregate(n.scan_results);
                    try {
                        a.userAgent = !!navigator && navigator.userAgent, o = JSON.stringify(a)
                    } catch (e) {
                        throw new Error("Failed to stringify payload")
                    }
                    t.Z.sendBeacon(e, o)
                },
                _proxyCaughtError: function(e) {
                    const t = new Error("LM-Scan Failed: " + e.message);
                    throw e.stack && (t.stack = e.stack), t
                },
                _createScannerCore: function() {
                    var e = (0, W.Z)(window.ae_jQuery, {});
                    return e.html = window.ae_jQuery(document.documentElement), e.scan_results = {}, e
                },
                _instrumentScanTest: function(e, t, i) {
                    return function(i) {
                        t.test_result = [];
                        const n = $._captureExecTime(e, "fn");
                        t.scan_results[e.name] = {
                            result: t.test_result,
                            execTime: n
                        };
                        let o = $._perfThresholds.singleTest;
                        const a = new window.URLSearchParams(window.location.search).get("ae_airbrake_override");
                        "-1" === a ? o = n + 100 : null == a || isNaN(a) || (o = parseInt(a)), n > o && "function" == typeof i && i()
                    }
                },
                _captureExecTime: function(e, t) {
                    const i = performance.now();
                    return e[t](), $._computeTimeInterval(i, performance.now())
                },
                _computeTimeInterval: function(e, t) {
                    return $._round(t - e, 2)
                },
                _round: function(e, t) {
                    var i = Math.pow(10, t),
                        n = e * i * (1 + Number.EPSILON);
                    return Math.round(n) / i
                },
                _testToTask: function(e) {
                    return new w.i(e, 13)
                },
                _instrumentElapsedTimer: function(e) {
                    const t = e.task;
                    return e.task = function() {
                        $._elapsedStart = performance.now(), t()
                    }, e
                },
                _stringify: function(e, t) {
                    let i;
                    try {
                        i = JSON.stringify(e)
                    } catch (e) {
                        throw new Error("Failed to stringify " + t + " payload")
                    }
                    return i
                },
                _remediationsEnabled: function(e) {
                    return e && e.compliance && e.compliance.service && (e.compliance["manual-remediations"] || e.compliance["smart-remediations"] || e.compliance["auto-remediations"])
                }
            };
            var J = $,
                X = {
                    shouldSkip: function(e) {
                        return !!t.Z.inIframe() || (!!(isNaN(e) || e > 1 || e < 0) || !!(Math.random() > e))
                    },
                    planAllTasks: function(e, t, i, n) {
                        return this.shouldSkip(n) ? [i] : (AudioEye._scanBeforeRemediations = !0, [J.planTasks(e, t), i, [new w.i((function() {
                            AudioEye._scanBeforeRemediations = !1
                        }), 1)], J.planTasks(e, t)])
                    }
                };
            var ee = o(1004),
                te = o(8916);
            if (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), -1 !== document.location.hash.substr(1).split("&").indexOf("loader=oss") || "oss" === window._audioeye_loader) {
                setTimeout((() => {
                    const e = document.getElementById("_audioeye-loader");
                    e && e.remove()
                }), 2e4);
                const e = document.createElement("img");
                e.setAttribute("id", "_audioeye-loader"), e.setAttribute("src", 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="44" height="44" viewBox="0 0 30 30" fill="none"><g clip-path="url(%23audioeye-loader-clip0)" id="audioeye-loader-logo"><title>AudioEye Loader</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.4895 3.38158C21.902 5.50324 18.5922 6.77656 14.985 6.77656C11.3847 6.77656 8.08076 5.50819 5.49551 3.39394C8.08301 1.27227 11.3928 -0.0010376 15.0001 -0.0010376C18.6003 -0.0010376 21.9043 1.26732 24.4895 3.38158Z" fill="%237119E1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M24.6205 26.509C22.0163 28.6881 18.6614 29.9999 15.0001 29.9999C11.291 29.9999 7.89637 28.6536 5.27812 26.4232C7.8823 24.244 11.2372 22.9323 14.8985 22.9323C18.6076 22.9323 22.0023 24.2785 24.6205 26.509Z" fill="%237119E1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.5234 5.39709C28.694 7.99885 29.9999 11.347 29.9999 15.0002C29.9999 18.6971 28.6626 22.0817 26.4452 24.6964C24.2746 22.0946 22.9687 18.7464 22.9687 15.0932C22.9687 11.3963 24.3061 8.01184 26.5234 5.39709Z" fill="%237119E1"/><path fill-rule="evenodd" clip-rule="evenodd" d="M3.42783 5.45428C5.5059 8.02843 6.75018 11.3037 6.75018 14.8696C6.75018 18.4954 5.46372 21.8208 3.32235 24.4141C1.24428 21.8399 0 18.5647 0 14.9988C0 11.373 1.28646 8.04763 3.42783 5.45428Z" fill="%237119E1"/></g><defs><clipPath id="audioeye-loader-clip0"><rect width="30" height="30" fill="white"/></clipPath></defs><animate href="%23audioeye-loader-logo" attributeName="opacity" from="0" to="1" dur="1s" begin="0s;phaseout.end" id="phasein" fill="freeze" /><animate href="%23audioeye-loader-logo" attributeName="opacity" from="1" to="0" dur="1s" begin="phasein.end" id="phaseout" fill="freeze" /></svg>'), e.setAttribute("style", "position:fixed;bottom:79px;right:65px"), document.body.append(e)
            }
            const ie = AudioEye.productConfig,
                ne = new i.Z("startupRoutine");
            const oe = {
                standard(e) {
                    new Promise(((n, a) => {
                        (function(e, n) {
                            i.Z.init(), s.Z.crossWindowSyncInit(e), H.monitor(AudioEye.err_endpoint), t.Z.removeLoaderjsTag();
                            const o = t.Z.getParamByName("ae_system");
                            o && s.Z.set("ae_system", o), T(n), q.Z.init(), window.__AudioEyeInitialLoadTime && q.Z.sendLifecycleEvent({
                                    message: "ae.js started",
                                    eventTime: window.__AudioEyeInitialLoadTime
                                }), window.__AudioEyeLoaderAppendedTime && q.Z.sendLifecycleEvent({
                                    message: "loader.js script tag added",
                                    eventTime: window.__AudioEyeLoaderAppendedTime
                                }), window.__AudioEyeLoaderStartTime && q.Z.sendLifecycleEvent({
                                    message: "loader.js started",
                                    eventTime: window.__AudioEyeLoaderStartTime
                                }), t.Z.startMessageListener(), AudioEye.productConfig.languages && O.start(), t.Z.inIframe() || t.Z.logStat("User", "Page View", "none"), AudioEye.define && (AudioEye.define("utilities", t.Z), AudioEye.define("lib/mutations", A)),
                                function() {
                                    const e = "Duplicate AudioEye installation script detected. Mulitple installations will cause unsupported behavior.";
                                    window.__AudioEyeDuplicateScript ? ne.error(e) : window.addEventListener("AudioEyeDuplicateScript", (() => {
                                        ne.error(e)
                                    }))
                                }()
                        })(n, e.site_hash), D(ie["off-limits"], window) ? a(new Error("Page is off-limits. See debug log for more infomation.")) : (function(e, t) {
                            const i = e || s.Z.get("ae_version");
                            i && o.e(750).then(o.bind(o, 5472)).then((e => {
                                e.default.init(i, t)
                            })), AudioEye.versioning = {}, AudioEye.versioning.launchVCP = () => {
                                s.Z.set("ae_version", "-1"), window.location.reload()
                            }
                        }(e.version_id, e.is_working_version_request), t.Z.iframes.domInit(t.Z.inIframe()), h.Z.init(e.product_config["content-modifiers-version"]), function() {
                            const e = document.createElement("link");
                            e.rel = "stylesheet", e.href = `${AudioEye.client_url}/build/visual-toolkit-min.css?cb=${AudioEye.cb}`, (document.head || document.body).appendChild(e)
                        }(), !1 !== function(e, t) {
                            AudioEye.configHelpers = [], AudioEye.layoutHelpers = [], AudioEye.manualRemediations = [];
                            try {
                                window.ae_jQuery(document.body).append(e)
                            } catch (e) {
                                return ne.error("Failure appending ae_app html script. Check syntax.", e), !1
                            }
                            return t ? h.Z.set(window.ae_jQuery(document.body), `device-${t}`) : ne.error("No device detected. Many ALLY features will not function properly."), AudioEye.configHelpers.forEach((e => {
                                e.call(void 0, AudioEye.productConfig)
                            })), !0
                        }(e.interface, e.device) ? M.Z.isPreviewMode() && n() : a(new Error("Failed to append ae_app html. See debug log for more infomation.")))
                    })).then((() => {
                        t.Z.inIframe() || d.init(), m.Z.init(), AudioEye.optIn = m.Z;
                        const e = t.Z.getStartupModules(),
                            i = Object.keys(e).map((i => new Promise((n => {
                                t.Z.loadModule(i, ((t, i) => {
                                    i || delete e[t], n()
                                }), !0)
                            }))));
                        return Promise.all(i).then((() => e))
                    })).then((i => {
                        t.Z.applyLayoutHelpers();
                        let n = [];
                        if (AudioEye.compliance && ("function" == typeof window.AudioEyePluginBeforeRems && window.AudioEyePluginBeforeRems(), n = AudioEye.compliance.planAllTasks(AudioEye.productConfig["site-menu"].selectors, AudioEye.productConfig.carousels)), null !== X) {
                            const t = ie["live-monitoring"] && ie["live-monitoring"].limit || 0;
                            n = X.planAllTasks(e.live_monitor_endpoint_url, e.perf_endpoint_url, n, parseFloat(t))
                        }
                        void 0 !== n && n.length > 0 && w.Z.addSequences(n), w.Z._q.length > 0 && (AudioEye.compliance && q.Z.remsFirstTimeStart(), w.Z.start()), t.Z.inComplianceOnly() || (y.markAll(), t.Z.inIframe() && t.Z.sendFrameAPIRequest(window.parent, "registerIframe")), window.addEventListener("ae_extension_open_admin", (() => {
                            t.Z.setModuleActive("toolbar", !0), t.Z.setModuleActive("admin", !0)
                        })), (new r).sync();
                        let o = Object.keys(i).filter((e => i[e]));
                        window.AudioEye.rotor = new te.default;
                        const a = o.indexOf("toolbar");
                        a > -1 && (o.splice(a, 1), o = ["toolbar"].concat(o)), ee.Z.init(), o.forEach((e => {
                                t.Z.setModuleActive(e, !0)
                            })), A.observe(), k.init(),
                            function() {
                                const e = ["site-menu"],
                                    i = [];
                                return new Promise((n => {
                                    e.forEach((e => {
                                        if (ie[e] && !0 === ie[e].service) {
                                            const n = new Promise(((i, n) => {
                                                t.Z.loadModule(e, ((e, t) => {
                                                    t ? i() : n()
                                                }))
                                            }));
                                            i.push(n)
                                        }
                                    })), Promise.allSettled(i).then((() => {
                                        AudioEye.productConfig && AudioEye.productConfig["site-menu"] && (AudioEye.productConfig["site-menu"].languages = ["en"]), n()
                                    }))
                                }))
                            }().then((() => {
                                var e, i;
                                t.Z.dispatchEvent("AudioEyeReady", {}), "function" == typeof window.AudioEyePluginReadyHook && window.AudioEyePluginReadyHook(), window.AudioEye.platformready = !0, ((i = function() {
                                    var e = {};
                                    return ["hash", "search"].forEach((function(t) {
                                        e[t] = window.location[t].substr(1).split("&").reduce((function(e, t) {
                                            var i = t.split("=");
                                            return e[i[0]] = i[1], e
                                        }), {})
                                    })), e.window = window.__AudioEyeOSS, e
                                }()).hash.oss || i.hash.issueType || i.window) && ((e = document.createElement("script")).setAttribute("src", "".concat(AudioEye.client_url, "/build/onSiteScanner.bundle.js?cb=").concat(AudioEye.cb)), e.setAttribute("defer", !0), e.setAttribute("async", !0), e.setAttribute("type", "text/javascript"), document.body.append(e))
                            }))
                    })).catch((e => {
                        ne.error(e)
                    }))
                }
            };
            AudioEye.runStartup = function(e, t) {
                return oe[e] ? (AudioEye.mode = e, oe[e](t), !0) : (ne.debug(`startup routine: ${e} does not exist`), !1)
            }
        }()
}();