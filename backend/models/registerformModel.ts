import { DataTypes, Model } from "sequelize";
import db from "../database/db";
export interface RegisteredModelAttributes {
    id: string;
    email: string;
    fullName: string | null;
    gender: string | null;
    age: string | null;
    postalCode: string | null;
    interests: string | null;
    hasDonePreviousActivity: string;
    isSubscribed: string;
    availableTime: string | null;
}

class RegisteredModel extends Model<RegisteredModelAttributes> {
    public id!: string;
    public email!: string;
    public fullName?: string | null;
    public gender?: string | null;
    public age?: string | null;
    public postalCode?: string | null;
    public interests?: string | null;
    public hasDonePreviousActivity!: string;
    public isSubscribed!: string;
    public availableTime?: string | null;
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

