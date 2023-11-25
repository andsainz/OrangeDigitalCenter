import { DataTypes, Model } from "sequelize";
import db from "../database/db";
export interface RegisteredModelAttributes {
    id: string;
    email: string;
    fullName: string | undefined;
    gender: string | undefined;
    age: string | undefined;
    postalCode: string | undefined;
    interests: string | undefined;
    hasDonePreviousActivity: string;
    isSubscribed: string;
    availableTime: string | undefined;
}

class RegisteredModel extends Model<RegisteredModelAttributes> {
    public id!: string;
    public email!: string;
    public fullName?: string | undefined;
    public gender?: string | undefined;
    public age?: string | undefined;
    public postalCode?: string | undefined;
    public interests?: string | undefined;
    public hasDonePreviousActivity!: string;
    public isSubscribed!: string;
    public availableTime?: string | undefined;
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
        },
        gender: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.STRING,
        },
        postalCode: {
            type: DataTypes.STRING,
        },
        interests: {
            type: DataTypes.STRING,
        },
        hasDonePreviousActivity: {
            type: DataTypes.STRING,
        },
        isSubscribed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        availableTime: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize: db,
        tableName: "registered",
        timestamps: false,
    }
)

RegisteredModel.addHook('beforeValidate', (registeredModel, options) => {
    const model = registeredModel as any;
    if (model.hasDonePreviousActivity === 'true') {
        Object.keys(model.dataValues).forEach((key) => {
            if (key !== 'email' && key !== 'isSubscribed') {
                model[key] = null;
            }
        });
    }
});

export default RegisteredModel;

