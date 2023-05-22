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
const apps = {
  quayngaytrungthuong: "",
  vuicung_bsport: "",
  vongquay_bsport: "",
  BSport: "",
  thamgia_bsport: "",
  choigamecung_BSport: "",
};

/**
 * Gameplay
 */
ScreenGamePlay = {
  createSceen: () => {
    createContent();
    // createBtnSound(12, 7, 85, -90);
    let spinWheel = {
      0: 20,
      1: 50,
      2: 0,
      3: 20,
      4: 200,
      5: 50,
      6: 0,
      7: 150,
      8: 100,
      9: 0,
    };
    drawButton($gameSystem._DOMdivContent, "btnPlay", "Quay", "btn", 0, 35);
    $("#btnPlay").tap(async function () {
      if ($gameScreen._pictures[1]._rotationSpeed == 0) {
        let speed = getRndInteger(1, 100);
        let interval = setInterval(() => {
          $gameScreen._pictures[1]._rotationSpeed += 1;
          if ($gameScreen._pictures[1]._rotationSpeed == speed) {
            clearInterval(interval);
            setTimeout(() => {
              let interval2 = setInterval(() => {
                $gameScreen._pictures[1]._rotationSpeed--;
                if ($gameScreen._pictures[1]._rotationSpeed == 0) {
                  clearInterval(interval2);
                  let a = $gameScreen._pictures[1]._angle / 360;
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
                  } else {
                    msg = "Bạn nhận được " + res + "K";
                  }
                  showPopup(msg);
                }
              }, 100);
            }, 3000);
          }
        }, 100);
      }
    });
    $gameSystem._DOMdivContent.style.background = "none";
    $gameScreen.showPicture(
      1,
      "wheel",
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
      "arrow",
      1,
      Graphics.width / 2 + 250,
      Graphics.height / 2,
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
