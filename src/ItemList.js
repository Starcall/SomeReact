import Item from "./Item";

export default function ItemList(props) {
    const items_list = Object.entries(props.items).map((el) => {
        return (
          <li className="ui-item-list" key={el[1].name}>
            <button
              id={el[1].name}
              className="item-button"
              onClick={props.handleDeleteClick}
            >
              Удалить
            </button>
            <Item info={el[1]} />
          </li>
        );
      });
    return <ul className="ui-list">{items_list}</ul>
}