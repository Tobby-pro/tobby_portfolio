export async function POST() {
	try {
	  const { data, error } = await resend.emails.send({
		from: 'Tobi <tobbywomiloju@gmail.com>',
		to: ['womilojubanks@gmail.com'],
		subject: 'Hello world',
		html: `
		  <p>
			Email body
		  </p>
		`, // Converted JSX to a string for email body
	  });
  
	  if (error) {
		return Response.json({ error }, { status: 500 });
	  }
  
	  return Response.json(data);
	} catch (error) {
	  return Response.json({ error }, { status: 500 });
	}
  }