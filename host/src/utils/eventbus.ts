import Eventverse from "eventverse";

const hostEventManager = new Eventverse(25);

const subscriber = (message: any) => {
    console.log('[HOST] -> ', message);
};

hostEventManager.on('loaded', subscriber);