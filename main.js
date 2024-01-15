document.addEventListener("DOMContentLoaded", function () {
    loadSettings();
    generateQuote();
  });
  
  function saveSettings() {
   let name = document.getElementById("name").value;
   let focus = document.getElementById("focusInput").value;
   let background = document.getElementById("backgroundImage").value;
  
    localStorage.setItem("name", name);
    localStorage.setItem("focus", focus);
    localStorage.setItem("background", background);
  
    updateResult(name, focus, background);
    toggleDropdown(); // Close the dropdown after saving settings
  }
  
  function loadSettings() {
    let name = localStorage.getItem("name");
    let focus = localStorage.getItem("focus");
    let background = localStorage.getItem("background");
  
    if (name || focus || background) {
      updateResult(name, focus, background);
    }
  }
  
  function updateResult(name, focus, background) {
    document.getElementById("greeting").innerText = `Hello, ${name || 'Guest'}!`;
    document.getElementById("quote").innerText = `Your focus for the day: ${focus || 'Not specified'}`;
    document.body.style.backgroundImage = `url('${background || ''}')`;
  }
  
  function generateQuote() {
    let quotes = [
      "Do great work and love what you do. - Steve Jobs",
      "Life goes on in three words. - Robert Frost",
      "Believe you can achieve. - Theodore Roosevelt",
    ];
  
    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomIndex];
  }
  
  function toggleDropdown() {
    let dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("show");
  }
  