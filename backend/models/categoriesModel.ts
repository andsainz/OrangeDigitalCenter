import { DataTypes, Model } from "sequelize";
import db from "../database/db";

export interface CategoryModelAttributes {
    category_id: number;
    category_name: string
}

class CategoryModel extends Model<CategoryModelAttributes>{
    public category_id!: number;
    public category_name!: string;
}

CategoryModel.init(
    {
        category_id: {
            type: DataTypes.INTEGER,
            defaultValue: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize: db, 
        tableName: "categories", 
        timestamps: false,
    }
)

export default CategoryModel