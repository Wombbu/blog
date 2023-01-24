import { Card } from "@/components/Card/Card";

export const BlogPreview = () => (
  <section className="max-w-screen-lg">
    <h2 className="font-primary text-3xl font-medium text-black mb-6">
      Artikkelit
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card />
      <Card />
      <Card />
    </div>
  </section>
);
