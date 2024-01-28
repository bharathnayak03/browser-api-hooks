var $8zHUo$react = require("react");


function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "useGeolocation", () => $e43c68849ba4255b$export$2e2bcd8739ae039);

let $e43c68849ba4255b$var$position = null;
// This function is used to subscribe to the geolocation updates
function $e43c68849ba4255b$var$subscribe(callback) {
    const watchId = navigator.geolocation.watchPosition((newPosition)=>{
        callback();
        $e43c68849ba4255b$var$position = newPosition;
    }, ()=>{
        callback();
        $e43c68849ba4255b$var$position = null;
    });
    // Return a function to unsubscribe from the geolocation updates
    return ()=>navigator.geolocation.clearWatch(watchId);
}
// This function is used to get the current geolocation state
function $e43c68849ba4255b$var$getSnapshot() {
    return $e43c68849ba4255b$var$position;
}
function $e43c68849ba4255b$var$useGeolocation() {
    // Use useSyncExternalStore to subscribe to the geolocation updates
    const position = (0, $8zHUo$react.useSyncExternalStore)($e43c68849ba4255b$var$subscribe, $e43c68849ba4255b$var$getSnapshot);
    return position;
}
var $e43c68849ba4255b$export$2e2bcd8739ae039 = $e43c68849ba4255b$var$useGeolocation;




//# sourceMappingURL=index.js.map
