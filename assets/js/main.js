// function updateProjects(profileData) {
//   const projectsContainer = document.getElementById("projects-container")
//   projectsContainer.innerHTML = profileData.portfolio.projects.map(project => `
//       <img class="card__cover" src="${project.image}" alt="Capa ${project.name}">
//       <div class="card__body">
//         <h3 class="card__title">${project.name}</h3>
//         <p class="card__description">${project.description}</p>
//         <ul class="card__list">
//           ${project.features.map(feature => `<li class="card__item">${feature};</li>`).join("")}
//         </ul>
//         <ul class="technologies__list">
//           ${project.technologies.map(tech => `
//             <li class="technologies__item">
//               <img class="technologies__logo" src="${tech.logo}" alt="Logo ${tech.name}" title="${tech.name}">
//             </li>`).join("")}
//         </ul>
//         <div class="card__buttons">
//           <a href="${project.links.preview}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
//             <span>Prévia</span>
//             <i class="bi bi-arrow-up-right"></i>
//           </a>
//           <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn">
//             <span>Repositório</span>
//           </a>
//         </div>
//     </div>
//   `).join("")
// }

// function updateProjects(profileData) {
//   const projectsWrapper = document.querySelector(".projects__container")
//   const baseCard = document.getElementById(".projects__card")

//   baseCard.innerHTML = ""

//   profileData.portfolio.projects.forEach((project, index) => {
//     const card = index === 0 ? baseCard : baseCard.cloneNode(true)

//     card.innerHTML = `
//       <img class="card__cover" src="${project.image}" alt="Capa ${project.name}">
//       <div class="card__body">
//         <h3 class="card__title">${project.name}</h3>
//         <p class="card__description">${project.description}</p>
        
//         <ul class="card__list">
//           ${project.features.map(feature => `<li class="card__item">${feature};</li>`).join("")}
//         </ul>

//         <ul class="technologies__list">
//           ${project.technologies.map(tech => `
//             <li class="technologies__item">
//               <img class="technologies__logo" src="${tech.logo}" alt="Logo ${tech.name}" title="${tech.name}">
//             </li>
//           `).join("")}
//         </ul>

//         <div class="card__buttons">
//           <a href="${project.links.preview}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
//             <span>Prévia</span>
//             <i class="bi bi-arrow-up-right"></i>
//           </a>
//           <a href="${project.links.github}" target="_blank" rel="noopener noreferrer" class="btn">
//             <span>Repositório</span>
//           </a>
//         </div>
//       </div>
//     `

//     if (index > 0) {
//       projectsWrapper.appendChild(card)
//     }
//   })
// }

// // chamada com JSON
// fetchProfileData().then(data => updateProjects(data))

function updateProjects(profileData) {
  const projectsWrapper = document.querySelector(".projects__container");
  const baseCard = document.querySelector(".projects__card");

  projectsWrapper.innerHTML = "";

  if (!profileData?.portfolio?.projects?.length) {
    console.error("Nenhum projeto encontrado ou dados inválidos.");
    return;
  }

  const projects = profileData.portfolio.projects.slice(0, 4);

  projects.forEach((project, index) => {
    
    const card = index === 0 && baseCard ? baseCard : document.createElement("div");

    card.className = `projects__card ${index === 1 || index === 3 ? "card--reverse" : ""}`;

    card.innerHTML = `
      <img class="card__cover" src="${project.image || "assets/images/default.jpg"}" alt="Capa ${project.name || "Projeto"}">
      <div class="card__body">
        <h3 class="card__title">${project.name || "Sem título"}</h3>
        <p class="card__description">${project.description || "Sem descrição"}</p>
        <ul class="card__list">
          ${(project.features || []).map(feature => `<li class="card__item">${feature};</li>`).join("")}
        </ul>
        <ul class="technologies__list">
          ${(project.technologies || []).map(tech => `
            <li class="technologies__item">
              <img class="technologies__logo" src="${tech.logo || ""}" alt="Logo ${tech.name || "Tecnologia"}" title="${tech.name || "Tecnologia"}">
            </li>
          `).join("")}
        </ul>
        <div class="card__buttons">
          <a href="${project.links?.preview || "#"}" target="_blank" rel="noopener noreferrer" class="btn btn--primary">
            <span>Prévia</span>
            <i class="bi bi-arrow-up-right"></i>
          </a>
          <a href="${project.links?.github || "#"}" target="_blank" rel="noopener noreferrer" class="btn">
            <span>Repositório</span>
          </a>
        </div>
      </div>
    `;

    projectsWrapper.appendChild(card);
  });

  if (projects.length < 4) {
    console.warn(`Apenas ${projects.length} projetos encontrados. Esperado: 4.`);
  }
}

fetchProfileData()
  .then(data => updateProjects(data))
  .catch(error => console.error("Erro ao carregar os dados:", error));