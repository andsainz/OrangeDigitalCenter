import { DataTypes, Model } from "sequelize";
import db from "../database/db";

export interface RegisteredModelAttributes {
    id: string;
    email: string;
    fullName: string;
    gender: string;
    age: string;
    postalCode: string;
    interests: string;
    hasDonePreviousActivity: string;
    isSubscribed: string;
    availableTime: string;
}

class RegisteredModel extends Model<RegisteredModelAttributes> {
    public id!: string;
    public email!: string;
    public fullName!: string;
    public gender!: string;
    public age!: string;
    public postalCode!: string;
    public interests!: string;
    public hasDonePreviousActivity!: string;
    public isSubscribed!: string;
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
        postalCode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        interests: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        hasDonePreviousActivity: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        isSubscribed: {
            type: DataTypes.STRING,
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
