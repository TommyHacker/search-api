const dataArr = [
	(page1 = {
		title: 'Dogpage',
		description:
			"The dog or domestic dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf, and is characterized by an upturning tail. The dog is derived from an ancient, extinct wolf, and the modern wolf is the dog's nearest living relative.",
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Lengthy_body_Kanni.jpg/1024px-Lengthy_body_Kanni.jpg',
		fact: 'The dog was the first species to be domesticated.',
	}),
	(page2 = {
		title: 'Sloth page',
		description:
			'Sloths are a group of arboreal Neotropical xenarthran mammals, constituting the suborder Folivora. Noted for their slowness of movement, they spend most of their lives hanging upside down in the trees of the tropical rainforests of South America and Central America. They are considered to be most closely related to anteaters, together making up the xenarthran order Pilosa.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Bicho-pregui%C3%A7a_3.jpg/1024px-Bicho-pregui%C3%A7a_3.jpg',
		fact: 'Sloth, related to slow, literally means (laziness)',
	}),
	(page3 = {
		title: 'Crocodile page',
		description:
			'Crocodiles (family Crocodylidae) or true crocodiles are large semiaquatic reptiles that live throughout the tropics in Africa, Asia, the Americas and Australia. The term crocodile is sometimes used even more loosely to include all extant members of the order Crocodilia, which includes the alligators and caimans (family Alligatoridae), the gharial and false gharial (family Gavialidae) among other extinct taxa.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/220px-Nile_crocodile_head.jpg',
		fact: 'All crocodiles are tropical species that, unlike alligators, are very sensitive to cold. ',
	}),
	(page4 = {
		title: 'Capybara page',
		description:
			'capybara (Hydrochoerus hydrochaeris) is a giant cavy rodent native to South America. It is the largest living rodent and a member of the genus Hydrochoerus. The only other extant member is the lesser capybara (Hydrochoerus isthmius). Its close relatives include guinea pigs and rock cavies, and it is more distantly related to the agouti, the chinchilla, and the nutria.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Capybara_%28Hydrochoerus_hydrochaeris%29.JPG/1024px-Capybara_%28Hydrochoerus_hydrochaeris%29.JPG',
		fact: 'The capybara is hunted for its meat and hide and also for grease from its thick fatty skin. It is not considered a threatened species.',
	}),
	(page5 = {
		title: 'Cobra page',
		description:
			'Cobra is the common name of various elapid snakes, most of which belong to the genus Naja.All of the known cobras are venomous and many are capable of rearing upwards and producing a hood when threatened.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Indiancobra.jpg',
		fact: 'The false water cobra (Hydrodynastes gigas) is the only "cobra" species that is not a member of the Elapidae. It does not rear upwards, produces only a slight flattening of the neck when threatened, and is only mildly venomous.',
	}),
	(page6 = {
		title: 'Rat page',
		description:
			"Rats are various medium-sized, long-tailed rodents. Species of rats are found throughout the order Rodentia, but stereotypical rats are found in the genus Rattus. Other rat genera include Neotoma (pack rats), Bandicota (bandicoot rats) and Dipodomys (kangaroo rats).Rats are typically distinguished from mice by their size. Usually the common name of a large muroid rodent will include the word 'rat', while a smaller muroid's name will include 'mouse'. The common terms rat and mouse are not taxonomically specific. There are 56 known species of rats in the world.",
		url: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Rattus_norvegicus_1.jpg',
		fact: 'The best-known rat species are the black rat (Rattus rattus) and the brown rat (Rattus norvegicus). This group, generally known as the Old World rats or true rats, originated in Asia.',
	}),
	(page7 = {
		title: 'Dragonfly page',
		description:
			'A dragonfly is a flying insect belonging to the order Odonata, infraorder Anisoptera (from Greek ἄνισος anisos, "unequal" and πτερόν pteron, "wing", because the hindwing is broader than the forewing). Adult dragonflies are characterized by a pair of large, multifaceted compound eyes, two pairs of strong, transparent wings, sometimes with coloured patches, and an elongated body. Dragonflies can be mistaken for the closely related damselflies, which make up the other odonatan infraorder (Zygoptera) and are similar in body plan though usually lighter in build; however, the wings of most dragonflies are held flat and away from the body, while damselflies hold their wings folded at rest, along or above the abdomen.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Sympetrum_flaveolum_-_side_%28aka%29.jpg/1024px-Sympetrum_flaveolum_-_side_%28aka%29.jpg',
		fact: 'Fossils of very large dragonfly-like insects, sometimes called griffinflies, are found from 325 million years ago (Mya) in Upper Carboniferous rocks; these had wingspans up to about 750 mm (30 in), but were only distant ancestors, not true dragonflies.',
	}),
	(page8 = {
		title: 'Giraffe page',
		description:
			'The giraffe is a tall African hoofed mammal belonging to the genus Giraffa. It is the tallest living terrestrial animal and the largest ruminant on Earth. Traditionally, giraffes were thought to be one species, Giraffa camelopardalis, with nine subspecies. Most recently, researchers proposed dividing them into up to eight extant species due to new research into their mitochondrial and nuclear DNA, as well as morphological measurements. Seven other extinct species of Giraffa are known from the fossil record.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_Mikumi_National_Park.jpg/220px-Giraffe_Mikumi_National_Park.jpg',
		fact: 'Lions, leopards, spotted hyenas, and African wild dogs may prey upon giraffes. Giraffes live in herds of related females and their offspring, or bachelor herds of unrelated adult males, but are gregarious and may gather in large aggregations. Males establish social hierarchies through "necking", combat bouts where the neck is used as a weapon.',
	}),
	(page9 = {
		title: 'Goblin-shark page',
		description:
			'The goblin shark (Mitsukurina owstoni) is a rare species of deep-sea shark. Sometimes called a "living fossil", it is the only extant representative of the family Mitsukurinidae, a lineage some 125 million years old. This pink-skinned animal has a distinctive profile with an elongated, flat snout, and highly protrusible jaws containing prominent nail-like teeth. It is usually between 3 and 4 m (10 and 13 ft) long when mature, though it can grow considerably larger such as one captured in 2000 that is thought to have measured 6 m (20 ft).',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Mitsu.JPG/1024px-Mitsu.JPG',
		fact: 'The goblin shark has a distinctively long and flat snout, resembling a blade. The proportional length of the snout decreases with age.',
	}),
	(page10 = {
		title: 'Echidnas page',
		description:
			'Echidnas (/ɪˈkɪdnəz/), sometimes known as spiny anteaters,[1] are quill-covered[2] monotremes (egg-laying mammals) belonging to the family Tachyglossidae /tækiˈɡlɒsɪdiː/. The four extant species of echidnas and the platypus are the only living mammals that lay eggs and the only surviving members of the order Monotremata.[3] The diet of some species consists of ants and termites, but they are not closely related to the true anteaters of the Americas, which (along with sloths and armadillos) are xenarthrans. Echidnas live in Australia and New Guinea.',
		url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Short-beaked_echidna_in_ANBG.jpg/1024px-Short-beaked_echidna_in_ANBG.jpg',
		fact: 'Echidnas evolved between 20 and 50 million years ago, descending from a platypus-like monotreme. This ancestor was aquatic, but echidnas adapted to life on land.',
	}),
];

module.exports = dataArr;
