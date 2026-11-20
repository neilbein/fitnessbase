// js/programs.js — Programs section: PPL / Upper-Lower, exercise cards, detail modal

// ── State ─────────────────────────────────────────────────────────
let programsInitialized = false;
let currentSplitData    = null;

// ── Init (called once when Programs section first opened) ─────────
function initPrograms() {
  if (programsInitialized) return;
  programsInitialized = true;
  renderCoaches();
  showProgramHome();
}

// ── Page stack helpers ────────────────────────────────────────────
function showProgramHome() {
  _hideAllProgramPages();
  document.getElementById('program-home')?.style.setProperty('display', 'block');
}

function showPPLHome() {
  _hideAllProgramPages();
  document.getElementById('program-ppl')?.style.setProperty('display', 'block');
}

function showULHome() {
  _hideAllProgramPages();
  document.getElementById('program-ul')?.style.setProperty('display', 'block');
}

function showSplitDetail(splitKey) {
  const map = {
    push: WORKOUTS.push,
    pull: WORKOUTS.pull,
    legs: WORKOUTS.legs,
    upper: UPPER_DATA,
    lower: LOWER_DATA
  };
  currentSplitData = map[splitKey];
  if (!currentSplitData) return;
  renderSplitDetail(currentSplitData);
  _hideAllProgramPages();
  document.getElementById('program-split-detail')?.style.setProperty('display', 'block');
  window.scrollTo(0, 0);
}

function _hideAllProgramPages() {
  ['program-home','program-ppl','program-ul','program-split-detail'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}

// ── Split detail renderer ─────────────────────────────────────────
function renderSplitDetail(split) {
  const container = document.getElementById('program-split-detail');
  if (!container) return;

  const headerColor = split.color || '#39ff14';
  let html = `
    <div class="mb-8">
      <button onclick="_programGoBack()" class="flex items-center text-gray-400 hover:text-white transition mb-4 text-sm">
        <i class="fas fa-arrow-left mr-2"></i> Back to Programs
      </button>
      <h2 class="text-3xl md:text-4xl font-bold mb-1" style="color:${headerColor}">${split.name.toUpperCase()}</h2>
      <p class="text-gray-400 text-lg">${split.subtitle}</p>
    </div>`;

  split.muscleGroups.forEach(group => {
    html += `
      <div class="mb-14">
        <h3 class="text-2xl font-bold mb-6 flex items-center gap-3">
          <i class="fas ${group.icon || 'fa-dumbbell'}" style="color:${headerColor}"></i>
          <span>${group.name}</span>
          <span class="text-sm font-normal text-gray-500 ml-1">${group.exercises.length} exercises</span>
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">`;

    group.exercises.forEach(ex => {
      const diffColor = ex.difficulty === 'beginner' ? '#39ff14' : ex.difficulty === 'intermediate' ? '#FFD700' : '#FF6B35';
      html += `
          <div class="exercise-card bg-fitzone-gray rounded-xl overflow-hidden cursor-pointer"
               onclick="openExerciseModal('${ex.id}', '${group.name}')">
            <div class="relative h-44 overflow-hidden">
              <img src="${ex.image}" alt="${ex.name}" class="w-full h-full object-cover transition-transform duration-500 hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <span class="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full"
                    style="background:${diffColor}20;color:${diffColor};border:1px solid ${diffColor}40">
                ${ex.difficulty.charAt(0).toUpperCase() + ex.difficulty.slice(1)}
              </span>
              <div class="absolute bottom-3 left-3">
                <span class="text-xs bg-black/60 text-gray-300 px-2 py-1 rounded-full">
                  <i class="fas fa-dumbbell mr-1"></i>${ex.equipment}
                </span>
              </div>
            </div>
            <div class="p-4">
              <h4 class="text-lg font-bold mb-1">${ex.name}</h4>
              <p class="text-xs text-gray-400 mb-3 line-clamp-2">${ex.description}</p>
              <div class="flex items-center justify-between text-xs">
                <span class="text-gray-400"><i class="fas fa-layer-group mr-1 text-fitzone-neon"></i>${ex.sets} sets × ${ex.reps}</span>
                <span class="text-gray-400"><i class="fas fa-clock mr-1 text-fitzone-neon"></i>${ex.rest}</span>
              </div>
              <button class="mt-3 w-full text-xs font-bold py-2 rounded-lg transition"
                      style="background:${headerColor}20;color:${headerColor};border:1px solid ${headerColor}30">
                VIEW EXERCISE <i class="fas fa-chevron-right ml-1"></i>
              </button>
            </div>
          </div>`;
    });

    html += `</div></div>`;
  });

  container.innerHTML = html;
}

// back button helper
function _programGoBack() {
  _hideAllProgramPages();
  if (currentSplitData === WORKOUTS.push || currentSplitData === WORKOUTS.pull || currentSplitData === WORKOUTS.legs) {
    document.getElementById('program-ppl')?.style.setProperty('display','block');
  } else {
    document.getElementById('program-ul')?.style.setProperty('display','block');
  }
}

// ── Exercise detail modal ─────────────────────────────────────────
function openExerciseModal(exId, groupName) {
  // Find the exercise
  let ex = null;
  for (const key of Object.keys(WORKOUTS)) {
    for (const group of WORKOUTS[key].muscleGroups) {
      ex = group.exercises.find(e => e.id === exId);
      if (ex) break;
    }
    if (ex) break;
  }
  if (!ex) return;

  const modal = document.getElementById('exercise-modal');
  if (!modal) return;

  const diffColor = ex.difficulty === 'beginner' ? '#39ff14' : ex.difficulty === 'intermediate' ? '#FFD700' : '#FF6B35';

  document.getElementById('modal-title').textContent        = ex.name;
  document.getElementById('modal-difficulty').textContent   = ex.difficulty.charAt(0).toUpperCase() + ex.difficulty.slice(1);
  document.getElementById('modal-difficulty').style.color   = diffColor;
  document.getElementById('modal-equipment').textContent    = ex.equipment;
  document.getElementById('modal-sets').textContent         = `${ex.sets} sets`;
  document.getElementById('modal-reps').textContent         = ex.reps;
  document.getElementById('modal-rest').textContent         = ex.rest;
  document.getElementById('modal-description').textContent  = ex.description;
  document.getElementById('modal-muscle-label').textContent = groupName;

  // Instructions
  document.getElementById('modal-instructions').innerHTML =
    ex.instructions.map((s,i) => `<li class="flex gap-3"><span class="flex-shrink-0 w-6 h-6 rounded-full bg-fitzone-neon text-fitzone-dark text-xs font-bold flex items-center justify-center">${i+1}</span><span>${s}</span></li>`).join('');

  // Tips
  document.getElementById('modal-tips').innerHTML =
    ex.tips.map(t => `<li class="flex gap-2"><i class="fas fa-lightbulb text-yellow-400 mt-0.5 flex-shrink-0"></i><span>${t}</span></li>`).join('');

  // Demo image
  const img = document.getElementById('modal-demo-img');
  img.src = ex.image;
  img.alt = ex.name;

  // YouTube link
  document.getElementById('modal-yt-btn').href =
    `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.youtubeQuery)}`;

  // Muscle diagrams
  const front = document.getElementById('modal-svg-front');
  const back  = document.getElementById('modal-svg-back');
  front.innerHTML = buildBodySVG(ex.primaryMuscles, ex.secondaryMuscles, 'front');
  back.innerHTML  = buildBodySVG(ex.primaryMuscles, ex.secondaryMuscles, 'back');

  // Show image tab by default
  switchModalTab('image');

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeExerciseModal() {
  document.getElementById('exercise-modal')?.classList.add('hidden');
  document.body.style.overflow = '';
}

function switchModalTab(tab) {
  const imgPane   = document.getElementById('modal-image-pane');
  const videoPane = document.getElementById('modal-video-pane');
  const imgBtn    = document.getElementById('tab-image');
  const vidBtn    = document.getElementById('tab-video');

  if (tab === 'image') {
    imgPane.classList.remove('hidden');
    videoPane.classList.add('hidden');
    imgBtn.classList.add('tab-active');
    vidBtn.classList.remove('tab-active');
  } else {
    imgPane.classList.add('hidden');
    videoPane.classList.remove('hidden');
    vidBtn.classList.add('tab-active');
    imgBtn.classList.remove('tab-active');
  }
}

// ── Muscle SVG builder ────────────────────────────────────────────
function buildBodySVG(primaryMuscles, secondaryMuscles, view) {
  const p = m => primaryMuscles.includes(m);
  const s = m => secondaryMuscles.includes(m);

  function cls(muscle) {
    if (p(muscle)) return 'svg-muscle primary-m';
    if (s(muscle)) return 'svg-muscle secondary-m';
    return 'svg-muscle inactive-m';
  }

  const bg = '#252525';
  const silFill = '#2a2a2a';
  const silStroke = '#3d3d3d';

  if (view === 'front') {
    return `<svg viewBox="0 0 160 348" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <!-- head -->
      <ellipse cx="80" cy="24" rx="20" ry="22" fill="${silFill}" stroke="${silStroke}" stroke-width="1.5"/>
      <!-- neck -->
      <rect x="74" y="44" width="12" height="15" rx="4" fill="${silFill}"/>
      <!-- torso -->
      <path d="M62,58 Q40,62 26,76 L20,100 L20,130 L24,160 L30,186 L42,218 L56,230 L64,265 L62,308 L70,342 L90,342 L98,308 L96,265 L104,230 L118,218 L130,186 L136,160 L140,130 L140,100 L134,76 Q120,62 98,58 Z" fill="${silFill}" stroke="${silStroke}" stroke-width="1.5"/>
      <!-- left arm -->
      <path d="M26,80 L16,100 L12,132 L10,164 L16,194 L24,194 L22,164 L22,132 L28,105" fill="${silFill}" stroke="${silStroke}" stroke-width="1.5"/>
      <!-- right arm -->
      <path d="M134,80 L144,100 L148,132 L150,164 L144,194 L136,194 L138,164 L138,132 L132,105" fill="${silFill}" stroke="${silStroke}" stroke-width="1.5"/>

      <!-- CHEST -->
      <ellipse class="${cls('chest')}" cx="68" cy="98" rx="18" ry="22" data-m="Pectoralis Major"/>
      <ellipse class="${cls('chest')}" cx="92" cy="98" rx="18" ry="22" data-m="Pectoralis Major"/>

      <!-- FRONT SHOULDER -->
      <ellipse class="${cls('front_shoulder')}" cx="37" cy="84" rx="16" ry="13" data-m="Anterior Deltoid"/>
      <ellipse class="${cls('front_shoulder')}" cx="123" cy="84" rx="16" ry="13" data-m="Anterior Deltoid"/>

      <!-- SIDE SHOULDER (front view shows medial delt too) -->
      <ellipse class="${cls('side_shoulder') === 'svg-muscle inactive-m' ? cls('front_shoulder') : cls('side_shoulder')}" cx="29" cy="94" rx="10" ry="8" data-m="Medial Deltoid"/>
      <ellipse class="${cls('side_shoulder') === 'svg-muscle inactive-m' ? cls('front_shoulder') : cls('side_shoulder')}" cx="131" cy="94" rx="10" ry="8" data-m="Medial Deltoid"/>

      <!-- BICEPS -->
      <ellipse class="${cls('bicep')}" cx="21" cy="122" rx="10" ry="23" data-m="Biceps Brachii"/>
      <ellipse class="${cls('bicep')}" cx="139" cy="122" rx="10" ry="23" data-m="Biceps Brachii"/>

      <!-- FOREARMS -->
      <ellipse class="${cls('forearm')}" cx="16" cy="163" rx="9" ry="19" data-m="Forearm"/>
      <ellipse class="${cls('forearm')}" cx="144" cy="163" rx="9" ry="19" data-m="Forearm"/>

      <!-- ABS (3×2) -->
      <rect class="${cls('abs')}" x="70" y="124" width="8" height="10" rx="3" data-m="Rectus Abdominis"/>
      <rect class="${cls('abs')}" x="82" y="124" width="8" height="10" rx="3" data-m="Rectus Abdominis"/>
      <rect class="${cls('abs')}" x="70" y="137" width="8" height="10" rx="3" data-m="Rectus Abdominis"/>
      <rect class="${cls('abs')}" x="82" y="137" width="8" height="10" rx="3" data-m="Rectus Abdominis"/>
      <rect class="${cls('abs')}" x="70" y="150" width="8" height="10" rx="3" data-m="Rectus Abdominis"/>
      <rect class="${cls('abs')}" x="82" y="150" width="8" height="10" rx="3" data-m="Rectus Abdominis"/>

      <!-- QUADS -->
      <ellipse class="${cls('quad')}" cx="65" cy="258" rx="22" ry="38" data-m="Quadriceps"/>
      <ellipse class="${cls('quad')}" cx="95" cy="258" rx="22" ry="38" data-m="Quadriceps"/>

      <!-- CALVES front -->
      <ellipse class="${cls('calf')}" cx="63" cy="318" rx="13" ry="17" data-m="Gastrocnemius"/>
      <ellipse class="${cls('calf')}" cx="97" cy="318" rx="13" ry="17" data-m="Gastrocnemius"/>

      <text x="80" y="348" text-anchor="middle" fill="#555" font-size="8" font-family="Montserrat,sans-serif">FRONT</text>
    </svg>`;
  } else {
    return `<svg viewBox="0 0 160 348" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <!-- head -->
      <ellipse cx="80" cy="24" rx="20" ry="22" fill="${silFill}" stroke="${silStroke}" stroke-width="1.5"/>
      <rect x="74" y="44" width="12" height="15" rx="4" fill="${silFill}"/>
      <!-- torso -->
      <path d="M62,58 Q40,62 26,76 L20,100 L20,130 L24,160 L30,186 L42,218 L56,230 L64,265 L62,308 L70,342 L90,342 L98,308 L96,265 L104,230 L118,218 L130,186 L136,160 L140,130 L140,100 L134,76 Q120,62 98,58 Z" fill="${silFill}" stroke="${silStroke}" stroke-width="1.5"/>
      <!-- arms -->
      <path d="M26,80 L16,100 L12,132 L10,164 L16,194 L24,194 L22,164 L22,132 L28,105" fill="${silFill}" stroke="${silStroke}" stroke-width="1.5"/>
      <path d="M134,80 L144,100 L148,132 L150,164 L144,194 L136,194 L138,164 L138,132 L132,105" fill="${silFill}" stroke="${silStroke}" stroke-width="1.5"/>

      <!-- TRAPEZIUS -->
      <path class="${cls('trap')}" d="M62,60 L80,52 L98,60 L106,88 L80,78 L54,88 Z" data-m="Trapezius"/>

      <!-- REAR DELTS -->
      <ellipse class="${cls('rear_shoulder')}" cx="37" cy="84" rx="16" ry="13" data-m="Posterior Deltoid"/>
      <ellipse class="${cls('rear_shoulder')}" cx="123" cy="84" rx="16" ry="13" data-m="Posterior Deltoid"/>

      <!-- LATS -->
      <path class="${cls('lat')}" d="M38,92 L44,105 L46,132 L40,162 L33,167 L28,145 L26,118 L30,98 Z" data-m="Latissimus Dorsi"/>
      <path class="${cls('lat')}" d="M122,92 L116,105 L114,132 L120,162 L127,167 L132,145 L134,118 L130,98 Z" data-m="Latissimus Dorsi"/>

      <!-- RHOMBOIDS -->
      <ellipse class="${cls('rhomboid')}" cx="80" cy="108" rx="20" ry="24" data-m="Rhomboids"/>

      <!-- TRICEPS -->
      <ellipse class="${cls('tricep')}" cx="21" cy="122" rx="10" ry="23" data-m="Triceps Brachii"/>
      <ellipse class="${cls('tricep')}" cx="139" cy="122" rx="10" ry="23" data-m="Triceps Brachii"/>

      <!-- LOWER BACK (erectors) -->
      <rect class="${cls('lower_back')}" x="72" y="142" width="6" height="46" rx="3" data-m="Erector Spinae"/>
      <rect class="${cls('lower_back')}" x="82" y="142" width="6" height="46" rx="3" data-m="Erector Spinae"/>

      <!-- GLUTES -->
      <ellipse class="${cls('glute')}" cx="66" cy="210" rx="23" ry="20" data-m="Gluteus Maximus"/>
      <ellipse class="${cls('glute')}" cx="94" cy="210" rx="23" ry="20" data-m="Gluteus Maximus"/>

      <!-- HAMSTRINGS -->
      <ellipse class="${cls('hamstring')}" cx="65" cy="258" rx="21" ry="37" data-m="Hamstrings"/>
      <ellipse class="${cls('hamstring')}" cx="95" cy="258" rx="21" ry="37" data-m="Hamstrings"/>

      <!-- CALVES back -->
      <ellipse class="${cls('calf')}" cx="63" cy="318" rx="13" ry="17" data-m="Gastrocnemius"/>
      <ellipse class="${cls('calf')}" cx="97" cy="318" rx="13" ry="17" data-m="Gastrocnemius"/>

      <text x="80" y="348" text-anchor="middle" fill="#555" font-size="8" font-family="Montserrat,sans-serif">BACK</text>
    </svg>`;
  }
}

// ── Coaches section renderer ──────────────────────────────────────
function renderCoaches() {
  const c = COACH_DATA;
  const coachGrid = document.getElementById('coaches-grid');
  if (!coachGrid) return;

  coachGrid.innerHTML = `
    <div class="max-w-4xl mx-auto">
      <!-- Featured Coach Card -->
      <div class="bg-fitzone-gray rounded-2xl overflow-hidden coach-card-featured mb-10">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="relative">
            <img src="${c.image}" alt="Coach ${c.name}" class="w-full h-80 md:h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent to-fitzone-gray/60 hidden md:block"></div>
            <div class="absolute bottom-0 left-0 right-0 md:hidden bg-gradient-to-t from-fitzone-gray to-transparent h-24"></div>
          </div>
          <div class="p-8 flex flex-col justify-center">
            <div class="flex items-center gap-3 mb-2">
              <span class="text-xs font-bold px-3 py-1 rounded-full bg-fitzone-neon/20 text-fitzone-neon border border-fitzone-neon/30">
                <i class="fas fa-star mr-1"></i>HEAD COACH
              </span>
            </div>
            <h3 class="text-3xl font-bold mb-1">Coach ${c.name}</h3>
            <p class="text-fitzone-neon font-bold mb-1 text-sm">${c.title}</p>
            <p class="text-fitzone-neon-alt text-xs mb-4">${c.tagline}</p>
            <p class="text-gray-300 text-sm mb-5 leading-relaxed">${c.bio}</p>

            <!-- Specialties -->
            <div class="flex flex-wrap gap-2 mb-6">
              ${c.specialties.map(s => `<span class="text-xs px-2 py-1 rounded-full bg-fitzone-dark text-gray-300 border border-fitzone-gray-light">${s}</span>`).join('')}
            </div>

            <!-- Social & Contact -->
            <div class="flex flex-wrap items-center gap-3">
              <a href="${c.social.facebook}" class="social-icon-btn bg-[#1877F2]" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
              <a href="${c.social.instagram}" class="social-icon-btn bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
              <a href="${c.social.youtube}" class="social-icon-btn bg-[#FF0000]" title="YouTube" target="_blank"><i class="fab fa-youtube"></i></a>
              <a href="${c.social.tiktok}" class="social-icon-btn bg-[#010101]" title="TikTok" target="_blank"><i class="fab fa-tiktok"></i></a>
              <button onclick="openCoachMessageModal()" class="ml-2 bg-fitzone-neon text-fitzone-dark px-5 py-2 rounded-full font-bold text-sm btn-neon flex items-center gap-2">
                <i class="fas fa-comment-alt"></i> Message Coach
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Certifications -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        ${c.certifications.map((cert, i) => `
          <div class="bg-fitzone-gray rounded-xl p-5 flex items-center gap-4 hover:border-fitzone-neon border border-transparent transition">
            <div class="w-10 h-10 rounded-full bg-fitzone-neon/20 flex items-center justify-center flex-shrink-0">
              <i class="fas fa-certificate text-fitzone-neon"></i>
            </div>
            <span class="text-sm font-semibold">${cert}</span>
          </div>`).join('')}
      </div>
    </div>`;
}

function openCoachMessageModal() {
  // Scroll to contact section and prefill subject
  showSection('contact');
  const subj = document.getElementById('contact-subject');
  if (subj) subj.value = 'Personal Training Inquiry';
  const name = document.getElementById('contact-name');
  if (name) name.focus();
}

// ── Close modal on ESC ────────────────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeExerciseModal();
});

document.getElementById('exercise-modal')?.addEventListener('click', e => {
  if (e.target === document.getElementById('exercise-modal')) closeExerciseModal();
});
