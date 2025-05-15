import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from '../Repository/Repository';



@Injectable({ providedIn: 'root' })
export class AuthService {

  
private _storage: Storage | null = null;


//Default mock user
private defaultUsers: User[] = [
  {id: Date.now(), username: 'thusozedd@gmail.com', password: 'Thuso@21'}
];


constructor(private storage: Storage)
{
  this.init();
}




//Initialize storage and set default user if none exist
async init()
{
  const storage = await this.storage.create(); // create storage
  this._storage = storage; //Assign the storage to a local variable

  //Check if users alredy exist
  const users = await this._storage.get('users');
  if(!users)
  {
    //Set the default user array
    await this._storage.set('users', this.defaultUsers)
  }
}


//Get all users
async getUsers(): Promise<User[]>
{
  return await this._storage?.get('users') || [];
}


//Add/register new user
async addUser(user: User): Promise<void>
{
  const newUser = await this.getUsers();
  newUser.push(user);
  await this._storage?.set('users', newUser)
}


//Login
async login(email: string, password: string): Promise<boolean>
{
  const users = await this.getUsers();
  return users.some(u => u.username === email && u.password === password);
}

  
}