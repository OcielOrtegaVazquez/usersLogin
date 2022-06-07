const sql = require('mssql');

var config = {
    options: {
        enableArithAbort: false,
        trustServerCertificate: true,
    },
    //user: 'sa',
    user: "copladii_admin",
    //password: 'Passw0rd',
    password: "4dMC0pl419!!",
    //server: 'localhost\\SQL2017', // You can use 'localhost\\instance' to connect to named instance
    server: "192.168.206.113",
    database: "SAM",
};

//Intencion de conexióm
sql.connect(config, (err) => {
    if (err) {
        throw err;
    }
    console.log("Connection Successful !");
    new sql.Request().query("select 1 as number", (err, result) => {
        console.dir(result);
    });
});

sql.on("error", (err) => {
    console.log("Sql database connection error ", err);
});

module.exports = config;