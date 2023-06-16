var Imported = Imported || {};
Imported.Index = true;

//=============================================================================
/*:
 *
 * @plugindesc
 *<Index>
 *
 * @param color
 * @desc
 * @type text
 * @default
 *
 * @param hue
 * @desc
 * @type text
 * @default
 *
 * @param bannerHeight
 * @desc
 * @type number
 * @default 15
 *
 */
var parameters = PluginManager.parameters("Index");

/**
 * Menu
 */

/**
 * Gameplay
 */
ScreenGamePlay = {
  createSceen: () => {
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
    // }
    var urlParams = new URLSearchParams(window.location.search);
    var link = urlParams.get("link");
    createContent();
    // createBtnSound(12, 7, 85, -90);
    let spinWheel = {
      0: 20,
      1: 0,
      2: 50,
      3: 0,
      4: 100,
      5: 0,
      6: 150,
      7: 0,
      8: 200,
      9: 0,
    };
    let btnPlay = drawImgButton(
      $gameSystem._DOMdivContent,
      "btnPlay",
      "",
      "8",
      0,
      70
    );
    let btnDisablePlay = drawImgButton(
      $gameSystem._DOMdivContent,
      "btnDisablePlay",
      "",
      "9",
      0,
      70
    );
    btnDisablePlay.style.visibility = "hidden";
    // drawButton($gameSystem._DOMdivContent, "btnPlay", "Quay", "btn", 0, 70);
    $("#btnPlay").tap(async function () {
      if ($gameScreen._pictures[2]._rotationSpeed == 0) {
        btnPlay.style.visibility = "hidden";
        btnDisablePlay.style.visibility = "visible";
        let speed = getRndInteger(1, 100);
        let interval = setInterval(() => {
          $gameScreen._pictures[2]._rotationSpeed += 1;
          if ($gameScreen._pictures[2]._rotationSpeed == speed) {
            clearInterval(interval);
            setTimeout(() => {
              let interval2 = setInterval(() => {
                $gameScreen._pictures[2]._rotationSpeed--;
                if ($gameScreen._pictures[2]._rotationSpeed == 0) {
                  clearInterval(interval2);
                  let a = $gameScreen._pictures[2]._angle / 360;
                  let n = (10 - a * 10) % 10;
                  if (-n > parseInt(-n) + 0.5) {
                    n = Math.floor(n);
                  } else {
                    n = parseInt(n);
                  }
                  let res = spinWheel[10 + n];
                  let msg = "";
                  if (res == 0 || !res) {
                    msg = "Chúc bạn may mắn lần sau";
                    showPopup(msg);
                  } else {
                    // msg = "Bạn nhận được " + res + "K";
                    showPopupResult(res + "", link);
                  }

                  btnPlay.style.visibility = "visible";
                  btnDisablePlay.style.visibility = "hidden";
                }
              }, 100);
            }, 3000);
          }
        }, 100);
      } else {
        btnPlay.style.visibility = "visible";
        btnDisablePlay.style.visibility = "hidden";
      }
    });
    $gameSystem._DOMdivContent.style.background = "none";
    $gameScreen.showPicture(
      1,
      "SPIN MACHINE",
      1,
      Graphics.width / 2,
      Graphics.height / 2,
      100,
      100,
      255,
      0
    );

    $gameScreen.showPicture(
      2,
      "wheel",
      1,
      Graphics.width / 2,
      Graphics.height / 2 - 25,
      98,
      98,
      255,
      0
    );

    $gameScreen.showPicture(
      3,
      "Wheel_UP",
      1,
      Graphics.width / 2,
      Graphics.height / 2 - 25,
      98,
      98,
      255,
      0
    );

    $gameScreen.showPicture(
      4,
      "arrow",
      1,
      Graphics.width / 2,
      Graphics.height / 2 - 225,
      100,
      100,
      255,
      0
    );
  },
};

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
