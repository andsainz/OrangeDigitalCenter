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
    hasDonePreviousActivity: number;
    isSubscribed: number;
    subscriptionDesire: number;
    availableTime: string;
}

class RegisteredModel extends Model<RegisteredModelAttributes> {
    public id!: string;
    public email!: string;
    public fullName!: string;
    public gender!: string;
    public age!: string;
    public residencePlace!: string;
    public interests!: string;
    public hasDonePreviousActivity!: number;
    public isSubscribed!: number;
    public subscriptionDesire!: number;
    public availableTime!: string;
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
            validate: {
                isEmail: true,
            },
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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        isSubscribed: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        subscriptionDesire: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        availableTime: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize: db,
        tableName: "registered",
        timestamps: false,
    }
)

export default RegisteredModel;
