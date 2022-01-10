import '../scss/style.scss';
import mouseImgSource from '../img/scroll.svg';
// add svg
const mouseImage = document.querySelector(`.scroll-icon>a>img`);
mouseImage.src = mouseImgSource;
// add gallery
import bigSrc from '../img/big.jpg';
import medSrc from '../img/mid1.jpg';
import medTwoSrc from '../img/mid2.jpg';
import smallSrc from '../img/small1.jpg';
import smallTwoSrc from '../img/small2.jpg';

const imgBig = document.createElement(`img`);
imgBig.classList.add(`gallery__big`);
const imgMed = document.createElement(`img`);
imgMed.classList.add(`gallery__med`);
const imgMedTwo = document.createElement(`img`);
imgMedTwo.classList.add(`gallery__med-two`);
const imgSmall = document.createElement(`img`);
imgSmall.classList.add(`gallery__small`);
const imgSmallTwo = document.createElement(`img`);
imgSmallTwo.classList.add(`gallery__small-two`);


imgBig.src = bigSrc;
imgBig.alt = `cut peach on plate`;
imgMed.src = medSrc;
imgMed.alt = `blueberries`;
imgMedTwo.src = medTwoSrc;
imgMedTwo.alt = `blackberries`;
imgSmall.src = smallSrc;
imgSmall.alt = `bowl with milk and blueberries`;
imgSmallTwo.src = smallTwoSrc;
imgSmallTwo.alt = `persimmon`;

const galleryGrid = document.querySelector(`.gallery__grid`);

galleryGrid.append(imgBig, imgMed, imgMedTwo, imgSmall, imgSmallTwo);