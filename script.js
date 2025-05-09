const categoryColors = {
    war: "#FF073A",         // Neon red for 'war'
    discovery: "#39FF14",   // Neon green for 'discovery'
    default: "#0ff"           // Default color (cyan) for other categories
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
      { year: 1914, content: "World War I began", category: "war" },
      { year: 1945, content: "World War II ended", category: "war" },
      { year: 1961, content: "Berlin Wall built", category: "war" },
      { year: 1989, content: "Berlin Wall falls", category: "war" },
      { year: 2001, content: "9/11 Attacks", category: "war" },
      { year: 1914, content: "World War I began", category: "discovery" },
      { year: 1945, content: "World War II ended", category: "war" },
      { year: 1961, content: "Berlin Wall built", category: "war" },
      { year: 1989, content: "Berlin Wall falls", category: "war" },
      { year: 2001, content: "9/11 Attacks", category: "war" },
      { year: 1914, content: "World War I began", category: "war" },
      { year: 1945, content: "World War II ended", category: "war" },
      { year: 1961, content: "Berlin Wall built", category: "war" },
      { year: 1989, content: "Berlin Wall falls", category: "war" },
      { year: 2001, content: "9/11 Attacks", category: "war" }
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
  