const menuPunkter = [
    {name: "Forside", url: "/index.html"},
    {name: "Arrangementer", url: "/arrangementer.html"},
    {name: "Opret Arrangement", url: "/opret.html"},
    {name: "Min profil", url: "/minprofil.html"},
  ];
  
  const menuBoks = document.getElementById("menu-boks");
  const menuBoksItem = document.getElementById("menu-boks-items")
  
  for (const item of menuPunkter) {
  
    const menuElement = document.createElement('div');
    menuElement.className = "menu-element";
    menuElement.innerText = Element.name;
    menuElement.onclick = () => {
      window.location.href = Element.url;
    };
  
    menuBoksItem.appendChild(menuElement);
  }
  
  const burgerToggle = document.createElement("button");
  burgerToggle.id = 'burger-toggle';
  burgerToggle.innerHTML = '<div></div><div></div><div></div>';
  burgerToggle.onclick = () => {
    if (menuBoks.style.display === 'block') {
      menuBoks.style.display = 'none';
      burgerToggle.classList.remove('open');
    } else {
      menuBoks.style.display = 'block';
      burgerToggle.classList.add('open');
    }
  };
  
  document.body.appendChild(burgerToggle);