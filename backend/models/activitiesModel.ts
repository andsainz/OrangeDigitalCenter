import { DataTypes, Model } from "sequelize";
import db from "../database/db";
import UserModel from "./usersModel";
import AdminModel from "./adminsModel";
import CategoryModel from "./categoriesModel";

export interface ActivityModelAttributes {
    activity_id: number;
    category_id: number;
    activity_image: string;
    title: string;
    subtitle: string;
    activity_date: string;
    available_places: number;
}

class ActivityModel extends Model<ActivityModelAttributes>{
    public activity_id!: number;
    public category_id!: number;
    public activity_image!: string;
    public title!: string;
    public subtitle!: string;
    public activity_date!: string;
    public available_places!: number;
}

ActivityModel.init(
    {
        activity_id: {
            type: DataTypes.INTEGER,
            defaultValue: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            defaultValue: DataTypes.INTEGER,
            allowNull: false
        },
        activity_image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        subtitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activity_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        available_places: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        sequelize: db, 
        tableName: "activities", 
        timestamps: false,
    }
)

ActivityModel.belongsTo(UserModel, { foreignKey: 'id' });
ActivityModel.belongsTo(AdminModel, { foreignKey: 'id' });
ActivityModel.belongsTo(CategoryModel, { foreignKey: 'category_id' });

export default ActivityModel