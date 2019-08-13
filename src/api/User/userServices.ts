import { UserModel } from "./userModel";

const userModel = UserModel;

export class UserServices {
    public getUser(id) {
        userModel.findAll({ where: { id }});
    }
    public createUser(data: {username: string, firstName: string, lastName: string, password: string, email: string}) {
        userModel.create({
            username: data.username,
            firstName: data.firstName,
            lastName: data.lastName,
            password: data.password,
            email: data.email });
    }
    public updateUserDetails(username, newFirstName) {
        userModel.update(
            {firstName: newFirstName},
            {
                where: {username},
            });
            // .then( (results) => {
            //     console.log(results);
            // });
    }
}
