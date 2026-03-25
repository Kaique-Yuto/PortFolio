let currentLang = 'pt';

// ─── Traduções dos elementos estáticos ───────────────────────────────────────
const translations = {
  pt: {
    'nav.home':    'Início',
    'nav.projects':'Projetos',
    'nav.resume':  'Currículo',

    'hero.summary': 'Cientista de Dados e Engenheiro Mecânico.',

    'hero.bio': `Olá! Sou um estudante de Ciência de Dados e trabalho como Analista
            de Ciência de Dados II pela <a href="https://animaeducacao.com.br/" class="text-hyperlink">
            Ânima Educação</a>, desde 2025. Possuo um bacharel em Engenharia Mecânica pela
            <a href="https://www.uem.br/" class="text-hyperlink">Universidade Estadual de Maringá - UEM</a>
            e sou Cientista de Dados certificado pela <a href="https://www.datascienceacademy.com.br/"
            class="text-hyperlink">Data Science Academy</a>. Sou apaixonado por jogos eletrônicos, de estratégia,
            e também por ciência e matemática. Nas horas livres gosto de cozinhar e passar um tempo com meus amigos.
            Se você gostaria de conversar comigo sobre Dados, programação, ou qualquer assunto interessante, por favor, não deixe
            de me enviar uma mensagem pelas redes sociais abaixo!`,

    'projects.title': 'Alguns Projetos',

    'card.project1.title': 'Prevendo intenções de compra',
    'card.project1.desc':  'Construindo modelos SVM para prever a intenção de compra de clientes de um E-commerce.',
    'card.project2.title': 'Prevendo Taxa de Juros',
    'card.project2.desc':  'Construindo uma rede neural LSTM para previsão de Taxa de Juros anual.',
    'card.project3.title': 'Segmentação de Clientes',
    'card.project3.desc':  'Agrupando clientes de um food delivery para campanhas personalizadas de marketing.',
    'card.project4.title': 'Teste AB',
    'card.project4.desc':  'Observando efeito da presença de Reviews em site de E-Commerce.',
    'card.project5.title': 'Análise de negócio',
    'card.project5.desc':  'Acompanhando vários indicadores para uma loja da rede de varejo.',

    'popup.desc_header':   'Descrição do Projeto',
    'popup.skills_header': 'Habilidades e Entregas',
    'popup.published':     'Publicado em',

    'footer.text': `*Tenha em mente que esta página web está constantemente em desenvolvimento. Caso perceba quaisquer
             inconsistências, por favor, entre em contato pelas redes sociais acima ou me mande um e-mail!
             <a href="mailto:kaiqueyuto1@gmail.com" class="email" style="color: white;"><strong>kaiqueyuto1@gmail.com</strong></a>`,
  },

  en: {
    'nav.home':    'Home',
    'nav.projects':'Projects',
    'nav.resume':  'Resume',

    'hero.summary': 'Data Scientist and Mechanical Engineer.',

    'hero.bio': `Hello! I'm a Data Science student and work as a Data Science Analyst II at
            <a href="https://animaeducacao.com.br/" class="text-hyperlink">Ânima Educação</a>
            since 2025. I hold a Bachelor's degree in Mechanical Engineering from the
            <a href="https://www.uem.br/" class="text-hyperlink">Universidade Estadual de Maringá - UEM</a>
            and am a certified Data Scientist by <a href="https://www.datascienceacademy.com.br/"
            class="text-hyperlink">Data Science Academy</a>. I'm passionate about electronic games, strategy games,
            and also about science and mathematics. In my free time I enjoy cooking and spending time with my friends.
            If you'd like to talk to me about Data, programming, or any interesting topic, please don't hesitate
            to send me a message on the social media below!`,

    'projects.title': 'Some Projects',

    'card.project1.title': 'Predicting Purchase Intentions',
    'card.project1.desc':  'Building SVM models to predict the purchase intention of e-commerce customers.',
    'card.project2.title': 'Predicting Interest Rates',
    'card.project2.desc':  'Building an LSTM neural network to predict the annual interest rate.',
    'card.project3.title': 'Customer Segmentation',
    'card.project3.desc':  'Grouping food delivery customers into segments for personalized marketing campaigns.',
    'card.project4.title': 'A/B Test',
    'card.project4.desc':  'Observing the effect of product reviews on an E-Commerce website\'s conversion rate.',
    'card.project5.title': 'Business Analysis',
    'card.project5.desc':  'Tracking various KPIs for a retail chain store.',

    'popup.desc_header':   'Project Description',
    'popup.skills_header': 'Skills and Deliverables',
    'popup.published':     'Published on',

    'footer.text': `*Keep in mind that this webpage is constantly under development. If you notice any
             inconsistencies, please reach out through the social media above or send me an email!
             <a href="mailto:kaiqueyuto1@gmail.com" class="email" style="color: white;"><strong>kaiqueyuto1@gmail.com</strong></a>`,
  },
};

// ─── Dados dos projetos (bilingues) ──────────────────────────────────────────
const projectData = {
  project1: {
    title: {
      pt: 'Prevendo intenções de compra',
      en: 'Predicting Purchase Intentions',
    },
    description: {
      pt: `O projeto consiste na construção de um modelo preditivo, mais especificamente, um classificador SVM, que prevê as intenções de compra para uma empresa. Diversos atributos foram analisados e utilizados como dados de treinamento para o modelo (ver imagens). O conjunto de dados é amplamente conhecido e pode ser encontrado em https://archive.ics.uci.edu/dataset/468/online+shoppers+purchasing+intention+dataset. Várias combinações de modelos SVM foram pesquisadas com GridSearch e também diferentes funções de kernel foram testadas. Cinco métricas de desempenho foram calculadas para 6245 previsões em novos pontos de dados. Alguns modelos alcançaram mais de 83% em todas as métricas.`,
      en: `The project consists of building a predictive model — specifically an SVM classifier — that predicts purchase intentions for a company. Several attributes were analyzed and used as training data for the model (see images). The dataset is widely known and can be found at https://archive.ics.uci.edu/dataset/468/online+shoppers+purchasing+intention+dataset. Various SVM model combinations were searched with GridSearch and different kernel functions were tested. Five performance metrics were calculated for 6,245 predictions on new data points. Some models achieved over 83% across all metrics.`,
    },
    my_role: 'Data Scientist',
    skills: {
      pt: ['Machine Learning', 'Python', 'Estatística', 'Análise de Dados', 'Visualização de Dados'],
      en: ['Machine Learning', 'Python', 'Statistics', 'Data Analysis', 'Data Visualization'],
    },
    date: 'Jan 8, 2025',
    images: [
      {
        src: 'assets/purchase_intention/output.png',
        title:   { pt: 'Box-plots de variáveis contínuas',          en: 'Box-plots of continuous variables' },
        caption: { pt: 'Análise de variáveis para otimizar o treinamento com transformações de escala.',
                   en: 'Variable analysis to optimize training by applying scaling transformations.' },
      },
      {
        src: 'assets/purchase_intention/correlation_matrix.png',
        title:   { pt: 'Matriz de correlação',   en: 'Correlation matrix' },
        caption: { pt: 'Análise de correlação auxilia na seleção de features e entendimento da variável alvo.',
                   en: 'Correlation analysis helps with feature selection and understanding the target variable behavior.' },
      },
      {
        src: 'assets/purchase_intention/countplot.png',
        title:   { pt: 'Distribuição de receita', en: 'Revenue distribution' },
        caption: { pt: 'A distribuição de receita exige balanceamento antes de prosseguir.',
                   en: 'The revenue distribution requires balancing before proceeding.' },
      },
      {
        src: 'assets/purchase_intention/other_plots.png',
        title:   { pt: 'Resumo de clientes', en: 'Customer summary' },
        caption: { pt: 'Informações úteis sobre clientes, auxiliando em ofertas e ações personalizadas.',
                   en: 'Useful information about customers, helping with personalized offers and actions.' },
      },
      {
        src: 'assets/purchase_intention/model comparison.png',
        title:   { pt: 'Tabela de resultados de modelos', en: 'Model results table' },
        caption: { pt: 'Comparação de modelos para seleção baseada em métricas ou combinações.',
                   en: 'Model comparison for selection based on metrics or combinations.' },
      },
      {
        src: 'assets/purchase_intention/model_comparison.png',
        title:   { pt: 'Comparativo de resultados de modelos', en: 'Model results comparison' },
        caption: { pt: 'Visualização do desempenho dos modelos de forma mais clara.',
                   en: 'Visualization of model performance in a clearer way.' },
      },
      {
        src: 'assets/purchase_intention/confusion_matrix.png',
        title:   { pt: 'Matriz de Confusão para Versão 3', en: 'Confusion Matrix for Version 3' },
        caption: { pt: 'Exemplo da Versão 3, com sua matriz de confusão para previsões X real de 6245 pontos de teste.',
                   en: 'Example of Version 3, with its confusion matrix for 6,245 test data point predictions vs. actual.' },
      },
    ],
  },

  project2: {
    title: {
      pt: 'Prevendo Taxa de Juros',
      en: 'Predicting Interest Rates',
    },
    description: {
      pt: `Neste projeto tentaremos estimar a Taxa de Juros para os anos de 2024 e 2025 usando uma rede neural de arquitetura Long Short-Term Memory (LSTM) é treinada para tentar modelar o comportamento da Taxa Anual de Juros, usando uma abordagem de séries temporais. Foi considerado que os últimos 3 anos são influentes no próximo valor de Taxa de Juros, e o restante dos atributos foram descartados. O Dataset utilizado é fictício e contém dados anuais de 1970 até 2023.`,
      en: `In this project we attempt to estimate the Interest Rate for 2024 and 2025 using a Long Short-Term Memory (LSTM) neural network trained to model the behavior of the Annual Interest Rate, using a time series approach. It was assumed that the last 3 years are influential in the next Interest Rate value, and the remaining attributes were discarded. The dataset used is fictional and contains annual data from 1970 to 2023.`,
    },
    my_role: 'Data Scientist',
    skills: {
      pt: ['Deep Learning', 'Python', 'Análise de Séries Temporais', 'TensorFlow', 'Modelagem de Dados'],
      en: ['Deep Learning', 'Python', 'Time Series Analysis', 'TensorFlow', 'Data Modeling'],
    },
    date: 'Fev 16, 2025',
    images: [
      {
        src: 'assets/predicting_inflation_rates/historical_data.png',
        title:   { pt: '', en: '' },
        caption: { pt: 'Ao observar a Taxa Anual de Juros podemos notar um comportamento típico de série temporal, mas sem uma periodicidade clara. Tentaremos modelar este comportamento neste projeto usando uma rede neural LSTM.',
                   en: 'Observing the Annual Interest Rate, we can notice typical time series behavior, but without a clear periodicity. We will attempt to model this behavior using an LSTM neural network.' },
      },
      {
        src: 'assets/predicting_inflation_rates/training_loss.png',
        title:   { pt: '', en: '' },
        caption: { pt: 'A figura mostra o erro do modelo durante o seu treinamento, alguns valores de épocas foram testados e notou-se um aumento na função de erro após cerca de 40 épocas.',
                   en: 'The figure shows the model\'s error during training; several epoch values were tested and an increase in the error function was noticed after about 40 epochs.' },
      },
      {
        src: 'assets/predicting_inflation_rates/training_test_data.png',
        title:   { pt: '', en: '' },
        caption: { pt: 'Podemos observar que um certo padrão foi aprendido pelo modelo, apesar de que, na prática, a Taxa de Inflação parece ser muito mais volátil do que o comportamento aprendido.',
                   en: 'We can observe that a certain pattern was learned by the model, although in practice the Inflation Rate seems to be much more volatile than the learned behavior.' },
      },
      {
        src: 'assets/predicting_inflation_rates/summary.png',
        title:   { pt: '', en: '' },
        caption: { pt: 'Aqui estão algumas métricas usadas para avaliar a performance do modelo, bem como as previsões para os anos de 2024 e 2025.',
                   en: 'Here are some metrics used to evaluate the model\'s performance, as well as predictions for 2024 and 2025.' },
      },
    ],
  },

  project3: {
    title: {
      pt: 'Segmentação de Clientes',
      en: 'Customer Segmentation',
    },
    description: {
      pt: `Neste projeto estudamos várias maneiras diferentes de fazer a segmentação de um grupo de clientes de um serviço de food delivery, baseado em um histórico de 10.000 de pedidos. Os dados são transformados, métricas como inércia e WCSS (Within-Cluster Sum of Square) de vários modelos de KMeans, um dos algoritmos mais famoso de clusterização. Agrupando clientes em grupos similares podemos criar campanhas personalizadas de marketing, aumentando a eficiência de propagandas e promoções sobre grupos específicos de clientes.`,
      en: `In this project we study several different ways to segment a group of customers of a food delivery service, based on a history of 10,000 orders. Data is transformed and metrics such as inertia and WCSS (Within-Cluster Sum of Squares) are evaluated for various KMeans models — one of the most famous clustering algorithms. By grouping customers into similar segments we can create personalized marketing campaigns, increasing the efficiency of advertisements and promotions for specific customer groups.`,
    },
    my_role: 'Data Scientist',
    skills: {
      pt: ['KMeans', 'Python', 'Clusterização', 'Aprendizado não Supervisionado', 'Marketing Analytics'],
      en: ['KMeans', 'Python', 'Clustering', 'Unsupervised Learning', 'Marketing Analytics'],
    },
    date: 'Fev 23, 2025',
    images: [
      {
        src: 'assets/marketing_analytics/dataset.png',
        title:   { pt: 'Conjunto de dados estudado',                 en: 'Dataset overview' },
        caption: { pt: 'Breve visualização do dataset para entendimento inicial da estrutura/organização dos dados.',
                   en: 'Brief visualization of the dataset for an initial understanding of the data structure and organization.' },
      },
      {
        src: 'assets/marketing_analytics/pizzas_per_location.png',
        title:   { pt: 'Distribuição de pedidos de pizza por Localidade', en: 'Pizza orders by location' },
        caption: { pt: 'Um total de 9 localidades diferentes foi observado, havendo claramente duas com um número maior de pedidos do que o restante. Uma investigação mais detalhada precisa ser conduzida.',
                   en: 'A total of 9 different locations were observed, with two clearly having a higher number of orders than the rest. A more detailed investigation needs to be conducted.' },
      },
      {
        src: 'assets/marketing_analytics/reg_plot.png',
        title:   { pt: 'Regression plot', en: 'Regression plot' },
        caption: { pt: 'Podemos observar claras tendências entre certos pares de variáveis. Pedidos com maior quantidade de pizzas tendem a ter uma maior quantidade de bebidas e sobremesas, enquanto que as saladas são menos escolhidas para estes pedidos com pizza.',
                   en: 'Clear trends can be observed between certain variable pairs. Orders with more pizzas tend to have more drinks and desserts, while salads are less chosen alongside pizza orders.' },
      },
      {
        src: 'assets/marketing_analytics/models_metrics.png',
        title:   { pt: 'Métricas', en: 'Metrics' },
        caption: { pt: 'Valores de Inércia e WCSS para várias combinações de modelos, tanto em número de clusters, quanto em variáveis. Essas são duas métricas bem comuns para analisar algoritmos de clusterização.',
                   en: 'Inertia and WCSS values for various model combinations, in both number of clusters and variables. These are two common metrics for evaluating clustering algorithms.' },
      },
      {
        src: 'assets/marketing_analytics/pizza_desert_2_clusters_cluster.png',
        title:   { pt: '2 Clusters para Pizza e Sobremesa', en: '2 Clusters for Pizza and Dessert' },
        caption: { pt: 'Aqui podemos ver um exemplo de agrupamento binário, categorizando os indivíduos baseado no número de pizzas e sobremesas em seus pedidos.',
                   en: 'Here we can see an example of binary grouping, categorizing individuals based on the number of pizzas and desserts in their orders.' },
      },
      {
        src: 'assets/marketing_analytics/pizza_salad_3_clusters_cluster.png',
        title:   { pt: '3 Clusters para Pizza e Salada', en: '3 Clusters for Pizza and Salad' },
        caption: { pt: 'Mudando um pouco a perspectiva analisamos a divisão em 3 clusters, dessa vez separando por quantidade de pizzas e saladas nos pedidos.',
                   en: 'Shifting perspective, we analyze a 3-cluster split, this time separating by the number of pizzas and salads in orders.' },
      },
      {
        src: 'assets/marketing_analytics/pizza_location_4_clusters_clusters.png',
        title:   { pt: '4 Clusters para Pizza e Localização', en: '4 Clusters for Pizza and Location' },
        caption: { pt: 'Aumentando a complexidade do modelo subimos o número de clusters para 4 neste modelo.',
                   en: 'Increasing the model complexity, we raise the number of clusters to 4 in this model.' },
      },
      {
        src: 'assets/marketing_analytics/modelo_3d.png',
        title:   { pt: '', en: '' },
        caption: { pt: 'A visualização se torna cada vez mais complicada com o aumento do número de variáveis entendidas pelo KMeans; usando 3 dimensões podemos enxergar a divisão em uma projeção deste tipo.',
                   en: 'Visualization becomes increasingly complex as more variables are added to the KMeans model; using 3 dimensions we can see the split in this type of projection.' },
      },
      {
        src: 'assets/marketing_analytics/modelo_final.png',
        title:   { pt: '', en: '' },
        caption: { pt: 'Para todos os modelos citados acima foram explorados não apenas n° variáveis e clusters, mas também diferentes algoritmos de divisão e inicialização. O modelo final leva em consideração quantidade de pizzas, saladas, e sobremesas, com apenas 2 clusters.',
                   en: 'For all models mentioned above, not only the number of variables and clusters were explored, but also different split and initialization algorithms. The final model considers the number of pizzas, salads, and desserts, with only 2 clusters.' },
      },
    ],
  },

  project4: {
    title: {
      pt: 'Teste AB',
      en: 'A/B Test',
    },
    description: {
      pt: `Vamos estudar o efeito que um determinado elemento em uma página de vendas de um E-Commerce produz sobre a taxa de conversão de seus clientes. O elemento em questão são as avaliações do produto. Queremos analisar se a observação das avaliações pelos clientes tem alguma influência na decisão de compra dos produtos. Uma amostra de 55.000 registros foi analisada, e os resultados claramente comprovam que a visualização das avaliações possui um impacto negativo para o negócio, diminuindo a taxa de conversão de clientes neste caso.`,
      en: `We study the effect of a specific element on an E-Commerce sales page on its customer conversion rate. The element in question is product reviews. We want to analyze whether viewing reviews influences customers' purchase decisions. A sample of 55,000 records was analyzed, and the results clearly show that viewing reviews has a negative impact on the business, decreasing the customer conversion rate in this case.`,
    },
    my_role: 'Data Scientist',
    skills: {
      pt: ['Teste AB', 'Python', 'Estatística', 'Teste de Hipóteses', 'Business Analytics'],
      en: ['A/B Testing', 'Python', 'Statistics', 'Hypothesis Testing', 'Business Analytics'],
    },
    date: 'Fev 24, 2025',
    images: [
      {
        src: 'assets/AB_test/summary.png',
        title:   { pt: 'Resumo dos dados', en: 'Data summary' },
        caption: { pt: 'Breve resumo sobre os dados. Nota-se um claro desbalanceamento entre as variantes A e B, o que é muito comum nesse tipo de cenário. Olhando mais a fundo, percebe-se que a taxa de conversão da variante B aparenta ser realmente maior do que o grupo de controle. Mas como podemos comprovar isso?',
                   en: 'Brief summary of the data. A clear imbalance between variants A and B is observed, which is very common in this type of scenario. Looking closer, the conversion rate of variant B appears to be higher than the control group. But how can we prove this?' },
      },
      {
        src: 'assets/AB_test/pmfs.png',
        title:   { pt: '', en: '' },
        caption: { pt: 'Plotamos as funções massa de probabilidade, em azul o grupo de controle, e em vermelho o grupo de teste. O gráfico nos dá ainda mais certeza da suposição, porém não nos comprova estatisticamente o fato. Precisamos ajustar essas funções para que se tornem distribuições Gaussianas adequadas.',
                   en: 'We plot the probability mass functions — blue for the control group and red for the test group. The chart gives us more confidence in our assumption, but does not statistically prove it. We need to adjust these functions to become proper Gaussian distributions.' },
      },
      {
        src: 'assets/AB_test/normal_distributions.png',
        title:   { pt: 'Distribuições ajustadas para Normal', en: 'Distributions adjusted to Normal' },
        caption: { pt: 'Ao ajustar ambas as funções para uma distribuição normal podemos inferir algo sobre a diferença entre as observações. Nossa hipótese nula afirma que não há diferença entre a taxa de conversão média das duas populações. Usando um intervalo de confiança de 95% podemos rejeitá-la com facilidade, devido ao valor-p baixíssimo e ao alto poder estatístico.',
                   en: 'By adjusting both functions to a normal distribution we can infer something about the difference between the observations. Our null hypothesis states that there is no difference in the average conversion rate between the two populations. Using a 95% confidence interval we can easily reject it, due to the very low p-value and high statistical power.' },
      },
    ],
  },

  project5: {
    title: {
      pt: 'Análise de negócio',
      en: 'Business Analysis',
    },
    description: {
      pt: `Neste projeto foi definida uma série de indicadores-chave para uma empresa do setor de varejo. Foi construída uma visão de Business Intelligence (BI) para acompanhar o faturamento e base de clientes. Os dados podem ser encontrados no meu GitHub. Com os dados estruturados, foram gerados indicadores como faturamento mensal, crescimento percentual da receita, total de clientes ativos, taxa de retenção e aquisição, além da comparação entre clientes novos e antigos. As visualizações criadas permitiram identificar padrões sazonais, impacto de campanhas promocionais e tendências de mercado. A partir dos insights obtidos a empresa teria maior clareza na tomada de decisão, otimizando estratégias de retenção e aquisição de clientes.`,
      en: `In this project a series of key indicators were defined for a retail company. A Business Intelligence (BI) view was built to track revenue and the customer base. The data can be found on my GitHub. With structured data, indicators such as monthly revenue, percentage revenue growth, total active customers, retention and acquisition rates, and a comparison between new and returning customers were generated. The visualizations created allowed the identification of seasonal patterns, the impact of promotional campaigns, and market trends. From the insights obtained, the company would have greater clarity in decision-making, optimizing retention and customer acquisition strategies.`,
    },
    my_role: 'Data Scientist',
    skills: {
      pt: ['Business Intelligence', 'Python', 'Análise de Negócios', 'KPIs', 'Análise de Dados'],
      en: ['Business Intelligence', 'Python', 'Business Analysis', 'KPIs', 'Data Analysis'],
    },
    date: 'March 04, 2025',
    images: [
      {
        src: 'assets/flea_mkt_BI/faturamento_mensal.png',
        title:   { pt: 'Faturamento mensal',    en: 'Monthly revenue' },
        caption: { pt: 'O primeiro indicador a ser avaliado em qualquer empresa do mundo. Faturamento mensal — o objetivo final de toda empresa e a base de todo plano de ação.',
                   en: 'The first indicator to be evaluated in any company worldwide. Monthly revenue — the ultimate goal of every business and the basis of every action plan.' },
      },
      {
        src: 'assets/flea_mkt_BI/active_clients.png',
        title:   { pt: 'Total de clientes ativos', en: 'Total active customers' },
        caption: { pt: 'Um dos indicadores mais simples que podemos analisar em praticamente qualquer tipo de negócio. O total de clientes ativos é um indicador universal no ramo empresarial.',
                   en: 'One of the simplest indicators we can analyze in virtually any type of business. Total active customers is a universal business indicator.' },
      },
      {
        src: 'assets/flea_mkt_BI/brasil_revenue.png',
        title:   { pt: 'Faturamento de um país de exemplo (Brasil)', en: 'Revenue for an example country (Brazil)' },
        caption: { pt: 'Podemos acompanhar o faturamento mensal de um país de exemplo. Observa-se um comportamento curioso nos meses de novembro e dezembro: um pico no primeiro e uma redução expressiva no último. Vários fatores podem causar este efeito, como promoções (Black Friday) e viagens ao final de ano.',
                   en: 'We can track the monthly revenue for an example country. A curious behavior is observed in November and December: a spike in the first and a sharp drop in the last. Several factors may cause this, such as promotions (Black Friday) and year-end travel.' },
      },
      {
        src: 'assets/flea_mkt_BI/perc_growth.png',
        title:   { pt: 'Crescimento percentual do faturamento', en: 'Percentage revenue growth' },
        caption: { pt: 'Crescimento percentual do faturamento. Pode ser um bom indicativo de planos de ação tomados anteriormente e também para observação de tendências na variação do faturamento.',
                   en: 'Percentage revenue growth. It can be a good indicator of previously implemented action plans and also for observing trends in revenue variation.' },
      },
      {
        src: 'assets/flea_mkt_BI/new_old_customer_revenue.png',
        title:   { pt: 'Comparação de faturamento entre clientes novos e antigos', en: 'Revenue comparison: new vs. returning customers' },
        caption: { pt: 'Comparação da geração de receita entre clientes novos e antigos. Um ótimo recurso para auxiliar na tomada de decisão. Evidencia a importância de ações de retenção neste caso.',
                   en: 'Comparison of revenue generated by new versus returning customers. A great resource for decision-making. It highlights the importance of retention actions in this case.' },
      },
      {
        src: 'assets/flea_mkt_BI/customer_retention_rate.png',
        title:   { pt: 'Taxa de retenção de clientes', en: 'Customer retention rate' },
        caption: { pt: 'Outro indicador crucial para várias empresas é a retenção de clientes. Manter uma pessoa como cliente pode ser tão importante quanto conseguir um cliente novo — ainda mais neste caso onde clientes antigos tendem a gerar um faturamento maior.',
                   en: 'Another crucial indicator for many companies is customer retention. Keeping a person as a customer can be just as important as acquiring a new one — especially in this case where returning customers tend to generate higher revenue.' },
      },
      {
        src: 'assets/flea_mkt_BI/new_customers_rate.png',
        title:   { pt: 'Taxa de ganho de clientes', en: 'Customer acquisition rate' },
        caption: { pt: 'Quantidade de clientes novos para cada cliente antigo. Pode ser um bom indicativo de resultados de campanhas de marketing ou de ações de retenção.',
                   en: 'Number of new customers per returning customer. It can be a good indicator of marketing campaign results or retention action outcomes.' },
      },
    ],
  },
};

// ─── Lógica de idioma ─────────────────────────────────────────────────────────
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) toggleBtn.textContent = lang === 'pt' ? 'EN' : 'PT';

  const resumeLink = document.getElementById('resume-link');
  if (resumeLink) {
    if (lang === 'pt') {
      resumeLink.href     = 'assets/Kaique_Yuto_portugues.docx';
      resumeLink.download = 'Kaique_Yuto_Curriculo.docx';
    } else {
      resumeLink.href     = 'assets/Kaique_Yuto_English.docx';
      resumeLink.download = 'Kaique_Yuto_Resume.docx';
    }
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });
}

// ─── Popup ────────────────────────────────────────────────────────────────────
function openPopup(projectId) {
  const project = projectData[projectId];

  if (!project) {
    console.error(`Projeto com ID "${projectId}" não encontrado no projectData`);
    return;
  }

  const popup            = document.getElementById('popup');
  const title            = document.getElementById('popup-title');
  const description      = document.getElementById('popup-description');
  const skillsContainer  = document.getElementById('popup-skills');
  const imagesContainer  = document.getElementById('popup-images');
  const date             = document.getElementById('popup-date');

  const lang = currentLang;

  title.textContent       = project.title[lang];
  description.textContent = project.description[lang];
  date.textContent        = project.date;

  skillsContainer.innerHTML = '';
  project.skills[lang].forEach(skill => {
    const li = document.createElement('li');
    li.textContent = skill;
    skillsContainer.appendChild(li);
  });

  imagesContainer.innerHTML = '';
  project.images.forEach(image => {
    const imageItem = document.createElement('div');
    imageItem.classList.add('image-item');

    const imgtitle = document.createElement('p');
    imgtitle.textContent = image.title[lang];
    imgtitle.className = 'img-title';

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.caption[lang];

    const caption = document.createElement('p');
    caption.textContent = image.caption[lang];
    caption.className = 'img-caption';

    imageItem.appendChild(imgtitle);
    imageItem.appendChild(img);
    imageItem.appendChild(caption);
    imagesContainer.appendChild(imageItem);
  });

  popup.style.display = 'flex';
  popup.style.flexDirection = 'column';
  requestAnimationFrame(() => {
    popup.classList.add('show');
  });
}

function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('show');
  setTimeout(() => {
    popup.style.display = 'none';
  }, 300);
}

// ─── Event listeners ──────────────────────────────────────────────────────────
function initializeEventListeners() {
  document.querySelectorAll('.card-img-top').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openPopup(projectId);
    });
  });

  document.querySelector('.close-btn').addEventListener('click', closePopup);
}

// ─── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang') || 'pt';
  setLanguage(saved);

  document.getElementById('lang-toggle').addEventListener('click', () => {
    setLanguage(currentLang === 'pt' ? 'en' : 'pt');
  });

  initializeEventListeners();
});
