if (typeof mouseflow === 'undefined' && typeof mouseflowPlayback === 'undefined') {
    (function() {
        var _389 = false;
        var _406 = false;
        var _411 = [];
        var _412 = [];
        var _152 = 'https://app.mouseflow.com';
        var _7 = new _710(window, _389, _406);
        _7._246 = [];
        _7._241 = [];
        _7._271 = [];
        _7._49 = 'd64879f8-cf90-4e0d-951f-b5bb586ad590';

        function _641(_3, _109, _7, _24, _9, _238, _18, _178, _128, _425, _10) {
            var _790 = false;
            var _134 = 'https://n2.mouseflow.com/';
            var _185 = 100.00000;
            var _154 = [];
            var _876 = [];
            var _250 = ["www.illuminareEnergy.com"];
            var _561 = false;
            var _786 = false;
            var _795 = '2022-01-22 08:45:00';
            var _210 = '17.58';
            var _160 = false;
            var _563 = false;
            var _73 = false;
            var _206 = false;
            var _348 = false;
            var _541 = /\[(\d+)\]_mf$/;
            var _11 = _3.document;
            var _90 = _3.location;
            _672();
            var _12 = _769();
            var _0 = _438();
            var _62 = {
                _507: 100,
                _775: 250,
                _874: 10000,
                _482: 1336,
                _362: 1800000,
                _817: 3600000,
                _840: 7776000000,
                _873: 100,
                _825: 2000,
                _626: 8000,
                _292: 2048
            };
            var _328, _329, _326, _251, _237, _215, _424, _269, _137, _394 = [],
                _393 = [];
            var _6 = {
                _283: 0,
                _305: 1,
                _289: 2,
                _309: 3,
                _313: 4,
                _315: 5,
                _308: 6,
                _194: 7,
                _349: 8,
                _285: 9,
                _235: 10,
                _508: 11,
                _509: 12,
                _296: 13,
                _566: 14,
                _80: 15,
                _935: 16,
                _932: 17,
                _99: 18,
                _333: 19,
                _734: 20,
                _355: 21,
                _361: 22,
                _299: 23,
                _366: 24,
                _341: 25,
                _367: 26,
                _322: 27,
                _327: 28,
                _517: 29,
                _324: 30,
                _514: 31,
                _338: 32,
                _286: 33,
                _466: 34,
                _191: 35,
                _537: 36,
                _535: 37,
                _54: 38,
                _343: 39,
                _858: 40,
                _255: 41,
                _95: 42
            };
            var _93 = {
                _453: {
                    _19: 'bounce',
                    _4: 2,
                    _41: 1
                },
                _798: {
                    _19: 'click-rage',
                    _4: 5,
                    _41: 2
                },
                _501: {
                    _19: 'click-error',
                    _4: 2,
                    _41: 3
                },
                _479: {
                    _19: 'mobility',
                    _4: 3,
                    _41: 4
                },
                _194: {
                    _19: 'mouse-out',
                    _4: 1,
                    _41: 5
                },
                _437: {
                    _19: 'speed-browsing',
                    _4: 1,
                    _41: 6
                },
                _191: {
                    _19: 'submit-failure',
                    _4: 3,
                    _41: 7
                }
            };
            var _682 = /[\x20\r\n]+/g;
            var _662 = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@/;
            var _660 = /(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|6(?:011|5[0-9]{2})[0-9]{12}|(?:2131|1800|35\d{3})\d{11})/;
            var _771 = /^(onbeforeunload|onblur|onchange|onclick|onfocus|oninput|onkeydown|onkeypress|onkeyup|onload|onmousedown|onmouseenter|onmouseleave|onmousemove|onmouseout|onmouseover|onmouseup|onresize|onsubmit|ontouchcancel|ontouchend|ontouchenter|ontouchleave|ontouchmove|ontouchstart|onunload)$/;
            var _669 = /checkbox|radio|button|submit|file|image|reset/;

            function _454() {
                _3._mfq = []
            }

            function _672() {
                if (!_3._mfq) _454();
                for (var _45 = 0; _45 < _3._mfq.length; _45++) {
                    var _51 = _3._mfq[_45];
                    if (_51 && _51.length && _51[0] === 'config') _7._426.apply(_7, _51.slice(1))
                }
            }

            function _456(_272) {
                if (!_272) _272 = [];
                var _43 = this;
                _3.setTimeout(function() {
                    for (var _45 = 0; _45 < _272.length; _45++) _43.push(_272[_45])
                }, 1)
            }
            _456.prototype.push = function(_51) {
                if (!_51) return;
                try {
                    if (typeof _51 === 'object' && _51.length) {
                        mouseflow[_51.slice(0, 1)].apply(mouseflow, _51.slice(1))
                    } else if (typeof _51 === 'function') {
                        _51(mouseflow)
                    }
                } catch (error) {
                    var _158 = 'Failed to execute item on action queue';
                    var _449 = _9._78(_51);
                    if (_449) _158 += '\n' + _449;
                    _158 += '\n' + error;
                    _10(_158, _14())
                }
            };
            // Copyright 2011 Google Inc.
            //
            // Licensed under the Apache License, Version 2.0 (the "License");
            // you may not use this file except in compliance with the License.
            // You may obtain a copy of the License at
            //
            //     http://www.apache.org/licenses/LICENSE-2.0
            //
            // Unless required by applicable law or agreed to in writing, software
            // distributed under the License is distributed on an "AS IS" BASIS,
            // WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
            // See the License for the specific language governing permissions and
            // limitations under the License.
            //
            // This component contains modifications carried out by Mouseflow ApS.
            var __extends = this.__extends || function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p)) d[p] = b[p];

                function __() {
                    this.constructor = d
                }
                __.prototype = b.prototype;
                d.prototype = new __()
            };
            var MutationObserverCtor;
            if (typeof WebKitMutationObserver !== 'undefined') MutationObserverCtor = WebKitMutationObserver;
            else if (typeof MutationObserver !== 'undefined') MutationObserverCtor = MutationObserver;
            if (MutationObserverCtor === undefined) {
                _10('DOM Mutation Observers not supported.', _14())
            }
            var NodeMap = (function() {
                function NodeMap() {
                    this.nodes = [];
                    this.values = []
                }
                NodeMap.prototype.isIndex = function(s) {
                    return +s === s >>> 0
                };
                NodeMap.prototype.nodeId = function(node) {
                    var id = node[NodeMap.ID_PROP];
                    if (!id) id = node[NodeMap.ID_PROP] = NodeMap.nextId_++;
                    return id
                };
                NodeMap.prototype.set = function(node, value) {
                    var id = this.nodeId(node);
                    this.nodes[id] = node;
                    this.values[id] = value
                };
                NodeMap.prototype.get = function(node) {
                    var id = this.nodeId(node);
                    return this.values[id]
                };
                NodeMap.prototype.has = function(node) {
                    return this.nodeId(node) in this.nodes
                };
                NodeMap.prototype.deleteNode = function(node) {
                    var id = this.nodeId(node);
                    delete this.nodes[id];
                    this.values[id] = undefined
                };
                NodeMap.prototype.keys = function() {
                    var nodes = [];
                    for (var id in this.nodes) {
                        if (!this.isIndex(id)) continue;
                        nodes.push(this.nodes[id])
                    }
                    return nodes
                };
                NodeMap.ID_PROP = '__mouseflow_node_map_id__';
                NodeMap.nextId_ = 1;
                return NodeMap
            })();
            var Movement;
            (function(Movement) {
                Movement[Movement['STAYED_OUT'] = 0] = 'STAYED_OUT';
                Movement[Movement['ENTERED'] = 1] = 'ENTERED';
                Movement[Movement['STAYED_IN'] = 2] = 'STAYED_IN';
                Movement[Movement['REPARENTED'] = 3] = 'REPARENTED';
                Movement[Movement['REORDERED'] = 4] = 'REORDERED';
                Movement[Movement['EXITED'] = 5] = 'EXITED'
            })(Movement || (Movement = {}));

            function enteredOrExited(changeType) {
                return changeType === Movement.ENTERED || changeType === Movement.EXITED
            }
            var NodeChange = (function() {
                function NodeChange(node, childList, attributes, characterData, oldParentNode, added, attributeOldValues, characterDataOldValue) {
                    if (childList === void 0) {
                        childList = false
                    }
                    if (attributes === void 0) {
                        attributes = false
                    }
                    if (characterData === void 0) {
                        characterData = false
                    }
                    if (oldParentNode === void 0) {
                        oldParentNode = null
                    }
                    if (added === void 0) {
                        added = false
                    }
                    if (attributeOldValues === void 0) {
                        attributeOldValues = null
                    }
                    if (characterDataOldValue === void 0) {
                        characterDataOldValue = null
                    }
                    this.node = node;
                    this.childList = childList;
                    this.attributes = attributes;
                    this.characterData = characterData;
                    this.oldParentNode = oldParentNode;
                    this.added = added;
                    this.attributeOldValues = attributeOldValues;
                    this.characterDataOldValue = characterDataOldValue;
                    this.isCaseInsensitive = this.node.nodeType === 1 && this.node instanceof HTMLElement && typeof(HTMLDocument) !== 'undefined' && this.node.ownerDocument instanceof HTMLDocument
                }
                NodeChange.prototype.getAttributeOldValue = function(name) {
                    if (!this.attributeOldValues) return undefined;
                    if (this.isCaseInsensitive) name = name.toLowerCase();
                    return this.attributeOldValues[name]
                };
                NodeChange.prototype.getAttributeNamesMutated = function() {
                    var names = [];
                    if (!this.attributeOldValues) return names;
                    for (var name in this.attributeOldValues) {
                        names.push(name)
                    }
                    return names
                };
                NodeChange.prototype.attributeMutated = function(name, oldValue) {
                    this.attributes = true;
                    this.attributeOldValues = this.attributeOldValues || {};
                    if (name in this.attributeOldValues) return;
                    this.attributeOldValues[name] = oldValue
                };
                NodeChange.prototype.characterDataMutated = function(oldValue) {
                    if (this.characterData) return;
                    this.characterData = true;
                    this.characterDataOldValue = oldValue
                };
                NodeChange.prototype.removedFromParent = function(parent) {
                    this.childList = true;
                    if (this.added || this.oldParentNode) this.added = false;
                    else this.oldParentNode = parent
                };
                NodeChange.prototype.insertedIntoParent = function() {
                    this.childList = true;
                    this.added = true
                };
                NodeChange.prototype.getOldParent = function() {
                    if (this.childList) {
                        if (this.oldParentNode) return this.oldParentNode;
                        if (this.added) return null
                    }
                    return this.node.parentNode
                };
                return NodeChange
            })();
            var ChildListChange = (function() {
                function ChildListChange() {
                    this.added = new NodeMap();
                    this.removed = new NodeMap();
                    this.maybeMoved = new NodeMap();
                    this.oldPrevious = new NodeMap();
                    this.moved = undefined
                }
                return ChildListChange
            })();
            var TreeChanges = (function(_448) {
                __extends(TreeChanges, _448);

                function TreeChanges(rootNode, mutations) {
                    _448.call(this);
                    this.rootNode = rootNode;
                    this.reachableCache = undefined;
                    this.wasReachableCache = undefined;
                    this.anyParentsChanged = false;
                    this.anyAttributesChanged = false;
                    this.anyCharacterDataChanged = false;
                    for (var m = 0; m < mutations.length; m++) {
                        var mutation = mutations[m];
                        switch (mutation.type) {
                            case 'childList':
                                this.anyParentsChanged = true;
                                for (var i = 0; i < mutation.removedNodes.length; i++) {
                                    var node = mutation.removedNodes[i];
                                    this.getChange(node).removedFromParent(mutation.target)
                                }
                                for (var i = 0; i < mutation.addedNodes.length; i++) {
                                    var node = mutation.addedNodes[i];
                                    this.getChange(node).insertedIntoParent()
                                }
                                break;
                            case 'attributes':
                                this.anyAttributesChanged = true;
                                var change = this.getChange(mutation.target);
                                change.attributeMutated(mutation.attributeName, mutation.oldValue);
                                break;
                            case 'characterData':
                                this.anyCharacterDataChanged = true;
                                var change = this.getChange(mutation.target);
                                change.characterDataMutated(mutation.oldValue);
                                break
                        }
                    }
                }
                TreeChanges.prototype.getChange = function(node) {
                    var change = this.get(node);
                    if (!change) {
                        change = new NodeChange(node);
                        this.set(node, change)
                    }
                    return change
                };
                TreeChanges.prototype.getOldParent = function(node) {
                    var change = this.get(node);
                    return change ? change.getOldParent() : node.parentNode
                };
                TreeChanges.prototype.getIsReachable = function(node) {
                    if (node === this.rootNode) return true;
                    if (!node) return false;
                    this.reachableCache = this.reachableCache || new NodeMap();
                    var isReachable = this.reachableCache.get(node);
                    if (isReachable === undefined) {
                        isReachable = this.getIsReachable(node.parentNode);
                        this.reachableCache.set(node, isReachable)
                    }
                    return isReachable
                };
                TreeChanges.prototype.getWasReachable = function(node) {
                    if (node === this.rootNode) return true;
                    if (!node) return false;
                    this.wasReachableCache = this.wasReachableCache || new NodeMap();
                    var wasReachable = this.wasReachableCache.get(node);
                    if (wasReachable === undefined) {
                        wasReachable = this.getWasReachable(this.getOldParent(node));
                        this.wasReachableCache.set(node, wasReachable)
                    }
                    return wasReachable
                };
                TreeChanges.prototype.reachabilityChange = function(node) {
                    if (this.getIsReachable(node)) {
                        return this.getWasReachable(node) ? Movement.STAYED_IN : Movement.ENTERED
                    }
                    return this.getWasReachable(node) ? Movement.EXITED : Movement.STAYED_OUT
                };
                return TreeChanges
            })(NodeMap);
            var MutationProjection = (function() {
                function MutationProjection(rootNode, mutations, selectors, calcReordered, calcOldPreviousSibling) {
                    this.rootNode = rootNode;
                    this.mutations = mutations;
                    this.selectors = selectors;
                    this.calcReordered = calcReordered;
                    this.calcOldPreviousSibling = calcOldPreviousSibling;
                    this.treeChanges = new TreeChanges(rootNode, mutations);
                    this.entered = [];
                    this.exited = [];
                    this.stayedIn = new NodeMap();
                    this.visited = new NodeMap();
                    this.childListChangeMap = undefined;
                    this.characterDataOnly = undefined;
                    this.matchCache = undefined;
                    this.processMutations()
                }
                MutationProjection.prototype.processMutations = function() {
                    if (!this.treeChanges.anyParentsChanged && !this.treeChanges.anyAttributesChanged) return;
                    var changedNodes = this.treeChanges.keys();
                    for (var i = 0; i < changedNodes.length; i++) {
                        this.visitNode(changedNodes[i], undefined)
                    }
                };
                MutationProjection.prototype.visitNode = function(node, parentReachable) {
                    if (this.visited.has(node)) return;
                    this.visited.set(node, true);
                    var change = this.treeChanges.get(node);
                    var reachable = parentReachable;
                    if ((change && change.childList) || reachable == undefined) reachable = this.treeChanges.reachabilityChange(node);
                    if (reachable === Movement.STAYED_OUT) return;
                    this.matchabilityChange(node);
                    if (reachable === Movement.ENTERED) {
                        this.entered.push(node)
                    } else if (reachable === Movement.EXITED) {
                        this.exited.push(node);
                        this.ensureHasOldPreviousSiblingIfNeeded(node)
                    } else if (reachable === Movement.STAYED_IN) {
                        var movement = Movement.STAYED_IN;
                        if (change && change.childList) {
                            if (change.oldParentNode !== node.parentNode) {
                                movement = Movement.REPARENTED;
                                this.ensureHasOldPreviousSiblingIfNeeded(node)
                            } else if (this.calcReordered && this.wasReordered(node)) {
                                movement = Movement.REORDERED
                            }
                        }
                        this.stayedIn.set(node, movement)
                    }
                    if (reachable === Movement.STAYED_IN) return;
                    for (var child = node.firstChild; child; child = child.nextSibling) {
                        this.visitNode(child, reachable)
                    }
                };
                MutationProjection.prototype.ensureHasOldPreviousSiblingIfNeeded = function(node) {
                    if (!this.calcOldPreviousSibling) return;
                    this.processChildlistChanges();
                    var parentNode = node.parentNode;
                    var nodeChange = this.treeChanges.get(node);
                    if (nodeChange && nodeChange.oldParentNode) parentNode = nodeChange.oldParentNode;
                    var change = this.childListChangeMap.get(parentNode);
                    if (!change) {
                        change = new ChildListChange();
                        this.childListChangeMap.set(parentNode, change)
                    }
                    if (!change.oldPrevious.has(node)) {
                        change.oldPrevious.set(node, node.previousSibling)
                    }
                };
                MutationProjection.prototype.getChanged = function(summary, selectors, characterDataOnly) {
                    this.selectors = selectors;
                    this.characterDataOnly = characterDataOnly;
                    for (var i = 0; i < this.entered.length; i++) {
                        var node = this.entered[i];
                        var matchable = this.matchabilityChange(node);
                        if (matchable === Movement.ENTERED || matchable === Movement.STAYED_IN) summary.added.push(node)
                    }
                    var stayedInNodes = this.stayedIn.keys();
                    for (var i = 0; i < stayedInNodes.length; i++) {
                        var node = stayedInNodes[i];
                        var matchable = this.matchabilityChange(node);
                        if (matchable === Movement.ENTERED) {
                            summary.added.push(node)
                        } else if (matchable === Movement.EXITED) {
                            summary.removed.push(node)
                        } else if (matchable === Movement.STAYED_IN && (summary.reparented || summary.reordered)) {
                            var movement = this.stayedIn.get(node);
                            if (summary.reparented && movement === Movement.REPARENTED) summary.reparented.push(node);
                            else if (summary.reordered && movement === Movement.REORDERED) summary.reordered.push(node)
                        }
                    }
                    for (var i = 0; i < this.exited.length; i++) {
                        var node = this.exited[i];
                        var matchable = this.matchabilityChange(node);
                        if (matchable === Movement.EXITED || matchable === Movement.STAYED_IN) summary.removed.push(node)
                    }
                };
                MutationProjection.prototype.getOldParentNode = function(node) {
                    var change = this.treeChanges.get(node);
                    if (change && change.childList) return change.oldParentNode ? change.oldParentNode : null;
                    var reachabilityChange = this.treeChanges.reachabilityChange(node);
                    if (reachabilityChange === Movement.STAYED_OUT || reachabilityChange === Movement.ENTERED) throw Error('getOldParentNode requested on invalid node.');
                    return node.parentNode
                };
                MutationProjection.prototype.getOldPreviousSibling = function(node) {
                    var parentNode = node.parentNode;
                    var nodeChange = this.treeChanges.get(node);
                    if (nodeChange && nodeChange.oldParentNode) parentNode = nodeChange.oldParentNode;
                    var change = this.childListChangeMap.get(parentNode);
                    if (!change) throw Error('getOldPreviousSibling requested on invalid node.');
                    return change.oldPrevious.get(node)
                };
                MutationProjection.prototype.getOldAttribute = function(element, attrName) {
                    var change = this.treeChanges.get(element);
                    if (!change || !change.attributes) throw Error('getOldAttribute requested on invalid node.');
                    var value = change.getAttributeOldValue(attrName);
                    if (value === undefined) throw Error('getOldAttribute requested for unchanged attribute name.');
                    return value
                };
                MutationProjection.prototype.attributeChangedNodes = function(includeAttributes) {
                    if (!this.treeChanges.anyAttributesChanged) return {};
                    var attributeFilter;
                    var caseInsensitiveFilter;
                    if (includeAttributes) {
                        attributeFilter = {};
                        caseInsensitiveFilter = {};
                        for (var i = 0; i < includeAttributes.length; i++) {
                            var attrName = includeAttributes[i];
                            attributeFilter[attrName] = true;
                            caseInsensitiveFilter[attrName.toLowerCase()] = attrName
                        }
                    }
                    var result = {};
                    var nodes = this.treeChanges.keys();
                    for (var i = 0; i < nodes.length; i++) {
                        var node = nodes[i];
                        var change = this.treeChanges.get(node);
                        if (!change.attributes) continue;
                        if (Movement.STAYED_IN !== this.treeChanges.reachabilityChange(node) || Movement.STAYED_IN !== this.matchabilityChange(node)) {
                            continue
                        }
                        var element = node;
                        var changedAttrNames = change.getAttributeNamesMutated();
                        for (var j = 0; j < changedAttrNames.length; j++) {
                            var attrName = changedAttrNames[j];
                            if (attributeFilter && !attributeFilter[attrName] && !(change.isCaseInsensitive && caseInsensitiveFilter[attrName])) {
                                continue
                            }
                            var oldValue = change.getAttributeOldValue(attrName);
                            if (oldValue === element.getAttribute(attrName)) continue;
                            if (caseInsensitiveFilter && change.isCaseInsensitive) attrName = caseInsensitiveFilter[attrName];
                            result[attrName] = result[attrName] || [];
                            result[attrName].push(element)
                        }
                    }
                    return result
                };
                MutationProjection.prototype.getOldCharacterData = function(node) {
                    var change = this.treeChanges.get(node);
                    if (!change || !change.characterData) throw Error('getOldCharacterData requested on invalid node.');
                    return change.characterDataOldValue
                };
                MutationProjection.prototype.getCharacterDataChanged = function() {
                    if (!this.treeChanges.anyCharacterDataChanged) return [];
                    var nodes = this.treeChanges.keys();
                    var result = [];
                    for (var i = 0; i < nodes.length; i++) {
                        var target = nodes[i];
                        if (Movement.STAYED_IN !== this.treeChanges.reachabilityChange(target)) continue;
                        var change = this.treeChanges.get(target);
                        if (!change.characterData || target.textContent == change.characterDataOldValue) continue;
                        result.push(target)
                    }
                    return result
                };
                MutationProjection.prototype.computeMatchabilityChange = function(selector, el) {
                    if (!this.matchCache) this.matchCache = [];
                    if (!this.matchCache[selector.uid]) this.matchCache[selector.uid] = new NodeMap();
                    var cache = this.matchCache[selector.uid];
                    var result = cache.get(el);
                    if (result === undefined) {
                        result = selector.matchabilityChange(el, this.treeChanges.get(el));
                        cache.set(el, result)
                    }
                    return result
                };
                MutationProjection.prototype.matchabilityChange = function(node) {
                    var _43 = this;
                    if (this.characterDataOnly) {
                        switch (node.nodeType) {
                            case 8:
                            case 3:
                                return Movement.STAYED_IN;
                            default:
                                return Movement.STAYED_OUT
                        }
                    }
                    if (!this.selectors) return Movement.STAYED_IN;
                    if (node.nodeType !== 1) return Movement.STAYED_OUT;
                    var el = node;
                    var matchChanges = this.selectors.map(function(selector) {
                        return _43.computeMatchabilityChange(selector, el)
                    });
                    var accum = Movement.STAYED_OUT;
                    var i = 0;
                    while (accum !== Movement.STAYED_IN && i < matchChanges.length) {
                        switch (matchChanges[i]) {
                            case Movement.STAYED_IN:
                                accum = Movement.STAYED_IN;
                                break;
                            case Movement.ENTERED:
                                if (accum === Movement.EXITED) accum = Movement.STAYED_IN;
                                else accum = Movement.ENTERED;
                                break;
                            case Movement.EXITED:
                                if (accum === Movement.ENTERED) accum = Movement.STAYED_IN;
                                else accum = Movement.EXITED;
                                break
                        }
                        i++
                    }
                    return accum
                };
                MutationProjection.prototype.getChildlistChange = function(el) {
                    var change = this.childListChangeMap.get(el);
                    if (!change) {
                        change = new ChildListChange();
                        this.childListChangeMap.set(el, change)
                    }
                    return change
                };
                MutationProjection.prototype.processChildlistChanges = function() {
                    if (this.childListChangeMap) return;
                    this.childListChangeMap = new NodeMap();
                    for (var i = 0; i < this.mutations.length; i++) {
                        var mutation = this.mutations[i];
                        if (mutation.type != 'childList') continue;
                        if (this.treeChanges.reachabilityChange(mutation.target) !== Movement.STAYED_IN && !this.calcOldPreviousSibling) continue;
                        var change = this.getChildlistChange(mutation.target);
                        var oldPrevious = mutation.previousSibling;

                        function recordOldPrevious(node, previous) {
                            if (!node || change.oldPrevious.has(node) || change.added.has(node) || change.maybeMoved.has(node)) return;
                            if (previous && (change.added.has(previous) || change.maybeMoved.has(previous))) return;
                            change.oldPrevious.set(node, previous)
                        }
                        for (var j = 0; j < mutation.removedNodes.length; j++) {
                            var node = mutation.removedNodes[j];
                            recordOldPrevious(node, oldPrevious);
                            if (change.added.has(node)) {
                                change.added.deleteNode(node)
                            } else {
                                change.removed.set(node, true);
                                change.maybeMoved.deleteNode(node)
                            }
                            oldPrevious = node
                        }
                        recordOldPrevious(mutation.nextSibling, oldPrevious);
                        for (var j = 0; j < mutation.addedNodes.length; j++) {
                            var node = mutation.addedNodes[j];
                            if (change.removed.has(node)) {
                                change.removed.deleteNode(node);
                                change.maybeMoved.set(node, true)
                            } else {
                                change.added.set(node, true)
                            }
                        }
                    }
                };
                MutationProjection.prototype.wasReordered = function(node) {
                    if (!this.treeChanges.anyParentsChanged) return false;
                    this.processChildlistChanges();
                    var parentNode = node.parentNode;
                    var nodeChange = this.treeChanges.get(node);
                    if (nodeChange && nodeChange.oldParentNode) parentNode = nodeChange.oldParentNode;
                    var change = this.childListChangeMap.get(parentNode);
                    if (!change) return false;
                    if (change.moved) return change.moved.get(node);
                    change.moved = new NodeMap();
                    var pendingMoveDecision = new NodeMap();

                    function isMoved(node) {
                        if (!node) return false;
                        if (!change.maybeMoved.has(node)) return false;
                        var didMove = change.moved.get(node);
                        if (didMove !== undefined) return didMove;
                        if (pendingMoveDecision.has(node)) {
                            didMove = true
                        } else {
                            pendingMoveDecision.set(node, true);
                            didMove = getPrevious(node) !== getOldPrevious(node)
                        }
                        if (pendingMoveDecision.has(node)) {
                            pendingMoveDecision.deleteNode(node);
                            change.moved.set(node, didMove)
                        } else {
                            didMove = change.moved.get(node)
                        }
                        return didMove
                    }
                    var oldPreviousCache = new NodeMap();

                    function getOldPrevious(node) {
                        var oldPrevious = oldPreviousCache.get(node);
                        if (oldPrevious !== undefined) return oldPrevious;
                        oldPrevious = change.oldPrevious.get(node);
                        while (oldPrevious && (change.removed.has(oldPrevious) || isMoved(oldPrevious))) {
                            oldPrevious = getOldPrevious(oldPrevious)
                        }
                        if (oldPrevious === undefined) oldPrevious = node.previousSibling;
                        oldPreviousCache.set(node, oldPrevious);
                        return oldPrevious
                    }
                    var previousCache = new NodeMap();

                    function getPrevious(node) {
                        if (previousCache.has(node)) return previousCache.get(node);
                        var previous = node.previousSibling;
                        while (previous && (change.added.has(previous) || isMoved(previous))) previous = previous.previousSibling;
                        previousCache.set(node, previous);
                        return previous
                    }
                    change.maybeMoved.keys().forEach(isMoved);
                    return change.moved.get(node)
                };
                return MutationProjection
            })();
            var Summary = (function() {
                function Summary(projection, query) {
                    var _43 = this;
                    this.projection = projection;
                    this.added = [];
                    this.removed = [];
                    this.reparented = query.all || query.element || query.characterData ? [] : undefined;
                    this.reordered = query.all ? [] : undefined;
                    projection.getChanged(this, query.elementFilter, query.characterData);
                    if (query.all || query.attribute || query.attributeList) {
                        var filter = query.attribute ? [query.attribute] : query.attributeList;
                        var attributeChanged = projection.attributeChangedNodes(filter);
                        if (query.attribute) {
                            this.valueChanged = attributeChanged[query.attribute] || []
                        } else {
                            this.attributeChanged = attributeChanged;
                            if (query.attributeList) {
                                query.attributeList.forEach(function(attrName) {
                                    if (!_43.attributeChanged.hasOwnProperty(attrName)) _43.attributeChanged[attrName] = []
                                })
                            }
                        }
                    }
                    if (query.all || query.characterData) {
                        var characterDataChanged = projection.getCharacterDataChanged();
                        if (query.characterData) this.valueChanged = characterDataChanged;
                        else this.characterDataChanged = characterDataChanged
                    }
                    if (this.reordered) this.getOldPreviousSibling = projection.getOldPreviousSibling.bind(projection)
                }
                Summary.prototype.getOldParentNode = function(node) {
                    return this.projection.getOldParentNode(node)
                };
                Summary.prototype.getOldAttribute = function(node, name) {
                    return this.projection.getOldAttribute(node, name)
                };
                Summary.prototype.getOldCharacterData = function(node) {
                    return this.projection.getOldCharacterData(node)
                };
                Summary.prototype.getOldPreviousSibling = function(node) {
                    return this.projection.getOldPreviousSibling(node)
                };
                return Summary
            })();
            var validNameInitialChar = /[a-zA-Z_]+/;
            var validNameNonInitialChar = /[a-zA-Z0-9_\-]+/;

            function escapeQuotes(value) {
                return '"' + value.replace(/"/, '\\\"') + '"'
            }
            var Qualifier = (function() {
                function Qualifier() {}
                Qualifier.prototype.matches = function(oldValue) {
                    if (oldValue === null) return false;
                    if (this.attrValue === undefined) return true;
                    if (!this.contains) return this.attrValue == oldValue;
                    var tokens = oldValue.split(' ');
                    for (var i = 0; i < tokens.length; i++) {
                        if (this.attrValue === tokens[i]) return true
                    }
                    return false
                };
                Qualifier.prototype.toString = function() {
                    if (this.attrName === 'class' && this.contains) return '.' + this.attrValue;
                    if (this.attrName === 'id' && !this.contains) return '#' + this.attrValue;
                    if (this.contains) return '[' + this.attrName + '~=' + escapeQuotes(this.attrValue) + ']';
                    if ('attrValue' in this) return '[' + this.attrName + '=' + escapeQuotes(this.attrValue) + ']';
                    return '[' + this.attrName + ']'
                };
                return Qualifier
            })();
            var Selector = (function() {
                function Selector() {
                    this.uid = Selector.nextUid++;
                    this.qualifiers = []
                }
                try {
                    Object.defineProperty(Selector.prototype, 'caseInsensitiveTagName', {
                        get: function() {
                            return this.tagName.toUpperCase()
                        },
                        enumerable: true,
                        configurable: true
                    });
                    Object.defineProperty(Selector.prototype, 'selectorString', {
                        get: function() {
                            return this.tagName + this.qualifiers.join('')
                        },
                        enumerable: true,
                        configurable: true
                    })
                } catch (e) {};
                Selector.prototype.isMatching = function(el) {
                    return el[Selector.matchesSelector](this.selectorString)
                };
                Selector.prototype.wasMatching = function(el, change, isMatching) {
                    if (!change || !change.attributes) return isMatching;
                    var tagName = change.isCaseInsensitive ? this.caseInsensitiveTagName : this.tagName;
                    if (tagName !== '*' && tagName !== el.tagName) return false;
                    var attributeOldValues = [];
                    var anyChanged = false;
                    for (var i = 0; i < this.qualifiers.length; i++) {
                        var qualifier = this.qualifiers[i];
                        var oldValue = change.getAttributeOldValue(qualifier.attrName);
                        attributeOldValues.push(oldValue);
                        anyChanged = anyChanged || (oldValue !== undefined)
                    }
                    if (!anyChanged) return isMatching;
                    for (var i = 0; i < this.qualifiers.length; i++) {
                        var qualifier = this.qualifiers[i];
                        var oldValue = attributeOldValues[i];
                        if (oldValue === undefined) oldValue = el.getAttribute(qualifier.attrName);
                        if (!qualifier.matches(oldValue)) return false
                    }
                    return true
                };
                Selector.prototype.matchabilityChange = function(el, change) {
                    var isMatching = this.isMatching(el);
                    if (isMatching) return this.wasMatching(el, change, isMatching) ? Movement.STAYED_IN : Movement.ENTERED;
                    else return this.wasMatching(el, change, isMatching) ? Movement.EXITED : Movement.STAYED_OUT
                };
                Selector.parseSelectors = function(input) {
                    var selectors = [];
                    var currentSelector;
                    var currentQualifier;

                    function newSelector() {
                        if (currentSelector) {
                            if (currentQualifier) {
                                currentSelector.qualifiers.push(currentQualifier);
                                currentQualifier = undefined
                            }
                            selectors.push(currentSelector)
                        }
                        currentSelector = new Selector()
                    }

                    function newQualifier() {
                        if (currentQualifier) currentSelector.qualifiers.push(currentQualifier);
                        currentQualifier = new Qualifier()
                    }
                    var WHITESPACE = /\s/;
                    var valueQuoteChar;
                    var SYNTAX_ERROR = 'Invalid or unsupported selector syntax.';
                    var SELECTOR = 1;
                    var TAG_NAME = 2;
                    var QUALIFIER = 3;
                    var QUALIFIER_NAME_FIRST_CHAR = 4;
                    var QUALIFIER_NAME = 5;
                    var ATTR_NAME_FIRST_CHAR = 6;
                    var ATTR_NAME = 7;
                    var EQUIV_OR_ATTR_QUAL_END = 8;
                    var EQUAL = 9;
                    var ATTR_QUAL_END = 10;
                    var VALUE_FIRST_CHAR = 11;
                    var VALUE = 12;
                    var QUOTED_VALUE = 13;
                    var SELECTOR_SEPARATOR = 14;
                    var state = SELECTOR;
                    var i = 0;
                    while (i < input.length) {
                        var c = input[i++];
                        switch (state) {
                            case SELECTOR:
                                if (c.match(validNameInitialChar)) {
                                    newSelector();
                                    currentSelector.tagName = c;
                                    state = TAG_NAME;
                                    break
                                }
                                if (c == '*') {
                                    newSelector();
                                    currentSelector.tagName = '*';
                                    state = QUALIFIER;
                                    break
                                }
                                if (c == '.') {
                                    newSelector();
                                    newQualifier();
                                    currentSelector.tagName = '*';
                                    currentQualifier.attrName = 'class';
                                    currentQualifier.contains = true;
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c == '#') {
                                    newSelector();
                                    newQualifier();
                                    currentSelector.tagName = '*';
                                    currentQualifier.attrName = 'id';
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c == '[') {
                                    newSelector();
                                    newQualifier();
                                    currentSelector.tagName = '*';
                                    currentQualifier.attrName = '';
                                    state = ATTR_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c.match(WHITESPACE)) break;
                                throw Error(SYNTAX_ERROR);
                            case TAG_NAME:
                                if (c.match(validNameNonInitialChar)) {
                                    currentSelector.tagName += c;
                                    break
                                }
                                if (c == '.') {
                                    newQualifier();
                                    currentQualifier.attrName = 'class';
                                    currentQualifier.contains = true;
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c == '#') {
                                    newQualifier();
                                    currentQualifier.attrName = 'id';
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c == '[') {
                                    newQualifier();
                                    currentQualifier.attrName = '';
                                    state = ATTR_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c.match(WHITESPACE)) {
                                    state = SELECTOR_SEPARATOR;
                                    break
                                }
                                if (c == ',') {
                                    state = SELECTOR;
                                    break
                                }
                                throw Error(SYNTAX_ERROR);
                            case QUALIFIER:
                                if (c == '.') {
                                    newQualifier();
                                    currentQualifier.attrName = 'class';
                                    currentQualifier.contains = true;
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c == '#') {
                                    newQualifier();
                                    currentQualifier.attrName = 'id';
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c == '[') {
                                    newQualifier();
                                    currentQualifier.attrName = '';
                                    state = ATTR_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c.match(WHITESPACE)) {
                                    state = SELECTOR_SEPARATOR;
                                    break
                                }
                                if (c == ',') {
                                    state = SELECTOR;
                                    break
                                }
                                throw Error(SYNTAX_ERROR);
                            case QUALIFIER_NAME_FIRST_CHAR:
                                if (c.match(validNameInitialChar)) {
                                    currentQualifier.attrValue = c;
                                    state = QUALIFIER_NAME;
                                    break
                                }
                                throw Error(SYNTAX_ERROR);
                            case QUALIFIER_NAME:
                                if (c.match(validNameNonInitialChar)) {
                                    currentQualifier.attrValue += c;
                                    break
                                }
                                if (c == '.') {
                                    newQualifier();
                                    currentQualifier.attrName = 'class';
                                    currentQualifier.contains = true;
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c == '#') {
                                    newQualifier();
                                    currentQualifier.attrName = 'id';
                                    state = QUALIFIER_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c == '[') {
                                    newQualifier();
                                    state = ATTR_NAME_FIRST_CHAR;
                                    break
                                }
                                if (c.match(WHITESPACE)) {
                                    state = SELECTOR_SEPARATOR;
                                    break
                                }
                                if (c == ',') {
                                    state = SELECTOR;
                                    break
                                }
                                throw Error(SYNTAX_ERROR);
                            case ATTR_NAME_FIRST_CHAR:
                                if (c.match(validNameInitialChar)) {
                                    currentQualifier.attrName = c;
                                    state = ATTR_NAME;
                                    break
                                }
                                if (c.match(WHITESPACE)) break;
                                throw Error(SYNTAX_ERROR);
                            case ATTR_NAME:
                                if (c.match(validNameNonInitialChar)) {
                                    currentQualifier.attrName += c;
                                    break
                                }
                                if (c.match(WHITESPACE)) {
                                    state = EQUIV_OR_ATTR_QUAL_END;
                                    break
                                }
                                if (c == '~') {
                                    currentQualifier.contains = true;
                                    state = EQUAL;
                                    break
                                }
                                if (c == '=') {
                                    currentQualifier.attrValue = '';
                                    state = VALUE_FIRST_CHAR;
                                    break
                                }
                                if (c == ']') {
                                    state = QUALIFIER;
                                    break
                                }
                                throw Error(SYNTAX_ERROR);
                            case EQUIV_OR_ATTR_QUAL_END:
                                if (c == '~') {
                                    currentQualifier.contains = true;
                                    state = EQUAL;
                                    break
                                }
                                if (c == '=') {
                                    currentQualifier.attrValue = '';
                                    state = VALUE_FIRST_CHAR;
                                    break
                                }
                                if (c == ']') {
                                    state = QUALIFIER;
                                    break
                                }
                                if (c.match(WHITESPACE)) break;
                                throw Error(SYNTAX_ERROR);
                            case EQUAL:
                                if (c == '=') {
                                    currentQualifier.attrValue = '';
                                    state = VALUE_FIRST_CHAR;
                                    break
                                }
                                throw Error(SYNTAX_ERROR);
                            case ATTR_QUAL_END:
                                if (c == ']') {
                                    state = QUALIFIER;
                                    break
                                }
                                if (c.match(WHITESPACE)) break;
                                throw Error(SYNTAX_ERROR);
                            case VALUE_FIRST_CHAR:
                                if (c.match(WHITESPACE)) break;
                                if (c == '"' || c == "'") {
                                    valueQuoteChar = c;
                                    state = QUOTED_VALUE;
                                    break
                                }
                                currentQualifier.attrValue += c;
                                state = VALUE;
                                break;
                            case VALUE:
                                if (c.match(WHITESPACE)) {
                                    state = ATTR_QUAL_END;
                                    break
                                }
                                if (c == ']') {
                                    state = QUALIFIER;
                                    break
                                }
                                if (c == "'" || c == '"') throw Error(SYNTAX_ERROR);
                                currentQualifier.attrValue += c;
                                break;
                            case QUOTED_VALUE:
                                if (c == valueQuoteChar) {
                                    state = ATTR_QUAL_END;
                                    break
                                }
                                currentQualifier.attrValue += c;
                                break;
                            case SELECTOR_SEPARATOR:
                                if (c.match(WHITESPACE)) break;
                                if (c == ',') {
                                    state = SELECTOR;
                                    break
                                }
                                throw Error(SYNTAX_ERROR)
                        }
                    }
                    switch (state) {
                        case SELECTOR:
                        case TAG_NAME:
                        case QUALIFIER:
                        case QUALIFIER_NAME:
                        case SELECTOR_SEPARATOR:
                            newSelector();
                            break;
                        default:
                            throw Error(SYNTAX_ERROR)
                    }
                    if (!selectors.length) throw Error(SYNTAX_ERROR);
                    return selectors
                };
                Selector.nextUid = 1;
                Selector.matchesSelector = (function() {
                    var element = _11.createElement('div');
                    if (typeof element['webkitMatchesSelector'] === 'function') return 'webkitMatchesSelector';
                    if (typeof element['mozMatchesSelector'] === 'function') return 'mozMatchesSelector';
                    if (typeof element['msMatchesSelector'] === 'function') return 'msMatchesSelector';
                    return 'matchesSelector'
                })();
                return Selector
            })();
            var attributeFilterPattern = /^([a-zA-Z:_]+[a-zA-Z0-9_\-:\.]*)$/;

            function validateAttribute(attribute) {
                if (typeof attribute != 'string') throw Error('Invalid request opion. attribute must be a non-zero length string.');
                attribute = attribute.trim();
                if (!attribute) throw Error('Invalid request opion. attribute must be a non-zero length string.');
                if (!attribute.match(attributeFilterPattern)) throw Error('Invalid request option. invalid attribute name: ' + attribute);
                return attribute
            }

            function validateElementAttributes(attribs) {
                if (!attribs.trim().length) throw Error('Invalid request option: elementAttributes must contain at least one attribute.');
                var lowerAttributes = {};
                var attributes = {};
                var tokens = attribs.split(/\s+/);
                for (var i = 0; i < tokens.length; i++) {
                    var name = tokens[i];
                    if (!name) continue;
                    var name = validateAttribute(name);
                    var nameLower = name.toLowerCase();
                    if (lowerAttributes[nameLower]) throw Error('Invalid request option: observing multiple case variations of the same attribute is not supported.');
                    attributes[name] = true;
                    lowerAttributes[nameLower] = true
                }
                return Object.keys(attributes)
            }

            function elementFilterAttributes(selectors) {
                var attributes = {};
                selectors.forEach(function(selector) {
                    selector.qualifiers.forEach(function(qualifier) {
                        attributes[qualifier.attrName] = true
                    })
                });
                return Object.keys(attributes)
            }
            var MutationSummary = (function() {
                function MutationSummary(opts) {
                    var _43 = this;
                    this.connected = false;
                    this.options = MutationSummary.validateOptions(opts);
                    this.observerOptions = MutationSummary.createObserverOptions(this.options.queries);
                    this.root = this.options.rootNode;
                    this.callback = this.options.callback;
                    this.elementFilter = Array.prototype.concat.apply([], this.options.queries.map(function(query) {
                        return query.elementFilter ? query.elementFilter : []
                    }));
                    if (!this.elementFilter.length) this.elementFilter = undefined;
                    this.calcReordered = this.options.queries.some(function(query) {
                        return query.all
                    });
                    this.queryValidators = [];
                    if (MutationSummary.createQueryValidator) {
                        this.queryValidators = this.options.queries.map(function(query) {
                            return MutationSummary.createQueryValidator(_43.root, query)
                        })
                    }
                    this.observer = MutationObserverCtor ? new MutationObserverCtor(function(mutations) {
                        _43.observerCallback(mutations)
                    }) : {
                        observe: function() {}
                    };
                    this.reconnect()
                }
                MutationSummary.createObserverOptions = function(queries) {
                    var observerOptions = {
                        childList: true,
                        subtree: true
                    };
                    var attributeFilter;

                    function observeAttributes(attributes) {
                        if (observerOptions.attributes && !attributeFilter) return;
                        observerOptions.attributes = true;
                        observerOptions.attributeOldValue = true;
                        if (!attributes) {
                            attributeFilter = undefined;
                            return
                        }
                        attributeFilter = attributeFilter || {};
                        attributes.forEach(function(attribute) {
                            attributeFilter[attribute] = true;
                            attributeFilter[attribute.toLowerCase()] = true
                        })
                    }
                    queries.forEach(function(query) {
                        if (query.characterData) {
                            observerOptions.characterData = true;
                            observerOptions.characterDataOldValue = true;
                            return
                        }
                        if (query.all) {
                            observeAttributes();
                            observerOptions.characterData = true;
                            observerOptions.characterDataOldValue = true;
                            return
                        }
                        if (query.attribute) {
                            observeAttributes([query.attribute.trim()]);
                            return
                        }
                        var attributes = elementFilterAttributes(query.elementFilter).concat(query.attributeList || []);
                        if (attributes.length) observeAttributes(attributes)
                    });
                    if (attributeFilter) observerOptions.attributeFilter = Object.keys(attributeFilter);
                    return observerOptions
                };
                MutationSummary.validateOptions = function(options) {
                    for (var prop in options) {
                        if (!(prop in MutationSummary.optionKeys)) throw Error('Invalid option: ' + prop)
                    }
                    if (typeof options.callback !== 'function') throw Error('Invalid options: callback is required and must be a function');
                    if (!options.queries || !options.queries.length) throw Error('Invalid options: queries must contain at least one query request object.');
                    var opts = {
                        callback: options.callback,
                        rootNode: options.rootNode || _11,
                        observeOwnChanges: !!options.observeOwnChanges,
                        oldPreviousSibling: !!options.oldPreviousSibling,
                        queries: []
                    };
                    for (var i = 0; i < options.queries.length; i++) {
                        var request = options.queries[i];
                        if (request.all) {
                            if (Object.keys(request).length > 1) throw Error('Invalid request option. all has no options.');
                            opts.queries.push({
                                all: true
                            });
                            continue
                        }
                        if ('attribute' in request) {
                            var query = {
                                attribute: validateAttribute(request.attribute)
                            };
                            query.elementFilter = Selector.parseSelectors('*[' + query.attribute + ']');
                            if (Object.keys(request).length > 1) throw Error('Invalid request option. attribute has no options.');
                            opts.queries.push(query);
                            continue
                        }
                        if ('element' in request) {
                            var requestOptionCount = Object.keys(request).length;
                            var query = {
                                element: request.element,
                                elementFilter: Selector.parseSelectors(request.element)
                            };
                            if (request.hasOwnProperty('elementAttributes')) {
                                query.attributeList = validateElementAttributes(request.elementAttributes);
                                requestOptionCount--
                            }
                            if (requestOptionCount > 1) throw Error('Invalid request option. element only allows elementAttributes option.');
                            opts.queries.push(query);
                            continue
                        }
                        if (request.characterData) {
                            if (Object.keys(request).length > 1) throw Error('Invalid request option. characterData has no options.');
                            opts.queries.push({
                                characterData: true
                            });
                            continue
                        }
                        throw Error('Invalid request option. Unknown query request.')
                    }
                    return opts
                };
                MutationSummary.prototype.createSummaries = function(mutations) {
                    if (!mutations || !mutations.length) return [];
                    var projection = new MutationProjection(this.root, mutations, this.elementFilter, this.calcReordered, this.options.oldPreviousSibling);
                    var summaries = [];
                    for (var i = 0; i < this.options.queries.length; i++) {
                        summaries.push(new Summary(projection, this.options.queries[i]))
                    }
                    return summaries
                };
                MutationSummary.prototype.checkpointQueryValidators = function() {
                    this.queryValidators.forEach(function(validator) {
                        if (validator) validator.recordPreviousState()
                    })
                };
                MutationSummary.prototype.runQueryValidators = function(summaries) {
                    this.queryValidators.forEach(function(validator, index) {
                        if (validator) validator.validate(summaries[index])
                    })
                };
                MutationSummary.prototype.changesToReport = function(summaries) {
                    return summaries.some(function(summary) {
                        var summaryProps = ['added', 'removed', 'reordered', 'reparented', 'valueChanged', 'characterDataChanged'];
                        if (summaryProps.some(function(prop) {
                                return summary[prop] && summary[prop].length
                            })) return true;
                        if (summary.attributeChanged) {
                            var attrNames = Object.keys(summary.attributeChanged);
                            var attrsChanged = attrNames.some(function(attrName) {
                                return !!summary.attributeChanged[attrName].length
                            });
                            if (attrsChanged) return true
                        }
                        return false
                    })
                };
                MutationSummary.prototype.observerCallback = function(mutations) {
                    if (!this.options.observeOwnChanges) this.observer.disconnect();
                    var summaries = this.createSummaries(mutations);
                    this.runQueryValidators(summaries);
                    if (this.options.observeOwnChanges) this.checkpointQueryValidators();
                    if (this.changesToReport(summaries)) this.callback(summaries);
                    if (!this.options.observeOwnChanges && this.connected) {
                        this.checkpointQueryValidators();
                        this.observer.observe(this.root, this.observerOptions)
                    }
                };
                MutationSummary.prototype.reconnect = function() {
                    if (this.connected) throw Error('Already connected');
                    this.observer.observe(this.root, this.observerOptions);
                    this.connected = true;
                    this.checkpointQueryValidators()
                };
                MutationSummary.prototype.takeSummaries = function() {
                    if (!this.connected) throw Error('Not connected');
                    var summaries = this.createSummaries(this.observer.takeRecords());
                    return this.changesToReport(summaries) ? summaries : undefined
                };
                MutationSummary.prototype.disconnect = function() {
                    var summaries = this.takeSummaries();
                    this.observer.disconnect();
                    this.connected = false;
                    return summaries
                };
                MutationSummary.NodeMap = NodeMap;
                MutationSummary.parseElementFilter = Selector.parseSelectors;
                MutationSummary.optionKeys = {
                    'callback': true,
                    'queries': true,
                    'rootNode': true,
                    'oldPreviousSibling': true,
                    'observeOwnChanges': true
                };
                return MutationSummary
            })();
            var TreeMirrorClient = (function() {
                function TreeMirrorClient(target, mirror, testingQueries) {
                    var _43 = this;
                    this.target = target;
                    this.mirror = mirror;
                    this.nextId = 1;
                    this.knownNodes = new MutationSummary.NodeMap();
                    this.mutationSummaries = [];
                    _385();
                    _383();
                    var serializedRoot = this.serializeNode(target, true);
                    var rootId = serializedRoot.id;
                    this.mirror.initialize(rootId, [serializedRoot]);
                    var queries = [{
                        all: true
                    }];
                    if (testingQueries) queries = queries.concat(testingQueries);
                    this.mutationSummaries.push(new MutationSummary({
                        rootNode: target,
                        callback: function(summaries) {
                            _43.applyChanged(summaries)
                        },
                        queries: queries
                    }))
                }
                TreeMirrorClient.prototype.addShadowRoot = function(shadow) {
                    if (!this.isKnownNode(shadow)) {
                        var data = this.serializeNode(shadow, true);
                        if (data) {
                            data.parentNode = this.serializeNode(shadow.host);
                            this.mirror.applyChanged({
                                removed: [],
                                addedOrMoved: [data],
                                attributes: [],
                                text: []
                            })
                        }
                    }
                    var _43 = this;
                    this.mutationSummaries.push(new MutationSummary({
                        rootNode: shadow,
                        callback: function(summaries) {
                            _43.applyChanged(summaries)
                        },
                        queries: [{
                            all: true
                        }]
                    }))
                };
                TreeMirrorClient.prototype.disconnect = function() {
                    this.mutationSummaries.forEach(function(mutationSummary) {
                        mutationSummary.disconnect()
                    });
                    this.mutationSummaries = []
                };
                TreeMirrorClient.prototype.rememberNode = function(node) {
                    var id = this.nextId++;
                    this.knownNodes.set(node, id);
                    return id
                };
                TreeMirrorClient.prototype.forgetNode = function(node) {
                    this.knownNodes.deleteNode(node)
                };
                TreeMirrorClient.prototype.isKnownNode = function(node) {
                    return !!this.knownNodes.get(node)
                };
                TreeMirrorClient.prototype.serializeNode = function(node, isInitial) {
                    if (node === null || _189(node, 'no-mouseflow-dom')) return null;
                    if (_189(node, _282)) return null;
                    var id = this.knownNodes.get(node);
                    if (id !== undefined) {
                        if (isInitial) return _10('Found duplicated node during initial DOM: ' + id, _14());
                        return {
                            id: id
                        }
                    }
                    var data = {
                        nodeType: node.nodeType,
                        id: this.rememberNode(node)
                    };
                    if (_9._148(node, 'data-mf-replace') || _9._148(node, 'data-mf-replace-inner')) return null;
                    var _441 = _511(node),
                        _444 = !!_189(node.parentNode, _282);
                    if (_441 || _444) {
                        _10('CSS Blacklist blocked node. NodeType: ' + node.nodeType + '. ' + (node.nodeType === 1 ? 'Tag: ' + node.tagName : ''), _14());
                        _193(node, _282, true);
                        if (isInitial && node.childNodes.length) {
                            var _56;
                            for (_56 = node.firstChild; _56; _56 = _56.nextSibling) this.serializeNode(_56, true)
                        }
                        if (_444) return null
                    }
                    if (isInitial) {
                        if (_189(node.parentNode, 'no-mouseflow-dom') || _9._136(node, 'no-mouseflow-dom')) _193(node, 'no-mouseflow-dom', 'initial')
                    } else if (_189(node.parentNode, 'no-mouseflow-dom')) {
                        _193(node, 'no-mouseflow-dom', 'inherit');
                        return null
                    }
                    switch (data.nodeType) {
                        case 9:
                        case 11:
                            if (isInitial) this.serializeChildNodes(node, data);
                            this.serializeAdoptedStyleSheets(node, data);
                            break;
                        case 10:
                            data.name = node.name;
                            data.publicId = node.publicId;
                            data.systemId = node.systemId;
                            break;
                        case 8:
                        case 3:
                            if (node.nodeType === 8 && node.textContent.indexOf('[if') !== 0 && node.textContent.indexOf('<![endif]') !== 0) break;
                            data.textContent = _539(node).replace(_682, ' ');
                            if (node.parentNode && node.parentNode.tagName === 'STYLE' && /^\s*$/.test(node.textContent)) {
                                data.textContent = _319(node.parentNode.sheet)
                            }
                            break;
                        case 1:
                            if (node.tagName === 'IFRAME' && node.parentNode && node.parentNode.tagName === 'HEAD') {
                                data.nodeType = 8;
                                data.textContent = '';
                                break
                            }
                            data.tagName = node.tagName;
                            if (node.attributes['data-mf-replace']) {
                                var _222 = node.attributes['data-mf-replace'].value;
                                data = _468.call(this, _222, function(_26) {
                                    var _15 = this.serializeNode(_26, true);
                                    _15.id = data.id;
                                    this.knownNodes.set(_26, _15.id);
                                    return _15
                                })[0];
                                break
                            }
                            if (node.tagName === 'SCRIPT') {
                                if (/\/?aura_prod\.js(\?.+)?$/.test(node.src)) {
                                    _10('Salesforce Aura script added');
                                    _927();
                                    _924()
                                }
                                break
                            }
                            data.attributes = {};
                            if (_441) {
                                var _455 = _629(node);
                                if (node.id) data.attributes.id = node.id;
                                if (node.name) data.attributes.name = node.name;
                                data.attributes.style = (node.style ? node.style.cssText + '; ' : '') + 'width: ' + _455.width + 'px; height: ' + _455.height + 'px;' + (_3.getComputedStyle(node).display === 'inline' ? ' display: inline-block;' : '');
                                data.attributes.class = node.className + ' mf-excluded';
                                break
                            }
                            for (var i = 0; i < node.attributes.length; i++) {
                                var attr = node.attributes[i];
                                if (_770(attr.name.toLowerCase())) continue;
                                if (attr.name.toLowerCase() === 'value' && node.tagName === 'INPUT') data.attributes.value = _208(node);
                                else data.attributes[attr.name] = attr.value
                            }
                            if (node.tagName === 'IFRAME' && node.offsetWidth <= 1 && node.offsetHeight <= 1) data.attributes.src = '';
                            if (isInitial && node.tagName === 'INPUT') {
                                if (!data.attributes.value && node.value) data.attributes.value = _208(node);
                                if (!data.attributes.checked && node.checked) data.attributes.checked = node.checked
                            }
                            if (isInitial && node.tagName === 'OPTION' && !data.attributes.selected && node.selected) data.attributes.selected = node.selected;
                            if (node.tagName === 'INPUT' && node.type === 'hidden' && data.attributes.value) data.attributes.value = '';
                            if (node.attributes['data-mf-replace-inner']) {
                                var _222 = node.attributes['data-mf-replace-inner'].value;
                                data.childNodes = _468.call(this, _222, function(_26) {
                                    return this.serializeNode(_26, true)
                                });
                                break
                            }
                            if (isInitial) {
                                this.serializeChildNodes(node, data);
                                if (node.shadowRoot) {
                                    if (!data.childNodes) data.childNodes = [];
                                    data.childNodes.push(this.serializeNode(node.shadowRoot, true))
                                }
                                var _266 = node.tagName === 'LINK' && node.href && (node.href.indexOf('blob:') === 0 || _7.enableCssRecording);
                                if (_266) {
                                    try {
                                        var _ = node.sheet.cssRules
                                    } catch (e) {
                                        _266 = false
                                    }
                                }
                                var _703 = node.tagName === 'STYLE' && !node.textContent;
                                if (_266) {
                                    data.tagName = 'STYLE';
                                    data.href = undefined;
                                    data.rel = undefined
                                }
                                if (_266 || _703) {
                                    data.childNodes = [{
                                        nodeType: 3,
                                        textContent: _319(node.sheet)
                                    }]
                                }
                            }
                            break
                    }
                    return data
                };
                TreeMirrorClient.prototype.serializeAddedAndMoved = function(added, reparented, reordered) {
                    var _43 = this;
                    var all = added.concat(reparented).concat(reordered);
                    var parentMap = new MutationSummary.NodeMap();
                    all.forEach(function(node) {
                        var parent = node.parentNode;
                        var children = parentMap.get(parent);
                        if (!children) {
                            children = new MutationSummary.NodeMap();
                            parentMap.set(parent, children)
                        }
                        children.set(node, true)
                    });
                    var moved = [];
                    var noMouseflowDom = [];
                    parentMap.keys().forEach(function(parent) {
                        var children = parentMap.get(parent);
                        var keys = children.keys();
                        while (keys.length) {
                            var node = keys[0];
                            while (node.previousSibling && children.has(node.previousSibling)) node = node.previousSibling;
                            var _162 = false;
                            while (node && children.has(node)) {
                                if (_471(node)) _162 = true;
                                else if (_472(node.previousSibling)) _162 = false;
                                if (!_162) {
                                    var data = _43.serializeNode(node);
                                    if (data) {
                                        var _268 = node.previousSibling;
                                        while (_268 && !data.previousSibling) {
                                            data.previousSibling = _43.serializeNode(_268);
                                            _268 = _268.previousSibling
                                        }
                                        data.parentNode = _43.serializeNode(node.parentNode);
                                        if (data.parentNode) moved.push(data)
                                    }
                                    if (_9._136(node, 'no-mouseflow-dom')) noMouseflowDom.push(node)
                                }
                                children.deleteNode(node);
                                node = node.nextSibling
                            }
                            var keys = children.keys()
                        }
                    });
                    noMouseflowDom.forEach(function(node) {
                        _193(node, 'no-mouseflow-dom', 'initial', true)
                    });
                    return moved
                };
                TreeMirrorClient.prototype.serializeAttributeChanges = function(attributeChanged) {
                    var _43 = this;
                    var map = new MutationSummary.NodeMap();
                    Object.keys(attributeChanged).forEach(function(attrName) {
                        attributeChanged[attrName].forEach(function(element) {
                            if (element.hasAttribute && element.hasAttribute('data-mf-replace') || _9._148(element, 'data-mf-replace') || _9._148(element, 'data-mf-replace-inner')) {
                                return
                            }
                            if (_9._136(element, 'no-mouseflow-dom')) _193(element, 'no-mouseflow-dom', 'initial', true);
                            var record = map.get(element);
                            if (!record) {
                                record = _43.serializeNode(element);
                                if (record) {
                                    record.attributes = {};
                                    map.set(element, record)
                                }
                            }
                            if (record) {
                                if (attrName.toLowerCase() === 'value' && element.tagName === 'INPUT') record.attributes.value = _208(element);
                                else if (attrName === 'mf_adoptedStyleSheets') this.serializeAdoptedStyleSheets(element, record);
                                else record.attributes[attrName] = element.getAttribute(attrName)
                            }
                        })
                    });
                    return map.keys().map(function(node) {
                        return map.get(node)
                    })
                };
                TreeMirrorClient.prototype.serializeTextChanges = function(textChanges) {
                    var _43 = this;
                    return textChanges.map(function(node) {
                        var data = _43.serializeNode(node);
                        if (data) {
                            if (node.tagName === 'STYLE' && /^\s*$/.test(node.textContent)) data.textContent = _319(node.sheet);
                            else data.textContent = _539(node)
                        }
                        return data
                    })
                };
                TreeMirrorClient.prototype.applyChanged = function(summaries) {
                    _385();
                    _383();
                    var summary = summaries[0];
                    ['removed', 'added', 'reparented', 'reordered', 'attributeChanged', 'characterDataChanged'].forEach(function(key) {
                        if (!summary[key]) summary[key] = []
                    });
                    var _43 = this;
                    var removed = summary.removed.map(function(node) {
                        return _43.serializeNode(node)
                    });
                    var moved = this.serializeAddedAndMoved(summary.added, summary.reparented, summary.reordered);
                    var attributes = this.serializeAttributeChanges(summary.attributeChanged);
                    var text = this.serializeTextChanges(summary.characterDataChanged);
                    this.mirror.applyChanged({
                        removed: _274(removed),
                        addedOrMoved: _274(moved),
                        attributes: _274(attributes),
                        text: _274(text)
                    });
                    summary.removed.forEach(function(node) {
                        _43.forgetNode(node)
                    })
                };
                TreeMirrorClient.prototype.serializeChildNodes = function(node, data) {
                    if (!node.childNodes.length) return;
                    data.childNodes = [];
                    var _162 = false;
                    for (var child = node.firstChild; child; child = child.nextSibling) {
                        if (_471(child)) _162 = true;
                        else if (_472(child.previousSibling)) _162 = false;
                        if (_162) continue;
                        var serializedChild = this.serializeNode(child, true);
                        if (serializedChild) {
                            data.childNodes.push(serializedChild)
                        }
                    }
                };
                TreeMirrorClient.prototype.serializeAdoptedStyleSheets = function(_26, _15) {
                    if (!_26.adoptedStyleSheets) return;
                    var _43 = this;
                    _15.css = _26.adoptedStyleSheets.map(function(_105) {
                        var _279 = {
                            id: _43.knownNodes.get(_105)
                        };
                        if (!_279.id) {
                            _279.id = _43.rememberNode(_105);
                            _279.text = _319(_105)
                        }
                        return _279
                    })
                };
                return TreeMirrorClient
            })();

            function _274(_751) {
                return _751.filter(function(_173) {
                    return _173
                })
            }

            function _385() {
                _394 = [];
                if (!_7._246.length) return;
                try {
                    var _226 = _138(_7._246.join(','), _11);
                    for (var i = 0; i < _226.length; i++) {
                        _394.push(_226[i])
                    }
                } catch (e) {}
            }

            function _383() {
                _393 = [];
                if (!_7._241.length) return;
                try {
                    var _226 = _138(_7._241.join(','), _11);
                    for (var i = 0; i < _226.length; i++) {
                        _393.push(_226[i])
                    }
                } catch (e) {}
            }

            function _138(_8, _34) {
                try {
                    var _58 = [];
                    _8.split(',').forEach(function(_8) {
                        var _39 = _8.split(' > :document-fragment: > ', 1);
                        _34.querySelectorAll(_39[0]).forEach(function(_1) {
                            if (_39[1] && _1.shadowRoot) {
                                _138(_39[1], _1.shadowRoot).forEach(function(_1) {
                                    _58.push(_1)
                                })
                            } else {
                                _58.push(_1)
                            }
                        })
                    });
                    return _58
                } catch (_50) {
                    _10('Could not get element from selector: ' + ex.message)
                }
            }

            function _468(_222, _762) {
                var _15 = [];
                var _433 = _11.createElement('div');
                _433.innerHTML = _222;
                for (var i = 0; i < _433.childNodes.length; i++) {
                    var _763 = _433.childNodes[i];
                    var _764 = _762.call(this, _763);
                    _15.push(_764)
                }
                return _15
            }

            function _471(_26) {
                return _26 && _26.nodeType === 8 && _26.textContent.trim().toLowerCase().indexOf('mouseflowexcludestart') === 0
            }

            function _472(_26) {
                return _26 && _26.nodeType === 8 && _26.textContent.trim().toLowerCase().indexOf('mouseflowexcludeend') === 0
            }

            function _770(_386) {
                return _771.test(_386)
            }

            function _319(_105) {
                var _243 = '';
                if (!_105 || !_105.cssRules) return _243;
                for (var _2 = 0; _2 < _105.cssRules.length; _2++) {
                    _243 += _105.cssRules[_2].cssText
                }
                return _243
            }

            function _788() {
                _103({
                    _17: _134 + 'install?websiteId=' + _7._49,
                    _153: function() {
                        _10('Website installed signal sent.', _14())
                    },
                    _80: function() {
                        _10('Error in transmitCrossDomain - could not signal that website was installed.', _14())
                    }
                })
            }

            function _789(_156) {
                _103({
                    _17: _134 + 'config?websiteId=' + _7._49,
                    _153: function(_72) {
                        var _719 = _9._151(_72._332);
                        _7.keyLogging = _719.enableKeystrokes;
                        _10('Fetched recording script configuration.');
                        _156()
                    },
                    _80: function() {
                        _10('Error in transmitCrossDomain - could not fetch recording script configuration.');
                        _156()
                    }
                })
            }

            function _47() {
                if (_73) {
                    _10('Recording script is already started', _14());
                    return
                }
                if (!_563) {
                    _10('Recording not started - recording script is not initialized', _14());
                    return
                }
                _10('Recording starting, version ' + _210 + (_7.gdprEnabled ? ', GDPR mode enabled.' : ''), _14());
                if (!_531()) return;
                _73 = true;
                _832();
                _385();
                _383();
                _12._52 = _872(_0._491);
                if (_748()) _706();
                _0._186 = _210;
                _721(_12._52)
            }

            function _721(_52) {
                var _469 = _792();
                var _17 = _134 + 'init?v=' + _210 + '&p=' + _7._49 + '&s=' + _12._55 + '&page=' + _12._52 + '&ret=' + (_12._219 ? '1' : '0') + '&u=' + _12._143 + '&href={href}' + '&url=' + _70(_178._225()) + '&ref={referrer}' + '&title=' + _70(_11.title) + '&res=' + _3.screen.width + 'x' + _3.screen.height + '&tz=' + _855() + '&to=' + _12._538 + '&dnt=' + _12._533 + '&ori=' + (typeof _3.orientation != 'undefined' ? _3.orientation : '') + '&dw=' + _11.documentElement.clientWidth + '&dh=' + _11.documentElement.clientHeight + '&time=' + _783() + '&pxr=' + (typeof _3.devicePixelRatio != 'undefined' ? _3.devicePixelRatio : 1) + (_469.length > 0 ? '&fw=' + _469.join(',') : '') + '&gdpr=' + (_7.gdprEnabled ? 1 : 0);
                var _169 = _7.location.href;
                var _475 = _62._292 - _17.length - 6;
                if (_70(_169).length > _475) _169 = _169.split('#')[0];
                if (_70(_169).length > _475) _169 = _169.split('?')[0];
                _17 = _17.replace('{href}', _70(_169));
                var _168 = _11.referrer;
                if (_17.replace('{referrer}', _70(_168)).length > _62._292) {
                    if (_168.indexOf('?') > -1) _168 = _168.split('?')[0];
                    if (_17.replace('{referrer}', _70(_168)).length > _62._292) _168 = ''
                }
                _17 = _17.replace('{referrer}', _70(_168));
                _794();
                var _460 = _726(_62._292 - _17.length - 6);
                _17 += _718(_460);
                _103({
                    _17: _17,
                    _153: function(_72) {
                        if (_72._332 === 'Recording blocked') {
                            _10('Recording not started - mf_block cookie set to 1', _14());
                            return
                        }
                        _460.forEach(function(_126) {
                            _570(_126.key, _126.value)
                        });
                        _206 = true;
                        _731(_52);
                        _128._47(_12, _0, _369, _99, _548, _337, _10);
                        _3._mfq = new _456(_3._mfq);
                        _738();
                        _773()
                    },
                    _828: true,
                    _80: function() {
                        _10('Error in transmitCrossDomain - recording not starting.', _14())
                    }
                });
                if (_0._227) {
                    if (_0._227 !== _121(_7.path || _7.location.pathname)) _337();
                    _0._227 = null
                }
                _857();
                _0._85 = {
                    x: _3.pageXOffset,
                    y: _3.pageYOffset
                };
                if (_0._85.x !== 0 && _0._85.y !== 0) _512();
                _0._221 = 1;
                _354();
                _10('Recording started. Session: ' + _12._55 + ', Page: ' + _12._52 + ', Last page: ' + _12._357, _14())
            }

            function _748() {
                return !_12._55 || !_889() || (_0._186 && _0._186 !== '0' && _0._186 !== _210) || (+new Date() - _0._273) > _62._362
            }

            function _706() {
                _10('Starting new session');
                var _737 = _12._55;
                _12._55 = _344();
                _0._129 = [];
                _12._234 = 0;
                if (_12._55 === _737) throw Error('New session ID is identical to the old session ID. This might be because Math.random has been overwritten.')
            }

            function _69(_735) {
                if (!_73) return;
                _160 = false;
                _467();
                _454();
                _24._161(_328);
                _24._161(_329);
                _24._161(_326);
                _24._119(_251);
                if (_215) {
                    _24._119(_215);
                    _618()
                }
                if (_237) {
                    _24._119(_237);
                    _474()
                }
                _740();
                if (!_735) _27(_6._734, {});
                _307();
                _206 = false;
                try {
                    _137.disconnect()
                } catch (e) {}
                _128._69();
                _354();
                _0 = _438();
                _10('Recording stopped', _14());
                _73 = false;
                _348 = false
            }

            function _545(_29, _90) {
                _7._716();
                if (_73) {
                    _69()
                }
                _7.htmlDelay = _7.newPageViewHtmlDelay;
                if (_29) _7.path = _29.toString();
                if (_90) _7.location = _90;
                _47();
                _325(0)
            }

            function _803() {
                _69();
                _851('mf_' + _7._49);
                if (_3.name && ((_3.name.length === 35 && _3.name.indexOf('mf_') === 0) || (_7.crossDomainSupport && _3.name.indexOf('mf_' + _7._49) === 0))) _3.name = ''
            }

            function _731(_52) {
                if (_7.htmlFetchMode === 'post') {
                    _24._57(function() {
                        _729(_52)
                    }, _7.htmlDelay)
                } else {
                    _10('Html not sent due to mouseflowHtmlFecthMode setting', _14())
                }
            }

            function _729(_52) {
                _137 = new TreeMirrorClient(_11, {
                    initialize: function(rootId, children) {
                        if (_52 !== _12._52) return;
                        _160 = true;
                        _830({
                            data: {
                                f: 'initialize',
                                args: [rootId, children]
                            }
                        }, _11.documentElement.innerHTML.length)
                    },
                    applyChanged: function(summary) {
                        if (_14() - _0._350 < 30000) {
                            if (summary.removed.length || summary.addedOrMoved.length || summary.attributes.length || summary.text.length) {
                                _827({
                                    data: {
                                        f: 'applyChanged',
                                        args: [summary.removed, summary.addedOrMoved, summary.attributes, summary.text]
                                    }
                                })
                            }
                        }
                    }
                })
            }

            function _800(_23, _4, _728, _473) {
                if (!_73 || !_23) return;
                _4 = _4 || '';
                if (!_570(_23, _4)) {
                    _10('Variable already set to same value, not triggering callback.', _14());
                    return
                }
                var _15 = {
                    key: _23.toString(),
                    value: _4.toString() || '',
                    scope: _728 || 'session',
                    overwrite: _473 === undefined ? true : _473
                };
                _0._122.push(_15);
                _24._119(_237);
                _237 = _24._57(_474, 1000)
            }

            function _726(limit) {
                if (!_3._mfq.length) return [];
                var _122 = [];
                var _461 = 0;
                for (var _45 = 0; _45 < _3._mfq.length; _45++) {
                    var _51 = _3._mfq[_45];
                    if (!_51 || !_51.length || _51[0] !== 'setVariable') continue;
                    if ((_51.length > 3 && _51[3] !== 'session') || (_51.length > 4 && _51[4] !== true)) continue;
                    var _23 = _51[1];
                    var _4 = _51[2];
                    if (!_23 || !_4) continue;
                    if (_571(_23) !== -1) continue;
                    var _723 = _70(_23) + '=' + _70(_4);
                    _461 += _723.length + 1;
                    if (_461 - 1 >= limit) break;
                    _122.push({
                        key: _23,
                        value: _4
                    });
                    _3._mfq.splice(_45, 1);
                    _45--
                }
                return _122
            }

            function _718(_122) {
                var _465 = _122.map(function(_126) {
                    return _70(_126.key) + '=' + _70(_126.value)
                }).join('&');
                return _465 ? '&vars=' + _70(_465) : ''
            }

            function _474() {
                _237 = 0;
                for (var _2 = 0; _2 < _0._122.length; _2++) {
                    var _126 = _0._122[_2];
                    _10('Setting custom variable: ' + _126.key + ' = ' + _126.value + ', overwrite: ' + (_126.overwrite === undefined ? true : _126.overwrite), _14())
                }
                _369('variable', _0._122);
                _0._122 = []
            }

            function _99(_714) {
                _27(_6._99, {
                    target: _714
                })
            }

            function _801() {
                _27(_6._99, {
                    target: '*'
                })
            }

            function _799(_713) {
                if (_7.gdprEnabled) _10('User identification not allowed (script in GDPR mode)', _14());
                else if (!_73) _369('identify', {
                    userId: _12._143,
                    userName: _713
                })
            }

            function _548(_37) {
                if (!_73) return;
                _10('Registering form submit attempt on this page', _14());
                _536(_37)
            }

            function _337(_37) {
                if (!_73) return;
                var _404 = _14();
                if (_0._141 || _404 > 5000) {
                    _10('Registering form submit success on this page', _14());
                    if (!_0._141) _27(_6._296, {
                        target: _37
                    });
                    _27(_6._466, {});
                    _0._141 = undefined
                } else {
                    _10('Registering form submit success on previous page', _14());
                    _358([{
                        _20: _6._466
                    }])
                }
            }

            function _797(_37) {
                if (!_73) return;
                var _404 = _14();
                if (_0._141 || _404 > 5000) {
                    _10('Registering form submit failure on this page', _14());
                    if (!_0._141) _27(_6._296, {
                        target: _37
                    });
                    _27(_6._191, {});
                    _146(_93._191);
                    _0._141 = undefined
                } else {
                    _10('Registering form submit failure on previous page', _14());
                    _358([{
                        _20: _6._191
                    }, {
                        _20: _6._95,
                        _22: {
                            x: _93._191._4,
                            y: 0
                        }
                    }, {
                        _20: _6._99,
                        _22: {
                            target: _93._191._19
                        }
                    }])
                }
            }

            function _536(_37) {
                if (!_73 || !_37 || _276(_403(_37))) return;
                if ((+new Date()) - _0._439 < 20) return;
                _0._439 = +new Date();
                _27(_6._296, {
                    target: _37
                });
                if (!_0._399[_37]) {
                    _0._399[_37] = _402(_37)
                } else {
                    _697(_37, _402(_37), _0._399[_37])
                }
                _692(_37);
                _761(_37);
                _0._141 = +new Date()
            }

            function _146(_95, _40) {
                if (!_73 || !_95) return;
                var _4 = +_95._4;
                if (!_4) return;
                var _19 = _95._19;
                if (_19) {
                    if (_0._440.indexOf(_19) !== -1) return;
                    _0._440.push(_19)
                } else {
                    _19 = 'custom-friction' + (_95._557 ? ('-' + _95._557) : '')
                }
                var _709 = {
                    value: _19,
                    target: _40 ? _40 : '',
                    x: _4 > 0 ? _4 : 0,
                    y: _4 < 0 ? _4 * -1 : 0
                };
                _27(_6._95, _709)
            }

            function _738() {
                if (_12._89.length < 2) return;
                var _202 = _12._89[_12._89.length - 2];
                var _211 = _12._89[_12._89.length - 1];
                var _174 = _121(_7.path || _7.location.pathname);
                if (_202._174 === _174 && _202._174 !== _211._174 && _0._83 - _211._83 < 10000) {
                    _358([{
                        _20: _6._95,
                        _22: {
                            x: _93._453._4,
                            y: 0
                        }
                    }, {
                        _20: _6._99,
                        _22: {
                            target: _93._453._19
                        }
                    }])
                }
            }

            function _773() {
                if (_12._89.length < 4) return;
                var _452 = _12._89[_12._89.length - 5];
                var _202 = _12._89[_12._89.length - 4];
                if (_0._83 - _202._83 < 30000) {
                    if (_452 && _202._83 - _452._83 < 30000) return;
                    _487(_202._41, [{
                        _20: _6._95,
                        _22: {
                            x: _93._437._4,
                            y: 0
                        }
                    }, {
                        _20: _6._99,
                        _22: {
                            target: _93._437._19
                        }
                    }])
                }
            }

            function _429() {
                if (!_73) return;
                _128._429.apply(_128, arguments)
            }

            function _769() {
                return {
                    _55: '',
                    _52: '',
                    _143: '',
                    _219: false,
                    _538: +('ontouchstart' in _3 && _7.touchEvents),
                    _533: (navigator.doNotTrack === 'yes' || navigator.doNotTrack == 1 || window.doNotTrack == 1 || navigator.msDoNotTrack == 1) ? 1 : 0,
                    _234: 0,
                    _357: '',
                    _89: [],
                    _232: [],
                    _265: _768(),
                    _142: null
                }
            }

            function _768() {
                try {
                    _3.sessionStorage.setItem('mf_supportsSessionStorage', '1');
                    var _767 = _3.sessionStorage.getItem('mf_supportsSessionStorage') === '1';
                    _3.sessionStorage.removeItem('mf_supportsSessionStorage');
                    return _767
                } catch (e) {
                    return false
                }
            }

            function _438() {
                return {
                    _491: new Date(),
                    _83: +new Date(),
                    _214: +new Date(),
                    _273: +new Date(),
                    _15: [],
                    _220: [],
                    _38: [],
                    _242: [],
                    _522: [],
                    _139: [],
                    _115: [],
                    _505: 0,
                    _476: 0,
                    _181: 0,
                    _521: '',
                    _439: 0,
                    _247: [],
                    _176: [],
                    _223: [],
                    _440: [],
                    _124: {
                        x: 0,
                        y: 0
                    },
                    _510: {
                        x: 0,
                        y: 0
                    },
                    _450: {
                        x: 0,
                        y: 0
                    },
                    _478: -100,
                    _85: {
                        x: 0,
                        y: 0
                    },
                    _224: {
                        x: 0,
                        y: 0
                    },
                    _205: {},
                    _335: -100,
                    _331: -100,
                    _150: {
                        x: 0,
                        y: 0
                    },
                    _368: [],
                    _826: 0,
                    _170: [],
                    _122: [],
                    _221: 1,
                    _350: 0,
                    _489: 0,
                    _399: {},
                    _129: [],
                    _457: 0,
                    _462: 0,
                    _442: 0,
                    _232: [],
                    _240: 0,
                    _245: 0,
                    _127: null,
                    _118: _772(),
                    _625: 0,
                    _345: false,
                    _186: 0,
                    _525: false,
                    _529: false
                }
            }

            function _402(_37) {
                var _175 = _403(_37);
                var _32 = {};
                if (!_175) {
                    _10('Form not found: ' + _37, _14());
                    return _32
                }
                for (var i = 0; i < _175.elements.length; i++) {
                    var _5 = _175.elements[i];
                    var _19 = _5.name;
                    if (!_19 || _19 == '') continue;
                    if (_5.tagName && /input|select|button|textarea/.test(_5.tagName.toLowerCase()) && (!_5.type || !/hidden|submit|reset|image|button/.test(_5.type.toLowerCase()))) {
                        var _4 = _218(_5);
                        if (!_32[_19]) _32[_19] = _4;
                        else if (_4 && _4 != '') _32[_19] += ', ' + _4
                    }
                }
                return _32
            }

            function _761(_37) {
                var _175 = _403(_37);
                if (!_175 || !_12._265) return;
                var _2, _59;
                for (_2 = 0; _2 < _175.elements.length; _2++) {
                    var _5 = _175.elements[_2];
                    if (_5.tagName && /input|textarea/.test(_5.tagName.toLowerCase()) && (!_5.type || !/hidden|submit|reset|image|file|button|password/.test(_5.type.toLowerCase()))) {
                        var _4 = _218(_5);
                        if (!_4 || _4.length <= 3 || _515(_5) || _395(_5)) continue;
                        var _94 = _443(_4);
                        if (_94.length === 0) continue;
                        var _180 = [];
                        for (_59 = 0; _59 < _94.length; _59++) {
                            _180.push(_94[_59]._167)
                        }
                        var _182 = false;
                        for (_59 = 0; _59 < _0._118.length; _59++) {
                            var _229 = _0._118[_59];
                            _182 = _180.length === _229.length && _451(_229, _180) === 0;
                            if (_182) break
                        }
                        if (!_182) _0._118.push(_180)
                    }
                }
                if (_0._118.length) {
                    _0._118 = _0._118.slice(-100);
                    _759(_0._118)
                }
            }

            function _759(_38) {
                try {
                    _3.localStorage.setItem('mf_replaceHashes', _9._78(_38))
                } catch (e) {}
            }

            function _772() {
                try {
                    return _9._151(_3.localStorage.getItem('mf_replaceHashes')) || []
                } catch (e) {
                    return []
                }
            }

            function _756(_4) {
                if (_0._118.length === 0) return _4;
                var _94 = _443(_4);
                for (var _2 = 0; _2 < _0._118.length; _2++) {
                    var _229 = _0._118[_2];
                    var _177;
                    do {
                        var _108 = _177 !== undefined ? _177 + 1 : 0;
                        _177 = _451(_94, _229, _108);
                        if (_177 !== -1) {
                            var _47 = _94[_177]._47;
                            var _199 = _94[_177 + _229.length - 1]._199;
                            var _754 = _809('*', _199 - _47);
                            _4 = _4.slice(0, _47) + _754 + _4.slice(_199)
                        }
                    } while (_177 !== -1)
                }
                return _4
            }

            function _443(_4) {
                var _180 = [];
                var _47;

                function _447(_199) {
                    if (_47 === undefined) return;
                    var _446 = _4.slice(_47, _199);
                    _180.push({
                        _47: _47,
                        _199: _47 + _446.length,
                        _167: _121(_446)
                    });
                    _47 = undefined
                }
                for (var _2 = 0; _2 < _4.length; _2++) {
                    var _365 = _4[_2];
                    if (_810(_365)) {
                        if (_47 === undefined) {
                            _47 = _2
                        }
                    } else {
                        _447(_2)
                    }
                }
                _447();
                return _180
            }

            function _451(_187, _94, _108) {
                for (var _2 = _108 || 0; _2 < _187.length; _2++) {
                    if (_2 + _94.length > _187.length) break;
                    if (_746(_187, _94, _2)) return _2
                }
                return -1
            }

            function _746(_187, _94, _108) {
                var _182 = false;
                for (var _2 = _108 || 0, _59 = 0; _2 < _187.length && _59 < _94.length; _2++, _59++) {
                    _182 = _187[_2]._167 === _94[_59];
                    if (!_182) break
                }
                return _182
            }

            function _218(_1) {
                var _4 = '';
                if (_1.type && /radio|checkbox/.test(_1.type.toLowerCase())) _4 = _1.checked ? _1.value : '';
                else if (_1.tagName && /select/.test(_1.tagName.toLowerCase()) && _1.options)
                    for (var j = 0; j < _1.options.length; j++) {
                        var _379 = _1.options[j].selected ? _1.options[j].value : '';
                        if (_379 && _379 != '') _4 += (_4 && _4 != '' ? ',' : '') + _379
                    } else _4 = _1.value;
                return _4 || ''
            }

            function _208(_1) {
                if (_1.type === 'password') return '*';
                var _4 = _218(_1);
                if (_519(_1)) {
                    _4 = _4.replace(/./g, _518(_1.type))
                } else if (_520(_1) && !_395(_1)) {
                    _4 = _4.slice(0, 2) + _4.slice(2).replace(/./g, _518(_1.type))
                }
                return _4
            }

            function _539(_1) {
                var _197 = _1.textContent;
                if (_1.nodeType === 3 && _1.parentNode) _1 = _1.parentNode;
                var _477 = _756(_197);
                if (_477 !== _197 && _7.replaceLastFormValues) _197 = _477;
                if (_667(_1)) _197 = _197.replace(/./g, '*');
                return _197
            }

            function _395(_1) {
                return _9._136(_1, 'mouseflow') || _393.indexOf(_1) !== -1
            }

            function _276(_1) {
                if (!_1) return false;
                if (_1[NodeMap.ID_PROP]) return !!_189(_1, _282);
                while (_1) {
                    if (_511(_1)) return true;
                    _1 = _1.parentNode
                }
                return false
            }

            function _511(_1) {
                return _394.indexOf(_1) !== -1
            }

            function _513(_1) {
                return _9._136(_1, 'no-mouseflow') || (!_7.keyLogging && !_395(_1)) || _276(_1)
            }

            function _519(_1) {
                return (_513(_1) || _515(_1) || _678(_1)) && _516(_1) && !_669.test(_1.type)
            }

            function _667(_1) {
                return (_1.isContentEditable || _1.tagName === 'TEXTAREA') && _513(_1)
            }

            function _678(_1) {
                return _7.gdprEnabled && (_661(_1) || _705(_1))
            }

            function _515(_1) {
                return _1.maxLength === 16 || _375(_1.value)
            }

            function _375(_4) {
                return _660.test(_4)
            }

            function _661(_1) {
                return /email/i.test(_1.type) || _662.test(_1.value)
            }

            function _705(_1) {
                return /tel/i.test(_1.type)
            }

            function _520(_1) {
                return _516(_1) && /^\d{3}[^a-z]*$/i.test(_1.value)
            }

            function _516(_1) {
                return _1.tagName === 'INPUT' || _1.tagName === 'TEXTAREA'
            }

            function _518(_680) {
                return /number/i.test(_680) ? '0' : '*'
            }

            function _860(_44) {
                return _519(_44.target) || _520(_44.target) ? '191' : (_44.which && _44.which.toString()) || ''
            }

            function _861(_1) {
                var _523 = _65(_1);
                var _287 = _0._522[_523];
                var _300 = _208(_1);
                var _32 = _300;
                if (_287 && _287.length > 3 && _300.indexOf(_287) === 0) _32 = '+||' + _300.substring(_287.length);
                _0._522[_523] = _300;
                return _32
            }

            function _697(_37, _401, _400) {
                try {
                    var _248 = [];
                    for (var _61 in _401) {
                        if (typeof _400[_61] == 'undefined' || _401[_61] != _400[_61]) _248.push(_61)
                    }
                    for (var _61 in _400) {
                        if (typeof _401[_61] == 'undefined' && _248.indexOf(_61) === -1) _248.push(_61)
                    }
                    for (var i = 0; i < _248.length; i++) {
                        _27(_6._535, {
                            target: _37 + '||' + _248[i]
                        })
                    }
                } catch (_50) {
                    _10('Error in _addChangedFieldEvents: ' + _50.message, _14())
                }
            }

            function _692(_37) {
                try {
                    var _259 = _691(_37);
                    for (var i = 0; i < _259.length; i++) {
                        _27(_6._537, {
                            target: _37 + '||' + _259[i]
                        })
                    }
                } catch (_50) {
                    _10('Error in getBlankFields: ' + _50.message, _14())
                }
            }

            function _691(_37) {
                var _259 = [];
                var _38 = _402(_37);
                for (var _61 in _38)
                    if (_38[_61] == '') _259.push(_61);
                return _259
            }

            function _403(_37) {
                for (var j = 0; j < _11.forms.length; j++)
                    if (_65(_11.forms[j]) == _37) {
                        return _11.forms[j]
                    }
                return null
            }

            function _875() {
                _686();
                _702()
            }

            function _354() {
                _684();
                _532()
            }

            function _686() {
                var _524 = _654('mf_user').split('|');
                for (var _2 = 0; _2 < _524.length; _2++) {
                    var _79 = _524[_2];
                    switch (_2) {
                        case 0:
                            _12._143 = _79;
                            break;
                        case 1:
                            _12._232 = _79 !== '' ? _79.split(/[$,]+/) : [];
                            break
                    }
                }
                _12._219 = _12._143 !== '';
                if (_12._143 === '' || _12._143 === '1') _12._143 = _344();
                _0._525 = true
            }

            function _684() {
                if (!_0._525) return;
                _655('mf_user', [_12._143, _12._232.join('$')].join('|'), 1, _340(_90))
            }

            function _702() {
                var _526 = _654('mf_' + _7._49).split('|');
                for (var _2 = 0; _2 < _526.length; _2++) {
                    var _79 = _526[_2];
                    switch (_2) {
                        case 0:
                            _12._55 = _79;
                            break;
                        case 1:
                            _12._89 = _679(_79, _12._52);
                            break;
                        case 2:
                            _0._273 = parseInt(_79, 10);
                            break;
                        case 3:
                            _0._129 = _79 !== '' ? _79.split('.') : [];
                            break;
                        case 4:
                            _12._234 = parseInt(_79, 10);
                            break;
                        case 5:
                            _0._227 = _79;
                            break;
                        case 6:
                            _0._232 = _79 !== '' ? _79.split(/[$,]+/) : [];
                            break;
                        case 7:
                            _12._219 = _79 === '1';
                            break;
                        case 8:
                            _0._186 = _79;
                            break;
                        case 9:
                            _12._142 = parseFloat(_79);
                            break
                    }
                }
                if (!_12._55) _12._55 = _7.sessionId || _689();
                if (!_12._142) _12._142 = _693();
                var _211 = _12._89[_12._89.length - 1];
                if (_211) _12._357 = _211._41;
                _0._529 = true
            }

            function _689() {
                var sessionId = _528();
                return sessionId && sessionId.length === 32 ? sessionId : null
            }

            function _693() {
                var recordingRate = _528();
                return /^\d+\.\d+$/.test(recordingRate) ? parseFloat(recordingRate) : null
            }

            function _528() {
                return _7.crossDomainSupport && _3.name && _3.name.indexOf('mf_' + _7._49) === 0 ? _3.name.split('=')[1] : null
            }

            function _532() {
                if (!_0._529) return;
                _655('mf_' + _7._49, [_12._55, _665(), _0._273, _0._129.join('.'), _12._234, _0._227 || '', _0._232.join('$'), _12._219 ? '1' : '0', _0._186, _12._142].join('|'), 0, _340(_90));
                if (_7.crossDomainSupport) _3.name = 'mf_' + _7._49 + '=' + (_12._55 || _12._142)
            }

            function _679(_4, _52) {
                return _4.split(/[$,]+/).map(function(_230) {
                    var _38 = _230.split('.');
                    return {
                        _41: _38[0],
                        _174: _38[1],
                        _83: +_38[2]
                    }
                }).filter(function(p) {
                    return p._41 !== _52
                }).slice(-5)
            }

            function _665() {
                return _12._89.concat([{
                    _41: _12._52,
                    _174: _121(_7.path || _7.location.pathname),
                    _83: _0._83
                }]).slice(-6).map(function(_230) {
                    return _230._41 + '.' + _230._174 + '.' + _230._83
                }).join('$')
            }
            var _318 = '__mouseflow_properties__';
            var _282 = 'is-blacklisted';

            function _189(_26, _23) {
                if (!_26) return null;
                var _192 = _26[_318];
                return _192 ? _192[_23] : null
            }

            function _193(_26, _23, _4, _668) {
                var _192 = _26[_318];
                if (!_192) _192 = _26[_318] = {};
                _192[_23] = _4;
                if (_668 && _26.childNodes && _26.childNodes.length) {
                    for (var _56 = _26.firstChild; _56; _56 = _56.nextSibling) {
                        _193(_56, _23, _4, true)
                    }
                }
            }

            function _530(_26) {
                delete _26[_318];
                if (_26.childNodes && _26.childNodes.length) {
                    for (var _56 = _26.firstChild; _56; _56 = _56.nextSibling) {
                        _530(_56)
                    }
                }
            }

            function _740() {
                _530(_3.document.body)
            }

            function _832() {
                _0._83 = +new Date();
                _0._214 = +new Date();
                _328 = _24._295(_512, _62._507);
                _329 = _24._295(_842, _62._775);
                _326 = _24._295(_333, _62._874);
                _251 = _24._57(_631, _62._362)
            }

            function _812() {
                if (!_572(_7.location.hostname)) return false;
                if (_612()) {
                    _10('Recording not started - browser is IE8 or older');
                    return false
                }
                return _531()
            }

            function _531() {
                _875();
                if (_7.forceStart) return true;
                if (_887()) {
                    _10('Recording not started - session ID is invalid.', _14());
                    return false
                }
                if (_885()) {
                    _10('Recording not started - honored "do not track" browser setting.', _14());
                    return false
                }
                if (_888()) {
                    _10('Recording not started - the browser was identified as a bot.', _14());
                    return false
                }
                if (!_238._407(_154)) {
                    _10('Recording not started - page does not match page rules', _14());
                    return false
                }
                var _312 = _876.filter(function(_76) {
                    return _238._164(_76)
                }).sort(_882)[0];
                if (_312) {
                    _185 = _312._185;
                    _10('Recording rate set from page recording rule: ' + _312._20 + ', "' + _312._4 + '"', _14())
                }
                if (!_12._142) _12._142 = _884();
                var _540 = _12._55 || _12._142 <= _185;
                if (!_540) _10('Recording not started - recordingRate or blocked', _14());
                _532();
                return _540
            }

            function _882(_883, _890) {
                return _890._185 - _883._185
            }

            function _884() {
                return _109.round(_109.random() * 10000000) / 100000
            }

            function _885() {
                return _7.honorDoNotTrack && _12._533
            }

            function _887() {
                return _12._55 && _12._55.length != 32
            }

            function _888() {
                if (_7.enableBots) return false;
                return _3.navigator.webdriver || /ptst|headlesschrome|lighthouse/i.test(_3.navigator.userAgent)
            }

            function _889() {
                return (_12._234 < _62._873)
            }

            function _872(_100) {
                return _306(_100.getMonth() + 1, 2) + _306(_100.getDate(), 2) + _306(_100.getSeconds(), 2) + _306(_100.getMilliseconds(), 3).slice(1) + _344()
            }

            function _306(_870, _303) {
                return (new Array(_303 + 1).join('0') + _870).slice(-_303)
            }

            function _855() {
                var _534 = new Date();
                return _109.max(new Date(_534.getFullYear(), 0, 1).getTimezoneOffset(), new Date(_534.getFullYear(), 6, 1).getTimezoneOffset())
            }
            var _484 = false;

            function _857() {
                try {
                    _18._25(_11, 'scroll', 'body,div,section,main,article,ul,.mf-scroll-listen', function(_5) {
                        if (_5.target === _11) {
                            _0._85 = {
                                x: _3.pageXOffset,
                                y: _3.pageYOffset
                            }
                        } else if (_5.delegatedTarget) {
                            _811(_65(_5.delegatedTarget), _5.delegatedTarget.scrollLeft, _5.delegatedTarget.scrollTop)
                        }
                    }, {
                        _33: true,
                        _598: true
                    });
                    _18._25(_11, 'mousemove', function(_5) {
                        _0._124 = {
                            x: _5.pageX,
                            y: _5.pageY
                        }
                    }, {
                        _33: true
                    });
                    _18._25(_11.documentElement, 'mouseleave', function() {
                        _27(_6._858, {});
                        _146(_93._194)
                    }, {
                        _33: true,
                        _201: true
                    });
                    _18._25(_11, 'mousedown', function(_5) {
                        _881(_5, _5.target)
                    }, {
                        _33: true
                    });
                    _18._25(_11, 'mouseup', function(_5) {
                        _853(_5, _5.target)
                    }, {
                        _33: true
                    });
                    _18._25(_11, 'click', 'a,input,select,button,.mf-listen-click', function(_5) {
                        _796(_5, _5.delegatedTarget || _5.target)
                    }, {
                        _33: true,
                        _598: true
                    });
                    try {
                        var _374 = _808();
                        if (_374) {
                            _18._25(_11, 'mouseenter', _374, function(_5) {
                                _27(_6._308, {
                                    x: _5.pageX,
                                    y: _5.pageY,
                                    target: _65(_5.target)
                                })
                            }, {
                                _33: true,
                                _201: true
                            });
                            _18._25(_11, 'mouseleave', _374, function(_5) {
                                _27(_6._194, {
                                    x: _5.pageX,
                                    y: _5.pageY,
                                    target: _65(_5.target)
                                })
                            }, {
                                _33: true,
                                _201: true
                            })
                        }
                    } catch (_50) {
                        _10('Error in getHoverSelectors: ' + _50.message, _14())
                    }
                    _18._25(_11, 'focus', 'input,textarea,select,button', function(_5) {
                        _27(_6._508, {
                            target: _65(_5.target)
                        })
                    }, {
                        _33: true
                    });
                    _18._25(_11, 'blur', 'input,textarea,select,button', function(_5) {
                        _27(_6._509, {
                            target: _65(_5.target)
                        })
                    }, {
                        _33: true
                    });
                    _18._25(_11, 'keypress', 'input,textarea,select', function(_5) {
                        if (_5.target && _5.target.type !== 'password') {
                            _27(_6._349, {
                                target: _65(_5.target)
                            })
                        }
                    }, {
                        _33: true
                    });
                    _18._25(_11, 'keydown', 'input,textarea,select', function(_5) {
                        if (_5.target && _5.target.type !== 'password') {
                            _27(_6._286, {
                                target: _65(_5.target),
                                value: _860(_5)
                            })
                        }
                    }, {
                        _33: true
                    });
                    _18._25(_11, 'keyup', 'input,textarea,select', function(_5) {
                        if (_5.target && _5.target.type !== 'password') {
                            _27(_6._285, {
                                target: _65(_5.target),
                                value: _861(_5.target)
                            });
                            if (_375(_218(_5.target)) && _7.autoTagPayments) _99('payment')
                        }
                    }, {
                        _33: true
                    });
                    _18._25(_11, 'change', 'input,textarea,select', function(_5) {
                        _27(_6._235, {
                            target: _65(_5.target),
                            value: _208(_5.target)
                        });
                        if (_5.target && ['password', 'file'].indexOf(_5.target.type) === -1 && _375(_218(_5.target)) && _7.autoTagPayments) _99('payment')
                    }, {
                        _33: true
                    });
                    _18._25(_11, 'submit', 'form', function(_5) {
                        _536(_65(_5.target))
                    }, {
                        _33: true
                    });
                    if (_12._538) {
                        _18._25(_11, 'touchstart', function(_5) {
                            if (!_5.originalEvent || !_5.originalEvent.touches) return;
                            var _75 = _5.originalEvent.touches;
                            if (_75.length > 0) {
                                _27(_6._355, {
                                    x: _75[0].pageX,
                                    y: _75[0].pageY
                                })
                            }
                            if (_75.length > 1) {
                                _27(_6._341, {
                                    x: _75[1].pageX,
                                    y: _75[1].pageY
                                })
                            }
                        }, {
                            _33: true
                        });
                        _18._25(_11, 'touchmove', function(_5) {
                            if (!_5.originalEvent || !_5.originalEvent.touches) return;
                            var _75 = _5.originalEvent.touches;
                            var _270 = _14();
                            var _387 = _270 - _62._507;
                            if (_75.length > 0 && _0._478 < _387) {
                                _27(_6._361, {
                                    x: _75[0].pageX,
                                    y: _75[0].pageY
                                });
                                if (_75.length > 1) {
                                    _27(_6._367, {
                                        x: _75[1].pageX,
                                        y: _75[1].pageY
                                    })
                                }
                                _0._478 = _270;
                                var _868 = !_196(_281(), _0._150);
                                if (_868) {
                                    _0._150 = _281();
                                    _27(_6._283, _0._150);
                                    if (_0._331 < _387) {
                                        _27(_6._283, _0._150);
                                        _0._331 = _270
                                    }
                                    var _869 = _0._176[_0._176.length - 0];
                                    if (new Date() - _869 < 1000) {
                                        _0._176.push(+new Date());
                                        _0._176 = _0._176.slice(-5);
                                        if (_0._223.length + _0._176.length === 5) {
                                            _146(_93._479)
                                        }
                                    }
                                }
                                _0._85 = {
                                    x: _3.pageXOffset,
                                    y: _3.pageYOffset
                                };
                                if (_0._335 < _387 && !_196(_0._85, _0._224)) {
                                    _0._224 = _0._85;
                                    _27(_6._305, _0._85);
                                    _0._335 = _270
                                }
                            }
                        }, {
                            _33: true
                        });
                        _18._25(_11, 'touchend', function(_5) {
                            if (!_5.originalEvent || !_5.originalEvent.touches) return;
                            var _75 = _5.originalEvent.touches;
                            if (_75.length === 0) _27(_6._299, {
                                x: 0,
                                y: 0
                            });
                            if (_75.length > 1) _27(_6._322, {
                                x: 0,
                                y: 0
                            })
                        }, {
                            _33: true
                        });
                        _18._25(_11, 'orientationchange', function() {
                            _27(_6._366, {
                                x: _3.orientation,
                                y: 0
                            });
                            _0._223.push(+new Date());
                            _0._223 = _0._223.slice(-5);
                            if (_0._223.length + _0._176.length === 5) {
                                _146(_93._479)
                            }
                        }, {
                            _33: true
                        })
                    }
                    _18._25(_3, _781(), function() {
                        if (_0._141) {
                            if (+new Date() - _0._141 < _7.registerSubmitTimeout) {
                                _10('Registering formSubmit', _14());
                                _0._227 = _121(_7.path || _7.location.pathname)
                            } else {
                                _10('Not registering formSubmit. Timeout exceeded.', _14())
                            }
                        }
                        _69()
                    }, {
                        _33: true
                    });
                    var _481 = _3.onerror;
                    _3.onerror = function(_116, _17, _419, _427, _381) {
                        var _915 = new Date() - _0._245;
                        if (_915 > 1000 && _0._240 < 50) {
                            _0._245 = +new Date();
                            var _380 = 'Malformed error';
                            if (_116 && _116.message) _380 = _116.message;
                            else if (typeof _116 === 'string') _380 = _116;
                            _0._127 = {
                                _116: _380,
                                _17: typeof _17 === 'string' ? _17 : 'Malformed URL',
                                _419: '' + _419,
                                _427: '' + _427,
                                _905: _381 && _381.stack && _381.stack.substring(0, 800)
                            };
                            if (_0._181 !== 0 && _0._245 - _0._181 < 100) {
                                _146(_93._501, _0._521);
                                _128._423('clickError');
                                _498()
                            }
                        }
                        if (_481) _481.apply(this, arguments)
                    };
                    if (!_484) {
                        if (_7.proxyAttachShadow) _277();
                        _894();
                        _921();
                        if (_7.enableSpa) _920();
                        _484 = true
                    }
                    if (_7.keyLogging) _908()
                } catch (_50) {
                    _10('Error in bindDomEvents: ' + _50.message, _14())
                }
            }
            var oldPushState;

            function _920() {
                var history = window.history;
                var location = window.location;
                oldPushState = history.pushState;
                history.pushState = function(state) {
                    if (typeof history.onpushstate === 'function') history.onpushstate({
                        state: state
                    });
                    return oldPushState.apply(history, arguments)
                };
                window.onpopstate = history.onpushstate = function() {
                    setTimeout(function() {
                        _545()
                    }, 100)
                }
            }

            function _921() {
                var _922 = CSSStyleSheet.prototype.insertRule;
                var _485;
                var _203 = [];
                CSSStyleSheet.prototype.insertRule = function() {
                    _922.apply(this, arguments);
                    if (!_160) return;
                    var _26 = this.ownerNode;
                    if (_203.indexOf(_26) < 0) _203.push(_26);
                    _24._119(_485);
                    _485 = _24._57(function() {
                        _203 = _203.filter(function(_26) {
                            return _26 && _137.isKnownNode(_26)
                        });
                        _137.applyChanged([{
                            characterDataChanged: _203
                        }]);
                        _203 = []
                    }, 200)
                }
            }
            var _435 = HTMLElement.prototype.attachShadow;
            var _280 = false;

            function _924() {
                var _83 = new Date();
                var _926 = _3.setInterval(function() {
                    var _925 = new Date() - _83;
                    if (HTMLElement.prototype.attachShadow !== _435 || _925 > 10000) {
                        _3.clearInterval(_926);
                        _277()
                    }
                }, 200)
            }

            function _927() {
                if (!_280 || HTMLElement.prototype.attachShadow !== _486) return;
                _10('Resetting "attach shadow" proxy');
                delete HTMLElement.prototype.attachShadow;
                _280 = false
            }

            function _277() {
                if (_280) return;
                if (!_160) {
                    _3.setTimeout(_277, 200);
                    return
                }
                _10('Setting up "attach shadow" proxy');
                _430(_11.body);
                _435 = HTMLElement.prototype.attachShadow;
                HTMLElement.prototype.attachShadow = _486;
                _280 = true
            }

            function _486() {
                var _110 = _435.apply(this, arguments);
                if (_160 && _137.isKnownNode(this)) _137.addShadowRoot(_110);
                return _110
            }

            function _430(_1) {
                for (; _1; _1 = _1.nextElementSibling) {
                    if (_1.shadowRoot) {
                        _137.addShadowRoot(_1.shadowRoot);
                        _430(_1.shadowRoot.firstElementChild)
                    }
                    _430(_1.firstElementChild)
                }
            }

            function _894() {
                if (!_160) return;
                _490(Document.prototype, 'adoptedStyleSheets', {
                    _417: _488
                });
                _490(ShadowRoot.prototype, 'adoptedStyleSheets', {
                    _417: _488
                })
            }

            function _488() {
                if (!_160) return;
                _137.applyChanged([{
                    attributeChanged: {
                        'mf_adoptedStyleSheets': [this]
                    }
                }])
            }

            function _490(_26, _492, _244) {
                var _414 = Object.getOwnPropertyDescriptor(_26, _492);
                if (!_244 || !_414) return;
                Object.defineProperty(_26, _492, {
                    get: function() {
                        var _4 = _414.get.apply(this, arguments);
                        if (_244._898) _244._898.apply(this, arguments);
                        return _4
                    },
                    set: function() {
                        _414.set.apply(this, arguments);
                        if (_244._417) _244._417.apply(this, arguments)
                    }
                })
            }

            function _498() {
                if (_0._127) {
                    _0._240++;
                    var _906 = 'website=' + _7._49 + '&session=' + _12._55 + '&page=' + _12._52 + '&type=error&data=' + _70(_9._78({
                        seq: _0._240,
                        errorMsg: _0._127._116,
                        url: _0._127._17,
                        line: _0._127._419,
                        col: _0._127._427,
                        stack: _0._127._905
                    }));
                    _27(_6._80, {
                        x: _0._240,
                        y: 0
                    });
                    _10('JS error ' + _0._240 + ', msg: ' + _0._127._116, _14());
                    _103({
                        _17: _134 + 'data',
                        _15: _906
                    });
                    _0._127 = null
                }
            }

            function _467() {
                _18._550();
                if (_424) _24._161(_424)
            }

            function _908() {
                _0._242 = _499();
                _424 = _24._295(function() {
                    _854(_917(_499(), _0._242))
                }, 200)
            }

            function _499() {
                var _500 = _11.querySelectorAll('input,textarea,select');
                var _502 = {};
                for (var i = 0; i < _500.length; i++) {
                    var _61 = _500[i];
                    if (_9._136(_61, 'no-mouseflow')) continue;
                    if (!_929(_61, ['text', 'textarea', 'select-one'])) continue;
                    _502[_65(_61)] = _208(_61)
                }
                return _502
            }

            function _929(_61, _903) {
                return _61.type && new RegExp(_903.join('|'), 'i').test(_61.type)
            }

            function _917(_242, _504) {
                var _252 = [];
                for (var _23 in _242) {
                    var _4 = _242[_23];
                    var _503 = _504[_23];
                    if (_503 !== undefined && _503 !== _4) _252.push({
                        id: _23,
                        value: _4
                    });
                    _504[_23] = _4
                }
                return _252
            }

            function _854(_252) {
                if (_14() - _0._489 > 100) {
                    for (var i = 0; i < _252.length; i++) {
                        var _35 = _252[i];
                        _27(_6._235, {
                            target: _35.id,
                            value: _35.value
                        })
                    }
                }
            }

            function _881(_5, _1) {
                if ((+new Date()) - _0._505 < 20) return;
                _0._505 = +new Date();
                _27(_6._309, {
                    x: _5.pageX,
                    y: _5.pageY,
                    target: _65(_1)
                })
            }

            function _853(_5, _1) {
                if ((+new Date()) - _0._476 < 20) return;
                _0._476 = +new Date();
                var _135 = _321(_1, _5.pageX, _5.pageY);
                if (!_135 && _1.firstElementChild) _135 = _321(_1.firstElementChild, _5.pageX, _5.pageY);
                if (_135) _27(_6._313, {
                    x: _135.x,
                    y: _135.y,
                    target: _65(_1)
                })
            }

            function _796(_5, _1) {
                if ((+new Date()) - _0._181 < 20) return;
                var _40 = _65(_1);
                _0._181 = +new Date();
                _0._521 = _40;
                _27(_6._315, {
                    x: _5.pageX,
                    y: _5.pageY,
                    target: _40
                });
                _0._247.push(_0._181);
                _0._247 = _0._247.slice(-5);
                if (_0._247[4] - _0._247[0] < 1000) {
                    _146(_93._798, _40);
                    _128._423('clickRage')
                }
                if (_0._181 !== 0 && _0._245 !== 0 && _0._181 - _0._245 < 100) {
                    _146(_93._501, _40);
                    _128._423('clickError');
                    _498()
                }
            }

            function _811(_41, _804, _805) {
                _0._205[_41] = {
                    x: _804,
                    y: _805
                };
                if (_269) return;
                _269 = _24._57(_496, 100);

                function _496() {
                    _269 = null;
                    var _497 = true;
                    for (var _40 in _0._205) {
                        if (_0._205.hasOwnProperty(_40)) {
                            _27(_6._343, {
                                x: _0._205[_40].x,
                                y: _0._205[_40].y,
                                target: _40
                            });
                            _497 = false
                        }
                    }
                    if (!_497) {
                        _0._205 = {};
                        _269 = _24._57(_496, 100)
                    }
                }
            }

            function _321(_26, _806, _807) {
                var _42 = _629(_26);
                if (_42 == null || !_42.height || !_42.width) return null;
                return {
                    x: parseInt((_806 - _0._85.x - _42.x) / parseFloat(_42.width) * 65535),
                    y: parseInt((_807 - _0._85.y - _42.y) / parseFloat(_42.height) * 65535)
                }
            }

            function _808() {
                var _493 = {};
                var _494 = /[^(]:hover/;
                if (_7.useAllHoverSelectors) {
                    for (var _2 = 0; _2 < _11.styleSheets.length; _2++) {
                        var _117 = _11.styleSheets[_2];
                        try {
                            var _243 = _117.cssRules ? _117.cssRules : _117.rules;
                            for (var _59 = 0; _59 < _243.length; _59++) {
                                var _495 = _117.cssRules[_59];
                                if (!_494.test(_495.selectorText)) continue;
                                var _36 = _495.selectorText.split(',');
                                var _8;
                                for (var _364 = 0; _364 < _36.length; _364++) {
                                    _8 = _36[_364].replace(/^\s+|\s+$/g, '');
                                    if (_494.test(_8)) {
                                        _8 = _8.substring(0, _8.indexOf(':hover'));
                                        _8 = _793(_8);
                                        _493[_8] = true
                                    }
                                }
                            }
                        } catch (_50) {
                            _10('Cannot inspect external css file, :hover support may fail: ' + _117.href)
                        }
                    }
                }
                var _36 = ['a', 'input', 'select', 'button', 'textarea', 'li', 'canvas', '.mf-listen'];
                for (_8 in _493) {
                    _8 = _8.replace(/^\s+|\s+$/g, '');
                    if (_8 != '' && _8 != 'a' && !_209(_8, ' a') && !_209(_8, ' select') && !_209(_8, ' submit') && !_209(_8, ' textarea') && !_209(_8, ' li')) _36.push(_8)
                }
                _36.push.apply(_36, _7._271);
                return _36.slice(0, 1000).join(',')
            }

            function _793(_35) {
                var _506 = [/:active/g, /:visited/g, /::before/g, /:before/g, /::after/g, /:after/g, /::first-letter/g, /::first-line/g, /::selection/g];
                for (var _2 = 0; _2 < _506.length; _2++) _35 = _35.replace(_506[_2], '');
                return _35
            }

            function _70(_791) {
                try {
                    return _3.encodeURIComponent(_791)
                } catch (_50) {
                    _10('Encode error: ' + _50.message, _14());
                    return ''
                }
            }

            function _823(_4) {
                return _4.replace(/%/g, '%25').replace(/\|{3}/g, '%7C%7C%7C')
            }

            function _27(_20, _22) {
                if (!_73) return;
                if (_0._15.length === 0) _0._214 = +new Date();
                var _48 = _483(_20, _22, _0._139, _0._38);
                if (!_48) return;
                if (_813(_20)) {
                    _24._119(_251);
                    _251 = _24._57(_631, _62._362);
                    _0._350 = _14();
                    _0._273 = +new Date()
                }
                if (_527(_20)) _0._489 = _14();
                var _779 = _616(_0._115) + (_48._111 ? _314.encode(_48._111).length : 0),
                    _780 = _616(_0._38) + (_48._4 ? _314.encode(_48._4).length : 0);
                var totalDataSize = _0._15.length + _48._15.length + _779 + _780;
                if (totalDataSize > _62._482) {
                    _307();
                    if (_48._4 !== undefined) _48._15[_48._15.length - 1] = 0;
                    _0._15 = _48._15;
                    _0._15[0] = 0;
                    _0._15[1] = 0;
                    if (_48._111 !== undefined) _0._115.push(_48._111);
                    if (_48._4 !== undefined) _0._38.push(_48._4)
                } else {
                    _0._15 = _0._15.concat(_48._15);
                    if (_48._111 !== undefined) _0._115.push(_48._111);
                    if (_48._4 !== undefined) _0._38.push(_48._4);
                    if (_20 === _6._299) {
                        _307()
                    }
                }
            }

            function _358(_351) {
                _487(_12._357, _351)
            }

            function _487(_52, _351) {
                var _15 = [],
                    _139 = [],
                    _115 = [],
                    _38 = [];
                _351.forEach(function(_44) {
                    if (!_44._22) _44._22 = {};
                    var _48 = _483(_44._20, _44._22, _139, _38);
                    if (!_48) return;
                    _15 = _15.concat(_48._15);
                    if (_48._111 !== undefined) _115.push(_48._111);
                    if (_48._4 !== undefined) _38.push(_48._4)
                });
                var _258 = 0;
                var _336 = _459(_258, _15, _115, _38);
                _103({
                    _17: _134 + 'events?w=' + _7._49 + '&s=' + _12._55 + '&p=' + _52 + '&li=0&lh=0&ls=0&d=' + _336
                })
            }

            function _483(_20, _22, _139, _38) {
                var _111;
                var _4 = _22.value;
                var _347 = -1;
                var _15 = [];
                _15._620 = false;
                if (_784(_20) && !_785(_22)) return null;
                if (_22.value && _22.value.length > _62._482) {
                    _10('Event, type: ' + _20 + ', skipping due to large value, details: ' + _9._78(_22), _14());
                    return null
                }
                _120(2, _633(), _15);
                _120(1, _20, _15);
                if (_22.x < 0) _22.x = 0;
                if (_22.y < 0) _22.y = 0;
                if (_22.x > 65534) _22.x = 65534;
                if (_22.y > 65534) _22.y = 65534;
                if (_22.x != undefined) _120(2, _22.x, _15);
                if (_22.y != undefined) _120(2, _22.y, _15);
                if (_22.target != undefined) {
                    if (typeof _22.target == 'object' && _22.target.id != undefined) _22.target = _22.target.id;
                    if (_20 !== _6._99 && _22.target && _22.target.indexOf('||') === -1) {
                        var _1 = _849(_22.target);
                        if (_1) {
                            if (_276(_1)) return null;
                            if (_1.form && !_276(_1.form)) _22.target = _65(_1.form) + '||' + _22.target
                        }
                    }
                    for (var _2 = 0; _2 < _139.length; _2++) {
                        if (_139[_2] === _22.target) {
                            _347 = _2;
                            break
                        }
                    }
                }
                if (_787(_20)) {
                    if (!_22.target) {
                        _120(2, 65535, _15)
                    } else if (_347 === -1) {
                        var _480 = _139.length;
                        _120(2, _480, _15);
                        _111 = _480 + ':' + _22.target;
                        _139.push(_22.target)
                    } else {
                        _120(2, _347, _15)
                    }
                }
                if (_20 !== _6._289 && _20 !== _6._255) _10('Event, type: ' + _20 + ', time: ' + _14() + ', details: ' + _9._78(_22), _14());
                if (_802(_20)) {
                    if (_4 instanceof Array) _4 = _4.join(', ');
                    _120(1, _38.length, _15)
                }
                if (_15._620) {
                    _10('Event, type: ' + _20 + ', skipping due to overflow in temp data, details: ' + _9._78(_22), _14());
                    return null
                }
                return {
                    _15: _15,
                    _111: _111,
                    _4: _4
                }
            }

            function _633() {
                return +new Date() - _0._214
            }

            function _783() {
                return _3.performance && _3.performance.timing.domLoading > 0 ? _0._491 - _3.performance.timing.domLoading : 0
            }

            function _544() {
                return _3.performance && _3.performance.timing.loadEventStart > 0 && _3.performance.timing.fetchStart > 0 ? _3.performance.timing.loadEventStart - _3.performance.timing.fetchStart : 0
            }

            function _784(_20) {
                return [_6._283, _6._305, _6._289, _6._309, _6._313, _6._315, _6._308, _6._194, _6._566, _6._80, _6._355, _6._361, _6._299, _6._366, _6._341, _6._367, _6._322, _6._327, _6._517, _6._324, _6._514, _6._338, _6._54, _6._343, _6._255, _6._95].indexOf(_20) !== -1
            }

            function _785(_22) {
                return _22.x !== undefined && _22.y !== undefined && !isNaN(_22.x) && !isNaN(_22.y)
            }

            function _787(_20) {
                return [_6._309, _6._313, _6._315, _6._308, _6._194, _6._349, _6._285, _6._235, _6._508, _6._509, _6._296, _6._99, _6._327, _6._324, _6._338, _6._286, _6._537, _6._535, _6._343, _6._255, _6._95].indexOf(_20) !== -1
            }

            function _802(_20) {
                return [_6._285, _6._235, _6._286, _6._95].indexOf(_20) !== -1
            }

            function _813(_20) {
                return _814(_20) || _527(_20) || _841(_20)
            }

            function _814(_20) {
                return [_6._289, _6._309, _6._313, _6._315, _6._305, _6._308, _6._194, _6._255].indexOf(_20) !== -1
            }

            function _527(_20) {
                return [_6._349, _6._285, _6._235, _6._286].indexOf(_20) !== -1
            }

            function _841(_20) {
                return [_6._355, _6._361, _6._299, _6._366, _6._341, _6._367, _6._322, _6._327, _6._517, _6._324, _6._514, _6._338].indexOf(_20) !== -1
            }

            function _512() {
                if (!_196(_281(), _0._150)) {
                    _0._150 = _281();
                    _27(_6._283, _0._150);
                    _0._331 = _14()
                }
                if (!_196(_0._124, _0._510)) {
                    _0._510 = _0._124;
                    _27(_6._289, _0._124)
                }
                if (!_196(_0._85, _0._224)) {
                    _0._224 = _0._85;
                    _27(_6._305, _0._85);
                    _0._335 = _14()
                }
            }

            function _842() {
                if (!_196(_0._124, _0._450)) {
                    _0._450 = _0._124;
                    var _464 = _11.elementFromPoint(_0._124.x - _0._85.x, _0._124.y - _0._85.y);
                    var _135 = _321(_464, _0._124.x, _0._124.y);
                    if (_135) {
                        _27(_6._255, {
                            x: _135.x,
                            y: _135.y,
                            target: _65(_464)
                        })
                    }
                }
            }

            function _307() {
                var _258 = _0._214 - _0._83;
                var _336 = _459(_258, _0._15, _0._115, _0._38);
                _0._220.push(_336);
                _0._15 = [];
                _0._38 = [];
                _0._115 = [];
                _0._214 = +new Date();
                if (_14() > _62._817) {
                    _10('Pageview over max.time, stopping.', _14());
                    _467();
                    _24._161(_328);
                    _24._161(_329);
                    _24._161(_326);
                    _24._119(_251);
                    _206 = false
                } else {
                    _820()
                }
            }

            function _459(_258, _15, _115, _38) {
                var _254 = [];
                _120(3, _258, _254);
                _120(2, _15.length, _254);
                _254 = _254.concat(_15);
                return _836.e(_254) + '.' + _617(_115 || []) + '.' + _617(_38 || [])
            }

            function _820() {
                if (_206 && _0._220.length > 0) {
                    if (_0._221 == 1) {
                        _12._234++
                    }
                    var _87 = _12._265 ? _346() : [];
                    for (var _2 = 0; _2 < _0._220.length; _2++) {
                        _87.push({
                            _17: _134 + 'events?w=' + _7._49 + '&s=' + _12._55 + '&p=' + _12._52 + '&q=' + _0._221 + '&li=' + _0._457 + '&lh=' + _0._462 + '&ls=' + _0._442 + '&d=' + _0._220[_2]
                        });
                        _0._221++;
                        _0._457 = _0._350;
                        _0._462 = _0._150.y;
                        _0._442 = _0._224.y
                    }
                    _0._220 = [];
                    if (_12._265) {
                        _458(_87.slice(-10));
                        _463()
                    } else {
                        for (var _2 = 0; _2 < _87.length; _2++) {
                            _103(_87[_2])
                        }
                    }
                    if (_0._221 > _62._825) _69()
                }
            }

            function _463() {
                if (_0._345) return;
                var _16 = _346().slice(0, 1)[0];
                if (_16) {
                    _0._345 = true;
                    _16._153 = _16._80 = function() {
                        _458(_346().slice(1));
                        _0._345 = false;
                        _24._57(_463, 1)
                    };
                    _103(_16)
                }
            }

            function _346() {
                return _9._151(_3.sessionStorage.getItem('mf_transmitQueue')) || []
            }

            function _458(_87) {
                _3.sessionStorage.setItem('mf_transmitQueue', _9._78(_87))
            }

            function _103(_16) {
                if (!_16 || !_16._17) return;
                _354();
                if (_549() && _3.XDomainRequest) {
                    try {
                        _16._17 = _774(_372(_16._17, '0'));
                        var _104 = new _3.XDomainRequest();
                        _104.open(_16._15 ? 'POST' : 'GET', _16._17);
                        _104.onload = function() {
                            if (_16._153) _16._153(_470(_104))
                        };
                        _104.onerror = function() {
                            if (_16._80) _16._80(_470(_104))
                        };
                        _104.onprogress = function() {
                            _10('XDR progress:' + _16._17, _14())
                        };
                        _104.ontimeout = function() {
                            _10('XDR timeout:' + _16._17, _14())
                        };
                        _104.timeout = 20000;
                        _24._57(function() {
                            _104.send(_16._15)
                        }, 500)
                    } catch (_50) {
                        _10('Error in transmitCrossDomain (XDomainRequest): ' + _50.message, _14());
                        if (_16._80) _16._80({})
                    }
                } else if (_3.XMLHttpRequest) {
                    try {
                        var _72 = new _3.XMLHttpRequest();
                        _72.onreadystatechange = function() {
                            if (_72.readyState !== 4 || !_72.status) return;
                            if (_866(_72.status)) {
                                if (_16._153) _16._153(_445(_72))
                            } else {
                                if (_16._80) _16._80(_445(_72))
                            }
                        };
                        if (_16._15, _16._623) {
                            _16._15 = pako.gzip(_16._15);
                            _16._17 = _372(_16._17, '1')
                        } else {
                            _16._17 = _372(_16._17, '0')
                        }
                        _72.open(_16._15 ? 'POST' : 'GET', _16._17, true);
                        _72.setRequestHeader('Content-type', 'text/plain');
                        if (_16._828) _72.withCredentials = true;
                        _72.send(_16._15)
                    } catch (_50) {
                        _10('Error in transmitCrossDomain (XMLHttpRequest): ' + _50.message, _14());
                        if (_16._80) _16._80({})
                    }
                }
            }

            function _470(_104) {
                return {
                    _332: _104.responseText
                }
            }

            function _445(_72) {
                return {
                    _323: _72.status,
                    _332: _72.response
                }
            }

            function _372(_17, _4) {
                return /\/(html|dom)/.test(_17) ? _17 + (_17.indexOf('?') === -1 ? '?' : '&') + 'gz=' + _4 : _17
            }

            function _369(_20, _15) {
                _103({
                    _17: _134 + 'data',
                    _15: 'website=' + _7._49 + '&session=' + _12._55 + '&page=' + _12._52 + '&type=' + _20 + '&data=' + _70(_9._78(_15))
                })
            }

            function _866(_323) {
                return _323 >= 200 && _323 < 300
            }

            function _549() {
                return _11.all && !_3.atob;
            }

            function _612() {
                return _11.all && !_11.addEventListener;
            }

            function _774(_17) {
                return _17.replace(/^https?:/i, _7.location.protocol)
            }

            function _830(_54, _829) {
                var _330 = _70(_9._78(_54.data));
                var _16 = {
                    _17: _134 + 'html' + '?website=' + _7._49 + '&session=' + _12._55 + '&page=' + _12._52,
                    _15: 'size=' + _829 + '&html=' + _330,
                    _623: _7.compress
                };
                if (_12._265) {
                    var _87 = _645();
                    if (_330 !== '') _87.push(_16);
                    else _10('Initial DOM empty, not sending', _14());
                    _657(_87.slice(-10));
                    _653()
                } else {
                    if (_330 !== '') _103(_16);
                    else _10('Initial DOM empty, not sending', _14())
                }
            }

            function _653() {
                var _87 = _645();
                var _16 = _87.splice(0, 1)[0];
                if (_16) {
                    _10('Sending initial DOM mutations. Size: ' + _16._15.length, _14());
                    _16._153 = _16._80 = function() {
                        _657(_87);
                        _24._57(_653, 1)
                    };
                    _103(_16)
                }
            }

            function _645() {
                return _9._151(_3.sessionStorage.getItem('mf_initialDomQueue')) || []
            }

            function _657(_87) {
                try {
                    _3.sessionStorage.setItem('mf_initialDomQueue', _9._78(_87))
                } catch (_50) {
                    _10('InitialDomQueue could not be stored in sessionStorage: ' + _50.message, _14())
                }
            }

            function _827(_54) {
                var _147 = _54.data.args[1].some(function(_91) {
                    return _425._147(_91)
                });
                if (_147) {
                    _10('DOM mutation is a duplicate and has not been added.', _14());
                    return
                }
                var _650 = _821(_54, _0._170);
                if (_650 > -1) {
                    _0._170[_650].data = _54.data;
                    _10('Deduplicating DOM mutation', _14());
                    return
                }
                if (_7.domReuse) {
                    var _320 = _831(_54);
                    var _649 = _824(_320);
                    if (_649 > -1) {
                        _54.sequence = _649;
                        _10('Reusing already sent DOM mutation, sequence ' + _54.sequence, _14());
                        _27(_6._54, {
                            x: _54.sequence,
                            y: 0
                        });
                        return
                    } else _0._368.push(_320)
                }
                _54.sequence = ++_0._826;
                _27(_6._54, {
                    x: _54.sequence,
                    y: 0
                });
                _0._170.push(_54);
                if (!_215) _215 = _24._57(_618, 1500)
            }

            function _824(_320) {
                for (var i = 0; i < _0._368.length; i++)
                    if (_0._368[i] == _320) return i + 1;
                return -1
            }

            function _831(_54) {
                return _121(_9._78(_54.data))
            }

            function _618() {
                _215 = 0;
                if (_206 && _0._170.length > 0) {
                    var _624 = _0._170.length;
                    var _15 = _0._170.map(function(_54) {
                        return _54.sequence + '.' + _823(_9._78(_54.data))
                    }).join('|||');
                    _0._170 = [];
                    if (_15 !== '') {
                        _15 = 'website=' + _7._49 + '&session=' + _12._55 + '&page=' + _12._52 + '&data=' + _70(_15);
                        _103({
                            _17: _134 + 'dom',
                            _15: _15,
                            _623: _7.compress
                        });
                        _10('Sending DOM mutations: ' + _624 + ', size: ' + _15.length, _14());
                        _0._625 += _624;
                        if (_0._625 > _62._626) {
                            _10('DOM mutation limit of ' + _62._626 + ' reached. Stopping recording.', _14());
                            _69()
                        }
                    }
                }
            }

            function _821(_68, _635) {
                if (!_7.domDeduplicator) return -1;
                var _74 = _68.data.args;
                var _638 = _643(_74);
                var _640 = _621(_74);
                if (!_638 && !_640) return -1;
                for (var i = 0; i < _635.length; i++) {
                    var _359 = _635[i].data.args;
                    if (_638 && _643(_359) && _816(_74[2], _359[2])) {
                        return i
                    } else if (_640 && _621(_359)) {
                        return i
                    }
                }
                return -1
            }

            function _643(_74) {
                return _639(_74) && _74[2].filter(_819).length === _74[2].length
            }

            function _621(_74) {
                return _639(_74) && _74[2].filter(_818).length === _74[2].length
            }

            function _639(_74) {
                return _74[0].length === 0 && _74[1].length === 0 && _74[2].length > 0 && _74[3].length === 0
            }

            function _819(_236) {
                return _236.attributes.style && _636(_236.attributes) === 1
            }

            function _818(_236) {
                return _236.attributes.d && _636(_236.attributes) === 1
            }

            function _636(obj) {
                var count = 0;
                for (var prop in obj)
                    if (obj.hasOwnProperty(prop)) count++;
                return count
            }

            function _816(_334, _634) {
                if (_334.length !== _634.length) return false;
                for (var i = 0; i < _334.length; i++) {
                    var _815 = _334[i],
                        _822 = _634[i];
                    if (_815.id !== _822.id) return false
                }
                return true
            }

            function _333() {
                if (_0._15.length > 0 && _633() >= 5000) {
                    _27(_6._333, {});
                    _307()
                }
            }

            function _631() {
                _10('Inactivity timeout.', _14());
                _69(true)
            }

            function _196(_107, _630) {
                return _107.x == _630.x && _107.y == _630.y
            }

            function _281() {
                return {
                    x: _3.innerWidth,
                    y: _3.innerHeight
                }
            }

            function _629(_157) {
                if (!_157 || !_157.getBoundingClientRect) return null;
                var _144 = _157.getBoundingClientRect();
                var _231;
                if (!_157.childElementCount && !_144.height && !_144.width) _231 = _833(_157);
                if (!_231) {
                    return {
                        x: _144.left,
                        y: _144.top,
                        width: _144.width,
                        height: _144.height
                    }
                } else {
                    _231.x += _144.left - _157.offsetLeft;
                    _231.y += _144.top - _157.offsetTop;
                    return _231
                }
            }

            function _833(_1) {
                var _184 = window.getComputedStyle(_1, [':after']);
                if (!_184) return _184;
                return {
                    x: +_184.left.slice(0, -2),
                    y: +_184.top.slice(0, -2),
                    width: +_184.width.slice(0, -2),
                    height: +_184.height.slice(0, -2)
                }
            }

            function _65(_1) {
                try {
                    var _41 = [];
                    while (_1) {
                        var _34 = _1.getRootNode ? _1.getRootNode() : _11;
                        _41.unshift(_834(_1, _34) || _850(_1, _34));
                        _1 = _34.host
                    }
                    return _41.join(' > :document-fragment: > ')
                } catch (_50) {
                    _10('Error in getElementPath: ' + _50.message, _14())
                }
                return ''
            }

            function _834(_1) {
                var name = _1.attributes['name'] ? _1.attributes['name'].value : null;
                if (name && _1.form && /button|input|select|textarea/.test(_1.tagName.toLowerCase())) {
                    var _316 = _11.getElementsByName(name);
                    if (_316.length === 1) return name;
                    if (_316.length > 1) {
                        for (var _2 = 0; _2 < _316.length; _2++)
                            if (_1 === _316[_2]) return name + '[' + _2 + ']_mf'
                    }
                }
                return null
            }

            function _850(_53, _34) {
                var _29 = [];
                try {
                    while (_53 && _53.nodeType === 1) {
                        var _8 = '';
                        if (_53.tagName === 'TABLE' && _29.indexOf('tbody') === -1) _29.unshift('tbody');
                        if (_53.getAttribute('id') && !_9._148(_53, 'data-mf-ignore-child-ids') && _7.useIdSelectors) {
                            _8 += '#' + _53.getAttribute('id');
                            _29.unshift(_8);
                            break
                        } else {
                            _8 += _53.tagName.toLowerCase();
                            var _284 = '',
                                _339 = _53,
                                _198 = 1;
                            if (_53.parentNode && _53.parentNode.tagName && _53.parentNode.tagName.toLowerCase() == 'body') {
                                var _88 = _9._172(_53);
                                _284 = _88.length ? '.' + _88.join('.') : ''
                            }
                            if (_284 !== '' && _34.querySelectorAll('body > ' + _8 + _284).length === 1) _8 += _284;
                            else {
                                while ((_339 = _339.previousElementSibling)) {
                                    if (_339.tagName.toLowerCase() === _8) _198++
                                }
                                if (_198 !== 1) _8 += ':[' + _198 + ']'
                            }
                        }
                        _29.unshift(_8);
                        if (!_53.parentNode) return '';
                        _53 = _53.parentNode
                    }
                } catch (_50) {
                    _10('Error in _getCssPath: ' + _50.message, _14())
                }
                return _29.join(' > ').replace('html > body > ', '> ')
            }

            function _849(_41) {
                if (!_41) return null;
                var _1 = _848(_41);
                if (!_1) {
                    try {
                        var _34 = _11;
                        _847(_41).split(' > :document-fragment: > ').forEach(function(_8) {
                            _1 = _34.querySelector(_8);
                            _34 = _1.shadowRoot
                        })
                    } catch (_50) {
                        _10('Error in _getElementById: ' + _50.message, _14())
                    }
                }
                return _1
            }

            function _848(_19) {
                if (!_19) return null;
                var _125 = _541.exec(_19);
                if (_125 && _125[1]) {
                    try {
                        var _45 = _3.parseInt(_125[1]);
                        return _11.getElementsByName(_19.replace(_541, ''))[_45]
                    } catch (_50) {}
                }
                var _58 = _11.getElementsByName(_19);
                if (_58 && _58.length === 1) return _58[0];
                return null
            }

            function _847(_29) {
                if (!_29) return null;
                if (_29.substr(0, 1) === '>') _29 = 'html > body ' + _29;
                _29 = _29.replace(/^#(\d)/, '#\\3$1 ');
                _29 = _29.replace(/^#(-\d)/, '#\\$1');
                _29 = _29.replace(/:([^\[])/g, '\\:$1');
                _29 = _29.replace(/\\:document-fragment\\:/g, ':document-fragment:');
                _29 = _29.replace(/^#[^\s]+/, function(id) {
                    return '#' + id.slice(1).replace(/([^a-zA-Z\d\s:\\])/g, '\\$1')
                });
                _29 = _29.replace(/:\[([^\]]+)\]/g, ':nth-of-type($1)');
                return _29
            }

            function _120(_846, _4, _239) {
                for (var _2 = _846 - 1; _2 > 0; _2--) {
                    var _622 = _109.pow(256, _2);
                    _615(_109.floor(_4 / _622), _239);
                    _4 = _4 % _622
                }
                _615(_4, _239)
            }

            function _615(_619, _239) {
                if (_619 > 255) {
                    _239._620 = true;
                    return
                }
                _239.push(_619)
            }

            function _617(_1) {
                var _32 = '';
                for (var _2 = 0; _2 < _1.length; _2++) {
                    _32 += (_2 > 0 ? ',' : '') + _314.encode('' + _1[_2])
                }
                return _32
            }

            function _616(_1) {
                var _301 = 0;
                for (var _2 = 0; _2 < _1.length; _2++) _301 += _314.encode('' + _1[_2]).length + 1;
                return _301 > 0 ? _301 - 1 : _301
            }

            function _340(_35) {
                if (_844(_35.hostname) || !_7.includeSubDomains) return _35.hostname;
                var _28 = _35.href;
                var _845 = /\.co\.|\.com\.|\.ac\.|\.org\.|\.gov\.|\.edu\.|\.net\./;
                _28 = _28.replace(/^http(s)?\:\/\/?/i, '').replace(/^([^\/]+)\/.*/i, '$1').replace(/:[\d]*$/, '');
                if (_845.test(_28)) _28 = _28.replace(/^([^\.]+\.){1,}([^\.]+\.[^\.]+\.[^\.]+)$/i, '$2');
                else _28 = _28.replace(/^([^\.]+\.){1,}([^\.]+\.[^\.]+)$/i, '$2');
                return '.' + _28
            }

            function _844(ipaddress) {
                if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(ipaddress)) {
                    return (true)
                }
                return (false)
            }

            function _655(_19, _4, _353, _28) {
                if (_7.preferStorageApi) _3.localStorage.setItem(_19, _4);
                else _843(_19, _4, _353, _28)
            }

            function _654(_19) {
                if (_7.preferStorageApi) return _3.localStorage.getItem(_19) || '';
                else return _838(_19)
            }

            function _851(_19) {
                if (_7.preferStorageApi) {
                    _3.sessionStorage.removeItem(_19);
                    _3.localStorage.removeItem(_19)
                } else {
                    _11.cookie = _19 + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/; domain=' + _340(_90) + ';'
                }
            }

            function _843(_19, _4, _353, _28) {
                var _644 = '';
                if (_353 == 1) {
                    var _100 = new Date();
                    _100.setTime(_100.getTime() + _62._840);
                    _644 = '; expires=' + _100.toGMTString()
                }
                var _839 = _7.secureCookie ? 'secure;' : '';
                _11.cookie = _19 + '=' + _4 + _644 + '; path=/; domain=' + _28 + ';' + _839 + 'SameSite=Strict;'
            }

            function _838(_19) {
                var _652 = _19 + '=';
                var _651 = _11.cookie.split(';');
                for (var i = 0; i < _651.length; i++) {
                    var c = _651[i];
                    while (c.charAt(0) === ' ') {
                        c = c.substring(1)
                    }
                    if (c.indexOf(_652) === 0) {
                        return c.substring(_652.length, c.length)
                    }
                }
                return ''
            }

            function _933(_837) {
                return _837.replace(/<!--[\s]*MouseflowExcludeStart[\s]*([\s\S]*?)-->([\s\S]*?)<!--[\s]*MouseflowExcludeEnd[\s]*-->/g, '$1')
            }
            var _836 = new function() {
                for (var d = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'.split(''), c = 64; c;) --c;
                this.e = function(e) {
                    for (var a = [], f = 0, b = 0, g, c = e.length, h = c % 3; f < c;) a[b++] = d[(g = e[f++] << 16 | e[f++] << 8 | e[f++]) >> 18 & 63] + d[g >> 12 & 63] + d[g >> 6 & 63] + d[g & 63];
                    if (h)
                        for (a[--b] = a[b].substr(0, a[b].length - (h = 3 - h)); h--;) a[b] += '*';
                    return a.join('')
                }
            };
            var _314 = {
                _311: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                encode: function(c) {
                    for (var a = '', d, b, e, i, h, f, g = 0, c = this._835(c); g < c.length;) d = c.charCodeAt(g++), b = c.charCodeAt(g++), e = c.charCodeAt(g++), i = d >> 2, d = (d & 3) << 4 | b >> 4, h = (b & 15) << 2 | e >> 6, f = e & 63, isNaN(b) ? h = f = 64 : isNaN(e) && (f = 64), a = a + this._311.charAt(i) + this._311.charAt(d) + this._311.charAt(h) + this._311.charAt(f);
                    return a
                },
                _835: function(c) {
                    for (var c = c.replace(/\r\n/g, '\n'), a = '', d = 0; d < c.length; d++) {
                        var b = c.charCodeAt(d);
                        128 > b ? a += String.fromCharCode(b) : (127 < b && 2048 > b ? a += String.fromCharCode(b >> 6 | 192) : (a += String.fromCharCode(b >> 12 | 224), a += String.fromCharCode(b >> 6 & 63 | 128)), a += String.fromCharCode(b & 63 | 128))
                    }
                    return a
                }
            };

            function _344() {
                var _107 = function() {
                    return ((1 + _109.random()) * 65536 | 0).toString(16).substring(1)
                };
                return _107() + _107() + _107() + _107() + _107() + _107() + _107() + _107()
            }
            var _342 = 0;

            function _543() {
                if (_11.body) {
                    _10('Initializing recorder');
                    if (!_812()) return;
                    if (_790) _789(_613);
                    else _613();
                    return
                }
                _342++;
                if (_342 === 1) {
                    _10('Retrying to initialize recorder - document.body is not set', _14())
                } else if (_342 === 25) {
                    _10('Failed to initialize recorder', _14());
                    return
                };
                _24._57(_543, 200)
            }

            function _613() {
                _10('Initializing recorder', _14());
                if (!_572(_7.location.hostname)) return;
                if (_612()) {
                    _10('Recording not started - browser is IE8 or older', _14());
                    return
                }
                if (_561) _788();
                if (_561 || _786) return;
                _563 = true;

                function _565() {
                    if (!_73 && _7.autoStart && _11.readyState !== 'loading') _47();
                    _325(_544())
                }
                _18._25(_11, 'readystatechange', _565);
                _565()
            }

            function _325(_782) {
                if (_348 || !_73 || _11.readyState !== 'complete') return;
                _27(_6._566, {
                    x: _782,
                    y: _9._415()
                });
                _348 = true
            }

            function _781() {
                return _7.useUnload ? 'unload' : 'beforeunload'
            }

            function _209(_568, _575) {
                return _568.indexOf(_575, _568.length - _575.length) !== -1
            }

            function _121(_35) {
                var _167 = 0,
                    _569;
                for (var _2 = 0; _2 < _35.length; _2++) {
                    _569 = _35.charCodeAt(_2);
                    _167 = ((_167 << 5) - _167) + _569
                }
                return _167.toString()
            }

            function _571(_23) {
                for (var _2 = 0; _2 < _0._129.length; _2++)
                    if (_0._129[_2].split('_')[0] === _121(_23)) {
                        return _2
                    }
                return -1
            }

            function _570(_23, _4) {
                var _352 = _571(_23);
                var _356 = _121('' + _4);
                if (_352 > -1) {
                    if (_0._129[_352].split('_')[1] === _356) {
                        return false
                    }
                    _0._129[_352] = _121(_23) + '_' + _356
                } else if (_0._129.length < 20) {
                    _0._129.push(_121(_23) + '_' + _356)
                }
                return true
            }

            function _572(_28) {
                var _778 = _28;
                _28 = _360(_28);
                var _573 = false;
                for (var _2 = 0; _2 < _250.length; _2++) {
                    if (_28 == _360(_250[_2])) {
                        _573 = true;
                        break
                    }
                }
                _28 = _777(_28);
                var _574 = false;
                for (var _2 = 0; _2 < _250.length; _2++) {
                    if (_28 == _360(_250[_2])) {
                        _574 = true;
                        break
                    }
                }
                var _32 = _573 || _574;
                if (!_32) _10('Domain was blocked: ' + _778 + ' - domain list: ' + _250, _14());
                return _32
            }

            function _360(_28) {
                if (_28 == null) return '';
                _28 = _28.toLowerCase();
                _28 = _28.replace(/^\s+|\s+$/g, '');
                if (_28.substring(0, 4) == 'www.') {
                    _28 = _28.substring(4, _28.length)
                }
                return _28
            }

            function _777(_28) {
                if (_7.includeSubDomains) {
                    _28 = _776(_28)
                }
                return _28
            }

            function _776(_28) {
                var _102 = _28.split('.');
                if (_102.length <= 2) return _28;
                if (_28.indexOf('.co.') > -1 || _28.indexOf('.com.') > -1 || _28.indexOf('.org.') > -1) {
                    _102 = _102.slice(_102.length - 3, _102.length);
                    return _102.join('.')
                }
                _102 = _102.slice(_102.length - 2, _102.length);
                return _102.join('.')
            }

            function _792() {
                var _32 = [];
                if (typeof Ember != 'undefined') _32.push('em');
                if (typeof angular != 'undefined') _32.push('an');
                if (typeof Backbone != 'undefined') _32.push('bb');
                return _32
            }

            function _794() {
                if (_7.autoTagging) {
                    _10('Autotagging session', _14());
                    var _567 = ['utm_source', 'utm_medium', 'utm_term', 'utm_content', 'utm_campaign', 'gclid'];
                    for (var _2 = 0; _2 < _567.length; _2++) {
                        var _363 = _567[_2];
                        var _4 = _559(_7.location.href, _363);
                        if (!_4) _4 = _559(_11.referrer, _363);
                        if (_4) _3._mfq.push(['setVariable', _363, _4])
                    }
                }
            }

            function _559(_17, _19) {
                _19 = _19.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                var regex = new RegExp('[\\?&]' + _19 + '=([^&#]*)'),
                    results = regex.exec(_17);
                return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '))
            }

            function _810(_365) {
                switch (_365) {
                    case ' ':
                    case '"':
                    case "'":
                    case '.':
                    case ',':
                    case '_':
                    case '-':
                    case '+':
                    case '/':
                    case '*':
                    case ':':
                    case '=':
                    case '!':
                    case '?':
                    case '@':
                    case '#':
                    case '%':
                    case '&':
                    case '{':
                    case '}':
                    case '[':
                    case ']':
                    case '\\':
                    case '|':
                        return false;
                    default:
                        return true
                }
            }

            function _809(_4, _422) {
                var _32 = '';
                for (var _2 = 0; _2 < _422; _2++) {
                    _32 += _4
                }
                return _32
            }

            function _14() {
                return +new Date() - _0._83
            }
            if (!_549()) {
                var pako = function() {
                    function t() {
                        this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
                    }

                    function e(t, e, a, n) {
                        for (var r = 65535 & t | 0, i = t >>> 16 & 65535 | 0, s = 0; 0 !== a;) {
                            s = a > 2e3 ? 2e3 : a, a -= s;
                            do r = r + e[n++] | 0, i = i + r | 0; while (--s);
                            r %= 65521, i %= 65521
                        }
                        return r | i << 16 | 0
                    }
                    var a = {
                            2: "need dictionary",
                            1: "stream end",
                            0: "",
                            "-1": "file error",
                            "-2": "stream error",
                            "-3": "data error",
                            "-4": "insufficient memory",
                            "-5": "buffer error",
                            "-6": "incompatible version"
                        },
                        n = function() {
                            function t() {
                                for (var t, e = [], a = 0; a < 256; a++) {
                                    t = a;
                                    for (var n = 0; n < 8; n++) t = 1 & t ? 3988292384 ^ t >>> 1 : t >>> 1;
                                    e[a] = t
                                }
                                return e
                            }

                            function e(t, e, n, r) {
                                var i = a,
                                    s = r + n;
                                t ^= -1;
                                for (var h = r; h < s; h++) t = t >>> 8 ^ i[255 & (t ^ e[h])];
                                return t ^ -1
                            }
                            var a = t();
                            return e
                        }(),
                        r = {
                            Buf8: Uint8Array,
                            Buf16: Uint16Array,
                            assign: function(t) {
                                for (var e = Array.prototype.slice.call(arguments, 1); e.length;) {
                                    var a = e.shift();
                                    if (a) {
                                        if ("object" != typeof a) throw new TypeError(a + "must be non-object");
                                        for (var n in a) a.hasOwnProperty(n) && (t[n] = a[n])
                                    }
                                }
                                return t
                            },
                            shrinkBuf: function(t, e) {
                                return t.length === e ? t : t.subarray ? t.subarray(0, e) : (t.length = e, t)
                            },
                            arraySet: function(t, e, a, n, r) {
                                if (e.subarray && t.subarray) return void t.set(e.subarray(a, a + n), r);
                                for (var i = 0; i < n; i++) t[r + i] = e[a + i]
                            },
                            flattenChunks: function(t) {
                                var e, a, n, r, i, s;
                                for (n = 0, e = 0, a = t.length; e < a; e++) n += t[e].length;
                                for (s = new Uint8Array(n), r = 0, e = 0, a = t.length; e < a; e++) i = t[e], s.set(i, r), r += i.length;
                                return s
                            }
                        },
                        i = function() {
                            function t(t) {
                                var e, a, n, i, s, h = t.length,
                                    _ = 0;
                                for (i = 0; i < h; i++) a = t.charCodeAt(i), 55296 === (64512 & a) && i + 1 < h && (n = t.charCodeAt(i + 1), 56320 === (64512 & n) && (a = 65536 + (a - 55296 << 10) + (n - 56320), i++)), _ += a < 128 ? 1 : a < 2048 ? 2 : a < 65536 ? 3 : 4;
                                for (e = new r.Buf8(_), s = 0, i = 0; s < _; i++) a = t.charCodeAt(i), 55296 === (64512 & a) && i + 1 < h && (n = t.charCodeAt(i + 1), 56320 === (64512 & n) && (a = 65536 + (a - 55296 << 10) + (n - 56320), i++)), a < 128 ? e[s++] = a : a < 2048 ? (e[s++] = 192 | a >>> 6, e[s++] = 128 | 63 & a) : a < 65536 ? (e[s++] = 224 | a >>> 12, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a) : (e[s++] = 240 | a >>> 18, e[s++] = 128 | a >>> 12 & 63, e[s++] = 128 | a >>> 6 & 63, e[s++] = 128 | 63 & a);
                                return e
                            }

                            function e(t) {
                                var e = t.length;
                                if (e < 65537 && (t.subarray && n || !t.subarray && a)) return String.fromCharCode.apply(null, r.shrinkBuf(t, e));
                                for (var i = "", s = 0; s < e; s++) i += String.fromCharCode(t[s]);
                                return i
                            }
                            var a = !0,
                                n = !0;
                            try {
                                String.fromCharCode.apply(null, [0])
                            } catch (t) {
                                a = !1
                            }
                            try {
                                String.fromCharCode.apply(null, new Uint8Array(1))
                            } catch (t) {
                                n = !1
                            }
                            return {
                                string2buf: t,
                                buf2binstring: e
                            }
                        }(),
                        s = function() {
                            function t(t) {
                                for (var e = t.length; --e >= 0;) t[e] = 0
                            }

                            function e(t, e, a, n, r) {
                                this.static_tree = t, this.extra_bits = e, this.extra_base = a, this.elems = n, this.max_length = r, this.has_stree = t && t.length
                            }

                            function a(t, e) {
                                this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
                            }

                            function n(t) {
                                return t < 256 ? it[t] : it[256 + (t >>> 7)]
                            }

                            function i(t, e) {
                                t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
                            }

                            function s(t, e, a) {
                                t.bi_valid > Q - a ? (t.bi_buf |= e << t.bi_valid & 65535, i(t, t.bi_buf), t.bi_buf = e >> Q - t.bi_valid, t.bi_valid += a - Q) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += a)
                            }

                            function h(t, e, a) {
                                s(t, a[2 * e], a[2 * e + 1])
                            }

                            function _(t, e) {
                                var a = 0;
                                do a |= 1 & t, t >>>= 1, a <<= 1; while (--e > 0);
                                return a >>> 1
                            }

                            function l(t) {
                                16 === t.bi_valid ? (i(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = 255 & t.bi_buf, t.bi_buf >>= 8, t.bi_valid -= 8)
                            }

                            function o(t, e) {
                                var a, n, r, i, s, h, _ = e.dyn_tree,
                                    l = e.max_code,
                                    o = e.stat_desc.static_tree,
                                    d = e.stat_desc.has_stree,
                                    u = e.stat_desc.extra_bits,
                                    f = e.stat_desc.extra_base,
                                    c = e.stat_desc.max_length,
                                    g = 0;
                                for (i = 0; i <= N; i++) t.bl_count[i] = 0;
                                for (_[2 * t.heap[t.heap_max] + 1] = 0, a = t.heap_max + 1; a < M; a++) n = t.heap[a], i = _[2 * _[2 * n + 1] + 1] + 1, i > c && (i = c, g++), _[2 * n + 1] = i, n > l || (t.bl_count[i]++, s = 0, n >= f && (s = u[n - f]), h = _[2 * n], t.opt_len += h * (i + s), d && (t.static_len += h * (o[2 * n + 1] + s)));
                                if (0 !== g) {
                                    do {
                                        for (i = c - 1; 0 === t.bl_count[i];) i--;
                                        t.bl_count[i]--, t.bl_count[i + 1] += 2, t.bl_count[c]--, g -= 2
                                    } while (g > 0);
                                    for (i = c; 0 !== i; i--)
                                        for (n = t.bl_count[i]; 0 !== n;) r = t.heap[--a], r > l || (_[2 * r + 1] !== i && (t.opt_len += (i - _[2 * r + 1]) * _[2 * r], _[2 * r + 1] = i), n--)
                                }
                            }

                            function d(t, e, a) {
                                var n, r, i = new Array(N + 1),
                                    s = 0;
                                for (n = 1; n <= N; n++) i[n] = s = s + a[n - 1] << 1;
                                for (r = 0; r <= e; r++) {
                                    var h = t[2 * r + 1];
                                    0 !== h && (t[2 * r] = _(i[h]++, h))
                                }
                            }

                            function u() {
                                var t, a, n, r, i, s = new Array(N + 1);
                                for (n = 0, r = 0; r < q - 1; r++)
                                    for (ht[r] = n, t = 0; t < 1 << Z[r]; t++) st[n++] = r;
                                for (st[n - 1] = r, i = 0, r = 0; r < 16; r++)
                                    for (_t[r] = i, t = 0; t < 1 << $[r]; t++) it[i++] = r;
                                for (i >>= 7; r < J; r++)
                                    for (_t[r] = i << 7, t = 0; t < 1 << $[r] - 7; t++) it[256 + i++] = r;
                                for (a = 0; a <= N; a++) s[a] = 0;
                                for (t = 0; t <= 143;) nt[2 * t + 1] = 8, t++, s[8]++;
                                for (; t <= 255;) nt[2 * t + 1] = 9, t++, s[9]++;
                                for (; t <= 279;) nt[2 * t + 1] = 7, t++, s[7]++;
                                for (; t <= 287;) nt[2 * t + 1] = 8, t++, s[8]++;
                                for (d(nt, G + 1, s), t = 0; t < J; t++) rt[2 * t + 1] = 5, rt[2 * t] = _(t, 5);
                                lt = new e(nt, Z, F + 1, G, N), ot = new e(rt, $, 0, J, N), dt = new e(new Array(0), tt, 0, K, R)
                            }

                            function f(t) {
                                var e;
                                for (e = 0; e < G; e++) t.dyn_ltree[2 * e] = 0;
                                for (e = 0; e < J; e++) t.dyn_dtree[2 * e] = 0;
                                for (e = 0; e < K; e++) t.bl_tree[2 * e] = 0;
                                t.dyn_ltree[2 * V] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
                            }

                            function c(t) {
                                t.bi_valid > 8 ? i(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
                            }

                            function g(t, e, a, n) {
                                c(t), n && (i(t, a), i(t, ~a)), r.arraySet(t.pending_buf, t.window, e, a, t.pending), t.pending += a
                            }

                            function p(t, e, a, n) {
                                var r = 2 * e,
                                    i = 2 * a;
                                return t[r] < t[i] || t[r] === t[i] && n[e] <= n[a]
                            }

                            function b(t, e, a) {
                                for (var n = t.heap[a], r = a << 1; r <= t.heap_len && (r < t.heap_len && p(e, t.heap[r + 1], t.heap[r], t.depth) && r++, !p(e, n, t.heap[r], t.depth));) t.heap[a] = t.heap[r], a = r, r <<= 1;
                                t.heap[a] = n
                            }

                            function w(t, e, a) {
                                var r, i, _, l, o = 0;
                                if (0 !== t.last_lit)
                                    do r = t.pending_buf[t.d_buf + 2 * o] << 8 | t.pending_buf[t.d_buf + 2 * o + 1], i = t.pending_buf[t.l_buf + o], o++, 0 === r ? h(t, i, e) : (_ = st[i], h(t, _ + F + 1, e), l = Z[_], 0 !== l && (i -= ht[_], s(t, i, l)), r--, _ = n(r), h(t, _, a), l = $[_], 0 !== l && (r -= _t[_], s(t, r, l))); while (o < t.last_lit);
                                h(t, V, e)
                            }

                            function v(t, e) {
                                var a, n, r, i = e.dyn_tree,
                                    s = e.stat_desc.static_tree,
                                    h = e.stat_desc.has_stree,
                                    _ = e.stat_desc.elems,
                                    l = -1;
                                for (t.heap_len = 0, t.heap_max = M, a = 0; a < _; a++) 0 !== i[2 * a] ? (t.heap[++t.heap_len] = l = a, t.depth[a] = 0) : i[2 * a + 1] = 0;
                                for (; t.heap_len < 2;) r = t.heap[++t.heap_len] = l < 2 ? ++l : 0, i[2 * r] = 1, t.depth[r] = 0, t.opt_len--, h && (t.static_len -= s[2 * r + 1]);
                                for (e.max_code = l, a = t.heap_len >> 1; a >= 1; a--) b(t, i, a);
                                r = _;
                                do a = t.heap[1], t.heap[1] = t.heap[t.heap_len--], b(t, i, 1), n = t.heap[1], t.heap[--t.heap_max] = a, t.heap[--t.heap_max] = n, i[2 * r] = i[2 * a] + i[2 * n], t.depth[r] = (t.depth[a] >= t.depth[n] ? t.depth[a] : t.depth[n]) + 1, i[2 * a + 1] = i[2 * n + 1] = r, t.heap[1] = r++, b(t, i, 1); while (t.heap_len >= 2);
                                t.heap[--t.heap_max] = t.heap[1], o(t, e), d(i, l, t.bl_count)
                            }

                            function m(t, e, a) {
                                var n, r, i = -1,
                                    s = e[1],
                                    h = 0,
                                    _ = 7,
                                    l = 4;
                                for (0 === s && (_ = 138, l = 3), e[2 * (a + 1) + 1] = 65535, n = 0; n <= a; n++) r = s, s = e[2 * (n + 1) + 1], ++h < _ && r === s || (h < l ? t.bl_tree[2 * r] += h : 0 !== r ? (r !== i && t.bl_tree[2 * r]++, t.bl_tree[2 * W]++) : h <= 10 ? t.bl_tree[2 * X]++ : t.bl_tree[2 * Y]++, h = 0, i = r, 0 === s ? (_ = 138, l = 3) : r === s ? (_ = 6, l = 3) : (_ = 7, l = 4))
                            }

                            function k(t, e, a) {
                                var n, r, i = -1,
                                    _ = e[1],
                                    l = 0,
                                    o = 7,
                                    d = 4;
                                for (0 === _ && (o = 138, d = 3), n = 0; n <= a; n++)
                                    if (r = _, _ = e[2 * (n + 1) + 1], !(++l < o && r === _)) {
                                        if (l < d) {
                                            do h(t, r, t.bl_tree); while (0 !== --l)
                                        } else 0 !== r ? (r !== i && (h(t, r, t.bl_tree), l--), h(t, W, t.bl_tree), s(t, l - 3, 2)) : l <= 10 ? (h(t, X, t.bl_tree), s(t, l - 3, 3)) : (h(t, Y, t.bl_tree), s(t, l - 11, 7));
                                        l = 0, i = r, 0 === _ ? (o = 138, d = 3) : r === _ ? (o = 6, d = 3) : (o = 7, d = 4)
                                    }
                            }

                            function y(t) {
                                var e;
                                for (m(t, t.dyn_ltree, t.l_desc.max_code), m(t, t.dyn_dtree, t.d_desc.max_code), v(t, t.bl_desc), e = K - 1; e >= 3 && 0 === t.bl_tree[2 * et[e] + 1]; e--);
                                return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
                            }

                            function z(t, e, a, n) {
                                var r;
                                for (s(t, e - 257, 5), s(t, a - 1, 5), s(t, n - 4, 4), r = 0; r < n; r++) s(t, t.bl_tree[2 * et[r] + 1], 3);
                                k(t, t.dyn_ltree, e - 1), k(t, t.dyn_dtree, a - 1)
                            }

                            function x(t) {
                                var e, a = 4093624447;
                                for (e = 0; e <= 31; e++, a >>>= 1)
                                    if (1 & a && 0 !== t.dyn_ltree[2 * e]) return U;
                                if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return D;
                                for (e = 32; e < F; e++)
                                    if (0 !== t.dyn_ltree[2 * e]) return D;
                                return U
                            }

                            function B(t) {
                                ut || (u(), ut = !0), t.l_desc = new a(t.dyn_ltree, lt), t.d_desc = new a(t.dyn_dtree, ot), t.bl_desc = new a(t.bl_tree, dt), t.bi_buf = 0, t.bi_valid = 0, f(t)
                            }

                            function A(t, e, a, n) {
                                s(t, (I << 1) + (n ? 1 : 0), 3), g(t, e, a, !0)
                            }

                            function S(t) {
                                s(t, L << 1, 3), h(t, V, nt), l(t)
                            }

                            function C(t, e, a, n) {
                                var r, i, h = 0;
                                t.level > 0 ? (t.strm.data_type === H && (t.strm.data_type = x(t)), v(t, t.l_desc), v(t, t.d_desc), h = y(t), r = t.opt_len + 3 + 7 >>> 3, i = t.static_len + 3 + 7 >>> 3, i <= r && (r = i)) : r = i = a + 5, a + 4 <= r && e !== -1 ? A(t, e, a, n) : t.strategy === j || i === r ? (s(t, (L << 1) + (n ? 1 : 0), 3), w(t, nt, rt)) : (s(t, (O << 1) + (n ? 1 : 0), 3), z(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, h + 1), w(t, t.dyn_ltree, t.dyn_dtree)), f(t), n && c(t)
                            }

                            function E(t, e, a) {
                                return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & a, t.last_lit++, 0 === e ? t.dyn_ltree[2 * a]++ : (t.matches++, e--, t.dyn_ltree[2 * (st[a] + F + 1)]++, t.dyn_dtree[2 * n(e)]++), t.last_lit === t.lit_bufsize - 1
                            }
                            var j = 4,
                                U = 0,
                                D = 1,
                                H = 2,
                                I = 0,
                                L = 1,
                                O = 2,
                                P = 3,
                                T = 258,
                                q = 29,
                                F = 256,
                                G = F + 1 + q,
                                J = 30,
                                K = 19,
                                M = 2 * G + 1,
                                N = 15,
                                Q = 16,
                                R = 7,
                                V = 256,
                                W = 16,
                                X = 17,
                                Y = 18,
                                Z = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                                $ = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                                tt = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                                et = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                                at = 512,
                                nt = new Array(2 * (G + 2));
                            t(nt);
                            var rt = new Array(2 * J);
                            t(rt);
                            var it = new Array(at);
                            t(it);
                            var st = new Array(T - P + 1);
                            t(st);
                            var ht = new Array(q);
                            t(ht);
                            var _t = new Array(J);
                            t(_t);
                            var lt, ot, dt, ut = !1;
                            return {
                                _tr_init: B,
                                _tr_stored_block: A,
                                _tr_align: S,
                                _tr_flush_block: C,
                                _tr_tally: E
                            }
                        }(),
                        h = function() {
                            function t(t, e) {
                                return t.msg = a[e], e
                            }

                            function i(t) {
                                return (t << 1) - (t > 4 ? 9 : 0)
                            }

                            function h(t) {
                                for (var e = t.length; --e >= 0;) t[e] = 0
                            }

                            function _(t) {
                                var e = t.state,
                                    a = e.pending;
                                a > t.avail_out && (a = t.avail_out), 0 !== a && (r.arraySet(t.output, e.pending_buf, e.pending_out, a, t.next_out), t.next_out += a, e.pending_out += a, t.total_out += a, t.avail_out -= a, e.pending -= a, 0 === e.pending && (e.pending_out = 0))
                            }

                            function l(t, e) {
                                s._tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, _(t.strm)
                            }

                            function o(t, e) {
                                t.pending_buf[t.pending++] = e
                            }

                            function d(t, e) {
                                t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = 255 & e
                            }

                            function u(t, a, i, s) {
                                var h = t.avail_in;
                                return h > s && (h = s), 0 === h ? 0 : (t.avail_in -= h, r.arraySet(a, t.input, t.next_in, h, i), 1 === t.state.wrap ? t.adler = e(t.adler, a, h, i) : 2 === t.state.wrap && (t.adler = n(t.adler, a, h, i)), t.next_in += h, t.total_in += h, h)
                            }

                            function f(t, e) {
                                var a, n, r = t.max_chain_length,
                                    i = t.strstart,
                                    s = t.prev_length,
                                    h = t.nice_match,
                                    _ = t.strstart > t.w_size - rt ? t.strstart - (t.w_size - rt) : 0,
                                    l = t.window,
                                    o = t.w_mask,
                                    d = t.prev,
                                    u = t.strstart + nt,
                                    f = l[i + s - 1],
                                    c = l[i + s];
                                t.prev_length >= t.good_match && (r >>= 2), h > t.lookahead && (h = t.lookahead);
                                do
                                    if (a = e, l[a + s] === c && l[a + s - 1] === f && l[a] === l[i] && l[++a] === l[i + 1]) {
                                        i += 2, a++;
                                        do; while (l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && l[++i] === l[++a] && i < u);
                                        if (n = nt - (u - i), i = u - nt, n > s) {
                                            if (t.match_start = e, s = n, n >= h) break;
                                            f = l[i + s - 1], c = l[i + s]
                                        }
                                    }
                                while ((e = d[e & o]) > _ && 0 !== --r);
                                return s <= t.lookahead ? s : t.lookahead
                            }

                            function c(t) {
                                var e, a, n, i, s, h = t.w_size;
                                do {
                                    if (i = t.window_size - t.lookahead - t.strstart, t.strstart >= h + (h - rt)) {
                                        r.arraySet(t.window, t.window, h, h, 0), t.match_start -= h, t.strstart -= h, t.block_start -= h, a = t.hash_size, e = a;
                                        do n = t.head[--e], t.head[e] = n >= h ? n - h : 0; while (--a);
                                        a = h, e = a;
                                        do n = t.prev[--e], t.prev[e] = n >= h ? n - h : 0; while (--a);
                                        i += h
                                    }
                                    if (0 === t.strm.avail_in) break;
                                    if (a = u(t.strm, t.window, t.strstart + t.lookahead, i), t.lookahead += a, t.lookahead + t.insert >= at)
                                        for (s = t.strstart - t.insert, t.ins_h = t.window[s], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[s + 1]) & t.hash_mask; t.insert && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[s + at - 1]) & t.hash_mask, t.prev[s & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = s, s++, t.insert--, !(t.lookahead + t.insert < at)););
                                } while (t.lookahead < rt && 0 !== t.strm.avail_in)
                            }

                            function g(t, e) {
                                var a = 65535;
                                for (a > t.pending_buf_size - 5 && (a = t.pending_buf_size - 5);;) {
                                    if (t.lookahead <= 1) {
                                        if (c(t), 0 === t.lookahead && e === U) return ft;
                                        if (0 === t.lookahead) break
                                    }
                                    t.strstart += t.lookahead, t.lookahead = 0;
                                    var n = t.block_start + a;
                                    if ((0 === t.strstart || t.strstart >= n) && (t.lookahead = t.strstart - n, t.strstart = n, l(t, !1), 0 === t.strm.avail_out)) return ft;
                                    if (t.strstart - t.block_start >= t.w_size - rt && (l(t, !1), 0 === t.strm.avail_out)) return ft
                                }
                                return t.insert = 0, e === I ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt) : t.strstart > t.block_start && (l(t, !1), 0 === t.strm.avail_out) ? ft : ft
                            }

                            function p(t, e) {
                                for (var a, n;;) {
                                    if (t.lookahead < rt) {
                                        if (c(t), t.lookahead < rt && e === U) return ft;
                                        if (0 === t.lookahead) break
                                    }
                                    if (a = 0, t.lookahead >= at && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + at - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), 0 !== a && t.strstart - a <= t.w_size - rt && (t.match_length = f(t, a)), t.match_length >= at)
                                        if (n = s._tr_tally(t, t.strstart - t.match_start, t.match_length - at), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= at) {
                                            t.match_length--;
                                            do t.strstart++, t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + at - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart; while (0 !== --t.match_length);
                                            t.strstart++
                                        } else t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + 1]) & t.hash_mask;
                                    else n = s._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
                                    if (n && (l(t, !1), 0 === t.strm.avail_out)) return ft
                                }
                                return t.insert = t.strstart < at - 1 ? t.strstart : at - 1, e === I ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt) : t.last_lit && (l(t, !1), 0 === t.strm.avail_out) ? ft : ct
                            }

                            function b(t, e) {
                                for (var a, n, r;;) {
                                    if (t.lookahead < rt) {
                                        if (c(t), t.lookahead < rt && e === U) return ft;
                                        if (0 === t.lookahead) break
                                    }
                                    if (a = 0, t.lookahead >= at && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + at - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = at - 1, 0 !== a && t.prev_length < t.max_lazy_match && t.strstart - a <= t.w_size - rt && (t.match_length = f(t, a), t.match_length <= 5 && (t.strategy === J || t.match_length === at && t.strstart - t.match_start > 4096) && (t.match_length = at - 1)), t.prev_length >= at && t.match_length <= t.prev_length) {
                                        r = t.strstart + t.lookahead - at, n = s._tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - at), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
                                        do ++t.strstart <= r && (t.ins_h = (t.ins_h << t.hash_shift ^ t.window[t.strstart + at - 1]) & t.hash_mask, a = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart); while (0 !== --t.prev_length);
                                        if (t.match_available = 0, t.match_length = at - 1, t.strstart++, n && (l(t, !1), 0 === t.strm.avail_out)) return ft
                                    } else if (t.match_available) {
                                        if (n = s._tr_tally(t, 0, t.window[t.strstart - 1]), n && l(t, !1), t.strstart++, t.lookahead--, 0 === t.strm.avail_out) return ft
                                    } else t.match_available = 1, t.strstart++, t.lookahead--
                                }
                                return t.match_available && (n = s._tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < at - 1 ? t.strstart : at - 1, e === I ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt) : t.last_lit && (l(t, !1), 0 === t.strm.avail_out) ? ft : ct
                            }

                            function w(t, e) {
                                for (var a, n, r, i, h = t.window;;) {
                                    if (t.lookahead <= nt) {
                                        if (c(t), t.lookahead <= nt && e === U) return ft;
                                        if (0 === t.lookahead) break
                                    }
                                    if (t.match_length = 0, t.lookahead >= at && t.strstart > 0 && (r = t.strstart - 1, n = h[r], n === h[++r] && n === h[++r] && n === h[++r])) {
                                        i = t.strstart + nt;
                                        do; while (n === h[++r] && n === h[++r] && n === h[++r] && n === h[++r] && n === h[++r] && n === h[++r] && n === h[++r] && n === h[++r] && r < i);
                                        t.match_length = nt - (i - r), t.match_length > t.lookahead && (t.match_length = t.lookahead)
                                    }
                                    if (t.match_length >= at ? (a = s._tr_tally(t, 1, t.match_length - at), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (a = s._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), a && (l(t, !1), 0 === t.strm.avail_out)) return ft
                                }
                                return t.insert = 0, e === I ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt) : t.last_lit && (l(t, !1), 0 === t.strm.avail_out) ? ft : ct
                            }

                            function v(t, e) {
                                for (var a;;) {
                                    if (0 === t.lookahead && (c(t), 0 === t.lookahead)) {
                                        if (e === U) return ft;
                                        break
                                    }
                                    if (t.match_length = 0, a = s._tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, a && (l(t, !1), 0 === t.strm.avail_out)) return ft
                                }
                                return t.insert = 0, e === I ? (l(t, !0), 0 === t.strm.avail_out ? gt : pt) : t.last_lit && (l(t, !1), 0 === t.strm.avail_out) ? ft : ct
                            }

                            function m(t, e, a, n, r) {
                                this.good_length = t, this.max_lazy = e, this.nice_length = a, this.max_chain = n, this.func = r
                            }

                            function k(t) {
                                t.window_size = 2 * t.w_size, h(t.head), t.max_lazy_match = j[t.level].max_lazy, t.good_match = j[t.level].good_length, t.nice_match = j[t.level].nice_length, t.max_chain_length = j[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = at - 1, t.match_available = 0, t.ins_h = 0
                            }

                            function y() {
                                this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = R, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new r.Buf16(2 * tt), this.dyn_dtree = new r.Buf16(2 * (2 * Z + 1)), this.bl_tree = new r.Buf16(2 * (2 * $ + 1)), h(this.dyn_ltree), h(this.dyn_dtree), h(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new r.Buf16(et + 1), this.heap = new r.Buf16(2 * Y + 1), h(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new r.Buf16(2 * Y + 1), h(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0
                            }

                            function z(e) {
                                var a;
                                return e && e.state ? (e.total_in = e.total_out = 0, e.data_type = Q, a = e.state, a.pending = 0, a.pending_out = 0, a.wrap < 0 && (a.wrap = -a.wrap), a.status = a.wrap ? st : dt, e.adler = 2 === a.wrap ? 0 : 1, a.last_flush = U, s._tr_init(a), O) : t(e, T)
                            }

                            function x(t) {
                                var e = z(t);
                                return e === O && k(t.state), e
                            }

                            function B(t, e) {
                                return t && t.state ? 2 !== t.state.wrap ? T : (t.state.gzhead = e, O) : T
                            }

                            function A(e, a, n, i, s, h) {
                                if (!e) return T;
                                var _ = 1;
                                if (a === G && (a = 6), i < 0 ? (_ = 0, i = -i) : i > 15 && (_ = 2, i -= 16), s < 1 || s > V || n !== R || i < 8 || i > 15 || a < 0 || a > 9 || h < 0 || h > N) return t(e, T);
                                8 === i && (i = 9);
                                var l = new y;
                                return e.state = l, l.strm = e, l.wrap = _, l.gzhead = null, l.w_bits = i, l.w_size = 1 << l.w_bits, l.w_mask = l.w_size - 1, l.hash_bits = s + 7, l.hash_size = 1 << l.hash_bits, l.hash_mask = l.hash_size - 1, l.hash_shift = ~~((l.hash_bits + at - 1) / at), l.window = new r.Buf8(2 * l.w_size), l.head = new r.Buf16(l.hash_size), l.prev = new r.Buf16(l.w_size), l.lit_bufsize = 1 << s + 6, l.pending_buf_size = 4 * l.lit_bufsize, l.pending_buf = new r.Buf8(l.pending_buf_size), l.d_buf = 1 * l.lit_bufsize, l.l_buf = 3 * l.lit_bufsize, l.level = a, l.strategy = h, l.method = n, x(e)
                            }

                            function S(e, a) {
                                var r, l, u, f;
                                if (!e || !e.state || a > L || a < 0) return e ? t(e, T) : T;
                                if (l = e.state, !e.output || !e.input && 0 !== e.avail_in || l.status === ut && a !== I) return t(e, 0 === e.avail_out ? F : T);
                                if (l.strm = e, r = l.last_flush, l.last_flush = a, l.status === st)
                                    if (2 === l.wrap) e.adler = 0, o(l, 31), o(l, 139), o(l, 8), l.gzhead ? (o(l, (l.gzhead.text ? 1 : 0) + (l.gzhead.hcrc ? 2 : 0) + (l.gzhead.extra ? 4 : 0) + (l.gzhead.name ? 8 : 0) + (l.gzhead.comment ? 16 : 0)), o(l, 255 & l.gzhead.time), o(l, l.gzhead.time >> 8 & 255), o(l, l.gzhead.time >> 16 & 255), o(l, l.gzhead.time >> 24 & 255), o(l, 9 === l.level ? 2 : l.strategy >= K || l.level < 2 ? 4 : 0), o(l, 255 & l.gzhead.os), l.gzhead.extra && l.gzhead.extra.length && (o(l, 255 & l.gzhead.extra.length), o(l, l.gzhead.extra.length >> 8 & 255)), l.gzhead.hcrc && (e.adler = n(e.adler, l.pending_buf, l.pending, 0)), l.gzindex = 0, l.status = ht) : (o(l, 0), o(l, 0), o(l, 0), o(l, 0), o(l, 0), o(l, 9 === l.level ? 2 : l.strategy >= K || l.level < 2 ? 4 : 0), o(l, bt), l.status = dt);
                                    else {
                                        var c = R + (l.w_bits - 8 << 4) << 8,
                                            g = -1;
                                        g = l.strategy >= K || l.level < 2 ? 0 : l.level < 6 ? 1 : 6 === l.level ? 2 : 3, c |= g << 6, 0 !== l.strstart && (c |= it), c += 31 - c % 31, l.status = dt, d(l, c), 0 !== l.strstart && (d(l, e.adler >>> 16), d(l, 65535 & e.adler)), e.adler = 1
                                    }
                                if (l.status === ht)
                                    if (l.gzhead.extra) {
                                        for (u = l.pending; l.gzindex < (65535 & l.gzhead.extra.length) && (l.pending !== l.pending_buf_size || (l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), _(e), u = l.pending, l.pending !== l.pending_buf_size));) o(l, 255 & l.gzhead.extra[l.gzindex]), l.gzindex++;
                                        l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), l.gzindex === l.gzhead.extra.length && (l.gzindex = 0, l.status = _t)
                                    } else l.status = _t;
                                if (l.status === _t)
                                    if (l.gzhead.name) {
                                        u = l.pending;
                                        do {
                                            if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), _(e), u = l.pending, l.pending === l.pending_buf_size)) {
                                                f = 1;
                                                break
                                            }
                                            f = l.gzindex < l.gzhead.name.length ? 255 & l.gzhead.name.charCodeAt(l.gzindex++) : 0, o(l, f)
                                        } while (0 !== f);
                                        l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), 0 === f && (l.gzindex = 0, l.status = lt)
                                    } else l.status = lt;
                                if (l.status === lt)
                                    if (l.gzhead.comment) {
                                        u = l.pending;
                                        do {
                                            if (l.pending === l.pending_buf_size && (l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), _(e), u = l.pending, l.pending === l.pending_buf_size)) {
                                                f = 1;
                                                break
                                            }
                                            f = l.gzindex < l.gzhead.comment.length ? 255 & l.gzhead.comment.charCodeAt(l.gzindex++) : 0, o(l, f)
                                        } while (0 !== f);
                                        l.gzhead.hcrc && l.pending > u && (e.adler = n(e.adler, l.pending_buf, l.pending - u, u)), 0 === f && (l.status = ot)
                                    } else l.status = ot;
                                if (l.status === ot && (l.gzhead.hcrc ? (l.pending + 2 > l.pending_buf_size && _(e), l.pending + 2 <= l.pending_buf_size && (o(l, 255 & e.adler), o(l, e.adler >> 8 & 255), e.adler = 0, l.status = dt)) : l.status = dt), 0 !== l.pending) {
                                    if (_(e), 0 === e.avail_out) return l.last_flush = -1, O
                                } else if (0 === e.avail_in && i(a) <= i(r) && a !== I) return t(e, F);
                                if (l.status === ut && 0 !== e.avail_in) return t(e, F);
                                if (0 !== e.avail_in || 0 !== l.lookahead || a !== U && l.status !== ut) {
                                    var p = l.strategy === K ? v(l, a) : l.strategy === M ? w(l, a) : j[l.level].func(l, a);
                                    if (p !== gt && p !== pt || (l.status = ut), p === ft || p === gt) return 0 === e.avail_out && (l.last_flush = -1), O;
                                    if (p === ct && (a === D ? s._tr_align(l) : a !== L && (s._tr_stored_block(l, 0, 0, !1), a === H && (h(l.head), 0 === l.lookahead && (l.strstart = 0, l.block_start = 0, l.insert = 0))), _(e), 0 === e.avail_out)) return l.last_flush = -1, O
                                }
                                return a !== I ? O : l.wrap <= 0 ? P : (2 === l.wrap ? (o(l, 255 & e.adler), o(l, e.adler >> 8 & 255), o(l, e.adler >> 16 & 255), o(l, e.adler >> 24 & 255), o(l, 255 & e.total_in), o(l, e.total_in >> 8 & 255), o(l, e.total_in >> 16 & 255), o(l, e.total_in >> 24 & 255)) : (d(l, e.adler >>> 16), d(l, 65535 & e.adler)), _(e), l.wrap > 0 && (l.wrap = -l.wrap), 0 !== l.pending ? O : P)
                            }

                            function C(e) {
                                var a;
                                return e && e.state ? (a = e.state.status, a !== st && a !== ht && a !== _t && a !== lt && a !== ot && a !== dt && a !== ut ? t(e, T) : (e.state = null, a === dt ? t(e, q) : O)) : T
                            }

                            function E(t, a) {
                                var n, i, s, _, l, o, d, u, f = a.length;
                                if (!t || !t.state) return T;
                                if (n = t.state, _ = n.wrap, 2 === _ || 1 === _ && n.status !== st || n.lookahead) return T;
                                for (1 === _ && (t.adler = e(t.adler, a, f, 0)), n.wrap = 0, f >= n.w_size && (0 === _ && (h(n.head), n.strstart = 0, n.block_start = 0, n.insert = 0), u = new r.Buf8(n.w_size), r.arraySet(u, a, f - n.w_size, n.w_size, 0), a = u, f = n.w_size), l = t.avail_in, o = t.next_in, d = t.input, t.avail_in = f, t.next_in = 0, t.input = a, c(n); n.lookahead >= at;) {
                                    i = n.strstart, s = n.lookahead - (at - 1);
                                    do n.ins_h = (n.ins_h << n.hash_shift ^ n.window[i + at - 1]) & n.hash_mask, n.prev[i & n.w_mask] = n.head[n.ins_h], n.head[n.ins_h] = i, i++; while (--s);
                                    n.strstart = i, n.lookahead = at - 1, c(n)
                                }
                                return n.strstart += n.lookahead, n.block_start = n.strstart, n.insert = n.lookahead, n.lookahead = 0, n.match_length = n.prev_length = at - 1, n.match_available = 0, t.next_in = o, t.input = d, t.avail_in = l, n.wrap = _, O
                            }
                            var j, U = 0,
                                D = 1,
                                H = 3,
                                I = 4,
                                L = 5,
                                O = 0,
                                P = 1,
                                T = -2,
                                q = -3,
                                F = -5,
                                G = -1,
                                J = 1,
                                K = 2,
                                M = 3,
                                N = 4,
                                Q = 2,
                                R = 8,
                                V = 9,
                                W = 29,
                                X = 256,
                                Y = X + 1 + W,
                                Z = 30,
                                $ = 19,
                                tt = 2 * Y + 1,
                                et = 15,
                                at = 3,
                                nt = 258,
                                rt = nt + at + 1,
                                it = 32,
                                st = 42,
                                ht = 69,
                                _t = 73,
                                lt = 91,
                                ot = 103,
                                dt = 113,
                                ut = 666,
                                ft = 1,
                                ct = 2,
                                gt = 3,
                                pt = 4,
                                bt = 3;
                            return j = [new m(0, 0, 0, 0, g), new m(4, 4, 8, 4, p), new m(4, 5, 16, 8, p), new m(4, 6, 32, 32, p), new m(4, 4, 16, 16, b), new m(8, 16, 32, 32, b), new m(8, 16, 128, 128, b), new m(8, 32, 128, 256, b), new m(32, 128, 258, 1024, b), new m(32, 258, 258, 4096, b)], {
                                deflateInit2: A,
                                deflateSetHeader: B,
                                deflate: S,
                                deflateEnd: C,
                                deflateSetDictionary: E
                            }
                        }(),
                        _ = function() {
                            function e(n) {
                                if (!(this instanceof e)) return new e(n);
                                this.options = r.assign({
                                    level: c,
                                    method: p,
                                    chunkSize: 16384,
                                    windowBits: 15,
                                    memLevel: 8,
                                    strategy: g,
                                    to: ""
                                }, n || {});
                                var s = this.options;
                                s.raw && s.windowBits > 0 ? s.windowBits = -s.windowBits : s.gzip && s.windowBits > 0 && s.windowBits < 16 && (s.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new t, this.strm.avail_out = 0;
                                var l = h.deflateInit2(this.strm, s.level, s.method, s.windowBits, s.memLevel, s.strategy);
                                if (l !== d) throw new Error(a[l]);
                                if (s.header && h.deflateSetHeader(this.strm, s.header), s.dictionary) {
                                    var o;
                                    if (o = "string" == typeof s.dictionary ? i.string2buf(s.dictionary) : "[object ArrayBuffer]" === _.call(s.dictionary) ? new Uint8Array(s.dictionary) : s.dictionary, l = h.deflateSetDictionary(this.strm, o), l !== d) throw new Error(a[l]);
                                    this._dict_set = !0
                                }
                            }

                            function n(t, n) {
                                var r = new e(n);
                                if (r.push(t, !0), r.err) throw r.msg || a[r.err];
                                return r.result
                            }

                            function s(t, e) {
                                return e = e || {}, e.gzip = !0, n(t, e)
                            }
                            var _ = Object.prototype.toString,
                                l = 0,
                                o = 4,
                                d = 0,
                                u = 1,
                                f = 2,
                                c = -1,
                                g = 0,
                                p = 8;
                            return e.prototype.push = function(t, e) {
                                var a, n, s = this.strm,
                                    c = this.options.chunkSize;
                                if (this.ended) return !1;
                                n = e === ~~e ? e : e === !0 ? o : l, "string" == typeof t ? s.input = i.string2buf(t) : "[object ArrayBuffer]" === _.call(t) ? s.input = new Uint8Array(t) : s.input = t, s.next_in = 0, s.avail_in = s.input.length;
                                do {
                                    if (0 === s.avail_out && (s.output = new r.Buf8(c), s.next_out = 0, s.avail_out = c), a = h.deflate(s, n), a !== u && a !== d) return this.onEnd(a), this.ended = !0, !1;
                                    0 !== s.avail_out && (0 !== s.avail_in || n !== o && n !== f) || ("string" === this.options.to ? this.onData(i.buf2binstring(r.shrinkBuf(s.output, s.next_out))) : this.onData(r.shrinkBuf(s.output, s.next_out)))
                                } while ((s.avail_in > 0 || 0 === s.avail_out) && a !== u);
                                return n === o ? (a = h.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === d) : n !== f || (this.onEnd(d), s.avail_out = 0, !0)
                            }, e.prototype.onData = function(t) {
                                this.chunks.push(t)
                            }, e.prototype.onEnd = function(t) {
                                t === d && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = r.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg
                            }, {
                                gzip: s
                            }
                        }();
                    return _
                }();
            }
            _543();
            this.start = function() {
                _47();
                _325(_544())
            };
            this.stop = _69;
            this.newPageView = _545;
            this.stopSession = _803;
            this.getSessionId = function() {
                return _12._55
            };
            this.getPageViewId = function() {
                return _12._52
            };
            this.tag = _99;
            this.star = _801;
            this.setVariable = _800;
            this.identify = _799;
            this.formSubmitAttempt = _548;
            this.formSubmitSuccess = _337;
            this.formSubmitFailure = _797;
            this.addFriction = function(_4, _19) {
                _146({
                    _4: _4,
                    _557: _19
                })
            };
            this.isRecording = function() {
                return _206
            };
            this.isReturningUser = function() {
                return _12._219
            };
            this.activateFeedback = _429;
            this.proxyAttachShadow = _277;
            this.recordingRate = _185;
            this.version = _210;
            this.lastUpdate = _795
        }

        function _632(_7) {
            var _597 = [];

            function _147(_91) {
                if (!_7.domMutationDetectorEnable || !_91 || _91.nodeType !== 1) return false;
                var _554 = _91.parentNode ? _91.parentNode.id : undefined;
                var _555 = _91.previousSibling ? _91.previousSibling.id : undefined;
                var _852 = _91.tagName;
                var _556 = _91.attributes ? _91.attributes.id : undefined;
                var _558 = _91.attributes ? _91.attributes.class : undefined;
                var _23 = _852;
                if (_7.domMutationUseParentNode && _554) _23 += '_' + _554;
                if (_7.domMutationUsePreviousSibling && _555) _23 += '_' + _555;
                if (_556) _23 += '_' + _556;
                if (_558) _23 += '_' + _558.replace(/\s/g, "_");
                var _599 = +new Date();
                var _68 = _597[_23];
                var _421 = _68 ? _68._422 : 0;
                var _912 = _68 ? ((_599 - _68._910) / 1000) : 0;
                var _577 = _421 < _7.domMutationCountThreshold;
                var _578 = _912 < _7.domMutationTimeThresholdInSeconds;
                var _147 = _68 ? (_577 && _578) : false;
                if (!_577 || !_578) _421 = 0;
                _597[_23] = {
                    _910: _599,
                    _422: _421 + 1
                };
                return _147
            }
            this._147 = _147
        }

        function _688(_3, _7, _114, _9, _18, _178) {
            var _152, _49, _10, _140;
            var _436 = 'mf_liveHeatmaps';
            var _31;
            var _233 = [];
            var _420;
            var _264 = false;

            function _47(_384, _382) {
                _49 = _384;
                _10 = _382;
                _264 = window.location.search.indexOf('mf_legacy=1') !== -1 ? true : false;
                _10('Live heatmaps starting');
                _140 = _114._297();
                if (!_140) {
                    _10('Live heatmaps not initiated - could not create root HTML element');
                    return
                }
                if (!_3.opener) {
                    _10('Live heatmaps not initiated - window.opener is missing');
                    return
                }
                _907()
            }

            function _69() {
                _298()
            }

            function _907() {
                _18._25(_3, 'message', function(_44) {
                    _909(_44.data);
                    switch (_44.data.message) {
                        case 'MouseflowLiveHeatmaps_Init_Received':
                            _3.clearInterval(_420);
                            break;
                        case 'MouseflowLiveHeatmaps_Init_Success':
                        case 'MouseflowLiveHeatmaps_Hello':
                            _152 = _44.origin;
                            _904(_44.data.minDate, _44.data.filters, _44.data.filteredViews);
                            _899(_44.data.scripts, function() {
                                var message;
                                if (_264) {
                                    message = {
                                        mfCommand: 'settings',
                                        value: {
                                            websiteSettings: _44.data.websiteSettings
                                        }
                                    }
                                } else {
                                    _609();
                                    _31.cssSelectorTracked = _44.data.websiteSettings.cssSelectorTracked;
                                    message = {
                                        mfCommand: 'settings_liveheatmap',
                                        value: _31
                                    }
                                }
                                _3.postMessage(JSON.stringify(message), '*')
                            });
                            break;
                        case 'MouseflowLiveHeatmaps_StreamData_Chunk':
                            _249(_44.data.requestUrl, true)._408(_44.data.dataChunk);
                            break;
                        case 'MouseflowLiveHeatmaps_StreamData_Success':
                            _249(_44.data.requestUrl)._123();
                            break;
                        case 'MouseflowLiveHeatmaps_StreamData_Error':
                            _249(_44.data.requestUrl)._165();
                            break;
                        case 'MouseflowLiveHeatmaps_RequestData_Success':
                            _249(_44.data.requestUrl)._123(_44.data.responseText);
                            break;
                        case 'MouseflowLiveHeatmaps_RequestData_Error':
                            _249(_44.data.requestUrl)._165();
                            break
                    }
                });
                _420 = _3.setInterval(_601, 500);
                _3.setTimeout(function() {
                    _3.clearInterval(_420)
                }, 10000);
                _601()
            }

            function _601() {
                _388({
                    message: 'MouseflowLiveHeatmaps_Init',
                    websiteId: _49,
                    legacy: _264
                })
            }

            function _904(_901, _159, _900) {
                _31 = _605();
                var _256 = _606();
                var _278 = _7.location.search.match(/mf_liveHeatmaps=([^&]+)/);
                var _416 = typeof _3.name === 'string' && _3.name.indexOf('mf_liveHeatmaps') === 0 ? _3.name.slice(15).split('_') : [];
                var _902 = _278 || _416[1] === 'init';
                if (_31 && !_902) {
                    _31.filters.url = _256.url;
                    _84(_31);
                    return
                }
                _31 = {
                    isMinimized: false,
                    appUrlBase: _152,
                    websiteId: _49,
                    filters: _256,
                    minDate: _901,
                    filteredViews: _900
                };
                if (_159 && _159.view) {
                    _31.selectedFilteredView = _159.view;
                    delete _159.view
                }
                if (_159) {
                    Object.keys(_159).forEach(function(_23) {
                        var _4 = _159[_23];
                        if (_4 instanceof Date) _4 = _275(_4);
                        _31.filters[_23] = _4
                    })
                }
                if (_278 && _278[1] !== '1') _31.filters.maptype = _278[1];
                else if (_416[2]) _31.filters.maptype = _416[2];
                _84(_31);
                _3.name = 'mf_liveHeatmaps'
            }

            function _609() {
                _31.devices = [_31.filters.device];
                _31.mapType = _31.filters.maptype;
                _31.url = _178._225()
            }

            function _899(_413, _156) {
                if (!_413) return;
                var _418 = 0;

                function _603() {
                    if (_418 >= _413.length) {
                        _156();
                        return
                    }
                    var _261 = _413[_418];
                    _911(_261);
                    _418++;
                    var _428 = document.createElement('script');
                    _428.src = _152 + _261;
                    _428.onload = _603;
                    _140.appendChild(_428)
                }
                _603()
            }

            function _605() {
                return _9._151(_3.localStorage.getItem(_436))
            }

            function _84(_31) {
                if (_10) _10('Live heatmaps saving settings');
                _31 = _31 ? _9._78(_31) : '';
                _3.localStorage.setItem(_436, _31)
            }

            function _298() {
                if (_10) _10('Live heatmaps removing settings');
                _3.localStorage.removeItem(_436)
            }

            function _249(_17, _896) {
                var _434 = _233.filter(function(_897) {
                    return _897._17 === _17
                })[0];
                if (!_896 && _434) _233.splice(_233.indexOf(_434), 1);
                return _434
            }

            function _923(_16) {
                if (typeof _16 !== 'object') return;
                _31 = _605();
                var _256 = _606();
                Object.keys(_16).forEach(function(_23) {
                    var _4 = _16[_23];
                    if (_4 instanceof Date) _4 = _275(_4);
                    _31.filters[_23] = _4 || undefined
                });
                Object.keys(_256).forEach(function(_23) {
                    if (!_31.filters[_23]) _31.filters[_23] = _256[_23]
                });
                if (_31.filters.view) {
                    _31.selectedFilteredView = _31.filters.view;
                    delete _31.filters.view
                }
                _84(_31)
            }

            function _606() {
                var _195 = new Date();
                _195 = new Date(_195.getFullYear(), _195.getMonth(), _195.getDate());
                var _432 = new Date(_195);
                _432.setDate(_432.getDate() - 29);
                return {
                    maptype: 'click',
                    device: 'desktop',
                    url: _178._225(),
                    fromdate: _275(_432),
                    todate: _275(_195)
                }
            }

            function _388(_15) {
                _3.opener.postMessage(_15, '*');
                _10('Sent ' + _15.message + (_15.requestUrl ? ', request URL: ' + _15.requestUrl : ''))
            }

            function _909(_15) {
                if (_15.message && _15.message.indexOf('MouseflowLiveHeatmaps_') === 0) _10('Received ' + _15.message + (_15.requestUrl ? ', request URL: ' + _15.requestUrl : ''))
            }

            function _911(_261) {
                _10('Live heatmaps loading script: ' + _261)
            }

            function _275(_100) {
                return _100.getFullYear() + '-' + _607(_100.getMonth() + 1, '00') + '-' + _607(_100.getDate(), '00')
            }

            function _607(_928, _608) {
                return (_608 + _928).slice(-_608.length)
            }
            this._47 = _47;
            this._69 = _69;
            this._659 = function(_16) {
                _923(_16);
                if (_264) {
                    _3.postMessage('{"mfCommand":"MouseflowHeatmap_UpdateHeatmap"}', '*')
                } else {
                    _609();
                    var message = {
                        mfCommand: 'settings_change',
                        value: {
                            settings: _31,
                            reloadData: _16.maptype ? false : true
                        }
                    };
                    _3.postMessage(JSON.stringify(message), '*')
                }
                _10('Sent postmessage updateheatmap')
            };
            _3.mouseflowHeatmap = {
                streamData: function(_17, _408, _123, _165) {
                    _233.push({
                        _17: _17,
                        _408: _408 || function() {},
                        _123: _123 || function() {},
                        _165: _165 || function() {}
                    });
                    _388({
                        message: 'MouseflowLiveHeatmaps_StreamData',
                        requestUrl: _17
                    })
                },
                getData: function(_17, _123, _165) {
                    _233.push({
                        _17: _17,
                        _123: _123 || function() {},
                        _165: _165 || function() {}
                    });
                    _388({
                        message: 'MouseflowLiveHeatmaps_RequestData',
                        requestUrl: _17
                    })
                }
            }
        }

        function _695(_3, _114, _24, _9, _18, _7) {
            var _11 = _3.document,
                _152, _49, _10, _13, _140, _21, _594, _595, _611, _130, _97, _304, _132, _614, _171, _217, _212, _133, _112, _117;

            function _47(_919, _384, _246, _241, _271, _382) {
                _152 = _919;
                _49 = _384;
                _10 = _382;
                _13 = _690() || {
                    _113: false,
                    _82: 'exclude',
                    _66: _246 || [],
                    _64: _241 || [],
                    _81: _271 || []
                };
                _10('Starting privacy tool');
                _140 = _114._297();
                if (!_140) {
                    _10('Privacy tool not initiated - could not create root HTML element');
                    return
                }
                _918();
                _24._57(function() {
                    _916();
                    _84(_13)
                }, 1000);
            }

            function _69() {
                _867();
                _114._373()
            }

            function _918() {
                _18._25(_3, 'message', function(event) {
                    switch (event.data.message) {
                        case 'MouseflowPrivacyTool_Hello':
                            _10('Privacy tool API ready');
                            _212 = event.source;
                            if (event.data.cssSelectorBlacklist) {
                                _13._66 = event.data.cssSelectorBlacklist;
                                _13._64 = event.data.cssSelectorWhitelist;
                                _13._81 = event.data.cssSelectorTracked
                            }
                            _610();
                            break;
                        case 'MouseflowPrivacyTool_Save_Success':
                            _10('Successfully saved CSS lists');
                            if (_133) _133();
                            _133 = undefined;
                            _112 = undefined;
                            break;
                        case 'MouseflowPrivacyTool_Save_Failed':
                            _10('Failed saving CSS lists');
                            if (_112) _112();
                            _133 = undefined;
                            _112 = undefined;
                            _370('Uh oh! We couldn\'t save your changes.<br><br>' + 'Please refresh the page and try again.');
                            break;
                        case 'MouseflowPrivacyTool_Unauthorized':
                            _10('Privacy tool API logged out - cannot save');
                            if (_112) _112();
                            _133 = undefined;
                            _112 = undefined;
                            _370('Uh oh! We couldn\'t save your changes.<br><br>' + 'Please log into Mouseflow and try again.');
                            break
                    }
                });
                if (_3.opener) {
                    _10('Loading privacy tool API using window.opener');
                    _3.opener.postMessage({
                        message: 'MouseflowPrivacyTool_Hello'
                    }, '*')
                }
                _24._57(function() {
                    if (!_212) {
                        _10('Loading privacy tool API using iframe');
                        var _228 = _11.createElement('iframe');
                        _228.style.width = '0px';
                        _228.style.height = '0px';
                        _228.style.display = 'none';
                        _228.src = _152 + '/websites/' + _49 + '/privacytool';
                        _140.appendChild(_228);
                        _24._57(function() {
                            if (!_212) {
                                _10('Loading privacy tool API timed out');
                                _698('We\'re having trouble loading the Privacy Tool on this page. Please try ' + 'refreshing the page or logging in to Mouseflow and reloading the Privacy Tool from there.<br><br>' + 'If you need help, please don\'t hesitate to reach out to us at:  <a class="green" href="mailto:support@mouseflow.com">support@mouseflow.com</a>')
                            }
                        }, 5000)
                    }
                }, 2000)
            }

            function _916() {
                _21 = _700(_13);
                _594 = _21.querySelector('.tool-exclude output');
                _595 = _21.querySelector('.tool-whitelist output');
                _611 = _21.querySelector('.tool-track output');
                _130 = _21.querySelector('.tool-status-text');
                _97 = _21.querySelector('.btn-widget');
                _304 = _21.querySelector('.tool-loading h2');
                _13._66.forEach(_589);
                _13._64.forEach(_588);
                _13._81.forEach(_590);
                _140.appendChild(_21);
                _132 = _701();
                _21.appendChild(_132);
                _9._213(_11.body, 'mf-privacy-tool-opened', !_13._113);
                _914();
                _610()
            }

            function _610() {
                if (_21 && _212) {
                    _9._46(_21, 'is-loading');
                    _101();
                    _913();
                    _262()
                }
            }

            function _371() {
                _298();
                _69();
                _3.close()
            }

            function _914() {
                _18._25(_21, 'click', '.mf-tool-close', _371, {
                    _92: true
                })
            }

            function _913() {
                _18._25(_21, 'click', '.mf-tool-toggle', _865, {
                    _92: true
                });
                _18._25(_21, 'click', '.mf-tool-close', _371, {
                    _92: true
                });
                _18._25(_21, 'click', '.mf-tool-exclude', _864, {
                    _92: true
                });
                _18._25(_21, 'click', '.mf-tool-whitelist', _863, {
                    _92: true
                });
                _18._25(_21, 'click', '.mf-tool-track', _862, {
                    _92: true
                });
                _18._25(_21, 'click', '.highlight-excluded', _859, {
                    _92: true
                });
                _18._25(_21, 'click', '.highlight-whitelisted', _856, {
                    _92: true
                });
                _18._25(_21, 'click', '.highlight-tracked', _871, {
                    _92: true
                });
                _18._25(_21, 'click', '.mf-remove-excluded', _886, {
                    _92: true
                });
                _18._25(_21, 'click', '.mf-remove-whitelisted', _880, {
                    _92: true
                });
                _18._25(_21, 'click', '.mf-remove-tracked', _879, {
                    _92: true
                });
                _18._25(_21, 'submit', _878, {
                    _92: true
                });
                _18._25(_11, 'mouseover', _877, {
                    _33: true
                });
                _18._25(_11, 'mouseleave', _677, {
                    _33: true
                });
                _18._25(_11, 'mouseup', _676, {
                    _33: true
                });
                _18._25(_11, 'mouseenter', _145, {
                    _33: true
                });
                _18._25(_11, 'mousemove', _145, {
                    _33: true
                });
                _18._25(_11, 'mousedown', _145, {
                    _33: true
                });
                _18._25(_11, 'click', _145, {
                    _33: true
                });
                _18._25(_11, 'mouseout', _145, {
                    _33: true
                });
                _18._25(_11, 'scroll', _101, {
                    _33: true,
                    _201: true
                });
                _18._25(_3, 'resize', _101, {
                    _33: true,
                    _201: true
                });
                var MutationObserver = _3.MutationObserver || _3.WebKitMutationObserver || _3.MozMutationObserver;
                if (MutationObserver) {
                    _217 = new MutationObserver(function(_596) {
                        var _892 = _596.some(function(_68) {
                            if (_68.target.nodeType !== 1 || _9._71(_68.target, '#mouseflow *')) return false;
                            var _893 = _68.oldValue && _68.oldValue.indexOf('mf-highlight') !== -1;
                            var _895 = _68.target.className && _68.target.className.indexOf('mf-highlight') !== -1;
                            var _891 = _893 || _895;
                            if (_68.type === 'attributes' && _68.attributeName === 'class' && _891) return false;
                            return true
                        });
                        if (_892) _101();
                        _596.forEach(function(_68) {
                            _68.addedNodes.forEach(function(_26) {
                                if (!_26.shadowRoot) return;
                                _217.observe(_26.shadowRoot, {
                                    childList: true,
                                    subtree: true
                                });
                                _262(_26)
                            })
                        })
                    });
                    _217.observe(_11, {
                        attributes: true,
                        childList: true,
                        characterData: true,
                        subtree: true,
                        attributeOldValue: true
                    })
                }
            }

            function _867() {
                _18._550();
                if (_217) _217.disconnect()
            }

            function _262(_163) {
                if (!_117) _117 = _708();
                if (!_163) _163 = _11;
                for (var _56 = _163.firstChild; _56; _56 = _56.nextSibling) {
                    _262(_56);
                    var _110 = _56.shadowRoot;
                    if (!_110) continue;
                    _262(_110);
                    if (_110.adoptedStyleSheets) {
                        if (_110.adoptedStyleSheets.indexOf(_117) > -1) continue;
                        var _542 = Array.prototype.slice.call(_110.adoptedStyleSheets);
                        _542.push(_117);
                        _110.adoptedStyleSheets = _542
                    } else {
                        if (_110.querySelector('.mf-privacy-tool-style')) continue;
                        var _98 = _11.createElement('style');
                        _98.type = 'text/css';
                        _98.innerHTML = _391();
                        _98.className = 'mf-privacy-tool-style';
                        _110.appendChild(_98)
                    }
                }
            }

            function _865() {
                _13._113 = !_13._113;
                _84(_13);
                _9._213(_21, 'tool-closed', _13._113);
                _9._213(_11.body, 'mf-privacy-tool-opened', !_13._113);
                var _317 = _21.getElementsByClassName('step')[0];
                var _310 = _21.getElementsByClassName('tool-container')[0];
                if (_13._113) {
                    _9._46(_317, 'fade-out');
                    _9._60(_317, 'fade-in');
                    _9._46(_310, 'fade-in');
                    _9._60(_310, 'fade-out')
                } else {
                    _9._46(_317, 'fade-in');
                    _9._60(_317, 'fade-out');
                    _9._46(_310, 'fade-out');
                    _9._60(_310, 'fade-in')
                }
            }

            function _864() {
                _13._82 = 'exclude';
                _84(_13);
                _9._46(_21.getElementsByClassName('mf-tool-whitelist')[0], 'active');
                _9._46(_21.getElementsByClassName('tool-whitelist')[0], 'active');
                _9._46(_21.getElementsByClassName('mf-tool-track')[0], 'active');
                _9._46(_21.getElementsByClassName('tool-track')[0], 'active');
                _9._60(_21.getElementsByClassName('mf-tool-exclude')[0], 'active');
                _9._60(_21.getElementsByClassName('tool-exclude')[0], 'active')
            }

            function _863() {
                _13._82 = 'whitelist';
                _84(_13);
                _9._46(_21.getElementsByClassName('mf-tool-exclude')[0], 'active');
                _9._46(_21.getElementsByClassName('tool-exclude')[0], 'active');
                _9._46(_21.getElementsByClassName('mf-tool-track')[0], 'active');
                _9._46(_21.getElementsByClassName('tool-track')[0], 'active');
                _9._60(_21.getElementsByClassName('mf-tool-whitelist')[0], 'active');
                _9._60(_21.getElementsByClassName('tool-whitelist')[0], 'active')
            }

            function _862() {
                _13._82 = 'track';
                _84(_13);
                _9._46(_21.getElementsByClassName('mf-tool-exclude')[0], 'active');
                _9._46(_21.getElementsByClassName('tool-exclude')[0], 'active');
                _9._46(_21.getElementsByClassName('mf-tool-whitelist')[0], 'active');
                _9._46(_21.getElementsByClassName('tool-whitelist')[0], 'active');
                _9._60(_21.getElementsByClassName('mf-tool-track')[0], 'active');
                _9._60(_21.getElementsByClassName('tool-track')[0], 'active')
            }

            function _859(_5) {
                if (_13._82 === 'exclude') {
                    _587(_5.target.getAttribute('data-target'));
                    _101()
                }
            }

            function _856(_5) {
                if (_13._82 === 'whitelist') {
                    _593(_5.target.getAttribute('data-target'));
                    _101()
                }
            }

            function _871(_5) {
                if (_13._82 === 'track') {
                    _586(_5.target.getAttribute('data-target'));
                    _101()
                }
            }

            function _886(_5) {
                _587(_5.target.parentNode.getAttribute('data-target'));
                _101()
            }

            function _880(_5) {
                _593(_5.target.parentNode.getAttribute('data-target'));
                _101()
            }

            function _879(_5) {
                _586(_5.target.parentNode.getAttribute('data-target'));
                _101()
            }

            function _878() {
                _694();
                _696(_13._66, _13._64, _13._81, function() {
                    _585();
                    _97.innerHTML = 'Saved';
                    _298();
                    _24._57(_371, 500)
                }, function() {
                    _585()
                })
            }

            function _877(_5) {
                _24._119(_614);
                var _592 = _11.getElementsByClassName('mf-highlight');
                for (var _2 = 0; _2 < _592.length; _2++) {
                    _9._46(_592[_2], 'mf-highlight')
                }
                _9._60(_132, 'hidden');
                if (_145(_5) || _591(_5.target)) return;
                _9._60(_5.target, 'mf-highlight');
                _614 = _24._57(function() {
                    var _42 = _5.target.getBoundingClientRect();
                    _132.style.left = _42.left + _3.pageXOffset + 'px';
                    _132.style.top = _42.top + _3.pageYOffset + 'px';
                    _132.style.width = _42.width + 'px';
                    _132.style.height = _42.height + 'px';
                    _9._46(_132, 'hidden')
                }, 75)
            }

            function _677(_5) {
                if (_145(_5)) return;
                if (_5.target === _11) {
                    _9._60(_132, 'hidden')
                }
            }

            function _676(_5) {
                if (_145(_5)) return;
                if (_5.button !== 0 || _591(_5.target)) return;
                _9._46(_5.target, 'mf-highlight');
                var _8 = _664(_5.target);
                if (_13._82 === 'exclude') {
                    _589(_8)
                } else if (_13._82 === 'whitelist') {
                    _588(_8)
                } else {
                    _590(_8)
                }
                _101()
            }

            function _145(_5) {
                if (_13._113 || _5.target.nodeType !== 1 || _9._71(_5.target, '#mouseflow *')) return true;
                _5.preventDefault();
                _5.stopPropagation();
                return false
            }

            function _591(_1) {
                return _1 === _11.body || _9._71(_1, 'html') || (_13._82 === 'whitelist' && (!/INPUT|TEXTAREA/.test(_1.tagName) || /checkbox|radio|button|submit/.test(_1.type)))
            }

            function _590(_8) {
                if (_8 && _13._81.indexOf(_8) === -1) {
                    _13._81.unshift(_8);
                    _84(_13)
                }
                _190()
            }

            function _589(_8) {
                if (_8 && _13._66.indexOf(_8) === -1) {
                    _13._66.unshift(_8);
                    _84(_13)
                }
                _190()
            }

            function _588(_8) {
                if (_8 && _13._64.indexOf(_8) === -1) {
                    _13._64.unshift(_8);
                    _84(_13)
                }
                _190()
            }

            function _587(_8) {
                if (_8 && _13._66.indexOf(_8) !== -1) {
                    _13._66 = _13._66.filter(function(_173) {
                        return _173 !== _8
                    });
                    _84(_13)
                }
                _190()
            }

            function _593(_8) {
                if (_8 && _13._64.indexOf(_8) !== -1) {
                    _13._64 = _13._64.filter(function(_173) {
                        return _173 !== _8
                    });
                    _84(_13)
                }
                _190()
            }

            function _586(_8) {
                if (_8 && _13._81.indexOf(_8) !== -1) {
                    _13._81 = _13._81.filter(function(_173) {
                        return _173 !== _8
                    });
                    _84(_13)
                }
                _190()
            }

            function _101() {
                _24._119(_171);
                if (!_171) {
                    _24._57(function() {
                        if (_171) {
                            _24._119(_171);
                            _584();
                            _171 = undefined
                        }
                    }, 200)
                }
                _171 = _24._57(function() {
                    _584();
                    _171 = undefined
                }, 100)
            }

            function _584() {
                var _583 = _21.querySelectorAll('.highlight-excluded,.highlight-whitelisted,.highlight-tracked'),
                    _2;
                for (_2 = 0; _2 < _583.length; _2++) {
                    _21.removeChild(_583[_2])
                }
                _13._66.forEach(function(_8) {
                    var _58 = _138(_8, _11);
                    for (_2 = 0; _2 < _58.length; _2++) {
                        _21.appendChild(_704(_8, _58[_2].getBoundingClientRect()))
                    }
                });
                _13._64.forEach(function(_8) {
                    var _58 = _138(_8, _11);
                    for (_2 = 0; _2 < _58.length; _2++) {
                        _21.appendChild(_681(_8, _58[_2].getBoundingClientRect()))
                    }
                });
                _13._81.forEach(function(_8) {
                    var _58 = _138(_8, _11);
                    for (_2 = 0; _2 < _58.length; _2++) {
                        _21.appendChild(_663(_8, _58[_2].getBoundingClientRect()))
                    }
                })
            }

            function _138(_8, _34) {
                try {
                    var _58 = [];
                    _8.split(',').forEach(function(_8) {
                        var _39 = _8.split(' > :document-fragment: > ', 1);
                        _34.querySelectorAll(_39[0]).forEach(function(_1) {
                            if (_39[1] && _1.shadowRoot) {
                                _138(_39[1], _1.shadowRoot).forEach(function(_1) {
                                    _58.push(_1)
                                })
                            } else {
                                _58.push(_1)
                            }
                        })
                    });
                    return _58
                } catch (_50) {
                    _10('Could not get element from selector: ' + ex.message)
                }
            }

            function _696(_66, _64, _81, _123, _685) {
                if (_133) {
                    _10('Attempted to save CSS lists while previous save was in progress');
                    return
                }
                _133 = _123;
                _112 = _685;
                _699();
                _212.postMessage({
                    message: 'MouseflowPrivacyTool_Save',
                    blacklist: _66,
                    whitelist: _64,
                    tracked: _81
                }, '*');
                _24._57(function() {
                    if (_133 === _123) {
                        _10('Saving CSS lists timed out');
                        if (_112) _112();
                        _133 = undefined;
                        _112 = undefined;
                        _370('Uh oh! We couldn\'t save your changes.<br><br>' + 'Please log into Mouseflow and try again.')
                    }
                }, 7500)
            }

            function _664(_1) {
                if (_1 == null) return null;
                try {
                    var _41 = [];
                    while (_1) {
                        var _34 = _1.getRootNode ? _1.getRootNode() : _11;
                        var _8 = _582(_1, _34);
                        _41.unshift(_8);
                        _1 = _34.host
                    }
                    return _41.join(' > :document-fragment: > ')
                } catch (ex) {
                    _10('Could not get element selector: ' + ex.message);
                    return null
                }
            }

            function _930(_1, _34) {
                var _216 = _683(_1, _34);
                if (!_216) return null;
                if (_9._71(_1, _216)) return _216;
                var _114 = _34.querySelector(_216);
                var _106 = _1;
                var _39 = [];
                while (_106 && _106 !== _114) {
                    var _36 = _405(_106, _34);
                    if (_36.length === 0) _36.push(_581(_106));
                    _39.unshift(_36);
                    _106 = _106.parentNode
                }
                _39.unshift(_216);
                return _398(_39, _34)
            }

            function _582(_1, _34, _39) {
                if (!_39) _39 = [];
                var _36 = _405(_1, _34);
                _39.unshift(_36);
                var _8 = _398(_39, _34);
                if (_8) return _8;
                if (_36.length === 0) {
                    _36.push(_581(_1));
                    _8 = _398(_39, _34);
                    if (_8) return _8
                }
                return _582(_1.parentNode, _34, _39)
            }

            function _398(_39, _34) {
                var _390 = _39.length > 1 ? _687.apply(this, _39) : _39[0];
                for (var _2 = 0; _2 < _390.length; _2++) {
                    if (_34.querySelectorAll(_390[_2]).length === 1) return _390[_2]
                }
                return null
            }

            function _683(_1, _34) {
                var _106 = _1;
                while (_106) {
                    var _36 = _405(_106, _34);
                    for (var _2 = 0; _2 < _36.length; _2++) {
                        if (_34.querySelectorAll(_36[_2]).length === 1) return _36[_2]
                    }
                    _106 = _106.parentNode
                }
                return null
            }

            function _405(_1, _34) {
                if (_1 === _11.body) return ['body'];
                var _36 = [];
                var _163 = _1.parentNode;
                var _2;
                var _41 = _1.getAttribute('id');
                var _8 = '#' + _9._155(_41);
                if (_41 && _34.querySelectorAll(_8).length === 1 && !_9._148(_1, 'data-mf-ignore-child-ids') && _7.useIdSelectors) return [_8];
                var _19 = _1.getAttribute('name');
                _8 = '[name="' + _9._155(_19) + '"]';
                if (_19) {
                    if (_34.querySelectorAll(_8).length === 1) return [_8];
                    if (_163.querySelectorAll(_8).length === 1) _36.push(_8)
                }
                var _88 = _9._172(_1);
                for (_2 = 0; _2 < _88.length; _2++) {
                    _8 = '.' + _9._155(_88[_2]);
                    if (_34.querySelectorAll(_8).length === 1) return [_8];
                    if (_163.querySelectorAll(_8).length === 1) _36.push(_8)
                }
                for (_2 = 0; _2 < _88.length; _2++) {
                    _8 = _9._155(_1.tagName.toLowerCase()) + '.' + _9._155(_88[_2]);
                    if (_34.querySelectorAll(_8).length === 1) return [_8];
                    if (_163.querySelectorAll(_8).length === 1) _36.push(_8)
                }
                return _36
            }

            function _581(_1) {
                var _8 = _9._155(_1.tagName.toLowerCase());
                if (_1.parentNode.querySelectorAll(_8).length === 1) return _8;
                var _198 = 0;
                var _290 = _1;
                while (_290) {
                    if (_290.tagName === _1.tagName) _198++;
                    _290 = _290.previousElementSibling
                }
                _8 += ':nth-of-type(' + _198 + ')';
                return _8
            }

            function _687() {
                var _36, _204, _183, _2;
                var _108 = 0;
                var _179 = arguments.length - 1;
                var _293 = false;
                var _260 = true;
                while (_108 < _179) {
                    _204 = undefined;
                    for (_2 = 0; _2 <= _108; _2++) {
                        _204 = _204 ? _302(_204, arguments[_2], ' > ') : arguments[_2]
                    }
                    _183 = undefined;
                    for (_2 = arguments.length - 1; _2 >= _179; _2--) {
                        _183 = _183 ? _302(arguments[_2], _183, ' > ') : arguments[_2]
                    }
                    var _294 = (_108 + 1) == _179 ? ' > ' : ' ';
                    _36 = _36 ? _36.concat(_302(_204, _183, _294)) : _302(_204, _183, _294);
                    if (_260 && _293) {
                        _179--;
                        _293 = false;
                        _260 = true
                    } else if (_260) {
                        _179--;
                        _293 = true;
                        _260 = false
                    } else {
                        _108++;
                        if (_108 != _179) _179++;
                        _293 = true;
                        _260 = true
                    }
                }
                return _36
            }

            function _302(_580, _579, _294) {
                var _36 = [];
                for (var _2 = 0; _2 < _580.length; _2++) {
                    for (var _59 = 0; _59 < _579.length; _59++) {
                        _36.push(_580[_2] + _294 + _579[_59])
                    }
                }
                return _36
            }

            function _690() {
                var _4 = _3.localStorage.getItem('mf_privacyTool');
                return _4 ? _9._151(_4) : null
            }

            function _84(_31) {
                _31 = _31 ? _9._78(_31) : '';
                _3.localStorage.setItem('mf_privacyTool', _31)
            }

            function _298() {
                _3.localStorage.removeItem('mf_privacyTool')
            }

            function _694() {
                _97.setAttribute('disabled', '');
                _97.setAttribute('original-html', _97.innerHTML);
                _97.innerHTML = '<i>&bull;</i> <i>&bull;</i> <i>&bull;</i> <i>&bull;</i>';
                _9._60(_97, 'loading')
            }

            function _585() {
                _9._46(_97, 'loading');
                _97.innerHTML = _97.getAttribute('original-html');
                _97.removeAttribute('original-html');
                _97.removeAttribute('disabled')
            }

            function _190() {
                _594.innerHTML = _673(_13._66);
                _595.innerHTML = _674(_13._64);
                _611.innerHTML = _675(_13._81);
                _130.innerHTML = _392(_13._66, _13._64, _13._81);
                _9._46(_130, 'red')
            }

            function _698(_158) {
                if (!_304) return;
                _304.innerHTML = _158;
                _9._60(_304, 'red')
            }

            function _370(_158) {
                if (!_130) return;
                _130.innerHTML = _158;
                _9._60(_130, 'red')
            }

            function _699() {
                if (!_130) return;
                _130.innerHTML = _392(_13._66, _13._64, _13._81);
                _9._46(_130, 'red')
            }

            function _700(_13) {
                var _30 = _11.createElement('div');
                _30.className = 'privacy-tool is-loading';
                _30.innerHTML = _666(_13);
                if (_13._113) _30.className += ' tool-closed';
                var _98 = _11.createElement('style');
                _98.type = 'text/css';
                _98.innerHTML = _391();
                _30.appendChild(_98);
                return _30
            }

            function _701() {
                var _30 = _11.createElement('div');
                _30.className = 'highlight-box';
                return _30
            }

            function _704(_8, _42) {
                var _30 = _11.createElement('div');
                _30.className = 'highlight-box highlight-excluded';
                _30.setAttribute('data-target', _8);
                _30.style.left = _42.left + _3.pageXOffset + 'px';
                _30.style.top = _42.top + _3.pageYOffset + 'px';
                _30.style.width = _42.width + 'px';
                _30.style.height = _42.height + 'px';
                return _30
            }

            function _681(_8, _42) {
                var _30 = _11.createElement('div');
                _30.className = 'highlight-box highlight-whitelisted';
                _30.setAttribute('data-target', _8);
                _30.style.left = _42.left + _3.pageXOffset + 'px';
                _30.style.top = _42.top + _3.pageYOffset + 'px';
                _30.style.width = _42.width + 'px';
                _30.style.height = _42.height + 'px';
                return _30
            }

            function _663(_8, _42) {
                var _30 = _11.createElement('div');
                _30.className = 'highlight-box highlight-tracked';
                _30.setAttribute('data-target', _8);
                _30.style.left = _42.left + _3.pageXOffset + 'px';
                _30.style.top = _42.top + _3.pageYOffset + 'px';
                _30.style.width = _42.width + 'px';
                _30.style.height = _42.height + 'px';
                return _30
            }

            function _666(_13) {
                return ('<form action="#" id="mf_privacy_tool">' + _670(_13) + _671(_13) + '</form>')
            }

            function _670(_13) {
                return ('<div class="step step-block' + (_13._113 ? ' fade-in' : '') + '">' + '<div class="widget-header">' + '<div class="widget-text">Open Privacy Tool</div>' + '<div class="widget-toggle">' + '<a href="#" class="btn-arrow btn-arrow--up mf-tool-toggle"></a>' + '</div>' + '</div>' + '</div>')
            }

            function _671() {
                return ('<div class="tool-container' + (_13._113 ? '' : ' fade-in') + '">' + '<div class="tool-header">' + '<img class="logo" alt="Mouseflow" src="https://mouseflow.com/static/img/logo-light.png">' + '<div class="tool-toggle">' + '<div class="tool-toggle-text">' + 'Hide to navigate' + '</div>' + '<div class="tool-toggle-icon">' + '<a href="#" class="btn-arrow btn-arrow--down mf-tool-toggle"></a>' + '</div>' + '</div>' + '<div class="tool-close">' + '<div class="tool-toggle-text">' + 'Close' + '</div>' + '<div class="tool-toggle-icon">' + '<a href="#" class="btn-cross mf-tool-close"></a>' + '</div>' + '</div>' + '</div>' + '<div class="tool-content">' + '<ul class="tool-menu">' + '<li class="tool-menu-item mf-tool-exclude' + (_13._82 === 'exclude' ? ' active' : '') + '">' + 'Excluded content' + '</li>' + '<li class="tool-menu-item mf-tool-whitelist' + (_13._82 === 'whitelist' ? ' active' : '') + '">' + 'Whitelisted fields' + '</li>' + '<li class="tool-menu-item mf-tool-track' + (_13._82 === 'track' ? ' active' : '') + '">' + 'Tracked elements' + '</li>' + '</ul>' + '<div class="tool-exclude' + (_13._82 === 'exclude' ? ' active' : '') + '">' + '<h2>Exclude content from appearing in Mouseflow</h2>' + '<p>' + 'To get started, just click the element(s) or content you wish to exclude. ' + 'This will add the necessary CSS selectors to be blocked in the list below.' + '</p>' + '<p>' + 'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' + '</p>' + '<p>' + 'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' + '</p>' + '<h3>Excluded content:</h3>' + '<div>' + '<output></output>' + '</div>' + '</div>' + '<div class="tool-whitelist' + (_13._82 === 'whitelist' ? ' active' : '') + '">' + '<h2>Whitelist input fields</h2>' + '<p>' + 'You can whitelist any input field or text area, simply by clicking the field(s) on the page. ' + 'This will let Mouseflow record input in that field.' + '</p>' + '<p>' + 'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' + '</p>' + '<p>' + 'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' + '</p>' + '<h3>Whitelisted fields:</h3>' + '<div>' + '<output></output>' + '</div>' + '</div>' + '<div class="tool-track' + (_13._82 === 'track' ? ' active' : '') + '">' + '<h2>Tracked elements</h2>' + '<p>' + 'When viewing a heatmap, most of your links will include a box that shows additional metrics(clicks, hovers, etc.).In some cases, these boxes will not appear.' + '</p>' + '<p>' + 'If you\'ve found such an element, you can select it here. That will ensure the additional metrics are shown in your heatmaps.' + '</p>' + '<p>' + 'When you\'re finished, click "Hide to navigate" to browse to another page to exclude additional content, or click "Save and close" to keep your changes.' + '</p>' + '<p>' + 'For more details and best practices, read our <a href="#" class="js-external-link green" data-link-url="https://help.mouseflow.com/articles/4263776">Support Guide</a>.' + '</p>' + '<h3>Tracked elements:</h3>' + '<div>' + '<output></output>' + '</div>' + '</div>' + '<div class="tool-status">' + '<div class="tool-status-text">' + _392(_13._66, _13._64, _13._81) + '</div>' + '<div class="tool-status-buttons">' + '<button type="submit" class="btn-widget">Save and close</button>' + '<a href="#" class="green bold mf-tool-close">Close Privacy Tool</a>' + '</div>' + '</div>' + '<div class="tool-loading">' + '<h2 class="loading">Loading the Privacy Tool<i>.</i><i>.</i><i>.</i></h2>' + '</div>' + '<div class="tool-message">' + '<h3>Browser window is to small to load the Privacy Tool</h3>' + '<p>To use Mouseflow\'s Privacy Tool, you need to view the page in a larger browser window.</p>' + '</div>' + '</div>' + '</div>')
            }

            function _673(_39) {
                return _39.map(function(_8) {
                    return ('<div class="tm-tag" data-target="' + _9._149(_8) + '">' + _9._149(_8) + '<a href="#" class="btn-cross mf-remove-excluded"></a>' + '</div>')
                }).join('')
            }

            function _674(_39) {
                return _39.map(function(_8) {
                    return ('<div class="tm-tag" data-target="' + _9._149(_8) + '">' + _9._149(_8) + '<a href="#" class="btn-cross mf-remove-whitelisted"></a>' + '</div>')
                }).join('')
            }

            function _675(_39) {
                return _39.map(function(_8) {
                    return ('<div class="tm-tag" data-target="' + _9._149(_8) + '">' + _9._149(_8) + '<a href="#" class="btn-cross mf-remove-tracked"></a>' + '</div>')
                }).join('')
            }

            function _392(_66, _64, _604) {
                return '<p>You have:</p>' + '<p>' + '&nbsp;&bull; excluded <i class="green"> ' + _66.length + '</i> ' + (_66.length === 1 ? 'element' : 'elements') + '<br>' + '&nbsp;&bull; whitelisted <i class="green">' + _64.length + '</i> input ' + (_64.length === 1 ? 'field' : 'fields') + '<br>' + '&nbsp;&bull; tracked <i class="green">' + _604.length + '</i> input ' + (_604.length === 1 ? 'element' : 'elements') + '</p>'
            }

            function _708() {
                var _105 = new CSSStyleSheet();
                _105.replace(_391());
                return _105
            }

            function _391() {
                return ('.mf-highlight {' + 'cursor: pointer !important;' + '}' + '.mf-privacy-tool-opened iframe {' + 'pointer-events: none;' + '}' + '#mouseflow .highlight-box {' + 'background-color: #add8e6;' + 'border: 2px dotted #808080;' + 'position: absolute;' + 'border-radius: 2px;' + 'z-index: 2147483646;' + 'cursor: pointer;' + 'pointer-events: none;' + 'opacity: 0.5;' + '-webkit-transition: opacity .075s linear;' + 'transition: opacity .075s linear;' + '}' + '#mouseflow .highlight-box.hidden,' + '#mouseflow .tool-closed .highlight-box {' + 'opacity: 0;' + '}' + '#mouseflow .highlight-box.highlight-excluded {' + 'background-color: #ffb6c1;' + 'pointer-events: initial;' + '}' + '#mouseflow .highlight-box.highlight-whitelisted {' + 'background-color: #90ee90;' + 'pointer-events: initial;' + '}' + '#mouseflow .highlight-box.highlight-tracked {' + 'background-color: orange;' + 'pointer-events: initial;' + '}' + '#mouseflow .tool-closed .highlight-box.highlight-excluded,' + '#mouseflow .tool-closed .highlight-box.highlight-whitelisted,' + '#mouseflow .tool-closed .highlight-box.highlight-tracked {' + 'pointer-events: none;' + '}' + '#mouseflow .widget-header,' + '#mouseflow .btn-widget {' + 'background: #4cb377;' + '}' + '#mouseflow .widget-text,' + '#mouseflow .btn-widget,' + '#mouseflow .btn-arrow,' + '#mouseflow .btn-cross {' + 'color: #fff;' + '}' + '#mouseflow .tm-tag {' + 'margin: 7px 7px 0 0;' + 'padding: 7px;' + 'display: inline-block;' + 'border-radius: 3px;' + 'background-color: #a7a7a7;' + 'color: white;' + 'font-size: 13px;' + '}' + '#mouseflow .step {' + 'visibility: hidden;' + 'opacity: 0;' + 'position: fixed;' + 'bottom: 30px;' + 'right: 30px;' + 'z-index: 2147483647;' + 'width: 300px;' + 'border-radius: 10px;' + 'box-shadow: 0 0 15px rgba(0, 0, 0, .35);' + 'overflow: hidden;' + '}' + '#mouseflow a:hover {' + 'text-decoration: underline;' + '}' + '#mouseflow h2 {' + 'font-size: 21px;' + 'font-weight: 700;' + 'line-height: 1.4em;' + 'margin-bottom: 6px;' + '}' + '#mouseflow h3 {' + 'font-size: 16px;' + 'font-weight: 700;' + 'line-height: 1.4em;' + '}' + '#mouseflow p {' + 'margin-bottom: 8px;' + 'line-height: 1.4em;' + '}' + '#mouseflow .green {' + 'color: #47b475;' + '}' + '#mouseflow .red {' + 'color: #ea1e1e;' + '}' + '#mouseflow .bold {' + 'font-weight: 700;' + '}' + '#mouseflow .tool-container {' + 'visibility: visible;' + 'opacity: 0;' + 'position: fixed;' + 'bottom: 0;' + 'left: 0;' + 'width: 100%;' + 'height: 350px;' + 'max-height: 40%;' + 'overflow: hidden;' + 'background-color: white;' + 'border-top: 2px solid #37312f;' + 'z-index: 2147483647;' + '}' + '#mouseflow .tool-header {' + 'background-color: #47403e;' + 'height: 58px;' + '}' + '#mouseflow .logo {' + 'display: inline;' + 'height: 40px;' + 'margin: 9px 10px;' + '}' + '#mouseflow .tool-toggle,' + '#mouseflow .tool-close {' + 'float: right;' + 'padding: 18px 24px;' + '}' + '#mouseflow .is-loading .tool-close {' + 'display: block;' + '}' + '#mouseflow .is-loading .tool-toggle,' + '#mouseflow .tool-close {' + 'display: none;' + '}' + '#mouseflow .tool-toggle-text {' + 'display: inline-block;' + 'color: white;' + 'font-size: 18px;' + '}' + '#mouseflow .tool-toggle-icon {' + 'width: 30px;' + 'display: inline-block;' + 'position: relative;' + 'top: 2px;' + '}' + '#mouseflow .tool-close .tool-toggle-icon {' + 'top: 4px;' + '}' + '#mouseflow .tool-content {' + 'height: calc(100% - 58px);' + '}' + '#mouseflow .tool-menu {' + 'width: 15%;' + 'height: 100%;' + 'float: left;' + '}' + '#mouseflow .tool-menu-item {' + 'background-color: #f8f8f8;' + 'color: black;' + 'cursor: pointer;' + 'height: 40px;' + 'padding: 12px;' + '}' + '#mouseflow .tool-menu-item.active {' + 'position: relative;' + 'background-color: #4db378;' + 'color: white;' + 'cursor: default;' + '}' + '#mouseflow .tool-menu-item.active:after {' + 'display: block;' + 'border: solid transparent;' + 'content: " ";' + 'position: absolute;' + 'pointer-events: none;' + 'border-left-color: #4db378;' + 'border-width: 20px;' + 'top: 0;' + 'right: -40px;' + '}' + '#mouseflow .tool-menu-item:not(.active):hover {' + 'background-color: #e4e4e4' + '}' + '#mouseflow .tool-exclude,' + '#mouseflow .tool-whitelist,' + '#mouseflow .tool-track {' + 'display: none;' + 'width: 70%;' + 'height: 100%;' + 'float: left;' + 'color: rgb(71, 64, 62);' + 'overflow-y: auto;' + 'overflow-x: hidden;' + 'padding: 10px 40px;' + '}' + '#mouseflow .tool-exclude.active,' + '#mouseflow .tool-whitelist.active,' + '#mouseflow .tool-track.active {' + 'display: block;' + '}' + '#mouseflow .tool-exclude::-webkit-scrollbar,' + '#mouseflow .tool-whitelist::-webkit-scrollbar,' + '#mouseflow .tool-track::-webkit-scrollbar {' + 'width: 8px;' + '}' + '#mouseflow .tool-exclude::-webkit-scrollbar-track,' + '#mouseflow .tool-whitelist::-webkit-scrollbar-track,' + '#mouseflow .tool-track::-webkit-scrollbar-track {' + 'border-radius: 10px;' + 'background-color: #F5F5F5;' + '-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);' + '}' + '#mouseflow .tool-exclude::-webkit-scrollbar-thumb,' + '#mouseflow .tool-whitelist::-webkit-scrollbar-thumb,' + '#mouseflow .tool-track::-webkit-scrollbar-thumb {' + 'border-radius: 10px;' + 'background-color: #a7a7a7;' + '-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);' + '}' + '#mouseflow .tool-status {' + 'width: 15%;' + 'background-color: #f8f8f8;' + 'height: 100%;' + 'float: left;' + 'position: relative;' + '}' + '#mouseflow .tool-status-text {' + 'font-size: 16px;' + 'font-weight: 700;' + 'text-align: left;' + 'padding: 0 15px;' + 'position: absolute;' + 'top: 40px;' + '}' + '#mouseflow .tool-status-buttons {' + 'width: 100%;' + 'text-align: center;' + 'position: absolute;' + 'padding: 0 30px;' + 'bottom: 40px;' + '}' + '#mouseflow .tool-loading {' + 'width: 100%;' + 'height: calc(100% - 58px);' + 'background-color: white;' + 'color: rgb(71, 64, 62);' + 'position: absolute;' + 'top: 58px;' + 'z-index: 2;' + 'visibility: hidden;' + 'opacity: 0;' + '-webkit-animation: fadeOut .3s linear;' + 'animation: fadeOut .3s linear;' + '}' + '#mouseflow .is-loading .tool-loading {' + 'visibility: visible;' + 'opacity: 1;' + '-webkit-animation: fadeIn .3s linear;' + 'animation: fadeIn .3s linear;' + '}' + '#mouseflow .tool-loading h2 {' + 'position: absolute;' + 'left: 50%;' + 'top: 50%;' + '-webkit-transform: translate(-50%, -50%);' + '-ms-transform: translate(-50%, -50%);' + 'transform: translate(-50%, -50%);' + '}' + '#mouseflow .widget-header {' + 'color: #fff;' + 'padding: 12px 15px;' + 'vertical-align: middle;' + 'overflow: hidden;' + 'position: relative;' + 'z-index: 1;' + '}' + '#mouseflow .widget-header:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: 0;' + 'left: 0;' + 'right: 0;' + 'bottom: 0;' + 'background: rgba(0, 0, 0, .3);' + 'opacity: 0;' + 'z-index: -1;' + '-webkit-transition: opacity .3s linear;' + 'transition: opacity .3s linear;' + '}' + '#mouseflow .widget-header:hover:before {' + 'opacity: 1;' + '}' + '#mouseflow .widget-text {' + 'font-size: 16px;' + 'line-height: 20px;' + 'width: 245px;' + 'display: inline-block;' + 'vertical-align: middle;' + '}' + '#mouseflow .widget-toggle {' + 'width: 20px;' + 'display: inline-block;' + 'vertical-align: middle;' + 'margin: 0;' + '}' + '#mouseflow .btn-arrow,' + '#mouseflow .btn-cross {' + 'float: right;' + 'z-index: 10;' + 'line-height: .5;' + '}' + '#mouseflow .tool-toggle-icon .btn-arrow,' + '#mouseflow .tool-toggle-icon .btn-cross {' + 'font-size: 34px;' + '}' + '#mouseflow .widget-toggle .btn-arrow {' + 'font-size: 25px;' + '}' + '#mouseflow .tm-tag .btn-cross {' + 'margin: 3px 0 0 7px;' + 'font-weight: 700;' + 'color: #4e4e4e;' + 'font-size: 18px;' + '}' + '#mouseflow .widget-toggle .btn-arrow:hover {' + 'text-shadow: -3px 0 2px rgba(0, 0, 0, .5);' + '}' + '#mouseflow .tm-tag .btn-cross:hover {' + 'color: #c66;' + '}' + '#mouseflow .btn-arrow--up {' + '-webkit-transform: rotate(-90deg) scale(1.5, 1.5);' + '-ms-transform: rotate(-90deg) scale(1.5, 1.5);' + 'transform: rotate(-90deg) scale(1.5, 1.5);' + '}' + '#mouseflow .btn-arrow--down {' + '-webkit-transform: rotate(+90deg) scale(1.5, 1.5);' + '-ms-transform: rotate(+90deg) scale(1.5, 1.5);' + 'transform: rotate(+90deg) scale(1.5, 1.5);' + '}' + '#mouseflow .widget-toggle .btn-arrow:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: -185px;' + 'left: -15px;' + 'right: -15px;' + 'bottom: -15px;' + 'display: block;' + '}' + '#mouseflow .tool-toggle-icon .btn-arrow:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: -10px;' + 'left: -15px;' + 'right: -15px;' + 'bottom: -100px;' + 'display: block;' + '}' + '#mouseflow .tool-toggle-icon .btn-cross:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: -25px;' + 'left: -150px;' + 'right: -20px;' + 'bottom: -20px;' + 'display: block;' + '}' + '#mouseflow .btn-arrow:after {' + 'content: "\\203a";' + 'display: inline;' + '}' + '#mouseflow .btn-cross:after {' + 'content: "\\00d7";' + 'display: inline;' + '}' + '#mouseflow .btn-arrow:hover,' + '#mouseflow .btn-cross:hover {' + 'text-decoration: none;' + '}' + '#mouseflow .btn-widget {' + 'width: 100%;' + 'height: 38px;' + 'border: none;' + 'border-radius: 6px;' + 'overflow: hidden;' + 'position: relative;' + 'z-index: 1;' + 'cursor: pointer;' + 'display: block;' + 'padding: 10px;' + 'font-size: 16px;' + 'font-family: inherit;' + 'font-weight: bold;' + 'text-align: center;' + 'outline: none;' + 'margin-bottom: 10px;' + '}' + '#mouseflow .btn-widget:before {' + 'content: "";' + 'display: inline;' + 'position: absolute;' + 'top: 0;' + 'left: 0;' + 'right: 0;' + 'bottom: 0;' + 'background: rgba(0, 0, 0, .3);' + 'opacity: 0;' + 'z-index: -1;' + '-webkit-transition: opacity .3s linear;' + 'transition: opacity .3s linear;' + '}' + '#mouseflow .btn-widget:hover {' + 'text-decoration: none;' + '}' + '#mouseflow .btn-widget:hover:before {' + 'opacity: 1;' + '}' + '#mouseflow .privacy-tool {' + 'height: 350px;' + 'max-height: 40%;' + '-webkit-transition: height .5s ease-out;' + 'transition: height .5s ease-out;' + '}' + '#mouseflow .privacy-tool.tool-closed {' + 'height: 0;' + '}' + '#mouseflow .tool-closed .step {' + 'visibility: visible;' + '}' + '#mouseflow .tool-closed .tool-container {' + 'visibility: hidden;' + '}' + '#mouseflow .step.fade-in,' + '#mouseflow .tool-container.fade-in {' + '-webkit-animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;' + 'animation: fadeUpIn .8s cubic-bezier(0, 0, 0, 1) both;' + '}' + '#mouseflow .step.fade-out,' + '#mouseflow .tool-container.fade-out {' + '-webkit-animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);' + 'animation: fadeDownOut .8s cubic-bezier(0, 0, 0, 1);' + '}' + '#mouseflow .btn-widget.loading {' + 'cursor: default;' + '}' + '#mouseflow .btn-widget.loading:before {' + 'display: none;' + '}' + '#mouseflow .loading i {' + 'animation-name: blink;' + 'animation-duration: 1.4s;' + 'animation-iteration-count: infinite;' + 'animation-fill-mode: both;' + '}' + '#mouseflow .loading i:nth-child(2) {' + 'animation-delay: .2s;' + '}' + '#mouseflow .loading i:nth-child(3) {' + 'animation-delay: .4s;' + '}' + '#mouseflow .loading i:nth-child(4) {' + 'animation-delay: .6s;' + '}' + '#mouseflow .tool-message {' + 'width: 100%;' + 'height: calc(100% - 58px);' + 'background-color: white;' + 'color: rgb(71, 64, 62);' + 'position: absolute;' + 'top: 58px;' + 'z-index: 3;' + 'padding: 20px;' + 'overflow-y: auto;' + 'overflow-x: hidden;' + 'visibility: hidden;' + 'opacity: 0;' + '-webkit-animation: fadeOut .3s linear;' + 'animation: fadeOut .3s linear;' + '}' + '#mouseflow .tool-message h3 {' + 'margin-bottom: 20px;' + '}' + '@media (max-width: 1300px) {' + '#mouseflow .tool-exclude,' + '#mouseflow .tool-whitelist,' + '#mouseflow .tool-track {' + 'width: 60%;' + '}' + '#mouseflow .tool-status {' + 'width: 25%;' + '}' + '#mouseflow .tool-status-buttons {' + 'bottom: 10px;' + '}' + '}' + '@media (max-width: 850px) {' + '#mouseflow .tool-menu-item {' + 'height: 56px;' + '}' + '#mouseflow .tool-menu-item.active:after {' + 'border-width: 28px;' + 'top: 0px;' + 'right: -56px;' + '}' + '#mouseflow .tool-status-text {' + 'font-size: 14px;' + '}' + '#mouseflow .btn-widget {' + 'font-size: 12px;' + '}' + '#mouseflow a.mf-tool-close {' + 'font-size: 12px;' + '}' + '}' + '@media (max-height: 800px) {' + '#mouseflow .tool-status-text {' + 'top: 20px;' + '}' + '#mouseflow .tool-status-buttons {' + 'bottom: 20px;' + '}' + '}' + '@media (max-height: 650px) {' + '#mouseflow .tool-status-text {' + 'font-size: 14px;' + '}' + '}' + '@media (max-width: 650px), (max-height: 600px) {' + '#mouseflow .tool-message {' + 'visibility: visible;' + 'opacity: 1;' + '-webkit-animation: fadeIn .3s linear;' + 'animation: fadeIn .3s linear;' + '}' + '}' + '@-webkit-keyframes fadeUpIn {' + '0% {' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '100% {' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '}' + '@keyframes fadeUpIn {' + '0% {' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '100% {' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '}' + '@-webkit-keyframes fadeDownOut {' + '0% {' + 'visibility: visible;' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '}' + '@keyframes fadeDownOut {' + '0% {' + 'visibility: visible;' + '-webkit-transform: translateY(0);' + '-ms-transform: translateY(0);' + 'transform: translateY(0);' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + '-webkit-transform: translateY(50px);' + '-ms-transform: translateY(50px);' + 'transform: translateY(50px);' + 'opacity: 0;' + '}' + '}' + '@-webkit-keyframes fadeIn {' + '0% {' + 'visibility: visible;' + 'opacity: 0;' + '}' + '100% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '}' + '@keyframes fadeIn {' + '0% {' + 'visibility: visible;' + 'opacity: 0;' + '}' + '100% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '}' + '@-webkit-keyframes fadeOut {' + '0% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + 'opacity: 0;' + '}' + '}' + '@keyframes fadeOut {' + '0% {' + 'visibility: visible;' + 'opacity: 1;' + '}' + '100% {' + 'visibility: hidden;' + 'opacity: 0;' + '}' + '}' + '@keyframes blink {' + '0% {' + 'opacity: .2;' + '}' + '20% {' + 'opacity: 1;' + '}' + '100% {' + 'opacity: .2;' + '}' + '}')
            }
            this._47 = _47;
            this._69 = _69
        }

        function _750(_7, _411, _412) {
            function _225() {
                var _67 = (_7.path || _7.location.pathname + (_7.includeHashInPath ? _7.location.hash : '')).toLowerCase();
                var _200 = _7.location.search.toLowerCase();
                if (_67 !== '/' && _67.slice(-1) === '/') _67 = _67.slice(0, -1);
                return _742(_67) || _67 + _743(_200)
            }

            function _742(_67) {
                return _411.filter(function(_63) {
                    return _745(_67, _63)
                }).map(function(_63) {
                    return _707(_67, _63)
                })[0]
            }

            function _743(_200) {
                if (_200[0] === '?') _200 = _200.slice(1);
                var _125;
                var _409 = [];
                var _744 = /([^&=]+)=?([^&]*)/g;
                while (_125 = _744.exec(_200)) {
                    var _45 = _412.indexOf(_125[1]);
                    if (_125[2] && _45 > -1) _409[_45] = _125[0]
                }
                return _409.length ? '?' + _409.filter(hasValue).join('&') : ''
            }

            function _745(_67, _63) {
                var _602 = _67.indexOf('?');
                if (_602 > -1) _67 = _67.slice(0, _602);
                switch (_63._20) {
                    case 'equals':
                        return _67 === _63._4.toLowerCase();
                    case 'startsWith':
                        return _67.substr(0, _63._4.length) === _63._4;
                    case 'endsWith':
                        return _67.substr(-_63._4.length) === _63._4;
                    case 'regex':
                        return new RegExp(_63._4).test(_67);
                    default:
                        return false
                }
            }

            function _707(_67, _63) {
                if (_63._749) return _63._749;
                switch (_63._20) {
                    case 'startsWith':
                        return _63._4 + '*';
                    case 'endsWith':
                        return '*' + _63._4;
                    default:
                        return _63._4
                }
            }

            function hasValue(value) {
                return value
            }
            this._225 = _225
        }

        function _752(_9) {
            var _397 = [];
            var _757 = ['target', 'originalEvent', 'button', 'pageX', 'pageY', 'which', 'data', 'origin', 'source'];

            function _765(_40, _6, _86, _396, _16) {
                var _33 = !!_16._33;
                var _576 = function(_5) {
                    var _257 = [];
                    if (_5.composedPath && (_5.target.shadowRoot || _86)) _257 = _5.composedPath();
                    var _600 = _5;
                    _5 = _755(_5);
                    _5.preventDefault = function() {
                        _600.preventDefault()
                    };
                    _5.stopPropagation = function() {
                        _600.stopPropagation()
                    };
                    if (_5.target.shadowRoot && _257.length) _5.target = _257[0];
                    if (_86) {
                        _5.delegatedTarget = _552(function(_53, _2) {
                            return _257.length ? _257[_2] : (_53 ? _53.parentNode : _5.target)
                        }, _86);
                        if (!_5.delegatedTarget && !_16._598) return;
                        if (_16._201 && _5.target !== _5.delegatedTarget) return
                    } else if (_16._201 && _5.target !== _40) {
                        return
                    }
                    if (_16._92) _5.preventDefault();
                    if (_16._934) _5.stopPropagation();
                    _396.apply(this, arguments)
                };
                _40.addEventListener(_6, _576, {
                    capture: _33
                });
                _397.push({
                    _40: _40,
                    _6: _6,
                    _396: _576,
                    _33: _33
                })
            }

            function _755(_5) {
                var _553 = {};
                _757.forEach(function(_23) {
                    if (_5[_23] != undefined) _553[_23] = _5[_23]
                });
                return _553
            }

            function _766() {
                _397.forEach(function(_18) {
                    _18._40.removeEventListener(_18._6, _18._396, {
                        capture: _18._33
                    })
                });
                _397 = []
            }

            function _552(_551, _86, _40, _45) {
                if (!_45) _45 = 0;
                _40 = _551(_40, _45);
                if (!_40 || !_86) return null;
                if (_9._71(_40, _86)) return _40;
                return _552(_551, _86, _40, ++_45)
            }
            this._25 = function(_40, _6, _86, _156, _16) {
                if (typeof _86 === 'function') {
                    _16 = _156;
                    _156 = _86;
                    _86 = null
                }
                _765(_40, _6, _86, _156, _16 || {})
            };
            this._550 = _766
        }

        function _637(_7, _9) {
            function _407(_154) {
                if (!_154 || !_154.length) return true;
                _154 = _154.filter(function(_76) {
                    return _76 && _76._20 && _76._4
                });
                var _547 = _154.filter(function(_76) {
                    return _76._20.indexOf('not') !== 0
                });
                var _739 = _547.length === 0 || _547.some(function(_76) {
                    return _164(_76)
                });
                var _546 = _154.filter(function(_76) {
                    return _76._20.indexOf('not') === 0
                });
                var _741 = _546.length === 0 || _546.every(function(_76) {
                    return _164(_76)
                });
                return _741 && _739
            }

            function _164(_76) {
                var _29 = _7.path || _7.location.pathname;
                var _20 = _76._20 || '';
                var _4 = _76._4 || '';
                switch (_20.toLowerCase()) {
                    case 'equals':
                        _29 = _9._207(_29, '/').toLowerCase();
                        _4 = _9._207(_4, '/').toLowerCase();
                        return _29 === _4;
                    case 'startswith':
                        _29 = _29.toLowerCase();
                        _4 = _4.toLowerCase();
                        return _29.substr(0, _4.length) === _4;
                    case 'endswith':
                        _29 = _9._207(_29, '/').toLowerCase();
                        _4 = _9._207(_4, '/').toLowerCase();
                        return _29.substr(-_4.length) === _4;
                    case 'regex':
                        return new RegExp(_4).test(_29);
                    case 'notequals':
                    case 'notstartswith':
                    case 'notendswith':
                        return !_164({
                            _20: _20.slice(3),
                            _4: _4
                        });
                    default:
                        return true
                }
            }
            this._407 = _407;
            this._164 = _164
        }

        function _710(_3, _389, _406) {
            var _90 = _3.location;

            function _560(_17) {
                var _71 = (_17 || '').match(/^(([^:]+:)?\/?\/?(([^:\/\?#]+)?:?(\d+)?))(\/.*?)?(\?.*?)?(#.*)?$/);
                return {
                    href: _71[0] || '',
                    origin: _71[1] || '',
                    protocol: _71[2] || '',
                    host: _71[3] || '',
                    hostname: _71[4] || '',
                    port: _71[5] || '',
                    pathname: _71[6] || '',
                    search: _71[7] || '',
                    hash: _71[8] || ''
                }
            }

            function _712() {
                try {
                    _3.localStorage.setItem('mf_supportsLocalStorage', '1');
                    var _711 = _3.localStorage.getItem('mf_supportsLocalStorage') === '1';
                    _3.localStorage.removeItem('mf_supportsLocalStorage');
                    return _711
                } catch (e) {
                    return false
                }
            }
            this.debug = _3.mouseflowDebug || _90.search.indexOf('mf_debug=1') !== -1;
            this.includeDebugTime = false;
            this.forceStart = _90.search.indexOf('mf_force=1') !== -1;
            this.autoStart = _3.mouseflowAutoStart !== false && _90.search.indexOf('mf_autostart=0') === -1;
            this.enableBots = false;
            this.touchEvents = !_3.mouseflowDisableTouch;
            this.htmlDelay = _3.mouseflowHtmlDelay || 1000;
            this.newPageViewHtmlDelay = _3.mouseflowNewPageViewHtmlDelay || 500;
            this.compress = _3.mouseflowCompress !== false && _90.search.indexOf('mf_compress=0') === -1;
            this.autoTagging = _3.mouseflowAutoTagging !== false;
            this.path = _3.mouseflowPath;
            this.crossDomainSupport = !!_3.mouseflowCrossDomainSupport;
            this.location = _560(_3.mouseflowHref || _90.href);
            this.htmlFetchMode = _3.mouseflowHtmlFetchMode || 'post';
            this.sessionId = _3.mouseflowSessionId;
            this.honorDoNotTrack = _3.mouseflowHonorDoNotTrack || _406;
            this.gdprEnabled = _3.mouseflowForceGdpr || _389;
            this.keyLogging = !_3.mouseflowDisableKeyLogging && !this.gdprEnabled;
            this.domReuse = !_3.mouseflowDisableDomReuse;
            this.domDeduplicator = !_3.mouseflowDisableDomDeduplicator;
            this.includeSubDomains = !_3.mouseflowExcludeSubDomains;
            this.registerSubmitTimeout = _3.mouseflowRegisterSubmitTimeout || 2000;
            this.useUnload = !!_3.mouseflowUseUnload;
            this.replaceLastFormValues = _3.mouseflowReplaceLastFormValues || !this.keyLogging || this.gdprEnabled;
            this.useAllHoverSelectors = !!_3.mouseflowUseAllHoverSelectors;
            this.enableCssRecording = !!_3.mouseflowEnableCssRecording;
            this.secureCookie = !!_3.mouseflowSecureCookie;
            this.enableSpa = true;
            this.includeHashInPath = false;
            this.autoTagPayments = true;
            this.preferStorageApi = !!_3.mouseflowPreferStorageApi;
            this.domMutationDetectorEnable = _3.domMutationDetectorEnable !== undefined ? _3.domMutationDetectorEnable : false;
            this.domMutationUseParentNode = _3.domMutationUseParentNode !== undefined ? _3.domMutationUseParentNode : true;
            this.domMutationUsePreviousSibling = _3.domMutationUsePreviousSibling !== undefined ? _3.domMutationUsePreviousSibling : false;
            this.domMutationCountThreshold = _3.domMutationCountThreshold !== undefined ? _3.domMutationCountThreshold : 20;
            this.domMutationTimeThresholdInSeconds = _3.domMutationTimeThresholdInSeconds !== undefined ? _3.domMutationTimeThresholdInSeconds : 10;
            this.liveHeatmapsEnabled = false;
            this.privacyToolEnabled = false;
            this.useIdSelectors = _3.mouseflowUseIdSelectors !== undefined ? _3.mouseflowUseIdSelectors : true;
            this.proxyAttachShadow = true;
            this._715 = function() {
                if (!!_3.opener && _90.search.indexOf('mf_liveHeatmaps') !== -1) {
                    this.liveHeatmapsEnabled = true;
                    return
                }
                if (_90.search.indexOf('mf_inspect') !== -1) {
                    this.privacyToolEnabled = true;
                    return
                }
                if (!!_3.opener && (typeof _3.name === 'string' && _3.name.indexOf('mf_liveHeatmaps') === 0)) {
                    this.liveHeatmapsEnabled = true;
                    return
                }
                if (_3.name === 'mf_privacyTool') {
                    this.privacyToolEnabled = true;
                    return
                }
                if (!_712()) return;
                if (_3.opener) {
                    if (_3.localStorage.getItem('mf_privacyTool')) this.privacyToolEnabled = true;
                    else if (_3.localStorage.getItem('mf_liveHeatmaps')) this.liveHeatmapsEnabled = true
                }
            };
            this._715();
            this._716 = function() {
                this._426('href', window.location.href);
                this.path = undefined
            };
            this._426 = function(_23, _4) {
                switch (_23) {
                    case 'href':
                        this.location = _560(_4);
                        break;
                    case 'keyLogging':
                        this.keyLogging = this.keyLogging && _4;
                        break;
                    case 'gdprEnabled':
                        this.gdprEnabled = this.gdprEnabled || _4;
                        break;
                    case '_cssSelectorBlackList':
                        break;
                    case '_cssSelectorWhiteList':
                        break;
                    case '_cssSelectorTracked':
                        break;
                    case '_websiteId':
                        break;
                    default:
                        this[_23] = _4;
                        break
                }
            }
        }

        function _760(_3) {
            var _11 = _3.document,
                _166;

            function _297() {
                if (_11.body && !_166) {
                    _166 = _717();
                    _11.body.appendChild(_166)
                }
                return _166
            }

            function _373() {
                if (_166) {
                    _11.body.removeChild(_166);
                    _166 = undefined
                }
            }

            function _717() {
                var _30 = _11.createElement('div');
                _30.id = 'mouseflow';
                var _98 = _11.createElement('style');
                _98.type = 'text/css';
                _98.innerHTML = _722();
                var _378 = _11.createElement('div');
                _378.className = 'load-font';
                _378.innerHTML = 'load font';
                _30.appendChild(_98);
                _30.appendChild(_378);
                return _30
            }

            function _722() {
                return ('@font-face {' + 'font-family: "Droid Sans";' + 'font-style: normal;' + 'font-weight: 400;' + 'src: local("Droid Sans Regular"), local("DroidSans-Regular"), url(https://fonts.gstatic.com/s/droidsans/v8/s-BiyweUPV0v-yRb-cjciPk_vArhqVIZ0nv9q090hN8.woff2) format("woff2");' + 'unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215;' + '}' + '#mouseflow :before, #mouseflow :after {' + 'display: none;' + '}' + '#mouseflow,' + '#mouseflow * {' + 'background: transparent;' + 'border: 0;' + 'border-image-outset: 0s;' + 'border-image-repeat: stretch;' + 'border-image-slice: 100%;' + 'border-image-source: none;' + 'border-image-width: 1;' + 'border-color: #000;' + 'border-radius: 0;' + 'border-width: 0;' + 'border-style: none;' + 'box-sizing: border-box;' + 'clip: auto;' + 'float: none;' + 'color: inherit;' + 'font-family: inherit;' + 'font-size: inherit;' + 'font-style: inherit;' + 'font-weight: inherit;' + 'width: auto;' + 'height: auto;' + 'min-width: auto;' + 'min-height: auto;' + 'max-width: auto;' + 'max-height: auto;' + 'letter-spacing: normal;' + 'line-height: normal;' + 'margin: 0;' + 'padding: 0;' + 'text-decoration: none;' + 'text-indent: 0;' + 'text-transform: none;' + 'vertical-align: baseline;' + 'text-align: left;' + 'overflow: visible;' + 'top: auto;' + 'right: auto;' + 'bottom: auto;' + 'left: auto;' + '-webkit-transition: none;' + 'transition: none;' + '}' + '#mouseflow {' + 'font: 400 14px/1.4 "Droid Sans", Helvetica, Arial, sans-serif;' + 'color: #666;' + '}' + '#mouseflow .load-font {' + 'position: absolute;' + 'visibility: hidden;' + 'width: 0px;' + 'height: 0px;' + 'overflow: hidden;' + '}')
            }
            this._297 = _297;
            this._373 = _373
        }

        function _758(_3) {
            this._57 = function() {
                return _291('setTimeout').apply(_3, arguments)
            };
            this._295 = function() {
                return _291('setInterval').apply(_3, arguments)
            };
            this._119 = function() {
                _291('clearTimeout').apply(_3, arguments)
            };
            this._161 = function() {
                _291('clearInterval').apply(_3, arguments)
            };

            function _291(_19) {
                var _564;
                if (_3.Zone && _3.Zone.__symbol__) _564 = _3[_3.Zone.__symbol__(_19)];
                return _564 || _3[_19]
            }
        }

        function _753(_3, _109, _377) {
            var _11 = _3.document;

            function _136(_1, _77) {
                var _88 = _1.classList;
                if (_88 && _77) return _88.contains(_77);
                var _131 = _172(_1);
                return _131.indexOf(_77) !== -1
            }

            function _60(_1, _77) {
                var _88 = _1.classList;
                if (_88 && _77) {
                    _1.classList.add(_77);
                    return
                }
                var _131 = _172(_1);
                if (_131.indexOf(_77) === -1) _131.push(_77);
                _1.className = _131.join(' ')
            }

            function _46(_1, _77) {
                var _88 = _1.classList;
                if (_88 && _77) {
                    _1.classList.remove(_77);
                    return
                }
                var _131 = _172(_1);
                var _45 = _131.indexOf(_77);
                if (_45 !== -1) _131.splice(_45, 1);
                _1.className = _131.join(' ')
            }

            function _213(_1, _77, _376) {
                if (_376 === undefined) _376 = !_136(_1, _77);
                if (_376) {
                    _60(_1, _77)
                } else {
                    _46(_1, _77)
                }
            }

            function _172(_1) {
                var _562 = typeof _1.className === 'string' ? _1.className.replace(/\s+/g, ' ').trim() : '';
                return _562 !== '' ? _562.split(' ') : []
            }

            function _415() {
                return _109.max((_11.body || {}).scrollHeight || 0, (_11.body || {}).offsetHeight || 0, _11.documentElement.scrollHeight || 0, _11.documentElement.offsetHeight || 0, _11.documentElement.clientHeight || 0)
            }

            function _86(_38, _736) {
                var _32 = [];
                if (!_38) return _32;
                for (var _2 = 0; _2 < _38.length; _2++) {
                    if (_736(_38[_2], _2)) _32.push(_38[_2])
                }
                return _32
            }

            function _642(_253) {
                var _288 = _253.length;
                while (_288) {
                    var _2 = _109.floor(_109.random() * _288--);
                    var _733 = _253[_288];
                    _253[_288] = _253[_2];
                    _253[_2] = _733
                }
            }

            function _149(_35) {
                if (!_35) return _35;
                return _35.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            }

            function _410(_35) {
                if (!_35) return _35;
                return _35.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>')
            }

            function _431(url) {
                return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/.test(url.trim())
            }

            function _627(_35) {
                return _35.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, function(_125, _732, _17) {
                    _17 = _410(_17);
                    return _431(_17) ? '<a href="' + _17 + '" target="_blank">' + _732 + '</a>' : _125
                })
            }

            function _155(_4) {
                if (!_4) return _4;
                return _4.replace(/([^a-zA-Z\d-_])/g, '\\$1').replace(/^(-)?(\d)/, '$1\\3$2 ')
            }

            function _151(_4) {
                return _4 ? _377.parse(_4) : undefined
            }

            function _78(_4) {
                var _32;
                if (Array.prototype.toJSON) {
                    var _730 = Array.prototype.toJSON;
                    delete Array.prototype.toJSON;
                    _32 = _377.stringify(_4);
                    Array.prototype.toJSON = _730
                } else if (_4) {
                    _32 = _377.stringify(_4)
                }
                return _32
            }

            function _628(_727, _725) {
                var _188 = _263(_727);
                var _35 = _263(_725);
                var _303 = _109.max(_188.length, _35.length);
                if (_35 == 'NaN' || _188 == 'NaN') {
                    return false
                }
                for (var _2 = 0; _2 < _303; _2++) {
                    _188[_2] = _188[_2] || 0;
                    _35[_2] = _35[_2] || 0;
                    if (_188[_2] == _35[_2]) {
                        continue
                    }
                    return _188[_2] > _35[_2]
                }
                return true
            }

            function _263(_724) {
                var _646 = _724.split('.');
                var _648 = [];
                for (var _2 = 0; _2 < _646.length; _2++) {
                    _648.push(parseInt(_646[_2]))
                }
                return _648
            }

            function _207(_35, _720) {
                var _32 = _35;
                while (_32[_32.length - 1] === (_720 || ' ')) _32 = _32.slice(0, -1);
                return _32
            }

            function _71(_1, _8) {
                if (_1.nodeType !== 1) return false;
                if (_1.msMatchesSelector) return _1.msMatchesSelector(_8);
                if (_1.matches) return _1.matches(_8);
                return false
            }

            function _148(_53, _386) {
                return _53.parentNode && _53.parentNode.hasAttribute && _53.parentNode.hasAttribute(_386)
            }
            this._136 = _136;
            this._60 = _60;
            this._46 = _46;
            this._213 = _213;
            this._172 = _172;
            this._415 = _415;
            this._86 = _86;
            this._642 = _642;
            this._149 = _149;
            this._410 = _410;
            this._431 = _431;
            this._627 = _627;
            this._155 = _155;
            this._151 = _151;
            this._78 = _78;
            this._628 = _628;
            this._263 = _263;
            this._207 = _207;
            this._71 = _71;
            this._148 = _148
        }
        var _114 = new _760(window);
        var _24 = new _758(window);
        var _9 = new _753(window, Math, JSON);
        var _18 = new _752(_9);
        var _178 = new _750(_7, _411, _412);
        var _238 = (typeof _637 === 'function') ? new _637(_7, _9) : {
            _164: function() {}
        };
        var _128 = (typeof _747 === 'function') ? new _747(window, _7, _114, _24, _9, _238, _18) : {
            _47: function() {},
            _69: function() {},
            _429: function() {},
            _931: function() {},
            _423: function() {}
        };
        var _425 = (typeof _632 === 'function') ? new _632(_7) : {
            _147: function() {}
        };

        function _10(_116, _14) {
            _14 = (typeof _14 !== 'undefined' ? _14 : '');
            if (_7.debug) console.log('MF' + (_7.includeDebugTime ? ' - ' + _14 : '') + ': ' + _116)
        }
        var _647 = new _695(window, _114, _24, _9, _18, _7);
        var _267 = new _688(window, _7, _114, _9, _18, _178);

        function _96() {
            return undefined
        }

        function _658() {
            return null
        }

        function _656() {
            return false
        }
        var shouldRecord = false;
        if (_7.privacyToolEnabled) {
            _647._47(_152, _7._49, _7._246, _7._241, _7._271, _10)
        } else if (_7.liveHeatmapsEnabled) {
            _267._47(_7._49, _10)
        } else if (typeof _641 === 'function') {
            window.mouseflow = new _641(window, Math, _7, _24, _9, _238, _18, _178, _128, _425, _10);
            shouldRecord = true
        }
        if (!shouldRecord) {
            window.mouseflow = {
                start: _96,
                stop: function() {
                    if (_7.privacyToolEnabled) _647._69();
                    else if (_7.liveHeatmapsEnabled) _267._69()
                },
                newPageView: function(_29) {
                    if (_7.liveHeatmapsEnabled) _267._659({
                        url: _29
                    })
                },
                stopSession: _96,
                getSessionId: _658,
                getPageViewId: _658,
                tag: _96,
                star: _96,
                setVariable: _96,
                identify: _96,
                formSubmitAttempt: _96,
                formSubmitSuccess: _96,
                formSubmitFailure: _96,
                addFriction: _96,
                isRecording: _656,
                isReturningUser: _656,
                activateFeedback: _96,
                proxyAttachShadow: _96,
                recordingRate: null,
                version: null
            }
        }
        window.mouseflow.websiteId = _7._49;
        window.mouseflow.gdprEnabled = _7.gdprEnabled;
        window.mouseflow.updateHeatmap = _267._659;
        window.mouseflow.config = function() {
            return arguments.length === 1 ? _7[arguments[0]] : _7._426.apply(_7, arguments)
        };
        window.mouseflow.debug = function() {
            _7.debug = !_7.debug;
            console.log('MF: Debugging ' + (_7.debug ? 'enabled' : 'disabled'))
        }
    })()
}