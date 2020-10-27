const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

// NAV LINKS
const navLink1 = document.querySelector('header nav a');
navLink1.textContent = 'Services';

const navLink2 = navLink1.nextElementSibling;
navLink2.textContent = 'Product';

const navLink3 = navLink2.nextElementSibling;
navLink3.textContent = 'Vision';

const navLink4 = navLink3.nextElementSibling;
navLink4.textContent = 'Features';

const navLink5 = navLink4.nextElementSibling;
navLink5.textContent = 'About';

const navLink6 = navLink5.nextElementSibling;
navLink6.textContent = 'Contact';
// END NAV LINKS

// TITLE STUFF
const siteTitle = document.querySelector('h1');
siteTitle.innerText = 'DOM \n IS \n AWESOME';

const titleButton = document.querySelector('button');
titleButton.textContent = 'Get Started';

const titleImg = document.getElementById('cta-img');
titleImg.setAttribute('src', 'img/header-img.png'); 
// END TITLE STUFF

// MAIN CONTENT

// TOP CONTENT
const featuresHead = document.querySelector('.top-content .text-content:nth-of-type(1) h4');
featuresHead.textContent = 'Features';

const aboutHead = document.querySelector('.top-content .text-content:nth-of-type(2) h4');
aboutHead.textContent = 'About';

const featuresTxt = document.querySelector('.top-content .text-content:nth-of-type(1) p');
featuresTxt.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const aboutTxt = document.querySelector('.top-content .text-content:nth-of-type(2) p');
aboutTxt.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
// END TOP CONTENT

// MIDDLE IMAGE
const midImg = document.getElementById('middle-img');
midImg.setAttribute('src', 'img/mid-page-accent.jpg');
// END MIDDLE IMAGE

// BOTTOM CONTENT

const servicesHead = document.querySelector('.bottom-content .text-content:nth-of-type(1) h4');
servicesHead.textContent = 'Services';

const productHead = document.querySelector('.bottom-content .text-content:nth-of-type(2) h4');
productHead.textContent = 'Product';

const visionHead = document.querySelector('.bottom-content .text-content:nth-of-type(3) h4');
visionHead.textContent = 'Vision';

const servicesTxt = document.querySelector('.bottom-content .text-content:nth-of-type(1) p');
servicesTxt.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const productTxt = document.querySelector('.bottom-content .text-content:nth-of-type(2) p');
productTxt.textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const visionTxt = document.querySelector('.bottom-content .text-content:nth-of-type(3) p');
visionTxt.textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

// END BOTTOM CONTENT

// CONTACT

const contactHead = document.querySelector('.contact h4');
contactHead.textContent = 'Contact';

const contactAddr = document.querySelector('.contact p');
contactAddr.innerText = '123 Way 456 Street \n Somewhere, USA';

const contactNum = contactAddr.nextElementSibling;
contactNum.textContent = '1 (888) 888-8888';

const contactEmail = contactNum.nextElementSibling;
contactEmail.textContent = 'sales@greatidea.io';


// END CONTACT

// FOOTER

const copyRight = document.querySelector('footer p');
copyRight.textContent = 'Copyright Great Idea! 2018';

// END FOOTER
// END MAIN CONTENT



