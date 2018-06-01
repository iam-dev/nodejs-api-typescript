import * as mongoose from 'mongoose';
import { UserSchema } from '../user/user.model';
import { Request, Response } from 'express';

const User = mongoose.model('User', UserSchema);

export class UserController {

    public addNewUser (req: Request, res: Response){
        let newUser = new User(req.body);
    
        newUser.save((err, user) => {
            if(err){
                res.send(err);
            }    
            res.json(user);
        });
    }

    public getUsers (req: Request, res: Response) {           
        User.find({}, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public getUserWithID (req: Request, res: Response) {           
        User.findById(req.params.userId, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public updateUser (req: Request, res: Response) {           
        User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json(user);
        });
    }

    public deleteUser (req: Request, res: Response) {           
        User.remove({ _id: req.params.usertId }, (err, user) => {
            if(err){
                res.send(err);
            }
            res.json({ message: 'Successfully deleted user!'});
        });
    }

    public setPassword(password) :void {
        User.setPassword(password);
    }

    public validPassword(password) {
        return User.validPassword(password);
    }

    public generateJwt() {
        return User.generateJwt();
    }
}