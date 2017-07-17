export class User {
    id: number;
    lastName: string;
    firstName: string;
    email: string;
    phone: string;
    relatives?: string;

    public constructor(id:number, lastName: string, firstName:string, email: string, phone:string, relatives: string) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.email = email;
        this.phone = phone;
        this.relatives = relatives;
    }
}