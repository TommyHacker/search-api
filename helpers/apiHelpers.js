//unfortunately i believe you now need a live website and paid plan to use custom google.api

// const apiKey = process.env.API_KEY;
// const url = `https://customsearch.googleapis.com/customsearch/v1?key=${apiKey}HTTP/1.1/`;

exports.randomiser = () => {
	let num = Math.floor(Math.random() * 10);
	return num;
};
