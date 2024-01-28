import { useSyncExternalStore } from "react";

let position: GeolocationPosition | null = null;
// This function is used to subscribe to the geolocation updates
function subscribe(callback: () => void) {
    const watchId = navigator.geolocation.watchPosition(
        (newPosition) => {
            callback();
            position = newPosition;
        },
        () => {
            callback();
            position = null;
        }
    );

    // Return a function to unsubscribe from the geolocation updates
    return () => navigator.geolocation.clearWatch(watchId);
}

// This function is used to get the current geolocation state
function getSnapshot() {
    return position;
}

function useGeolocation(): GeolocationPosition | null {
    // Use useSyncExternalStore to subscribe to the geolocation updates
    const position = useSyncExternalStore(subscribe, getSnapshot);

    return position;
}


export default useGeolocation
