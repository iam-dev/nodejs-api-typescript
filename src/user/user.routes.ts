import { Request, Response, NextFunction } from "express";
import { UserController } from '../user/user.controller';

export class UserRoutes {
    public userController: UserController = new UserController();

    public userRoutes(app): void {
        // User V1 API
        app.route('/api/v1/user')
            //GET endpoint
            .get((req: Request, res: Response, next: NextFunction) => {
                // middleware
                console.log(`Request from: ${req.originalUrl}`);
                console.log(`Request type: ${req.method}`);
                next();
            }, this.userController.getUsers)        

            // POST endpoint
            .post(this.userController.addNewUser);

        // User detail
        app.route('/api/v1/user/:usertId')
            // get specific contact
            .get(this.userController.getUserWithID)
            
            //PUT endpoint
            .put(this.userController.updateUser)

            //DELETE endpoint
            .delete(this.userController.deleteUser);

    }  
} 