webpackJsonp([3],{/***/
"./node_modules/jquery/dist/jquery.js":/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/***/
function(e,t,n){var r,i;/*!
 * jQuery JavaScript Library v3.2.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2017-03-20T18:59Z
 */
!function(t,n){"use strict";"object"==typeof e&&"object"==typeof e.exports?
// For CommonJS and CommonJS-like environments where a proper `window`
// is present, execute the factory and get jQuery.
// For environments that do not have a `window` with a `document`
// (such as Node.js), expose a factory as module.exports.
// This accentuates the need for the creation of a real `window`.
// e.g. var jQuery = require("jquery")(window);
// See ticket #14549 for more info.
e.exports=t.document?n(t,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return n(e)}:n(t)}("undefined"!=typeof window?window:this,function(n,o){
// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";function a(e,t){t=t||ae;var n=t.createElement("script");n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}function s(e){
// Support: real iOS 8.2 only (not reproducible in simulator)
// `in` check used to prevent JIT error (gh-2145)
// hasOwn isn't used here due to false negatives
// regarding Nodelist length in IE
var t=!!e&&"length"in e&&e.length,n=ye.type(e);return"function"!==n&&!ye.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function u(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}
// Implement the identical functionality for filter and not
function l(e,t,n){
// Single element
// Arraylike of elements (jQuery, arguments, Array)
// Simple selector that can be filtered directly, removing non-Elements
// Complex selector, compare the two sets, removing non-Elements
return ye.isFunction(t)?ye.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?ye.grep(e,function(e){return e===t!==n}):"string"!=typeof t?ye.grep(e,function(e){return fe.call(t,e)>-1!==n}):je.test(t)?ye.filter(t,e,n):(t=ye.filter(t,e),ye.grep(e,function(e){return fe.call(t,e)>-1!==n&&1===e.nodeType}))}function c(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}
// Convert String-formatted options into Object-formatted ones
function f(e){var t={};return ye.each(e.match(He)||[],function(e,n){t[n]=!0}),t}function p(e){return e}function d(e){throw e}function h(e,t,n,r){var i;try{
// Check for promise aspect first to privilege synchronous behavior
e&&ye.isFunction(i=e.promise)?i.call(e).done(t).fail(n):e&&ye.isFunction(i=e.then)?i.call(e,t,n):
// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
// * false: [ value ].slice( 0 ) => resolve( value )
// * true: [ value ].slice( 1 ) => resolve()
t.apply(void 0,[e].slice(r))}catch(e){
// Support: Android 4.0 only
// Strict mode functions invoked without .call/.apply get global-object context
n.apply(void 0,[e])}}
// The ready event handler and self cleanup method
function g(){ae.removeEventListener("DOMContentLoaded",g),n.removeEventListener("load",g),ye.ready()}function v(){this.expando=ye.expando+v.uid++}function m(e){
// Only convert to a number if it doesn't change the string
return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:We.test(e)?JSON.parse(e):e)}function y(e,t,n){var r;
// If nothing was found internally, try to fetch any
// data from the HTML5 data-* attribute
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace($e,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=m(n)}catch(e){}
// Make sure we set the data so it isn't changed later
Ie.set(e,t,n)}else n=void 0;return n}function x(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return ye.css(e,t,"")},u=s(),l=n&&n[3]||(ye.cssNumber[t]?"":"px"),
// Starting value computation is required for potential unit mismatches
c=(ye.cssNumber[t]||"px"!==l&&+u)&&_e.exec(ye.css(e,t));if(c&&c[3]!==l){
// Trust units reported by jQuery.css
l=l||c[3],
// Make sure we update the tween properties later on
n=n||[],
// Iteratively approximate from a nonzero starting point
c=+u||1;do{
// If previous iteration zeroed out, double until we get *something*.
// Use string for doubling so we don't accidentally see scale as unchanged below
o=o||".5",
// Adjust and apply
c/=o,ye.style(e,t,c+l)}while(o!==(o=s()/u)&&1!==o&&--a)}
// Apply relative offset (+=/-=) if specified
return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function b(e){var t,n=e.ownerDocument,r=e.nodeName,i=Ve[r];return i||(t=n.body.appendChild(n.createElement(r)),i=ye.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),Ve[r]=i,i)}function w(e,t){
// Determine new display value for elements that need to change
for(var n,r,i=[],o=0,a=e.length;o<a;o++)r=e[o],r.style&&(n=r.style.display,t?(
// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
// check is required in this first loop unless we have a nonempty display value (either
// inline or about-to-be-restored)
"none"===n&&(i[o]=Me.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&Xe(r)&&(i[o]=b(r))):"none"!==n&&(i[o]="none",
// Remember what we're overwriting
Me.set(r,"display",n)));
// Set the display of the elements in a second loop to avoid constant reflow
for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}function T(e,t){
// Support: IE <=9 - 11 only
// Use typeof to avoid zero-argument method invocation on host objects (#15151)
var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&u(e,t)?ye.merge([e],n):n}
// Mark scripts as having already been evaluated
function C(e,t){for(var n=0,r=e.length;n<r;n++)Me.set(e[n],"globalEval",!t||Me.get(t[n],"globalEval"))}function E(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)
// Add nodes directly
if("object"===ye.type(o))
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ye.merge(p,o.nodeType?[o]:o);else if(Ke.test(o)){for(a=a||f.appendChild(t.createElement("div")),
// Deserialize a standard representation
s=(Ye.exec(o)||["",""])[1].toLowerCase(),u=Je[s]||Je._default,a.innerHTML=u[1]+ye.htmlPrefilter(o)+u[2],
// Descend through wrappers to the right content
c=u[0];c--;)a=a.lastChild;
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ye.merge(p,a.childNodes),
// Remember the top-level container
a=f.firstChild,
// Ensure the created nodes are orphaned (#12392)
a.textContent=""}else p.push(t.createTextNode(o));for(
// Remove wrapper from fragment
f.textContent="",d=0;o=p[d++];)
// Skip elements already in the context collection (trac-4087)
if(r&&ye.inArray(o,r)>-1)i&&i.push(o);else
// Capture executables
if(l=ye.contains(o.ownerDocument,o),
// Append to fragment
a=T(f.appendChild(o),"script"),
// Preserve script evaluation history
l&&C(a),n)for(c=0;o=a[c++];)Qe.test(o.type||"")&&n.push(o);return f}function k(){return!0}function S(){return!1}
// Support: IE <=9 only
// See #13393 for more info
function N(){try{return ae.activeElement}catch(e){}}function j(e,t,n,r,i,o){var a,s;
// Types can be a map of types/handlers
if("object"==typeof t){
// ( types-Object, selector, data )
"string"!=typeof n&&(
// ( types-Object, data )
r=r||n,n=void 0);for(s in t)j(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(
// ( types, fn )
i=n,r=n=void 0):null==i&&("string"==typeof n?(
// ( types, selector, fn )
i=r,r=void 0):(
// ( types, data, fn )
i=r,r=n,n=void 0)),!1===i)i=S;else if(!i)return e;
// Use same guid so caller can remove using origFn
return 1===o&&(a=i,i=function(e){
// Can use an empty set, since event contains the info
return ye().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=ye.guid++)),e.each(function(){ye.event.add(this,t,i,r,n)})}
// Prefer a tbody over its parent table for containing new rows
function D(e,t){return u(e,"table")&&u(11!==t.nodeType?t:t.firstChild,"tr")?ye(">tbody",e)[0]||e:e}
// Replace/restore the type attribute of script elements for safe DOM manipulation
function A(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function q(e){var t=at.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function L(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){
// 1. Copy private data: events, handlers, etc.
if(Me.hasData(e)&&(o=Me.access(e),a=Me.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)ye.event.add(t,i,l[i][n])}
// 2. Copy user data
Ie.hasData(e)&&(s=Ie.access(e),u=ye.extend({},s),Ie.set(t,u))}}
// Fix IE bugs, see support tests
function H(e,t){var n=t.nodeName.toLowerCase();
// Fails to persist the checked state of a cloned checkbox or radio button.
"input"===n&&Ge.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function F(e,t,n,r){
// Flatten any nested arrays
t=le.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,h=t[0],g=ye.isFunction(h);
// We can't cloneNode fragments that contain checked, in WebKit
if(g||p>1&&"string"==typeof h&&!me.checkClone&&ot.test(h))return e.each(function(i){var o=e.eq(i);g&&(t[0]=h.call(this,i,o.html())),F(o,t,n,r)});if(p&&(i=E(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){
// Use the original fragment for the last item
// instead of the first because it can end up
// being emptied incorrectly in certain situations (#8070).
for(s=ye.map(T(i,"script"),A),u=s.length;f<p;f++)l=i,f!==d&&(l=ye.clone(l,!0,!0),
// Keep references to cloned scripts for later restoration
u&&
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
ye.merge(s,T(l,"script"))),n.call(e[f],l,f);if(u)
// Evaluate executable scripts on first document insertion
for(c=s[s.length-1].ownerDocument,
// Reenable scripts
ye.map(s,q),f=0;f<u;f++)l=s[f],Qe.test(l.type||"")&&!Me.access(l,"globalEval")&&ye.contains(c,l)&&(l.src?
// Optional AJAX dependency, but won't run scripts if not present
ye._evalUrl&&ye._evalUrl(l.src):a(l.textContent.replace(st,""),c))}return e}function O(e,t,n){for(var r,i=t?ye.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||ye.cleanData(T(r)),r.parentNode&&(n&&ye.contains(r.ownerDocument,r)&&C(T(r,"script")),r.parentNode.removeChild(r));return e}function P(e,t,n){var r,i,o,a,
// Support: Firefox 51+
// Retrieving style before computed somehow
// fixes an issue with getting wrong values
// on detached elements
s=e.style;
// getPropertyValue is needed for:
//   .css('filter') (IE 9 only, #12537)
//   .css('--customProperty) (#3144)
// A tribute to the "awesome hack by Dean Edwards"
// Android Browser returns percentage for some values,
// but width seems to be reliably pixels.
// This is against the CSSOM draft spec:
// https://drafts.csswg.org/cssom/#resolved-values
// Remember the original values
// Put in the new values to get a computed value out
// Revert the changed values
// Support: IE <=9 - 11 only
// IE returns zIndex value as an integer.
return n=n||ct(e),n&&(a=n.getPropertyValue(t)||n[t],""!==a||ye.contains(e.ownerDocument,e)||(a=ye.style(e,t)),!me.pixelMarginRight()&&lt.test(a)&&ut.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function R(e,t){
// Define the hook, we'll check on the first run if it's really needed.
return{get:function(){
// Hook not needed (or it's not possible to use it due
// to missing dependency), remove it.
return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}
// Return a css property mapped to a potentially vendor prefixed property
function M(e){
// Shortcut for names that are not vendor prefixed
if(e in vt)return e;for(
// Check for vendor prefixed names
var t=e[0].toUpperCase()+e.slice(1),n=gt.length;n--;)if((e=gt[n]+t)in vt)return e}
// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function I(e){var t=ye.cssProps[e];return t||(t=ye.cssProps[e]=M(e)||e),t}function W(e,t,n){
// Any relative (+/-) values have already been
// normalized at this point
var r=_e.exec(t);
// Guard against undefined "subtract", e.g., when used as in cssHooks
return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function $(e,t,n,r,i){var o,a=0;for(
// If we already have the right measurement, avoid augmentation
o=n===(r?"border":"content")?4:"width"===t?1:0;o<4;o+=2)
// Both box models exclude margin, so add it if we want it
"margin"===n&&(a+=ye.css(e,n+ze[o],!0,i)),r?(
// border-box includes padding, so remove it if we want content
"content"===n&&(a-=ye.css(e,"padding"+ze[o],!0,i)),
// At this point, extra isn't border nor margin, so remove border
"margin"!==n&&(a-=ye.css(e,"border"+ze[o]+"Width",!0,i))):(
// At this point, extra isn't content, so add padding
a+=ye.css(e,"padding"+ze[o],!0,i),
// At this point, extra isn't content nor padding, so add border
"padding"!==n&&(a+=ye.css(e,"border"+ze[o]+"Width",!0,i)));return a}function B(e,t,n){
// Start with computed style
var r,i=ct(e),o=P(e,t,i),a="border-box"===ye.css(e,"boxSizing",!1,i);
// Computed unit is not pixels. Stop here and return.
// Computed unit is not pixels. Stop here and return.
// Check for style in case a browser which returns unreliable values
// for getComputedStyle silently falls back to the reliable elem.style
// Fall back to offsetWidth/Height when value is "auto"
// This happens for inline elements with no explicit setting (gh-3571)
// Normalize "", auto, and prepare for extra
return lt.test(o)?o:(r=a&&(me.boxSizingReliable()||o===e.style[t]),"auto"===o&&(o=e["offset"+t[0].toUpperCase()+t.slice(1)]),(o=parseFloat(o)||0)+$(e,t,n||(a?"border":"content"),r,i)+"px")}function _(e,t,n,r,i){return new _.prototype.init(e,t,n,r,i)}function z(){yt&&(!1===ae.hidden&&n.requestAnimationFrame?n.requestAnimationFrame(z):n.setTimeout(z,ye.fx.interval),ye.fx.tick())}
// Animations created synchronously will run synchronously
function X(){return n.setTimeout(function(){mt=void 0}),mt=ye.now()}
// Generate parameters to create a standard animation
function U(e,t){var n,r=0,i={height:e};for(
// If we include width, step value is 1 to do all cssExpand values,
// otherwise step value is 2 to skip over Left and Right
t=t?1:0;r<4;r+=2-t)n=ze[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function V(e,t,n){for(var r,i=(Q.tweeners[t]||[]).concat(Q.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))
// We're done with this property
return r}function G(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&Xe(e),v=Me.get(e,"fxshow");
// Queue-skipping animations hijack the fx hooks
n.queue||(a=ye._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){
// Ensure the complete handler is called before this completes
p.always(function(){a.unqueued--,ye.queue(e,"fx").length||a.empty.fire()})}));
// Detect show/hide animations
for(r in t)if(i=t[r],xt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){
// Pretend to be hidden if this is a "show" and
// there is still data from a stopped show/hide
if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||ye.style(e,r)}if((
// Bail out if this is a no-op like .hide().hide()
u=!ye.isEmptyObject(t))||!ye.isEmptyObject(d)){
// Restrict "overflow" and "display" styles during box animations
f&&1===e.nodeType&&(
// Support: IE <=9 - 11, Edge 12 - 13
// Record all 3 overflow attributes because IE does not infer the shorthand
// from identically-valued overflowX and overflowY
n.overflow=[h.overflow,h.overflowX,h.overflowY],
// Identify a display type, preferring old show/hide data over the CSS cascade
l=v&&v.display,null==l&&(l=Me.get(e,"display")),c=ye.css(e,"display"),"none"===c&&(l?c=l:(
// Get nonempty value(s) by temporarily forcing visibility
w([e],!0),l=e.style.display||l,c=ye.css(e,"display"),w([e]))),
// Animate inline elements as inline-block
("inline"===c||"inline-block"===c&&null!=l)&&"none"===ye.css(e,"float")&&(
// Restore the original display value at the end of pure show/hide animations
u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),
// Implement show/hide animations
u=!1;for(r in d)
// General show/hide setup for this element animation
u||(v?"hidden"in v&&(g=v.hidden):v=Me.access(e,"fxshow",{display:l}),
// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
o&&(v.hidden=!g),
// Show elements before animating them
g&&w([e],!0),/* eslint-disable no-loop-func */
p.done(function(){/* eslint-enable no-loop-func */
// The final step of a "hide" animation is actually hiding the element
g||w([e]),Me.remove(e,"fxshow");for(r in d)ye.style(e,r,d[r])})),
// Per-property setup
u=V(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}}function Y(e,t){var n,r,i,o,a;
// camelCase, specialEasing and expand cssHook pass
for(n in e)if(r=ye.camelCase(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=ye.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];
// Not quite $.extend, this won't overwrite existing keys.
// Reusing 'index' because we have the correct "name"
for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function Q(e,t,n){var r,i,o=0,a=Q.prefilters.length,s=ye.Deferred().always(function(){
// Don't match elem in the :animated selector
delete u.elem}),u=function(){if(i)return!1;for(var t=mt||X(),n=Math.max(0,l.startTime+l.duration-t),
// Support: Android 2.3 only
// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);
// If there's more to do, yield
// If there's more to do, yield
// If this was an empty animation, synthesize a final progress notification
// Resolve the animation and report its conclusion
return s.notifyWith(e,[l,o,n]),o<1&&u?n:(u||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:ye.extend({},t),opts:ye.extend(!0,{specialEasing:{},easing:ye.easing._default},n),originalProperties:t,originalOptions:n,startTime:mt||X(),duration:n.duration,tweens:[],createTween:function(t,n){var r=ye.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,
// If we are going to the end, we want to run all the tweens
// otherwise we skip this part
r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);
// Resolve when we played the last frame; otherwise, reject
return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(Y(c,l.opts.specialEasing);o<a;o++)if(r=Q.prefilters[o].call(l,e,c,l.opts))return ye.isFunction(r.stop)&&(ye._queueHooks(l.elem,l.opts.queue).stop=ye.proxy(r.stop,r)),r;
// Attach callbacks from options
return ye.map(c,V,l),ye.isFunction(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),ye.fx.timer(ye.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}
// Strip and collapse whitespace according to HTML spec
// https://html.spec.whatwg.org/multipage/infrastructure.html#strip-and-collapse-whitespace
function J(e){return(e.match(He)||[]).join(" ")}function K(e){return e.getAttribute&&e.getAttribute("class")||""}function Z(e,t,n,r){var i;if(Array.isArray(t))
// Serialize array item.
ye.each(t,function(t,i){n||At.test(e)?
// Treat each array item as a scalar.
r(e,i):
// Item is non-scalar (array or object), encode its numeric index.
Z(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==ye.type(t))
// Serialize scalar item.
r(e,t);else
// Serialize object item.
for(i in t)Z(e+"["+i+"]",t[i],n,r)}
// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function ee(e){
// dataTypeExpression is optional and defaults to "*"
return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(He)||[];if(ye.isFunction(n))
// For each dataType in the dataTypeExpression
for(;r=o[i++];)
// Prepend if requested
"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}
// Base inspection function for prefilters and transports
function te(e,t,n,r){function i(s){var u;return o[s]=!0,ye.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===Bt;return i(t.dataTypes[0])||!o["*"]&&i("*")}
// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ne(e,t){var n,r,i=ye.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&ye.extend(!0,e,r),e}/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function re(e,t,n){
// Remove auto dataType and get content-type in the process
for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));
// Check if we're dealing with a known content-type
if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}
// Check to see if we have a response for the expected dataType
if(u[0]in n)o=u[0];else{
// Try convertible dataTypes
for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}
// Or just use first one
o=o||a}
// If we found a dataType
// We add the dataType to the list if needed
// and return the corresponding response
if(o)return o!==u[0]&&u.unshift(o),n[o]}/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ie(e,t,n,r){var i,o,a,s,u,l={},
// Work with a copy of dataTypes in case we need to modify it for conversion
c=e.dataTypes.slice();
// Create converters map with lowercased keys
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];
// Convert to each sequential dataType
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),
// Apply the dataFilter if provided
!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())
// There's only work to do if current dataType is non-auto
if("*"===o)o=u;else if("*"!==u&&u!==o){
// If none found, seek a pair
if(!(
// Seek a direct converter
a=l[u+" "+o]||l["* "+o]))for(i in l)if(
// If conv2 outputs current
s=i.split(" "),s[1]===o&&(
// If prev can be converted to accepted input
a=l[u+" "+s[0]]||l["* "+s[0]])){
// Condense equivalence converters
!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}
// Apply converter (if not an equivalence)
if(!0!==a)
// Unless errors are allowed to bubble, catch and return them
if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}var oe=[],ae=n.document,se=Object.getPrototypeOf,ue=oe.slice,le=oe.concat,ce=oe.push,fe=oe.indexOf,pe={},de=pe.toString,he=pe.hasOwnProperty,ge=he.toString,ve=ge.call(Object),me={},
// Define a local copy of jQuery
ye=function(e,t){
// The jQuery object is actually just the init constructor 'enhanced'
// Need init if jQuery is called (just allow error to be thrown if not included)
return new ye.fn.init(e,t)},
// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
xe=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
// Matches dashed string for camelizing
be=/^-ms-/,we=/-([a-z])/g,
// Used by jQuery.camelCase as callback to replace()
Te=function(e,t){return t.toUpperCase()};ye.fn=ye.prototype={
// The current version of jQuery being used
jquery:"3.2.1",constructor:ye,
// The default length of a jQuery object is 0
length:0,toArray:function(){return ue.call(this)},
// Get the Nth element in the matched element set OR
// Get the whole matched element set as a clean array
get:function(e){
// Return all the elements in a clean array
// Return all the elements in a clean array
return null==e?ue.call(this):e<0?this[e+this.length]:this[e]},
// Take an array of elements and push it onto the stack
// (returning the new matched element set)
pushStack:function(e){
// Build a new jQuery matched element set
var t=ye.merge(this.constructor(),e);
// Return the newly-formed element set
// Add the old object onto the stack (as a reference)
return t.prevObject=this,t},
// Execute a callback for every element in the matched set.
each:function(e){return ye.each(this,e)},map:function(e){return this.pushStack(ye.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(ue.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},
// For internal use only.
// Behaves like an Array's method, not like a jQuery method.
push:ce,sort:oe.sort,splice:oe.splice},ye.extend=ye.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for(
// Handle a deep copy situation
"boolean"==typeof a&&(l=a,
// Skip the boolean and the target
a=arguments[s]||{},s++),
// Handle case when target is a string or something (possible in deep copy)
"object"==typeof a||ye.isFunction(a)||(a={}),
// Extend jQuery itself if only one argument is passed
s===u&&(a=this,s--);s<u;s++)
// Only deal with non-null/undefined values
if(null!=(e=arguments[s]))
// Extend the base object
for(t in e)n=a[t],r=e[t],
// Prevent never-ending loop
a!==r&&(
// Recurse if we're merging plain objects or arrays
l&&r&&(ye.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&ye.isPlainObject(n)?n:{},
// Never move original objects, clone them
a[t]=ye.extend(l,o,r)):void 0!==r&&(a[t]=r));
// Return the modified object
return a},ye.extend({
// Unique for each copy of jQuery on the page
expando:"jQuery"+("3.2.1"+Math.random()).replace(/\D/g,""),
// Assume jQuery is ready without the ready module
isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===ye.type(e)},isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){
// As of jQuery 3.0, isNumeric is limited to
// strings and numbers (primitives or objects)
// that can be coerced to finite numbers (gh-2662)
var t=ye.type(e);
// parseFloat NaNs numeric-cast false positives ("")
// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
// subtraction forces infinities to NaN
return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n;
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Detect obvious negatives
// Use toString instead of jQuery.type to catch host objects
// Objects with no prototype (e.g., `Object.create( null )`) are plain
// Objects with prototype are plain iff they were constructed by a global Object function
return!(!e||"[object Object]"!==de.call(e))&&(!(t=se(e))||"function"==typeof(n=he.call(t,"constructor")&&t.constructor)&&ge.call(n)===ve)},isEmptyObject:function(e){/* eslint-disable no-unused-vars */
// See https://github.com/eslint/eslint/issues/6125
var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?pe[de.call(e)]||"object":typeof e},
// Evaluates a script in a global context
globalEval:function(e){a(e)},
// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 13
// Microsoft forgot to hump their vendor prefix (#9572)
camelCase:function(e){return e.replace(be,"ms-").replace(we,Te)},each:function(e,t){var n,r=0;if(s(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},
// Support: Android <=4.0 only
trim:function(e){return null==e?"":(e+"").replace(xe,"")},
// results is for internal usage only
makeArray:function(e,t){var n=t||[];return null!=e&&(s(Object(e))?ye.merge(n,"string"==typeof e?[e]:e):ce.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:fe.call(t,e,n)},
// Support: Android <=4.0 only, PhantomJS 1 only
// push.apply(_, arraylike) throws on ancient WebKit
merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){
// Go through the array, only saving the items
// that pass the validator function
for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},
// arg is for internal usage only
map:function(e,t,n){var r,i,o=0,a=[];
// Go through the array, translating each of the items to their new values
if(s(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);
// Flatten any nested arrays
return le.apply([],a)},
// A global GUID counter for objects
guid:1,
// Bind a function to a context, optionally partially applying any
// arguments.
proxy:function(e,t){var n,r,i;
// Quick check to determine if target is callable, in the spec
// this throws a TypeError, but we will just return undefined.
if("string"==typeof t&&(n=e[t],t=e,e=n),ye.isFunction(e))
// Simulated bind
// Set the guid of unique handler to the same of original handler, so it can be removed
return r=ue.call(arguments,2),i=function(){return e.apply(t||this,r.concat(ue.call(arguments)))},i.guid=e.guid=e.guid||ye.guid++,i},now:Date.now,
// jQuery.support is not used in Core but other projects attach their
// properties to it so it needs to exist.
support:me}),"function"==typeof Symbol&&(ye.fn[Symbol.iterator]=oe[Symbol.iterator]),
// Populate the class2type map
ye.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){pe["[object "+t+"]"]=t.toLowerCase()});var Ce=/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
function(e){function t(e,t,n,r){var i,o,a,s,u,c,p,d=t&&t.ownerDocument,
// nodeType defaults to 9, since context defaults to document
h=t?t.nodeType:9;
// Return early from calls with invalid selector or context
if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;
// Try to shortcut find operations (as opposed to filters) in HTML documents
if(!r&&((t?t.ownerDocument||t:I)!==q&&A(t),t=t||q,H)){
// If the selector is sufficiently simple, try using a "get*By*" DOM method
// (excepting DocumentFragment context, where the methods don't exist)
if(11!==h&&(u=ge.exec(e)))
// ID selector
if(i=u[1]){
// Document context
if(9===h){if(!(a=t.getElementById(i)))return n;
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(a.id===i)return n.push(a),n}else
// Support: IE, Opera, Webkit
// TODO: identify versions
// getElementById can match elements by name instead of ID
if(d&&(a=d.getElementById(i))&&R(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return Q.apply(n,t.getElementsByTagName(e)),n;if((i=u[3])&&b.getElementsByClassName&&t.getElementsByClassName)return Q.apply(n,t.getElementsByClassName(i)),n}
// Take advantage of querySelectorAll
if(b.qsa&&!z[e+" "]&&(!F||!F.test(e))){if(1!==h)d=t,p=e;else if("object"!==t.nodeName.toLowerCase()){for(
// Capture the context ID, setting it first if necessary
(s=t.getAttribute("id"))?s=s.replace(xe,be):t.setAttribute("id",s=M),
// Prefix every selector in the list
c=E(e),o=c.length;o--;)c[o]="#"+s+" "+f(c[o]);p=c.join(","),
// Expand context for sibling selectors
d=ve.test(e)&&l(t.parentNode)||t}if(p)try{return Q.apply(n,d.querySelectorAll(p)),n}catch(e){}finally{s===M&&t.removeAttribute("id")}}}
// All others
return S(e.replace(oe,"$1"),t,n,r)}/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function n(){function e(n,r){
// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
// Only keep the most recent entries
return t.push(n+" ")>w.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function r(e){return e[M]=!0,e}/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function i(e){var t=q.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{
// Remove from its parent by default
t.parentNode&&t.parentNode.removeChild(t),
// release memory in IE
t=null}}/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function o(e,t){for(var n=e.split("|"),r=n.length;r--;)w.attrHandle[n[r]]=t}/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;
// Use IE sourceIndex if available on both nodes
if(r)return r;
// Check if b follows a
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function s(e){
// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
return function(t){
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Only certain elements can match :enabled or :disabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
// Check for inherited disabledness on relevant non-disabled elements:
// * listed form-associated elements in a disabled fieldset
//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
// * option elements in a disabled optgroup
//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
// All such elements have a "form" property.
// Option elements defer to a parent optgroup if present
// Where there is no isDisabled, check manually
/* jshint -W018 */
return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Te(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function u(e){return r(function(t){return t=+t,r(function(n,r){
// Match elements found at the specified indexes
for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function l(e){return e&&void 0!==e.getElementsByTagName&&e}
// Easy API for creating new setFilters
function c(){}function f(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function p(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=$++;
// Check against closest ancestor/preceding element
// Check against all ancestor/preceding elements
return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[W,s];
// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(f=t[M]||(t[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===W&&l[1]===s)
// Assign to newCache so results back-propagate to previous elements
return p[2]=l[2];
// A match means we're done; a fail means we have to keep checking
if(
// Reuse newcache so results back-propagate to previous elements
c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function d(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function h(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function v(e,t,n,i,o,a){return i&&!i[M]&&(i=v(i)),o&&!o[M]&&(o=v(o,a)),r(function(r,a,s,u){var l,c,f,p=[],d=[],v=a.length,
// Get initial elements from seed or context
m=r||h(t||"*",s.nodeType?[s]:s,[]),
// Prefilter to get matcher input, preserving a map for seed-results synchronization
y=!e||!r&&t?m:g(m,p,e,s,u),x=n?
// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
o||(r?e:v||i)?
// ...intermediate processing is necessary
[]:
// ...otherwise use results directly
a:y;
// Apply postFilter
if(
// Find primary matches
n&&n(y,x,s,u),i)for(l=g(x,d),i(l,[],s,u),
// Un-match failing elements by moving them back to matcherIn
c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(y[d[c]]=f));if(r){if(o||e){if(o){for(
// Get the final matcherOut by condensing this intermediate into postFinder contexts
l=[],c=x.length;c--;)(f=x[c])&&
// Restore matcherIn since elem is not yet a final match
l.push(y[c]=f);o(null,x=[],l,u)}for(
// Move matched elements from seed to results to keep them synchronized
c=x.length;c--;)(f=x[c])&&(l=o?K(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else x=g(x===a?x.splice(v,x.length):x),o?o(null,a,x,u):Q.apply(a,x)})}function m(e){for(var t,n,r,i=e.length,o=w.relative[e[0].type],a=o||w.relative[" "],s=o?1:0,
// The foundational matcher ensures that elements are reachable from top-level context(s)
u=p(function(e){return e===t},a,!0),l=p(function(e){return K(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==N)||((t=n).nodeType?u(e,n,r):l(e,n,r));
// Avoid hanging onto element (issue #299)
return t=null,i}];s<i;s++)if(n=w.relative[e[s].type])c=[p(d(c),n)];else{
// Return special upon seeing a positional matcher
if(n=w.filter[e[s].type].apply(null,e[s].matches),n[M]){for(
// Find the next relative operator (if any) for proper handling
r=++s;r<i&&!w.relative[e[r].type];r++);
// If the preceding token was a descendant combinator, insert an implicit any-element `*`
return v(s>1&&d(c),s>1&&f(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(oe,"$1"),n,s<r&&m(e.slice(s,r)),r<i&&m(e=e.slice(r)),r<i&&f(e))}c.push(n)}return d(c)}function y(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,d=0,h="0",v=r&&[],m=[],y=N,
// We must always have either seed elements or outermost context
x=r||o&&w.find.TAG("*",l),
// Use integer dirruns iff this is the outermost matcher
b=W+=null==y?1:Math.random()||.1,T=x.length;
// Add elements passing elementMatchers directly to results
// Support: IE<9, Safari
// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
for(l&&(N=a===q||a||l);h!==T&&null!=(c=x[h]);h++){if(o&&c){for(f=0,a||c.ownerDocument===q||(A(c),s=!H);p=e[f++];)if(p(c,a||q,s)){u.push(c);break}l&&(W=b)}
// Track unmatched elements for set filters
i&&(
// They will have gone through all possible matchers
(c=!p&&c)&&d--,
// Lengthen the array for every element, matched or not
r&&v.push(c))}
// Apply set filters to unmatched elements
// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
// no element matchers and no seed.
// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
// case, which will result in a "00" `matchedCount` that differs from `i` but is also
// numerically zero.
if(
// `i` is now the count of elements visited above, and adding it to `matchedCount`
// makes the latter nonnegative.
d+=h,i&&h!==d){for(f=0;p=n[f++];)p(v,m,a,s);if(r){
// Reintegrate element matches to eliminate the need for sorting
if(d>0)for(;h--;)v[h]||m[h]||(m[h]=G.call(u));
// Discard index placeholder values to get only actual matches
m=g(m)}
// Add matches to results
Q.apply(u,m),
// Seedless set matches succeeding multiple successful matchers stipulate sorting
l&&!r&&m.length>0&&d+n.length>1&&t.uniqueSort(u)}
// Override manipulation of globals by nested matchers
return l&&(W=b,N=y),v};return i?r(a):a}var x,b,w,T,C,E,k,S,N,j,D,
// Local document vars
A,q,L,H,F,O,P,R,
// Instance-specific data
M="sizzle"+1*new Date,I=e.document,W=0,$=0,B=n(),_=n(),z=n(),X=function(e,t){return e===t&&(D=!0),0},
// Instance methods
U={}.hasOwnProperty,V=[],G=V.pop,Y=V.push,Q=V.push,J=V.slice,
// Use a stripped-down indexOf as it's faster than native
// https://jsperf.com/thor-indexof-vs-for/5
K=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},Z="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
// Regular expressions
// http://www.w3.org/TR/css3-selectors/#whitespace
ee="[\\x20\\t\\r\\n\\f]",
// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
te="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
ne="\\["+ee+"*("+te+")(?:"+ee+
// Operator (capture 2)
"*([*^$|!~]?=)"+ee+
// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+te+"))|)"+ee+"*\\]",re=":("+te+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ne+")*)|.*)\\)|)",
// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
ie=new RegExp(ee+"+","g"),oe=new RegExp("^"+ee+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ee+"+$","g"),ae=new RegExp("^"+ee+"*,"+ee+"*"),se=new RegExp("^"+ee+"*([>+~]|"+ee+")"+ee+"*"),ue=new RegExp("="+ee+"*([^\\]'\"]*?)"+ee+"*\\]","g"),le=new RegExp(re),ce=new RegExp("^"+te+"$"),fe={ID:new RegExp("^#("+te+")"),CLASS:new RegExp("^\\.("+te+")"),TAG:new RegExp("^("+te+"|[*])"),ATTR:new RegExp("^"+ne),PSEUDO:new RegExp("^"+re),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ee+"*(even|odd|(([+-]|)(\\d*)n|)"+ee+"*(?:([+-]|)"+ee+"*(\\d+)|))"+ee+"*\\)|)","i"),bool:new RegExp("^(?:"+Z+")$","i"),
// For use in libraries implementing .is()
// We use this for POS matching in `select`
needsContext:new RegExp("^"+ee+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ee+"*((?:-\\d)?\\d*)"+ee+"*\\)|)(?=[^-]|$)","i")},pe=/^(?:input|select|textarea|button)$/i,de=/^h\d$/i,he=/^[^{]+\{\s*\[native \w/,
// Easily-parseable/retrievable ID or TAG or CLASS selectors
ge=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ve=/[+~]/,
// CSS escapes
// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
me=new RegExp("\\\\([\\da-f]{1,6}"+ee+"?|("+ee+")|.)","ig"),ye=function(e,t,n){var r="0x"+t-65536;
// NaN means non-codepoint
// Support: Firefox<24
// Workaround erroneous numeric interpretation of +"0x"
// BMP codepoint
// Supplemental Plane codepoint (surrogate pair)
return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},
// CSS string/identifier serialization
// https://drafts.csswg.org/cssom/#common-serializing-idioms
xe=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,be=function(e,t){
// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},
// Used for iframes
// See setDocument()
// Removing the function wrapper causes a "Permission Denied"
// error in IE
we=function(){A()},Te=p(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});
// Optimize for push.apply( _, NodeList )
try{Q.apply(V=J.call(I.childNodes),I.childNodes),
// Support: Android<4.0
// Detect silently failing push.apply
V[I.childNodes.length].nodeType}catch(e){Q={apply:V.length?
// Leverage slice if possible
function(e,t){Y.apply(e,J.call(t))}:
// Support: IE<9
// Otherwise append directly
function(e,t){
// Can't trust NodeList.length
for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}
// Expose support vars for convenience
b=t.support={},/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
C=t.isXML=function(e){
// documentElement is verified for cases where it doesn't yet exist
// (such as loading iframes in IE - #4833)
var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
A=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:I;
// Return early if doc is invalid or already selected
// Return early if doc is invalid or already selected
// Update global variables
// Support: IE 9-11, Edge
// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
// Support: IE 11, Edge
/* Attributes
	---------------------------------------------------------------------- */
// Support: IE<8
// Verify that getAttribute really returns attributes and not properties
// (excepting IE8 booleans)
/* getElement(s)By*
	---------------------------------------------------------------------- */
// Check if getElementsByTagName("*") returns only elements
// Support: IE<9
// Support: IE<10
// Check if getElementById returns elements by name
// The broken getElementById methods don't pick up programmatically-set names,
// so use a roundabout getElementsByName test
// ID filter and find
// Support: IE 6 - 7 only
// getElementById is not reliable as a find shortcut
// Tag
// Class
/* QSA/matchesSelector
	---------------------------------------------------------------------- */
// QSA and matchesSelector support
// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
// qSa(:focus) reports false when true (Chrome 21)
// We allow this because of a bug in IE8/9 that throws an error
// whenever `document.activeElement` is accessed on an iframe
// So, we allow :focus to pass through QSA all the time to avoid the IE error
// See https://bugs.jquery.com/ticket/13378
// Build QSA regex
// Regex strategy adopted from Diego Perini
/* Contains
	---------------------------------------------------------------------- */
// Element contains another
// Purposefully self-exclusive
// As in, an element does not contain itself
/* Sorting
	---------------------------------------------------------------------- */
// Document order sorting
return r!==q&&9===r.nodeType&&r.documentElement?(q=r,L=q.documentElement,H=!C(q),I!==q&&(n=q.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",we,!1):n.attachEvent&&n.attachEvent("onunload",we)),b.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=i(function(e){return e.appendChild(q.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=he.test(q.getElementsByClassName),b.getById=i(function(e){return L.appendChild(e).id=M,!q.getElementsByName||!q.getElementsByName(M).length}),b.getById?(w.filter.ID=function(e){var t=e.replace(me,ye);return function(e){return e.getAttribute("id")===t}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&H){var n=t.getElementById(e);return n?[n]:[]}}):(w.filter.ID=function(e){var t=e.replace(me,ye);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},w.find.ID=function(e,t){if(void 0!==t.getElementById&&H){var n,r,i,o=t.getElementById(e);if(o){if((
// Verify the id attribute
n=o.getAttributeNode("id"))&&n.value===e)return[o];for(
// Fall back on getElementsByName
i=t.getElementsByName(e),r=0;o=i[r++];)if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),w.find.TAG=b.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,
// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
o=t.getElementsByTagName(e);
// Filter out possible comments
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},w.find.CLASS=b.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&H)return t.getElementsByClassName(e)},O=[],F=[],(b.qsa=he.test(q.querySelectorAll))&&(i(function(e){
// Select is set to empty string on purpose
// This is to test IE's treatment of not explicitly
// setting a boolean content attribute,
// since its presence should be enough
// https://bugs.jquery.com/ticket/12359
L.appendChild(e).innerHTML="<a id='"+M+"'></a><select id='"+M+"-\r\\' msallowcapture=''><option selected=''></option></select>",
// Support: IE8, Opera 11-12.16
// Nothing should be selected when empty strings follow ^= or $= or *=
// The test attribute must be unknown in Opera but "safe" for WinRT
// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
e.querySelectorAll("[msallowcapture^='']").length&&F.push("[*^$]="+ee+"*(?:''|\"\")"),
// Support: IE8
// Boolean attributes and "value" are not treated correctly
e.querySelectorAll("[selected]").length||F.push("\\["+ee+"*(?:value|"+Z+")"),
// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
e.querySelectorAll("[id~="+M+"-]").length||F.push("~="),
// Webkit/Opera - :checked should return selected option elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
// IE8 throws error here and will not see later tests
e.querySelectorAll(":checked").length||F.push(":checked"),
// Support: Safari 8+, iOS 8+
// https://bugs.webkit.org/show_bug.cgi?id=136851
// In-page `selector#id sibling-combinator selector` fails
e.querySelectorAll("a#"+M+"+*").length||F.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
// Support: Windows 8 Native Apps
// The type and name attributes are restricted during .innerHTML assignment
var t=q.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),
// Support: IE8
// Enforce case-sensitivity of name attribute
e.querySelectorAll("[name=d]").length&&F.push("name"+ee+"*[*^$|!~]?="),
// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
// IE8 throws error here and will not see later tests
2!==e.querySelectorAll(":enabled").length&&F.push(":enabled",":disabled"),
// Support: IE9-11+
// IE's :disabled selector does not pick up the children of disabled fieldsets
L.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&F.push(":enabled",":disabled"),
// Opera 10-11 does not throw on post-comma invalid pseudos
e.querySelectorAll("*,:x"),F.push(",.*:")})),(b.matchesSelector=he.test(P=L.matches||L.webkitMatchesSelector||L.mozMatchesSelector||L.oMatchesSelector||L.msMatchesSelector))&&i(function(e){
// Check to see if it's possible to do matchesSelector
// on a disconnected node (IE 9)
b.disconnectedMatch=P.call(e,"*"),
// This should fail with an exception
// Gecko does not error, returns false instead
P.call(e,"[s!='']:x"),O.push("!=",re)}),F=F.length&&new RegExp(F.join("|")),O=O.length&&new RegExp(O.join("|")),t=he.test(L.compareDocumentPosition),R=t||he.test(L.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},X=t?function(e,t){
// Flag for duplicate removal
if(e===t)return D=!0,0;
// Sort on method existence if only one input has compareDocumentPosition
var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
// Calculate position if both inputs belong to the same document
// Otherwise we know they are disconnected
// Disconnected nodes
// Choose the first element that is related to our preferred document
return n||(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!b.sortDetached&&t.compareDocumentPosition(e)===n?e===q||e.ownerDocument===I&&R(I,e)?-1:t===q||t.ownerDocument===I&&R(I,t)?1:j?K(j,e)-K(j,t):0:4&n?-1:1)}:function(e,t){
// Exit early if the nodes are identical
if(e===t)return D=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t];
// Parentless nodes are either documents or disconnected
if(!i||!o)return e===q?-1:t===q?1:i?-1:o?1:j?K(j,e)-K(j,t):0;if(i===o)return a(e,t);for(
// Otherwise we need full lists of their ancestors for comparison
n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);
// Walk down the tree looking for a discrepancy
for(;s[r]===u[r];)r++;
// Do a sibling check if the nodes have a common ancestor
// Otherwise nodes in our document sort first
return r?a(s[r],u[r]):s[r]===I?-1:u[r]===I?1:0},q):q},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if(
// Set document vars if needed
(e.ownerDocument||e)!==q&&A(e),
// Make sure that attribute selectors are quoted
n=n.replace(ue,"='$1']"),b.matchesSelector&&H&&!z[n+" "]&&(!O||!O.test(n))&&(!F||!F.test(n)))try{var r=P.call(e,n);
// IE 9's matchesSelector returns false on disconnected nodes
if(r||b.disconnectedMatch||
// As well, disconnected nodes are said to be in a document
// fragment in IE 9
e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,q,null,[e]).length>0},t.contains=function(e,t){
// Set document vars if needed
return(e.ownerDocument||e)!==q&&A(e),R(e,t)},t.attr=function(e,t){
// Set document vars if needed
(e.ownerDocument||e)!==q&&A(e);var n=w.attrHandle[t.toLowerCase()],
// Don't get fooled by Object.prototype properties (jQuery #13807)
r=n&&U.call(w.attrHandle,t.toLowerCase())?n(e,t,!H):void 0;return void 0!==r?r:b.attributes||!H?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(xe,be)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(
// Unless we *know* we can detect duplicates, assume their presence
D=!b.detectDuplicates,j=!b.sortStable&&e.slice(0),e.sort(X),D){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}
// Clear input after sorting to release objects
// See https://github.com/jquery/sizzle/pull/225
return j=null,e},/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
T=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){
// Use textContent for elements
// innerText usage removed for consistency of new lines (jQuery #11153)
if("string"==typeof e.textContent)return e.textContent;
// Traverse its children
for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===i||4===i)return e.nodeValue}else
// If no nodeType, this is expected to be an array
for(;t=e[r++];)
// Do not traverse comment nodes
n+=T(t);
// Do not include comment or processing instruction nodes
return n},w=t.selectors={
// Can be adjusted by the user
cacheLength:50,createPseudo:r,match:fe,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){
// Move the given value to match[3] whether quoted or unquoted
return e[1]=e[1].replace(me,ye),e[3]=(e[3]||e[4]||e[5]||"").replace(me,ye),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
// nth-* requires argument
// numeric x and y parameters for Expr.filter.CHILD
// remember that false/true cast respectively to 0/1
return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];
// Accept quoted arguments as-is
// Get excess from tokenize (recursively)
// advance to the next closing parenthesis
// excess is a negative index
return fe.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&le.test(n)&&(t=E(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(me,ye).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=B[e+" "];return t||(t=new RegExp("(^|"+ee+")"+e+"("+ee+"|$)"))&&B(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ie," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;
// Shortcut for :nth-*(n)
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,m=s&&t.nodeName.toLowerCase(),y=!u&&!s,x=!1;if(v){
// :(first|last|only)-(child|of-type)
if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===m:1===p.nodeType)return!1;
// Reverse direction for :only-* (if we haven't yet done so)
h=g="only"===e&&!h&&"nextSibling"}return!0}
// non-xml :nth-child(...) stores cache data on `parent`
if(h=[a?v.firstChild:v.lastChild],a&&y){for(
// Seek `elem` from a previously-cached index
// ...in a gzip-friendly way
p=v,f=p[M]||(p[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===W&&l[1],x=d&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(
// Fallback to seeking `elem` from the start
x=d=0)||h.pop();)
// When found, cache indexes on `parent` and break
if(1===p.nodeType&&++x&&p===t){c[e]=[W,d,x];break}}else
// xml :nth-child(...)
// or :nth-last-child(...) or :nth(-last)?-of-type(...)
if(
// Use previously-cached element index if available
y&&(
// ...in a gzip-friendly way
p=t,f=p[M]||(p[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===W&&l[1],x=d),!1===x)
// Use the same loop as above to seek `elem` from the start
for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==m:1!==p.nodeType)||!++x||(
// Cache the index of each encountered element
y&&(f=p[M]||(p[M]={}),
// Support: IE <9 only
// Defend against cloned attroperties (jQuery gh-1709)
c=f[p.uniqueID]||(f[p.uniqueID]={}),c[e]=[W,x]),p!==t)););
// Incorporate the offset, then check against cycle size
return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,n){
// pseudo-class names are case-insensitive
// http://www.w3.org/TR/selectors/#pseudo-classes
// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
// Remember that setFilters inherits from pseudos
var i,o=w.pseudos[e]||w.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// The user may use createPseudo to indicate that
// arguments are needed to create the filter function
// just as Sizzle does
// But maintain support for old signatures
return o[M]?o(n):o.length>1?(i=[e,e,"",n],w.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=K(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{
// Potentially complex pseudos
not:r(function(e){
// Trim the selector passed to compile
// to avoid treating leading and trailing
// spaces as combinators
var t=[],n=[],i=k(e.replace(oe,"$1"));return i[M]?r(function(e,t,n,r){
// Match elements unmatched by `matcher`
for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){
// Don't keep the element (issue #299)
return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(me,ye),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}}),
// "Whether an element is represented by a :lang() selector
// is based solely on the element's language value
// being equal to the identifier C,
// or beginning with the identifier C immediately followed by "-".
// The matching of C against the element's language value is performed case-insensitively.
// The identifier C does not have to be a valid language name."
// http://www.w3.org/TR/selectors/#lang-pseudo
lang:r(function(e){
// lang value must be a valid identifier
return ce.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(me,ye).toLowerCase(),function(t){var n;do{if(n=H?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),
// Miscellaneous
target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===L},focus:function(e){return e===q.activeElement&&(!q.hasFocus||q.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},
// Boolean properties
enabled:s(!1),disabled:s(!0),checked:function(e){
// In CSS3, :checked should return both checked and selected elements
// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){
// Accessing this property makes selected-by-default
// options in Safari work properly
return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},
// Contents
empty:function(e){
// http://www.w3.org/TR/selectors/#empty-pseudo
// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
//   but not by others (comment: 8; processing instruction: 7; etc.)
// nodeType < 6 works because attributes (2) do not appear as children
for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!w.pseudos.empty(e)},
// Element/input types
header:function(e){return de.test(e.nodeName)},input:function(e){return pe.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;
// Support: IE<8
// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},
// Position-in-collection
first:u(function(){return[0]}),last:u(function(e,t){return[t-1]}),eq:u(function(e,t,n){return[n<0?n+t:n]}),even:u(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:u(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:u(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:u(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},w.pseudos.nth=w.pseudos.eq;
// Add button/input type pseudos
for(x in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[x]=/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}(x);for(x in{submit:!0,reset:!0})w.pseudos[x]=/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}(x);/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
// One-time assignments
// Sort stability
// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
// Initialize against the default document
// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
// Support: IE<9
// Use defaultValue in place of getAttribute("value")
// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
return c.prototype=w.filters=w.pseudos,w.setFilters=new c,E=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=_[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=w.preFilter;s;){
// Comma and first run
r&&!(i=ae.exec(s))||(i&&(
// Don't consume trailing commas as valid
s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,
// Combinators
(i=se.exec(s))&&(r=i.shift(),o.push({value:r,
// Cast descendant combinators to space
type:i[0].replace(oe," ")}),s=s.slice(r.length));
// Filters
for(a in w.filter)!(i=fe[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}
// Return the length of the invalid excess
// if we're just parsing
// Otherwise, throw an error or return tokens
// Cache the tokens
return n?s.length:s?t.error(e):_(e,u).slice(0)},k=t.compile=function(e,t){var n,r=[],i=[],o=z[e+" "];if(!o){for(
// Generate a function of recursive functions that can be used to check each element
t||(t=E(e)),n=t.length;n--;)o=m(t[n]),o[M]?r.push(o):i.push(o);
// Cache the compiled function
o=z(e,y(i,r)),
// Save selector and tokenization
o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,a,s,u,c="function"==typeof e&&e,p=!r&&E(e=c.selector||e);
// Try to minimize operations if there is only one selector in the list and no seed
// (the latter of which guarantees us context)
if(n=n||[],1===p.length){if(
// Reduce context if the leading compound selector is an ID
o=p[0]=p[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&H&&w.relative[o[1].type]){if(!(t=(w.find.ID(a.matches[0].replace(me,ye),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(
// Fetch a seed set for right-to-left matching
i=fe.needsContext.test(e)?0:o.length;i--&&(a=o[i],!w.relative[s=a.type]);)if((u=w.find[s])&&(r=u(a.matches[0].replace(me,ye),ve.test(o[0].type)&&l(t.parentNode)||t))){if(
// If seed is empty or no tokens remain, we can return early
o.splice(i,1),!(e=r.length&&f(o)))return Q.apply(n,r),n;break}}
// Compile and execute a filtering function if one is not provided
// Provide `match` to avoid retokenization if we modified the selector above
return(c||k(e,p))(r,t,!H,n,!t||ve.test(e)&&l(t.parentNode)||t),n},b.sortStable=M.split("").sort(X).join("")===M,b.detectDuplicates=!!D,A(),b.sortDetached=i(function(e){
// Should return 1, but returns 4 (following)
return 1&e.compareDocumentPosition(q.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(Z,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(n);ye.find=Ce,ye.expr=Ce.selectors,
// Deprecated
ye.expr[":"]=ye.expr.pseudos,ye.uniqueSort=ye.unique=Ce.uniqueSort,ye.text=Ce.getText,ye.isXMLDoc=Ce.isXML,ye.contains=Ce.contains,ye.escapeSelector=Ce.escape;var Ee=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&ye(e).is(n))break;r.push(e)}return r},ke=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},Se=ye.expr.match.needsContext,Ne=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,je=/^.[^:#\[\.,]*$/;ye.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?ye.find.matchesSelector(r,e)?[r]:[]:ye.find.matches(e,ye.grep(t,function(e){return 1===e.nodeType}))},ye.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(ye(e).filter(function(){for(t=0;t<r;t++)if(ye.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)ye.find(e,i[t],n);return r>1?ye.uniqueSort(n):n},filter:function(e){return this.pushStack(l(this,e||[],!1))},not:function(e){return this.pushStack(l(this,e||[],!0))},is:function(e){
// If this is a positional/relative selector, check membership in the returned set
// so $("p:first").is("p:last") won't return true for a doc with two "p".
return!!l(this,"string"==typeof e&&Se.test(e)?ye(e):e||[],!1).length}});
// Initialize a jQuery object
// A central reference to the root jQuery(document)
var De,
// A simple way to check for HTML strings
// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
// Strict HTML recognition (#11290: must start with <)
// Shortcut simple #id case for speed
Ae=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
// Give the init function the jQuery prototype for later instantiation
(ye.fn.init=function(e,t,n){var r,i;
// HANDLE: $(""), $(null), $(undefined), $(false)
if(!e)return this;
// Handle HTML strings
if(
// Method init() accepts an alternate rootjQuery
// so migrate can support jQuery.sub (gh-2101)
n=n||De,"string"==typeof e){
// Match html or make sure no context is specified for #id
if(!(
// Assume that strings that start and end with <> are HTML and skip the regex check
r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Ae.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);
// HANDLE: $(html) -> $(array)
if(r[1]){
// HANDLE: $(html, props)
if(t=t instanceof ye?t[0]:t,
// Option to run scripts is true for back-compat
// Intentionally let the error be thrown if parseHTML is not present
ye.merge(this,ye.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:ae,!0)),Ne.test(r[1])&&ye.isPlainObject(t))for(r in t)
// Properties of context are called as methods if possible
ye.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}
// Inject the element directly into the jQuery object
return i=ae.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}
// Execute immediately if ready is not present
return e.nodeType?(this[0]=e,this.length=1,this):ye.isFunction(e)?void 0!==n.ready?n.ready(e):e(ye):ye.makeArray(e,this)}).prototype=ye.fn,
// Initialize central reference
De=ye(ae);var qe=/^(?:parents|prev(?:Until|All))/,
// Methods guaranteed to produce a unique set when starting from a unique set
Le={children:!0,contents:!0,next:!0,prev:!0};ye.fn.extend({has:function(e){var t=ye(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(ye.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&ye(e);
// Positional selectors never match, since there's no _selection_ context
if(!Se.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)
// Always skip document fragments
if(n.nodeType<11&&(a?a.index(n)>-1:
// Don't pass non-elements to Sizzle
1===n.nodeType&&ye.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?ye.uniqueSort(o):o)},
// Determine the position of an element within the set
index:function(e){
// No argument, return index in parent
// No argument, return index in parent
// Index in selector
// If it receives a jQuery object, the first element is used
return e?"string"==typeof e?fe.call(ye(e),this[0]):fe.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(ye.uniqueSort(ye.merge(this.get(),ye(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),ye.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Ee(e,"parentNode")},parentsUntil:function(e,t,n){return Ee(e,"parentNode",n)},next:function(e){return c(e,"nextSibling")},prev:function(e){return c(e,"previousSibling")},nextAll:function(e){return Ee(e,"nextSibling")},prevAll:function(e){return Ee(e,"previousSibling")},nextUntil:function(e,t,n){return Ee(e,"nextSibling",n)},prevUntil:function(e,t,n){return Ee(e,"previousSibling",n)},siblings:function(e){return ke((e.parentNode||{}).firstChild,e)},children:function(e){return ke(e.firstChild)},contents:function(e){
// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
// Treat the template element as a regular one in browsers that
// don't support it.
return u(e,"iframe")?e.contentDocument:(u(e,"template")&&(e=e.content||e),ye.merge([],e.childNodes))}},function(e,t){ye.fn[e]=function(n,r){var i=ye.map(this,t,n);
// Remove duplicates
// Reverse order for parents* and prev-derivatives
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=ye.filter(r,i)),this.length>1&&(Le[e]||ye.uniqueSort(i),qe.test(e)&&i.reverse()),this.pushStack(i)}});var He=/[^\x20\t\r\n\f]+/g;/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
ye.Callbacks=function(e){
// Convert options from String-formatted to Object-formatted if needed
// (we check in cache first)
e="string"==typeof e?f(e):ye.extend({},e);var// Flag to know if list is currently firing
t,
// Last fire value for non-forgettable lists
n,
// Flag to know if list was already fired
r,
// Flag to prevent firing
i,
// Actual callback list
o=[],
// Queue of execution data for repeatable lists
a=[],
// Index of currently firing callback (modified by add/remove as needed)
s=-1,
// Fire callbacks
u=function(){for(
// Enforce single-firing
i=i||e.once,
// Execute callbacks for all pending executions,
// respecting firingIndex overrides and runtime changes
r=t=!0;a.length;s=-1)for(n=a.shift();++s<o.length;)
// Run callback and check for early termination
!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(
// Jump to end and forget the data so .add doesn't re-fire
s=o.length,n=!1);
// Forget the data if we're done with it
e.memory||(n=!1),t=!1,
// Clean up if we're done firing for good
i&&(
// Keep an empty list if we have data for future add calls
o=n?[]:"")},
// Actual Callbacks object
l={
// Add a callback or a collection of callbacks to the list
add:function(){
// If we have memory from a past run, we should fire after adding
return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){ye.each(n,function(n,r){ye.isFunction(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==ye.type(r)&&
// Inspect recursively
t(r)})}(arguments),n&&!t&&u()),this},
// Remove a callback from the list
remove:function(){return ye.each(arguments,function(e,t){for(var n;(n=ye.inArray(t,o,n))>-1;)o.splice(n,1),
// Handle firing indexes
n<=s&&s--}),this},
// Check if a given callback is in the list.
// If no argument is given, return whether or not list has callbacks attached.
has:function(e){return e?ye.inArray(e,o)>-1:o.length>0},
// Remove all callbacks from the list
empty:function(){return o&&(o=[]),this},
// Disable .fire and .add
// Abort any current/pending executions
// Clear all callbacks and values
disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},
// Disable .fire
// Also disable .add unless we have memory (since it would have no effect)
// Abort any pending executions
lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},
// Call all callbacks with the given context and arguments
fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],a.push(n),t||u()),this},
// Call all the callbacks with the given arguments
fire:function(){return l.fireWith(this,arguments),this},
// To know if the callbacks have already been called at least once
fired:function(){return!!r}};return l},ye.extend({Deferred:function(e){var t=[
// action, add listener, callbacks,
// ... .then handlers, argument index, [final state]
["notify","progress",ye.Callbacks("memory"),ye.Callbacks("memory"),2],["resolve","done",ye.Callbacks("once memory"),ye.Callbacks("once memory"),0,"resolved"],["reject","fail",ye.Callbacks("once memory"),ye.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},
// Keep pipe for back-compat
pipe:function(){var e=arguments;return ye.Deferred(function(n){ye.each(t,function(t,r){
// Map tuples (progress, done, fail) to arguments (done, fail, progress)
var i=ye.isFunction(e[r[4]])&&e[r[4]];
// deferred.progress(function() { bind to newDefer or newDefer.notify })
// deferred.done(function() { bind to newDefer or newDefer.resolve })
// deferred.fail(function() { bind to newDefer or newDefer.reject })
o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&ye.isFunction(e.promise)?e.promise().progress(n.notify).done(n.resolve).fail(n.reject):n[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(e,r,i){function o(e,t,r,i){return function(){var s=this,u=arguments,l=function(){var n,l;
// Support: Promises/A+ section 2.3.3.3.3
// https://promisesaplus.com/#point-59
// Ignore double-resolution attempts
if(!(e<a)){
// Support: Promises/A+ section 2.3.1
// https://promisesaplus.com/#point-48
if((n=r.apply(s,u))===t.promise())throw new TypeError("Thenable self-resolution");
// Support: Promises/A+ sections 2.3.3.1, 3.5
// https://promisesaplus.com/#point-54
// https://promisesaplus.com/#point-75
// Retrieve `then` only once
l=n&&(
// Support: Promises/A+ section 2.3.4
// https://promisesaplus.com/#point-64
// Only check objects and functions for thenability
"object"==typeof n||"function"==typeof n)&&n.then,
// Handle a returned thenable
ye.isFunction(l)?
// Special processors (notify) just wait for resolution
i?l.call(n,o(a,t,p,i),o(a,t,d,i)):(
// ...and disregard older resolution values
a++,l.call(n,o(a,t,p,i),o(a,t,d,i),o(a,t,p,t.notifyWith))):(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
r!==p&&(s=void 0,u=[n]),
// Process the value(s)
// Default process is resolve
(i||t.resolveWith)(s,u))}},
// Only normal processors (resolve) catch and reject exceptions
c=i?l:function(){try{l()}catch(n){ye.Deferred.exceptionHook&&ye.Deferred.exceptionHook(n,c.stackTrace),
// Support: Promises/A+ section 2.3.3.3.4.1
// https://promisesaplus.com/#point-61
// Ignore post-resolution exceptions
e+1>=a&&(
// Only substitute handlers pass on context
// and multiple values (non-spec behavior)
r!==d&&(s=void 0,u=[n]),t.rejectWith(s,u))}};
// Support: Promises/A+ section 2.3.3.3.1
// https://promisesaplus.com/#point-57
// Re-resolve promises immediately to dodge false rejection from
// subsequent errors
e?c():(
// Call an optional hook to record the stack, in case of exception
// since it's otherwise lost when execution goes async
ye.Deferred.getStackHook&&(c.stackTrace=ye.Deferred.getStackHook()),n.setTimeout(c))}}var a=0;return ye.Deferred(function(n){
// progress_handlers.add( ... )
t[0][3].add(o(0,n,ye.isFunction(i)?i:p,n.notifyWith)),
// fulfilled_handlers.add( ... )
t[1][3].add(o(0,n,ye.isFunction(e)?e:p)),
// rejected_handlers.add( ... )
t[2][3].add(o(0,n,ye.isFunction(r)?r:d))}).promise()},
// Get a promise for this deferred
// If obj is provided, the promise aspect is added to the object
promise:function(e){return null!=e?ye.extend(e,i):i}},o={};
// All done!
// Add list-specific methods
// Make the deferred a promise
// Call given func if any
return ye.each(t,function(e,n){var a=n[2],s=n[5];
// promise.progress = list.add
// promise.done = list.add
// promise.fail = list.add
i[n[1]]=a.add,
// Handle state
s&&a.add(function(){
// state = "resolved" (i.e., fulfilled)
// state = "rejected"
r=s},
// rejected_callbacks.disable
// fulfilled_callbacks.disable
t[3-e][2].disable,
// progress_callbacks.lock
t[0][2].lock),
// progress_handlers.fire
// fulfilled_handlers.fire
// rejected_handlers.fire
a.add(n[3].fire),
// deferred.notify = function() { deferred.notifyWith(...) }
// deferred.resolve = function() { deferred.resolveWith(...) }
// deferred.reject = function() { deferred.rejectWith(...) }
o[n[0]]=function(){return o[n[0]+"With"](this===o?void 0:this,arguments),this},
// deferred.notifyWith = list.fireWith
// deferred.resolveWith = list.fireWith
// deferred.rejectWith = list.fireWith
o[n[0]+"With"]=a.fireWith}),i.promise(o),e&&e.call(o,o),o},
// Deferred helper
when:function(e){var
// count of uncompleted subordinates
t=arguments.length,
// count of unprocessed arguments
n=t,
// subordinate fulfillment data
r=Array(n),i=ue.call(arguments),
// the master Deferred
o=ye.Deferred(),
// subordinate callback factory
a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?ue.call(arguments):n,--t||o.resolveWith(r,i)}};
// Single- and empty arguments are adopted like Promise.resolve
if(t<=1&&(h(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||ye.isFunction(i[n]&&i[n].then)))return o.then();
// Multiple arguments are aggregated like Promise.all array elements
for(;n--;)h(i[n],a(n),o.reject);return o.promise()}});
// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var Fe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;ye.Deferred.exceptionHook=function(e,t){
// Support: IE 8 - 9 only
// Console exists when dev tools are open, which can happen at any time
n.console&&n.console.warn&&e&&Fe.test(e.name)&&n.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},ye.readyException=function(e){n.setTimeout(function(){throw e})};
// The deferred used on DOM ready
var Oe=ye.Deferred();ye.fn.ready=function(e){return Oe.then(e).catch(function(e){ye.readyException(e)}),this},ye.extend({
// Is the DOM ready to be used? Set to true once it occurs.
isReady:!1,
// A counter to track how many items to wait for before
// the ready event fires. See #6781
readyWait:1,
// Handle when the DOM is ready
ready:function(e){
// Abort if there are pending holds or we're already ready
(!0===e?--ye.readyWait:ye.isReady)||(
// Remember that the DOM is ready
ye.isReady=!0,
// If a normal DOM Ready event fired, decrement, and wait if need be
!0!==e&&--ye.readyWait>0||
// If there are functions bound, to execute
Oe.resolveWith(ae,[ye]))}}),ye.ready.then=Oe.then,
// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
"complete"===ae.readyState||"loading"!==ae.readyState&&!ae.documentElement.doScroll?
// Handle it asynchronously to allow scripts the opportunity to delay ready
n.setTimeout(ye.ready):(
// Use the handy event callback
ae.addEventListener("DOMContentLoaded",g),
// A fallback to window.onload, that will always work
n.addEventListener("load",g));
// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var Pe=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;
// Sets many values
if("object"===ye.type(n)){i=!0;for(s in n)Pe(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,ye.isFunction(r)||(a=!0),l&&(
// Bulk operations run against the entire set
a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(ye(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));
// Gets
return i?e:l?t.call(e):u?t(e[0],n):o},Re=function(e){
// Accepts only:
//  - Node
//    - Node.ELEMENT_NODE
//    - Node.DOCUMENT_NODE
//  - Object
//    - Any
return 1===e.nodeType||9===e.nodeType||!+e.nodeType};v.uid=1,v.prototype={cache:function(e){
// Check if the owner object already has a cache
var t=e[this.expando];
// If not, create one
// We can accept data for non-element nodes in modern browsers,
// but we should not, see #8335.
// Always return an empty object.
// If it is a node unlikely to be stringify-ed or looped over
// use plain assignment
return t||(t={},Re(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);
// Handle: [ owner, key, value ] args
// Always use camelCase key (gh-2257)
if("string"==typeof t)i[ye.camelCase(t)]=n;else
// Copy the properties one-by-one to the cache object
for(r in t)i[ye.camelCase(r)]=t[r];return i},get:function(e,t){
// Always use camelCase key (gh-2257)
return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][ye.camelCase(t)]},access:function(e,t,n){
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// In cases where either:
//
//   1. No key was specified
//   2. A string key was specified, but no value provided
//
// Take the "read" path and allow the get method to determine
// which value to return, respectively either:
//
//   1. The entire cache object
//   2. The data stored at the key
//
// When the key is not a string, or both a key and value
// are specified, set or extend (existing objects) with either:
//
//   1. An object of properties
//   2. A key and value
//
return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){
// Support array or space separated string of keys
Array.isArray(t)?
// If key is an array of keys...
// We always set camelCase keys, so remove that.
t=t.map(ye.camelCase):(t=ye.camelCase(t),
// If a key with the spaces exists, use it.
// Otherwise, create an array by matching non-whitespace
t=t in r?[t]:t.match(He)||[]),n=t.length;for(;n--;)delete r[t[n]]}
// Remove the expando if there's no more data
(void 0===t||ye.isEmptyObject(r))&&(
// Support: Chrome <=35 - 45
// Webkit & Blink performance suffers when deleting properties
// from DOM nodes, so set to undefined instead
// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!ye.isEmptyObject(t)}};var Me=new v,Ie=new v,We=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,$e=/[A-Z]/g;ye.extend({hasData:function(e){return Ie.hasData(e)||Me.hasData(e)},data:function(e,t,n){return Ie.access(e,t,n)},removeData:function(e,t){Ie.remove(e,t)},
// TODO: Now that all calls to _data and _removeData have been replaced
// with direct calls to dataPriv methods, these can be deprecated.
_data:function(e,t,n){return Me.access(e,t,n)},_removeData:function(e,t){Me.remove(e,t)}}),ye.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;
// Gets all values
if(void 0===e){if(this.length&&(i=Ie.get(o),1===o.nodeType&&!Me.get(o,"hasDataAttrs"))){for(n=a.length;n--;)
// Support: IE 11 only
// The attrs elements can be null (#14894)
a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=ye.camelCase(r.slice(5)),y(o,r,i[r])));Me.set(o,"hasDataAttrs",!0)}return i}
// Sets multiple values
// Sets multiple values
return"object"==typeof e?this.each(function(){Ie.set(this,e)}):Pe(this,function(t){var n;
// The calling jQuery object (element matches) is not empty
// (and therefore has an element appears at this[ 0 ]) and the
// `value` parameter was not undefined. An empty jQuery object
// will result in `undefined` for elem = this[ 0 ] which will
// throw an exception if an attempt to read a data cache is made.
if(o&&void 0===t){if(void 0!==(
// Attempt to get data from the cache
// The key will always be camelCased in Data
n=Ie.get(o,e)))return n;if(void 0!==(
// Attempt to "discover" the data in
// HTML5 custom data-* attrs
n=y(o,e)))return n}else
// Set the data...
this.each(function(){
// We always store the camelCased key
Ie.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Ie.remove(this,e)})}}),ye.extend({queue:function(e,t,n){var r;if(e)
// Speed up dequeue by getting out quickly if this is just a lookup
return t=(t||"fx")+"queue",r=Me.get(e,t),n&&(!r||Array.isArray(n)?r=Me.access(e,t,ye.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=ye.queue(e,t),r=n.length,i=n.shift(),o=ye._queueHooks(e,t),a=function(){ye.dequeue(e,t)};
// If the fx queue is dequeued, always remove the progress sentinel
"inprogress"===i&&(i=n.shift(),r--),i&&(
// Add a progress sentinel to prevent the fx queue from being
// automatically dequeued
"fx"===t&&n.unshift("inprogress"),
// Clear up the last queue stop function
delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},
// Not public - generate a queueHooks object, or return the current one
_queueHooks:function(e,t){var n=t+"queueHooks";return Me.get(e,n)||Me.access(e,n,{empty:ye.Callbacks("once memory").add(function(){Me.remove(e,[t+"queue",n])})})}}),ye.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?ye.queue(this[0],e):void 0===t?this:this.each(function(){var n=ye.queue(this,e,t);
// Ensure a hooks for this queue
ye._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&ye.dequeue(this,e)})},dequeue:function(e){return this.each(function(){ye.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},
// Get a promise resolved when queues of a certain type
// are emptied (fx is the type by default)
promise:function(e,t){var n,r=1,i=ye.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(n=Me.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Be=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,_e=new RegExp("^(?:([+-])=|)("+Be+")([a-z%]*)$","i"),ze=["Top","Right","Bottom","Left"],Xe=function(e,t){
// Inline style trumps all
// isHiddenWithinTree might be called from jQuery#filter function;
// in that case, element will be second argument
// Otherwise, check computed style
// Support: Firefox <=43 - 45
// Disconnected elements can have computed display: none, so first confirm that elem is
// in the document.
return e=t||e,"none"===e.style.display||""===e.style.display&&ye.contains(e.ownerDocument,e)&&"none"===ye.css(e,"display")},Ue=function(e,t,n,r){var i,o,a={};
// Remember the old values, and insert the new ones
for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);
// Revert the old values
for(o in t)e.style[o]=a[o];return i},Ve={};ye.fn.extend({show:function(){return w(this,!0)},hide:function(){return w(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Xe(this)?ye(this).show():ye(this).hide()})}});var Ge=/^(?:checkbox|radio)$/i,Ye=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Qe=/^$|\/(?:java|ecma)script/i,Je={
// Support: IE <=9 only
option:[1,"<select multiple='multiple'>","</select>"],
// XHTML parsers do not magically insert elements in the
// same way that tag soup parsers do. So we cannot shorten
// this by omitting <tbody> or other required elements.
thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
// Support: IE <=9 only
Je.optgroup=Je.option,Je.tbody=Je.tfoot=Je.colgroup=Je.caption=Je.thead,Je.th=Je.td;var Ke=/<|&#?\w+;/;!function(){var e=ae.createDocumentFragment(),t=e.appendChild(ae.createElement("div")),n=ae.createElement("input");
// Support: Android 4.0 - 4.3 only
// Check state lost if the name is set (#11217)
// Support: Windows Web Apps (WWA)
// `name` and `type` must use .setAttribute for WWA (#14901)
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),
// Support: Android <=4.1 only
// Older WebKit doesn't clone checked state correctly in fragments
me.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,
// Support: IE <=11 only
// Make sure textarea (and checkbox) defaultValue is properly cloned
t.innerHTML="<textarea>x</textarea>",me.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var Ze=ae.documentElement,et=/^key/,tt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,nt=/^([^.]*)(?:\.(.+)|)/;/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
ye.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Me.get(e);
// Don't attach events to noData or text/comment nodes (but allow plain objects)
if(v)for(
// Caller can pass in an object of custom data in lieu of the handler
n.handler&&(o=n,n=o.handler,i=o.selector),
// Ensure that invalid selectors throw exceptions at attach time
// Evaluate against documentElement in case elem is a non-element node (e.g., document)
i&&ye.find.matchesSelector(Ze,i),
// Make sure that the handler has a unique ID, used to find/remove it later
n.guid||(n.guid=ye.guid++),
// Init the element's event structure and main handler, if this is the first
(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(t){
// Discard the second event of a jQuery.event.trigger() and
// when an event is called after a page has unloaded
return void 0!==ye&&ye.event.triggered!==t.type?ye.event.dispatch.apply(e,arguments):void 0}),
// Handle multiple events separated by a space
t=(t||"").match(He)||[""],l=t.length;l--;)s=nt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),
// There *must* be a type, no attaching namespace-only handlers
d&&(
// If event changes its type, use the special event handlers for the changed type
f=ye.event.special[d]||{},
// If selector defined, determine special event api type, otherwise given type
d=(i?f.delegateType:f.bindType)||d,
// Update special based on newly reset type
f=ye.event.special[d]||{},
// handleObj is passed to all event handlers
c=ye.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&ye.expr.match.needsContext.test(i),namespace:h.join(".")},o),
// Init the event handler queue if we're the first
(p=u[d])||(p=u[d]=[],p.delegateCount=0,
// Only use addEventListener if the special events handler returns false
f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),
// Add to the element's handler list, delegates in front
i?p.splice(p.delegateCount++,0,c):p.push(c),
// Keep track of which events have ever been used, for event optimization
ye.event.global[d]=!0)},
// Detach an event or set of events from an element
remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Me.hasData(e)&&Me.get(e);if(v&&(u=v.events)){for(
// Once for each type.namespace in types; type may be omitted
t=(t||"").match(He)||[""],l=t.length;l--;)
// Unbind all events (on this namespace, if provided) for the element
if(s=nt.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=ye.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),
// Remove matching events
a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));
// Remove generic event handler if we removed something and no more handlers exist
// (avoids potential for endless recursion during removal of special event handlers)
a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||ye.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)ye.event.remove(e,d+t[l],n,r,!0);
// Remove data and the expando if it's no longer used
ye.isEmptyObject(u)&&Me.remove(e,"handle events")}},dispatch:function(e){
// Make a writable jQuery.Event from the native event object
var t,n,r,i,o,a,s=ye.event.fix(e),u=new Array(arguments.length),l=(Me.get(this,"events")||{})[s.type]||[],c=ye.event.special[s.type]||{};for(
// Use the fix-ed jQuery.Event rather than the (read-only) native event
u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];
// Call the preDispatch hook for the mapped type, and let it bail if desired
if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){for(
// Determine handlers
a=ye.event.handlers.call(this,s,l),
// Run delegates first; they may want to stop propagation beneath us
t=0;(i=a[t++])&&!s.isPropagationStopped();)for(s.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!s.isImmediatePropagationStopped();)
// Triggered event must either 1) have no namespace, or 2) have namespace(s)
// a subset or equal to those in the bound event (both can have no namespace).
s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((ye.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()));
// Call the postDispatch hook for the mapped type
return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;
// Find delegate handlers
if(u&&
// Support: IE <=9
// Black-hole SVG <use> instance trees (trac-13180)
l.nodeType&&
// Support: Firefox <=42
// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
// Support: IE 11 only
// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)
// Don't check non-elements (#13208)
// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)r=t[n],
// Don't conflict with Object.prototype properties (#13203)
i=r.selector+" ",void 0===a[i]&&(a[i]=r.needsContext?ye(i,this).index(l)>-1:ye.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}
// Add the remaining (directly-bound) handlers
return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(ye.Event.prototype,e,{enumerable:!0,configurable:!0,get:ye.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[ye.expando]?e:new ye.Event(e)},special:{load:{
// Prevent triggered image.load events from bubbling to window.load
noBubble:!0},focus:{
// Fire native event if possible so blur/focus sequence is correct
trigger:function(){if(this!==N()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===N()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{
// For checkbox, fire native event so checked state will be right
trigger:function(){if("checkbox"===this.type&&this.click&&u(this,"input"))return this.click(),!1},
// For cross-browser consistency, don't fire native .click() on links
_default:function(e){return u(e.target,"a")}},beforeunload:{postDispatch:function(e){
// Support: Firefox 20+
// Firefox doesn't alert if the returnValue field is not set.
void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},ye.removeEvent=function(e,t,n){
// This "if" is needed for plain objects
e.removeEventListener&&e.removeEventListener(t,n)},ye.Event=function(e,t){
// Allow instantiation without the 'new' keyword
if(!(this instanceof ye.Event))return new ye.Event(e,t);
// Event object
e&&e.type?(this.originalEvent=e,this.type=e.type,
// Events bubbling up the document may have been marked as prevented
// by a handler lower down the tree; reflect the correct value.
this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&
// Support: Android <=2.3 only
!1===e.returnValue?k:S,
// Create target properties
// Support: Safari <=6 - 7 only
// Target should not be a text node (#504, #13143)
this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,
// Put explicitly provided properties onto the event object
t&&ye.extend(this,t),
// Create a timestamp if incoming event doesn't have one
this.timeStamp=e&&e.timeStamp||ye.now(),
// Mark it as fixed
this[ye.expando]=!0},
// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
ye.Event.prototype={constructor:ye.Event,isDefaultPrevented:S,isPropagationStopped:S,isImmediatePropagationStopped:S,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=k,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=k,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=k,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},
// Includes all common event props including KeyEvent and MouseEvent specific props
ye.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;
// Add which for key events
// Add which for key events
// Add which for click: 1 === left; 2 === middle; 3 === right
return null==e.which&&et.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&tt.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},ye.event.addProp),
// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
ye.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){ye.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;
// For mouseenter/leave call the handler if related is outside the target.
// NB: No relatedTarget if the mouse left/entered the browser window
return i&&(i===r||ye.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),ye.fn.extend({on:function(e,t,n,r){return j(this,e,t,n,r)},one:function(e,t,n,r){return j(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)
// ( event )  dispatched jQuery.Event
return r=e.handleObj,ye(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){
// ( types-object [, selector] )
for(i in e)this.off(i,t,e[i]);return this}
// ( types [, fn] )
return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=S),this.each(function(){ye.event.remove(this,e,n,t)})}});var/* eslint-disable max-len */
// See https://github.com/eslint/eslint/issues/3229
rt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,/* eslint-enable */
// Support: IE <=10 - 11, Edge 12 - 13
// In IE/Edge using regex groups here causes severe slowdowns.
// See https://connect.microsoft.com/IE/feedback/details/1736512/
it=/<script|<style|<link/i,
// checked="checked" or checked
ot=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^true\/(.*)/,st=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;ye.extend({htmlPrefilter:function(e){return e.replace(rt,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=ye.contains(e.ownerDocument,e);
// Fix IE cloning issues
if(!(me.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||ye.isXMLDoc(e)))for(
// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
a=T(s),o=T(e),r=0,i=o.length;r<i;r++)H(o[r],a[r]);
// Copy the events from the original to the clone
if(t)if(n)for(o=o||T(e),a=a||T(s),r=0,i=o.length;r<i;r++)L(o[r],a[r]);else L(e,s);
// Return the cloned set
// Preserve script evaluation history
return a=T(s,"script"),a.length>0&&C(a,!u&&T(e,"script")),s},cleanData:function(e){for(var t,n,r,i=ye.event.special,o=0;void 0!==(n=e[o]);o++)if(Re(n)){if(t=n[Me.expando]){if(t.events)for(r in t.events)i[r]?ye.event.remove(n,r):ye.removeEvent(n,r,t.handle);
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Me.expando]=void 0}n[Ie.expando]&&(
// Support: Chrome <=35 - 45+
// Assign undefined instead of using delete, see Data#remove
n[Ie.expando]=void 0)}}}),ye.fn.extend({detach:function(e){return O(this,e,!0)},remove:function(e){return O(this,e)},text:function(e){return Pe(this,function(e){return void 0===e?ye.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return F(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){D(this,e).appendChild(e)}})},prepend:function(){return F(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=D(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return F(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return F(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(
// Prevent memory leaks
ye.cleanData(T(e,!1)),
// Remove any remaining nodes
e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return ye.clone(this,e,t)})},html:function(e){return Pe(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;
// See if we can take a shortcut and just use innerHTML
if("string"==typeof e&&!it.test(e)&&!Je[(Ye.exec(e)||["",""])[1].toLowerCase()]){e=ye.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},
// Remove element nodes and prevent memory leaks
1===t.nodeType&&(ye.cleanData(T(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];
// Make the changes, replacing each non-ignored context element with the new content
return F(this,arguments,function(t){var n=this.parentNode;ye.inArray(this,e)<0&&(ye.cleanData(T(this)),n&&n.replaceChild(t,this))},e)}}),ye.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){ye.fn[e]=function(e){for(var n,r=[],i=ye(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),ye(i[a])[t](n),
// Support: Android <=4.0 only, PhantomJS 1 only
// .get() because push.apply(_, arraylike) throws on ancient WebKit
ce.apply(r,n.get());return this.pushStack(r)}});var ut=/^margin/,lt=new RegExp("^("+Be+")(?!px)[a-z%]+$","i"),ct=function(e){
// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
// IE throws on elements created in popups
// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
var t=e.ownerDocument.defaultView;return t&&t.opener||(t=n),t.getComputedStyle(e)};!function(){
// Executing both pixelPosition & boxSizingReliable tests require only one layout
// so they're executed at the same time to save the second computation.
function e(){
// This is a singleton, we need to execute it only once
if(s){s.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",s.innerHTML="",Ze.appendChild(a);var e=n.getComputedStyle(s);t="1%"!==e.top,
// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
o="2px"===e.marginLeft,r="4px"===e.width,
// Support: Android 4.0 - 4.3 only
// Some styles come back with percentage values, even though they shouldn't
s.style.marginRight="50%",i="4px"===e.marginRight,Ze.removeChild(a),
// Nullify the div so it wouldn't be stored in the memory and
// it will also be a sign that checks already performed
s=null}}var t,r,i,o,a=ae.createElement("div"),s=ae.createElement("div");
// Finish early in limited (non-browser) environments
s.style&&(
// Support: IE <=9 - 11 only
// Style of cloned element affects source element cloned (#8908)
s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",me.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",a.appendChild(s),ye.extend(me,{pixelPosition:function(){return e(),t},boxSizingReliable:function(){return e(),r},pixelMarginRight:function(){return e(),i},reliableMarginLeft:function(){return e(),o}}))}();var
// Swappable if display is none or starts with table
// except "table", "table-cell", or "table-caption"
// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
ft=/^(none|table(?!-c[ea]).+)/,pt=/^--/,dt={position:"absolute",visibility:"hidden",display:"block"},ht={letterSpacing:"0",fontWeight:"400"},gt=["Webkit","Moz","ms"],vt=ae.createElement("div").style;ye.extend({
// Add in style property hooks for overriding the default
// behavior of getting and setting a style property
cssHooks:{opacity:{get:function(e,t){if(t){
// We should always get a number back from opacity
var n=P(e,"opacity");return""===n?"1":n}}}},
// Don't automatically add "px" to these possibly-unitless properties
cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},
// Add in properties whose names you wish to fix before
// setting or getting the value
cssProps:{float:"cssFloat"},
// Get and set the style property on a DOM Node
style:function(e,t,n,r){
// Don't set styles on text and comment nodes
if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){
// Make sure that we're working with the right name
var i,o,a,s=ye.camelCase(t),u=pt.test(t),l=e.style;
// Check if we're setting a value
if(
// Make sure that we're working with the right name. We don't
// want to query the value if it is a CSS custom property
// since they are user-defined.
u||(t=I(s)),
// Gets hook for the prefixed version, then unprefixed version
a=ye.cssHooks[t]||ye.cssHooks[s],void 0===n)
// If a hook was provided get the non-computed value from there
// If a hook was provided get the non-computed value from there
return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];o=typeof n,
// Convert "+=" or "-=" to relative numbers (#7345)
"string"===o&&(i=_e.exec(n))&&i[1]&&(n=x(e,t,i),
// Fixes bug #9237
o="number"),
// Make sure that null and NaN values aren't set (#7116)
null!=n&&n===n&&(
// If a number was passed in, add the unit (except for certain CSS properties)
"number"===o&&(n+=i&&i[3]||(ye.cssNumber[s]?"":"px")),
// background-* props affect original clone's values
me.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),
// If a hook was provided, use that value, otherwise just set the specified value
a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=ye.camelCase(t);
// Make numeric if forced or a qualifier was provided and val looks numeric
// Make sure that we're working with the right name. We don't
// want to modify the value if it is a CSS custom property
// since they are user-defined.
// Try prefixed name followed by the unprefixed name
// If a hook was provided get the computed value from there
// Otherwise, if a way to get the computed value exists, use that
// Convert "normal" to computed value
// Make numeric if forced or a qualifier was provided and val looks numeric
return pt.test(t)||(t=I(s)),a=ye.cssHooks[t]||ye.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=P(e,t,r)),"normal"===i&&t in ht&&(i=ht[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),ye.each(["height","width"],function(e,t){ye.cssHooks[t]={get:function(e,n,r){if(n)
// Certain elements can have dimension info if we invisibly show them
// but it must have a current display style that would benefit
// Support: Safari 8+
// Table columns in Safari have non-zero offsetWidth & zero
// getBoundingClientRect().width unless display is changed.
// Support: IE <=11 only
// Running getBoundingClientRect on a disconnected node
// in IE throws an error.
return!ft.test(ye.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?B(e,t,r):Ue(e,dt,function(){return B(e,t,r)})},set:function(e,n,r){var i,o=r&&ct(e),a=r&&$(e,t,r,"border-box"===ye.css(e,"boxSizing",!1,o),o);
// Convert to pixels if value adjustment is needed
return a&&(i=_e.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=ye.css(e,t)),W(e,n,a)}}}),ye.cssHooks.marginLeft=R(me.reliableMarginLeft,function(e,t){if(t)return(parseFloat(P(e,"marginLeft"))||e.getBoundingClientRect().left-Ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),
// These hooks are used by animate to expand properties
ye.each({margin:"",padding:"",border:"Width"},function(e,t){ye.cssHooks[e+t]={expand:function(n){for(var r=0,i={},
// Assumes a single number if not a string
o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+ze[r]+t]=o[r]||o[r-2]||o[0];return i}},ut.test(e)||(ye.cssHooks[e+t].set=W)}),ye.fn.extend({css:function(e,t){return Pe(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=ct(e),i=t.length;a<i;a++)o[t[a]]=ye.css(e,t[a],!1,r);return o}return void 0!==n?ye.style(e,t,n):ye.css(e,t)},e,t,arguments.length>1)}}),ye.Tween=_,_.prototype={constructor:_,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||ye.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(ye.cssNumber[n]?"":"px")},cur:function(){var e=_.propHooks[this.prop];return e&&e.get?e.get(this):_.propHooks._default.get(this)},run:function(e){var t,n=_.propHooks[this.prop];return this.options.duration?this.pos=t=ye.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):_.propHooks._default.set(this),this}},_.prototype.init.prototype=_.prototype,_.propHooks={_default:{get:function(e){var t;
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Use a property on the element directly when it is not a DOM element,
// or when there is no matching style property that exists.
// Passing an empty string as a 3rd parameter to .css will automatically
// attempt a parseFloat and fallback to a string if the parse fails.
// Simple values such as "10px" are parsed to Float;
// complex values such as "rotate(1rad)" are returned as-is.
return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=ye.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){
// Use step hook for back compat.
// Use cssHook if its there.
// Use .style if available and use plain properties where available.
ye.fx.step[e.prop]?ye.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[ye.cssProps[e.prop]]&&!ye.cssHooks[e.prop]?e.elem[e.prop]=e.now:ye.style(e.elem,e.prop,e.now+e.unit)}}},
// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
_.propHooks.scrollTop=_.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},ye.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},ye.fx=_.prototype.init,
// Back compat <1.8 extension point
ye.fx.step={};var mt,yt,xt=/^(?:toggle|show|hide)$/,bt=/queueHooks$/;ye.Animation=ye.extend(Q,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return x(n.elem,e,_e.exec(t),n),n}]},tweener:function(e,t){ye.isFunction(e)?(t=e,e=["*"]):e=e.match(He);for(var n,r=0,i=e.length;r<i;r++)n=e[r],Q.tweeners[n]=Q.tweeners[n]||[],Q.tweeners[n].unshift(t)},prefilters:[G],prefilter:function(e,t){t?Q.prefilters.unshift(e):Q.prefilters.push(e)}}),ye.speed=function(e,t,n){var r=e&&"object"==typeof e?ye.extend({},e):{complete:n||!n&&t||ye.isFunction(e)&&e,duration:e,easing:n&&t||t&&!ye.isFunction(t)&&t};
// Go to the end state if fx are off
// Normalize opt.queue - true/undefined/null -> "fx"
// Queueing
return ye.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in ye.fx.speeds?r.duration=ye.fx.speeds[r.duration]:r.duration=ye.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){ye.isFunction(r.old)&&r.old.call(this),r.queue&&ye.dequeue(this,r.queue)},r},ye.fn.extend({fadeTo:function(e,t,n,r){
// Show any hidden elements after setting opacity to 0
return this.filter(Xe).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=ye.isEmptyObject(e),o=ye.speed(t,n,r),a=function(){
// Operate on a copy of prop so per-property easing won't be lost
var t=Q(this,ye.extend({},e),o);
// Empty animations, or finishing resolves immediately
(i||Me.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=ye.timers,a=Me.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&bt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));
// Start the next in the queue if the last step wasn't forced.
// Timers currently will call their complete callbacks, which
// will dequeue but only if they were gotoEnd.
!t&&n||ye.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=Me.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=ye.timers,a=r?r.length:0;
// Look for any active animations, and finish them
for(
// Enable finishing flag on private data
n.finish=!0,
// Empty the queue first
ye.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
// Look for any animations in the old queue and finish them
for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);
// Turn off finishing flag
delete n.finish})}}),ye.each(["toggle","show","hide"],function(e,t){var n=ye.fn[t];ye.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(U(t,!0),e,r,i)}}),
// Generate shortcuts for custom animations
ye.each({slideDown:U("show"),slideUp:U("hide"),slideToggle:U("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){ye.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),ye.timers=[],ye.fx.tick=function(){var e,t=0,n=ye.timers;for(mt=ye.now();t<n.length;t++)
// Run the timer and safely remove it when done (allowing for external removal)
(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||ye.fx.stop(),mt=void 0},ye.fx.timer=function(e){ye.timers.push(e),ye.fx.start()},ye.fx.interval=13,ye.fx.start=function(){yt||(yt=!0,z())},ye.fx.stop=function(){yt=null},ye.fx.speeds={slow:600,fast:200,
// Default speed
_default:400},
// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
ye.fn.delay=function(e,t){return e=ye.fx?ye.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,r){var i=n.setTimeout(t,e);r.stop=function(){n.clearTimeout(i)}})},function(){var e=ae.createElement("input"),t=ae.createElement("select"),n=t.appendChild(ae.createElement("option"));e.type="checkbox",
// Support: Android <=4.3 only
// Default value for a checkbox should be "on"
me.checkOn=""!==e.value,
// Support: IE <=11 only
// Must access selectedIndex to make default options select
me.optSelected=n.selected,
// Support: IE <=11 only
// An input loses its value after becoming a radio
e=ae.createElement("input"),e.value="t",e.type="radio",me.radioValue="t"===e.value}();var wt,Tt=ye.expr.attrHandle;ye.fn.extend({attr:function(e,t){return Pe(this,ye.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){ye.removeAttr(this,e)})}}),ye.extend({attr:function(e,t,n){var r,i,o=e.nodeType;
// Don't get/set attributes on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fallback to prop when attributes are not supported
// Fallback to prop when attributes are not supported
// Attribute hooks are determined by the lowercase version
// Grab necessary hook if one is defined
return void 0===e.getAttribute?ye.prop(e,t,n):(1===o&&ye.isXMLDoc(e)||(i=ye.attrHooks[t.toLowerCase()]||(ye.expr.match.bool.test(t)?wt:void 0)),void 0!==n?null===n?void ye.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=ye.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!me.radioValue&&"radio"===t&&u(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,
// Attribute names can contain non-HTML whitespace characters
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
i=t&&t.match(He);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),
// Hooks for boolean attributes
wt={set:function(e,t,n){
// Remove boolean attributes when set to false
return!1===t?ye.removeAttr(e,n):e.setAttribute(n,n),n}},ye.each(ye.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Tt[t]||ye.find.attr;Tt[t]=function(e,t,r){var i,o,a=t.toLowerCase();
// Avoid an infinite loop by temporarily removing this function from the getter
return r||(o=Tt[a],Tt[a]=i,i=null!=n(e,t,r)?a:null,Tt[a]=o),i}});var Ct=/^(?:input|select|textarea|button)$/i,Et=/^(?:a|area)$/i;ye.fn.extend({prop:function(e,t){return Pe(this,ye.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[ye.propFix[e]||e]})}}),ye.extend({prop:function(e,t,n){var r,i,o=e.nodeType;
// Don't get/set properties on text, comment and attribute nodes
if(3!==o&&8!==o&&2!==o)
// Fix name and attach hooks
return 1===o&&ye.isXMLDoc(e)||(t=ye.propFix[t]||t,i=ye.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){
// Support: IE <=9 - 11 only
// elem.tabIndex doesn't always return the
// correct value when it hasn't been explicitly set
// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
// Use proper attribute retrieval(#12072)
var t=ye.find.attr(e,"tabindex");return t?parseInt(t,10):Ct.test(e.nodeName)||Et.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),
// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
me.optSelected||(ye.propHooks.selected={get:function(e){/* eslint no-unused-expressions: "off" */
var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){/* eslint no-unused-expressions: "off" */
var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),ye.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){ye.propFix[this.toLowerCase()]=this}),ye.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(ye.isFunction(e))return this.each(function(t){ye(this).addClass(e.call(this,t,K(this)))});if("string"==typeof e&&e)for(t=e.match(He)||[];n=this[u++];)if(i=K(n),r=1===n.nodeType&&" "+J(i)+" "){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");
// Only assign if different to avoid unneeded rendering.
s=J(r),i!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(ye.isFunction(e))return this.each(function(t){ye(this).removeClass(e.call(this,t,K(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof e&&e)for(t=e.match(He)||[];n=this[u++];)if(i=K(n),
// This expression is here for better compressibility (see addClass)
r=1===n.nodeType&&" "+J(i)+" "){for(a=0;o=t[a++];)
// Remove *all* instances
for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");
// Only assign if different to avoid unneeded rendering.
s=J(r),i!==s&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):ye.isFunction(e)?this.each(function(n){ye(this).toggleClass(e.call(this,n,K(this),t),t)}):this.each(function(){var t,r,i,o;if("string"===n)for(
// Toggle individual class names
r=0,i=ye(this),o=e.match(He)||[];t=o[r++];)
// Check each className given, space separated list
i.hasClass(t)?i.removeClass(t):i.addClass(t);else void 0!==e&&"boolean"!==n||(t=K(this),t&&
// Store className if set
Me.set(this,"__className__",t),
// If the element has a class name or if we're passed `false`,
// then remove the whole classname (if there was one, the above saved it).
// Otherwise bring back whatever was previously saved (if anything),
// falling back to the empty string if nothing was stored.
this.setAttribute&&this.setAttribute("class",t||!1===e?"":Me.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+J(K(n))+" ").indexOf(t)>-1)return!0;return!1}});var kt=/\r/g;ye.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=ye.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,ye(this).val()):e,
// Treat null/undefined as ""; convert numbers to string
null==i?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=ye.map(i,function(e){return null==e?"":e+""})),
// If set returns undefined, fall back to normal setting
(t=ye.valHooks[this.type]||ye.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)
// Handle most common string cases
return(t=ye.valHooks[i.type]||ye.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(kt,""):null==n?"":n)}}}),ye.extend({valHooks:{option:{get:function(e){var t=ye.find.attr(e,"value");
// Support: IE <=10 - 11 only
// option.text throws exceptions (#14686, #14858)
// Strip and collapse whitespace
// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
return null!=t?t:J(ye.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],l=a?o+1:i.length;
// Loop through all the selected options
for(r=o<0?l:a?o:0;r<l;r++)
// Support: IE <=9 only
// IE8-9 doesn't update selected after form reset (#2551)
if(n=i[r],(n.selected||r===o)&&
// Don't return options that are disabled or in a disabled optgroup
!n.disabled&&(!n.parentNode.disabled||!u(n.parentNode,"optgroup"))){
// We don't need an array for one selects
if(
// Get the specific value for the option
t=ye(n).val(),a)return t;
// Multi-Selects return an array
s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=ye.makeArray(t),a=i.length;a--;)r=i[a],/* eslint-disable no-cond-assign */
(r.selected=ye.inArray(ye.valHooks.option.get(r),o)>-1)&&(n=!0);
// Force browsers to behave consistently when non-matching value is set
return n||(e.selectedIndex=-1),o}}}}),
// Radios and checkboxes getter/setter
ye.each(["radio","checkbox"],function(){ye.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=ye.inArray(ye(e).val(),t)>-1}},me.checkOn||(ye.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});
// Return jQuery for attributes-only inclusion
var St=/^(?:focusinfocus|focusoutblur)$/;ye.extend(ye.event,{trigger:function(e,t,r,i){var o,a,s,u,l,c,f,p=[r||ae],d=he.call(e,"type")?e.type:e,h=he.call(e,"namespace")?e.namespace.split("."):[];
// Don't do events on text and comment nodes
if(a=s=r=r||ae,3!==r.nodeType&&8!==r.nodeType&&!St.test(d+ye.event.triggered)&&(d.indexOf(".")>-1&&(
// Namespaced trigger; create a regexp to match event type in handle()
h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,
// Caller can pass in a jQuery.Event object, Object, or just an event type string
e=e[ye.expando]?e:new ye.Event(d,"object"==typeof e&&e),
// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
e.isTrigger=i?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,
// Clean up the event in case it is being reused
e.result=void 0,e.target||(e.target=r),
// Clone any incoming data and prepend the event, creating the handler arg list
t=null==t?[e]:ye.makeArray(t,[e]),
// Allow special events to draw outside the lines
f=ye.event.special[d]||{},i||!f.trigger||!1!==f.trigger.apply(r,t))){
// Determine event propagation path in advance, per W3C events spec (#9951)
// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
if(!i&&!f.noBubble&&!ye.isWindow(r)){for(u=f.delegateType||d,St.test(u+d)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a;
// Only add window if we got to document (e.g., not plain obj or detached DOM)
s===(r.ownerDocument||ae)&&p.push(s.defaultView||s.parentWindow||n)}for(
// Fire handlers on the event path
o=0;(a=p[o++])&&!e.isPropagationStopped();)e.type=o>1?u:f.bindType||d,
// jQuery handler
c=(Me.get(a,"events")||{})[e.type]&&Me.get(a,"handle"),c&&c.apply(a,t),(
// Native handler
c=l&&a[l])&&c.apply&&Re(a)&&(e.result=c.apply(a,t),!1===e.result&&e.preventDefault());
// If nobody prevented the default action, do it now
// Call a native DOM method on the target with the same name as the event.
// Don't do default actions on window, that's where global variables be (#6170)
// Don't re-trigger an onFOO event when we call its FOO() method
// Prevent re-triggering of the same event, since we already bubbled it above
return e.type=d,i||e.isDefaultPrevented()||f._default&&!1!==f._default.apply(p.pop(),t)||!Re(r)||l&&ye.isFunction(r[d])&&!ye.isWindow(r)&&(s=r[l],s&&(r[l]=null),ye.event.triggered=d,r[d](),ye.event.triggered=void 0,s&&(r[l]=s)),e.result}},
// Piggyback on a donor event to simulate a different one
// Used only for `focus(in | out)` events
simulate:function(e,t,n){var r=ye.extend(new ye.Event,n,{type:e,isSimulated:!0});ye.event.trigger(r,null,t)}}),ye.fn.extend({trigger:function(e,t){return this.each(function(){ye.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return ye.event.trigger(e,t,n,!0)}}),ye.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){
// Handle event binding
ye.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),ye.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),me.focusin="onfocusin"in n,
// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
me.focusin||ye.each({focus:"focusin",blur:"focusout"},function(e,t){
// Attach a single capturing handler on the document while someone wants focusin/focusout
var n=function(e){ye.event.simulate(t,e.target,ye.event.fix(e))};ye.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Me.access(r,t);i||r.addEventListener(e,n,!0),Me.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Me.access(r,t)-1;i?Me.access(r,t,i):(r.removeEventListener(e,n,!0),Me.remove(r,t))}}});var Nt=n.location,jt=ye.now(),Dt=/\?/;
// Cross-browser xml parsing
ye.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;
// Support: IE 9 - 11 only
// IE throws on parseFromString with invalid input.
try{t=(new n.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||ye.error("Invalid XML: "+e),t};var At=/\[\]$/,qt=/\r?\n/g,Lt=/^(?:submit|button|image|reset|file)$/i,Ht=/^(?:input|select|textarea|keygen)/i;
// Serialize an array of form elements or a set of
// key/values into a query string
ye.param=function(e,t){var n,r=[],i=function(e,t){
// If value is a function, invoke it and use its return value
var n=ye.isFunction(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};
// If an array was passed in, assume that it is an array of form elements.
if(Array.isArray(e)||e.jquery&&!ye.isPlainObject(e))
// Serialize the form elements
ye.each(e,function(){i(this.name,this.value)});else
// If traditional, encode the "old" way (the way 1.3.2 or older
// did it), otherwise encode params recursively.
for(n in e)Z(n,e[n],t,i);
// Return the resulting serialization
return r.join("&")},ye.fn.extend({serialize:function(){return ye.param(this.serializeArray())},serializeArray:function(){return this.map(function(){
// Can add propHook for "elements" to filter or add form elements
var e=ye.prop(this,"elements");return e?ye.makeArray(e):this}).filter(function(){var e=this.type;
// Use .is( ":disabled" ) so that fieldset[disabled] works
return this.name&&!ye(this).is(":disabled")&&Ht.test(this.nodeName)&&!Lt.test(e)&&(this.checked||!Ge.test(e))}).map(function(e,t){var n=ye(this).val();return null==n?null:Array.isArray(n)?ye.map(n,function(e){return{name:t.name,value:e.replace(qt,"\r\n")}}):{name:t.name,value:n.replace(qt,"\r\n")}}).get()}});var Ft=/%20/g,Ot=/#.*$/,Pt=/([?&])_=[^&]*/,Rt=/^(.*?):[ \t]*([^\r\n]*)$/gm,
// #7653, #8125, #8152: local protocol detection
Mt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,It=/^(?:GET|HEAD)$/,Wt=/^\/\//,/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
$t={},/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
Bt={},
// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
_t="*/".concat("*"),
// Anchor tag for parsing the document origin
zt=ae.createElement("a");zt.href=Nt.href,ye.extend({
// Counter for holding the number of active queries
active:0,
// Last-Modified header cache for next request
lastModified:{},etag:{},ajaxSettings:{url:Nt.href,type:"GET",isLocal:Mt.test(Nt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/
accepts:{"*":_t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},
// Data converters
// Keys separate source (or catchall "*") and destination types with a single space
converters:{
// Convert anything to text
"* text":String,
// Text to html (true = no transformation)
"text html":!0,
// Evaluate text as a json expression
"text json":JSON.parse,
// Parse text as xml
"text xml":ye.parseXML},
// For options that shouldn't be deep extended:
// you can add your own custom options here if
// and when you create one that shouldn't be
// deep extended (see ajaxExtend)
flatOptions:{url:!0,context:!0}},
// Creates a full fledged settings object into target
// with both ajaxSettings and settings fields.
// If target is omitted, writes into ajaxSettings.
ajaxSetup:function(e,t){
// Building a settings object
// Extending ajaxSettings
return t?ne(ne(e,ye.ajaxSettings),t):ne(ye.ajaxSettings,e)},ajaxPrefilter:ee($t),ajaxTransport:ee(Bt),
// Main method
ajax:function(e,t){
// Callback for when everything is done
function r(e,t,r,s){var l,p,d,b,w,T=t;
// Ignore repeat invocations
c||(c=!0,
// Clear timeout if it exists
u&&n.clearTimeout(u),
// Dereference transport for early garbage collection
// (no matter how long the jqXHR object will be used)
i=void 0,
// Cache response headers
a=s||"",
// Set readyState
C.readyState=e>0?4:0,
// Determine if successful
l=e>=200&&e<300||304===e,
// Get response data
r&&(b=re(h,C,r)),
// Convert no matter what (that way responseXXX fields are always set)
b=ie(h,b,C,l),
// If successful, handle type chaining
l?(
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
h.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(ye.lastModified[o]=w),(w=C.getResponseHeader("etag"))&&(ye.etag[o]=w)),
// if no content
204===e||"HEAD"===h.type?T="nocontent":304===e?T="notmodified":(T=b.state,p=b.data,d=b.error,l=!d)):(
// Extract error from statusText and normalize for non-aborts
d=T,!e&&T||(T="error",e<0&&(e=0))),
// Set data for the fake xhr object
C.status=e,C.statusText=(t||T)+"",
// Success/Error
l?m.resolveWith(g,[p,T,C]):m.rejectWith(g,[C,T,d]),
// Status-dependent callbacks
C.statusCode(x),x=void 0,f&&v.trigger(l?"ajaxSuccess":"ajaxError",[C,h,l?p:d]),
// Complete
y.fireWith(g,[C,T]),f&&(v.trigger("ajaxComplete",[C,h]),
// Handle the global AJAX counter
--ye.active||ye.event.trigger("ajaxStop")))}
// If url is an object, simulate pre-1.5 signature
"object"==typeof e&&(t=e,e=void 0),
// Force options to be an object
t=t||{};var i,
// URL without anti-cache param
o,
// Response headers
a,s,
// timeout handle
u,
// Url cleanup var
l,
// Request state (becomes false upon send and true upon completion)
c,
// To know if global events are to be dispatched
f,
// Loop variable
p,
// uncached part of the url
d,
// Create the final options object
h=ye.ajaxSetup({},t),
// Callbacks context
g=h.context||h,
// Context for global events is callbackContext if it is a DOM node or jQuery collection
v=h.context&&(g.nodeType||g.jquery)?ye(g):ye.event,
// Deferreds
m=ye.Deferred(),y=ye.Callbacks("once memory"),
// Status-dependent callbacks
x=h.statusCode||{},
// Headers (they are sent all at once)
b={},w={},
// Default abort message
T="canceled",
// Fake xhr
C={readyState:0,
// Builds headers hashtable if needed
getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=Rt.exec(a);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},
// Raw string
getAllResponseHeaders:function(){return c?a:null},
// Caches the header
setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},
// Overrides response content-type header
overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},
// Status-dependent callbacks
statusCode:function(e){var t;if(e)if(c)
// Execute the appropriate callbacks
C.always(e[C.status]);else
// Lazy-add the new callbacks in a way that preserves old ones
for(t in e)x[t]=[x[t],e[t]];return this},
// Cancel the request
abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};
// A cross-domain request is in order when the origin doesn't match the current origin.
if(
// Attach deferreds
m.promise(C),
// Add protocol if not provided (prefilters might expect it)
// Handle falsy url in the settings object (#10093: consistency with old signature)
// We also use the url parameter if available
h.url=((e||h.url||Nt.href)+"").replace(Wt,Nt.protocol+"//"),
// Alias method option to type as per ticket #12004
h.type=t.method||t.type||h.method||h.type,
// Extract dataTypes list
h.dataTypes=(h.dataType||"*").toLowerCase().match(He)||[""],null==h.crossDomain){l=ae.createElement("a");
// Support: IE <=8 - 11, Edge 12 - 13
// IE throws exception on accessing the href property if url is malformed,
// e.g. http://example.com:80x/
try{l.href=h.url,
// Support: IE <=8 - 11 only
// Anchor's host property isn't correctly set when s.url is relative
l.href=l.href,h.crossDomain=zt.protocol+"//"+zt.host!=l.protocol+"//"+l.host}catch(e){
// If there is an error parsing the URL, assume it is crossDomain,
// it can be rejected by the transport if it is invalid
h.crossDomain=!0}}
// If request was aborted inside a prefilter, stop there
if(
// Convert data if not already a string
h.data&&h.processData&&"string"!=typeof h.data&&(h.data=ye.param(h.data,h.traditional)),
// Apply prefilters
te($t,h,t,C),c)return C;
// We can fire global events as of now if asked to
// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
f=ye.event&&h.global,
// Watch for a new set of requests
f&&0==ye.active++&&ye.event.trigger("ajaxStart"),
// Uppercase the type
h.type=h.type.toUpperCase(),
// Determine if request has content
h.hasContent=!It.test(h.type),
// Save the URL in case we're toying with the If-Modified-Since
// and/or If-None-Match header later on
// Remove hash to simplify url manipulation
o=h.url.replace(Ot,""),
// More options handling for requests with no content
h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(Ft,"+")):(
// Remember the hash so we can put it back
d=h.url.slice(o.length),
// If data is available, append data to url
h.data&&(o+=(Dt.test(o)?"&":"?")+h.data,
// #9682: remove data so that it's not used in an eventual retry
delete h.data),
// Add or update anti-cache param if needed
!1===h.cache&&(o=o.replace(Pt,"$1"),d=(Dt.test(o)?"&":"?")+"_="+jt+++d),
// Put hash and anti-cache on the URL that will be requested (gh-1732)
h.url=o+d),
// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
h.ifModified&&(ye.lastModified[o]&&C.setRequestHeader("If-Modified-Since",ye.lastModified[o]),ye.etag[o]&&C.setRequestHeader("If-None-Match",ye.etag[o])),
// Set the correct header, if data is being sent
(h.data&&h.hasContent&&!1!==h.contentType||t.contentType)&&C.setRequestHeader("Content-Type",h.contentType),
// Set the Accepts header for the server, depending on the dataType
C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+_t+"; q=0.01":""):h.accepts["*"]);
// Check for headers option
for(p in h.headers)C.setRequestHeader(p,h.headers[p]);
// Allow custom headers/mimetypes and early abort
if(h.beforeSend&&(!1===h.beforeSend.call(g,C,h)||c))
// Abort if not done already and return
return C.abort();
// If no transport, we auto-abort
if(
// Aborting is no longer a cancellation
T="abort",
// Install callbacks on deferreds
y.add(h.complete),C.done(h.success),C.fail(h.error),
// Get transport
i=te(Bt,h,t,C)){
// If request was aborted inside ajaxSend, stop there
if(C.readyState=1,
// Send global event
f&&v.trigger("ajaxSend",[C,h]),c)return C;
// Timeout
h.async&&h.timeout>0&&(u=n.setTimeout(function(){C.abort("timeout")},h.timeout));try{c=!1,i.send(b,r)}catch(e){
// Rethrow post-completion exceptions
if(c)throw e;
// Propagate others as results
r(-1,e)}}else r(-1,"No Transport");return C},getJSON:function(e,t,n){return ye.get(e,t,n,"json")},getScript:function(e,t){return ye.get(e,void 0,t,"script")}}),ye.each(["get","post"],function(e,t){ye[t]=function(e,n,r,i){
// The url can be an options object (which then must have .url)
// Shift arguments if data argument was omitted
return ye.isFunction(n)&&(i=i||r,r=n,n=void 0),ye.ajax(ye.extend({url:e,type:t,dataType:i,data:n,success:r},ye.isPlainObject(e)&&e))}}),ye._evalUrl=function(e){return ye.ajax({url:e,
// Make this explicit, since user can override this through ajaxSetup (#11264)
type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},ye.fn.extend({wrapAll:function(e){var t;
// The elements to wrap the target around
return this[0]&&(ye.isFunction(e)&&(e=e.call(this[0])),t=ye(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return ye.isFunction(e)?this.each(function(t){ye(this).wrapInner(e.call(this,t))}):this.each(function(){var t=ye(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=ye.isFunction(e);return this.each(function(n){ye(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){ye(this).replaceWith(this.childNodes)}),this}}),ye.expr.pseudos.hidden=function(e){return!ye.expr.pseudos.visible(e)},ye.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},ye.ajaxSettings.xhr=function(){try{return new n.XMLHttpRequest}catch(e){}};var Xt={
// File protocol always yields status code 0, assume 200
0:200,
// Support: IE <=9 only
// #1450: sometimes IE returns 1223 when it should be 204
1223:204},Ut=ye.ajaxSettings.xhr();me.cors=!!Ut&&"withCredentials"in Ut,me.ajax=Ut=!!Ut,ye.ajaxTransport(function(e){var t,r;
// Cross domain only allowed if supported through XMLHttpRequest
if(me.cors||Ut&&!e.crossDomain)return{send:function(i,o){var a,s=e.xhr();
// Apply custom fields if provided
if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(a in e.xhrFields)s[a]=e.xhrFields[a];
// Override mime type if needed
e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),
// X-Requested-With header
// For cross-domain requests, seeing as conditions for a preflight are
// akin to a jigsaw puzzle, we simply never set it to be sure.
// (it can always be set on a per-request basis or even using ajaxSetup)
// For same-domain requests, won't change header if already provided.
e.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");
// Set headers
for(a in i)s.setRequestHeader(a,i[a]);
// Callback
t=function(e){return function(){t&&(t=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?
// Support: IE <=9 only
// On a manual native abort, IE9 throws
// errors on any property access that is not readyState
"number"!=typeof s.status?o(0,"error"):o(
// File: protocol always yields status 0; see #8605, #14207
s.status,s.statusText):o(Xt[s.status]||s.status,s.statusText,
// Support: IE <=9 only
// IE9 has no XHR2 but throws on binary (trac-11426)
// For XHR2 non-text, let the caller handle it (gh-2498)
"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},
// Listen to events
s.onload=t(),r=s.onerror=t("error"),
// Support: IE 9 only
// Use onreadystatechange to replace onabort
// to handle uncaught aborts
void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){
// Check readyState before timeout as it changes
4===s.readyState&&
// Allow onerror to be called first,
// but that will not handle a native abort
// Also, save errorCallback to a variable
// as xhr.onerror cannot be accessed
n.setTimeout(function(){t&&r()})},
// Create the abort callback
t=t("abort");try{
// Do send the request (this may raise an exception)
s.send(e.hasContent&&e.data||null)}catch(e){
// #14683: Only rethrow if this hasn't been notified as an error yet
if(t)throw e}},abort:function(){t&&t()}}}),
// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
ye.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),
// Install script dataType
ye.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return ye.globalEval(e),e}}}),
// Handle cache's special case and crossDomain
ye.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),
// Bind script tag hack transport
ye.ajaxTransport("script",function(e){
// This transport only deals with cross domain requests
if(e.crossDomain){var t,n;return{send:function(r,i){t=ye("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),
// Use native DOM manipulation to avoid our domManip AJAX trickery
ae.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Vt=[],Gt=/(=)\?(?=&|$)|\?\?/;
// Default jsonp settings
ye.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Vt.pop()||ye.expando+"_"+jt++;return this[e]=!0,e}}),
// Detect, normalize options and install callbacks for jsonp requests
ye.ajaxPrefilter("json jsonp",function(e,t,r){var i,o,a,s=!1!==e.jsonp&&(Gt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gt.test(e.data)&&"data");
// Handle iff the expected data type is "jsonp" or we have a parameter to set
if(s||"jsonp"===e.dataTypes[0])
// Delegate to script
// Get callback name, remembering preexisting value associated with it
// Insert callback into url or form data
// Use data converter to retrieve json after script execution
// Force json dataType
// Install callback
// Clean-up function (fires after converters)
return i=e.jsonpCallback=ye.isFunction(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Gt,"$1"+i):!1!==e.jsonp&&(e.url+=(Dt.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return a||ye.error(i+" was not called"),a[0]},e.dataTypes[0]="json",o=n[i],n[i]=function(){a=arguments},r.always(function(){
// If previous value didn't exist - remove it
void 0===o?ye(n).removeProp(i):n[i]=o,
// Save back as free
e[i]&&(
// Make sure that re-using the options doesn't screw things around
e.jsonpCallback=t.jsonpCallback,
// Save the callback name for future use
Vt.push(i)),
// Call if it was a function and we have a response
a&&ye.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),
// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
me.createHTMLDocument=function(){var e=ae.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),
// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
ye.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var r,i,o;
// Single tag
// Stop scripts or inline event handlers from being executed immediately
// by using document.implementation
// Set the base href for the created document
// so any parsed elements with URLs
// are based on the document's URL (gh-2965)
// Single tag
return t||(me.createHTMLDocument?(t=ae.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=ae.location.href,t.head.appendChild(r)):t=ae),i=Ne.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=E([e],t,o),o&&o.length&&ye(o).remove(),ye.merge([],i.childNodes))},/**
 * Load a url into a page
 */
ye.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");
// If it's a function
// We assume that it's the callback
// If we have elements to modify, make the request
return s>-1&&(r=J(e.slice(s)),e=e.slice(0,s)),ye.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&ye.ajax({url:e,
// If "type" variable is undefined, then "GET" method will be used.
// Make value of this field explicit since
// user can override it through ajaxSetup method
type:i||"GET",dataType:"html",data:t}).done(function(e){
// Save response for use in complete callback
o=arguments,a.html(r?
// If a selector was specified, locate the right elements in a dummy div
// Exclude scripts to avoid IE 'Permission Denied' errors
ye("<div>").append(ye.parseHTML(e)).find(r):
// Otherwise use the full result
e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},
// Attach a bunch of functions for handling common AJAX events
ye.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){ye.fn[t]=function(e){return this.on(t,e)}}),ye.expr.pseudos.animated=function(e){return ye.grep(ye.timers,function(t){return e===t.elem}).length},ye.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=ye.css(e,"position"),f=ye(e),p={};
// Set position first, in-case top/left are set even on static elem
"static"===c&&(e.style.position="relative"),s=f.offset(),o=ye.css(e,"top"),u=ye.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,
// Need to be able to calculate position if either
// top or left is auto and position is either absolute or fixed
l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),ye.isFunction(t)&&(
// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
t=t.call(e,n,ye.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},ye.fn.extend({offset:function(e){
// Preserve chaining for setter
if(arguments.length)return void 0===e?this:this.each(function(t){ye.offset.setOffset(this,e,t)});var t,n,r,i,o=this[0];if(o)
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
// Support: IE <=11 only
// Running getBoundingClientRect on a
// disconnected node in IE throws an error
return o.getClientRects().length?(r=o.getBoundingClientRect(),t=o.ownerDocument,n=t.documentElement,i=t.defaultView,{top:r.top+i.pageYOffset-n.clientTop,left:r.left+i.pageXOffset-n.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};
// Subtract parent offsets and element margins
// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
// because it is its only offset parent
// Assume getBoundingClientRect is there when computed position is fixed
// Get *real* offsetParent
// Get correct offsets
// Add offsetParent borders
return"fixed"===ye.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),u(e[0],"html")||(r=e.offset()),r={top:r.top+ye.css(e[0],"borderTopWidth",!0),left:r.left+ye.css(e[0],"borderLeftWidth",!0)}),{top:t.top-r.top-ye.css(n,"marginTop",!0),left:t.left-r.left-ye.css(n,"marginLeft",!0)}}},
// This method will return documentElement in the following cases:
// 1) For the element inside the iframe without offsetParent, this method will return
//    documentElement of the parent window
// 2) For the hidden or detached element
// 3) For body or html element, i.e. in case of the html node - it will return itself
//
// but those exceptions were never presented as a real life use-cases
// and might be considered as more preferable results.
//
// This logic, however, is not guaranteed and can change at any point in the future
offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===ye.css(e,"position");)e=e.offsetParent;return e||Ze})}}),
// Create scrollLeft and scrollTop methods
ye.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;ye.fn[e]=function(r){return Pe(this,function(e,r,i){
// Coalesce documents and windows
var o;if(ye.isWindow(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),
// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
ye.each(["top","left"],function(e,t){ye.cssHooks[t]=R(me.pixelPosition,function(e,n){if(n)
// If curCSS returns percentage, fallback to offset
return n=P(e,t),lt.test(n)?ye(e).position()[t]+"px":n})}),
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
ye.each({Height:"height",Width:"width"},function(e,t){ye.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){
// Margin is only for outerHeight, outerWidth
ye.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return Pe(this,function(t,n,i){var o;
// Get document width or height
// Get width or height on the element, requesting but not forcing parseFloat
// Set width or height on the element
return ye.isWindow(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?ye.css(t,n,s):ye.style(t,n,i,s)},t,a?i:void 0,a)}})}),ye.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){
// ( namespace ) or ( selector, types [, fn] )
return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),ye.holdReady=function(e){e?ye.readyWait++:ye.ready(!0)},ye.isArray=Array.isArray,ye.parseJSON=JSON.parse,ye.nodeName=u,r=[],void 0!==(i=function(){return ye}.apply(t,r))&&(e.exports=i);var
// Map over jQuery in case of overwrite
Yt=n.jQuery,
// Map over the $ in case of overwrite
Qt=n.$;
// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
return ye.noConflict=function(e){return n.$===ye&&(n.$=Qt),e&&n.jQuery===ye&&(n.jQuery=Yt),ye},o||(n.jQuery=n.$=ye),ye})},/***/
0:/*!********************!*\
  !*** multi jquery ***!
  \********************/
/*! no static exports found */
/*! all exports used */
/***/
function(e,t,n){e.exports=n(/*! jquery */"./node_modules/jquery/dist/jquery.js")}},[0]);