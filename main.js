document.addEventListener("DOMContentLoaded", function() {

    const galeria = document.getElementById("galeria");
const filosofosGaleria = document.getElementById("filosofosGaleria");
const cientificosGaleria = document.getElementById("cientificosGaleria");
const pianistasGaleria = document.getElementById("pianistasGaleria");
const cantantesGaleria = document.getElementById("cantantesGaleria");
const escritoresGaleria = document.getElementById("escritoresGaleria");

  const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const info = document.getElementById("info");
const cerrar = document.getElementById("cerrar");

document.querySelectorAll(".arte").forEach((arte) => {
    arte.addEventListener("click", () => {
        modalImg.src = arte.querySelector("img").src;
        info.innerHTML = `<h2>${arte.querySelector("h3").innerText}</h2><p>${arte.querySelector("p").innerText}</p>`;
        modal.classList.add("show"); // <-- activa la animación
    });
});

cerrar.addEventListener("click", () => {
    modal.classList.remove("show"); // <-- cierra con suavidad
});
    // --- PINTURAS ---
    const obras = [
        {nombre:"Mona Lisa", artista:"Leonardo da Vinci", año:1503, siglo:"XVI", lugar:"Florencia, Italia", museo:"Museo del Louvre", imagen:"https://upload.wikimedia.org/wikipedia/commons/6/6a/Mona_Lisa.jpg"},
        {nombre:"La noche estrellada", artista:"Vincent van Gogh", año:1889, siglo:"XIX", lugar:"Saint-Rémy-de-Provence, Francia", museo:"MoMA, Nueva York", imagen:"https://i.pinimg.com/1200x/1d/b8/ec/1db8ec26d5da93337e5834e41b6e6bc2.jpg"},
        {nombre:"El nacimiento de Venus", artista:"Sandro Botticelli", año:1486, siglo:"XV", lugar:"Florencia, Italia", museo:"Galería Uffizi", imagen:"https://i.pinimg.com/736x/04/64/87/0464876e27941deedb30dc59b8018280.jpg"},
        {nombre:"La persistencia de la memoria", artista:"Salvador Dalí", año:1931, siglo:"XX", lugar:"París, Francia", museo:"MoMA, Nueva York", imagen:"https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg"},
        {nombre:"La última cena", artista:"Leonardo da Vinci", año:1498, siglo:"XV", lugar:"Milán, Italia", museo:"Santa Maria delle Grazie", imagen:"https://www.articulosreligiososbrabander.es/uploads/media/images/1200x900/tapiz-ultima-cena-leonardo-da-vinci1.jpg"},
        {nombre:"La creación de Adán", artista:"Michelangelo", año:1512, siglo:"XVI", lugar:"Ciudad del Vaticano", museo:"Capilla Sixtina", imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/%27Adam%27s_Creation_Sistine_Chapel_ceiling%27_by_Michelangelo_JBU33cut.jpg/500px-%27Adam%27s_Creation_Sistine_Chapel_ceiling%27_by_Michelangelo_JBU33cut.jpg"},
        {nombre:"La joven de la perla", artista:"Johannes Vermeer", año:1665, siglo:"XVII", lugar:"Delft, Países Bajos", museo:"Mauritshuis", imagen:"https://upload.wikimedia.org/wikipedia/commons/d/d7/Meisje_met_de_parel.jpg"},
        {nombre:"El grito", artista:"Edvard Munch", año:1893, siglo:"XIX", lugar:"Oslo, Noruega", museo:"Galería Nacional de Noruega", imagen:"https://upload.wikimedia.org/wikipedia/commons/f/f4/The_Scream.jpg"},
        {nombre:"Guernica", artista:"Pablo Picasso", año:1937, siglo:"XX", lugar:"Guernica, España", museo:"Museo Reina Sofía", imagen:"https://upload.wikimedia.org/wikipedia/en/7/74/PicassoGuernica.jpg"},
        {nombre:"El jardín de las delicias", artista:"Hieronymus Bosch", año:1505, siglo:"XVI", lugar:"Países Bajos", museo:"Museo del Prado", imagen:"https://i.pinimg.com/1200x/25/2a/f3/252af3acf88f4e88bb35c76ff29aa39b.jpg"},
        {nombre:"Las meninas", artista:"Diego Velázquez", año:1656, siglo:"XVII", lugar:"Madrid, España", museo:"Museo del Prado", imagen:"https://i.pinimg.com/1200x/25/ad/ec/25adec0cf3118ebe51adf0c13ef4dd48.jpg"},
        {nombre:"La libertad guiando al pueblo", artista:"Eugène Delacroix", año:1830, siglo:"XIX", lugar:"Francia", museo:"Museo del Louvre", imagen:"https://i.pinimg.com/736x/65/b3/5f/65b35f2d82ff880c5d8bde6dbcc435f9.jpg"},
        {nombre:"El beso", artista:"Gustav Klimt", año:1908, siglo:"XX", lugar:"Austria", museo:"Belvedere, Viena", imagen:"https://i.pinimg.com/736x/f2/a0/26/f2a026962931631f0b74dfc82195ef00.jpg"},
        {nombre:"Saturno devorando a su hijo", artista:"Francisco Goya", año:1823, siglo:"XIX", lugar:"España", museo:"Museo del Prado", imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg/330px-Francisco_de_Goya%2C_Saturno_devorando_a_su_hijo_%281819-1823%29.jpg"},
        {nombre:"La maja desnuda", artista:"Francisco Goya", año:1797, siglo:"XVIII", lugar:"España", museo:"Museo del Prado", imagen:"https://upload.wikimedia.org/wikipedia/commons/7/74/Maja_desnuda_%28museo_del_Prado%29.jpg"},
        {nombre:"La ronda de noche", artista:"Rembrandt", año:1642, siglo:"XVII", lugar:"Ámsterdam, Países Bajos", museo:"Rijksmuseum", imagen:"https://i.pinimg.com/1200x/4a/45/a4/4a45a47dd3aaa3a9b5dc05cfc60663b5.jpg"},
        {nombre:"El triunfo de Baco", artista:"Diego Velázquez", año:1629, siglo:"XVII", lugar:"España", museo:"Museo del Prado", imagen:"https://i.pinimg.com/1200x/23/7e/63/237e63fc0f9f832e05bbef8febd2df18.jpg"},
        {nombre:"El barco de huérfanos", artista:"J.M.W. Turner", año:1790, siglo:"XVIII", lugar:"Reino Unido", museo:"Tate Britain", imagen:"https://historia-arte.com/_/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpbSI6WyJcL2FydHdvcmtcL2ltYWdlRmlsZVwvdHVybmVyX2VzY2xhdm9zLmpwZyIsInJlc2l6ZSwyMDAwLDIwMDAiXX0.C9_ZZ8X3jyqsbztSnrYSTWR8JFtJKlOGsApJNW8ifvc.jpg"},
        {nombre:"Nighthawks", artista:"Edward Hopper", año:1942, siglo:"XX", lugar:"EE.UU.", museo:"Art Institute of Chicago", imagen:"https://upload.wikimedia.org/wikipedia/commons/a/a8/Nighthawks_by_Edward_Hopper_1942.jpg"}
    ];

    // --- FILOSOFOS ---
    // --- FILOSOFOS AMPLIADOS ---
const filosofos = [
    {nombre:"Sócrates", descripcion:"Filósofo griego, considerado el padre de la filosofía occidental.", nacimiento:"470 a.C.", muerte:"399 a.C.", siglo:"V a.C.", lugar:"Atenas, Grecia", imagen:"https://i.pinimg.com/736x/5c/d1/f6/5cd1f67ee645d74e26b87cb933c0e869.jpg"},
    {nombre:"Platón", descripcion:"Discípulo de Sócrates y maestro de Aristóteles.", nacimiento:"427 a.C.", muerte:"347 a.C.", siglo:"V-IV a.C.", lugar:"Atenas, Grecia", imagen:"https://i.pinimg.com/736x/52/b0/c5/52b0c52e18ed2e4ed6aa6a219b62f59c.jpg"},
    {nombre:"Aristóteles", descripcion:"Filósofo griego, maestro de Alejandro Magno.", nacimiento:"384 a.C.", muerte:"322 a.C.", siglo:"IV a.C.", lugar:"Estagira, Grecia", imagen:"https://i.pinimg.com/736x/2c/a8/09/2ca8091f2f7090aa96dee03b7b07ce88.jpg"},
    {nombre:"Marco Aurelio", descripcion:"Emperador romano y filósofo estoico.", nacimiento:"121", muerte:"180", siglo:"II", lugar:"Roma, Imperio Romano", imagen:"https://i.pinimg.com/736x/91/46/93/91469327b1b3b7a4dbd83168dd84bade.jpg"},
    {nombre:"Confucio", descripcion:"Filósofo chino que influyó profundamente en la ética y política.", nacimiento:"551 a.C.", muerte:"479 a.C.", siglo:"VI-V a.C.", lugar:"Qufu, China", imagen:"https://i.pinimg.com/736x/68/b8/b3/68b8b358d39225186cd5b6f6c2b13c86.jpg"},
    {nombre:"Immanuel Kant", descripcion:"Filósofo alemán, figura central de la filosofía moderna.", nacimiento:"1724", muerte:"1804", siglo:"XVIII", lugar:"Königsberg, Alemania", imagen:"https://i.pinimg.com/736x/7c/a1/16/7ca116d0b73e4fb776d5027f44ade659.jpg"},
    {nombre:"René Descartes", descripcion:"Filósofo y matemático francés, padre de la filosofía moderna.", nacimiento:"1596", muerte:"1650", siglo:"XVII", lugar:"La Haye en Touraine, Francia", imagen:"https://i.pinimg.com/736x/7a/ca/a1/7acaa17bd20af1b197c0256a3af5086f.jpg"},
    {nombre:"Friedrich Nietzsche", descripcion:"Filósofo alemán, crítico de la moral tradicional.", nacimiento:"1844", muerte:"1900", siglo:"XIX", lugar:"Röcken, Alemania", imagen:"https://i.pinimg.com/736x/c5/2c/19/c52c196754ba5662fe90509e85488715.jpg"},
    {nombre:"Epicuro", descripcion:"Filósofo griego, fundador del epicureísmo.", nacimiento:"341 a.C.", muerte:"270 a.C.", siglo:"IV-III a.C.", lugar:"Samos, Grecia", imagen:"https://i.pinimg.com/1200x/6c/9f/03/6c9f0378f6cf5cf7273e14905a4b9bf0.jpg"},
    {nombre:"Séneca", descripcion:"Filósofo estoico romano.", nacimiento:"4 a.C.", muerte:"65", siglo:"I", lugar:"Córdova, Hispania", imagen:"https://i.pinimg.com/736x/87/ec/5d/87ec5dac727452367e7a008b4fb1b273.jpg"},
    {nombre:"Santo Tomás de Aquino", descripcion:"Filósofo y teólogo medieval.", nacimiento:"1225", muerte:"1274", siglo:"XIII", lugar:"Roccasecca, Italia", imagen:"https://i.pinimg.com/736x/ff/b6/97/ffb69707462d29ea94ede34851509311.jpg"},
    // Nuevos filósofos históricos
    {nombre:"Alejandro Magno", descripcion:"Rey de Macedonia y conquistador, influyó en la difusión de la cultura griega.", nacimiento:"356 a.C.", muerte:"323 a.C.", siglo:"IV a.C.", lugar:"Pella, Macedonia", imagen:"https://i.pinimg.com/736x/a4/07/8c/a4078c65cd7fea90e78533a419fa6151.jpg"},
    {nombre:"Epicteto", descripcion:"Filósofo estoico romano, enseñó que la libertad proviene del control de la mente.", nacimiento:"50", muerte:"135", siglo:"I-II", lugar:"Hierápolis, Grecia", imagen:"https://i.pinimg.com/1200x/90/d2/87/90d287cc0a43251856c3f437ed282424.jpg"},
    {nombre:"Diogenes de Sinope", descripcion:"Filósofo griego cínico, famoso por su estilo de vida austero.", nacimiento:"412 a.C.", muerte:"323 a.C.", siglo:"V-IV a.C.", lugar:"Sinope, Grecia", imagen:"https://i.pinimg.com/1200x/8c/32/4b/8c324ba7aebf5e21e30c39138dc553b5.jpg"},
    {nombre:"Thomas Hobbes", descripcion:"Filósofo inglés, autor de 'Leviatán', influyó en la teoría política moderna.", nacimiento:"1588", muerte:"1679", siglo:"XVI-XVII", lugar:"Malmesbury, Inglaterra", imagen:"https://i.pinimg.com/1200x/97/fe/1b/97fe1b2368b053912acd970e2660f80a.jpg"}
];
    // --- CIENTIFICOS ---
    const cientificos = [
    {nombre:"Albert Einstein", descripcion:"Físico alemán, padre de la teoría de la relatividad.", nacimiento:"1879", muerte:"1955", siglo:"XIX-XX", lugar:"Ulm, Alemania", imagen:"https://upload.wikimedia.org/wikipedia/commons/d/d3/Albert_Einstein_Head.jpg"},
    {nombre:"Marie Curie", descripcion:"Primera persona en recibir dos premios Nobel en distintas ciencias.", nacimiento:"1867", muerte:"1934", siglo:"XIX-XX", lugar:"Varsovia, Polonia", imagen:"https://i.pinimg.com/736x/2b/d4/23/2bd423b75b73e4cb2d8ef417939c8a03.jpg"},
    {nombre:"Isaac Newton", descripcion:"Físico y matemático inglés, padre de la mecánica clásica.", nacimiento:"1643", muerte:"1727", siglo:"XVII-XVIII", lugar:"Woolsthorpe, Inglaterra", imagen:"https://i.pinimg.com/736x/9c/4a/6f/9c4a6fb7c950bffb7baae998663abf3d.jpg"},
    {nombre:"Nikola Tesla", descripcion:"Inventor y científico, padre de la corriente alterna moderna.", nacimiento:"1856", muerte:"1943", siglo:"XIX-XX", lugar:"Smiljan, Imperio Austríaco", imagen:"https://upload.wikimedia.org/wikipedia/commons/d/d4/N.Tesla.JPG"},
    {nombre:"Charles Darwin", descripcion:"Naturalista inglés, padre de la teoría de la evolución.", nacimiento:"1809", muerte:"1882", siglo:"XIX", lugar:"Shrewsbury, Inglaterra", imagen:"https://i.pinimg.com/1200x/cf/88/7f/cf887f4fa8283a4bb93d430dcc754eb9.jpg"},
    {nombre:"Galileo Galilei", descripcion:"Astrónomo, físico e ingeniero italiano, padre de la ciencia moderna.", nacimiento:"1564", muerte:"1642", siglo:"XVI-XVII", lugar:"Pisa, Italia", imagen:"https://i.pinimg.com/1200x/db/ba/4f/dbba4f1e0541ea5509be8e084aaabb9d.jpg"},
    {nombre:"Michael Faraday", descripcion:"Físico y químico británico, pionero en electromagnetismo.", nacimiento:"1791", muerte:"1867", siglo:"XIX", lugar:"Newington, Reino Unido", imagen:"https://i.pinimg.com/736x/f8/6b/4e/f86b4edab763d3c598ca1c52a8cd3949.jpg"},
    {nombre:"Max Planck", descripcion:"Físico alemán, fundador de la teoría cuántica.", nacimiento:"1858", muerte:"1947", siglo:"XIX-XX", lugar:"Kiel, Alemania", imagen:"https://i.pinimg.com/736x/99/9c/68/999c6855e93d1288d1550f7f03626d6f.jpg"},
    {nombre:"Edwin Hubble", descripcion:"Astrónomo estadounidense, descubrió la expansión del universo.", nacimiento:"1889", muerte:"1953", siglo:"XX", lugar:"Missouri, EE.UU.", imagen:"https://i.pinimg.com/736x/ad/b4/32/adb432206007853cf7a7f0793afdf730.jpg"},
    // Nuevos científicos históricos
    {nombre:"Leonardo da Vinci", descripcion:"Genio del Renacimiento, inventor, ingeniero y anatomista.", nacimiento:"1452", muerte:"1519", siglo:"XV-XVI", lugar:"Vinci, Italia", imagen:"https://i.pinimg.com/736x/dd/2e/f6/dd2ef68efff7eab10566f783817b322a.jpg"},
    {nombre:"Johannes Kepler", descripcion:"Astrónomo alemán, descubrió las leyes del movimiento planetario.", nacimiento:"1571", muerte:"1630", siglo:"XVI-XVII", lugar:"Weil der Stadt, Alemania", imagen:"https://i.pinimg.com/1200x/19/eb/9f/19eb9f3bb37f11ecaa23bc72784da7e4.jpg"},
    {nombre:"Carl Sagan", descripcion:"Astrónomo estadounidense, divulgador científico y escritor.", nacimiento:"1934", muerte:"1996", siglo:"XX", lugar:"Nueva York, EE.UU.", imagen:"https://i.pinimg.com/736x/79/08/33/7908335032c7d1c29148d7b74575cdc3.jpg"}
];
    // --- PIANISTAS ---
    const pianistas = [
    {nombre:"Frédéric Chopin", descripcion:"Compositor y pianista polaco, maestro del piano romántico.", nacimiento:"1810", muerte:"1849", siglo:"XIX", lugar:"Żelazowa Wola, Polonia", imagen:"https://i.pinimg.com/1200x/a3/bb/38/a3bb381dda123d74064346b81f2f6764.jpg"},
    {nombre:"Lang Lang", descripcion:"Pianista chino reconocido internacionalmente.", nacimiento:"1982", muerte:"-", siglo:"XX-XXI", lugar:"Shenyang, China", imagen:"https://www.un.org/sites/un2.un.org/files/field/image/2023/01/lang_lang.jpg"},
    {nombre:"Ludwig van Beethoven", descripcion:"Compositor y pianista alemán, figura clave de la música clásica.", nacimiento:"1770", muerte:"1827", siglo:"XVIII-XIX", lugar:"Bonn, Alemania", imagen:"https://upload.wikimedia.org/wikipedia/commons/6/6f/Beethoven.jpg"},
    {nombre:"Sergei Rachmaninoff", descripcion:"Pianista y compositor ruso, virtuoso del piano romántico.", nacimiento:"1873", muerte:"1943", siglo:"XIX-XX", lugar:"Starorussky, Rusia", imagen:"https://i.pinimg.com/736x/f2/5e/28/f25e28942d919d167291392357908ff7.jpg"},
    {nombre:"Clara Schumann", descripcion:"Pianista y compositora alemana, gran intérprete romántica.", nacimiento:"1819", muerte:"1896", siglo:"XIX", lugar:"Leipzig, Alemania", imagen:"https://i.pinimg.com/736x/b8/a4/0e/b8a40e8450c1b1c1336c6dbe59c2491f.jpg"},
    {nombre:"Glenn Gould", descripcion:"Pianista canadiense, famoso por sus interpretaciones de Bach.", nacimiento:"1932", muerte:"1982", siglo:"XX", lugar:"Toronto, Canadá", imagen:"https://i.pinimg.com/736x/e2/5a/8f/e25a8f1ae059f318d85c29e02fc0f678.jpg"},
    {nombre:"Franz Liszt", descripcion:"Pianista húngaro, virtuoso y compositor del romanticismo.", nacimiento:"1811", muerte:"1886", siglo:"XIX", lugar:"Raiding, Hungría", imagen:"https://i.pinimg.com/1200x/4b/e8/ab/4be8ab3ce1f69206552e84308e107dfa.jpg"},
    {nombre:"Wolfgang Amadeus Mozart", descripcion:"Compositor y pianista austríaco, prodigio musical.", nacimiento:"1756", muerte:"1791", siglo:"XVIII", lugar:"Salzburgo, Austria", imagen:"https://upload.wikimedia.org/wikipedia/commons/1/1e/Wolfgang-amadeus-mozart_1.jpg"},
    {nombre:"Joseph Haydn", descripcion:"Compositor y pianista austríaco, padre de la sinfonía moderna.", nacimiento:"1732", muerte:"1809", siglo:"XVIII-XIX", lugar:"Rohrau, Austria", imagen:"https://i.pinimg.com/1200x/5f/27/f2/5f27f277f72779c9c6fbd46ff80ad963.jpg"},
    {nombre:"Martha Argerich", descripcion:"Pianista argentina, virtuosa internacional.", nacimiento:"1941", muerte:"-", siglo:"XX-XXI", lugar:"Buenos Aires, Argentina", imagen:"https://i.pinimg.com/736x/03/89/cd/0389cdc8967765c8c01aa817c9e1d8a6.jpg"},
    // Nuevos pianistas históricos
    {nombre:"Sergei Prokofiev", descripcion:"Compositor y pianista ruso, destacado del siglo XX.", nacimiento:"1891", muerte:"1953", siglo:"XX", lugar:"Sontsovka, Rusia", imagen:"https://i.pinimg.com/1200x/72/42/e0/7242e0626b4a40bf0479634ce5a47ad7.jpg"},
    {nombre:"Claudio Arrau", descripcion:"Pianista chileno, reconocido por su técnica y profundidad.", nacimiento:"1903", muerte:"1991", siglo:"XX", lugar:"Santiago, Chile", imagen:"https://i.pinimg.com/736x/79/06/5f/79065fab7359252613bee0087834df1c.jpg"}
];

    // --- CANTANTES ---
   const cantantes = [
    {nombre:"Frank Sinatra", descripcion:"Cantante estadounidense, uno de los más grandes de la historia.", nacimiento:"1915", muerte:"1998", siglo:"XX", lugar:"Hoboken, EE.UU.", imagen:"https://i.pinimg.com/1200x/2b/72/10/2b7210a1d2ffde3fff03684dc5bf5276.jpg"},
    {nombre:"Michael Jackson", descripcion:"El rey del pop, icono de la música mundial.", nacimiento:"1958", muerte:"2009", siglo:"XX-XXI", lugar:"Gary, EE.UU.", imagen:"https://i.pinimg.com/1200x/8a/e9/57/8ae957edc12e719d6a347ee3b395e502.jpg"},
    {nombre:"Freddy Mercury", descripcion:"Vocalista de Queen, considerado uno de los mejores cantantes de todos los tiempos.", nacimiento:"1946", muerte:"1991", siglo:"XX", lugar:"Zanzíbar, Tanzania", imagen:"https://i.pinimg.com/736x/e8/2a/3f/e82a3feaaddd4306fd7e7bc5b1a9788f.jpg"},
    {nombre:"Elvis Presley", descripcion:"El rey del rock and roll, revolucionó la música en el siglo XX.", nacimiento:"1935", muerte:"1977", siglo:"XX", lugar:"Tupelo, EE.UU.", imagen:"https://i.pinimg.com/736x/61/3c/26/613c267a85de3eb95274b7a97c76bb00.jpg"},
    {nombre:"Louis Armstrong", descripcion:"Trompetista y cantante de jazz estadounidense, pionero del jazz.", nacimiento:"1901", muerte:"1971", siglo:"XX", lugar:"Nueva Orleans, EE.UU.", imagen:"https://i.pinimg.com/736x/3e/8e/7e/3e8e7e8ba94657e1dc839da32e2113c2.jpg"},
    {nombre:"Ella Fitzgerald", descripcion:"Cantante estadounidense de jazz, conocida como la Reina del Jazz.", nacimiento:"1917", muerte:"1996", siglo:"XX", lugar:"Nueva York, EE.UU.", imagen:"https://i.pinimg.com/736x/5b/1c/aa/5b1caa50e18f286d26fc57b260689c30.jpg"},
    {nombre:"Billie Holiday", descripcion:"Cantante estadounidense de jazz, influyente por su estilo emotivo.", nacimiento:"1915", muerte:"1959", siglo:"XX", lugar:"Filadelfia, EE.UU.", imagen:"https://i.pinimg.com/736x/36/02/38/36023806e7885c2fec27a243042fe443.jpg"},
    {nombre:"Nat King Cole", descripcion:"Cantante y pianista estadounidense de jazz y pop.", nacimiento:"1919", muerte:"1965", siglo:"XX", lugar:"Montgomery, EE.UU.", imagen:"https://i.pinimg.com/736x/21/0e/c6/210ec695547269ab5616db5412498b2e.jpg"},
    {nombre:"Judy Garland", descripcion:"Actriz y cantante estadounidense, famosa por 'El Mago de Oz'.", nacimiento:"1922", muerte:"1969", siglo:"XX", lugar:"Grand Rapids, EE.UU.", imagen:"https://i.pinimg.com/736x/9d/49/b9/9d49b9854bbdfa1f8a48bee5e139c2f8.jpg"},
    {nombre:"Bessie Smith", descripcion:"Cantante de blues estadounidense, influyente en el jazz.", nacimiento:"1894", muerte:"1937", siglo:"XX", lugar:"Chattanooga, EE.UU.", imagen:"https://i.pinimg.com/736x/96/87/5c/96875c18c0f2f24506dd2aac87a25088.jpg"},
    // Nuevos cantantes históricos
    {nombre:"Johnny Cash", descripcion:"Icono de la música country estadounidense.", nacimiento:"1932", muerte:"2003", siglo:"XX", lugar:"Kingsland, EE.UU.", imagen:"https://i.pinimg.com/736x/90/08/f4/9008f4a141b110871eabc0b2d7b4b512.jpg"},
    {nombre:"Aretha Franklin", descripcion:"La Reina del Soul, cantante y activista estadounidense.", nacimiento:"1942", muerte:"2018", siglo:"XX-XXI", lugar:"Memphis, EE.UU.", imagen:"https://i.pinimg.com/1200x/cd/7a/99/cd7a995708cd034824cc83b79e16a26f.jpg"}
];

// --- ESCRITORES HISTÓRICOS ---
const escritores = [
    {nombre:"William Shakespeare", descripcion:"Dramaturgo y poeta inglés, considerado el más grande de todos los tiempos.", nacimiento:"1564", muerte:"1616", siglo:"XVI-XVII", lugar:"Stratford-upon-Avon, Inglaterra", imagen:"https://upload.wikimedia.org/wikipedia/commons/a/a2/Shakespeare.jpg"},
    {nombre:"Miguel de Cervantes", descripcion:"Escritor español, autor de 'Don Quijote de la Mancha'.", nacimiento:"1547", muerte:"1616", siglo:"XVI-XVII", lugar:"Alcalá de Henares, España", imagen:"https://i.pinimg.com/736x/e2/0d/ff/e20dff863bdf08d041f5aa60f53b9226.jpg"},
    {nombre:"Leo Tolstoy", descripcion:"Novelista ruso, autor de 'Guerra y Paz' y 'Ana Karenina'.", nacimiento:"1828", muerte:"1910", siglo:"XIX-XX", lugar:"Yásnaya Poliana, Rusia", imagen:"https://i.pinimg.com/736x/a7/10/53/a710530874231cd1a6e40a68db74b02d.jpg"},
    {nombre:"Jane Austen", descripcion:"Novelista inglesa conocida por sus novelas sobre la vida y las costumbres de la sociedad británica.", nacimiento:"1775", muerte:"1817", siglo:"XVIII-XIX", lugar:"Steventon, Inglaterra", imagen:"https://i.pinimg.com/736x/34/1e/2f/341e2f167297260b28af99f1aa5a8772.jpg"},
    {nombre:"Victor Hugo", descripcion:"Escritor francés, autor de 'Los Miserables' y 'Nuestra Señora de París'.", nacimiento:"1802", muerte:"1885", siglo:"XIX", lugar:"Besanzón, Francia", imagen:"https://i.pinimg.com/736x/1c/10/d3/1c10d3ad155eb2900a1a40e6aa98b588.jpg"},
    {nombre:"Fiódor Dostoyevski", descripcion:"Novelista ruso, autor de 'Crimen y castigo' y 'Los hermanos Karamázov'.", nacimiento:"1821", muerte:"1881", siglo:"XIX", lugar:"Moscú, Rusia", imagen:"https://i.pinimg.com/736x/0b/55/26/0b5526a2f350604accb8e8d197790fa1.jpg"},
    {nombre:"Mark Twain", descripcion:"Escritor estadounidense, autor de 'Las aventuras de Tom Sawyer'.", nacimiento:"1835", muerte:"1910", siglo:"XIX-XX", lugar:"Florida, EE.UU.", imagen:"https://upload.wikimedia.org/wikipedia/commons/0/0c/Mark_Twain_by_AF_Bradley.jpg"}
];



// --- CREAR TODAS LAS GALERIAS CON TITULO ---
function crearGaleria(array, contenedor, titulo) {
    contenedor.innerHTML = "";

    const h2 = document.createElement("h2");
    h2.textContent = titulo;
    contenedor.appendChild(h2);

    array.forEach(function(item) {
        const div = document.createElement("div");
        div.classList.add("arte");

        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p>${item.descripcion || item.artista || ""}</p>
        `;

        div.addEventListener("click", function() {
            modal.style.display = "flex";
            modalImg.src = item.imagen;

            info.innerHTML = `
                <h2>${item.nombre}</h2>
                ${item.descripcion ? `<p>${item.descripcion}</p>` : ""}
                ${item.artista ? `<p><b>Artista:</b> ${item.artista}</p>` : ""}
                ${item.año ? `<p><b>Año:</b> ${item.año}</p>` : ""}
                ${item.siglo ? `<p><b>Siglo:</b> ${item.siglo}</p>` : ""}
                ${item.lugar ? `<p><b>Lugar:</b> ${item.lugar}</p>` : ""}
                ${item.museo ? `<p><b>Museo:</b> ${item.museo}</p>` : ""}
                ${item.nacimiento ? `<p><b>Nacimiento:</b> ${item.nacimiento}</p>` : ""}
                ${item.muerte ? `<p><b>Muerte:</b> ${item.muerte}</p>` : ""}
            `;
        });

        contenedor.appendChild(div);
    });
}

// --- LLAMADAS A TODAS LAS GALERIAS ---
crearGaleria(obras, galeria, "Pinturas");
crearGaleria(filosofos, filosofosGaleria, "Filósofos");
crearGaleria(cientificos, cientificosGaleria, "Científicos");
crearGaleria(pianistas, pianistasGaleria, "Pianistas");
crearGaleria(cantantes, cantantesGaleria, "Cantantes");
crearGaleria(escritores, escritoresGaleria, "Escritores ");
    // --- NAVEGACION POR CATEGORIAS ---


// --- TRADUCCIÓN AUTOMÁTICA LIMPIA ---
const idiomaUsuario = (navigator.language || navigator.userLanguage).toLowerCase();

// Detectar idioma (inglés, francés, español por defecto)
const lang = idiomaUsuario.startsWith('en') ? 'en' :
             idiomaUsuario.startsWith('fr') ? 'fr' : 'es';

// Diccionario de traducciones
const traducciones = {
    es: {
        "Galería de Pinturas Famosas": "Galería de Pinturas Famosas",
        "Galería de Filósofos": "Galería de Filósofos",
        "Galería de Científicos": "Galería de Científicos",
        "Galería de Pianistas": "Galería de Pianistas",
        "Galería de Cantantes Legendarios": "Galería de Cantantes Legendarios",
        "Galería de Escritores Históricos": "Galería de Escritores Históricos",
        "Artista": "Artista",
        "Año": "Año",
        "Siglo": "Siglo",
        "Lugar": "Lugar",
        "Museo": "Museo",
        "Nacimiento": "Nacimiento",
        "Muerte": "Muerte",
        "Descripción": "Descripción"
    },
    en: {
        "Galería de Pinturas Famosas": "Famous Paintings Gallery",
        "Galería de Filósofos": "Philosophers Gallery",
        "Galería de Científicos": "Scientists Gallery",
        "Galería de Pianistas": "Pianists Gallery",
        "Galería de Cantantes Legendarios": "Legendary Singers Gallery",
        "Galería de Escritores Históricos": "Historical Writers Gallery",
        "Artista": "Artist",
        "Año": "Year",
        "Siglo": "Century",
        "Lugar": "Place",
        "Museo": "Museum",
        "Nacimiento": "Birth",
        "Muerte": "Death",
        "Descripción": "Description"
    },
    fr: {
        "Galería de Pinturas Famosas": "Galerie de Peintures Célèbres",
        "Galería de Filósofos": "Galerie de Philosophes",
        "Galería de Científicos": "Galerie de Scientifiques",
        "Galería de Pianistas": "Galerie de Pianistes",
        "Galería de Cantantes Legendarios": "Galerie de Chanteurs Légendaires",
        "Galería de Escritores Históricos": "Galerie d'Écrivains Historiques",
        "Artista": "Artiste",
        "Año": "Année",
        "Siglo": "Siècle",
        "Lugar": "Lieu",
        "Museo": "Musée",
        "Nacimiento": "Naissance",
        "Muerte": "Décès",
        "Descripción": "Description"
    }
};

// Función para traducir etiquetas
const traducirEtiqueta = (etiqueta) => {
    return traducciones[lang][etiqueta] || etiqueta;
};

// Traducir títulos de galerías automáticamente
document.querySelectorAll('main section h2').forEach(h2 => {
    if(traducciones[lang][h2.textContent]) {
        h2.textContent = traducciones[lang][h2.textContent];
    }
});

// Modificar el modal al abrir para usar etiquetas traducidas
const originalCrearGaleria = crearGaleria;
crearGaleria = function(array, contenedor) {
    array.forEach(function(item) {
        const div = document.createElement("div");
        div.classList.add("arte");

        div.innerHTML = `
            <img src="${item.imagen}" alt="${item.nombre}">
            <h3>${item.nombre}</h3>
            <p>${item.descripcion || item.artista || ""}</p>
        `;

        div.addEventListener("click", function() {
            modal.style.display = "flex";
            modalImg.src = item.imagen;

            info.innerHTML = `
                <h2>${item.nombre}</h2>
                ${item.descripcion ? `<p><b>${traducirEtiqueta("Descripción")}:</b> ${item.descripcion}</p>` : ""}
                ${item.artista ? `<p><b>${traducirEtiqueta("Artista")}:</b> ${item.artista}</p>` : ""}
                ${item.año ? `<p><b>${traducirEtiqueta("Año")}:</b> ${item.año}</p>` : ""}
                ${item.siglo ? `<p><b>${traducirEtiqueta("Siglo")}:</b> ${item.siglo}</p>` : ""}
                ${item.lugar ? `<p><b>${traducirEtiqueta("Lugar")}:</b> ${item.lugar}</p>` : ""}
                ${item.museo ? `<p><b>${traducirEtiqueta("Museo")}:</b> ${item.museo}</p>` : ""}
                ${item.nacimiento ? `<p><b>${traducirEtiqueta("Nacimiento")}:</b> ${item.nacimiento}</p>` : ""}
                ${item.muerte ? `<p><b>${traducirEtiqueta("Muerte")}:</b> ${item.muerte}</p>` : ""}
            `;
        });

        contenedor.appendChild(div);
    });
};



    // --- CERRAR MODAL ---
    cerrar.addEventListener("click", function() {
        modal.style.display = "none";
    });

    // Mostrar por defecto pinturas
    galeria.style.display = "grid";

});