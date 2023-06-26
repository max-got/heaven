type QandABasic = {
	question: string;
	answer: string;
};

type QandAHtml = {
	question: string;
	html: string;
};

export type QandA = QandABasic | QandAHtml;

export const QUESTIONS_AND_ANSWERS: QandA[] = [
	{
		question: 'Wo seid ihr?',
		html:
			'<p>Die Läden befinden sich im <a href="https://www.google.com/maps/dir//52.39938986025959,%2013.04906568287724">Sperlingshof, Brandenburger Straße 4, Potsdam</a></p>'
	},
	{
		question: 'Was verkauft Writers Heaven?',
		answer:
			'Writers Heaven sepzialisiert sich auf Grafitti & Streetart. Hier findest du eine Vielzahl von Dosen, Markern, Sketchbooks, Stickern und vielem mehr, um deine kreative Seite auszuleben.'
	},
	{
		question: 'Was bietet  Smokers Heaven an?',
		answer:
			'Smokers Heaven ist unser Laden, der sich auf Raucherzubehör und CBD-Produkte spezialisiert hat. Hier findest du eine große Auswahl an Shishas, Shisha-Tabak, E-Zigaretten, Liquids, CBD-Blüten, Ölen und Liquids.'
	},
	{
		question: 'Gibt es weitere Produkte in den Läden?',
		answer:
			'Ja, neben den Hauptprodukten bieten sowohl Writers Heaven als auch Smokers Heaven eine Vielzahl weiterer Produkte an, die mit den jeweiligen Themenbereichen verbunden sind. Besuche uns doch einfach, um die vollständige Auswahl zu entdecken!'
	},
	{
		question: 'Bietet ihr auch Beratung zu den Produkten an?',
		answer:
			'Auf jeden Fall! Unser freundliches und sachkundiges Personal steht dir gerne zur Verfügung, um Fragen zu beantworten und dich bei der Auswahl der richtigen Produkte zu unterstützen. Zögere nicht, uns anzusprechen.'
	},
	{
		question: 'Kann ich auch online vorab Fragen zu den Produkten stellen?',
		answer:
			'Ja, du kannst uns online Fragen zu den Produkten stellen. Nutze hierfür das Kontaktformular auf unserer Website, und wir werden uns so schnell wie möglich bei dir melden.'
	},
	{
		question: 'Gibt es in der Nähe Cafés, welche ich besuchen kann?',
		html: `<p>Ja, na klar!<br/>Aber es kommt noch besser; wir haben unser eigenes Cafe!<br/><br/> Besuche uns
					im <a href="https://www.coffee-heaven-potsdam.de/">Coffee Heaven</a> und genieße eine große Auswahl an Kaffee, Tee, Kuchen und vielem mehr.<br/><br/></p>
					<p>Das Coffee Heaven befindet sich direkt neben den Läden, sodass du  direkt vorbeischauen kannst!</p>`
	}
];
