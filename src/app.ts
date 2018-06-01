
import * as express from "express";
import * as bodyParser from "body-parser";
import { AppRoutes } from "./routes/app.routes";
import * as mongoose from "mongoose";
import { environment }  from '../environments/environment';

class App{
    public app: express.Application;
    public appRoutePrv: AppRoutes = new AppRoutes();
    public mongoUrl: string = 'mongodb://' +environment.username +':' +environment.password +environment.mongodb;
    
    constructor() {
        this.app = express();
        this.config(); 
        this.appRoutePrv.userRoutes(this.app);
        this.appRoutePrv.appRoutes(this.app);  
        this.mongoSetup();    
    }

    private config(): void{
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

    private mongoSetup(): void{
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);    
    }
}

export default new App().app;