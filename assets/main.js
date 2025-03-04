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
    },
    project3: {
      title: "Segmentação de Clientes",
      description: "Neste projeto estudamos várias maneiras diferentes de fazer a segmentação de um grupo de clientes de um serviço de food delivery, baseado em um histórico de 10.000 de pedidos. Os dados são transformados, métricas como inércia e WCSS(Within-Cluster Sum of Square) de vários modelos de KMeans, um dos algoritmos mais famoso de clusterização. Agrupando clientes em grupos similares podemos criar campanhas personalizadas de marketing, aumentando a eficiência de propagandas e promoções sobre grupos específicos de clientes.",
      skills: ["KMeans", "Python", "Clusterização", "Aprendizado não Supervisionado", "Marketing Analytics"],
      date: "Fev 23, 2025",
      images: [
        { src: "assets/marketing_analytics/dataset.png", title: 'Conjunto de dados estudado', caption: "Breve visualização do dataset para entendimento inicial da estrutura/organização dos dados." },
        { src: "assets/marketing_analytics/pizzas_per_location.png", title: 'Distribuição de pedidos de pizza por Localidade', caption: "Um total de 9 localidades diferentes foi observado, havendo claramente duas com um número maior de pedidos do que o restante. Uma investigação mais detalhada precisa ser conduzida." },
        { src: "assets/marketing_analytics/reg_plot.png", title: 'Regression plot', caption: "Podemos observar claras tendências entre certos pares de variáveis. Pedidos com maior quantidade de pizzas tendem a ter uma maior quantidade de bedidas e sobremesas, enquanto que as saladas são menos escolhidas para estes pedidos com pizza." },
        { src: "assets/marketing_analytics/models_metrics.png", title: 'Métricas', caption: "Valores de Inércia e WCSS para várias combinações de modelos, tanto em número de clusters, quanto em variáveis. Essas são duas métricas bem comuns para analisar algoritmos de clusterização, entende-se que quanto maior a similirade entre os indivíduos de cada grupo, melhor foi feita a categorização." },
        { src: "assets/marketing_analytics/pizza_desert_2_clusters_cluster.png", title: '2 Clusters para Pizza e Sobremesa', caption: "Aqui podemos ver um exemplo de agrupamento binário, categorizando os indivíduos baseado no número de pizzas e sobremesas em seus pedidos." },
        { src: "assets/marketing_analytics/pizza_salad_3_clusters_cluster.png", title: '3 Clusters para Pizza e Salada', caption: "Mudando um pouco a perspectiva analisamos a divisão em 3 clusters, dessa vez separando por quantidade de pizzas e saladas nos pedidos." },
        { src: "assets/marketing_analytics/pizza_location_4_clusters_clusters.png", title: '4 Clusters para Pizza e Localização', caption: "Aumentando a complexidade do modelo subimos o número de cluster para 4 neste modelo." },
        { src: "assets/marketing_analytics/modelo_3d.png", title: '', caption: "A visualização se torna cada vez mais complicada com o aumento do número de variáveis entendidas pelo KMeans, usando-se 3 dimensões podemos enxergar a divisão em uma projeção deste tipo. " },
        { src: "assets/marketing_analytics/modelo_final.png", title: '', caption: "Para todos os modelos citados acima foram explorados não apenas n° variáveis e clusters, mas também diferentes algortimos de divisão e inicialização. O modelo final para este projeto é o representado na imagem, levando em consideração quantidade de pizzas, saladas, e sobremesas. Com apenas 2 clusters e utilizando o algoritmo elkan e o método kmeans++ para inicialização do centróide" }
        
      ]
    },
    project4: {
      title: "Teste AB",
      description: "Vamos estudar o efeito que um determinado elemento em uma página de vendas de um E-Commerce produz sobre a taxa de conversão de seus clientes. O elemento em questão são as avaliações do produto em questão. Queremo analisar se a observação das avaliação pelos clientes tem alguma influência na decisão de compra dos produtos. Uma amostra de 55.000 registros foi analisada, e os resultados claramente comprovam que a visualização das avaliações possui um impacto negativo para o negócio, diminuindo a taxa de conversão de clientes neste caso.",
      skills: ["Teste AB", "Python", "Estatística", "Teste de Hipóteses", "Business Analytics"],
      date: "Fev 24, 2025",
      images: [
        { src: "assets/AB_test/summary.png", title: 'Resumo dos dados', caption: "Breve resumo sobre os dados. Nota-se um claro desbalanceamento entre as variantes A e B, isso é muito comum nesse tipo de cenário pois muitas vezes a variante de teste tem algum custo atrelado, ou mesmo pode afetar negativamente os clientes de seu grupo. O tamanho ideal deve sempre ser levado em consideração. Olhando mais a fundo, percebe-se que taxa de conversão de clientes da variante B aparenta ser realmente maior do que o grupo de controle. Mas como podemos comprovar isso?" },
        { src: "assets/AB_test/pmfs.png", title: '', caption: "Plotamos as funções massa de probabilidade, em azul o grupo de controle, e em vermelho o grupo de teste. O gráfico nos dá ainda mais certeza da suposição comentada acima, porém, não nos comprova estatísticamente o fato. Precisamos ajustar essas funções para que se tornem distribuição Gaussianas adequadas, ou seja, vamos aplicar transformações aos dados para garantir que estejam na mesma escala de comparação." },
        { src: "assets/AB_test/normal_distributions.png", title: 'Distribuições ajustadas para Normal', caption: "Finalmente ao ajustar ambas as funções para uma distribuição normal podemos inferir algo sobre a diferença entre as observações. Nossa hipótese nula afirma que não há diferença entre a taxa de conversão média observada entre as duas populações. Usando um intervalo de confiança de 95% para essa hipótese podemos rejeitá-la com facilide, devido ao valor-p baixíssimo e com um poder estatístico altíssimo. Podemos seguir com confiança para a equipe de negócios pois conseguimos comprovar as nossas suposições." }
      ]
    },
  
    project5: {
      title: "Análise de negócio",
      description: "Neste projeto foi definido uma séries de indicadores-chave para uma empresa do setor de varejo. Foi construída uma visão de Business Intelligence (BI) para acompanhar o faturamento e base de clientes. Os dados podem ser encontrados no meu GitHub. Com os dados estruturados, foram gerados indicadores como faturamento mensal, crescimento percentual da receita, total de clientes ativos, taxa de retenção e aquisição, além da comparação entre clientes novos e antigos. As visualizações criadas permitiram identificar padrões sazonais, impacto de campanhas promocionais e tendências de mercado. A partir dos insights obtidos a empresa teria maior clareza na tomada de decisão, otimizando estratégias de retenção e aquisição de clientes, além de entender melhor o impacto de ações comerciais ao longo do tempo. Além disso, é possível a geração de um dashboard interativo com ferramentas como PowerBI para acompanhamento dinâmico dos KPIs em tempos futuros.",
      skills: ["Business Intelligence", "Python", "Análise de Negócios", "KPIs", "Análise de Dados"],
      date: "March 04, 2025",
      images: [
        { src: "assets/flea_mkt_BI/faturamento_mensal.png", title: 'Faturamento mensal', caption: "O primeiro indicador a ser avaliado em qualquer empresa do mundo. Faturamento mensal. O objetivo final de toda empresa e a base de todo plano de ação." },
        { src: "assets/flea_mkt_BI/active_clients.png", title: 'Total de clientes ativos', caption: "Um dos indicadores mais simples que podemos analisar em praticamente qualquer tipo de negócio. O total de clientes ativos é um indicador universal no ramo empresarial" },
        { src: "assets/flea_mkt_BI/brasil_revenue.png", title: 'Faturamento de um país de exemplo (Brasil)', caption: "Podemos acompanhar o faturamento mensal de um país de exemplo, neste caso, Brasil. Podemos observar um comportamento curioso, mas esperado, nos meses de novembro e dezembro. Claramente há um pico no primeiro e uma redução gigantesca no último. Vários fatores podem causar este efeito, como promoções (Black Friday) e ocorrência de viagens ao final de ano." },
        { src: "assets/flea_mkt_BI/perc_growth.png", title: 'Crescimento percentual do faturamento', caption: "Crescimento percentual do faturamento. Pode ser um bom indicativo de planos de ação (campanhas de marketing, descontos, lançamento de novos produtos) tomados anteriormente, e também para observação de tendências na variação do faturamento." },
        { src: "assets/flea_mkt_BI/new_old_customer_revenue.png", title: 'Comparação de faturamento entre clientes novos e antigos', caption: "Comparação da geração de receita entre clientes novos e antigos. Um ótimo recurso para auxiliar na tomada de decisão. Evidencia a importância de ações de retenção neste caso." },
        { src: "assets/flea_mkt_BI/customer_retention_rate.png", title: 'Taxa de retenção de clientes', caption: "Outro indicador crucial para várias empresas é a retenção de clientes. Manter uma pessoa como cliente pode ser tão importante quanto conseguir um cliente novo. Ainda mais neste caso onde clientes antigos tendem a gerar um faturamento maior do que clientes novos." },
        { src: "assets/flea_mkt_BI/new_customers_rate.png", title: 'Taxa de ganho de clientes', caption: "Quantidade de clientes novos para cada cliente antigo. Pode ser um bom indicativo de resultados de campanhas de marketing, ou de ações de retenção." }    
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

