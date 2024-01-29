var $8zHUo$react = require("react");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useGeolocation", () => $519c0367bbf494b4$export$2e2bcd8739ae039);

let $519c0367bbf494b4$var$position = null;
// This function is used to subscribe to the geolocation updates
function $519c0367bbf494b4$var$subscribe(callback) {
    const watchId = navigator.geolocation.watchPosition((newPosition)=>{
        callback();
        $519c0367bbf494b4$var$position = newPosition;
    }, ()=>{
        callback();
        $519c0367bbf494b4$var$position = null;
    });
    // Return a function to unsubscribe from the geolocation updates
    return ()=>navigator.geolocation.clearWatch(watchId);
}
// This function is used to get the current geolocation state
function $519c0367bbf494b4$var$getSnapshot() {
    return $519c0367bbf494b4$var$position;
}
function $519c0367bbf494b4$var$useGeolocation() {
    // Use useSyncExternalStore to subscribe to the geolocation updates
    const position = (0, $8zHUo$react.useSyncExternalStore)($519c0367bbf494b4$var$subscribe, $519c0367bbf494b4$var$getSnapshot);
    return position;
}
var $519c0367bbf494b4$export$2e2bcd8739ae039 = $519c0367bbf494b4$var$useGeolocation;




//# sourceMappingURL=index.js.map
