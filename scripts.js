const blogs = [
    {
        id: 1,
        imgUrl: "./assets/blogsimg/pentest.jpg",
        name: "Testes de penetração e testes de vulnerabilidades",
        descr: "processo composto por uma série de testes que têm como objetivo encontrar pontos fracos e possíveis vulnerabilidades com o intuito de antecipar a ação de invasores que, ao explorar essas falhas de segurança, poderiam causar danos à empresa.",
        link: "vulnerabilities/enumeracao/testespenetracao.html"
    },
    {
        id: 2,
        imgUrl: "./assets/blogsimg/ddos.webp",
        name: "Ataques DDoS",
        descr: "ataques cibernéticos onde um invasor sobrecarrega um website, servidor ou recurso de rede com tráfego malicioso. Como resultado, o alvo trava ou não consegue operar, negando serviço a usuários legítimos e impedindo que o tráfego legítimo chegue ao seu destino.",
        link: "vulnerabilities/negacaodeservico/ddos.html"
    },
    {
        id: 6,
        imgUrl: "./assets/blogsimg/sgfisica.jpg",
        name: "Segurança Física",
        descr: "Segurança física é a forma de proteger equipamentos e informações contra usuários que não possuem autorização para acessá-los. Enquanto a segurança lógica é um conjunto de recursos executados para proteger o sistema, dados e programas contra tentativas de acessos de pessoas ou programas desconhecidos.",
        link: "mecanismosdeseguranca/segurancaambientefisico.html"
    },
    {
        id: 7,
        imgUrl: "./assets/blogsimg/sglogica.jpg",
        name: "Segurança Lógica",
        descr: "Esse tipo de proteção controla o acesso a aplicativos, dados, sistemas operacionais, senhas e arquivos de log por meio de firewalls de hardwares e softwares, criptografia, antivírus e outras aplicações contra hackers e possíveis invasões às fontes internas da empresa.",
        link: "mecanismosdeseguranca/segurancaambientelogico.html"
    },
    {
        id: 8,
        imgUrl: "./assets/blogsimg/engenhariasocial.png",
        name: "Engenharia Social",
        descr: " é uma técnica de manipulação que explora erros humanos para obter informações privadas, acessos ou coisas de valor. No crime cibernético, esses golpes de 'hacking humano' tendem a atrair usuários desavisados para expor dados, espalhar infecções por malware ou dar acesso a sistemas restritos.",
        link: "vulnerabilities/engenhariasocial.html"
    },
    {
        id: 9,
        imgUrl: "./assets/blogsimg/sqlinjection.webp",
        name: "Sql Injection",
        descr: " é um ataque que consiste na inserção de uma query via aplicação web. A Locaweb sempre toma todas as precauções em relação a atualizações para evitar quaisquer brechas de segurança nos sites hospedados. Tais vulnerabilidades estão presentes em códigos (ASP, PHP, etc.) colocados pelos próprios clientes.",
        link: "vulnerabilities/negacaodeservico/injectionsql.html"
    },
    {
        id: 10,
        imgUrl: "./assets/blogsimg/dos.jpg",
        name: "Ataques DoS",
        descr: "ataque de negação de serviço, é uma tentativa de tornar os recursos de um sistema indisponíveis para os seus utilizadores. Alvos típicos são servidores web, e o ataque procura tornar as páginas hospedadas indisponíveis na rede. Não se trata de uma invasão do sistema, mas sim da sua invalidação por sobrecarga.",
        link: "vulnerabilities/negacaodeservico/dos.html"
    },
    {
        id: 11,
        imgUrl: "./assets/blogsimg/hacking.jpg",
        name: "Coleta de informações/análise",
        descr: "Hackear, ou hacking cibernético, é a ação de obter acesso não autorizado a um dispositivo digital, sistema de computador ou rede de computadores, através de meios não convencionais ou ilícitos.",
        link: "vulnerabilities/negacaodeservico/analisevarredura.html"
    },
    {
        id: 12,
        imgUrl: "./assets/blogsimg/cartilha.jpg",
        name: "Cartilha de segurança para internet(CERT.BR)",
        descr: "A Cartilha de Segurança para Internet é composta por um conjunto de documentos com recomendações e dicas sobre como o usuário de Internet deve se comportar para aumentar a sua segurança e se proteger de possíveis ameaças.",
        link: "vulnerabilities/negacaodeservico/analisevarredura.html"
    },
    {
        id: 13,
        imgUrl: "./assets/blogsimg/ransomware.png",
        name: "Ransomware",
        descr: "A Cartilha de Segurança para Internet é composta por um conjunto de documentos com recomendações e dicas sobre como o usuário de Internet deve se comportar para aumentar a sua segurança e se proteger de possíveis ameaças.",
        link: "vulnerabilities/negacaodeservico/ransomware.html"
    },
    {
        id: 3,
        imgUrl: "./assets/blogsimg/regulatoria.jpg",
        name: "Política Regulatória",
        descr: "Regulatória em TI é fundamental para garantir que as empresas estejam operando de acordo com as leis e regulamentos aplicáveis ao seu setor.",
        link: "politicasregulatorias/regulatoria.html"
    },
    {
        id: 4,
        imgUrl: "./assets/blogsimg/consultiva.jpg",
        name: "Política Consultiva",
        descr: "Este tipo de política visa fornecer orientação e aconselhamento sobre práticas e procedimentos de segurança da informação.Geralmente, não é vinculativo, mas sim recomendativo, permitindo flexibilidade para adaptar as práticas de segurança às necessidades específicas da organização.",
        link: "politicasregulatorias/consultiva.html"
    },
    {
        id: 5,
        imgUrl: "./assets/blogsimg/informativa.jpg",
        name: "Política Informativa",
        descr: "se concentra na comunicação eficaz de informações relacionadas à segurança da informação dentro da organização.Pode incluir instruções detalhadas sobre como lidar com informações confidenciais, requisitos de conformidade, responsabilidades dos funcionários e consequências para o não cumprimento das políticas.",
        link: "politicasregulatorias/informativa.html"
    },
];

const overlayDiv = document.querySelector('.overlay-blogs');

blogs.forEach(blog => {
    const blogDiv = document.createElement('div');
    blogDiv.classList.add('blogs-items');

    const blogLink = document.createElement('a');
    blogLink.href = blog.link;

    const blogImg = document.createElement('img');
    blogImg.src = blog.imgUrl;
    blogImg.alt = blog.name;

    const blogTitle = document.createElement('h1');
    blogTitle.textContent = blog.name;

    const blogDescr = document.createElement('p');
    blogDescr.textContent = blog.descr;

    blogLink.appendChild(blogImg);
    blogLink.appendChild(blogTitle);
    blogLink.appendChild(blogDescr);
    blogDiv.appendChild(blogLink);
    overlayDiv.appendChild(blogDiv);
});