const sr = ScrollReveal({
	distance: '45px',
	duration: 2000,
	reset: true
})

sr.reveal('.home-text',{delay: 300, origin:'left'})
sr.reveal('.home-img',{delay: 300, origin:'right'})

sr.reveal('.sub-service, .about, .portifolio, .contact',{delay: 150, origin:'bottom'})