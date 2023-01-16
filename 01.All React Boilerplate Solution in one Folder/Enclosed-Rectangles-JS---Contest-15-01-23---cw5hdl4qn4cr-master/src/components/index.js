function isNum(value) {
  return parseInt(value, 10);
}

function copyProperties(src, target, obj) {
  for (const key in src) {
    if (key == "children" || key == "width" || key == "height") {
      target[key] = obj[key];
    } else {
      target[key] = Math.abs(src[key]).toString() + "px";
    }
  }
}
function updateStructure(recA, recB) {
  console.log(
    "------------------------------------------------------------------------called now------------------------------------------------------------------------"
  );
  console.log(recA);
  console.log(recB);
  //write your code
  var delta = {}; //map
  for (const key in recA) {
    if (key == "children") {
      delta[key] = recA[key];
    } else {
      delta[key] = isNum(recA[key]) - isNum(recB[key]);
    }
  }
  // console.log(delta);
  // If height & width exists
  const children = {};
  if (recA.height && recA.width) {
    console.log("height & width exists");
    if (delta.height >= 0 && delta.width >= 0) {
      //A is bigger
      console.log("A is bigger");
      if (recA.top && recA.left) {
        // If top & left exists

        console.log("top & left exists");
        if (delta.top <= 0 && delta.left <= 0) {
          console.log("contained by A");
          copyProperties(delta, children, recB);
          return {
            top: recA.top,
            left: recA.left,
            height: recA.height,
            width: recA.width,
            children: [children],
          };
        } else {
          console.log("No one contains each other");
          return recA;
        }
      } else if (recA.bottom && recA.right) {
        console.log("bottom & right exists");
        if (delta.bottom <= 0 && delta.right <= 0) {
          console.log("contained by A");
          copyProperties(delta, children, recB);
          return {
            bottom: recA.bottom,
            right: recA.right,
            height: recA.height,
            width: recA.width,
            children: [children],
          };
        } else {
          console.log("No one contains each other");
          return recA;
        }
      } else if (recA.top && recA.right) {
        console.log("top & right exists");
        if (delta.top <= 0 && delta.right <= 0) {
          console.log("contained by A");
          copyProperties(delta, children, recB);
          return {
            top: recA.top,
            right: recA.right,
            height: recA.height,
            width: recA.width,
            children: [children],
          };
        } else {
          console.log("No one contains each other");
          return recA;
        }
      } else if (recA.bottom && recA.left) {
        console.log("bottom & left exists");
        if (delta.bottom <= 0 && delta.left <= 0) {
          console.log("contained by A");
          copyProperties(delta, children, recB);
          return {
            bottom: recA.bottom,
            left: recA.left,
            height: recA.height,
            width: recA.width,
            children: [children],
          };
        } else {
          console.log("No one contains each other");
          return recA;
        }
      }
    } else if (delta.height < 0 && delta.width < 0) {
      //B is bigger
      console.log(" B is bigger");
      if (recA.top && recA.left) {
        // If top & left exists

        console.log("top & left exists");
        if (delta.top >= 0 && delta.left >= 0) {
          console.log("contained by B");
          copyProperties(delta, children, recA);
          return {
            top: recB.top,
            left: recB.left,
            height: recB.height,
            width: recB.width,
            children: [children],
          };
        } else {
          console.log("No one contains each other");
          return recA;
        }
      } else if (recA.bottom && recA.right) {
        console.log("bottom & right exists");
        if (delta.bottom >= 0 && delta.right >= 0) {
          console.log("contained by B");
          copyProperties(delta, children, recA);
          return {
            bottom: recB.bottom,
            right: recB.right,
            height: recB.height,
            width: recB.width,
            children: [children],
          };
        } else {
          console.log("No one contains each other");
          return recA;
        }
      } else if (recA.top && recA.right) {
        console.log("top & right exists");
        if (delta.top >= 0 && delta.right >= 0) {
          console.log("contained by B");
          copyProperties(delta, children, recA);
          return {
            top: recB.top,
            right: recB.right,
            height: recB.height,
            width: recB.width,
            children: [children],
          };
        } else {
          console.log("No one contains each other");
          return recA;
        }
      } else if (recA.bottom && recA.left) {
        console.log("bottom & left exists");
        if (delta.bottom >= 0 && delta.left >= 0) {
          console.log("contained by B");
          copyProperties(delta, children, recA);
          return {
            bottom: recB.bottom,
            left: recB.left,
            height: recB.height,
            width: recB.width,
            children: [children],
          };
        } else {
          console.log("No one contains each other");
          return recA;
        }
      }
    } else {
      // no one contains each other
      console.log("no one contains each other");
      return recA;
    }
  } else {
    console.log("t, r, b, l exists");
    if (
      delta.top > 0 &&
      delta.right > 0 &&
      delta.left > 0 &&
      delta.bottom > 0
    ) {
      console.log("Contained by B");
      copyProperties(delta, children, recA);
      return {
        top: recB.top,
        left: recB.left,
        bottom: recB.bottom,
        right: recB.right,
        children: [children],
      };
    } else if (
      delta.top <= 0 &&
      delta.right <= 0 &&
      delta.left <= 0 &&
      delta.bottom <= 0
    ) {
      console.log("contained by A");
      copyProperties(delta, children, recB);
      return {
        top: recA.top,
        left: recA.left,
        bottom: recA.bottom,
        right: recA.right,
        children: [children],
      };
    } else {
      console.log("No one contains each other");
      return recA;
    }
  }
}
// let answer = updateStructure(
//   {
//     top: "30px",
//     left: "30px",
//     height: "20px",
//     width: "30px",
//     children: [],
//   },
//   {
//     top: "20px",
//     left: "20px",
//     height: "40px",
//     width: "90px",
//     children: [],
//   }
// );
// console.log(answer);

module.exports = updateStructure;
