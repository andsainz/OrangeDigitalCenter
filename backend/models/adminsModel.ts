import { DataTypes, Model } from "sequelize";
import db from "../database/db";

export interface AdminModelAttributes {
    id: string;
    fullName: string;
    email: string;
    admin_password: string;
    role: string
}

class AdminModel extends Model<AdminModelAttributes> {
    public id!: string;
    public fullName!: string;
    public email!: string;
    public admin_password!: string;
    public role!: string
}

AdminModel.init(
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
        admin_password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "admin"
        },
    },
    {
        sequelize: db, 
        tableName: "admins", 
        timestamps: false,
    }
);

export default AdminModel;
