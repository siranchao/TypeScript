"use strict";
/* Abstract Class */
//what's the difference between interface and abstract class?
class TakePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Instagram extends TakePhoto {
    constructor(cameraMode, filter, brand) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.brand = brand;
    }
    scanning() {
        console.log(`app is scanning`);
    }
}
