'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var ReactReconciler = require('react-reconciler');
var ssmlDom = require('ssml-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var ReactReconciler__default = /*#__PURE__*/_interopDefaultLegacy(ReactReconciler);

var rootHostContext = {};
var childHostContext = {};
var reconciler = ReactReconciler__default["default"]({
    /* host config for ssml */
    now: Date.now,
    supportsMutation: true,
    isPrimaryRenderer: true,
    noTimeout: -1,
    supportsPersistence: false,
    supportsHydration: false,
    getRootHostContext: function () { return rootHostContext; },
    prepareForCommit: function () { return null; },
    resetAfterCommit: function () { return undefined; },
    getChildHostContext: function () { return childHostContext; },
    shouldSetTextContent: function (type, props) { return typeof props.children === 'string' || typeof props.children === 'number'; },
    createInstance: function (type, props, rootContainerInstance, hostContext, internalInstanceHandle) {
        var domElement = new ssmlDom.Node(type);
        Object.keys(props).forEach(function (propName) {
            var propValue = props[propName];
            if (propName === 'children') {
                if (typeof propValue === 'string' || typeof propValue === 'number') {
                    domElement.textContent = String(propValue);
                }
            }
            else {
                domElement.setAttribute(propName, propValue);
            }
        });
        return domElement;
    },
    createTextInstance: function (text) { return new ssmlDom.TextNode(text); },
    appendChildToContainer: function (container, child) {
        container.appendChild(child);
    },
    appendInitialChild: function (parent, child) {
        parent.appendChild(child);
    },
    appendChild: function (parent, child) {
        parent.appendChild(child);
    },
    finalizeInitialChildren: function (domElement, type, props) { return false; },
    prepareUpdate: function (domElement, oldProps, newProps) {
        return true;
    },
    commitUpdate: function (domElement, updatePayload, type, oldProps, newProps) {
        Object.entries(newProps).forEach(function (_a) {
            var propName = _a[0], propValue = _a[1];
            if (propName === 'children') {
                if (typeof propValue === 'string' || typeof propValue === 'number') {
                    domElement.textContent = propValue;
                }
            }
            else {
                domElement.setAttribute(propName, propValue);
            }
        });
    },
    commitTextUpdate: function (textInstance, oldText, newText) {
        textInstance.text = newText;
    },
    removeChildFromContainer: function (container, child) {
        container.removeChild(child);
    },
    removeChild: function (parentInstance, child) {
        parentInstance.removeChild(child);
    },
    cancelTimeout: function () { return undefined; },
    getPublicInstance: function (instance) { return instance; },
    preparePortalMount: function () { return undefined; },
    scheduleTimeout: function () { return undefined; },
    /** because tree is mutable we implement: */
    clearContainer: function (container) {
        container.children = [];
    },
});
var ReactSSML = {
    /**
     * @param {JSX.Element} element what to render
     * @param {Node} container where to render
     */
    render: function (element, container) {
        var reactiveContainer = reconciler.createContainer(container, 0, null, false, null, "", function (_e) { return void 0; }, null);
        reconciler.updateContainer(element, reactiveContainer, null, null);
        return reactiveContainer;
    },
    renderToString: function (element) {
        // virtual node acts as an invisible container
        var virtualNode = new ssmlDom.Node('');
        this.render(element, virtualNode);
        return virtualNode.toString();
    },
};

exports.ReactSSML = ReactSSML;
exports["default"] = ReactSSML;
exports.reconciler = reconciler;
//# sourceMappingURL=index.js.map
