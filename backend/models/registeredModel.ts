import { DataTypes, Model } from "sequelize";
import db from "../database/db";

export interface RegisteredModelAttributes {
    id: string;
    email: string;
    fullName: string;
    gender: string;
    age: string;
    residencePlace: string;
    interests: string;
    hasDonePreviousActivity: boolean;
    isSubscribed: boolean;
    subscriptionDesire: boolean;
}

class RegisteredModel extends Model<RegisteredModelAttributes> {
    public id!: string;
    public email!: string;
    public fullName!: string;
    public gender!: string;
    public age!: string;
    public residencePlace!: string;
    public interests!: string;
    public hasDonePreviousActivity!: boolean;
    public isSubscribed!: boolean;
    public subscriptionDesire!: boolean;
}

RegisteredModel.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fullName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        residencePlace: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        interests: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hasDonePreviousActivity: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        isSubscribed: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        subscriptionDesire: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },
    {
        sequelize: db,
        tableName: "registered",
        timestamps: false,
    }
)

export default RegisteredModel;
