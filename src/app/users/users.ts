import { BoolColumn, Context, DateTimeColumn, EntityClass, IdEntity, ServerFunction, StringColumn, UserInfo } from "@remult/core";
import { Roles } from './roles';

@EntityClass
export class Users extends IdEntity {
    name = new StringColumn({
        validate: () => {
            if (this.name.value.length < 3)
                this.name.validationError = 'Name is too short';
        }
    });
    isAdmin = new BoolColumn();
    createdDate = new DateTimeColumn();
    constructor(context:Context) {
        super({
            name: 'users',
            allowApiCRUD: Roles.canUpdateUsers,
            allowApiRead: context => context.isSignedIn(),
            saving: () => {
                console.log(context.user);
                if (this.isNew())
                    this.createdDate.value = new Date()
            }
        })
    }
    @ServerFunction({ allowed: true })
    static async signIn(name: string, context?: Context) {
        const u = await context.for(Users).findFirst(user => user.name.isEqualTo(name));
        if (!u)
            throw "user does not exist";
        const user: UserInfo = {
            id: u.id.value,
            name: u.name.value,
            roles: []
        };
        if (u.isAdmin.value)
            user.roles.push(Roles.canUpdateUsers);
        return Users.createToken( user);
    }
    static createToken: (user: UserInfo) => string;
}