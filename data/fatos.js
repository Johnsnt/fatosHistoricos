const fatos = [
    { ano: 1920, fato: 'As mulheres ganham o direito ao voto nos EUA' },
    { ano: 1921, fato: 'O partido comunista chinês é fundado' },
    { ano: 1922, fato: 'O império britânico diminui' },
    {
        ano: 1923,
        fato: 'Ocorreu o grande terremoto na região de Kanto, no Japão'
    },
    { ano: 1924, fato: 'Joseph Stalin assume o lugar de Vladmir Lenin' },
    {
        ano: 1925,
        fato: 'O estado americano processa John Thomas Scopes por ensinar evolucionismo em uma escola do Tennessee.'
    },
    {
        ano: 1926,
        fato: 'Os EUA iniciam o seu sistema de autoestradas numeradas'
    },
    {
        ano: 1927,
        fato: 'Charles Lindbergh se torna a primeira pessoa a pilotar um avião sobre o oceano atlântico sem escalas.'
    },
    {
        ano: 1928,
        fato: 'Amelia Earhart se torna a primeira mulher a cruzar o atlântico pilotando um avião.'
    },
    {
        ano: 1929,
        fato: 'Ocorre a quebra da bolsa de valores de Nova York.'
    },
    { ano: 1930, fato: 'Ho Chi Minh funda o partido comunista do Vietnã' },
    {
        ano: 1931,
        fato: 'A construção do Empire State Building é concluída.'
    },
    {
        ano: 1932,
        fato: 'Hitler renúcia a sua cidadania austríaca e se torna alemão'
    },
    {
        ano: 1933,
        fato: 'Franklin  D. Roosvelt é eleito presidente dos Estados Unidos'
    },
    { ano: 1934, fato: 'Hitler se consolida no poder.' },
    {
        ano: 1935,
        fato: 'O presidente Franklin Roosvelt anuncia o New Deal, criando o primeiro sistema de seguro social para aposentados do país.'
    },
    {
        ano: 1936,
        fato: 'O corredor Afro-Americano Jesse Owens ganha 4 medalhas de ouro nas olimpíadas de Berlim durante o nazismo de Hitler.'
    },
    {
        ano: 1937,
        fato: 'Trabalhadores da General Motors protestam por 44 dias ocupando a fábrica da GM e conseguem uma aumento de 5% no pagamento.'
    },
    {
        ano: 1938,
        fato: 'O movimento anti-semita se inicia na Alemanha durante o Nazismo de Hitler.'
    },
    { ano: 1939, fato: 'Tem início a segunda guerra mundial' },
    { ano: 1940, fato: 'O McDonalds é fundado.' },
    { ano: 1941, fato: 'Tropas japonesas atacam a base de Pearl Harbor' },
    {
        ano: 1942,
        fato: 'Tropas americanas chegam a Irlanda do Norte para lutar na guerra da Europa.'
    },
    {
        ano: 1943,
        fato: 'O químico suíço Albert Hoffman descobre acidentalmente o LSD'
    },
    {
        ano: 1944,
        fato: 'Ocorre a invasão da Normandia pelas forças aliadas para tirar as tropas nazistas da França'
    },
    {
        ano: 1945,
        fato: 'A segunda guerra mundial termina com ataques atômicos a Hiroshima e Nagazaki, que causaram a rendição do Japão.'
    },
    {
        ano: 1946,
        fato: 'Tem início a geração Baby Boom, só em 1946 foram mais de 3.4 milhões de crianças nascidas só nos EUA.'
    },
    {
        ano: 1947,
        fato: 'A Índia consegue sua independência do império britânico, mas acaba divida e se torna duas nações, a Índia, para os Hindús e o Paquistão, para os muçulmanos.'
    },
    { ano: 1948, fato: 'Acontece o nascimento do estado de Israel' },
    {
        ano: 1949,
        fato: 'É fundada a Organização do Tratado do Atlântico Norte, a OTAN, para combater a ameaça Soviética.'
    },
    {
        ano: 1950,
        fato: 'Tem início a Guerra das Coréias, quando a Coréia do Norte invade a Coréia do Sul, despertando a resposta imediata dos Estados Unidos. A guerra dura três anos.'
    },
    {
        ano: 1951,
        fato: 'Julius e Ethel Rosenberg são condenados a morte nos EUA por espionagem, após terem vazado informações sobre bombas atômicas para a União Soviética.'
    },
    {
        ano: 1952,
        fato: 'Os Estados Unidos detonam a primeira bomba de hidrogênio.'
    },
    {
        ano: 1953,
        fato: 'Os cientistas James Watson e Francis Crick, da Universidade de Cambridge, são os primeiros a explicar o funcionamento do DNA na replicação dos genes e a sua transmissão para as futuras gerações.'
    },
    {
        ano: 1954,
        fato: 'Linda Brown vence a disputa contra o conselho de educação e a suprema corte americana julga inconstitucional a segregação racial em escolas.'
    },
    {
        ano: 1955,
        fato: 'Rosa Parks faz história ao se recursas a se levantar e dar lugar a um branco no ônibus. Sua prisão leva a um boicote a empresa e a ascenção do Pastor Martin Luther King Jr.'
    },
    {
        ano: 1956,
        fato: 'Protestos na Hungria por democracia acaba na morte de milhares após invasão do Exercito Vermelho da Comunista União Soviética.'
    },
    {
        ano: 1957,
        fato: 'O president Dwight Eisenhower ordena as tropas federais que proteja 9 alunos afro-americanos que começaram a estudar no colégio Little Rock para alunos brancos, essa foi a primeira ação do governo federal contra a segregação racial no país.'
    },
    {
        ano: 1958,
        fato: 'Os Estados Unidos lançam seu primeiro satélite, o Explorer 1.'
    },
    {
        ano: 1959,
        fato: 'Fidel Castro invade cuba e se consolida no poder, dando início a ditadura comunista.'
    },
    {
        ano: 1960,
        fato: 'O restaurante Woolworth se recusa a atender 4 jovens afro-americanos, desencadeando uma enorme onda de protestos que durou 6 meses e resultou no fim da segregação nos restaurantes.'
    },
    { ano: 1961, fato: 'Ocorre a construção do muro de Berlin' },
    {
        ano: 1962,
        fato: 'A União Soviética testa misseis em Cuba, a 145km ao sul de Miami, dando início a resposta dos EUA sob o comando de John F Kennedy. A resposta de Kennedy faz a União Soviética remover os mísseis de Cuba.'
    },
    { ano: 1963, fato: 'John F. Kennedy é assassinado.' },
    {
        ano: 1964,
        fato: 'O presidente Lyndon Johnson dá inicio a sua "Guerra à Pobreza", destacando a necessidade de reduzir a probreza, acabar acabar com a segregação racial e cuidar da saúde dos idosos do país. Lyndon Johnson criou ainda o ato dos direitos civis no mesmo ano.'
    },
    {
        ano: 1965,
        fato: 'O assassinato de Jimmy Lee Jackson pelas tropas do Alabama desencadeia uma passeata em protesto. O evento ficou conhecido como Domingo Sangrento.'
    },
    {
        ano: 1966,
        fato: 'Mao Zedong inicia o extermínio de seus rivais políticos. O líder comunista enviou diversos opositores para campos de reeducação e trabalho forçado, e assassinou diversos outros que se opuseram ao seu governo.'
    },
    {
        ano: 1967,
        fato: 'Acontece a guerra dos seis dias. Síria, Jordânia, Iraque e Egito atacam Israel, a guerra termina em 6 dias, com um cessar fogo após Israel ocupar areas importantes dos 4 países.'
    },
    { ano: 1968, fato: 'Martin Luther King é assassinado.' },
    {
        ano: 1969,
        fato: 'Neil Armstrong, Buzz Aldrin e Michael Collins são as primeiras pessoas a pisarem na lua'
    },
    {
        ano: 1970,
        fato: 'A guerra na ásia aumenta e desperta protestos anti-guerra nos Estados Unidos dado o involvimento do país no continente.'
    },
    {
        ano: 1971,
        fato: 'New York Times publica documentos sobre o envolvimento do governo amerino na guerra do Vietnã'
    },
    {
        ano: 1972,
        fato: 'O Presidente Anti-Comunista Richard Nixon faz sua primeira viagem oficial a China, com o objetivo de melhorar a relação entre os dois países.'
    },
    {
        ano: 1973,
        fato: 'A suprema corte define que os estados podem impedir o aborto a partir do terceiro trimestre de gestação, exceto quando a gestação oferece risco a vida da mulher.'
    },
    {
        ano: 1974,
        fato: 'O presidente Richard Nixon Renuncia durante o processo de impeachment causado pelo escandalo de Watergate.'
    },
    {
        ano: 1975,
        fato: 'Dois anos depois as últimas tropas americanas deixarem o Vietnã, as tropas comunistas capturam Saigon.'
    },
    {
        ano: 1976,
        fato: 'Dois jatos super-sônicos Concorde levatam voo simultâneamente. Um partindo de Londres para o Barein, e outro de Paris, para o Rio de Janeiro.'
    },
    {
        ano: 1977,
        fato: 'Os primeiros computadores pessoais modernos começam a surgir'
    },
    {
        ano: 1978,
        fato: 'Mais de 900 pessoas morrem em um suícidio em massa promovido por um culto em Jonestown, promovido por Jim Jones.'
    },
    { ano: 1979, fato: 'O Irã se torna uma república islâmica' },
    {
        ano: 1980,
        fato: 'Ronald Reagan é eleito presidente dos Estados Unidos.'
    },
    { ano: 1981, fato: 'Surge a AIDS nos Estados Unidos' },
    {
        ano: 1982,
        fato: 'Governo Mexicano diz a reserva federal dos Estados Unidos que o país não consegue pagar o empréstimo de 80 bilhões de dólares.'
    },
    { ano: 1983, fato: 'Acontece o nascimento da Internet' },
    {
        ano: 1984,
        fato: 'Desastre químico em Bophal, India, afeta mais de 600 mil pessoas, matando mais de 15 mil dessas. '
    },
    {
        ano: 1985,
        fato: 'Ronald Reagan se encontra com o Secretário Geral da União Soviética, Mikhail Gorbachev'
    },
    {
        ano: 1986,
        fato: 'A nave Challenger exploduiu 73 segundos após decolar do Cabo Canaveral, causando a morte de 7 astronautas.'
    },
    {
        ano: 1987,
        fato: 'A bolsa Dow Jones tem uma queda de 508 pontos, uma situação pior que a da quebra de 1929.'
    },
    {
        ano: 1988,
        fato: 'O Tenente Coronel Oliver North e o Vice Almirante John Pointdexter são indiciados por conspiração após venderem armas para o Irã a fim de facilitar a soltura de reféns americanos.'
    },
    { ano: 1989, fato: 'Acontece a queda do muro de Berlin.' },
    {
        ano: 1990,
        fato: 'Com o enfraquecimento da União Soviética e do comunismo, a Polônia dissolve o partido comunista e elege seu primeiro presidente, Lech Walesa.'
    },
    {
        ano: 1991,
        fato: 'Os Estados Unidos vão para a guerra do oriente médio após Sadam Hussain invadir o Kuait.'
    },
    {
        ano: 1992,
        fato: 'A guerra fria entre Rússia e os EUA termina semanas após o fim da União Soviética.'
    },
    { ano: 1993, fato: 'É criada a União Européia.' },
    { ano: 1994, fato: 'O site Amazon.com é lançado' },
    {
        ano: 1995,
        fato: 'Ataque terrorista acontece em Olklahoma com a explosão de um caminhão-bomba.'
    },
    { ano: 1996, fato: 'A ovelha Dolly é Clonada com sucesso' },
    {
        ano: 1997,
        fato: 'A IBM Deep Blue se tornou a primeira máquina a derrotar um campeão do Xadrez, derrotando Garry Kasparov duas vezes e empatando com ele três vezes em 6 partidas.'
    },
    { ano: 1998, fato: 'É lançado o buscador Google' },
    { ano: 1999, fato: 'A OTAN inicia sua primeira campanha militar' },
    { ano: 2000, fato: 'A estação espacial internacional é inaugurada.' },
    {
        ano: 2001,
        fato: 'As torres gêmeas do World Trade Center são derrubadas em um ataque terrorista'
    },
    {
        ano: 2002,
        fato: 'George W. Bush cria o departamento de segurança nacional.'
    },
    { ano: 2003, fato: 'Os Estados Unidos inciam os ataques ao Iraque' },
    { ano: 2004, fato: 'O Facebook é fundado' },
    { ano: 2005, fato: 'o Furacão Katrina destrói New Orleans.' },
    { ano: 2006, fato: 'Saddam Hussein é executado' },
    { ano: 2007, fato: 'Apple anuncia seu primeiro smartphone, o iPhone' },
    {
        ano: 2008,
        fato: 'O indicador Dow Jones despenca outra vez, dessa vez caindo 777 pontos.'
    },
    {
        ano: 2009,
        fato: 'Barack Obama é eleito presidente dos Estados Unidos e se torna o primeiro presidente afro-americano do país.'
    },
    {
        ano: 2010,
        fato: '11 trabalhadores morrem e 17 ficam feridos em uma explosão na costa da Lousiana em uma exploração de óleo.'
    },
    { ano: 2011, fato: 'Bin Laden é assassinado.' },
    {
        ano: 2012,
        fato: 'Cientistas do CERN descobrem uma nova partícula através do colisor de hadrons que eles acreditam ser o Bóson de Higgs, a chamada "Partícula de Deus".'
    },
    {
        ano: 2013,
        fato: 'Edward Snowden expões segredos de estado dos Estados Unidos e de governos europeus sobre espionagem de outros países.'
    },
    {
        ano: 2014,
        fato: 'O Presidente Russo Vladmir Putin orquestra anexar a Crimeia à Rússia, causando sanções dos líderes mundiais ao país.'
    },
    {
        ano: 2015,
        fato: 'A nave New Horizon se torna o primeiro objeto criado pela humanidade a passar por Plutão e observar o planeta de perto.'
    },
    {
        ano: 2016,
        fato: 'Donald Trump é eleito presidente dos Estados Unidos'
    },
    {
        ano: 2017,
        fato: 'Em um espaço de 4 semanas, 3 furações atingem os Estados Unidos, Harvey, Irma e Maria atingiram o Texas, Florida e  o Caribe'
    },
    { ano: 2018, fato: 'Queimadas destroem a Carolina do Norte' },
    {
        ano: 2019,
        fato: 'Protestos ocorrem em Hong Kong contra tentativa da China de tirar a autonomia do país.'
    },
    { ano: 2020, fato: 'Tem início a pandemia de COVID-19' },
];


exports.fatos = fatos;

// for (i = 0; i <= 100; i++) {
//     let anobase = 1920 + i;
//     let obj = {
//         "ano": anobase,
//         "fato": fatos[i]
//     };

//     console.log(obj);
// }

