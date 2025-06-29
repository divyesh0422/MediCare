 import categories from '../data/categories';

const Categories = () => (
  <section className="p-10">
    <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {categories.map(cat => (
        <div key={cat.id} className="p-4 bg-white shadow rounded">
          <h3 className="font-bold">{cat.name}</h3>
          <p>{cat.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Categories;
