document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM totalmente carregado");
  initializeEventListeners(); 
});

// Dados dos projetos
const projectData = {
    project1: {
      title: "Predicting Purchase Intention",
      description: `
      The project consist in building a predictive model, more specificaly, a SVM classifier, that predicts purchase intentions for a business. Many attributes were analyzed and used as training data for the model (see pictures). The dataset is widely known and can be found at <https://archive.ics.uci.edu/dataset/468/online+shoppers+purchasing+intention+dataset>. Several combinations of SVM models were searched with GridSearch // and also different kernel functions were tested. 5 performance metrics were calculated for 6245 predictions on new datapoints. Some models reached over 83% in all metrics.
      `,
      skills: ["Machine Learning", "Python", "Statistics", "Data Analysis"],
      date: "Jan 8, 2025",
      images: [
        { src: "assets/purchase_intention/output.png", caption: "All variables are analyzed for future insights on optimizing training by applying scaling transformations" },
        { src: "assets/purchase_intention/correlation_matrix.png", caption: "Correlation analysis may help on feature selection and understanding our target variable behavior" },
        { src: "assets/purchase_intention/countplot.png", caption: "Correlation analysis may help on feature selection and understanding our target variable behavior"},
        { src: "assets/purchase_intention/other_plots.png", caption: "Revenue distribution indicates that balacing methods need to be applied before proceding"},
        { src: "assets/purchase_intention/model comparison.png", caption: "Here are some useful information on the customers, this may help on customized offers/actions"},
        { src: "assets/purchase_intention/model_comparison.png", caption: "Here are some models comparison, we can choose one based on preferred metric/combination"},
        { src: "assets/purchase_intention/confusion_matrix.png", caption: "Choosing Version 3 as an example, we can plot it's confusion matrix so we can see the predictions X ground truth"},
      ]
    },
    project2: {
      title: "Projeto 2",
      description: "Descrição completa do Projeto 2. Este projeto faz ABC.",
      images: [
        { src: "assets/project2/image1.png", caption: "Imagem 1 do Projeto 2" },
        { src: "assets/project2/image2.png", caption: "Imagem 2 do Projeto 2" }
      ]
    },
    project3: {
      title: "Projeto 3",
      description: "Descrição completa do Projeto 3. Este projeto faz DEF.",
      images: [
        { src: "assets/project3/image1.png", caption: "Imagem 1 do Projeto 3" },
        { src: "assets/project3/image2.png", caption: "Imagem 2 do Projeto 3" }
      ]
    }
  };
  
  function openPopup(projectId) {
    const project = projectData[projectId];

    // Verifica se o projeto existe
    if (!project) {
        console.error(`Projeto com ID "${projectId}" não encontrado no projectData`);
        return;
    }

    const popup = document.getElementById("popup");
    const title = document.getElementById("popup-title");
    const description = document.getElementById("popup-description");
    const skillsContainer = document.getElementById("popup-skills");
    const imagesContainer = document.getElementById("popup-images");
    const date = document.getElementById("popup-date");

    // Atualiza o conteúdo do pop-up
    title.textContent = project.title;
    description.textContent = project.description;
    date.textContent = project.date;

    // Atualiza as habilidades
    skillsContainer.innerHTML = "";
    project.skills.forEach(skill => {
        const skillItem = document.createElement("li");
        skillItem.textContent = skill;
        skillsContainer.appendChild(skillItem);
    });

    // Atualiza as imagens
    imagesContainer.innerHTML = "";
    project.images.forEach(image => {
        const imageItem = document.createElement("div");
        imageItem.classList.add("image-item");

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.caption;

        const caption = document.createElement("p");
        caption.textContent = image.caption;

        imageItem.appendChild(img);
        imageItem.appendChild(caption);
        imagesContainer.appendChild(imageItem);
    });

    // Mostra o pop-up
    popup.style.display = "flex";
    popup.style.flexDirection = 'column';
    requestAnimationFrame(() => {
      popup.classList.add("show");
  });
}

function closePopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "none"; 
  popup.classList.remove("show");
  setTimeout(() => {
      popup.style.display = "none";
  }, 300);
}


function initializeEventListeners() {
  const buttons = document.querySelectorAll(".btn-primary");
  const closeButton = document.querySelector(".close-btn");
  // Adiciona o event listener a cada botão
  buttons.forEach(btn => {
      btn.addEventListener("click", (e) => {
          e.preventDefault(); // Evita comportamento padrão do link
          const projectId = btn.getAttribute("data-project");
          console.log(`Botão clicado para projeto: ${projectId}`);
          openPopup(projectId); 
      });
  });
  closeButton.addEventListener("click", () => {
    closePopup();
  });

  console.log("Event listeners adicionados aos botões");
}

