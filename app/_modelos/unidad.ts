import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import DataBaseConnection from '../_lib/sequelize';
import { initMarca, Marca } from './marca';

export class Unidad extends Model<
  InferAttributes<Unidad>,
  InferCreationAttributes<Unidad>
> {
  declare id: CreationOptional<number>;
  declare titulo: string;
  declare descripcion: string;
  declare imagenDestacadaUrl: string;
  declare imagenDestacadaTextoAlt: string;
  declare idCategoria: number;
  declare esOportunidad: boolean;
  declare esNovedad: boolean;
  declare nuevo: boolean;
  declare modelo: string;
  declare idMarca: number;
}

export const initUnidad = async () => {
  const sequelize = await DataBaseConnection.getSequelizeInstance();

  Unidad.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      titulo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      imagenDestacadaUrl: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagenDestacadaTextoAlt: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idCategoria: {
        type: DataTypes.INTEGER,
        allowNull: false, 
      },
      esOportunidad: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      esNovedad: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      nuevo: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      modelo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      idMarca: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: 'unidades',
      timestamps: false,
    }
  );

  // Asociar Marca a Unidad
  await initMarca();
  if (!Unidad.associations.marca) {
    Unidad.belongsTo(Marca, { foreignKey: 'idMarca', as: 'marca' });
  }
};
