export class User{
	
	id: number;
	username: string;
	password: string;
	token: string;
  email: string; 

	constructor(id?: number, username?:string, password?:string, email?:string) {
    this.id = id;
    this.username = username; 
    this.password = password;
    this.email = email;
	}

	//
	public static isNull(user: User): boolean {
        if (user == null)
          return true;
        else return  user.id === null && user.email === null;
    }
}