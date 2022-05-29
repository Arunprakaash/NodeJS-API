const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "uypuzhgtfzkuel",
    port: 5432,
    password: "6270900d1114cd9a7d8bf5ebc4eb2c37021d15c6d505f0dda8c09f6ca364a443",
    database: "dciuejfjchcg8b"
})

module.exports = client
