const ROWS = 6;
const COLS = 70;

const board = document.getElementById("board");

// Allowed characters on a split-flap board
const CHARSET = " ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:.-";

/* ------------------------------
   CREATE FLAP MODULE
--------------------------------*/
function createFlap(char = " ") {
  const flap = document.createElement("div");
  flap.className = "flap";
  flap.dataset.current = char;

  flap.innerHTML = `
    <div class="top">${char}</div>
    <div class="bottom">${char}</div>
    <div class="flip-top"></div>
    <div class="flip-bottom"></div>
  `;

  return flap;
}

/* ------------------------------
   CREATE ROW OF 70 CHARACTERS
--------------------------------*/
function createRow() {
  const row = document.createElement("div");
  row.className = "row";

  for (let i = 0; i < COLS; i++) {
    row.appendChild(createFlap(" "));
  }

  return row;
}

/* ------------------------------
   BUILD 6 ROWS
--------------------------------*/
for (let r = 0; r < ROWS; r++) {
  board.appendChild(createRow());
}

/* ------------------------------
   FLIP AN INDIVIDUAL CHARACTER
--------------------------------*/
function flipChar(flap, newChar) {
  const oldChar = flap.dataset.current;
  if (oldChar === newChar) return;

  const flipTop = flap.querySelector(".flip-top");
  const flipBottom = flap.querySelector(".flip-bottom");
  const top = flap.querySelector(".top");
  const bottom = flap.querySelector(".bottom");

  // Always show current text before animation starts
  top.textContent = oldChar;
  bottom.textContent = oldChar;

  flipTop.textContent = oldChar;
  flipBottom.textContent = newChar;

  flap.classList.add("animating");

  flap.addEventListener(
    "animationend",
    () => {
      flap.classList.remove("animating");
      flap.dataset.current = newChar;

      // Commit new text to both halves
      top.textContent = newChar;
      bottom.textContent = newChar;

      // Clear temporary flip layers
      flipTop.textContent = "";
      flipBottom.textContent = "";
    },
    { once: true }
  );
}

/* ------------------------------
   UPDATE A ROW WITH A STRING
--------------------------------*/
function updateRow(rowIndex, text) {
  const row = board.children[rowIndex];
  const padded = text.padEnd(COLS, " ").slice(0, COLS);

  [...row.children].forEach((flap, i) => {
    const newChar = padded[i];

    // RANDOM DELAY for authenticity
    const delay = Math.random() * 250;

    setTimeout(() => {
      flipChar(flap, newChar);
    }, delay);
  });
}

/* ------------------------------
   DEMO CONTENT
--------------------------------*/
const demoRows = [
  "07:42  POUGHKEEPSIE VIA HUDSON LINE — ON TIME",
  "07:50  STAMFORD EXPRESS — BOARDING",
  "08:05  CROTON-HARMON — DELAYED",
  "08:22  NEW HAVEN LOCAL — ON TIME",
  "08:40  WHITE PLAINS — ALL ABOARD",
  "09:00  HARLEM LINE — ON TIME"
];

// Load initial rows
demoRows.forEach((text, i) => updateRow(i, text));

/* ------------------------------
   CYCLE ONE ROW AT A TIME
--------------------------------*/
let cycleIndex = 0;

function updateRowWithDelay(rowIndex, text) {
  const row = board.children[rowIndex];
  const padded = text.padEnd(COLS, " ").slice(0, COLS);
  let completed = 0;

  return new Promise((resolve) => {
    [...row.children].forEach((flap, i) => {
      const newChar = padded[i];
      const delay = Math.random() * 250;

      setTimeout(() => {
        flipChar(flap, newChar);
        completed++;
        if (completed === COLS) resolve(); // all characters done
      }, delay);
    });
  });
}

async function cycleRows() {
  while (true) {
    const rowToUpdate = cycleIndex % ROWS;
    const newText = demoRows[(cycleIndex + 1) % demoRows.length];

    await updateRowWithDelay(rowToUpdate, newText); // wait for flips to finish
    cycleIndex++;
    await new Promise((r) => setTimeout(r, 2000)); // pause between rows
  }
}

cycleRows();
