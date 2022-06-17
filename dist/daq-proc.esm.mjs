var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getAugmentedNamespace(n) {
  var f = n.default;
	if (typeof f == "function") {
		var a = function () {
			return f.apply(this, arguments);
		};
		a.prototype = f.prototype;
  } else a = {};
  Object.defineProperty(a, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

var lib$9 = {};

var types = {};

Object.defineProperty(types, "__esModule", { value: true });

var load = {};

var options = {};

var __assign$4 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$4 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$4.apply(this, arguments);
};
Object.defineProperty(options, "__esModule", { value: true });
options.flatten = void 0;
var defaultOpts$1 = {
    xml: false,
    decodeEntities: true,
};
/** Cheerio default options. */
options.default = defaultOpts$1;
var xmlModeDefault = {
    _useHtmlParser2: true,
    xmlMode: true,
};
/**
 * Flatten the options for Cheerio.
 *
 * This will set `_useHtmlParser2` to true if `xml` is set to true.
 *
 * @param options - The options to flatten.
 * @returns The flattened options.
 */
function flatten(options) {
    return (options === null || options === void 0 ? void 0 : options.xml)
        ? typeof options.xml === 'boolean'
            ? xmlModeDefault
            : __assign$4(__assign$4({}, xmlModeDefault), options.xml)
        : options !== null && options !== void 0 ? options : undefined;
}
options.flatten = flatten;

var _static = {};

var lib$8 = {};

var stringify$2 = {};

var lib$7 = {};

var lib$6 = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.Doctype = exports.CDATA = exports.Tag = exports.Style = exports.Script = exports.Comment = exports.Directive = exports.Text = exports.Root = exports.isTag = exports.ElementType = void 0;
	/** Types of elements found in htmlparser2's DOM */
	var ElementType;
	(function (ElementType) {
	    /** Type for the root element of a document */
	    ElementType["Root"] = "root";
	    /** Type for Text */
	    ElementType["Text"] = "text";
	    /** Type for <? ... ?> */
	    ElementType["Directive"] = "directive";
	    /** Type for <!-- ... --> */
	    ElementType["Comment"] = "comment";
	    /** Type for <script> tags */
	    ElementType["Script"] = "script";
	    /** Type for <style> tags */
	    ElementType["Style"] = "style";
	    /** Type for Any tag */
	    ElementType["Tag"] = "tag";
	    /** Type for <![CDATA[ ... ]]> */
	    ElementType["CDATA"] = "cdata";
	    /** Type for <!doctype ...> */
	    ElementType["Doctype"] = "doctype";
	})(ElementType = exports.ElementType || (exports.ElementType = {}));
	/**
	 * Tests whether an element is a tag or not.
	 *
	 * @param elem Element to test
	 */
	function isTag(elem) {
	    return (elem.type === ElementType.Tag ||
	        elem.type === ElementType.Script ||
	        elem.type === ElementType.Style);
	}
	exports.isTag = isTag;
	// Exports for backwards compatibility
	/** Type for the root element of a document */
	exports.Root = ElementType.Root;
	/** Type for Text */
	exports.Text = ElementType.Text;
	/** Type for <? ... ?> */
	exports.Directive = ElementType.Directive;
	/** Type for <!-- ... --> */
	exports.Comment = ElementType.Comment;
	/** Type for <script> tags */
	exports.Script = ElementType.Script;
	/** Type for <style> tags */
	exports.Style = ElementType.Style;
	/** Type for Any tag */
	exports.Tag = ElementType.Tag;
	/** Type for <![CDATA[ ... ]]> */
	exports.CDATA = ElementType.CDATA;
	/** Type for <!doctype ...> */
	exports.Doctype = ElementType.Doctype;
} (lib$6));

var node = {};

var __extends$1 = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign$3 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$3 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$3.apply(this, arguments);
};
Object.defineProperty(node, "__esModule", { value: true });
node.cloneNode = node.hasChildren = node.isDocument = node.isDirective = node.isComment = node.isText = node.isCDATA = node.isTag = node.Element = node.Document = node.CDATA = node.NodeWithChildren = node.ProcessingInstruction = node.Comment = node.Text = node.DataNode = node.Node = void 0;
var domelementtype_1$1 = lib$6;
/**
 * This object will be used as the prototype for Nodes when creating a
 * DOM-Level-1-compliant structure.
 */
var Node = /** @class */ (function () {
    function Node() {
        /** Parent of the node */
        this.parent = null;
        /** Previous sibling */
        this.prev = null;
        /** Next sibling */
        this.next = null;
        /** The start index of the node. Requires `withStartIndices` on the handler to be `true. */
        this.startIndex = null;
        /** The end index of the node. Requires `withEndIndices` on the handler to be `true. */
        this.endIndex = null;
    }
    Object.defineProperty(Node.prototype, "parentNode", {
        // Read-write aliases for properties
        /**
         * Same as {@link parent}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.parent;
        },
        set: function (parent) {
            this.parent = parent;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "previousSibling", {
        /**
         * Same as {@link prev}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.prev;
        },
        set: function (prev) {
            this.prev = prev;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "nextSibling", {
        /**
         * Same as {@link next}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.next;
        },
        set: function (next) {
            this.next = next;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Clone this node, and optionally its children.
     *
     * @param recursive Clone child nodes as well.
     * @returns A clone of the node.
     */
    Node.prototype.cloneNode = function (recursive) {
        if (recursive === void 0) { recursive = false; }
        return cloneNode(this, recursive);
    };
    return Node;
}());
node.Node = Node;
/**
 * A node that contains some data.
 */
var DataNode = /** @class */ (function (_super) {
    __extends$1(DataNode, _super);
    /**
     * @param data The content of the data node
     */
    function DataNode(data) {
        var _this = _super.call(this) || this;
        _this.data = data;
        return _this;
    }
    Object.defineProperty(DataNode.prototype, "nodeValue", {
        /**
         * Same as {@link data}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.data;
        },
        set: function (data) {
            this.data = data;
        },
        enumerable: false,
        configurable: true
    });
    return DataNode;
}(Node));
node.DataNode = DataNode;
/**
 * Text within the document.
 */
var Text = /** @class */ (function (_super) {
    __extends$1(Text, _super);
    function Text() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1$1.ElementType.Text;
        return _this;
    }
    Object.defineProperty(Text.prototype, "nodeType", {
        get: function () {
            return 3;
        },
        enumerable: false,
        configurable: true
    });
    return Text;
}(DataNode));
node.Text = Text;
/**
 * Comments within the document.
 */
var Comment = /** @class */ (function (_super) {
    __extends$1(Comment, _super);
    function Comment() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1$1.ElementType.Comment;
        return _this;
    }
    Object.defineProperty(Comment.prototype, "nodeType", {
        get: function () {
            return 8;
        },
        enumerable: false,
        configurable: true
    });
    return Comment;
}(DataNode));
node.Comment = Comment;
/**
 * Processing instructions, including doc types.
 */
var ProcessingInstruction = /** @class */ (function (_super) {
    __extends$1(ProcessingInstruction, _super);
    function ProcessingInstruction(name, data) {
        var _this = _super.call(this, data) || this;
        _this.name = name;
        _this.type = domelementtype_1$1.ElementType.Directive;
        return _this;
    }
    Object.defineProperty(ProcessingInstruction.prototype, "nodeType", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    return ProcessingInstruction;
}(DataNode));
node.ProcessingInstruction = ProcessingInstruction;
/**
 * A `Node` that can have children.
 */
var NodeWithChildren = /** @class */ (function (_super) {
    __extends$1(NodeWithChildren, _super);
    /**
     * @param children Children of the node. Only certain node types can have children.
     */
    function NodeWithChildren(children) {
        var _this = _super.call(this) || this;
        _this.children = children;
        return _this;
    }
    Object.defineProperty(NodeWithChildren.prototype, "firstChild", {
        // Aliases
        /** First child of the node. */
        get: function () {
            var _a;
            return (_a = this.children[0]) !== null && _a !== void 0 ? _a : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "lastChild", {
        /** Last child of the node. */
        get: function () {
            return this.children.length > 0
                ? this.children[this.children.length - 1]
                : null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeWithChildren.prototype, "childNodes", {
        /**
         * Same as {@link children}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.children;
        },
        set: function (children) {
            this.children = children;
        },
        enumerable: false,
        configurable: true
    });
    return NodeWithChildren;
}(Node));
node.NodeWithChildren = NodeWithChildren;
var CDATA = /** @class */ (function (_super) {
    __extends$1(CDATA, _super);
    function CDATA() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1$1.ElementType.CDATA;
        return _this;
    }
    Object.defineProperty(CDATA.prototype, "nodeType", {
        get: function () {
            return 4;
        },
        enumerable: false,
        configurable: true
    });
    return CDATA;
}(NodeWithChildren));
node.CDATA = CDATA;
/**
 * The root node of the document.
 */
var Document = /** @class */ (function (_super) {
    __extends$1(Document, _super);
    function Document() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = domelementtype_1$1.ElementType.Root;
        return _this;
    }
    Object.defineProperty(Document.prototype, "nodeType", {
        get: function () {
            return 9;
        },
        enumerable: false,
        configurable: true
    });
    return Document;
}(NodeWithChildren));
node.Document = Document;
/**
 * An element within the DOM.
 */
var Element = /** @class */ (function (_super) {
    __extends$1(Element, _super);
    /**
     * @param name Name of the tag, eg. `div`, `span`.
     * @param attribs Object mapping attribute names to attribute values.
     * @param children Children of the node.
     */
    function Element(name, attribs, children, type) {
        if (children === void 0) { children = []; }
        if (type === void 0) { type = name === "script"
            ? domelementtype_1$1.ElementType.Script
            : name === "style"
                ? domelementtype_1$1.ElementType.Style
                : domelementtype_1$1.ElementType.Tag; }
        var _this = _super.call(this, children) || this;
        _this.name = name;
        _this.attribs = attribs;
        _this.type = type;
        return _this;
    }
    Object.defineProperty(Element.prototype, "nodeType", {
        get: function () {
            return 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "tagName", {
        // DOM Level 1 aliases
        /**
         * Same as {@link name}.
         * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
         */
        get: function () {
            return this.name;
        },
        set: function (name) {
            this.name = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Element.prototype, "attributes", {
        get: function () {
            var _this = this;
            return Object.keys(this.attribs).map(function (name) {
                var _a, _b;
                return ({
                    name: name,
                    value: _this.attribs[name],
                    namespace: (_a = _this["x-attribsNamespace"]) === null || _a === void 0 ? void 0 : _a[name],
                    prefix: (_b = _this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name],
                });
            });
        },
        enumerable: false,
        configurable: true
    });
    return Element;
}(NodeWithChildren));
node.Element = Element;
/**
 * @param node Node to check.
 * @returns `true` if the node is a `Element`, `false` otherwise.
 */
function isTag(node) {
    return (0, domelementtype_1$1.isTag)(node);
}
node.isTag = isTag;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `CDATA`, `false` otherwise.
 */
function isCDATA(node) {
    return node.type === domelementtype_1$1.ElementType.CDATA;
}
node.isCDATA = isCDATA;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Text`, `false` otherwise.
 */
function isText(node) {
    return node.type === domelementtype_1$1.ElementType.Text;
}
node.isText = isText;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `Comment`, `false` otherwise.
 */
function isComment(node) {
    return node.type === domelementtype_1$1.ElementType.Comment;
}
node.isComment = isComment;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDirective(node) {
    return node.type === domelementtype_1$1.ElementType.Directive;
}
node.isDirective = isDirective;
/**
 * @param node Node to check.
 * @returns `true` if the node has the type `ProcessingInstruction`, `false` otherwise.
 */
function isDocument(node) {
    return node.type === domelementtype_1$1.ElementType.Root;
}
node.isDocument = isDocument;
/**
 * @param node Node to check.
 * @returns `true` if the node has children, `false` otherwise.
 */
function hasChildren(node) {
    return Object.prototype.hasOwnProperty.call(node, "children");
}
node.hasChildren = hasChildren;
/**
 * Clone a node, and optionally its children.
 *
 * @param recursive Clone child nodes as well.
 * @returns A clone of the node.
 */
function cloneNode(node, recursive) {
    if (recursive === void 0) { recursive = false; }
    var result;
    if (isText(node)) {
        result = new Text(node.data);
    }
    else if (isComment(node)) {
        result = new Comment(node.data);
    }
    else if (isTag(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_1 = new Element(node.name, __assign$3({}, node.attribs), children);
        children.forEach(function (child) { return (child.parent = clone_1); });
        if (node.namespace != null) {
            clone_1.namespace = node.namespace;
        }
        if (node["x-attribsNamespace"]) {
            clone_1["x-attribsNamespace"] = __assign$3({}, node["x-attribsNamespace"]);
        }
        if (node["x-attribsPrefix"]) {
            clone_1["x-attribsPrefix"] = __assign$3({}, node["x-attribsPrefix"]);
        }
        result = clone_1;
    }
    else if (isCDATA(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_2 = new CDATA(children);
        children.forEach(function (child) { return (child.parent = clone_2); });
        result = clone_2;
    }
    else if (isDocument(node)) {
        var children = recursive ? cloneChildren(node.children) : [];
        var clone_3 = new Document(children);
        children.forEach(function (child) { return (child.parent = clone_3); });
        if (node["x-mode"]) {
            clone_3["x-mode"] = node["x-mode"];
        }
        result = clone_3;
    }
    else if (isDirective(node)) {
        var instruction = new ProcessingInstruction(node.name, node.data);
        if (node["x-name"] != null) {
            instruction["x-name"] = node["x-name"];
            instruction["x-publicId"] = node["x-publicId"];
            instruction["x-systemId"] = node["x-systemId"];
        }
        result = instruction;
    }
    else {
        throw new Error("Not implemented yet: ".concat(node.type));
    }
    result.startIndex = node.startIndex;
    result.endIndex = node.endIndex;
    if (node.sourceCodeLocation != null) {
        result.sourceCodeLocation = node.sourceCodeLocation;
    }
    return result;
}
node.cloneNode = cloneNode;
function cloneChildren(childs) {
    var children = childs.map(function (child) { return cloneNode(child, true); });
    for (var i = 1; i < children.length; i++) {
        children[i].prev = children[i - 1];
        children[i - 1].next = children[i];
    }
    return children;
}

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DomHandler = void 0;
	var domelementtype_1 = lib$6;
	var node_js_1 = node;
	__exportStar(node, exports);
	// Default options
	var defaultOpts = {
	    withStartIndices: false,
	    withEndIndices: false,
	    xmlMode: false,
	};
	var DomHandler = /** @class */ (function () {
	    /**
	     * @param callback Called once parsing has completed.
	     * @param options Settings for the handler.
	     * @param elementCB Callback whenever a tag is closed.
	     */
	    function DomHandler(callback, options, elementCB) {
	        /** The elements of the DOM */
	        this.dom = [];
	        /** The root element for the DOM */
	        this.root = new node_js_1.Document(this.dom);
	        /** Indicated whether parsing has been completed. */
	        this.done = false;
	        /** Stack of open tags. */
	        this.tagStack = [this.root];
	        /** A data node that is still being written to. */
	        this.lastNode = null;
	        /** Reference to the parser instance. Used for location information. */
	        this.parser = null;
	        // Make it possible to skip arguments, for backwards-compatibility
	        if (typeof options === "function") {
	            elementCB = options;
	            options = defaultOpts;
	        }
	        if (typeof callback === "object") {
	            options = callback;
	            callback = undefined;
	        }
	        this.callback = callback !== null && callback !== void 0 ? callback : null;
	        this.options = options !== null && options !== void 0 ? options : defaultOpts;
	        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
	    }
	    DomHandler.prototype.onparserinit = function (parser) {
	        this.parser = parser;
	    };
	    // Resets the handler back to starting state
	    DomHandler.prototype.onreset = function () {
	        this.dom = [];
	        this.root = new node_js_1.Document(this.dom);
	        this.done = false;
	        this.tagStack = [this.root];
	        this.lastNode = null;
	        this.parser = null;
	    };
	    // Signals the handler that parsing is done
	    DomHandler.prototype.onend = function () {
	        if (this.done)
	            return;
	        this.done = true;
	        this.parser = null;
	        this.handleCallback(null);
	    };
	    DomHandler.prototype.onerror = function (error) {
	        this.handleCallback(error);
	    };
	    DomHandler.prototype.onclosetag = function () {
	        this.lastNode = null;
	        var elem = this.tagStack.pop();
	        if (this.options.withEndIndices) {
	            elem.endIndex = this.parser.endIndex;
	        }
	        if (this.elementCB)
	            this.elementCB(elem);
	    };
	    DomHandler.prototype.onopentag = function (name, attribs) {
	        var type = this.options.xmlMode ? domelementtype_1.ElementType.Tag : undefined;
	        var element = new node_js_1.Element(name, attribs, undefined, type);
	        this.addNode(element);
	        this.tagStack.push(element);
	    };
	    DomHandler.prototype.ontext = function (data) {
	        var lastNode = this.lastNode;
	        if (lastNode && lastNode.type === domelementtype_1.ElementType.Text) {
	            lastNode.data += data;
	            if (this.options.withEndIndices) {
	                lastNode.endIndex = this.parser.endIndex;
	            }
	        }
	        else {
	            var node = new node_js_1.Text(data);
	            this.addNode(node);
	            this.lastNode = node;
	        }
	    };
	    DomHandler.prototype.oncomment = function (data) {
	        if (this.lastNode && this.lastNode.type === domelementtype_1.ElementType.Comment) {
	            this.lastNode.data += data;
	            return;
	        }
	        var node = new node_js_1.Comment(data);
	        this.addNode(node);
	        this.lastNode = node;
	    };
	    DomHandler.prototype.oncommentend = function () {
	        this.lastNode = null;
	    };
	    DomHandler.prototype.oncdatastart = function () {
	        var text = new node_js_1.Text("");
	        var node = new node_js_1.CDATA([text]);
	        this.addNode(node);
	        text.parent = node;
	        this.lastNode = text;
	    };
	    DomHandler.prototype.oncdataend = function () {
	        this.lastNode = null;
	    };
	    DomHandler.prototype.onprocessinginstruction = function (name, data) {
	        var node = new node_js_1.ProcessingInstruction(name, data);
	        this.addNode(node);
	    };
	    DomHandler.prototype.handleCallback = function (error) {
	        if (typeof this.callback === "function") {
	            this.callback(error, this.dom);
	        }
	        else if (error) {
	            throw error;
	        }
	    };
	    DomHandler.prototype.addNode = function (node) {
	        var parent = this.tagStack[this.tagStack.length - 1];
	        var previousSibling = parent.children[parent.children.length - 1];
	        if (this.options.withStartIndices) {
	            node.startIndex = this.parser.startIndex;
	        }
	        if (this.options.withEndIndices) {
	            node.endIndex = this.parser.endIndex;
	        }
	        parent.children.push(node);
	        if (previousSibling) {
	            node.prev = previousSibling;
	            previousSibling.next = node;
	        }
	        node.parent = parent;
	        this.lastNode = null;
	    };
	    return DomHandler;
	}());
	exports.DomHandler = DomHandler;
	exports.default = DomHandler;
} (lib$7));

var lib$5 = {};

var lib$4 = {};

var decode = {};

var decodeDataHtml = {};

Object.defineProperty(decodeDataHtml, "__esModule", { value: true });
// Generated using scripts/write-decode-map.ts
// prettier-ignore
decodeDataHtml.default = new Uint16Array([7489, 60, 213, 305, 650, 1181, 1403, 1488, 1653, 1758, 1954, 2006, 2063, 2634, 2705, 3489, 3693, 3849, 3878, 4298, 4648, 4833, 5141, 5277, 5315, 5343, 5413, 0, 0, 0, 0, 0, 0, 5483, 5837, 6541, 7186, 7645, 8062, 8288, 8624, 8845, 9152, 9211, 9282, 10276, 10514, 11528, 11848, 12238, 12310, 12986, 13881, 14252, 14590, 14888, 14961, 15072, 15150, 2048, 69, 77, 97, 98, 99, 102, 103, 108, 109, 110, 111, 112, 114, 115, 116, 117, 92, 98, 102, 109, 115, 127, 132, 139, 144, 149, 152, 166, 179, 185, 200, 207, 108, 105, 103, 32827, 198, 16582, 80, 32827, 38, 16422, 99, 117, 116, 101, 32827, 193, 16577, 114, 101, 118, 101, 59, 16642, 256, 105, 121, 120, 125, 114, 99, 32827, 194, 16578, 59, 17424, 114, 59, 49152, 55349, 56580, 114, 97, 118, 101, 32827, 192, 16576, 112, 104, 97, 59, 17297, 97, 99, 114, 59, 16640, 100, 59, 27219, 256, 103, 112, 157, 161, 111, 110, 59, 16644, 102, 59, 49152, 55349, 56632, 112, 108, 121, 70, 117, 110, 99, 116, 105, 111, 110, 59, 24673, 105, 110, 103, 32827, 197, 16581, 256, 99, 115, 190, 195, 114, 59, 49152, 55349, 56476, 105, 103, 110, 59, 25172, 105, 108, 100, 101, 32827, 195, 16579, 109, 108, 32827, 196, 16580, 1024, 97, 99, 101, 102, 111, 114, 115, 117, 229, 251, 254, 279, 284, 290, 295, 298, 256, 99, 114, 234, 242, 107, 115, 108, 97, 115, 104, 59, 25110, 374, 246, 248, 59, 27367, 101, 100, 59, 25350, 121, 59, 17425, 384, 99, 114, 116, 261, 267, 276, 97, 117, 115, 101, 59, 25141, 110, 111, 117, 108, 108, 105, 115, 59, 24876, 97, 59, 17298, 114, 59, 49152, 55349, 56581, 112, 102, 59, 49152, 55349, 56633, 101, 118, 101, 59, 17112, 99, 242, 275, 109, 112, 101, 113, 59, 25166, 1792, 72, 79, 97, 99, 100, 101, 102, 104, 105, 108, 111, 114, 115, 117, 333, 337, 342, 384, 414, 418, 437, 439, 442, 476, 533, 627, 632, 638, 99, 121, 59, 17447, 80, 89, 32827, 169, 16553, 384, 99, 112, 121, 349, 354, 378, 117, 116, 101, 59, 16646, 256, 59, 105, 359, 360, 25298, 116, 97, 108, 68, 105, 102, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 24901, 108, 101, 121, 115, 59, 24877, 512, 97, 101, 105, 111, 393, 398, 404, 408, 114, 111, 110, 59, 16652, 100, 105, 108, 32827, 199, 16583, 114, 99, 59, 16648, 110, 105, 110, 116, 59, 25136, 111, 116, 59, 16650, 256, 100, 110, 423, 429, 105, 108, 108, 97, 59, 16568, 116, 101, 114, 68, 111, 116, 59, 16567, 242, 383, 105, 59, 17319, 114, 99, 108, 101, 512, 68, 77, 80, 84, 455, 459, 465, 470, 111, 116, 59, 25241, 105, 110, 117, 115, 59, 25238, 108, 117, 115, 59, 25237, 105, 109, 101, 115, 59, 25239, 111, 256, 99, 115, 482, 504, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25138, 101, 67, 117, 114, 108, 121, 256, 68, 81, 515, 527, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 24605, 117, 111, 116, 101, 59, 24601, 512, 108, 110, 112, 117, 542, 552, 583, 597, 111, 110, 256, 59, 101, 549, 550, 25143, 59, 27252, 384, 103, 105, 116, 559, 566, 570, 114, 117, 101, 110, 116, 59, 25185, 110, 116, 59, 25135, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25134, 256, 102, 114, 588, 590, 59, 24834, 111, 100, 117, 99, 116, 59, 25104, 110, 116, 101, 114, 67, 108, 111, 99, 107, 119, 105, 115, 101, 67, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 108, 59, 25139, 111, 115, 115, 59, 27183, 99, 114, 59, 49152, 55349, 56478, 112, 256, 59, 67, 644, 645, 25299, 97, 112, 59, 25165, 1408, 68, 74, 83, 90, 97, 99, 101, 102, 105, 111, 115, 672, 684, 688, 692, 696, 715, 727, 737, 742, 819, 1165, 256, 59, 111, 377, 677, 116, 114, 97, 104, 100, 59, 26897, 99, 121, 59, 17410, 99, 121, 59, 17413, 99, 121, 59, 17423, 384, 103, 114, 115, 703, 708, 711, 103, 101, 114, 59, 24609, 114, 59, 24993, 104, 118, 59, 27364, 256, 97, 121, 720, 725, 114, 111, 110, 59, 16654, 59, 17428, 108, 256, 59, 116, 733, 734, 25095, 97, 59, 17300, 114, 59, 49152, 55349, 56583, 256, 97, 102, 747, 807, 256, 99, 109, 752, 802, 114, 105, 116, 105, 99, 97, 108, 512, 65, 68, 71, 84, 768, 774, 790, 796, 99, 117, 116, 101, 59, 16564, 111, 372, 779, 781, 59, 17113, 98, 108, 101, 65, 99, 117, 116, 101, 59, 17117, 114, 97, 118, 101, 59, 16480, 105, 108, 100, 101, 59, 17116, 111, 110, 100, 59, 25284, 102, 101, 114, 101, 110, 116, 105, 97, 108, 68, 59, 24902, 1136, 829, 0, 0, 0, 834, 852, 0, 1029, 102, 59, 49152, 55349, 56635, 384, 59, 68, 69, 840, 841, 845, 16552, 111, 116, 59, 24796, 113, 117, 97, 108, 59, 25168, 98, 108, 101, 768, 67, 68, 76, 82, 85, 86, 867, 882, 898, 975, 994, 1016, 111, 110, 116, 111, 117, 114, 73, 110, 116, 101, 103, 114, 97, 236, 569, 111, 628, 889, 0, 0, 891, 187, 841, 110, 65, 114, 114, 111, 119, 59, 25043, 256, 101, 111, 903, 932, 102, 116, 384, 65, 82, 84, 912, 918, 929, 114, 114, 111, 119, 59, 25040, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 25044, 101, 229, 714, 110, 103, 256, 76, 82, 939, 964, 101, 102, 116, 256, 65, 82, 947, 953, 114, 114, 111, 119, 59, 26616, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26618, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26617, 105, 103, 104, 116, 256, 65, 84, 984, 990, 114, 114, 111, 119, 59, 25042, 101, 101, 59, 25256, 112, 577, 1001, 0, 0, 1007, 114, 114, 111, 119, 59, 25041, 111, 119, 110, 65, 114, 114, 111, 119, 59, 25045, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25125, 110, 768, 65, 66, 76, 82, 84, 97, 1042, 1066, 1072, 1118, 1151, 892, 114, 114, 111, 119, 384, 59, 66, 85, 1053, 1054, 1058, 24979, 97, 114, 59, 26899, 112, 65, 114, 114, 111, 119, 59, 25077, 114, 101, 118, 101, 59, 17169, 101, 102, 116, 722, 1082, 0, 1094, 0, 1104, 105, 103, 104, 116, 86, 101, 99, 116, 111, 114, 59, 26960, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26974, 101, 99, 116, 111, 114, 256, 59, 66, 1113, 1114, 25021, 97, 114, 59, 26966, 105, 103, 104, 116, 468, 1127, 0, 1137, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26975, 101, 99, 116, 111, 114, 256, 59, 66, 1146, 1147, 25025, 97, 114, 59, 26967, 101, 101, 256, 59, 65, 1158, 1159, 25252, 114, 114, 111, 119, 59, 24999, 256, 99, 116, 1170, 1175, 114, 59, 49152, 55349, 56479, 114, 111, 107, 59, 16656, 2048, 78, 84, 97, 99, 100, 102, 103, 108, 109, 111, 112, 113, 115, 116, 117, 120, 1213, 1216, 1220, 1227, 1246, 1250, 1255, 1262, 1269, 1313, 1327, 1334, 1362, 1373, 1376, 1381, 71, 59, 16714, 72, 32827, 208, 16592, 99, 117, 116, 101, 32827, 201, 16585, 384, 97, 105, 121, 1234, 1239, 1244, 114, 111, 110, 59, 16666, 114, 99, 32827, 202, 16586, 59, 17453, 111, 116, 59, 16662, 114, 59, 49152, 55349, 56584, 114, 97, 118, 101, 32827, 200, 16584, 101, 109, 101, 110, 116, 59, 25096, 256, 97, 112, 1274, 1278, 99, 114, 59, 16658, 116, 121, 595, 1286, 0, 0, 1298, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26107, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26027, 256, 103, 112, 1318, 1322, 111, 110, 59, 16664, 102, 59, 49152, 55349, 56636, 115, 105, 108, 111, 110, 59, 17301, 117, 256, 97, 105, 1340, 1353, 108, 256, 59, 84, 1346, 1347, 27253, 105, 108, 100, 101, 59, 25154, 108, 105, 98, 114, 105, 117, 109, 59, 25036, 256, 99, 105, 1367, 1370, 114, 59, 24880, 109, 59, 27251, 97, 59, 17303, 109, 108, 32827, 203, 16587, 256, 105, 112, 1386, 1391, 115, 116, 115, 59, 25091, 111, 110, 101, 110, 116, 105, 97, 108, 69, 59, 24903, 640, 99, 102, 105, 111, 115, 1413, 1416, 1421, 1458, 1484, 121, 59, 17444, 114, 59, 49152, 55349, 56585, 108, 108, 101, 100, 595, 1431, 0, 0, 1443, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26108, 101, 114, 121, 83, 109, 97, 108, 108, 83, 113, 117, 97, 114, 101, 59, 26026, 880, 1466, 0, 1471, 0, 0, 1476, 102, 59, 49152, 55349, 56637, 65, 108, 108, 59, 25088, 114, 105, 101, 114, 116, 114, 102, 59, 24881, 99, 242, 1483, 1536, 74, 84, 97, 98, 99, 100, 102, 103, 111, 114, 115, 116, 1512, 1516, 1519, 1530, 1536, 1554, 1558, 1563, 1565, 1571, 1644, 1650, 99, 121, 59, 17411, 32827, 62, 16446, 109, 109, 97, 256, 59, 100, 1527, 1528, 17299, 59, 17372, 114, 101, 118, 101, 59, 16670, 384, 101, 105, 121, 1543, 1548, 1552, 100, 105, 108, 59, 16674, 114, 99, 59, 16668, 59, 17427, 111, 116, 59, 16672, 114, 59, 49152, 55349, 56586, 59, 25305, 112, 102, 59, 49152, 55349, 56638, 101, 97, 116, 101, 114, 768, 69, 70, 71, 76, 83, 84, 1589, 1604, 1614, 1622, 1627, 1638, 113, 117, 97, 108, 256, 59, 76, 1598, 1599, 25189, 101, 115, 115, 59, 25307, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25191, 114, 101, 97, 116, 101, 114, 59, 27298, 101, 115, 115, 59, 25207, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 27262, 105, 108, 100, 101, 59, 25203, 99, 114, 59, 49152, 55349, 56482, 59, 25195, 1024, 65, 97, 99, 102, 105, 111, 115, 117, 1669, 1675, 1686, 1691, 1694, 1706, 1726, 1738, 82, 68, 99, 121, 59, 17450, 256, 99, 116, 1680, 1684, 101, 107, 59, 17095, 59, 16478, 105, 114, 99, 59, 16676, 114, 59, 24844, 108, 98, 101, 114, 116, 83, 112, 97, 99, 101, 59, 24843, 496, 1711, 0, 1714, 102, 59, 24845, 105, 122, 111, 110, 116, 97, 108, 76, 105, 110, 101, 59, 25856, 256, 99, 116, 1731, 1733, 242, 1705, 114, 111, 107, 59, 16678, 109, 112, 324, 1744, 1752, 111, 119, 110, 72, 117, 109, 240, 303, 113, 117, 97, 108, 59, 25167, 1792, 69, 74, 79, 97, 99, 100, 102, 103, 109, 110, 111, 115, 116, 117, 1786, 1790, 1795, 1799, 1806, 1818, 1822, 1825, 1832, 1860, 1912, 1931, 1935, 1941, 99, 121, 59, 17429, 108, 105, 103, 59, 16690, 99, 121, 59, 17409, 99, 117, 116, 101, 32827, 205, 16589, 256, 105, 121, 1811, 1816, 114, 99, 32827, 206, 16590, 59, 17432, 111, 116, 59, 16688, 114, 59, 24849, 114, 97, 118, 101, 32827, 204, 16588, 384, 59, 97, 112, 1824, 1839, 1855, 256, 99, 103, 1844, 1847, 114, 59, 16682, 105, 110, 97, 114, 121, 73, 59, 24904, 108, 105, 101, 243, 989, 500, 1865, 0, 1890, 256, 59, 101, 1869, 1870, 25132, 256, 103, 114, 1875, 1880, 114, 97, 108, 59, 25131, 115, 101, 99, 116, 105, 111, 110, 59, 25282, 105, 115, 105, 98, 108, 101, 256, 67, 84, 1900, 1906, 111, 109, 109, 97, 59, 24675, 105, 109, 101, 115, 59, 24674, 384, 103, 112, 116, 1919, 1923, 1928, 111, 110, 59, 16686, 102, 59, 49152, 55349, 56640, 97, 59, 17305, 99, 114, 59, 24848, 105, 108, 100, 101, 59, 16680, 491, 1946, 0, 1950, 99, 121, 59, 17414, 108, 32827, 207, 16591, 640, 99, 102, 111, 115, 117, 1964, 1975, 1980, 1986, 2000, 256, 105, 121, 1969, 1973, 114, 99, 59, 16692, 59, 17433, 114, 59, 49152, 55349, 56589, 112, 102, 59, 49152, 55349, 56641, 483, 1991, 0, 1996, 114, 59, 49152, 55349, 56485, 114, 99, 121, 59, 17416, 107, 99, 121, 59, 17412, 896, 72, 74, 97, 99, 102, 111, 115, 2020, 2024, 2028, 2033, 2045, 2050, 2056, 99, 121, 59, 17445, 99, 121, 59, 17420, 112, 112, 97, 59, 17306, 256, 101, 121, 2038, 2043, 100, 105, 108, 59, 16694, 59, 17434, 114, 59, 49152, 55349, 56590, 112, 102, 59, 49152, 55349, 56642, 99, 114, 59, 49152, 55349, 56486, 1408, 74, 84, 97, 99, 101, 102, 108, 109, 111, 115, 116, 2085, 2089, 2092, 2128, 2147, 2483, 2488, 2503, 2509, 2615, 2631, 99, 121, 59, 17417, 32827, 60, 16444, 640, 99, 109, 110, 112, 114, 2103, 2108, 2113, 2116, 2125, 117, 116, 101, 59, 16697, 98, 100, 97, 59, 17307, 103, 59, 26602, 108, 97, 99, 101, 116, 114, 102, 59, 24850, 114, 59, 24990, 384, 97, 101, 121, 2135, 2140, 2145, 114, 111, 110, 59, 16701, 100, 105, 108, 59, 16699, 59, 17435, 256, 102, 115, 2152, 2416, 116, 1280, 65, 67, 68, 70, 82, 84, 85, 86, 97, 114, 2174, 2217, 2225, 2272, 2278, 2300, 2351, 2395, 912, 2410, 256, 110, 114, 2179, 2191, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26600, 114, 111, 119, 384, 59, 66, 82, 2201, 2202, 2206, 24976, 97, 114, 59, 25060, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 25030, 101, 105, 108, 105, 110, 103, 59, 25352, 111, 501, 2231, 0, 2243, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26598, 110, 468, 2248, 0, 2258, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26977, 101, 99, 116, 111, 114, 256, 59, 66, 2267, 2268, 25027, 97, 114, 59, 26969, 108, 111, 111, 114, 59, 25354, 105, 103, 104, 116, 256, 65, 86, 2287, 2293, 114, 114, 111, 119, 59, 24980, 101, 99, 116, 111, 114, 59, 26958, 256, 101, 114, 2305, 2327, 101, 384, 59, 65, 86, 2313, 2314, 2320, 25251, 114, 114, 111, 119, 59, 24996, 101, 99, 116, 111, 114, 59, 26970, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 2340, 2341, 2345, 25266, 97, 114, 59, 27087, 113, 117, 97, 108, 59, 25268, 112, 384, 68, 84, 86, 2359, 2370, 2380, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 26961, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26976, 101, 99, 116, 111, 114, 256, 59, 66, 2390, 2391, 25023, 97, 114, 59, 26968, 101, 99, 116, 111, 114, 256, 59, 66, 2405, 2406, 25020, 97, 114, 59, 26962, 105, 103, 104, 116, 225, 924, 115, 768, 69, 70, 71, 76, 83, 84, 2430, 2443, 2453, 2461, 2466, 2477, 113, 117, 97, 108, 71, 114, 101, 97, 116, 101, 114, 59, 25306, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25190, 114, 101, 97, 116, 101, 114, 59, 25206, 101, 115, 115, 59, 27297, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 27261, 105, 108, 100, 101, 59, 25202, 114, 59, 49152, 55349, 56591, 256, 59, 101, 2493, 2494, 25304, 102, 116, 97, 114, 114, 111, 119, 59, 25050, 105, 100, 111, 116, 59, 16703, 384, 110, 112, 119, 2516, 2582, 2587, 103, 512, 76, 82, 108, 114, 2526, 2551, 2562, 2576, 101, 102, 116, 256, 65, 82, 2534, 2540, 114, 114, 111, 119, 59, 26613, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26615, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 26614, 101, 102, 116, 256, 97, 114, 947, 2570, 105, 103, 104, 116, 225, 959, 105, 103, 104, 116, 225, 970, 102, 59, 49152, 55349, 56643, 101, 114, 256, 76, 82, 2594, 2604, 101, 102, 116, 65, 114, 114, 111, 119, 59, 24985, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 24984, 384, 99, 104, 116, 2622, 2624, 2626, 242, 2124, 59, 25008, 114, 111, 107, 59, 16705, 59, 25194, 1024, 97, 99, 101, 102, 105, 111, 115, 117, 2650, 2653, 2656, 2679, 2684, 2693, 2699, 2702, 112, 59, 26885, 121, 59, 17436, 256, 100, 108, 2661, 2671, 105, 117, 109, 83, 112, 97, 99, 101, 59, 24671, 108, 105, 110, 116, 114, 102, 59, 24883, 114, 59, 49152, 55349, 56592, 110, 117, 115, 80, 108, 117, 115, 59, 25107, 112, 102, 59, 49152, 55349, 56644, 99, 242, 2678, 59, 17308, 1152, 74, 97, 99, 101, 102, 111, 115, 116, 117, 2723, 2727, 2733, 2752, 2836, 2841, 3473, 3479, 3486, 99, 121, 59, 17418, 99, 117, 116, 101, 59, 16707, 384, 97, 101, 121, 2740, 2745, 2750, 114, 111, 110, 59, 16711, 100, 105, 108, 59, 16709, 59, 17437, 384, 103, 115, 119, 2759, 2800, 2830, 97, 116, 105, 118, 101, 384, 77, 84, 86, 2771, 2783, 2792, 101, 100, 105, 117, 109, 83, 112, 97, 99, 101, 59, 24587, 104, 105, 256, 99, 110, 2790, 2776, 235, 2777, 101, 114, 121, 84, 104, 105, 238, 2777, 116, 101, 100, 256, 71, 76, 2808, 2822, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 242, 1651, 101, 115, 115, 76, 101, 115, 243, 2632, 76, 105, 110, 101, 59, 16394, 114, 59, 49152, 55349, 56593, 512, 66, 110, 112, 116, 2850, 2856, 2871, 2874, 114, 101, 97, 107, 59, 24672, 66, 114, 101, 97, 107, 105, 110, 103, 83, 112, 97, 99, 101, 59, 16544, 102, 59, 24853, 1664, 59, 67, 68, 69, 71, 72, 76, 78, 80, 82, 83, 84, 86, 2901, 2902, 2922, 2940, 2977, 3051, 3076, 3166, 3204, 3238, 3288, 3425, 3461, 27372, 256, 111, 117, 2907, 2916, 110, 103, 114, 117, 101, 110, 116, 59, 25186, 112, 67, 97, 112, 59, 25197, 111, 117, 98, 108, 101, 86, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25126, 384, 108, 113, 120, 2947, 2954, 2971, 101, 109, 101, 110, 116, 59, 25097, 117, 97, 108, 256, 59, 84, 2962, 2963, 25184, 105, 108, 100, 101, 59, 49152, 8770, 824, 105, 115, 116, 115, 59, 25092, 114, 101, 97, 116, 101, 114, 896, 59, 69, 70, 71, 76, 83, 84, 2998, 2999, 3005, 3017, 3027, 3032, 3045, 25199, 113, 117, 97, 108, 59, 25201, 117, 108, 108, 69, 113, 117, 97, 108, 59, 49152, 8807, 824, 114, 101, 97, 116, 101, 114, 59, 49152, 8811, 824, 101, 115, 115, 59, 25209, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 49152, 10878, 824, 105, 108, 100, 101, 59, 25205, 117, 109, 112, 324, 3058, 3069, 111, 119, 110, 72, 117, 109, 112, 59, 49152, 8782, 824, 113, 117, 97, 108, 59, 49152, 8783, 824, 101, 256, 102, 115, 3082, 3111, 116, 84, 114, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 3098, 3099, 3105, 25322, 97, 114, 59, 49152, 10703, 824, 113, 117, 97, 108, 59, 25324, 115, 768, 59, 69, 71, 76, 83, 84, 3125, 3126, 3132, 3140, 3147, 3160, 25198, 113, 117, 97, 108, 59, 25200, 114, 101, 97, 116, 101, 114, 59, 25208, 101, 115, 115, 59, 49152, 8810, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 49152, 10877, 824, 105, 108, 100, 101, 59, 25204, 101, 115, 116, 101, 100, 256, 71, 76, 3176, 3193, 114, 101, 97, 116, 101, 114, 71, 114, 101, 97, 116, 101, 114, 59, 49152, 10914, 824, 101, 115, 115, 76, 101, 115, 115, 59, 49152, 10913, 824, 114, 101, 99, 101, 100, 101, 115, 384, 59, 69, 83, 3218, 3219, 3227, 25216, 113, 117, 97, 108, 59, 49152, 10927, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25312, 256, 101, 105, 3243, 3257, 118, 101, 114, 115, 101, 69, 108, 101, 109, 101, 110, 116, 59, 25100, 103, 104, 116, 84, 114, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 3275, 3276, 3282, 25323, 97, 114, 59, 49152, 10704, 824, 113, 117, 97, 108, 59, 25325, 256, 113, 117, 3293, 3340, 117, 97, 114, 101, 83, 117, 256, 98, 112, 3304, 3321, 115, 101, 116, 256, 59, 69, 3312, 3315, 49152, 8847, 824, 113, 117, 97, 108, 59, 25314, 101, 114, 115, 101, 116, 256, 59, 69, 3331, 3334, 49152, 8848, 824, 113, 117, 97, 108, 59, 25315, 384, 98, 99, 112, 3347, 3364, 3406, 115, 101, 116, 256, 59, 69, 3355, 3358, 49152, 8834, 8402, 113, 117, 97, 108, 59, 25224, 99, 101, 101, 100, 115, 512, 59, 69, 83, 84, 3378, 3379, 3387, 3398, 25217, 113, 117, 97, 108, 59, 49152, 10928, 824, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25313, 105, 108, 100, 101, 59, 49152, 8831, 824, 101, 114, 115, 101, 116, 256, 59, 69, 3416, 3419, 49152, 8835, 8402, 113, 117, 97, 108, 59, 25225, 105, 108, 100, 101, 512, 59, 69, 70, 84, 3438, 3439, 3445, 3455, 25153, 113, 117, 97, 108, 59, 25156, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25159, 105, 108, 100, 101, 59, 25161, 101, 114, 116, 105, 99, 97, 108, 66, 97, 114, 59, 25124, 99, 114, 59, 49152, 55349, 56489, 105, 108, 100, 101, 32827, 209, 16593, 59, 17309, 1792, 69, 97, 99, 100, 102, 103, 109, 111, 112, 114, 115, 116, 117, 118, 3517, 3522, 3529, 3541, 3547, 3552, 3559, 3580, 3586, 3616, 3618, 3634, 3647, 3652, 108, 105, 103, 59, 16722, 99, 117, 116, 101, 32827, 211, 16595, 256, 105, 121, 3534, 3539, 114, 99, 32827, 212, 16596, 59, 17438, 98, 108, 97, 99, 59, 16720, 114, 59, 49152, 55349, 56594, 114, 97, 118, 101, 32827, 210, 16594, 384, 97, 101, 105, 3566, 3570, 3574, 99, 114, 59, 16716, 103, 97, 59, 17321, 99, 114, 111, 110, 59, 17311, 112, 102, 59, 49152, 55349, 56646, 101, 110, 67, 117, 114, 108, 121, 256, 68, 81, 3598, 3610, 111, 117, 98, 108, 101, 81, 117, 111, 116, 101, 59, 24604, 117, 111, 116, 101, 59, 24600, 59, 27220, 256, 99, 108, 3623, 3628, 114, 59, 49152, 55349, 56490, 97, 115, 104, 32827, 216, 16600, 105, 364, 3639, 3644, 100, 101, 32827, 213, 16597, 101, 115, 59, 27191, 109, 108, 32827, 214, 16598, 101, 114, 256, 66, 80, 3659, 3680, 256, 97, 114, 3664, 3667, 114, 59, 24638, 97, 99, 256, 101, 107, 3674, 3676, 59, 25566, 101, 116, 59, 25524, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 25564, 1152, 97, 99, 102, 104, 105, 108, 111, 114, 115, 3711, 3719, 3722, 3727, 3730, 3732, 3741, 3760, 3836, 114, 116, 105, 97, 108, 68, 59, 25090, 121, 59, 17439, 114, 59, 49152, 55349, 56595, 105, 59, 17318, 59, 17312, 117, 115, 77, 105, 110, 117, 115, 59, 16561, 256, 105, 112, 3746, 3757, 110, 99, 97, 114, 101, 112, 108, 97, 110, 229, 1693, 102, 59, 24857, 512, 59, 101, 105, 111, 3769, 3770, 3808, 3812, 27323, 99, 101, 100, 101, 115, 512, 59, 69, 83, 84, 3784, 3785, 3791, 3802, 25210, 113, 117, 97, 108, 59, 27311, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25212, 105, 108, 100, 101, 59, 25214, 109, 101, 59, 24627, 256, 100, 112, 3817, 3822, 117, 99, 116, 59, 25103, 111, 114, 116, 105, 111, 110, 256, 59, 97, 549, 3833, 108, 59, 25117, 256, 99, 105, 3841, 3846, 114, 59, 49152, 55349, 56491, 59, 17320, 512, 85, 102, 111, 115, 3857, 3862, 3867, 3871, 79, 84, 32827, 34, 16418, 114, 59, 49152, 55349, 56596, 112, 102, 59, 24858, 99, 114, 59, 49152, 55349, 56492, 1536, 66, 69, 97, 99, 101, 102, 104, 105, 111, 114, 115, 117, 3902, 3907, 3911, 3936, 3955, 4007, 4010, 4013, 4246, 4265, 4276, 4286, 97, 114, 114, 59, 26896, 71, 32827, 174, 16558, 384, 99, 110, 114, 3918, 3923, 3926, 117, 116, 101, 59, 16724, 103, 59, 26603, 114, 256, 59, 116, 3932, 3933, 24992, 108, 59, 26902, 384, 97, 101, 121, 3943, 3948, 3953, 114, 111, 110, 59, 16728, 100, 105, 108, 59, 16726, 59, 17440, 256, 59, 118, 3960, 3961, 24860, 101, 114, 115, 101, 256, 69, 85, 3970, 3993, 256, 108, 113, 3975, 3982, 101, 109, 101, 110, 116, 59, 25099, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 25035, 112, 69, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 26991, 114, 187, 3961, 111, 59, 17313, 103, 104, 116, 1024, 65, 67, 68, 70, 84, 85, 86, 97, 4033, 4075, 4083, 4130, 4136, 4187, 4231, 984, 256, 110, 114, 4038, 4050, 103, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26601, 114, 111, 119, 384, 59, 66, 76, 4060, 4061, 4065, 24978, 97, 114, 59, 25061, 101, 102, 116, 65, 114, 114, 111, 119, 59, 25028, 101, 105, 108, 105, 110, 103, 59, 25353, 111, 501, 4089, 0, 4101, 98, 108, 101, 66, 114, 97, 99, 107, 101, 116, 59, 26599, 110, 468, 4106, 0, 4116, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26973, 101, 99, 116, 111, 114, 256, 59, 66, 4125, 4126, 25026, 97, 114, 59, 26965, 108, 111, 111, 114, 59, 25355, 256, 101, 114, 4141, 4163, 101, 384, 59, 65, 86, 4149, 4150, 4156, 25250, 114, 114, 111, 119, 59, 24998, 101, 99, 116, 111, 114, 59, 26971, 105, 97, 110, 103, 108, 101, 384, 59, 66, 69, 4176, 4177, 4181, 25267, 97, 114, 59, 27088, 113, 117, 97, 108, 59, 25269, 112, 384, 68, 84, 86, 4195, 4206, 4216, 111, 119, 110, 86, 101, 99, 116, 111, 114, 59, 26959, 101, 101, 86, 101, 99, 116, 111, 114, 59, 26972, 101, 99, 116, 111, 114, 256, 59, 66, 4226, 4227, 25022, 97, 114, 59, 26964, 101, 99, 116, 111, 114, 256, 59, 66, 4241, 4242, 25024, 97, 114, 59, 26963, 256, 112, 117, 4251, 4254, 102, 59, 24861, 110, 100, 73, 109, 112, 108, 105, 101, 115, 59, 26992, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25051, 256, 99, 104, 4281, 4284, 114, 59, 24859, 59, 25009, 108, 101, 68, 101, 108, 97, 121, 101, 100, 59, 27124, 1664, 72, 79, 97, 99, 102, 104, 105, 109, 111, 113, 115, 116, 117, 4324, 4337, 4343, 4349, 4377, 4382, 4433, 4438, 4449, 4455, 4533, 4539, 4543, 256, 67, 99, 4329, 4334, 72, 99, 121, 59, 17449, 121, 59, 17448, 70, 84, 99, 121, 59, 17452, 99, 117, 116, 101, 59, 16730, 640, 59, 97, 101, 105, 121, 4360, 4361, 4366, 4371, 4375, 27324, 114, 111, 110, 59, 16736, 100, 105, 108, 59, 16734, 114, 99, 59, 16732, 59, 17441, 114, 59, 49152, 55349, 56598, 111, 114, 116, 512, 68, 76, 82, 85, 4394, 4404, 4414, 4425, 111, 119, 110, 65, 114, 114, 111, 119, 187, 1054, 101, 102, 116, 65, 114, 114, 111, 119, 187, 2202, 105, 103, 104, 116, 65, 114, 114, 111, 119, 187, 4061, 112, 65, 114, 114, 111, 119, 59, 24977, 103, 109, 97, 59, 17315, 97, 108, 108, 67, 105, 114, 99, 108, 101, 59, 25112, 112, 102, 59, 49152, 55349, 56650, 626, 4461, 0, 0, 4464, 116, 59, 25114, 97, 114, 101, 512, 59, 73, 83, 85, 4475, 4476, 4489, 4527, 26017, 110, 116, 101, 114, 115, 101, 99, 116, 105, 111, 110, 59, 25235, 117, 256, 98, 112, 4495, 4510, 115, 101, 116, 256, 59, 69, 4503, 4504, 25231, 113, 117, 97, 108, 59, 25233, 101, 114, 115, 101, 116, 256, 59, 69, 4520, 4521, 25232, 113, 117, 97, 108, 59, 25234, 110, 105, 111, 110, 59, 25236, 99, 114, 59, 49152, 55349, 56494, 97, 114, 59, 25286, 512, 98, 99, 109, 112, 4552, 4571, 4617, 4619, 256, 59, 115, 4557, 4558, 25296, 101, 116, 256, 59, 69, 4557, 4565, 113, 117, 97, 108, 59, 25222, 256, 99, 104, 4576, 4613, 101, 101, 100, 115, 512, 59, 69, 83, 84, 4589, 4590, 4596, 4607, 25211, 113, 117, 97, 108, 59, 27312, 108, 97, 110, 116, 69, 113, 117, 97, 108, 59, 25213, 105, 108, 100, 101, 59, 25215, 84, 104, 225, 3980, 59, 25105, 384, 59, 101, 115, 4626, 4627, 4643, 25297, 114, 115, 101, 116, 256, 59, 69, 4636, 4637, 25219, 113, 117, 97, 108, 59, 25223, 101, 116, 187, 4627, 1408, 72, 82, 83, 97, 99, 102, 104, 105, 111, 114, 115, 4670, 4676, 4681, 4693, 4702, 4721, 4726, 4767, 4802, 4808, 4817, 79, 82, 78, 32827, 222, 16606, 65, 68, 69, 59, 24866, 256, 72, 99, 4686, 4690, 99, 121, 59, 17419, 121, 59, 17446, 256, 98, 117, 4698, 4700, 59, 16393, 59, 17316, 384, 97, 101, 121, 4709, 4714, 4719, 114, 111, 110, 59, 16740, 100, 105, 108, 59, 16738, 59, 17442, 114, 59, 49152, 55349, 56599, 256, 101, 105, 4731, 4745, 498, 4736, 0, 4743, 101, 102, 111, 114, 101, 59, 25140, 97, 59, 17304, 256, 99, 110, 4750, 4760, 107, 83, 112, 97, 99, 101, 59, 49152, 8287, 8202, 83, 112, 97, 99, 101, 59, 24585, 108, 100, 101, 512, 59, 69, 70, 84, 4779, 4780, 4786, 4796, 25148, 113, 117, 97, 108, 59, 25155, 117, 108, 108, 69, 113, 117, 97, 108, 59, 25157, 105, 108, 100, 101, 59, 25160, 112, 102, 59, 49152, 55349, 56651, 105, 112, 108, 101, 68, 111, 116, 59, 24795, 256, 99, 116, 4822, 4827, 114, 59, 49152, 55349, 56495, 114, 111, 107, 59, 16742, 2785, 4855, 4878, 4890, 4902, 0, 4908, 4913, 0, 0, 0, 0, 0, 4920, 4925, 4983, 4997, 0, 5119, 5124, 5130, 5136, 256, 99, 114, 4859, 4865, 117, 116, 101, 32827, 218, 16602, 114, 256, 59, 111, 4871, 4872, 24991, 99, 105, 114, 59, 26953, 114, 483, 4883, 0, 4886, 121, 59, 17422, 118, 101, 59, 16748, 256, 105, 121, 4894, 4899, 114, 99, 32827, 219, 16603, 59, 17443, 98, 108, 97, 99, 59, 16752, 114, 59, 49152, 55349, 56600, 114, 97, 118, 101, 32827, 217, 16601, 97, 99, 114, 59, 16746, 256, 100, 105, 4929, 4969, 101, 114, 256, 66, 80, 4936, 4957, 256, 97, 114, 4941, 4944, 114, 59, 16479, 97, 99, 256, 101, 107, 4951, 4953, 59, 25567, 101, 116, 59, 25525, 97, 114, 101, 110, 116, 104, 101, 115, 105, 115, 59, 25565, 111, 110, 256, 59, 80, 4976, 4977, 25283, 108, 117, 115, 59, 25230, 256, 103, 112, 4987, 4991, 111, 110, 59, 16754, 102, 59, 49152, 55349, 56652, 1024, 65, 68, 69, 84, 97, 100, 112, 115, 5013, 5038, 5048, 5060, 1000, 5074, 5079, 5107, 114, 114, 111, 119, 384, 59, 66, 68, 4432, 5024, 5028, 97, 114, 59, 26898, 111, 119, 110, 65, 114, 114, 111, 119, 59, 25029, 111, 119, 110, 65, 114, 114, 111, 119, 59, 24981, 113, 117, 105, 108, 105, 98, 114, 105, 117, 109, 59, 26990, 101, 101, 256, 59, 65, 5067, 5068, 25253, 114, 114, 111, 119, 59, 24997, 111, 119, 110, 225, 1011, 101, 114, 256, 76, 82, 5086, 5096, 101, 102, 116, 65, 114, 114, 111, 119, 59, 24982, 105, 103, 104, 116, 65, 114, 114, 111, 119, 59, 24983, 105, 256, 59, 108, 5113, 5114, 17362, 111, 110, 59, 17317, 105, 110, 103, 59, 16750, 99, 114, 59, 49152, 55349, 56496, 105, 108, 100, 101, 59, 16744, 109, 108, 32827, 220, 16604, 1152, 68, 98, 99, 100, 101, 102, 111, 115, 118, 5159, 5164, 5168, 5171, 5182, 5253, 5258, 5264, 5270, 97, 115, 104, 59, 25259, 97, 114, 59, 27371, 121, 59, 17426, 97, 115, 104, 256, 59, 108, 5179, 5180, 25257, 59, 27366, 256, 101, 114, 5187, 5189, 59, 25281, 384, 98, 116, 121, 5196, 5200, 5242, 97, 114, 59, 24598, 256, 59, 105, 5199, 5205, 99, 97, 108, 512, 66, 76, 83, 84, 5217, 5221, 5226, 5236, 97, 114, 59, 25123, 105, 110, 101, 59, 16508, 101, 112, 97, 114, 97, 116, 111, 114, 59, 26456, 105, 108, 100, 101, 59, 25152, 84, 104, 105, 110, 83, 112, 97, 99, 101, 59, 24586, 114, 59, 49152, 55349, 56601, 112, 102, 59, 49152, 55349, 56653, 99, 114, 59, 49152, 55349, 56497, 100, 97, 115, 104, 59, 25258, 640, 99, 101, 102, 111, 115, 5287, 5292, 5297, 5302, 5308, 105, 114, 99, 59, 16756, 100, 103, 101, 59, 25280, 114, 59, 49152, 55349, 56602, 112, 102, 59, 49152, 55349, 56654, 99, 114, 59, 49152, 55349, 56498, 512, 102, 105, 111, 115, 5323, 5328, 5330, 5336, 114, 59, 49152, 55349, 56603, 59, 17310, 112, 102, 59, 49152, 55349, 56655, 99, 114, 59, 49152, 55349, 56499, 1152, 65, 73, 85, 97, 99, 102, 111, 115, 117, 5361, 5365, 5369, 5373, 5380, 5391, 5396, 5402, 5408, 99, 121, 59, 17455, 99, 121, 59, 17415, 99, 121, 59, 17454, 99, 117, 116, 101, 32827, 221, 16605, 256, 105, 121, 5385, 5389, 114, 99, 59, 16758, 59, 17451, 114, 59, 49152, 55349, 56604, 112, 102, 59, 49152, 55349, 56656, 99, 114, 59, 49152, 55349, 56500, 109, 108, 59, 16760, 1024, 72, 97, 99, 100, 101, 102, 111, 115, 5429, 5433, 5439, 5451, 5455, 5469, 5472, 5476, 99, 121, 59, 17430, 99, 117, 116, 101, 59, 16761, 256, 97, 121, 5444, 5449, 114, 111, 110, 59, 16765, 59, 17431, 111, 116, 59, 16763, 498, 5460, 0, 5467, 111, 87, 105, 100, 116, 232, 2777, 97, 59, 17302, 114, 59, 24872, 112, 102, 59, 24868, 99, 114, 59, 49152, 55349, 56501, 3041, 5507, 5514, 5520, 0, 5552, 5558, 5567, 0, 0, 0, 0, 5574, 5595, 5611, 5727, 5741, 0, 5781, 5787, 5810, 5817, 0, 5822, 99, 117, 116, 101, 32827, 225, 16609, 114, 101, 118, 101, 59, 16643, 768, 59, 69, 100, 105, 117, 121, 5532, 5533, 5537, 5539, 5544, 5549, 25150, 59, 49152, 8766, 819, 59, 25151, 114, 99, 32827, 226, 16610, 116, 101, 32955, 180, 774, 59, 17456, 108, 105, 103, 32827, 230, 16614, 256, 59, 114, 178, 5562, 59, 49152, 55349, 56606, 114, 97, 118, 101, 32827, 224, 16608, 256, 101, 112, 5578, 5590, 256, 102, 112, 5583, 5588, 115, 121, 109, 59, 24885, 232, 5587, 104, 97, 59, 17329, 256, 97, 112, 5599, 99, 256, 99, 108, 5604, 5607, 114, 59, 16641, 103, 59, 27199, 612, 5616, 0, 0, 5642, 640, 59, 97, 100, 115, 118, 5626, 5627, 5631, 5633, 5639, 25127, 110, 100, 59, 27221, 59, 27228, 108, 111, 112, 101, 59, 27224, 59, 27226, 896, 59, 101, 108, 109, 114, 115, 122, 5656, 5657, 5659, 5662, 5695, 5711, 5721, 25120, 59, 27044, 101, 187, 5657, 115, 100, 256, 59, 97, 5669, 5670, 25121, 1121, 5680, 5682, 5684, 5686, 5688, 5690, 5692, 5694, 59, 27048, 59, 27049, 59, 27050, 59, 27051, 59, 27052, 59, 27053, 59, 27054, 59, 27055, 116, 256, 59, 118, 5701, 5702, 25119, 98, 256, 59, 100, 5708, 5709, 25278, 59, 27037, 256, 112, 116, 5716, 5719, 104, 59, 25122, 187, 185, 97, 114, 114, 59, 25468, 256, 103, 112, 5731, 5735, 111, 110, 59, 16645, 102, 59, 49152, 55349, 56658, 896, 59, 69, 97, 101, 105, 111, 112, 4801, 5755, 5757, 5762, 5764, 5767, 5770, 59, 27248, 99, 105, 114, 59, 27247, 59, 25162, 100, 59, 25163, 115, 59, 16423, 114, 111, 120, 256, 59, 101, 4801, 5778, 241, 5763, 105, 110, 103, 32827, 229, 16613, 384, 99, 116, 121, 5793, 5798, 5800, 114, 59, 49152, 55349, 56502, 59, 16426, 109, 112, 256, 59, 101, 4801, 5807, 241, 648, 105, 108, 100, 101, 32827, 227, 16611, 109, 108, 32827, 228, 16612, 256, 99, 105, 5826, 5832, 111, 110, 105, 110, 244, 626, 110, 116, 59, 27153, 2048, 78, 97, 98, 99, 100, 101, 102, 105, 107, 108, 110, 111, 112, 114, 115, 117, 5869, 5873, 5936, 5948, 5955, 5960, 6008, 6013, 6112, 6118, 6201, 6224, 5901, 6461, 6472, 6512, 111, 116, 59, 27373, 256, 99, 114, 5878, 5918, 107, 512, 99, 101, 112, 115, 5888, 5893, 5901, 5907, 111, 110, 103, 59, 25164, 112, 115, 105, 108, 111, 110, 59, 17398, 114, 105, 109, 101, 59, 24629, 105, 109, 256, 59, 101, 5914, 5915, 25149, 113, 59, 25293, 374, 5922, 5926, 101, 101, 59, 25277, 101, 100, 256, 59, 103, 5932, 5933, 25349, 101, 187, 5933, 114, 107, 256, 59, 116, 4956, 5943, 98, 114, 107, 59, 25526, 256, 111, 121, 5889, 5953, 59, 17457, 113, 117, 111, 59, 24606, 640, 99, 109, 112, 114, 116, 5971, 5979, 5985, 5988, 5992, 97, 117, 115, 256, 59, 101, 266, 265, 112, 116, 121, 118, 59, 27056, 115, 233, 5900, 110, 111, 245, 275, 384, 97, 104, 119, 5999, 6001, 6003, 59, 17330, 59, 24886, 101, 101, 110, 59, 25196, 114, 59, 49152, 55349, 56607, 103, 896, 99, 111, 115, 116, 117, 118, 119, 6029, 6045, 6067, 6081, 6101, 6107, 6110, 384, 97, 105, 117, 6036, 6038, 6042, 240, 1888, 114, 99, 59, 26095, 112, 187, 4977, 384, 100, 112, 116, 6052, 6056, 6061, 111, 116, 59, 27136, 108, 117, 115, 59, 27137, 105, 109, 101, 115, 59, 27138, 625, 6073, 0, 0, 6078, 99, 117, 112, 59, 27142, 97, 114, 59, 26117, 114, 105, 97, 110, 103, 108, 101, 256, 100, 117, 6093, 6098, 111, 119, 110, 59, 26045, 112, 59, 26035, 112, 108, 117, 115, 59, 27140, 101, 229, 5188, 229, 5293, 97, 114, 111, 119, 59, 26893, 384, 97, 107, 111, 6125, 6182, 6197, 256, 99, 110, 6130, 6179, 107, 384, 108, 115, 116, 6138, 1451, 6146, 111, 122, 101, 110, 103, 101, 59, 27115, 114, 105, 97, 110, 103, 108, 101, 512, 59, 100, 108, 114, 6162, 6163, 6168, 6173, 26036, 111, 119, 110, 59, 26046, 101, 102, 116, 59, 26050, 105, 103, 104, 116, 59, 26040, 107, 59, 25635, 433, 6187, 0, 6195, 434, 6191, 0, 6193, 59, 26002, 59, 26001, 52, 59, 26003, 99, 107, 59, 25992, 256, 101, 111, 6206, 6221, 256, 59, 113, 6211, 6214, 49152, 61, 8421, 117, 105, 118, 59, 49152, 8801, 8421, 116, 59, 25360, 512, 112, 116, 119, 120, 6233, 6238, 6247, 6252, 102, 59, 49152, 55349, 56659, 256, 59, 116, 5067, 6243, 111, 109, 187, 5068, 116, 105, 101, 59, 25288, 1536, 68, 72, 85, 86, 98, 100, 104, 109, 112, 116, 117, 118, 6277, 6294, 6314, 6331, 6359, 6363, 6380, 6399, 6405, 6410, 6416, 6433, 512, 76, 82, 108, 114, 6286, 6288, 6290, 6292, 59, 25943, 59, 25940, 59, 25942, 59, 25939, 640, 59, 68, 85, 100, 117, 6305, 6306, 6308, 6310, 6312, 25936, 59, 25958, 59, 25961, 59, 25956, 59, 25959, 512, 76, 82, 108, 114, 6323, 6325, 6327, 6329, 59, 25949, 59, 25946, 59, 25948, 59, 25945, 896, 59, 72, 76, 82, 104, 108, 114, 6346, 6347, 6349, 6351, 6353, 6355, 6357, 25937, 59, 25964, 59, 25955, 59, 25952, 59, 25963, 59, 25954, 59, 25951, 111, 120, 59, 27081, 512, 76, 82, 108, 114, 6372, 6374, 6376, 6378, 59, 25941, 59, 25938, 59, 25872, 59, 25868, 640, 59, 68, 85, 100, 117, 1725, 6391, 6393, 6395, 6397, 59, 25957, 59, 25960, 59, 25900, 59, 25908, 105, 110, 117, 115, 59, 25247, 108, 117, 115, 59, 25246, 105, 109, 101, 115, 59, 25248, 512, 76, 82, 108, 114, 6425, 6427, 6429, 6431, 59, 25947, 59, 25944, 59, 25880, 59, 25876, 896, 59, 72, 76, 82, 104, 108, 114, 6448, 6449, 6451, 6453, 6455, 6457, 6459, 25858, 59, 25962, 59, 25953, 59, 25950, 59, 25916, 59, 25892, 59, 25884, 256, 101, 118, 291, 6466, 98, 97, 114, 32827, 166, 16550, 512, 99, 101, 105, 111, 6481, 6486, 6490, 6496, 114, 59, 49152, 55349, 56503, 109, 105, 59, 24655, 109, 256, 59, 101, 5914, 5916, 108, 384, 59, 98, 104, 6504, 6505, 6507, 16476, 59, 27077, 115, 117, 98, 59, 26568, 364, 6516, 6526, 108, 256, 59, 101, 6521, 6522, 24610, 116, 187, 6522, 112, 384, 59, 69, 101, 303, 6533, 6535, 59, 27310, 256, 59, 113, 1756, 1755, 3297, 6567, 0, 6632, 6673, 6677, 6706, 0, 6711, 6736, 0, 0, 6836, 0, 0, 6849, 0, 0, 6945, 6958, 6989, 6994, 0, 7165, 0, 7180, 384, 99, 112, 114, 6573, 6578, 6621, 117, 116, 101, 59, 16647, 768, 59, 97, 98, 99, 100, 115, 6591, 6592, 6596, 6602, 6613, 6617, 25129, 110, 100, 59, 27204, 114, 99, 117, 112, 59, 27209, 256, 97, 117, 6607, 6610, 112, 59, 27211, 112, 59, 27207, 111, 116, 59, 27200, 59, 49152, 8745, 65024, 256, 101, 111, 6626, 6629, 116, 59, 24641, 238, 1683, 512, 97, 101, 105, 117, 6640, 6651, 6657, 6661, 496, 6645, 0, 6648, 115, 59, 27213, 111, 110, 59, 16653, 100, 105, 108, 32827, 231, 16615, 114, 99, 59, 16649, 112, 115, 256, 59, 115, 6668, 6669, 27212, 109, 59, 27216, 111, 116, 59, 16651, 384, 100, 109, 110, 6683, 6688, 6694, 105, 108, 32955, 184, 429, 112, 116, 121, 118, 59, 27058, 116, 33024, 162, 59, 101, 6701, 6702, 16546, 114, 228, 434, 114, 59, 49152, 55349, 56608, 384, 99, 101, 105, 6717, 6720, 6733, 121, 59, 17479, 99, 107, 256, 59, 109, 6727, 6728, 26387, 97, 114, 107, 187, 6728, 59, 17351, 114, 896, 59, 69, 99, 101, 102, 109, 115, 6751, 6752, 6754, 6763, 6820, 6826, 6830, 26059, 59, 27075, 384, 59, 101, 108, 6761, 6762, 6765, 17094, 113, 59, 25175, 101, 609, 6772, 0, 0, 6792, 114, 114, 111, 119, 256, 108, 114, 6780, 6785, 101, 102, 116, 59, 25018, 105, 103, 104, 116, 59, 25019, 640, 82, 83, 97, 99, 100, 6802, 6804, 6806, 6810, 6815, 187, 3911, 59, 25800, 115, 116, 59, 25243, 105, 114, 99, 59, 25242, 97, 115, 104, 59, 25245, 110, 105, 110, 116, 59, 27152, 105, 100, 59, 27375, 99, 105, 114, 59, 27074, 117, 98, 115, 256, 59, 117, 6843, 6844, 26211, 105, 116, 187, 6844, 748, 6855, 6868, 6906, 0, 6922, 111, 110, 256, 59, 101, 6861, 6862, 16442, 256, 59, 113, 199, 198, 621, 6873, 0, 0, 6882, 97, 256, 59, 116, 6878, 6879, 16428, 59, 16448, 384, 59, 102, 108, 6888, 6889, 6891, 25089, 238, 4448, 101, 256, 109, 120, 6897, 6902, 101, 110, 116, 187, 6889, 101, 243, 589, 487, 6910, 0, 6919, 256, 59, 100, 4795, 6914, 111, 116, 59, 27245, 110, 244, 582, 384, 102, 114, 121, 6928, 6932, 6935, 59, 49152, 55349, 56660, 111, 228, 596, 33024, 169, 59, 115, 341, 6941, 114, 59, 24855, 256, 97, 111, 6949, 6953, 114, 114, 59, 25013, 115, 115, 59, 26391, 256, 99, 117, 6962, 6967, 114, 59, 49152, 55349, 56504, 256, 98, 112, 6972, 6980, 256, 59, 101, 6977, 6978, 27343, 59, 27345, 256, 59, 101, 6985, 6986, 27344, 59, 27346, 100, 111, 116, 59, 25327, 896, 100, 101, 108, 112, 114, 118, 119, 7008, 7020, 7031, 7042, 7084, 7124, 7161, 97, 114, 114, 256, 108, 114, 7016, 7018, 59, 26936, 59, 26933, 624, 7026, 0, 0, 7029, 114, 59, 25310, 99, 59, 25311, 97, 114, 114, 256, 59, 112, 7039, 7040, 25014, 59, 26941, 768, 59, 98, 99, 100, 111, 115, 7055, 7056, 7062, 7073, 7077, 7080, 25130, 114, 99, 97, 112, 59, 27208, 256, 97, 117, 7067, 7070, 112, 59, 27206, 112, 59, 27210, 111, 116, 59, 25229, 114, 59, 27205, 59, 49152, 8746, 65024, 512, 97, 108, 114, 118, 7093, 7103, 7134, 7139, 114, 114, 256, 59, 109, 7100, 7101, 25015, 59, 26940, 121, 384, 101, 118, 119, 7111, 7124, 7128, 113, 624, 7118, 0, 0, 7122, 114, 101, 227, 7027, 117, 227, 7029, 101, 101, 59, 25294, 101, 100, 103, 101, 59, 25295, 101, 110, 32827, 164, 16548, 101, 97, 114, 114, 111, 119, 256, 108, 114, 7150, 7155, 101, 102, 116, 187, 7040, 105, 103, 104, 116, 187, 7101, 101, 228, 7133, 256, 99, 105, 7169, 7175, 111, 110, 105, 110, 244, 503, 110, 116, 59, 25137, 108, 99, 116, 121, 59, 25389, 2432, 65, 72, 97, 98, 99, 100, 101, 102, 104, 105, 106, 108, 111, 114, 115, 116, 117, 119, 122, 7224, 7227, 7231, 7261, 7273, 7285, 7306, 7326, 7340, 7351, 7419, 7423, 7437, 7547, 7569, 7595, 7611, 7622, 7629, 114, 242, 897, 97, 114, 59, 26981, 512, 103, 108, 114, 115, 7240, 7245, 7250, 7252, 103, 101, 114, 59, 24608, 101, 116, 104, 59, 24888, 242, 4403, 104, 256, 59, 118, 7258, 7259, 24592, 187, 2314, 363, 7265, 7271, 97, 114, 111, 119, 59, 26895, 97, 227, 789, 256, 97, 121, 7278, 7283, 114, 111, 110, 59, 16655, 59, 17460, 384, 59, 97, 111, 818, 7292, 7300, 256, 103, 114, 703, 7297, 114, 59, 25034, 116, 115, 101, 113, 59, 27255, 384, 103, 108, 109, 7313, 7316, 7320, 32827, 176, 16560, 116, 97, 59, 17332, 112, 116, 121, 118, 59, 27057, 256, 105, 114, 7331, 7336, 115, 104, 116, 59, 27007, 59, 49152, 55349, 56609, 97, 114, 256, 108, 114, 7347, 7349, 187, 2268, 187, 4126, 640, 97, 101, 103, 115, 118, 7362, 888, 7382, 7388, 7392, 109, 384, 59, 111, 115, 806, 7370, 7380, 110, 100, 256, 59, 115, 806, 7377, 117, 105, 116, 59, 26214, 97, 109, 109, 97, 59, 17373, 105, 110, 59, 25330, 384, 59, 105, 111, 7399, 7400, 7416, 16631, 100, 101, 33024, 247, 59, 111, 7399, 7408, 110, 116, 105, 109, 101, 115, 59, 25287, 110, 248, 7415, 99, 121, 59, 17490, 99, 623, 7430, 0, 0, 7434, 114, 110, 59, 25374, 111, 112, 59, 25357, 640, 108, 112, 116, 117, 119, 7448, 7453, 7458, 7497, 7509, 108, 97, 114, 59, 16420, 102, 59, 49152, 55349, 56661, 640, 59, 101, 109, 112, 115, 779, 7469, 7479, 7485, 7490, 113, 256, 59, 100, 850, 7475, 111, 116, 59, 25169, 105, 110, 117, 115, 59, 25144, 108, 117, 115, 59, 25108, 113, 117, 97, 114, 101, 59, 25249, 98, 108, 101, 98, 97, 114, 119, 101, 100, 103, 229, 250, 110, 384, 97, 100, 104, 4398, 7517, 7527, 111, 119, 110, 97, 114, 114, 111, 119, 243, 7299, 97, 114, 112, 111, 111, 110, 256, 108, 114, 7538, 7542, 101, 102, 244, 7348, 105, 103, 104, 244, 7350, 354, 7551, 7557, 107, 97, 114, 111, 247, 3906, 623, 7562, 0, 0, 7566, 114, 110, 59, 25375, 111, 112, 59, 25356, 384, 99, 111, 116, 7576, 7587, 7590, 256, 114, 121, 7581, 7585, 59, 49152, 55349, 56505, 59, 17493, 108, 59, 27126, 114, 111, 107, 59, 16657, 256, 100, 114, 7600, 7604, 111, 116, 59, 25329, 105, 256, 59, 102, 7610, 6166, 26047, 256, 97, 104, 7616, 7619, 114, 242, 1065, 97, 242, 4006, 97, 110, 103, 108, 101, 59, 27046, 256, 99, 105, 7634, 7637, 121, 59, 17503, 103, 114, 97, 114, 114, 59, 26623, 2304, 68, 97, 99, 100, 101, 102, 103, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 120, 7681, 7689, 7705, 7736, 1400, 7740, 7753, 7777, 7806, 7845, 7855, 7869, 7905, 7978, 7991, 8004, 8014, 8026, 256, 68, 111, 7686, 7476, 111, 244, 7305, 256, 99, 115, 7694, 7700, 117, 116, 101, 32827, 233, 16617, 116, 101, 114, 59, 27246, 512, 97, 105, 111, 121, 7714, 7719, 7729, 7734, 114, 111, 110, 59, 16667, 114, 256, 59, 99, 7725, 7726, 25174, 32827, 234, 16618, 108, 111, 110, 59, 25173, 59, 17485, 111, 116, 59, 16663, 256, 68, 114, 7745, 7749, 111, 116, 59, 25170, 59, 49152, 55349, 56610, 384, 59, 114, 115, 7760, 7761, 7767, 27290, 97, 118, 101, 32827, 232, 16616, 256, 59, 100, 7772, 7773, 27286, 111, 116, 59, 27288, 512, 59, 105, 108, 115, 7786, 7787, 7794, 7796, 27289, 110, 116, 101, 114, 115, 59, 25575, 59, 24851, 256, 59, 100, 7801, 7802, 27285, 111, 116, 59, 27287, 384, 97, 112, 115, 7813, 7817, 7831, 99, 114, 59, 16659, 116, 121, 384, 59, 115, 118, 7826, 7827, 7829, 25093, 101, 116, 187, 7827, 112, 256, 49, 59, 7837, 7844, 307, 7841, 7843, 59, 24580, 59, 24581, 24579, 256, 103, 115, 7850, 7852, 59, 16715, 112, 59, 24578, 256, 103, 112, 7860, 7864, 111, 110, 59, 16665, 102, 59, 49152, 55349, 56662, 384, 97, 108, 115, 7876, 7886, 7890, 114, 256, 59, 115, 7882, 7883, 25301, 108, 59, 27107, 117, 115, 59, 27249, 105, 384, 59, 108, 118, 7898, 7899, 7903, 17333, 111, 110, 187, 7899, 59, 17397, 512, 99, 115, 117, 118, 7914, 7923, 7947, 7971, 256, 105, 111, 7919, 7729, 114, 99, 187, 7726, 617, 7929, 0, 0, 7931, 237, 1352, 97, 110, 116, 256, 103, 108, 7938, 7942, 116, 114, 187, 7773, 101, 115, 115, 187, 7802, 384, 97, 101, 105, 7954, 7958, 7962, 108, 115, 59, 16445, 115, 116, 59, 25183, 118, 256, 59, 68, 565, 7968, 68, 59, 27256, 112, 97, 114, 115, 108, 59, 27109, 256, 68, 97, 7983, 7987, 111, 116, 59, 25171, 114, 114, 59, 26993, 384, 99, 100, 105, 7998, 8001, 7928, 114, 59, 24879, 111, 244, 850, 256, 97, 104, 8009, 8011, 59, 17335, 32827, 240, 16624, 256, 109, 114, 8019, 8023, 108, 32827, 235, 16619, 111, 59, 24748, 384, 99, 105, 112, 8033, 8036, 8039, 108, 59, 16417, 115, 244, 1390, 256, 101, 111, 8044, 8052, 99, 116, 97, 116, 105, 111, 238, 1369, 110, 101, 110, 116, 105, 97, 108, 229, 1401, 2529, 8082, 0, 8094, 0, 8097, 8103, 0, 0, 8134, 8140, 0, 8147, 0, 8166, 8170, 8192, 0, 8200, 8282, 108, 108, 105, 110, 103, 100, 111, 116, 115, 101, 241, 7748, 121, 59, 17476, 109, 97, 108, 101, 59, 26176, 384, 105, 108, 114, 8109, 8115, 8129, 108, 105, 103, 59, 32768, 64259, 617, 8121, 0, 0, 8125, 103, 59, 32768, 64256, 105, 103, 59, 32768, 64260, 59, 49152, 55349, 56611, 108, 105, 103, 59, 32768, 64257, 108, 105, 103, 59, 49152, 102, 106, 384, 97, 108, 116, 8153, 8156, 8161, 116, 59, 26221, 105, 103, 59, 32768, 64258, 110, 115, 59, 26033, 111, 102, 59, 16786, 496, 8174, 0, 8179, 102, 59, 49152, 55349, 56663, 256, 97, 107, 1471, 8183, 256, 59, 118, 8188, 8189, 25300, 59, 27353, 97, 114, 116, 105, 110, 116, 59, 27149, 256, 97, 111, 8204, 8277, 256, 99, 115, 8209, 8274, 945, 8218, 8240, 8248, 8261, 8264, 0, 8272, 946, 8226, 8229, 8231, 8234, 8236, 0, 8238, 32827, 189, 16573, 59, 24915, 32827, 188, 16572, 59, 24917, 59, 24921, 59, 24923, 435, 8244, 0, 8246, 59, 24916, 59, 24918, 692, 8254, 8257, 0, 0, 8259, 32827, 190, 16574, 59, 24919, 59, 24924, 53, 59, 24920, 438, 8268, 0, 8270, 59, 24922, 59, 24925, 56, 59, 24926, 108, 59, 24644, 119, 110, 59, 25378, 99, 114, 59, 49152, 55349, 56507, 2176, 69, 97, 98, 99, 100, 101, 102, 103, 105, 106, 108, 110, 111, 114, 115, 116, 118, 8322, 8329, 8351, 8357, 8368, 8372, 8432, 8437, 8442, 8447, 8451, 8466, 8504, 791, 8510, 8530, 8606, 256, 59, 108, 1613, 8327, 59, 27276, 384, 99, 109, 112, 8336, 8341, 8349, 117, 116, 101, 59, 16885, 109, 97, 256, 59, 100, 8348, 7386, 17331, 59, 27270, 114, 101, 118, 101, 59, 16671, 256, 105, 121, 8362, 8366, 114, 99, 59, 16669, 59, 17459, 111, 116, 59, 16673, 512, 59, 108, 113, 115, 1598, 1602, 8381, 8393, 384, 59, 113, 115, 1598, 1612, 8388, 108, 97, 110, 244, 1637, 512, 59, 99, 100, 108, 1637, 8402, 8405, 8421, 99, 59, 27305, 111, 116, 256, 59, 111, 8412, 8413, 27264, 256, 59, 108, 8418, 8419, 27266, 59, 27268, 256, 59, 101, 8426, 8429, 49152, 8923, 65024, 115, 59, 27284, 114, 59, 49152, 55349, 56612, 256, 59, 103, 1651, 1563, 109, 101, 108, 59, 24887, 99, 121, 59, 17491, 512, 59, 69, 97, 106, 1626, 8460, 8462, 8464, 59, 27282, 59, 27301, 59, 27300, 512, 69, 97, 101, 115, 8475, 8477, 8489, 8500, 59, 25193, 112, 256, 59, 112, 8483, 8484, 27274, 114, 111, 120, 187, 8484, 256, 59, 113, 8494, 8495, 27272, 256, 59, 113, 8494, 8475, 105, 109, 59, 25319, 112, 102, 59, 49152, 55349, 56664, 256, 99, 105, 8515, 8518, 114, 59, 24842, 109, 384, 59, 101, 108, 1643, 8526, 8528, 59, 27278, 59, 27280, 33536, 62, 59, 99, 100, 108, 113, 114, 1518, 8544, 8554, 8558, 8563, 8569, 256, 99, 105, 8549, 8551, 59, 27303, 114, 59, 27258, 111, 116, 59, 25303, 80, 97, 114, 59, 27029, 117, 101, 115, 116, 59, 27260, 640, 97, 100, 101, 108, 115, 8580, 8554, 8592, 1622, 8603, 496, 8585, 0, 8590, 112, 114, 111, 248, 8350, 114, 59, 27000, 113, 256, 108, 113, 1599, 8598, 108, 101, 115, 243, 8328, 105, 237, 1643, 256, 101, 110, 8611, 8621, 114, 116, 110, 101, 113, 113, 59, 49152, 8809, 65024, 197, 8618, 1280, 65, 97, 98, 99, 101, 102, 107, 111, 115, 121, 8644, 8647, 8689, 8693, 8698, 8728, 8733, 8751, 8808, 8829, 114, 242, 928, 512, 105, 108, 109, 114, 8656, 8660, 8663, 8667, 114, 115, 240, 5252, 102, 187, 8228, 105, 108, 244, 1705, 256, 100, 114, 8672, 8676, 99, 121, 59, 17482, 384, 59, 99, 119, 2292, 8683, 8687, 105, 114, 59, 26952, 59, 25005, 97, 114, 59, 24847, 105, 114, 99, 59, 16677, 384, 97, 108, 114, 8705, 8718, 8723, 114, 116, 115, 256, 59, 117, 8713, 8714, 26213, 105, 116, 187, 8714, 108, 105, 112, 59, 24614, 99, 111, 110, 59, 25273, 114, 59, 49152, 55349, 56613, 115, 256, 101, 119, 8739, 8745, 97, 114, 111, 119, 59, 26917, 97, 114, 111, 119, 59, 26918, 640, 97, 109, 111, 112, 114, 8762, 8766, 8771, 8798, 8803, 114, 114, 59, 25087, 116, 104, 116, 59, 25147, 107, 256, 108, 114, 8777, 8787, 101, 102, 116, 97, 114, 114, 111, 119, 59, 25001, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25002, 102, 59, 49152, 55349, 56665, 98, 97, 114, 59, 24597, 384, 99, 108, 116, 8815, 8820, 8824, 114, 59, 49152, 55349, 56509, 97, 115, 232, 8692, 114, 111, 107, 59, 16679, 256, 98, 112, 8834, 8839, 117, 108, 108, 59, 24643, 104, 101, 110, 187, 7259, 2785, 8867, 0, 8874, 0, 8888, 8901, 8910, 0, 8917, 8947, 0, 0, 8952, 8994, 9063, 9058, 9087, 0, 9094, 9130, 9140, 99, 117, 116, 101, 32827, 237, 16621, 384, 59, 105, 121, 1905, 8880, 8885, 114, 99, 32827, 238, 16622, 59, 17464, 256, 99, 120, 8892, 8895, 121, 59, 17461, 99, 108, 32827, 161, 16545, 256, 102, 114, 927, 8905, 59, 49152, 55349, 56614, 114, 97, 118, 101, 32827, 236, 16620, 512, 59, 105, 110, 111, 1854, 8925, 8937, 8942, 256, 105, 110, 8930, 8934, 110, 116, 59, 27148, 116, 59, 25133, 102, 105, 110, 59, 27100, 116, 97, 59, 24873, 108, 105, 103, 59, 16691, 384, 97, 111, 112, 8958, 8986, 8989, 384, 99, 103, 116, 8965, 8968, 8983, 114, 59, 16683, 384, 101, 108, 112, 1823, 8975, 8979, 105, 110, 229, 1934, 97, 114, 244, 1824, 104, 59, 16689, 102, 59, 25271, 101, 100, 59, 16821, 640, 59, 99, 102, 111, 116, 1268, 9004, 9009, 9021, 9025, 97, 114, 101, 59, 24837, 105, 110, 256, 59, 116, 9016, 9017, 25118, 105, 101, 59, 27101, 100, 111, 244, 8985, 640, 59, 99, 101, 108, 112, 1879, 9036, 9040, 9051, 9057, 97, 108, 59, 25274, 256, 103, 114, 9045, 9049, 101, 114, 243, 5475, 227, 9037, 97, 114, 104, 107, 59, 27159, 114, 111, 100, 59, 27196, 512, 99, 103, 112, 116, 9071, 9074, 9078, 9083, 121, 59, 17489, 111, 110, 59, 16687, 102, 59, 49152, 55349, 56666, 97, 59, 17337, 117, 101, 115, 116, 32827, 191, 16575, 256, 99, 105, 9098, 9103, 114, 59, 49152, 55349, 56510, 110, 640, 59, 69, 100, 115, 118, 1268, 9115, 9117, 9121, 1267, 59, 25337, 111, 116, 59, 25333, 256, 59, 118, 9126, 9127, 25332, 59, 25331, 256, 59, 105, 1911, 9134, 108, 100, 101, 59, 16681, 491, 9144, 0, 9148, 99, 121, 59, 17494, 108, 32827, 239, 16623, 768, 99, 102, 109, 111, 115, 117, 9164, 9175, 9180, 9185, 9191, 9205, 256, 105, 121, 9169, 9173, 114, 99, 59, 16693, 59, 17465, 114, 59, 49152, 55349, 56615, 97, 116, 104, 59, 16951, 112, 102, 59, 49152, 55349, 56667, 483, 9196, 0, 9201, 114, 59, 49152, 55349, 56511, 114, 99, 121, 59, 17496, 107, 99, 121, 59, 17492, 1024, 97, 99, 102, 103, 104, 106, 111, 115, 9227, 9238, 9250, 9255, 9261, 9265, 9269, 9275, 112, 112, 97, 256, 59, 118, 9235, 9236, 17338, 59, 17392, 256, 101, 121, 9243, 9248, 100, 105, 108, 59, 16695, 59, 17466, 114, 59, 49152, 55349, 56616, 114, 101, 101, 110, 59, 16696, 99, 121, 59, 17477, 99, 121, 59, 17500, 112, 102, 59, 49152, 55349, 56668, 99, 114, 59, 49152, 55349, 56512, 2944, 65, 66, 69, 72, 97, 98, 99, 100, 101, 102, 103, 104, 106, 108, 109, 110, 111, 112, 114, 115, 116, 117, 118, 9328, 9345, 9350, 9357, 9361, 9486, 9533, 9562, 9600, 9806, 9822, 9829, 9849, 9853, 9882, 9906, 9944, 10077, 10088, 10123, 10176, 10241, 10258, 384, 97, 114, 116, 9335, 9338, 9340, 114, 242, 2502, 242, 917, 97, 105, 108, 59, 26907, 97, 114, 114, 59, 26894, 256, 59, 103, 2452, 9355, 59, 27275, 97, 114, 59, 26978, 2403, 9381, 0, 9386, 0, 9393, 0, 0, 0, 0, 0, 9397, 9402, 0, 9414, 9416, 9421, 0, 9465, 117, 116, 101, 59, 16698, 109, 112, 116, 121, 118, 59, 27060, 114, 97, 238, 2124, 98, 100, 97, 59, 17339, 103, 384, 59, 100, 108, 2190, 9409, 9411, 59, 27025, 229, 2190, 59, 27269, 117, 111, 32827, 171, 16555, 114, 1024, 59, 98, 102, 104, 108, 112, 115, 116, 2201, 9438, 9446, 9449, 9451, 9454, 9457, 9461, 256, 59, 102, 2205, 9443, 115, 59, 26911, 115, 59, 26909, 235, 8786, 112, 59, 25003, 108, 59, 26937, 105, 109, 59, 26995, 108, 59, 24994, 384, 59, 97, 101, 9471, 9472, 9476, 27307, 105, 108, 59, 26905, 256, 59, 115, 9481, 9482, 27309, 59, 49152, 10925, 65024, 384, 97, 98, 114, 9493, 9497, 9501, 114, 114, 59, 26892, 114, 107, 59, 26482, 256, 97, 107, 9506, 9516, 99, 256, 101, 107, 9512, 9514, 59, 16507, 59, 16475, 256, 101, 115, 9521, 9523, 59, 27019, 108, 256, 100, 117, 9529, 9531, 59, 27023, 59, 27021, 512, 97, 101, 117, 121, 9542, 9547, 9558, 9560, 114, 111, 110, 59, 16702, 256, 100, 105, 9552, 9556, 105, 108, 59, 16700, 236, 2224, 226, 9513, 59, 17467, 512, 99, 113, 114, 115, 9571, 9574, 9581, 9597, 97, 59, 26934, 117, 111, 256, 59, 114, 3609, 5958, 256, 100, 117, 9586, 9591, 104, 97, 114, 59, 26983, 115, 104, 97, 114, 59, 26955, 104, 59, 25010, 640, 59, 102, 103, 113, 115, 9611, 9612, 2441, 9715, 9727, 25188, 116, 640, 97, 104, 108, 114, 116, 9624, 9636, 9655, 9666, 9704, 114, 114, 111, 119, 256, 59, 116, 2201, 9633, 97, 233, 9462, 97, 114, 112, 111, 111, 110, 256, 100, 117, 9647, 9652, 111, 119, 110, 187, 1114, 112, 187, 2406, 101, 102, 116, 97, 114, 114, 111, 119, 115, 59, 25031, 105, 103, 104, 116, 384, 97, 104, 115, 9677, 9686, 9694, 114, 114, 111, 119, 256, 59, 115, 2292, 2215, 97, 114, 112, 111, 111, 110, 243, 3992, 113, 117, 105, 103, 97, 114, 114, 111, 247, 8688, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 25291, 384, 59, 113, 115, 9611, 2451, 9722, 108, 97, 110, 244, 2476, 640, 59, 99, 100, 103, 115, 2476, 9738, 9741, 9757, 9768, 99, 59, 27304, 111, 116, 256, 59, 111, 9748, 9749, 27263, 256, 59, 114, 9754, 9755, 27265, 59, 27267, 256, 59, 101, 9762, 9765, 49152, 8922, 65024, 115, 59, 27283, 640, 97, 100, 101, 103, 115, 9779, 9785, 9789, 9801, 9803, 112, 112, 114, 111, 248, 9414, 111, 116, 59, 25302, 113, 256, 103, 113, 9795, 9797, 244, 2441, 103, 116, 242, 9356, 244, 2459, 105, 237, 2482, 384, 105, 108, 114, 9813, 2273, 9818, 115, 104, 116, 59, 27004, 59, 49152, 55349, 56617, 256, 59, 69, 2460, 9827, 59, 27281, 353, 9833, 9846, 114, 256, 100, 117, 9650, 9838, 256, 59, 108, 2405, 9843, 59, 26986, 108, 107, 59, 25988, 99, 121, 59, 17497, 640, 59, 97, 99, 104, 116, 2632, 9864, 9867, 9873, 9878, 114, 242, 9665, 111, 114, 110, 101, 242, 7432, 97, 114, 100, 59, 26987, 114, 105, 59, 26106, 256, 105, 111, 9887, 9892, 100, 111, 116, 59, 16704, 117, 115, 116, 256, 59, 97, 9900, 9901, 25520, 99, 104, 101, 187, 9901, 512, 69, 97, 101, 115, 9915, 9917, 9929, 9940, 59, 25192, 112, 256, 59, 112, 9923, 9924, 27273, 114, 111, 120, 187, 9924, 256, 59, 113, 9934, 9935, 27271, 256, 59, 113, 9934, 9915, 105, 109, 59, 25318, 1024, 97, 98, 110, 111, 112, 116, 119, 122, 9961, 9972, 9975, 10010, 10031, 10049, 10055, 10064, 256, 110, 114, 9966, 9969, 103, 59, 26604, 114, 59, 25085, 114, 235, 2241, 103, 384, 108, 109, 114, 9983, 9997, 10004, 101, 102, 116, 256, 97, 114, 2534, 9991, 105, 103, 104, 116, 225, 2546, 97, 112, 115, 116, 111, 59, 26620, 105, 103, 104, 116, 225, 2557, 112, 97, 114, 114, 111, 119, 256, 108, 114, 10021, 10025, 101, 102, 244, 9453, 105, 103, 104, 116, 59, 25004, 384, 97, 102, 108, 10038, 10041, 10045, 114, 59, 27013, 59, 49152, 55349, 56669, 117, 115, 59, 27181, 105, 109, 101, 115, 59, 27188, 353, 10059, 10063, 115, 116, 59, 25111, 225, 4942, 384, 59, 101, 102, 10071, 10072, 6144, 26058, 110, 103, 101, 187, 10072, 97, 114, 256, 59, 108, 10084, 10085, 16424, 116, 59, 27027, 640, 97, 99, 104, 109, 116, 10099, 10102, 10108, 10117, 10119, 114, 242, 2216, 111, 114, 110, 101, 242, 7564, 97, 114, 256, 59, 100, 3992, 10115, 59, 26989, 59, 24590, 114, 105, 59, 25279, 768, 97, 99, 104, 105, 113, 116, 10136, 10141, 2624, 10146, 10158, 10171, 113, 117, 111, 59, 24633, 114, 59, 49152, 55349, 56513, 109, 384, 59, 101, 103, 2482, 10154, 10156, 59, 27277, 59, 27279, 256, 98, 117, 9514, 10163, 111, 256, 59, 114, 3615, 10169, 59, 24602, 114, 111, 107, 59, 16706, 33792, 60, 59, 99, 100, 104, 105, 108, 113, 114, 2091, 10194, 9785, 10204, 10208, 10213, 10218, 10224, 256, 99, 105, 10199, 10201, 59, 27302, 114, 59, 27257, 114, 101, 229, 9714, 109, 101, 115, 59, 25289, 97, 114, 114, 59, 26998, 117, 101, 115, 116, 59, 27259, 256, 80, 105, 10229, 10233, 97, 114, 59, 27030, 384, 59, 101, 102, 10240, 2349, 6171, 26051, 114, 256, 100, 117, 10247, 10253, 115, 104, 97, 114, 59, 26954, 104, 97, 114, 59, 26982, 256, 101, 110, 10263, 10273, 114, 116, 110, 101, 113, 113, 59, 49152, 8808, 65024, 197, 10270, 1792, 68, 97, 99, 100, 101, 102, 104, 105, 108, 110, 111, 112, 115, 117, 10304, 10309, 10370, 10382, 10387, 10400, 10405, 10408, 10458, 10466, 10468, 2691, 10483, 10498, 68, 111, 116, 59, 25146, 512, 99, 108, 112, 114, 10318, 10322, 10339, 10365, 114, 32827, 175, 16559, 256, 101, 116, 10327, 10329, 59, 26178, 256, 59, 101, 10334, 10335, 26400, 115, 101, 187, 10335, 256, 59, 115, 4155, 10344, 116, 111, 512, 59, 100, 108, 117, 4155, 10355, 10359, 10363, 111, 119, 238, 1164, 101, 102, 244, 2319, 240, 5073, 107, 101, 114, 59, 26030, 256, 111, 121, 10375, 10380, 109, 109, 97, 59, 27177, 59, 17468, 97, 115, 104, 59, 24596, 97, 115, 117, 114, 101, 100, 97, 110, 103, 108, 101, 187, 5670, 114, 59, 49152, 55349, 56618, 111, 59, 24871, 384, 99, 100, 110, 10415, 10420, 10441, 114, 111, 32827, 181, 16565, 512, 59, 97, 99, 100, 5220, 10429, 10432, 10436, 115, 244, 5799, 105, 114, 59, 27376, 111, 116, 32955, 183, 437, 117, 115, 384, 59, 98, 100, 10450, 6403, 10451, 25106, 256, 59, 117, 7484, 10456, 59, 27178, 355, 10462, 10465, 112, 59, 27355, 242, 8722, 240, 2689, 256, 100, 112, 10473, 10478, 101, 108, 115, 59, 25255, 102, 59, 49152, 55349, 56670, 256, 99, 116, 10488, 10493, 114, 59, 49152, 55349, 56514, 112, 111, 115, 187, 5533, 384, 59, 108, 109, 10505, 10506, 10509, 17340, 116, 105, 109, 97, 112, 59, 25272, 3072, 71, 76, 82, 86, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 108, 109, 111, 112, 114, 115, 116, 117, 118, 119, 10562, 10579, 10622, 10633, 10648, 10714, 10729, 10773, 10778, 10840, 10845, 10883, 10901, 10916, 10920, 11012, 11015, 11076, 11135, 11182, 11316, 11367, 11388, 11497, 256, 103, 116, 10567, 10571, 59, 49152, 8921, 824, 256, 59, 118, 10576, 3023, 49152, 8811, 8402, 384, 101, 108, 116, 10586, 10610, 10614, 102, 116, 256, 97, 114, 10593, 10599, 114, 114, 111, 119, 59, 25037, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25038, 59, 49152, 8920, 824, 256, 59, 118, 10619, 3143, 49152, 8810, 8402, 105, 103, 104, 116, 97, 114, 114, 111, 119, 59, 25039, 256, 68, 100, 10638, 10643, 97, 115, 104, 59, 25263, 97, 115, 104, 59, 25262, 640, 98, 99, 110, 112, 116, 10659, 10663, 10668, 10673, 10700, 108, 97, 187, 734, 117, 116, 101, 59, 16708, 103, 59, 49152, 8736, 8402, 640, 59, 69, 105, 111, 112, 3460, 10684, 10688, 10693, 10696, 59, 49152, 10864, 824, 100, 59, 49152, 8779, 824, 115, 59, 16713, 114, 111, 248, 3460, 117, 114, 256, 59, 97, 10707, 10708, 26222, 108, 256, 59, 115, 10707, 2872, 499, 10719, 0, 10723, 112, 32955, 160, 2871, 109, 112, 256, 59, 101, 3065, 3072, 640, 97, 101, 111, 117, 121, 10740, 10750, 10755, 10768, 10771, 496, 10745, 0, 10747, 59, 27203, 111, 110, 59, 16712, 100, 105, 108, 59, 16710, 110, 103, 256, 59, 100, 3454, 10762, 111, 116, 59, 49152, 10861, 824, 112, 59, 27202, 59, 17469, 97, 115, 104, 59, 24595, 896, 59, 65, 97, 100, 113, 115, 120, 2962, 10793, 10797, 10811, 10817, 10821, 10832, 114, 114, 59, 25047, 114, 256, 104, 114, 10803, 10806, 107, 59, 26916, 256, 59, 111, 5106, 5104, 111, 116, 59, 49152, 8784, 824, 117, 105, 246, 2915, 256, 101, 105, 10826, 10830, 97, 114, 59, 26920, 237, 2968, 105, 115, 116, 256, 59, 115, 2976, 2975, 114, 59, 49152, 55349, 56619, 512, 69, 101, 115, 116, 3013, 10854, 10873, 10876, 384, 59, 113, 115, 3004, 10861, 3041, 384, 59, 113, 115, 3004, 3013, 10868, 108, 97, 110, 244, 3042, 105, 237, 3050, 256, 59, 114, 2998, 10881, 187, 2999, 384, 65, 97, 112, 10890, 10893, 10897, 114, 242, 10609, 114, 114, 59, 25006, 97, 114, 59, 27378, 384, 59, 115, 118, 3981, 10908, 3980, 256, 59, 100, 10913, 10914, 25340, 59, 25338, 99, 121, 59, 17498, 896, 65, 69, 97, 100, 101, 115, 116, 10935, 10938, 10942, 10946, 10949, 10998, 11001, 114, 242, 10598, 59, 49152, 8806, 824, 114, 114, 59, 24986, 114, 59, 24613, 512, 59, 102, 113, 115, 3131, 10958, 10979, 10991, 116, 256, 97, 114, 10964, 10969, 114, 114, 111, 247, 10945, 105, 103, 104, 116, 97, 114, 114, 111, 247, 10896, 384, 59, 113, 115, 3131, 10938, 10986, 108, 97, 110, 244, 3157, 256, 59, 115, 3157, 10996, 187, 3126, 105, 237, 3165, 256, 59, 114, 3125, 11006, 105, 256, 59, 101, 3098, 3109, 105, 228, 3472, 256, 112, 116, 11020, 11025, 102, 59, 49152, 55349, 56671, 33152, 172, 59, 105, 110, 11033, 11034, 11062, 16556, 110, 512, 59, 69, 100, 118, 2953, 11044, 11048, 11054, 59, 49152, 8953, 824, 111, 116, 59, 49152, 8949, 824, 481, 2953, 11059, 11061, 59, 25335, 59, 25334, 105, 256, 59, 118, 3256, 11068, 481, 3256, 11073, 11075, 59, 25342, 59, 25341, 384, 97, 111, 114, 11083, 11107, 11113, 114, 512, 59, 97, 115, 116, 2939, 11093, 11098, 11103, 108, 108, 101, 236, 2939, 108, 59, 49152, 11005, 8421, 59, 49152, 8706, 824, 108, 105, 110, 116, 59, 27156, 384, 59, 99, 101, 3218, 11120, 11123, 117, 229, 3237, 256, 59, 99, 3224, 11128, 256, 59, 101, 3218, 11133, 241, 3224, 512, 65, 97, 105, 116, 11144, 11147, 11165, 11175, 114, 242, 10632, 114, 114, 384, 59, 99, 119, 11156, 11157, 11161, 24987, 59, 49152, 10547, 824, 59, 49152, 8605, 824, 103, 104, 116, 97, 114, 114, 111, 119, 187, 11157, 114, 105, 256, 59, 101, 3275, 3286, 896, 99, 104, 105, 109, 112, 113, 117, 11197, 11213, 11225, 11012, 2936, 11236, 11247, 512, 59, 99, 101, 114, 3378, 11206, 3383, 11209, 117, 229, 3397, 59, 49152, 55349, 56515, 111, 114, 116, 621, 11013, 0, 0, 11222, 97, 114, 225, 11094, 109, 256, 59, 101, 3438, 11231, 256, 59, 113, 3444, 3443, 115, 117, 256, 98, 112, 11243, 11245, 229, 3320, 229, 3339, 384, 98, 99, 112, 11254, 11281, 11289, 512, 59, 69, 101, 115, 11263, 11264, 3362, 11268, 25220, 59, 49152, 10949, 824, 101, 116, 256, 59, 101, 3355, 11275, 113, 256, 59, 113, 3363, 11264, 99, 256, 59, 101, 3378, 11287, 241, 3384, 512, 59, 69, 101, 115, 11298, 11299, 3423, 11303, 25221, 59, 49152, 10950, 824, 101, 116, 256, 59, 101, 3416, 11310, 113, 256, 59, 113, 3424, 11299, 512, 103, 105, 108, 114, 11325, 11327, 11333, 11335, 236, 3031, 108, 100, 101, 32827, 241, 16625, 231, 3139, 105, 97, 110, 103, 108, 101, 256, 108, 114, 11346, 11356, 101, 102, 116, 256, 59, 101, 3098, 11354, 241, 3110, 105, 103, 104, 116, 256, 59, 101, 3275, 11365, 241, 3287, 256, 59, 109, 11372, 11373, 17341, 384, 59, 101, 115, 11380, 11381, 11385, 16419, 114, 111, 59, 24854, 112, 59, 24583, 1152, 68, 72, 97, 100, 103, 105, 108, 114, 115, 11407, 11412, 11417, 11422, 11427, 11440, 11446, 11475, 11491, 97, 115, 104, 59, 25261, 97, 114, 114, 59, 26884, 112, 59, 49152, 8781, 8402, 97, 115, 104, 59, 25260, 256, 101, 116, 11432, 11436, 59, 49152, 8805, 8402, 59, 49152, 62, 8402, 110, 102, 105, 110, 59, 27102, 384, 65, 101, 116, 11453, 11457, 11461, 114, 114, 59, 26882, 59, 49152, 8804, 8402, 256, 59, 114, 11466, 11469, 49152, 60, 8402, 105, 101, 59, 49152, 8884, 8402, 256, 65, 116, 11480, 11484, 114, 114, 59, 26883, 114, 105, 101, 59, 49152, 8885, 8402, 105, 109, 59, 49152, 8764, 8402, 384, 65, 97, 110, 11504, 11508, 11522, 114, 114, 59, 25046, 114, 256, 104, 114, 11514, 11517, 107, 59, 26915, 256, 59, 111, 5095, 5093, 101, 97, 114, 59, 26919, 4691, 6805, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11565, 0, 11576, 11592, 11616, 11621, 11634, 11652, 6919, 0, 0, 11661, 11691, 0, 11720, 11726, 0, 11740, 11801, 11819, 11838, 11843, 256, 99, 115, 11569, 6807, 117, 116, 101, 32827, 243, 16627, 256, 105, 121, 11580, 11589, 114, 256, 59, 99, 6814, 11586, 32827, 244, 16628, 59, 17470, 640, 97, 98, 105, 111, 115, 6816, 11602, 11607, 456, 11610, 108, 97, 99, 59, 16721, 118, 59, 27192, 111, 108, 100, 59, 27068, 108, 105, 103, 59, 16723, 256, 99, 114, 11625, 11629, 105, 114, 59, 27071, 59, 49152, 55349, 56620, 879, 11641, 0, 0, 11644, 0, 11650, 110, 59, 17115, 97, 118, 101, 32827, 242, 16626, 59, 27073, 256, 98, 109, 11656, 3572, 97, 114, 59, 27061, 512, 97, 99, 105, 116, 11669, 11672, 11685, 11688, 114, 242, 6784, 256, 105, 114, 11677, 11680, 114, 59, 27070, 111, 115, 115, 59, 27067, 110, 229, 3666, 59, 27072, 384, 97, 101, 105, 11697, 11701, 11705, 99, 114, 59, 16717, 103, 97, 59, 17353, 384, 99, 100, 110, 11712, 11717, 461, 114, 111, 110, 59, 17343, 59, 27062, 112, 102, 59, 49152, 55349, 56672, 384, 97, 101, 108, 11732, 11735, 466, 114, 59, 27063, 114, 112, 59, 27065, 896, 59, 97, 100, 105, 111, 115, 118, 11754, 11755, 11758, 11784, 11789, 11792, 11798, 25128, 114, 242, 6790, 512, 59, 101, 102, 109, 11767, 11768, 11778, 11781, 27229, 114, 256, 59, 111, 11774, 11775, 24884, 102, 187, 11775, 32827, 170, 16554, 32827, 186, 16570, 103, 111, 102, 59, 25270, 114, 59, 27222, 108, 111, 112, 101, 59, 27223, 59, 27227, 384, 99, 108, 111, 11807, 11809, 11815, 242, 11777, 97, 115, 104, 32827, 248, 16632, 108, 59, 25240, 105, 364, 11823, 11828, 100, 101, 32827, 245, 16629, 101, 115, 256, 59, 97, 475, 11834, 115, 59, 27190, 109, 108, 32827, 246, 16630, 98, 97, 114, 59, 25405, 2785, 11870, 0, 11901, 0, 11904, 11933, 0, 11938, 11961, 0, 0, 11979, 3740, 0, 12051, 0, 0, 12075, 12220, 0, 12232, 114, 512, 59, 97, 115, 116, 1027, 11879, 11890, 3717, 33024, 182, 59, 108, 11885, 11886, 16566, 108, 101, 236, 1027, 617, 11896, 0, 0, 11899, 109, 59, 27379, 59, 27389, 121, 59, 17471, 114, 640, 99, 105, 109, 112, 116, 11915, 11919, 11923, 6245, 11927, 110, 116, 59, 16421, 111, 100, 59, 16430, 105, 108, 59, 24624, 101, 110, 107, 59, 24625, 114, 59, 49152, 55349, 56621, 384, 105, 109, 111, 11944, 11952, 11956, 256, 59, 118, 11949, 11950, 17350, 59, 17365, 109, 97, 244, 2678, 110, 101, 59, 26126, 384, 59, 116, 118, 11967, 11968, 11976, 17344, 99, 104, 102, 111, 114, 107, 187, 8189, 59, 17366, 256, 97, 117, 11983, 11999, 110, 256, 99, 107, 11989, 11997, 107, 256, 59, 104, 8692, 11995, 59, 24846, 246, 8692, 115, 1152, 59, 97, 98, 99, 100, 101, 109, 115, 116, 12019, 12020, 6408, 12025, 12029, 12036, 12038, 12042, 12046, 16427, 99, 105, 114, 59, 27171, 105, 114, 59, 27170, 256, 111, 117, 7488, 12034, 59, 27173, 59, 27250, 110, 32955, 177, 3741, 105, 109, 59, 27174, 119, 111, 59, 27175, 384, 105, 112, 117, 12057, 12064, 12069, 110, 116, 105, 110, 116, 59, 27157, 102, 59, 49152, 55349, 56673, 110, 100, 32827, 163, 16547, 1280, 59, 69, 97, 99, 101, 105, 110, 111, 115, 117, 3784, 12095, 12097, 12100, 12103, 12161, 12169, 12178, 12158, 12214, 59, 27315, 112, 59, 27319, 117, 229, 3801, 256, 59, 99, 3790, 12108, 768, 59, 97, 99, 101, 110, 115, 3784, 12121, 12127, 12134, 12136, 12158, 112, 112, 114, 111, 248, 12099, 117, 114, 108, 121, 101, 241, 3801, 241, 3790, 384, 97, 101, 115, 12143, 12150, 12154, 112, 112, 114, 111, 120, 59, 27321, 113, 113, 59, 27317, 105, 109, 59, 25320, 105, 237, 3807, 109, 101, 256, 59, 115, 12168, 3758, 24626, 384, 69, 97, 115, 12152, 12176, 12154, 240, 12149, 384, 100, 102, 112, 3820, 12185, 12207, 384, 97, 108, 115, 12192, 12197, 12202, 108, 97, 114, 59, 25390, 105, 110, 101, 59, 25362, 117, 114, 102, 59, 25363, 256, 59, 116, 3835, 12212, 239, 3835, 114, 101, 108, 59, 25264, 256, 99, 105, 12224, 12229, 114, 59, 49152, 55349, 56517, 59, 17352, 110, 99, 115, 112, 59, 24584, 768, 102, 105, 111, 112, 115, 117, 12250, 8930, 12255, 12261, 12267, 12273, 114, 59, 49152, 55349, 56622, 112, 102, 59, 49152, 55349, 56674, 114, 105, 109, 101, 59, 24663, 99, 114, 59, 49152, 55349, 56518, 384, 97, 101, 111, 12280, 12297, 12307, 116, 256, 101, 105, 12286, 12293, 114, 110, 105, 111, 110, 243, 1712, 110, 116, 59, 27158, 115, 116, 256, 59, 101, 12304, 12305, 16447, 241, 7961, 244, 3860, 2688, 65, 66, 72, 97, 98, 99, 100, 101, 102, 104, 105, 108, 109, 110, 111, 112, 114, 115, 116, 117, 120, 12352, 12369, 12373, 12377, 12512, 12558, 12587, 12615, 12642, 12658, 12686, 12806, 12821, 12836, 12841, 12888, 12910, 12914, 12944, 12976, 12983, 384, 97, 114, 116, 12359, 12362, 12364, 114, 242, 4275, 242, 989, 97, 105, 108, 59, 26908, 97, 114, 242, 7269, 97, 114, 59, 26980, 896, 99, 100, 101, 110, 113, 114, 116, 12392, 12405, 12408, 12415, 12431, 12436, 12492, 256, 101, 117, 12397, 12401, 59, 49152, 8765, 817, 116, 101, 59, 16725, 105, 227, 4462, 109, 112, 116, 121, 118, 59, 27059, 103, 512, 59, 100, 101, 108, 4049, 12425, 12427, 12429, 59, 27026, 59, 27045, 229, 4049, 117, 111, 32827, 187, 16571, 114, 1408, 59, 97, 98, 99, 102, 104, 108, 112, 115, 116, 119, 4060, 12460, 12463, 12471, 12473, 12476, 12478, 12480, 12483, 12487, 12490, 112, 59, 26997, 256, 59, 102, 4064, 12468, 115, 59, 26912, 59, 26931, 115, 59, 26910, 235, 8797, 240, 10030, 108, 59, 26949, 105, 109, 59, 26996, 108, 59, 24995, 59, 24989, 256, 97, 105, 12497, 12501, 105, 108, 59, 26906, 111, 256, 59, 110, 12507, 12508, 25142, 97, 108, 243, 3870, 384, 97, 98, 114, 12519, 12522, 12526, 114, 242, 6117, 114, 107, 59, 26483, 256, 97, 107, 12531, 12541, 99, 256, 101, 107, 12537, 12539, 59, 16509, 59, 16477, 256, 101, 115, 12546, 12548, 59, 27020, 108, 256, 100, 117, 12554, 12556, 59, 27022, 59, 27024, 512, 97, 101, 117, 121, 12567, 12572, 12583, 12585, 114, 111, 110, 59, 16729, 256, 100, 105, 12577, 12581, 105, 108, 59, 16727, 236, 4082, 226, 12538, 59, 17472, 512, 99, 108, 113, 115, 12596, 12599, 12605, 12612, 97, 59, 26935, 100, 104, 97, 114, 59, 26985, 117, 111, 256, 59, 114, 526, 525, 104, 59, 25011, 384, 97, 99, 103, 12622, 12639, 3908, 108, 512, 59, 105, 112, 115, 3960, 12632, 12635, 4252, 110, 229, 4283, 97, 114, 244, 4009, 116, 59, 26029, 384, 105, 108, 114, 12649, 4131, 12654, 115, 104, 116, 59, 27005, 59, 49152, 55349, 56623, 256, 97, 111, 12663, 12678, 114, 256, 100, 117, 12669, 12671, 187, 1147, 256, 59, 108, 4241, 12676, 59, 26988, 256, 59, 118, 12683, 12684, 17345, 59, 17393, 384, 103, 110, 115, 12693, 12793, 12796, 104, 116, 768, 97, 104, 108, 114, 115, 116, 12708, 12720, 12738, 12760, 12772, 12782, 114, 114, 111, 119, 256, 59, 116, 4060, 12717, 97, 233, 12488, 97, 114, 112, 111, 111, 110, 256, 100, 117, 12731, 12735, 111, 119, 238, 12670, 112, 187, 4242, 101, 102, 116, 256, 97, 104, 12746, 12752, 114, 114, 111, 119, 243, 4074, 97, 114, 112, 111, 111, 110, 243, 1361, 105, 103, 104, 116, 97, 114, 114, 111, 119, 115, 59, 25033, 113, 117, 105, 103, 97, 114, 114, 111, 247, 12491, 104, 114, 101, 101, 116, 105, 109, 101, 115, 59, 25292, 103, 59, 17114, 105, 110, 103, 100, 111, 116, 115, 101, 241, 7986, 384, 97, 104, 109, 12813, 12816, 12819, 114, 242, 4074, 97, 242, 1361, 59, 24591, 111, 117, 115, 116, 256, 59, 97, 12830, 12831, 25521, 99, 104, 101, 187, 12831, 109, 105, 100, 59, 27374, 512, 97, 98, 112, 116, 12850, 12861, 12864, 12882, 256, 110, 114, 12855, 12858, 103, 59, 26605, 114, 59, 25086, 114, 235, 4099, 384, 97, 102, 108, 12871, 12874, 12878, 114, 59, 27014, 59, 49152, 55349, 56675, 117, 115, 59, 27182, 105, 109, 101, 115, 59, 27189, 256, 97, 112, 12893, 12903, 114, 256, 59, 103, 12899, 12900, 16425, 116, 59, 27028, 111, 108, 105, 110, 116, 59, 27154, 97, 114, 242, 12771, 512, 97, 99, 104, 113, 12923, 12928, 4284, 12933, 113, 117, 111, 59, 24634, 114, 59, 49152, 55349, 56519, 256, 98, 117, 12539, 12938, 111, 256, 59, 114, 532, 531, 384, 104, 105, 114, 12951, 12955, 12960, 114, 101, 229, 12792, 109, 101, 115, 59, 25290, 105, 512, 59, 101, 102, 108, 12970, 4185, 6177, 12971, 26041, 116, 114, 105, 59, 27086, 108, 117, 104, 97, 114, 59, 26984, 59, 24862, 3425, 13013, 13019, 13023, 13100, 13112, 13169, 0, 13178, 13220, 0, 0, 13292, 13296, 0, 13352, 13384, 13402, 13485, 13489, 13514, 13553, 0, 13846, 0, 0, 13875, 99, 117, 116, 101, 59, 16731, 113, 117, 239, 10170, 1280, 59, 69, 97, 99, 101, 105, 110, 112, 115, 121, 4589, 13043, 13045, 13055, 13058, 13067, 13071, 13087, 13094, 13097, 59, 27316, 496, 13050, 0, 13052, 59, 27320, 111, 110, 59, 16737, 117, 229, 4606, 256, 59, 100, 4595, 13063, 105, 108, 59, 16735, 114, 99, 59, 16733, 384, 69, 97, 115, 13078, 13080, 13083, 59, 27318, 112, 59, 27322, 105, 109, 59, 25321, 111, 108, 105, 110, 116, 59, 27155, 105, 237, 4612, 59, 17473, 111, 116, 384, 59, 98, 101, 13108, 7495, 13109, 25285, 59, 27238, 896, 65, 97, 99, 109, 115, 116, 120, 13126, 13130, 13143, 13147, 13150, 13155, 13165, 114, 114, 59, 25048, 114, 256, 104, 114, 13136, 13138, 235, 8744, 256, 59, 111, 2614, 2612, 116, 32827, 167, 16551, 105, 59, 16443, 119, 97, 114, 59, 26921, 109, 256, 105, 110, 13161, 240, 110, 117, 243, 241, 116, 59, 26422, 114, 256, 59, 111, 13174, 8277, 49152, 55349, 56624, 512, 97, 99, 111, 121, 13186, 13190, 13201, 13216, 114, 112, 59, 26223, 256, 104, 121, 13195, 13199, 99, 121, 59, 17481, 59, 17480, 114, 116, 621, 13209, 0, 0, 13212, 105, 228, 5220, 97, 114, 97, 236, 11887, 32827, 173, 16557, 256, 103, 109, 13224, 13236, 109, 97, 384, 59, 102, 118, 13233, 13234, 13234, 17347, 59, 17346, 1024, 59, 100, 101, 103, 108, 110, 112, 114, 4779, 13253, 13257, 13262, 13270, 13278, 13281, 13286, 111, 116, 59, 27242, 256, 59, 113, 4785, 4784, 256, 59, 69, 13267, 13268, 27294, 59, 27296, 256, 59, 69, 13275, 13276, 27293, 59, 27295, 101, 59, 25158, 108, 117, 115, 59, 27172, 97, 114, 114, 59, 26994, 97, 114, 242, 4413, 512, 97, 101, 105, 116, 13304, 13320, 13327, 13335, 256, 108, 115, 13309, 13316, 108, 115, 101, 116, 109, 233, 13162, 104, 112, 59, 27187, 112, 97, 114, 115, 108, 59, 27108, 256, 100, 108, 5219, 13332, 101, 59, 25379, 256, 59, 101, 13340, 13341, 27306, 256, 59, 115, 13346, 13347, 27308, 59, 49152, 10924, 65024, 384, 102, 108, 112, 13358, 13363, 13378, 116, 99, 121, 59, 17484, 256, 59, 98, 13368, 13369, 16431, 256, 59, 97, 13374, 13375, 27076, 114, 59, 25407, 102, 59, 49152, 55349, 56676, 97, 256, 100, 114, 13389, 1026, 101, 115, 256, 59, 117, 13396, 13397, 26208, 105, 116, 187, 13397, 384, 99, 115, 117, 13408, 13433, 13471, 256, 97, 117, 13413, 13423, 112, 256, 59, 115, 4488, 13419, 59, 49152, 8851, 65024, 112, 256, 59, 115, 4532, 13429, 59, 49152, 8852, 65024, 117, 256, 98, 112, 13439, 13455, 384, 59, 101, 115, 4503, 4508, 13446, 101, 116, 256, 59, 101, 4503, 13453, 241, 4509, 384, 59, 101, 115, 4520, 4525, 13462, 101, 116, 256, 59, 101, 4520, 13469, 241, 4526, 384, 59, 97, 102, 4475, 13478, 1456, 114, 357, 13483, 1457, 187, 4476, 97, 114, 242, 4424, 512, 99, 101, 109, 116, 13497, 13502, 13506, 13509, 114, 59, 49152, 55349, 56520, 116, 109, 238, 241, 105, 236, 13333, 97, 114, 230, 4542, 256, 97, 114, 13518, 13525, 114, 256, 59, 102, 13524, 6079, 26118, 256, 97, 110, 13530, 13549, 105, 103, 104, 116, 256, 101, 112, 13539, 13546, 112, 115, 105, 108, 111, 238, 7904, 104, 233, 11951, 115, 187, 10322, 640, 98, 99, 109, 110, 112, 13563, 13662, 4617, 13707, 13710, 1152, 59, 69, 100, 101, 109, 110, 112, 114, 115, 13582, 13583, 13585, 13589, 13598, 13603, 13612, 13617, 13622, 25218, 59, 27333, 111, 116, 59, 27325, 256, 59, 100, 4570, 13594, 111, 116, 59, 27331, 117, 108, 116, 59, 27329, 256, 69, 101, 13608, 13610, 59, 27339, 59, 25226, 108, 117, 115, 59, 27327, 97, 114, 114, 59, 27001, 384, 101, 105, 117, 13629, 13650, 13653, 116, 384, 59, 101, 110, 13582, 13637, 13643, 113, 256, 59, 113, 4570, 13583, 101, 113, 256, 59, 113, 13611, 13608, 109, 59, 27335, 256, 98, 112, 13658, 13660, 59, 27349, 59, 27347, 99, 768, 59, 97, 99, 101, 110, 115, 4589, 13676, 13682, 13689, 13691, 13094, 112, 112, 114, 111, 248, 13050, 117, 114, 108, 121, 101, 241, 4606, 241, 4595, 384, 97, 101, 115, 13698, 13704, 13083, 112, 112, 114, 111, 248, 13082, 113, 241, 13079, 103, 59, 26218, 1664, 49, 50, 51, 59, 69, 100, 101, 104, 108, 109, 110, 112, 115, 13737, 13740, 13743, 4636, 13746, 13748, 13760, 13769, 13781, 13786, 13791, 13800, 13805, 32827, 185, 16569, 32827, 178, 16562, 32827, 179, 16563, 59, 27334, 256, 111, 115, 13753, 13756, 116, 59, 27326, 117, 98, 59, 27352, 256, 59, 100, 4642, 13765, 111, 116, 59, 27332, 115, 256, 111, 117, 13775, 13778, 108, 59, 26569, 98, 59, 27351, 97, 114, 114, 59, 27003, 117, 108, 116, 59, 27330, 256, 69, 101, 13796, 13798, 59, 27340, 59, 25227, 108, 117, 115, 59, 27328, 384, 101, 105, 117, 13812, 13833, 13836, 116, 384, 59, 101, 110, 4636, 13820, 13826, 113, 256, 59, 113, 4642, 13746, 101, 113, 256, 59, 113, 13799, 13796, 109, 59, 27336, 256, 98, 112, 13841, 13843, 59, 27348, 59, 27350, 384, 65, 97, 110, 13852, 13856, 13869, 114, 114, 59, 25049, 114, 256, 104, 114, 13862, 13864, 235, 8750, 256, 59, 111, 2603, 2601, 119, 97, 114, 59, 26922, 108, 105, 103, 32827, 223, 16607, 3041, 13905, 13917, 13920, 4814, 13939, 13945, 0, 13950, 14018, 0, 0, 0, 0, 0, 14043, 14083, 0, 14089, 14188, 0, 0, 0, 14215, 626, 13910, 0, 0, 13915, 103, 101, 116, 59, 25366, 59, 17348, 114, 235, 3679, 384, 97, 101, 121, 13926, 13931, 13936, 114, 111, 110, 59, 16741, 100, 105, 108, 59, 16739, 59, 17474, 108, 114, 101, 99, 59, 25365, 114, 59, 49152, 55349, 56625, 512, 101, 105, 107, 111, 13958, 13981, 14005, 14012, 498, 13963, 0, 13969, 101, 256, 52, 102, 4740, 4737, 97, 384, 59, 115, 118, 13976, 13977, 13979, 17336, 121, 109, 59, 17361, 256, 99, 110, 13986, 14002, 107, 256, 97, 115, 13992, 13998, 112, 112, 114, 111, 248, 4801, 105, 109, 187, 4780, 115, 240, 4766, 256, 97, 115, 14010, 13998, 240, 4801, 114, 110, 32827, 254, 16638, 492, 799, 14022, 8935, 101, 115, 33152, 215, 59, 98, 100, 14031, 14032, 14040, 16599, 256, 59, 97, 6415, 14037, 114, 59, 27185, 59, 27184, 384, 101, 112, 115, 14049, 14051, 14080, 225, 10829, 512, 59, 98, 99, 102, 1158, 14060, 14064, 14068, 111, 116, 59, 25398, 105, 114, 59, 27377, 256, 59, 111, 14073, 14076, 49152, 55349, 56677, 114, 107, 59, 27354, 225, 13154, 114, 105, 109, 101, 59, 24628, 384, 97, 105, 112, 14095, 14098, 14180, 100, 229, 4680, 896, 97, 100, 101, 109, 112, 115, 116, 14113, 14157, 14144, 14161, 14167, 14172, 14175, 110, 103, 108, 101, 640, 59, 100, 108, 113, 114, 14128, 14129, 14134, 14144, 14146, 26037, 111, 119, 110, 187, 7611, 101, 102, 116, 256, 59, 101, 10240, 14142, 241, 2350, 59, 25180, 105, 103, 104, 116, 256, 59, 101, 12970, 14155, 241, 4186, 111, 116, 59, 26092, 105, 110, 117, 115, 59, 27194, 108, 117, 115, 59, 27193, 98, 59, 27085, 105, 109, 101, 59, 27195, 101, 122, 105, 117, 109, 59, 25570, 384, 99, 104, 116, 14194, 14205, 14209, 256, 114, 121, 14199, 14203, 59, 49152, 55349, 56521, 59, 17478, 99, 121, 59, 17499, 114, 111, 107, 59, 16743, 256, 105, 111, 14219, 14222, 120, 244, 6007, 104, 101, 97, 100, 256, 108, 114, 14231, 14240, 101, 102, 116, 97, 114, 114, 111, 247, 2127, 105, 103, 104, 116, 97, 114, 114, 111, 119, 187, 3933, 2304, 65, 72, 97, 98, 99, 100, 102, 103, 104, 108, 109, 111, 112, 114, 115, 116, 117, 119, 14288, 14291, 14295, 14308, 14320, 14332, 14350, 14364, 14371, 14388, 14417, 14429, 14443, 14505, 14540, 14546, 14570, 14582, 114, 242, 1005, 97, 114, 59, 26979, 256, 99, 114, 14300, 14306, 117, 116, 101, 32827, 250, 16634, 242, 4432, 114, 483, 14314, 0, 14317, 121, 59, 17502, 118, 101, 59, 16749, 256, 105, 121, 14325, 14330, 114, 99, 32827, 251, 16635, 59, 17475, 384, 97, 98, 104, 14339, 14342, 14347, 114, 242, 5037, 108, 97, 99, 59, 16753, 97, 242, 5059, 256, 105, 114, 14355, 14360, 115, 104, 116, 59, 27006, 59, 49152, 55349, 56626, 114, 97, 118, 101, 32827, 249, 16633, 353, 14375, 14385, 114, 256, 108, 114, 14380, 14382, 187, 2391, 187, 4227, 108, 107, 59, 25984, 256, 99, 116, 14393, 14413, 623, 14399, 0, 0, 14410, 114, 110, 256, 59, 101, 14405, 14406, 25372, 114, 187, 14406, 111, 112, 59, 25359, 114, 105, 59, 26104, 256, 97, 108, 14422, 14426, 99, 114, 59, 16747, 32955, 168, 841, 256, 103, 112, 14434, 14438, 111, 110, 59, 16755, 102, 59, 49152, 55349, 56678, 768, 97, 100, 104, 108, 115, 117, 4427, 14456, 14461, 4978, 14481, 14496, 111, 119, 110, 225, 5043, 97, 114, 112, 111, 111, 110, 256, 108, 114, 14472, 14476, 101, 102, 244, 14381, 105, 103, 104, 244, 14383, 105, 384, 59, 104, 108, 14489, 14490, 14492, 17349, 187, 5114, 111, 110, 187, 14490, 112, 97, 114, 114, 111, 119, 115, 59, 25032, 384, 99, 105, 116, 14512, 14532, 14536, 623, 14518, 0, 0, 14529, 114, 110, 256, 59, 101, 14524, 14525, 25373, 114, 187, 14525, 111, 112, 59, 25358, 110, 103, 59, 16751, 114, 105, 59, 26105, 99, 114, 59, 49152, 55349, 56522, 384, 100, 105, 114, 14553, 14557, 14562, 111, 116, 59, 25328, 108, 100, 101, 59, 16745, 105, 256, 59, 102, 14128, 14568, 187, 6163, 256, 97, 109, 14575, 14578, 114, 242, 14504, 108, 32827, 252, 16636, 97, 110, 103, 108, 101, 59, 27047, 1920, 65, 66, 68, 97, 99, 100, 101, 102, 108, 110, 111, 112, 114, 115, 122, 14620, 14623, 14633, 14637, 14773, 14776, 14781, 14815, 14820, 14824, 14835, 14841, 14845, 14849, 14880, 114, 242, 1015, 97, 114, 256, 59, 118, 14630, 14631, 27368, 59, 27369, 97, 115, 232, 993, 256, 110, 114, 14642, 14647, 103, 114, 116, 59, 27036, 896, 101, 107, 110, 112, 114, 115, 116, 13539, 14662, 14667, 14674, 14685, 14692, 14742, 97, 112, 112, 225, 9237, 111, 116, 104, 105, 110, 231, 7830, 384, 104, 105, 114, 13547, 11976, 14681, 111, 112, 244, 12213, 256, 59, 104, 5047, 14690, 239, 12685, 256, 105, 117, 14697, 14701, 103, 109, 225, 13235, 256, 98, 112, 14706, 14724, 115, 101, 116, 110, 101, 113, 256, 59, 113, 14717, 14720, 49152, 8842, 65024, 59, 49152, 10955, 65024, 115, 101, 116, 110, 101, 113, 256, 59, 113, 14735, 14738, 49152, 8843, 65024, 59, 49152, 10956, 65024, 256, 104, 114, 14747, 14751, 101, 116, 225, 13980, 105, 97, 110, 103, 108, 101, 256, 108, 114, 14762, 14767, 101, 102, 116, 187, 2341, 105, 103, 104, 116, 187, 4177, 121, 59, 17458, 97, 115, 104, 187, 4150, 384, 101, 108, 114, 14788, 14802, 14807, 384, 59, 98, 101, 11754, 14795, 14799, 97, 114, 59, 25275, 113, 59, 25178, 108, 105, 112, 59, 25326, 256, 98, 116, 14812, 5224, 97, 242, 5225, 114, 59, 49152, 55349, 56627, 116, 114, 233, 14766, 115, 117, 256, 98, 112, 14831, 14833, 187, 3356, 187, 3417, 112, 102, 59, 49152, 55349, 56679, 114, 111, 240, 3835, 116, 114, 233, 14772, 256, 99, 117, 14854, 14859, 114, 59, 49152, 55349, 56523, 256, 98, 112, 14864, 14872, 110, 256, 69, 101, 14720, 14870, 187, 14718, 110, 256, 69, 101, 14738, 14878, 187, 14736, 105, 103, 122, 97, 103, 59, 27034, 896, 99, 101, 102, 111, 112, 114, 115, 14902, 14907, 14934, 14939, 14932, 14945, 14954, 105, 114, 99, 59, 16757, 256, 100, 105, 14912, 14929, 256, 98, 103, 14917, 14921, 97, 114, 59, 27231, 101, 256, 59, 113, 5626, 14927, 59, 25177, 101, 114, 112, 59, 24856, 114, 59, 49152, 55349, 56628, 112, 102, 59, 49152, 55349, 56680, 256, 59, 101, 5241, 14950, 97, 116, 232, 5241, 99, 114, 59, 49152, 55349, 56524, 2787, 6030, 14983, 0, 14987, 0, 14992, 15003, 0, 0, 15005, 15016, 15019, 15023, 0, 0, 15043, 15054, 0, 15064, 6108, 6111, 116, 114, 233, 6097, 114, 59, 49152, 55349, 56629, 256, 65, 97, 14996, 14999, 114, 242, 963, 114, 242, 2550, 59, 17342, 256, 65, 97, 15009, 15012, 114, 242, 952, 114, 242, 2539, 97, 240, 10003, 105, 115, 59, 25339, 384, 100, 112, 116, 6052, 15029, 15038, 256, 102, 108, 15034, 6057, 59, 49152, 55349, 56681, 105, 109, 229, 6066, 256, 65, 97, 15047, 15050, 114, 242, 974, 114, 242, 2561, 256, 99, 113, 15058, 6072, 114, 59, 49152, 55349, 56525, 256, 112, 116, 6102, 15068, 114, 233, 6100, 1024, 97, 99, 101, 102, 105, 111, 115, 117, 15088, 15101, 15112, 15116, 15121, 15125, 15131, 15137, 99, 256, 117, 121, 15094, 15099, 116, 101, 32827, 253, 16637, 59, 17487, 256, 105, 121, 15106, 15110, 114, 99, 59, 16759, 59, 17483, 110, 32827, 165, 16549, 114, 59, 49152, 55349, 56630, 99, 121, 59, 17495, 112, 102, 59, 49152, 55349, 56682, 99, 114, 59, 49152, 55349, 56526, 256, 99, 109, 15142, 15145, 121, 59, 17486, 108, 32827, 255, 16639, 1280, 97, 99, 100, 101, 102, 104, 105, 111, 115, 119, 15170, 15176, 15188, 15192, 15204, 15209, 15213, 15220, 15226, 15232, 99, 117, 116, 101, 59, 16762, 256, 97, 121, 15181, 15186, 114, 111, 110, 59, 16766, 59, 17463, 111, 116, 59, 16764, 256, 101, 116, 15197, 15201, 116, 114, 230, 5471, 97, 59, 17334, 114, 59, 49152, 55349, 56631, 99, 121, 59, 17462, 103, 114, 97, 114, 114, 59, 25053, 112, 102, 59, 49152, 55349, 56683, 99, 114, 59, 49152, 55349, 56527, 256, 106, 110, 15237, 15239, 59, 24589, 106, 59, 24588]);

var decodeDataXml = {};

Object.defineProperty(decodeDataXml, "__esModule", { value: true });
// Generated using scripts/write-decode-map.ts
// prettier-ignore
decodeDataXml.default = new Uint16Array([512, 97, 103, 108, 113, 9, 21, 24, 27, 621, 15, 0, 0, 18, 112, 59, 16422, 111, 115, 59, 16423, 116, 59, 16446, 116, 59, 16444, 117, 111, 116, 59, 16418]);

var decode_codepoint = {};

(function (exports) {
	// Adapted from https://github.com/mathiasbynens/he/blob/36afe179392226cf1b6ccdb16ebbb7a5a844d93a/src/he.js#L106-L134
	var _a;
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.replaceCodePoint = exports.fromCodePoint = void 0;
	var decodeMap = new Map([
	    [0, 65533],
	    [128, 8364],
	    [130, 8218],
	    [131, 402],
	    [132, 8222],
	    [133, 8230],
	    [134, 8224],
	    [135, 8225],
	    [136, 710],
	    [137, 8240],
	    [138, 352],
	    [139, 8249],
	    [140, 338],
	    [142, 381],
	    [145, 8216],
	    [146, 8217],
	    [147, 8220],
	    [148, 8221],
	    [149, 8226],
	    [150, 8211],
	    [151, 8212],
	    [152, 732],
	    [153, 8482],
	    [154, 353],
	    [155, 8250],
	    [156, 339],
	    [158, 382],
	    [159, 376],
	]);
	exports.fromCodePoint = 
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
	(_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function (codePoint) {
	    var output = "";
	    if (codePoint > 0xffff) {
	        codePoint -= 0x10000;
	        output += String.fromCharCode(((codePoint >>> 10) & 0x3ff) | 0xd800);
	        codePoint = 0xdc00 | (codePoint & 0x3ff);
	    }
	    output += String.fromCharCode(codePoint);
	    return output;
	};
	function replaceCodePoint(codePoint) {
	    var _a;
	    if ((codePoint >= 0xd800 && codePoint <= 0xdfff) || codePoint > 0x10ffff) {
	        return 0xfffd;
	    }
	    return (_a = decodeMap.get(codePoint)) !== null && _a !== void 0 ? _a : codePoint;
	}
	exports.replaceCodePoint = replaceCodePoint;
	function decodeCodePoint(codePoint) {
	    return (0, exports.fromCodePoint)(replaceCodePoint(codePoint));
	}
	exports.default = decodeCodePoint;
	
} (decode_codepoint));

(function (exports) {
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.decodeXML = exports.decodeHTMLStrict = exports.decodeHTML = exports.determineBranch = exports.BinTrieFlags = exports.fromCodePoint = exports.replaceCodePoint = exports.decodeCodePoint = exports.xmlDecodeTree = exports.htmlDecodeTree = void 0;
	var decode_data_html_js_1 = __importDefault(decodeDataHtml);
	exports.htmlDecodeTree = decode_data_html_js_1.default;
	var decode_data_xml_js_1 = __importDefault(decodeDataXml);
	exports.xmlDecodeTree = decode_data_xml_js_1.default;
	var decode_codepoint_js_1 = __importDefault(decode_codepoint);
	exports.decodeCodePoint = decode_codepoint_js_1.default;
	var decode_codepoint_js_2 = decode_codepoint;
	Object.defineProperty(exports, "replaceCodePoint", { enumerable: true, get: function () { return decode_codepoint_js_2.replaceCodePoint; } });
	Object.defineProperty(exports, "fromCodePoint", { enumerable: true, get: function () { return decode_codepoint_js_2.fromCodePoint; } });
	var CharCodes;
	(function (CharCodes) {
	    CharCodes[CharCodes["NUM"] = 35] = "NUM";
	    CharCodes[CharCodes["SEMI"] = 59] = "SEMI";
	    CharCodes[CharCodes["ZERO"] = 48] = "ZERO";
	    CharCodes[CharCodes["NINE"] = 57] = "NINE";
	    CharCodes[CharCodes["LOWER_A"] = 97] = "LOWER_A";
	    CharCodes[CharCodes["LOWER_F"] = 102] = "LOWER_F";
	    CharCodes[CharCodes["LOWER_X"] = 120] = "LOWER_X";
	    /** Bit that needs to be set to convert an upper case ASCII character to lower case */
	    CharCodes[CharCodes["To_LOWER_BIT"] = 32] = "To_LOWER_BIT";
	})(CharCodes || (CharCodes = {}));
	var BinTrieFlags;
	(function (BinTrieFlags) {
	    BinTrieFlags[BinTrieFlags["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
	    BinTrieFlags[BinTrieFlags["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
	    BinTrieFlags[BinTrieFlags["JUMP_TABLE"] = 127] = "JUMP_TABLE";
	})(BinTrieFlags = exports.BinTrieFlags || (exports.BinTrieFlags = {}));
	function getDecoder(decodeTree) {
	    return function decodeHTMLBinary(str, strict) {
	        var ret = "";
	        var lastIdx = 0;
	        var strIdx = 0;
	        while ((strIdx = str.indexOf("&", strIdx)) >= 0) {
	            ret += str.slice(lastIdx, strIdx);
	            lastIdx = strIdx;
	            // Skip the "&"
	            strIdx += 1;
	            // If we have a numeric entity, handle this separately.
	            if (str.charCodeAt(strIdx) === CharCodes.NUM) {
	                // Skip the leading "&#". For hex entities, also skip the leading "x".
	                var start = strIdx + 1;
	                var base = 10;
	                var cp = str.charCodeAt(start);
	                if ((cp | CharCodes.To_LOWER_BIT) === CharCodes.LOWER_X) {
	                    base = 16;
	                    strIdx += 1;
	                    start += 1;
	                }
	                do
	                    cp = str.charCodeAt(++strIdx);
	                while ((cp >= CharCodes.ZERO && cp <= CharCodes.NINE) ||
	                    (base === 16 &&
	                        (cp | CharCodes.To_LOWER_BIT) >= CharCodes.LOWER_A &&
	                        (cp | CharCodes.To_LOWER_BIT) <= CharCodes.LOWER_F));
	                if (start !== strIdx) {
	                    var entity = str.substring(start, strIdx);
	                    var parsed = parseInt(entity, base);
	                    if (str.charCodeAt(strIdx) === CharCodes.SEMI) {
	                        strIdx += 1;
	                    }
	                    else if (strict) {
	                        continue;
	                    }
	                    ret += (0, decode_codepoint_js_1.default)(parsed);
	                    lastIdx = strIdx;
	                }
	                continue;
	            }
	            var resultIdx = 0;
	            var excess = 1;
	            var treeIdx = 0;
	            var current = decodeTree[treeIdx];
	            for (; strIdx < str.length; strIdx++, excess++) {
	                treeIdx = determineBranch(decodeTree, current, treeIdx + 1, str.charCodeAt(strIdx));
	                if (treeIdx < 0)
	                    break;
	                current = decodeTree[treeIdx];
	                var masked = current & BinTrieFlags.VALUE_LENGTH;
	                // If the branch is a value, store it and continue
	                if (masked) {
	                    // If we have a legacy entity while parsing strictly, just skip the number of bytes
	                    if (!strict || str.charCodeAt(strIdx) === CharCodes.SEMI) {
	                        resultIdx = treeIdx;
	                        excess = 0;
	                    }
	                    // The mask is the number of bytes of the value, including the current byte.
	                    var valueLength = (masked >> 14) - 1;
	                    if (valueLength === 0)
	                        break;
	                    treeIdx += valueLength;
	                }
	            }
	            if (resultIdx !== 0) {
	                var valueLength = (decodeTree[resultIdx] & BinTrieFlags.VALUE_LENGTH) >> 14;
	                ret +=
	                    valueLength === 1
	                        ? String.fromCharCode(decodeTree[resultIdx] & ~BinTrieFlags.VALUE_LENGTH)
	                        : valueLength === 2
	                            ? String.fromCharCode(decodeTree[resultIdx + 1])
	                            : String.fromCharCode(decodeTree[resultIdx + 1], decodeTree[resultIdx + 2]);
	                lastIdx = strIdx - excess + 1;
	            }
	        }
	        return ret + str.slice(lastIdx);
	    };
	}
	function determineBranch(decodeTree, current, nodeIdx, char) {
	    var branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
	    var jumpOffset = current & BinTrieFlags.JUMP_TABLE;
	    // Case 1: Single branch encoded in jump offset
	    if (branchCount === 0) {
	        return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
	    }
	    // Case 2: Multiple branches encoded in jump table
	    if (jumpOffset) {
	        var value = char - jumpOffset;
	        return value < 0 || value > branchCount
	            ? -1
	            : decodeTree[nodeIdx + value] - 1;
	    }
	    // Case 3: Multiple branches encoded in dictionary
	    // Binary search for the character.
	    var lo = nodeIdx;
	    var hi = lo + branchCount - 1;
	    while (lo <= hi) {
	        var mid = (lo + hi) >>> 1;
	        var midVal = decodeTree[mid];
	        if (midVal < char) {
	            lo = mid + 1;
	        }
	        else if (midVal > char) {
	            hi = mid - 1;
	        }
	        else {
	            return decodeTree[mid + branchCount];
	        }
	    }
	    return -1;
	}
	exports.determineBranch = determineBranch;
	var htmlDecoder = getDecoder(decode_data_html_js_1.default);
	var xmlDecoder = getDecoder(decode_data_xml_js_1.default);
	function decodeHTML(str) {
	    return htmlDecoder(str, false);
	}
	exports.decodeHTML = decodeHTML;
	function decodeHTMLStrict(str) {
	    return htmlDecoder(str, true);
	}
	exports.decodeHTMLStrict = decodeHTMLStrict;
	function decodeXML(str) {
	    return xmlDecoder(str, true);
	}
	exports.decodeXML = decodeXML;
	
} (decode));

var encode = {};

var encodeHtml = {};

// Generated using scripts/write-encode-map.ts
Object.defineProperty(encodeHtml, "__esModule", { value: true });
// prettier-ignore
encodeHtml.default = new Map([[9, "&Tab;"], [10, "&NewLine;"], [33, "&excl;"], [34, "&quot;"], [35, "&num;"], [36, "&dollar;"], [37, "&percnt;"], [38, "&amp;"], [39, "&apos;"], [40, "&lpar;"], [41, "&rpar;"], [42, "&ast;"], [43, "&plus;"], [44, "&comma;"], [46, "&period;"], [47, "&sol;"], [58, "&colon;"], [59, "&semi;"], [60, { v: "&lt;", n: 8402, o: "&nvlt;" }], [61, { v: "&equals;", n: 8421, o: "&bne;" }], [62, { v: "&gt;", n: 8402, o: "&nvgt;" }], [63, "&quest;"], [64, "&commat;"], [91, "&lbrack;"], [92, "&bsol;"], [93, "&rbrack;"], [94, "&Hat;"], [95, "&lowbar;"], [96, "&DiacriticalGrave;"], [102, { n: 106, o: "&fjlig;" }], [123, "&lbrace;"], [124, "&verbar;"], [125, "&rbrace;"], [160, "&nbsp;"], [161, "&iexcl;"], [162, "&cent;"], [163, "&pound;"], [164, "&curren;"], [165, "&yen;"], [166, "&brvbar;"], [167, "&sect;"], [168, "&die;"], [169, "&copy;"], [170, "&ordf;"], [171, "&laquo;"], [172, "&not;"], [173, "&shy;"], [174, "&circledR;"], [175, "&macr;"], [176, "&deg;"], [177, "&PlusMinus;"], [178, "&sup2;"], [179, "&sup3;"], [180, "&acute;"], [181, "&micro;"], [182, "&para;"], [183, "&centerdot;"], [184, "&cedil;"], [185, "&sup1;"], [186, "&ordm;"], [187, "&raquo;"], [188, "&frac14;"], [189, "&frac12;"], [190, "&frac34;"], [191, "&iquest;"], [192, "&Agrave;"], [193, "&Aacute;"], [194, "&Acirc;"], [195, "&Atilde;"], [196, "&Auml;"], [197, "&angst;"], [198, "&AElig;"], [199, "&Ccedil;"], [200, "&Egrave;"], [201, "&Eacute;"], [202, "&Ecirc;"], [203, "&Euml;"], [204, "&Igrave;"], [205, "&Iacute;"], [206, "&Icirc;"], [207, "&Iuml;"], [208, "&ETH;"], [209, "&Ntilde;"], [210, "&Ograve;"], [211, "&Oacute;"], [212, "&Ocirc;"], [213, "&Otilde;"], [214, "&Ouml;"], [215, "&times;"], [216, "&Oslash;"], [217, "&Ugrave;"], [218, "&Uacute;"], [219, "&Ucirc;"], [220, "&Uuml;"], [221, "&Yacute;"], [222, "&THORN;"], [223, "&szlig;"], [224, "&agrave;"], [225, "&aacute;"], [226, "&acirc;"], [227, "&atilde;"], [228, "&auml;"], [229, "&aring;"], [230, "&aelig;"], [231, "&ccedil;"], [232, "&egrave;"], [233, "&eacute;"], [234, "&ecirc;"], [235, "&euml;"], [236, "&igrave;"], [237, "&iacute;"], [238, "&icirc;"], [239, "&iuml;"], [240, "&eth;"], [241, "&ntilde;"], [242, "&ograve;"], [243, "&oacute;"], [244, "&ocirc;"], [245, "&otilde;"], [246, "&ouml;"], [247, "&div;"], [248, "&oslash;"], [249, "&ugrave;"], [250, "&uacute;"], [251, "&ucirc;"], [252, "&uuml;"], [253, "&yacute;"], [254, "&thorn;"], [255, "&yuml;"], [256, "&Amacr;"], [257, "&amacr;"], [258, "&Abreve;"], [259, "&abreve;"], [260, "&Aogon;"], [261, "&aogon;"], [262, "&Cacute;"], [263, "&cacute;"], [264, "&Ccirc;"], [265, "&ccirc;"], [266, "&Cdot;"], [267, "&cdot;"], [268, "&Ccaron;"], [269, "&ccaron;"], [270, "&Dcaron;"], [271, "&dcaron;"], [272, "&Dstrok;"], [273, "&dstrok;"], [274, "&Emacr;"], [275, "&emacr;"], [278, "&Edot;"], [279, "&edot;"], [280, "&Eogon;"], [281, "&eogon;"], [282, "&Ecaron;"], [283, "&ecaron;"], [284, "&Gcirc;"], [285, "&gcirc;"], [286, "&Gbreve;"], [287, "&gbreve;"], [288, "&Gdot;"], [289, "&gdot;"], [290, "&Gcedil;"], [292, "&Hcirc;"], [293, "&hcirc;"], [294, "&Hstrok;"], [295, "&hstrok;"], [296, "&Itilde;"], [297, "&itilde;"], [298, "&Imacr;"], [299, "&imacr;"], [302, "&Iogon;"], [303, "&iogon;"], [304, "&Idot;"], [305, "&imath;"], [306, "&IJlig;"], [307, "&ijlig;"], [308, "&Jcirc;"], [309, "&jcirc;"], [310, "&Kcedil;"], [311, "&kcedil;"], [312, "&kgreen;"], [313, "&Lacute;"], [314, "&lacute;"], [315, "&Lcedil;"], [316, "&lcedil;"], [317, "&Lcaron;"], [318, "&lcaron;"], [319, "&Lmidot;"], [320, "&lmidot;"], [321, "&Lstrok;"], [322, "&lstrok;"], [323, "&Nacute;"], [324, "&nacute;"], [325, "&Ncedil;"], [326, "&ncedil;"], [327, "&Ncaron;"], [328, "&ncaron;"], [329, "&napos;"], [330, "&ENG;"], [331, "&eng;"], [332, "&Omacr;"], [333, "&omacr;"], [336, "&Odblac;"], [337, "&odblac;"], [338, "&OElig;"], [339, "&oelig;"], [340, "&Racute;"], [341, "&racute;"], [342, "&Rcedil;"], [343, "&rcedil;"], [344, "&Rcaron;"], [345, "&rcaron;"], [346, "&Sacute;"], [347, "&sacute;"], [348, "&Scirc;"], [349, "&scirc;"], [350, "&Scedil;"], [351, "&scedil;"], [352, "&Scaron;"], [353, "&scaron;"], [354, "&Tcedil;"], [355, "&tcedil;"], [356, "&Tcaron;"], [357, "&tcaron;"], [358, "&Tstrok;"], [359, "&tstrok;"], [360, "&Utilde;"], [361, "&utilde;"], [362, "&Umacr;"], [363, "&umacr;"], [364, "&Ubreve;"], [365, "&ubreve;"], [366, "&Uring;"], [367, "&uring;"], [368, "&Udblac;"], [369, "&udblac;"], [370, "&Uogon;"], [371, "&uogon;"], [372, "&Wcirc;"], [373, "&wcirc;"], [374, "&Ycirc;"], [375, "&ycirc;"], [376, "&Yuml;"], [377, "&Zacute;"], [378, "&zacute;"], [379, "&Zdot;"], [380, "&zdot;"], [381, "&Zcaron;"], [382, "&zcaron;"], [402, "&fnof;"], [437, "&imped;"], [501, "&gacute;"], [567, "&jmath;"], [710, "&circ;"], [711, "&caron;"], [728, "&breve;"], [729, "&DiacriticalDot;"], [730, "&ring;"], [731, "&ogon;"], [732, "&DiacriticalTilde;"], [733, "&dblac;"], [785, "&DownBreve;"], [913, "&Alpha;"], [914, "&Beta;"], [915, "&Gamma;"], [916, "&Delta;"], [917, "&Epsilon;"], [918, "&Zeta;"], [919, "&Eta;"], [920, "&Theta;"], [921, "&Iota;"], [922, "&Kappa;"], [923, "&Lambda;"], [924, "&Mu;"], [925, "&Nu;"], [926, "&Xi;"], [927, "&Omicron;"], [928, "&Pi;"], [929, "&Rho;"], [931, "&Sigma;"], [932, "&Tau;"], [933, "&Upsilon;"], [934, "&Phi;"], [935, "&Chi;"], [936, "&Psi;"], [937, "&ohm;"], [945, "&alpha;"], [946, "&beta;"], [947, "&gamma;"], [948, "&delta;"], [949, "&epsi;"], [950, "&zeta;"], [951, "&eta;"], [952, "&theta;"], [953, "&iota;"], [954, "&kappa;"], [955, "&lambda;"], [956, "&mu;"], [957, "&nu;"], [958, "&xi;"], [959, "&omicron;"], [960, "&pi;"], [961, "&rho;"], [962, "&sigmaf;"], [963, "&sigma;"], [964, "&tau;"], [965, "&upsi;"], [966, "&phi;"], [967, "&chi;"], [968, "&psi;"], [969, "&omega;"], [977, "&thetasym;"], [978, "&Upsi;"], [981, "&phiv;"], [982, "&piv;"], [988, "&Gammad;"], [989, "&digamma;"], [1008, "&kappav;"], [1009, "&rhov;"], [1013, "&epsiv;"], [1014, "&backepsilon;"], [1025, "&IOcy;"], [1026, "&DJcy;"], [1027, "&GJcy;"], [1028, "&Jukcy;"], [1029, "&DScy;"], [1030, "&Iukcy;"], [1031, "&YIcy;"], [1032, "&Jsercy;"], [1033, "&LJcy;"], [1034, "&NJcy;"], [1035, "&TSHcy;"], [1036, "&KJcy;"], [1038, "&Ubrcy;"], [1039, "&DZcy;"], [1040, "&Acy;"], [1041, "&Bcy;"], [1042, "&Vcy;"], [1043, "&Gcy;"], [1044, "&Dcy;"], [1045, "&IEcy;"], [1046, "&ZHcy;"], [1047, "&Zcy;"], [1048, "&Icy;"], [1049, "&Jcy;"], [1050, "&Kcy;"], [1051, "&Lcy;"], [1052, "&Mcy;"], [1053, "&Ncy;"], [1054, "&Ocy;"], [1055, "&Pcy;"], [1056, "&Rcy;"], [1057, "&Scy;"], [1058, "&Tcy;"], [1059, "&Ucy;"], [1060, "&Fcy;"], [1061, "&KHcy;"], [1062, "&TScy;"], [1063, "&CHcy;"], [1064, "&SHcy;"], [1065, "&SHCHcy;"], [1066, "&HARDcy;"], [1067, "&Ycy;"], [1068, "&SOFTcy;"], [1069, "&Ecy;"], [1070, "&YUcy;"], [1071, "&YAcy;"], [1072, "&acy;"], [1073, "&bcy;"], [1074, "&vcy;"], [1075, "&gcy;"], [1076, "&dcy;"], [1077, "&iecy;"], [1078, "&zhcy;"], [1079, "&zcy;"], [1080, "&icy;"], [1081, "&jcy;"], [1082, "&kcy;"], [1083, "&lcy;"], [1084, "&mcy;"], [1085, "&ncy;"], [1086, "&ocy;"], [1087, "&pcy;"], [1088, "&rcy;"], [1089, "&scy;"], [1090, "&tcy;"], [1091, "&ucy;"], [1092, "&fcy;"], [1093, "&khcy;"], [1094, "&tscy;"], [1095, "&chcy;"], [1096, "&shcy;"], [1097, "&shchcy;"], [1098, "&hardcy;"], [1099, "&ycy;"], [1100, "&softcy;"], [1101, "&ecy;"], [1102, "&yucy;"], [1103, "&yacy;"], [1105, "&iocy;"], [1106, "&djcy;"], [1107, "&gjcy;"], [1108, "&jukcy;"], [1109, "&dscy;"], [1110, "&iukcy;"], [1111, "&yicy;"], [1112, "&jsercy;"], [1113, "&ljcy;"], [1114, "&njcy;"], [1115, "&tshcy;"], [1116, "&kjcy;"], [1118, "&ubrcy;"], [1119, "&dzcy;"], [8194, "&ensp;"], [8195, "&emsp;"], [8196, "&emsp13;"], [8197, "&emsp14;"], [8199, "&numsp;"], [8200, "&puncsp;"], [8201, "&ThinSpace;"], [8202, "&hairsp;"], [8203, "&NegativeMediumSpace;"], [8204, "&zwnj;"], [8205, "&zwj;"], [8206, "&lrm;"], [8207, "&rlm;"], [8208, "&dash;"], [8211, "&ndash;"], [8212, "&mdash;"], [8213, "&horbar;"], [8214, "&Verbar;"], [8216, "&lsquo;"], [8217, "&CloseCurlyQuote;"], [8218, "&lsquor;"], [8220, "&ldquo;"], [8221, "&CloseCurlyDoubleQuote;"], [8222, "&bdquo;"], [8224, "&dagger;"], [8225, "&Dagger;"], [8226, "&bull;"], [8229, "&nldr;"], [8230, "&hellip;"], [8240, "&permil;"], [8241, "&pertenk;"], [8242, "&prime;"], [8243, "&Prime;"], [8244, "&tprime;"], [8245, "&backprime;"], [8249, "&lsaquo;"], [8250, "&rsaquo;"], [8254, "&oline;"], [8257, "&caret;"], [8259, "&hybull;"], [8260, "&frasl;"], [8271, "&bsemi;"], [8279, "&qprime;"], [8287, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [8288, "&NoBreak;"], [8289, "&af;"], [8290, "&InvisibleTimes;"], [8291, "&ic;"], [8364, "&euro;"], [8411, "&tdot;"], [8412, "&DotDot;"], [8450, "&complexes;"], [8453, "&incare;"], [8458, "&gscr;"], [8459, "&hamilt;"], [8460, "&Hfr;"], [8461, "&Hopf;"], [8462, "&planckh;"], [8463, "&hbar;"], [8464, "&imagline;"], [8465, "&Ifr;"], [8466, "&lagran;"], [8467, "&ell;"], [8469, "&naturals;"], [8470, "&numero;"], [8471, "&copysr;"], [8472, "&weierp;"], [8473, "&Popf;"], [8474, "&Qopf;"], [8475, "&realine;"], [8476, "&real;"], [8477, "&reals;"], [8478, "&rx;"], [8482, "&trade;"], [8484, "&integers;"], [8487, "&mho;"], [8488, "&zeetrf;"], [8489, "&iiota;"], [8492, "&bernou;"], [8493, "&Cayleys;"], [8495, "&escr;"], [8496, "&Escr;"], [8497, "&Fouriertrf;"], [8499, "&Mellintrf;"], [8500, "&order;"], [8501, "&alefsym;"], [8502, "&beth;"], [8503, "&gimel;"], [8504, "&daleth;"], [8517, "&CapitalDifferentialD;"], [8518, "&dd;"], [8519, "&ee;"], [8520, "&ii;"], [8531, "&frac13;"], [8532, "&frac23;"], [8533, "&frac15;"], [8534, "&frac25;"], [8535, "&frac35;"], [8536, "&frac45;"], [8537, "&frac16;"], [8538, "&frac56;"], [8539, "&frac18;"], [8540, "&frac38;"], [8541, "&frac58;"], [8542, "&frac78;"], [8592, "&larr;"], [8593, "&ShortUpArrow;"], [8594, "&rarr;"], [8595, "&darr;"], [8596, "&harr;"], [8597, "&updownarrow;"], [8598, "&nwarr;"], [8599, "&nearr;"], [8600, "&LowerRightArrow;"], [8601, "&LowerLeftArrow;"], [8602, "&nlarr;"], [8603, "&nrarr;"], [8605, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [8606, "&Larr;"], [8607, "&Uarr;"], [8608, "&Rarr;"], [8609, "&Darr;"], [8610, "&larrtl;"], [8611, "&rarrtl;"], [8612, "&LeftTeeArrow;"], [8613, "&mapstoup;"], [8614, "&map;"], [8615, "&DownTeeArrow;"], [8617, "&hookleftarrow;"], [8618, "&hookrightarrow;"], [8619, "&larrlp;"], [8620, "&looparrowright;"], [8621, "&harrw;"], [8622, "&nharr;"], [8624, "&lsh;"], [8625, "&rsh;"], [8626, "&ldsh;"], [8627, "&rdsh;"], [8629, "&crarr;"], [8630, "&cularr;"], [8631, "&curarr;"], [8634, "&circlearrowleft;"], [8635, "&circlearrowright;"], [8636, "&leftharpoonup;"], [8637, "&DownLeftVector;"], [8638, "&RightUpVector;"], [8639, "&LeftUpVector;"], [8640, "&rharu;"], [8641, "&DownRightVector;"], [8642, "&dharr;"], [8643, "&dharl;"], [8644, "&RightArrowLeftArrow;"], [8645, "&udarr;"], [8646, "&LeftArrowRightArrow;"], [8647, "&leftleftarrows;"], [8648, "&upuparrows;"], [8649, "&rightrightarrows;"], [8650, "&ddarr;"], [8651, "&leftrightharpoons;"], [8652, "&Equilibrium;"], [8653, "&nlArr;"], [8654, "&nhArr;"], [8655, "&nrArr;"], [8656, "&DoubleLeftArrow;"], [8657, "&DoubleUpArrow;"], [8658, "&DoubleRightArrow;"], [8659, "&dArr;"], [8660, "&DoubleLeftRightArrow;"], [8661, "&DoubleUpDownArrow;"], [8662, "&nwArr;"], [8663, "&neArr;"], [8664, "&seArr;"], [8665, "&swArr;"], [8666, "&lAarr;"], [8667, "&rAarr;"], [8669, "&zigrarr;"], [8676, "&larrb;"], [8677, "&rarrb;"], [8693, "&DownArrowUpArrow;"], [8701, "&loarr;"], [8702, "&roarr;"], [8703, "&hoarr;"], [8704, "&forall;"], [8705, "&comp;"], [8706, { v: "&part;", n: 824, o: "&npart;" }], [8707, "&exist;"], [8708, "&nexist;"], [8709, "&empty;"], [8711, "&Del;"], [8712, "&Element;"], [8713, "&NotElement;"], [8715, "&ni;"], [8716, "&notni;"], [8719, "&prod;"], [8720, "&coprod;"], [8721, "&sum;"], [8722, "&minus;"], [8723, "&MinusPlus;"], [8724, "&dotplus;"], [8726, "&Backslash;"], [8727, "&lowast;"], [8728, "&compfn;"], [8730, "&radic;"], [8733, "&prop;"], [8734, "&infin;"], [8735, "&angrt;"], [8736, { v: "&ang;", n: 8402, o: "&nang;" }], [8737, "&angmsd;"], [8738, "&angsph;"], [8739, "&mid;"], [8740, "&nmid;"], [8741, "&DoubleVerticalBar;"], [8742, "&NotDoubleVerticalBar;"], [8743, "&and;"], [8744, "&or;"], [8745, { v: "&cap;", n: 65024, o: "&caps;" }], [8746, { v: "&cup;", n: 65024, o: "&cups;" }], [8747, "&int;"], [8748, "&Int;"], [8749, "&iiint;"], [8750, "&conint;"], [8751, "&Conint;"], [8752, "&Cconint;"], [8753, "&cwint;"], [8754, "&ClockwiseContourIntegral;"], [8755, "&awconint;"], [8756, "&there4;"], [8757, "&becaus;"], [8758, "&ratio;"], [8759, "&Colon;"], [8760, "&dotminus;"], [8762, "&mDDot;"], [8763, "&homtht;"], [8764, { v: "&sim;", n: 8402, o: "&nvsim;" }], [8765, { v: "&backsim;", n: 817, o: "&race;" }], [8766, { v: "&ac;", n: 819, o: "&acE;" }], [8767, "&acd;"], [8768, "&VerticalTilde;"], [8769, "&NotTilde;"], [8770, { v: "&eqsim;", n: 824, o: "&nesim;" }], [8771, "&sime;"], [8772, "&NotTildeEqual;"], [8773, "&cong;"], [8774, "&simne;"], [8775, "&ncong;"], [8776, "&ap;"], [8777, "&nap;"], [8778, "&ape;"], [8779, { v: "&apid;", n: 824, o: "&napid;" }], [8780, "&backcong;"], [8781, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [8782, { v: "&bump;", n: 824, o: "&nbump;" }], [8783, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [8784, { v: "&doteq;", n: 824, o: "&nedot;" }], [8785, "&doteqdot;"], [8786, "&efDot;"], [8787, "&erDot;"], [8788, "&Assign;"], [8789, "&ecolon;"], [8790, "&ecir;"], [8791, "&circeq;"], [8793, "&wedgeq;"], [8794, "&veeeq;"], [8796, "&triangleq;"], [8799, "&equest;"], [8800, "&ne;"], [8801, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [8802, "&nequiv;"], [8804, { v: "&le;", n: 8402, o: "&nvle;" }], [8805, { v: "&ge;", n: 8402, o: "&nvge;" }], [8806, { v: "&lE;", n: 824, o: "&nlE;" }], [8807, { v: "&gE;", n: 824, o: "&ngE;" }], [8808, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [8809, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [8810, { v: "&ll;", n: new Map([[824, "&nLtv;"], [8402, "&nLt;"]]) }], [8811, { v: "&gg;", n: new Map([[824, "&nGtv;"], [8402, "&nGt;"]]) }], [8812, "&between;"], [8813, "&NotCupCap;"], [8814, "&nless;"], [8815, "&ngt;"], [8816, "&nle;"], [8817, "&nge;"], [8818, "&lesssim;"], [8819, "&GreaterTilde;"], [8820, "&nlsim;"], [8821, "&ngsim;"], [8822, "&LessGreater;"], [8823, "&gl;"], [8824, "&NotLessGreater;"], [8825, "&NotGreaterLess;"], [8826, "&pr;"], [8827, "&sc;"], [8828, "&prcue;"], [8829, "&sccue;"], [8830, "&PrecedesTilde;"], [8831, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [8832, "&NotPrecedes;"], [8833, "&NotSucceeds;"], [8834, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [8835, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [8836, "&nsub;"], [8837, "&nsup;"], [8838, "&sube;"], [8839, "&supe;"], [8840, "&NotSubsetEqual;"], [8841, "&NotSupersetEqual;"], [8842, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [8843, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [8845, "&cupdot;"], [8846, "&UnionPlus;"], [8847, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [8848, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [8849, "&sqsube;"], [8850, "&sqsupe;"], [8851, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [8852, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [8853, "&CirclePlus;"], [8854, "&CircleMinus;"], [8855, "&CircleTimes;"], [8856, "&osol;"], [8857, "&CircleDot;"], [8858, "&circledcirc;"], [8859, "&circledast;"], [8861, "&circleddash;"], [8862, "&boxplus;"], [8863, "&boxminus;"], [8864, "&boxtimes;"], [8865, "&dotsquare;"], [8866, "&RightTee;"], [8867, "&dashv;"], [8868, "&DownTee;"], [8869, "&bot;"], [8871, "&models;"], [8872, "&DoubleRightTee;"], [8873, "&Vdash;"], [8874, "&Vvdash;"], [8875, "&VDash;"], [8876, "&nvdash;"], [8877, "&nvDash;"], [8878, "&nVdash;"], [8879, "&nVDash;"], [8880, "&prurel;"], [8882, "&LeftTriangle;"], [8883, "&RightTriangle;"], [8884, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [8885, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [8886, "&origof;"], [8887, "&imof;"], [8888, "&multimap;"], [8889, "&hercon;"], [8890, "&intcal;"], [8891, "&veebar;"], [8893, "&barvee;"], [8894, "&angrtvb;"], [8895, "&lrtri;"], [8896, "&bigwedge;"], [8897, "&bigvee;"], [8898, "&bigcap;"], [8899, "&bigcup;"], [8900, "&diam;"], [8901, "&sdot;"], [8902, "&sstarf;"], [8903, "&divideontimes;"], [8904, "&bowtie;"], [8905, "&ltimes;"], [8906, "&rtimes;"], [8907, "&leftthreetimes;"], [8908, "&rightthreetimes;"], [8909, "&backsimeq;"], [8910, "&curlyvee;"], [8911, "&curlywedge;"], [8912, "&Sub;"], [8913, "&Sup;"], [8914, "&Cap;"], [8915, "&Cup;"], [8916, "&fork;"], [8917, "&epar;"], [8918, "&lessdot;"], [8919, "&gtdot;"], [8920, { v: "&Ll;", n: 824, o: "&nLl;" }], [8921, { v: "&Gg;", n: 824, o: "&nGg;" }], [8922, { v: "&leg;", n: 65024, o: "&lesg;" }], [8923, { v: "&gel;", n: 65024, o: "&gesl;" }], [8926, "&cuepr;"], [8927, "&cuesc;"], [8928, "&NotPrecedesSlantEqual;"], [8929, "&NotSucceedsSlantEqual;"], [8930, "&NotSquareSubsetEqual;"], [8931, "&NotSquareSupersetEqual;"], [8934, "&lnsim;"], [8935, "&gnsim;"], [8936, "&precnsim;"], [8937, "&scnsim;"], [8938, "&nltri;"], [8939, "&NotRightTriangle;"], [8940, "&nltrie;"], [8941, "&NotRightTriangleEqual;"], [8942, "&vellip;"], [8943, "&ctdot;"], [8944, "&utdot;"], [8945, "&dtdot;"], [8946, "&disin;"], [8947, "&isinsv;"], [8948, "&isins;"], [8949, { v: "&isindot;", n: 824, o: "&notindot;" }], [8950, "&notinvc;"], [8951, "&notinvb;"], [8953, { v: "&isinE;", n: 824, o: "&notinE;" }], [8954, "&nisd;"], [8955, "&xnis;"], [8956, "&nis;"], [8957, "&notnivc;"], [8958, "&notnivb;"], [8965, "&barwed;"], [8966, "&Barwed;"], [8968, "&lceil;"], [8969, "&rceil;"], [8970, "&LeftFloor;"], [8971, "&rfloor;"], [8972, "&drcrop;"], [8973, "&dlcrop;"], [8974, "&urcrop;"], [8975, "&ulcrop;"], [8976, "&bnot;"], [8978, "&profline;"], [8979, "&profsurf;"], [8981, "&telrec;"], [8982, "&target;"], [8988, "&ulcorn;"], [8989, "&urcorn;"], [8990, "&dlcorn;"], [8991, "&drcorn;"], [8994, "&frown;"], [8995, "&smile;"], [9005, "&cylcty;"], [9006, "&profalar;"], [9014, "&topbot;"], [9021, "&ovbar;"], [9023, "&solbar;"], [9084, "&angzarr;"], [9136, "&lmoustache;"], [9137, "&rmoustache;"], [9140, "&OverBracket;"], [9141, "&bbrk;"], [9142, "&bbrktbrk;"], [9180, "&OverParenthesis;"], [9181, "&UnderParenthesis;"], [9182, "&OverBrace;"], [9183, "&UnderBrace;"], [9186, "&trpezium;"], [9191, "&elinters;"], [9251, "&blank;"], [9416, "&circledS;"], [9472, "&boxh;"], [9474, "&boxv;"], [9484, "&boxdr;"], [9488, "&boxdl;"], [9492, "&boxur;"], [9496, "&boxul;"], [9500, "&boxvr;"], [9508, "&boxvl;"], [9516, "&boxhd;"], [9524, "&boxhu;"], [9532, "&boxvh;"], [9552, "&boxH;"], [9553, "&boxV;"], [9554, "&boxdR;"], [9555, "&boxDr;"], [9556, "&boxDR;"], [9557, "&boxdL;"], [9558, "&boxDl;"], [9559, "&boxDL;"], [9560, "&boxuR;"], [9561, "&boxUr;"], [9562, "&boxUR;"], [9563, "&boxuL;"], [9564, "&boxUl;"], [9565, "&boxUL;"], [9566, "&boxvR;"], [9567, "&boxVr;"], [9568, "&boxVR;"], [9569, "&boxvL;"], [9570, "&boxVl;"], [9571, "&boxVL;"], [9572, "&boxHd;"], [9573, "&boxhD;"], [9574, "&boxHD;"], [9575, "&boxHu;"], [9576, "&boxhU;"], [9577, "&boxHU;"], [9578, "&boxvH;"], [9579, "&boxVh;"], [9580, "&boxVH;"], [9600, "&uhblk;"], [9604, "&lhblk;"], [9608, "&block;"], [9617, "&blk14;"], [9618, "&blk12;"], [9619, "&blk34;"], [9633, "&square;"], [9642, "&blacksquare;"], [9643, "&EmptyVerySmallSquare;"], [9645, "&rect;"], [9646, "&marker;"], [9649, "&fltns;"], [9651, "&bigtriangleup;"], [9652, "&blacktriangle;"], [9653, "&triangle;"], [9656, "&blacktriangleright;"], [9657, "&rtri;"], [9661, "&bigtriangledown;"], [9662, "&blacktriangledown;"], [9663, "&dtri;"], [9666, "&blacktriangleleft;"], [9667, "&ltri;"], [9674, "&loz;"], [9675, "&cir;"], [9708, "&tridot;"], [9711, "&bigcirc;"], [9720, "&ultri;"], [9721, "&urtri;"], [9722, "&lltri;"], [9723, "&EmptySmallSquare;"], [9724, "&FilledSmallSquare;"], [9733, "&bigstar;"], [9734, "&star;"], [9742, "&phone;"], [9792, "&female;"], [9794, "&male;"], [9824, "&spades;"], [9827, "&clubs;"], [9829, "&hearts;"], [9830, "&diamondsuit;"], [9834, "&sung;"], [9837, "&flat;"], [9838, "&natural;"], [9839, "&sharp;"], [10003, "&check;"], [10007, "&cross;"], [10016, "&malt;"], [10038, "&sext;"], [10072, "&VerticalSeparator;"], [10098, "&lbbrk;"], [10099, "&rbbrk;"], [10184, "&bsolhsub;"], [10185, "&suphsol;"], [10214, "&LeftDoubleBracket;"], [10215, "&RightDoubleBracket;"], [10216, "&lang;"], [10217, "&rang;"], [10218, "&Lang;"], [10219, "&Rang;"], [10220, "&loang;"], [10221, "&roang;"], [10229, "&longleftarrow;"], [10230, "&longrightarrow;"], [10231, "&longleftrightarrow;"], [10232, "&DoubleLongLeftArrow;"], [10233, "&DoubleLongRightArrow;"], [10234, "&DoubleLongLeftRightArrow;"], [10236, "&longmapsto;"], [10239, "&dzigrarr;"], [10498, "&nvlArr;"], [10499, "&nvrArr;"], [10500, "&nvHarr;"], [10501, "&Map;"], [10508, "&lbarr;"], [10509, "&bkarow;"], [10510, "&lBarr;"], [10511, "&dbkarow;"], [10512, "&drbkarow;"], [10513, "&DDotrahd;"], [10514, "&UpArrowBar;"], [10515, "&DownArrowBar;"], [10518, "&Rarrtl;"], [10521, "&latail;"], [10522, "&ratail;"], [10523, "&lAtail;"], [10524, "&rAtail;"], [10525, "&larrfs;"], [10526, "&rarrfs;"], [10527, "&larrbfs;"], [10528, "&rarrbfs;"], [10531, "&nwarhk;"], [10532, "&nearhk;"], [10533, "&hksearow;"], [10534, "&hkswarow;"], [10535, "&nwnear;"], [10536, "&nesear;"], [10537, "&seswar;"], [10538, "&swnwar;"], [10547, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [10549, "&cudarrr;"], [10550, "&ldca;"], [10551, "&rdca;"], [10552, "&cudarrl;"], [10553, "&larrpl;"], [10556, "&curarrm;"], [10557, "&cularrp;"], [10565, "&rarrpl;"], [10568, "&harrcir;"], [10569, "&Uarrocir;"], [10570, "&lurdshar;"], [10571, "&ldrushar;"], [10574, "&LeftRightVector;"], [10575, "&RightUpDownVector;"], [10576, "&DownLeftRightVector;"], [10577, "&LeftUpDownVector;"], [10578, "&LeftVectorBar;"], [10579, "&RightVectorBar;"], [10580, "&RightUpVectorBar;"], [10581, "&RightDownVectorBar;"], [10582, "&DownLeftVectorBar;"], [10583, "&DownRightVectorBar;"], [10584, "&LeftUpVectorBar;"], [10585, "&LeftDownVectorBar;"], [10586, "&LeftTeeVector;"], [10587, "&RightTeeVector;"], [10588, "&RightUpTeeVector;"], [10589, "&RightDownTeeVector;"], [10590, "&DownLeftTeeVector;"], [10591, "&DownRightTeeVector;"], [10592, "&LeftUpTeeVector;"], [10593, "&LeftDownTeeVector;"], [10594, "&lHar;"], [10595, "&uHar;"], [10596, "&rHar;"], [10597, "&dHar;"], [10598, "&luruhar;"], [10599, "&ldrdhar;"], [10600, "&ruluhar;"], [10601, "&rdldhar;"], [10602, "&lharul;"], [10603, "&llhard;"], [10604, "&rharul;"], [10605, "&lrhard;"], [10606, "&udhar;"], [10607, "&duhar;"], [10608, "&RoundImplies;"], [10609, "&erarr;"], [10610, "&simrarr;"], [10611, "&larrsim;"], [10612, "&rarrsim;"], [10613, "&rarrap;"], [10614, "&ltlarr;"], [10616, "&gtrarr;"], [10617, "&subrarr;"], [10619, "&suplarr;"], [10620, "&lfisht;"], [10621, "&rfisht;"], [10622, "&ufisht;"], [10623, "&dfisht;"], [10629, "&lopar;"], [10630, "&ropar;"], [10635, "&lbrke;"], [10636, "&rbrke;"], [10637, "&lbrkslu;"], [10638, "&rbrksld;"], [10639, "&lbrksld;"], [10640, "&rbrkslu;"], [10641, "&langd;"], [10642, "&rangd;"], [10643, "&lparlt;"], [10644, "&rpargt;"], [10645, "&gtlPar;"], [10646, "&ltrPar;"], [10650, "&vzigzag;"], [10652, "&vangrt;"], [10653, "&angrtvbd;"], [10660, "&ange;"], [10661, "&range;"], [10662, "&dwangle;"], [10663, "&uwangle;"], [10664, "&angmsdaa;"], [10665, "&angmsdab;"], [10666, "&angmsdac;"], [10667, "&angmsdad;"], [10668, "&angmsdae;"], [10669, "&angmsdaf;"], [10670, "&angmsdag;"], [10671, "&angmsdah;"], [10672, "&bemptyv;"], [10673, "&demptyv;"], [10674, "&cemptyv;"], [10675, "&raemptyv;"], [10676, "&laemptyv;"], [10677, "&ohbar;"], [10678, "&omid;"], [10679, "&opar;"], [10681, "&operp;"], [10683, "&olcross;"], [10684, "&odsold;"], [10686, "&olcir;"], [10687, "&ofcir;"], [10688, "&olt;"], [10689, "&ogt;"], [10690, "&cirscir;"], [10691, "&cirE;"], [10692, "&solb;"], [10693, "&bsolb;"], [10697, "&boxbox;"], [10701, "&trisb;"], [10702, "&rtriltri;"], [10703, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [10704, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [10716, "&iinfin;"], [10717, "&infintie;"], [10718, "&nvinfin;"], [10723, "&eparsl;"], [10724, "&smeparsl;"], [10725, "&eqvparsl;"], [10731, "&blacklozenge;"], [10740, "&RuleDelayed;"], [10742, "&dsol;"], [10752, "&bigodot;"], [10753, "&bigoplus;"], [10754, "&bigotimes;"], [10756, "&biguplus;"], [10758, "&bigsqcup;"], [10764, "&iiiint;"], [10765, "&fpartint;"], [10768, "&cirfnint;"], [10769, "&awint;"], [10770, "&rppolint;"], [10771, "&scpolint;"], [10772, "&npolint;"], [10773, "&pointint;"], [10774, "&quatint;"], [10775, "&intlarhk;"], [10786, "&pluscir;"], [10787, "&plusacir;"], [10788, "&simplus;"], [10789, "&plusdu;"], [10790, "&plussim;"], [10791, "&plustwo;"], [10793, "&mcomma;"], [10794, "&minusdu;"], [10797, "&loplus;"], [10798, "&roplus;"], [10799, "&Cross;"], [10800, "&timesd;"], [10801, "&timesbar;"], [10803, "&smashp;"], [10804, "&lotimes;"], [10805, "&rotimes;"], [10806, "&otimesas;"], [10807, "&Otimes;"], [10808, "&odiv;"], [10809, "&triplus;"], [10810, "&triminus;"], [10811, "&tritime;"], [10812, "&intprod;"], [10815, "&amalg;"], [10816, "&capdot;"], [10818, "&ncup;"], [10819, "&ncap;"], [10820, "&capand;"], [10821, "&cupor;"], [10822, "&cupcap;"], [10823, "&capcup;"], [10824, "&cupbrcap;"], [10825, "&capbrcup;"], [10826, "&cupcup;"], [10827, "&capcap;"], [10828, "&ccups;"], [10829, "&ccaps;"], [10832, "&ccupssm;"], [10835, "&And;"], [10836, "&Or;"], [10837, "&andand;"], [10838, "&oror;"], [10839, "&orslope;"], [10840, "&andslope;"], [10842, "&andv;"], [10843, "&orv;"], [10844, "&andd;"], [10845, "&ord;"], [10847, "&wedbar;"], [10854, "&sdote;"], [10858, "&simdot;"], [10861, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [10862, "&easter;"], [10863, "&apacir;"], [10864, { v: "&apE;", n: 824, o: "&napE;" }], [10865, "&eplus;"], [10866, "&pluse;"], [10867, "&Esim;"], [10868, "&Colone;"], [10869, "&Equal;"], [10871, "&ddotseq;"], [10872, "&equivDD;"], [10873, "&ltcir;"], [10874, "&gtcir;"], [10875, "&ltquest;"], [10876, "&gtquest;"], [10877, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [10878, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [10879, "&lesdot;"], [10880, "&gesdot;"], [10881, "&lesdoto;"], [10882, "&gesdoto;"], [10883, "&lesdotor;"], [10884, "&gesdotol;"], [10885, "&lap;"], [10886, "&gap;"], [10887, "&lne;"], [10888, "&gne;"], [10889, "&lnap;"], [10890, "&gnap;"], [10891, "&lEg;"], [10892, "&gEl;"], [10893, "&lsime;"], [10894, "&gsime;"], [10895, "&lsimg;"], [10896, "&gsiml;"], [10897, "&lgE;"], [10898, "&glE;"], [10899, "&lesges;"], [10900, "&gesles;"], [10901, "&els;"], [10902, "&egs;"], [10903, "&elsdot;"], [10904, "&egsdot;"], [10905, "&el;"], [10906, "&eg;"], [10909, "&siml;"], [10910, "&simg;"], [10911, "&simlE;"], [10912, "&simgE;"], [10913, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [10914, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [10916, "&glj;"], [10917, "&gla;"], [10918, "&ltcc;"], [10919, "&gtcc;"], [10920, "&lescc;"], [10921, "&gescc;"], [10922, "&smt;"], [10923, "&lat;"], [10924, { v: "&smte;", n: 65024, o: "&smtes;" }], [10925, { v: "&late;", n: 65024, o: "&lates;" }], [10926, "&bumpE;"], [10927, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [10928, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [10931, "&prE;"], [10932, "&scE;"], [10933, "&precneqq;"], [10934, "&scnE;"], [10935, "&prap;"], [10936, "&scap;"], [10937, "&precnapprox;"], [10938, "&scnap;"], [10939, "&Pr;"], [10940, "&Sc;"], [10941, "&subdot;"], [10942, "&supdot;"], [10943, "&subplus;"], [10944, "&supplus;"], [10945, "&submult;"], [10946, "&supmult;"], [10947, "&subedot;"], [10948, "&supedot;"], [10949, { v: "&subE;", n: 824, o: "&nsubE;" }], [10950, { v: "&supE;", n: 824, o: "&nsupE;" }], [10951, "&subsim;"], [10952, "&supsim;"], [10955, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [10956, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [10959, "&csub;"], [10960, "&csup;"], [10961, "&csube;"], [10962, "&csupe;"], [10963, "&subsup;"], [10964, "&supsub;"], [10965, "&subsub;"], [10966, "&supsup;"], [10967, "&suphsub;"], [10968, "&supdsub;"], [10969, "&forkv;"], [10970, "&topfork;"], [10971, "&mlcp;"], [10980, "&Dashv;"], [10982, "&Vdashl;"], [10983, "&Barv;"], [10984, "&vBar;"], [10985, "&vBarv;"], [10987, "&Vbar;"], [10988, "&Not;"], [10989, "&bNot;"], [10990, "&rnmid;"], [10991, "&cirmid;"], [10992, "&midcir;"], [10993, "&topcir;"], [10994, "&nhpar;"], [10995, "&parsim;"], [11005, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [55349, { n: new Map([[56476, "&Ascr;"], [56478, "&Cscr;"], [56479, "&Dscr;"], [56482, "&Gscr;"], [56485, "&Jscr;"], [56486, "&Kscr;"], [56489, "&Nscr;"], [56490, "&Oscr;"], [56491, "&Pscr;"], [56492, "&Qscr;"], [56494, "&Sscr;"], [56495, "&Tscr;"], [56496, "&Uscr;"], [56497, "&Vscr;"], [56498, "&Wscr;"], [56499, "&Xscr;"], [56500, "&Yscr;"], [56501, "&Zscr;"], [56502, "&ascr;"], [56503, "&bscr;"], [56504, "&cscr;"], [56505, "&dscr;"], [56507, "&fscr;"], [56509, "&hscr;"], [56510, "&iscr;"], [56511, "&jscr;"], [56512, "&kscr;"], [56513, "&lscr;"], [56514, "&mscr;"], [56515, "&nscr;"], [56517, "&pscr;"], [56518, "&qscr;"], [56519, "&rscr;"], [56520, "&sscr;"], [56521, "&tscr;"], [56522, "&uscr;"], [56523, "&vscr;"], [56524, "&wscr;"], [56525, "&xscr;"], [56526, "&yscr;"], [56527, "&zscr;"], [56580, "&Afr;"], [56581, "&Bfr;"], [56583, "&Dfr;"], [56584, "&Efr;"], [56585, "&Ffr;"], [56586, "&Gfr;"], [56589, "&Jfr;"], [56590, "&Kfr;"], [56591, "&Lfr;"], [56592, "&Mfr;"], [56593, "&Nfr;"], [56594, "&Ofr;"], [56595, "&Pfr;"], [56596, "&Qfr;"], [56598, "&Sfr;"], [56599, "&Tfr;"], [56600, "&Ufr;"], [56601, "&Vfr;"], [56602, "&Wfr;"], [56603, "&Xfr;"], [56604, "&Yfr;"], [56606, "&afr;"], [56607, "&bfr;"], [56608, "&cfr;"], [56609, "&dfr;"], [56610, "&efr;"], [56611, "&ffr;"], [56612, "&gfr;"], [56613, "&hfr;"], [56614, "&ifr;"], [56615, "&jfr;"], [56616, "&kfr;"], [56617, "&lfr;"], [56618, "&mfr;"], [56619, "&nfr;"], [56620, "&ofr;"], [56621, "&pfr;"], [56622, "&qfr;"], [56623, "&rfr;"], [56624, "&sfr;"], [56625, "&tfr;"], [56626, "&ufr;"], [56627, "&vfr;"], [56628, "&wfr;"], [56629, "&xfr;"], [56630, "&yfr;"], [56631, "&zfr;"], [56632, "&Aopf;"], [56633, "&Bopf;"], [56635, "&Dopf;"], [56636, "&Eopf;"], [56637, "&Fopf;"], [56638, "&Gopf;"], [56640, "&Iopf;"], [56641, "&Jopf;"], [56642, "&Kopf;"], [56643, "&Lopf;"], [56644, "&Mopf;"], [56646, "&Oopf;"], [56650, "&Sopf;"], [56651, "&Topf;"], [56652, "&Uopf;"], [56653, "&Vopf;"], [56654, "&Wopf;"], [56655, "&Xopf;"], [56656, "&Yopf;"], [56658, "&aopf;"], [56659, "&bopf;"], [56660, "&copf;"], [56661, "&dopf;"], [56662, "&eopf;"], [56663, "&fopf;"], [56664, "&gopf;"], [56665, "&hopf;"], [56666, "&iopf;"], [56667, "&jopf;"], [56668, "&kopf;"], [56669, "&lopf;"], [56670, "&mopf;"], [56671, "&nopf;"], [56672, "&oopf;"], [56673, "&popf;"], [56674, "&qopf;"], [56675, "&ropf;"], [56676, "&sopf;"], [56677, "&topf;"], [56678, "&uopf;"], [56679, "&vopf;"], [56680, "&wopf;"], [56681, "&xopf;"], [56682, "&yopf;"], [56683, "&zopf;"]]) }], [64256, "&fflig;"], [64257, "&filig;"], [64258, "&fllig;"], [64259, "&ffilig;"], [64260, "&ffllig;"]]);

var _escape = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.getCodePoint = exports.xmlReplacer = void 0;
	exports.xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
	var xmlCodeMap = new Map([
	    [34, "&quot;"],
	    [38, "&amp;"],
	    [39, "&apos;"],
	    [60, "&lt;"],
	    [62, "&gt;"],
	]);
	// For compatibility with node < 4, we wrap `codePointAt`
	exports.getCodePoint = 
	// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
	String.prototype.codePointAt != null
	    ? function (str, index) { return str.codePointAt(index); }
	    : // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
	        function (c, index) {
	            return (c.charCodeAt(index) & 0xfc00) === 0xd800
	                ? (c.charCodeAt(index) - 0xd800) * 0x400 +
	                    c.charCodeAt(index + 1) -
	                    0xdc00 +
	                    0x10000
	                : c.charCodeAt(index);
	        };
	/**
	 * Encodes all non-ASCII characters, as well as characters not valid in XML
	 * documents using XML entities.
	 *
	 * If a character has no equivalent entity, a
	 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
	 */
	function encodeXML(str) {
	    var ret = "";
	    var lastIdx = 0;
	    var match;
	    while ((match = exports.xmlReplacer.exec(str)) !== null) {
	        var i = match.index;
	        var char = str.charCodeAt(i);
	        var next = xmlCodeMap.get(char);
	        if (next !== undefined) {
	            ret += str.substring(lastIdx, i) + next;
	            lastIdx = i + 1;
	        }
	        else {
	            ret += "".concat(str.substring(lastIdx, i), "&#x").concat((0, exports.getCodePoint)(str, i).toString(16), ";");
	            // Increase by 1 if we have a surrogate pair
	            lastIdx = exports.xmlReplacer.lastIndex += Number((char & 0xfc00) === 0xd800);
	        }
	    }
	    return ret + str.substr(lastIdx);
	}
	exports.encodeXML = encodeXML;
	/**
	 * Encodes all non-ASCII characters, as well as characters not valid in XML
	 * documents using numeric hexadecimal reference (eg. `&#xfc;`).
	 *
	 * Have a look at `escapeUTF8` if you want a more concise output at the expense
	 * of reduced transportability.
	 *
	 * @param data String to escape.
	 */
	exports.escape = encodeXML;
	function getEscaper(regex, map) {
	    return function escape(data) {
	        var match;
	        var lastIdx = 0;
	        var result = "";
	        while ((match = regex.exec(data))) {
	            if (lastIdx !== match.index) {
	                result += data.substring(lastIdx, match.index);
	            }
	            // We know that this chararcter will be in the map.
	            result += map.get(match[0].charCodeAt(0));
	            // Every match will be of length 1
	            lastIdx = match.index + 1;
	        }
	        return result + data.substring(lastIdx);
	    };
	}
	/**
	 * Encodes all characters not valid in XML documents using XML entities.
	 *
	 * Note that the output will be character-set dependent.
	 *
	 * @param data String to escape.
	 */
	exports.escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
	/**
	 * Encodes all characters that have to be escaped in HTML attributes,
	 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
	 *
	 * @param data String to escape.
	 */
	exports.escapeAttribute = getEscaper(/["&\u00A0]/g, new Map([
	    [34, "&quot;"],
	    [38, "&amp;"],
	    [160, "&nbsp;"],
	]));
	/**
	 * Encodes all characters that have to be escaped in HTML text,
	 * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
	 *
	 * @param data String to escape.
	 */
	exports.escapeText = getEscaper(/[&<>\u00A0]/g, new Map([
	    [38, "&amp;"],
	    [60, "&lt;"],
	    [62, "&gt;"],
	    [160, "&nbsp;"],
	]));
	
} (_escape));

var __importDefault$4 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(encode, "__esModule", { value: true });
encode.encodeNonAsciiHTML = encode.encodeHTML = void 0;
var encode_html_js_1 = __importDefault$4(encodeHtml);
var escape_js_1$1 = _escape;
var htmlReplacer = /[\t\n!-,./:-@[-`\f{-}$\x80-\uFFFF]/g;
/**
 * Encodes all entities and non-ASCII characters in the input.
 *
 * This includes characters that are valid ASCII characters in HTML documents.
 * For example `#` will be encoded as `&num;`. To get a more compact output,
 * consider using the `encodeNonAsciiHTML` function.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
function encodeHTML(data) {
    return encodeHTMLTrieRe(htmlReplacer, data);
}
encode.encodeHTML = encodeHTML;
/**
 * Encodes all non-ASCII characters, as well as characters not valid in HTML
 * documents using HTML entities.
 *
 * If a character has no equivalent entity, a
 * numeric hexadecimal reference (eg. `&#xfc;`) will be used.
 */
function encodeNonAsciiHTML(data) {
    return encodeHTMLTrieRe(escape_js_1$1.xmlReplacer, data);
}
encode.encodeNonAsciiHTML = encodeNonAsciiHTML;
function encodeHTMLTrieRe(regExp, str) {
    var ret = "";
    var lastIdx = 0;
    var match;
    while ((match = regExp.exec(str)) !== null) {
        var i = match.index;
        ret += str.substring(lastIdx, i);
        var char = str.charCodeAt(i);
        var next = encode_html_js_1.default.get(char);
        if (typeof next === "object") {
            // We are in a branch. Try to match the next char.
            if (i + 1 < str.length) {
                var nextChar = str.charCodeAt(i + 1);
                var value = typeof next.n === "number"
                    ? next.n === nextChar
                        ? next.o
                        : undefined
                    : next.n.get(nextChar);
                if (value !== undefined) {
                    ret += value;
                    lastIdx = regExp.lastIndex += 1;
                    continue;
                }
            }
            next = next.v;
        }
        // We might have a tree node without a value; skip and use a numeric entitiy.
        if (next !== undefined) {
            ret += next;
            lastIdx = i + 1;
        }
        else {
            var cp = (0, escape_js_1$1.getCodePoint)(str, i);
            ret += "&#x".concat(cp.toString(16), ";");
            // Increase by 1 if we have a surrogate pair
            lastIdx = regExp.lastIndex += Number(cp !== char);
        }
    }
    return ret + str.substr(lastIdx);
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.decodeXMLStrict = exports.decodeHTML5Strict = exports.decodeHTML4Strict = exports.decodeHTML5 = exports.decodeHTML4 = exports.decodeHTMLStrict = exports.decodeHTML = exports.decodeXML = exports.encodeHTML5 = exports.encodeHTML4 = exports.encodeNonAsciiHTML = exports.encodeHTML = exports.escapeText = exports.escapeAttribute = exports.escapeUTF8 = exports.escape = exports.encodeXML = exports.encode = exports.decodeStrict = exports.decode = exports.EncodingMode = exports.DecodingMode = exports.EntityLevel = void 0;
	var decode_js_1 = decode;
	var encode_js_1 = encode;
	var escape_js_1 = _escape;
	/** The level of entities to support. */
	var EntityLevel;
	(function (EntityLevel) {
	    /** Support only XML entities. */
	    EntityLevel[EntityLevel["XML"] = 0] = "XML";
	    /** Support HTML entities, which are a superset of XML entities. */
	    EntityLevel[EntityLevel["HTML"] = 1] = "HTML";
	})(EntityLevel = exports.EntityLevel || (exports.EntityLevel = {}));
	/** Determines whether some entities are allowed to be written without a trailing `;`. */
	var DecodingMode;
	(function (DecodingMode) {
	    /** Support legacy HTML entities. */
	    DecodingMode[DecodingMode["Legacy"] = 0] = "Legacy";
	    /** Do not support legacy HTML entities. */
	    DecodingMode[DecodingMode["Strict"] = 1] = "Strict";
	})(DecodingMode = exports.DecodingMode || (exports.DecodingMode = {}));
	var EncodingMode;
	(function (EncodingMode) {
	    /**
	     * The output is UTF-8 encoded. Only characters that need escaping within
	     * HTML will be escaped.
	     */
	    EncodingMode[EncodingMode["UTF8"] = 0] = "UTF8";
	    /**
	     * The output consists only of ASCII characters. Characters that need
	     * escaping within HTML, and characters that aren't ASCII characters will
	     * be escaped.
	     */
	    EncodingMode[EncodingMode["ASCII"] = 1] = "ASCII";
	    /**
	     * Encode all characters that have an equivalent entity, as well as all
	     * characters that are not ASCII characters.
	     */
	    EncodingMode[EncodingMode["Extensive"] = 2] = "Extensive";
	    /**
	     * Encode all characters that have to be escaped in HTML attributes,
	     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
	     */
	    EncodingMode[EncodingMode["Attribute"] = 3] = "Attribute";
	    /**
	     * Encode all characters that have to be escaped in HTML text,
	     * following {@link https://html.spec.whatwg.org/multipage/parsing.html#escapingString}.
	     */
	    EncodingMode[EncodingMode["Text"] = 4] = "Text";
	})(EncodingMode = exports.EncodingMode || (exports.EncodingMode = {}));
	/**
	 * Decodes a string with entities.
	 *
	 * @param data String to decode.
	 * @param options Decoding options.
	 */
	function decode$1(data, options) {
	    if (options === void 0) { options = EntityLevel.XML; }
	    var opts = typeof options === "number" ? { level: options } : options;
	    if (opts.level === EntityLevel.HTML) {
	        if (opts.mode === DecodingMode.Strict) {
	            return (0, decode_js_1.decodeHTMLStrict)(data);
	        }
	        return (0, decode_js_1.decodeHTML)(data);
	    }
	    return (0, decode_js_1.decodeXML)(data);
	}
	exports.decode = decode$1;
	/**
	 * Decodes a string with entities. Does not allow missing trailing semicolons for entities.
	 *
	 * @param data String to decode.
	 * @param options Decoding options.
	 * @deprecated Use `decode` with the `mode` set to `Strict`.
	 */
	function decodeStrict(data, options) {
	    if (options === void 0) { options = EntityLevel.XML; }
	    var opts = typeof options === "number" ? { level: options } : options;
	    if (opts.level === EntityLevel.HTML) {
	        if (opts.mode === DecodingMode.Legacy) {
	            return (0, decode_js_1.decodeHTML)(data);
	        }
	        return (0, decode_js_1.decodeHTMLStrict)(data);
	    }
	    return (0, decode_js_1.decodeXML)(data);
	}
	exports.decodeStrict = decodeStrict;
	/**
	 * Encodes a string with entities.
	 *
	 * @param data String to encode.
	 * @param options Encoding options.
	 */
	function encode$1(data, options) {
	    if (options === void 0) { options = EntityLevel.XML; }
	    var opts = typeof options === "number" ? { level: options } : options;
	    // Mode `UTF8` just escapes XML entities
	    if (opts.mode === EncodingMode.UTF8)
	        return (0, escape_js_1.escapeUTF8)(data);
	    if (opts.mode === EncodingMode.Attribute)
	        return (0, escape_js_1.escapeAttribute)(data);
	    if (opts.mode === EncodingMode.Text)
	        return (0, escape_js_1.escapeText)(data);
	    if (opts.level === EntityLevel.HTML) {
	        if (opts.mode === EncodingMode.ASCII) {
	            return (0, encode_js_1.encodeNonAsciiHTML)(data);
	        }
	        return (0, encode_js_1.encodeHTML)(data);
	    }
	    // ASCII and Extensive are equivalent
	    return (0, escape_js_1.encodeXML)(data);
	}
	exports.encode = encode$1;
	var escape_js_2 = _escape;
	Object.defineProperty(exports, "encodeXML", { enumerable: true, get: function () { return escape_js_2.encodeXML; } });
	Object.defineProperty(exports, "escape", { enumerable: true, get: function () { return escape_js_2.escape; } });
	Object.defineProperty(exports, "escapeUTF8", { enumerable: true, get: function () { return escape_js_2.escapeUTF8; } });
	Object.defineProperty(exports, "escapeAttribute", { enumerable: true, get: function () { return escape_js_2.escapeAttribute; } });
	Object.defineProperty(exports, "escapeText", { enumerable: true, get: function () { return escape_js_2.escapeText; } });
	var encode_js_2 = encode;
	Object.defineProperty(exports, "encodeHTML", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
	Object.defineProperty(exports, "encodeNonAsciiHTML", { enumerable: true, get: function () { return encode_js_2.encodeNonAsciiHTML; } });
	// Legacy aliases (deprecated)
	Object.defineProperty(exports, "encodeHTML4", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
	Object.defineProperty(exports, "encodeHTML5", { enumerable: true, get: function () { return encode_js_2.encodeHTML; } });
	var decode_js_2 = decode;
	Object.defineProperty(exports, "decodeXML", { enumerable: true, get: function () { return decode_js_2.decodeXML; } });
	Object.defineProperty(exports, "decodeHTML", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
	Object.defineProperty(exports, "decodeHTMLStrict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
	// Legacy aliases (deprecated)
	Object.defineProperty(exports, "decodeHTML4", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
	Object.defineProperty(exports, "decodeHTML5", { enumerable: true, get: function () { return decode_js_2.decodeHTML; } });
	Object.defineProperty(exports, "decodeHTML4Strict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
	Object.defineProperty(exports, "decodeHTML5Strict", { enumerable: true, get: function () { return decode_js_2.decodeHTMLStrict; } });
	Object.defineProperty(exports, "decodeXMLStrict", { enumerable: true, get: function () { return decode_js_2.decodeXML; } });
	
} (lib$4));

var foreignNames = {};

Object.defineProperty(foreignNames, "__esModule", { value: true });
foreignNames.attributeNames = foreignNames.elementNames = void 0;
foreignNames.elementNames = new Map([
    "altGlyph",
    "altGlyphDef",
    "altGlyphItem",
    "animateColor",
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDistantLight",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "glyphRef",
    "linearGradient",
    "radialGradient",
    "textPath",
].map(function (val) { return [val.toLowerCase(), val]; }));
foreignNames.attributeNames = new Map([
    "definitionURL",
    "attributeName",
    "attributeType",
    "baseFrequency",
    "baseProfile",
    "calcMode",
    "clipPathUnits",
    "diffuseConstant",
    "edgeMode",
    "filterUnits",
    "glyphRef",
    "gradientTransform",
    "gradientUnits",
    "kernelMatrix",
    "kernelUnitLength",
    "keyPoints",
    "keySplines",
    "keyTimes",
    "lengthAdjust",
    "limitingConeAngle",
    "markerHeight",
    "markerUnits",
    "markerWidth",
    "maskContentUnits",
    "maskUnits",
    "numOctaves",
    "pathLength",
    "patternContentUnits",
    "patternTransform",
    "patternUnits",
    "pointsAtX",
    "pointsAtY",
    "pointsAtZ",
    "preserveAlpha",
    "preserveAspectRatio",
    "primitiveUnits",
    "refX",
    "refY",
    "repeatCount",
    "repeatDur",
    "requiredExtensions",
    "requiredFeatures",
    "specularConstant",
    "specularExponent",
    "spreadMethod",
    "startOffset",
    "stdDeviation",
    "stitchTiles",
    "surfaceScale",
    "systemLanguage",
    "tableValues",
    "targetX",
    "targetY",
    "textLength",
    "viewBox",
    "viewTarget",
    "xChannelSelector",
    "yChannelSelector",
    "zoomAndPan",
].map(function (val) { return [val.toLowerCase(), val]; }));

var __assign$2 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$2 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$2.apply(this, arguments);
};
var __createBinding$6 = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault$6 = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar$6 = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$6(result, mod, k);
    __setModuleDefault$6(result, mod);
    return result;
};
Object.defineProperty(lib$5, "__esModule", { value: true });
lib$5.render = void 0;
/*
 * Module dependencies
 */
var ElementType = __importStar$6(lib$6);
var entities_1 = lib$4;
/**
 * Mixed-case SVG and MathML tags & attributes
 * recognized by the HTML parser.
 *
 * @see https://html.spec.whatwg.org/multipage/parsing.html#parsing-main-inforeign
 */
var foreignNames_js_1 = foreignNames;
var unencodedElements = new Set([
    "style",
    "script",
    "xmp",
    "iframe",
    "noembed",
    "noframes",
    "plaintext",
    "noscript",
]);
function replaceQuotes(value) {
    return value.replace(/"/g, "&quot;");
}
/**
 * Format attributes
 */
function formatAttributes(attributes, opts) {
    var _a;
    if (!attributes)
        return;
    var encode = ((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) === false
        ? replaceQuotes
        : opts.xmlMode || opts.encodeEntities !== "utf8"
            ? entities_1.encodeXML
            : entities_1.escapeAttribute;
    return Object.keys(attributes)
        .map(function (key) {
        var _a, _b;
        var value = (_a = attributes[key]) !== null && _a !== void 0 ? _a : "";
        if (opts.xmlMode === "foreign") {
            /* Fix up mixed-case attribute names */
            key = (_b = foreignNames_js_1.attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
        }
        if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
            return key;
        }
        return "".concat(key, "=\"").concat(encode(value), "\"");
    })
        .join(" ");
}
/**
 * Self-enclosing tags
 */
var singleTag = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
/**
 * Renders a DOM node or an array of DOM nodes to a string.
 *
 * Can be thought of as the equivalent of the `outerHTML` of the passed node(s).
 *
 * @param node Node to be rendered.
 * @param options Changes serialization behavior
 */
function render$1(node, options) {
    if (options === void 0) { options = {}; }
    var nodes = "length" in node ? node : [node];
    var output = "";
    for (var i = 0; i < nodes.length; i++) {
        output += renderNode(nodes[i], options);
    }
    return output;
}
lib$5.render = render$1;
lib$5.default = render$1;
function renderNode(node, options) {
    switch (node.type) {
        case ElementType.Root:
            return render$1(node.children, options);
        // @ts-expect-error We don't use `Doctype` yet
        case ElementType.Doctype:
        case ElementType.Directive:
            return renderDirective(node);
        case ElementType.Comment:
            return renderComment(node);
        case ElementType.CDATA:
            return renderCdata(node);
        case ElementType.Script:
        case ElementType.Style:
        case ElementType.Tag:
            return renderTag(node, options);
        case ElementType.Text:
            return renderText(node, options);
    }
}
var foreignModeIntegrationPoints = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignObject",
    "desc",
    "title",
]);
var foreignElements = new Set(["svg", "math"]);
function renderTag(elem, opts) {
    var _a;
    // Handle SVG / MathML in HTML
    if (opts.xmlMode === "foreign") {
        /* Fix up mixed-case element names */
        elem.name = (_a = foreignNames_js_1.elementNames.get(elem.name)) !== null && _a !== void 0 ? _a : elem.name;
        /* Exit foreign mode at integration points */
        if (elem.parent &&
            foreignModeIntegrationPoints.has(elem.parent.name)) {
            opts = __assign$2(__assign$2({}, opts), { xmlMode: false });
        }
    }
    if (!opts.xmlMode && foreignElements.has(elem.name)) {
        opts = __assign$2(__assign$2({}, opts), { xmlMode: "foreign" });
    }
    var tag = "<".concat(elem.name);
    var attribs = formatAttributes(elem.attribs, opts);
    if (attribs) {
        tag += " ".concat(attribs);
    }
    if (elem.children.length === 0 &&
        (opts.xmlMode
            ? // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
                opts.selfClosingTags !== false
            : // User explicitly asked for self-closing tags, even in HTML mode
                opts.selfClosingTags && singleTag.has(elem.name))) {
        if (!opts.xmlMode)
            tag += " ";
        tag += "/>";
    }
    else {
        tag += ">";
        if (elem.children.length > 0) {
            tag += render$1(elem.children, opts);
        }
        if (opts.xmlMode || !singleTag.has(elem.name)) {
            tag += "</".concat(elem.name, ">");
        }
    }
    return tag;
}
function renderDirective(elem) {
    return "<".concat(elem.data, ">");
}
function renderText(elem, opts) {
    var _a;
    var data = elem.data || "";
    // If entities weren't decoded, no need to encode them back
    if (((_a = opts.encodeEntities) !== null && _a !== void 0 ? _a : opts.decodeEntities) !== false &&
        !(!opts.xmlMode &&
            elem.parent &&
            unencodedElements.has(elem.parent.name))) {
        data =
            opts.xmlMode || opts.encodeEntities !== "utf8"
                ? (0, entities_1.encodeXML)(data)
                : (0, entities_1.escapeText)(data);
    }
    return data;
}
function renderCdata(elem) {
    return "<![CDATA[".concat(elem.children[0].data, "]]>");
}
function renderComment(elem) {
    return "<!--".concat(elem.data, "-->");
}

var __importDefault$3 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(stringify$2, "__esModule", { value: true });
stringify$2.innerText = stringify$2.textContent = stringify$2.getText = stringify$2.getInnerHTML = stringify$2.getOuterHTML = void 0;
var domhandler_1$7 = lib$7;
var dom_serializer_1 = __importDefault$3(lib$5);
var domelementtype_1 = lib$6;
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the outer HTML of.
 * @param options Options for serialization.
 * @returns `node`'s outer HTML.
 */
function getOuterHTML(node, options) {
    return (0, dom_serializer_1.default)(node, options);
}
stringify$2.getOuterHTML = getOuterHTML;
/**
 * @category Stringify
 * @deprecated Use the `dom-serializer` module directly.
 * @param node Node to get the inner HTML of.
 * @param options Options for serialization.
 * @returns `node`'s inner HTML.
 */
function getInnerHTML(node, options) {
    return (0, domhandler_1$7.hasChildren)(node)
        ? node.children.map(function (node) { return getOuterHTML(node, options); }).join("")
        : "";
}
stringify$2.getInnerHTML = getInnerHTML;
/**
 * Get a node's inner text. Same as `textContent`, but inserts newlines for `<br>` tags.
 *
 * @category Stringify
 * @deprecated Use `textContent` instead.
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 */
function getText(node) {
    if (Array.isArray(node))
        return node.map(getText).join("");
    if ((0, domhandler_1$7.isTag)(node))
        return node.name === "br" ? "\n" : getText(node.children);
    if ((0, domhandler_1$7.isCDATA)(node))
        return getText(node.children);
    if ((0, domhandler_1$7.isText)(node))
        return node.data;
    return "";
}
stringify$2.getText = getText;
/**
 * Get a node's text content.
 *
 * @category Stringify
 * @param node Node to get the text content of.
 * @returns `node`'s text content.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent}
 */
function textContent(node) {
    if (Array.isArray(node))
        return node.map(textContent).join("");
    if ((0, domhandler_1$7.hasChildren)(node) && !(0, domhandler_1$7.isComment)(node)) {
        return textContent(node.children);
    }
    if ((0, domhandler_1$7.isText)(node))
        return node.data;
    return "";
}
stringify$2.textContent = textContent;
/**
 * Get a node's inner text.
 *
 * @category Stringify
 * @param node Node to get the inner text of.
 * @returns `node`'s inner text.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/innerText}
 */
function innerText(node) {
    if (Array.isArray(node))
        return node.map(innerText).join("");
    if ((0, domhandler_1$7.hasChildren)(node) && (node.type === domelementtype_1.ElementType.Tag || (0, domhandler_1$7.isCDATA)(node))) {
        return innerText(node.children);
    }
    if ((0, domhandler_1$7.isText)(node))
        return node.data;
    return "";
}
stringify$2.innerText = innerText;

var traversal = {};

Object.defineProperty(traversal, "__esModule", { value: true });
traversal.prevElementSibling = traversal.nextElementSibling = traversal.getName = traversal.hasAttrib = traversal.getAttributeValue = traversal.getSiblings = traversal.getParent = traversal.getChildren = void 0;
var domhandler_1$6 = lib$7;
/**
 * Get a node's children.
 *
 * @category Traversal
 * @param elem Node to get the children of.
 * @returns `elem`'s children, or an empty array.
 */
function getChildren(elem) {
    return (0, domhandler_1$6.hasChildren)(elem) ? elem.children : [];
}
traversal.getChildren = getChildren;
/**
 * Get a node's parent.
 *
 * @category Traversal
 * @param elem Node to get the parent of.
 * @returns `elem`'s parent node.
 */
function getParent(elem) {
    return elem.parent || null;
}
traversal.getParent = getParent;
/**
 * Gets an elements siblings, including the element itself.
 *
 * Attempts to get the children through the element's parent first. If we don't
 * have a parent (the element is a root node), we walk the element's `prev` &
 * `next` to get all remaining nodes.
 *
 * @category Traversal
 * @param elem Element to get the siblings of.
 * @returns `elem`'s siblings.
 */
function getSiblings(elem) {
    var _a, _b;
    var parent = getParent(elem);
    if (parent != null)
        return getChildren(parent);
    var siblings = [elem];
    var prev = elem.prev, next = elem.next;
    while (prev != null) {
        siblings.unshift(prev);
        (_a = prev, prev = _a.prev);
    }
    while (next != null) {
        siblings.push(next);
        (_b = next, next = _b.next);
    }
    return siblings;
}
traversal.getSiblings = getSiblings;
/**
 * Gets an attribute from an element.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to retrieve.
 * @returns The element's attribute value, or `undefined`.
 */
function getAttributeValue(elem, name) {
    var _a;
    return (_a = elem.attribs) === null || _a === void 0 ? void 0 : _a[name];
}
traversal.getAttributeValue = getAttributeValue;
/**
 * Checks whether an element has an attribute.
 *
 * @category Traversal
 * @param elem Element to check.
 * @param name Attribute name to look for.
 * @returns Returns whether `elem` has the attribute `name`.
 */
function hasAttrib(elem, name) {
    return (elem.attribs != null &&
        Object.prototype.hasOwnProperty.call(elem.attribs, name) &&
        elem.attribs[name] != null);
}
traversal.hasAttrib = hasAttrib;
/**
 * Get the tag name of an element.
 *
 * @category Traversal
 * @param elem The element to get the name for.
 * @returns The tag name of `elem`.
 */
function getName(elem) {
    return elem.name;
}
traversal.getName = getName;
/**
 * Returns the next element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the next sibling of.
 * @returns `elem`'s next sibling that is a tag.
 */
function nextElementSibling(elem) {
    var _a;
    var next = elem.next;
    while (next !== null && !(0, domhandler_1$6.isTag)(next))
        (_a = next, next = _a.next);
    return next;
}
traversal.nextElementSibling = nextElementSibling;
/**
 * Returns the previous element sibling of a node.
 *
 * @category Traversal
 * @param elem The element to get the previous sibling of.
 * @returns `elem`'s previous sibling that is a tag.
 */
function prevElementSibling(elem) {
    var _a;
    var prev = elem.prev;
    while (prev !== null && !(0, domhandler_1$6.isTag)(prev))
        (_a = prev, prev = _a.prev);
    return prev;
}
traversal.prevElementSibling = prevElementSibling;

var manipulation$1 = {};

Object.defineProperty(manipulation$1, "__esModule", { value: true });
manipulation$1.prepend = manipulation$1.prependChild = manipulation$1.append = manipulation$1.appendChild = manipulation$1.replaceElement = manipulation$1.removeElement = void 0;
/**
 * Remove an element from the dom
 *
 * @category Manipulation
 * @param elem The element to be removed
 */
function removeElement(elem) {
    if (elem.prev)
        elem.prev.next = elem.next;
    if (elem.next)
        elem.next.prev = elem.prev;
    if (elem.parent) {
        var childs = elem.parent.children;
        childs.splice(childs.lastIndexOf(elem), 1);
    }
}
manipulation$1.removeElement = removeElement;
/**
 * Replace an element in the dom
 *
 * @category Manipulation
 * @param elem The element to be replaced
 * @param replacement The element to be added
 */
function replaceElement(elem, replacement) {
    var prev = (replacement.prev = elem.prev);
    if (prev) {
        prev.next = replacement;
    }
    var next = (replacement.next = elem.next);
    if (next) {
        next.prev = replacement;
    }
    var parent = (replacement.parent = elem.parent);
    if (parent) {
        var childs = parent.children;
        childs[childs.lastIndexOf(elem)] = replacement;
        elem.parent = null;
    }
}
manipulation$1.replaceElement = replaceElement;
/**
 * Append a child to an element.
 *
 * @category Manipulation
 * @param elem The element to append to.
 * @param child The element to be added as a child.
 */
function appendChild(elem, child) {
    removeElement(child);
    child.next = null;
    child.parent = elem;
    if (elem.children.push(child) > 1) {
        var sibling = elem.children[elem.children.length - 2];
        sibling.next = child;
        child.prev = sibling;
    }
    else {
        child.prev = null;
    }
}
manipulation$1.appendChild = appendChild;
/**
 * Append an element after another.
 *
 * @category Manipulation
 * @param elem The element to append after.
 * @param next The element be added.
 */
function append(elem, next) {
    removeElement(next);
    var parent = elem.parent;
    var currNext = elem.next;
    next.next = currNext;
    next.prev = elem;
    elem.next = next;
    next.parent = parent;
    if (currNext) {
        currNext.prev = next;
        if (parent) {
            var childs = parent.children;
            childs.splice(childs.lastIndexOf(currNext), 0, next);
        }
    }
    else if (parent) {
        parent.children.push(next);
    }
}
manipulation$1.append = append;
/**
 * Prepend a child to an element.
 *
 * @category Manipulation
 * @param elem The element to prepend before.
 * @param child The element to be added as a child.
 */
function prependChild(elem, child) {
    removeElement(child);
    child.parent = elem;
    child.prev = null;
    if (elem.children.unshift(child) !== 1) {
        var sibling = elem.children[1];
        sibling.prev = child;
        child.next = sibling;
    }
    else {
        child.next = null;
    }
}
manipulation$1.prependChild = prependChild;
/**
 * Prepend an element before another.
 *
 * @category Manipulation
 * @param elem The element to prepend before.
 * @param prev The element be added.
 */
function prepend(elem, prev) {
    removeElement(prev);
    var parent = elem.parent;
    if (parent) {
        var childs = parent.children;
        childs.splice(childs.indexOf(elem), 0, prev);
    }
    if (elem.prev) {
        elem.prev.next = prev;
    }
    prev.parent = parent;
    prev.prev = elem.prev;
    prev.next = elem;
    elem.prev = prev;
}
manipulation$1.prepend = prepend;

var querying = {};

Object.defineProperty(querying, "__esModule", { value: true });
querying.findAll = querying.existsOne = querying.findOne = querying.findOneChild = querying.find = querying.filter = void 0;
var domhandler_1$5 = lib$7;
/**
 * Search a node and its children for nodes passing a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param node Node to search. Will be included in the result set if it matches.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function filter$1(test, node, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    if (!Array.isArray(node))
        node = [node];
    return find$1(test, node, recurse, limit);
}
querying.filter = filter$1;
/**
 * Search an array of node and its children for nodes passing a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes passing `test`.
 */
function find$1(test, nodes, recurse, limit) {
    var result = [];
    for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
        var elem = nodes_1[_i];
        if (test(elem)) {
            result.push(elem);
            if (--limit <= 0)
                break;
        }
        if (recurse && (0, domhandler_1$5.hasChildren)(elem) && elem.children.length > 0) {
            var children = find$1(test, elem.children, recurse, limit);
            result.push.apply(result, children);
            limit -= children.length;
            if (limit <= 0)
                break;
        }
    }
    return result;
}
querying.find = find$1;
/**
 * Finds the first element inside of an array that matches a test function.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns The first node in the array that passes `test`.
 * @deprecated Use `Array.prototype.find` directly.
 */
function findOneChild(test, nodes) {
    return nodes.find(test);
}
querying.findOneChild = findOneChild;
/**
 * Finds one element in a tree that passes a test.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @param recurse Also consider child nodes.
 * @returns The first child node that passes `test`.
 */
function findOne(test, nodes, recurse) {
    if (recurse === void 0) { recurse = true; }
    var elem = null;
    for (var i = 0; i < nodes.length && !elem; i++) {
        var checked = nodes[i];
        if (!(0, domhandler_1$5.isTag)(checked)) {
            continue;
        }
        else if (test(checked)) {
            elem = checked;
        }
        else if (recurse && checked.children.length > 0) {
            elem = findOne(test, checked.children, true);
        }
    }
    return elem;
}
querying.findOne = findOne;
/**
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns Whether a tree of nodes contains at least one node passing the test.
 */
function existsOne(test, nodes) {
    return nodes.some(function (checked) {
        return (0, domhandler_1$5.isTag)(checked) &&
            (test(checked) ||
                (checked.children.length > 0 &&
                    existsOne(test, checked.children)));
    });
}
querying.existsOne = existsOne;
/**
 * Search and array of nodes and its children for elements passing a test function.
 *
 * Same as `find`, but limited to elements and with less options, leading to reduced complexity.
 *
 * @category Querying
 * @param test Function to test nodes on.
 * @param nodes Array of nodes to search.
 * @returns All nodes passing `test`.
 */
function findAll(test, nodes) {
    var _a;
    var result = [];
    var stack = nodes.filter(domhandler_1$5.isTag);
    var elem;
    while ((elem = stack.shift())) {
        var children = (_a = elem.children) === null || _a === void 0 ? void 0 : _a.filter(domhandler_1$5.isTag);
        if (children && children.length > 0) {
            stack.unshift.apply(stack, children);
        }
        if (test(elem))
            result.push(elem);
    }
    return result;
}
querying.findAll = findAll;

var legacy = {};

Object.defineProperty(legacy, "__esModule", { value: true });
legacy.getElementsByTagType = legacy.getElementsByTagName = legacy.getElementById = legacy.getElements = legacy.testElement = void 0;
var domhandler_1$4 = lib$7;
var querying_js_1 = querying;
var Checks = {
    tag_name: function (name) {
        if (typeof name === "function") {
            return function (elem) { return (0, domhandler_1$4.isTag)(elem) && name(elem.name); };
        }
        else if (name === "*") {
            return domhandler_1$4.isTag;
        }
        return function (elem) { return (0, domhandler_1$4.isTag)(elem) && elem.name === name; };
    },
    tag_type: function (type) {
        if (typeof type === "function") {
            return function (elem) { return type(elem.type); };
        }
        return function (elem) { return elem.type === type; };
    },
    tag_contains: function (data) {
        if (typeof data === "function") {
            return function (elem) { return (0, domhandler_1$4.isText)(elem) && data(elem.data); };
        }
        return function (elem) { return (0, domhandler_1$4.isText)(elem) && elem.data === data; };
    },
};
/**
 * @param attrib Attribute to check.
 * @param value Attribute value to look for.
 * @returns A function to check whether the a node has an attribute with a
 *   particular value.
 */
function getAttribCheck(attrib, value) {
    if (typeof value === "function") {
        return function (elem) { return (0, domhandler_1$4.isTag)(elem) && value(elem.attribs[attrib]); };
    }
    return function (elem) { return (0, domhandler_1$4.isTag)(elem) && elem.attribs[attrib] === value; };
}
/**
 * @param a First function to combine.
 * @param b Second function to combine.
 * @returns A function taking a node and returning `true` if either of the input
 *   functions returns `true` for the node.
 */
function combineFuncs(a, b) {
    return function (elem) { return a(elem) || b(elem); };
}
/**
 * @param options An object describing nodes to look for.
 * @returns A function executing all checks in `options` and returning `true` if
 *   any of them match a node.
 */
function compileTest(options) {
    var funcs = Object.keys(options).map(function (key) {
        var value = options[key];
        return Object.prototype.hasOwnProperty.call(Checks, key)
            ? Checks[key](value)
            : getAttribCheck(key, value);
    });
    return funcs.length === 0 ? null : funcs.reduce(combineFuncs);
}
/**
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param node The element to test.
 * @returns Whether the element matches the description in `options`.
 */
function testElement(options, node) {
    var test = compileTest(options);
    return test ? test(node) : true;
}
legacy.testElement = testElement;
/**
 * @category Legacy Query Functions
 * @param options An object describing nodes to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes that match `options`.
 */
function getElements(options, nodes, recurse, limit) {
    if (limit === void 0) { limit = Infinity; }
    var test = compileTest(options);
    return test ? (0, querying_js_1.filter)(test, nodes, recurse, limit) : [];
}
legacy.getElements = getElements;
/**
 * @category Legacy Query Functions
 * @param id The unique ID attribute value to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @returns The node with the supplied ID.
 */
function getElementById(id, nodes, recurse) {
    if (recurse === void 0) { recurse = true; }
    if (!Array.isArray(nodes))
        nodes = [nodes];
    return (0, querying_js_1.findOne)(getAttribCheck("id", id), nodes, recurse);
}
legacy.getElementById = getElementById;
/**
 * @category Legacy Query Functions
 * @param tagName Tag name to search for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `tagName`.
 */
function getElementsByTagName(tagName, nodes, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return (0, querying_js_1.filter)(Checks["tag_name"](tagName), nodes, recurse, limit);
}
legacy.getElementsByTagName = getElementsByTagName;
/**
 * @category Legacy Query Functions
 * @param type Element type to look for.
 * @param nodes Nodes to search through.
 * @param recurse Also consider child nodes.
 * @param limit Maximum number of nodes to return.
 * @returns All nodes with the supplied `type`.
 */
function getElementsByTagType(type, nodes, recurse, limit) {
    if (recurse === void 0) { recurse = true; }
    if (limit === void 0) { limit = Infinity; }
    return (0, querying_js_1.filter)(Checks["tag_type"](type), nodes, recurse, limit);
}
legacy.getElementsByTagType = getElementsByTagType;

var helpers$1 = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.uniqueSort = exports.compareDocumentPosition = exports.DocumentPosition = exports.removeSubsets = void 0;
	var domhandler_1 = lib$7;
	/**
	 * Given an array of nodes, remove any member that is contained by another.
	 *
	 * @category Helpers
	 * @param nodes Nodes to filter.
	 * @returns Remaining nodes that aren't subtrees of each other.
	 */
	function removeSubsets(nodes) {
	    var idx = nodes.length;
	    /*
	     * Check if each node (or one of its ancestors) is already contained in the
	     * array.
	     */
	    while (--idx >= 0) {
	        var node = nodes[idx];
	        /*
	         * Remove the node if it is not unique.
	         * We are going through the array from the end, so we only
	         * have to check nodes that preceed the node under consideration in the array.
	         */
	        if (idx > 0 && nodes.lastIndexOf(node, idx - 1) >= 0) {
	            nodes.splice(idx, 1);
	            continue;
	        }
	        for (var ancestor = node.parent; ancestor; ancestor = ancestor.parent) {
	            if (nodes.includes(ancestor)) {
	                nodes.splice(idx, 1);
	                break;
	            }
	        }
	    }
	    return nodes;
	}
	exports.removeSubsets = removeSubsets;
	/**
	 * @category Helpers
	 * @see {@link http://dom.spec.whatwg.org/#dom-node-comparedocumentposition}
	 */
	var DocumentPosition;
	(function (DocumentPosition) {
	    DocumentPosition[DocumentPosition["DISCONNECTED"] = 1] = "DISCONNECTED";
	    DocumentPosition[DocumentPosition["PRECEDING"] = 2] = "PRECEDING";
	    DocumentPosition[DocumentPosition["FOLLOWING"] = 4] = "FOLLOWING";
	    DocumentPosition[DocumentPosition["CONTAINS"] = 8] = "CONTAINS";
	    DocumentPosition[DocumentPosition["CONTAINED_BY"] = 16] = "CONTAINED_BY";
	})(DocumentPosition = exports.DocumentPosition || (exports.DocumentPosition = {}));
	/**
	 * Compare the position of one node against another node in any other document.
	 * The return value is a bitmask with the values from {@link DocumentPosition}.
	 *
	 * Document order:
	 * > There is an ordering, document order, defined on all the nodes in the
	 * > document corresponding to the order in which the first character of the
	 * > XML representation of each node occurs in the XML representation of the
	 * > document after expansion of general entities. Thus, the document element
	 * > node will be the first node. Element nodes occur before their children.
	 * > Thus, document order orders element nodes in order of the occurrence of
	 * > their start-tag in the XML (after expansion of entities). The attribute
	 * > nodes of an element occur after the element and before its children. The
	 * > relative order of attribute nodes is implementation-dependent.
	 *
	 * Source:
	 * http://www.w3.org/TR/DOM-Level-3-Core/glossary.html#dt-document-order
	 *
	 * @category Helpers
	 * @param nodeA The first node to use in the comparison
	 * @param nodeB The second node to use in the comparison
	 * @returns A bitmask describing the input nodes' relative position.
	 *
	 * See http://dom.spec.whatwg.org/#dom-node-comparedocumentposition for
	 * a description of these values.
	 */
	function compareDocumentPosition(nodeA, nodeB) {
	    var aParents = [];
	    var bParents = [];
	    if (nodeA === nodeB) {
	        return 0;
	    }
	    var current = (0, domhandler_1.hasChildren)(nodeA) ? nodeA : nodeA.parent;
	    while (current) {
	        aParents.unshift(current);
	        current = current.parent;
	    }
	    current = (0, domhandler_1.hasChildren)(nodeB) ? nodeB : nodeB.parent;
	    while (current) {
	        bParents.unshift(current);
	        current = current.parent;
	    }
	    var maxIdx = Math.min(aParents.length, bParents.length);
	    var idx = 0;
	    while (idx < maxIdx && aParents[idx] === bParents[idx]) {
	        idx++;
	    }
	    if (idx === 0) {
	        return DocumentPosition.DISCONNECTED;
	    }
	    var sharedParent = aParents[idx - 1];
	    var siblings = sharedParent.children;
	    var aSibling = aParents[idx];
	    var bSibling = bParents[idx];
	    if (siblings.indexOf(aSibling) > siblings.indexOf(bSibling)) {
	        if (sharedParent === nodeB) {
	            return DocumentPosition.FOLLOWING | DocumentPosition.CONTAINED_BY;
	        }
	        return DocumentPosition.FOLLOWING;
	    }
	    if (sharedParent === nodeA) {
	        return DocumentPosition.PRECEDING | DocumentPosition.CONTAINS;
	    }
	    return DocumentPosition.PRECEDING;
	}
	exports.compareDocumentPosition = compareDocumentPosition;
	/**
	 * Sort an array of nodes based on their relative position in the document and
	 * remove any duplicate nodes. If the array contains nodes that do not belong to
	 * the same document, sort order is unspecified.
	 *
	 * @category Helpers
	 * @param nodes Array of DOM nodes.
	 * @returns Collection of unique nodes, sorted in document order.
	 */
	function uniqueSort(nodes) {
	    nodes = nodes.filter(function (node, i, arr) { return !arr.includes(node, i + 1); });
	    nodes.sort(function (a, b) {
	        var relative = compareDocumentPosition(a, b);
	        if (relative & DocumentPosition.PRECEDING) {
	            return -1;
	        }
	        else if (relative & DocumentPosition.FOLLOWING) {
	            return 1;
	        }
	        return 0;
	    });
	    return nodes;
	}
	exports.uniqueSort = uniqueSort;
	
} (helpers$1));

var feeds = {};

Object.defineProperty(feeds, "__esModule", { value: true });
feeds.getFeed = void 0;
var stringify_js_1 = stringify$2;
var legacy_js_1 = legacy;
/**
 * Get the feed object from the root of a DOM tree.
 *
 * @category Feeds
 * @param doc - The DOM to to extract the feed from.
 * @returns The feed.
 */
function getFeed(doc) {
    var feedRoot = getOneElement(isValidFeed, doc);
    return !feedRoot
        ? null
        : feedRoot.name === "feed"
            ? getAtomFeed(feedRoot)
            : getRssFeed(feedRoot);
}
feeds.getFeed = getFeed;
/**
 * Parse an Atom feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getAtomFeed(feedRoot) {
    var _a;
    var childs = feedRoot.children;
    var feed = {
        type: "atom",
        items: (0, legacy_js_1.getElementsByTagName)("entry", childs).map(function (item) {
            var _a;
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "id", children);
            addConditionally(entry, "title", "title", children);
            var href = (_a = getOneElement("link", children)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
            if (href) {
                entry.link = href;
            }
            var description = fetch("summary", children) || fetch("content", children);
            if (description) {
                entry.description = description;
            }
            var pubDate = fetch("updated", children);
            if (pubDate) {
                entry.pubDate = new Date(pubDate);
            }
            return entry;
        }),
    };
    addConditionally(feed, "id", "id", childs);
    addConditionally(feed, "title", "title", childs);
    var href = (_a = getOneElement("link", childs)) === null || _a === void 0 ? void 0 : _a.attribs["href"];
    if (href) {
        feed.link = href;
    }
    addConditionally(feed, "description", "subtitle", childs);
    var updated = fetch("updated", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "email", childs, true);
    return feed;
}
/**
 * Parse a RSS feed.
 *
 * @param feedRoot The root of the feed.
 * @returns The parsed feed.
 */
function getRssFeed(feedRoot) {
    var _a, _b;
    var childs = (_b = (_a = getOneElement("channel", feedRoot.children)) === null || _a === void 0 ? void 0 : _a.children) !== null && _b !== void 0 ? _b : [];
    var feed = {
        type: feedRoot.name.substr(0, 3),
        id: "",
        items: (0, legacy_js_1.getElementsByTagName)("item", feedRoot.children).map(function (item) {
            var children = item.children;
            var entry = { media: getMediaElements(children) };
            addConditionally(entry, "id", "guid", children);
            addConditionally(entry, "title", "title", children);
            addConditionally(entry, "link", "link", children);
            addConditionally(entry, "description", "description", children);
            var pubDate = fetch("pubDate", children);
            if (pubDate)
                entry.pubDate = new Date(pubDate);
            return entry;
        }),
    };
    addConditionally(feed, "title", "title", childs);
    addConditionally(feed, "link", "link", childs);
    addConditionally(feed, "description", "description", childs);
    var updated = fetch("lastBuildDate", childs);
    if (updated) {
        feed.updated = new Date(updated);
    }
    addConditionally(feed, "author", "managingEditor", childs, true);
    return feed;
}
var MEDIA_KEYS_STRING = ["url", "type", "lang"];
var MEDIA_KEYS_INT = [
    "fileSize",
    "bitrate",
    "framerate",
    "samplingrate",
    "channels",
    "duration",
    "height",
    "width",
];
/**
 * Get all media elements of a feed item.
 *
 * @param where Nodes to search in.
 * @returns Media elements.
 */
function getMediaElements(where) {
    return (0, legacy_js_1.getElementsByTagName)("media:content", where).map(function (elem) {
        var attribs = elem.attribs;
        var media = {
            medium: attribs["medium"],
            isDefault: !!attribs["isDefault"],
        };
        for (var _i = 0, MEDIA_KEYS_STRING_1 = MEDIA_KEYS_STRING; _i < MEDIA_KEYS_STRING_1.length; _i++) {
            var attrib = MEDIA_KEYS_STRING_1[_i];
            if (attribs[attrib]) {
                media[attrib] = attribs[attrib];
            }
        }
        for (var _a = 0, MEDIA_KEYS_INT_1 = MEDIA_KEYS_INT; _a < MEDIA_KEYS_INT_1.length; _a++) {
            var attrib = MEDIA_KEYS_INT_1[_a];
            if (attribs[attrib]) {
                media[attrib] = parseInt(attribs[attrib], 10);
            }
        }
        if (attribs["expression"]) {
            media.expression = attribs["expression"];
        }
        return media;
    });
}
/**
 * Get one element by tag name.
 *
 * @param tagName Tag name to look for
 * @param node Node to search in
 * @returns The element or null
 */
function getOneElement(tagName, node) {
    return (0, legacy_js_1.getElementsByTagName)(tagName, node, true, 1)[0];
}
/**
 * Get the text content of an element with a certain tag name.
 *
 * @param tagName Tag name to look for.
 * @param where Node to search in.
 * @param recurse Whether to recurse into child nodes.
 * @returns The text content of the element.
 */
function fetch(tagName, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    return (0, stringify_js_1.textContent)((0, legacy_js_1.getElementsByTagName)(tagName, where, recurse, 1)).trim();
}
/**
 * Adds a property to an object if it has a value.
 *
 * @param obj Object to be extended
 * @param prop Property name
 * @param tagName Tag name that contains the conditionally added property
 * @param where Element to search for the property
 * @param recurse Whether to recurse into child nodes.
 */
function addConditionally(obj, prop, tagName, where, recurse) {
    if (recurse === void 0) { recurse = false; }
    var val = fetch(tagName, where, recurse);
    if (val)
        obj[prop] = val;
}
/**
 * Checks if an element is a feed root node.
 *
 * @param value The name of the element to check.
 * @returns Whether an element is a feed root node.
 */
function isValidFeed(value) {
    return value === "rss" || value === "feed" || value === "rdf:RDF";
}

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.hasChildren = exports.isDocument = exports.isComment = exports.isText = exports.isCDATA = exports.isTag = void 0;
	__exportStar(stringify$2, exports);
	__exportStar(traversal, exports);
	__exportStar(manipulation$1, exports);
	__exportStar(querying, exports);
	__exportStar(legacy, exports);
	__exportStar(helpers$1, exports);
	__exportStar(feeds, exports);
	/** @deprecated Use these methods from `domhandler` directly. */
	var domhandler_1 = lib$7;
	Object.defineProperty(exports, "isTag", { enumerable: true, get: function () { return domhandler_1.isTag; } });
	Object.defineProperty(exports, "isCDATA", { enumerable: true, get: function () { return domhandler_1.isCDATA; } });
	Object.defineProperty(exports, "isText", { enumerable: true, get: function () { return domhandler_1.isText; } });
	Object.defineProperty(exports, "isComment", { enumerable: true, get: function () { return domhandler_1.isComment; } });
	Object.defineProperty(exports, "isDocument", { enumerable: true, get: function () { return domhandler_1.isDocument; } });
	Object.defineProperty(exports, "hasChildren", { enumerable: true, get: function () { return domhandler_1.hasChildren; } });
	
} (lib$8));

var __assign$1 = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign$1 = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};
var __createBinding$5 = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault$5 = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar$5 = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$5(result, mod, k);
    __setModuleDefault$5(result, mod);
    return result;
};
Object.defineProperty(_static, "__esModule", { value: true });
_static.merge = _static.contains = _static.root = _static.parseHTML = _static.text = _static.xml = _static.html = void 0;
var domutils_1$4 = lib$8;
var options_js_1$1 = __importStar$5(options);
/**
 * Helper function to render a DOM.
 *
 * @param that - Cheerio instance to render.
 * @param dom - The DOM to render. Defaults to `that`'s root.
 * @param options - Options for rendering.
 * @returns The rendered document.
 */
function render(that, dom, options) {
    if (!that)
        return '';
    return that(dom !== null && dom !== void 0 ? dom : that._root.children, null, undefined, options).toString();
}
/**
 * Checks if a passed object is an options object.
 *
 * @param dom - Object to check if it is an options object.
 * @returns Whether the object is an options object.
 */
function isOptions(dom, options) {
    return (!options &&
        typeof dom === 'object' &&
        dom != null &&
        !('length' in dom) &&
        !('type' in dom));
}
function html$2(dom, options) {
    /*
     * Be flexible about parameters, sometimes we call html(),
     * with options as only parameter
     * check dom argument for dom element specific properties
     * assume there is no 'length' or 'type' properties in the options object
     */
    var toRender = isOptions(dom) ? ((options = dom), undefined) : dom;
    /*
     * Sometimes `$.html()` is used without preloading html,
     * so fallback non-existing options to the default ones.
     */
    var opts = __assign$1(__assign$1(__assign$1({}, options_js_1$1.default), this === null || this === void 0 ? void 0 : this._options), (0, options_js_1$1.flatten)(options !== null && options !== void 0 ? options : {}));
    return render(this, toRender, opts);
}
_static.html = html$2;
/**
 * Render the document as XML.
 *
 * @param dom - Element to render.
 * @returns THe rendered document.
 */
function xml(dom) {
    var options = __assign$1(__assign$1({}, this._options), { xmlMode: true });
    return render(this, dom, options);
}
_static.xml = xml;
/**
 * Render the document as text.
 *
 * This returns the `textContent` of the passed elements. The result will
 * include the contents of `script` and `stype` elements. To avoid this, use
 * `.prop('innerText')` instead.
 *
 * @param elements - Elements to render.
 * @returns The rendered document.
 */
function text$1(elements) {
    var elems = elements ? elements : this ? this.root() : [];
    var ret = '';
    for (var i = 0; i < elems.length; i++) {
        ret += (0, domutils_1$4.textContent)(elems[i]);
    }
    return ret;
}
_static.text = text$1;
function parseHTML(data, context, keepScripts) {
    if (keepScripts === void 0) { keepScripts = typeof context === 'boolean' ? context : false; }
    if (!data || typeof data !== 'string') {
        return null;
    }
    if (typeof context === 'boolean') {
        keepScripts = context;
    }
    var parsed = this.load(data, options_js_1$1.default, false);
    if (!keepScripts) {
        parsed('script').remove();
    }
    /*
     * The `children` array is used by Cheerio internally to group elements that
     * share the same parents. When nodes created through `parseHTML` are
     * inserted into previously-existing DOM structures, they will be removed
     * from the `children` array. The results of `parseHTML` should remain
     * constant across these operations, so a shallow copy should be returned.
     */
    return parsed.root()[0].children.slice();
}
_static.parseHTML = parseHTML;
/**
 * Sometimes you need to work with the top-level root element. To query it, you
 * can use `$.root()`.
 *
 * @example
 *
 * ```js
 * $.root().append('<ul id="vegetables"></ul>').html();
 * //=> <ul id="fruits">...</ul><ul id="vegetables"></ul>
 * ```
 *
 * @returns Cheerio instance wrapping the root node.
 * @alias Cheerio.root
 */
function root() {
    return this(this._root);
}
_static.root = root;
/**
 * Checks to see if the `contained` DOM element is a descendant of the
 * `container` DOM element.
 *
 * @param container - Potential parent node.
 * @param contained - Potential child node.
 * @returns Indicates if the nodes contain one another.
 * @alias Cheerio.contains
 * @see {@link https://api.jquery.com/jQuery.contains/}
 */
function contains(container, contained) {
    // According to the jQuery API, an element does not "contain" itself
    if (contained === container) {
        return false;
    }
    /*
     * Step up the descendants, stopping when the root element is reached
     * (signaled by `.parent` returning a reference to the same object)
     */
    var next = contained;
    while (next && next !== next.parent) {
        next = next.parent;
        if (next === container) {
            return true;
        }
    }
    return false;
}
_static.contains = contains;
/**
 * $.merge().
 *
 * @param arr1 - First array.
 * @param arr2 - Second array.
 * @returns `arr1`, with elements of `arr2` inserted.
 * @alias Cheerio.merge
 * @see {@link https://api.jquery.com/jQuery.merge/}
 */
function merge(arr1, arr2) {
    if (!isArrayLike(arr1) || !isArrayLike(arr2)) {
        return;
    }
    var newLength = arr1.length;
    var len = +arr2.length;
    for (var i = 0; i < len; i++) {
        arr1[newLength++] = arr2[i];
    }
    arr1.length = newLength;
    return arr1;
}
_static.merge = merge;
/**
 * Checks if an object is array-like.
 *
 * @param item - Item to check.
 * @returns Indicates if the item is array-like.
 */
function isArrayLike(item) {
    if (Array.isArray(item)) {
        return true;
    }
    if (typeof item !== 'object' ||
        !Object.prototype.hasOwnProperty.call(item, 'length') ||
        typeof item.length !== 'number' ||
        item.length < 0) {
        return false;
    }
    for (var i = 0; i < item.length; i++) {
        if (!(i in item)) {
            return false;
        }
    }
    return true;
}

var cheerio$1 = {};

var attributes$2 = {};

var utils = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isHtml = exports.cloneDom = exports.domEach = exports.cssCase = exports.camelCase = exports.isCheerio = exports.isTag = void 0;
	var domhandler_1 = lib$7;
	/**
	 * Check if the DOM element is a tag.
	 *
	 * `isTag(type)` includes `<script>` and `<style>` tags.
	 *
	 * @private
	 * @category Utils
	 * @param type - The DOM node to check.
	 * @returns Whether the node is a tag.
	 */
	var domhandler_2 = lib$7;
	Object.defineProperty(exports, "isTag", { enumerable: true, get: function () { return domhandler_2.isTag; } });
	/**
	 * Checks if an object is a Cheerio instance.
	 *
	 * @category Utils
	 * @param maybeCheerio - The object to check.
	 * @returns Whether the object is a Cheerio instance.
	 */
	function isCheerio(maybeCheerio) {
	    return maybeCheerio.cheerio != null;
	}
	exports.isCheerio = isCheerio;
	/**
	 * Convert a string to camel case notation.
	 *
	 * @private
	 * @category Utils
	 * @param str - The string to be converted.
	 * @returns String in camel case notation.
	 */
	function camelCase(str) {
	    return str.replace(/[_.-](\w|$)/g, function (_, x) { return x.toUpperCase(); });
	}
	exports.camelCase = camelCase;
	/**
	 * Convert a string from camel case to "CSS case", where word boundaries are
	 * described by hyphens ("-") and all characters are lower-case.
	 *
	 * @private
	 * @category Utils
	 * @param str - The string to be converted.
	 * @returns String in "CSS case".
	 */
	function cssCase(str) {
	    return str.replace(/[A-Z]/g, '-$&').toLowerCase();
	}
	exports.cssCase = cssCase;
	/**
	 * Iterate over each DOM element without creating intermediary Cheerio instances.
	 *
	 * This is indented for use internally to avoid otherwise unnecessary memory
	 * pressure introduced by _make.
	 *
	 * @category Utils
	 * @param array - The array to iterate over.
	 * @param fn - Function to call.
	 * @returns The original instance.
	 */
	function domEach(array, fn) {
	    var len = array.length;
	    for (var i = 0; i < len; i++)
	        fn(array[i], i);
	    return array;
	}
	exports.domEach = domEach;
	/**
	 * Create a deep copy of the given DOM structure. Sets the parents of the copies
	 * of the passed nodes to `null`.
	 *
	 * @private
	 * @category Utils
	 * @param dom - The domhandler-compliant DOM structure.
	 * @returns - The cloned DOM.
	 */
	function cloneDom(dom) {
	    var clone = 'length' in dom
	        ? Array.prototype.map.call(dom, function (el) { return (0, domhandler_1.cloneNode)(el, true); })
	        : [(0, domhandler_1.cloneNode)(dom, true)];
	    // Add a root node around the cloned nodes
	    var root = new domhandler_1.Document(clone);
	    clone.forEach(function (node) {
	        node.parent = root;
	    });
	    return clone;
	}
	exports.cloneDom = cloneDom;
	var CharacterCodes;
	(function (CharacterCodes) {
	    CharacterCodes[CharacterCodes["LowerA"] = 97] = "LowerA";
	    CharacterCodes[CharacterCodes["LowerZ"] = 122] = "LowerZ";
	    CharacterCodes[CharacterCodes["UpperA"] = 65] = "UpperA";
	    CharacterCodes[CharacterCodes["UpperZ"] = 90] = "UpperZ";
	    CharacterCodes[CharacterCodes["Exclamation"] = 33] = "Exclamation";
	})(CharacterCodes || (CharacterCodes = {}));
	/**
	 * Check if string is HTML.
	 *
	 * Tests for a `<` within a string, immediate followed by a letter and
	 * eventually followed by a `>`.
	 *
	 * @private
	 * @category Utils
	 * @param str - The string to check.
	 * @returns Indicates if `str` is HTML.
	 */
	function isHtml(str) {
	    var tagStart = str.indexOf('<');
	    if (tagStart < 0 || tagStart > str.length - 3)
	        return false;
	    var tagChar = str.charCodeAt(tagStart + 1);
	    return (((tagChar >= CharacterCodes.LowerA && tagChar <= CharacterCodes.LowerZ) ||
	        (tagChar >= CharacterCodes.UpperA && tagChar <= CharacterCodes.UpperZ) ||
	        tagChar === CharacterCodes.Exclamation) &&
	        str.includes('>', tagStart + 2));
	}
	exports.isHtml = isHtml;
	
} (utils));

/**
 * Methods for getting and modifying attributes.
 *
 * @module cheerio/attributes
 */
Object.defineProperty(attributes$2, "__esModule", { value: true });
attributes$2.toggleClass = attributes$2.removeClass = attributes$2.addClass = attributes$2.hasClass = attributes$2.removeAttr = attributes$2.val = attributes$2.data = attributes$2.prop = attributes$2.attr = void 0;
var static_js_1$2 = _static;
var utils_js_1$5 = utils;
var domutils_1$3 = lib$8;
var hasOwn = Object.prototype.hasOwnProperty;
var rspace = /\s+/;
var dataAttrPrefix = 'data-';
/*
 * Lookup table for coercing string data-* attributes to their corresponding
 * JavaScript primitives
 */
var primitives = {
    null: null,
    true: true,
    false: false,
};
// Attributes that are booleans
var rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i;
// Matches strings that look like JSON objects or arrays
var rbrace = /^{[^]*}$|^\[[^]*]$/;
function getAttr(elem, name, xmlMode) {
    var _a;
    if (!elem || !(0, utils_js_1$5.isTag)(elem))
        return undefined;
    (_a = elem.attribs) !== null && _a !== void 0 ? _a : (elem.attribs = {});
    // Return the entire attribs object if no attribute specified
    if (!name) {
        return elem.attribs;
    }
    if (hasOwn.call(elem.attribs, name)) {
        // Get the (decoded) attribute
        return !xmlMode && rboolean.test(name) ? name : elem.attribs[name];
    }
    // Mimic the DOM and return text content as value for `option's`
    if (elem.name === 'option' && name === 'value') {
        return (0, static_js_1$2.text)(elem.children);
    }
    // Mimic DOM with default value for radios/checkboxes
    if (elem.name === 'input' &&
        (elem.attribs['type'] === 'radio' || elem.attribs['type'] === 'checkbox') &&
        name === 'value') {
        return 'on';
    }
    return undefined;
}
/**
 * Sets the value of an attribute. The attribute will be deleted if the value is `null`.
 *
 * @private
 * @param el - The element to set the attribute on.
 * @param name - The attribute's name.
 * @param value - The attribute's value.
 */
function setAttr(el, name, value) {
    if (value === null) {
        removeAttribute(el, name);
    }
    else {
        el.attribs[name] = "".concat(value);
    }
}
function attr(name, value) {
    // Set the value (with attr map support)
    if (typeof name === 'object' || value !== undefined) {
        if (typeof value === 'function') {
            if (typeof name !== 'string') {
                {
                    throw new Error('Bad combination of arguments.');
                }
            }
            return (0, utils_js_1$5.domEach)(this, function (el, i) {
                if ((0, utils_js_1$5.isTag)(el))
                    setAttr(el, name, value.call(el, i, el.attribs[name]));
            });
        }
        return (0, utils_js_1$5.domEach)(this, function (el) {
            if (!(0, utils_js_1$5.isTag)(el))
                return;
            if (typeof name === 'object') {
                Object.keys(name).forEach(function (objName) {
                    var objValue = name[objName];
                    setAttr(el, objName, objValue);
                });
            }
            else {
                setAttr(el, name, value);
            }
        });
    }
    return arguments.length > 1
        ? this
        : getAttr(this[0], name, this.options.xmlMode);
}
attributes$2.attr = attr;
/**
 * Gets a node's prop.
 *
 * @private
 * @category Attributes
 * @param el - Element to get the prop of.
 * @param name - Name of the prop.
 * @returns The prop's value.
 */
function getProp(el, name, xmlMode) {
    if (!el || !(0, utils_js_1$5.isTag)(el))
        return;
    return name in el
        ? // @ts-expect-error TS doesn't like us accessing the value directly here.
            el[name]
        : !xmlMode && rboolean.test(name)
            ? getAttr(el, name, false) !== undefined
            : getAttr(el, name, xmlMode);
}
/**
 * Sets the value of a prop.
 *
 * @private
 * @param el - The element to set the prop on.
 * @param name - The prop's name.
 * @param value - The prop's value.
 */
function setProp(el, name, value, xmlMode) {
    if (name in el) {
        // @ts-expect-error Overriding value
        el[name] = value;
    }
    else {
        setAttr(el, name, !xmlMode && rboolean.test(name) ? (value ? '' : null) : "".concat(value));
    }
}
function prop(name, value) {
    var _this = this;
    var _a;
    if (typeof name === 'string' && value === undefined) {
        switch (name) {
            case 'style': {
                var property_1 = this.css();
                var keys = Object.keys(property_1);
                keys.forEach(function (p, i) {
                    property_1[i] = p;
                });
                property_1.length = keys.length;
                return property_1;
            }
            case 'tagName':
            case 'nodeName': {
                var el = this[0];
                return (0, utils_js_1$5.isTag)(el) ? el.name.toUpperCase() : undefined;
            }
            case 'href':
            case 'src': {
                var el = this[0];
                if (!(0, utils_js_1$5.isTag)(el)) {
                    return undefined;
                }
                var prop_1 = (_a = el.attribs) === null || _a === void 0 ? void 0 : _a[name];
                /* eslint-disable node/no-unsupported-features/node-builtins */
                if (typeof URL !== 'undefined' &&
                    ((name === 'href' && (el.tagName === 'a' || el.name === 'link')) ||
                        (name === 'src' &&
                            (el.tagName === 'img' ||
                                el.tagName === 'iframe' ||
                                el.tagName === 'audio' ||
                                el.tagName === 'video' ||
                                el.tagName === 'source'))) &&
                    prop_1 !== undefined &&
                    this.options.baseURI) {
                    return new URL(prop_1, this.options.baseURI).href;
                }
                /* eslint-enable node/no-unsupported-features/node-builtins */
                return prop_1;
            }
            case 'innerText':
                return (0, domutils_1$3.innerText)(this[0]);
            case 'textContent':
                return (0, domutils_1$3.textContent)(this[0]);
            case 'outerHTML':
                return this.clone().wrap('<container />').parent().html();
            case 'innerHTML':
                return this.html();
            default:
                return getProp(this[0], name, this.options.xmlMode);
        }
    }
    if (typeof name === 'object' || value !== undefined) {
        if (typeof value === 'function') {
            if (typeof name === 'object') {
                throw new Error('Bad combination of arguments.');
            }
            return (0, utils_js_1$5.domEach)(this, function (el, i) {
                if ((0, utils_js_1$5.isTag)(el)) {
                    setProp(el, name, value.call(el, i, getProp(el, name, _this.options.xmlMode)), _this.options.xmlMode);
                }
            });
        }
        return (0, utils_js_1$5.domEach)(this, function (el) {
            if (!(0, utils_js_1$5.isTag)(el))
                return;
            if (typeof name === 'object') {
                Object.keys(name).forEach(function (key) {
                    var val = name[key];
                    setProp(el, key, val, _this.options.xmlMode);
                });
            }
            else {
                setProp(el, name, value, _this.options.xmlMode);
            }
        });
    }
    return undefined;
}
attributes$2.prop = prop;
/**
 * Sets the value of a data attribute.
 *
 * @private
 * @param el - The element to set the data attribute on.
 * @param name - The data attribute's name.
 * @param value - The data attribute's value.
 */
function setData(el, name, value) {
    var _a;
    var elem = el;
    (_a = elem.data) !== null && _a !== void 0 ? _a : (elem.data = {});
    if (typeof name === 'object')
        Object.assign(elem.data, name);
    else if (typeof name === 'string' && value !== undefined) {
        elem.data[name] = value;
    }
}
/**
 * Read the specified attribute from the equivalent HTML5 `data-*` attribute,
 * and (if present) cache the value in the node's internal data store. If no
 * attribute name is specified, read _all_ HTML5 `data-*` attributes in this manner.
 *
 * @private
 * @category Attributes
 * @param el - Element to get the data attribute of.
 * @param name - Name of the data attribute.
 * @returns The data attribute's value, or a map with all of the data attributes.
 */
function readData(el, name) {
    var domNames;
    var jsNames;
    var value;
    if (name == null) {
        domNames = Object.keys(el.attribs).filter(function (attrName) {
            return attrName.startsWith(dataAttrPrefix);
        });
        jsNames = domNames.map(function (domName) {
            return (0, utils_js_1$5.camelCase)(domName.slice(dataAttrPrefix.length));
        });
    }
    else {
        domNames = [dataAttrPrefix + (0, utils_js_1$5.cssCase)(name)];
        jsNames = [name];
    }
    for (var idx = 0; idx < domNames.length; ++idx) {
        var domName = domNames[idx];
        var jsName = jsNames[idx];
        if (hasOwn.call(el.attribs, domName) &&
            !hasOwn.call(el.data, jsName)) {
            value = el.attribs[domName];
            if (hasOwn.call(primitives, value)) {
                value = primitives[value];
            }
            else if (value === String(Number(value))) {
                value = Number(value);
            }
            else if (rbrace.test(value)) {
                try {
                    value = JSON.parse(value);
                }
                catch (e) {
                    /* Ignore */
                }
            }
            el.data[jsName] = value;
        }
    }
    return name == null ? el.data : value;
}
function data(name, value) {
    var _a;
    var elem = this[0];
    if (!elem || !(0, utils_js_1$5.isTag)(elem))
        return;
    var dataEl = elem;
    (_a = dataEl.data) !== null && _a !== void 0 ? _a : (dataEl.data = {});
    // Return the entire data object if no data specified
    if (!name) {
        return readData(dataEl);
    }
    // Set the value (with attr map support)
    if (typeof name === 'object' || value !== undefined) {
        (0, utils_js_1$5.domEach)(this, function (el) {
            if ((0, utils_js_1$5.isTag)(el)) {
                if (typeof name === 'object')
                    setData(el, name);
                else
                    setData(el, name, value);
            }
        });
        return this;
    }
    if (hasOwn.call(dataEl.data, name)) {
        return dataEl.data[name];
    }
    return readData(dataEl, name);
}
attributes$2.data = data;
function val(value) {
    var querying = arguments.length === 0;
    var element = this[0];
    if (!element || !(0, utils_js_1$5.isTag)(element))
        return querying ? undefined : this;
    switch (element.name) {
        case 'textarea':
            return this.text(value);
        case 'select': {
            var option = this.find('option:selected');
            if (!querying) {
                if (this.attr('multiple') == null && typeof value === 'object') {
                    return this;
                }
                this.find('option').removeAttr('selected');
                var values = typeof value !== 'object' ? [value] : value;
                for (var i = 0; i < values.length; i++) {
                    this.find("option[value=\"".concat(values[i], "\"]")).attr('selected', '');
                }
                return this;
            }
            return this.attr('multiple')
                ? option.toArray().map(function (el) { return (0, static_js_1$2.text)(el.children); })
                : option.attr('value');
        }
        case 'input':
        case 'option':
            return querying
                ? this.attr('value')
                : this.attr('value', value);
    }
    return undefined;
}
attributes$2.val = val;
/**
 * Remove an attribute.
 *
 * @private
 * @param elem - Node to remove attribute from.
 * @param name - Name of the attribute to remove.
 */
function removeAttribute(elem, name) {
    if (!elem.attribs || !hasOwn.call(elem.attribs, name))
        return;
    delete elem.attribs[name];
}
/**
 * Splits a space-separated list of names to individual names.
 *
 * @category Attributes
 * @param names - Names to split.
 * @returns - Split names.
 */
function splitNames(names) {
    return names ? names.trim().split(rspace) : [];
}
/**
 * Method for removing attributes by `name`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').removeAttr('class').html();
 * //=> <li>Pear</li>
 *
 * $('.apple').attr('id', 'favorite');
 * $('.apple').removeAttr('id class').html();
 * //=> <li>Apple</li>
 * ```
 *
 * @param name - Name of the attribute.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/removeAttr/}
 */
function removeAttr(name) {
    var attrNames = splitNames(name);
    var _loop_1 = function (i) {
        (0, utils_js_1$5.domEach)(this_1, function (elem) {
            if ((0, utils_js_1$5.isTag)(elem))
                removeAttribute(elem, attrNames[i]);
        });
    };
    var this_1 = this;
    for (var i = 0; i < attrNames.length; i++) {
        _loop_1(i);
    }
    return this;
}
attributes$2.removeAttr = removeAttr;
/**
 * Check to see if _any_ of the matched elements have the given `className`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').hasClass('pear');
 * //=> true
 *
 * $('apple').hasClass('fruit');
 * //=> false
 *
 * $('li').hasClass('pear');
 * //=> true
 * ```
 *
 * @param className - Name of the class.
 * @returns Indicates if an element has the given `className`.
 * @see {@link https://api.jquery.com/hasClass/}
 */
function hasClass(className) {
    return this.toArray().some(function (elem) {
        var clazz = (0, utils_js_1$5.isTag)(elem) && elem.attribs['class'];
        var idx = -1;
        if (clazz && className.length) {
            while ((idx = clazz.indexOf(className, idx + 1)) > -1) {
                var end = idx + className.length;
                if ((idx === 0 || rspace.test(clazz[idx - 1])) &&
                    (end === clazz.length || rspace.test(clazz[end]))) {
                    return true;
                }
            }
        }
        return false;
    });
}
attributes$2.hasClass = hasClass;
/**
 * Adds class(es) to all of the matched elements. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').addClass('fruit').html();
 * //=> <li class="pear fruit">Pear</li>
 *
 * $('.apple').addClass('fruit red').html();
 * //=> <li class="apple fruit red">Apple</li>
 * ```
 *
 * @param value - Name of new class.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/addClass/}
 */
function addClass(value) {
    // Support functions
    if (typeof value === 'function') {
        return (0, utils_js_1$5.domEach)(this, function (el, i) {
            if ((0, utils_js_1$5.isTag)(el)) {
                var className = el.attribs['class'] || '';
                addClass.call([el], value.call(el, i, className));
            }
        });
    }
    // Return if no value or not a string or function
    if (!value || typeof value !== 'string')
        return this;
    var classNames = value.split(rspace);
    var numElements = this.length;
    for (var i = 0; i < numElements; i++) {
        var el = this[i];
        // If selected element isn't a tag, move on
        if (!(0, utils_js_1$5.isTag)(el))
            continue;
        // If we don't already have classes — always set xmlMode to false here, as it doesn't matter for classes
        var className = getAttr(el, 'class', false);
        if (!className) {
            setAttr(el, 'class', classNames.join(' ').trim());
        }
        else {
            var setClass = " ".concat(className, " ");
            // Check if class already exists
            for (var j = 0; j < classNames.length; j++) {
                var appendClass = "".concat(classNames[j], " ");
                if (!setClass.includes(" ".concat(appendClass)))
                    setClass += appendClass;
            }
            setAttr(el, 'class', setClass.trim());
        }
    }
    return this;
}
attributes$2.addClass = addClass;
/**
 * Removes one or more space-separated classes from the selected elements. If no
 * `className` is defined, all classes will be removed. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.pear').removeClass('pear').html();
 * //=> <li class="">Pear</li>
 *
 * $('.apple').addClass('red').removeClass().html();
 * //=> <li class="">Apple</li>
 * ```
 *
 * @param name - Name of the class. If not specified, removes all elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/removeClass/}
 */
function removeClass(name) {
    // Handle if value is a function
    if (typeof name === 'function') {
        return (0, utils_js_1$5.domEach)(this, function (el, i) {
            if ((0, utils_js_1$5.isTag)(el)) {
                removeClass.call([el], name.call(el, i, el.attribs['class'] || ''));
            }
        });
    }
    var classes = splitNames(name);
    var numClasses = classes.length;
    var removeAll = arguments.length === 0;
    return (0, utils_js_1$5.domEach)(this, function (el) {
        if (!(0, utils_js_1$5.isTag)(el))
            return;
        if (removeAll) {
            // Short circuit the remove all case as this is the nice one
            el.attribs['class'] = '';
        }
        else {
            var elClasses = splitNames(el.attribs['class']);
            var changed = false;
            for (var j = 0; j < numClasses; j++) {
                var index = elClasses.indexOf(classes[j]);
                if (index >= 0) {
                    elClasses.splice(index, 1);
                    changed = true;
                    /*
                     * We have to do another pass to ensure that there are not duplicate
                     * classes listed
                     */
                    j--;
                }
            }
            if (changed) {
                el.attribs['class'] = elClasses.join(' ');
            }
        }
    });
}
attributes$2.removeClass = removeClass;
/**
 * Add or remove class(es) from the matched elements, depending on either the
 * class's presence or the value of the switch argument. Also accepts a `function`.
 *
 * @category Attributes
 * @example
 *
 * ```js
 * $('.apple.green').toggleClass('fruit green red').html();
 * //=> <li class="apple fruit red">Apple</li>
 *
 * $('.apple.green').toggleClass('fruit green red', true).html();
 * //=> <li class="apple green fruit red">Apple</li>
 * ```
 *
 * @param value - Name of the class. Can also be a function.
 * @param stateVal - If specified the state of the class.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/toggleClass/}
 */
function toggleClass(value, stateVal) {
    // Support functions
    if (typeof value === 'function') {
        return (0, utils_js_1$5.domEach)(this, function (el, i) {
            if ((0, utils_js_1$5.isTag)(el)) {
                toggleClass.call([el], value.call(el, i, el.attribs['class'] || '', stateVal), stateVal);
            }
        });
    }
    // Return if no value or not a string or function
    if (!value || typeof value !== 'string')
        return this;
    var classNames = value.split(rspace);
    var numClasses = classNames.length;
    var state = typeof stateVal === 'boolean' ? (stateVal ? 1 : -1) : 0;
    var numElements = this.length;
    for (var i = 0; i < numElements; i++) {
        var el = this[i];
        // If selected element isn't a tag, move on
        if (!(0, utils_js_1$5.isTag)(el))
            continue;
        var elementClasses = splitNames(el.attribs['class']);
        // Check if class already exists
        for (var j = 0; j < numClasses; j++) {
            // Check if the class name is currently defined
            var index = elementClasses.indexOf(classNames[j]);
            // Add if stateValue === true or we are toggling and there is no value
            if (state >= 0 && index < 0) {
                elementClasses.push(classNames[j]);
            }
            else if (state <= 0 && index >= 0) {
                // Otherwise remove but only if the item exists
                elementClasses.splice(index, 1);
            }
        }
        el.attribs['class'] = elementClasses.join(' ');
    }
    return this;
}
attributes$2.toggleClass = toggleClass;

var traversing = {};

var lib$3 = {};

var SelectorType;
(function (SelectorType) {
    SelectorType["Attribute"] = "attribute";
    SelectorType["Pseudo"] = "pseudo";
    SelectorType["PseudoElement"] = "pseudo-element";
    SelectorType["Tag"] = "tag";
    SelectorType["Universal"] = "universal";
    // Traversals
    SelectorType["Adjacent"] = "adjacent";
    SelectorType["Child"] = "child";
    SelectorType["Descendant"] = "descendant";
    SelectorType["Parent"] = "parent";
    SelectorType["Sibling"] = "sibling";
    SelectorType["ColumnCombinator"] = "column-combinator";
})(SelectorType || (SelectorType = {}));
/**
 * Modes for ignore case.
 *
 * This could be updated to an enum, and the object is
 * the current stand-in that will allow code to be updated
 * without big changes.
 */
const IgnoreCaseMode = {
    Unknown: null,
    QuirksMode: "quirks",
    IgnoreCase: true,
    CaseSensitive: false,
};
var AttributeAction;
(function (AttributeAction) {
    AttributeAction["Any"] = "any";
    AttributeAction["Element"] = "element";
    AttributeAction["End"] = "end";
    AttributeAction["Equals"] = "equals";
    AttributeAction["Exists"] = "exists";
    AttributeAction["Hyphen"] = "hyphen";
    AttributeAction["Not"] = "not";
    AttributeAction["Start"] = "start";
})(AttributeAction || (AttributeAction = {}));

const reName = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const reEscape = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
const actionTypes = new Map([
    [126 /* Tilde */, AttributeAction.Element],
    [94 /* Circumflex */, AttributeAction.Start],
    [36 /* Dollar */, AttributeAction.End],
    [42 /* Asterisk */, AttributeAction.Any],
    [33 /* ExclamationMark */, AttributeAction.Not],
    [124 /* Pipe */, AttributeAction.Hyphen],
]);
// Pseudos, whose data property is parsed as well.
const unpackPseudos = new Set([
    "has",
    "not",
    "matches",
    "is",
    "where",
    "host",
    "host-context",
]);
/**
 * Checks whether a specific selector is a traversal.
 * This is useful eg. in swapping the order of elements that
 * are not traversals.
 *
 * @param selector Selector to check.
 */
function isTraversal$1(selector) {
    switch (selector.type) {
        case SelectorType.Adjacent:
        case SelectorType.Child:
        case SelectorType.Descendant:
        case SelectorType.Parent:
        case SelectorType.Sibling:
        case SelectorType.ColumnCombinator:
            return true;
        default:
            return false;
    }
}
const stripQuotesFromPseudos = new Set(["contains", "icontains"]);
// Unescape function taken from https://github.com/jquery/sizzle/blob/master/src/sizzle.js#L152
function funescape(_, escaped, escapedWhitespace) {
    const high = parseInt(escaped, 16) - 0x10000;
    // NaN means non-codepoint
    return high !== high || escapedWhitespace
        ? escaped
        : high < 0
            ? // BMP codepoint
                String.fromCharCode(high + 0x10000)
            : // Supplemental Plane codepoint (surrogate pair)
                String.fromCharCode((high >> 10) | 0xd800, (high & 0x3ff) | 0xdc00);
}
function unescapeCSS(str) {
    return str.replace(reEscape, funescape);
}
function isQuote(c) {
    return c === 39 /* SingleQuote */ || c === 34 /* DoubleQuote */;
}
function isWhitespace$1(c) {
    return (c === 32 /* Space */ ||
        c === 9 /* Tab */ ||
        c === 10 /* NewLine */ ||
        c === 12 /* FormFeed */ ||
        c === 13 /* CarriageReturn */);
}
/**
 * Parses `selector`, optionally with the passed `options`.
 *
 * @param selector Selector to parse.
 * @param options Options for parsing.
 * @returns Returns a two-dimensional array.
 * The first dimension represents selectors separated by commas (eg. `sub1, sub2`),
 * the second contains the relevant tokens for that selector.
 */
function parse$4(selector) {
    const subselects = [];
    const endIndex = parseSelector(subselects, `${selector}`, 0);
    if (endIndex < selector.length) {
        throw new Error(`Unmatched selector: ${selector.slice(endIndex)}`);
    }
    return subselects;
}
function parseSelector(subselects, selector, selectorIndex) {
    let tokens = [];
    function getName(offset) {
        const match = selector.slice(selectorIndex + offset).match(reName);
        if (!match) {
            throw new Error(`Expected name, found ${selector.slice(selectorIndex)}`);
        }
        const [name] = match;
        selectorIndex += offset + name.length;
        return unescapeCSS(name);
    }
    function stripWhitespace(offset) {
        selectorIndex += offset;
        while (selectorIndex < selector.length &&
            isWhitespace$1(selector.charCodeAt(selectorIndex))) {
            selectorIndex++;
        }
    }
    function readValueWithParenthesis() {
        selectorIndex += 1;
        const start = selectorIndex;
        let counter = 1;
        for (; counter > 0 && selectorIndex < selector.length; selectorIndex++) {
            if (selector.charCodeAt(selectorIndex) ===
                40 /* LeftParenthesis */ &&
                !isEscaped(selectorIndex)) {
                counter++;
            }
            else if (selector.charCodeAt(selectorIndex) ===
                41 /* RightParenthesis */ &&
                !isEscaped(selectorIndex)) {
                counter--;
            }
        }
        if (counter) {
            throw new Error("Parenthesis not matched");
        }
        return unescapeCSS(selector.slice(start, selectorIndex - 1));
    }
    function isEscaped(pos) {
        let slashCount = 0;
        while (selector.charCodeAt(--pos) === 92 /* BackSlash */)
            slashCount++;
        return (slashCount & 1) === 1;
    }
    function ensureNotTraversal() {
        if (tokens.length > 0 && isTraversal$1(tokens[tokens.length - 1])) {
            throw new Error("Did not expect successive traversals.");
        }
    }
    function addTraversal(type) {
        if (tokens.length > 0 &&
            tokens[tokens.length - 1].type === SelectorType.Descendant) {
            tokens[tokens.length - 1].type = type;
            return;
        }
        ensureNotTraversal();
        tokens.push({ type });
    }
    function addSpecialAttribute(name, action) {
        tokens.push({
            type: SelectorType.Attribute,
            name,
            action,
            value: getName(1),
            namespace: null,
            ignoreCase: "quirks",
        });
    }
    /**
     * We have finished parsing the current part of the selector.
     *
     * Remove descendant tokens at the end if they exist,
     * and return the last index, so that parsing can be
     * picked up from here.
     */
    function finalizeSubselector() {
        if (tokens.length &&
            tokens[tokens.length - 1].type === SelectorType.Descendant) {
            tokens.pop();
        }
        if (tokens.length === 0) {
            throw new Error("Empty sub-selector");
        }
        subselects.push(tokens);
    }
    stripWhitespace(0);
    if (selector.length === selectorIndex) {
        return selectorIndex;
    }
    loop: while (selectorIndex < selector.length) {
        const firstChar = selector.charCodeAt(selectorIndex);
        switch (firstChar) {
            // Whitespace
            case 32 /* Space */:
            case 9 /* Tab */:
            case 10 /* NewLine */:
            case 12 /* FormFeed */:
            case 13 /* CarriageReturn */: {
                if (tokens.length === 0 ||
                    tokens[0].type !== SelectorType.Descendant) {
                    ensureNotTraversal();
                    tokens.push({ type: SelectorType.Descendant });
                }
                stripWhitespace(1);
                break;
            }
            // Traversals
            case 62 /* GreaterThan */: {
                addTraversal(SelectorType.Child);
                stripWhitespace(1);
                break;
            }
            case 60 /* LessThan */: {
                addTraversal(SelectorType.Parent);
                stripWhitespace(1);
                break;
            }
            case 126 /* Tilde */: {
                addTraversal(SelectorType.Sibling);
                stripWhitespace(1);
                break;
            }
            case 43 /* Plus */: {
                addTraversal(SelectorType.Adjacent);
                stripWhitespace(1);
                break;
            }
            // Special attribute selectors: .class, #id
            case 46 /* Period */: {
                addSpecialAttribute("class", AttributeAction.Element);
                break;
            }
            case 35 /* Hash */: {
                addSpecialAttribute("id", AttributeAction.Equals);
                break;
            }
            case 91 /* LeftSquareBracket */: {
                stripWhitespace(1);
                // Determine attribute name and namespace
                let name;
                let namespace = null;
                if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */) {
                    // Equivalent to no namespace
                    name = getName(1);
                }
                else if (selector.startsWith("*|", selectorIndex)) {
                    namespace = "*";
                    name = getName(2);
                }
                else {
                    name = getName(0);
                    if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ &&
                        selector.charCodeAt(selectorIndex + 1) !==
                            61 /* Equal */) {
                        namespace = name;
                        name = getName(1);
                    }
                }
                stripWhitespace(0);
                // Determine comparison operation
                let action = AttributeAction.Exists;
                const possibleAction = actionTypes.get(selector.charCodeAt(selectorIndex));
                if (possibleAction) {
                    action = possibleAction;
                    if (selector.charCodeAt(selectorIndex + 1) !==
                        61 /* Equal */) {
                        throw new Error("Expected `=`");
                    }
                    stripWhitespace(2);
                }
                else if (selector.charCodeAt(selectorIndex) === 61 /* Equal */) {
                    action = AttributeAction.Equals;
                    stripWhitespace(1);
                }
                // Determine value
                let value = "";
                let ignoreCase = null;
                if (action !== "exists") {
                    if (isQuote(selector.charCodeAt(selectorIndex))) {
                        const quote = selector.charCodeAt(selectorIndex);
                        let sectionEnd = selectorIndex + 1;
                        while (sectionEnd < selector.length &&
                            (selector.charCodeAt(sectionEnd) !== quote ||
                                isEscaped(sectionEnd))) {
                            sectionEnd += 1;
                        }
                        if (selector.charCodeAt(sectionEnd) !== quote) {
                            throw new Error("Attribute value didn't end");
                        }
                        value = unescapeCSS(selector.slice(selectorIndex + 1, sectionEnd));
                        selectorIndex = sectionEnd + 1;
                    }
                    else {
                        const valueStart = selectorIndex;
                        while (selectorIndex < selector.length &&
                            ((!isWhitespace$1(selector.charCodeAt(selectorIndex)) &&
                                selector.charCodeAt(selectorIndex) !==
                                    93 /* RightSquareBracket */) ||
                                isEscaped(selectorIndex))) {
                            selectorIndex += 1;
                        }
                        value = unescapeCSS(selector.slice(valueStart, selectorIndex));
                    }
                    stripWhitespace(0);
                    // See if we have a force ignore flag
                    const forceIgnore = selector.charCodeAt(selectorIndex) | 0x20;
                    // If the forceIgnore flag is set (either `i` or `s`), use that value
                    if (forceIgnore === 115 /* LowerS */) {
                        ignoreCase = false;
                        stripWhitespace(1);
                    }
                    else if (forceIgnore === 105 /* LowerI */) {
                        ignoreCase = true;
                        stripWhitespace(1);
                    }
                }
                if (selector.charCodeAt(selectorIndex) !==
                    93 /* RightSquareBracket */) {
                    throw new Error("Attribute selector didn't terminate");
                }
                selectorIndex += 1;
                const attributeSelector = {
                    type: SelectorType.Attribute,
                    name,
                    action,
                    value,
                    namespace,
                    ignoreCase,
                };
                tokens.push(attributeSelector);
                break;
            }
            case 58 /* Colon */: {
                if (selector.charCodeAt(selectorIndex + 1) === 58 /* Colon */) {
                    tokens.push({
                        type: SelectorType.PseudoElement,
                        name: getName(2).toLowerCase(),
                        data: selector.charCodeAt(selectorIndex) ===
                            40 /* LeftParenthesis */
                            ? readValueWithParenthesis()
                            : null,
                    });
                    continue;
                }
                const name = getName(1).toLowerCase();
                let data = null;
                if (selector.charCodeAt(selectorIndex) ===
                    40 /* LeftParenthesis */) {
                    if (unpackPseudos.has(name)) {
                        if (isQuote(selector.charCodeAt(selectorIndex + 1))) {
                            throw new Error(`Pseudo-selector ${name} cannot be quoted`);
                        }
                        data = [];
                        selectorIndex = parseSelector(data, selector, selectorIndex + 1);
                        if (selector.charCodeAt(selectorIndex) !==
                            41 /* RightParenthesis */) {
                            throw new Error(`Missing closing parenthesis in :${name} (${selector})`);
                        }
                        selectorIndex += 1;
                    }
                    else {
                        data = readValueWithParenthesis();
                        if (stripQuotesFromPseudos.has(name)) {
                            const quot = data.charCodeAt(0);
                            if (quot === data.charCodeAt(data.length - 1) &&
                                isQuote(quot)) {
                                data = data.slice(1, -1);
                            }
                        }
                        data = unescapeCSS(data);
                    }
                }
                tokens.push({ type: SelectorType.Pseudo, name, data });
                break;
            }
            case 44 /* Comma */: {
                finalizeSubselector();
                tokens = [];
                stripWhitespace(1);
                break;
            }
            default: {
                if (selector.startsWith("/*", selectorIndex)) {
                    const endIndex = selector.indexOf("*/", selectorIndex + 2);
                    if (endIndex < 0) {
                        throw new Error("Comment was not terminated");
                    }
                    selectorIndex = endIndex + 2;
                    // Remove leading whitespace
                    if (tokens.length === 0) {
                        stripWhitespace(0);
                    }
                    break;
                }
                let namespace = null;
                let name;
                if (firstChar === 42 /* Asterisk */) {
                    selectorIndex += 1;
                    name = "*";
                }
                else if (firstChar === 124 /* Pipe */) {
                    name = "";
                    if (selector.charCodeAt(selectorIndex + 1) === 124 /* Pipe */) {
                        addTraversal(SelectorType.ColumnCombinator);
                        stripWhitespace(2);
                        break;
                    }
                }
                else if (reName.test(selector.slice(selectorIndex))) {
                    name = getName(0);
                }
                else {
                    break loop;
                }
                if (selector.charCodeAt(selectorIndex) === 124 /* Pipe */ &&
                    selector.charCodeAt(selectorIndex + 1) !== 124 /* Pipe */) {
                    namespace = name;
                    if (selector.charCodeAt(selectorIndex + 1) ===
                        42 /* Asterisk */) {
                        name = "*";
                        selectorIndex += 2;
                    }
                    else {
                        name = getName(1);
                    }
                }
                tokens.push(name === "*"
                    ? { type: SelectorType.Universal, namespace }
                    : { type: SelectorType.Tag, name, namespace });
            }
        }
    }
    finalizeSubselector();
    return selectorIndex;
}

const attribValChars = ["\\", '"'];
const pseudoValChars = [...attribValChars, "(", ")"];
const charsToEscapeInAttributeValue = new Set(attribValChars.map((c) => c.charCodeAt(0)));
const charsToEscapeInPseudoValue = new Set(pseudoValChars.map((c) => c.charCodeAt(0)));
const charsToEscapeInName = new Set([
    ...pseudoValChars,
    "~",
    "^",
    "$",
    "*",
    "+",
    "!",
    "|",
    ":",
    "[",
    "]",
    " ",
    ".",
].map((c) => c.charCodeAt(0)));
/**
 * Turns `selector` back into a string.
 *
 * @param selector Selector to stringify.
 */
function stringify$1(selector) {
    return selector
        .map((token) => token.map(stringifyToken).join(""))
        .join(", ");
}
function stringifyToken(token, index, arr) {
    switch (token.type) {
        // Simple types
        case SelectorType.Child:
            return index === 0 ? "> " : " > ";
        case SelectorType.Parent:
            return index === 0 ? "< " : " < ";
        case SelectorType.Sibling:
            return index === 0 ? "~ " : " ~ ";
        case SelectorType.Adjacent:
            return index === 0 ? "+ " : " + ";
        case SelectorType.Descendant:
            return " ";
        case SelectorType.ColumnCombinator:
            return index === 0 ? "|| " : " || ";
        case SelectorType.Universal:
            // Return an empty string if the selector isn't needed.
            return token.namespace === "*" &&
                index + 1 < arr.length &&
                "name" in arr[index + 1]
                ? ""
                : `${getNamespace(token.namespace)}*`;
        case SelectorType.Tag:
            return getNamespacedName(token);
        case SelectorType.PseudoElement:
            return `::${escapeName(token.name, charsToEscapeInName)}${token.data === null
                ? ""
                : `(${escapeName(token.data, charsToEscapeInPseudoValue)})`}`;
        case SelectorType.Pseudo:
            return `:${escapeName(token.name, charsToEscapeInName)}${token.data === null
                ? ""
                : `(${typeof token.data === "string"
                    ? escapeName(token.data, charsToEscapeInPseudoValue)
                    : stringify$1(token.data)})`}`;
        case SelectorType.Attribute: {
            if (token.name === "id" &&
                token.action === AttributeAction.Equals &&
                token.ignoreCase === "quirks" &&
                !token.namespace) {
                return `#${escapeName(token.value, charsToEscapeInName)}`;
            }
            if (token.name === "class" &&
                token.action === AttributeAction.Element &&
                token.ignoreCase === "quirks" &&
                !token.namespace) {
                return `.${escapeName(token.value, charsToEscapeInName)}`;
            }
            const name = getNamespacedName(token);
            if (token.action === AttributeAction.Exists) {
                return `[${name}]`;
            }
            return `[${name}${getActionValue(token.action)}="${escapeName(token.value, charsToEscapeInAttributeValue)}"${token.ignoreCase === null ? "" : token.ignoreCase ? " i" : " s"}]`;
        }
    }
}
function getActionValue(action) {
    switch (action) {
        case AttributeAction.Equals:
            return "";
        case AttributeAction.Element:
            return "~";
        case AttributeAction.Start:
            return "^";
        case AttributeAction.End:
            return "$";
        case AttributeAction.Any:
            return "*";
        case AttributeAction.Not:
            return "!";
        case AttributeAction.Hyphen:
            return "|";
        case AttributeAction.Exists:
            throw new Error("Shouldn't be here");
    }
}
function getNamespacedName(token) {
    return `${getNamespace(token.namespace)}${escapeName(token.name, charsToEscapeInName)}`;
}
function getNamespace(namespace) {
    return namespace !== null
        ? `${namespace === "*"
            ? "*"
            : escapeName(namespace, charsToEscapeInName)}|`
        : "";
}
function escapeName(str, charsToEscape) {
    let lastIdx = 0;
    let ret = "";
    for (let i = 0; i < str.length; i++) {
        if (charsToEscape.has(str.charCodeAt(i))) {
            ret += `${str.slice(lastIdx, i)}\\${str.charAt(i)}`;
            lastIdx = i + 1;
        }
    }
    return ret.length > 0 ? ret + str.slice(lastIdx) : str;
}

var es = /*#__PURE__*/Object.freeze({
	__proto__: null,
	isTraversal: isTraversal$1,
	parse: parse$4,
	stringify: stringify$1,
	get SelectorType () { return SelectorType; },
	IgnoreCaseMode: IgnoreCaseMode,
	get AttributeAction () { return AttributeAction; }
});

var require$$0 = /*@__PURE__*/getAugmentedNamespace(es);

var lib$2 = {};

var boolbase = {
	trueFunc: function trueFunc(){
		return true;
	},
	falseFunc: function falseFunc(){
		return false;
	}
};

var compile$3 = {};

var sort = {};

Object.defineProperty(sort, "__esModule", { value: true });
sort.isTraversal = void 0;
var css_what_1$2 = require$$0;
var procedure = new Map([
    [css_what_1$2.SelectorType.Universal, 50],
    [css_what_1$2.SelectorType.Tag, 30],
    [css_what_1$2.SelectorType.Attribute, 1],
    [css_what_1$2.SelectorType.Pseudo, 0],
]);
function isTraversal(token) {
    return !procedure.has(token.type);
}
sort.isTraversal = isTraversal;
var attributes$1 = new Map([
    [css_what_1$2.AttributeAction.Exists, 10],
    [css_what_1$2.AttributeAction.Equals, 8],
    [css_what_1$2.AttributeAction.Not, 7],
    [css_what_1$2.AttributeAction.Start, 6],
    [css_what_1$2.AttributeAction.End, 6],
    [css_what_1$2.AttributeAction.Any, 5],
]);
/**
 * Sort the parts of the passed selector,
 * as there is potential for optimization
 * (some types of selectors are faster than others)
 *
 * @param arr Selector to sort
 */
function sortByProcedure(arr) {
    var procs = arr.map(getProcedure);
    for (var i = 1; i < arr.length; i++) {
        var procNew = procs[i];
        if (procNew < 0)
            continue;
        for (var j = i - 1; j >= 0 && procNew < procs[j]; j--) {
            var token = arr[j + 1];
            arr[j + 1] = arr[j];
            arr[j] = token;
            procs[j + 1] = procs[j];
            procs[j] = procNew;
        }
    }
}
sort.default = sortByProcedure;
function getProcedure(token) {
    var _a, _b;
    var proc = (_a = procedure.get(token.type)) !== null && _a !== void 0 ? _a : -1;
    if (token.type === css_what_1$2.SelectorType.Attribute) {
        proc = (_b = attributes$1.get(token.action)) !== null && _b !== void 0 ? _b : 4;
        if (token.action === css_what_1$2.AttributeAction.Equals && token.name === "id") {
            // Prefer ID selectors (eg. #ID)
            proc = 9;
        }
        if (token.ignoreCase) {
            /*
             * IgnoreCase adds some overhead, prefer "normal" token
             * this is a binary operation, to ensure it's still an int
             */
            proc >>= 1;
        }
    }
    else if (token.type === css_what_1$2.SelectorType.Pseudo) {
        if (!token.data) {
            proc = 3;
        }
        else if (token.name === "has" || token.name === "contains") {
            proc = 0; // Expensive in any case
        }
        else if (Array.isArray(token.data)) {
            // Eg. :matches, :not
            proc = Math.min.apply(Math, token.data.map(function (d) { return Math.min.apply(Math, d.map(getProcedure)); }));
            // If we have traversals, try to avoid executing this selector
            if (proc < 0) {
                proc = 0;
            }
        }
        else {
            proc = 2;
        }
    }
    return proc;
}

var general = {};

var attributes = {};

var __importDefault$2 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(attributes, "__esModule", { value: true });
attributes.attributeRules = void 0;
var boolbase_1$2 = __importDefault$2(boolbase);
/**
 * All reserved characters in a regex, used for escaping.
 *
 * Taken from XRegExp, (c) 2007-2020 Steven Levithan under the MIT license
 * https://github.com/slevithan/xregexp/blob/95eeebeb8fac8754d54eafe2b4743661ac1cf028/src/xregexp.js#L794
 */
var reChars = /[-[\]{}()*+?.,\\^$|#\s]/g;
function escapeRegex(value) {
    return value.replace(reChars, "\\$&");
}
/**
 * Attributes that are case-insensitive in HTML.
 *
 * @private
 * @see https://html.spec.whatwg.org/multipage/semantics-other.html#case-sensitivity-of-selectors
 */
var caseInsensitiveAttributes = new Set([
    "accept",
    "accept-charset",
    "align",
    "alink",
    "axis",
    "bgcolor",
    "charset",
    "checked",
    "clear",
    "codetype",
    "color",
    "compact",
    "declare",
    "defer",
    "dir",
    "direction",
    "disabled",
    "enctype",
    "face",
    "frame",
    "hreflang",
    "http-equiv",
    "lang",
    "language",
    "link",
    "media",
    "method",
    "multiple",
    "nohref",
    "noresize",
    "noshade",
    "nowrap",
    "readonly",
    "rel",
    "rev",
    "rules",
    "scope",
    "scrolling",
    "selected",
    "shape",
    "target",
    "text",
    "type",
    "valign",
    "valuetype",
    "vlink",
]);
function shouldIgnoreCase(selector, options) {
    return typeof selector.ignoreCase === "boolean"
        ? selector.ignoreCase
        : selector.ignoreCase === "quirks"
            ? !!options.quirksMode
            : !options.xmlMode && caseInsensitiveAttributes.has(selector.name);
}
/**
 * Attribute selectors
 */
attributes.attributeRules = {
    equals: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function (elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length === value.length &&
                    attr.toLowerCase() === value &&
                    next(elem));
            };
        }
        return function (elem) {
            return adapter.getAttributeValue(elem, name) === value && next(elem);
        };
    },
    hyphen: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function hyphenIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    (attr.length === len || attr.charAt(len) === "-") &&
                    attr.substr(0, len).toLowerCase() === value &&
                    next(elem));
            };
        }
        return function hyphen(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return (attr != null &&
                (attr.length === len || attr.charAt(len) === "-") &&
                attr.substr(0, len) === value &&
                next(elem));
        };
    },
    element: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (/\s/.test(value)) {
            return boolbase_1$2.default.falseFunc;
        }
        var regex = new RegExp("(?:^|\\s)".concat(escapeRegex(value), "(?:$|\\s)"), shouldIgnoreCase(data, options) ? "i" : "");
        return function element(elem) {
            var attr = adapter.getAttributeValue(elem, name);
            return (attr != null &&
                attr.length >= value.length &&
                regex.test(attr) &&
                next(elem));
        };
    },
    exists: function (next, _a, _b) {
        var name = _a.name;
        var adapter = _b.adapter;
        return function (elem) { return adapter.hasAttrib(elem, name) && next(elem); };
    },
    start: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = value.length;
        if (len === 0) {
            return boolbase_1$2.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function (elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length >= len &&
                    attr.substr(0, len).toLowerCase() === value &&
                    next(elem));
            };
        }
        return function (elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.startsWith(value)) &&
                next(elem);
        };
    },
    end: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        var len = -value.length;
        if (len === 0) {
            return boolbase_1$2.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function (elem) {
                var _a;
                return ((_a = adapter
                    .getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.substr(len).toLowerCase()) === value && next(elem);
            };
        }
        return function (elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.endsWith(value)) &&
                next(elem);
        };
    },
    any: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name, value = data.value;
        if (value === "") {
            return boolbase_1$2.default.falseFunc;
        }
        if (shouldIgnoreCase(data, options)) {
            var regex_1 = new RegExp(escapeRegex(value), "i");
            return function anyIC(elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return (attr != null &&
                    attr.length >= value.length &&
                    regex_1.test(attr) &&
                    next(elem));
            };
        }
        return function (elem) {
            var _a;
            return !!((_a = adapter.getAttributeValue(elem, name)) === null || _a === void 0 ? void 0 : _a.includes(value)) &&
                next(elem);
        };
    },
    not: function (next, data, options) {
        var adapter = options.adapter;
        var name = data.name;
        var value = data.value;
        if (value === "") {
            return function (elem) {
                return !!adapter.getAttributeValue(elem, name) && next(elem);
            };
        }
        else if (shouldIgnoreCase(data, options)) {
            value = value.toLowerCase();
            return function (elem) {
                var attr = adapter.getAttributeValue(elem, name);
                return ((attr == null ||
                    attr.length !== value.length ||
                    attr.toLowerCase() !== value) &&
                    next(elem));
            };
        }
        return function (elem) {
            return adapter.getAttributeValue(elem, name) !== value && next(elem);
        };
    },
};

var pseudoSelectors = {};

var filters = {};

var lib$1 = {};

var parse$3 = {};

// Following http://www.w3.org/TR/css3-selectors/#nth-child-pseudo
Object.defineProperty(parse$3, "__esModule", { value: true });
parse$3.parse = void 0;
// Whitespace as per https://www.w3.org/TR/selectors-3/#lex is " \t\r\n\f"
var whitespace = new Set([9, 10, 12, 13, 32]);
var ZERO = "0".charCodeAt(0);
var NINE = "9".charCodeAt(0);
/**
 * Parses an expression.
 *
 * @throws An `Error` if parsing fails.
 * @returns An array containing the integer step size and the integer offset of the nth rule.
 * @example nthCheck.parse("2n+3"); // returns [2, 3]
 */
function parse$2(formula) {
    formula = formula.trim().toLowerCase();
    if (formula === "even") {
        return [2, 0];
    }
    else if (formula === "odd") {
        return [2, 1];
    }
    // Parse [ ['-'|'+']? INTEGER? {N} [ S* ['-'|'+'] S* INTEGER ]?
    var idx = 0;
    var a = 0;
    var sign = readSign();
    var number = readNumber();
    if (idx < formula.length && formula.charAt(idx) === "n") {
        idx++;
        a = sign * (number !== null && number !== void 0 ? number : 1);
        skipWhitespace();
        if (idx < formula.length) {
            sign = readSign();
            skipWhitespace();
            number = readNumber();
        }
        else {
            sign = number = 0;
        }
    }
    // Throw if there is anything else
    if (number === null || idx < formula.length) {
        throw new Error("n-th rule couldn't be parsed ('".concat(formula, "')"));
    }
    return [a, sign * number];
    function readSign() {
        if (formula.charAt(idx) === "-") {
            idx++;
            return -1;
        }
        if (formula.charAt(idx) === "+") {
            idx++;
        }
        return 1;
    }
    function readNumber() {
        var start = idx;
        var value = 0;
        while (idx < formula.length &&
            formula.charCodeAt(idx) >= ZERO &&
            formula.charCodeAt(idx) <= NINE) {
            value = value * 10 + (formula.charCodeAt(idx) - ZERO);
            idx++;
        }
        // Return `null` if we didn't read anything.
        return idx === start ? null : value;
    }
    function skipWhitespace() {
        while (idx < formula.length &&
            whitespace.has(formula.charCodeAt(idx))) {
            idx++;
        }
    }
}
parse$3.parse = parse$2;

var compile$2 = {};

var __importDefault$1 = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(compile$2, "__esModule", { value: true });
compile$2.generate = compile$2.compile = void 0;
var boolbase_1$1 = __importDefault$1(boolbase);
/**
 * Returns a function that checks if an elements index matches the given rule
 * highly optimized to return the fastest solution.
 *
 * @param parsed A tuple [a, b], as returned by `parse`.
 * @returns A highly optimized function that returns whether an index matches the nth-check.
 * @example
 *
 * ```js
 * const check = nthCheck.compile([2, 3]);
 *
 * check(0); // `false`
 * check(1); // `false`
 * check(2); // `true`
 * check(3); // `false`
 * check(4); // `true`
 * check(5); // `false`
 * check(6); // `true`
 * ```
 */
function compile$1(parsed) {
    var a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    var b = parsed[1] - 1;
    /*
     * When `b <= 0`, `a * n` won't be lead to any matches for `a < 0`.
     * Besides, the specification states that no elements are
     * matched when `a` and `b` are 0.
     *
     * `b < 0` here as we subtracted 1 from `b` above.
     */
    if (b < 0 && a <= 0)
        return boolbase_1$1.default.falseFunc;
    // When `a` is in the range -1..1, it matches any element (so only `b` is checked).
    if (a === -1)
        return function (index) { return index <= b; };
    if (a === 0)
        return function (index) { return index === b; };
    // When `b <= 0` and `a === 1`, they match any element.
    if (a === 1)
        return b < 0 ? boolbase_1$1.default.trueFunc : function (index) { return index >= b; };
    /*
     * Otherwise, modulo can be used to check if there is a match.
     *
     * Modulo doesn't care about the sign, so let's use `a`s absolute value.
     */
    var absA = Math.abs(a);
    // Get `b mod a`, + a if this is negative.
    var bMod = ((b % absA) + absA) % absA;
    return a > 1
        ? function (index) { return index >= b && index % absA === bMod; }
        : function (index) { return index <= b && index % absA === bMod; };
}
compile$2.compile = compile$1;
/**
 * Returns a function that produces a monotonously increasing sequence of indices.
 *
 * If the sequence has an end, the returned function will return `null` after
 * the last index in the sequence.
 *
 * @param parsed A tuple [a, b], as returned by `parse`.
 * @returns A function that produces a sequence of indices.
 * @example <caption>Always increasing (2n+3)</caption>
 *
 * ```js
 * const gen = nthCheck.generate([2, 3])
 *
 * gen() // `1`
 * gen() // `3`
 * gen() // `5`
 * gen() // `8`
 * gen() // `11`
 * ```
 *
 * @example <caption>With end value (-2n+10)</caption>
 *
 * ```js
 *
 * const gen = nthCheck.generate([-2, 5]);
 *
 * gen() // 0
 * gen() // 2
 * gen() // 4
 * gen() // null
 * ```
 */
function generate(parsed) {
    var a = parsed[0];
    // Subtract 1 from `b`, to convert from one- to zero-indexed.
    var b = parsed[1] - 1;
    var n = 0;
    // Make sure to always return an increasing sequence
    if (a < 0) {
        var aPos_1 = -a;
        // Get `b mod a`
        var minValue_1 = ((b % aPos_1) + aPos_1) % aPos_1;
        return function () {
            var val = minValue_1 + aPos_1 * n++;
            return val > b ? null : val;
        };
    }
    if (a === 0)
        return b < 0
            ? // There are no result — always return `null`
                function () { return null; }
            : // Return `b` exactly once
                function () { return (n++ === 0 ? b : null); };
    if (b < 0) {
        b += a * Math.ceil(-b / a);
    }
    return function () { return a * n++ + b; };
}
compile$2.generate = generate;

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.sequence = exports.generate = exports.compile = exports.parse = void 0;
	var parse_js_1 = parse$3;
	Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parse_js_1.parse; } });
	var compile_js_1 = compile$2;
	Object.defineProperty(exports, "compile", { enumerable: true, get: function () { return compile_js_1.compile; } });
	Object.defineProperty(exports, "generate", { enumerable: true, get: function () { return compile_js_1.generate; } });
	/**
	 * Parses and compiles a formula to a highly optimized function.
	 * Combination of {@link parse} and {@link compile}.
	 *
	 * If the formula doesn't match any elements,
	 * it returns [`boolbase`](https://github.com/fb55/boolbase)'s `falseFunc`.
	 * Otherwise, a function accepting an _index_ is returned, which returns
	 * whether or not the passed _index_ matches the formula.
	 *
	 * Note: The nth-rule starts counting at `1`, the returned function at `0`.
	 *
	 * @param formula The formula to compile.
	 * @example
	 * const check = nthCheck("2n+3");
	 *
	 * check(0); // `false`
	 * check(1); // `false`
	 * check(2); // `true`
	 * check(3); // `false`
	 * check(4); // `true`
	 * check(5); // `false`
	 * check(6); // `true`
	 */
	function nthCheck(formula) {
	    return (0, compile_js_1.compile)((0, parse_js_1.parse)(formula));
	}
	exports.default = nthCheck;
	/**
	 * Parses and compiles a formula to a generator that produces a sequence of indices.
	 * Combination of {@link parse} and {@link generate}.
	 *
	 * @param formula The formula to compile.
	 * @returns A function that produces a sequence of indices.
	 * @example <caption>Always increasing</caption>
	 *
	 * ```js
	 * const gen = nthCheck.sequence('2n+3')
	 *
	 * gen() // `1`
	 * gen() // `3`
	 * gen() // `5`
	 * gen() // `8`
	 * gen() // `11`
	 * ```
	 *
	 * @example <caption>With end value</caption>
	 *
	 * ```js
	 *
	 * const gen = nthCheck.sequence('-2n+5');
	 *
	 * gen() // 0
	 * gen() // 2
	 * gen() // 4
	 * gen() // null
	 * ```
	 */
	function sequence(formula) {
	    return (0, compile_js_1.generate)((0, parse_js_1.parse)(formula));
	}
	exports.sequence = sequence;
	
} (lib$1));

(function (exports) {
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.filters = void 0;
	var nth_check_1 = __importDefault(lib$1);
	var boolbase_1 = __importDefault(boolbase);
	function getChildFunc(next, adapter) {
	    return function (elem) {
	        var parent = adapter.getParent(elem);
	        return parent != null && adapter.isTag(parent) && next(elem);
	    };
	}
	exports.filters = {
	    contains: function (next, text, _a) {
	        var adapter = _a.adapter;
	        return function contains(elem) {
	            return next(elem) && adapter.getText(elem).includes(text);
	        };
	    },
	    icontains: function (next, text, _a) {
	        var adapter = _a.adapter;
	        var itext = text.toLowerCase();
	        return function icontains(elem) {
	            return (next(elem) &&
	                adapter.getText(elem).toLowerCase().includes(itext));
	        };
	    },
	    // Location specific methods
	    "nth-child": function (next, rule, _a) {
	        var adapter = _a.adapter, equals = _a.equals;
	        var func = (0, nth_check_1.default)(rule);
	        if (func === boolbase_1.default.falseFunc)
	            return boolbase_1.default.falseFunc;
	        if (func === boolbase_1.default.trueFunc)
	            return getChildFunc(next, adapter);
	        return function nthChild(elem) {
	            var siblings = adapter.getSiblings(elem);
	            var pos = 0;
	            for (var i = 0; i < siblings.length; i++) {
	                if (equals(elem, siblings[i]))
	                    break;
	                if (adapter.isTag(siblings[i])) {
	                    pos++;
	                }
	            }
	            return func(pos) && next(elem);
	        };
	    },
	    "nth-last-child": function (next, rule, _a) {
	        var adapter = _a.adapter, equals = _a.equals;
	        var func = (0, nth_check_1.default)(rule);
	        if (func === boolbase_1.default.falseFunc)
	            return boolbase_1.default.falseFunc;
	        if (func === boolbase_1.default.trueFunc)
	            return getChildFunc(next, adapter);
	        return function nthLastChild(elem) {
	            var siblings = adapter.getSiblings(elem);
	            var pos = 0;
	            for (var i = siblings.length - 1; i >= 0; i--) {
	                if (equals(elem, siblings[i]))
	                    break;
	                if (adapter.isTag(siblings[i])) {
	                    pos++;
	                }
	            }
	            return func(pos) && next(elem);
	        };
	    },
	    "nth-of-type": function (next, rule, _a) {
	        var adapter = _a.adapter, equals = _a.equals;
	        var func = (0, nth_check_1.default)(rule);
	        if (func === boolbase_1.default.falseFunc)
	            return boolbase_1.default.falseFunc;
	        if (func === boolbase_1.default.trueFunc)
	            return getChildFunc(next, adapter);
	        return function nthOfType(elem) {
	            var siblings = adapter.getSiblings(elem);
	            var pos = 0;
	            for (var i = 0; i < siblings.length; i++) {
	                var currentSibling = siblings[i];
	                if (equals(elem, currentSibling))
	                    break;
	                if (adapter.isTag(currentSibling) &&
	                    adapter.getName(currentSibling) === adapter.getName(elem)) {
	                    pos++;
	                }
	            }
	            return func(pos) && next(elem);
	        };
	    },
	    "nth-last-of-type": function (next, rule, _a) {
	        var adapter = _a.adapter, equals = _a.equals;
	        var func = (0, nth_check_1.default)(rule);
	        if (func === boolbase_1.default.falseFunc)
	            return boolbase_1.default.falseFunc;
	        if (func === boolbase_1.default.trueFunc)
	            return getChildFunc(next, adapter);
	        return function nthLastOfType(elem) {
	            var siblings = adapter.getSiblings(elem);
	            var pos = 0;
	            for (var i = siblings.length - 1; i >= 0; i--) {
	                var currentSibling = siblings[i];
	                if (equals(elem, currentSibling))
	                    break;
	                if (adapter.isTag(currentSibling) &&
	                    adapter.getName(currentSibling) === adapter.getName(elem)) {
	                    pos++;
	                }
	            }
	            return func(pos) && next(elem);
	        };
	    },
	    // TODO determine the actual root element
	    root: function (next, _rule, _a) {
	        var adapter = _a.adapter;
	        return function (elem) {
	            var parent = adapter.getParent(elem);
	            return (parent == null || !adapter.isTag(parent)) && next(elem);
	        };
	    },
	    scope: function (next, rule, options, context) {
	        var equals = options.equals;
	        if (!context || context.length === 0) {
	            // Equivalent to :root
	            return exports.filters["root"](next, rule, options);
	        }
	        if (context.length === 1) {
	            // NOTE: can't be unpacked, as :has uses this for side-effects
	            return function (elem) { return equals(context[0], elem) && next(elem); };
	        }
	        return function (elem) { return context.includes(elem) && next(elem); };
	    },
	    hover: dynamicStatePseudo("isHovered"),
	    visited: dynamicStatePseudo("isVisited"),
	    active: dynamicStatePseudo("isActive"),
	};
	/**
	 * Dynamic state pseudos. These depend on optional Adapter methods.
	 *
	 * @param name The name of the adapter method to call.
	 * @returns Pseudo for the `filters` object.
	 */
	function dynamicStatePseudo(name) {
	    return function dynamicPseudo(next, _rule, _a) {
	        var adapter = _a.adapter;
	        var func = adapter[name];
	        if (typeof func !== "function") {
	            return boolbase_1.default.falseFunc;
	        }
	        return function active(elem) {
	            return func(elem) && next(elem);
	        };
	    };
	}
	
} (filters));

var pseudos = {};

Object.defineProperty(pseudos, "__esModule", { value: true });
pseudos.verifyPseudoArgs = pseudos.pseudos = void 0;
// While filters are precompiled, pseudos get called when they are needed
pseudos.pseudos = {
    empty: function (elem, _a) {
        var adapter = _a.adapter;
        return !adapter.getChildren(elem).some(function (elem) {
            // FIXME: `getText` call is potentially expensive.
            return adapter.isTag(elem) || adapter.getText(elem) !== "";
        });
    },
    "first-child": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        if (adapter.prevElementSibling) {
            return adapter.prevElementSibling(elem) == null;
        }
        var firstChild = adapter
            .getSiblings(elem)
            .find(function (elem) { return adapter.isTag(elem); });
        return firstChild != null && equals(elem, firstChild);
    },
    "last-child": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
            if (equals(elem, siblings[i]))
                return true;
            if (adapter.isTag(siblings[i]))
                break;
        }
        return false;
    },
    "first-of-type": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for (var i = 0; i < siblings.length; i++) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
                return true;
            if (adapter.isTag(currentSibling) &&
                adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "last-of-type": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var siblings = adapter.getSiblings(elem);
        var elemName = adapter.getName(elem);
        for (var i = siblings.length - 1; i >= 0; i--) {
            var currentSibling = siblings[i];
            if (equals(elem, currentSibling))
                return true;
            if (adapter.isTag(currentSibling) &&
                adapter.getName(currentSibling) === elemName) {
                break;
            }
        }
        return false;
    },
    "only-of-type": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        var elemName = adapter.getName(elem);
        return adapter
            .getSiblings(elem)
            .every(function (sibling) {
            return equals(elem, sibling) ||
                !adapter.isTag(sibling) ||
                adapter.getName(sibling) !== elemName;
        });
    },
    "only-child": function (elem, _a) {
        var adapter = _a.adapter, equals = _a.equals;
        return adapter
            .getSiblings(elem)
            .every(function (sibling) { return equals(elem, sibling) || !adapter.isTag(sibling); });
    },
};
function verifyPseudoArgs(func, name, subselect, argIndex) {
    if (subselect === null) {
        if (func.length > argIndex) {
            throw new Error("Pseudo-class :".concat(name, " requires an argument"));
        }
    }
    else if (func.length === argIndex) {
        throw new Error("Pseudo-class :".concat(name, " doesn't have any arguments"));
    }
}
pseudos.verifyPseudoArgs = verifyPseudoArgs;

var aliases = {};

Object.defineProperty(aliases, "__esModule", { value: true });
aliases.aliases = void 0;
/**
 * Aliases are pseudos that are expressed as selectors.
 */
aliases.aliases = {
    // Links
    "any-link": ":is(a, area, link)[href]",
    link: ":any-link:not(:visited)",
    // Forms
    // https://html.spec.whatwg.org/multipage/scripting.html#disabled-elements
    disabled: ":is(\n        :is(button, input, select, textarea, optgroup, option)[disabled],\n        optgroup[disabled] > option,\n        fieldset[disabled]:not(fieldset[disabled] legend:first-of-type *)\n    )",
    enabled: ":not(:disabled)",
    checked: ":is(:is(input[type=radio], input[type=checkbox])[checked], option:selected)",
    required: ":is(input, select, textarea)[required]",
    optional: ":is(input, select, textarea):not([required])",
    // JQuery extensions
    // https://html.spec.whatwg.org/multipage/form-elements.html#concept-option-selectedness
    selected: "option:is([selected], select:not([multiple]):not(:has(> option[selected])) > :first-of-type)",
    checkbox: "[type=checkbox]",
    file: "[type=file]",
    password: "[type=password]",
    radio: "[type=radio]",
    reset: "[type=reset]",
    image: "[type=image]",
    submit: "[type=submit]",
    parent: ":not(:empty)",
    header: ":is(h1, h2, h3, h4, h5, h6)",
    button: ":is(button, input[type=button])",
    input: ":is(input, textarea, select, button)",
    text: "input:is(:not([type!='']), [type=text])",
};

var subselects = {};

(function (exports) {
	var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	};
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.subselects = exports.getNextSiblings = exports.ensureIsTag = exports.PLACEHOLDER_ELEMENT = void 0;
	var boolbase_1 = __importDefault(boolbase);
	var sort_js_1 = sort;
	/** Used as a placeholder for :has. Will be replaced with the actual element. */
	exports.PLACEHOLDER_ELEMENT = {};
	function ensureIsTag(next, adapter) {
	    if (next === boolbase_1.default.falseFunc)
	        return boolbase_1.default.falseFunc;
	    return function (elem) { return adapter.isTag(elem) && next(elem); };
	}
	exports.ensureIsTag = ensureIsTag;
	function getNextSiblings(elem, adapter) {
	    var siblings = adapter.getSiblings(elem);
	    if (siblings.length <= 1)
	        return [];
	    var elemIndex = siblings.indexOf(elem);
	    if (elemIndex < 0 || elemIndex === siblings.length - 1)
	        return [];
	    return siblings.slice(elemIndex + 1).filter(adapter.isTag);
	}
	exports.getNextSiblings = getNextSiblings;
	function copyOptions(options) {
	    // Not copied: context, rootFunc
	    return {
	        xmlMode: !!options.xmlMode,
	        lowerCaseAttributeNames: !!options.lowerCaseAttributeNames,
	        lowerCaseTags: !!options.lowerCaseTags,
	        quirksMode: !!options.quirksMode,
	        cacheResults: !!options.cacheResults,
	        pseudos: options.pseudos,
	        adapter: options.adapter,
	        equals: options.equals,
	    };
	}
	var is = function (next, token, options, context, compileToken) {
	    var func = compileToken(token, copyOptions(options), context);
	    return func === boolbase_1.default.trueFunc
	        ? next
	        : func === boolbase_1.default.falseFunc
	            ? boolbase_1.default.falseFunc
	            : function (elem) { return func(elem) && next(elem); };
	};
	/*
	 * :not, :has, :is, :matches and :where have to compile selectors
	 * doing this in src/pseudos.ts would lead to circular dependencies,
	 * so we add them here
	 */
	exports.subselects = {
	    is: is,
	    /**
	     * `:matches` and `:where` are aliases for `:is`.
	     */
	    matches: is,
	    where: is,
	    not: function (next, token, options, context, compileToken) {
	        var func = compileToken(token, copyOptions(options), context);
	        return func === boolbase_1.default.falseFunc
	            ? next
	            : func === boolbase_1.default.trueFunc
	                ? boolbase_1.default.falseFunc
	                : function (elem) { return !func(elem) && next(elem); };
	    },
	    has: function (next, subselect, options, _context, compileToken) {
	        var adapter = options.adapter;
	        var opts = copyOptions(options);
	        opts.relativeSelector = true;
	        var context = subselect.some(function (s) { return s.some(sort_js_1.isTraversal); })
	            ? // Used as a placeholder. Will be replaced with the actual element.
	                [exports.PLACEHOLDER_ELEMENT]
	            : undefined;
	        var compiled = compileToken(subselect, opts, context);
	        if (compiled === boolbase_1.default.falseFunc)
	            return boolbase_1.default.falseFunc;
	        var hasElement = ensureIsTag(compiled, adapter);
	        // If `compiled` is `trueFunc`, we can skip this.
	        if (context && compiled !== boolbase_1.default.trueFunc) {
	            /*
	             * `shouldTestNextSiblings` will only be true if the query starts with
	             * a traversal (sibling or adjacent). That means we will always have a context.
	             */
	            var _a = compiled.shouldTestNextSiblings, shouldTestNextSiblings_1 = _a === void 0 ? false : _a;
	            return function (elem) {
	                if (!next(elem))
	                    return false;
	                context[0] = elem;
	                var childs = adapter.getChildren(elem);
	                var nextElements = shouldTestNextSiblings_1
	                    ? __spreadArray(__spreadArray([], childs, true), getNextSiblings(elem, adapter), true) : childs;
	                return adapter.existsOne(hasElement, nextElements);
	            };
	        }
	        return function (elem) {
	            return next(elem) &&
	                adapter.existsOne(hasElement, adapter.getChildren(elem));
	        };
	    },
	};
	
} (subselects));

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.compilePseudoSelector = exports.aliases = exports.pseudos = exports.filters = void 0;
	var css_what_1 = require$$0;
	var filters_js_1 = filters;
	Object.defineProperty(exports, "filters", { enumerable: true, get: function () { return filters_js_1.filters; } });
	var pseudos_js_1 = pseudos;
	Object.defineProperty(exports, "pseudos", { enumerable: true, get: function () { return pseudos_js_1.pseudos; } });
	var aliases_js_1 = aliases;
	Object.defineProperty(exports, "aliases", { enumerable: true, get: function () { return aliases_js_1.aliases; } });
	var subselects_js_1 = subselects;
	function compilePseudoSelector(next, selector, options, context, compileToken) {
	    var _a;
	    var name = selector.name, data = selector.data;
	    if (Array.isArray(data)) {
	        if (!(name in subselects_js_1.subselects)) {
	            throw new Error("Unknown pseudo-class :".concat(name, "(").concat(data, ")"));
	        }
	        return subselects_js_1.subselects[name](next, data, options, context, compileToken);
	    }
	    var userPseudo = (_a = options.pseudos) === null || _a === void 0 ? void 0 : _a[name];
	    var stringPseudo = typeof userPseudo === "string" ? userPseudo : aliases_js_1.aliases[name];
	    if (typeof stringPseudo === "string") {
	        if (data != null) {
	            throw new Error("Pseudo ".concat(name, " doesn't have any arguments"));
	        }
	        // The alias has to be parsed here, to make sure options are respected.
	        var alias = (0, css_what_1.parse)(stringPseudo);
	        return subselects_js_1.subselects["is"](next, alias, options, context, compileToken);
	    }
	    if (typeof userPseudo === "function") {
	        (0, pseudos_js_1.verifyPseudoArgs)(userPseudo, name, data, 1);
	        return function (elem) { return userPseudo(elem, data) && next(elem); };
	    }
	    if (name in filters_js_1.filters) {
	        return filters_js_1.filters[name](next, data, options, context);
	    }
	    if (name in pseudos_js_1.pseudos) {
	        var pseudo_1 = pseudos_js_1.pseudos[name];
	        (0, pseudos_js_1.verifyPseudoArgs)(pseudo_1, name, data, 2);
	        return function (elem) { return pseudo_1(elem, options, data) && next(elem); };
	    }
	    throw new Error("Unknown pseudo-class :".concat(name));
	}
	exports.compilePseudoSelector = compilePseudoSelector;
	
} (pseudoSelectors));

Object.defineProperty(general, "__esModule", { value: true });
general.compileGeneralSelector = void 0;
var attributes_js_1 = attributes;
var index_js_1$1 = pseudoSelectors;
var css_what_1$1 = require$$0;
function getElementParent(node, adapter) {
    var parent = adapter.getParent(node);
    if (parent && adapter.isTag(parent)) {
        return parent;
    }
    return null;
}
/*
 * All available rules
 */
function compileGeneralSelector(next, selector, options, context, compileToken) {
    var adapter = options.adapter, equals = options.equals;
    switch (selector.type) {
        case css_what_1$1.SelectorType.PseudoElement: {
            throw new Error("Pseudo-elements are not supported by css-select");
        }
        case css_what_1$1.SelectorType.ColumnCombinator: {
            throw new Error("Column combinators are not yet supported by css-select");
        }
        case css_what_1$1.SelectorType.Attribute: {
            if (selector.namespace != null) {
                throw new Error("Namespaced attributes are not yet supported by css-select");
            }
            if (!options.xmlMode || options.lowerCaseAttributeNames) {
                selector.name = selector.name.toLowerCase();
            }
            return attributes_js_1.attributeRules[selector.action](next, selector, options);
        }
        case css_what_1$1.SelectorType.Pseudo: {
            return (0, index_js_1$1.compilePseudoSelector)(next, selector, options, context, compileToken);
        }
        // Tags
        case css_what_1$1.SelectorType.Tag: {
            if (selector.namespace != null) {
                throw new Error("Namespaced tag names are not yet supported by css-select");
            }
            var name_1 = selector.name;
            if (!options.xmlMode || options.lowerCaseTags) {
                name_1 = name_1.toLowerCase();
            }
            return function tag(elem) {
                return adapter.getName(elem) === name_1 && next(elem);
            };
        }
        // Traversal
        case css_what_1$1.SelectorType.Descendant: {
            if (options.cacheResults === false ||
                typeof WeakSet === "undefined") {
                return function descendant(elem) {
                    var current = elem;
                    while ((current = getElementParent(current, adapter))) {
                        if (next(current)) {
                            return true;
                        }
                    }
                    return false;
                };
            }
            // @ts-expect-error `ElementNode` is not extending object
            var isFalseCache_1 = new WeakSet();
            return function cachedDescendant(elem) {
                var current = elem;
                while ((current = getElementParent(current, adapter))) {
                    if (!isFalseCache_1.has(current)) {
                        if (adapter.isTag(current) && next(current)) {
                            return true;
                        }
                        isFalseCache_1.add(current);
                    }
                }
                return false;
            };
        }
        case "_flexibleDescendant": {
            // Include element itself, only used while querying an array
            return function flexibleDescendant(elem) {
                var current = elem;
                do {
                    if (next(current))
                        return true;
                } while ((current = getElementParent(current, adapter)));
                return false;
            };
        }
        case css_what_1$1.SelectorType.Parent: {
            return function parent(elem) {
                return adapter
                    .getChildren(elem)
                    .some(function (elem) { return adapter.isTag(elem) && next(elem); });
            };
        }
        case css_what_1$1.SelectorType.Child: {
            return function child(elem) {
                var parent = adapter.getParent(elem);
                return parent != null && adapter.isTag(parent) && next(parent);
            };
        }
        case css_what_1$1.SelectorType.Sibling: {
            return function sibling(elem) {
                var siblings = adapter.getSiblings(elem);
                for (var i = 0; i < siblings.length; i++) {
                    var currentSibling = siblings[i];
                    if (equals(elem, currentSibling))
                        break;
                    if (adapter.isTag(currentSibling) && next(currentSibling)) {
                        return true;
                    }
                }
                return false;
            };
        }
        case css_what_1$1.SelectorType.Adjacent: {
            if (adapter.prevElementSibling) {
                return function adjacent(elem) {
                    var previous = adapter.prevElementSibling(elem);
                    return previous != null && next(previous);
                };
            }
            return function adjacent(elem) {
                var siblings = adapter.getSiblings(elem);
                var lastElement;
                for (var i = 0; i < siblings.length; i++) {
                    var currentSibling = siblings[i];
                    if (equals(elem, currentSibling))
                        break;
                    if (adapter.isTag(currentSibling)) {
                        lastElement = currentSibling;
                    }
                }
                return !!lastElement && next(lastElement);
            };
        }
        case css_what_1$1.SelectorType.Universal: {
            if (selector.namespace != null && selector.namespace !== "*") {
                throw new Error("Namespaced universal selectors are not yet supported by css-select");
            }
            return next;
        }
    }
}
general.compileGeneralSelector = compileGeneralSelector;

var __createBinding$4 = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault$4 = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar$4 = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$4(result, mod, k);
    __setModuleDefault$4(result, mod);
    return result;
};
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(compile$3, "__esModule", { value: true });
compile$3.compileToken = compile$3.compileUnsafe = compile$3.compile = void 0;
var css_what_1 = require$$0;
var boolbase_1 = __importDefault(boolbase);
var sort_js_1 = __importStar$4(sort);
var general_js_1 = general;
var subselects_js_1 = subselects;
/**
 * Compiles a selector to an executable function.
 *
 * @param selector Selector to compile.
 * @param options Compilation options.
 * @param context Optional context for the selector.
 */
function compile(selector, options, context) {
    var next = compileUnsafe(selector, options, context);
    return (0, subselects_js_1.ensureIsTag)(next, options.adapter);
}
compile$3.compile = compile;
function compileUnsafe(selector, options, context) {
    var token = typeof selector === "string" ? (0, css_what_1.parse)(selector) : selector;
    return compileToken(token, options, context);
}
compile$3.compileUnsafe = compileUnsafe;
function includesScopePseudo(t) {
    return (t.type === css_what_1.SelectorType.Pseudo &&
        (t.name === "scope" ||
            (Array.isArray(t.data) &&
                t.data.some(function (data) { return data.some(includesScopePseudo); }))));
}
var DESCENDANT_TOKEN = { type: css_what_1.SelectorType.Descendant };
var FLEXIBLE_DESCENDANT_TOKEN = {
    type: "_flexibleDescendant",
};
var SCOPE_TOKEN = {
    type: css_what_1.SelectorType.Pseudo,
    name: "scope",
    data: null,
};
/*
 * CSS 4 Spec (Draft): 3.4.1. Absolutizing a Relative Selector
 * http://www.w3.org/TR/selectors4/#absolutizing
 */
function absolutize(token, _a, context) {
    var adapter = _a.adapter;
    // TODO Use better check if the context is a document
    var hasContext = !!(context === null || context === void 0 ? void 0 : context.every(function (e) {
        var parent = adapter.isTag(e) && adapter.getParent(e);
        return e === subselects_js_1.PLACEHOLDER_ELEMENT || (parent && adapter.isTag(parent));
    }));
    for (var _i = 0, token_1 = token; _i < token_1.length; _i++) {
        var t = token_1[_i];
        if (t.length > 0 &&
            (0, sort_js_1.isTraversal)(t[0]) &&
            t[0].type !== css_what_1.SelectorType.Descendant) ;
        else if (hasContext && !t.some(includesScopePseudo)) {
            t.unshift(DESCENDANT_TOKEN);
        }
        else {
            continue;
        }
        t.unshift(SCOPE_TOKEN);
    }
}
function compileToken(token, options, context) {
    var _a;
    token.forEach(sort_js_1.default);
    context = (_a = options.context) !== null && _a !== void 0 ? _a : context;
    var isArrayContext = Array.isArray(context);
    var finalContext = context && (Array.isArray(context) ? context : [context]);
    // Check if the selector is relative
    if (options.relativeSelector !== false) {
        absolutize(token, options, finalContext);
    }
    else if (token.some(function (t) { return t.length > 0 && (0, sort_js_1.isTraversal)(t[0]); })) {
        throw new Error("Relative selectors are not allowed when the `relativeSelector` option is disabled");
    }
    var shouldTestNextSiblings = false;
    var query = token
        .map(function (rules) {
        if (rules.length >= 2) {
            var first = rules[0], second = rules[1];
            if (first.type !== css_what_1.SelectorType.Pseudo ||
                first.name !== "scope") ;
            else if (isArrayContext &&
                second.type === css_what_1.SelectorType.Descendant) {
                rules[1] = FLEXIBLE_DESCENDANT_TOKEN;
            }
            else if (second.type === css_what_1.SelectorType.Adjacent ||
                second.type === css_what_1.SelectorType.Sibling) {
                shouldTestNextSiblings = true;
            }
        }
        return compileRules(rules, options, finalContext);
    })
        .reduce(reduceRules, boolbase_1.default.falseFunc);
    query.shouldTestNextSiblings = shouldTestNextSiblings;
    return query;
}
compile$3.compileToken = compileToken;
function compileRules(rules, options, context) {
    var _a;
    return rules.reduce(function (previous, rule) {
        return previous === boolbase_1.default.falseFunc
            ? boolbase_1.default.falseFunc
            : (0, general_js_1.compileGeneralSelector)(previous, rule, options, context, compileToken);
    }, (_a = options.rootFunc) !== null && _a !== void 0 ? _a : boolbase_1.default.trueFunc);
}
function reduceRules(a, b) {
    if (b === boolbase_1.default.falseFunc || a === boolbase_1.default.trueFunc) {
        return a;
    }
    if (a === boolbase_1.default.falseFunc || b === boolbase_1.default.trueFunc) {
        return b;
    }
    return function combine(elem) {
        return a(elem) || b(elem);
    };
}

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.aliases = exports.pseudos = exports.filters = exports.is = exports.selectOne = exports.selectAll = exports.prepareContext = exports._compileToken = exports._compileUnsafe = exports.compile = void 0;
	var DomUtils = __importStar(lib$8);
	var boolbase_1 = __importDefault(boolbase);
	var compile_js_1 = compile$3;
	var subselects_js_1 = subselects;
	var defaultEquals = function (a, b) { return a === b; };
	var defaultOptions = {
	    adapter: DomUtils,
	    equals: defaultEquals,
	};
	function convertOptionFormats(options) {
	    var _a, _b, _c, _d;
	    /*
	     * We force one format of options to the other one.
	     */
	    // @ts-expect-error Default options may have incompatible `Node` / `ElementNode`.
	    var opts = options !== null && options !== void 0 ? options : defaultOptions;
	    // @ts-expect-error Same as above.
	    (_a = opts.adapter) !== null && _a !== void 0 ? _a : (opts.adapter = DomUtils);
	    // @ts-expect-error `equals` does not exist on `Options`
	    (_b = opts.equals) !== null && _b !== void 0 ? _b : (opts.equals = (_d = (_c = opts.adapter) === null || _c === void 0 ? void 0 : _c.equals) !== null && _d !== void 0 ? _d : defaultEquals);
	    return opts;
	}
	function wrapCompile(func) {
	    return function addAdapter(selector, options, context) {
	        var opts = convertOptionFormats(options);
	        return func(selector, opts, context);
	    };
	}
	/**
	 * Compiles the query, returns a function.
	 */
	exports.compile = wrapCompile(compile_js_1.compile);
	exports._compileUnsafe = wrapCompile(compile_js_1.compileUnsafe);
	exports._compileToken = wrapCompile(compile_js_1.compileToken);
	function getSelectorFunc(searchFunc) {
	    return function select(query, elements, options) {
	        var opts = convertOptionFormats(options);
	        if (typeof query !== "function") {
	            query = (0, compile_js_1.compileUnsafe)(query, opts, elements);
	        }
	        var filteredElements = prepareContext(elements, opts.adapter, query.shouldTestNextSiblings);
	        return searchFunc(query, filteredElements, opts);
	    };
	}
	function prepareContext(elems, adapter, shouldTestNextSiblings) {
	    if (shouldTestNextSiblings === void 0) { shouldTestNextSiblings = false; }
	    /*
	     * Add siblings if the query requires them.
	     * See https://github.com/fb55/css-select/pull/43#issuecomment-225414692
	     */
	    if (shouldTestNextSiblings) {
	        elems = appendNextSiblings(elems, adapter);
	    }
	    return Array.isArray(elems)
	        ? adapter.removeSubsets(elems)
	        : adapter.getChildren(elems);
	}
	exports.prepareContext = prepareContext;
	function appendNextSiblings(elem, adapter) {
	    // Order matters because jQuery seems to check the children before the siblings
	    var elems = Array.isArray(elem) ? elem.slice(0) : [elem];
	    var elemsLength = elems.length;
	    for (var i = 0; i < elemsLength; i++) {
	        var nextSiblings = (0, subselects_js_1.getNextSiblings)(elems[i], adapter);
	        elems.push.apply(elems, nextSiblings);
	    }
	    return elems;
	}
	/**
	 * @template Node The generic Node type for the DOM adapter being used.
	 * @template ElementNode The Node type for elements for the DOM adapter being used.
	 * @param elems Elements to query. If it is an element, its children will be queried..
	 * @param query can be either a CSS selector string or a compiled query function.
	 * @param [options] options for querying the document.
	 * @see compile for supported selector queries.
	 * @returns All matching elements.
	 *
	 */
	exports.selectAll = getSelectorFunc(function (query, elems, options) {
	    return query === boolbase_1.default.falseFunc || !elems || elems.length === 0
	        ? []
	        : options.adapter.findAll(query, elems);
	});
	/**
	 * @template Node The generic Node type for the DOM adapter being used.
	 * @template ElementNode The Node type for elements for the DOM adapter being used.
	 * @param elems Elements to query. If it is an element, its children will be queried..
	 * @param query can be either a CSS selector string or a compiled query function.
	 * @param [options] options for querying the document.
	 * @see compile for supported selector queries.
	 * @returns the first match, or null if there was no match.
	 */
	exports.selectOne = getSelectorFunc(function (query, elems, options) {
	    return query === boolbase_1.default.falseFunc || !elems || elems.length === 0
	        ? null
	        : options.adapter.findOne(query, elems);
	});
	/**
	 * Tests whether or not an element is matched by query.
	 *
	 * @template Node The generic Node type for the DOM adapter being used.
	 * @template ElementNode The Node type for elements for the DOM adapter being used.
	 * @param elem The element to test if it matches the query.
	 * @param query can be either a CSS selector string or a compiled query function.
	 * @param [options] options for querying the document.
	 * @see compile for supported selector queries.
	 * @returns
	 */
	function is(elem, query, options) {
	    var opts = convertOptionFormats(options);
	    return (typeof query === "function" ? query : (0, compile_js_1.compile)(query, opts))(elem);
	}
	exports.is = is;
	/**
	 * Alias for selectAll(query, elems, options).
	 * @see [compile] for supported selector queries.
	 */
	exports.default = exports.selectAll;
	// Export filters, pseudos and aliases to allow users to supply their own.
	/** @deprecated Use the `pseudos` option instead. */
	var index_js_1 = pseudoSelectors;
	Object.defineProperty(exports, "filters", { enumerable: true, get: function () { return index_js_1.filters; } });
	Object.defineProperty(exports, "pseudos", { enumerable: true, get: function () { return index_js_1.pseudos; } });
	Object.defineProperty(exports, "aliases", { enumerable: true, get: function () { return index_js_1.aliases; } });
	
} (lib$2));

var helpers = {};

var positionals = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getLimit = exports.isFilter = exports.filterNames = void 0;
	exports.filterNames = new Set([
	    "first",
	    "last",
	    "eq",
	    "gt",
	    "nth",
	    "lt",
	    "even",
	    "odd",
	]);
	function isFilter(s) {
	    if (s.type !== "pseudo")
	        return false;
	    if (exports.filterNames.has(s.name))
	        return true;
	    if (s.name === "not" && Array.isArray(s.data)) {
	        // Only consider `:not` with embedded filters
	        return s.data.some(function (s) { return s.some(isFilter); });
	    }
	    return false;
	}
	exports.isFilter = isFilter;
	function getLimit(filter, data, partLimit) {
	    var num = data != null ? parseInt(data, 10) : NaN;
	    switch (filter) {
	        case "first":
	            return 1;
	        case "nth":
	        case "eq":
	            return isFinite(num) ? (num >= 0 ? num + 1 : Infinity) : 0;
	        case "lt":
	            return isFinite(num)
	                ? num >= 0
	                    ? Math.min(num, partLimit)
	                    : Infinity
	                : 0;
	        case "gt":
	            return isFinite(num) ? Infinity : 0;
	        case "odd":
	            return 2 * partLimit;
	        case "even":
	            return 2 * partLimit - 1;
	        case "last":
	        case "not":
	            return Infinity;
	    }
	}
	exports.getLimit = getLimit;
	
} (positionals));

Object.defineProperty(helpers, "__esModule", { value: true });
helpers.groupSelectors = helpers.getDocumentRoot = void 0;
var positionals_js_1 = positionals;
function getDocumentRoot(node) {
    while (node.parent)
        node = node.parent;
    return node;
}
helpers.getDocumentRoot = getDocumentRoot;
function groupSelectors(selectors) {
    var filteredSelectors = [];
    var plainSelectors = [];
    for (var _i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
        var selector = selectors_1[_i];
        if (selector.some(positionals_js_1.isFilter)) {
            filteredSelectors.push(selector);
        }
        else {
            plainSelectors.push(selector);
        }
    }
    return [plainSelectors, filteredSelectors];
}
helpers.groupSelectors = groupSelectors;

(function (exports) {
	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);
	};
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
	    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
	        if (ar || !(i in from)) {
	            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
	            ar[i] = from[i];
	        }
	    }
	    return to.concat(ar || Array.prototype.slice.call(from));
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.select = exports.filter = exports.some = exports.is = exports.aliases = exports.pseudos = exports.filters = void 0;
	var css_what_1 = require$$0;
	var css_select_1 = lib$2;
	var DomUtils = __importStar(lib$8);
	var boolbase$1 = __importStar(boolbase);
	var helpers_js_1 = helpers;
	var positionals_js_1 = positionals;
	// Re-export pseudo extension points
	var css_select_2 = lib$2;
	Object.defineProperty(exports, "filters", { enumerable: true, get: function () { return css_select_2.filters; } });
	Object.defineProperty(exports, "pseudos", { enumerable: true, get: function () { return css_select_2.pseudos; } });
	Object.defineProperty(exports, "aliases", { enumerable: true, get: function () { return css_select_2.aliases; } });
	var UNIVERSAL_SELECTOR = {
	    type: css_what_1.SelectorType.Universal,
	    namespace: null,
	};
	var SCOPE_PSEUDO = {
	    type: css_what_1.SelectorType.Pseudo,
	    name: "scope",
	    data: null,
	};
	function is(element, selector, options) {
	    if (options === void 0) { options = {}; }
	    return some([element], selector, options);
	}
	exports.is = is;
	function some(elements, selector, options) {
	    if (options === void 0) { options = {}; }
	    if (typeof selector === "function")
	        return elements.some(selector);
	    var _a = (0, helpers_js_1.groupSelectors)((0, css_what_1.parse)(selector)), plain = _a[0], filtered = _a[1];
	    return ((plain.length > 0 && elements.some((0, css_select_1._compileToken)(plain, options))) ||
	        filtered.some(function (sel) { return filterBySelector(sel, elements, options).length > 0; }));
	}
	exports.some = some;
	function filterByPosition(filter, elems, data, options) {
	    var num = typeof data === "string" ? parseInt(data, 10) : NaN;
	    switch (filter) {
	        case "first":
	        case "lt":
	            // Already done in `getLimit`
	            return elems;
	        case "last":
	            return elems.length > 0 ? [elems[elems.length - 1]] : elems;
	        case "nth":
	        case "eq":
	            return isFinite(num) && Math.abs(num) < elems.length
	                ? [num < 0 ? elems[elems.length + num] : elems[num]]
	                : [];
	        case "gt":
	            return isFinite(num) ? elems.slice(num + 1) : [];
	        case "even":
	            return elems.filter(function (_, i) { return i % 2 === 0; });
	        case "odd":
	            return elems.filter(function (_, i) { return i % 2 === 1; });
	        case "not": {
	            var filtered_1 = new Set(filterParsed(data, elems, options));
	            return elems.filter(function (e) { return !filtered_1.has(e); });
	        }
	    }
	}
	function filter(selector, elements, options) {
	    if (options === void 0) { options = {}; }
	    return filterParsed((0, css_what_1.parse)(selector), elements, options);
	}
	exports.filter = filter;
	/**
	 * Filter a set of elements by a selector.
	 *
	 * Will return elements in the original order.
	 *
	 * @param selector Selector to filter by.
	 * @param elements Elements to filter.
	 * @param options Options for selector.
	 */
	function filterParsed(selector, elements, options) {
	    if (elements.length === 0)
	        return [];
	    var _a = (0, helpers_js_1.groupSelectors)(selector), plainSelectors = _a[0], filteredSelectors = _a[1];
	    var found;
	    if (plainSelectors.length) {
	        var filtered = filterElements(elements, plainSelectors, options);
	        // If there are no filters, just return
	        if (filteredSelectors.length === 0) {
	            return filtered;
	        }
	        // Otherwise, we have to do some filtering
	        if (filtered.length) {
	            found = new Set(filtered);
	        }
	    }
	    for (var i = 0; i < filteredSelectors.length && (found === null || found === void 0 ? void 0 : found.size) !== elements.length; i++) {
	        var filteredSelector = filteredSelectors[i];
	        var missing = found
	            ? elements.filter(function (e) { return DomUtils.isTag(e) && !found.has(e); })
	            : elements;
	        if (missing.length === 0)
	            break;
	        var filtered = filterBySelector(filteredSelector, elements, options);
	        if (filtered.length) {
	            if (!found) {
	                /*
	                 * If we haven't found anything before the last selector,
	                 * just return what we found now.
	                 */
	                if (i === filteredSelectors.length - 1) {
	                    return filtered;
	                }
	                found = new Set(filtered);
	            }
	            else {
	                filtered.forEach(function (el) { return found.add(el); });
	            }
	        }
	    }
	    return typeof found !== "undefined"
	        ? (found.size === elements.length
	            ? elements
	            : // Filter elements to preserve order
	                elements.filter(function (el) {
	                    return found.has(el);
	                }))
	        : [];
	}
	function filterBySelector(selector, elements, options) {
	    var _a;
	    if (selector.some(css_what_1.isTraversal)) {
	        /*
	         * Get root node, run selector with the scope
	         * set to all of our nodes.
	         */
	        var root = (_a = options.root) !== null && _a !== void 0 ? _a : (0, helpers_js_1.getDocumentRoot)(elements[0]);
	        var opts = __assign(__assign({}, options), { context: elements, relativeSelector: false });
	        selector.push(SCOPE_PSEUDO);
	        return findFilterElements(root, selector, opts, true, elements.length);
	    }
	    // Performance optimization: If we don't have to traverse, just filter set.
	    return findFilterElements(elements, selector, options, false, elements.length);
	}
	function select(selector, root, options, limit) {
	    if (options === void 0) { options = {}; }
	    if (limit === void 0) { limit = Infinity; }
	    if (typeof selector === "function") {
	        return find(root, selector);
	    }
	    var _a = (0, helpers_js_1.groupSelectors)((0, css_what_1.parse)(selector)), plain = _a[0], filtered = _a[1];
	    var results = filtered.map(function (sel) {
	        return findFilterElements(root, sel, options, true, limit);
	    });
	    // Plain selectors can be queried in a single go
	    if (plain.length) {
	        results.push(findElements(root, plain, options, limit));
	    }
	    if (results.length === 0) {
	        return [];
	    }
	    // If there was only a single selector, just return the result
	    if (results.length === 1) {
	        return results[0];
	    }
	    // Sort results, filtering for duplicates
	    return DomUtils.uniqueSort(results.reduce(function (a, b) { return __spreadArray(__spreadArray([], a, true), b, true); }));
	}
	exports.select = select;
	/**
	 *
	 * @param root Element(s) to search from.
	 * @param selector Selector to look for.
	 * @param options Options for querying.
	 * @param queryForSelector Query multiple levels deep for the initial selector, even if it doesn't contain a traversal.
	 */
	function findFilterElements(root, selector, options, queryForSelector, totalLimit) {
	    var filterIndex = selector.findIndex(positionals_js_1.isFilter);
	    var sub = selector.slice(0, filterIndex);
	    var filter = selector[filterIndex];
	    // If we are at the end of the selector, we can limit the number of elements to retrieve.
	    var partLimit = selector.length - 1 === filterIndex ? totalLimit : Infinity;
	    /*
	     * Set the number of elements to retrieve.
	     * Eg. for :first, we only have to get a single element.
	     */
	    var limit = (0, positionals_js_1.getLimit)(filter.name, filter.data, partLimit);
	    if (limit === 0)
	        return [];
	    /*
	     * Skip `findElements` call if our selector starts with a positional
	     * pseudo.
	     */
	    var elemsNoLimit = sub.length === 0 && !Array.isArray(root)
	        ? DomUtils.getChildren(root).filter(DomUtils.isTag)
	        : sub.length === 0
	            ? (Array.isArray(root) ? root : [root]).filter(DomUtils.isTag)
	            : queryForSelector || sub.some(css_what_1.isTraversal)
	                ? findElements(root, [sub], options, limit)
	                : filterElements(root, [sub], options);
	    var elems = elemsNoLimit.slice(0, limit);
	    var result = filterByPosition(filter.name, elems, filter.data, options);
	    if (result.length === 0 || selector.length === filterIndex + 1) {
	        return result;
	    }
	    var remainingSelector = selector.slice(filterIndex + 1);
	    var remainingHasTraversal = remainingSelector.some(css_what_1.isTraversal);
	    if (remainingHasTraversal) {
	        if ((0, css_what_1.isTraversal)(remainingSelector[0])) {
	            var type = remainingSelector[0].type;
	            if (type === css_what_1.SelectorType.Sibling ||
	                type === css_what_1.SelectorType.Adjacent) {
	                // If we have a sibling traversal, we need to also look at the siblings.
	                result = (0, css_select_1.prepareContext)(result, DomUtils, true);
	            }
	            // Avoid a traversal-first selector error.
	            remainingSelector.unshift(UNIVERSAL_SELECTOR);
	        }
	        options = __assign(__assign({}, options), { 
	            // Avoid absolutizing the selector
	            relativeSelector: false, 
	            /*
	             * Add a custom root func, to make sure traversals don't match elements
	             * that aren't a part of the considered tree.
	             */
	            rootFunc: function (el) { return result.includes(el); } });
	    }
	    else if (options.rootFunc && options.rootFunc !== boolbase$1.trueFunc) {
	        options = __assign(__assign({}, options), { rootFunc: boolbase$1.trueFunc });
	    }
	    /*
	     * If we have another filter, recursively call `findFilterElements`,
	     * with the `recursive` flag disabled. We only have to look for more
	     * elements when we see a traversal.
	     *
	     * Otherwise,
	     */
	    return remainingSelector.some(positionals_js_1.isFilter)
	        ? findFilterElements(result, remainingSelector, options, false, totalLimit)
	        : remainingHasTraversal
	            ? // Query existing elements to resolve traversal.
	                findElements(result, [remainingSelector], options, totalLimit)
	            : // If we don't have any more traversals, simply filter elements.
	                filterElements(result, [remainingSelector], options);
	}
	function findElements(root, sel, options, limit) {
	    var query = (0, css_select_1._compileToken)(sel, options, root);
	    return find(root, query, limit);
	}
	function find(root, query, limit) {
	    if (limit === void 0) { limit = Infinity; }
	    var elems = (0, css_select_1.prepareContext)(root, DomUtils, query.shouldTestNextSiblings);
	    return DomUtils.find(function (node) { return DomUtils.isTag(node) && query(node); }, elems, true, limit);
	}
	function filterElements(elements, sel, options) {
	    var els = (Array.isArray(elements) ? elements : [elements]).filter(DomUtils.isTag);
	    if (els.length === 0)
	        return els;
	    var query = (0, css_select_1._compileToken)(sel, options);
	    return query === boolbase$1.trueFunc ? els : els.filter(query);
	}
	
} (lib$3));

/**
 * Methods for traversing the DOM structure.
 *
 * @module cheerio/traversing
 */
var __createBinding$3 = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault$3 = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar$3 = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$3(result, mod, k);
    __setModuleDefault$3(result, mod);
    return result;
};
var __spreadArray$2 = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(traversing, "__esModule", { value: true });
traversing.addBack = traversing.add = traversing.end = traversing.slice = traversing.index = traversing.toArray = traversing.get = traversing.eq = traversing.last = traversing.first = traversing.has = traversing.not = traversing.is = traversing.filterArray = traversing.filter = traversing.map = traversing.each = traversing.contents = traversing.children = traversing.siblings = traversing.prevUntil = traversing.prevAll = traversing.prev = traversing.nextUntil = traversing.nextAll = traversing.next = traversing.closest = traversing.parentsUntil = traversing.parents = traversing.parent = traversing.find = void 0;
var domhandler_1$3 = lib$7;
var select = __importStar$3(lib$3);
var utils_js_1$4 = utils;
var static_js_1$1 = _static;
var domutils_1$2 = lib$8;
var reSiblingSelector = /^\s*[~+]/;
/**
 * Get the descendants of each element in the current set of matched elements,
 * filtered by a selector, jQuery object, or element.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').find('li').length;
 * //=> 3
 * $('#fruits').find($('.apple')).length;
 * //=> 1
 * ```
 *
 * @param selectorOrHaystack - Element to look for.
 * @returns The found elements.
 * @see {@link https://api.jquery.com/find/}
 */
function find(selectorOrHaystack) {
    var _a;
    if (!selectorOrHaystack) {
        return this._make([]);
    }
    var context = this.toArray();
    if (typeof selectorOrHaystack !== 'string') {
        var haystack = (0, utils_js_1$4.isCheerio)(selectorOrHaystack)
            ? selectorOrHaystack.toArray()
            : [selectorOrHaystack];
        return this._make(haystack.filter(function (elem) { return context.some(function (node) { return (0, static_js_1$1.contains)(node, elem); }); }));
    }
    var elems = reSiblingSelector.test(selectorOrHaystack)
        ? context
        : this.children().toArray();
    var options = {
        context: context,
        root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0],
        // Pass options that are recognized by `cheerio-select`
        xmlMode: this.options.xmlMode,
        lowerCaseTags: this.options.lowerCaseTags,
        lowerCaseAttributeNames: this.options.lowerCaseAttributeNames,
        pseudos: this.options.pseudos,
        quirksMode: this.options.quirksMode,
    };
    return this._make(select.select(selectorOrHaystack, elems, options));
}
traversing.find = find;
/**
 * Creates a matcher, using a particular mapping function. Matchers provide a
 * function that finds elements using a generating function, supporting filtering.
 *
 * @private
 * @param matchMap - Mapping function.
 * @returns - Function for wrapping generating functions.
 */
function _getMatcher(matchMap) {
    return function (fn) {
        var postFns = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            postFns[_i - 1] = arguments[_i];
        }
        return function (selector) {
            var _a;
            var matched = matchMap(fn, this);
            if (selector) {
                matched = filterArray(matched, selector, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]);
            }
            return this._make(
            // Post processing is only necessary if there is more than one element.
            this.length > 1 && matched.length > 1
                ? postFns.reduce(function (elems, fn) { return fn(elems); }, matched)
                : matched);
        };
    };
}
/** Matcher that adds multiple elements for each entry in the input. */
var _matcher = _getMatcher(function (fn, elems) {
    var _a;
    var ret = [];
    for (var i = 0; i < elems.length; i++) {
        var value = fn(elems[i]);
        ret.push(value);
    }
    return (_a = new Array()).concat.apply(_a, ret);
});
/** Matcher that adds at most one element for each entry in the input. */
var _singleMatcher = _getMatcher(function (fn, elems) {
    var ret = [];
    for (var i = 0; i < elems.length; i++) {
        var value = fn(elems[i]);
        if (value !== null) {
            ret.push(value);
        }
    }
    return ret;
});
/**
 * Matcher that supports traversing until a condition is met.
 *
 * @returns A function usable for `*Until` methods.
 */
function _matchUntil(nextElem) {
    var postFns = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        postFns[_i - 1] = arguments[_i];
    }
    // We use a variable here that is used from within the matcher.
    var matches = null;
    var innerMatcher = _getMatcher(function (nextElem, elems) {
        var matched = [];
        (0, utils_js_1$4.domEach)(elems, function (elem) {
            for (var next_1; (next_1 = nextElem(elem)); elem = next_1) {
                // FIXME: `matched` might contain duplicates here and the index is too large.
                if (matches === null || matches === void 0 ? void 0 : matches(next_1, matched.length))
                    break;
                matched.push(next_1);
            }
        });
        return matched;
    }).apply(void 0, __spreadArray$2([nextElem], postFns, false));
    return function (selector, filterSelector) {
        var _this = this;
        // Override `matches` variable with the new target.
        matches =
            typeof selector === 'string'
                ? function (elem) { return select.is(elem, selector, _this.options); }
                : selector
                    ? getFilterFn(selector)
                    : null;
        var ret = innerMatcher.call(this, filterSelector);
        // Set `matches` to `null`, so we don't waste memory.
        matches = null;
        return ret;
    };
}
function _removeDuplicates(elems) {
    return Array.from(new Set(elems));
}
/**
 * Get the parent of each element in the current set of matched elements,
 * optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').parent().attr('id');
 * //=> fruits
 * ```
 *
 * @param selector - If specified filter for parent.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parent/}
 */
traversing.parent = _singleMatcher(function (_a) {
    var parent = _a.parent;
    return (parent && !(0, domhandler_1$3.isDocument)(parent) ? parent : null);
}, _removeDuplicates);
/**
 * Get a set of parents filtered by `selector` of each element in the current
 * set of match elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').parents().length;
 * //=> 2
 * $('.orange').parents('#fruits').length;
 * //=> 1
 * ```
 *
 * @param selector - If specified filter for parents.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parents/}
 */
traversing.parents = _matcher(function (elem) {
    var matched = [];
    while (elem.parent && !(0, domhandler_1$3.isDocument)(elem.parent)) {
        matched.push(elem.parent);
        elem = elem.parent;
    }
    return matched;
}, domutils_1$2.uniqueSort, function (elems) { return elems.reverse(); });
/**
 * Get the ancestors of each element in the current set of matched elements, up
 * to but not including the element matched by the selector, DOM node, or cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').parentsUntil('#food').length;
 * //=> 1
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - Optional filter for parents.
 * @returns The parents.
 * @see {@link https://api.jquery.com/parentsUntil/}
 */
traversing.parentsUntil = _matchUntil(function (_a) {
    var parent = _a.parent;
    return (parent && !(0, domhandler_1$3.isDocument)(parent) ? parent : null);
}, domutils_1$2.uniqueSort, function (elems) { return elems.reverse(); });
/**
 * For each element in the set, get the first element that matches the selector
 * by testing the element itself and traversing up through its ancestors in the DOM tree.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').closest();
 * //=> []
 *
 * $('.orange').closest('.apple');
 * // => []
 *
 * $('.orange').closest('li');
 * //=> [<li class="orange">Orange</li>]
 *
 * $('.orange').closest('#fruits');
 * //=> [<ul id="fruits"> ... </ul>]
 * ```
 *
 * @param selector - Selector for the element to find.
 * @returns The closest nodes.
 * @see {@link https://api.jquery.com/closest/}
 */
function closest(selector) {
    var _a;
    var set = [];
    if (!selector) {
        return this._make(set);
    }
    var selectOpts = {
        xmlMode: this.options.xmlMode,
        root: (_a = this._root) === null || _a === void 0 ? void 0 : _a[0],
    };
    var selectFn = typeof selector === 'string'
        ? function (elem) { return select.is(elem, selector, selectOpts); }
        : getFilterFn(selector);
    (0, utils_js_1$4.domEach)(this, function (elem) {
        while (elem && (0, utils_js_1$4.isTag)(elem)) {
            if (selectFn(elem, 0)) {
                // Do not add duplicate elements to the set
                if (!set.includes(elem)) {
                    set.push(elem);
                }
                break;
            }
            elem = elem.parent;
        }
    });
    return this._make(set);
}
traversing.closest = closest;
/**
 * Gets the next sibling of the first selected element, optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').next().hasClass('orange');
 * //=> true
 * ```
 *
 * @param selector - If specified filter for sibling.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/next/}
 */
traversing.next = _singleMatcher(function (elem) { return (0, domutils_1$2.nextElementSibling)(elem); });
/**
 * Gets all the following siblings of the first selected element, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').nextAll();
 * //=> [<li class="orange">Orange</li>, <li class="pear">Pear</li>]
 * $('.apple').nextAll('.orange');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/nextAll/}
 */
traversing.nextAll = _matcher(function (elem) {
    var matched = [];
    while (elem.next) {
        elem = elem.next;
        if ((0, utils_js_1$4.isTag)(elem))
            matched.push(elem);
    }
    return matched;
}, _removeDuplicates);
/**
 * Gets all the following siblings up to but not including the element matched
 * by the selector, optionally filtered by another selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').nextUntil('.pear');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - If specified filter for siblings.
 * @returns The next nodes.
 * @see {@link https://api.jquery.com/nextUntil/}
 */
traversing.nextUntil = _matchUntil(function (el) { return (0, domutils_1$2.nextElementSibling)(el); }, _removeDuplicates);
/**
 * Gets the previous sibling of the first selected element optionally filtered
 * by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.orange').prev().hasClass('apple');
 * //=> true
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prev/}
 */
traversing.prev = _singleMatcher(function (elem) { return (0, domutils_1$2.prevElementSibling)(elem); });
/**
 * Gets all the preceding siblings of the first selected element, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').prevAll();
 * //=> [<li class="orange">Orange</li>, <li class="apple">Apple</li>]
 *
 * $('.pear').prevAll('.orange');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prevAll/}
 */
traversing.prevAll = _matcher(function (elem) {
    var matched = [];
    while (elem.prev) {
        elem = elem.prev;
        if ((0, utils_js_1$4.isTag)(elem))
            matched.push(elem);
    }
    return matched;
}, _removeDuplicates);
/**
 * Gets all the preceding siblings up to but not including the element matched
 * by the selector, optionally filtered by another selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').prevUntil('.apple');
 * //=> [<li class="orange">Orange</li>]
 * ```
 *
 * @param selector - Selector for element to stop at.
 * @param filterSelector - If specified filter for siblings.
 * @returns The previous nodes.
 * @see {@link https://api.jquery.com/prevUntil/}
 */
traversing.prevUntil = _matchUntil(function (el) { return (0, domutils_1$2.prevElementSibling)(el); }, _removeDuplicates);
/**
 * Get the siblings of each element (excluding the element) in the set of
 * matched elements, optionally filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').siblings().length;
 * //=> 2
 *
 * $('.pear').siblings('.orange').length;
 * //=> 1
 * ```
 *
 * @param selector - If specified filter for siblings.
 * @returns The siblings.
 * @see {@link https://api.jquery.com/siblings/}
 */
traversing.siblings = _matcher(function (elem) {
    return (0, domutils_1$2.getSiblings)(elem).filter(function (el) { return (0, utils_js_1$4.isTag)(el) && el !== elem; });
}, domutils_1$2.uniqueSort);
/**
 * Gets the element children of each element in the set of matched elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().length;
 * //=> 3
 *
 * $('#fruits').children('.pear').text();
 * //=> Pear
 * ```
 *
 * @param selector - If specified filter for children.
 * @returns The children.
 * @see {@link https://api.jquery.com/children/}
 */
traversing.children = _matcher(function (elem) { return (0, domutils_1$2.getChildren)(elem).filter(utils_js_1$4.isTag); }, _removeDuplicates);
/**
 * Gets the children of each element in the set of matched elements, including
 * text and comment nodes.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').contents().length;
 * //=> 3
 * ```
 *
 * @returns The children.
 * @see {@link https://api.jquery.com/contents/}
 */
function contents() {
    var elems = this.toArray().reduce(function (newElems, elem) {
        return (0, domhandler_1$3.hasChildren)(elem) ? newElems.concat(elem.children) : newElems;
    }, []);
    return this._make(elems);
}
traversing.contents = contents;
/**
 * Iterates over a cheerio object, executing a function for each matched
 * element. When the callback is fired, the function is fired in the context of
 * the DOM element, so `this` refers to the current element, which is equivalent
 * to the function parameter `element`. To break out of the `each` loop early,
 * return with `false`.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * const fruits = [];
 *
 * $('li').each(function (i, elem) {
 *   fruits[i] = $(this).text();
 * });
 *
 * fruits.join(', ');
 * //=> Apple, Orange, Pear
 * ```
 *
 * @param fn - Function to execute.
 * @returns The instance itself, useful for chaining.
 * @see {@link https://api.jquery.com/each/}
 */
function each(fn) {
    var i = 0;
    var len = this.length;
    while (i < len && fn.call(this[i], i, this[i]) !== false)
        ++i;
    return this;
}
traversing.each = each;
/**
 * Pass each element in the current matched set through a function, producing a
 * new Cheerio object containing the return values. The function can return an
 * individual data item or an array of data items to be inserted into the
 * resulting set. If an array is returned, the elements inside the array are
 * inserted into the set. If the function returns null or undefined, no element
 * will be inserted.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li')
 *   .map(function (i, el) {
 *     // this === el
 *     return $(this).text();
 *   })
 *   .toArray()
 *   .join(' ');
 * //=> "apple orange pear"
 * ```
 *
 * @param fn - Function to execute.
 * @returns The mapped elements, wrapped in a Cheerio collection.
 * @see {@link https://api.jquery.com/map/}
 */
function map(fn) {
    var elems = [];
    for (var i = 0; i < this.length; i++) {
        var el = this[i];
        var val = fn.call(el, i, el);
        if (val != null) {
            elems = elems.concat(val);
        }
    }
    return this._make(elems);
}
traversing.map = map;
/**
 * Creates a function to test if a filter is matched.
 *
 * @param match - A filter.
 * @returns A function that determines if a filter has been matched.
 */
function getFilterFn(match) {
    if (typeof match === 'function') {
        return function (el, i) { return match.call(el, i, el); };
    }
    if ((0, utils_js_1$4.isCheerio)(match)) {
        return function (el) { return Array.prototype.includes.call(match, el); };
    }
    return function (el) {
        return match === el;
    };
}
function filter(match) {
    var _a;
    return this._make(filterArray(this.toArray(), match, this.options.xmlMode, (_a = this._root) === null || _a === void 0 ? void 0 : _a[0]));
}
traversing.filter = filter;
function filterArray(nodes, match, xmlMode, root) {
    return typeof match === 'string'
        ? select.filter(match, nodes, { xmlMode: xmlMode, root: root })
        : nodes.filter(getFilterFn(match));
}
traversing.filterArray = filterArray;
/**
 * Checks the current list of elements and returns `true` if _any_ of the
 * elements match the selector. If using an element or Cheerio selection,
 * returns `true` if _any_ of the elements match. If using a predicate function,
 * the function is executed in the context of the selected element, so `this`
 * refers to the current element.
 *
 * @category Attributes
 * @param selector - Selector for the selection.
 * @returns Whether or not the selector matches an element of the instance.
 * @see {@link https://api.jquery.com/is/}
 */
function is(selector) {
    var nodes = this.toArray();
    return typeof selector === 'string'
        ? select.some(nodes.filter(utils_js_1$4.isTag), selector, this.options)
        : selector
            ? nodes.some(getFilterFn(selector))
            : false;
}
traversing.is = is;
/**
 * Remove elements from the set of matched elements. Given a Cheerio object that
 * represents a set of DOM elements, the `.not()` method constructs a new
 * Cheerio object from a subset of the matching elements. The supplied selector
 * is tested against each element; the elements that don't match the selector
 * will be included in the result.
 *
 * The `.not()` method can take a function as its argument in the same way that
 * `.filter()` does. Elements for which the function returns `true` are excluded
 * from the filtered set; all other elements are included.
 *
 * @category Traversing
 * @example <caption>Selector</caption>
 *
 * ```js
 * $('li').not('.apple').length;
 * //=> 2
 * ```
 *
 * @example <caption>Function</caption>
 *
 * ```js
 * $('li').not(function (i, el) {
 *   // this === el
 *   return $(this).attr('class') === 'orange';
 * }).length; //=> 2
 * ```
 *
 * @param match - Value to look for, following the rules above.
 * @param container - Optional node to filter instead.
 * @returns The filtered collection.
 * @see {@link https://api.jquery.com/not/}
 */
function not(match) {
    var nodes = this.toArray();
    if (typeof match === 'string') {
        var matches_1 = new Set(select.filter(match, nodes, this.options));
        nodes = nodes.filter(function (el) { return !matches_1.has(el); });
    }
    else {
        var filterFn_1 = getFilterFn(match);
        nodes = nodes.filter(function (el, i) { return !filterFn_1(el, i); });
    }
    return this._make(nodes);
}
traversing.not = not;
/**
 * Filters the set of matched elements to only those which have the given DOM
 * element as a descendant or which have a descendant that matches the given
 * selector. Equivalent to `.filter(':has(selector)')`.
 *
 * @category Traversing
 * @example <caption>Selector</caption>
 *
 * ```js
 * $('ul').has('.pear').attr('id');
 * //=> fruits
 * ```
 *
 * @example <caption>Element</caption>
 *
 * ```js
 * $('ul').has($('.pear')[0]).attr('id');
 * //=> fruits
 * ```
 *
 * @param selectorOrHaystack - Element to look for.
 * @returns The filtered collection.
 * @see {@link https://api.jquery.com/has/}
 */
function has(selectorOrHaystack) {
    var _this = this;
    return this.filter(typeof selectorOrHaystack === 'string'
        ? // Using the `:has` selector here short-circuits searches.
            ":has(".concat(selectorOrHaystack, ")")
        : function (_, el) { return _this._make(el).find(selectorOrHaystack).length > 0; });
}
traversing.has = has;
/**
 * Will select the first element of a cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().first().text();
 * //=> Apple
 * ```
 *
 * @returns The first element.
 * @see {@link https://api.jquery.com/first/}
 */
function first() {
    return this.length > 1 ? this._make(this[0]) : this;
}
traversing.first = first;
/**
 * Will select the last element of a cheerio object.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('#fruits').children().last().text();
 * //=> Pear
 * ```
 *
 * @returns The last element.
 * @see {@link https://api.jquery.com/last/}
 */
function last() {
    return this.length > 0 ? this._make(this[this.length - 1]) : this;
}
traversing.last = last;
/**
 * Reduce the set of matched elements to the one at the specified index. Use
 * `.eq(-i)` to count backwards from the last selected element.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).text();
 * //=> Apple
 *
 * $('li').eq(-1).text();
 * //=> Pear
 * ```
 *
 * @param i - Index of the element to select.
 * @returns The element at the `i`th position.
 * @see {@link https://api.jquery.com/eq/}
 */
function eq(i) {
    var _a;
    i = +i;
    // Use the first identity optimization if possible
    if (i === 0 && this.length <= 1)
        return this;
    if (i < 0)
        i = this.length + i;
    return this._make((_a = this[i]) !== null && _a !== void 0 ? _a : []);
}
traversing.eq = eq;
function get(i) {
    if (i == null) {
        return this.toArray();
    }
    return this[i < 0 ? this.length + i : i];
}
traversing.get = get;
/**
 * Retrieve all the DOM elements contained in the jQuery set as an array.
 *
 * @example
 *
 * ```js
 * $('li').toArray();
 * //=> [ {...}, {...}, {...} ]
 * ```
 *
 * @returns The contained items.
 */
function toArray() {
    return Array.prototype.slice.call(this);
}
traversing.toArray = toArray;
/**
 * Search for a given element from among the matched elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.pear').index();
 * //=> 2 $('.orange').index('li');
 * //=> 1
 * $('.apple').index($('#fruit, li'));
 * //=> 1
 * ```
 *
 * @param selectorOrNeedle - Element to look for.
 * @returns The index of the element.
 * @see {@link https://api.jquery.com/index/}
 */
function index(selectorOrNeedle) {
    var $haystack;
    var needle;
    if (selectorOrNeedle == null) {
        $haystack = this.parent().children();
        needle = this[0];
    }
    else if (typeof selectorOrNeedle === 'string') {
        $haystack = this._make(selectorOrNeedle);
        needle = this[0];
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        $haystack = this;
        needle = (0, utils_js_1$4.isCheerio)(selectorOrNeedle)
            ? selectorOrNeedle[0]
            : selectorOrNeedle;
    }
    return Array.prototype.indexOf.call($haystack, needle);
}
traversing.index = index;
/**
 * Gets the elements matching the specified range (0-based position).
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').slice(1).eq(0).text();
 * //=> 'Orange'
 *
 * $('li').slice(1, 2).length;
 * //=> 1
 * ```
 *
 * @param start - An position at which the elements begin to be selected. If
 *   negative, it indicates an offset from the end of the set.
 * @param end - An position at which the elements stop being selected. If
 *   negative, it indicates an offset from the end of the set. If omitted, the
 *   range continues until the end of the set.
 * @returns The elements matching the specified range.
 * @see {@link https://api.jquery.com/slice/}
 */
function slice(start, end) {
    return this._make(Array.prototype.slice.call(this, start, end));
}
traversing.slice = slice;
/**
 * End the most recent filtering operation in the current chain and return the
 * set of matched elements to its previous state.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).end().length;
 * //=> 3
 * ```
 *
 * @returns The previous state of the set of matched elements.
 * @see {@link https://api.jquery.com/end/}
 */
function end() {
    var _a;
    return (_a = this.prevObject) !== null && _a !== void 0 ? _a : this._make([]);
}
traversing.end = end;
/**
 * Add elements to the set of matched elements.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('.apple').add('.orange').length;
 * //=> 2
 * ```
 *
 * @param other - Elements to add.
 * @param context - Optionally the context of the new selection.
 * @returns The combined set.
 * @see {@link https://api.jquery.com/add/}
 */
function add(other, context) {
    var selection = this._make(other, context);
    var contents = (0, domutils_1$2.uniqueSort)(__spreadArray$2(__spreadArray$2([], this.get(), true), selection.get(), true));
    return this._make(contents);
}
traversing.add = add;
/**
 * Add the previous set of elements on the stack to the current set, optionally
 * filtered by a selector.
 *
 * @category Traversing
 * @example
 *
 * ```js
 * $('li').eq(0).addBack('.orange').length;
 * //=> 2
 * ```
 *
 * @param selector - Selector for the elements to add.
 * @returns The combined set.
 * @see {@link https://api.jquery.com/addBack/}
 */
function addBack(selector) {
    return this.prevObject
        ? this.add(selector ? this.prevObject.filter(selector) : this.prevObject)
        : this;
}
traversing.addBack = addBack;

var manipulation = {};

var parse$1 = {};

Object.defineProperty(parse$1, "__esModule", { value: true });
parse$1.update = parse$1.getParse = void 0;
var domutils_1$1 = lib$8;
var domhandler_1$2 = lib$7;
/**
 * Get the parse function with options.
 *
 * @param parser - The parser function.
 * @returns The parse function with options.
 */
function getParse(parser) {
    /**
     * Parse a HTML string or a node.
     *
     * @param content - The HTML string or node.
     * @param options - The parser options.
     * @param isDocument - If `content` is a document.
     * @param context - The context node in the DOM tree.
     * @returns The parsed document node.
     */
    return function parse(content, options, isDocument, context) {
        if (typeof Buffer !== 'undefined' && Buffer.isBuffer(content)) {
            content = content.toString();
        }
        if (typeof content === 'string') {
            return parser(content, options, isDocument, context);
        }
        var doc = content;
        if (!Array.isArray(doc) && (0, domhandler_1$2.isDocument)(doc)) {
            // If `doc` is already a root, just return it
            return doc;
        }
        // Add conent to new root element
        var root = new domhandler_1$2.Document([]);
        // Update the DOM using the root
        update(doc, root);
        return root;
    };
}
parse$1.getParse = getParse;
/**
 * Update the dom structure, for one changed layer.
 *
 * @param newChilds - The new children.
 * @param parent - The new parent.
 * @returns The parent node.
 */
function update(newChilds, parent) {
    // Normalize
    var arr = Array.isArray(newChilds) ? newChilds : [newChilds];
    // Update parent
    if (parent) {
        parent.children = arr;
    }
    else {
        parent = null;
    }
    // Update neighbors
    for (var i = 0; i < arr.length; i++) {
        var node = arr[i];
        // Cleanly remove existing nodes from their previous structures.
        if (node.parent && node.parent.children !== arr) {
            (0, domutils_1$1.removeElement)(node);
        }
        if (parent) {
            node.prev = arr[i - 1] || null;
            node.next = arr[i + 1] || null;
        }
        else {
            node.prev = node.next = null;
        }
        node.parent = parent;
    }
    return parent;
}
parse$1.update = update;

/**
 * Methods for modifying the DOM structure.
 *
 * @module cheerio/manipulation
 */
var __spreadArray$1 = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(manipulation, "__esModule", { value: true });
manipulation.clone = manipulation.text = manipulation.toString = manipulation.html = manipulation.empty = manipulation.replaceWith = manipulation.remove = manipulation.insertBefore = manipulation.before = manipulation.insertAfter = manipulation.after = manipulation.wrapAll = manipulation.unwrap = manipulation.wrapInner = manipulation.wrap = manipulation.prepend = manipulation.append = manipulation.prependTo = manipulation.appendTo = manipulation._makeDomArray = void 0;
var domhandler_1$1 = lib$7;
var parse_js_1 = parse$1;
var static_js_1 = _static;
var utils_js_1$3 = utils;
var domutils_1 = lib$8;
/**
 * Create an array of nodes, recursing into arrays and parsing strings if necessary.
 *
 * @private
 * @category Manipulation
 * @param elem - Elements to make an array of.
 * @param clone - Optionally clone nodes.
 * @returns The array of nodes.
 */
function _makeDomArray(elem, clone) {
    var _this = this;
    if (elem == null) {
        return [];
    }
    if ((0, utils_js_1$3.isCheerio)(elem)) {
        return clone ? (0, utils_js_1$3.cloneDom)(elem.get()) : elem.get();
    }
    if (Array.isArray(elem)) {
        return elem.reduce(function (newElems, el) { return newElems.concat(_this._makeDomArray(el, clone)); }, []);
    }
    if (typeof elem === 'string') {
        return this._parse(elem, this.options, false, null).children;
    }
    return clone ? (0, utils_js_1$3.cloneDom)([elem]) : [elem];
}
manipulation._makeDomArray = _makeDomArray;
function _insert(concatenator) {
    return function () {
        var _this = this;
        var elems = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            elems[_i] = arguments[_i];
        }
        var lastIdx = this.length - 1;
        return (0, utils_js_1$3.domEach)(this, function (el, i) {
            if (!(0, domhandler_1$1.hasChildren)(el))
                return;
            var domSrc = typeof elems[0] === 'function'
                ? elems[0].call(el, i, _this._render(el.children))
                : elems;
            var dom = _this._makeDomArray(domSrc, i < lastIdx);
            concatenator(dom, el.children, el);
        });
    };
}
/**
 * Modify an array in-place, removing some number of elements and adding new
 * elements directly following them.
 *
 * @private
 * @category Manipulation
 * @param array - Target array to splice.
 * @param spliceIdx - Index at which to begin changing the array.
 * @param spliceCount - Number of elements to remove from the array.
 * @param newElems - Elements to insert into the array.
 * @param parent - The parent of the node.
 * @returns The spliced array.
 */
function uniqueSplice(array, spliceIdx, spliceCount, newElems, parent) {
    var _a, _b;
    var spliceArgs = __spreadArray$1([
        spliceIdx,
        spliceCount
    ], newElems, true);
    var prev = spliceIdx === 0 ? null : array[spliceIdx - 1];
    var next = spliceIdx + spliceCount >= array.length
        ? null
        : array[spliceIdx + spliceCount];
    /*
     * Before splicing in new elements, ensure they do not already appear in the
     * current array.
     */
    for (var idx = 0; idx < newElems.length; ++idx) {
        var node = newElems[idx];
        var oldParent = node.parent;
        if (oldParent) {
            var oldSiblings = oldParent.children;
            var prevIdx = oldSiblings.indexOf(node);
            if (prevIdx > -1) {
                oldParent.children.splice(prevIdx, 1);
                if (parent === oldParent && spliceIdx > prevIdx) {
                    spliceArgs[0]--;
                }
            }
        }
        node.parent = parent;
        if (node.prev) {
            node.prev.next = (_a = node.next) !== null && _a !== void 0 ? _a : null;
        }
        if (node.next) {
            node.next.prev = (_b = node.prev) !== null && _b !== void 0 ? _b : null;
        }
        node.prev = idx === 0 ? prev : newElems[idx - 1];
        node.next = idx === newElems.length - 1 ? next : newElems[idx + 1];
    }
    if (prev) {
        prev.next = newElems[0];
    }
    if (next) {
        next.prev = newElems[newElems.length - 1];
    }
    return array.splice.apply(array, spliceArgs);
}
/**
 * Insert every element in the set of matched elements to the end of the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').appendTo('#fruits');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //      <li class="plum">Plum</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to append elements to.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/appendTo/}
 */
function appendTo(target) {
    var appendTarget = (0, utils_js_1$3.isCheerio)(target) ? target : this._make(target);
    appendTarget.append(this);
    return this;
}
manipulation.appendTo = appendTo;
/**
 * Insert every element in the set of matched elements to the beginning of the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').prependTo('#fruits');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to prepend elements to.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/prependTo/}
 */
function prependTo(target) {
    var prependTarget = (0, utils_js_1$3.isCheerio)(target) ? target : this._make(target);
    prependTarget.prepend(this);
    return this;
}
manipulation.prependTo = prependTo;
/**
 * Inserts content as the _last_ child of each of the selected elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').append('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //      <li class="plum">Plum</li>
 * //    </ul>
 * ```
 *
 * @see {@link https://api.jquery.com/append/}
 */
manipulation.append = _insert(function (dom, children, parent) {
    uniqueSplice(children, children.length, 0, dom, parent);
});
/**
 * Inserts content as the _first_ child of each of the selected elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').prepend('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @see {@link https://api.jquery.com/prepend/}
 */
manipulation.prepend = _insert(function (dom, children, parent) {
    uniqueSplice(children, 0, 0, dom, parent);
});
function _wrap(insert) {
    return function (wrapper) {
        var lastIdx = this.length - 1;
        var lastParent = this.parents().last();
        for (var i = 0; i < this.length; i++) {
            var el = this[i];
            var wrap_1 = typeof wrapper === 'function'
                ? wrapper.call(el, i, el)
                : typeof wrapper === 'string' && !(0, utils_js_1$3.isHtml)(wrapper)
                    ? lastParent.find(wrapper).clone()
                    : wrapper;
            var wrapperDom = this._makeDomArray(wrap_1, i < lastIdx)[0];
            if (!wrapperDom || !(0, domhandler_1$1.hasChildren)(wrapperDom))
                continue;
            var elInsertLocation = wrapperDom;
            /*
             * Find the deepest child. Only consider the first tag child of each node
             * (ignore text); stop if no children are found.
             */
            var j = 0;
            while (j < elInsertLocation.children.length) {
                var child = elInsertLocation.children[j];
                if ((0, utils_js_1$3.isTag)(child)) {
                    elInsertLocation = child;
                    j = 0;
                }
                else {
                    j++;
                }
            }
            insert(el, elInsertLocation, [wrapperDom]);
        }
        return this;
    };
}
/**
 * The .wrap() function can take any string or object that could be passed to
 * the $() factory function to specify a DOM structure. This structure may be
 * nested several levels deep, but should contain only one inmost element. A
 * copy of this structure will be wrapped around each of the elements in the set
 * of matched elements. This method returns the original set of elements for
 * chaining purposes.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const redFruit = $('<div class="red-fruit"></div>');
 * $('.apple').wrap(redFruit);
 *
 * //=> <ul id="fruits">
 * //     <div class="red-fruit">
 * //      <li class="apple">Apple</li>
 * //     </div>
 * //     <li class="orange">Orange</li>
 * //     <li class="plum">Plum</li>
 * //   </ul>
 *
 * const healthy = $('<div class="healthy"></div>');
 * $('li').wrap(healthy);
 *
 * //=> <ul id="fruits">
 * //     <div class="healthy">
 * //       <li class="apple">Apple</li>
 * //     </div>
 * //     <div class="healthy">
 * //       <li class="orange">Orange</li>
 * //     </div>
 * //     <div class="healthy">
 * //        <li class="plum">Plum</li>
 * //     </div>
 * //   </ul>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around each element in the selection.
 * @see {@link https://api.jquery.com/wrap/}
 */
manipulation.wrap = _wrap(function (el, elInsertLocation, wrapperDom) {
    var parent = el.parent;
    if (!parent)
        return;
    var siblings = parent.children;
    var index = siblings.indexOf(el);
    (0, parse_js_1.update)([el], elInsertLocation);
    /*
     * The previous operation removed the current element from the `siblings`
     * array, so the `dom` array can be inserted without removing any
     * additional elements.
     */
    uniqueSplice(siblings, index, 0, wrapperDom, parent);
});
/**
 * The .wrapInner() function can take any string or object that could be passed
 * to the $() factory function to specify a DOM structure. This structure may be
 * nested several levels deep, but should contain only one inmost element. The
 * structure will be wrapped around the content of each of the elements in the
 * set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const redFruit = $('<div class="red-fruit"></div>');
 * $('.apple').wrapInner(redFruit);
 *
 * //=> <ul id="fruits">
 * //     <li class="apple">
 * //       <div class="red-fruit">Apple</div>
 * //     </li>
 * //     <li class="orange">Orange</li>
 * //     <li class="pear">Pear</li>
 * //   </ul>
 *
 * const healthy = $('<div class="healthy"></div>');
 * $('li').wrapInner(healthy);
 *
 * //=> <ul id="fruits">
 * //     <li class="apple">
 * //       <div class="healthy">Apple</div>
 * //     </li>
 * //     <li class="orange">
 * //       <div class="healthy">Orange</div>
 * //     </li>
 * //     <li class="pear">
 * //       <div class="healthy">Pear</div>
 * //     </li>
 * //   </ul>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around the content of each element
 *   in the selection.
 * @returns The instance itself, for chaining.
 * @see {@link https://api.jquery.com/wrapInner/}
 */
manipulation.wrapInner = _wrap(function (el, elInsertLocation, wrapperDom) {
    if (!(0, domhandler_1$1.hasChildren)(el))
        return;
    (0, parse_js_1.update)(el.children, elInsertLocation);
    (0, parse_js_1.update)(wrapperDom, el);
});
/**
 * The .unwrap() function, removes the parents of the set of matched elements
 * from the DOM, leaving the matched elements in their place.
 *
 * @category Manipulation
 * @example <caption>without selector</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div id=test>\n  <div><p>Hello</p></div>\n  <div><p>World</p></div>\n</div>'
 * );
 * $('#test p').unwrap();
 *
 * //=> <div id=test>
 * //     <p>Hello</p>
 * //     <p>World</p>
 * //   </div>
 * ```
 *
 * @example <caption>with selector</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div id=test>\n  <p>Hello</p>\n  <b><p>World</p></b>\n</div>'
 * );
 * $('#test p').unwrap('b');
 *
 * //=> <div id=test>
 * //     <p>Hello</p>
 * //     <p>World</p>
 * //   </div>
 * ```
 *
 * @param selector - A selector to check the parent element against. If an
 *   element's parent does not match the selector, the element won't be unwrapped.
 * @returns The instance itself, for chaining.
 * @see {@link https://api.jquery.com/unwrap/}
 */
function unwrap(selector) {
    var _this = this;
    this.parent(selector)
        .not('body')
        .each(function (_, el) {
        _this._make(el).replaceWith(el.children);
    });
    return this;
}
manipulation.unwrap = unwrap;
/**
 * The .wrapAll() function can take any string or object that could be passed to
 * the $() function to specify a DOM structure. This structure may be nested
 * several levels deep, but should contain only one inmost element. The
 * structure will be wrapped around all of the elements in the set of matched
 * elements, as a single group.
 *
 * @category Manipulation
 * @example <caption>With markup passed to `wrapAll`</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<div class="container"><div class="inner">First</div><div class="inner">Second</div></div>'
 * );
 * $('.inner').wrapAll("<div class='new'></div>");
 *
 * //=> <div class="container">
 * //     <div class='new'>
 * //       <div class="inner">First</div>
 * //       <div class="inner">Second</div>
 * //     </div>
 * //   </div>
 * ```
 *
 * @example <caption>With an existing cheerio instance</caption>
 *
 * ```js
 * const $ = cheerio.load(
 *   '<span>Span 1</span><strong>Strong</strong><span>Span 2</span>'
 * );
 * const wrap = $('<div><p><em><b></b></em></p></div>');
 * $('span').wrapAll(wrap);
 *
 * //=> <div>
 * //     <p>
 * //       <em>
 * //         <b>
 * //           <span>Span 1</span>
 * //           <span>Span 2</span>
 * //         </b>
 * //       </em>
 * //     </p>
 * //   </div>
 * //   <strong>Strong</strong>
 * ```
 *
 * @param wrapper - The DOM structure to wrap around all matched elements in the
 *   selection.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/wrapAll/}
 */
function wrapAll(wrapper) {
    var el = this[0];
    if (el) {
        var wrap_2 = this._make(typeof wrapper === 'function' ? wrapper.call(el, 0, el) : wrapper).insertBefore(el);
        // If html is given as wrapper, wrap may contain text elements
        var elInsertLocation = void 0;
        for (var i = 0; i < wrap_2.length; i++) {
            if (wrap_2[i].type === 'tag')
                elInsertLocation = wrap_2[i];
        }
        var j = 0;
        /*
         * Find the deepest child. Only consider the first tag child of each node
         * (ignore text); stop if no children are found.
         */
        while (elInsertLocation && j < elInsertLocation.children.length) {
            var child = elInsertLocation.children[j];
            if (child.type === 'tag') {
                elInsertLocation = child;
                j = 0;
            }
            else {
                j++;
            }
        }
        if (elInsertLocation)
            this._make(elInsertLocation).append(this);
    }
    return this;
}
manipulation.wrapAll = wrapAll;
/* eslint-disable jsdoc/check-param-names*/
/**
 * Insert content next to each element in the set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.apple').after('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="plum">Plum</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param content - HTML string, DOM element, array of DOM elements or Cheerio
 *   to insert after each element in the set of matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/after/}
 */
function after() {
    var _this = this;
    var elems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elems[_i] = arguments[_i];
    }
    var lastIdx = this.length - 1;
    return (0, utils_js_1$3.domEach)(this, function (el, i) {
        var parent = el.parent;
        if (!(0, domhandler_1$1.hasChildren)(el) || !parent) {
            return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        var domSrc = typeof elems[0] === 'function'
            ? elems[0].call(el, i, _this._render(el.children))
            : elems;
        var dom = _this._makeDomArray(domSrc, i < lastIdx);
        // Add element after `this` element
        uniqueSplice(siblings, index + 1, 0, dom, parent);
    });
}
manipulation.after = after;
/* eslint-enable jsdoc/check-param-names*/
/**
 * Insert every element in the set of matched elements after the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').insertAfter('.apple');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="plum">Plum</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to insert elements after.
 * @returns The set of newly inserted elements.
 * @see {@link https://api.jquery.com/insertAfter/}
 */
function insertAfter(target) {
    var _this = this;
    if (typeof target === 'string') {
        target = this._make(target);
    }
    this.remove();
    var clones = [];
    this._makeDomArray(target).forEach(function (el) {
        var clonedSelf = _this.clone().toArray();
        var parent = el.parent;
        if (!parent) {
            return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        // Add cloned `this` element(s) after target element
        uniqueSplice(siblings, index + 1, 0, clonedSelf, parent);
        clones.push.apply(clones, clonedSelf);
    });
    return this._make(clones);
}
manipulation.insertAfter = insertAfter;
/* eslint-disable jsdoc/check-param-names*/
/**
 * Insert content previous to each element in the set of matched elements.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.apple').before('<li class="plum">Plum</li>');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param content - HTML string, DOM element, array of DOM elements or Cheerio
 *   to insert before each element in the set of matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/before/}
 */
function before() {
    var _this = this;
    var elems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        elems[_i] = arguments[_i];
    }
    var lastIdx = this.length - 1;
    return (0, utils_js_1$3.domEach)(this, function (el, i) {
        var parent = el.parent;
        if (!(0, domhandler_1$1.hasChildren)(el) || !parent) {
            return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        var domSrc = typeof elems[0] === 'function'
            ? elems[0].call(el, i, _this._render(el.children))
            : elems;
        var dom = _this._makeDomArray(domSrc, i < lastIdx);
        // Add element before `el` element
        uniqueSplice(siblings, index, 0, dom, parent);
    });
}
manipulation.before = before;
/* eslint-enable jsdoc/check-param-names*/
/**
 * Insert every element in the set of matched elements before the target.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('<li class="plum">Plum</li>').insertBefore('.apple');
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="plum">Plum</li>
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //      <li class="pear">Pear</li>
 * //    </ul>
 * ```
 *
 * @param target - Element to insert elements before.
 * @returns The set of newly inserted elements.
 * @see {@link https://api.jquery.com/insertBefore/}
 */
function insertBefore(target) {
    var _this = this;
    var targetArr = this._make(target);
    this.remove();
    var clones = [];
    (0, utils_js_1$3.domEach)(targetArr, function (el) {
        var clonedSelf = _this.clone().toArray();
        var parent = el.parent;
        if (!parent) {
            return;
        }
        var siblings = parent.children;
        var index = siblings.indexOf(el);
        // If not found, move on
        /* istanbul ignore next */
        if (index < 0)
            return;
        // Add cloned `this` element(s) after target element
        uniqueSplice(siblings, index, 0, clonedSelf, parent);
        clones.push.apply(clones, clonedSelf);
    });
    return this._make(clones);
}
manipulation.insertBefore = insertBefore;
/**
 * Removes the set of matched elements from the DOM and all their children.
 * `selector` filters the set of matched elements to be removed.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('.pear').remove();
 * $.html();
 * //=>  <ul id="fruits">
 * //      <li class="apple">Apple</li>
 * //      <li class="orange">Orange</li>
 * //    </ul>
 * ```
 *
 * @param selector - Optional selector for elements to remove.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/remove/}
 */
function remove(selector) {
    // Filter if we have selector
    var elems = selector ? this.filter(selector) : this;
    (0, utils_js_1$3.domEach)(elems, function (el) {
        (0, domutils_1.removeElement)(el);
        el.prev = el.next = el.parent = null;
    });
    return this;
}
manipulation.remove = remove;
/**
 * Replaces matched elements with `content`.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const plum = $('<li class="plum">Plum</li>');
 * $('.pear').replaceWith(plum);
 * $.html();
 * //=> <ul id="fruits">
 * //     <li class="apple">Apple</li>
 * //     <li class="orange">Orange</li>
 * //     <li class="plum">Plum</li>
 * //   </ul>
 * ```
 *
 * @param content - Replacement for matched elements.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/replaceWith/}
 */
function replaceWith(content) {
    var _this = this;
    return (0, utils_js_1$3.domEach)(this, function (el, i) {
        var parent = el.parent;
        if (!parent) {
            return;
        }
        var siblings = parent.children;
        var cont = typeof content === 'function' ? content.call(el, i, el) : content;
        var dom = _this._makeDomArray(cont);
        /*
         * In the case that `dom` contains nodes that already exist in other
         * structures, ensure those nodes are properly removed.
         */
        (0, parse_js_1.update)(dom, null);
        var index = siblings.indexOf(el);
        // Completely remove old element
        uniqueSplice(siblings, index, 1, dom, parent);
        if (!dom.includes(el)) {
            el.parent = el.prev = el.next = null;
        }
    });
}
manipulation.replaceWith = replaceWith;
/**
 * Empties an element, removing all its children.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * $('ul').empty();
 * $.html();
 * //=>  <ul id="fruits"></ul>
 * ```
 *
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/empty/}
 */
function empty() {
    return (0, utils_js_1$3.domEach)(this, function (el) {
        if (!(0, domhandler_1$1.hasChildren)(el))
            return;
        el.children.forEach(function (child) {
            child.next = child.prev = child.parent = null;
        });
        el.children.length = 0;
    });
}
manipulation.empty = empty;
function html$1(str) {
    var _this = this;
    if (str === undefined) {
        var el = this[0];
        if (!el || !(0, domhandler_1$1.hasChildren)(el))
            return null;
        return this._render(el.children);
    }
    return (0, utils_js_1$3.domEach)(this, function (el) {
        if (!(0, domhandler_1$1.hasChildren)(el))
            return;
        el.children.forEach(function (child) {
            child.next = child.prev = child.parent = null;
        });
        var content = (0, utils_js_1$3.isCheerio)(str)
            ? str.toArray()
            : _this._parse("".concat(str), _this.options, false, el).children;
        (0, parse_js_1.update)(content, el);
    });
}
manipulation.html = html$1;
/**
 * Turns the collection to a string. Alias for `.html()`.
 *
 * @category Manipulation
 * @returns The rendered document.
 */
function toString() {
    return this._render(this);
}
manipulation.toString = toString;
function text(str) {
    var _this = this;
    // If `str` is undefined, act as a "getter"
    if (str === undefined) {
        return (0, static_js_1.text)(this);
    }
    if (typeof str === 'function') {
        // Function support
        return (0, utils_js_1$3.domEach)(this, function (el, i) {
            return _this._make(el).text(str.call(el, i, (0, static_js_1.text)([el])));
        });
    }
    // Append text node to each selected elements
    return (0, utils_js_1$3.domEach)(this, function (el) {
        if (!(0, domhandler_1$1.hasChildren)(el))
            return;
        el.children.forEach(function (child) {
            child.next = child.prev = child.parent = null;
        });
        var textNode = new domhandler_1$1.Text("".concat(str));
        (0, parse_js_1.update)(textNode, el);
    });
}
manipulation.text = text;
/**
 * Clone the cheerio object.
 *
 * @category Manipulation
 * @example
 *
 * ```js
 * const moreFruit = $('#fruits').clone();
 * ```
 *
 * @returns The cloned object.
 * @see {@link https://api.jquery.com/clone/}
 */
function clone() {
    return this._make((0, utils_js_1$3.cloneDom)(this.get()));
}
manipulation.clone = clone;

var css$1 = {};

Object.defineProperty(css$1, "__esModule", { value: true });
css$1.css = void 0;
var utils_js_1$2 = utils;
/**
 * Set multiple CSS properties for every matched element.
 *
 * @category CSS
 * @param prop - The names of the properties.
 * @param val - The new values.
 * @returns The instance itself.
 * @see {@link https://api.jquery.com/css/}
 */
function css(prop, val) {
    if ((prop != null && val != null) ||
        // When `prop` is a "plain" object
        (typeof prop === 'object' && !Array.isArray(prop))) {
        return (0, utils_js_1$2.domEach)(this, function (el, i) {
            if ((0, utils_js_1$2.isTag)(el)) {
                // `prop` can't be an array here anymore.
                setCss(el, prop, val, i);
            }
        });
    }
    if (this.length === 0) {
        return undefined;
    }
    return getCss(this[0], prop);
}
css$1.css = css;
/**
 * Set styles of all elements.
 *
 * @private
 * @param el - Element to set style of.
 * @param prop - Name of property.
 * @param value - Value to set property to.
 * @param idx - Optional index within the selection.
 */
function setCss(el, prop, value, idx) {
    if (typeof prop === 'string') {
        var styles = getCss(el);
        var val = typeof value === 'function' ? value.call(el, idx, styles[prop]) : value;
        if (val === '') {
            delete styles[prop];
        }
        else if (val != null) {
            styles[prop] = val;
        }
        el.attribs['style'] = stringify(styles);
    }
    else if (typeof prop === 'object') {
        Object.keys(prop).forEach(function (k, i) {
            setCss(el, k, prop[k], i);
        });
    }
}
function getCss(el, prop) {
    if (!el || !(0, utils_js_1$2.isTag)(el))
        return;
    var styles = parse(el.attribs['style']);
    if (typeof prop === 'string') {
        return styles[prop];
    }
    if (Array.isArray(prop)) {
        var newStyles_1 = {};
        prop.forEach(function (item) {
            if (styles[item] != null) {
                newStyles_1[item] = styles[item];
            }
        });
        return newStyles_1;
    }
    return styles;
}
/**
 * Stringify `obj` to styles.
 *
 * @private
 * @category CSS
 * @param obj - Object to stringify.
 * @returns The serialized styles.
 */
function stringify(obj) {
    return Object.keys(obj).reduce(function (str, prop) { return "".concat(str).concat(str ? ' ' : '').concat(prop, ": ").concat(obj[prop], ";"); }, '');
}
/**
 * Parse `styles`.
 *
 * @private
 * @category CSS
 * @param styles - Styles to be parsed.
 * @returns The parsed styles.
 */
function parse(styles) {
    styles = (styles || '').trim();
    if (!styles)
        return {};
    var obj = {};
    var key;
    for (var _i = 0, _a = styles.split(';'); _i < _a.length; _i++) {
        var str = _a[_i];
        var n = str.indexOf(':');
        // If there is no :, or if it is the first/last character, add to the previous item's value
        if (n < 1 || n === str.length - 1) {
            var trimmed = str.trimEnd();
            if (trimmed.length > 0 && key !== undefined) {
                obj[key] += ";".concat(trimmed);
            }
        }
        else {
            key = str.slice(0, n).trim();
            obj[key] = str.slice(n + 1).trim();
        }
    }
    return obj;
}

var forms = {};

Object.defineProperty(forms, "__esModule", { value: true });
forms.serializeArray = forms.serialize = void 0;
var utils_js_1$1 = utils;
/*
 * https://github.com/jquery/jquery/blob/2.1.3/src/manipulation/var/rcheckableType.js
 * https://github.com/jquery/jquery/blob/2.1.3/src/serialize.js
 */
var submittableSelector = 'input,select,textarea,keygen';
var r20 = /%20/g;
var rCRLF = /\r?\n/g;
/**
 * Encode a set of form elements as a string for submission.
 *
 * @category Forms
 * @example
 *
 * ```js
 * $('<form><input name="foo" value="bar" /></form>').serialize();
 * //=> 'foo=bar'
 * ```
 *
 * @returns The serialized form.
 * @see {@link https://api.jquery.com/serialize/}
 */
function serialize$1() {
    // Convert form elements into name/value objects
    var arr = this.serializeArray();
    // Serialize each element into a key/value string
    var retArr = arr.map(function (data) {
        return "".concat(encodeURIComponent(data.name), "=").concat(encodeURIComponent(data.value));
    });
    // Return the resulting serialization
    return retArr.join('&').replace(r20, '+');
}
forms.serialize = serialize$1;
/**
 * Encode a set of form elements as an array of names and values.
 *
 * @category Forms
 * @example
 *
 * ```js
 * $('<form><input name="foo" value="bar" /></form>').serializeArray();
 * //=> [ { name: 'foo', value: 'bar' } ]
 * ```
 *
 * @returns The serialized form.
 * @see {@link https://api.jquery.com/serializeArray/}
 */
function serializeArray() {
    var _this = this;
    // Resolve all form elements from either forms or collections of form elements
    return this.map(function (_, elem) {
        var $elem = _this._make(elem);
        if ((0, utils_js_1$1.isTag)(elem) && elem.name === 'form') {
            return $elem.find(submittableSelector).toArray();
        }
        return $elem.filter(submittableSelector).toArray();
    })
        .filter(
    // Verify elements have a name (`attr.name`) and are not disabled (`:enabled`)
    '[name!=""]:enabled' +
        // And cannot be clicked (`[type=submit]`) or are used in `x-www-form-urlencoded` (`[type=file]`)
        ':not(:submit, :button, :image, :reset, :file)' +
        // And are either checked/don't have a checkable state
        ':matches([checked], :not(:checkbox, :radio))'
    // Convert each of the elements to its value(s)
    )
        .map(function (_, elem) {
        var _a;
        var $elem = _this._make(elem);
        var name = $elem.attr('name'); // We have filtered for elements with a name before.
        // If there is no value set (e.g. `undefined`, `null`), then default value to empty
        var value = (_a = $elem.val()) !== null && _a !== void 0 ? _a : '';
        // If we have an array of values (e.g. `<select multiple>`), return an array of key/value pairs
        if (Array.isArray(value)) {
            return value.map(function (val) {
                /*
                 * We trim replace any line endings (e.g. `\r` or `\r\n` with `\r\n`) to guarantee consistency across platforms
                 * These can occur inside of `<textarea>'s`
                 */
                return ({ name: name, value: val.replace(rCRLF, '\r\n') });
            });
        }
        // Otherwise (e.g. `<input type="text">`, return only one key/value pair
        return { name: name, value: value.replace(rCRLF, '\r\n') };
    })
        .toArray();
}
forms.serializeArray = serializeArray;

var __createBinding$2 = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault$2 = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar$2 = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$2(result, mod, k);
    __setModuleDefault$2(result, mod);
    return result;
};
Object.defineProperty(cheerio$1, "__esModule", { value: true });
cheerio$1.Cheerio = void 0;
var Attributes = __importStar$2(attributes$2);
var Traversing = __importStar$2(traversing);
var Manipulation = __importStar$2(manipulation);
var Css = __importStar$2(css$1);
var Forms = __importStar$2(forms);
var Cheerio = /** @class */ (function () {
    /**
     * Instance of cheerio. Methods are specified in the modules. Usage of this
     * constructor is not recommended. Please use `$.load` instead.
     *
     * @private
     * @param elements - The new selection.
     * @param root - Sets the root node.
     * @param options - Options for the instance.
     */
    function Cheerio(elements, root, options) {
        this.length = 0;
        this.options = options;
        this._root = root;
        if (elements) {
            for (var idx = 0; idx < elements.length; idx++) {
                this[idx] = elements[idx];
            }
            this.length = elements.length;
        }
    }
    return Cheerio;
}());
cheerio$1.Cheerio = Cheerio;
/** Set a signature of the object. */
Cheerio.prototype.cheerio = '[cheerio object]';
/*
 * Make cheerio an array-like object
 */
Cheerio.prototype.splice = Array.prototype.splice;
// Support for (const element of $(...)) iteration:
Cheerio.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];
// Plug in the API
Object.assign(Cheerio.prototype, Attributes, Traversing, Manipulation, Css, Forms);

var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding$1 = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault$1 = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar$1 = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding$1(result, mod, k);
    __setModuleDefault$1(result, mod);
    return result;
};
Object.defineProperty(load, "__esModule", { value: true });
load.getLoad = void 0;
var options_js_1 = __importStar$1(options);
var staticMethods = __importStar$1(_static);
var cheerio_js_1 = cheerio$1;
var utils_js_1 = utils;
function getLoad(parse, render) {
    /**
     * Create a querying function, bound to a document created from the provided markup.
     *
     * Note that similar to web browser contexts, this operation may introduce
     * `<html>`, `<head>`, and `<body>` elements; set `isDocument` to `false` to
     * switch to fragment mode and disable this.
     *
     * @param content - Markup to be loaded.
     * @param options - Options for the created instance.
     * @param isDocument - Allows parser to be switched to fragment mode.
     * @returns The loaded document.
     * @see {@link https://cheerio.js.org#loading} for additional usage information.
     */
    return function load(content, options, isDocument) {
        if (isDocument === void 0) { isDocument = true; }
        if (content == null) {
            throw new Error('cheerio.load() expects a string');
        }
        var internalOpts = __assign(__assign({}, options_js_1.default), (0, options_js_1.flatten)(options));
        var initialRoot = parse(content, internalOpts, isDocument, null);
        /** Create an extended class here, so that extensions only live on one instance. */
        var LoadedCheerio = /** @class */ (function (_super) {
            __extends(LoadedCheerio, _super);
            function LoadedCheerio() {
                return _super !== null && _super.apply(this, arguments) || this;
            }
            LoadedCheerio.prototype._make = function (selector, context) {
                var cheerio = initialize(selector, context);
                cheerio.prevObject = this;
                return cheerio;
            };
            LoadedCheerio.prototype._parse = function (content, options, isDocument, context) {
                return parse(content, options, isDocument, context);
            };
            LoadedCheerio.prototype._render = function (dom) {
                return render(dom, this.options);
            };
            return LoadedCheerio;
        }(cheerio_js_1.Cheerio));
        function initialize(selector, context, root, opts) {
            if (root === void 0) { root = initialRoot; }
            // $($)
            if (selector && (0, utils_js_1.isCheerio)(selector))
                return selector;
            var options = __assign(__assign({}, internalOpts), (0, options_js_1.flatten)(opts));
            var r = typeof root === 'string'
                ? [parse(root, options, false, null)]
                : 'length' in root
                    ? root
                    : [root];
            var rootInstance = (0, utils_js_1.isCheerio)(r)
                ? r
                : new LoadedCheerio(r, null, options);
            // Add a cyclic reference, so that calling methods on `_root` never fails.
            rootInstance._root = rootInstance;
            // $(), $(null), $(undefined), $(false)
            if (!selector) {
                return new LoadedCheerio(undefined, rootInstance, options);
            }
            var elements = typeof selector === 'string' && (0, utils_js_1.isHtml)(selector)
                ? // $(<html>)
                    parse(selector, options, false, null).children
                : isNode(selector)
                    ? // $(dom)
                        [selector]
                    : Array.isArray(selector)
                        ? // $([dom])
                            selector
                        : undefined;
            var instance = new LoadedCheerio(elements, rootInstance, options);
            if (elements) {
                return instance;
            }
            if (typeof selector !== 'string') {
                throw new Error('Unexpected type of selector');
            }
            // We know that our selector is a string now.
            var search = selector;
            var searchContext = !context
                ? // If we don't have a context, maybe we have a root, from loading
                    rootInstance
                : typeof context === 'string'
                    ? (0, utils_js_1.isHtml)(context)
                        ? // $('li', '<ul>...</ul>')
                            new LoadedCheerio([parse(context, options, false, null)], rootInstance, options)
                        : // $('li', 'ul')
                            ((search = "".concat(context, " ").concat(search)), rootInstance)
                    : (0, utils_js_1.isCheerio)(context)
                        ? // $('li', $)
                            context
                        : // $('li', node), $('li', [nodes])
                            new LoadedCheerio(Array.isArray(context) ? context : [context], rootInstance, options);
            // If we still don't have a context, return
            if (!searchContext)
                return instance;
            /*
             * #id, .class, tag
             */
            return searchContext.find(search);
        }
        // Add in static methods & properties
        Object.assign(initialize, staticMethods, {
            load: load,
            // `_root` and `_options` are used in static methods.
            _root: initialRoot,
            _options: internalOpts,
            // Add `fn` for plugins
            fn: LoadedCheerio.prototype,
            // Add the prototype here to maintain `instanceof` behavior.
            prototype: LoadedCheerio.prototype,
        });
        return initialize;
    };
}
load.getLoad = getLoad;
function isNode(obj) {
    return (!!obj.name ||
        obj.type === 'root' ||
        obj.type === 'text' ||
        obj.type === 'comment');
}

var parse5Adapter = {};

var cjs$1 = {};

var parser = {};

var tokenizer = {};

var preprocessor = {};

var unicode$1 = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isUndefinedCodePoint = exports.isControlCodePoint = exports.getSurrogatePairCodePoint = exports.isSurrogatePair = exports.isSurrogate = exports.SEQUENCES = exports.CODE_POINTS = exports.REPLACEMENT_CHARACTER = void 0;
	const UNDEFINED_CODE_POINTS = new Set([
	    65534, 65535, 131070, 131071, 196606, 196607, 262142, 262143, 327678, 327679, 393214,
	    393215, 458750, 458751, 524286, 524287, 589822, 589823, 655358, 655359, 720894,
	    720895, 786430, 786431, 851966, 851967, 917502, 917503, 983038, 983039, 1048574,
	    1048575, 1114110, 1114111,
	]);
	exports.REPLACEMENT_CHARACTER = '\uFFFD';
	(function (CODE_POINTS) {
	    CODE_POINTS[CODE_POINTS["EOF"] = -1] = "EOF";
	    CODE_POINTS[CODE_POINTS["NULL"] = 0] = "NULL";
	    CODE_POINTS[CODE_POINTS["TABULATION"] = 9] = "TABULATION";
	    CODE_POINTS[CODE_POINTS["CARRIAGE_RETURN"] = 13] = "CARRIAGE_RETURN";
	    CODE_POINTS[CODE_POINTS["LINE_FEED"] = 10] = "LINE_FEED";
	    CODE_POINTS[CODE_POINTS["FORM_FEED"] = 12] = "FORM_FEED";
	    CODE_POINTS[CODE_POINTS["SPACE"] = 32] = "SPACE";
	    CODE_POINTS[CODE_POINTS["EXCLAMATION_MARK"] = 33] = "EXCLAMATION_MARK";
	    CODE_POINTS[CODE_POINTS["QUOTATION_MARK"] = 34] = "QUOTATION_MARK";
	    CODE_POINTS[CODE_POINTS["NUMBER_SIGN"] = 35] = "NUMBER_SIGN";
	    CODE_POINTS[CODE_POINTS["AMPERSAND"] = 38] = "AMPERSAND";
	    CODE_POINTS[CODE_POINTS["APOSTROPHE"] = 39] = "APOSTROPHE";
	    CODE_POINTS[CODE_POINTS["HYPHEN_MINUS"] = 45] = "HYPHEN_MINUS";
	    CODE_POINTS[CODE_POINTS["SOLIDUS"] = 47] = "SOLIDUS";
	    CODE_POINTS[CODE_POINTS["DIGIT_0"] = 48] = "DIGIT_0";
	    CODE_POINTS[CODE_POINTS["DIGIT_9"] = 57] = "DIGIT_9";
	    CODE_POINTS[CODE_POINTS["SEMICOLON"] = 59] = "SEMICOLON";
	    CODE_POINTS[CODE_POINTS["LESS_THAN_SIGN"] = 60] = "LESS_THAN_SIGN";
	    CODE_POINTS[CODE_POINTS["EQUALS_SIGN"] = 61] = "EQUALS_SIGN";
	    CODE_POINTS[CODE_POINTS["GREATER_THAN_SIGN"] = 62] = "GREATER_THAN_SIGN";
	    CODE_POINTS[CODE_POINTS["QUESTION_MARK"] = 63] = "QUESTION_MARK";
	    CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_A"] = 65] = "LATIN_CAPITAL_A";
	    CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_F"] = 70] = "LATIN_CAPITAL_F";
	    CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_X"] = 88] = "LATIN_CAPITAL_X";
	    CODE_POINTS[CODE_POINTS["LATIN_CAPITAL_Z"] = 90] = "LATIN_CAPITAL_Z";
	    CODE_POINTS[CODE_POINTS["RIGHT_SQUARE_BRACKET"] = 93] = "RIGHT_SQUARE_BRACKET";
	    CODE_POINTS[CODE_POINTS["GRAVE_ACCENT"] = 96] = "GRAVE_ACCENT";
	    CODE_POINTS[CODE_POINTS["LATIN_SMALL_A"] = 97] = "LATIN_SMALL_A";
	    CODE_POINTS[CODE_POINTS["LATIN_SMALL_F"] = 102] = "LATIN_SMALL_F";
	    CODE_POINTS[CODE_POINTS["LATIN_SMALL_X"] = 120] = "LATIN_SMALL_X";
	    CODE_POINTS[CODE_POINTS["LATIN_SMALL_Z"] = 122] = "LATIN_SMALL_Z";
	    CODE_POINTS[CODE_POINTS["REPLACEMENT_CHARACTER"] = 65533] = "REPLACEMENT_CHARACTER";
	})(exports.CODE_POINTS || (exports.CODE_POINTS = {}));
	exports.SEQUENCES = {
	    DASH_DASH: '--',
	    CDATA_START: '[CDATA[',
	    DOCTYPE: 'doctype',
	    SCRIPT: 'script',
	    PUBLIC: 'public',
	    SYSTEM: 'system',
	};
	//Surrogates
	function isSurrogate(cp) {
	    return cp >= 55296 && cp <= 57343;
	}
	exports.isSurrogate = isSurrogate;
	function isSurrogatePair(cp) {
	    return cp >= 56320 && cp <= 57343;
	}
	exports.isSurrogatePair = isSurrogatePair;
	function getSurrogatePairCodePoint(cp1, cp2) {
	    return (cp1 - 55296) * 1024 + 9216 + cp2;
	}
	exports.getSurrogatePairCodePoint = getSurrogatePairCodePoint;
	//NOTE: excluding NULL and ASCII whitespace
	function isControlCodePoint(cp) {
	    return ((cp !== 0x20 && cp !== 0x0a && cp !== 0x0d && cp !== 0x09 && cp !== 0x0c && cp >= 0x01 && cp <= 0x1f) ||
	        (cp >= 0x7f && cp <= 0x9f));
	}
	exports.isControlCodePoint = isControlCodePoint;
	function isUndefinedCodePoint(cp) {
	    return (cp >= 64976 && cp <= 65007) || UNDEFINED_CODE_POINTS.has(cp);
	}
	exports.isUndefinedCodePoint = isUndefinedCodePoint;
	
} (unicode$1));

var errorCodes = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.ERR = void 0;
	(function (ERR) {
	    ERR["controlCharacterInInputStream"] = "control-character-in-input-stream";
	    ERR["noncharacterInInputStream"] = "noncharacter-in-input-stream";
	    ERR["surrogateInInputStream"] = "surrogate-in-input-stream";
	    ERR["nonVoidHtmlElementStartTagWithTrailingSolidus"] = "non-void-html-element-start-tag-with-trailing-solidus";
	    ERR["endTagWithAttributes"] = "end-tag-with-attributes";
	    ERR["endTagWithTrailingSolidus"] = "end-tag-with-trailing-solidus";
	    ERR["unexpectedSolidusInTag"] = "unexpected-solidus-in-tag";
	    ERR["unexpectedNullCharacter"] = "unexpected-null-character";
	    ERR["unexpectedQuestionMarkInsteadOfTagName"] = "unexpected-question-mark-instead-of-tag-name";
	    ERR["invalidFirstCharacterOfTagName"] = "invalid-first-character-of-tag-name";
	    ERR["unexpectedEqualsSignBeforeAttributeName"] = "unexpected-equals-sign-before-attribute-name";
	    ERR["missingEndTagName"] = "missing-end-tag-name";
	    ERR["unexpectedCharacterInAttributeName"] = "unexpected-character-in-attribute-name";
	    ERR["unknownNamedCharacterReference"] = "unknown-named-character-reference";
	    ERR["missingSemicolonAfterCharacterReference"] = "missing-semicolon-after-character-reference";
	    ERR["unexpectedCharacterAfterDoctypeSystemIdentifier"] = "unexpected-character-after-doctype-system-identifier";
	    ERR["unexpectedCharacterInUnquotedAttributeValue"] = "unexpected-character-in-unquoted-attribute-value";
	    ERR["eofBeforeTagName"] = "eof-before-tag-name";
	    ERR["eofInTag"] = "eof-in-tag";
	    ERR["missingAttributeValue"] = "missing-attribute-value";
	    ERR["missingWhitespaceBetweenAttributes"] = "missing-whitespace-between-attributes";
	    ERR["missingWhitespaceAfterDoctypePublicKeyword"] = "missing-whitespace-after-doctype-public-keyword";
	    ERR["missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers"] = "missing-whitespace-between-doctype-public-and-system-identifiers";
	    ERR["missingWhitespaceAfterDoctypeSystemKeyword"] = "missing-whitespace-after-doctype-system-keyword";
	    ERR["missingQuoteBeforeDoctypePublicIdentifier"] = "missing-quote-before-doctype-public-identifier";
	    ERR["missingQuoteBeforeDoctypeSystemIdentifier"] = "missing-quote-before-doctype-system-identifier";
	    ERR["missingDoctypePublicIdentifier"] = "missing-doctype-public-identifier";
	    ERR["missingDoctypeSystemIdentifier"] = "missing-doctype-system-identifier";
	    ERR["abruptDoctypePublicIdentifier"] = "abrupt-doctype-public-identifier";
	    ERR["abruptDoctypeSystemIdentifier"] = "abrupt-doctype-system-identifier";
	    ERR["cdataInHtmlContent"] = "cdata-in-html-content";
	    ERR["incorrectlyOpenedComment"] = "incorrectly-opened-comment";
	    ERR["eofInScriptHtmlCommentLikeText"] = "eof-in-script-html-comment-like-text";
	    ERR["eofInDoctype"] = "eof-in-doctype";
	    ERR["nestedComment"] = "nested-comment";
	    ERR["abruptClosingOfEmptyComment"] = "abrupt-closing-of-empty-comment";
	    ERR["eofInComment"] = "eof-in-comment";
	    ERR["incorrectlyClosedComment"] = "incorrectly-closed-comment";
	    ERR["eofInCdata"] = "eof-in-cdata";
	    ERR["absenceOfDigitsInNumericCharacterReference"] = "absence-of-digits-in-numeric-character-reference";
	    ERR["nullCharacterReference"] = "null-character-reference";
	    ERR["surrogateCharacterReference"] = "surrogate-character-reference";
	    ERR["characterReferenceOutsideUnicodeRange"] = "character-reference-outside-unicode-range";
	    ERR["controlCharacterReference"] = "control-character-reference";
	    ERR["noncharacterCharacterReference"] = "noncharacter-character-reference";
	    ERR["missingWhitespaceBeforeDoctypeName"] = "missing-whitespace-before-doctype-name";
	    ERR["missingDoctypeName"] = "missing-doctype-name";
	    ERR["invalidCharacterSequenceAfterDoctypeName"] = "invalid-character-sequence-after-doctype-name";
	    ERR["duplicateAttribute"] = "duplicate-attribute";
	    ERR["nonConformingDoctype"] = "non-conforming-doctype";
	    ERR["missingDoctype"] = "missing-doctype";
	    ERR["misplacedDoctype"] = "misplaced-doctype";
	    ERR["endTagWithoutMatchingOpenElement"] = "end-tag-without-matching-open-element";
	    ERR["closingOfElementWithOpenChildElements"] = "closing-of-element-with-open-child-elements";
	    ERR["disallowedContentInNoscriptInHead"] = "disallowed-content-in-noscript-in-head";
	    ERR["openElementsLeftAfterEof"] = "open-elements-left-after-eof";
	    ERR["abandonedHeadElementChild"] = "abandoned-head-element-child";
	    ERR["misplacedStartTagForHeadElement"] = "misplaced-start-tag-for-head-element";
	    ERR["nestedNoscriptInHead"] = "nested-noscript-in-head";
	    ERR["eofInElementThatCanContainOnlyText"] = "eof-in-element-that-can-contain-only-text";
	})(exports.ERR || (exports.ERR = {}));
	
} (errorCodes));

Object.defineProperty(preprocessor, "__esModule", { value: true });
preprocessor.Preprocessor = void 0;
const unicode_js_1$1 = unicode$1;
const error_codes_js_1$2 = errorCodes;
//Const
const DEFAULT_BUFFER_WATERLINE = 1 << 16;
//Preprocessor
//NOTE: HTML input preprocessing
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/parsing.html#preprocessing-the-input-stream)
class Preprocessor {
    constructor(handler) {
        this.handler = handler;
        this.html = '';
        this.pos = -1;
        // NOTE: Initial `lastGapPos` is -2, to ensure `col` on initialisation is 0
        this.lastGapPos = -2;
        this.gapStack = [];
        this.skipNextNewLine = false;
        this.lastChunkWritten = false;
        this.endOfChunkHit = false;
        this.bufferWaterline = DEFAULT_BUFFER_WATERLINE;
        this.isEol = false;
        this.lineStartPos = 0;
        this.droppedBufferSize = 0;
        this.line = 1;
        //NOTE: avoid reporting errors twice on advance/retreat
        this.lastErrOffset = -1;
    }
    /** The column on the current line. If we just saw a gap (eg. a surrogate pair), return the index before. */
    get col() {
        return this.pos - this.lineStartPos + Number(this.lastGapPos !== this.pos);
    }
    get offset() {
        return this.droppedBufferSize + this.pos;
    }
    getError(code) {
        const { line, col, offset } = this;
        return {
            code,
            startLine: line,
            endLine: line,
            startCol: col,
            endCol: col,
            startOffset: offset,
            endOffset: offset,
        };
    }
    _err(code) {
        if (this.handler.onParseError && this.lastErrOffset !== this.offset) {
            this.lastErrOffset = this.offset;
            this.handler.onParseError(this.getError(code));
        }
    }
    _addGap() {
        this.gapStack.push(this.lastGapPos);
        this.lastGapPos = this.pos;
    }
    _processSurrogate(cp) {
        //NOTE: try to peek a surrogate pair
        if (this.pos !== this.html.length - 1) {
            const nextCp = this.html.charCodeAt(this.pos + 1);
            if ((0, unicode_js_1$1.isSurrogatePair)(nextCp)) {
                //NOTE: we have a surrogate pair. Peek pair character and recalculate code point.
                this.pos++;
                //NOTE: add a gap that should be avoided during retreat
                this._addGap();
                return (0, unicode_js_1$1.getSurrogatePairCodePoint)(cp, nextCp);
            }
        }
        //NOTE: we are at the end of a chunk, therefore we can't infer the surrogate pair yet.
        else if (!this.lastChunkWritten) {
            this.endOfChunkHit = true;
            return unicode_js_1$1.CODE_POINTS.EOF;
        }
        //NOTE: isolated surrogate
        this._err(error_codes_js_1$2.ERR.surrogateInInputStream);
        return cp;
    }
    willDropParsedChunk() {
        return this.pos > this.bufferWaterline;
    }
    dropParsedChunk() {
        if (this.willDropParsedChunk()) {
            this.html = this.html.substring(this.pos);
            this.lineStartPos -= this.pos;
            this.droppedBufferSize += this.pos;
            this.pos = 0;
            this.lastGapPos = -2;
            this.gapStack.length = 0;
        }
    }
    write(chunk, isLastChunk) {
        if (this.html.length > 0) {
            this.html += chunk;
        }
        else {
            this.html = chunk;
        }
        this.endOfChunkHit = false;
        this.lastChunkWritten = isLastChunk;
    }
    insertHtmlAtCurrentPos(chunk) {
        this.html = this.html.substring(0, this.pos + 1) + chunk + this.html.substring(this.pos + 1);
        this.endOfChunkHit = false;
    }
    startsWith(pattern, caseSensitive) {
        // Check if our buffer has enough characters
        if (this.pos + pattern.length > this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return false;
        }
        if (caseSensitive) {
            return this.html.startsWith(pattern, this.pos);
        }
        for (let i = 0; i < pattern.length; i++) {
            const cp = this.html.charCodeAt(this.pos + i) | 0x20;
            if (cp !== pattern.charCodeAt(i)) {
                return false;
            }
        }
        return true;
    }
    peek(offset) {
        const pos = this.pos + offset;
        if (pos >= this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return unicode_js_1$1.CODE_POINTS.EOF;
        }
        return this.html.charCodeAt(pos);
    }
    advance() {
        this.pos++;
        //NOTE: LF should be in the last column of the line
        if (this.isEol) {
            this.isEol = false;
            this.line++;
            this.lineStartPos = this.pos;
        }
        if (this.pos >= this.html.length) {
            this.endOfChunkHit = !this.lastChunkWritten;
            return unicode_js_1$1.CODE_POINTS.EOF;
        }
        let cp = this.html.charCodeAt(this.pos);
        //NOTE: all U+000D CARRIAGE RETURN (CR) characters must be converted to U+000A LINE FEED (LF) characters
        if (cp === unicode_js_1$1.CODE_POINTS.CARRIAGE_RETURN) {
            this.isEol = true;
            this.skipNextNewLine = true;
            return unicode_js_1$1.CODE_POINTS.LINE_FEED;
        }
        //NOTE: any U+000A LINE FEED (LF) characters that immediately follow a U+000D CARRIAGE RETURN (CR) character
        //must be ignored.
        if (cp === unicode_js_1$1.CODE_POINTS.LINE_FEED) {
            this.isEol = true;
            if (this.skipNextNewLine) {
                // `line` will be bumped again in the recursive call.
                this.line--;
                this.skipNextNewLine = false;
                this._addGap();
                return this.advance();
            }
        }
        this.skipNextNewLine = false;
        if ((0, unicode_js_1$1.isSurrogate)(cp)) {
            cp = this._processSurrogate(cp);
        }
        //OPTIMIZATION: first check if code point is in the common allowed
        //range (ASCII alphanumeric, whitespaces, big chunk of BMP)
        //before going into detailed performance cost validation.
        const isCommonValidRange = this.handler.onParseError === null ||
            (cp > 0x1f && cp < 0x7f) ||
            cp === unicode_js_1$1.CODE_POINTS.LINE_FEED ||
            cp === unicode_js_1$1.CODE_POINTS.CARRIAGE_RETURN ||
            (cp > 0x9f && cp < 64976);
        if (!isCommonValidRange) {
            this._checkForProblematicCharacters(cp);
        }
        return cp;
    }
    _checkForProblematicCharacters(cp) {
        if ((0, unicode_js_1$1.isControlCodePoint)(cp)) {
            this._err(error_codes_js_1$2.ERR.controlCharacterInInputStream);
        }
        else if ((0, unicode_js_1$1.isUndefinedCodePoint)(cp)) {
            this._err(error_codes_js_1$2.ERR.noncharacterInInputStream);
        }
    }
    retreat(count) {
        this.pos -= count;
        while (this.pos < this.lastGapPos) {
            this.lastGapPos = this.gapStack.pop();
            this.pos--;
        }
        this.isEol = false;
    }
}
preprocessor.Preprocessor = Preprocessor;

var token = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.getTokenAttr = exports.TokenType = void 0;
	(function (TokenType) {
	    TokenType[TokenType["CHARACTER"] = 0] = "CHARACTER";
	    TokenType[TokenType["NULL_CHARACTER"] = 1] = "NULL_CHARACTER";
	    TokenType[TokenType["WHITESPACE_CHARACTER"] = 2] = "WHITESPACE_CHARACTER";
	    TokenType[TokenType["START_TAG"] = 3] = "START_TAG";
	    TokenType[TokenType["END_TAG"] = 4] = "END_TAG";
	    TokenType[TokenType["COMMENT"] = 5] = "COMMENT";
	    TokenType[TokenType["DOCTYPE"] = 6] = "DOCTYPE";
	    TokenType[TokenType["EOF"] = 7] = "EOF";
	    TokenType[TokenType["HIBERNATION"] = 8] = "HIBERNATION";
	})(exports.TokenType || (exports.TokenType = {}));
	function getTokenAttr(token, attrName) {
	    for (let i = token.attrs.length - 1; i >= 0; i--) {
	        if (token.attrs[i].name === attrName) {
	            return token.attrs[i].value;
	        }
	    }
	    return null;
	}
	exports.getTokenAttr = getTokenAttr;
	
} (token));

var html = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.hasUnescapedText = exports.isNumberedHeader = exports.SPECIAL_ELEMENTS = exports.getTagID = exports.TAG_ID = exports.TAG_NAMES = exports.DOCUMENT_MODE = exports.ATTRS = exports.NS = void 0;
	/** All valid namespaces in HTML. */
	var NS;
	(function (NS) {
	    NS["HTML"] = "http://www.w3.org/1999/xhtml";
	    NS["MATHML"] = "http://www.w3.org/1998/Math/MathML";
	    NS["SVG"] = "http://www.w3.org/2000/svg";
	    NS["XLINK"] = "http://www.w3.org/1999/xlink";
	    NS["XML"] = "http://www.w3.org/XML/1998/namespace";
	    NS["XMLNS"] = "http://www.w3.org/2000/xmlns/";
	})(NS = exports.NS || (exports.NS = {}));
	(function (ATTRS) {
	    ATTRS["TYPE"] = "type";
	    ATTRS["ACTION"] = "action";
	    ATTRS["ENCODING"] = "encoding";
	    ATTRS["PROMPT"] = "prompt";
	    ATTRS["NAME"] = "name";
	    ATTRS["COLOR"] = "color";
	    ATTRS["FACE"] = "face";
	    ATTRS["SIZE"] = "size";
	})(exports.ATTRS || (exports.ATTRS = {}));
	(function (DOCUMENT_MODE) {
	    DOCUMENT_MODE["NO_QUIRKS"] = "no-quirks";
	    DOCUMENT_MODE["QUIRKS"] = "quirks";
	    DOCUMENT_MODE["LIMITED_QUIRKS"] = "limited-quirks";
	})(exports.DOCUMENT_MODE || (exports.DOCUMENT_MODE = {}));
	var TAG_NAMES;
	(function (TAG_NAMES) {
	    TAG_NAMES["A"] = "a";
	    TAG_NAMES["ADDRESS"] = "address";
	    TAG_NAMES["ANNOTATION_XML"] = "annotation-xml";
	    TAG_NAMES["APPLET"] = "applet";
	    TAG_NAMES["AREA"] = "area";
	    TAG_NAMES["ARTICLE"] = "article";
	    TAG_NAMES["ASIDE"] = "aside";
	    TAG_NAMES["B"] = "b";
	    TAG_NAMES["BASE"] = "base";
	    TAG_NAMES["BASEFONT"] = "basefont";
	    TAG_NAMES["BGSOUND"] = "bgsound";
	    TAG_NAMES["BIG"] = "big";
	    TAG_NAMES["BLOCKQUOTE"] = "blockquote";
	    TAG_NAMES["BODY"] = "body";
	    TAG_NAMES["BR"] = "br";
	    TAG_NAMES["BUTTON"] = "button";
	    TAG_NAMES["CAPTION"] = "caption";
	    TAG_NAMES["CENTER"] = "center";
	    TAG_NAMES["CODE"] = "code";
	    TAG_NAMES["COL"] = "col";
	    TAG_NAMES["COLGROUP"] = "colgroup";
	    TAG_NAMES["DD"] = "dd";
	    TAG_NAMES["DESC"] = "desc";
	    TAG_NAMES["DETAILS"] = "details";
	    TAG_NAMES["DIALOG"] = "dialog";
	    TAG_NAMES["DIR"] = "dir";
	    TAG_NAMES["DIV"] = "div";
	    TAG_NAMES["DL"] = "dl";
	    TAG_NAMES["DT"] = "dt";
	    TAG_NAMES["EM"] = "em";
	    TAG_NAMES["EMBED"] = "embed";
	    TAG_NAMES["FIELDSET"] = "fieldset";
	    TAG_NAMES["FIGCAPTION"] = "figcaption";
	    TAG_NAMES["FIGURE"] = "figure";
	    TAG_NAMES["FONT"] = "font";
	    TAG_NAMES["FOOTER"] = "footer";
	    TAG_NAMES["FOREIGN_OBJECT"] = "foreignObject";
	    TAG_NAMES["FORM"] = "form";
	    TAG_NAMES["FRAME"] = "frame";
	    TAG_NAMES["FRAMESET"] = "frameset";
	    TAG_NAMES["H1"] = "h1";
	    TAG_NAMES["H2"] = "h2";
	    TAG_NAMES["H3"] = "h3";
	    TAG_NAMES["H4"] = "h4";
	    TAG_NAMES["H5"] = "h5";
	    TAG_NAMES["H6"] = "h6";
	    TAG_NAMES["HEAD"] = "head";
	    TAG_NAMES["HEADER"] = "header";
	    TAG_NAMES["HGROUP"] = "hgroup";
	    TAG_NAMES["HR"] = "hr";
	    TAG_NAMES["HTML"] = "html";
	    TAG_NAMES["I"] = "i";
	    TAG_NAMES["IMG"] = "img";
	    TAG_NAMES["IMAGE"] = "image";
	    TAG_NAMES["INPUT"] = "input";
	    TAG_NAMES["IFRAME"] = "iframe";
	    TAG_NAMES["KEYGEN"] = "keygen";
	    TAG_NAMES["LABEL"] = "label";
	    TAG_NAMES["LI"] = "li";
	    TAG_NAMES["LINK"] = "link";
	    TAG_NAMES["LISTING"] = "listing";
	    TAG_NAMES["MAIN"] = "main";
	    TAG_NAMES["MALIGNMARK"] = "malignmark";
	    TAG_NAMES["MARQUEE"] = "marquee";
	    TAG_NAMES["MATH"] = "math";
	    TAG_NAMES["MENU"] = "menu";
	    TAG_NAMES["META"] = "meta";
	    TAG_NAMES["MGLYPH"] = "mglyph";
	    TAG_NAMES["MI"] = "mi";
	    TAG_NAMES["MO"] = "mo";
	    TAG_NAMES["MN"] = "mn";
	    TAG_NAMES["MS"] = "ms";
	    TAG_NAMES["MTEXT"] = "mtext";
	    TAG_NAMES["NAV"] = "nav";
	    TAG_NAMES["NOBR"] = "nobr";
	    TAG_NAMES["NOFRAMES"] = "noframes";
	    TAG_NAMES["NOEMBED"] = "noembed";
	    TAG_NAMES["NOSCRIPT"] = "noscript";
	    TAG_NAMES["OBJECT"] = "object";
	    TAG_NAMES["OL"] = "ol";
	    TAG_NAMES["OPTGROUP"] = "optgroup";
	    TAG_NAMES["OPTION"] = "option";
	    TAG_NAMES["P"] = "p";
	    TAG_NAMES["PARAM"] = "param";
	    TAG_NAMES["PLAINTEXT"] = "plaintext";
	    TAG_NAMES["PRE"] = "pre";
	    TAG_NAMES["RB"] = "rb";
	    TAG_NAMES["RP"] = "rp";
	    TAG_NAMES["RT"] = "rt";
	    TAG_NAMES["RTC"] = "rtc";
	    TAG_NAMES["RUBY"] = "ruby";
	    TAG_NAMES["S"] = "s";
	    TAG_NAMES["SCRIPT"] = "script";
	    TAG_NAMES["SECTION"] = "section";
	    TAG_NAMES["SELECT"] = "select";
	    TAG_NAMES["SOURCE"] = "source";
	    TAG_NAMES["SMALL"] = "small";
	    TAG_NAMES["SPAN"] = "span";
	    TAG_NAMES["STRIKE"] = "strike";
	    TAG_NAMES["STRONG"] = "strong";
	    TAG_NAMES["STYLE"] = "style";
	    TAG_NAMES["SUB"] = "sub";
	    TAG_NAMES["SUMMARY"] = "summary";
	    TAG_NAMES["SUP"] = "sup";
	    TAG_NAMES["TABLE"] = "table";
	    TAG_NAMES["TBODY"] = "tbody";
	    TAG_NAMES["TEMPLATE"] = "template";
	    TAG_NAMES["TEXTAREA"] = "textarea";
	    TAG_NAMES["TFOOT"] = "tfoot";
	    TAG_NAMES["TD"] = "td";
	    TAG_NAMES["TH"] = "th";
	    TAG_NAMES["THEAD"] = "thead";
	    TAG_NAMES["TITLE"] = "title";
	    TAG_NAMES["TR"] = "tr";
	    TAG_NAMES["TRACK"] = "track";
	    TAG_NAMES["TT"] = "tt";
	    TAG_NAMES["U"] = "u";
	    TAG_NAMES["UL"] = "ul";
	    TAG_NAMES["SVG"] = "svg";
	    TAG_NAMES["VAR"] = "var";
	    TAG_NAMES["WBR"] = "wbr";
	    TAG_NAMES["XMP"] = "xmp";
	})(TAG_NAMES = exports.TAG_NAMES || (exports.TAG_NAMES = {}));
	/**
	 * Tag IDs are numeric IDs for known tag names.
	 *
	 * We use tag IDs to improve the performance of tag name comparisons.
	 */
	var TAG_ID;
	(function (TAG_ID) {
	    TAG_ID[TAG_ID["UNKNOWN"] = 0] = "UNKNOWN";
	    TAG_ID[TAG_ID["A"] = 1] = "A";
	    TAG_ID[TAG_ID["ADDRESS"] = 2] = "ADDRESS";
	    TAG_ID[TAG_ID["ANNOTATION_XML"] = 3] = "ANNOTATION_XML";
	    TAG_ID[TAG_ID["APPLET"] = 4] = "APPLET";
	    TAG_ID[TAG_ID["AREA"] = 5] = "AREA";
	    TAG_ID[TAG_ID["ARTICLE"] = 6] = "ARTICLE";
	    TAG_ID[TAG_ID["ASIDE"] = 7] = "ASIDE";
	    TAG_ID[TAG_ID["B"] = 8] = "B";
	    TAG_ID[TAG_ID["BASE"] = 9] = "BASE";
	    TAG_ID[TAG_ID["BASEFONT"] = 10] = "BASEFONT";
	    TAG_ID[TAG_ID["BGSOUND"] = 11] = "BGSOUND";
	    TAG_ID[TAG_ID["BIG"] = 12] = "BIG";
	    TAG_ID[TAG_ID["BLOCKQUOTE"] = 13] = "BLOCKQUOTE";
	    TAG_ID[TAG_ID["BODY"] = 14] = "BODY";
	    TAG_ID[TAG_ID["BR"] = 15] = "BR";
	    TAG_ID[TAG_ID["BUTTON"] = 16] = "BUTTON";
	    TAG_ID[TAG_ID["CAPTION"] = 17] = "CAPTION";
	    TAG_ID[TAG_ID["CENTER"] = 18] = "CENTER";
	    TAG_ID[TAG_ID["CODE"] = 19] = "CODE";
	    TAG_ID[TAG_ID["COL"] = 20] = "COL";
	    TAG_ID[TAG_ID["COLGROUP"] = 21] = "COLGROUP";
	    TAG_ID[TAG_ID["DD"] = 22] = "DD";
	    TAG_ID[TAG_ID["DESC"] = 23] = "DESC";
	    TAG_ID[TAG_ID["DETAILS"] = 24] = "DETAILS";
	    TAG_ID[TAG_ID["DIALOG"] = 25] = "DIALOG";
	    TAG_ID[TAG_ID["DIR"] = 26] = "DIR";
	    TAG_ID[TAG_ID["DIV"] = 27] = "DIV";
	    TAG_ID[TAG_ID["DL"] = 28] = "DL";
	    TAG_ID[TAG_ID["DT"] = 29] = "DT";
	    TAG_ID[TAG_ID["EM"] = 30] = "EM";
	    TAG_ID[TAG_ID["EMBED"] = 31] = "EMBED";
	    TAG_ID[TAG_ID["FIELDSET"] = 32] = "FIELDSET";
	    TAG_ID[TAG_ID["FIGCAPTION"] = 33] = "FIGCAPTION";
	    TAG_ID[TAG_ID["FIGURE"] = 34] = "FIGURE";
	    TAG_ID[TAG_ID["FONT"] = 35] = "FONT";
	    TAG_ID[TAG_ID["FOOTER"] = 36] = "FOOTER";
	    TAG_ID[TAG_ID["FOREIGN_OBJECT"] = 37] = "FOREIGN_OBJECT";
	    TAG_ID[TAG_ID["FORM"] = 38] = "FORM";
	    TAG_ID[TAG_ID["FRAME"] = 39] = "FRAME";
	    TAG_ID[TAG_ID["FRAMESET"] = 40] = "FRAMESET";
	    TAG_ID[TAG_ID["H1"] = 41] = "H1";
	    TAG_ID[TAG_ID["H2"] = 42] = "H2";
	    TAG_ID[TAG_ID["H3"] = 43] = "H3";
	    TAG_ID[TAG_ID["H4"] = 44] = "H4";
	    TAG_ID[TAG_ID["H5"] = 45] = "H5";
	    TAG_ID[TAG_ID["H6"] = 46] = "H6";
	    TAG_ID[TAG_ID["HEAD"] = 47] = "HEAD";
	    TAG_ID[TAG_ID["HEADER"] = 48] = "HEADER";
	    TAG_ID[TAG_ID["HGROUP"] = 49] = "HGROUP";
	    TAG_ID[TAG_ID["HR"] = 50] = "HR";
	    TAG_ID[TAG_ID["HTML"] = 51] = "HTML";
	    TAG_ID[TAG_ID["I"] = 52] = "I";
	    TAG_ID[TAG_ID["IMG"] = 53] = "IMG";
	    TAG_ID[TAG_ID["IMAGE"] = 54] = "IMAGE";
	    TAG_ID[TAG_ID["INPUT"] = 55] = "INPUT";
	    TAG_ID[TAG_ID["IFRAME"] = 56] = "IFRAME";
	    TAG_ID[TAG_ID["KEYGEN"] = 57] = "KEYGEN";
	    TAG_ID[TAG_ID["LABEL"] = 58] = "LABEL";
	    TAG_ID[TAG_ID["LI"] = 59] = "LI";
	    TAG_ID[TAG_ID["LINK"] = 60] = "LINK";
	    TAG_ID[TAG_ID["LISTING"] = 61] = "LISTING";
	    TAG_ID[TAG_ID["MAIN"] = 62] = "MAIN";
	    TAG_ID[TAG_ID["MALIGNMARK"] = 63] = "MALIGNMARK";
	    TAG_ID[TAG_ID["MARQUEE"] = 64] = "MARQUEE";
	    TAG_ID[TAG_ID["MATH"] = 65] = "MATH";
	    TAG_ID[TAG_ID["MENU"] = 66] = "MENU";
	    TAG_ID[TAG_ID["META"] = 67] = "META";
	    TAG_ID[TAG_ID["MGLYPH"] = 68] = "MGLYPH";
	    TAG_ID[TAG_ID["MI"] = 69] = "MI";
	    TAG_ID[TAG_ID["MO"] = 70] = "MO";
	    TAG_ID[TAG_ID["MN"] = 71] = "MN";
	    TAG_ID[TAG_ID["MS"] = 72] = "MS";
	    TAG_ID[TAG_ID["MTEXT"] = 73] = "MTEXT";
	    TAG_ID[TAG_ID["NAV"] = 74] = "NAV";
	    TAG_ID[TAG_ID["NOBR"] = 75] = "NOBR";
	    TAG_ID[TAG_ID["NOFRAMES"] = 76] = "NOFRAMES";
	    TAG_ID[TAG_ID["NOEMBED"] = 77] = "NOEMBED";
	    TAG_ID[TAG_ID["NOSCRIPT"] = 78] = "NOSCRIPT";
	    TAG_ID[TAG_ID["OBJECT"] = 79] = "OBJECT";
	    TAG_ID[TAG_ID["OL"] = 80] = "OL";
	    TAG_ID[TAG_ID["OPTGROUP"] = 81] = "OPTGROUP";
	    TAG_ID[TAG_ID["OPTION"] = 82] = "OPTION";
	    TAG_ID[TAG_ID["P"] = 83] = "P";
	    TAG_ID[TAG_ID["PARAM"] = 84] = "PARAM";
	    TAG_ID[TAG_ID["PLAINTEXT"] = 85] = "PLAINTEXT";
	    TAG_ID[TAG_ID["PRE"] = 86] = "PRE";
	    TAG_ID[TAG_ID["RB"] = 87] = "RB";
	    TAG_ID[TAG_ID["RP"] = 88] = "RP";
	    TAG_ID[TAG_ID["RT"] = 89] = "RT";
	    TAG_ID[TAG_ID["RTC"] = 90] = "RTC";
	    TAG_ID[TAG_ID["RUBY"] = 91] = "RUBY";
	    TAG_ID[TAG_ID["S"] = 92] = "S";
	    TAG_ID[TAG_ID["SCRIPT"] = 93] = "SCRIPT";
	    TAG_ID[TAG_ID["SECTION"] = 94] = "SECTION";
	    TAG_ID[TAG_ID["SELECT"] = 95] = "SELECT";
	    TAG_ID[TAG_ID["SOURCE"] = 96] = "SOURCE";
	    TAG_ID[TAG_ID["SMALL"] = 97] = "SMALL";
	    TAG_ID[TAG_ID["SPAN"] = 98] = "SPAN";
	    TAG_ID[TAG_ID["STRIKE"] = 99] = "STRIKE";
	    TAG_ID[TAG_ID["STRONG"] = 100] = "STRONG";
	    TAG_ID[TAG_ID["STYLE"] = 101] = "STYLE";
	    TAG_ID[TAG_ID["SUB"] = 102] = "SUB";
	    TAG_ID[TAG_ID["SUMMARY"] = 103] = "SUMMARY";
	    TAG_ID[TAG_ID["SUP"] = 104] = "SUP";
	    TAG_ID[TAG_ID["TABLE"] = 105] = "TABLE";
	    TAG_ID[TAG_ID["TBODY"] = 106] = "TBODY";
	    TAG_ID[TAG_ID["TEMPLATE"] = 107] = "TEMPLATE";
	    TAG_ID[TAG_ID["TEXTAREA"] = 108] = "TEXTAREA";
	    TAG_ID[TAG_ID["TFOOT"] = 109] = "TFOOT";
	    TAG_ID[TAG_ID["TD"] = 110] = "TD";
	    TAG_ID[TAG_ID["TH"] = 111] = "TH";
	    TAG_ID[TAG_ID["THEAD"] = 112] = "THEAD";
	    TAG_ID[TAG_ID["TITLE"] = 113] = "TITLE";
	    TAG_ID[TAG_ID["TR"] = 114] = "TR";
	    TAG_ID[TAG_ID["TRACK"] = 115] = "TRACK";
	    TAG_ID[TAG_ID["TT"] = 116] = "TT";
	    TAG_ID[TAG_ID["U"] = 117] = "U";
	    TAG_ID[TAG_ID["UL"] = 118] = "UL";
	    TAG_ID[TAG_ID["SVG"] = 119] = "SVG";
	    TAG_ID[TAG_ID["VAR"] = 120] = "VAR";
	    TAG_ID[TAG_ID["WBR"] = 121] = "WBR";
	    TAG_ID[TAG_ID["XMP"] = 122] = "XMP";
	})(TAG_ID = exports.TAG_ID || (exports.TAG_ID = {}));
	const TAG_NAME_TO_ID = new Map([
	    [TAG_NAMES.A, TAG_ID.A],
	    [TAG_NAMES.ADDRESS, TAG_ID.ADDRESS],
	    [TAG_NAMES.ANNOTATION_XML, TAG_ID.ANNOTATION_XML],
	    [TAG_NAMES.APPLET, TAG_ID.APPLET],
	    [TAG_NAMES.AREA, TAG_ID.AREA],
	    [TAG_NAMES.ARTICLE, TAG_ID.ARTICLE],
	    [TAG_NAMES.ASIDE, TAG_ID.ASIDE],
	    [TAG_NAMES.B, TAG_ID.B],
	    [TAG_NAMES.BASE, TAG_ID.BASE],
	    [TAG_NAMES.BASEFONT, TAG_ID.BASEFONT],
	    [TAG_NAMES.BGSOUND, TAG_ID.BGSOUND],
	    [TAG_NAMES.BIG, TAG_ID.BIG],
	    [TAG_NAMES.BLOCKQUOTE, TAG_ID.BLOCKQUOTE],
	    [TAG_NAMES.BODY, TAG_ID.BODY],
	    [TAG_NAMES.BR, TAG_ID.BR],
	    [TAG_NAMES.BUTTON, TAG_ID.BUTTON],
	    [TAG_NAMES.CAPTION, TAG_ID.CAPTION],
	    [TAG_NAMES.CENTER, TAG_ID.CENTER],
	    [TAG_NAMES.CODE, TAG_ID.CODE],
	    [TAG_NAMES.COL, TAG_ID.COL],
	    [TAG_NAMES.COLGROUP, TAG_ID.COLGROUP],
	    [TAG_NAMES.DD, TAG_ID.DD],
	    [TAG_NAMES.DESC, TAG_ID.DESC],
	    [TAG_NAMES.DETAILS, TAG_ID.DETAILS],
	    [TAG_NAMES.DIALOG, TAG_ID.DIALOG],
	    [TAG_NAMES.DIR, TAG_ID.DIR],
	    [TAG_NAMES.DIV, TAG_ID.DIV],
	    [TAG_NAMES.DL, TAG_ID.DL],
	    [TAG_NAMES.DT, TAG_ID.DT],
	    [TAG_NAMES.EM, TAG_ID.EM],
	    [TAG_NAMES.EMBED, TAG_ID.EMBED],
	    [TAG_NAMES.FIELDSET, TAG_ID.FIELDSET],
	    [TAG_NAMES.FIGCAPTION, TAG_ID.FIGCAPTION],
	    [TAG_NAMES.FIGURE, TAG_ID.FIGURE],
	    [TAG_NAMES.FONT, TAG_ID.FONT],
	    [TAG_NAMES.FOOTER, TAG_ID.FOOTER],
	    [TAG_NAMES.FOREIGN_OBJECT, TAG_ID.FOREIGN_OBJECT],
	    [TAG_NAMES.FORM, TAG_ID.FORM],
	    [TAG_NAMES.FRAME, TAG_ID.FRAME],
	    [TAG_NAMES.FRAMESET, TAG_ID.FRAMESET],
	    [TAG_NAMES.H1, TAG_ID.H1],
	    [TAG_NAMES.H2, TAG_ID.H2],
	    [TAG_NAMES.H3, TAG_ID.H3],
	    [TAG_NAMES.H4, TAG_ID.H4],
	    [TAG_NAMES.H5, TAG_ID.H5],
	    [TAG_NAMES.H6, TAG_ID.H6],
	    [TAG_NAMES.HEAD, TAG_ID.HEAD],
	    [TAG_NAMES.HEADER, TAG_ID.HEADER],
	    [TAG_NAMES.HGROUP, TAG_ID.HGROUP],
	    [TAG_NAMES.HR, TAG_ID.HR],
	    [TAG_NAMES.HTML, TAG_ID.HTML],
	    [TAG_NAMES.I, TAG_ID.I],
	    [TAG_NAMES.IMG, TAG_ID.IMG],
	    [TAG_NAMES.IMAGE, TAG_ID.IMAGE],
	    [TAG_NAMES.INPUT, TAG_ID.INPUT],
	    [TAG_NAMES.IFRAME, TAG_ID.IFRAME],
	    [TAG_NAMES.KEYGEN, TAG_ID.KEYGEN],
	    [TAG_NAMES.LABEL, TAG_ID.LABEL],
	    [TAG_NAMES.LI, TAG_ID.LI],
	    [TAG_NAMES.LINK, TAG_ID.LINK],
	    [TAG_NAMES.LISTING, TAG_ID.LISTING],
	    [TAG_NAMES.MAIN, TAG_ID.MAIN],
	    [TAG_NAMES.MALIGNMARK, TAG_ID.MALIGNMARK],
	    [TAG_NAMES.MARQUEE, TAG_ID.MARQUEE],
	    [TAG_NAMES.MATH, TAG_ID.MATH],
	    [TAG_NAMES.MENU, TAG_ID.MENU],
	    [TAG_NAMES.META, TAG_ID.META],
	    [TAG_NAMES.MGLYPH, TAG_ID.MGLYPH],
	    [TAG_NAMES.MI, TAG_ID.MI],
	    [TAG_NAMES.MO, TAG_ID.MO],
	    [TAG_NAMES.MN, TAG_ID.MN],
	    [TAG_NAMES.MS, TAG_ID.MS],
	    [TAG_NAMES.MTEXT, TAG_ID.MTEXT],
	    [TAG_NAMES.NAV, TAG_ID.NAV],
	    [TAG_NAMES.NOBR, TAG_ID.NOBR],
	    [TAG_NAMES.NOFRAMES, TAG_ID.NOFRAMES],
	    [TAG_NAMES.NOEMBED, TAG_ID.NOEMBED],
	    [TAG_NAMES.NOSCRIPT, TAG_ID.NOSCRIPT],
	    [TAG_NAMES.OBJECT, TAG_ID.OBJECT],
	    [TAG_NAMES.OL, TAG_ID.OL],
	    [TAG_NAMES.OPTGROUP, TAG_ID.OPTGROUP],
	    [TAG_NAMES.OPTION, TAG_ID.OPTION],
	    [TAG_NAMES.P, TAG_ID.P],
	    [TAG_NAMES.PARAM, TAG_ID.PARAM],
	    [TAG_NAMES.PLAINTEXT, TAG_ID.PLAINTEXT],
	    [TAG_NAMES.PRE, TAG_ID.PRE],
	    [TAG_NAMES.RB, TAG_ID.RB],
	    [TAG_NAMES.RP, TAG_ID.RP],
	    [TAG_NAMES.RT, TAG_ID.RT],
	    [TAG_NAMES.RTC, TAG_ID.RTC],
	    [TAG_NAMES.RUBY, TAG_ID.RUBY],
	    [TAG_NAMES.S, TAG_ID.S],
	    [TAG_NAMES.SCRIPT, TAG_ID.SCRIPT],
	    [TAG_NAMES.SECTION, TAG_ID.SECTION],
	    [TAG_NAMES.SELECT, TAG_ID.SELECT],
	    [TAG_NAMES.SOURCE, TAG_ID.SOURCE],
	    [TAG_NAMES.SMALL, TAG_ID.SMALL],
	    [TAG_NAMES.SPAN, TAG_ID.SPAN],
	    [TAG_NAMES.STRIKE, TAG_ID.STRIKE],
	    [TAG_NAMES.STRONG, TAG_ID.STRONG],
	    [TAG_NAMES.STYLE, TAG_ID.STYLE],
	    [TAG_NAMES.SUB, TAG_ID.SUB],
	    [TAG_NAMES.SUMMARY, TAG_ID.SUMMARY],
	    [TAG_NAMES.SUP, TAG_ID.SUP],
	    [TAG_NAMES.TABLE, TAG_ID.TABLE],
	    [TAG_NAMES.TBODY, TAG_ID.TBODY],
	    [TAG_NAMES.TEMPLATE, TAG_ID.TEMPLATE],
	    [TAG_NAMES.TEXTAREA, TAG_ID.TEXTAREA],
	    [TAG_NAMES.TFOOT, TAG_ID.TFOOT],
	    [TAG_NAMES.TD, TAG_ID.TD],
	    [TAG_NAMES.TH, TAG_ID.TH],
	    [TAG_NAMES.THEAD, TAG_ID.THEAD],
	    [TAG_NAMES.TITLE, TAG_ID.TITLE],
	    [TAG_NAMES.TR, TAG_ID.TR],
	    [TAG_NAMES.TRACK, TAG_ID.TRACK],
	    [TAG_NAMES.TT, TAG_ID.TT],
	    [TAG_NAMES.U, TAG_ID.U],
	    [TAG_NAMES.UL, TAG_ID.UL],
	    [TAG_NAMES.SVG, TAG_ID.SVG],
	    [TAG_NAMES.VAR, TAG_ID.VAR],
	    [TAG_NAMES.WBR, TAG_ID.WBR],
	    [TAG_NAMES.XMP, TAG_ID.XMP],
	]);
	function getTagID(tagName) {
	    var _a;
	    return (_a = TAG_NAME_TO_ID.get(tagName)) !== null && _a !== void 0 ? _a : TAG_ID.UNKNOWN;
	}
	exports.getTagID = getTagID;
	const $ = TAG_ID;
	exports.SPECIAL_ELEMENTS = {
	    [NS.HTML]: new Set([
	        $.ADDRESS,
	        $.APPLET,
	        $.AREA,
	        $.ARTICLE,
	        $.ASIDE,
	        $.BASE,
	        $.BASEFONT,
	        $.BGSOUND,
	        $.BLOCKQUOTE,
	        $.BODY,
	        $.BR,
	        $.BUTTON,
	        $.CAPTION,
	        $.CENTER,
	        $.COL,
	        $.COLGROUP,
	        $.DD,
	        $.DETAILS,
	        $.DIR,
	        $.DIV,
	        $.DL,
	        $.DT,
	        $.EMBED,
	        $.FIELDSET,
	        $.FIGCAPTION,
	        $.FIGURE,
	        $.FOOTER,
	        $.FORM,
	        $.FRAME,
	        $.FRAMESET,
	        $.H1,
	        $.H2,
	        $.H3,
	        $.H4,
	        $.H5,
	        $.H6,
	        $.HEAD,
	        $.HEADER,
	        $.HGROUP,
	        $.HR,
	        $.HTML,
	        $.IFRAME,
	        $.IMG,
	        $.INPUT,
	        $.LI,
	        $.LINK,
	        $.LISTING,
	        $.MAIN,
	        $.MARQUEE,
	        $.MENU,
	        $.META,
	        $.NAV,
	        $.NOEMBED,
	        $.NOFRAMES,
	        $.NOSCRIPT,
	        $.OBJECT,
	        $.OL,
	        $.P,
	        $.PARAM,
	        $.PLAINTEXT,
	        $.PRE,
	        $.SCRIPT,
	        $.SECTION,
	        $.SELECT,
	        $.SOURCE,
	        $.STYLE,
	        $.SUMMARY,
	        $.TABLE,
	        $.TBODY,
	        $.TD,
	        $.TEMPLATE,
	        $.TEXTAREA,
	        $.TFOOT,
	        $.TH,
	        $.THEAD,
	        $.TITLE,
	        $.TR,
	        $.TRACK,
	        $.UL,
	        $.WBR,
	        $.XMP,
	    ]),
	    [NS.MATHML]: new Set([$.MI, $.MO, $.MN, $.MS, $.MTEXT, $.ANNOTATION_XML]),
	    [NS.SVG]: new Set([$.TITLE, $.FOREIGN_OBJECT, $.DESC]),
	    [NS.XLINK]: new Set(),
	    [NS.XML]: new Set(),
	    [NS.XMLNS]: new Set(),
	};
	function isNumberedHeader(tn) {
	    return tn === $.H1 || tn === $.H2 || tn === $.H3 || tn === $.H4 || tn === $.H5 || tn === $.H6;
	}
	exports.isNumberedHeader = isNumberedHeader;
	const UNESCAPED_TEXT = new Set([
	    TAG_NAMES.STYLE,
	    TAG_NAMES.SCRIPT,
	    TAG_NAMES.XMP,
	    TAG_NAMES.IFRAME,
	    TAG_NAMES.NOEMBED,
	    TAG_NAMES.NOFRAMES,
	    TAG_NAMES.PLAINTEXT,
	]);
	function hasUnescapedText(tn, scriptingEnabled) {
	    return UNESCAPED_TEXT.has(tn) || (scriptingEnabled && tn === TAG_NAMES.NOSCRIPT);
	}
	exports.hasUnescapedText = hasUnescapedText;
	
} (html));

Object.defineProperty(tokenizer, "__esModule", { value: true });
tokenizer.Tokenizer = tokenizer.TokenizerMode = void 0;
const preprocessor_js_1 = preprocessor;
const unicode_js_1 = unicode$1;
const token_js_1$1 = token;
const decode_js_1$1 = decode;
const error_codes_js_1$1 = errorCodes;
const html_js_1$4 = html;
//C1 Unicode control character reference replacements
const C1_CONTROLS_REFERENCE_REPLACEMENTS = new Map([
    [0x80, 8364],
    [0x82, 8218],
    [0x83, 402],
    [0x84, 8222],
    [0x85, 8230],
    [0x86, 8224],
    [0x87, 8225],
    [0x88, 710],
    [0x89, 8240],
    [0x8a, 352],
    [0x8b, 8249],
    [0x8c, 338],
    [0x8e, 381],
    [0x91, 8216],
    [0x92, 8217],
    [0x93, 8220],
    [0x94, 8221],
    [0x95, 8226],
    [0x96, 8211],
    [0x97, 8212],
    [0x98, 732],
    [0x99, 8482],
    [0x9a, 353],
    [0x9b, 8250],
    [0x9c, 339],
    [0x9e, 382],
    [0x9f, 376],
]);
//States
var State;
(function (State) {
    State[State["DATA"] = 0] = "DATA";
    State[State["RCDATA"] = 1] = "RCDATA";
    State[State["RAWTEXT"] = 2] = "RAWTEXT";
    State[State["SCRIPT_DATA"] = 3] = "SCRIPT_DATA";
    State[State["PLAINTEXT"] = 4] = "PLAINTEXT";
    State[State["TAG_OPEN"] = 5] = "TAG_OPEN";
    State[State["END_TAG_OPEN"] = 6] = "END_TAG_OPEN";
    State[State["TAG_NAME"] = 7] = "TAG_NAME";
    State[State["RCDATA_LESS_THAN_SIGN"] = 8] = "RCDATA_LESS_THAN_SIGN";
    State[State["RCDATA_END_TAG_OPEN"] = 9] = "RCDATA_END_TAG_OPEN";
    State[State["RCDATA_END_TAG_NAME"] = 10] = "RCDATA_END_TAG_NAME";
    State[State["RAWTEXT_LESS_THAN_SIGN"] = 11] = "RAWTEXT_LESS_THAN_SIGN";
    State[State["RAWTEXT_END_TAG_OPEN"] = 12] = "RAWTEXT_END_TAG_OPEN";
    State[State["RAWTEXT_END_TAG_NAME"] = 13] = "RAWTEXT_END_TAG_NAME";
    State[State["SCRIPT_DATA_LESS_THAN_SIGN"] = 14] = "SCRIPT_DATA_LESS_THAN_SIGN";
    State[State["SCRIPT_DATA_END_TAG_OPEN"] = 15] = "SCRIPT_DATA_END_TAG_OPEN";
    State[State["SCRIPT_DATA_END_TAG_NAME"] = 16] = "SCRIPT_DATA_END_TAG_NAME";
    State[State["SCRIPT_DATA_ESCAPE_START"] = 17] = "SCRIPT_DATA_ESCAPE_START";
    State[State["SCRIPT_DATA_ESCAPE_START_DASH"] = 18] = "SCRIPT_DATA_ESCAPE_START_DASH";
    State[State["SCRIPT_DATA_ESCAPED"] = 19] = "SCRIPT_DATA_ESCAPED";
    State[State["SCRIPT_DATA_ESCAPED_DASH"] = 20] = "SCRIPT_DATA_ESCAPED_DASH";
    State[State["SCRIPT_DATA_ESCAPED_DASH_DASH"] = 21] = "SCRIPT_DATA_ESCAPED_DASH_DASH";
    State[State["SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN"] = 22] = "SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN";
    State[State["SCRIPT_DATA_ESCAPED_END_TAG_OPEN"] = 23] = "SCRIPT_DATA_ESCAPED_END_TAG_OPEN";
    State[State["SCRIPT_DATA_ESCAPED_END_TAG_NAME"] = 24] = "SCRIPT_DATA_ESCAPED_END_TAG_NAME";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPE_START"] = 25] = "SCRIPT_DATA_DOUBLE_ESCAPE_START";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPED"] = 26] = "SCRIPT_DATA_DOUBLE_ESCAPED";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPED_DASH"] = 27] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH"] = 28] = "SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN"] = 29] = "SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN";
    State[State["SCRIPT_DATA_DOUBLE_ESCAPE_END"] = 30] = "SCRIPT_DATA_DOUBLE_ESCAPE_END";
    State[State["BEFORE_ATTRIBUTE_NAME"] = 31] = "BEFORE_ATTRIBUTE_NAME";
    State[State["ATTRIBUTE_NAME"] = 32] = "ATTRIBUTE_NAME";
    State[State["AFTER_ATTRIBUTE_NAME"] = 33] = "AFTER_ATTRIBUTE_NAME";
    State[State["BEFORE_ATTRIBUTE_VALUE"] = 34] = "BEFORE_ATTRIBUTE_VALUE";
    State[State["ATTRIBUTE_VALUE_DOUBLE_QUOTED"] = 35] = "ATTRIBUTE_VALUE_DOUBLE_QUOTED";
    State[State["ATTRIBUTE_VALUE_SINGLE_QUOTED"] = 36] = "ATTRIBUTE_VALUE_SINGLE_QUOTED";
    State[State["ATTRIBUTE_VALUE_UNQUOTED"] = 37] = "ATTRIBUTE_VALUE_UNQUOTED";
    State[State["AFTER_ATTRIBUTE_VALUE_QUOTED"] = 38] = "AFTER_ATTRIBUTE_VALUE_QUOTED";
    State[State["SELF_CLOSING_START_TAG"] = 39] = "SELF_CLOSING_START_TAG";
    State[State["BOGUS_COMMENT"] = 40] = "BOGUS_COMMENT";
    State[State["MARKUP_DECLARATION_OPEN"] = 41] = "MARKUP_DECLARATION_OPEN";
    State[State["COMMENT_START"] = 42] = "COMMENT_START";
    State[State["COMMENT_START_DASH"] = 43] = "COMMENT_START_DASH";
    State[State["COMMENT"] = 44] = "COMMENT";
    State[State["COMMENT_LESS_THAN_SIGN"] = 45] = "COMMENT_LESS_THAN_SIGN";
    State[State["COMMENT_LESS_THAN_SIGN_BANG"] = 46] = "COMMENT_LESS_THAN_SIGN_BANG";
    State[State["COMMENT_LESS_THAN_SIGN_BANG_DASH"] = 47] = "COMMENT_LESS_THAN_SIGN_BANG_DASH";
    State[State["COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH"] = 48] = "COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH";
    State[State["COMMENT_END_DASH"] = 49] = "COMMENT_END_DASH";
    State[State["COMMENT_END"] = 50] = "COMMENT_END";
    State[State["COMMENT_END_BANG"] = 51] = "COMMENT_END_BANG";
    State[State["DOCTYPE"] = 52] = "DOCTYPE";
    State[State["BEFORE_DOCTYPE_NAME"] = 53] = "BEFORE_DOCTYPE_NAME";
    State[State["DOCTYPE_NAME"] = 54] = "DOCTYPE_NAME";
    State[State["AFTER_DOCTYPE_NAME"] = 55] = "AFTER_DOCTYPE_NAME";
    State[State["AFTER_DOCTYPE_PUBLIC_KEYWORD"] = 56] = "AFTER_DOCTYPE_PUBLIC_KEYWORD";
    State[State["BEFORE_DOCTYPE_PUBLIC_IDENTIFIER"] = 57] = "BEFORE_DOCTYPE_PUBLIC_IDENTIFIER";
    State[State["DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED"] = 58] = "DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED";
    State[State["DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED"] = 59] = "DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED";
    State[State["AFTER_DOCTYPE_PUBLIC_IDENTIFIER"] = 60] = "AFTER_DOCTYPE_PUBLIC_IDENTIFIER";
    State[State["BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS"] = 61] = "BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS";
    State[State["AFTER_DOCTYPE_SYSTEM_KEYWORD"] = 62] = "AFTER_DOCTYPE_SYSTEM_KEYWORD";
    State[State["BEFORE_DOCTYPE_SYSTEM_IDENTIFIER"] = 63] = "BEFORE_DOCTYPE_SYSTEM_IDENTIFIER";
    State[State["DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED"] = 64] = "DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED";
    State[State["DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED"] = 65] = "DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED";
    State[State["AFTER_DOCTYPE_SYSTEM_IDENTIFIER"] = 66] = "AFTER_DOCTYPE_SYSTEM_IDENTIFIER";
    State[State["BOGUS_DOCTYPE"] = 67] = "BOGUS_DOCTYPE";
    State[State["CDATA_SECTION"] = 68] = "CDATA_SECTION";
    State[State["CDATA_SECTION_BRACKET"] = 69] = "CDATA_SECTION_BRACKET";
    State[State["CDATA_SECTION_END"] = 70] = "CDATA_SECTION_END";
    State[State["CHARACTER_REFERENCE"] = 71] = "CHARACTER_REFERENCE";
    State[State["NAMED_CHARACTER_REFERENCE"] = 72] = "NAMED_CHARACTER_REFERENCE";
    State[State["AMBIGUOUS_AMPERSAND"] = 73] = "AMBIGUOUS_AMPERSAND";
    State[State["NUMERIC_CHARACTER_REFERENCE"] = 74] = "NUMERIC_CHARACTER_REFERENCE";
    State[State["HEXADEMICAL_CHARACTER_REFERENCE_START"] = 75] = "HEXADEMICAL_CHARACTER_REFERENCE_START";
    State[State["DECIMAL_CHARACTER_REFERENCE_START"] = 76] = "DECIMAL_CHARACTER_REFERENCE_START";
    State[State["HEXADEMICAL_CHARACTER_REFERENCE"] = 77] = "HEXADEMICAL_CHARACTER_REFERENCE";
    State[State["DECIMAL_CHARACTER_REFERENCE"] = 78] = "DECIMAL_CHARACTER_REFERENCE";
    State[State["NUMERIC_CHARACTER_REFERENCE_END"] = 79] = "NUMERIC_CHARACTER_REFERENCE_END";
})(State || (State = {}));
//Tokenizer initial states for different modes
tokenizer.TokenizerMode = {
    DATA: State.DATA,
    RCDATA: State.RCDATA,
    RAWTEXT: State.RAWTEXT,
    SCRIPT_DATA: State.SCRIPT_DATA,
    PLAINTEXT: State.PLAINTEXT,
    CDATA_SECTION: State.CDATA_SECTION,
};
//Utils
//OPTIMIZATION: these utility functions should not be moved out of this module. V8 Crankshaft will not inline
//this functions if they will be situated in another module due to context switch.
//Always perform inlining check before modifying this functions ('node --trace-inlining').
function isAsciiDigit(cp) {
    return cp >= unicode_js_1.CODE_POINTS.DIGIT_0 && cp <= unicode_js_1.CODE_POINTS.DIGIT_9;
}
function isAsciiUpper(cp) {
    return cp >= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_Z;
}
function isAsciiLower(cp) {
    return cp >= unicode_js_1.CODE_POINTS.LATIN_SMALL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_SMALL_Z;
}
function isAsciiLetter(cp) {
    return isAsciiLower(cp) || isAsciiUpper(cp);
}
function isAsciiAlphaNumeric(cp) {
    return isAsciiLetter(cp) || isAsciiDigit(cp);
}
function isAsciiUpperHexDigit(cp) {
    return cp >= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_CAPITAL_F;
}
function isAsciiLowerHexDigit(cp) {
    return cp >= unicode_js_1.CODE_POINTS.LATIN_SMALL_A && cp <= unicode_js_1.CODE_POINTS.LATIN_SMALL_F;
}
function isAsciiHexDigit(cp) {
    return isAsciiDigit(cp) || isAsciiUpperHexDigit(cp) || isAsciiLowerHexDigit(cp);
}
function toAsciiLower(cp) {
    return cp + 32;
}
function isWhitespace(cp) {
    return cp === unicode_js_1.CODE_POINTS.SPACE || cp === unicode_js_1.CODE_POINTS.LINE_FEED || cp === unicode_js_1.CODE_POINTS.TABULATION || cp === unicode_js_1.CODE_POINTS.FORM_FEED;
}
function isEntityInAttributeInvalidEnd(nextCp) {
    return nextCp === unicode_js_1.CODE_POINTS.EQUALS_SIGN || isAsciiAlphaNumeric(nextCp);
}
function isScriptDataDoubleEscapeSequenceEnd(cp) {
    return isWhitespace(cp) || cp === unicode_js_1.CODE_POINTS.SOLIDUS || cp === unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN;
}
//Tokenizer
class Tokenizer$1 {
    constructor(options, handler) {
        this.options = options;
        this.handler = handler;
        this.paused = false;
        /** Ensures that the parsing loop isn't run multiple times at once. */
        this.inLoop = false;
        /**
         * Indicates that the current adjusted node exists, is not an element in the HTML namespace,
         * and that it is not an integration point for either MathML or HTML.
         *
         * @see {@link https://html.spec.whatwg.org/multipage/parsing.html#tree-construction}
         */
        this.inForeignNode = false;
        this.lastStartTagName = '';
        this.active = false;
        this.state = State.DATA;
        this.returnState = State.DATA;
        this.charRefCode = -1;
        this.consumedAfterSnapshot = -1;
        this.currentCharacterToken = null;
        this.currentToken = null;
        this.currentAttr = { name: '', value: '' };
        this.preprocessor = new preprocessor_js_1.Preprocessor(handler);
        this.currentLocation = this.getCurrentLocation(-1);
    }
    //Errors
    _err(code) {
        var _a, _b;
        (_b = (_a = this.handler).onParseError) === null || _b === void 0 ? void 0 : _b.call(_a, this.preprocessor.getError(code));
    }
    // NOTE: `offset` may never run across line boundaries.
    getCurrentLocation(offset) {
        if (!this.options.sourceCodeLocationInfo) {
            return null;
        }
        return {
            startLine: this.preprocessor.line,
            startCol: this.preprocessor.col - offset,
            startOffset: this.preprocessor.offset - offset,
            endLine: -1,
            endCol: -1,
            endOffset: -1,
        };
    }
    _runParsingLoop() {
        if (this.inLoop)
            return;
        this.inLoop = true;
        while (this.active && !this.paused) {
            this.consumedAfterSnapshot = 0;
            const cp = this._consume();
            if (!this._ensureHibernation()) {
                this._callState(cp);
            }
        }
        this.inLoop = false;
    }
    //API
    pause() {
        this.paused = true;
    }
    resume(writeCallback) {
        if (!this.paused) {
            throw new Error('Parser was already resumed');
        }
        this.paused = false;
        // Necessary for synchronous resume.
        if (this.inLoop)
            return;
        this._runParsingLoop();
        if (!this.paused) {
            writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
    }
    write(chunk, isLastChunk, writeCallback) {
        this.active = true;
        this.preprocessor.write(chunk, isLastChunk);
        this._runParsingLoop();
        if (!this.paused) {
            writeCallback === null || writeCallback === void 0 ? void 0 : writeCallback();
        }
    }
    insertHtmlAtCurrentPos(chunk) {
        this.active = true;
        this.preprocessor.insertHtmlAtCurrentPos(chunk);
        this._runParsingLoop();
    }
    //Hibernation
    _ensureHibernation() {
        if (this.preprocessor.endOfChunkHit) {
            this._unconsume(this.consumedAfterSnapshot);
            this.active = false;
            return true;
        }
        return false;
    }
    //Consumption
    _consume() {
        this.consumedAfterSnapshot++;
        return this.preprocessor.advance();
    }
    _unconsume(count) {
        this.consumedAfterSnapshot -= count;
        this.preprocessor.retreat(count);
    }
    _reconsumeInState(state) {
        this.state = state;
        this._unconsume(1);
    }
    _advanceBy(count) {
        this.consumedAfterSnapshot += count;
        for (let i = 0; i < count; i++) {
            this.preprocessor.advance();
        }
    }
    _consumeSequenceIfMatch(pattern, caseSensitive) {
        if (this.preprocessor.startsWith(pattern, caseSensitive)) {
            // We will already have consumed one character before calling this method.
            this._advanceBy(pattern.length - 1);
            return true;
        }
        return false;
    }
    //Token creation
    _createStartTagToken() {
        this.currentToken = {
            type: token_js_1$1.TokenType.START_TAG,
            tagName: '',
            tagID: html_js_1$4.TAG_ID.UNKNOWN,
            selfClosing: false,
            ackSelfClosing: false,
            attrs: [],
            location: this.getCurrentLocation(1),
        };
    }
    _createEndTagToken() {
        this.currentToken = {
            type: token_js_1$1.TokenType.END_TAG,
            tagName: '',
            tagID: html_js_1$4.TAG_ID.UNKNOWN,
            selfClosing: false,
            ackSelfClosing: false,
            attrs: [],
            location: this.getCurrentLocation(2),
        };
    }
    _createCommentToken(offset) {
        this.currentToken = {
            type: token_js_1$1.TokenType.COMMENT,
            data: '',
            location: this.getCurrentLocation(offset),
        };
    }
    _createDoctypeToken(initialName) {
        this.currentToken = {
            type: token_js_1$1.TokenType.DOCTYPE,
            name: initialName,
            forceQuirks: false,
            publicId: null,
            systemId: null,
            location: this.currentLocation,
        };
    }
    _createCharacterToken(type, chars) {
        this.currentCharacterToken = {
            type,
            chars,
            location: this.currentLocation,
        };
    }
    //Tag attributes
    _createAttr(attrNameFirstCh) {
        this.currentAttr = {
            name: attrNameFirstCh,
            value: '',
        };
        this.currentLocation = this.getCurrentLocation(0);
    }
    _leaveAttrName() {
        var _a;
        var _b;
        const token = this.currentToken;
        if ((0, token_js_1$1.getTokenAttr)(token, this.currentAttr.name) === null) {
            token.attrs.push(this.currentAttr);
            if (token.location && this.currentLocation) {
                const attrLocations = ((_a = (_b = token.location).attrs) !== null && _a !== void 0 ? _a : (_b.attrs = Object.create(null)));
                attrLocations[this.currentAttr.name] = this.currentLocation;
                // Set end location
                this._leaveAttrValue();
            }
        }
        else {
            this._err(error_codes_js_1$1.ERR.duplicateAttribute);
        }
    }
    _leaveAttrValue() {
        if (this.currentLocation) {
            this.currentLocation.endLine = this.preprocessor.line;
            this.currentLocation.endCol = this.preprocessor.col;
            this.currentLocation.endOffset = this.preprocessor.offset;
        }
    }
    //Token emission
    prepareToken(ct) {
        this._emitCurrentCharacterToken(ct.location);
        this.currentToken = null;
        if (ct.location) {
            ct.location.endLine = this.preprocessor.line;
            ct.location.endCol = this.preprocessor.col + 1;
            ct.location.endOffset = this.preprocessor.offset + 1;
        }
        this.currentLocation = this.getCurrentLocation(-1);
    }
    emitCurrentTagToken() {
        const ct = this.currentToken;
        this.prepareToken(ct);
        ct.tagID = (0, html_js_1$4.getTagID)(ct.tagName);
        if (ct.type === token_js_1$1.TokenType.START_TAG) {
            this.lastStartTagName = ct.tagName;
            this.handler.onStartTag(ct);
        }
        else {
            if (ct.attrs.length > 0) {
                this._err(error_codes_js_1$1.ERR.endTagWithAttributes);
            }
            if (ct.selfClosing) {
                this._err(error_codes_js_1$1.ERR.endTagWithTrailingSolidus);
            }
            this.handler.onEndTag(ct);
        }
        this.preprocessor.dropParsedChunk();
    }
    emitCurrentComment(ct) {
        this.prepareToken(ct);
        this.handler.onComment(ct);
        this.preprocessor.dropParsedChunk();
    }
    emitCurrentDoctype(ct) {
        this.prepareToken(ct);
        this.handler.onDoctype(ct);
        this.preprocessor.dropParsedChunk();
    }
    _emitCurrentCharacterToken(nextLocation) {
        if (this.currentCharacterToken) {
            //NOTE: if we have a pending character token, make it's end location equal to the
            //current token's start location.
            if (nextLocation && this.currentCharacterToken.location) {
                this.currentCharacterToken.location.endLine = nextLocation.startLine;
                this.currentCharacterToken.location.endCol = nextLocation.startCol;
                this.currentCharacterToken.location.endOffset = nextLocation.startOffset;
            }
            switch (this.currentCharacterToken.type) {
                case token_js_1$1.TokenType.CHARACTER: {
                    this.handler.onCharacter(this.currentCharacterToken);
                    break;
                }
                case token_js_1$1.TokenType.NULL_CHARACTER: {
                    this.handler.onNullCharacter(this.currentCharacterToken);
                    break;
                }
                case token_js_1$1.TokenType.WHITESPACE_CHARACTER: {
                    this.handler.onWhitespaceCharacter(this.currentCharacterToken);
                    break;
                }
            }
            this.currentCharacterToken = null;
        }
    }
    _emitEOFToken() {
        const location = this.getCurrentLocation(0);
        if (location) {
            location.endLine = location.startLine;
            location.endCol = location.startCol;
            location.endOffset = location.startOffset;
        }
        this._emitCurrentCharacterToken(location);
        this.handler.onEof({ type: token_js_1$1.TokenType.EOF, location });
        this.active = false;
    }
    //Characters emission
    //OPTIMIZATION: specification uses only one type of character tokens (one token per character).
    //This causes a huge memory overhead and a lot of unnecessary parser loops. parse5 uses 3 groups of characters.
    //If we have a sequence of characters that belong to the same group, the parser can process it
    //as a single solid character token.
    //So, there are 3 types of character tokens in parse5:
    //1)TokenType.NULL_CHARACTER - \u0000-character sequences (e.g. '\u0000\u0000\u0000')
    //2)TokenType.WHITESPACE_CHARACTER - any whitespace/new-line character sequences (e.g. '\n  \r\t   \f')
    //3)TokenType.CHARACTER - any character sequence which don't belong to groups 1 and 2 (e.g. 'abcdef1234@@#$%^')
    _appendCharToCurrentCharacterToken(type, ch) {
        if (this.currentCharacterToken) {
            if (this.currentCharacterToken.type !== type) {
                this.currentLocation = this.getCurrentLocation(0);
                this._emitCurrentCharacterToken(this.currentLocation);
                this.preprocessor.dropParsedChunk();
            }
            else {
                this.currentCharacterToken.chars += ch;
                return;
            }
        }
        this._createCharacterToken(type, ch);
    }
    _emitCodePoint(cp) {
        let type = token_js_1$1.TokenType.CHARACTER;
        if (isWhitespace(cp)) {
            type = token_js_1$1.TokenType.WHITESPACE_CHARACTER;
        }
        else if (cp === unicode_js_1.CODE_POINTS.NULL) {
            type = token_js_1$1.TokenType.NULL_CHARACTER;
        }
        this._appendCharToCurrentCharacterToken(type, String.fromCodePoint(cp));
    }
    //NOTE: used when we emit characters explicitly.
    //This is always for non-whitespace and non-null characters, which allows us to avoid additional checks.
    _emitChars(ch) {
        this._appendCharToCurrentCharacterToken(token_js_1$1.TokenType.CHARACTER, ch);
    }
    // Character reference helpers
    _matchNamedCharacterReference(cp) {
        let result = null;
        let excess = 0;
        let withoutSemicolon = false;
        for (let i = 0, current = decode_js_1$1.htmlDecodeTree[0]; i >= 0; cp = this._consume()) {
            i = (0, decode_js_1$1.determineBranch)(decode_js_1$1.htmlDecodeTree, current, i + 1, cp);
            if (i < 0)
                break;
            excess += 1;
            current = decode_js_1$1.htmlDecodeTree[i];
            const masked = current & decode_js_1$1.BinTrieFlags.VALUE_LENGTH;
            // If the branch is a value, store it and continue
            if (masked) {
                // The mask is the number of bytes of the value, including the current byte.
                const valueLength = (masked >> 14) - 1;
                // Attribute values that aren't terminated properly aren't parsed, and shouldn't lead to a parser error.
                // See the example in https://html.spec.whatwg.org/multipage/parsing.html#named-character-reference-state
                if (cp !== unicode_js_1.CODE_POINTS.SEMICOLON &&
                    this._isCharacterReferenceInAttribute() &&
                    isEntityInAttributeInvalidEnd(this.preprocessor.peek(1))) {
                    //NOTE: we don't flush all consumed code points here, and instead switch back to the original state after
                    //emitting an ampersand. This is fine, as alphanumeric characters won't be parsed differently in attributes.
                    result = [unicode_js_1.CODE_POINTS.AMPERSAND];
                    // Skip over the value.
                    i += valueLength;
                }
                else {
                    // If this is a surrogate pair, consume the next two bytes.
                    result =
                        valueLength === 0
                            ? [decode_js_1$1.htmlDecodeTree[i] & ~decode_js_1$1.BinTrieFlags.VALUE_LENGTH]
                            : valueLength === 1
                                ? [decode_js_1$1.htmlDecodeTree[++i]]
                                : [decode_js_1$1.htmlDecodeTree[++i], decode_js_1$1.htmlDecodeTree[++i]];
                    excess = 0;
                    withoutSemicolon = cp !== unicode_js_1.CODE_POINTS.SEMICOLON;
                }
                if (valueLength === 0) {
                    // If the value is zero-length, we're done.
                    this._consume();
                    break;
                }
            }
        }
        this._unconsume(excess);
        if (withoutSemicolon && !this.preprocessor.endOfChunkHit) {
            this._err(error_codes_js_1$1.ERR.missingSemicolonAfterCharacterReference);
        }
        // We want to emit the error above on the code point after the entity.
        // We always consume one code point too many in the loop, and we wait to
        // unconsume it until after the error is emitted.
        this._unconsume(1);
        return result;
    }
    _isCharacterReferenceInAttribute() {
        return (this.returnState === State.ATTRIBUTE_VALUE_DOUBLE_QUOTED ||
            this.returnState === State.ATTRIBUTE_VALUE_SINGLE_QUOTED ||
            this.returnState === State.ATTRIBUTE_VALUE_UNQUOTED);
    }
    _flushCodePointConsumedAsCharacterReference(cp) {
        if (this._isCharacterReferenceInAttribute()) {
            this.currentAttr.value += String.fromCodePoint(cp);
        }
        else {
            this._emitCodePoint(cp);
        }
    }
    // Calling states this way turns out to be much faster than any other approach.
    _callState(cp) {
        switch (this.state) {
            case State.DATA: {
                this._stateData(cp);
                break;
            }
            case State.RCDATA: {
                this._stateRcdata(cp);
                break;
            }
            case State.RAWTEXT: {
                this._stateRawtext(cp);
                break;
            }
            case State.SCRIPT_DATA: {
                this._stateScriptData(cp);
                break;
            }
            case State.PLAINTEXT: {
                this._statePlaintext(cp);
                break;
            }
            case State.TAG_OPEN: {
                this._stateTagOpen(cp);
                break;
            }
            case State.END_TAG_OPEN: {
                this._stateEndTagOpen(cp);
                break;
            }
            case State.TAG_NAME: {
                this._stateTagName(cp);
                break;
            }
            case State.RCDATA_LESS_THAN_SIGN: {
                this._stateRcdataLessThanSign(cp);
                break;
            }
            case State.RCDATA_END_TAG_OPEN: {
                this._stateRcdataEndTagOpen(cp);
                break;
            }
            case State.RCDATA_END_TAG_NAME: {
                this._stateRcdataEndTagName(cp);
                break;
            }
            case State.RAWTEXT_LESS_THAN_SIGN: {
                this._stateRawtextLessThanSign(cp);
                break;
            }
            case State.RAWTEXT_END_TAG_OPEN: {
                this._stateRawtextEndTagOpen(cp);
                break;
            }
            case State.RAWTEXT_END_TAG_NAME: {
                this._stateRawtextEndTagName(cp);
                break;
            }
            case State.SCRIPT_DATA_LESS_THAN_SIGN: {
                this._stateScriptDataLessThanSign(cp);
                break;
            }
            case State.SCRIPT_DATA_END_TAG_OPEN: {
                this._stateScriptDataEndTagOpen(cp);
                break;
            }
            case State.SCRIPT_DATA_END_TAG_NAME: {
                this._stateScriptDataEndTagName(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPE_START: {
                this._stateScriptDataEscapeStart(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPE_START_DASH: {
                this._stateScriptDataEscapeStartDash(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED: {
                this._stateScriptDataEscaped(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED_DASH: {
                this._stateScriptDataEscapedDash(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED_DASH_DASH: {
                this._stateScriptDataEscapedDashDash(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN: {
                this._stateScriptDataEscapedLessThanSign(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN: {
                this._stateScriptDataEscapedEndTagOpen(cp);
                break;
            }
            case State.SCRIPT_DATA_ESCAPED_END_TAG_NAME: {
                this._stateScriptDataEscapedEndTagName(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPE_START: {
                this._stateScriptDataDoubleEscapeStart(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED: {
                this._stateScriptDataDoubleEscaped(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH: {
                this._stateScriptDataDoubleEscapedDash(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH: {
                this._stateScriptDataDoubleEscapedDashDash(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN: {
                this._stateScriptDataDoubleEscapedLessThanSign(cp);
                break;
            }
            case State.SCRIPT_DATA_DOUBLE_ESCAPE_END: {
                this._stateScriptDataDoubleEscapeEnd(cp);
                break;
            }
            case State.BEFORE_ATTRIBUTE_NAME: {
                this._stateBeforeAttributeName(cp);
                break;
            }
            case State.ATTRIBUTE_NAME: {
                this._stateAttributeName(cp);
                break;
            }
            case State.AFTER_ATTRIBUTE_NAME: {
                this._stateAfterAttributeName(cp);
                break;
            }
            case State.BEFORE_ATTRIBUTE_VALUE: {
                this._stateBeforeAttributeValue(cp);
                break;
            }
            case State.ATTRIBUTE_VALUE_DOUBLE_QUOTED: {
                this._stateAttributeValueDoubleQuoted(cp);
                break;
            }
            case State.ATTRIBUTE_VALUE_SINGLE_QUOTED: {
                this._stateAttributeValueSingleQuoted(cp);
                break;
            }
            case State.ATTRIBUTE_VALUE_UNQUOTED: {
                this._stateAttributeValueUnquoted(cp);
                break;
            }
            case State.AFTER_ATTRIBUTE_VALUE_QUOTED: {
                this._stateAfterAttributeValueQuoted(cp);
                break;
            }
            case State.SELF_CLOSING_START_TAG: {
                this._stateSelfClosingStartTag(cp);
                break;
            }
            case State.BOGUS_COMMENT: {
                this._stateBogusComment(cp);
                break;
            }
            case State.MARKUP_DECLARATION_OPEN: {
                this._stateMarkupDeclarationOpen(cp);
                break;
            }
            case State.COMMENT_START: {
                this._stateCommentStart(cp);
                break;
            }
            case State.COMMENT_START_DASH: {
                this._stateCommentStartDash(cp);
                break;
            }
            case State.COMMENT: {
                this._stateComment(cp);
                break;
            }
            case State.COMMENT_LESS_THAN_SIGN: {
                this._stateCommentLessThanSign(cp);
                break;
            }
            case State.COMMENT_LESS_THAN_SIGN_BANG: {
                this._stateCommentLessThanSignBang(cp);
                break;
            }
            case State.COMMENT_LESS_THAN_SIGN_BANG_DASH: {
                this._stateCommentLessThanSignBangDash(cp);
                break;
            }
            case State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH: {
                this._stateCommentLessThanSignBangDashDash(cp);
                break;
            }
            case State.COMMENT_END_DASH: {
                this._stateCommentEndDash(cp);
                break;
            }
            case State.COMMENT_END: {
                this._stateCommentEnd(cp);
                break;
            }
            case State.COMMENT_END_BANG: {
                this._stateCommentEndBang(cp);
                break;
            }
            case State.DOCTYPE: {
                this._stateDoctype(cp);
                break;
            }
            case State.BEFORE_DOCTYPE_NAME: {
                this._stateBeforeDoctypeName(cp);
                break;
            }
            case State.DOCTYPE_NAME: {
                this._stateDoctypeName(cp);
                break;
            }
            case State.AFTER_DOCTYPE_NAME: {
                this._stateAfterDoctypeName(cp);
                break;
            }
            case State.AFTER_DOCTYPE_PUBLIC_KEYWORD: {
                this._stateAfterDoctypePublicKeyword(cp);
                break;
            }
            case State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER: {
                this._stateBeforeDoctypePublicIdentifier(cp);
                break;
            }
            case State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED: {
                this._stateDoctypePublicIdentifierDoubleQuoted(cp);
                break;
            }
            case State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED: {
                this._stateDoctypePublicIdentifierSingleQuoted(cp);
                break;
            }
            case State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER: {
                this._stateAfterDoctypePublicIdentifier(cp);
                break;
            }
            case State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS: {
                this._stateBetweenDoctypePublicAndSystemIdentifiers(cp);
                break;
            }
            case State.AFTER_DOCTYPE_SYSTEM_KEYWORD: {
                this._stateAfterDoctypeSystemKeyword(cp);
                break;
            }
            case State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER: {
                this._stateBeforeDoctypeSystemIdentifier(cp);
                break;
            }
            case State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED: {
                this._stateDoctypeSystemIdentifierDoubleQuoted(cp);
                break;
            }
            case State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED: {
                this._stateDoctypeSystemIdentifierSingleQuoted(cp);
                break;
            }
            case State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER: {
                this._stateAfterDoctypeSystemIdentifier(cp);
                break;
            }
            case State.BOGUS_DOCTYPE: {
                this._stateBogusDoctype(cp);
                break;
            }
            case State.CDATA_SECTION: {
                this._stateCdataSection(cp);
                break;
            }
            case State.CDATA_SECTION_BRACKET: {
                this._stateCdataSectionBracket(cp);
                break;
            }
            case State.CDATA_SECTION_END: {
                this._stateCdataSectionEnd(cp);
                break;
            }
            case State.CHARACTER_REFERENCE: {
                this._stateCharacterReference(cp);
                break;
            }
            case State.NAMED_CHARACTER_REFERENCE: {
                this._stateNamedCharacterReference(cp);
                break;
            }
            case State.AMBIGUOUS_AMPERSAND: {
                this._stateAmbiguousAmpersand(cp);
                break;
            }
            case State.NUMERIC_CHARACTER_REFERENCE: {
                this._stateNumericCharacterReference(cp);
                break;
            }
            case State.HEXADEMICAL_CHARACTER_REFERENCE_START: {
                this._stateHexademicalCharacterReferenceStart(cp);
                break;
            }
            case State.DECIMAL_CHARACTER_REFERENCE_START: {
                this._stateDecimalCharacterReferenceStart(cp);
                break;
            }
            case State.HEXADEMICAL_CHARACTER_REFERENCE: {
                this._stateHexademicalCharacterReference(cp);
                break;
            }
            case State.DECIMAL_CHARACTER_REFERENCE: {
                this._stateDecimalCharacterReference(cp);
                break;
            }
            case State.NUMERIC_CHARACTER_REFERENCE_END: {
                this._stateNumericCharacterReferenceEnd();
                break;
            }
            default: {
                throw new Error('Unknown state');
            }
        }
    }
    // State machine
    // Data state
    //------------------------------------------------------------------
    _stateData(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.TAG_OPEN;
                break;
            }
            case unicode_js_1.CODE_POINTS.AMPERSAND: {
                this.returnState = State.DATA;
                this.state = State.CHARACTER_REFERENCE;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this._emitCodePoint(cp);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    //  RCDATA state
    //------------------------------------------------------------------
    _stateRcdata(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.AMPERSAND: {
                this.returnState = State.RCDATA;
                this.state = State.CHARACTER_REFERENCE;
                break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.RCDATA_LESS_THAN_SIGN;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // RAWTEXT state
    //------------------------------------------------------------------
    _stateRawtext(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.RAWTEXT_LESS_THAN_SIGN;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data state
    //------------------------------------------------------------------
    _stateScriptData(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_LESS_THAN_SIGN;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // PLAINTEXT state
    //------------------------------------------------------------------
    _statePlaintext(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // Tag open state
    //------------------------------------------------------------------
    _stateTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this._createStartTagToken();
            this.state = State.TAG_NAME;
            this._stateTagName(cp);
        }
        else
            switch (cp) {
                case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
                    this.state = State.MARKUP_DECLARATION_OPEN;
                    break;
                }
                case unicode_js_1.CODE_POINTS.SOLIDUS: {
                    this.state = State.END_TAG_OPEN;
                    break;
                }
                case unicode_js_1.CODE_POINTS.QUESTION_MARK: {
                    this._err(error_codes_js_1$1.ERR.unexpectedQuestionMarkInsteadOfTagName);
                    this._createCommentToken(1);
                    this.state = State.BOGUS_COMMENT;
                    this._stateBogusComment(cp);
                    break;
                }
                case unicode_js_1.CODE_POINTS.EOF: {
                    this._err(error_codes_js_1$1.ERR.eofBeforeTagName);
                    this._emitChars('<');
                    this._emitEOFToken();
                    break;
                }
                default: {
                    this._err(error_codes_js_1$1.ERR.invalidFirstCharacterOfTagName);
                    this._emitChars('<');
                    this.state = State.DATA;
                    this._stateData(cp);
                }
            }
    }
    // End tag open state
    //------------------------------------------------------------------
    _stateEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this._createEndTagToken();
            this.state = State.TAG_NAME;
            this._stateTagName(cp);
        }
        else
            switch (cp) {
                case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                    this._err(error_codes_js_1$1.ERR.missingEndTagName);
                    this.state = State.DATA;
                    break;
                }
                case unicode_js_1.CODE_POINTS.EOF: {
                    this._err(error_codes_js_1$1.ERR.eofBeforeTagName);
                    this._emitChars('</');
                    this._emitEOFToken();
                    break;
                }
                default: {
                    this._err(error_codes_js_1$1.ERR.invalidFirstCharacterOfTagName);
                    this._createCommentToken(2);
                    this.state = State.BOGUS_COMMENT;
                    this._stateBogusComment(cp);
                }
            }
    }
    // Tag name state
    //------------------------------------------------------------------
    _stateTagName(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                break;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
                this.state = State.SELF_CLOSING_START_TAG;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                token.tagName += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                token.tagName += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
            }
        }
    }
    // RCDATA less-than sign state
    //------------------------------------------------------------------
    _stateRcdataLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
            this.state = State.RCDATA_END_TAG_OPEN;
        }
        else {
            this._emitChars('<');
            this.state = State.RCDATA;
            this._stateRcdata(cp);
        }
    }
    // RCDATA end tag open state
    //------------------------------------------------------------------
    _stateRcdataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this.state = State.RCDATA_END_TAG_NAME;
            this._stateRcdataEndTagName(cp);
        }
        else {
            this._emitChars('</');
            this.state = State.RCDATA;
            this._stateRcdata(cp);
        }
    }
    handleSpecialEndTag(_cp) {
        if (!this.preprocessor.startsWith(this.lastStartTagName, false)) {
            return !this._ensureHibernation();
        }
        this._createEndTagToken();
        const token = this.currentToken;
        token.tagName = this.lastStartTagName;
        const cp = this.preprocessor.peek(this.lastStartTagName.length);
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                this._advanceBy(this.lastStartTagName.length);
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                return false;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
                this._advanceBy(this.lastStartTagName.length);
                this.state = State.SELF_CLOSING_START_TAG;
                return false;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._advanceBy(this.lastStartTagName.length);
                this.emitCurrentTagToken();
                this.state = State.DATA;
                return false;
            }
            default: {
                return !this._ensureHibernation();
            }
        }
    }
    // RCDATA end tag name state
    //------------------------------------------------------------------
    _stateRcdataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
            this._emitChars('</');
            this.state = State.RCDATA;
            this._stateRcdata(cp);
        }
    }
    // RAWTEXT less-than sign state
    //------------------------------------------------------------------
    _stateRawtextLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
            this.state = State.RAWTEXT_END_TAG_OPEN;
        }
        else {
            this._emitChars('<');
            this.state = State.RAWTEXT;
            this._stateRawtext(cp);
        }
    }
    // RAWTEXT end tag open state
    //------------------------------------------------------------------
    _stateRawtextEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this.state = State.RAWTEXT_END_TAG_NAME;
            this._stateRawtextEndTagName(cp);
        }
        else {
            this._emitChars('</');
            this.state = State.RAWTEXT;
            this._stateRawtext(cp);
        }
    }
    // RAWTEXT end tag name state
    //------------------------------------------------------------------
    _stateRawtextEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
            this._emitChars('</');
            this.state = State.RAWTEXT;
            this._stateRawtext(cp);
        }
    }
    // Script data less-than sign state
    //------------------------------------------------------------------
    _stateScriptDataLessThanSign(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
                this.state = State.SCRIPT_DATA_END_TAG_OPEN;
                break;
            }
            case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
                this.state = State.SCRIPT_DATA_ESCAPE_START;
                this._emitChars('<!');
                break;
            }
            default: {
                this._emitChars('<');
                this.state = State.SCRIPT_DATA;
                this._stateScriptData(cp);
            }
        }
    }
    // Script data end tag open state
    //------------------------------------------------------------------
    _stateScriptDataEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this.state = State.SCRIPT_DATA_END_TAG_NAME;
            this._stateScriptDataEndTagName(cp);
        }
        else {
            this._emitChars('</');
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
        }
    }
    // Script data end tag name state
    //------------------------------------------------------------------
    _stateScriptDataEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
            this._emitChars('</');
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
        }
    }
    // Script data escape start state
    //------------------------------------------------------------------
    _stateScriptDataEscapeStart(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.SCRIPT_DATA_ESCAPE_START_DASH;
            this._emitChars('-');
        }
        else {
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
        }
    }
    // Script data escape start dash state
    //------------------------------------------------------------------
    _stateScriptDataEscapeStartDash(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
            this._emitChars('-');
        }
        else {
            this.state = State.SCRIPT_DATA;
            this._stateScriptData(cp);
        }
    }
    // Script data escaped state
    //------------------------------------------------------------------
    _stateScriptDataEscaped(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.SCRIPT_DATA_ESCAPED_DASH;
                this._emitChars('-');
                break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data escaped dash state
    //------------------------------------------------------------------
    _stateScriptDataEscapedDash(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.SCRIPT_DATA_ESCAPED_DASH_DASH;
                this._emitChars('-');
                break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this.state = State.SCRIPT_DATA_ESCAPED;
                this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this.state = State.SCRIPT_DATA_ESCAPED;
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data escaped dash dash state
    //------------------------------------------------------------------
    _stateScriptDataEscapedDashDash(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                this._emitChars('-');
                break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_ESCAPED_LESS_THAN_SIGN;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.SCRIPT_DATA;
                this._emitChars('>');
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this.state = State.SCRIPT_DATA_ESCAPED;
                this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this.state = State.SCRIPT_DATA_ESCAPED;
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data escaped less-than sign state
    //------------------------------------------------------------------
    _stateScriptDataEscapedLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
            this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_OPEN;
        }
        else if (isAsciiLetter(cp)) {
            this._emitChars('<');
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_START;
            this._stateScriptDataDoubleEscapeStart(cp);
        }
        else {
            this._emitChars('<');
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
        }
    }
    // Script data escaped end tag open state
    //------------------------------------------------------------------
    _stateScriptDataEscapedEndTagOpen(cp) {
        if (isAsciiLetter(cp)) {
            this.state = State.SCRIPT_DATA_ESCAPED_END_TAG_NAME;
            this._stateScriptDataEscapedEndTagName(cp);
        }
        else {
            this._emitChars('</');
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
        }
    }
    // Script data escaped end tag name state
    //------------------------------------------------------------------
    _stateScriptDataEscapedEndTagName(cp) {
        if (this.handleSpecialEndTag(cp)) {
            this._emitChars('</');
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
        }
    }
    // Script data double escape start state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscapeStart(cp) {
        if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) &&
            isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
            this._emitCodePoint(cp);
            for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
                this._emitCodePoint(this._consume());
            }
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
        }
        else if (!this._ensureHibernation()) {
            this.state = State.SCRIPT_DATA_ESCAPED;
            this._stateScriptDataEscaped(cp);
        }
    }
    // Script data double escaped state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscaped(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH;
                this._emitChars('-');
                break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                this._emitChars('<');
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data double escaped dash state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscapedDash(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_DASH_DASH;
                this._emitChars('-');
                break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                this._emitChars('<');
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data double escaped dash dash state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscapedDashDash(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                this._emitChars('-');
                break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED_LESS_THAN_SIGN;
                this._emitChars('<');
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.SCRIPT_DATA;
                this._emitChars('>');
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                this._emitChars(unicode_js_1.REPLACEMENT_CHARACTER);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInScriptHtmlCommentLikeText);
                this._emitEOFToken();
                break;
            }
            default: {
                this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
                this._emitCodePoint(cp);
            }
        }
    }
    // Script data double escaped less-than sign state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscapedLessThanSign(cp) {
        if (cp === unicode_js_1.CODE_POINTS.SOLIDUS) {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPE_END;
            this._emitChars('/');
        }
        else {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._stateScriptDataDoubleEscaped(cp);
        }
    }
    // Script data double escape end state
    //------------------------------------------------------------------
    _stateScriptDataDoubleEscapeEnd(cp) {
        if (this.preprocessor.startsWith(unicode_js_1.SEQUENCES.SCRIPT, false) &&
            isScriptDataDoubleEscapeSequenceEnd(this.preprocessor.peek(unicode_js_1.SEQUENCES.SCRIPT.length))) {
            this._emitCodePoint(cp);
            for (let i = 0; i < unicode_js_1.SEQUENCES.SCRIPT.length; i++) {
                this._emitCodePoint(this._consume());
            }
            this.state = State.SCRIPT_DATA_ESCAPED;
        }
        else if (!this._ensureHibernation()) {
            this.state = State.SCRIPT_DATA_DOUBLE_ESCAPED;
            this._stateScriptDataDoubleEscaped(cp);
        }
    }
    // Before attribute name state
    //------------------------------------------------------------------
    _stateBeforeAttributeName(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS:
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
            case unicode_js_1.CODE_POINTS.EOF: {
                this.state = State.AFTER_ATTRIBUTE_NAME;
                this._stateAfterAttributeName(cp);
                break;
            }
            case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
                this._err(error_codes_js_1$1.ERR.unexpectedEqualsSignBeforeAttributeName);
                this._createAttr('=');
                this.state = State.ATTRIBUTE_NAME;
                break;
            }
            default: {
                this._createAttr('');
                this.state = State.ATTRIBUTE_NAME;
                this._stateAttributeName(cp);
            }
        }
    }
    // Attribute name state
    //------------------------------------------------------------------
    _stateAttributeName(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED:
            case unicode_js_1.CODE_POINTS.SOLIDUS:
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN:
            case unicode_js_1.CODE_POINTS.EOF: {
                this._leaveAttrName();
                this.state = State.AFTER_ATTRIBUTE_NAME;
                this._stateAfterAttributeName(cp);
                break;
            }
            case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
                this._leaveAttrName();
                this.state = State.BEFORE_ATTRIBUTE_VALUE;
                break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
            case unicode_js_1.CODE_POINTS.APOSTROPHE:
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.unexpectedCharacterInAttributeName);
                this.currentAttr.name += String.fromCodePoint(cp);
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this.currentAttr.name += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            default: {
                this.currentAttr.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
            }
        }
    }
    // After attribute name state
    //------------------------------------------------------------------
    _stateAfterAttributeName(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
                this.state = State.SELF_CLOSING_START_TAG;
                break;
            }
            case unicode_js_1.CODE_POINTS.EQUALS_SIGN: {
                this.state = State.BEFORE_ATTRIBUTE_VALUE;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this._createAttr('');
                this.state = State.ATTRIBUTE_NAME;
                this._stateAttributeName(cp);
            }
        }
    }
    // Before attribute value state
    //------------------------------------------------------------------
    _stateBeforeAttributeValue(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                this.state = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                this.state = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.missingAttributeValue);
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            default: {
                this.state = State.ATTRIBUTE_VALUE_UNQUOTED;
                this._stateAttributeValueUnquoted(cp);
            }
        }
    }
    // Attribute value (double-quoted) state
    //------------------------------------------------------------------
    _stateAttributeValueDoubleQuoted(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.AMPERSAND: {
                this.returnState = State.ATTRIBUTE_VALUE_DOUBLE_QUOTED;
                this.state = State.CHARACTER_REFERENCE;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this.currentAttr.value += String.fromCodePoint(cp);
            }
        }
    }
    // Attribute value (single-quoted) state
    //------------------------------------------------------------------
    _stateAttributeValueSingleQuoted(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                this.state = State.AFTER_ATTRIBUTE_VALUE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.AMPERSAND: {
                this.returnState = State.ATTRIBUTE_VALUE_SINGLE_QUOTED;
                this.state = State.CHARACTER_REFERENCE;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this.currentAttr.value += String.fromCodePoint(cp);
            }
        }
    }
    // Attribute value (unquoted) state
    //------------------------------------------------------------------
    _stateAttributeValueUnquoted(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                this._leaveAttrValue();
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                break;
            }
            case unicode_js_1.CODE_POINTS.AMPERSAND: {
                this.returnState = State.ATTRIBUTE_VALUE_UNQUOTED;
                this.state = State.CHARACTER_REFERENCE;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._leaveAttrValue();
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                this.currentAttr.value += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK:
            case unicode_js_1.CODE_POINTS.APOSTROPHE:
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN:
            case unicode_js_1.CODE_POINTS.EQUALS_SIGN:
            case unicode_js_1.CODE_POINTS.GRAVE_ACCENT: {
                this._err(error_codes_js_1$1.ERR.unexpectedCharacterInUnquotedAttributeValue);
                this.currentAttr.value += String.fromCodePoint(cp);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this.currentAttr.value += String.fromCodePoint(cp);
            }
        }
    }
    // After attribute value (quoted) state
    //------------------------------------------------------------------
    _stateAfterAttributeValueQuoted(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                this._leaveAttrValue();
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                break;
            }
            case unicode_js_1.CODE_POINTS.SOLIDUS: {
                this._leaveAttrValue();
                this.state = State.SELF_CLOSING_START_TAG;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._leaveAttrValue();
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(error_codes_js_1$1.ERR.missingWhitespaceBetweenAttributes);
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                this._stateBeforeAttributeName(cp);
            }
        }
    }
    // Self-closing start tag state
    //------------------------------------------------------------------
    _stateSelfClosingStartTag(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                const token = this.currentToken;
                token.selfClosing = true;
                this.state = State.DATA;
                this.emitCurrentTagToken();
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInTag);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(error_codes_js_1$1.ERR.unexpectedSolidusInTag);
                this.state = State.BEFORE_ATTRIBUTE_NAME;
                this._stateBeforeAttributeName(cp);
            }
        }
    }
    // Bogus comment state
    //------------------------------------------------------------------
    _stateBogusComment(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentComment(token);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                token.data += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            default: {
                token.data += String.fromCodePoint(cp);
            }
        }
    }
    // Markup declaration open state
    //------------------------------------------------------------------
    _stateMarkupDeclarationOpen(cp) {
        if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DASH_DASH, true)) {
            this._createCommentToken(unicode_js_1.SEQUENCES.DASH_DASH.length + 1);
            this.state = State.COMMENT_START;
        }
        else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.DOCTYPE, false)) {
            // NOTE: Doctypes tokens are created without fixed offsets. We keep track of the moment a doctype *might* start here.
            this.currentLocation = this.getCurrentLocation(unicode_js_1.SEQUENCES.DOCTYPE.length + 1);
            this.state = State.DOCTYPE;
        }
        else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.CDATA_START, true)) {
            if (this.inForeignNode) {
                this.state = State.CDATA_SECTION;
            }
            else {
                this._err(error_codes_js_1$1.ERR.cdataInHtmlContent);
                this._createCommentToken(unicode_js_1.SEQUENCES.CDATA_START.length + 1);
                this.currentToken.data = '[CDATA[';
                this.state = State.BOGUS_COMMENT;
            }
        }
        //NOTE: Sequence lookups can be abrupted by hibernation. In that case, lookup
        //results are no longer valid and we will need to start over.
        else if (!this._ensureHibernation()) {
            this._err(error_codes_js_1$1.ERR.incorrectlyOpenedComment);
            this._createCommentToken(2);
            this.state = State.BOGUS_COMMENT;
            this._stateBogusComment(cp);
        }
    }
    // Comment start state
    //------------------------------------------------------------------
    _stateCommentStart(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.COMMENT_START_DASH;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.abruptClosingOfEmptyComment);
                this.state = State.DATA;
                const token = this.currentToken;
                this.emitCurrentComment(token);
                break;
            }
            default: {
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // Comment start dash state
    //------------------------------------------------------------------
    _stateCommentStartDash(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.COMMENT_END;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.abruptClosingOfEmptyComment);
                this.state = State.DATA;
                this.emitCurrentComment(token);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInComment);
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.data += '-';
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // Comment state
    //------------------------------------------------------------------
    _stateComment(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.COMMENT_END_DASH;
                break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                token.data += '<';
                this.state = State.COMMENT_LESS_THAN_SIGN;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                token.data += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInComment);
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.data += String.fromCodePoint(cp);
            }
        }
    }
    // Comment less-than sign state
    //------------------------------------------------------------------
    _stateCommentLessThanSign(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
                token.data += '!';
                this.state = State.COMMENT_LESS_THAN_SIGN_BANG;
                break;
            }
            case unicode_js_1.CODE_POINTS.LESS_THAN_SIGN: {
                token.data += '<';
                break;
            }
            default: {
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // Comment less-than sign bang state
    //------------------------------------------------------------------
    _stateCommentLessThanSignBang(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH;
        }
        else {
            this.state = State.COMMENT;
            this._stateComment(cp);
        }
    }
    // Comment less-than sign bang dash state
    //------------------------------------------------------------------
    _stateCommentLessThanSignBangDash(cp) {
        if (cp === unicode_js_1.CODE_POINTS.HYPHEN_MINUS) {
            this.state = State.COMMENT_LESS_THAN_SIGN_BANG_DASH_DASH;
        }
        else {
            this.state = State.COMMENT_END_DASH;
            this._stateCommentEndDash(cp);
        }
    }
    // Comment less-than sign bang dash dash state
    //------------------------------------------------------------------
    _stateCommentLessThanSignBangDashDash(cp) {
        if (cp !== unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN && cp !== unicode_js_1.CODE_POINTS.EOF) {
            this._err(error_codes_js_1$1.ERR.nestedComment);
        }
        this.state = State.COMMENT_END;
        this._stateCommentEnd(cp);
    }
    // Comment end dash state
    //------------------------------------------------------------------
    _stateCommentEndDash(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                this.state = State.COMMENT_END;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInComment);
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.data += '-';
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // Comment end state
    //------------------------------------------------------------------
    _stateCommentEnd(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentComment(token);
                break;
            }
            case unicode_js_1.CODE_POINTS.EXCLAMATION_MARK: {
                this.state = State.COMMENT_END_BANG;
                break;
            }
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                token.data += '-';
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInComment);
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.data += '--';
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // Comment end bang state
    //------------------------------------------------------------------
    _stateCommentEndBang(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.HYPHEN_MINUS: {
                token.data += '--!';
                this.state = State.COMMENT_END_DASH;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.incorrectlyClosedComment);
                this.state = State.DATA;
                this.emitCurrentComment(token);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInComment);
                this.emitCurrentComment(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.data += '--!';
                this.state = State.COMMENT;
                this._stateComment(cp);
            }
        }
    }
    // DOCTYPE state
    //------------------------------------------------------------------
    _stateDoctype(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                this.state = State.BEFORE_DOCTYPE_NAME;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.BEFORE_DOCTYPE_NAME;
                this._stateBeforeDoctypeName(cp);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                this._createDoctypeToken(null);
                const token = this.currentToken;
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(error_codes_js_1$1.ERR.missingWhitespaceBeforeDoctypeName);
                this.state = State.BEFORE_DOCTYPE_NAME;
                this._stateBeforeDoctypeName(cp);
            }
        }
    }
    // Before DOCTYPE name state
    //------------------------------------------------------------------
    _stateBeforeDoctypeName(cp) {
        if (isAsciiUpper(cp)) {
            this._createDoctypeToken(String.fromCharCode(toAsciiLower(cp)));
            this.state = State.DOCTYPE_NAME;
        }
        else
            switch (cp) {
                case unicode_js_1.CODE_POINTS.SPACE:
                case unicode_js_1.CODE_POINTS.LINE_FEED:
                case unicode_js_1.CODE_POINTS.TABULATION:
                case unicode_js_1.CODE_POINTS.FORM_FEED: {
                    // Ignore whitespace
                    break;
                }
                case unicode_js_1.CODE_POINTS.NULL: {
                    this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                    this._createDoctypeToken(unicode_js_1.REPLACEMENT_CHARACTER);
                    this.state = State.DOCTYPE_NAME;
                    break;
                }
                case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                    this._err(error_codes_js_1$1.ERR.missingDoctypeName);
                    this._createDoctypeToken(null);
                    const token = this.currentToken;
                    token.forceQuirks = true;
                    this.emitCurrentDoctype(token);
                    this.state = State.DATA;
                    break;
                }
                case unicode_js_1.CODE_POINTS.EOF: {
                    this._err(error_codes_js_1$1.ERR.eofInDoctype);
                    this._createDoctypeToken(null);
                    const token = this.currentToken;
                    token.forceQuirks = true;
                    this.emitCurrentDoctype(token);
                    this._emitEOFToken();
                    break;
                }
                default: {
                    this._createDoctypeToken(String.fromCodePoint(cp));
                    this.state = State.DOCTYPE_NAME;
                }
            }
    }
    // DOCTYPE name state
    //------------------------------------------------------------------
    _stateDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                this.state = State.AFTER_DOCTYPE_NAME;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                token.name += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.name += String.fromCodePoint(isAsciiUpper(cp) ? toAsciiLower(cp) : cp);
            }
        }
    }
    // After DOCTYPE name state
    //------------------------------------------------------------------
    _stateAfterDoctypeName(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default:
                if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.PUBLIC, false)) {
                    this.state = State.AFTER_DOCTYPE_PUBLIC_KEYWORD;
                }
                else if (this._consumeSequenceIfMatch(unicode_js_1.SEQUENCES.SYSTEM, false)) {
                    this.state = State.AFTER_DOCTYPE_SYSTEM_KEYWORD;
                }
                //NOTE: sequence lookup can be abrupted by hibernation. In that case lookup
                //results are no longer valid and we will need to start over.
                else if (!this._ensureHibernation()) {
                    this._err(error_codes_js_1$1.ERR.invalidCharacterSequenceAfterDoctypeName);
                    token.forceQuirks = true;
                    this.state = State.BOGUS_DOCTYPE;
                    this._stateBogusDoctype(cp);
                }
        }
    }
    // After DOCTYPE public keyword state
    //------------------------------------------------------------------
    _stateAfterDoctypePublicKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                this.state = State.BEFORE_DOCTYPE_PUBLIC_IDENTIFIER;
                break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                this._err(error_codes_js_1$1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
                token.publicId = '';
                this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                this._err(error_codes_js_1$1.ERR.missingWhitespaceAfterDoctypePublicKeyword);
                token.publicId = '';
                this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.missingDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(error_codes_js_1$1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // Before DOCTYPE public identifier state
    //------------------------------------------------------------------
    _stateBeforeDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                token.publicId = '';
                this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                token.publicId = '';
                this.state = State.DOCTYPE_PUBLIC_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.missingDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(error_codes_js_1$1.ERR.missingQuoteBeforeDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // DOCTYPE public identifier (double-quoted) state
    //------------------------------------------------------------------
    _stateDoctypePublicIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.abruptDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.publicId += String.fromCodePoint(cp);
            }
        }
    }
    // DOCTYPE public identifier (single-quoted) state
    //------------------------------------------------------------------
    _stateDoctypePublicIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                this.state = State.AFTER_DOCTYPE_PUBLIC_IDENTIFIER;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                token.publicId += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.abruptDoctypePublicIdentifier);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.publicId += String.fromCodePoint(cp);
            }
        }
    }
    // After DOCTYPE public identifier state
    //------------------------------------------------------------------
    _stateAfterDoctypePublicIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                this.state = State.BETWEEN_DOCTYPE_PUBLIC_AND_SYSTEM_IDENTIFIERS;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                this._err(error_codes_js_1$1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                this._err(error_codes_js_1$1.ERR.missingWhitespaceBetweenDoctypePublicAndSystemIdentifiers);
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(error_codes_js_1$1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // Between DOCTYPE public and system identifiers state
    //------------------------------------------------------------------
    _stateBetweenDoctypePublicAndSystemIdentifiers(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(error_codes_js_1$1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // After DOCTYPE system keyword state
    //------------------------------------------------------------------
    _stateAfterDoctypeSystemKeyword(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                this.state = State.BEFORE_DOCTYPE_SYSTEM_IDENTIFIER;
                break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                this._err(error_codes_js_1$1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                this._err(error_codes_js_1$1.ERR.missingWhitespaceAfterDoctypeSystemKeyword);
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.missingDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(error_codes_js_1$1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // Before DOCTYPE system identifier state
    //------------------------------------------------------------------
    _stateBeforeDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_DOUBLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                token.systemId = '';
                this.state = State.DOCTYPE_SYSTEM_IDENTIFIER_SINGLE_QUOTED;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.missingDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.DATA;
                this.emitCurrentDoctype(token);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(error_codes_js_1$1.ERR.missingQuoteBeforeDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // DOCTYPE system identifier (double-quoted) state
    //------------------------------------------------------------------
    _stateDoctypeSystemIdentifierDoubleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.QUOTATION_MARK: {
                this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.abruptDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.systemId += String.fromCodePoint(cp);
            }
        }
    }
    // DOCTYPE system identifier (single-quoted) state
    //------------------------------------------------------------------
    _stateDoctypeSystemIdentifierSingleQuoted(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.APOSTROPHE: {
                this.state = State.AFTER_DOCTYPE_SYSTEM_IDENTIFIER;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                token.systemId += unicode_js_1.REPLACEMENT_CHARACTER;
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this._err(error_codes_js_1$1.ERR.abruptDoctypeSystemIdentifier);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                token.systemId += String.fromCodePoint(cp);
            }
        }
    }
    // After DOCTYPE system identifier state
    //------------------------------------------------------------------
    _stateAfterDoctypeSystemIdentifier(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.SPACE:
            case unicode_js_1.CODE_POINTS.LINE_FEED:
            case unicode_js_1.CODE_POINTS.TABULATION:
            case unicode_js_1.CODE_POINTS.FORM_FEED: {
                // Ignore whitespace
                break;
            }
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInDoctype);
                token.forceQuirks = true;
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            default: {
                this._err(error_codes_js_1$1.ERR.unexpectedCharacterAfterDoctypeSystemIdentifier);
                this.state = State.BOGUS_DOCTYPE;
                this._stateBogusDoctype(cp);
            }
        }
    }
    // Bogus DOCTYPE state
    //------------------------------------------------------------------
    _stateBogusDoctype(cp) {
        const token = this.currentToken;
        switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.emitCurrentDoctype(token);
                this.state = State.DATA;
                break;
            }
            case unicode_js_1.CODE_POINTS.NULL: {
                this._err(error_codes_js_1$1.ERR.unexpectedNullCharacter);
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this.emitCurrentDoctype(token);
                this._emitEOFToken();
                break;
            }
            // Do nothing
        }
    }
    // CDATA section state
    //------------------------------------------------------------------
    _stateCdataSection(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
                this.state = State.CDATA_SECTION_BRACKET;
                break;
            }
            case unicode_js_1.CODE_POINTS.EOF: {
                this._err(error_codes_js_1$1.ERR.eofInCdata);
                this._emitEOFToken();
                break;
            }
            default: {
                this._emitCodePoint(cp);
            }
        }
    }
    // CDATA section bracket state
    //------------------------------------------------------------------
    _stateCdataSectionBracket(cp) {
        if (cp === unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET) {
            this.state = State.CDATA_SECTION_END;
        }
        else {
            this._emitChars(']');
            this.state = State.CDATA_SECTION;
            this._stateCdataSection(cp);
        }
    }
    // CDATA section end state
    //------------------------------------------------------------------
    _stateCdataSectionEnd(cp) {
        switch (cp) {
            case unicode_js_1.CODE_POINTS.GREATER_THAN_SIGN: {
                this.state = State.DATA;
                break;
            }
            case unicode_js_1.CODE_POINTS.RIGHT_SQUARE_BRACKET: {
                this._emitChars(']');
                break;
            }
            default: {
                this._emitChars(']]');
                this.state = State.CDATA_SECTION;
                this._stateCdataSection(cp);
            }
        }
    }
    // Character reference state
    //------------------------------------------------------------------
    _stateCharacterReference(cp) {
        if (cp === unicode_js_1.CODE_POINTS.NUMBER_SIGN) {
            this.state = State.NUMERIC_CHARACTER_REFERENCE;
        }
        else if (isAsciiAlphaNumeric(cp)) {
            this.state = State.NAMED_CHARACTER_REFERENCE;
            this._stateNamedCharacterReference(cp);
        }
        else {
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
            this._reconsumeInState(this.returnState);
        }
    }
    // Named character reference state
    //------------------------------------------------------------------
    _stateNamedCharacterReference(cp) {
        const matchResult = this._matchNamedCharacterReference(cp);
        //NOTE: Matching can be abrupted by hibernation. In that case, match
        //results are no longer valid and we will need to start over.
        if (this._ensureHibernation()) ;
        else if (matchResult) {
            for (let i = 0; i < matchResult.length; i++) {
                this._flushCodePointConsumedAsCharacterReference(matchResult[i]);
            }
            this.state = this.returnState;
        }
        else {
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
            this.state = State.AMBIGUOUS_AMPERSAND;
        }
    }
    // Ambiguos ampersand state
    //------------------------------------------------------------------
    _stateAmbiguousAmpersand(cp) {
        if (isAsciiAlphaNumeric(cp)) {
            this._flushCodePointConsumedAsCharacterReference(cp);
        }
        else {
            if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
                this._err(error_codes_js_1$1.ERR.unknownNamedCharacterReference);
            }
            this._reconsumeInState(this.returnState);
        }
    }
    // Numeric character reference state
    //------------------------------------------------------------------
    _stateNumericCharacterReference(cp) {
        this.charRefCode = 0;
        if (cp === unicode_js_1.CODE_POINTS.LATIN_SMALL_X || cp === unicode_js_1.CODE_POINTS.LATIN_CAPITAL_X) {
            this.state = State.HEXADEMICAL_CHARACTER_REFERENCE_START;
        }
        else {
            this.state = State.DECIMAL_CHARACTER_REFERENCE_START;
            this._stateDecimalCharacterReferenceStart(cp);
        }
    }
    // Hexademical character reference start state
    //------------------------------------------------------------------
    _stateHexademicalCharacterReferenceStart(cp) {
        if (isAsciiHexDigit(cp)) {
            this.state = State.HEXADEMICAL_CHARACTER_REFERENCE;
            this._stateHexademicalCharacterReference(cp);
        }
        else {
            this._err(error_codes_js_1$1.ERR.absenceOfDigitsInNumericCharacterReference);
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.NUMBER_SIGN);
            this._unconsume(2);
            this.state = this.returnState;
        }
    }
    // Decimal character reference start state
    //------------------------------------------------------------------
    _stateDecimalCharacterReferenceStart(cp) {
        if (isAsciiDigit(cp)) {
            this.state = State.DECIMAL_CHARACTER_REFERENCE;
            this._stateDecimalCharacterReference(cp);
        }
        else {
            this._err(error_codes_js_1$1.ERR.absenceOfDigitsInNumericCharacterReference);
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.AMPERSAND);
            this._flushCodePointConsumedAsCharacterReference(unicode_js_1.CODE_POINTS.NUMBER_SIGN);
            this._reconsumeInState(this.returnState);
        }
    }
    // Hexademical character reference state
    //------------------------------------------------------------------
    _stateHexademicalCharacterReference(cp) {
        if (isAsciiUpperHexDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 0x37;
        }
        else if (isAsciiLowerHexDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 0x57;
        }
        else if (isAsciiDigit(cp)) {
            this.charRefCode = this.charRefCode * 16 + cp - 0x30;
        }
        else if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
        }
        else {
            this._err(error_codes_js_1$1.ERR.missingSemicolonAfterCharacterReference);
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
            this._stateNumericCharacterReferenceEnd();
        }
    }
    // Decimal character reference state
    //------------------------------------------------------------------
    _stateDecimalCharacterReference(cp) {
        if (isAsciiDigit(cp)) {
            this.charRefCode = this.charRefCode * 10 + cp - 0x30;
        }
        else if (cp === unicode_js_1.CODE_POINTS.SEMICOLON) {
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
        }
        else {
            this._err(error_codes_js_1$1.ERR.missingSemicolonAfterCharacterReference);
            this.state = State.NUMERIC_CHARACTER_REFERENCE_END;
            this._stateNumericCharacterReferenceEnd();
        }
    }
    // Numeric character reference end state
    //------------------------------------------------------------------
    _stateNumericCharacterReferenceEnd() {
        if (this.charRefCode === unicode_js_1.CODE_POINTS.NULL) {
            this._err(error_codes_js_1$1.ERR.nullCharacterReference);
            this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
        }
        else if (this.charRefCode > 1114111) {
            this._err(error_codes_js_1$1.ERR.characterReferenceOutsideUnicodeRange);
            this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
        }
        else if ((0, unicode_js_1.isSurrogate)(this.charRefCode)) {
            this._err(error_codes_js_1$1.ERR.surrogateCharacterReference);
            this.charRefCode = unicode_js_1.CODE_POINTS.REPLACEMENT_CHARACTER;
        }
        else if ((0, unicode_js_1.isUndefinedCodePoint)(this.charRefCode)) {
            this._err(error_codes_js_1$1.ERR.noncharacterCharacterReference);
        }
        else if ((0, unicode_js_1.isControlCodePoint)(this.charRefCode) || this.charRefCode === unicode_js_1.CODE_POINTS.CARRIAGE_RETURN) {
            this._err(error_codes_js_1$1.ERR.controlCharacterReference);
            const replacement = C1_CONTROLS_REFERENCE_REPLACEMENTS.get(this.charRefCode);
            if (replacement !== undefined) {
                this.charRefCode = replacement;
            }
        }
        this._flushCodePointConsumedAsCharacterReference(this.charRefCode);
        this._reconsumeInState(this.returnState);
    }
}
tokenizer.Tokenizer = Tokenizer$1;

var openElementStack = {};

Object.defineProperty(openElementStack, "__esModule", { value: true });
openElementStack.OpenElementStack = void 0;
const html_js_1$3 = html;
//Element utils
const IMPLICIT_END_TAG_REQUIRED = new Set([html_js_1$3.TAG_ID.DD, html_js_1$3.TAG_ID.DT, html_js_1$3.TAG_ID.LI, html_js_1$3.TAG_ID.OPTGROUP, html_js_1$3.TAG_ID.OPTION, html_js_1$3.TAG_ID.P, html_js_1$3.TAG_ID.RB, html_js_1$3.TAG_ID.RP, html_js_1$3.TAG_ID.RT, html_js_1$3.TAG_ID.RTC]);
const IMPLICIT_END_TAG_REQUIRED_THOROUGHLY = new Set([
    ...IMPLICIT_END_TAG_REQUIRED,
    html_js_1$3.TAG_ID.CAPTION,
    html_js_1$3.TAG_ID.COLGROUP,
    html_js_1$3.TAG_ID.TBODY,
    html_js_1$3.TAG_ID.TD,
    html_js_1$3.TAG_ID.TFOOT,
    html_js_1$3.TAG_ID.TH,
    html_js_1$3.TAG_ID.THEAD,
    html_js_1$3.TAG_ID.TR,
]);
const SCOPING_ELEMENT_NS = new Map([
    [html_js_1$3.TAG_ID.APPLET, html_js_1$3.NS.HTML],
    [html_js_1$3.TAG_ID.CAPTION, html_js_1$3.NS.HTML],
    [html_js_1$3.TAG_ID.HTML, html_js_1$3.NS.HTML],
    [html_js_1$3.TAG_ID.MARQUEE, html_js_1$3.NS.HTML],
    [html_js_1$3.TAG_ID.OBJECT, html_js_1$3.NS.HTML],
    [html_js_1$3.TAG_ID.TABLE, html_js_1$3.NS.HTML],
    [html_js_1$3.TAG_ID.TD, html_js_1$3.NS.HTML],
    [html_js_1$3.TAG_ID.TEMPLATE, html_js_1$3.NS.HTML],
    [html_js_1$3.TAG_ID.TH, html_js_1$3.NS.HTML],
    [html_js_1$3.TAG_ID.ANNOTATION_XML, html_js_1$3.NS.MATHML],
    [html_js_1$3.TAG_ID.MI, html_js_1$3.NS.MATHML],
    [html_js_1$3.TAG_ID.MN, html_js_1$3.NS.MATHML],
    [html_js_1$3.TAG_ID.MO, html_js_1$3.NS.MATHML],
    [html_js_1$3.TAG_ID.MS, html_js_1$3.NS.MATHML],
    [html_js_1$3.TAG_ID.MTEXT, html_js_1$3.NS.MATHML],
    [html_js_1$3.TAG_ID.DESC, html_js_1$3.NS.SVG],
    [html_js_1$3.TAG_ID.FOREIGN_OBJECT, html_js_1$3.NS.SVG],
    [html_js_1$3.TAG_ID.TITLE, html_js_1$3.NS.SVG],
]);
const NAMED_HEADERS = [html_js_1$3.TAG_ID.H1, html_js_1$3.TAG_ID.H2, html_js_1$3.TAG_ID.H3, html_js_1$3.TAG_ID.H4, html_js_1$3.TAG_ID.H5, html_js_1$3.TAG_ID.H6];
const TABLE_ROW_CONTEXT = [html_js_1$3.TAG_ID.TR, html_js_1$3.TAG_ID.TEMPLATE, html_js_1$3.TAG_ID.HTML];
const TABLE_BODY_CONTEXT = [html_js_1$3.TAG_ID.TBODY, html_js_1$3.TAG_ID.TFOOT, html_js_1$3.TAG_ID.THEAD, html_js_1$3.TAG_ID.TEMPLATE, html_js_1$3.TAG_ID.HTML];
const TABLE_CONTEXT = [html_js_1$3.TAG_ID.TABLE, html_js_1$3.TAG_ID.TEMPLATE, html_js_1$3.TAG_ID.HTML];
const TABLE_CELLS = [html_js_1$3.TAG_ID.TD, html_js_1$3.TAG_ID.TH];
//Stack of open elements
class OpenElementStack {
    constructor(document, treeAdapter, handler) {
        this.treeAdapter = treeAdapter;
        this.handler = handler;
        this.items = [];
        this.tagIDs = [];
        this.stackTop = -1;
        this.tmplCount = 0;
        this.currentTagId = html_js_1$3.TAG_ID.UNKNOWN;
        this.current = document;
    }
    get currentTmplContentOrNode() {
        return this._isInTemplate() ? this.treeAdapter.getTemplateContent(this.current) : this.current;
    }
    //Index of element
    _indexOf(element) {
        return this.items.lastIndexOf(element, this.stackTop);
    }
    //Update current element
    _isInTemplate() {
        return this.currentTagId === html_js_1$3.TAG_ID.TEMPLATE && this.treeAdapter.getNamespaceURI(this.current) === html_js_1$3.NS.HTML;
    }
    _updateCurrentElement() {
        this.current = this.items[this.stackTop];
        this.currentTagId = this.tagIDs[this.stackTop];
    }
    //Mutations
    push(element, tagID) {
        this.stackTop++;
        this.items[this.stackTop] = element;
        this.current = element;
        this.tagIDs[this.stackTop] = tagID;
        this.currentTagId = tagID;
        if (this._isInTemplate()) {
            this.tmplCount++;
        }
        this.handler.onItemPush(element, tagID, true);
    }
    pop() {
        const popped = this.current;
        if (this.tmplCount > 0 && this._isInTemplate()) {
            this.tmplCount--;
        }
        this.stackTop--;
        this._updateCurrentElement();
        this.handler.onItemPop(popped, true);
    }
    replace(oldElement, newElement) {
        const idx = this._indexOf(oldElement);
        this.items[idx] = newElement;
        if (idx === this.stackTop) {
            this.current = newElement;
        }
    }
    insertAfter(referenceElement, newElement, newElementID) {
        const insertionIdx = this._indexOf(referenceElement) + 1;
        this.items.splice(insertionIdx, 0, newElement);
        this.tagIDs.splice(insertionIdx, 0, newElementID);
        this.stackTop++;
        if (insertionIdx === this.stackTop) {
            this._updateCurrentElement();
        }
        this.handler.onItemPush(this.current, this.currentTagId, insertionIdx === this.stackTop);
    }
    popUntilTagNamePopped(tagName) {
        let targetIdx = this.stackTop + 1;
        do {
            targetIdx = this.tagIDs.lastIndexOf(tagName, targetIdx - 1);
        } while (targetIdx > 0 && this.treeAdapter.getNamespaceURI(this.items[targetIdx]) !== html_js_1$3.NS.HTML);
        this.shortenToLength(targetIdx < 0 ? 0 : targetIdx);
    }
    shortenToLength(idx) {
        while (this.stackTop >= idx) {
            const popped = this.current;
            if (this.tmplCount > 0 && this._isInTemplate()) {
                this.tmplCount -= 1;
            }
            this.stackTop--;
            this._updateCurrentElement();
            this.handler.onItemPop(popped, this.stackTop < idx);
        }
    }
    popUntilElementPopped(element) {
        const idx = this._indexOf(element);
        this.shortenToLength(idx < 0 ? 0 : idx);
    }
    popUntilPopped(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(idx < 0 ? 0 : idx);
    }
    popUntilNumberedHeaderPopped() {
        this.popUntilPopped(NAMED_HEADERS, html_js_1$3.NS.HTML);
    }
    popUntilTableCellPopped() {
        this.popUntilPopped(TABLE_CELLS, html_js_1$3.NS.HTML);
    }
    popAllUpToHtmlElement() {
        //NOTE: here we assume that the root <html> element is always first in the open element stack, so
        //we perform this fast stack clean up.
        this.tmplCount = 0;
        this.shortenToLength(1);
    }
    _indexOfTagNames(tagNames, namespace) {
        for (let i = this.stackTop; i >= 0; i--) {
            if (tagNames.includes(this.tagIDs[i]) && this.treeAdapter.getNamespaceURI(this.items[i]) === namespace) {
                return i;
            }
        }
        return -1;
    }
    clearBackTo(tagNames, targetNS) {
        const idx = this._indexOfTagNames(tagNames, targetNS);
        this.shortenToLength(idx + 1);
    }
    clearBackToTableContext() {
        this.clearBackTo(TABLE_CONTEXT, html_js_1$3.NS.HTML);
    }
    clearBackToTableBodyContext() {
        this.clearBackTo(TABLE_BODY_CONTEXT, html_js_1$3.NS.HTML);
    }
    clearBackToTableRowContext() {
        this.clearBackTo(TABLE_ROW_CONTEXT, html_js_1$3.NS.HTML);
    }
    remove(element) {
        const idx = this._indexOf(element);
        if (idx >= 0) {
            if (idx === this.stackTop) {
                this.pop();
            }
            else {
                this.items.splice(idx, 1);
                this.tagIDs.splice(idx, 1);
                this.stackTop--;
                this._updateCurrentElement();
                this.handler.onItemPop(element, false);
            }
        }
    }
    //Search
    tryPeekProperlyNestedBodyElement() {
        //Properly nested <body> element (should be second element in stack).
        return this.stackTop >= 1 && this.tagIDs[1] === html_js_1$3.TAG_ID.BODY ? this.items[1] : null;
    }
    contains(element) {
        return this._indexOf(element) > -1;
    }
    getCommonAncestor(element) {
        const elementIdx = this._indexOf(element) - 1;
        return elementIdx >= 0 ? this.items[elementIdx] : null;
    }
    isRootHtmlElementCurrent() {
        return this.stackTop === 0 && this.tagIDs[0] === html_js_1$3.TAG_ID.HTML;
    }
    //Element in scope
    hasInScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === html_js_1$3.NS.HTML) {
                return true;
            }
            if (SCOPING_ELEMENT_NS.get(tn) === ns) {
                return false;
            }
        }
        return true;
    }
    hasNumberedHeaderInScope() {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if ((0, html_js_1$3.isNumberedHeader)(tn) && ns === html_js_1$3.NS.HTML) {
                return true;
            }
            if (SCOPING_ELEMENT_NS.get(tn) === ns) {
                return false;
            }
        }
        return true;
    }
    hasInListItemScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === html_js_1$3.NS.HTML) {
                return true;
            }
            if (((tn === html_js_1$3.TAG_ID.UL || tn === html_js_1$3.TAG_ID.OL) && ns === html_js_1$3.NS.HTML) || SCOPING_ELEMENT_NS.get(tn) === ns) {
                return false;
            }
        }
        return true;
    }
    hasInButtonScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (tn === tagName && ns === html_js_1$3.NS.HTML) {
                return true;
            }
            if ((tn === html_js_1$3.TAG_ID.BUTTON && ns === html_js_1$3.NS.HTML) || SCOPING_ELEMENT_NS.get(tn) === ns) {
                return false;
            }
        }
        return true;
    }
    hasInTableScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== html_js_1$3.NS.HTML) {
                continue;
            }
            if (tn === tagName) {
                return true;
            }
            if (tn === html_js_1$3.TAG_ID.TABLE || tn === html_js_1$3.TAG_ID.TEMPLATE || tn === html_js_1$3.TAG_ID.HTML) {
                return false;
            }
        }
        return true;
    }
    hasTableBodyContextInTableScope() {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== html_js_1$3.NS.HTML) {
                continue;
            }
            if (tn === html_js_1$3.TAG_ID.TBODY || tn === html_js_1$3.TAG_ID.THEAD || tn === html_js_1$3.TAG_ID.TFOOT) {
                return true;
            }
            if (tn === html_js_1$3.TAG_ID.TABLE || tn === html_js_1$3.TAG_ID.HTML) {
                return false;
            }
        }
        return true;
    }
    hasInSelectScope(tagName) {
        for (let i = this.stackTop; i >= 0; i--) {
            const tn = this.tagIDs[i];
            const ns = this.treeAdapter.getNamespaceURI(this.items[i]);
            if (ns !== html_js_1$3.NS.HTML) {
                continue;
            }
            if (tn === tagName) {
                return true;
            }
            if (tn !== html_js_1$3.TAG_ID.OPTION && tn !== html_js_1$3.TAG_ID.OPTGROUP) {
                return false;
            }
        }
        return true;
    }
    //Implied end tags
    generateImpliedEndTags() {
        while (IMPLICIT_END_TAG_REQUIRED.has(this.currentTagId)) {
            this.pop();
        }
    }
    generateImpliedEndTagsThoroughly() {
        while (IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
            this.pop();
        }
    }
    generateImpliedEndTagsWithExclusion(exclusionId) {
        while (this.currentTagId !== exclusionId && IMPLICIT_END_TAG_REQUIRED_THOROUGHLY.has(this.currentTagId)) {
            this.pop();
        }
    }
}
openElementStack.OpenElementStack = OpenElementStack;

var formattingElementList = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.FormattingElementList = exports.EntryType = void 0;
	//Const
	const NOAH_ARK_CAPACITY = 3;
	var EntryType;
	(function (EntryType) {
	    EntryType[EntryType["Marker"] = 0] = "Marker";
	    EntryType[EntryType["Element"] = 1] = "Element";
	})(EntryType = exports.EntryType || (exports.EntryType = {}));
	const MARKER = { type: EntryType.Marker };
	//List of formatting elements
	class FormattingElementList {
	    constructor(treeAdapter) {
	        this.treeAdapter = treeAdapter;
	        this.entries = [];
	        this.bookmark = null;
	    }
	    //Noah Ark's condition
	    //OPTIMIZATION: at first we try to find possible candidates for exclusion using
	    //lightweight heuristics without thorough attributes check.
	    _getNoahArkConditionCandidates(newElement, neAttrs) {
	        const candidates = [];
	        const neAttrsLength = neAttrs.length;
	        const neTagName = this.treeAdapter.getTagName(newElement);
	        const neNamespaceURI = this.treeAdapter.getNamespaceURI(newElement);
	        for (let i = 0; i < this.entries.length; i++) {
	            const entry = this.entries[i];
	            if (entry.type === EntryType.Marker) {
	                break;
	            }
	            const { element } = entry;
	            if (this.treeAdapter.getTagName(element) === neTagName &&
	                this.treeAdapter.getNamespaceURI(element) === neNamespaceURI) {
	                const elementAttrs = this.treeAdapter.getAttrList(element);
	                if (elementAttrs.length === neAttrsLength) {
	                    candidates.push({ idx: i, attrs: elementAttrs });
	                }
	            }
	        }
	        return candidates;
	    }
	    _ensureNoahArkCondition(newElement) {
	        if (this.entries.length < NOAH_ARK_CAPACITY)
	            return;
	        const neAttrs = this.treeAdapter.getAttrList(newElement);
	        const candidates = this._getNoahArkConditionCandidates(newElement, neAttrs);
	        if (candidates.length < NOAH_ARK_CAPACITY)
	            return;
	        //NOTE: build attrs map for the new element, so we can perform fast lookups
	        const neAttrsMap = new Map(neAttrs.map((neAttr) => [neAttr.name, neAttr.value]));
	        let validCandidates = 0;
	        //NOTE: remove bottommost candidates, until Noah's Ark condition will not be met
	        for (let i = 0; i < candidates.length; i++) {
	            const candidate = candidates[i];
	            // We know that `candidate.attrs.length === neAttrs.length`
	            if (candidate.attrs.every((cAttr) => neAttrsMap.get(cAttr.name) === cAttr.value)) {
	                validCandidates += 1;
	                if (validCandidates >= NOAH_ARK_CAPACITY) {
	                    this.entries.splice(candidate.idx, 1);
	                }
	            }
	        }
	    }
	    //Mutations
	    insertMarker() {
	        this.entries.unshift(MARKER);
	    }
	    pushElement(element, token) {
	        this._ensureNoahArkCondition(element);
	        this.entries.unshift({
	            type: EntryType.Element,
	            element,
	            token,
	        });
	    }
	    insertElementAfterBookmark(element, token) {
	        const bookmarkIdx = this.entries.indexOf(this.bookmark);
	        this.entries.splice(bookmarkIdx, 0, {
	            type: EntryType.Element,
	            element,
	            token,
	        });
	    }
	    removeEntry(entry) {
	        const entryIndex = this.entries.indexOf(entry);
	        if (entryIndex >= 0) {
	            this.entries.splice(entryIndex, 1);
	        }
	    }
	    clearToLastMarker() {
	        const markerIdx = this.entries.indexOf(MARKER);
	        if (markerIdx >= 0) {
	            this.entries.splice(0, markerIdx + 1);
	        }
	        else {
	            this.entries.length = 0;
	        }
	    }
	    //Search
	    getElementEntryInScopeWithTagName(tagName) {
	        const entry = this.entries.find((entry) => entry.type === EntryType.Marker || this.treeAdapter.getTagName(entry.element) === tagName);
	        return entry && entry.type === EntryType.Element ? entry : null;
	    }
	    getElementEntry(element) {
	        return this.entries.find((entry) => entry.type === EntryType.Element && entry.element === element);
	    }
	}
	exports.FormattingElementList = FormattingElementList;
	
} (formattingElementList));

var _default = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.defaultTreeAdapter = exports.NodeType = void 0;
	const html_js_1 = html;
	var NodeType;
	(function (NodeType) {
	    NodeType["Document"] = "#document";
	    NodeType["DocumentFragment"] = "#document-fragment";
	    NodeType["Comment"] = "#comment";
	    NodeType["Text"] = "#text";
	    NodeType["DocumentType"] = "#documentType";
	})(NodeType = exports.NodeType || (exports.NodeType = {}));
	function createTextNode(value) {
	    return {
	        nodeName: NodeType.Text,
	        value,
	        parentNode: null,
	    };
	}
	exports.defaultTreeAdapter = {
	    //Node construction
	    createDocument() {
	        return {
	            nodeName: NodeType.Document,
	            mode: html_js_1.DOCUMENT_MODE.NO_QUIRKS,
	            childNodes: [],
	        };
	    },
	    createDocumentFragment() {
	        return {
	            nodeName: NodeType.DocumentFragment,
	            childNodes: [],
	        };
	    },
	    createElement(tagName, namespaceURI, attrs) {
	        return {
	            nodeName: tagName,
	            tagName,
	            attrs,
	            namespaceURI,
	            childNodes: [],
	            parentNode: null,
	        };
	    },
	    createCommentNode(data) {
	        return {
	            nodeName: NodeType.Comment,
	            data,
	            parentNode: null,
	        };
	    },
	    //Tree mutation
	    appendChild(parentNode, newNode) {
	        parentNode.childNodes.push(newNode);
	        newNode.parentNode = parentNode;
	    },
	    insertBefore(parentNode, newNode, referenceNode) {
	        const insertionIdx = parentNode.childNodes.indexOf(referenceNode);
	        parentNode.childNodes.splice(insertionIdx, 0, newNode);
	        newNode.parentNode = parentNode;
	    },
	    setTemplateContent(templateElement, contentElement) {
	        templateElement.content = contentElement;
	    },
	    getTemplateContent(templateElement) {
	        return templateElement.content;
	    },
	    setDocumentType(document, name, publicId, systemId) {
	        const doctypeNode = document.childNodes.find((node) => node.nodeName === NodeType.DocumentType);
	        if (doctypeNode) {
	            doctypeNode.name = name;
	            doctypeNode.publicId = publicId;
	            doctypeNode.systemId = systemId;
	        }
	        else {
	            const node = {
	                nodeName: NodeType.DocumentType,
	                name,
	                publicId,
	                systemId,
	                parentNode: null,
	            };
	            exports.defaultTreeAdapter.appendChild(document, node);
	        }
	    },
	    setDocumentMode(document, mode) {
	        document.mode = mode;
	    },
	    getDocumentMode(document) {
	        return document.mode;
	    },
	    detachNode(node) {
	        if (node.parentNode) {
	            const idx = node.parentNode.childNodes.indexOf(node);
	            node.parentNode.childNodes.splice(idx, 1);
	            node.parentNode = null;
	        }
	    },
	    insertText(parentNode, text) {
	        if (parentNode.childNodes.length > 0) {
	            const prevNode = parentNode.childNodes[parentNode.childNodes.length - 1];
	            if (exports.defaultTreeAdapter.isTextNode(prevNode)) {
	                prevNode.value += text;
	                return;
	            }
	        }
	        exports.defaultTreeAdapter.appendChild(parentNode, createTextNode(text));
	    },
	    insertTextBefore(parentNode, text, referenceNode) {
	        const prevNode = parentNode.childNodes[parentNode.childNodes.indexOf(referenceNode) - 1];
	        if (prevNode && exports.defaultTreeAdapter.isTextNode(prevNode)) {
	            prevNode.value += text;
	        }
	        else {
	            exports.defaultTreeAdapter.insertBefore(parentNode, createTextNode(text), referenceNode);
	        }
	    },
	    adoptAttributes(recipient, attrs) {
	        const recipientAttrsMap = new Set(recipient.attrs.map((attr) => attr.name));
	        for (let j = 0; j < attrs.length; j++) {
	            if (!recipientAttrsMap.has(attrs[j].name)) {
	                recipient.attrs.push(attrs[j]);
	            }
	        }
	    },
	    //Tree traversing
	    getFirstChild(node) {
	        return node.childNodes[0];
	    },
	    getChildNodes(node) {
	        return node.childNodes;
	    },
	    getParentNode(node) {
	        return node.parentNode;
	    },
	    getAttrList(element) {
	        return element.attrs;
	    },
	    //Node data
	    getTagName(element) {
	        return element.tagName;
	    },
	    getNamespaceURI(element) {
	        return element.namespaceURI;
	    },
	    getTextNodeContent(textNode) {
	        return textNode.value;
	    },
	    getCommentNodeContent(commentNode) {
	        return commentNode.data;
	    },
	    getDocumentTypeNodeName(doctypeNode) {
	        return doctypeNode.name;
	    },
	    getDocumentTypeNodePublicId(doctypeNode) {
	        return doctypeNode.publicId;
	    },
	    getDocumentTypeNodeSystemId(doctypeNode) {
	        return doctypeNode.systemId;
	    },
	    //Node types
	    isTextNode(node) {
	        return node.nodeName === '#text';
	    },
	    isCommentNode(node) {
	        return node.nodeName === '#comment';
	    },
	    isDocumentTypeNode(node) {
	        return node.nodeName === NodeType.DocumentType;
	    },
	    isElementNode(node) {
	        return Object.prototype.hasOwnProperty.call(node, 'tagName');
	    },
	    // Source code location
	    setNodeSourceCodeLocation(node, location) {
	        node.sourceCodeLocation = location;
	    },
	    getNodeSourceCodeLocation(node) {
	        return node.sourceCodeLocation;
	    },
	    updateNodeSourceCodeLocation(node, endLocation) {
	        node.sourceCodeLocation = Object.assign(Object.assign({}, node.sourceCodeLocation), endLocation);
	    },
	};
	
} (_default));

var doctype$1 = {};

Object.defineProperty(doctype$1, "__esModule", { value: true });
doctype$1.getDocumentMode = doctype$1.isConforming = void 0;
const html_js_1$2 = html;
//Const
const VALID_DOCTYPE_NAME = 'html';
const VALID_SYSTEM_ID = 'about:legacy-compat';
const QUIRKS_MODE_SYSTEM_ID = 'http://www.ibm.com/data/dtd/v11/ibmxhtml1-transitional.dtd';
const QUIRKS_MODE_PUBLIC_ID_PREFIXES = [
    '+//silmaril//dtd html pro v0r11 19970101//',
    '-//as//dtd html 3.0 aswedit + extensions//',
    '-//advasoft ltd//dtd html 3.0 aswedit + extensions//',
    '-//ietf//dtd html 2.0 level 1//',
    '-//ietf//dtd html 2.0 level 2//',
    '-//ietf//dtd html 2.0 strict level 1//',
    '-//ietf//dtd html 2.0 strict level 2//',
    '-//ietf//dtd html 2.0 strict//',
    '-//ietf//dtd html 2.0//',
    '-//ietf//dtd html 2.1e//',
    '-//ietf//dtd html 3.0//',
    '-//ietf//dtd html 3.2 final//',
    '-//ietf//dtd html 3.2//',
    '-//ietf//dtd html 3//',
    '-//ietf//dtd html level 0//',
    '-//ietf//dtd html level 1//',
    '-//ietf//dtd html level 2//',
    '-//ietf//dtd html level 3//',
    '-//ietf//dtd html strict level 0//',
    '-//ietf//dtd html strict level 1//',
    '-//ietf//dtd html strict level 2//',
    '-//ietf//dtd html strict level 3//',
    '-//ietf//dtd html strict//',
    '-//ietf//dtd html//',
    '-//metrius//dtd metrius presentational//',
    '-//microsoft//dtd internet explorer 2.0 html strict//',
    '-//microsoft//dtd internet explorer 2.0 html//',
    '-//microsoft//dtd internet explorer 2.0 tables//',
    '-//microsoft//dtd internet explorer 3.0 html strict//',
    '-//microsoft//dtd internet explorer 3.0 html//',
    '-//microsoft//dtd internet explorer 3.0 tables//',
    '-//netscape comm. corp.//dtd html//',
    '-//netscape comm. corp.//dtd strict html//',
    "-//o'reilly and associates//dtd html 2.0//",
    "-//o'reilly and associates//dtd html extended 1.0//",
    "-//o'reilly and associates//dtd html extended relaxed 1.0//",
    '-//sq//dtd html 2.0 hotmetal + extensions//',
    '-//softquad software//dtd hotmetal pro 6.0::19990601::extensions to html 4.0//',
    '-//softquad//dtd hotmetal pro 4.0::19971010::extensions to html 4.0//',
    '-//spyglass//dtd html 2.0 extended//',
    '-//sun microsystems corp.//dtd hotjava html//',
    '-//sun microsystems corp.//dtd hotjava strict html//',
    '-//w3c//dtd html 3 1995-03-24//',
    '-//w3c//dtd html 3.2 draft//',
    '-//w3c//dtd html 3.2 final//',
    '-//w3c//dtd html 3.2//',
    '-//w3c//dtd html 3.2s draft//',
    '-//w3c//dtd html 4.0 frameset//',
    '-//w3c//dtd html 4.0 transitional//',
    '-//w3c//dtd html experimental 19960712//',
    '-//w3c//dtd html experimental 970421//',
    '-//w3c//dtd w3 html//',
    '-//w3o//dtd w3 html 3.0//',
    '-//webtechs//dtd mozilla html 2.0//',
    '-//webtechs//dtd mozilla html//',
];
const QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
    ...QUIRKS_MODE_PUBLIC_ID_PREFIXES,
    '-//w3c//dtd html 4.01 frameset//',
    '-//w3c//dtd html 4.01 transitional//',
];
const QUIRKS_MODE_PUBLIC_IDS = new Set([
    '-//w3o//dtd w3 html strict 3.0//en//',
    '-/w3c/dtd html 4.0 transitional/en',
    'html',
]);
const LIMITED_QUIRKS_PUBLIC_ID_PREFIXES = ['-//w3c//dtd xhtml 1.0 frameset//', '-//w3c//dtd xhtml 1.0 transitional//'];
const LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES = [
    ...LIMITED_QUIRKS_PUBLIC_ID_PREFIXES,
    '-//w3c//dtd html 4.01 frameset//',
    '-//w3c//dtd html 4.01 transitional//',
];
//Utils
function hasPrefix(publicId, prefixes) {
    return prefixes.some((prefix) => publicId.startsWith(prefix));
}
//API
function isConforming(token) {
    return (token.name === VALID_DOCTYPE_NAME &&
        token.publicId === null &&
        (token.systemId === null || token.systemId === VALID_SYSTEM_ID));
}
doctype$1.isConforming = isConforming;
function getDocumentMode(token) {
    if (token.name !== VALID_DOCTYPE_NAME) {
        return html_js_1$2.DOCUMENT_MODE.QUIRKS;
    }
    const { systemId } = token;
    if (systemId && systemId.toLowerCase() === QUIRKS_MODE_SYSTEM_ID) {
        return html_js_1$2.DOCUMENT_MODE.QUIRKS;
    }
    let { publicId } = token;
    if (publicId !== null) {
        publicId = publicId.toLowerCase();
        if (QUIRKS_MODE_PUBLIC_IDS.has(publicId)) {
            return html_js_1$2.DOCUMENT_MODE.QUIRKS;
        }
        let prefixes = systemId === null ? QUIRKS_MODE_NO_SYSTEM_ID_PUBLIC_ID_PREFIXES : QUIRKS_MODE_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
            return html_js_1$2.DOCUMENT_MODE.QUIRKS;
        }
        prefixes =
            systemId === null ? LIMITED_QUIRKS_PUBLIC_ID_PREFIXES : LIMITED_QUIRKS_WITH_SYSTEM_ID_PUBLIC_ID_PREFIXES;
        if (hasPrefix(publicId, prefixes)) {
            return html_js_1$2.DOCUMENT_MODE.LIMITED_QUIRKS;
        }
    }
    return html_js_1$2.DOCUMENT_MODE.NO_QUIRKS;
}
doctype$1.getDocumentMode = getDocumentMode;

var foreignContent$1 = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.isIntegrationPoint = exports.adjustTokenSVGTagName = exports.adjustTokenXMLAttrs = exports.adjustTokenSVGAttrs = exports.adjustTokenMathMLAttrs = exports.causesExit = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = void 0;
	const html_js_1 = html;
	//MIME types
	const MIME_TYPES = {
	    TEXT_HTML: 'text/html',
	    APPLICATION_XML: 'application/xhtml+xml',
	};
	//Attributes
	const DEFINITION_URL_ATTR = 'definitionurl';
	const ADJUSTED_DEFINITION_URL_ATTR = 'definitionURL';
	const SVG_ATTRS_ADJUSTMENT_MAP = new Map([
	    'attributeName',
	    'attributeType',
	    'baseFrequency',
	    'baseProfile',
	    'calcMode',
	    'clipPathUnits',
	    'diffuseConstant',
	    'edgeMode',
	    'filterUnits',
	    'glyphRef',
	    'gradientTransform',
	    'gradientUnits',
	    'kernelMatrix',
	    'kernelUnitLength',
	    'keyPoints',
	    'keySplines',
	    'keyTimes',
	    'lengthAdjust',
	    'limitingConeAngle',
	    'markerHeight',
	    'markerUnits',
	    'markerWidth',
	    'maskContentUnits',
	    'maskUnits',
	    'numOctaves',
	    'pathLength',
	    'patternContentUnits',
	    'patternTransform',
	    'patternUnits',
	    'pointsAtX',
	    'pointsAtY',
	    'pointsAtZ',
	    'preserveAlpha',
	    'preserveAspectRatio',
	    'primitiveUnits',
	    'refX',
	    'refY',
	    'repeatCount',
	    'repeatDur',
	    'requiredExtensions',
	    'requiredFeatures',
	    'specularConstant',
	    'specularExponent',
	    'spreadMethod',
	    'startOffset',
	    'stdDeviation',
	    'stitchTiles',
	    'surfaceScale',
	    'systemLanguage',
	    'tableValues',
	    'targetX',
	    'targetY',
	    'textLength',
	    'viewBox',
	    'viewTarget',
	    'xChannelSelector',
	    'yChannelSelector',
	    'zoomAndPan',
	].map((attr) => [attr.toLowerCase(), attr]));
	const XML_ATTRS_ADJUSTMENT_MAP = new Map([
	    ['xlink:actuate', { prefix: 'xlink', name: 'actuate', namespace: html_js_1.NS.XLINK }],
	    ['xlink:arcrole', { prefix: 'xlink', name: 'arcrole', namespace: html_js_1.NS.XLINK }],
	    ['xlink:href', { prefix: 'xlink', name: 'href', namespace: html_js_1.NS.XLINK }],
	    ['xlink:role', { prefix: 'xlink', name: 'role', namespace: html_js_1.NS.XLINK }],
	    ['xlink:show', { prefix: 'xlink', name: 'show', namespace: html_js_1.NS.XLINK }],
	    ['xlink:title', { prefix: 'xlink', name: 'title', namespace: html_js_1.NS.XLINK }],
	    ['xlink:type', { prefix: 'xlink', name: 'type', namespace: html_js_1.NS.XLINK }],
	    ['xml:base', { prefix: 'xml', name: 'base', namespace: html_js_1.NS.XML }],
	    ['xml:lang', { prefix: 'xml', name: 'lang', namespace: html_js_1.NS.XML }],
	    ['xml:space', { prefix: 'xml', name: 'space', namespace: html_js_1.NS.XML }],
	    ['xmlns', { prefix: '', name: 'xmlns', namespace: html_js_1.NS.XMLNS }],
	    ['xmlns:xlink', { prefix: 'xmlns', name: 'xlink', namespace: html_js_1.NS.XMLNS }],
	]);
	//SVG tag names adjustment map
	exports.SVG_TAG_NAMES_ADJUSTMENT_MAP = new Map([
	    'altGlyph',
	    'altGlyphDef',
	    'altGlyphItem',
	    'animateColor',
	    'animateMotion',
	    'animateTransform',
	    'clipPath',
	    'feBlend',
	    'feColorMatrix',
	    'feComponentTransfer',
	    'feComposite',
	    'feConvolveMatrix',
	    'feDiffuseLighting',
	    'feDisplacementMap',
	    'feDistantLight',
	    'feFlood',
	    'feFuncA',
	    'feFuncB',
	    'feFuncG',
	    'feFuncR',
	    'feGaussianBlur',
	    'feImage',
	    'feMerge',
	    'feMergeNode',
	    'feMorphology',
	    'feOffset',
	    'fePointLight',
	    'feSpecularLighting',
	    'feSpotLight',
	    'feTile',
	    'feTurbulence',
	    'foreignObject',
	    'glyphRef',
	    'linearGradient',
	    'radialGradient',
	    'textPath',
	].map((tn) => [tn.toLowerCase(), tn]));
	//Tags that causes exit from foreign content
	const EXITS_FOREIGN_CONTENT = new Set([
	    html_js_1.TAG_ID.B,
	    html_js_1.TAG_ID.BIG,
	    html_js_1.TAG_ID.BLOCKQUOTE,
	    html_js_1.TAG_ID.BODY,
	    html_js_1.TAG_ID.BR,
	    html_js_1.TAG_ID.CENTER,
	    html_js_1.TAG_ID.CODE,
	    html_js_1.TAG_ID.DD,
	    html_js_1.TAG_ID.DIV,
	    html_js_1.TAG_ID.DL,
	    html_js_1.TAG_ID.DT,
	    html_js_1.TAG_ID.EM,
	    html_js_1.TAG_ID.EMBED,
	    html_js_1.TAG_ID.H1,
	    html_js_1.TAG_ID.H2,
	    html_js_1.TAG_ID.H3,
	    html_js_1.TAG_ID.H4,
	    html_js_1.TAG_ID.H5,
	    html_js_1.TAG_ID.H6,
	    html_js_1.TAG_ID.HEAD,
	    html_js_1.TAG_ID.HR,
	    html_js_1.TAG_ID.I,
	    html_js_1.TAG_ID.IMG,
	    html_js_1.TAG_ID.LI,
	    html_js_1.TAG_ID.LISTING,
	    html_js_1.TAG_ID.MENU,
	    html_js_1.TAG_ID.META,
	    html_js_1.TAG_ID.NOBR,
	    html_js_1.TAG_ID.OL,
	    html_js_1.TAG_ID.P,
	    html_js_1.TAG_ID.PRE,
	    html_js_1.TAG_ID.RUBY,
	    html_js_1.TAG_ID.S,
	    html_js_1.TAG_ID.SMALL,
	    html_js_1.TAG_ID.SPAN,
	    html_js_1.TAG_ID.STRONG,
	    html_js_1.TAG_ID.STRIKE,
	    html_js_1.TAG_ID.SUB,
	    html_js_1.TAG_ID.SUP,
	    html_js_1.TAG_ID.TABLE,
	    html_js_1.TAG_ID.TT,
	    html_js_1.TAG_ID.U,
	    html_js_1.TAG_ID.UL,
	    html_js_1.TAG_ID.VAR,
	]);
	//Check exit from foreign content
	function causesExit(startTagToken) {
	    const tn = startTagToken.tagID;
	    const isFontWithAttrs = tn === html_js_1.TAG_ID.FONT &&
	        startTagToken.attrs.some(({ name }) => name === html_js_1.ATTRS.COLOR || name === html_js_1.ATTRS.SIZE || name === html_js_1.ATTRS.FACE);
	    return isFontWithAttrs || EXITS_FOREIGN_CONTENT.has(tn);
	}
	exports.causesExit = causesExit;
	//Token adjustments
	function adjustTokenMathMLAttrs(token) {
	    for (let i = 0; i < token.attrs.length; i++) {
	        if (token.attrs[i].name === DEFINITION_URL_ATTR) {
	            token.attrs[i].name = ADJUSTED_DEFINITION_URL_ATTR;
	            break;
	        }
	    }
	}
	exports.adjustTokenMathMLAttrs = adjustTokenMathMLAttrs;
	function adjustTokenSVGAttrs(token) {
	    for (let i = 0; i < token.attrs.length; i++) {
	        const adjustedAttrName = SVG_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
	        if (adjustedAttrName != null) {
	            token.attrs[i].name = adjustedAttrName;
	        }
	    }
	}
	exports.adjustTokenSVGAttrs = adjustTokenSVGAttrs;
	function adjustTokenXMLAttrs(token) {
	    for (let i = 0; i < token.attrs.length; i++) {
	        const adjustedAttrEntry = XML_ATTRS_ADJUSTMENT_MAP.get(token.attrs[i].name);
	        if (adjustedAttrEntry) {
	            token.attrs[i].prefix = adjustedAttrEntry.prefix;
	            token.attrs[i].name = adjustedAttrEntry.name;
	            token.attrs[i].namespace = adjustedAttrEntry.namespace;
	        }
	    }
	}
	exports.adjustTokenXMLAttrs = adjustTokenXMLAttrs;
	function adjustTokenSVGTagName(token) {
	    const adjustedTagName = exports.SVG_TAG_NAMES_ADJUSTMENT_MAP.get(token.tagName);
	    if (adjustedTagName != null) {
	        token.tagName = adjustedTagName;
	        token.tagID = (0, html_js_1.getTagID)(token.tagName);
	    }
	}
	exports.adjustTokenSVGTagName = adjustTokenSVGTagName;
	//Integration points
	function isMathMLTextIntegrationPoint(tn, ns) {
	    return ns === html_js_1.NS.MATHML && (tn === html_js_1.TAG_ID.MI || tn === html_js_1.TAG_ID.MO || tn === html_js_1.TAG_ID.MN || tn === html_js_1.TAG_ID.MS || tn === html_js_1.TAG_ID.MTEXT);
	}
	function isHtmlIntegrationPoint(tn, ns, attrs) {
	    if (ns === html_js_1.NS.MATHML && tn === html_js_1.TAG_ID.ANNOTATION_XML) {
	        for (let i = 0; i < attrs.length; i++) {
	            if (attrs[i].name === html_js_1.ATTRS.ENCODING) {
	                const value = attrs[i].value.toLowerCase();
	                return value === MIME_TYPES.TEXT_HTML || value === MIME_TYPES.APPLICATION_XML;
	            }
	        }
	    }
	    return ns === html_js_1.NS.SVG && (tn === html_js_1.TAG_ID.FOREIGN_OBJECT || tn === html_js_1.TAG_ID.DESC || tn === html_js_1.TAG_ID.TITLE);
	}
	function isIntegrationPoint(tn, ns, attrs, foreignNS) {
	    return (((!foreignNS || foreignNS === html_js_1.NS.HTML) && isHtmlIntegrationPoint(tn, ns, attrs)) ||
	        ((!foreignNS || foreignNS === html_js_1.NS.MATHML) && isMathMLTextIntegrationPoint(tn, ns)));
	}
	exports.isIntegrationPoint = isIntegrationPoint;
	
} (foreignContent$1));

Object.defineProperty(parser, "__esModule", { value: true });
parser.Parser = void 0;
const index_js_1 = tokenizer;
const open_element_stack_js_1 = openElementStack;
const formatting_element_list_js_1 = formattingElementList;
const default_js_1$1 = _default;
const doctype = doctype$1;
const foreignContent = foreignContent$1;
const error_codes_js_1 = errorCodes;
const unicode = unicode$1;
const html_js_1$1 = html;
const token_js_1 = token;
//Misc constants
const HIDDEN_INPUT_TYPE = 'hidden';
//Adoption agency loops iteration count
const AA_OUTER_LOOP_ITER = 8;
const AA_INNER_LOOP_ITER = 3;
//Insertion modes
var InsertionMode;
(function (InsertionMode) {
    InsertionMode[InsertionMode["INITIAL"] = 0] = "INITIAL";
    InsertionMode[InsertionMode["BEFORE_HTML"] = 1] = "BEFORE_HTML";
    InsertionMode[InsertionMode["BEFORE_HEAD"] = 2] = "BEFORE_HEAD";
    InsertionMode[InsertionMode["IN_HEAD"] = 3] = "IN_HEAD";
    InsertionMode[InsertionMode["IN_HEAD_NO_SCRIPT"] = 4] = "IN_HEAD_NO_SCRIPT";
    InsertionMode[InsertionMode["AFTER_HEAD"] = 5] = "AFTER_HEAD";
    InsertionMode[InsertionMode["IN_BODY"] = 6] = "IN_BODY";
    InsertionMode[InsertionMode["TEXT"] = 7] = "TEXT";
    InsertionMode[InsertionMode["IN_TABLE"] = 8] = "IN_TABLE";
    InsertionMode[InsertionMode["IN_TABLE_TEXT"] = 9] = "IN_TABLE_TEXT";
    InsertionMode[InsertionMode["IN_CAPTION"] = 10] = "IN_CAPTION";
    InsertionMode[InsertionMode["IN_COLUMN_GROUP"] = 11] = "IN_COLUMN_GROUP";
    InsertionMode[InsertionMode["IN_TABLE_BODY"] = 12] = "IN_TABLE_BODY";
    InsertionMode[InsertionMode["IN_ROW"] = 13] = "IN_ROW";
    InsertionMode[InsertionMode["IN_CELL"] = 14] = "IN_CELL";
    InsertionMode[InsertionMode["IN_SELECT"] = 15] = "IN_SELECT";
    InsertionMode[InsertionMode["IN_SELECT_IN_TABLE"] = 16] = "IN_SELECT_IN_TABLE";
    InsertionMode[InsertionMode["IN_TEMPLATE"] = 17] = "IN_TEMPLATE";
    InsertionMode[InsertionMode["AFTER_BODY"] = 18] = "AFTER_BODY";
    InsertionMode[InsertionMode["IN_FRAMESET"] = 19] = "IN_FRAMESET";
    InsertionMode[InsertionMode["AFTER_FRAMESET"] = 20] = "AFTER_FRAMESET";
    InsertionMode[InsertionMode["AFTER_AFTER_BODY"] = 21] = "AFTER_AFTER_BODY";
    InsertionMode[InsertionMode["AFTER_AFTER_FRAMESET"] = 22] = "AFTER_AFTER_FRAMESET";
})(InsertionMode || (InsertionMode = {}));
const BASE_LOC = {
    startLine: -1,
    startCol: -1,
    startOffset: -1,
    endLine: -1,
    endCol: -1,
    endOffset: -1,
};
const TABLE_STRUCTURE_TAGS = new Set([html_js_1$1.TAG_ID.TABLE, html_js_1$1.TAG_ID.TBODY, html_js_1$1.TAG_ID.TFOOT, html_js_1$1.TAG_ID.THEAD, html_js_1$1.TAG_ID.TR]);
const defaultParserOptions = {
    scriptingEnabled: true,
    sourceCodeLocationInfo: false,
    treeAdapter: default_js_1$1.defaultTreeAdapter,
    onParseError: null,
};
//Parser
class Parser$2 {
    constructor(options, document, fragmentContext = null, scriptHandler = null) {
        this.fragmentContext = fragmentContext;
        this.scriptHandler = scriptHandler;
        this.currentToken = null;
        this.stopped = false;
        this.insertionMode = InsertionMode.INITIAL;
        this.originalInsertionMode = InsertionMode.INITIAL;
        this.headElement = null;
        this.formElement = null;
        /** Indicates that the current node is not an element in the HTML namespace */
        this.currentNotInHTML = false;
        /**
         * The template insertion mode stack is maintained from the left.
         * Ie. the topmost element will always have index 0.
         */
        this.tmplInsertionModeStack = [];
        this.pendingCharacterTokens = [];
        this.hasNonWhitespacePendingCharacterToken = false;
        this.framesetOk = true;
        this.skipNextNewLine = false;
        this.fosterParentingEnabled = false;
        this.options = Object.assign(Object.assign({}, defaultParserOptions), options);
        this.treeAdapter = this.options.treeAdapter;
        this.onParseError = this.options.onParseError;
        // Always enable location info if we report parse errors.
        if (this.onParseError) {
            this.options.sourceCodeLocationInfo = true;
        }
        this.document = document !== null && document !== void 0 ? document : this.treeAdapter.createDocument();
        this.tokenizer = new index_js_1.Tokenizer(this.options, this);
        this.activeFormattingElements = new formatting_element_list_js_1.FormattingElementList(this.treeAdapter);
        this.fragmentContextID = fragmentContext ? (0, html_js_1$1.getTagID)(this.treeAdapter.getTagName(fragmentContext)) : html_js_1$1.TAG_ID.UNKNOWN;
        this._setContextModes(fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : this.document, this.fragmentContextID);
        this.openElements = new open_element_stack_js_1.OpenElementStack(this.document, this.treeAdapter, this);
    }
    // API
    static parse(html, options) {
        const parser = new this(options);
        parser.tokenizer.write(html, true);
        return parser.document;
    }
    static getFragmentParser(fragmentContext, options) {
        const opts = Object.assign(Object.assign({}, defaultParserOptions), options);
        //NOTE: use a <template> element as the fragment context if no context element was provided,
        //so we will parse in a "forgiving" manner
        fragmentContext !== null && fragmentContext !== void 0 ? fragmentContext : (fragmentContext = opts.treeAdapter.createElement(html_js_1$1.TAG_NAMES.TEMPLATE, html_js_1$1.NS.HTML, []));
        //NOTE: create a fake element which will be used as the `document` for fragment parsing.
        //This is important for jsdom, where a new `document` cannot be created. This led to
        //fragment parsing messing with the main `document`.
        const documentMock = opts.treeAdapter.createElement('documentmock', html_js_1$1.NS.HTML, []);
        const parser = new this(opts, documentMock, fragmentContext);
        if (parser.fragmentContextID === html_js_1$1.TAG_ID.TEMPLATE) {
            parser.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
        }
        parser._initTokenizerForFragmentParsing();
        parser._insertFakeRootElement();
        parser._resetInsertionMode();
        parser._findFormInFragmentContext();
        return parser;
    }
    getFragment() {
        const rootElement = this.treeAdapter.getFirstChild(this.document);
        const fragment = this.treeAdapter.createDocumentFragment();
        this._adoptNodes(rootElement, fragment);
        return fragment;
    }
    //Errors
    _err(token, code, beforeToken) {
        var _a;
        if (!this.onParseError)
            return;
        const loc = (_a = token.location) !== null && _a !== void 0 ? _a : BASE_LOC;
        const err = {
            code,
            startLine: loc.startLine,
            startCol: loc.startCol,
            startOffset: loc.startOffset,
            endLine: beforeToken ? loc.startLine : loc.endLine,
            endCol: beforeToken ? loc.startCol : loc.endCol,
            endOffset: beforeToken ? loc.startOffset : loc.endOffset,
        };
        this.onParseError(err);
    }
    //Stack events
    onItemPush(node, tid, isTop) {
        var _a, _b;
        (_b = (_a = this.treeAdapter).onItemPush) === null || _b === void 0 ? void 0 : _b.call(_a, node);
        if (isTop && this.openElements.stackTop > 0)
            this._setContextModes(node, tid);
    }
    onItemPop(node, isTop) {
        var _a, _b;
        if (this.options.sourceCodeLocationInfo) {
            this._setEndLocation(node, this.currentToken);
        }
        (_b = (_a = this.treeAdapter).onItemPop) === null || _b === void 0 ? void 0 : _b.call(_a, node, this.openElements.current);
        if (isTop) {
            let current;
            let currentTagId;
            if (this.openElements.stackTop === 0 && this.fragmentContext) {
                current = this.fragmentContext;
                currentTagId = this.fragmentContextID;
            }
            else {
                ({ current, currentTagId } = this.openElements);
            }
            this._setContextModes(current, currentTagId);
        }
    }
    _setContextModes(current, tid) {
        const isHTML = current === this.document || this.treeAdapter.getNamespaceURI(current) === html_js_1$1.NS.HTML;
        this.currentNotInHTML = !isHTML;
        this.tokenizer.inForeignNode = !isHTML && !this._isIntegrationPoint(tid, current);
    }
    _switchToTextParsing(currentToken, nextTokenizerState) {
        this._insertElement(currentToken, html_js_1$1.NS.HTML);
        this.tokenizer.state = nextTokenizerState;
        this.originalInsertionMode = this.insertionMode;
        this.insertionMode = InsertionMode.TEXT;
    }
    switchToPlaintextParsing() {
        this.insertionMode = InsertionMode.TEXT;
        this.originalInsertionMode = InsertionMode.IN_BODY;
        this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
    }
    //Fragment parsing
    _getAdjustedCurrentElement() {
        return this.openElements.stackTop === 0 && this.fragmentContext
            ? this.fragmentContext
            : this.openElements.current;
    }
    _findFormInFragmentContext() {
        let node = this.fragmentContext;
        while (node) {
            if (this.treeAdapter.getTagName(node) === html_js_1$1.TAG_NAMES.FORM) {
                this.formElement = node;
                break;
            }
            node = this.treeAdapter.getParentNode(node);
        }
    }
    _initTokenizerForFragmentParsing() {
        if (!this.fragmentContext || this.treeAdapter.getNamespaceURI(this.fragmentContext) !== html_js_1$1.NS.HTML) {
            return;
        }
        switch (this.fragmentContextID) {
            case html_js_1$1.TAG_ID.TITLE:
            case html_js_1$1.TAG_ID.TEXTAREA: {
                this.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
                break;
            }
            case html_js_1$1.TAG_ID.STYLE:
            case html_js_1$1.TAG_ID.XMP:
            case html_js_1$1.TAG_ID.IFRAME:
            case html_js_1$1.TAG_ID.NOEMBED:
            case html_js_1$1.TAG_ID.NOFRAMES:
            case html_js_1$1.TAG_ID.NOSCRIPT: {
                this.tokenizer.state = index_js_1.TokenizerMode.RAWTEXT;
                break;
            }
            case html_js_1$1.TAG_ID.SCRIPT: {
                this.tokenizer.state = index_js_1.TokenizerMode.SCRIPT_DATA;
                break;
            }
            case html_js_1$1.TAG_ID.PLAINTEXT: {
                this.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
                break;
            }
            // Do nothing
        }
    }
    //Tree mutation
    _setDocumentType(token) {
        const name = token.name || '';
        const publicId = token.publicId || '';
        const systemId = token.systemId || '';
        this.treeAdapter.setDocumentType(this.document, name, publicId, systemId);
        if (token.location) {
            const documentChildren = this.treeAdapter.getChildNodes(this.document);
            const docTypeNode = documentChildren.find((node) => this.treeAdapter.isDocumentTypeNode(node));
            if (docTypeNode) {
                this.treeAdapter.setNodeSourceCodeLocation(docTypeNode, token.location);
            }
        }
    }
    _attachElementToTree(element, location) {
        if (this.options.sourceCodeLocationInfo) {
            const loc = location && Object.assign(Object.assign({}, location), { startTag: location });
            this.treeAdapter.setNodeSourceCodeLocation(element, loc);
        }
        if (this._shouldFosterParentOnInsertion()) {
            this._fosterParentElement(element);
        }
        else {
            const parent = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.appendChild(parent, element);
        }
    }
    _appendElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
    }
    _insertElement(token, namespaceURI) {
        const element = this.treeAdapter.createElement(token.tagName, namespaceURI, token.attrs);
        this._attachElementToTree(element, token.location);
        this.openElements.push(element, token.tagID);
    }
    _insertFakeElement(tagName, tagID) {
        const element = this.treeAdapter.createElement(tagName, html_js_1$1.NS.HTML, []);
        this._attachElementToTree(element, null);
        this.openElements.push(element, tagID);
    }
    _insertTemplate(token) {
        const tmpl = this.treeAdapter.createElement(token.tagName, html_js_1$1.NS.HTML, token.attrs);
        const content = this.treeAdapter.createDocumentFragment();
        this.treeAdapter.setTemplateContent(tmpl, content);
        this._attachElementToTree(tmpl, token.location);
        this.openElements.push(tmpl, token.tagID);
        if (this.options.sourceCodeLocationInfo)
            this.treeAdapter.setNodeSourceCodeLocation(content, null);
    }
    _insertFakeRootElement() {
        const element = this.treeAdapter.createElement(html_js_1$1.TAG_NAMES.HTML, html_js_1$1.NS.HTML, []);
        if (this.options.sourceCodeLocationInfo)
            this.treeAdapter.setNodeSourceCodeLocation(element, null);
        this.treeAdapter.appendChild(this.openElements.current, element);
        this.openElements.push(element, html_js_1$1.TAG_ID.HTML);
    }
    _appendCommentNode(token, parent) {
        const commentNode = this.treeAdapter.createCommentNode(token.data);
        this.treeAdapter.appendChild(parent, commentNode);
        if (this.options.sourceCodeLocationInfo) {
            this.treeAdapter.setNodeSourceCodeLocation(commentNode, token.location);
        }
    }
    _insertCharacters(token) {
        let parent;
        let beforeElement;
        if (this._shouldFosterParentOnInsertion()) {
            ({ parent, beforeElement } = this._findFosterParentingLocation());
            if (beforeElement) {
                this.treeAdapter.insertTextBefore(parent, token.chars, beforeElement);
            }
            else {
                this.treeAdapter.insertText(parent, token.chars);
            }
        }
        else {
            parent = this.openElements.currentTmplContentOrNode;
            this.treeAdapter.insertText(parent, token.chars);
        }
        if (!token.location)
            return;
        const siblings = this.treeAdapter.getChildNodes(parent);
        const textNodeIdx = beforeElement ? siblings.lastIndexOf(beforeElement) : siblings.length;
        const textNode = siblings[textNodeIdx - 1];
        //NOTE: if we have a location assigned by another token, then just update the end position
        const tnLoc = this.treeAdapter.getNodeSourceCodeLocation(textNode);
        if (tnLoc) {
            const { endLine, endCol, endOffset } = token.location;
            this.treeAdapter.updateNodeSourceCodeLocation(textNode, { endLine, endCol, endOffset });
        }
        else if (this.options.sourceCodeLocationInfo) {
            this.treeAdapter.setNodeSourceCodeLocation(textNode, token.location);
        }
    }
    _adoptNodes(donor, recipient) {
        for (let child = this.treeAdapter.getFirstChild(donor); child; child = this.treeAdapter.getFirstChild(donor)) {
            this.treeAdapter.detachNode(child);
            this.treeAdapter.appendChild(recipient, child);
        }
    }
    _setEndLocation(element, closingToken) {
        if (this.treeAdapter.getNodeSourceCodeLocation(element) && closingToken.location) {
            const ctLoc = closingToken.location;
            const tn = this.treeAdapter.getTagName(element);
            const endLoc = 
            // NOTE: For cases like <p> <p> </p> - First 'p' closes without a closing
            // tag and for cases like <td> <p> </td> - 'p' closes without a closing tag.
            closingToken.type === token_js_1.TokenType.END_TAG && tn === closingToken.tagName
                ? {
                    endTag: Object.assign({}, ctLoc),
                    endLine: ctLoc.endLine,
                    endCol: ctLoc.endCol,
                    endOffset: ctLoc.endOffset,
                }
                : {
                    endLine: ctLoc.startLine,
                    endCol: ctLoc.startCol,
                    endOffset: ctLoc.startOffset,
                };
            this.treeAdapter.updateNodeSourceCodeLocation(element, endLoc);
        }
    }
    //Token processing
    shouldProcessStartTagTokenInForeignContent(token) {
        // Check that neither current === document, or ns === NS.HTML
        if (!this.currentNotInHTML)
            return false;
        let current;
        let currentTagId;
        if (this.openElements.stackTop === 0 && this.fragmentContext) {
            current = this.fragmentContext;
            currentTagId = this.fragmentContextID;
        }
        else {
            ({ current, currentTagId } = this.openElements);
        }
        if (token.tagID === html_js_1$1.TAG_ID.SVG &&
            this.treeAdapter.getTagName(current) === html_js_1$1.TAG_NAMES.ANNOTATION_XML &&
            this.treeAdapter.getNamespaceURI(current) === html_js_1$1.NS.MATHML) {
            return false;
        }
        return (
        // Check that `current` is not an integration point for HTML or MathML elements.
        this.tokenizer.inForeignNode ||
            // If it _is_ an integration point, then we might have to check that it is not an HTML
            // integration point.
            ((token.tagID === html_js_1$1.TAG_ID.MGLYPH || token.tagID === html_js_1$1.TAG_ID.MALIGNMARK) &&
                !this._isIntegrationPoint(currentTagId, current, html_js_1$1.NS.HTML)));
    }
    _processToken(token) {
        switch (token.type) {
            case token_js_1.TokenType.CHARACTER: {
                this.onCharacter(token);
                break;
            }
            case token_js_1.TokenType.NULL_CHARACTER: {
                this.onNullCharacter(token);
                break;
            }
            case token_js_1.TokenType.COMMENT: {
                this.onComment(token);
                break;
            }
            case token_js_1.TokenType.DOCTYPE: {
                this.onDoctype(token);
                break;
            }
            case token_js_1.TokenType.START_TAG: {
                this._processStartTag(token);
                break;
            }
            case token_js_1.TokenType.END_TAG: {
                this.onEndTag(token);
                break;
            }
            case token_js_1.TokenType.EOF: {
                this.onEof(token);
                break;
            }
            case token_js_1.TokenType.WHITESPACE_CHARACTER: {
                this.onWhitespaceCharacter(token);
                break;
            }
        }
    }
    //Integration points
    _isIntegrationPoint(tid, element, foreignNS) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        const attrs = this.treeAdapter.getAttrList(element);
        return foreignContent.isIntegrationPoint(tid, ns, attrs, foreignNS);
    }
    //Active formatting elements reconstruction
    _reconstructActiveFormattingElements() {
        const listLength = this.activeFormattingElements.entries.length;
        if (listLength) {
            const endIndex = this.activeFormattingElements.entries.findIndex((entry) => entry.type === formatting_element_list_js_1.EntryType.Marker || this.openElements.contains(entry.element));
            const unopenIdx = endIndex < 0 ? listLength - 1 : endIndex - 1;
            for (let i = unopenIdx; i >= 0; i--) {
                const entry = this.activeFormattingElements.entries[i];
                this._insertElement(entry.token, this.treeAdapter.getNamespaceURI(entry.element));
                entry.element = this.openElements.current;
            }
        }
    }
    //Close elements
    _closeTableCell() {
        this.openElements.generateImpliedEndTags();
        this.openElements.popUntilTableCellPopped();
        this.activeFormattingElements.clearToLastMarker();
        this.insertionMode = InsertionMode.IN_ROW;
    }
    _closePElement() {
        this.openElements.generateImpliedEndTagsWithExclusion(html_js_1$1.TAG_ID.P);
        this.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.P);
    }
    //Insertion modes
    _resetInsertionMode() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
            //Insertion mode reset map
            switch (i === 0 && this.fragmentContext ? this.fragmentContextID : this.openElements.tagIDs[i]) {
                case html_js_1$1.TAG_ID.TR:
                    this.insertionMode = InsertionMode.IN_ROW;
                    return;
                case html_js_1$1.TAG_ID.TBODY:
                case html_js_1$1.TAG_ID.THEAD:
                case html_js_1$1.TAG_ID.TFOOT:
                    this.insertionMode = InsertionMode.IN_TABLE_BODY;
                    return;
                case html_js_1$1.TAG_ID.CAPTION:
                    this.insertionMode = InsertionMode.IN_CAPTION;
                    return;
                case html_js_1$1.TAG_ID.COLGROUP:
                    this.insertionMode = InsertionMode.IN_COLUMN_GROUP;
                    return;
                case html_js_1$1.TAG_ID.TABLE:
                    this.insertionMode = InsertionMode.IN_TABLE;
                    return;
                case html_js_1$1.TAG_ID.BODY:
                    this.insertionMode = InsertionMode.IN_BODY;
                    return;
                case html_js_1$1.TAG_ID.FRAMESET:
                    this.insertionMode = InsertionMode.IN_FRAMESET;
                    return;
                case html_js_1$1.TAG_ID.SELECT:
                    this._resetInsertionModeForSelect(i);
                    return;
                case html_js_1$1.TAG_ID.TEMPLATE:
                    this.insertionMode = this.tmplInsertionModeStack[0];
                    return;
                case html_js_1$1.TAG_ID.HTML:
                    this.insertionMode = this.headElement ? InsertionMode.AFTER_HEAD : InsertionMode.BEFORE_HEAD;
                    return;
                case html_js_1$1.TAG_ID.TD:
                case html_js_1$1.TAG_ID.TH:
                    if (i > 0) {
                        this.insertionMode = InsertionMode.IN_CELL;
                        return;
                    }
                    break;
                case html_js_1$1.TAG_ID.HEAD:
                    if (i > 0) {
                        this.insertionMode = InsertionMode.IN_HEAD;
                        return;
                    }
                    break;
            }
        }
        this.insertionMode = InsertionMode.IN_BODY;
    }
    _resetInsertionModeForSelect(selectIdx) {
        if (selectIdx > 0) {
            for (let i = selectIdx - 1; i > 0; i--) {
                const tn = this.openElements.tagIDs[i];
                if (tn === html_js_1$1.TAG_ID.TEMPLATE) {
                    break;
                }
                else if (tn === html_js_1$1.TAG_ID.TABLE) {
                    this.insertionMode = InsertionMode.IN_SELECT_IN_TABLE;
                    return;
                }
            }
        }
        this.insertionMode = InsertionMode.IN_SELECT;
    }
    //Foster parenting
    _isElementCausesFosterParenting(tn) {
        return TABLE_STRUCTURE_TAGS.has(tn);
    }
    _shouldFosterParentOnInsertion() {
        return this.fosterParentingEnabled && this._isElementCausesFosterParenting(this.openElements.currentTagId);
    }
    _findFosterParentingLocation() {
        for (let i = this.openElements.stackTop; i >= 0; i--) {
            const openElement = this.openElements.items[i];
            switch (this.openElements.tagIDs[i]) {
                case html_js_1$1.TAG_ID.TEMPLATE:
                    if (this.treeAdapter.getNamespaceURI(openElement) === html_js_1$1.NS.HTML) {
                        return { parent: this.treeAdapter.getTemplateContent(openElement), beforeElement: null };
                    }
                    break;
                case html_js_1$1.TAG_ID.TABLE: {
                    const parent = this.treeAdapter.getParentNode(openElement);
                    if (parent) {
                        return { parent, beforeElement: openElement };
                    }
                    return { parent: this.openElements.items[i - 1], beforeElement: null };
                }
                // Do nothing
            }
        }
        return { parent: this.openElements.items[0], beforeElement: null };
    }
    _fosterParentElement(element) {
        const location = this._findFosterParentingLocation();
        if (location.beforeElement) {
            this.treeAdapter.insertBefore(location.parent, element, location.beforeElement);
        }
        else {
            this.treeAdapter.appendChild(location.parent, element);
        }
    }
    //Special elements
    _isSpecialElement(element, id) {
        const ns = this.treeAdapter.getNamespaceURI(element);
        return html_js_1$1.SPECIAL_ELEMENTS[ns].has(id);
    }
    onCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
            characterInForeignContent(this, token);
            return;
        }
        switch (this.insertionMode) {
            case InsertionMode.INITIAL:
                tokenInInitialMode(this, token);
                break;
            case InsertionMode.BEFORE_HTML:
                tokenBeforeHtml(this, token);
                break;
            case InsertionMode.BEFORE_HEAD:
                tokenBeforeHead(this, token);
                break;
            case InsertionMode.IN_HEAD:
                tokenInHead(this, token);
                break;
            case InsertionMode.IN_HEAD_NO_SCRIPT:
                tokenInHeadNoScript(this, token);
                break;
            case InsertionMode.AFTER_HEAD:
                tokenAfterHead(this, token);
                break;
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_TEMPLATE:
                characterInBody(this, token);
                break;
            case InsertionMode.TEXT:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE:
                this._insertCharacters(token);
                break;
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW:
                characterInTable(this, token);
                break;
            case InsertionMode.IN_TABLE_TEXT:
                characterInTableText(this, token);
                break;
            case InsertionMode.IN_COLUMN_GROUP:
                tokenInColumnGroup(this, token);
                break;
            case InsertionMode.AFTER_BODY:
                tokenAfterBody(this, token);
                break;
            case InsertionMode.AFTER_AFTER_BODY:
                tokenAfterAfterBody(this, token);
                break;
            // Do nothing
        }
    }
    onNullCharacter(token) {
        this.skipNextNewLine = false;
        if (this.tokenizer.inForeignNode) {
            nullCharacterInForeignContent(this, token);
            return;
        }
        switch (this.insertionMode) {
            case InsertionMode.INITIAL:
                tokenInInitialMode(this, token);
                break;
            case InsertionMode.BEFORE_HTML:
                tokenBeforeHtml(this, token);
                break;
            case InsertionMode.BEFORE_HEAD:
                tokenBeforeHead(this, token);
                break;
            case InsertionMode.IN_HEAD:
                tokenInHead(this, token);
                break;
            case InsertionMode.IN_HEAD_NO_SCRIPT:
                tokenInHeadNoScript(this, token);
                break;
            case InsertionMode.AFTER_HEAD:
                tokenAfterHead(this, token);
                break;
            case InsertionMode.TEXT:
                this._insertCharacters(token);
                break;
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW:
                characterInTable(this, token);
                break;
            case InsertionMode.IN_COLUMN_GROUP:
                tokenInColumnGroup(this, token);
                break;
            case InsertionMode.AFTER_BODY:
                tokenAfterBody(this, token);
                break;
            case InsertionMode.AFTER_AFTER_BODY:
                tokenAfterAfterBody(this, token);
                break;
            // Do nothing
        }
    }
    onComment(token) {
        this.skipNextNewLine = false;
        if (this.currentNotInHTML) {
            appendComment(this, token);
            return;
        }
        switch (this.insertionMode) {
            case InsertionMode.INITIAL:
            case InsertionMode.BEFORE_HTML:
            case InsertionMode.BEFORE_HEAD:
            case InsertionMode.IN_HEAD:
            case InsertionMode.IN_HEAD_NO_SCRIPT:
            case InsertionMode.AFTER_HEAD:
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_COLUMN_GROUP:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE:
            case InsertionMode.IN_TEMPLATE:
            case InsertionMode.IN_FRAMESET:
            case InsertionMode.AFTER_FRAMESET:
                appendComment(this, token);
                break;
            case InsertionMode.IN_TABLE_TEXT:
                tokenInTableText(this, token);
                break;
            case InsertionMode.AFTER_BODY:
                appendCommentToRootHtmlElement(this, token);
                break;
            case InsertionMode.AFTER_AFTER_BODY:
            case InsertionMode.AFTER_AFTER_FRAMESET:
                appendCommentToDocument(this, token);
                break;
            // Do nothing
        }
    }
    onDoctype(token) {
        this.skipNextNewLine = false;
        switch (this.insertionMode) {
            case InsertionMode.INITIAL:
                doctypeInInitialMode(this, token);
                break;
            case InsertionMode.BEFORE_HEAD:
            case InsertionMode.IN_HEAD:
            case InsertionMode.IN_HEAD_NO_SCRIPT:
            case InsertionMode.AFTER_HEAD:
                this._err(token, error_codes_js_1.ERR.misplacedDoctype);
                break;
            case InsertionMode.IN_TABLE_TEXT:
                tokenInTableText(this, token);
                break;
            // Do nothing
        }
    }
    onStartTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        this._processStartTag(token);
        if (token.selfClosing && !token.ackSelfClosing) {
            this._err(token, error_codes_js_1.ERR.nonVoidHtmlElementStartTagWithTrailingSolidus);
        }
    }
    /**
     * Processes a given start tag.
     *
     * `onStartTag` checks if a self-closing tag was recognized. When a token
     * is moved inbetween multiple insertion modes, this check for self-closing
     * could lead to false positives. To avoid this, `_processStartTag` is used
     * for nested calls.
     *
     * @param token The token to process.
     */
    _processStartTag(token) {
        if (this.shouldProcessStartTagTokenInForeignContent(token)) {
            startTagInForeignContent(this, token);
        }
        else {
            this._startTagOutsideForeignContent(token);
        }
    }
    _startTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
            case InsertionMode.INITIAL:
                tokenInInitialMode(this, token);
                break;
            case InsertionMode.BEFORE_HTML:
                startTagBeforeHtml(this, token);
                break;
            case InsertionMode.BEFORE_HEAD:
                startTagBeforeHead(this, token);
                break;
            case InsertionMode.IN_HEAD:
                startTagInHead(this, token);
                break;
            case InsertionMode.IN_HEAD_NO_SCRIPT:
                startTagInHeadNoScript(this, token);
                break;
            case InsertionMode.AFTER_HEAD:
                startTagAfterHead(this, token);
                break;
            case InsertionMode.IN_BODY:
                startTagInBody(this, token);
                break;
            case InsertionMode.IN_TABLE:
                startTagInTable(this, token);
                break;
            case InsertionMode.IN_TABLE_TEXT:
                tokenInTableText(this, token);
                break;
            case InsertionMode.IN_CAPTION:
                startTagInCaption(this, token);
                break;
            case InsertionMode.IN_COLUMN_GROUP:
                startTagInColumnGroup(this, token);
                break;
            case InsertionMode.IN_TABLE_BODY:
                startTagInTableBody(this, token);
                break;
            case InsertionMode.IN_ROW:
                startTagInRow(this, token);
                break;
            case InsertionMode.IN_CELL:
                startTagInCell(this, token);
                break;
            case InsertionMode.IN_SELECT:
                startTagInSelect(this, token);
                break;
            case InsertionMode.IN_SELECT_IN_TABLE:
                startTagInSelectInTable(this, token);
                break;
            case InsertionMode.IN_TEMPLATE:
                startTagInTemplate(this, token);
                break;
            case InsertionMode.AFTER_BODY:
                startTagAfterBody(this, token);
                break;
            case InsertionMode.IN_FRAMESET:
                startTagInFrameset(this, token);
                break;
            case InsertionMode.AFTER_FRAMESET:
                startTagAfterFrameset(this, token);
                break;
            case InsertionMode.AFTER_AFTER_BODY:
                startTagAfterAfterBody(this, token);
                break;
            case InsertionMode.AFTER_AFTER_FRAMESET:
                startTagAfterAfterFrameset(this, token);
                break;
            // Do nothing
        }
    }
    onEndTag(token) {
        this.skipNextNewLine = false;
        this.currentToken = token;
        if (this.currentNotInHTML) {
            endTagInForeignContent(this, token);
        }
        else {
            this._endTagOutsideForeignContent(token);
        }
    }
    _endTagOutsideForeignContent(token) {
        switch (this.insertionMode) {
            case InsertionMode.INITIAL:
                tokenInInitialMode(this, token);
                break;
            case InsertionMode.BEFORE_HTML:
                endTagBeforeHtml(this, token);
                break;
            case InsertionMode.BEFORE_HEAD:
                endTagBeforeHead(this, token);
                break;
            case InsertionMode.IN_HEAD:
                endTagInHead(this, token);
                break;
            case InsertionMode.IN_HEAD_NO_SCRIPT:
                endTagInHeadNoScript(this, token);
                break;
            case InsertionMode.AFTER_HEAD:
                endTagAfterHead(this, token);
                break;
            case InsertionMode.IN_BODY:
                endTagInBody(this, token);
                break;
            case InsertionMode.TEXT:
                endTagInText(this, token);
                break;
            case InsertionMode.IN_TABLE:
                endTagInTable(this, token);
                break;
            case InsertionMode.IN_TABLE_TEXT:
                tokenInTableText(this, token);
                break;
            case InsertionMode.IN_CAPTION:
                endTagInCaption(this, token);
                break;
            case InsertionMode.IN_COLUMN_GROUP:
                endTagInColumnGroup(this, token);
                break;
            case InsertionMode.IN_TABLE_BODY:
                endTagInTableBody(this, token);
                break;
            case InsertionMode.IN_ROW:
                endTagInRow(this, token);
                break;
            case InsertionMode.IN_CELL:
                endTagInCell(this, token);
                break;
            case InsertionMode.IN_SELECT:
                endTagInSelect(this, token);
                break;
            case InsertionMode.IN_SELECT_IN_TABLE:
                endTagInSelectInTable(this, token);
                break;
            case InsertionMode.IN_TEMPLATE:
                endTagInTemplate(this, token);
                break;
            case InsertionMode.AFTER_BODY:
                endTagAfterBody(this, token);
                break;
            case InsertionMode.IN_FRAMESET:
                endTagInFrameset(this, token);
                break;
            case InsertionMode.AFTER_FRAMESET:
                endTagAfterFrameset(this, token);
                break;
            case InsertionMode.AFTER_AFTER_BODY:
                tokenAfterAfterBody(this, token);
                break;
            // Do nothing
        }
    }
    onEof(token) {
        switch (this.insertionMode) {
            case InsertionMode.INITIAL:
                tokenInInitialMode(this, token);
                break;
            case InsertionMode.BEFORE_HTML:
                tokenBeforeHtml(this, token);
                break;
            case InsertionMode.BEFORE_HEAD:
                tokenBeforeHead(this, token);
                break;
            case InsertionMode.IN_HEAD:
                tokenInHead(this, token);
                break;
            case InsertionMode.IN_HEAD_NO_SCRIPT:
                tokenInHeadNoScript(this, token);
                break;
            case InsertionMode.AFTER_HEAD:
                tokenAfterHead(this, token);
                break;
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_COLUMN_GROUP:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE:
                eofInBody(this, token);
                break;
            case InsertionMode.TEXT:
                eofInText(this, token);
                break;
            case InsertionMode.IN_TABLE_TEXT:
                tokenInTableText(this, token);
                break;
            case InsertionMode.IN_TEMPLATE:
                eofInTemplate(this, token);
                break;
            case InsertionMode.AFTER_BODY:
            case InsertionMode.IN_FRAMESET:
            case InsertionMode.AFTER_FRAMESET:
            case InsertionMode.AFTER_AFTER_BODY:
            case InsertionMode.AFTER_AFTER_FRAMESET:
                stopParsing(this, token);
                break;
            // Do nothing
        }
    }
    onWhitespaceCharacter(token) {
        if (this.skipNextNewLine) {
            this.skipNextNewLine = false;
            if (token.chars.charCodeAt(0) === unicode.CODE_POINTS.LINE_FEED) {
                if (token.chars.length === 1) {
                    return;
                }
                token.chars = token.chars.substr(1);
            }
        }
        if (this.tokenizer.inForeignNode) {
            this._insertCharacters(token);
            return;
        }
        switch (this.insertionMode) {
            case InsertionMode.IN_HEAD:
            case InsertionMode.IN_HEAD_NO_SCRIPT:
            case InsertionMode.AFTER_HEAD:
            case InsertionMode.TEXT:
            case InsertionMode.IN_COLUMN_GROUP:
            case InsertionMode.IN_SELECT:
            case InsertionMode.IN_SELECT_IN_TABLE:
            case InsertionMode.IN_FRAMESET:
            case InsertionMode.AFTER_FRAMESET:
                this._insertCharacters(token);
                break;
            case InsertionMode.IN_BODY:
            case InsertionMode.IN_CAPTION:
            case InsertionMode.IN_CELL:
            case InsertionMode.IN_TEMPLATE:
            case InsertionMode.AFTER_BODY:
            case InsertionMode.AFTER_AFTER_BODY:
            case InsertionMode.AFTER_AFTER_FRAMESET:
                whitespaceCharacterInBody(this, token);
                break;
            case InsertionMode.IN_TABLE:
            case InsertionMode.IN_TABLE_BODY:
            case InsertionMode.IN_ROW:
                characterInTable(this, token);
                break;
            case InsertionMode.IN_TABLE_TEXT:
                whitespaceCharacterInTableText(this, token);
                break;
            // Do nothing
        }
    }
}
parser.Parser = Parser$2;
//Adoption agency algorithm
//(see: http://www.whatwg.org/specs/web-apps/current-work/multipage/tree-construction.html#adoptionAgency)
//------------------------------------------------------------------
//Steps 5-8 of the algorithm
function aaObtainFormattingElementEntry(p, token) {
    let formattingElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(token.tagName);
    if (formattingElementEntry) {
        if (!p.openElements.contains(formattingElementEntry.element)) {
            p.activeFormattingElements.removeEntry(formattingElementEntry);
            formattingElementEntry = null;
        }
        else if (!p.openElements.hasInScope(token.tagID)) {
            formattingElementEntry = null;
        }
    }
    else {
        genericEndTagInBody(p, token);
    }
    return formattingElementEntry;
}
//Steps 9 and 10 of the algorithm
function aaObtainFurthestBlock(p, formattingElementEntry) {
    let furthestBlock = null;
    let idx = p.openElements.stackTop;
    for (; idx >= 0; idx--) {
        const element = p.openElements.items[idx];
        if (element === formattingElementEntry.element) {
            break;
        }
        if (p._isSpecialElement(element, p.openElements.tagIDs[idx])) {
            furthestBlock = element;
        }
    }
    if (!furthestBlock) {
        p.openElements.shortenToLength(idx < 0 ? 0 : idx);
        p.activeFormattingElements.removeEntry(formattingElementEntry);
    }
    return furthestBlock;
}
//Step 13 of the algorithm
function aaInnerLoop(p, furthestBlock, formattingElement) {
    let lastElement = furthestBlock;
    let nextElement = p.openElements.getCommonAncestor(furthestBlock);
    for (let i = 0, element = nextElement; element !== formattingElement; i++, element = nextElement) {
        //NOTE: store the next element for the next loop iteration (it may be deleted from the stack by step 9.5)
        nextElement = p.openElements.getCommonAncestor(element);
        const elementEntry = p.activeFormattingElements.getElementEntry(element);
        const counterOverflow = elementEntry && i >= AA_INNER_LOOP_ITER;
        const shouldRemoveFromOpenElements = !elementEntry || counterOverflow;
        if (shouldRemoveFromOpenElements) {
            if (counterOverflow) {
                p.activeFormattingElements.removeEntry(elementEntry);
            }
            p.openElements.remove(element);
        }
        else {
            element = aaRecreateElementFromEntry(p, elementEntry);
            if (lastElement === furthestBlock) {
                p.activeFormattingElements.bookmark = elementEntry;
            }
            p.treeAdapter.detachNode(lastElement);
            p.treeAdapter.appendChild(element, lastElement);
            lastElement = element;
        }
    }
    return lastElement;
}
//Step 13.7 of the algorithm
function aaRecreateElementFromEntry(p, elementEntry) {
    const ns = p.treeAdapter.getNamespaceURI(elementEntry.element);
    const newElement = p.treeAdapter.createElement(elementEntry.token.tagName, ns, elementEntry.token.attrs);
    p.openElements.replace(elementEntry.element, newElement);
    elementEntry.element = newElement;
    return newElement;
}
//Step 14 of the algorithm
function aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement) {
    const tn = p.treeAdapter.getTagName(commonAncestor);
    const tid = (0, html_js_1$1.getTagID)(tn);
    if (p._isElementCausesFosterParenting(tid)) {
        p._fosterParentElement(lastElement);
    }
    else {
        const ns = p.treeAdapter.getNamespaceURI(commonAncestor);
        if (tid === html_js_1$1.TAG_ID.TEMPLATE && ns === html_js_1$1.NS.HTML) {
            commonAncestor = p.treeAdapter.getTemplateContent(commonAncestor);
        }
        p.treeAdapter.appendChild(commonAncestor, lastElement);
    }
}
//Steps 15-19 of the algorithm
function aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry) {
    const ns = p.treeAdapter.getNamespaceURI(formattingElementEntry.element);
    const { token } = formattingElementEntry;
    const newElement = p.treeAdapter.createElement(token.tagName, ns, token.attrs);
    p._adoptNodes(furthestBlock, newElement);
    p.treeAdapter.appendChild(furthestBlock, newElement);
    p.activeFormattingElements.insertElementAfterBookmark(newElement, token);
    p.activeFormattingElements.removeEntry(formattingElementEntry);
    p.openElements.remove(formattingElementEntry.element);
    p.openElements.insertAfter(furthestBlock, newElement, token.tagID);
}
//Algorithm entry point
function callAdoptionAgency(p, token) {
    for (let i = 0; i < AA_OUTER_LOOP_ITER; i++) {
        const formattingElementEntry = aaObtainFormattingElementEntry(p, token);
        if (!formattingElementEntry) {
            break;
        }
        const furthestBlock = aaObtainFurthestBlock(p, formattingElementEntry);
        if (!furthestBlock) {
            break;
        }
        p.activeFormattingElements.bookmark = formattingElementEntry;
        const lastElement = aaInnerLoop(p, furthestBlock, formattingElementEntry.element);
        const commonAncestor = p.openElements.getCommonAncestor(formattingElementEntry.element);
        p.treeAdapter.detachNode(lastElement);
        if (commonAncestor)
            aaInsertLastNodeInCommonAncestor(p, commonAncestor, lastElement);
        aaReplaceFormattingElement(p, furthestBlock, formattingElementEntry);
    }
}
//Generic token handlers
//------------------------------------------------------------------
function appendComment(p, token) {
    p._appendCommentNode(token, p.openElements.currentTmplContentOrNode);
}
function appendCommentToRootHtmlElement(p, token) {
    p._appendCommentNode(token, p.openElements.items[0]);
}
function appendCommentToDocument(p, token) {
    p._appendCommentNode(token, p.document);
}
function stopParsing(p, token) {
    p.stopped = true;
    // NOTE: Set end locations for elements that remain on the open element stack.
    if (token.location) {
        // NOTE: If we are not in a fragment, `html` and `body` will stay on the stack.
        // This is a problem, as we might overwrite their end position here.
        const target = p.fragmentContext ? 0 : 2;
        for (let i = p.openElements.stackTop; i >= target; i--) {
            p._setEndLocation(p.openElements.items[i], token);
        }
        // Handle `html` and `body`
        if (!p.fragmentContext && p.openElements.stackTop >= 0) {
            const htmlElement = p.openElements.items[0];
            const htmlLocation = p.treeAdapter.getNodeSourceCodeLocation(htmlElement);
            if (htmlLocation && !htmlLocation.endTag) {
                p._setEndLocation(htmlElement, token);
                if (p.openElements.stackTop >= 1) {
                    const bodyElement = p.openElements.items[1];
                    const bodyLocation = p.treeAdapter.getNodeSourceCodeLocation(bodyElement);
                    if (bodyLocation && !bodyLocation.endTag) {
                        p._setEndLocation(bodyElement, token);
                    }
                }
            }
        }
    }
}
// The "initial" insertion mode
//------------------------------------------------------------------
function doctypeInInitialMode(p, token) {
    p._setDocumentType(token);
    const mode = token.forceQuirks ? html_js_1$1.DOCUMENT_MODE.QUIRKS : doctype.getDocumentMode(token);
    if (!doctype.isConforming(token)) {
        p._err(token, error_codes_js_1.ERR.nonConformingDoctype);
    }
    p.treeAdapter.setDocumentMode(p.document, mode);
    p.insertionMode = InsertionMode.BEFORE_HTML;
}
function tokenInInitialMode(p, token) {
    p._err(token, error_codes_js_1.ERR.missingDoctype, true);
    p.treeAdapter.setDocumentMode(p.document, html_js_1$1.DOCUMENT_MODE.QUIRKS);
    p.insertionMode = InsertionMode.BEFORE_HTML;
    p._processToken(token);
}
// The "before html" insertion mode
//------------------------------------------------------------------
function startTagBeforeHtml(p, token) {
    if (token.tagID === html_js_1$1.TAG_ID.HTML) {
        p._insertElement(token, html_js_1$1.NS.HTML);
        p.insertionMode = InsertionMode.BEFORE_HEAD;
    }
    else {
        tokenBeforeHtml(p, token);
    }
}
function endTagBeforeHtml(p, token) {
    const tn = token.tagID;
    if (tn === html_js_1$1.TAG_ID.HTML || tn === html_js_1$1.TAG_ID.HEAD || tn === html_js_1$1.TAG_ID.BODY || tn === html_js_1$1.TAG_ID.BR) {
        tokenBeforeHtml(p, token);
    }
}
function tokenBeforeHtml(p, token) {
    p._insertFakeRootElement();
    p.insertionMode = InsertionMode.BEFORE_HEAD;
    p._processToken(token);
}
// The "before head" insertion mode
//------------------------------------------------------------------
function startTagBeforeHead(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.HEAD: {
            p._insertElement(token, html_js_1$1.NS.HTML);
            p.headElement = p.openElements.current;
            p.insertionMode = InsertionMode.IN_HEAD;
            break;
        }
        default: {
            tokenBeforeHead(p, token);
        }
    }
}
function endTagBeforeHead(p, token) {
    const tn = token.tagID;
    if (tn === html_js_1$1.TAG_ID.HEAD || tn === html_js_1$1.TAG_ID.BODY || tn === html_js_1$1.TAG_ID.HTML || tn === html_js_1$1.TAG_ID.BR) {
        tokenBeforeHead(p, token);
    }
    else {
        p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
    }
}
function tokenBeforeHead(p, token) {
    p._insertFakeElement(html_js_1$1.TAG_NAMES.HEAD, html_js_1$1.TAG_ID.HEAD);
    p.headElement = p.openElements.current;
    p.insertionMode = InsertionMode.IN_HEAD;
    p._processToken(token);
}
// The "in head" insertion mode
//------------------------------------------------------------------
function startTagInHead(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.BASE:
        case html_js_1$1.TAG_ID.BASEFONT:
        case html_js_1$1.TAG_ID.BGSOUND:
        case html_js_1$1.TAG_ID.LINK:
        case html_js_1$1.TAG_ID.META: {
            p._appendElement(token, html_js_1$1.NS.HTML);
            token.ackSelfClosing = true;
            break;
        }
        case html_js_1$1.TAG_ID.TITLE: {
            p._switchToTextParsing(token, index_js_1.TokenizerMode.RCDATA);
            break;
        }
        case html_js_1$1.TAG_ID.NOSCRIPT: {
            if (p.options.scriptingEnabled) {
                p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
            }
            else {
                p._insertElement(token, html_js_1$1.NS.HTML);
                p.insertionMode = InsertionMode.IN_HEAD_NO_SCRIPT;
            }
            break;
        }
        case html_js_1$1.TAG_ID.NOFRAMES:
        case html_js_1$1.TAG_ID.STYLE: {
            p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
            break;
        }
        case html_js_1$1.TAG_ID.SCRIPT: {
            p._switchToTextParsing(token, index_js_1.TokenizerMode.SCRIPT_DATA);
            break;
        }
        case html_js_1$1.TAG_ID.TEMPLATE: {
            p._insertTemplate(token);
            p.activeFormattingElements.insertMarker();
            p.framesetOk = false;
            p.insertionMode = InsertionMode.IN_TEMPLATE;
            p.tmplInsertionModeStack.unshift(InsertionMode.IN_TEMPLATE);
            break;
        }
        case html_js_1$1.TAG_ID.HEAD: {
            p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
            break;
        }
        default: {
            tokenInHead(p, token);
        }
    }
}
function endTagInHead(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.HEAD: {
            p.openElements.pop();
            p.insertionMode = InsertionMode.AFTER_HEAD;
            break;
        }
        case html_js_1$1.TAG_ID.BODY:
        case html_js_1$1.TAG_ID.BR:
        case html_js_1$1.TAG_ID.HTML: {
            tokenInHead(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.TEMPLATE: {
            if (p.openElements.tmplCount > 0) {
                p.openElements.generateImpliedEndTagsThoroughly();
                if (p.openElements.currentTagId !== html_js_1$1.TAG_ID.TEMPLATE) {
                    p._err(token, error_codes_js_1.ERR.closingOfElementWithOpenChildElements);
                }
                p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.TEMPLATE);
                p.activeFormattingElements.clearToLastMarker();
                p.tmplInsertionModeStack.shift();
                p._resetInsertionMode();
            }
            else {
                p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
            }
            break;
        }
        default: {
            p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
    }
}
function tokenInHead(p, token) {
    p.openElements.pop();
    p.insertionMode = InsertionMode.AFTER_HEAD;
    p._processToken(token);
}
// The "in head no script" insertion mode
//------------------------------------------------------------------
function startTagInHeadNoScript(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.BASEFONT:
        case html_js_1$1.TAG_ID.BGSOUND:
        case html_js_1$1.TAG_ID.HEAD:
        case html_js_1$1.TAG_ID.LINK:
        case html_js_1$1.TAG_ID.META:
        case html_js_1$1.TAG_ID.NOFRAMES:
        case html_js_1$1.TAG_ID.STYLE: {
            startTagInHead(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.NOSCRIPT: {
            p._err(token, error_codes_js_1.ERR.nestedNoscriptInHead);
            break;
        }
        default: {
            tokenInHeadNoScript(p, token);
        }
    }
}
function endTagInHeadNoScript(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.NOSCRIPT: {
            p.openElements.pop();
            p.insertionMode = InsertionMode.IN_HEAD;
            break;
        }
        case html_js_1$1.TAG_ID.BR: {
            tokenInHeadNoScript(p, token);
            break;
        }
        default: {
            p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
    }
}
function tokenInHeadNoScript(p, token) {
    const errCode = token.type === token_js_1.TokenType.EOF ? error_codes_js_1.ERR.openElementsLeftAfterEof : error_codes_js_1.ERR.disallowedContentInNoscriptInHead;
    p._err(token, errCode);
    p.openElements.pop();
    p.insertionMode = InsertionMode.IN_HEAD;
    p._processToken(token);
}
// The "after head" insertion mode
//------------------------------------------------------------------
function startTagAfterHead(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.BODY: {
            p._insertElement(token, html_js_1$1.NS.HTML);
            p.framesetOk = false;
            p.insertionMode = InsertionMode.IN_BODY;
            break;
        }
        case html_js_1$1.TAG_ID.FRAMESET: {
            p._insertElement(token, html_js_1$1.NS.HTML);
            p.insertionMode = InsertionMode.IN_FRAMESET;
            break;
        }
        case html_js_1$1.TAG_ID.BASE:
        case html_js_1$1.TAG_ID.BASEFONT:
        case html_js_1$1.TAG_ID.BGSOUND:
        case html_js_1$1.TAG_ID.LINK:
        case html_js_1$1.TAG_ID.META:
        case html_js_1$1.TAG_ID.NOFRAMES:
        case html_js_1$1.TAG_ID.SCRIPT:
        case html_js_1$1.TAG_ID.STYLE:
        case html_js_1$1.TAG_ID.TEMPLATE:
        case html_js_1$1.TAG_ID.TITLE: {
            p._err(token, error_codes_js_1.ERR.abandonedHeadElementChild);
            p.openElements.push(p.headElement, html_js_1$1.TAG_ID.HEAD);
            startTagInHead(p, token);
            p.openElements.remove(p.headElement);
            break;
        }
        case html_js_1$1.TAG_ID.HEAD: {
            p._err(token, error_codes_js_1.ERR.misplacedStartTagForHeadElement);
            break;
        }
        default: {
            tokenAfterHead(p, token);
        }
    }
}
function endTagAfterHead(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.BODY:
        case html_js_1$1.TAG_ID.HTML:
        case html_js_1$1.TAG_ID.BR: {
            tokenAfterHead(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.TEMPLATE: {
            endTagInHead(p, token);
            break;
        }
        default: {
            p._err(token, error_codes_js_1.ERR.endTagWithoutMatchingOpenElement);
        }
    }
}
function tokenAfterHead(p, token) {
    p._insertFakeElement(html_js_1$1.TAG_NAMES.BODY, html_js_1$1.TAG_ID.BODY);
    p.insertionMode = InsertionMode.IN_BODY;
    modeInBody(p, token);
}
// The "in body" insertion mode
//------------------------------------------------------------------
function modeInBody(p, token) {
    switch (token.type) {
        case token_js_1.TokenType.CHARACTER: {
            characterInBody(p, token);
            break;
        }
        case token_js_1.TokenType.WHITESPACE_CHARACTER: {
            whitespaceCharacterInBody(p, token);
            break;
        }
        case token_js_1.TokenType.COMMENT: {
            appendComment(p, token);
            break;
        }
        case token_js_1.TokenType.START_TAG: {
            startTagInBody(p, token);
            break;
        }
        case token_js_1.TokenType.END_TAG: {
            endTagInBody(p, token);
            break;
        }
        case token_js_1.TokenType.EOF: {
            eofInBody(p, token);
            break;
        }
        // Do nothing
    }
}
function whitespaceCharacterInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertCharacters(token);
}
function characterInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertCharacters(token);
    p.framesetOk = false;
}
function htmlStartTagInBody(p, token) {
    if (p.openElements.tmplCount === 0) {
        p.treeAdapter.adoptAttributes(p.openElements.items[0], token.attrs);
    }
}
function bodyStartTagInBody(p, token) {
    const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
    if (bodyElement && p.openElements.tmplCount === 0) {
        p.framesetOk = false;
        p.treeAdapter.adoptAttributes(bodyElement, token.attrs);
    }
}
function framesetStartTagInBody(p, token) {
    const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
    if (p.framesetOk && bodyElement) {
        p.treeAdapter.detachNode(bodyElement);
        p.openElements.popAllUpToHtmlElement();
        p._insertElement(token, html_js_1$1.NS.HTML);
        p.insertionMode = InsertionMode.IN_FRAMESET;
    }
}
function addressStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(html_js_1$1.TAG_ID.P)) {
        p._closePElement();
    }
    p._insertElement(token, html_js_1$1.NS.HTML);
}
function numberedHeaderStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(html_js_1$1.TAG_ID.P)) {
        p._closePElement();
    }
    if ((0, html_js_1$1.isNumberedHeader)(p.openElements.currentTagId)) {
        p.openElements.pop();
    }
    p._insertElement(token, html_js_1$1.NS.HTML);
}
function preStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(html_js_1$1.TAG_ID.P)) {
        p._closePElement();
    }
    p._insertElement(token, html_js_1$1.NS.HTML);
    //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
    //on to the next one. (Newlines at the start of pre blocks are ignored as an authoring convenience.)
    p.skipNextNewLine = true;
    p.framesetOk = false;
}
function formStartTagInBody(p, token) {
    const inTemplate = p.openElements.tmplCount > 0;
    if (!p.formElement || inTemplate) {
        if (p.openElements.hasInButtonScope(html_js_1$1.TAG_ID.P)) {
            p._closePElement();
        }
        p._insertElement(token, html_js_1$1.NS.HTML);
        if (!inTemplate) {
            p.formElement = p.openElements.current;
        }
    }
}
function listItemStartTagInBody(p, token) {
    p.framesetOk = false;
    const tn = token.tagID;
    for (let i = p.openElements.stackTop; i >= 0; i--) {
        const elementId = p.openElements.tagIDs[i];
        if ((tn === html_js_1$1.TAG_ID.LI && elementId === html_js_1$1.TAG_ID.LI) ||
            ((tn === html_js_1$1.TAG_ID.DD || tn === html_js_1$1.TAG_ID.DT) && (elementId === html_js_1$1.TAG_ID.DD || elementId === html_js_1$1.TAG_ID.DT))) {
            p.openElements.generateImpliedEndTagsWithExclusion(elementId);
            p.openElements.popUntilTagNamePopped(elementId);
            break;
        }
        if (elementId !== html_js_1$1.TAG_ID.ADDRESS &&
            elementId !== html_js_1$1.TAG_ID.DIV &&
            elementId !== html_js_1$1.TAG_ID.P &&
            p._isSpecialElement(p.openElements.items[i], elementId)) {
            break;
        }
    }
    if (p.openElements.hasInButtonScope(html_js_1$1.TAG_ID.P)) {
        p._closePElement();
    }
    p._insertElement(token, html_js_1$1.NS.HTML);
}
function plaintextStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(html_js_1$1.TAG_ID.P)) {
        p._closePElement();
    }
    p._insertElement(token, html_js_1$1.NS.HTML);
    p.tokenizer.state = index_js_1.TokenizerMode.PLAINTEXT;
}
function buttonStartTagInBody(p, token) {
    if (p.openElements.hasInScope(html_js_1$1.TAG_ID.BUTTON)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.BUTTON);
    }
    p._reconstructActiveFormattingElements();
    p._insertElement(token, html_js_1$1.NS.HTML);
    p.framesetOk = false;
}
function aStartTagInBody(p, token) {
    const activeElementEntry = p.activeFormattingElements.getElementEntryInScopeWithTagName(html_js_1$1.TAG_NAMES.A);
    if (activeElementEntry) {
        callAdoptionAgency(p, token);
        p.openElements.remove(activeElementEntry.element);
        p.activeFormattingElements.removeEntry(activeElementEntry);
    }
    p._reconstructActiveFormattingElements();
    p._insertElement(token, html_js_1$1.NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function bStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, html_js_1$1.NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function nobrStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    if (p.openElements.hasInScope(html_js_1$1.TAG_ID.NOBR)) {
        callAdoptionAgency(p, token);
        p._reconstructActiveFormattingElements();
    }
    p._insertElement(token, html_js_1$1.NS.HTML);
    p.activeFormattingElements.pushElement(p.openElements.current, token);
}
function appletStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, html_js_1$1.NS.HTML);
    p.activeFormattingElements.insertMarker();
    p.framesetOk = false;
}
function tableStartTagInBody(p, token) {
    if (p.treeAdapter.getDocumentMode(p.document) !== html_js_1$1.DOCUMENT_MODE.QUIRKS && p.openElements.hasInButtonScope(html_js_1$1.TAG_ID.P)) {
        p._closePElement();
    }
    p._insertElement(token, html_js_1$1.NS.HTML);
    p.framesetOk = false;
    p.insertionMode = InsertionMode.IN_TABLE;
}
function areaStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._appendElement(token, html_js_1$1.NS.HTML);
    p.framesetOk = false;
    token.ackSelfClosing = true;
}
function isHiddenInput(token) {
    const inputType = (0, token_js_1.getTokenAttr)(token, html_js_1$1.ATTRS.TYPE);
    return inputType != null && inputType.toLowerCase() === HIDDEN_INPUT_TYPE;
}
function inputStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._appendElement(token, html_js_1$1.NS.HTML);
    if (!isHiddenInput(token)) {
        p.framesetOk = false;
    }
    token.ackSelfClosing = true;
}
function paramStartTagInBody(p, token) {
    p._appendElement(token, html_js_1$1.NS.HTML);
    token.ackSelfClosing = true;
}
function hrStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(html_js_1$1.TAG_ID.P)) {
        p._closePElement();
    }
    p._appendElement(token, html_js_1$1.NS.HTML);
    p.framesetOk = false;
    token.ackSelfClosing = true;
}
function imageStartTagInBody(p, token) {
    token.tagName = html_js_1$1.TAG_NAMES.IMG;
    token.tagID = html_js_1$1.TAG_ID.IMG;
    areaStartTagInBody(p, token);
}
function textareaStartTagInBody(p, token) {
    p._insertElement(token, html_js_1$1.NS.HTML);
    //NOTE: If the next token is a U+000A LINE FEED (LF) character token, then ignore that token and move
    //on to the next one. (Newlines at the start of textarea elements are ignored as an authoring convenience.)
    p.skipNextNewLine = true;
    p.tokenizer.state = index_js_1.TokenizerMode.RCDATA;
    p.originalInsertionMode = p.insertionMode;
    p.framesetOk = false;
    p.insertionMode = InsertionMode.TEXT;
}
function xmpStartTagInBody(p, token) {
    if (p.openElements.hasInButtonScope(html_js_1$1.TAG_ID.P)) {
        p._closePElement();
    }
    p._reconstructActiveFormattingElements();
    p.framesetOk = false;
    p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
}
function iframeStartTagInBody(p, token) {
    p.framesetOk = false;
    p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
}
//NOTE: here we assume that we always act as an user agent with enabled plugins, so we parse
//<noembed> as rawtext.
function noembedStartTagInBody(p, token) {
    p._switchToTextParsing(token, index_js_1.TokenizerMode.RAWTEXT);
}
function selectStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, html_js_1$1.NS.HTML);
    p.framesetOk = false;
    p.insertionMode =
        p.insertionMode === InsertionMode.IN_TABLE ||
            p.insertionMode === InsertionMode.IN_CAPTION ||
            p.insertionMode === InsertionMode.IN_TABLE_BODY ||
            p.insertionMode === InsertionMode.IN_ROW ||
            p.insertionMode === InsertionMode.IN_CELL
            ? InsertionMode.IN_SELECT_IN_TABLE
            : InsertionMode.IN_SELECT;
}
function optgroupStartTagInBody(p, token) {
    if (p.openElements.currentTagId === html_js_1$1.TAG_ID.OPTION) {
        p.openElements.pop();
    }
    p._reconstructActiveFormattingElements();
    p._insertElement(token, html_js_1$1.NS.HTML);
}
function rbStartTagInBody(p, token) {
    if (p.openElements.hasInScope(html_js_1$1.TAG_ID.RUBY)) {
        p.openElements.generateImpliedEndTags();
    }
    p._insertElement(token, html_js_1$1.NS.HTML);
}
function rtStartTagInBody(p, token) {
    if (p.openElements.hasInScope(html_js_1$1.TAG_ID.RUBY)) {
        p.openElements.generateImpliedEndTagsWithExclusion(html_js_1$1.TAG_ID.RTC);
    }
    p._insertElement(token, html_js_1$1.NS.HTML);
}
function mathStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    foreignContent.adjustTokenMathMLAttrs(token);
    foreignContent.adjustTokenXMLAttrs(token);
    if (token.selfClosing) {
        p._appendElement(token, html_js_1$1.NS.MATHML);
    }
    else {
        p._insertElement(token, html_js_1$1.NS.MATHML);
    }
    token.ackSelfClosing = true;
}
function svgStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    foreignContent.adjustTokenSVGAttrs(token);
    foreignContent.adjustTokenXMLAttrs(token);
    if (token.selfClosing) {
        p._appendElement(token, html_js_1$1.NS.SVG);
    }
    else {
        p._insertElement(token, html_js_1$1.NS.SVG);
    }
    token.ackSelfClosing = true;
}
function genericStartTagInBody(p, token) {
    p._reconstructActiveFormattingElements();
    p._insertElement(token, html_js_1$1.NS.HTML);
}
function startTagInBody(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.I:
        case html_js_1$1.TAG_ID.S:
        case html_js_1$1.TAG_ID.B:
        case html_js_1$1.TAG_ID.U:
        case html_js_1$1.TAG_ID.EM:
        case html_js_1$1.TAG_ID.TT:
        case html_js_1$1.TAG_ID.BIG:
        case html_js_1$1.TAG_ID.CODE:
        case html_js_1$1.TAG_ID.FONT:
        case html_js_1$1.TAG_ID.SMALL:
        case html_js_1$1.TAG_ID.STRIKE:
        case html_js_1$1.TAG_ID.STRONG: {
            bStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.A: {
            aStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.H1:
        case html_js_1$1.TAG_ID.H2:
        case html_js_1$1.TAG_ID.H3:
        case html_js_1$1.TAG_ID.H4:
        case html_js_1$1.TAG_ID.H5:
        case html_js_1$1.TAG_ID.H6: {
            numberedHeaderStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.P:
        case html_js_1$1.TAG_ID.DL:
        case html_js_1$1.TAG_ID.OL:
        case html_js_1$1.TAG_ID.UL:
        case html_js_1$1.TAG_ID.DIV:
        case html_js_1$1.TAG_ID.DIR:
        case html_js_1$1.TAG_ID.NAV:
        case html_js_1$1.TAG_ID.MAIN:
        case html_js_1$1.TAG_ID.MENU:
        case html_js_1$1.TAG_ID.ASIDE:
        case html_js_1$1.TAG_ID.CENTER:
        case html_js_1$1.TAG_ID.FIGURE:
        case html_js_1$1.TAG_ID.FOOTER:
        case html_js_1$1.TAG_ID.HEADER:
        case html_js_1$1.TAG_ID.HGROUP:
        case html_js_1$1.TAG_ID.DIALOG:
        case html_js_1$1.TAG_ID.DETAILS:
        case html_js_1$1.TAG_ID.ADDRESS:
        case html_js_1$1.TAG_ID.ARTICLE:
        case html_js_1$1.TAG_ID.SECTION:
        case html_js_1$1.TAG_ID.SUMMARY:
        case html_js_1$1.TAG_ID.FIELDSET:
        case html_js_1$1.TAG_ID.BLOCKQUOTE:
        case html_js_1$1.TAG_ID.FIGCAPTION: {
            addressStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.LI:
        case html_js_1$1.TAG_ID.DD:
        case html_js_1$1.TAG_ID.DT: {
            listItemStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.BR:
        case html_js_1$1.TAG_ID.IMG:
        case html_js_1$1.TAG_ID.WBR:
        case html_js_1$1.TAG_ID.AREA:
        case html_js_1$1.TAG_ID.EMBED:
        case html_js_1$1.TAG_ID.KEYGEN: {
            areaStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.HR: {
            hrStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.RB:
        case html_js_1$1.TAG_ID.RTC: {
            rbStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.RT:
        case html_js_1$1.TAG_ID.RP: {
            rtStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.PRE:
        case html_js_1$1.TAG_ID.LISTING: {
            preStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.XMP: {
            xmpStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.SVG: {
            svgStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.HTML: {
            htmlStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.BASE:
        case html_js_1$1.TAG_ID.LINK:
        case html_js_1$1.TAG_ID.META:
        case html_js_1$1.TAG_ID.STYLE:
        case html_js_1$1.TAG_ID.TITLE:
        case html_js_1$1.TAG_ID.SCRIPT:
        case html_js_1$1.TAG_ID.BGSOUND:
        case html_js_1$1.TAG_ID.BASEFONT:
        case html_js_1$1.TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.BODY: {
            bodyStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.FORM: {
            formStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.NOBR: {
            nobrStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.MATH: {
            mathStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.TABLE: {
            tableStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.INPUT: {
            inputStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.PARAM:
        case html_js_1$1.TAG_ID.TRACK:
        case html_js_1$1.TAG_ID.SOURCE: {
            paramStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.IMAGE: {
            imageStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.BUTTON: {
            buttonStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.APPLET:
        case html_js_1$1.TAG_ID.OBJECT:
        case html_js_1$1.TAG_ID.MARQUEE: {
            appletStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.IFRAME: {
            iframeStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.SELECT: {
            selectStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.OPTION:
        case html_js_1$1.TAG_ID.OPTGROUP: {
            optgroupStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.NOEMBED: {
            noembedStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.FRAMESET: {
            framesetStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.TEXTAREA: {
            textareaStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.NOSCRIPT: {
            if (p.options.scriptingEnabled) {
                noembedStartTagInBody(p, token);
            }
            else {
                genericStartTagInBody(p, token);
            }
            break;
        }
        case html_js_1$1.TAG_ID.PLAINTEXT: {
            plaintextStartTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.COL:
        case html_js_1$1.TAG_ID.TH:
        case html_js_1$1.TAG_ID.TD:
        case html_js_1$1.TAG_ID.TR:
        case html_js_1$1.TAG_ID.HEAD:
        case html_js_1$1.TAG_ID.FRAME:
        case html_js_1$1.TAG_ID.TBODY:
        case html_js_1$1.TAG_ID.TFOOT:
        case html_js_1$1.TAG_ID.THEAD:
        case html_js_1$1.TAG_ID.CAPTION:
        case html_js_1$1.TAG_ID.COLGROUP: {
            // Ignore token
            break;
        }
        default: {
            genericStartTagInBody(p, token);
        }
    }
}
function bodyEndTagInBody(p, token) {
    if (p.openElements.hasInScope(html_js_1$1.TAG_ID.BODY)) {
        p.insertionMode = InsertionMode.AFTER_BODY;
        //NOTE: <body> is never popped from the stack, so we need to updated
        //the end location explicitly.
        if (p.options.sourceCodeLocationInfo) {
            const bodyElement = p.openElements.tryPeekProperlyNestedBodyElement();
            if (bodyElement) {
                p._setEndLocation(bodyElement, token);
            }
        }
    }
}
function htmlEndTagInBody(p, token) {
    if (p.openElements.hasInScope(html_js_1$1.TAG_ID.BODY)) {
        p.insertionMode = InsertionMode.AFTER_BODY;
        endTagAfterBody(p, token);
    }
}
function addressEndTagInBody(p, token) {
    const tn = token.tagID;
    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
    }
}
function formEndTagInBody(p) {
    const inTemplate = p.openElements.tmplCount > 0;
    const { formElement } = p;
    if (!inTemplate) {
        p.formElement = null;
    }
    if ((formElement || inTemplate) && p.openElements.hasInScope(html_js_1$1.TAG_ID.FORM)) {
        p.openElements.generateImpliedEndTags();
        if (inTemplate) {
            p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.FORM);
        }
        else if (formElement) {
            p.openElements.remove(formElement);
        }
    }
}
function pEndTagInBody(p) {
    if (!p.openElements.hasInButtonScope(html_js_1$1.TAG_ID.P)) {
        p._insertFakeElement(html_js_1$1.TAG_NAMES.P, html_js_1$1.TAG_ID.P);
    }
    p._closePElement();
}
function liEndTagInBody(p) {
    if (p.openElements.hasInListItemScope(html_js_1$1.TAG_ID.LI)) {
        p.openElements.generateImpliedEndTagsWithExclusion(html_js_1$1.TAG_ID.LI);
        p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.LI);
    }
}
function ddEndTagInBody(p, token) {
    const tn = token.tagID;
    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTagsWithExclusion(tn);
        p.openElements.popUntilTagNamePopped(tn);
    }
}
function numberedHeaderEndTagInBody(p) {
    if (p.openElements.hasNumberedHeaderInScope()) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilNumberedHeaderPopped();
    }
}
function appletEndTagInBody(p, token) {
    const tn = token.tagID;
    if (p.openElements.hasInScope(tn)) {
        p.openElements.generateImpliedEndTags();
        p.openElements.popUntilTagNamePopped(tn);
        p.activeFormattingElements.clearToLastMarker();
    }
}
function brEndTagInBody(p) {
    p._reconstructActiveFormattingElements();
    p._insertFakeElement(html_js_1$1.TAG_NAMES.BR, html_js_1$1.TAG_ID.BR);
    p.openElements.pop();
    p.framesetOk = false;
}
function genericEndTagInBody(p, token) {
    const tn = token.tagName;
    const tid = token.tagID;
    for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        const elementId = p.openElements.tagIDs[i];
        // Compare the tag name here, as the tag might not be a known tag with an ID.
        if (tid === elementId && (tid !== html_js_1$1.TAG_ID.UNKNOWN || p.treeAdapter.getTagName(element) === tn)) {
            p.openElements.generateImpliedEndTagsWithExclusion(tid);
            if (p.openElements.stackTop >= i)
                p.openElements.shortenToLength(i);
            break;
        }
        if (p._isSpecialElement(element, elementId)) {
            break;
        }
    }
}
function endTagInBody(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.A:
        case html_js_1$1.TAG_ID.B:
        case html_js_1$1.TAG_ID.I:
        case html_js_1$1.TAG_ID.S:
        case html_js_1$1.TAG_ID.U:
        case html_js_1$1.TAG_ID.EM:
        case html_js_1$1.TAG_ID.TT:
        case html_js_1$1.TAG_ID.BIG:
        case html_js_1$1.TAG_ID.CODE:
        case html_js_1$1.TAG_ID.FONT:
        case html_js_1$1.TAG_ID.NOBR:
        case html_js_1$1.TAG_ID.SMALL:
        case html_js_1$1.TAG_ID.STRIKE:
        case html_js_1$1.TAG_ID.STRONG: {
            callAdoptionAgency(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.P: {
            pEndTagInBody(p);
            break;
        }
        case html_js_1$1.TAG_ID.DL:
        case html_js_1$1.TAG_ID.UL:
        case html_js_1$1.TAG_ID.OL:
        case html_js_1$1.TAG_ID.DIR:
        case html_js_1$1.TAG_ID.DIV:
        case html_js_1$1.TAG_ID.NAV:
        case html_js_1$1.TAG_ID.PRE:
        case html_js_1$1.TAG_ID.MAIN:
        case html_js_1$1.TAG_ID.MENU:
        case html_js_1$1.TAG_ID.ASIDE:
        case html_js_1$1.TAG_ID.CENTER:
        case html_js_1$1.TAG_ID.FIGURE:
        case html_js_1$1.TAG_ID.FOOTER:
        case html_js_1$1.TAG_ID.HEADER:
        case html_js_1$1.TAG_ID.HGROUP:
        case html_js_1$1.TAG_ID.DIALOG:
        case html_js_1$1.TAG_ID.ADDRESS:
        case html_js_1$1.TAG_ID.ARTICLE:
        case html_js_1$1.TAG_ID.DETAILS:
        case html_js_1$1.TAG_ID.SECTION:
        case html_js_1$1.TAG_ID.SUMMARY:
        case html_js_1$1.TAG_ID.LISTING:
        case html_js_1$1.TAG_ID.FIELDSET:
        case html_js_1$1.TAG_ID.BLOCKQUOTE:
        case html_js_1$1.TAG_ID.FIGCAPTION: {
            addressEndTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.LI: {
            liEndTagInBody(p);
            break;
        }
        case html_js_1$1.TAG_ID.DD:
        case html_js_1$1.TAG_ID.DT: {
            ddEndTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.H1:
        case html_js_1$1.TAG_ID.H2:
        case html_js_1$1.TAG_ID.H3:
        case html_js_1$1.TAG_ID.H4:
        case html_js_1$1.TAG_ID.H5:
        case html_js_1$1.TAG_ID.H6: {
            numberedHeaderEndTagInBody(p);
            break;
        }
        case html_js_1$1.TAG_ID.BR: {
            brEndTagInBody(p);
            break;
        }
        case html_js_1$1.TAG_ID.BODY: {
            bodyEndTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.HTML: {
            htmlEndTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.FORM: {
            formEndTagInBody(p);
            break;
        }
        case html_js_1$1.TAG_ID.APPLET:
        case html_js_1$1.TAG_ID.OBJECT:
        case html_js_1$1.TAG_ID.MARQUEE: {
            appletEndTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.TEMPLATE: {
            endTagInHead(p, token);
            break;
        }
        default: {
            genericEndTagInBody(p, token);
        }
    }
}
function eofInBody(p, token) {
    if (p.tmplInsertionModeStack.length > 0) {
        eofInTemplate(p, token);
    }
    else {
        stopParsing(p, token);
    }
}
// The "text" insertion mode
//------------------------------------------------------------------
function endTagInText(p, token) {
    var _a;
    if (token.tagID === html_js_1$1.TAG_ID.SCRIPT) {
        (_a = p.scriptHandler) === null || _a === void 0 ? void 0 : _a.call(p, p.openElements.current);
    }
    p.openElements.pop();
    p.insertionMode = p.originalInsertionMode;
}
function eofInText(p, token) {
    p._err(token, error_codes_js_1.ERR.eofInElementThatCanContainOnlyText);
    p.openElements.pop();
    p.insertionMode = p.originalInsertionMode;
    p.onEof(token);
}
// The "in table" insertion mode
//------------------------------------------------------------------
function characterInTable(p, token) {
    if (TABLE_STRUCTURE_TAGS.has(p.openElements.currentTagId)) {
        p.pendingCharacterTokens.length = 0;
        p.hasNonWhitespacePendingCharacterToken = false;
        p.originalInsertionMode = p.insertionMode;
        p.insertionMode = InsertionMode.IN_TABLE_TEXT;
        switch (token.type) {
            case token_js_1.TokenType.CHARACTER: {
                characterInTableText(p, token);
                break;
            }
            case token_js_1.TokenType.WHITESPACE_CHARACTER: {
                whitespaceCharacterInTableText(p, token);
                break;
            }
            // Ignore null
        }
    }
    else {
        tokenInTable(p, token);
    }
}
function captionStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p.activeFormattingElements.insertMarker();
    p._insertElement(token, html_js_1$1.NS.HTML);
    p.insertionMode = InsertionMode.IN_CAPTION;
}
function colgroupStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertElement(token, html_js_1$1.NS.HTML);
    p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
}
function colStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertFakeElement(html_js_1$1.TAG_NAMES.COLGROUP, html_js_1$1.TAG_ID.COLGROUP);
    p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
    startTagInColumnGroup(p, token);
}
function tbodyStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertElement(token, html_js_1$1.NS.HTML);
    p.insertionMode = InsertionMode.IN_TABLE_BODY;
}
function tdStartTagInTable(p, token) {
    p.openElements.clearBackToTableContext();
    p._insertFakeElement(html_js_1$1.TAG_NAMES.TBODY, html_js_1$1.TAG_ID.TBODY);
    p.insertionMode = InsertionMode.IN_TABLE_BODY;
    startTagInTableBody(p, token);
}
function tableStartTagInTable(p, token) {
    if (p.openElements.hasInTableScope(html_js_1$1.TAG_ID.TABLE)) {
        p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.TABLE);
        p._resetInsertionMode();
        p._processStartTag(token);
    }
}
function inputStartTagInTable(p, token) {
    if (isHiddenInput(token)) {
        p._appendElement(token, html_js_1$1.NS.HTML);
    }
    else {
        tokenInTable(p, token);
    }
    token.ackSelfClosing = true;
}
function formStartTagInTable(p, token) {
    if (!p.formElement && p.openElements.tmplCount === 0) {
        p._insertElement(token, html_js_1$1.NS.HTML);
        p.formElement = p.openElements.current;
        p.openElements.pop();
    }
}
function startTagInTable(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.TD:
        case html_js_1$1.TAG_ID.TH:
        case html_js_1$1.TAG_ID.TR: {
            tdStartTagInTable(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.STYLE:
        case html_js_1$1.TAG_ID.SCRIPT:
        case html_js_1$1.TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.COL: {
            colStartTagInTable(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.FORM: {
            formStartTagInTable(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.TABLE: {
            tableStartTagInTable(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.TBODY:
        case html_js_1$1.TAG_ID.TFOOT:
        case html_js_1$1.TAG_ID.THEAD: {
            tbodyStartTagInTable(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.INPUT: {
            inputStartTagInTable(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.CAPTION: {
            captionStartTagInTable(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.COLGROUP: {
            colgroupStartTagInTable(p, token);
            break;
        }
        default: {
            tokenInTable(p, token);
        }
    }
}
function endTagInTable(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.TABLE: {
            if (p.openElements.hasInTableScope(html_js_1$1.TAG_ID.TABLE)) {
                p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.TABLE);
                p._resetInsertionMode();
            }
            break;
        }
        case html_js_1$1.TAG_ID.TEMPLATE: {
            endTagInHead(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.BODY:
        case html_js_1$1.TAG_ID.CAPTION:
        case html_js_1$1.TAG_ID.COL:
        case html_js_1$1.TAG_ID.COLGROUP:
        case html_js_1$1.TAG_ID.HTML:
        case html_js_1$1.TAG_ID.TBODY:
        case html_js_1$1.TAG_ID.TD:
        case html_js_1$1.TAG_ID.TFOOT:
        case html_js_1$1.TAG_ID.TH:
        case html_js_1$1.TAG_ID.THEAD:
        case html_js_1$1.TAG_ID.TR: {
            // Ignore token
            break;
        }
        default: {
            tokenInTable(p, token);
        }
    }
}
function tokenInTable(p, token) {
    const savedFosterParentingState = p.fosterParentingEnabled;
    p.fosterParentingEnabled = true;
    // Process token in `In Body` mode
    modeInBody(p, token);
    p.fosterParentingEnabled = savedFosterParentingState;
}
// The "in table text" insertion mode
//------------------------------------------------------------------
function whitespaceCharacterInTableText(p, token) {
    p.pendingCharacterTokens.push(token);
}
function characterInTableText(p, token) {
    p.pendingCharacterTokens.push(token);
    p.hasNonWhitespacePendingCharacterToken = true;
}
function tokenInTableText(p, token) {
    let i = 0;
    if (p.hasNonWhitespacePendingCharacterToken) {
        for (; i < p.pendingCharacterTokens.length; i++) {
            tokenInTable(p, p.pendingCharacterTokens[i]);
        }
    }
    else {
        for (; i < p.pendingCharacterTokens.length; i++) {
            p._insertCharacters(p.pendingCharacterTokens[i]);
        }
    }
    p.insertionMode = p.originalInsertionMode;
    p._processToken(token);
}
// The "in caption" insertion mode
//------------------------------------------------------------------
const TABLE_VOID_ELEMENTS = new Set([html_js_1$1.TAG_ID.CAPTION, html_js_1$1.TAG_ID.COL, html_js_1$1.TAG_ID.COLGROUP, html_js_1$1.TAG_ID.TBODY, html_js_1$1.TAG_ID.TD, html_js_1$1.TAG_ID.TFOOT, html_js_1$1.TAG_ID.TH, html_js_1$1.TAG_ID.THEAD, html_js_1$1.TAG_ID.TR]);
function startTagInCaption(p, token) {
    const tn = token.tagID;
    if (TABLE_VOID_ELEMENTS.has(tn)) {
        if (p.openElements.hasInTableScope(html_js_1$1.TAG_ID.CAPTION)) {
            p.openElements.generateImpliedEndTags();
            p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.CAPTION);
            p.activeFormattingElements.clearToLastMarker();
            p.insertionMode = InsertionMode.IN_TABLE;
            startTagInTable(p, token);
        }
    }
    else {
        startTagInBody(p, token);
    }
}
function endTagInCaption(p, token) {
    const tn = token.tagID;
    switch (tn) {
        case html_js_1$1.TAG_ID.CAPTION:
        case html_js_1$1.TAG_ID.TABLE: {
            if (p.openElements.hasInTableScope(html_js_1$1.TAG_ID.CAPTION)) {
                p.openElements.generateImpliedEndTags();
                p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.CAPTION);
                p.activeFormattingElements.clearToLastMarker();
                p.insertionMode = InsertionMode.IN_TABLE;
                if (tn === html_js_1$1.TAG_ID.TABLE) {
                    endTagInTable(p, token);
                }
            }
            break;
        }
        case html_js_1$1.TAG_ID.BODY:
        case html_js_1$1.TAG_ID.COL:
        case html_js_1$1.TAG_ID.COLGROUP:
        case html_js_1$1.TAG_ID.HTML:
        case html_js_1$1.TAG_ID.TBODY:
        case html_js_1$1.TAG_ID.TD:
        case html_js_1$1.TAG_ID.TFOOT:
        case html_js_1$1.TAG_ID.TH:
        case html_js_1$1.TAG_ID.THEAD:
        case html_js_1$1.TAG_ID.TR: {
            // Ignore token
            break;
        }
        default: {
            endTagInBody(p, token);
        }
    }
}
// The "in column group" insertion mode
//------------------------------------------------------------------
function startTagInColumnGroup(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.COL: {
            p._appendElement(token, html_js_1$1.NS.HTML);
            token.ackSelfClosing = true;
            break;
        }
        case html_js_1$1.TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
        }
        default: {
            tokenInColumnGroup(p, token);
        }
    }
}
function endTagInColumnGroup(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.COLGROUP: {
            if (p.openElements.currentTagId === html_js_1$1.TAG_ID.COLGROUP) {
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE;
            }
            break;
        }
        case html_js_1$1.TAG_ID.TEMPLATE: {
            endTagInHead(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.COL: {
            // Ignore token
            break;
        }
        default: {
            tokenInColumnGroup(p, token);
        }
    }
}
function tokenInColumnGroup(p, token) {
    if (p.openElements.currentTagId === html_js_1$1.TAG_ID.COLGROUP) {
        p.openElements.pop();
        p.insertionMode = InsertionMode.IN_TABLE;
        p._processToken(token);
    }
}
// The "in table body" insertion mode
//------------------------------------------------------------------
function startTagInTableBody(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.TR: {
            p.openElements.clearBackToTableBodyContext();
            p._insertElement(token, html_js_1$1.NS.HTML);
            p.insertionMode = InsertionMode.IN_ROW;
            break;
        }
        case html_js_1$1.TAG_ID.TH:
        case html_js_1$1.TAG_ID.TD: {
            p.openElements.clearBackToTableBodyContext();
            p._insertFakeElement(html_js_1$1.TAG_NAMES.TR, html_js_1$1.TAG_ID.TR);
            p.insertionMode = InsertionMode.IN_ROW;
            startTagInRow(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.CAPTION:
        case html_js_1$1.TAG_ID.COL:
        case html_js_1$1.TAG_ID.COLGROUP:
        case html_js_1$1.TAG_ID.TBODY:
        case html_js_1$1.TAG_ID.TFOOT:
        case html_js_1$1.TAG_ID.THEAD: {
            if (p.openElements.hasTableBodyContextInTableScope()) {
                p.openElements.clearBackToTableBodyContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE;
                startTagInTable(p, token);
            }
            break;
        }
        default: {
            startTagInTable(p, token);
        }
    }
}
function endTagInTableBody(p, token) {
    const tn = token.tagID;
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.TBODY:
        case html_js_1$1.TAG_ID.TFOOT:
        case html_js_1$1.TAG_ID.THEAD: {
            if (p.openElements.hasInTableScope(tn)) {
                p.openElements.clearBackToTableBodyContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE;
            }
            break;
        }
        case html_js_1$1.TAG_ID.TABLE: {
            if (p.openElements.hasTableBodyContextInTableScope()) {
                p.openElements.clearBackToTableBodyContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE;
                endTagInTable(p, token);
            }
            break;
        }
        case html_js_1$1.TAG_ID.BODY:
        case html_js_1$1.TAG_ID.CAPTION:
        case html_js_1$1.TAG_ID.COL:
        case html_js_1$1.TAG_ID.COLGROUP:
        case html_js_1$1.TAG_ID.HTML:
        case html_js_1$1.TAG_ID.TD:
        case html_js_1$1.TAG_ID.TH:
        case html_js_1$1.TAG_ID.TR: {
            // Ignore token
            break;
        }
        default: {
            endTagInTable(p, token);
        }
    }
}
// The "in row" insertion mode
//------------------------------------------------------------------
function startTagInRow(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.TH:
        case html_js_1$1.TAG_ID.TD: {
            p.openElements.clearBackToTableRowContext();
            p._insertElement(token, html_js_1$1.NS.HTML);
            p.insertionMode = InsertionMode.IN_CELL;
            p.activeFormattingElements.insertMarker();
            break;
        }
        case html_js_1$1.TAG_ID.CAPTION:
        case html_js_1$1.TAG_ID.COL:
        case html_js_1$1.TAG_ID.COLGROUP:
        case html_js_1$1.TAG_ID.TBODY:
        case html_js_1$1.TAG_ID.TFOOT:
        case html_js_1$1.TAG_ID.THEAD:
        case html_js_1$1.TAG_ID.TR: {
            if (p.openElements.hasInTableScope(html_js_1$1.TAG_ID.TR)) {
                p.openElements.clearBackToTableRowContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE_BODY;
                startTagInTableBody(p, token);
            }
            break;
        }
        default: {
            startTagInTable(p, token);
        }
    }
}
function endTagInRow(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.TR: {
            if (p.openElements.hasInTableScope(html_js_1$1.TAG_ID.TR)) {
                p.openElements.clearBackToTableRowContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE_BODY;
            }
            break;
        }
        case html_js_1$1.TAG_ID.TABLE: {
            if (p.openElements.hasInTableScope(html_js_1$1.TAG_ID.TR)) {
                p.openElements.clearBackToTableRowContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE_BODY;
                endTagInTableBody(p, token);
            }
            break;
        }
        case html_js_1$1.TAG_ID.TBODY:
        case html_js_1$1.TAG_ID.TFOOT:
        case html_js_1$1.TAG_ID.THEAD: {
            if (p.openElements.hasInTableScope(token.tagID) || p.openElements.hasInTableScope(html_js_1$1.TAG_ID.TR)) {
                p.openElements.clearBackToTableRowContext();
                p.openElements.pop();
                p.insertionMode = InsertionMode.IN_TABLE_BODY;
                endTagInTableBody(p, token);
            }
            break;
        }
        case html_js_1$1.TAG_ID.BODY:
        case html_js_1$1.TAG_ID.CAPTION:
        case html_js_1$1.TAG_ID.COL:
        case html_js_1$1.TAG_ID.COLGROUP:
        case html_js_1$1.TAG_ID.HTML:
        case html_js_1$1.TAG_ID.TD:
        case html_js_1$1.TAG_ID.TH: {
            // Ignore end tag
            break;
        }
        default:
            endTagInTable(p, token);
    }
}
// The "in cell" insertion mode
//------------------------------------------------------------------
function startTagInCell(p, token) {
    const tn = token.tagID;
    if (TABLE_VOID_ELEMENTS.has(tn)) {
        if (p.openElements.hasInTableScope(html_js_1$1.TAG_ID.TD) || p.openElements.hasInTableScope(html_js_1$1.TAG_ID.TH)) {
            p._closeTableCell();
            startTagInRow(p, token);
        }
    }
    else {
        startTagInBody(p, token);
    }
}
function endTagInCell(p, token) {
    const tn = token.tagID;
    switch (tn) {
        case html_js_1$1.TAG_ID.TD:
        case html_js_1$1.TAG_ID.TH: {
            if (p.openElements.hasInTableScope(tn)) {
                p.openElements.generateImpliedEndTags();
                p.openElements.popUntilTagNamePopped(tn);
                p.activeFormattingElements.clearToLastMarker();
                p.insertionMode = InsertionMode.IN_ROW;
            }
            break;
        }
        case html_js_1$1.TAG_ID.TABLE:
        case html_js_1$1.TAG_ID.TBODY:
        case html_js_1$1.TAG_ID.TFOOT:
        case html_js_1$1.TAG_ID.THEAD:
        case html_js_1$1.TAG_ID.TR: {
            if (p.openElements.hasInTableScope(tn)) {
                p._closeTableCell();
                endTagInRow(p, token);
            }
            break;
        }
        case html_js_1$1.TAG_ID.BODY:
        case html_js_1$1.TAG_ID.CAPTION:
        case html_js_1$1.TAG_ID.COL:
        case html_js_1$1.TAG_ID.COLGROUP:
        case html_js_1$1.TAG_ID.HTML: {
            // Ignore token
            break;
        }
        default: {
            endTagInBody(p, token);
        }
    }
}
// The "in select" insertion mode
//------------------------------------------------------------------
function startTagInSelect(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.OPTION: {
            if (p.openElements.currentTagId === html_js_1$1.TAG_ID.OPTION) {
                p.openElements.pop();
            }
            p._insertElement(token, html_js_1$1.NS.HTML);
            break;
        }
        case html_js_1$1.TAG_ID.OPTGROUP: {
            if (p.openElements.currentTagId === html_js_1$1.TAG_ID.OPTION) {
                p.openElements.pop();
            }
            if (p.openElements.currentTagId === html_js_1$1.TAG_ID.OPTGROUP) {
                p.openElements.pop();
            }
            p._insertElement(token, html_js_1$1.NS.HTML);
            break;
        }
        case html_js_1$1.TAG_ID.INPUT:
        case html_js_1$1.TAG_ID.KEYGEN:
        case html_js_1$1.TAG_ID.TEXTAREA:
        case html_js_1$1.TAG_ID.SELECT: {
            if (p.openElements.hasInSelectScope(html_js_1$1.TAG_ID.SELECT)) {
                p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.SELECT);
                p._resetInsertionMode();
                if (token.tagID !== html_js_1$1.TAG_ID.SELECT) {
                    p._processStartTag(token);
                }
            }
            break;
        }
        case html_js_1$1.TAG_ID.SCRIPT:
        case html_js_1$1.TAG_ID.TEMPLATE: {
            startTagInHead(p, token);
            break;
        }
        // Do nothing
    }
}
function endTagInSelect(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.OPTGROUP: {
            if (p.openElements.stackTop > 0 &&
                p.openElements.currentTagId === html_js_1$1.TAG_ID.OPTION &&
                p.openElements.tagIDs[p.openElements.stackTop - 1] === html_js_1$1.TAG_ID.OPTGROUP) {
                p.openElements.pop();
            }
            if (p.openElements.currentTagId === html_js_1$1.TAG_ID.OPTGROUP) {
                p.openElements.pop();
            }
            break;
        }
        case html_js_1$1.TAG_ID.OPTION: {
            if (p.openElements.currentTagId === html_js_1$1.TAG_ID.OPTION) {
                p.openElements.pop();
            }
            break;
        }
        case html_js_1$1.TAG_ID.SELECT: {
            if (p.openElements.hasInSelectScope(html_js_1$1.TAG_ID.SELECT)) {
                p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.SELECT);
                p._resetInsertionMode();
            }
            break;
        }
        case html_js_1$1.TAG_ID.TEMPLATE: {
            endTagInHead(p, token);
            break;
        }
        // Do nothing
    }
}
// The "in select in table" insertion mode
//------------------------------------------------------------------
function startTagInSelectInTable(p, token) {
    const tn = token.tagID;
    if (tn === html_js_1$1.TAG_ID.CAPTION ||
        tn === html_js_1$1.TAG_ID.TABLE ||
        tn === html_js_1$1.TAG_ID.TBODY ||
        tn === html_js_1$1.TAG_ID.TFOOT ||
        tn === html_js_1$1.TAG_ID.THEAD ||
        tn === html_js_1$1.TAG_ID.TR ||
        tn === html_js_1$1.TAG_ID.TD ||
        tn === html_js_1$1.TAG_ID.TH) {
        p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.SELECT);
        p._resetInsertionMode();
        p._processStartTag(token);
    }
    else {
        startTagInSelect(p, token);
    }
}
function endTagInSelectInTable(p, token) {
    const tn = token.tagID;
    if (tn === html_js_1$1.TAG_ID.CAPTION ||
        tn === html_js_1$1.TAG_ID.TABLE ||
        tn === html_js_1$1.TAG_ID.TBODY ||
        tn === html_js_1$1.TAG_ID.TFOOT ||
        tn === html_js_1$1.TAG_ID.THEAD ||
        tn === html_js_1$1.TAG_ID.TR ||
        tn === html_js_1$1.TAG_ID.TD ||
        tn === html_js_1$1.TAG_ID.TH) {
        if (p.openElements.hasInTableScope(tn)) {
            p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.SELECT);
            p._resetInsertionMode();
            p.onEndTag(token);
        }
    }
    else {
        endTagInSelect(p, token);
    }
}
// The "in template" insertion mode
//------------------------------------------------------------------
function startTagInTemplate(p, token) {
    switch (token.tagID) {
        // First, handle tags that can start without a mode change
        case html_js_1$1.TAG_ID.BASE:
        case html_js_1$1.TAG_ID.BASEFONT:
        case html_js_1$1.TAG_ID.BGSOUND:
        case html_js_1$1.TAG_ID.LINK:
        case html_js_1$1.TAG_ID.META:
        case html_js_1$1.TAG_ID.NOFRAMES:
        case html_js_1$1.TAG_ID.SCRIPT:
        case html_js_1$1.TAG_ID.STYLE:
        case html_js_1$1.TAG_ID.TEMPLATE:
        case html_js_1$1.TAG_ID.TITLE:
            startTagInHead(p, token);
            break;
        // Re-process the token in the appropriate mode
        case html_js_1$1.TAG_ID.CAPTION:
        case html_js_1$1.TAG_ID.COLGROUP:
        case html_js_1$1.TAG_ID.TBODY:
        case html_js_1$1.TAG_ID.TFOOT:
        case html_js_1$1.TAG_ID.THEAD:
            p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE;
            p.insertionMode = InsertionMode.IN_TABLE;
            startTagInTable(p, token);
            break;
        case html_js_1$1.TAG_ID.COL:
            p.tmplInsertionModeStack[0] = InsertionMode.IN_COLUMN_GROUP;
            p.insertionMode = InsertionMode.IN_COLUMN_GROUP;
            startTagInColumnGroup(p, token);
            break;
        case html_js_1$1.TAG_ID.TR:
            p.tmplInsertionModeStack[0] = InsertionMode.IN_TABLE_BODY;
            p.insertionMode = InsertionMode.IN_TABLE_BODY;
            startTagInTableBody(p, token);
            break;
        case html_js_1$1.TAG_ID.TD:
        case html_js_1$1.TAG_ID.TH:
            p.tmplInsertionModeStack[0] = InsertionMode.IN_ROW;
            p.insertionMode = InsertionMode.IN_ROW;
            startTagInRow(p, token);
            break;
        default:
            p.tmplInsertionModeStack[0] = InsertionMode.IN_BODY;
            p.insertionMode = InsertionMode.IN_BODY;
            startTagInBody(p, token);
    }
}
function endTagInTemplate(p, token) {
    if (token.tagID === html_js_1$1.TAG_ID.TEMPLATE) {
        endTagInHead(p, token);
    }
}
function eofInTemplate(p, token) {
    if (p.openElements.tmplCount > 0) {
        p.openElements.popUntilTagNamePopped(html_js_1$1.TAG_ID.TEMPLATE);
        p.activeFormattingElements.clearToLastMarker();
        p.tmplInsertionModeStack.shift();
        p._resetInsertionMode();
        p.onEof(token);
    }
    else {
        stopParsing(p, token);
    }
}
// The "after body" insertion mode
//------------------------------------------------------------------
function startTagAfterBody(p, token) {
    if (token.tagID === html_js_1$1.TAG_ID.HTML) {
        startTagInBody(p, token);
    }
    else {
        tokenAfterBody(p, token);
    }
}
function endTagAfterBody(p, token) {
    var _a;
    if (token.tagID === html_js_1$1.TAG_ID.HTML) {
        if (!p.fragmentContext) {
            p.insertionMode = InsertionMode.AFTER_AFTER_BODY;
        }
        //NOTE: <html> is never popped from the stack, so we need to updated
        //the end location explicitly.
        if (p.options.sourceCodeLocationInfo && p.openElements.tagIDs[0] === html_js_1$1.TAG_ID.HTML) {
            p._setEndLocation(p.openElements.items[0], token);
            // Update the body element, if it doesn't have an end tag
            const bodyElement = p.openElements.items[1];
            if (bodyElement && !((_a = p.treeAdapter.getNodeSourceCodeLocation(bodyElement)) === null || _a === void 0 ? void 0 : _a.endTag)) {
                p._setEndLocation(bodyElement, token);
            }
        }
    }
    else {
        tokenAfterBody(p, token);
    }
}
function tokenAfterBody(p, token) {
    p.insertionMode = InsertionMode.IN_BODY;
    modeInBody(p, token);
}
// The "in frameset" insertion mode
//------------------------------------------------------------------
function startTagInFrameset(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.FRAMESET: {
            p._insertElement(token, html_js_1$1.NS.HTML);
            break;
        }
        case html_js_1$1.TAG_ID.FRAME: {
            p._appendElement(token, html_js_1$1.NS.HTML);
            token.ackSelfClosing = true;
            break;
        }
        case html_js_1$1.TAG_ID.NOFRAMES: {
            startTagInHead(p, token);
            break;
        }
        // Do nothing
    }
}
function endTagInFrameset(p, token) {
    if (token.tagID === html_js_1$1.TAG_ID.FRAMESET && !p.openElements.isRootHtmlElementCurrent()) {
        p.openElements.pop();
        if (!p.fragmentContext && p.openElements.currentTagId !== html_js_1$1.TAG_ID.FRAMESET) {
            p.insertionMode = InsertionMode.AFTER_FRAMESET;
        }
    }
}
// The "after frameset" insertion mode
//------------------------------------------------------------------
function startTagAfterFrameset(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.NOFRAMES: {
            startTagInHead(p, token);
            break;
        }
        // Do nothing
    }
}
function endTagAfterFrameset(p, token) {
    if (token.tagID === html_js_1$1.TAG_ID.HTML) {
        p.insertionMode = InsertionMode.AFTER_AFTER_FRAMESET;
    }
}
// The "after after body" insertion mode
//------------------------------------------------------------------
function startTagAfterAfterBody(p, token) {
    if (token.tagID === html_js_1$1.TAG_ID.HTML) {
        startTagInBody(p, token);
    }
    else {
        tokenAfterAfterBody(p, token);
    }
}
function tokenAfterAfterBody(p, token) {
    p.insertionMode = InsertionMode.IN_BODY;
    modeInBody(p, token);
}
// The "after after frameset" insertion mode
//------------------------------------------------------------------
function startTagAfterAfterFrameset(p, token) {
    switch (token.tagID) {
        case html_js_1$1.TAG_ID.HTML: {
            startTagInBody(p, token);
            break;
        }
        case html_js_1$1.TAG_ID.NOFRAMES: {
            startTagInHead(p, token);
            break;
        }
        // Do nothing
    }
}
// The rules for parsing tokens in foreign content
//------------------------------------------------------------------
function nullCharacterInForeignContent(p, token) {
    token.chars = unicode.REPLACEMENT_CHARACTER;
    p._insertCharacters(token);
}
function characterInForeignContent(p, token) {
    p._insertCharacters(token);
    p.framesetOk = false;
}
function popUntilHtmlOrIntegrationPoint(p) {
    while (p.treeAdapter.getNamespaceURI(p.openElements.current) !== html_js_1$1.NS.HTML &&
        !p._isIntegrationPoint(p.openElements.currentTagId, p.openElements.current)) {
        p.openElements.pop();
    }
}
function startTagInForeignContent(p, token) {
    if (foreignContent.causesExit(token)) {
        popUntilHtmlOrIntegrationPoint(p);
        p._startTagOutsideForeignContent(token);
    }
    else {
        const current = p._getAdjustedCurrentElement();
        const currentNs = p.treeAdapter.getNamespaceURI(current);
        if (currentNs === html_js_1$1.NS.MATHML) {
            foreignContent.adjustTokenMathMLAttrs(token);
        }
        else if (currentNs === html_js_1$1.NS.SVG) {
            foreignContent.adjustTokenSVGTagName(token);
            foreignContent.adjustTokenSVGAttrs(token);
        }
        foreignContent.adjustTokenXMLAttrs(token);
        if (token.selfClosing) {
            p._appendElement(token, currentNs);
        }
        else {
            p._insertElement(token, currentNs);
        }
        token.ackSelfClosing = true;
    }
}
function endTagInForeignContent(p, token) {
    if (token.tagID === html_js_1$1.TAG_ID.P || token.tagID === html_js_1$1.TAG_ID.BR) {
        popUntilHtmlOrIntegrationPoint(p);
        p._endTagOutsideForeignContent(token);
        return;
    }
    for (let i = p.openElements.stackTop; i > 0; i--) {
        const element = p.openElements.items[i];
        if (p.treeAdapter.getNamespaceURI(element) === html_js_1$1.NS.HTML) {
            p._endTagOutsideForeignContent(token);
            break;
        }
        const tagName = p.treeAdapter.getTagName(element);
        if (tagName.toLowerCase() === token.tagName) {
            //NOTE: update the token tag name for `_setEndLocation`.
            token.tagName = tagName;
            p.openElements.shortenToLength(i);
            break;
        }
    }
}

var serializer = {};

Object.defineProperty(serializer, "__esModule", { value: true });
serializer.serializeOuter = serializer.serialize = void 0;
const html_js_1 = html;
const escape_js_1 = _escape;
const default_js_1 = _default;
// Sets
const VOID_ELEMENTS = new Set([
    html_js_1.TAG_NAMES.AREA,
    html_js_1.TAG_NAMES.BASE,
    html_js_1.TAG_NAMES.BASEFONT,
    html_js_1.TAG_NAMES.BGSOUND,
    html_js_1.TAG_NAMES.BR,
    html_js_1.TAG_NAMES.COL,
    html_js_1.TAG_NAMES.EMBED,
    html_js_1.TAG_NAMES.FRAME,
    html_js_1.TAG_NAMES.HR,
    html_js_1.TAG_NAMES.IMG,
    html_js_1.TAG_NAMES.INPUT,
    html_js_1.TAG_NAMES.KEYGEN,
    html_js_1.TAG_NAMES.LINK,
    html_js_1.TAG_NAMES.META,
    html_js_1.TAG_NAMES.PARAM,
    html_js_1.TAG_NAMES.SOURCE,
    html_js_1.TAG_NAMES.TRACK,
    html_js_1.TAG_NAMES.WBR,
]);
function isVoidElement(node, options) {
    return (options.treeAdapter.isElementNode(node) &&
        options.treeAdapter.getNamespaceURI(node) === html_js_1.NS.HTML &&
        VOID_ELEMENTS.has(options.treeAdapter.getTagName(node)));
}
const defaultOpts = { treeAdapter: default_js_1.defaultTreeAdapter, scriptingEnabled: true };
/**
 * Serializes an AST node to an HTML string.
 *
 * @example
 *
 * ```js
 * const parse5 = require('parse5');
 *
 * const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
 *
 * // Serializes a document.
 * const html = parse5.serialize(document);
 *
 * // Serializes the <html> element content.
 * const str = parse5.serialize(document.childNodes[1]);
 *
 * console.log(str); //> '<head></head><body>Hi there!</body>'
 * ```
 *
 * @param node Node to serialize.
 * @param options Serialization options.
 */
function serialize(node, options) {
    const opts = Object.assign(Object.assign({}, defaultOpts), options);
    if (isVoidElement(node, opts)) {
        return '';
    }
    return serializeChildNodes(node, opts);
}
serializer.serialize = serialize;
/**
 * Serializes an AST element node to an HTML string, including the element node.
 *
 * @example
 *
 * ```js
 * const parse5 = require('parse5');
 *
 * const document = parse5.parseFragment('<div>Hello, <b>world</b>!</div>');
 *
 * // Serializes the <div> element.
 * const html = parse5.serializeOuter(document.childNodes[0]);
 *
 * console.log(str); //> '<div>Hello, <b>world</b>!</div>'
 * ```
 *
 * @param node Node to serialize.
 * @param options Serialization options.
 */
function serializeOuter(node, options) {
    const opts = Object.assign(Object.assign({}, defaultOpts), options);
    return serializeNode(node, opts);
}
serializer.serializeOuter = serializeOuter;
function serializeChildNodes(parentNode, options) {
    let html = '';
    // Get container of the child nodes
    const container = options.treeAdapter.isElementNode(parentNode) &&
        options.treeAdapter.getTagName(parentNode) === html_js_1.TAG_NAMES.TEMPLATE &&
        options.treeAdapter.getNamespaceURI(parentNode) === html_js_1.NS.HTML
        ? options.treeAdapter.getTemplateContent(parentNode)
        : parentNode;
    const childNodes = options.treeAdapter.getChildNodes(container);
    if (childNodes) {
        for (const currentNode of childNodes) {
            html += serializeNode(currentNode, options);
        }
    }
    return html;
}
function serializeNode(node, options) {
    if (options.treeAdapter.isElementNode(node)) {
        return serializeElement(node, options);
    }
    if (options.treeAdapter.isTextNode(node)) {
        return serializeTextNode(node, options);
    }
    if (options.treeAdapter.isCommentNode(node)) {
        return serializeCommentNode(node, options);
    }
    if (options.treeAdapter.isDocumentTypeNode(node)) {
        return serializeDocumentTypeNode(node, options);
    }
    // Return an empty string for unknown nodes
    return '';
}
function serializeElement(node, options) {
    const tn = options.treeAdapter.getTagName(node);
    return `<${tn}${serializeAttributes(node, options)}>${isVoidElement(node, options) ? '' : `${serializeChildNodes(node, options)}</${tn}>`}`;
}
function serializeAttributes(node, { treeAdapter }) {
    let html = '';
    for (const attr of treeAdapter.getAttrList(node)) {
        html += ' ';
        if (!attr.namespace) {
            html += attr.name;
        }
        else
            switch (attr.namespace) {
                case html_js_1.NS.XML: {
                    html += `xml:${attr.name}`;
                    break;
                }
                case html_js_1.NS.XMLNS: {
                    if (attr.name !== 'xmlns') {
                        html += 'xmlns:';
                    }
                    html += attr.name;
                    break;
                }
                case html_js_1.NS.XLINK: {
                    html += `xlink:${attr.name}`;
                    break;
                }
                default: {
                    html += `${attr.prefix}:${attr.name}`;
                }
            }
        html += `="${(0, escape_js_1.escapeAttribute)(attr.value)}"`;
    }
    return html;
}
function serializeTextNode(node, options) {
    const { treeAdapter } = options;
    const content = treeAdapter.getTextNodeContent(node);
    const parent = treeAdapter.getParentNode(node);
    const parentTn = parent && treeAdapter.isElementNode(parent) && treeAdapter.getTagName(parent);
    return parentTn &&
        treeAdapter.getNamespaceURI(parent) === html_js_1.NS.HTML &&
        (0, html_js_1.hasUnescapedText)(parentTn, options.scriptingEnabled)
        ? content
        : (0, escape_js_1.escapeText)(content);
}
function serializeCommentNode(node, { treeAdapter }) {
    return `<!--${treeAdapter.getCommentNodeContent(node)}-->`;
}
function serializeDocumentTypeNode(node, { treeAdapter }) {
    return `<!DOCTYPE ${treeAdapter.getDocumentTypeNodeName(node)}>`;
}

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.parseFragment = exports.parse = exports.TokenizerMode = exports.Tokenizer = exports.Token = exports.html = exports.foreignContent = exports.serializeOuter = exports.serialize = exports.Parser = exports.defaultTreeAdapter = void 0;
	const index_js_1 = parser;
	var default_js_1 = _default;
	Object.defineProperty(exports, "defaultTreeAdapter", { enumerable: true, get: function () { return default_js_1.defaultTreeAdapter; } });
	var index_js_2 = parser;
	Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return index_js_2.Parser; } });
	var index_js_3 = serializer;
	Object.defineProperty(exports, "serialize", { enumerable: true, get: function () { return index_js_3.serialize; } });
	Object.defineProperty(exports, "serializeOuter", { enumerable: true, get: function () { return index_js_3.serializeOuter; } });
	/** @internal */
	exports.foreignContent = foreignContent$1;
	/** @internal */
	exports.html = html;
	/** @internal */
	exports.Token = token;
	/** @internal */
	var index_js_4 = tokenizer;
	Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function () { return index_js_4.Tokenizer; } });
	Object.defineProperty(exports, "TokenizerMode", { enumerable: true, get: function () { return index_js_4.TokenizerMode; } });
	// Shorthands
	/**
	 * Parses an HTML string.
	 *
	 * @param html Input HTML string.
	 * @param options Parsing options.
	 * @returns Document
	 *
	 * @example
	 *
	 * ```js
	 * const parse5 = require('parse5');
	 *
	 * const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');
	 *
	 * console.log(document.childNodes[1].tagName); //> 'html'
	 *```
	 */
	function parse(html, options) {
	    return index_js_1.Parser.parse(html, options);
	}
	exports.parse = parse;
	function parseFragment(fragmentContext, html, options) {
	    if (typeof fragmentContext === 'string') {
	        options = html;
	        html = fragmentContext;
	        fragmentContext = null;
	    }
	    const parser = index_js_1.Parser.getFragmentParser(fragmentContext, options);
	    parser.tokenizer.write(html, true);
	    return parser.getFragment();
	}
	exports.parseFragment = parseFragment;
	
} (cjs$1));

var cjs = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.adapter = exports.serializeDoctypeContent = void 0;
	const parse5_1 = cjs$1;
	const domhandler_1 = lib$7;
	function createTextNode(value) {
	    return new domhandler_1.Text(value);
	}
	function enquoteDoctypeId(id) {
	    const quote = id.includes('"') ? "'" : '"';
	    return quote + id + quote;
	}
	/** @internal */
	function serializeDoctypeContent(name, publicId, systemId) {
	    let str = '!DOCTYPE ';
	    if (name) {
	        str += name;
	    }
	    if (publicId) {
	        str += ` PUBLIC ${enquoteDoctypeId(publicId)}`;
	    }
	    else if (systemId) {
	        str += ' SYSTEM';
	    }
	    if (systemId) {
	        str += ` ${enquoteDoctypeId(systemId)}`;
	    }
	    return str;
	}
	exports.serializeDoctypeContent = serializeDoctypeContent;
	exports.adapter = {
	    // Re-exports from domhandler
	    isCommentNode: domhandler_1.isComment,
	    isElementNode: domhandler_1.isTag,
	    isTextNode: domhandler_1.isText,
	    //Node construction
	    createDocument() {
	        const node = new domhandler_1.Document([]);
	        node['x-mode'] = parse5_1.html.DOCUMENT_MODE.NO_QUIRKS;
	        return node;
	    },
	    createDocumentFragment() {
	        return new domhandler_1.Document([]);
	    },
	    createElement(tagName, namespaceURI, attrs) {
	        const attribs = Object.create(null);
	        const attribsNamespace = Object.create(null);
	        const attribsPrefix = Object.create(null);
	        for (let i = 0; i < attrs.length; i++) {
	            const attrName = attrs[i].name;
	            attribs[attrName] = attrs[i].value;
	            attribsNamespace[attrName] = attrs[i].namespace;
	            attribsPrefix[attrName] = attrs[i].prefix;
	        }
	        const node = new domhandler_1.Element(tagName, attribs, []);
	        node.namespace = namespaceURI;
	        node['x-attribsNamespace'] = attribsNamespace;
	        node['x-attribsPrefix'] = attribsPrefix;
	        return node;
	    },
	    createCommentNode(data) {
	        return new domhandler_1.Comment(data);
	    },
	    //Tree mutation
	    appendChild(parentNode, newNode) {
	        const prev = parentNode.children[parentNode.children.length - 1];
	        if (prev) {
	            prev.next = newNode;
	            newNode.prev = prev;
	        }
	        parentNode.children.push(newNode);
	        newNode.parent = parentNode;
	    },
	    insertBefore(parentNode, newNode, referenceNode) {
	        const insertionIdx = parentNode.children.indexOf(referenceNode);
	        const { prev } = referenceNode;
	        if (prev) {
	            prev.next = newNode;
	            newNode.prev = prev;
	        }
	        referenceNode.prev = newNode;
	        newNode.next = referenceNode;
	        parentNode.children.splice(insertionIdx, 0, newNode);
	        newNode.parent = parentNode;
	    },
	    setTemplateContent(templateElement, contentElement) {
	        exports.adapter.appendChild(templateElement, contentElement);
	    },
	    getTemplateContent(templateElement) {
	        return templateElement.children[0];
	    },
	    setDocumentType(document, name, publicId, systemId) {
	        const data = serializeDoctypeContent(name, publicId, systemId);
	        let doctypeNode = document.children.find((node) => (0, domhandler_1.isDirective)(node) && node.name === '!doctype');
	        if (doctypeNode) {
	            doctypeNode.data = data !== null && data !== void 0 ? data : null;
	        }
	        else {
	            doctypeNode = new domhandler_1.ProcessingInstruction('!doctype', data);
	            exports.adapter.appendChild(document, doctypeNode);
	        }
	        doctypeNode['x-name'] = name !== null && name !== void 0 ? name : undefined;
	        doctypeNode['x-publicId'] = publicId !== null && publicId !== void 0 ? publicId : undefined;
	        doctypeNode['x-systemId'] = systemId !== null && systemId !== void 0 ? systemId : undefined;
	    },
	    setDocumentMode(document, mode) {
	        document['x-mode'] = mode;
	    },
	    getDocumentMode(document) {
	        return document['x-mode'];
	    },
	    detachNode(node) {
	        if (node.parent) {
	            const idx = node.parent.children.indexOf(node);
	            const { prev, next } = node;
	            node.prev = null;
	            node.next = null;
	            if (prev) {
	                prev.next = next;
	            }
	            if (next) {
	                next.prev = prev;
	            }
	            node.parent.children.splice(idx, 1);
	            node.parent = null;
	        }
	    },
	    insertText(parentNode, text) {
	        const lastChild = parentNode.children[parentNode.children.length - 1];
	        if (lastChild && (0, domhandler_1.isText)(lastChild)) {
	            lastChild.data += text;
	        }
	        else {
	            exports.adapter.appendChild(parentNode, createTextNode(text));
	        }
	    },
	    insertTextBefore(parentNode, text, referenceNode) {
	        const prevNode = parentNode.children[parentNode.children.indexOf(referenceNode) - 1];
	        if (prevNode && (0, domhandler_1.isText)(prevNode)) {
	            prevNode.data += text;
	        }
	        else {
	            exports.adapter.insertBefore(parentNode, createTextNode(text), referenceNode);
	        }
	    },
	    adoptAttributes(recipient, attrs) {
	        for (let i = 0; i < attrs.length; i++) {
	            const attrName = attrs[i].name;
	            if (typeof recipient.attribs[attrName] === 'undefined') {
	                recipient.attribs[attrName] = attrs[i].value;
	                recipient['x-attribsNamespace'][attrName] = attrs[i].namespace;
	                recipient['x-attribsPrefix'][attrName] = attrs[i].prefix;
	            }
	        }
	    },
	    //Tree traversing
	    getFirstChild(node) {
	        return node.children[0];
	    },
	    getChildNodes(node) {
	        return node.children;
	    },
	    getParentNode(node) {
	        return node.parent;
	    },
	    getAttrList(element) {
	        return element.attributes;
	    },
	    //Node data
	    getTagName(element) {
	        return element.name;
	    },
	    getNamespaceURI(element) {
	        return element.namespace;
	    },
	    getTextNodeContent(textNode) {
	        return textNode.data;
	    },
	    getCommentNodeContent(commentNode) {
	        return commentNode.data;
	    },
	    getDocumentTypeNodeName(doctypeNode) {
	        var _a;
	        return (_a = doctypeNode['x-name']) !== null && _a !== void 0 ? _a : '';
	    },
	    getDocumentTypeNodePublicId(doctypeNode) {
	        var _a;
	        return (_a = doctypeNode['x-publicId']) !== null && _a !== void 0 ? _a : '';
	    },
	    getDocumentTypeNodeSystemId(doctypeNode) {
	        var _a;
	        return (_a = doctypeNode['x-systemId']) !== null && _a !== void 0 ? _a : '';
	    },
	    //Node types
	    isDocumentTypeNode(node) {
	        return (0, domhandler_1.isDirective)(node) && node.name === '!doctype';
	    },
	    // Source code location
	    setNodeSourceCodeLocation(node, location) {
	        if (location) {
	            node.startIndex = location.startOffset;
	            node.endIndex = location.endOffset;
	        }
	        node.sourceCodeLocation = location;
	    },
	    getNodeSourceCodeLocation(node) {
	        return node.sourceCodeLocation;
	    },
	    updateNodeSourceCodeLocation(node, endLocation) {
	        if (endLocation.endOffset != null)
	            node.endIndex = endLocation.endOffset;
	        node.sourceCodeLocation = Object.assign(Object.assign({}, node.sourceCodeLocation), endLocation);
	    },
	};
	
} (cjs));

var __spreadArray = (commonjsGlobal && commonjsGlobal.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(parse5Adapter, "__esModule", { value: true });
parse5Adapter.renderWithParse5 = parse5Adapter.parseWithParse5 = void 0;
var domhandler_1 = lib$7;
var parse5_1 = cjs$1;
var parse5_htmlparser2_tree_adapter_1 = cjs;
/**
 * Parse the content with `parse5` in the context of the given `ParentNode`.
 *
 * @param content - The content to parse.
 * @param options - A set of options to use to parse.
 * @param isDocument - Whether to parse the content as a full HTML document.
 * @param context - The context in which to parse the content.
 * @returns The parsed content.
 */
function parseWithParse5(content, options, isDocument, context) {
    var opts = {
        scriptingEnabled: typeof options.scriptingEnabled === 'boolean'
            ? options.scriptingEnabled
            : true,
        treeAdapter: parse5_htmlparser2_tree_adapter_1.adapter,
        sourceCodeLocationInfo: options.sourceCodeLocationInfo,
    };
    return isDocument
        ? (0, parse5_1.parse)(content, opts)
        : (0, parse5_1.parseFragment)(context, content, opts);
}
parse5Adapter.parseWithParse5 = parseWithParse5;
var renderOpts = { treeAdapter: parse5_htmlparser2_tree_adapter_1.adapter };
/**
 * Renders the given DOM tree with `parse5` and returns the result as a string.
 *
 * @param dom - The DOM tree to render.
 * @returns The rendered document.
 */
function renderWithParse5(dom) {
    var _a;
    /*
     * `dom-serializer` passes over the special "root" node and renders the
     * node's children in its place. To mimic this behavior with `parse5`, an
     * equivalent operation must be applied to the input array.
     */
    var nodes = 'length' in dom ? dom : [dom];
    for (var index = 0; index < nodes.length; index += 1) {
        var node = nodes[index];
        if ((0, domhandler_1.isDocument)(node)) {
            (_a = Array.prototype.splice).call.apply(_a, __spreadArray([nodes, index, 1], node.children, false));
        }
    }
    var result = '';
    for (var index = 0; index < nodes.length; index += 1) {
        var node = nodes[index];
        result += (0, parse5_1.serializeOuter)(node, renderOpts);
    }
    return result;
}
parse5Adapter.renderWithParse5 = renderWithParse5;

var lib = {};

var Parser$1 = {};

var Tokenizer = {};

(function (exports) {
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.QuoteType = void 0;
	var decode_js_1 = decode;
	var CharCodes;
	(function (CharCodes) {
	    CharCodes[CharCodes["Tab"] = 9] = "Tab";
	    CharCodes[CharCodes["NewLine"] = 10] = "NewLine";
	    CharCodes[CharCodes["FormFeed"] = 12] = "FormFeed";
	    CharCodes[CharCodes["CarriageReturn"] = 13] = "CarriageReturn";
	    CharCodes[CharCodes["Space"] = 32] = "Space";
	    CharCodes[CharCodes["ExclamationMark"] = 33] = "ExclamationMark";
	    CharCodes[CharCodes["Num"] = 35] = "Num";
	    CharCodes[CharCodes["Amp"] = 38] = "Amp";
	    CharCodes[CharCodes["SingleQuote"] = 39] = "SingleQuote";
	    CharCodes[CharCodes["DoubleQuote"] = 34] = "DoubleQuote";
	    CharCodes[CharCodes["Dash"] = 45] = "Dash";
	    CharCodes[CharCodes["Slash"] = 47] = "Slash";
	    CharCodes[CharCodes["Zero"] = 48] = "Zero";
	    CharCodes[CharCodes["Nine"] = 57] = "Nine";
	    CharCodes[CharCodes["Semi"] = 59] = "Semi";
	    CharCodes[CharCodes["Lt"] = 60] = "Lt";
	    CharCodes[CharCodes["Eq"] = 61] = "Eq";
	    CharCodes[CharCodes["Gt"] = 62] = "Gt";
	    CharCodes[CharCodes["Questionmark"] = 63] = "Questionmark";
	    CharCodes[CharCodes["UpperA"] = 65] = "UpperA";
	    CharCodes[CharCodes["LowerA"] = 97] = "LowerA";
	    CharCodes[CharCodes["UpperF"] = 70] = "UpperF";
	    CharCodes[CharCodes["LowerF"] = 102] = "LowerF";
	    CharCodes[CharCodes["UpperZ"] = 90] = "UpperZ";
	    CharCodes[CharCodes["LowerZ"] = 122] = "LowerZ";
	    CharCodes[CharCodes["LowerX"] = 120] = "LowerX";
	    CharCodes[CharCodes["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
	})(CharCodes || (CharCodes = {}));
	/** All the states the tokenizer can be in. */
	var State;
	(function (State) {
	    State[State["Text"] = 1] = "Text";
	    State[State["BeforeTagName"] = 2] = "BeforeTagName";
	    State[State["InTagName"] = 3] = "InTagName";
	    State[State["InSelfClosingTag"] = 4] = "InSelfClosingTag";
	    State[State["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
	    State[State["InClosingTagName"] = 6] = "InClosingTagName";
	    State[State["AfterClosingTagName"] = 7] = "AfterClosingTagName";
	    // Attributes
	    State[State["BeforeAttributeName"] = 8] = "BeforeAttributeName";
	    State[State["InAttributeName"] = 9] = "InAttributeName";
	    State[State["AfterAttributeName"] = 10] = "AfterAttributeName";
	    State[State["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
	    State[State["InAttributeValueDq"] = 12] = "InAttributeValueDq";
	    State[State["InAttributeValueSq"] = 13] = "InAttributeValueSq";
	    State[State["InAttributeValueNq"] = 14] = "InAttributeValueNq";
	    // Declarations
	    State[State["BeforeDeclaration"] = 15] = "BeforeDeclaration";
	    State[State["InDeclaration"] = 16] = "InDeclaration";
	    // Processing instructions
	    State[State["InProcessingInstruction"] = 17] = "InProcessingInstruction";
	    // Comments & CDATA
	    State[State["BeforeComment"] = 18] = "BeforeComment";
	    State[State["CDATASequence"] = 19] = "CDATASequence";
	    State[State["InSpecialComment"] = 20] = "InSpecialComment";
	    State[State["InCommentLike"] = 21] = "InCommentLike";
	    // Special tags
	    State[State["BeforeSpecialS"] = 22] = "BeforeSpecialS";
	    State[State["SpecialStartSequence"] = 23] = "SpecialStartSequence";
	    State[State["InSpecialTag"] = 24] = "InSpecialTag";
	    State[State["BeforeEntity"] = 25] = "BeforeEntity";
	    State[State["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
	    State[State["InNamedEntity"] = 27] = "InNamedEntity";
	    State[State["InNumericEntity"] = 28] = "InNumericEntity";
	    State[State["InHexEntity"] = 29] = "InHexEntity";
	})(State || (State = {}));
	function isWhitespace(c) {
	    return (c === CharCodes.Space ||
	        c === CharCodes.NewLine ||
	        c === CharCodes.Tab ||
	        c === CharCodes.FormFeed ||
	        c === CharCodes.CarriageReturn);
	}
	function isEndOfTagSection(c) {
	    return c === CharCodes.Slash || c === CharCodes.Gt || isWhitespace(c);
	}
	function isNumber(c) {
	    return c >= CharCodes.Zero && c <= CharCodes.Nine;
	}
	function isASCIIAlpha(c) {
	    return ((c >= CharCodes.LowerA && c <= CharCodes.LowerZ) ||
	        (c >= CharCodes.UpperA && c <= CharCodes.UpperZ));
	}
	function isHexDigit(c) {
	    return ((c >= CharCodes.UpperA && c <= CharCodes.UpperF) ||
	        (c >= CharCodes.LowerA && c <= CharCodes.LowerF));
	}
	var QuoteType;
	(function (QuoteType) {
	    QuoteType[QuoteType["NoValue"] = 0] = "NoValue";
	    QuoteType[QuoteType["Unquoted"] = 1] = "Unquoted";
	    QuoteType[QuoteType["Single"] = 2] = "Single";
	    QuoteType[QuoteType["Double"] = 3] = "Double";
	})(QuoteType = exports.QuoteType || (exports.QuoteType = {}));
	/**
	 * Sequences used to match longer strings.
	 *
	 * We don't have `Script`, `Style`, or `Title` here. Instead, we re-use the *End
	 * sequences with an increased offset.
	 */
	var Sequences = {
	    Cdata: new Uint8Array([0x43, 0x44, 0x41, 0x54, 0x41, 0x5b]),
	    CdataEnd: new Uint8Array([0x5d, 0x5d, 0x3e]),
	    CommentEnd: new Uint8Array([0x2d, 0x2d, 0x3e]),
	    ScriptEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74]),
	    StyleEnd: new Uint8Array([0x3c, 0x2f, 0x73, 0x74, 0x79, 0x6c, 0x65]),
	    TitleEnd: new Uint8Array([0x3c, 0x2f, 0x74, 0x69, 0x74, 0x6c, 0x65]), // `</title`
	};
	var Tokenizer = /** @class */ (function () {
	    function Tokenizer(_a, cbs) {
	        var _b = _a.xmlMode, xmlMode = _b === void 0 ? false : _b, _c = _a.decodeEntities, decodeEntities = _c === void 0 ? true : _c;
	        this.cbs = cbs;
	        /** The current state the tokenizer is in. */
	        this.state = State.Text;
	        /** The read buffer. */
	        this.buffer = "";
	        /** The beginning of the section that is currently being read. */
	        this.sectionStart = 0;
	        /** The index within the buffer that we are currently looking at. */
	        this.index = 0;
	        /** Some behavior, eg. when decoding entities, is done while we are in another state. This keeps track of the other state type. */
	        this.baseState = State.Text;
	        /** For special parsing behavior inside of script and style tags. */
	        this.isSpecial = false;
	        /** Indicates whether the tokenizer has been paused. */
	        this.running = true;
	        /** The offset of the current buffer. */
	        this.offset = 0;
	        this.sequenceIndex = 0;
	        this.trieIndex = 0;
	        this.trieCurrent = 0;
	        /** For named entities, the index of the value. For numeric entities, the code point. */
	        this.entityResult = 0;
	        this.entityExcess = 0;
	        this.xmlMode = xmlMode;
	        this.decodeEntities = decodeEntities;
	        this.entityTrie = xmlMode ? decode_js_1.xmlDecodeTree : decode_js_1.htmlDecodeTree;
	    }
	    Tokenizer.prototype.reset = function () {
	        this.state = State.Text;
	        this.buffer = "";
	        this.sectionStart = 0;
	        this.index = 0;
	        this.baseState = State.Text;
	        this.currentSequence = undefined;
	        this.running = true;
	        this.offset = 0;
	    };
	    Tokenizer.prototype.write = function (chunk) {
	        this.offset += this.buffer.length;
	        this.buffer = chunk;
	        this.parse();
	    };
	    Tokenizer.prototype.end = function () {
	        if (this.running)
	            this.finish();
	    };
	    Tokenizer.prototype.pause = function () {
	        this.running = false;
	    };
	    Tokenizer.prototype.resume = function () {
	        this.running = true;
	        if (this.index < this.buffer.length + this.offset) {
	            this.parse();
	        }
	    };
	    /**
	     * The current index within all of the written data.
	     */
	    Tokenizer.prototype.getIndex = function () {
	        return this.index;
	    };
	    /**
	     * The start of the current section.
	     */
	    Tokenizer.prototype.getSectionStart = function () {
	        return this.sectionStart;
	    };
	    Tokenizer.prototype.stateText = function (c) {
	        if (c === CharCodes.Lt ||
	            (!this.decodeEntities && this.fastForwardTo(CharCodes.Lt))) {
	            if (this.index > this.sectionStart) {
	                this.cbs.ontext(this.sectionStart, this.index);
	            }
	            this.state = State.BeforeTagName;
	            this.sectionStart = this.index;
	        }
	        else if (this.decodeEntities && c === CharCodes.Amp) {
	            this.state = State.BeforeEntity;
	        }
	    };
	    Tokenizer.prototype.stateSpecialStartSequence = function (c) {
	        var isEnd = this.sequenceIndex === this.currentSequence.length;
	        var isMatch = isEnd
	            ? // If we are at the end of the sequence, make sure the tag name has ended
	                isEndOfTagSection(c)
	            : // Otherwise, do a case-insensitive comparison
	                (c | 0x20) === this.currentSequence[this.sequenceIndex];
	        if (!isMatch) {
	            this.isSpecial = false;
	        }
	        else if (!isEnd) {
	            this.sequenceIndex++;
	            return;
	        }
	        this.sequenceIndex = 0;
	        this.state = State.InTagName;
	        this.stateInTagName(c);
	    };
	    /** Look for an end tag. For <title> tags, also decode entities. */
	    Tokenizer.prototype.stateInSpecialTag = function (c) {
	        if (this.sequenceIndex === this.currentSequence.length) {
	            if (c === CharCodes.Gt || isWhitespace(c)) {
	                var endOfText = this.index - this.currentSequence.length;
	                if (this.sectionStart < endOfText) {
	                    // Spoof the index so that reported locations match up.
	                    var actualIndex = this.index;
	                    this.index = endOfText;
	                    this.cbs.ontext(this.sectionStart, endOfText);
	                    this.index = actualIndex;
	                }
	                this.isSpecial = false;
	                this.sectionStart = endOfText + 2; // Skip over the `</`
	                this.stateInClosingTagName(c);
	                return; // We are done; skip the rest of the function.
	            }
	            this.sequenceIndex = 0;
	        }
	        if ((c | 0x20) === this.currentSequence[this.sequenceIndex]) {
	            this.sequenceIndex += 1;
	        }
	        else if (this.sequenceIndex === 0) {
	            if (this.currentSequence === Sequences.TitleEnd) {
	                // We have to parse entities in <title> tags.
	                if (this.decodeEntities && c === CharCodes.Amp) {
	                    this.state = State.BeforeEntity;
	                }
	            }
	            else if (this.fastForwardTo(CharCodes.Lt)) {
	                // Outside of <title> tags, we can fast-forward.
	                this.sequenceIndex = 1;
	            }
	        }
	        else {
	            // If we see a `<`, set the sequence index to 1; useful for eg. `<</script>`.
	            this.sequenceIndex = Number(c === CharCodes.Lt);
	        }
	    };
	    Tokenizer.prototype.stateCDATASequence = function (c) {
	        if (c === Sequences.Cdata[this.sequenceIndex]) {
	            if (++this.sequenceIndex === Sequences.Cdata.length) {
	                this.state = State.InCommentLike;
	                this.currentSequence = Sequences.CdataEnd;
	                this.sequenceIndex = 0;
	                this.sectionStart = this.index + 1;
	            }
	        }
	        else {
	            this.sequenceIndex = 0;
	            this.state = State.InDeclaration;
	            this.stateInDeclaration(c); // Reconsume the character
	        }
	    };
	    /**
	     * When we wait for one specific character, we can speed things up
	     * by skipping through the buffer until we find it.
	     *
	     * @returns Whether the character was found.
	     */
	    Tokenizer.prototype.fastForwardTo = function (c) {
	        while (++this.index < this.buffer.length + this.offset) {
	            if (this.buffer.charCodeAt(this.index - this.offset) === c) {
	                return true;
	            }
	        }
	        /*
	         * We increment the index at the end of the `parse` loop,
	         * so set it to `buffer.length - 1` here.
	         *
	         * TODO: Refactor `parse` to increment index before calling states.
	         */
	        this.index = this.buffer.length + this.offset - 1;
	        return false;
	    };
	    /**
	     * Comments and CDATA end with `-->` and `]]>`.
	     *
	     * Their common qualities are:
	     * - Their end sequences have a distinct character they start with.
	     * - That character is then repeated, so we have to check multiple repeats.
	     * - All characters but the start character of the sequence can be skipped.
	     */
	    Tokenizer.prototype.stateInCommentLike = function (c) {
	        if (c === this.currentSequence[this.sequenceIndex]) {
	            if (++this.sequenceIndex === this.currentSequence.length) {
	                if (this.currentSequence === Sequences.CdataEnd) {
	                    this.cbs.oncdata(this.sectionStart, this.index, 2);
	                }
	                else {
	                    this.cbs.oncomment(this.sectionStart, this.index, 2);
	                }
	                this.sequenceIndex = 0;
	                this.sectionStart = this.index + 1;
	                this.state = State.Text;
	            }
	        }
	        else if (this.sequenceIndex === 0) {
	            // Fast-forward to the first character of the sequence
	            if (this.fastForwardTo(this.currentSequence[0])) {
	                this.sequenceIndex = 1;
	            }
	        }
	        else if (c !== this.currentSequence[this.sequenceIndex - 1]) {
	            // Allow long sequences, eg. --->, ]]]>
	            this.sequenceIndex = 0;
	        }
	    };
	    /**
	     * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
	     *
	     * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
	     * We allow anything that wouldn't end the tag.
	     */
	    Tokenizer.prototype.isTagStartChar = function (c) {
	        return this.xmlMode ? !isEndOfTagSection(c) : isASCIIAlpha(c);
	    };
	    Tokenizer.prototype.startSpecial = function (sequence, offset) {
	        this.isSpecial = true;
	        this.currentSequence = sequence;
	        this.sequenceIndex = offset;
	        this.state = State.SpecialStartSequence;
	    };
	    Tokenizer.prototype.stateBeforeTagName = function (c) {
	        if (c === CharCodes.ExclamationMark) {
	            this.state = State.BeforeDeclaration;
	            this.sectionStart = this.index + 1;
	        }
	        else if (c === CharCodes.Questionmark) {
	            this.state = State.InProcessingInstruction;
	            this.sectionStart = this.index + 1;
	        }
	        else if (this.isTagStartChar(c)) {
	            var lower = c | 0x20;
	            this.sectionStart = this.index;
	            if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
	                this.startSpecial(Sequences.TitleEnd, 3);
	            }
	            else {
	                this.state =
	                    !this.xmlMode && lower === Sequences.ScriptEnd[2]
	                        ? State.BeforeSpecialS
	                        : State.InTagName;
	            }
	        }
	        else if (c === CharCodes.Slash) {
	            this.state = State.BeforeClosingTagName;
	        }
	        else {
	            this.state = State.Text;
	            this.stateText(c);
	        }
	    };
	    Tokenizer.prototype.stateInTagName = function (c) {
	        if (isEndOfTagSection(c)) {
	            this.cbs.onopentagname(this.sectionStart, this.index);
	            this.sectionStart = -1;
	            this.state = State.BeforeAttributeName;
	            this.stateBeforeAttributeName(c);
	        }
	    };
	    Tokenizer.prototype.stateBeforeClosingTagName = function (c) {
	        if (isWhitespace(c)) ;
	        else if (c === CharCodes.Gt) {
	            this.state = State.Text;
	        }
	        else {
	            this.state = this.isTagStartChar(c)
	                ? State.InClosingTagName
	                : State.InSpecialComment;
	            this.sectionStart = this.index;
	        }
	    };
	    Tokenizer.prototype.stateInClosingTagName = function (c) {
	        if (c === CharCodes.Gt || isWhitespace(c)) {
	            this.cbs.onclosetag(this.sectionStart, this.index);
	            this.sectionStart = -1;
	            this.state = State.AfterClosingTagName;
	            this.stateAfterClosingTagName(c);
	        }
	    };
	    Tokenizer.prototype.stateAfterClosingTagName = function (c) {
	        // Skip everything until ">"
	        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
	            this.state = State.Text;
	            this.sectionStart = this.index + 1;
	        }
	    };
	    Tokenizer.prototype.stateBeforeAttributeName = function (c) {
	        if (c === CharCodes.Gt) {
	            this.cbs.onopentagend(this.index);
	            if (this.isSpecial) {
	                this.state = State.InSpecialTag;
	                this.sequenceIndex = 0;
	            }
	            else {
	                this.state = State.Text;
	            }
	            this.baseState = this.state;
	            this.sectionStart = this.index + 1;
	        }
	        else if (c === CharCodes.Slash) {
	            this.state = State.InSelfClosingTag;
	        }
	        else if (!isWhitespace(c)) {
	            this.state = State.InAttributeName;
	            this.sectionStart = this.index;
	        }
	    };
	    Tokenizer.prototype.stateInSelfClosingTag = function (c) {
	        if (c === CharCodes.Gt) {
	            this.cbs.onselfclosingtag(this.index);
	            this.state = State.Text;
	            this.baseState = State.Text;
	            this.sectionStart = this.index + 1;
	            this.isSpecial = false; // Reset special state, in case of self-closing special tags
	        }
	        else if (!isWhitespace(c)) {
	            this.state = State.BeforeAttributeName;
	            this.stateBeforeAttributeName(c);
	        }
	    };
	    Tokenizer.prototype.stateInAttributeName = function (c) {
	        if (c === CharCodes.Eq || isEndOfTagSection(c)) {
	            this.cbs.onattribname(this.sectionStart, this.index);
	            this.sectionStart = -1;
	            this.state = State.AfterAttributeName;
	            this.stateAfterAttributeName(c);
	        }
	    };
	    Tokenizer.prototype.stateAfterAttributeName = function (c) {
	        if (c === CharCodes.Eq) {
	            this.state = State.BeforeAttributeValue;
	        }
	        else if (c === CharCodes.Slash || c === CharCodes.Gt) {
	            this.cbs.onattribend(QuoteType.NoValue, this.index);
	            this.state = State.BeforeAttributeName;
	            this.stateBeforeAttributeName(c);
	        }
	        else if (!isWhitespace(c)) {
	            this.cbs.onattribend(QuoteType.NoValue, this.index);
	            this.state = State.InAttributeName;
	            this.sectionStart = this.index;
	        }
	    };
	    Tokenizer.prototype.stateBeforeAttributeValue = function (c) {
	        if (c === CharCodes.DoubleQuote) {
	            this.state = State.InAttributeValueDq;
	            this.sectionStart = this.index + 1;
	        }
	        else if (c === CharCodes.SingleQuote) {
	            this.state = State.InAttributeValueSq;
	            this.sectionStart = this.index + 1;
	        }
	        else if (!isWhitespace(c)) {
	            this.sectionStart = this.index;
	            this.state = State.InAttributeValueNq;
	            this.stateInAttributeValueNoQuotes(c); // Reconsume token
	        }
	    };
	    Tokenizer.prototype.handleInAttributeValue = function (c, quote) {
	        if (c === quote ||
	            (!this.decodeEntities && this.fastForwardTo(quote))) {
	            this.cbs.onattribdata(this.sectionStart, this.index);
	            this.sectionStart = -1;
	            this.cbs.onattribend(quote === CharCodes.DoubleQuote
	                ? QuoteType.Double
	                : QuoteType.Single, this.index);
	            this.state = State.BeforeAttributeName;
	        }
	        else if (this.decodeEntities && c === CharCodes.Amp) {
	            this.baseState = this.state;
	            this.state = State.BeforeEntity;
	        }
	    };
	    Tokenizer.prototype.stateInAttributeValueDoubleQuotes = function (c) {
	        this.handleInAttributeValue(c, CharCodes.DoubleQuote);
	    };
	    Tokenizer.prototype.stateInAttributeValueSingleQuotes = function (c) {
	        this.handleInAttributeValue(c, CharCodes.SingleQuote);
	    };
	    Tokenizer.prototype.stateInAttributeValueNoQuotes = function (c) {
	        if (isWhitespace(c) || c === CharCodes.Gt) {
	            this.cbs.onattribdata(this.sectionStart, this.index);
	            this.sectionStart = -1;
	            this.cbs.onattribend(QuoteType.Unquoted, this.index);
	            this.state = State.BeforeAttributeName;
	            this.stateBeforeAttributeName(c);
	        }
	        else if (this.decodeEntities && c === CharCodes.Amp) {
	            this.baseState = this.state;
	            this.state = State.BeforeEntity;
	        }
	    };
	    Tokenizer.prototype.stateBeforeDeclaration = function (c) {
	        if (c === CharCodes.OpeningSquareBracket) {
	            this.state = State.CDATASequence;
	            this.sequenceIndex = 0;
	        }
	        else {
	            this.state =
	                c === CharCodes.Dash
	                    ? State.BeforeComment
	                    : State.InDeclaration;
	        }
	    };
	    Tokenizer.prototype.stateInDeclaration = function (c) {
	        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
	            this.cbs.ondeclaration(this.sectionStart, this.index);
	            this.state = State.Text;
	            this.sectionStart = this.index + 1;
	        }
	    };
	    Tokenizer.prototype.stateInProcessingInstruction = function (c) {
	        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
	            this.cbs.onprocessinginstruction(this.sectionStart, this.index);
	            this.state = State.Text;
	            this.sectionStart = this.index + 1;
	        }
	    };
	    Tokenizer.prototype.stateBeforeComment = function (c) {
	        if (c === CharCodes.Dash) {
	            this.state = State.InCommentLike;
	            this.currentSequence = Sequences.CommentEnd;
	            // Allow short comments (eg. <!-->)
	            this.sequenceIndex = 2;
	            this.sectionStart = this.index + 1;
	        }
	        else {
	            this.state = State.InDeclaration;
	        }
	    };
	    Tokenizer.prototype.stateInSpecialComment = function (c) {
	        if (c === CharCodes.Gt || this.fastForwardTo(CharCodes.Gt)) {
	            this.cbs.oncomment(this.sectionStart, this.index, 0);
	            this.state = State.Text;
	            this.sectionStart = this.index + 1;
	        }
	    };
	    Tokenizer.prototype.stateBeforeSpecialS = function (c) {
	        var lower = c | 0x20;
	        if (lower === Sequences.ScriptEnd[3]) {
	            this.startSpecial(Sequences.ScriptEnd, 4);
	        }
	        else if (lower === Sequences.StyleEnd[3]) {
	            this.startSpecial(Sequences.StyleEnd, 4);
	        }
	        else {
	            this.state = State.InTagName;
	            this.stateInTagName(c); // Consume the token again
	        }
	    };
	    Tokenizer.prototype.stateBeforeEntity = function (c) {
	        // Start excess with 1 to include the '&'
	        this.entityExcess = 1;
	        this.entityResult = 0;
	        if (c === CharCodes.Num) {
	            this.state = State.BeforeNumericEntity;
	        }
	        else if (c === CharCodes.Amp) ;
	        else {
	            this.trieIndex = 0;
	            this.trieCurrent = this.entityTrie[0];
	            this.state = State.InNamedEntity;
	            this.stateInNamedEntity(c);
	        }
	    };
	    Tokenizer.prototype.stateInNamedEntity = function (c) {
	        this.entityExcess += 1;
	        this.trieIndex = (0, decode_js_1.determineBranch)(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c);
	        if (this.trieIndex < 0) {
	            this.emitNamedEntity();
	            this.index--;
	            return;
	        }
	        this.trieCurrent = this.entityTrie[this.trieIndex];
	        var masked = this.trieCurrent & decode_js_1.BinTrieFlags.VALUE_LENGTH;
	        // If the branch is a value, store it and continue
	        if (masked) {
	            // The mask is the number of bytes of the value, including the current byte.
	            var valueLength = (masked >> 14) - 1;
	            // If we have a legacy entity while parsing strictly, just skip the number of bytes
	            if (!this.allowLegacyEntity() && c !== CharCodes.Semi) {
	                this.trieIndex += valueLength;
	            }
	            else {
	                // Add 1 as we have already incremented the excess
	                var entityStart = this.index - this.entityExcess + 1;
	                if (entityStart > this.sectionStart) {
	                    this.emitPartial(this.sectionStart, entityStart);
	                }
	                // If this is a surrogate pair, consume the next two bytes
	                this.entityResult = this.trieIndex;
	                this.trieIndex += valueLength;
	                this.entityExcess = 0;
	                this.sectionStart = this.index + 1;
	                if (valueLength === 0) {
	                    this.emitNamedEntity();
	                }
	            }
	        }
	    };
	    Tokenizer.prototype.emitNamedEntity = function () {
	        this.state = this.baseState;
	        if (this.entityResult === 0) {
	            return;
	        }
	        var valueLength = (this.entityTrie[this.entityResult] & decode_js_1.BinTrieFlags.VALUE_LENGTH) >>
	            14;
	        switch (valueLength) {
	            case 1:
	                this.emitCodePoint(this.entityTrie[this.entityResult] &
	                    ~decode_js_1.BinTrieFlags.VALUE_LENGTH);
	                break;
	            case 2:
	                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
	                break;
	            case 3: {
	                this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
	                this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
	            }
	        }
	    };
	    Tokenizer.prototype.stateBeforeNumericEntity = function (c) {
	        if ((c | 0x20) === CharCodes.LowerX) {
	            this.entityExcess++;
	            this.state = State.InHexEntity;
	        }
	        else {
	            this.state = State.InNumericEntity;
	            this.stateInNumericEntity(c);
	        }
	    };
	    Tokenizer.prototype.emitNumericEntity = function (strict) {
	        var entityStart = this.index - this.entityExcess - 1;
	        var numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
	        if (numberStart !== this.index) {
	            // Emit leading data if any
	            if (entityStart > this.sectionStart) {
	                this.emitPartial(this.sectionStart, entityStart);
	            }
	            this.sectionStart = this.index + Number(strict);
	            this.emitCodePoint((0, decode_js_1.replaceCodePoint)(this.entityResult));
	        }
	        this.state = this.baseState;
	    };
	    Tokenizer.prototype.stateInNumericEntity = function (c) {
	        if (c === CharCodes.Semi) {
	            this.emitNumericEntity(true);
	        }
	        else if (isNumber(c)) {
	            this.entityResult = this.entityResult * 10 + (c - CharCodes.Zero);
	            this.entityExcess++;
	        }
	        else {
	            if (this.allowLegacyEntity()) {
	                this.emitNumericEntity(false);
	            }
	            else {
	                this.state = this.baseState;
	            }
	            this.index--;
	        }
	    };
	    Tokenizer.prototype.stateInHexEntity = function (c) {
	        if (c === CharCodes.Semi) {
	            this.emitNumericEntity(true);
	        }
	        else if (isNumber(c)) {
	            this.entityResult = this.entityResult * 16 + (c - CharCodes.Zero);
	            this.entityExcess++;
	        }
	        else if (isHexDigit(c)) {
	            this.entityResult =
	                this.entityResult * 16 + ((c | 0x20) - CharCodes.LowerA + 10);
	            this.entityExcess++;
	        }
	        else {
	            if (this.allowLegacyEntity()) {
	                this.emitNumericEntity(false);
	            }
	            else {
	                this.state = this.baseState;
	            }
	            this.index--;
	        }
	    };
	    Tokenizer.prototype.allowLegacyEntity = function () {
	        return (!this.xmlMode &&
	            (this.baseState === State.Text ||
	                this.baseState === State.InSpecialTag));
	    };
	    /**
	     * Remove data that has already been consumed from the buffer.
	     */
	    Tokenizer.prototype.cleanup = function () {
	        // If we are inside of text or attributes, emit what we already have.
	        if (this.running && this.sectionStart !== this.index) {
	            if (this.state === State.Text ||
	                (this.state === State.InSpecialTag && this.sequenceIndex === 0)) {
	                this.cbs.ontext(this.sectionStart, this.index);
	                this.sectionStart = this.index;
	            }
	            else if (this.state === State.InAttributeValueDq ||
	                this.state === State.InAttributeValueSq ||
	                this.state === State.InAttributeValueNq) {
	                this.cbs.onattribdata(this.sectionStart, this.index);
	                this.sectionStart = this.index;
	            }
	        }
	    };
	    Tokenizer.prototype.shouldContinue = function () {
	        return this.index < this.buffer.length + this.offset && this.running;
	    };
	    /**
	     * Iterates through the buffer, calling the function corresponding to the current state.
	     *
	     * States that are more likely to be hit are higher up, as a performance improvement.
	     */
	    Tokenizer.prototype.parse = function () {
	        while (this.shouldContinue()) {
	            var c = this.buffer.charCodeAt(this.index - this.offset);
	            if (this.state === State.Text) {
	                this.stateText(c);
	            }
	            else if (this.state === State.SpecialStartSequence) {
	                this.stateSpecialStartSequence(c);
	            }
	            else if (this.state === State.InSpecialTag) {
	                this.stateInSpecialTag(c);
	            }
	            else if (this.state === State.CDATASequence) {
	                this.stateCDATASequence(c);
	            }
	            else if (this.state === State.InAttributeValueDq) {
	                this.stateInAttributeValueDoubleQuotes(c);
	            }
	            else if (this.state === State.InAttributeName) {
	                this.stateInAttributeName(c);
	            }
	            else if (this.state === State.InCommentLike) {
	                this.stateInCommentLike(c);
	            }
	            else if (this.state === State.InSpecialComment) {
	                this.stateInSpecialComment(c);
	            }
	            else if (this.state === State.BeforeAttributeName) {
	                this.stateBeforeAttributeName(c);
	            }
	            else if (this.state === State.InTagName) {
	                this.stateInTagName(c);
	            }
	            else if (this.state === State.InClosingTagName) {
	                this.stateInClosingTagName(c);
	            }
	            else if (this.state === State.BeforeTagName) {
	                this.stateBeforeTagName(c);
	            }
	            else if (this.state === State.AfterAttributeName) {
	                this.stateAfterAttributeName(c);
	            }
	            else if (this.state === State.InAttributeValueSq) {
	                this.stateInAttributeValueSingleQuotes(c);
	            }
	            else if (this.state === State.BeforeAttributeValue) {
	                this.stateBeforeAttributeValue(c);
	            }
	            else if (this.state === State.BeforeClosingTagName) {
	                this.stateBeforeClosingTagName(c);
	            }
	            else if (this.state === State.AfterClosingTagName) {
	                this.stateAfterClosingTagName(c);
	            }
	            else if (this.state === State.BeforeSpecialS) {
	                this.stateBeforeSpecialS(c);
	            }
	            else if (this.state === State.InAttributeValueNq) {
	                this.stateInAttributeValueNoQuotes(c);
	            }
	            else if (this.state === State.InSelfClosingTag) {
	                this.stateInSelfClosingTag(c);
	            }
	            else if (this.state === State.InDeclaration) {
	                this.stateInDeclaration(c);
	            }
	            else if (this.state === State.BeforeDeclaration) {
	                this.stateBeforeDeclaration(c);
	            }
	            else if (this.state === State.BeforeComment) {
	                this.stateBeforeComment(c);
	            }
	            else if (this.state === State.InProcessingInstruction) {
	                this.stateInProcessingInstruction(c);
	            }
	            else if (this.state === State.InNamedEntity) {
	                this.stateInNamedEntity(c);
	            }
	            else if (this.state === State.BeforeEntity) {
	                this.stateBeforeEntity(c);
	            }
	            else if (this.state === State.InHexEntity) {
	                this.stateInHexEntity(c);
	            }
	            else if (this.state === State.InNumericEntity) {
	                this.stateInNumericEntity(c);
	            }
	            else {
	                // `this._state === State.BeforeNumericEntity`
	                this.stateBeforeNumericEntity(c);
	            }
	            this.index++;
	        }
	        this.cleanup();
	    };
	    Tokenizer.prototype.finish = function () {
	        if (this.state === State.InNamedEntity) {
	            this.emitNamedEntity();
	        }
	        // If there is remaining data, emit it in a reasonable way
	        if (this.sectionStart < this.index) {
	            this.handleTrailingData();
	        }
	        this.cbs.onend();
	    };
	    /** Handle any trailing data. */
	    Tokenizer.prototype.handleTrailingData = function () {
	        var endIndex = this.buffer.length + this.offset;
	        if (this.state === State.InCommentLike) {
	            if (this.currentSequence === Sequences.CdataEnd) {
	                this.cbs.oncdata(this.sectionStart, endIndex, 0);
	            }
	            else {
	                this.cbs.oncomment(this.sectionStart, endIndex, 0);
	            }
	        }
	        else if (this.state === State.InNumericEntity &&
	            this.allowLegacyEntity()) {
	            this.emitNumericEntity(false);
	            // All trailing data will have been consumed
	        }
	        else if (this.state === State.InHexEntity &&
	            this.allowLegacyEntity()) {
	            this.emitNumericEntity(false);
	            // All trailing data will have been consumed
	        }
	        else if (this.state === State.InTagName ||
	            this.state === State.BeforeAttributeName ||
	            this.state === State.BeforeAttributeValue ||
	            this.state === State.AfterAttributeName ||
	            this.state === State.InAttributeName ||
	            this.state === State.InAttributeValueSq ||
	            this.state === State.InAttributeValueDq ||
	            this.state === State.InAttributeValueNq ||
	            this.state === State.InClosingTagName) ;
	        else {
	            this.cbs.ontext(this.sectionStart, endIndex);
	        }
	    };
	    Tokenizer.prototype.emitPartial = function (start, endIndex) {
	        if (this.baseState !== State.Text &&
	            this.baseState !== State.InSpecialTag) {
	            this.cbs.onattribdata(start, endIndex);
	        }
	        else {
	            this.cbs.ontext(start, endIndex);
	        }
	    };
	    Tokenizer.prototype.emitCodePoint = function (cp) {
	        if (this.baseState !== State.Text &&
	            this.baseState !== State.InSpecialTag) {
	            this.cbs.onattribentity(cp);
	        }
	        else {
	            this.cbs.ontextentity(cp);
	        }
	    };
	    return Tokenizer;
	}());
	exports.default = Tokenizer;
	
} (Tokenizer));

var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(Parser$1, "__esModule", { value: true });
Parser$1.Parser = void 0;
var Tokenizer_js_1 = __importStar(Tokenizer);
var decode_js_1 = decode;
var formTags = new Set([
    "input",
    "option",
    "optgroup",
    "select",
    "button",
    "datalist",
    "textarea",
]);
var pTag = new Set(["p"]);
var tableSectionTags = new Set(["thead", "tbody"]);
var ddtTags = new Set(["dd", "dt"]);
var rtpTags = new Set(["rt", "rp"]);
var openImpliesClose = new Map([
    ["tr", new Set(["tr", "th", "td"])],
    ["th", new Set(["th"])],
    ["td", new Set(["thead", "th", "td"])],
    ["body", new Set(["head", "link", "script"])],
    ["li", new Set(["li"])],
    ["p", pTag],
    ["h1", pTag],
    ["h2", pTag],
    ["h3", pTag],
    ["h4", pTag],
    ["h5", pTag],
    ["h6", pTag],
    ["select", formTags],
    ["input", formTags],
    ["output", formTags],
    ["button", formTags],
    ["datalist", formTags],
    ["textarea", formTags],
    ["option", new Set(["option"])],
    ["optgroup", new Set(["optgroup", "option"])],
    ["dd", ddtTags],
    ["dt", ddtTags],
    ["address", pTag],
    ["article", pTag],
    ["aside", pTag],
    ["blockquote", pTag],
    ["details", pTag],
    ["div", pTag],
    ["dl", pTag],
    ["fieldset", pTag],
    ["figcaption", pTag],
    ["figure", pTag],
    ["footer", pTag],
    ["form", pTag],
    ["header", pTag],
    ["hr", pTag],
    ["main", pTag],
    ["nav", pTag],
    ["ol", pTag],
    ["pre", pTag],
    ["section", pTag],
    ["table", pTag],
    ["ul", pTag],
    ["rt", rtpTags],
    ["rp", rtpTags],
    ["tbody", tableSectionTags],
    ["tfoot", tableSectionTags],
]);
var voidElements = new Set([
    "area",
    "base",
    "basefont",
    "br",
    "col",
    "command",
    "embed",
    "frame",
    "hr",
    "img",
    "input",
    "isindex",
    "keygen",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
]);
var foreignContextElements = new Set(["math", "svg"]);
var htmlIntegrationElements = new Set([
    "mi",
    "mo",
    "mn",
    "ms",
    "mtext",
    "annotation-xml",
    "foreignobject",
    "desc",
    "title",
]);
var reNameEnd = /\s|\//;
var Parser = /** @class */ (function () {
    function Parser(cbs, options) {
        if (options === void 0) { options = {}; }
        var _a, _b, _c, _d, _e;
        this.options = options;
        /** The start index of the last event. */
        this.startIndex = 0;
        /** The end index of the last event. */
        this.endIndex = 0;
        /**
         * Store the start index of the current open tag,
         * so we can update the start index for attributes.
         */
        this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.buffers = [];
        this.bufferOffset = 0;
        /** The index of the last written buffer. Used when resuming after a `pause()`. */
        this.writeIndex = 0;
        /** Indicates whether the parser has finished running / `.end` has been called. */
        this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a = options.lowerCaseTags) !== null && _a !== void 0 ? _a : !options.xmlMode;
        this.lowerCaseAttributeNames =
            (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer_js_1.default)(this.options, this);
        (_e = (_d = this.cbs).onparserinit) === null || _e === void 0 ? void 0 : _e.call(_d, this);
    }
    // Tokenizer event handlers
    /** @internal */
    Parser.prototype.ontext = function (start, endIndex) {
        var _a, _b;
        var data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, data);
        this.startIndex = endIndex;
    };
    /** @internal */
    Parser.prototype.ontextentity = function (cp) {
        var _a, _b;
        /*
         * Entities can be emitted on the character, or directly after.
         * We use the section start here to get accurate indices.
         */
        var idx = this.tokenizer.getSectionStart();
        this.endIndex = idx - 1;
        (_b = (_a = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a, (0, decode_js_1.fromCodePoint)(cp));
        this.startIndex = idx;
    };
    Parser.prototype.isVoidElement = function (name) {
        return !this.options.xmlMode && voidElements.has(name);
    };
    /** @internal */
    Parser.prototype.onopentagname = function (start, endIndex) {
        this.endIndex = endIndex;
        var name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        this.emitOpenTag(name);
    };
    Parser.prototype.emitOpenTag = function (name) {
        var _a, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name;
        var impliesClose = !this.options.xmlMode && openImpliesClose.get(name);
        if (impliesClose) {
            while (this.stack.length > 0 &&
                impliesClose.has(this.stack[this.stack.length - 1])) {
                var el = this.stack.pop();
                (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, el, true);
            }
        }
        if (!this.isVoidElement(name)) {
            this.stack.push(name);
            if (foreignContextElements.has(name)) {
                this.foreignContext.push(true);
            }
            else if (htmlIntegrationElements.has(name)) {
                this.foreignContext.push(false);
            }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name);
        if (this.cbs.onopentag)
            this.attribs = {};
    };
    Parser.prototype.endOpenTag = function (isImplied) {
        var _a, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
            (_b = (_a = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a, this.tagname, this.attribs, isImplied);
            this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
            this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
    };
    /** @internal */
    Parser.prototype.onopentagend = function (endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onclosetag = function (start, endIndex) {
        var _a, _b, _c, _d, _e, _f;
        this.endIndex = endIndex;
        var name = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        if (foreignContextElements.has(name) ||
            htmlIntegrationElements.has(name)) {
            this.foreignContext.pop();
        }
        if (!this.isVoidElement(name)) {
            var pos = this.stack.lastIndexOf(name);
            if (pos !== -1) {
                if (this.cbs.onclosetag) {
                    var count = this.stack.length - pos;
                    while (count--) {
                        // We know the stack has sufficient elements.
                        this.cbs.onclosetag(this.stack.pop(), count !== 0);
                    }
                }
                else
                    this.stack.length = pos;
            }
            else if (!this.options.xmlMode && name === "p") {
                // Implicit open before close
                this.emitOpenTag("p");
                this.closeCurrentTag(true);
            }
        }
        else if (!this.options.xmlMode && name === "br") {
            // We can't use `emitOpenTag` for implicit open, as `br` would be implicitly closed.
            (_b = (_a = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a, "br");
            (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
            (_f = (_e = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e, "br", false);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onselfclosingtag = function (endIndex) {
        this.endIndex = endIndex;
        if (this.options.xmlMode ||
            this.options.recognizeSelfClosing ||
            this.foreignContext[this.foreignContext.length - 1]) {
            this.closeCurrentTag(false);
            // Set `startIndex` for next node
            this.startIndex = endIndex + 1;
        }
        else {
            // Ignore the fact that the tag is self-closing.
            this.onopentagend(endIndex);
        }
    };
    Parser.prototype.closeCurrentTag = function (isOpenImplied) {
        var _a, _b;
        var name = this.tagname;
        this.endOpenTag(isOpenImplied);
        // Self-closing tags will be on the top of the stack
        if (this.stack[this.stack.length - 1] === name) {
            // If the opening tag isn't implied, the closing tag has to be implied.
            (_b = (_a = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a, name, !isOpenImplied);
            this.stack.pop();
        }
    };
    /** @internal */
    Parser.prototype.onattribname = function (start, endIndex) {
        this.startIndex = start;
        var name = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames
            ? name.toLowerCase()
            : name;
    };
    /** @internal */
    Parser.prototype.onattribdata = function (start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
    };
    /** @internal */
    Parser.prototype.onattribentity = function (cp) {
        this.attribvalue += (0, decode_js_1.fromCodePoint)(cp);
    };
    /** @internal */
    Parser.prototype.onattribend = function (quote, endIndex) {
        var _a, _b;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a, this.attribname, this.attribvalue, quote === Tokenizer_js_1.QuoteType.Double
            ? '"'
            : quote === Tokenizer_js_1.QuoteType.Single
                ? "'"
                : quote === Tokenizer_js_1.QuoteType.NoValue
                    ? undefined
                    : null);
        if (this.attribs &&
            !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
            this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
    };
    Parser.prototype.getInstructionName = function (value) {
        var idx = value.search(reNameEnd);
        var name = idx < 0 ? value : value.substr(0, idx);
        if (this.lowerCaseTagNames) {
            name = name.toLowerCase();
        }
        return name;
    };
    /** @internal */
    Parser.prototype.ondeclaration = function (start, endIndex) {
        this.endIndex = endIndex;
        var value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            var name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("!".concat(name), "!".concat(value));
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onprocessinginstruction = function (start, endIndex) {
        this.endIndex = endIndex;
        var value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
            var name = this.getInstructionName(value);
            this.cbs.onprocessinginstruction("?".concat(name), "?".concat(value));
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.oncomment = function (start, endIndex, offset) {
        var _a, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.oncdata = function (start, endIndex, offset) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        var value = this.getSlice(start, endIndex - offset);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
            (_b = (_a = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a);
            (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
            (_f = (_e = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e);
        }
        else {
            (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, "[CDATA[".concat(value, "]]"));
            (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        // Set `startIndex` for next node
        this.startIndex = endIndex + 1;
    };
    /** @internal */
    Parser.prototype.onend = function () {
        var _a, _b;
        if (this.cbs.onclosetag) {
            // Set the end index for all remaining tags
            this.endIndex = this.startIndex;
            for (var i = this.stack.length; i > 0; this.cbs.onclosetag(this.stack[--i], true))
                ;
        }
        (_b = (_a = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    /**
     * Resets the parser to a blank state, ready to parse a new HTML document
     */
    Parser.prototype.reset = function () {
        var _a, _b, _c, _d;
        (_b = (_a = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
    };
    /**
     * Resets the parser, then parses a complete document and
     * pushes it to the handler.
     *
     * @param data Document to parse.
     */
    Parser.prototype.parseComplete = function (data) {
        this.reset();
        this.end(data);
    };
    Parser.prototype.getSlice = function (start, end) {
        while (start - this.bufferOffset >= this.buffers[0].length) {
            this.shiftBuffer();
        }
        var str = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while (end - this.bufferOffset > this.buffers[0].length) {
            this.shiftBuffer();
            str += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return str;
    };
    Parser.prototype.shiftBuffer = function () {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
    };
    /**
     * Parses a chunk of data and calls the corresponding callbacks.
     *
     * @param chunk Chunk to parse.
     */
    Parser.prototype.write = function (chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, new Error(".write() after done!"));
            return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
            this.tokenizer.write(chunk);
            this.writeIndex++;
        }
    };
    /**
     * Parses the end of the buffer and clears the stack, calls onend.
     *
     * @param chunk Optional final chunk to parse.
     */
    Parser.prototype.end = function (chunk) {
        var _a, _b;
        if (this.ended) {
            (_b = (_a = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a, Error(".end() after done!"));
            return;
        }
        if (chunk)
            this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
    };
    /**
     * Pauses parsing. The parser won't emit events until `resume` is called.
     */
    Parser.prototype.pause = function () {
        this.tokenizer.pause();
    };
    /**
     * Resumes parsing after `pause` was called.
     */
    Parser.prototype.resume = function () {
        this.tokenizer.resume();
        while (this.tokenizer.running &&
            this.writeIndex < this.buffers.length) {
            this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended)
            this.tokenizer.end();
    };
    /**
     * Alias of `write`, for backwards compatibility.
     *
     * @param chunk Chunk to parse.
     * @deprecated
     */
    Parser.prototype.parseChunk = function (chunk) {
        this.write(chunk);
    };
    /**
     * Alias of `end`, for backwards compatibility.
     *
     * @param chunk Optional final chunk to parse.
     * @deprecated
     */
    Parser.prototype.done = function (chunk) {
        this.end(chunk);
    };
    return Parser;
}());
Parser$1.Parser = Parser;

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.DefaultHandler = exports.DomUtils = exports.parseFeed = exports.getFeed = exports.ElementType = exports.Tokenizer = exports.createDomStream = exports.parseDOM = exports.parseDocument = exports.DomHandler = exports.Parser = void 0;
	var Parser_js_1 = Parser$1;
	Object.defineProperty(exports, "Parser", { enumerable: true, get: function () { return Parser_js_1.Parser; } });
	var domhandler_1 = lib$7;
	Object.defineProperty(exports, "DomHandler", { enumerable: true, get: function () { return domhandler_1.DomHandler; } });
	Object.defineProperty(exports, "DefaultHandler", { enumerable: true, get: function () { return domhandler_1.DomHandler; } });
	// Helper methods
	/**
	 * Parses the data, returns the resulting document.
	 *
	 * @param data The data that should be parsed.
	 * @param options Optional options for the parser and DOM builder.
	 */
	function parseDocument(data, options) {
	    var handler = new domhandler_1.DomHandler(undefined, options);
	    new Parser_js_1.Parser(handler, options).end(data);
	    return handler.root;
	}
	exports.parseDocument = parseDocument;
	/**
	 * Parses data, returns an array of the root nodes.
	 *
	 * Note that the root nodes still have a `Document` node as their parent.
	 * Use `parseDocument` to get the `Document` node instead.
	 *
	 * @param data The data that should be parsed.
	 * @param options Optional options for the parser and DOM builder.
	 * @deprecated Use `parseDocument` instead.
	 */
	function parseDOM(data, options) {
	    return parseDocument(data, options).children;
	}
	exports.parseDOM = parseDOM;
	/**
	 * Creates a parser instance, with an attached DOM handler.
	 *
	 * @param cb A callback that will be called once parsing has been completed.
	 * @param options Optional options for the parser and DOM builder.
	 * @param elementCb An optional callback that will be called every time a tag has been completed inside of the DOM.
	 */
	function createDomStream(cb, options, elementCb) {
	    var handler = new domhandler_1.DomHandler(cb, options, elementCb);
	    return new Parser_js_1.Parser(handler, options);
	}
	exports.createDomStream = createDomStream;
	var Tokenizer_js_1 = Tokenizer;
	Object.defineProperty(exports, "Tokenizer", { enumerable: true, get: function () { return __importDefault(Tokenizer_js_1).default; } });
	/*
	 * All of the following exports exist for backwards-compatibility.
	 * They should probably be removed eventually.
	 */
	var ElementType = __importStar(lib$6);
	exports.ElementType = ElementType;
	var domutils_1 = lib$8;
	Object.defineProperty(exports, "getFeed", { enumerable: true, get: function () { return domutils_1.getFeed; } });
	/**
	 * Parse a feed.
	 *
	 * @param feed The feed that should be parsed, as a string.
	 * @param options Optionally, options for parsing. When using this, you should set `xmlMode` to `true`.
	 */
	function parseFeed(feed, options) {
	    if (options === void 0) { options = { xmlMode: true }; }
	    return (0, domutils_1.getFeed)(parseDOM(feed, options));
	}
	exports.parseFeed = parseFeed;
	exports.DomUtils = __importStar(lib$8);
	
} (lib));

(function (exports) {
	var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    var desc = Object.getOwnPropertyDescriptor(m, k);
	    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	      desc = { enumerable: true, get: function() { return m[k]; } };
	    }
	    Object.defineProperty(o, k2, desc);
	}) : (function(o, m, k, k2) {
	    if (k2 === undefined) k2 = k;
	    o[k2] = m[k];
	}));
	var __setModuleDefault = (commonjsGlobal && commonjsGlobal.__setModuleDefault) || (Object.create ? (function(o, v) {
	    Object.defineProperty(o, "default", { enumerable: true, value: v });
	}) : function(o, v) {
	    o["default"] = v;
	});
	var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
	    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
	};
	var __importStar = (commonjsGlobal && commonjsGlobal.__importStar) || function (mod) {
	    if (mod && mod.__esModule) return mod;
	    var result = {};
	    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	    __setModuleDefault(result, mod);
	    return result;
	};
	var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
	    return (mod && mod.__esModule) ? mod : { "default": mod };
	};
	Object.defineProperty(exports, "__esModule", { value: true });
	exports.root = exports.parseHTML = exports.merge = exports.contains = exports.text = exports.xml = exports.html = exports.load = void 0;
	/**
	 * Types used in signatures of Cheerio methods.
	 *
	 * @category Cheerio
	 */
	__exportStar(types, exports);
	var load_js_1 = load;
	var parse_js_1 = parse$1;
	var parse5_adapter_js_1 = parse5Adapter;
	var dom_serializer_1 = __importDefault(lib$5);
	var htmlparser2_1 = lib;
	var parse = (0, parse_js_1.getParse)(function (content, options, isDocument, context) {
	    return options.xmlMode || options._useHtmlParser2
	        ? (0, htmlparser2_1.parseDocument)(content, options)
	        : (0, parse5_adapter_js_1.parseWithParse5)(content, options, isDocument, context);
	});
	// Duplicate docs due to https://github.com/TypeStrong/typedoc/issues/1616
	/**
	 * Create a querying function, bound to a document created from the provided markup.
	 *
	 * Note that similar to web browser contexts, this operation may introduce
	 * `<html>`, `<head>`, and `<body>` elements; set `isDocument` to `false` to
	 * switch to fragment mode and disable this.
	 *
	 * @param content - Markup to be loaded.
	 * @param options - Options for the created instance.
	 * @param isDocument - Allows parser to be switched to fragment mode.
	 * @returns The loaded document.
	 * @see {@link https://cheerio.js.org#loading} for additional usage information.
	 */
	exports.load = (0, load_js_1.getLoad)(parse, function (dom, options) {
	    return options.xmlMode || options._useHtmlParser2
	        ? (0, dom_serializer_1.default)(dom, options)
	        : (0, parse5_adapter_js_1.renderWithParse5)(dom);
	});
	/**
	 * The default cheerio instance.
	 *
	 * @deprecated Use the function returned by `load` instead.
	 */
	exports.default = (0, exports.load)([]);
	var static_js_1 = _static;
	Object.defineProperty(exports, "html", { enumerable: true, get: function () { return static_js_1.html; } });
	Object.defineProperty(exports, "xml", { enumerable: true, get: function () { return static_js_1.xml; } });
	Object.defineProperty(exports, "text", { enumerable: true, get: function () { return static_js_1.text; } });
	var staticMethods = __importStar(_static);
	/**
	 * In order to promote consistency with the jQuery library, users are encouraged
	 * to instead use the static method of the same name.
	 *
	 * @deprecated
	 * @example
	 *
	 * ```js
	 * const $ = cheerio.load('<div><p></p></div>');
	 *
	 * $.contains($('div').get(0), $('p').get(0));
	 * //=> true
	 *
	 * $.contains($('p').get(0), $('div').get(0));
	 * //=> false
	 * ```
	 *
	 * @returns {boolean}
	 */
	exports.contains = staticMethods.contains;
	/**
	 * In order to promote consistency with the jQuery library, users are encouraged
	 * to instead use the static method of the same name.
	 *
	 * @deprecated
	 * @example
	 *
	 * ```js
	 * const $ = cheerio.load('');
	 *
	 * $.merge([1, 2], [3, 4]);
	 * //=> [1, 2, 3, 4]
	 * ```
	 */
	exports.merge = staticMethods.merge;
	/**
	 * In order to promote consistency with the jQuery library, users are encouraged
	 * to instead use the static method of the same name as it is defined on the
	 * "loaded" Cheerio factory function.
	 *
	 * @deprecated See {@link static/parseHTML}.
	 * @example
	 *
	 * ```js
	 * const $ = cheerio.load('');
	 * $.parseHTML('<b>markup</b>');
	 * ```
	 */
	exports.parseHTML = staticMethods.parseHTML;
	/**
	 * Users seeking to access the top-level element of a parsed document should
	 * instead use the `root` static method of a "loaded" Cheerio function.
	 *
	 * @deprecated
	 * @example
	 *
	 * ```js
	 * const $ = cheerio.load('');
	 * $.root();
	 * ```
	 */
	exports.root = staticMethods.root;
	
} (lib$9));

var stopword_cjs = {};

Object.defineProperty(stopword_cjs, '__esModule', { value: true });

const num123 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const numFas = ['۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹', '۰'];
const numKor = ['０', '１', '２', '３', '４', '５', '６', '７', '８', '９'];
const numMya = ['၀', '၁', '၂', '၃', '၄', '၅', '၆', '၇', '၈', '၉'];
const _123 = [...num123, ...numFas, ...numKor, ...numMya];

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const afr = ['die', 'het', 'en', 'sy', 'nie', 'was', 'hy', 'te', 'is', 'ek', 'om', 'hulle', 'in', 'my', '\'n', 'vir', 'toe', 'haar', 'van', 'dit', 'op', 'se', 'wat', 'met', 'gaan', 'baie', 'ons', 'jy', 'na', 'maar', 'hom', 'so', 'n', 'huis', 'kan', 'aan', 'dat', 'daar', 'sal', 'jou', 'gesê', 'by', 'kom', 'een', 'ma', 'as', 'son', 'groot', 'begin', 'al'];

/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const ara = ['،', 'ّآض', 'آمينَ', 'آه', 'آهاً', 'آي', 'أ', 'أب', 'أجل', 'أجمع', 'أخ', 'أخذ', 'أصبح', 'أضحى', 'أقبل', 'أقل', 'أكثر', 'ألا', 'أم', 'أما', 'أمامك', 'أمامكَ', 'أمسى', 'أمّا', 'أن', 'أنا', 'أنت', 'أنتم', 'أنتما', 'أنتن', 'أنتِ', 'أنشأ', 'أنّى', 'أو', 'أوشك', 'أولئك', 'أولئكم', 'أولاء', 'أولالك', 'أوّهْ', 'أي', 'أيا', 'أين', 'أينما', 'أيّ', 'أَنَّ', 'أََيُّ', 'أُفٍّ', 'إذ', 'إذا', 'إذاً', 'إذما', 'إذن', 'إلى', 'إليكم', 'إليكما', 'إليكنّ', 'إليكَ', 'إلَيْكَ', 'إلّا', 'إمّا', 'إن', 'إنّما', 'إي', 'إياك', 'إياكم', 'إياكما', 'إياكن', 'إيانا', 'إياه', 'إياها', 'إياهم', 'إياهما', 'إياهن', 'إياي', 'إيهٍ', 'إِنَّ', 'ا', 'ابتدأ', 'اثر', 'اجل', 'احد', 'اخرى', 'اخلولق', 'اذا', 'اربعة', 'ارتدّ', 'استحال', 'اطار', 'اعادة', 'اعلنت', 'اف', 'اكثر', 'اكد', 'الألاء', 'الألى', 'الا', 'الاخيرة', 'الان', 'الاول', 'الاولى', 'التى', 'التي', 'الثاني', 'الثانية', 'الذاتي', 'الذى', 'الذي', 'الذين', 'السابق', 'الف', 'اللائي', 'اللاتي', 'اللتان', 'اللتيا', 'اللتين', 'اللذان', 'اللذين', 'اللواتي', 'الماضي', 'المقبل', 'الوقت', 'الى', 'اليوم', 'اما', 'امام', 'امس', 'ان', 'انبرى', 'انقلب', 'انه', 'انها', 'او', 'اول', 'اي', 'ايار', 'ايام', 'ايضا', 'ب', 'بات', 'باسم', 'بان', 'بخٍ', 'برس', 'بسبب', 'بسّ', 'بشكل', 'بضع', 'بطآن', 'بعد', 'بعض', 'بك', 'بكم', 'بكما', 'بكن', 'بل', 'بلى', 'بما', 'بماذا', 'بمن', 'بن', 'بنا', 'به', 'بها', 'بي', 'بيد', 'بين', 'بَسْ', 'بَلْهَ', 'بِئْسَ', 'تانِ', 'تانِك', 'تبدّل', 'تجاه', 'تحوّل', 'تلقاء', 'تلك', 'تلكم', 'تلكما', 'تم', 'تينك', 'تَيْنِ', 'تِه', 'تِي', 'ثلاثة', 'ثم', 'ثمّ', 'ثمّة', 'ثُمَّ', 'جعل', 'جلل', 'جميع', 'جير', 'حار', 'حاشا', 'حاليا', 'حاي', 'حتى', 'حرى', 'حسب', 'حم', 'حوالى', 'حول', 'حيث', 'حيثما', 'حين', 'حيَّ', 'حَبَّذَا', 'حَتَّى', 'حَذارِ', 'خلا', 'خلال', 'دون', 'دونك', 'ذا', 'ذات', 'ذاك', 'ذانك', 'ذانِ', 'ذلك', 'ذلكم', 'ذلكما', 'ذلكن', 'ذو', 'ذوا', 'ذواتا', 'ذواتي', 'ذيت', 'ذينك', 'ذَيْنِ', 'ذِه', 'ذِي', 'راح', 'رجع', 'رويدك', 'ريث', 'رُبَّ', 'زيارة', 'سبحان', 'سرعان', 'سنة', 'سنوات', 'سوف', 'سوى', 'سَاءَ', 'سَاءَمَا', 'شبه', 'شخصا', 'شرع', 'شَتَّانَ', 'صار', 'صباح', 'صفر', 'صهٍ', 'صهْ', 'ضد', 'ضمن', 'طاق', 'طالما', 'طفق', 'طَق', 'ظلّ', 'عاد', 'عام', 'عاما', 'عامة', 'عدا', 'عدة', 'عدد', 'عدم', 'عسى', 'عشر', 'عشرة', 'علق', 'على', 'عليك', 'عليه', 'عليها', 'علًّ', 'عن', 'عند', 'عندما', 'عوض', 'عين', 'عَدَسْ', 'عَمَّا', 'غدا', 'غير', 'ـ', 'ف', 'فان', 'فلان', 'فو', 'فى', 'في', 'فيم', 'فيما', 'فيه', 'فيها', 'قال', 'قام', 'قبل', 'قد', 'قطّ', 'قلما', 'قوة', 'كأنّما', 'كأين', 'كأيّ', 'كأيّن', 'كاد', 'كان', 'كانت', 'كذا', 'كذلك', 'كرب', 'كل', 'كلا', 'كلاهما', 'كلتا', 'كلم', 'كليكما', 'كليهما', 'كلّما', 'كلَّا', 'كم', 'كما', 'كي', 'كيت', 'كيف', 'كيفما', 'كَأَنَّ', 'كِخ', 'لئن', 'لا', 'لات', 'لاسيما', 'لدن', 'لدى', 'لعمر', 'لقاء', 'لك', 'لكم', 'لكما', 'لكن', 'لكنَّما', 'لكي', 'لكيلا', 'للامم', 'لم', 'لما', 'لمّا', 'لن', 'لنا', 'له', 'لها', 'لو', 'لوكالة', 'لولا', 'لوما', 'لي', 'لَسْتَ', 'لَسْتُ', 'لَسْتُم', 'لَسْتُمَا', 'لَسْتُنَّ', 'لَسْتِ', 'لَسْنَ', 'لَعَلَّ', 'لَكِنَّ', 'لَيْتَ', 'لَيْسَ', 'لَيْسَا', 'لَيْسَتَا', 'لَيْسَتْ', 'لَيْسُوا', 'لَِسْنَا', 'ما', 'ماانفك', 'مابرح', 'مادام', 'ماذا', 'مازال', 'مافتئ', 'مايو', 'متى', 'مثل', 'مذ', 'مساء', 'مع', 'معاذ', 'مقابل', 'مكانكم', 'مكانكما', 'مكانكنّ', 'مكانَك', 'مليار', 'مليون', 'مما', 'ممن', 'من', 'منذ', 'منها', 'مه', 'مهما', 'مَنْ', 'مِن', 'نحن', 'نحو', 'نعم', 'نفس', 'نفسه', 'نهاية', 'نَخْ', 'نِعِمّا', 'نِعْمَ', 'ها', 'هاؤم', 'هاكَ', 'هاهنا', 'هبّ', 'هذا', 'هذه', 'هكذا', 'هل', 'هلمَّ', 'هلّا', 'هم', 'هما', 'هن', 'هنا', 'هناك', 'هنالك', 'هو', 'هي', 'هيا', 'هيت', 'هيّا', 'هَؤلاء', 'هَاتانِ', 'هَاتَيْنِ', 'هَاتِه', 'هَاتِي', 'هَجْ', 'هَذا', 'هَذانِ', 'هَذَيْنِ', 'هَذِه', 'هَذِي', 'هَيْهَاتَ', 'و', 'وا', 'واحد', 'واضاف', 'واضافت', 'واكد', 'وان', 'واهاً', 'واوضح', 'وراءَك', 'وفي', 'وقال', 'وقالت', 'وقد', 'وقف', 'وكان', 'وكانت', 'ولا', 'ولم', 'ومن', 'وهو', 'وهي', 'ويكأنّ', 'وَيْ', 'وُشْكَانََ', 'يكون', 'يمكن', 'يوم', 'ّأيّان'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const hye = ['այդ', 'այլ', 'այն', 'այս', 'դու', 'դուք', 'եմ', 'են', 'ենք', 'ես', 'եք', 'է', 'էի', 'էին', 'էինք', 'էիր', 'էիք', 'էր', 'ըստ', 'թ', 'ի', 'ին', 'իսկ', 'իր', 'կամ', 'համար', 'հետ', 'հետո', 'մենք', 'մեջ', 'մի', 'ն', 'նա', 'նաև', 'նրա', 'նրանք', 'որ', 'որը', 'որոնք', 'որպես', 'ու', 'ում', 'պիտի', 'վրա', 'և'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const eus = ['al', 'anitz', 'arabera', 'asko', 'baina', 'bat', 'batean', 'batek', 'bati', 'batzuei', 'batzuek', 'batzuetan', 'batzuk', 'bera', 'beraiek', 'berau', 'berauek', 'bere', 'berori', 'beroriek', 'beste', 'bezala', 'da', 'dago', 'dira', 'ditu', 'du', 'dute', 'edo', 'egin', 'ere', 'eta', 'eurak', 'ez', 'gainera', 'gu', 'gutxi', 'guzti', 'haiei', 'haiek', 'haietan', 'hainbeste', 'hala', 'han', 'handik', 'hango', 'hara', 'hari', 'hark', 'hartan', 'hau', 'hauei', 'hauek', 'hauetan', 'hemen', 'hemendik', 'hemengo', 'hi', 'hona', 'honek', 'honela', 'honetan', 'honi', 'hor', 'hori', 'horiei', 'horiek', 'horietan', 'horko', 'horra', 'horrek', 'horrela', 'horretan', 'horri', 'hortik', 'hura', 'izan', 'ni', 'noiz', 'nola', 'non', 'nondik', 'nongo', 'nor', 'nora', 'ze', 'zein', 'zen', 'zenbait', 'zenbat', 'zer', 'zergatik', 'ziren', 'zituen', 'zu', 'zuek', 'zuen', 'zuten'];

/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const ben = ['অতএব', 'অথচ', 'অথবা', 'অনুযায়ী', 'অনেক', 'অনেকে', 'অনেকেই', 'অন্তত', 'অন্য', 'অবধি', 'অবশ্য', 'অর্থাত', 'আই', 'আগামী', 'আগে', 'আগেই', 'আছে', 'আজ', 'আদ্যভাগে', 'আপনার', 'আপনি', 'আবার', 'আমরা', 'আমাকে', 'আমাদের', 'আমার', 'আমি', 'আর', 'আরও', 'ই', 'ইত্যাদি', 'ইহা', 'উচিত', 'উত্তর', 'উনি', 'উপর', 'উপরে', 'এ', 'এঁদের', 'এঁরা', 'এই', 'একই', 'একটি', 'একবার', 'একে', 'এক্', 'এখন', 'এখনও', 'এখানে', 'এখানেই', 'এটা', 'এটাই', 'এটি', 'এত', 'এতটাই', 'এতে', 'এদের', 'এব', 'এবং', 'এবার', 'এমন', 'এমনকী', 'এমনি', 'এর', 'এরা', 'এল', 'এস', 'এসে', 'ঐ', 'ও', 'ওঁদের', 'ওঁর', 'ওঁরা', 'ওই', 'ওকে', 'ওখানে', 'ওদের', 'ওর', 'ওরা', 'কখনও', 'কত', 'কবে', 'কমনে', 'কয়েক', 'কয়েকটি', 'করছে', 'করছেন', 'করতে', 'করবে', 'করবেন', 'করলে', 'করলেন', 'করা', 'করাই', 'করায়', 'করার', 'করি', 'করিতে', 'করিয়া', 'করিয়ে', 'করে', 'করেই', 'করেছিলেন', 'করেছে', 'করেছেন', 'করেন', 'কাউকে', 'কাছ', 'কাছে', 'কাজ', 'কাজে', 'কারও', 'কারণ', 'কি', 'কিংবা', 'কিছু', 'কিছুই', 'কিন্তু', 'কী', 'কে', 'কেউ', 'কেউই', 'কেখা', 'কেন', 'কোটি', 'কোন', 'কোনও', 'কোনো', 'ক্ষেত্রে', 'কয়েক', 'খুব', 'গিয়ে', 'গিয়েছে', 'গিয়ে', 'গুলি', 'গেছে', 'গেল', 'গেলে', 'গোটা', 'চলে', 'চান', 'চায়', 'চার', 'চালু', 'চেয়ে', 'চেষ্টা', 'ছাড়া', 'ছাড়াও', 'ছিল', 'ছিলেন', 'জন', 'জনকে', 'জনের', 'জন্য', 'জন্যওজে', 'জানতে', 'জানা', 'জানানো', 'জানায়', 'জানিয়ে', 'জানিয়েছে', 'জে', 'জ্নজন', 'টি', 'ঠিক', 'তখন', 'তত', 'তথা', 'তবু', 'তবে', 'তা', 'তাঁকে', 'তাঁদের', 'তাঁর', 'তাঁরা', 'তাঁাহারা', 'তাই', 'তাও', 'তাকে', 'তাতে', 'তাদের', 'তার', 'তারপর', 'তারা', 'তারৈ', 'তাহলে', 'তাহা', 'তাহাতে', 'তাহার', 'তিনঐ', 'তিনি', 'তিনিও', 'তুমি', 'তুলে', 'তেমন', 'তো', 'তোমার', 'থাকবে', 'থাকবেন', 'থাকা', 'থাকায়', 'থাকে', 'থাকেন', 'থেকে', 'থেকেই', 'থেকেও', 'দিকে', 'দিতে', 'দিন', 'দিয়ে', 'দিয়েছে', 'দিয়েছেন', 'দিলেন', 'দু', 'দুই', 'দুটি', 'দুটো', 'দেওয়া', 'দেওয়ার', 'দেওয়া', 'দেখতে', 'দেখা', 'দেখে', 'দেন', 'দেয়', 'দ্বারা', 'ধরা', 'ধরে', 'ধামার', 'নতুন', 'নয়', 'না', 'নাই', 'নাকি', 'নাগাদ', 'নানা', 'নিজে', 'নিজেই', 'নিজেদের', 'নিজের', 'নিতে', 'নিয়ে', 'নিয়ে', 'নেই', 'নেওয়া', 'নেওয়ার', 'নেওয়া', 'নয়', 'পক্ষে', 'পর', 'পরে', 'পরেই', 'পরেও', 'পর্যন্ত', 'পাওয়া', 'পাচ', 'পারি', 'পারে', 'পারেন', 'পি', 'পেয়ে', 'পেয়্র্', 'প্রতি', 'প্রথম', 'প্রভৃতি', 'প্রযন্ত', 'প্রাথমিক', 'প্রায়', 'প্রায়', 'ফলে', 'ফিরে', 'ফের', 'বক্তব্য', 'বদলে', 'বন', 'বরং', 'বলতে', 'বলল', 'বললেন', 'বলা', 'বলে', 'বলেছেন', 'বলেন', 'বসে', 'বহু', 'বা', 'বাদে', 'বার', 'বি', 'বিনা', 'বিভিন্ন', 'বিশেষ', 'বিষয়টি', 'বেশ', 'বেশি', 'ব্যবহার', 'ব্যাপারে', 'ভাবে', 'ভাবেই', 'মতো', 'মতোই', 'মধ্যভাগে', 'মধ্যে', 'মধ্যেই', 'মধ্যেও', 'মনে', 'মাত্র', 'মাধ্যমে', 'মোট', 'মোটেই', 'যখন', 'যত', 'যতটা', 'যথেষ্ট', 'যদি', 'যদিও', 'যা', 'যাঁর', 'যাঁরা', 'যাওয়া', 'যাওয়ার', 'যাওয়া', 'যাকে', 'যাচ্ছে', 'যাতে', 'যাদের', 'যান', 'যাবে', 'যায়', 'যার', 'যারা', 'যিনি', 'যে', 'যেখানে', 'যেতে', 'যেন', 'যেমন', 'র', 'রকম', 'রয়েছে', 'রাখা', 'রেখে', 'লক্ষ', 'শুধু', 'শুরু', 'সঙ্গে', 'সঙ্গেও', 'সব', 'সবার', 'সমস্ত', 'সম্প্রতি', 'সহ', 'সহিত', 'সাধারণ', 'সামনে', 'সি', 'সুতরাং', 'সে', 'সেই', 'সেখান', 'সেখানে', 'সেটা', 'সেটাই', 'সেটাও', 'সেটি', 'স্পষ্ট', 'স্বয়ং', 'হইতে', 'হইবে', 'হইয়া', 'হওয়া', 'হওয়ায়', 'হওয়ার', 'হচ্ছে', 'হত', 'হতে', 'হতেই', 'হন', 'হবে', 'হবেন', 'হয়', 'হয়তো', 'হয়নি', 'হয়ে', 'হয়েই', 'হয়েছিল', 'হয়েছে', 'হয়েছেন', 'হল', 'হলে', 'হলেই', 'হলেও', 'হলো', 'হাজার', 'হিসাবে', 'হৈলে', 'হোক', 'হয়'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const bre = ['a', 'ainda', 'alem', 'ambas', 'ambos', 'antes', 'ao', 'aonde', 'aos', 'apos', 'aquele', 'aqueles', 'as', 'assim', 'com', 'como', 'contra', 'contudo', 'cuja', 'cujas', 'cujo', 'cujos', 'da', 'das', 'de', 'dela', 'dele', 'deles', 'demais', 'depois', 'desde', 'desta', 'deste', 'dispoe', 'dispoem', 'diversa', 'diversas', 'diversos', 'do', 'dos', 'durante', 'e', 'ela', 'elas', 'ele', 'eles', 'em', 'entao', 'entre', 'essa', 'essas', 'esse', 'esses', 'esta', 'estas', 'este', 'estes', 'ha', 'isso', 'isto', 'logo', 'mais', 'mas', 'mediante', 'menos', 'mesma', 'mesmas', 'mesmo', 'mesmos', 'na', 'nao', 'nas', 'nem', 'nesse', 'neste', 'nos', 'o', 'os', 'ou', 'outra', 'outras', 'outro', 'outros', 'pelas', 'pelo', 'pelos', 'perante', 'pois', 'por', 'porque', 'portanto', 'propios', 'proprio', 'quais', 'qual', 'qualquer', 'quando', 'quanto', 'que', 'quem', 'quer', 'se', 'seja', 'sem', 'sendo', 'seu', 'seus', 'sob', 'sobre', 'sua', 'suas', 'tal', 'tambem', 'teu', 'teus', 'toda', 'todas', 'todo', 'todos', 'tua', 'tuas', 'tudo', 'um', 'uma', 'umas', 'uns'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const bul = ['а', 'автентичен', 'аз', 'ако', 'ала', 'бе', 'без', 'беше', 'би', 'бивш', 'бивша', 'бившо', 'бил', 'била', 'били', 'било', 'благодаря', 'близо', 'бъдат', 'бъде', 'бяха', 'в', 'вас', 'ваш', 'ваша', 'вероятно', 'вече', 'взема', 'ви', 'вие', 'винаги', 'внимава', 'време', 'все', 'всеки', 'всички', 'всичко', 'всяка', 'във', 'въпреки', 'върху', 'г', 'ги', 'главен', 'главна', 'главно', 'глас', 'го', 'година', 'години', 'годишен', 'д', 'да', 'дали', 'два', 'двама', 'двамата', 'две', 'двете', 'ден', 'днес', 'дни', 'до', 'добра', 'добре', 'добро', 'добър', 'докато', 'докога', 'дори', 'досега', 'доста', 'друг', 'друга', 'други', 'е', 'евтин', 'едва', 'един', 'една', 'еднаква', 'еднакви', 'еднакъв', 'едно', 'екип', 'ето', 'живот', 'за', 'забавям', 'зад', 'заедно', 'заради', 'засега', 'заспал', 'затова', 'защо', 'защото', 'и', 'из', 'или', 'им', 'има', 'имат', 'иска', 'й', 'каза', 'как', 'каква', 'какво', 'както', 'какъв', 'като', 'кога', 'когато', 'което', 'които', 'кой', 'който', 'колко', 'която', 'къде', 'където', 'към', 'лесен', 'лесно', 'ли', 'лош', 'м', 'май', 'малко', 'ме', 'между', 'мек', 'мен', 'месец', 'ми', 'много', 'мнозина', 'мога', 'могат', 'може', 'мокър', 'моля', 'момента', 'му', 'н', 'на', 'над', 'назад', 'най', 'направи', 'напред', 'например', 'нас', 'не', 'него', 'нещо', 'нея', 'ни', 'ние', 'никой', 'нито', 'нищо', 'но', 'нов', 'нова', 'нови', 'новина', 'някои', 'някой', 'няколко', 'няма', 'обаче', 'около', 'освен', 'особено', 'от', 'отгоре', 'отново', 'още', 'пак', 'по', 'повече', 'повечето', 'под', 'поне', 'поради', 'после', 'почти', 'прави', 'пред', 'преди', 'през', 'при', 'пък', 'първата', 'първи', 'първо', 'пъти', 'равен', 'равна', 'с', 'са', 'сам', 'само', 'се', 'сега', 'си', 'син', 'скоро', 'след', 'следващ', 'сме', 'смях', 'според', 'сред', 'срещу', 'сте', 'съм', 'със', 'също', 'т', 'т.н.', 'тази', 'така', 'такива', 'такъв', 'там', 'твой', 'те', 'тези', 'ти', 'то', 'това', 'тогава', 'този', 'той', 'толкова', 'точно', 'три', 'трябва', 'тук', 'тъй', 'тя', 'тях', 'у', 'утре', 'харесва', 'хиляди', 'ч', 'часа', 'че', 'често', 'чрез', 'ще', 'щом', 'юмрук', 'я', 'як'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const cat = ['a', 'abans', 'ací', 'ah', 'així', 'això', 'al', 'aleshores', 'algun', 'alguna', 'algunes', 'alguns', 'alhora', 'allà', 'allí', 'allò', 'als', 'altra', 'altre', 'altres', 'amb', 'ambdues', 'ambdós', 'apa', 'aquell', 'aquella', 'aquelles', 'aquells', 'aquest', 'aquesta', 'aquestes', 'aquests', 'aquí', 'baix', 'cada', 'cadascuna', 'cadascunes', 'cadascuns', 'cadascú', 'com', 'contra', 'd\'un', 'd\'una', 'd\'unes', 'd\'uns', 'dalt', 'de', 'del', 'dels', 'des', 'després', 'dins', 'dintre', 'donat', 'doncs', 'durant', 'e', 'eh', 'el', 'els', 'em', 'en', 'encara', 'ens', 'entre', 'eren', 'es', 'esta', 'estaven', 'esteu', 'està', 'estàvem', 'estàveu', 'et', 'etc', 'ets', 'fins', 'fora', 'gairebé', 'ha', 'han', 'has', 'havia', 'he', 'hem', 'heu', 'hi', 'ho', 'i', 'igual', 'iguals', 'ja', 'l\'hi', 'la', 'les', 'li', 'li\'n', 'llavors', 'm\'he', 'ma', 'mal', 'malgrat', 'mateix', 'mateixa', 'mateixes', 'mateixos', 'me', 'mentre', 'meu', 'meus', 'meva', 'meves', 'molt', 'molta', 'moltes', 'molts', 'mon', 'mons', 'més', 'n\'he', 'n\'hi', 'ne', 'ni', 'no', 'nogensmenys', 'només', 'nosaltres', 'nostra', 'nostre', 'nostres', 'o', 'oh', 'oi', 'on', 'pas', 'pel', 'pels', 'per', 'perquè', 'però', 'poc', 'poca', 'pocs', 'poques', 'potser', 'propi', 'qual', 'quals', 'quan', 'quant', 'que', 'quelcom', 'qui', 'quin', 'quina', 'quines', 'quins', 'què', 's\'ha', 's\'han', 'sa', 'semblant', 'semblants', 'ses', 'seu', 'seus', 'seva', 'seves', 'si', 'sobre', 'sobretot', 'solament', 'sols', 'son', 'sons', 'sota', 'sou', 'sóc', 'són', 't\'ha', 't\'han', 't\'he', 'ta', 'tal', 'també', 'tampoc', 'tan', 'tant', 'tanta', 'tantes', 'teu', 'teus', 'teva', 'teves', 'ton', 'tons', 'tot', 'tota', 'totes', 'tots', 'un', 'una', 'unes', 'uns', 'us', 'va', 'vaig', 'vam', 'van', 'vas', 'veu', 'vosaltres', 'vostra', 'vostre', 'vostres', 'érem', 'éreu', 'és'];

/*
Copyright (c) 2011, David Przybilla, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const zho = ['的', '地', '得', '和', '跟', '与', '及', '向', '并', '等', '更', '已', '含', '做', '我', '你', '他', '她', '们', '某', '该', '各', '每', '这', '那', '哪', '什', '么', '谁', '年', '月', '日', '时', '分', '秒', '几', '多', '来', '在', '就', '又', '很', '呢', '吧', '吗', '了', '嘛', '哇', '儿', '哼', '啊', '嗯', '是', '着', '都', '不', '说', '也', '看', '把', '还', '个', '有', '小', '到', '一', '为', '中', '于', '对', '会', '之', '第', '此', '或', '共', '按', '请'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const hrv = ['a', 'ako', 'ali', 'bi', 'bih', 'bila', 'bili', 'bilo', 'bio', 'bismo', 'biste', 'biti', 'bumo', 'da', 'do', 'duž', 'ga', 'hoće', 'hoćemo', 'hoćete', 'hoćeš', 'hoću', 'i', 'iako', 'ih', 'ili', 'iz', 'ja', 'je', 'jedna', 'jedne', 'jedno', 'jer', 'jesam', 'jesi', 'jesmo', 'jest', 'jeste', 'jesu', 'jim', 'joj', 'još', 'ju', 'kada', 'kako', 'kao', 'koja', 'koje', 'koji', 'kojima', 'koju', 'kroz', 'li', 'me', 'mene', 'meni', 'mi', 'mimo', 'moj', 'moja', 'moje', 'mu', 'na', 'nad', 'nakon', 'nam', 'nama', 'nas', 'naš', 'naša', 'naše', 'našeg', 'ne', 'nego', 'neka', 'neki', 'nekog', 'neku', 'nema', 'netko', 'neće', 'nećemo', 'nećete', 'nećeš', 'neću', 'nešto', 'ni', 'nije', 'nikoga', 'nikoje', 'nikoju', 'nisam', 'nisi', 'nismo', 'niste', 'nisu', 'njega', 'njegov', 'njegova', 'njegovo', 'njemu', 'njezin', 'njezina', 'njezino', 'njih', 'njihov', 'njihova', 'njihovo', 'njim', 'njima', 'njoj', 'nju', 'no', 'o', 'od', 'odmah', 'on', 'ona', 'oni', 'ono', 'ova', 'pa', 'pak', 'po', 'pod', 'pored', 'prije', 's', 'sa', 'sam', 'samo', 'se', 'sebe', 'sebi', 'si', 'smo', 'ste', 'su', 'sve', 'svi', 'svog', 'svoj', 'svoja', 'svoje', 'svom', 'ta', 'tada', 'taj', 'tako', 'te', 'tebe', 'tebi', 'ti', 'to', 'toj', 'tome', 'tu', 'tvoj', 'tvoja', 'tvoje', 'u', 'uz', 'vam', 'vama', 'vas', 'vaš', 'vaša', 'vaše', 'već', 'vi', 'vrlo', 'za', 'zar', 'će', 'ćemo', 'ćete', 'ćeš', 'ću', 'što'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const ces = ['a', 'aby', 'ahoj', 'aj', 'ale', 'anebo', 'ani', 'ano', 'asi', 'aspoň', 'atd', 'atp', 'ačkoli', 'až', 'bez', 'beze', 'blízko', 'bohužel', 'brzo', 'bude', 'budem', 'budeme', 'budete', 'budeš', 'budou', 'budu', 'by', 'byl', 'byla', 'byli', 'bylo', 'byly', 'bys', 'být', 'během', 'chce', 'chceme', 'chcete', 'chceš', 'chci', 'chtít', 'chtějí', 'chut\'', 'chuti', 'co', 'což', 'cz', 'daleko', 'další', 'den', 'deset', 'devatenáct', 'devět', 'dnes', 'do', 'dobrý', 'docela', 'dva', 'dvacet', 'dvanáct', 'dvě', 'dál', 'dále', 'děkovat', 'děkujeme', 'děkuji', 'ho', 'hodně', 'i', 'jak', 'jakmile', 'jako', 'jakož', 'jde', 'je', 'jeden', 'jedenáct', 'jedna', 'jedno', 'jednou', 'jedou', 'jeho', 'jehož', 'jej', 'jejich', 'její', 'jelikož', 'jemu', 'jen', 'jenom', 'jestli', 'jestliže', 'ještě', 'jež', 'ji', 'jich', 'jimi', 'jinak', 'jiné', 'již', 'jsem', 'jseš', 'jsi', 'jsme', 'jsou', 'jste', 'já', 'jí', 'jím', 'jíž', 'k', 'kam', 'kde', 'kdo', 'kdy', 'když', 'ke', 'kolik', 'kromě', 'kterou', 'která', 'které', 'který', 'kteří', 'kvůli', 'mají', 'mezi', 'mi', 'mne', 'mnou', 'mně', 'moc', 'mohl', 'mohou', 'moje', 'moji', 'možná', 'musí', 'my', 'má', 'málo', 'mám', 'máme', 'máte', 'máš', 'mé', 'mí', 'mít', 'mě', 'můj', 'může', 'na', 'nad', 'nade', 'napište', 'naproti', 'načež', 'naše', 'naši', 'ne', 'nebo', 'nebyl', 'nebyla', 'nebyli', 'nebyly', 'nedělají', 'nedělá', 'nedělám', 'neděláme', 'neděláte', 'neděláš', 'neg', 'nejsi', 'nejsou', 'nemají', 'nemáme', 'nemáte', 'neměl', 'není', 'nestačí', 'nevadí', 'než', 'nic', 'nich', 'nimi', 'nové', 'nový', 'nula', 'nám', 'námi', 'nás', 'náš', 'ním', 'ně', 'něco', 'nějak', 'někde', 'někdo', 'němu', 'němuž', 'o', 'od', 'ode', 'on', 'ona', 'oni', 'ono', 'ony', 'osm', 'osmnáct', 'pak', 'patnáct', 'po', 'pod', 'podle', 'pokud', 'potom', 'pouze', 'pozdě', 'pořád', 'pravé', 'pro', 'prostě', 'prosím', 'proti', 'proto', 'protože', 'proč', 'první', 'pta', 'pět', 'před', 'přes', 'přese', 'při', 'přičemž', 're', 'rovně', 's', 'se', 'sedm', 'sedmnáct', 'si', 'skoro', 'smí', 'smějí', 'snad', 'spolu', 'sta', 'sto', 'strana', 'sté', 'své', 'svých', 'svým', 'svými', 'ta', 'tady', 'tak', 'takhle', 'taky', 'také', 'takže', 'tam', 'tamhle', 'tamhleto', 'tamto', 'tato', 'tebe', 'tebou', 'ted\'', 'tedy', 'ten', 'tento', 'teto', 'ti', 'tipy', 'tisíc', 'tisíce', 'to', 'tobě', 'tohle', 'toho', 'tohoto', 'tom', 'tomto', 'tomu', 'tomuto', 'toto', 'trošku', 'tu', 'tuto', 'tvoje', 'tvá', 'tvé', 'tvůj', 'ty', 'tyto', 'téma', 'tím', 'tímto', 'tě', 'těm', 'těmu', 'třeba', 'tři', 'třináct', 'u', 'určitě', 'už', 'v', 'vaše', 'vaši', 've', 'vedle', 'večer', 'vlastně', 'vy', 'vám', 'vámi', 'vás', 'váš', 'více', 'však', 'všechno', 'všichni', 'vůbec', 'vždy', 'z', 'za', 'zatímco', 'zač', 'zda', 'zde', 'ze', 'zprávy', 'zpět', 'čau', 'či', 'článku', 'články', 'čtrnáct', 'čtyři', 'šest', 'šestnáct', 'že'];

/*
Creative Commons – Attribution / ShareAlike 3.0 license
http://creativecommons.org/licenses/by-sa/3.0/

List based on frequently used words in subtitles in 2012.

Thanks to
opensubtitles.org
https://invokeit.wordpress.com/frequency-word-lists/#comment-9707
*/

const dan = ['er', 'jeg', 'det', 'du', 'ikke', 'i', 'at', 'en', 'og', 'har', 'vi', 'til', 'på', 'hvad', 'med', 'mig', 'så', 'for', 'de', 'dig', 'der', 'den', 'han', 'kan', 'af', 'vil', 'var', 'her', 'et', 'skal', 'ved', 'nu', 'men', 'om', 'ja', 'som', 'nej', 'min', 'noget', 'ham', 'hun', 'bare', 'kom', 'være', 'din', 'hvor', 'dem', 'ud', 'os', 'hvis', 'må', 'se', 'godt', 'have', 'fra', 'ville', 'okay', 'lige', 'op', 'alle', 'lad', 'hvorfor', 'sig', 'hvordan', 'få', 'kunne', 'eller', 'hvem', 'man', 'bliver', 'havde', 'da', 'ingen', 'efter', 'når', 'alt', 'jo', 'to', 'mit', 'ind', 'hej', 'aldrig', 'lidt', 'nogen', 'over', 'også', 'mand', 'far', 'skulle', 'selv', 'får', 'hans', 'ser', 'vores', 'jer', 'sådan', 'dit', 'kun', 'deres', 'ned', 'mine', 'komme', 'tage', 'denne', 'sige', 'dette', 'blive', 'helt', 'fordi', 'end', 'tag', 'før', 'fik', 'dine'];

/*
Copyright (c) 2011, Chris Umbel, Martijn de Boer, Damien van Holten

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// This dutch wordlist has been parsed from a list created by Damien van Holten
// source: http://www.damienvanholten.com/blog/dutch-stop-words/

const nld = ['aan', 'af', 'al', 'alles', 'als', 'altijd', 'andere', 'ben', 'bij', 'daar', 'dan', 'dat', 'de', 'der', 'deze', 'die', 'dit', 'doch', 'doen', 'door', 'dus', 'een', 'eens', 'en', 'er', 'ge', 'geen', 'geweest', 'haar', 'had', 'heb', 'hebben', 'heeft', 'hem', 'het', 'hier', 'hij', 'hoe', 'hun', 'iemand', 'iets', 'ik', 'in', 'is', 'ja', 'je ', 'kan', 'kon', 'kunnen', 'maar', 'me', 'meer', 'men', 'met', 'mij', 'mijn', 'moet', 'na', 'naar', 'niet', 'niets', 'nog', 'nu', 'of', 'om', 'omdat', 'ons', 'ook', 'op', 'over', 'reeds', 'te', 'tegen', 'toch', 'toen', 'tot', 'u', 'uit', 'uw', 'van', 'veel', 'voor', 'want', 'waren', 'was', 'wat', 'we', 'wel', 'werd', 'wezen', 'wie', 'wij', 'wil', 'worden', 'zal', 'ze', 'zei', 'zelf', 'zich', 'zij', 'zijn', 'zo', 'zonder', 'zou'];

/*
Copyright (c) 2011, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const eng = ['about', 'after', 'all', 'also', 'am', 'an', 'and', 'another', 'any', 'are', 'as', 'at', 'be', 'because', 'been', 'before', 'being', 'between', 'both', 'but', 'by', 'came', 'can', 'come', 'could', 'did', 'do', 'each', 'for', 'from', 'get', 'got', 'has', 'had', 'he', 'have', 'her', 'here', 'him', 'himself', 'his', 'how', 'if', 'in', 'into', 'is', 'it', 'like', 'make', 'many', 'me', 'might', 'more', 'most', 'much', 'must', 'my', 'never', 'now', 'of', 'on', 'only', 'or', 'other', 'our', 'out', 'over', 'said', 'same', 'should', 'since', 'some', 'still', 'such', 'take', 'than', 'that', 'the', 'their', 'them', 'then', 'there', 'these', 'they', 'this', 'those', 'through', 'to', 'too', 'under', 'up', 'very', 'was', 'way', 'we', 'well', 'were', 'what', 'where', 'which', 'while', 'who', 'with', 'would', 'you', 'your', 'a', 'i'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const epo = ['adiaŭ', 'ajn', 'al', 'ankoraŭ', 'antaŭ', 'aŭ', 'bonan', 'bonvole', 'bonvolu', 'bv', 'ci', 'cia', 'cian', 'cin', 'd-ro', 'da', 'de', 'dek', 'deka', 'do', 'doktor\'', 'doktoro', 'du', 'dua', 'dum', 'eble', 'ekz', 'ekzemple', 'en', 'estas', 'estis', 'estos', 'estu', 'estus', 'eĉ', 'f-no', 'feliĉan', 'for', 'fraŭlino', 'ha', 'havas', 'havis', 'havos', 'havu', 'havus', 'he', 'ho', 'hu', 'ili', 'ilia', 'ilian', 'ilin', 'inter', 'io', 'ion', 'iu', 'iujn', 'iun', 'ja', 'jam', 'je', 'jes', 'k', 'kaj', 'ke', 'kio', 'kion', 'kiu', 'kiujn', 'kiun', 'kvankam', 'kvar', 'kvara', 'kvazaŭ', 'kvin', 'kvina', 'la', 'li', 'lia', 'lian', 'lin', 'malantaŭ', 'male', 'malgraŭ', 'mem', 'mi', 'mia', 'mian', 'min', 'minus', 'naŭ', 'naŭa', 'ne', 'nek', 'nenio', 'nenion', 'neniu', 'neniun', 'nepre', 'ni', 'nia', 'nian', 'nin', 'nu', 'nun', 'nur', 'ok', 'oka', 'oni', 'onia', 'onian', 'onin', 'plej', 'pli', 'plu', 'plus', 'por', 'post', 'preter', 's-no', 's-ro', 'se', 'sed', 'sep', 'sepa', 'ses', 'sesa', 'si', 'sia', 'sian', 'sin', 'sinjor\'', 'sinjorino', 'sinjoro', 'sub', 'super', 'supren', 'sur', 'tamen', 'tio', 'tion', 'tiu', 'tiujn', 'tiun', 'tra', 'tri', 'tria', 'tuj', 'tute', 'unu', 'unua', 've', 'verŝajne', 'vi', 'via', 'vian', 'vin', 'ĉi', 'ĉio', 'ĉion', 'ĉiu', 'ĉiujn', 'ĉiun', 'ĉu', 'ĝi', 'ĝia', 'ĝian', 'ĝin', 'ĝis', 'ĵus', 'ŝi', 'ŝia', 'ŝin'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const est = ['aga', 'ei', 'et', 'ja', 'jah', 'kas', 'kui', 'kõik', 'ma', 'me', 'mida', 'midagi', 'mind', 'minu', 'mis', 'mu', 'mul', 'mulle', 'nad', 'nii', 'oled', 'olen', 'oli', 'oma', 'on', 'pole', 'sa', 'seda', 'see', 'selle', 'siin', 'siis', 'ta', 'te', 'ära'];

/*
The MIT License (MIT)
Copyright (c) 2018 Espen Klem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const fin = ['ja', 'on', 'oli', 'hän', 'vuonna', 'myös', 'joka', 'se', 'sekä', 'sen', 'mutta', 'ei', 'ovat', 'hänen', 'n', 'kanssa', 'vuoden', 'jälkeen', 'että', 's', 'tai', 'jonka', 'jossa', 'mukaan', 'kun', 'muun', 'muassa', 'hänet', 'olivat', 'kuitenkin', 'noin', 'vuosina', 'aikana', 'lisäksi', 'kaksi', 'kuin', 'ollut', 'the', 'myöhemmin', 'eli', 'vain', 'teki', 'mm', 'jotka', 'ennen', 'ensimmäinen', 'a', '9', 'jo', 'kuten', 'yksi', 'ensimmäisen', 'vastaan', 'tämän', 'vuodesta', 'sitä', 'voi', 'luvun', 'luvulla', 'of', 'ole', 'kauden', 'osa', 'esimerkiksi', 'jolloin', 'yli', 'de', 'kaudella', 'eri', 'sillä', 'kolme', 'he', 'vuotta'];

/*
 Copyright (c) 2014, Ismaël Héry

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 */

const fra = ['être', 'avoir', 'faire', 'a', 'au', 'aux', 'avec', 'ce', 'ces', 'dans', 'de', 'des', 'du', 'elle', 'en', 'et', 'eux', 'il', 'je', 'la', 'le', 'leur', 'lui', 'ma', 'mais', 'me', 'même', 'mes', 'moi', 'mon', 'ne', 'nos', 'notre', 'nous', 'on', 'ou', 'où', 'par', 'pas', 'pour', 'qu', 'que', 'qui', 'sa', 'se', 'ses', 'son', 'sur', 'ta', 'te', 'tes', 'toi', 'ton', 'tu', 'un', 'une', 'vos', 'votre', 'vous', 'c', 'd', 'j', 'l', 'à', 'm', 'n', 's', 't', 'y', 'été', 'étée', 'étées', 'étés', 'étant', 'suis', 'es', 'est', 'sommes', 'êtes', 'sont', 'serai', 'seras', 'sera', 'serons', 'serez', 'seront', 'serais', 'serait', 'serions', 'seriez', 'seraient', 'étais', 'était', 'étions', 'étiez', 'étaient', 'fus', 'fut', 'fûmes', 'fûtes', 'furent', 'sois', 'soit', 'soyons', 'soyez', 'soient', 'fusse', 'fusses', 'fût', 'fussions', 'fussiez', 'fussent', 'ayant', 'eu', 'eue', 'eues', 'eus', 'ai', 'as', 'avons', 'avez', 'ont', 'aurai', 'auras', 'aura', 'aurons', 'aurez', 'auront', 'aurais', 'aurait', 'aurions', 'auriez', 'auraient', 'avais', 'avait', 'avions', 'aviez', 'avaient', 'eut', 'eûmes', 'eûtes', 'eurent', 'aie', 'aies', 'ait', 'ayons', 'ayez', 'aient', 'eusse', 'eusses', 'eût', 'eussions', 'eussiez', 'eussent', 'ceci', 'cela', 'cet', 'cette', 'ici', 'ils', 'les', 'leurs', 'quel', 'quels', 'quelle', 'quelles', 'sans', 'soi'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const glg = ['a', 'alí', 'ao', 'aos', 'aquel', 'aquela', 'aquelas', 'aqueles', 'aquilo', 'aquí', 'as', 'así', 'aínda', 'ben', 'cando', 'che', 'co', 'coa', 'coas', 'comigo', 'con', 'connosco', 'contigo', 'convosco', 'cos', 'cun', 'cunha', 'cunhas', 'cuns', 'da', 'dalgunha', 'dalgunhas', 'dalgún', 'dalgúns', 'das', 'de', 'del', 'dela', 'delas', 'deles', 'desde', 'deste', 'do', 'dos', 'dun', 'dunha', 'dunhas', 'duns', 'e', 'el', 'ela', 'elas', 'eles', 'en', 'era', 'eran', 'esa', 'esas', 'ese', 'eses', 'esta', 'estaba', 'estar', 'este', 'estes', 'estiven', 'estou', 'está', 'están', 'eu', 'facer', 'foi', 'foron', 'fun', 'había', 'hai', 'iso', 'isto', 'la', 'las', 'lle', 'lles', 'lo', 'los', 'mais', 'me', 'meu', 'meus', 'min', 'miña', 'miñas', 'moi', 'na', 'nas', 'neste', 'nin', 'no', 'non', 'nos', 'nosa', 'nosas', 'noso', 'nosos', 'nun', 'nunha', 'nunhas', 'nuns', 'nós', 'o', 'os', 'ou', 'para', 'pero', 'pode', 'pois', 'pola', 'polas', 'polo', 'polos', 'por', 'que', 'se', 'senón', 'ser', 'seu', 'seus', 'sexa', 'sido', 'sobre', 'súa', 'súas', 'tamén', 'tan', 'te', 'ten', 'ter', 'teu', 'teus', 'teñen', 'teño', 'ti', 'tido', 'tiven', 'tiña', 'túa', 'túas', 'un', 'unha', 'unhas', 'uns', 'vos', 'vosa', 'vosas', 'voso', 'vosos', 'vós', 'á', 'é', 'ó', 'ós'];

/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const deu = ['a', 'ab', 'aber', 'ach', 'acht', 'achte', 'achten', 'achter', 'achtes', 'ag', 'alle', 'allein', 'allem', 'allen', 'aller', 'allerdings', 'alles', 'allgemeinen', 'als', 'also', 'am', 'an', 'ander', 'andere', 'anderem', 'anderen', 'anderer', 'anderes', 'anderm', 'andern', 'anderr', 'anders', 'au', 'auch', 'auf', 'aus', 'ausser', 'ausserdem', 'außer', 'außerdem', 'b', 'bald', 'bei', 'beide', 'beiden', 'beim', 'beispiel', 'bekannt', 'bereits', 'besonders', 'besser', 'besten', 'bin', 'bis', 'bisher', 'bist', 'c', 'd', 'd.h', 'da', 'dabei', 'dadurch', 'dafür', 'dagegen', 'daher', 'dahin', 'dahinter', 'damals', 'damit', 'danach', 'daneben', 'dank', 'dann', 'daran', 'darauf', 'daraus', 'darf', 'darfst', 'darin', 'darum', 'darunter', 'darüber', 'das', 'dasein', 'daselbst', 'dass', 'dasselbe', 'davon', 'davor', 'dazu', 'dazwischen', 'daß', 'dein', 'deine', 'deinem', 'deinen', 'deiner', 'deines', 'dem', 'dementsprechend', 'demgegenüber', 'demgemäss', 'demgemäß', 'demselben', 'demzufolge', 'den', 'denen', 'denn', 'denselben', 'der', 'deren', 'derer', 'derjenige', 'derjenigen', 'dermassen', 'dermaßen', 'derselbe', 'derselben', 'des', 'deshalb', 'desselben', 'dessen', 'deswegen', 'dich', 'die', 'diejenige', 'diejenigen', 'dies', 'diese', 'dieselbe', 'dieselben', 'diesem', 'diesen', 'dieser', 'dieses', 'dir', 'doch', 'dort', 'drei', 'drin', 'dritte', 'dritten', 'dritter', 'drittes', 'du', 'durch', 'durchaus', 'durfte', 'durften', 'dürfen', 'dürft', 'e', 'eben', 'ebenso', 'ehrlich', 'ei', 'ei, ', 'eigen', 'eigene', 'eigenen', 'eigener', 'eigenes', 'ein', 'einander', 'eine', 'einem', 'einen', 'einer', 'eines', 'einig', 'einige', 'einigem', 'einigen', 'einiger', 'einiges', 'einmal', 'eins', 'elf', 'en', 'ende', 'endlich', 'entweder', 'er', 'ernst', 'erst', 'erste', 'ersten', 'erster', 'erstes', 'es', 'etwa', 'etwas', 'euch', 'euer', 'eure', 'eurem', 'euren', 'eurer', 'eures', 'f', 'folgende', 'früher', 'fünf', 'fünfte', 'fünften', 'fünfter', 'fünftes', 'für', 'g', 'gab', 'ganz', 'ganze', 'ganzen', 'ganzer', 'ganzes', 'gar', 'gedurft', 'gegen', 'gegenüber', 'gehabt', 'gehen', 'geht', 'gekannt', 'gekonnt', 'gemacht', 'gemocht', 'gemusst', 'genug', 'gerade', 'gern', 'gesagt', 'geschweige', 'gewesen', 'gewollt', 'geworden', 'gibt', 'ging', 'gleich', 'gott', 'gross', 'grosse', 'grossen', 'grosser', 'grosses', 'groß', 'große', 'großen', 'großer', 'großes', 'gut', 'gute', 'guter', 'gutes', 'h', 'hab', 'habe', 'haben', 'habt', 'hast', 'hat', 'hatte', 'hatten', 'hattest', 'hattet', 'heisst', 'her', 'heute', 'hier', 'hin', 'hinter', 'hoch', 'hätte', 'hätten', 'i', 'ich', 'ihm', 'ihn', 'ihnen', 'ihr', 'ihre', 'ihrem', 'ihren', 'ihrer', 'ihres', 'im', 'immer', 'in', 'indem', 'infolgedessen', 'ins', 'irgend', 'ist', 'j', 'ja', 'jahr', 'jahre', 'jahren', 'je', 'jede', 'jedem', 'jeden', 'jeder', 'jedermann', 'jedermanns', 'jedes', 'jedoch', 'jemand', 'jemandem', 'jemanden', 'jene', 'jenem', 'jenen', 'jener', 'jenes', 'jetzt', 'k', 'kam', 'kann', 'kannst', 'kaum', 'kein', 'keine', 'keinem', 'keinen', 'keiner', 'keines', 'kleine', 'kleinen', 'kleiner', 'kleines', 'kommen', 'kommt', 'konnte', 'konnten', 'kurz', 'können', 'könnt', 'könnte', 'l', 'lang', 'lange', 'leicht', 'leide', 'lieber', 'los', 'm', 'machen', 'macht', 'machte', 'mag', 'magst', 'mahn', 'mal', 'man', 'manche', 'manchem', 'manchen', 'mancher', 'manches', 'mann', 'mehr', 'mein', 'meine', 'meinem', 'meinen', 'meiner', 'meines', 'mensch', 'menschen', 'mich', 'mir', 'mit', 'mittel', 'mochte', 'mochten', 'morgen', 'muss', 'musst', 'musste', 'mussten', 'muß', 'mußt', 'möchte', 'mögen', 'möglich', 'mögt', 'müssen', 'müsst', 'müßt', 'n', 'na', 'nach', 'nachdem', 'nahm', 'natürlich', 'neben', 'nein', 'neue', 'neuen', 'neun', 'neunte', 'neunten', 'neunter', 'neuntes', 'nicht', 'nichts', 'nie', 'niemand', 'niemandem', 'niemanden', 'noch', 'nun', 'nur', 'o', 'ob', 'oben', 'oder', 'offen', 'oft', 'ohne', 'ordnung', 'p', 'q', 'r', 'recht', 'rechte', 'rechten', 'rechter', 'rechtes', 'richtig', 'rund', 's', 'sa', 'sache', 'sagt', 'sagte', 'sah', 'satt', 'schlecht', 'schluss', 'schon', 'sechs', 'sechste', 'sechsten', 'sechster', 'sechstes', 'sehr', 'sei', 'seid', 'seien', 'sein', 'seine', 'seinem', 'seinen', 'seiner', 'seines', 'seit', 'seitdem', 'selbst', 'sich', 'sie', 'sieben', 'siebente', 'siebenten', 'siebenter', 'siebentes', 'sind', 'so', 'solang', 'solche', 'solchem', 'solchen', 'solcher', 'solches', 'soll', 'sollen', 'sollst', 'sollt', 'sollte', 'sollten', 'sondern', 'sonst', 'soweit', 'sowie', 'später', 'startseite', 'statt', 'steht', 'suche', 't', 'tag', 'tage', 'tagen', 'tat', 'teil', 'tel', 'tritt', 'trotzdem', 'tun', 'u', 'uhr', 'um', 'und', 'und?', 'uns', 'unse', 'unsem', 'unsen', 'unser', 'unsere', 'unserer', 'unses', 'unter', 'v', 'vergangenen', 'viel', 'viele', 'vielem', 'vielen', 'vielleicht', 'vier', 'vierte', 'vierten', 'vierter', 'viertes', 'vom', 'von', 'vor', 'w', 'wahr?', 'wann', 'war', 'waren', 'warst', 'wart', 'warum', 'was', 'weg', 'wegen', 'weil', 'weit', 'weiter', 'weitere', 'weiteren', 'weiteres', 'welche', 'welchem', 'welchen', 'welcher', 'welches', 'wem', 'wen', 'wenig', 'wenige', 'weniger', 'weniges', 'wenigstens', 'wenn', 'wer', 'werde', 'werden', 'werdet', 'weshalb', 'wessen', 'wie', 'wieder', 'wieso', 'will', 'willst', 'wir', 'wird', 'wirklich', 'wirst', 'wissen', 'wo', 'woher', 'wohin', 'wohl', 'wollen', 'wollt', 'wollte', 'wollten', 'worden', 'wurde', 'wurden', 'während', 'währenddem', 'währenddessen', 'wäre', 'würde', 'würden', 'x', 'y', 'z', 'z.b', 'zehn', 'zehnte', 'zehnten', 'zehnter', 'zehntes', 'zeit', 'zu', 'zuerst', 'zugleich', 'zum', 'zunächst', 'zur', 'zurück', 'zusammen', 'zwanzig', 'zwar', 'zwei', 'zweite', 'zweiten', 'zweiter', 'zweites', 'zwischen', 'zwölf', 'über', 'überhaupt', 'übrigens'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const ell = ['αλλα', 'αν', 'αντι', 'απο', 'αυτα', 'αυτεσ', 'αυτη', 'αυτο', 'αυτοι', 'αυτοσ', 'αυτουσ', 'αυτων', 'για', 'δε', 'δεν', 'εαν', 'ειμαι', 'ειμαστε', 'ειναι', 'εισαι', 'ειστε', 'εκεινα', 'εκεινεσ', 'εκεινη', 'εκεινο', 'εκεινοι', 'εκεινοσ', 'εκεινουσ', 'εκεινων', 'ενω', 'επι', 'η', 'θα', 'ισωσ', 'κ', 'και', 'κατα', 'κι', 'μα', 'με', 'μετα', 'μη', 'μην', 'να', 'ο', 'οι', 'ομωσ', 'οπωσ', 'οσο', 'οτι', 'παρα', 'ποια', 'ποιεσ', 'ποιο', 'ποιοι', 'ποιοσ', 'ποιουσ', 'ποιων', 'που', 'προσ', 'πωσ', 'σε', 'στη', 'στην', 'στο', 'στον', 'τα', 'την', 'τησ', 'το', 'τον', 'τοτε', 'του', 'των', 'ωσ'];

/* MIT License

Copyright (c) 2020 Stopwords ISO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const guj = ['અંગે', 'અંદર', 'અથવા', 'અને', 'અમને', 'અમારું', 'અમે', 'અહીં', 'આ', 'આગળ', 'આથી', 'આનું', 'આને', 'આપણને', 'આપણું', 'આપણે', 'આપી', 'આર', 'આવી', 'આવે', 'ઉપર', 'ઉભા', 'ઊંચે', 'ઊભું', 'એ', 'એક', 'એન', 'એના', 'એનાં', 'એની', 'એનું', 'એને', 'એનો', 'એમ', 'એવા', 'એવાં', 'એવી', 'એવું', 'એવો', 'ઓછું', 'કંઈક', 'કઈ', 'કયું', 'કયો', 'કરતાં', 'કરવું', 'કરી', 'કરીએ', 'કરું', 'કરે', 'કરેલું', 'કર્યા', 'કર્યાં', 'કર્યું', 'કર્યો', 'કાંઈ', 'કે', 'કેટલું', 'કેમ', 'કેવી', 'કેવું', 'કોઈ', 'કોઈક', 'કોણ', 'કોણે', 'કોને', 'ક્યાં', 'ક્યારે', 'ખૂબ', 'ગઈ', 'ગયા', 'ગયાં', 'ગયું', 'ગયો', 'ઘણું', 'છ', 'છતાં', 'છીએ', 'છું', 'છે', 'છેક', 'છો', 'જ', 'જાય', 'જી', 'જે', 'જેટલું', 'જેને', 'જેમ', 'જેવી', 'જેવું', 'જેવો', 'જો', 'જોઈએ', 'જ્યાં', 'જ્યારે', 'ઝાઝું', 'તને', 'તમને', 'તમારું', 'તમે', 'તા', 'તારાથી', 'તારામાં', 'તારું', 'તું', 'તે', 'તેં', 'તેઓ', 'તેણે', 'તેથી', 'તેના', 'તેની', 'તેનું', 'તેને', 'તેમ', 'તેમનું', 'તેમને', 'તેવી', 'તેવું', 'તો', 'ત્યાં', 'ત્યારે', 'થઇ', 'થઈ', 'થઈએ', 'થતા', 'થતાં', 'થતી', 'થતું', 'થતો', 'થયા', 'થયાં', 'થયું', 'થયેલું', 'થયો', 'થવું', 'થાઉં', 'થાઓ', 'થાય', 'થી', 'થોડું', 'દરેક', 'ન', 'નં', 'નં.', 'નથી', 'નહિ', 'નહી', 'નહીં', 'ના', 'ની', 'નીચે', 'નું', 'ને', 'નો', 'પછી', 'પણ', 'પર', 'પરંતુ', 'પહેલાં', 'પાછળ', 'પાસે', 'પોતાનું', 'પ્રત્યેક', 'ફક્ત', 'ફરી', 'ફરીથી', 'બંને', 'બધા', 'બધું', 'બની', 'બહાર', 'બહુ', 'બાદ', 'બે', 'મને', 'મા', 'માં', 'માટે', 'માત્ર', 'મારું', 'મી', 'મૂકવું', 'મૂકી', 'મૂક્યા', 'મૂક્યાં', 'મૂક્યું', 'મેં', 'રહી', 'રહે', 'રહેવું', 'રહ્યા', 'રહ્યાં', 'રહ્યો', 'રીતે', 'રૂ.', 'રૂા', 'લેતા', 'લેતું', 'લેવા', 'વગેરે', 'વધુ', 'શકે', 'શા', 'શું', 'સરખું', 'સામે', 'સુધી', 'હતા', 'હતાં', 'હતી', 'હતું', 'હવે', 'હશે', 'હશો', 'હા', 'હું', 'હો', 'હોઈ', 'હોઈશ', 'હોઈશું', 'હોય', 'હોવા'];

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const hau = ['ta', 'da', 'ya', 'sai', 'ba', 'yi', 'na', 'kuma', 'ma', 'ji', 'cikin', 'in', 'ni', 'wata', 'wani', 'ce', 'tana', 'don', 'za', 'sun', 'amma', 'ga', 'ina', 'ne', 'tselane', 'mai', 'suka', 'wannan', 'a', 'ko', 'lokacin', 'su', 'take', 'kaka', 'shi', 'yake', 'yana', 'mulongo', 'mata', 'ka', 'ban', 'ita', 'tafi', 'shanshani', 'kai', 'daɗi', 'mi', 'ƙato', 'fara', 'rana'];

/*
The MIT License (MIT)
Guy Saar - Stop words list
*/
const heb = ['אבל', 'או', 'אולי', 'אותה', 'אותו', 'אותי', 'אותך', 'אותם', 'אותן', 'אותנו', 'אז', 'אחר', 'אחרות', 'אחרי', 'אחריכן', 'אחרים', 'אחרת', 'אי', 'איזה', 'איך', 'אין', 'איפה', 'איתה', 'איתו', 'איתי', 'איתך', 'איתכם', 'איתכן', 'איתם', 'איתן', 'איתנו', 'אך', 'אל', 'אלה', 'אלו', 'אם', 'אנחנו', 'אני', 'אס', 'אף', 'אצל', 'אשר', 'את', 'אתה', 'אתכם', 'אתכן', 'אתם', 'אתן', 'באיזומידה', 'באמצע', 'באמצעות', 'בגלל', 'בין', 'בלי', 'במידה', 'במקוםשבו', 'ברם', 'בשביל', 'בשעהש', 'בתוך', 'גם', 'דרך', 'הוא', 'היא', 'היה', 'היכן', 'היתה', 'היתי', 'הם', 'הן', 'הנה', 'הסיבהשבגללה', 'הרי', 'ואילו', 'ואת', 'זאת', 'זה', 'זות', 'יהיה', 'יוכל', 'יוכלו', 'יותרמדי', 'יכול', 'יכולה', 'יכולות', 'יכולים', 'יכל', 'יכלה', 'יכלו', 'יש', 'כאן', 'כאשר', 'כולם', 'כולן', 'כזה', 'כי', 'כיצד', 'כך', 'ככה', 'כל', 'כלל', 'כמו', 'כן', 'כפי', 'כש', 'לא', 'לאו', 'לאיזותכלית', 'לאן', 'לבין', 'לה', 'להיות', 'להם', 'להן', 'לו', 'לי', 'לכם', 'לכן', 'למה', 'למטה', 'למעלה', 'למקוםשבו', 'למרות', 'לנו', 'לעבר', 'לעיכן', 'לפיכך', 'לפני', 'מאד', 'מאחורי', 'מאיזוסיבה', 'מאין', 'מאיפה', 'מבלי', 'מבעד', 'מדוע', 'מה', 'מהיכן', 'מול', 'מחוץ', 'מי', 'מכאן', 'מכיוון', 'מלבד', 'מן', 'מנין', 'מסוגל', 'מעט', 'מעטים', 'מעל', 'מצד', 'מקוםבו', 'מתחת', 'מתי', 'נגד', 'נגר', 'נו', 'עד', 'עז', 'על', 'עלי', 'עליה', 'עליהם', 'עליהן', 'עליו', 'עליך', 'עליכם', 'עלינו', 'עם', 'עצמה', 'עצמהם', 'עצמהן', 'עצמו', 'עצמי', 'עצמם', 'עצמן', 'עצמנו', 'פה', 'רק', 'שוב', 'של', 'שלה', 'שלהם', 'שלהן', 'שלו', 'שלי', 'שלך', 'שלכה', 'שלכם', 'שלכן', 'שלנו', 'שם', 'תהיה', 'תחת'];

/*
The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Originates from: https://github.com/stopwords-iso/stopwords-hi/
*/

const hin = ['अंदर', 'अत', 'अदि', 'अप', 'अपना', 'अपनि', 'अपनी', 'अपने', 'अभि', 'अभी', 'आदि', 'आप', 'इंहिं', 'इंहें', 'इंहों', 'इतयादि', 'इत्यादि', 'इन', 'इनका', 'इन्हीं', 'इन्हें', 'इन्हों', 'इस', 'इसका', 'इसकि', 'इसकी', 'इसके', 'इसमें', 'इसि', 'इसी', 'इसे', 'उंहिं', 'उंहें', 'उंहों', 'उन', 'उनका', 'उनकि', 'उनकी', 'उनके', 'उनको', 'उन्हीं', 'उन्हें', 'उन्हों', 'उस', 'उसके', 'उसि', 'उसी', 'उसे', 'एक', 'एवं', 'एस', 'एसे', 'ऐसे', 'ओर', 'और', 'कइ', 'कई', 'कर', 'करता', 'करते', 'करना', 'करने', 'करें', 'कहते', 'कहा', 'का', 'काफि', 'काफ़ी', 'कि', 'किंहें', 'किंहों', 'कितना', 'किन्हें', 'किन्हों', 'किया', 'किर', 'किस', 'किसि', 'किसी', 'किसे', 'की', 'कुछ', 'कुल', 'के', 'को', 'कोइ', 'कोई', 'कोन', 'कोनसा', 'कौन', 'कौनसा', 'गया', 'घर', 'जब', 'जहाँ', 'जहां', 'जा', 'जिंहें', 'जिंहों', 'जितना', 'जिधर', 'जिन', 'जिन्हें', 'जिन्हों', 'जिस', 'जिसे', 'जीधर', 'जेसा', 'जेसे', 'जैसा', 'जैसे', 'जो', 'तक', 'तब', 'तरह', 'तिंहें', 'तिंहों', 'तिन', 'तिन्हें', 'तिन्हों', 'तिस', 'तिसे', 'तो', 'था', 'थि', 'थी', 'थे', 'दबारा', 'दवारा', 'दिया', 'दुसरा', 'दुसरे', 'दूसरे', 'दो', 'द्वारा', 'न', 'नहिं', 'नहीं', 'ना', 'निचे', 'निहायत', 'नीचे', 'ने', 'पर', 'पहले', 'पुरा', 'पूरा', 'पे', 'फिर', 'बनि', 'बनी', 'बहि', 'बही', 'बहुत', 'बाद', 'बाला', 'बिलकुल', 'भि', 'भितर', 'भी', 'भीतर', 'मगर', 'मानो', 'मे', 'में', 'यदि', 'यह', 'यहाँ', 'यहां', 'यहि', 'यही', 'या', 'यिह', 'ये', 'रखें', 'रवासा', 'रहा', 'रहे', 'ऱ्वासा', 'लिए', 'लिये', 'लेकिन', 'व', 'वगेरह', 'वरग', 'वर्ग', 'वह', 'वहाँ', 'वहां', 'वहिं', 'वहीं', 'वाले', 'वुह', 'वे', 'वग़ैरह', 'संग', 'सकता', 'सकते', 'सबसे', 'सभि', 'सभी', 'साथ', 'साबुत', 'साभ', 'सारा', 'से', 'सो', 'हि', 'ही', 'हुअ', 'हुआ', 'हुइ', 'हुई', 'हुए', 'हे', 'हें', 'है', 'हैं', 'हो', 'होता', 'होति', 'होती', 'होते', 'होना', 'होने'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const gle = ['a', 'ach', 'ag', 'agus', 'an', 'aon', 'ar', 'arna', 'as', 'b\'', 'ba', 'beirt', 'bhúr', 'caoga', 'ceathair', 'ceathrar', 'chomh', 'chtó', 'chuig', 'chun', 'cois', 'céad', 'cúig', 'cúigear', 'd\'', 'daichead', 'dar', 'de', 'deich', 'deichniúr', 'den', 'dhá', 'do', 'don', 'dtí', 'dá', 'dár', 'dó', 'faoi', 'faoin', 'faoina', 'faoinár', 'fara', 'fiche', 'gach', 'gan', 'go', 'gur', 'haon', 'hocht', 'i', 'iad', 'idir', 'in', 'ina', 'ins', 'inár', 'is', 'le', 'leis', 'lena', 'lenár', 'm\'', 'mar', 'mo', 'mé', 'na', 'nach', 'naoi', 'naonúr', 'ná', 'ní', 'níor', 'nó', 'nócha', 'ocht', 'ochtar', 'os', 'roimh', 'sa', 'seacht', 'seachtar', 'seachtó', 'seasca', 'seisear', 'siad', 'sibh', 'sinn', 'sna', 'sé', 'sí', 'tar', 'thar', 'thú', 'triúr', 'trí', 'trína', 'trínár', 'tríocha', 'tú', 'um', 'ár', 'é', 'éis', 'í', 'ó', 'ón', 'óna', 'ónár'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const hun = ['a', 'abba', 'abban', 'abból', 'addig', 'ahhoz', 'ahogy', 'ahol', 'aki', 'akik', 'akkor', 'akár', 'alapján', 'alatt', 'alatta', 'alattad', 'alattam', 'alattatok', 'alattuk', 'alattunk', 'alá', 'alád', 'alájuk', 'alám', 'alánk', 'alátok', 'alól', 'alóla', 'alólad', 'alólam', 'alólatok', 'alóluk', 'alólunk', 'amely', 'amelybol', 'amelyek', 'amelyekben', 'amelyeket', 'amelyet', 'amelyik', 'amelynek', 'ami', 'amikor', 'amit', 'amolyan', 'amott', 'amíg', 'annak', 'annál', 'arra', 'arról', 'attól', 'az', 'aznap', 'azok', 'azokat', 'azokba', 'azokban', 'azokból', 'azokhoz', 'azokig', 'azokkal', 'azokká', 'azoknak', 'azoknál', 'azokon', 'azokra', 'azokról', 'azoktól', 'azokért', 'azon', 'azonban', 'azonnal', 'azt', 'aztán', 'azután', 'azzal', 'azzá', 'azért', 'bal', 'balra', 'ban', 'be', 'belé', 'beléd', 'beléjük', 'belém', 'belénk', 'belétek', 'belül', 'belőle', 'belőled', 'belőlem', 'belőletek', 'belőlük', 'belőlünk', 'ben', 'benne', 'benned', 'bennem', 'bennetek', 'bennük', 'bennünk', 'bár', 'bárcsak', 'bármilyen', 'búcsú', 'cikk', 'cikkek', 'cikkeket', 'csak', 'csakhogy', 'csupán', 'de', 'dehogy', 'e', 'ebbe', 'ebben', 'ebből', 'eddig', 'egy', 'egyebek', 'egyebet', 'egyedül', 'egyelőre', 'egyes', 'egyet', 'egyetlen', 'egyik', 'egymás', 'egyre', 'egyszerre', 'egyéb', 'együtt', 'egész', 'egészen', 'ehhez', 'ekkor', 'el', 'eleinte', 'ellen', 'ellenes', 'elleni', 'ellenére', 'elmondta', 'első', 'elsők', 'elsősorban', 'elsőt', 'elé', 'eléd', 'elég', 'eléjük', 'elém', 'elénk', 'elétek', 'elő', 'előbb', 'elől', 'előle', 'előled', 'előlem', 'előletek', 'előlük', 'előlünk', 'először', 'előtt', 'előtte', 'előtted', 'előttem', 'előttetek', 'előttük', 'előttünk', 'előző', 'emilyen', 'engem', 'ennek', 'ennyi', 'ennél', 'enyém', 'erre', 'erről', 'esetben', 'ettől', 'ez', 'ezek', 'ezekbe', 'ezekben', 'ezekből', 'ezeken', 'ezeket', 'ezekhez', 'ezekig', 'ezekkel', 'ezekké', 'ezeknek', 'ezeknél', 'ezekre', 'ezekről', 'ezektől', 'ezekért', 'ezen', 'ezentúl', 'ezer', 'ezret', 'ezt', 'ezután', 'ezzel', 'ezzé', 'ezért', 'fel', 'fele', 'felek', 'felet', 'felett', 'felé', 'fent', 'fenti', 'fél', 'fölé', 'gyakran', 'ha', 'halló', 'hamar', 'hanem', 'harmadik', 'harmadikat', 'harminc', 'hat', 'hatodik', 'hatodikat', 'hatot', 'hatvan', 'helyett', 'hetedik', 'hetediket', 'hetet', 'hetven', 'hirtelen', 'hiszen', 'hiába', 'hogy', 'hogyan', 'hol', 'holnap', 'holnapot', 'honnan', 'hova', 'hozzá', 'hozzád', 'hozzájuk', 'hozzám', 'hozzánk', 'hozzátok', 'hurrá', 'huszadik', 'hány', 'hányszor', 'hármat', 'három', 'hát', 'hátha', 'hátulsó', 'hét', 'húsz', 'ide', 'ide-оda', 'idén', 'igazán', 'igen', 'ill', 'illetve', 'ilyen', 'ilyenkor', 'immár', 'inkább', 'is', 'ismét', 'ison', 'itt', 'jelenleg', 'jobban', 'jobbra', 'jó', 'jól', 'jólesik', 'jóval', 'jövőre', 'kell', 'kellene', 'kellett', 'kelljen', 'keressünk', 'keresztül', 'ketten', 'kettő', 'kettőt', 'kevés', 'ki', 'kiben', 'kiből', 'kicsit', 'kicsoda', 'kihez', 'kik', 'kikbe', 'kikben', 'kikből', 'kiken', 'kiket', 'kikhez', 'kikkel', 'kikké', 'kiknek', 'kiknél', 'kikre', 'kikről', 'kiktől', 'kikért', 'kilenc', 'kilencedik', 'kilencediket', 'kilencet', 'kilencven', 'kin', 'kinek', 'kinél', 'kire', 'kiről', 'kit', 'kitől', 'kivel', 'kivé', 'kié', 'kiért', 'korábban', 'képest', 'kérem', 'kérlek', 'kész', 'késő', 'később', 'későn', 'két', 'kétszer', 'kívül', 'körül', 'köszönhetően', 'köszönöm', 'közben', 'közel', 'közepesen', 'közepén', 'közé', 'között', 'közül', 'külön', 'különben', 'különböző', 'különbözőbb', 'különbözőek', 'lassan', 'le', 'legalább', 'legyen', 'lehet', 'lehetetlen', 'lehetett', 'lehetőleg', 'lehetőség', 'lenne', 'lenni', 'lennék', 'lennének', 'lesz', 'leszek', 'lesznek', 'leszünk', 'lett', 'lettek', 'lettem', 'lettünk', 'lévő', 'ma', 'maga', 'magad', 'magam', 'magatokat', 'magukat', 'magunkat', 'magát', 'mai', 'majd', 'majdnem', 'manapság', 'meg', 'megcsinál', 'megcsinálnak', 'megint', 'megvan', 'mellett', 'mellette', 'melletted', 'mellettem', 'mellettetek', 'mellettük', 'mellettünk', 'mellé', 'melléd', 'melléjük', 'mellém', 'mellénk', 'mellétek', 'mellől', 'mellőle', 'mellőled', 'mellőlem', 'mellőletek', 'mellőlük', 'mellőlünk', 'mely', 'melyek', 'melyik', 'mennyi', 'mert', 'mi', 'miatt', 'miatta', 'miattad', 'miattam', 'miattatok', 'miattuk', 'miattunk', 'mibe', 'miben', 'miből', 'mihez', 'mik', 'mikbe', 'mikben', 'mikből', 'miken', 'miket', 'mikhez', 'mikkel', 'mikké', 'miknek', 'miknél', 'mikor', 'mikre', 'mikről', 'miktől', 'mikért', 'milyen', 'min', 'mind', 'mindegyik', 'mindegyiket', 'minden', 'mindenesetre', 'mindenki', 'mindent', 'mindenütt', 'mindig', 'mindketten', 'minek', 'minket', 'mint', 'mintha', 'minél', 'mire', 'miről', 'mit', 'mitől', 'mivel', 'mivé', 'miért', 'mondta', 'most', 'mostanáig', 'már', 'más', 'másik', 'másikat', 'másnap', 'második', 'másodszor', 'mások', 'másokat', 'mást', 'még', 'mégis', 'míg', 'mögé', 'mögéd', 'mögéjük', 'mögém', 'mögénk', 'mögétek', 'mögött', 'mögötte', 'mögötted', 'mögöttem', 'mögöttetek', 'mögöttük', 'mögöttünk', 'mögül', 'mögüle', 'mögüled', 'mögülem', 'mögületek', 'mögülük', 'mögülünk', 'múltkor', 'múlva', 'na', 'nagy', 'nagyobb', 'nagyon', 'naponta', 'napot', 'ne', 'negyedik', 'negyediket', 'negyven', 'neked', 'nekem', 'neki', 'nekik', 'nektek', 'nekünk', 'nem', 'nemcsak', 'nemrég', 'nincs', 'nyolc', 'nyolcadik', 'nyolcadikat', 'nyolcat', 'nyolcvan', 'nála', 'nálad', 'nálam', 'nálatok', 'náluk', 'nálunk', 'négy', 'négyet', 'néha', 'néhány', 'nélkül', 'o', 'oda', 'ok', 'olyan', 'onnan', 'ott', 'pedig', 'persze', 'pár', 'például', 'rajta', 'rajtad', 'rajtam', 'rajtatok', 'rajtuk', 'rajtunk', 'rendben', 'rosszul', 'rá', 'rád', 'rájuk', 'rám', 'ránk', 'rátok', 'régen', 'régóta', 'részére', 'róla', 'rólad', 'rólam', 'rólatok', 'róluk', 'rólunk', 'rögtön', 's', 'saját', 'se', 'sem', 'semmi', 'semmilyen', 'semmiség', 'senki', 'soha', 'sok', 'sokan', 'sokat', 'sokkal', 'sokszor', 'sokáig', 'során', 'stb.', 'szemben', 'szerbusz', 'szerint', 'szerinte', 'szerinted', 'szerintem', 'szerintetek', 'szerintük', 'szerintünk', 'szervusz', 'szinte', 'számára', 'száz', 'századik', 'százat', 'szépen', 'szét', 'szíves', 'szívesen', 'szíveskedjék', 'sőt', 'talán', 'tavaly', 'te', 'tegnap', 'tegnapelőtt', 'tehát', 'tele', 'teljes', 'tessék', 'ti', 'tied', 'titeket', 'tizedik', 'tizediket', 'tizenegy', 'tizenegyedik', 'tizenhat', 'tizenhárom', 'tizenhét', 'tizenkettedik', 'tizenkettő', 'tizenkilenc', 'tizenkét', 'tizennyolc', 'tizennégy', 'tizenöt', 'tizet', 'tovább', 'további', 'továbbá', 'távol', 'téged', 'tényleg', 'tíz', 'több', 'többi', 'többször', 'túl', 'tőle', 'tőled', 'tőlem', 'tőletek', 'tőlük', 'tőlünk', 'ugyanakkor', 'ugyanez', 'ugyanis', 'ugye', 'urak', 'uram', 'urat', 'utoljára', 'utolsó', 'után', 'utána', 'vagy', 'vagyis', 'vagyok', 'vagytok', 'vagyunk', 'vajon', 'valahol', 'valaki', 'valakit', 'valamelyik', 'valami', 'valamint', 'való', 'van', 'vannak', 'vele', 'veled', 'velem', 'veletek', 'velük', 'velünk', 'vissza', 'viszlát', 'viszont', 'viszontlátásra', 'volna', 'volnának', 'volnék', 'volt', 'voltak', 'voltam', 'voltunk', 'végre', 'végén', 'végül', 'által', 'általában', 'ám', 'át', 'éljen', 'én', 'éppen', 'érte', 'érted', 'értem', 'értetek', 'értük', 'értünk', 'és', 'év', 'évben', 'éve', 'évek', 'éves', 'évi', 'évvel', 'így', 'óta', 'ön', 'önbe', 'önben', 'önből', 'önhöz', 'önnek', 'önnel', 'önnél', 'önre', 'önről', 'önt', 'öntől', 'önért', 'önök', 'önökbe', 'önökben', 'önökből', 'önöket', 'önökhöz', 'önökkel', 'önöknek', 'önöknél', 'önökre', 'önökről', 'önöktől', 'önökért', 'önökön', 'önön', 'össze', 'öt', 'ötven', 'ötödik', 'ötödiket', 'ötöt', 'úgy', 'úgyis', 'úgynevezett', 'új', 'újabb', 'újra', 'úr', 'ő', 'ők', 'őket', 'őt'];

/*
Copyright (c) 2019, Luthfi Azhari

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Originates from: https://github.com/stopwords-iso/stopwords-id/
*/

const ind = ['ada', 'adalah', 'adanya', 'adapun', 'agak', 'agaknya', 'agar', 'akan', 'akankah', 'akhir', 'akhiri', 'akhirnya', 'aku', 'akulah', 'amat', 'amatlah', 'anda', 'andalah', 'antar', 'antara', 'antaranya', 'apa', 'apaan', 'apabila', 'apakah', 'apalagi', 'apatah', 'artinya', 'asal', 'asalkan', 'atas', 'atau', 'ataukah', 'ataupun', 'awal', 'awalnya', 'bagai', 'bagaikan', 'bagaimana', 'bagaimanakah', 'bagaimanapun', 'bagi', 'bagian', 'bahkan', 'bahwa', 'bahwasanya', 'bakal', 'bakalan', 'balik', 'banyak', 'bapak', 'baru', 'bawah', 'beberapa', 'begini', 'beginian', 'beginikah', 'beginilah', 'begitu', 'begitukah', 'begitulah', 'begitupun', 'bekerja', 'belakang', 'belakangan', 'belum', 'belumlah', 'benar', 'benarkah', 'benarlah', 'berada', 'berakhir', 'berakhirlah', 'berakhirnya', 'berapa', 'berapakah', 'berapalah', 'berapapun', 'berarti', 'berawal', 'berbagai', 'berdatangan', 'beri', 'berikan', 'berikut', 'berikutnya', 'berjumlah', 'berkali-kali', 'berkata', 'berkehendak', 'berkeinginan', 'berkenaan', 'berlainan', 'berlalu', 'berlangsung', 'berlebihan', 'bermacam', 'bermacam-macam', 'bermaksud', 'bermula', 'bersama', 'bersama-sama', 'bersiap', 'bersiap-siap', 'bertanya', 'bertanya-tanya', 'berturut', 'berturut-turut', 'bertutur', 'berujar', 'berupa', 'besar', 'betul', 'betulkah', 'biasa', 'biasanya', 'bila', 'bilakah', 'bisa', 'bisakah', 'boleh', 'bolehkah', 'bolehlah', 'buat', 'bukan', 'bukankah', 'bukanlah', 'bukannya', 'bulan', 'bung', 'cara', 'caranya', 'cukup', 'cukupkah', 'cukuplah', 'cuma', 'dahulu', 'dalam', 'dan', 'dapat', 'dari', 'daripada', 'datang', 'dekat', 'demi', 'demikian', 'demikianlah', 'dengan', 'depan', 'di', 'dia', 'diakhiri', 'diakhirinya', 'dialah', 'diantara', 'diantaranya', 'diberi', 'diberikan', 'diberikannya', 'dibuat', 'dibuatnya', 'didapat', 'didatangkan', 'digunakan', 'diibaratkan', 'diibaratkannya', 'diingat', 'diingatkan', 'diinginkan', 'dijawab', 'dijelaskan', 'dijelaskannya', 'dikarenakan', 'dikatakan', 'dikatakannya', 'dikerjakan', 'diketahui', 'diketahuinya', 'dikira', 'dilakukan', 'dilalui', 'dilihat', 'dimaksud', 'dimaksudkan', 'dimaksudkannya', 'dimaksudnya', 'diminta', 'dimintai', 'dimisalkan', 'dimulai', 'dimulailah', 'dimulainya', 'dimungkinkan', 'dini', 'dipastikan', 'diperbuat', 'diperbuatnya', 'dipergunakan', 'diperkirakan', 'diperlihatkan', 'diperlukan', 'diperlukannya', 'dipersoalkan', 'dipertanyakan', 'dipunyai', 'diri', 'dirinya', 'disampaikan', 'disebut', 'disebutkan', 'disebutkannya', 'disini', 'disinilah', 'ditambahkan', 'ditandaskan', 'ditanya', 'ditanyai', 'ditanyakan', 'ditegaskan', 'ditujukan', 'ditunjuk', 'ditunjuki', 'ditunjukkan', 'ditunjukkannya', 'ditunjuknya', 'dituturkan', 'dituturkannya', 'diucapkan', 'diucapkannya', 'diungkapkan', 'dong', 'dulu', 'empat', 'enggak', 'enggaknya', 'entah', 'entahlah', 'guna', 'gunakan', 'hal', 'hampir', 'hanya', 'hanyalah', 'harus', 'haruslah', 'harusnya', 'hendak', 'hendaklah', 'hendaknya', 'hingga', 'ia', 'ialah', 'ibarat', 'ibaratkan', 'ibaratnya', 'ikut', 'ingat', 'ingat-ingat', 'ingin', 'inginkah', 'inginkan', 'ini', 'inikah', 'inilah', 'itu', 'itukah', 'itulah', 'jadi', 'jadilah', 'jadinya', 'jangan', 'jangankan', 'janganlah', 'jauh', 'jawab', 'jawaban', 'jawabnya', 'jelas', 'jelaskan', 'jelaslah', 'jelasnya', 'jika', 'jikalau', 'juga', 'jumlah', 'jumlahnya', 'justru', 'kala', 'kalau', 'kalaulah', 'kalaupun', 'kalian', 'kami', 'kamilah', 'kamu', 'kamulah', 'kan', 'kapan', 'kapankah', 'kapanpun', 'karena', 'karenanya', 'kasus', 'kata', 'katakan', 'katakanlah', 'katanya', 'ke', 'keadaan', 'kebetulan', 'kecil', 'kedua', 'keduanya', 'keinginan', 'kelamaan', 'kelihatan', 'kelihatannya', 'kelima', 'keluar', 'kembali', 'kemudian', 'kemungkinan', 'kemungkinannya', 'kenapa', 'kepada', 'kepadanya', 'kesampaian', 'keseluruhan', 'keseluruhannya', 'keterlaluan', 'ketika', 'khususnya', 'kini', 'kinilah', 'kira', 'kira-kira', 'kiranya', 'kita', 'kitalah', 'kok', 'kurang', 'lagi', 'lagian', 'lah', 'lain', 'lainnya', 'lalu', 'lama', 'lamanya', 'lanjut', 'lanjutnya', 'lebih', 'lewat', 'lima', 'luar', 'macam', 'maka', 'makanya', 'makin', 'malah', 'malahan', 'mampu', 'mampukah', 'mana', 'manakala', 'manalagi', 'masa', 'masalah', 'masalahnya', 'masih', 'masihkah', 'masing', 'masing-masing', 'mau', 'maupun', 'melainkan', 'melakukan', 'melalui', 'melihat', 'melihatnya', 'memang', 'memastikan', 'memberi', 'memberikan', 'membuat', 'memerlukan', 'memihak', 'meminta', 'memintakan', 'memisalkan', 'memperbuat', 'mempergunakan', 'memperkirakan', 'memperlihatkan', 'mempersiapkan', 'mempersoalkan', 'mempertanyakan', 'mempunyai', 'memulai', 'memungkinkan', 'menaiki', 'menambahkan', 'menandaskan', 'menanti', 'menanti-nanti', 'menantikan', 'menanya', 'menanyai', 'menanyakan', 'mendapat', 'mendapatkan', 'mendatang', 'mendatangi', 'mendatangkan', 'menegaskan', 'mengakhiri', 'mengapa', 'mengatakan', 'mengatakannya', 'mengenai', 'mengerjakan', 'mengetahui', 'menggunakan', 'menghendaki', 'mengibaratkan', 'mengibaratkannya', 'mengingat', 'mengingatkan', 'menginginkan', 'mengira', 'mengucapkan', 'mengucapkannya', 'mengungkapkan', 'menjadi', 'menjawab', 'menjelaskan', 'menuju', 'menunjuk', 'menunjuki', 'menunjukkan', 'menunjuknya', 'menurut', 'menuturkan', 'menyampaikan', 'menyangkut', 'menyatakan', 'menyebutkan', 'menyeluruh', 'menyiapkan', 'merasa', 'mereka', 'merekalah', 'merupakan', 'meski', 'meskipun', 'meyakini', 'meyakinkan', 'minta', 'mirip', 'misal', 'misalkan', 'misalnya', 'mula', 'mulai', 'mulailah', 'mulanya', 'mungkin', 'mungkinkah', 'nah', 'naik', 'namun', 'nanti', 'nantinya', 'nyaris', 'nyatanya', 'oleh', 'olehnya', 'pada', 'padahal', 'padanya', 'paling', 'panjang', 'pantas', 'para', 'pasti', 'pastilah', 'penting', 'pentingnya', 'per', 'percuma', 'perlu', 'perlukah', 'perlunya', 'pernah', 'persoalan', 'pertama', 'pertama-tama', 'pertanyaan', 'pertanyakan', 'pihak', 'pihaknya', 'pukul', 'pula', 'pun', 'punya', 'rasa', 'rasanya', 'rata', 'rupanya', 'saat', 'saatnya', 'saja', 'sajalah', 'saling', 'sama', 'sama-sama', 'sambil', 'sampai', 'sampai-sampai', 'sampaikan', 'sana', 'sangat', 'sangatlah', 'satu', 'saya', 'sayalah', 'se', 'sebab', 'sebabnya', 'sebagai', 'sebagaimana', 'sebagainya', 'sebagian', 'sebaik', 'sebaik-baiknya', 'sebaiknya', 'sebaliknya', 'sebanyak', 'sebegini', 'sebegitu', 'sebelum', 'sebelumnya', 'sebenarnya', 'seberapa', 'sebesar', 'sebetulnya', 'sebisanya', 'sebuah', 'sebut', 'sebutlah', 'sebutnya', 'secara', 'secukupnya', 'sedang', 'sedangkan', 'sedemikian', 'sedikit', 'sedikitnya', 'seenaknya', 'segala', 'segalanya', 'segera', 'seharusnya', 'sehingga', 'seingat', 'sejak', 'sejauh', 'sejenak', 'sejumlah', 'sekadar', 'sekadarnya', 'sekali', 'sekali-kali', 'sekalian', 'sekaligus', 'sekalipun', 'sekarang', 'sekarang', 'sekecil', 'seketika', 'sekiranya', 'sekitar', 'sekitarnya', 'sekurang-kurangnya', 'sekurangnya', 'sela', 'selain', 'selaku', 'selalu', 'selama', 'selama-lamanya', 'selamanya', 'selanjutnya', 'seluruh', 'seluruhnya', 'semacam', 'semakin', 'semampu', 'semampunya', 'semasa', 'semasih', 'semata', 'semata-mata', 'semaunya', 'sementara', 'semisal', 'semisalnya', 'sempat', 'semua', 'semuanya', 'semula', 'sendiri', 'sendirian', 'sendirinya', 'seolah', 'seolah-olah', 'seorang', 'sepanjang', 'sepantasnya', 'sepantasnyalah', 'seperlunya', 'seperti', 'sepertinya', 'sepihak', 'sering', 'seringnya', 'serta', 'serupa', 'sesaat', 'sesama', 'sesampai', 'sesegera', 'sesekali', 'seseorang', 'sesuatu', 'sesuatunya', 'sesudah', 'sesudahnya', 'setelah', 'setempat', 'setengah', 'seterusnya', 'setiap', 'setiba', 'setibanya', 'setidak-tidaknya', 'setidaknya', 'setinggi', 'seusai', 'sewaktu', 'siap', 'siapa', 'siapakah', 'siapapun', 'sini', 'sinilah', 'soal', 'soalnya', 'suatu', 'sudah', 'sudahkah', 'sudahlah', 'supaya', 'tadi', 'tadinya', 'tahu', 'tahun', 'tak', 'tambah', 'tambahnya', 'tampak', 'tampaknya', 'tandas', 'tandasnya', 'tanpa', 'tanya', 'tanyakan', 'tanyanya', 'tapi', 'tegas', 'tegasnya', 'telah', 'tempat', 'tengah', 'tentang', 'tentu', 'tentulah', 'tentunya', 'tepat', 'terakhir', 'terasa', 'terbanyak', 'terdahulu', 'terdapat', 'terdiri', 'terhadap', 'terhadapnya', 'teringat', 'teringat-ingat', 'terjadi', 'terjadilah', 'terjadinya', 'terkira', 'terlalu', 'terlebih', 'terlihat', 'termasuk', 'ternyata', 'tersampaikan', 'tersebut', 'tersebutlah', 'tertentu', 'tertuju', 'terus', 'terutama', 'tetap', 'tetapi', 'tiap', 'tiba', 'tiba-tiba', 'tidak', 'tidakkah', 'tidaklah', 'tiga', 'tinggi', 'toh', 'tunjuk', 'turut', 'tutur', 'tuturnya', 'ucap', 'ucapnya', 'ujar', 'ujarnya', 'umum', 'umumnya', 'ungkap', 'ungkapnya', 'untuk', 'usah', 'usai', 'waduh', 'wah', 'wahai', 'waktu', 'waktunya', 'walau', 'walaupun', 'wong', 'yaitu', 'yakin', 'yakni', 'yang'];

/*
Copyright (c) 2011, David Przybilla, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const ita = ['ad', 'al', 'allo', 'ai', 'agli', 'all', 'agl', 'alla', 'alle', 'con', 'col', 'coi', 'da', 'dal', 'dallo', 'dai', 'dagli', 'dall', 'dagl', 'dalla', 'dalle', 'di', 'del', 'dello', 'dei', 'degli', 'dell', 'degl', 'della', 'delle', 'in', 'nel', 'nello', 'nei', 'negli', 'nell', 'negl', 'nella', 'nelle', 'su', 'sul', 'sullo', 'sui', 'sugli', 'sull', 'sugl', 'sulla', 'sulle', 'per', 'tra', 'contro', 'io', 'tu', 'lui', 'lei', 'noi', 'voi', 'loro', 'mio', 'mia', 'miei', 'mie', 'tuo', 'tua', 'tuoi', 'tue', 'suo', 'sua', 'suoi', 'sue', 'nostro', 'nostra', 'nostri', 'nostre', 'vostro', 'vostra', 'vostri', 'vostre', 'mi', 'ti', 'ci', 'vi', 'lo', 'la', 'li', 'le', 'gli', 'ne', 'il', 'un', 'uno', 'una', 'ma', 'ed', 'se', 'perché', 'anche', 'come', 'dov', 'dove', 'che', 'chi', 'cui', 'non', 'più', 'quale', 'quanto', 'quanti', 'quanta', 'quante', 'quello', 'quelli', 'quella', 'quelle', 'questo', 'questi', 'questa', 'queste', 'si', 'tutto', 'tutti', 'a', 'c', 'e', 'i', 'l', 'o', 'ho', 'hai', 'ha', 'abbiamo', 'avete', 'hanno', 'abbia', 'abbiate', 'abbiano', 'avrò', 'avrai', 'avrà', 'avremo', 'avrete', 'avranno', 'avrei', 'avresti', 'avrebbe', 'avremmo', 'avreste', 'avrebbero', 'avevo', 'avevi', 'aveva', 'avevamo', 'avevate', 'avevano', 'ebbi', 'avesti', 'ebbe', 'avemmo', 'aveste', 'ebbero', 'avessi', 'avesse', 'avessimo', 'avessero', 'avendo', 'avuto', 'avuta', 'avuti', 'avute', 'sono', 'sei', 'è', 'siamo', 'siete', 'sia', 'siate', 'siano', 'sarò', 'sarai', 'sarà', 'saremo', 'sarete', 'saranno', 'sarei', 'saresti', 'sarebbe', 'saremmo', 'sareste', 'sarebbero', 'ero', 'eri', 'era', 'eravamo', 'eravate', 'erano', 'fui', 'fosti', 'fu', 'fummo', 'foste', 'furono', 'fossi', 'fosse', 'fossimo', 'fossero', 'essendo', 'faccio', 'fai', 'facciamo', 'fanno', 'faccia', 'facciate', 'facciano', 'farò', 'farai', 'farà', 'faremo', 'farete', 'faranno', 'farei', 'faresti', 'farebbe', 'faremmo', 'fareste', 'farebbero', 'facevo', 'facevi', 'faceva', 'facevamo', 'facevate', 'facevano', 'feci', 'facesti', 'fece', 'facemmo', 'faceste', 'fecero', 'facessi', 'facesse', 'facessimo', 'facessero', 'facendo', 'sto', 'stai', 'sta', 'stiamo', 'stanno', 'stia', 'stiate', 'stiano', 'starò', 'starai', 'starà', 'staremo', 'starete', 'staranno', 'starei', 'staresti', 'starebbe', 'staremmo', 'stareste', 'starebbero', 'stavo', 'stavi', 'stava', 'stavamo', 'stavate', 'stavano', 'stetti', 'stesti', 'stette', 'stemmo', 'steste', 'stettero', 'stessi', 'stesse', 'stessimo', 'stessero', 'stando'];

// Original copyright:
/*
 Licensed to the Apache Software Foundation (ASF) under one or more
 contributor license agreements.  See the NOTICE file distributed with
 this work for additional information regarding copyright ownership.
 The ASF licenses this file to You under the Apache License, Version 2.0
 the "License"); you may not use this file except in compliance with
 the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// This version:
/* The MIT License (MIT)
Copyright (c) 2012, Guillaume Marty

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// Original location:
// http://svn.apache.org/repos/asf/lucene/dev/trunk/lucene/analysis/kuromoji/src/resources/org/apache/lucene/analysis/ja/stopwords.txt

const jpn = ['の', 'に', 'は', 'を', 'た', 'が', 'で', 'て', 'と', 'し', 'れ', 'さ', 'ある', 'いる', 'も', 'する', 'から', 'な', 'こと', 'として', 'い', 'や', 'れる', 'など', 'なっ', 'ない', 'この', 'ため', 'その', 'あっ', 'よう', 'また', 'もの', 'という', 'あり', 'まで', 'られ', 'なる', 'へ', 'か', 'だ', 'これ', 'によって', 'により', 'おり', 'より', 'による', 'ず', 'なり', 'られる', 'において', 'ば', 'なかっ', 'なく', 'しかし', 'について', 'せ', 'だっ', 'その後', 'できる', 'それ', 'う', 'ので', 'なお', 'のみ', 'でき', 'き', 'つ', 'における', 'および', 'いう', 'さらに', 'でも', 'ら', 'たり', 'その他', 'に関する', 'たち', 'ます', 'ん', 'なら', 'に対して', '特に', 'せる', '及び', 'これら', 'とき', 'では', 'にて', 'ほか', 'ながら', 'うち', 'そして', 'とともに', 'ただし', 'かつて', 'それぞれ', 'または', 'お', 'ほど', 'ものの', 'に対する', 'ほとんど', 'と共に', 'といった', 'です', 'とも', 'ところ', 'ここ'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const kor = ['가', '가까스로', '가령', '각', '각각', '각자', '각종', '갖고말하자면', '같다', '같이', '개의치않고', '거니와', '거바', '거의', '것', '것과 같이', '것들', '게다가', '게우다', '겨우', '견지에서', '결과에 이르다', '결국', '결론을 낼 수 있다', '겸사겸사', '고려하면', '고로', '곧', '공동으로', '과', '과연', '관계가 있다', '관계없이', '관련이 있다', '관하여', '관한', '관해서는', '구', '구체적으로', '구토하다', '그', '그들', '그때', '그래', '그래도', '그래서', '그러나', '그러니', '그러니까', '그러면', '그러므로', '그러한즉', '그런 까닭에', '그런데', '그런즉', '그럼', '그럼에도 불구하고', '그렇게 함으로써', '그렇지', '그렇지 않다면', '그렇지 않으면', '그렇지만', '그렇지않으면', '그리고', '그리하여', '그만이다', '그에 따르는', '그위에', '그저', '그중에서', '그치지 않다', '근거로', '근거하여', '기대여', '기점으로', '기준으로', '기타', '까닭으로', '까악', '까지', '까지 미치다', '까지도', '꽈당', '끙끙', '끼익', '나', '나머지는', '남들', '남짓', '너', '너희', '너희들', '네', '넷', '년', '논하지 않다', '놀라다', '누가 알겠는가', '누구', '다른', '다른 방면으로', '다만', '다섯', '다소', '다수', '다시 말하자면', '다시말하면', '다음', '다음에', '다음으로', '단지', '답다', '당신', '당장', '대로 하다', '대하면', '대하여', '대해 말하자면', '대해서', '댕그', '더구나', '더군다나', '더라도', '더불어', '더욱더', '더욱이는', '도달하다', '도착하다', '동시에', '동안', '된바에야', '된이상', '두번째로', '둘', '둥둥', '뒤따라', '뒤이어', '든간에', '들', '등', '등등', '딩동', '따라', '따라서', '따위', '따지지 않다', '딱', '때', '때가 되어', '때문에', '또', '또한', '뚝뚝', '라 해도', '령', '로', '로 인하여', '로부터', '로써', '륙', '를', '마음대로', '마저', '마저도', '마치', '막론하고', '만 못하다', '만약', '만약에', '만은 아니다', '만이 아니다', '만일', '만큼', '말하자면', '말할것도 없고', '매', '매번', '메쓰겁다', '몇', '모', '모두', '무렵', '무릎쓰고', '무슨', '무엇', '무엇때문에', '물론', '및', '바꾸어말하면', '바꾸어말하자면', '바꾸어서 말하면', '바꾸어서 한다면', '바꿔 말하면', '바로', '바와같이', '밖에 안된다', '반대로', '반대로 말하자면', '반드시', '버금', '보는데서', '보다더', '보드득', '본대로', '봐', '봐라', '부류의 사람들', '부터', '불구하고', '불문하고', '붕붕', '비걱거리다', '비교적', '비길수 없다', '비로소', '비록', '비슷하다', '비추어 보아', '비하면', '뿐만 아니라', '뿐만아니라', '뿐이다', '삐걱', '삐걱거리다', '사', '삼', '상대적으로 말하자면', '생각한대로', '설령', '설마', '설사', '셋', '소생', '소인', '솨', '쉿', '습니까', '습니다', '시각', '시간', '시작하여', '시초에', '시키다', '실로', '심지어', '아', '아니', '아니나다를가', '아니라면', '아니면', '아니었다면', '아래윗', '아무거나', '아무도', '아야', '아울러', '아이', '아이고', '아이구', '아이야', '아이쿠', '아하', '아홉', '안 그러면', '않기 위하여', '않기 위해서', '알 수 있다', '알았어', '앗', '앞에서', '앞의것', '야', '약간', '양자', '어', '어기여차', '어느', '어느 년도', '어느것', '어느곳', '어느때', '어느쪽', '어느해', '어디', '어때', '어떠한', '어떤', '어떤것', '어떤것들', '어떻게', '어떻해', '어이', '어째서', '어쨋든', '어쩔수 없다', '어찌', '어찌됏든', '어찌됏어', '어찌하든지', '어찌하여', '언제', '언젠가', '얼마', '얼마 안 되는 것', '얼마간', '얼마나', '얼마든지', '얼마만큼', '얼마큼', '엉엉', '에', '에 가서', '에 달려 있다', '에 대해', '에 있다', '에 한하다', '에게', '에서', '여', '여기', '여덟', '여러분', '여보시오', '여부', '여섯', '여전히', '여차', '연관되다', '연이서', '영', '영차', '옆사람', '예', '예를 들면', '예를 들자면', '예컨대', '예하면', '오', '오로지', '오르다', '오자마자', '오직', '오호', '오히려', '와', '와 같은 사람들', '와르르', '와아', '왜', '왜냐하면', '외에도', '요만큼', '요만한 것', '요만한걸', '요컨대', '우르르', '우리', '우리들', '우선', '우에 종합한것과같이', '운운', '월', '위에서 서술한바와같이', '위하여', '위해서', '윙윙', '육', '으로', '으로 인하여', '으로서', '으로써', '을', '응', '응당', '의', '의거하여', '의지하여', '의해', '의해되다', '의해서', '이', '이 되다', '이 때문에', '이 밖에', '이 외에', '이 정도의', '이것', '이곳', '이때', '이라면', '이래', '이러이러하다', '이러한', '이런', '이럴정도로', '이렇게 많은 것', '이렇게되면', '이렇게말하자면', '이렇구나', '이로 인하여', '이르기까지', '이리하여', '이만큼', '이번', '이봐', '이상', '이어서', '이었다', '이와 같다', '이와 같은', '이와 반대로', '이와같다면', '이외에도', '이용하여', '이유만으로', '이젠', '이지만', '이쪽', '이천구', '이천육', '이천칠', '이천팔', '인 듯하다', '인젠', '일', '일것이다', '일곱', '일단', '일때', '일반적으로', '일지라도', '임에 틀림없다', '입각하여', '입장에서', '잇따라', '있다', '자', '자기', '자기집', '자마자', '자신', '잠깐', '잠시', '저', '저것', '저것만큼', '저기', '저쪽', '저희', '전부', '전자', '전후', '점에서 보아', '정도에 이르다', '제', '제각기', '제외하고', '조금', '조차', '조차도', '졸졸', '좀', '좋아', '좍좍', '주룩주룩', '주저하지 않고', '줄은 몰랏다', '줄은모른다', '중에서', '중의하나', '즈음하여', '즉', '즉시', '지든지', '지만', '지말고', '진짜로', '쪽으로', '차라리', '참', '참나', '첫번째로', '쳇', '총적으로', '총적으로 말하면', '총적으로 보면', '칠', '콸콸', '쾅쾅', '쿵', '타다', '타인', '탕탕', '토하다', '통하여', '툭', '퉤', '틈타', '팍', '팔', '퍽', '펄렁', '하', '하게될것이다', '하게하다', '하겠는가', '하고 있다', '하고있었다', '하곤하였다', '하구나', '하기 때문에', '하기 위하여', '하기는한데', '하기만 하면', '하기보다는', '하기에', '하나', '하느니', '하는 김에', '하는 편이 낫다', '하는것도', '하는것만 못하다', '하는것이 낫다', '하는바', '하더라도', '하도다', '하도록시키다', '하도록하다', '하든지', '하려고하다', '하마터면', '하면 할수록', '하면된다', '하면서', '하물며', '하여금', '하여야', '하자마자', '하지 않는다면', '하지 않도록', '하지마', '하지마라', '하지만', '하하', '한 까닭에', '한 이유는', '한 후', '한다면', '한다면 몰라도', '한데', '한마디', '한적이있다', '한켠으로는', '한항목', '할 따름이다', '할 생각이다', '할 줄 안다', '할 지경이다', '할 힘이 있다', '할때', '할만하다', '할망정', '할뿐', '할수있다', '할수있어', '할줄알다', '할지라도', '할지언정', '함께', '해도된다', '해도좋다', '해봐요', '해서는 안된다', '해야한다', '해요', '했어요', '향하다', '향하여', '향해서', '허', '허걱', '허허', '헉', '헉헉', '헐떡헐떡', '형식으로 쓰여', '혹시', '혹은', '혼자', '훨씬', '휘익', '휴', '흐흐', '흥', '힘입어', '︿', '～', '￥'];

/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const kur = ['ئێمە', 'ئێوە', 'ئەم', 'ئەو', 'ئەوان', 'ئەوەی', 'بۆ', 'بێ', 'بێجگە', 'بە', 'بەبێ', 'بەدەم', 'بەردەم', 'بەرلە', 'بەرەوی', 'بەرەوە', 'بەلای', 'بەپێی', 'تۆ', 'تێ', 'جگە', 'دوای', 'دوو', 'دە', 'دەکات', 'دەگەڵ', 'سەر', 'لێ', 'لە', 'لەبابەت', 'لەباتی', 'لەبارەی', 'لەبرێتی', 'لەبن', 'لەبەر', 'لەبەینی', 'لەدەم', 'لەرێ', 'لەرێگا', 'لەرەوی', 'لەسەر', 'لەلایەن', 'لەناو', 'لەنێو', 'لەو', 'لەپێناوی', 'لەژێر', 'لەگەڵ', 'من', 'ناو', 'نێوان', 'هەر', 'هەروەها', 'و', 'وەک', 'پاش', 'پێ', 'پێش', 'چەند', 'کرد', 'کە', 'ی'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const lat = ['a', 'ab', 'ac', 'ad', 'at', 'atque', 'aut', 'autem', 'cum', 'de', 'dum', 'e', 'erant', 'erat', 'est', 'et', 'etiam', 'ex', 'haec', 'hic', 'hoc', 'in', 'ita', 'me', 'nec', 'neque', 'non', 'per', 'qua', 'quae', 'quam', 'qui', 'quibus', 'quidem', 'quo', 'quod', 're', 'rebus', 'rem', 'res', 'sed', 'si', 'sic', 'sunt', 'tamen', 'tandem', 'te', 'ut', 'vel'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const lav = ['aiz', 'ap', 'apakš', 'apakšpus', 'ar', 'arī', 'augšpus', 'bet', 'bez', 'bija', 'biji', 'biju', 'bijām', 'bijāt', 'būs', 'būsi', 'būsiet', 'būsim', 'būt', 'būšu', 'caur', 'diemžēl', 'diezin', 'droši', 'dēļ', 'esam', 'esat', 'esi', 'esmu', 'gan', 'gar', 'iekam', 'iekams', 'iekām', 'iekāms', 'iekš', 'iekšpus', 'ik', 'ir', 'it', 'itin', 'iz', 'ja', 'jau', 'jeb', 'jebšu', 'jel', 'jo', 'jā', 'ka', 'kamēr', 'kaut', 'kolīdz', 'kopš', 'kā', 'kļuva', 'kļuvi', 'kļuvu', 'kļuvām', 'kļuvāt', 'kļūs', 'kļūsi', 'kļūsiet', 'kļūsim', 'kļūst', 'kļūstam', 'kļūstat', 'kļūsti', 'kļūstu', 'kļūt', 'kļūšu', 'labad', 'lai', 'lejpus', 'līdz', 'līdzko', 'ne', 'nebūt', 'nedz', 'nekā', 'nevis', 'nezin', 'no', 'nu', 'nē', 'otrpus', 'pa', 'par', 'pat', 'pie', 'pirms', 'pret', 'priekš', 'pār', 'pēc', 'starp', 'tad', 'tak', 'tapi', 'taps', 'tapsi', 'tapsiet', 'tapsim', 'tapt', 'tapāt', 'tapšu', 'taču', 'te', 'tiec', 'tiek', 'tiekam', 'tiekat', 'tieku', 'tik', 'tika', 'tikai', 'tiki', 'tikko', 'tiklab', 'tiklīdz', 'tiks', 'tiksiet', 'tiksim', 'tikt', 'tiku', 'tikvien', 'tikām', 'tikāt', 'tikšu', 'tomēr', 'topat', 'turpretim', 'turpretī', 'tā', 'tādēļ', 'tālab', 'tāpēc', 'un', 'uz', 'vai', 'var', 'varat', 'varēja', 'varēji', 'varēju', 'varējām', 'varējāt', 'varēs', 'varēsi', 'varēsiet', 'varēsim', 'varēt', 'varēšu', 'vien', 'virs', 'virspus', 'vis', 'viņpus', 'zem', 'ārpus', 'šaipus'];

/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const lit = ['abi', 'abidvi', 'abiejose', 'abiejuose', 'abiejø', 'abiem', 'abigaliai', 'abipus', 'abu', 'abudu', 'ai', 'ana', 'anaiptol', 'anaisiais', 'anajai', 'anajam', 'anajame', 'anapus', 'anas', 'anasai', 'anasis', 'anei', 'aniedvi', 'anieji', 'aniesiems', 'anoji', 'anojo', 'anojoje', 'anokia', 'anoks', 'anosiomis', 'anosioms', 'anosios', 'anosiose', 'anot', 'ant', 'antai', 'anuodu', 'anuoju', 'anuosiuose', 'anuosius', 'anàja', 'anàjà', 'anàjá', 'anàsias', 'anøjø', 'apie', 'aplink', 'ar', 'arba', 'argi', 'arti', 'aukðèiau', 'að', 'be', 'bei', 'beje', 'bemaþ', 'bent', 'bet', 'betgi', 'beveik', 'dar', 'dargi', 'daugmaþ', 'deja', 'dëka', 'dël', 'dëlei', 'dëlto', 'ech', 'et', 'gal', 'galbût', 'galgi', 'gan', 'gana', 'gi', 'greta', 'idant', 'iki', 'ir', 'irgi', 'it', 'itin', 'ið', 'iðilgai', 'iðvis', 'jaisiais', 'jajai', 'jajam', 'jajame', 'jei', 'jeigu', 'ji', 'jiedu', 'jiedvi', 'jieji', 'jiesiems', 'jinai', 'jis', 'jisai', 'jog', 'joji', 'jojo', 'jojoje', 'jokia', 'joks', 'josiomis', 'josioms', 'josios', 'josiose', 'judu', 'judvi', 'juk', 'jumis', 'jums', 'jumyse', 'juodu', 'juoju', 'juosiuose', 'juosius', 'jus', 'jàja', 'jàjà', 'jàsias', 'jájá', 'jøjø', 'jûs', 'jûsiðkis', 'jûsiðkë', 'jûsø', 'kad', 'kada', 'kadangi', 'kai', 'kaip', 'kaipgi', 'kas', 'katra', 'katras', 'katriedvi', 'katruodu', 'kaþin', 'kaþkas', 'kaþkatra', 'kaþkatras', 'kaþkokia', 'kaþkoks', 'kaþkuri', 'kaþkuris', 'kiaurai', 'kiek', 'kiekvienas', 'kieno', 'kita', 'kitas', 'kitokia', 'kitoks', 'kodël', 'kokia', 'koks', 'kol', 'kolei', 'kone', 'kuomet', 'kur', 'kurgi', 'kuri', 'kuriedvi', 'kuris', 'kuriuodu', 'lai', 'lig', 'ligi', 'link', 'lyg', 'man', 'manaisiais', 'manajai', 'manajam', 'manajame', 'manas', 'manasai', 'manasis', 'mane', 'manieji', 'maniesiems', 'manim', 'manimi', 'maniðkis', 'maniðkë', 'mano', 'manoji', 'manojo', 'manojoje', 'manosiomis', 'manosioms', 'manosios', 'manosiose', 'manuoju', 'manuosiuose', 'manuosius', 'manyje', 'manàja', 'manàjà', 'manàjá', 'manàsias', 'manæs', 'manøjø', 'mat', 'maþdaug', 'maþne', 'mes', 'mudu', 'mudvi', 'mumis', 'mums', 'mumyse', 'mus', 'mûsiðkis', 'mûsiðkë', 'mûsø', 'na', 'nagi', 'ne', 'nebe', 'nebent', 'negi', 'negu', 'nei', 'nejau', 'nejaugi', 'nekaip', 'nelyginant', 'nes', 'net', 'netgi', 'netoli', 'neva', 'nors', 'nuo', 'në', 'o', 'ogi', 'oi', 'paeiliui', 'pagal', 'pakeliui', 'palaipsniui', 'palei', 'pas', 'pasak', 'paskos', 'paskui', 'paskum', 'pat', 'pati', 'patiems', 'paties', 'pats', 'patys', 'patá', 'paèiais', 'paèiam', 'paèiame', 'paèiu', 'paèiuose', 'paèius', 'paèiø', 'per', 'pernelyg', 'pirm', 'pirma', 'pirmiau', 'po', 'prie', 'prieð', 'prieðais', 'pro', 'pusiau', 'rasi', 'rodos', 'sau', 'savaisiais', 'savajai', 'savajam', 'savajame', 'savas', 'savasai', 'savasis', 'save', 'savieji', 'saviesiems', 'savimi', 'saviðkis', 'saviðkë', 'savo', 'savoji', 'savojo', 'savojoje', 'savosiomis', 'savosioms', 'savosios', 'savosiose', 'savuoju', 'savuosiuose', 'savuosius', 'savyje', 'savàja', 'savàjà', 'savàjá', 'savàsias', 'savæs', 'savøjø', 'skersai', 'skradþiai', 'staèiai', 'su', 'sulig', 'ta', 'tad', 'tai', 'taigi', 'taip', 'taipogi', 'taisiais', 'tajai', 'tajam', 'tajame', 'tamsta', 'tarp', 'tarsi', 'tartum', 'tarytum', 'tas', 'tasai', 'tau', 'tavaisiais', 'tavajai', 'tavajam', 'tavajame', 'tavas', 'tavasai', 'tavasis', 'tave', 'tavieji', 'taviesiems', 'tavimi', 'taviðkis', 'taviðkë', 'tavo', 'tavoji', 'tavojo', 'tavojoje', 'tavosiomis', 'tavosioms', 'tavosios', 'tavosiose', 'tavuoju', 'tavuosiuose', 'tavuosius', 'tavyje', 'tavàja', 'tavàjà', 'tavàjá', 'tavàsias', 'tavæs', 'tavøjø', 'taèiau', 'te', 'tegu', 'tegul', 'tiedvi', 'tieji', 'ties', 'tiesiems', 'tiesiog', 'tik', 'tikriausiai', 'tiktai', 'toji', 'tojo', 'tojoje', 'tokia', 'toks', 'tol', 'tolei', 'toliau', 'tosiomis', 'tosioms', 'tosios', 'tosiose', 'tu', 'tuodu', 'tuoju', 'tuosiuose', 'tuosius', 'turbût', 'tàja', 'tàjà', 'tàjá', 'tàsias', 'tøjø', 'tûlas', 'uþ', 'uþtat', 'uþvis', 'va', 'vai', 'viduj', 'vidury', 'vien', 'vienas', 'vienokia', 'vienoks', 'vietoj', 'virð', 'virðuj', 'virðum', 'vis', 'vis dëlto', 'visa', 'visas', 'visgi', 'visokia', 'visoks', 'vos', 'vël', 'vëlgi', 'ypaè', 'á', 'ákypai', 'ástriþai', 'ðalia', 'ðe', 'ði', 'ðiaisiais', 'ðiajai', 'ðiajam', 'ðiajame', 'ðiapus', 'ðiedvi', 'ðieji', 'ðiesiems', 'ðioji', 'ðiojo', 'ðiojoje', 'ðiokia', 'ðioks', 'ðiosiomis', 'ðiosioms', 'ðiosios', 'ðiosiose', 'ðis', 'ðisai', 'ðit', 'ðita', 'ðitas', 'ðitiedvi', 'ðitokia', 'ðitoks', 'ðituodu', 'ðiuodu', 'ðiuoju', 'ðiuosiuose', 'ðiuosius', 'ðiàja', 'ðiàjà', 'ðiàsias', 'ðiøjø', 'ðtai', 'ðájá', 'þemiau'];

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const lgg = ['́', '̀', 'nɨ', 'mà', 'rɨ', 'dɨ', 'ɨ', '́nɨ', 'èrɨ', '́á\'', 'sɨ', 'àzɨ', 'yɨ', 'rá', 'vɨ', 'nga', 'be', 'mɨ', 'à', 'dà', 'kʉ', 'bá', ' ́lé', 'má', 'e', 'yo', '̀yɨ', 'ma', 'kɨ', 'àlʉ', '́mà', 'rʉ́', 'drɨ', 'patí', 'a', 'è', 'yó', 'te', '̀á', 'mà', 'mâ', 'dálé', 'yí', '̌', 'pɨ', 'e\'yó', 'ndráa', 'bo', 'di', 'drìá'];

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const lggNd = ['ma', 'ni', 'ri', 'eri', 'di', 'yi', 'si', 'ba', 'nga', 'i', 'ra', 'ku', 'be', 'yo', 'da', 'azini', 'dria', 'ru', 'azi', 'mu', 'te', 'ndra', 'diyi', 'ima', 'mi', 'alu', 'nde', 'alia', 'le', 'vile', 'dri', 'pati', 'aria', 'bo', 'e\'yo', 'tu', 'kini', 'dii', 'ama', 'eyi', 'dika', 'pi', 'e', 'angu', 'e\'do', 'pie', 'ka', 'ti', 'o\'du', 'du'];

/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const msa = ['abdul', 'abdullah', 'acara', 'ada', 'adalah', 'ahmad', 'air', 'akan', 'akhbar', 'akhir', 'aktiviti', 'alam', 'amat', 'amerika', 'anak', 'anggota', 'antara', 'antarabangsa', 'apa', 'apabila', 'april', 'as', 'asas', 'asean', 'asia', 'asing', 'atas', 'atau', 'australia', 'awal', 'awam', 'bagaimanapun', 'bagi', 'bahagian', 'bahan', 'baharu', 'bahawa', 'baik', 'bandar', 'bank', 'banyak', 'barangan', 'baru', 'baru-baru', 'bawah', 'beberapa', 'bekas', 'beliau', 'belum', 'berada', 'berakhir', 'berbanding', 'berdasarkan', 'berharap', 'berikutan', 'berjaya', 'berjumlah', 'berkaitan', 'berkata', 'berkenaan', 'berlaku', 'bermula', 'bernama', 'bernilai', 'bersama', 'berubah', 'besar', 'bhd', 'bidang', 'bilion', 'bn', 'boleh', 'bukan', 'bulan', 'bursa', 'cadangan', 'china', 'dagangan', 'dalam', 'dan', 'dana', 'dapat', 'dari', 'daripada', 'dasar', 'datang', 'datuk', 'demikian', 'dengan', 'depan', 'derivatives', 'dewan', 'di', 'diadakan', 'dibuka', 'dicatatkan', 'dijangka', 'diniagakan', 'dis', 'disember', 'ditutup', 'dolar', 'dr', 'dua', 'dunia', 'ekonomi', 'eksekutif', 'eksport', 'empat', 'enam', 'faedah', 'feb', 'global', 'hadapan', 'hanya', 'harga', 'hari', 'hasil', 'hingga', 'hubungan', 'ia', 'iaitu', 'ialah', 'indeks', 'india', 'indonesia', 'industri', 'ini', 'islam', 'isnin', 'isu', 'itu', 'jabatan', 'jalan', 'jan', 'jawatan', 'jawatankuasa', 'jepun', 'jika', 'jualan', 'juga', 'julai', 'jumaat', 'jumlah', 'jun', 'juta', 'kadar', 'kalangan', 'kali', 'kami', 'kata', 'katanya', 'kaunter', 'kawasan', 'ke', 'keadaan', 'kecil', 'kedua', 'kedua-dua', 'kedudukan', 'kekal', 'kementerian', 'kemudahan', 'kenaikan', 'kenyataan', 'kepada', 'kepentingan', 'keputusan', 'kerajaan', 'kerana', 'kereta', 'kerja', 'kerjasama', 'kes', 'keselamatan', 'keseluruhan', 'kesihatan', 'ketika', 'ketua', 'keuntungan', 'kewangan', 'khamis', 'kini', 'kira-kira', 'kita', 'klci', 'klibor', 'komposit', 'kontrak', 'kos', 'kuala', 'kuasa', 'kukuh', 'kumpulan', 'lagi', 'lain', 'langkah', 'laporan', 'lebih', 'lepas', 'lima', 'lot', 'luar', 'lumpur', 'mac', 'mahkamah', 'mahu', 'majlis', 'makanan', 'maklumat', 'malam', 'malaysia', 'mana', 'manakala', 'masa', 'masalah', 'masih', 'masing-masing', 'masyarakat', 'mata', 'media', 'mei', 'melalui', 'melihat', 'memandangkan', 'memastikan', 'membantu', 'membawa', 'memberi', 'memberikan', 'membolehkan', 'membuat', 'mempunyai', 'menambah', 'menarik', 'menawarkan', 'mencapai', 'mencatatkan', 'mendapat', 'mendapatkan', 'menerima', 'menerusi', 'mengadakan', 'mengambil', 'mengenai', 'menggalakkan', 'menggunakan', 'mengikut', 'mengumumkan', 'mengurangkan', 'meningkat', 'meningkatkan', 'menjadi', 'menjelang', 'menokok', 'menteri', 'menunjukkan', 'menurut', 'menyaksikan', 'menyediakan', 'mereka', 'merosot', 'merupakan', 'mesyuarat', 'minat', 'minggu', 'minyak', 'modal', 'mohd', 'mudah', 'mungkin', 'naik', 'najib', 'nasional', 'negara', 'negara-negara', 'negeri', 'niaga', 'nilai', 'nov', 'ogos', 'okt', 'oleh', 'operasi', 'orang', 'pada', 'pagi', 'paling', 'pameran', 'papan', 'para', 'paras', 'parlimen', 'parti', 'pasaran', 'pasukan', 'pegawai', 'pejabat', 'pekerja', 'pelabur', 'pelaburan', 'pelancongan', 'pelanggan', 'pelbagai', 'peluang', 'pembangunan', 'pemberita', 'pembinaan', 'pemimpin', 'pendapatan', 'pendidikan', 'penduduk', 'penerbangan', 'pengarah', 'pengeluaran', 'pengerusi', 'pengguna', 'pengurusan', 'peniaga', 'peningkatan', 'penting', 'peratus', 'perdagangan', 'perdana', 'peringkat', 'perjanjian', 'perkara', 'perkhidmatan', 'perladangan', 'perlu', 'permintaan', 'perniagaan', 'persekutuan', 'persidangan', 'pertama', 'pertubuhan', 'pertumbuhan', 'perusahaan', 'peserta', 'petang', 'pihak', 'pilihan', 'pinjaman', 'polis', 'politik', 'presiden', 'prestasi', 'produk', 'program', 'projek', 'proses', 'proton', 'pukul', 'pula', 'pusat', 'rabu', 'rakan', 'rakyat', 'ramai', 'rantau', 'raya', 'rendah', 'ringgit', 'rumah', 'sabah', 'sahaja', 'saham', 'sama', 'sarawak', 'satu', 'sawit', 'saya', 'sdn', 'sebagai', 'sebahagian', 'sebanyak', 'sebarang', 'sebelum', 'sebelumnya', 'sebuah', 'secara', 'sedang', 'segi', 'sehingga', 'sejak', 'sekarang', 'sektor', 'sekuriti', 'selain', 'selama', 'selasa', 'selatan', 'selepas', 'seluruh', 'semakin', 'semalam', 'semasa', 'sementara', 'semua', 'semula', 'sen', 'sendiri', 'seorang', 'sepanjang', 'seperti', 'sept', 'september', 'serantau', 'seri', 'serta', 'sesi', 'setiap', 'setiausaha', 'sidang', 'singapura', 'sini', 'sistem', 'sokongan', 'sri', 'sudah', 'sukan', 'suku', 'sumber', 'supaya', 'susut', 'syarikat', 'syed', 'tahap', 'tahun', 'tan', 'tanah', 'tanpa', 'tawaran', 'teknologi', 'telah', 'tempat', 'tempatan', 'tempoh', 'tenaga', 'tengah', 'tentang', 'terbaik', 'terbang', 'terbesar', 'terbuka', 'terdapat', 'terhadap', 'termasuk', 'tersebut', 'terus', 'tetapi', 'thailand', 'tiada', 'tidak', 'tiga', 'timbalan', 'timur', 'tindakan', 'tinggi', 'tun', 'tunai', 'turun', 'turut', 'umno', 'unit', 'untuk', 'untung', 'urus', 'usaha', 'utama', 'walaupun', 'wang', 'wanita', 'wilayah', 'yang'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const mar = ['अधिक', 'अनेक', 'अशी', 'असलयाचे', 'असलेल्या', 'असा', 'असून', 'असे', 'आज', 'आणि', 'आता', 'आपल्या', 'आला', 'आली', 'आले', 'आहे', 'आहेत', 'एक', 'एका', 'कमी', 'करणयात', 'करून', 'का', 'काम', 'काय', 'काही', 'किवा', 'की', 'केला', 'केली', 'केले', 'कोटी', 'गेल्या', 'घेऊन', 'जात', 'झाला', 'झाली', 'झाले', 'झालेल्या', 'टा', 'डॉ', 'तर', 'तरी', 'तसेच', 'ता', 'ती', 'तीन', 'ते', 'तो', 'त्या', 'त्याचा', 'त्याची', 'त्याच्या', 'त्याना', 'त्यानी', 'त्यामुळे', 'त्री', 'दिली', 'दोन', 'न', 'नाही', 'निर्ण्य', 'पण', 'पम', 'परयतन', 'पाटील', 'म', 'मात्र', 'माहिती', 'मी', 'मुबी', 'म्हणजे', 'म्हणाले', 'म्हणून', 'या', 'याचा', 'याची', 'याच्या', 'याना', 'यानी', 'येणार', 'येत', 'येथील', 'येथे', 'लाख', 'व', 'व्यकत', 'सर्व', 'सागित्ले', 'सुरू', 'हजार', 'हा', 'ही', 'हे', 'होणार', 'होत', 'होता', 'होती', 'होते'];

/*
The MIT License (MIT)

Copyright (c) 2019 Kyaw-Zin-Thant

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const mya = ['အပေါ်', 'အနက်', 'အမြဲတမ်း', 'အတွင်းတွင်', 'မကြာမီ', 'မတိုင်မီ', 'ဒါ့အပြင်', 'အောက်မှာ', 'အထဲမှာ', 'ဘယ်တော့မျှ', 'မကြာခဏ', 'တော်တော်လေး', 'စဉ်တွင်', 'နှင့်အတူ', 'နှင့်', 'နှင့်တကွ', 'ကျွန်တော်', 'ကျွန်မ', 'ငါ', 'ကျုပ်', 'ကျွနု်ပ်', 'ကျနော်', 'ကျမ', 'သူ', 'သူမ', 'ထိုဟာ', 'ထိုအရာ', 'ဤအရာ', 'ထို', '၄င်း', 'ကျွန်တော်တို့', 'ကျွန်မတို့', 'ငါတို့', 'ကျုပ်တို့', 'ကျွနု်ပ်တို့', 'ကျနော်တို့', 'ကျမတို့', 'သင်', 'သင်တို့', 'နင်တို့', 'မင်း', 'မင်းတို့', 'သူတို့', 'ကျွန်တော်အား', 'ကျွန်တော်ကို', 'ကျွန်မကို', 'ငါကို', 'ကျုပ်ကို', 'ကျွနု်ပ်ကို', 'သူ့ကို', 'သူမကို', 'ထိုအရာကို', 'သင့်ကို', 'သင်တို့ကို', 'နင်တို့ကို', 'မင်းကို', 'မင်းတို့ကို', 'ငါတို့ကို', 'ကျုပ်တို့ကို', 'ကျွနု်ပ်တို့ကို', 'မိမိကိုယ်တိုင်', 'မိမိဘာသာ', 'မင်းကိုယ်တိုင်', 'မင်းဘာသာ', 'မင်းတို့ကိုယ်တိုင်', 'မင်းတို့ဘာသာ', 'သူကိုယ်တိုင်', 'ကိုယ်တိုင်', 'သူမကိုယ်တိုင်', 'သူ့ဘာသာ', 'သူ့ကိုယ်ကို', 'ကိုယ့်ကိုယ်ကို', 'မိမိကိုယ်ကို', '၄င်းပင်', 'ထိုအရာပင်', 'သည့်', 'မည့်', 'တဲ့', 'ကျွနု်ပ်၏', 'ကျွန်တော်၏', 'ကျွန်မ၏', 'ကျနော်၏', 'ကျမ၏', 'သူ၏', 'သူမ၏', 'ထိုအရာ၏', 'ထိုဟာ၏', 'ကျွနု်ပ်တို့၏', 'ငါတို့၏', 'ကျွန်တော်တို့၏', 'ကျွန်မတို့၏', 'ကျနော်တို့၏', 'ကျမတို့၏', 'သင်၏', 'သင်တို့၏', 'မင်း၏', 'မင်းတို့၏', 'သူတို့၏', 'ကျွန်တော့်ဟာ', 'ကျွန်မဟာ', 'ကျနော်၏ဟာ', 'ကျမ၏ဟာ', 'ကျမဟာ', 'ကျနော်ဟာ', 'သူဟာ', 'သူမဟာ', 'သူ့ဟာ', 'ကျွနု်ပ်တို့ဟာ', 'ကျွန်တော်တို့ဟာ', 'ကျွန်မတို့ဟာ', 'သင်တို့ဟာ', 'မင်းတို့ဟာ', 'သူတို့ဟာ', 'သူမတို့ဟာ', 'ဤအရာ', 'ဟောဒါ', 'ဟောဒီ', 'ဟောဒီဟာ', 'ဒီဟာ', 'ဒါ', 'ထိုအရာ', '၄င်းအရာ', 'ယင်းအရာ', 'အဲဒါ', 'ဟိုဟာ', 'အချို့', 'တစ်ခုခု', 'အဘယ်မဆို', 'ဘယ်အရာမဆို', 'အဘယ်မည်သော', 'အကြင်', 'အရာရာတိုင်း', 'စိုးစဉ်မျှ', 'စိုးစဉ်းမျှ', 'ဘယ်လောက်မဆို', 'တစ်စုံတစ်ရာ', 'တစုံတရာ', 'အလျဉ်းမဟုတ်', 'မည်သည့်နည်းနှင့်မျှမဟုတ်', 'အလျဉ်းမရှိသော', 'အခြားဖြစ်သော', 'အခြားသော', 'အခြားတစ်ခု', 'အခြားတစ်ယောက်', 'အားလုံး', 'အရာရာတိုင်း', 'အကုန်လုံး', 'အလုံးစုံ', 'အရာခပ်သိမ်း', 'တစ်ခုစီ', 'အသီးသီး', 'တစ်ဦးဦး', 'တစ်ခုခု', 'ကိုယ်စီကိုယ်ငှ', 'ကိုယ်စီ', 'တစ်ဦးစီ', 'တစ်ယောက်စီ', 'တစ်ခုစီ', 'အကုန်', 'အပြည့်အစုံ', 'လုံးလုံး', 'နှစ်ခုလုံး', 'နှစ်ယောက်လုံး', 'နှစ်ဘက်လုံး', 'တစ်စုံတစ်ရာ', 'တစ်စုံတစ်ခု', 'တစုံတခု', 'တစ်စုံတစ်ယောက်', 'တစုံတယောက်', 'တစ်ယောက်ယောက်', 'မည်သူမဆို', 'ဘာမျှမရှိ', 'ဘာမှမရှိ', 'အဘယ်အရာမျှမရှိ', 'လူတိုင်း', 'လူတကာ', 'နှင့်', 'ပြီးလျှင်', '၄င်းနောက်', 'သို့မဟုတ်', 'သို့တည်းမဟုတ်', 'သို့မဟုတ်လျှင်', 'ဒါမှမဟုတ်', 'ဖြစ်စေ', 'သို့စေကာမူ', 'ဒါပေမယ့်', 'ဒါပေမဲ့', 'မှတစ်ပါး', 'မှလွဲလျှင်', 'အဘယ်ကြောင့်ဆိုသော်', 'သောကြောင့်', 'သဖြင့်', '၍', 'သည့်အတွက်ကြောင့်', 'လျှင်', 'ပါက', 'အကယ်၍', 'သော်ငြားလည်း', 'စေကာမူ', 'နည်းတူ', 'ပေမယ့်', 'ပေမဲ့', 'ထိုနည်းတူစွာ', 'ထိုနည်းတူ', 'ကဲ့သို့', 'သကဲ့သို့', 'ယင်းကဲ့သို့', 'ထိုကဲ့သို့', 'နှင့်စပ်လျဉ်း၍', 'ဤမျှ', 'ဤမျှလောက်', 'ဤကဲ့သို့', 'အခုလောက်ထိ', 'ဒါကတော့', 'အဘယ်ကဲ့သလို့', 'မည်ကဲ့သို့', 'မည်သည့်နည်းနှင့်', 'မည်သည့်နည်းဖြင့်', 'မည်သည့်နည့်နှင့်မဆို', 'မည်သည့်နည်းဖြင့်မဆို', 'မည်သို့', 'ဘယ်လိုလဲ', 'သို့ပေတည့်', 'သို့ပေမည့်', 'ဘယ်နည်းနှင့်', 'မည်ရွေ့မည်မျှ', 'အဘယ်မျှလောက်', 'ဘယ်လောက်', 'မည်သူ', 'ဘယ်သူ', 'မည်သည့်အကြောင်းကြောင့်', 'ဘာအတွက်ကြောင့်', 'အဘယ်ကြောင့်', 'မည်သည့်အတွက်ကြောင့်', 'ဘာကြောင့်', 'ဘာအတွက်နဲ့လဲ', 'မည်သည်', 'ဘာလဲ', 'အဘယ်အရာနည်း', 'မည်သည့်အရပ်မှာ', 'ဘယ်နေရာတွင်', 'မည်သည့်နေရာတွင်', 'မည်သည့်နေရာသို့', 'ဘယ်နေရာသို့', 'ဘယ်နေရာမှာ', 'ဘယ်သူ၏', 'မည်သည့်အရာ၏', 'မည်သည့်အခါ', 'ဘယ်အချိန်', 'ဘယ်အခါ', 'မည်သည့်အချိန်', 'ဘယ်တော့', 'မည်သူကို', 'မည်သူက', 'ဘယ်သူ့ကို', 'မည်သူမည်ဝါ', 'မည်သည့်အရာ', 'ဘယ်အရာ', 'မည်သို့ပင်ဖြစ်စေ', 'ဘယ်လိုပဲဖြစ်ဖြစ်', 'မည်ရွေ့မည်မျှဖြစ်စေ', 'မည်သည့်နည်းနှင့်မဆို', 'ဘယ်နည်းနဲ့ဖြစ်ဖြစ်', 'မည်သူမဆို', 'ဘယ်သူမဆို', 'အဘယ်သူမဆို', 'မည်သည့်အရာမဆို', 'ဘာဖြစ်ဖြစ်', 'မည်သည့်အရာဖြစ်ဖြစ်', 'မည်သည့်အရပ်၌မဆို', 'မည်သည့်နေရာမဆို', 'ဘယ်အခါမဆို', 'ဘယ်အချိန်မဆို', 'ဘယ်အခါဖြစ်ဖြစ်', 'အချိန်အခါမရွေး'];

/*
Copyright (c) 2014, Kristoffer Brabrand

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const nob = ['og', 'i', 'jeg', 'det', 'at', 'en', 'et', 'den', 'til', 'er', 'som', 'på', 'de', 'med', 'han', 'av', 'ikke', 'der', 'så', 'var', 'meg', 'seg', 'men', 'ett', 'har', 'om', 'vi', 'min', 'mitt', 'ha', 'hadde', 'hun', 'nå', 'over', 'da', 'ved', 'fra', 'du', 'ut', 'sin', 'dem', 'oss', 'opp', 'man', 'kan', 'hans', 'hvor', 'eller', 'hva', 'skal', 'selv', 'sjøl', 'her', 'alle', 'vil', 'bli', 'ble', 'blitt', 'kunne', 'inn', 'når', 'kom', 'noen', 'noe', 'ville', 'dere', 'som', 'deres', 'kun', 'ja', 'etter', 'ned', 'skulle', 'denne', 'for', 'deg', 'si', 'sine', 'sitt', 'mot', 'å', 'meget', 'hvorfor', 'dette', 'disse', 'uten', 'hvordan', 'ingen', 'din', 'ditt', 'blir', 'samme', 'hvilken', 'hvilke', 'sånn', 'inni', 'mellom', 'vår', 'hver', 'hvem', 'vors', 'hvis', 'både', 'bare', 'enn', 'fordi', 'før', 'mange', 'også', 'slik', 'vært', 'være', 'begge', 'siden', 'henne', 'hennar', 'hennes'];

/* The MIT License (MIT)
Copyright (c) 2018-20 Espen Klem

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const panGu = ['ਦੇ', 'ਵਿੱਚ', 'ਦਾ', 'ਅਤੇ', 'ਦੀ', 'ਇੱਕ', 'ਨੂੰ', 'ਹੈ', 'ਤੋਂ', 'ਇਸ', 'ਇਹ', 'ਨੇ', 'ਤੇ', 'ਨਾਲ', 'ਲਈ', 'ਵੀ', 'ਸੀ', 'ਵਿਚ', 'ਕਿ', 'ਜੋ', 'ਉਹ', 'ਉਸ', 'ਹਨ', 'ਜਾਂਦਾ', 'ਕੀਤਾ', 'ਗਿਆ', 'ਹੀ', 'ਕੇ', 'ਜਾਂ', 'ਦੀਆਂ', 'ਜਿਸ', 'ਕਰਨ', 'ਹੋ', 'ਕਰ', 'ਆਪਣੇ', 'ਕੀਤੀ', 'ਤੌਰ', 'ਬਾਅਦ', 'ਨਹੀਂ', 'ਭਾਰਤੀ', 'ਪਿੰਡ', 'ਸਿੰਘ', 'ਉੱਤੇ', 'ਸਾਲ', '।', 'ਪੰਜਾਬ', 'ਸਭ', 'ਭਾਰਤ', 'ਉਨ੍ਹਾਂ', 'ਹੁੰਦਾ', 'ਤੱਕ', 'ਇਕ', 'ਹੋਇਆ', 'ਜਨਮ', 'ਬਹੁਤ', 'ਪਰ', 'ਦੁਆਰਾ', 'ਰੂਪ', 'ਹੋਰ', 'ਕੰਮ', 'ਆਪਣੀ', 'ਤਾਂ', 'ਸਮੇਂ', 'ਪੰਜਾਬੀ', 'ਗਈ', 'ਦਿੱਤਾ', 'ਦੋ', 'ਕਿਸੇ', 'ਕਈ', 'ਜਾ', 'ਵਾਲੇ', 'ਸ਼ੁਰੂ', 'ਉਸਨੇ', 'ਕਿਹਾ', 'ਹੋਣ', 'ਲੋਕ', 'ਜਾਂਦੀ', 'ਵਿੱਚੋਂ', 'ਨਾਮ', 'ਜਦੋਂ', 'ਪਹਿਲਾਂ', 'ਕਰਦਾ', 'ਹੁੰਦੀ', 'ਹੋਏ', 'ਸਨ', 'ਵਜੋਂ', 'ਰਾਜ', 'ਮੁੱਖ', 'ਕਰਦੇ', 'ਕੁਝ', 'ਸਾਰੇ', 'ਹੁੰਦੇ', 'ਸ਼ਹਿਰ', 'ਭਾਸ਼ਾ', 'ਹੋਈ', 'ਅਨੁਸਾਰ', 'ਸਕਦਾ', 'ਆਮ', 'ਵੱਖ', 'ਕੋਈ', 'ਵਾਰ', 'ਗਏ', 'ਖੇਤਰ', 'ਜੀ', 'ਕਾਰਨ', 'ਕਰਕੇ', 'ਜਿਵੇਂ', 'ਜ਼ਿਲ੍ਹੇ', 'ਲੋਕਾਂ', 'ਚ', 'ਸਾਹਿਤ', 'ਸਦੀ', 'ਬਾਰੇ', 'ਜਾਂਦੇ', 'ਵਾਲਾ', 'ਜਾਣ', 'ਪਹਿਲੀ', 'ਪ੍ਰਾਪਤ', 'ਰਿਹਾ', 'ਵਾਲੀ', 'ਨਾਂ', 'ਦੌਰਾਨ', 'ਤਰ੍ਹਾਂ', 'ਯੂਨੀਵਰਸਿਟੀ', 'ਨਾ', 'ਏ', 'ਤਿੰਨ', 'ਇਨ੍ਹਾਂ', 'ਗੁਰੂ', 'ਇਸਨੂੰ', 'ਇਹਨਾਂ', 'ਪਿਤਾ', 'ਲਿਆ', 'ਸ਼ਾਮਲ', 'ਸ਼ਬਦ', 'ਅੰਗਰੇਜ਼ੀ', 'ਉਸਨੂੰ', 'ਉਹਨਾਂ', 'ਸਥਿਤ', 'ਫਿਰ', 'ਜੀਵਨ', 'ਸਕੂਲ', 'ਹੁਣ', 'ਦਿਨ', 'ਕੀਤੇ', 'ਆਦਿ', 'ਵੱਧ', 'ਲੈ', 'ਘਰ', 'ਵੱਲ', 'ਦੇਸ਼', 'ਵਲੋਂ', 'ਬਣ', 'ਵੀਂ', 'ਫਿਲਮ', 'ਉਮਰ', 'ਬਲਾਕ', 'ਰਹੇ', 'ਸਾਹਿਬ', 'ਕਰਦੀ', 'ਹਰ', 'ਪੈਦਾ', 'ਘੱਟ', 'ਲੇਖਕ', 'ਹਿੱਸਾ', 'ਫ਼ਿਲਮ', 'ਮੌਤ', 'ਜਿੱਥੇ', 'ਵੱਡਾ', 'ਵਿਖੇ', 'ਆਪਣਾ', 'ਪਹਿਲਾ', 'ਵਰਤੋਂ', 'ਆਪ', 'ਕਰਨਾ', 'ਵਿਆਹ', 'ਰਹੀ', 'ਰਾਹੀਂ', 'ਦਿੱਤੀ', 'ਉਸਦੇ', 'ਪਰਿਵਾਰ', 'ਆ', 'ਦੂਜੇ', 'ਅਮਰੀਕਾ', 'ਮੰਨਿਆ', 'ਇਸਦੇ', 'ਈ', 'ਕਾਲਜ', 'ਸਰਕਾਰ', 'ਇੱਥੇ', 'ਪਾਕਿਸਤਾਨ', 'ਸ਼ਾਮਿਲ', 'ਵਿਗਿਆਨ', 'ਉਸਦੀ', 'ਪੇਸ਼', 'ਕਿਉਂਕਿ', 'ਪਹਿਲੇ', 'ਧਰਮ', 'ਮਸ਼ਹੂਰ', 'ਅੰਦਰ', 'ਵਿਚੋਂ', 'ਜਿਨ੍ਹਾਂ', 'ਜਾਣਿਆ', 'ਪਾਣੀ', 'ਇਲਾਵਾ', 'ਅਰਥ', 'ਚਾਰ', 'ਪ੍ਰਸਿੱਧ', 'ਨਾਵਲ', 'ਵੱਡੇ', 'ਵੱਲੋਂ', 'ਕਹਾਣੀ', 'ਵਿਸ਼ਵ', 'ਮੂਲ', 'ਅਮਰੀਕੀ', 'ਸਥਾਨ', 'ਇਤਿਹਾਸ', 'ਕੁੱਝ', 'ਵਿਕਾਸ', 'ਉੱਤਰ', 'ਸਿੱਖਿਆ', 'ਹਿੰਦੀ', 'ਪ੍ਰਮੁੱਖ', 'ਰਚਨਾ', 'ਬਣਾਇਆ', 'ਵਿਸ਼ੇਸ਼', 'ਡਾ', 'ਉੱਪਰ', 'ਪੱਛਮੀ', 'ਦੇਣ', 'ਇਸਦਾ', 'ਸਕਦੇ', 'ਰੱਖਿਆ', 'ਕਵੀ', 'ਦਿੱਲੀ', 'ਵੱਡੀ', 'ਭੂਮਿਕਾ', 'ਸਮਾਜ', 'ਕਾਵਿ', 'ਕੀ', 'ਕੋਲ', 'ਦ', 'ਗੱਲ', 'ਸੰਸਾਰ', 'ਭਾਗ', 'ਆਈ', 'ਦੱਖਣ', 'ਅੱਜ', 'ਸਿੱਖ', 'ਕਹਿੰਦੇ', 'ਸੰਗੀਤ', 'ਕਿਲੋਮੀਟਰ', 'ਜਿਹਨਾਂ', 'ਸਭਾ', 'ਜਿਸਦਾ', 'ਜਨਵਰੀ', 'ਕਵਿਤਾ', 'ਮੈਂਬਰ', 'ਲਿਖਿਆ', 'ਮਾਂ', 'ਕਲਾ', 'ਪੰਜ', 'ਥਾਂ', 'ਹੇਠ', 'ਜਿਆਦਾ', 'ਵਰਤਿਆ', 'ਮਾਰਚ', 'ਡੀ', 'ਅਕਤੂਬਰ', 'ਤਕ', 'ਨਾਟਕ', 'ਬੀ', 'ਖਾਸ', 'ਇਸੇ', 'ਆਧੁਨਿਕ', 'ਅਗਸਤ', 'ਤਿਆਰ', 'ਮਾਤਾ', 'ਬਣਾਉਣ', 'ਨਵੰਬਰ', 'ਵਿਅਕਤੀ', 'ਦੱਖਣੀ', 'ਦਸੰਬਰ', 'ਆਫ', 'ਗੀਤ', 'ਗਿਣਤੀ', 'ਕਾਲ', 'ਖੋਜ', 'ਸਾਲਾਂ', 'ਪੂਰੀ', 'ਸਮਾਂ', 'ਜ਼ਿਆਦਾ', 'ਇਸਦੀ', 'ਸਕਦੀ', 'ਵਿਚਕਾਰ', 'ਰਾਜਧਾਨੀ', 'ਉਸਦਾ', 'ਜੁਲਾਈ', 'ਜੂਨ', 'ਅਧੀਨ', 'ਸਥਾਪਨਾ', 'ਸੇਵਾ', 'ਭਾਵ', 'ਵਰਗ', 'ਛੋਟੇ', 'ਦਿੰਦਾ', 'ਸਮਾਜਿਕ', 'ਹੁੰਦੀਆਂ', 'ਟੀਮ', 'ਔਰਤਾਂ', 'ਅਕਸਰ', 'ਪ੍ਰਕਾਸ਼ਿਤ', 'ਉਰਦੂ', 'ਰੰਗ', 'ਪਾਰਟੀ', 'ਬਣਾ', 'ਪ੍ਰਭਾਵ', 'ਸ਼ੁਰੂਆਤ', 'ਲਗਭਗ', 'ਮਈ', 'ਸਿਰਫ', 'ਨੇੜੇ', 'ਜਿਸਨੂੰ', 'ਹਾਲਾਂਕਿ', 'ਦੂਰ', 'ਸਤੰਬਰ', 'ਕਿਤਾਬ', 'ਕਦੇ', 'ਉੱਤਰੀ', 'ਪ੍ਰਕਾਰ', 'ਇਸਨੇ', 'ਪ੍ਰਦੇਸ਼', 'ਅੱਗੇ', 'ਸੰਯੁਕਤ', 'ਪੜ੍ਹਾਈ', 'ਵਧੇਰੇ', 'ਨਾਲ਼', 'ਮਨੁੱਖ', 'ਬਾਕੀ', 'ਪ੍ਰਧਾਨ', 'ਦੂਜੀ', 'ਕੁੱਲ', 'ਆਫ਼', 'ਅਧਿਐਨ', 'ਰਾਸ਼ਟਰੀ', 'ਪੁੱਤਰ', 'ਅੰਤਰਰਾਸ਼ਟਰੀ', 'ਧਰਤੀ', 'ਕੇਂਦਰ', 'ਦੇਸ਼ਾਂ', 'ਮੱਧ', 'ਜ਼ਿਲ੍ਹਾ', 'ਸਾਰੀਆਂ', 'ਪੱਧਰ', 'ਹੋਵੇ', 'ਜੇ', 'ਭਾਈ', 'ਰਹਿਣ', 'ਪੁਰਸਕਾਰ', 'ਸਭਿਆਚਾਰ', 'ਪਤਾ', 'ਪਾਸੇ', 'ਨਵੇਂ', 'ਕੰਪਨੀ', 'ਬਾਹਰ', 'ਵੇਲੇ', 'ਸੰਨ', 'ਪੂਰਬੀ', 'ਵਿਚਾਰ', 'ਕਾਰਜ', 'ਪੀ', 'ਮਹੱਤਵਪੂਰਨ', 'ਦੁਨੀਆਂ', 'ਧਾਰਮਿਕ', 'ਮਨੁੱਖੀ', 'ਸਮੂਹ', 'ਅਜਿਹੇ', 'ਲਾਲ', 'ਦੂਜਾ', 'ਭਰਾ', 'ਸ੍ਰੀ', 'ਅੰਤ', 'ਜਾਂਦੀਆਂ', 'ਸ਼ਾਹ', 'ਰਹਿੰਦੇ', 'ਮਹਾਨ', 'ਚੀਨ', 'ਮੀਟਰ', 'ਵਰਗੇ', 'ਨਾਲੋਂ', 'ਹਾਸਲ', 'ਕਿਸਮ', 'ਅਜਿਹਾ', 'ਬਣਿਆ', 'ਭਰ', 'ਛੱਡ', 'ਲੈਣ', 'ਹਿੱਸੇ', 'ਟੀ', 'ਲਿਖੇ', 'ਮਿਲ', 'ਮੌਜੂਦ', 'ਦਿੱਤੇ', 'ਵਾਸਤੇ', 'ਵਾਲੀਆਂ', 'ਵਧੀਆ', 'ਰੂਸੀ', 'ਜਾਰੀ', 'ਸਰਕਾਰੀ', 'ਡਿਗਰੀ', 'ਪੱਛਮ', 'ਲੜਾਈ', 'ਭਾਸ਼ਾਵਾਂ', 'ਰਾਜਾ', 'ਜਲੰਧਰ', 'ਹਿੰਦੂ', 'ਔਰਤ', 'ਜੰਗ', 'ਬਾਬਾ', 'ਬੱਚਿਆਂ', 'ਮੰਤਰੀ', 'ਪਟਿਆਲਾ', 'ਵਾਂਗ', 'ਆਉਣ', 'ਭਾਵੇਂ', 'ਕੇਵਲ', 'ਐਸ', 'ਪ੍ਰਾਚੀਨ', 'ਰਹਿੰਦਾ', 'ਬੋਲੀ', 'ਅਵਾਰਡ', 'ਨਗਰ', 'ਖੇਡਾਂ', 'ਫਿਲਮਾਂ', 'ਬੱਚੇ', 'ਕੌਰ', 'ਤੋ', 'ਪ੍ਰਤੀ', 'ਕੁਆਂਟਮ', 'ਅਬਾਦੀ', 'ਪੁਸਤਕ', 'ਐਮ', 'ਰਾਮ', 'ਖੇਤਰਾਂ', 'ਫਰਵਰੀ', 'ਕ੍ਰਿਕਟ', 'ਪੈਂਦਾ', 'ਇਤਿਹਾਸਕ', 'ਲੱਗ', 'ਬ੍ਰਿਟਿਸ਼', 'ਆਇਆ', 'ਮਿਲਦਾ'];

/*
Copyright (c) 2011, Chris Umbel
Farsi Stop Words by Fardin Koochaki <me@fardinak.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to fdo so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const fas = ['از', 'با', 'به', 'برای', 'و', 'باید', 'شاید', 'اکنون', 'اگر', 'اگرچه', 'الا', 'اما', 'اندر', 'اینکه', 'باری', 'بالعکس', 'بدون', 'بر', 'بلکه', 'بنابراین', 'بی', 'پس', 'تا', 'جز', 'چنانچه', 'چه', 'چون', 'در', 'را', 'روی', 'زیرا', 'سپس', 'غیر', 'که', 'لیکن', 'مانند', 'مثل', 'مگر', 'نه', 'نیز', 'هرچند', 'هم', 'همان', 'وانگهی', 'ولی', 'ولو', 'همانند', 'همچو'];

/*
Copyright (c) 2013, Paweł Łaskarzewski

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// list based on: http://pl.wikipedia.org/wiki/Wikipedia:Stopwords

const pol = ['a', 'aby', 'ach', 'acz', 'aczkolwiek', 'aj', 'albo', 'ale', 'ależ', 'ani', 'aż', 'bardziej', 'bardzo', 'bo', 'bowiem', 'by', 'byli', 'bynajmniej', 'być', 'był', 'była', 'było', 'były', 'będzie', 'będą', 'cali', 'cała', 'cały', 'ci', 'cię', 'ciebie', 'co', 'cokolwiek', 'coś', 'czasami', 'czasem', 'czemu', 'czy', 'czyli', 'daleko', 'dla', 'dlaczego', 'dlatego', 'do', 'dobrze', 'dokąd', 'dość', 'dużo', 'dwa', 'dwaj', 'dwie', 'dwoje', 'dziś', 'dzisiaj', 'gdy', 'gdyby', 'gdyż', 'gdzie', 'gdziekolwiek', 'gdzieś', 'i', 'ich', 'ile', 'im', 'inna', 'inne', 'inny', 'innych', 'iż', 'ja', 'ją', 'jak', 'jakaś', 'jakby', 'jaki', 'jakichś', 'jakie', 'jakiś', 'jakiż', 'jakkolwiek', 'jako', 'jakoś', 'je', 'jeden', 'jedna', 'jedno', 'jednak', 'jednakże', 'jego', 'jej', 'jemu', 'jest', 'jestem', 'jeszcze', 'jeśli', 'jeżeli', 'już', 'ją', 'każdy', 'kiedy', 'kilka', 'kimś', 'kto', 'ktokolwiek', 'ktoś', 'która', 'które', 'którego', 'której', 'który', 'których', 'którym', 'którzy', 'ku', 'lat', 'lecz', 'lub', 'ma', 'mają', 'mało', 'mam', 'mi', 'mimo', 'między', 'mną', 'mnie', 'mogą', 'moi', 'moim', 'moja', 'moje', 'może', 'możliwe', 'można', 'mój', 'mu', 'musi', 'my', 'na', 'nad', 'nam', 'nami', 'nas', 'nasi', 'nasz', 'nasza', 'nasze', 'naszego', 'naszych', 'natomiast', 'natychmiast', 'nawet', 'nią', 'nic', 'nich', 'nie', 'niech', 'niego', 'niej', 'niemu', 'nigdy', 'nim', 'nimi', 'niż', 'no', 'o', 'obok', 'od', 'około', 'on', 'ona', 'one', 'oni', 'ono', 'oraz', 'oto', 'owszem', 'pan', 'pana', 'pani', 'po', 'pod', 'podczas', 'pomimo', 'ponad', 'ponieważ', 'powinien', 'powinna', 'powinni', 'powinno', 'poza', 'prawie', 'przecież', 'przed', 'przede', 'przedtem', 'przez', 'przy', 'roku', 'również', 'sam', 'sama', 'są', 'się', 'skąd', 'sobie', 'sobą', 'sposób', 'swoje', 'ta', 'tak', 'taka', 'taki', 'takie', 'także', 'tam', 'te', 'tego', 'tej', 'temu', 'ten', 'teraz', 'też', 'to', 'tobą', 'tobie', 'toteż', 'trzeba', 'tu', 'tutaj', 'twoi', 'twoim', 'twoja', 'twoje', 'twym', 'twój', 'ty', 'tych', 'tylko', 'tym', 'u', 'w', 'wam', 'wami', 'was', 'wasz', 'zaś', 'wasza', 'wasze', 'we', 'według', 'wiele', 'wielu', 'więc', 'więcej', 'tę', 'wszyscy', 'wszystkich', 'wszystkie', 'wszystkim', 'wszystko', 'wtedy', 'wy', 'właśnie', 'z', 'za', 'zapewne', 'zawsze', 'ze', 'zł', 'znowu', 'znów', 'został', 'żaden', 'żadna', 'żadne', 'żadnych', 'że', 'żeby'];

/*
Copyright (c) 2011, Luís Rodrigues

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const por = ['a', 'à', 'ao', 'aos', 'aquela', 'aquelas', 'aquele', 'aqueles', 'aquilo', 'as', 'às', 'até', 'com', 'como', 'da', 'das', 'de', 'dela', 'delas', 'dele', 'deles', 'depois', 'do', 'dos', 'e', 'ela', 'elas', 'ele', 'eles', 'em', 'entre', 'essa', 'essas', 'esse', 'esses', 'esta', 'estas', 'este', 'estes', 'eu', 'isso', 'isto', 'já', 'lhe', 'lhes', 'mais', 'mas', 'me', 'mesmo', 'meu', 'meus', 'minha', 'minhas', 'muito', 'muitos', 'na', 'não', 'nas', 'nem', 'no', 'nos', 'nós', 'nossa', 'nossas', 'nosso', 'nossos', 'num', 'nuns', 'numa', 'numas', 'o', 'os', 'ou', 'para', 'pela', 'pelas', 'pelo', 'pelos', 'por', 'quais', 'qual', 'quando', 'que', 'quem', 'se', 'sem', 'seu', 'seus', 'só', 'sua', 'suas', 'também', 'te', 'teu', 'teus', 'tu', 'tua', 'tuas', 'um', 'uma', 'umas', 'você', 'vocês', 'vos', 'vosso', 'vossos'];

/*
Copyright (c) 2017, Micael Levi and Fabrício Rodrigues

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const porBr = ['a', 'à', 'adeus', 'agora', 'aí', 'ainda', 'além', 'algo', 'alguém', 'algum', 'alguma', 'algumas', 'alguns', 'ali', 'ampla', 'amplas', 'amplo', 'amplos', 'ano', 'anos', 'ante', 'antes', 'ao', 'aos', 'apenas', 'apoio', 'após', 'aquela', 'aquelas', 'aquele', 'aqueles', 'aqui', 'aquilo', 'área', 'as', 'às', 'assim', 'até', 'atrás', 'através', 'baixo', 'bastante', 'bem', 'boa', 'boas', 'bom', 'bons', 'breve', 'cá', 'cada', 'catorze', 'cedo', 'cento', 'certamente', 'certeza', 'cima', 'cinco', 'coisa', 'coisas', 'com', 'como', 'conselho', 'contra', 'contudo', 'custa', 'da', 'dá', 'dão', 'daquela', 'daquelas', 'daquele', 'daqueles', 'dar', 'das', 'de', 'debaixo', 'dela', 'delas', 'dele', 'deles', 'demais', 'dentro', 'depois', 'desde', 'dessa', 'dessas', 'desse', 'desses', 'desta', 'destas', 'deste', 'destes', 'deve', 'devem', 'devendo', 'dever', 'deverá', 'deverão', 'deveria', 'deveriam', 'devia', 'deviam', 'dez', 'dezanove', 'dezasseis', 'dezassete', 'dezoito', 'dia', 'diante', 'disse', 'disso', 'disto', 'dito', 'diz', 'dizem', 'dizer', 'do', 'dois', 'dos', 'doze', 'duas', 'dúvida', 'e', 'é', 'ela', 'elas', 'ele', 'eles', 'em', 'embora', 'enquanto', 'entre', 'era', 'eram', 'éramos', 'és', 'essa', 'essas', 'esse', 'esses', 'esta', 'está', 'estamos', 'estão', 'estar', 'estas', 'estás', 'estava', 'estavam', 'estávamos', 'este', 'esteja', 'estejam', 'estejamos', 'estes', 'esteve', 'estive', 'estivemos', 'estiver', 'estivera', 'estiveram', 'estivéramos', 'estiverem', 'estivermos', 'estivesse', 'estivessem', 'estivéssemos', 'estiveste', 'estivestes', 'estou', 'etc', 'eu', 'exemplo', 'faço', 'falta', 'favor', 'faz', 'fazeis', 'fazem', 'fazemos', 'fazendo', 'fazer', 'fazes', 'feita', 'feitas', 'feito', 'feitos', 'fez', 'fim', 'final', 'foi', 'fomos', 'for', 'fora', 'foram', 'fôramos', 'forem', 'forma', 'formos', 'fosse', 'fossem', 'fôssemos', 'foste', 'fostes', 'fui', 'geral', 'grande', 'grandes', 'grupo', 'há', 'haja', 'hajam', 'hajamos', 'hão', 'havemos', 'havia', 'hei', 'hoje', 'hora', 'horas', 'houve', 'houvemos', 'houver', 'houvera', 'houverá', 'houveram', 'houvéramos', 'houverão', 'houverei', 'houverem', 'houveremos', 'houveria', 'houveriam', 'houveríamos', 'houvermos', 'houvesse', 'houvessem', 'houvéssemos', 'isso', 'isto', 'já', 'la', 'lá', 'lado', 'lhe', 'lhes', 'lo', 'local', 'logo', 'longe', 'lugar', 'maior', 'maioria', 'mais', 'mal', 'mas', 'máximo', 'me', 'meio', 'menor', 'menos', 'mês', 'meses', 'mesma', 'mesmas', 'mesmo', 'mesmos', 'meu', 'meus', 'mil', 'minha', 'minhas', 'momento', 'muita', 'muitas', 'muito', 'muitos', 'na', 'nada', 'não', 'naquela', 'naquelas', 'naquele', 'naqueles', 'nas', 'nem', 'nenhum', 'nenhuma', 'nessa', 'nessas', 'nesse', 'nesses', 'nesta', 'nestas', 'neste', 'nestes', 'ninguém', 'nível', 'no', 'noite', 'nome', 'nos', 'nós', 'nossa', 'nossas', 'nosso', 'nossos', 'nova', 'novas', 'nove', 'novo', 'novos', 'num', 'numa', 'número', 'nunca', 'o', 'obra', 'obrigada', 'obrigado', 'oitava', 'oitavo', 'oito', 'onde', 'ontem', 'onze', 'os', 'ou', 'outra', 'outras', 'outro', 'outros', 'para', 'parece', 'parte', 'partir', 'paucas', 'pela', 'pelas', 'pelo', 'pelos', 'pequena', 'pequenas', 'pequeno', 'pequenos', 'per', 'perante', 'perto', 'pode', 'pude', 'pôde', 'podem', 'podendo', 'poder', 'poderia', 'poderiam', 'podia', 'podiam', 'põe', 'põem', 'pois', 'ponto', 'pontos', 'por', 'porém', 'porque', 'porquê', 'posição', 'possível', 'possivelmente', 'posso', 'pouca', 'poucas', 'pouco', 'poucos', 'primeira', 'primeiras', 'primeiro', 'primeiros', 'própria', 'próprias', 'próprio', 'próprios', 'próxima', 'próximas', 'próximo', 'próximos', 'pude', 'puderam', 'quais', 'quáis', 'qual', 'quando', 'quanto', 'quantos', 'quarta', 'quarto', 'quatro', 'que', 'quê', 'quem', 'quer', 'quereis', 'querem', 'queremas', 'queres', 'quero', 'questão', 'quinta', 'quinto', 'quinze', 'relação', 'sabe', 'sabem', 'são', 'se', 'segunda', 'segundo', 'sei', 'seis', 'seja', 'sejam', 'sejamos', 'sem', 'sempre', 'sendo', 'ser', 'será', 'serão', 'serei', 'seremos', 'seria', 'seriam', 'seríamos', 'sete', 'sétima', 'sétimo', 'seu', 'seus', 'sexta', 'sexto', 'si', 'sido', 'sim', 'sistema', 'só', 'sob', 'sobre', 'sois', 'somos', 'sou', 'sua', 'suas', 'tal', 'talvez', 'também', 'tampouco', 'tanta', 'tantas', 'tanto', 'tão', 'tarde', 'te', 'tem', 'tém', 'têm', 'temos', 'tendes', 'tendo', 'tenha', 'tenham', 'tenhamos', 'tenho', 'tens', 'ter', 'terá', 'terão', 'terceira', 'terceiro', 'terei', 'teremos', 'teria', 'teriam', 'teríamos', 'teu', 'teus', 'teve', 'ti', 'tido', 'tinha', 'tinham', 'tínhamos', 'tive', 'tivemos', 'tiver', 'tivera', 'tiveram', 'tivéramos', 'tiverem', 'tivermos', 'tivesse', 'tivessem', 'tivéssemos', 'tiveste', 'tivestes', 'toda', 'todas', 'todavia', 'todo', 'todos', 'trabalho', 'três', 'treze', 'tu', 'tua', 'tuas', 'tudo', 'última', 'últimas', 'último', 'últimos', 'um', 'uma', 'umas', 'uns', 'vai', 'vais', 'vão', 'vários', 'vem', 'vêm', 'vendo', 'vens', 'ver', 'vez', 'vezes', 'viagem', 'vindo', 'vinte', 'vir', 'você', 'vocês', 'vos', 'vós', 'vossa', 'vossas', 'vosso', 'vossos', 'zero'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const ron = ['acea', 'aceasta', 'această', 'aceea', 'acei', 'aceia', 'acel', 'acela', 'acele', 'acelea', 'acest', 'acesta', 'aceste', 'acestea', 'aceşti', 'aceştia', 'acolo', 'acord', 'acum', 'ai', 'aia', 'aibă', 'aici', 'al', 'ale', 'alea', 'altceva', 'altcineva', 'am', 'ar', 'are', 'asemenea', 'asta', 'astea', 'astăzi', 'asupra', 'au', 'avea', 'avem', 'aveţi', 'azi', 'aş', 'aşadar', 'aţi', 'bine', 'bucur', 'bună', 'ca', 'care', 'caut', 'ce', 'cel', 'ceva', 'chiar', 'cinci', 'cine', 'cineva', 'contra', 'cu', 'cum', 'cumva', 'curând', 'curînd', 'când', 'cât', 'câte', 'câtva', 'câţi', 'cînd', 'cît', 'cîte', 'cîtva', 'cîţi', 'că', 'căci', 'cărei', 'căror', 'cărui', 'către', 'da', 'dacă', 'dar', 'datorită', 'dată', 'dau', 'de', 'deci', 'deja', 'deoarece', 'departe', 'deşi', 'din', 'dinaintea', 'dintr-', 'dintre', 'doi', 'doilea', 'două', 'drept', 'după', 'dă', 'ea', 'ei', 'el', 'ele', 'eram', 'este', 'eu', 'eşti', 'face', 'fata', 'fi', 'fie', 'fiecare', 'fii', 'fim', 'fiu', 'fiţi', 'frumos', 'fără', 'graţie', 'halbă', 'iar', 'ieri', 'la', 'le', 'li', 'lor', 'lui', 'lângă', 'lîngă', 'mai', 'mea', 'mei', 'mele', 'mereu', 'meu', 'mi', 'mie', 'mine', 'mult', 'multă', 'mulţi', 'mulţumesc', 'mâine', 'mîine', 'mă', 'ne', 'nevoie', 'nici', 'nicăieri', 'nimeni', 'nimeri', 'nimic', 'nişte', 'noastre', 'noastră', 'noi', 'noroc', 'nostru', 'nouă', 'noştri', 'nu', 'opt', 'ori', 'oricare', 'orice', 'oricine', 'oricum', 'oricând', 'oricât', 'oricînd', 'oricît', 'oriunde', 'patra', 'patru', 'patrulea', 'pe', 'pentru', 'peste', 'pic', 'poate', 'pot', 'prea', 'prima', 'primul', 'prin', 'printr-', 'puţin', 'puţina', 'puţină', 'până', 'pînă', 'rog', 'sa', 'sale', 'sau', 'se', 'spate', 'spre', 'sub', 'sunt', 'suntem', 'sunteţi', 'sută', 'sînt', 'sîntem', 'sînteţi', 'să', 'săi', 'său', 'ta', 'tale', 'te', 'timp', 'tine', 'toate', 'toată', 'tot', 'totuşi', 'toţi', 'trei', 'treia', 'treilea', 'tu', 'tăi', 'tău', 'un', 'una', 'unde', 'undeva', 'unei', 'uneia', 'unele', 'uneori', 'unii', 'unor', 'unora', 'unu', 'unui', 'unuia', 'unul', 'vi', 'voastre', 'voastră', 'voi', 'vostru', 'vouă', 'voştri', 'vreme', 'vreo', 'vreun', 'vă', 'zece', 'zero', 'zi', 'zice', 'îi', 'îl', 'îmi', 'împotriva', 'în', 'înainte', 'înaintea', 'încotro', 'încât', 'încît', 'între', 'întrucât', 'întrucît', 'îţi', 'ăla', 'ălea', 'ăsta', 'ăstea', 'ăştia', 'şapte', 'şase', 'şi', 'ştiu', 'ţi', 'ţie'];

/*
Copyright (c) 2011, Polyakov Vladimir, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const rus = ['и', 'в', 'во', 'не', 'что', 'он', 'на', 'я', 'с', 'со', 'как', 'а', 'то', 'все', 'она', 'так', 'его', 'но', 'да', 'ты', 'к', 'у', 'же', 'вы', 'за', 'бы', 'по', 'только', 'ее', 'мне', 'было', 'вот', 'от', 'меня', 'еще', 'нет', 'о', 'из', 'ему', 'теперь', 'когда', 'даже', 'ну', 'ли', 'если', 'уже', 'или', 'ни', 'быть', 'был', 'него', 'до', 'вас', 'нибудь', 'уж', 'вам', 'сказал', 'ведь', 'там', 'потом', 'себя', 'ничего', 'ей', 'может', 'они', 'тут', 'где', 'есть', 'надо', 'ней', 'для', 'мы', 'тебя', 'их', 'чем', 'была', 'сам', 'чтоб', 'без', 'будто', 'чего', 'раз', 'тоже', 'себе', 'под', 'будет', 'ж', 'тогда', 'кто', 'этот', 'того', 'потому', 'этого', 'какой', 'совсем', 'ним', 'этом', 'почти', 'мой', 'тем', 'чтобы', 'нее', 'были', 'куда', 'всех', 'никогда', 'сегодня', 'можно', 'при', 'об', 'другой', 'хоть', 'после', 'над', 'больше', 'тот', 'через', 'эти', 'нас', 'про', 'всего', 'них', 'какая', 'много', 'разве', 'эту', 'моя', 'свою', 'этой', 'перед', 'иногда', 'лучше', 'чуть', 'том', 'нельзя', 'такой', 'им', 'более', 'всегда', 'конечно', 'всю', 'между', 'это', 'лишь'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const slk = ['a', 'aby', 'aj', 'ako', 'aký', 'ale', 'alebo', 'ani', 'avšak', 'ba', 'bez', 'buï', 'cez', 'do', 'ho', 'hoci', 'i', 'ich', 'im', 'ja', 'jeho', 'jej', 'jemu', 'ju', 'k', 'kam', 'kde', 'kedže', 'keï', 'kto', 'ktorý', 'ku', 'lebo', 'ma', 'mi', 'mne', 'mnou', 'mu', 'my', 'mòa', 'môj', 'na', 'nad', 'nami', 'neho', 'nej', 'nemu', 'nich', 'nielen', 'nim', 'no', 'nám', 'nás', 'náš', 'ním', 'o', 'od', 'on', 'ona', 'oni', 'ono', 'ony', 'po', 'pod', 'pre', 'pred', 'pri', 's', 'sa', 'seba', 'sem', 'so', 'svoj', 'taký', 'tam', 'teba', 'tebe', 'tebou', 'tej', 'ten', 'ti', 'tie', 'to', 'toho', 'tomu', 'tou', 'tvoj', 'ty', 'tá', 'tým', 'v', 'vami', 'veï', 'vo', 'vy', 'vám', 'vás', 'váš', 'však', 'z', 'za', 'zo', 'a', 'èi', 'èo', 'èí', 'òom', 'òou', 'òu', 'že'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const slv = ['a', 'ali', 'april', 'avgust', 'b', 'bi', 'bil', 'bila', 'bile', 'bili', 'bilo', 'biti', 'blizu', 'bo', 'bodo', 'bojo', 'bolj', 'bom', 'bomo', 'boste', 'bova', 'boš', 'brez', 'c', 'cel', 'cela', 'celi', 'celo', 'd', 'da', 'daleč', 'dan', 'danes', 'datum', 'december', 'deset', 'deseta', 'deseti', 'deseto', 'devet', 'deveta', 'deveti', 'deveto', 'do', 'dober', 'dobra', 'dobri', 'dobro', 'dokler', 'dol', 'dolg', 'dolga', 'dolgi', 'dovolj', 'drug', 'druga', 'drugi', 'drugo', 'dva', 'dve', 'e', 'eden', 'en', 'ena', 'ene', 'eni', 'enkrat', 'eno', 'etc.', 'f', 'februar', 'g', 'g.', 'ga', 'ga.', 'gor', 'gospa', 'gospod', 'h', 'halo', 'i', 'idr.', 'ii', 'iii', 'in', 'iv', 'ix', 'iz', 'j', 'januar', 'jaz', 'je', 'ji', 'jih', 'jim', 'jo', 'julij', 'junij', 'jutri', 'k', 'kadarkoli', 'kaj', 'kajti', 'kako', 'kakor', 'kamor', 'kamorkoli', 'kar', 'karkoli', 'katerikoli', 'kdaj', 'kdo', 'kdorkoli', 'ker', 'ki', 'kje', 'kjer', 'kjerkoli', 'ko', 'koder', 'koderkoli', 'koga', 'komu', 'kot', 'kratek', 'kratka', 'kratke', 'kratki', 'l', 'lahka', 'lahke', 'lahki', 'lahko', 'le', 'lep', 'lepa', 'lepe', 'lepi', 'lepo', 'leto', 'm', 'maj', 'majhen', 'majhna', 'majhni', 'malce', 'malo', 'manj', 'marec', 'me', 'med', 'medtem', 'mene', 'mesec', 'mi', 'midva', 'midve', 'mnogo', 'moj', 'moja', 'moje', 'mora', 'morajo', 'moram', 'moramo', 'morate', 'moraš', 'morem', 'mu', 'n', 'na', 'nad', 'naj', 'najina', 'najino', 'najmanj', 'naju', 'največ', 'nam', 'narobe', 'nas', 'nato', 'nazaj', 'naš', 'naša', 'naše', 'ne', 'nedavno', 'nedelja', 'nek', 'neka', 'nekaj', 'nekatere', 'nekateri', 'nekatero', 'nekdo', 'neke', 'nekega', 'neki', 'nekje', 'neko', 'nekoga', 'nekoč', 'ni', 'nikamor', 'nikdar', 'nikjer', 'nikoli', 'nič', 'nje', 'njega', 'njegov', 'njegova', 'njegovo', 'njej', 'njemu', 'njen', 'njena', 'njeno', 'nji', 'njih', 'njihov', 'njihova', 'njihovo', 'njiju', 'njim', 'njo', 'njun', 'njuna', 'njuno', 'no', 'nocoj', 'november', 'npr.', 'o', 'ob', 'oba', 'obe', 'oboje', 'od', 'odprt', 'odprta', 'odprti', 'okoli', 'oktober', 'on', 'onadva', 'one', 'oni', 'onidve', 'osem', 'osma', 'osmi', 'osmo', 'oz.', 'p', 'pa', 'pet', 'peta', 'petek', 'peti', 'peto', 'po', 'pod', 'pogosto', 'poleg', 'poln', 'polna', 'polni', 'polno', 'ponavadi', 'ponedeljek', 'ponovno', 'potem', 'povsod', 'pozdravljen', 'pozdravljeni', 'prav', 'prava', 'prave', 'pravi', 'pravo', 'prazen', 'prazna', 'prazno', 'prbl.', 'precej', 'pred', 'prej', 'preko', 'pri', 'pribl.', 'približno', 'primer', 'pripravljen', 'pripravljena', 'pripravljeni', 'proti', 'prva', 'prvi', 'prvo', 'r', 'ravno', 'redko', 'res', 'reč', 's', 'saj', 'sam', 'sama', 'same', 'sami', 'samo', 'se', 'sebe', 'sebi', 'sedaj', 'sedem', 'sedma', 'sedmi', 'sedmo', 'sem', 'september', 'seveda', 'si', 'sicer', 'skoraj', 'skozi', 'slab', 'smo', 'so', 'sobota', 'spet', 'sreda', 'srednja', 'srednji', 'sta', 'ste', 'stran', 'stvar', 'sva', 't', 'ta', 'tak', 'taka', 'take', 'taki', 'tako', 'takoj', 'tam', 'te', 'tebe', 'tebi', 'tega', 'težak', 'težka', 'težki', 'težko', 'ti', 'tista', 'tiste', 'tisti', 'tisto', 'tj.', 'tja', 'to', 'toda', 'torek', 'tretja', 'tretje', 'tretji', 'tri', 'tu', 'tudi', 'tukaj', 'tvoj', 'tvoja', 'tvoje', 'u', 'v', 'vaju', 'vam', 'vas', 'vaš', 'vaša', 'vaše', 've', 'vedno', 'velik', 'velika', 'veliki', 'veliko', 'vendar', 'ves', 'več', 'vi', 'vidva', 'vii', 'viii', 'visok', 'visoka', 'visoke', 'visoki', 'vsa', 'vsaj', 'vsak', 'vsaka', 'vsakdo', 'vsake', 'vsaki', 'vsakomur', 'vse', 'vsega', 'vsi', 'vso', 'včasih', 'včeraj', 'x', 'z', 'za', 'zadaj', 'zadnji', 'zakaj', 'zaprta', 'zaprti', 'zaprto', 'zdaj', 'zelo', 'zunaj', 'č', 'če', 'često', 'četrta', 'četrtek', 'četrti', 'četrto', 'čez', 'čigav', 'š', 'šest', 'šesta', 'šesti', 'šesto', 'štiri', 'ž', 'že'];

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const som = ['oo', 'atabo', 'ay', 'ku', 'waxeey', 'uu', 'lakin', 'si', 'ayuu', 'soo', 'waa', 'ka', 'kasoo', 'kale', 'waxuu', 'ayee', 'ayaa', 'kuu', 'isku', 'ugu', 'jiray', 'dhan', 'dambeestii', 'inuu', 'in', 'jirtay', 'uheestay', 'aad', 'uga', 'hadana', 'timaado', 'timaaday'];

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const sot = ['a', 'le', 'o', 'ba', 'ho', 'oa', 'ea', 'ka', 'hae', 'tselane', 'eaba', 'ke', 'hore', 'ha', 'e', 'ne', 're', 'bona', 'me', 'limo', 'tsa', 'haholo', 'la', 'empa', 'ngoanake', 'se', 'moo', 'm\'e', 'bane', 'mo', 'tse', 'sa', 'li', 'ena', 'bina', 'pina', 'hape'];

/*
Copyright (c) 2011, David Przybilla, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const spa = ['a', 'un', 'el', 'ella', 'y', 'sobre', 'de', 'la', 'que', 'en', 'los', 'del', 'se', 'las', 'por', 'un', 'para', 'con', 'no', 'una', 'su', 'al', 'lo', 'como', 'más', 'pero', 'sus', 'le', 'ya', 'o', 'porque', 'cuando', 'muy', 'sin', 'sobre', 'también', 'me', 'hasta', 'donde', 'quien', 'desde', 'nos', 'durante', 'uno', 'ni', 'contra', 'ese', 'eso', 'mí', 'qué', 'otro', 'él', 'cual', 'poco', 'mi', 'tú', 'te', 'ti', 'sí'];

/*
Copyright (c) 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

// This list is frequency sorted. That means it can be sliced from the bottom
// and be less agressive in excluding stopwords */

const swa = ['na', 'ya', 'wa', 'kwa', 'ni', 'za', 'katika', 'la', 'kuwa', 'kama', 'kwamba', 'cha', 'hiyo', 'lakini', 'yake', 'hata', 'wakati', 'hivyo', 'sasa', 'wake', 'au', 'watu', 'hii', 'zaidi', 'vya', 'huo', 'tu', 'kwenye', 'si', 'pia', 'ili', 'moja', 'kila', 'baada', 'ambao', 'ambayo', 'yao', 'wao', 'kuna', 'hilo', 'kutoka', 'kubwa', 'pamoja', 'bila', 'huu', 'hayo', 'sana', 'ndani', 'mkuu', 'hizo', 'kufanya', 'wengi', 'hadi', 'mmoja', 'hili', 'juu', 'kwanza', 'wetu', 'kuhusu', 'baadhi', 'wote', 'yetu', 'hivi', 'kweli', 'mara', 'wengine', 'nini', 'ndiyo', 'zao', 'kati', 'hao', 'hapa', 'kutokana', 'muda', 'habari', 'ambaye', 'wenye', 'nyingine', 'hakuna', 'tena', 'hatua', 'bado', 'nafasi', 'basi', 'kabisa', 'hicho', 'nje', 'huyo', 'vile', 'yote', 'mkubwa', 'alikuwa', 'zote', 'leo', 'haya', 'huko', 'kutoa', 'mwa', 'kiasi', 'hasa', 'nyingi', 'kabla', 'wale', 'chini', 'gani', 'hapo', 'lazima', 'mwingine', 'bali', 'huku', 'zake', 'ilikuwa', 'tofauti', 'kupata', 'mbalimbali', 'pale', 'kusema', 'badala', 'wazi', 'yeye', 'alisema', 'hawa', 'ndio', 'hizi', 'tayari', 'wala', 'muhimu', 'ile', 'mpya', 'ambazo', 'dhidi', 'kwenda', 'sisi', 'kwani', 'jinsi', 'binafsi', 'kutumia', 'mbili', 'mbali', 'kuu', 'mengine', 'mbele', 'namna', 'mengi', 'upande'];

/*
Creative Commons – Attribution / ShareAlike 3.0 license
http://creativecommons.org/licenses/by-sa/3.0/

List based on frequently used words in subtitles in 2012.

Thanks to
opensubtitles.org
https://invokeit.wordpress.com/frequency-word-lists/#comment-9707
*/

const swe = ['jag', 'det', 'är', 'du', 'inte', 'att', 'en', 'och', 'har', 'vi', 'på', 'i', 'för', 'han', 'vad', 'med', 'mig', 'som', 'här', 'om', 'dig', 'var', 'den', 'så', 'till', 'kan', 'de', 'ni', 'ska', 'ett', 'men', 'av', 'vill', 'nu', 'ja', 'nej', 'bara', 'hon', 'hur', 'min', 'där', 'honom', 'kom', 'din', 'då', 'när', 'ha', 'er', 'ta', 'ut', 'får', 'man', 'vara', 'oss', 'dem', 'eller', 'varför', 'alla', 'från', 'upp', 'igen', 'sa', 'hade', 'allt', 'in', 'sig', 'ingen', 'henne', 'vem', 'mitt', 'nåt', 'blir', 'än', 'bli', 'ju', 'två', 'tar', 'hans', 'ditt', 'mina', 'åt', 'väl', 'också', 'nån', 'låt', 'detta', 'va', 'dina', 'dom', 'blev', 'inga', 'sin', 'just', 'många', 'vart', 'vilken', 'ur', 'ens', 'sitt', 'e', 'jo', 'era', 'deras', 'fem', 'sex', 'denna', 'vilket', 'fyra', 'vårt', 'emot', 'tio', 'ert', 'sju', 'åtta', 'nånting', 'ned', 'ers', 'nio', 'mej'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const tha = ['กล่าว', 'กว่า', 'กัน', 'กับ', 'การ', 'ก็', 'ก่อน', 'ขณะ', 'ขอ', 'ของ', 'ขึ้น', 'คง', 'ครั้ง', 'ความ', 'คือ', 'จะ', 'จัด', 'จาก', 'จึง', 'ช่วง', 'ซึ่ง', 'ดัง', 'ด้วย', 'ด้าน', 'ตั้ง', 'ตั้งแต่', 'ตาม', 'ต่อ', 'ต่าง', 'ต่างๆ', 'ต้อง', 'ถึง', 'ถูก', 'ถ้า', 'ทั้ง', 'ทั้งนี้', 'ทาง', 'ที่', 'ที่สุด', 'ทุก', 'ทํา', 'ทําให้', 'นอกจาก', 'นัก', 'นั้น', 'นี้', 'น่า', 'นํา', 'บาง', 'ผล', 'ผ่าน', 'พบ', 'พร้อม', 'มา', 'มาก', 'มี', 'ยัง', 'รวม', 'ระหว่าง', 'รับ', 'ราย', 'ร่วม', 'ลง', 'วัน', 'ว่า', 'สุด', 'ส่ง', 'ส่วน', 'สําหรับ', 'หนึ่ง', 'หรือ', 'หลัง', 'หลังจาก', 'หลาย', 'หาก', 'อยาก', 'อยู่', 'อย่าง', 'ออก', 'อะไร', 'อาจ', 'อีก', 'เขา', 'เข้า', 'เคย', 'เฉพาะ', 'เช่น', 'เดียว', 'เดียวกัน', 'เนื่องจาก', 'เปิด', 'เปิดเผย', 'เป็น', 'เป็นการ', 'เพราะ', 'เพื่อ', 'เมื่อ', 'เรา', 'เริ่ม', 'เลย', 'เห็น', 'เอง', 'แต่', 'แบบ', 'แรก', 'และ', 'แล้ว', 'แห่ง', 'โดย', 'ใน', 'ให้', 'ได้', 'ไป', 'ไม่', 'ไว้'];

/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const tgl = ['akin', 'aking', 'ako', 'alin', 'am', 'amin', 'aming', 'ang', 'ano', 'anumang', 'apat', 'at', 'atin', 'ating', 'ay', 'bababa', 'bago', 'bakit', 'bawat', 'bilang', 'dahil', 'dalawa', 'dapat', 'din', 'dito', 'doon', 'gagawin', 'gayunman', 'ginagawa', 'ginawa', 'ginawang', 'gumawa', 'gusto', 'habang', 'hanggang', 'hindi', 'huwag', 'iba', 'ibaba', 'ibabaw', 'ibig', 'ikaw', 'ilagay', 'ilalim', 'ilan', 'inyong', 'isa', 'isang', 'itaas', 'ito', 'iyo', 'iyon', 'iyong', 'ka', 'kahit', 'kailangan', 'kailanman', 'kami', 'kanila', 'kanilang', 'kanino', 'kanya', 'kanyang', 'kapag', 'kapwa', 'karamihan', 'katiyakan', 'katulad', 'kaya', 'kaysa', 'ko', 'kong', 'kulang', 'kumuha', 'kung', 'laban', 'lahat', 'lamang', 'likod', 'lima', 'maaari', 'maaaring', 'maging', 'mahusay', 'makita', 'marami', 'marapat', 'masyado', 'may', 'mayroon', 'mga', 'minsan', 'mismo', 'mula', 'muli', 'na', 'nabanggit', 'naging', 'nagkaroon', 'nais', 'nakita', 'namin', 'napaka', 'narito', 'nasaan', 'ng', 'ngayon', 'ni', 'nila', 'nilang', 'nito', 'niya', 'niyang', 'noon', 'o', 'pa', 'paano', 'pababa', 'paggawa', 'pagitan', 'pagkakaroon', 'pagkatapos', 'palabas', 'pamamagitan', 'panahon', 'pangalawa', 'para', 'paraan', 'pareho', 'pataas', 'pero', 'pumunta', 'pumupunta', 'sa', 'saan', 'sabi', 'sabihin', 'sarili', 'sila', 'sino', 'siya', 'tatlo', 'tayo', 'tulad', 'tungkol', 'una', 'walang'];

// Copyright (c) 2017 Peter Graham, contributors. Released under the Apache-2.0 license.

const tur = ['acaba', 'acep', 'adeta', 'altmış', 'altmış', 'altı', 'altı', 'ama', 'ancak', 'arada', 'artık', 'aslında', 'aynen', 'ayrıca', 'az', 'bana', 'bari', 'bazen', 'bazı', 'bazı', 'başka', 'belki', 'ben', 'benden', 'beni', 'benim', 'beri', 'beş', 'beş', 'beş', 'bile', 'bin', 'bir', 'biraz', 'biri', 'birkaç', 'birkez', 'birçok', 'birşey', 'birşeyi', 'birşey', 'birşeyi', 'birşey', 'biz', 'bizden', 'bize', 'bizi', 'bizim', 'bu', 'buna', 'bunda', 'bundan', 'bunlar', 'bunları', 'bunların', 'bunu', 'bunun', 'burada', 'böyle', 'böylece', 'bütün', 'da', 'daha', 'dahi', 'dahil', 'daima', 'dair', 'dayanarak', 'de', 'defa', 'deđil', 'değil', 'diye', 'diđer', 'diğer', 'doksan', 'dokuz', 'dolayı', 'dolayısıyla', 'dört', 'edecek', 'eden', 'ederek', 'edilecek', 'ediliyor', 'edilmesi', 'ediyor', 'elli', 'en', 'etmesi', 'etti', 'ettiği', 'ettiğini', 'eđer', 'eğer', 'fakat', 'gibi', 'göre', 'halbuki', 'halen', 'hangi', 'hani', 'hariç', 'hatta', 'hele', 'hem', 'henüz', 'hep', 'hepsi', 'her', 'herhangi', 'herkes', 'herkesin', 'hiç', 'hiçbir', 'iken', 'iki', 'ila', 'ile', 'ilgili', 'ilk', 'illa', 'ise', 'itibaren', 'itibariyle', 'iyi', 'iyice', 'için', 'işte', 'işte', 'kadar', 'kanımca', 'karşın', 'katrilyon', 'kendi', 'kendilerine', 'kendini', 'kendisi', 'kendisine', 'kendisini', 'kere', 'kez', 'keşke', 'ki', 'kim', 'kimden', 'kime', 'kimi', 'kimse', 'kırk', 'kısaca', 'kırk', 'lakin', 'madem', 'međer', 'milyar', 'milyon', 'mu', 'mü', 'mı', 'mı', 'nasıl', 'nasıl', 'ne', 'neden', 'nedenle', 'nerde', 'nere', 'nerede', 'nereye', 'nitekim', 'niye', 'niçin', 'o', 'olan', 'olarak', 'oldu', 'olduklarını', 'olduğu', 'olduğunu', 'olmadı', 'olmadığı', 'olmak', 'olması', 'olmayan', 'olmaz', 'olsa', 'olsun', 'olup', 'olur', 'olursa', 'oluyor', 'on', 'ona', 'ondan', 'onlar', 'onlardan', 'onlari', 'onların', 'onları', 'onların', 'onu', 'onun', 'otuz', 'oysa', 'pek', 'rağmen', 'sadece', 'sanki', 'sekiz', 'seksen', 'sen', 'senden', 'seni', 'senin', 'siz', 'sizden', 'sizi', 'sizin', 'sonra', 'tarafından', 'trilyon', 'tüm', 'var', 'vardı', 've', 'veya', 'veyahut', 'ya', 'yahut', 'yani', 'yapacak', 'yapmak', 'yaptı', 'yaptıkları', 'yaptığı', 'yaptığını', 'yapılan', 'yapılması', 'yapıyor', 'yedi', 'yerine', 'yetmiş', 'yetmiş', 'yetmiş', 'yine', 'yirmi', 'yoksa', 'yüz', 'zaten', 'çok', 'çünkü', 'öyle', 'üzere', 'üç', 'şey', 'şeyden', 'şeyi', 'şeyler', 'şu', 'şuna', 'şunda', 'şundan', 'şunu', 'şey', 'şeyden', 'şeyi', 'şeyler', 'şu', 'şuna', 'şunda', 'şundan', 'şunları', 'şunu', 'şöyle', 'şayet', 'şimdi', 'şu', 'şöyle'];

/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const ukr = ['авжеж', 'адже', 'але', 'б', 'без', 'був', 'була', 'були', 'було', 'бути', 'більш', 'вам', 'вас', 'весь', 'вздовж', 'ви', 'вниз', 'внизу', 'вона', 'вони', 'воно', 'все', 'всередині', 'всіх', 'від', 'він', 'да', 'давай', 'давати', 'де', 'дещо', 'для', 'до', 'з', 'завжди', 'замість', 'й', 'коли', 'ледве', 'майже', 'ми', 'навколо', 'навіть', 'нам', 'от', 'отже', 'отож', 'поза', 'про', 'під', 'та', 'так', 'такий', 'також', 'те', 'ти', 'тобто', 'тож', 'тощо', 'хоча', 'це', 'цей', 'чи', 'чого', 'що', 'як', 'який', 'якої', 'є', 'із', 'інших', 'їх', 'її'];

/* The MIT License (MIT)

Copyright (c) 2016 Gene Diaz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */

const urd = ['آئی', 'آئے', 'آج', 'آخر', 'آخرکبر', 'آدهی', 'آًب', 'آٹھ', 'آیب', 'اة', 'اخبزت', 'اختتبم', 'ادھر', 'ارد', 'اردگرد', 'ارکبى', 'اش', 'اضتعوبل', 'اضتعوبلات', 'اضطرذ', 'اضکب', 'اضکی', 'اضکے', 'اطراف', 'اغیب', 'افراد', 'الگ', 'اور', 'اوًچب', 'اوًچبئی', 'اوًچی', 'اوًچے', 'اى', 'اً', 'اًذر', 'اًہیں', 'اٹھبًب', 'اپٌب', 'اپٌے', 'اچھب', 'اچھی', 'اچھے', 'اکثر', 'اکٹھب', 'اکٹھی', 'اکٹھے', 'اکیلا', 'اکیلی', 'اکیلے', 'اگرچہ', 'اہن', 'ایطے', 'ایک', 'ب', 'ت', 'تبزٍ', 'تت', 'تر', 'ترتیت', 'تریي', 'تعذاد', 'تن', 'تو', 'توبم', 'توہی', 'توہیں', 'تٌہب', 'تک', 'تھب', 'تھوڑا', 'تھوڑی', 'تھوڑے', 'تھی', 'تھے', 'تیي', 'ثب', 'ثبئیں', 'ثبترتیت', 'ثبری', 'ثبرے', 'ثبعث', 'ثبلا', 'ثبلترتیت', 'ثبہر', 'ثدبئے', 'ثرآں', 'ثراں', 'ثرش', 'ثعذ', 'ثغیر', 'ثلٌذ', 'ثلٌذوثبلا', 'ثلکہ', 'ثي', 'ثٌب', 'ثٌبرہب', 'ثٌبرہی', 'ثٌبرہے', 'ثٌبًب', 'ثٌذ', 'ثٌذکرو', 'ثٌذکرًب', 'ثٌذی', 'ثڑا', 'ثڑوں', 'ثڑی', 'ثڑے', 'ثھر', 'ثھرا', 'ثھراہوا', 'ثھرپور', 'ثھی', 'ثہت', 'ثہتر', 'ثہتری', 'ثہتریي', 'ثیچ', 'ج', 'خب', 'خبرہب', 'خبرہی', 'خبرہے', 'خبهوظ', 'خبًب', 'خبًتب', 'خبًتی', 'خبًتے', 'خبًٌب', 'خت', 'ختن', 'خجکہ', 'خص', 'خططرذ', 'خلذی', 'خو', 'خواى', 'خوًہی', 'خوکہ', 'خٌبة', 'خگہ', 'خگہوں', 'خگہیں', 'خیطب', 'خیطبکہ', 'در', 'درخبت', 'درخہ', 'درخے', 'درزقیقت', 'درضت', 'دش', 'دفعہ', 'دلچطپ', 'دلچطپی', 'دلچطپیبں', 'دو', 'دور', 'دوراى', 'دوضرا', 'دوضروں', 'دوضری', 'دوضرے', 'دوًوں', 'دکھبئیں', 'دکھبتب', 'دکھبتی', 'دکھبتے', 'دکھبو', 'دکھبًب', 'دکھبیب', 'دی', 'دیب', 'دیتب', 'دیتی', 'دیتے', 'دیر', 'دیٌب', 'دیکھو', 'دیکھٌب', 'دیکھی', 'دیکھیں', 'دے', 'ر', 'راضتوں', 'راضتہ', 'راضتے', 'رریعہ', 'رریعے', 'رکي', 'رکھ', 'رکھب', 'رکھتب', 'رکھتبہوں', 'رکھتی', 'رکھتے', 'رکھی', 'رکھے', 'رہب', 'رہی', 'رہے', 'ز', 'زبصل', 'زبضر', 'زبل', 'زبلات', 'زبلیہ', 'زصوں', 'زصہ', 'زصے', 'زقبئق', 'زقیتیں', 'زقیقت', 'زکن', 'زکویہ', 'زیبدٍ', 'صبف', 'صسیر', 'صفر', 'صورت', 'صورتسبل', 'صورتوں', 'صورتیں', 'ض', 'ضبت', 'ضبتھ', 'ضبدٍ', 'ضبرا', 'ضبرے', 'ضبل', 'ضبلوں', 'ضت', 'ضرور', 'ضرورت', 'ضروری', 'ضلطلہ', 'ضوچ', 'ضوچب', 'ضوچتب', 'ضوچتی', 'ضوچتے', 'ضوچو', 'ضوچٌب', 'ضوچی', 'ضوچیں', 'ضکب', 'ضکتب', 'ضکتی', 'ضکتے', 'ضکٌب', 'ضکی', 'ضکے', 'ضیذھب', 'ضیذھی', 'ضیذھے', 'ضیکٌڈ', 'ضے', 'طرف', 'طریق', 'طریقوں', 'طریقہ', 'طریقے', 'طور', 'طورپر', 'ظبہر', 'ع', 'عذد', 'عظین', 'علاقوں', 'علاقہ', 'علاقے', 'علاوٍ', 'عووهی', 'غبیذ', 'غخص', 'غذ', 'غروع', 'غروعبت', 'غے', 'فرد', 'فی', 'ق', 'قجل', 'قجیلہ', 'قطن', 'لئے', 'لا', 'لازهی', 'لو', 'لوجب', 'لوجی', 'لوجے', 'لوسبت', 'لوسہ', 'لوگ', 'لوگوں', 'لڑکپي', 'لگتب', 'لگتی', 'لگتے', 'لگٌب', 'لگی', 'لگیں', 'لگے', 'لی', 'لیب', 'لیٌب', 'لیں', 'لے', 'ه', 'هتعلق', 'هختلف', 'هسترم', 'هسترهہ', 'هسطوش', 'هسیذ', 'هطئلہ', 'هطئلے', 'هطبئل', 'هطتعول', 'هطلق', 'هعلوم', 'هػتول', 'هلا', 'هوکي', 'هوکٌبت', 'هوکٌہ', 'هٌبضت', 'هڑا', 'هڑًب', 'هڑے', 'هکول', 'هگر', 'هہرثبى', 'هیرا', 'هیری', 'هیرے', 'هیں', 'و', 'وار', 'والے', 'وٍ', 'ًئی', 'ًئے', 'ًب', 'ًبپطٌذ', 'ًبگسیر', 'ًطجت', 'ًقطہ', 'ًو', 'ًوخواى', 'ًکبلٌب', 'ًکتہ', 'ًہ', 'ًہیں', 'ًیب', 'ًے', 'ٓ آش', 'ٹھیک', 'پبئے', 'پبش', 'پبًب', 'پبًچ', 'پر', 'پراًب', 'پطٌذ', 'پل', 'پورا', 'پوچھب', 'پوچھتب', 'پوچھتی', 'پوچھتے', 'پوچھو', 'پوچھوں', 'پوچھٌب', 'پوچھیں', 'پچھلا', 'پھر', 'پہلا', 'پہلی', 'پہلےضی', 'پہلےضے', 'پہلےضےہی', 'پیع', 'چبر', 'چبہب', 'چبہٌب', 'چبہے', 'چلا', 'چلو', 'چلیں', 'چلے', 'چکب', 'چکی', 'چکیں', 'چکے', 'چھوٹب', 'چھوٹوں', 'چھوٹی', 'چھوٹے', 'چھہ', 'چیسیں', 'ڈھوًڈا', 'ڈھوًڈلیب', 'ڈھوًڈو', 'ڈھوًڈًب', 'ڈھوًڈی', 'ڈھوًڈیں', 'ک', 'کئی', 'کئے', 'کب', 'کبفی', 'کبم', 'کت', 'کجھی', 'کرا', 'کرتب', 'کرتبہوں', 'کرتی', 'کرتے', 'کرتےہو', 'کررہب', 'کررہی', 'کررہے', 'کرو', 'کرًب', 'کریں', 'کرے', 'کطی', 'کل', 'کن', 'کوئی', 'کوتر', 'کورا', 'کوروں', 'کورٍ', 'کورے', 'کوطي', 'کوى', 'کوًطب', 'کوًطی', 'کوًطے', 'کھولا', 'کھولو', 'کھولٌب', 'کھولی', 'کھولیں', 'کھولے', 'کہ', 'کہب', 'کہتب', 'کہتی', 'کہتے', 'کہو', 'کہوں', 'کہٌب', 'کہی', 'کہیں', 'کہے', 'کی', 'کیب', 'کیطب', 'کیطرف', 'کیطے', 'کیلئے', 'کیوًکہ', 'کیوں', 'کیے', 'کے', 'کےثعذ', 'کےرریعے', 'گئی', 'گئے', 'گب', 'گرد', 'گروٍ', 'گروپ', 'گروہوں', 'گٌتی', 'گی', 'گیب', 'گے', 'ہر', 'ہن', 'ہو', 'ہوئی', 'ہوئے', 'ہوا', 'ہوبرا', 'ہوبری', 'ہوبرے', 'ہوتب', 'ہوتی', 'ہوتے', 'ہورہب', 'ہورہی', 'ہورہے', 'ہوضکتب', 'ہوضکتی', 'ہوضکتے', 'ہوًب', 'ہوًی', 'ہوًے', 'ہوچکب', 'ہوچکی', 'ہوچکے', 'ہوگئی', 'ہوگئے', 'ہوگیب', 'ہوں', 'ہی', 'ہیں', 'ہے', 'ی', 'یقیٌی', 'یہ', 'یہبں'];

/*
Copyright (c) 2011, David Przybilla, Chris Umbel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

const vie = ['bị', 'bởi', 'cả', 'các', 'cái', 'cần', 'càng', 'chỉ', 'chiếc', 'cho', 'chứ', 'chưa', 'chuyện', 'có', 'có thể', 'cứ', 'của', 'cùng', 'cũng', 'đã', 'đang', 'để', 'đến nỗi', 'đều', 'điều', 'do', 'đó', 'được', 'dưới', 'gì', 'khi', 'không', 'là', 'lại', 'lên', 'lúc', 'mà', 'mỗi', 'một cách', 'này', 'nên', 'nếu', 'ngay', 'nhiều', 'như', 'nhưng', 'những', 'nơi', 'nữa', 'phải', 'qua', 'ra', 'rằng', 'rất', 'rồi', 'sau', 'sẽ', 'so', 'sự', 'tại', 'theo', 'thì', 'trên', 'trước', 'từ', 'từng', 'và', 'vẫn', 'vào', 'vậy', 'vì', 'việc', 'với', 'vừa', 'vâng', 'à', 'ừ', 'từ'];

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const yor = ['ó', 'ní', 'ìjàpá', 'ṣe', 'rẹ̀', 'tí', 'àwọn', 'sí', 'ni', 'náà', 'anansi', 'láti', 'kan', 'ti', 'ń', 'lọ', 'o', 'bí', 'padà', 'sì', 'wá', 'wangari', 'lè', 'wà', 'kí', 'púpọ̀', 'odò', 'mi', 'wọ́n', 'pẹ̀lú', 'a', 'ṣùgbọ́n', 'fún', 'jẹ́', 'fẹ́', 'oúnjẹ', 'rí', 'igi', 'kò', 'ilé', 'jù', 'olóńgbò', 'pé', 'é', 'gbogbo', 'iṣu', 'inú', 'bẹ̀rẹ̀', 'jẹ', 'fi', 'dúró', 'alẹ́', 'ọjọ́', 'nítorí', 'nǹkan', 'ọ̀rẹ́', 'àkókò', 'sínú', 'ṣ', 'yìí'];

/* Copyright 2016 Liam Doherty

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This list is frequency sorted. That means it can be sliced from the bottom
and be less agressive in excluding stopwords */

const zul = ['ukuthi', 'kodwa', 'futhi', 'kakhulu', 'wakhe', 'kusho', 'uma', 'wathi', 'umama', 'kanye', 'phansi', 'ngesikhathi', 'lapho', 'u', 'zakhe', 'khona', 'ukuba', 'nje', 'phezulu', 'yakhe', 'kungani', 'wase', 'la', 'mina', 'wami', 'ukuze', 'unonkungu', 'wabona', 'wahamba', 'lakhe', 'yami', 'kanjani', 'kwakukhona', 'ngelinye'];

const defaultStopwords = eng;

const removeStopwords = function (tokens, stopwords) {
  stopwords = stopwords || defaultStopwords;
  if (typeof tokens !== 'object' || typeof stopwords !== 'object') {
    throw new Error('expected Arrays try: removeStopwords(Array[, Array])')
  }
  return tokens.filter(function (value) {
    return stopwords.indexOf(value.toLowerCase()) === -1
  })
};

stopword_cjs._123 = _123;
stopword_cjs.afr = afr;
stopword_cjs.ara = ara;
stopword_cjs.ben = ben;
stopword_cjs.bre = bre;
stopword_cjs.bul = bul;
stopword_cjs.cat = cat;
stopword_cjs.ces = ces;
stopword_cjs.dan = dan;
stopword_cjs.deu = deu;
stopword_cjs.ell = ell;
stopword_cjs.eng = eng;
stopword_cjs.epo = epo;
stopword_cjs.est = est;
stopword_cjs.eus = eus;
stopword_cjs.fas = fas;
stopword_cjs.fin = fin;
stopword_cjs.fra = fra;
stopword_cjs.gle = gle;
stopword_cjs.glg = glg;
stopword_cjs.guj = guj;
stopword_cjs.hau = hau;
stopword_cjs.heb = heb;
stopword_cjs.hin = hin;
stopword_cjs.hrv = hrv;
stopword_cjs.hun = hun;
stopword_cjs.hye = hye;
stopword_cjs.ind = ind;
stopword_cjs.ita = ita;
stopword_cjs.jpn = jpn;
stopword_cjs.kor = kor;
stopword_cjs.kur = kur;
stopword_cjs.lat = lat;
stopword_cjs.lav = lav;
stopword_cjs.lgg = lgg;
stopword_cjs.lggNd = lggNd;
stopword_cjs.lit = lit;
stopword_cjs.mar = mar;
stopword_cjs.msa = msa;
stopword_cjs.mya = mya;
stopword_cjs.nld = nld;
stopword_cjs.nob = nob;
stopword_cjs.panGu = panGu;
stopword_cjs.pol = pol;
stopword_cjs.por = por;
stopword_cjs.porBr = porBr;
stopword_cjs.removeStopwords = removeStopwords;
stopword_cjs.ron = ron;
stopword_cjs.rus = rus;
stopword_cjs.slk = slk;
stopword_cjs.slv = slv;
stopword_cjs.som = som;
stopword_cjs.sot = sot;
stopword_cjs.spa = spa;
stopword_cjs.swa = swa;
stopword_cjs.swe = swe;
stopword_cjs.tgl = tgl;
stopword_cjs.tha = tha;
stopword_cjs.tur = tur;
stopword_cjs.ukr = ukr;
stopword_cjs.urd = urd;
stopword_cjs.vie = vie;
stopword_cjs.yor = yor;
stopword_cjs.zho = zho;
stopword_cjs.zul = zul;

const words = '\\p{Alpha}+[\'’?]\\p{Alpha}+[\'’?]\\p{Alpha}+|\\p{Alpha}+[\'’?]\\p{Alpha}+|\\p{Alpha}+';
const numbers = '\\p{Number}+';
const emojis = '\\p{Emoji_Presentation}+';
const tags = '\\B[#][\\p{Alpha}|\\p{Number}]+';
const usernames = '\\B[@][\\p{Alpha}|\\p{Number}]+';
const email = '[0-9a-zA-Z!#$%&\'*+-/=?^_`{|}~.]+@[0-9a-zA-Z-.]+[a-zA-Z0-9]';

const extract = function (string, options) {
  // Default options object
  const defaultOptions = {
    regex: words,
    toLowercase: false
  };

  // Populate regex and options objects
  options = {
    ...defaultOptions,
    ...options
  };

  // Check that input is a string
  if (typeof string !== 'string') {
    throw new Error('Error: Input is not a string')
  }

  // Join regexes with or between them -> '|'
  if (options.regex.constructor === Array) {
    options.regex = options.regex.join('|');
  }

  // string to lowercase ?
  if (options.toLowercase === true) {
    string = string.toLowerCase();
  }

  // regex constructor
  const regex = new RegExp(options.regex, 'giu');

  // match words (and numbers and emojis)
  let extracted = [];
  extracted = string.match(regex);
  return extracted
};

var wordsNNumbers_esm = /*#__PURE__*/Object.freeze({
	__proto__: null,
	email: email,
	emojis: emojis,
	extract: extract,
	numbers: numbers,
	tags: tags,
	usernames: usernames,
	words: words
});

var require$$2 = /*@__PURE__*/getAugmentedNamespace(wordsNNumbers_esm);

// nGramLengths is of the form [ 9, 10 ]
const ngraminator$1 = function (inputArray, nGramLengths) {
  return nGramLengths.reduce(
    (acc, cur) => [...getNGramsOfSingleLength(inputArray, cur), ...acc], []
  ).sort()
};

// nGramLength is a single integer
const getNGramsOfSingleLength = function (inputArray, nGramLength) {
  return inputArray.slice(nGramLength - 1).map((item, i) => {
    return inputArray.slice(i, i + nGramLength)
  })
};

var ngraminator_esm = /*#__PURE__*/Object.freeze({
	__proto__: null,
	ngraminator: ngraminator$1
});

var require$$3 = /*@__PURE__*/getAugmentedNamespace(ngraminator_esm);

const findKeywords$1 = function (headline, body, cutoff = 0) {
  // remove duplicates in headline
  headline = [...new Set(headline)];

  // keywords array of word objects with word count
  const keywordsCount = [];
  // returned array (cutoff if != 0)
  let keywords = [];

  // loop through headline and body
  for (let i = 0; i < headline.length; i++) {
    for (let j = 0; j < body.length; j++) {
      // headline/body mathching
      if (headline[i] === body[j]) {
        // check if word exists in keywordsCount first and update it
        const existing = findExistingWord(keywordsCount, 'word', headline[i]);
        if (existing > -1) {
          keywordsCount[existing].count++;
        } else {
          // create object and push to array
          const wordObj = { word: headline[i], count: 1 };
          keywordsCount.push(wordObj);
        }
      }
    }
  }

  // Sort on most times used in body
  keywordsCount.sort(compareObjects);
  // loop through keywordsCount and push word to keywords
  for (let l = 0; l < keywordsCount.length; l++) {
    keywords.push(keywordsCount[l].word);
  }
  // slice, if cutoff set
  if (cutoff > 0) {
    keywords = keywords.slice(0, cutoff);
  }
  return keywords
};

const findExistingWord = function (array, attr, value) {
  for (let k = 0; k < array.length; k += 1) {
    if (array[k][attr] === value) {
      return k
    }
  }
  return -1
};

const compareObjects = function (a, b) {
  if (a.count > b.count) {
    return -1
  }
  if (a.count < b.count) {
    return 1
  }
  return 0
};

var src$2 = {
  findKeywords: findKeywords$1
};

var eklemHeadlineParser_cjs = src$2;

const defaultProperties$1 = {
  itemMaxWords: 0,
  returnItemAlways: true,
  truncateStart: '<span class="truncated">',
  truncateEnd: '</span>',
  hitPaddingMin: 5,
  highlightStart: '<span class="hitHighlight">',
  highlightEnd: '</span>',
  divider: ' '
};

const highlight$1 = function (queryArr, itemArr, properties) {
  properties = {
    ...defaultProperties$1,
    ...properties
  };

  const cases = {
    hitFound: false,
    hitCount: 0,
    truncate: false,
    keepAllQueryWords: true,
    toLittlePadding: false
  };

  let hitArr = [];
  let hitTruncatedArr = [];
  let itemHighlighted = '';

  // ######## Add a case for no hits.
  cases.hitFound = itemArr.some(word => queryArr.includes(word));

  if (cases.hitFound) {
    // ### Preparing & preprocessing for hit highlighting ###
    // A: Check if item is to be truncated
    cases.truncate = caseTruncate(itemArr.length, properties);

    // B: Set matched words to highlightable (true) in itemArr
    itemArr = setHighlightables(itemArr, queryArr, cases);

    // C: Joining neighbour highlightable words, removing redundant and setting index value
    //    And add highlight start and end
    itemArr = joinNeighbourHighlightable(itemArr, properties);
    itemArr = addHighlighting(itemArr, properties);

    // D: Defining index on highlightable words and pushing to hitArr
    hitArr = itemArr.filter(itemArr => itemArr.highlightable);

    // E: Check if to keep all query wordsCut off hit array
    cases.keepAllQueryWords = caseKeepAllQueryWords(hitArr, properties);
  }

  // ### The highlighter "switch" ###
  // just return the highlighted itemArray
  if (!cases.hitFound) {
    itemHighlighted = simpleTruncate(itemArr, properties);
    return itemHighlighted

  // just return the highlighted itemArray
  } else if (!cases.truncate) {
    itemHighlighted = getHighlightedString(itemArr, properties.divider);
    return itemHighlighted

  // needs truncating, but keep all query words
  } else if (cases.truncate && cases.keepAllQueryWords) {
    properties.hitPaddingMin = properties.hitPaddingMin + expandPaddingMin(hitArr.length, itemArr.length, properties);
    hitArr = setPaddingStartEnd(hitArr, itemArr.length, properties);
    hitArr = joinOverlappingPadding(hitArr);
    hitTruncatedArr = truncateHitArr(hitArr, itemArr, hitTruncatedArr);
    itemHighlighted = getTruncatedHighlightedString(hitTruncatedArr, properties.truncateStart, properties.truncateEnd, properties.divider);
    return itemHighlighted

  // needs truncadting and have to cut off query wors
  } else if (cases.truncate && !cases.keepAllQueryWords) {
    hitArr = cutOffHitArray(hitArr, properties);
    hitArr = setPaddingStartEnd(hitArr, itemArr.length, properties);
    hitArr = joinOverlappingPadding(hitArr);
    hitTruncatedArr = truncateHitArr(hitArr, itemArr, hitTruncatedArr);
    itemHighlighted = getTruncatedHighlightedString(hitTruncatedArr, properties.truncateStart, properties.truncateEnd, properties.divider);
    return itemHighlighted
  }
};

// ###################################
// # The Functions to make it happen #
// ###################################

// Function: figure out if itemArr needs to be truncated
const caseTruncate = function (itemArrLength, properties, cases) {
  if (itemArrLength > properties.itemMaxWords && properties.itemMaxWords !== 0) {
    return true
  } else {
    return false
  }
};

// Function: just tuncate words, for when there are no hits
const simpleTruncate = function (itemArr, properties) {
  let item = '';
  if (properties.itemMaxWords > 0 && itemArr.length > properties.itemMaxWords) {
    itemArr = itemArr.slice(0, properties.itemMaxWords);
    item = properties.truncateStart + itemArr.join(properties.divider) + properties.truncateEnd;
  } else {
    item = itemArr.join(properties.divider);
  }
  return item
};

// Function: Set highlightable query words and count how many
const setHighlightables = function (itemArr, queryArr, cases) {
  itemArr = itemArr.map(function (itemWord, index) {
    const wordObj = {
      word: itemWord
    };
    if (queryArr.find(function (queryWord) { return itemWord === queryWord })) {
      wordObj.highlightable = true;
      cases.hitCount = cases.hitCount + 1;
    }
    return wordObj
  });
  return itemArr
};

// Function: Joining neighbour highlightable words, removing redundant and setting index value
const joinNeighbourHighlightable = function (itemArr, properties) {
  for (let i = 0; i < itemArr.length; i++) {
    if (i > 0 && itemArr[i].highlightable && itemArr[i - 1].highlightable) {
      // Joining this and previous word
      itemArr[i].word = itemArr[i - 1].word + properties.divider + itemArr[i].word;
      // Removing previous word from array
      itemArr.splice(i - 1, 1);
      // fixing array count
      i = i - 1;
    }
    // setting index on all highlightable
    if (itemArr[i].highlightable) {
      itemArr[i].index = i;
    }
  }
  return itemArr
};

// Function: Add highlighting start and end to highlightable
const addHighlighting = function (itemArr, properties) {
  itemArr = itemArr.map(function (itemWord, index) {
    if (itemWord.highlightable) {
      itemWord.word = properties.highlightStart + itemWord.word + properties.highlightEnd;
    }
    return itemWord
  });
  return itemArr
};

// Just set index for padding start and end for each hit
const setPaddingStartEnd = function (hitArr, itemArrLength, properties) {
  for (let i = 0; i < hitArr.length; i++) {
    // do some padding stuff...
    // console.log('hitArr before ' + i)
    // console.log(hitArr)
    hitArr[i].paddStart = Math.max(hitArr[i].index - properties.hitPaddingMin, 0);
    hitArr[i].paddEnd = Math.min(hitArr[i].index + properties.hitPaddingMin + 1, itemArrLength);
    // console.log('hitArr after ' + i)
    // console.log(hitArr)
  }
  return hitArr
};

// Check if not to keep all query word hits
const caseKeepAllQueryWords = function (hitArr, properties) {
  if (hitArr.length * ((properties.hitPaddingMin * 2) + 1) > properties.itemMaxWords) {
    return false
  } else {
    return true
  }
};

// Cut off hit array
const cutOffHitArray = function (hitArr, properties) {
  // per hit
  const totalWords = hitArr.length * ((properties.hitPaddingMin * 2) + 1);
  const wordsPerHit = (properties.hitPaddingMin * 2) + 1;
  const wordsToMany = totalWords - properties.itemMaxWords;
  //  how many hits to cut off
  const hitsToKeep = hitArr.length - (Math.ceil(wordsToMany / wordsPerHit));
  hitArr = hitArr.slice(0, hitsToKeep);
  return hitArr
};

const expandPaddingMin = function (hitLength, itemLength, properties) {
  return Math.floor((properties.itemMaxWords - ((hitLength * (properties.hitPaddingMin * 2)) + 1)) / hitLength / 2)
};

const joinOverlappingPadding = function (hitArr) {
  for (let i = 0; i < hitArr.length; i++) {
    if (i > 0 && hitArr[i].paddStart <= hitArr[i - 1].paddEnd) {
      // join this and previous
      hitArr[i].paddStart = hitArr[i - 1].paddStart;
      // console.log('Debugging joinOverlappingPadding')
      // console.log(hitArr[i])
      // console.log('hitArr.paddStart : ' + hitArr[i].paddStart)
      // console.log('hitArr.paddEnd   : ' + hitArr[i].paddEnd)
      // Removing previous padding group from index
      hitArr.splice(i - 1, 1);
      // fixing array count
      i = i - 1;
    }
  }
  // console.log(JSON.stringify(hitArr))
  return hitArr
};

// Generate Truncate groups
const truncateHitArr = function (hitArr, itemArr, hitTruncatedArr) {
  for (let i = 0; i < hitArr.length; i++) {
    hitTruncatedArr[i] = itemArr.slice(hitArr[i].paddStart, hitArr[i].paddEnd);
  }
  return hitTruncatedArr
};

// Join words + divider for highlighted full itemArr
const getHighlightedString = function (itemArr, divider) {
  let hitFull = '';
  for (let i = 0; i < itemArr.length; i++) {
    hitFull += itemArr[i].word + divider;
  }
  return hitFull
};

// Create the string with hit highligted, truncated and padded
// Guessing this may need to have it's siblings for not truncated ???
const getTruncatedHighlightedString = function (hitTruncatedArr, truncateStart, truncateEnd, divider) {
  let hitTruncated = [];
  for (let i = 0; i < hitTruncatedArr.length; i++) {
    let singleHitPadded = '';
    for (let j = 0; j < hitTruncatedArr[i].length; j++) {
      singleHitPadded += hitTruncatedArr[i][j].word + divider;
    }
    hitTruncated += truncateStart + singleHitPadded + truncateEnd;
  }
  return hitTruncated
};

var src$1 = highlight$1;

var hitHighlighter_cjs = src$1;

const array = [];
const characterCodeCache = [];

function leven(first, second) {
	if (first === second) {
		return 0;
	}

	const swap = first;

	// Swapping the strings if `a` is longer than `b` so we know which one is the
	// shortest & which one is the longest
	if (first.length > second.length) {
		first = second;
		second = swap;
	}

	let firstLength = first.length;
	let secondLength = second.length;

	// Performing suffix trimming:
	// We can linearly drop suffix common to both strings since they
	// don't increase distance at all
	// Note: `~-` is the bitwise way to perform a `- 1` operation
	while (firstLength > 0 && (first.charCodeAt(~-firstLength) === second.charCodeAt(~-secondLength))) {
		firstLength--;
		secondLength--;
	}

	// Performing prefix trimming
	// We can linearly drop prefix common to both strings since they
	// don't increase distance at all
	let start = 0;

	while (start < firstLength && (first.charCodeAt(start) === second.charCodeAt(start))) {
		start++;
	}

	firstLength -= start;
	secondLength -= start;

	if (firstLength === 0) {
		return secondLength;
	}

	let bCharacterCode;
	let result;
	let temporary;
	let temporary2;
	let index = 0;
	let index2 = 0;

	while (index < firstLength) {
		characterCodeCache[index] = first.charCodeAt(start + index);
		array[index] = ++index;
	}

	while (index2 < secondLength) {
		bCharacterCode = second.charCodeAt(start + index2);
		temporary = index2++;
		result = index2;

		for (index = 0; index < firstLength; index++) {
			temporary2 = bCharacterCode === characterCodeCache[index] ? temporary : temporary + 1;
			temporary = array[index];
			// eslint-disable-next-line no-multi-assign
			result = array[index] = temporary > result ? (temporary2 > result ? result + 1 : temporary2) : (temporary2 > temporary ? temporary + 1 : temporary2);
		}
	}

	return result;
}

const defaultProperties = { distance: 1 };

const levenMatch$1 = function (query, index, properties) {
  properties = {
    ...defaultProperties,
    ...properties
  };
  if (!Array.isArray(query) || !Array.isArray(index)) ; else {
    // .map all query words and .filter on levenshtein matches in all index words
    const matchedQuery = query.map(queryWord => index.filter(indexWord => leven(indexWord, queryWord) <= properties.distance));
    return matchedQuery
  }
};

var levenMatch_esm = /*#__PURE__*/Object.freeze({
	__proto__: null,
	levenMatch: levenMatch$1
});

var require$$6 = /*@__PURE__*/getAugmentedNamespace(levenMatch_esm);

const cheerio = lib$9;
const sw = stopword_cjs;
const wnn = require$$2;
const { ngraminator } = require$$3;
const { findKeywords } = eklemHeadlineParser_cjs;
const highlight = hitHighlighter_cjs;
const { levenMatch } = require$$6;


var src = {
  cheerio,
  wnn,
  sw,
  ngraminator,
  findKeywords,
  highlight,
  levenMatch
};

export { src as default };
