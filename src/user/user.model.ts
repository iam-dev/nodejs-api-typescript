import * as mongoose from 'mongoose';
import * as crypto from 'crypto';
import * as jwt from 'jsonwebtoken';
import { environment }  from '../../environments/environment';

let Schema = mongoose.Schema;

export let UserSchema = new Schema ({
    username: { 
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
        index: true,
        unique:true 
    },
    email:  { 
        type: String, 
        lowercase: true, 
        required: [true, "can't be blank"], 
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true,
        unique:true
    },
    description: String,
    hash: String,
    salt: String,
    //personId: {
    //    type: Schema.Types.ObjectId,
    //    ref: 'Person'
    //},
    effectiveDateFrom: Date,
    effectiveDateTo: Date,    
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lastUpdatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
}, { timestamps: true });

UserSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};


UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};

UserSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
  
    return jwt.sign({
      _id: this._id,
      email: this.email,
      name: this.name,
      exp: Math.floor(expiry.getTime() / 1000),
    }, environment.secret); // DO NOT KEEP YOUR SECRET IN THE CODE!
  
};
