import { DataTypes, Sequelize, Model } from "sequelize";
import db from "../database/db";

export interface UserModelAttributes {
    id: string;
    fullName: string;
    email: string;
    user_password: string;
}

class UserModel extends Model<UserModelAttributes> {
    public id!: string;
    public fullName!: string;
    public email!: string;
    public user_password!: string;
}

UserModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        user_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db, 
        tableName: "users", 
        timestamps: false,
    }
);

export default UserModel;
