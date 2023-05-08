/* Abstract Class */
//what's the difference between interface and abstract class?


abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract scanning(): void
}

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public brand: string
    ){
        super(cameraMode, filter)
    }

    scanning(): void {
        console.log(`app is scanning`);
    }
}