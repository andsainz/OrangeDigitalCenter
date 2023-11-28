import { DataTypes, Model } from "sequelize";
import db from "../database/db";
import AdminModel from "./adminsModel";
import CategoryModel from "./categoriesModel";
export interface ActivityModelAttributes {
    activity_id: number;
    category_name: string;
    activity_image: any;
    activity_title: string;
    activity_description_short: string;
    activity_description_long: string;
    activity_date: string;
    start_time: string;
    end_time: string,
    activity_content: string,
    available_places: number;
}

class ActivityModel extends Model<ActivityModelAttributes>{
    public activity_id!: number;
    public category_name!: string;
    public activity_image!: any;
    public activity_title!: string;
    public activity_description_short!: string;
    public activity_description_long!: string;
    public activity_date!: string;
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
        category_name: {
            type: DataTypes.STRING,
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
        activity_description_short: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        activity_description_long: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        activity_date: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        start_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        end_time: {
            type: DataTypes.STRING,
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

ActivityModel.belongsTo(AdminModel, { foreignKey: 'id' });
ActivityModel.belongsTo(CategoryModel, { foreignKey: 'category_id' });

export default ActivityModel