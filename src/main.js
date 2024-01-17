
let frame = 144;
let counter = 0;

let frame2 = 128;
let counter2 = 0;
let anim = false;

// Update is called once per frame
exports.update = function () {
    cls();
	print(frame);
    print(" " + frame2);
    sprite(frame, 4, 6);
    sprite(frame2, 15, 10);

    moveAnim();
    countFramesDelay();

    if (anim) {
        doAnim();
        countFrames2Delay();
    }

};

function moveAnim() {
    if (btn.down) { // down arrow key
        if (counter === 0) {
            frame += 1;
        }
        if ((frame - 1) % 149 === 0) {
            frame = 144;
        }
    }

    if (btnr.down) {
        frame = 144; // reset frame but should be used depending on type of animation
    }

    if (btnp.right) { // right arrow key
        anim = true; // animate once
        //anim = !anim; // toggle
    }
}

function countFramesDelay() {
    counter += 1;

    if (counter % 10 === 0) {
        counter = 0;
    }
}

function countFrames2Delay() {
    counter2 += 1;

    if (counter2 % 10 === 0) {
        counter2 = 0;
    }
}

function doAnim() {
    if (counter2 === 0) {
        frame2 += 1;
    }

    if ((frame2 - 1) % 133 === 0) {
        frame2 = 128;
        anim = false; // animate once
    }
}