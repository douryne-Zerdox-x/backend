const CORS = {
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "OPTIONS, GET, POST",
		"Access-Control-Allow-Headers": "Content-Type",
	},
};


Bun.serve({
	async fetch(req) {
		// Handle CORS preflight requests
		if (req.method === "OPTIONS") {
			return new Response("Departed", CORS);
		};

		console.log(req);
		return new Response("Bun!", CORS);
	},
});

