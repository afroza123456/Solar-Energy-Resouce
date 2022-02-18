(self.AudioEyeWebpackJsonp = self.AudioEyeWebpackJsonp || []).push([
    [178], {
        6178: function(e, t, n) {
            var r, i;
            "object" == typeof window ? (i = window.ae_jQuery, r = n(4918).Z) : (r = function() {}, i = function() {}, AudioEye = {});
            var a = n(6334),
                o = AudioEye.productConfig,
                l = new r("smart-remediations");

            function d(e) {
                return e.replace(/([!"#\$%&'\(\)\*\+,\.\/:;<=>\?@\[\\\]\^`\{\|\}~])/g, "\\$1")
            }

            function u(e) {
                var t = {
                    doubleclick: "Doubleclick Tracking Pixel",
                    windowsphone: "Microsoft Store",
                    itunes: "iTunes Store",
                    googleplay: "Google Play Store",
                    "play.google": "Google Play Store",
                    "google-play": "Google Play Store",
                    "maps.google": "Google Maps Frame",
                    youtube: "YouTube Video",
                    "youtu.be": "YouTube Video",
                    "youtube-nocookie.com": "YouTube Video",
                    vimeo: "Vimeo Video",
                    twitter: "Twitter Social Network",
                    googleplus: "Google Plus Social Network",
                    facebook: "Facebook Social Network",
                    linkedin: "Linked In Social Network",
                    instagram: "Instagram Social Network",
                    twttrhubframe: "Twitter Widgets Event Hub",
                    flickr: "Flickr Social Network"
                };
                e = e.toLowerCase();
                var n = null;
                return Object.keys(t).some((function(r) {
                    if (-1 !== e.indexOf(r)) return n = t[r], !0
                })), n
            }

            function s(e, t) {
                var n = new WeakMap;
                return void 0 !== e && e.length > 0 && e.split(",").forEach((function(e) {
                    i(e).outerFind(t).each((function() {
                        n.set(this, void 0)
                    }))
                })), n
            }
            var c = {
                appendClosest: function(e, t) {
                    e.outerFind(t.selector).filter(t.filter).append((function() {
                        var e = i('<span style="display: none;" class="ae-compliance-indent"></span>');
                        return e.text(" " + i(this).closest(t.closest).find(t.find).text().trim() + " "), e
                    }))
                },
                appendCompliance: function(e, t) {
                    var n = t.filter || t.selector,
                        r = t.closest || t.selector,
                        a = t.find || r,
                        o = -1 == ["before", "after", "append", "prepend"].indexOf(t.position) ? "append" : t.position;
                    e.outerFind(t.selector).filter(n).each((function() {
                        var e = t.compliance ? t.compliance : "";
                        !1 === t.customText && (e = i(this).closest(r).find(a).text().trim());
                        var n = i('<span style="display: none;" class="ae-compliance-indent"></span>');
                        n.text(" " + e + " "), i(this)[o](n)
                    }))
                },
                appendComplianceFilter: function(e, t) {
                    var n = i('<span style="display: none;" class="ae-compliance-indent"></span>');
                    n.text(" " + t.append + " "), e.outerFind(t.selector).filter(t.filter).append(n)
                },
                ariaRequired: function(e, t) {
                    e.outerFind(t.selector).attr("aria-required", t.required)
                },
                ariaRole: function(e, t) {
                    -1 == ["main", "contentinfo", "banner"].indexOf(t.role) ? e.outerFind(t.selector).attr("role", t.role) : e.outerFind(t.selector).first().attr("role", t.role)
                },
                clickEvent: function(e) {
                    e.outerFind("a[onclick]").attr({
                        role: "button",
                        tabindex: "0"
                    })
                },
                headingLevel: function(e, t) {
                    e.outerFind(t.selector).not("html").attr({
                        role: "heading",
                        "aria-level": t.level
                    })
                },
                hideElement: function(e, t) {
                    e.outerFind(t.selector).not("html").attr({
                        role: "presentation",
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }).filter("img").attr("alt", "")
                },
                hideEmpty: function(e, t) {
                    e.outerFind(t.selector).filter((function() {
                        return 0 === this.innerHTML.trim().length
                    })).attr({
                        role: "presentation",
                        "aria-hidden": "true",
                        tabindex: "-1"
                    })
                },
                iframeTitle: function(e, t) {
                    e.outerFind(t.selector).attr("title", t.title)
                },
                imgAlt: function(e, t) {
                    var n = t.decorative ? "" : t.alt;
                    e.outerFind(t.selector).attr("alt", n)
                },
                labels: function(e, t) {
                    e.outerFind(t.selector).attr("aria-label", t.label)
                },
                removeAttribute: function(e, t) {
                    e.outerFind(t.selector).removeAttr(t.attrName)
                },
                hideEmptyHeaders: function(e, t) {
                    var n = "h1, h2, h3, h4, h5, h6",
                        r = s(t.excludes, n),
                        a = e.outerFind(n).filter((function() {
                            return !r.has(this) && "" === (i(this).attr("aria-label") || i(this).text().trim()) && 0 === i(this).children().length
                        }));
                    a.length && c.hideElement(e, {
                        selector: a
                    })
                },
                interactiveElementKeyboardActivation: function() {},
                accessKeyOptIn: a.accessKeyOptIn,
                addDownloadableDocumentWarnings: a.addDownloadableDocumentWarnings,
                addFormLabels: a.formFieldLabelOptIn,
                addSmartAltText: function() {},
                altDuplicateOptIn: a.altDuplicateOptIn,
                altLong: a.altLong,
                altRedundant: a.altRedundant,
                anchorShouldBeButtonOptIn: a.anchorShouldBeButtonOptIn,
                ariaChildlessMenu: a.ariaChildlessMenu,
                ariaDescribedBy: a.ariaDescribedBy,
                automaticSingleListItem: function() {},
                blinkOptIn: a.blinkOptIn,
                buttonTextContentNotFoundOptIn: a.buttonTextContentNotFoundOptIn,
                deviceIndependentEvent: a.deviceIndependentEvent,
                fieldsetLegendEmpty: a.fieldsetLegendEmpty,
                firstHeaderLevelNot1or2: a.firstHeaderLevelNot1or2,
                formFieldGroupCheckboxGroupNotFoundOptIn: a.formFieldGroupCheckboxGroupNotFoundOptIn,
                formFieldGroupRadioGroupNotFoundAlpaca: a.formFieldGroupRadioGroupNotFoundAlpaca,
                formFieldGroupRadioGroupNotFoundOptIn: a.formFieldGroupRadioGroupNotFoundOptIn,
                formFieldLabelNotFoundOptIn: a.formFieldLabelOptIn,
                formFieldLabelOnlyPlaceholderAttribute: a.formFieldLabelOptIn,
                formFieldLabelOptIn: a.formFieldLabelOptIn,
                formFieldLabelOrphan: function() {},
                formFieldMetadataBadAnchor: a.formFieldMetadataBadAnchor,
                formFieldMetadataNotFoundOptIn: a.formFieldMetadataNotFoundOptIn,
                formFieldRequiredOptIn: a.formFieldRequiredOptIn,
                frameTitleDuplicate: a.frameTitleDuplicate,
                headingEmpty: a.headingEmpty,
                headingLevelOneCountMultiple: a.headingLevelOneCountMultiple,
                headingLevelOneCountZero: function() {},
                headingSequenceOutOfOrder: a.headingSequenceOutOfOrder,
                htmlAccessibleNameMismatchOptIn: a.htmlAccessibleNameMismatchOptIn,
                htmlAriaRolesAttributeNotAppropriate: a.htmlAriaRolesAttributeNotAppropriate,
                htmlAriaRolesInvalidRole: a.htmlAriaRolesInvalidRole,
                htmlAriaRolesRoleMissingAttribute: a.htmlAriaRolesRoleMissingAttribute,
                htmlAriaRolesRoleMissingParent: a.htmlAriaRolesRoleMissingParent,
                htmlFocusSequenceAriaHiddenTabbableOptIn: a.htmlFocusSequenceAriaHiddenTabbableOptIn,
                htmlLandmarksMultipleBanners: a.htmlLandmarksMultipleBanners,
                htmlLandmarksMultipleComplementary: a.htmlLandmarksMultipleComplementary,
                htmlLandmarksMultipleContentInfo: a.htmlLandmarksMultipleContentInfo,
                htmlLandmarksMultipleMains: a.htmlLandmarksMultipleMains,
                htmlLandmarksMultipleNavsOptIn: a.htmlLandmarksMultipleNavsOptIn,
                htmlSemanticsUseHeader: a.htmlSemanticsUseHeader,
                htmlSkipToMainOptIn: a.htmlSkipToMainOptIn,
                imgTextAltRedundant: a.imgTextAltRedundant,
                inputImageTextAltNotFoundOptIn: a.inputImageTextAltNotFoundOptIn,
                labelEmpty: a.formFieldLabelOptIn,
                labelFromSibling: a.formFieldLabelOptIn,
                labelMultiple: a.labelMultiple,
                labelTitle: a.formFieldLabelOptIn,
                linkAdjacentSameHREFOptIn: function() {},
                linkEmptyOptIn: a.linkEmptyOptIn,
                linkHrefNoneOptIn: a.linkHrefNoneOptIn,
                linkImgTextAltBlankOptIn: a.linkImgTextAltBlankOptIn,
                linkImgTextAltNotFoundOptIn: a.linkImgTextAltNotFoundOptIn,
                linkImgTextAltPlaceholder: a.linkImgTextAltPlaceholder,
                linkSamePageAddButtonRoleAndKeydown: a.linkSamePageAddButtonRoleAndKeydown,
                linkSamePageAnchorInvalidOptIn: function() {},
                linkTextContentNotDescriptiveOptIn: function() {},
                linkTextContentNotFoundOptIn: a.linkTextContentNotFoundOptIn,
                linkTextContentRedundantOptIn: a.linkTextContentRedundantOptIn,
                marqueeOptIn: a.marqueeOptIn,
                oneItemList: a.oneItemList,
                removeInvalidLabelReferences: a.removeInvalidLabelReferences,
                spacerAlt: a.spacerAlt,
                tabindexGreater: a.tabindexGreater,
                tableLayout: a.tableLayout,
                tableSemanticsCaptionEqualsSummaryOptIn: a.tableSemanticsCaptionEqualsSummaryOptIn,
                textJustifiedOptIn: a.textJustifiedOptIn,
                thEmpty: a.thEmpty,
                titleRedundantOptIn: a.titleRedundantOptIn,
                underlineRemoveOptIn: a.replaceUnderlineWith("none"),
                underlineReplaceOptIn: a.replaceUnderlineWith("underline dotted"),
                addFormRequiredAriaLabel: function(e) {
                    e.outerFind("input, select, textarea").not("[type=hidden], [required], [aria-required=true]").each((function() {
                        var t = i(this),
                            n = function(e) {
                                var t = e.attr("id"),
                                    n = i();
                                if (t && (n = i("label[for='" + d(t) + "']")), 0 === n.length && (n = e.closest("label")), 0 === n.length) {
                                    var r = e.attr("aria-labelledby");
                                    r && (n = r.split(" ").ae_reduce((function(e, t) {
                                        return (t = t.trim()) ? e.add("#" + d(t)) : e
                                    }), n))
                                }
                                return 0 === n.length && 1 === (n = e.parent().find("label").filter((function() {
                                    var e = i(this).attr("for"),
                                        t = i(this).find("input, select, textarea").length > 0;
                                    return !(e && 0 !== i("#" + d(e)).length || t)
                                }))).length && t && n.attr("for", t), n.length > 0 && n
                            }(t);
                        if (n) {
                            var r = n.text().toLowerCase().trim();
                            (r.match(/\breq\b/) || -1 !== r.indexOf("required") || -1 !== r.indexOf("*")) && c.ariaRequired(e, {
                                selector: t,
                                required: "true"
                            })
                        }
                    }))
                },
                addFrameTitles: function(e, t) {
                    var n = [],
                        r = [],
                        a = "iframe",
                        o = s(t.excludes, a);
                    e.outerFind(a).each((function() {
                        var e = i(this);
                        if (o.has(this)) return !0;
                        if ((e.attr("aria-label") || e.attr("title") || "").trim()) return !0;
                        if (1 === e[0].clientWidth && 1 === e[0].clientHeight) n.push(e);
                        else {
                            var t = function(e) {
                                var t, n;
                                return e.is("img") && "" !== e.closest("a").text().trim() ? t = "" : (t = e.attr("title") || "", (n = e.attr("src")) && n.indexOf(t) >= 0 && (t = "")), t || (n = e.attr("name") || e.closest("[href]").attr("href") || e.attr("src")) && (t = u(n)), t
                            }(e);
                            t && r.push({
                                elem: e,
                                title: t
                            })
                        }
                    })), n.forEach((function(t) {
                        c.hideElement(e, {
                            selector: t
                        })
                    })), r.forEach((function(e) {
                        e.elem.attr("title", e.title)
                    }))
                },
                addLinkText: function(e, t) {
                    var n = s(t.excludes, "a");
                    e.outerFind("a").each((function() {
                        var t = i(this),
                            r = this;
                        if (n.has(this)) return !0;
                        if (!r.href && (r.name || r.id)) return !0;
                        for (var a = r.ariaLabel || r.textContent.trim(), o = r.querySelectorAll("img[alt]"), l = 0; l < o.length; l++) a += o[l].alt.trim();
                        if ("" !== a.trim()) return !0;
                        if (a = function(e) {
                                var t;
                                if ((t = e.attr("alt") || "").trim()) return t;
                                if (e.attr("title") && !e.find("img").attr("alt")) {
                                    if (!(t = u(e.attr("title").trim()))) {
                                        if (-1 !== ["link", "read more", "learn more", "click here", "click", "here", "click for details"].indexOf(e.attr("title").trim().toLowerCase())) return !1;
                                        t = e.attr("title").trim()
                                    }
                                    return t
                                }
                                return !(!e.attr("href") || "#" === e.attr("href") || "string" != typeof e.prop("href") || !(t = u(e.prop("href")))) && t
                            }(t), a) {
                            var d = r.querySelector("img");
                            d ? c.imgAlt(e, {
                                selector: i(d),
                                alt: a
                            }) : c.appendCompliance(e, {
                                selector: t,
                                compliance: a
                            })
                        }
                    }))
                },
                addNewWindowWarnings: function(e, t) {
                    var n = "a[target='_blank'], a[target='_new']",
                        r = s(t.excludes, n);
                    e.outerFind(n).each((function() {
                        var e = i(this);
                        if (r.has(this)) return !0;
                        var t = e.text();
                        if (t += e.prev(":not(a)").text(), !(t += e.next(":not(a)").text()).match(/new\s(tab|window)/i)) {
                            var n = e.attr("aria-describedby"),
                                a = "audioeye_new_window_message";
                            if (n) {
                                if (!n.includes(a)) {
                                    var o = e.attr("aria-describedby");
                                    e.attr("aria-describedby", o + " " + a)
                                }
                            } else e.attr("aria-describedby", a)
                        }
                    }))
                },
                automaticNestedLayoutTable: function(e, t) {
                    var n = "table",
                        r = s(t.excludes, n);
                    e.outerFind(n).not("[role='presentation']").each((function() {
                        var e = i(this),
                            t = e.find("table").not("[role='presentation']");
                        if (r.has(this)) return !0;
                        if (t.length) {
                            var n = e.find("tr").length - t.find("tr").length,
                                a = e.find("td").length - t.find("td").length,
                                o = e.find("th").length - t.find("th").length;
                            (n <= 2 || a <= 6 && 0 === o) && e.attr("role", "presentation")
                        }
                    }))
                },
                makeLinkImgAltDecorative: function(e, t) {
                    for (var n = s(t.excludes, "a"), r = e.outerFind("a"), i = 0; i < r.length; i++)
                        if (!n.has(r[i]))
                            for (var a = r[i].querySelectorAll("img"), o = 0; o < a.length; o++) a[o].alt || (r[i].ariaLabel || r[i].textContent || "").trim() && (a[o].alt = "")
                },
                removeLinkRedundancies: function(e, t) {
                    for (var n = s(t.excludes, "a"), r = 0; r < e.length; r++)
                        if ("function" == typeof e[r].querySelectorAll)
                            for (var i, a = e[r].querySelectorAll("a"), o = 0; o < a.length; o++)
                                if (i = a[o], !n.has(i)) {
                                    var l = i.getAttribute("title");
                                    if (l && -1 !== i.innerText.indexOf(l.trim())) i.removeAttribute("title");
                                    else
                                        for (var d, u = i.innerText, c = i.querySelectorAll("img[alt]"), p = 0; p < c.length; p++) {
                                            var f = (d = c[p]).hasAttribute("alt") ? d.getAttribute("alt").trim() : "";
                                            "" !== f && -1 !== u.indexOf(f) && d.setAttribute("alt", "")
                                        }
                                }
                },
                setDocLang: function() {
                    var e = i("html").attr("lang");
                    e || (e = window.AudioEye && window.AudioEye.lang ? window.AudioEye.lang : "en", i("html").attr("lang", e))
                },
                setDefaultBackground: function() {
                    window.top !== window || "rgba(0, 0, 0, 0)" !== i("body").css("backgroundColor") && "rgb(0, 0, 0, 0)" !== i("body").css("backgroundColor") || "rgba(0, 0, 0, 0)" !== i("html").css("backgroundColor") && "rgb(0, 0, 0, 0)" !== i("html").css("backgroundColor") || i("body").css("backgroundColor", "white")
                },
                addGeneratedID: function(e, t, n) {
                    var r, a = e.outerFind(t.selector);
                    n = n || document, a.each((function() {
                        if (i(this).attr("id")) return !0;
                        var e = "aegenerated_",
                            t = !1;
                        for (r = 0; r < 10 && (e += Math.random().toString(36).substr(2, 8), !(t = 0 === i(n).find("#" + e).length)); r += 1);
                        if (!t)
                            for (r = 1e3; r < 9999; r += 1)
                                if (t = 0 === i(n).find("#" + e + r).length) {
                                    e += r;
                                    break
                                }
                        t ? i(this).attr("id", e) : l.error("addGeneratedID could not find a unique ID")
                    }))
                },
                maintainSelectedState: function(e, t) {
                    var n = e.outerFind(t.selector),
                        r = e.outerFind(t.selected);

                    function a(e) {
                        var n = e.closest(i(t.wrapper)),
                            r = i(t.selector).filter((function() {
                                return i(this).closest(n).length
                            }));
                        !1 !== t.ariaSelected && (r.attr("aria-selected", !1), e.attr("aria-selected", !0)), !1 !== t.tabindex && (r.attr("tabindex", -1), e.attr("tabindex", 0))
                    }
                    r.length && a(r), n.off("click.aeSelectOnClick").on("click.aeSelectOnClick", (function() {
                        a(i(this))
                    }))
                },
                arrowKeyLoop: function(e, t) {
                    e.outerFind(t.selector).off("keydown.aeArrowKeyLoop").on("keydown.aeArrowKeyLoop", (function(e) {
                        var n = 37 === e.keyCode || 38 === e.keyCode,
                            r = 39 === e.keyCode || 40 === e.keyCode;
                        if (n || r) {
                            var a, o = i(t.wrapper),
                                d = i(t.selector),
                                u = i(this).closest(o),
                                s = i(d).filter((function() {
                                    return i(this).closest(u).length
                                })),
                                c = s.first(),
                                p = s.last(),
                                f = i(this)[0] === c[0],
                                m = i(this)[0] === p[0];
                            if (n && f) a = p;
                            else if (r && m) a = c;
                            else if (n) a = s.eq(s.index(this) - 1);
                            else {
                                if (!r) return void l.error("arrowKeyLoop: Unexpected state - could not focus element.");
                                a = s.eq(s.index(this) + 1)
                            }
                            AudioEye.focusElement(a)
                        }
                    }))
                },
                triggerClickOnKey: function(e, t) {
                    var n = {
                            space: 32,
                            enter: 13
                        },
                        r = (t.keyList || []).map((function(e) {
                            return n[e]
                        }));
                    e.outerFind(t.selector).off("keydown.aeTriggerClickOnKey").on("keydown.aeTriggerClickOnKey", (function(e) {
                        r.indexOf(e.keyCode) > -1 && i(this)[0].click()
                    }))
                },
                ariaLabelledBy: function(e, t) {
                    if (0 !== e.outerFind(t.receivesAttribute).length && 0 !== e.outerFind(t.isReferenced).length) {
                        var n = i(t.isReferenced),
                            r = i(t.receivesAttribute);
                        0 !== n.length && 0 !== r.length && (t.oneToMany && 1 !== n.length || !t.oneToMany && n.length !== r.length || (c.addGeneratedID(e, {
                            selector: t.isReferenced
                        }), r.each((function(e) {
                            var r = t.oneToMany ? n.eq(0).attr("id") : n.eq(e).attr("id");
                            if (!r) return l.error("tabset: Failed to apply unique ID -  Cannot add aria-labelledby"), !0;
                            var a = i(this).attr("aria-labelledby");
                            if (!a) return i(this).attr("aria-labelledby", r), !0;
                            if (a.length) {
                                var o = a.split(" "); - 1 === o.indexOf(r) && (o.push(r), i(this).attr("aria-labelledby", o.join(" ")))
                            }
                        }))))
                    }
                },
                tabset: function(e, t) {
                    var n = {
                            tab: t.tab || "",
                            selected: t.selected || "",
                            tablist: t.tablist || "",
                            tabpanel: t.tabpanel || ""
                        },
                        r = e.outerFind(n.tab),
                        a = e.outerFind(n.tablist),
                        o = e.outerFind(n.tabpanel),
                        d = e.outerFind(n.selected),
                        u = i(),
                        s = i();
                    if (0 !== r.length || 0 !== a.length)
                        if (a.length > 0 && 0 === r.length) l.error("tabset: found tablists but no tabs");
                        else {
                            r.attr("role", "tab"), a.attr("role", "tablist"), o.attr("role", "tabpanel"), r.each((function() {
                                i(this).parentsUntil(a).filter("li").attr("role", "presentation")
                            })), !1 !== t.ariaLabelledbyTabpanel && c.ariaLabelledBy(e, {
                                receivesAttribute: n.tabpanel,
                                isReferenced: n.tab,
                                oneToMany: !1
                            }), t.ariaCurrentTab && (s = s.length ? s : i(n.selected)).length && ((u = u.length ? u : i(n.tab)).removeAttr("aria-current"), d.attr("aria-current", t.ariaCurrentTab)), !1 !== t.loopArrowKeys && c.arrowKeyLoop(e, {
                                selector: n.tab,
                                wrapper: n.tablist
                            }), !1 === t.maintainAriaSelected && !1 === t.maintainTabindex || c.maintainSelectedState(e, {
                                selector: n.tab,
                                selected: n.selected,
                                wrapper: n.tablist,
                                ariaSelected: !1 !== t.maintainAriaSelected,
                                tabindex: !1 !== t.maintainTabindex
                            });
                            var p = [];
                            !1 !== t.clickTabOnEnter && p.push("enter"), !1 !== t.clickTabOnSpace && p.push("space"), p.length && c.triggerClickOnKey(e, {
                                selector: n.tab,
                                keyList: p
                            })
                        }
                },
                tabindex: function(e, t) {
                    e.outerFind(t.selector).attr("tabindex", t.tabindex)
                },
                runOne: function(e, t, n) {
                    if ("function" == typeof c[t.type]) {
                        var r;
                        if (null === t.params || void 0 === t.params || Array.isArray(t.params)) r = {};
                        else if (t.params.constructor === String) try {
                            r = JSON.parse(t.params)
                        } catch (e) {
                            return void l.error("Could not parse parameters for remediation id: " + t.id)
                        } else r = t.params;
                        "object" == typeof r && null !== r || (r = {}), r.excludes ? l.error('Remediation run failed: A remediation has an "excludes" property - this is a reserved property.') : (r.excludes = n, c[t.type].call(void 0, e, r))
                    } else l.error('No smart remediation type "' + t.type + '" exists. Cannot apply remediation.')
                }
            };
            o && o.testmode && (window.testScope || (window.testScope = {}), window.testScope.autoSmartRems = {
                getExcludedElements: s
            }), e.exports = c
        }
    }
]);