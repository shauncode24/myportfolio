alert("loaded");
let scrollResistance = 0.2; // Adjust for more/less resistance
let lastScroll = 0;

window.addEventListener('wheel', (event) => {
  event.preventDefault();  // Prevent default scrolling behavior

  // Calculate the direction of scroll
  let delta = event.deltaY;
  let newScrollPosition = window.scrollY + (delta * scrollResistance);

  // Apply the new scroll position with resistance
  window.scrollTo({
    top: newScrollPosition,
    behavior: 'smooth' // Smooth scrolling behavior
  });
});