    // ============================================================
    // RECIPE LIBRARY (16 recipes with full steps + tags)
    // ============================================================
    const RECIPES = [
      { id:"spaghetti", name:"Spaghetti Bolognese", emoji:"🍝", baseServings:4, time:"30 min",
        cuisine:"italian", mealType:"dinner", difficulty:"easy", tags:["kid-friendly","comfort"],
        ingredients:[
          {name:"Spaghetti",qty:1,unit:"lb"},{name:"Ground beef",qty:1,unit:"lb"},
          {name:"Yellow onion",qty:1,unit:""},{name:"Garlic cloves",qty:3,unit:""},
          {name:"Crushed tomatoes",qty:28,unit:"oz can"},{name:"Olive oil",qty:2,unit:"tbsp"},
          {name:"Parmesan cheese",qty:0.5,unit:"cup"},{name:"Fresh basil",qty:1,unit:"bunch"}],
        steps:["Bring a large pot of salted water to a boil.",
          "Heat olive oil in a large skillet. Add diced onion and garlic; cook until soft, ~5 min.",
          "Add ground beef and brown, breaking up as it cooks.",
          "Pour in crushed tomatoes, season with salt and pepper. Simmer 15 min.",
          "Meanwhile, cook spaghetti according to package directions.",
          "Drain pasta, toss with sauce, and top with parmesan and torn basil."] },
      { id:"tacos", name:"Chicken Tacos", emoji:"🌮", baseServings:4, time:"25 min",
        cuisine:"mexican", mealType:"dinner", difficulty:"easy", tags:["quick","crowd-pleaser"],
        ingredients:[
          {name:"Chicken thighs",qty:1.5,unit:"lb"},{name:"Taco seasoning",qty:1,unit:"packet"},
          {name:"Corn tortillas",qty:12,unit:""},{name:"Red onion",qty:1,unit:""},
          {name:"Lime",qty:2,unit:""},{name:"Cilantro",qty:1,unit:"bunch"},
          {name:"Avocado",qty:2,unit:""},{name:"Cotija cheese",qty:4,unit:"oz"}],
        steps:["Dice chicken into bite-sized pieces. Season with taco seasoning.",
          "Heat a skillet over medium-high. Cook chicken, stirring, 6–8 min until browned.",
          "Warm tortillas in a dry pan or microwave wrapped in a damp towel.",
          "Dice red onion and chop cilantro. Slice avocado. Cut limes into wedges.",
          "Assemble: tortilla, chicken, onion, cilantro, avocado, cotija, squeeze of lime."] },
      { id:"stirfry", name:"Veggie Stir Fry", emoji:"🥢", baseServings:4, time:"20 min",
        cuisine:"asian", mealType:"dinner", difficulty:"easy", tags:["vegetarian","quick"],
        ingredients:[
          {name:"Jasmine rice",qty:2,unit:"cups"},{name:"Broccoli",qty:1,unit:"head"},
          {name:"Bell pepper",qty:2,unit:""},{name:"Carrots",qty:3,unit:""},
          {name:"Snap peas",qty:8,unit:"oz"},{name:"Soy sauce",qty:0.25,unit:"cup"},
          {name:"Sesame oil",qty:1,unit:"tbsp"},{name:"Fresh ginger",qty:1,unit:"piece"},
          {name:"Garlic cloves",qty:4,unit:""}],
        steps:["Start the rice: rinse, combine with water per package, simmer 18 min.",
          "Chop broccoli, slice peppers, julienne carrots, trim snap peas.",
          "Mince garlic and ginger.",
          "Heat sesame oil in a wok or large skillet over high heat.",
          "Stir-fry garlic + ginger 30 sec, then add hardest veggies first (carrots, broccoli).",
          "Add peppers and snap peas; toss 2 min more. Pour in soy sauce.",
          "Serve over rice."] },
      { id:"chili", name:"Weeknight Chili", emoji:"🌶️", baseServings:4, time:"45 min",
        cuisine:"american", mealType:"dinner", difficulty:"easy", tags:["comfort","batch"],
        ingredients:[
          {name:"Ground turkey",qty:1,unit:"lb"},{name:"Kidney beans",qty:15,unit:"oz can"},
          {name:"Black beans",qty:15,unit:"oz can"},{name:"Diced tomatoes",qty:28,unit:"oz can"},
          {name:"Yellow onion",qty:1,unit:""},{name:"Chili powder",qty:2,unit:"tbsp"},
          {name:"Cumin",qty:1,unit:"tbsp"},{name:"Sharp cheddar",qty:4,unit:"oz"},
          {name:"Sour cream",qty:8,unit:"oz"}],
        steps:["Dice onion. Brown turkey in a large pot with the onion, 6–8 min.",
          "Stir in chili powder and cumin; toast 30 sec.",
          "Add beans (drained) and diced tomatoes with juice.",
          "Simmer uncovered 25–30 min, stirring occasionally.",
          "Season with salt. Serve topped with shredded cheddar and sour cream."] },
      { id:"fried-rice", name:"Fried Rice", emoji:"🍚", baseServings:4, time:"15 min",
        cuisine:"asian", mealType:"dinner", difficulty:"easy", tags:["quick","vegetarian","leftover"],
        ingredients:[
          {name:"Jasmine rice",qty:2,unit:"cups"},{name:"Eggs",qty:3,unit:""},
          {name:"Frozen peas",qty:1,unit:"cup"},{name:"Carrots",qty:2,unit:""},
          {name:"Soy sauce",qty:3,unit:"tbsp"},{name:"Sesame oil",qty:1,unit:"tbsp"},
          {name:"Yellow onion",qty:1,unit:""},{name:"Garlic cloves",qty:2,unit:""}],
        steps:["Use day-old rice if possible — it fries better than fresh.",
          "Dice onion, carrots; mince garlic. Beat eggs.",
          "Heat sesame oil in a wok over high. Scramble eggs and set aside.",
          "Stir-fry onion and carrots until soft. Add garlic 30 sec.",
          "Add rice and peas; toss to coat in oil.",
          "Return eggs to pan, add soy sauce, toss until heated through."] },
      { id:"grilled-cheese", name:"Grilled Cheese & Tomato Soup", emoji:"🥪", baseServings:4, time:"20 min",
        cuisine:"american", mealType:"lunch", difficulty:"easy", tags:["vegetarian","comfort","kid-friendly"],
        ingredients:[
          {name:"Bread",qty:8,unit:"slices"},{name:"Sharp cheddar",qty:6,unit:"oz"},
          {name:"Butter",qty:3,unit:"tbsp"},{name:"Crushed tomatoes",qty:28,unit:"oz can"},
          {name:"Heavy cream",qty:0.5,unit:"cup"},{name:"Yellow onion",qty:1,unit:""}],
        steps:["Soup: sauté diced onion in butter. Add tomatoes, simmer 10 min.",
          "Blend soup until smooth; stir in cream, salt to taste.",
          "Butter one side of each bread slice.",
          "Layer cheese between slices, butter-side out.",
          "Cook in a skillet over medium-low, 3–4 min per side, until gold and melted.",
          "Slice diagonally; serve alongside soup."] },
      { id:"breakfast-burrito", name:"Breakfast Burrito", emoji:"🌯", baseServings:4, time:"20 min",
        cuisine:"mexican", mealType:"breakfast", difficulty:"easy", tags:["hearty","quick"],
        ingredients:[
          {name:"Flour tortillas",qty:4,unit:"large"},{name:"Eggs",qty:6,unit:""},
          {name:"Breakfast sausage",qty:0.5,unit:"lb"},{name:"Sharp cheddar",qty:4,unit:"oz"},
          {name:"Potatoes",qty:2,unit:""},{name:"Bell pepper",qty:1,unit:""},
          {name:"Salsa",qty:0.5,unit:"cup"}],
        steps:["Dice potatoes small; pan-fry in oil until golden and tender, ~10 min.",
          "Add diced pepper and crumbled sausage to the pan; cook through.",
          "Push to one side, scramble eggs in the open space.",
          "Mix everything, add shredded cheese off-heat to melt.",
          "Warm tortillas. Fill, fold, roll burrito-style.",
          "Optional: sear seam-side down in a dry pan for 30 sec. Serve with salsa."] },
      { id:"pancakes", name:"Buttermilk Pancakes", emoji:"🥞", baseServings:4, time:"20 min",
        cuisine:"american", mealType:"breakfast", difficulty:"easy", tags:["vegetarian","kid-friendly"],
        ingredients:[
          {name:"All-purpose flour",qty:2,unit:"cups"},{name:"Buttermilk",qty:2,unit:"cups"},
          {name:"Eggs",qty:2,unit:""},{name:"Butter",qty:3,unit:"tbsp"},
          {name:"Sugar",qty:2,unit:"tbsp"},{name:"Baking powder",qty:1,unit:"tbsp"},
          {name:"Maple syrup",qty:0.5,unit:"cup"}],
        steps:["Melt butter; let cool slightly.",
          "Whisk dry: flour, sugar, baking powder, pinch of salt.",
          "Whisk wet: buttermilk, eggs, melted butter.",
          "Fold wet into dry until just combined — lumps are fine.",
          "Heat a griddle over medium. Ladle ~1/4 cup per pancake.",
          "Flip when bubbles form and edges look dry, ~2 min. Cook 1 min more.",
          "Serve hot with maple syrup."] },
      { id:"avocado-toast", name:"Avocado Toast", emoji:"🥑", baseServings:2, time:"10 min",
        cuisine:"modern", mealType:"breakfast", difficulty:"easy", tags:["vegetarian","quick","healthy"],
        ingredients:[
          {name:"Bread",qty:4,unit:"slices"},{name:"Avocado",qty:2,unit:""},
          {name:"Lemon",qty:1,unit:""},{name:"Olive oil",qty:1,unit:"tbsp"},
          {name:"Red pepper flakes",qty:0.5,unit:"tsp"},{name:"Eggs",qty:2,unit:""}],
        steps:["Toast bread until deeply golden.",
          "Mash avocado with a squeeze of lemon, salt, and pepper.",
          "Optional: fry or poach eggs to your liking.",
          "Spread avocado thickly on toast.",
          "Drizzle olive oil, sprinkle pepper flakes; top with egg if using."] },
      { id:"caesar-salad", name:"Caesar Salad", emoji:"🥗", baseServings:4, time:"15 min",
        cuisine:"italian", mealType:"lunch", difficulty:"easy", tags:["vegetarian-opt"],
        ingredients:[
          {name:"Romaine lettuce",qty:2,unit:"heads"},{name:"Parmesan cheese",qty:0.5,unit:"cup"},
          {name:"Croutons",qty:2,unit:"cups"},{name:"Lemon",qty:1,unit:""},
          {name:"Garlic cloves",qty:2,unit:""},{name:"Anchovies",qty:4,unit:""},
          {name:"Olive oil",qty:0.33,unit:"cup"},{name:"Dijon mustard",qty:1,unit:"tsp"}],
        steps:["Rinse, dry, and chop romaine into bite-sized pieces.",
          "Whisk dressing: minced garlic, mashed anchovies, dijon, lemon juice.",
          "Slowly whisk in olive oil until emulsified.",
          "Toss romaine with dressing, most of the parmesan, and croutons.",
          "Top with remaining parmesan and lots of black pepper."] },
      { id:"salmon-rice", name:"Baked Salmon with Rice", emoji:"🐟", baseServings:4, time:"30 min",
        cuisine:"american", mealType:"dinner", difficulty:"easy", tags:["healthy","weeknight"],
        ingredients:[
          {name:"Salmon fillets",qty:1.5,unit:"lb"},{name:"Jasmine rice",qty:1.5,unit:"cups"},
          {name:"Lemon",qty:2,unit:""},{name:"Olive oil",qty:2,unit:"tbsp"},
          {name:"Dill",qty:1,unit:"bunch"},{name:"Garlic cloves",qty:3,unit:""},
          {name:"Broccoli",qty:1,unit:"head"}],
        steps:["Preheat oven to 400°F. Start rice per package directions.",
          "Place salmon on a sheet pan. Drizzle with olive oil, salt, pepper.",
          "Top with minced garlic and lemon slices; scatter dill.",
          "Toss broccoli florets with oil; arrange around salmon.",
          "Bake 12–15 min until salmon flakes with a fork.",
          "Serve over rice with a squeeze of fresh lemon."] },
      { id:"chicken-parm", name:"Chicken Parmesan", emoji:"🍗", baseServings:4, time:"45 min",
        cuisine:"italian", mealType:"dinner", difficulty:"medium", tags:["comfort"],
        ingredients:[
          {name:"Chicken breasts",qty:4,unit:""},{name:"Eggs",qty:2,unit:""},
          {name:"Breadcrumbs",qty:1.5,unit:"cups"},{name:"Parmesan cheese",qty:1,unit:"cup"},
          {name:"Mozzarella cheese",qty:8,unit:"oz"},{name:"Crushed tomatoes",qty:28,unit:"oz can"},
          {name:"Olive oil",qty:0.5,unit:"cup"},{name:"Garlic cloves",qty:3,unit:""},
          {name:"Fresh basil",qty:1,unit:"bunch"},{name:"Spaghetti",qty:1,unit:"lb"}],
        steps:["Sauce: sauté garlic in oil, add crushed tomatoes, simmer 20 min. Salt to taste.",
          "Pound chicken breasts to ½ inch thickness.",
          "Dredge: flour, then beaten egg, then breadcrumbs + parmesan.",
          "Fry cutlets in ½ inch olive oil, 3–4 min per side until golden.",
          "Transfer to baking dish. Top with sauce and mozzarella.",
          "Broil 3–4 min until cheese bubbles.",
          "Meanwhile, cook spaghetti; serve alongside, garnish with basil."] },
      { id:"thai-curry", name:"Thai Green Curry", emoji:"🍛", baseServings:4, time:"30 min",
        cuisine:"thai", mealType:"dinner", difficulty:"medium", tags:["spicy"],
        ingredients:[
          {name:"Chicken thighs",qty:1.5,unit:"lb"},{name:"Green curry paste",qty:3,unit:"tbsp"},
          {name:"Coconut milk",qty:14,unit:"oz can"},{name:"Jasmine rice",qty:2,unit:"cups"},
          {name:"Bell pepper",qty:2,unit:""},{name:"Thai basil",qty:1,unit:"bunch"},
          {name:"Fish sauce",qty:2,unit:"tbsp"},{name:"Brown sugar",qty:1,unit:"tbsp"},
          {name:"Lime",qty:1,unit:""}],
        steps:["Start rice per package directions.",
          "Slice chicken; slice peppers into strips.",
          "In a wok, heat a few spoonfuls of coconut cream from the top of the can until it sizzles.",
          "Add curry paste, fry 1 min until fragrant.",
          "Add chicken, stir to coat. Add remaining coconut milk.",
          "Simmer 10 min. Add peppers; cook 5 more min.",
          "Season with fish sauce, sugar, lime juice. Stir in basil.",
          "Serve over rice."] },
      { id:"quesadilla", name:"Cheesy Quesadillas", emoji:"🫓", baseServings:4, time:"15 min",
        cuisine:"mexican", mealType:"lunch", difficulty:"easy", tags:["vegetarian","quick","kid-friendly"],
        ingredients:[
          {name:"Flour tortillas",qty:8,unit:"large"},{name:"Sharp cheddar",qty:8,unit:"oz"},
          {name:"Monterey jack",qty:8,unit:"oz"},{name:"Black beans",qty:15,unit:"oz can"},
          {name:"Salsa",qty:1,unit:"cup"},{name:"Sour cream",qty:1,unit:"cup"},
          {name:"Butter",qty:2,unit:"tbsp"}],
        steps:["Shred both cheeses. Drain and rinse black beans.",
          "Heat a skillet over medium. Melt a small pat of butter.",
          "Place tortilla in pan, sprinkle cheese, beans, more cheese, top tortilla.",
          "Cook 2 min until golden underneath. Flip carefully; cook 2 more min.",
          "Transfer to a board. Repeat.",
          "Cut into wedges. Serve with salsa and sour cream."] },
      { id:"pad-thai", name:"Pad Thai", emoji:"🍜", baseServings:4, time:"30 min",
        cuisine:"thai", mealType:"dinner", difficulty:"medium", tags:["crowd-pleaser"],
        ingredients:[
          {name:"Rice noodles",qty:8,unit:"oz"},{name:"Shrimp",qty:1,unit:"lb"},
          {name:"Eggs",qty:2,unit:""},{name:"Bean sprouts",qty:2,unit:"cups"},
          {name:"Peanuts",qty:0.5,unit:"cup"},{name:"Green onions",qty:4,unit:""},
          {name:"Fish sauce",qty:3,unit:"tbsp"},{name:"Tamarind paste",qty:2,unit:"tbsp"},
          {name:"Brown sugar",qty:3,unit:"tbsp"},{name:"Lime",qty:2,unit:""},
          {name:"Garlic cloves",qty:3,unit:""}],
        steps:["Soak rice noodles in warm water 20 min until pliable. Drain.",
          "Mix sauce: fish sauce, tamarind, brown sugar, 2 tbsp water.",
          "Heat oil in wok. Cook shrimp 2 min each side. Remove.",
          "Scramble eggs in same wok; push to side.",
          "Add noodles and sauce. Toss 2 min until noodles are tender.",
          "Add shrimp back, plus bean sprouts and sliced scallions.",
          "Plate and top with chopped peanuts and lime wedges."] },
      { id:"beef-stirfry", name:"Beef & Broccoli", emoji:"🥩", baseServings:4, time:"25 min",
        cuisine:"asian", mealType:"dinner", difficulty:"easy", tags:["weeknight"],
        ingredients:[
          {name:"Flank steak",qty:1.25,unit:"lb"},{name:"Broccoli",qty:1,unit:"head"},
          {name:"Soy sauce",qty:0.33,unit:"cup"},{name:"Brown sugar",qty:2,unit:"tbsp"},
          {name:"Cornstarch",qty:2,unit:"tbsp"},{name:"Garlic cloves",qty:4,unit:""},
          {name:"Fresh ginger",qty:1,unit:"piece"},{name:"Sesame oil",qty:1,unit:"tbsp"},
          {name:"Jasmine rice",qty:2,unit:"cups"}],
        steps:["Start rice. Slice steak thinly against the grain.",
          "Toss steak with 1 tbsp soy, 1 tbsp cornstarch.",
          "Mix sauce: remaining soy, brown sugar, 1 tbsp cornstarch, ½ cup water.",
          "Heat oil in wok. Sear beef 2 min; remove.",
          "Add broccoli florets, splash of water, cover 2 min until bright green.",
          "Add garlic + ginger, 30 sec. Return beef; pour in sauce.",
          "Toss until sauce thickens and coats everything. Serve over rice."] },
    ];

    // ============================================================
    // INGREDIENT SYNONYMS + SUBSTITUTIONS
    // ============================================================
    // Each key is a "canonical" form; values are alternate names that should match.
    const SYNONYMS = {
      "green onion": ["scallion", "scallions", "spring onion", "green onions"],
      "cilantro": ["coriander", "coriander leaves", "fresh coriander"],
      "garlic cloves": ["garlic", "garlic bulb"],
      "yellow onion": ["onion", "white onion", "brown onion"],
      "red onion": ["purple onion"],
      "bell pepper": ["bell peppers", "capsicum", "sweet pepper"],
      "crushed tomatoes": ["tomato puree", "passata"],
      "diced tomatoes": ["chopped tomatoes", "canned tomatoes"],
      "jasmine rice": ["rice", "white rice", "long grain rice"],
      "heavy cream": ["heavy whipping cream", "double cream"],
      "sharp cheddar": ["cheddar", "cheddar cheese", "extra sharp cheddar"],
      "monterey jack": ["jack cheese", "monterey", "pepper jack"],
      "parmesan cheese": ["parmesan", "parm", "parmigiano"],
      "mozzarella cheese": ["mozzarella", "fresh mozzarella"],
      "ground beef": ["beef mince", "minced beef", "hamburger"],
      "ground turkey": ["turkey mince", "minced turkey"],
      "chicken thighs": ["boneless chicken thighs", "chicken thigh"],
      "chicken breasts": ["chicken breast", "boneless chicken breast"],
      "olive oil": ["extra virgin olive oil", "evoo"],
      "sesame oil": ["toasted sesame oil"],
      "soy sauce": ["shoyu", "tamari"],
      "lime": ["limes"],
      "lemon": ["lemons"],
      "avocado": ["avocados"],
      "eggs": ["egg", "large eggs"],
      "butter": ["unsalted butter", "salted butter"],
      "bread": ["loaf", "bread loaf", "sandwich bread"],
      "flour tortillas": ["flour tortilla", "tortilla", "tortillas"],
      "corn tortillas": ["corn tortilla"],
      "coconut milk": ["coconut cream"],
      "green curry paste": ["thai green curry paste"],
      "all-purpose flour": ["flour", "plain flour", "ap flour"],
    };
    // Map from any alias → canonical
    const ALIAS_TO_CANONICAL = {};
    Object.entries(SYNONYMS).forEach(([canon, aliases]) => {
      ALIAS_TO_CANONICAL[canon] = canon;
      aliases.forEach(a => { ALIAS_TO_CANONICAL[a] = canon; });
    });

    const SUBSTITUTIONS = {
      "butter": "olive oil or margarine",
      "heavy cream": "half-and-half + a splash of milk",
      "buttermilk": "1 cup milk + 1 tbsp lemon juice, rest 5 min",
      "sour cream": "plain Greek yogurt",
      "sharp cheddar": "any melting cheese (jack, gruyère)",
      "fresh basil": "dried basil (half the amount)",
      "cilantro": "parsley (different flavor, but works)",
      "lime": "lemon",
      "lemon": "lime or a splash of vinegar",
      "red onion": "any onion you have",
      "yellow onion": "any onion you have",
      "fresh ginger": "½ tsp ground ginger per inch",
      "parmesan cheese": "pecorino or any hard aged cheese",
      "brown sugar": "white sugar + 1 tsp molasses per cup",
      "tamarind paste": "lime juice + brown sugar",
      "ground turkey": "ground chicken or beef",
      "ground beef": "ground turkey or chicken",
      "chicken thighs": "chicken breasts (cook less)",
      "chicken breasts": "chicken thighs",
    };

    const SEED_INVENTORY = [
      { name: "Spaghetti",         qty: 1,   unit: "lb",      loc: "pantry" },
      { name: "Olive oil",         qty: 1,   unit: "bottle",  loc: "pantry" },
      { name: "Yellow onion",      qty: 3,   unit: "",        loc: "pantry" },
      { name: "Garlic cloves",     qty: 1,   unit: "head",    loc: "pantry" },
      { name: "Crushed tomatoes",  qty: 1,   unit: "can",     loc: "pantry" },
      { name: "Kidney beans",      qty: 2,   unit: "can",     loc: "pantry" },
      { name: "Black beans",       qty: 2,   unit: "can",     loc: "pantry" },
      { name: "Diced tomatoes",    qty: 2,   unit: "can",     loc: "pantry" },
      { name: "Chili powder",      qty: 1,   unit: "jar",     loc: "pantry" },
      { name: "Cumin",             qty: 1,   unit: "jar",     loc: "pantry" },
      { name: "Jasmine rice",      qty: 3,   unit: "cup",     loc: "pantry" },
      { name: "Soy sauce",         qty: 1,   unit: "bottle",  loc: "pantry" },
      { name: "Sesame oil",        qty: 1,   unit: "bottle",  loc: "pantry" },
      { name: "All-purpose flour", qty: 1,   unit: "bag",     loc: "pantry" },
      { name: "Sugar",             qty: 1,   unit: "bag",     loc: "pantry" },
      { name: "Baking powder",     qty: 1,   unit: "jar",     loc: "pantry" },
      { name: "Bread",             qty: 1,   unit: "",        loc: "counter" },
      { name: "Butter",            qty: 1,   unit: "",        loc: "fridge" },
      { name: "Eggs",              qty: 12,  unit: "",        loc: "fridge" },
      { name: "Sharp cheddar",     qty: 1,   unit: "",        loc: "fridge" },
      { name: "Carrots",           qty: 5,   unit: "",        loc: "fridge" },
      { name: "Ground turkey",     qty: 1,   unit: "lb",      loc: "freezer" },
      { name: "Frozen peas",       qty: 1,   unit: "bag",     loc: "freezer" },
    ];


    const DAYS = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

    const FILTER_OPTIONS = [
      { key: "all",        label: "All" },
      { key: "breakfast",  label: "Breakfast" },
      { key: "lunch",      label: "Lunch" },
      { key: "dinner",     label: "Dinner" },
      { key: "quick",      label: "Quick" },
      { key: "vegetarian", label: "Vegetarian" },
      { key: "italian",    label: "Italian" },
      { key: "mexican",    label: "Mexican" },
      { key: "asian",      label: "Asian" },
    ];

    // ============================================================
    // STATE
    // ============================================================
    const STORAGE_KEY = "myKitchen:v2";
    const UPDATE_VERSION = "v11";
    let state = loadState();

    // Bridge for Firebase module (runs in a separate module scope)
    window._state = state;
    window._defaultState = defaultState;
    window._migrateState = migrateState;
    window._renderAll = () => {
      state = window._state;
      applyTheme();
      if (typeof renderCook === "function") renderCook();
      if (typeof renderInventory === "function") renderInventory(); // delegates to renderStorageSection
      if (typeof renderPlan === "function") renderPlan();
      if (typeof renderShoppingList === "function") renderShoppingList();
    };

    // Show update banner once per version
    (function() {
      if (localStorage.getItem("seenUpdate") !== UPDATE_VERSION) {
        const banner = document.getElementById("updateBanner");
        if (banner) banner.style.display = "flex";
      }
    })();
    let currentView = "cook";
    let editingItemKey = null;
    let openRecipeId = null;
    let familySize = 4;
    let checklistState = [];
    let checklistItems = [];
    let cartMode = "recipe"; // "recipe" or "plan"
    let searchQuery = "";
    let activeFilter = "all";
    let cookStep = 0;
    let onboardStep = 0;
    let planTargetDay = null;
    let pendingUndo = null;

    function defaultState() {
      const seeded = {
        inventory: {},
        shoppingList: [], // { id, name, brand, qty, unit, reason, checked, addedAt }
        favorites: [],
        history: {}, // recipeId -> ISO date
        mealPlan: {}, // dayName -> recipeId
        customRecipes: [],
        chatHistory: [], // {role: "user"|"assistant", content: string, ts: ISO}
        settings: {
          theme: "system",
          haptic: true,
          familyDefault: 4,
          lowStockThreshold: 1,
          hasOnboarded: false,
          onboardStep: 0,
          expiryNotifications: false,
          claudeKey: "",
          anyListEmail: "",
          storageLayout: [], // [{ id, name, icon, type, zones: [{id, name}] }]
          prefs: {
            allergies: "",
            dietary: "",
            likedCuisines: "",
            dislikedFoods: "",
            familyNotes: "",
          },
        },
      };
      // Start empty — no seeded demo inventory.
      // To re-enable demo data, uncomment:
      // SEED_INVENTORY.forEach(i => { seeded.inventory[inventoryKey(i)] = i; });
      return seeded;
    }
    function loadState() {
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          const d = defaultState();
          const merged = { ...d, ...parsed, settings: { ...d.settings, ...(parsed.settings || {}) } };
          return migrateState(merged);
        }
      } catch (e) {}
      return defaultState();
    }
    // Migrate older inventory (name-keyed, no brand-scoped keys) to new format.
    // Idempotent — safe to run on every load.
    function migrateState(s) {
      if (!s.inventory) s.inventory = {};
      if (!Array.isArray(s.shoppingList)) s.shoppingList = [];
      const newInv = {};
      Object.entries(s.inventory).forEach(([oldKey, item]) => {
        if (!item || typeof item !== "object") return;
        if (!item.name) item.name = oldKey;
        if (item.brand == null) item.brand = "";
        if (!("canonicalName" in item)) item.canonicalName = normalize(item.name);
        if (!("upc" in item)) item.upc = "";
        const newKey = inventoryKey(item);
        newInv[newKey] = item;
      });
      s.inventory = newInv;
      return s;
    }
    function saveState() {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (e) {
        // QuotaExceededError — storage full
        if (e && (e.name === "QuotaExceededError" || e.code === 22)) {
          showToast("⚠️ Storage full — some data may not be saved. Clear old data in Settings.");
        }
      }
      window._state = state;
      if (window._fbScheduleSave) window._fbScheduleSave(state);
      scheduleAutoFetchPhotos();
    }

    // ── Error handling utilities ──────────────────────────────────

    /**
     * Classify any thrown error into a short, user-friendly string.
     * Handles: network offline, fetch abort/timeout, Claude API HTTP codes,
     * OpenFoodFacts errors, and camera permission denial.
     */
    function apiError(err) {
      if (!err) return "Something went wrong";
      const msg = String(err.message || err);

      // Offline / network unreachable
      if (!navigator.onLine) return "You're offline — connect to the internet and try again";
      if (err.name === "TypeError" && (msg.includes("Failed to fetch") || msg.includes("NetworkError") || msg.includes("fetch")))
        return "Couldn't reach the server — check your connection";

      // Timeout (AbortController)
      if (err.name === "AbortError") return "Request timed out — try again";

      // Camera permission
      if (err.name === "NotAllowedError" || err.name === "PermissionDeniedError")
        return "Camera access denied — allow camera in your browser settings and try again";
      if (err.name === "NotFoundError") return "No camera found on this device";
      if (err.name === "NotReadableError") return "Camera is already in use by another app";

      // Claude API HTTP codes
      if (msg.includes("401")) return "Invalid API key — check your Claude API key in Settings";
      if (msg.includes("403")) return "API key doesn't have permission for this action";
      if (msg.includes("429")) return "Too many requests — wait a moment and try again";
      if (msg.includes("500") || msg.includes("529")) return "Claude service error — try again in a moment";
      if (msg.includes("Claude API")) return msg.replace(/^Claude API \d+:?\s*/, "") || "Claude API error";

      // OpenFoodFacts
      if (msg.includes("OpenFoodFacts")) return "Product database unavailable — try again or enter details manually";

      // No API key
      if (msg.includes("API key") || msg.includes("api key")) return msg;

      return msg || "Something went wrong";
    }

    /**
     * fetch() with a built-in timeout. Throws AbortError if ms exceeded.
     * Default: 15 seconds.
     */
    function fetchWithTimeout(url, options = {}, ms = 15000) {
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), ms);
      return fetch(url, { ...options, signal: ctrl.signal })
        .finally(() => clearTimeout(timer));
    }

    // ── Offline detection ─────────────────────────────────────────
    function setOfflineBanner(offline) {
      document.getElementById("offlineBanner")?.classList.toggle("show", offline);
    }
    window.addEventListener("online",  () => { setOfflineBanner(false); showToast("Back online ✓"); });
    window.addEventListener("offline", () => setOfflineBanner(true));
    // Set on load if already offline (e.g. airplane mode before opening app)
    if (!navigator.onLine) setOfflineBanner(true);

    // Debounced auto-fetch of product photos. Runs ~3s after the last state change.
    let _autoFetchTimer = null;
    function scheduleAutoFetchPhotos() {
      if (typeof fillMissingProductImages !== "function") return;
      if (_autoFetchTimer) clearTimeout(_autoFetchTimer);
      _autoFetchTimer = setTimeout(() => {
        const hasMissing = Object.values(state.inventory || {}).some(v => !v.image);
        if (hasMissing) fillMissingProductImages();
      }, 3000);
    }

    // ============================================================
    // HELPERS
    // ============================================================
    function normalize(s) {
      const cleaned = String(s).trim().toLowerCase().replace(/\s+/g, " ");
      // Try to match an alias → canonical
      if (ALIAS_TO_CANONICAL[cleaned]) return ALIAS_TO_CANONICAL[cleaned];
      // Try depluralizing ("carrots" -> "carrot", "cloves" -> "clove")
      const singular = cleaned.replace(/s$/, "");
      if (ALIAS_TO_CANONICAL[singular]) return ALIAS_TO_CANONICAL[singular];
      return cleaned;
    }
    function formatQty(n) {
      if (n == null || isNaN(n)) return "";
      const rounded = Math.round(n * 4) / 4;
      const whole = Math.floor(rounded);
      const frac = rounded - whole;
      const fracStr = { 0: "", 0.25: "¼", 0.5: "½", 0.75: "¾" }[frac] || "";
      if (whole === 0 && fracStr) return fracStr;
      if (fracStr) return whole + fracStr;
      return String(whole);
    }
    // Inventory key: brand-aware, so Rao's marinara and Kirkland marinara
    // are separate entries. No-brand items key by name alone.
    function inventoryKey(item) {
      // UPC (when present) is the most stable product identifier.
      if (item && item.upc) {
        const u = String(item.upc).replace(/\D/g, "");
        if (u) return "upc:" + u;
      }
      const n = normalize(item.canonicalName || item.name || "");
      const b = item.brand ? "|" + normalize(item.brand) : "";
      return n + b;
    }

    // True if ANY inventory entry matches this canonical name with qty > 0.
    function hasIngredient(name) {
      const n = normalize(name);
      return Object.values(state.inventory).some(i => {
        if (i.qty === 0) return false;
        return normalize(i.canonicalName || i.name) === n;
      });
    }

    // Find the best inventory entry matching a recipe ingredient name.
    // Returns the entry object (or undefined). Prefers entries with qty > 0.
    function findInventoryFor(name) {
      const n = normalize(name);
      const matches = Object.values(state.inventory)
        .filter(i => normalize(i.canonicalName || i.name) === n);
      return matches.find(i => i.qty > 0) || matches[0];
    }

    // Units where a recipe calling for "1 X" would meaningfully deplete stock.
    const TRIVIAL_UNITS = new Set(["tsp","teaspoon","teaspoons","tbsp","tablespoon","tablespoons","pinch","dash","splash","drop","drizzle","sprinkle"]);

    // ── Typical expiry windows (days from today) for common grocery items ──
    // Matched by keyword against item name (case-insensitive, substring).
    const EXPIRY_DEFAULTS = [
      // Dairy
      { days:  9, keys: ["milk","whole milk","skim milk","2% milk","oat milk","almond milk","soy milk","coconut milk drink","lactaid"] },
      { days: 28, keys: ["eggs","egg"] },
      { days: 14, keys: ["heavy cream","whipping cream","half and half","half & half","coffee creamer","creamer"] },
      { days: 21, keys: ["yogurt","kefir"] },
      { days: 21, keys: ["sour cream","crème fraîche"] },
      { days: 21, keys: ["cream cheese","neufchatel"] },
      { days: 14, keys: ["cottage cheese","ricotta"] },
      { days: 60, keys: ["butter","ghee"] },
      { days:  7, keys: ["fresh mozzarella","burrata","brie","camembert","feta crumbles","goat cheese","chèvre"] },
      { days: 21, keys: ["shredded cheese","sliced cheese","string cheese","babybel","provolone","swiss cheese","colby","monterey jack","pepper jack","muenster"] },
      { days: 45, keys: ["cheddar","parmesan","romano","pecorino","aged cheese","gruyere","gouda"] },

      // Meat & seafood (raw, refrigerated)
      { days:  2, keys: ["ground beef","ground turkey","ground chicken","ground pork","ground lamb","ground meat","burger patties","beef patties"] },
      { days:  2, keys: ["chicken breast","chicken thigh","chicken wing","chicken drum","raw chicken","whole chicken"] },
      { days:  4, keys: ["steak","ribeye","sirloin","tenderloin","pork chop","pork loin","pork tenderloin","lamb chop","rack of lamb","veal"] },
      { days:  2, keys: ["fish","salmon","tilapia","cod","halibut","tuna steak","mahi","shrimp","scallops","crab","lobster","raw seafood"] },
      { days:  5, keys: ["bacon","pancetta"] },
      { days:  5, keys: ["deli meat","lunch meat","turkey slices","ham slices","roast beef slices","salami","pepperoni slices","bologna"] },
      { days:  7, keys: ["hot dog","sausage link","bratwurst","kielbasa","chorizo","andouille"] },

      // Produce — short (under 1 week)
      { days:  4, keys: ["avocado"] },
      { days:  3, keys: ["guacamole","fresh guac"] },
      { days:  5, keys: ["banana","bananas"] },
      { days:  5, keys: ["strawberr","raspberry","raspberries","blackberr","cherry","cherries"] },
      { days:  7, keys: ["blueberr","grape","grapes"] },
      { days:  5, keys: ["spinach","arugula","mixed greens","spring mix","salad greens","salad kit","power greens"] },
      { days:  7, keys: ["kale","chard","collard greens","beet greens"] },
      { days:  5, keys: ["fresh basil","fresh cilantro","fresh parsley","fresh dill","fresh mint","fresh thyme","fresh rosemary","fresh chives","herb bunch","fresh herbs"] },
      { days:  7, keys: ["mushroom"] },
      { days:  7, keys: ["tomato","roma tomato","cherry tomato","grape tomato","heirloom tomato"] },
      { days:  7, keys: ["broccoli","broccolini","cauliflower","brussels sprouts","bok choy"] },
      { days:  7, keys: ["asparagus","artichoke","corn on the cob","sweet corn"] },
      { days:  7, keys: ["green bean","snap pea","snow pea","edamame"] },

      // Produce — medium (1–2 weeks)
      { days: 10, keys: ["lettuce","romaine","iceberg","butter lettuce","head of lettuce"] },
      { days: 10, keys: ["cucumber","zucchini","summer squash","yellow squash"] },
      { days: 14, keys: ["bell pepper","sweet pepper","jalapeño","poblano","serrano"] },
      { days: 14, keys: ["celery","fennel","leek","green onion","scallion"] },
      { days: 14, keys: ["mango","papaya","pineapple","kiwi","passion fruit","peach","plum","nectarine","apricot"] },

      // Produce — long (3+ weeks)
      { days: 42, keys: ["apple","gala","fuji","honeycrisp","granny smith","pink lady"] },
      { days: 21, keys: ["orange","clementine","tangerine","mandarin","grapefruit","blood orange"] },
      { days: 21, keys: ["lemon","lime","limes"] },
      { days: 28, keys: ["carrot","baby carrot"] },
      { days: 30, keys: ["potato","russet","yukon gold","red potato","sweet potato","yam"] },
      { days: 30, keys: ["onion","yellow onion","red onion","white onion","shallot"] },
      { days: 60, keys: ["garlic","garlic bulb","garlic head"] },
      { days: 60, keys: ["ginger root","fresh ginger"] },
      { days: 14, keys: ["cabbage","red cabbage","napa cabbage","savoy"] },
      { days: 14, keys: ["beet","turnip","parsnip","radish"] },

      // Bread & bakery
      { days:  5, keys: ["bread","sourdough","baguette","ciabatta","focaccia","bun","roll","slider","croissant","muffin","loaf"] },
      { days:  7, keys: ["bagel","english muffin","pita","naan","lavash"] },
      { days: 14, keys: ["tortilla","flour tortilla","corn tortilla","wrap"] },

      // Refrigerated prepared / packaged
      { days: 10, keys: ["orange juice","apple juice","grapefruit juice","fresh squeezed","cold pressed juice","pressed juice"] },
      { days: 10, keys: ["hummus","baba ganoush","tzatziki"] },
      { days:  7, keys: ["salsa","pico de gallo"] },
      { days:  7, keys: ["opened pasta sauce","fresh pasta sauce","refrigerated pasta","refrigerated pizza dough"] },
      { days:  4, keys: ["leftovers","cooked chicken","meal prep","prepared meal"] },
      { days:  5, keys: ["tofu","tempeh"] },
    ];

    // Return { date: "YYYY-MM-DD", label: "~9 days (typical for milk)" } or null
    // ── Expiry cache (persisted to localStorage) ─────────────────
    // key: normalized item name → days (number) or 0 (shelf-stable/no expiry)
    const EXPIRY_CACHE_KEY = "kitchenExpiryCache_v1";
    let _expiryCache = null;
    function getExpiryCache() {
      if (!_expiryCache) {
        try { _expiryCache = JSON.parse(localStorage.getItem(EXPIRY_CACHE_KEY) || "{}"); }
        catch { _expiryCache = {}; }
      }
      return _expiryCache;
    }
    function setExpiryCache(normalizedName, days) {
      const c = getExpiryCache();
      c[normalizedName] = days;
      try { localStorage.setItem(EXPIRY_CACHE_KEY, JSON.stringify(c)); } catch {}
    }

    // Build date + label from a days number
    function expiryFromDays(days) {
      if (!days) return null;
      const d = new Date();
      d.setDate(d.getDate() + days);
      const dateStr = d.toISOString().slice(0, 10);
      const label = days <= 7
        ? `~${days} day${days !== 1 ? "s" : ""}`
        : days <= 30
          ? `~${Math.round(days / 7)} week${Math.round(days / 7) !== 1 ? "s" : ""}`
          : `~${Math.round(days / 30)} month${Math.round(days / 30) !== 1 ? "s" : ""}`;
      return { date: dateStr, label };
    }

    // Tier 1: instant local lookup from EXPIRY_DEFAULTS table
    function suggestExpiry(itemName) {
      if (!itemName) return null;
      const lower = itemName.toLowerCase().trim();
      // Check persistent cache first
      const cached = getExpiryCache()[lower];
      if (cached !== undefined) return expiryFromDays(cached);
      // Check built-in table
      for (const entry of EXPIRY_DEFAULTS) {
        if (entry.keys.some(k => lower.includes(k))) {
          return expiryFromDays(entry.days);
        }
      }
      return null;
    }

    // Tier 2: ask Claude for anything not in the local table
    async function lookupExpiryAI(itemName) {
      if (!itemName || itemName.length < 2) return null;
      const key = (state.settings.claudeKey || "").trim();
      if (!key) return null;
      const lower = itemName.toLowerCase().trim();
      // Return cached result immediately if available
      const cache = getExpiryCache();
      if (lower in cache) return expiryFromDays(cache[lower]);
      // Skip if already covered by local table
      if (suggestExpiry(itemName)) return suggestExpiry(itemName);

      try {
        const res = await fetchWithTimeout("https://api.anthropic.com/v1/messages", {
          method: "POST",
          headers: {
            "content-type": "application/json",
            "x-api-key": key,
            "anthropic-version": "2023-06-01",
            "anthropic-dangerous-direct-browser-access": "true",
          },
          body: JSON.stringify({
            model: "claude-haiku-4-5",
            max_tokens: 60,
            messages: [{
              role: "user",
              content: `Food safety expert. How many days does "${itemName}" typically last when stored properly (fridge for perishables, pantry for shelf-stable)?

Return ONLY valid JSON — no prose:
{"days": NUMBER}   ← perishable (e.g. milk=9, eggs=28, apple=42, chicken=2)
{"days": 0}        ← shelf-stable/no expiry needed (canned goods, pasta, spices, oil)`,
            }],
          }),
        });
        if (!res.ok) return null;
        const data = await res.json();
        const text = (data.content || []).map(c => c.text || "").join("");
        const match = text.match(/\{[^}]*"days"\s*:\s*(\d+)[^}]*\}/);
        if (!match) return null;
        const days = parseInt(match[1], 10);
        setExpiryCache(lower, days);
        return expiryFromDays(days);
      } catch {
        return null;
      }
    }
    function isTrivialUnit(u) {
      return TRIVIAL_UNITS.has(String(u || "").toLowerCase().trim());
    }

    // ---- Shopping list operations ----
    function shoppingListMatch(name, brand) {
      const n = normalize(name);
      const b = normalize(brand || "");
      return (state.shoppingList || []).find(s => {
        if (s.checked) return false;
        const sn = normalize(s.name);
        const sb = normalize(s.brand || "");
        return sn === n && (sb === b || !b || !sb);
      });
    }
    function addToShoppingList(entry, opts = {}) {
      // entry: {name, brand?, qty?, unit?, reason?}
      if (!entry || !entry.name) return null;
      const existing = shoppingListMatch(entry.name, entry.brand);
      if (existing && !opts.allowDupe) return { duplicate: true, existing };
      const item = {
        id: "sl-" + Math.random().toString(36).slice(2, 10),
        name: entry.name,
        brand: entry.brand || "",
        canonicalName: normalize(entry.name),
        qty: entry.qty != null ? entry.qty : 1,
        unit: entry.unit || "",
        size: entry.size || "",
        upc: entry.upc ? String(entry.upc).replace(/\D/g, "") : "",
        reason: entry.reason || "manual",
        checked: false,
        addedAt: new Date().toISOString(),
      };
      if (!state.shoppingList) state.shoppingList = [];
      state.shoppingList.push(item);
      saveState();
      if (typeof renderShoppingList === "function") renderShoppingList();
      return { added: true, item };
    }
    function autoAddOnDepletion(invItem, reason) {
      if (!invItem) return;
      // Don't auto-add if an open (unchecked) line for this item already exists.
      if (shoppingListMatch(invItem.name, invItem.brand)) return;
      addToShoppingList({
        name: invItem.name,
        brand: invItem.brand || "",
        qty: 1,
        unit: invItem.unit || "",
        reason: reason || "ran out",
      }, { allowDupe: false });
      showToast(`Added ${invItem.name}${invItem.brand ? " (" + invItem.brand + ")" : ""} to shopping list`, "Undo", () => {
        // Undo: pop the last matching entry
        const idx = (state.shoppingList || []).map(s => s.name).lastIndexOf(invItem.name);
        if (idx >= 0) { state.shoppingList.splice(idx, 1); saveState(); if (typeof renderShoppingList === "function") renderShoppingList(); }
      });
    }

    // ---- Shopping list UI ----
    function openShoppingList() {
      renderShoppingList();
      showModal("shoppingListModal");
    }

    function updateShopBadge() {
      const openCount = (state.shoppingList || []).filter(s => !s.checked).length;
      const badge = document.getElementById("shopBadge");
      if (!badge) return;
      if (openCount > 0) {
        badge.textContent = openCount;
        badge.style.display = "inline-block";
      } else {
        badge.style.display = "none";
      }
    }

    function renderShoppingList() {
      updateShopBadge();
      const list = state.shoppingList || [];
      const open = list.filter(s => !s.checked);
      const checked = list.filter(s => s.checked);

      const openEl = document.getElementById("shopListOpen");
      const checkedEl = document.getElementById("shopListChecked");
      if (!openEl || !checkedEl) return;

      if (!list.length) {
        openEl.innerHTML = `
          <div class="card empty-state" style="padding:20px;">
            <span class="big">✨</span>
            Your shopping list is empty.<br/>
            <small>Items will appear here when you run out.</small>
          </div>`;
        checkedEl.innerHTML = "";
        return;
      }

      const rowHtml = (s) => `
        <div class="shop-row${s.checked ? " checked" : ""}" data-id="${escapeHtml(s.id)}">
          <button class="shop-check" data-action="toggle" aria-label="${s.checked ? "Uncheck" : "Check off"}">${s.checked ? "✓" : ""}</button>
          <div style="min-width:0;">
            <div class="shop-name">${escapeHtml(s.name)}${s.brand ? `<span style="font-weight:400; color:var(--muted); font-size:12px; margin-left:4px;">· ${escapeHtml(s.brand)}</span>` : ""}</div>
            <div class="shop-meta">${escapeHtml(s.reason || "manual")}</div>
          </div>
          <div class="shop-qty">${formatQty(s.qty) || "1"}${s.unit ? " " + escapeHtml(s.unit) : ""}</div>
          <button class="shop-del" data-action="remove" aria-label="Remove">×</button>
        </div>`;

      const checkAllRow = open.length
        ? `<div class="shop-row" id="shopCheckAllRow" style="background: var(--green-light); border-color: var(--green-ring); cursor: pointer;">
             <button class="shop-check" id="shopCheckAllBtn" aria-label="Check all"></button>
             <div style="min-width:0;">
               <div class="shop-name" style="color: var(--green-dark);">Check all (${open.length})</div>
               <div class="shop-meta">Adds everything to inventory</div>
             </div>
             <div class="shop-qty"></div>
             <div style="width:24px;"></div>
           </div>`
        : "";

      openEl.innerHTML = open.length
        ? `<div class="inv-group-title">To buy <span style="color:var(--muted2); font-weight:500; text-transform:none; letter-spacing:0;">(${open.length})</span></div>` + checkAllRow + open.map(rowHtml).join("")
        : `<div class="card empty-state" style="padding:16px;"><small>Nothing to buy right now.</small></div>`;

      checkedEl.innerHTML = checked.length
        ? `<div class="inv-group-title">In cart <span style="color:var(--muted2); font-weight:500; text-transform:none; letter-spacing:0;">(${checked.length})</span></div>` + checked.map(rowHtml).join("")
        : "";

      // Wire row actions
      [openEl, checkedEl].forEach(scope => {
        scope.querySelectorAll(".shop-row").forEach(el => {
          el.addEventListener("click", (e) => {
            const action = e.target.dataset.action;
            if (!action) return;
            const id = el.dataset.id;
            const idx = state.shoppingList.findIndex(x => x.id === id);
            if (idx < 0) return;
            const s = state.shoppingList[idx];
            if (action === "toggle") {
              s.checked = !s.checked;
              // Checking off restores inventory at qty 1 (default unit from list entry)
              if (s.checked) {
                const invItem = {
                  name: s.name,
                  brand: s.brand || "",
                  canonicalName: normalize(s.name),
                  qty: s.qty || 1,
                  unit: s.unit || "",
                  loc: "pantry",
                  expiry: null,
                };
                const key = inventoryKey(invItem);
                if (state.inventory[key]) {
                  // existing entry (likely at qty:0): bump it
                  const prev = state.inventory[key];
                  prev.qty = (prev.qty || 0) + (s.qty || 1);
                  if (!prev.unit && invItem.unit) prev.unit = invItem.unit;
                } else {
                  state.inventory[key] = invItem;
                }
                haptic(10);
              } else {
                // Unchecking: roll back the inventory bump (best-effort)
                const key = inventoryKey({canonicalName: s.canonicalName || s.name, brand: s.brand});
                const inv = state.inventory[key];
                if (inv) {
                  inv.qty = Math.max(0, (inv.qty || 0) - (s.qty || 1));
                }
              }
              saveState(); renderShoppingList(); renderInventory();
            } else if (action === "remove") {
              const removed = state.shoppingList.splice(idx, 1)[0];
              saveState(); renderShoppingList();
              showToast(`Removed ${removed.name}`, "Undo", () => {
                state.shoppingList.splice(idx, 0, removed);
                saveState(); renderShoppingList();
              });
              haptic(10);
            }
          });
        });
      });

      const checkAllRowEl = document.getElementById("shopCheckAllRow");
      if (checkAllRowEl) {
        checkAllRowEl.addEventListener("click", () => gotAllShoppingItems());
      }
    }

    // Manual add from the shopping-list modal, with medium-strictness dupe warning.
    // Dupe triggers on BOTH UPC-exact (same brand + canonicalName) AND canonicalName-only (cross-brand).
    function handleShopManualAdd() {
      const nameEl = document.getElementById("shopAddName");
      const brandEl = document.getElementById("shopAddBrand");
      const qtyEl = document.getElementById("shopAddQty");
      const unitEl = document.getElementById("shopAddUnit");
      const name = (nameEl.value || "").trim();
      if (!name) { nameEl.focus(); return; }
      const brand = (brandEl.value || "").trim();
      const qty = qtyEl.value ? Number(qtyEl.value) : 1;
      const unit = unitEl.value || "";

      const entry = { name, brand, qty, unit, reason: "manual" };

      // Dupe detection:
      // 1. Already in shopping list (unchecked) — same canonicalName, any brand
      const existingOnList = (state.shoppingList || []).find(s =>
        !s.checked && normalize(s.name) === normalize(name)
      );
      // 2. Already in inventory (in stock, qty > 0) — same canonicalName, any brand
      const existingInInv = Object.values(state.inventory).find(i =>
        (i.qty || 0) > 0 && normalize(i.canonicalName || i.name) === normalize(name)
      );

      if (existingOnList || existingInInv) {
        const reasons = [];
        if (existingOnList) reasons.push(`already on the list${existingOnList.brand ? ` as "${existingOnList.brand}"` : ""}`);
        if (existingInInv) {
          const invLoc = (() => { const l = getStorageLayout().find(l => l.id === existingInInv.storageLocId); const z = l?.zones?.find(z => z.id === existingInInv.storageZoneId); return l ? `${l.icon} ${l.name}${z ? " › " + z.name : ""}` : "inventory"; })();
          reasons.push(`already in your ${invLoc}${existingInInv.brand ? ` (${existingInInv.brand})` : ""}`);
        }
        showDupeWarn(reasons.join(" · "), entry);
        return;
      }

      doShopAdd(entry);
    }

    function showDupeWarn(msg, entry) {
      const el = document.getElementById("shopDupeWarn");
      el.innerHTML = `
        <div class="dupe-warn">
          <strong>⚠️ Already have this?</strong><br/>
          ${escapeHtml(entry.name)}${entry.brand ? ` (${escapeHtml(entry.brand)})` : ""} — ${escapeHtml(msg)}.
          <div class="dupe-actions">
            <button class="dupe-cancel" data-act="cancel">Cancel</button>
            <button class="dupe-add" data-act="add">Add anyway</button>
          </div>
        </div>`;
      el.querySelector('[data-act="cancel"]').addEventListener("click", () => {
        el.innerHTML = "";
      });
      el.querySelector('[data-act="add"]').addEventListener("click", () => {
        el.innerHTML = "";
        doShopAdd(entry);
      });
    }

    function doShopAdd(entry) {
      addToShoppingList(entry, { allowDupe: true });
      document.getElementById("shopAddName").value = "";
      document.getElementById("shopAddBrand").value = "";
      document.getElementById("shopAddQty").value = "";
      document.getElementById("shopAddUnit").value = "";
      document.getElementById("shopAddName").focus();
      haptic(10);
    }

    function clearCheckedShopItems() {
      const before = state.shoppingList || [];
      const cleared = before.filter(s => s.checked);
      if (!cleared.length) { showToast("No checked items to clear"); return; }
      state.shoppingList = before.filter(s => !s.checked);
      saveState(); renderShoppingList();
      showToast(`Cleared ${cleared.length} item${cleared.length === 1 ? "" : "s"}`, "Undo", () => {
        state.shoppingList = state.shoppingList.concat(cleared);
        saveState(); renderShoppingList();
      });
    }

    function sendShoppingListToCart() {
      const open = (state.shoppingList || []).filter(s => !s.checked);
      if (!open.length) { showToast("Nothing to order yet"); return; }
      const items = open.map(s => ({
        name: s.brand ? `${s.name} (${s.brand})` : s.name,
        qty: s.qty || 1,
        unit: s.unit || "",
      }));
      hideModal("shoppingListModal");
      startCart(items, "shopping-list", "Shopping list");
    }

    function gotAllShoppingItems() {
      const open = (state.shoppingList || []).filter(s => !s.checked);
      if (!open.length) { showToast("Nothing to mark as purchased"); return; }
      const before = JSON.parse(JSON.stringify({ list: state.shoppingList, inv: state.inventory }));
      let added = 0;
      open.forEach(s => {
        s.checked = true;
        const invItem = {
          name: s.name,
          brand: s.brand || "",
          canonicalName: normalize(s.name),
          qty: s.qty || 1,
          unit: s.unit || "",
          loc: "pantry",
          expiry: null,
        };
        const key = inventoryKey(invItem);
        if (state.inventory[key]) {
          const prev = state.inventory[key];
          prev.qty = (prev.qty || 0) + (s.qty || 1);
          if (!prev.unit && invItem.unit) prev.unit = invItem.unit;
        } else {
          state.inventory[key] = invItem;
        }
        added++;
      });
      saveState(); renderShoppingList(); renderInventory();
      haptic(20);
      showToast(`Added ${added} item${added === 1 ? "" : "s"} to inventory`, "Undo", () => {
        state.shoppingList = before.list;
        state.inventory = before.inv;
        saveState(); renderShoppingList(); renderInventory();
      });
    }

    function restockFromInventory() {
      const candidates = Object.values(state.inventory).filter(i => {
        const out = i.qty != null && i.qty <= 0;
        return out || isLowStock(i) || isExpired(i);
      });
      if (!candidates.length) {
        showToast("Nothing low, out, or expired — fully stocked!");
        return;
      }
      let added = 0, skipped = 0;
      candidates.forEach(i => {
        if (shoppingListMatch(i.name, i.brand)) { skipped++; return; }
        const reason = isExpired(i) ? "expired" : (i.qty != null && i.qty <= 0 ? "out" : "low stock");
        addToShoppingList({
          name: i.name,
          brand: i.brand || "",
          qty: 1,
          unit: i.unit || "",
          reason,
        });
        added++;
      });
      saveState();
      renderShoppingList();
      const msg = added
        ? `Added ${added} item${added === 1 ? "" : "s"} from inventory${skipped ? ` (${skipped} already on list)` : ""}`
        : `All ${skipped} low/expired items are already on your list`;
      showToast(msg);
    }

    function sendShoppingListToAnyList() {
      const addr = (state.settings.anyListEmail || "").trim();
      if (!addr || !addr.includes("@")) {
        showToast("Set your AnyList email in Settings first");
        return;
      }
      const open = (state.shoppingList || []).filter(s => !s.checked);
      if (!open.length) { showToast("Nothing to send yet"); return; }
      // AnyList's "Email Items to AnyList" expects each item on its own line in the BODY.
      // Subject is ignored. Use plain "name" only — quantity/unit/brand confuses their parser.
      const lines = open.map(s => s.brand ? `${s.name} (${s.brand})` : s.name);
      const subject = "Shopping list";
      const body = lines.join("\n");
      const href = `mailto:${encodeURIComponent(addr)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = href;
      showToast(`Opening email with ${open.length} item${open.length === 1 ? "" : "s"} for AnyList`);
    }

    function allRecipes() {
      return [...RECIPES, ...(state.customRecipes || [])];
    }
    function getRecipe(id) {
      return allRecipes().find(r => r.id === id);
    }

    function recipeMatch(r) {
      const have = r.ingredients.filter(i => hasIngredient(i.name));
      const missing = r.ingredients.filter(i => !hasIngredient(i.name));
      return { ...r, have, missing, total: r.ingredients.length, ratio: have.length / r.ingredients.length };
    }

    function matchesFilter(r) {
      if (activeFilter === "all") return true;
      if (["breakfast","lunch","dinner"].includes(activeFilter)) return r.mealType === activeFilter;
      if (activeFilter === "quick") {
        const m = (r.time || "").match(/(\d+)/);
        return m && Number(m[1]) <= 20;
      }
      if (["italian","mexican","asian","thai","american","modern"].includes(activeFilter)) {
        return r.cuisine === activeFilter;
      }
      if (activeFilter === "vegetarian") {
        return (r.tags || []).includes("vegetarian") || (r.tags || []).includes("vegetarian-opt");
      }
      return true;
    }
    function matchesSearch(r) {
      const q = searchQuery.trim().toLowerCase();
      if (!q) return true;
      if (r.name.toLowerCase().includes(q)) return true;
      if ((r.cuisine || "").includes(q)) return true;
      if ((r.tags || []).some(t => t.includes(q))) return true;
      if (r.ingredients.some(i => i.name.toLowerCase().includes(q))) return true;
      return false;
    }

    function filteredRanked() {
      return allRecipes()
        .filter(matchesFilter)
        .filter(matchesSearch)
        .map(recipeMatch)
        .sort((a,b) => b.ratio - a.ratio);
    }

    function expiringSoon() {
      const now = Date.now();
      const cutoff = now + 3 * 24 * 3600 * 1000; // 3 days
      return Object.values(state.inventory).filter(i => {
        if (!i.expiry) return false;
        const t = new Date(i.expiry).getTime();
        return t <= cutoff;
      });
    }
    function isExpired(item) {
      if (!item.expiry) return false;
      return new Date(item.expiry).getTime() < Date.now();
    }
    function isLowStock(item) {
      return item.qty != null && item.qty > 0 && item.qty <= (state.settings.lowStockThreshold || 1);
    }

    function daysAgo(dateStr) {
      if (!dateStr) return null;
      const diff = Date.now() - new Date(dateStr).getTime();
      const d = Math.floor(diff / (24 * 3600 * 1000));
      if (d === 0) return "today";
      if (d === 1) return "yesterday";
      if (d < 7) return `${d} days ago`;
      if (d < 30) return `${Math.floor(d/7)} wk ago`;
      return `${Math.floor(d/30)} mo ago`;
    }

    function haptic(ms = 10) {
      if (state.settings.haptic && navigator.vibrate) navigator.vibrate(ms);
    }

    function showToast(msg, actionLabel, actionFn) {
      const t = document.getElementById("toast");
      t.innerHTML = msg + (actionLabel ? ` <button id="toastAction">${actionLabel}</button>` : "");
      t.classList.add("show");
      if (actionLabel) {
        document.getElementById("toastAction").onclick = () => {
          actionFn && actionFn();
          t.classList.remove("show");
        };
      }
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => t.classList.remove("show"), 5000);
    }

    // ============================================================
    // THEME
    // ============================================================
    function applyTheme() {
      const t = state.settings.theme || "system";
      let effective = t;
      if (t === "system") {
        effective = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      }
      document.documentElement.setAttribute("data-theme", effective);
    }

    // ============================================================
    // VIEW ROUTING
    // ============================================================
    function setView(name) {
      currentView = name;
      document.querySelectorAll(".view").forEach(v => v.classList.remove("active"));
      document.getElementById("view" + name.charAt(0).toUpperCase() + name.slice(1)).classList.add("active");
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.toggle("active", b.dataset.view === name));
      const fab = document.getElementById("fab");
      // Show FAB on inventory (add item) and cook (add custom recipe)
      fab.classList.toggle("show", name === "inventory" || name === "cook");
      const subs = {
        cook: "What can we cook today?",
        inventory: "What's in your kitchen",
        scan: "Add items to your inventory",
        ask: "Your kitchen assistant"
      };
      document.getElementById("headerSubtitle").textContent = subs[name] || "";
      if (name === "cook") renderCook();
      else if (name === "inventory") { renderStorageSection(); }
      else if (name === "ask") renderChat();
      haptic(5);
    }

    // ============================================================
    // COOK VIEW
    // ============================================================
    function renderFilterChips() {
      const wrap = document.getElementById("filterChips");
      wrap.innerHTML = FILTER_OPTIONS.map(f =>
        `<button class="chip ${f.key === activeFilter ? "active" : ""}" data-f="${f.key}">${f.label}</button>`
      ).join("");
      wrap.querySelectorAll(".chip").forEach(c => {
        c.addEventListener("click", () => {
          activeFilter = c.dataset.f;
          renderCook();
          haptic(5);
        });
      });
    }

    function renderCook() {
      renderFilterChips();
      const ranked = filteredRanked();
      const favSet = new Set(state.favorites);
      const favRecipes = ranked.filter(r => favSet.has(r.id));
      const cookNow = ranked.filter(r => r.ratio === 1 && !favSet.has(r.id));
      const almost = ranked.filter(r => r.ratio >= 0.5 && r.ratio < 1 && !favSet.has(r.id));
      const far = ranked.filter(r => r.ratio < 0.5 && !favSet.has(r.id));

      const soonItems = expiringSoon();
      document.getElementById("useSoonWrap").innerHTML = soonItems.length ? `
        <div class="section-title"><h2>Use soon</h2><span class="count">${soonItems.length}</span></div>
        <div class="card" style="background: var(--amber-light); border:1px solid #ffe082;">
          <div style="font-size:13px; margin-bottom:6px; color: #9a6300;">Items expiring in the next 3 days:</div>
          <div style="display:flex; flex-wrap:wrap; gap:6px;">
            ${soonItems.map(i => `<span class="chip" style="background: var(--card); pointer-events:none;">${i.name}</span>`).join("")}
          </div>
        </div>` : "";

      document.getElementById("favWrap").innerHTML = favRecipes.length ?
        `<div class="section-title"><h2>⭐ Favorites</h2><span class="count">${favRecipes.length}</span></div>` +
        favRecipes.map(r => recipeRow(r, classForRatio(r.ratio))).join("") : "";

      document.getElementById("cookNowWrap").innerHTML = sectionHtml(
        "Ready to cook", cookNow, "ready-now",
        "🍽️", "Nothing fully stocked", "Check the Almost-have list below or restock in Inventory."
      );
      document.getElementById("almostWrap").innerHTML = sectionHtml("Almost have everything", almost, "almost", "🛒", "", "");
      document.getElementById("farWrap").innerHTML = sectionHtml("Need more groceries", far, "far", "🧺", "", "");

      // Render the inline meal plan at the bottom of the Cook view
      renderPlan();

      document.querySelectorAll(".recipe-row").forEach(row => {
        row.addEventListener("click", (e) => {
          if (e.target.dataset.action === "fav") {
            toggleFav(row.dataset.id);
            e.stopPropagation();
            return;
          }
          openRecipe(row.dataset.id);
        });
      });
    }
    function classForRatio(ratio) {
      return ratio === 1 ? "ready-now" : (ratio >= 0.5 ? "almost" : "far");
    }
    function recipeRow(r, cls) {
      const fav = state.favorites.includes(r.id);
      const readyText = r.ratio === 1
        ? "✓ All ingredients"
        : `${r.have.length} of ${r.total} in stock`;
      const lastCooked = state.history[r.id] ? `· last: ${daysAgo(state.history[r.id])}` : "";
      return `
        <div class="recipe-row ${cls}" data-id="${r.id}">
          <div class="emoji">${r.emoji}</div>
          <div class="info">
            <div class="name">${r.name}</div>
            <div class="meta">${r.time} · serves ${r.baseServings} ${lastCooked}</div>
            <div class="ready">${readyText}</div>
          </div>
          <button class="fav-star ${fav ? "on" : ""}" data-action="fav" aria-label="Favorite">${fav ? "★" : "☆"}</button>
        </div>
      `;
    }
    function sectionHtml(title, list, cls, emptyIcon, emptyTitle, emptyBody) {
      if (list.length === 0 && !emptyTitle) return "";
      let html = `<div class="section-title"><h2>${title}</h2>${list.length ? `<span class="count">${list.length}</span>` : ""}</div>`;
      if (list.length === 0) {
        html += `<div class="card empty-state"><span class="big">${emptyIcon}</span>${emptyTitle}<br/><small>${emptyBody}</small></div>`;
        return html;
      }
      html += list.map(r => recipeRow(r, cls)).join("");
      return html;
    }

    function toggleFav(id) {
      const idx = state.favorites.indexOf(id);
      if (idx === -1) state.favorites.push(id);
      else state.favorites.splice(idx, 1);
      saveState();
      renderCook();
      haptic(10);
    }

    // ============================================================
    // RECIPE MODAL
    // ============================================================
    function openRecipe(id) {
      openRecipeId = id;
      const r = getRecipe(id);
      if (!r) return;
      familySize = state.settings.familyDefault || r.baseServings;
      document.getElementById("rmEmoji").textContent = r.emoji;
      document.getElementById("rmName").textContent = r.name;
      document.getElementById("rmMeta").textContent = `${r.time} · ${r.difficulty || "easy"} · serves ${r.baseServings}`;
      const tags = [];
      if (r.cuisine) tags.push(r.cuisine);
      if (r.mealType) tags.push(r.mealType);
      (r.tags || []).forEach(t => tags.push(t));
      document.getElementById("rmTags").innerHTML = tags.slice(0, 5).map(t => `<span class="tag">${t}</span>`).join("");
      const favBtn = document.getElementById("rmFavBtn");
      favBtn.textContent = state.favorites.includes(id) ? "★" : "☆";
      favBtn.style.color = state.favorites.includes(id) ? "#f4b400" : "var(--muted2)";
      renderFamily();
      renderRecipeIngredients();
      renderRecipeSteps();
      showModal("recipeModal");
    }

    function renderFamily() {
      document.getElementById("familyValue").textContent = familySize;
      document.getElementById("familyLabel").textContent = `${familySize} ${familySize === 1 ? "person" : "people"}`;
      document.getElementById("minusBtn").disabled = familySize <= 1;
      document.getElementById("plusBtn").disabled = familySize >= 12;
    }

    function scaledFor(recipe) {
      const factor = familySize / recipe.baseServings;
      return recipe.ingredients.map(i => ({
        ...i,
        scaledQty: i.qty * factor,
        have: hasIngredient(i.name),
        sub: SUBSTITUTIONS[normalize(i.name)] || null,
      }));
    }

    function renderRecipeIngredients() {
      const r = getRecipe(openRecipeId);
      if (!r) return;
      const items = scaledFor(r);
      const haveCount = items.filter(i => i.have).length;
      document.getElementById("rmMatchCount").textContent = `${haveCount} of ${items.length} in stock`;
      document.getElementById("rmIngList").innerHTML = items.map(i => `
        <li class="${i.have ? "have" : "missing"}">
          <div class="name">
            ${i.name}
            ${!i.have && i.sub ? `<div class="sub-hint">Swap: ${i.sub}</div>` : ""}
          </div>
          <div>
            <span class="qty">${formatQty(i.scaledQty)}${i.unit ? " " + i.unit : ""}</span>
            <span class="have-badge">${i.have ? "✓ have" : "need"}</span>
          </div>
        </li>
      `).join("");
      document.getElementById("rmShopMissing").disabled = items.every(i => i.have);
    }

    function renderRecipeSteps() {
      const r = getRecipe(openRecipeId);
      if (!r) return;
      document.getElementById("rmSteps").innerHTML = (r.steps || ["No steps provided"]).map(s => `<li>${s}</li>`).join("");
    }

    // ============================================================
    // INSTACART CART
    // ============================================================
    function startCart(items, mode, title) {
      checklistItems = items;
      checklistState = items.map(() => false);
      cartMode = mode || "recipe";
      if (title) document.getElementById("cartTitle").textContent = title;
      else document.getElementById("cartTitle").textContent = "Add to Instacart";
      renderChecklist();
      showModal("cartModal");
    }

    function renderChecklist() {
      const list = document.getElementById("checklist");
      list.innerHTML = checklistItems.map((i, idx) => {
        const done = checklistState[idx];
        const qty = i.scaledQty != null ? `${formatQty(i.scaledQty)}${i.unit ? " " + i.unit : ""}` : (i.qty != null ? `${formatQty(i.qty)}${i.unit ? " " + i.unit : ""}` : "");
        const searchUrl = `https://www.instacart.com/store/s?k=${encodeURIComponent(i.name)}`;
        return `
          <li class="${done ? "done" : ""}" data-idx="${idx}">
            <div class="check" data-action="toggle">${done ? "✓" : ""}</div>
            <div class="item">
              <div class="item-name">${i.name}</div>
              <div class="item-qty">${qty}</div>
            </div>
            <a class="find-btn" data-action="find" href="${searchUrl}" target="_blank" rel="noopener">${done ? "Added" : "Find"}</a>
          </li>`;
      }).join("");
      list.querySelectorAll("li").forEach(li => {
        const idx = Number(li.dataset.idx);
        li.querySelector('[data-action="toggle"]').addEventListener("click", () => {
          checklistState[idx] = !checklistState[idx];
          renderChecklist(); haptic(5);
        });
        li.querySelector('[data-action="find"]').addEventListener("click", () => {
          checklistState[idx] = true;
          setTimeout(renderChecklist, 50);
        });
      });
      const total = checklistState.length;
      const done = checklistState.filter(Boolean).length;
      document.getElementById("progressCount").textContent = `${done} of ${total}`;
      document.getElementById("progressFill").style.width = total ? `${(done/total)*100}%` : "0%";
      document.getElementById("goToCart").disabled = done === 0;
    }

    // ============================================================
    // INVENTORY
    // ============================================================
    // ============================================================
    // STORAGE LAYOUT — build-first architecture
    // Layout is defined first; inventory items live inside it.
    // ============================================================

    const STORAGE_PRESETS = [
      { type:"fridge",  name:"Fridge",       icon:"🧊", zones:["Top shelf","Middle shelf","Bottom shelf","Crisper drawer","Door"] },
      { type:"pantry",  name:"Pantry",        icon:"🗄️", zones:["Top shelf","Eye level","Lower shelf","Counter","Spice rack"] },
      { type:"freezer", name:"Freezer",       icon:"❄️", zones:["Top","Middle","Bottom","Door"] },
      { type:"counter", name:"Counter",       icon:"🍌", zones:["Counter","Fruit bowl","Bread area"] },
      { type:"fridge",  name:"Mini fridge",   icon:"🧊", zones:["Top","Bottom","Door"] },
      { type:"freezer", name:"Chest freezer", icon:"❄️", zones:["Top layer","Middle","Bottom"] },
      { type:"pantry",  name:"Cabinet",       icon:"🪵", zones:["Top shelf","Middle shelf","Lower shelf"] },
      { type:"custom",  name:"Custom…",       icon:"📦", zones:[] },
    ];

    // Scan target — set when arriving from a zone Scan button
    let scanTarget = null; // { locId, zoneId, locName, zoneName, locIcon }

    function slId() { return "sl-" + Math.random().toString(36).slice(2,9); }

    function getStorageLayout() {
      return state.settings.storageLayout || [];
    }

    function renderStorageSection() {
      const section = document.getElementById("storageSection");
      if (!section) return;
      const layout = getStorageLayout();

      if (!layout.length) {
        section.innerHTML = `
          <div class="sl-setup-empty">
            <span class="big">🏗️</span>
            <h3>Build your storage layout first</h3>
            <p>Add your fridge, pantry, freezer, and any other storage you have at home. Then scan items shelf-by-shelf to build your inventory.</p>
            <button class="btn btn-green" id="openBuildStorage" style="max-width:260px; margin:0 auto;">+ Add storage space</button>
          </div>`;
        document.getElementById("openBuildStorage").addEventListener("click", openBuildStorageModal);
        return;
      }

      const html = layout.map(loc => {
        const itemsInLoc = Object.entries(state.inventory)
          .filter(([,item]) => item.storageLocId === loc.id);
        const totalItems = itemsInLoc.length;

        const zonesHtml = (loc.zones || []).map(zone => {
          const zoneItems = itemsInLoc.filter(([,item]) => item.storageZoneId === zone.id);
          const count = zoneItems.length;
          const itemsHtml = zoneItems.length
            ? `<div class="sl-zone-items-list">${zoneItems.slice(0,6).map(([,item]) => {
                const img = item.image
                  ? `<div class="sl-zone-item-img"><img src="${escapeHtml(item.image)}" alt="" onerror="this.style.display='none'" /></div>`
                  : `<div class="sl-zone-item-img">${loc.icon}</div>`;
                const qty = item.qty != null ? ` · ${formatQty(item.qty)}${item.unit ? " "+item.unit : ""}` : "";
                return `<div class="sl-zone-item">${img}<span style="flex:1;font-weight:600;">${escapeHtml(item.name)}</span><span style="color:var(--muted);font-size:11px;">${escapeHtml(item.brand||"")}${qty}</span></div>`;
              }).join("")}${zoneItems.length > 6 ? `<div style="font-size:12px;color:var(--muted);padding:4px 0;">+${zoneItems.length-6} more</div>` : ""}</div>`
            : `<div class="sl-zone-empty">Empty — tap Scan to stock this zone</div>`;

          return `<div>
            <div class="sl-zone-row">
              <div class="sl-zone-dot"></div>
              <div class="sl-zone-info">
                <div class="sz-name">${escapeHtml(zone.name)}</div>
                <div class="sz-count">${count} item${count !== 1 ? "s" : ""}</div>
              </div>
              <button class="sl-zone-scan" data-loc-id="${escapeHtml(loc.id)}" data-zone-id="${escapeHtml(zone.id)}">📷 Scan</button>
            </div>
            ${itemsHtml}
          </div>`;
        }).join("");

        return `<div class="sl-location-card" data-loc-id="${escapeHtml(loc.id)}">
          <div class="sl-loc-header">
            <span class="sl-loc-icon">${loc.icon}</span>
            <span class="sl-loc-name">${escapeHtml(loc.name)}</span>
            <span class="sl-loc-meta">${totalItems} item${totalItems !== 1 ? "s" : ""} · ${(loc.zones||[]).length} zone${(loc.zones||[]).length !== 1?"s":""}</span>
            <span class="sl-loc-chevron">▼</span>
          </div>
          <div class="sl-loc-body">
            ${zonesHtml || `<div class="sl-zone-empty">No zones yet — add one below</div>`}
            <div class="sl-loc-footer">
              <button class="sl-sm-btn" data-action="add-zone" data-loc-id="${escapeHtml(loc.id)}">+ Add zone</button>
              <button class="sl-sm-btn danger" data-action="del-loc" data-loc-id="${escapeHtml(loc.id)}">Remove</button>
            </div>
          </div>
        </div>`;
      }).join("");

      // ── Unassigned items ─────────────────────────────────────────
      const allItems = Object.entries(state.inventory);
      const unassigned = allItems.filter(([, i]) => !i.storageLocId && i.qty !== 0);
      const restock    = allItems.filter(([, i]) => i.qty === 0);

      let extraHtml = `<button class="btn btn-secondary" id="addMoreStorageBtn" style="margin-bottom:14px;">+ Add another storage space</button>`;

      if (unassigned.length) {
        const rows = unassigned.sort((a,b) => a[1].name.localeCompare(b[1].name)).map(([k, item]) => {
          const qtyText = item.qty != null ? formatQty(item.qty) + (item.unit ? " " + item.unit : "") : "";
          const badges = [];
          if (isExpired(item)) badges.push(`<span class="badge expired">expired</span>`);
          else if (item.expiry) {
            const diff = (new Date(item.expiry).getTime() - Date.now()) / (24*3600*1000);
            if (diff <= 3) badges.push(`<span class="badge expiring">soon</span>`);
          }
          if (isLowStock(item)) badges.push(`<span class="badge low">low</span>`);
          const iconHtml = item.image
            ? `<img src="${escapeHtml(item.image)}" alt="" loading="lazy" onerror="this.parentNode.innerHTML='📦'" />`
            : "📦";
          return `<div class="inv-item" data-key="${escapeHtml(k)}">
            <div class="icon">${iconHtml}</div>
            <div class="name">${escapeHtml(item.name)}${item.brand ? `<span style="font-weight:400;color:var(--muted);font-size:12px;margin-left:4px;">· ${escapeHtml(item.brand)}</span>` : ""}</div>
            <div class="badges">${badges.join("")}</div>
            <div class="qty">${qtyText}</div>
            <button class="btn-mini" data-action="assign" aria-label="Assign to zone" style="background:var(--green-light);color:var(--green);border:none;border-radius:6px;padding:3px 7px;font-size:11px;font-weight:600;cursor:pointer;white-space:nowrap;">Assign</button>
            <button class="delete" data-action="delete" aria-label="Delete">×</button>
          </div>`;
        }).join("");
        extraHtml += `<div class="inv-group-title" style="margin-top:8px;">📦 Unassigned <span style="color:var(--muted2);font-weight:500;text-transform:none;letter-spacing:0;">(${unassigned.length})</span> <span style="font-size:11px;font-weight:400;color:var(--muted);text-transform:none;letter-spacing:0;">— tap Assign to place in a zone</span></div>${rows}`;
      }

      if (restock.length) {
        const rows = restock.sort((a,b) => a[1].name.localeCompare(b[1].name)).map(([k, item]) => {
          const iconHtml = item.image
            ? `<img src="${escapeHtml(item.image)}" alt="" loading="lazy" onerror="this.parentNode.innerHTML='🛒'" />`
            : "🛒";
          return `<div class="inv-item restock" data-key="${escapeHtml(k)}">
            <div class="icon" style="background:var(--red-light);">${iconHtml}</div>
            <div class="name">${escapeHtml(item.name)}${item.brand ? `<span style="font-weight:400;color:var(--muted);font-size:12px;margin-left:4px;">· ${escapeHtml(item.brand)}</span>` : ""}</div>
            <div class="badges"><span class="badge expired" style="background:var(--red-light);color:var(--red);">out</span></div>
            <button class="btn-mini" data-action="restock" aria-label="Mark as restocked">↺</button>
            <button class="delete" data-action="delete" aria-label="Delete">×</button>
          </div>`;
        }).join("");
        extraHtml += `<div class="inv-group-title" style="color:var(--red);margin-top:8px;">🛒 Need to restock <span style="color:var(--muted2);font-weight:500;text-transform:none;letter-spacing:0;">(${restock.length})</span></div>${rows}`;
      }

      section.innerHTML = html + extraHtml;

      // Toggle location cards open/close
      section.querySelectorAll(".sl-loc-header").forEach(h => {
        h.addEventListener("click", () => h.closest(".sl-location-card").classList.toggle("open"));
      });

      // Scan button → set target + go to scan tab
      section.querySelectorAll(".sl-zone-scan").forEach(btn => {
        btn.addEventListener("click", e => {
          e.stopPropagation();
          const locId = btn.dataset.locId;
          const zoneId = btn.dataset.zoneId;
          const loc = getStorageLayout().find(l => l.id === locId);
          const zone = loc?.zones?.find(z => z.id === zoneId);
          if (!loc || !zone) return;
          setScanTarget({ locId, zoneId, locName: loc.name, zoneName: zone.name, locIcon: loc.icon });
          document.querySelector('[data-view="scan"]')?.click();
        });
      });

      // Add zone button
      section.querySelectorAll('[data-action="add-zone"]').forEach(btn => {
        btn.addEventListener("click", e => { e.stopPropagation(); openAddZoneModal(btn.dataset.locId); });
      });

      // Remove location
      section.querySelectorAll('[data-action="del-loc"]').forEach(btn => {
        btn.addEventListener("click", e => {
          e.stopPropagation();
          const loc = getStorageLayout().find(l => l.id === btn.dataset.locId);
          if (!loc) return;
          if (!confirm(`Remove "${loc.name}" and all its zones? Items in this location will remain in inventory (unassigned).`)) return;
          state.settings.storageLayout = getStorageLayout().filter(l => l.id !== btn.dataset.locId);
          saveState(); renderStorageSection();
        });
      });

      document.getElementById("addMoreStorageBtn")?.addEventListener("click", openBuildStorageModal);

      // Unassigned + restock item interactions
      section.querySelectorAll(".inv-item").forEach(el => {
        el.addEventListener("click", e => {
          const action = e.target.dataset.action;
          const k = el.dataset.key;
          if (!k) return;
          if (action === "delete") {
            const removed = state.inventory[k];
            delete state.inventory[k];
            saveState(); renderStorageSection();
            showToast(`Removed ${removed.name}`, "Undo", () => {
              state.inventory[k] = removed;
              saveState(); renderStorageSection();
            });
            haptic(10);
          } else if (action === "restock") {
            const item = state.inventory[k];
            if (!item) return;
            const prev = { ...item };
            item.qty = 1;
            saveState(); renderStorageSection();
            showToast(`${item.name} back in stock`, "Undo", () => {
              state.inventory[k] = prev;
              saveState(); renderStorageSection();
            });
            haptic(10);
          } else if (action === "assign") {
            // Open item modal focused on zone picker
            openItem(k);
            // Scroll zone field into view after modal opens
            setTimeout(() => {
              document.getElementById("imZoneField")?.scrollIntoView({ behavior: "smooth", block: "center" });
              document.getElementById("imZone")?.focus();
            }, 120);
          } else {
            openItem(k);
          }
        });
      });
    }

    // ── Scan target ───────────────────────────────────────────────
    function setScanTarget(target) {
      scanTarget = target;
      const banner = document.getElementById("scanTargetBanner");
      const label = document.getElementById("scanTargetLabel");
      if (banner && label) {
        label.textContent = `Scanning into: ${target.locIcon} ${target.locName} › ${target.zoneName}`;
        banner.classList.add("show");
      }
    }
    function clearScanTarget() {
      scanTarget = null;
      const banner = document.getElementById("scanTargetBanner");
      if (banner) banner.classList.remove("show");
    }
    document.getElementById("scanTargetClear")?.addEventListener("click", clearScanTarget);

    // ── Build Storage modal — 3-step wizard ──────────────────────
    // Wizard state
    let bsPending  = null; // { name, icon, type } — set in step 1
    let bsZones    = [];   // string[] — built in step 3
    let bsPhotoUrl = null; // dataUrl of the photo taken in step 2

    function bsShowStep(n) {
      [1,2,3].forEach(i => {
        document.getElementById(`bsStep${i}`).style.display = i === n ? "" : "none";
      });
    }

    function openBuildStorageModal() {
      bsPending = null;
      bsZones = [];
      bsPhotoUrl = null;
      document.getElementById("bsPhotoPreview").innerHTML = "";
      document.getElementById("bsCustomZone").value = "";
      document.getElementById("customStorageName").value = "";
      // Restore hidden buttons from a previous analysis run
      const uploadLbl = document.querySelector("#bsStep2 label");
      const skipBtn = document.getElementById("bsSkipPhoto");
      if (uploadLbl) uploadLbl.style.display = "";
      if (skipBtn) skipBtn.style.display = "";
      document.getElementById("bsAnalyzingState")?.remove();
      bsShowStep(1);

      const grid = document.getElementById("storagePresetGrid");
      grid.innerHTML = STORAGE_PRESETS.map(p => `
        <button class="location-pick-btn" data-preset="${escapeHtml(p.name)}" style="padding:14px 8px; display:flex; flex-direction:column; align-items:center; gap:4px;">
          <span style="font-size:24px;">${p.icon}</span>
          <span>${p.name}</span>
        </button>`).join("");
      grid.querySelectorAll(".location-pick-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          const preset = STORAGE_PRESETS.find(p => p.name === btn.dataset.preset);
          if (!preset) return;
          if (preset.type === "custom") {
            document.getElementById("customStorageName").focus();
            return;
          }
          bsPending = { name: preset.name, icon: preset.icon, type: preset.type };
          // Pre-load preset zones as fallback for step 3
          bsZones = [...preset.zones];
          // Move to photo step
          const locLabel = { fridge:"refrigerator", freezer:"freezer", pantry:"pantry", counter:"countertop" }[preset.type] || preset.name.toLowerCase();
          document.getElementById("bsStep2Title").textContent = `📷 Photo your ${preset.icon} ${preset.name}`;
          document.getElementById("bsStep2Sub").textContent = `Open your ${preset.name.toLowerCase()} and take a photo of the inside. Claude will identify your shelves and zones.`;
          bsShowStep(2);
        });
      });
      showModal("buildStorageModal");
    }

    document.getElementById("addCustomStorageBtn")?.addEventListener("click", () => {
      const name = document.getElementById("customStorageName").value.trim();
      if (!name) return;
      bsPending = { name, icon: "📦", type: "custom" };
      bsZones = [];
      document.getElementById("bsStep2Title").textContent = `📷 Photo your ${name}`;
      document.getElementById("bsStep2Sub").textContent = `Take a photo of the inside so Claude can map the layout. Or skip to add zones manually.`;
      bsShowStep(2);
    });

    // Step 2 → photo input
    document.getElementById("bsPhotoInput")?.addEventListener("change", async (e) => {
      const file = e.target.files?.[0];
      if (!file || !bsPending) return;
      e.target.value = "";

      const reader = new FileReader();
      reader.onload = async (ev) => {
        const dataUrl = ev.target.result;
        bsPhotoUrl = dataUrl; // persist so step 3 can show it
        const hasKey = !!(state.settings.claudeKey && state.settings.claudeKey.trim());

        // Replace step 2 content with photo + prominent analyzing state
        document.getElementById("bsPhotoPreview").innerHTML = `
          <img src="${dataUrl}" style="width:100%; border-radius:12px; margin-bottom:12px; max-height:200px; object-fit:cover;" />`;

        // Hide the upload button and skip button, show spinner in their place
        const uploadBtn = document.querySelector("label[for='bsPhotoInput'], #bsStep2 label");
        const skipBtn = document.getElementById("bsSkipPhoto");
        if (uploadBtn) uploadBtn.style.display = "none";
        if (skipBtn) skipBtn.style.display = "none";

        const analyzeEl = document.createElement("div");
        analyzeEl.className = "ai-analyzing-state";
        analyzeEl.id = "bsAnalyzingState";
        analyzeEl.innerHTML = `
          <div class="ai-spinner"></div>
          <div class="ai-label">${hasKey ? "Analyzing with Claude AI…" : "Reading photo…"}</div>
          <p class="ai-sub">${hasKey ? "Identifying your shelves, drawers, and compartments" : "Getting your photo ready"}</p>`;
        document.getElementById("bsStep2").appendChild(analyzeEl);

        if (hasKey) {
          try {
            const aiZones = await analyzeStorageLayoutPhoto(dataUrl, bsPending.type, bsPending.name);
            if (aiZones.length) bsZones = aiZones;
          } catch (err) {
            console.warn("Layout AI failed, using presets:", err.message);
            // Show a brief error note before proceeding
            analyzeEl.innerHTML = `
              <div class="ai-label" style="color:var(--amber);">⚠️ AI couldn't read the photo</div>
              <p class="ai-sub">Using preset zones instead — you can edit them next</p>`;
            await new Promise(r => setTimeout(r, 1800));
          }
        }
        bsShowZoneReview();
      };
      reader.readAsDataURL(file);
    });

    // Step 2 → skip photo
    document.getElementById("bsSkipPhoto")?.addEventListener("click", () => {
      bsShowZoneReview();
    });

    function bsShowZoneReview() {
      const hasKey = !!(state.settings.claudeKey && state.settings.claudeKey.trim());
      document.getElementById("bsStep3Title").textContent = `${bsPending?.icon || "📦"} ${bsPending?.name || "Storage"} zones`;
      document.getElementById("bsStep3Sub").textContent = hasKey && bsPhotoUrl && bsZones.length
        ? "Claude identified these zones from your photo. Tap × to remove any, or add your own."
        : "These zones come from a preset. Remove any that don't apply, or add your own.";

      // Show photo reference above the zone list if we have one
      const photoEl = document.getElementById("bsStep3Photo");
      if (bsPhotoUrl) {
        photoEl.innerHTML = `<img src="${bsPhotoUrl}" style="width:100%; border-radius:12px; margin-bottom:14px; max-height:220px; object-fit:cover;" alt="Your photo" />`;
      } else {
        photoEl.innerHTML = "";
      }

      bsRenderZoneList();
      bsShowStep(3);
    }

    function bsRenderZoneList() {
      const el = document.getElementById("bsZoneList");
      el.innerHTML = bsZones.map((z, i) => `
        <div class="chip active" style="display:flex; align-items:center; gap:6px; padding-right:6px;">
          <span>${escapeHtml(z)}</span>
          <button style="background:none; border:none; cursor:pointer; font-size:14px; color:var(--muted); line-height:1; padding:0;" data-i="${i}" aria-label="Remove">×</button>
        </div>`).join("");
      el.querySelectorAll("button[data-i]").forEach(btn => {
        btn.addEventListener("click", () => {
          bsZones.splice(Number(btn.dataset.i), 1);
          bsRenderZoneList();
        });
      });
    }

    document.getElementById("bsAddZoneBtn")?.addEventListener("click", () => {
      const val = document.getElementById("bsCustomZone").value.trim();
      if (!val) return;
      if (!bsZones.includes(val)) bsZones.push(val);
      document.getElementById("bsCustomZone").value = "";
      bsRenderZoneList();
    });
    document.getElementById("bsCustomZone")?.addEventListener("keydown", (e) => {
      if (e.key === "Enter") document.getElementById("bsAddZoneBtn").click();
    });

    document.getElementById("bsConfirm")?.addEventListener("click", () => {
      if (!bsPending) return;
      addStorageLocation(bsPending.name, bsPending.icon, bsPending.type, bsZones);
      hideModal("buildStorageModal");
    });

    // ── AI: analyze a photo and return zone names ─────────────────
    async function analyzeStorageLayoutPhoto(dataUrl, locType, locName) {
      const key = (state.settings.claudeKey || "").trim();
      if (!key) throw new Error("No API key");
      const match = dataUrl.match(/^data:(image\/[a-z]+);base64,(.+)$/);
      if (!match) throw new Error("Bad image format");
      const mediaType = match[1];
      const b64 = match[2];

      const locLabel = { fridge:"refrigerator", freezer:"freezer", pantry:"pantry", counter:"kitchen countertop" }[locType] || locName;
      const examples = {
        fridge:  '["Top shelf","Middle shelf","Bottom shelf","Crisper drawer","Door - top","Door - bottom"]',
        freezer: '["Top shelf","Middle drawer","Bottom basket","Door shelf"]',
        pantry:  '["Top shelf","Eye-level shelf","Lower shelf","Bottom shelf","Door rack"]',
        counter: '["Main counter","Fruit bowl area","Appliance corner"]',
      };

      const prompt = [
        `This is a photo of the inside of a ${locLabel}.`,
        "",
        "Identify every distinct shelf, drawer, compartment, and storage zone that is visible.",
        "Give each one a short, descriptive name (2–5 words).",
        "",
        "Rules:",
        "- Be specific: 'Top shelf', 'Egg tray', 'Crisper drawer', 'Door top rack', etc.",
        "- If there are two side-by-side drawers, name them separately (e.g. 'Left crisper', 'Right crisper')",
        "- List zones top-to-bottom, front-to-back as they appear",
        "- 3–10 zones is typical; don't over-split",
        "",
        `Return ONLY a valid JSON array of strings, no prose, no markdown. Example: ${examples[locType] || examples.fridge}`,
      ].join("\n");

      const res = await fetchWithTimeout("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 500,
          messages: [{
            role: "user",
            content: [
              { type: "image", source: { type: "base64", media_type: mediaType, data: b64 } },
              { type: "text", text: prompt },
            ],
          }],
        }),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(`Claude API ${res.status}: ${j.error?.message || ""}`);
      }
      const data = await res.json();
      const text = (data.content || []).map(c => c.text || "").join("\n");
      const jsonMatch = text.match(/\[[\s\S]*?\]/);
      if (!jsonMatch) throw new Error("No JSON array in response");
      const parsed = JSON.parse(jsonMatch[0]);
      if (!Array.isArray(parsed)) throw new Error("Not an array");
      return parsed.map(s => String(s).trim()).filter(Boolean);
    }

    function addStorageLocation(name, icon, type, defaultZones) {
      if (!state.settings.storageLayout) state.settings.storageLayout = [];
      const loc = {
        id: slId(), name, icon, type,
        zones: defaultZones.map(n => ({ id: slId(), name: n })),
      };
      state.settings.storageLayout.push(loc);
      saveState();
      renderStorageSection();
      // Auto-open the new card
      setTimeout(() => {
        const card = document.querySelector(`[data-loc-id="${loc.id}"]`);
        if (card) card.classList.add("open");
      }, 50);
    }

    // ── Add Zone modal ────────────────────────────────────────────
    let addZoneTargetLocId = null;
    function openAddZoneModal(locId) {
      addZoneTargetLocId = locId;
      const loc = getStorageLayout().find(l => l.id === locId);
      if (!loc) return;
      document.getElementById("addZoneTitle").textContent = `Add zones to ${loc.icon} ${loc.name}`;
      document.getElementById("addZoneSubtitle").textContent = "Tap suggestions to add, or type a custom name.";
      const existing = new Set((loc.zones || []).map(z => z.name));
      const preset = STORAGE_PRESETS.find(p => p.type === loc.type);
      const suggestions = (preset?.zones || []).filter(z => !existing.has(z));
      const sugg = document.getElementById("addZoneSuggestions");
      sugg.innerHTML = suggestions.map(s =>
        `<button class="chip" data-zone="${escapeHtml(s)}">${s}</button>`
      ).join("");
      sugg.querySelectorAll(".chip").forEach(chip => {
        chip.addEventListener("click", () => {
          addZoneToLoc(addZoneTargetLocId, chip.dataset.zone);
          chip.classList.add("active");
          chip.disabled = true;
        });
      });
      document.getElementById("customZoneName").value = "";
      showModal("addZoneModal");
    }

    document.getElementById("addCustomZoneBtn")?.addEventListener("click", () => {
      const name = document.getElementById("customZoneName").value.trim();
      if (!name || !addZoneTargetLocId) return;
      addZoneToLoc(addZoneTargetLocId, name);
      document.getElementById("customZoneName").value = "";
    });

    document.getElementById("addZoneDone")?.addEventListener("click", () => {
      hideModal("addZoneModal");
      renderStorageSection();
    });

    function addZoneToLoc(locId, name) {
      const layout = getStorageLayout();
      const loc = layout.find(l => l.id === locId);
      if (!loc) return;
      if (!loc.zones) loc.zones = [];
      if (loc.zones.find(z => z.name === name)) return;
      loc.zones.push({ id: slId(), name });
      state.settings.storageLayout = layout;
      saveState();
    }

    function renderInventory() {
      // #inventoryList no longer exists — storage layout cards are the one inventory view.
      renderStorageSection();
    }


    function openItem(key) {
      editingItemKey = key;
      const item = key ? state.inventory[key] : null;
      document.getElementById("imTitle").textContent = item ? "Edit item" : "Add item";
      document.getElementById("imName").value = item ? item.name : "";
      document.getElementById("imBrand").value = item && item.brand ? item.brand : "";
      document.getElementById("imQty").value = item && item.qty != null ? item.qty : "";
      document.getElementById("imUnit").value = item && item.unit ? item.unit : "";
      document.getElementById("imLoc").value = item ? (item.loc || "pantry") : "pantry";
      document.getElementById("imExpiry").value = item && item.expiry ? item.expiry : "";

      // ── Zone picker ────────────────────────────────────────────
      const layout = getStorageLayout();
      const zoneSelect = document.getElementById("imZone");
      const zoneField  = document.getElementById("imZoneField");
      const locField   = document.getElementById("imLocField");
      if (layout.length) {
        // Rebuild options: "— Unassigned —" + one optgroup per location
        zoneSelect.innerHTML = `<option value="">— Unassigned —</option>` +
          layout.map(loc =>
            `<optgroup label="${escapeHtml(loc.icon + " " + loc.name)}">${
              (loc.zones || []).map(zone =>
                `<option value="${escapeHtml(loc.id)}|${escapeHtml(zone.id)}">${escapeHtml(zone.name)}</option>`
              ).join("")
            }</optgroup>`
          ).join("");
        // Pre-select current zone
        const current = item && item.storageLocId && item.storageZoneId
          ? `${item.storageLocId}|${item.storageZoneId}` : "";
        zoneSelect.value = current;
        zoneField.style.display = "";
        locField.style.display = "none";
      } else {
        // No layout yet — fall back to legacy loc picker
        zoneField.style.display = "none";
        locField.style.display = "";
      }
      document.getElementById("imDelete").style.display = item ? "inline-flex" : "none";
      // Show product image + UPC if we have them.
      const wrap = document.getElementById("imImageWrap");
      const img = document.getElementById("imImage");
      const upcLabel = document.getElementById("imUpcLabel");
      if (item && item.image) {
        img.src = item.image;
        img.onerror = () => { wrap.style.display = "none"; };
        wrap.style.display = "block";
      } else {
        img.removeAttribute("src");
        wrap.style.display = "none";
      }
      if (item) {
        const parts = [];
        if (item.size) parts.push(item.size);
        if (item.upc) parts.push("UPC " + item.upc);
        upcLabel.textContent = parts.join(" · ");
        if (parts.length && !item.image) wrap.style.display = "block";
      } else {
        upcLabel.textContent = "";
      }
      showModal("itemModal");
      if (!item) setTimeout(() => document.getElementById("imName").focus(), 50);

      // Wire expiry suggestion to name field — instant from table, AI fallback
      let _expiryDebounce = null;
      function showExpirySuggestion(suggestion) {
        const suggestEl = document.getElementById("imExpirySuggest");
        if (!suggestion) { suggestEl.style.display = "none"; return; }
        suggestEl.style.display = "flex";
        suggestEl.innerHTML = `💡 Typical: ${suggestion.label}
          <button type="button" style="background:none;border:none;color:var(--green);font-size:12px;font-weight:600;cursor:pointer;padding:0;text-decoration:underline;" id="applyExpirySuggest">Apply</button>`;
        document.getElementById("applyExpirySuggest").addEventListener("click", () => {
          document.getElementById("imExpiry").value = suggestion.date;
          suggestEl.style.display = "none";
        });
      }

      async function refreshExpirySuggest() {
        const nameVal = document.getElementById("imName").value.trim();
        const expiryVal = document.getElementById("imExpiry").value;
        const suggestEl = document.getElementById("imExpirySuggest");
        if (expiryVal || !nameVal) { suggestEl.style.display = "none"; return; }

        // Instant: check local table + cache
        const instant = suggestExpiry(nameVal);
        if (instant) { showExpirySuggestion(instant); return; }

        // Debounced AI lookup for anything not in the table
        clearTimeout(_expiryDebounce);
        if (nameVal.length < 3) { suggestEl.style.display = "none"; return; }
        suggestEl.style.display = "flex";
        suggestEl.innerHTML = `<span style="color:var(--muted);">Looking up shelf life…</span>`;
        _expiryDebounce = setTimeout(async () => {
          if (document.getElementById("imExpiry").value) { suggestEl.style.display = "none"; return; }
          const ai = await lookupExpiryAI(document.getElementById("imName").value.trim());
          if (document.getElementById("imExpiry").value) { suggestEl.style.display = "none"; return; }
          showExpirySuggestion(ai);
        }, 900);
      }

      document.getElementById("imName").addEventListener("input", refreshExpirySuggest);
      document.getElementById("imExpiry").addEventListener("change", refreshExpirySuggest);
      refreshExpirySuggest();
    }

    function saveItem() {
      const name = document.getElementById("imName").value.trim();
      if (!name) { showToast("Enter an item name first"); document.getElementById("imName").focus(); return; }
      const qtyStr = document.getElementById("imQty").value;
      const expiry = document.getElementById("imExpiry").value || null;
      const newQty = qtyStr === "" ? null : Number(qtyStr);
      const prev = editingItemKey ? state.inventory[editingItemKey] : null;
      // Parse zone selection (format: "locId|zoneId" or "")
      const zoneVal = document.getElementById("imZone").value;
      const [selectedLocId = "", selectedZoneId = ""] = zoneVal ? zoneVal.split("|") : [];
      const item = {
        name,
        brand: document.getElementById("imBrand").value.trim(),
        canonicalName: normalize(name),
        qty: newQty,
        unit: document.getElementById("imUnit").value,
        loc: document.getElementById("imLoc").value,
        storageLocId: selectedLocId,
        storageZoneId: selectedZoneId,
        expiry,
        upc: (prev && prev.upc) ? prev.upc : "",
        size: (prev && prev.size) ? prev.size : "",
        image: (prev && prev.image) ? prev.image : "",
        _imageTried: prev ? prev._imageTried : undefined,
      };
      const newKey = inventoryKey(item);
      if (editingItemKey && editingItemKey !== newKey) {
        delete state.inventory[editingItemKey];
      }
      state.inventory[newKey] = item;
      saveState();
      hideModal("itemModal");
      renderInventory();
      haptic(10);
      // Auto-add to shopping list if user manually set qty to 0
      // (either a new item created at 0, or an existing item whose qty went from >0 → 0).
      if (newQty === 0) {
        const wentToZero = !prev || (prev.qty == null || prev.qty > 0);
        if (wentToZero) autoAddOnDepletion(item, "ran out");
      }
    }
    function deleteItem() {
      if (editingItemKey) {
        const removed = state.inventory[editingItemKey];
        delete state.inventory[editingItemKey];
        saveState();
        showToast(`Removed ${removed.name}`, "Undo", () => {
          state.inventory[editingItemKey] = removed; saveState(); renderInventory();
        });
      }
      hideModal("itemModal");
      renderInventory();
    }

    // ============================================================
    // SCAN
    // ============================================================

    // Convert any browser-readable image (or HEIC) to a JPEG data URL
    // sized to max 1600px on the longest edge. Claude only accepts
    // jpeg/png/gif/webp, and iPhones export HEIC by default.
    async function normalizeImageToJpeg(dataUrl) {
      try {
        return await canvasReencodeAsJpeg(dataUrl);
      } catch (e) {
        // Browser couldn't decode it natively (most likely HEIC on Chrome/Firefox).
        if (!window.heic2any) {
          await loadScript("https://cdn.jsdelivr.net/npm/heic2any@0.0.4/dist/heic2any.min.js");
        }
        const blob = await (await fetch(dataUrl)).blob();
        const jpegBlob = await window.heic2any({ blob, toType: "image/jpeg", quality: 0.85 });
        const jpegUrl = await blobToDataUrl(Array.isArray(jpegBlob) ? jpegBlob[0] : jpegBlob);
        return await canvasReencodeAsJpeg(jpegUrl);
      }
    }
    function canvasReencodeAsJpeg(dataUrl) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          const maxDim = 1600;
          let w = img.naturalWidth || img.width;
          let h = img.naturalHeight || img.height;
          if (!w || !h) return reject(new Error("Bad image dimensions"));
          if (w > maxDim || h > maxDim) {
            const scale = maxDim / Math.max(w, h);
            w = Math.round(w * scale);
            h = Math.round(h * scale);
          }
          const canvas = document.createElement("canvas");
          canvas.width = w; canvas.height = h;
          canvas.getContext("2d").drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL("image/jpeg", 0.85));
        };
        img.onerror = () => reject(new Error("Could not decode image natively"));
        img.src = dataUrl;
      });
    }
    function blobToDataUrl(blob) {
      return new Promise((resolve, reject) => {
        const fr = new FileReader();
        fr.onload = () => resolve(fr.result);
        fr.onerror = () => reject(fr.error || new Error("FileReader error"));
        fr.readAsDataURL(blob);
      });
    }
    function loadScript(src) {
      return new Promise((resolve, reject) => {
        const s = document.createElement("script");
        s.src = src; s.async = true;
        s.onload = resolve;
        s.onerror = () => reject(new Error("Could not load " + src));
        document.head.appendChild(s);
      });
    }

    // ============================================================
    // PHASE 2: Single-item close-up capture, barcode scan, UPC lookup
    // ============================================================

    // Draft state for the one-item close-up review card.
    let closeUpDraft = null;

    async function handleCloseUpPhoto(file) {
      const scanEl = document.getElementById("scanResult");
      scanEl.innerHTML = `<div class="card" style="text-align:center;"><p style="margin:0;">📸 Processing photo…</p></div>`;
      try {
        const rawDataUrl = await blobToDataUrl(file);
        const jpegDataUrl = await normalizeImageToJpeg(rawDataUrl);
        renderCloseUpReview(jpegDataUrl);
      } catch (err) {
        scanEl.innerHTML = `<div class="card" style="background:var(--red-light);"><p style="margin:0; color:var(--red);"><strong>Couldn't read that photo.</strong></p><p style="margin:6px 0 0; font-size:13px; color:var(--red);">${escapeHtml(apiError(err))}</p></div>`;
      }
    }

    function renderCloseUpReview(dataUrl) {
      const hasKey = !!(state.settings.claudeKey && state.settings.claudeKey.trim());
      closeUpDraft = { dataUrl, name: "", brand: "", canonicalName: "", qty: null, unit: "", upc: "", storageLocId: scanTarget?.locId || "", storageZoneId: scanTarget?.zoneId || "", size: "" };

      const container = document.getElementById("scanResult");
      container.innerHTML = `
        ${dataUrl ? `<img class="preview-img" src="${dataUrl}" alt="Captured" />` : ""}
        <div class="card">
          <h3 style="margin:0 0 4px;">Confirm this item</h3>
          <p id="closeUpStatus" style="color:var(--muted); font-size:12px; margin:0 0 12px;">
            ${hasKey ? "🔍 Claude is reading the label…" : "Add a Claude API key in Settings to auto-identify. For now, type the details."}
          </p>
          <div class="field">
            <label>Name</label>
            <input id="cuName" type="text" placeholder="e.g. marinara sauce" />
          </div>
          <div class="field">
            <label>Brand</label>
            <input id="cuBrand" type="text" placeholder="e.g. Rao's" />
          </div>
          <div class="field">
            <label>Canonical name <span style="color:var(--muted); font-weight:400;">(for recipe matching — e.g. "marinara sauce" matches recipes that call for marinara)</span></label>
            <input id="cuCanonical" type="text" placeholder="marinara sauce" />
          </div>
          <div class="field">
            <label>Size on label</label>
            <div class="row">
              <input id="cuQty" type="number" step="0.25" min="0" placeholder="24" />
              <select id="cuUnit">
                <option value="">—</option>
                <option>oz</option><option>fl oz</option><option>lb</option><option>g</option><option>kg</option>
                <option>cup</option><option>tbsp</option><option>tsp</option>
                <option>piece</option><option>jar</option><option>bottle</option><option>can</option><option>bag</option><option>box</option><option>packet</option>
              </select>
            </div>
          </div>
          <div class="field">
            <label>UPC <span style="color:var(--muted); font-weight:400;">(unique product code)</span></label>
            <div class="row">
              <input id="cuUpc" type="text" inputmode="numeric" placeholder="e.g. 041129102244" style="flex:1;" />
              <button class="btn btn-secondary" id="cuScanBarcode" style="flex:0 0 auto;">📷 Scan</button>
            </div>
            <p id="cuUpcHint" style="color:var(--muted); font-size:11px; margin:4px 0 0;"></p>
          </div>
          <div class="field" id="cuZoneField">
            <label>Storage zone</label>
            <select id="cuZone">
              <option value="">— Unassigned —</option>
            </select>
          </div>
          <div id="cuDupeWarn"></div>
          <button class="btn btn-green" id="cuSave" style="width:100%;">Save to inventory</button>
        </div>`;

      // Populate zone picker
      const cuZoneLayout = getStorageLayout();
      const cuZoneSelect = document.getElementById("cuZone");
      if (cuZoneLayout.length) {
        cuZoneSelect.innerHTML = `<option value="">— Unassigned —</option>` +
          cuZoneLayout.map(loc =>
            `<optgroup label="${escapeHtml(loc.icon + " " + loc.name)}">${
              (loc.zones || []).map(zone =>
                `<option value="${escapeHtml(loc.id)}|${escapeHtml(zone.id)}">${escapeHtml(zone.name)}</option>`
              ).join("")
            }</optgroup>`
          ).join("");
        // Pre-select scan target zone if active
        if (scanTarget) cuZoneSelect.value = `${scanTarget.locId}|${scanTarget.zoneId}`;
      }
      cuZoneSelect.addEventListener("change", (e) => {
        const [locId = "", zoneId = ""] = e.target.value ? e.target.value.split("|") : [];
        closeUpDraft.storageLocId = locId;
        closeUpDraft.storageZoneId = zoneId;
      });

      // Wire inputs → draft
      const syncField = (id, key) => {
        document.getElementById(id).addEventListener("input", (e) => {
          closeUpDraft[key] = e.target.value;
          if (key === "name" && !closeUpDraft.canonicalName) {
            document.getElementById("cuCanonical").value = normalize(e.target.value);
            closeUpDraft.canonicalName = normalize(e.target.value);
          }
        });
      };
      syncField("cuName", "name");
      syncField("cuBrand", "brand");
      syncField("cuCanonical", "canonicalName");
      syncField("cuUpc", "upc");
      document.getElementById("cuQty").addEventListener("input", (e) => { closeUpDraft.qty = e.target.value ? Number(e.target.value) : null; });
      document.getElementById("cuUnit").addEventListener("change", (e) => { closeUpDraft.unit = e.target.value; });

      document.getElementById("cuScanBarcode").addEventListener("click", openBarcodeScanner);
      document.getElementById("cuSave").addEventListener("click", saveCloseUpItem);

      if (hasKey) {
        analyzeOneItemWithClaude(dataUrl).then((info) => {
          applyCloseUpInfo(info, "Claude");
          document.getElementById("closeUpStatus").textContent = "✓ Claude filled in what it could read. Fix anything wrong, then save.";
        }).catch((err) => {
          document.getElementById("closeUpStatus").innerHTML = `<span style="color:var(--red);">Scan failed: ${escapeHtml(apiError(err))}.</span> Fill in manually below.`;
        });
      }
    }

    function applyCloseUpInfo(info, sourceLabel) {
      if (!info || !closeUpDraft) return;
      const setIfEmpty = (id, val) => {
        const el = document.getElementById(id);
        if (!el) return;
        if (!el.value && val != null && val !== "") {
          el.value = val;
          el.dispatchEvent(new Event("input"));
          el.dispatchEvent(new Event("change"));
        }
      };
      setIfEmpty("cuName", info.name);
      setIfEmpty("cuBrand", info.brand);
      setIfEmpty("cuCanonical", info.canonicalName || (info.name ? normalize(info.name) : ""));
      if (info.qty != null) setIfEmpty("cuQty", info.qty);
      setIfEmpty("cuUnit", info.unit);
      if (info.upc) setIfEmpty("cuUpc", info.upc);
      const hint = document.getElementById("cuUpcHint");
      if (hint && info.upc && sourceLabel) hint.textContent = `UPC from ${sourceLabel}`;
    }

    async function analyzeOneItemWithClaude(dataUrl) {
      const key = (state.settings.claudeKey || "").trim();
      if (!key) throw new Error("No API key set");
      const match = dataUrl.match(/^data:(image\/[a-z]+);base64,(.+)$/);
      if (!match) throw new Error("Bad image format");
      const mediaType = match[1];
      const b64 = match[2];
      const prompt = [
        "This is a close-up photo of ONE kitchen item. Read the label carefully.",
        "",
        "Return a single JSON object with these fields:",
        '- "name": specific product name from the label, lowercase (e.g. "marinara sauce", "sea salt", "rice vinegar")',
        '- "brand": brand as printed on the label (e.g. "Rao\'s Homemade", "Diamond Crystal"); empty string "" if unclear',
        '- "canonicalName": the generic ingredient name that recipes would use, lowercase (e.g. "marinara sauce", "salt", "rice vinegar")',
        '- "qty": numeric net weight/volume from the label (e.g. 24 for "24 oz"); null if unreadable',
        '- "unit": unit on the label — one of: oz, fl oz, lb, g, kg, cup, piece, jar, bottle, can, bag, box, packet; empty string "" if unreadable',
        '- "upc": 12- or 13-digit UPC/EAN barcode if visible; empty string "" otherwise',
        "",
        "Rules:",
        "- Do NOT guess values you can't actually see on the label.",
        "- canonicalName should be generic so recipes match. e.g. \"Rao's Homemade Marinara\" → canonicalName \"marinara sauce\".",
        '- Return ONLY the JSON object, no prose, no markdown fences.',
        '',
        'Example: {"name":"marinara sauce","brand":"Rao\'s Homemade","canonicalName":"marinara sauce","qty":24,"unit":"oz","upc":"715365110012"}',
      ].join("\n");
      const res = await fetchWithTimeout("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 600,
          messages: [{
            role: "user",
            content: [
              { type: "image", source: { type: "base64", media_type: mediaType, data: b64 } },
              { type: "text", text: prompt },
            ],
          }],
        }),
      });
      if (!res.ok) {
        let detail = "";
        try { const j = await res.json(); detail = j.error?.message || ""; } catch {}
        throw new Error(`Claude API ${res.status}${detail ? ": " + detail : ""}`);
      }
      const data = await res.json();
      const text = (data.content || []).map(c => c.text || "").join("\n");
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) throw new Error("Claude didn't return structured data");
      const parsed = JSON.parse(jsonMatch[0]);
      return {
        name: String(parsed.name || "").trim(),
        brand: String(parsed.brand || "").trim(),
        canonicalName: String(parsed.canonicalName || "").trim().toLowerCase(),
        qty: (parsed.qty == null || parsed.qty === "" || isNaN(Number(parsed.qty))) ? null : Number(parsed.qty),
        unit: String(parsed.unit || "").trim(),
        upc: String(parsed.upc || "").trim().replace(/\D/g, ""),
      };
    }

    // ---- OpenFoodFacts lookup ----
    async function lookupUpc(upc) {
      const cleaned = String(upc || "").trim().replace(/\D/g, "");
      if (!cleaned || cleaned.length < 8) throw new Error("UPC must be 8–14 digits");
      const url = `https://world.openfoodfacts.org/api/v2/product/${encodeURIComponent(cleaned)}.json?fields=product_name,brands,quantity,product_quantity,product_quantity_unit,categories_tags,generic_name`;
      const res = await fetchWithTimeout(url, {}, 10000);
      if (!res.ok) throw new Error(`OpenFoodFacts ${res.status}`);
      const data = await res.json();
      if (data.status !== 1 || !data.product) return null;
      const p = data.product;
      // Parse size from "quantity" string like "24 oz" or "500 g"
      let qty = null, unit = "";
      if (p.product_quantity && p.product_quantity_unit) {
        qty = Number(p.product_quantity);
        unit = p.product_quantity_unit.toLowerCase();
      } else if (p.quantity) {
        const m = String(p.quantity).match(/([\d.]+)\s*([a-zA-Z]+)/);
        if (m) { qty = Number(m[1]); unit = m[2].toLowerCase(); }
      }
      const name = (p.generic_name || p.product_name || "").trim();
      const brand = (p.brands || "").split(",")[0].trim();
      return {
        name: name.toLowerCase(),
        brand,
        canonicalName: normalize(name),
        qty,
        unit,
        upc: cleaned,
      };
    }

    // ---- Barcode scanner (html5-qrcode — better iOS Safari support) ----
    let html5QrScanner = null;

    async function openBarcodeScanner() {
      showModal("barcodeModal");
      const statusEl = document.getElementById("barcodeStatus");
      statusEl.textContent = "Loading scanner…";
      try {
        if (!window.Html5Qrcode) {
          await loadScript("https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js");
        }
        // Clear any previous instance
        const box = document.getElementById("barcodeReaderBox");
        box.innerHTML = "";
        html5QrScanner = new Html5Qrcode("barcodeReaderBox");
        statusEl.textContent = "Point at barcode…";
        await html5QrScanner.start(
          { facingMode: "environment" },
          { fps: 15, qrbox: { width: 250, height: 150 }, aspectRatio: 1.5 },
          (decodedText) => {
            closeBarcodeScanner();
            onBarcodeDecoded(decodedText);
          },
          () => { /* scan errors are normal, ignore */ }
        );
      } catch (err) {
        statusEl.innerHTML = `<span style="color:var(--red);">Scanner error: ${escapeHtml(apiError(err))}</span>`;
      }
    }

    async function closeBarcodeScanner() {
      if (html5QrScanner) {
        try {
          if (html5QrScanner.isScanning) await html5QrScanner.stop();
          html5QrScanner.clear();
        } catch {}
        html5QrScanner = null;
      }
      hideModal("barcodeModal");
    }

    async function onBarcodeDecoded(code) {
      const statusEl = document.getElementById("barcodeStatus");
      statusEl.textContent = `Got ${code}. Looking up…`;
      haptic(20);
      // If close-up flow is active, set the UPC field immediately
      if (closeUpDraft) {
        const upcEl = document.getElementById("cuUpc");
        if (upcEl) { upcEl.value = code; upcEl.dispatchEvent(new Event("input")); }
      }
      try {
        const info = await lookupUpc(code);
        if (info) {
          applyCloseUpInfo(info, "OpenFoodFacts");
          const hint = document.getElementById("cuUpcHint");
          if (hint) hint.textContent = `✓ Matched ${info.brand || "product"} via OpenFoodFacts`;
          showToast("Product found via OpenFoodFacts");
        } else {
          showToast("UPC captured — no catalog match found");
          const hint = document.getElementById("cuUpcHint");
          if (hint) hint.textContent = `UPC ${code} — not in OpenFoodFacts, fill in details manually`;
        }
      } catch (err) {
        showToast(`Lookup failed: ${apiError(err)}`);
      } finally {
        closeBarcodeScanner();
      }
    }


    // ============================================================
    // BULK BARCODE SCANNER
    // ============================================================
    let bbScanner      = null;   // Html5Qrcode instance
    let bbItems        = [];     // { id, upc, name, brand, qty, unit, image, status }
    let bbRecentUpcs   = {};     // upc → timestamp, to debounce re-scans of same item
    const BB_COOLDOWN  = 2500;   // ms before same UPC can be scanned again

    function openBulkBarcodeScanner() {
      // Set title from scan target
      const title = scanTarget
        ? `${scanTarget.locIcon} ${scanTarget.locName} › ${scanTarget.zoneName}`
        : "Scanning barcodes";
      document.getElementById("bbTitle").textContent = title;
      bbItems = [];
      bbRecentUpcs = {};
      renderBulkList();
      document.getElementById("bulkBarcodeModal").style.display = "flex";
      document.body.style.overflow = "hidden";
      startBbScanner();
    }

    function closeBulkBarcodeScanner() {
      stopBbScanner();
      document.getElementById("bulkBarcodeModal").style.display = "none";
      document.body.style.overflow = "";
    }

    async function startBbScanner() {
      const statusEl = document.getElementById("bbStatus");
      statusEl.textContent = "Loading scanner…";
      statusEl.className = "bb-status";
      try {
        if (!window.Html5Qrcode) {
          await loadScript("https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js");
        }
        const box = document.getElementById("bbScannerBox");
        box.innerHTML = "";
        bbScanner = new Html5Qrcode("bbScannerBox");
        await bbScanner.start(
          { facingMode: "environment" },
          { fps: 15, qrbox: { width: 220, height: 100 }, aspectRatio: 2.2 },
          (code) => onBulkScan(code),
          () => {}
        );
        statusEl.textContent = "Point the barcode at the green box";
      } catch (err) {
        statusEl.innerHTML = `<span style="color:var(--red);">Camera error: ${escapeHtml(apiError(err))}</span>`;
      }
    }

    async function stopBbScanner() {
      if (bbScanner) {
        try {
          if (bbScanner.isScanning) await bbScanner.stop();
          bbScanner.clear();
        } catch {}
        bbScanner = null;
      }
    }

    async function onBulkScan(upc) {
      const now = Date.now();
      // Debounce — ignore if same UPC scanned within cooldown window
      if (bbRecentUpcs[upc] && now - bbRecentUpcs[upc] < BB_COOLDOWN) return;
      bbRecentUpcs[upc] = now;
      haptic(15);

      // Check if already in list — if so, just increment qty
      const existing = bbItems.find(i => i.upc === upc);
      if (existing) {
        existing.qty += 1;
        bbSetStatus(`+1 → ${existing.name || upc}`, true);
        renderBulkList();
        return;
      }

      // Add placeholder immediately
      const id = "bb-" + Math.random().toString(36).slice(2);
      const placeholder = { id, upc, name: "", brand: "", qty: 1, unit: "", image: null, status: "loading" };
      bbItems.unshift(placeholder);
      bbSetStatus("Looking up barcode…", false);
      renderBulkList();

      // Async lookup
      try {
        const info = await lookupUpc(upc);
        const item = bbItems.find(i => i.id === id);
        if (item) {
          item.name   = info?.name  || "";
          item.brand  = info?.brand || "";
          item.unit   = info?.unit  || "";
          item.image  = info?.image || null;
          item.status = info ? "found" : "notfound";
          // Expiry: instant from table, then AI fallback in background
          const quickExpiry = suggestExpiry(item.name);
          if (quickExpiry) {
            item.expiry = quickExpiry.date;
          } else {
            lookupExpiryAI(item.name).then(result => {
              if (result) { item.expiry = result.date; renderBulkList(); }
            });
          }
          bbSetStatus(info ? `✓ ${info.name || upc}` : `UPC ${upc} — fill in name`, !!info);
          renderBulkList();
        }
      } catch (err) {
        const item = bbItems.find(i => i.id === id);
        if (item) { item.status = "notfound"; renderBulkList(); }
        bbSetStatus("Lookup failed — fill in name manually", false);
      }
    }

    function bbSetStatus(text, success) {
      const el = document.getElementById("bbStatus");
      el.textContent = text;
      el.className = "bb-status" + (success ? " success" : "");
      // Reset to default after 2.5s
      clearTimeout(el._timer);
      el._timer = setTimeout(() => {
        el.textContent = "Point the barcode at the green box";
        el.className = "bb-status";
      }, 2500);
    }

    function renderBulkList() {
      const listEl   = document.getElementById("bbItemsList");
      const emptyEl  = document.getElementById("bbEmpty");
      const countEl  = document.getElementById("bbCount");
      const saveBtn  = document.getElementById("bbSaveAll");
      const n = bbItems.length;

      countEl.textContent = n ? `${n} item${n !== 1 ? "s" : ""} scanned` : "Point at a barcode to begin";
      emptyEl.style.display = n ? "none" : "";
      saveBtn.disabled = n === 0;
      saveBtn.textContent = n ? `Add ${n} item${n !== 1 ? "s" : ""} to inventory` : "Scan something to begin";

      listEl.innerHTML = bbItems.map(item => {
        const isLoading = item.status === "loading";
        const imgHtml = item.image
          ? `<img src="${escapeHtml(item.image)}" alt="" onerror="this.style.display='none'" />`
          : (isLoading ? `<div class="ai-spinner" style="width:22px;height:22px;"></div>` : "🔲");
        return `
          <div class="bb-item" data-id="${item.id}">
            <div class="bb-item-icon">${imgHtml}</div>
            <div class="bb-item-info">
              ${isLoading
                ? `<div class="bb-item-name loading">Looking up ${item.upc}…</div>`
                : `<input class="bb-name-input" value="${escapeHtml(item.name)}" placeholder="Item name" data-id="${item.id}"
                     style="width:100%; border:none; background:none; font-size:14px; font-weight:600; color:var(--text); padding:0; font-family:inherit;" />`
              }
              <div class="bb-item-brand">${escapeHtml(item.brand || (isLoading ? "" : item.upc))}</div>
            </div>
            <div class="bb-item-qty">
              <button class="bb-qty-btn" data-act="dec" data-id="${item.id}">−</button>
              <span class="bb-qty-num">${item.qty}</span>
              <button class="bb-qty-btn" data-act="inc" data-id="${item.id}">+</button>
            </div>
            <button class="bb-item-del" data-act="del" data-id="${item.id}" aria-label="Remove">×</button>
          </div>`;
      }).join("");

      // Wire events
      listEl.querySelectorAll(".bb-name-input").forEach(input => {
        input.addEventListener("input", e => {
          const item = bbItems.find(i => i.id === e.target.dataset.id);
          if (item) item.name = e.target.value;
        });
      });
      listEl.querySelectorAll("[data-act]").forEach(btn => {
        btn.addEventListener("click", () => {
          const { act, id } = btn.dataset;
          const idx = bbItems.findIndex(i => i.id === id);
          if (idx < 0) return;
          if (act === "del") { bbItems.splice(idx, 1); renderBulkList(); }
          else if (act === "inc") { bbItems[idx].qty++; renderBulkList(); }
          else if (act === "dec") {
            bbItems[idx].qty = Math.max(1, bbItems[idx].qty - 1);
            renderBulkList();
          }
        });
      });
    }

    function saveBulkBarcodeItems() {
      const toSave = bbItems.filter(i => i.status !== "loading");
      if (!toSave.length) { showToast("Wait for lookups to finish, or remove loading items"); return; }
      toSave.forEach(item => {
        const name = (item.name || "").trim() || item.upc;
        const inv = {
          name,
          brand: item.brand || "",
          canonicalName: normalize(name),
          qty: item.qty,
          unit: item.unit || "",
          upc: item.upc,
          image: item.image || null,
          loc: scanTarget?.locName || "",
          zone: scanTarget?.zoneName || "",
          storageLocId: scanTarget?.locId || "",
          storageZoneId: scanTarget?.zoneId || "",
          expiry: item.expiry || suggestExpiry(name)?.date || null, // AI already ran during scan
        };
        state.inventory[inventoryKey(inv)] = inv;
      });
      saveState();
      const dest = scanTarget
        ? `${scanTarget.locIcon || "📦"} ${scanTarget.locName} › ${scanTarget.zoneName}`
        : "your inventory";
      closeBulkBarcodeScanner();
      showToast(`Added ${toSave.length} item${toSave.length !== 1 ? "s" : ""} to ${dest}`);
      haptic(20);
      renderInventory();
    }

    document.getElementById("bbClose")?.addEventListener("click", () => {
      if (bbItems.length && !confirm("Discard all scanned barcodes?")) return;
      closeBulkBarcodeScanner();
    });
    document.getElementById("bbSaveAll")?.addEventListener("click", saveBulkBarcodeItems);

    // Depletion modal
    document.getElementById("dmConfirm")?.addEventListener("click", applyDepletion);
    document.getElementById("dmSkip")?.addEventListener("click", logCookedOnly);

    function saveCloseUpItem() {
      if (!closeUpDraft) return;
      const nameEl = document.getElementById("cuName");
      const brandEl = document.getElementById("cuBrand");
      const canonicalEl = document.getElementById("cuCanonical");
      const qtyEl = document.getElementById("cuQty");
      const unitEl = document.getElementById("cuUnit");
      const upcEl = document.getElementById("cuUpc");
      const name = (nameEl.value || "").trim();
      if (!name) { nameEl.focus(); showToast("Enter a name first"); return; }
      const upc = (upcEl.value || "").replace(/\D/g, "");
      const canonical = (canonicalEl.value || "").trim().toLowerCase() || normalize(name);

      // Zone from picker or draft (set via change listener)
      const cuZoneVal = document.getElementById("cuZone")?.value || "";
      const [cuLocId = "", cuZoneId = ""] = cuZoneVal ? cuZoneVal.split("|") : [];

      const item = {
        name,
        brand: (brandEl.value || "").trim(),
        canonicalName: canonical,
        qty: qtyEl.value ? Number(qtyEl.value) : 1,
        unit: unitEl.value || "",
        storageLocId: cuLocId || closeUpDraft.storageLocId || "",
        storageZoneId: cuZoneId || closeUpDraft.storageZoneId || "",
        expiry: null,
        upc: upc || "",
      };

      // Dupe detection: UPC match OR canonicalName+brand match
      const dupe = findInventoryDupe(item);
      if (dupe) {
        const warnEl = document.getElementById("cuDupeWarn");
        const dupeZone = dupe.storageLocId
          ? (() => { const l = getStorageLayout().find(l => l.id === dupe.storageLocId); const z = l?.zones?.find(z => z.id === dupe.storageZoneId); return l ? `${l.icon} ${l.name}${z ? " › " + z.name : ""}` : ""; })()
          : "inventory";
        const reason = dupe.upc && dupe.upc === item.upc
          ? `Same UPC already in your ${dupeZone}`
          : `Same item/brand already in your ${dupeZone}`;
        warnEl.innerHTML = `
          <div class="dupe-warn">
            <strong>⚠️ Already have this?</strong><br/>
            ${escapeHtml(reason)}. Current qty: ${formatQty(dupe.qty) || "0"}${dupe.unit ? " " + escapeHtml(dupe.unit) : ""}.
            <div class="dupe-actions">
              <button class="dupe-cancel" data-act="cancel">Cancel</button>
              <button class="dupe-add" data-act="increment">+1 to existing</button>
              <button class="dupe-add" data-act="add" style="background:var(--green); color:white;">Add as new</button>
            </div>
          </div>`;
        warnEl.querySelector('[data-act="cancel"]').addEventListener("click", () => { warnEl.innerHTML = ""; });
        warnEl.querySelector('[data-act="increment"]').addEventListener("click", () => {
          dupe.qty = (dupe.qty || 0) + (item.qty || 1);
          if (item.upc && !dupe.upc) dupe.upc = item.upc;
          saveState(); warnEl.innerHTML = "";
          finishCloseUpSave(`Bumped ${dupe.name} to ${formatQty(dupe.qty)}${dupe.unit ? " " + dupe.unit : ""}`);
        });
        warnEl.querySelector('[data-act="add"]').addEventListener("click", () => {
          warnEl.innerHTML = "";
          commitCloseUp(item, true);
        });
        return;
      }

      commitCloseUp(item, false);
    }

    function commitCloseUp(item, allowDupe) {
      const key = inventoryKey(item);
      state.inventory[key] = item;
      saveState();
      // If this product was on the shopping list (by UPC or canonical+brand), remove it
      const slIdx = (state.shoppingList || []).findIndex(s => {
        if (s.checked) return false;
        if (item.upc && s.upc && s.upc === item.upc) return true;
        return normalize(s.canonicalName || s.name) === item.canonicalName && normalize(s.brand || "") === normalize(item.brand || "");
      });
      if (slIdx >= 0) state.shoppingList.splice(slIdx, 1);
      saveState();
      // Toast: show zone name if assigned
      const layout = getStorageLayout();
      const loc = layout.find(l => l.id === item.storageLocId);
      const zone = loc?.zones?.find(z => z.id === item.storageZoneId);
      const dest = loc ? `${loc.icon} ${loc.name}${zone ? " › " + zone.name : ""}` : "inventory";
      finishCloseUpSave(`Added ${item.name}${item.brand ? " (" + item.brand + ")" : ""} to ${dest}`);
    }

    function finishCloseUpSave(msg) {
      closeUpDraft = null;
      const container = document.getElementById("scanResult");
      container.innerHTML = `
        <div class="card empty-state" style="background:var(--green-light);">
          <span class="big">✅</span>
          ${escapeHtml(msg)}.<br/>
          <small>Snap another item above, or check the Inventory tab.</small>
        </div>`;
      renderInventory();
      if (typeof renderShoppingList === "function") renderShoppingList();
      haptic(15);
    }

    function findInventoryDupe(item) {
      const entries = Object.values(state.inventory || {});
      // 1. UPC-exact match
      if (item.upc) {
        const byUpc = entries.find(i => i.upc && i.upc === item.upc);
        if (byUpc) return byUpc;
      }
      // 2. canonicalName + brand match
      const cn = normalize(item.canonicalName || item.name);
      const bn = normalize(item.brand || "");
      return entries.find(i => {
        const icn = normalize(i.canonicalName || i.name);
        const ibn = normalize(i.brand || "");
        return icn === cn && ibn === bn;
      });
    }

    // ---- END Phase 2 additions ----

    // In-memory list of items being reviewed in the Scan tab (bulk / whole-shelf mode).
    // Shape per item: { included: bool, name, brand, qty, unit }
    let scanDraftItems = [];

    function renderScanResult(dataUrl) {
      const container = document.getElementById("scanResult");
      const hasKey = !!(state.settings.claudeKey && state.settings.claudeKey.trim());
      container.innerHTML = `
        <img class="preview-img" src="${dataUrl}" alt="Captured photo" />
        <div class="card">
          <h3 style="margin:0 0 4px;">Review each item</h3>
          <p style="color:var(--muted); font-size:12px; margin:0 0 12px;">
            ${hasKey
              ? "Claude is identifying items… uncheck any you don't want, fix names/brands/amounts, then save."
              : "Add a Claude API key in Settings to auto-identify. For now, add items below manually."}
          </p>
          <div id="scanItemsList"></div>
          <div class="scan-summary" id="scanSummary"></div>
          <button class="btn btn-ghost" id="addScanItem" style="width:100%;">+ Add another item</button>
          <button class="btn btn-green" id="bulkSave" style="width:100%; margin-top:8px;">Add selected to inventory</button>
        </div>`;

      // Reset draft
      scanDraftItems = [];
      if (hasKey) {
        // Insert a single "Analyzing…" placeholder while Claude processes.
        document.getElementById("scanItemsList").innerHTML = `
          <div class="card" style="text-align:center; padding:16px;">
            <p style="margin:0;">🔍 Claude is looking at your photo…</p>
          </div>`;
        // Pass location context to Claude from the active scanTarget
        const _locName = scanTarget
          ? `${scanTarget.locName} (${scanTarget.zoneName})`
          : "storage area";
        const _zoneNames = scanTarget
          ? [scanTarget.zoneName]
          : ["Top shelf","Middle shelf","Bottom shelf"];
        analyzePhotoWithClaude(dataUrl, _locName, _zoneNames).then((items) => {
          scanDraftItems = items.map(i => ({ included: true, ...i }));
          if (!scanDraftItems.length) scanDraftItems.push(emptyScanItem());
          renderScanItemsList();
          haptic(10);
        }).catch((err) => {
          document.getElementById("scanItemsList").innerHTML = `
            <div class="card" style="background:var(--red-light);">
              <p style="margin:0; color:var(--red);"><strong>Scan failed.</strong></p>
              <p style="margin:6px 0 0; font-size:13px; color:var(--red);">${escapeHtml(apiError(err))}</p>
              <p style="margin:8px 0 0; font-size:13px;">You can still add items manually below.</p>
            </div>`;
          scanDraftItems = [emptyScanItem()];
          // Re-render fields below the error banner
          const listEl = document.createElement("div");
          listEl.id = "scanItemsListManual";
          document.getElementById("scanItemsList").appendChild(listEl);
          renderScanItemsList("scanItemsListManual");
        });
      } else {
        scanDraftItems = [emptyScanItem()];
        renderScanItemsList();
      }

      document.getElementById("addScanItem").addEventListener("click", () => {
        scanDraftItems.push(emptyScanItem());
        renderScanItemsList();
        // Focus the new row's name field
        setTimeout(() => {
          const all = document.querySelectorAll(".scan-item-card .item-name-input");
          if (all.length) all[all.length - 1].focus();
        }, 50);
      });
      document.getElementById("bulkSave").addEventListener("click", saveScannedItems);
    }

    function emptyScanItem() {
      return { included: true, name: "", brand: "", qty: null, unit: "" };
    }

    function renderScanItemsList(targetId) {
      const listEl = document.getElementById(targetId || "scanItemsList");
      if (!listEl) return;
      const unitOptions = ["","oz","fl oz","lb","g","kg","cup","tbsp","tsp","piece","can","bottle","jar","bag","box","packet","bunch","head"];
      listEl.innerHTML = scanDraftItems.map((i, idx) => `
        <div class="scan-item-card ${i.included ? "" : "excluded"}" data-idx="${idx}">
          <input type="checkbox" class="include-cb" ${i.included ? "checked" : ""} aria-label="Include" />
          <div class="scan-fields">
            <div class="name-row">
              <input type="text" class="item-name-input" placeholder="Item name" value="${escapeHtml(i.name || "")}" />
              <input type="text" class="brand-input" placeholder="Brand (optional)" value="${escapeHtml(i.brand || "")}" />
            </div>
            <div class="qty-row">
              <input type="number" class="qty-input" step="0.25" min="0" placeholder="Qty" value="${i.qty != null ? i.qty : ""}" />
              <select class="unit-input">
                ${unitOptions.map(u => `<option value="${u}" ${i.unit === u ? "selected" : ""}>${u || "— unit —"}</option>`).join("")}
              </select>
            </div>
          </div>
          <button class="scan-remove-btn" data-action="remove" aria-label="Remove">×</button>
        </div>
      `).join("");
      updateScanSummary();

      // Wire per-row events
      listEl.querySelectorAll(".scan-item-card").forEach(card => {
        const idx = Number(card.dataset.idx);
        card.querySelector(".include-cb").addEventListener("change", (e) => {
          scanDraftItems[idx].included = e.target.checked;
          card.classList.toggle("excluded", !e.target.checked);
          updateScanSummary();
        });
        card.querySelector(".item-name-input").addEventListener("input", (e) => {
          scanDraftItems[idx].name = e.target.value;
        });
        card.querySelector(".brand-input").addEventListener("input", (e) => {
          scanDraftItems[idx].brand = e.target.value;
        });
        card.querySelector(".qty-input").addEventListener("input", (e) => {
          const v = e.target.value;
          scanDraftItems[idx].qty = v === "" ? null : Number(v);
        });
        card.querySelector(".unit-input").addEventListener("change", (e) => {
          scanDraftItems[idx].unit = e.target.value;
        });
        card.querySelector('[data-action="remove"]').addEventListener("click", () => {
          scanDraftItems.splice(idx, 1);
          if (!scanDraftItems.length) scanDraftItems.push(emptyScanItem());
          renderScanItemsList(targetId);
        });
      });
    }

    function updateScanSummary() {
      const sum = document.getElementById("scanSummary");
      if (!sum) return;
      const total = scanDraftItems.length;
      const picked = scanDraftItems.filter(i => i.included && (i.name || "").trim()).length;
      sum.textContent = `${picked} of ${total} item${total === 1 ? "" : "s"} selected`;
      const btn = document.getElementById("bulkSave");
      if (btn) {
        btn.textContent = picked ? `Add ${picked} to inventory` : "Add selected to inventory";
        btn.disabled = picked === 0;
      }
    }

    async function analyzePhotoWithClaude(dataUrl, locLabel = "storage area", zoneNames = ["Top shelf","Middle shelf","Bottom shelf"]) {
      const key = (state.settings.claudeKey || "").trim();
      if (!key) throw new Error("No API key set");
      const match = dataUrl.match(/^data:(image\/[a-z]+);base64,(.+)$/);
      if (!match) throw new Error("Bad image format");
      const mediaType = match[1];
      const b64 = match[2];

      const prompt = [
        `This is a photo of ${locLabel}. Identify every food, drink, or cooking ingredient visible.`,
        "",
        "For each item return a JSON object with these fields:",
        '- "name": generic item name, lowercase (e.g. "marinara sauce", "whole milk", "cheddar cheese")',
        '- "brand": brand name if readable on the label; empty string "" if not visible',
        '- "qty": numeric quantity from the label (e.g. 32 for "32 oz"); null if unknown',
        '- "unit": unit of measure (e.g. "oz", "lb", "gal", "can", "bottle", "bag", "box"); empty string "" if unknown',
        "",
        "Rules:",
        "- Food, drink, and cooking ingredients only. Ignore containers, cookware, bags, packaging without food.",
        "- One entry per distinct product. Three apples = qty:3, unit:\"piece\".",
        "- Never guess brands or sizes you cannot read.",
        "",
        "Return ONLY a valid JSON array, no prose, no markdown. Example:",
        '[{"name":"whole milk","brand":"Horizon","qty":1,"unit":"gal"},{"name":"greek yogurt","brand":"Fage","qty":32,"unit":"oz"}]',
      ].join("\n");

      const res = await fetchWithTimeout("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 2000,
          messages: [{
            role: "user",
            content: [
              { type: "image", source: { type: "base64", media_type: mediaType, data: b64 } },
              { type: "text", text: prompt },
            ],
          }],
        }),
      });
      if (!res.ok) {
        let detail = "";
        try { const j = await res.json(); detail = j.error?.message || ""; } catch {}
        throw new Error(`Claude API ${res.status}${detail ? ": " + detail : ""}`);
      }
      const data = await res.json();
      const text = (data.content || []).map(c => c.text || "").join("\n");
      const jsonMatch = text.match(/\[[\s\S]*\]/);
      if (!jsonMatch) {
        return text.split("\n").map(l => l.replace(/^[-•*\d.)\s]+/, "").trim()).filter(Boolean)
          .map(name => ({ name, brand: "", qty: null, unit: "" }));
      }
      let parsed;
      try { parsed = JSON.parse(jsonMatch[0]); }
      catch (e) { throw new Error("Claude returned invalid JSON"); }
      if (!Array.isArray(parsed)) throw new Error("Claude didn't return a list");
      return parsed.map(p => ({
        name: String(p.name || "").trim(),
        brand: String(p.brand || "").trim(),
        qty: (p.qty == null || p.qty === "" || isNaN(Number(p.qty))) ? null : Number(p.qty),
        unit: String(p.unit || "").trim(),
      })).filter(i => i.name);
    }

    function saveScannedItems() {
      const selected = scanDraftItems.filter(i => i.included && (i.name || "").trim());
      if (!selected.length) { showToast("Check at least one item to keep"); return; }
      selected.forEach(i => {
        const name = i.name.trim();
        const brand = (i.brand || "").trim();
        const item = {
          name,
          brand,
          canonicalName: normalize(name),
          qty: i.qty,
          unit: i.unit || "",
          loc: scanTarget?.locName || "",
          zone: scanTarget?.zoneName || "",
          storageLocId: scanTarget?.locId || "",
          storageZoneId: scanTarget?.zoneId || "",
          expiry: null,
          upc: "",
        };
        state.inventory[inventoryKey(item)] = item;
      });
      saveState();
      const destination = scanTarget
        ? `${scanTarget.locIcon || "📦"} ${scanTarget.locName} › ${scanTarget.zoneName}`
        : "your inventory";
      document.getElementById("scanResult").innerHTML = `
        <div class="card empty-state" style="background:var(--green-light);">
          <span class="big">✅</span>
          Added ${selected.length} item${selected.length === 1 ? "" : "s"} to ${escapeHtml(destination)}.<br/>
          <small>Check the Inventory tab to review.</small>
        </div>`;
      haptic(15);
      renderInventory();
    }

    // ============================================================
    // COOKING MODE
    // ============================================================
    function startCookMode() {
      const r = getRecipe(openRecipeId);
      if (!r || !r.steps || !r.steps.length) { showToast("This recipe has no steps to walk through"); return; }
      cookStep = 0;
      document.getElementById("cmTitle").textContent = r.name;
      document.getElementById("cmSubtitle").textContent = `${r.time} · for ${familySize}`;
      hideModal("recipeModal");
      renderCookStep();
      document.getElementById("cookMode").classList.add("show");
    }
    function renderCookStep() {
      const r = getRecipe(openRecipeId);
      const steps = r.steps;
      const n = steps.length;
      document.getElementById("cmStepLabel").textContent = `Step ${cookStep + 1} of ${n}`;
      document.getElementById("cmStepText").textContent = steps[cookStep];
      document.getElementById("cmProgress").style.width = `${((cookStep + 1) / n) * 100}%`;
      document.getElementById("cmPrev").disabled = cookStep === 0;
      const nextBtn = document.getElementById("cmNext");
      nextBtn.textContent = cookStep === n - 1 ? "✓ Done" : "Next →";
    }
    function closeCookMode() {
      document.getElementById("cookMode").classList.remove("show");
    }

    function openDepleteModal() {
      if (!openRecipeId) return;
      const r = getRecipe(openRecipeId);
      if (!r) return;

      // Close cook mode if open
      closeCookMode();

      document.getElementById("dmTitle").textContent = `✅ Did you use these?`;
      document.getElementById("dmSub").textContent = `Cooked: ${r.name}. Uncheck anything you didn't use — we'll subtract the rest from your inventory.`;
      document.getElementById("dmDepleted").style.display = "none";

      // Build row data for each ingredient
      const scale = familySize / (r.baseServings || 4);
      const rows = r.ingredients.map(ing => {
        const trivial = isTrivialUnit(ing.unit);
        const inv = trivial ? null : findInventoryFor(ing.name);
        const scaledQty = ing.qty != null ? Math.round(ing.qty * scale * 100) / 100 : null;
        return { ing, trivial, inv, scaledQty };
      });

      document.getElementById("dmList").innerHTML = rows.map((row, i) => {
        const { ing, trivial, inv, scaledQty } = row;
        const amtText = scaledQty != null ? `${scaledQty}${ing.unit ? " " + ing.unit : ""}` : (ing.unit || "");
        const disabled = trivial || !inv;
        const checked = !disabled;

        let stockHtml = "";
        if (trivial) {
          stockHtml = `<div class="dm-stock none">Small amount — not tracked</div>`;
        } else if (!inv) {
          stockHtml = `<div class="dm-stock none">Not in your inventory</div>`;
        } else {
          const cur = inv.qty != null ? `${formatQty(inv.qty)}${inv.unit ? " " + inv.unit : ""}` : "some";
          const after = inv.qty != null ? Math.max(0, inv.qty - (scaledQty || 1)) : null;
          const afterText = after != null ? `${formatQty(after)}${inv.unit ? " " + inv.unit : ""}` : "unknown";
          const cls = after === 0 ? "out" : "has";
          const runOut = after === 0 ? " — runs out!" : "";
          stockHtml = `<div class="dm-stock ${cls}">In stock: ${cur} → ${afterText}${runOut}</div>`;
        }

        return `
          <label class="dm-row${disabled ? " skip" : ""}" data-i="${i}">
            <input type="checkbox" class="dm-cb" data-i="${i}" ${checked ? "checked" : ""} ${disabled ? "disabled" : ""} />
            <div class="dm-row-body">
              <div class="dm-ing-name">${escapeHtml(ing.name)}</div>
              <div class="dm-ing-amount">${escapeHtml(amtText)}</div>
              ${stockHtml}
            </div>
          </label>`;
      }).join("");

      // Rebuild the shopping list section whenever ingredient checkboxes change
      function updateShopSection() {
        const runningOut = rows.filter((row, i) => {
          const cb = document.querySelector(`.dm-cb[data-i="${i}"]`);
          if (!cb || !cb.checked || row.trivial || !row.inv) return false;
          const after = row.inv.qty != null ? Math.max(0, row.inv.qty - (row.scaledQty || 1)) : null;
          return after === 0;
        });
        const depEl = document.getElementById("dmDepleted");
        if (!runningOut.length) {
          depEl.style.display = "none";
          depEl.innerHTML = "";
          return;
        }
        depEl.style.display = "";
        depEl.innerHTML = `
          <div style="font-weight:600; margin-bottom:8px;">🛒 Add to shopping list?</div>
          ${runningOut.map(row => `
            <label style="display:flex; align-items:center; gap:8px; padding:4px 0; cursor:pointer;">
              <input type="checkbox" class="dm-shop-cb" data-name="${escapeHtml(row.ing.name)}"
                style="width:16px; height:16px; accent-color:var(--green); flex-shrink:0;" />
              <span style="font-size:13px;">${escapeHtml(row.ing.name)}${row.inv.brand ? ` <span style="color:var(--muted);">· ${escapeHtml(row.inv.brand)}</span>` : ""}</span>
            </label>`).join("")}
          <div style="font-size:11px; color:var(--muted); margin-top:6px;">Uncheck anything you don't need to buy again.</div>`;
      }
      updateShopSection();
      document.getElementById("dmList").querySelectorAll(".dm-cb").forEach(cb => {
        cb.addEventListener("change", updateShopSection);
      });

      showModal("depleteModal");
    }

    function applyDepletion() {
      if (!openRecipeId) return;
      const r = getRecipe(openRecipeId);
      if (!r) return;

      const scale = familySize / (r.baseServings || 4);
      const removed = [];
      const depletedItems = [];

      r.ingredients.forEach((ing, i) => {
        const cb = document.querySelector(`.dm-cb[data-i="${i}"]`);
        if (!cb || !cb.checked || isTrivialUnit(ing.unit)) return;
        const inv = findInventoryFor(ing.name);
        if (!inv) return;
        const scaledQty = ing.qty != null ? Math.round(ing.qty * scale * 100) / 100 : 1;
        removed.push({ key: inventoryKey(inv), before: { ...inv } });
        const newQty = inv.qty != null ? Math.max(0, inv.qty - scaledQty) : null;
        inv.qty = newQty;
        if (newQty === 0) depletedItems.push(inv);
      });

      // Only add items the user explicitly checked in the shopping list section
      const shopChecked = new Set(
        [...document.querySelectorAll(".dm-shop-cb:checked")].map(cb => cb.dataset.name)
      );
      const toAdd = depletedItems.filter(inv => shopChecked.has(inv.name));
      let addedCount = 0;
      toAdd.forEach(inv => {
        addToShoppingList({
          name: inv.name, brand: inv.brand || "", qty: 1,
          unit: inv.unit || "", reason: `ran out cooking ${r.name}`,
        }, { allowDupe: false });
        addedCount++;
      });

      state.history[r.id] = new Date().toISOString();
      saveState();
      hideModal("depleteModal");

      const toastMsg = addedCount
        ? `Logged ${r.name} · added ${addedCount} to shopping list`
        : `Logged ${r.name}`;
      showToast(toastMsg, "Undo", () => {
        removed.forEach(({ key, before }) => { state.inventory[key] = before; });
        delete state.history[r.id];
        toAdd.forEach(inv => {
          const idx = (state.shoppingList || []).findIndex(s =>
            !s.checked && normalize(s.name) === normalize(inv.name) && normalize(s.brand || "") === normalize(inv.brand || ""));
          if (idx >= 0) state.shoppingList.splice(idx, 1);
        });
        saveState(); renderCook(); renderInventory();
        if (typeof renderShoppingList === "function") renderShoppingList();
      });
      haptic(20);
      renderCook();
      renderInventory();
    }

    // "Just log it" — mark as cooked, skip inventory update
    function logCookedOnly() {
      if (!openRecipeId) return;
      const r = getRecipe(openRecipeId);
      if (!r) return;
      state.history[r.id] = new Date().toISOString();
      saveState();
      hideModal("depleteModal");
      showToast(`Logged ${r.name}`);
      haptic(10);
      renderCook();
    }

    // ============================================================
    // MEAL PLAN
    // ============================================================
    function renderPlan() {
      const grid = document.getElementById("planGrid");
      grid.innerHTML = DAYS.map(d => {
        const id = state.mealPlan[d];
        const r = id ? getRecipe(id) : null;
        return `
          <div class="plan-day" data-day="${d}">
            <div class="day-label">${d}</div>
            ${r ? `
              <div class="recipe-slot filled" data-action="open">
                <span class="em">${r.emoji}</span>
                <span>${r.name}</span>
              </div>
              <button class="remove-btn" data-action="remove">×</button>` :
              `<div class="recipe-slot" data-action="pick">+ add a recipe</div>`}
          </div>`;
      }).join("");
      grid.querySelectorAll(".plan-day").forEach(el => {
        el.addEventListener("click", (e) => {
          const d = el.dataset.day;
          const action = e.target.closest("[data-action]")?.dataset.action;
          if (action === "remove") {
            delete state.mealPlan[d]; saveState(); renderPlan(); haptic(5);
          } else if (action === "open") {
            openRecipe(state.mealPlan[d]);
          } else {
            openPlanPicker(d);
          }
        });
      });
    }
    function openPlanPicker(day) {
      planTargetDay = day;
      document.getElementById("pmTitle").textContent = `Pick a recipe for ${day}`;
      const picker = document.getElementById("planPicker");
      picker.innerHTML = allRecipes().map(r => `
        <div class="recipe-row" data-id="${r.id}" style="margin-bottom:6px;">
          <div class="emoji">${r.emoji}</div>
          <div class="info">
            <div class="name">${r.name}</div>
            <div class="meta">${r.time} · serves ${r.baseServings}</div>
          </div>
        </div>`).join("");
      picker.querySelectorAll(".recipe-row").forEach(row => {
        row.addEventListener("click", () => {
          state.mealPlan[planTargetDay] = row.dataset.id;
          saveState(); hideModal("planModal"); renderPlan();
          showToast(`Added ${getRecipe(row.dataset.id).name} to ${planTargetDay}`);
          haptic(10);
        });
      });
      showModal("planModal");
    }
    function planShoppingList() {
      const missing = {};
      Object.values(state.mealPlan).forEach(id => {
        const r = getRecipe(id);
        if (!r) return;
        r.ingredients.forEach(i => {
          if (!hasIngredient(i.name)) {
            const k = normalize(i.name);
            if (!missing[k]) missing[k] = { name: i.name, qty: 0, unit: i.unit };
            missing[k].qty += (i.qty || 1);
          }
        });
      });
      const items = Object.values(missing);
      if (!items.length) { showToast("Your meal plan is fully stocked — nothing missing!"); return; }
      startCart(items, "plan", "Shopping list from plan");
    }

    // ============================================================
    // ASSISTANT (chat + auto-plan)
    // ============================================================
    function buildAssistantContext() {
      const p = state.settings.prefs || {};
      const inv = Object.values(state.inventory).map(i => {
        return `- ${i.name}${i.qty ? ` (${i.qty}${i.unit ? " " + i.unit : ""})` : ""}${i.expiry ? ` exp:${i.expiry}` : ""}`;
      }).join("\n") || "(empty)";

      const recipes = RECIPES.concat(state.customRecipes || []).map(r =>
        `- ${r.id}: ${r.name} (${r.cuisine || "—"}, ${r.mealType || "—"}, ${r.time}, serves ${r.baseServings})`
      ).join("\n");

      const plan = DAYS.map(d => `${d}: ${state.mealPlan[d] ? getRecipe(state.mealPlan[d])?.name || "—" : "empty"}`).join("\n");

      const favorites = (state.favorites || []).map(id => getRecipe(id)?.name).filter(Boolean).join(", ") || "none";

      const recentHistory = Object.entries(state.history || {})
        .sort((a, b) => b[1].localeCompare(a[1]))
        .slice(0, 5)
        .map(([id, date]) => `${getRecipe(id)?.name || id} (${date.slice(0, 10)})`)
        .join(", ") || "none";

      return `You are Ryan's kitchen assistant. Keep responses concise (under 120 words unless asked for detail). Be warm and direct.

FAMILY PREFERENCES
Family size default: ${state.settings.familyDefault}
Allergies: ${p.allergies || "none"}
Dietary: ${p.dietary || "none"}
Loved cuisines: ${p.likedCuisines || "any"}
Disliked foods: ${p.dislikedFoods || "none"}
Notes: ${p.familyNotes || "(none)"}

CURRENT INVENTORY
${inv}

FAVORITES: ${favorites}
RECENTLY COOKED: ${recentHistory}

CURRENT MEAL PLAN
${plan}

RECIPE LIBRARY (IDs you can reference)
${recipes}

When suggesting recipes, prefer ones that use ingredients already in inventory. When the user asks to plan a week, respond ONLY with a JSON object of this exact shape (no other text): {"plan": {"Mon": "recipe_id", "Tue": "recipe_id", ...}}. For all other requests, respond in natural conversational language.`;
    }

    async function callAssistant(userMessage, opts = {}) {
      const key = (state.settings.claudeKey || "").trim();
      if (!key) throw new Error("Set your Claude API key in Settings first");

      const system = buildAssistantContext();
      const messages = (state.chatHistory || []).slice(-10).map(m => ({ role: m.role, content: m.content }));
      messages.push({ role: "user", content: userMessage });

      const res = await fetchWithTimeout("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": key,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: opts.model || "claude-sonnet-4-6",
          max_tokens: opts.maxTokens || 800,
          system,
          messages,
        }),
      });
      if (!res.ok) {
        let detail = "";
        try { const j = await res.json(); detail = j.error?.message || ""; } catch {}
        throw new Error(`Claude API ${res.status}${detail ? ": " + detail : ""}`);
      }
      const data = await res.json();
      return (data.content || []).map(c => c.text || "").join("\n").trim();
    }

    function renderChat() {
      const container = document.getElementById("chatMessages");
      const history = state.chatHistory || [];
      if (!history.length) {
        container.innerHTML = `<div class="empty-state" style="padding:24px 12px;"><span class="big">💬</span><p style="margin:8px 0 0; font-size:13px;">Ask me anything about your kitchen — what to cook, what to buy, how to plan.</p></div>`;
        return;
      }
      container.innerHTML = history.map(m => {
        const cls = m.role === "user" ? "user" : "assistant";
        return `<div class="chat-msg ${cls}">${escapeHtml(m.content)}</div>`;
      }).join("");
      container.scrollTop = container.scrollHeight;
    }

    function escapeHtml(s) {
      return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
    }

    async function sendChat(text) {
      if (!text || !text.trim()) return;
      const msg = text.trim();
      state.chatHistory.push({ role: "user", content: msg, ts: new Date().toISOString() });
      saveState();
      renderChat();

      // Show typing indicator
      const container = document.getElementById("chatMessages");
      const typing = document.createElement("div");
      typing.className = "chat-msg assistant typing";
      typing.textContent = "Thinking…";
      container.appendChild(typing);
      container.scrollTop = container.scrollHeight;

      try {
        const reply = await callAssistant(msg);
        state.chatHistory.push({ role: "assistant", content: reply, ts: new Date().toISOString() });
        saveState();
        renderChat();
        haptic(10);
      } catch (err) {
        typing.remove();
        state.chatHistory.push({ role: "assistant", content: `⚠️ ${apiError(err)}`, ts: new Date().toISOString() });
        saveState();
        renderChat();
      }
    }

    async function autoPlanWeek() {
      const key = (state.settings.claudeKey || "").trim();
      if (!key) { showToast("Add your Claude API key in Settings first"); setView("settings"); return; }
      const btn = document.getElementById("autoPlanWeek");
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = "✨ Planning…";
      try {
        const reply = await callAssistant(
          "Plan my full week of dinners. Return ONLY the JSON object, no other text. Use recipe IDs from the library. Favor recipes whose ingredients I already have. Avoid repeats unless I have lots of leftover ingredients. Include variety across cuisines. The JSON shape is: {\"plan\": {\"Mon\":\"id\",\"Tue\":\"id\",\"Wed\":\"id\",\"Thu\":\"id\",\"Fri\":\"id\",\"Sat\":\"id\",\"Sun\":\"id\"}}",
          { maxTokens: 400 }
        );
        // Try to extract JSON
        const jsonMatch = reply.match(/\{[\s\S]*\}/);
        if (!jsonMatch) throw new Error("Couldn't parse plan");
        const parsed = JSON.parse(jsonMatch[0]);
        const plan = parsed.plan || parsed;
        let applied = 0;
        DAYS.forEach(d => {
          const id = plan[d];
          if (id && getRecipe(id)) {
            state.mealPlan[d] = id;
            applied++;
          }
        });
        saveState();
        renderPlan();
        showToast(`✨ Planned ${applied} meal${applied === 1 ? "" : "s"}`);
        haptic(20);
      } catch (err) {
        showToast(`Auto-plan failed: ${apiError(err)}`);
      } finally {
        btn.disabled = false;
        btn.textContent = original;
      }
    }

    // ============================================================
    // CUSTOM RECIPE
    // ============================================================
    function openCustom() {
      document.getElementById("crName").value = "";
      document.getElementById("crEmoji").value = "🍽️";
      document.getElementById("crServes").value = "4";
      document.getElementById("crTime").value = "";
      document.getElementById("crIngs").value = "";
      document.getElementById("crSteps").value = "";
      showModal("customModal");
    }
    function saveCustom() {
      const name = document.getElementById("crName").value.trim();
      if (!name) { document.getElementById("crName").focus(); showToast("Enter a recipe name first"); return; }
      const emoji = document.getElementById("crEmoji").value.trim() || "🍽️";
      const servesStr = document.getElementById("crServes").value;
      const time = document.getElementById("crTime").value.trim() || "—";
      const ingLines = document.getElementById("crIngs").value.split("\n").map(l => l.trim()).filter(Boolean);
      const steps = document.getElementById("crSteps").value.split("\n").map(l => l.trim()).filter(Boolean);
      const ingredients = ingLines.map(line => {
        // parse "1 lb ground beef" or "2 eggs"
        const m = line.match(/^(\d+(?:[./]\d+)?(?:\.\d+)?)\s+([a-zA-Z]+)?\s*(.+)$/);
        if (m) {
          let q = m[1];
          if (q.includes("/")) { const [a,b] = q.split("/"); q = Number(a)/Number(b); }
          else q = Number(q);
          const possibleUnit = (m[2] || "").toLowerCase();
          const units = ["lb","oz","g","kg","cup","cups","tbsp","tsp","bunch","piece","head","packet","can","bottle","jar","bag","slices","large"];
          if (units.includes(possibleUnit)) {
            return { name: m[3].trim(), qty: q, unit: possibleUnit };
          } else {
            return { name: ((m[2] || "") + " " + m[3]).trim(), qty: q, unit: "" };
          }
        }
        return { name: line, qty: 1, unit: "" };
      });
      const id = "custom-" + Date.now();
      const recipe = {
        id, name, emoji,
        baseServings: Number(servesStr) || 4,
        time,
        cuisine: "custom", mealType: "dinner", difficulty: "medium",
        tags: ["custom"],
        ingredients, steps,
        custom: true
      };
      state.customRecipes.push(recipe);
      saveState(); hideModal("customModal");
      setView("cook");
      showToast(`Added ${name}`);
      haptic(15);
    }

    // ============================================================
    // MODALS
    // ============================================================
    function showModal(id) { document.getElementById(id).classList.add("show"); haptic(5); }
    function hideModal(id) { document.getElementById(id).classList.remove("show"); }

    // ============================================================
    // SETTINGS
    // ============================================================
    function openSettings() {
      const p = state.settings.prefs || {};
      document.getElementById("setTheme").value = state.settings.theme;
      document.getElementById("setHaptic").checked = !!state.settings.haptic;
      document.getElementById("setNotif").checked = !!state.settings.expiryNotifications;
      updateNotifToggleUI();
      document.getElementById("setFamily").value = state.settings.familyDefault;
      document.getElementById("setLowStock").value = state.settings.lowStockThreshold;
      document.getElementById("setClaudeKey").value = state.settings.claudeKey || "";
      document.getElementById("claudeKeyStatus").textContent = state.settings.claudeKey ? "Key saved in this browser." : "";
      document.getElementById("setAnyListEmail").value = state.settings.anyListEmail || "";
      document.getElementById("prefAllergies").value = p.allergies || "";
      document.getElementById("prefDietary").value = p.dietary || "";
      document.getElementById("prefLikedCuisines").value = p.likedCuisines || "";
      document.getElementById("prefDislikedFoods").value = p.dislikedFoods || "";
      document.getElementById("prefFamilyNotes").value = p.familyNotes || "";
      showModal("settingsModal");
    }
    function wireSettings() {
      document.getElementById("setTheme").addEventListener("change", e => {
        state.settings.theme = e.target.value; saveState(); applyTheme();
      });
      document.getElementById("setHaptic").addEventListener("change", e => {
        state.settings.haptic = e.target.checked; saveState();
      });
      document.getElementById("setNotif").checked = !!state.settings.expiryNotifications;
      document.getElementById("setNotif").addEventListener("change", async e => {
        if (e.target.checked) {
          const perm = await requestNotifPermission();
          if (perm === "granted") {
            state.settings.expiryNotifications = true;
            saveState();
            showToast("Expiry alerts on — you'll be notified when items are about to expire");
            updateNotifToggleUI();
          } else if (perm === "denied") {
            e.target.checked = false;
            showToast("Notifications blocked — allow them in your browser settings");
            updateNotifToggleUI();
          } else {
            e.target.checked = false;
          }
        } else {
          state.settings.expiryNotifications = false;
          saveState();
          updateNotifToggleUI();
        }
      });
      document.getElementById("setFamily").addEventListener("input", e => {
        state.settings.familyDefault = Number(e.target.value) || 4; saveState();
      });
      document.getElementById("setLowStock").addEventListener("input", e => {
        state.settings.lowStockThreshold = Number(e.target.value) || 1; saveState(); renderInventory();
      });
      document.getElementById("setClaudeKey").addEventListener("change", e => {
        state.settings.claudeKey = e.target.value.trim();
        saveState();
        document.getElementById("claudeKeyStatus").textContent = state.settings.claudeKey ? "Key saved in this browser." : "";
      });
      document.getElementById("setAnyListEmail").addEventListener("change", e => {
        state.settings.anyListEmail = e.target.value.trim();
        saveState();
      });
      document.getElementById("testClaudeKey").addEventListener("click", async () => {
        const k = document.getElementById("setClaudeKey").value.trim();
        const status = document.getElementById("claudeKeyStatus");
        if (!k) { status.textContent = "Enter a key first."; return; }
        state.settings.claudeKey = k; saveState();
        status.textContent = "Testing…";
        try {
          const res = await fetchWithTimeout("https://api.anthropic.com/v1/messages", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              "x-api-key": k,
              "anthropic-version": "2023-06-01",
              "anthropic-dangerous-direct-browser-access": "true",
            },
            body: JSON.stringify({
              model: "claude-haiku-4-5-20251001",
              max_tokens: 10,
              messages: [{ role: "user", content: "Say OK" }],
            }),
          });
          if (res.ok) { status.textContent = "✅ Key works!"; haptic(10); }
          else {
            let msg = `HTTP ${res.status}`;
            try { const j = await res.json(); if (j.error?.message) msg = j.error.message; } catch {}
            status.textContent = `❌ ${msg}`;
          }
        } catch (err) {
          status.textContent = `❌ ${apiError(err)}`;
        }
      });
      document.getElementById("clearClaudeKey").addEventListener("click", () => {
        state.settings.claudeKey = "";
        document.getElementById("setClaudeKey").value = "";
        document.getElementById("claudeKeyStatus").textContent = "Key cleared.";
        saveState();
      });
      // Preferences — save on blur for natural UX
      const prefFields = [
        ["prefAllergies", "allergies"],
        ["prefDietary", "dietary"],
        ["prefLikedCuisines", "likedCuisines"],
        ["prefDislikedFoods", "dislikedFoods"],
        ["prefFamilyNotes", "familyNotes"],
      ];
      prefFields.forEach(([id, key]) => {
        document.getElementById(id).addEventListener("input", e => {
          state.settings.prefs = state.settings.prefs || {};
          state.settings.prefs[key] = e.target.value;
          saveState();
        });
      });
      document.getElementById("exportBtn").addEventListener("click", exportData);
      document.getElementById("loadDemoBtn").addEventListener("click", loadDemoData);
      document.getElementById("importBtn").addEventListener("click", () => document.getElementById("importFile").click());
      document.getElementById("importFile").addEventListener("change", importData);
      document.getElementById("resetBtn").addEventListener("click", () => {
        if (confirm("Reset everything? This clears inventory, plan, favorites, and custom recipes.")) {
          state = defaultState(); saveState(); applyTheme(); renderCook(); renderInventory(); renderPlan();
          hideModal("settingsModal"); showToast("Reset complete");
        }
      });
    }
    function exportData() {
      const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `my-kitchen-backup-${new Date().toISOString().slice(0,10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      showToast("Backup downloaded");
    }
    // Lookup a product image from Open Food Facts by name + optional brand.
    // Free, no API key. Returns image URL or null.
    // Look up a product image from Open Food Facts.
    // Prefers UPC/barcode lookup (exact match) when available; falls back to text search.
    async function lookupProductImage(name, brand, upc) {
      // 1) Try direct barcode lookup — most accurate, traceable to a single SKU.
      if (upc) {
        try {
          const code = String(upc).replace(/\D/g, "");
          if (code) {
            const url = `https://world.openfoodfacts.org/api/v2/product/${code}.json?fields=image_front_url,image_url,image_small_url,product_name,brands`;
            const res = await fetchWithTimeout(url, {}, 10000);
            if (res.ok) {
              const data = await res.json();
              const p = data && data.product;
              const img = p && (p.image_front_url || p.image_url || p.image_small_url);
              if (img) return img;
            }
          }
        } catch (e) { /* fall through to text search */ }
      }
      // 2) Fall back to text search by brand + name.
      try {
        const q = [brand, name].filter(Boolean).join(" ").trim();
        if (!q) return null;
        const url = `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(q)}&search_simple=1&action=process&json=1&page_size=5&fields=image_front_url,image_url,image_small_url,product_name`;
        const res = await fetchWithTimeout(url, {}, 10000);
        if (!res.ok) return null;
        const data = await res.json();
        const products = (data && data.products) || [];
        for (const p of products) {
          const img = p.image_front_url || p.image_url || p.image_small_url;
          if (img) return img;
        }
        return null;
      } catch (e) {
        return null;
      }
    }

    // Fetch images for any inventory items that don't have one yet.
    // Throttled to avoid hammering OFF (1 per 200ms). Runs quietly in the background.
    let _fetchingImages = false;
    async function fillMissingProductImages(opts = {}) {
      if (_fetchingImages) return; // single-flight guard
      _fetchingImages = true;
      try {
        const items = Object.entries(state.inventory).filter(([k, v]) => !v.image && !v._imageTried);
        if (!items.length) return;
        let updated = 0;
        for (const [k, item] of items) {
          const img = await lookupProductImage(item.name, item.brand, item.upc);
          if (img) {
            item.image = img;
            updated++;
          } else {
            // Mark so we don't retry every state save. Will retry on next page load.
            item._imageTried = true;
          }
          await new Promise(r => setTimeout(r, 200));
        }
        if (updated) {
          // Bypass scheduleAutoFetchPhotos to avoid recursion
          try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
          if (typeof renderInventory === "function") renderInventory();
          if (opts.verbose) showToast(`Loaded ${updated} product photo${updated === 1 ? "" : "s"}`);
        }
      } finally {
        _fetchingImages = false;
      }
    }

    function loadDemoData() {
      if (!confirm("Load demo inventory + shopping list? This adds sample items but won't delete existing ones.")) return;
      const today = new Date();
      const addDays = (d) => { const x = new Date(today); x.setDate(x.getDate() + d); return x.toISOString().slice(0,10); };
      // Traceable demo SKUs — real US grocery products with UPC/EAN barcodes.
      // UPCs let us pull exact product images from Open Food Facts and, eventually,
      // map directly to Instacart catalog items via barcode rather than fuzzy text search.
      const demoInventory = [
        { name: "Pasture-Raised Large Eggs",          brand: "Vital Farms",            size: "12 ct",   upc: "861745000107", qty: 12, unit: "",       loc: "fridge",  expiry: addDays(14) },
        { name: "Organic Whole Milk",                 brand: "Horizon Organic",        size: "1 gal",   upc: "742365015229", qty: 1,  unit: "gal",    loc: "fridge",  expiry: addDays(7)  },
        { name: "Sourdough Round",                    brand: "Boudin Bakery",          size: "1 lb",    upc: "073272000017", qty: 1,  unit: "loaf",   loc: "pantry",  expiry: addDays(4)  },
        { name: "Total 0% Greek Yogurt",              brand: "Fage",                   size: "32 oz",   upc: "689544100066", qty: 0,  unit: "tub",    loc: "fridge",  expiry: null         },
        { name: "Boneless Skinless Chicken Thighs",   brand: "Foster Farms",           size: "1 lb",    upc: "041222141004", qty: 1,  unit: "lb",     loc: "freezer", expiry: addDays(60)  },
        { name: "Spaghetti No. 5",                    brand: "Barilla",                size: "1 lb",    upc: "076808280418", qty: 2,  unit: "box",    loc: "pantry",  expiry: null         },
        { name: "Extra Virgin Olive Oil",             brand: "California Olive Ranch", size: "16.9 oz", upc: "850687000124", qty: 1,  unit: "bottle", loc: "pantry",  expiry: null         },
        { name: "Yellow Onion",                       brand: "",                       size: "1 ct",    upc: "",             qty: 3,  unit: "",       loc: "pantry",  expiry: null         },
        { name: "Garlic Bulb",                        brand: "",                       size: "1 ct",    upc: "",             qty: 1,  unit: "head",   loc: "pantry",  expiry: null         },
        { name: "Parmigiano Reggiano Wedge",          brand: "BelGioioso",             size: "8 oz",    upc: "031142000146", qty: 1,  unit: "wedge",  loc: "fridge",  expiry: addDays(30)  },
        { name: "Bananas",                            brand: "Chiquita",               size: "1 ct",    upc: "4011",         qty: 5,  unit: "",       loc: "counter", expiry: addDays(5)   },
        { name: "Hass Avocado",                       brand: "",                       size: "1 ct",    upc: "4046",         qty: 0,  unit: "",       loc: "counter", expiry: null         },
        { name: "Pure Irish Salted Butter",           brand: "Kerrygold",              size: "8 oz",    upc: "767707000113", qty: 1,  unit: "block",  loc: "fridge",  expiry: addDays(45)  },
        { name: "Tomato Ketchup",                     brand: "Heinz",                  size: "32 oz",   upc: "013000006101", qty: 1,  unit: "bottle", loc: "fridge",  expiry: null         },
        { name: "Original Cheerios",                  brand: "General Mills",          size: "18 oz",   upc: "016000275249", qty: 1,  unit: "box",    loc: "pantry",  expiry: addDays(180) },
      ];
      let invAdded = 0;
      demoInventory.forEach(d => {
        const item = { ...d, canonicalName: normalize(d.name) };
        const key = inventoryKey(item);
        if (!state.inventory[key]) { state.inventory[key] = item; invAdded++; }
      });
      const demoShop = [
        { name: "85% Lean Ground Beef",            brand: "",                size: "1 lb",       upc: "",             qty: 1, unit: "lb",     reason: "manual" },
        { name: "Crushed Tomatoes",                brand: "Cento San Marzano", size: "28 oz",   upc: "070796400025", qty: 1, unit: "can",    reason: "manual" },
        { name: "Fresh Basil",                     brand: "",                size: "0.66 oz",    upc: "",             qty: 1, unit: "bunch",  reason: "manual" },
        { name: "Lemons",                          brand: "",                size: "1 ct",       upc: "4053",         qty: 4, unit: "",       reason: "manual" },
        { name: "Cold Brew Coffee Concentrate",    brand: "Stumptown",       size: "32 oz",      upc: "855661004161", qty: 1, unit: "bottle", reason: "manual" },
      ];
      let shopAdded = 0;
      demoShop.forEach(d => {
        if (!shoppingListMatch(d.name, d.brand)) { addToShoppingList(d); shopAdded++; }
      });
      saveState();
      if (typeof renderInventory === "function") renderInventory();
      if (typeof renderShoppingList === "function") renderShoppingList();
      showToast(`Demo loaded: +${invAdded} inventory, +${shopAdded} shopping list. Fetching photos…`);
      // Kick off async product-image fetch from Open Food Facts
      fillMissingProductImages();
    }

    function importData(e) {
      const f = e.target.files[0];
      if (!f) return;
      const reader = new FileReader();
      reader.onload = () => {
        try {
          const parsed = JSON.parse(reader.result);
          const d = defaultState();
          state = { ...d, ...parsed, settings: { ...d.settings, ...(parsed.settings || {}) } };
          saveState(); applyTheme(); renderCook(); renderInventory(); renderPlan();
          showToast("Import complete");
        } catch (err) {
          showToast("Couldn't read that file — is it a valid Kitchen export?");
        }
      };
      reader.readAsText(f);
      e.target.value = "";
    }

    // ============================================================
    // ============================================================
    // ONBOARDING — 3-step actionable setup
    // ============================================================
    const ONBOARD_SCREENS = [
      {
        emoji: "🍳",
        title: "Welcome to My Kitchen",
        bodyHtml: `<p>Track what's in your fridge and pantry, see what you can cook tonight, and never wonder what's for dinner.</p>
          <div class="onboard-steps">
            <div class="onboard-step"><div class="onboard-step-num">1</div><div class="onboard-step-text"><strong>Map your storage</strong>Add your fridge, pantry, and freezer so items have a home.</div></div>
            <div class="onboard-step"><div class="onboard-step-num">2</div><div class="onboard-step-text"><strong>Scan your items</strong>Barcode scan a shelf in about 60 seconds.</div></div>
            <div class="onboard-step"><div class="onboard-step-num">3</div><div class="onboard-step-text"><strong>See what you can cook</strong>The app matches your inventory to recipes automatically.</div></div>
          </div>`,
        actionLabel: "Let's set up my kitchen →",
        actionFn: null, // advances to step 2
        skipLabel: "Skip setup",
      },
      {
        emoji: "🏗️",
        title: "Add your storage spaces",
        bodyHtml: `<p>Tell us what you have — fridge, pantry, freezer, counter. We'll map the shelves and zones so every item has a specific home.</p>
          <p style="font-size:12px; color:var(--green); font-weight:600;">Tap the button below to add your first storage space.</p>`,
        actionLabel: "🏗️ Add storage space",
        actionFn: () => { openBuildStorageModal(); },
        skipLabel: "Skip →",
      },
      {
        emoji: "📷",
        title: "Scan your first items",
        bodyHtml: `<p>Point your camera at any barcode to add it instantly. You can scan an entire shelf at once — the app looks up each item automatically.</p>
          <p style="font-size:12px; color:var(--muted);">No barcodes handy? Type items manually on the Inventory tab.</p>`,
        actionLabel: "📷 Open scanner",
        actionFn: () => { setView("scan"); document.getElementById("scanBarcodeBtn")?.click(); },
        skipLabel: "Done →",
      },
    ];

    function renderOnboard() {
      const s = ONBOARD_SCREENS[onboardStep];
      document.getElementById("obEmoji").textContent = s.emoji;
      document.getElementById("obTitle").textContent = s.title;
      document.getElementById("obBody").innerHTML = s.bodyHtml;
      document.getElementById("obSkip").textContent = s.skipLabel || "Skip";

      const actionBtn = document.getElementById("obAction");
      if (s.actionLabel) {
        actionBtn.textContent = s.actionLabel;
        actionBtn.style.display = "";
        actionBtn.onclick = () => {
          if (s.actionFn) {
            document.getElementById("onboard").classList.remove("show");
            s.actionFn();
            // If it's the last step, finish. Otherwise store progress.
            if (onboardStep === ONBOARD_SCREENS.length - 1) {
              finishOnboard();
            } else {
              // Advance so next time onboard shows it's on the next step
              onboardStep++;
              state.settings.onboardStep = onboardStep;
              saveState();
            }
          } else {
            // No actionFn — just advance
            onboardStep++;
            renderOnboard();
          }
        };
      } else {
        actionBtn.style.display = "none";
      }

      // "Skip →" advances one step (or finishes on last)
      document.getElementById("obNext").textContent = onboardStep === ONBOARD_SCREENS.length - 1 ? "Done" : "Skip →";

      const dots = document.querySelectorAll(".onboard-dots span");
      dots.forEach((d, i) => d.classList.toggle("active", i === onboardStep));
    }

    function finishOnboard() {
      state.settings.hasOnboarded = true;
      state.settings.onboardStep = ONBOARD_SCREENS.length;
      saveState();
      document.getElementById("onboard").classList.remove("show");
    }

    // Resume onboard mid-flow (e.g. user did storage setup, now see step 3 on next open)
    function maybeResumeOnboard() {
      if (state.settings.hasOnboarded) return;
      const savedStep = state.settings.onboardStep || 0;
      // If they've already added storage, skip the storage step
      const hasLayout = getStorageLayout().length > 0;
      onboardStep = savedStep;
      if (hasLayout && onboardStep === 1) onboardStep = 2;
      renderOnboard();
      document.getElementById("onboard").classList.add("show");
    }

    // ============================================================
    // PUSH NOTIFICATIONS — expiry alerts
    // ============================================================
    const NOTIF_CHECK_KEY = "kitchenLastNotifCheck";

    function notifSupported() {
      return "Notification" in window && "serviceWorker" in navigator;
    }

    async function requestNotifPermission() {
      if (!notifSupported()) return "unsupported";
      if (Notification.permission === "granted") return "granted";
      if (Notification.permission === "denied") return "denied";
      const result = await Notification.requestPermission();
      return result;
    }

    async function checkExpiryNotifications() {
      if (!state.settings.expiryNotifications) return;
      if (!notifSupported() || Notification.permission !== "granted") return;

      // Only check once per 20 hours (prevents spam on every page load)
      const last = parseInt(localStorage.getItem(NOTIF_CHECK_KEY) || "0", 10);
      if (Date.now() - last < 20 * 60 * 60 * 1000) return;
      localStorage.setItem(NOTIF_CHECK_KEY, String(Date.now()));

      const now = Date.now();
      const soon = [];

      Object.values(state.inventory || {}).forEach(item => {
        if (!item.expiry || item.qty === 0) return;
        const exp = new Date(item.expiry).getTime();
        const daysLeft = Math.ceil((exp - now) / (24 * 60 * 60 * 1000));
        if (daysLeft < 0) {
          soon.push({ name: item.name, daysLeft, label: "expired" });
        } else if (daysLeft === 0) {
          soon.push({ name: item.name, daysLeft, label: "expires today" });
        } else if (daysLeft === 1) {
          soon.push({ name: item.name, daysLeft, label: "expires tomorrow" });
        } else if (daysLeft <= 3) {
          soon.push({ name: item.name, daysLeft, label: `expires in ${daysLeft} days` });
        }
      });

      if (!soon.length) return;

      // Sort by urgency
      soon.sort((a, b) => a.daysLeft - b.daysLeft);

      const sw = await navigator.serviceWorker.ready.catch(() => null);
      if (!sw) return;

      if (soon.length === 1) {
        sw.showNotification("🥛 My Kitchen — Expiry Alert", {
          body: `${soon[0].name} ${soon[0].label}`,
          icon: "/kitchen/icon.svg",
          badge: "/kitchen/icon.svg",
          tag: "kitchen-expiry",
          data: { url: "/kitchen/" },
        });
      } else {
        const top = soon.slice(0, 3).map(i => `${i.name} (${i.label})`).join(", ");
        const more = soon.length > 3 ? ` and ${soon.length - 3} more` : "";
        sw.showNotification(`🧊 My Kitchen — ${soon.length} items expiring`, {
          body: top + more,
          icon: "/kitchen/icon.svg",
          badge: "/kitchen/icon.svg",
          tag: "kitchen-expiry",
          data: { url: "/kitchen/" },
        });
      }
    }

    function updateNotifToggleUI() {
      const sub = document.getElementById("notifSub");
      if (!sub) return;
      if (!notifSupported()) {
        sub.textContent = "Not supported in this browser";
        document.getElementById("setNotif").disabled = true;
        return;
      }
      const perm = Notification.permission;
      if (perm === "denied") {
        sub.textContent = "Blocked — allow notifications in browser settings";
        document.getElementById("setNotif").disabled = true;
      } else if (perm === "granted" && state.settings.expiryNotifications) {
        sub.textContent = "Alerts when items expire in ≤ 3 days";
      } else {
        sub.textContent = "Alert me when items are about to expire";
      }
    }

    // ============================================================
    // EVENT WIRING
    // ============================================================
    document.querySelectorAll(".tab-btn").forEach(btn => {
      btn.addEventListener("click", () => setView(btn.dataset.view));
    });
    document.getElementById("fab").addEventListener("click", () => {
      if (currentView === "inventory") openItem(null);
      else if (currentView === "cook") openCustom();
    });
    document.getElementById("openSettingsBtn").addEventListener("click", openSettings);
    document.getElementById("openShoppingListBtn").addEventListener("click", openShoppingList);
    document.getElementById("shopAddBtn").addEventListener("click", handleShopManualAdd);
    document.getElementById("shopAddName").addEventListener("keydown", (e) => { if (e.key === "Enter") handleShopManualAdd(); });
    document.getElementById("shopToCart").addEventListener("click", sendShoppingListToCart);
    document.getElementById("shopToAnyList").addEventListener("click", sendShoppingListToAnyList);
    document.getElementById("shopFromInventory").addEventListener("click", restockFromInventory);
    document.getElementById("shopGotAll").addEventListener("click", gotAllShoppingItems);
    document.getElementById("shopClearChecked").addEventListener("click", clearCheckedShopItems);

    document.querySelectorAll("[data-close]").forEach(b => b.addEventListener("click", () => hideModal(b.dataset.close)));
    document.querySelectorAll(".modal-backdrop").forEach(m => {
      m.addEventListener("click", (e) => { if (e.target === m) hideModal(m.id); });
    });

    // Search
    document.getElementById("searchInput").addEventListener("input", (e) => {
      searchQuery = e.target.value;
      renderCook();
    });

    // Recipe modal
    document.getElementById("plusBtn").addEventListener("click", () => {
      if (familySize < 12) { familySize++; renderFamily(); renderRecipeIngredients(); haptic(5); }
    });
    document.getElementById("minusBtn").addEventListener("click", () => {
      if (familySize > 1) { familySize--; renderFamily(); renderRecipeIngredients(); haptic(5); }
    });
    document.getElementById("rmFavBtn").addEventListener("click", () => {
      toggleFav(openRecipeId);
      const btn = document.getElementById("rmFavBtn");
      const on = state.favorites.includes(openRecipeId);
      btn.textContent = on ? "★" : "☆";
      btn.style.color = on ? "#f4b400" : "var(--muted2)";
    });
    document.getElementById("rmShopMissing").addEventListener("click", () => {
      const r = getRecipe(openRecipeId);
      const items = scaledFor(r).filter(i => !i.have);
      if (items.length === 0) { showToast("You already have everything for this recipe!"); return; }
      hideModal("recipeModal");
      startCart(items, "recipe", `Shopping for ${r.name}`);
    });
    document.getElementById("rmShopAll").addEventListener("click", () => {
      const r = getRecipe(openRecipeId);
      hideModal("recipeModal");
      startCart(scaledFor(r), "recipe", `Shopping for ${r.name}`);
    });
    document.getElementById("rmStartCook").addEventListener("click", startCookMode);
    document.getElementById("rmCookedIt").addEventListener("click", () => {
      hideModal("recipeModal");
      openDepleteModal();
    });
    document.getElementById("rmAddToPlan").addEventListener("click", () => {
      hideModal("recipeModal");
      setView("plan");
      showToast("Tap any day to place this recipe");
    });

    // Cooking mode
    document.getElementById("cmPrev").addEventListener("click", () => {
      if (cookStep > 0) { cookStep--; renderCookStep(); haptic(5); }
    });
    document.getElementById("cmNext").addEventListener("click", () => {
      const r = getRecipe(openRecipeId);
      if (!r) return;
      if (cookStep < r.steps.length - 1) {
        cookStep++; renderCookStep(); haptic(5);
      } else {
        // Last step — show depletion review (closeCookMode is called inside openDepleteModal)
        openDepleteModal();
      }
    });
    document.getElementById("cmClose").addEventListener("click", closeCookMode);

    // Cart
    document.getElementById("goToCart").addEventListener("click", () => {
      window.open("https://www.instacart.com/store/checkout_v3", "_blank");
    });
    document.getElementById("copyList").addEventListener("click", async () => {
      const text = buildShoppingListText();
      try { await navigator.clipboard.writeText(text); showToast("List copied"); }
      catch (e) { alert(text); }
    });

    // Build a nicely formatted plaintext shopping list (used by multiple handlers)
    function buildShoppingListText() {
      return checklistItems.map(i => {
        const q = i.scaledQty != null ? formatQty(i.scaledQty) : (i.qty != null ? formatQty(i.qty) : "");
        return `• ${q ? q + " " : ""}${i.unit ? i.unit + " " : ""}${i.name}`.trim();
      }).join("\n");
    }

    // Order via Claude in Chrome: opens claude.ai with a prompt pre-loaded,
    // instructing Claude to drive Instacart and add every item to the cart.
    // Relies on the user having Claude in Chrome (the browser-automation
    // extension) installed and signed in.
    document.getElementById("orderViaClaudeChrome").addEventListener("click", () => {
      if (!checklistItems.length) { showToast("Nothing on the list"); return; }
      const listText = buildShoppingListText();
      const prompt = [
        "Please open Instacart (instacart.com), pick a store near me, and add every item below to my cart.",
        "",
        "Use my default store/address if one is set. Use the closest match for each item name (generic brands are fine unless I've specified).",
        "",
        "SHOPPING LIST:",
        listText,
        "",
        "When you've finished adding everything, stop at the cart/checkout page so I can review and pay myself. Do NOT place the order or enter payment info."
      ].join("\n");
      const url = "https://claude.ai/new?q=" + encodeURIComponent(prompt);
      window.open(url, "_blank", "noopener");
      showToast("Opening Claude — make sure Claude in Chrome is installed");
    });

    // Order via Amazon Fresh: opens a search tab on Amazon Fresh per item.
    // Amazon's public cart-add URL requires ASINs, which we don't know, so
    // this is the next-best thing — pre-filtered search in the Fresh store
    // with one click to "Add to cart" for each result.
    document.getElementById("orderViaAmazon").addEventListener("click", async () => {
      if (!checklistItems.length) { showToast("Nothing on the list"); return; }
      // Also copy the list so the user has it handy to paste into the main search box if they prefer.
      try { await navigator.clipboard.writeText(buildShoppingListText()); } catch (e) {}
      const amazonFreshNode = "133140011"; // Amazon Fresh dept
      const urls = checklistItems.map(i =>
        "https://www.amazon.com/s?k=" + encodeURIComponent(i.name) +
        "&rh=n%3A" + amazonFreshNode + "&i=amazonfresh"
      );
      // Open the first immediately (allowed), then stagger the rest so
      // pop-up blockers are less likely to kill them.
      let openedFirst = false;
      urls.forEach((u, idx) => {
        setTimeout(() => {
          const w = window.open(u, "_blank", "noopener");
          if (!w && !openedFirst) {
            showToast("Pop-ups blocked — allow pop-ups for this site and try again");
          }
          openedFirst = true;
        }, idx * 350);
      });
      showToast(`Opening ${urls.length} Amazon Fresh tabs — list also copied`);
    });

    // Item modal
    document.getElementById("imSave").addEventListener("click", saveItem);
    document.getElementById("imCancel").addEventListener("click", () => hideModal("itemModal"));
    document.getElementById("imDelete").addEventListener("click", deleteItem);

    // Custom recipe modal
    document.getElementById("crSave").addEventListener("click", saveCustom);
    document.getElementById("crCancel").addEventListener("click", () => hideModal("customModal"));

    // Scan — close-up (one item, Phase 2)
    document.getElementById("scanOneInput").addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) { return; }
      await handleCloseUpPhoto(file);
      e.target.value = "";
    });

    // Scan — bulk barcode scanner (multi-item mode)
    document.getElementById("scanBarcodeBtn").addEventListener("click", () => {
      openBulkBarcodeScanner();
    });

    // Barcode modal cancel / manual entry
    document.getElementById("barcodeCancel").addEventListener("click", closeBarcodeScanner);
    document.getElementById("barcodeManual").addEventListener("click", () => {
      closeBarcodeScanner();
      const code = prompt("Enter UPC (8–14 digits):");
      if (code && /\d/.test(code)) onBarcodeDecoded(code.replace(/\D/g, ""));
    });

    // Scan — bulk / whole-shelf (legacy)
    document.getElementById("scanInput").addEventListener("change", async (e) => {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      // Show a quick "Processing..." state while we convert HEIC/resize.
      const scanEl = document.getElementById("scanResult");
      if (scanEl) {
        scanEl.innerHTML = `<div class="card" style="text-align:center;"><p style="margin:0;">📸 Processing photo…</p><p style="color:var(--muted); font-size:12px; margin:6px 0 0;">Converting and resizing${/heic|heif/i.test(file.type) || /\.hei[cf]$/i.test(file.name) ? " (HEIC may take a moment)" : ""}…</p></div>`;
      }
      try {
        const rawDataUrl = await blobToDataUrl(file);
        const jpegDataUrl = await normalizeImageToJpeg(rawDataUrl);
        renderScanResult(jpegDataUrl);
      } catch (err) {
        if (scanEl) {
          scanEl.innerHTML = `<div class="card" style="background:#fde8e8;"><p style="margin:0; color:#7b1f1f;"><strong>Couldn't read that photo.</strong></p><p style="margin:6px 0 0; font-size:13px; color:#7b1f1f;">${escapeHtml(apiError(err))}. Try a JPEG or PNG.</p></div>`;
        }
      }
      // Reset input so picking the same file again re-triggers change.
      e.target.value = "";
    });

    // Plan
    document.getElementById("generatePlanList").addEventListener("click", planShoppingList);
    document.getElementById("autoPlanWeek").addEventListener("click", autoPlanWeek);

    // Chat
    document.getElementById("chatSend").addEventListener("click", () => {
      const input = document.getElementById("chatInput");
      const text = input.value;
      input.value = "";
      sendChat(text);
    });
    document.getElementById("chatInput").addEventListener("keydown", (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        document.getElementById("chatSend").click();
      }
    });
    // Auto-resize chat input
    document.getElementById("chatInput").addEventListener("input", (e) => {
      e.target.style.height = "auto";
      e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px";
    });
    // Suggestion chips
    document.querySelectorAll(".chip-suggest").forEach(btn => {
      btn.addEventListener("click", () => {
        sendChat(btn.dataset.suggest);
      });
    });

    // Onboard
    document.getElementById("obNext").addEventListener("click", () => {
      if (onboardStep < ONBOARD_SCREENS.length - 1) { onboardStep++; renderOnboard(); }
      else finishOnboard();
    });
    document.getElementById("obSkip").addEventListener("click", finishOnboard);
    document.getElementById("obAction")?.addEventListener("click", () => {}); // wired in renderOnboard

    // Theme reactivity
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
      if (state.settings.theme === "system") applyTheme();
    });

    // ============================================================
    // INIT
    // ============================================================
    applyTheme();
    wireSettings();
    setView("cook");
    updateShopBadge();

    // Auto-fetch product photos for any inventory items missing one (runs once at startup, then quietly in the background)
    setTimeout(() => { fillMissingProductImages(); }, 1500);

    // Service worker registration (offline support + push notifications)
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("sw.js").catch(() => {/* no-op */});
      });
      // When SW tells us a notification was clicked, open inventory tab
      navigator.serviceWorker.addEventListener("message", (e) => {
        if (e.data && e.data.type === "NOTIF_CLICK_INVENTORY") {
          setView("inventory");
        }
      });
    }

    // Onboarding: show on first run (or resume mid-flow)
    if (!state.settings.hasOnboarded) {
      maybeResumeOnboard();
    }

    // Expiry notifications: sync toggle UI + check on load
    updateNotifToggleUI();
    setTimeout(() => checkExpiryNotifications(), 3000); // after app has fully rendered

    // Re-check expiry notifications when tab becomes visible again
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) checkExpiryNotifications();
    });
