import mysql = require('mysql');

export default class MySQL {

    private static _instance: MySQL;

    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor( ) {
        console.log('Clase inicializada');

        this.cnn = mysql.createConnection({
            host     : 'localhost',
            port     : 8889,
            user     : 'node_user',
            password : '123456',
            database : 'node_db'
        });

        this.conectarDB();
    }

    public static get instance() {

        if ( !this._instance ) {
            this._instance = new this();
        }

        return this._instance;
    }


    private conectarDB() {

        this.cnn.connect( (err: mysql.MysqlError ) => {

            if ( err ) {
                console.log( err.message );
                return;
            }

            this.conectado = true;
            console.log('base de datos online');

        });

    }


}
