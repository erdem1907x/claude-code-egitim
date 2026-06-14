/* ===== STATE ===== */
const state = {
  mode: 'pvp',
  size: 6,
  diff: 'medium',
  board: [],
  currentPlayer: 1,
  scores: [0, 0],
  selectedLetter: 'S',
  history: [],
  gameOver: false,
  highlightedCells: new Set(),
};

/* ===== DOM REFS ===== */
const $ = id => document.getElementById(id);
const setupScreen = $('setupScreen');
const gameScreen = $('gameScreen');
const resultScreen = $('resultScreen');

/* ===== SETUP SCREEN INTERACTIONS ===== */
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.mode = btn.dataset.mode;
    $('aiDiffGroup').classList.toggle('hidden-group', state.mode === 'pvp');
  });
});

document.querySelectorAll('.size-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.size = parseInt(btn.dataset.size);
  });
});

document.querySelectorAll('.diff-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.diff = btn.dataset.diff;
  });
});

$('startBtn').addEventListener('click', startGame);

/* ===== LETTER SELECTOR ===== */
$('btnS').addEventListener('click', () => selectLetter('S'));
$('btnO').addEventListener('click', () => selectLetter('O'));

function selectLetter(letter) {
  state.selectedLetter = letter;
  $('btnS').classList.toggle('active', letter === 'S');
  $('btnO').classList.toggle('active', letter === 'O');
}

/* ===== GAME CONTROLS ===== */
$('undoBtn').addEventListener('click', undoMove);
$('restartBtn').addEventListener('click', restartGame);
$('playAgainBtn').addEventListener('click', restartGame);
$('newGameBtn').addEventListener('click', () => showScreen(setupScreen));

/* ===== CORE GAME LOGIC ===== */
function startGame() {
  const n = state.size;
  state.board = Array(n * n).fill(null);
  state.currentPlayer = 1;
  state.scores = [0, 0];
  state.history = [];
  state.gameOver = false;
  state.highlightedCells = new Set();
  selectLetter('S');

  // Update player names
  $('p1Name').textContent = 'Oyuncu 1';
  $('p2Name').textContent = state.mode === 'pva' ? 'Yapay Zeka' : 'Oyuncu 2';
  $('p2AvatarEl').textContent = state.mode === 'pva' ? '🤖' : 'P2';

  $('rp1Name').textContent = 'Oyuncu 1';
  $('rp2Name').textContent = state.mode === 'pva' ? 'Yapay Zeka' : 'Oyuncu 2';

  buildBoard();
  updateScores();
  updateStatus();
  updateCellsLeft();
  showScreen(gameScreen);
}

function buildBoard() {
  const board = $('board');
  board.style.gridTemplateColumns = `repeat(${state.size}, 1fr)`;
  board.innerHTML = '';
  for (let i = 0; i < state.size * state.size; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    cell.addEventListener('click', () => onCellClick(i));
    board.appendChild(cell);
  }
}

function onCellClick(idx) {
  if (state.gameOver) return;
  if (state.board[idx] !== null) return;
  if (state.mode === 'pva' && state.currentPlayer === 2) return;

  placeMove(idx, state.selectedLetter, state.currentPlayer);
}

function placeMove(idx, letter, player) {
  state.board[idx] = { letter, player };
  state.history.push({ idx, letter, player, scoresBefore: [...state.scores] });

  renderCell(idx, letter, player);
  clearLastPlaced();
  markLastPlaced(idx, player);

  const sosCount = checkSOS(idx, letter, player);
  state.scores[player - 1] += sosCount;
  updateScores();

  if (isBoardFull()) {
    state.gameOver = true;
    updateStatus();
    setTimeout(showResult, 600);
    return;
  }

  if (sosCount === 0) {
    state.currentPlayer = player === 1 ? 2 : 1;
  }
  // if scored, same player goes again

  updateStatus();
  updateCellsLeft();

  if (state.mode === 'pva' && state.currentPlayer === 2 && !state.gameOver) {
    scheduleAI();
  }
}

function renderCell(idx, letter, player) {
  const cell = getCellEl(idx);
  cell.textContent = letter;
  cell.classList.add('taken', player === 1 ? 'p1-cell' : 'p2-cell');
}

function clearLastPlaced() {
  document.querySelectorAll('.last-placed, .last-placed-p2').forEach(el => {
    el.classList.remove('last-placed', 'last-placed-p2');
  });
}

function markLastPlaced(idx, player) {
  const cell = getCellEl(idx);
  cell.classList.add(player === 1 ? 'last-placed' : 'last-placed-p2');
}

function getCellEl(idx) {
  return $('board').children[idx];
}

/* ===== SOS CHECK ===== */
const DIRS = [
  [0, 1], [1, 0], [1, 1], [1, -1],
  [0, -1], [-1, 0], [-1, -1], [-1, 1],
];

function rc(idx) {
  const n = state.size;
  return [Math.floor(idx / n), idx % n];
}

function index(r, c) {
  const n = state.size;
  if (r < 0 || r >= n || c < 0 || c >= n) return -1;
  return r * n + c;
}

function getCell(r, c) {
  const i = index(r, c);
  return i === -1 ? null : state.board[i];
}

function checkSOS(idx, letter, player) {
  const [row, col] = rc(idx);
  const n = state.size;
  let count = 0;

  for (const [dr, dc] of DIRS) {
    // Three patterns for each direction:
    // 1) placed letter is S, check S-O-S starting at idx
    // 2) placed letter is O, check S-O-S with O in middle
    // 3) placed letter is S, check S-O-S ending at idx

    let cells = null;

    if (letter === 'S') {
      // Pattern: idx=S, next=O, next+next=S
      const r2 = row + dr, c2 = col + dc;
      const r3 = row + 2*dr, c3 = col + 2*dc;
      const m = getCell(r2, c2);
      const e = getCell(r3, c3);
      if (m?.letter === 'O' && e?.letter === 'S') {
        cells = [idx, index(r2, c2), index(r3, c3)];
      }

      // Pattern: idx=S, prev=O, prev+prev=S (S ending here going in opposite)
      const rp = row - dr, cp = col - dc;
      const rp2 = row - 2*dr, cp2 = col - 2*dc;
      const mp = getCell(rp, cp);
      const ep = getCell(rp2, cp2);
      if (mp?.letter === 'O' && ep?.letter === 'S') {
        cells = [index(rp2, cp2), index(rp, cp), idx];
      }
    }

    if (letter === 'O') {
      // Pattern: prev=S, idx=O, next=S
      const rs = row - dr, cs = col - dc;
      const re = row + dr, ce = col + dc;
      const s1 = getCell(rs, cs);
      const s2 = getCell(re, ce);
      if (s1?.letter === 'S' && s2?.letter === 'S') {
        cells = [index(rs, cs), idx, index(re, ce)];
      }
    }

    if (cells) {
      const key = cells.slice().sort((a, b) => a - b).join(',') + ':' + (dr > 0 || (dr === 0 && dc > 0) ? `${dr},${dc}` : `${-dr},${-dc}`);
      if (!state.highlightedCells.has(key)) {
        state.highlightedCells.add(key);
        count++;
        highlightSOS(cells, player);
      }
    }
  }

  return count;
}

function highlightSOS(cells, player) {
  cells.forEach(idx => {
    const el = getCellEl(idx);
    if (player === 1) {
      el.classList.add('sos-highlight');
    } else {
      el.classList.add('sos-highlight-p2');
    }
  });
}

/* ===== UNDO ===== */
function undoMove() {
  if (state.gameOver) return;
  // If vs AI, undo two moves (AI + player)
  const movesToUndo = (state.mode === 'pva' && state.currentPlayer === 1 && state.history.length >= 2) ? 2 : 1;

  for (let i = 0; i < movesToUndo; i++) {
    if (state.history.length === 0) break;
    const last = state.history.pop();
    state.board[last.idx] = null;
    state.scores = [...last.scoresBefore];

    const cell = getCellEl(last.idx);
    cell.textContent = '';
    cell.className = 'cell';

    state.currentPlayer = last.player;
  }

  // Rebuild highlights from scratch
  rebuildHighlights();
  updateScores();
  updateStatus();
  updateCellsLeft();
}

function rebuildHighlights() {
  state.highlightedCells = new Set();
  // Clear all highlight classes
  document.querySelectorAll('.sos-highlight, .sos-highlight-p2').forEach(el => {
    el.classList.remove('sos-highlight', 'sos-highlight-p2');
  });
  // Replay highlights
  state.history.forEach(({ idx, letter, player }) => {
    checkSOS(idx, letter, player);
  });
  // Re-mark last placed
  clearLastPlaced();
  if (state.history.length > 0) {
    const last = state.history[state.history.length - 1];
    markLastPlaced(last.idx, last.player);
  }
}

/* ===== BOARD FULL ===== */
function isBoardFull() {
  return state.board.every(cell => cell !== null);
}

/* ===== UI UPDATES ===== */
function updateScores() {
  $('p1Score').textContent = state.scores[0];
  $('p2Score').textContent = state.scores[1];
}

function updateStatus() {
  const txt = $('statusText');
  const p1Card = $('p1Card');
  const p2Card = $('p2Card');
  const p1Turn = $('p1Turn');
  const p2Turn = $('p2Turn');

  p1Card.classList.remove('active', 'p1-turn', 'p2-turn');
  p2Card.classList.remove('active', 'p1-turn', 'p2-turn');
  p1Turn.classList.remove('p1-turn', 'p2-turn');
  p2Turn.classList.remove('p1-turn', 'p2-turn');

  if (state.gameOver) {
    txt.textContent = 'Oyun Bitti!';
    return;
  }

  if (state.currentPlayer === 1) {
    txt.textContent = 'Oyuncu 1\'in sırası';
    p1Card.classList.add('active', 'p1-turn');
    p1Turn.classList.add('p1-turn');
  } else {
    const name = state.mode === 'pva' ? 'Yapay Zeka' : 'Oyuncu 2';
    txt.textContent = `${name}'nın sırası`;
    p2Card.classList.add('active', 'p2-turn');
    p2Turn.classList.add('p2-turn');
  }
}

function updateCellsLeft() {
  const filled = state.board.filter(c => c !== null).length;
  const total = state.size * state.size;
  $('cellsLeft').textContent = `${total - filled} boş kare kaldı`;
}

/* ===== RESULT ===== */
function showResult() {
  const [s1, s2] = state.scores;
  const p2Name = state.mode === 'pva' ? 'Yapay Zeka' : 'Oyuncu 2';

  $('rp1Score').textContent = s1;
  $('rp2Score').textContent = s2;

  let trophy = '🏆', title, subtitle;

  if (s1 > s2) {
    trophy = '🏆';
    title = 'Oyuncu 1 Kazandı!';
    subtitle = `${s1} - ${s2} SOS ile zafer!`;
  } else if (s2 > s1) {
    trophy = state.mode === 'pva' ? '🤖' : '🏆';
    title = `${p2Name} Kazandı!`;
    subtitle = `${s2} - ${s1} SOS ile zafer!`;
  } else {
    trophy = '🤝';
    title = 'Beraberlik!';
    subtitle = `Her iki oyuncu da ${s1} SOS yaptı.`;
  }

  $('resultTrophy').textContent = trophy;
  $('resultTitle').textContent = title;
  $('resultSubtitle').textContent = subtitle;

  showScreen(resultScreen);
}

/* ===== RESTART ===== */
function restartGame() {
  startGame();
}

/* ===== SCREEN MANAGEMENT ===== */
function showScreen(screen) {
  [setupScreen, gameScreen, resultScreen].forEach(s => s.classList.add('hidden'));
  screen.classList.remove('hidden');
}

/* ===== AI ===== */
let aiThinkingEl = null;

function scheduleAI() {
  showAIThinking();
  const delay = state.diff === 'easy' ? 400 : state.diff === 'medium' ? 700 : 1000;
  setTimeout(() => {
    hideAIThinking();
    if (!state.gameOver && state.currentPlayer === 2) {
      aiMove();
    }
  }, delay);
}

function showAIThinking() {
  if (!aiThinkingEl) {
    aiThinkingEl = document.createElement('div');
    aiThinkingEl.className = 'ai-thinking';
    aiThinkingEl.innerHTML = `
      Yapay Zeka düşünüyor
      <div class="dot-pulse">
        <span></span><span></span><span></span>
      </div>`;
    document.body.appendChild(aiThinkingEl);
  }
  aiThinkingEl.classList.remove('hidden');
}

function hideAIThinking() {
  if (aiThinkingEl) aiThinkingEl.classList.add('hidden');
}

function aiMove() {
  const move = pickAIMove();
  if (move) {
    placeMove(move.idx, move.letter, 2);
  }
}

function pickAIMove() {
  if (state.diff === 'easy') return randomMove();
  if (state.diff === 'medium') return mediumMove();
  return hardMove();
}

/* Easy: random */
function randomMove() {
  const empties = getEmpties();
  if (empties.length === 0) return null;
  const idx = empties[Math.floor(Math.random() * empties.length)];
  const letter = Math.random() < 0.5 ? 'S' : 'O';
  return { idx, letter };
}

/* Medium: score immediate SOS, else random */
function mediumMove() {
  const win = findScoringMove(2);
  if (win) return win;
  return randomMove();
}

/* Hard: score, block opponent, strategic */
function hardMove() {
  // 1. Can I score?
  const win = findScoringMove(2);
  if (win) return win;

  // 2. Block opponent from scoring
  const block = findScoringMove(1);
  if (block) return block;

  // 3. Setup: place O where S exists on both sides
  const setup = findSetupMove();
  if (setup) return setup;

  // 4. Place S in center area
  const center = findCenterMove();
  if (center) return center;

  return randomMove();
}

function getEmpties() {
  return state.board.reduce((acc, v, i) => { if (v === null) acc.push(i); return acc; }, []);
}

function simulatePlace(idx, letter, player) {
  const saved = state.board[idx];
  const savedHighlights = new Set(state.highlightedCells);
  state.board[idx] = { letter, player };
  const count = checkSOSNoMark(idx, letter, player);
  state.board[idx] = saved;
  state.highlightedCells = savedHighlights;
  return count;
}

function checkSOSNoMark(idx, letter, player) {
  const [row, col] = rc(idx);
  let count = 0;

  for (const [dr, dc] of DIRS) {
    let cells = null;

    if (letter === 'S') {
      const r2 = row + dr, c2 = col + dc;
      const r3 = row + 2*dr, c3 = col + 2*dc;
      const m = getCell(r2, c2);
      const e = getCell(r3, c3);
      if (m?.letter === 'O' && e?.letter === 'S') cells = [idx, index(r2, c2), index(r3, c3)];

      const rp = row - dr, cp = col - dc;
      const rp2 = row - 2*dr, cp2 = col - 2*dc;
      const mp = getCell(rp, cp);
      const ep = getCell(rp2, cp2);
      if (mp?.letter === 'O' && ep?.letter === 'S') cells = [index(rp2, cp2), index(rp, cp), idx];
    }

    if (letter === 'O') {
      const rs = row - dr, cs = col - dc;
      const re = row + dr, ce = col + dc;
      const s1 = getCell(rs, cs);
      const s2 = getCell(re, ce);
      if (s1?.letter === 'S' && s2?.letter === 'S') cells = [index(rs, cs), idx, index(re, ce)];
    }

    if (cells) {
      const key = cells.slice().sort((a, b) => a - b).join(',') + ':' + (dr > 0 || (dr === 0 && dc > 0) ? `${dr},${dc}` : `${-dr},${-dc}`);
      if (!state.highlightedCells.has(key)) count++;
    }
  }

  return count;
}

function findScoringMove(player) {
  const empties = getEmpties();
  for (const idx of empties) {
    for (const letter of ['S', 'O']) {
      if (simulatePlace(idx, letter, player) > 0) {
        return { idx, letter };
      }
    }
  }
  return null;
}

function findSetupMove() {
  // Find an empty cell where placing O would set up future SOS (S _ S pattern nearby)
  const empties = getEmpties();
  for (const idx of empties) {
    const [row, col] = rc(idx);
    for (const [dr, dc] of DIRS) {
      const rs = row - dr, cs = col - dc;
      const re = row + dr, ce = col + dc;
      const s1 = getCell(rs, cs);
      const s2 = getCell(re, ce);
      // If both neighbors are S (either player), placing O here completes SOS
      // We already handle this in findScoringMove; here find S _ empty or empty _ S for setup
      if (s1?.letter === 'S' && s2 === null) {
        // Placing S at re,ce would let us place O at idx next for SOS
        const endIdx = index(re, ce);
        if (endIdx !== -1 && state.board[endIdx] === null) {
          return { idx: endIdx, letter: 'S' };
        }
      }
    }
  }
  return null;
}

function findCenterMove() {
  const n = state.size;
  const mid = Math.floor(n / 2);
  const candidates = [];
  for (let r = mid - 1; r <= mid + 1; r++) {
    for (let c = mid - 1; c <= mid + 1; c++) {
      const i = index(r, c);
      if (i !== -1 && state.board[i] === null) candidates.push(i);
    }
  }
  if (candidates.length === 0) return null;
  const idx = candidates[Math.floor(Math.random() * candidates.length)];
  return { idx, letter: 'S' };
}
