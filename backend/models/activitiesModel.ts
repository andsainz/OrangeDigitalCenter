import { DataTypes, Model } from "sequelize";
import db from "../database/db";
import UserModel from "./usersModel";
import AdminModel from "./adminsModel";
import CategoryModel from "./categoriesModel";
export interface ActivityModelAttributes {
    activity_id: number;
    category_id: number;
    activity_image: any;
    activity_title: string;
    activity_description: string;
    activity_date: Date;
    start_time: string;
    end_time: string,
    activity_content: string,
    available_places: number;
}

class ActivityModel extends Model<ActivityModelAttributes>{
    public activity_id!: number;
    public category_id!: number;
    public activity_image!: any;
    public activity_title!: string;
    public activity_description!: string;
    public activity_date!: Date;
    public start_time!: string;
    public end_time!: string;
    public activity_content!: string;
    public available_places!: number;
}

ActivityModel.init(
    {
        activity_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        activity_image: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        activity_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activity_description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activity_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        start_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        end_time: {
            type: DataTypes.TIME,
            allowNull: false,
        },
        activity_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        available_places: {
            type: DataTypes.INTEGER,
            allowNull: false
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