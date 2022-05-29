const {Client} = require('pg')

const client = new Client('postgres://uypuzhgtfzkuel:6270900d1114cd9a7d8bf5ebc4eb2c37021d15c6d505f0dda8c09f6ca364a443@ec2-34-227-120-79.compute-1.amazonaws.com:5432/dciuejfjchcg8b')

module.exports = client
