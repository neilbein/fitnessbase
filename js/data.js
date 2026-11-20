// js/data.js — All workout & exercise data

const WORKOUTS = {

  push: {
    name: 'Push Day',
    subtitle: 'Chest · Shoulders · Triceps',
    icon: 'fa-hand-point-up',
    color: '#39ff14',
    muscleGroups: [
      {
        name: 'Chest',
        icon: 'fa-heart',
        exercises: [
          {
            id: 'bench-press', name: 'Bench Press', equipment: 'Barbell',
            difficulty: 'intermediate', sets: 4, reps: '8-12', rest: '90 sec',
            primaryMuscles: ['chest'], secondaryMuscles: ['front_shoulder', 'tricep'],
            bodyView: 'front',
            description: 'The fundamental chest compound exercise for mass and strength.',
            instructions: ['Lie flat on bench, feet on floor', 'Grip bar slightly wider than shoulders', 'Lower bar to mid-chest with control', 'Press up until arms are extended', 'Squeeze chest at the top'],
            tips: ['Keep shoulder blades retracted', 'Slight arch in lower back is OK', "Don't bounce the bar off your chest"],
            image: 'https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg',
            youtubeQuery: 'bench press proper form tutorial'
          },
          {
            id: 'incline-db-press', name: 'Incline Dumbbell Press', equipment: 'Dumbbells',
            difficulty: 'intermediate', sets: 3, reps: '10-12', rest: '75 sec',
            primaryMuscles: ['chest'], secondaryMuscles: ['front_shoulder', 'tricep'],
            bodyView: 'front',
            description: 'Targets upper chest for a fuller appearance.',
            instructions: ['Set bench to 30-45° incline', 'Hold dumbbells at shoulder level', 'Press up and slightly inward', 'Lower with control to full stretch'],
            tips: ['Keep elbows at 60-75° from torso', 'Feel the upper chest stretch at bottom'],
            image: 'https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg',
            youtubeQuery: 'incline dumbbell press form tutorial'
          },
          {
            id: 'cable-fly', name: 'Cable Chest Fly', equipment: 'Cable Machine',
            difficulty: 'beginner', sets: 3, reps: '12-15', rest: '60 sec',
            primaryMuscles: ['chest'], secondaryMuscles: ['front_shoulder'],
            bodyView: 'front',
            description: 'Isolates the chest with constant cable tension throughout the movement.',
            instructions: ['Set cables at shoulder height', 'Stand in center, step forward', 'Bring handles together in front of chest', 'Slowly open arms back to start'],
            tips: ['Keep slight bend in elbows', 'Feel the chest stretch on the way out'],
            image: 'https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg',
            youtubeQuery: 'cable chest fly proper form'
          },
          {
            id: 'pushups', name: 'Push-Ups', equipment: 'Bodyweight',
            difficulty: 'beginner', sets: 3, reps: '15-20', rest: '45 sec',
            primaryMuscles: ['chest'], secondaryMuscles: ['tricep', 'front_shoulder'],
            bodyView: 'front',
            description: 'Classic bodyweight movement — accessible everywhere, effective always.',
            instructions: ['Place hands slightly wider than shoulders', 'Maintain a straight body line head to heels', 'Lower chest toward floor', 'Push back up to full extension'],
            tips: ["Don't let hips sag or pike", 'Look slightly ahead, not straight down'],
            image: 'https://cdn.pixabay.com/photo/2016/11/22/22/25/abs-1850926_1280.jpg',
            youtubeQuery: 'push ups proper form tutorial'
          },
          {
            id: 'chest-dips', name: 'Chest Dips', equipment: 'Dip Bars',
            difficulty: 'intermediate', sets: 3, reps: '10-15', rest: '75 sec',
            primaryMuscles: ['chest'], secondaryMuscles: ['tricep', 'front_shoulder'],
            bodyView: 'front',
            description: 'Excellent for lower chest development and overall pressing strength.',
            instructions: ['Hold parallel bars and support your weight', 'Lean torso forward for chest emphasis', 'Lower until shoulders pass elbows', 'Press back up to start'],
            tips: ['More forward lean = more chest', 'Go to full depth for best results'],
            image: 'https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg',
            youtubeQuery: 'chest dips proper form tutorial'
          }
        ]
      },
      {
        name: 'Shoulders',
        icon: 'fa-angle-double-up',
        exercises: [
          {
            id: 'overhead-press', name: 'Overhead Press', equipment: 'Barbell',
            difficulty: 'intermediate', sets: 4, reps: '6-10', rest: '90 sec',
            primaryMuscles: ['front_shoulder', 'side_shoulder'], secondaryMuscles: ['tricep', 'trap'],
            bodyView: 'front',
            description: 'The king of shoulder exercises for overall mass and pressing strength.',
            instructions: ['Stand with bar at shoulder height', 'Grip slightly wider than shoulders', 'Brace core, press bar straight overhead', 'Lock out at top, lower with control'],
            tips: ['Brace your core throughout', "Don't hyperextend your lower back"],
            image: 'https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg',
            youtubeQuery: 'overhead press barbell proper form'
          },
          {
            id: 'lateral-raises', name: 'Lateral Raises', equipment: 'Dumbbells',
            difficulty: 'beginner', sets: 4, reps: '12-15', rest: '60 sec',
            primaryMuscles: ['side_shoulder'], secondaryMuscles: ['trap'],
            bodyView: 'front',
            description: 'The essential exercise for building shoulder width.',
            instructions: ['Stand with dumbbells at sides', 'Raise arms out to sides until parallel to floor', 'Hold briefly at top', 'Lower slowly to start'],
            tips: ['Lead with elbows, not wrists', 'Slight forward lean emphasizes medial delt'],
            image: 'https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg',
            youtubeQuery: 'lateral raises proper form shoulder'
          },
          {
            id: 'arnold-press', name: 'Arnold Press', equipment: 'Dumbbells',
            difficulty: 'intermediate', sets: 3, reps: '10-12', rest: '75 sec',
            primaryMuscles: ['front_shoulder', 'side_shoulder'], secondaryMuscles: ['tricep'],
            bodyView: 'front',
            description: 'Hits all three deltoid heads with a unique rotation pattern.',
            instructions: ['Start with dumbbells at chin, palms facing you', 'Press up while rotating palms to face outward', 'At top, palms face forward', 'Reverse rotation on the way down'],
            tips: ['Control the rotation', 'Full range of motion matters here'],
            image: 'https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg',
            youtubeQuery: 'arnold press dumbbell form tutorial'
          },
          {
            id: 'front-raises', name: 'Front Raises', equipment: 'Dumbbells',
            difficulty: 'beginner', sets: 3, reps: '12-15', rest: '60 sec',
            primaryMuscles: ['front_shoulder'], secondaryMuscles: [],
            bodyView: 'front',
            description: 'Isolates the anterior deltoid directly.',
            instructions: ['Stand with dumbbells in front of thighs', 'Raise both arms forward to shoulder height', 'Hold briefly at top', 'Lower with control'],
            tips: ['Keep slight bend in elbows', "Don't use momentum — slow and controlled"],
            image: 'https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg',
            youtubeQuery: 'front raises shoulder form tutorial'
          },
          {
            id: 'face-pulls', name: 'Face Pulls', equipment: 'Cable Machine',
            difficulty: 'beginner', sets: 3, reps: '15-20', rest: '60 sec',
            primaryMuscles: ['rear_shoulder'], secondaryMuscles: ['trap'],
            bodyView: 'back',
            description: 'Essential for shoulder health, posture, and rear delt development.',
            instructions: ['Set cable at upper chest height with rope attachment', 'Pull toward face, keeping elbows high and wide', 'Focus on squeezing rear delts at the end', 'Return with control'],
            tips: ['Essential for shoulder health — do these every push session', 'Use lighter weight, prioritize form'],
            image: 'https://cdn.pixabay.com/photo/2017/08/07/14/02/people-2604149_1280.jpg',
            youtubeQuery: 'face pulls cable shoulder form tutorial'
          }
        ]
      },
      {
        name: 'Triceps',
        icon: 'fa-hand-scissors',
        exercises: [
          {
            id: 'tricep-pushdown', name: 'Tricep Pushdown (Rope)', equipment: 'Cable Machine',
            difficulty: 'beginner', sets: 3, reps: '12-15', rest: '60 sec',
            primaryMuscles: ['tricep'], secondaryMuscles: [],
            bodyView: 'back',
            description: 'The most popular tricep isolation exercise. Great for the pump.',
            instructions: ['Set cable at top position with rope attachment', 'Keep elbows at sides throughout', 'Push rope down and splay at the bottom', 'Return slowly to starting position'],
            tips: ['Keep elbows stationary at your sides', 'Full extension and squeeze at bottom'],
            image: 'https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg',
            youtubeQuery: 'tricep rope pushdown cable form tutorial'
          },
          {
            id: 'skull-crushers', name: 'Skull Crushers', equipment: 'EZ Bar',
            difficulty: 'intermediate', sets: 3, reps: '10-12', rest: '75 sec',
            primaryMuscles: ['tricep'], secondaryMuscles: [],
            bodyView: 'back',
            description: 'Excellent mass builder for the triceps. Hits all three heads.',
            instructions: ['Lie on bench, hold EZ bar above chest', 'Lower bar toward forehead by bending elbows', 'Keep upper arms vertical throughout', 'Extend back to starting position'],
            tips: ['Keep elbows shoulder-width — no flaring', 'Control the weight on the way down'],
            image: 'https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg',
            youtubeQuery: 'skull crushers EZ bar form tutorial'
          },
          {
            id: 'overhead-tricep-ext', name: 'Overhead Tricep Extension', equipment: 'Dumbbell',
            difficulty: 'beginner', sets: 3, reps: '12-15', rest: '60 sec',
            primaryMuscles: ['tricep'], secondaryMuscles: [],
            bodyView: 'back',
            description: 'Stretches the long head of the tricep for complete development.',
            instructions: ['Hold dumbbell overhead with both hands', 'Lower behind head by bending elbows only', 'Keep upper arms close to your ears', 'Extend back to starting position'],
            tips: ['The overhead stretch is unique to this exercise', 'Control the weight throughout'],
            image: 'https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg',
            youtubeQuery: 'overhead tricep extension dumbbell form'
          },
          {
            id: 'close-grip-bench', name: 'Close-Grip Bench Press', equipment: 'Barbell',
            difficulty: 'intermediate', sets: 3, reps: '8-12', rest: '90 sec',
            primaryMuscles: ['tricep'], secondaryMuscles: ['chest', 'front_shoulder'],
            bodyView: 'back',
            description: 'Compound movement that builds serious tricep mass and strength.',
            instructions: ['Grip barbell at shoulder width (closer than normal)', 'Lower bar to lower chest', 'Keep elbows tucked close to body', 'Press up focusing on the triceps'],
            tips: ["Don't grip too narrow — it strains your wrists", 'Elbows stay tucked throughout'],
            image: 'https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg',
            youtubeQuery: 'close grip bench press tricep form'
          },
          {
            id: 'bench-tricep-dips', name: 'Tricep Bench Dips', equipment: 'Bench',
            difficulty: 'beginner', sets: 3, reps: '12-15', rest: '60 sec',
            primaryMuscles: ['tricep'], secondaryMuscles: ['front_shoulder'],
            bodyView: 'back',
            description: 'Beginner-friendly bodyweight tricep exercise. Great warm-up or finisher.',
            instructions: ['Place hands on bench edge behind you', 'Extend legs out in front', 'Lower body by bending elbows to 90°', 'Push back up to full extension'],
            tips: ['Keep back close to bench', "Don't let shoulders creep toward ears"],
            image: 'https://cdn.pixabay.com/photo/2016/11/29/09/10/man-1868632_1280.jpg',
            youtubeQuery: 'bench tricep dips form tutorial'
          }
        ]
      }
    ]
  },

  pull: {
    name: 'Pull Day',
    subtitle: 'Back · Biceps',
    icon: 'fa-hand-point-down',
    color: '#00FFFF',
    muscleGroups: [
      {
        name: 'Back',
        icon: 'fa-expand-arrows-alt',
        exercises: [
          {
            id: 'pull-ups', name: 'Pull-Ups', equipment: 'Pull-Up Bar',
            difficulty: 'intermediate', sets: 4, reps: '6-12', rest: '90 sec',
            primaryMuscles: ['lat'], secondaryMuscles: ['bicep', 'rear_shoulder'],
            bodyView: 'back',
            description: 'The ultimate back-width builder. No machine replaces this.',
            instructions: ['Hang from bar with overhand grip, shoulder-width', 'Pull yourself up until chin clears the bar', 'Squeeze lats at the top', 'Lower slowly to full hang'],
            tips: ['Initiate with lats, not biceps', 'Full dead hang at the bottom for max range'],
            image: 'https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg',
            youtubeQuery: 'pull ups proper form tutorial beginners'
          },
          {
            id: 'barbell-row', name: 'Barbell Bent-Over Row', equipment: 'Barbell',
            difficulty: 'intermediate', sets: 4, reps: '8-12', rest: '90 sec',
            primaryMuscles: ['lat', 'rhomboid'], secondaryMuscles: ['bicep', 'rear_shoulder'],
            bodyView: 'back',
            description: 'The fundamental compound movement for back thickness and density.',
            instructions: ['Hinge at hips until back is nearly parallel to floor', 'Grip bar with overhand, shoulder-width', 'Pull bar to lower chest, squeezing shoulder blades', 'Lower with control to full extension'],
            tips: ['Keep back flat — no rounding', 'Lead with elbows, not hands'],
            image: 'https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg',
            youtubeQuery: 'barbell row bent over form tutorial'
          },
          {
            id: 'lat-pulldown', name: 'Lat Pulldown', equipment: 'Cable Machine',
            difficulty: 'beginner', sets: 3, reps: '10-12', rest: '75 sec',
            primaryMuscles: ['lat'], secondaryMuscles: ['bicep'],
            bodyView: 'back',
            description: 'Great lat builder accessible to all fitness levels.',
            instructions: ['Sit at lat pulldown, bar slightly wider than shoulders', 'Pull bar to upper chest, slight lean back', 'Squeeze lats at the bottom', 'Control the weight back up to full extension'],
            tips: ['Lean back slightly for better lat engagement', 'Drive elbows down and back'],
            image: 'https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg',
            youtubeQuery: 'lat pulldown proper form tutorial'
          },
          {
            id: 'seated-cable-row', name: 'Seated Cable Row', equipment: 'Cable Machine',
            difficulty: 'beginner', sets: 3, reps: '12-15', rest: '75 sec',
            primaryMuscles: ['lat', 'rhomboid'], secondaryMuscles: ['bicep', 'rear_shoulder'],
            bodyView: 'back',
            description: 'Excellent for back thickness, posture, and scapular strength.',
            instructions: ['Sit at cable row with feet on the platform', 'Pull handle to lower abdomen', 'Keep chest up, squeeze shoulder blades together', 'Return with control, getting full stretch'],
            tips: ["Don't round your lower back", 'Get a full stretch at the start of each rep'],
            image: 'https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg',
            youtubeQuery: 'seated cable row proper form tutorial'
          },
          {
            id: 'single-arm-row', name: 'Single-Arm DB Row', equipment: 'Dumbbell',
            difficulty: 'beginner', sets: 3, reps: '10-12 each', rest: '60 sec',
            primaryMuscles: ['lat'], secondaryMuscles: ['bicep', 'rear_shoulder'],
            bodyView: 'back',
            description: 'Unilateral row for balanced back development. Eliminates weak-side compensation.',
            instructions: ['Place same-side knee and hand on bench', 'Row dumbbell up to hip level', 'Squeeze lat hard at the top', 'Lower with full stretch'],
            tips: ["Don't rotate your torso to lift", 'Keep back flat and parallel to floor'],
            image: 'https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg',
            youtubeQuery: 'single arm dumbbell row proper form'
          }
        ]
      },
      {
        name: 'Biceps',
        icon: 'fa-fist-raised',
        exercises: [
          {
            id: 'barbell-curl', name: 'Barbell Curl', equipment: 'Barbell',
            difficulty: 'beginner', sets: 3, reps: '10-12', rest: '60 sec',
            primaryMuscles: ['bicep'], secondaryMuscles: ['forearm'],
            bodyView: 'front',
            description: 'The classic bicep mass builder for size and strength.',
            instructions: ['Stand with barbell at thigh level', 'Curl bar up to shoulder height', 'Squeeze biceps hard at top', 'Lower slowly to full extension'],
            tips: ['Keep elbows stationary at your sides', "Don't swing or use momentum"],
            image: 'https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg',
            youtubeQuery: 'barbell curl proper form bicep tutorial'
          },
          {
            id: 'hammer-curl', name: 'Hammer Curl', equipment: 'Dumbbells',
            difficulty: 'beginner', sets: 3, reps: '12-15', rest: '60 sec',
            primaryMuscles: ['bicep', 'forearm'], secondaryMuscles: [],
            bodyView: 'front',
            description: 'Builds brachialis and brachioradialis for overall arm thickness.',
            instructions: ['Hold dumbbells with neutral grip (thumbs up)', 'Curl up keeping palms facing each other throughout', 'Squeeze at top', 'Lower with full control'],
            tips: ['Great for overall arm size', 'Can alternate arms or do both simultaneously'],
            image: 'https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg',
            youtubeQuery: 'hammer curl dumbbell form tutorial'
          },
          {
            id: 'incline-db-curl', name: 'Incline Dumbbell Curl', equipment: 'Dumbbells',
            difficulty: 'intermediate', sets: 3, reps: '10-12', rest: '75 sec',
            primaryMuscles: ['bicep'], secondaryMuscles: [],
            bodyView: 'front',
            description: 'The stretch position maximizes long-head bicep activation.',
            instructions: ['Sit on 45-60° incline bench', 'Let arms hang fully extended at sides', 'Curl both dumbbells simultaneously', 'Squeeze hard at top, lower slowly for full stretch'],
            tips: ['The stretch at the bottom is what makes this special', "Don't cheat the movement"],
            image: 'https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg',
            youtubeQuery: 'incline dumbbell curl bicep form tutorial'
          },
          {
            id: 'preacher-curl', name: 'Preacher Curl', equipment: 'EZ Bar',
            difficulty: 'beginner', sets: 3, reps: '10-12', rest: '60 sec',
            primaryMuscles: ['bicep'], secondaryMuscles: [],
            bodyView: 'front',
            description: 'Pad eliminates cheating — pure bicep isolation.',
            instructions: ['Sit at preacher bench, arms resting on pad', 'Curl bar up to shoulder level', 'Squeeze biceps hard at top', 'Lower slowly to near full extension (not all the way)'],
            tips: ["Don't hyperextend at the bottom — it strains tendons", 'Full contraction at top'],
            image: 'https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg',
            youtubeQuery: 'preacher curl EZ bar form tutorial'
          },
          {
            id: 'cable-curl', name: 'Cable Curl', equipment: 'Cable Machine',
            difficulty: 'beginner', sets: 3, reps: '12-15', rest: '60 sec',
            primaryMuscles: ['bicep'], secondaryMuscles: [],
            bodyView: 'front',
            description: 'Constant cable tension means constant muscle activation throughout.',
            instructions: ['Set cable at floor level', 'Stand facing machine, curl straight bar up', 'Squeeze hard at top', 'Lower with control'],
            tips: ['Constant tension from cable is great for peak contraction', 'Great finisher exercise'],
            image: 'https://cdn.pixabay.com/photo/2015/07/02/10/22/training-828726_1280.jpg',
            youtubeQuery: 'cable curl bicep form tutorial'
          }
        ]
      }
    ]
  },

  legs: {
    name: 'Legs Day',
    subtitle: 'Quads · Hamstrings · Glutes · Calves',
    icon: 'fa-walking',
    color: '#FF6B35',
    muscleGroups: [
      {
        name: 'Quadriceps',
        icon: 'fa-arrow-down',
        exercises: [
          {
            id: 'barbell-squat', name: 'Barbell Squat', equipment: 'Barbell',
            difficulty: 'advanced', sets: 4, reps: '6-10', rest: '120 sec',
            primaryMuscles: ['quad'], secondaryMuscles: ['glute', 'hamstring', 'lower_back'],
            bodyView: 'front',
            description: 'The king of all exercises. Nothing builds legs like heavy squats.',
            instructions: ['Set bar on upper traps/rear delts', 'Feet shoulder-width, toes slightly out', 'Squat down until thighs are parallel to floor', 'Drive through heels to stand — chest stays up'],
            tips: ['Chest up, core braced throughout', 'Push knees out in line with your toes'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'barbell squat proper form tutorial'
          },
          {
            id: 'leg-press', name: 'Leg Press', equipment: 'Machine',
            difficulty: 'beginner', sets: 4, reps: '10-15', rest: '90 sec',
            primaryMuscles: ['quad'], secondaryMuscles: ['glute', 'hamstring'],
            bodyView: 'front',
            description: 'Great quad builder with significantly less spinal loading.',
            instructions: ['Sit with feet shoulder-width on the platform', 'Lower weight until knees reach ~90°', "Press back to start — don't lock out knees"],
            tips: ["Don't let lower back round off the seat", 'High foot placement = more glutes'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'leg press machine proper form tutorial'
          },
          {
            id: 'leg-extension', name: 'Leg Extension', equipment: 'Machine',
            difficulty: 'beginner', sets: 3, reps: '12-15', rest: '60 sec',
            primaryMuscles: ['quad'], secondaryMuscles: [],
            bodyView: 'front',
            description: 'Direct quad isolation. Perfect finisher after compound movements.',
            instructions: ['Sit with pad over ankles', 'Extend legs fully until straight', 'Hold at top briefly', 'Lower with control'],
            tips: ['Squeeze quads hard at the top', 'Full extension for best quad development'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'leg extension machine form tutorial'
          },
          {
            id: 'lunges', name: 'Walking Lunges', equipment: 'Dumbbells',
            difficulty: 'beginner', sets: 3, reps: '12 each leg', rest: '75 sec',
            primaryMuscles: ['quad'], secondaryMuscles: ['glute', 'hamstring'],
            bodyView: 'front',
            description: 'Functional movement for lower body size, strength, and coordination.',
            instructions: ['Step forward with one leg', 'Lower back knee toward floor', 'Push through front heel to bring back leg forward', 'Alternate legs as you walk'],
            tips: ['Torso stays upright throughout', 'Front knee stays directly over ankle'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'walking lunges proper form tutorial'
          }
        ]
      },
      {
        name: 'Hamstrings',
        icon: 'fa-angle-down',
        exercises: [
          {
            id: 'romanian-dl', name: 'Romanian Deadlift', equipment: 'Barbell',
            difficulty: 'intermediate', sets: 4, reps: '8-12', rest: '90 sec',
            primaryMuscles: ['hamstring'], secondaryMuscles: ['glute', 'lower_back'],
            bodyView: 'back',
            description: 'The best hamstring builder for size, strength, and flexibility.',
            instructions: ['Stand holding barbell at hips', 'Hinge at hips, pushing them back', 'Lower bar along legs until you feel a strong hamstring stretch', 'Drive hips forward to return'],
            tips: ['Keep bar close to body throughout', 'Feel the stretch — that is the point of this exercise'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'romanian deadlift RDL form tutorial'
          },
          {
            id: 'lying-leg-curl', name: 'Lying Leg Curl', equipment: 'Machine',
            difficulty: 'beginner', sets: 3, reps: '12-15', rest: '60 sec',
            primaryMuscles: ['hamstring'], secondaryMuscles: [],
            bodyView: 'back',
            description: 'Direct hamstring isolation. Essential for balanced leg development.',
            instructions: ['Lie face down on machine', 'Hook ankles under the pad', 'Curl legs toward glutes', 'Lower with full control'],
            tips: ['Full range of motion', 'Squeeze hard at the top of each rep'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'lying leg curl machine form tutorial'
          },
          {
            id: 'stiff-leg-dl', name: 'Stiff-Leg Deadlift', equipment: 'Barbell',
            difficulty: 'intermediate', sets: 3, reps: '10-12', rest: '90 sec',
            primaryMuscles: ['hamstring'], secondaryMuscles: ['glute', 'lower_back'],
            bodyView: 'back',
            description: 'Greater hamstring emphasis than conventional deadlift due to minimal knee bend.',
            instructions: ['Stand with barbell', 'Keep legs nearly straight with minimal knee bend', 'Hinge at hips and lower bar to mid-shin', 'Return to standing, squeezing glutes at top'],
            tips: ['Keep back flat — do not round', 'Feel deep hamstring stretch at bottom'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'stiff leg deadlift form tutorial'
          },
          {
            id: 'good-mornings', name: 'Good Mornings', equipment: 'Barbell',
            difficulty: 'intermediate', sets: 3, reps: '10-12', rest: '75 sec',
            primaryMuscles: ['hamstring', 'lower_back'], secondaryMuscles: ['glute'],
            bodyView: 'back',
            description: 'Builds hamstring flexibility and lower back strength simultaneously.',
            instructions: ['Place bar on upper back as with a squat', 'Hinge forward at hips with slight knee bend', 'Go until torso is roughly parallel to floor', 'Return to upright by driving hips forward'],
            tips: ['Start light — this is technical', 'Keep knees slightly bent throughout'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'good mornings barbell form tutorial'
          }
        ]
      },
      {
        name: 'Glutes',
        icon: 'fa-circle',
        exercises: [
          {
            id: 'hip-thrust', name: 'Barbell Hip Thrust', equipment: 'Barbell + Bench',
            difficulty: 'intermediate', sets: 4, reps: '10-12', rest: '90 sec',
            primaryMuscles: ['glute'], secondaryMuscles: ['hamstring'],
            bodyView: 'back',
            description: 'The single most effective glute isolation exercise ever researched.',
            instructions: ['Sit with upper back against bench edge', 'Place barbell across hip crease with pad', 'Drive hips up until body forms a flat line', 'Squeeze glutes hard at top, lower slowly'],
            tips: ['Chin to chest to protect spine', 'Full hip extension at top — really squeeze'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'barbell hip thrust glute form tutorial'
          },
          {
            id: 'glute-bridge', name: 'Glute Bridge', equipment: 'Bodyweight',
            difficulty: 'beginner', sets: 3, reps: '15-20', rest: '60 sec',
            primaryMuscles: ['glute'], secondaryMuscles: ['hamstring'],
            bodyView: 'back',
            description: 'Beginner-friendly glute activation that is accessible to everyone.',
            instructions: ['Lie on back with knees bent, feet flat on floor', 'Drive hips up by squeezing glutes', 'Hold at top for 2 seconds', 'Lower slowly'],
            tips: ['Activate glutes, not lower back', 'Single-leg variation adds challenge'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'glute bridge proper form tutorial'
          },
          {
            id: 'sumo-squat', name: 'Sumo Squat', equipment: 'Dumbbell',
            difficulty: 'beginner', sets: 3, reps: '12-15', rest: '75 sec',
            primaryMuscles: ['glute', 'quad'], secondaryMuscles: ['hamstring'],
            bodyView: 'back',
            description: 'Wide stance shifts emphasis to glutes and inner thighs.',
            instructions: ['Stand with wide stance, toes pointed significantly out', 'Hold dumbbell vertically between legs', 'Squat down with knees tracking over toes', 'Drive through heels, squeezing glutes at top'],
            tips: ['Wider stance = more glute activation', 'Keep chest tall throughout'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'sumo squat glute form tutorial'
          },
          {
            id: 'cable-kickback', name: 'Cable Kickback', equipment: 'Cable Machine',
            difficulty: 'beginner', sets: 3, reps: '15 each side', rest: '60 sec',
            primaryMuscles: ['glute'], secondaryMuscles: ['hamstring'],
            bodyView: 'back',
            description: 'Directly isolates glutes with constant cable tension.',
            instructions: ['Attach ankle cuff to cable at floor height', 'Hinge slightly forward with hands on machine', 'Kick leg back and up, squeezing glute at the top', 'Return slowly to start'],
            tips: ["Don't rotate your hip outward", 'Quality over quantity — feel the glute work'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'cable kickback glute form tutorial'
          }
        ]
      },
      {
        name: 'Calves',
        icon: 'fa-angle-double-down',
        exercises: [
          {
            id: 'standing-calf-raise', name: 'Standing Calf Raise', equipment: 'Machine / Step',
            difficulty: 'beginner', sets: 4, reps: '15-20', rest: '60 sec',
            primaryMuscles: ['calf'], secondaryMuscles: [],
            bodyView: 'back',
            description: 'Primary calf exercise targeting the gastrocnemius (outer calf).',
            instructions: ['Stand on edge of step with heels hanging off', 'Lower heels below step level for full stretch', 'Rise up on toes as high as possible', 'Hold at top, then lower slowly'],
            tips: ['Full range of motion is critical for calf growth', 'Slow negatives are your best tool here'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'standing calf raise form tutorial'
          },
          {
            id: 'seated-calf-raise', name: 'Seated Calf Raise', equipment: 'Machine',
            difficulty: 'beginner', sets: 3, reps: '15-20', rest: '60 sec',
            primaryMuscles: ['calf'], secondaryMuscles: [],
            bodyView: 'back',
            description: 'Bent knee position targets the soleus muscle for complete calf development.',
            instructions: ['Sit with pads on knees and balls of feet on platform', 'Lower heels toward floor for full stretch', 'Press up on toes as high as possible', 'Full range, controlled movement'],
            tips: ['Seated targets the soleus — do both seated and standing for complete calves'],
            image: 'https://cdn.pixabay.com/photo/2018/04/05/17/21/kettlebell-3293475_1280.jpg',
            youtubeQuery: 'seated calf raise machine form tutorial'
          },
          {
            id: 'jump-rope', name: 'Jump Rope', equipment: 'Jump Rope',
            difficulty: 'beginner', sets: 3, reps: '2 minutes', rest: '60 sec',
            primaryMuscles: ['calf'], secondaryMuscles: ['quad', 'front_shoulder'],
            bodyView: 'front',
            description: 'Cardio and calf conditioning combined. Great warm-up or circuit finisher.',
            instructions: ['Hold rope handles lightly at hip level', 'Swing rope over head in a smooth arc', 'Jump on balls of feet — keep jumps small', 'Build rhythm and maintain consistent pace'],
            tips: ['Stay on balls of feet throughout', 'Build up duration gradually'],
            image: 'https://cdn.pixabay.com/photo/2017/08/06/12/52/woman-2592247_1280.jpg',
            youtubeQuery: 'jump rope technique tutorial beginners'
          }
        ]
      }
    ]
  }
};

// Upper/Lower splits reuse PPL data
const UPPER_DATA = {
  name: 'Upper Body',
  subtitle: 'Chest · Back · Shoulders · Biceps · Triceps · Arms',
  icon: 'fa-angle-double-up',
  color: '#39ff14',
  muscleGroups: [
    ...WORKOUTS.push.muscleGroups,
    ...WORKOUTS.pull.muscleGroups
  ]
};

const LOWER_DATA = {
  name: 'Lower Body',
  subtitle: 'Quads · Hamstrings · Glutes · Calves',
  icon: 'fa-angle-double-down',
  color: '#FF6B35',
  muscleGroups: WORKOUTS.legs.muscleGroups
};

const COACH_DATA = {
  id: 'neil-bein',
  name: 'Neil Bein',
  title: 'Head Coach & Personal Trainer',
  tagline: 'Strength • Hypertrophy • Body Transformation',
  bio: 'Coach Neil Bein is a certified personal trainer specializing in strength training and body transformation. With a passion for helping clients unlock their full potential, Neil creates personalized programs that deliver real, sustainable results.',
  fullBio: 'Coach Neil Bein brings a results-driven approach to fitness coaching. Specializing in hypertrophy, strength building, and body recomposition, Neil has helped countless clients transform their physiques and lifestyles. His coaching philosophy centers on progressive overload, smart nutrition, and consistency. Whether you\'re a beginner looking to build your foundation or an advanced athlete pushing to the next level, Coach Neil will design a program tailored specifically to your goals.',
  certifications: ['Certified Personal Trainer (CPT)', 'Strength & Conditioning Specialist', 'Nutrition Coach'],
  specialties: ['Hypertrophy Training', 'Body Transformation', 'Strength Building', 'PPL Programming', 'Nutrition Guidance'],
  image: 'https://cdn.pixabay.com/photo/2022/09/21/02/00/fitness-trainer-7468543_1280.jpg',
  social: {
    facebook: '#',
    instagram: '#',
    youtube: '#',
    tiktok: '#',
    email: 'sulasoktv44@gmail.com'
  }
};
