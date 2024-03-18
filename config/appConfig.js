const corsOptions = {
    header:"Access-Control-Allow-Origin",
    origin:"*",
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
};

module.exports = corsOptions;