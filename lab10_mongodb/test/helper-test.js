const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server'); // For in-memory MongoDB

let mongoServer;

module.exports = {
    connect: async () => {
        mongoServer = await MongoMemoryServer.create();
        const mongoUri = mongoServer.getUri();
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    },
    disconnect: async () => {
        await mongoose.disconnect();
        await mongoServer.stop();
    }
};
