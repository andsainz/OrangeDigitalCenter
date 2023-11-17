import { DataTypes, Model } from "sequelize";
import db from "../database/db";

export interface SubscribedModelAttributes {
    id: string;
    fullName: string;
    email: string;
}

class SubscribedModel extends Model<SubscribedModelAttributes> {
    public id!: string;
    public fullName!: string;
    public email!: string;
}

SubscribedModel.init(
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
                isEmail: true,
            },
        },
    },
    {
        sequelize: db,
        tableName: "subscribed",
        timestamps: false,
    }
);

export default SubscribedModel;