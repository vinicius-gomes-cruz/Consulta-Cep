const cidades = [
    "Abatia",
    "Adrianópolis",
    "Agudos do Sul",
    "Almirante Tamandaré",
    "Altamira do Paraná",
    "Alto Paraíso",
    "Alto Paraná",
    "Alto Piquiri",
    "Altonia",
    "Alvorada do Sul",
    "Amaporã",
    "Ampere",
    "Anahy",
    "Andirá",
    "Ângulo",
    "Antonina",
    "Antonio Olinto",
    "Apucarana",
    "Arapongas",
    "Arapoti",
    "Arapuã",
    "Araruna",
    "Araucária",
    "Ariranha do Ivaí",
    "Assai",
    "Assis Chateaubriand",
    "Astorga",
    "Atalaia",
    "Balsa Nova",
    "Bandeirantes",
    "Barbosa Ferraz",
    "Barra do Jacaré",
    "Barracão",
    "Bela Vista da Caroba",
    "Bela Vista do Paraíso",
    "Bituruna",
    "Boa Esperança",
    "Boa Esperança do Iguaçu",
    "Boa Ventura de São Roque",
    "Boa Vista da Aparecida",
    "Bocaiúva do Sul",
    "Bom Jesus do Sul",
    "Bom Sucesso",
    "Bom Sucesso do Sul",
    "Borrazópolis",
    "Braganey",
    "Brasilândia do Sul",
    "Cafeara",
    "Cafelândia",
    "Cafezal do Sul",
    "Califórnia",
    "Cambará",
    "Cambé",
    "Cambira",
    "Campina da Lagoa",
    "Campina do Simão",
    "Campina Grande do Sul",
    "Campo Bonito",
    "Campo do Tenente",
    "Campo Largo",
    "Campo Magro",
    "Campo Mourão",
    "Cândido de Abreu",
    "Candói",
    "Cantagalo",
    "Capanema",
    "Capitão Leônidas Marques",
    "Carambeí",
    "Carlópolis",
    "Cascavel",
    "Castro",
    "Catanduvas",
    "Centenário do Sul",
    "Cerro Azul",
    "Céu Azul",
    "Chopinzinho",
    "Cianorte",
    "Cidade Gaúcha",
    "Clevelândia",
    "Colombo",
    "Colorado",
    "Congonhinhas",
    "Conselheiro Mairinck",
    "Contenda",
    "Corbélia",
    "Cornélio Procópio",
    "Coronel Domingos Soares",
    "Coronel Vivida",
    "Corumbataí do Sul",
    "Cruz Machado",
    "Cruzeiro do Iguaçu",
    "Cruzeiro do Oeste",
    "Cruzeiro do Sul",
    "Cruzmaltina",
    "Curitiba",
    "Curiúva",
    "Diamante do Norte",
    "Diamante do Oeste",
    "Diamante do Sul",
    "Dois Vizinhos",
    "Douradina",
    "Doutor Camargo",
    "Doutor Ulysses",
    "Enéas Marques",
    "Engenheiro Beltrão",
    "Entre Rios do Oeste",
    "Esperança Nova",
    "Espigão Alto do Iguaçu",
    "Farol",
    "Faxinal",
    "Fazenda Rio Grande",
    "Fênix",
    "Fernandes Pinheiro",
    "Figueira",
    "Flor da Serra do Sul",
    "Floraí",
    "Floresta",
    "Florestópolis",
    "Flórida",
    "Formosa do Oeste",
    "Foz do Iguaçu",
    "Foz do Jordão",
    "Francisco Alves",
    "Francisco Beltrão",
    "General Carneiro",
    "Godoy Moreira",
    "Goioerê",
    "Goioxim",
    "Grandes Rios",
    "Guaíra",
    "Guairacá",
    "Guamiranga",
    "Guapirama",
    "Guaporema",
    "Guaraci",
    "Guaraniacú",
    "Guarapuava",
    "Guaraqueçaba",
    "Guaratuba",
    "Honório Serpa",
    "Ibaiti",
    "Ibema",
    "Ibiporã",
    "Icaraima",
    "Iguaracu",
    "Iguatu",
    "Imbaú",
    "Imbituva",
    "Inácio Martins",
    "Inajá",
    "Indianópolis",
    "Ipiranga",
    "Iporã",
    "Iracema do Oeste",
    "Irati",
    "Iretama",
    "Itaguajé",
    "Itaipulândia",
    "Itambaracá",
    "Itambé",
    "Itapejara do Oeste",
    "Itaperuçu",
    "Itauna do Sul",
    "Ivai",
    "Ivaiporã",
    "Ivaté",
    "Ivatuba",
    "Jaboti",
    "Jacarezinho",
    "Jaguapitã",
    "Jaguariaiva",
    "Jandaia do Sul",
    "Janiópolis",
    "Japira",
    "Japura",
    "Jardim Alegre",
    "Jardim Olinda",
    "Jataizinho",
    "Jesuítas",
    "Joaquim Távora",
    "Jundiai do Sul",
    "Juranda",
    "Jussara",
    "Kaloré",
    "Lapa",
    "Laranjal",
    "Laranjeiras do Sul",
    "Leópolis",
    "Lidianópolis",
    "Lindoeste",
    "Loanda",
    "Lobato",
    "Londrina",
    "Luiziana",
    "Lunardelli",
    "Lupionópolis",
    "Mallet",
    "Mamboré",
    "Mandaguaçu",
    "Mandaguari",
    "Mandirituba",
    "Manfrinópolis",
    "Mangueirinha",
    "Manoel Ribas",
    "Marechal Cândido Rondon",
    "Maria Helena",
    "Marialva",
    "Marilandia do Sul",
    "Marilena",
    "Mariluz",
    "Maringá",
    "Mariópolis",
    "Maripa",
    "Marmeleiro",
    "Marquinho",
    "Marumbi",
    "MatelÂndia",
    "Matinhos",
    "Mato Rico",
    "Mauá da Serra",
    "Medianeira",
    "Mercedes",
    "Mirador",
    "Miraselva",
    "Missal",
    "Moreira Sales",
    "Morretes",
    "Munhoz de Mello",
    "Nossa Senhora das Graças",
    "Nova Aliança do Ivai",
    "Nova América da Colina",
    "Nova Aurora",
    "Nova Cantu",
    "Nova Esperança",
    "Nova Esperança do Sudoeste",
    "Nova Fátima",
    "Nova Laranjeiras",
    "Nova Londrina",
    "Nova Olímpia",
    "Nova Prata do Iguaçu",
    "Nova Santa Barbara",
    "Nova Santa Rosa",
    "Nova Tebas",
    "Novo Itacolomi",
    "Ortigueira",
    "Ourizona",
    "Ouro Verde do Oeste",
    "Paiçandu",
    "Palmas",
    "Palmeira",
    "Palmital",
    "Palotina",
    "Paraíso do Norte",
    "Paranacity",
    "Paranaguá",
    "Paranapoema",
    "Paranavaí",
    "Pato Bragado",
    "Pato Branco",
    "Paula Freitas",
    "Paulo Frontin",
    "Peabiru",
    "Perobal",
    "Pérola",
    "Pérola do Oeste",
    "Piên",
    "Pinhais",
    "Pinhal de São Bento",
    "Pinhalão",
    "Pinhão",
    "Pirai do Sul",
    "Piraquara",
    "Pitanga",
    "Pitangueiras",
    "Planaltina do Paraná",
    "Planalto",
    "Ponta Grossa",
    "Pontal do Paraná",
    "Porecatu",
    "Porto Amazonas",
    "Porto Barreiro",
    "Porto Rico",
    "Porto Vitória",
    "Prado Ferreira",
    "Pranchita",
    "Presidente Castelo Branco",
    "Primeiro de Maio",
    "Prudentópolis",
    "Quarto Centenário",
    "Quatiguá",
    "Quatro Barras",
    "Quatro Pontes",
    "Quedas do Iguaçu",
    "Querência do Norte",
    "Quinta do Sol",
    "Quitandinha",
    "Ramilândia",
    "Rancho Alegre",
    "Rancho Alegre do Oeste",
    "Realeza",
    "Rebouças",
    "Renascença",
    "Reserva",
    "Reserva do Iguaçu",
    "Ribeirão Claro",
    "Ribeirão do Pinhal",
    "Rio Azul",
    "Rio Bom",
    "Rio Bonito do Iguaçu",
    "Rio Branco do Ivaí",
    "Rio Branco do Sul",
    "Rio Negro",
    "Rolândia",
    "Roncador",
    "Rondon",
    "Rosário do Ivai",
    "Sabaudia",
    "Salgado Filho",
    "Salto do Itararé",
    "Salto do Lontra",
    "Santa Amélia",
    "Santa Cecília do Pavão",
    "Santa Cruz do Monte Castelo",
    "Santa Fé",
    "Santa Helena",
    "Santa Inês",
    "Santa Isabel do Ivai",
    "Santa Izabel do Oeste",
    "Santa Lúcia",
    "Santa Maria do Oeste",
    "Santa Mariana",
    "Santa Mônica",
    "Santa Tereza do Oeste",
    "Santa Terezinha de Itaipu",
    "Santana do Itararé",
    "Santo Antonio da Platina",
    "Santo Antonio do Caiuá",
    "Santo Antonio do Paraíso",
    "Santo Antonio do Sudoeste",
    "Santo Inácio",
    "São Carlos do Ivai",
    "São Jerônimo da Serra",
    "São João",
    "São João do Caiuá",
    "São João do Ivai",
    "São João do Triunfo",
    "São Jorge do Ivai",
    "São Jorge do Oeste",
    "São Jorge do Patrocínio",
    "São José da Boa Vista",
    "São José das Palmeiras",
    "São José dos Pinhais",
    "São Manoel do Paraná",
    "São Mateus do Sul",
    "São Miguel do Iguaçu",
    "São Pedro do Iguaçu",
    "São Pedro do Ivai",
    "São Pedro do Paraná",
    "São Sebastião da Amoreira",
    "São Tomé",
    "Sapopema",
    "Sarandi",
    "Saudade do Iguaçu",
    "Sengés",
    "Serranópolis do Iguaçu",
    "Sertaneja",
    "Sertanópolis",
    "Siqueira Campos",
    "Sulina",
    "Tamarana",
    "Tamboara",
    "Tapejara",
    "Tapira",
    "Teixeira Soares",
    "Telêmaco Borba",
    "Terra Boa",
    "Terra Rica",
    "Terra Roxa",
    "Tibagi",
    "Tijucas do Sul",
    "Toledo",
    "Tomazina",
    "Três Barras do Paraná",
    "Tunas do Paraná",
    "Tuneiras do Oeste",
    "Tupãssi",
    "Turvo",
    "Ubiratã",
    "Umuarama",
    "União da Vitória",
    "Uniflor",
    "Uraí",
    "Ventania",
    "Vera Cruz do Oeste",
    "Verê",
    "Virmond",
    "Vitorino",
    "Wenceslau Braz",
    "Xambre"
];