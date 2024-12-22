function scrollToTop() {
    const scrollContainer = document.querySelector('.wrapper2');
    if (scrollContainer) {
        scrollContainer.scrollTop = 0; //reset to katheto scrollbar panw se kathe pathma button
    }
}

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        scrollToTop();
    });
});


let buttonBiography = document.querySelector('#buttonBiography');   //BIOGRAPHY - MAIN
let msg1 = document.querySelector('#set1');

buttonBiography.addEventListener('click', () => { //otan pataw to koumpi gia thn biografia
    document.querySelector('#set1').style.display = 'block';   //emfanise to 1o set koumpiwn sto aside menu
    document.querySelector('#set2').style.display = 'none'; //kai krupse ola ta upoloipa
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set4').style.display = 'none';
    document.querySelector('#set5').style.display = 'none';
    document.querySelector('#set6').style.display = 'none';
    document.querySelector('#set7').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#paintingsPhotos').style.display = 'none';
    document.querySelector('#drawingsPhotos').style.display = 'none';
    document.querySelector('#PaintingLinks').style.display = 'none';
    document.querySelector('#PortraitLinks').style.display = 'none';
    document.querySelector('#DrawingLinks').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#loginform').style.display = 'none';

})

// EARLY LIFE
let buttonEarlyLifeside = document.querySelector('#buttonEarlyLifeside');
let msg2 = document.querySelector('#contentEarlyLife');

buttonEarlyLifeside.addEventListener('click', () => {
    document.querySelector('#contentEarlyLife').style.display = 'block';
    document.querySelector('#contentCareer').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
})
// CAREER
let buttonCareerside = document.querySelector('#buttonCareerside');
let msg3 = document.querySelector('#contentCareer');

buttonCareerside.addEventListener('click', () => {
    document.querySelector('#contentCareer').style.display = 'block';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
})
// FINAL YEARS
let buttonFinalYearsside = document.querySelector('#buttonFinalYearsside');
let msg4 = document.querySelector('#contentFinalYears');

buttonFinalYearsside.addEventListener('click', () => {
    document.querySelector('#contentFinalYears').style.display = 'block';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
})

let buttonArtwork = document.querySelector('#buttonArtwork');   // ARTWORK - MAIN
let msg5 = document.querySelector('#set2');

buttonArtwork.addEventListener('click', () => {
    document.querySelector('#set2').style.display = 'block';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set4').style.display = 'none';
    document.querySelector('#set5').style.display = 'none';
    document.querySelector('#set6').style.display = 'none';
    document.querySelector('#set7').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#PaintingLinks').style.display = 'none';
    document.querySelector('#PortraitLinks').style.display = 'none';
    document.querySelector('#DrawingLinks').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#paintingsPhotos').style.display = 'none';
    document.querySelector('#drawingsPhotos').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
    document.querySelector('#loginform').style.display = 'none';
})
// PORTRAITS
let buttonPortraits = document.querySelector('#buttonPortraits');
let msg6 = document.querySelector('#portraitsPhotos');

buttonPortraits.addEventListener('click', () => {
    document.querySelector('#portraitsPhotos').style.display = 'block';
    document.querySelector('#paintingsPhotos').style.display = 'none';
    document.querySelector('#drawingsPhotos').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
})
// PAINTINGS
let buttonPaintings = document.querySelector('#buttonPaintings');
let msg16 = document.querySelector('#paintingsPhotos');

buttonPaintings.addEventListener('click', () => {
    document.querySelector('#paintingsPhotos').style.display = 'block';
    document.querySelector('#drawingsPhotos').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
})
// DRAWINGS
let buttonDrawings = document.querySelector('#buttonDrawings');
let msg17 = document.querySelector('#drawingsPhotos');

buttonDrawings.addEventListener('click', () => {
    document.querySelector('#drawingsPhotos').style.display = 'block';
    document.querySelector('#paintingsPhotos').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
})

let buttonExhibitions = document.querySelector('#buttonExhibitions');   // EXHIBITIONS - MAIN
let msg7 = document.querySelector('#set3');

buttonExhibitions.addEventListener('click', () => {
    document.querySelector('#set3').style.display = 'block';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set2').style.display = 'none';
    document.querySelector('#set4').style.display = 'none';
    document.querySelector('#set5').style.display = 'none';
    document.querySelector('#set6').style.display = 'none';
    document.querySelector('#set7').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#PaintingLinks').style.display = 'none';
    document.querySelector('#PortraitLinks').style.display = 'none';
    document.querySelector('#DrawingLinks').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#paintingsPhotos').style.display = 'none';
    document.querySelector('#drawingsPhotos').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
    document.querySelector('#loginform').style.display = 'none';

})
// PAST EXHIBITIONS
let buttonPastExh = document.querySelector('#buttonPastExh');
let msg8 = document.querySelector('#past');

buttonPastExh.addEventListener('click', () => {
    document.querySelector('#past').style.display = 'block';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#PaintingLinks').style.display = 'none';
    document.querySelector('#PortraitLinks').style.display = 'none';
    document.querySelector('#DrawingLinks').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#paintingsPhotos').style.display = 'none';
    document.querySelector('#drawingsPhotos').style.display = 'none';
    document.querySelector('#set2').style.display = 'none';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
})
// CURRENT EXHIBITIONS
let buttonCurrentExh = document.querySelector('#buttonCurrentExh');
let msg9 = document.querySelector('#current');

buttonCurrentExh.addEventListener('click', () => {
    document.querySelector('#current').style.display = 'block';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#set2').style.display = 'none';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set7').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
})
// UPCOMING EXHIBITIONS
let buttonUpcomingExh = document.querySelector('#buttonUpcomingExh');
let msg10 = document.querySelector('#upcoming');

buttonUpcomingExh.addEventListener('click', () => {
    document.querySelector('#upcoming').style.display = 'block';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#set2').style.display = 'none';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set7').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
})


let buttonLinks = document.querySelector('#buttonLinks');   // LINKS - MAIN
let msg12 = document.querySelector('#set4');

buttonLinks.addEventListener('click', () => {
    document.querySelector('#set4').style.display = 'block';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set2').style.display = 'none';
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set5').style.display = 'none';
    document.querySelector('#set6').style.display = 'none';
    document.querySelector('#set7').style.display = 'none';
    document.querySelector('#PaintingLinks').style.display = 'none';
    document.querySelector('#PortraitLinks').style.display = 'none';
    document.querySelector('#DrawingLinks').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#paintingsPhotos').style.display = 'none';
    document.querySelector('#drawingsPhotos').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
    document.querySelector('#loginform').style.display = 'none';

})
// PINAKAS ME LINKS APO PORTRAITS
let buttonPortraitsLink = document.querySelector('#buttonPortraitsLink');
let msg25 = document.querySelector('#PortraitLinks');

buttonPortraitsLink.addEventListener('click', () => {
    document.querySelector('#PortraitLinks').style.display = 'block';
    document.querySelector('#DrawingLinks').style.display = 'none';
    document.querySelector('#PaintingLinks').style.display = 'none';
    document.querySelector('#set2').style.display = 'none';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set5').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#paintingsPhotos').style.display = 'none';
    document.querySelector('#drawingsPhotos').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
})
// PINAKAS ME LINKS APO PAINTINGS
let buttonPaintingsLink = document.querySelector('#buttonPaintingsLink');
let msg24 = document.querySelector('#PaintingLinks');

buttonPaintingsLink.addEventListener('click', () => {
    document.querySelector('#PaintingLinks').style.display = 'block';
    document.querySelector('#PortraitLinks').style.display = 'none';
    document.querySelector('#DrawingLinks').style.display = 'none';
    document.querySelector('#set2').style.display = 'none';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set5').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#paintingsPhotos').style.display = 'none';
    document.querySelector('#drawingsPhotos').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
})
// PINAKAS ME LINKS APO DRAWINGS
let buttonDrawingsLink = document.querySelector('#buttonDrawingsLink');
let msg23 = document.querySelector('#DrawingLinks');

buttonDrawingsLink.addEventListener('click', () => {
    document.querySelector('#DrawingLinks').style.display = 'block';
    document.querySelector('#PortraitLinks').style.display = 'none';
    document.querySelector('#PaintingLinks').style.display = 'none';
    document.querySelector('#set2').style.display = 'none';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set5').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#paintingsPhotos').style.display = 'none';
    document.querySelector('#drawingsPhotos').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
})

let buttonManagement = document.querySelector('#buttonManagement');  // MANAGEMENT - MAIN
let msg13 = document.querySelector('#set5');
i = 0;
buttonManagement.addEventListener('click', () => {
    document.querySelector('#set5').style.display = 'block';
    document.querySelector('#set2').style.display = 'none';
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set4').style.display = 'none';
    document.querySelector('#set7').style.display = 'none';
    document.querySelector('#PaintingLinks').style.display = 'none';
    document.querySelector('#PortraitLinks').style.display = 'none';
    document.querySelector('#DrawingLinks').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#paintingsPhotos').style.display = 'none';
    document.querySelector('#drawingsPhotos').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
    document.querySelector('#contentFinalYears').style.display = 'none';
    document.querySelector('#contentEarlyLife').style.display = 'none';
    document.querySelector('#contentCareer').style.display = 'none';
    document.querySelector('#loginform').style.display = 'none';

})
// LOGIN
let buttonLogin = document.querySelector('#buttonLogin');
let msg14 = document.querySelector('#loginform');

buttonLogin.addEventListener('click', () => {
    document.querySelector('#loginform').style.display = 'block';
    document.querySelector('#set1').style.display = 'none';
    document.querySelector('#set2').style.display = 'none';
    document.querySelector('#set3').style.display = 'none';
    document.querySelector('#set4').style.display = 'none';
    document.querySelector('#portraitsPhotos').style.display = 'none';
    document.querySelector('#current').style.display = 'none';
    document.querySelector('#upcoming').style.display = 'none';
    document.querySelector('#past').style.display = 'none';
})
