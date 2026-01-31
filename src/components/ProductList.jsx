import React, { useEffect, useState } from "react";
import client from "../contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductList() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    client
      .getEntries({
        content_type: import.meta.env.VITE_CONTENTFUL_CONTENT_TYPE,
      })
      .then((res) => {
        if (!mounted) return;
        const list = (res.items || []).map((i) => ({
          id: i.sys.id,
          fields: i.fields,
        }));
        setItems(list);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    return () => (mounted = false);
  }, []);

  if (loading)
    return (
      <section id="products" className="container">
        Memuat produk...
      </section>
    );
  if (error)
    return (
      <section className="container">Gagal memuat produk: {error}</section>
    );

  return (
    <section id="products" className="container product-list">
      <h3>Produk Unggulan</h3>
      <div className="grid">
        {items.map(({ id, fields }) => {
          let img = null;
          // Support image as direct string URL (some content items store image as a URL)
          if (typeof fields.image === "string") img = fields.image;
          else img = fields.image?.fields?.file?.url || null;
          // Ensure asset url has protocol
          if (img) {
            if (img.startsWith("//")) img = `https:${img}`;
            else if (!/^https?:\/\//i.test(img)) img = `https://${img}`;
          }
          const price = fields.price || fields.harga || "Hubungi kami";
          const name = fields.name || fields.title || "Produk";
          const desc = fields.description || fields.shortDescription || "";
          const waNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
          const message = `Halo Parfume Braves, saya tertarik dengan ${name} (ID: ${id}). Bagaimana cara order?`;
          const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(
            message,
          )}`;
          return (
            <article key={id} className="card product">
              {img ? (
                <img src={img} alt={name} />
              ) : (
                <div className="placeholder" />
              )}
              <h4>{name}</h4>
              <div className="muted description">
                {typeof desc === "object" && desc !== null && desc.nodeType
                  ? documentToReactComponents(desc)
                  : desc}
              </div>
              <div className="product-meta">
                <div className="price">{price}</div>
                <a
                  className="btn"
                  href={waLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FontAwesomeIcon icon="shopping-bag" /> Beli
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
