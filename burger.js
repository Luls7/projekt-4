const menuPunkter = [
    {name: "Forside", url: "/index.html"},
    {name: "Arrangementer", url: "/arrangementer.html"},
    {name: "Opret Arrangement", url: "/opret.html"},
    {name: "Min profil", url: "/minprofil.html"},
  ];
  
  const menuBoks = document.getElementById("menuboks");
  const menuBoksItem = document.getElementById("menuboksitems")
  
  for (const item of menuPunkter) {
  
    const menuElement = document.createElement('div');
    menuElement.className = "menuelement";
    menuElement.innerText = item.name;
    menuElement.onclick = () => {
      window.location.href = item.url;
    };
  
    menuBoksItem.appendChild(menuElement);
  }
  
  const burgerToggle = document.createElement("button");
  burgerToggle.id = 'burgertoggle';
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