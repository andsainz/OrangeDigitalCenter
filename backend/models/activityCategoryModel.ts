import { DataTypes, Model } from "sequelize";
import db from "../database/db";

export interface ActivityCategoryModelAttributes {
    activity_id: number;
    category_id: number;
}

class ActivityCategoryModel extends Model<ActivityCategoryModelAttributes>{
    public activity_id!: number;
    public category_id!: number;
}

ActivityCategoryModel.init(
    {
        activity_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'activities',
                key: 'activity_id'
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'categories',
                key: 'category_id'
            }
        },
    },
    {
        sequelize: db, 
        tableName: "activity_categories", 
        timestamps: false,
    }
)

export default ActivityCategoryModel;