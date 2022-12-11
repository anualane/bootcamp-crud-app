import mongoose from 'mongoose';

const Connection = async (username, password) => {
    
    // const URL = `mongodb+srv://${username}:${password}@cluster0.yfvqaal.mongodb.net/crud?retryWrites=true&w=majority`
    const URL=`mongodb://${username}:${password}@ac-7jh4wcl-shard-00-00.nzx8bfd.mongodb.net:27017,ac-7jh4wcl-shard-00-01.nzx8bfd.mongodb.net:27017,ac-7jh4wcl-shard-00-02.nzx8bfd.mongodb.net:27017/crud?ssl=true&replicaSet=atlas-rrtcuu-shard-0&authSource=admin&retryWrites=true&w=majority`
    try {
        // 1 - Current URL string parser is deprecated, and will be removed in a future version. 
        // 2 - Current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version.

        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }
}

export default Connection;