const categoryColors = {
    war: "#FF073A",         // Neon red for 'war'
    discovery: "#39FF14",   // Neon green for 'discovery'
    default: "#0ff",           // Default color (cyan) for other categories
    Political:"#39FF14",
    Foreign_Policy_International: "#FF073A", 
    Social: "#ADD8E6",
    Economic: "#FFB6C1"
    
};
  
const popup = document.getElementById("popup");
const popupText = document.getElementById("popup-text");
const popupClose = document.getElementById("popup-close");

popupClose.addEventListener("click", (e) => {
    e.stopPropagation(); // Prevent triggering toggle
    popup.style.display = "none";
    currentPopupItem = null;
  });
  

// Function to show the popup
function showPopup(content) {
  popupText.textContent = content;  // Set the content in the popup
  popup.style.display = "flex";      // Show the popup
}
const learnData = {
   Russia: [
      { year: 1900-1917, content: "Before 1917 Tsar ruled through edicts (ukase) and advised by ministers who were unable to act without Tsar's approval. He was dependent on nobility and imperial bureaucracy and the worlds largest army (6 million in 1914 and 12 million by end of first world war.", category: "Political" },
      { year: 1900-1917, content: "There was a strict surveillance on the general population with high censorship. The Okhrana had unlimited power to carry out raids and arrests. They would imprison or exile any with anti-tsarist behaviours.", category: "Political" },
      { year: 1905, content: "Opposition groups to the Tsar pressured the autocratic society in the wake of the defeat in war with Japan, with the Tsr conceding the October Manifesto, promising an elected representative assembly (state Duma).", category: "Political" },
      { year: 1906, content: "Before the First Duma met in May, the Tsar issued the fundamental Laws, reaffirming his autocracy.", category: "Political" },
      { year: 1900-1917, content: "Opposition groups: The Liberals - moderate reform and constitutional monarchy such as Constitutional Democrats (Kadets) and the Octobrists. The Social Revolutionaries - Formed in 1901, groups aiming to improve peasantry in the 1860s. There was some terrorist branches. The Social democrats: All Russian Social Democrat Labour party founded in 1898 Based off Karl Marx. In 1903 party split when Vladimir Ulyanov (Lenin) won a vote in favour of strong disciplined organisation of revolutionaries. His followers were the Bolsheviks", category: "Political" },
      { year: 1900-1917, content: " Marx (1818-83) was a German Jew who wrote the Communist Manifesto in 1848, translated into Russian in 1869. Marxist Stage Theory: Stage 1 - no classes or private property (hunters and gatherers). Stage 2 - imperialism where man rose to the top and land owning aristocracy was created. Stage 3 - Feudalsim where land owned exploited by peasantry. Stage 4 - capitalism where merchants obtained political control and exploited workers. Stage 5 - Workers took control in sharing foods, goods and services according to needs (socialism). Stage 6 - communism where all join together for common good. Money and states no longer needed.", category: "Social" },
      { year: 1900-1917, content: "Lenin lived from 1870-1924 and supported marxism. He was brought to the attention of the secret police due to this. He was in eile in Siberia when social democrat party founded (1898) but wrote programme for it. He also founded revolutionary newspaper (Iskra meaning spark) and developed a strong underground party network.  ", category: "Political" },
      { year: 1917, content: "Leon Trotsky - Founded St Petersburg Soviet in 1905. Also chaired the Petrograd Soviet and organised the Military Revolutionary Committee, planning the Bolshevik takeover in October. In 1929 he was expelled from the party by Stalin and murdered by a Stalinist agent in Mexcio in 1940.", category: "Social" },
      { year: 1917, content: "Strikes in Petrograd. Cause: unemployment, starvation. Course: 14th Feb 100,000 workers from 58 factories went on strike. News that bread would be rationed from 1st March brought violent exchanges. 23rd -24th Feb: 90,000 workers on strike and 50 factories closed. 240,000 students, women, men and workers on streets. Singing of La Marseillaise. 27th Feb - Soldiers onto streets, 40 demonstrators killed. Mutiny in Volynskii regiment of soldiers, sergeant shooting his commanding officer. 66,000 soldiers mutinied. Duma set up a 12 man provisional committee to take over govt.  ", category: "Social" },
      { year: 1917, content: "Formation of the Petrograd Soviet and Provisional Government. Each regiment elected committees sending representative to the soviet, agreeing control of Petrograd Soviet. 3000 members by 10th March, key leader Alexander Kerensky. Grand Duke Mikhail relinquished political authority to Provisional Government. Dual authority between petrograd and provisional, each with different wings of Tauride Palace.", category: "Political" },
      { year: 1917, content: "Abdication of Tsar Nicholas II (2nd March)", category: "Political" },
      { year: 1917, content: "Return of Lenin (3rd April), and April Theses - Bolsheviks previously a small party of 23000 members, 40 representatives in the Soviet and major leaders in exile. First to reach Petrograd were Kamenev and Stalin. Lenin mapped his programme in -letters from afar- wanting a second revolution. This was later reissued as April Theses. Wanted no support for provisional government, war immediately ending, power transferred to soviets, all land owned by state. Bolshevik party not under Lenin's control at this stage. By the end of April Lenin had won over the majority of the Central committee of the Bolshevik party. ", category: "Political" },
      { year: 1917, content: "Initial support for Bolshevik party compared to provisional government low - at the first all russian congress of soviets meeting in Petrograd on 3rd June confidence was given for the provisional govt by 543 votes to 126.", category: "Political" },
      { year: 1917, content: "Trotsky joins Bolshevik on the 2nd July", category: "Political" },
      { year: 1917, content: "July Day Riots: sailors at Kronstadt naval base had armed demonstration using Bolshevik slogans. Lenin could not condemn, nor support as premature revolution too risky. Tried for a peaceful protest however shots fired at protestors. Provisional govt brought in reinforcements to destroy protest. Lenin and Stalin fled, Trotsky and Kamenev arrested and imprisoned. Bolshevik newspaper Izvestia denounced leaders. with Lenin's reputation fell for fleeing. On 8th July Kerensky became PM - the Bolsheviks moment appeared to have passed.", category: "Political" },
      { year: 1917, content: "Attempted coup by Kornilov: Brusilov led a major offensive in Galicia, however huge Russian losses. Anti war sentiment and desertions rife so he enforced death penalty on deserters. Kerensky called a Moscow state conference to demonstrate unity however Bolsheviks boycotted due to death penalty and other measures. Some who still wanted land ownership, particularly the right saw Kornilov as their saviour. August 1917 saw Kornilov order 6 regiments to march to petrograd, establishing militray dictatorship. Kerenesky panicked and ordered Kornilov to call a halt. When he didnt, Kerensky released imprisoned Bolsheviks and coup leaders were arrested. This saw a rise in Bolshevik membership from 23,000 in Feb to 200,000 by October, with a force of 10,0000 red guards. They won majority in Petrograd and Moscow in Sept and on 26th Sept Trotsky became chairman of exec committee for Petrograd Soviet. ", category: "Political" },
      { year: 1917, content: "Bolshevik seizure of power (25th October) - Commissars sent to all petrograd garrisons uand 15/18 swore allegiance to soviet rather than provisional government. Comittee came to have 200,000 red guards, 60,000 baltic sailors and 150,000 petrograd garrison units. 24-25th October sees the taking over of key buildings and communication centres in petrograd. Remaining members of provisional government arrested, with the congress adopting Lenin's decree on peace and land. There was also the first soviet govt - Soviet of people's commissars', with Lenin as chair. Few deaths <5, due to provisional govt having few military resources. In fact, the revolution only had 25000 actively involved at most.", category: "Political" },
      { year: 1917, content: "Decrees on Peace and Land - end to war without annexation and indemnities (armistice in Nov and demobilisation process in Dec. Abolishment of private land ownership, legitimised peasant seizures without compensation to land lords. Workers decree establishing max 8 hour day, press decree banning opposition press, social insurance decree providing old age, health and unemployment benefits. He also abolished titles and class ranks, established a new legal system, outlawed sex discrimination and removed marriage and divorce from church control.", category: "Political" },
      { year: 1917, content: "Establishment of Sovnarkom - 500 of 670 delegates voted in favour of a socialist government, Mensheviks and social revolutionaries were dismayed to find majority of seats in this Soviets of People's Commissars (Sovnarkom) went to Bolsheviks. Trotsky was commissar for foreign affairs. Peace talks with Germans, and Sovnarkom met 1/2 times a day.  ", category: "Political" },
      { year: 1917, content: "Formation of the Cheka", category: "Political" },
      { year: 1918, content: "Treaty of Brest-Litovsk 3rd March 1918 caused Russia to lose Finland, Estonia, Latvia, Lithuania, Poland, Bessarabia, Georgia, Belarus and Ukraine. This was 1/6 of Russias population, 1/3 of agricultural produce. 3 billion in war reparations to Germany also.", category: "Political" },
      { year: 1918, content: "The Constituent Assembly forcibly dissolved - 41 million votes in elections for constituent assembly in 1917, with the socialist revolutionaries having 21.8 million votes (53%) and bolshevik 10 million (24%). Lenin declares we must not be deceived by the election figures. Election proves nothing. Then the constituent assembly was forcibly closed. Civilians demonstrated and 12 killed. ", category: "Political" },
      { year: 1918, content: "Start of Civil War - lots of population turned against Bolsheviks - right said Bolsheviks had no right to rule, centre said they hadn't submitted to popular elections and those on left said they ignored soviet who helped them into power. Some liked tsarist regime.", category: "Political" },
      { year: 1918, content: "First Soviet constitution - July 1918. Supreme power rested with All-Russian congress of soviets. Central executive committee was organ of power and acted like a President. Congress elected Sovnarkom. Limitations included that vote was reserved for toiling classes (not businessme, tsarist officials etc), workers vote weighted 5 to 1 against peasants, officialy central comittee appointed by congress, in practice however it was by Bolshevik's central committee. July 1918 sees Tsar murdered in Urals.", category: "Political" },
      { year: 1918, content: "Civil war continued - Nov Kolchak declares himself supreme ruler of Russia amongst first White advancement westwards. 1919 october sees high point of Denikins advance, 200 miles from Moscow and Yudenich's to outskirts of Petrograd. 1920, Kolchak shot, Denikins army evacuates to Crimea. 1922 sees end with Constitution of Union of Soviet Socialist republics adopted in December. Trotsky used whatever it took to win war, hiring 50,000 former tsarist soldiers, using cheka to shoot deserters. Reasons for bolshevik success include the Reds commanding hubs of communication. with Whites dispersed in less developed parts. Also, white generals operated independently, and often were incompetent. Red had more peasant sympathies due to land policies. ", category: "Political" },
      { year: 1920-1924, content: "Govt Structure - Soviet govt had sovnarkom 15-20 members --> central committee making laws --> congress of soviets --> provincial and city soviets --> local and district soviets. Communist party had: politburo - 7-9 members from central committee --> central committee --> congress --> provincial parties --> local parties.", category: "Political" },
      { year: 1919, content: "Comintern established - Third communist international - organisation promoting Marxism. First held in Moscow 1919 with 50 delegates from all over Europe, US, Australia and Japan. Lenin was a dominating influence. Despite failure of spartacist uprising, many believed Germany was also ready for revolution.", category: "Foreign Policy/International" },
      { year: 1920, content: "Russo-Polish War (part of civil war) - Russia also excluded from League of Nations in 1919, Chicherin paving way for reintegration in foreign affairs via Treaty of Rapallo April 1922.", category: "Foreign Policy/International" },
      { year: 1921, content: "Kronstadt Revolt - food crisis 1921 caused strikes and riots, with workers protesting against a lack of representation in trade unions.30000 sailors at kronstadt naval base revolted, despite being some of most loyal supporters in Oct revolution. Red army shot leaders of revolt, with 15000 being taken prisoner.", category: "Social" },
      { year: 1921, content: "Red terror  -extreme force against political enemies through Cheka rounding up SR's and menshevicks, often shooting them. Estimated half a million executed between 1918-1920.", category: "Political" },
      { year: 1921, content: "Tenth Party Conference- The Tenth Congress of the Russian Communist Party (Bolsheviks), held in March 1921, was a pivotal moment in Soviet history, taking place amid economic crisis and social unrest following the Russian Civil War. The Congress introduced the New Economic Policy (NEP), marking a significant shift from the strict policies of War Communism to a mixed economy that allowed limited private trade and small-scale private enterprise in order to revive the shattered economy. One of the most consequential political decisions was the adoption of a ban on factions within the Communist Party, aimed at preserving unity but effectively suppressing internal dissent and consolidating Lenin's control. This Congress occurred in the wake of the Kronstadt Rebellion, a mutiny by previously loyal sailors demanding political reform, which underscored the urgency of addressing widespread discontent. Overall, the Tenth Congress set the stage for a more pragmatic approach to governance while also tightening the Party's internal discipline.", category: "Political" },
      { year: 1921, content: "Launch of new economic policy - Gosplan in Feb - requisitioning of grain ended and ban on private trading removed. 1923 tax to state for peasants. State kept control of large scale heavy industry such as steel and coal, small scale would return to private hands. Rationing ended and industries enforced to pay workers out of profits.By 1926 production levels of 1913 had been reached again. 25,000 private traders in Moscow by 1925, responsible for 75% of trade but resented by Bolsheviks.", category: "Economic" },
      { year: 1921, content: "Ban on Faction", category: "Political" },
      { year: 1921-22, content: "Widespread Famine - resulting in the deaths of an estimated five million people. It was caused by a combination of severe drought, the economic and social disruption from the Russian Civil War, and the harsh policies of War Communism, particularly forced grain requisitioning that left peasants with little incentive to produce surplus food. The famine hit hardest in the Volga and Ural regions, where entire villages were wiped out, and reports of cannibalism and people selling their children highlighted the desperation. Although the Bolshevik government was initially reluctant to acknowledge the crisis, it eventually accepted foreign assistance, most notably from the American Relief Administration, which provided food to millions. ", category: "Economic" },
      { year: 1922, content: "Stalin elected General Secretary", category: "Political" },
      { year: 1922, content: "Treaty of Rapallo - waive claims for compensation for WW1, reopening of formal diplomatic relations, mutual goodwill in commercial and economic relations. Between Germany and Russia.", category: "Foreign Policy/International" },
      { year: 1922, content: "Testament dictated by Lenin - In the final months of his life, Vladimir Lenin dictated a series of notes between December 1922 and January 1923, known collectively as Lenin’s Testament, in which he offered a critical assessment of the future of the Soviet leadership. Aware of his declining health after multiple strokes, Lenin expressed concerns about the concentration of power in the hands of Joseph Stalin, recommending that he be removed from his position as General Secretary due to his rudeness and excessive authority. He also criticized other leading Bolsheviks, including Trotsky, Zinoviev, and Kamenev, though he regarded Trotsky as the most capable among them, despite his arrogance. Lenin feared that infighting among these leaders could threaten the stability of the revolution. Though the Testament was meant to guide the future of the party, it was suppressed after Lenin’s death in 1924, especially by Stalin and his allies, who saw it as a threat to their power. Its eventual publication years later revealed Lenin’s deep anxieties about the direction the Soviet Union was taking.", category: "Political" },
      { year: 1924, content: "Zinoviev Letter - conspirators used to influence opinion about labour party.", category: "Foreign Policy/International" },
      { year: 1924, content: "Lenin's death", category: "Political" },
      { year: 1926, content: "United Opposition formed", category: "Political" },
      { year: 1926, content: "Zinoviev, Kamenev and Trotsky removed from Politburo", category: "Political" },
      { year: 1926, content: "Treaty of Berlin", category: "Foreign Policy/International" },
      { year: 1927, content: "Defeat of Left Opposition", category: "Political" },
      { year: 1928, content: "Shakhty Trial", category: "Social" },
      { year: 1928, content: "First Five Year Plan", category: "Economic" },
      { year: 1929, content: "Defeat of Right Opposition", category: "Political" },
      { year: 1929, content: "Celebration of Stalin's 50th birthday", category: "Social" },
      { year: 1929, content: "Call for mass collectivisation and liquidation of kulaks", category: "Economic" },
      { year: 1932-33, content: "The Great Famine in Ukraine and elsewhere", category: "Economic" },
      { year: 1933, content: "Second Five Year Plan", category: "Economic" },
      { year: 1934, content: "Assassination of Kirov", category: "Political" },
      { year: 1934, content: "Soviet entry into League of Nations", category: "Foreign Policy/International" },
      { year: 1935, content: "Beginning of Stahkhanovite movement", category: "Social" },
      { year: 1935, content: "Pacts signed between USSR, France and Czechoslovakia", category: "Foreign Policy/International" },
      { year: 1936, content: "Family Law to restrict abortion and divorce", category: "Social" },
      { year: 1936, content: "Show Trial of Zinoviev, Kamenev and others, Yezhiv appointed head of NKVD", category: "Political" },
      { year: 1936, content: "Stalin Constitution", category: "Political" },
      { year: 1936, content: "Soviet intervention in Spanish Civil War", category: "Foreign Policy/International" },
      { year: 1937, content: "Show Trial of Radek and others", category: "Political" },
      { year: 1937, content: "Execution of Marshal Tukhachevsky and Red Army Officers", category: "Political" },
      { year: 1937, content: "Height of Great Terror (to late 1938)", category: "Social" },
      { year: 1938, content: "Third five year plan", category: "Economic" },
      { year: 1938, content: "Show Trial of Bukharin, Rykov and others", category: "Political" },
      { year: 1938, content: "Labour Book for workers introduced", category: "Social" },
      { year: 1938, content: "Yezhov replaced by Beria", category: "Political" },
      { year: 1939, content: "Nazi-Soviet pact", category: "Foreign Policy/International" },
      { year: 1939, content: "Soviet invasion of Eastern Poland and Finland", category: "Foreign Policy/International" },
      { year: 1940, content: "Soviet annexation of Baltic States", category: "Foreign Policy/International" },
      { year: 1941, content: "Nazi invasion of USSR", category: "Foreign Policy/International" },
      { year: 1941, content: "Emergency legislation", category: "Political" },
      { year: 1941, content: "Beginning of siege of Leningrad", category: "Foreign Policy/International" },
      { year: 1941, content: "Battle for Moscow", category: "Foreign Policy/International" },
      { year: 1941, content: "US Lend-Lease agreed", category: "Economic" },
      { year: 1941, content: "December Soviet counter offensive", category: "Foreign Policy/International" },
      { year: 1942, content: "Battle of Stalingrad", category: "Foreign Policy/International" },
      { year: 1943, content: "German surrender at Stalingrad", category: "Foreign Policy/International" },
      { year: 1943, content: "Battle of Kursk", category: "Foreign Policy/International" },
      { year: 1943, content: "Deportations from North Caucasus", category: "Social" },
      { year: 1944, content: "Siege of Leningrad broken", category: "Foreign Policy/International" },
      { year: 1944, content: "Soviet armies advance into eastern Europe", category: "Foreign Policy/International" },
      { year: 1945, content: "Soviet Invasion of Germany", category: "Foreign Policy/International" },
      { year: 1945, content: "Yalta Conference", category: "Foreign Policy/International" },
      { year: 1945, content: "German and Japanese surrender", category: "Foreign Policy/International" },
      { year: 1945, content: "Potsdam Conference", category: "Foreign Policy/International" },
      { year: 1946, content: "Beginning of Zhdanovschina", category: "Social" },
      { year: 1947, content: "Post-war Famine", category: "Economic" },
      { year: 1947, content: "Cominform Established", category: "Foreign Policy/International" },
      { year: 1948, content: "Communist coup in Czechslovakia", category: "Foreign Policy/International" },
      { year: 1948, content: "Berlin Blockade", category: "Foreign Policy/International" },
      { year: 1949, content: "Leningrad Affair", category: "Political" },
      { year: 1949, content: "Soviet atomic bomb", category: "Foreign Policy/International" },
      { year: 1952, content: "Doctors plot and new politica purges", category: "Political" },
      { year: 1953, content: "Death of Stalin", category: "Political" }

    ],
    The_Tudors: [
      { year: 1928, content: "Penicillin discovered", category: "discovery" },
      { year: 1969, content: "Moon Landing", category: "discovery" },
      { year: 2012, content: "Higgs Boson found", category: "discovery" }
    ]
  };
  
  const quizData = {
    Russia: [
      { year: 1914, question: "When did WWI start?", answer: "1914", category: "war" },
      { year: 1945, question: "When did WWII end?", answer: "1945", category: "war" },
      { year: 1961, question: "What was built in 1961?", answer: "Berlin Wall", category: "war" },
      { year: 1989, question: "What fell in 1989?", answer: "Berlin Wall", category: "war" },
      { year: 2001, question: "What happened in 2001?", answer: "9/11 Attacks", category: "war" }
    ],
    The_Tudors: [
      { year: 1928, question: "What was discovered in 1928?", answer: "Penicillin", category: "discovery" },
      { year: 1969, question: "What happened in 1969?", answer: "Moon Landing", category: "discovery" },
      { year: 2012, question: "What was found in 2012?", answer: "Higgs Boson", category: "discovery" }
    ]
  };
  function populateCategoryFilter() {
    const data = learnData[topic];
    const categories = new Set(data.map(item => item.category));
    const categoryFilter = document.getElementById("categoryFilter");
    const previousValue = categoryFilter.value || "all"; // Save current selection
  
    categoryFilter.innerHTML = ""; // Clear existing options
  
    // Always include "All" option first
    const allOption = document.createElement("option");
    allOption.value = "all";
    allOption.textContent = "🌐 All";
    categoryFilter.appendChild(allOption);
  
    // Add options for each unique category
    categories.forEach(category => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent =
        category === "war" ? "⚔️ War" :
        category === "discovery" ? "🔬 Discovery" :
        category === "Political" ? "📋🖋 Political" :
        category === "Economic" ? "💰 Economic" :
        category === "Foreign_Policy_International" ? "🌍Foreign/International" :
        category === "Social" ? "👪Social" :
        
        category; // fallback text
      categoryFilter.appendChild(option);
    });
    categoryFilter.value = previousValue;
  }
  
  const svg = document.getElementById("timelineSvg");
  const topic = new URLSearchParams(window.location.search).get("topic") || "history";
  document.getElementById("timelineTitle").textContent = `${topic.replace(/_/g, " ")} Timeline`;

  let currentMode = "learn";
  let currentCategory = "all";
  
  function renderTimeline() {
    populateCategoryFilter();
    document.getElementById("categoryFilter").value = currentCategory;
    const data = currentMode === "learn" ? learnData[topic] : quizData[topic];
    const filtered = data.filter(d => currentCategory === "all" || d.category === currentCategory);
    svg.innerHTML = "";
  
    // Neon glow filter
    const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
    defs.innerHTML = `
      <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    `;
    svg.appendChild(defs);
  
    const screenWidth = window.innerWidth;
    const nodeWidth = 120;
    const nodeHeight = 120;
    const margin = 0.05;  // Slightly smaller margin for better fitting on smaller screens
    const availableWidth = screenWidth * (1 - 2 * margin);
    
    // Adjust number of columns based on screen width
    let colsPerRow = 1;
    if (screenWidth >= 1200) {
      colsPerRow = 5;
    } else if (screenWidth >= 992) {
      colsPerRow = 4;
    } else if (screenWidth >= 768) {
      colsPerRow = 3;
    } else if (screenWidth >= 370) {
      colsPerRow = 2;
    }
  
    const nodeSpacing = availableWidth / colsPerRow;
    const rowSpacing = nodeHeight + 10; // Vertical spacing between rows
    
    const nodes = [];
    let isReverse = false;
    let rowCount = 0;
    const startY = 120;
  
    for (let i = 0; i < filtered.length; i++) {
      const item = filtered[i];
      const col = i % colsPerRow;
  
      let x = col * nodeSpacing + availableWidth * margin;
      if (isReverse) {
        x = availableWidth - x - nodeWidth;
      }
      const y = startY + rowCount * 2 * rowSpacing;
  
      const cx = x + nodeWidth / 2;
      const cy = y + nodeHeight / 2;
      nodes.push({ cx, cy });
  
      // Circle
    // Circle
    const categoryColor = categoryColors[item.category] || categoryColors.default; // Get the color for the category or fallback to default

    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", nodeWidth / 2);
    circle.setAttribute("fill", categoryColor); // Use the dynamic color based on category
    circle.setAttribute("stroke", "#00f6ff");
    circle.setAttribute("stroke-width", "4");
    circle.setAttribute("filter", "url(#neon-glow)");
    svg.appendChild(circle);

  
      // Text
      const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
      text.setAttribute("x", cx);
      text.setAttribute("y", y + 70);
      text.setAttribute("text-anchor", "middle");
      text.setAttribute("fill", "white");
      text.setAttribute("font-size", "25px");
      text.setAttribute("font-family", "Arial");
      text.style.pointerEvents = "none"; // Allow clicking through the text
      text.textContent = item.year;
      svg.appendChild(text);
      circle.addEventListener("click", () => {
        if (currentMode === "learn") {
          showPopup(item.content);
        } else {
          currentPopupItem = item;
          isShowingQuestion = true;
          showPopup(item.question); // Start with question
        }
      });
      
      
  
      if ((i + 1) % colsPerRow === 0 || i === filtered.length - 1) {
        isReverse = !isReverse;
        rowCount++;
      }
    }
  
    // Draw paths (after nodes and text)
    const paths = [];
    for (let i = 0; i < nodes.length - 1; i++) {
      const current = nodes[i];
      const next = nodes[i + 1];
  
      const isNewRow = (i + 1) % colsPerRow === 0;
      
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const d = isNewRow
        ? `M ${current.cx} ${current.cy} L ${current.cx} ${next.cy}`
        : `M ${current.cx} ${current.cy} L ${next.cx} ${next.cy}`;
      path.setAttribute("d", d);
      path.setAttribute("fill", "none");
      
      // Make the paths thinner on smaller screens
      const pathStrokeWidth = (screenWidth < 768) ? 4 : 6; 
      path.setAttribute("stroke", "#0ff");
      path.setAttribute("stroke-width", pathStrokeWidth);
      path.setAttribute("stroke-linecap", "round");
  
      svg.appendChild(path);
      paths.push(path); // store to reorder after
    }
  
    // Reorder: move each path to the bottom
    for (let path of paths.reverse()) {
      svg.insertBefore(path, svg.firstChild.nextSibling); // below filter <defs>, above nothing else
    }
  }
  
  
  
  function switchMode() {
    currentMode = document.getElementById("modeSelect").value;
    renderTimeline();
  }
  
  function filterCategory() {
    currentCategory = document.getElementById("categoryFilter").value;
    renderTimeline();
  }
  
  function goHome() {
    window.location.href = "index.html";
  }
  
  document.addEventListener("keydown", function (e) {
    const container = document.querySelector(".timeline-container");
    const speed = 50;
    if (e.key === "ArrowDown") {
      container.scrollBy({ top: speed, behavior: "smooth" });
    } else if (e.key === "ArrowUp") {
      container.scrollBy({ top: -speed, behavior: "smooth" });
    }
  });
  
  window.onload = renderTimeline;
  
  popup.addEventListener("click", () => {
    if (currentMode === "quiz" && currentPopupItem) {
      if (isShowingQuestion) {
        showPopup(`Answer: ${currentPopupItem.answer}`);
      } else {
        showPopup(currentPopupItem.question);
      }
      isShowingQuestion = !isShowingQuestion;
    }
  });
  
