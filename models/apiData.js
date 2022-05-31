class Page {
	constructor(title, description, imageUrl, fact) {
		this.title = title;
		this.description = description;
		this.imageUrl = imageUrl;
		this.fact = fact;
	}
}

const page1 = new Page(
	'Dogpage',
	"The dog or domestic dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf, and is characterized by an upturning tail. The dog is derived from an ancient, extinct wolf, and the modern wolf is the dog's nearest living relative.",
	'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lengthy_body_Kanni.jpg/1024px-Lengthy_body_Kanni.jpg',
	'The dog was the first species to be domesticated.'
);

const page2 = new Page(
	'Sloth page',
	'Sloths are a group of arboreal Neotropical xenarthran mammals, constituting the suborder Folivora. Noted for their slowness of movement, they spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America. They are considered to be most closely related to anteaters, together making up the xenarthran order Pilosa.',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bicho-pregui%C3%A7a_3.jpg/1024px-Bicho-pregui%C3%A7a_3.jpg',
	'Sloth, related to slow, literally means (laziness)'
);

const page3 = new Page(
	'Crocodile page',
	'Crocodiles (family Crocodylidae) or true crocodiles are large semiaquatic reptiles that live throughout the tropics in Africa, Asia, the Americas and Australia. The term crocodile is sometimes used even more loosely to include all extant members of the order Crocodilia, which includes the alligators and caimans (family Alligatoridae), the gharial and false gharial (family Gavialidae) among other extinct taxa.',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/220px-Nile_crocodile_head.jpg',
	'All crocodiles are tropical species that, unlike alligators, are very sensitive to cold. '
);

const page4 = new Page(
	'Capybara page',
	'capybara (Hydrochoerus hydrochaeris) is a giant cavy rodent native to South America. It is the largest living rodent and a member of the genus Hydrochoerus. The only other extant member is the lesser capybara (Hydrochoerus isthmius). Its close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the nutria.',
	'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/1024px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG',
	'The capybara is hunted for its meat and hide and also for grease from its thick fatty skin. It is not considered a threatened species.'
);

const page5 = new Page("Cobra page","Cobra is the common name of various elapid snakes, most of which belong to the genus Naja.All of the known cobras are venomous and many are capable of rearing upwards and producing a hood when threatened.","https://upload.wikimedia.org/wikipedia/commons/6/66/Indiancobra.jpg",""

)
