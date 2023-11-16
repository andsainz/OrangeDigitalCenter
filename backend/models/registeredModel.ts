import { DataTypes, Model } from "sequelize";
import db from "../database/db";

export interface RegisteredModelAttributes {
    id: string;
    email: string;
    fullName: string;
    gender: string;
    age: number;
    residencePlace: string;
    interests: string;
    availabilityTime: string;
}

class RegisteredModel extends Model<RegisteredModelAttributes> {
    public id!: string;
    public email!: string;
    public fullName!: string;
    public gender!: string;
    public age!: number;
    public residencePlace!: string;
    public interests!: string;
    public availabilityTime!: string;
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
        availabilityTime: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize: db,
        tableName: "registered",
        timestamps: false,
    }
)

export default RegisteredModel