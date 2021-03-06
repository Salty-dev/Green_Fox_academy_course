/* Nagy képek listája */
var imagesData = [
    {
        photo: "images/leopard2a7.jpg",
        title: "Leopard 2A7+",
        description: "Ez az alváltozat 2010 nyarán jelent meg. Kifejlesztése a 2000-es évek első évtizedének háborúi és más konfliktusai során szerzett tapasztalaton alapult. Ezekben a háborúkban a harckocsik nem ellenséges tankokkal, hanem terrorista szervezetekkel és magányos személyekkel harcoltak, sokszor nem a nyílt harcmezőn, hanem zsúfolt városi környezetben."
    },
    {
        photo: "images/pzh2000.jpg",
        title: "Panzerhaubitze 2000",
        description: "A Panzerhaubitze 2000 (magyarul páncélos tarack), röviden PzH 2000, német önjáró tarackágyú. Számos korszerű berendezésének és magas fokú automatizáltságának köszönhetően figyelemre méltóak tűzgyorsasági, csőhosszának köszönhetően pedig lőpontossági paraméterei, emellett öndiagnosztizálásából fakadóan alacsony a karbantartási igénye is."
    },
    {
        photo: "images/lynx_kf41.jpg",
        title: "Lynx KF41",
        description: "A Lynx („Hiúz”) egy páncélozott gyalogsági harcjármű, amelyet a német Rheinmetall Landsysteme fejleszt. A KF41 változatot 2018. június 12-én mutatták be először az Eurosatory védelmi kiállításon. A Rheinmetall szerint a Lynx harcjárműcsalád a gyalogsági harcjárművek legújabb generációját képviseli, alacsonyabb egység- és élettartam költségekkel, illetve egyszerűbb kialakítással."
    },
    {
        photo: "images/carl_gustav.jpg",
        title: "Carl Gustav M4",
        description: "A Carl Gustaf hátrasiklás nélküli löveg egy 84 mm-es hordozható, többször felhasználható rakéta-páncéltörő fegyver. 2014-ben a Saab Dynamics bemutatta a vadonatúj Carl Gustaf M4-t. 6,6 kg, a cső hossza 950 mm. Rendelkezik vörös-pontos irányzékkal és menetközben való lőszer biztosítással a csőben. Hatásos lőtávolsága lézervezérlésű lőszerrel 2000 méter."
    },
    {
        photo: "images/ejder_yalcin.jpg",
        title: "Elder Yalcin (Gidran)",
        description: "Az 5,7 méter hosszú, két és fél méter magas járműben akár kilenc katona is elfér. A 16 tonnás súlyt egy 375 lóerős dízelmotor hajtja, amellyel akár 120 kilométer/órás sebességre is képes. Egy tankkal 700 kilométerre is eljut, 60 százalékos emelkedőre is felmegy, de egy fél méter magas akadály vagy egyméteres vízfolyás sem jelent számára akadályt."
    },
    {
        photo: "images/airbus_h145m.jpg",
        title: "Airbus H145M",
        description: "A H145M egy közepes méretű többcélú katonai helikopter, amely képes a küldetések széles spektrumának megvalósítására egy közös platformon, legyen szó a szállításról, a kutatató mentő (SAR) feladatokról a harctéri mentésről és a fegyveres felderítésről. A csapatszállítások és a civil feladatok esetében a H145M  két pilótát és 10 főt tud befogadni."
    },
    {
        photo: "images/airbus_h225m.jpg",
        title: "Airbus H225M",
        description: "Az Airbus H225M - korábbi nevén Eurocopter EC725 Caracal -, nagy hatótávolságú taktikai katonai szállító helikopter, melyet az Eurocopter AS532 Cougar helikopterből fejlesztettek ki. A H225M gépek a legmodernebb kommunikációs technikával szerelték fel, így szállítási, harcászati és mentési műveletekben, továbbá a speciális egységek bevetésére egyaránt felhasználhatóak."
    },
    {
        photo: "images/cz_bren2.jpg",
        title: "CZ BREN 2",
        description: "A CZ 806 BREN 2-t a Ceska Zbrojovka fejlesztette ki, amely egy gázelvételi rendszerű, szelektív tűzfegyver. A felső része alumíniumból, míg az alsó részegységei polimer anyagból készülnek. Kezdettől fogva több kaliberű fegyverként fejlesztették. Az 5,56×45 NATO, a 7,62×51 és az orosz 7,62×39 lőszerhez is alkalmazható. A francia GIGN különleges műveleti erők például a BREN 2-es 7,62×39 mm-es verzióját rendelték meg."
    },
    {
        photo: "images/cz_scorpion_evo3.jpg",
        title: "CZ Scorpion EVO3",
        description: "A Scorpion EVO 3 9×19 mm Parabellum lőszert használó, könnyű súlyú, kompakt géppisztoly, szűk helyeken való könnyű manőverezésre tervezték. A fegyvertok, pisztolymarkolat, válltámasz és az előagy műanyagból készült. Az A1 változatot ellátták egy tűzváltó karral, mellyel a kezelő válthat a biztosított, egyes lövés, hármas rövid sorozat vagy a sorozatlövés között."
    }
]

/* Kisképek listája */
var thumbData = [
    {
        thumb: "images/thumbnails/leopard2a7_thumbnail.jpg",
        title: "Leopard 2A7+"
    },
    {
        thumb: "images/thumbnails/pzh2000_thumbnail.jpg",
        title: "Panzerhaubitze 2000"
    },
    {
        thumb: "images/thumbnails/lynx_kf41_thumbnail.jpg",
        title: "Lynx KF41"
    },
    {
        thumb: "images/thumbnails/carl_gustav_thumbnail.jpg",
        title: "Carl Gustav M4"
    },
    {
        thumb: "images/thumbnails/ejder_yalcin_thumbnail.jpg",
        title: "Elder Yalcin (Gidran)"
    },
    {
        thumb: "images/thumbnails/airbus_h145m_thumbnail.jpg",
        title: "Airbus H145M"
    },
    {
        thumb: "images/thumbnails/airbus_h225m_thumbnail.jpg",
        title: "Airbus H225M"
    },
    {
        thumb: "images/thumbnails/cz_bren2_thumbnail.jpg",
        title: "CZ BREN 2"
    },
    {
        thumb: "images/thumbnails/cz_scorpion_evo3_thumbnail.jpg",
        title: "CZ Scorpion EVO3"
    }
]

/* A nagy és kis képek indexeit tartalmazó változók deklarálása */
var currentPhoto = 0
var activeIndex = currentPhoto

/* A nagy képek változóba történő beolvasásának függvénye */
var loadImageContainer = function(currentPhoto) {
    $("#photo").attr("src", imagesData[currentPhoto].photo)
    $("#image-title").text(imagesData[currentPhoto].title)
    $("#image-description").text(imagesData[currentPhoto].description)
}

/* A kis képek beolvasása és html tag-jeinek létrehozása */ 
function loadThumbnails(itemData, index) {
    $("#thumbnails-container").append(
        `<div class="thumbnail-box">
            <img class="thumbnail" data-idx="${index}" src="${itemData.thumb}">
            <p class="title">${itemData.title}</p>
        </div>`
    )
}

/* Betölti az első fotót és a thumbnail-eket. */
loadImageContainer(currentPhoto)
thumbData.forEach(loadThumbnails)
console.log(activeIndex)
$(`.thumbnail[data-idx="${activeIndex}"]`).css({"box-shadow": "0 4px 8px black"})

/* A balra és jobbra nyilakkal történő navigálás lekezelése */
$("#arrow-left").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto > 0) {
        currentPhoto--
    } else {
        currentPhoto = imagesData.length - 1
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})

$("#arrow-right").click(function() {
    activeIndex = currentPhoto
    if(currentPhoto < imagesData.length - 1) {
        currentPhoto++
    } else {
        currentPhoto = 0
    }
    loadImageContainer(currentPhoto)
    activeThumbnail(activeIndex)
})

/* A kiválasztott kis képeknek megfelelő nagy fotóra váltás */
$(".thumbnail").click(function(event) {
    activeIndex = currentPhoto
    var idxClicked = $(event.target).attr("data-idx")
    var idxNumber = parseInt(idxClicked)
    currentPhoto = idxNumber
    activeThumbnail(activeIndex)
    loadImageContainer(currentPhoto)
})

function activeThumbnail (activeIndex) {
    $(`.thumbnail[data-idx="${activeIndex}"]`).removeAttr("style")
    activeIndex = currentPhoto
    $(`.thumbnail[data-idx="${activeIndex}"]`).css("box-shadow", "0 4px 8px black")
}