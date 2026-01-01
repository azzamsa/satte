const options: Options = {
  wallThickness: 4,
  wallShrouding: 0,
  wallXYOffset: 5,
  wallZOffset: 15,
  webThickness: 0,
  webMinThicknessFactor: 0.8,
  verticalClearance: 0.1,
  plateThickness: 3,
  keyBasis: "xda",
  screwIndices: [-1, -1, -1, -1, -1, -1, -1],
  screwCountersink: true,
  screwSize: "M3",
  screwType: "screw insert",
  clearScrews: true,
  rounded: { side: { divisor: 3, concavity: 1.5 } },
  connectors: [{ preset: "trrs" }, { preset: "usb", size: "average" }],
  connectorIndex: -1,
  microcontroller: "waveshare-rp2040-zero",
  microcontrollerAngle: 0,
  fastenMicrocontroller: true,
  flipConnectors: false,
  wristRestOrigin: new Trsf().translate(10, -110, 0),
  shell: { type: "basic", lip: false },
};
// NOTE: Screws / the connector with
// negative indices are placed automatically.
// In the basic/advanced tab, these values were:
// [left] screwIndices: [3.5, 29.5, 11.5, 15.5, 7.5, 33.5, 26.5]
// [left] connectorIndex: 24.7
// [right] screwIndices: [3.5, 29.5, 11.5, 15.5, 7.5, 33.5, 26.5]
// [right] connectorIndex: 24.7

/**
 * The planes used to position the clusters.
 * It's rotated by the tenting and x rotation
 */
const rightFingersPlane = new Trsf()
  .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
  .rotate(12, [0, 0, 0], [0, 1, 0], false)
  .rotate(0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
  .translate(18, 35.6, -15.2);

const rightThumbsPlane = new Trsf()
  .rotate(-11.88888888888889, [0, 0, 0], [1, 0, 0])
  .rotate(-24.8, [0, 0, 0], [0, 1, 0])
  .rotate(34.44444444444444, [0, 0, 0], [0, 0, 1])
  .translate(-35.8, -25.6, -7.1)
  .transformBy(
    new Trsf()
      .translate(-18, -35.6, 15.2)
      .rotate(-0.2222222222222222, [0, 0, 0], [0, 0, 1])
      .rotate(-12, [0, 0, 0], [0, 1, 0])
      .rotate(-1.0222222222222221, [0, 0, 0], [1, 0, 0]),
  )
  .transformBy(
    new Trsf()
      .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
      .rotate(12, [0, 0, 0], [0, 1, 0], false)
      .rotate(0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
      .translate(18, 35.6, -15.2),
  );

const leftFingersPlane = new Trsf()
  .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
  .rotate(-12, [0, 0, 0], [0, 1, 0], false)
  .rotate(-0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
  .translate(-18, 35.6, -15.2);

const leftThumbsPlane = new Trsf()
  .rotate(-11.88888888888889, [0, 0, 0], [1, 0, 0])
  .rotate(24.8, [0, 0, 0], [0, 1, 0])
  .rotate(-34.44444444444444, [0, 0, 0], [0, 0, 1])
  .translate(35.8, -25.6, -7.1)
  .transformBy(
    new Trsf()
      .translate(18, -35.6, 15.2)
      .rotate(0.2222222222222222, [0, 0, 0], [0, 0, 1])
      .rotate(12, [0, 0, 0], [0, 1, 0])
      .rotate(-1.0222222222222221, [0, 0, 0], [1, 0, 0]),
  )
  .transformBy(
    new Trsf()
      .rotate(1.0222222222222221, [0, 0, 0], [1, 0, 0], false)
      .rotate(-12, [0, 0, 0], [0, 1, 0], false)
      .rotate(-0.2222222222222222, [0, 0, 0], [0, 0, 1], false)
      .translate(-18, 35.6, -15.2),
  );

/** Definitions for all keys. */
const fingersLeft: Key[] = [
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: -1.5,
      })
      .transformBy(new Trsf().translate(0, -17.2, 2.3))
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "q",
      row: 2,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: -1.5,
      })
      .transformBy(new Trsf().translate(0, -17.2, 2.3))
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "a",
      home: "pinky",
      row: 3,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: -1.5,
      })
      .transformBy(new Trsf().translate(0, -17.2, 2.3))
      .placeColumn({
        column: -1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "z",
      row: 4,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: -0.5,
      })
      .transformBy(new Trsf().translate(0, 0.4, 0.1))
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "w",
      row: 2,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: -0.5,
      })
      .transformBy(new Trsf().translate(0, 0.4, 0.1))
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "s",
      home: "ring",
      row: 3,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: -0.5,
      })
      .transformBy(new Trsf().translate(0, 0.4, 0.1))
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "x",
      row: 4,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: 0.5,
      })
      .transformBy(new Trsf().translate(0, 12, -1.9))
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "e",
      row: 2,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: 0.5,
      })
      .transformBy(new Trsf().translate(0, 12, -1.9))
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "d",
      home: "middle",
      row: 3,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: 0.5,
      })
      .transformBy(new Trsf().translate(0, 12, -1.9))
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "c",
      row: 4,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 1.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "r",
      row: 2,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 1.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "f",
      home: "index",
      row: 3,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 1.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "v",
      row: 4,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "t",
      row: 2,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "g",
      row: 3,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: 2.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "b",
      row: 4,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1.5,
    cluster: "fingers",
    position: new Trsf()
      .rotate(0, [0, 0, 0], [1, 0, 0])
      .rotate(0, [0, 0, 0], [0, 1, 0])
      .rotate(-90, [0, 0, 0], [0, 0, 1])
      .translate(5, -22, 2.3)
      .placeOnMatrix({
        column: -2.755,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(leftFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "-",
      home: "pinky",
      row: 3,
      profile: "xda",
    },
  },
];

const thumbsLeft: Key[] = [
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(17.8, [0, 0, 0], [1, 0, 0])
      .rotate(-3.2888888888888888, [0, 0, 0], [0, 1, 0])
      .rotate(8.2, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 3.5)
      .placeOnMatrix({
        column: -0.4,
        row: -0.34,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0,
      })
      .transformBy(leftThumbsPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      home: "thumb",
      row: 5,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(15.11111111111111, [0, 0, 0], [1, 0, 0])
      .rotate(-16, [0, 0, 0], [0, 1, 0])
      .rotate(21.8, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 0.4)
      .placeOnMatrix({
        column: -1.43,
        row: -0.06,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0,
      })
      .transformBy(leftThumbsPlane),
    variant: { hotswap: "Kailh" },
    keycap: { row: 5, profile: "xda" },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(18.2, [0, 0, 0], [1, 0, 0])
      .rotate(7.111111111111111, [0, 0, 0], [0, 1, 0])
      .rotate(1, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 3.1)
      .placeOnMatrix({
        column: 0.64,
        row: -0.44,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0,
      })
      .transformBy(leftThumbsPlane),
    variant: { hotswap: "Kailh" },
    keycap: { row: 5, profile: "xda" },
  },
];

const fingersRight: Key[] = [
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: 1.5,
      })
      .transformBy(new Trsf().translate(0, -17.2, 2.3))
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "p",
      row: 2,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: 1.5,
      })
      .transformBy(new Trsf().translate(0, -17.2, 2.3))
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: ";",
      home: "pinky",
      row: 3,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: 1.5,
      })
      .transformBy(new Trsf().translate(0, -17.2, 2.3))
      .placeColumn({
        column: 1.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "/",
      row: 4,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: 0.5,
      })
      .transformBy(new Trsf().translate(0, 0.4, 0.1))
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "o",
      row: 2,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: 0.5,
      })
      .transformBy(new Trsf().translate(0, 0.4, 0.1))
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "l",
      home: "ring",
      row: 3,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: 0.5,
      })
      .transformBy(new Trsf().translate(0, 0.4, 0.1))
      .placeColumn({
        column: 0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: ".",
      row: 4,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: -1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: -0.5,
      })
      .transformBy(new Trsf().translate(0, 12, -1.9))
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "i",
      row: 2,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 0,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: -0.5,
      })
      .transformBy(new Trsf().translate(0, 12, -1.9))
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "k",
      home: "middle",
      row: 3,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeRow({
        row: 1,
        spacingOfRows: 20.5,
        curvatureOfColumn: 20,
        arc: 0,
        columnForArc: -0.5,
      })
      .transformBy(new Trsf().translate(0, 12, -1.9))
      .placeColumn({
        column: -0.5,
        spacingOfColumns: 21.5,
        curvatureOfRow: 5,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: ",",
      row: 4,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -1.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "u",
      row: 2,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -1.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "j",
      home: "index",
      row: 3,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -1.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "m",
      row: 4,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: -1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "y",
      row: 2,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "h",
      row: 3,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "fingers",
    position: new Trsf()
      .placeOnMatrix({
        column: -2.5,
        row: 1,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "n",
      row: 4,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1.5,
    cluster: "fingers",
    position: new Trsf()
      .rotate(0, [0, 0, 0], [1, 0, 0])
      .rotate(0, [0, 0, 0], [0, 1, 0])
      .rotate(90, [0, 0, 0], [0, 0, 1])
      .translate(-5, -22, 2.3)
      .placeOnMatrix({
        column: 2.755,
        row: 0,
        spacingOfColumns: 21.5,
        spacingOfRows: 20.5,
        curvatureOfRow: 5,
        curvatureOfColumn: 20,
        arc: 0,
      })
      .transformBy(rightFingersPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      letter: "-",
      home: "pinky",
      row: 3,
      profile: "xda",
    },
  },
];

const thumbsRight: Key[] = [
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(17.8, [0, 0, 0], [1, 0, 0])
      .rotate(3.2888888888888888, [0, 0, 0], [0, 1, 0])
      .rotate(-8.2, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 3.5)
      .placeOnMatrix({
        column: 0.4,
        row: -0.34,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0,
      })
      .transformBy(rightThumbsPlane),
    variant: { hotswap: "Kailh" },
    keycap: {
      home: "thumb",
      row: 5,
      profile: "xda",
    },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(15.11111111111111, [0, 0, 0], [1, 0, 0])
      .rotate(16, [0, 0, 0], [0, 1, 0])
      .rotate(-21.8, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 0.4)
      .placeOnMatrix({
        column: 1.43,
        row: -0.06,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0,
      })
      .transformBy(rightThumbsPlane),
    variant: { hotswap: "Kailh" },
    keycap: { row: 5, profile: "xda" },
  },
  {
    type: "mx-hotswap",
    aspect: 1,
    cluster: "thumbs",
    position: new Trsf()
      .rotate(18.2, [0, 0, 0], [1, 0, 0])
      .rotate(-7.111111111111111, [0, 0, 0], [0, 1, 0])
      .rotate(-1, [0, 0, 0], [0, 0, 1])
      .translate(0, 0, 3.1)
      .placeOnMatrix({
        column: -0.64,
        row: -0.44,
        spacingOfColumns: 20,
        spacingOfRows: 20,
        curvatureOfRow: 0,
        curvatureOfColumn: 0,
        arc: 0,
      })
      .transformBy(rightThumbsPlane),
    variant: { hotswap: "Kailh" },
    keycap: { row: 5, profile: "xda" },
  },
];

export default {
  left: {
    ...options,
    connectorIndex: 23.3,
    keys: [...fingersLeft, ...thumbsLeft],
  },
  right: {
    ...options,
    connectorIndex: 23.3,
    keys: [...fingersRight, ...thumbsRight],
  },
};
