import { Request, Response, NextFunction } from "express";
import { UserRoutes } from "../user/user.routes";

export class AppRoutes {
    public userRoutePrv: UserRoutes = new UserRoutes();

    constructor() {}

    public userRoutes(app): void {
        this.userRoutePrv.userRoutes(app);  
    }

    public appRoutes(app): void {
        app.route('/')
        .get((req: Request, res: Response, next: NextFunction) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            })
        },)   
    }

} 