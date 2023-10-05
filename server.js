const app = require("./silksonic-songbook/server/app");
const { db } = require("./silksonic-songbook/server/models")
const port = 4000;

const init = async () => {
    try{
        await db.sync();
        app.listen(port, () => {
            db.sync();
            console.log(`Listening at http://localhost:${port}`);
    });
} catch (error) {
    console.error('Error starting server:', error)
}


};
init();