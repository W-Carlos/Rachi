/* ScrollReveal Mostrar elementos quendo der scroll na página */

const scrollReveal = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: 700,
    reset: true
})

scrollReveal.reveal(
    `#home .text, #home .image, #home .button-register,
    #functionalities .subtitle, #functionalities .icon-functionalities,
    #app .app-content, #app .image, #app .icon-app,
    #plans .subtitle, #plans .plans-text, #plans .card,
    #contact .contact-content, #contact .envia-email,
    #footer .paragraph   

    `,{ interval: 100 }   
)