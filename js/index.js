const siteContent = {
    nav: {
        "nav-item-1": "Services",
        "nav-item-2": "Product",
        "nav-item-3": "Vision",
        "nav-item-4": "Features",
        "nav-item-5": "About",
        "nav-item-6": "Contact",
        "img-src": "img/logo.png"
    },
    cta: {
        h1: "DOM Is Awesome",
        button: "Get Started",
        "img-src": "img/header-img.png"
    },
    "main-content": {
        "features-h4": "Features",
        "features-content":
            "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "about-h4": "About",
        "about-content":
            "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "middle-img-src": "img/mid-page-accent.jpg",
        "services-h4": "Services",
        "services-content":
            "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "product-h4": "Product",
        "product-content":
            "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
        "vision-h4": "Vision",
        "vision-content":
            "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
    },
    contact: {
        "contact-h4": "Contact",
        address: "123 Way 456 Street Somewhere, USA",
        phone: "1 (888) 888-8888",
        email: "sales@greatidea.io"
    },
    footer: {
        copyright: "Copyright Great Idea! 2018"
    }
};
window.onload = () => {
    // Example: Update the img src for the logo
    let logo = document.getElementById("logo-img");
    logo.setAttribute("src", siteContent["nav"]["img-src"]);


    let nav = document.querySelectorAll("a");

    for (let i = 0; i < nav.length; i++) {
        nav[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
        nav[i].style.color = "green";
    }
    const navBar = document.querySelector("nav");
    const help = document.createElement("a");
    const workpls = document.createElement("a");

    help.href = "#";
    help.textContent = "I wonder";
    help.style.color = "green";

    workpls.href = "#";
    workpls.textContent = "workpls";
    workpls.style.color = "green";

    navBar.append(help);
    navBar.prepend(workpls);

    let ctaH1 = document.querySelector(".cta-text h1");
    ctaH1.textContent = siteContent["cta"]["h1"];

    let ctaIMG = document.querySelector("#cta-img");
    ctaIMG.src = siteContent["cta"]["img-src"];

    let ctaButton = document.querySelector(".cta-text button");
    ctaButton.textContent = siteContent["cta"]["button"];

    let topContentHead = document.querySelectorAll(
        ".top-content .text-content h4"
    );
    topContentHead[0].textContent = "Features";
    topContentHead[1].textContent = "About";

    let topContent = document.querySelectorAll(".top-content .text-content p");
    topContent[0].textContent = siteContent["main-content"]["features-content"];
    topContent[1].textContent = siteContent["main-content"]["about-content"];

    let midImg = document.getElementById("middle-img");
    midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

    let bottomContentHead = document.querySelectorAll(
        ".bottom-content .text-content h4"
    );
    bottomContentHead[0].textContent =
        siteContent["main-content"]["services-h4"];
    bottomContentHead[1].textContent =
        siteContent["main-content"]["product-h4"];
    bottomContentHead[2].textContent = siteContent["main-content"]["vision-h4"];

    let bottomContent = document.querySelectorAll(
        ".bottom-content .text-content p"
    );
    bottomContent[0].textContent =
        siteContent["main-content"]["services-content"];
    bottomContent[1].textContent =
        siteContent["main-content"]["product-content"];
    bottomContent[2].textContent =
        siteContent["main-content"]["vision-content"];

    let contactH4 = document.querySelector(".contact h4");
    contactH4.textContent = siteContent["contact"]["contact-h4"];

    let contactContent = document.querySelectorAll(".contact p");
    contactContent[0].textContent = siteContent["contact"]["address"];
    contactContent[1].textContent = siteContent["contact"]["phone"];
    contactContent[2].textContent = siteContent["contact"]["email"];

    let footer = document.querySelector("footer p");
    footer.textContent = siteContent["footer"]["copyright"];
};
