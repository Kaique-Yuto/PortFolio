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
      my_role: 'Data Scientist',
      skills: ["Machine Learning", "Python", "Statistics", "Data Analysis", "Data Visualization"],
      date: "Jan 8, 2025",
      images: [
        { src: "assets/purchase_intention/output.png", title: 'Box-plots of continuous variables', caption: "All variables are analyzed for future insights on optimizing training by applying scaling transformations." },
        { src: "assets/purchase_intention/correlation_matrix.png", title: 'Correlation matrix', caption: "Correlation analysis may help on feature selection and understanding our target variable behavior." },
        { src: "assets/purchase_intention/countplot.png", title: 'Revenue distribution', caption: "Revenue distribution indicates that balacing methods need to be applied before proceding."},
        { src: "assets/purchase_intention/other_plots.png", title: 'Customers summary', caption: "Here are some useful information on the customers, this may help on customized offers/actions."},
        { src: "assets/purchase_intention/model comparison.png", title: 'Models results table', caption: "Here are some models comparison, we can choose one based on preferred metric/combination."},
        { src: "assets/purchase_intention/model_comparison.png", title: 'Models results comparison', caption: "We can see their performances in a more visual manner."},
        { src: "assets/purchase_intention/confusion_matrix.png", title: 'Confusion Matrix for Version 3', caption: "Choosing Version 3 as an example, we can plot it's confusion matrix so we can see the predictions X ground truth for the 6245 testing points."},
      ]
    },
    project2: {
      title: "Prevendo Taxa de Juros",
      description: `
      Neste projeto tentaremos estimar a Taxa de Juros para os anos de 2024 e 2025 usando uma rede neural de arquitetura Long Short-Term Memory (LSTM) é treinada para tentar modelar o comportamento da Taxa Anual de Juros, usando uma abordagem de séries temporais. Foi considerado que os últimos 3 anos são influentes no próximo valor de Taxa de Juros, e o restante dos atributos foram descartados. O Dataset utilizado é fictício e contém dados anuais de 1970 até 2023.
      `,
      my_role: 'Data Scientist',
      skills: ["Deep Learning", "Python", "Análise de Séries Temporais", "TensorFlow", "Modelagem de Dados"],
      date: "Fev 16, 2025",
      images: [
        { src: "assets/predicting_inflation_rates/historical_data.png", title: '', caption: "Ao observar a Taxa Anual de Juros podemos notar um comportamento típico de série temporal, mas sem uma periodicidade clara. Tentaremos modelar este comportamento neste projeto usando uma rede neural LSTM." },
        { src: "assets/predicting_inflation_rates/training_loss.png", title: '', caption: "A figura mostra o erro do modelo durante o seu treinamento, alguns valores de épocas foram testados e notou-se um aumento na função de erro após cerca de 40 épocas"},
        { src: "assets/predicting_inflation_rates/training_test_data.png", title: '', caption: "Podemos observar que um certo padrão foi aprendio pelo modelo, apesar de que, na prática, a Taxa de Inflação parece ser muito mais volátil do que o comportamento aprendido."},
        { src: "assets/predicting_inflation_rates/summary.png", title: '', caption: "Aqui estão algumas métricas usadas para avaliar a performance do modelo, bem como as previsões para os anos de 2024 e 2025 "}
        
      ]
    }

    /*
    project2: {
      title: "Projeto 2",
      description: "Descrição completa do Projeto 2. Este projeto faz ABC.",
      images: [
        { src: "assets/project2/image1.png", title: '', caption: "Imagem 1 do Projeto 2" },
        { src: "assets/project2/image2.png", title: '', caption: "Imagem 2 do Projeto 2" }
      ]
    },
    project3: {
      title: "Projeto 3",
      description: "Descrição completa do Projeto 3. Este projeto faz DEF.",
      images: [
        { src: "assets/project3/image1.png", title: '', caption: "Imagem 1 do Projeto 3" },
        { src: "assets/project3/image2.png", title: '', caption: "Imagem 2 do Projeto 3" }
      ]
    }
    /*
    -----------------------------------Exemplo de inclusão de novo projeto
    projectX: {      //------>Deve ser o mesmo de index.html
          title: "Project Title",
          description: `
          Project full description
          `,
          my_role: 'Data Scientist',
          skills: ["Machine Learning", "Python", "Statistics", "Data Analysis", "Data Visualization"],
          date: "Jan 8, 2025",
          images: [
            { src: "assets/purchase_intention/output.png", title: 'Box-plots of continuous variables', caption: "All variables are analyzed for future insights on optimizing training by applying scaling transformations." },
            { src: "assets/purchase_intention/correlation_matrix.png", title: 'Correlation matrix', caption: "Correlation analysis may help on feature selection and understanding our target variable behavior." },

          ]
        },
    -----------------------------------Exemplo de inclusão de novo projeto
    */
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

        const imgtitle = document.createElement("p");
        imgtitle.textContent = image.title;
        imgtitle.className = 'img-title'
        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.caption;

        const caption = document.createElement("p");
        caption.textContent = image.caption;
        caption.className = 'img-caption'
        imageItem.appendChild(imgtitle);
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
  const buttons = document.querySelectorAll(".card-img-top");
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

