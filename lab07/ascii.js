(function() {
    let timeId;
    let prvVal;
    let stop;
    const NORMALSPEED = 250;
    const TURBOSPEED = 50;
    let timeInterval = NORMALSPEED;
    let text;
    let idx;

    function changeContent() {
        document.getElementById('txtarea').value = text[idx];
        idx = (idx + 1) % text.length;
        if (!stop)
            setTimeout(changeContent, timeInterval);
    };

    function disableInputs(truth) {
        document.getElementById('start').disabled = truth;
        document.getElementById('stop').disabled = !truth;
        document.getElementById('animation').disabled = truth;
        document.getElementById('txtarea').readOnly = truth;
    };

    function startClick() {
        prvVal = document.getElementById('txtarea').value;
        text = prvVal.split("=====\n");
        idx = 0;
        stop = false;
        setTimeout(changeContent, timeInterval);
        disableInputs(true);
    };

    function stopClick() {
        stop = true;
        setTimeout(function() {
            document.getElementById('txtarea').value = prvVal;
        }, timeInterval);
        disableInputs(false);
    };

    function animationChange() {
        let animType = document.getElementById('animation').value;
        document.getElementById('txtarea').value = ANIMATIONS[animType];
    }

    function speedChange() {
        if (document.getElementById('turbo').checked) {
            timeInterval = TURBOSPEED;
        } else
            timeInterval = NORMALSPEED;
    }

    function sizeChange() {
        document.getElementById('txtarea').style.fontSize = document
            .getElementById('fontsize').value;
    }

    window.onload = function() {
        document.getElementById('start').onclick = startClick;
        document.getElementById('stop').onclick = stopClick;
        document.getElementById('animation').onchange = animationChange;
        document.getElementById('turbo').onchange = speedChange;
        document.getElementById('fontsize').onchange = sizeChange;
    };
})();