import { Context, DateTimeColumn, EntityClass, IdEntity, ServerFunction, StringColumn, UserInfo } from "@remult/core";

@EntityClass
export class Users extends IdEntity {
    name = new StringColumn({
        validate:()=>{
            if (this.name.value.length<3)
                this.name.validationError = 'Name is too short';
        }
    });
    createdDate = new DateTimeColumn();
    constructor() {
        super({
            name: 'users',
            allowApiCRUD: true,
            saving: () => {
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
        return user;
    }
}