import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import DataBaseConnection from '../_lib/sequelize';

export class Marca extends Model<
  InferAttributes<Marca>,
  InferCreationAttributes<Marca>
> {
  declare id: CreationOptional<number>;
  declare nombre: string;
}

export const initMarca = async () => {
  const sequelize = await DataBaseConnection.getSequelizeInstance();

  Marca.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'marcas',
      timestamps: false,
    }
  );
};
