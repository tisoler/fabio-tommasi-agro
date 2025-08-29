import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize';
import DataBaseConnection from '../_lib/sequelize';

export class Categoria extends Model<
  InferAttributes<Categoria>,
  InferCreationAttributes<Categoria>
> {
  declare id: CreationOptional<number>;
  declare titulo: string;
  declare descripcion: string;
  declare idCategoriaPadre: number;
  declare imagenEscritorio: string;
  declare imagenMovil: string;
  declare href: string;
  declare mostrarHome: boolean;
}

export const initCategoria = async () => {
  const sequelize = await DataBaseConnection.getSequelizeInstance();

  Categoria.init(
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
        allowNull: false,
      },
      idCategoriaPadre: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      imagenEscritorio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagenMovil: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      href: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mostrarHome: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      tableName: 'categorias',
      timestamps: false,
    }
  );
};
