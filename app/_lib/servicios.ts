import { Categoria, initCategoria } from "../_modelos/categoria";
import { Marca } from "../_modelos/marca";
import { initPrecioMercado, PrecioMercado } from "../_modelos/precio";
import { initUnidad, Unidad } from "../_modelos/unidad";

export const obtenerPrecios = async (): Promise<PrecioMercado[]> => {
  'use server';
  /*
  const response = await fetch('https://dolarapi.com/v1/dolares')
  if (!response.ok) {
    return [
      { nombre: 'Dólar Oficial', precio: 0, icono: 'dolarIcono' }, 
      { nombre: 'Dólar Blue', precio: 0, icono: 'dolarIcono'  }
    ];
  }

  const data = await response.json() as Record<string, string>[];
  const dolarOficial = data.find(d => d.casa === 'oficial')?.venta;
  const dolarBlue = data.find(d => d.casa === 'blue')?.venta;

  return [
    { nombre: 'Dólar Oficial', precio: isNaN(Number(dolarOficial)) ? 0 : Number(dolarOficial), icono: 'dolarIcono' },
    { nombre: 'Dólar Blue', precio: isNaN(Number(dolarBlue)) ? 0 : Number(dolarBlue), icono: 'dolarIcono' }
  ];
  */
  await initPrecioMercado();
  const precios = await PrecioMercado.findAll({
    where: { activo: true },
    order: [['id', 'ASC']],
  });

  if (!precios || precios.length === 0) return [];
  return precios;
}

export const obtenerCategorias = async () => {
  await initCategoria();
  const categorias = await Categoria.findAll({
    where: {
      mostrarHome: true,
    },
    order: [['id', 'ASC']],
  });
  if (!categorias || categorias.length === 0) return [];
  return categorias;
}

export const obtenerUnidadesOportunidades = async () => {
  await initUnidad();
  const categorias = await Unidad.findAll({
    include: [{ model: Marca, as: 'marca' }],
    where: {
      esOportunidad: true,
    },
    order: [['id', 'ASC']],
  });
  if (!categorias || categorias.length === 0) return [];
  return categorias;
}

export const obtenerUnidadesNovedades = async () => {
  await initUnidad();
  const categorias = await Unidad.findAll({
    include: [{ model: Marca, as: 'marca' }],
    where: {
      esNovedad: true,
    },
    order: [['id', 'ASC']],
  });
  if (!categorias || categorias.length === 0) return [];
  return categorias;
} 
