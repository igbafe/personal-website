// Function to update current time and day
function updateTimeAndDay() {
  const timeElement = document.querySelector('[data-testid="current-time"]');
  const dayElement = document.querySelector('[data-testid="current-day"]');

  // Get current date and time
  const now = new Date();

  // Format time as HH:MM:SS
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const formattedTime = `${hours}:${minutes}:${seconds}`;

  // Get current day of the week
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDay = daysOfWeek[now.getDay()];

  // Update the elements
  timeElement.textContent = `Current Time: ${formattedTime}`;
  dayElement.textContent = `Current Day: ${currentDay}`;
}

// Initial call to display current time and day
updateTimeAndDay();

// Update time and day every second
setInterval(updateTimeAndDay, 1000);

window.onload = function () {
  console.log("Window onload function called");

  const img = document.getElementsByClassName("profile_pic")[0];

  if (img.complete) {
    imageLoaded();
  } else {
    img.onload = imageLoaded;
  }

  function imageLoaded() {
    console.log("Image onload function called");
    const naturalWidth = img.naturalWidth;
    const naturalHeight = img.naturalHeight;
    const displayedWidth = img.width;
    const displayedHeight = img.height;

    console.log(`Natural dimensions: ${naturalWidth}x${naturalHeight}`);
    console.log(`Displayed dimensions: ${displayedWidth}x${displayedHeight}`);

    if (naturalWidth === displayedWidth && naturalHeight === displayedHeight) {
      console.log("The image is displayed at its natural dimensions.");
    } else {
      console.log("The image is not displayed at its natural dimensions.");
    }
  }
};
