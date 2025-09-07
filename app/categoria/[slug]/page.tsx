export const revalidate = 7200; // regenerar la página cada 1 hora y guardar en caché

export default async function PaginaCategoria({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <p>Pagina categoría: {slug}</p>
  );
}
