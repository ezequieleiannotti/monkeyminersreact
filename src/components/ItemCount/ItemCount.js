import "./ItemCount.css";

export const ItemCount = ({ stock, onAdd, setItems, items, initial }) => {
  const addItem = () => {
    items < stock && setItems(items + 1);
  };

  const removeItem = () => {
    items > initial && setItems(items - 1);
  };

  return (
    <div className="item-count-container d-grid gap-2 m-auto">
      <div className="d-flex justify-content-between mb-2 text-primary">
        <i className="far fa-minus-square icon" onClick={removeItem}></i>
        <span className="text-secondary">{items}</span>
        <i className="far fa-plus-square icon" onClick={addItem}></i>
      </div>
      <button type="button" className="btn btn-primary" onClick={onAdd}>
        Agregar al carrito
      </button>
    </div>
  );
};
