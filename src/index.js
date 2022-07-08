function handleWindowResize() {
  const windowWidth = window.innerWidth;
  let windowColor;

  if (windowWidth <= "500") {
    windowColor = "cornflowerblue";
  } else if (windowWidth > "500" && windowWidth <= "800") {
    windowColor = "mediumorchid";
  } else {
    windowColor = "gold";
  }
  document.body.style.backgroundColor = windowColor;
}

window.addEventListener("resize", handleWindowResize);
