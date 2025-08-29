import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import DataBaseConnection from '../_lib/sequelize';

export class PrecioMercado extends Model<
  InferAttributes<PrecioMercado>,
  InferCreationAttributes<PrecioMercado>
> {
  declare id: CreationOptional<number>;
  declare nombre: string;
  declare precio: number;
  declare activo: boolean;
  declare icono: string;
}

export const initPrecioMercado = async () => {
  const sequelize = await DataBaseConnection.getSequelizeInstance();

  PrecioMercado.init(
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
      precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
      activo: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
      },
      icono: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'preciosMercado',
      timestamps: false,
    }
  );
};
