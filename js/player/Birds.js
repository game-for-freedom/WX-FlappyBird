import {Sprite} from "../base/Sprite.js";
import {DataStore} from "../base/DataStore.js";

export class Birds extends Sprite {
    constructor() {
        const image = Sprite.getImage('birds');
        super(image, 0, 0, image.width, image.height,
            0, 0, image.width, image.height);

        // 使用静态图片，设置鸟的尺寸
        const birdWidth = 50;  // 可以根据实际图片调整大小
        const birdHeight = 50; // 可以根据实际图片调整大小
        const birdX = DataStore.getInstance().canvas.width / 4;
        const birdY = DataStore.getInstance().canvas.height / 2;
        
        this.birdX = birdX;
        this.birdY = birdY;
        this.birdWidth = birdWidth;
        this.birdHeight = birdHeight;
        this.y = birdY;
        this.time = 0;
    }

    draw() {
        const g = 0.98 / 2.4;
        const offsetUp = 28;

        const offsetY = (g * this.time * (this.time - offsetUp)) / 2;
        this.birdY = this.y + offsetY;
        this.time++;

        // 绘制完整的静态图片，不进行裁剪
        super.draw(
            this.img,
            0, 0,
            this.img.width, this.img.height,
            this.birdX, this.birdY,
            this.birdWidth, this.birdHeight
        );
    }


}