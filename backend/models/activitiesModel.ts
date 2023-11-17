import { DataTypes, Model } from "sequelize";
import db from "../database/db";
import UserModel from "./usersModel";
import AdminModel from "./adminsModel";
import CategoryModel from "./categoriesModel";

export interface ActivityModelAttributes {
    activity_id: number;
    category_id: number;
    activity_image: string;
    activity_title: string;
    activity_description: string;
    activity_date: string;
    start_time: string;
    end_time: string,
    activity_link: string,
    activity_content: string,
    activity_logos: string
}

class ActivityModel extends Model<ActivityModelAttributes>{
    public activity_id!: number;
    public category_id!: number;
    public activity_image!: string;
    public activity_title!: string;
    public activity_description!: string;
    public activity_date!: string;
    public start_time!: string;
    public end_time!: string;
    public activity_link!: string;
    public activity_content!: string;
    public activity_logos!: string
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
            type: DataTypes.STRING,
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
        activity_link: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activity_content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        activity_logos: {
            type: DataTypes.STRING,
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