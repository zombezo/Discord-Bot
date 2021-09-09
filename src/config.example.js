const config = {
	ownerID: ['774229026797518869'],
	token: ''ODg0NzQ1MTc4MDMwNjc4MDE3.YTc9KA.cbMJ4tO6Lnf1OJUd6C2SgAOwjsQ,
	// For looking up Twitch, Fortnite, Steam accounts
	api_keys: {
		// https://dev.twitch.tv/console/apps
		twitch: {
			clientID: '',
			clientSecret: '',
		},
		// https://fortnitetracker.com/site-api
		fortnite: 'fortniteAPI-Key',
		// https://steamcommunity.com/dev
		steam: 'steamAPI-Key',
		// https://developer.spotify.com/documentation/web-api/
		spotify: {
			iD: 'b1fecfa4de574ad1bb9728e3e614a967',
			secret: '1dee6c324ad248988aab239ff778c597',
		},
		// Your Ubisoft email and password (You don't need to enable anything)
		rainbow: {
			email: 'email',
			password: 'password',
		},
		// https://genius.com/developers
		genuis: 'genuisAPI-KEY',
		// https://api.amethyste.moe/
		amethyste: 'amethysteAPI-Key',
	},
	// add plugins/commands here if you don't want them loaded in the bot.
	disabledCommands: [],
	disabledPlugins: [],
	websiteURL: 'Bot\'s dashboard',
	// your support server
	SupportServer: {
		// Link to your support server
		link: 'https://discord.gg/mCVhGWTWCr',
		// Your support's server ID
		GuildID: '877933607291867136',
		// This for using the suggestion command on your server
		ModRole: '884521934941982782',
		// What channel to post the suggestions
		SuggestionChannel: '877938203749912627',
		// Where the bot will send Guild join/leave messages to
		GuildChannel: '877936261233512449',
	},
	// URL to mongodb
	MongoDBURl: 'mongodb://https://cloud.mongodb.com/v2/613a553606a4592cc9bcaee4#host/replicaSet/613a5613cdd05d42ccc00281',
	// embed colour
	embedColor: 'RANDOM',
	// This will spam your console if you enable this but will help with bug fixing
	debug: false,
};

module.exports = config;
