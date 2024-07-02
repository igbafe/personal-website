// Function to update current time and day
function updateTimeAndDay() {
    const timeElement = document.querySelector('[data-testid="current-time"]');
    const dayElement = document.querySelector('[data-testid="current-day"]');
  
    // Get current date and time
    const now = new Date();
    
    // Format time as HH:MM:SS
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    // Get current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = daysOfWeek[now.getDay()];
  
    // Update the elements
    timeElement.textContent = `Current Time: ${formattedTime}`;
    dayElement.textContent = `Current Day: ${currentDay}`;
  }
  
  // Initial call to display current time and day
  updateTimeAndDay();
  
  // Update time and day every second
  setInterval(updateTimeAndDay, 1000);
  